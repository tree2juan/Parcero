/*
 * Assessment: checkpoints, exams, and marks a school can record.
 *
 * Why this file exists.
 *
 * Everything the course graded before this file was formative and private. A
 * learner answered a practice question, progress.js filed the result against
 * the spaced-repetition schedule, and that was the end of it. That is the
 * right design for self-study and it is not enough for a class, because a
 * teacher cannot report it. There was no moment where the learner sat a fixed
 * paper, no score out of anything, and nothing a registrar would accept.
 *
 * So this adds the summative half: a **checkpoint** at the end of each module
 * and an **exam** at the end of each band, both assembled deterministically,
 * both scored out of a fixed total, both recorded with a date.
 *
 *
 * Where the questions come from, stated plainly.
 *
 * A checkpoint is built from the practice questions of the module's own
 * lessons. It is, deliberately, material the learner has met. That is what an
 * end-of-unit test is in any school, and pretending otherwise would be worse
 * than saying it: the interface calls it a checkpoint, not an exam, and the
 * documentation says what it draws on.
 *
 * What makes it a test rather than a re-run is that the conditions change.
 * Questions are sampled across every lesson in the module rather than taken in
 * order, the options are re-ordered so a remembered position is worth nothing,
 * there is no feedback until the end, and the whole thing is scored at once.
 *
 * A band exam is a wider paper and only partly recycled. Its use-of-language
 * section samples the entire band rather than one module, and its reading
 * section uses the comprehension questions attached to the stories, which are
 * separately authored and appear in no lesson and no checkpoint. The writing
 * task is authored in data/exam-tasks.js and marked against a rubric by a
 * human. So an exam has a section the learner cannot have seen, and a section
 * no machine can mark, which is roughly the shape of the real thing.
 *
 *
 * Why assembly is deterministic.
 *
 * A class sits the same paper. If the sampling were random per device, no two
 * students would see the same test, the teacher could not print one answer
 * key, and a mark would not mean the same thing twice. So the sampler is a
 * seeded PRNG and the seed is the paper's identity: module, direction, and a
 * form letter. Same seed, same paper, on every device, forever.
 *
 * The form letter is what makes a retake possible. Form B of a checkpoint is a
 * different draw from the same pool, so a student who fails on Monday can sit a
 * genuinely different paper on Friday without the teacher assembling anything.
 *
 *
 * Pure, like srs.js and progress.js. No DOM, no storage, no clock: the caller
 * passes the corpus in and the day in. The two storage helpers at the bottom
 * are the only impure functions, and they are separated so the marking logic
 * can be tested without a browser.
 */
