const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const bundle = `${read("data/lesson-schema.js")}\n${read("data/lessons.js")}\n${read("data/curriculum.js")}\n({ lessons, curriculum, fluencyItems, matureItems, schema: ParceroLessonSchema });`;
const { lessons, curriculum, fluencyItems, matureItems, schema } = vm.runInNewContext(bundle, {}, { filename: "parcero-data-bundle.js" });

const directions = ["es", "en"];
const isText = (value) => typeof value === "string" && value.trim().length > 0;
const duplicates = (list) => [...new Set(list.filter((item, index) => list.indexOf(item) !== index))];

/*
 * Blank out everything that is not executable code, preserving offsets so line
 * numbers in failure messages stay true.
 *
 * The static checks below used to strip comments only, on the reasoning that
 * "the prose here quotes the very bugs being banned". That reasoning was right
 * and incomplete: a *string literal* is prose too, and the file most likely to
 * contain the banned words is the test that names the fields it is checking.
 * `for (const [field, expected] of [["dialogue", ...], ["vocabulary", ...]])`
 * destructures a (name, count) pair and was flagged as a positional row read,
 * because "dialogue" appeared inside the quotes.
 *
 * #8's cross-script scanner solves the same problem the same way; when that
 * branch lands, these two should become one helper rather than two.
 */
const scan = (source, { literals = true } = {}) => {
  const out = source.split("");
  const blank = (from, to) => {
    for (let i = from; i < to && i < out.length; i += 1) if (out[i] !== "\n") out[i] = " ";
  };
  let i = 0;
  let prev = "";
  while (i < source.length) {
    const two = source.slice(i, i + 2);
    if (two === "//") {
      let end = source.indexOf("\n", i);
      if (end < 0) end = source.length;
      blank(i, end);
      i = end;
      continue;
    }
    if (two === "/*") {
      let end = source.indexOf("*/", i + 2);
      end = end < 0 ? source.length : end + 2;
      blank(i, end);
      i = end;
      continue;
    }
    const ch = source[i];
    if (ch === '"' || ch === "'" || ch === "`") {
      let j = i + 1;
      while (j < source.length) {
        if (source[j] === "\\") { j += 2; continue; }
        if (source[j] === ch) break;
        j += 1;
      }
      if (literals) blank(i + 1, j);
      i = j + 1;
      prev = ch;
      continue;
    }
    // A "/" is a regex only where a value cannot already have ended; otherwise
    // it is division. Guessing wrong the safe way means treating a regex as
    // code, which over-reports rather than going quiet.
    if (ch === "/" && /[(,=:[!&|?{};+\-*%~^]/.test(prev)) {
      let j = i + 1;
      let inClass = false;
      while (j < source.length) {
        if (source[j] === "\\") { j += 2; continue; }
        if (source[j] === "[") inClass = true;
        else if (source[j] === "]") inClass = false;
        else if (source[j] === "/" && !inClass) break;
        else if (source[j] === "\n") { j = -1; break; }
        j += 1;
      }
      if (j > 0) {
        if (literals) blank(i + 1, j);
        i = j + 1;
        prev = "/";
        continue;
      }
    }
    if (!/\s/.test(ch)) prev = ch;
    i += 1;
  }
  return out.join("");
};

const blankLiterals = (source) => scan(source, { literals: true });
const blankComments = (source) => scan(source, { literals: false });

test("lessons are present and uniquely identified", () => {
  assert.ok(Array.isArray(lessons) && lessons.length > 1, "expected more than one lesson");
  const ids = lessons.map((lesson) => lesson.id);
  assert.deepStrictEqual(duplicates(ids), [], "lesson ids must be unique");
  for (const id of ids) assert.match(id, /^[a-z0-9-]+$/, `lesson id "${id}" must be kebab-case`);
});

test("every lesson carries its teaching metadata", () => {
  for (const lesson of lessons) {
    assert.ok(isText(lesson.level), `${lesson.id}: missing level`);
    assert.ok(isText(lesson.domain), `${lesson.id}: missing domain`);
    assert.ok(isText(lesson.register), `${lesson.id}: missing register`);
    assert.ok(lesson.skills?.length, `${lesson.id}: missing skills`);
    assert.ok(lesson.pathways?.length, `${lesson.id}: missing pathways`);
    assert.ok(["pending", "reviewed"].includes(lesson.review), `${lesson.id}: review must be "pending" or "reviewed"`);
  }
});

test("every lesson teaches in both directions", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const content = lesson[direction];
      assert.ok(content, `${lesson.id}: missing "${direction}" content`);
      assert.ok(isText(content.title), `${lesson.id}.${direction}: missing title`);
      assert.ok(isText(content.situation), `${lesson.id}.${direction}: missing situation`);
      assert.ok(isText(content.note), `${lesson.id}.${direction}: missing culture note`);
    }
  }
});

