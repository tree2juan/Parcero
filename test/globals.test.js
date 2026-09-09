const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8").replace(/\r\n/g, "\n");

/*
 * WHY THIS FILE EXISTS
 *
 * index.html loads every script into ONE global scope. A name a script does not
 * define does not fail — it silently resolves to whatever another script put
 * there. The flashcards work shipped exactly this: a handler called `render()`,
 * flashcards.js has no `render`, so it reached app.js's. The card did nothing
 * and an unrelated section re-rendered. No error, on any content.
 *
 * `node --test` cannot see this. require() gives every module its own scope, so
 * the two names can never meet. The bug is not merely untested here, it is
 * structurally untestable here — which is why this reads the scripts as text,
 * in the order the page loads them.
 *
 * WHY A NAMING CONVENTION AND NOT A RUNTIME CHECK
 *
 * The obvious way to ask "is this a published global?" is to look at the window.
 * Measured in a browser against the real page:
 *
 *   name           bare read     globalThis.<name>
 *   lessons        Array(8)      <section id="lessons">   <- named access, not the data
 *   curriculum     Array(200)    undefined
 *   fluencyItems   Array(12)     undefined
 *   flashcardSets  function      function
 *
 * `const` at the top level of a classic script creates a binding in the global
 * *scope* and no property on the global *object*. So `globalThis.curriculum` is
 * undefined while bare `curriculum` is a 200-element array, and
 * `globalThis.lessons` is not undefined but the <section> element, because
 * named access on window is the only thing filling that slot.
 *
 * Three consequences, and the third is the reason for the rule below:
 *   - `window.X =` as a test misses every const.
 *   - `Object.getOwnPropertyNames(window)` cannot see a const global at all.
 *   - Nothing at runtime distinguishes "published API" from "happens to be a
 *     function declaration" — the four names above divide by declaration form.
 *
 * A naming convention is therefore not the tidier option. It is the only
 * mechanism the language leaves available, which is why `Parcero*` is enforced
 * as a rule here rather than left as a preference.
 *
 * Credit: the codeOnly() scanner is ported from the flashcards branch, which
 * built and mutation-verified it. The all-scripts scope and the "argue a global
 * into an allow-list" framing come from the richer-modules branch. Neither
 * alone was sufficient: that one has no stripper on its bare-name check and
 * sees only calls, this one saw one file.
 */

/*
 * Blank out everything that is not code, preserving offsets so line numbers
 * stay true: line comments, block comments, string literals, template literals
 * and regex literals.
 *
 * This matters in both directions. Scanning raw text, `"#flag-save"` reads as a
 * call to save() and a comment naming render() reads as a call to render() —
 * both were live false positives in earlier versions of this check, in this
 * repo. Code inside `${...}` deliberately stays visible, because it is real
 * code; the `${` itself is blanked, since leaving the `$` behind reads as a
 * reference to a global named `$`, which is a real name here.
 */
function codeOnly(src) {
  const out = src.split("");
  const hide = (i) => { if (out[i] !== "\n" && out[i] !== "\r") out[i] = " "; };
  const AFTER = new Set(["", "(", ",", "=", ":", "[", "!", "&", "|", "?", "{", "}", ";", "+", "-", "*", "%", "^", "<", ">", "~"]);
  const WORDS = new Set(["return", "typeof", "instanceof", "in", "of", "new", "delete", "void", "throw", "do", "else", "case"]);
  let i = 0;
  let prev = "";
  let prevWord = "";

  while (i < src.length) {
    const c = src[i];
    const d = src[i + 1];

    if (c === "/" && d === "/") {
      while (i < src.length && src[i] !== "\n") hide(i++);
      continue;
    }
    if (c === "/" && d === "*") {
      hide(i++); hide(i++);
      while (i < src.length && !(src[i] === "*" && src[i + 1] === "/")) hide(i++);
      hide(i++); hide(i++);
      continue;
    }
    if (c === '"' || c === "'") {
      hide(i++);
      while (i < src.length && src[i] !== c) {
        if (src[i] === "\\") hide(i++);
        if (i < src.length) hide(i++);
      }
      hide(i++);
      prev = "x"; prevWord = "";
      continue;
    }
    if (c === "`") {
      hide(i++);
      let depth = 0;
      while (i < src.length) {
        if (src[i] === "\\") { hide(i++); hide(i++); continue; }
        if (depth === 0 && src[i] === "`") break;
        if (depth === 0 && src[i] === "$" && src[i + 1] === "{") { hide(i); hide(i + 1); depth = 1; i += 2; continue; }
        if (depth > 0) {
          if (src[i] === "{") depth++;
          else if (src[i] === "}") { depth--; i++; continue; }
          i++;
          continue;
        }
        hide(i++);
      }
      hide(i++);
      prev = "x"; prevWord = "";
      continue;
    }
    if (c === "/" && (AFTER.has(prev) || WORDS.has(prevWord))) {
      hide(i++);
      let inClass = false;
      while (i < src.length && src[i] !== "\n") {
        if (src[i] === "\\") { hide(i++); hide(i++); continue; }
        if (src[i] === "[") inClass = true;
        else if (src[i] === "]") inClass = false;
        else if (src[i] === "/" && !inClass) break;
        hide(i++);
      }
      hide(i++);
      while (i < src.length && /[a-z]/.test(src[i])) hide(i++);
      prev = "x"; prevWord = "";
      continue;
    }

    if (!/\s/.test(c)) {
      if (/[\w$]/.test(c)) {
        let j = i;
        while (j < src.length && /[\w$]/.test(src[j])) j++;
        prevWord = src.slice(i, j);
        prev = src[j - 1];
        i = j;
        continue;
      }
      prev = c;
      prevWord = "";
    }
    i++;
  }
  return out.join("");
}

