/*
 * Language you need to recognise and should almost never produce.
 *
 * This file exists because comprehension and production are not the same skill,
 * and pretending otherwise leaves learners defenceless. A textbook that omits
 * insults does not stop anyone from being insulted - it just guarantees they
 * will not know it happened, or will know and have no idea how serious it was.
 * The gap that matters is not "what does this word mean" but "is this teasing,
 * an argument, or a threat, and what do I do now".
 *
 * So the list is built around three questions, in the order a person actually
 * asks them:
 *
 *   severity   - how much force does this carry? Low words survive a joke
 *                between friends. High words end relationships and start
 *                fights, whatever the speaker's tone claimed.
 *   note       - what is really going on when someone says it.
 *   respond    - what to do. Not a comeback. Colombian conflict norms reward
 *                de-escalation and leaving, and a learner trading insults in a
 *                second language will lose that exchange every time.
 *
 * Almost every entry is "understand only" by design, so that is not a field -
 * it is the premise. Where a word genuinely is usable, the note says so
 * explicitly rather than leaving the reader to guess.
 *
 * matureSignals is the other half. Individual words are the easy case; the hard
 * case is a conversation whose temperature has changed while every single word
 * in it stayed polite. Those patterns are listed separately, because you cannot
 * look them up in a glossary.
 *
 * The first five entries keep their original order and position. Review anchors
 * are stored as mature:<index>/<slot>, so reordering them would silently
 * repoint every flag a reader has already filed.
 */
