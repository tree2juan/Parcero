/*
 * Assessment tests.
 *
 * Two properties carry the whole feature and neither is obvious from reading
 * the code, so both are pinned here.
 *
 * The first is determinism. A class sits one paper, and the teacher prints one
 * answer key. If assembly varied by device — or by run — the key would be
 * fiction and a mark would not mean the same thing twice. Every assertion
 * about seeding below exists to keep that true.
 *
 * The second is that shuffling options must carry the correct answer with it.
 * That is the single easiest thing to break here: shuffle an array, forget to
 * follow the index, and every paper silently marks the wrong option right
 * while every structural test still passes.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const { dataSource } = require("./data-source.js");

const sandbox = {};
vm.runInNewContext(fs.readFileSync(path.join(root, "assessment.js"), "utf8"), sandbox, { filename: "assessment.js" });
const A = sandbox.ParceroAssessment;

const bundle = `${dataSource({ schema: true })}\n({ lessons });`;
const { lessons } = vm.runInNewContext(bundle, {}, { filename: "assessment-corpus.js" });

const storySrc = fs.readFileSync(path.join(root, "data", "stories.js"), "utf8");
const { storyItems } = vm.runInNewContext(`${storySrc}\n({ storyItems });`, {}, { filename: "stories.js" });

const modSrc = fs.readFileSync(path.join(root, "data", "modules.js"), "utf8");
const modules = vm.runInNewContext(`${modSrc}\nCOURSE_MODULES;`, {}, { filename: "modules.js" });

/* The lessons of one module, the way syllabus.js groups them. */
function lessonsOf(moduleId) {
  const entry = modules.find((m) => m.id === moduleId);
  const blockFor = new Map();
  const read = (f) => fs.readFileSync(path.join(root, f), "utf8");
  for (const m of read("data/lessons.js").matchAll(/id:\s*"([^"]+)"/g)) blockFor.set(m[1], "data/lessons.js");
  const dir = fs.readdirSync(path.join(root, "data", "lessons")).filter((n) => n.endsWith(".js")).sort();
  for (const name of dir) for (const m of read(`data/lessons/${name}`).matchAll(/^\s{4}id:\s*"([^"]+)"/gm)) blockFor.set(m[1], `data/lessons/${name}`);
  return lessons.filter((l) => blockFor.get(l.id) === entry.block);
}

const SAMPLE_MODULE = "01-foundation-identity";
const sampleLessons = lessonsOf(SAMPLE_MODULE);

/* The smallest modules in the course hold two lessons and eight practice
   questions, so eight is the floor a checkpoint can always fill. The cap is
   CHECKPOINT_QUESTIONS; a thin module gives a shorter paper rather than a
   padded one. */
const CHECKPOINT_FLOOR = 8;

test("a module has enough practice behind it to build a checkpoint", () => {
  assert.ok(sampleLessons.length >= 2, `expected lessons for ${SAMPLE_MODULE}`);
  const items = A.pool(sampleLessons, "es");
  assert.ok(items.length >= CHECKPOINT_FLOOR, `pool of ${items.length} cannot fill a ${CHECKPOINT_FLOOR}-question checkpoint`);
});

test("the same paper is assembled every time, on every device", () => {
  const first = A.checkpoint({ moduleId: SAMPLE_MODULE, lessons: sampleLessons, direction: "es" });
  const second = A.checkpoint({ moduleId: SAMPLE_MODULE, lessons: sampleLessons, direction: "es" });
  assert.deepStrictEqual(first.questions, second.questions);
});

test("a different form is a genuinely different paper", () => {
  const a = A.checkpoint({ moduleId: SAMPLE_MODULE, lessons: sampleLessons, direction: "es", form: "A" });
  const b = A.checkpoint({ moduleId: SAMPLE_MODULE, lessons: sampleLessons, direction: "es", form: "B" });
  const sameOrder = a.questions.every((q, i) => b.questions[i] && b.questions[i].prompt === q.prompt);
  assert.ok(!sameOrder, "form B is form A in the same order — a retake would be the same test");
});

