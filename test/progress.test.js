/*
 * The practice record, and the failure it exists to prevent.
 *
 * Before progress.js the practice round graded an answer, coloured a button,
 * and forgot it. That bug was invisible in every screenshot and every manual
 * click-through — the UI looked right, because the UI *was* right; it was the
 * persistence behind it that did not exist. A test suite that only checked
 * rendering would have passed on it happily, and did, for the whole life of
 * the feature.
 *
 * So the assertions here are about what survives: that a miss comes back, that
 * a success does not, and — the two at the bottom — that app.js is actually
 * wired to call any of it. A perfectly correct module nothing invokes is the
 * same product defect as no module at all, and is much harder to notice.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

/* A sandbox with the scheduler present, which is the normal case. */
function withSrs() {
  const sandbox = {};
  vm.runInNewContext(read("srs.js"), sandbox, { filename: "srs.js" });
  vm.runInNewContext(read("progress.js"), sandbox, { filename: "progress.js" });
  return sandbox.ParceroProgress;
}

/* A sandbox without it, to prove the degradation path. */
function withoutSrs() {
  const sandbox = {};
  vm.runInNewContext(read("progress.js"), sandbox, { filename: "progress.js" });
  return sandbox.ParceroProgress;
}

const P = withSrs();
const DAY = 20000;
const answer = (state, correct, index = 0, lessonId = "lesson-a", day = DAY) =>
  P.record(state, { direction: "es", lessonId, index, correct }, day);

test("a missed question is due again the same day; a correct one is not", () => {
  const missed = answer(P.emptyState(), false);
  const known = answer(P.emptyState(), true);

  assert.strictEqual(P.dueCount(missed, DAY), 1, "a miss has to come back");
  assert.strictEqual(P.dueCount(known, DAY), 0, "a correct answer must not be asked again immediately");

  /* And the correct one does come back eventually — a schedule that never
     returns a card is just a slower way of forgetting it. */
  assert.strictEqual(P.dueCount(known, DAY + 400), 1);
});

test("attempts and misses accumulate for both the question and the lesson", () => {
  let state = P.emptyState();
  state = answer(state, false);
  state = answer(state, false);
  state = answer(state, true);

  const id = P.itemId("es", "lesson-a", 0);
  assert.strictEqual(state.items[id].attempts, 3);
  assert.strictEqual(state.items[id].misses, 2);

  const score = P.lessonScore(state, "es", "lesson-a");
  assert.strictEqual(score.attempts, 3);
  assert.strictEqual(score.misses, 2);
  assert.ok(Math.abs(score.accuracy - 1 / 3) < 1e-9);
});

test("an unmeasured lesson scores null rather than zero", () => {
  /* "Not attempted" and "got everything wrong" are opposite facts about a
     learner. Collapsing both to 0 would put a red badge on every lesson the
     course has not reached yet. */
  assert.strictEqual(P.lessonScore(P.emptyState(), "es", "never-opened"), null);
  const tried = answer(P.emptyState(), false);
  assert.strictEqual(P.lessonScore(tried, "es", "lesson-a").accuracy, 0);
});

test("the two directions keep separate histories", () => {
  let state = P.record(P.emptyState(), { direction: "es", lessonId: "shared", index: 0, correct: false }, DAY);
  state = P.record(state, { direction: "en", lessonId: "shared", index: 0, correct: true }, DAY);
  assert.strictEqual(P.lessonScore(state, "es", "shared").misses, 1);
  assert.strictEqual(P.lessonScore(state, "en", "shared").misses, 0);
});

test("summary counts every graded answer", () => {
  let state = P.emptyState();
  state = answer(state, true, 0);
  state = answer(state, false, 1);
  state = answer(state, true, 2);
  const totals = P.summary(state);
  assert.strictEqual(totals.attempts, 3);
  assert.strictEqual(totals.correct, 2);
  assert.strictEqual(totals.answered, 3, "three distinct questions were graded");
  assert.ok(Math.abs(totals.accuracy - 2 / 3) < 1e-9);
});

test("the weakness model ignores lessons with too little evidence", () => {
  let state = P.emptyState();
  /* One wrong answer out of one is not a 0% lesson, it is an unmeasured one,
     and recommending revision from it would be guessing. */
  state = answer(state, false, 0, "barely-tried");
  /* Length rather than deepStrictEqual against []: the array is built inside
     the vm realm, and deepStrictEqual compares prototypes, so it would reject
     an empty sandbox array against an empty one from this realm. */
  assert.strictEqual(P.weakest(state).length, 0, "a single data point must not rank");

  for (let i = 0; i < P.MIN_ATTEMPTS; i += 1) state = answer(state, false, i, "struggling");
  for (let i = 0; i < P.MIN_ATTEMPTS; i += 1) state = answer(state, true, i, "solid");

  const ranked = P.weakest(state);
  assert.strictEqual(ranked.length, 2, "only the two measured lessons rank");
  assert.strictEqual(ranked[0].lessonId, "struggling", "worst first");
  assert.strictEqual(ranked[0].rate, 1);
  assert.strictEqual(ranked[1].lessonId, "solid");
});

