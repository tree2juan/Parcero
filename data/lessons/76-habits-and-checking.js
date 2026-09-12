/*
 * Lesson block: habits that ended, and checking you are understood.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules -- `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first.
 *
 * Both lessons here are GRAMMAR lessons turning on data/structures.js, and both
 * exist because cefr.coverage() found an English structure with no Spanish
 * trigger to be a translation of. "Used to" appeared in one lesson in the whole
 * corpus and the English question tag in one, even though Spanish speakers meet
 * both within days of arriving: the tag because every Colombian "¿cierto?" has
 * to become one, and "used to" because the Spanish imperfect quietly carries a
 * meaning English insists on spelling out.
 */

lessons.push(
  {
    id: "how-the-block-used-to-be-in-bogota",
    level: "Developing · Everyday life",
    skills: ["grammar", "listening", "speaking", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    structure: "past-habits",
    review: "pending",
    es: {
      title: "This place used to be something else",
      situation: "An older neighbor tells Marcela what the neighborhood used to be like and which things people do not do anymore.",
      setting: {
        who: "Don Hernando is seventy-four and has lived on this block in Chapinero since 1979. Marcela moved into the building four months ago and is thirty-one. The age gap is wide enough that usted is automatic in both directions, and neither of them will drop it.",
        what: "A doorway conversation that neither person planned: Marcela asked one question about a closed shop and got fifteen years of neighborhood history. It stays friendly and slightly wistful throughout.",
        when: "Around six in the evening, when Don Hernando is out front and people are coming home. Long enough to talk properly, not long enough to be invited in.",
        where: "The entrance of an eight-story building in Chapinero, Bogotá. Rolo Spanish — careful, courteous, with usted as the default even between neighbors who like each other.",
        why: "Don Hernando enjoys being the person who remembers. Marcela genuinely wants to know why the block feels the way it does, and asking the oldest resident is the fastest route."
      },
      address: {
        form: "usted",
        who: "Both use usted, and neither offers to switch.",
        why: "In Bogotá, usted is the default with a neighbor you do not know well, and across a forty-year age gap it is not optional. It marks respect without any coldness — Bogotanos use usted with people they love.",
        ifYouSwitch: "Tú from Marcela to Don Hernando would sound presumptuous, even rude. From him to her it would be merely paternal, and many older Bogotanos do exactly that. Vos would be out of place in this city and this generation."
      },
      dialogue: [
        {
          speaker: "Marcela",
          target: "Don Hernando, ¿y esa panadería de la esquina siempre estuvo cerrada?",
          translation: "Don Hernando, has that bakery on the corner always been closed?",
          pronunciation: "don er-NÁN-do, i É-sa pa-na-de-RÍ-a de la es-KÍ-na SIÉM-pre es-TÚ-bo se-RRÁ-da",
          literal: "Don Hernando, and that bakery of the corner always was closed?",
          why: "Marcela uses the preterite “estuvo” because she is asking about a completed situation. The tense choice is what invites the imperfect answer that follows."
        },
        {
          speaker: "Don Hernando",
          target: "No, qué va. Antes esa panadería abría a las cinco de la mañana, todos los días.",
          translation: "No, not at all. That bakery used to open at five in the morning, every single day.",
          pronunciation: "no, ké ba. AN-tes É-sa pa-na-de-RÍ-a a-BRÍ-a a las SÍN-ko de la ma-ÑÁ-na, TÓ-dos los DÍ-as",
          literal: "No, what goes. Before that bakery was-opening at the five of the morning, all the days.",
          why: "This is the core of the lesson. The imperfect “abría” plus “antes” is how Spanish says “used to open”. There is no extra word for the habit — the tense carries it."
        },
        {
          speaker: "Marcela",
          target: "¿En serio? ¿Y usted solía ir todos los días o solo los fines de semana?",
          translation: "Really? And did you use to go every day, or just on weekends?",
          pronunciation: "en SÉ-rio, i us-TÉD so-LÍ-a ir TÓ-dos los DÍ-as o SÓ-lo los FÍ-nes de se-MÁ-na",
          literal: "In serious? And you used to-go all the days or only the ends of week?",
          why: "“Solía ir” makes the habit explicit rather than leaving it to the tense. It is the closest Spanish equivalent of “used to”, and it is optional in a way English's is not."
        },
        {
          speaker: "Don Hernando",
          target: "Todos los días. Bajaba a las seis, compraba el pan y me quedaba conversando un rato. Ya no.",
          translation: "Every day. I'd come down at six, buy the bread, and stay chatting a while. Not anymore.",
          pronunciation: "TÓ-dos los DÍ-as. ba-JÁ-ba a las séis, kom-PRÁ-ba el pan i me ke-DÁ-ba kon-ber-SÁN-do un RRÁ-to. ya no",
          literal: "All the days. I-was-going-down at the six, I-was-buying the bread and me I-was-staying conversing a while. Already not.",
          why: "Three imperfects in a row build the routine, and “ya no” closes it off. That two-word ending is what tells you the habit has stopped."
        },
        {
          speaker: "Marcela",
          target: "¿Y por qué cerró? Porque el local lleva años vacío, ¿no?",
          translation: "And why did it close? Because the place has been empty for years, hasn't it?",
          pronunciation: "i por ké se-RRÓ, POR-ke el lo-KÁL YÉ-ba Á-ños ba-SÍ-o, no",
          literal: "And why it-closed? Because the premises carries years empty, no?",
          why: "The switch to the preterite “cerró” is deliberate: the closing was one event, not a habit. Spanish makes you sort completed events from repeated ones every time you open your mouth about the past."
        },
        {
          speaker: "Don Hernando",
          target: "Subieron el arriendo. Antes uno vivía del barrio; ahora el barrio vive de los que llegan.",
          translation: "They put the rent up. People used to make a living off the neighborhood; now the neighborhood makes its living off the people arriving.",
          pronunciation: "su-BIÉ-ron el a-RRIÉN-do. AN-tes Ú-no bi-BÍ-a del BÁ-rrio, a-Ó-ra el BÁ-rrio BÍ-be de los ke YÉ-gan",
          literal: "They-raised the rent. Before one was-living of-the neighborhood; now the neighborhood lives of the ones that arrive.",
          why: "“Uno vivía” uses the impersonal “uno” with the imperfect — a very Colombian way of describing how things generally were, without claiming to speak for anyone in particular."
        }
      ],
      vocabulary: [
        {
          term: "el imperfecto (abría, bajaba, vivía)",
          explanation: "The tense of what used to happen and what was going on. Where English needs an extra phrase — “used to open”, “would open” — Spanish puts the habit inside the verb ending itself.",
          literal: "was opening / used to open",
          useWhen: "Repeated past actions, past descriptions, and background: “Bajaba a las seis”, “La panadería abría temprano”.",
          avoidWhen: "One completed event with a clear end. “Cerró en 2019” is preterite; “cerraba a las ocho” is a habit.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["solía", "antes", "el pretérito", "todos los días"],
          example: {
            target: "Esa panadería abría a las cinco.",
            translation: "That bakery used to open at five."
          }
        },
        {
          term: "soler + infinitivo",
          explanation: "Makes the habit explicit instead of leaving it to the tense. “Solía ir” and “iba” both mean “used to go”; the first simply says so out loud.",
          literal: "to be accustomed to ...",
          useWhen: "You want to stress that something was habitual, or to avoid an ambiguous imperfect: “Solía ir todos los días”.",
          avoidWhen: "Speaking very casually — the bare imperfect is far more common in everyday Colombian speech, and “soler” can sound slightly bookish.",
          register: "neutral",
          region: "Universal Spanish; less frequent in casual Colombian speech than in Spain.",
          related: ["el imperfecto", "acostumbrar", "antes", "por lo general"],
          example: {
            target: "¿Usted solía ir todos los días?",
            translation: "Did you use to go every day?"
          }
        },
        {
          term: "antes",
          explanation: "The signpost that tells a listener the imperfect coming next is a habit and not a description. In practice it is what makes “abría” unambiguous.",
          literal: "before",
          useWhen: "Opening a contrast between then and now: “Antes esto era otra cosa”, “Antes uno caminaba tranquilo”.",
          avoidWhen: "You mean “before” a specific event — that is “antes de”: “antes de las seis”, “antes de salir”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["ya no", "ahora", "en esa época", "antes de"],
          example: {
            target: "Antes esa panadería abría a las cinco.",
            translation: "That bakery used to open at five."
          }
        },
        {
          term: "ya no",
          explanation: "Two words that close a habit off: not anymore. It is the natural partner of “antes”, and together they frame the whole then-and-now contrast.",
          literal: "already not",
          useWhen: "Marking that something has stopped: “Ya no”, “Ya no abren los domingos”, “Ya no vivo ahí”.",
          avoidWhen: "You mean “not yet” — that is “todavía no”, which is almost the opposite.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["antes", "todavía no", "ya", "dejar de"],
          example: {
            target: "Me quedaba conversando un rato. Ya no.",
            translation: "I'd stay chatting a while. Not anymore."
          }
        },
        {
          term: "qué va",
          explanation: "A friendly, emphatic denial: nothing of the sort. Softer than a flat “no” and warmer than “para nada”.",
          literal: "what goes",
          useWhen: "Correcting an assumption without any edge: “¿Siempre estuvo cerrada? — Qué va.”",
          avoidWhen: "Formal writing or with someone senior you have just met. It is conversational and a little breezy.",
          register: "familiar",
          region: "Colombia and Spain; widely understood across Latin America.",
          related: ["para nada", "qué tal", "nada que ver", "no señor"],
          example: {
            target: "¿Siempre estuvo cerrada? — No, qué va.",
            translation: "Has it always been closed? — No, not at all."
          }
        },
        {
          term: "uno (impersonal)",
          explanation: "“One”, used to describe how things generally were or are, often with the speaker quietly included. Enormously common in Colombian speech, where English would say “you” or “people”.",
          literal: "one",
          useWhen: "General experience: “Antes uno vivía del barrio”, “Uno se acostumbra”.",
          avoidWhen: "You mean yourself specifically and clearly. “Uno” blurs that on purpose, which is sometimes exactly wrong.",
          register: "familiar",
          region: "Very common in Colombia and across Latin America.",
          related: ["se impersonal", "la gente", "todo el mundo", "nosotros"],
          example: {
            target: "Antes uno vivía del barrio.",
            translation: "People used to make a living off the neighborhood."
          }
        },
        {
          term: "el arriendo",
          explanation: "Rent. Colombia uses “arriendo” and “arrendar” where Spain says “alquiler” and “alquilar”, and the difference is one of the clearest regional markers in everyday vocabulary.",
          literal: "the leasing",
          useWhen: "Anything to do with renting a home or a business: “Subieron el arriendo”, “Estoy buscando arriendo”.",
          avoidWhen: "Writing for a Spanish audience, where “alquiler” is the expected word.",
          register: "neutral",
          region: "Colombia, Chile and parts of the Andes; “alquiler” elsewhere.",
          related: ["arrendar", "el alquiler", "el canon", "la administración"],
          example: {
            target: "Subieron el arriendo y cerraron.",
            translation: "They put the rent up and it closed."
          }
        }
      ],
      note: "Spanish marks a past habit with a tense; English marks it with a phrase. That single difference is what makes this lesson worth its own place. “Bajaba a las seis” already means “I used to come down at six”, and adding “solía” is optional emphasis rather than the grammar doing its job. English cannot leave it implicit: “I came down at six” means one particular morning, so the language reaches for “used to” or “would” to signal the habit. Two consequences follow. First, an English speaker learning Spanish tends to over-use “solía”, producing correct but slightly heavy sentences where a bare imperfect would sound native. Second, the same speaker under-hears the imperfect, taking “abría a las cinco” as a description of one morning rather than of fifteen years. The companion skill is the contrast with the preterite. “Cerró” is one event; “cerraba” is what it did every night. Colombian speakers switch between them constantly and without effort, and the switch carries meaning that English would need extra words to convey. Watch for the pair “antes… ya no”, which frames the whole then-and-now movement in four words.",
      culture: [
        {
          label: "Usted is warmth in Bogotá, not distance",
          body: "Marcela and Don Hernando use usted throughout a conversation that is plainly affectionate. In Bogotá this is unremarkable: usted is the default with neighbors, shopkeepers, and often within families — many rolos use it with their own children and partners. Learners arriving from a textbook that presents usted as cold, or as reserved for officials, consistently misread these exchanges. The formality here is doing no social work at all beyond being the ordinary way people speak. Switching to tú to seem friendly would be the actual mistake."
        },
        {
          label: "The bakery on the corner is a real institution",
          body: "The neighborhood panadería in Colombia opens very early, sells bread by the unit, and functions as an informal meeting point in a way that a supermarket cannot. Buying bread at six and staying to talk, as Don Hernando describes, is a genuine daily pattern rather than nostalgia. Rising rents in Bogotá neighborhoods like Chapinero have closed a great many of them, which is why this particular past habit carries some weight: the tense is describing a way of living that has actually ended."
        },
        {
          label: "Uno is how Colombians generalize without preaching",
          body: "“Antes uno vivía del barrio” includes the speaker without singling him out, and states a general truth without claiming to speak for everyone. English has no comfortable equivalent — “one” sounds stiff, and “you” can sound accusatory — so translations usually reach for “people”. In Colombian speech “uno” is everywhere, and it carries a mild modesty: the speaker is offering his experience as ordinary rather than special. Noticing it is a good way to hear when someone is generalizing gently rather than asserting."
        }
      ],
      pitfalls: [
        {
          mistake: "Antes la panadería abrió a las cinco todos los días.",
          whyItFails: "The preterite “abrió” reports one completed opening. With “antes” and “todos los días” the sentence contradicts itself: a repeated habit needs the imperfect.",
          sayInstead: "Antes la panadería abría a las cinco todos los días."
        },
        {
          mistake: "Yo solía bajaba a las seis a comprar el pan.",
          whyItFails: "“Soler” takes an infinitive, not a conjugated verb. The habit is already marked once by “solía”, so marking it again on the second verb is doubling up.",
          sayInstead: "Yo solía bajar a las seis a comprar el pan."
        },
        {
          mistake: "Todavía no voy a esa panadería, la cerraron hace años.",
          whyItFails: "“Todavía no” means “not yet”, which implies you still intend to. To say a habit has ended you need “ya no”.",
          sayInstead: "Ya no voy a esa panadería, la cerraron hace años."
        },
        {
          mistake: "Antes de esto era otra cosa en el barrio.",
          whyItFails: "“Antes de” needs something to come before — a noun or an infinitive. Standing alone as “in the past”, the word is simply “antes”.",
          sayInstead: "Antes esto era otra cosa en el barrio."
        }
      ],
      variations: [
        {
          form: "Antes esa panadería abría a las cinco.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The default. The bare imperfect with “antes” is what a Colombian would actually say."
        },
        {
          form: "Esa panadería solía abrir a las cinco.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "When you want the habit stated explicitly, or in writing where the imperfect alone might read as description."
        },
        {
          form: "Esa panadería acostumbraba abrir a las cinco.",
          register: "formal",
          region: "Latin America",
          whenToUse: "Written or careful speech. Slightly old-fashioned and noticeably more formal than “solía”."
        },
        {
          form: "En esa época esa panadería abría a las cinco.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "When you want to anchor the habit to a specific period rather than a vague past."
        },
        {
          form: "Esa panadería abría a las cinco, ¿se acuerda?",
          register: "courteous",
          region: "Colombia-wide",
          whenToUse: "Talking with someone who lived through the same period, inviting them to confirm it."
        }
      ],
      prompt: "Don Hernando wants to say the bakery opened at five every day for years — a habit, not one morning. Which is right?",
      choices: [
        "Antes esa panadería abrió a las cinco de la mañana, todos los días.",
        "Antes esa panadería ha abierto a las cinco de la mañana, todos los días.",
        "Antes esa panadería abría a las cinco de la mañana, todos los días."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Don Hernando says “Bajaba a las seis… Ya no.” What does “ya no” add?",
          choices: [
            "That the habit has stopped and he no longer does it.",
            "That he has not started doing it yet but intends to.",
            "That he goes down even earlier than six these days."
          ],
          answer: 0,
          tests: "ya no as the closing of a past habit, against todavía no"
        },
        {
          prompt: "Why does Marcela ask “¿Y por qué cerró?” with the preterite instead of “cerraba”?",
          choices: [
            "Because the preterite is always used in questions about the past.",
            "Because the closing was a single completed event, not something repeated.",
            "Because “cerraba” is not a real form of the verb cerrar."
          ],
          answer: 1,
          tests: "preterite for a completed event against imperfect for a habit"
        },
        {
          prompt: "Which sentence uses “soler” correctly?",
          choices: [
            "Yo solía bajaba a las seis todos los días sin falta.",
            "Yo solía a bajar a las seis todos los días sin falta.",
            "Yo solía bajar a las seis todos los días sin falta."
          ],
          answer: 2,
          tests: "soler takes a bare infinitive"
        }
      ]
    },
    en: {
      title: "Used to y would: los hábitos que se acabaron",
      situation: "Un vecino mayor le cuenta cómo era la cuadra antes, y qué cosas ya no se hacen.",
      setting: {
        who: "Mr. Hollis tiene setenta y cuatro años y vive en esta cuadra de Austin desde 1979. Marcela llegó al edificio hace cuatro meses y tiene treinta y uno. En inglés no hay usted, pero la diferencia de edad se marca con el apellido y el “Mr.”, que ella usa y él no le devuelve.",
        what: "Una conversación de portal que nadie planeó: Marcela preguntó por una panadería cerrada y recibió quince años de historia del barrio. El tono es amable y algo nostálgico.",
        when: "Cerca de las seis de la tarde, cuando él está afuera y la gente vuelve del trabajo. Suficiente para hablar bien, no tanto como para que la inviten a entrar.",
        where: "La entrada de un edificio de ocho pisos en Austin, Texas. Inglés estadounidense del sur, pausado, con muchas contracciones y frases cortas.",
        why: "A Mr. Hollis le gusta ser el que se acuerda. Marcela quiere entender de verdad por qué la cuadra se siente como se siente, y preguntarle al vecino más antiguo es el camino más corto."
      },
      address: {
        form: "mixed",
        who: "Marcela le dice “Mr. Hollis”; él la llama “Marcela”. Ninguno cambia durante la conversación.",
        why: "El inglés no tiene usted, así que el respeto por la edad se marca de otra manera: título más apellido en una dirección, nombre de pila en la otra. Ese desbalance es normal y no incomoda a nadie.",
        ifYouSwitch: "Si Marcela lo llamara “Bill” sin que él se lo ofrezca, sonaría demasiado confianzuda para el sur de Estados Unidos. Si él la llamara “Ms. Ramírez”, sonaría a que la está poniendo a distancia o a que está molesto."
      },
      dialogue: [
        {
          speaker: "Marcela",
          target: "Mr. Hollis, has that bakery on the corner always been closed?",
          translation: "Don Hernando, ¿esa panadería de la esquina siempre estuvo cerrada?",
          pronunciation: "MÍS-ter JÁ-lis, jas dat BÉI-ke-ri on da KÓR-ner ÓL-weis bin klousd",
          literal: "Señor Hollis, ha esa panadería en la esquina siempre estado cerrada?",
          why: "“Has… always been” es presente perfecto: pregunta por algo que llega hasta hoy. El español aquí usaría el pretérito “estuvo”, y esa diferencia de tiempo es constante entre los dos idiomas."
        },
        {
          speaker: "Mr. Hollis",
          target: "Oh, no. That bakery used to open at five in the morning, every single day.",
          translation: "No, qué va. Antes esa panadería abría a las cinco de la mañana, todos los días.",
          pronunciation: "ou, nou. dat BÉI-ke-ri yust tu Ó-pen at faiv in da MÓR-ning, ÉV-ri SÍN-gal dei",
          literal: "Oh, no. Esa panadería usada a abrir a las cinco en la mañana, cada solo día.",
          why: "Aquí está el corazón de la lección. El inglés no puede dejar el hábito dentro del verbo como hace el imperfecto español: necesita “used to” para decir que esto pasaba una y otra vez."
        },
        {
          speaker: "Marcela",
          target: "Really? And did you use to go every day, or just on weekends?",
          translation: "¿En serio? ¿Y usted solía ir todos los días o solo los fines de semana?",
          pronunciation: "RÍ-li? and did yu yus tu gou ÉV-ri dei, or yast on UÍK-ends",
          literal: "Realmente? Y hiciste tú usar a ir cada día, o solo en fines-de-semana?",
          why: "Ojo con la ortografía en la pregunta: “did you use to”, sin la de. El auxiliar “did” ya lleva el pasado, así que el verbo principal vuelve a su forma base, igual que en “did you go”."
        },
        {
          speaker: "Mr. Hollis",
          target: "Every day. I'd come down at six, buy the bread, and stay talking a while. Not anymore.",
          translation: "Todos los días. Bajaba a las seis, compraba el pan y me quedaba conversando un rato. Ya no.",
          pronunciation: "ÉV-ri dei. aid kam daun at siks, bai da bred, and stei TÓ-king a uáil. nat É-ni-mor",
          literal: "Cada día. Yo-would venir abajo a las seis, comprar el pan, y quedarme hablando un rato. No más.",
          why: "“I'd” es la contracción de “I would”, que sirve para hábitos del pasado igual que “used to”. Y “not anymore” cierra la costumbre, exactamente como el “ya no” del español."
        },
        {
          speaker: "Marcela",
          target: "And why did it close? Because the place has been empty for years, hasn't it?",
          translation: "¿Y por qué cerró? Porque el local lleva años vacío, ¿no?",
          pronunciation: "and uái did it klous? bi-KÓS da pleis jas bin ÉM-ti for yirs, JÁ-sent it",
          literal: "Y por-qué hizo eso cerrar? Porque el lugar ha estado vacío por años, no-ha eso?",
          why: "Fíjese en la coletilla final: el español dice “¿no?” y el inglés tiene que reconstruir el auxiliar y voltear la polaridad — “has” afirmativo se convierte en “hasn't it”."
        },
        {
          speaker: "Mr. Hollis",
          target: "They raised the rent. People used to make a living off this block; now the block makes its living off the people moving in.",
          translation: "Subieron el arriendo. Antes uno vivía del barrio; ahora el barrio vive de los que llegan.",
          pronunciation: "dei reisd da rent. PÍ-pol yust tu meik a LÍ-ving of dis blak; nau da blak meiks its LÍ-ving of da PÍ-pol MÚ-ving in",
          literal: "Ellos subieron la renta. Gente usada a hacer un vivir de esta cuadra; ahora la cuadra hace su vivir de la gente moviéndose adentro.",
          why: "Donde el español dice “uno vivía”, el inglés dice “people used to make a living”. El inglés no tiene el “uno” impersonal, así que nombra al sujeto genérico: “people”, “you” o “everybody”."
        }
      ],
      vocabulary: [
        {
          term: "used to + verbo",
          explanation: "La forma estándar para un hábito del pasado que ya no ocurre. Es lo que el español resuelve con el imperfecto, y en inglés no es opcional: sin ella, la frase se lee como un solo hecho puntual.",
          literal: "solía / antes ... -ía",
          useWhen: "Costumbres pasadas y estados terminados: “I used to live in Houston”, “She used to smoke”.",
          avoidWhen: "Habla del presente. No existe “I use to go” con ese sentido; para hábitos actuales se usa el presente simple más un adverbio: “I usually go”.",
          register: "neutro",
          region: "Universal.",
          related: ["would", "no longer", "back then", "not anymore"],
          example: {
            target: "That bakery used to open at five.",
            translation: "Esa panadería abría a las cinco."
          }
        },
        {
          term: "did you use to ... ?",
          explanation: "La pregunta y la negación pierden la de final, porque el pasado ya lo carga el auxiliar “did”. Escribir “did you used to” es un error muy extendido incluso entre nativos.",
          literal: "¿solías ...?",
          useWhen: "Preguntar por costumbres pasadas: “Did you use to work there?”, “I didn't use to like it”.",
          avoidWhen: "En afirmaciones, donde sí va la de: “I used to work there”.",
          register: "neutro",
          region: "Universal.",
          related: ["used to", "didn't use to", "would", "back then"],
          example: {
            target: "Did you use to go every day?",
            translation: "¿Solía ir todos los días?"
          }
        },
        {
          term: "would (+ always / often / usually)",
          explanation: "Otra manera de contar hábitos pasados, muy usada al narrar. Sirve para acciones repetidas, pero no para estados: se dice “I used to live there”, nunca “I would live there”.",
          literal: "solía / -ía",
          useWhen: "Narrar una rutina, sobre todo encadenando acciones: “I'd come down at six, buy the bread, and stay a while”.",
          avoidWhen: "El verbo describe un estado — vivir, tener, ser, gustar. Ahí solo funciona “used to”.",
          register: "neutro",
          region: "Universal; muy frecuente en relatos orales.",
          related: ["used to", "I'd", "back then", "every day"],
          example: {
            target: "I'd come down at six and buy the bread.",
            translation: "Bajaba a las seis y compraba el pan."
          }
        },
        {
          term: "not anymore",
          explanation: "Cierra la costumbre: se hacía y ya no. Es el equivalente exacto del “ya no” colombiano, y suele ir sola al final como frase completa.",
          literal: "ya no",
          useWhen: "Marcar que algo terminó: “Not anymore”, “I don't go there anymore”.",
          avoidWhen: "Quiere decir “todavía no”; eso es “not yet”, que apunta al futuro y no al pasado.",
          register: "neutro",
          region: "Universal; también se escribe “any more” en inglés británico.",
          related: ["no longer", "not yet", "used to", "these days"],
          example: {
            target: "I'd stay talking a while. Not anymore.",
            translation: "Me quedaba conversando un rato. Ya no."
          }
        },
        {
          term: "make a living",
          explanation: "Ganarse la vida. El inglés lo construye con “make”, no con “win” ni con “earn the life”, y es una de esas combinaciones fijas que hay que memorizar entera.",
          literal: "hacer un vivir",
          useWhen: "Hablar de cómo se sostiene alguien económicamente: “He makes a living off the block”.",
          avoidWhen: "Habla del salario concreto; eso es “earn” más la cifra: “She earns forty thousand a year”.",
          register: "neutro",
          region: "Universal.",
          related: ["earn", "get by", "livelihood", "support yourself"],
          example: {
            target: "People used to make a living off this block.",
            translation: "Antes uno vivía del barrio."
          }
        },
        {
          term: "raise the rent",
          explanation: "Subir el arriendo. “Raise” es el verbo transitivo — alguien sube algo — mientras que “rise” es intransitivo, y confundirlos es uno de los tropiezos clásicos.",
          literal: "levantar la renta",
          useWhen: "Cuando alguien concreto sube un precio: “They raised the rent”.",
          avoidWhen: "El precio sube solo, sin agente: ahí es “rents rose” o “the rent went up”.",
          register: "neutro",
          region: "Universal; “rent” en Estados Unidos cubre tanto vivienda como local.",
          related: ["rent", "go up", "rise", "landlord"],
          example: {
            target: "They raised the rent and it closed.",
            translation: "Subieron el arriendo y cerró."
          }
        },
        {
          term: "the block",
          explanation: "La cuadra, y por extensión el vecindario inmediato. En Estados Unidos es la unidad natural para hablar del barrio, más pequeña que “neighborhood”.",
          literal: "la cuadra",
          useWhen: "Referirse al entorno inmediato: “I've lived on this block since 1979”.",
          avoidWhen: "Habla de una zona amplia de la ciudad; ahí es “neighborhood” o “area”.",
          register: "neutro",
          region: "Inglés estadounidense.",
          related: ["neighborhood", "street", "around the corner", "down the road"],
          example: {
            target: "I've lived on this block since 1979.",
            translation: "Vivo en esta cuadra desde 1979."
          }
        }
      ],
      note: "El español marca el hábito pasado con el tiempo verbal; el inglés lo marca con una frase. Por eso “bajaba a las seis” ya significa “I used to come down at six”, mientras que el inglés “I came down at six” se entiende como una sola mañana concreta. Para un hispanohablante esto tiene una consecuencia práctica inmediata: traducir el imperfecto por el pasado simple borra el hábito y cambia el sentido de la frase. Hay dos herramientas y no son intercambiables. “Used to” sirve para acciones y para estados: “I used to live there”, “I used to have a car”. “Would” sirve solo para acciones repetidas; con verbos de estado es agramatical, así que “I would live there” no significa lo que usted quiere. Además “would” necesita que el contexto pasado ya esté establecido, razón por la cual los relatos suelen abrir con “used to” y continuar con “would”. Dos detalles de escritura cierran el tema. En preguntas y negaciones la de desaparece — “did you use to”, “I didn't use to” — porque el pasado lo carga el auxiliar. Y “used to” no tiene presente: para un hábito actual se dice “I usually…”, nunca “I use to…”.",
      culture: [
        {
          label: "El apellido marca la edad donde el inglés no tiene usted",
          body: "Marcela dice “Mr. Hollis” y recibe “Marcela”. Ese desbalance, que en español sonaría raro, es completamente normal en Estados Unidos y sobre todo en el sur: los mayores reciben título y apellido hasta que ofrecen su nombre de pila, y ofrecerlo es un gesto explícito (“call me Bill”). Un hispanohablante acostumbrado a que usted y tú hagan ese trabajo suele saltarse el paso y tutear de entrada, lo que no ofende pero se nota. La regla práctica es sencilla: use título y apellido con alguien mayor hasta que le digan lo contrario."
        },
        {
          label: "Would para narrar, used to para empezar",
          body: "Mr. Hollis abre con “used to” y sigue con “I'd”. Ese patrón es el más natural en un relato oral estadounidense: la primera frase instala el marco de hábito pasado y, una vez instalado, “would” lleva el resto sin repetir la fórmula. Quien usa “used to” en cada frase se hace entender perfectamente pero suena a manual. Escuchar dónde cambia el hablante es una de las mejores maneras de aprender a narrar en inglés."
        },
        {
          label: "Los barrios que suben de precio suenan igual en los dos idiomas",
          body: "La panadería cerrada por el arriendo es la misma historia en Chapinero y en Austin, y en ambas ciudades se cuenta con la misma estructura gramatical: un hábito pasado y un “ya no”. Vale la pena notar que el inglés estadounidense dice “the block” donde el colombiano dice “el barrio”, y que esa diferencia de escala no es casual: la cuadra estadounidense es una unidad social real, con su propia identidad, mientras que el barrio colombiano abarca más y suele tener nombre propio."
        }
      ],
      pitfalls: [
        {
          mistake: "Did you used to go every day to the bakery?",
          whyItFails: "Con el auxiliar “did”, el verbo principal vuelve a su forma base. El pasado ya está marcado una vez y no se marca dos.",
          sayInstead: "Did you use to go every day to the bakery?"
        },
        {
          mistake: "I would live in Houston before I moved here.",
          whyItFails: "“Would” no admite verbos de estado como “live”, “have” o “be”. Para un estado pasado la única opción es “used to”.",
          sayInstead: "I used to live in Houston before I moved here."
        },
        {
          mistake: "I use to go to that bakery every morning now.",
          whyItFails: "“Used to” solo existe en pasado. Para un hábito actual el inglés usa el presente simple con un adverbio de frecuencia.",
          sayInstead: "I usually go to that bakery every morning."
        },
        {
          mistake: "The bakery opened at five every day for fifteen years.",
          whyItFails: "El pasado simple sin marca de hábito se lee como un hecho puntual, así que la frase choca con “every day for fifteen years”. Es exactamente el error de traducir el imperfecto por el pasado simple.",
          sayInstead: "The bakery used to open at five every day for fifteen years."
        }
      ],
      variations: [
        {
          form: "That bakery used to open at five.",
          register: "neutro",
          region: "Universal",
          whenToUse: "La opción por defecto y la más segura. Sirve para acciones y para estados."
        },
        {
          form: "That bakery would open at five, back then.",
          register: "familiar",
          region: "Universal",
          whenToUse: "Dentro de un relato, cuando el marco de pasado ya está establecido y hay una acción repetida."
        },
        {
          form: "That bakery opened at five in those days.",
          register: "neutro",
          region: "Universal",
          whenToUse: "Cuando una expresión de tiempo como “in those days” ya deja claro que se trata de una costumbre."
        },
        {
          form: "That bakery no longer opens at five.",
          register: "cortés",
          region: "Universal",
          whenToUse: "En escritura o en registro cuidado, para decir que la costumbre terminó."
        },
        {
          form: "That bakery doesn't open at five anymore.",
          register: "familiar",
          region: "Inglés estadounidense hablado",
          whenToUse: "La versión hablada y corriente de lo mismo, con “anymore” al final."
        }
      ],
      prompt: "Mr. Hollis quiere decir que la panadería abría a las cinco todos los días durante años, no una sola mañana. ¿Cuál es correcta?",
      choices: [
        "That bakery used to open at five in the morning, every single day.",
        "That bakery would be opening at five in the morning, every single day.",
        "That bakery opened at five in the morning, every single day."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál está bien escrita?",
          choices: [
            "Did you used to go to that bakery on the weekends?",
            "Did you use to go to that bakery on the weekends?",
            "Did you using to go to that bakery on the weekends?"
          ],
          answer: 1,
          tests: "la de desaparece cuando el auxiliar did lleva el pasado"
        },
        {
          prompt: "¿Por qué no se puede decir “I would live in Houston”?",
          choices: [
            "Porque “would” solo aparece en preguntas y nunca en afirmaciones.",
            "Porque “Houston” exige siempre el presente perfecto en inglés.",
            "Porque “would” no funciona con verbos de estado como “live”; ahí va “used to”."
          ],
          answer: 2,
          tests: "would para acciones repetidas, used to también para estados"
        },
        {
          prompt: "Quiere decir “Ya no voy a esa panadería”. ¿Cuál sirve?",
          choices: [
            "I don't go to that bakery yet.",
            "I don't go to that bakery already.",
            "I don't go to that bakery anymore."
          ],
          answer: 2,
          tests: "not anymore frente a not yet"
        }
      ]
    }
  },
  {
    id: "checking-the-plan-in-barranquilla",
    level: "Developing · Social life",
    skills: ["grammar", "listening", "speaking", "register", "context"],
    domain: "plans-and-time",
    register: "familiar",
    structure: "confirmation-tags",
    review: "pending",
    es: {
      title: "Right? Confirming without asking again",
      situation: "Two friends wrap up the details of a trip, and each one confirms what they think has already been made clear.",
      setting: {
        who: "Kelly and Duván have been friends since school and are organizing a weekend trip with four other people. Neither is in charge, which is exactly why so much confirming is going on.",
        what: "A five-minute check-through of arrangements already half-agreed in a group chat: who is driving, what time, who is paying for the cabin. Nothing new is decided; everything is confirmed.",
        when: "Thursday evening, two days before they leave. Late enough that changes would be annoying, early enough that they are still possible.",
        where: "A street corner in Barranquilla, standing up, with music from somewhere nearby. Costeño Spanish — fast, clipped, with the ends of words dropped and a lot of confirming.",
        why: "Kelly wants to leave the conversation certain, because in a group of six the person who assumed wrong ends up paying for it. Duván wants to be sure he is not the only one who thinks the plan is settled."
      },
      address: {
        form: "tú",
        who: "Kelly and Duván use tú throughout, as costeño friends of the same age normally do.",
        why: "On the Caribbean coast tú is the everyday form between friends, and it dominates far more than in Bogotá or Medellín. Usted here would sound stiff or joking.",
        ifYouSwitch: "Usted between these two would land as sarcasm or as a signal that something is wrong. Vos is not used on the coast and would mark you immediately as being from elsewhere."
      },
      dialogue: [
        {
          speaker: "Kelly",
          target: "Entonces salimos el sábado a las seis de la mañana, ¿cierto?",
          translation: "So we're leaving Saturday at six in the morning, right?",
          pronunciation: "en-TÓN-ses sa-LÍ-mos el SÁ-ba-do a las séis de la ma-ÑÁ-na, SIÉR-to",
          literal: "Then we-leave the Saturday at the six of the morning, certain?",
          why: "“¿Cierto?” is invariable. It does not change for the verb, the tense or the person — one tag handles every sentence, which is the single biggest difference from English."
        },
        {
          speaker: "Duván",
          target: "Sí, a las seis. Tú llevas el carro, ¿no?",
          translation: "Yes, at six. You're bringing the car, aren't you?",
          pronunciation: "SÍ, a las séis. tu YÉ-bas el KÁ-rro, no",
          literal: "Yes, at the six. You carry the car, no?",
          why: "“¿No?” after an affirmative statement expects agreement. It is the lightest of the tags and the most common in fast speech."
        },
        {
          speaker: "Kelly",
          target: "No, el carro lo lleva Andrés. Yo pago la cabaña, ¿te acuerdas?",
          translation: "No, Andrés is bringing the car. I'm paying for the cabin — remember?",
          pronunciation: "no, el KÁ-rro lo YÉ-ba an-DRÉS. yo PÁ-go la ka-BÁ-ña, te a-KUÉR-das",
          literal: "No, the car it carries Andrés. I pay the cabin, to-you you-remember?",
          why: "“¿Te acuerdas?” is not a grammatical tag but does the same social work: it checks a shared memory rather than a fact, and softens the correction that came before it."
        },
        {
          speaker: "Duván",
          target: "Ah, verdad. Y no hay que llevar comida, ¿verdad? Porque allá hay tienda.",
          translation: "Oh, true. And we don't have to bring food, do we? Because there's a shop up there.",
          pronunciation: "a, ber-DÁD. i no ai ke ye-BÁR ko-MÍ-da, ber-DÁD, POR-ke a-YÁ ai TIÉN-da",
          literal: "Ah, truth. And not there-is that to-carry food, truth? Because there there-is shop.",
          why: "The sentence is negative and the tag does not change. Spanish keeps “¿verdad?” whatever the polarity, where English would have to switch to “do we?”."
        },
        {
          speaker: "Kelly",
          target: "Hay tienda, pero cierra temprano. Mejor llevamos algo, ¿o no?",
          translation: "There's a shop, but it closes early. Better if we take something, don't you think?",
          pronunciation: "ai TIÉN-da, PÉ-ro SIÉ-rra tem-PRÁ-no. me-JÓR ye-BÁ-mos ÁL-go, o no",
          literal: "There-is shop, but it-closes early. Better we-carry something, or not?",
          why: "“¿O no?” genuinely opens the question rather than asking for agreement. It is the tag you use when you actually want an opinion back."
        },
        {
          speaker: "Duván",
          target: "De una. Yo llevo el desayuno y tú el almuerzo, ¿listo?",
          translation: "Absolutely. I'll bring breakfast and you bring lunch — deal?",
          pronunciation: "de Ú-na. yo YÉ-bo el de-sa-YÚ-no i tu el al-MUÉR-so, LÍS-to",
          literal: "Of one. I carry the breakfast and you the lunch, ready?",
          why: "“¿Listo?” closes an agreement rather than checking a fact. Colombians use it constantly to seal the end of a negotiation."
        }
      ],
      vocabulary: [
        {
          term: "¿cierto?",
          explanation: "The most characteristically Colombian confirmation tag. Invariable, neutral in register, and usable after almost any statement to ask the listener to confirm it.",
          literal: "certain?",
          useWhen: "Confirming something you believe is already agreed: “Salimos a las seis, ¿cierto?”",
          avoidWhen: "You genuinely do not know and want real information — that calls for a full question, not a tag.",
          register: "neutral",
          region: "Very strongly Colombian; understood everywhere but a regional marker abroad.",
          related: ["¿verdad?", "¿no?", "¿sí o no?", "¿o no?"],
          example: {
            target: "Salimos el sábado, ¿cierto?",
            translation: "We're leaving Saturday, right?"
          }
        },
        {
          term: "¿no?",
          explanation: "The lightest tag, tacked onto an affirmative statement to invite agreement. It is quick, informal, and everywhere in fast speech.",
          literal: "no?",
          useWhen: "Casual confirmation among friends: “Tú llevas el carro, ¿no?”",
          avoidWhen: "The statement is already negative — “No vienes, ¿no?” is confusing. Use “¿cierto?” or “¿verdad?” there.",
          register: "familiar",
          region: "Universal Spanish.",
          related: ["¿cierto?", "¿verdad?", "¿ya?", "¿ah?"],
          example: {
            target: "Tú llevas el carro, ¿no?",
            translation: "You're bringing the car, aren't you?"
          }
        },
        {
          term: "¿verdad?",
          explanation: "Slightly more emphatic than “¿no?” and works after both affirmative and negative statements without changing form. Useful when you want firm confirmation.",
          literal: "truth?",
          useWhen: "Checking something that matters, or after a negative: “No hay que llevar comida, ¿verdad?”",
          avoidWhen: "Very casual chatter, where it can sound a touch insistent next to a quick “¿no?”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["¿cierto?", "¿no?", "de verdad", "¿en serio?"],
          example: {
            target: "No hay que llevar comida, ¿verdad?",
            translation: "We don't have to bring food, do we?"
          }
        },
        {
          term: "¿o no?",
          explanation: "The tag that genuinely reopens the question. Where “¿cierto?” expects yes, “¿o no?” invites the listener to disagree, which makes it useful for proposals.",
          literal: "or not?",
          useWhen: "Floating an idea and wanting a real reaction: “Mejor llevamos algo, ¿o no?”",
          avoidWhen: "You want confirmation rather than debate — it can sound like you are challenging the person.",
          register: "familiar",
          region: "Colombia-wide.",
          related: ["¿cierto?", "¿sí o no?", "¿qué opinas?", "¿te parece?"],
          example: {
            target: "Mejor llevamos algo, ¿o no?",
            translation: "Better if we take something, don't you think?"
          }
        },
        {
          term: "¿listo?",
          explanation: "Closes a deal rather than checking a fact: are we agreed? Colombians use “listo” constantly as both a question and an answer.",
          literal: "ready?",
          useWhen: "Sealing an arrangement: “Yo llevo el desayuno y tú el almuerzo, ¿listo?”",
          avoidWhen: "Confirming information — “listo” asks for agreement to a plan, not for a fact to be verified.",
          register: "familiar",
          region: "Extremely Colombian, in this exact use.",
          related: ["de una", "hecho", "vale", "¿estamos?"],
          example: {
            target: "Yo llevo el desayuno, ¿listo?",
            translation: "I'll bring breakfast — deal?"
          }
        },
        {
          term: "de una",
          explanation: "Immediate, enthusiastic agreement: absolutely, right away, count me in. One of the most recognizable Colombian expressions.",
          literal: "of one",
          useWhen: "Accepting a plan without hesitation: “¿Vamos? — De una.”",
          avoidWhen: "Formal settings or with someone senior you do not know; it is friendly and young-sounding.",
          register: "familiar",
          region: "Colombia-wide, especially among younger speakers.",
          related: ["listo", "dale", "hecho", "de once"],
          example: {
            target: "¿Llevamos algo? — De una.",
            translation: "Should we bring something? — Absolutely."
          }
        },
        {
          term: "la cabaña",
          explanation: "A cabin or small rented house, typically outside the city for a weekend. Renting one between friends is a standard Colombian trip.",
          literal: "the cabin",
          useWhen: "Weekend accommodation in the countryside or near a river: “Yo pago la cabaña”.",
          avoidWhen: "You mean a hotel room or an apartment; those are “habitación” and “apartamento”.",
          register: "neutral",
          region: "Universal Spanish; the weekend-rental sense is very common in Colombia.",
          related: ["la finca", "el hospedaje", "el paseo", "el puente"],
          example: {
            target: "Yo pago la cabaña.",
            translation: "I'm paying for the cabin."
          }
        }
      ],
      note: "This is one of the few places where Spanish is decisively simpler than English, and knowing that is worth as much as the vocabulary. Spanish confirms with a single invariable tag. “¿Cierto?”, “¿no?”, “¿verdad?” attach to any sentence at all, in any tense, with any subject, and they do not change. The sentence can be affirmative or negative and the tag stays put: “Vienes, ¿cierto?” and “No vienes, ¿cierto?” are both fine. English does the opposite. It rebuilds the auxiliary from the main verb, matches the subject pronoun, and flips the polarity — “You're coming, aren't you?” but “You aren't coming, are you?”. Three separate decisions, every time. For an English speaker learning Spanish the lesson is one of relief: stop building tags and pick one. The genuine work is choosing among them by intention rather than by grammar, because they are not interchangeable in tone. “¿Cierto?” and “¿verdad?” ask for confirmation of something you already believe. “¿No?” is the same thing but lighter and quicker. “¿O no?” actually invites disagreement. And “¿listo?” is not checking a fact at all — it is closing a deal.",
      culture: [
        {
          label: "Costeño Spanish is fast, and the tags survive the speed",
          body: "Barranquilla Spanish drops final consonants and runs words together — “lo do” for “los dos”, “pa'lla” for “para allá” — at a pace that catches out learners trained on Bogotá recordings. The confirmation tags are unusually useful in that environment precisely because they are short and invariable: even when you have missed half a sentence, catching “¿cierto?” at the end tells you a response is expected. Learners on the coast often find that answering the tag correctly buys them time to reconstruct the rest."
        },
        {
          label: "Confirming everything is a group-planning norm, not distrust",
          body: "Six people going away for a weekend generates a great deal of confirming, and in Colombia that confirming is done out loud and repeatedly. Restating what has been agreed is not a sign that anyone is being doubted; it is how a group without a leader keeps a plan intact. A foreigner who says “yes, we already settled that” is technically right and socially off — the restatement is the mechanism, not a redundancy."
        },
        {
          label: "Listo is the most useful word in Colombia",
          body: "“Listo” means ready, but in practice it works as agreement, acknowledgment, closure and farewell. It ends negotiations (“¿listo?”), accepts offers (“listo”), confirms understanding, and closes phone calls. Together with “de una” and “dale” it forms the core of Colombian agreement vocabulary. A learner who masters just these three will sound noticeably more fluent in conversation than one who has memorized twice the grammar but still answers every proposal with “sí, está bien”."
        }
      ],
      pitfalls: [
        {
          mistake: "Tú llevas el carro, ¿no llevas?",
          whyItFails: "This is an English tag translated into Spanish. Spanish tags never rebuild the verb — the whole point is that one short word does the job.",
          sayInstead: "Tú llevas el carro, ¿no?"
        },
        {
          mistake: "No hay que llevar comida, ¿no?",
          whyItFails: "Stacking “¿no?” onto an already negative sentence produces a double negative that leaves the listener unsure what a yes would mean. Colombians switch tag here.",
          sayInstead: "No hay que llevar comida, ¿cierto?"
        },
        {
          mistake: "Salimos a las seis, ¿es cierto?",
          whyItFails: "“¿Es cierto?” is a real question meaning “is that true?”, and it implies you have doubts about what you just heard. The tag is the bare “¿cierto?”.",
          sayInstead: "Salimos a las seis, ¿cierto?"
        },
        {
          mistake: "Yo llevo el desayuno y tú el almuerzo, ¿cierto listo?",
          whyItFails: "The tags do not stack. Each does a different job — confirming a fact or closing a deal — and using two at once sounds like nervousness.",
          sayInstead: "Yo llevo el desayuno y tú el almuerzo, ¿listo?"
        }
      ],
      variations: [
        {
          form: "Salimos el sábado a las seis, ¿cierto?",
          register: "neutral",
          region: "Strongly Colombian",
          whenToUse: "The default confirmation. Safe with anyone, and unmistakably Colombian."
        },
        {
          form: "Salimos el sábado a las seis, ¿no?",
          register: "familiar",
          region: "Universal Spanish",
          whenToUse: "Quick, casual confirmation among friends, after an affirmative statement."
        },
        {
          form: "Salimos el sábado a las seis, ¿verdad?",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "When the detail matters and you want firmer confirmation, or after a negative statement."
        },
        {
          form: "¿Confirmamos entonces la salida del sábado a las seis?",
          register: "courteous",
          region: "Universal Spanish",
          whenToUse: "In writing, or with people you do not know well, where a bare tag would be too casual."
        },
        {
          form: "Salimos el sábado a las seis, ¿sí o no?",
          register: "familiar",
          region: "Colombia-wide",
          whenToUse: "When you want a decision now, with a hint of impatience or of joking pressure."
        }
      ],
      prompt: "Duván wants to confirm something he already believes: that they don't need to bring food. His sentence is negative. Which tag works?",
      choices: [
        "No hay que llevar comida, ¿no hay?",
        "No hay que llevar comida, ¿verdad?",
        "No hay que llevar comida, ¿no?"
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Kelly says “Mejor llevamos algo, ¿o no?” instead of “¿cierto?”. What changes?",
          choices: [
            "She is genuinely inviting Duván to disagree rather than expecting agreement.",
            "She is speaking more formally than she would with “¿cierto?”.",
            "She is asking about the past rather than about the plan for Saturday."
          ],
          answer: 0,
          tests: "¿o no? opens the question where ¿cierto? expects confirmation"
        },
        {
          prompt: "In English you say “You're bringing the car, aren't you?” Why is the Spanish tag shorter?",
          choices: [
            "Because Spanish speakers confirm less often than English speakers do.",
            "Because Spanish tags are invariable and never rebuild the verb or the pronoun.",
            "Because Spanish only allows tags after sentences in the present tense."
          ],
          answer: 1,
          tests: "the invariable Spanish tag against the English rebuilt auxiliary"
        },
        {
          prompt: "Duván ends with “¿listo?” rather than “¿cierto?”. What is he doing?",
          choices: [
            "Asking whether Kelly has finished getting ready for the trip.",
            "Checking a fact he is unsure about regarding the cabin.",
            "Closing the agreement rather than confirming a piece of information."
          ],
          answer: 2,
          tests: "listo as deal-closing rather than fact-checking"
        }
      ]
    },
    en: {
      title: "Isn't it? Las coletillas que el inglés reconstruye",
      situation: "Dos amigos cierran los detalles de un viaje y cada uno confirma lo que cree que ya quedó claro.",
      setting: {
        who: "Kelly y Devin son amigos desde el colegio y están organizando un fin de semana con otras cuatro personas. Ninguno manda, y por eso mismo hay tanto que confirmar.",
        what: "Un repaso de cinco minutos de acuerdos a medio cerrar en un chat de grupo: quién maneja, a qué hora, quién paga la cabaña. No se decide nada nuevo; se confirma todo.",
        when: "Jueves por la noche, dos días antes de salir. Ya es tarde para que un cambio no moleste, pero todavía se puede.",
        where: "Una esquina en Austin, Texas, de pie, con música de algún lado. Inglés estadounidense hablado, rápido, lleno de contracciones.",
        why: "Kelly quiere irse de la conversación con todo claro, porque en un grupo de seis el que asume mal termina pagándolo. Devin quiere asegurarse de que no es el único que cree que el plan ya está cerrado."
      },
      address: {
        form: "mixed",
        who: "Kelly y Devin se llaman por el nombre corto y no hay ninguna marca de formalidad.",
        why: "El inglés no distingue tú de usted, así que la confianza se oye en las contracciones (“we're”, “aren't”), en la velocidad y en el uso del nombre. Entre amigos de la misma edad, eso es lo normal.",
        ifYouSwitch: "Si usted pronuncia todo sin contraer — “You are bringing the car, are you not?” — no suena más correcto sino antiguo o irónico. En conversación entre amigos, la forma completa marca énfasis o molestia."
      },
      dialogue: [
        {
          speaker: "Kelly",
          target: "So we're leaving Saturday at six in the morning, aren't we?",
          translation: "Entonces salimos el sábado a las seis de la mañana, ¿cierto?",
          pronunciation: "sou uir LÍ-ving SÁ-tur-dei at siks in da MÓR-ning, ÁR-nt ui",
          literal: "Así estamos-saliendo sábado a seis en la mañana, no-estamos nosotros?",
          why: "Aquí está toda la lección. La frase es afirmativa (“we're”), así que la coletilla es negativa (“aren't”), repite el mismo auxiliar y añade el pronombre “we”. Tres decisiones que el español resuelve con “¿cierto?”."
        },
        {
          speaker: "Devin",
          target: "Yeah, six. You're bringing the car, aren't you?",
          translation: "Sí, a las seis. Tú llevas el carro, ¿no?",
          pronunciation: "yea, siks. yur BRÍN-ging da kar, ÁR-nt yu",
          literal: "Sí, seis. Tú-estás trayendo el carro, no-estás tú?",
          why: "Mismo mecanismo con otro pronombre: “you're” pide “aren't you”. Note que el auxiliar de la coletilla siempre sale de la frase principal, nunca se inventa."
        },
        {
          speaker: "Kelly",
          target: "No, Andrew's bringing the car. I'm paying for the cabin, remember?",
          translation: "No, el carro lo lleva Andrés. Yo pago la cabaña, ¿te acuerdas?",
          pronunciation: "nou, ÁN-drus BRÍN-ging da kar. aim PÉI-ing for da KÁ-bin, ri-MÉM-ber",
          literal: "No, Andrés-está trayendo el carro. Yo-estoy pagando por la cabaña, recuerdas?",
          why: "“Remember?” no es una coletilla gramatical, pero cumple la misma función social: comprueba un recuerdo compartido y suaviza la corrección que acaba de hacer."
        },
        {
          speaker: "Devin",
          target: "Oh, right. And we don't have to bring food, do we? There's a store up there.",
          translation: "Ah, verdad. Y no hay que llevar comida, ¿verdad? Porque allá hay tienda.",
          pronunciation: "ou, rait. and ui dount jav tu bring fud, du ui? ders a stor ap der",
          literal: "Oh, correcto. Y nosotros no tenemos a traer comida, hacemos nosotros? Hay una tienda arriba allá.",
          why: "La frase es negativa (“don't”), así que la coletilla es afirmativa (“do we?”). Es exactamente el punto en que el español no cambia nada y sigue diciendo “¿verdad?”."
        },
        {
          speaker: "Kelly",
          target: "There is a store, but it closes early. We should take something, shouldn't we?",
          translation: "Hay tienda, pero cierra temprano. Mejor llevamos algo, ¿o no?",
          pronunciation: "der is a stor, bat it KLÓU-ses ÉR-li. ui shud teik SÁM-zing, SHÚ-dent ui",
          literal: "Hay una tienda, pero ella cierra temprano. Nosotros deberíamos tomar algo, no-deberíamos nosotros?",
          why: "Con un modal, la coletilla repite el modal: “should” pide “shouldn't we”. La regla es siempre la misma — se toma el auxiliar de la frase, sea cual sea."
        },
        {
          speaker: "Devin",
          target: "For sure. I'll bring breakfast and you bring lunch. Sound good?",
          translation: "De una. Yo llevo el desayuno y tú el almuerzo, ¿listo?",
          pronunciation: "for shur. ail bring BRÉK-fast and yu bring lanch. saund gud",
          literal: "Por seguro. Yo traeré desayuno y tú traes almuerzo. Suena bien?",
          why: "“Sound good?” cierra el acuerdo en vez de confirmar un dato, igual que el “¿listo?” colombiano. No es una coletilla: es una fórmula de cierre."
        }
      ],
      vocabulary: [
        {
          term: "question tag (aren't you? / do we?)",
          explanation: "La coletilla inglesa se construye con el auxiliar de la frase principal más el pronombre sujeto, y con la polaridad invertida. Es una operación gramatical completa, no una palabra fija.",
          literal: "¿cierto? / ¿no?",
          useWhen: "Confirmar algo que usted ya cree: “You're coming, aren't you?”",
          avoidWhen: "No tiene ni idea de la respuesta; ahí se usa una pregunta normal.",
          register: "neutro",
          region: "Universal.",
          related: ["right?", "isn't it?", "don't you think?", "huh?"],
          example: {
            target: "You're bringing the car, aren't you?",
            translation: "Tú llevas el carro, ¿no?"
          }
        },
        {
          term: "right?",
          explanation: "El atajo del inglés estadounidense hablado: una sola palabra invariable que funciona como el “¿cierto?” colombiano y evita toda la reconstrucción del auxiliar.",
          literal: "¿cierto?",
          useWhen: "Conversación informal, sobre todo cuando la frase es larga: “We're leaving at six, right?”",
          avoidWhen: "Escritura formal o un examen de gramática, donde se espera la coletilla completa.",
          register: "familiar",
          region: "Muy frecuente en Estados Unidos.",
          related: ["question tag", "correct?", "yeah?", "isn't that right?"],
          example: {
            target: "We're leaving at six, right?",
            translation: "Salimos a las seis, ¿cierto?"
          }
        },
        {
          term: "polaridad invertida",
          explanation: "La regla central: frase afirmativa lleva coletilla negativa y frase negativa lleva coletilla afirmativa. “You're coming, aren't you?” frente a “You aren't coming, are you?”.",
          literal: "positivo pide negativo",
          useWhen: "Siempre que construya una coletilla estándar; no hay excepciones en el uso corriente.",
          avoidWhen: "Quiere sonar sorprendido o sarcástico: repetir la misma polaridad (“So you're coming, are you?”) cambia el tono por completo.",
          register: "neutro",
          region: "Universal.",
          related: ["auxiliary", "negative", "tag", "confirm"],
          example: {
            target: "You aren't coming, are you?",
            translation: "No vienes, ¿cierto?"
          }
        },
        {
          term: "don't you think?",
          explanation: "La coletilla que sí abre la pregunta de verdad, equivalente al “¿o no?” colombiano. Invita a que el otro discrepe en lugar de pedirle que confirme.",
          literal: "¿no crees? / ¿o no?",
          useWhen: "Proponer algo y querer una reacción real: “We should take something, don't you think?”",
          avoidWhen: "Quiere confirmación y no debate; suena a que está abriendo el tema otra vez.",
          register: "neutro",
          region: "Universal.",
          related: ["shouldn't we?", "right?", "how about", "what do you think"],
          example: {
            target: "We should take something, don't you think?",
            translation: "Mejor llevamos algo, ¿o no?"
          }
        },
        {
          term: "Sound good?",
          explanation: "Fórmula de cierre, no de confirmación: pregunta si el acuerdo queda bien así. Cumple la función del “¿listo?” colombiano.",
          literal: "¿suena bien?",
          useWhen: "Cerrar un plan ya negociado: “I'll bring breakfast, you bring lunch. Sound good?”",
          avoidWhen: "Comprobar un dato; para eso sirve una coletilla o “right?”.",
          register: "familiar",
          region: "Inglés estadounidense corriente.",
          related: ["deal?", "works for me", "we good?", "all set?"],
          example: {
            target: "I'll bring breakfast. Sound good?",
            translation: "Yo llevo el desayuno, ¿listo?"
          }
        },
        {
          term: "for sure",
          explanation: "Acuerdo inmediato y entusiasta, el equivalente funcional de “de una”. Muy común en el inglés estadounidense hablado.",
          literal: "por seguro",
          useWhen: "Aceptar un plan sin dudarlo: “Are we going? — For sure.”",
          avoidWhen: "Contextos formales o escritos; ahí se usa “certainly” o “absolutely”.",
          register: "familiar",
          region: "Estados Unidos.",
          related: ["absolutely", "definitely", "you bet", "sure thing"],
          example: {
            target: "Should we bring something? — For sure.",
            translation: "¿Llevamos algo? — De una."
          }
        },
        {
          term: "the cabin",
          explanation: "Casa pequeña que se alquila para un fin de semana, normalmente fuera de la ciudad. Alquilar una entre amigos es tan común en Texas como en Colombia.",
          literal: "la cabaña",
          useWhen: "Alojamiento de fin de semana en el campo o cerca de un lago: “I'm paying for the cabin”.",
          avoidWhen: "Se refiere a un hotel o a un apartamento; esos tienen sus propias palabras.",
          register: "neutro",
          region: "Universal; muy usado en Estados Unidos.",
          related: ["cottage", "lake house", "rental", "getaway"],
          example: {
            target: "I'm paying for the cabin.",
            translation: "Yo pago la cabaña."
          }
        }
      ],
      note: "Esta es una de las poquísimas zonas en las que el inglés es claramente más complicado que el español, y conviene saberlo antes de empezar. El español confirma con una coletilla invariable: “¿cierto?”, “¿no?”, “¿verdad?” se pegan a cualquier frase, en cualquier tiempo, con cualquier sujeto, y no cambian nunca. El inglés, en cambio, construye la coletilla desde cero cada vez, y hay que tomar tres decisiones seguidas. Primero, el auxiliar: se repite el de la frase (“you're” pide “are”, “we should” pide “should”), y si la frase no tiene ninguno se recurre a “do”, “does” o “did” (“You went, didn't you?”). Segundo, el pronombre: siempre sujeto, así que “Andrew's bringing the car, isn't he?”, nunca “isn't Andrew?”. Tercero, la polaridad: afirmativa pide negativa y viceversa. Dos avisos prácticos. “I am” tiene una coletilla irregular — “aren't I?” — que no sigue ninguna lógica y hay que memorizar. Y en el inglés estadounidense hablado existe una salida de emergencia perfectamente aceptable: “right?”, que es invariable y funciona igual que “¿cierto?”. Úsela sin culpa mientras automatiza el resto.",
      culture: [
        {
          label: "“Right?” es la puerta de escape y nadie la juzga",
          body: "Los manuales dedican páginas a las coletillas y los hablantes estadounidenses resuelven la mitad de los casos con un “right?” al final. No es una versión inferior: es lo que la gente realmente dice, sobre todo cuando la frase es larga o cuando el auxiliar resultaría complicado. Para un hispanohablante esto es una buena noticia estratégica: puede usar “right?” desde el primer día y ganar tiempo para automatizar las coletillas completas, que seguirá necesitando para escuchar y para escribir."
        },
        {
          label: "Confirmar mucho también es normal aquí",
          body: "Repasar en voz alta lo ya acordado antes de un viaje en grupo es tan común en Estados Unidos como en Colombia, y por la misma razón: en un grupo sin jefe, el que asume mal paga las consecuencias. Lo que cambia es el instrumento. Donde el colombiano repite “¿cierto?” cada dos frases, el estadounidense alterna coletillas, “right?” y fórmulas de cierre como “sound good?”. La densidad es parecida; la variedad es mayor."
        },
        {
          label: "La entonación decide si pregunta o afirma",
          body: "Una coletilla dicha con entonación ascendente pregunta de verdad: usted no está seguro y quiere respuesta. La misma coletilla con entonación descendente casi no pregunta nada — busca que el otro asienta. “You're coming, aren't you?” puede ser una duda genuina o una manera de dar por hecho el plan, y solo el tono lo distingue. Los hispanohablantes suelen producirlas todas con tono ascendente, lo que hace que suenen más inseguros de lo que pretenden. Bajar la voz en la coletilla es un cambio pequeño con un efecto grande."
        }
      ],
      pitfalls: [
        {
          mistake: "You're bringing the car, no?",
          whyItFails: "Es el “¿no?” español trasplantado. Se entiende, pero marca de inmediato a quien lo dice como hispanohablante; el inglés necesita la coletilla completa o “right?”.",
          sayInstead: "You're bringing the car, aren't you?"
        },
        {
          mistake: "We don't have to bring food, don't we?",
          whyItFails: "La frase ya es negativa, así que la coletilla tiene que ser afirmativa. Repetir la negación deja al oyente sin saber qué significaría un “yes”.",
          sayInstead: "We don't have to bring food, do we?"
        },
        {
          mistake: "Andrew's bringing the car, isn't Andrew?",
          whyItFails: "La coletilla siempre lleva pronombre, nunca el nombre otra vez. Repetir el sustantivo suena a traducción literal.",
          sayInstead: "Andrew's bringing the car, isn't he?"
        },
        {
          mistake: "I'm driving on Saturday, amn't I?",
          whyItFails: "El inglés no tiene contracción para “am not” en esta posición. La coletilla de “I am” es irregular y hay que aprenderla de memoria.",
          sayInstead: "I'm driving on Saturday, aren't I?"
        }
      ],
      variations: [
        {
          form: "We're leaving at six, aren't we?",
          register: "neutro",
          region: "Universal",
          whenToUse: "La coletilla completa y estándar. Es lo que se espera por escrito y en registro cuidado."
        },
        {
          form: "We're leaving at six, right?",
          register: "familiar",
          region: "Inglés estadounidense hablado",
          whenToUse: "La salida invariable, cómoda y muy frecuente en conversación. Equivale al “¿cierto?”."
        },
        {
          form: "We're leaving at six, correct?",
          register: "cortés",
          region: "Universal",
          whenToUse: "En trabajo o al confirmar datos por escrito, cuando quiere sonar preciso sin sonar seco."
        },
        {
          form: "Just to confirm — we're leaving at six?",
          register: "formal",
          region: "Universal",
          whenToUse: "Correos y contextos profesionales donde una coletilla resultaría demasiado coloquial."
        },
        {
          form: "We're still leaving at six, yeah?",
          register: "familiar",
          region: "Inglés estadounidense hablado",
          whenToUse: "Entre amigos, con tono relajado. “Yeah?” es aún más informal que “right?”."
        }
      ],
      prompt: "Devin quiere confirmar algo que ya cree: que no tienen que llevar comida. Su frase es negativa. ¿Cuál coletilla corresponde?",
      choices: [
        "We don't have to bring food, don't we?",
        "We don't have to bring food, do we?",
        "We don't have to bring food, isn't it?"
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál es la coletilla correcta para “Andrew's bringing the car”?",
          choices: [
            "Andrew's bringing the car, isn't he?",
            "Andrew's bringing the car, isn't Andrew?",
            "Andrew's bringing the car, doesn't he?"
          ],
          answer: 0,
          tests: "la coletilla usa pronombre y repite el auxiliar de la frase"
        },
        {
          prompt: "En español “¿cierto?” no cambia nunca. ¿Qué tiene que decidir el inglés cada vez?",
          choices: [
            "Solo si la frase va en presente o en pasado, nada más.",
            "El auxiliar, el pronombre sujeto y la polaridad invertida.",
            "Únicamente el pronombre, porque el auxiliar siempre es “do”."
          ],
          answer: 1,
          tests: "las tres decisiones de la coletilla inglesa"
        },
        {
          prompt: "Está hablando rápido y la frase es larga. ¿Qué recurso estadounidense le sirve?",
          choices: [
            "Terminar con “no?”, igual que en español.",
            "Terminar con “right?”, que es invariable.",
            "Omitir la coletilla y no confirmar nada."
          ],
          answer: 1,
          tests: "right? como coletilla invariable del inglés estadounidense"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/76-habits-and-checking.js");