test("shuffling the options carries the correct answer with it", () => {
  /* The bug this catches marks a real student wrong on a right answer, and
     leaves every count and length in this file unchanged. */
  const paper = A.checkpoint({ moduleId: SAMPLE_MODULE, lessons: sampleLessons, direction: "es" });
  const source = new Map();
  for (const item of A.pool(sampleLessons, "es")) source.set(`${item.lessonId}:${item.index}`, item);
  for (const q of paper.questions) {
    const original = source.get(`${q.lessonId}:${q.index}`);
    assert.ok(original, "a question appeared that is in no lesson");
    assert.strictEqual(
      q.choices[q.answer],
      original.choices[original.answer],
      `answer index drifted for ${q.lessonId}:${q.index}`
    );
    assert.strictEqual(q.choices.length, original.choices.length);
  }
});

test("questions are spread across the module's lessons, not clustered", () => {
  const paper = A.checkpoint({ moduleId: SAMPLE_MODULE, lessons: sampleLessons, direction: "es" });
  const seen = new Set(paper.questions.map((q) => q.lessonId));
  assert.strictEqual(
    seen.size,
    sampleLessons.length,
    `checkpoint examines ${seen.size} of ${sampleLessons.length} lessons — one is unexamined`
  );
});

test("a paper is never padded past what the pool can supply", () => {
  const thin = [sampleLessons[0]];
  const paper = A.checkpoint({ moduleId: "thin", lessons: thin, direction: "es", count: 500 });
  assert.strictEqual(paper.questions.length, A.pool(thin, "es").length);
});

test("marking separates a blank from a wrong answer", () => {
  const paper = A.checkpoint({ moduleId: SAMPLE_MODULE, lessons: sampleLessons, direction: "es" });
  const responses = paper.questions.map((q, i) => {
    if (i === 0) return null;
    if (i === 1) return (q.answer + 1) % q.choices.length;
    return q.answer;
  });
  const result = A.mark(paper, responses);
  assert.strictEqual(result.blank, 1);
  assert.strictEqual(result.wrong, 1);
  assert.strictEqual(result.correct, paper.questions.length - 2);
  assert.strictEqual(result.total, paper.questions.length);
});

test("a perfect paper passes and an empty one does not", () => {
  const paper = A.checkpoint({ moduleId: SAMPLE_MODULE, lessons: sampleLessons, direction: "es" });
  assert.ok(A.mark(paper, paper.questions.map((q) => q.answer)).passed);
  const blankRun = A.mark(paper, paper.questions.map(() => null));
  assert.ok(!blankRun.passed);
  assert.strictEqual(blankRun.percent, 0);
});

test("a mark points back at the lessons the misses came from", () => {
  const paper = A.checkpoint({ moduleId: SAMPLE_MODULE, lessons: sampleLessons, direction: "es" });
  const target = paper.questions[0].lessonId;
  const responses = paper.questions.map((q) =>
    q.lessonId === target ? (q.answer + 1) % q.choices.length : q.answer
  );
  const result = A.mark(paper, responses);
  assert.ok(result.weak.length >= 1);
  assert.strictEqual(result.weak[0].lessonId, target, "the worst lesson is not the one that was failed");
});

test("both directions build a paper", () => {
  for (const direction of ["es", "en"]) {
    const paper = A.checkpoint({ moduleId: SAMPLE_MODULE, lessons: sampleLessons, direction });
    assert.ok(paper.questions.length > 0, `no ${direction} paper`);
    assert.strictEqual(paper.direction, direction);
  }
});

