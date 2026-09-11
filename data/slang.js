/*
 * Colombian slang, as a reference a learner can actually act on.
 *
 * The lessons teach language you are meant to produce. This file mostly does
 * not. Slang is the part of a language you meet long before you can safely use
 * it: you will hear "parcero" on your first day in Medellín and "gonorrea"
 * within a week, and the useful thing to know is not just what they mean but
 * whether saying them back makes you sound at home or makes you sound like a
 * foreigner repeating something they did not understand.
 *
 * So every entry carries a `safety` value, and it is not decoration - it is the
 * point. Three values, deliberately few:
 *
 *   "Say it freely"       - ordinary informal Colombian; no one will blink.
 *   "Say it with friends" - fine among people who already like you, wrong with
 *                           a stranger, a client, or anyone's mother.
 *   "Understand only"     - recognize it, do not produce it. Either it is crude,
 *                           or it carries an in-group license a learner has not
 *                           earned yet, and getting it wrong is not a small
 *                           mistake.
 *
 * `region` is equally load-bearing. Colombia is not one dialect, and slang is
 * where that shows most: "sisas" in Medellín, "erda" on the coast, "¿sí o qué?"
 * in Bogotá. An entry marked for one region said in another is not wrong so much
 * as conspicuous, which is usually what a learner is trying to avoid.
 *
 * Slots are positional, in the order named by SLANG_SLOTS in review.js. As with
 * every other reference list here, append new slots, never insert - the review
 * anchors that let a reader flag a specific field are stored by position.
 */
