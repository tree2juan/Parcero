/*
 * The reporting tab.
 *
 * Flagging used to hang a control off every reviewable block, which put review
 * furniture in front of learners. These tests pin the replacement: one tab, one
 * picker, and nothing injected into the lesson itself.
 */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const html = read("index.html");
const ui = read("review-ui.js");
const css = read("styles.css");
const { UI_STRINGS } = require("../i18n.js");
const review = require("../review.js");
const content = vm.runInNewContext(
  `${read("data/lesson-schema.js")}\n${read("data/lessons.js")}\n${read("data/curriculum.js")}\n({ lessons, curriculum, fluencyItems, matureItems });`,
  {},
  { filename: "parcero-data-bundle.js" }
);

test("the reporting tab is wired to its panel", () => {
  const tab = html.match(/<button[^>]*id="report-tab"[^>]*>/)[0];
  assert.ok(/data-panel="report-panel"/.test(tab), "the tab must name the panel it opens");
  assert.ok(/aria-controls="report-panel"/.test(tab), "the tab must point at its panel for screen readers");
  // app.js switches any .tab by its data-panel, so the new tab must be one.
  assert.ok(/class="tab"/.test(tab), "the tab must carry the tab class or app.js will not switch it");

  const panel = html.match(/<section[^>]*id="report-panel"[^>]*>/)[0];
  assert.ok(/aria-labelledby="report-tab"/.test(panel), "the panel must point back at its tab");
  assert.ok(/\shidden/.test(panel), "the panel starts hidden like every other tab panel");
});

test("the panel holds every control the reporting flow needs", () => {
  const panel = html.slice(html.indexOf('id="report-panel"'), html.indexOf("</section>", html.indexOf('id="report-panel"')));
  const required = [
    "report-scope", "report-item", "flag-part", "flag-original", "flag-location",
    "flag-type", "flag-suggestion", "flag-comment", "flag-severity", "flag-region",
    "flag-regions", "flag-role", "flag-error", "flag-save", "flag-cancel",
    "review-count", "review-status", "queue-summary", "queue-list",
    "queue-submit", "queue-copy", "queue-download", "queue-clear", "queue-status"
  ];
  for (const id of required) {
    assert.ok(panel.includes(`id="${id}"`), `#${id} must live inside the reporting panel`);
  }
});

test("learners never meet review furniture", () => {
  assert.ok(!/class="flag-button"/.test(ui), "flag buttons must not be injected into the page any more");
  assert.ok(!ui.includes("data-anchor]"), "the reporting tab must not decorate anchored elements");
  for (const id of ["review-mode", "review-bar", "review-queue-open", "review-mode-off"]) {
    assert.ok(!html.includes(`id="${id}"`), `#${id} belonged to review mode and should be gone`);
  }
  assert.ok(!/<dialog/.test(html), "reporting happens in the tab, not in a modal");
  assert.ok(!/showModal\(/.test(ui), "nothing should open a modal any more");
});

test("the retired review-mode styling is gone with it", () => {
  for (const rule of [".flag-button", ".review-mode", ".review-dialog", ".review-bar"]) {
    assert.ok(!css.includes(rule), `${rule} styled review mode and is now dead`);
  }
  // The reset that keeps hidden panels hidden is load-bearing for this tab too.
  assert.match(css, /\[hidden\]\s*\{[^}]*display:\s*none\s*!important/);
  assert.match(css, /\.report-panel\s*\{[^}]*display:/, "the panel sets display, so it depends on that reset");
});

test("the picker reaches every kind of content a reviewer can see", () => {
  const scopes = ui.match(/const SCOPES = \[([^\]]+)\]/);
  assert.ok(scopes, "expected a list of scopes");
  const codes = [...scopes[1].matchAll(/"([\w-]+)"/g)].map((match) => match[1]);
  assert.deepStrictEqual(codes, ["lesson", "verb", "fluency", "mature"],
    "the lesson and all three library sections must be reportable");
  for (const code of codes) {
    for (const language of ["en", "es"]) {
      const key = `report.scope.${code}`;
      assert.ok(UI_STRINGS[language][key], `${key} is missing from the ${language} table`);
    }
  }
});