test("every module in the course can build a checkpoint worth sitting", () => {
  /* The failure this catches is a module whose lessons carry too little
     practice to examine. It is invisible until a learner reaches that module
     and is handed a three-question test. */
  const thin = [];
  for (const entry of modules) {
    const group = lessonsOf(entry.id);
    if (!group.length) continue;
    for (const direction of ["es", "en"]) {
      const paper = A.checkpoint({ moduleId: entry.id, lessons: group, direction });
      if (paper.questions.length < CHECKPOINT_FLOOR) thin.push(`${entry.id}/${direction}: ${paper.questions.length}`);
    }
  }
  assert.deepStrictEqual(thin, [], `modules that cannot fill a checkpoint:\n  ${thin.join("\n  ")}`);
});

test("a band exam mixes revision with unseen reading", () => {
  const band = "A1";
  const bandModules = modules.filter((m) => m.band === band);
  const bandLessons = bandModules.flatMap((m) => lessonsOf(m.id));
  const paper = A.exam({ band, direction: "es", lessons: bandLessons, stories: storyItems });
  assert.strictEqual(paper.use.length, A.EXAM_USE_QUESTIONS);
  assert.ok(paper.reading.length > 0, "the exam has no reading section");
  for (const section of paper.reading) {
    assert.ok(section.questions.length > 0, `story ${section.storyId} contributed no questions`);
  }
  /* Reading must come from the band being examined. */
  const ids = new Set(storyItems.filter((s) => s.band === band).map((s) => s.id));
  for (const section of paper.reading) assert.ok(ids.has(section.storyId), `${section.storyId} is not an ${band} story`);
});

test("every band can build an exam, in both directions", () => {
  const missing = [];
  for (const band of ["A1", "A2", "B1", "B2"]) {
    const bandLessons = modules.filter((m) => m.band === band).flatMap((m) => lessonsOf(m.id));
    for (const direction of ["es", "en"]) {
      const paper = A.exam({ band, direction, lessons: bandLessons, stories: storyItems });
      if (paper.use.length < A.EXAM_USE_QUESTIONS) missing.push(`${band}/${direction} use: ${paper.use.length}`);
      if (paper.reading.length < 1) missing.push(`${band}/${direction} reading: none`);
    }
  }
  assert.deepStrictEqual(missing, [], missing.join("; "));
});

test("results accumulate attempts and keep the best alongside the last", () => {
  let state = A.emptyState();
  state = A.record(state, { kind: "checkpoint", id: "m:es:A", percent: 80, passed: true, total: 10, correct: 8, day: 1 });
  state = A.record(state, { kind: "checkpoint", id: "m:es:A", percent: 50, passed: false, total: 10, correct: 5, day: 2 });
  const row = A.resultFor(state, "checkpoint", "m:es:A");
  assert.strictEqual(row.attempts, 2);
  assert.strictEqual(row.best, 80);
  assert.strictEqual(row.last, 50);
  assert.ok(row.passed, "a pass already earned is not lost by a later failed retake");
});

test("a corrupt or absent store costs the history, not the session", () => {
  assert.deepStrictEqual(A.load("{{{"), A.emptyState());
  assert.deepStrictEqual(A.load(""), A.emptyState());
  assert.deepStrictEqual(A.load("[]"), A.emptyState());
});

test("the seeded generator is stable across runs", () => {
  const draw = (seed) => {
    const r = A.rng(A.hash(seed));
    return [r(), r(), r()].map((n) => n.toFixed(9));
  };
  assert.deepStrictEqual(draw("parcero"), draw("parcero"));
  assert.notDeepStrictEqual(draw("parcero"), draw("parcera"));
});

/*
 * The cross-form lookup is what the course view and the report actually use,
 * and it is the place a per-form key is easiest to get wrong: asking about a
 * module while holding a record filed against form B.
 */