test("dialogue lines carry the target language, a translation and a pronunciation", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { dialogue } = schema.normalizeContent(lesson[direction]);
      assert.ok(dialogue.length >= 6, `${lesson.id}.${direction}: a situation needs at least six dialogue lines, found ${dialogue.length}`);
      dialogue.forEach((line, index) => {
        for (const slot of ["speaker", "target", "translation", "pronunciation"]) {
          assert.ok(isText(line[slot]), `${lesson.id}.${direction} line ${index + 1}: missing ${slot}`);
        }
      });
    }
  }
});

test("vocabulary entries teach a term in context, not just a gloss", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { vocabulary } = schema.normalizeContent(lesson[direction]);
      assert.ok(vocabulary.length >= 7, `${lesson.id}.${direction}: needs at least seven vocabulary entries, found ${vocabulary.length}`);
      vocabulary.forEach((entry, index) => {
        assert.ok(isText(entry.term), `${lesson.id}.${direction} vocabulary ${index + 1}: missing term`);
        assert.ok(isText(entry.explanation), `${lesson.id}.${direction} vocabulary ${index + 1}: missing explanation`);
        assert.ok(isText(entry.useWhen), `${lesson.id}.${direction} vocabulary ${index + 1}: missing "use it when"`);
        assert.ok(isText(entry.region), `${lesson.id}.${direction} vocabulary ${index + 1}: must say where it is used`);
        assert.ok(entry.example && isText(entry.example.target), `${lesson.id}.${direction} vocabulary ${index + 1}: missing an example sentence`);
      });
    }
  }
});

test("every lesson answers who, what, when, where and why", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { setting } = schema.normalizeContent(lesson[direction]);
      assert.ok(setting, `${lesson.id}.${direction}: missing the situation setting`);
      for (const key of schema.SETTING_KEYS) {
        assert.ok(isText(setting[key]), `${lesson.id}.${direction}: the setting never answers "${key}"`);
      }
    }
  }
});

test("every lesson names the address form it is built on", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { address } = schema.normalizeContent(lesson[direction]);
      assert.ok(address, `${lesson.id}.${direction}: missing the address form`);
      assert.ok(schema.ADDRESS_FORMS.includes(address.form), `${lesson.id}.${direction}: "${address.form}" is not a recognised address form`);
      assert.ok(isText(address.why), `${lesson.id}.${direction}: does not explain why this address form`);
      assert.ok(isText(address.ifYouSwitch), `${lesson.id}.${direction}: does not say what changes if you switch`);
    }
  }
});

test("context notes, pitfalls and variations are complete where present", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const content = schema.normalizeContent(lesson[direction]);
      assert.ok(content.culture.length >= 3, `${lesson.id}.${direction}: needs at least three context notes`);
      content.culture.forEach((row, index) => {
        for (const slot of schema.CULTURE_SLOTS) {
          assert.ok(isText(row[slot]), `${lesson.id}.${direction} context note ${index + 1}: missing ${slot}`);
        }
      });
      assert.ok(content.pitfalls.length >= 3, `${lesson.id}.${direction}: needs at least three pitfalls`);
      content.pitfalls.forEach((row, index) => {
        for (const slot of schema.PITFALL_SLOTS) {
          assert.ok(isText(row[slot]), `${lesson.id}.${direction} pitfall ${index + 1}: missing ${slot}`);
        }
      });
      assert.ok(content.variations.length >= 3, `${lesson.id}.${direction}: needs at least three variations`);
      content.variations.forEach((row, index) => {
        for (const slot of schema.VARIATION_SLOTS) {
          assert.ok(isText(row[slot]), `${lesson.id}.${direction} variation ${index + 1}: missing ${slot}`);
        }
      });
    }
  }
});

