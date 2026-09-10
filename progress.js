/*
 * What the learner actually did, and why none of it used to be kept.
 *
 * The course ships 2,114 practice questions across 226 lessons. Answering one
 * coloured a button green, printed "Correct", and ended there: `practiceView`
 * was `{ index: 0 }` — a cursor, not a record. The only thing that survived a
 * reload was `state.completed`, a Set of lesson ids, which says a learner
 * arrived at the end of a lesson and nothing whatever about whether they could
 * do it. Two learners, one answering every question first time and one missing
 * two thirds and clicking on, finished a lesson in exactly the same state.
 *
 * That is the single largest measured gap in the product. A count of the
 * corpus found 64.9% of distinct Spanish forms appearing in exactly one lesson
 * and 59% of explicitly taught vocabulary (679 of 1,151 items) never spoken
 * again in any later lesson. Content that is met once and never revisited is
 * forgotten on the usual curve, and the app had no mechanism that could
 * notice, because it was throwing away the one signal that would have told it.
 *
 * So every answer is graded and kept, and a missed question comes back.
 *
 * Two decisions worth defending:
 *
 * It reuses srs.js rather than inventing a second scheduler. The deck already
 * proves that algorithm against 12,344 cards, and a learner does not have two
 * memories — a word missed in a lesson and the same word missed on a card
 * deserve the same treatment. What it does *not* share is the storage map:
 * deck cards and lesson questions are different id spaces, and srs.prune()
 * drops entries by furthest-due, so a large deck sharing one map could quietly
 * evict a struggling learner's lesson history. Separate keys, same algorithm.
 *
 * It stores attempt counts alongside the schedule, which is strictly more than
 * SM-2 needs. A schedule alone cannot distinguish a question answered right
 * five times running from one missed three times and finally learned — both
 * end up simply "due in a while" — and it is exactly that difference the
 * weakness model has to see in order to recommend anything.
 *
 * Pure by the same rule as srs.js: no DOM, and `today` is always passed in.
 * The two storage helpers are the only impure functions and are the only ones
 * that touch localStorage.
 */