test("the reading section asks in the language being studied, and brings its answers", () => {
  /* Two separate bugs lived here. The questions were drawn in the learner's
     own language, which tests nothing but whether they read the story; and the
     model answers were dropped on the floor, leaving a short-answer section
     that no solo learner could ever mark. */
  const band = "A1";
  const bandModules = modules.filter((m) => m.band === band);
  const bandLessons = bandModules.flatMap((m) => lessonsOf(m.id));
  for (const direction of ["es", "en"]) {
    const paper = A.exam({ band, direction, lessons: bandLessons, stories: storyItems });
    for (const section of paper.reading) {
      const story = storyItems.find((s) => s.id === section.storyId);
      assert.strictEqual(section.title, story.title[direction],
        "the reading heading is not in the language being read");
      section.questions.forEach((row, i) => {
        assert.strictEqual(row.q, story.questions[i].q[direction],
          `${section.storyId} q${i + 1} is not asked in the studied language`);
        assert.ok(row.a, `${section.storyId} q${i + 1} has no model answer to mark against`);
        assert.strictEqual(row.a, story.questions[i].a[direction]);
        assert.notStrictEqual(row.gloss, row.a, "the gloss must be the other language, not a copy");
      });
    }
  }
});

test("the cross-form lookup answers about the module, not about one form of its paper", () => {
  let state = A.emptyState();
  state = A.record(state, { kind: "checkpoint", id: "m:es:A", percent: 40, passed: false, total: 10, correct: 4, day: 1 });
  state = A.record(state, { kind: "checkpoint", id: "m:es:B", percent: 90, passed: true, total: 10, correct: 9, day: 2 });

  assert.strictEqual(A.resultFor(state, "checkpoint", "m:es:A").passed, false);
  const rolled = A.bestFor(state, "checkpoint", "m", "es");
  assert.strictEqual(rolled.attempts, 2, "both sittings count");
  assert.strictEqual(rolled.best, 90);
  assert.strictEqual(rolled.last, 90, "the later day is the last attempt");
  assert.ok(rolled.passed, "passing any form passes the module");
});

test("bestFor keeps the two directions apart", () => {
  let state = A.emptyState();
  state = A.record(state, { kind: "checkpoint", id: "m:es:A", percent: 90, passed: true, total: 10, correct: 9, day: 1 });
  assert.ok(A.bestFor(state, "checkpoint", "m", "es").passed);
  assert.strictEqual(A.bestFor(state, "checkpoint", "m", "en"), null,
    "a Spanish result must not mark the English module passed");
});

test("bestFor reads the last attempt by day, not by key order", () => {
  let state = A.emptyState();
  state = A.record(state, { kind: "checkpoint", id: "m:es:C", percent: 70, passed: true, total: 10, correct: 7, day: 9 });
  state = A.record(state, { kind: "checkpoint", id: "m:es:A", percent: 30, passed: false, total: 10, correct: 3, day: 2 });
  const rolled = A.bestFor(state, "checkpoint", "m", "es");
  assert.strictEqual(rolled.last, 70);
  assert.strictEqual(rolled.day, 9);
});

test("a retake is offered a different form, and the forms run out rather than wrap", () => {
  let state = A.emptyState();
  assert.strictEqual(A.nextForm(state, "checkpoint", "m", "es"), "A");
  state = A.record(state, { kind: "checkpoint", id: "m:es:A", percent: 10, passed: false, total: 10, correct: 1, day: 1 });
  assert.strictEqual(A.nextForm(state, "checkpoint", "m", "es"), "B");
  state = A.record(state, { kind: "checkpoint", id: "m:es:B", percent: 10, passed: false, total: 10, correct: 1, day: 2 });
  assert.strictEqual(A.nextForm(state, "checkpoint", "m", "es"), "C");
  state = A.record(state, { kind: "checkpoint", id: "m:es:C", percent: 10, passed: false, total: 10, correct: 1, day: 3 });
  assert.strictEqual(A.nextForm(state, "checkpoint", "m", "es"), "C",
    "a fourth sitting reuses the last form rather than silently returning to A");
});