const KEYWORDS = new Set([
  "if", "for", "while", "switch", "catch", "return", "typeof", "instanceof", "function", "new", "await",
  "case", "do", "else", "in", "of", "delete", "void", "throw", "yield", "super", "this", "const", "let",
  "var", "class", "try", "finally", "break", "continue", "default", "export", "import", "extends", "static",
  "get", "set", "async", "true", "false", "null", "undefined", "NaN", "Infinity", "arguments"
]);

// Globals the page inherits from the browser. Referencing these is not a reach
// into another script, so they are never reported.
const HOST = new Set([
  "window", "document", "console", "navigator", "location", "history", "localStorage", "sessionStorage",
  "setTimeout", "clearTimeout", "setInterval", "clearInterval", "requestAnimationFrame", "cancelAnimationFrame",
  "fetch", "URL", "URLSearchParams", "Blob", "FormData", "Event", "CustomEvent", "MutationObserver",
  "IntersectionObserver", "ResizeObserver", "Intl", "JSON", "Math", "Date", "Object", "Array", "String",
  "Number", "Boolean", "Symbol", "Map", "Set", "WeakMap", "WeakSet", "Promise", "RegExp", "Error",
  "TypeError", "RangeError", "Proxy", "Reflect", "BigInt", "globalThis", "structuredClone", "queueMicrotask",
  "SpeechSynthesisUtterance", "speechSynthesis", "CSS", "Element", "HTMLElement", "Node", "NodeList",
  "getComputedStyle", "matchMedia", "alert", "confirm", "prompt", "encodeURIComponent", "decodeURIComponent",
  "parseInt", "parseFloat", "isNaN", "isFinite", "atob", "btoa", "crypto", "performance", "module", "require"
]);

/*
 * Deliberate cross-script API that does not follow the Parcero* convention.
 *
 * Measured, this is empty: every cross-script name on the page today is either
 * a data-bundle global (derived below from data/*.js) or Parcero*-prefixed.
 * `t` is declared independently by i18n.js and app.js and locally by
 * review-ui.js, so nothing reaches across for it, and `tp` is a local inside
 * review-ui.js's IIFE rather than API at all — both were in an earlier draft of
 * this list from memory, and neither survived being checked.
 *
 * Keeping the hatch but keeping it empty is the point: the convention holds
 * with no exceptions right now, and that fact is asserted below rather than
 * assumed.
 */
const PUBLISHED_EXCEPTIONS = new Set([]);

const isPublishedName = (name) => /^Parcero[A-Z]/.test(name) || PUBLISHED_EXCEPTIONS.has(name);

