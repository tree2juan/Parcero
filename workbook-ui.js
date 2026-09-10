/*
 * The workbook on screen, and on paper.
 *
 * workbook.js decides what a module's workbook contains. This file is only
 * concerned with putting it on the page and getting it through a printer,
 * which turns out to be most of the work: a workbook that looks right in a
 * browser and prints as forty pages of navigation chrome is not a workbook.
 *
 * Three decisions worth knowing about.
 *
 * The answer key is hidden by default and printed at the back. A student
 * working through an exercise with the answer visible two inches away is not
 * practicing, so the toggle exists for the person marking, not the person
 * learning. On paper the key is always included, because a printed sheet
 * cannot be toggled and a workbook you cannot mark is half a workbook.
 *
 * Blank space is content here. A gap-fill with nowhere to write is a reading
 * exercise. Every question that expects a written answer gets a ruled line
 * sized to the answer it is waiting for, which is why the writing lines are
 * generated rather than fixed.
 *
 * Nothing is cached. The build is deterministic — the same module and
 * direction always produce the same workbook, seeded from the lesson id — so
 * rebuilding on every change costs a few milliseconds and removes any chance
 * of the screen and the printed copy disagreeing.
 */
(function () {
  "use strict";

  const $ = (selector) => document.querySelector(selector);

  const direction = () => (document.querySelector("input[name=direction]:checked") || {}).value || "es";

  /*
   * The interface language is the opposite of the language being studied, the
   * same rule i18n.js follows: someone working through the Spanish lessons
   * reads an English workbook.
   */
  const uiLang = () => (direction() === "es" ? "en" : "es");

  /*
   * Fallback strings for a page loaded without i18n.js. Kept in English only,
   * matching review-ui.js: the fallback exists so a missing script degrades to
   * readable text rather than raw keys, not to be a second translation table
   * that can drift from the first.
   */
  const EN = {
    "workbook.unit": "Unit {n}",
    "workbook.answer": "Answer",
    "workbook.meaning": "Meaning",
    "workbook.term": "Word or phrase",
    "workbook.literal": "Word for word",
    "workbook.useWhen": "Use it when",
    "workbook.translation": "Translation",
    "workbook.sayInstead": "Say instead",
    "workbook.empty": "Pick a module above and the workbook will build itself here.",
    "workbook.lessonCount": "{count} lessons in this module",
    "workbook.showAnswers": "Show answer key",
    "workbook.hideAnswers": "Hide answer key",
    "workbook.section.overview": "Before you start",
    "workbook.section.canDo": "By the end of this module I can…",
    "workbook.section.corePhrases": "The phrases this module is built on",
    "workbook.section.verbs": "Verbs you will practice",
    "workbook.section.confidence": "How confident do you feel right now? Circle one.",
    "workbook.section.setting": "The situation",
    "workbook.section.dialogue": "Model conversation",
    "workbook.section.pronunciation": "Say it out loud",
    "workbook.section.vocabulary": "Words and phrases",
    "workbook.section.culture": "What is going on underneath",
    "workbook.section.pitfalls": "Mistakes worth avoiding",
    "workbook.section.variations": "Other ways to say it",
    "workbook.section.comprehension": "Check you followed it",
    "workbook.section.activities": "Practice",
    "workbook.section.glossary": "Module glossary",
    "workbook.section.answerKey": "Answer key",
    "workbook.section.vocabBank": "Words I want to remember",
    "workbook.section.checkpoint": "Checkpoint",
    "workbook.checkpoint.lead": "Come back to this after you have worked through the module.",
    "workbook.checkpoint.notYet": "Not yet",
    "workbook.checkpoint.withSupport": "With support",
    "workbook.checkpoint.independently": "Independently",
    "workbook.vocabBank.lead": "Write down the words you had to look up, and the sentence you met them in.",
    "workbook.activity.match": "Match each word to its meaning.",
    "workbook.activity.gapFill": "Fill in the missing words.",
    "workbook.activity.correction": "Each of these is wrong. Write what you would say instead.",
    "workbook.activity.choice": "Choose the best answer.",
    "workbook.activity.order": "Put the conversation back in order.",
    "workbook.activity.register": "Tú or usted? Decide, then say why.",
    "workbook.read.who": "Who is talking, and what do they want from each other?",
    "workbook.read.what": "What is happening in this conversation?",
    "workbook.read.when": "When does this take place?",
    "workbook.read.where": "Where are they?",
    "workbook.read.why": "Why does it matter to them?"
  };

  const fill = (text, values) =>
    String(text).replace(/\{(\w+)\}/g, (whole, name) =>
      (values && values[name] !== undefined ? String(values[name]) : whole));

  const t = (key, values) => (window.ParceroI18n
    ? window.ParceroI18n.t(key, direction(), values)
    : fill(EN[key] === undefined ? key : EN[key], values));

  const escapeChars = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  const esc = (value) => (value === null || value === undefined
    ? ""
    : String(value).replace(/[&<>"]/g, (char) => escapeChars[char]));

  /*
   * The language each half of the page is in.
   *
   * Getting this wrong is not cosmetic: a screen reader reading Spanish with
   * English phonology is unintelligible, and so is the reverse. `lang` marks
   * the language being studied, `home` the one the learner already has.
   */
  const lang = () => direction();
  const home = () => uiLang();

  /* A ruled line to write on, wide enough for the answer it is waiting for. */
  const writingLine = (chars) => {
    const width = Math.min(60, Math.max(12, Math.round(Number(chars) || 24)));
    return `<span class="wb-write" style="min-width:${width}ch" aria-hidden="true"></span>`;
  };

  const section = (titleKey, body, extraClass) => (body
    ? `<section class="wb-section ${extraClass || ""}"><h3>${esc(t(titleKey))}</h3>${body}</section>`
    : "");

  function overviewSection(book) {
    const canDo = book.overview.canDo
      .map((line) => `<li><span class="wb-box" aria-hidden="true"></span>${esc(line)}</li>`)
      .join("");
    const phrases = book.overview.corePhrases
      .map((line) => `<li lang="${lang()}">${esc(line)}</li>`)
      .join("");
    const verbs = book.overview.verbs
      .map((verb) => `<span class="tag" lang="${lang()}">${esc(verb)}</span>`)
      .join("");
    const confidence = [0, 1, 2, 3, 4, 5]
      .map((n) => `<span class="wb-dot" aria-hidden="true">${n}</span>`)
      .join("");
    return `<section class="wb-section wb-overview">
      <h3>${esc(t("workbook.section.overview"))}</h3>
      <h4>${esc(t("workbook.section.canDo"))}</h4>
      <ul class="wb-checklist">${canDo}</ul>
      <h4>${esc(t("workbook.section.corePhrases"))}</h4>
      <ul class="wb-phrases">${phrases}</ul>
      <h4>${esc(t("workbook.section.verbs"))}</h4>
      <p class="wb-tags">${verbs}</p>
      <h4>${esc(t("workbook.section.confidence"))}</h4>
      <p class="wb-scale">${confidence}</p>
    </section>`;
  }

  function settingSection(unit) {
    const order = ["who", "what", "when", "where", "why"];
    const rows = order
      .filter((key) => unit.setting && unit.setting[key])
      .map((key) => `<div class="wb-setting-row"><dt>${esc(t(`workbook.read.${key}`))}</dt><dd>${esc(unit.setting[key])}</dd></div>`)
      .join("");
    return rows ? section("workbook.section.setting", `<dl class="wb-setting">${rows}</dl>`) : "";
  }

  function dialogueSection(unit) {
    const rows = unit.dialogue.map((line) => `<div class="wb-line">
      <p class="wb-speaker">${esc(line.speaker)}</p>
      <p class="wb-target" lang="${lang()}">${esc(line.target)}</p>
      <p class="wb-translation" lang="${home()}">${esc(line.translation)}</p>
    </div>`).join("");
    return section("workbook.section.dialogue", `<div class="wb-dialogue">${rows}</div>`);
  }

  function pronunciationSection(unit) {
    if (!unit.pronunciation || !unit.pronunciation.length) return "";
    const rows = unit.pronunciation.map((line) => `<li>
      <span lang="${lang()}">${esc(line.target)}</span>
      <span class="wb-say">${esc(line.pronunciation)}</span>
    </li>`).join("");
    return section("workbook.section.pronunciation", `<ul class="wb-pronounce">${rows}</ul>`);
  }

  function vocabularySection(unit) {
    if (!unit.vocabulary || !unit.vocabulary.length) return "";
    const rows = unit.vocabulary.map((item) => `<tr>
      <th scope="row" lang="${lang()}">${esc(item.term)}</th>
      <td lang="${home()}">${esc(item.literal)}</td>
      <td>${esc(item.useWhen)}</td>
    </tr>`).join("");
    return section("workbook.section.vocabulary", `<table class="wb-table">
      <thead><tr><th scope="col">${esc(t("workbook.term"))}</th><th scope="col">${esc(t("workbook.literal"))}</th><th scope="col">${esc(t("workbook.useWhen"))}</th></tr></thead>
      <tbody>${rows}</tbody></table>`);
  }

  function notesSection(unit) {
    const culture = (unit.culture || [])
      .map((note) => `<li><strong>${esc(note.label)}</strong> ${esc(note.body)}</li>`)
      .join("");
    const variations = (unit.variations || [])
      .map((v) => `<li><span lang="${lang()}">${esc(v.form)}</span> — ${esc(v.whenToUse)}</li>`)
      .join("");
    return [
      culture ? section("workbook.section.culture", `<ul class="wb-notes">${culture}</ul>`) : "",
      variations ? section("workbook.section.variations", `<ul class="wb-notes">${variations}</ul>`) : ""
    ].join("");
  }

  function comprehensionSection(unit) {
    if (!unit.comprehension || !unit.comprehension.length) return "";
    const rows = unit.comprehension.map((q) => `<li>
      <p>${esc(t(q.questionKey))}</p>
      ${writingLine(Math.max(28, String(q.answer || "").length / 2))}
    </li>`).join("");
    return section("workbook.section.comprehension", `<ol class="wb-questions">${rows}</ol>`);
  }

  /* Each activity kind needs its own shape on paper; a generic renderer would
     print a match exercise as an unanswerable list. */
  function activityBody(activity) {
    if (activity.kind === "match") {
      const left = activity.left
        .map((item) => `<li><span class="wb-n">${item.n}</span><span lang="${lang()}">${esc(item.term)}</span> ${writingLine(6)}</li>`)
        .join("");
      const right = activity.right
        .map((item) => `<li><span class="wb-n">${esc(item.letter)}</span><span lang="${home()}">${esc(item.literal)}</span></li>`)
        .join("");
      return `<div class="wb-match"><ul class="wb-match-left">${left}</ul><ul class="wb-match-right">${right}</ul></div>`;
    }
    if (activity.kind === "gap-fill") {
      return `<ol class="wb-questions">${activity.items.map((item) => `<li>
        <p class="wb-speaker">${esc(item.speaker)}</p>
        <p lang="${lang()}">${esc(item.text).replace("__________", writingLine(item.answer.length + 4))}</p>
        <p class="wb-translation" lang="${home()}">${esc(item.translation)}</p>
      </li>`).join("")}</ol>`;
    }
    if (activity.kind === "correction") {
      return `<ol class="wb-questions">${activity.items.map((item) => `<li>
        <p class="wb-wrong">${esc(item.mistake)}</p>
        ${writingLine(Math.max(20, item.answer.length))}
      </li>`).join("")}</ol>`;
    }
    if (activity.kind === "choice") {
      return `<ol class="wb-questions">${activity.items.map((item) => `<li>
        <p>${esc(item.prompt)}</p>
        <ul class="wb-choices">${item.choices.map((c) => `<li><span class="wb-n">${esc(c.letter)}</span>${esc(c.text)}</li>`).join("")}</ul>
      </li>`).join("")}</ol>`;
    }
    if (activity.kind === "order") {
      return `<ul class="wb-order">${activity.items.map((item) => `<li>
        <span class="wb-n">${esc(item.letter)}</span>
        <span class="wb-speaker">${esc(item.speaker)}</span>
        <span lang="${lang()}">${esc(item.text)}</span>
        ${writingLine(4)}
      </li>`).join("")}</ul>`;
    }
    if (activity.kind === "register") {
      return `<div class="wb-register">
        <p>${esc(activity.who)}</p>
        <p class="wb-ask">tú ${writingLine(4)} · usted ${writingLine(4)}</p>
        ${writingLine(48)}
      </div>`;
    }
    return "";
  }

  function activitiesSection(unit) {
    if (!unit.activities || !unit.activities.length) return "";
    const blocks = unit.activities.map((activity, index) => `<div class="wb-activity">
      <h4><span class="wb-activity-n">${index + 1}</span>${esc(t(activity.labelKey))}</h4>
      ${activityBody(activity)}
    </div>`).join("");
    return section("workbook.section.activities", blocks);
  }

  function unitBlock(unit, index) {
    return `<article class="wb-unit">
      <header class="wb-unit-head">
        <p class="eyebrow">${esc(t("workbook.unit", { n: index + 1 }))}</p>
        <h2 lang="${home()}">${esc(unit.title)}</h2>
        <p class="wb-situation">${esc(unit.situation)}</p>
      </header>
      ${settingSection(unit)}
      ${dialogueSection(unit)}
      ${pronunciationSection(unit)}
      ${vocabularySection(unit)}
      ${notesSection(unit)}
      ${comprehensionSection(unit)}
      ${activitiesSection(unit)}
    </article>`;
  }

  function glossarySection(book) {
    if (!book.glossary || !book.glossary.length) return "";
    const rows = book.glossary.map((item) => `<tr>
      <th scope="row" lang="${lang()}">${esc(item.term)}</th>
      <td lang="${home()}">${esc(item.literal)}</td>
      <td>${esc(item.useWhen)}</td>
    </tr>`).join("");
    return section("workbook.section.glossary", `<table class="wb-table">
      <thead><tr><th scope="col">${esc(t("workbook.term"))}</th><th scope="col">${esc(t("workbook.literal"))}</th><th scope="col">${esc(t("workbook.useWhen"))}</th></tr></thead>
      <tbody>${rows}</tbody></table>`, "wb-break");
  }

  function vocabBankSection() {
    const lines = Array.from({ length: 12 })
      .map(() => `<li>${writingLine(24)} ${writingLine(36)}</li>`)
      .join("");
    return section(
      "workbook.section.vocabBank",
      `<p>${esc(t("workbook.vocabBank.lead"))}</p><ul class="wb-bank">${lines}</ul>`,
      "wb-break"
    );
  }

  function checkpointSection(book) {
    const scale = ["notYet", "withSupport", "independently"]
      .map((key) => `<th scope="col">${esc(t(`workbook.checkpoint.${key}`))}</th>`)
      .join("");
    const rows = book.overview.canDo.map((line) => `<tr>
      <th scope="row">${esc(line)}</th>
      <td><span class="wb-box" aria-hidden="true"></span></td>
      <td><span class="wb-box" aria-hidden="true"></span></td>
      <td><span class="wb-box" aria-hidden="true"></span></td>
    </tr>`).join("");
    return section("workbook.section.checkpoint", `<p>${esc(t("workbook.checkpoint.lead"))}</p>
      <table class="wb-table wb-checkpoint">
        <thead><tr><th scope="col"></th>${scale}</tr></thead>
        <tbody>${rows}</tbody>
      </table>`, "wb-break");
  }

  function answerKeySection(book) {
    if (!book.answerKey || !book.answerKey.length) return "";
    const byLesson = new Map();
    for (const entry of book.answerKey) {
      if (!byLesson.has(entry.lessonId)) byLesson.set(entry.lessonId, []);
      byLesson.get(entry.lessonId).push(entry);
    }
    const titles = new Map(book.units.map((unit) => [unit.lessonId, unit.title]));
    const blocks = [...byLesson.entries()].map(([lessonId, entries]) => `<div class="wb-key-block">
      <h4>${esc(titles.get(lessonId) || lessonId)}</h4>
      <ol>${entries.map((entry) => `<li><strong>${esc(t(entry.labelKey))}</strong> ${esc(entry.answer)}</li>`).join("")}</ol>
    </div>`).join("");
    return `<section id="workbook-key" class="wb-section wb-break wb-key" hidden>
      <h3>${esc(t("workbook.section.answerKey"))}</h3>
      ${blocks}
    </section>`;
  }

  function renderWorkbook(book) {
    return `<div class="wb-sheet">
      <header class="wb-head">
        <p class="eyebrow">${esc(book.tier || "")}</p>
        <h1 lang="${home()}">${esc(book.title)}</h1>
        <p class="wb-meta">${esc(t("workbook.lessonCount", { count: book.units.length }))}</p>
      </header>
      ${overviewSection(book)}
      ${book.units.map(unitBlock).join("")}
      ${glossarySection(book)}
      ${vocabBankSection()}
      ${checkpointSection(book)}
      ${answerKeySection(book)}
    </div>`;
  }

  /* --- wiring ------------------------------------------------------------ */

  function modules() {
    /* COURSE_MODULES is no element's id, so a bare read really would throw if
       data/modules.js failed to load; this probe is load-bearing. */
    if (typeof COURSE_MODULES === "undefined") return [];
    return Array.isArray(COURSE_MODULES) ? COURSE_MODULES : [];
  }

  /*
   * Shape, not existence.
   *
   * `<section id="lessons">` is in the page, and named access on Window makes
   * that element the global `lessons` whenever data/lessons.js has not loaded.
   * A `typeof lessons === "undefined"` check can therefore never fire, and
   * would hand a <section> to code expecting an array. Array.isArray is the
   * only test that rejects both a missing script and an element.
   */
  function allLessons() {
    return Array.isArray(lessons) ? lessons : [];
  }

  function currentModule() {
    const picker = $("#workbook-module");
    const list = modules();
    if (!picker || !list.length) return null;
    return list.find((m) => m.id === picker.value) || list[0];
  }

  function renderPicker() {
    const picker = $("#workbook-module");
    if (!picker) return;
    const chosen = picker.value;
    picker.innerHTML = modules()
      .map((m) => `<option value="${esc(m.id)}">${esc(m.title[uiLang()] || m.title.en)}</option>`)
      .join("");
    if (chosen && modules().some((m) => m.id === chosen)) picker.value = chosen;
  }

  function keyVisible() {
    const key = $("#workbook-key");
    return Boolean(key) && !key.hidden;
  }

  function renderPanel(keepKeyOpen) {
    const host = $("#workbook-output");
    if (!host) return;
    const module = currentModule();
    const api = window.ParceroWorkbook;
    if (!module || !api) {
      host.innerHTML = `<p class="assistive-text">${esc(t("workbook.empty"))}</p>`;
      return;
    }
    const group = api.lessonsFor(module, allLessons());
    const book = api.build({ module, lessons: group, direction: direction() });
    host.innerHTML = renderWorkbook(book);
    const key = $("#workbook-key");
    if (key && keepKeyOpen) key.hidden = false;
    const toggle = $("#workbook-answers");
    if (toggle) {
      toggle.textContent = t(keyVisible() ? "workbook.hideAnswers" : "workbook.showAnswers");
      toggle.setAttribute("aria-expanded", String(keyVisible()));
    }
    localStorage.setItem("parcero-workbook-module", module.id);
  }

  function start() {
    if (!$("#workbook-output")) return;
    renderPicker();
    const saved = localStorage.getItem("parcero-workbook-module");
    const picker = $("#workbook-module");
    if (saved && modules().some((m) => m.id === saved)) picker.value = saved;
    renderPanel(false);

    picker.addEventListener("change", () => renderPanel(false));

    const toggle = $("#workbook-answers");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const key = $("#workbook-key");
        if (!key) return;
        key.hidden = !key.hidden;
        toggle.textContent = t(key.hidden ? "workbook.showAnswers" : "workbook.hideAnswers");
        toggle.setAttribute("aria-expanded", String(!key.hidden));
      });
    }

    const print = $("#workbook-print");
    if (print) print.addEventListener("click", () => window.print());

    /*
     * Direction changes swap both the language being taught and the language
     * the workbook is written in, so the whole thing has to be rebuilt rather
     * than relabeled. The picker is rebuilt too — module titles are bilingual.
     */
    document.querySelectorAll("input[name=direction]").forEach((input) => {
      input.addEventListener("change", () => { renderPicker(); renderPanel(keyVisible()); });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  window.ParceroWorkbookUI = { renderWorkbook, EN };
})();
