const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { UI_STRINGS, uiLanguageFor, t, tPlural, applyI18n } = require("../i18n.js");

const readRoot = (name) => fs.readFileSync(path.join(__dirname, "..", name), "utf8");
const matchAll = (source, pattern) => [...source.matchAll(pattern)].map((match) => match[1]);

const languages = Object.keys(UI_STRINGS);
const placeholders = (value) => (value.match(/\{[a-zA-Z]+\}/g) || []).sort();

test("the interface is offered in both languages", () => {
  assert.deepStrictEqual(languages.sort(), ["en", "es"]);
});

test("interface language is the opposite of the language being taught", () => {
  // Someone studying the "en" lessons is a Spanish speaker and needs Spanish chrome.
  assert.strictEqual(uiLanguageFor("es"), "en");
  assert.strictEqual(uiLanguageFor("en"), "es");
});

test("every string exists in both languages", () => {
  const english = Object.keys(UI_STRINGS.en).sort();
  const spanish = Object.keys(UI_STRINGS.es).sort();
  const missing = english.filter((key) => !spanish.includes(key));
  const extra = spanish.filter((key) => !english.includes(key));
  assert.deepStrictEqual(missing, [], `untranslated into Spanish: ${missing.join(", ")}`);
  assert.deepStrictEqual(extra, [], `present only in Spanish: ${extra.join(", ")}`);
});

test("no string is left empty", () => {
  for (const language of languages) {
    for (const [key, value] of Object.entries(UI_STRINGS[language])) {
      assert.ok(typeof value === "string" && value.trim().length > 0, `${language}.${key} is empty`);
    }
  }
});

test("translations keep the same interpolation slots", () => {
  for (const [key, english] of Object.entries(UI_STRINGS.en)) {
    assert.deepStrictEqual(
      placeholders(UI_STRINGS.es[key]),
      placeholders(english),
      `${key}: Spanish and English must use the same {placeholders}`
    );
  }
});

test("pluralised strings define both one and other", () => {
  // "other" is overloaded: it is the plural bucket, but it is also a literal
  // dropdown code (review.issueType.other). Enumeration namespaces are keyed by
  // machine code, never pluralised, so they are excluded from the reverse check.
  const enumerations = ["review.issueType.", "review.severity.", "review.role."];
  const isEnumeration = (key) => enumerations.some((prefix) => key.startsWith(prefix));
  for (const language of languages) {
    const keys = Object.keys(UI_STRINGS[language]);
    for (const key of keys.filter((item) => item.endsWith(".one"))) {
      assert.ok(keys.includes(key.replace(/\.one$/, ".other")), `${language}.${key} has no .other form`);
    }
    for (const key of keys.filter((item) => item.endsWith(".other") && !isEnumeration(item))) {
      assert.ok(keys.includes(key.replace(/\.other$/, ".one")), `${language}.${key} has no .one form`);
    }
  }
});

test("t returns the language the learner reads and fills placeholders", () => {
  assert.strictEqual(t("nav.lessons", "es"), "Lessons");
  assert.strictEqual(t("nav.lessons", "en"), "Lecciones");
  assert.strictEqual(t("progress.count", "es", { explored: 3, total: 8 }), "3 of 8 lessons explored");
  assert.strictEqual(t("progress.count", "en", { explored: 3, total: 8 }), "3 de 8 lecciones exploradas");
});

test("t falls back to the key rather than rendering undefined", () => {
  assert.strictEqual(t("no.such.key", "es"), "no.such.key");
});

test("tPlural selects the one and other forms", () => {
  const table = { "x.one": "{count} flag", "x.other": "{count} flags" };
  Object.assign(UI_STRINGS.en, table);
  Object.assign(UI_STRINGS.es, { "x.one": "{count} marca", "x.other": "{count} marcas" });
  assert.strictEqual(tPlural("x", "es", 1), "1 flag");
  assert.strictEqual(tPlural("x", "es", 3), "3 flags");
  assert.strictEqual(tPlural("x", "en", 1), "1 marca");
  assert.strictEqual(tPlural("x", "en", 3), "3 marcas");
  for (const key of ["x.one", "x.other"]) {
    delete UI_STRINGS.en[key];
    delete UI_STRINGS.es[key];
  }
});

