/*
 * Sitting a checkpoint, and getting a mark back.
 *
 * assessment.js assembles and marks papers. This file is the room you sit them
 * in, and almost every decision here is about making that room feel different
 * from the practice screen next door.
 *
 * Practice is generous by design: it tells you immediately, it lets you try
 * again, and it schedules the ones you missed. None of that belongs in a test.
 * So here the whole paper is on the page at once, nothing is marked until you
 * say you are finished, and once you have said so the paper is closed. A
 * student who can see "wrong, try again" after each question is revising, and
 * a mark taken from that is not a mark.
 *
 * Three consequences worth naming.
 *
 * The paper is one page rather than a wizard. A test you can look back over
 * and revisit question three is a normal test; one that marches you forward
 * one question at a time is an interrogation, and it punishes the slow reader
 * rather than the unprepared one. It is also far less to fight with on a
 * phone.
 *
 * Leaving is guarded but not forbidden. Someone will open a checkpoint by
 * accident, and trapping them in it would be worse than losing an attempt. But
 * a half-finished paper that silently evaporates is its own kind of cruel, so
 * leaving asks first.
 *
 * Nothing is recorded until the paper is marked. An abandoned attempt is not
 * an attempt; recording it would burn a form letter and push the student
 * toward the end of the retake sequence for a test they never sat.
 */
