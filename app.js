const placementQuestions = {
  es: [
    ["receptive", "At a café, what does “¿Me regalas un tinto?” ask for?", ["A small black coffee, please.", "A free gift.", "A glass of red wine."], 0],
    ["productive", "Choose the most natural way to greet a neighbor in Colombia.", ["Buenas, ¿cómo estás?", "Yo ser bien.", "Buenos coffee."], 0],
    ["grammar", "Complete: “Ayer ___ al mercado.”", ["fui", "voy", "ir"], 0],
    ["context", "A colleague says “ahorita.” What should you check?", ["Whether they mean now, soon, or later in context.", "That they are speaking only about yesterday.", "That they are ending the conversation."], 0],
    ["pronunciation", "Which helps you be understood when saying “gracias”?", ["Using clear syllables and listening for the local rhythm.", "Spelling each letter aloud.", "Avoiding the word."], 0]
  ],
  en: [
    ["receptive", "At a café, what does “Could I have a black coffee?” mean?", ["A polite request for coffee.", "An offer to make coffee.", "A complaint about coffee."], 0],
    ["productive", "Choose the most natural greeting for a classmate.", ["Hi, how are you?", "I am fine thank you and you?", "Good morning coffee."], 0],
    ["grammar", "Complete: “Yesterday I ___ to the market.”", ["went", "go", "going"], 0],
    ["context", "A teammate says “I’ll get right to it.” What does that usually mean?", ["They will start very soon.", "They are moving to the right.", "They finished last week."], 0],
    ["pronunciation", "Which helps you be understood in English?", ["Clear word stress and listening to the rhythm.", "Reading every punctuation mark aloud.", "Avoiding unfamiliar words."], 0]
  ]
};
const pathways = [
  ["Year 12 local mastery", "Independently understand everyday and civic life; speak appropriately across familiar settings; read varied texts; write clear connected ideas; and navigate local, regional, and cultural pragmatics."],
  ["Collegiate academic", "Build lecture comprehension, academic reading, argumentation, research writing, discipline vocabulary, citation-aware synthesis, and formal register."],
  ["Professional environments", "Practice customer service, office collaboration, technical work, healthcare, education, and interviews with audience-appropriate language and workplace outcomes."]
];
const state = {
  direction: localStorage.getItem("parcero-direction") || "es",
  completed: new Set(JSON.parse(localStorage.getItem("parcero-completed") || "[]")),
  placement: JSON.parse(localStorage.getItem("parcero-placement") || "null"),
  lessonId: localStorage.getItem("parcero-lesson") || lessons[0].id,
  question: 0,
  responses: []
};
if (!lessons.some((item) => item.id === state.lessonId)) state.lessonId = lessons[0].id;
function lessonIndex() { return lessons.findIndex((item) => item.id === state.lessonId); }
function currentLesson() { return lessons[lessonIndex()]; }
const $ = (selector) => document.querySelector(selector);
const VERB_PAGE_SIZE = 24;
const verbView = { query: "", shown: VERB_PAGE_SIZE };
const t = (key, values) => (window.ParceroI18n ? window.ParceroI18n.t(key, state.direction, values) : key);
const tn = (key, count, values) => (window.ParceroI18n ? window.ParceroI18n.tPlural(key, state.direction, count, values) : key);
const listJoin = (items) => (items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} ${t("common.and")} ${items[items.length - 1]}`);
function matchingVerbs() {
  const search = verbView.query.trim().toLowerCase();
  return search ? curriculum.filter((verb) => `${verb.spanish} ${verb.english}`.toLowerCase().includes(search)) : curriculum;
}
function verbTags(verb) {
  /* level comes from the frequency data. register publishes by default; a verb
     carrying reviewStatus has it held back until the flag is dropped.
     Corrections come in through the Report an error tab.

     regionality is deliberately not rendered. It carries the identical string
     on all 200 verbs, so as a per-verb tag it looked like verb-specific data
     while telling a learner nothing. The field stays in the data; if it ever
     earns per-verb values it can come back here and in VERB_SLOTS together. */
  const tags = [verb.level];
  if (!verb.reviewStatus) tags.push(verb.register);
  return tags.filter(Boolean).map((tag) => `<span class="tag">${tag}</span>`).join("");
}
function renderVerbs() {
  const matches = matchingVerbs();
  const visible = matches.slice(0, verbView.shown);
  $("#verb-count").textContent = matches.length === 0
    ? t("library.verbNone", { query: verbView.query.trim() })
    : matches.length === curriculum.length
      ? t("library.verbCount", { shown: visible.length, total: curriculum.length })
      : t("library.verbMatching", { matches: matches.length, total: curriculum.length, shown: visible.length });
  $("#verb-results").innerHTML = visible.map((verb) => `<article class="reference-card" data-anchor="verb:${verb.id}"><h3><span lang="es">${verb.spanish}</span> <small>— ${verb.english}</small></h3><p><strong>${t("library.usefulForms")}</strong> <span lang="es">yo ${verb.forms.presentYo}; ayer ${verb.forms.preteriteYo}; ${verb.forms.participle}</span></p>${verbTags(verb)}</article>`).join("");
  $("#verb-more").hidden = visible.length >= matches.length;
  $("#verb-more").textContent = t("library.moreCount", { count: Math.min(VERB_PAGE_SIZE, matches.length - visible.length) });
}
function renderFluency() {
  $("#fluency-results").innerHTML = fluencyItems.map(([spanish, english, type, region, note], index) => `<article class="reference-card" data-anchor="fluency:${index}"><h3>${spanish}</h3><p><strong>${english}</strong></p><p>${note}</p><span class="tag">${type}</span><span class="tag">${region}</span></article>`).join("");
}
/* After Dark rows are objects keyed by city. The list is filtered rather than
   paged: a learner reads one city's set, because the whole point is that the
   same word carries a different charge in each. */
const afterDarkView = { city: "bogota" };
function renderMature() {
  const rows = matureItems
    .map((item, index) => ({ item, index }))
    .filter((entry) => entry.item.city === afterDarkView.city);
  $("#mature-results").innerHTML = rows.map(({ item, index }) => {
    const level = String(item.severity || "").toLowerCase();
    return `<article class="reference-card severity-${esc(level)}" data-anchor="mature:${index}"><h3 lang="es">${esc(item.phrase)}</h3><p><strong>${esc(item.equivalent)}</strong></p><p>${esc(item.note)}</p><span class="tag tag-severity">${t("mature.severity")}: ${esc(item.severity)}</span><span class="tag">${t("mature.tag")}</span></article>`;
  }).join("");
  $("#city-note").textContent = t(`afterDark.note.${afterDarkView.city}`);
}
/* Signals are national, not per-city, so they render once and stay put while
   the city tabs swap the word list above them. */
function renderSignals() {
  $("#mature-signals").innerHTML = matureSignals.map(([signal, looksLike, means, direction, respond], index) => `<article class="reference-card" data-anchor="signal:${index}"><h3>${esc(signal)}</h3><p><em>${esc(looksLike)}</em></p><p>${esc(means)}</p><p class="detail"><strong>${t("mature.respond")}</strong> ${esc(respond)}</p><span class="tag">${esc(direction === "es" ? "Español" : "English")}</span></article>`).join("");
}
/*
 * Slang is filtered rather than paged. The list is long enough that scrolling it
 * is useless and short enough that filtering every keystroke costs nothing.
 */
function renderSlang() {
  const query = ($("#slang-search").value || "").trim().toLowerCase();
  const matches = slangItems
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => !query || item.some((cell) => cell.toLowerCase().includes(query)));
  $("#slang-count").textContent = query
    ? t("library.slangMatching", { matches: matches.length, total: slangItems.length })
    : t("library.slangCount", { total: slangItems.length });
  $("#slang-results").innerHTML = matches.map(({ item, index }) => {
    const [phrase, meaning, register, region, safety, note] = item;
    return `<article class="reference-card" data-anchor="slang:${index}"><h3 lang="es">${esc(phrase)}</h3><p><strong>${esc(meaning)}</strong></p><p>${esc(note)}</p><p class="detail"><strong>${t("library.slangSafety")}</strong> ${esc(safety)}</p><span class="tag">${esc(register)}</span><span class="tag">${esc(region)}</span></article>`;
  }).join("");
}
function content() { return ParceroLessonSchema.normalizeContent(currentLesson()[state.direction]); }
/* Authored content is trusted, but it is still text going into innerHTML. A
   lesson that legitimately needs to show "<" should render it, not break the page. */
const escapeChars = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
const esc = (value) => (value === null || value === undefined ? "" : String(value).replace(/[&<>"]/g, (char) => escapeChars[char]));
const targetLang = () => (state.direction === "es" ? ' lang="es"' : ' lang="en"');
const supportLang = () => (state.direction === "es" ? ' lang="en"' : ' lang="es"');
const anchorFor = (field) => `lesson:${currentLesson().id}/${state.direction}/${field}`;
/* A labeled line that simply disappears when the lesson has nothing to say. */
const detail = (key, value, lang) => (value ? `<p class="detail"><strong>${t(key)}</strong> <span${lang || ""}>${esc(value)}</span></p>` : "");
function save() {
  localStorage.setItem("parcero-direction", state.direction);
  localStorage.setItem("parcero-completed", JSON.stringify([...state.completed]));
  localStorage.setItem("parcero-placement", JSON.stringify(state.placement));
  localStorage.setItem("parcero-lesson", state.lessonId);
}

/*
 * Practice history.
 *
 * Resolved lazily and cached, because index.html loads app.js before
 * progress.js — reading ParceroProgress at this point in the file would find
 * nothing. By the time any handler runs, every script has loaded.
 *
 * `progressState` is read through on first use rather than at startup so that
 * a learner who never opens a practice tab pays nothing for it.
 */
let progressState = null;
const progressApi = () => (typeof ParceroProgress === "object" ? ParceroProgress : null);
function progress() {
  const api = progressApi();
  if (!api) return null;
  if (!progressState) progressState = api.load();
  return progressState;
}

function renderPlacement() {
  const questions = placementQuestions[state.direction];
  if (state.placement?.direction === state.direction) {
    $("#assessment").hidden = true;
    $("#assessment-next").hidden = true;
    $("#placement-intro").hidden = true;
    $("#placement-result").hidden = false;
    $("#placement-result").innerHTML = `<div class="result-card"><p class="eyebrow">${t("placement.startingPoint")}</p><h3>${state.placement.level}</h3><p>${state.placement.summary}</p><p><strong>${t("placement.focusFirst")}</strong> ${state.placement.focus.join(", ")}</p></div>`;
    $("#roadmap").hidden = false;
    $("#focus-summary").textContent = t("roadmap.focus", { focus: listJoin(state.placement.focus) });
    $("#pathways").innerHTML = pathways.map(([title, description]) => `<article class="pathway"><h3>${title}</h3><p>${description}</p></article>`).join("");
    return;
  }
  const [skill, prompt, options] = questions[state.question];
  $("#assessment").hidden = false;
  $("#assessment-next").hidden = false;
  $("#assessment").innerHTML = `<p class="assessment-progress">${t("placement.question", { number: state.question + 1, total: questions.length, skill })}</p><article class="assessment-card"><h3>${prompt}</h3><div class="assessment-options">${options.map((option, index) => `<button class="assessment-option" type="button" data-choice="${index}">${option}</button>`).join("")}<button class="assessment-option" type="button" data-choice="unknown">${t("placement.dontKnow")}</button></div></article>`;
  $("#assessment-next").disabled = true;
  $("#assessment-next").textContent = state.question === questions.length - 1 ? t("placement.finish") : t("placement.next");
}
function completePlacement() {
  const unknown = state.responses.filter((response) => response.choice === "unknown").map((response) => response.skill);
  const incorrect = state.responses.filter((response) => response.choice !== "unknown" && !response.correct).map((response) => response.skill);
  const focus = [...new Set([...unknown, ...incorrect])];
  const correct = state.responses.filter((response) => response.correct).length;
  const level = correct <= 1 ? t("placement.level.foundations") : correct <= 3 ? t("placement.level.developing") : t("placement.level.ready");
  state.placement = {
    direction: state.direction, responses: state.responses, level,
    confidence: tn("placement.confidence", unknown.length, { correct, total: state.responses.length, gaps: unknown.length }),
    focus: focus.length ? focus : [t("placement.defaultFocus")],
    summary: focus.length ? t("placement.summary.focus") : t("placement.summary.strong")
  };
  save();
  renderPlacement();
}
function renderLessonList() {
  /*
   * Filtered rather than paged, for the same reason slang is: two hundred
   * situations is far past the point where scrolling finds anything, and
   * matching every keystroke over a list this size costs nothing.
   *
   * The index shown is the lesson's position in the whole course, not its
   * position in the filtered view, so a lesson keeps the same number whatever
   * is typed. Searching still covers lesson.level, which is why "starter"
   * narrows to the foundation tier without a separate control, even though
   * the meta line now prints the band instead.
   */
  const search = $("#lesson-search");
  const query = ((search && search.value) || "").trim().toLowerCase();
  const matches = lessons
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => !query || [
      item[state.direction].title,
      item[state.direction].situation,
      item.verb,
      item.level
    ].some((field) => field && String(field).toLowerCase().includes(query)));
  const count = $("#lesson-count");
  if (count) {
    count.textContent = query
      ? t("lessons.matching", { matches: matches.length, total: lessons.length })
      : t("lessons.count", { total: lessons.length });
  }
  const empty = $("#lesson-empty");
  if (empty) empty.hidden = matches.length > 0;
  /*
   * The meta line shows the band and module the path places this lesson in,
   * not lesson.level. lesson.level is an English-only "Starter · Everyday life"
   * string that the build scripts parse, so it stays in the data and stays
   * searchable -- but printing it here put a third, untranslated level
   * vocabulary on screen next to the A1-B2 bands the path, the pager and the
   * badges all use, in a rail the learner reads two hundred times.
   */
  const railApi = syllabusApi();
  const railModules = railApi && typeof COURSE_MODULES !== "undefined"
    ? railApi.moduleIndex(lessons, COURSE_MODULES)
    : null;
  $("#lesson-list").innerHTML = matches.map(({ item, index }) => {
    const done = state.completed.has(item.id);
    const active = item.id === state.lessonId;
    const entry = railModules ? railModules.get(item.id) : null;
    const meta = entry ? `${entry.band} · ${moduleTitle(entry)}` : item.level;
    return `<li><button class="lesson-link${active ? " active" : ""}" type="button" data-lesson="${item.id}" aria-current="${active ? "true" : "false"}"><span class="lesson-link-index">${index + 1}</span><span class="lesson-link-body"><strong>${item[state.direction].title}</strong><span class="lesson-link-meta">${meta}</span></span><span class="lesson-link-state">${done ? t("lesson.explored") : ""}</span></button></li>`;
  }).join("");
}
function selectLesson(id) {
  if (!lessons.some((item) => item.id === id)) return;
  state.lessonId = id;
  save();
  render();
  document.querySelectorAll(".tab").forEach((item, index) => {
    const active = index === 0;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", active);
    $(`#${item.dataset.panel}`).hidden = !active;
  });
  collapseRailAfterPick();
  $("#lesson").scrollIntoView({ behavior: "smooth", block: "start" });
}
function renderPreview() {
  const first = ParceroLessonSchema.normalizeContent(lessons[0][state.direction]);
  const line = first.dialogue[0];
  const word = first.vocabulary[0];
  $("#preview-target").textContent = line.target;
  $("#preview-target").lang = state.direction === "es" ? "es" : "en";
  $("#preview-translation").textContent = line.translation;
  $("#preview-pronunciation").textContent = line.pronunciation;
  $("#preview-note").innerHTML = `<strong>${esc(word.term)}</strong> — ${esc(word.explanation)}`;
}
/* Which practice question is on screen. Lessons now ask several, so "the
   question" is a position rather than a fact about the lesson. */