test("the language picker is never translated", () => {
  // The control that switches out of English cannot be labelled only in English,
  // so it carries both languages permanently and owns no i18n key.
  const keys = Object.keys(UI_STRINGS.en);
  const pickerKeys = keys.filter((key) => key.startsWith("direction."));
  assert.deepStrictEqual(pickerKeys, [], "the direction picker must stay bilingual, not translated");
});

// A tiny stand-in for the DOM keeps this suite dependency-free, matching the
// rest of the project.
function stubDocument(nodes) {
  return {
    querySelectorAll: (selector) => (selector === "[data-i18n]" ? nodes : []),
    documentElement: { lang: "" }
  };
}

test("applyI18n translates text nodes and sets the page language", () => {
  const node = { dataset: { i18n: "nav.lessons" }, firstElementChild: null, textContent: "" };
  global.document = stubDocument([node]);
  try {
    applyI18n("en");
    assert.strictEqual(node.textContent, "Lecciones");
    assert.strictEqual(document.documentElement.lang, "es");
    applyI18n("es");
    assert.strictEqual(node.textContent, "Lessons");
    assert.strictEqual(document.documentElement.lang, "en");
  } finally {
    delete global.document;
  }
});

test("applyI18n refuses to erase an element it would destroy", () => {
  // A <label> wrapping a checkbox, or a sentence containing a link: writing
  // textContent here would delete the input. It must warn and leave it alone.
  const safe = { dataset: { i18n: "nav.lessons" }, firstElementChild: null, textContent: "" };
  const wrapping = { dataset: { i18n: "mature.confirm" }, firstElementChild: {}, textContent: "untouched" };
  global.document = stubDocument([safe, wrapping]);
  const warnings = [];
  const realWarn = console.warn;
  console.warn = (message) => warnings.push(message);
  try {
    applyI18n("es");
  } finally {
    console.warn = realWarn;
    delete global.document;
  }
  assert.strictEqual(safe.textContent, "Lessons");
  assert.strictEqual(wrapping.textContent, "untouched", "must not erase the element's children");
  assert.strictEqual(warnings.length, 1, "must report the mistake rather than fail silently");
  assert.match(warnings[0], /mature\.confirm/);
});

test("an unknown key leaves the authored markup alone", () => {
  // Degrading to "untranslated" is acceptable. Printing "some.missing.key" on
  // the page is not.
  const node = { dataset: { i18n: "not.a.real.key" }, firstElementChild: null, textContent: "Original wording" };
  global.document = stubDocument([node]);
  const realWarn = console.warn;
  console.warn = () => {};
  try {
    applyI18n("es");
  } finally {
    console.warn = realWarn;
    delete global.document;
  }
  assert.strictEqual(node.textContent, "Original wording");
});

test("every key index.html asks for is translated", () => {
  const markup = readRoot("index.html");
  const keys = new Set([
    ...matchAll(markup, /data-i18n="([^"]+)"/g),
    ...matchAll(markup, /data-i18n-placeholder="([^"]+)"/g),
    ...matchAll(markup, /data-i18n-aria="([^"]+)"/g)
  ]);
  assert.ok(keys.size > 0, "index.html should mark strings for translation");
  const missing = [...keys].filter((key) => UI_STRINGS.en[key] === undefined);
  assert.deepStrictEqual(missing, [], `index.html references untranslated keys: ${missing.join(", ")}`);
});

test("every key the review feature sets from JS is translated", () => {
  // review-ui.js routes through ParceroI18n whenever it is loaded, so a key it
  // knows but this table does not would render as its own name on screen.
  const source = readRoot("review-ui.js");
  const table = source.slice(source.indexOf("const EN = {"), source.indexOf("};", source.indexOf("const EN = {")));
  const keys = matchAll(table, /"([\w.-]+)":/g);
  assert.ok(keys.length > 20, "expected to find the review string table");
  const missing = keys.filter((key) => UI_STRINGS.en[key] === undefined);
  assert.deepStrictEqual(missing, [], `review-ui.js uses untranslated keys: ${missing.join(", ")}`);
});

