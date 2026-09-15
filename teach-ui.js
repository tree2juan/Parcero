/*
 * The teacher's half of the app.
 *
 * Everything else here is built for the person learning. This view is built
 * for the person running the course, and the difference is not cosmetic: a
 * teacher needs the whole term visible at once, needs to print it, and needs
 * the parts a student must never see — the rubric, the pass marks, the record.
 *
 * Four panels, because a teacher arrives with one of four questions.
 *
 *   Handbook  - "what is this course and can I adopt it?" The prospectus:
 *               hours, assessment weighting, how to run it, and what it does
 *               not cover.
 *   Scheme    - "what am I teaching on Tuesday?" Every module of every band
 *               with its objectives and its five-step plan.
 *   Rubrics   - "how do I mark this?" The writing and speaking schemes, with
 *               the band standard they are applied against.
 *   Record    - "what do I report?" Every mark this browser holds, and a CSV.
 *
 * The record panel is deliberately blunt about its own limits. Progress lives
 * in one browser on one device, so a teacher reading this on their own laptop
 * is looking at their own marks and not the class's. Saying so in the panel is
 * the only honest option; the alternative is a teacher discovering it at the
 * end of a term.
 */
(function () {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const esc = (value) => String(value == null ? "" : value).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const direction = () => (document.querySelector("input[name=direction]:checked") || {}).value || "es";
  /* The teacher reads the same language the learner's interface uses: someone
     running the Spanish course works in English. */
  const uiLang = () => (direction() === "es" ? "en" : "es");

  /*
   * The bare identifier, not `window.lessons`. data/lessons.js declares with
   * `const`, and a top-level `const` in a classic script lives in the global
   * lexical environment rather than on window — so `window.lessons` is the
   * `<section id="lessons">` element that named access supplies, Array.isArray
   * rejects it, and the whole scheme of work renders against an empty corpus
   * without a single error to say why. Array.isArray is still the right test:
   * it rejects both a missing script and that element.
   */
  const corpus = () => (Array.isArray(lessons) ? lessons : []);
  const courseModules = () => (typeof COURSE_MODULES === "undefined" ? [] : COURSE_MODULES);
  const teaching = () => (typeof ParceroTeaching === "object" ? ParceroTeaching : null);
  const assessment = () => (typeof ParceroAssessment === "object" ? ParceroAssessment : null);
  const syllabus = () => (typeof ParceroSyllabus === "object" ? ParceroSyllabus : null);

  const EN = {
    "nav.teach": "Teach",
    "teach.eyebrow": "For teachers and schools",
    "teach.tab.handbook": "Handbook",
    "teach.tab.scheme": "Scheme of work",
    "teach.tab.rubrics": "Rubrics",
    "teach.tab.record": "Record",
    "teach.print": "Print this section",
    "teach.hours.title": "Hours and pacing",
    "teach.hours.band": "Level",
    "teach.hours.sessions": "Sessions",
    "teach.hours.taught": "Taught hours",
    "teach.hours.assessment": "With assessment",
    "teach.hours.weeks": "Weeks at two a week",
    "teach.hours.total": "Whole course",
    "teach.assessment.title": "How it is marked",
    "teach.assessment.weight": "{weight}% of the grade",
    "teach.assessment.formative": "Not graded",
    "teach.running.classroom": "Running it with a class",
    "teach.running.alone": "Running it alone",
    "teach.limits.title": "What this course does not do",
    "teach.scheme.lead": "Every module in order, with what it is for and how to teach it. Print this and you have the term.",
    "teach.scheme.minutes": "{minutes} min",
    "teach.scheme.hours": "{hours} taught hours",
    "teach.scheme.lessons": "{count} lessons",
    "teach.scheme.mission": "What it is for",
    "teach.scheme.canDo": "By the end, students can",
    "teach.scheme.plan": "Lesson plan",
    "teach.scheme.errors": "Expect these two errors",
    "teach.scheme.support": "If a student is stuck",
    "teach.scheme.stretch": "If a student is ahead",
    "teach.scheme.homework": "Homework",
    "teach.scheme.untaught": "No plan written for this module yet.",
    "teach.step.warmUp": "Warm-up",
    "teach.step.presentation": "Presentation",
    "teach.step.practice": "Practice",
    "teach.step.production": "Production",
    "teach.step.exitTicket": "Exit ticket",
    "teach.rubrics.lead": "Mark writing and speaking against these. Level 2 is the target — it means the student is working at the level, not that they are merely adequate.",
    "teach.rubrics.standard": "What \u201cat this level\u201d means",
    "teach.rubrics.writingSpec": "Writing task: {minutes} minutes, {words}.",
    "teach.rubrics.speakingSpec": "Speaking: about {minutes} minutes of unrehearsed talk.",
    "teach.rubrics.grades": "Turning 0\u201312 into a grade",
    "teach.rubrics.criterion": "Criterion",
    "teach.record.lead": "Every mark stored in this browser. Nothing here has left the device, and nothing here can see another student's work.",
    "teach.record.warning": "This is one browser on one device. In a class, each student exports their own row and hands it to you; there is no shared gradebook, because there is no server.",
    "teach.record.empty": "No checkpoints or exams sat yet in this browser.",
    "teach.record.kind": "Paper",
    "teach.record.best": "Best",
    "teach.record.last": "Last",
    "teach.record.attempts": "Attempts",
    "teach.record.result": "Result",
    "teach.record.export": "Export as CSV",
    "teach.record.clear": "Clear every mark",
    "teach.record.confirmClear": "Delete every checkpoint and exam result in this browser? This cannot be undone.",
    "teach.record.checkpoint": "Checkpoint",
    "teach.record.exam": "Exam",
    "teach.record.passed": "Passed",
    "teach.record.notYet": "Not yet",
    "teach.record.practice": "Practice accuracy",
    "teach.record.practiceLead": "From the lessons themselves, not from any test. Useful for spotting who has stopped, not for a grade."
  };

  /*
   * ParceroI18n.t takes (key, direction, values) — three arguments, with the
   * direction in the middle. Calling it with (key, values) puts the value bag
   * where the direction belongs, and uiLanguageFor() answers "es" for anything
   * that is not the string "es": the whole teach view rendered in Spanish
   * whichever course you were running, and every {placeholder} stayed on the
   * page as literal text because `values` arrived as undefined.
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

  /* One side of an authored bilingual pair, in the teacher's language. */
  const say = (pair) => {
    if (!pair) return "";
    const lang = uiLang();
    return pair[lang] || pair.en || pair.es || "";
  };

  /* ------------------------------------------------------------- handbook */

  /* Lessons keyed by module id. syllabus.moduleIndex() is keyed by lesson id
     and answers a different question; see ParceroTeaching.byModule. */
  function moduleLessons() {
    const s = syllabus();
    const teach = teaching();
    if (!s || !teach) return null;
    return teach.byModule(s.outline(corpus(), courseModules()));
  }

  function renderHandbook() {
    const plan = typeof COURSE_PLAN === "undefined" ? null : COURSE_PLAN;
    if (!plan) return "";
    const teach = teaching();
    const index = moduleLessons();
    const hours = teach ? teach.hours(courseModules(), index, direction()) : [];

    const totals = hours.reduce((acc, row) => ({
      sessions: acc.sessions + row.sessions,
      taughtHours: acc.taughtHours + row.taughtHours,
      assessmentSessions: acc.assessmentSessions + row.assessmentSessions,
      weeks: acc.weeks + row.weeksAtTwoPerWeek
    }), { sessions: 0, taughtHours: 0, assessmentSessions: 0, weeks: 0 });

    const hoursRows = hours.map((row) => `<tr>
      <th scope="row">${esc(row.band)}</th>
      <td>${row.sessions}</td>
      <td>${row.taughtHours ? row.taughtHours.toFixed(1) : "—"}</td>
      <td>${row.assessmentSessions}</td>
      <td>${row.weeksAtTwoPerWeek}</td>
    </tr>`).join("");

    const hoursTable = hours.length ? `<table class="teach-table">
      <thead><tr>
        <th scope="col">${esc(t("teach.hours.band"))}</th>
        <th scope="col">${esc(t("teach.hours.sessions"))}</th>
        <th scope="col">${esc(t("teach.hours.taught"))}</th>
        <th scope="col">${esc(t("teach.hours.assessment"))}</th>
        <th scope="col">${esc(t("teach.hours.weeks"))}</th>
      </tr></thead>
      <tbody>${hoursRows}</tbody>
      <tfoot><tr>
        <th scope="row">${esc(t("teach.hours.total"))}</th>
        <td>${totals.sessions}</td>
        <td>${totals.taughtHours ? totals.taughtHours.toFixed(1) : "—"}</td>
        <td>${totals.assessmentSessions}</td>
        <td>${totals.weeks}</td>
      </tr></tfoot>
    </table>` : "";

    const pieces = plan.assessment.pieces.map((piece) => `<article class="teach-card">
      <h4>${esc(say(piece.label))}</h4>
      <p class="teach-weight">${esc(piece.weight
        ? t("teach.assessment.weight", { weight: piece.weight })
        : t("teach.assessment.formative"))}</p>
      <p>${esc(say(piece.what))}</p>
      <p class="teach-muted">${esc(say(piece.use))}</p>
    </article>`).join("");

    const steps = (list) => list.map((item) => `<div class="teach-step">
      <h4>${esc(say(item.label))}</h4>
      <p>${esc(say(item.text))}</p>
    </div>`).join("");

    const limits = plan.limits.map((limit) => `<li>
      <strong>${esc(say(limit.label))}</strong>
      <p>${esc(say(limit.text))}</p>
    </li>`).join("");

    return `<article class="teach-doc">
      <h3>${esc(say(plan.about.title))}</h3>
      <p class="teach-lead">${esc(say(plan.about.summary))}</p>
      <p>${esc(say(plan.about.audience))}</p>
      <p>${esc(say(plan.about.approach))}</p>

      <h3>${esc(t("teach.hours.title"))}</h3>
      <p>${esc(say(plan.hours.basis))}</p>
      ${hoursTable}
      <p>${esc(say(plan.hours.assessment))}</p>
      <p>${esc(say(plan.hours.pacing))}</p>

      <h3>${esc(t("teach.assessment.title"))}</h3>
      <p class="teach-lead">${esc(say(plan.assessment.lead))}</p>
      <div class="teach-cards">${pieces}</div>
      <p>${esc(say(plan.assessment.speaking))}</p>
      <p class="teach-note">${esc(say(plan.assessment.honesty))}</p>

      <h3>${esc(t("teach.running.classroom"))}</h3>
      <div class="teach-steps">${steps(plan.running.classroom)}</div>

      <h3>${esc(t("teach.running.alone"))}</h3>
      <div class="teach-steps">${steps(plan.running.alone)}</div>

      <h3>${esc(t("teach.limits.title"))}</h3>
      <ul class="teach-limits">${limits}</ul>
    </article>`;
  }

  /* --------------------------------------------------------------- scheme */

  function renderScheme() {
    const teach = teaching();
    const s = syllabus();
    if (!teach || !s) return "";
    const index = moduleLessons();
    const stages = teach.scheme(courseModules(), index, direction());

    const body = stages.map((stage) => {
      const rows = stage.modules.map((row, n) => {
        const detail = teach.plan(row.id, direction());
        const module = courseModules().find((m) => m.id === row.id) || {};
        const title = (module.title || {})[uiLang()] || (module.title || {}).en || row.id;

        if (!detail) {
          return `<details class="teach-module">
            <summary><span class="teach-module-n">${n + 1}</span>
            <span class="teach-module-title">${esc(title)}</span>
            <span class="teach-module-meta">${esc(t("teach.scheme.lessons", { count: row.lessons.length }))}</span></summary>
            <p class="teach-muted">${esc(t("teach.scheme.untaught"))}</p>
          </details>`;
        }

        const planSteps = detail.steps.map((step) => `<div class="teach-step">
          <h5>${esc(t(`teach.step.${step.id}`))}</h5>
          <p>${esc(step.text)}</p>
        </div>`).join("");

        const canDo = row.canDo.map((line) => `<li>${esc(line)}</li>`).join("");
        const errors = detail.errors.map((line) => `<li>${esc(line)}</li>`).join("");
        const lessonList = row.lessons
          .map((lesson) => `<li>${esc(lesson[direction()].title)}</li>`).join("");

        return `<details class="teach-module">
          <summary><span class="teach-module-n">${n + 1}</span>
          <span class="teach-module-title">${esc(title)}</span>
          <span class="teach-module-meta">${esc(t("teach.scheme.minutes", { minutes: detail.minutes }))} · ${esc(t("teach.scheme.lessons", { count: row.lessons.length }))}</span></summary>

          <div class="teach-module-body">
            <section>
              <h5>${esc(t("teach.scheme.mission"))}</h5>
              <p>${esc(row.mission)}</p>
            </section>
            <section>
              <h5>${esc(t("teach.scheme.canDo"))}</h5>
              <ul class="teach-cando">${canDo}</ul>
            </section>
            <section>
              <h5>${esc(t("teach.scheme.plan"))}</h5>
              <div class="teach-steps">${planSteps}</div>
            </section>
            <section>
              <h5>${esc(t("teach.scheme.errors"))}</h5>
              <ul class="teach-errors">${errors}</ul>
            </section>
            <div class="teach-split">
              <section>
                <h5>${esc(t("teach.scheme.support"))}</h5>
                <p>${esc(detail.support)}</p>
              </section>
              <section>
                <h5>${esc(t("teach.scheme.stretch"))}</h5>
                <p>${esc(detail.stretch)}</p>
              </section>
            </div>
            <section>
              <h5>${esc(t("teach.scheme.homework"))}</h5>
              <p>${esc(detail.homework)}</p>
            </section>
            <section class="teach-lesson-list">
              <h5>${esc(t("teach.scheme.lessons", { count: row.lessons.length }))}</h5>
              <ol>${lessonList}</ol>
            </section>
          </div>
        </details>`;
      }).join("");

      return `<section class="teach-stage">
        <h3>${esc(stage.band)} · ${esc(t(`path.stage.${stage.band}.name`))}</h3>
        <p class="teach-muted">${esc(t("teach.scheme.hours", { hours: Math.round((stage.minutes / 60) * 10) / 10 }))} · ${esc(t("teach.scheme.lessons", { count: stage.lessons }))}</p>
        ${rows}
      </section>`;
    }).join("");

    return `<p class="teach-lead">${esc(t("teach.scheme.lead"))}</p>${body}`;
  }

  /* -------------------------------------------------------------- rubrics */

  function renderRubrics() {
    if (typeof RUBRICS === "undefined") return "";
    const levels = RUBRIC_LEVELS;

    const table = (rubric) => {
      const head = levels.map((level) =>
        `<th scope="col">${level.score} · ${esc(say(level.label))}</th>`).join("");
      const rows = rubric.criteria.map((criterion) => {
        const cells = levels.map((level) =>
          `<td>${esc(say(criterion.levels[level.id]))}</td>`).join("");
        return `<tr>
          <th scope="row"><strong>${esc(say(criterion.label))}</strong>
          <span class="teach-muted">${esc(say(criterion.question))}</span></th>
          ${cells}
        </tr>`;
      }).join("");
      return `<h3>${esc(say(rubric.label))}</h3>
        <p>${esc(say(rubric.lead))}</p>
        <div class="teach-scroll"><table class="teach-table teach-rubric">
          <thead><tr><th scope="col">${esc(t("teach.rubrics.criterion"))}</th>${head}</tr></thead>
          <tbody>${rows}</tbody>
        </table></div>`;
    };

    const tasks = typeof EXAM_TASKS === "undefined" ? null : EXAM_TASKS;
    const standards = Object.keys(RUBRIC_BANDS).map((band) => {
      const entry = RUBRIC_BANDS[band];
      const task = tasks && tasks[band] ? tasks[band][direction()] : null;
      return `<article class="teach-card">
        <h4>${esc(band)}</h4>
        <p>${esc(say(entry.standard))}</p>
        ${task ? `<p class="teach-muted">${esc(t("teach.rubrics.writingSpec", { minutes: task.minutes, words: task.words }))}</p>` : ""}
        <p class="teach-muted">${esc(t("teach.rubrics.speakingSpec", { minutes: entry.speaking.minutes }))}</p>
      </article>`;
    }).join("");

    const grades = RUBRIC_GRADES.map((grade) =>
      `<li><strong>${grade.min}+</strong> ${esc(say(grade.label))}</li>`).join("");

    return `<p class="teach-lead">${esc(t("teach.rubrics.lead"))}</p>
      ${table(RUBRICS.writing)}
      ${table(RUBRICS.speaking)}
      <h3>${esc(t("teach.rubrics.standard"))}</h3>
      <div class="teach-cards">${standards}</div>
      <h3>${esc(t("teach.rubrics.grades"))}</h3>
      <ul class="teach-grades">${grades}</ul>`;
  }

  /* --------------------------------------------------------------- record */

  const labelForResult = (row) => {
    const [id] = row.id.split(":");
    if (row.kind === "exam") return `${t("teach.record.exam")} ${id}`;
    const module = courseModules().find((m) => m.id === id);
    const title = module ? (module.title || {})[uiLang()] || (module.title || {}).en : id;
    return `${t("teach.record.checkpoint")} · ${title}`;
  };

  function recordRows() {
    const A = assessment();
    if (!A) return [];
    return A.results(A.load())
      .slice()
      .sort((a, b) => b.day - a.day || a.id.localeCompare(b.id));
  }

  function renderRecord() {
    const rows = recordRows();
    const progress = typeof ParceroProgress === "object" ? ParceroProgress : null;
    /* summary() takes the stored state, not the corpus, and reports accuracy
       over attempts. `answered` is a count of distinct questions met, which is
       a different number and not a percentage of anything. */
    const summary = progress ? progress.summary(progress.load()) : null;

    const practice = summary && summary.attempts ? `<article class="teach-card">
      <h4>${esc(t("teach.record.practice"))}</h4>
      <p class="teach-figure">${Math.round(summary.accuracy * 100)}%</p>
      <p class="teach-muted">${esc(t("teach.record.practiceLead"))}</p>
    </article>` : "";

    const body = rows.length
      ? `<div class="teach-scroll"><table class="teach-table">
          <thead><tr>
            <th scope="col">${esc(t("teach.record.kind"))}</th>
            <th scope="col">${esc(t("teach.record.best"))}</th>
            <th scope="col">${esc(t("teach.record.last"))}</th>
            <th scope="col">${esc(t("teach.record.attempts"))}</th>
            <th scope="col">${esc(t("teach.record.result"))}</th>
          </tr></thead>
          <tbody>${rows.map((row) => `<tr>
            <th scope="row">${esc(labelForResult(row))}</th>
            <td>${row.best}%</td>
            <td>${row.last}%</td>
            <td>${row.attempts}</td>
            <td><span class="teach-pill${row.passed ? " is-pass" : ""}">${esc(t(row.passed ? "teach.record.passed" : "teach.record.notYet"))}</span></td>
          </tr>`).join("")}</tbody>
        </table></div>`
      : `<p class="teach-muted">${esc(t("teach.record.empty"))}</p>`;

    return `<p class="teach-lead">${esc(t("teach.record.lead"))}</p>
      <p class="teach-note">${esc(t("teach.record.warning"))}</p>
      <div class="teach-cards">${practice}</div>
      ${body}
      <div class="teach-actions">
        <button type="button" class="ghost-button" data-teach-export>${esc(t("teach.record.export"))}</button>
        <button type="button" class="ghost-button" data-teach-clear>${esc(t("teach.record.clear"))}</button>
      </div>`;
  }

  /*
   * CSV, because that is what a gradebook eats.
   *
   * Built and downloaded entirely in the page — there is no server to post to,
   * and adding one to export four columns would undo the privacy guarantee the
   * whole app rests on.
   */
  function exportCsv() {
    const rows = recordRows();
    if (!rows.length) return;
    const cell = (value) => {
      const text = String(value == null ? "" : value);
      return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
    };
    const header = ["paper", "kind", "id", "best", "last", "attempts", "passed", "correct", "total", "day"];
    const lines = [header.join(",")].concat(rows.map((row) => [
      labelForResult(row), row.kind, row.id, row.best, row.last,
      row.attempts, row.passed ? "yes" : "no", row.correct, row.total,
      row.day ? new Date(row.day * 86400000).toISOString().slice(0, 10) : ""
    ].map(cell).join(",")));

    const blob = new Blob(["\uFEFF" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `parcero-record-${direction()}-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /* --------------------------------------------------------------- wiring */

  /* A scheme of work is nineteen collapsed <details>, and printing it collapsed
     gives you nineteen headings and no plan. CSS alone will not do this
     reliably: Chrome now hides the contents through ::details-content and
     content-visibility rather than through display, so `details[open]`-style
     overrides land differently in every engine. Forcing the attribute before
     the dialog opens and putting it back afterwards behaves the same
     everywhere, and the learner's screen is untouched once printing ends. */
  function installPrintOpen() {
    let forced = [];

    function open() {
      forced = [];
      document.querySelectorAll(".view:not([hidden]) details:not([open])").forEach((node) => {
        node.open = true;
        forced.push(node);
      });
    }

    function close() {
      forced.forEach((node) => { node.open = false; });
      forced = [];
    }

    window.addEventListener("beforeprint", open);
    window.addEventListener("afterprint", close);

    /* Safari fires neither event, but it does flip this media query. */
    if (typeof window.matchMedia === "function") {
      const query = window.matchMedia("print");
      const onChange = (event) => (event.matches ? open() : close());
      if (typeof query.addEventListener === "function") query.addEventListener("change", onChange);
      else if (typeof query.addListener === "function") query.addListener(onChange);
    }
  }

  const PANELS = {
    handbook: renderHandbook,
    scheme: renderScheme,
    rubrics: renderRubrics,
    record: renderRecord
  };
  let panel = "handbook";

  function paint() {
    const host = $(`#teach-panel-${panel}`);
    if (!host) return;
    host.innerHTML = PANELS[panel]();
  }

  function show(name) {
    if (!PANELS[name]) return;
    panel = name;
    for (const key of Object.keys(PANELS)) {
      const host = $(`#teach-panel-${key}`);
      if (host) host.hidden = key !== name;
    }
    document.querySelectorAll(".teach-tab").forEach((tab) => {
      const active = tab.dataset.panel === name;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    paint();
  }

  function start() {
    if (!$("#teach-panel-handbook")) return;

    document.querySelectorAll(".teach-tab").forEach((tab) => {
      tab.addEventListener("click", () => show(tab.dataset.panel));
    });

    const print = $("#teach-print");
    if (print) print.addEventListener("click", () => window.print());

    installPrintOpen();

    $("#view-teach").addEventListener("click", (event) => {
      if (event.target.closest("[data-teach-export]")) {
        exportCsv();
        return;
      }
      if (event.target.closest("[data-teach-clear]")) {
        const A = assessment();
        if (A && window.confirm(t("teach.record.confirmClear"))) {
          A.clear();
          paint();
          if (typeof window.ParceroRefreshPath === "function") window.ParceroRefreshPath();
        }
      }
    });

    /* Direction swaps both the language the teacher reads and the class being
       planned for, so every panel is rebuilt rather than relabeled. */
    document.querySelectorAll("input[name=direction]").forEach((input) => {
      input.addEventListener("change", paint);
    });

    show("handbook");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  window.ParceroTeachUI = { EN, renderHandbook, renderScheme, renderRubrics, renderRecord };
})();
