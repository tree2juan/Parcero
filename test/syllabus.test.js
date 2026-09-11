/*
 * The syllabus: the course as an ordered path.
 *
 * These tests guard a different claim from test/cefr.test.js. That file asks
 * whether a band is *detected* correctly; this one asks whether the course is
 * *arranged* correctly — every lesson reachable, every stage a sane size, and
 * the route through them always moving forward.
 *
 * Two failures are worth naming, because both shipped before this file existed
 * and neither was visible on screen:
 *
 *   - Banding modules by detecting the grammar in their lessons put 63 of the
 *     78 English modules into B1, because real speech at any level carries a
 *     relative clause. A "path" where four fifths of the course is one stage
 *     is not a path. The band is therefore authored in data/modules.js, and
 *     the size test below is what stops it drifting back.
 *   - COURSE_MODULES is not in difficulty order: 34 of its 78 entries sit
 *     below the hardest module that precedes them. Read straight down, the
 *     course reaches its hardest material at #40 and then falls back to
 *     starter verbs at #69. The path exists to regroup that, so the test that
 *     the presented order never regresses is the point of the whole file.
 */
const test = require("node:test");
const assert = require("node:assert/strict");
const vm = require("node:vm");

const { read, dataSource } = require("./data-source.js");
const syllabus = require("../syllabus.js");
const { CEFR_BANDS } = require("../data/cefr.js");

/* data/modules.js is a browser global with no exports, so it is evaluated and
   then asked for its binding by name. */
const MODULES = vm.runInNewContext(read("data/modules.js") + "\n;COURSE_MODULES;");
const lessons = vm.runInNewContext(dataSource() + "\n;lessons;");

const allOf = (plan) => plan.stages.flatMap((stage) => stage.modules.flatMap((entry) => entry.lessons));

test("every module is banded, and only on a band the scale admits", () => {
  for (const entry of MODULES) {
    assert.ok(entry.band, `module ${entry.id} has no band`);
    assert.ok(CEFR_BANDS.includes(entry.band), `module ${entry.id} claims ${entry.band}, which is not on the scale`);
  }
  /* Array.from re-homes the value: these arrays are built inside the vm realm,
     where Array.prototype is a different object, and strict deep-equality
     compares prototypes before contents. */
  assert.deepEqual(Array.from(syllabus.outline(lessons, MODULES).unbanded), []);
});

test("every lesson is reachable from the path", () => {
  const plan = syllabus.outline(lessons, MODULES);
  /* A lesson in no module is content the learner can never be routed to. It
     is collected rather than dropped precisely so this can fail loudly. */
  assert.deepEqual(Array.from(plan.orphans, (lesson) => lesson.id), []);
  assert.equal(allOf(plan).length, lessons.length);
});

test("no lesson is placed in two modules", () => {
  const seen = new Set();
  for (const lesson of allOf(syllabus.outline(lessons, MODULES))) {
    assert.ok(!seen.has(lesson.id), `${lesson.id} appears in more than one module`);
    seen.add(lesson.id);
  }
});

test("every stage holds between ten and twenty modules", () => {
  const plan = syllabus.outline(lessons, MODULES);
  assert.equal(plan.stages.length, CEFR_BANDS.length);
  for (const stage of plan.stages) {
    const count = stage.modules.length;
    assert.ok(count >= 10 && count <= 20,
      `stage ${stage.band} holds ${count} modules; a stage that size is a wall, not a step`);
  }
});

test("the path never asks the learner to go backwards", () => {
  /* COURSE_MODULES itself regresses; the point of the path is that what is
     presented does not. Stages must come out in scale order. */
  const bands = syllabus.outline(lessons, MODULES).stages.map((stage) => stage.band);
  assert.deepEqual(bands, CEFR_BANDS);
  const authored = MODULES.map((entry) => CEFR_BANDS.indexOf(entry.band));
  assert.ok(authored.some((rank, i) => i > 0 && rank < Math.max(...authored.slice(0, i))),
    "the authored order no longer regresses, so this test is now guarding nothing");
});

test("modules keep their authored order inside a stage", () => {
  const plan = syllabus.outline(lessons, MODULES);
  for (const stage of plan.stages) {
    const expected = Array.from(MODULES.filter((entry) => entry.band === stage.band), (entry) => entry.id);
    assert.deepEqual(Array.from(stage.modules, (entry) => entry.id), expected);
  }
});

