/*
 * The course guide, and the two ways a study plan goes wrong.
 *
 * The first is arithmetic. A schedule that says "twelve weeks" while the
 * course quietly grows to seventy-five modules is worse than no schedule: the
 * learner trusts it, falls behind against a number that was never true, and
 * concludes the problem is them. So the week count here is computed from the
 * practice cycle's own minutes, and these tests check the sums actually add
 * up rather than checking that a schedule was produced.
 *
 * The second is coverage. Packing modules into weeks is the kind of loop that
 * looks right and drops the last item, or leaves week 19 empty, or quietly
 * reorders things so module 40 arrives before the module it depends on. Each
 * of those is asserted directly, because none of them would be visible on a
 * rendered page — a study map with 74 of 75 modules looks exactly like a
 * study map.
 *
 * The rest is the same rule the rest of the workbook follows: every field the
 * generator promises has to survive into the reader's language, and nothing
 * may reach the page as an empty string. esc() turns a misspelled field into
 * nothing at all, so absence is the failure mode to hunt for.
 *
 * One harness note. Arrays that come back from the generator were built
 * inside the vm sandbox, so they carry that realm's Array.prototype and
 * deepStrictEqual — which compares prototypes — rejects them against an
 * ordinary literal even when every element matches. Both sides of any array
 * comparison here are wrapped in Array.from for that reason, and a failure
 * printing two identical-looking arrays is this and not a real difference.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");
const fs = require("node:fs");
const path = require("node:path");

const { dataSource } = require("./data-source.js");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const { lessons } = vm.runInNewContext(`${dataSource({ schema: true })}\n({ lessons });`, {}, {
  filename: "lessons-bundle.js"
});

const MODULES = vm.runInNewContext(`${read("data/modules.js")}\n;COURSE_MODULES;`);

/* study-guide.js has to share a realm with workbook.js: the generator reads
   STUDY_GUIDE as a global, the same way the browser hands it over. */
const sandbox = {};
vm.runInNewContext(`${read("data/study-guide.js")}\n${read("workbook.js")}`, sandbox, {
  filename: "workbook-bundle.js"
});
const Workbook = sandbox.ParceroWorkbook;
const GUIDE = vm.runInNewContext(`${read("data/study-guide.js")}\n;STUDY_GUIDE;`);

const DIRECTIONS = ["es", "en"];
const guideFor = (direction) => Workbook.buildGuide({ modules: MODULES, lessons, direction });

const blank = (value) => value === null || value === undefined || String(value).trim() === "";

/* --- the schedule adds up ------------------------------------------------ */

test("the course length is the arithmetic, not a round number", () => {
  const cycleMinutes = GUIDE.cycle.reduce((sum, step) => sum + step.minutes, 0);
  for (const direction of DIRECTIONS) {
    const guide = guideFor(direction);
    assert.equal(guide.pace.perModule, cycleMinutes,
      `${direction}: a module costs the sum of the cycle steps`);
    assert.equal(guide.pace.totalMinutes, cycleMinutes * guide.totals.modules,
      `${direction}: the course costs one module times the modules`);
    assert.equal(
      guide.pace.weeks,
      Math.min(Math.ceil(guide.pace.totalMinutes / guide.pace.weeklyMinutes), guide.totals.modules),
      `${direction}: the weeks follow from the budget`
    );
  }
});

test("a bigger weekly budget really does shorten the course", () => {
  const slow = Workbook.buildGuide({ modules: MODULES, lessons, direction: "es", weeklyMinutes: 120 });
  const fast = Workbook.buildGuide({ modules: MODULES, lessons, direction: "es", weeklyMinutes: 600 });
  assert.ok(slow.pace.weeks > fast.pace.weeks,
    `120 min/week (${slow.pace.weeks}w) must be longer than 600 (${fast.pace.weeks}w)`);
  assert.equal(slow.map.length, slow.pace.weeks, "the map is as long as the pace says");
  assert.equal(fast.map.length, fast.pace.weeks, "the map is as long as the pace says");
});

