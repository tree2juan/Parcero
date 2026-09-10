/*
 * CEFR banding, and why almost all of this file is about false positives.
 *
 * A band is a claim about what a learner can do. Overstating it is the harmful
 * direction: a course that reports B1 because a probe mistook the demonstrative
 * "este" for the subjunctive "esté" sends someone into a conversation they
 * cannot hold. Understating it only makes the course look easier than it is.
 * So the probes are deliberately conservative, and the tests here spend most of
 * their effort proving they do not over-fire.
 *
 * The fixtures live in data/cefr.js beside the probe they belong to, and the
 * first test simply runs them. That is not ceremony. Every one of the following
 * shipped in the first draft of this file and was caught by a fixture rather
 * than by review:
 *
 *   - /\bestá\b/ never matched "está", because JavaScript's \b is defined
 *     against [A-Za-z0-9_] and á is not in it. Six probes were silently dead.
 *   - /\b\w{2,}ó\b/ matched the "corazó" inside "corazón" for the same reason,
 *     and reported the preterite in a sentence about a heartbeat.
 *   - "¿A qué hora...?" was not a question, because the probe required the
 *     question word to touch the ¿.
 *   - "I'm embarrassed" was a past simple.
 *   - "He is going to Dallas" was a future.
 *   - "categoría" and "secretaría" were conditionals.
 *   - "Ha sido difícil" was listed as something the present perfect probe must
 *     reject, which was wrong: that is a present perfect. The fixture was the
 *     bug, and the probe was right.
 *
 * The other half of the file guards the aggregation. A band that is computed
 * correctly and then attributed to the wrong lesson, or an attainment rule that
 * hands out C1 for opening a page, would both look fine on screen.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");

const { dataSource } = require("./data-source.js");
const { CEFR_BANDS, CEFR_FEATURES, CEFR_MACROS } = require("../data/cefr.js");
const cefr = require("../cefr.js");

const lessons = vm.runInNewContext(dataSource() + ";lessons;");
const DIRECTIONS = ["es", "en"];

/* --- the probes themselves --- */

test("every probe matches the utterances it claims to, and rejects the near misses", () => {
  for (const direction of DIRECTIONS) {
    for (const feature of CEFR_FEATURES[direction]) {
      const probe = cefr.compileProbe(feature.probe, feature.caseSensitive);
      for (const line of feature.yes) {
        assert.ok(probe.test(line), `${feature.id} should match ${JSON.stringify(line)}`);
      }
      for (const line of feature.no) {
        assert.ok(!probe.test(line), `${feature.id} should reject ${JSON.stringify(line)}`);
      }
    }
  }
});

test("every feature carries evidence on both sides", () => {
  for (const direction of DIRECTIONS) {
    for (const feature of CEFR_FEATURES[direction]) {
      assert.ok(feature.yes.length > 0, `${feature.id} has nothing it must match`);
      /* The rejections are the half that catches over-matching, so a feature
         without any is a probe nobody has argued with. */
      assert.ok(feature.no.length > 0, `${feature.id} has no near miss to reject`);
    }
  }
});

test("feature ids are unique and every band is one of the six", () => {
  for (const direction of DIRECTIONS) {
    const ids = CEFR_FEATURES[direction].map((f) => f.id);
    assert.strictEqual(new Set(ids).size, ids.length, `${direction} has a duplicate feature id`);
    for (const feature of CEFR_FEATURES[direction]) {
      assert.ok(CEFR_BANDS.includes(feature.band), `${feature.id} has band ${feature.band}`);
      assert.ok(feature.name && feature.name.trim(), `${feature.id} has no name`);
    }
  }
});

test("the word boundary survives an accent", () => {
  /* The defect that killed six probes at once, pinned directly. */
  assert.ok(cefr.compileProbe("\\bestá\\b").test("¿Dónde está el baño?"));
  assert.ok(cefr.compileProbe("\\bhabló\\b").test("Ella habló con el jefe."));
  /* ...and the same rule read the other way: an accented letter is part of the
     word, so a probe must not match a fragment of a longer one. */
  assert.ok(!cefr.compileProbe("\\b\\w{2,}ó\\b").test("El corazón me late."));
  assert.ok(!cefr.compileProbe("\\bel\\b").test("elefante"));
});

