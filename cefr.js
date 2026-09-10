/*
 * Working out what level a lesson teaches, and what level a learner reached.
 *
 * data/cefr.js holds the features and the patterns that detect them. This file
 * turns those patterns into something that works on real Spanish and English,
 * and then aggregates: a lesson's band is the highest band it demonstrates, a
 * module's band is the highest of its lessons', and a learner's band is the
 * highest one they can show evidence for.
 *
 * The word boundary is the reason this file exists rather than a one-line call
 * to RegExp.
 *
 * JavaScript's \b is defined against [A-Za-z0-9_], and every accented Spanish
 * letter falls outside it. "está" therefore has no boundary after the á, so
 * /\bestá\b/ never matches it, while /\b\w{2,}ó\b/ happily matches the "corazó"
 * inside "corazón" because the ó that should have ended the word does not end
 * anything. Both failures are silent and both point the wrong way: the first
 * hides grammar the learner met, the second invents grammar they did not. So
 * every \b in a probe is rewritten here into a boundary that knows the letters
 * the language actually uses.
 *
 * Bands are ordered, and only the order decides which of two detected features
 * is higher. Nothing else in this file knows what A2 means.
 */
(function (global) {
  "use strict";

  /* In the browser these arrive as top-level consts from data/cefr.js, which
     are visible to later scripts but never hang off window. Under Node they
     only exist through require. Neither route is available in both places. */
  const loaded = (typeof require === "function") ? require("./data/cefr.js") : null;
  const FEATURES = loaded ? loaded.CEFR_FEATURES : CEFR_FEATURES;
  const BANDS = loaded ? loaded.CEFR_BANDS : CEFR_BANDS;
  const MACROS = loaded ? loaded.CEFR_MACROS : CEFR_MACROS;

  /* The letters that count as part of a word, in both languages taught. */
  const WORD = "0-9A-Za-z_ÀÁÂÃÄÅÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâãäåèéêëìíîïñòóôõöùúûüýÿ";

  /*
   * A word boundary that survives an accent.
   *
   * \b means "a transition between a word character and anything else". Spelled
   * out with the real letter set, that is: the previous character is a word
   * character and the next is not, or the reverse. Lookbehind at position zero
   * fails, which correctly makes the start of a string a boundary before a
   * letter.
   */
  const BOUNDARY = `(?:(?<=[${WORD}])(?![${WORD}])|(?<![${WORD}])(?=[${WORD}]))`;

  function compileProbe(probe, caseSensitive) {
    /* Macros first, so a fragment can carry its own \b and still get the
       accent-aware treatment below. An unknown {NAME} is a typo that would
       otherwise compile into a regex matching the literal braces and quietly
       never fire, so it throws instead. */
    const expanded = String(probe).replace(/\{([A-Z_]+)\}/g, (whole, name) => {
      if (!MACROS || !MACROS[name]) throw new Error(`unknown probe macro ${whole}`);
      return MACROS[name];
    });

    /*
     * \w has the same defect as \b and needs the same repair.
     *
     * JavaScript defines \w as [A-Za-z0-9_], so it does not match an accented
     * letter either. That is subtler than the \b problem because a probe using
     * \w usually still matches something — just the wrong span. The probe
     * \w{4,}mente was written to require a four-letter stem before an adverb
     * ending, and against "rápidamente" the only run of \w characters before
     * "mente" is "pida", whose left edge sits against the á and therefore is
     * not a boundary. The probe silently failed on every accented adverb,
     * which is most of them.
     *
     * Rewriting \w here rather than spelling the letter set out in each probe
     * keeps one copy of the alphabet. A \w inside a character class would be
     * mangled by this, so no probe may contain one, and a test enforces that.
     */
    const widened = expanded.replace(/\\w/g, `[${WORD}]`);

    /* \\b inside a character class is a backspace, not a boundary, and must be
       left alone; nothing in data/cefr.js uses one, and this keeps it true. */
    return new RegExp(widened.replace(/\\b/g, BOUNDARY), caseSensitive ? "" : "i");
  }

  const compiled = {};
  function featuresFor(direction) {
    const lang = direction === "en" ? "en" : "es";
    if (!compiled[lang]) {
      compiled[lang] = (FEATURES[lang] || []).map((feature) => ({
        id: feature.id,
        band: feature.band,
        name: feature.name,
        regex: compileProbe(feature.probe, feature.caseSensitive)
      }));
    }
    return compiled[lang];
  }

  const rankOf = (band) => BANDS.indexOf(band);

  function higher(a, b) {
    if (!a) return b;
    if (!b) return a;
    return rankOf(a) >= rankOf(b) ? a : b;
  }

  /* Every feature a single utterance demonstrates. */
  function featuresIn(text, direction) {
    if (!text) return [];
    const line = String(text);
    return featuresFor(direction)
      .filter((feature) => feature.regex.test(line))
      .map((feature) => ({ id: feature.id, band: feature.band, name: feature.name }));
  }

  function bandOf(text, direction) {
    let band = null;
    for (const feature of featuresIn(text, direction)) band = higher(band, feature.band);
    return band;
  }

  /*
   * Everything a lesson says in the language it is teaching.
   *
   * Only the taught side counts. A Spanish lesson's English translations,
   * explanations and multiple-choice options are scaffolding, and running the
   * Spanish probes over them would measure the learner's own language and call
   * it progress. So this reads the four fields that hold target-language text
   * and nothing else.
   *
   * It throws rather than skips. Every field below was found by reading the
   * data, and two of them had already moved: variations hold `form`, not
   * `target`, and a vocabulary `example` is sometimes a bare string and
   * sometimes an object. Both were silently contributing nothing, which is the
   * same shape of bug as the vocabulary count that summed to zero. A schema
   * that drifts again should stop the build, not quietly lower everyone's band.
   */
  function taughtLines(lesson, direction) {
    const block = (lesson && lesson[direction]) || {};
    const out = [];

    const take = (value, where) => {
      if (value === undefined || value === null) return;
      if (typeof value === "string") {
        if (value.trim()) out.push(value);
        return;
      }
      if (typeof value === "object" && typeof value.target === "string") {
        out.push(value.target);
        return;
      }
      throw new TypeError(
        `${lesson && lesson.id}: ${where} is ${typeof value}, not target-language text`
      );
    };

    for (const line of block.dialogue || []) take(line && line.target, "dialogue.target");
    for (const entry of block.vocabulary || []) {
      take(entry && entry.term, "vocabulary.term");
      take(entry && entry.example, "vocabulary.example");
    }
    for (const item of block.variations || []) {
      take(item && (typeof item === "string" ? item : item.form), "variations.form");
    }
    return out;
  }

  /*
   * A lesson's band is the highest thing it actually demonstrates, and the
   * evidence is kept beside it. A band with no line to point at is an opinion.
   *
   * When no probe fires the lesson still is not unrated. A few lessons are
   * built entirely from present-tense statements the probes deliberately do
   * not try to detect — "el bus sale a las cinco" — and CEFR puts basic
   * phrases in the target language at A1 by definition, so that is the floor
   * rather than a blank. `features` stays empty in that case, which is how the
   * page knows to say "basic phrases" instead of naming a structure it cannot
   * point at. `detected` keeps the unfloored answer so a measurement can still
   * tell the two apart.
   */
  const FLOOR = "A1";

  /*
   * Lesson content does not change while the page is open, but the band is
   * asked for constantly: the panel recomputes every band on every render, and
   * a render happens on each lesson change and each practice answer. Measured
   * cold, that is ~60ms of regex per render across 226 lessons, which is
   * enough to be felt when switching direction.
   *
   * The cache is keyed on the lesson object itself rather than its id, so
   * there is nothing to invalidate and no way for two lessons sharing an id to
   * shadow each other.
   */
  const bandCache = new WeakMap();

  function lessonBand(lesson, direction) {
    const lang = direction === "en" ? "en" : "es";
    let entry = lesson && typeof lesson === "object" ? bandCache.get(lesson) : null;
    if (entry && entry[lang]) return entry[lang];

    const seen = new Map();
    let band = null;
    for (const line of taughtLines(lesson, direction)) {
      for (const feature of featuresIn(line, direction)) {
        band = higher(band, feature.band);
        if (!seen.has(feature.id)) seen.set(feature.id, { ...feature, evidence: line });
      }
    }
    const result = { band: band || FLOOR, detected: band, features: Array.from(seen.values()) };

    if (lesson && typeof lesson === "object") {
      if (!entry) {
        entry = {};
        bandCache.set(lesson, entry);
      }
      entry[lang] = result;
    }
    return result;
  }

  function corpusProfile(lessons, direction) {
    const counts = {};
    const featureCounts = {};
    const unbanded = [];
    for (const band of BANDS) counts[band] = 0;

    for (const lesson of lessons || []) {
      const result = lessonBand(lesson, direction);
      counts[result.band] += 1;
      /* The floor means every lesson has a band, so "unbanded" has to ask the
         unfloored question or it would always answer zero. */
      if (!result.detected) unbanded.push(lesson.id);
      for (const feature of result.features) {
        featureCounts[feature.id] = (featureCounts[feature.id] || 0) + 1;
      }
    }
    return { counts, featureCounts, unbanded, total: (lessons || []).length };
  }

  /*
   * The band a learner has evidence for.
   *
   * Coverage is not attainment: opening every B1 lesson proves nothing. A band
   * counts as reached when enough of its lessons have been answered well
   * enough, which is why this takes a scorer rather than a list of visited
   * ids. Bands are also cumulative — B1 with A2 unproven is not B1 — so the
   * walk stops at the first band that fails.
   */
  function attainment(lessons, direction, scoreOf, options) {
    const opts = options || {};
    const pass = typeof opts.pass === "number" ? opts.pass : 0.8;
    const share = typeof opts.share === "number" ? opts.share : 0.75;
    const minimum = typeof opts.minimum === "number" ? opts.minimum : 3;

    const byBand = {};
    for (const band of BANDS) byBand[band] = [];
    for (const lesson of lessons || []) {
      const result = lessonBand(lesson, direction);
      byBand[result.band].push(lesson);
    }

    const report = [];
    let reached = null;
    let stopped = false;

    for (const band of BANDS) {
      const group = byBand[band];
      const scored = group.map((lesson) => scoreOf(lesson)).filter((n) => typeof n === "number");
      const strong = scored.filter((n) => n >= pass).length;
      /* The minimum cannot exceed what the course actually offers. C1 is two
         lessons long, and requiring three of them made the band unreachable
         with a perfect score — a threshold nobody could ever cross, which is
         the same defect as a guard that can never fire. */
      const needed = Math.max(Math.min(minimum, group.length), Math.ceil(group.length * share));
      const met = group.length > 0 && strong >= needed;

      report.push({
        band,
        lessons: group.length,
        attempted: scored.length,
        strong,
        needed,
        met,
        /* A band nobody can reach because the course does not teach it is not
           a failure by the learner, and must not be reported as one. */
        taught: group.length > 0
      });

      if (!stopped && met) reached = band;
      else stopped = true;
    }

    return { reached, bands: report };
  }

  const api = {
    BANDS, WORD, BOUNDARY,
    compileProbe, featuresFor, featuresIn, bandOf,
    taughtLines, lessonBand, corpusProfile, attainment, higher, rankOf
  };

  global.ParceroCEFR = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
