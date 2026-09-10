/*
 * Lesson block: developing / deals and demands.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Every lesson spines on exactly one verb from data/curriculum.js, named in its
 * `verb` field so the coverage report can prove the curriculum is actually
 * taught rather than merely listed. test/shape.test.js checks that the verb
 * exists and that no two lessons claim the same one.
 *
 * The three verbs here — acordar, cumplir and exigir — cover arrangements,
 * keeping your word and warranted insistence. The two directions are mirrors:
 * same number of dialogue turns, vocabulary entries, culture notes, pitfalls,
 * variations and practice questions, and the same optional slots filled on the
 * same rows. That is enforced by test/shape.test.js, not by good intentions.
 */
const dl53Dialogue = (speaker, target, translation, pronunciation, literal, why) => ({
  speaker, target, translation, pronunciation, literal, why
});
const dl53Vocab = (term, explanation, literal, useWhen, avoidWhen, register, region, related, target, translation) => ({
  term, explanation, literal, useWhen, avoidWhen, register, region, related, example: { target, translation }
});
const dl53Culture = (label, body) => ({ label, body });
const dl53Pitfall = (mistake, whyItFails, sayInstead) => ({ mistake, whyItFails, sayInstead });
const dl53Variation = (form, register, region, whenToUse) => ({ form, register, region, whenToUse });
const dl53Question = (prompt, choices, answer, tests) => tests ? { prompt, choices, answer, tests } : { prompt, choices, answer };

