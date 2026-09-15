/*
 * The teaching layer, read rather than authored.
 *
 * data/teaching.js holds one entry per module: what the module is for, three
 * can-do statements, a five-step lesson plan, the two errors that module
 * reliably produces, and a support and a stretch move. This file is everything
 * that asks questions of it.
 *
 * It is separate from the data for the usual reason — the data file is
 * generated and enormous, and nothing generated should contain logic — and for
 * one specific one: every consumer needs the same three fallbacks, and
 * scattering them produces three slightly different answers to "what happens
 * when a module has no plan yet".
 *
 * Which is not hypothetical. The corpus grows a module before it grows the
 * module's teaching notes, every time, because the lessons are what people
 * want to write. So `forModule` returning null is a normal state and every
 * caller here is built to render around the hole rather than throw into it.
 *
 * Pure: no DOM, no storage, no clock. The caller passes the corpus in.
 */
(function (global) {
  "use strict";

  const BANDS = ["A1", "A2", "B1", "B2"];

  const table = () =>
    (typeof global.MODULE_TEACHING === "object" && global.MODULE_TEACHING) || {};

  /* The authored entry for a module, or null. Null is a normal answer. */
  function forModule(id) {
    const entry = table()[id];
    return entry && typeof entry === "object" ? entry : null;
  }

  const has = (id) => forModule(id) !== null;

  /*
   * Read one side of a bilingual pair.
   *
   * `direction` is the direction of study, not the language wanted. A learner
   * on direction "es" is studying Spanish and reads English, which is the same
   * inversion i18n.js applies, and getting it backwards here would hand every
   * teaching note to the wrong classroom.
   */
  function side(pair, direction) {
    if (!pair) return "";
    const lang = direction === "en" ? "es" : "en";
    return pair[lang] || pair.en || pair.es || "";
  }

  /*
   * The three can-do statements, as plain strings.
   *
   * Empty array when the module has no entry — the caller renders nothing
   * rather than a heading with nothing under it.
   */
  function canDo(id, direction) {
    const entry = forModule(id);
    if (!entry || !Array.isArray(entry.canDo)) return [];
    return entry.canDo.map((pair) => side(pair, direction)).filter(Boolean);
  }

  function mission(id, direction) {
    const entry = forModule(id);
    return entry ? side(entry.mission, direction) : "";
  }

  /* The five taught steps, in the order they are run. Homework is separate
     because it happens after the class and support and stretch are not steps
     at all — they are what you reach for when a step is going wrong. */
  const STEPS = ["warmUp", "presentation", "practice", "production", "exitTicket"];

  /*
   * The lesson plan, flattened for rendering.
   *
   * Steps arrive as an ordered array rather than an object so a template can
   * map over them; relying on object key order to put "warm up" before
   * "production" works until someone re-serializes the file.
   */
  function plan(id, direction) {
    const entry = forModule(id);
    if (!entry || !entry.teaching) return null;
    const t = entry.teaching;
    return {
      minutes: typeof t.minutes === "number" ? t.minutes : 0,
      steps: STEPS.map((key) => ({ id: key, text: side(t[key], direction) })).filter((s) => s.text),
      homework: side(t.homework, direction),
      support: side(t.support, direction),
      stretch: side(t.stretch, direction),
      errors: (Array.isArray(t.errors) ? t.errors : []).map((pair) => side(pair, direction)).filter(Boolean)
    };
  }

  /*
   * Lessons, keyed by the module that teaches them.
   *
   * syllabus.js's moduleIndex() is keyed by *lesson* id — it answers "which
   * module owns this lesson", which is what bandOfLesson() needs. Calling
   * .get(moduleId) on it therefore misses every time and returns undefined,
   * which reads downstream as "this module has no lessons": the scheme of work
   * renders every module with an empty lesson list, the hours all come out
   * zero, and nothing throws. Both callers made exactly that mistake.
   *
   * This is the other half of the question, built from the same outline so
   * lesson membership is still decided in exactly one place.
   */
  function byModule(outline) {
    const map = new Map();
    const stages = (outline && Array.isArray(outline.stages)) ? outline.stages : [];
    for (const stage of stages) {
      for (const entry of stage.modules) map.set(entry.id, entry);
    }
    return map;
  }

  /*
   * The scheme of work: every module of a band, in course order, with its
   * objectives and the length of its session.
   *
   * `modules` is COURSE_MODULES and `index` is byModule() above — keyed by
   * module id, not lesson id. Passing it in rather than recomputing it is the
   * same decision assessment.js made, and for the same reason.
   */
  function scheme(modules, index, direction) {
    const list = Array.isArray(modules) ? modules : [];
    return BANDS.map((band) => {
      const rows = list.filter((m) => m.band === band).map((m) => {
        const entry = index && index.get ? index.get(m.id) : null;
        const detail = plan(m.id, direction);
        return {
          id: m.id,
          band,
          lessons: (entry && entry.lessons) || [],
          minutes: detail ? detail.minutes : 0,
          canDo: canDo(m.id, direction),
          mission: mission(m.id, direction),
          taught: has(m.id)
        };
      });
      return {
        band,
        modules: rows,
        taught: rows.filter((r) => r.taught).length,
        minutes: rows.reduce((sum, r) => sum + r.minutes, 0),
        lessons: rows.reduce((sum, r) => sum + r.lessons.length, 0)
      };
    }).filter((stage) => stage.modules.length);
  }

  /*
   * Contact hours, the number a registrar asks for first.
   *
   * Taught minutes come from the plans. Everything after that is an assumption
   * and is returned separately rather than folded in, so a school that runs
   * one hour of homework instead of two can do its own arithmetic instead of
   * being told a total it cannot audit.
   */
  function hours(modules, index, direction) {
    const stages = scheme(modules, index, direction);
    return stages.map((stage) => {
      const sessions = stage.modules.length;
      return {
        band: stage.band,
        sessions,
        taughtMinutes: stage.minutes,
        taughtHours: Math.round((stage.minutes / 60) * 10) / 10,
        /* One period per module for the checkpoint, two for the band exam. */
        assessmentSessions: sessions + 2,
        /* The pacing claim in data/course-plan.js, made checkable. */
        weeksAtTwoPerWeek: Math.ceil((sessions + 2) / 2)
      };
    });
  }

  /* How much of the course has teaching notes. The honest number for a
     progress report, and the one a test pins to 100%. */
  function coverage(modules) {
    const list = Array.isArray(modules) ? modules : [];
    const taught = list.filter((m) => has(m.id)).length;
    return { taught, total: list.length, share: list.length ? taught / list.length : 0 };
  }

  global.ParceroTeaching = { BANDS, STEPS, forModule, has, side, canDo, mission, plan, byModule, scheme, hours, coverage };
})(typeof window !== "undefined" ? window : globalThis);