/* --- the map loses nothing and invents nothing --------------------------- */

test("every module with lessons appears on the map exactly once, in course order", () => {
  const expected = MODULES
    .filter((module) => Workbook.lessonsFor(module, lessons).length > 0)
    .map((module) => module.id);
  assert.ok(expected.length > 1, "this test needs modules to work with");

  for (const direction of DIRECTIONS) {
    const guide = guideFor(direction);
    const placed = [];
    for (const week of guide.map) for (const entry of week.modules) placed.push(entry.id);

    assert.deepStrictEqual(Array.from(placed), Array.from(expected),
      `${direction}: the map must be every module, once, in the order the course teaches them`);
  }
});

test("no week of the schedule is empty", () => {
  for (const direction of DIRECTIONS) {
    const guide = guideFor(direction);
    const empty = guide.map.filter((week) => week.modules.length === 0).map((week) => week.week);
    assert.deepStrictEqual(Array.from(empty), [], `${direction}: weeks with nothing to do`);
  }
});

test("each week reports the number of lessons it actually contains", () => {
  for (const direction of DIRECTIONS) {
    const guide = guideFor(direction);
    for (const week of guide.map) {
      const real = week.modules.reduce((sum, entry) => sum + entry.lessonCount, 0);
      assert.equal(week.lessonCount, real,
        `${direction} week ${week.week}: says ${week.lessonCount} lessons, holds ${real}`);
    }
  }
});

test("the weeks are balanced rather than merely divided", () => {
  for (const direction of DIRECTIONS) {
    const guide = guideFor(direction);
    const sizes = guide.map.map((week) => week.lessonCount);
    const mean = sizes.reduce((a, b) => a + b, 0) / sizes.length;
    /* A schedule that front-loads sixty lessons into week one and leaves one
       for week twenty-five is technically a schedule. Nothing may be more
       than double the average week. */
    const worst = Math.max(...sizes);
    assert.ok(worst <= mean * 2,
      `${direction}: heaviest week is ${worst} lessons against an average of ${mean.toFixed(1)}`);
    assert.ok(Math.min(...sizes) >= 1, `${direction}: a week with no lessons in it`);
  }
});

test("the totals are the sum of the tracker, and the tracker counts real data", () => {
  for (const direction of DIRECTIONS) {
    const guide = guideFor(direction);
    const lessonSum = guide.tracker.reduce((sum, entry) => sum + entry.lessonCount, 0);
    const vocabSum = guide.tracker.reduce((sum, entry) => sum + entry.vocabCount, 0);
    assert.equal(guide.totals.lessons, lessonSum, `${direction}: lesson total`);
    assert.equal(guide.totals.vocabulary, vocabSum, `${direction}: vocabulary total`);
    assert.equal(guide.totals.modules, guide.tracker.length, `${direction}: module total`);

    /* Vocabulary lives at lesson[direction].vocabulary, and reading it from
       the lesson root returns undefined for every lesson — which sums to a
       confident, wrong zero. This caught exactly that. */
    assert.ok(guide.totals.vocabulary > 0, `${direction}: no vocabulary counted at all`);
    for (const entry of guide.tracker) {
      assert.ok(entry.lessonCount > 0, `${direction}: ${entry.id} is on the map with no lessons`);
      assert.ok(entry.vocabCount > 0, `${direction}: ${entry.id} counts no words`);
    }
  }
});

test("the tracker agrees with the lesson data it claims to describe", () => {
  for (const direction of DIRECTIONS) {
    const guide = guideFor(direction);
    for (const entry of guide.tracker) {
      const module = MODULES.find((m) => m.id === entry.id);
      const group = Workbook.lessonsFor(module, lessons);
      const words = group.reduce((sum, l) => sum + (l[direction].vocabulary || []).length, 0);
      assert.equal(entry.lessonCount, group.length, `${direction} ${entry.id}: lesson count`);
      assert.equal(entry.vocabCount, words, `${direction} ${entry.id}: vocabulary count`);
    }
  }
});