const practiceView = { index: 0 };
function practiceQuestions() { return content().practice; }
function currentQuestion() { return practiceQuestions()[practiceView.index] || null; }
/*
 * The first question keeps the original prompt/choices anchors so flags filed
 * against it before this change still resolve. Later questions get their own.
 */
function practiceAnchor(field) {
  return practiceView.index === 0 ? anchorFor(field) : anchorFor(`practice/${practiceView.index}/${field}`);
}
/* Set text and keep the review anchor honest: no text means nothing to flag. */
function setField(selector, value, anchor) {
  const element = $(selector);
  element.textContent = value || "";
  if (value && anchor) element.dataset.anchor = anchor;
  else delete element.dataset.anchor;
  return Boolean(value);
}
function settingLabels() {
  return { who: t("setting.who"), what: t("setting.what"), when: t("setting.when"), where: t("setting.where"), why: t("setting.why") };
}
function addressFormLabel(form) {
  return { usted: t("address.form.usted"), "tú": t("address.form.tu"), vos: t("address.form.vos"), mixed: t("address.form.mixed") }[form] || form;
}
function renderSetting(current) {
  const setting = current.setting;
  const labels = settingLabels();
  const rows = setting
    ? ParceroLessonSchema.SETTING_KEYS.filter((key) => setting[key]).map((key) =>
      `<div class="setting-row" data-anchor="${anchorFor(`setting/${key}`)}"><dt>${labels[key]}</dt><dd>${esc(setting[key])}</dd></div>`).join("")
    : "";
  $("#setting-list").innerHTML = rows;
  $("#setting-list").hidden = !rows;
}
function renderAddress(current) {
  const address = current.address;
  $("#address-card").hidden = !address;
  if (!address) return;
  $("#address-form").textContent = addressFormLabel(address.form);
  setField("#address-who", address.who, anchorFor("address/who"));
  setField("#address-why", address.why, anchorFor("address/why"));
  setField("#address-switch", address.ifYouSwitch, anchorFor("address/ifYouSwitch"));
}
function renderDialogue(current) {
  $("#dialogue").innerHTML = current.dialogue.map((line, index) => {
    const extras = detail("dialogue.literally", line.literal, supportLang()) + detail("dialogue.why", line.why);
    return `<article class="line" data-anchor="${anchorFor(`dialogue/${index}`)}"><strong>${esc(line.speaker)}</strong><div${targetLang()}>${esc(line.target)}</div><p class="translation">${esc(line.translation)}</p><p class="pronunciation">${esc(line.pronunciation)}</p>${extras ? `<div class="line-extras">${extras}</div>` : ""}</article>`;
  }).join("");
}
function renderVocabulary(current) {
  $("#vocabulary").innerHTML = current.vocabulary.map((word, index) => {
    const example = word.example
      ? `<p class="word-example"><span${targetLang()}>${esc(word.example.target)}</span><span class="translation">${esc(word.example.translation)}</span></p>`
      : "";
    const related = word.related.length
      ? `<p class="detail"><strong>${t("vocab.related")}</strong> <span${targetLang()}>${word.related.map(esc).join(" · ")}</span></p>`
      : "";
    const body = [
      `<p class="word-gloss">${esc(word.explanation)}</p>`,
      detail("vocab.literally", word.literal),
      detail("vocab.useWhen", word.useWhen),
      detail("vocab.avoidWhen", word.avoidWhen),
      example,
      detail("vocab.region", word.region),
      related,
      word.register ? `<span class="tag">${esc(word.register)}</span>` : ""
    ].join("");
    return `<article class="word-card" data-anchor="${anchorFor(`vocabulary/${index}`)}"><h3${targetLang()}>${esc(word.term)}</h3>${body}</article>`;
  }).join("");
}
function renderCulture(current) {
  const html = current.culture.filter((row) => row.label || row.body).map((row, index) =>
    `<article class="culture-card" data-anchor="${anchorFor(`culture/${index}`)}"><h4>${esc(row.label)}</h4><p>${esc(row.body)}</p></article>`).join("");
  $("#culture-notes").innerHTML = html;
  $("#culture-section").hidden = !html;
}
function renderPitfalls(current) {
  const html = current.pitfalls.filter((row) => row.mistake).map((row, index) =>
    `<article class="pitfall-card" data-anchor="${anchorFor(`pitfalls/${index}`)}"><h4>${esc(row.mistake)}</h4><p>${esc(row.whyItFails)}</p>${detail("pitfall.instead", row.sayInstead, targetLang())}</article>`).join("");
  $("#pitfalls").innerHTML = html;
  $("#pitfalls-section").hidden = !html;
}
function renderVariations(current) {
  const html = current.variations.filter((row) => row.form).map((row, index) => {
    const tags = [row.register, row.region].filter(Boolean).map((value) => `<span class="tag">${esc(value)}</span>`).join("");
    return `<article class="variation-card" data-anchor="${anchorFor(`variations/${index}`)}"><p class="variation-form"${targetLang()}>${esc(row.form)}</p><p class="variation-when">${esc(row.whenToUse)}</p><p class="word-tags">${tags}</p></article>`;
  }).join("");
  $("#variations").innerHTML = html;
  $("#variations-section").hidden = !html;
}
function renderPractice() {
  const questions = practiceQuestions();
  const question = questions[practiceView.index];
  $("#practice-progress").textContent = questions.length > 1
    ? t("practice.progress", { number: practiceView.index + 1, total: questions.length })
    : "";
  $("#practice-feedback").textContent = "";
  $("#practice-next").hidden = true;
  if (!question) {
    $("#practice-prompt").textContent = "";
    $("#practice-tests").textContent = "";
    $("#choices").innerHTML = "";
    return;
  }
  setField("#practice-prompt", question.prompt, practiceAnchor("prompt"));
  $("#practice-tests").textContent = question.tests ? t("practice.tests", { tests: question.tests }) : "";
  $("#choices").innerHTML = question.choices.map((choice, index) => `<button class="choice" type="button" data-answer="${index}">${esc(choice)}</button>`).join("");
  $("#choices").dataset.anchor = practiceAnchor("choices");
}
function render() {
  const current = content();
  const lesson = currentLesson();
  if (window.ParceroI18n) window.ParceroI18n.applyI18n(state.direction);
  $("#lesson-level").textContent = lesson.level;
  renderBand(lesson);
  $("#lesson-title").textContent = current.title;
  $("#lesson-situation").textContent = current.situation;
  renderSetting(current);
  renderAddress(current);
  renderDialogue(current);
  renderVocabulary(current);
  renderCulture(current);
  renderPitfalls(current);
  renderVariations(current);
  $("#culture-note").textContent = current.note;
  $("#lesson-heading").dataset.anchor = anchorFor("heading");
  $("#culture-note").dataset.anchor = anchorFor("note");
  practiceView.index = 0;
  renderPractice();
  $("#speech-status").textContent = "";
  renderLessonList();
  renderPreview();
  renderStories();
  updateProgress();
  renderPlacement();
}
/*
 * The level a lesson teaches, and the level the learner has shown.
 *
 * Both are derived — see cefr.js. Nothing here decides what B1 means; it only
 * asks and renders the answer, so a rewritten lesson moves its own badge.
 */
