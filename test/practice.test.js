/*
 * Practice questions have to test comprehension, not test-taking.
 *
 * Every question shipped with `answer: 0`, and in 13 of 16 the correct choice
 * was also the single longest. Either tell alone lets a learner score full
 * marks in both directions without reading a word of Spanish, which makes the
 * only comprehension check in the app worthless. These guard both.
 */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const { dataSource } = require("./data-source.js");
const bundle = `${dataSource({ schema: false })}\n({ lessons, curriculum, fluencyItems, matureItems });`;
const { lessons } = vm.runInNewContext(bundle, {}, { filename: "parcero-data-bundle.js" });

const directions = ["es", "en"];
const questions = lessons.flatMap((lesson) => directions.map((direction) => ({
  id: `${lesson.id}/${direction}`,
  ...lesson[direction]
})));

test("the correct answer is not always in the same place", () => {
  const spread = new Map();
  for (const question of questions) {
    spread.set(question.answer, (spread.get(question.answer) || 0) + 1);
  }

  const positions = Math.max(...questions.map((question) => question.choices.length));
  for (let position = 0; position < positions; position += 1) {
    assert.ok(
      spread.get(position) > 0,
      `no question has its answer at position ${position}, so a learner can rule it out. `
      + `Spread: ${JSON.stringify([...spread.entries()])}`
    );
  }

  const worst = Math.max(...spread.values());
  assert.ok(
    worst <= questions.length * 0.6,
    `${worst} of ${questions.length} answers sit at the same position — a learner can guess by position alone`
  );
});

test("the correct answer is not reliably the longest choice", () => {
  const tells = questions.filter((question) => {
    const lengths = question.choices.map((choice) => choice.length);
    const longest = Math.max(...lengths);
    return lengths[question.answer] === longest
      && lengths.filter((length) => length === longest).length === 1;
  });

  assert.ok(
    tells.length <= questions.length / 2,
    `the correct choice is the single longest in ${tells.length} of ${questions.length} questions, `
    + `so "pick the wordiest" beats reading: ${tells.map((question) => question.id).join(", ")}`
  );
});

test("no correct answer towers over its distractors", () => {
  for (const question of questions) {
    const lengths = question.choices.map((choice) => choice.length);
    const correct = lengths[question.answer];
    const rival = Math.max(...lengths.filter((_, index) => index !== question.answer));
    assert.ok(
      correct <= rival * 1.5,
      `${question.id}: the correct choice is ${correct} characters against a longest distractor of ${rival}. `
      + "Lengthen the distractors rather than trimming the answer."
    );
  }
});

test("distractors are still plausible, not filler", () => {
  for (const question of questions) {
    for (const [index, choice] of question.choices.entries()) {
      if (index === question.answer) continue;
      assert.ok(
        choice.trim().split(/\s+/).length >= 3,
        `${question.id}: distractor ${index} is too short to be considered — ${JSON.stringify(choice)}`
      );
    }
  }
});
