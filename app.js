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
   * The meta line carries the verb as well as the level. The curriculum is
   * anchored one lesson per verb, so the verb is the thing a learner looks a
   * lesson up by -- and four lessons are legitimately titled after a different
   * verb than they teach, because the title describes the situation and the
   * situation belongs to whoever is speaking. "Aprender a hacer ajiaco" is the
   * enseñar lesson: the reader is the one being taught. Without the verb shown,
   * that title sits in the list looking like the aprender lesson, which has its
   * own entry.
   */
  /*
   * Filtered rather than paged, for the same reason slang is: two hundred
   * situations is far past the point where scrolling finds anything, and
   * matching every keystroke over a list this size costs nothing.
   *
   * The index shown is the lesson's position in the whole course, not its
   * position in the filtered view, so a lesson keeps the same number whatever
   * is typed. Searching covers the title, the verb and the level, which is why
   * "starter" narrows to the foundation tier without a separate control.
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
  $("#lesson-list").innerHTML = matches.map(({ item, index }) => {
    const done = state.completed.has(item.id);
    const active = item.id === state.lessonId;
    const meta = item.verb ? `${item.level} · ${item.verb}` : item.level;
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

function renderBand(lesson) {
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

function renderLevel() {
  const panel = $("#level-panel");
  const api = cefrApi();
  const progressApiRef = progressApi();
  if (!panel || !api) return;

  const scoreOf = (lesson) => {
    if (!progressApiRef) return null;
    const score = progressApiRef.lessonScore(progress(), state.direction, lesson.id);
    return score ? score.accuracy : null;
  };
  const result = api.attainment(lessons, state.direction, scoreOf);

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

function updateProgress() {
  const lesson = currentLesson();
  const index = lessonIndex();
  const completed = state.completed.has(lesson.id);
  const total = lessons.length;
  const explored = lessons.filter((item) => state.completed.has(item.id)).length;
  $("#progress-label").textContent = t("progress.count", { explored, total });
  $("#progress-bar").style.width = `${Math.round((explored / total) * 100)}%`;
  $("#complete-lesson").textContent = completed ? t("action.completed") : t("action.complete");
  $("#lesson-position").textContent = t("pager.position", { index: index + 1, total });
  $("#previous-lesson").disabled = index === 0;
  $("#next-lesson").disabled = index === total - 1;
  renderLevel();
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
$("#previous-lesson").addEventListener("click", () => selectLesson(lessons[Math.max(0, lessonIndex() - 1)].id));
$("#next-lesson").addEventListener("click", () => selectLesson(lessons[Math.min(lessons.length - 1, lessonIndex() + 1)].id));
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
const VIEWS = ["home", "lessons", "flashcards", "placement", "library", "workbook", "after-dark"];
const ROUTE_FOR_HASH = {
  "": "home", "#top": "home",
  "#lessons": "lessons", "#lesson": "lessons",
  "#flashcards": "flashcards",
  "#placement": "placement", "#roadmap": "placement",
  "#library": "library",
  "#workbook": "workbook",
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

/* ---------- modules menu ---------- */
const modulesButton = $("#modules-button");
const modulesMenu = $("#modules-menu");
const modulesList = $("#modules-list");
const modulesFilter = $("#modules-filter");

/*
 * The menu is named "Modules" but used to be a flat list of every lesson. At
 * eight lessons that was a menu; at 233 it is a wall, and on a phone it is a
 * wall you scroll blind. So the list is grouped under the module each lesson
 * belongs to, and filtered from the box at the top.
 *
 * Grouping is derived from `sourceFile`, the same key the workbook uses, so a
 * lesson lands in the right module by construction. COURSE_MODULES supplies
 * only the human title. A block with no title still renders, under its own
 * file name, because a lesson you cannot reach is worse than an ugly heading.
 */
function fillModulesMenu(query) {
  const needle = String(query == null ? modulesFilter.value : query).trim().toLowerCase();
  const titles = new Map(COURSE_MODULES.map((module) => [module.block, module.title[state.direction]]));
  const groups = new Map();
  lessons.map((lesson, index) => ({
    id: lesson.id,
    number: index + 1,
    heading: titles.get(lesson.sourceFile) || lesson.sourceFile,
    title: lesson[state.direction].title,
    level: lesson.level
  })).forEach((entry) => {
    const hit = !needle ||
      entry.title.toLowerCase().includes(needle) ||
      entry.level.toLowerCase().includes(needle) ||
      entry.heading.toLowerCase().includes(needle);
    if (!hit) return;
    if (!groups.has(entry.heading)) groups.set(entry.heading, []);
    groups.get(entry.heading).push(entry);
  });

  if (!groups.size) {
    modulesList.innerHTML = `<p class="modules-empty">${esc(t("nav.modulesEmpty"))}</p>`;
    return;
  }
  modulesList.innerHTML = [...groups].map(([heading, entries]) =>
    `<div class="modules-group" role="group" aria-label="${esc(heading)}">` +
    `<p class="modules-group-title">${esc(heading)}</p>` +
    entries.map((entry) =>
      `<button type="button" role="menuitem" data-goto="${esc(entry.id)}">` +
      `<span class="modules-index">${entry.number}</span>` +
      `<span class="modules-body"><strong>${esc(entry.title)}</strong>` +
      `<small>${esc(entry.level)}</small></span></button>`).join("") +
    `</div>`).join("");
}
function setModulesOpen(open) {
  if (open) {
    modulesFilter.value = "";
    fillModulesMenu("");
  }
  modulesMenu.hidden = !open;
  modulesButton.setAttribute("aria-expanded", String(open));
  modulesButton.parentElement.classList.toggle("is-open", open);
  if (open) modulesFilter.focus();
}
modulesFilter.addEventListener("input", () => fillModulesMenu());
modulesButton.addEventListener("click", (event) => {
  event.stopPropagation();
  setModulesOpen(modulesMenu.hidden);
});
modulesMenu.addEventListener("click", (event) => {
  const item = event.target.closest("[data-goto]");
  if (!item) return;
  setModulesOpen(false);
  if (location.hash !== "#lessons") location.hash = "#lessons";
  else showView("lessons");
  /* hashchange is queued, not synchronous, so its scroll-to-top would land
     after a direct call and undo the jump to the chosen lesson. */
  setTimeout(() => selectLesson(item.dataset.goto), 0);
});
document.addEventListener("click", (event) => {
  if (!modulesButton.parentElement.contains(event.target)) setModulesOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || modulesMenu.hidden) return;
  setModulesOpen(false);
  modulesButton.focus();
});
