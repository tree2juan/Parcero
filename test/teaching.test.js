/*
 * Teaching-layer tests.
 *
 * The coverage test at the top is the important one and it is meant to be red
 * for a while. data/teaching.js is generated from four band drafts, and the
 * failure mode this guards against is shipping the generated file half-full:
 * the app degrades gracefully when a module has no plan — by design, because
 * new modules always arrive before their plans — which means an empty
 * teaching layer looks exactly like a working one from the outside. Every
 * heading simply renders nothing. Nobody notices until a teacher does.
 *
 * So the suite refuses to go green until every module in the course has a
 * plan. If a module is deliberately dropped from the course, it leaves
 * COURSE_MODULES and this test stops asking about it.
 *
 * The direction tests below it check the rule that no other test in this repo
 * checks: not which language a note is written in, but which language it is
 * about. A plan for the English class that puts Spanish conjugations on the
 * board is fluent, correctly-spelled Spanish and completely wrong.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const { MODULE_TEACHING } = require("../data/teaching.js");
const COURSE_MODULES = require("../data/modules.js").COURSE_MODULES
  || vm.runInNewContext(`${fs.readFileSync(path.join(root, "data", "modules.js"), "utf8")}\nCOURSE_MODULES;`, {});
const { classify } = require("../scripts/prose-language.js");

const sandbox = {};
vm.runInNewContext(fs.readFileSync(path.join(root, "teaching.js"), "utf8"), sandbox, { filename: "teaching.js" });
const T = sandbox.ParceroTeaching;
sandbox.MODULE_TEACHING = MODULE_TEACHING;

const STEPS = ["warmUp", "presentation", "practice", "production", "exitTicket"];
const PROSE = [...STEPS, "homework", "support", "stretch"];
const entries = () => Object.keys(MODULE_TEACHING).map((id) => [id, MODULE_TEACHING[id]]);

/* The corpus, tagged with the block each lesson came from. Membership in a
   module is by source file, so the block is the only link back. */
function loadLessons() {
  const dir = path.join(root, "data", "lessons");
  const blocks = fs.readdirSync(dir).filter((name) => name.endsWith(".js")).sort();
  const context = { console };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, "data", "lesson-schema.js"), "utf8"), context, { filename: "lesson-schema.js" });
  vm.runInContext(fs.readFileSync(path.join(root, "data", "lessons.js"), "utf8"), context, { filename: "lessons.js" });
  const out = [];
  for (const name of blocks) {
    const before = vm.runInContext("lessons.length", context);
    vm.runInContext(fs.readFileSync(path.join(dir, name), "utf8"), context, { filename: name });
    const after = vm.runInContext("lessons.length", context);
    for (let i = before; i < after; i += 1) {
      const lesson = vm.runInContext(`lessons[${i}]`, context);
      out.push(Object.assign({}, lesson, { sourceFile: `data/lessons/${name}` }));
    }
  }
  return out;
}

test("every module in the course has a teaching entry", () => {
  const missing = COURSE_MODULES.filter((m) => !MODULE_TEACHING[m.id]);
  assert.strictEqual(missing.length, 0,
    `${missing.length} of ${COURSE_MODULES.length} modules have no plan:\n` +
    missing.slice(0, 12).map((m) => `  ${m.band} ${m.id}`).join("\n"));
});

test("no teaching entry describes a module that does not exist", () => {
  const known = new Set(COURSE_MODULES.map((m) => m.id));
  for (const [id] of entries()) {
    assert.ok(known.has(id), `${id} has a plan but is not in the course`);
  }
});

test("each entry is complete", () => {
  for (const [id, entry] of entries()) {
    assert.ok(entry.mission && entry.mission.en && entry.mission.es, `${id} has no mission`);
    assert.ok(Array.isArray(entry.canDo) && entry.canDo.length === 3,
      `${id} should carry exactly three can-do statements`);
    for (const can of entry.canDo) {
      assert.ok(can.en && can.es, `${id} has a half-translated can-do statement`);
    }
    const teach = entry.teaching;
    assert.ok(teach, `${id} has no lesson plan`);
    assert.ok(typeof teach.minutes === "number" && teach.minutes >= 35 && teach.minutes <= 90,
      `${id} claims a ${teach && teach.minutes} minute session`);
    for (const key of PROSE) {
      assert.ok(teach[key] && teach[key].en && teach[key].es, `${id}.${key} is missing a side`);
    }
    assert.ok(Array.isArray(teach.errors) && teach.errors.length === 2,
      `${id} should predict exactly two errors`);
  }
});

