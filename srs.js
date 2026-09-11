/*
 * Spaced repetition, and the reason the deck needed it.
 *
 * The flashcard round already asked the right question — "did you know this?"
 * — and then threw the answer away. `deck.known` was a `new Set()` rebuilt by
 * every call to startSet(), so a card you have known ten times running and a
 * card you have never seen were offered on identical terms, forever. The only
 * thing that survived a reload was which *sets* you had finished, which is a
 * record of attendance rather than of learning.
 *
 * With 22,360 cards in the catalogue that is not a small inefficiency. A
 * learner working through them linearly meets each card roughly once and then
 * never again, which is close to the worst possible schedule: everything is
 * reviewed exactly when it is least needed.
 *
 * This is SM-2 with two buttons instead of six, because two is what the swipe
 * gesture can express and inventing a five-point self-rating the UI cannot
 * collect would be dishonest. "Knew it" advances the interval, "review again"
 * sends the card back into the learning steps and costs ease.
 *
 * Everything here is pure. No DOM, no localStorage, no clock — `today` is
 * always passed in, as an integer day index, which is what makes the schedule
 * testable and keeps the stored form small enough to survive a 22,360-card
 * catalogue in a 5 MB storage budget.
 */
(function (global) {
  "use strict";

  const MS_PER_DAY = 86400000;

  /* Ease is stored as an integer percent to keep the serialised form short and
     to avoid float drift accumulating over hundreds of reviews. */
  const EASE_START = 250;
  const EASE_MIN = 130;
  const EASE_MAX = 280;
  const EASE_PENALTY = 20;
  const EASE_REWARD = 5;

  /* The first two intervals are fixed rather than computed: an ease-scaled
     first interval would send a card you have seen exactly once two and a half
     days out, which is past the point most people forget it. */
  const FIRST = 1;
  const SECOND = 3;
  const MAX_INTERVAL = 365;

  /*
   * How many cards we are willing to remember. Every reviewed card costs about
   * 30 bytes serialised, so the cap is a storage decision, not a pedagogical
   * one: 12,000 entries is roughly 400 KB, comfortably inside the budget while
   * being more cards than a learner will realistically review.
   */
  const CAP = 12000;

  const todayIndex = (now) => Math.floor((now === undefined ? Date.now() : now) / MS_PER_DAY);

  const clamp = (value, low, high) => Math.max(low, Math.min(high, value));

  /* A card nobody has graded yet. Due immediately, which is what makes an
     unseen card and a lapsed card sort together in the same queue. */
  function fresh(today) {
    return { n: 0, ease: EASE_START, due: today, last: 0, seen: today };
  }

  /*
   * Grade one card.
   *
   * `verdict` is the deck's own vocabulary — "known" or "again" — so the call
   * site does not have to translate. Anything that is not "known" is treated
   * as a lapse, deliberately: a new verdict added later should cost ease until
   * someone decides otherwise, rather than silently counting as success.
   */
  function review(state, verdict, today) {
    const day = today === undefined ? todayIndex() : today;
    const prior = state && typeof state === "object" ? state : fresh(day);
    const knew = verdict === "known";

    if (!knew) {
      /* A lapse does not erase history — the ease you earned still applies to
         the rebuilt schedule — but the card goes back to being due now. */
      return {
        n: 0,
        ease: clamp(prior.ease - EASE_PENALTY, EASE_MIN, EASE_MAX),
        due: day,
        last: 0,
        seen: day
      };
    }

    const n = (prior.n || 0) + 1;
    let interval;
    if (n === 1) interval = FIRST;
    else if (n === 2) interval = SECOND;
    else interval = Math.round((prior.last || SECOND) * (prior.ease || EASE_START) / 100);
    interval = clamp(interval, 1, MAX_INTERVAL);

    return {
      n,
      ease: clamp((prior.ease || EASE_START) + EASE_REWARD, EASE_MIN, EASE_MAX),
      due: day + interval,
      last: interval,
      seen: day
    };
  }

  const isDue = (state, today) => !state || (state.due || 0) <= (today === undefined ? todayIndex() : today);

  /* A card counts as learned once it has survived to a real interval. Used for
     progress display only; the scheduler does not care. */
  const isLearned = (state) => Boolean(state) && (state.n || 0) >= 3;

  /*
   * Order a set's cards for study: overdue first, longest-overdue leading,
   * then cards never seen, then everything else in its existing order.
   *
   * Existing order is preserved within each group on purpose. The catalogue
   * orders cards by lesson and kind, and shuffling that would scatter a
   * lesson's vocabulary across the round for no benefit.
   */
  function orderQueue(cards, states, today) {
    const day = today === undefined ? todayIndex() : today;
    const rank = (card) => {
      const state = states && states[card.id];
      if (!state) return { group: 1, key: 0 };
      if ((state.due || 0) <= day) return { group: 0, key: day - (state.due || 0) };
      return { group: 2, key: state.due || 0 };
    };
    return cards
      .map((card, index) => ({ card, index, ...rank(card) }))
      .sort((a, b) => {
        if (a.group !== b.group) return a.group - b.group;
        if (a.group === 0 && a.key !== b.key) return b.key - a.key;
        if (a.group === 2 && a.key !== b.key) return a.key - b.key;
        return a.index - b.index;
      })
      .map((entry) => entry.card);
  }

  /* How many of these cards want reviewing today. Counts unseen cards as due,
     so a fresh set reports its true size rather than zero. */
  function dueCount(cards, states, today) {
    const day = today === undefined ? todayIndex() : today;
    let due = 0;
    for (const card of cards) if (isDue(states && states[card.id], day)) due += 1;
    return due;
  }

  /*
   * Keep the stored map under the cap.
   *
   * When it has to drop something it drops the cards scheduled furthest in the
   * future — the ones the learner has repeatedly got right. That is the least
   * damaging thing to forget: those cards were not going to be asked for
   * months, and if the schedule for one is lost it simply returns to the pool.
   * Dropping by least-recently-seen instead would throw away exactly the
   * struggling cards the schedule exists to protect.
   */
  function prune(map, cap) {
    const limit = cap || CAP;
    const ids = Object.keys(map || {});
    if (ids.length <= limit) return map;
    ids.sort((a, b) => (map[b].due || 0) - (map[a].due || 0));
    const next = { ...map };
    for (const id of ids.slice(0, ids.length - limit)) delete next[id];
    return next;
  }

  global.ParceroSRS = {
    MS_PER_DAY, EASE_START, EASE_MIN, EASE_MAX, FIRST, SECOND, MAX_INTERVAL, CAP,
    todayIndex, fresh, review, isDue, isLearned, orderQueue, dueCount, prune
  };
})(typeof window !== "undefined" ? window : globalThis);
