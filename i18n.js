/*
 * Interface language for Parcero.
 *
 * The app teaches in two directions and the interface has to follow, because the
 * learner's own language is the opposite of the one they are studying:
 *
 *   direction "es"  ->  learning Colombian Spanish  ->  the learner reads English
 *   direction "en"  ->  learning English            ->  the learner reads Spanish
 *
 * Lesson content already switches with `direction`. These are the surrounding
 * strings — navigation, buttons, headings, feedback — which previously did not.
 *
 * The language picker itself is deliberately NOT translated. It is always
 * bilingual, because a Spanish speaker cannot find an English-labelled control
 * that switches the interface out of English.
 *
 * Everything below is wrapped in an IIFE. These are classic scripts, so a
 * top-level `const t` in one file and a top-level `function t` in another are
 * the SAME binding, and the second file to load throws
 * "Identifier 't' has already been declared" — which kills that whole file
 * before it runs. Names this generic must never reach global scope; the only
 * thing this file exposes is ParceroI18n.
 */
(function () {
"use strict";

const UI_STRINGS = {
  en: {
    "brand.tagline": "Colombian Spanish in context",
    "common.and": "and",
    "nav.lessons": "Lessons",
    "nav.flashcards": "Flashcards",
    "nav.placement": "Placement",
    "nav.library": "Library",
    "nav.github": "GitHub",
    "nav.sections": "Sections",
    "action.reset": "Reset progress",

    "hero.eyebrow": "Learn how people actually speak",
    "hero.title": "Language belongs in a conversation.",
    "hero.lead": "Explore Colombian Spanish and practical English from either point of view — with context, culture, sound, and practice. Nothing to install, nothing to sign up for, and your progress never leaves this device.",
    "hero.start": "Start the first lesson",
    "hero.placement": "Find my level first",
    "stats.lessons": "Lessons",
    "stats.verbs": "Verbs",
    "stats.cost": "Cost",
    "stats.free": "Free",
    "preview.label": "A line from lesson one",
    "preview.aria": "Example of a lesson line",

    "lessons.eyebrow": "Lessons",
    "lessons.title": "Pick a situation.",
    "lessons.lead": "Each lesson is one real moment: what is said, why it works, how it sounds, and what it would mean to get it wrong.",
    "progress.eyebrow": "Your path",
    "progress.count": "{explored} of {total} lessons explored",

    "tabs.aria": "Lesson sections",
    "tab.situation": "The situation",
    "tab.dialogue": "Dialogue",
    "tab.understand": "Understand",
    "tab.practice": "Practice",
    "tab.report": "Report an error",

    "situation.lead": "Colombian Spanish is decided by the situation more than by the dictionary. Read who is speaking, and to whom, before you read what they say.",
    "setting.who": "Who",
    "setting.what": "What",
    "setting.when": "When",
    "setting.where": "Where",
    "setting.why": "Why",
    "address.eyebrow": "How they address each other",
    "address.ifYouSwitch": "If you switch:",
    "address.form.usted": "usted",
    "address.form.tu": "tú",
    "address.form.vos": "vos",
    "address.form.mixed": "mixed",

    "dialogue.literally": "Word for word:",
    "dialogue.why": "Why it is said this way:",

    "vocab.literally": "Literally:",
    "vocab.useWhen": "Use it when:",
    "vocab.avoidWhen": "Careful:",
    "vocab.region": "Where it is used:",
    "vocab.related": "Also heard:",

    "culture.title": "What is going on underneath",
    "pitfalls.title": "What goes wrong",
    "pitfall.instead": "Say instead:",
    "variations.title": "The same thing, said differently",

    "action.listen": "Listen to the target language",
    "context.eyebrow": "Colombian context",
    "action.complete": "Mark lesson explored",
    "action.completed": "Lesson explored",
    "lesson.explored": "Explored",
    "pager.previous": "← Previous lesson",
    "pager.next": "Next lesson →",
    "pager.position": "Lesson {index} of {total}",

    "practice.progress": "Question {number} of {total}",
    "practice.tests": "This one checks: {tests}",
    "practice.next": "Next question",
    "practice.correct": "Exactly—notice how the meaning comes from the whole situation.",
    "practice.incorrect": "Look back at the dialogue and the context note, then try again in the next lesson.",
    "speech.unsupported": "Audio playback is not supported in this browser.",
    "speech.playing": "Playing dialogue.",

    /*
     * Flashcards. Card content itself comes from the lessons and the library and
     * is already written in both directions; these are the prompts and controls
     * around it. Topic titles for lessons are lesson titles, so they are not here.
     */
    "deck.eyebrow": "Flashcards",
    "deck.title": "Short sets, one area at a time.",
    "deck.lead": "Every card is built from a lesson, a verb or a fluency phrase you have already met here. Swipe left when you knew it, right when you did not — the ones you miss come back around until they stick.",
    "deck.topicLabel": "Topic",
    "deck.setLabel": "Set",
    "deck.summaryEyebrow": "Set complete",
    "deck.summaryTitle": "That set is done.",
    "deck.again": "Go through it again",
    "deck.next": "Next set →",
    "deck.knownButton": "← Knew it",
    "deck.reviewButton": "Didn’t know it →",
    "deck.showAnswer": "Show answer",
    "deck.hideAnswer": "Hide answer",
    "deck.help": "Tap the card to show the answer. Swipe left if you knew it, right to send it back for review. Keyboard: space flips, ← and → answer.",
    "deck.reset": "Reset this set",

    "deck.group.situations": "Situations",
    "deck.group.verbs": "Verbs",
    "deck.group.fluency": "Fluency",
    "deck.group.slang": "Colombian slang",
    "deck.group.mature": "Recognition and safety",
    "deck.topic.verbs": "Verbs · {level}",
    "deck.topic.fluency": "Connectors and softeners",
    "deck.topic.slang": "Slang",
    "deck.topic.mature": "Words to recognise",
    "deck.topic.signals": "When a conversation turns",
    "deck.safety.say-it-freely": "Say it freely",
    "deck.safety.say-it-with-friends": "Say it with friends",
    "deck.safety.understand-only": "Understand only",
    "deck.level.foundation": "Foundation",
    "deck.level.independent": "Independent",
    "deck.level.extension": "Extension",
    "deck.meta.verbs": "{count} high-frequency verbs",
    "deck.meta.fluency": "{count} phrases that keep a conversation moving",
    "deck.meta.slang": "{count} expressions, grouped by whether you should say them",
    "deck.meta.mature": "{count} terms for recognition only",
    "deck.meta.signals": "{count} signals that a conversation has changed",

    "deck.kind.vocabulary": "Vocabulary",
    "deck.kind.meaning": "Meaning",
    "deck.kind.pronunciation": "Pronunciation",
    "deck.kind.example": "In use",
    "deck.kind.region": "Where it is said",
    "deck.kind.context": "Context",
    "deck.kind.address": "Tú or usted",
    "deck.kind.culture": "Culture",
    "deck.kind.pitfall": "Pitfall",
    "deck.kind.variation": "Another way",
    "deck.kind.practice": "In context",
    "deck.kind.verb": "Verb",
    "deck.kind.fluency": "Fluency",
    "deck.kind.slang": "Slang",
    "deck.kind.mature": "Recognition only",
    "deck.kind.signal": "Signal",

    "deck.ask.vocabulary": "What does this mean here?",
    "deck.ask.meaning": "{speaker} says this. What does it mean?",
    "deck.ask.pronunciation": "How would you say this out loud?",
    "deck.ask.example": "The word at work. What is being said?",
    "deck.ask.region": "Who says this, and where?",
    "deck.ask.context": "Why does the language work the way it does here?",
    "deck.ask.address": "How do these two address each other?",
    "deck.ask.culture": "What sits behind this?",
    "deck.ask.pitfall": "This one does not land. What would you say instead?",
    "deck.ask.variation": "This is the moment. How would you say it?",
    "deck.ask.practice": "Answer from the situation, not from a dictionary.",
    "deck.ask.verb": "Say it in the language you are learning.",
    "deck.ask.fluency": "How would you say this naturally?",
    "deck.ask.slang": "What does this mean, and may you say it?",
    "deck.ask.mature": "What does this mean, and how serious is it?",
    "deck.ask.signal": "What is really happening here?",

    "deck.label.cards.one": "{count} card",
    "deck.label.cards.other": "{count} cards",
    "deck.label.set.one": "Set {index} of {total} · {count} card",
    "deck.label.set.other": "Set {index} of {total} · {count} cards",
    "deck.label.done": "{label} · done",

    "deck.progress": "{known} of {total} known",
    "deck.tally.none": "Nothing left in this round.",
    "deck.tally.one": "{count} still in this round",
    "deck.tally.other": "{count} still in this round",
    "deck.tally.cycled": " · {count} cycled back",
    "deck.hint.swipe": "Swipe left if you knew it, right to see it again",
    "deck.hint.tap": "Tap to show the answer",
    "deck.readMore": "Read the rest",
    "deck.readLess": "Show less",
    "deck.badge.known": "Knew it",
    "deck.badge.again": "Review again",

    "deck.summary.clean": "Clean run.",
    "deck.summary.cleanDetail": "All {total} cards, first time through.",
    "deck.summary.repeat": "That set has stuck.",
    "deck.summary.repeatDetail": "{total} cards, and {repeats} came back around before you had them.",
    "deck.next.set": "Next set: {index} of {total} →",
    "deck.next.topic": "Next topic: {title} →",
    "deck.live.known": "Knew it. {known} of {total} known.",
    "deck.live.again.one": "Sent back for review. {count} card still in this round.",
    "deck.live.again.other": "Sent back for review. {count} cards still in this round.",
    "deck.live.reset": "Set reset. Every card is back in the round.",

    "placement.eyebrow": "Optional",
    "placement.title": "Find your next best step.",
    "placement.intro": "Answer from experience, not a guess. “I don’t know” helps us find what to focus on — it never counts against you.",
    "placement.question": "Question {number} of {total} · {skill}",
    "placement.dontKnow": "I don’t know",
    "placement.next": "Next question",
    "placement.finish": "See my learning focus",
    "placement.startingPoint": "Your starting point",
    "placement.focusFirst": "Focus first:",
    "placement.level.foundations": "Contextual foundations",
    "placement.level.developing": "Developing independence",
    "placement.level.ready": "Ready to extend",
    "placement.summary.focus": "Your answers show specific areas to build without making you guess.",
    "placement.summary.strong": "You demonstrated a strong foundation. Extend your range through new contexts and registers.",
    "placement.defaultFocus": "professional and academic register",
    "placement.confidence.one": "{correct} of {total} demonstrated; {gaps} explicit knowledge gap.",
    "placement.confidence.other": "{correct} of {total} demonstrated; {gaps} explicit knowledge gaps.",

    "roadmap.eyebrow": "Your roadmap",
    "roadmap.title": "Build toward confident, local fluency.",
    "roadmap.focus": "Your recommended focus is {focus}. Strengthen these through contextual practice before moving to the next stage.",

    "library.eyebrow": "Reference library",
    "library.title": "Build fluency, one useful choice at a time.",
    "library.lead": "Look things up when you need them. These lists are references, not memorization drills.",
    "library.aria": "Reference library sections",
    "library.tab.verbs": "200 verbs",
    "library.tab.fluency": "Fluency",
    "library.tab.mature": "Mature language",
    "library.tab.slang": "Colombian slang",
    "library.search": "Search English or Spanish verb",
    "library.searchPlaceholder": "e.g., hablar or speak",
    "library.more": "Show more verbs",
    "library.moreCount": "Show {count} more verbs",
    "library.verbNone": "No verb matches “{query}”. Try the other language, or the infinitive.",
    "library.verbMatching": "{matches} of {total} verbs match — showing {shown}",
    "library.usefulForms": "Useful forms:",
    "library.verbCount": "Showing {shown} of {total} verbs",
    "library.sourceNote.before": "Frequency starting list: ",
    "library.sourceNote.link": "SUBTLEX-ESP and SUBTLEX-US frequency resources",
    "library.sourceNote.after": "; the level shown comes from it. Register and regionality labels stay hidden until a Colombian speaker has checked them — none have been yet, and the Report an error tab is where that starts.",
    "library.fluencyIntro": "These phrases connect ideas and keep conversation moving. They are context notes—not universal replacements.",
    "library.slangIntro": "Slang you will hear long before you can safely use it. Every entry says where it is used and whether you should say it back.",
    "library.slangSearch": "Search slang or meaning",
    "library.slangPlaceholder": "e.g., parcero or friend",
    "library.slangCount": "Showing all {total} expressions.",
    "library.slangMatching": "{matches} of {total} expressions match.",
    "library.slangSafety": "Can you say it?",

    "mature.title": "Recognition and safety reference",
    "mature.warning": "This optional reference includes adult or insulting language for comprehension, boundaries, and de-escalation. It is not for directing abuse at people. Confirm that you are of age under the rules where you live.",
    "mature.confirm": "I am eligible to view mature educational content.",
    "mature.open": "View reference",
    "mature.severity": "Severity",
    "mature.tag": "Recognition & safety",
    "mature.respond": "What to do:",
    "mature.wordsTitle": "Words and phrases",
    "mature.signalsTitle": "When a conversation turns",
    "mature.signalsIntro": "These are not words you can look up. A conversation can turn hostile while every word in it stays polite — these are the signals that carry it.",

    "footer.tagline": "— made for curious conversations. Your progress stays on this device.",
    "footer.source": "Source on GitHub",
    "footer.flagLine": "Report something that is wrong",
    "footer.signOff": "Sign off a whole lesson",
    "footer.report": "Report a problem",
    "footer.note": "Lessons no native speaker has signed off yet say so in place. Regional usage varies across Colombia; treat every note as a starting point for listening, not a rule — and if something reads wrong to you, flag it where you found it.",

    /* Review and flagging. Keys are shared with review.js / review-ui.js. */
    "review.pendingLesson": "No Colombian native speaker has signed this lesson off yet, so the regional wording may still change.",
    "review.helpCheck": "Report something in this lesson",
    "provenance.machine": "The Spanish explanations in this lesson were machine-translated and have not yet been checked by a native speaker.",
    "provenance.count": "{count} fields affected",
    "provenance.helpCheck": "Report a translation that reads wrong",
    "review.count.none": "Nothing reported yet",
    "review.count.one": "{count} report ready to send",
    "review.count.other": "{count} reports ready to send",
    "review.whichPart": "Which part is wrong?",
    "review.whatProblem": "What is the problem?",
    "review.suggestion": "How would you say it instead?",
    "review.suggestionHint": "Write the wording you would actually use.",
    "review.comment": "Why — and where is it used that way?",
    "review.commentHint": "e.g. In Medellín this is completely normal, but in Bogotá it sounds abrupt.",
    "review.severity": "How serious is it?",
    "review.region": "Where do you speak from?",
    "review.regionHint": "Bogotá, Medellín, the coast…",
    "review.role": "You are reviewing as",
    "review.save": "Add to my report",
    "review.saveChanges": "Save changes",
    "review.missingText": "This text is no longer in the lesson.",
    "review.saved.one": "Saved. {count} report is waiting to be sent.",
    "review.saved.other": "Saved. {count} reports are waiting to be sent.",
    "review.edit": "Edit",
    "review.remove": "Remove",
    "review.queueTitle": "Your reports",
    "review.queue.empty": "Nothing reported yet.",
    "review.queue.notSent": "{summary}. Nothing has been sent anywhere yet.",
    "review.queue.yourWording": "Your wording:",
    "review.queue.drift": "This text has changed since you reported it — please reopen and check it.",
    "review.confirmClear": "Delete every report you have saved? This cannot be undone.",
    "review.submit": "Open a GitHub issue with these",
    "review.copy": "Copy as Markdown",
    "review.download": "Download JSON",
    "review.clear": "Clear all",
    "review.status.opened": "GitHub opened in a new tab. Your reports stay here until you clear them.",
    "review.status.tooLongCopied": "That is too much to fit in a link, so it is on your clipboard — paste it into the issue GitHub just opened.",
    "review.status.tooLongDownload": "That is too much to fit in a link. Use “Download JSON” and attach the file to the issue GitHub just opened.",
    "review.status.copied": "Copied. Paste it into a GitHub issue, an email, or a message.",
    "review.status.copyFailed": "Could not reach the clipboard — use “Download JSON” instead.",
    "review.status.downloaded": "Downloaded. Attach it to a GitHub issue, or send it to a maintainer.",
    "review.status.cleared": "All reports cleared.",

    /* Display labels for [code, label] pairs. The code half never changes. */
    "review.issueType.not-natural": "No one really says it this way",
    "review.issueType.regional": "Wrong region — this is not general Colombian usage",
    "review.issueType.register": "Wrong register (usted / tú / vos, or formality)",
    "review.issueType.translation": "The translation does not match",
    "review.issueType.pronunciation": "The pronunciation respelling would mislead",
    "review.issueType.spelling": "Spelling, accent mark or typo",
    "review.issueType.culture": "The cultural explanation is wrong or incomplete",
    "review.issueType.risky": "Could embarrass or endanger a learner who repeats it",
    "review.issueType.outdated": "Understood, but dated or class-marked",
    "review.issueType.other": "Something else",
    "review.severity.blocker": "Blocker — do not publish as written",
    "review.severity.should-fix": "Should fix before sign-off",
    "review.severity.nitpick": "Nitpick — safe either way",
    "review.role.native-es-co": "Native Colombian Spanish speaker",
    "review.role.native-es-other": "Native Spanish speaker, not Colombian",
    "review.role.native-en": "Native or expert English speaker",
    "review.role.educator": "Language educator",

    "review.region.bogota": "Bogotá (rolo / cachaco)",
    "review.region.antioquia": "Medellín and Antioquia (paisa)",
    "review.region.valle": "Cali and Valle del Cauca (valluno)",
    "review.region.caribe": "Caribbean coast (costeño)",
    "review.region.eje-cafetero": "Eje Cafetero",
    "review.region.santander": "Santander",
    "review.region.narino": "Nariño and the south",
    "review.region.llanos": "Llanos",
    "review.region.pacifico": "Pacific coast (Chocó)",
    "review.region.co-general": "Colombian, no particular region",

    "report.intro": "Something here not quite right? Tell us. Pick the exact words below — nothing leaves this browser until you choose to send it.",
    "report.scope": "What are you reporting on?",
    "report.item": "Which one?",
    "report.clearForm": "Clear this form",
    "report.scope.lesson": "The lesson I am reading",
    "report.scope.verb": "A verb in the library",
    "report.scope.fluency": "A fluency phrase",
    "report.scope.slang": "A slang expression",
    "report.scope.mature": "Mature language",
    "report.scope.signal": "A conversation signal",
    "report.noLesson": "Open a lesson first and it will show up here.",
    "report.formCleared": "Form cleared.",
    "report.holding": "Still reporting on the line you picked. Clear the form to report on something else.",
    "report.editing": "Editing a report you already saved.",
  },

  es: {
    "brand.tagline": "Español colombiano en contexto",
    "common.and": "y",
    "nav.lessons": "Lecciones",
    "nav.flashcards": "Tarjetas",
    "nav.placement": "Nivelación",
    "nav.library": "Biblioteca",
    "nav.github": "GitHub",
    "nav.sections": "Secciones",
    "action.reset": "Borrar mi progreso",

    "hero.eyebrow": "Aprende cómo habla la gente de verdad",
    "hero.title": "El idioma vive en la conversación.",
    "hero.lead": "Explora el español colombiano y el inglés práctico desde cualquiera de los dos lados: con contexto, cultura, sonido y práctica. No hay nada que instalar ni registro que llenar, y tu progreso nunca sale de este dispositivo.",
    "hero.start": "Empezar la primera lección",
    "hero.placement": "Primero quiero saber mi nivel",
    "stats.lessons": "Lecciones",
    "stats.verbs": "Verbos",
    "stats.cost": "Precio",
    "stats.free": "Gratis",
    "preview.label": "Una frase de la primera lección",
    "preview.aria": "Ejemplo de una frase de la lección",

    "lessons.eyebrow": "Lecciones",
    "lessons.title": "Elige una situación.",
    "lessons.lead": "Cada lección es un momento real: qué se dice, por qué funciona, cómo suena y qué pasaría si lo dijeras de otra manera.",
    "progress.eyebrow": "Tu camino",
    "progress.count": "{explored} de {total} lecciones exploradas",

    "tabs.aria": "Secciones de la lección",
    "tab.situation": "La situación",
    "tab.dialogue": "Diálogo",
    "tab.understand": "Entender",
    "tab.practice": "Practicar",
    "tab.report": "Reportar un error",

    "situation.lead": "El inglés también depende de la situación más que del diccionario. Mira quién habla, y con quién, antes de leer lo que dicen.",
    "setting.who": "Quién",
    "setting.what": "Qué",
    "setting.when": "Cuándo",
    "setting.where": "Dónde",
    "setting.why": "Por qué",
    "address.eyebrow": "Cómo se tratan entre ellos",
    "address.ifYouSwitch": "Si lo cambias:",
    "address.form.usted": "usted",
    "address.form.tu": "tú",
    "address.form.vos": "vos",
    "address.form.mixed": "mezclado",

    "dialogue.literally": "Palabra por palabra:",
    "dialogue.why": "Por qué se dice así:",

    "vocab.literally": "Literalmente:",
    "vocab.useWhen": "Úsalo cuando:",
    "vocab.avoidWhen": "Cuidado:",
    "vocab.region": "Dónde se usa:",
    "vocab.related": "También se oye:",

    "culture.title": "Lo que hay detrás",
    "pitfalls.title": "Lo que sale mal",
    "pitfall.instead": "Di mejor:",
    "variations.title": "Lo mismo, dicho de otra forma",

    "action.listen": "Escuchar el idioma que estás aprendiendo",
    "context.eyebrow": "Contexto colombiano",
    "action.complete": "Marcar la lección como explorada",
    "action.completed": "Lección explorada",
    "lesson.explored": "Explorada",
    "pager.previous": "← Lección anterior",
    "pager.next": "Siguiente lección →",
    "pager.position": "Lección {index} de {total}",

    "practice.progress": "Pregunta {number} de {total}",
    "practice.tests": "Esta comprueba: {tests}",
    "practice.next": "Siguiente pregunta",
    "practice.correct": "Exacto: fíjate en cómo el significado sale de toda la situación.",
    "practice.incorrect": "Vuelve al diálogo y a la nota de contexto, y inténtalo de nuevo en la siguiente lección.",
    "speech.unsupported": "Este navegador no permite reproducir audio.",
    "speech.playing": "Reproduciendo el diálogo.",

    /*
     * Tarjetas. El contenido de las tarjetas sale de las lecciones y de la
     * biblioteca, que ya están escritas en los dos sentidos; aquí solo están las
     * preguntas y los controles que las rodean.
     */
    "deck.eyebrow": "Tarjetas",
    "deck.title": "Series cortas, un tema a la vez.",
    "deck.lead": "Cada tarjeta sale de una lección, un verbo o una expresión de fluidez que ya viste aquí. Desliza a la izquierda si la sabías y a la derecha si no — las que fallas vuelven a aparecer hasta que se te queden.",
    "deck.topicLabel": "Tema",
    "deck.setLabel": "Serie",
    "deck.summaryEyebrow": "Serie completa",
    "deck.summaryTitle": "Terminaste la serie.",
    "deck.again": "Repasarla otra vez",
    "deck.next": "Siguiente serie →",
    "deck.knownButton": "← La sabía",
    "deck.reviewButton": "No la sabía →",
    "deck.showAnswer": "Ver la respuesta",
    "deck.hideAnswer": "Ocultar la respuesta",
    "deck.help": "Toca la tarjeta para ver la respuesta. Desliza a la izquierda si la sabías y a la derecha para volver a repasarla. Con el teclado: espacio la voltea, ← y → responden.",
    "deck.reset": "Reiniciar esta serie",

    "deck.group.situations": "Situaciones",
    "deck.group.verbs": "Verbos",
    "deck.group.fluency": "Fluidez",
    "deck.group.slang": "Parlache y coloquialismos",
    "deck.group.mature": "Reconocimiento y seguridad",
    "deck.topic.verbs": "Verbos · {level}",
    "deck.topic.fluency": "Conectores y atenuantes",
    "deck.topic.slang": "Expresiones coloquiales",
    "deck.topic.mature": "Palabras para reconocer",
    "deck.topic.signals": "Cuando la conversación cambia",
    "deck.safety.say-it-freely": "Úselo sin problema",
    "deck.safety.say-it-with-friends": "Úselo solo con amigos",
    "deck.safety.understand-only": "Solo para entender",
    "deck.level.foundation": "Base",
    "deck.level.independent": "Independiente",
    "deck.level.extension": "Ampliación",
    "deck.meta.verbs": "{count} verbos de uso frecuente",
    "deck.meta.fluency": "{count} expresiones para mantener viva la conversación",
    "deck.meta.slang": "{count} expresiones, agrupadas según si conviene usarlas",
    "deck.meta.mature": "{count} términos solo para reconocer",
    "deck.meta.signals": "{count} señales de que la conversación cambió",

    "deck.kind.vocabulary": "Vocabulario",
    "deck.kind.meaning": "Significado",
    "deck.kind.pronunciation": "Pronunciación",
    "deck.kind.example": "En uso",
    "deck.kind.region": "Dónde se dice",
    "deck.kind.context": "Contexto",
    "deck.kind.address": "Tratamiento",
    "deck.kind.culture": "Cultura",
    "deck.kind.pitfall": "Error común",
    "deck.kind.variation": "Otra manera",
    "deck.kind.practice": "En contexto",
    "deck.kind.verb": "Verbo",
    "deck.kind.fluency": "Fluidez",
    "deck.kind.slang": "Jerga",
    "deck.kind.mature": "Solo reconocimiento",
    "deck.kind.signal": "Señal",

    "deck.ask.vocabulary": "¿Qué significa aquí?",
    "deck.ask.meaning": "{speaker} dice esto. ¿Qué significa?",
    "deck.ask.pronunciation": "¿Cómo lo dirías en voz alta?",
    "deck.ask.example": "La palabra en uso. ¿Qué se está diciendo?",
    "deck.ask.region": "¿Quién dice esto, y dónde?",
    "deck.ask.context": "¿Por qué se dice así en esta situación?",
    "deck.ask.address": "¿Cómo se tratan estas dos personas?",
    "deck.ask.culture": "¿Qué hay detrás de esto?",
    "deck.ask.pitfall": "Así no funciona. ¿Qué dirías en su lugar?",
    "deck.ask.variation": "Este es el momento. ¿Cómo lo dirías?",
    "deck.ask.practice": "Responde desde la situación, no desde el diccionario.",
    "deck.ask.verb": "Dilo en el idioma que estás aprendiendo.",
    "deck.ask.fluency": "¿Cómo lo dirías de forma natural?",
    "deck.ask.slang": "¿Qué significa y puedes usarlo?",
    "deck.ask.mature": "¿Qué significa y qué tan fuerte es?",
    "deck.ask.signal": "¿Qué está pasando en realidad?",

    "deck.label.cards.one": "{count} tarjeta",
    "deck.label.cards.other": "{count} tarjetas",
    "deck.label.set.one": "Serie {index} de {total} · {count} tarjeta",
    "deck.label.set.other": "Serie {index} de {total} · {count} tarjetas",
    "deck.label.done": "{label} · lista",

    "deck.progress": "{known} de {total} dominadas",
    "deck.tally.none": "No queda nada en esta ronda.",
    "deck.tally.one": "queda {count} en esta ronda",
    "deck.tally.other": "quedan {count} en esta ronda",
    "deck.tally.cycled": " · {count} volvieron a aparecer",
    "deck.hint.swipe": "Desliza a la izquierda si la sabías, a la derecha para volver a verla",
    "deck.hint.tap": "Toca para ver la respuesta",
    "deck.readMore": "Leer el resto",
    "deck.readLess": "Mostrar menos",
    "deck.badge.known": "La sabía",
    "deck.badge.again": "Repasar",

    "deck.summary.clean": "Sin fallar una.",
    "deck.summary.cleanDetail": "Las {total} tarjetas, a la primera.",
    "deck.summary.repeat": "Esa serie ya se te quedó.",
    "deck.summary.repeatDetail": "{total} tarjetas, y {repeats} volvieron a aparecer antes de que las tuvieras.",
    "deck.next.set": "Siguiente serie: {index} de {total} →",
    "deck.next.topic": "Siguiente tema: {title} →",
    "deck.live.known": "La sabías. {known} de {total} dominadas.",
    "deck.live.again.one": "Vuelve al repaso. Queda {count} tarjeta en esta ronda.",
    "deck.live.again.other": "Vuelve al repaso. Quedan {count} tarjetas en esta ronda.",
    "deck.live.reset": "Serie reiniciada. Todas las tarjetas vuelven a la ronda.",

    "placement.eyebrow": "Opcional",
    "placement.title": "Encuentra tu siguiente paso.",
    "placement.intro": "Responde desde tu experiencia, no adivinando. Decir “No sé” nos ayuda a encontrar en qué enfocarnos; nunca cuenta en tu contra.",
    "placement.question": "Pregunta {number} de {total} · {skill}",
    "placement.dontKnow": "No sé",
    "placement.next": "Siguiente pregunta",
    "placement.finish": "Ver mi enfoque de aprendizaje",
    "placement.startingPoint": "Tu punto de partida",
    "placement.focusFirst": "Enfócate primero en:",
    "placement.level.foundations": "Bases en contexto",
    "placement.level.developing": "Ganando independencia",
    "placement.level.ready": "Listo para ampliar",
    "placement.summary.focus": "Tus respuestas muestran áreas concretas para trabajar, sin obligarte a adivinar.",
    "placement.summary.strong": "Demostraste una base sólida. Amplía tu rango con nuevos contextos y registros.",
    "placement.defaultFocus": "registro profesional y académico",
    "placement.confidence.one": "{correct} de {total} demostradas; {gaps} vacío de conocimiento declarado.",
    "placement.confidence.other": "{correct} de {total} demostradas; {gaps} vacíos de conocimiento declarados.",

    "roadmap.eyebrow": "Tu ruta",
    "roadmap.title": "Avanza hacia una fluidez local y segura.",
    "roadmap.focus": "Tu enfoque recomendado es {focus}. Refuérzalo con práctica en contexto antes de pasar a la siguiente etapa.",

    "library.eyebrow": "Biblioteca de referencia",
    "library.title": "Gana fluidez, una decisión útil a la vez.",
    "library.lead": "Consulta lo que necesites cuando lo necesites. Estas listas son de referencia, no ejercicios de memorización.",
    "library.aria": "Secciones de la biblioteca de referencia",
    "library.tab.verbs": "200 verbos",
    "library.tab.fluency": "Fluidez",
    "library.tab.mature": "Lenguaje adulto",
    "library.tab.slang": "Jerga colombiana",
    "library.search": "Buscar un verbo en inglés o en español",
    "library.searchPlaceholder": "por ejemplo, hablar o speak",
    "library.more": "Ver más verbos",
    "library.moreCount": "Ver {count} verbos más",
    "library.verbNone": "Ningún verbo coincide con “{query}”. Prueba en el otro idioma, o con el infinitivo.",
    "library.verbMatching": "{matches} de {total} verbos coinciden — mostrando {shown}",
    "library.usefulForms": "Formas útiles:",
    "library.verbCount": "Mostrando {shown} de {total} verbos",
    "library.sourceNote.before": "Lista inicial de frecuencia: ",
    "library.sourceNote.link": "recursos de frecuencia SUBTLEX-ESP y SUBTLEX-US",
    "library.sourceNote.after": "; de ahí sale el nivel que ves. Las etiquetas de registro y regionalidad quedan ocultas hasta que un hablante colombiano las revise — todavía ninguna lo ha sido, y la pestaña Reportar un error es por donde empieza eso.",
    "library.fluencyIntro": "Estas expresiones conectan ideas y mantienen viva la conversación. Son notas de contexto, no reemplazos universales.",
    "library.slangIntro": "Jerga que oirás mucho antes de poder usarla con seguridad. Cada entrada dice dónde se usa y si conviene repetirla.",
    "library.slangSearch": "Buscar jerga o significado",
    "library.slangPlaceholder": "p. ej., parcero o friend",
    "library.slangCount": "Mostrando las {total} expresiones.",
    "library.slangMatching": "{matches} de {total} expresiones coinciden.",
    "library.slangSafety": "¿Puedes decirlo?",

    "mature.title": "Referencia de reconocimiento y seguridad",
    "mature.warning": "Esta referencia opcional incluye lenguaje adulto u ofensivo para ayudarte a entenderlo, poner límites y bajar la tensión. No es para agredir a nadie. Confirma que tienes la edad permitida donde vives.",
    "mature.confirm": "Tengo la edad para ver contenido educativo para adultos.",
    "mature.open": "Ver la referencia",
    "mature.severity": "Intensidad",
    "mature.tag": "Reconocimiento y seguridad",
    "mature.respond": "Qué hacer:",
    "mature.wordsTitle": "Palabras y expresiones",
    "mature.signalsTitle": "Cuando la conversación cambia",
    "mature.signalsIntro": "Estas no son palabras que puedas buscar en un diccionario. Una conversación puede volverse hostil aunque todas sus palabras sigan siendo corteses; estas son las señales que lo revelan.",

    "footer.tagline": "— hecho para conversaciones curiosas. Tu progreso se queda en este dispositivo.",
    "footer.source": "Código en GitHub",
    "footer.flagLine": "Reportar algo que está mal",
    "footer.signOff": "Aprueba una lección completa",
    "footer.report": "Reportar un problema",
    "footer.note": "Las lecciones que ningún hablante nativo ha aprobado lo dicen ahí mismo. El uso regional cambia por toda Colombia; toma cada nota como un punto de partida para escuchar, no como una regla — y si algo te suena mal, márcalo donde lo encontraste.",

    /* Revisión y marcas. Las claves se comparten con review.js / review-ui.js. */
    "review.pendingLesson": "Ningún hablante nativo colombiano ha aprobado esta lección todavía, así que el uso regional puede cambiar.",
    "review.helpCheck": "Reportar algo de esta lección",
    "provenance.machine": "Las explicaciones en español de esta lección se tradujeron automáticamente y todavía no las ha revisado un hablante nativo.",
    "provenance.count": "{count} campos afectados",
    "provenance.helpCheck": "Reportar una traducción que suene mal",
    "review.count.none": "Todavía no has reportado nada",
    "review.count.one": "{count} reporte listo para enviar",
    "review.count.other": "{count} reportes listos para enviar",
    "review.whichPart": "¿Qué parte está mal?",
    "review.whatProblem": "¿Cuál es el problema?",
    "review.suggestion": "¿Cómo lo dirías tú?",
    "review.suggestionHint": "Escribe como lo dirías de verdad.",
    "review.comment": "Por qué — y dónde se usa así",
    "review.commentHint": "por ejemplo: en Medellín esto es de lo más normal, pero en Bogotá suena cortante.",
    "review.severity": "¿Qué tan grave es?",
    "review.region": "¿Desde dónde hablas?",
    "review.regionHint": "Bogotá, Medellín, la costa…",
    "review.role": "Estás revisando como",
    "review.save": "Agregar a mi reporte",
    "review.saveChanges": "Guardar los cambios",
    "review.missingText": "Este texto ya no está en la lección.",
    "review.saved.one": "Guardado. {count} reporte espera ser enviado.",
    "review.saved.other": "Guardado. {count} reportes esperan ser enviados.",
    "review.edit": "Editar",
    "review.remove": "Quitar",
    "review.queueTitle": "Tus reportes",
    "review.queue.empty": "Todavía no has reportado nada.",
    "review.queue.notSent": "{summary}. Todavía no se ha enviado nada a ninguna parte.",
    "review.queue.yourWording": "Tu versión:",
    "review.queue.drift": "Este texto cambió desde que lo reportaste — ábrelo y revísalo.",
    "review.confirmClear": "¿Borrar todos los reportes que guardaste? Esto no se puede deshacer.",
    "review.submit": "Abrir una issue de GitHub con estas marcas",
    "review.copy": "Copiar como Markdown",
    "review.download": "Descargar JSON",
    "review.clear": "Borrar todas",
    "review.status.opened": "GitHub se abrió en una pestaña nueva. Tus reportes siguen aquí hasta que los borres.",
    "review.status.tooLongCopied": "Es demasiado para caber en un enlace, así que quedó en tu portapapeles: pégalo en la issue que GitHub acaba de abrir.",
    "review.status.tooLongDownload": "Es demasiado para caber en un enlace. Usa “Descargar JSON” y adjunta el archivo a la issue que GitHub acaba de abrir.",
    "review.status.copied": "Copiado. Pégalo en una issue de GitHub, en un correo o en un mensaje.",
    "review.status.copyFailed": "No se pudo acceder al portapapeles; mejor usa “Descargar JSON”.",
    "review.status.downloaded": "Descargado. Adjúntalo a una issue de GitHub o envíaselo a alguien del proyecto.",
    "review.status.cleared": "Se borraron todos los reportes.",

    /* Etiquetas visibles de los pares [código, etiqueta]. El código nunca cambia. */
    "review.issueType.not-natural": "Nadie dice esto así",
    "review.issueType.regional": "Región equivocada — no es uso general colombiano",
    "review.issueType.register": "Registro equivocado (usted / tú / vos, o la formalidad)",
    "review.issueType.translation": "La traducción no corresponde",
    "review.issueType.pronunciation": "La guía de pronunciación confunde",
    "review.issueType.spelling": "Ortografía, tilde o error de escritura",
    "review.issueType.culture": "La explicación cultural está mal o incompleta",
    "review.issueType.risky": "Podría avergonzar o poner en riesgo a quien lo repita",
    "review.issueType.outdated": "Se entiende, pero suena anticuado o marca clase social",
    "review.issueType.other": "Otra cosa",
    "review.severity.blocker": "Grave — no publicar así",
    "review.severity.should-fix": "Hay que corregirlo antes de aprobar",
    "review.severity.nitpick": "Detalle menor — funciona de cualquier forma",
    "review.role.native-es-co": "Hablante nativo de español colombiano",
    "review.role.native-es-other": "Hablante nativo de español, no colombiano",
    "review.role.native-en": "Hablante nativo o experto de inglés",
    "review.role.educator": "Docente de idiomas",

    "review.region.bogota": "Bogotá (rolo / cachaco)",
    "review.region.antioquia": "Medellín y Antioquia (paisa)",
    "review.region.valle": "Cali y Valle del Cauca (valluno)",
    "review.region.caribe": "Costa Caribe (costeño)",
    "review.region.eje-cafetero": "Eje Cafetero",
    "review.region.santander": "Santander",
    "review.region.narino": "Nariño y el sur",
    "review.region.llanos": "Llanos",
    "review.region.pacifico": "Costa Pacífica (Chocó)",
    "review.region.co-general": "Colombiano, sin región particular",

    "report.intro": "¿Algo aquí no está bien? Cuéntanos. Elige abajo las palabras exactas — nada sale de este navegador hasta que decidas enviarlo.",
    "report.scope": "¿Sobre qué es tu reporte?",
    "report.item": "¿Cuál?",
    "report.clearForm": "Limpiar el formulario",
    "report.scope.lesson": "La lección que estoy leyendo",
    "report.scope.verb": "Un verbo de la biblioteca",
    "report.scope.fluency": "Una frase de fluidez",
    "report.scope.slang": "Una expresión coloquial",
    "report.scope.mature": "Lenguaje fuerte",
    "report.scope.signal": "Una señal de conversación",
    "report.noLesson": "Abre una lección primero y aparecerá aquí.",
    "report.formCleared": "Formulario limpiado.",
    "report.holding": "Sigues reportando la línea que elegiste. Limpia el formulario para reportar otra cosa.",
    "report.editing": "Estás editando un reporte que ya guardaste.",
  }
};

/*
 * The learner reads the language they are NOT studying. Someone working through
 * the "en" lessons is a Spanish speaker, so they get a Spanish interface.
 */
function uiLanguageFor(direction) {
  return direction === "es" ? "en" : "es";
}

function t(key, direction, values) {
  const language = uiLanguageFor(direction);
  const table = UI_STRINGS[language] || UI_STRINGS.en;
  let text = table[key] ?? UI_STRINGS.en[key] ?? key;
  if (values) {
    for (const [name, value] of Object.entries(values)) {
      text = text.split(`{${name}}`).join(String(value));
    }
  }
  return text;
}

/*
 * English and Spanish both need only a one/other distinction, so a key like
 * "review.count" is stored as "review.count.one" and "review.count.other" and
 * selected here. {count} is interpolated automatically.
 */
function tPlural(key, direction, count, values) {
  const suffix = Math.abs(count) === 1 ? "one" : "other";
  return t(`${key}.${suffix}`, direction, { count, ...(values || {}) });
}

/*
 * Swaps every marked element in place. Elements opt in with an attribute:
 *   data-i18n              -> textContent
 *   data-i18n-placeholder  -> placeholder
 *   data-i18n-aria         -> aria-label
 * so that markup stays the source of truth for structure and this file stays
 * the source of truth for wording.
 *
 * Because data-i18n writes textContent, it must sit on an element that holds
 * text and nothing else. A <label> wrapping an <input>, or a sentence with a
 * link inside it, needs the key on an inner <span> — otherwise the child
 * element is destroyed on the first language switch. That mistake is silent
 * and looks like a rendering bug, so it is caught and reported here instead.
 */
function applyI18n(direction, root) {
  const scope = root || document;
  const known = (key) => UI_STRINGS.en[key] !== undefined || UI_STRINGS.es[key] !== undefined;
  scope.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    // An unknown key must never overwrite good markup with its own name. Leaving
    // the authored text in place degrades to "untranslated", not "broken".
    if (!known(key)) {
      console.warn(`i18n: no string for "${key}"; leaving the markup text in place.`);
      return;
    }
    if (node.firstElementChild) {
      console.warn(`i18n: "${key}" is on an element containing markup; move the key to an inner <span> or its children will be erased.`);
      return;
    }
    node.textContent = t(key, direction);
  });
  scope.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder, direction));
  });
  scope.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria, direction));
  });
  document.documentElement.lang = uiLanguageFor(direction);
}

/*
 * Exposed globally so other scripts (review-ui.js) can translate strings they
 * build in JS rather than in markup. Load this file before them.
 *
 * Note for callers: `direction` is the *content* direction ("es" = learning
 * Colombian Spanish). It is read here, never written. Interface language is
 * derived from it through uiLanguageFor(); the two are related but not the same
 * concept, and nothing in this file should be used to normalise or collapse the
 * direction value that lesson content and review anchors depend on.
 */
if (typeof window !== "undefined") {
  window.ParceroI18n = { UI_STRINGS, uiLanguageFor, t, tPlural, applyI18n };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { UI_STRINGS, uiLanguageFor, t, tPlural, applyI18n };
}
})();
