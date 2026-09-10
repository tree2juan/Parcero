/*
 * The workbook as a rendered page, and as a sheet of paper.
 *
 * test/workbook.test.js proves the generator's answers are honest. That says
 * nothing about whether any of it reaches a learner: a template that
 * interpolates `undefined`, an i18n key with no translation behind it, or a
 * class the stylesheet never heard of would all leave those tests green and
 * hand somebody a broken page.
 *
 * So this file renders every workbook — all 75 modules in both directions —
 * through the real renderer with the real translation table, and reads the
 * result. Then it checks the things a rendered string cannot show: that the
 * elements the script reaches for exist, that the classes it paints are
 * styled, and that printing actually strips the site and keeps the answer key.
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
const uiSource = read("workbook-ui.js");

const { lessons } = vm.runInNewContext(`${dataSource({ schema: true })}\n({ lessons });`, {}, {
  filename: "lessons-bundle.js"
});
const MODULES = vm.runInNewContext(`${read("data/modules.js")}\n;COURSE_MODULES;`);

/*
 * A document with nothing in it.
 *
 * start() looks for #workbook-output, finds nothing and returns, which is the
 * point: the wiring is not under test here, the rendering is. Everything the
 * IIFE touches on the way to defining renderWorkbook has to exist, and nothing
 * more.
 */
function loadUi(direction) {
  const doc = {
    readyState: "complete",
    querySelector: (selector) =>
      (selector === "input[name=direction]:checked" ? { value: direction } : null),
    querySelectorAll: () => [],
    addEventListener: () => {}
  };
  const sandbox = { document: doc, localStorage: { getItem: () => null, setItem: () => {} } };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  sandbox.global = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(read("i18n.js"), sandbox, { filename: "i18n.js" });
  vm.runInContext(read("workbook.js"), sandbox, { filename: "workbook.js" });
  vm.runInContext(uiSource, sandbox, { filename: "workbook-ui.js" });
  return sandbox;
}

/* Every workbook, rendered once, reused below. */
const rendered = [];
for (const direction of ["es", "en"]) {
  const sandbox = loadUi(direction);
  const api = sandbox.ParceroWorkbook;
  const ui = sandbox.ParceroWorkbookUI;
  assert.ok(api && ui, "workbook.js and workbook-ui.js must both expose their API");
  for (const module of MODULES) {
    const group = api.lessonsFor(module, lessons);
    const book = api.build({ module, lessons: group, direction });
    rendered.push({ module, direction, book, out: ui.renderWorkbook(book) });
  }
}

test("every module renders in both directions", () => {
  assert.strictEqual(rendered.length, MODULES.length * 2);
  for (const { module, direction, out } of rendered) {
    assert.ok(out && out.length > 500,
      `${module.id} (${direction}) rendered ${out ? out.length : 0} characters`);
  }
});

test("no workbook prints a hole where a value should be", () => {
  /*
   * The failure this exists for is silent. `${line.speakr}` renders the word
   * "undefined" into the page and throws nothing; a missing array renders
   * "[object Object]". Both look like content until a learner reads them.
   */
  for (const { module, direction, out } of rendered) {
    for (const rot of ["undefined", "[object Object]", "NaN", "null"]) {
      assert.ok(!out.includes(rot),
        `${module.id} (${direction}) rendered the literal text "${rot}"`);
    }
  }
});

test("every label the workbook prints has been translated", () => {
  /*
   * t() returns the key when it cannot translate it, so an untranslated label
   * shows up in the output as the raw dotted key. Searching the rendered HTML
   * catches every one of them, including the labelKeys workbook.js chooses at
   * build time, which no scan of the source could enumerate.
   */
  for (const { module, direction, out } of rendered) {
    const leaked = out.match(/workbook\.[a-zA-Z]+(\.[a-zA-Z]+)*/g) || [];
    const real = leaked.filter((hit) => !/^workbook\.(js|html|css)$/.test(hit));
    assert.deepStrictEqual(Array.from(new Set(real)), [],
      `${module.id} (${direction}) printed untranslated key(s)`);
  }
});

test("both interface languages are actually used, and differ", () => {
  /* A workbook that renders the same text in both directions would mean the
     direction never reached the renderer. */
  const byDirection = { es: [], en: [] };
  for (const { direction, out } of rendered) byDirection[direction].push(out);
  assert.notStrictEqual(byDirection.es[0], byDirection.en[0]);
  assert.ok(byDirection.es[0].includes("Before you start"),
    "studying Spanish means reading an English workbook");
  assert.ok(byDirection.en[0].includes("Antes de empezar"),
    "studying English means reading a Spanish workbook");
});

