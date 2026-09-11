/*
 * The lexicon has to stay honest about three things.
 *
 * It exists because 56% of the word forms in the dialogue corpus appear
 * exactly once, so an entry that is *not* drawn from the corpus is not filling
 * the gap this file was created to fill — it is just a word someone liked.
 * The `seen` count is what keeps that checkable, so it has to be real.
 *
 * The other two are ordinary hygiene that free text always loses at scale: the
 * themes have to come from the shared taxonomy, or a learner filtering words
 * by "transport-and-travel" and filtering lessons by it get answers about
 * different subjects; and nouns have to carry a gender, because a noun learned
 * without one is half a word.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");

const { dataSource, lexiconBlockFiles, read } = require("./data-source.js");
const bundle = `${dataSource({ schema: true })}\n({ lessons, lexiconItems, LEXICON_SLOTS, LEXICON_CLASSES, taxonomy: TAXONOMY });`;
const { lessons, lexiconItems, LEXICON_SLOTS, LEXICON_CLASSES, taxonomy } =
  vm.runInNewContext(bundle, {}, { filename: "parcero-lexicon-bundle.js" });

const slot = (item, name) => item[LEXICON_SLOTS.indexOf(name)];
const isText = (value) => typeof value === "string" && value.trim().length > 0;

test("every lexicon entry fills every slot it should", () => {
  const offenders = [];
  for (const item of lexiconItems) {
    const term = slot(item, "term") || "(unnamed)";
    if (item.length !== LEXICON_SLOTS.length) offenders.push(`${term}: ${item.length} slots, expected ${LEXICON_SLOTS.length}`);
    for (const name of ["term", "english", "class", "theme", "level", "note"]) {
      if (!isText(slot(item, name))) offenders.push(`${term}: ${name} is empty`);
    }
    if (!Number.isInteger(slot(item, "seen"))) offenders.push(`${term}: seen is not a whole number`);
  }
  assert.deepStrictEqual(offenders, []);
});

test("lexicon classes and themes come from the closed lists", () => {
  const offenders = [];
  for (const item of lexiconItems) {
    const term = slot(item, "term");
    if (!LEXICON_CLASSES.includes(slot(item, "class"))) offenders.push(`${term}: class "${slot(item, "class")}"`);
    if (!taxonomy.domain.includes(slot(item, "theme"))) offenders.push(`${term}: theme "${slot(item, "theme")}"`);
    if (!["foundation", "independent", "extension"].includes(slot(item, "level"))) offenders.push(`${term}: level "${slot(item, "level")}"`);
  }
  assert.deepStrictEqual(offenders, []);
});

/*
 * A noun without its gender is the failure this file exists to prevent, so it
 * is worth a test of its own rather than a line in the one above.
 */
test("every lexicon noun carries a gender, and nothing else does", () => {
  const offenders = [];
  for (const item of lexiconItems) {
    const term = slot(item, "term");
    const gender = slot(item, "gender");
    if (slot(item, "class") === "noun") {
      if (!["m", "f", "m/f"].includes(gender)) offenders.push(`${term}: noun with gender "${gender}"`);
      if (!/^(el|la|los|las|un|una)\s/.test(String(term))) offenders.push(`${term}: noun without its article`);
    } else if (gender !== "") {
      offenders.push(`${term}: ${slot(item, "class")} should not have a gender`);
    }
  }
  assert.deepStrictEqual(offenders, []);
});

test("no word is in the lexicon twice", () => {
  const seen = new Map();
  const duplicates = [];
  for (const item of lexiconItems) {
    const key = String(slot(item, "term")).toLowerCase();
    if (seen.has(key)) duplicates.push(key);
    seen.set(key, true);
  }
  assert.deepStrictEqual(duplicates, []);
});

/*
 * The point of the whole file: each entry must be a word the course already
 * says. An entry nobody ever meets in a dialogue is a word list bolted on the
 * side, which is the thing this was built instead of.
 */
test("every lexicon entry is a word the lessons actually use", () => {
  const corpus = new Set();
  for (const lesson of lessons) {
    for (const row of lesson.es && lesson.es.dialogue ? lesson.es.dialogue : []) {
      for (const word of String(row.target || "").toLowerCase().match(/[a-záéíóúñü]+/g) || []) corpus.add(word);
    }
  }
  const missing = [];
  for (const item of lexiconItems) {
    const term = String(slot(item, "term")).toLowerCase();
    /* Strip the article a noun is stored with, then accept the entry if any
       word of it is spoken somewhere — plurals and gendered pairs mean the
       stored form and the spoken form are not always identical. */
    const words = term.replace(/^(el|la|los|las|un|una)\s+/, "").split(/[\s/]+/).filter(Boolean);
    if (!words.some((word) => corpus.has(word))) missing.push(term);
  }
  assert.deepStrictEqual(missing, [], "these are not spoken in any lesson dialogue");
});

/*
 * The tests load the blocks by globbing the directory; the browser loads them
 * from script tags. Nothing makes those two agree on its own, so a block that
 * exists on disk and is missing from the page passes every test here while
 * being invisible to every actual learner. This is the check that stops that,
 * and it is the same one the lesson blocks already have.
 */
test("every lexicon block is loaded by the page, after the array it pushes onto", () => {
  const html = read("index.html");
  const declaration = html.indexOf('src="data/lexicon.js"');
  assert.ok(declaration !== -1, "index.html does not load data/lexicon.js");

  for (const file of lexiconBlockFiles()) {
    const at = html.indexOf(`src="${file}"`);
    assert.ok(at !== -1, `index.html does not load ${file}`);
    assert.ok(at > declaration, `${file} is loaded before the array it pushes onto`);
  }
});

test("the page loads no lexicon block that is not on disk", () => {
  const html = read("index.html");
  const referenced = [...html.matchAll(/src="(data\/lexicon\/[^"]+)"/g)].map((match) => match[1]);
  const onDisk = new Set(lexiconBlockFiles());
  const ghosts = referenced.filter((file) => !onDisk.has(file));
  assert.deepStrictEqual(ghosts, [], "index.html loads lexicon blocks that do not exist");
});