test("the letter class survives an accent too, and no probe hides a \\w in a class", () => {
  /* \b was repaired first and \w was left behind, which is worse than it
     sounds: a probe using \w still matches something, just the wrong span.
     "\\w{4,}mente" was meant to demand a four-letter stem before an adverb
     ending, and against "rápidamente" the longest run of ASCII word characters
     before "mente" is "pida" — whose left edge butts against the á and so is
     not a boundary. The probe failed on every accented adverb silently. */
  assert.ok(cefr.compileProbe("\\b\\w{4,}mente\\b").test("Habla rápidamente."));
  assert.ok(cefr.compileProbe("\\b\\w{4,}mente\\b").test("Normalmente llego temprano."));
  /* ...without becoming so wide that it swallows the short near misses. */
  assert.ok(!cefr.compileProbe("\\b\\w{4,}mente\\b").test("La mente humana."));
  assert.ok(!cefr.compileProbe("\\b\\w{4,}mente\\b").test("Él miente siempre."));

  /* compileProbe rewrites \w into a character class, so a \w already inside
     one would nest and break. Nothing may contain such a thing. */
  for (const direction of DIRECTIONS) {
    for (const feature of CEFR_FEATURES[direction]) {
      const classes = feature.probe.match(/\[[^\]]*\]/g) || [];
      for (const group of classes) {
        assert.ok(
          !group.includes("\\w"),
          `${feature.id} puts \\w inside the character class ${group}`
        );
      }
    }
  }
});

test("a macro is expanded, and a misspelled one is refused", () => {
  const probe = cefr.compileProbe("\\bha\\s+{ES_PART}\\b");
  assert.ok(probe.test("Ha llegado tarde."), "regular participle");
  /* The reason the macro exists: six probes each spelled out (ado|ido) and all
     six missed the irregulars. */
  assert.ok(probe.test("Ha dicho que sí."), "irregular participle");
  assert.throws(() => cefr.compileProbe("\\bha\\s+{ES_PARTS}\\b"), /unknown probe macro/);
});

test("the participle macros are used rather than respelled", () => {
  /* If a probe writes (ado|ido) by hand again, it is re-opening the hole the
     macro closed, and it will be the one probe nobody updates. */
  for (const feature of CEFR_FEATURES.es) {
    assert.ok(
      !/\(ado\|ido\)/.test(feature.probe),
      `${feature.id} spells out the participle list instead of using {ES_PART}`
    );
  }
  assert.ok(CEFR_MACROS.ES_PART.includes("dicho"), "ES_PART must carry the irregulars");
  assert.ok(CEFR_MACROS.EN_PART.includes("gone"), "EN_PART must carry the irregulars");
});

/* --- reading a lesson --- */

test("only the language being taught is measured", () => {
  /* Running the Spanish probes over a Spanish lesson's English translations
     would measure the learner's own language and report it as progress. */
  const lesson = {
    id: "probe",
    es: {
      dialogue: [{ target: "Hola.", translation: "I went downtown yesterday." }],
      vocabulary: [{ term: "el pan", explanation: "She worked there for years." }],
      variations: [{ form: "Buenas.", whenToUse: "We didn't know." }]
    }
  };
  const lines = cefr.taughtLines(lesson, "es");
  assert.deepStrictEqual(Array.from(lines), ["Hola.", "el pan", "Buenas."]);
});

test("every field that holds target-language text is read", () => {
  /* variations hold `form`, not `target`, and an example is sometimes an
     object. Both were returning nothing at all, silently, which is the same
     shape as the vocabulary count that summed to zero. */
  const lesson = {
    id: "probe",
    es: {
      dialogue: [{ target: "uno" }],
      vocabulary: [{ term: "dos", example: "tres" }, { term: "cuatro", example: { target: "cinco" } }],
      variations: [{ form: "seis" }]
    }
  };
  assert.deepStrictEqual(
    Array.from(cefr.taughtLines(lesson, "es")),
    ["uno", "dos", "tres", "cuatro", "cinco", "seis"]
  );
});