test("a can-do statement is a capability, not a scene", () => {
  for (const [id, entry] of entries()) {
    for (const can of entry.canDo) {
      for (const lang of ["en", "es"]) {
        const text = can[lang];
        assert.ok(!/^I can\b/i.test(text) && !/^Puedo\b/i.test(text),
          `${id}: "${text}" repeats the heading it sits under`);
        assert.ok(text.length >= 25, `${id}: "${text}" is too thin to assess`);
        assert.ok(!/\.$/.test(text.trim()), `${id}: can-do statements are list items, not sentences: "${text}"`);
      }
    }
  }
});

test("each side of a teaching note is written in the language it claims", () => {
  for (const [id, entry] of entries()) {
    for (const key of PROSE) {
      const note = entry.teaching[key];
      assert.notStrictEqual(classify(note.en), "spanish", `${id}.${key}.en reads as Spanish`);
      assert.notStrictEqual(classify(note.es), "english", `${id}.${key}.es reads as English`);
    }
  }
});

/*
 * The inversion rule, which is the whole reason this file needed authoring by
 * hand rather than translating.
 *
 * `.en` plans the teaching of Spanish to English speakers, so it must be
 * English prose that names Spanish forms. `.es` plans the teaching of English
 * to Spanish speakers, so it must be Spanish prose that names English forms.
 * A `.es` note that is a translation of its `.en` twin puts Spanish
 * conjugations in front of the class learning English, and it passes every
 * other test here.
 *
 * Presentation is the step that has to name forms — it is the step where
 * something goes on the board — so it is the one checked. Testing all of them
 * would fail honestly on a warm-up that names no forms at all.
 */
test("the two sides plan two different classes", () => {
  for (const [id, entry] of entries()) {
    const en = entry.teaching.presentation.en;
    const es = entry.teaching.presentation.es;
    assert.notStrictEqual(en, es, `${id}: the presentation is the same string twice`);
    /* A translation pair shares proper nouns and numbers but should not share
       its whole shape; the cheap detector is length, which a translation
       tracks closely and an independently-authored note does not need to. */
    assert.ok(en.length > 60 && es.length > 60, `${id}: a presentation step this short cannot set up a class`);
  }
});

test("no field plans a lesson in the language it is supposed to be teaching", () => {
  /*
   * This is the test the file exists for, and the one no cheap check covers.
   *
   * A .es note is Spanish prose planning an English class. A .es note that is
   * a translation of the .en note is Spanish prose planning a Spanish class:
   * fluent, correctly spelled, perfectly shaped, and useless to the teacher
   * standing in front of it. Length comparisons cannot see it, and a language
   * classifier says "spanish" for both, correctly, which is exactly why this
   * kept getting through.
   *
   * The signal is the ECHO. Every module's lessons supply the forms being
   * taught on each side. If a Spanish field picks up a form that the English
   * plan is also discussing, and names no English form of its own, it is
   * describing the English plan's lesson. Asking instead "does the Spanish
   * note contain Spanish words" is useless — it always does.
   *
   * Checked per field rather than per module on purpose. Across a whole
   * module, two correct fields will cover for five inverted ones.
   */
  const lessons = loadLessons();
  const byBlock = new Map();
  for (const lesson of lessons) {
    const block = lesson.sourceFile;
    if (!byBlock.has(block)) byBlock.set(block, []);
    byBlock.get(block).push(lesson);
  }
  const blockOf = new Map(COURSE_MODULES.map((m) => [m.id, m.block]));

  const strip = (term) => String(term || "").toLowerCase()
    .replace(/^(el|la|los|las|un|una|to|the|a|an)\s+/, "");

  const targetTokens = (group, side) => {
    const out = new Set();
    for (const lesson of group) {
      if (side === "es" && lesson.verb) out.add(String(lesson.verb).toLowerCase());
      const content = lesson[side] || {};
      for (const item of content.vocabulary || []) {
        const term = strip((item && (item.term || item[0])) || "");
        for (const word of term.match(/[a-záéíóúñü]{4,}/g) || []) out.add(word);
      }
      for (const line of content.dialogue || []) {
        const said = String((line && (line.target || line[1])) || "").toLowerCase();
        for (const word of said.match(/[a-záéíóúñü]{5,}/g) || []) out.add(word);
      }
    }
    return out;
  };

  const names = (text, tokens) => {
    const blob = String(text || "").toLowerCase();
    return [...tokens].filter((token) =>
      token && new RegExp(`(?:^|[^a-záéíóúñü])${token}(?:[^a-záéíóúñü]|$)`).test(blob));
  };

  const failures = [];
  for (const [id, entry] of entries()) {
    const group = byBlock.get(blockOf.get(id)) || [];
    if (!group.length) continue;

    const esTok = targetTokens(group, "es");
    const enTok = targetTokens(group, "en");
    /* A word spelled the same in both languages proves nothing about which
       class is being planned, so it is evidence for neither side. */
    for (const word of [...esTok]) if (enTok.has(word)) { esTok.delete(word); enTok.delete(word); }

    const fields = [
      ...PROSE.map((key) => [key, entry.teaching[key]]),
      ...entry.teaching.errors.map((pair, i) => [`errors[${i}]`, pair])
    ];

    const enBlob = PROSE.map((k) => entry.teaching[k].en).join(" ");
    const esBlob = PROSE.map((k) => entry.teaching[k].es).join(" ");

    for (const [name, pair] of fields) {
      const echoedEs = names(pair.es, esTok).filter((tok) => names(enBlob, [tok]).length);
      if (echoedEs.length && !names(pair.es, enTok).length) {
        failures.push(`${id}.${name}.es picks up ${echoedEs.slice(0, 4).join(", ")} from the English plan and names no English form — it is planning the Spanish class`);
      }
      const echoedEn = names(pair.en, enTok).filter((tok) => names(esBlob, [tok]).length);
      if (echoedEn.length && !names(pair.en, esTok).length) {
        failures.push(`${id}.${name}.en picks up ${echoedEn.slice(0, 4).join(", ")} from the Spanish plan and names no Spanish form — it is planning the English class`);
      }
    }
  }

  assert.deepStrictEqual(failures, [],
    `${failures.length} field(s) plan the wrong class:\n  ` + failures.slice(0, 25).join("\n  "));
});