(function (global) {
  "use strict";

  const STORE = "parcero-assessment";
  const VERSION = 1;

  /* A checkpoint is short enough to sit in the last ten minutes of a class.
     An exam is a period. Both are capped by what the pool can actually
     supply — see buildPaper, which never pads. */
  const CHECKPOINT_QUESTIONS = 10;
  const EXAM_USE_QUESTIONS = 24;
  const EXAM_READING_STORIES = 2;

  /* 60% to pass a checkpoint, 65% for a band exam. The exam sits higher
     because passing it is the claim that the band is finished, and because its
     reading section is unseen material rather than revision. */
  const CHECKPOINT_PASS = 0.6;
  const EXAM_PASS = 0.65;

  const FORMS = ["A", "B", "C"];

  /* ---------------------------------------------------------------- random */

  /*
   * Mulberry32. Thirty-two bits of state, uniform enough to shuffle a
   * ten-item list, and — the property that matters here — identical in every
   * JavaScript engine, which Math.random is not. A paper assembled in Chrome
   * has to be the paper assembled in Firefox or the answer key is fiction.
   */
  function rng(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* FNV-1a over the seed string, so the seed is the paper's name rather than a
     number somebody has to keep a list of. */
  function hash(text) {
    let h = 2166136261;
    const s = String(text);
    for (let i = 0; i < s.length; i += 1) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  /* Fisher-Yates, out of place. */
  function shuffle(list, random) {
    const out = list.slice();
    for (let i = out.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      const swap = out[i];
      out[i] = out[j];
      out[j] = swap;
    }
    return out;
  }

  /* ----------------------------------------------------------------- pool */

  function practiceOf(lesson, direction) {
    const content = (lesson && lesson[direction]) || {};
    const out = [];
    if (content.prompt) {
      out.push({ prompt: content.prompt, choices: content.choices || [], answer: content.answer });
    }
    for (const extra of content.practiceExtra || []) {
      if (extra && extra.prompt) {
        out.push({ prompt: extra.prompt, choices: extra.choices || [], answer: extra.answer });
      }
    }
    return out.filter((q) => Array.isArray(q.choices) && q.choices.length > 1 && Number.isInteger(q.answer));
  }

  /*
   * Every question in a set of lessons, tagged with where it came from.
   *
   * The lesson id and index travel with the question because a mark is only
   * useful if it points back at the teaching. A checkpoint report that says
   * "6/10" tells a teacher nothing; one that says "both misses were in the
   * lesson on usted" tells them what to do on Monday.
   */
  function pool(lessons, direction) {
    const out = [];
    for (const lesson of lessons || []) {
      practiceOf(lesson, direction).forEach((q, index) => {
        out.push({ lessonId: lesson.id, index, prompt: q.prompt, choices: q.choices, answer: q.answer });
      });
    }
    return out;
  }

  /*
   * Take `count` questions spread across lessons rather than clustered.
   *
   * Round-robin by lesson, so a ten-question checkpoint over three lessons is
   * 4/3/3 and not 5/5/0. Taking the first ten of a flat shuffled pool leaves a
   * lesson unexamined about a third of the time, which is exactly the lesson
   * the learner then discovers they never learned.
   */
  function spread(items, count, random) {
    const byLesson = new Map();
    for (const item of items) {
      if (!byLesson.has(item.lessonId)) byLesson.set(item.lessonId, []);
      byLesson.get(item.lessonId).push(item);
    }
    const queues = shuffle([...byLesson.keys()], random).map((id) => shuffle(byLesson.get(id), random));
    const out = [];
    let round = 0;
    while (out.length < count) {
      let took = 0;
      for (const queue of queues) {
        if (round < queue.length) {
          out.push(queue[round]);
          took += 1;
          if (out.length >= count) break;
        }
      }
      if (!took) break; /* pool exhausted; a short paper beats a padded one */
      round += 1;
    }
    return out;
  }

  /*
   * Re-order a question's options and follow the correct answer to its new
   * home. Returns the question with `answer` pointing at the same string it
   * pointed at before, which is the only invariant that matters here and the
   * one most easily lost by shuffling an array and forgetting the index.
   */
  function reorder(question, random) {
    const correct = question.choices[question.answer];
    const choices = shuffle(question.choices, random);
    return {
      lessonId: question.lessonId,
      index: question.index,
      prompt: question.prompt,
      choices,
      answer: choices.indexOf(correct)
    };
  }

  /* ---------------------------------------------------------------- papers */

  function buildPaper(items, count, seed) {
    const random = rng(hash(seed));
    const picked = spread(items, count, random);
    return picked.map((q) => reorder(q, random));
  }

  /*
   * A module checkpoint.
   *
   * `lessons` is the module's lessons, already filtered by the caller —
   * syllabus.js owns the question of which lessons a module holds, and this
   * file deliberately does not learn a second answer to it.
   */
  function checkpoint(options) {
    const opts = options || {};
    const direction = opts.direction === "en" ? "en" : "es";
    const form = FORMS.includes(opts.form) ? opts.form : "A";
    const moduleId = String(opts.moduleId || "");
    const items = pool(opts.lessons, direction);
    const want = typeof opts.count === "number" ? opts.count : CHECKPOINT_QUESTIONS;
    const questions = buildPaper(items, Math.min(want, items.length), `checkpoint:${moduleId}:${direction}:${form}`);
    return {
      kind: "checkpoint",
      id: `${moduleId}:${direction}:${form}`,
      moduleId,
      direction,
      form,
      pass: CHECKPOINT_PASS,
      available: items.length,
      questions
    };
  }

  /*
   * A band exam.
   *
   * Three sections, and the difference between them is the point:
   *
   *   use      - sampled from every module in the band. Revision, and says so.
   *   reading  - story comprehension questions. Unseen: they live in
   *              data/stories.js and appear in no lesson.
   *   writing  - one authored task, marked by a human against a rubric. Not
   *              scored here, and `total` excludes it, because a number this
   *              file invented for an essay it cannot read would be a lie.
   */
  function exam(options) {
    const opts = options || {};
    const direction = opts.direction === "en" ? "en" : "es";
    const form = FORMS.includes(opts.form) ? opts.form : "A";
    const band = String(opts.band || "");
    const seed = `exam:${band}:${direction}:${form}`;

    const items = pool(opts.lessons, direction);
    const use = buildPaper(items, Math.min(EXAM_USE_QUESTIONS, items.length), seed + ":use");

    const random = rng(hash(seed + ":reading"));
    const bandStories = (opts.stories || []).filter((s) => s && s.band === band && Array.isArray(s.questions) && s.questions.length);
    const chosen = shuffle(bandStories, random).slice(0, EXAM_READING_STORIES);
    /*
     * Reading is asked in the language being studied, which is what the
     * reading room already does and what DELE and Cambridge both do. Asking in
     * the learner's own language would test whether they understood the story
     * and nothing else; asking in the target language tests the reading.
     *
     * The model answer travels with the question. It has to: this section is
     * short-answer, no machine here can mark it, and a solo learner with no
     * teacher would otherwise sit a section that never tells them anything.
     * The answer in their own language comes too, for the case where they
     * understood the story and cannot yet say so.
     */
    const home = direction === "es" ? "en" : "es";
    const pick = (pair, lang) => (pair && pair[lang]) || "";
    const reading = chosen.map((story) => ({
      storyId: story.id,
      title: pick(story.title, direction) || pick(story.title, "en"),
      questions: story.questions.map((q) => (typeof q === "string"
        ? { q, a: "", gloss: "" }
        : { q: pick(q.q, direction), a: pick(q.a, direction), gloss: pick(q.a, home) }))
    }));

    return {
      kind: "exam",
      id: `${band}:${direction}:${form}`,
      band,
      direction,
      form,
      pass: EXAM_PASS,
      use,
      reading,
      writing: opts.writing || null,
      total: use.length
    };
  }

  /* ---------------------------------------------------------------- marking */

  /*
   * Mark a paper.
   *
   * `responses` is an array parallel to `questions`, holding the chosen index
   * or null for unanswered. Null is kept distinct from wrong all the way
   * through: a blank is a different teaching signal from a mistake, and
   * collapsing them is how a report comes to say a learner failed a topic they
   * simply ran out of time to reach.
   */
  function mark(paper, responses) {
    const questions = (paper && (paper.questions || paper.use)) || [];
    const given = Array.isArray(responses) ? responses : [];
    const rows = questions.map((q, i) => {
      const chosen = Number.isInteger(given[i]) ? given[i] : null;
      return {
        lessonId: q.lessonId,
        index: q.index,
        prompt: q.prompt,
        chosen,
        answer: q.answer,
        correct: chosen !== null && chosen === q.answer,
        blank: chosen === null
      };
    });
    const correct = rows.filter((r) => r.correct).length;
    const blank = rows.filter((r) => r.blank).length;
    const total = rows.length;
    const share = total ? correct / total : 0;
    const threshold = (paper && paper.pass) || CHECKPOINT_PASS;

    /* Which lessons the misses landed in, worst first. This is the whole
       reason lessonId travels with the question. */
    const byLesson = new Map();
    for (const row of rows) {
      const entry = byLesson.get(row.lessonId) || { lessonId: row.lessonId, asked: 0, missed: 0 };
      entry.asked += 1;
      if (!row.correct) entry.missed += 1;
      byLesson.set(row.lessonId, entry);
    }
    const weak = [...byLesson.values()]
      .filter((e) => e.missed > 0)
      .sort((a, b) => b.missed / b.asked - a.missed / a.asked || b.missed - a.missed);

    return {
      total,
      correct,
      blank,
      wrong: total - correct - blank,
      share,
      percent: Math.round(share * 100),
      passed: total > 0 && share >= threshold,
      threshold,
      rows,
      weak
    };
  }

  /* -------------------------------------------------------------- recording */

  const emptyState = () => ({ v: VERSION, results: {} });

  function load(raw) {
    let text = raw;
    if (text === undefined) {
      try {
        text = global.localStorage ? global.localStorage.getItem(STORE) : null;
      } catch {
        return emptyState();
      }
    }
    if (!text) return emptyState();
    try {
      const parsed = JSON.parse(text);
      if (!parsed || typeof parsed !== "object") return emptyState();
      return { v: VERSION, results: parsed.results && typeof parsed.results === "object" ? parsed.results : {} };
    } catch {
      return emptyState();
    }
  }

  function save(state) {
    try {
      if (!global.localStorage) return false;
      global.localStorage.setItem(STORE, JSON.stringify(state));
      return true;
    } catch {
      return false;
    }
  }

  /*
   * File a result.
   *
   * Attempts accumulate rather than overwrite, and `best` is tracked
   * separately from `last`. A school needs both: the last attempt is what the
   * student just did, and the best is usually what gets reported. Throwing
   * either away makes one of those two questions unanswerable later.
   */
  function record(state, entry) {
    const base = state && state.results ? state : emptyState();
    const { kind, id, percent, passed, total, correct, day } = entry || {};
    if (!kind || !id) return base;
    const key = `${kind}:${id}`;
    const previous = base.results[key];
    const attempts = ((previous && previous.attempts) || 0) + 1;
    const best = Math.max((previous && previous.best) || 0, percent || 0);
    return {
      v: VERSION,
      results: {
        ...base.results,
        [key]: {
          kind,
          id,
          attempts,
          best,
          last: percent || 0,
          passed: Boolean(passed) || Boolean(previous && previous.passed),
          total: total || 0,
          correct: correct || 0,
          day: typeof day === "number" ? day : (previous && previous.day) || 0
        }
      }
    };
  }

  function resultFor(state, kind, id) {
    const base = state && state.results ? state : emptyState();
    return base.results[`${kind}:${id}`] || null;
  }

  /*
   * The same question without the form letter.
   *
   * Results are filed per paper, so form A and form B of one module are two
   * records. Almost nothing outside this file wants that: the course view asks
   * "has this module been passed", the report asks "what did they get", and
   * both mean the module rather than one particular draw of it.
   *
   * Passing once counts, which is the same rule `record` applies within a
   * single paper — a student who passes on form A has passed, and sitting
   * form B out of interest cannot take that away.
   */
  function bestFor(state, kind, moduleOrBand, direction) {
    const base = state && state.results ? state : emptyState();
    const prefix = `${kind}:${moduleOrBand}:${direction === "en" ? "en" : "es"}:`;
    const found = Object.keys(base.results)
      .filter((key) => key.indexOf(prefix) === 0)
      .map((key) => base.results[key]);
    if (!found.length) return null;
    return found.reduce((acc, row) => ({
      kind,
      id: `${moduleOrBand}:${direction}`,
      attempts: acc.attempts + row.attempts,
      best: Math.max(acc.best, row.best),
      last: row.day >= acc.day ? row.last : acc.last,
      passed: acc.passed || row.passed,
      total: row.day >= acc.day ? row.total : acc.total,
      correct: row.day >= acc.day ? row.correct : acc.correct,
      day: Math.max(acc.day, row.day)
    }), { attempts: 0, best: 0, last: 0, passed: false, total: 0, correct: 0, day: -1 });
  }

  /*
   * Which form to offer next.
   *
   * A student retaking a paper should not meet the one they just sat. Forms
   * advance with attempts and stop at the last rather than wrapping, because
   * a fourth attempt at the same module is a conversation, not a paper.
   */
  function nextForm(state, kind, moduleOrBand, direction) {
    const prior = bestFor(state, kind, moduleOrBand, direction);
    const attempts = prior ? prior.attempts : 0;
    return FORMS[Math.min(attempts, FORMS.length - 1)];
  }

  /* Every result, newest-looking first, for the report and the export. */
  function results(state) {
    const base = state && state.results ? state : emptyState();
    return Object.keys(base.results).map((k) => base.results[k]);
  }

  function clear() {
    try {
      if (global.localStorage) global.localStorage.removeItem(STORE);
    } catch {
      /* Nothing to do. */
    }
    return emptyState();
  }

  global.ParceroAssessment = {
    STORE, VERSION, FORMS,
    CHECKPOINT_QUESTIONS, EXAM_USE_QUESTIONS, CHECKPOINT_PASS, EXAM_PASS,
    rng, hash, shuffle, pool, spread, reorder,
    checkpoint, exam, mark,
    emptyState, load, save, record, resultFor, bestFor, nextForm, results, clear
  };
})(typeof window !== "undefined" ? window : globalThis);