test("every taught line is marked with the language it is in", () => {
  /*
   * Not decoration: a screen reader handed Spanish with English phonology is
   * unintelligible, and so is the reverse. Both languages appear on every
   * page, so neither can be inferred from the document.
   */
  for (const { module, direction, out } of rendered.slice(0, 20)) {
    assert.ok(out.includes(`lang="${direction}"`),
      `${module.id} (${direction}) never marks the language being taught`);
    assert.ok(out.includes(`lang="${direction === "es" ? "en" : "es"}"`),
      `${module.id} (${direction}) never marks the learner's own language`);
  }
});

test("every activity gets somewhere to write the answer", () => {
  /*
   * A gap-fill with no line to write on is a reading exercise. The blank is
   * the exercise.
   */
  for (const { module, direction, book, out } of rendered) {
    const writable = book.units.some((unit) =>
      unit.activities.some((a) => a.kind !== "match" && a.kind !== "choice"));
    if (!writable) continue;
    assert.ok(out.includes("wb-write"),
      `${module.id} (${direction}) has written answers but no ruled lines`);
  }
});

test("the answer key renders, and starts hidden", () => {
  for (const { module, direction, book, out } of rendered) {
    if (!book.answerKey.length) continue;
    assert.ok(out.includes('id="workbook-key"'),
      `${module.id} (${direction}) built an answer key but never rendered it`);
    assert.match(out, /<section id="workbook-key"[^>]*\shidden>/,
      `${module.id} (${direction}) shows the answer key beside the questions`);
  }
});

