/*
 * The teaching layer as rendered pages.
 *
 * assessment.js is proven honest by test/assessment.test.js, and the handbook
 * is proven whole by test/course-plan.test.js. Neither says anything about
 * whether a teacher or a student ever sees any of it. A template that
 * interpolates `undefined`, an i18n key with nothing behind it, or a class the
 * stylesheet never heard of leaves both those files green and still hands
 * somebody a broken page.
 *
 * So this renders every panel of the teach view and a real test paper, in both
 * directions, through the real renderers with the real translation table, and
 * reads the result.
 *
 * It matters more here than anywhere else in the repo, because these two files
 * are the newest and were written without a browser to run them in. Everything
 * below is a defect that shipped silently in some earlier round of this work:
 * a hole where a value should be, a key that never got translated, a class
 * with no style, an element the script reaches for that index.html does not
 * have.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");
const fs = require("node:fs");
const path = require("node:path");

const { dataSource } = require("./data-source.js");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const html = read("index.html");
const css = read("styles.css");

const { lessons } = vm.runInNewContext(`${dataSource({ schema: true })}\n({ lessons });`, {}, {
  filename: "lessons-bundle.js"
});
const MODULES = vm.runInNewContext(`${read("data/modules.js")}\n;COURSE_MODULES;`);

/*
 * A document with nothing in it.
 *
 * Both start() functions look for their host element, find nothing and return.
 * That is the point: the wiring is not under test here, the rendering is.
 * Everything the IIFE touches on the way to defining its renderers has to
 * exist, and nothing more.
 */
