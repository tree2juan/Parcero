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

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const html = read("index.html");
const ui = read("review-ui.js");
const css = read("styles.css");
const { UI_STRINGS } = require("../i18n.js");

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

test("a stale item cannot outlive the lesson it belonged to", () => {
  /*
   * Editing a saved report may target a lesson the reader has paged away from,
   * so the picker can offer an anchor that is not in the current list. That
   * escape hatch has to stay opt-in: when it was unconditional, paging to the
   * next lesson kept showing the previous lesson's line.
   */
  assert.match(ui, /function renderItems\(preferred, allowMissing\)/, "renderItems must take the opt-in flag");
  assert.match(ui, /if \(preferred && allowMissing && !anchors\.includes\(preferred\)\)/,
    "offering a missing anchor must be guarded by allowMissing");
  assert.match(ui, /renderItems\(ParceroReview\.groupAnchor\(flag\.anchor\) \|\| flag\.anchor, true\)/,
    "editing a saved report is the one caller allowed to keep a missing anchor");
  const panelRender = ui.match(/function renderPanel\(\)[\s\S]*?\n  \}/)[0];
  assert.ok(/renderItems\(item\);/.test(panelRender),
    "an ordinary re-render must not pass allowMissing, or navigation will stick");
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