(function (global) {
  "use strict";

  const STORE = "parcero-progress";
  const VERSION = 1;

  /* srs.js is loaded before this file, but progress has to degrade the same
     way the deck does when a file is missing: grading still works, scheduling
     is what is lost. */
  const srs = () => (typeof global.ParceroSRS === "object" ? global.ParceroSRS : null);

  /*
   * Practice items outnumber lessons but are far short of the deck: 2,114
   * questions in each of two directions is well under 5,000 entries, so this
   * cap is headroom rather than a constraint, and exists only so a corrupted
   * or hand-edited store cannot grow without bound.
   */
  const CAP = 8000;

  /* Below this many attempts a lesson has no meaningful accuracy — one wrong
     answer out of one is not a 0% lesson, it is an unmeasured one. */
  const MIN_ATTEMPTS = 3;

  /*
   * A practice question's identity.
   *
   * Position within the lesson is the only stable handle the data offers:
   * questions carry no id of their own, and hashing the prompt would reset a
   * learner's history on every typo fix, which is a worse failure than the one
   * it avoids. Editing a lesson's question *order* will mis-attribute history
   * for that lesson; that is a rare, deliberate authoring act, and the cost is
   * one lesson's schedule rather than silent corruption elsewhere.
   */
  const itemId = (direction, lessonId, index) => `${direction}:${lessonId}:${index}`;

  const emptyState = () => ({ v: VERSION, items: {}, lessons: {} });

  function load(raw) {
    /* `raw` is injectable so the parsing rules can be tested without a DOM. */
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
      return {
        v: VERSION,
        items: parsed.items && typeof parsed.items === "object" ? parsed.items : {},
        lessons: parsed.lessons && typeof parsed.lessons === "object" ? parsed.lessons : {}
      };
    } catch {
      /* A corrupt store costs the history, not the session. */
      return emptyState();
    }
  }

  function save(state) {
    try {
      if (!global.localStorage) return false;
      global.localStorage.setItem(STORE, JSON.stringify(prune(state)));
      return true;
    } catch {
      /* Full or blocked storage costs the record, not the answer. */
      return false;
    }
  }

  /*
   * Grade one answer.
   *
   * Returns a new state rather than mutating, so a caller can record a result
   * and compare against the previous state — which is what lets the UI say
   * "this one comes back tomorrow" instead of only "correct".
   */
  function record(state, event, today) {
    const base = state && state.items ? state : emptyState();
    const { direction, lessonId, index, correct } = event || {};
    if (!direction || !lessonId || !Number.isInteger(index)) return base;

    const day = today === undefined ? (srs() ? srs().todayIndex() : 0) : today;
    const id = itemId(direction, lessonId, index);
    const engine = srs();

    const previous = base.items[id];
    const schedule = engine
      ? engine.review(previous && previous.card ? previous.card : engine.fresh(day), correct ? "known" : "again", day)
      : null;

    const item = {
      card: schedule,
      /* Attempts and misses are the weakness model's raw material; `last` lets
         a stale record be aged out or explained in the UI. */
      attempts: ((previous && previous.attempts) || 0) + 1,
      misses: ((previous && previous.misses) || 0) + (correct ? 0 : 1),
      last: day
    };

    const lessonKey = `${direction}:${lessonId}`;
    const lesson = base.lessons[lessonKey] || { attempts: 0, misses: 0, last: day };
    const nextLesson = {
      attempts: lesson.attempts + 1,
      misses: lesson.misses + (correct ? 0 : 1),
      last: day
    };

    return {
      v: VERSION,
      items: { ...base.items, [id]: item },
      lessons: { ...base.lessons, [lessonKey]: nextLesson }
    };
  }

  /* Whole-course totals, for the progress line. */
  function summary(state) {
    const base = state && state.items ? state : emptyState();
    let attempts = 0;
    let misses = 0;
    for (const key of Object.keys(base.lessons)) {
      attempts += base.lessons[key].attempts || 0;
      misses += base.lessons[key].misses || 0;
    }
    return {
      attempts,
      correct: attempts - misses,
      accuracy: attempts ? (attempts - misses) / attempts : 0,
      answered: Object.keys(base.items).length
    };
  }

  /*
   * How many graded questions want asking again today.
   *
   * Unseen questions are deliberately *not* counted. srs.dueCount treats an
   * unscheduled card as due, which is right for a deck the learner opened on
   * purpose, but here it would report every unanswered question in the course
   * as homework and make the number meaningless on day one.
   */
  function dueCount(state, today) {
    const engine = srs();
    const base = state && state.items ? state : emptyState();
    if (!engine) return 0;
    const day = today === undefined ? engine.todayIndex() : today;
    let due = 0;
    for (const id of Object.keys(base.items)) {
      const card = base.items[id].card;
      if (card && engine.isDue(card, day)) due += 1;
    }
    return due;
  }

  /* The ids of everything due, so a review round can be built from them. */
  function dueItems(state, today) {
    const engine = srs();
    const base = state && state.items ? state : emptyState();
    if (!engine) return [];
    const day = today === undefined ? engine.todayIndex() : today;
    return Object.keys(base.items)
      .filter((id) => base.items[id].card && engine.isDue(base.items[id].card, day))
      .map((id) => {
        const [direction, ...rest] = id.split(":");
        const index = Number(rest.pop());
        return { id, direction, lessonId: rest.join(":"), index };
      });
  }

  /*
   * Lessons the learner is measurably failing, worst first.
   *
   * Ranked by miss rate rather than miss count, or every long lesson would
   * outrank a short one the learner cannot do at all. Lessons under
   * MIN_ATTEMPTS are excluded rather than ranked low: recommending revision
   * from a single data point is guessing with a progress bar attached.
   */
  function weakest(state, limit) {
    const base = state && state.lessons ? state : emptyState();
    const rows = [];
    for (const key of Object.keys(base.lessons)) {
      const entry = base.lessons[key];
      if (!entry || (entry.attempts || 0) < MIN_ATTEMPTS) continue;
      const separator = key.indexOf(":");
      rows.push({
        direction: key.slice(0, separator),
        lessonId: key.slice(separator + 1),
        attempts: entry.attempts,
        misses: entry.misses,
        rate: entry.misses / entry.attempts
      });
    }
    rows.sort((a, b) => b.rate - a.rate || b.attempts - a.attempts);
    return typeof limit === "number" ? rows.slice(0, limit) : rows;
  }

  /* Per-lesson accuracy, for a badge on the lesson list. Returns null rather
     than 0 when unmeasured, so "not tried" and "got everything wrong" cannot
     render as the same thing. */
  function lessonScore(state, direction, lessonId) {
    const base = state && state.lessons ? state : emptyState();
    const entry = base.lessons[`${direction}:${lessonId}`];
    if (!entry || !entry.attempts) return null;
    return {
      attempts: entry.attempts,
      misses: entry.misses,
      accuracy: (entry.attempts - entry.misses) / entry.attempts
    };
  }

  /*
   * Keep the stored form bounded. Drops by furthest-due for the same reason
   * srs.prune does: the cards scheduled months out are the ones already known,
   * and losing one returns it to the pool rather than erasing a struggle.
   */
  function prune(state, cap) {
    const base = state && state.items ? state : emptyState();
    const limit = cap || CAP;
    const ids = Object.keys(base.items);
    if (ids.length <= limit) return base;
    ids.sort((a, b) => ((base.items[b].card && base.items[b].card.due) || 0) - ((base.items[a].card && base.items[a].card.due) || 0));
    const items = { ...base.items };
    for (const id of ids.slice(0, ids.length - limit)) delete items[id];
    return { v: VERSION, items, lessons: base.lessons };
  }

  function clear() {
    try {
      if (global.localStorage) global.localStorage.removeItem(STORE);
    } catch {
      /* Nothing to do: the reset button has already reset everything else. */
    }
    return emptyState();
  }

  global.ParceroProgress = {
    STORE, VERSION, CAP, MIN_ATTEMPTS,
    itemId, emptyState, load, save, record,
    summary, dueCount, dueItems, weakest, lessonScore, prune, clear
  };
})(typeof window !== "undefined" ? window : globalThis);
