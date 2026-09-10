/*
 * The gate a lexicon block has to pass before it counts.
 *
 * Same job as scripts/check-lesson-block.js: an author — human or agent —
 * runs this against the one file they wrote and gets told what is wrong,
 * without loading the rest of the course and without a green suite hiding a
 * bad block among two hundred good ones.
 *
 * The rule that matters most is the last one. This file exists because 56% of
 * the word forms in the dialogue corpus appear exactly once, so an entry that
 * is not drawn from the corpus does not fill that gap — it is a word someone
 * liked the look of. Every term has to be spoken somewhere in a lesson, and
 * the `seen` count has to be the real number.
 *
 * Run: node scripts/check-lexicon-block.js data/lexicon/01-food-and-drink.js
 */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const { read, dataSource } = require(path.join(root, "test", "data-source.js"));

const target = process.argv[2];
if (!target) {
  console.error("usage: node scripts/check-lexicon-block.js data/lexicon/<file>.js");
  process.exit(2);
}

const relative = target.replace(/\\/g, "/").replace(/^\.\//, "");
const full = path.join(root, relative);
if (!fs.existsSync(full)) {
  console.error(`no such file: ${relative}`);
  process.exit(2);
}

/* The block alone, on top of the declarations it needs — not the whole
   course, so one author's mistake is reported against one author's file. */
let block;
try {
  block = vm.runInNewContext(
    `${read("data/taxonomy.js")}\n${read("data/lexicon.js")}\n${fs.readFileSync(full, "utf8")}\n({ lexiconItems, LEXICON_SLOTS, LEXICON_CLASSES, taxonomy: TAXONOMY });`,
    {},
    { filename: relative }
  );
} catch (error) {
  console.error(`${relative} does not load: ${error.message}`);
  process.exit(1);
}

const { lexiconItems, LEXICON_SLOTS, LEXICON_CLASSES, taxonomy } = block;
const slot = (item, name) => item[LEXICON_SLOTS.indexOf(name)];
const isText = (value) => typeof value === "string" && value.trim().length > 0;

/* Every word the course actually says, and how often. */
const { lessons } = vm.runInNewContext(`${dataSource({ schema: true })}\n({ lessons });`);
const spoken = new Map();
for (const lesson of lessons) {
  for (const row of lesson.es && lesson.es.dialogue ? lesson.es.dialogue : []) {
    for (const word of String(row.target || "").toLowerCase().match(/[a-záéíóúñü]+/g) || []) {
      spoken.set(word, (spoken.get(word) || 0) + 1);
    }
  }
}

const problems = [];
const complain = (term, message) => problems.push(`${term}: ${message}`);

if (!lexiconItems.length) problems.push(`${relative} adds no entries`);

const seenTerms = new Set();
for (const item of lexiconItems) {
  const term = String(slot(item, "term") || "(unnamed)");

  if (!Array.isArray(item) || item.length !== LEXICON_SLOTS.length) {
    complain(term, `has ${item.length} slots, expected ${LEXICON_SLOTS.length} (${LEXICON_SLOTS.join(", ")})`);
    continue;
  }
  for (const name of ["term", "english", "class", "theme", "level", "note"]) {
    if (!isText(slot(item, name))) complain(term, `${name} is empty`);
  }

  const key = term.toLowerCase();
  if (seenTerms.has(key)) complain(term, "appears twice in this block");
  seenTerms.add(key);

  const wordClass = slot(item, "class");
  if (!LEXICON_CLASSES.includes(wordClass)) complain(term, `class "${wordClass}" is not in LEXICON_CLASSES`);
  if (!taxonomy.domain.includes(slot(item, "theme"))) complain(term, `theme "${slot(item, "theme")}" is not in data/taxonomy.js`);
  if (!["foundation", "independent", "extension"].includes(slot(item, "level"))) complain(term, `level "${slot(item, "level")}" is not a curriculum tier`);

  const gender = slot(item, "gender");
  if (wordClass === "noun") {
    if (!["m", "f", "m/f"].includes(gender)) complain(term, `is a noun but its gender is "${gender}"`);
    if (!/^(el|la|los|las|un|una)\s/.test(term)) complain(term, "is a noun and must be stored with its article");
  } else if (gender !== "") {
    complain(term, `is not a noun, so gender must be "" (found "${gender}")`);
  }

  const note = String(slot(item, "note") || "");
  if (note.length < 25) complain(term, "note is too short to tell a learner anything they would get wrong");

  /* The reason the file exists: it has to be a word the course already says,
     and `seen` has to be the real count rather than a plausible number. */
  const bareTerm = term.toLowerCase().replace(/^(el|la|los|las|un|una)\s+/, "");
  const words = bareTerm.split(/[\s/]+/).filter(Boolean);
  const hits = words.map((word) => spoken.get(word) || 0);
  const total = hits.reduce((sum, n) => sum + n, 0);
  if (total === 0) {
    complain(term, "is not spoken in any lesson dialogue — the lexicon consolidates words the course uses, it does not add new ones");
  } else {
    const claimed = slot(item, "seen");
    if (!Number.isInteger(claimed)) complain(term, `seen is "${claimed}", which is not a whole number`);
    else if (claimed !== total) complain(term, `claims seen ${claimed} but the corpus has ${total}`);
  }
}

if (problems.length) {
  console.error(`${relative}: ${problems.length} problem(s)`);
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}

console.log(`${relative}: ${lexiconItems.length} entries, all clean`);