test("the weakness model ranks by miss rate, not miss count", () => {
  /* Otherwise a long lesson the learner mostly knows outranks a short one they
     cannot do at all, and the advice points at the wrong lesson. */
  let state = P.emptyState();
  for (let i = 0; i < 20; i += 1) state = answer(state, i < 15, i, "long-lesson");   /*  5 misses of 20 */
  for (let i = 0; i < 4; i += 1) state = answer(state, false, i, "short-lesson");    /*  4 misses of 4  */

  const ranked = P.weakest(state, 1);
  assert.strictEqual(ranked.length, 1);
  assert.strictEqual(ranked[0].lessonId, "short-lesson");
});

test("a corrupt or absent store loses the history, not the session", () => {
  assert.deepStrictEqual(P.load("{not json"), P.emptyState());
  assert.deepStrictEqual(P.load(""), P.emptyState());
  assert.deepStrictEqual(P.load("null"), P.emptyState());
  assert.deepStrictEqual(P.load('"a string"'), P.emptyState());
  /* A half-written object keeps whichever half parsed. */
  const partial = P.load('{"items":{"es:x:0":{"attempts":2,"misses":1}}}');
  assert.strictEqual(partial.items["es:x:0"].attempts, 2);
  assert.strictEqual(Object.keys(partial.lessons).length, 0);
});

test("pruning drops the cards scheduled furthest out, not the struggling ones", () => {
  const state = P.emptyState();
  state.items["due-soon"] = { card: { due: DAY }, attempts: 4, misses: 3, last: DAY };
  state.items["due-later"] = { card: { due: DAY + 10 }, attempts: 2, misses: 1, last: DAY };
  state.items["due-far"] = { card: { due: DAY + 300 }, attempts: 9, misses: 0, last: DAY };

  const pruned = P.prune(state, 2);
  assert.strictEqual(Object.keys(pruned.items).length, 2);
  assert.ok(pruned.items["due-soon"], "the card the learner keeps missing must survive");
  assert.ok(pruned.items["due-later"]);
  assert.ok(!pruned.items["due-far"], "the long-known card is the cheapest to forget");
});

test("grading still works when srs.js is missing", () => {
  /* Same rule the deck follows: a missing file costs the schedule, not the
     round. Attempts are still counted, so the weakness model survives. */
  const bare = withoutSrs();
  const state = bare.record(bare.emptyState(), { direction: "es", lessonId: "l", index: 0, correct: false }, 0);
  assert.strictEqual(bare.lessonScore(state, "es", "l").misses, 1);
  assert.strictEqual(bare.dueCount(state, 0), 0, "with no scheduler there is nothing to schedule");
  assert.strictEqual(bare.dueItems(state, 0).length, 0);
});

test("a malformed event is ignored rather than stored", () => {
  const start = P.emptyState();
  assert.deepStrictEqual(P.record(start, {}, DAY), start);
  assert.deepStrictEqual(P.record(start, { direction: "es", lessonId: "l" }, DAY), start, "a missing index must not become NaN");
  assert.deepStrictEqual(P.record(start, { direction: "es", index: 0, correct: true }, DAY), start);
});

test("due items name the lesson and question they came from", () => {
  const state = P.record(P.emptyState(), { direction: "es", lessonId: "a-lesson-with-hyphens", index: 4, correct: false }, DAY);
  const due = P.dueItems(state, DAY);
  assert.strictEqual(due.length, 1);
  assert.strictEqual(due[0].direction, "es");
  assert.strictEqual(due[0].lessonId, "a-lesson-with-hyphens");
  assert.strictEqual(due[0].index, 4);
});

/*
 * The wiring. These are the tests that would have caught the original bug.
 *
 * Everything above this line passes just as happily when nothing in the app
 * ever calls the module, which is precisely the state the practice round was
 * already in.
 */
test("app.js records the result of every practice answer", () => {
  const app = read("app.js");
  const handler = app.match(/\$\("#choices"\)\.addEventListener[\s\S]*?\n\}\);/);
  assert.ok(handler, "app.js must still answer practice clicks through #choices");
  assert.match(handler[0], /recordPractice\(correct\)/,
    "the practice click handler must record its result, or answers are discarded again");

  const recorder = app.match(/function recordPractice\([\s\S]*?\n\}/);
  assert.ok(recorder, "app.js must define recordPractice()");
  assert.match(recorder[0], /\.record\(/, "recordPractice must grade through ParceroProgress.record");
  assert.match(recorder[0], /\.save\(/, "a result that is never saved does not survive the reload");
  assert.match(recorder[0], /practiceView\.index/, "the question's position is its identity");
});

test("resetting progress clears the practice history too", () => {
  /* A reset that leaves the schedule behind hands the next learner someone
     else's due cards. */
  const app = read("app.js");
  const reset = app.match(/\$\("#reset-progress"\)\.addEventListener[\s\S]*?\n?\}\);/);
  assert.ok(reset, "app.js must still handle #reset-progress");
  assert.match(reset[0], /\.clear\(\)/, "reset must clear the practice record");
});

test("the page loads progress.js, and after srs.js", () => {
  const html = read("index.html");
  const srs = html.indexOf('src="srs.js"');
  const progress = html.indexOf('src="progress.js"');
  assert.ok(progress > -1, "index.html must load progress.js or none of this runs in the browser");
  assert.ok(srs > -1 && progress > srs, "progress.js reads ParceroSRS and must load after it");
});