test("mission and can-do ARE translation pairs", () => {
  /* The deliberate exception. The task is the same in both classrooms, so
     these two must track each other; if they have drifted apart, one
     classroom is being sold a different course. */
  for (const [id, entry] of entries()) {
    const en = entry.mission.en.length;
    const es = entry.mission.es.length;
    const ratio = es / en;
    assert.ok(ratio > 0.6 && ratio < 1.8,
      `${id}: the mission differs by too much between languages (${en} vs ${es} chars) to be the same claim`);
  }
});

test("nothing references C1, C2 or audio", () => {
  for (const [id, entry] of entries()) {
    const all = [entry.mission.en, entry.mission.es]
      .concat(entry.canDo.flatMap((c) => [c.en, c.es]))
      .concat(PROSE.flatMap((k) => [entry.teaching[k].en, entry.teaching[k].es]))
      .concat(entry.teaching.errors.flatMap((e) => [e.en, e.es]));
    for (const text of all) {
      assert.ok(!/\bC[12]\b/.test(text), `${id} mentions a level this course does not teach: ${text}`);
      assert.ok(!/\b(audio|recording|grabaci[oó]n|listen to the recording)\b/i.test(text),
        `${id} asks for audio, which this course does not have: ${text}`);
    }
  }
});

test("the accessor hands each classroom its own side", () => {
  const [id, entry] = entries()[0] || [];
  if (!id) return;
  /* direction "es" means studying Spanish, so the reader is an English
     speaker and gets the .en note. Getting this backwards would hand every
     plan to the wrong teacher. */
  assert.strictEqual(T.side(entry.mission, "es"), entry.mission.en);
  assert.strictEqual(T.side(entry.mission, "en"), entry.mission.es);
});

test("a module with no entry returns empty rather than throwing", () => {
  assert.strictEqual(T.forModule("no-such-module"), null);
  /* Length rather than deepStrictEqual: the array is built inside the vm
     realm, so its prototype is not this realm's Array and a deep-equal
     against a literal [] fails on identity while the value is correct. */
  assert.strictEqual(T.canDo("no-such-module", "es").length, 0);
  assert.strictEqual(T.plan("no-such-module", "es"), null);
  assert.strictEqual(T.mission("no-such-module", "es"), "");
});

test("the plan comes back in teaching order", () => {
  const [id] = entries()[0] || [];
  if (!id) return;
  const detail = T.plan(id, "es");
  assert.deepStrictEqual(detail.steps.map((s) => s.id), STEPS,
    "the five steps must arrive in the order they are run, not in object-key order");
});