const cefrApi = () => (typeof ParceroCEFR === "object" ? ParceroCEFR : null);

/*
 * Why a lesson carries two bands, and why they are allowed to disagree.
 *
 * "Teaches" is the syllabus level: the stage the course puts this module at.
 * "Language used" is the content level: the hardest grammar the dialogue
 * actually contains. They differ on purpose, because a real conversation at a
 * Bogotá counter carries a relative clause whether or not the lesson is about
 * one, and flattening the two would either overstate what the learner has been
 * taught or force the dialogue to stop sounding Colombian.
 *
 * Unlabeled, that difference reads as a contradiction — stage A1, badge B1. So
 * each badge names the claim it makes, and this comment is here because the
 * next person to see them will otherwise "fix" one of them.
 */
/*
 * COURSE_MODULES.title is keyed by the language the string is written in, not
 * by the direction being studied. Those two keys look identical -- both are
 * "en"/"es" -- which is why every caller here had been indexing it with
 * state.direction and handing the learner a module name written in the one
 * language they cannot read yet. workbook.js got this right from the start by
 * deriving a uiLang first; this is the same derivation, kept next to the
 * renderers that need it so the next caller copies the correct one.
 */
function moduleTitle(entry) {
  if (!entry || !entry.title) return entry && entry.id ? entry.id : "";
  const language = state.direction === "es" ? "en" : "es";
  return entry.title[language] || entry.title.en || entry.id || "";
}