/* --- nothing reaches the page empty -------------------------------------- */

test("every part of the guide is filled in, in both directions", () => {
  for (const direction of DIRECTIONS) {
    const guide = guideFor(direction);
    const holes = [];

    guide.cycle.forEach((step) => {
      if (blank(step.title)) holes.push(`cycle ${step.id}: title`);
      if (blank(step.text)) holes.push(`cycle ${step.id}: text`);
      if (!(Number(step.minutes) > 0)) holes.push(`cycle ${step.id}: minutes`);
    });

    guide.correction.forEach((mark) => {
      ["code", "name", "note", "wrong", "right"].forEach((field) => {
        if (blank(mark[field])) holes.push(`correction ${mark.code}: ${field}`);
      });
      assert.notEqual(mark.wrong, mark.right, `${direction} ${mark.code}: the fix changes nothing`);
    });

    guide.sounds.forEach((sound) => {
      ["letters", "name", "note"].forEach((field) => {
        if (blank(sound[field])) holes.push(`sound ${sound.letters}: ${field}`);
      });
      if (!sound.examples.length) holes.push(`sound ${sound.letters}: no examples`);
      sound.examples.forEach((word, i) => {
        if (blank(word)) holes.push(`sound ${sound.letters}: example ${i}`);
      });
    });

    guide.tracker.forEach((entry) => {
      if (blank(entry.title)) holes.push(`tracker ${entry.id}: title`);
      if (blank(entry.tier)) holes.push(`tracker ${entry.id}: tier`);
    });

    assert.deepStrictEqual(holes, [], `${direction}: empty fields would print as blank space`);
  }
});

test("the guide is written in the reader's language and teaches the other one", () => {
  const es = guideFor("es");
  const en = guideFor("en");

  /* The reader of the Spanish course reads English, and the reverse. If the
     resolver ignored uiLang both guides would come out identical. */
  assert.notEqual(es.cycle[0].title, en.cycle[0].title, "the cycle is not translated");
  assert.notEqual(es.correction[0].name, en.correction[0].name, "the marks are not translated");
  assert.equal(es.uiLang, "en");
  assert.equal(en.uiLang, "es");

  for (const direction of DIRECTIONS) {
    const guide = guideFor(direction);
    for (const step of guide.cycle) {
      const authored = GUIDE.cycle.find((s) => s.id === step.id);
      assert.equal(step.title, authored[guide.uiLang].title,
        `${direction}: cycle ${step.id} came from the wrong language`);
    }
    for (const mark of guide.correction) {
      const authored = GUIDE.correction.find((m) => m.code === mark.code);
      assert.equal(mark.name, authored[guide.uiLang].name,
        `${direction}: ${mark.code} came from the wrong language`);
      /* The worked example is in the language being learned, not the one the
         explanation is written in — a Spanish learner needs a Spanish
         mistake to recognize. */
      assert.equal(mark.wrong, authored.example[direction].wrong,
        `${direction}: ${mark.code} shows an example from the wrong language`);
    }
  }
});

test("the sound guide describes the language being learned, not the reader's", () => {
  const es = guideFor("es");
  const en = guideFor("en");
  assert.deepStrictEqual(
    Array.from(es.sounds.map((s) => s.letters)),
    Array.from(GUIDE.sounds.es.map((s) => s.letters)),
    "the Spanish course must teach Spanish sounds"
  );
  assert.deepStrictEqual(
    Array.from(en.sounds.map((s) => s.letters)),
    Array.from(GUIDE.sounds.en.map((s) => s.letters)),
    "the English course must teach English sounds"
  );
  assert.notDeepStrictEqual(
    Array.from(es.sounds.map((s) => s.letters)),
    Array.from(en.sounds.map((s) => s.letters)),
    "both directions are being handed the same sound guide"
  );
});

/* --- the parts that must survive a smaller course ------------------------ */

