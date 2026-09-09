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
  /* level is real, differentiated data. register and regionality are still the
     seeded placeholder on every verb, so showing them would state as fact
     something no Colombian speaker has checked. They stay in the data — the
     report tab can still target them — but they are not published until a
     review has actually happened. */
  const tags = [verb.level];
  if (!verb.reviewStatus) tags.push(verb.register, verb.regionality);
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
function renderMature() {
  $("#mature-results").innerHTML = matureItems.map(([phrase, equivalent, severity, note], index) => `<article class="reference-card" data-anchor="mature:${index}"><h3>${phrase}</h3><p><strong>${equivalent}</strong></p><p>${note}</p><span class="tag">${t("mature.severity")}: ${severity}</span><span class="tag">${t("mature.tag")}</span></article>`).join("");
}
function content() { return currentLesson()[state.direction]; }
function save() {
  localStorage.setItem("parcero-direction", state.direction);
  localStorage.setItem("parcero-completed", JSON.stringify([...state.completed]));
  localStorage.setItem("parcero-placement", JSON.stringify(state.placement));
  localStorage.setItem("parcero-lesson", state.lessonId);
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
  $("#lesson-list").innerHTML = lessons.map((item, index) => {
    const done = state.completed.has(item.id);
    const active = item.id === state.lessonId;
    return `<li><button class="lesson-link${active ? " active" : ""}" type="button" data-lesson="${item.id}" aria-current="${active ? "true" : "false"}"><span class="lesson-link-index">${index + 1}</span><span class="lesson-link-body"><strong>${item[state.direction].title}</strong><span class="lesson-link-meta">${item.level}</span></span><span class="lesson-link-state">${done ? t("lesson.explored") : ""}</span></button></li>`;
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
  const first = lessons[0][state.direction];
  const [, target, translation, pronunciation] = first.dialogue[0];
  const [word, meaning] = first.vocabulary[0];
  $("#preview-target").textContent = target;
  $("#preview-target").lang = state.direction === "es" ? "es" : "en";
  $("#preview-translation").textContent = translation;
  $("#preview-pronunciation").textContent = pronunciation;
  $("#preview-note").innerHTML = `<strong>${word}</strong> — ${meaning}`;
}
function render() {
  const current = content();
  const lesson = currentLesson();
  if (window.ParceroI18n) window.ParceroI18n.applyI18n(state.direction);
  $("#lesson-level").textContent = lesson.level;
  $("#lesson-title").textContent = current.title;
  $("#lesson-situation").textContent = current.situation;
  $("#lesson-review").hidden = lesson.review !== "pending";
  const targetLanguage = state.direction === "es" ? ' lang="es"' : "";
  $("#dialogue").innerHTML = current.dialogue.map(([speaker, target, translation, pronunciation], index) => `<article class="line" data-anchor="lesson:${lesson.id}/${state.direction}/dialogue/${index}"><strong>${speaker}</strong><div${targetLanguage}>${target}</div><p class="translation">${translation}</p><p class="pronunciation">${pronunciation}</p></article>`).join("");
  $("#vocabulary").innerHTML = current.vocabulary.map(([word, meaning], index) => `<article class="word-card" data-anchor="lesson:${lesson.id}/${state.direction}/vocabulary/${index}"><h3${targetLanguage}>${word}</h3><p>${meaning}</p></article>`).join("");
  $("#culture-note").textContent = current.note;
  $("#practice-prompt").textContent = current.prompt;
  $("#choices").innerHTML = current.choices.map((choice, index) => `<button class="choice" type="button" data-answer="${index}">${choice}</button>`).join("");
  $("#lesson-heading").dataset.anchor = `lesson:${lesson.id}/${state.direction}/heading`;
  $("#culture-note").dataset.anchor = `lesson:${lesson.id}/${state.direction}/note`;
  $("#practice-prompt").dataset.anchor = `lesson:${lesson.id}/${state.direction}/prompt`;
  $("#choices").dataset.anchor = `lesson:${lesson.id}/${state.direction}/choices`;
  $("#practice-feedback").textContent = "";
  $("#speech-status").textContent = "";
  renderLessonList();
  renderPreview();
  updateProgress();
  renderPlacement();
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
  const correct = Number(choice.dataset.answer) === content().answer;
  document.querySelectorAll(".choice").forEach((item) => item.disabled = true);
  choice.classList.add(correct ? "correct" : "incorrect");
  if (!correct) document.querySelector(`[data-answer="${content().answer}"]`).classList.add("correct");
  $("#practice-feedback").textContent = correct ? t("practice.correct") : t("practice.incorrect");
});
$("#complete-lesson").addEventListener("click", () => { state.completed.add(currentLesson().id); save(); renderLessonList(); updateProgress(); });
$("#lesson-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson]");
  if (button) selectLesson(button.dataset.lesson);
});
$("#previous-lesson").addEventListener("click", () => selectLesson(lessons[Math.max(0, lessonIndex() - 1)].id));
$("#next-lesson").addEventListener("click", () => selectLesson(lessons[Math.min(lessons.length - 1, lessonIndex() + 1)].id));
$("#reset-progress").addEventListener("click", () => { state.completed.clear(); state.placement = null; state.question = 0; state.responses = []; save(); render(); });
$("#listen-dialogue").addEventListener("click", () => {
  if (!("speechSynthesis" in window)) { $("#speech-status").textContent = t("speech.unsupported"); return; }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(content().dialogue.map((line) => line[1]).join(" "));
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
$("#mature-confirm").addEventListener("change", (event) => { $("#mature-open").disabled = !event.target.checked; });
$("#mature-open").addEventListener("click", () => {
  localStorage.setItem("parcero-mature-enabled", "true");
  $("#mature-gate").hidden = true;
  $("#mature-results").hidden = false;
  renderMature();
});
if (localStorage.getItem("parcero-mature-enabled") === "true") {
  $("#mature-gate").hidden = true;
  $("#mature-results").hidden = false;
  renderMature();
}
$("#stat-lessons").textContent = lessons.length;
$("#stat-verbs").textContent = curriculum.length;
renderVerbs();
renderFluency();
render();
