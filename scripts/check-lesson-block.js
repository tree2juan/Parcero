/*
 * Check one lesson block file on its own.
 *
 *   node scripts/check-lesson-block.js data/lessons/02-foundation-doing.js
 *
 * The test suite is the real gate, but it loads every block at once. While the
 * catalogue is being written that is useless to an author: a half-finished file
 * three directories away fails the run and buries the error you were looking
 * for. This loads the schema, the curriculum and one block, and reports only on
 * that block.
 *
 * It deliberately repeats rules that live in test/. The duplication is the
 * point -- this has to work when the rest of the catalogue does not parse.
 */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const { wrongLanguage } = require("./prose-language.js");

const target = process.argv[2];
if (!target) {
  console.error("usage: node scripts/check-lesson-block.js <path-to-block-file>");
  process.exit(2);
}

const problems = [];
const fail = (message) => problems.push(message);

let loaded;
try {
  const bundle = [
    read("data/lesson-schema.js"),
    read("data/curriculum.js"),
    "const lessons = [];",
    "function markSource(items, file) { for (const item of items) if (!item.sourceFile) { item.sourceFile = file; } }",
    read(target.replace(/\\/g, "/")),
    "({ lessons, curriculum, schema: ParceroLessonSchema });"
  ].join("\n");
  loaded = vm.runInNewContext(bundle, {}, { filename: "block-check.js" });
} catch (error) {
  console.error(`${target} does not load: ${error.message}`);
  process.exit(1);
}

const { lessons, curriculum, schema } = loaded;
const known = new Set(curriculum.map((entry) => entry.spanish));
const directions = ["es", "en"];

/*
 * The stamp that tells the review tooling which file to send a native speaker
 * to. Without it every flag against this block names data/lessons.js, at an
 * index that file does not have.
 */
