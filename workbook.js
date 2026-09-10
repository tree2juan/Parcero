/*
 * Printable student workbook, derived from the lessons a module already holds.
 *
 * The course could already be read on screen. What it could not do was give a
 * student something to work through away from it: no exercises with answers,
 * nothing to hand out in a classroom, nothing to write on. That gap is why a
 * learner can finish a browsing session having recognized everything and
 * retrieved none of it.
 *
 * Everything here is derived rather than authored, and that is a deliberate
 * constraint, not a shortcut. 75 modules times two directions is 150
 * workbooks; hand-writing them would guarantee they drift out of step with the
 * lessons the moment a lesson changes. Deriving them means an edit to a lesson
 * is an edit to its workbook, and the exercises can never quote a line the
 * course no longer teaches.
 *
 * The hard constraint on a derived exercise is that its answer has to be real.
 * A gap-fill whose answer does not literally appear in the text it was cut
 * from is not a hard question, it is a broken one, so `gapFill` only ever
 * blanks a term that occurs verbatim in the line -- vocabulary is listed as
 * infinitives ("poder") while dialogue carries conjugations ("puede"), and
 * 719 of 1,584 vocabulary entries survive that test. The rest are simply not
 * used. Every activity below either produces a checkable answer or is marked
 * open, and `answerKey` is assembled from the activities themselves so the key
 * cannot disagree with the questions.
 *
 * Shuffling is seeded from the lesson id, never Math.random. A workbook has to
 * render identically every time it is opened or the printed copy in a
 * student's hand stops matching the one on screen, and the answer key stops
 * matching both.
 *
 * Direction and interface language are opposites, as everywhere else in this
 * app: a student on direction "es" is studying Spanish, so the exercises are
 * built from `lesson.es` and the surrounding labels are English.
 */