function loadUi(direction) {
  const store = new Map();
  const doc = {
    readyState: "complete",
    body: { appendChild: () => {}, removeChild: () => {} },
    createElement: () => ({ style: {}, click: () => {}, setAttribute: () => {} }),
    querySelector: (selector) =>
      (selector === "input[name=direction]:checked" ? { value: direction } : null),
    querySelectorAll: () => [],
    addEventListener: () => {}
  };
  const sandbox = {
    document: doc,
    localStorage: {
      getItem: (k) => (store.has(k) ? store.get(k) : null),
      setItem: (k, v) => store.set(k, String(v)),
      removeItem: (k) => store.delete(k)
    },
    matchMedia: () => ({ matches: false, addEventListener: () => {} }),
    addEventListener: () => {},
    URL: { createObjectURL: () => "blob:", revokeObjectURL: () => {} },
    Blob: function Blob() {},
    console
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  sandbox.global = sandbox;
  vm.createContext(sandbox);
  for (const file of [
    "i18n.js",
    "data/modules.js",
    "data/rubrics.js",
    "data/course-plan.js",
    "data/exam-tasks.js",
    "data/stories.js",
    "data/cefr.js",
    "data/teaching.js",
    "cefr.js",
    "syllabus.js",
    "progress.js",
    "assessment.js",
    "teaching.js",
    "assessment-ui.js",
    "teach-ui.js"
  ]) {
    vm.runInContext(read(file), sandbox, { filename: file });
  }
  /* The corpus is loaded last, the way index.html loads it: as a global the
     renderers read rather than as something passed in. */
  vm.runInContext(`${dataSource({ schema: true })}`, sandbox, { filename: "lessons.js" });
  /*
   * Reading a value back out has to go through the context, not through the
   * sandbox object. Every one of these data files declares with `const`, which
   * lands in the context's global lexical environment and never becomes a
   * property of the global object — the same fact that made window.lessons
   * silently empty in the browser.
   */
  sandbox.evaluate = (expression) => vm.runInContext(expression, sandbox, { filename: "eval.js" });
  return sandbox;
}

const PANELS = ["Handbook", "Scheme", "Rubrics", "Record"];

/* Every panel, rendered once in each direction, reused below. */
const panels = [];
const papers = [];
for (const direction of ["es", "en"]) {
  const sandbox = loadUi(direction);
  const teach = sandbox.ParceroTeachUI;
  const paper = sandbox.ParceroAssessmentUI;
  assert.ok(teach, `teach-ui.js published nothing for direction ${direction}`);
  assert.ok(paper, `assessment-ui.js published nothing for direction ${direction}`);

  for (const name of PANELS) {
    panels.push({ direction, name, out: teach[`render${name}`]() });
  }

  /*
   * One checkpoint and one band exam, built through the real engine and given
   * everything the UI gives it — the stories and the writing task included,
   * because an exam built without them silently drops two of its three
   * sections and the paper still looks complete.
   */
  const engine = sandbox.ParceroAssessment;
  const corpus = sandbox.evaluate("lessons");
  const stories = sandbox.evaluate("storyItems");
  const tasks = sandbox.evaluate("EXAM_TASKS");
  /* Modules do not carry their lessons; the syllabus works out which lesson
     belongs to which module, and that is what the UI asks too. */
  const index = sandbox.ParceroTeaching.byModule(
    sandbox.ParceroSyllabus.outline(corpus, MODULES)
  );
  const lessonsOf = (id) => ((index.get(id) || {}).lessons || []);
  const bandLessons = MODULES.filter((m) => m.band === "A1").flatMap((m) => lessonsOf(m.id));

  /* The first module with enough questions to build a full paper, so the
     rendering is exercised at its real size rather than at its floor. */
  const chosen = MODULES.find((m) => lessonsOf(m.id).length >= 3) || MODULES[0];

  papers.push({
    direction,
    kind: "checkpoint",
    state: {
      kind: "checkpoint",
      id: chosen.id,
      form: "A",
      paper: engine.checkpoint({
        moduleId: chosen.id,
        lessons: lessonsOf(chosen.id),
        direction,
        form: "A"
      })
    }
  });
  papers.push({
    direction,
    kind: "exam",
    state: {
      kind: "exam",
      id: "A1",
      form: "A",
      paper: engine.exam({
        band: "A1",
        lessons: bandLessons,
        stories,
        writing: (tasks.A1 || {})[direction] || null,
        direction,
        form: "A"
      })
    }
  });
}

/* Rendered papers, built once with the renderer from the matching direction. */
const sheets = papers.map(({ direction, kind, state }) => ({
  direction,
  kind,
  state,
  out: loadUi(direction).ParceroAssessmentUI.renderPaper(state)
}));

test("every teach panel renders in both directions", () => {
  assert.strictEqual(panels.length, PANELS.length * 2);
  for (const { direction, name, out } of panels) {
    assert.strictEqual(typeof out, "string", `render${name} (${direction}) returned no string`);
    assert.ok(out.length > 400,
      `render${name} (${direction}) rendered ${out.length} characters`);
  }
});

test("no teach panel prints a hole where a value should be", () => {
  /*
   * The failure this exists for is silent. `${piece.wieght}` renders the word
   * "undefined" into the page and throws nothing; a missing array renders
   * "[object Object]"; a division by a missing count renders "NaN". All three
   * look like content until somebody reads them.
   */
  for (const { direction, name, out } of panels) {
    for (const rot of ["undefined", "[object Object]", "NaN", "null"]) {
      assert.ok(!out.includes(rot),
        `render${name} (${direction}) rendered the literal text "${rot}"`);
    }
  }
});

test("every placeholder in a label gets filled in", () => {
  /*
   * ParceroI18n.t is t(key, direction, values). Call it as t(key, values) and
   * two things go wrong at once: the direction argument receives an object so
   * the whole view renders in one fixed language, and `values` arrives
   * undefined so nothing is substituted. The second half is the visible one —
   * "{done} of {total} answered" prints with the braces still in it — and it
   * is the half no other test in this file would have caught, because a brace
   * is not "undefined" and is not an untranslated key.
   */
  const holes = [];
  for (const { direction, name, out } of panels) {
    for (const hit of out.match(/\{[a-zA-Z]+\}/g) || []) {
      holes.push(`render${name} (${direction}) printed ${hit}`);
    }
  }
  for (const { direction, kind, out } of sheets) {
    for (const hit of out.match(/\{[a-zA-Z]+\}/g) || []) {
      holes.push(`the ${kind} paper (${direction}) printed ${hit}`);
    }
  }
  assert.deepStrictEqual(holes, [], "these placeholders were never substituted");
});

test("every label the teaching layer prints has been translated", () => {
  /*
   * t() returns the key when it cannot translate it, so an untranslated label
   * shows up in the output as the raw dotted key. Searching the rendered HTML
   * catches every one, including the keys chosen at render time from data,
   * which no scan of the source could enumerate.
   */
  for (const { direction, name, out } of panels) {
    const leaked = out.match(/\b(teach|test|path)\.[a-zA-Z]+(\.[a-zA-Z]+)*/g) || [];
    assert.deepStrictEqual(Array.from(new Set(leaked)), [],
      `render${name} (${direction}) printed untranslated key(s)`);
  }
});

test("both interface languages are used, and the panels differ between them", () => {
  /*
   * A panel that renders identically in both directions means the direction
   * never reached the renderer — which is the whole point of the teach view,
   * since the two directions plan two different classes.
   */
  for (const name of PANELS) {
    const es = panels.find((p) => p.direction === "es" && p.name === name).out;
    const en = panels.find((p) => p.direction === "en" && p.name === name).out;
    assert.notStrictEqual(es, en, `render${name} ignores the direction`);
  }
});

test("the handbook a teacher reads is in the teacher's own language", () => {
  /*
   * Studying Spanish means an English-reading teacher; studying English means
   * a Spanish-reading one. The handbook is a translation pair, so this is a
   * straight language check rather than the inversion the module notes need.
   */
  const { COURSE_PLAN } = require("../data/course-plan.js");
  const es = panels.find((p) => p.direction === "es" && p.name === "Handbook").out;
  const en = panels.find((p) => p.direction === "en" && p.name === "Handbook").out;
  assert.ok(es.includes(COURSE_PLAN.about.title.en),
    "the Spanish-learning side is not reading the English handbook");
  assert.ok(en.includes(COURSE_PLAN.about.title.es),
    "the English-learning side is not reading the Spanish handbook");
});

test("a checkpoint and an exam paper both render, and render no holes", () => {
  for (const { direction, kind, out } of sheets) {
    assert.ok(out && out.length > 500,
      `the ${kind} paper (${direction}) rendered ${out ? out.length : 0} characters`);
    for (const rot of ["undefined", "[object Object]", "NaN", "null"]) {
      assert.ok(!out.includes(rot),
        `the ${kind} paper (${direction}) rendered the literal text "${rot}"`);
    }
    const leaked = out.match(/\btest\.[a-zA-Z]+(\.[a-zA-Z]+)*/g) || [];
    assert.deepStrictEqual(Array.from(new Set(leaked)), [],
      `the ${kind} paper (${direction}) printed untranslated key(s)`);
  }
});

test("an exam paper carries all three of its sections", () => {
  /*
   * exam() drops the reading and writing sections silently when it is not
   * given stories or a task — the paper still builds, still marks, and is a
   * third of the exam it claims to be. The UI does pass them, so this pins
   * that it keeps doing so.
   */
  for (const { direction, kind, state, out } of sheets) {
    if (kind !== "exam") continue;
    assert.ok(state.paper.reading.length > 0,
      `the A1 exam (${direction}) has no reading section`);
    assert.ok(state.paper.writing,
      `the A1 exam (${direction}) has no writing task`);
    assert.strictEqual((out.match(/class="test-section"/g) || []).length, 3,
      `the A1 exam (${direction}) did not render three sections`);
  }
});

test("every question on a paper reaches the page", () => {
  /*
   * A paper that drops a question still scores out of the number it asked, so
   * the mark looks fine and the student simply never saw item nine.
   */
  for (const { direction, kind, state, out } of sheets) {
    const questions = state.paper.questions || state.paper.use;
    assert.ok(questions.length > 0, `the ${kind} paper (${direction}) has no questions`);
    questions.forEach((q, i) => {
      assert.ok(out.includes(`name="q${i}"`),
        `the ${kind} paper (${direction}) never renders question ${i + 1}`);
      assert.ok(out.includes(escapeHtml(q.prompt)),
        `the ${kind} paper (${direction}) drops the prompt of question ${i + 1}`);
      for (const choice of q.choices) {
        assert.ok(out.includes(escapeHtml(choice)),
          `the ${kind} paper (${direction}) drops an option of question ${i + 1}`);
      }
    });
  }
});

test("a paper shows no answer until it has been marked", () => {
  /*
   * This is the difference between a test and a practice round. If the correct
   * answer is anywhere in the markup the paper is open-book, whether or not
   * anything is styled to show it. The one place an answer legitimately
   * appears is the reading section, which is short-answer, cannot be machine
   * marked, and hides its model answer behind a <details> the student has to
   * choose to open.
   */
  for (const { direction, kind, state, out } of sheets) {
    const body = out.replace(/<details class="test-answer"[\s\S]*?<\/details>/g, "");
    const questions = state.paper.questions || state.paper.use;
    questions.forEach((q, i) => {
      assert.ok(!body.includes(`data-answer="${q.answer}"`),
        `the ${kind} paper (${direction}) ships the answer to question ${i + 1}`);
      assert.ok(!new RegExp(`name="q${i}"[^>]*checked`).test(body),
        `the ${kind} paper (${direction}) pre-selects an answer to question ${i + 1}`);
    });
    assert.ok(!/\bis-(right|wrong|correct)\b/.test(body),
      `the ${kind} paper (${direction}) marks answers before it is submitted`);
  }
});

test("the language being studied is marked up on a paper", () => {
  /*
   * Not decoration: a screen reader handed Spanish with English phonology is
   * unintelligible, and both languages appear on every paper, so neither can
   * be inferred from the document.
   */
  for (const { direction, kind, out } of sheets) {
    assert.ok(out.includes(`lang="${direction}"`),
      `the ${kind} paper (${direction}) never marks the language being taught`);
  }
});

test("every element the teaching scripts look up exists in index.html", () => {
  /*
   * A querySelector that misses returns null and the feature silently does
   * nothing — or throws on the first property access, which is worse, because
   * it takes the rest of the script with it.
   */
  const ids = [
    "view-teach", "view-test",
    "teach-panel-handbook", "teach-panel-scheme", "teach-panel-rubrics", "teach-panel-record",
    "teach-print",
    "test-kind", "test-title", "test-lead", "test-paper",
    "test-foot", "test-progress", "test-submit", "test-result", "test-exit"
  ];
  for (const id of ids) {
    assert.ok(html.includes(`id="${id}"`), `index.html has no #${id}`);
  }
});

test("every class the teaching layer paints is styled", () => {
  /*
   * An unstyled class is not a crash, it is a page that looks like a draft.
   * Collecting them from the rendered output rather than from the source
   * catches the ones built by string concatenation.
   */
  const painted = new Set();
  const collect = (out) => {
    for (const hit of out.match(/class="([^"]+)"/g) || []) {
      for (const name of hit.slice(7, -1).split(/\s+/)) {
        if (name && /^(teach|test|path)-/.test(name)) painted.add(name);
      }
    }
  };
  panels.forEach((p) => collect(p.out));
  sheets.forEach((s) => collect(s.out));

  assert.ok(painted.size > 15, `only ${painted.size} classes were collected, so this proved little`);
  const missing = Array.from(painted).filter((name) => !css.includes(`.${name}`));
  assert.deepStrictEqual(missing, [], "these classes are painted but never styled");
});