const relative = target.replace(/\\/g, "/").replace(/^\.\//, "");
if (!read(relative).includes(`markSource(lessons, "${relative}")`)) {
  fail(`the file must end with: markSource(lessons, "${relative}");`);
}

/*
 * Slots that must be present in both directions, and how many the tests demand.
 * `practice` is the normalized name: the schema folds the main prompt/choices/
 * answer and the practiceExtra rows into one array, so 4 here means one main
 * question plus the three extras.
 */
const MINIMUMS = {
  dialogue: 6, vocabulary: 7, culture: 3, pitfalls: 3, variations: 3, practice: 4
};
const MIRRORED = ["dialogue", "vocabulary", "culture", "pitfalls", "variations", "practice"];
const SETTING_KEYS = ["who", "what", "when", "where", "why"];
const ADDRESS_KEYS = ["form", "who", "why", "ifYouSwitch"];
const SEGMENT_MIN = 240;
const SEGMENT_MAX = 520;

if (!lessons.length) fail("the file pushed no lessons");

const answerSpread = new Map();

for (const lesson of lessons) {
  const at = lesson.id || "(a lesson with no id)";

  for (const key of ["id", "level", "domain", "register", "verb"]) {
    if (typeof lesson[key] !== "string" || !lesson[key].trim()) fail(`${at}: missing ${key}`);
  }
  if (!lesson.skills?.length) fail(`${at}: missing skills`);
  if (!lesson.pathways?.length) fail(`${at}: missing pathways`);
  if (!["pending", "reviewed"].includes(lesson.review)) {
    fail(`${at}: review must be the string "pending" or "reviewed", not ${JSON.stringify(lesson.review)}`);
  }
  if (lesson.verb && !known.has(lesson.verb)) {
    fail(`${at}: the verb "${lesson.verb}" is not in data/curriculum.js`);
  }

  for (const direction of directions) {
    const raw = lesson[direction];
    if (!raw) { fail(`${at}: no ${direction} direction`); continue; }
    if (Object.prototype.hasOwnProperty.call(raw, "segments")) {
      fail(`${at}.${direction}: authors a segments key; segments are computed, never written`);
    }

    const content = schema.normalizeContent(raw);
    const where = `${at}.${direction}`;

    for (const [slot, least] of Object.entries(MINIMUMS)) {
      const rows = content[slot] || [];
      if (rows.length < least) fail(`${where}: ${rows.length} ${slot}, needs at least ${least}`);
    }

    if (!content.title?.trim()) fail(`${where}: missing title`);
    if (!content.situation?.trim()) fail(`${where}: missing situation`);
    if (!content.note?.trim()) fail(`${where}: missing note`);

    for (const key of SETTING_KEYS) {
      if (!content.setting?.[key]?.trim()) fail(`${where}: the setting never answers "${key}"`);
    }
    for (const key of ADDRESS_KEYS) {
      if (!content.address?.[key]?.trim()) fail(`${where}: address is missing "${key}"`);
    }
    if (direction === "en" && content.address?.form !== "mixed") {
      fail(`${where}: English has one second-person form, so address.form must be "mixed"`);
    }

    for (const [index, row] of (content.dialogue || []).entries()) {
      for (const slot of ["speaker", "target", "translation", "pronunciation", "literal", "why"]) {
        if (!row[slot]?.trim()) fail(`${where}: dialogue ${index} is missing "${slot}"`);
      }
    }
    for (const [index, row] of (content.vocabulary || []).entries()) {
      for (const slot of ["term", "explanation", "literal", "useWhen", "avoidWhen", "register", "region"]) {
        if (!row[slot]?.trim()) fail(`${where}: vocabulary ${index} is missing "${slot}"`);
      }
      if (!row.example?.target?.trim() || !row.example?.translation?.trim()) {
        fail(`${where}: vocabulary ${index} has no worked example`);
      }
      if (!Array.isArray(row.related) || row.related.length < 3) {
        fail(`${where}: vocabulary ${index} needs at least 3 related terms`);
      }
    }

    const questions = (content.practice || []).map((row, index) => ({
      ...row,
      at: `${where} question ${index}`
    }));
    for (const question of questions) {
      if (!question.prompt?.trim()) { fail(`${question.at}: no prompt`); continue; }
      const choices = question.choices || [];
      if (choices.length < 3) fail(`${question.at}: needs at least 3 choices`);
      if (new Set(choices).size !== choices.length) fail(`${question.at}: repeats a choice`);
      if (!Number.isInteger(question.answer) || !choices[question.answer]) {
        fail(`${question.at}: answer ${question.answer} is not one of the choices`);
        continue;
      }
      answerSpread.set(question.answer, (answerSpread.get(question.answer) || 0) + 1);
      const lengths = choices.map((choice) => choice.length);
      const rival = Math.max(...lengths.filter((_, index) => index !== question.answer));
      if (lengths[question.answer] > rival * 1.5) {
        fail(`${question.at}: the correct choice is ${lengths[question.answer]} characters against a `
          + `longest distractor of ${rival}. Lengthen the distractors rather than trimming the answer.`);
      }
    }

    const segments = schema.deriveSegments(content);
    if (segments.length < 3) {
      fail(`${where}: only ${segments.length} study segments; the direction is too short (aim for 1,400+ words)`);
    }
    for (const [index, segment] of segments.entries()) {
      if (segment.words < SEGMENT_MIN || segment.words > SEGMENT_MAX) {
        fail(`${where}: segment ${index} is ${segment.words} words, outside ${SEGMENT_MIN}-${SEGMENT_MAX}`);
      }
    }
  }

  for (const slot of MIRRORED) {
    const es = (schema.normalizeContent(lesson.es || {})[slot] || []).length;
    const en = (schema.normalizeContent(lesson.en || {})[slot] || []).length;
    if (es !== en) fail(`${at}: ${slot} has ${es} rows in es and ${en} in en; the directions must mirror`);
  }
  const esVocab = schema.normalizeContent(lesson.es || {}).vocabulary || [];
  const enVocab = schema.normalizeContent(lesson.en || {}).vocabulary || [];
  for (let index = 0; index < Math.min(esVocab.length, enVocab.length); index += 1) {
    const es = (esVocab[index].related || []).length;
    const en = (enVocab[index].related || []).length;
    if (es !== en) fail(`${at}: vocabulary ${index} lists ${es} related terms in es and ${en} in en`);
  }
}

/*
 * Answer position is checked across the whole catalogue by test/practice.test.js,
 * so a single block cannot be judged against the 60% ceiling on its own. What it
 * can be judged on is whether it uses all three positions at all -- a block that
 * answers 0 every time will drag the shared spread whatever the rest does.
 */
for (const position of [0, 1, 2]) {
  if (!answerSpread.get(position)) {
    fail(`no question in this block has its answer at position ${position}; `
      + `spread is ${JSON.stringify([...answerSpread.entries()].sort())}`);
  }
}

/*
 * Prose in the wrong language. The two directions are mirrors: the `es`
 * direction explains in English, the `en` direction explains in Spanish,
 * because in each case the reader does not yet speak what is being taught.
 * Get it backwards and every structural check still passes -- the shape is
 * perfect and only the words are unreadable by the person the lesson is for.
 */
for (const lesson of lessons) {
  for (const direction of directions) {
    for (const problem of wrongLanguage(lesson[direction], direction)) {
      fail(`${lesson.id} ${direction}.${problem.trail}: must be ${problem.want}, reads as `
        + `${problem.got} — "${problem.text.slice(0, 70)}${problem.text.length > 70 ? "…" : ""}"`);
    }
  }
}

if (problems.length) {
  console.error(`${target}: ${problems.length} problem(s)\n`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

const verbs = lessons.map((lesson) => lesson.verb).join(", ");
console.log(`${target}: ${lessons.length} lesson(s) OK — ${verbs}`);