test("a field that stops being text stops the run", () => {
  /* The alternative is a schema change quietly lowering everyone's band. */
  const lesson = { id: "probe", es: { dialogue: [{ target: { form: "moved" } }] } };
  assert.throws(() => cefr.taughtLines(lesson, "es"), /not target-language text/);
});

test("a lesson is banded by the highest thing it demonstrates, with the line to prove it", () => {
  const lesson = {
    id: "probe",
    es: {
      dialogue: [
        { target: "¿Dónde está el baño?" },
        { target: "Si hubiera sabido, habría llamado." }
      ],
      vocabulary: [],
      variations: []
    }
  };
  const result = cefr.lessonBand(lesson, "es");
  /* "si hubiera sabido, habría llamado" is a past si-clause, which this course
     places at C1 — the highest band any lesson reaches. */
  assert.strictEqual(result.band, "C1");
  const ids = result.features.map((f) => f.id);
  assert.ok(ids.includes("es-ser-estar"), "the A1 feature is still reported");
  for (const feature of result.features) {
    assert.ok(feature.evidence && feature.evidence.trim(), `${feature.id} has no evidence line`);
    assert.ok(
      cefr.compileProbe(
        CEFR_FEATURES.es.find((f) => f.id === feature.id).probe
      ).test(feature.evidence),
      `${feature.id} cites a line its own probe does not match`
    );
  }
});

test("a lesson that demonstrates nothing detectable is A1, not unrated", () => {
  /* Interjections only. This used to be "El bus sale a las cinco.", which was
     undetectable when the Spanish side had four A1 probes and is now caught
     three times over by the present tense, the article and the clock. With 52
     features no real lesson lands on the floor any more, so the case has to be
     built rather than borrowed — but the floor still has to behave, because a
     band the learner was given is different from a band we measured. */
  const lesson = { id: "probe", es: { dialogue: [{ target: "¡Ay, hombre! Bueno, listo." }] } };
  const result = cefr.lessonBand(lesson, "es");
  assert.strictEqual(result.band, "A1");
  assert.strictEqual(result.detected, null, "the floor must stay distinguishable from a detection");
  assert.deepStrictEqual(Array.from(result.features), [], "an A1 floor names no structure");
});

/* --- the real corpus --- */

test("every lesson in the course gets a band in both directions", () => {
  for (const direction of DIRECTIONS) {
    const profile = cefr.corpusProfile(lessons, direction);
    const total = CEFR_BANDS.reduce((sum, band) => sum + profile.counts[band], 0);
    assert.strictEqual(total, lessons.length, `${direction} lost a lesson`);
  }
});

test("the course is a beginner course, and the numbers say so", () => {
  /* This is the honest answer to "what level does Parcero teach?". If content
     is added that genuinely reaches B2 in bulk, this test should be updated
     deliberately — not deleted because it went red. */
  for (const direction of DIRECTIONS) {
    const profile = cefr.corpusProfile(lessons, direction);
    const beginner = profile.counts.A1 + profile.counts.A2 + profile.counts.B1;
    assert.ok(
      beginner / profile.total > 0.85,
      `${direction}: expected a mostly A1-B1 course, got ${beginner}/${profile.total}`
    );
    assert.strictEqual(profile.counts.C2, 0, `${direction} claims to teach C2`);
  }
});

test("no band swallows the whole course", () => {
  /* A probe that matches almost anything would pile every lesson into one
     band and still look like a working feature. */
  for (const direction of DIRECTIONS) {
    const profile = cefr.corpusProfile(lessons, direction);
    for (const band of CEFR_BANDS) {
      assert.ok(
        profile.counts[band] / profile.total < 0.8,
        `${direction}: ${band} holds ${profile.counts[band]} of ${profile.total} lessons`
      );
    }
  }
});

