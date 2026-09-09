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
function matchingVerbs() {
  const search = verbView.query.trim().toLowerCase();
  return search ? curriculum.filter((verb) => `${verb.spanish} ${verb.english}`.toLowerCase().includes(search)) : curriculum;
}
function renderVerbs() {
  const matches = matchingVerbs();
  const visible = matches.slice(0, verbView.shown);
  $("#verb-count").textContent = matches.length === 0
    ? `No verb matches “${verbView.query.trim()}”. Try the other language, or the infinitive.`
    : matches.length === curriculum.length
      ? `Showing ${visible.length} of ${curriculum.length} high-frequency verbs`
      : `${matches.length} of ${curriculum.length} verbs match — showing ${visible.length}`;
  $("#verb-results").innerHTML = visible.map((verb) => `<article class="reference-card" data-anchor="verb:${verb.id}"><h3><span lang="es">${verb.spanish}</span> <small>— ${verb.english}</small></h3><p><strong>Useful forms:</strong> <span lang="es">yo ${verb.forms.presentYo}; ayer ${verb.forms.preteriteYo}; ${verb.forms.participle}</span></p><span class="tag">${verb.level}</span><span class="tag">${verb.register}</span><span class="tag">${verb.regionality}</span></article>`).join("");
  $("#verb-more").hidden = visible.length >= matches.length;
  $("#verb-more").textContent = `Show ${Math.min(VERB_PAGE_SIZE, matches.length - visible.length)} more verbs`;
}
function renderFluency() {
  $("#fluency-results").innerHTML = fluencyItems.map(([spanish, english, type, region, note], index) => `<article class="reference-card" data-anchor="fluency:${index}"><h3>${spanish}</h3><p><strong>${english}</strong></p><p>${note}</p><span class="tag">${type}</span><span class="tag">${region}</span></article>`).join("");
}
function renderMature() {
  $("#mature-results").innerHTML = matureItems.map(([phrase, equivalent, severity, note], index) => `<article class="reference-card" data-anchor="mature:${index}"><h3>${phrase}</h3><p><strong>${equivalent}</strong></p><p>${note}</p><span class="tag">Severity: ${severity}</span><span class="tag">Recognition &amp; safety</span></article>`).join("");
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
    $("#placement-result").innerHTML = `<div class="result-card"><p class="eyebrow">Your starting point</p><h3>${state.placement.level}</h3><p>${state.placement.summary}</p><p><strong>Focus first:</strong> ${state.placement.focus.join(", ")}</p></div>`;
    $("#roadmap").hidden = false;
    $("#focus-summary").textContent = `Your recommended focus is ${state.placement.focus.join(" and ")}. Strengthen these through contextual practice before moving to the next stage.`;
    $("#pathways").innerHTML = pathways.map(([title, description]) => `<article class="pathway"><h3>${title}</h3><p>${description}</p></article>`).join("");
    return;
  }
  const [skill, prompt, options] = questions[state.question];
  $("#assessment").hidden = false;
  $("#assessment-next").hidden = false;
  $("#assessment").innerHTML = `<p class="assessment-progress">Question ${state.question + 1} of ${questions.length} · ${skill}</p><article class="assessment-card"><h3>${prompt}</h3><div class="assessment-options">${options.map((option, index) => `<button class="assessment-option" type="button" data-choice="${index}">${option}</button>`).join("")}<button class="assessment-option" type="button" data-choice="unknown">I don’t know</button></div></article>`;
  $("#assessment-next").disabled = true;
  $("#assessment-next").textContent = state.question === questions.length - 1 ? "See my learning focus" : "Next question";
}
function completePlacement() {
  const unknown = state.responses.filter((response) => response.choice === "unknown").map((response) => response.skill);
  const incorrect = state.responses.filter((response) => response.choice !== "unknown" && !response.correct).map((response) => response.skill);
  const focus = [...new Set([...unknown, ...incorrect])];
  const correct = state.responses.filter((response) => response.correct).length;
  const level = correct <= 1 ? "Contextual foundations" : correct <= 3 ? "Developing independence" : "Ready to extend";
  state.placement = {
    direction: state.direction, responses: state.responses, level,
    confidence: `${correct} of ${state.responses.length} demonstrated; ${unknown.length} explicit knowledge gap${unknown.length === 1 ? "" : "s"}.`,
    focus: focus.length ? focus : ["professional and academic register"],
    summary: focus.length ? "Your answers show specific areas to build without making you guess." : "You demonstrated a strong foundation. Extend your range through new contexts and registers."
  };
  save();
  renderPlacement();
}
function renderLessonList() {
  $("#lesson-list").innerHTML = lessons.map((item, index) => {
    const done = state.completed.has(item.id);
    const active = item.id === state.lessonId;
    return `<li><button class="lesson-link${active ? " active" : ""}" type="button" data-lesson="${item.id}" aria-current="${active ? "true" : "false"}"><span class="lesson-link-index">${index + 1}</span><span class="lesson-link-body"><strong>${item[state.direction].title}</strong><span class="lesson-link-meta">${item.level}</span></span><span class="lesson-link-state">${done ? "Explored" : ""}</span></button></li>`;
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
function render() {
  const current = content();
  const lesson = currentLesson();
  document.documentElement.lang = "en";
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
  updateProgress();
  renderPlacement();
}
function updateProgress() {
  const lesson = currentLesson();
  const index = lessonIndex();
  const completed = state.completed.has(lesson.id);
  const total = lessons.length;
  const explored = lessons.filter((item) => state.completed.has(item.id)).length;
  $("#progress-label").textContent = `${explored} of ${total} lessons explored`;
  $("#progress-bar").style.width = `${Math.round((explored / total) * 100)}%`;
  $("#complete-lesson").textContent = completed ? "Lesson explored" : "Mark lesson explored";
  $("#lesson-position").textContent = `Lesson ${index + 1} of ${total}`;
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
  $("#practice-feedback").textContent = correct ? "Exactly—notice how the meaning comes from the whole situation." : "Look back at the dialogue and the context note, then try again in the next lesson.";
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
  if (!("speechSynthesis" in window)) { $("#speech-status").textContent = "Audio playback is not supported in this browser."; return; }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(content().dialogue.map((line) => line[1]).join(" "));
  utterance.lang = state.direction === "es" ? "es-CO" : "en-US";
  speechSynthesis.speak(utterance);
  $("#speech-status").textContent = "Playing dialogue.";
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
