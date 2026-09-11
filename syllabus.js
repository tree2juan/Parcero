/*
 * The course as a path: stages, modules, lessons, and how far along you are.
 *
 * This file answers "what should I study, and what have I finished", which is
 * a different question from the two cefr.js already answers. The distinction
 * is the whole reason the file exists, so it is worth stating plainly:
 *
 *   cefr.js lessonBand(lesson)  - what grammar this text contains.
 *   cefr.js attainment(...)     - what the learner has demonstrated.
 *   this file                   - what the course teaches, and in what order.
 *
 * Measuring the third with the first is what made the old menu unusable. A
 * lesson about buying a coffee is an A1 lesson, but real Colombian speech at a
 * counter carries a relative clause, so the detector called it B1. Banding the
 * corpus that way put 63 of 78 English modules into a single stage. The
 * syllabus band is therefore authored on the module in data/modules.js, and
 * everything here is derived from it and cannot drift from it.
 *
 * Nothing in this file decides what A2 means, and nothing in it detects
 * grammar. It groups, orders, and counts.
 *
 * Ordering is derived, not stored. Stages run in CEFR order; modules run in
 * the order data/modules.js lists them, which is the order they were authored
 * to be taught; lessons run in corpus order within their module. So inserting
 * a lesson into a block file puts it in the right place with no sequence
 * number to forget to update.
 */