function renderTeaches(lesson) {
  const badge = $("#lesson-teaches");
  const api = syllabusApi();
  if (!badge) return;
  if (!api || typeof COURSE_MODULES === "undefined") {
    badge.hidden = true;
    return;
  }
  const entry = api.moduleIndex(lessons, COURSE_MODULES).get(lesson.id);
  if (!entry) {
    badge.hidden = true;
    return;
  }
  badge.textContent = t("level.teaches", {
    band: entry.band,
    module: moduleTitle(entry)
  });
  badge.hidden = false;
}

function renderBand(lesson) {
  renderTeaches(lesson);
  const badge = $("#lesson-band");
  const api = cefrApi();
  if (!badge) return;
  if (!api) {
    badge.hidden = true;
    return;
  }
  const result = api.lessonBand(lesson, state.direction);
  /* A floored A1 has no structure to name, so it says what it is instead of
     pointing at a feature it cannot evidence. */
  const top = result.features
    .filter((feature) => feature.band === result.band)
    .map((feature) => feature.name)[0];
  badge.textContent = top
    ? t("level.lessonBand", { band: result.band, feature: top })
    : t("level.lessonBasic", { band: result.band });
  badge.hidden = false;
}

/* Accuracy in 0..1 for one lesson in the current direction, or null when it
   has never been practiced. Shared by the level ladder and the path so the two
   can never disagree about what counts as finished. */
