/*
 * Practice questions have to test comprehension, not test-taking.
 *
 * Every question shipped with `answer: 0`, and in 13 of 16 the correct choice
 * was also the single longest. Either tell alone lets a learner score full
 * marks in both directions without reading a word of Spanish, which makes the
 * only comprehension check in the app worthless. These guard both.
 *
 * They guard every question, which they did not always do. This file used to
 * spread `lesson[direction]` straight into the question list, and that object
 * holds only the lesson's *first* question — prompt/choices/answer — while the
 * other four live in `practiceExtra` beside it. So the guards below ran on 192
 * questions and ignored 744, and the ratio was getting worse with every block
 * added: four fifths of the practice in the app was unchecked by the tests
 * whose entire purpose is to check practice. Reading through normalizeContent,
 * the same fold the renderer and the flashcard deck use, is what makes the
 * count honest.
 */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const { dataSource } = require("./data-source.js");
const bundle = `${dataSource({ schema: true })}\n({ lessons, curriculum, fluencyItems, matureItems, ParceroLessonSchema });`;
const { lessons, ParceroLessonSchema } = vm.runInNewContext(bundle, {}, { filename: "parcero-data-bundle.js" });

const directions = ["es", "en"];
const questions = lessons.flatMap((lesson) => directions.flatMap((direction) => {
  const practice = ParceroLessonSchema.normalizeContent(lesson[direction]).practice;
  return practice.map((question, index) => ({
    id: `${lesson.id}/${direction} question ${index + 1}`,
    ...question
  }));
}));

const wordCount = (choice) => choice.trim().split(/\s+/).length;

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

test("no choice stands out by length, in either direction", () => {
  /*
   * Two-sided on purpose. This rule used to check only that the answer was not
   * far longer than its distractors, and its failure message said "Lengthen the
   * distractors rather than trimming the answer." Authors did exactly that: they
   * appended the reason each distractor was wrong, which left the correct choice
   * a third of the length of the others across 52 questions. A learner could
   * score full marks by tapping the shortest button, so the guard against one
   * tell had manufactured the opposite tell. Length has to be uninformative in
   * both directions, and the advice has to stop naming a side to inflate.
   */
  for (const question of questions) {
    const lengths = question.choices.map((choice) => choice.length);
    const correct = lengths[question.answer];
    const others = lengths.filter((_, index) => index !== question.answer);
    const longest = Math.max(...others);
    const shortest = Math.min(...others);

    assert.ok(
      correct <= longest * 1.5 && correct * 1.5 >= shortest,
      `${question.id}: the correct choice is ${correct} characters against distractors of `
      + `${others.join(" and ")}. Rewrite so every choice is a comparable length. Do not pad the `
      + `distractors and do not trim the answer — if a distractor needs justifying, that belongs `
      + `in the question's "tests" note, which the page renders after the learner answers.`
    );
  }
});

test("distractors are still plausible, not filler", () => {
  /*
   * Measured against the answer rather than a fixed floor. A flat "three words
   * or more" reads well until it meets a question whose correct answer is a
   * single word: at-the-clinic asks which word a Colombian would actually use
   * and the choices are "parche", "chuzo", "gomelo". Those distractors are not
   * filler, they are the whole question, and a fixed floor would have demanded
   * they be padded into something no one would ever pick — inventing the length
   * tell the test above exists to prevent. Ten legitimate questions fail the
   * flat rule and none fail this one.
   */
  for (const question of questions) {
    const answerWords = wordCount(question.choices[question.answer]);
    const floor = Math.min(3, answerWords);

    for (const [index, choice] of question.choices.entries()) {
      if (index === question.answer) continue;
      assert.ok(
        wordCount(choice) >= floor,
        `${question.id}: distractor ${index + 1} is too short to be considered against a `
        + `${answerWords}-word answer — ${JSON.stringify(choice)}`
      );
    }
  }
});