test("the demonstrative este is not the subjunctive esté", () => {
  /* 19 Spanish lessons were reported a full band too high by this one letter,
     and the shopping module was the worst of it. */
  const probe = CEFR_FEATURES.es.find((f) => f.id === "es-present-subjunctive");
  const regex = cefr.compileProbe(probe.probe, probe.caseSensitive);
  for (const line of ["Este ventilador es más barato.", "Con este calor uno se apaga.", "¿Me cambiás este billete?"]) {
    assert.ok(!regex.test(line), `matched ${JSON.stringify(line)}`);
  }
  assert.ok(regex.test("Espero que esté listo."), "the real subjunctive still matches");
});

/* --- attainment --- */

const bandOfLesson = (lesson, direction) => cefr.lessonBand(lesson, direction).band;

test("opening every lesson proves nothing", () => {
  /* Coverage is not attainment. A learner who has seen all 226 lessons and
     answered nothing correctly has reached no band at all. */
  const result = cefr.attainment(lessons, "es", () => 0);
  assert.strictEqual(result.reached, null);
});

test("answering the whole course well reaches the top band the course teaches", () => {
  const result = cefr.attainment(lessons, "es", () => 1);
  assert.strictEqual(result.reached, "C1", "C2 is not taught, so it cannot be reached");
  const c2 = result.bands.find((b) => b.band === "C2");
  assert.strictEqual(c2.taught, false, "a band the course does not teach must say so");
  assert.strictEqual(c2.met, false);
});

test("a band is not reached by skipping the one below it", () => {
  /* B1 with A2 unproven is not B1. */
  const scoreOf = (lesson) => (bandOfLesson(lesson, "es") === "A2" ? 0 : 1);
  const result = cefr.attainment(lessons, "es", scoreOf);
  assert.strictEqual(result.reached, "A1");
});

test("a band needs most of its lessons, not one", () => {
  /* Ten lessons that all sit in the same band, three of them answered well.
     Built rather than taken from the corpus: the original version scored the
     real lessons and passed only because A1 happened to be large that week.
     Expanding the probes moved lessons out of A1, the group shrank to the size
     of the minimum, and three right answers silently became a whole band. The
     rule under test is the threshold, so the population is fixed here. */
  const made = [];
  for (let i = 0; i < 10; i += 1) {
    made.push({ id: `synthetic-${i}`, es: { dialogue: [{ target: "Hay un café en la esquina." }] } });
  }
  assert.strictEqual(cefr.lessonBand(made[0], "es").band, "A1", "the fixture must sit in one band");

  let given = 0;
  const scoreOf = () => (given++ < 3 ? 1 : 0);
  const result = cefr.attainment(made, "es", scoreOf, { minimum: 3 });
  assert.strictEqual(result.reached, null, "three right answers is not a band");
});

test("the report explains itself for every band", () => {
  const result = cefr.attainment(lessons, "es", () => 1);
  assert.deepStrictEqual(Array.from(result.bands.map((b) => b.band)), Array.from(CEFR_BANDS));
  for (const entry of result.bands) {
    assert.ok(Number.isInteger(entry.lessons), `${entry.band} has no lesson count`);
    assert.ok(Number.isInteger(entry.needed), `${entry.band} does not say what it needs`);
    if (entry.taught) assert.ok(entry.needed > 0, `${entry.band} is taught but needs nothing`);
  }
});

test("the band cache keeps the two directions apart", () => {
  /* One lesson teaches different grammar on each side, so a cache keyed on the
     lesson alone would report the Spanish band to an English learner. */
  const lesson = {
    id: "probe",
    es: { dialogue: [{ target: "¿Dónde está el baño?" }] },
    en: { dialogue: [{ target: "I had already left when you called." }] }
  };
  assert.strictEqual(cefr.lessonBand(lesson, "es").band, "A1");
  assert.strictEqual(cefr.lessonBand(lesson, "en").band, "B2");
  /* ...and again, now that both are cached, in the other order. */
  assert.strictEqual(cefr.lessonBand(lesson, "en").band, "B2");
  assert.strictEqual(cefr.lessonBand(lesson, "es").band, "A1");
});

test("a cached band carries the same evidence as a fresh one", () => {
  const lesson = { id: "probe", es: { dialogue: [{ target: "Ayer fui al centro." }] } };
  const first = cefr.lessonBand(lesson, "es");
  const second = cefr.lessonBand(lesson, "es");
  assert.strictEqual(first.band, second.band);
  assert.deepStrictEqual(
    Array.from(first.features.map((f) => f.id)),
    Array.from(second.features.map((f) => f.id))
  );
});