test("practice questions have a valid answer among distinct choices", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { practice } = schema.normalizeContent(lesson[direction]);
      assert.ok(practice.length >= 3, `${lesson.id}.${direction}: needs at least three practice questions, found ${practice.length}`);
      practice.forEach((question, index) => {
        assert.ok(isText(question.prompt), `${lesson.id}.${direction} question ${index + 1}: missing prompt`);
        assert.ok(question.choices.length >= 2, `${lesson.id}.${direction} question ${index + 1}: needs at least two choices`);
        assert.deepStrictEqual(duplicates(question.choices), [], `${lesson.id}.${direction} question ${index + 1}: choices must be distinct`);
        assert.ok(
          Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.choices.length,
          `${lesson.id}.${direction} question ${index + 1}: answer index ${question.answer} is out of range`
        );
      });
    }
  }
});

/*
 * A learner who never reads the target language can still score well if the
 * answer is always first, or always the longest option. Both are shape tells,
 * and both are easy to introduce by accident when writing many questions.
 */
test("practice answers are not guessable from position", () => {
  const positions = new Set();
  for (const lesson of lessons) {
    for (const direction of directions) {
      for (const question of schema.normalizeContent(lesson[direction]).practice) {
        positions.add(question.answer);
      }
    }
  }
  assert.ok(positions.size > 1, "every correct answer sits at the same index, so the set can be passed without reading it");
});

test("practice answers are not guessable from length", () => {
  const suspicious = [];
  for (const lesson of lessons) {
    for (const direction of directions) {
      schema.normalizeContent(lesson[direction]).practice.forEach((question, index) => {
        const lengths = question.choices.map((choice) => choice.length);
        const answerLength = lengths[question.answer];
        const others = lengths.filter((_, position) => position !== question.answer);
        const longest = Math.max(...others);
        const shortest = Math.min(...others);
        if (answerLength > longest * 1.6 || answerLength * 1.6 < shortest) {
          suspicious.push(`${lesson.id}.${direction} question ${index + 1}`);
        }
      });
    }
  }
  assert.deepStrictEqual(suspicious, [], `the correct answer stands out by length in: ${suspicious.join(", ")}`);
});

test("the verb curriculum is complete and uniquely identified", () => {
  assert.ok(Array.isArray(curriculum) && curriculum.length > 0);
  const ids = curriculum.map((verb) => verb.id);
  assert.deepStrictEqual(duplicates(ids), [], "verb ids must be unique");
  for (const verb of curriculum) {
    assert.ok(isText(verb.spanish) && isText(verb.english), `${verb.id}: missing translation pair`);
    for (const form of ["presentYo", "preteriteYo", "participle"]) {
      assert.ok(isText(verb.forms?.[form]), `${verb.id}: missing ${form}`);
    }
    for (const label of ["level", "register", "regionality"]) {
      assert.ok(isText(verb[label]), `${verb.id}: missing ${label}`);
    }
  }
});

test("reference lists match the shape the renderers expect", () => {
  assert.ok(fluencyItems.length > 0);
  for (const item of fluencyItems) {
    assert.strictEqual(item.length, 5, "expected [phrase, meaning, type, region, note]");
    item.forEach((cell) => assert.ok(isText(cell)));
  }
  assert.ok(matureItems.length > 0);
  for (const item of matureItems) {
    assert.strictEqual(item.length, 4, "expected [phrase, equivalent, severity, note]");
    item.forEach((cell) => assert.ok(isText(cell)));
  }
});

