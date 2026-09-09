const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const bundle = `${read("data/lessons.js")}\n${read("data/curriculum.js")}\n({ lessons, curriculum, fluencyItems, matureItems });`;
const { lessons, curriculum, fluencyItems, matureItems } = vm.runInNewContext(bundle, {}, { filename: "parcero-data-bundle.js" });

const directions = ["es", "en"];
const isText = (value) => typeof value === "string" && value.trim().length > 0;
const duplicates = (list) => [...new Set(list.filter((item, index) => list.indexOf(item) !== index))];

test("lessons are present and uniquely identified", () => {
  assert.ok(Array.isArray(lessons) && lessons.length > 1, "expected more than one lesson");
  const ids = lessons.map((lesson) => lesson.id);
  assert.deepStrictEqual(duplicates(ids), [], "lesson ids must be unique");
  for (const id of ids) assert.match(id, /^[a-z0-9-]+$/, `lesson id "${id}" must be kebab-case`);
});

test("every lesson carries its teaching metadata", () => {
  for (const lesson of lessons) {
    assert.ok(isText(lesson.level), `${lesson.id}: missing level`);
    assert.ok(isText(lesson.domain), `${lesson.id}: missing domain`);
    assert.ok(isText(lesson.register), `${lesson.id}: missing register`);
    assert.ok(lesson.skills?.length, `${lesson.id}: missing skills`);
    assert.ok(lesson.pathways?.length, `${lesson.id}: missing pathways`);
    assert.ok(["pending", "reviewed"].includes(lesson.review), `${lesson.id}: review must be "pending" or "reviewed"`);
  }
});

test("every lesson teaches in both directions", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const content = lesson[direction];
      assert.ok(content, `${lesson.id}: missing "${direction}" content`);
      assert.ok(isText(content.title), `${lesson.id}.${direction}: missing title`);
      assert.ok(isText(content.situation), `${lesson.id}.${direction}: missing situation`);
      assert.ok(isText(content.note), `${lesson.id}.${direction}: missing culture note`);
    }
  }
});

test("dialogue lines pair target language, translation and pronunciation", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { dialogue } = lesson[direction];
      assert.ok(dialogue.length >= 2, `${lesson.id}.${direction}: a dialogue needs at least two lines`);
      dialogue.forEach((line, index) => {
        assert.strictEqual(line.length, 4, `${lesson.id}.${direction} line ${index + 1}: expected [speaker, target, translation, pronunciation]`);
        line.forEach((cell, cellIndex) => assert.ok(isText(cell), `${lesson.id}.${direction} line ${index + 1}: empty value at position ${cellIndex}`));
      });
    }
  }
});

test("vocabulary entries pair a term with an explanation", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { vocabulary } = lesson[direction];
      assert.ok(vocabulary.length >= 2, `${lesson.id}.${direction}: needs at least two vocabulary entries`);
      for (const entry of vocabulary) {
        assert.strictEqual(entry.length, 2, `${lesson.id}.${direction}: expected [term, explanation]`);
        entry.forEach((cell) => assert.ok(isText(cell), `${lesson.id}.${direction}: empty vocabulary value`));
      }
    }
  }
});

test("practice questions have a valid answer among distinct choices", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { prompt, choices, answer } = lesson[direction];
      assert.ok(isText(prompt), `${lesson.id}.${direction}: missing practice prompt`);
      assert.ok(choices.length >= 2, `${lesson.id}.${direction}: needs at least two choices`);
      assert.deepStrictEqual(duplicates(choices), [], `${lesson.id}.${direction}: choices must be distinct`);
      assert.ok(Number.isInteger(answer) && answer >= 0 && answer < choices.length, `${lesson.id}.${direction}: answer index ${answer} is out of range`);
    }
  }
});

test("the verb curriculum is complete and uniquely identified", () => {
  assert.ok(Array.isArray(curriculum) && curriculum.length > 0);
  const ids = curriculum.map((verb) => verb.id);
  assert.deepStrictEqual(duplicates(ids), [], "verb ids must be unique");
  for (const verb of curriculum) {
    assert.ok(isText(verb.spanish) && isText(verb.english), `${verb.id}: missing translation pair`);
    for (const form of ["presentYo", "preteriteYo", "participle"]) {
      assert.ok(isText(verb.forms?.[form]), `${verb.id}: missing ${form}`);
    }
    for (const label of ["level", "register", "regionality"]) {
      assert.ok(isText(verb[label]), `${verb.id}: missing ${label}`);
    }
  }
});

test("reference lists match the shape the renderers expect", () => {
  assert.ok(fluencyItems.length > 0);
  for (const item of fluencyItems) {
    assert.strictEqual(item.length, 5, "expected [phrase, meaning, type, region, note]");
    item.forEach((cell) => assert.ok(isText(cell)));
  }
  assert.ok(matureItems.length > 0);
  for (const item of matureItems) {
    assert.strictEqual(item.length, 4, "expected [phrase, equivalent, severity, note]");
    item.forEach((cell) => assert.ok(isText(cell)));
  }
});