test("a lesson reports the band its module teaches", () => {
  const plan = syllabus.outline(lessons, MODULES);
  const first = plan.stages[0].modules[0];
  assert.equal(syllabus.bandOfLesson(first.lessons[0], lessons, MODULES), first.band);
  assert.equal(syllabus.bandOfLesson({ id: "not-a-lesson" }, lessons, MODULES), null);
  assert.equal(syllabus.bandOfLesson(null, lessons, MODULES), null);
});

test("a fresh learner is sent to the very first lesson", () => {
  const plan = syllabus.outline(lessons, MODULES);
  const first = plan.stages[0].modules[0];
  const report = syllabus.progress(lessons, MODULES, () => null);
  assert.equal(report.done, 0);
  assert.equal(report.total, lessons.length);
  assert.deepEqual(report.next, {
    band: first.band,
    moduleId: first.id,
    lessonId: first.lessons[0].id
  });
});

test("the next lesson is the first unfinished one, not the first failed one", () => {
  /*
   * The original version checked for a failed lesson before an untouched one,
   * so a learner who scored 0.4 on lesson three and had never opened lesson
   * two was sent forward to retake three. Ordering is the whole contract of
   * a "continue" button, so it is asserted directly.
   */
  const plan = syllabus.outline(lessons, MODULES);
  const module0 = plan.stages[0].modules[0];
  const [one, two, three] = module0.lessons;
  assert.ok(three, "expected the first module to hold at least three lessons");

  const scores = new Map([[one.id, 1], [three.id, 0.4]]);
  const report = syllabus.progress(lessons, MODULES, (lesson) =>
    (scores.has(lesson.id) ? scores.get(lesson.id) : null));
  assert.equal(report.next.lessonId, two.id);
});

test("a lesson answered badly still counts as unfinished", () => {
  const plan = syllabus.outline(lessons, MODULES);
  const first = plan.stages[0].modules[0].lessons[0];
  const report = syllabus.progress(lessons, MODULES, (lesson) =>
    (lesson.id === first.id ? syllabus.PASS - 0.01 : 1));
  assert.equal(report.next.lessonId, first.id);
  assert.equal(report.done, lessons.length - 1);
});

test("nothing is next once every lesson is mastered", () => {
  const report = syllabus.progress(lessons, MODULES, () => 1);
  assert.equal(report.next, null);
  assert.equal(report.done, report.total);
  assert.equal(report.share, 1);
  for (const stage of report.stages) {
    assert.ok(stage.complete, `stage ${stage.band} is not complete at full marks`);
    assert.equal(stage.modulesComplete, stage.moduleCount);
  }
});

test("finishing one stage does not mark the others complete", () => {
  const plan = syllabus.outline(lessons, MODULES);
  const done = new Set(plan.stages[0].modules.flatMap((entry) => entry.lessons.map((l) => l.id)));
  const report = syllabus.progress(lessons, MODULES, (lesson) => (done.has(lesson.id) ? 1 : null));
  assert.ok(report.stages[0].complete);
  for (const stage of report.stages.slice(1)) {
    assert.equal(stage.complete, false);
    assert.equal(stage.done, 0);
  }
  assert.equal(report.next.band, report.stages[1].band);
});

test("the pass mark is the one attainment already uses", () => {
  /* Two different thresholds would let the path call a lesson finished while
     the level ladder refused to count it. */
  assert.equal(syllabus.PASS, 0.8);
  assert.ok(read("cefr.js").includes("0.8"), "cefr.js no longer mentions the 0.8 pass mark");
});

test("the outline is cached on the arrays it was handed", () => {
  assert.equal(syllabus.outline(lessons, MODULES), syllabus.outline(lessons, MODULES));
  assert.notEqual(syllabus.outline(lessons.slice(), MODULES), syllabus.outline(lessons, MODULES));
});

test("missing data produces an empty path rather than an exception", () => {
  const plan = syllabus.outline(undefined, undefined);
  assert.equal(plan.stages.length, CEFR_BANDS.length);
  assert.deepEqual(plan.orphans, []);
  const report = syllabus.progress(undefined, undefined, null);
  assert.equal(report.total, 0);
  assert.equal(report.share, 0);
  assert.equal(report.next, null);
});

/* ---------- the order the learner actually walks ---------- */