test("every answer in the key reaches the page", () => {
  /*
   * workbook.test.js proves the keys are correct. This proves they survive
   * rendering — an answer dropped by the template is as useless as a wrong one.
   */
  const escape = (value) => String(value).replace(/[&<>"]/g, (char) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
  let checked = 0;
  for (const { module, direction, book, out } of rendered) {
    for (const entry of book.answerKey) {
      assert.ok(out.includes(escape(entry.answer)),
        `${module.id} (${direction}) dropped the answer "${entry.answer}" on the way to the page`);
      checked += 1;
    }
  }
  assert.ok(checked > 4000, `only ${checked} answers checked`);
});

test("every line of the conversation reaches the page", () => {
  /*
   * The "no holes" test above is necessary and not sufficient, and a mutation
   * showed exactly how: esc() maps undefined to "", so `${esc(line.speakr)}`
   * renders nothing at all rather than the word "undefined". Scanning for rot
   * cannot see a field that silently vanished.
   *
   * The only reliable check is the positive one — take what the book says it
   * contains and find it on the page. A dropped speaker, target, translation
   * or vocabulary term fails here immediately.
   */
  const escape = (value) => String(value).replace(/[&<>"]/g, (char) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
  let checked = 0;
  for (const { module, direction, book, out } of rendered) {
    /*
     * Scoped to the conversation block, not the whole page. Speaker names
     * repeat in the gap-fill and reorder exercises, so a page-wide search for
     * "Alex" finds him even when the dialogue dropped him — which is how the
     * first version of this test let the mutation through.
     */
    const lineBlocks = out.split('<div class="wb-line">').slice(1);
    for (const unit of book.units) {
      for (const line of unit.dialogue) {
        const whole = lineBlocks.some((block) =>
          block.includes(escape(line.speaker)) &&
          block.includes(escape(line.target)) &&
          block.includes(escape(line.translation)));
        assert.ok(whole,
          `${module.id} (${direction}): no conversation line carries "${line.speaker}" with its own words and translation`);
        checked += 1;
      }
      for (const item of unit.vocabulary) {
        assert.ok(out.includes(escape(item.term)),
          `${module.id} (${direction}) dropped the vocabulary entry "${item.term}"`);
        checked += 1;
      }
    }
    for (const phrase of book.overview.corePhrases) {
      assert.ok(out.includes(escape(phrase)),
        `${module.id} (${direction}) dropped the core phrase "${phrase}"`);
      checked += 1;
    }
  }
  assert.ok(checked > 4000, `only ${checked} pieces of content checked`);
});

test("every element the workbook script looks up exists in index.html", () => {
  /*
   * Ids the renderer itself emits count as declared. #workbook-key does not
   * exist until a workbook is built, and requiring it in the static markup
   * would mean shipping an empty answer key section on every page load.
   */
  const generated = new Set([...uiSource.matchAll(/id="([\w-]+)"/g)].map((match) => match[1]));
  const ids = new Set([...uiSource.matchAll(/\$\("#([\w-]+)"\)/g)].map((match) => match[1]));
  assert.ok(ids.size > 0, "expected workbook-ui.js to query elements by id");
  for (const id of ids) {
    assert.ok(html.includes(`id="${id}"`) || generated.has(id),
      `#${id} is queried by workbook-ui.js but neither index.html nor the renderer creates it`);
  }
});

test("every class the workbook paints is styled", () => {
  /*
   * The renderer and the stylesheet are the two halves of a printed page, and
   * nothing else connects them. A renamed class leaves the markup valid, the
   * tests green and the workbook unreadable on paper.
   */
  const painted = new Set();
  for (const match of uiSource.matchAll(/class="([^"$]+)"/g)) {
    for (const name of match[1].split(/\s+/)) if (name) painted.add(name);
  }
  assert.ok(painted.size > 15, `expected the renderer to paint classes, found ${painted.size}`);
  const missing = [...painted].filter((name) => !css.includes(`.${name}`));
  assert.deepStrictEqual(missing, [], "classes the renderer paints that styles.css never mentions");
});

test("the English fallback says the same thing as the table it stands in for", () => {
  /*
   * The fallback exists so a page loaded without i18n.js degrades to readable
   * text. Two tables holding different wording for one key is worse than one
   * table, because only the rarer path shows the stale copy.
   */
  const sandbox = loadUi("es");
  const fallback = sandbox.ParceroWorkbookUI.EN;
  assert.ok(fallback && Object.keys(fallback).length > 20, "expected an English fallback table");
  const dictionary = require("../i18n.js").UI_STRINGS.en;
  assert.ok(dictionary, "could not read the English table out of i18n.js");
  for (const [key, value] of Object.entries(fallback)) {
    assert.ok(dictionary[key] !== undefined, `${key} is in the fallback but not in i18n.js`);
    assert.strictEqual(value, dictionary[key], `${key} disagrees between the fallback and i18n.js`);
  }
});

test("printing removes the site and keeps the workbook", () => {
  const print = css.slice(css.indexOf("@media print"));
  assert.ok(print.includes("@media print"), "styles.css has no print rules at all");
  /*
   * display:none on an ancestor takes the workbook with it, so the page is
   * hidden by visibility and the workbook switched back on.
   */
  assert.match(print, /body \*\s*\{\s*visibility:\s*hidden/, "the site chrome is not hidden for print");
  assert.match(print, /#workbook,\s*#workbook \*\s*\{\s*visibility:\s*visible/, "the workbook is not restored for print");
  for (const chrome of [".site-header", ".hero", "footer", ".workbook-controls"]) {
    assert.ok(print.includes(chrome), `print styles never deal with ${chrome}`);
  }
});

test("the printed workbook includes the answer key even when the screen hides it", () => {
  /*
   * A printed sheet has no toggle. Leaving the key on screen state would print
   * a workbook nobody can mark.
   */
  const print = css.slice(css.indexOf("@media print"));
  assert.match(print, /#workbook-key\[hidden\]\s*\{[^}]*display:\s*block/,
    "the answer key stays hidden on paper when it is collapsed on screen");
});

test("a question is not split across two sheets of paper", () => {
  const print = css.slice(css.indexOf("@media print"));
  assert.match(print, /break-inside:\s*avoid/, "nothing prevents an exercise breaking across pages");
  assert.match(print, /break-before:\s*page/, "units do not start on their own page");
});

test("index.html loads the workbook scripts in dependency order", () => {
  const order = ["data/modules.js", "workbook.js", "workbook-ui.js"];
  let previous = -1;
  for (const src of order) {
    const at = html.indexOf(`src="${src}"`);
    assert.ok(at > -1, `index.html never loads ${src}`);
    assert.ok(at > previous, `${src} loads before something it depends on`);
    previous = at;
  }
});

test("the workbook section is marked up for translation", () => {
  const section = html.slice(html.indexOf('id="workbook"'), html.indexOf("</main>"));
  assert.ok(section.length > 200, "could not find the workbook section in index.html");
  for (const key of ["workbook.eyebrow", "workbook.title", "workbook.lead", "workbook.pick", "workbook.print"]) {
    assert.ok(section.includes(`data-i18n="${key}"`), `the workbook section never asks for ${key}`);
  }
});