lessons.push(
  {
    id: "agreeing-repairs-in-ibague",
    level: "Developing · Settling arrangements",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["year-12-local-mastery"],
    verb: "acordar",
    review: "pending",
    es: {
      title: "Acordar el arreglo en Ibagué",
      situation:
        "Estás en Ibagué hablando con un maestro de obra sobre una gotera. Acordar precio y fecha no es lo mismo que estar de acuerdo con una opinión, y acordarse de algo cambia el verbo por completo.",
      setting: {
        who: "Daniel rents a small apartment, and don Rubén is the tradesperson who has come to look at a roof leak.",
        what: "They settle a price, a date, materials, and how to confirm the agreement without confusing agreement with memory.",
        when: "A dry Tuesday morning after several rainy days made the leak impossible to ignore.",
        where: "Ibagué, in a residential neighborhood, using plain Colombian Spanish in a city not overused by the course.",
        why: "Because acordar means to arrange or agree on something, while acordarse de means to remember. English agree also hides the split between arrangements and opinions."
      },
      address: {
        form: "usted",
        who: "Daniel and don Rubén use usted because this is a first practical negotiation between client and tradesperson.",
        why: "Usted keeps the price conversation respectful without making it distant. The work is ordinary, but money and dates need clarity.",
        ifYouSwitch:
          "Tú would sound too familiar for a first repair visit. Vos would distract from the general Colombian register and the practical focus of the lesson."
      },
      dialogue: [
        dl53Dialogue("Daniel", "Don Rubén, ¿acordamos el arreglo para el viernes?", "Don Rubén, shall we agree on the repair for Friday?", "don rroo-BEN, ah-kor-DAH-mos el ah-RREH-gloh PAH-rah el BYER-nes", "Don Rubén, we-agree the repair for the Friday?", "Acordar here means to settle an arrangement. It is not about sharing an opinion; it is about fixing a plan that both people can later point to."),
        dl53Dialogue("Don Rubén", "Sí, pero acordemos también el precio antes de comprar materiales.", "Yes, but let's agree on the price too before buying materials.", "see, PEH-roh ah-kor-DEH-mos tam-BYEN el PREH-syoh AN-tes deh kom-PRAR mah-teh-RYAH-les", "Yes, but let-us-agree also the price before buying materials.", "Acordemos shows the o to ue pattern does not appear in every form. The stress is on the ending, so the stem stays acord-."),
        dl53Dialogue("Daniel", "Entonces yo acuerdo con usted: viernes, ocho de la mañana, y pago la mitad.", "Then I agree with you: Friday, eight in the morning, and I pay half.", "en-TON-ses yo ah-KWER-doh kon oos-TED: BYER-nes, OH-choh deh lah mah-NYAH-nah, ee PAH-goh lah mee-TAD", "Then I agree with you: Friday, eight of the morning, and I pay the half.", "Yo acuerdo shows the stem change: acordar becomes acuerdo when the stem is stressed. The content is still an arrangement, not a memory."),
        dl53Dialogue("Don Rubén", "Perfecto. Y yo me acuerdo de traer la escalera grande.", "Perfect. And I'll remember to bring the big ladder.", "per-FEK-toh. ee yo meh ah-KWER-doh deh trah-ER lah es-kah-LEH-rah GRAN-deh", "Perfect. And I myself remember of bring the ladder big.", "Me acuerdo de is the trap. Add the pronoun and de, and the meaning becomes remember, close to recordar but more conversational."),
        dl53Dialogue("Daniel", "Una cosa es acordar la fecha; otra es acordarse de la escalera.", "One thing is agreeing on the date; another is remembering the ladder.", "OO-nah KOH-sah es ah-kor-DAR lah FEH-chah; OH-trah es ah-kor-DAR-seh deh lah es-kah-LEH-rah", "One thing is to-agree the date; another is to-remember of the ladder.", "This sentence makes the split explicit. The pronominal acordarse de changes the job of the verb entirely."),
        dl53Dialogue("Don Rubén", "Y si después no está de acuerdo con el color, lo hablamos antes de pintar.", "And if later you don't agree with the color, we'll talk before painting.", "ee see des-PWES noh es-TAH deh ah-KWER-doh kon el koh-LOR, loh ah-BLAH-mos AN-tes deh peen-TAR", "And if later you are-not of agreement with the color, it we-talk before painting.", "Estar de acuerdo is agreement with an opinion or preference. Acordar sets the plan; estar de acuerdo says the view or choice suits you.")
      ],
      vocabulary: [
        dl53Vocab("acordar", "To agree on, arrange, or settle a plan, price, date, condition, or procedure.", "to agree / arrange", "Use it when people establish a shared arrangement they can later follow.", "Avoid it for simply sharing an opinion. That is usually estar de acuerdo, not acordar.", "neutral", "General Spanish.", ["convenir", "pactar", "definir", "arreglar"], "Acordamos el arreglo para el viernes.", "We agreed on the repair for Friday."),
        dl53Vocab("acuerdo", "The yo present of acordar: I agree or I arrange. The o changes to ue under stress.", "I agree / arrange", "Use it when you personally agree on a practical point with someone.", "Avoid confusing it with el acuerdo, the noun agreement. Context and grammar show the difference.", "neutral", "General Spanish stem change.", ["acuerda", "acordamos", "acordé", "acordar"], "Yo acuerdo con usted.", "I agree with you."),
        dl53Vocab("acordamos", "We agreed or we agree. In this form the stem does not change because the stress is on the ending.", "we agree / arranged", "Use it to confirm the shared plan: date, place, price, or next step.", "Avoid hearing every acordamos as past tense; context decides present or preterite in this form.", "neutral", "General Spanish.", ["quedamos", "definimos", "pactamos", "concretamos"], "Acordamos viernes a las ocho.", "We agreed on Friday at eight."),
        dl53Vocab("acordarse de", "To remember. The pronoun and de change acordar from arranging to remembering.", "to remember oneself of", "Use it when someone remembers a birthday, tool, date, name, or task.", "Avoid dropping de before the remembered thing. Me acordé tu cumpleaños sounds incomplete.", "neutral conversational", "General Spanish; recordar is also common and already taught elsewhere.", ["recordar", "tener presente", "no olvidar", "hacer memoria"], "Me acuerdo de traer la escalera.", "I remember to bring the ladder."),
        dl53Vocab("estar de acuerdo", "To agree with an opinion, preference, diagnosis, or proposal. It is not the same construction as acordar.", "to be in agreement", "Use it when the point is whether someone's view matches another view.", "Avoid using it when people are setting a date or price. Acordar is cleaner for arrangements.", "neutral", "General Spanish.", ["coincidir", "pensar igual", "aprobar", "aceptar"], "No estoy de acuerdo con el color.", "I don't agree with the color."),
        dl53Vocab("el acuerdo", "An agreement, deal, or understanding. This is the noun, not the verb form.", "the agreement", "Use it for the settled terms themselves, especially when several details matter.", "Avoid relying on a vague acuerdo if money is involved; name price, date, and materials.", "neutral", "General Spanish.", ["trato", "arreglo", "pacto", "condiciones"], "Ese es el acuerdo.", "That is the agreement."),
        dl53Vocab("quedar en algo", "To settle on something, often conversationally. It is a natural partner to acordar.", "to remain in something", "Use it for where the plan landed: quedamos en viernes, quedamos en ese precio.", "Avoid it for formal contracts where acordar or pactar may sound clearer.", "neutral conversational", "Very common Colombian Spanish.", ["acordar", "definir", "convenir", "cerrar"], "Quedamos en viernes a las ocho.", "We settled on Friday at eight.")
      ],
      note:
        "Acordar has two traps. First, it stem-changes when stressed: yo acuerdo, usted acuerda, but acordamos. Second, acordarse de is not arranging at all; it means remembering. English agree also blurs things: acordar a price or date, but estar de acuerdo with an opinion.",
      culture: [
        dl53Culture("A repair agreement needs specifics", "In Colombian Spanish, a practical acuerdo is stronger when it names price, date, time and materials. A vague sí, hágale can be friendly, but it may not protect either side when expectations differ."),
        dl53Culture("Usted keeps money calm", "Negotiating with a tradesperson does not have to sound cold, but usted helps keep the exchange respectful. Warmth can come through tone while the terms stay clear."),
        dl53Culture("Remembering is a different construction", "Me acordé de and recordé can both mean I remembered, but acordarse de is very common in speech. The tiny de is part of the pattern learners often drop."),
        dl53Culture("Ibagué without decoration", "The lesson places an everyday repair in Ibagué because useful Colombian Spanish happens outside famous settings too. No invented local slang is needed.")
      ],
      pitfalls: [
        dl53Pitfall("Confusing acordar with acordarse de", "Acordamos vernos means we agreed to meet. Me acordé de tu cumpleaños means I remembered your birthday. The pronoun and de change the meaning entirely.", "Acordamos vernos el viernes; me acordé de tu cumpleaños."),
        dl53Pitfall("Using acordar for every English agree", "English agree covers both arrangements and opinions. Spanish usually separates them: acordar sets terms, estar de acuerdo shares a view.", "Acordamos el precio, pero no estoy de acuerdo con el color."),
        dl53Pitfall("Forgetting the stem change", "Acordar changes o to ue when stressed: yo acuerdo, usted acuerda. Acordo and acorda sound like learner forms.", "Yo acuerdo la fecha; usted acuerda el precio."),
        dl53Pitfall("Dropping de after acordarse", "When it means remember, acordarse normally needs de before the thing remembered. Without it, the sentence sounds unfinished or regional in a way learners should not copy.", "Me acordé de la escalera.")
      ],
      variations: [
        dl53Variation("Acordamos vernos el viernes.", "neutral", "General Spanish", "You settled the meeting date together."),
        dl53Variation("Yo acuerdo el precio con usted.", "practical polite", "General Spanish", "You personally agree on a price with someone."),
        dl53Variation("Me acordé de tu cumpleaños.", "warm conversational", "General Spanish", "You remembered someone's birthday."),
        dl53Variation("No estoy de acuerdo con ese color.", "neutral", "General Spanish", "You disagree with an opinion or preference."),
        dl53Variation("Quedamos en viernes a las ocho.", "neutral conversational", "General Colombian", "The arrangement has landed on a date and time."),
        {
          form: "Quedamos en que el arreglo se hace el viernes.",
          register: "courteous",
          region: "General Colombian",
          whenToUse: "Closing a deal on a date. Quedar en is what Colombians say where a textbook would say acordar."
        }
      ],
      prompt: "Daniel says “acordamos el arreglo” but Don Rubén says “me acuerdo de traer la escalera.” What changed?",
      choices: [
        "The first settles an arrangement; the second means remembering.",
        "The first shares an opinion; the second demands a complaint book.",
        "The first celebrates a birthday; the second breaks a promise."
      ],
      answer: 0,
      practiceExtra: [
        dl53Question("Which sentence means “we agreed to meet on Friday”?", ["Acordamos vernos el viernes.", "Me acordé de vernos el viernes.", "Estamos años el viernes."], 0, "acordar as arranging a plan"),
        dl53Question("Which sentence means “I remembered your birthday”?", ["Acordé tu cumpleaños contigo.", "Me acordé de tu cumpleaños.", "Estoy de acuerdo tu cumpleaños."], 1, "acordarse de as remembering"),
        dl53Question("Which line is about agreeing with an opinion?", ["Acordamos el precio final.", "Cumplimos con el horario.", "Estoy de acuerdo con usted."], 2, "estar de acuerdo for opinions"),
        dl53Question("Which present-tense form shows the stem change?", ["Yo acordo la fecha.", "Yo acuerdo la fecha.", "Yo acordamos la fecha."], 1, "acuerdo as o to ue stem change")
      ]
    },
    en: {
      title: "Acordar una reparación en Boston",
      situation:
        "Usted está en Boston acordando una reparación con un contratista. En inglés debe separar agree on, agree with, arrange y remember, porque el español acordar y acordarse de no se comportan igual.",
      setting: {
        who: "Daniel alquila un apartamento pequeño y Ruben es el contratista que revisó una gotera.",
        what: "Fijan precio, fecha, materiales y la diferencia entre llegar a un acuerdo y recordar una herramienta.",
        when: "Un martes por la mañana, después de varios días de lluvia que hicieron imposible ignorar la gotera.",
        where: "Boston, en un edificio residencial, porque esta dirección enseña inglés en un contexto fuera de Colombia.",
        why: "Porque agree en inglés también se divide: agree on para arreglos, agree with para opiniones, arrange para organizar y remember para acordarse de algo."
      },
      address: {
        form: "mixed",
        who: "Daniel y Ruben tienen una relación de cliente y contratista; el inglés usa you, pero el tono se mantiene profesional.",
        why: "La cortesía vive en frases completas, clear terms y please cuando hace falta, no en un pronombre distinto.",
        ifYouSwitch:
          "Usar sir en cada frase sonaría rígido. Para sonar profesional, el inglés nombra precio, fecha y condiciones claramente."
      },
      dialogue: [
        dl53Dialogue("Daniel", "Ruben, did we agree on Friday for the repair?", "Rubén, ¿acordamos el arreglo para el viernes?", "RU-ben, did ui a-GRI on FRAI-dei for da ri-PEIR", "Rubén, ¿estuvimos de acuerdo en viernes para la reparación?", "“Agree on” es la frase para acordar una fecha o condición. No habla de una opinión; habla del punto que quedó fijado."),
        dl53Dialogue("Ruben", "Yes, but let's agree on the price before I buy materials.", "Sí, pero acordemos también el precio antes de comprar materiales.", "yes, bat lets a-GRI on da prais bi-FOR ai bai ma-TIR-i-alz", "Sí, pero pongámonos de acuerdo en el precio antes de comprar materiales.", "El precio también toma “agree on”. En inglés, on apunta al tema o término que las dos partes están fijando."),
        dl53Dialogue("Daniel", "Then I agree with you: Friday, eight in the morning, and I pay half.", "Entonces estoy de acuerdo con usted: viernes, ocho de la mañana, y pago la mitad.", "den ai a-GRI uid yu: FRAI-dei, eit in da MOR-ning, and ai pei jaf", "Entonces estoy de acuerdo con usted: viernes, ocho de la mañana, y pago la mitad.", "“Agree with you” se centra en coincidir con la persona. Para el arreglo específico, “agree on Friday” sigue siendo más preciso."),
        dl53Dialogue("Ruben", "Perfect. And I'll remember to bring the big ladder.", "Perfecto. Y me acuerdo de traer la escalera grande.", "PER-fekt. and ail ri-MEM-ber tu bring da big LA-der", "Perfecto. Y recordaré traer la escalera grande.", "“Remember” traduce acordarse de. No use “agree” aquí; nadie está llegando a un acuerdo con la escalera."),
        dl53Dialogue("Daniel", "One thing is agreeing on the date; another is remembering the ladder.", "Una cosa es acordar la fecha; otra es acordarse de la escalera.", "uan thing iz a-GRI-ing on da deit; a-NO-der iz ri-MEM-ber-ing da LA-der", "Una cosa es estar de acuerdo en la fecha; otra es recordar la escalera.", "La frase separa los campos: “agree on” para términos compartidos, “remember” para memoria. El español cambia con se y de."),
        dl53Dialogue("Ruben", "And if you don't agree with the color later, we'll talk before painting.", "Y si después no está de acuerdo con el color, hablamos antes de pintar.", "and if yu dont a-GRI uid da KO-lor LEI-ter, uil tok bi-FOR PEIN-ting", "Y si usted no está de acuerdo con el color después, hablaremos antes de pintar.", "“Agree with” funciona para una opinión o preferencia. El color no es un contrato todavía; es algo que puede gustarle o no.")
      ],
      vocabulary: [
        dl53Vocab("agree on", "Acordar un punto concreto: precio, fecha, hora, regla o condición.", "estar de acuerdo en", "Úselo cuando varias personas fijan el tema o término compartido.", "Evítelo para memoria. Acordarse de algo es remember, no agree on.", "neutral", "Inglés universal.", ["settle on", "decide on", "arrange", "set"], "We agreed on Friday.", "Acordamos el viernes."),
        dl53Vocab("agree with", "Estar de acuerdo con una persona, idea, opinión o preferencia.", "estar de acuerdo con", "Úselo cuando su postura coincide con la de alguien o algo.", "Evítelo para fijar una cita si el punto central es el arreglo. Agree on is clearer.", "neutral", "Inglés universal.", ["share the view", "support", "accept", "concur"], "I agree with you.", "Estoy de acuerdo con usted."),
        dl53Vocab("arrange", "Organizar o acordar detalles prácticos de una cita, reparación o plan.", "arreglar / organizar", "Úselo cuando la logística importa más que la idea de coincidir.", "Evítelo si sólo expresa opinión. Arrange with your color no tiene sentido.", "neutral", "Inglés universal.", ["set up", "schedule", "organize", "coordinate"], "We arranged the repair for Friday.", "Acordamos el arreglo para el viernes."),
        dl53Vocab("remember", "Recordar o acordarse de algo. Traduce la memoria, no el acuerdo.", "recordar", "Úselo para cumpleaños, herramientas, nombres, tareas o instrucciones que no quiere olvidar.", "Evítelo para acuerdos de precio o fecha. Remember a price can mean recordarlo, not agree it.", "neutral", "Inglés universal.", ["recall", "not forget", "keep in mind", "think of"], "I remembered your birthday.", "Me acordé de tu cumpleaños."),
        dl53Vocab("agreement", "Acuerdo como sustantivo: los términos o el entendimiento compartido.", "acuerdo", "Úselo para resumir lo pactado o hablar de un trato completo.", "Evítelo si todavía sólo están conversando sin cerrar nada.", "neutral", "Inglés universal.", ["deal", "arrangement", "understanding", "terms"], "That is the agreement.", "Ese es el acuerdo."),
        dl53Vocab("settle on", "Quedar en algo o decidirse por una opción después de revisar posibilidades.", "quedar en", "Úselo para fecha, lugar, precio u opción final.", "Evítelo si hubo un contrato formal con mucho detalle; agreement puede sonar más completo.", "neutral conversational", "Inglés universal.", ["agree on", "choose", "land on", "decide on"], "We settled on Friday at eight.", "Quedamos en viernes a las ocho."),
        dl53Vocab("terms", "Condiciones o puntos de un acuerdo: precio, fecha, pago, alcance y materiales.", "términos", "Úselo cuando quiere que el arreglo quede claro y no dependa de memoria.", "Evítelo para una opinión sencilla, donde terms suena demasiado contractual.", "neutral practical", "Inglés universal.", ["conditions", "details", "price", "schedule"], "Let's confirm the terms.", "Confirmemos las condiciones.")
      ],
      note:
        "El inglés no traduce acordar con un solo verbo. “Agree on” fija términos; “agree with” coincide con una persona u opinión; “arrange” organiza detalles; “remember” traduce acordarse de. Si usted dice “I agreed your birthday”, el oyente no llega a la idea de me acordé de tu cumpleaños.",
      culture: [
        dl53Culture("Agree on names the point", "“We agreed on Friday” nombra el punto acordado. La preposición on ayuda a separar el arreglo concreto de la persona con quien uno coincide."),
        dl53Culture("Agree with names the person or opinion", "“I agree with you” se parece a estoy de acuerdo con usted. Es útil para ideas, colores y preferencias, pero no reemplaza siempre a acordar."),
        dl53Culture("Remember is not agree", "Acordarse de algo cambia al campo de la memoria. En inglés no hay trampa paralela: simplemente use remember."),
        dl53Culture("Contractors need clear terms", "En inglés, como en español, confirmar date, price, materials y payment evita malentendidos. La cortesía no reemplaza los detalles.")
      ],
      pitfalls: [
        dl53Pitfall("“I agreed your birthday.”", "Es un calco imposible de me acordé de tu cumpleaños. Para memoria, el inglés usa remember.", "I remembered your birthday."),
        dl53Pitfall("“We agreed with Friday.”", "With apunta a una persona u opinión. Para una fecha o condición, la preposición natural es on.", "We agreed on Friday."),
        dl53Pitfall("“I agree on you.”", "On nombra el tema acordado, no la persona. Si coincide con alguien, diga agree with.", "I agree with you."),
        dl53Pitfall("“We remembered the repair for Friday” cuando habla del arreglo", "Remember sólo dice que lo recordaron. No comunica que fijaron fecha y términos.", "We arranged the repair for Friday.")
      ],
      variations: [
        dl53Variation("We agreed on Friday.", "neutral", "Inglés universal", "Fijaron una fecha."),
        dl53Variation("I agree with you.", "neutral", "Inglés universal", "Coincide con una persona u opinión."),
        dl53Variation("We arranged the repair for Friday.", "practical", "Inglés universal", "Organizaron la reparación."),
        dl53Variation("I remembered your birthday.", "warm conversational", "Inglés universal", "Se acordó del cumpleaños."),
        dl53Variation("Let's confirm the terms.", "practical polite", "Inglés universal", "Quieren dejar claro precio, fecha y condiciones."),
        {
          form: "We're having the tiles replaced, and the leak was repaired on Monday.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para resumir un acuerdo de obra. “Having the tiles replaced” es trabajo encargado; “was repaired” es trabajo ya hecho."
        }
      ],
      prompt: "Daniel says “we agreed on Friday” but Ruben says “I'll remember the ladder.” ¿Qué cambia?",
      choices: [
        "La primera frase fija un arreglo; la segunda habla de memoria.",
        "La primera exige un derecho; la segunda celebra un cumpleaños.",
        "La primera rechaza una opinión; la segunda pide una queja formal."
      ],
      answer: 0,
      practiceExtra: [
        dl53Question("¿Cuál frase fija una fecha acordada?", ["We agreed on Friday.", "We agreed with Friday.", "We remembered with Friday."], 0, "agree on for arranged terms"),
        dl53Question("¿Cuál frase traduce me acordé de tu cumpleaños?", ["I agreed your birthday.", "I remembered your birthday.", "I arranged your birthday."], 1, "remember for acordarse de"),
        dl53Question("¿Cuál frase coincide con una opinión o persona?", ["I settle on you.", "I arrange with you.", "I agree with you."], 2, "agree with for opinion or person"),
        dl53Question("¿Cuál frase organiza una reparación?", ["We arranged the repair.", "We fulfilled the repair.", "We demanded the repair."], 0, "arrange as practical acordar")
      ]
    }
  },
  {
    id: "turning-thirty-in-monteria",
    level: "Developing · Keeping promises",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "familiar",
    pathways: ["year-12-local-mastery"],
    verb: "cumplir",
    review: "pending",
    es: {
      title: "Cumplir treinta en Montería",
      situation:
        "Estás en Montería organizando un cumpleaños sencillo. Cumplir años es el uso más cotidiano, pero también necesitas cumplir con una hora, cumplir una promesa y no vender como promesa lo que sólo es una intención.",
      setting: {
        who: "Paola is turning thirty, and her cousin Iván is helping coordinate a small family gathering.",
        what: "They talk about age, arrival time, a cake promise, and the difference between celebrating and keeping a commitment.",
        when: "Saturday afternoon, a few hours before relatives arrive and the heat slows everyone down.",
        where: "Montería, at a family patio before a birthday meal, with general Colombian Spanish and no invented local coloring.",
        why: "Because cumplir años is far more useful than the contractual sense for daily life, but cumplir con and cumplir una promesa are also essential."
      },
      address: {
        form: "tú",
        who: "Paola and Iván are cousins close enough to joke, so tú fits the family birthday setting.",
        why: "The warmth of cumpleaños needs a close address form. The serious part comes later when promises and timing enter.",
        ifYouSwitch:
          "Usted could be affectionate in some families, but here it would make the cousins sound less close. Vos would not be the plain choice for this scene."
      },
      dialogue: [
        dl53Dialogue("Iván", "¿Entonces hoy cumples treinta o todavía dices veintinueve?", "So today you turn thirty, or are you still saying twenty-nine?", "en-TON-ses oy KOOM-ples TREIN-tah oh toh-dah-BEE-ah DEE-ses bein-tee-NWEH-beh", "So today you fulfill thirty or still you-say twenty-nine?", "Cumplir plus a number is the everyday way to say turn an age. This is the high-value use: hoy cumplo treinta."),
        dl53Dialogue("Paola", "Hoy cumplo treinta, y no pienso esconderlo.", "Today I turn thirty, and I'm not planning to hide it.", "oy KOOM-ploh TREIN-tah, ee noh PYEN-soh es-kon-DER-loh", "Today I fulfill thirty, and not I-plan to-hide-it.", "The age is the object: cumplo treinta. Spanish does not need años every time once the birthday context is clear."),
        dl53Dialogue("Iván", "Bueno, pero cumple con la hora; mi mamá llega puntual.", "Fine, but keep to the time; my mom arrives on time.", "BWEH-noh, PEH-roh KOOM-pleh kon lah OH-rah; mee mah-MAH YEH-gah poon-TWAL", "Good, but fulfill with the hour; my mother arrives punctual.", "Cumplir con moves from birthday to duty or requirement. The con marks the obligation: time, rule, deadline, or responsibility."),
        dl53Dialogue("Paola", "Cumplo con la hora si tú cumples la promesa de traer la torta.", "I'll keep to the time if you keep the promise to bring the cake.", "KOOM-ploh kon lah OH-rah see too KOOM-ples lah proh-MEH-sah deh trah-ER lah TOR-tah", "I fulfill with the hour if you fulfill the promise of bring the cake.", "Cumplir una promesa is to keep a promise. It pairs naturally with prometer, but the focus is now on follow-through."),
        dl53Dialogue("Iván", "La cumplo. Ya la encargué y la recojo a las cinco.", "I'll keep it. I already ordered it and I'll pick it up at five.", "lah KOOM-ploh. yah lah en-kar-GEH ee lah rreh-KOH-hoh ah las SEEN-koh", "It I-fulfill. Already it I-ordered and it I-pick-up at the five.", "La cumplo refers back to the promise. The details make the commitment believable: the cake is ordered and the pickup time is clear."),
        dl53Dialogue("Paola", "Así sí. Cumplir años es fácil; cumplir lo que uno dice cuesta más.", "That's better. Having a birthday is easy; keeping what one says costs more.", "ah-SEE see. koom-PLEER AH-nyos es FAH-seel; koom-PLEER loh keh OO-noh DEE-seh KWES-tah mas", "Like-that yes. Fulfilling years is easy; fulfilling what one says costs more.", "The line ties the two meanings together: birthdays happen, but promises require action. Cumplir shifts with the noun beside it.")
      ],
      vocabulary: [
        dl53Vocab("cumplir años", "To have a birthday or turn an age. This is the most useful everyday meaning of cumplir.", "to fulfill years", "Use it for birthdays, ages, and asking when someone's birthday is.", "Avoid translating it as complete years in English. The idiom is turn or have a birthday.", "neutral warm", "General Spanish and extremely common in Colombia.", ["cumpleaños", "cumplir treinta", "tener años", "celebrar"], "Hoy cumplo treinta.", "Today I turn thirty."),
        dl53Vocab("¿cuándo cumple años?", "When is your birthday?, in usted. A normal polite question about birthdays.", "when do you fulfill years?", "Use it with someone you address as usted, such as an elder, client, or new acquaintance.", "Avoid mixing forms. With tú, ask ¿cuándo cumples años?", "polite neutral", "General Spanish.", ["¿cuándo cumples?", "fecha de cumpleaños", "qué día cumple", "cumpleaños"], "¿Cuándo cumple años?", "When is your birthday?"),
        dl53Vocab("cumplo treinta", "I turn thirty. The number can stand alone when birthday or age is already clear.", "I fulfill thirty", "Use it to say the age reached today or this year.", "Avoid adding años every time if the context already makes age obvious; it can sound repetitive.", "neutral", "General Spanish.", ["cumplir años", "tengo treinta", "llego a treinta", "treinta años"], "Hoy cumplo treinta.", "Today I turn thirty."),
        dl53Vocab("cumplir con", "To comply with or fulfill a duty, time, rule, deadline, or responsibility.", "to fulfill with", "Use it when the obligation is introduced by con: cumplir con la hora, con el contrato, con la tarea.", "Avoid it for birthdays. You cumple años, not cumple con años.", "neutral", "General Spanish.", ["respetar", "atender", "acatar", "hacer caso"], "Cumple con la hora.", "Keep to the time."),
        dl53Vocab("cumplir una promesa", "To keep or fulfill a promise. It focuses on doing what was promised.", "to fulfill a promise", "Use it after someone has given their word and now has to follow through.", "Avoid using prometer again when the issue is action. Prometer gives the word; cumplir keeps it.", "neutral serious", "General Spanish.", ["cumplir la palabra", "mantener la palabra", "quedar bien", "hacerlo"], "Cumples la promesa de traer la torta.", "You keep the promise to bring the cake."),
        dl53Vocab("la cumplo", "I'll keep it, referring back to a promise, condition, or obligation.", "it I fulfill", "Use it when the promise has just been named and the pronoun is clear.", "Avoid using it with no clear feminine noun in the conversation; listeners need to know what la refers to.", "neutral conversational", "General Spanish.", ["cumplo la promesa", "lo cumplo", "cumplo con eso", "respondo"], "La cumplo sin falta.", "I'll keep it without fail."),
        dl53Vocab("sin falta", "Without fail. A phrase that makes timing or follow-through sound firm.", "without lack", "Use it when you want to reassure someone that the promise or deadline will be kept.", "Avoid it if you are not sure. Sin falta raises the expectation and makes failure more annoying.", "neutral", "General Spanish.", ["seguro", "puntual", "de verdad", "a tiempo"], "A las cinco, sin falta.", "At five, without fail.")
      ],
      note:
        "Cumplir starts with birthdays: hoy cumplo treinta, ¿cuándo cumple años? That is the phrase people need constantly. From there, cumplir con names duties, deadlines and rules, while cumplir una promesa names keeping your word. The noun beside cumplir decides the meaning.",
      culture: [
        dl53Culture("Birthdays are the daily meaning", "Learners often meet cumplir in formal contexts first, but Colombians use it constantly for birthdays. Asking ¿cuándo cumples? is basic social Spanish, not advanced paperwork."),
        dl53Culture("Details make promises credible", "Iván does not just say la cumplo. He says the cake is ordered and gives the pickup time. In real life, specific details make a commitment sound possible."),
        dl53Culture("Family time is flexible until it isn't", "A family gathering may start loosely, but the cake, an elder's arrival, or food timing can make punctuality matter. Cumplir con la hora becomes practical, not fussy."),
        dl53Culture("Montería without a stereotype", "The patio and heat make the setting concrete, but the language stays general. The lesson is about Colombian Spanish, not a costume of regional words.")
      ],
      pitfalls: [
        dl53Pitfall("Translating cumplir años as complete years", "English does not say I complete thirty years for a birthday. Spanish uses cumplir; English normally says turn thirty or have a birthday.", "Hoy cumplo treinta means today I turn thirty."),
        dl53Pitfall("Using cumplir con for birthdays", "In Spanish, cumplir con introduces duties or rules. For birthdays, the direct phrase is cumplir años, without con.", "Cumplo treinta hoy."),
        dl53Pitfall("Confusing prometer and cumplir", "Prometer gives the word; cumplir keeps it. If the promise already exists, cumplir is the verb that matters.", "Prometí la torta y voy a cumplir."),
        dl53Pitfall("Saying sin falta when you are not sure", "Sin falta makes a commitment firmer. If you fail after saying it, the delay sounds worse because you raised the expectation.", "Use sin falta only when you can really keep the time.")
      ],
      variations: [
        dl53Variation("Hoy cumplo treinta.", "warm neutral", "General Spanish", "You are turning thirty today."),
        dl53Variation("¿Cuándo cumple años?", "polite neutral", "General Spanish", "Asking someone's birthday in usted."),
        dl53Variation("Cumplo con la hora acordada.", "practical", "General Spanish", "You keep to an agreed time."),
        dl53Variation("Voy a cumplir la promesa.", "serious neutral", "General Spanish", "You will keep your word."),
        dl53Variation("A las cinco, sin falta.", "firm practical", "General Spanish", "You want the time to sound reliable.")
      ],
      prompt: "Paola says “hoy cumplo treinta.” What is the everyday meaning of cumplir here?",
      choices: [
        "She turns thirty today.",
        "She signs a contract today.",
        "She demands a complaint today."
      ],
      answer: 0,
      practiceExtra: [
        dl53Question("Which question politely asks someone's birthday?", ["¿Cuándo exige años?", "¿Cuándo cumple años?", "¿Cuándo acuerda años?"], 1, "cumplir años for birthdays"),
        dl53Question("Which line means keeping to a time?", ["Cumplo con la hora acordada.", "Cumplo treinta en la fiesta.", "Cumplo una torta dulce."], 0, "cumplir con for duties and times"),
        dl53Question("Which sentence focuses on keeping a promise?", ["Prometo la promesa otra vez.", "Acuerdo años con mi prima.", "Voy a cumplir la promesa."], 2, "cumplir una promesa"),
        dl53Question("Which phrase makes a deadline sound firm?", ["De pronto si puedo.", "A las cinco, sin falta.", "Miro a ver luego."], 1, "sin falta as firm follow-through")
      ]
    },
    en: {
      title: "Cumplir años en Austin",
      situation:
        "Usted está en Austin organizando un cumpleaños familiar. En inglés debe separar turn thirty, have a birthday, meet a deadline y keep a promise, porque cumplir cambia según el sustantivo.",
      setting: {
        who: "Paola cumple treinta y su primo Ivan coordina una reunión familiar pequeña.",
        what: "Hablan de edad, hora de llegada, una promesa sobre la torta y cómo sonar confiable.",
        when: "Un sábado por la tarde, pocas horas antes de que lleguen los familiares.",
        where: "Austin, en el patio de una casa familiar, porque esta dirección practica inglés fuera de Colombia.",
        why: "Porque cumplir años no se traduce como fulfill years. El inglés separa cumpleaños, plazos, reglas y promesas con expresiones distintas."
      },
      address: {
        form: "mixed",
        who: "Paola e Ivan son primos cercanos; el inglés usa you aunque estén bromeando o hablando en serio.",
        why: "La cercanía se marca con tono familiar y bromas sobre la edad, no con una forma distinta de segunda persona.",
        ifYouSwitch:
          "Sir o ma'am dañaría la escena familiar. Si el tono se vuelve serio, el inglés usa frases claras como I promise or without fail."
      },
      dialogue: [
        dl53Dialogue("Ivan", "So are you turning thirty today, or still saying twenty-nine?", "¿Entonces hoy cumples treinta o todavía dices veintinueve?", "so ar yu TER-ning THER-di tu-DEI, or stil SEI-ing twen-ti NAIN", "Entonces, ¿está girando treinta hoy o todavía diciendo veintinueve?", "“Turn thirty” es la frase normal para cumplir treinta. No traduzca cumplir con fulfill en cumpleaños."),
        dl53Dialogue("Paola", "I'm turning thirty today, and I'm not hiding it.", "Hoy cumplo treinta y no pienso esconderlo.", "aim TER-ning THER-di tu-DEI, and aim not JAI-ding it", "Estoy girando treinta hoy, y no lo estoy escondiendo.", "La edad entra con turn. También podría decir “it's my birthday”, pero eso no dice la edad."),
        dl53Dialogue("Ivan", "Fine, but meet the time; my mom is always punctual.", "Bueno, pero cumple con la hora; mi mamá siempre llega puntual.", "fain, bat mit da taim; mai mom iz OL-weiz PONK-chu-al", "Bien, pero encuentre la hora; mi mamá siempre es puntual.", "“Meet” sirve con deadline, requirement o agreed time. Aquí cumplir con no tiene que ver con cumpleaños."),
        dl53Dialogue("Paola", "I'll meet the time if you keep your promise to bring the cake.", "Cumplo con la hora si tú cumples la promesa de traer la torta.", "ail mit da taim if yu kip yor PRO-mis tu bring da keik", "Cumpliré la hora si usted guarda su promesa de traer la torta.", "“Keep your promise” es cumplir una promesa. El inglés usa keep en habla común, más natural que fulfill aquí."),
        dl53Dialogue("Ivan", "I'll keep it. I ordered it already and I'll pick it up at five.", "La cumplo. Ya la encargué y la recojo a las cinco.", "ail kip it. ai OR-derd it ol-RE-di and ail pik it op at faiv", "La guardaré. Ya la ordené y la recogeré a las cinco.", "“Keep it” se entiende porque la promesa acaba de aparecer. Los detalles vuelven creíble el compromiso."),
        dl53Dialogue("Paola", "That's better. Birthdays happen; keeping your word takes work.", "Así sí. Cumplir años pasa solo; cumplir la palabra cuesta.", "dats BE-ter. BERTH-deiz JA-pen; KI-ping yor werd teiks work", "Eso está mejor. Los cumpleaños pasan; guardar su palabra toma trabajo.", "La frase separa cumpleaños de responsabilidad. “Keeping your word” traduce cumplir la palabra con un tono natural.")
      ],
      vocabulary: [
        dl53Vocab("turn thirty", "Cumplir treinta. Turn más el número es la forma natural para llegar a una edad.", "girar treinta", "Úselo con edades: turn eighteen, turn thirty, turn sixty.", "Evítelo para la fiesta misma. Have a birthday or celebrate a birthday names the event.", "neutral", "Inglés universal.", ["turn eighteen", "turn forty", "age", "birthday"], "I'm turning thirty today.", "Hoy cumplo treinta."),
        dl53Vocab("have a birthday", "Cumplir años o tener cumpleaños, sin decir necesariamente la edad.", "tener un cumpleaños", "Úselo cuando importa el día, la celebración o felicitar a alguien.", "Evítelo si necesita la edad exacta. Then use turn plus the number.", "neutral warm", "Inglés universal.", ["birthday", "celebrate", "party", "turn"], "She has a birthday today.", "Ella cumple años hoy."),
        dl53Vocab("meet a deadline", "Cumplir con un plazo. Meet encaja con deadlines, requirements y expectations.", "encontrar un plazo", "Úselo cuando una fecha límite o condición debe cumplirse.", "Evítelo para promesas personales, donde keep a promise suele sonar más natural.", "neutral practical", "Inglés universal.", ["meet a requirement", "be on time", "deliver", "comply"], "We need to meet the deadline.", "Tenemos que cumplir con el plazo."),
        dl53Vocab("meet the time", "Cumplir con la hora acordada, especialmente en una coordinación práctica.", "encontrar la hora", "Úselo cuando el horario pactado importa y hay que respetarlo.", "Evítelo si habla de la edad de cumpleaños. Time here is schedule, not years.", "neutral practical", "Inglés universal.", ["be on time", "stick to the time", "keep the time", "arrive on time"], "Meet the time we agreed on.", "Cumpla con la hora acordada."),
        dl53Vocab("keep a promise", "Cumplir una promesa. Es la colocación más natural en conversación.", "guardar una promesa", "Úselo para hacer lo prometido y no quedar mal.", "Evítelo como fulfill a promise si busca habla cotidiana; se entiende, pero suena más formal.", "neutral serious", "Inglés universal.", ["keep your word", "follow through", "come through", "not break it"], "Keep your promise to bring the cake.", "Cumpla la promesa de traer la torta."),
        dl53Vocab("keep your word", "Cumplir la palabra. Suena más personal y ético que simplemente terminar una tarea.", "guardar su palabra", "Úselo cuando la confianza de alguien está en juego.", "Evítelo para una regla impersonal. Meet a requirement puede ser más exacto.", "serious personal", "Inglés universal.", ["keep a promise", "honor your word", "follow through", "be reliable"], "Keeping your word takes work.", "Cumplir la palabra cuesta."),
        dl53Vocab("without fail", "Sin falta. Refuerza una hora, entrega o promesa.", "sin falla", "Úselo cuando quiere sonar firme sobre tiempo o cumplimiento.", "Evítelo si no puede controlar el resultado. Without fail raises the expectation.", "firm practical", "Inglés universal.", ["for sure", "no later than", "definitely", "on time"], "At five, without fail.", "A las cinco, sin falta.")
      ],
      note:
        "Cumplir se abre en varias frases inglesas. Para edad, “turn thirty”; para el día, “have a birthday”; para plazos y requisitos, “meet”; para promesas, “keep a promise” o “keep your word”. “Fulfill” existe, pero si lo usa para todo, su inglés sonará traducido y demasiado formal.",
      culture: [
        dl53Culture("Turn lleva la edad", "El inglés imagina que uno turns an age. La imagen no se traduce literalmente al español, pero es la frase que necesita para cumpleaños con número."),
        dl53Culture("Meet no es sólo conocer", "Meet también significa cumplir con un plazo, requisito o expectativa. Este sentido aparece mucho en trabajo, estudio y acuerdos prácticos."),
        dl53Culture("Keep suena natural con promesas", "Aunque fulfill a promise existe, keep a promise y keep your word son las frases que más se oyen en conversación cotidiana."),
        dl53Culture("Without fail sube la apuesta", "Sin falta y without fail tranquilizan, pero también crean expectativa. Si falla después de decirlo, la molestia será mayor.")
      ],
      pitfalls: [
        dl53Pitfall("“Today I complete thirty years.”", "Es un calco de hoy cumplo treinta. El inglés de cumpleaños usa turn más la edad.", "Today I turn thirty."),
        dl53Pitfall("“When do you fulfill years?”", "Fulfill years no comunica cumpleaños. Para preguntar la fecha, use birthday.", "When is your birthday?"),
        dl53Pitfall("“I comply a promise.”", "Comply no toma promise así. En conversación, cumplir una promesa es keep a promise.", "I keep a promise."),
        dl53Pitfall("“I meet thirty today.”", "Meet sirve para plazos o requisitos, no para llegar a una edad. Para edad, use turn.", "I turn thirty today.")
      ],
      variations: [
        dl53Variation("Today I turn thirty.", "warm neutral", "Inglés universal", "Cumple treinta hoy."),
        dl53Variation("When is your birthday?", "neutral", "Inglés universal", "Pregunta cuándo cumple años alguien."),
        dl53Variation("We need to meet the deadline.", "practical", "Inglés universal", "Hay que cumplir con un plazo."),
        dl53Variation("I'll keep my promise.", "serious personal", "Inglés universal", "Promete cumplir la palabra."),
        dl53Variation("At five, without fail.", "firm practical", "Inglés universal", "Quiere sonar puntual y confiable.")
      ],
      prompt: "Paola says “I'm turning thirty today.” ¿Qué traducción evita?",
      choices: [
        "Evita el calco raro “I complete thirty years.”",
        "Evita decir que tiene una reunión con un contratista.",
        "Evita exigir una compensación ante una empresa."
      ],
      answer: 0,
      practiceExtra: [
        dl53Question("¿Cuál frase pregunta cuándo cumple años alguien?", ["When is your birthday?", "When do you meet years?", "When fulfill your age?"], 0, "birthday question instead of fulfill years"),
        dl53Question("¿Cuál frase cumple con un plazo?", ["We turn the deadline.", "We meet the deadline.", "We birthday the deadline."], 1, "meet a deadline"),
        dl53Question("¿Cuál frase cumple una promesa?", ["I'll agree my promise.", "I'll demand my promise.", "I'll keep my promise."], 2, "keep a promise"),
        dl53Question("¿Cuál frase refuerza una hora?", ["At five, without fail.", "At five, with birthday.", "At five, on memory."], 0, "without fail for firm timing")
      ]
    }
  },
  {
    id: "demanding-a-refund-in-buenaventura",
    level: "Developing · Insisting on rights",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["year-12-local-mastery"],
    verb: "exigir",
    review: "pending",
    es: {
      title: "Exigir respuesta en Buenaventura",
      situation:
        "Estás en Buenaventura reclamando por un servicio que no cumplieron. Exigir suena fuerte, así que lo usas sólo cuando hay derecho y evidencia, no cuando bastaría pedir o solicitar algo normal.",
      setting: {
        who: "Marcela paid for a delivery that never arrived, and the office clerk is trying to move the complaint to another day.",
        what: "She asks for the complaint book, insists on a written response, and chooses firm language without shouting.",
        when: "Mid-morning, after two unanswered messages and one failed visit to the office.",
        where: "Buenaventura, at a service counter near the port area, with the Spanish kept general and accurate.",
        why: "Because exigir is forceful and belongs to rights, complaints, and confrontations. It also changes g to j in yo exijo."
      },
      address: {
        form: "usted",
        who: "Marcela and the clerk use usted because this is a formal complaint at a service counter.",
        why: "Usted lets Marcela be firm without sounding personally aggressive. The pressure comes from rights and documentation, not from insult.",
        ifYouSwitch:
          "Tú would be too familiar and could weaken the complaint. Vos would be out of place in this formal consumer setting."
      },
      dialogue: [
        dl53Dialogue("Funcionario", "Señora, vuelva mañana y miramos qué pasó con el envío.", "Ma'am, come back tomorrow and we'll see what happened with the delivery.", "seh-NYOH-rah, BWEHL-bah mah-NYAH-nah ee mee-RAH-mos keh pah-SOH kon el en-BEE-oh", "Lady, return tomorrow and we-look what happened with the shipment.", "The clerk offers delay. That matters because exigir becomes more justified when softer channels have already failed."),
        dl53Dialogue("Marcela", "No, señor. Hoy exijo una respuesta por escrito.", "No, sir. Today I demand a written response.", "noh, seh-NYOR. oy ek-SEE-hoh OO-nah rres-PWES-tah por es-KREE-toh", "No, sir. Today I demand an answer by written.", "Exijo is forceful and first person. The spelling changes g to j before o, just like proteger to protejo."),
        dl53Dialogue("Funcionario", "¿Exige devolución o sólo una explicación?", "Are you demanding a refund or only an explanation?", "ek-SEE-heh deh-boh-loo-SYON oh SOH-loh OO-nah eks-plee-kah-SYON", "You demand refund or only an explanation?", "Exige is still strong in usted. The clerk now has to name the demand instead of leaving the issue vague."),
        dl53Dialogue("Marcela", "Exijo que cumplan con el servicio o que devuelvan la plata.", "I demand that you provide the service or refund the money.", "ek-SEE-hoh keh KOOM-plan kon el ser-BEE-syoh oh keh deh-BWEL-ban lah PLAH-tah", "I demand that they-fulfill with the service or that they-return the money.", "Exigir que often introduces a subjunctive verb: cumplan, devuelvan. She is not making an ordinary request; she is invoking an obligation."),
        dl53Dialogue("Funcionario", "Puede solicitar el libro de reclamaciones si quiere dejar constancia.", "You may request the complaint book if you want to leave a record.", "PWEH-deh soh-lee-see-TAR el LEE-broh deh rreh-klah-mah-SYOH-nes see KYEH-reh deh-HAR kon-STAN-syah", "You can request the book of complaints if you want to leave record.", "Solicitar is calmer and bureaucratic. The honest alternative to shouting is not weakness; it is making the complaint visible."),
        dl53Dialogue("Marcela", "Eso necesito: hacer valer mis derechos sin pelear.", "That's what I need: to assert my rights without fighting.", "EH-soh neh-seh-SEE-toh: ah-SEHR bah-LER mees deh-REH-chos seen peh-LEH-ar", "That I-need: make be-worth my rights without fighting.", "Hacer valer mis derechos is the mature counterpart to exigir. It says the demand is grounded in rights, not mood.")
      ],
      vocabulary: [
        dl53Vocab("exigir", "To demand or insist on something forcefully, usually because a right, rule, or obligation is involved.", "to demand", "Use it for rights, written answers, refunds, compliance, evidence, and serious complaints.", "Avoid it for ordinary requests. Where pedir or solicitar fits, exigir can sound aggressive.", "forceful formal", "General Spanish.", ["reclamar", "demandar", "pedir", "solicitar"], "Exijo una respuesta por escrito.", "I demand a written response."),
        dl53Vocab("exijo", "The yo form of exigir. The g changes to j before o to keep the soft sound.", "I demand", "Use it when you are personally making a forceful demand.", "Avoid writing exigo. That form breaks the spelling pattern and is wrong.", "forceful", "General Spanish spelling rule.", ["exige", "exija", "exigimos", "exigir"], "Hoy exijo una respuesta.", "Today I demand an answer."),
        dl53Vocab("exigir que", "To demand that something happen. It often triggers the subjunctive in the next verb.", "to demand that", "Use it when the demand is an action by someone else: que cumplan, que devuelvan, que respondan.", "Avoid following it with an infinitive when the subject changes. Exijo devolver la plata means you yourself demand to return it.", "formal forceful", "General Spanish.", ["pedir que", "solicitar que", "reclamar que", "insistir en que"], "Exijo que devuelvan la plata.", "I demand that they refund the money."),
        dl53Vocab("exigir devolución", "To demand a refund. It is strong but appropriate when a service was not delivered.", "to demand return", "Use it when money should come back because the seller or provider failed.", "Avoid it as the first line for a tiny confusion. Start with pedir or solicitar if the situation is still routine.", "formal complaint", "General Spanish.", ["pedir reembolso", "solicitar devolución", "reclamar devolución", "devolver plata"], "Exijo devolución del pago.", "I demand a refund of the payment."),
        dl53Vocab("solicitar", "To request, especially in formal or bureaucratic settings. It is calmer than exigir.", "to request", "Use it for forms, documents, appointments, complaint books, and formal procedures.", "Avoid it when you need to make clear that a right is being denied. Then exigir may be warranted.", "formal neutral", "General Spanish.", ["pedir", "tramitar", "requerir", "presentar"], "Puede solicitar el libro.", "You may request the book."),
        dl53Vocab("libro de reclamaciones", "The complaint book or official complaints record in consumer settings.", "book of complaints", "Use it when you want a complaint recorded rather than only discussed at the counter.", "Avoid using it as a casual threat if you are not prepared to write the complaint clearly.", "formal consumer", "General Spanish; procedures vary by country and business.", ["queja", "reclamo", "constancia", "respuesta escrita"], "Pido el libro de reclamaciones.", "I ask for the complaint book."),
        dl53Vocab("hacer valer sus derechos", "To assert or make your rights count without necessarily shouting or threatening.", "to make your rights be worth", "Use it when the complaint rests on a rule, contract, payment, or legal protection.", "Avoid using it for personal preferences with no right behind them. Then it sounds inflated.", "formal civic", "General Spanish.", ["reclamar", "exigir", "defender derechos", "dejar constancia"], "Quiero hacer valer mis derechos.", "I want to assert my rights.")
      ],
      note:
        "Exigir is not a louder pedir. It is forceful language for rights, failures, written answers and obligations. Use it when the situation justifies pressure, and keep the form correct: yo exijo. Often the better civic posture is hacer valer mis derechos or pedir el libro de reclamaciones, not simply raising your voice.",
      culture: [
        dl53Culture("Firm is not the same as rude", "A Colombian complaint can be formal, firm and controlled. Usted, written records and clear demands often work better than shouting, especially when the goal is a refund or response."),
        dl53Culture("Exigir needs a basis", "The verb sounds justified when there is payment, evidence, a missed obligation or a right. Without that basis, exigir can make an ordinary request sound like a confrontation."),
        dl53Culture("The complaint book changes the scene", "Asking for the libro de reclamaciones moves the problem from conversation to record. That is why it can be more powerful than repeating the same complaint at the counter."),
        dl53Culture("Buenaventura as ordinary consumer life", "The port setting makes the delivery problem credible, but the lesson avoids invented regional speech. Consumer Spanish should travel across Colombia.")
      ],
      pitfalls: [
        dl53Pitfall("Using exigir for ordinary requests", "Exigir is forceful. If you use it to ask for a menu, a pen, or routine information, you may sound aggressive or entitled.", "Use pedir or solicitar for ordinary requests."),
        dl53Pitfall("Writing yo exigo", "Exigir changes g to j before o: yo exijo. The spelling protects the sound and the form is not optional.", "Yo exijo una respuesta."),
        dl53Pitfall("Forgetting que with a changed subject", "If you demand that someone else act, Spanish normally uses exigir que plus a verb like cumplan or devuelvan.", "Exijo que devuelvan la plata."),
        dl53Pitfall("Confusing exigir with hacer valer derechos", "Exigir is the demanding act; hacer valer sus derechos is the broader, more civic posture. The second can sound firm without sounding hot-headed.", "Quiero hacer valer mis derechos.")
      ],
      variations: [
        dl53Variation("Exijo una respuesta por escrito.", "forceful formal", "General Spanish", "A written response is justified and overdue."),
        dl53Variation("Exijo que devuelvan la plata.", "formal complaint", "General Spanish", "You demand that someone else refund the money."),
        dl53Variation("Solicito el libro de reclamaciones.", "formal neutral", "General Spanish", "You make the complaint official without shouting."),
        dl53Variation("Quiero hacer valer mis derechos.", "formal civic", "General Spanish", "You ground the insistence in rights."),
        dl53Variation("Primero pido; después exijo.", "practical", "General Spanish", "You distinguish ordinary requests from warranted demands."),
        {
          form: "Si me hubieran contestado a tiempo, esto ya estaría resuelto.",
          register: "courteous",
          region: "Universal Spanish",
          whenToUse: "Pressing a complaint by naming the response you never got. Firm without being rude, which is what keeps a counter conversation moving."
        }
      ],
      prompt: "Marcela says “hoy exijo una respuesta por escrito.” What register is she choosing?",
      choices: [
        "A forceful complaint grounded in a right or obligation.",
        "A casual request for a normal everyday favor.",
        "A soft reminder about a friend's birthday."
      ],
      answer: 0,
      practiceExtra: [
        dl53Question("Which yo form is spelled correctly?", ["Yo exigo una respuesta.", "Yo exigir una respuesta.", "Yo exijo una respuesta."], 2, "exijo as g to j before o"),
        dl53Question("Which line uses exigir que correctly?", ["Exijo que devuelvan la plata.", "Exijo devolver ellos la plata.", "Exijo de la plata devuelta."], 0, "exigir que with changed subject"),
        dl53Question("Which line sounds calmer and bureaucratic?", ["Solicito el libro de reclamaciones.", "Exijo un café pequeño.", "Grito por una servilleta."], 0, "solicitar as formal request"),
        dl53Question("Which phrase asserts rights without shouting?", ["Quiero hacer valer mis derechos.", "Quiero exigir por capricho.", "Quiero pelear sin constancia."], 0, "hacer valer derechos as civic counterpart")
      ]
    },
    en: {
      title: "Exigir un reembolso en Glasgow",
      situation:
        "Usted está en Glasgow reclamando por un servicio que no cumplieron. En inglés debe distinguir demand, insist on, request y assert your rights para sonar firme sin convertir una petición normal en pelea.",
      setting: {
        who: "Marcela pagó por una entrega que nunca llegó y el empleado intenta aplazar la queja para otro día.",
        what: "Ella pide un registro de queja, insiste en una respuesta escrita y escoge palabras firmes sin gritar.",
        when: "A media mañana, después de dos mensajes sin respuesta y una visita anterior fallida.",
        where: "Glasgow, en un mostrador de atención al cliente, porque esta dirección enseña inglés fuera de Colombia.",
        why: "Porque exigir no siempre es demand. Request puede ser suficiente; insist on y assert your rights ayudan cuando sí hay una base clara."
      },
      address: {
        form: "mixed",
        who: "Marcela y el empleado mantienen trato profesional; el inglés usa you para ambos lados.",
        why: "La firmeza sale de written response, refund y rights, no de insultos ni pronombres diferentes.",
        ifYouSwitch:
          "Decir sir o ma'am puede ser cortés una vez, pero repetirlo no arregla la queja. Lo importante es precisar qué exige y por qué."
      },
      dialogue: [
        dl53Dialogue("Clerk", "Ma'am, come back tomorrow and we'll check what happened.", "Señora, vuelva mañana y revisamos qué pasó.", "mam, kom bak tu-MOR-ou and uil chek uat JA-pend", "Señora, vuelva mañana y revisaremos qué pasó.", "El empleado ofrece aplazar. Eso prepara el terreno para una frase más firme, porque Marcela ya intentó canales suaves."),
        dl53Dialogue("Marcela", "No. I insist on a written response today.", "No. Exijo una respuesta por escrito hoy.", "nou. ai in-SIST on a RI-ten ri-SPONS tu-DEI", "No. Insisto en una respuesta escrita hoy.", "“Insist on” puede sonar firme sin ser tan frontal como demand. Aquí funciona porque la respuesta escrita es razonable y concreta."),
        dl53Dialogue("Clerk", "Are you requesting a refund or just an explanation?", "¿Está solicitando devolución o sólo una explicación?", "ar yu ri-KWES-ting a RI-fond or yost an eks-pla-NEI-shon", "¿Está solicitando un reembolso o sólo una explicación?", "“Requesting” baja el tono y ordena la opción administrativa. No niega el reclamo; lo pone en una casilla clara."),
        dl53Dialogue("Marcela", "I'm demanding either the service or a full refund.", "Exijo que cumplan el servicio o que devuelvan todo el pago.", "aim di-MAN-ding I-der da SER-vis or a ful RI-fond", "Estoy exigiendo o el servicio o un reembolso completo.", "“Demanding” es fuerte y se justifica porque hay pago y falla del servicio. No sería la primera palabra para pedir información normal."),
        dl53Dialogue("Clerk", "You can request the complaints book if you want a record.", "Puede solicitar el libro de reclamaciones si quiere constancia.", "yu kan ri-KWEST da kom-PLEINTS buk if yu uant a RE-kord", "Puede solicitar el libro de quejas si quiere un registro.", "“Complaints book” o “complaint form” depende del sistema local, pero la idea es dejar constancia. “Request” mantiene el procedimiento claro."),
        dl53Dialogue("Marcela", "That's what I need: to assert my rights without shouting.", "Eso necesito: hacer valer mis derechos sin gritar.", "dats uat ai nid: tu a-SERT mai raits uid-AUT SHAU-ting", "Eso es lo que necesito: afirmar mis derechos sin gritar.", "“Assert my rights” traduce muy bien hacer valer mis derechos. Suena firme y adulto, no caprichoso.")
      ],
      vocabulary: [
        dl53Vocab("demand", "Exigir. Es fuerte y conviene reservarlo para derechos, fallas, obligaciones y reclamos serios.", "exigir", "Úselo cuando hay base clara: pago, incumplimiento, regla, derecho o daño.", "Evítelo para pedidos normales. Demand a menu suena agresivo.", "forceful formal", "Inglés universal.", ["insist on", "require", "call for", "ask for"], "I demand a written response.", "Exijo una respuesta por escrito."),
        dl53Vocab("insist on", "Insistir en o exigir con firmeza. Puede sonar menos agresivo que demand.", "insistir en", "Úselo para una condición razonable que no quiere dejar caer.", "Evítelo si sólo está preguntando por una opción. Request or ask for is lighter.", "firm neutral", "Inglés universal.", ["demand", "stand firm on", "require", "press for"], "I insist on a written response.", "Exijo una respuesta por escrito."),
        dl53Vocab("request", "Solicitar o pedir formalmente. Es más tranquilo que demand.", "solicitar", "Úselo para formularios, reembolsos, documentos, citas y procedimientos.", "Evítelo si necesita mostrar que le están negando un derecho. Puede sonar demasiado suave.", "formal neutral", "Inglés universal.", ["ask for", "apply for", "seek", "submit"], "I request a refund.", "Solicito devolución."),
        dl53Vocab("refund", "Devolución de dinero o reembolso.", "reembolso", "Úselo cuando el dinero debe volver porque el producto o servicio falló.", "Evítelo para una explicación o disculpa sin dinero. Refund is specifically money.", "neutral consumer", "Inglés universal.", ["money back", "reimbursement", "return", "repayment"], "I want a full refund.", "Quiero devolución total."),
        dl53Vocab("written response", "Respuesta por escrito. Hace que el reclamo quede verificable.", "respuesta escrita", "Úselo cuando necesita constancia, seguimiento o una prueba de lo dicho.", "Evítelo si sólo necesita una orientación rápida en el mostrador.", "formal practical", "Inglés universal.", ["record", "email response", "written answer", "confirmation"], "I need a written response.", "Necesito respuesta por escrito."),
        dl53Vocab("complaints book", "Libro de reclamaciones o registro de quejas, según el país y la institución.", "libro de quejas", "Úselo cuando quiere nombrar un registro formal de reclamos.", "Evítelo si el país usa complaint form or complaint log instead. The exact object varies.", "formal consumer", "Inglés internacional; el procedimiento cambia por lugar.", ["complaint form", "complaint log", "record", "customer service"], "Request the complaints book.", "Solicite el libro de reclamaciones."),
        dl53Vocab("assert your rights", "Hacer valer sus derechos. Firme, claro y menos explosivo que sólo demandar.", "afirmar sus derechos", "Úselo cuando tiene una base legal, contractual o de consumidor y quiere actuar con control.", "Evítelo para preferencias pequeñas sin derecho detrás. Rights makes the claim bigger.", "formal civic", "Inglés universal.", ["stand up for your rights", "exercise your rights", "make a claim", "file a complaint"], "Assert your rights without shouting.", "Haga valer sus derechos sin gritar.")
      ],
      note:
        "En inglés, “demand” existe, pero pesa. “Request” sirve para pedir formalmente sin confrontación; “insist on” mantiene firme una condición; “assert your rights” comunica hacer valer sus derechos con madurez. Igual que exigir en español, la fuerza debe tener base: pago, incumplimiento, regla o derecho.",
      culture: [
        dl53Culture("Demand puede sonar agresivo", "La palabra no está prohibida, pero entra con fuerza. Si la situación todavía es rutinaria, request o ask for puede lograr más sin subir el conflicto."),
        dl53Culture("Insist on es firme y útil", "“I insist on a written response” marca límite sin insultar. La preposición on introduce aquello que usted no va a soltar."),
        dl53Culture("Written records protect both sides", "Una respuesta escrita reduce el juego de versiones. En reclamos de consumidor, el registro puede importar más que ganar una discusión en voz alta."),
        dl53Culture("Rights necesitan fundamento", "Assert your rights suena adulto cuando hay una base real. Sin esa base, rights language can sound inflated or self-important.")
      ],
      pitfalls: [
        dl53Pitfall("“I demand a menu.”", "Gramaticalmente se entiende, pero para un pedido normal suena agresivo. Use ask for o request según el lugar.", "I'd like a menu, please."),
        dl53Pitfall("“I insist a written response.”", "Insist necesita on antes de la cosa que no piensa soltar.", "I insist on a written response."),
        dl53Pitfall("“I request that they gives me a refund.”", "Después de request that, el inglés formal usa give sin s, o puede evitar la estructura con a refund.", "I request a refund."),
        dl53Pitfall("“I assert my rights for a napkin.”", "Rights agranda mucho la situación. Para un objeto normal, la frase suena desproporcionada.", "Could I have a napkin, please?")
      ],
      variations: [
        dl53Variation("I demand a written response.", "forceful formal", "Inglés universal", "La situación justifica una exigencia fuerte."),
        dl53Variation("I insist on a written response.", "firm neutral", "Inglés universal", "Quiere firmeza sin sonar explosivo."),
        dl53Variation("I request a full refund.", "formal consumer", "Inglés universal", "Pide devolución por vía formal."),
        dl53Variation("Please give me the complaint form.", "polite formal", "Inglés universal", "Pide el mecanismo de reclamo sin gritar."),
        dl53Variation("I want to assert my rights.", "formal civic", "Inglés universal", "Fundamenta la insistencia en derechos."),
        {
          form: "I wish they had answered in writing; if they had, we would have settled this already.",
          register: "courteous",
          region: "Inglés universal",
          whenToUse: "Para reclamar señalando lo que no se hizo. Es más eficaz que acusar, porque describe el daño en vez de atacar a la persona."
        }
      ],
      prompt: "Marcela says “I insist on a written response.” ¿Qué tono escoge?",
      choices: [
        "Firme, concreto y menos frontal que demand.",
        "Casual, cariñoso y propio de cumpleaños.",
        "Vago, evasivo y sin ningún reclamo real."
      ],
      answer: 0,
      practiceExtra: [
        dl53Question("¿Cuál frase suena demasiado agresiva para algo normal?", ["I demand a menu.", "I'd like a menu.", "Could I see a menu?"], 0, "demand as too forceful for routine requests"),
        dl53Question("¿Cuál frase usa insist on correctamente?", ["I insist a response.", "I insist on a response.", "I insist to a response."], 1, "insist on plus the demand"),
        dl53Question("¿Cuál frase pide reembolso formalmente?", ["I request a full refund.", "I birthday a full refund.", "I remember a full refund."], 0, "request a refund"),
        dl53Question("¿Cuál frase comunica derechos sin gritar?", ["I shout for my mood.", "I ask for a napkin.", "I assert my rights."], 2, "assert rights as civic firmness")
      ]
    }
  }
);

markSource(lessons, "data/lessons/53-developing-deals-and-demands.js");