test("the bands are ordered, and that order is the only thing ranking them", () => {
  assert.strictEqual(cefr.higher("A2", "B1"), "B1");
  assert.strictEqual(cefr.higher("B1", "A2"), "B1");
  assert.strictEqual(cefr.higher(null, "A1"), "A1");
  assert.strictEqual(cefr.higher("C1", "C1"), "C1");
  for (let i = 1; i < CEFR_BANDS.length; i += 1) {
    assert.ok(cefr.rankOf(CEFR_BANDS[i]) > cefr.rankOf(CEFR_BANDS[i - 1]));
  }
});

/* --- wiring ---
 *
 * The level panel is built from strings, so every one of its failures is
 * silent: a mistyped id makes $() return null and the panel simply never
 * appears, and an unstyled class renders as unaligned text nobody notices in a
 * diff. Both are read out of the source here rather than listed, so the checks
 * cannot fall behind the code they describe.
 */

const fs = require("node:fs");
const path = require("node:path");
const root = path.join(__dirname, "..");
const readRoot = (file) => fs.readFileSync(path.join(root, file), "utf8");

/* The part of app.js that paints the level feature. */
function levelSource() {
  const app = readRoot("app.js");
  const start = app.indexOf("const cefrApi =");
  const end = app.indexOf("function updateProgress()");
  assert.ok(start > -1 && end > start, "the level renderers moved; this test must follow them");
  return app.slice(start, end);
}

test("every element the level panel looks up exists in index.html", () => {
  const markup = readRoot("index.html");
  const ids = Array.from(levelSource().matchAll(/\$\("#([\w-]+)"\)/g), (m) => m[1]);
  assert.ok(ids.length >= 5, "expected the level renderers to look elements up");
  for (const id of new Set(ids)) {
    assert.ok(markup.includes(`id="${id}"`), `index.html has no #${id}`);
  }
});

test("every class the level panel paints is styled", () => {
  const css = readRoot("styles.css");
  /* A plain substring search would accept .level-step-fillX as proof that
     .level-step-fill is styled, which made this check pass a mutation that
     removed the rule. The lookahead requires the selector to actually end. */
  const styled = (name) => new RegExp(`\\.${name}(?![-\\w])`).test(css);
  const classes = Array.from(levelSource().matchAll(/class="([^"$]+)"/g))
    .flatMap((m) => m[1].split(/\s+/))
    .filter(Boolean);
  assert.ok(classes.length > 0, "expected the level renderers to paint classes");
  for (const name of new Set(classes)) {
    assert.ok(styled(name), `styles.css never styles .${name}`);
  }
  /* The two states the renderer adds conditionally, which no class="" literal
     would reveal. */
  for (const name of ["is-met", "is-untaught"]) {
    assert.ok(styled(name), `styles.css never styles .${name}`);
  }
});

test("index.html loads the level scripts after what they read", () => {
  const markup = readRoot("index.html");
  const at = (file) => markup.indexOf(`src="${file}"`);
  for (const file of ["data/cefr.js", "cefr.js", "progress.js", "app.js"]) {
    assert.ok(at(file) > -1, `index.html does not load ${file}`);
  }
  assert.ok(at("data/cefr.js") < at("cefr.js"), "cefr.js loads before its data");
  /* app.js renders the first lesson while the page is still parsing, so a
     ParceroCEFR that arrives later arrives too late: the badge stays hidden
     and the ladder stays empty until something else forces a redraw. This
     ordering is the fix, and it is invisible on any screen that redraws. */
  assert.ok(at("cefr.js") < at("app.js"), "app.js runs before ParceroCEFR exists");
});

test("the level panel is marked up for translation", () => {
  const markup = readRoot("index.html");
  const panel = markup.slice(markup.indexOf('id="level-panel"'), markup.indexOf('id="level-ladder"'));
  assert.ok(panel.includes('data-i18n="level.eyebrow"'), "the panel heading is not translated");
});