(function (global) {
  "use strict";

  const loadedBands = (typeof require === "function") ? require("./data/cefr.js") : null;
  const BANDS = loadedBands ? loadedBands.CEFR_BANDS : CEFR_BANDS;

  /* A lesson counts as finished when it was answered well, not when it was
     opened. "Explored" is a measure of clicking; this is a measure of recall,
     and it is the same 0.8 attainment() uses so the two never disagree. */
  const PASS = 0.8;

  /*
   * Shared empty results.
   *
   * The caches below compare by identity, so a fresh [] returned from a
   * fallback path would miss every time and quietly turn the cache off. This
   * is the same defect that once made the report tab rebuild the whole corpus
   * index per rendered row.
   */
  const NO_LESSONS = Object.freeze([]);
  const NO_MODULES = Object.freeze([]);

  const outlineCache = new WeakMap();

  function arrayOf(value, fallback) {
    return Array.isArray(value) ? value : fallback;
  }

  /*
   * The course grouped into stages.
   *
   * A module with no lessons is dropped rather than rendered empty, and a
   * lesson whose block has no module entry is collected under `orphans` rather
   * than silently discarded -- a lesson you cannot reach from the path is the
   * failure this grouping exists to prevent, so it has to be visible to a test
   * rather than swallowed here.
   */
  function buildOutline(lessons, modules) {
    const corpus = arrayOf(lessons, NO_LESSONS);
    const catalog = arrayOf(modules, NO_MODULES);

    const byBlock = new Map();
    for (const lesson of corpus) {
      const block = lesson && lesson.sourceFile;
      if (!block) continue;
      if (!byBlock.has(block)) byBlock.set(block, []);
      byBlock.get(block).push(lesson);
    }

    const placed = new Set();
    const stages = BANDS.map((band) => ({ band, modules: [] }));
    const byBand = new Map(stages.map((stage) => [stage.band, stage]));

    for (const entry of catalog) {
      const stage = byBand.get(entry.band);
      const group = byBlock.get(entry.block) || NO_LESSONS;
      if (!stage || !group.length) continue;
      for (const lesson of group) placed.add(lesson);
      stage.modules.push({
        id: entry.id,
        band: entry.band,
        block: entry.block,
        title: entry.title,
        lessons: group
      });
    }

    const orphans = corpus.filter((lesson) => !placed.has(lesson));
    const unbanded = catalog.filter((entry) => !byBand.has(entry.band)).map((entry) => entry.id);

    return { stages, orphans, unbanded };
  }

  /*
   * Same reasoning as the caches in cefr.js and review-ui.js. The path is
   * rebuilt on every render and every answered question, and it walks the
   * whole corpus. Keyed on the arrays themselves, so there is nothing to
   * invalidate: hand it different data and it is a different key.
   */
  function outline(lessons, modules) {
    const corpus = arrayOf(lessons, NO_LESSONS);
    const catalog = arrayOf(modules, NO_MODULES);
    let entry = outlineCache.get(corpus);
    if (entry && entry.modules === catalog) return entry.value;
    entry = { modules: catalog, value: buildOutline(corpus, catalog) };
    outlineCache.set(corpus, entry);
    return entry.value;
  }

  function moduleIndex(lessons, modules) {
    const index = new Map();
    for (const stage of outline(lessons, modules).stages) {
      for (const entry of stage.modules) {
        for (const lesson of entry.lessons) index.set(lesson.id, entry);
      }
    }
    return index;
  }

  /* The band the course teaches this lesson at -- its module's band. Null when
     the lesson sits in no module, which is a content bug, not a zero. */
  function bandOfLesson(lesson, lessons, modules) {
    if (!lesson) return null;
    const entry = moduleIndex(lessons, modules).get(lesson.id);
    return entry ? entry.band : null;
  }

  /*
   * How far through the path the learner is.
   *
   * `scoreOf` returns accuracy in 0..1, or null for a lesson never attempted.
   * Kept as a callback rather than reading progress directly so this file has
   * no opinion about where progress is stored, and so a test can drive it.
   */
  function progress(lessons, modules, scoreOf, options) {
    const opts = options || {};
    const pass = typeof opts.pass === "number" ? opts.pass : PASS;
    const score = typeof scoreOf === "function" ? scoreOf : () => null;
    const plan = outline(lessons, modules);

    let next = null;
    const stages = plan.stages.map((stage) => {
      const moduleReports = stage.modules.map((entry) => {
        let attempted = 0;
        let done = 0;
        let sum = 0;
        for (const lesson of entry.lessons) {
          const value = score(lesson);
          const finished = typeof value === "number" && value >= pass;
          if (typeof value === "number") {
            attempted += 1;
            sum += value;
            if (finished) done += 1;
          }
          /* The first lesson in path order that is not finished, whether it
             was failed or never opened. Checking failures first would send a
             learner past an untouched lesson to re-take one behind it. */
          if (!finished && !next) {
            next = { band: stage.band, moduleId: entry.id, lessonId: lesson.id };
          }
        }
        const total = entry.lessons.length;
        return {
          id: entry.id,
          band: entry.band,
          title: entry.title,
          total,
          attempted,
          done,
          accuracy: attempted ? sum / attempted : 0,
          complete: total > 0 && done === total
        };
      });

      const total = moduleReports.reduce((sum, m) => sum + m.total, 0);
      const done = moduleReports.reduce((sum, m) => sum + m.done, 0);
      return {
        band: stage.band,
        modules: moduleReports,
        moduleCount: moduleReports.length,
        modulesComplete: moduleReports.filter((m) => m.complete).length,
        total,
        done,
        share: total ? done / total : 0,
        complete: total > 0 && done === total
      };
    });

    const total = stages.reduce((sum, s) => sum + s.total, 0);
    const done = stages.reduce((sum, s) => sum + s.done, 0);
    return { stages, next, total, done, share: total ? done / total : 0 };
  }

  /*
   * The corpus in the order the path actually presents it.
   *
   * This is not the order `lessons` is authored in, and the gap is not small:
   * only 42 of 233 lessons sit in the same position in both. A control that
   * walks the authored array therefore crosses a stage boundary 23 times,
   * runs backwards along the path 10 times, and at its worst jumps 112
   * positions -- which is how "Next lesson" came to hand an A2 learner a B2
   * lesson. Anything offering "next" or "previous" has to walk this instead.
   *
   * Cached on the outline object, which is itself cached on the two input
   * arrays, so this costs one pass the first time the path is built and
   * nothing afterwards.
   */
  const sequenceCache = new WeakMap();

  function sequence(lessons, modules) {
    const plan = outline(lessons, modules);
    const cached = sequenceCache.get(plan);
    if (cached) return cached;
    const flat = [];
    for (const stage of plan.stages) {
      for (const entry of stage.modules) {
        for (const lesson of entry.lessons) flat.push(lesson);
      }
    }
    const frozen = Object.freeze(flat);
    sequenceCache.set(plan, frozen);
    return frozen;
  }

  /*
   * Where a lesson sits on the path, and what comes either side of it.
   * Returns null for a lesson the path cannot place, so a caller can hide the
   * controls rather than offer a step to nowhere.
   */
  function neighbors(lesson, lessons, modules) {
    if (!lesson) return null;
    const order = sequence(lessons, modules);
    const at = order.findIndex((item) => item.id === lesson.id);
    if (at < 0) return null;
    return {
      index: at,
      total: order.length,
      previous: at > 0 ? order[at - 1] : null,
      next: at < order.length - 1 ? order[at + 1] : null
    };
  }

  const api = { BANDS, PASS, outline, sequence, neighbors, moduleIndex, bandOfLesson, progress };

  global.ParceroSyllabus = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
