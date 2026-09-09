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
    context: "Context",
    practice: "In context",
    verb: "Verb",
    fluency: "Fluency"
  };

  const CARD_SHELL = `
    <div class="flashcard-face">
      <span class="flashcard-tag"></span>
      <p class="flashcard-ask"></p>
      <p class="flashcard-front"></p>
      <div class="flashcard-answer" hidden>
        <p class="flashcard-back"></p>
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
    repeats: 0,
    revealed: false,
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

  /* ---------- building the decks ---------- */

  function rebuild(preferredSetId) {
    deck.direction = currentDirection();
    deck.sets = flashcardSets(deck.direction, {
      lessons: typeof lessons === "undefined" ? [] : lessons,
      curriculum: typeof curriculum === "undefined" ? [] : curriculum,
      fluencyItems: typeof fluencyItems === "undefined" ? [] : fluencyItems
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
      if (set.group !== group) {
        group = set.group;
        holder = document.createElement("optgroup");
        holder.label = group;
        select.append(holder);
      }
      const option = document.createElement("option");
      option.value = set.topicId;
      option.textContent = set.title;
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
      option.textContent = done.has(set.id) ? `${set.label} · done` : set.label;
      select.append(option);
    }
  }

  /* ---------- the round ---------- */

  function startSet(setId) {
    clearTimeout(timer);
    const set = deck.sets.find((item) => item.id === setId) || deck.sets[0];
    if (!set) return;
    deck.setId = set.id;
    deck.queue = set.cards.slice();
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
    $("#deck-progress").textContent = `${deck.known.size} of ${total} known`;
    $("#deck-bar").style.width = total ? `${Math.round((deck.known.size / total) * 100)}%` : "0%";
    $("#deck-tally").textContent = finished
      ? "Nothing left in this round."
      : `${deck.queue.length} still in this round${deck.repeats ? ` · ${deck.repeats} cycled back` : ""}`;
    $("#deck-card").hidden = finished;
    $("#deck-summary").hidden = !finished;
    $("#deck-known").disabled = finished;
    $("#deck-flip").disabled = finished;
    $("#deck-review").disabled = finished;
    if (finished) {
      $("#deck-flip").textContent = "Show answer";
      paintSummary(total);
    } else if (card) {
      paintCard(card);
    }
  }

  function setLang(element, lang) {
    if (lang) element.setAttribute("lang", lang);
    else element.removeAttribute("lang");
  }

  function paintCard(card) {
    const root = $("#deck-card");
    if (!root.querySelector(".flashcard-face")) root.innerHTML = CARD_SHELL;
    root.querySelector(".flashcard-tag").textContent = KIND_LABELS[card.kind] || card.kind;
    root.querySelector(".flashcard-ask").textContent = card.ask;
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
      ? "Swipe left if you knew it, right to see it again"
      : "Tap to show the answer";
    root.dataset.kind = card.kind;
    root.classList.toggle("is-revealed", deck.revealed);
    $("#deck-flip").textContent = deck.revealed ? "Hide answer" : "Show answer";
  }

  function paintSummary(total) {
    const set = currentSet();
    const clean = deck.repeats === 0;
    $("#deck-summary-title").textContent = clean ? "Clean run." : "That set has stuck.";
    $("#deck-summary-detail").textContent = clean
      ? `All ${total} cards, first time through.`
      : `${total} cards, and ${deck.repeats} came back around before you had them.`;
    const following = nextSet();
    $("#deck-next").hidden = !following;
    if (following) {
      $("#deck-next").textContent = set && following.topicId === set.topicId
        ? `Next set: ${following.index + 1} of ${following.total} →`
        : `Next topic: ${following.title} →`;
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
      ? `Knew it. ${deck.known.size} of ${total} known.`
      : `Sent back for review. ${deck.queue.length} cards still in this round.`;
  }

  /* ---------- wiring ---------- */

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
  $("#deck-known").addEventListener("click", () => answer("known"));
  $("#deck-review").addEventListener("click", () => answer("again"));
  $("#deck-reset").addEventListener("click", () => {
    startSet(deck.setId);
    $("#deck-live").textContent = "Set reset. Every card is back in the round.";
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
})();