function lessonAccuracy(lesson) {
  const api = progressApi();
  if (!api) return null;
  const score = api.lessonScore(progress(), state.direction, lesson.id);
  return score ? score.accuracy : null;
}

function renderLevel() {
  const panel = $("#level-panel");
  const api = cefrApi();
  if (!panel || !api) return;

  const result = api.attainment(lessons, state.direction, lessonAccuracy);

  $("#level-reached").textContent = result.reached || t("level.none");
  const next = result.bands.find((band) => band.taught && !band.met);
  $("#level-note").textContent = next
    ? t("level.next", { band: next.band, strong: next.strong, needed: next.needed })
    : t("level.top");

  $("#level-ladder").innerHTML = result.bands
    .map((band) => {
      if (!band.taught) {
        return `<li class="level-step is-untaught"><span class="level-step-band">${esc(band.band)}</span><span class="level-step-count">${t("level.notTaught")}</span></li>`;
      }
      const width = band.needed ? Math.min(100, Math.round((band.strong / band.needed) * 100)) : 0;
      return `<li class="level-step${band.met ? " is-met" : ""}"><span class="level-step-band">${esc(band.band)}</span><span class="level-step-bar"><span class="level-step-fill" style="width:${width}%"></span></span><span class="level-step-count">${t("level.ofNeeded", { strong: band.strong, needed: band.needed })}</span></li>`;
    })
    .join("");
}

/*
 * Where the current lesson sits on the path, not in the authored array.
 *
 * Returns null when the path cannot place the lesson, which is a content bug
 * (a block with no module entry) rather than a zero -- so the pager hides
 * itself instead of offering a step to nowhere.
 */
function pathNeighbors() {
  const api = syllabusApi();
  if (!api || typeof api.neighbors !== "function" || typeof COURSE_MODULES === "undefined") return null;
  return api.neighbors(currentLesson(), lessons, COURSE_MODULES);
}

function updateProgress() {
  const lesson = currentLesson();
  const completed = state.completed.has(lesson.id);
  const total = lessons.length;
  const explored = lessons.filter((item) => state.completed.has(item.id)).length;
  $("#progress-label").textContent = t("progress.count", { explored, total });
  $("#progress-bar").style.width = `${Math.round((explored / total) * 100)}%`;
  $("#complete-lesson").textContent = completed ? t("action.completed") : t("action.complete");
  renderPager();
  renderLevel();
  renderPath();
}

/*
 * The pager walks the path, and says where it is going.
 *
 * It used to step through `lessons`, the authored array, which is not the
 * order the course is taught in: 23 of those steps cross a CEFR stage, 10 run
 * backwards, and the worst jumps 112 positions. Naming the destination is the
 * other half of the fix -- an unlabeled "Next lesson" gave a learner no way to
 * notice they had just been handed a B2 dialogue.
 */
function renderPager() {
  const spot = pathNeighbors();
  const previous = $("#previous-lesson");
  const next = $("#next-lesson");
  const title = $("#pager-next-title");
  const where = $("#pager-next-where");

  if (!spot) {
    previous.disabled = true;
    next.disabled = true;
    title.textContent = "";
    where.textContent = "";
    $("#lesson-position").textContent = "";
    return;
  }

  previous.disabled = !spot.previous;
  next.disabled = !spot.next;
  $("#lesson-position").textContent = t("pager.position", { index: spot.index + 1, total: spot.total });

  if (spot.next) {
    const api = syllabusApi();
    const entry = api ? api.moduleIndex(lessons, COURSE_MODULES).get(spot.next.id) : null;
    title.textContent = spot.next[state.direction].title;
    where.textContent = entry ? `${entry.band} · ${moduleTitle(entry)}` : "";
  } else {
    title.textContent = t("pager.endTitle");
    where.textContent = "";
  }
}

/*
 * The path: the course as a route, not a menu.
 *
 * The Lessons view answers "show me everything"; this answers "what do I do
 * next". It reads the authored stage on each module rather than detecting
 * grammar, because the two measure different things — see syllabus.js. A
 * module is a `details` so the page opens as four readable stages instead of
 * 233 rows, and so expanding needs no script to be keyboard accessible.
 */
const syllabusApi = () => (typeof ParceroSyllabus === "object" ? ParceroSyllabus : null);