(function () {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const esc = (value) => String(value == null ? "" : value).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const direction = () => (document.querySelector("input[name=direction]:checked") || {}).value || "es";

  /*
   * The same Array.isArray guard workbook-ui.js documents, for the same
   * reason: `<section id="lessons">` is in the page, so named access on Window
   * makes the global `lessons` an element whenever data/lessons.js is missing,
   * and a typeof check can never fire.
   *
   * It has to be the bare identifier, not `window.lessons`. data/lessons.js
   * and data/stories.js both declare with `const`, and a top-level `const` in
   * a classic script goes into the global lexical environment — it never
   * becomes a property of window. So `window.lessons` is the <section>
   * element, `Array.isArray` says no, and this returned an empty corpus on
   * every page load: no checkpoint could be built and every exam lost its
   * reading section, with no error anywhere to say why.
   */
  const corpus = () => (Array.isArray(lessons) ? lessons : []);
  const courseModules = () => (typeof COURSE_MODULES === "undefined" ? [] : COURSE_MODULES);
  const stories = () => (typeof storyItems !== "undefined" && Array.isArray(storyItems) ? storyItems : []);
  const api = () => (typeof ParceroAssessment === "object" ? ParceroAssessment : null);
  const syllabus = () => (typeof ParceroSyllabus === "object" ? ParceroSyllabus : null);

  const EN = {
    "test.exit": "Leave the test",
    "test.submit": "Finish and mark",
    "test.checkpoint": "Module checkpoint",
    "test.exam": "Band exam",
    "test.form": "Form {form}",
    "test.lead.checkpoint": "{count} questions from this module, in a different order and with the options moved. Nothing is marked until you finish. Pass is {pass}%.",
    "test.lead.exam": "The exam for {band}. Section 1 is marked here. Section 2 and section 3 are marked by a person — write them out and check them afterwards. Pass is {pass}%.",
    "test.section.use": "Section 1 · Use of language",
    "test.section.reading": "Section 2 · Reading",
    "test.section.writing": "Section 3 · Writing",
    "test.section.useLead": "Marked automatically. One answer each.",
    "test.section.readingLead": "Answer in full sentences on paper. Reveal the answer when you have written yours, not before.",
    "test.section.writingLead": "Write this by hand, under the clock. Mark it against the rubric in the Teach section, or hand it to somebody who will.",
    "test.reveal": "Show the answer",
    "test.alsoMeans": "In your language",
    "test.progress": "{done} of {total} answered",
    "test.confirmBlank": "{count} questions are still blank. Finish anyway?",
    "test.confirmLeave": "Leave without finishing? This attempt will not be recorded.",
    "test.result.pass": "Passed",
    "test.result.fail": "Not yet",
    "test.result.score": "{correct} of {total} · {percent}%",
    "test.result.blank": "{count} left blank",
    "test.result.weak": "Go back to these",
    "test.result.weakLead": "The misses landed here. Reread the lesson, then sit form {form}.",
    "test.result.clean": "Nothing to go back to. Every question was right.",
    "test.result.review": "Your paper",
    "test.result.yourAnswer": "You chose",
    "test.result.correct": "Correct answer",
    "test.result.noAnswer": "Left blank",
    "test.retake": "Sit form {form}",
    "test.done": "Back to the course",
    "test.minutes": "{minutes} minutes",
    "test.empty": "There are not enough questions in this module to build a checkpoint yet."
  };

  /*
   * ParceroI18n.t takes (key, direction, values) — three arguments, with the
   * direction in the middle. Calling it with (key, values) puts the value bag
   * where the direction belongs, and uiLanguageFor() answers "es" for anything
   * that is not the string "es": every paper rendered in Spanish whichever
   * course it belonged to, and "{done} of {total} answered" printed exactly
   * like that, braces and all.
   */
  const fill = (text, values) => {
    if (!values) return text;
    let out = text;
    for (const name of Object.keys(values)) out = out.split(`{${name}}`).join(values[name]);
    return out;
  };
  const t = (key, values) => (window.ParceroI18n
    ? window.ParceroI18n.t(key, direction(), values)
    : fill(EN[key] === undefined ? key : EN[key], values));

  /* The paper currently on screen. Null between tests, and that is what every
     guard in here tests for. */
  let live = null;

  /* ---------------------------------------------------------------- lookups */

  /*
   * A module's lessons.
   *
   * syllabus.moduleIndex() is keyed by *lesson* id — it answers "which module
   * owns this lesson". Calling .get(moduleId) on it misses every time, which
   * reads here as "this module has no lessons", so every checkpoint refused to
   * build and told the student the module was too small. ParceroTeaching.byModule
   * answers the question this actually needs.
   */
  function lessonsOfModule(moduleId) {
    const s = syllabus();
    const teach = typeof ParceroTeaching === "object" ? ParceroTeaching : null;
    if (!s || !teach) return [];
    const entry = teach.byModule(s.outline(corpus(), courseModules())).get(moduleId);
    return (entry && entry.lessons) || [];
  }

  function lessonsOfBand(band) {
    return courseModules().filter((m) => m.band === band).flatMap((m) => lessonsOfModule(m.id));
  }

  const moduleTitle = (id) => {
    const found = courseModules().find((m) => m.id === id);
    if (!found) return id;
    const title = found.title || {};
    return title[direction() === "en" ? "es" : "en"] || title.en || id;
  };

  /* ---------------------------------------------------------------- opening */

  /*
   * Start a paper.
   *
   * `kind` is "checkpoint" or "exam"; `id` is a module id or a band. The form
   * letter is chosen from the record rather than passed in, so a retake is
   * automatically a different paper and nobody has to remember which one they
   * already sat.
   */
  function open(options) {
    const A = api();
    if (!A) return;
    const opts = options || {};
    const dir = opts.direction || direction();
    const kind = opts.kind === "exam" ? "exam" : "checkpoint";
    const id = String(opts.id || "");
    if (!id) return;

    const state = A.load();
    const form = opts.form || A.nextForm(state, kind, id, dir);

    const paper = kind === "exam"
      ? A.exam({
        band: id,
        direction: dir,
        form,
        lessons: lessonsOfBand(id),
        stories: stories(),
        writing: writingTask(id, dir)
      })
      : A.checkpoint({ moduleId: id, direction: dir, form, lessons: lessonsOfModule(id) });

    const questions = paper.questions || paper.use || [];
    if (!questions.length) {
      window.alert(t("test.empty"));
      return;
    }

    live = { kind, id, direction: dir, form, paper, responses: questions.map(() => null), marked: false };
    render();
    location.hash = "#test";
    window.scrollTo({ top: 0 });
  }

  function writingTask(band, dir) {
    if (typeof EXAM_TASKS === "undefined") return null;
    const entry = EXAM_TASKS[band];
    return entry ? entry[dir] || null : null;
  }

  /* --------------------------------------------------------------- the page */

  /*
   * The paper as markup, built from the paper alone.
   *
   * Kept pure and separate from render() because nothing else here can be
   * checked without a browser. A test can call this with a real paper and read
   * what a student would see — that no answer is in the markup, that every
   * question reached the page, that no label came out as a raw i18n key. None
   * of that is observable once the string has been written into innerHTML.
   */
  function renderPaper(state) {
    if (!state) return "";
    const kind = state.kind === "exam" ? "exam" : "checkpoint";
    const paper = state.paper || {};
    const questions = paper.questions || paper.use || [];
    /* The paper knows which language it was built for. Reading it from the
       paper rather than from the radio button keeps this pure, and keeps a
       paper correct if the learner flips the toggle while it is open. */
    const dir = paper.direction === "en" ? "en" : "es";

    const sections = [];
    sections.push(questionSection(
      questions,
      kind === "exam" ? t("test.section.use") : "",
      kind === "exam" ? t("test.section.useLead") : "",
      dir
    ));
    if (kind === "exam") {
      sections.push(readingSection(paper.reading, dir));
      sections.push(writingSection(paper.writing));
    }
    return sections.filter(Boolean).join("");
  }

  function render() {
    if (!live) return;
    const { kind, paper } = live;
    const questions = paper.questions || paper.use || [];

    $("#test-kind").textContent = `${t(kind === "exam" ? "test.exam" : "test.checkpoint")} · ${t("test.form", { form: live.form })}`;
    $("#test-title").textContent = kind === "exam" ? live.id : moduleTitle(live.id);
    $("#test-lead").textContent = kind === "exam"
      ? t("test.lead.exam", { band: live.id, pass: Math.round(paper.pass * 100) })
      : t("test.lead.checkpoint", { count: questions.length, pass: Math.round(paper.pass * 100) });

    $("#test-paper").innerHTML = renderPaper(live);
    $("#test-result").hidden = true;
    $("#test-result").innerHTML = "";
    $("#test-foot").hidden = false;
    updateProgress();
  }

  function questionSection(questions, heading, lead, dir) {
    const rows = questions.map((q, i) => {
      /*
       * The options are in the language being studied and the prompt is in the
       * reader's own, so neither can be inferred from the document. A screen
       * reader handed Spanish with English phonology is unintelligible, which
       * makes this the difference between a usable paper and an unusable one.
       */
      const options = q.choices.map((choice, c) => `
        <label class="test-option">
          <input type="radio" name="q${i}" value="${c}">
          <span lang="${dir}">${esc(choice)}</span>
        </label>`).join("");
      return `<li class="test-question">
        <p class="test-prompt"><span class="test-number" aria-hidden="true">${i + 1}</span>${esc(q.prompt)}</p>
        <div class="test-options" role="group" aria-label="${esc(q.prompt)}">${options}</div>
      </li>`;
    }).join("");
    const head = heading
      ? `<h3 class="test-section-title">${esc(heading)}</h3><p class="test-section-lead">${esc(lead)}</p>`
      : "";
    return `<section class="test-section">${head}<ol class="test-questions">${rows}</ol></section>`;
  }

  /*
   * Reading and writing are answered on paper and revealed afterwards.
   *
   * They are `<details>` rather than a scripted toggle so they still open with
   * a keyboard and still print open, and so the answer is genuinely hidden
   * rather than merely styled out of the way.
   */
  function readingSection(reading, dir) {
    if (!reading || !reading.length) return "";
    /* The question, the model answer and the story title are all in the
       language being read; only the gloss is in the reader's own. */
    const home = dir === "es" ? "en" : "es";
    const blocks = reading.map((story) => {
      const rows = story.questions.map((row, i) => `
        <li class="test-open">
          <p class="test-prompt"><span class="test-number" aria-hidden="true">${i + 1}</span><span lang="${dir}">${esc(row.q)}</span></p>
          <div class="test-writing-lines" aria-hidden="true"><span></span><span></span></div>
          <details class="test-answer">
            <summary>${esc(t("test.reveal"))}</summary>
            <p class="test-answer-target" lang="${dir}">${esc(row.a)}</p>
            ${row.gloss ? `<p class="test-answer-gloss" lang="${home}"><strong>${esc(t("test.alsoMeans"))}:</strong> ${esc(row.gloss)}</p>` : ""}
          </details>
        </li>`).join("");
      return `<article class="test-reading">
        <h4 lang="${dir}">${esc(story.title)}</h4>
        <ol class="test-questions">${rows}</ol>
      </article>`;
    }).join("");
    return `<section class="test-section">
      <h3 class="test-section-title">${esc(t("test.section.reading"))}</h3>
      <p class="test-section-lead">${esc(t("test.section.readingLead"))}</p>
      ${blocks}
    </section>`;
  }

  function writingSection(task) {
    if (!task) return "";
    const criteria = (task.criteria || []).map((line) => `<li>${esc(line)}</li>`).join("");
    return `<section class="test-section">
      <h3 class="test-section-title">${esc(t("test.section.writing"))}</h3>
      <p class="test-section-lead">${esc(t("test.section.writingLead"))}</p>
      <article class="test-writing">
        <p class="test-writing-spec">${esc(task.exam || "")} · ${esc(t("test.minutes", { minutes: task.minutes }))} · ${esc(task.words || "")}</p>
        <p class="test-writing-brief">${esc(task.brief || "")}</p>
        ${criteria ? `<ul class="test-writing-criteria">${criteria}</ul>` : ""}
      </article>
    </section>`;
  }

  function updateProgress() {
    if (!live) return;
    const total = live.responses.length;
    const done = live.responses.filter((r) => r !== null).length;
    $("#test-progress").textContent = t("test.progress", { done, total });
  }

  /* --------------------------------------------------------------- marking */

  function submit() {
    const A = api();
    if (!live || !A || live.marked) return;
    const blank = live.responses.filter((r) => r === null).length;
    if (blank && !window.confirm(t("test.confirmBlank", { count: blank }))) return;

    const result = A.mark(live.paper, live.responses);
    live.marked = true;

    const state = A.load();
    A.save(A.record(state, {
      kind: live.kind,
      id: live.paper.id,
      percent: result.percent,
      passed: result.passed,
      total: result.total,
      correct: result.correct,
      day: Math.floor(Date.now() / 86400000)
    }));

    renderResult(result);
    if (typeof window.ParceroRefreshPath === "function") window.ParceroRefreshPath();
  }

  function renderResult(result) {
    const A = api();
    const questions = live.paper.questions || live.paper.use || [];
    const next = A ? A.nextForm(A.load(), live.kind, live.id, live.direction) : "B";

    const review = result.rows.map((row, i) => {
      const q = questions[i];
      const state = row.correct ? "is-right" : row.blank ? "is-blank" : "is-wrong";
      const chosen = row.blank ? t("test.result.noAnswer") : q.choices[row.chosen];
      return `<li class="test-review-row ${state}">
        <p class="test-prompt"><span class="test-number" aria-hidden="true">${i + 1}</span>${esc(q.prompt)}</p>
        <p class="test-review-given"><strong>${esc(t("test.result.yourAnswer"))}:</strong> ${esc(chosen)}</p>
        ${row.correct ? "" : `<p class="test-review-right"><strong>${esc(t("test.result.correct"))}:</strong> ${esc(q.choices[q.answer])}</p>`}
      </li>`;
    }).join("");

    const weak = result.weak.length
      ? `<div class="test-weak">
          <h4>${esc(t("test.result.weak"))}</h4>
          <p>${esc(t("test.result.weakLead", { form: next }))}</p>
          <ul>${result.weak.map((w) => {
            const lesson = corpus().find((l) => l.id === w.lessonId);
            const label = lesson ? lesson[live.direction].title : w.lessonId;
            return `<li><button type="button" class="ghost-button" data-test-goto="${esc(w.lessonId)}">${esc(label)}</button> <span class="test-weak-count">${w.missed}/${w.asked}</span></li>`;
          }).join("")}</ul>
        </div>`
      : `<p class="test-clean">${esc(t("test.result.clean"))}</p>`;

    $("#test-result").innerHTML = `
      <div class="test-score ${result.passed ? "is-pass" : "is-fail"}">
        <p class="test-verdict">${esc(t(result.passed ? "test.result.pass" : "test.result.fail"))}</p>
        <p class="test-figure">${esc(t("test.result.score", result))}</p>
        ${result.blank ? `<p class="test-blank-note">${esc(t("test.result.blank", { count: result.blank }))}</p>` : ""}
      </div>
      ${weak}
      <div class="test-result-actions">
        <button type="button" class="ghost-button" data-test-retake>${esc(t("test.retake", { form: next }))}</button>
        <button type="button" class="primary-button" data-test-done>${esc(t("test.done"))}</button>
      </div>
      <details class="test-review">
        <summary>${esc(t("test.result.review"))}</summary>
        <ol class="test-review-list">${review}</ol>
      </details>`;

    $("#test-result").hidden = false;
    $("#test-foot").hidden = true;
    /* The paper stays on the page underneath, but nothing in it can be
       changed now — a marked answer that is still clickable invites the
       student to "fix" it and then disbelieve the score. */
    $("#test-paper").querySelectorAll("input").forEach((input) => { input.disabled = true; });
    $("#test-result").scrollIntoView({ block: "start" });
  }

  /* ---------------------------------------------------------------- wiring */

  function leave() {
    if (live && !live.marked && live.responses.some((r) => r !== null)) {
      if (!window.confirm(t("test.confirmLeave"))) return;
    }
    live = null;
    location.hash = "#path";
  }

  function start() {
    const paper = $("#test-paper");
    if (!paper) return;

    paper.addEventListener("change", (event) => {
      const input = event.target;
      if (!live || live.marked || !input.name || input.name[0] !== "q") return;
      const index = Number(input.name.slice(1));
      if (!Number.isInteger(index)) return;
      live.responses[index] = Number(input.value);
      updateProgress();
    });

    $("#test-submit").addEventListener("click", submit);
    $("#test-exit").addEventListener("click", leave);

    $("#test-result").addEventListener("click", (event) => {
      const goto = event.target.closest("[data-test-goto]");
      if (goto) {
        const id = goto.dataset.testGoto;
        live = null;
        if (typeof window.ParceroGoToLesson === "function") window.ParceroGoToLesson(id);
        return;
      }
      if (event.target.closest("[data-test-retake]")) {
        open({ kind: live.kind, id: live.id, direction: live.direction });
        return;
      }
      if (event.target.closest("[data-test-done]")) {
        live = null;
        location.hash = "#path";
      }
    });

    /*
     * A direction change mid-paper would swap the language of every question
     * under the student. Abandoning is the honest response, and it costs
     * nothing because nothing is recorded until a paper is marked.
     */
    document.querySelectorAll("input[name=direction]").forEach((input) => {
      input.addEventListener("change", () => {
        if (live && !live.marked) {
          live = null;
          if (location.hash === "#test") location.hash = "#path";
        }
      });
    });

    /* Reaching #test without a paper — a bookmark, or a reload — is not an
       error worth a message. Send them to the course, where the buttons are. */
    window.addEventListener("hashchange", () => {
      if (location.hash === "#test" && !live) location.hash = "#path";
    });
    if (location.hash === "#test" && !live) location.hash = "#path";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  window.ParceroAssessmentUI = { open, renderPaper, EN };
})();