test("index.html loads the teaching scripts in dependency order", () => {
  /*
   * teaching.js reads data/teaching.js, the UI files read both plus
   * assessment.js, and every one of them fails as a silent no-op rather than
   * an error if it runs first.
   */
  const order = (Array.from(html.matchAll(/<script src="([^"]+)"/g)) || []).map((m) => m[1]);
  const at = (file) => order.indexOf(file);
  for (const file of ["data/teaching.js", "teaching.js", "assessment.js", "assessment-ui.js", "teach-ui.js"]) {
    assert.ok(at(file) >= 0, `index.html never loads ${file}`);
  }
  assert.ok(at("data/teaching.js") < at("teaching.js"), "teaching.js runs before its data");
  assert.ok(at("data/rubrics.js") < at("teach-ui.js"), "teach-ui.js runs before the rubrics");
  assert.ok(at("data/course-plan.js") < at("teach-ui.js"), "teach-ui.js runs before the handbook");
  assert.ok(at("assessment.js") < at("assessment-ui.js"), "the test surface runs before its engine");
  assert.ok(at("teaching.js") < at("teach-ui.js"), "the teach view runs before its accessor");
});

test("the English fallback says the same thing as the table it stands in for", () => {
  /*
   * The fallback exists so a page loaded without i18n.js degrades to readable
   * text. Two tables holding different wording for one key is worse than one
   * table, because only the rarer path shows the stale copy.
   */
  const dictionary = require("../i18n.js").UI_STRINGS.en;
  for (const [file, api] of [["teach-ui.js", "ParceroTeachUI"], ["assessment-ui.js", "ParceroAssessmentUI"]]) {
    const fallback = loadUi("es")[api].EN;
    assert.ok(fallback && Object.keys(fallback).length > 10,
      `${file} carries no English fallback table`);
    for (const [key, value] of Object.entries(fallback)) {
      assert.ok(dictionary[key] !== undefined, `${key} is in ${file} but not in i18n.js`);
      assert.strictEqual(value, dictionary[key], `${key} disagrees between ${file} and i18n.js`);
    }
  }
});

test("no script reads a const data global off window", () => {
  /*
   * This is the bug that cost the most to find, so it gets a guard.
   *
   * Every file in data/ declares with `const`. A top-level `const` in a
   * classic script goes into the global lexical environment, which is NOT the
   * global object — so `window.lessons` is not the corpus, it is the
   * `<section id="lessons">` element that named access on Window supplies, and
   * `window.storyItems` is simply undefined. Both read as "no data" through
   * exactly the Array.isArray guard that was supposed to make them safe, and
   * nothing throws: checkpoints quietly refused to build and every exam lost
   * its reading section.
   *
   * The bare identifier resolves through the lexical scope and finds the real
   * value, which is what every older file in the repo already does.
   */
  const globals = [
    "lessons", "storyItems", "COURSE_MODULES", "EXAM_TASKS", "CEFR_BANDS",
    "RUBRICS", "RUBRIC_BANDS", "RUBRIC_GRADES", "COURSE_PLAN", "MODULE_TEACHING",
    "STUDY_GUIDE", "storyItems", "UI_STRINGS"
  ];
  const scripts = (Array.from(html.matchAll(/<script src="([^"]+)"/g)) || [])
    .map((m) => m[1])
    .filter((file) => !file.startsWith("data/"));

  const offenders = [];
  for (const file of scripts) {
    /* Comments come out first. Two of these files explain this exact bug in
       prose that has to quote the broken expression to be worth reading. */
    const source = read(file)
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/^\s*\/\/.*$/gm, "");
    for (const name of globals) {
      const pattern = new RegExp(`window\\.${name}\\b`);
      if (pattern.test(source)) offenders.push(`${file} reads window.${name}`);
    }
  }
  assert.deepStrictEqual(offenders, [],
    "these reads always see undefined, because a top-level const never lands on window");
});

test("the corpus actually reaches the teaching layer", () => {
  /*
   * The counterpart to the guard above: proving the accessors are wired to
   * nothing is not the same as proving they are wired to something. An empty
   * corpus makes every renderer return a valid, empty, entirely useless page.
   */
  const sandbox = loadUi("es");
  const corpus = sandbox.evaluate("lessons");
  assert.ok(Array.isArray(corpus) && corpus.length > 200,
    `the sandbox loaded ${Array.isArray(corpus) ? corpus.length : "no"} lessons`);
  const stories = sandbox.evaluate("storyItems");
  assert.ok(Array.isArray(stories) && stories.length > 0, "the sandbox loaded no stories");
  assert.ok(sandbox.evaluate("Array.isArray(lessons)"),
    "the bare identifier does not resolve to the corpus");
  assert.ok(!sandbox.evaluate("Array.isArray(window.lessons)"),
    "window.lessons resolved to an array, so this guard is testing nothing");
});

test("the two module indexes are not interchangeable", () => {
  /*
   * syllabus.moduleIndex() is keyed by lesson id; ParceroTeaching.byModule()
   * is keyed by module id. They are both Maps of module entries, so passing
   * one where the other is wanted type-checks perfectly, misses on every
   * lookup, and reads as "this module is empty". That is what emptied every
   * checkpoint and zeroed every hours figure in the scheme of work.
   */
  const sandbox = loadUi("es");
  const corpus = sandbox.evaluate("lessons");
  const byLesson = sandbox.ParceroSyllabus.moduleIndex(corpus, MODULES);
  const byModule = sandbox.ParceroTeaching.byModule(
    sandbox.ParceroSyllabus.outline(corpus, MODULES)
  );

  assert.ok(byModule.size > 70, `byModule holds ${byModule.size} modules`);
  for (const module of MODULES) {
    assert.ok(byModule.has(module.id), `byModule is missing ${module.id}`);
    assert.ok(!byLesson.has(module.id),
      `moduleIndex answers to a module id, so the two are no longer distinguishable`);
  }
  const entry = byModule.get(MODULES[0].id);
  assert.ok(Array.isArray(entry.lessons) && entry.lessons.length > 0,
    "byModule returned a module with no lessons");
});

test("every module can actually build a checkpoint", () => {
  /*
   * The engine refuses to pad a paper, so a module the UI cannot find lessons
   * for produces a checkpoint of zero questions and an alert telling the
   * student the module is too small. Checking all 78 rather than a sample,
   * because the failure was invisible and total.
   */
  const sandbox = loadUi("es");
  const corpus = sandbox.evaluate("lessons");
  const byModule = sandbox.ParceroTeaching.byModule(
    sandbox.ParceroSyllabus.outline(corpus, MODULES)
  );
  const engine = sandbox.ParceroAssessment;

  const empty = [];
  for (const module of MODULES) {
    const group = (byModule.get(module.id) || {}).lessons || [];
    const paper = engine.checkpoint({
      moduleId: module.id, lessons: group, direction: "es", form: "A"
    });
    if (!paper.questions.length) empty.push(module.id);
  }
  assert.deepStrictEqual(empty, [], "these modules cannot produce a checkpoint");
});

test("the whole page boots: every script in index.html, in order, without throwing", () => {
  /*
   * Nothing else in the suite does this. Each test file loads the three or
   * four scripts it needs, in an order it chose, which is exactly the
   * condition under which a load-order mistake stays invisible: a file that
   * reads a global its predecessor has not defined yet throws on line one and
   * takes every later script with it, and the page comes up with a working
   * header and nothing under it.
   *
   * So this loads all of them, in the order the browser will, against a DOM
   * shim that answers rather than throws — and fails on the first exception.
   */
  const nodes = new Map();
  const makeNode = (id) => {
    const node = {
      id,
      hidden: false,
      value: "",
      textContent: "",
      innerHTML: "",
      href: "",
      download: "",
      disabled: false,
      checked: false,
      selected: false,
      open: false,
      tagName: "DIV",
      dataset: {},
      style: { setProperty() {}, removeProperty() {} },
      classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
      children: [],
      childNodes: [],
      options: [],
      firstChild: null,
      parentNode: null,
      addEventListener() {},
      removeEventListener() {},
      dispatchEvent: () => true,
      setAttribute() {},
      getAttribute: () => null,
      hasAttribute: () => false,
      removeAttribute() {},
      append() {},
      prepend() {},
      appendChild: (child) => child,
      insertBefore: (child) => child,
      replaceChildren() {},
      removeChild: (child) => child,
      remove() {},
      insertAdjacentHTML() {},
      scrollIntoView() {},
      focus() {},
      blur() {},
      click() {},
      submit() {},
      reset() {},
      closest: () => null,
      contains: () => false,
      matches: () => false,
      querySelector: () => makeNode(`${id} *`),
      querySelectorAll: () => [],
      getBoundingClientRect: () => ({ top: 0, left: 0, width: 0, height: 0 })
    };
    return node;
  };
  const element = (id) => {
    if (!nodes.has(id)) nodes.set(id, makeNode(id));
    return nodes.get(id);
  };

  const sandbox = {
    console,
    location: { hash: "#path", href: "http://localhost/", search: "" },
    history: { replaceState() {}, pushState() {} },
    localStorage: {
      getItem: () => null, setItem() {}, removeItem() {}, clear() {}
    },
    matchMedia: () => ({ matches: false, addEventListener() {}, addListener() {} }),
    requestAnimationFrame: (fn) => fn(),
    setTimeout: (fn) => fn,
    clearTimeout() {},
    scrollTo() {},
    alert() {},
    confirm: () => false,
    addEventListener() {},
    removeEventListener() {},
    print() {},
    URL: { createObjectURL: () => "blob:", revokeObjectURL() {} },
    Blob: function Blob() {},
    navigator: { language: "en-US" },
    document: {
      readyState: "complete",
      documentElement: element("html"),
      body: element("body"),
      title: "",
      addEventListener() {},
      createElement: () => makeNode("created"),
      createTextNode: () => makeNode("text"),
      createDocumentFragment: () => makeNode("fragment"),
      getElementById: (id) => element(id),
      querySelector: (sel) => (sel === "input[name=direction]:checked"
        ? Object.assign(element("dir"), { value: "es" })
        : element(sel)),
      querySelectorAll: () => []
    }
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  sandbox.self = sandbox;
  vm.createContext(sandbox);

  const scripts = (Array.from(html.matchAll(/<script src="([^"]+)"/g)) || []).map((m) => m[1]);
  assert.ok(scripts.length > 90, `index.html lists ${scripts.length} scripts`);

  for (const file of scripts) {
    assert.ok(fs.existsSync(path.join(root, file)), `index.html loads ${file}, which does not exist`);
    try {
      vm.runInContext(read(file), sandbox, { filename: file });
    } catch (error) {
      assert.fail(`${file} threw while loading: ${error.message}`);
    }
  }

  /* Everything the page publishes should be there at the end of the run. */
  for (const name of [
    "ParceroI18n", "ParceroSyllabus", "ParceroProgress", "ParceroCEFR",
    "ParceroAssessment", "ParceroTeaching", "ParceroWorkbook", "ParceroWorkbookUI",
    "ParceroAssessmentUI", "ParceroTeachUI"
  ]) {
    assert.ok(sandbox[name], `${name} never reached the page`);
  }

  /*
   * Arriving is not the same as being wired up.
   *
   * ParceroTeaching was present on the page for a whole round of review while
   * reading nothing at all, because it looked the table up as
   * global.MODULE_TEACHING and data/teaching.js declares it as a top-level
   * const — which in a classic script lands in the global lexical environment
   * and never on window. The engine therefore saw {} and every caller degraded
   * quietly: empty plans, a scheme with no minutes, an hours table of dashes.
   *
   * The whole suite stayed green because every other test reaches the data
   * through the module.exports tail of the same file. Only booting it the way
   * a browser does shows the difference, so assert on content here, not just
   * on the presence of the global.
   */
  const anyModule = MODULES[0];
  assert.ok(anyModule, "no course modules to check the teaching table against");
  assert.ok(
    sandbox.ParceroTeaching.has(anyModule.id),
    `ParceroTeaching loaded but cannot see module ${anyModule.id}: the data file is
     published under a binding the engine does not read`
  );

  const detail = sandbox.ParceroTeaching.plan(anyModule.id, "es");
  assert.ok(detail, `no plan came back for ${anyModule.id} after a real page boot`);
  assert.ok(detail.minutes > 0,
    "the plan has no session length, so the scheme of work totals nothing");
  assert.ok(detail.steps.length > 0,
    "the plan has no steps, so the handbook renders an empty lesson");
});

function escapeHtml(text) {
  /* Must match esc() in the UI files exactly, apostrophe included — otherwise
     this looks for text the page never wrote and reports a drop that is really
     a difference in escaping. */
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