(function (global) {
  "use strict";

  /*
   * A string hash and a small PRNG, so ordering is a pure function of the
   * lesson id. Deterministic output is what lets the answer key be trusted.
   */
  function seedFrom(text) {
    let h = 2166136261;
    for (let i = 0; i < text.length; i += 1) {
      h ^= text.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function rngFrom(seed) {
    let a = seed || 1;
    return function next() {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffled(items, rng) {
    const out = items.slice();
    for (let i = out.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rng() * (i + 1));
      const tmp = out[i];
      out[i] = out[j];
      out[j] = tmp;
    }
    return out;
  }

  const LETTERS = "abcdefghijklmnopqrstuvwxyz";

  /* First sentence of a longer authored field, for places that need a label
     rather than a paragraph. Falls back to the whole string when there is no
     sentence break, and never cuts mid-word. */
  function firstSentence(text, cap) {
    if (!text) return "";
    const limit = cap || 160;
    const stop = text.search(/[.!?](\s|$)/);
    let out = stop > 0 ? text.slice(0, stop + 1) : text;
    if (out.length > limit) {
      const cut = out.lastIndexOf(" ", limit);
      out = `${out.slice(0, cut > 40 ? cut : limit)}…`;
    }
    return out.trim();
  }

  function tierOf(lesson) {
    return String(lesson.level || "").split("·")[0].trim();
  }

  function themeOf(lesson) {
    const parts = String(lesson.level || "").split("·");
    return parts.length > 1 ? parts[1].trim() : "";
  }

  function unique(list) {
    const seen = new Set();
    const out = [];
    for (const item of list) {
      if (item && !seen.has(item)) {
        seen.add(item);
        out.push(item);
      }
    }
    return out;
  }

  /*
   * Activity builders. Each returns null when the lesson does not carry the
   * material it needs, rather than emitting a question with no answer.
   */

  /* Match a term to its meaning. The right column is shuffled; the answer
     records which shuffled letter each numbered term maps to. */
  function matchActivity(side, rng, max) {
    const pool = (side.vocabulary || []).filter((v) => v.term && v.literal).slice(0, max || 6);
    if (pool.length < 3) return null;
    const right = shuffled(pool.map((v, i) => ({ literal: v.literal, from: i })), rng);
    return {
      kind: "match",
      labelKey: "workbook.activity.match",
      left: pool.map((v, i) => ({ n: i + 1, term: v.term })),
      right: right.map((r, i) => ({ letter: LETTERS[i], literal: r.literal })),
      answer: pool
        .map((v, i) => `${i + 1}-${LETTERS[right.findIndex((r) => r.from === i)]}`)
        .join(", ")
    };
  }

  /*
   * Blank a vocabulary term inside a line that actually contains it.
   *
   * The verbatim requirement is the whole point. Vocabulary is stored as
   * dictionary forms while dialogue is conjugated and inflected, so a naive
   * builder would confidently blank a word that is not there and print an
   * answer the student cannot find. Matching is case-insensitive and the
   * original casing of the removed span is preserved in the answer.
   */
  function gapFillActivity(side, max) {
    const items = [];
    const used = new Set();
    for (const entry of side.vocabulary || []) {
      if (items.length >= (max || 4)) break;
      const term = String(entry.term || "").trim();
      if (!term) continue;
      const needle = term.toLowerCase();
      for (const line of side.dialogue || []) {
        if (used.has(line.target)) continue;
        const at = String(line.target).toLowerCase().indexOf(needle);
        if (at < 0) continue;
        const actual = line.target.slice(at, at + term.length);
        items.push({
          speaker: line.speaker,
          text: `${line.target.slice(0, at)}__________${line.target.slice(at + term.length)}`,
          translation: line.translation,
          answer: actual
        });
        used.add(line.target);
        break;
      }
    }
    if (!items.length) return null;
    return {
      kind: "gap-fill",
      labelKey: "workbook.activity.gapFill",
      items,
      answer: items.map((it, i) => `${i + 1}. ${it.answer}`).join("; ")
    };
  }

  /* Correct the mistake. `pitfalls` already pairs a wrong utterance with the
     right one, which is an error-correction exercise with a checkable key
     sitting in the data unused. */
  function correctionActivity(side, max) {
    const pool = (side.pitfalls || []).filter((p) => p.mistake && p.sayInstead).slice(0, max || 3);
    if (!pool.length) return null;
    return {
      kind: "correction",
      labelKey: "workbook.activity.correction",
      items: pool.map((p, i) => ({ n: i + 1, mistake: p.mistake, answer: p.sayInstead })),
      answer: pool.map((p, i) => `${i + 1}. ${p.sayInstead}`).join(" ")
    };
  }

  /* The lesson's own comprehension question, plus its extra practice bank.
     These already carry an `answer` index, so the key is exact. */
  function choiceActivity(side, max) {
    const pool = [];
    if (side.prompt && Array.isArray(side.choices) && typeof side.answer === "number") {
      pool.push({ prompt: side.prompt, choices: side.choices, answer: side.answer });
    }
    for (const extra of side.practiceExtra || []) {
      if (pool.length >= (max || 3)) break;
      if (extra.prompt && Array.isArray(extra.choices) && typeof extra.answer === "number") {
        pool.push({ prompt: extra.prompt, choices: extra.choices, answer: extra.answer });
      }
    }
    if (!pool.length) return null;
    return {
      kind: "choice",
      labelKey: "workbook.activity.choice",
      items: pool.map((q, i) => ({
        n: i + 1,
        prompt: q.prompt,
        choices: q.choices.map((c, j) => ({ letter: LETTERS[j], text: c })),
        answer: LETTERS[q.answer]
      })),
      answer: pool.map((q, i) => `${i + 1}-${LETTERS[q.answer]}`).join(", ")
    };
  }

  /* Put a scrambled exchange back in order. Only worth setting when the
     shuffle actually moved something. */
  function orderActivity(side, rng) {
    const lines = (side.dialogue || []).slice(0, 6);
    if (lines.length < 3) return null;
    const tagged = lines.map((line, i) => ({ line, from: i }));
    const mixed = shuffled(tagged, rng);
    if (mixed.every((item, i) => item.from === i)) return null;
    return {
      kind: "order",
      labelKey: "workbook.activity.order",
      items: mixed.map((item, i) => ({
        letter: LETTERS[i],
        speaker: item.line.speaker,
        text: item.line.target
      })),
      answer: tagged
        .map((item) => LETTERS[mixed.findIndex((m) => m.from === item.from)])
        .join(" → ")
    };
  }

  /* Which form of address, and why. `address` is authored per lesson and is
     the single most transferable thing in it. */
  function registerActivity(side) {
    const address = side.address;
    if (!address || !address.form) return null;
    return {
      kind: "register",
      labelKey: "workbook.activity.register",
      who: firstSentence(address.who, 200),
      answer: address.form,
      why: firstSentence(address.why, 220),
      ifYouSwitch: firstSentence(address.ifYouSwitch, 220)
    };
  }

  /* Comprehension drawn from the authored setting. Each question has a real
     answer because each is a field somebody wrote. */
  function comprehension(side) {
    const setting = side.setting || {};
    const rows = [
      ["workbook.read.who", setting.who],
      ["workbook.read.what", setting.what],
      ["workbook.read.when", setting.when],
      ["workbook.read.where", setting.where],
      ["workbook.read.why", setting.why]
    ];
    return rows
      .filter((row) => row[1])
      .map((row, i) => ({ n: i + 1, questionKey: row[0], answer: firstSentence(row[1], 200) }));
  }

  /*
   * Build one lesson's worth of workbook material.
   */
  function lessonUnit(lesson, direction) {
    const side = lesson[direction];
    const rng = rngFrom(seedFrom(lesson.id));
    const activities = [
      matchActivity(side, rng),
      gapFillActivity(side),
      correctionActivity(side),
      choiceActivity(side),
      orderActivity(side, rng),
      registerActivity(side)
    ].filter(Boolean);

    return {
      lessonId: lesson.id,
      title: side.title,
      theme: themeOf(lesson),
      verb: lesson.verb || null,
      situation: side.situation,
      setting: side.setting,
      note: side.note,
      dialogue: side.dialogue || [],
      vocabulary: (side.vocabulary || []).map((v) => ({
        term: v.term,
        literal: v.literal,
        useWhen: v.useWhen,
        register: v.register,
        region: v.region
      })),
      culture: side.culture || [],
      pitfalls: side.pitfalls || [],
      variations: side.variations || [],
      pronunciation: (side.dialogue || [])
        .filter((d) => d.pronunciation)
        .slice(0, 4)
        .map((d) => ({ target: d.target, pronunciation: d.pronunciation })),
      comprehension: comprehension(side),
      activities
    };
  }

  /*
   * Build the whole workbook for one module in one direction.
   *
   * `module` is an entry from COURSE_MODULES, `lessons` are the lessons whose
   * sourceFile matches it, already in teaching order.
   */
  function build(options) {
    const opts = options || {};
    const module = opts.module;
    const lessons = opts.lessons || [];
    const direction = opts.direction === "en" ? "en" : "es";
    const uiLang = direction === "es" ? "en" : "es";
    if (!module || !lessons.length) return null;

    const units = lessons.map((lesson) => lessonUnit(lesson, direction));
    const tiers = unique(lessons.map(tierOf));

    /* Vocabulary is pooled across the module and de-duplicated, because a
       module's three lessons frequently teach the same verb from different
       angles and a glossary that lists it three times looks careless. */
    const glossary = [];
    const seenTerm = new Set();
    for (const unit of units) {
      for (const entry of unit.vocabulary) {
        const key = String(entry.term).toLowerCase();
        if (seenTerm.has(key)) continue;
        seenTerm.add(key);
        glossary.push(entry);
      }
    }

    const answerKey = [];
    for (const unit of units) {
      for (const activity of unit.activities) {
        if (activity.answer) {
          answerKey.push({
            lessonId: unit.lessonId,
            labelKey: activity.labelKey,
            kind: activity.kind,
            answer: activity.answer
          });
        }
      }
      for (const row of unit.comprehension) {
        answerKey.push({
          lessonId: unit.lessonId,
          labelKey: row.questionKey,
          kind: "comprehension",
          answer: row.answer
        });
      }
    }

    return {
      moduleId: module.id,
      title: module.title[uiLang],
      direction,
      uiLang,
      tier: tiers.join(" / "),
      themes: unique(units.map((u) => u.theme)),
      lessonIds: units.map((u) => u.lessonId),
      overview: {
        /* The mission is the module's lessons stated as tasks. `setting.what`
           is already a one-line description of what the exchange achieves, so
           the can-do list is authored content re-pointed, not invented. */
        canDo: units.map((u) => firstSentence((u.setting || {}).what, 150) || u.title),
        corePhrases: units
          .map((u) => (u.dialogue[0] ? u.dialogue[0].target : null))
          .filter(Boolean),
        verbs: unique(units.map((u) => u.verb))
      },
      units,
      glossary,
      answerKey
    };
  }

  /* Group a flat lesson array by the block file each lesson was stamped with.
     `sourceFile` is non-enumerable and set by markSource, and a test already
     enforces that every block stamps itself, so this is a reliable key. */
  function lessonsFor(module, lessons) {
    return (lessons || []).filter((lesson) => lesson.sourceFile === module.block);
  }

  global.ParceroWorkbook = {
    build,
    lessonsFor,
    seedFrom,
    rngFrom,
    shuffled,
    firstSentence
  };
})(typeof window !== "undefined" ? window : globalThis);