// Column-0 declarations. Deliberately over-inclusive: for an IIFE-wrapped file
// this lists names that never become globals. That costs nothing, because a
// bare reach for an IIFE-internal name resolves to nothing at all — still a
// bug, just a ReferenceError rather than a silent misdirection. Narrowing this
// is what would be unsafe.
function topLevelNames(code) {
  const names = new Set();
  for (const m of code.matchAll(/^(?:const|let|var)\s+([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  for (const m of code.matchAll(/^(?:async\s+)?function\s*\*?\s*([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  for (const m of code.matchAll(/^class\s+([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  return names;
}

// Every name a file binds anywhere: declarations, params, destructuring,
// arrows, catch bindings, labels.
function boundNames(code) {
  const names = new Set();
  const add = (raw) => {
    const name = String(raw || "").trim();
    if (/^[A-Za-z_$][\w$]*$/.test(name) && !KEYWORDS.has(name)) names.add(name);
  };
  const params = (list) => {
    for (const part of list.split(",")) add(part.replace(/[=[\]{}.:]/g, " ").trim().split(/\s+/)[0]);
  };

  for (const m of code.matchAll(/(?:const|let|var|function\s*\*?|class)\s+([A-Za-z_$][\w$]*)/g)) add(m[1]);
  for (const m of code.matchAll(/\bcatch\s*\(\s*([A-Za-z_$][\w$]*)/g)) add(m[1]);
  for (const m of code.matchAll(/([A-Za-z_$][\w$]*)\s*=>/g)) add(m[1]);
  for (const m of code.matchAll(/\bfunction\s*\*?\s*([A-Za-z_$][\w$]*)?\s*\(([^()]*)\)/g)) {
    if (m[1]) add(m[1]);
    params(m[2]);
  }
  for (const m of code.matchAll(/\(([^()]*)\)\s*=>/g)) params(m[1]);
  for (const m of code.matchAll(/(?:const|let|var)\s*[[{]([^\]}]*)[\]}]/g)) {
    for (const part of m[1].split(",")) add(part.split(":").pop().split("=")[0]);
  }
  /*
   * Object-literal method shorthand and class methods: `name(args) {`. These
   * are bindings, not references, and missing them reports the definition of a
   * method as a reach for another script's global of the same name.
   *
   * `name(...)` immediately followed by `{` is the reliable signal, because a
   * *call* cannot be followed by a block in expression position. Control
   * structures share the shape — `if (state) {` — so keywords are excluded
   * here rather than treated as functions; binding their "parameters" would
   * silently suppress a real reach, which is why params are only taken from
   * genuine function forms above.
   */
  for (const m of code.matchAll(/(?<![.\w$])([A-Za-z_$][\w$]*)\s*\(([^()]*)\)\s*\{/g)) {
    if (KEYWORDS.has(m[1])) continue;
    add(m[1]);
    params(m[2]);
  }
  return names;
}

/*
 * The whole check, as a pure function of file text, so the calibration test
 * below can run it against sources with deliberately planted defects. A guard
 * that has only ever been run against code known to be clean has not been
 * shown to be capable of failing.
 */
function findReaches({ order, sources, dataFiles }) {
  const code = new Map();
  for (const file of order) code.set(file, codeOnly(sources[file]));

  // Names published by data bundles. Derived, not hand-listed: a new data file
  // is covered the moment index.html loads it, and `flashcardSets` needs no
  // special case because it is the same kind of thing as `lessons`.
  const published = new Set();
  for (const file of dataFiles) for (const name of topLevelNames(code.get(file))) published.add(name);

  const owns = new Map();
  for (const file of order) owns.set(file, topLevelNames(code.get(file)));

  const reaches = [];
  for (const file of order) {
    if (dataFiles.includes(file)) continue;
    const text = code.get(file);
    const mine = boundNames(text);

    for (const m of text.matchAll(/(?<![.\w$?])([A-Za-z_$][\w$]*)/g)) {
      const name = m[1];
      if (text[m.index + name.length] === ":") continue; // object key, not a reference
      if (KEYWORDS.has(name) || HOST.has(name)) continue;
      if (mine.has(name) || published.has(name) || isPublishedName(name)) continue;

      const owners = order.filter((other) => other !== file && owns.get(other).has(name));
      if (!owners.length) continue;
      const line = text.slice(0, m.index).split("\n").length;
      reaches.push(`${file}:${line} reaches \`${name}\`, which ${owners.join(", ")} declares at top level`);
    }
  }
  return reaches;
}

function pageScripts() {
  const html = read("index.html");
  const order = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((src) => !/^https?:/.test(src) && fs.existsSync(path.join(root, src)));
  assert.ok(order.length > 1, "expected index.html to load several scripts");
  const sources = {};
  for (const file of order) sources[file] = read(file);
  return { order, sources, dataFiles: order.filter((file) => file.startsWith("data/")) };
}

test("no script reaches a name another script owns", () => {
  const reaches = findReaches(pageScripts());
  assert.deepStrictEqual([...new Set(reaches)], [],
    "A bare reference to a name another script declares at top level is either a silent reach for that\n" +
    "script's global or a ReferenceError. node --test can see neither, because require() gives every\n" +
    "module its own scope. Either give this file its own definition, or, if the global is intentional\n" +
    "cross-script API, name it Parcero* — see the header of this file for why a runtime check cannot work.");
});

test("the convention needs no exceptions, and the hatch stays shut", () => {
  /*
   * Pins the convention by pinning its escape hatch at empty. An allow-list
   * that can be appended to silently stops meaning anything after the first
   * accident — the failure mode of every `shared`-style list in this repo. To
   * grandfather a name you have to edit this assertion in the same diff, where
   * a reviewer will see it and can ask why Parcero* was not used instead.
   */
  assert.deepStrictEqual([...PUBLISHED_EXCEPTIONS].sort(), [],
    "every cross-script global today is either a data bundle or Parcero*-prefixed; keep it that way");

  // And any name that were added has to still be real, so the list cannot rot.
  const { order, sources, dataFiles } = pageScripts();
  const declared = new Set();
  for (const file of order) {
    if (dataFiles.includes(file)) continue;
    for (const name of topLevelNames(codeOnly(sources[file]))) declared.add(name);
  }
  for (const name of PUBLISHED_EXCEPTIONS) {
    assert.ok(declared.has(name), `${name} is grandfathered but no script declares it any more; drop it`);
  }
});

/*
 * CALIBRATION
 *
 * Everything below plants a defect and asserts this check reports it, and
 * plants a look-alike and asserts it does not. It runs on every commit rather
 * than once on my machine, because the failure mode of a text scanner is to
 * stop being able to fail while still reporting clean — and a clean verdict
 * from an uncalibrated instrument is indistinguishable from a clean verdict
 * from correct code.
 */
const fixture = (consumer) => ({
  order: ["data/things.js", "owner.js", "consumer.js"],
  dataFiles: ["data/things.js"],
  sources: {
    "data/things.js": "const things = [1, 2];\nfunction thingSets() { return things; }\n",
    "owner.js": "const state = {};\nfunction render() {}\nconst ParceroThing = { start() {} };\n",
    "consumer.js": consumer
  }
});

const caught = (consumer) => findReaches(fixture(consumer)).length > 0;

test("the check catches a reach the page would suffer silently", () => {
  const missed = [];
  const mustCatch = {
    "a bare call": "function go() { render(); }\n",
    "a reference passed by name": "function go() { setTimeout(render, 0); }\n",
    "a non-function read": "function go() { return state.x; }\n",
    "in a condition, which looks like a parameter list": "function go() { if (state) return 1; return 0; }\n",
    "in a while condition": "function go() { while (state) { break; } }\n",
    "inside a template interpolation": "function go() { return `${render()}`; }\n",
    "inside a nested template expression": "function go() { return `${1 ? render() : 0}`; }\n",
    "after a local of another name": "const mine = 1;\nfunction go() { return state; }\n"
  };
  for (const [label, source] of Object.entries(mustCatch)) if (!caught(source)) missed.push(label);
  assert.deepStrictEqual(missed, [],
    "these reach another script's global on the real page and must be reported");
});

test("the check does not report things that only look like reaches", () => {
  const wrong = [];
  const mustPass = {
    "a mention in a line comment": "// render() lives in owner.js\nfunction go() {}\n",
    "a mention in a block comment": "/* state and render() are owner.js's */\nfunction go() {}\n",
    "a string that looks like a call": "function go() { return \"render(\" + \"state\"; }\n",
    "a selector string": "function go() { return document.querySelector(\"#state\"); }\n",
    "a regex literal": "function go() { return /render\\(/.test(\"x\"); }\n",
    "a property of the same name": "function go() { return deck.render(); }\n",
    "an object key of the same name": "function go() { return { render: 1, state: 2 }; }\n",
    "a shadowing parameter": "function go(state) { return state; }\n",
    "a shadowing local declaration": "function go() { const render = 1; return render; }\n",
    "a method shorthand of the same name": "const api = { render() { return 1; }, state: 2 };\nfunction go() { return api; }\n",
    "the published Parcero* API": "function go() { return ParceroThing.start(); }\n",
    "a data bundle global": "function go() { return things.length; }\n",
    "a data bundle function": "function go() { return thingSets(); }\n"
  };
  for (const [label, source] of Object.entries(mustPass)) if (caught(source)) wrong.push(label);
  assert.deepStrictEqual(wrong, [],
    "reporting these would turn main red for code that is correct");
});

test("the stripper actually blanks what it claims to, and nothing more", () => {
  // Guards the calibration itself: if codeOnly() silently stopped applying —
  // a CRLF/LF mismatch did exactly this on the flashcards branch, costing six
  // test cases that all reported clean — every case above would still pass.
  const src = "const a = 1; // render\n/* state */\nconst s = \"render(\";\nconst r = /state/;\nconst t = `x${render()}y`;\n";
  const out = codeOnly(src);
  assert.strictEqual(out.length, src.length, "offsets must be preserved so line numbers stay true");
  assert.ok(!/\/\/ render/.test(out), "line comment survived");
  assert.ok(!/state \*\//.test(out), "block comment survived");
  assert.ok(!/render\(";/.test(out), "string literal survived");
  assert.ok(out.includes("render()"), "code inside ${...} must stay visible");
  assert.ok(!out.includes("${"), "the ${ itself must be blanked, or it reads as a reference to $");
  assert.strictEqual(out.split("\n").length, src.split("\n").length, "newlines must survive");
});