test("every review dropdown code has a translated label", () => {
  const source = readRoot("review.js");
  const groups = { ISSUE_TYPES: "issueType", SEVERITIES: "severity", REVIEWER_ROLES: "role" };
  const missing = [];
  for (const [constant, group] of Object.entries(groups)) {
    const start = source.indexOf(`const ${constant} = [`);
    assert.ok(start > -1, `${constant} not found in review.js`);
    const block = source.slice(start, source.indexOf("];", start));
    for (const code of matchAll(block, /\["([\w-]+)",/g)) {
      if (UI_STRINGS.en[`review.${group}.${code}`] === undefined) missing.push(`review.${group}.${code}`);
    }
  }
  assert.deepStrictEqual(missing, [], `untranslated dropdown labels: ${missing.join(", ")}`);
});

test("i18n.js loads before every script that reads window.ParceroI18n", () => {
  const html = readRoot("index.html");
  const order = matchAll(html, /<script src="([^"]+)"><\/script>/g);
  const at = (name) => order.indexOf(name);
  assert.ok(at("i18n.js") > -1, "index.html never loads i18n.js, so every translated string would render as a raw key");
  for (const consumer of ["app.js", "review-ui.js"]) {
    assert.ok(at(consumer) > -1, `${consumer} is not loaded by index.html`);
    assert.ok(at("i18n.js") < at(consumer), `i18n.js must load before ${consumer}`);
  }
});

test("every key app.js asks for at runtime is translated", () => {
  const source = readRoot("app.js");
  const missing = [];
  for (const key of matchAll(source, /\bt\("([\w.]+)"/g)) {
    if (UI_STRINGS.en[key] === undefined) missing.push(key);
  }
  for (const key of matchAll(source, /\btn\("([\w.]+)"/g)) {
    for (const form of ["one", "other"]) {
      if (UI_STRINGS.en[`${key}.${form}`] === undefined) missing.push(`${key}.${form}`);
    }
  }
  assert.deepStrictEqual([...new Set(missing)], [], `app.js would render raw keys: ${missing.join(", ")}`);
});

test("no user-facing English is left hard-coded in app.js render paths", () => {
  const source = readRoot("app.js");
  const leaks = [
    "Mark lesson explored", "Lesson explored", "Explored", "Next question",
    "See my learning focus", "I don\u2019t know", "Your starting point", "Focus first:",
    "Playing dialogue.", "Useful forms:", "more verbs", "lessons explored"
  ].filter((phrase) => source.includes(`"${phrase}"`) || source.includes(`>${phrase}<`) || source.includes(`\`${phrase}`));
  assert.deepStrictEqual(leaks, [], `these strings never reach Spanish speakers: ${leaks.join(" | ")}`);
});

test("no two scripts declare the same name at global scope", () => {
  // These are classic <script> tags, not modules: every top-level `const`,
  // `let`, `var` and `function` in one file shares ONE global scope with every
  // other file. A collision is a SyntaxError that kills the whole later file
  // before it executes a single line, and no amount of require()-based unit
  // testing can see it, because require() gives each module its own scope.
  const html = readRoot("index.html");
  const scripts = matchAll(html, /<script src="([^"]+)"><\/script>/g);
  assert.ok(scripts.length > 0, "index.html loads no scripts");

  const owners = new Map();
  const collisions = [];
  for (const src of scripts) {
    const source = readRoot(src);
    const body = source.replace(/\/\*[\s\S]*?\*\//g, "").trimStart();
    if (body.startsWith("(function") || body.startsWith("(()")) continue; // IIFE-wrapped: leaks nothing
    for (const name of matchAll(source, /^(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)/gm)) {
      if (owners.has(name)) collisions.push(`${name}: ${owners.get(name)} and ${src}`);
      else owners.set(name, src);
    }
  }
  assert.deepStrictEqual(collisions, [], `global scope collisions would break the page: ${collisions.join(" | ")}`);
});
