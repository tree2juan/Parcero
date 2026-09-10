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
 * Slots: signal, whatItLooksLike, whatItMeans, direction, respond.
 */
/*
 * Conversation-level signals.
 *
 * Every entry above is a word you can look up. These are not. A conversation
 * can turn hostile without a single word in it being rude, and that is the case
 * learners miss - especially across languages, where the cues that carry the
 * meaning are exactly the ones a textbook never teaches. Formality is the clearest
 * example: in Colombia a sudden switch from tú to usted mid-argument is a door
 * closing, and a learner who has been taught that usted is simply "polite" will
 * read the most hostile moment in the exchange as the friendliest.
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
  ["Sarcastic agreement", "“Sure. Absolutely. Whatever you say.”", "Refusal, not agreement. English carries this almost entirely in intonation.", "en", "“That sounded like a no. Is it?”"],
  ["Passive-aggressive politeness", "“Per my last email.” “As I mentioned previously.”", "Documented frustration. Common in English-language workplaces.", "en", "Answer the substance and acknowledge the miss once."],
  ["Going quiet and formal in writing", "Emails suddenly shorter, no greeting, no name.", "Displeasure signaled by withdrawal - the written form of the usted switch.", "en", "Ask directly, ideally on a call rather than in writing."],
  ["Nicknames dropped", "Someone who called you Juanito now uses Juan, or nothing.", "Warmth withdrawn deliberately.", "en", "Worth asking about privately."],
  ["Talking over you repeatedly", "You are interrupted every time you begin.", "A dominance pattern, not an accident, once it has happened three times.", "en", "“I’d like to finish this thought.” Say it every time."],
  ["Compliment with a sting", "“Your English is so good for someone who just arrived.”", "A backhanded compliment that reclassifies you as an outsider.", "en", "You may let it pass or name it. Both are reasonable."],
  ["Questions that are accusations", "“Why would you do it that way?”", "Not a request for information. The answer wanted is an apology.", "en", "Answer the question literally first. It defuses more often than it escalates."]
];