test("nothing reads a lesson row by position", () => {
  /*
   * Dialogue and vocabulary rows used to be tuples, and readers destructured
   * them: `const [, target] = line`, `dialogue.map((line) => line[1])`. Rows are
   * named objects now, and the schema still accepts the old tuples, so the
   * supported way to read a slot is by name.
   *
   * This is here because of how the tuple reads failed rather than that they
   * failed. Destructuring an object throws and you find it immediately; the
   * read-aloud button built its utterance with `line[1]`, got `undefined` for
   * every line, and simply spoke nothing — no error, no visible change, and a
   * green suite. A silent feature is worth a loud test.
   *
   * Test files are checked too. The first version of this guard looked only at
   * the product, on the reasoning that a broken test fails and announces
   * itself. That reasoning is wrong: a positional read in a test yields
   * `undefined`, and a test that never asserts on the value it misread stays
   * green while checking nothing. Two tests in the flashcards branch had
   * exactly that, green in CI, against product code that was correct.
   */
  const offenders = [
    // first.dialogue[0][1]
    /\.(?:dialogue|vocabulary)\s*\[\s*\d+\s*\]\s*\[\s*\d+\s*\]/,
    // const [, target] = first.dialogue[0]
    /const\s*\[[^\]]*\]\s*=\s*[^;\n]*\b(?:dialogue|vocabulary)\b[^;\n]*/,
    // for (const [term, meaning] of content.vocabulary)
    /for\s*\(\s*(?:const|let|var)\s*\[[^\]]*\]\s+of\s+[^)]*\b(?:dialogue|vocabulary)\b/,
    // dialogue.map((line) => line[1]) — the one that spoke silence
    /\b(?:dialogue|vocabulary)\s*\.\s*(?:map|forEach|filter|flatMap)\(\s*\(?\s*(\w+)[\s\S]{0,120}?\b\1\s*\[\s*\d+\s*\]/,
    // .map(([, target]) => ...)
    /\b(?:dialogue|vocabulary)\s*\.\s*(?:map|forEach|filter|flatMap|some|every|find)\(\s*\(?\s*\[/,
  ];

  // Comments and string literals are both prose, and the prose here quotes the
  // very bugs being banned. See blankLiterals: stripping comments alone flagged
  // a (name, count) pair whose name happened to be "dialogue".
  const code = (source) => blankLiterals(source);

  const tests = fs.readdirSync(path.join(root, "test"))
    .filter((name) => name.endsWith(".test.js"))
    .map((name) => `test/${name}`);

  for (const file of ["app.js", "review.js", "review-ui.js", ...tests]) {
    const source = code(read(file));
    for (const pattern of offenders) {
      const found = source.match(pattern);
      assert.strictEqual(found, null,
        `${file} reads a lesson row by position (${found && found[0].trim()}); read the slot by name instead`);
    }
  }
});

test("no script calls a bare name that another script owns", () => {
  /*
   * The page loads every script into ONE global scope, so a bare call in
   * review-ui.js can silently reach a function defined in app.js. require()
   * gives each module its own scope, which makes that structurally invisible
   * to the rest of this suite — not missed, impossible to see. The flashcards
   * session shipped exactly this: a handler calling `render()`, which reached
   * app.js's `render`. The button did nothing and an unrelated part of the
   * page re-rendered, with no error anywhere.
   *
   * This branch rewrote three of these scripts and removed declarations from
   * review-ui.js's IIFE head, which is precisely the edit that creates the bug:
   * delete a declaration, leave the call behind, and the name still resolves.
   *
   * `shared` is the intentional cross-script API. A new global has to be argued
   * into it, so an accidental reach is caught by default.
   *
   * `owns` is deliberately over-inclusive: it lists every column-0 declaration,
   * which for an IIFE-wrapped file includes names that never become globals.
   * Measured in a browser, the seven scripts declare 81 such names and only 51
   * are real globals — 45 of them app.js's, with review.js and review-ui.js
   * exposing one and none. Over-inclusion costs nothing, because a bare call to
   * a name that turns out to be IIFE-internal elsewhere resolves to nothing at
   * all: still a bug, just a ReferenceError instead of a silent misdirection.
   * Narrowing this list is what would be unsafe.
   */
  const shared = new Set(["t", "ParceroReview", "ParceroReviewUI", "ParceroLessonSchema", "ParceroI18n",
    "lessons", "curriculum", "fluencyItems", "matureItems"]);
  const keywords = new Set(["if", "for", "while", "switch", "catch", "return", "typeof", "function", "new",
    "await", "case", "do", "else", "in", "of", "delete", "void", "throw", "yield", "super", "this"]);

  const html = read("index.html");
  const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map((match) => match[1])
    .filter((src) => fs.existsSync(path.join(root, src)));
  assert.ok(scripts.length > 1, "expected index.html to load several scripts");

  const owns = new Map();
  for (const src of scripts) {
    const text = read(src);
    const names = new Set();
    for (const match of text.matchAll(/^(?:const|let|var)\s+([A-Za-z_$][\w$]*)/gm)) names.add(match[1]);
    for (const match of text.matchAll(/^function\s+([A-Za-z_$][\w$]*)/gm)) names.add(match[1]);
    owns.set(src, names);
  }

  const declaredIn = (text) => {
    const names = new Set();
    for (const match of text.matchAll(/\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)/g)) names.add(match[1]);
    for (const match of text.matchAll(/\bfunction\s*\*?\s*([A-Za-z_$][\w$]*)/g)) names.add(match[1]);
    for (const match of text.matchAll(/\bcatch\s*\(\s*([A-Za-z_$][\w$]*)/g)) names.add(match[1]);
    for (const match of text.matchAll(/\b(?:const|let|var)\s*[{[]([^}\]]*)[}\]]/g)) {
      for (const part of match[1].split(",")) {
        const name = part.split(":").pop().replace(/[^\w$]/g, "");
        if (name) names.add(name);
      }
    }
    for (const match of text.matchAll(/\(([^)]*)\)\s*(?:=>|\{)/g)) {
      for (const part of match[1].split(",")) {
        const name = part.trim().split(/[=:\s]/)[0].replace(/[^\w$]/g, "");
        if (name) names.add(name);
      }
    }
    for (const match of text.matchAll(/([A-Za-z_$][\w$]*)\s*=>/g)) names.add(match[1]);
    for (const match of text.matchAll(/^\s*([A-Za-z_$][\w$]*)\s*\([^)]*\)\s*\{/gm)) names.add(match[1]);
    return names;
  };

  const reaches = [];
  for (const src of scripts) {
    const text = read(src);
    const mine = declaredIn(text);
    for (const match of blankLiterals(text).matchAll(/(^|[^.\w$])([A-Za-z_$][\w$]*)\s*\(/g)) {
      const name = match[2];
      if (keywords.has(name) || shared.has(name) || mine.has(name)) continue;
      /*
       * A data/ script loaded BEFORE the caller is a provider, and the caller
       * reaching its top-level name is the architecture, not an accident --
       * data/flashcards.js defining flashcardSets for flashcards.js is exactly
       * what data/lessons.js does for app.js. What stays banned is the sibling
       * reach that motivated this check: a handler calling render(), resolving
       * to app.js's render, doing nothing visible and re-rendering someone
       * else's section.
       *
       * Order is load order, and it is required rather than assumed: a name
       * from a script loaded after the caller is not available when the caller
       * runs, so that reach is still a bug and is still reported.
       */
      const owners = scripts.filter((other) => other !== src && owns.get(other).has(name))
        .filter((other) => !(other.startsWith("data/") && scripts.indexOf(other) < scripts.indexOf(src)));
      if (owners.length) reaches.push(`${src} calls bare ${name}(), which ${owners.join(", ")} defines at top level`);
    }
  }

  assert.deepStrictEqual([...new Set(reaches)], [],
    "a bare call to a name another script declares at top level is either a silent reach for its global\n" +
    "or a ReferenceError, and node --test can see neither, because require() gives every module its own scope.\n" +
    "Either give the caller its own definition, or, if the global is intentional API, add the name to `shared` above.");
});

test("no fallback is guarded by a typeof that an element id makes impossible", () => {
  /*
   * Named access on Window turns every element id into a global, so with
   * `<section id="lessons">` in the page, `typeof lessons` is "object" even
   * when data/lessons.js never loads. A `typeof x === "undefined"` fallback on
   * such a name can never fire, and instead of degrading it hands a <section>
   * to code expecting an array.
   *
   * node --test cannot see this and does worse than miss it: with no document
   * in the harness the name really is undefined, the fallback really does fire,
   * and the guard tests green. The harness inverts the condition rather than
   * merely hiding it. Found by the flashcards session (#8) in their own copy of
   * this pattern; this branch had it in review-ui.js.
   *
   * Derived from the page's ids rather than a list of names, so renaming an id
   * cannot leave this passing while guarding nothing.
   */
  const html = read("index.html");
  const idGlobals = new Set(
  [...html.matchAll(/id="([\w-]+)"/g)]
    .map((match) => match[1])
    .filter((id) => /^[A-Za-z_$][\w$]*$/.test(id))
  );
  assert.ok(idGlobals.size > 0,
  "expected index.html to contain ids that are valid identifiers; without any, this check verifies nothing");

  const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map((match) => match[1])
  .filter((src) => fs.existsSync(path.join(root, src)));

  const impossible = [];
  for (const src of scripts) {
  const text = read(src);
  const structure = blankLiterals(text);  // for reading code shape
  const prose = blankComments(text);      // keeps "undefined" readable
  /*
   * A typeof probe on such a name is only a defect when its result is used as
   * the data. Feeding it through a shape check first is the correct remedy and
   * must not be reported as the disease: #8 writes
   *
   *   dataArray(typeof lessons === "undefined" ? null : lessons)
   *
   * where dataArray does the Array.isArray. The typeof is then doing the one
   * job it can do -- avoiding a ReferenceError on a name nothing declares --
   * and the element case is caught by shape, exactly as this check demands.
   * Flagging it would push someone to delete a working guard.
   *
   * "Is it shape-checked" is answered by walking out through the unclosed
   * parens that enclose the probe and naming the calls they belong to, not by
   * reading a fixed window of characters around it. A window is not a scope:
   * the first version of this used +/-200 chars, and it took a mutation to
   * show that what it really measured was proximity.
   */
  const span = (from) => {
    let depth = 0;
    for (let i = from; i < structure.length; i += 1) {
      const ch = structure[i];
      if (ch === "(" || ch === "[" || ch === "{") depth += 1;
      else if (ch === ")" || ch === "]" || ch === "}") {
        depth -= 1;
        if (depth === 0 && ch === "}") return structure.slice(from, i + 1);
        if (depth < 0) return structure.slice(from, i);
      } else if (ch === ";" && depth === 0) return structure.slice(from, i);
    }
    return structure.slice(from);
  };
  const shapeCheckers = new Set(["isArray"]);
  for (const match of structure.matchAll(/(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)/g)) {
    if (/Array\.isArray/.test(span(match.index))) shapeCheckers.add(match[1]);
  }
  const enclosingCalls = (index) => {
    const names = [];
    let depth = 0;
    for (let i = index; i >= 0; i -= 1) {
      const ch = structure[i];
      if (ch === ")") depth += 1;
      else if (ch === "(") {
        if (depth > 0) { depth -= 1; continue; }
        const before = structure.slice(0, i).match(/([A-Za-z_$][\w$]*)\s*$/);
        if (before) names.push(before[1]);
      } else if ((ch === ";" || ch === "{" || ch === "}") && depth === 0) break;
    }
    return names;
  };
  for (const match of prose.matchAll(/typeof\s+([A-Za-z_$][\w$]*)\s*===?\s*["']undefined["']/g)) {
    if (!idGlobals.has(match[1])) continue;
    if (structure[match.index] === " ") continue;  // the probe is quoted prose, not code
    if (enclosingCalls(match.index).some((name) => shapeCheckers.has(name))) continue;
    impossible.push(`${src}: typeof ${match[1]} === "undefined" can never be true; #${match[1]} is an element id`);
  }
  }

  assert.deepStrictEqual([...new Set(impossible)], [],
  "guard on shape (Array.isArray) instead — an element never satisfies it, and the typeof probe only helps\n" +
  "for a name no script and no element declares.");
});

test("the read-aloud button speaks the taught line", () => {
  const app = read("app.js");
  const utterance = app.match(/new SpeechSynthesisUtterance\(([^;]*?)\);/);
  assert.ok(utterance, "expected app.js to build a speech utterance");
  assert.match(utterance[1], /\.target\b/,
    "the utterance must read the target slot by name, or it speaks a string of undefined");
});

test("every element app.js looks up exists in index.html", () => {
  const app = read("app.js");
  const html = read("index.html");
  const ids = new Set([...app.matchAll(/\$\("#([\w-]+)"\)/g)].map((match) => match[1]));
  assert.ok(ids.size > 0, "expected app.js to query elements by id");
  for (const id of ids) {
    assert.ok(html.includes(`id="${id}"`), `index.html is missing #${id}, which app.js expects`);
  }
});

test("app.js renders the whole lesson set rather than a single hard-coded lesson", () => {
  const app = read("app.js");
  assert.doesNotMatch(app, /=\s*lessons\[0\]\s*;/, "app.js must not pin the view to lessons[0]");
  assert.match(app, /lessons\.length/, "app.js should size progress against the full lesson list");
});


test("practiceExtra questions hold the same shape guarantees as the main one", () => {
  /*
   * test/practice.test.js (merged PR #5) asserts the correct answer is not
   * identifiable by position or by length. It reads `lesson[direction]`, which
   * is only the ONE top-level question -- so the four practiceExtra questions
   * per direction, 64 in total, inherit none of it. They were added after that
   * test was written, which is exactly when this class of gap is born: the
   * mechanism is fine and the coverage silently is not.
   *
   * Guarded here rather than in practice.test.js so this cannot collide with
   * the session that owns that file.
   */
  const extras = lessons.flatMap((lesson) => directions.flatMap((direction) =>
    (lesson[direction].practiceExtra || [])
      .map((question, index) => ({ id: `${lesson.id}/${direction}/extra${index}`, ...question }))
      .filter((question) => Array.isArray(question.choices) && question.choices.length > 1)));

  assert.ok(extras.length > 0, "no practiceExtra questions found, so this check verifies nothing");

  const towering = [];
  const filler = [];
  const outOfRange = [];
  for (const question of extras) {
    if (!Number.isInteger(question.answer) || !question.choices[question.answer]) {
      outOfRange.push(`${question.id}: answer ${question.answer} is not an index into ${question.choices.length} choices`);
      continue;
    }
    const lengths = question.choices.map((choice) => choice.length);
    const correct = lengths[question.answer];
    const rival = Math.max(...lengths.filter((_, index) => index !== question.answer));
    if (correct > rival * 1.5) {
      towering.push(`${question.id}: correct choice ${correct} chars against a longest distractor of ${rival}`);
    }
    // The ">= 3 words" test for filler only holds when the answer is itself
    // prose. A "which word?" question has a one-word answer, and one-word
    // distractors are then the right shape -- at-the-clinic/es/extra2 offers
    // "parche" and "taximetro" against "incapacidad", which are plausible
    // confusions borrowed from other lessons, not filler.
    if (question.choices[question.answer].trim().split(/\s+/).length < 3) continue;
    question.choices.forEach((choice, index) => {
      if (index === question.answer) return;
      if (choice.trim().split(/\s+/).length < 3) filler.push(`${question.id}: distractor ${index} is ${JSON.stringify(choice)}`);
    });
  }

  assert.deepStrictEqual(outOfRange, [], "choices and answer are a pair; answer indexes into choices");
  assert.deepStrictEqual(towering, [], "lengthen the distractors rather than trimming the answer");
  assert.deepStrictEqual(filler, [], "a distractor nobody could pick is not a distractor");
});