function renderPath() {
  const host = $("#path-stages");
  const api = syllabusApi();
  if (!host || !api || typeof COURSE_MODULES === "undefined") return;

  const plan = api.outline(lessons, COURSE_MODULES);
  const report = api.progress(lessons, COURSE_MODULES, lessonAccuracy);
  const lessonsOf = new Map();
  for (const stage of plan.stages) {
    for (const entry of stage.modules) lessonsOf.set(entry.id, entry.lessons);
  }

  $("#path-overall").textContent = t("path.overall", { done: report.done, total: report.total });
  $("#path-overall-bar").style.width = `${Math.round(report.share * 100)}%`;
  $("#path-mastered-note").textContent = t("path.mastered", { percent: Math.round(api.PASS * 100) });

  /* Counted, never typed. The home page claimed "eight guided modules" for as
     long as there were eight; it went on claiming it at seventy-eight. */
  const blurb = $("#hub-path-blurb");
  if (blurb) {
    blurb.textContent = t("hub.path.blurb", {
      modules: COURSE_MODULES.length,
      lessons: lessons.length
    });
  }

  /* Where to resume. Null once everything is mastered, and the card goes with
     it rather than pointing at a lesson that does not exist. */
  const resume = $("#path-resume");
  const resumeGo = $("#path-resume-go");
  if (report.next) {
    const lesson = lessons.find((item) => item.id === report.next.lessonId);
    const stage = report.stages.find((item) => item.band === report.next.band);
    const entry = stage && stage.modules.find((item) => item.id === report.next.moduleId);
    $("#path-resume-label").textContent = report.done ? t("path.resumeLabel") : t("path.startLabel");
    $("#path-resume-lesson").textContent = lesson ? lesson[state.direction].title : report.next.lessonId;
    $("#path-resume-where").textContent = entry
      ? `${report.next.band} · ${moduleTitle(entry)}`
      : report.next.band;
    resumeGo.dataset.goto = report.next.lessonId;
    resume.hidden = false;
  } else {
    resume.hidden = true;
  }

  /* The home page's first button names the lesson it opens, so a returning
     learner has one obvious action instead of thirteen links to weigh. It
     still points at the path, which is where "start the course" belongs when
     there is no progress to resume. */
  const heroStart = $("#hero-start");
  if (heroStart) {
    const resumeLesson = report.next && lessons.find((item) => item.id === report.next.lessonId);
    const started = report.done > 0;
    if (started && resumeLesson) {
      heroStart.textContent = t("hero.continue", { title: resumeLesson[state.direction].title });
      heroStart.setAttribute("href", "#lessons");
      heroStart.dataset.goto = resumeLesson.id;
    } else {
      heroStart.textContent = t("hero.start");
      heroStart.setAttribute("href", "#path");
      delete heroStart.dataset.goto;
    }
  }

  const railCount = $("#rail-toggle-count");
  if (railCount) railCount.textContent = String(lessons.length);

  /* Re-rendering on every answered question would otherwise slam shut every
     module the learner had opened, so the open set is carried across. */
  const open = new Set();
  host.querySelectorAll("details[open][data-module]").forEach((node) => open.add(node.dataset.module));
  if (report.next) open.add(report.next.moduleId);

  host.innerHTML = report.stages.map((stage) => {
    const width = Math.round(stage.share * 100);
    const modules = stage.modules.map((entry) => {
      const items = lessonsOf.get(entry.id) || [];
      const rows = items.map((lesson) => {
        const value = lessonAccuracy(lesson);
        const done = typeof value === "number" && value >= api.PASS;
        const isNext = report.next && report.next.lessonId === lesson.id;
        const classes = `path-lesson${done ? " is-done" : ""}${isNext ? " is-next" : ""}`;
        return `<li><button type="button" class="${classes}" data-goto="${esc(lesson.id)}">` +
          `<span class="path-lesson-mark" aria-hidden="true"></span>` +
          `<span>${esc(lesson[state.direction].title)}</span></button></li>`;
      }).join("");
      const label = moduleTitle(entry);
      return `<li class="path-module${entry.complete ? " is-complete" : ""}">` +
        `<details data-module="${esc(entry.id)}"${open.has(entry.id) ? " open" : ""}>` +
        `<summary><span class="path-module-mark" aria-hidden="true"></span>` +
        `<span class="path-module-title">${esc(label)}</span>` +
        `<span class="path-module-count">${esc(entry.complete
          ? t("path.complete")
          : t("path.moduleCount", { done: entry.done, total: entry.total }))}</span></summary>` +
        `<ol class="path-lessons">${rows}</ol></details></li>`;
    }).join("");

    return `<li class="path-stage${stage.complete ? " is-complete" : ""}">` +
      `<div class="path-stage-head">` +
      `<span class="path-stage-band">${esc(stage.band)}</span>` +
      `<div class="path-stage-copy"><strong>${esc(t(`path.stage.${stage.band}.name`))}</strong>` +
      `<p>${esc(t(`path.stage.${stage.band}.blurb`))}</p></div>` +
      `<span class="path-stage-count">${esc(t("path.stageCount", {
        done: stage.modulesComplete, total: stage.moduleCount
      }))}</span></div>` +
      `<div class="path-stage-track" aria-hidden="true"><span style="width:${width}%"></span></div>` +
      `<ol class="path-modules">${modules}</ol></li>`;
  }).join("");
}


/*
 * Grade the answer just given and keep it.
 *
 * Written so that a missing progress.js costs the record and nothing else —
 * the practice round still runs, exactly as the deck still runs without
 * srs.js. Storage is written per answer rather than batched at the end of the
 * round because a learner who closes the tab mid-lesson has still done the
 * work, and losing it would reproduce the bug this replaces.
 */
function recordPractice(correct) {
  const api = progressApi();
  const lesson = currentLesson();
  if (!api || !lesson) return;
  progressState = api.record(progress(), {
    direction: state.direction,
    lessonId: lesson.id,
    index: practiceView.index,
    correct
  });
  api.save(progressState);
}
document.querySelectorAll("input[name=direction]").forEach((input) => {
  input.checked = input.value === state.direction;
  input.addEventListener("change", () => { state.direction = input.value; state.question = 0; state.responses = []; save(); render(); });
});
$("#assessment").addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice]");
  if (!button) return;
  document.querySelectorAll(".assessment-option").forEach((item) => item.classList.remove("selected"));
  button.classList.add("selected");
  const question = placementQuestions[state.direction][state.question];
  state.responses[state.question] = { skill: question[0], choice: button.dataset.choice, correct: Number(button.dataset.choice) === question[3] };
  $("#assessment-next").disabled = false;
});
$("#assessment-next").addEventListener("click", () => {
  if (!state.responses[state.question]) return;
  if (state.question === placementQuestions[state.direction].length - 1) completePlacement();
  else { state.question += 1; renderPlacement(); }
});
document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach((item) => { const active = item === tab; item.classList.toggle("active", active); item.setAttribute("aria-selected", active); $(`#${item.dataset.panel}`).hidden = !active; });
}));
$("#choices").addEventListener("click", (event) => {
  const choice = event.target.closest("[data-answer]");
  if (!choice) return;
  const question = currentQuestion();
  if (!question) return;
  const correct = Number(choice.dataset.answer) === question.answer;
  document.querySelectorAll(".choice").forEach((item) => item.disabled = true);
  choice.classList.add(correct ? "correct" : "incorrect");
  if (!correct) document.querySelector(`[data-answer="${question.answer}"]`).classList.add("correct");
  $("#practice-feedback").textContent = correct ? t("practice.correct") : t("practice.incorrect");
  /* The result is the whole point of asking. Recording it is what lets a
     missed question come back instead of vanishing the moment the learner
     clicks Next. */
  recordPractice(correct);
  $("#practice-next").hidden = practiceView.index >= practiceQuestions().length - 1;
});
$("#practice-next").addEventListener("click", () => {
  if (practiceView.index >= practiceQuestions().length - 1) return;
  practiceView.index += 1;
  renderPractice();
  const first = $("#choices").querySelector(".choice");
  if (first) first.focus();
});
$("#complete-lesson").addEventListener("click", () => { state.completed.add(currentLesson().id); save(); renderLessonList(); updateProgress(); });
$("#lesson-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson]");
  if (button) selectLesson(button.dataset.lesson);
});
$("#previous-lesson").addEventListener("click", () => {
  const spot = pathNeighbors();
  if (spot && spot.previous) selectLesson(spot.previous.id);
});
$("#next-lesson").addEventListener("click", () => {
  const spot = pathNeighbors();
  if (spot && spot.next) selectLesson(spot.next.id);
});
$("#reset-progress").addEventListener("click", () => { state.completed.clear(); state.placement = null; state.question = 0; state.responses = []; const api = progressApi(); if (api) progressState = api.clear(); save(); render(); });
$("#listen-dialogue").addEventListener("click", () => {
  if (!("speechSynthesis" in window)) { $("#speech-status").textContent = t("speech.unsupported"); return; }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(content().dialogue.map((line) => line.target).join(" "));
  utterance.lang = state.direction === "es" ? "es-CO" : "en-US";
  speechSynthesis.speak(utterance);
  $("#speech-status").textContent = t("speech.playing");
});
$("#verb-search").addEventListener("input", (event) => {
  verbView.query = event.target.value;
  verbView.shown = VERB_PAGE_SIZE;
  renderVerbs();
});
$("#verb-more").addEventListener("click", () => {
  verbView.shown += VERB_PAGE_SIZE;
  renderVerbs();
  $("#verb-more").focus();
});
document.querySelectorAll(".library-tab").forEach((tab) => tab.addEventListener("click", () => {
  document.querySelectorAll(".library-tab").forEach((item) => {
    const active = item === tab;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", active);
    $(`#${item.dataset.library}-library`).hidden = !active;
  });
}));
document.querySelectorAll(".city-tab").forEach((tab) => tab.addEventListener("click", () => {
  afterDarkView.city = tab.dataset.city;
  document.querySelectorAll(".city-tab").forEach((item) => {
    const active = item === tab;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", active);
  });
  renderMature();
}));
/* ---------- reading room ----------
   The one place in this course where the learner meets language in paragraphs
   instead of turns. Two rules drive every line below:

   1. `state.direction` is the language being STUDIED. So the story text is
      rendered in `direction`, and every explanation — glossary notes, grammar
      notes, the labels on them — is rendered in the OTHER language, the one
      the learner already owns. Getting this backwards produces a page that
      looks right and teaches nothing, which is why it is computed once here
      rather than inlined at each use.
   2. The translation is a crutch the learner must be able to put down. It
      toggles rather than sitting there permanently, and it is forced back ON
      each time a story is opened, because a learner who cannot get in at all
      reads nothing. */