const matureItems = [
  /* The original five, order preserved for existing review anchors. */
  ["grosero/a", "rude / impolite", "Low", "Describes behavior; use it to set a boundary rather than label a person in anger.", "es", "Name the behaviour, not the person: “Eso que dijiste fue grosero.”"],
  ["malparido/a", "strong insult", "High", "Colombian use varies by relationship and tone. Do not direct it at people; step away or ask for help if language feels threatening.", "es", "Do not answer it. Leave, or ask for a third person to join the conversation."],
  ["hijueputa", "strong insult / exclamation", "High", "A common Colombian profanity with highly context-dependent force. Recognition only; not workplace-safe.", "es", "If it is aimed at an object or a situation, it is venting. If it is aimed at you, end the conversation."],
  ["go to hell", "vete al carajo", "High", "Hostile dismissal. Do not escalate; use a boundary such as “I’m ending this conversation.”", "en", "“I’m going to stop here.” Then actually stop."],
  ["jerk", "idiota / fastidioso", "Medium", "Can be insulting even when said jokingly. Ask for clarification or state a boundary.", "en", "“Was that a joke? It didn’t land that way.”"],

  /* Colombian Spanish - mild, and often affectionate between friends. */
  ["bobo/a", "fool, silly", "Low", "Very common and usually gentle. Said to a child or a friend it is close to “silly”.", "es", "Safe to let pass. If it stings, “oye, en serio” is enough."],
  ["tonto/a", "silly, daft", "Low", "Mild across the Spanish-speaking world. Rarely a real attack.", "es", "No response needed."],
  ["güevón / huevón", "idiot; also just “dude”", "Medium", "The classic double-edged Colombian word. Among close friends it is a neutral address; from a stranger it is an insult. Tone and relationship decide, and a learner reads both badly.", "es", "Do not use it until a Colombian friend uses it about you first."],
  ["marica", "dude; also a slur", "Medium", "Among young paisas it is a filler as neutral as “mate”, and used constantly. It is also a homophobic slur, and which one it is depends entirely on speaker, target and context. Not a word a learner can safely produce.", "es", "Understand it as address. Never use it about someone."],
  ["cansón/a", "annoying, pestering", "Low", "Everyday complaint, often said fondly to children.", "es", "Not an insult; no response needed."],
  ["necio/a", "naughty, stubborn", "Low", "Usually about children misbehaving.", "es", "No response needed."],
  ["pesado/a", "hard work, tiresome", "Low", "Someone difficult to be around.", "es", "Mild. Worth noticing if it is aimed at you repeatedly."],
  ["creído/a", "full of themselves", "Low", "Accusation of arrogance.", "es", "Usually gossip rather than confrontation."],
  ["lambón/a", "bootlicker, suck-up", "Medium", "Workplace and school insult. Stings more than it sounds.", "es", "Do not use it at work, even as a joke."],
  ["sapo/a", "snitch", "Medium", "A serious accusation in some settings, with real consequences attached to it historically. Never a light word.", "es", "If you are called this, correct the facts calmly and involve someone senior."],
  ["ñero/a", "lowlife", "Medium", "Carries an explicit class sneer.", "es", "Recognise the contempt. Do not repeat the word."],
  ["gomelo/a", "rich snob", "Low", "Mocking, about privilege. Rarely wounding.", "es", "Usually teasing."],
  ["tacaño/a", "stingy", "Low", "Common complaint about someone who will not pay their share.", "es", "No response needed."],
  ["montañero/a", "country bumpkin", "Medium", "Mocks someone as rural and unsophisticated. More cutting than it looks.", "es", "Recognise it as a class jab."],
  ["patán", "boor, lout", "Medium", "Someone with no manners, usually a man behaving badly.", "es", "A description of behaviour; can be used to set a boundary."],
  ["chismoso/a", "gossip", "Low", "Very common, half-joking.", "es", "No response needed."],
  ["cara de barro", "shameless, brazen", "Low", "Someone with no embarrassment about their own behaviour.", "es", "Mild reproach."],
  ["descarado/a", "shameless", "Low", "Stronger than “cara de barro” but still mild.", "es", "Mild reproach."],

  /* Colombian Spanish - genuinely strong. Recognition only. */
  ["gonorrea", "extremely strong insult; also “mate” among some", "High", "Uniquely Colombian in this use. Among certain close groups it is an in-group address; outside them it is one of the harshest words available. A learner has no way to tell which is happening.", "es", "Never produce it. If aimed at you in anger, leave the situation."],
  ["hp / HP", "written short form of hijueputa", "High", "Appears constantly in text messages and comments. Same force as the full word.", "es", "Read it as the full insult."],
  ["malnacido/a", "strong insult", "High", "Close to “malparido”. Deeply offensive.", "es", "Disengage."],
  ["desgraciado/a", "wretch, bastard", "High", "Heavy accusation, often in a real argument.", "es", "Disengage."],
  ["perra / perro", "bitch / dog", "High", "Aimed at a woman it is a severe misogynist insult. Aimed at a man it is somewhat lighter but still hostile.", "es", "Disengage; report if it happens at work."],
  ["zorra", "slur against a woman", "High", "Sexual slur. There is no mild use.", "es", "Disengage; report if it happens at work."],
  ["puta", "whore; also an intensifier", "High", "As an intensifier (“de puta madre”) it is Spanish rather than Colombian and still crude. Aimed at a person it is a severe slur.", "es", "Disengage."],
  ["cabrón/a", "bastard; regionally variable", "High", "Much harsher in Colombia than in Mexico, where it can be friendly. Do not import the Mexican usage.", "es", "Do not use it in Colombia at all."],
  ["chimba (despectivo)", "crude dismissal", "Medium", "The same root as the enthusiastic “¡qué chimba!”. Anatomical in origin, so it is never workplace-safe in any sense.", "es", "Understand both directions of the word; produce neither at work."],
  ["mondá", "coastal profanity", "High", "Caribbean coast. Extremely common there and extremely crude.", "es", "Recognise it as coastal register. Do not produce it."],
  ["jueputa / juemadre", "softened hijueputa", "Medium", "Deliberately clipped to take the edge off, the way English does with “sugar”. Still not polite.", "es", "Read it as venting rather than an attack."],
  ["mierda", "shit", "Medium", "Frustration far more often than an insult.", "es", "Usually about the situation, not about you."],
  ["carajo", "damn, hell", "Low", "Mild by Colombian standards. “¡Al carajo!” is exasperation.", "es", "Ordinary venting."],
  ["joder", "to mess with; damn", "Medium", "More Peninsular than Colombian, but understood everywhere.", "es", "Usually venting."],
  ["verga", "crude exclamation", "High", "Anatomical. Common on the coast, coarse everywhere.", "es", "Recognition only."],
  ["culicagado/a", "brat, snotty kid", "Medium", "Crude in origin, often said with real affection about children.", "es", "Context decides. Usually not hostile."],
  ["care… (cara de …)", "insult construction", "Medium", "A productive pattern: “cara de” plus almost anything abusive. Recognising the frame matters more than any single example.", "es", "Recognise the construction and judge by the second word."],
  ["hijo de …", "insult construction", "High", "Another productive frame. If someone begins it, the conversation is already over.", "es", "Leave the conversation."],

  /* Threats and coercion - the category where getting it wrong is dangerous. */
  ["te voy a …", "I'm going to … (threat frame)", "High", "A direct threat. Colombian Spanish signals genuine menace calmly and briefly, without raised volume, which learners routinely misread as mild.", "es", "Treat it as serious regardless of tone. Leave and tell someone."],
  ["se va a arrepentir", "you'll regret it", "High", "A veiled threat, usually said politely, often with usted. The formality is not softening.", "es", "Take it seriously. Formality does not mean it is not a threat."],
  ["no dé papaya", "don't leave yourself open", "Low", "Not an insult at all - genuine safety advice, said constantly and kindly.", "es", "Take it as help, not criticism."],
  ["quieto ahí", "hold it right there", "High", "In a robbery this is the standard opening. Comply; do not negotiate.", "es", "Hand over what is asked for. Belongings are replaceable."],
  ["está pilas / póngase pilas", "stay sharp", "Low", "Warning, not a threat.", "es", "Take it as help."],

  /* English direction - for Spanish speakers learning English. */
  ["asshole", "imbécil / cretino", "High", "Common in American English and genuinely offensive despite that frequency. Frequency is not permission.", "en", "“That’s out of line.” Then disengage."],
  ["bastard", "cabrón / desgraciado", "High", "Considerably stronger in American English than in British, where it can be almost affectionate.", "en", "Disengage."],
  ["bitch", "slur against a woman", "High", "Severe misogynist slur. Its use in music and film does not make it safe to say.", "en", "Disengage; report if at work."],
  ["idiot / moron", "idiota / tonto", "Medium", "Insulting but not profane. Common in arguments.", "en", "“Let’s keep this about the work.”"],
  ["stupid", "estúpido", "Medium", "Aimed at a person it lands harder than its Spanish cognate does.", "en", "Worth naming: “I’d rather you didn’t call me that.”"],
  ["shut up", "cállate", "Medium", "Blunt and rude from an adult to an adult. English has no polite version of this.", "en", "“I wasn’t finished.”"],
  ["screw you / f--- you", "vete al diablo", "High", "Ends the conversation whether or not that was intended.", "en", "End the conversation."],
  ["damn / damn it", "maldita sea", "Low", "Mild frustration in most of the English-speaking world.", "en", "Ordinary venting."],
  ["hell", "diablos", "Low", "Mild. “What the hell” is everyday speech.", "en", "Ordinary venting."],
  ["crap", "porquería", "Low", "Mild; safe in most casual settings, not in formal ones.", "en", "Ordinary venting."],
  ["piss off", "lárgate", "High", "British English, hostile. “Pissed off” meaning annoyed is much milder - the two are easy to confuse.", "en", "Disengage."],
  ["loser", "perdedor / fracasado", "Medium", "Contemptuous, aimed at the whole person rather than an action.", "en", "“That’s unnecessary.”"],
  ["freak", "bicho raro", "Medium", "Can be playful among friends and cruel from anyone else.", "en", "Ask whether it was meant as a joke."],
  ["creep", "acosador / tipo raro", "Medium", "Specifically about unwanted, unsettling attention. A serious accusation.", "en", "If said about you, stop what you are doing and ask what you did."],
  ["whatever", "como sea / me da igual", "Low", "Not profane at all, but genuinely dismissive and read as contempt in an argument.", "en", "“I’d like to actually settle this.”"],
  ["you people", "ustedes los …", "High", "Almost always heard as prejudice about a group, whatever was meant.", "en", "Name it: “What do you mean by that?”"],
  ["calm down", "cálmate", "Medium", "Not an insult, and reliably escalates rather than calms. Frequently used to dismiss women in particular.", "en", "“I am calm. I’d like an answer.”"],
  ["with all due respect", "con todo respeto", "Low", "In English this phrase almost always precedes disrespect. Learners take it at face value.", "en", "Listen to what follows, not to the phrase."],
  ["no offense, but", "sin ofender, pero", "Low", "Reliably precedes something offensive.", "en", "Judge what follows."],
  ["bless your heart", "pobrecito (irónico)", "Low", "American Southern English. Sounds kind, frequently means the speaker thinks you are a fool.", "en", "Read the tone, not the words."],
  ["that's rich", "mira quién habla", "Low", "Sarcastic accusation of hypocrisy.", "en", "Recognise the sarcasm."],
  ["I'm not going to repeat myself", "no lo voy a repetir", "Medium", "A dominance move, not information.", "en", "“I heard you. I disagree.”"],
  ["do you understand me?", "¿me entendiste?", "Medium", "Asked flatly by an angry speaker this is a challenge, not a comprehension check.", "en", "“I understand. I don’t agree.”"],

  /* Sexual and adult content - flagged so learners know what they are hearing. */
  ["contenido sexual explícito", "explicit sexual content", "High", "Colombian Spanish uses heavy innuendo in music, comedy and street talk. Reggaetón lyrics in particular are far more explicit than their radio-friendliness suggests.", "es", "Recognise the register. Do not repeat lyrics you have not had translated."],
  ["piropo", "unsolicited street comment", "Medium", "Ranges from a harmless compliment to harassment. Frequently defended as tradition; increasingly rejected in Colombian cities.", "es", "You are not obliged to respond. Keep walking."],
  ["acoso", "harassment", "High", "The word to use when reporting. Knowing it matters more than knowing any insult in this file.", "es", "“Esto es acoso y quiero reportarlo.”"],
  ["morbo", "prurient interest, leering", "Medium", "Describes an attitude rather than an act.", "es", "Useful for naming behaviour precisely."],
  ["doble sentido", "double meaning, innuendo", "Low", "A whole comic register, especially on the coast. Innocuous words carrying a second reading.", "es", "If a room laughs at something plain, this is usually why."],
  ["albur / indirecta", "veiled dig or innuendo", "Medium", "A pointed remark disguised as a general one.", "es", "Ask directly whether it was aimed at you."],
  ["hook up", "acostarse con alguien", "Medium", "Deliberately vague in English, which is the point of the phrase.", "en", "Recognise the ambiguity rather than assuming."],
  ["creepy", "escalofriante / incómodo", "Medium", "Names unwanted attention. Useful vocabulary for describing a situation.", "en", "A legitimate word to use about behaviour."],
  ["harassment", "acoso", "High", "The formal term. Learn it before you need it.", "en", "“I want to report this as harassment.”"],
  ["inappropriate", "inapropiado", "Low", "The standard workplace word for naming a problem without escalating.", "en", "“That was inappropriate.” Neutral, effective, hard to argue with."]
];

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
  ["Excessive politeness", "“Con todo el respeto que usted merece…” piled up before a point.", "Almost always precedes an attack. The politeness is armour, not warmth.", "es", "Listen past the framing to the actual claim."],
  ["Laughing while insulting", "An insult delivered with a smile and “era chiste”.", "Deniability. The joke frame is there so the speaker can retreat if challenged.", "es", "“No me pareció chistoso” is a complete and sufficient answer."],
  ["Group silence after a remark", "A room that was talking goes quiet.", "Something crossed a line - possibly something you said, and possibly nobody will tell you.", "es", "Ask someone privately afterwards. Colombians will usually explain kindly in private."],
  ["Sarcastic agreement", "“Sure. Absolutely. Whatever you say.”", "Refusal, not agreement. English carries this almost entirely in intonation.", "en", "“That sounded like a no. Is it?”"],
  ["Passive-aggressive politeness", "“Per my last email.” “As I mentioned previously.”", "Documented frustration. Common in English-language workplaces.", "en", "Answer the substance and acknowledge the miss once."],
  ["Going quiet and formal in writing", "Emails suddenly shorter, no greeting, no name.", "Displeasure signalled by withdrawal - the written form of the usted switch.", "en", "Ask directly, ideally on a call rather than in writing."],
  ["Nicknames dropped", "Someone who called you Juanito now uses Juan, or nothing.", "Warmth withdrawn deliberately.", "en", "Worth asking about privately."],
  ["Talking over you repeatedly", "You are interrupted every time you begin.", "A dominance pattern, not an accident, once it has happened three times.", "en", "“I’d like to finish this thought.” Say it every time."],
  ["Compliment with a sting", "“Your English is so good for someone who just arrived.”", "A backhanded compliment that reclassifies you as an outsider.", "en", "You may let it pass or name it. Both are reasonable."],
  ["Questions that are accusations", "“Why would you do it that way?”", "Not a request for information. The answer wanted is an apology.", "en", "Answer the question literally first. It defuses more often than it escalates."]
];
