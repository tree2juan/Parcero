const state = {
  direction: localStorage.getItem("parcero-direction") || "es",
  completed: new Set(JSON.parse(localStorage.getItem("parcero-completed") || "[]"))
};
const lesson = lessons[0];
const $ = (selector) => document.querySelector(selector);

function content() { return lesson[state.direction]; }
function render() {
  const current = content();
  document.documentElement.lang = state.direction === "es" ? "es" : "en";
  $("#lesson-level").textContent = lesson.level;
  $("#lesson-title").textContent = current.title;
  $("#lesson-situation").textContent = current.situation;
  $("#dialogue").innerHTML = current.dialogue.map(([speaker, target, translation, pronunciation]) =>
    `<article class="line"><strong>${speaker}</strong><div>${target}</div><p class="translation">${translation}</p><p class="pronunciation">${pronunciation}</p></article>`).join("");
  $("#vocabulary").innerHTML = current.vocabulary.map(([word, meaning]) =>
    `<article class="word-card"><h3>${word}</h3><p>${meaning}</p></article>`).join("");
  $("#culture-note").textContent = current.note;
  $("#practice-prompt").textContent = current.prompt;
  $("#choices").innerHTML = current.choices.map((choice, index) =>
    `<button class="choice" type="button" data-answer="${index}">${choice}</button>`).join("");
  $("#practice-feedback").textContent = "";
  updateProgress();
}
function updateProgress() {
  const completed = state.completed.has(lesson.id);
  $("#progress-label").textContent = `${completed ? 1 : 0} of 1 lessons explored`;
  $("#progress-bar").style.width = completed ? "100%" : "0%";
  $("#complete-lesson").textContent = completed ? "Lesson explored" : "Mark lesson explored";
}
function save() {
  localStorage.setItem("parcero-direction", state.direction);
  localStorage.setItem("parcero-completed", JSON.stringify([...state.completed]));
}
document.querySelectorAll("input[name=direction]").forEach((input) => {
  input.checked = input.value === state.direction;
  input.addEventListener("change", () => { state.direction = input.value; save(); render(); });
});
document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach((item) => {
    const active = item === tab;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", active);
    $(`#${item.dataset.panel}`).hidden = !active;
  });
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
$("#reset-progress").addEventListener("click", () => { state.completed.clear(); save(); updateProgress(); });
$("#listen-dialogue").addEventListener("click", () => {
  if (!("speechSynthesis" in window)) { $("#speech-status").textContent = "Audio playback is not supported in this browser."; return; }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(content().dialogue.map((line) => line[1]).join(" "));
  utterance.lang = state.direction === "es" ? "es-CO" : "en-US";
  speechSynthesis.speak(utterance);
  $("#speech-status").textContent = "Playing dialogue.";
});
render();
