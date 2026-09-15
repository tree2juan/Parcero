/*
 * Conversation-level signals: the half of hostile language you cannot look up.
 *
 * The word list that used to live here is gone. data/after-dark.js now owns
 * every individual word, organized by city, because how hard a word lands is a
 * regional fact and a single national list flattened exactly the distinction a
 * learner needs. This file keeps the part that list could never hold.
 *
 * A conversation can turn hostile without a single word in it being rude, and
 * that is the case learners miss - especially across languages, where the cues
 * that carry the meaning are exactly the ones a textbook never teaches.
 * Formality is the clearest example: in Colombia a sudden switch from tu to
 * usted mid-argument is a door closing, and a learner who has been taught that
 * usted is simply "polite" will read the most hostile moment in the exchange as
 * the friendliest.
 *
 * Colombian conflict norms reward de-escalation and leaving, so `respond` is
 * never a comeback. A learner trading insults in a second language loses that
 * exchange every time.
 *
 * BOTH DIRECTIONS, AND THE SAME RULE AS EVERYWHERE ELSE: the "es" rows are read
 * by someone learning Spanish, so the label, the reading and the advice are in
 * English and only the quoted line is Spanish. The "en" rows are read by a
 * Colombian learning English, so those same three are in Spanish and only the
 * quoted line is English. Explanation always sits in the language the reader
 * already has; the two halves are mirrors, not translations.
 *
 * Slots: signal, whatItLooksLike, whatItMeans, direction, respond.
 */
const matureSignals = [
  ["Sudden switch to usted", "Someone who has been using tú or vos with you switches to usted mid-conversation.", "Distance, and usually anger. Formality here is not politeness - it is a door closing.", "es", "Match the formality, lower your volume, and address the substance. Do not switch back to tú."],
  ["Sudden switch to your full name", "“Señor Martínez” from someone who has called you Juan for months.", "The same move as the usted switch, done with names.", "es", "Treat it as a formal complaint in progress and respond to the content."],
  ["Diminutives turning sharp", "“Ay, qué bonito, papito.” Affectionate suffixes delivered flatly.", "Sarcasm. Colombian Spanish carries a lot of contempt through diminutives while keeping the words themselves sweet.", "es", "Do not answer the surface meaning. Ask plainly what the problem is."],
  ["Voice getting quieter, not louder", "The other person drops in volume and slows down.", "In Colombian conflict norms this often signals more danger than shouting, not less.", "es", "Take it more seriously than raised volume, not less. Create distance."],
  ["Third person about someone present", "“Aquí el señor dice que…” while looking at you.", "Deliberate exclusion. You have been made a topic rather than a participant.", "es", "Re-enter the conversation directly: “Perdón, prefiero que me lo diga a mí.”"],
  ["Excessive politeness", "“Con todo el respeto que usted merece…” piled up before a point.", "Almost always precedes an attack. The politeness is armor, not warmth.", "es", "Listen past the framing to the actual claim."],
  ["Laughing while insulting", "An insult delivered with a smile and “era chiste”.", "Deniability. The joke frame is there so the speaker can retreat if challenged.", "es", "“No me pareció chistoso” is a complete and sufficient answer."],
  ["Group silence after a remark", "A room that was talking goes quiet.", "Something crossed a line - possibly something you said, and possibly nobody will tell you.", "es", "Ask someone privately afterwards. Colombians will usually explain kindly in private."],
  ["Acuerdo sarcástico", "“Sure. Absolutely. Whatever you say.”", "Es un no, no un sí. El inglés carga esto casi todo en la entonación, y las palabras por sí solas no lo delatan.", "en", "Nómbrelo sin acusar: “That sounded like a no. Is it?”"],
  ["Cortesía pasivo-agresiva", "“Per my last email.” “As I mentioned previously.”", "Molestia dejada por escrito a propósito. Frecuente en oficinas anglosajonas, donde el correo hace las veces de expediente.", "en", "Responda al fondo y reconozca el olvido una sola vez: “You're right, I missed that. Here's where it stands.”"],
  ["Silencio y formalidad por escrito", "Los correos se acortan de golpe: sin saludo, sin nombre, sin despedida.", "Disgusto expresado por retirada. Es la versión escrita del cambio a usted, y en inglés no hay otra pista.", "en", "Pregunte de frente, mejor en una llamada que por escrito: “Did something go wrong on my end?”"],
  ["Se cae el apodo", "Quien le decía Juanito ahora le dice Juan, o no le dice nada.", "Cercanía retirada a propósito. El inglés no tiene el par tú/usted, así que el nombre hace ese trabajo.", "en", "Vale la pena preguntar en privado: “Are we okay?”"],
  ["Le hablan encima todo el tiempo", "Lo interrumpen cada vez que empieza una frase.", "A la tercera vez deja de ser casualidad y es un patrón de dominio. En reuniones le puede costar el crédito de su propio trabajo.", "en", "Repítalo todas las veces, sin subir la voz: “I'd like to finish this thought.”"],
  ["Elogio con aguijón", "“Your English is so good for someone who just arrived.”", "Un cumplido que en realidad lo reclasifica como alguien de afuera. Suele decirse sin mala intención y duele igual.", "en", "Dejarlo pasar o nombrarlo son opciones igual de válidas: “Thanks — I've been at it a while.”"],
  ["Preguntas que son acusaciones", "“Why would you do it that way?”", "No busca información. La respuesta que se espera es una disculpa.", "en", "Contéstela literal primero. Desactiva más veces de las que agrava: “Because of X. Happy to change it.”"],
  ["Lenguaje de oficina que cierra el tema", "“Let's take this offline.” “I'll circle back.” “Noted.”", "Fórmulas de aplazamiento. A veces son logística real y a veces significan que el asunto no se va a volver a tocar.", "en", "Pida fecha en el momento: “Sure — when works for you?” Sin fecha, no hubo aplazamiento."],
  ["Educación acumulada antes del golpe", "“With all due respect…” “I hear you, but…” “No offense, but…”", "Casi siempre anuncia un ataque. La cortesía es blindaje, no calidez, igual que en español.", "en", "Escuche por debajo de la fórmula y responda al reclamo real, no al preámbulo."],
  ["Se acabó el nombre propio", "Deja de dirigirse a usted por su nombre y pasa a “you people”, “someone”, “certain people”.", "Lo sacaron de la conversación y lo convirtieron en tema. El plural impersonal es el aviso.", "en", "Vuelva a entrar en primera persona: “If that's about me, I'd rather you say it to me.”"]
];