test("the sequence holds every lesson the path places, exactly once", () => {
  const order = syllabus.sequence(lessons, MODULES);
  const placed = allOf(syllabus.outline(lessons, MODULES));
  assert.equal(order.length, placed.length);
  assert.equal(new Set(order.map((lesson) => lesson.id)).size, order.length);
});

test("the sequence never steps back down the scale", () => {
  /*
   * This is the whole reason the sequence exists. Walking the authored array
   * instead crossed a stage boundary 23 times and ran backwards 10 times --
   * one step handed an A2 learner a B2 lesson.
   *
   * bandOfLesson takes (lesson, lessons, modules). Calling it with two
   * arguments returns null for every lesson, indexOf(null) is -1 for every
   * lesson, and the comparison then passes without comparing anything -- so
   * the band is asserted non-null first, or this test guards nothing.
   */
  const order = syllabus.sequence(lessons, MODULES);
  const bands = order.map((lesson) => syllabus.bandOfLesson(lesson, lessons, MODULES));
  assert.ok(bands.every((band) => syllabus.BANDS.includes(band)),
    "every lesson on the path must report a real band, or the check below is empty");

  for (let i = 1; i < order.length; i += 1) {
    const before = syllabus.BANDS.indexOf(bands[i - 1]);
    const after = syllabus.BANDS.indexOf(bands[i]);
    assert.ok(after >= before,
      `step ${i} goes ${bands[i - 1]} -> ${bands[i]}; the pager would demote the learner`);
  }
});

test("neighbors walks the sequence, and stops at both ends", () => {
  const order = syllabus.sequence(lessons, MODULES);
  const first = syllabus.neighbors(order[0], lessons, MODULES);
  assert.equal(first.index, 0);
  assert.equal(first.total, order.length);
  assert.equal(first.previous, null, "there is nothing before the first lesson");
  assert.equal(first.next.id, order[1].id);

  const last = syllabus.neighbors(order[order.length - 1], lessons, MODULES);
  assert.equal(last.index, order.length - 1);
  assert.equal(last.next, null, "there is nothing after the last lesson");
  assert.equal(last.previous.id, order[order.length - 2].id);

  const middle = syllabus.neighbors(order[5], lessons, MODULES);
  assert.equal(middle.previous.id, order[4].id);
  assert.equal(middle.next.id, order[6].id);
});

test("a lesson the path cannot place has no neighbors rather than wrong ones", () => {
  assert.equal(syllabus.neighbors(null, lessons, MODULES), null);
  assert.equal(syllabus.neighbors({ id: "no-such-lesson" }, lessons, MODULES), null);
});

test("the pager steps through the path, not through the authored array", () => {
  /*
   * The regression this guards is invisible by reading: both orders are the
   * same 247 lessons, so indexing `lessons` looks correct and quietly delivers
   * a different course. Only 45 of 247 lessons sit at the same position in
   * both, so a pager built on the array is wrong for 202 of them.
   */
  const app = read("app.js");
  const walker = app.match(/function pathNeighbors\([^)]*\)[\s\S]*?\n\}/);
  assert.ok(walker, "app.js must resolve pager steps in pathNeighbors()");
  assert.match(walker[0], /neighbors\(/,
    "the pager must ask the syllabus for neighbors instead of doing its own arithmetic");

  for (const id of ["previous-lesson", "next-lesson"]) {
    const handler = app.match(new RegExp(`\\$\\("#${id}"\\)\\.addEventListener\\([\\s\\S]*?\\n\\}\\);`));
    assert.ok(handler, `app.js must wire #${id}`);
    assert.match(handler[0], /pathNeighbors\(/,
      `#${id} must step along the path; indexing the lesson array skips stages`);
    assert.doesNotMatch(handler[0], /lessonIndex\(\)/,
      `#${id} went back to the authored order, which crosses CEFR stages`);
  }
});

/* ---------- the view ---------- */

function pathSource() {
  const app = read("app.js");
  const start = app.indexOf("const syllabusApi =");
  const end = app.indexOf("function recordPractice(");
  assert.ok(start > -1 && end > start, "the path renderer moved; this test must follow it");
  return app.slice(start, end);
}