test("packing survives more weeks than modules without inventing empty ones", () => {
  const three = [
    { id: "a", title: "A", lessonCount: 1, vocabCount: 1, tier: "" },
    { id: "b", title: "B", lessonCount: 1, vocabCount: 1, tier: "" },
    { id: "c", title: "C", lessonCount: 1, vocabCount: 1, tier: "" }
  ];
  const packed = Workbook.packWeeks(three, 12);
  assert.equal(packed.length, 3, "there cannot be more weeks than there are modules");
  assert.deepStrictEqual(
    Array.from(packed.map((w) => w.modules.map((m) => m.id).join(""))),
    Array.from(["a", "b", "c"]),
    "one module each, in order"
  );
});

/*
 * The reservation rule, tested where the real course cannot test it.
 *
 * Balancing alone is not enough to keep a week from coming out empty: an
 * early week that takes one module too many starves a late one, and the
 * lesson counts of the actual course happen never to trigger it. Removing the
 * guard and running the real data produces a perfectly good schedule, so this
 * invariant has to be exercised on shapes that do trigger it or the guard is
 * protected by nothing.
 */
test("an early week may not take a module a later week needs", () => {
  const shapes = [
    { sizes: [1, 1, 50], weeks: 3 },
    { sizes: [1, 1, 1, 90], weeks: 4 },
    { sizes: [2, 2, 2, 60], weeks: 4 }
  ];
  for (const shape of shapes) {
    const entries = shape.sizes.map((size, i) => ({
      id: `m${i}`, title: `M${i}`, lessonCount: size, vocabCount: 1, tier: ""
    }));
    const packed = Workbook.packWeeks(entries, shape.weeks);
    const empty = packed.filter((week) => week.modules.length === 0).map((week) => week.week);
    assert.deepStrictEqual(Array.from(empty), [],
      `sizes ${shape.sizes.join(",")} over ${shape.weeks} weeks left a week with nothing in it`);
    assert.equal(packed.length, shape.weeks, "and the schedule is still the length asked for");
    const all = packed.flatMap((week) => week.modules.map((m) => m.id));
    assert.deepStrictEqual(Array.from(all), Array.from(entries.map((m) => m.id)),
      "and nothing was lost or reordered getting there");
  }
});

test("packing puts one very large module in a week of its own", () => {
  const lumpy = [
    { id: "a", title: "A", lessonCount: 1, vocabCount: 1, tier: "" },
    { id: "big", title: "Big", lessonCount: 40, vocabCount: 1, tier: "" },
    { id: "c", title: "C", lessonCount: 1, vocabCount: 1, tier: "" }
  ];
  const packed = Workbook.packWeeks(lumpy, 3);
  assert.equal(packed.length, 3);
  const holding = packed.find((week) => week.modules.some((m) => m.id === "big"));
  assert.deepStrictEqual(Array.from(holding.modules.map((m) => m.id)), Array.from(["big"]),
    "a 40-lesson module should not be padded with more work");
  const all = packed.flatMap((week) => week.modules.map((m) => m.id));
  assert.deepStrictEqual(Array.from(all), Array.from(["a", "big", "c"]), "nothing lost or reordered");
});

test("the guide refuses to build rather than print an empty one", () => {
  assert.equal(Workbook.buildGuide({ modules: [], lessons, direction: "es" }), null,
    "no modules means no schedule");
  assert.equal(Workbook.buildGuide({ modules: MODULES, lessons: [], direction: "es" }), null,
    "no lessons means every module is empty, so there is nothing to schedule");
});

test("a module with no lessons behind it never reaches the schedule", () => {
  const withGhost = MODULES.concat([{
    id: "99-ghost",
    block: "data/lessons/99-does-not-exist.js",
    title: { en: "Ghost", es: "Fantasma" }
  }]);
  const guide = Workbook.buildGuide({ modules: withGhost, lessons, direction: "es" });
  const ids = guide.map.flatMap((week) => week.modules.map((m) => m.id));
  assert.ok(!ids.includes("99-ghost"), "an empty module would ask for a week spent on nothing");
  assert.ok(!guide.tracker.some((entry) => entry.id === "99-ghost"), "and must not be tracked either");
});