const slangItems = [
  /* People, and what to call them. The first slang anyone needs. */
  ["parcero / parcera", "friend, mate, buddy", "casual", "Nationwide; born in Medellín", "Say it freely", "The single most Colombian word for a friend. Safe with peers, in shops, with drivers. Not for your boss on day one."],
  ["parce", "shortened 'parcero'", "casual", "Nationwide; strongest in Medellín", "Say it freely", "Same word, faster. Used as an address ('¿qué más, parce?') and as a filler between clauses."],
  ["llave / llavería", "close friend", "casual", "Medellín / Antioquia (paisa)", "Say it with friends", "Literally 'key'. Warmer and older than parcero; implies real history with someone."],
  ["mijo / mija", "kid, dear, love", "casual", "Nationwide", "Say it freely", "Contraction of 'mi hijo'. Affectionate from someone older, or between friends. From a stranger your own age it can sound patronising."],
  ["pelado / pelada", "kid, young person", "casual", "Nationwide", "Say it freely", "Anyone from a child to someone in their twenties. Neutral, occasionally dismissive if the person is an adult."],
  ["chino / china", "kid, child", "casual", "Bogotá (rolo/cachaco) and the interior", "Say it freely", "Nothing to do with China; from a Chibcha word. Bogotá's equivalent of 'pelado'."],
  ["cucho / cucha", "old man / old woman; parent", "casual", "Nationwide", "Say it with friends", "'Mi cucha' is an affectionate way to say 'my mom'. Said about a stranger it is rude."],
  ["mono / mona", "blond or light-haired person", "casual", "Nationwide", "Say it freely", "Descriptive, not an insult, and used freely to address someone whose name you do not know. Surprises learners who read it as 'monkey'."],
  ["gomelo / gomela", "rich, preppy, snobbish kid", "casual", "Bogotá (rolo/cachaco); understood nationwide", "Say it with friends", "Mocking but rarely vicious. Points at money plus attitude, not money alone."],
  ["ñero / ñera", "lowlife, rough type", "very casual", "Nationwide", "Understand only", "From 'compañero'. Carries a real class sneer. Recognize it; do not apply it to anyone."],
  ["man", "guy, dude", "casual", "Nationwide", "Say it freely", "Borrowed from English but fully Colombian, and it takes Spanish articles: 'el man', 'los manes'."],
  ["vieja", "woman, girl", "casual", "Nationwide", "Say it with friends", "Literally 'old woman' but used for any woman. Ordinary among friends, dismissive from a stranger."],
  ["sardino / sardina", "teenager, very young person", "casual", "Nationwide; slightly dated", "Say it freely", "Gently teasing. More common from older speakers."],
  ["socio", "buddy, partner", "casual", "Caribbean coast (costeño); also nationwide", "Say it freely", "Common address between men, especially in shops and on the street."],
  ["primo", "cousin, used for a friend", "casual", "Nationwide", "Say it freely", "No family relation implied. Very common from vendors and drivers."],
  ["patrón / patrona", "boss, chief", "casual", "Nationwide", "Say it freely", "A friendly, slightly deferential address from a vendor or driver. Not an actual job title."],
  ["berraco / verraco (persona)", "a tough, capable person", "casual", "Medellín / Antioquia (paisa); nationwide", "Say it freely", "High praise: someone who works hard and does not quit. Spelled both ways; 'berraco' is the Colombian norm."],
  ["teso / tesa", "highly skilled, a beast at something", "casual", "Nationwide", "Say it freely", "Admiring. 'Es tesa programando' - she is seriously good at programming."],
  ["nea", "street kid, rough type", "very casual", "Bogotá (rolo/cachaco)", "Understand only", "Reversed 'ñero'. Same class contempt; same advice."],
  ["tombo", "cop", "very casual", "Nationwide", "Say it with friends", "Not a compliment, but not a slur either. Do not use it to a police officer's face."],

  /* Greetings and openings. */
  ["¿Quiubo?", "What's up?", "casual", "Nationwide", "Say it freely", "Crushed form of '¿qué hubo?'. The default informal greeting; often stacked as '¿quiubo, parce?'."],
  ["¿Qué más?", "How's it going?", "casual", "Nationwide; especially Medellín", "Say it freely", "Not a request for more information. It is simply 'hi', and the answer is '¿bien, y usted?'."],
  ["¿Bien o qué?", "You good, or what?", "casual", "Medellín / Antioquia (paisa)", "Say it freely", "Warm and very paisa. Reply '¡bien!' or 'todo bien'."],
  ["¿Entonces qué?", "So what's up?", "casual", "Nationwide", "Say it freely", "Greeting, not a challenge, despite how it reads literally."],
  ["¿Qué hubo pues?", "Well, what's up?", "casual", "Medellín / Antioquia (paisa)", "Say it freely", "The 'pues' is what makes it paisa. Almost a regional signature."],
  ["¿Cómo vamos?", "How are we doing?", "casual", "Nationwide", "Say it freely", "Friendly and slightly inclusive; common from shopkeepers and colleagues."],
  ["¡Ala!", "Hey! / Wow!", "casual", "Bogotá (rolo/cachaco) and the interior", "Say it with friends", "An attention-getter and a mild exclamation of surprise."],
  ["¡Ave María!", "Good grief! / Wow!", "casual", "Medellín / Antioquia (paisa)", "Say it freely", "Religious in origin, secular in use. Expresses surprise, admiration or exasperation depending entirely on tone."],
  ["¡Erda! / ¡Eda!", "Damn! / Wow!", "very casual", "Caribbean coast (costeño)", "Say it with friends", "A softened clipping of a stronger word. Coastal, emphatic, extremely common there."],
  ["Ajá", "Right / and then? / go on", "casual", "Caribbean coast (costeño)", "Say it freely", "Coastal all-purpose particle. Acknowledges, prompts, or fills - meaning lives in the intonation."],
  ["¿Sí o qué?", "Right? / You in?", "casual", "Bogotá (rolo/cachaco)", "Say it freely", "Tag question inviting agreement, and also a way to ask if someone is joining."],
  ["¡Hágale!", "Go ahead! / Do it!", "casual", "Medellín / Antioquia (paisa); nationwide", "Say it freely", "Encouragement and consent at once. Also means 'hurry up' with the right tone."],

  /* Approval, enthusiasm, agreement. */
  ["bacano / bacana", "cool, great, nice", "casual", "Nationwide", "Say it freely", "The safest all-purpose 'that's great'. Works for objects, plans and people."],
  ["chévere", "cool, nice", "casual", "Nationwide; also Venezuela and much of the region", "Say it freely", "Slightly softer and more pan-Latin than 'bacano'. Never offensive."],
  ["¡Qué chimba!", "How awesome!", "very casual", "Nationwide; especially Medellín", "Say it with friends", "Enthusiastic praise. The root word is crude, so the phrase is fine with friends and wrong at work or with elders."],
  ["chimba (cosa buena)", "an excellent thing", "very casual", "Nationwide", "Say it with friends", "'Esa moto es una chimba' - that bike is amazing. Same crude root; same limits."],
  ["severo / severa", "awesome, seriously good", "casual", "Nationwide", "Say it freely", "Intensifier of admiration: 'severo parche' - what a great time."],
  ["brutal", "amazing", "casual", "Nationwide", "Say it freely", "Positive despite appearances, like English 'sick' or 'wicked'."],
  ["una nota", "fantastic", "casual", "Nationwide", "Say it freely", "'El concierto fue una nota' - the concert was fantastic."],
  ["berraquera", "something outstanding", "casual", "Medellín / Antioquia (paisa)", "Say it freely", "The noun of 'berraco'. Praise for effort, grit or quality."],
  ["¡Qué nota!", "How great!", "casual", "Nationwide", "Say it freely", "Interchangeable with '¡qué bacano!'."],
  ["de una", "right away; absolutely; I'm in", "casual", "Nationwide", "Say it freely", "Agreement with zero hesitation. The single most useful slang 'yes' in Colombia."],
  ["listo", "OK, done, agreed", "casual", "Nationwide", "Say it freely", "Colombia's universal acknowledgement. Ends transactions, confirms plans, closes calls."],
  ["dale", "go ahead, OK", "casual", "Nationwide", "Say it freely", "Consent or encouragement. Softer than 'de una'."],
  ["sisas", "yeah, yep", "very casual", "Medellín / Antioquia (paisa)", "Say it with friends", "Playful 'sí'. Young, informal, and unmistakably paisa."],
  ["fresco / fresca", "relax, no worries", "casual", "Nationwide", "Say it freely", "Both reassurance ('fresco, yo pago') and an instruction to calm down."],
  ["¡Eso!", "That's it! / Nice!", "casual", "Nationwide", "Say it freely", "Approval shouted at a good play, a good idea or a good result."],
  ["¡Uy!", "Ooh! / Whoa!", "casual", "Nationwide", "Say it freely", "Surprise, admiration or sympathy. Tone decides."],
  ["mera / mero", "total, complete (intensifier)", "very casual", "Caribbean coast (costeño)", "Say it with friends", "'Mera vaina' - what a thing. Coastal intensifier, informal."],
  ["a la orden", "at your service / can I help you?", "neutral", "Nationwide", "Say it freely", "Not slang exactly, but so constant it belongs here: shouted as a greeting by vendors and said again as you leave."],

  /* Complaint, disappointment, things going wrong. */
  ["¡Qué mamera!", "What a drag!", "very casual", "Nationwide", "Say it with friends", "Boredom or annoyance at a chore. Mildly crude; fine among friends."],
  ["jartera", "tedium, a pain", "casual", "Nationwide", "Say it freely", "Cleaner synonym of 'mamera'. Safe in most company."],
  ["jarto / jarta", "fed up; tiresome", "casual", "Nationwide", "Say it freely", "'Estoy jarto' - I've had enough. Describes people and situations alike."],
  ["maluco / maluca", "unpleasant, off, gross", "casual", "Nationwide", "Say it freely", "Covers bad taste, bad smell and feeling unwell: 'me siento maluco'."],
  ["paila", "too bad; we're done for", "casual", "Nationwide", "Say it freely", "Resigned acceptance of a bad outcome. 'Si no llegamos a las ocho, paila'."],
  ["¡Qué boleta!", "How embarrassing!", "casual", "Nationwide", "Say it freely", "Public embarrassment specifically - being seen doing something awkward."],
  ["la embarrada", "a screw-up; a shame", "casual", "Nationwide", "Say it freely", "'Qué embarrada' works as sympathy, close to 'that sucks'."],
  ["embarrarla", "to screw it up", "casual", "Nationwide", "Say it freely", "'La embarré' - I messed up. Ordinary self-criticism, not crude."],
  ["chimbo / chimba (cosa mala)", "fake, shoddy, disappointing", "very casual", "Nationwide", "Say it with friends", "Confusingly the near-opposite of '¡qué chimba!'. 'Un reloj chimbo' is a fake watch."],
  ["un chorro", "a mess; also a swig of liquor", "casual", "Nationwide", "Say it freely", "Context separates the two senses completely."],
  ["mamar gallo", "to mess around, stall, joke about", "casual", "Nationwide", "Say it freely", "Wasting time or pulling someone's leg. Very common and not crude despite the literal words."],
  ["dar lora", "to make a scene, be a nuisance", "casual", "Nationwide", "Say it freely", "'No dé lora' - don't make a fuss."],
  ["mamado / mamada (cansado)", "exhausted", "very casual", "Nationwide", "Say it with friends", "'Estoy mamado' - I'm wiped out. Common but crude-adjacent; avoid at work."],
  ["cansón / cansona", "annoying, pestering", "casual", "Nationwide", "Say it freely", "Someone who will not let up. Often said fondly to children."],
  ["¡Qué pereza!", "What a hassle! / Can't be bothered", "casual", "Nationwide", "Say it freely", "The polite, universal version of '¡qué mamera!'. Safe everywhere."],
  ["hacer el oso", "to embarrass yourself", "casual", "Nationwide", "Say it freely", "Literally 'to do the bear'. 'Hice el oso' - I made a fool of myself."],
  ["quedar mal", "to let someone down", "neutral", "Nationwide", "Say it freely", "Failing an obligation. Socially heavier in Colombia than its English gloss suggests."],

  /* Money, work, transactions. */
  ["plata", "money", "casual", "Nationwide", "Say it freely", "The default word for money. 'Dinero' sounds formal by comparison."],
  ["luca", "a thousand pesos", "casual", "Nationwide", "Say it freely", "'Cinco lucas' is 5,000 pesos. Essential for markets and taxis."],
  ["palo", "a million pesos", "casual", "Nationwide", "Say it freely", "'Dos palos' is two million. Turns up in rent and salary talk."],
  ["barra", "a thousand pesos", "casual", "Bogotá (rolo/cachaco)", "Say it freely", "Bogotá's alternative to 'luca'."],
  ["la napa", "a little extra thrown in", "casual", "Nationwide; strong in markets", "Say it freely", "The free bonus a vendor adds. Asking '¿y la napa?' is expected, not cheeky."],
  ["camello", "job, work", "casual", "Nationwide", "Say it freely", "Literally 'camel'. Implies effort. 'Conseguí camello' - I got a job."],
  ["camellar", "to work hard", "casual", "Nationwide", "Say it freely", "'Toca camellar' - we've got to grind."],
  ["vueltas", "errands; also change (money)", "casual", "Nationwide", "Say it freely", "'Tengo unas vueltas' - I have errands. Also the coins you get back."],
  ["chuspa", "plastic bag", "casual", "Nationwide", "Say it freely", "What you will be asked at every checkout: '¿le doy chuspa?'."],
  ["rebusque", "hustling for income", "casual", "Nationwide", "Say it freely", "Informal work pieced together. Said without shame, often with pride."],
  ["estar pelado", "to be broke", "casual", "Nationwide", "Say it freely", "'Ando pelado' - I'm skint. Note it is unrelated to 'pelado' meaning kid."],
  ["hacer una vaca", "to chip in together", "casual", "Nationwide", "Say it freely", "Pooling money for a shared purchase. 'Hagamos una vaca' is a normal suggestion."],
  ["dar papaya", "to leave yourself open", "casual", "Nationwide", "Say it freely", "Inviting trouble by being careless - phone on the table, wallet visible. 'No dé papaya' is genuine safety advice, not a joke."],
  ["papaya puesta, papaya partida", "if you leave an opening, expect it taken", "casual", "Nationwide", "Say it freely", "The proverb behind 'dar papaya'. Explains a whole attitude to risk."],
  ["estar pilas / ponerse las pilas", "to be sharp, get it together", "casual", "Nationwide", "Say it freely", "Literally 'put your batteries in'. Both a warning and a pep talk."],
  ["billete", "cash", "casual", "Nationwide", "Say it freely", "'Tiene billete' - he's got money."],
  ["fiar", "to sell on credit", "neutral", "Nationwide", "Say it freely", "Corner shops do this. '¿Me fía?' asks to pay later."],
  ["¿A cómo?", "How much is it?", "casual", "Nationwide", "Say it freely", "The market form of '¿cuánto vale?'. Shorter and more natural at a stall."],
  ["regalar", "to give, hand over (in shops)", "neutral", "Nationwide", "Say it freely", "'¿Me regala un tinto?' means 'could I get a coffee' - you are paying. Startles learners who read it as 'gift'."],

  /* Food and drink. */
  ["tinto", "small black coffee", "casual", "Nationwide", "Say it freely", "Not red wine. The default street coffee, sold from thermoses all day."],
  ["perico (café)", "coffee with a little milk", "casual", "Bogotá (rolo/cachaco)", "Say it freely", "In Bogotá cafés this is a drink order. The word has other, illegal meanings elsewhere - context matters."],
  ["algo", "a light snack, afternoon tea", "casual", "Nationwide", "Say it freely", "'Tomar algo' between lunch and dinner. Literally 'something'."],
  ["onces", "mid-afternoon snack", "casual", "Bogotá (rolo/cachaco) and the interior", "Say it freely", "The interior's name for the same ritual."],
  ["mecato", "snacks, nibbles", "casual", "Nationwide", "Say it freely", "Chips, sweets, anything eaten between meals."],
  ["guaro", "aguardiente", "casual", "Nationwide", "Say it freely", "The anise spirit at the center of most Colombian celebrations."],
  ["fritanga", "platter of fried meats", "casual", "Nationwide", "Say it freely", "Shared, enormous, and a social occasion in itself."],
  ["aguapanela", "hot drink of raw cane sugar", "neutral", "Nationwide", "Say it freely", "Everyday drink and the standard home remedy for a cold, often with lime or cheese."],
  ["changua", "milk and egg soup", "neutral", "Bogotá (rolo/cachaco)", "Say it freely", "A Bogotá breakfast and hangover cure."],
  ["salpicón", "chopped fruit drink", "neutral", "Nationwide", "Say it freely", "Sold from carts; fruit in juice or soda."],
  ["arepa", "maize flatbread", "neutral", "Nationwide", "Say it freely", "Eaten daily and regionally distinct - paisa arepas and coastal arepas are different foods."],
  ["ajiaco", "chicken and potato soup", "neutral", "Bogotá (rolo/cachaco)", "Say it freely", "Bogotá's signature dish, with three potato varieties and guascas."],
  ["bandeja paisa", "the large Antioquian platter", "neutral", "Medellín / Antioquia (paisa)", "Say it freely", "Beans, rice, chicharrón, egg, plantain, arepa. Ordering it is a commitment."],
  ["prendido / prendida", "tipsy", "casual", "Nationwide", "Say it freely", "Pleasantly drunk, not wrecked."],
  ["jincho / jincha", "very drunk", "very casual", "Nationwide", "Say it with friends", "Well past 'prendido'. Blunt but not obscene."],
  ["guayabo", "hangover", "casual", "Nationwide", "Say it freely", "'Tengo guayabo' - I'm hungover. Nothing to do with the fruit tree."],
  ["provocar", "to feel like (something)", "neutral", "Nationwide", "Say it freely", "'¿Le provoca un tinto?' - do you fancy a coffee? Distinctly Colombian usage."],

  /* Going out, plans, relationships. */
  ["parche", "hangout, plan, crew", "casual", "Nationwide", "Say it freely", "Both the plan and the people. '¿Cuál es el parche?' - what's happening?"],
  ["parchar", "to hang out", "casual", "Nationwide", "Say it freely", "Deliberately unstructured. Parchar has no agenda."],
  ["rumba", "party, night out", "casual", "Nationwide", "Say it freely", "Both the event and the activity."],
  ["rumbear", "to party; also to make out", "casual", "Nationwide", "Say it freely", "Both senses are current; context is usually unambiguous."],
  ["tomar", "to drink (alcohol)", "neutral", "Nationwide", "Say it freely", "'Vamos a tomar' means drinking, not just any beverage."],
  ["farra", "a night out", "casual", "Nationwide; slightly dated", "Say it freely", "Older-sounding synonym for rumba."],
  ["echar los perros", "to flirt with, chase someone", "casual", "Nationwide", "Say it with friends", "Literally 'to throw the dogs'. Teasing, not crude."],
  ["caer", "to hit on someone", "casual", "Nationwide", "Say it with friends", "'Le está cayendo' - he's making a move on her."],
  ["tragado / tragada", "smitten, badly in love", "casual", "Nationwide", "Say it freely", "Literally 'swallowed'. Affectionately mocking."],
  ["cuadrar", "to arrange; to start dating", "casual", "Nationwide", "Say it freely", "'Cuadrar la hora' arranges a time; 'cuadrarse con alguien' means becoming a couple."],
  ["dar calabazas", "to turn someone down", "casual", "Nationwide", "Say it freely", "Rejection, said with humor."],
  ["moza / mozo", "lover on the side", "very casual", "Nationwide", "Understand only", "Accusatory. Recognize it in gossip; do not deploy it."],
  ["amañado / amañada", "settled in and happy somewhere", "casual", "Nationwide", "Say it freely", "A genuinely useful word English lacks. '¿Está amañado en Medellín?'"],
  ["chocho / chocha", "delighted, chuffed", "casual", "Nationwide", "Say it freely", "'Está chocha con el trabajo nuevo' - she's thrilled with the new job."],
  ["berrinche", "a tantrum", "casual", "Nationwide", "Say it freely", "Usually a child's, occasionally an adult's."],
  ["caer bien / caer mal", "to be likeable / off-putting", "neutral", "Nationwide", "Say it freely", "'Me cae bien' - I like them. Standard but easy to misparse as physical falling."],

  /* Transport and the city. */
  ["trancón", "traffic jam", "casual", "Nationwide", "Say it freely", "Daily reality in Bogotá and Medellín."],
  ["buseta", "small city bus", "casual", "Nationwide", "Say it freely", "Older, smaller and faster than the big transit buses."],
  ["chiva", "colorful rural bus", "neutral", "Rural nationwide; also party buses in cities", "Say it freely", "A cultural icon as much as a vehicle."],
  ["pico y placa", "license-plate driving restriction", "neutral", "Bogotá, Medellín, Cali and others", "Say it freely", "Which days you may drive, by plate number. Affects daily plans."],
  ["¡Dele!", "Go on, drive on", "casual", "Nationwide", "Say it freely", "Said to a driver, and generally as 'go ahead'."],
  ["chuzo", "small hole-in-the-wall shop or eatery", "casual", "Nationwide", "Say it freely", "Cheap and unglamorous, sometimes affectionately so."],
  ["tienda", "corner shop", "neutral", "Nationwide", "Say it freely", "The neighborhood social hub as much as a shop."],
  ["barrio", "neighborhood", "neutral", "Nationwide", "Say it freely", "Neutral in Colombia, unlike some English uses."],
  ["estrato", "socioeconomic tier (1-6)", "neutral", "Nationwide", "Say it freely", "An official utility-pricing band that became everyday shorthand for class. Sensitive; use descriptively."],

  /* Time, and Colombian vagueness about it. */
  ["ahorita", "in a bit; just now; maybe never", "casual", "Nationwide", "Say it freely", "The diminutive makes it vaguer, not sooner. Ask '¿ahorita cuándo?' if it matters."],
  ["ya mismo", "right now", "casual", "Nationwide", "Say it freely", "The genuinely immediate one."],
  ["al ratico", "in a little while", "casual", "Nationwide", "Say it freely", "Softer than 'ahorita' and usually more honest."],
  ["de una vez", "while we're at it; in one go", "casual", "Nationwide", "Say it freely", "Distinct from 'de una', which means yes."],
  ["hace rato", "a good while ago", "casual", "Nationwide", "Say it freely", "'Llegué hace rato' - I got here ages ago."],
  ["tempranito", "nice and early", "casual", "Nationwide", "Say it freely", "The diminutive adds warmth, not precision - a very Colombian habit."],
  ["a las malas", "the hard way", "casual", "Nationwide", "Say it freely", "Opposite of 'a las buenas', the easy way."],

  /* Discourse particles - the glue that makes speech sound local. */
  ["pues", "well; you know (sentence filler)", "casual", "Medellín / Antioquia (paisa)", "Say it freely", "Paisa speech runs on it, often at the end: 'venga pues', 'sí pues'. Overusing it as a foreigner reads as parody."],
  ["o sea", "I mean, that is", "casual", "Nationwide", "Say it freely", "Reformulates what you just said. Useful when you need a second attempt."],
  ["¿cierto?", "right?", "casual", "Nationwide", "Say it freely", "The standard tag question. Safe in every register."],
  ["¿me entiende?", "you know what I mean?", "casual", "Nationwide", "Say it freely", "Checks you are still together. Not a challenge."],
  ["vea / vé", "look, listen", "casual", "Nationwide", "Say it freely", "Opens a point or flags surprise: 'vea pues'."],
  ["venga", "come here; hang on; listen", "casual", "Nationwide", "Say it freely", "Rarely literal. 'Venga le cuento' - let me tell you something."],
  ["o qué", "or what", "casual", "Nationwide", "Say it freely", "Tags onto questions for informality: '¿vamos o qué?'"],
  ["nada que ver", "nothing to do with it; no way", "casual", "Nationwide", "Say it freely", "Rejects a comparison or an idea outright."],
  ["qué pena", "how embarrassing; excuse me; sorry", "neutral", "Nationwide", "Say it freely", "Colombia's all-purpose apology, used far more than 'lo siento'. 'Qué pena con usted' softens any imposition."],
  ["a la final", "in the end", "casual", "Nationwide", "Say it freely", "Colombian variant of 'al final'. Very common in speech."],
  ["de malas", "out of luck; tough", "casual", "Nationwide", "Say it with friends", "Unsympathetic. 'Quedó de malas' - too bad for them."],
  ["ni riesgos", "no chance", "casual", "Nationwide", "Say it freely", "Emphatic refusal, playful in tone."],
  ["¡qué va!", "no way! / come off it!", "casual", "Nationwide", "Say it freely", "Dismisses what was just said, usually good-naturedly."],
  ["así de sencillo", "simple as that", "casual", "Nationwide", "Say it freely", "Closes an argument."],

  /* Warnings, caution, conflict avoidance. */
  ["¡Ojo!", "Watch out! / Careful!", "casual", "Nationwide", "Say it freely", "Literally 'eye'. The most common spoken warning in the country."],
  ["¡Pilas!", "Heads up! / Stay sharp!", "casual", "Nationwide", "Say it freely", "Interchangeable with '¡ojo!' and slightly more energetic."],
  ["sapo / sapa", "snitch, tattletale", "very casual", "Nationwide", "Understand only", "A serious accusation in some contexts. Recognize it and do not use it."],
  ["cámara", "careful, watch it", "casual", "Nationwide", "Say it with friends", "Quiet warning between friends."],
  ["hacerse el loco", "to play dumb", "casual", "Nationwide", "Say it freely", "Deliberately not noticing something inconvenient."],
  ["comer cuento", "to fall for a story", "casual", "Nationwide", "Say it freely", "'No coma cuento' - don't be taken in."],
  ["echar el agua", "to give someone away", "casual", "Nationwide", "Say it with friends", "Revealing what someone was hiding."],
  ["meter la pata", "to put your foot in it", "casual", "Nationwide", "Say it freely", "Saying the wrong thing. Universal Spanish, constant in Colombia."],
  ["tirarse algo", "to ruin something", "casual", "Nationwide", "Say it with friends", "'Se tiró el proyecto' - he wrecked the project."],
  ["poner la queja", "to make a complaint; to tell on someone", "neutral", "Nationwide", "Say it freely", "Formal complaints and playground telling-on alike."],
  ["montarla / montársela a alguien", "to give someone a hard time", "casual", "Nationwide", "Say it with friends", "Persistent teasing or bullying, depending on severity."],
  ["parar bolas", "to pay attention", "casual", "Nationwide", "Say it with friends", "'No me para bolas' - she ignores me. Mildly crude root; fine among friends."]
];