test("every element the path looks up exists in index.html", () => {
  const markup = read("index.html");
  const ids = Array.from(pathSource().matchAll(/\$\("#([\w-]+)"\)/g), (m) => m[1]);
  assert.ok(ids.length >= 6, "expected the path renderer to look elements up");
  for (const id of new Set(ids)) {
    assert.ok(markup.includes(`id="${id}"`), `index.html has no #${id} for the path to fill`);
  }
});

test("every class the path paints is styled", () => {
  const css = read("styles.css");
  /* Ends the selector, so .path-lessonX cannot stand in for .path-lesson. */
  const styled = (name) => new RegExp(`\\.${name}(?![-\\w])`).test(css);
  const source = pathSource();
  const classes = Array.from(source.matchAll(/class="([^"$]+)"/g))
    .flatMap((m) => m[1].split(/\s+/))
    .filter((name) => name && !name.includes("{"));
  assert.ok(classes.length > 0, "expected the path renderer to paint classes");
  for (const name of new Set(classes)) {
    assert.ok(styled(name), `styles.css never styles .${name}`);
  }
  /* States added conditionally, which no class="" literal reveals. */
  for (const name of ["is-complete", "is-done", "is-next", "path-stage", "path-module", "path-lesson"]) {
    assert.ok(styled(name), `styles.css never styles .${name}`);
  }
});

test("index.html loads syllabus.js after its data and before the app", () => {
  const markup = read("index.html");
  const at = (file) => markup.indexOf(`src="${file}"`);
  for (const file of ["data/modules.js", "data/cefr.js", "syllabus.js", "app.js"]) {
    assert.ok(at(file) > -1, `index.html does not load ${file}`);
  }
  assert.ok(at("data/modules.js") < at("syllabus.js"), "syllabus.js loads before the modules it groups");
  assert.ok(at("data/cefr.js") < at("syllabus.js"), "syllabus.js loads before the scale it orders by");
  assert.ok(at("syllabus.js") < at("app.js"), "app.js renders the path before syllabus.js exists");
});

test("the path is a view the nav can reach", () => {
  const app = read("app.js");
  const markup = read("index.html");
  assert.ok(/const VIEWS = \[[^\]]*"path"/.test(app), "app.js does not register a path view");
  assert.ok(/"#path": "path"/.test(app), "app.js does not route #path");
  assert.ok(markup.includes('id="view-path"'), "index.html has no path view");
  assert.ok(markup.includes('href="#path"'), "nothing links to the path");
});

test("both languages translate every string the path uses", () => {
  const source = read("i18n.js");
  const keys = Array.from(pathSource().matchAll(/t\("([\w.]+)"/g), (m) => m[1])
    .filter((key) => key.startsWith("path.") || key.startsWith("hub."));
  /* The stage names are built from the band, so they never appear literally. */
  for (const band of CEFR_BANDS) keys.push(`path.stage.${band}.name`, `path.stage.${band}.blurb`);
  assert.ok(keys.length > 6, "expected the path to use translated strings");

  const blocks = { en: source.indexOf("  en: {"), es: source.indexOf("  es: {") };
  assert.ok(blocks.en > -1 && blocks.es > blocks.en, "i18n.js no longer has an en block then an es block");
  const english = source.slice(blocks.en, blocks.es);
  const spanish = source.slice(blocks.es);
  for (const key of new Set(keys)) {
    assert.ok(english.includes(`"${key}"`), `i18n.js has no English string for ${key}`);
    assert.ok(spanish.includes(`"${key}"`), `i18n.js has no Spanish string for ${key}`);
  }
});

test("the home page counts its modules instead of claiming a number", () => {
  /*
   * "Eight guided modules" stayed on the home page from the eighth module to
   * the seventy-eighth. Any literal count in the blurb is the same bug
   * waiting to happen, so the string must carry placeholders and the app must
   * fill them from the data.
   */
  const source = read("i18n.js");
  for (const match of source.matchAll(/"hub\.path\.blurb": "([^"]+)"/g)) {
    assert.ok(match[1].includes("{modules}") && match[1].includes("{lessons}"),
      `hub.path.blurb hard-codes its counts: ${match[1]}`);
  }
  assert.ok(pathSource().includes("COURSE_MODULES.length"), "the blurb is not filled from the data");
  assert.ok(!/Eight guided|Ocho m\u00f3dulos/.test(source), "the stale eight-module claim is back");
  assert.ok(!/0 of 8 lessons/.test(read("index.html")), "the stale eight-lesson progress label is back");
});