test("every element app.js looks up exists in index.html", () => {
  const app = read("app.js");
  const html = read("index.html");
  const ids = new Set([...app.matchAll(/\$\("#([\w-]+)"\)/g)].map((match) => match[1]));
  assert.ok(ids.size > 0, "expected app.js to query elements by id");
  for (const id of ids) {
    assert.ok(html.includes(`id="${id}"`), `index.html is missing #${id}, which app.js expects`);
  }
});

test("app.js renders the whole lesson set rather than a single hard-coded lesson", () => {
  const app = read("app.js");
  assert.doesNotMatch(app, /=\s*lessons\[0\]\s*;/, "app.js must not pin the view to lessons[0]");
  assert.match(app, /lessons\.length/, "app.js should size progress against the full lesson list");
});

/*
 * The verb list was seeded from a frequency list and has never had a Colombian
 * speaker over it. These tests guard the two things that follow from that: the
 * entries that are demonstrably wrong stay fixed, and the labels nobody has
 * checked are not shown to learners as though they were.
 */
test("English glosses are English", () => {
  // A gloss that reads like a Spanish infinitive means the wrong column was
  // filled in. "live/trabajar" shipped that way.
  const spanishInfinitive = /^[a-záéíóúñ]+(?:ar|er|ir)$/;
  const englishExceptions = new Set(["answer", "offer", "enter", "remember", "consider", "deliver", "gather", "hear", "prefer", "matter", "discover", "wear", "suffer", "cover", "order", "differ", "transfer"]);
  for (const verb of curriculum) {
    for (const sense of verb.english.split("/").map((part) => part.trim())) {
      assert.ok(isText(sense), `${verb.spanish} has an empty sense in "${verb.english}"`);
      if (spanishInfinitive.test(sense) && !englishExceptions.has(sense)) {
        assert.fail(`${verb.spanish} is glossed "${verb.english}" — "${sense}" looks like Spanish`);
      }
    }
    const senses = verb.english.split("/").map((part) => part.trim());
    const redundant = senses.some((a, i) => senses.some((b, j) => i !== j && a === b));
    assert.ok(!redundant, `${verb.spanish} repeats a sense in "${verb.english}"`);
  }
});

test("first-person forms are plausible Spanish", () => {
  // "oo" was published as the yo form of oír for as long as the list existed.
  for (const verb of curriculum) {
    const yo = verb.forms.presentYo;
    assert.match(yo, /[oyeéí]$/, `${verb.spanish}: "${yo}" is not a first-person singular`);
    assert.ok(!/(.)\1$/.test(yo), `${verb.spanish}: "${yo}" doubles its final letter`);
    // A strong vowel before -ido needs the accent, or the syllable collapses.
    assert.ok(!/[aeo]ido$/.test(verb.forms.participle),
      `${verb.spanish}: participle "${verb.forms.participle}" is missing its accent`);
  }
});

test("labels nobody has reviewed are not rendered as fact", () => {
  const unreviewed = curriculum.filter((verb) => verb.reviewStatus);
  assert.ok(unreviewed.length > 0, "this test is meaningless once every verb is reviewed — delete it then");

  // Every unreviewed verb still carries the seeded placeholder, identical
  // across the list. Rendering it would tell 200 different lies in one voice.
  const registers = new Set(unreviewed.map((verb) => verb.register));
  const regions = new Set(unreviewed.map((verb) => verb.regionality));
  assert.equal(registers.size, 1, "unreviewed verbs should still share one placeholder register");
  assert.equal(regions.size, 1, "unreviewed verbs should still share one placeholder regionality");

  const app = read("app.js");
  const tags = app.match(/function verbTags\(verb\)[\s\S]*?\n\}/);
  assert.ok(tags, "app.js must build verb tags through verbTags()");
  assert.match(tags[0], /if \(!verb\.reviewStatus\)/,
    "register and regionality must be withheld while the verb is unreviewed");
  assert.ok(!/\$\{verb\.register\}/.test(app.replace(tags[0], "")),
    "nothing outside verbTags may render the unreviewed register");
  assert.ok(!/\$\{verb\.regionality\}/.test(app.replace(tags[0], "")),
    "nothing outside verbTags may render the unreviewed regionality");
});

test("the page does not promise a review it has not done", () => {
  // The note used to say labels are reviewed "before publication" while 200
  // unreviewed labels were on screen.
  const { UI_STRINGS } = require("../i18n.js");
  for (const language of Object.keys(UI_STRINGS)) {
    const note = UI_STRINGS[language]["library.sourceNote.after"];
    assert.ok(isText(note), `${language} is missing the source note`);
    assert.ok(!/before publication|antes de publicarse/.test(note),
      `${language} still claims labels are reviewed before publication`);
  }
});
