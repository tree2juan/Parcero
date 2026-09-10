/*
 * The schedule is the one part of the deck a learner cannot check.
 *
 * A wrong answer in a lesson is visible immediately. A wrong interval is not:
 * it shows up as cards arriving too late to be remembered or too early to be
 * worth asking, months after the bug was written, and it looks like the
 * learner's fault rather than the scheduler's. So the properties that matter
 * are asserted here rather than trusted.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");
const fs = require("node:fs");
const path = require("node:path");

const sandbox = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, "..", "srs.js"), "utf8"), sandbox, { filename: "srs.js" });
const SRS = sandbox.ParceroSRS;

const DAY = 0;

test("an unseen card is due, so it sorts with the lapsed ones", () => {
  assert.ok(SRS.isDue(undefined, DAY));
  assert.ok(SRS.isDue(null, DAY));
  assert.strictEqual(SRS.dueCount([{ id: "a" }, { id: "b" }], {}, DAY), 2);
});

test("knowing a card pushes it further out every time", () => {
  let state = SRS.review(undefined, "known", DAY);
  assert.strictEqual(state.due - DAY, SRS.FIRST, "first success is a one-day interval");
  state = SRS.review(state, "known", state.due);
  assert.strictEqual(state.due - state.seen, SRS.SECOND, "second success is a three-day interval");

  let previous = state.last;
  for (let i = 0; i < 6; i += 1) {
    state = SRS.review(state, "known", state.due);
    /* Growth is only required while there is room to grow; once the interval
       reaches the year cap it is correct for it to sit there. */
    if (previous >= SRS.MAX_INTERVAL) {
      assert.strictEqual(state.last, SRS.MAX_INTERVAL, "a capped interval must stay capped, not shrink");
    } else {
      assert.ok(state.last > previous, `interval must grow: ${state.last} followed ${previous}`);
    }
    previous = state.last;
  }
});

test("intervals never run away past a year", () => {
  let state = SRS.review(undefined, "known", DAY);
  for (let i = 0; i < 40; i += 1) state = SRS.review(state, "known", state.due);
  assert.ok(state.last <= SRS.MAX_INTERVAL, `interval ${state.last} exceeds the cap`);
});

test("forgetting brings the card back today and costs ease", () => {
  let state = SRS.review(undefined, "known", DAY);
  state = SRS.review(state, "known", state.due);
  const earned = state.ease;
  const lapsed = SRS.review(state, "again", 10);
  assert.strictEqual(lapsed.due, 10, "a lapsed card is due immediately, not tomorrow");
  assert.strictEqual(lapsed.n, 0, "a lapse restarts the learning steps");
  assert.ok(lapsed.ease < earned, "a lapse must cost ease or nothing changes for a card you keep failing");
});

test("ease stays inside its bounds however badly or well it goes", () => {
  let state;
  for (let i = 0; i < 50; i += 1) state = SRS.review(state, "again", i);
  assert.ok(state.ease >= SRS.EASE_MIN, `ease fell to ${state.ease}, below the floor`);

  state = undefined;
  for (let i = 0; i < 50; i += 1) {
    state = SRS.review(state, "known", state ? state.due : 0);
  }
  assert.ok(state.ease <= SRS.EASE_MAX, `ease climbed to ${state.ease}, above the ceiling`);
});

test("anything that is not 'known' is treated as a lapse", () => {
  const state = SRS.review({ n: 5, ease: 250, due: 0, last: 20, seen: 0 }, "skipped", 3);
  assert.strictEqual(state.n, 0, "an unrecognised verdict must not be credited as success");
});

test("the queue puts overdue cards first, most overdue leading", () => {
  const cards = [{ id: "fresh" }, { id: "future" }, { id: "late" }, { id: "later" }];
  const states = {
    future: { due: 30, n: 3, ease: 250, last: 10, seen: 20 },
    late: { due: 8, n: 3, ease: 250, last: 4, seen: 4 },
    later: { due: 2, n: 3, ease: 250, last: 4, seen: 0 }
  };
  const order = SRS.orderQueue(cards, states, 10).map((card) => card.id);
  assert.deepStrictEqual(order, ["later", "late", "fresh", "future"],
    "overdue by most days first, then never-seen, then not-yet-due");
});

test("queue order is stable within a group, so a lesson stays together", () => {
  const cards = [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }];
  assert.deepStrictEqual(
    SRS.orderQueue(cards, {}, 0).map((card) => card.id),
    ["a", "b", "c", "d"],
    "with nothing known, the catalogue's own order must survive");
});

test("pruning drops the best-known cards, never the struggling ones", () => {
  const map = {};
  for (let i = 0; i < 20; i += 1) map[`card-${i}`] = { due: i, n: 3, ease: 250, last: 1, seen: 0 };
  const pruned = SRS.prune(map, 5);
  assert.strictEqual(Object.keys(pruned).length, 5);
  /* The five smallest `due` values are the five most urgent, so those survive. */
  assert.deepStrictEqual(
    Object.keys(pruned).sort((a, b) => pruned[a].due - pruned[b].due),
    ["card-0", "card-1", "card-2", "card-3", "card-4"]);
});

test("pruning leaves a map under the cap completely alone", () => {
  const map = { a: { due: 1 }, b: { due: 2 } };
  assert.strictEqual(SRS.prune(map, 10), map);
});

test("a day index is a stable integer, and midnight is the only boundary", () => {
  const noon = SRS.todayIndex(1700000000000);
  assert.strictEqual(noon, SRS.todayIndex(1700000000000 + 1000), "a second later is the same day");
  assert.strictEqual(SRS.todayIndex(1700000000000 + SRS.MS_PER_DAY), noon + 1, "a day later is the next index");
  assert.ok(Number.isInteger(noon));
});