test("every part of a lesson is reachable from the report picker", () => {
  /*
   * The picker used to hold a hand-written array of anchor families — heading,
   * dialogue rows, vocabulary rows, note, prompt, choices. That list was right
   * when it was written and silently wrong the moment lessons grew a situation,
   * culture notes, pitfalls, variations and extra practice questions: a reviewer
   * could read those on the page and had no way to report a mistake in any of
   * them. Nothing failed, because the picker only ever promised what it listed —
   * which is exactly why this test asserts the property rather than the list.
   */
  assert.match(ui, /ParceroReview\.listAnchors\(/,
    "the picker must enumerate from the shared anchor list, not a literal array");

  const lesson = content.lessons[0];
  const base = `lesson:${lesson.id}/es/`;
  const groups = new Set();
  for (const leaf of review.listAnchors(content)) {
    if (leaf.indexOf(base) === 0) groups.add(review.groupAnchor(leaf));
  }

  const reachable = [
    "heading", "setting", "address", "dialogue/0", "vocabulary/0", "note",
    "culture/0", "pitfalls/0", "variations/0", "prompt", "choices", "practice/1/prompt",
  ];
  for (const family of reachable) {
    assert.ok(groups.has(base + family),
      `${family} is content a reviewer can see, but the picker cannot reach it`);
  }
});

test("a stale item cannot outlive the lesson it belonged to", () => {
  /*
   * The picker can offer an anchor that is not in the current list, but that
   * escape hatch has to stay opt-in: when it was unconditional, paging to the
   * next lesson kept showing the previous lesson's line.
   */
  assert.match(ui, /function renderItems\(preferred, allowMissing\)/, "renderItems must take the opt-in flag");
  assert.match(ui, /if \(preferred && allowMissing && !anchors\.includes\(preferred\)\)/,
    "offering a missing anchor must be guarded by allowMissing");
  assert.match(ui, /renderItems\(ParceroReview\.groupAnchor\(flag\.anchor\) \|\| flag\.anchor, true\)/,
    "editing a saved report is the one caller allowed to hard-code a missing anchor");
  const panelRender = ui.match(/function renderPanel\(\)[\s\S]*?\n  \}/)[0];
  assert.ok(!/renderItems\([^)]*,\s*true\)/.test(panelRender),
    "an ordinary re-render must not hard-code allowMissing, or navigation will stick");
});

test("a report being written keeps its target when the page moves under it", () => {
  /*
   * Anchors are scoped to a lesson and a direction. Paging to the next lesson
   * or toggling direction rebuilds the item list without the anchor the
   * reviewer is describing, and the picker used to re-point at whatever came
   * first while their typed suggestion stayed put — filing a correction
   * against a line nobody was looking at. Measured in a browser: selecting the
   * English translation of a dialogue line and toggling direction silently
   * moved the target to the lesson title.
   */
  assert.match(ui, /const formDirty = \(\) => Boolean\(/, "there must be a single definition of an in-progress report");
  const dirty = ui.match(/const formDirty = \(\) => Boolean\([\s\S]*?\);/)[0];
  for (const field of ["#flag-suggestion", "#flag-comment"]) {
    assert.ok(dirty.includes(field), `${field} holds reviewer prose and must count as work in progress`);
  }
  assert.ok(/state\.editing !== null/.test(dirty), "reopening a saved report is also work in progress");

  const panelRender = ui.match(/function renderPanel\(\)[\s\S]*?\n  \}/)[0];
  assert.ok(/const holding = formDirty\(\);/.test(panelRender), "a rebuild must ask whether anything is at stake");
  assert.ok(/renderItems\(item, holding\)/.test(panelRender), "a dirty form must pin its own target");
  assert.ok(/if \(held\) \$\("#review-status"\)\.textContent = t\("report\.holding"\);/.test(panelRender),
    "silently keeping the old target is as confusing as silently changing it — say so");
  assert.match(ui, /return pinned;/, "renderItems must report back whether it had to hold the anchor");

  const save = ui.match(/function saveFlag\(\)[\s\S]*?\n  \}/)[0];
  assert.ok(/resetForm\(\);\s*\n\s*persistFlags\(\);[\s\S]*renderPanel\(\);/.test(save),
    "saving clears the form, so the pin must be released in the same breath or the picker stays stuck");
});

test("the reporting tab is reachable without knowing it is there", () => {
  assert.ok(html.includes('id="footer-report-link"'), "the footer must offer a way in");
  assert.ok(html.includes('id="lesson-review-start"'), "an unreviewed lesson must offer a way in");
  assert.match(ui, /\$\("#footer-report-link"\)\.addEventListener/);
  assert.match(ui, /\$\("#lesson-review-start"\)\.addEventListener/);
});

test("the tab rebuilds when what it describes changes", () => {
  // The panel lists one lesson's strings in one language. Both can change
  // without a reload, and a control built once at init would go stale.
  for (const trigger of ["#report-tab", "#previous-lesson", "#next-lesson"]) {
    assert.ok(ui.includes(trigger), `${trigger} must rebuild the panel`);
  }
  assert.match(ui, /input\[name=direction\][\s\S]{0,160}renderPanel\(\)/,
    "changing direction must rebuild the panel");
});
