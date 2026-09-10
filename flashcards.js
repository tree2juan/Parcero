/*
 * Flashcards: the swipe surface over the derived decks.
 *
 * The deck itself is built in data/flashcards.js from lessons, verbs and
 * fluency phrases, so nothing here knows anything about content. This file is
 * only the gesture, the queue, and the round.
 *
 * The round is deliberately not spaced repetition. A card you did not know is
 * pushed to the back of the same round and comes back until you know it, so a
 * set ends when the whole set has stuck rather than when you have simply seen
 * every card once.
 */
(function () {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  if (!$("#deck-card") || typeof flashcardSets !== "function") return;

  const STORE = "parcero-flashcards";
  /*
   * The schedule lives in its own key rather than inside STORE. STORE is a
   * small object rewritten wholesale on every set change; the schedule is a
   * large map rewritten on every swipe, and merging the two would mean
   * reserialising one every time the other changed.
   */
  const SRS_STORE = "parcero-srs";
  /* srs.js is loaded before this file, but the deck has to survive it being
     missing the same way it survives a missing data file. */
  const srs = typeof ParceroSRS === "object" ? ParceroSRS : null;
  const answers = typeof ParceroAnswer === "object" ? ParceroAnswer : null;

  /* Gesture feel. TAP_SLOP separates a tap-to-flip from the start of a swipe. */
  const TAP_SLOP = 6;
  const SWIPE_RATIO = 0.28;
  const SWIPE_CEILING = 150;
  const FLICK_SPEED = 0.6;
  const FLICK_DISTANCE = 28;

  /* Long enough to read an answer you had not seen; near-instant if you had. */
  const HOLD_UNSEEN = 900;
  const LEAVE = 260;

  const KIND_LABELS = {
    vocabulary: "Vocabulary",
    meaning: "Meaning",
    pronunciation: "Pronunciation",
    example: "In use",
    region: "Where it is said",
    context: "Context",
    address: "Tú or usted",
    culture: "Culture",
    pitfall: "Pitfall",
    variation: "Another way",
    practice: "In context",
    verb: "Verb",
    lexicon: "Word",
    fluency: "Fluency",
    slang: "Slang",
    mature: "Recognition only",
    signal: "Signal"
  };

  /*
   * i18n.js loads before this file, but the app must not break if it does not.
   * Every lookup falls back to the English wording the markup already ships.
   */
  const FALLBACK = {
    "deck.showAnswer": "Show answer",
    "deck.hideAnswer": "Hide answer",
    "deck.badge.known": "Knew it",
    "deck.badge.again": "Review again",
    "deck.hint.swipe": "Swipe left if you knew it, right to see it again",
    "deck.hint.tap": "Tap to show the answer",
    "deck.readMore": "Read the rest",
    "deck.readLess": "Show less"
  };

  function t(key, values) {
    if (window.ParceroI18n) {
      const text = window.ParceroI18n.t(key, currentDirection(), values);
      if (text !== key) return text;
    }
    return FALLBACK[key] !== undefined ? FALLBACK[key] : key;
  }

  function tp(key, count, values) {
    return window.ParceroI18n
      ? window.ParceroI18n.tPlural(key, currentDirection(), count, values)
      : t(`${key}.${Math.abs(count) === 1 ? "one" : "other"}`, { count, ...(values || {}) });
  }

  /* A key the table has never seen leaves the authored wording in place. */
  const tOr = (key, fallback) => {
    const text = t(key);
    return text === key ? fallback : text;
  };

  const topicTitle = (set) => (set.titleKey
    ? t(set.titleKey, { level: set.levelKey ? tOr(set.levelKey, set.level) : set.level })
    : set.title);

  const setLabel = (set) => (set.total === 1
    ? tp("deck.label.cards", set.cards.length)
    : tp("deck.label.set", set.cards.length, { index: set.index + 1, total: set.total }));

  const CARD_SHELL = `
    <div class="flashcard-face">
      <span class="flashcard-tag"></span>
      <p class="flashcard-ask"></p>
      <p class="flashcard-front"></p>
      <div class="flashcard-answer" hidden>
        <p class="flashcard-back" id="deck-card-back"></p>
        <p class="flashcard-note"></p>
      </div>
      <p class="flashcard-hint"></p>
    </div>
    <span class="swipe-badge swipe-badge-known" aria-hidden="true">Knew it</span>
    <span class="swipe-badge swipe-badge-again" aria-hidden="true">Review again</span>`;

  const deck = {
    direction: null,
    sets: [],
    setId: null,
    queue: [],
    known: new Set(),
    schedule: {},
    typing: false,
    typedFor: null,
    repeats: 0,
    revealed: false,
    expanded: false,
    shownCardId: null,
    busy: false
  };

  let drag = null;
  let timer = null;

  const stillMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const currentDirection = () => (document.querySelector("input[name=direction]:checked") || {}).value || "es";
  const currentSet = () => deck.sets.find((set) => set.id === deck.setId) || null;
  const currentCard = () => deck.queue[0] || null;

  function readStore() {
    try {
      return JSON.parse(localStorage.getItem(STORE) || "null") || {};
    } catch {
      return {};
    }
  }

  function writeStore(patch) {
    const next = { ...readStore(), ...patch };
    try {
      localStorage.setItem(STORE, JSON.stringify(next));
    } catch {
      /* Storage can be full or blocked; the round still works without it. */
    }
    return next;
  }

  const completedSets = () => new Set(readStore().completed || []);

  /* ---------- the review schedule ---------- */

  function readSchedule() {
    if (!srs) return {};
    try {
      const raw = JSON.parse(localStorage.getItem(SRS_STORE) || "null");
      return (raw && typeof raw === "object" && raw.cards) || {};
    } catch {
      return {};
    }
  }

  function writeSchedule() {
    if (!srs) return;
    try {
      deck.schedule = srs.prune(deck.schedule, srs.CAP);
      localStorage.setItem(SRS_STORE, JSON.stringify({ v: 1, cards: deck.schedule }));
    } catch {
      /* Full or blocked storage costs the schedule, not the round. */
    }
  }

  /* How many cards in a set want reviewing today. Unseen counts as due, so an
     untouched set reports its real size rather than zero. */
  function dueIn(set) {
    if (!srs || !set) return set ? set.cards.length : 0;
    return srs.dueCount(set.cards, deck.schedule, srs.todayIndex());
  }

  /* ---------- building the decks ---------- */

  /*
   * A data file that fails to load must not take the deck down with it.
   *
   * Two different failures hide behind one name. index.html carries
   * id="lessons", and named access on window means `lessons` is that <section>
   * whenever data/lessons.js is missing — so a fallback keyed on "undefined"
   * never fires and the deck dies on "lessons is not iterable". But that
   * rescue is the id's doing, not ours: `curriculum` and `fluencyItems` have
   * no matching element, so for them a missing data file leaves the name
   * genuinely undeclared and a bare read throws instead.
   *
   * Reading through a thunk covers both without asking which is which. The
   * ReferenceError is the undeclared case; the shape check is the element
   * case. Neither depends on an id in someone else's markup staying put.
   *
   * Matched on `name` rather than `instanceof`, because an error raised in
   * another realm — a vm context in the tests, say — is not an instance of
   * this realm's ReferenceError however much it looks like one.
   */
  const arrayFrom = (read) => {
    let value;
    try {
      value = read();
    } catch (error) {
      if (error && error.name === "ReferenceError") return [];
      throw error;
    }
    return Array.isArray(value) ? value : [];
  };

  /*
   * One reader for the age gate, so the deck and the library cannot disagree
   * about it. localStorage can be unavailable or throw in private browsing
   * modes; if we cannot read the switch we treat it as off, because the failure
   * we can afford is a missing deck, not gated content shown to someone who
   * never opened the gate.
   */
  function matureAllowed() {
    try {
      return localStorage.getItem("parcero-mature-enabled") === "true";
    } catch (error) {
      return false;
    }
  }

  function rebuild(preferredSetId) {
    deck.direction = currentDirection();
    deck.sets = flashcardSets(deck.direction, {
      lessons: arrayFrom(() => lessons),
      curriculum: arrayFrom(() => curriculum),
      fluencyItems: arrayFrom(() => fluencyItems),
      lexiconItems: arrayFrom(() => lexiconItems),
      slangItems: arrayFrom(() => slangItems),
      matureItems: arrayFrom(() => matureItems),
      matureSignals: arrayFrom(() => matureSignals),
      /*
       * The same switch the library gate writes. Read at rebuild time rather
       * than captured once, so opening the gate and coming back to the deck
       * shows the new decks without a reload - and so closing it in another tab
       * removes them again.
       */
      matureEnabled: matureAllowed()
    });
    renderTopics();
    const wanted = [preferredSetId, deck.setId, readStore().setId].find((id) => deck.sets.some((set) => set.id === id));
    startSet(wanted || (deck.sets[0] && deck.sets[0].id));
  }

  function renderTopics() {
    const select = $("#deck-topic");
    select.textContent = "";
    let group = null;
    let holder = null;
    const seen = new Set();
    for (const set of deck.sets) {
      if (seen.has(set.topicId)) continue;
      seen.add(set.topicId);
      if (set.groupKey !== group) {
        group = set.groupKey;
        holder = document.createElement("optgroup");
        holder.label = t(group);
        select.append(holder);
      }
      const option = document.createElement("option");
      option.value = set.topicId;
      option.textContent = topicTitle(set);
      (holder || select).append(option);
    }
  }

  function renderSets(topicId) {
    const select = $("#deck-set");
    const done = completedSets();
    select.textContent = "";
    for (const set of deck.sets.filter((item) => item.topicId === topicId)) {
      const option = document.createElement("option");
      option.value = set.id;
      const label = setLabel(set);
      /* A finished set that has come back around should say so. "done" is
         about attendance; "due" is about what the schedule actually wants. */
      const due = dueIn(set);
      option.textContent = done.has(set.id) && !due
        ? t("deck.label.done", { label })
        : (due && due < set.cards.length ? t("deck.label.due", { label, due }) : label);
      select.append(option);
    }
  }

  /* ---------- the round ---------- */

  function startSet(setId) {
    clearTimeout(timer);
    const set = deck.sets.find((item) => item.id === setId) || deck.sets[0];
    if (!set) return;
    deck.setId = set.id;
    deck.schedule = readSchedule();
    /* Due first, then never-seen, then the rest — so a returning learner meets
       what they are about to forget instead of card one again. */
    deck.queue = srs ? srs.orderQueue(set.cards, deck.schedule, srs.todayIndex()) : set.cards.slice();
    deck.known = new Set();
    deck.repeats = 0;
    deck.revealed = false;
    deck.busy = false;
    drag = null;
    $("#deck-topic").value = set.topicId;
    renderSets(set.topicId);
    $("#deck-set").value = set.id;
    writeStore({ setId: set.id });
    $("#deck-live").textContent = "";
    resetTransform();
    paint();
  }

  function nextSet() {
    const index = deck.sets.findIndex((set) => set.id === deck.setId);
    return index >= 0 ? deck.sets[index + 1] || null : null;
  }

  function paint() {
    const set = currentSet();
    const total = set ? set.cards.length : 0;
    const card = currentCard();
    const finished = Boolean(set) && !card;
    $("#deck-progress").textContent = t("deck.progress", { known: deck.known.size, total });
    $("#deck-bar").style.width = total ? `${Math.round((deck.known.size / total) * 100)}%` : "0%";
    $("#deck-tally").textContent = finished
      ? t("deck.tally.none")
      : tp("deck.tally", deck.queue.length) + (deck.repeats ? t("deck.tally.cycled", { count: deck.repeats }) : "");
    $("#deck-card").hidden = finished;
    $("#deck-summary").hidden = !finished;
    $("#deck-known").disabled = finished;
    $("#deck-flip").disabled = finished;
    $("#deck-review").disabled = finished;
    if (finished) {
      $("#deck-flip").textContent = t("deck.showAnswer");
      paintSummary(total);
    } else if (card) {
      paintCard(card);
    }
    paintTyping(card, finished);
  }

  /*
   * Show the typing form only when it can honestly be used.
   *
   * The toggle is a request, not a guarantee: a card whose back is a full
   * example sentence is not something anyone should be asked to reproduce
   * from memory, so those cards fall back to the flip-and-swipe round and say
   * so, rather than presenting a box the learner cannot win.
   */
  function paintTyping(card, finished) {
    const form = $("#deck-type");
    if (!form) return;
    const wanted = deck.typing && answers && !finished && Boolean(card);
    const usable = wanted && answers.typeable(card);
    form.hidden = !wanted;
    if (!wanted) return;
    const input = $("#deck-answer");
    const note = $("#deck-verdict");
    $("#deck-check").disabled = !usable;
    input.disabled = !usable;
    if (card && card.id !== deck.typedFor) {
      deck.typedFor = card.id;
      input.value = "";
      note.textContent = usable ? "" : t("deck.typed.unavailable");
      setLang(input, card.backLang || null);
      if (usable) {
        try {
          input.focus({ preventScroll: true });
        } catch {
          /* Focus can be refused while the card is animating; harmless. */
        }
      }
    }
  }

  /*
   * Grade what was typed and feed the ordinary verdict path.
   *
   * "close" counts as known on purpose. A missing accent or a transposed
   * letter is a spelling slip, not a failure of recall, and sending the card
   * back to the start of the schedule for it would train the learner to fear
   * the keyboard rather than the vocabulary. They are still shown the correct
   * form, which is the part that teaches.
   */
  function checkTyped() {
    const card = currentCard();
    if (!card || deck.busy || !answers || !answers.typeable(card)) return;
    const result = answers.check($("#deck-answer").value, card.back, card.alternatives);
    const note = $("#deck-verdict");
    const expected = result.expected || card.back;
    if (result.verdict === "exact") note.textContent = t("deck.typed.exact");
    else if (result.empty) {
      note.textContent = t("deck.typed.empty");
      return;
    } else if (result.verdict === "close") {
      /* "enye" means two different things depending on the verdict: a missing
         tilde on a word that is not otherwise real, or a genuinely different
         word. Only the first reaches here. */
      const key = result.reason === "enye" ? "deck.typed.enyeClose" : `deck.typed.${result.reason}`;
      note.textContent = t(key, { expected });
    } else note.textContent = t(result.reason === "enye" ? "deck.typed.enye" : "deck.typed.wrong", { expected });

    deck.revealed = true;
    commit(card, result.verdict === "wrong" ? "again" : "known");
  }

  function setLang(element, lang) {
    if (lang) element.setAttribute("lang", lang);
    else element.removeAttribute("lang");
  }

  function paintCard(card) {
    const root = $("#deck-card");
    if (!root.querySelector(".flashcard-face")) root.innerHTML = CARD_SHELL;
    root.querySelector(".flashcard-tag").textContent = tOr(`deck.kind.${card.kind}`, KIND_LABELS[card.kind] || card.kind);
    root.querySelector(".flashcard-ask").textContent = t(card.askKey, card.askValues);
    root.querySelector(".swipe-badge-known").textContent = t("deck.badge.known");
    root.querySelector(".swipe-badge-again").textContent = t("deck.badge.again");
    const front = root.querySelector(".flashcard-front");
    front.textContent = card.front;
    setLang(front, card.frontLang);
    const back = root.querySelector(".flashcard-back");
    back.textContent = card.back;
    setLang(back, card.backLang);
    const note = root.querySelector(".flashcard-note");
    note.textContent = card.note || "";
    note.hidden = !card.note;
    root.querySelector(".flashcard-answer").hidden = !deck.revealed;
    root.querySelector(".flashcard-hint").textContent = deck.revealed
      ? t("deck.hint.swipe")
      : t("deck.hint.tap");
    root.dataset.kind = card.kind;
    root.classList.toggle("is-revealed", deck.revealed);
    $("#deck-flip").textContent = deck.revealed ? t("deck.hideAnswer") : t("deck.showAnswer");
    paintOverflow(back, card);
  }

  /*
   * Cards derived from prose — a culture note, why a mistake fails — run far
   * longer than a vocabulary term, so the answer is clamped to a few lines with
   * a disclosure rather than allowed to grow the card without limit.
   *
   * Whether a card needs the control is measured after paint rather than
   * guessed from a character count, because the same text wraps to four lines
   * on a laptop and nine on a phone. Measuring asks the question that actually
   * matters: is any of this hidden right now.
   *
   * The control is a sibling of the card, not a child, because the card carries
   * role="button" and ARIA treats the descendants of a button as presentational
   * — a button nested inside it would be unreachable for a screen reader. As a
   * sibling with aria-controls it is an ordinary disclosure.
   */
  function paintOverflow(back, card) {
    const toggle = $("#deck-expand");
    if (!toggle) return;
    if (deck.shownCardId !== card.id) {
      deck.shownCardId = card.id;
      deck.expanded = false;
    }
    back.classList.toggle("is-clamped", !deck.expanded);
    const overflowing = deck.expanded || back.scrollHeight > back.clientHeight + 1;
    const show = deck.revealed && overflowing;
    toggle.hidden = !show;
    if (!show) {
      back.classList.remove("is-clamped");
      return;
    }
    toggle.textContent = deck.expanded ? t("deck.readLess") : t("deck.readMore");
    toggle.setAttribute("aria-expanded", deck.expanded ? "true" : "false");
  }

  function paintSummary(total) {
    const set = currentSet();
    const clean = deck.repeats === 0;
    $("#deck-summary-title").textContent = clean ? t("deck.summary.clean") : t("deck.summary.repeat");
    $("#deck-summary-detail").textContent = clean
      ? t("deck.summary.cleanDetail", { total })
      : t("deck.summary.repeatDetail", { total, repeats: deck.repeats });
    const following = nextSet();
    $("#deck-next").hidden = !following;
    if (following) {
      $("#deck-next").textContent = set && following.topicId === set.topicId
        ? t("deck.next.set", { index: following.index + 1, total: following.total })
        : t("deck.next.topic", { title: topicTitle(following) });
    }
  }

  function markComplete() {
    const done = completedSets();
    done.add(deck.setId);
    writeStore({ completed: [...done] });
    renderSets(currentSet().topicId);
    $("#deck-set").value = deck.setId;
  }

  function flip(force) {
    if (deck.busy || !currentCard()) return;
    deck.revealed = force === undefined ? !deck.revealed : Boolean(force);
    paintCard(currentCard());
  }

  /* ---------- gesture painting ---------- */

  function swipeLimit() {
    const width = $("#deck-card").offsetWidth || 320;
    return Math.max(56, Math.min(SWIPE_CEILING, width * SWIPE_RATIO));
  }

  function paintOffset(dx) {
    const root = $("#deck-card");
    const ratio = Math.max(-1, Math.min(1, dx / swipeLimit()));
    root.style.transform = `translateX(${dx}px) rotate(${ratio * 5}deg)`;
    root.style.setProperty("--swipe-known", String(Math.max(0, -ratio)));
    root.style.setProperty("--swipe-again", String(Math.max(0, ratio)));
    root.dataset.swipe = ratio <= -1 ? "known" : ratio >= 1 ? "again" : "";
  }

  function resetTransform() {
    const root = $("#deck-card");
    root.style.transform = "";
    root.style.removeProperty("--swipe-known");
    root.style.removeProperty("--swipe-again");
    root.dataset.swipe = "";
  }

  /*
   * A verdict always shows the answer before the card leaves, so swiping
   * straight past a card you thought you knew still teaches you something.
   */
  function answer(verdict) {
    const card = currentCard();
    if (!card || deck.busy) return;
    deck.busy = true;
    const root = $("#deck-card");
    const seen = deck.revealed;
    const sign = verdict === "known" ? -1 : 1;
    if (!seen) {
      deck.revealed = true;
      paintCard(card);
    }
    root.dataset.swipe = verdict;
    root.style.setProperty("--swipe-known", verdict === "known" ? "1" : "0");
    root.style.setProperty("--swipe-again", verdict === "again" ? "1" : "0");
    root.style.transform = `translateX(${sign * swipeLimit()}px) rotate(${sign * 5}deg)`;
    const hold = seen ? 0 : HOLD_UNSEEN;
    timer = setTimeout(() => {
      root.classList.add("is-leaving");
      root.style.transform = `translateX(${sign * 130}%) rotate(${sign * 14}deg)`;
      timer = setTimeout(() => commit(card, verdict), stillMotion() ? 0 : LEAVE);
    }, hold);
  }

  function commit(card, verdict) {
    const root = $("#deck-card");
    const total = currentSet() ? currentSet().cards.length : 0;
    root.classList.remove("is-leaving");
    root.classList.add("is-instant");
    resetTransform();
    deck.queue.shift();
    if (srs) {
      deck.schedule[card.id] = srs.review(deck.schedule[card.id], verdict, srs.todayIndex());
      writeSchedule();
    }
    if (verdict === "known") {
      deck.known.add(card.id);
    } else {
      deck.queue.push(card);
      deck.repeats += 1;
    }
    deck.revealed = false;
    deck.busy = false;
    if (!deck.queue.length) markComplete();
    paint();
    void root.offsetWidth;
    root.classList.remove("is-instant");
    $("#deck-live").textContent = verdict === "known"
      ? t("deck.live.known", { known: deck.known.size, total })
      : tp("deck.live.again", deck.queue.length);
  }

  /* ---------- wiring ---------- */

  const typedToggle = $("#deck-typed");
  const typeForm = $("#deck-type");
  if (typedToggle && typeForm) {
    deck.typing = Boolean(readStore().typing);
    typedToggle.checked = deck.typing;
    typedToggle.addEventListener("change", () => {
      deck.typing = typedToggle.checked;
      deck.typedFor = null;
      writeStore({ typing: deck.typing });
      paint();
    });
    typeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      checkTyped();
    });
  }

  const card = $("#deck-card");

  card.addEventListener("pointerdown", (event) => {
    if (deck.busy || !currentCard() || (event.button !== undefined && event.button > 0)) return;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, dx: 0, moved: false, at: Date.now() };
    card.classList.add("is-dragging");
    try {
      card.setPointerCapture(event.pointerId);
    } catch {
      /* Pointer capture is a nicety; the drag still tracks without it. */
    }
  });

  card.addEventListener("pointermove", (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    drag.dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!drag.moved && Math.abs(drag.dx) < TAP_SLOP && Math.abs(dy) < TAP_SLOP) return;
    drag.moved = true;
    paintOffset(drag.dx);
  });

  card.addEventListener("pointerup", (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const { dx, moved, at } = drag;
    drag = null;
    card.classList.remove("is-dragging");
    try {
      card.releasePointerCapture(event.pointerId);
    } catch {
      /* Already released, for instance because the gesture was cancelled. */
    }
    if (!moved) {
      resetTransform();
      flip();
      return;
    }
    const speed = Math.abs(dx) / Math.max(1, Date.now() - at);
    const past = Math.abs(dx) >= swipeLimit() || (speed > FLICK_SPEED && Math.abs(dx) > FLICK_DISTANCE);
    if (!past) {
      resetTransform();
      return;
    }
    answer(dx < 0 ? "known" : "again");
  });

  /* A vertical scroll steals the pointer: that is a scroll, not a verdict. */
  card.addEventListener("pointercancel", () => {
    drag = null;
    card.classList.remove("is-dragging");
    if (!deck.busy) resetTransform();
  });

  card.addEventListener("keydown", (event) => {
    if (deck.busy || !currentCard()) return;
    if (event.key === " " || event.key === "Spacebar" || event.key === "Enter") {
      event.preventDefault();
      flip();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      answer("known");
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      answer("again");
    }
  });

  $("#deck-flip").addEventListener("click", () => flip());
  $("#deck-expand").addEventListener("click", () => {
    deck.expanded = !deck.expanded;
    paint();
    $("#deck-expand").focus();
  });
  $("#deck-known").addEventListener("click", () => answer("known"));
  $("#deck-review").addEventListener("click", () => answer("again"));
  $("#deck-reset").addEventListener("click", () => {
    startSet(deck.setId);
    $("#deck-live").textContent = t("deck.live.reset");
    card.focus();
  });
  $("#deck-again").addEventListener("click", () => {
    startSet(deck.setId);
    card.focus();
  });
  $("#deck-next").addEventListener("click", () => {
    const following = nextSet();
    if (following) startSet(following.id);
    card.focus();
  });
  $("#deck-topic").addEventListener("change", (event) => {
    const first = deck.sets.find((set) => set.topicId === event.target.value);
    if (first) startSet(first.id);
  });
  $("#deck-set").addEventListener("change", (event) => startSet(event.target.value));

  document.querySelectorAll("input[name=direction]").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) rebuild(deck.setId);
    });
  });

  /* Reset progress clears the whole app, flashcards included. */
  const resetProgress = $("#reset-progress");
  if (resetProgress) {
    resetProgress.addEventListener("click", () => {
      try {
        localStorage.removeItem(STORE);
      } catch {
        /* Nothing stored means nothing to clear. */
      }
      deck.setId = null;
      rebuild();
    });
  }

  rebuild();

  /*
   * The only thing this module exposes. The library's age gate needs to tell
   * the deck that the answer to matureAllowed() just changed; without this the
   * new decks would not appear until a reload, which reads as the gate having
   * silently failed.
   */
  window.ParceroFlashcards = { refresh: () => rebuild(deck.setId) };
})();
