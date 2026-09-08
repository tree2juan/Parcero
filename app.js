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
  question: 0,
  responses: []
};
const lesson = lessons[0];
const $ = (selector) => document.querySelector(selector);
function renderVerbs(query = "") {
  const search = query.trim().toLowerCase();
  const matches = curriculum.filter((verb) => !search || `${verb.spanish} ${verb.english}`.toLowerCase().includes(search));
  $("#verb-count").textContent = `${matches.length} of ${curriculum.length} high-frequency verbs`;
  $("#verb-results").innerHTML = matches.map((verb) => `<article class="reference-card"><h3><span lang="es">${verb.spanish}</span> <small>— ${verb.english}</small></h3><p><strong>Useful forms:</strong> <span lang="es">yo ${verb.forms.presentYo}; ayer ${verb.forms.preteriteYo}; ${verb.forms.participle}</span></p><span class="tag">${verb.level}</span><span class="tag">${verb.register}</span><span class="tag">${verb.regionality}</span></article>`).join("");
}
function renderFluency() {
  $("#fluency-results").innerHTML = fluencyItems.map(([spanish, english, type, region, note]) => `<article class="reference-card"><h3>${spanish}</h3><p><strong>${english}</strong></p><p>${note}</p><span class="tag">${type}</span><span class="tag">${region}</span></article>`).join("");
}
function renderMature() {
  $("#mature-results").innerHTML = matureItems.map(([phrase, equivalent, severity, note]) => `<article class="reference-card"><h3>${phrase}</h3><p><strong>${equivalent}</strong></p><p>${note}</p><span class="tag">Severity: ${severity}</span><span class="tag">Recognition & safety</span></article>`).join("");
}
function content() { return lesson[state.direction]; }
function save() {
  localStorage.setItem("parcero-direction", state.direction);
  localStorage.setItem("parcero-completed", JSON.stringify([...state.completed]));
  localStorage.setItem("parcero-placement", JSON.stringify(state.placement));
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
function render() {
  const current = content();
  document.documentElement.lang = "en";
  $("#lesson-level").textContent = lesson.level;
  $("#lesson-title").textContent = current.title;
  $("#lesson-situation").textContent = current.situation;
  const targetLanguage = state.direction === "es" ? ' lang="es"' : "";
  $("#dialogue").innerHTML = current.dialogue.map(([speaker, target, translation, pronunciation]) => `<article class="line"><strong>${speaker}</strong><div${targetLanguage}>${target}</div><p class="translation">${translation}</p><p class="pronunciation">${pronunciation}</p></article>`).join("");
  $("#vocabulary").innerHTML = current.vocabulary.map(([word, meaning]) => `<article class="word-card"><h3${targetLanguage}>${word}</h3><p>${meaning}</p></article>`).join("");
  $("#culture-note").textContent = current.note;
  $("#practice-prompt").textContent = current.prompt;
  $("#choices").innerHTML = current.choices.map((choice, index) => `<button class="choice" type="button" data-answer="${index}">${choice}</button>`).join("");
  $("#practice-feedback").textContent = "";
  updateProgress();
  renderPlacement();
}
function updateProgress() {
  const completed = state.completed.has(lesson.id);
  $("#progress-label").textContent = `${completed ? 1 : 0} of 1 lessons explored`;
  $("#progress-bar").style.width = completed ? "100%" : "0%";
  $("#complete-lesson").textContent = completed ? "Lesson explored" : "Mark lesson explored";
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
  $("#practice-feedback").textContent = correct ? "Exactly—notice how the meaning comes from the whole situation." : "Look at the context and try the next lesson.";
});
$("#complete-lesson").addEventListener("click", () => { state.completed.add(lesson.id); save(); updateProgress(); });
$("#reset-progress").addEventListener("click", () => { state.completed.clear(); state.placement = null; state.question = 0; state.responses = []; save(); render(); });
$("#listen-dialogue").addEventListener("click", () => {
  if (!("speechSynthesis" in window)) { $("#speech-status").textContent = "Audio playback is not supported in this browser."; return; }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(content().dialogue.map((line) => line[1]).join(" "));
  utterance.lang = state.direction === "es" ? "es-CO" : "en-US";
  speechSynthesis.speak(utterance);
  $("#speech-status").textContent = "Playing dialogue.";
});
$("#verb-search").addEventListener("input", (event) => renderVerbs(event.target.value));
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
renderVerbs();
renderFluency();
render();