const STORY_BANDS = ["A1", "A2", "B1", "B2"];
const storyView = { band: "all", id: null, parallel: true };
// Sorted so the list always reads easiest-first, whatever order the stories
// were authored in. The sort is stable, so authored order survives within a band.
const storyRows = () => (typeof storyItems === "undefined"
  ? []
  : storyItems.slice().sort((a, b) => STORY_BANDS.indexOf(a.band) - STORY_BANDS.indexOf(b.band)));
const storyStudied = () => state.direction;
const storyHome = () => (state.direction === "es" ? "en" : "es");
const storyVisible = () => storyRows().filter((story) => storyView.band === "all" || story.band === storyView.band);

function renderStoryList() {
  const studied = storyStudied();
  const home = storyHome();
  const rows = storyVisible();
  const total = storyRows().length;
  $("#story-count").textContent = rows.length === total
    ? t("stories.count", { total })
    : t("stories.matching", { matches: rows.length, total });
  $("#story-list").innerHTML = rows.map((story) => `<button class="story-card" type="button" data-story="${esc(story.id)}">
      <span class="story-card-top"><span class="story-band">${esc(story.band)}</span><span class="story-card-minutes">${t("stories.minutes", { minutes: story.minutes })}</span></span>
      <span class="story-card-title" lang="${studied}">${esc(story.title[studied])}</span>
      <span class="story-card-alt" lang="${home}">${esc(story.title[home])}</span>
      <span class="story-card-blurb" lang="${home}">${esc(story.blurb[home])}</span>
      <span class="story-card-meta">${esc(story.era)} · ${esc(story.place[home])}</span>
    </button>`).join("");
}

/* Paragraphs are the reason this section exists, so they are the only part
   that changes shape with the toggle: on, the home language sits beside the
   studied one (below it on a phone); off, it is not in the DOM at all, so a
   learner cannot read it out of the corner of their eye. */
function storyParagraphs(story) {
  const studied = storyStudied();
  const home = storyHome();
  return story.paragraphs.map((para, index) => `<div class="story-para${storyView.parallel ? " story-para-parallel" : ""}">
      <p class="story-line story-line-studied" lang="${studied}"><span class="story-para-number" aria-hidden="true">${index + 1}</span>${esc(para[studied])}</p>
      ${storyView.parallel ? `<p class="story-line story-line-home" lang="${home}">${esc(para[home])}</p>` : ""}
    </div>`).join("");
}

function renderStoryReader() {
  const story = storyRows().find((item) => item.id === storyView.id);
  $("#story-reader").hidden = !story;
  $("#story-list").hidden = Boolean(story);
  document.querySelector("#stories .tabs").hidden = Boolean(story);
  $("#story-count").hidden = Boolean(story);
  if (!story) { $("#story-output").innerHTML = ""; return; }
  const studied = storyStudied();
  const home = storyHome();
  const glossary = story.glossary.map((entry) => `<li class="story-term">
      <p class="story-term-head"><strong lang="${studied}">${esc(entry[studied])}</strong> <span lang="${home}">${esc(entry[home])}</span></p>
      <p class="story-term-note" lang="${home}">${esc(entry.note[home])}</p>
    </li>`).join("");
  const structures = story.structures.map((item) => `<article class="story-structure">
      <h4 lang="${home}">${esc(item.label[home])}</h4>
      <p class="story-quote" lang="${studied}">${esc(item.quote[studied])}</p>
      <p class="story-structure-note" lang="${home}">${esc(item.note[home])}</p>
      <span class="tag">${esc(item.key)}</span>
    </article>`).join("");
  const questions = story.questions.map((item, index) => `<details class="story-question">
      <summary lang="${studied}"><span class="story-q-number" aria-hidden="true">${index + 1}</span>${esc(item.q[studied])}</summary>
      <p lang="${studied}">${esc(item.a[studied])}</p>
      <p class="story-answer-home" lang="${home}">${esc(item.a[home])}</p>
    </details>`).join("");
  $("#story-output").innerHTML = `<header class="story-head">
      <p class="story-head-meta"><span class="story-band">${esc(story.band)}</span> <span>${esc(story.era)}</span> <span>${esc(story.place[home])}</span> <span>${t("stories.minutes", { minutes: story.minutes })}</span></p>
      <h3 lang="${studied}">${esc(story.title[studied])}</h3>
      <p class="story-head-alt" lang="${home}">${esc(story.title[home])}</p>
      <p class="story-blurb" lang="${home}">${esc(story.blurb[home])}</p>
    </header>
    <div class="story-body">${storyParagraphs(story)}</div>
    <p class="story-caveat" lang="${home}"><strong>${t("stories.caveat")}</strong> ${esc(story.caveat[home])}</p>
    <section class="story-panel">
      <h4 class="story-panel-title">${t("stories.glossary")}</h4>
      <ul class="story-glossary">${glossary}</ul>
    </section>
    <section class="story-panel">
      <h4 class="story-panel-title">${t("stories.structures")}</h4>
      <p class="story-panel-lead">${t("stories.structuresLead")}</p>
      <div class="story-structures">${structures}</div>
    </section>
    <section class="story-panel">
      <h4 class="story-panel-title">${t("stories.questions")}</h4>
      <p class="story-panel-lead">${t("stories.questionsLead")}</p>
      <div class="story-questions">${questions}</div>
    </section>`;
}

function renderStories() {
  renderStoryList();
  renderStoryReader();
  const button = $("#story-parallel");
  button.setAttribute("aria-pressed", String(storyView.parallel));
  button.textContent = t(storyView.parallel ? "stories.hideTranslation" : "stories.showTranslation");
}

document.querySelectorAll(".story-tab").forEach((tab) => tab.addEventListener("click", () => {
  storyView.band = tab.dataset.band;
  storyView.id = null;
  document.querySelectorAll(".story-tab").forEach((item) => {
    const active = item === tab;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", active);
  });
  renderStories();
}));
$("#story-list").addEventListener("click", (event) => {
  const card = event.target.closest("[data-story]");
  if (!card) return;
  storyView.id = card.dataset.story;
  storyView.parallel = true;
  renderStories();
  $("#story-back").focus();
});
$("#story-back").addEventListener("click", () => {
  storyView.id = null;
  renderStories();
});
$("#story-parallel").addEventListener("click", () => {
  storyView.parallel = !storyView.parallel;
  renderStories();
});

renderVerbs();
renderFluency();
renderMature();
renderSignals();
renderSlang();
$("#slang-search").addEventListener("input", renderSlang);
$("#lesson-search").addEventListener("input", renderLessonList);
render();

/* ---------- module navigation ----------
   Each module is a view, so only one is on screen at a time. Routing runs off
   the hash the nav already used, which keeps every existing in-page link, the
   back button and any bookmark working without a second link scheme. */
const VIEWS = ["home", "path", "lessons", "flashcards", "placement", "library", "workbook", "stories", "after-dark"];
const ROUTE_FOR_HASH = {
  "": "home", "#top": "home",
  "#path": "path",
  "#lessons": "lessons", "#lesson": "lessons",
  "#flashcards": "flashcards",
  "#placement": "placement", "#roadmap": "placement",
  "#library": "library",
  "#workbook": "workbook",
  "#stories": "stories", "#reading": "stories",
  "#after-dark": "after-dark"
};
function showView(name, options) {
  const target = VIEWS.includes(name) ? name : "home";
  for (const view of VIEWS) $(`#view-${view}`).hidden = view !== target;
  document.querySelectorAll(".site-nav a[href^='#']").forEach((link) => {
    const active = ROUTE_FOR_HASH[link.getAttribute("href")] === target;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  /* The midnight palette belongs to After Dark alone, so it is a flag on the
     root element rather than a theme the rest of the app has to opt out of. */
  document.documentElement.classList.toggle("midnight", target === "after-dark");
  if (!options || options.scroll !== false) window.scrollTo({ top: 0 });
}
const viewForHash = () => ROUTE_FOR_HASH[location.hash] || "home";
window.addEventListener("hashchange", () => showView(viewForHash()));
showView(viewForHash(), { scroll: false });

/* ---------- lesson rail ---------- */

/*
 * The rail is the index; the lesson beside it is the work.
 *
 * This replaces a nav dropdown that listed all 233 lessons grouped by module.
 * That menu duplicated the path, disagreed with it about order, and was a
 * fourth way to reach a lesson in an app that already had three. The search
 * box it wrapped survives here, next to the list it filters.
 *
 * On a narrow screen the rail collapses, because an index above the lesson is
 * the exact layout that pushed lesson content 15,000px down the page.
 */
const railToggle = $("#rail-toggle");
const railBody = $("#rail-body");
const RAIL_WIDE = window.matchMedia("(min-width: 60rem)");

function setRailOpen(open) {
  railBody.hidden = !open;
  railToggle.setAttribute("aria-expanded", String(open));
  railToggle.classList.toggle("is-open", open);
}

/* Wide screens show both panes at once, so the toggle is meaningless there;
   it is hidden by CSS and the body forced open, or a resize could leave the
   rail permanently closed with no control to reopen it. */
function syncRail() {
  if (RAIL_WIDE.matches) {
    railBody.hidden = false;
    railToggle.setAttribute("aria-expanded", "true");
  } else {
    setRailOpen(false);
  }
}
railToggle.addEventListener("click", () => {
  if (RAIL_WIDE.matches) return;
  setRailOpen(railBody.hidden);
});
RAIL_WIDE.addEventListener("change", syncRail);
syncRail();

/*
 * Picking from the index means you are done with the index. On a narrow screen
 * the open rail sits above the lesson, so leaving it open after a pick puts the
 * lesson 13,000px down the page -- the same defect the two-pane layout was
 * built to remove, just triggered a click later. On a wide screen the rail is
 * a sibling column and costs the lesson nothing, so it stays.
 */
function collapseRailAfterPick() {
  if (typeof RAIL_WIDE === "undefined" || RAIL_WIDE.matches) return;
  setRailOpen(false);
}

/*
 * Both entry points into the path lead to the same place, so they share one
 * jump. The hash is set first so the back button returns to the path rather
 * than to whatever was on screen before it.
 */
function goToLesson(id) {
  if (!id) return;
  if (location.hash !== "#lessons") location.hash = "#lessons";
  else showView("lessons");
  setTimeout(() => selectLesson(id), 0);
}
$("#path-stages").addEventListener("click", (event) => {
  const item = event.target.closest("[data-goto]");
  if (item) goToLesson(item.dataset.goto);
});
$("#path-resume-go").addEventListener("click", (event) => {
  goToLesson(event.currentTarget.dataset.goto);
});
/* The hero button doubles as "resume" once there is progress, so it carries a
   lesson id the same way the path's own resume button does. */
$("#hero-start").addEventListener("click", (event) => {
  const id = event.currentTarget.dataset.goto;
  if (!id) return;
  event.preventDefault();
  goToLesson(id);
});
