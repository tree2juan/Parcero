/*
 * Lesson block: foundation / carrying and leaving.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Every lesson spines on exactly one verb from data/curriculum.js, named in its
 * `verb` field so the coverage report can prove the curriculum is actually
 * taught rather than merely listed. This block takes the three motion verbs an
 * English speaker forever muddles: llevar (to take or carry away from here, and
 * to wear, and to have spent a stretch of time), traer (to bring toward here)
 * and dejar (to leave behind, to let, and to quit). The first two are the
 * deixis trap — Spanish pins them to where the speaker stands — and the third
 * is three verbs wearing one coat.
 *
 * The two directions are mirrors: same number of dialogue turns, same number of
 * vocabulary entries, same number of culture notes, pitfalls, variations and
 * practice questions, and the same optional slots filled on the same rows. That
 * is enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "taking-something-to-the-sunday-sancocho",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "familiar",
    pathways: ["foundation"],
    verb: "llevar",
    review: "pending",
    es: {
      title: "Qué llevar al sancocho del domingo",
      situation:
        "Alex se encuentra a Yina, una amiga costeña, en la puerta del edificio en Barranquilla. El domingo hay sancocho donde Wilmer, un amigo del barrio, y Yina le confirma que él también está invitado. Alex no sabe si debe aparecer con algo ni cómo vestirse, así que aprovecha para preguntarle a Yina, que se sabe todas las reglas de la costa.",
      setting: {
        who: "Yina grew up in Barranquilla and treats everyone on the block like family. Alex arrived three months ago for work and is still learning how coastal invitations work — who to greet, what to bring, how late is late.",
        what: "A quick doorway chat about a Sunday sancocho at a mutual friend's place, and what Alex should turn up with.",
        when: "A hot Friday evening, both of them coming home, the weekend's plans still loose.",
        where: "Barranquilla, on the Caribbean coast, outside a low apartment block where neighbors talk on the sidewalk in the cool of the evening.",
        why: "Because this is Alex's first real invitation into a coastal household, and getting the small things right — bringing something, dressing down, not stressing about the time — is what turns a work contact into a friend who saves you a bowl of sancocho."
      },
      address: {
        form: "tú",
        who: "Yina uses tú with Alex, and Alex uses tú straight back, which is simply how the Caribbean coast runs.",
        why: "On the coast tú is the everyday default among people of any age; usted can sound cold or distancing between friends. The warmth here lives in the tú, in nicknames like “mani”, and in the bright “¿qué más?”.",
        ifYouSwitch: "Reaching for usted with a coastal friend would feel oddly formal, as if Alex were keeping Yina at arm's length. Vos is not used in Barranquilla and would sound borrowed from Medellín or Cali."
      },
      dialogue: [
        {
          speaker: "Yina",
          target: "¿Qué más, Alex? ¿Vas a llevar algo pa'l sancocho donde Wilmer el domingo?",
          translation: "What's up, Alex? Are you going to take something to the sancocho at Wilmer's on Sunday?",
          pronunciation: "keh MAS, AH-leks? bas a yeh-BAR AL-go pal san-KO-cho DON-deh weel-MER el do-MEEN-go",
          literal: "What more, Alex? Are-you-going to take something for-the sancocho at Wilmer's the Sunday?",
          why: "“Llevar” is to carry something to a place away from where you stand now: the sancocho is over at Wilmer's, so from the sidewalk it is “over there”. Note the costeño “pa'l” for “para el”, and “¿qué más?”, the coast's everyday “what's up?”."
        },
        {
          speaker: "Alex",
          target: "Ey, sí voy. ¿Y qué llevo? No quiero llegar con las manos vacías.",
          translation: "Hey, yeah, I'm going. And what should I take? I don't want to turn up empty-handed.",
          pronunciation: "ey, see boy. ee keh YEH-bo? no KYEH-ro yeh-GAR kon las MA-nos ba-SEE-as",
          literal: "Hey, yes I-go. And what I-take? Not I-want to-arrive with the hands empty.",
          why: "“Llevo” is the present of llevar in the first person; Colombians use the plain present for “what should I take?” instead of a modal. “Llegar con las manos vacías”, to arrive with empty hands, is the fixed phrase for showing up without a gift, which is quietly frowned on."
        },
        {
          speaker: "Yina",
          target: "Lleva algo de tomar, mani. Yo me llevo bien con Wilmer, es relajadísimo, no te estreses.",
          translation: "Bring something to drink, man. I get on well with Wilmer, he's really laid-back, don't stress.",
          pronunciation: "YEH-ba AL-go de to-MAR, MA-ni. yo me YEH-bo byen kon weel-MER, es re-la-ha-DEE-see-mo, no te es-TREH-ses",
          literal: "Take something of to-drink, man. I me carry well with Wilmer, he-is very-relaxed, not you stress.",
          why: "Two faces of llevar in one breath: “lleva” (take something along) and “me llevo bien con”, the set phrase for getting on with someone, where llevar turns reflexive and has nothing to do with carrying. “Mani”, worn down from “hermano”, is coastal for “mate”."
        },
        {
          speaker: "Alex",
          target: "Bacano. ¿Y llevo camisa o voy más bien de camiseta?",
          translation: "Cool. And should I wear a shirt, or go more in a T-shirt?",
          pronunciation: "ba-KA-no. ee YEH-bo ka-MEE-sa o boy mas byen de ka-mee-SEH-ta",
          literal: "Cool. And I-wear shirt or I-go rather of T-shirt?",
          why: "Here llevar means to wear: “llevar camisa” is to have a shirt on. Spanish uses one verb for carrying and for wearing, so context does the sorting. “Bacano” is Colombian for great or cool, heard nationwide."
        },
        {
          speaker: "Yina",
          target: "De camiseta, tranquilo. Ya llevas como tres meses en Barranquilla, ¡ya casi eres costeño!",
          translation: "T-shirt, don't worry. You've been in Barranquilla about three months now — you're almost a coastal local!",
          pronunciation: "de ka-mee-SEH-ta, tran-KEE-lo. ya YEH-bas KO-mo tres MEH-ses en ba-rran-KEE-ya, ya KA-si EH-res kos-TEH-nyo",
          literal: "Of T-shirt, calm. Already you-carry like three months in Barranquilla, already almost you-are coastal!",
          why: "A third sense of the verb: “llevar” plus a stretch of time means to have spent that time. “Llevas tres meses acá” is “you've been here three months”, where English needs the present perfect. Spanish counts the time you have “carried” in a place."
        },
        {
          speaker: "Alex",
          target: "¡Buenísimo! Entonces llevo las cervezas y unos jugos. Nos vemos el domingo, Yina.",
          translation: "Great! Then I'll take the beers and some juices. See you Sunday, Yina.",
          pronunciation: "bweh-NEE-see-mo! en-TON-ses YEH-bo las ser-BEH-sas ee OO-nos HOO-gos. nos BEH-mos el do-MEEN-go, YEE-na",
          literal: "Very-good! Then I-take the beers and some juices. Us we-see the Sunday, Yina.",
          why: "Back to the core sense: “llevo las cervezas”, I'll take the beers along to Wilmer's. The plain present stands in for the future because the plan is already settled. “Nos vemos” is the standard warm goodbye when another meeting is expected."
        }
      ],
      vocabulary: [
        {
          term: "llevar",
          explanation: "The verb for taking or carrying something to a place away from where you are now: the movement points outward, from here to there. It also stretches to wearing clothes and, with a length of time, to having spent that time somewhere.",
          literal: "to take / to carry",
          useWhen: "You are moving something toward a destination that is not where you currently stand: taking food to a party, carrying a bag to the office.",
          avoidWhen: "The movement is toward you, the speaker; something coming to where you are is “traer”, not llevar.",
          register: "neutral",
          region: "Universal Spanish; the here-to-there logic is identical across Colombia and the wider Spanish-speaking world.",
          related: ["traer", "cargar", "llevarse", "portar"],
          example: {
            target: "Llevo el postre a la fiesta.",
            translation: "I'm taking the dessert to the party."
          }
        },
        {
          term: "traer",
          explanation: "The mirror of llevar: to bring something toward where the speaker is. English often uses “bring” for movement toward the listener too, but Spanish anchors traer strictly to the speaker's own here, which is what trips English speakers up.",
          literal: "to bring",
          useWhen: "Something is coming to the place where you are: asking a waiter to bring the bill, telling a friend to bring wine to your apartment.",
          avoidWhen: "The thing is heading away from you to somewhere else; that outward movement is llevar.",
          register: "neutral",
          region: "Universal Spanish; the speaker-anchored rule is the same everywhere and gets a lesson of its own next.",
          related: ["llevar", "acercar", "alcanzar", "traerse"],
          example: {
            target: "¿Me traes un vaso de agua?",
            translation: "Can you bring me a glass of water?"
          }
        },
        {
          term: "llevar puesto",
          explanation: "Llevar in its clothing sense: to have a garment on. You can say “llevar camisa” on its own, or add “puesto” to stress that you are wearing it right now rather than merely carrying it around.",
          literal: "to wear (to carry put-on)",
          useWhen: "Describing what someone has on: he's wearing a jacket, what should I wear to the party.",
          avoidWhen: "The formal, bookish “vestir” is fine in writing, but for everyday speech llevar or “ponerse” sound far more natural.",
          register: "neutral",
          region: "General Spanish; Colombians lean on “ponerse” for the act of putting on and llevar for the state of wearing.",
          related: ["ponerse", "vestir", "andar con", "estrenar"],
          example: {
            target: "¿Qué llevo puesto para el sancocho?",
            translation: "What should I wear to the sancocho?"
          }
        },
        {
          term: "llevar (+ tiempo)",
          explanation: "Llevar followed by a length of time says how long you have been somewhere or been doing something. Where English reaches for the present perfect with “for”, Spanish counts the time you have “carried” in a place or a state.",
          literal: "to carry (a stretch of time)",
          useWhen: "Saying how long you've lived somewhere, waited, or kept at something: “llevo dos años acá”, “llevo una hora esperando”.",
          avoidWhen: "Don't calque the English with “por”; “estar por tres meses” is not how this is said. Llevar, or “hace… que”, carries the meaning.",
          register: "neutral",
          region: "Universal Spanish; heard constantly across Colombia in exactly this shape.",
          related: ["hace... que", "desde hace", "tener (tiempo)", "cumplir"],
          example: {
            target: "Llevo tres meses en Barranquilla.",
            translation: "I've been in Barranquilla for three months."
          }
        },
        {
          term: "llevarse bien (con)",
          explanation: "A reflexive turn of llevar with nothing to do with carrying: to get on well with someone. Its opposite, “llevarse mal”, is to clash. The person you get on with arrives after “con”.",
          literal: "to carry oneself well (with)",
          useWhen: "Describing a relationship: I get on with my roommate, they get on badly with the neighbor.",
          avoidWhen: "Don't reach for “estar bien con”, which suggests being on good terms after a quarrel, not the general habit of getting along.",
          register: "neutral",
          region: "Universal Spanish; fully standard throughout Colombia.",
          related: ["caer bien", "entenderse", "congeniar", "llevarse mal"],
          example: {
            target: "Me llevo bien con Wilmer.",
            translation: "I get on well with Wilmer."
          }
        },
        {
          term: "de una",
          explanation: "A Colombian all-purpose “sure”, “right away”, “let's do it”. Literally “of one”, it signals instant, wholehearted agreement to an invitation, a plan or a suggestion.",
          literal: "of one (straight away)",
          useWhen: "Accepting or committing without hesitation: someone proposes the sancocho and you're in — “¡de una!”.",
          avoidWhen: "A stiff, formal setting where eager slang would jar; there a plain “claro que sí” fits better.",
          register: "friendly informal",
          region: "Colombian, heard nationwide; “de once” and “de show” are more local cousins.",
          related: ["claro", "listo", "hágale", "de show"],
          example: {
            target: "¿Vamos al sancocho? — ¡De una!",
            translation: "Shall we go to the sancocho? — Absolutely!"
          }
        },
        {
          term: "¿qué más?",
          explanation: "A greeting, not a real question: the coast's and Colombia's everyday “what's up?”. On the Caribbean coast it often opens with a bright “¡ey!” and expects nothing more than a “bien, ¿y tú?”.",
          literal: "what more?",
          useWhen: "Greeting someone you know casually, in person or by message: “¿Qué más, parce?”.",
          avoidWhen: "A first meeting in a formal context, where “buenos días” and a handshake set the right tone.",
          register: "friendly informal",
          region: "Colombian, on the coast and in the interior alike; “¿quihubo?” and “¿bien o qué?” are close relatives.",
          related: ["¿quihubo?", "¿bien o qué?", "¿entonces qué?", "¿cómo vas?"],
          example: {
            target: "¿Qué más, Alex? ¿Cómo vas?",
            translation: "What's up, Alex? How's it going?"
          }
        }
      ],
      note:
        "The verb to lock in is llevar for anything you carry toward a place that is not where you are — take the beers to Wilmer's, take a gift to a party. Keep traer for things coming to you. And remember that llevar moonlights: “llevo tres meses acá” is how long you've been somewhere, “llevar camisa” is wearing it, and “me llevo bien con” is getting along. One verb, four jobs, all sorted by context.",
      culture: [
        {
          label: "Take points away from you, bring points toward you",
          body: "Spanish fixes llevar and traer to where the speaker is standing, not to where the listener is. You llevar a cake to a party because the party is over there, away from you; you ask someone to traer it because you are the destination. English is looser — “bring it to the party” is fine — so English speakers reach for traer when Spanish wants llevar. When in doubt, ask which way the thing is moving relative to your own feet."
        },
        {
          label: "Never quite empty-handed",
          body: "Turning up to a Colombian gathering with nothing in your hands gets noticed, even among close friends who will insist you needn't have bothered. A couple of liters of gaseosa, a six-pack, a bag of ice or a dessert is plenty; the gesture matters more than the price. On the coast, where hospitality runs warm and loud, adding to the sancocho pot is part of belonging, and “¿qué llevo?” is one of the most useful questions you can learn to ask."
        },
        {
          label: "Sunday is sancocho",
          body: "The sancocho — a slow, hearty stew of plantain, yuca, corn and meat or fish — is the coast's great communal meal, cooked in a huge pot, often outdoors over wood, and eaten by a crowd that drifts in across the afternoon. Nobody expects punctuality; “la hora costeña” runs generously late, and arriving on the dot can leave you standing while the host is still peeling yuca. Come hungry, come relaxed, and expect the day to stretch."
        },
        {
          label: "The coast talks fast and drops its s",
          body: "Costeño Spanish clips the ends of words and softens or drops the s, so “¿qué más?” can sound like “¿qué má?” and “los amigos” like “loh amigo”. It also lives in tú, not usted, with a warmth that can feel instantly familiar. None of this is careless; it is a distinct, proud accent. Tuning your ear to it — rather than asking people to slow down — is the fastest way to feel at home in Barranquilla or Cartagena."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “¿Traigo algo a la fiesta?” when you are the one going to the party",
          whyItFails: "From where you stand, the party is somewhere else, so the movement points away from you — that is llevar. “Traer” would mean the party is coming to you, which reverses the whole picture and marks you at once as translating from English.",
          sayInstead: "¿Llevo algo a la fiesta?"
        },
        {
          mistake: "Saying “Estoy aquí por tres meses” to mean “I've been here three months”",
          whyItFails: "“Estar por” sounds like a plan to stay for three months, not a report of time already spent. To say how long you have been somewhere, Spanish uses llevar with the stretch of time, or “hace tres meses que estoy aquí”.",
          sayInstead: "Llevo tres meses aquí."
        },
        {
          mistake: "Saying “Estoy bien con Wilmer” to mean you get along with him",
          whyItFails: "“Estar bien con alguien” suggests you are on good terms after some friction, not that you generally click. The everyday phrase for getting on with someone is llevarse bien con, with the reflexive.",
          sayInstead: "Me llevo bien con Wilmer."
        },
        {
          mistake: "Asking “¿Qué debo vestir?” for “What should I wear?”",
          whyItFails: "“Vestir” is not wrong, but it lands as bookish and stiff in casual coastal talk. Colombians reach for “¿qué me pongo?” or use llevar, keeping “vestir” for writing or a formal register.",
          sayInstead: "¿Qué me pongo? / ¿Llevo camisa?"
        }
      ],
      variations: [
        {
          form: "¿Qué llevo pa'l sancocho?",
          register: "friendly informal",
          region: "Barranquilla / Caribbean coast",
          whenToUse: "Casual coast talk, with “para” clipped to “pa'” in front of the noun."
        },
        {
          form: "¿Qué llevo a la reunión?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The clean, standard way to ask what to take anywhere."
        },
        {
          form: "¿Yo qué aporto?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "When it's a shared spread and you're offering to chip in a dish."
        },
        {
          form: "¿Llevo algo de picar?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Offering to take snacks; “algo de picar” is nibbles to share."
        },
        {
          form: "¿Qué te provoca que lleve?",
          register: "friendly informal",
          region: "Andean Colombia / Bogotá",
          whenToUse: "Asking what they fancy you bring; “provocar” here means to feel like something."
        }
      ],
      prompt: "Alex is heading across town to a gathering at Wilmer's and asks Yina “¿Qué llevo?”. Why llevar and not traer?",
      choices: [
        "Because the food will belong to Wilmer once it arrives, and llevar is the verb Colombians reserve for anything that is not theirs to keep.",
        "Because llevar and traer overlap so completely in Colombia that either verb would sound perfectly natural to Yina in this moment.",
        "Because the gathering is somewhere else, away from where Alex is standing, and llevar is for carrying something to a place over there."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Yina says “Ya llevas tres meses acá.” What does that construction express?",
          choices: [
            "That three months have gone by since Alex arrived — llevar plus a length of time is how Spanish counts time already spent somewhere.",
            "That Alex is hauling three months' worth of luggage around Barranquilla with him at this very moment as the two of them talk.",
            "That Alex is about to set off on a three-month trip elsewhere and will be leaving the coast very soon after the Sunday sancocho."
          ],
          answer: 0,
          tests: "llevar + time for elapsed time"
        },
        {
          prompt: "Yina says “Me llevo bien con Wilmer.” What does “llevarse bien con” mean?",
          choices: [
            "That she carries Wilmer's shopping for him whenever the two of them happen to walk down to the market together on weekends.",
            "That she gets on well with Wilmer — llevarse bien con alguien is the fixed phrase for having an easy, friendly relationship.",
            "That she is taking Wilmer along to the sancocho because he does not yet know the way to the host's house there on his own."
          ],
          answer: 1,
          tests: "llevarse bien con for getting along"
        },
        {
          prompt: "Which sentence uses llevar to talk about what to wear?",
          choices: [
            "¿Cuánto me llevo desde mi casa hasta donde Wilmer si me voy caminando por toda la sombra del andén?",
            "Me llevo muy bien con la prima de Wilmer desde que la conocí en el sancocho del año pasado en la playa.",
            "¿Llevo camisa de botones o me pongo una simple camiseta para el sancocho del domingo por la tarde?"
          ],
          answer: 2,
          tests: "llevar for wearing clothes"
        },
        {
          prompt: "Alex is at home and phones a friend to ask them to bring snacks over to his apartment. From Alex's side, which verb fits?",
          choices: [
            "¿Me traes algo de picar cuando vengas, que ya estoy aquí en el apartamento esperándolos a todos ustedes?",
            "¿Me llevas algo de picar cuando vengas, que ya estoy aquí en el apartamento esperándolos a todos ustedes?",
            "¿Me pongo algo de picar cuando vengas, que ya estoy aquí en el apartamento esperándolos a todos ustedes?"
          ],
          answer: 0,
          tests: "traer for movement toward the speaker's here"
        }
      ]
    },
    en: {
      title: "Qué llevar al asado del sábado",
      situation:
        "Alejandra se encuentra a Kayla, una amiga estadounidense, en la puerta del edificio en Houston. El sábado hay un asado donde Josh, un amigo del grupo, y Kayla le confirma que ella también está invitada. Alejandra no sabe si debe aparecer con algo ni cómo vestirse, así que aprovecha para practicar en inglés y preguntarle a Kayla cómo funcionan estas reuniones.",
      setting: {
        who: "Kayla nació en Houston y organiza medio grupo de amigos. Alejandra llegó hace tres meses por trabajo y todavía está aprendiendo cómo funcionan las invitaciones aquí: a quién saludar, qué llevar, qué tan tarde es tarde.",
        what: "Una charla rápida en la puerta sobre un asado del sábado donde un amigo común, y con qué debería aparecer Alejandra.",
        when: "Un viernes por la tarde de verano, las dos llegando a casa, con los planes del fin de semana todavía sueltos.",
        where: "Houston, a la salida de un edificio de apartamentos, con el buen clima que saca a los vecinos a la calle.",
        why: "Porque es la primera invitación de verdad de Alejandra al grupo, y acertar en los detalles pequeños — llevar algo, vestirse sencillo, no estresarse — es lo que convierte a una compañera de trabajo en una amiga que te guarda un plato."
      },
      address: {
        form: "mixed",
        who: "Kayla y Alejandra se tratan de “you”, la única segunda persona que tiene el inglés, así que no hay que elegir entre tú y usted.",
        why: "El inglés no marca la cercanía con el pronombre, porque solo existe “you”. El registro lo cargan las palabras y el tono: entre amigas basta con un “hey” y un “what's up?”; para sonar formal se añaden “could you”, “please” o el apellido con “Ms.”.",
        ifYouSwitch: "No hay pronombre al que cambiarse. Si Alejandra quisiera sonar más formal, no toca el “you”: sube el registro con “excuse me”, “would you mind” o un saludo más medido; para sonar cercana, usa el nombre de pila y un tono relajado."
      },
      dialogue: [
        {
          speaker: "Kayla",
          target: "Hey Ale, are you gonna bring anything to Josh's barbecue on Saturday?",
          translation: "Oye, Ale, ¿vas a llevar algo al asado de Josh el sábado?",
          pronunciation: "jei A-le, ar yu GA-na bring E-ni-zing tu YOSH-es BAR-be-kiu on SA-tur-dei?",
          literal: "Oye Ale, ¿estás yendo-a traer cualquier-cosa a Josh barbacoa en sábado?",
          why: "Aquí está la trampa de la deixis al revés: el inglés dice “bring” (traer) para una fiesta a la que vas, justo donde el español usa “llevar”. Para un evento al que te diriges, el inglés norteamericano prefiere “bring something”, aunque tú no seas el destino. “Gonna” es “going to” en habla rápida."
        },
        {
          speaker: "Alejandra",
          target: "Yeah, I'm going. What should I bring? I don't want to show up empty-handed.",
          translation: "Sí, voy. ¿Qué llevo? No quiero llegar con las manos vacías.",
          pronunciation: "yea, aim GO-ing. uát shud ai bring? ai dont uánt tu shou op EM-ti-JAN-ded",
          literal: "Sí, yo-estoy yendo. ¿Qué debería yo traer? Yo no quiero mostrar-arriba mano-vacía.",
          why: "“Should I bring?” es la fórmula para ofrecerse a llevar algo. “Show up” es un phrasal verb coloquial por “aparecer/llegar”, y “empty-handed” es un adjetivo compuesto: sin artículo, distinto del español “con las manos vacías”."
        },
        {
          speaker: "Kayla",
          target: "Just bring something to drink. I get along great with Josh, he's super chill, don't stress.",
          translation: "Solo lleva algo de tomar. Me llevo muy bien con Josh, es súper relajado, no te estreses.",
          pronunciation: "yost bring SOM-zing tu drink. ai get a-LONG greit uid YOSH, jis SU-per chil, dont stres",
          literal: "Solo trae algo a beber. Yo consigo a-lo-largo genial con Josh, él-es súper relajado, no estrés.",
          why: "“Get along (with)” es la expresión para “llevarse bien con”, nada de “carry”: es un phrasal verb y la persona va tras “with”. “Chill” es jerga por relajado, y “don't stress” es el calco directo, y correcto, de “no te estreses”."
        },
        {
          speaker: "Alejandra",
          target: "Cool. Should I wear a shirt, or is a T-shirt fine?",
          translation: "Bacano. ¿Llevo camisa o una camiseta está bien?",
          pronunciation: "kul. shud ai UER a shert, or is a TII-shert fain?",
          literal: "Genial. ¿Debería yo vestir una camisa, o es una camiseta bien?",
          why: "El inglés parte lo que el español junta en “llevar”: para la ropa puesta se usa “wear”, no “bring” ni “take”. “Wear a shirt” es llevar camisa puesta; cuidado con calcar “take a shirt”, que sonaría a llevártela en la mano."
        },
        {
          speaker: "Kayla",
          target: "A T-shirt's fine. You've been in Houston for three months now — you're basically a local!",
          translation: "Una camiseta está bien. Ya llevas tres meses en Houston, ¡ya eres casi de acá!",
          pronunciation: "a TII-sherts fain. yuv bin in to-RON-tou for zrii monzs nau — yur BEI-sik-li a LOU-kal",
          literal: "Una camiseta-es bien. Tú-has estado en Houston por tres meses ahora — tú-eres básicamente un local.",
          why: "Donde el español dice “llevas tres meses”, el inglés usa el present perfect con “for”: “you've been… for three months”. La duración pide “for”; con “since” iría una fecha de inicio, no una cantidad de tiempo."
        },
        {
          speaker: "Alejandra",
          target: "Awesome! Then I'll bring the beer and some juice. See you Saturday, Kayla.",
          translation: "¡Buenísimo! Entonces llevo la cerveza y unos jugos. Nos vemos el sábado, Kayla.",
          pronunciation: "O-som! den ail bring de bir and som yus. sii yu SA-tur-dei, KEI-la",
          literal: "¡Genial! Entonces yo-traeré la cerveza y algo jugo. Veo te sábado, Kayla.",
          why: "“I'll bring” usa el futuro con “will” para un plan recién cerrado. Otra vez el inglés dice “bring” hacia el evento donde el español usó “llevar”. “See you” es la despedida cotidiana, y a diferencia del español no lleva reflexivo."
        }
      ],
      vocabulary: [
        {
          term: "to take",
          explanation: "El verbo del inglés para mover algo hacia un lugar que no es donde estás: apunta hacia afuera, de aquí para allá. Cubre lo que el español llama “llevar” en su sentido básico de cargar y trasladar.",
          literal: "llevar",
          useWhen: "Cuando llevas algo a otro sitio: “take it to the office”, “take the kids to school”.",
          avoidWhen: "Cuando el movimiento es hacia quien habla o hacia la persona con quien hablas; ahí el inglés suele preferir “bring”.",
          register: "neutral",
          region: "Inglés general; la lógica de “aquí para allá” es la misma en todo Estados Unidos.",
          related: ["to bring", "to carry", "to grab", "to drop off"],
          example: {
            target: "I'm taking the dessert to the party.",
            translation: "Llevo el postre a la fiesta."
          }
        },
        {
          term: "to bring",
          explanation: "Mover algo hacia donde está quien habla o, en inglés, hacia el destino al que ambos van. Por eso a una fiesta a la que vas se dice “bring something”, justo donde el español usa “llevar”: esa es la trampa.",
          literal: "traer (y a veces “llevar”)",
          useWhen: "Hacia el hablante o hacia el destino compartido: “bring me the file”, “what should I bring to the party?”.",
          avoidWhen: "Para un traslado que se aleja de todos hacia un tercer lugar neutro; ahí encaja mejor “take”.",
          register: "neutral",
          region: "Inglés general; el inglés norteamericano usa “bring” con la fiesta a la que uno va mucho más que el español.",
          related: ["to take", "to bring along", "to bring over", "to grab"],
          example: {
            target: "Can you bring me a glass of water?",
            translation: "¿Me traes un vaso de agua?"
          }
        },
        {
          term: "to wear",
          explanation: "El verbo propio para la ropa que uno tiene puesta. El inglés no usa aquí ni “take” ni “bring”: se “wear” la camisa. Para el acto de ponérsela está el phrasal verb “put on”.",
          literal: "llevar puesto / usar (ropa)",
          useWhen: "Al describir lo que alguien trae puesto: “she's wearing a jacket”, “what should I wear?”.",
          avoidWhen: "Para cargar la prenda sin ponértela; eso sería “bring” o “carry”, no “wear”.",
          register: "neutral",
          region: "Inglés general; “have on” es una variante coloquial equivalente.",
          related: ["to put on", "to have on", "to dress", "to try on"],
          example: {
            target: "What should I wear to the barbecue?",
            translation: "¿Qué me pongo para el asado?"
          }
        },
        {
          term: "to have been (+ for)",
          explanation: "El inglés cuenta el tiempo que llevas en un lugar con el present perfect y “for”: “I've been here for three months”. Es el equivalente exacto de “llevar + tiempo”, pero con otra gramática.",
          literal: "he estado (por)",
          useWhen: "Para decir cuánto llevas en un sitio o haciendo algo: “I've been waiting for an hour”.",
          avoidWhen: "No uses “since” con una duración: “since three months” es error; “since” pide una fecha o un punto de inicio.",
          register: "neutral",
          region: "Inglés general; la distinción “for” (duración) frente a “since” (inicio) es firme en todas partes.",
          related: ["for", "since", "it's been", "ago"],
          example: {
            target: "I've been in Houston for three months.",
            translation: "Llevo tres meses en Houston."
          }
        },
        {
          term: "to get along (with)",
          explanation: "La expresión para “llevarse bien”: entenderse con alguien. Es un phrasal verb y la persona va tras “with”. Nada de “carry”: el calco “carry well” no existe en inglés.",
          literal: "llevarse bien (con)",
          useWhen: "Al hablar de una relación: “I get along with my roommate”, “they don't get along”.",
          avoidWhen: "Cuando quieres decir que quedaron bien tras una pelea puntual; eso es “we're good now”, otra idea.",
          register: "friendly informal",
          region: "Inglés general; “get on with” es más británico y “hit it off” es para el primer encuentro.",
          related: ["to hit it off", "to click", "to get on", "to gel"],
          example: {
            target: "I get along well with Josh.",
            translation: "Me llevo bien con Josh."
          }
        },
        {
          term: "for sure",
          explanation: "Un “claro que sí”, un “de una”. Confirma con entusiasmo una invitación o un plan. “Sure thing” y “you bet” son primos aún más coloquiales.",
          literal: "de una / seguro",
          useWhen: "Al aceptar sin dudar: “Wanna come? — For sure!”.",
          avoidWhen: "En un registro formal o escrito, donde “certainly” o “of course” suenan mejor.",
          register: "friendly informal",
          region: "Inglés norteamericano coloquial; “you bet” tiene un sabor muy estadounidense.",
          related: ["sure thing", "definitely", "you bet", "absolutely"],
          example: {
            target: "Wanna come? — For sure!",
            translation: "¿Quieres venir? — ¡De una!"
          }
        },
        {
          term: "what's up?",
          explanation: "Un saludo, no una pregunta literal: el “¿qué más?” del inglés. Se responde con otro “not much, you?” o un “hey”, sin contar de verdad qué pasa.",
          literal: "¿qué hay? / ¿qué más?",
          useWhen: "Al saludar a alguien de confianza, en persona o por mensaje: “Hey, what's up?”.",
          avoidWhen: "En un primer contacto formal, donde “hello” y “nice to meet you” marcan mejor el tono.",
          register: "friendly informal",
          region: "Inglés norteamericano coloquial; “how's it going?” cumple la misma función y es aún más común en Estados Unidos.",
          related: ["how's it going?", "what's new?", "how are you?", "how've you been?"],
          example: {
            target: "Hey, what's up?",
            translation: "¿Qué más?"
          }
        }
      ],
      note:
        "Lo que hay que fijar: el inglés reparte lo que el español mete en “llevar”. Para lo que cargas a otro sitio, “take”; para lo que va hacia ti — o hacia la fiesta a la que vas — “bring”; para la ropa puesta, “wear”; y para el tiempo que llevas en un lugar, el present perfect con “for”: “I've been here for three months”. “Get along with” cierra la lista: es “llevarse bien”, nunca “carry well”.",
      culture: [
        {
          label: "“Take” aleja, “bring” acerca — pero el inglés es más flexible",
          body: "El inglés también distingue entre alejar (“take”) y acercar (“bring”), pero ata “bring” tanto al hablante como a la persona con quien habla y al destino al que van. Por eso a una fiesta a la que vas dices “I'll bring wine”, aunque tú no seas el destino: el grupo al que te diriges cuenta como centro. El español, en cambio, exige “llevar” porque el vino sale de donde tú estás. Es el mismo mapa mental con reglas un poco distintas."
        },
        {
          label: "Nunca con las manos vacías, tampoco en Estados Unidos",
          body: "Llegar a un asado o a una cena en Estados Unidos sin nada tampoco cae del todo bien, aunque el anfitrión diga que no hacía falta. La costumbre del “potluck” — cada quien lleva un plato — está muy arraigada, y preguntar “what should I bring?” es lo más normal del mundo. Una botella de vino, una bolsa de hielo, un postre o unas cervezas bastan. Como en Colombia, importa más el gesto que el precio de lo que lleves."
        },
        {
          label: "El asado estadounidense: el “barbecue”",
          body: "El “barbecue” o “BBQ” es la reunión al aire libre por excelencia del verano estadounidense: hamburguesas, salchichas y maíz a la parrilla, en un patio o un parque, con la gente entrando y saliendo. A diferencia del sancocho costeño, aquí sí se tiende a respetar más la hora de inicio, aunque con algo de margen. Llevar algo para la parrilla o para compartir te integra de inmediato al grupo."
        },
        {
          label: "“What's up?” no pide un informe",
          body: "Cuando un estadounidense saluda con “what's up?” o “how's it going?”, no espera que le cuentes tu día: es puro saludo, como el “¿qué más?” costeño. La respuesta esperada es breve — “not much, you?” o “good, you?” — y devuelves la pregunta. Contestar con una lista de novedades desconcierta un poco a quien saluda. Tomarlo como fórmula, y no como pregunta literal, es señal de buen oído."
        }
      ],
      pitfalls: [
        {
          mistake: "“I am here since three months.”",
          whyItFails: "Con una duración el inglés pide el present perfect y “for”, no el presente con “since”. “Since” marca un punto de inicio — una fecha — no una cantidad de tiempo, así que “since three months” suena roto a un oído anglófono.",
          sayInstead: "I've been here for three months."
        },
        {
          mistake: "“Should I take a formal shirt to the party?”",
          whyItFails: "Para la ropa que uno lleva puesta el inglés usa “wear”. “Take a shirt” suena a llevártela en la mano, no a ponértela. El verbo de la ropa puesta es “wear”, y para el acto de ponerla, “put on”.",
          sayInstead: "Should I wear a formal shirt?"
        },
        {
          mistake: "“I carry well with my roommate.”",
          whyItFails: "“Llevarse bien” no se traduce con “carry”. La expresión inglesa es “get along with”, un phrasal verb; “carry well” no significa nada para un anglohablante y delata la traducción literal.",
          sayInstead: "I get along well with my roommate."
        },
        {
          mistake: "“I don't want to arrive with the hands empty.”",
          whyItFails: "El inglés usa el adjetivo compuesto “empty-handed”, sin artículo y sin “the hands”. Calcar “con las manos” produce una frase larga y ajena; “show up empty-handed” es lo natural.",
          sayInstead: "I don't want to show up empty-handed."
        }
      ],
      variations: [
        {
          form: "What should I bring to the barbecue?",
          register: "friendly informal",
          region: "Inglés norteamericano",
          whenToUse: "La forma estándar para preguntar qué llevar a un asado o a una fiesta."
        },
        {
          form: "Should I bring anything?",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Versión corta cuando ya sabes que vas y solo lo confirmas."
        },
        {
          form: "Want me to bring something?",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Ofreciéndote tú misma a llevar algo, de forma más proactiva."
        },
        {
          form: "I'll bring a side.",
          register: "friendly informal",
          region: "Inglés norteamericano",
          whenToUse: "En un potluck, al comprometerte con un acompañamiento; “a side” es un plato de acompañar."
        },
        {
          form: "What can I bring?",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Un poco más cortés y neutro, útil con gente que no conoces tanto."
        }
      ],
      prompt: "Kayla le pregunta a Alejandra “are you gonna bring anything?” sobre una fiesta a la que ambas van. ¿Por qué el inglés usa “bring” donde el español usaría “llevar”?",
      choices: [
        "Porque “bring” y “take” significan exactamente lo mismo en inglés norteamericano y da igual cuál de los dos verbos elija cada quien.",
        "Porque el inglés ancla “bring” también al destino al que te diriges, así que para la fiesta a la que vas se dice “bring”, no “take”.",
        "Porque “bring” es la forma cortés y “take” la informal, y con una amiga como Kayla siempre corresponde usar la variante más cortés."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Alejandra quiere decir que lleva tres meses en Houston. ¿Cuál es la forma correcta en inglés?",
          choices: [
            "I am in Houston since three months, and I already feel almost like a local in this huge, busy city.",
            "I am in Houston for three months now, and I already feel almost like a local in this huge, busy city.",
            "I've been in Houston for three months now, and I already feel almost like a local in this huge, busy city."
          ],
          answer: 2,
          tests: "present perfect con “for” para la duración"
        },
        {
          prompt: "Kayla dice “I get along great with Josh.” ¿Qué significa “get along with”?",
          choices: [
            "Que se lleva bien con Josh: “get along with” es la expresión para entenderse con alguien y tener buena relación.",
            "Que carga con las cosas de Josh cada vez que los dos salen juntos a caminar por el centro los fines de semana.",
            "Que va a llevar a Josh al asado porque él todavía no conoce el camino hasta la casa del anfitrión por su cuenta."
          ],
          answer: 0,
          tests: "“get along with” como llevarse bien"
        },
        {
          prompt: "¿Cuál oración usa bien el verbo para la ropa que uno lleva puesta?",
          choices: [
            "Should I take a button-up shirt, or should I just put on a plain T-shirt for the backyard barbecue?",
            "Should I wear a button-up shirt, or should I just wear a plain T-shirt for the backyard barbecue?",
            "Should I bring a button-up shirt, or should I just carry a plain T-shirt for the backyard barbecue?"
          ],
          answer: 1,
          tests: "“wear” para la ropa puesta"
        },
        {
          prompt: "Alejandra está en su casa y le pide por teléfono a una amiga que le lleve algo de picar a su apartamento. Desde el lado de Alejandra, ¿qué verbo encaja?",
          choices: [
            "Can you take me some snacks when you come over, since I'm already here at the apartment waiting for everyone?",
            "Can you carry me some snacks when you come over, since I'm already here at the apartment waiting for everyone?",
            "Can you bring me some snacks when you come over, since I'm already here at the apartment waiting for everyone?"
          ],
          answer: 2,
          tests: "“bring” para el movimiento hacia el hablante"
        }
      ]
    }
  },
  {
    id: "ordering-lunch-and-asking-for-the-bill",
    level: "Starter · Food and drink",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "courteous",
    pathways: ["foundation"],
    verb: "traer",
    review: "pending",
    es: {
      title: "Pedir el almuerzo y la cuenta en Bogotá",
      situation:
        "Alex entra a un restaurante de almuerzo ejecutivo en el centro de Bogotá a la hora pico. Un mesero lo atiende de usted, con la cortesía formal pero cálida de la capital. Alex tiene que pedir la carta, un café mientras decide y, al final, la cuenta, todo con las fórmulas colombianas de “¿me trae?” y “¿me regala?”, y sin caer en el falso amigo del tinto.",
      setting: {
        who: "A waiter in a busy set-lunch spot, brisk but courteous, and Alex, ordering alone on a workday. Neither knows the other; the whole exchange runs on the polite formulas of the capital.",
        what: "Ordering lunch: getting the menu, a coffee to sip while deciding, and finally the bill, in a hurry.",
        when: "Weekday, on the dot of the midday rush, when city-center restaurants fill with office workers on the clock.",
        where: "Bogotá, a downtown restaurant doing the “almuerzo ejecutivo”, the fixed-price set lunch that feeds the working city.",
        why: "Because the restaurant is where a learner first meets Colombia's service politeness at full strength — the padded requests, the usted, the “¿me regala?” — and getting it right turns you from an awkward foreigner into someone the staff enjoy serving."
      },
      address: {
        form: "usted",
        who: "The waiter uses usted with Alex, and Alex uses usted back, the invariable register of Bogotá service.",
        why: "In the capital, service encounters default to usted regardless of anyone's age. It is respectful without being cold, and the warmth comes through the softeners — “con mucho gusto”, “¿me regala?” — rather than through a familiar pronoun.",
        ifYouSwitch: "Slipping into tú with a waiter in Bogotá can sound over-familiar, even a little presumptuous. Vos is not used in the capital and would sound imported. Usted is the safe, expected choice."
      },
      dialogue: [
        {
          speaker: "Mesero",
          target: "Buenas tardes, siga. ¿Le traigo la carta o ya sabe qué va a pedir?",
          translation: "Good afternoon, come in. Shall I bring you the menu, or do you already know what you'll have?",
          pronunciation: "BWEH-nas TAR-des, SEE-ga. le TRAI-go la KAR-ta o ya SA-be ke ba a pe-DEER",
          literal: "Good afternoons, follow. To-you I-bring the menu or already you-know what you-go to order?",
          why: "“Le traigo” is traer with the usted object pronoun “le”: the menu moves toward the customer, so it is traer, not llevar. “Siga”, literally “continue”, is Colombia's warm “come in / go ahead”, and the whole greeting runs on usted."
        },
        {
          speaker: "Alex",
          target: "Buenas. ¿Me hace el favor y me trae la carta? Todavía no sé qué pedir.",
          translation: "Hello. Could you do me the favor of bringing the menu? I still don't know what to order.",
          pronunciation: "BWEH-nas. me A-se el fa-BOR ee me TRAE la KAR-ta? to-da-BEE-a no se ke pe-DEER",
          literal: "Good. To-me you-do the favor and to-me you-bring the menu? Still not I-know what to-order.",
          why: "“¿Me hace el favor y me trae…?” is the very Colombian double-softener: rather than a bare command, you wrap the request in “do me the favor and…”. It is warmer and more polite than a plain “tráigame”, and pairs naturally with usted."
        },
        {
          speaker: "Mesero",
          target: "Con mucho gusto. Mientras decide, ¿le traigo un tinto o algo de tomar?",
          translation: "With pleasure. While you decide, shall I bring you a coffee or something to drink?",
          pronunciation: "kon MOO-cho GOOS-to. MYEN-tras de-SEE-de, le TRAI-go oon TEEN-to o AL-go de to-MAR",
          literal: "With much pleasure. While you-decide, to-you I-bring a black-coffee or something of to-drink?",
          why: "Here is the false friend: “un tinto” in Colombia is a small black coffee, not red wine. Offering one while you read the menu is completely normal. “Con mucho gusto” is the standard, warm Colombian “my pleasure”."
        },
        {
          speaker: "Alex",
          target: "Uy, sí. ¿Me regala un tinto, por fa? Y ya escojo el almuerzo.",
          translation: "Oh, yes. Could I get a coffee, please? And I'll pick my lunch in a second.",
          pronunciation: "OO-ee, see. me re-GA-la oon TEEN-to, por fa? ee ya es-KO-ho el al-MWER-so",
          literal: "Ugh, yes. To-me you-gift a black-coffee, for fav? And already I-choose the lunch.",
          why: "“¿Me regala…?” — literally “will you gift me?” — is Colombia's favorite polite request, used even when you are clearly paying. It softens the ask far more than “deme”. “Por fa” is the clipped, friendly “por favor”."
        },
        {
          speaker: "Mesero",
          target: "Claro que sí. Ya mismo se lo traigo y le tomo el pedido.",
          translation: "Of course. I'll bring it to you right away and take your order.",
          pronunciation: "KLA-ro ke see. ya MEES-mo se lo TRAI-go ee le TO-mo el pe-DEE-do",
          literal: "Clear that yes. Already same to-you it I-bring and to-you I-take the order.",
          why: "“Se lo traigo” stacks two pronouns — “se” (to you) and “lo” (it) — onto traer, the coffee still moving toward the customer. “Ya mismo”, right now, is the standard Colombian way to promise something immediately."
        },
        {
          speaker: "Alex",
          target: "Gracias. Y cuando pueda, ¿me trae la cuenta con el almuerzo? Que llevo afán.",
          translation: "Thanks. And when you can, could you bring the bill with my lunch? I'm in a rush.",
          pronunciation: "GRA-syas. ee KWAN-do PWE-de, me TRAE la KWEN-ta kon el al-MWER-so? ke YEH-vo a-FAN",
          literal: "Thanks. And when you-can, to-me you-bring the bill with the lunch? That I-carry hurry.",
          why: "“¿Me trae la cuenta?” is the headline phrase for asking for the bill: it moves toward you, so traer. “Cuando pueda”, whenever you can, keeps the request unhurried and polite even as he explains that he is pressed for time."
        }
      ],
      vocabulary: [
        {
          term: "traer",
          explanation: "The verb for bringing something toward where the speaker is. In a restaurant everything the waiter brings to your table is traer, because the movement ends at you. Its outward-bound mirror is llevar.",
          literal: "to bring",
          useWhen: "Something is coming to the place where you are: the menu, a coffee, the bill, a jug of water to the table.",
          avoidWhen: "The thing is leaving your spot for somewhere else; carrying leftovers home is llevar, not traer.",
          register: "neutral",
          region: "Universal Spanish; the speaker-anchored logic holds across Colombia and beyond.",
          related: ["llevar", "acercar", "servir", "alcanzar"],
          example: {
            target: "¿Me trae la carta, por favor?",
            translation: "Could you bring me the menu, please?"
          }
        },
        {
          term: "¿me trae...?",
          explanation: "The everyday frame for asking a waiter to bring you something: “me” marks you as the destination, traer as the movement toward you. Add “por favor” or a softener and it is perfectly polite.",
          literal: "will you bring me...?",
          useWhen: "Ordering or asking for anything at the table: “¿me trae una limonada?”, “¿me trae más pan?”.",
          avoidWhen: "As a bare “tráigame” with no softener, which can sound curt to a Bogotá ear used to padded requests.",
          register: "polite neutral",
          region: "Universal Spanish; in Colombia it competes happily with “¿me regala…?”.",
          related: ["¿me regala...?", "¿me da...?", "tráigame", "¿nos trae...?"],
          example: {
            target: "¿Me trae la cuenta, por favor?",
            translation: "Could you bring me the bill, please?"
          }
        },
        {
          term: "¿me hace el favor y...?",
          explanation: "A double-wrapped politeness: literally “will you do me the favor and…”, laid in front of the actual request. It is unmistakably Colombian and turns even a simple ask into something gracious.",
          literal: "will you do me the favor and...?",
          useWhen: "Softening a request as much as you politely can: “¿me hace el favor y me trae la cuenta?”.",
          avoidWhen: "Among close friends, where it can sound overly ceremonious; a plain “¿me traes…?” fits better there.",
          register: "polite formal",
          region: "Colombian; the “y” (and) version, rather than “de”, is especially characteristic.",
          related: ["¿me haría el favor de...?", "¿sería tan amable de...?", "por favor", "¿me colabora con...?"],
          example: {
            target: "¿Me hace el favor y me trae servilletas?",
            translation: "Could you do me the favor of bringing napkins?"
          }
        },
        {
          term: "¿me regala...?",
          explanation: "Colombia's signature polite request. “Regalar” means to give as a gift, yet here it asks for something you will pay for or are owed. It softens the ask and is heard constantly in shops, cafés and restaurants.",
          literal: "will you gift me...?",
          useWhen: "Asking for almost anything in a service setting: “¿me regala un tinto?”, “¿me regala la cuenta?”.",
          avoidWhen: "Outside Colombia, where “¿me regala…?” can genuinely be heard as asking for a freebie and cause confusion.",
          register: "polite neutral",
          region: "Strongly Colombian; a first-time visitor often finds it the country's most surprising politeness formula.",
          related: ["¿me trae...?", "¿me da...?", "¿me colabora con...?", "¿me obsequia...?"],
          example: {
            target: "¿Me regala un vaso de agua?",
            translation: "Could I get a glass of water?"
          }
        },
        {
          term: "tinto",
          explanation: "In Colombia a “tinto” is a small cup of black coffee, not red wine. It comes from “café tinto”, dark-colored coffee. Red wine here is “vino tinto”, always with the “vino” said in full.",
          literal: "black coffee (a dark thing)",
          useWhen: "Ordering the small black coffee that fuels Colombian offices and street corners: “¿me regala un tinto?”.",
          avoidWhen: "Expecting wine; say “una copa de vino tinto” for a glass of red, and note the word means red wine in Spain.",
          register: "neutral",
          region: "Colombian and Andean; the black-coffee sense is universal in Colombia.",
          related: ["vino tinto", "perico", "pintado", "café"],
          example: {
            target: "Un tinto, por favor.",
            translation: "A black coffee, please."
          }
        },
        {
          term: "la cuenta",
          explanation: "The bill or check. The standard move at the end of a meal is “¿me trae la cuenta?” or “¿me regala la cuenta?”; the bill travels toward you, so traer is the natural verb.",
          literal: "the account / the bill",
          useWhen: "Asking to pay: “la cuenta, por favor”, “¿nos trae la cuenta?”.",
          avoidWhen: "Don't calque English with “¿puedo tener la cuenta?”; it sounds translated. Colombians ask for it to be brought or gifted.",
          register: "neutral",
          region: "Universal Spanish; the “¿me regala la cuenta?” variant is distinctly Colombian.",
          related: ["¿me trae la cuenta?", "la adición", "el recibo", "propina"],
          example: {
            target: "¿Nos trae la cuenta, por favor?",
            translation: "Could you bring us the bill, please?"
          }
        },
        {
          term: "con gusto / a la orden",
          explanation: "Two pillars of Colombian service warmth. “Con (mucho) gusto” is “my pleasure”, said when helping or when thanked. “A la orden” greets you, offers help, and answers your thanks, all depending on tone.",
          literal: "with pleasure / at your order",
          useWhen: "In warm service: a waiter greets you with “a la orden” and answers your “gracias” with “con gusto”.",
          avoidWhen: "Reading “a la orden” as a real command to order right now; it is a courtesy, not pressure.",
          register: "polite neutral",
          region: "Colombian; “a la orden” called from a shop doorway is part of the national soundscape.",
          related: ["con mucho gusto", "a la orden", "para servirle", "con todo gusto"],
          example: {
            target: "Gracias. — Con gusto, a la orden.",
            translation: "Thanks. — My pleasure, at your service."
          }
        }
      ],
      note:
        "Anything a waiter moves to your table is traer, because it ends up where you are — the menu, a tinto, the bill: “¿me trae la cuenta?”. Soften the ask the Colombian way with “¿me regala…?” or “¿me hace el favor y me trae…?” rather than a bare command, and keep it all on usted in a Bogotá restaurant. And mind the false friend: un tinto is a small black coffee, never red wine.",
      culture: [
        {
          label: "Politeness that gifts what you pay for",
          body: "The most disarming thing about Colombian service Spanish is “¿me regala…?”, literally “will you gift me…?”, used to ask for things you are plainly buying. Nobody expects anything free; “regalar” has simply drifted into a softener, a way of making a request feel gentle rather than demanding. You'll hear it for coffee, for the bill, for a bag in a shop. Outside Colombia it can puzzle people, but at home it is the polite default."
        },
        {
          label: "Usted keeps its distance, warmly",
          body: "A Bogotá waiter will almost always address you as usted, and expects it back, whatever your age. It is not cold: warmth arrives through diminutives, through “con mucho gusto”, and through the padded requests, not through switching to tú. Reaching for tú with staff can sound over-familiar, even presumptuous. The safe, respectful register in any restaurant, bank or shop in the capital is usted, cushioned by the courtesies stacked around it."
        },
        {
          label: "The tinto that isn't wine",
          body: "For a Spaniard “un tinto” is a glass of red wine; for a Colombian it is a small black coffee, carried in thermoses by street vendors and offered in every office. The word traces to “café tinto”, dark-tinted coffee. If you want wine, you must say “vino tinto” in full. A “perico” is coffee with a little milk, and a “pintado” is milkier still — a small vocabulary worth having before you order."
        },
        {
          label: "“A la orden” everywhere",
          body: "Walk through any Colombian market or shopping street and you'll hear “¡a la orden!” called from every doorway. It flexes with tone: a greeting as you enter, an offer of help as you browse, a reply to your “gracias” as you leave. It can even be a polite acknowledgement when you step aside for someone. Far from pushy, it is the country's all-purpose way of saying it is at your service."
        }
      ],
      pitfalls: [
        {
          mistake: "Asking “¿Me lleva la cuenta?” for “Bring me the bill”",
          whyItFails: "From your seat the bill is coming toward you, so the verb is traer, not llevar. “¿Me lleva la cuenta?” asks the waiter to carry the bill away somewhere else, which is the opposite of what you want.",
          sayInstead: "¿Me trae la cuenta?"
        },
        {
          mistake: "Ordering “un tinto” expecting a glass of red wine",
          whyItFails: "In Colombia “tinto” means a small black coffee; the red-wine sense belongs to Spain. Ask for “un tinto” after dinner and you'll get coffee, which delights some diners and baffles others.",
          sayInstead: "Una copa de vino tinto."
        },
        {
          mistake: "Saying “¿Puedo tener la cuenta?”, a word-for-word “Can I have the bill?”",
          whyItFails: "The English “have” calque sounds translated in Spanish. Colombians don't “have” the bill; they ask for it to be brought or, more warmly, gifted. The natural request uses traer or regalar.",
          sayInstead: "¿Me trae la cuenta? / ¿Me regala la cuenta?"
        },
        {
          mistake: "Barking “Tráigame la cuenta” with no softener at all",
          whyItFails: "Grammatically fine, but a bare command lands as brusque to a Bogotá ear tuned to padded, usted-based requests. The politeness lives in the wrapping — “¿me hace el favor…?”, “por favor”, “cuando pueda”.",
          sayInstead: "¿Me hace el favor y me trae la cuenta?"
        }
      ],
      variations: [
        {
          form: "¿Me trae la cuenta, por favor?",
          register: "polite neutral",
          region: "General Colombian",
          whenToUse: "The clean, safe request for the bill anywhere."
        },
        {
          form: "¿Me regala la cuenta?",
          register: "polite neutral",
          region: "Colombian",
          whenToUse: "The softer, very Colombian version built on “regalar”."
        },
        {
          form: "¿Me hace el favor y me trae la cuenta?",
          register: "polite formal",
          region: "Bogotá / Andean",
          whenToUse: "Extra-courteous, well suited to a formal or older service setting."
        },
        {
          form: "¿Nos trae la cuenta cuando pueda?",
          register: "polite neutral",
          region: "General Colombian",
          whenToUse: "For a table of several, unhurried, “when you can”."
        },
        {
          form: "La cuenta, por favor.",
          register: "neutral",
          region: "Universal",
          whenToUse: "Short and still polite when the waiter is passing and you must be quick."
        }
      ],
      prompt: "Alex wants the bill and asks “¿Me trae la cuenta?”. Last lesson he used llevar; why traer now?",
      choices: [
        "Because the bill is moving toward him, the speaker — traer is for things coming to where you are, and llevar for things heading away.",
        "Because traer is the polite verb and llevar the casual one, so customers are expected to use traer whenever they address a waiter.",
        "Because the two verbs swap roles indoors in Colombia, where traer covers restaurants and cafés and llevar is kept for the street outside."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Nothing on the menu is free, yet Alex asks “¿Me regala un jugo?”. What is he really doing?",
          choices: [
            "Asking for the juice to be taken off the bill as a gift, since “regalar” literally means to give something away for free.",
            "Making an ordinary, polite request — in Colombia “¿me regala…?” is a softened way to ask for something you will still pay for.",
            "Offering to buy a round of juice for the whole table as a gift, using “regalar” to sound generous toward all the others."
          ],
          answer: 1,
          tests: "“me regala” as a Colombian polite request, not a freebie"
        },
        {
          prompt: "The waiter offers “un tinto”. What arrives at the table?",
          choices: [
            "A glass of house red wine, because “tinto” keeps its Spanish-from-Spain meaning right across Latin America without any change.",
            "A fruity red punch, because in Bogotá cafés “tinto” has come to mean a sweet, non-alcoholic drink served mostly to children.",
            "A small cup of black coffee, because in Colombia “tinto” means café negro; red wine would be “una copa de vino tinto”."
          ],
          answer: 2,
          tests: "tinto as black coffee, a false friend"
        },
        {
          prompt: "Which request sounds most natural and polite to a Bogotá waiter?",
          choices: [
            "¿Me hace el favor y me trae la cuenta cuando pueda? No hay ningún afán, seguimos aquí conversando un rato.",
            "Tráigame ya mismo la cuenta, que tengo mucho afán y necesito salir rapidito de una vez para la casa.",
            "¿Puedo tener la cuenta ahora mismo aquí en la mesa donde estamos los dos sentados terminando de comer?"
          ],
          answer: 0,
          tests: "a softened traer request over a bare command or an English calque"
        },
        {
          prompt: "Alex, at his table, wants the waiter to bring bread over. From Alex's seat, which verb is right?",
          choices: [
            "¿Me lleva un pancito a la mesa, por favor, mientras esperamos el resto del almuerzo del día?",
            "¿Me trae un pancito a la mesa, por favor, mientras esperamos el resto del almuerzo del día?",
            "¿Me pone un pancito a la mesa, por favor, mientras esperamos el resto del almuerzo del día?"
          ],
          answer: 1,
          tests: "traer for something brought to the speaker's table"
        }
      ]
    },
    en: {
      title: "Pedir el almuerzo y la cuenta en Austin",
      situation:
        "Alejandra entra a un restaurante de Austin a la hora del almuerzo y la atiende un mesero en inglés. Tiene que pedir un café mientras mira la carta, encargar el plato del día y, al final, la cuenta. Todo se juega con las fórmulas norteamericanas “Could I get…?” y “Could you bring…?”, con el falso amigo del tinto y con la cortesía que en inglés va en el verbo, no en el pronombre.",
      setting: {
        who: "Un mesero de un restaurante concurrido, rápido pero amable, y Alejandra, que almuerza sola en un día de trabajo. No se conocen; todo el intercambio corre sobre las fórmulas corteses del inglés.",
        what: "Pedir el almuerzo: un café mientras decide, el plato del día y, al final, la cuenta, con algo de afán.",
        when: "Entre semana, en plena hora pico del mediodía, cuando los restaurantes del centro se llenan de oficinistas con el tiempo contado.",
        where: "Austin, un restaurante de centro que ofrece “lunch special”, el menú del día a precio fijo del mundo laboral estadounidense.",
        why: "Porque el restaurante es donde Alejandra practica la cortesía de servicio del inglés a plena potencia — los suavizadores, el “could I get…?”, la propina — y acertar la vuelve una clienta con la que da gusto tratar en vez de una extranjera perdida."
      },
      address: {
        form: "mixed",
        who: "El mesero y Alejandra se tratan de “you”, la única segunda persona del inglés, así que no hay que escoger entre tú y usted.",
        why: "El inglés no marca el respeto con el pronombre, porque solo existe “you”. La formalidad la cargan el verbo y el suavizador: “could I get…?”, “would you mind…?”, “please” hacen el trabajo que en Bogotá haría el usted.",
        ifYouSwitch: "No hay pronombre al que cambiarse. Para sonar más formal, Alejandra no toca el “you”: añade “please”, “could you” o “when you get a chance”; para sonar cercana, basta un tono relajado y un “thanks so much”."
      },
      dialogue: [
        {
          speaker: "Server",
          target: "Hi there! Can I start you off with something to drink, or do you need a minute with the menu?",
          translation: "¡Hola! ¿Le traigo algo de tomar para empezar, o necesita un minuto con la carta?",
          pronunciation: "jai der! kan ai start yu of uid SOM-zing tu drink, or du yu niid a MI-net uid de MEN-yu?",
          literal: "Hola ahí! ¿Puedo yo empezar te con algo a beber, o necesitas tú un minuto con el menú?",
          why: "“Can I start you off with…?” es la fórmula cordial del mesero norteamericano para ofrecer la bebida. La cortesía va en el verbo y en el tono, no en un pronombre: el inglés no tiene usted, solo “you”."
        },
        {
          speaker: "Alejandra",
          target: "Could I get a coffee while I look? Black, please.",
          translation: "¿Me regala un café mientras miro? Negro, por favor.",
          pronunciation: "kud ai get a KO-fi uail ai luk? blak, pliis",
          literal: "¿Podría yo conseguir un café mientras yo miro? Negro, por favor.",
          why: "“Could I get…?” es el equivalente norteamericano de “¿me regala…?”: la manera estándar y cortés de pedir. El pasado “could” no es tiempo, es cortesía. Y para el café solo se dice “black”, no “tinto”."
        },
        {
          speaker: "Server",
          target: "Sure thing. Just to confirm — black coffee, no cream? I'll bring it right over.",
          translation: "Claro. Para confirmar, ¿café negro, sin crema? Se lo traigo enseguida.",
          pronunciation: "shur zing. yost tu kon-FERM, blak KO-fi, nou kriim? ail bring it rait OU-ver",
          literal: "Seguro cosa. Solo para confirmar, café negro, no crema? Yo-traeré lo justo encima.",
          why: "“I'll bring it right over” usa “bring” porque el café va hacia la clienta; “right over” es “enseguida, para acá”. “Sure thing” es un “claro” coloquial, y “no cream” recuerda que en Norteamérica el café suele llevar leche o crema por defecto."
        },
        {
          speaker: "Alejandra",
          target: "Perfect. And could I get the lunch special too, please?",
          translation: "Perfecto. ¿Y me regala también el almuerzo del día, por favor?",
          pronunciation: "PER-fekt. and kud ai get de lonch SPE-shal tu, pliis?",
          literal: "Perfecto. ¿Y podría yo conseguir el almuerzo especial también, por favor?",
          why: "Otra vez “could I get…?” para pedir el plato. “The lunch special” es el almuerzo del día a precio fijo. El inglés no repite un pronombre de respeto: la fórmula cortés carga toda la formalidad que haga falta."
        },
        {
          speaker: "Server",
          target: "Great choice. I'll get that going and bring your coffee in a sec.",
          translation: "Buena elección. Ya lo voy preparando y le traigo el café en un momentito.",
          pronunciation: "greit chois. ail get dat GO-ing and bring yor KO-fi in a sek",
          literal: "Gran elección. Yo-conseguiré eso yendo y traeré tu café en un segundo.",
          why: "“I'll bring your coffee” otra vez con “bring”, hacia la clienta. “In a sec” (in a second) es un “ya mismo” coloquial. “Get that going” es poner en marcha el pedido: el inglés adora estos phrasal verbs con “get”."
        },
        {
          speaker: "Alejandra",
          target: "Thanks so much. Oh, and could you bring the bill with the food? I'm in a bit of a rush.",
          translation: "Muchas gracias. Ah, ¿y me trae la cuenta con la comida? Es que llevo algo de afán.",
          pronunciation: "zanks so moch. ou, and kud yu bring de bil uid de fuud? aim in a bit of a rosh",
          literal: "Gracias tanto. Oh, y podrías tú traer la cuenta con la comida? Yo-estoy en un poco de prisa.",
          why: "“Could you bring the bill?” es el titular: la cuenta va hacia ti, así que “bring”. En Estados Unidos se dice “the bill” tanto como “the check”. “I'm in a bit of a rush” es el modo natural de decir que llevas afán."
        }
      ],
      vocabulary: [
        {
          term: "to bring",
          explanation: "El verbo para traer algo hacia donde está quien habla. En un restaurante todo lo que el mesero acerca a tu mesa es “bring”, porque el movimiento termina en ti. Su espejo, para alejar algo, es “take”.",
          literal: "traer",
          useWhen: "Cuando algo viene hacia donde estás: “bring me the menu”, “bring the bill”, “bring some water”.",
          avoidWhen: "Cuando el objeto se aleja de ti hacia otro sitio; para llevárselo se usa “take”, no “bring”.",
          register: "neutral",
          region: "Inglés general; la misma lógica hacia-el-hablante que en español, con “bring” un poco más flexible.",
          related: ["to take", "to bring over", "to get", "to grab"],
          example: {
            target: "Could you bring me the menu, please?",
            translation: "¿Me trae la carta, por favor?"
          }
        },
        {
          term: "Could you bring me...?",
          explanation: "La forma cortés estándar para pedirle al mesero que te acerque algo. “Could” no marca pasado, marca cortesía. Es el equivalente directo de “¿me trae…?”.",
          literal: "¿podrías traerme...?",
          useWhen: "Al pedir cualquier cosa en la mesa: “could you bring me a fork?”, “could you bring the check?”.",
          avoidWhen: "Como orden pelada tipo “bring me a fork”, que sin “could” ni “please” suena brusca.",
          register: "polite neutral",
          region: "Inglés general; “can you bring me…?” es la variante un poco más informal.",
          related: ["Can you bring me...?", "Could I get...?", "Would you bring...?", "May I have...?"],
          example: {
            target: "Could you bring me some water?",
            translation: "¿Me trae un poco de agua?"
          }
        },
        {
          term: "Would you mind...?",
          explanation: "Un suavizador extra-cortés: “would you mind + -ing” pregunta literalmente “¿te importaría…?”. Es el eco inglés de “¿me hace el favor y…?”, ideal para pedir con mucho tacto.",
          literal: "¿te importaría...?",
          useWhen: "Para una petición especialmente delicada o formal: “would you mind bringing some napkins?”.",
          avoidWhen: "Entre amigos o para algo trivial, donde tanto rodeo puede sonar excesivo; basta con “could you…?”.",
          register: "polite formal",
          region: "Inglés general; ojo: responder “no” a un “would you mind…?” significa que sí, que con gusto.",
          related: ["Could you please...?", "If it's not too much trouble...", "When you get a chance...", "Sorry to bother you, but..."],
          example: {
            target: "Would you mind bringing the bill?",
            translation: "¿Me hace el favor y me trae la cuenta?"
          }
        },
        {
          term: "Could I get...?",
          explanation: "La petición por defecto en Norteamérica, el equivalente de “¿me regala…?”: pides algo que vas a pagar sin sonar demandante. “Can I get…?” es la versión más suelta.",
          literal: "¿podría yo obtener...?",
          useWhen: "Al pedir comida o bebida: “could I get a coffee?”, “can I get the special?”.",
          avoidWhen: "En inglés muy formal o británico, donde “could I have…?” suena algo más pulido que “get”.",
          register: "polite neutral",
          region: "Inglés norteamericano; “can I get…?” domina en las cafeterías de Estados Unidos.",
          related: ["Can I get...?", "Could I have...?", "I'll have...", "I'll take..."],
          example: {
            target: "Could I get a coffee, please?",
            translation: "¿Me regala un café, por favor?"
          }
        },
        {
          term: "black coffee",
          explanation: "Café negro, sin leche ni crema. Es el equivalente del tinto, pero ojo: en Norteamérica el café suele venir grande y, por defecto, uno le agrega crema y azúcar, así que hay que pedir “black” a propósito.",
          literal: "café negro",
          useWhen: "Al pedir café solo: “a black coffee, please”, “I'll take it black”.",
          avoidWhen: "No digas “a tinto”: la palabra no existe en inglés. Y “an espresso” es otra cosa, más corto y concentrado.",
          register: "neutral",
          region: "Inglés general; el “drip coffee” de Estados Unidos es más aguado y grande que el tinto colombiano.",
          related: ["coffee, black", "a dark roast", "an Americano", "a house coffee"],
          example: {
            target: "A black coffee, please.",
            translation: "Un tinto, por favor."
          }
        },
        {
          term: "the bill / the check",
          explanation: "La cuenta. En Estados Unidos se oye “the bill” tanto como “the check”; en Estados Unidos domina “the check”. Se pide con “could I get the bill?” o “could you bring the check?”.",
          literal: "la cuenta",
          useWhen: "Al terminar de comer: “could we get the bill?”, “just the check, please”.",
          avoidWhen: "No calques “the account” (eso es una cuenta bancaria) ni pidas “the note”; la palabra es “bill” o “check”.",
          register: "neutral",
          region: "“Check” es más estadounidense; “bill”, más británico y estadounidense. Ambas se entienden en todas partes.",
          related: ["the check", "the tab", "the receipt", "the total"],
          example: {
            target: "Could we get the bill, please?",
            translation: "¿Nos trae la cuenta, por favor?"
          }
        },
        {
          term: "here you go",
          explanation: "La frase con que un mesero te entrega algo: “here you go” o “here you are”, más o menos “aquí tiene”. Cierra el gesto de servir, como el “con gusto, a la orden” colombiano.",
          literal: "aquí va / aquí tiene",
          useWhen: "Al recibir o entregar algo en el mostrador o la mesa: “here you go, one black coffee”.",
          avoidWhen: "Para un regalo de verdad, donde “here, this is for you” suena mejor; “here you go” es de servicio cotidiano.",
          register: "friendly informal",
          region: "Inglés general; “there you go” y “here you are” son variantes casi idénticas.",
          related: ["here you are", "there you go", "you're welcome", "my pleasure"],
          example: {
            target: "Here you go — one black coffee.",
            translation: "Aquí tiene, un café negro."
          }
        }
      ],
      note:
        "Todo lo que el mesero acerca a tu mesa es “bring”, porque termina en ti: “could you bring the bill?”. Para pedir, el norte usa “Could I get…?” — el gemelo de “¿me regala…?” — y para el favor con más tacto, “would you mind…?”. La cortesía inglesa vive en el verbo y en el suavizador, no en un pronombre, porque solo existe “you”. Y el café negro se pide “black”: “tinto” no significa nada en inglés.",
      culture: [
        {
          label: "La cortesía va en el verbo, no en el pronombre",
          body: "El inglés no tiene usted, así que toda la formalidad que en Bogotá recae en el pronombre, en Estados Unidos se reparte en el verbo y en los suavizadores. “Could I get…?”, “would you mind…?”, “please”, “when you get a chance” hacen el trabajo que haría el usted. Por eso un mismo “you” sirve para el mesero y para tu mejor amigo: lo que cambia es el envoltorio de la frase, no la palabra con que lo llamas."
        },
        {
          label: "“Could I get…?”: pedir sin exigir",
          body: "En cafeterías y restaurantes de Norteamérica, la fórmula reina para pedir es “Can I get…?” o “Could I get…?”. Suena rara traducida — “¿puedo obtener…?” — pero cumple la misma función social que el colombiano “¿me regala…?”: pedir algo que vas a pagar sin que suene a orden. No implica que sea gratis. Es tan automática que muchos la usan hasta para pedir la cuenta: “Could I get the bill?”."
        },
        {
          label: "El café del norte no es el tinto",
          body: "Pedir café en Estados Unidos reserva sorpresas para quien viene del tinto. El “drip coffee” llega en vasos grandes, más aguado, y por defecto se le añade crema y azúcar, así que hay que pedir “black” si lo quieres solo. No existe “a tinto”. Y está la cultura del café para llevar: cadenas como Shipley Do-Nuts son casi una institución, y encargar “a large coffee with room” — grande, con espacio para la crema — es todo un código local."
        },
        {
          label: "La propina no es opcional",
          body: "A diferencia de Colombia, donde el 10% suele venir incluido y se pregunta “¿está incluido el servicio?”, en Estados Unidos la propina la calcula y la deja el cliente, y ronda el 15–20%. No dejarla se lee como una queja seria. Al pedir “the bill”, prepárate para que la máquina o la cuenta te ofrezca opciones de propina. Es una diferencia cultural que conviene tener clara antes de sentarte a comer."
        }
      ],
      pitfalls: [
        {
          mistake: "“Can you take me the bill?”",
          whyItFails: "Hacia el hablante se usa “bring”, no “take”: la cuenta viene hacia ti. “Take me the bill” suena a que el mesero se la lleva a otra parte, justo lo contrario de lo que pides. Es el mismo error de deixis, en espejo.",
          sayInstead: "Could you bring me the bill?"
        },
        {
          mistake: "“Can I get a tinto, please?”",
          whyItFails: "“Tinto” no existe en inglés; nadie en un café estadounidense sabrá qué es. El café solo se pide “a black coffee” o “a coffee, black”. Si lo que quieres es vino, entonces es “a glass of red wine”.",
          sayInstead: "Could I get a black coffee, please?"
        },
        {
          mistake: "“Bring me one coffee.”",
          whyItFails: "Dos problemas: “one” es número, no artículo — en inglés se dice “a coffee” — y la orden pelada, sin “could” ni “please”, suena brusca. La cortesía inglesa vive en el suavizador, no en el pronombre.",
          sayInstead: "Could I get a coffee, please?"
        },
        {
          mistake: "“I want the account, please.”",
          whyItFails: "“Account” es una cuenta bancaria, no la cuenta del restaurante; y “I want…” suena exigente frente a “could I get…?”. Para la cuenta de la comida la palabra es “bill” o “check”.",
          sayInstead: "Could I get the bill, please?"
        }
      ],
      variations: [
        {
          form: "Could I get the bill, please?",
          register: "polite neutral",
          region: "Inglés norteamericano",
          whenToUse: "La forma estándar y segura para pedir la cuenta."
        },
        {
          form: "Could you bring us the check when you get a chance?",
          register: "polite neutral",
          region: "Inglés norteamericano",
          whenToUse: "Para una mesa de varios, sin prisa, con “when you get a chance”."
        },
        {
          form: "Would you mind bringing the bill?",
          register: "polite formal",
          region: "Inglés general",
          whenToUse: "Extra-cortés, cuando quieres pedir con mucho tacto."
        },
        {
          form: "Can we get the check?",
          register: "friendly informal",
          region: "Inglés norteamericano",
          whenToUse: "Más suelto, entre amigos o en un sitio informal."
        },
        {
          form: "Just the bill, thanks.",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Corto y cortés cuando el mesero pasa y hay que ser rápido."
        }
      ],
      prompt: "Alejandra pide la cuenta con “Could you bring the bill?”. ¿Por qué “bring” y no “take”?",
      choices: [
        "Porque “bring” es la forma cortés y “take” la brusca, y con el mesero siempre corresponde elegir el verbo más cortés de los dos.",
        "Porque dentro de un restaurante los verbos cambian de papel, y en Norteamérica “bring” se reserva para la comida y “take” para la calle.",
        "Porque la cuenta se mueve hacia ella, que es quien habla — “bring” es para lo que viene hacia ti y “take” para lo que se aleja."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Alejandra quiere pedir un café que va a pagar, con cortesía. ¿Cuál es la forma más natural en un café estadounidense?",
          choices: [
            "Could I get a coffee, please? I'll grab a table by the window and wait for it right over there.",
            "Give me one coffee, please. I'll grab a table by the window and wait for it right over there.",
            "I want a coffee now, please. I'll grab a table by the window and wait for it right over there."
          ],
          answer: 0,
          tests: "“Could I get…?” como petición cortés, el gemelo de “¿me regala…?”"
        },
        {
          prompt: "En el café le ofrecen “a black coffee”. ¿Qué es?",
          choices: [
            "Una copa de vino tinto de la casa, porque “black” describe el color oscuro de la bebida que sirven después de comer.",
            "Un café negro, sin leche ni crema: es el equivalente del tinto, aunque más grande y aguado que el colombiano.",
            "Un café con bastante leche y azúcar, que es como viene el café por defecto en la mayoría de los locales del norte."
          ],
          answer: 1,
          tests: "“black coffee” como café negro, el equivalente del tinto"
        },
        {
          prompt: "¿Cuál petición suena más natural y cortés para pedir la cuenta a un mesero estadounidense?",
          choices: [
            "Bring me the account right now, because I really need to leave this place quickly and get back home.",
            "I want the note here at the table where the two of us are sitting and finishing the last of our food.",
            "Could you bring us the bill when you get a chance? There's no rush, we're happy to keep chatting here."
          ],
          answer: 2,
          tests: "una petición suavizada con “bring” frente a una orden pelada o un calco"
        },
        {
          prompt: "Alejandra, sentada a la mesa, quiere que el mesero le acerque pan. Desde su silla, ¿qué verbo encaja?",
          choices: [
            "Could you bring some bread to the table, please, while we wait for the rest of our lunch to be ready?",
            "Could you take some bread to the table, please, while we wait for the rest of our lunch to be ready?",
            "Could you carry some bread to the table, please, while we wait for the rest of our lunch to be ready?"
          ],
          answer: 0,
          tests: "“bring” para algo que se acerca a la mesa del hablante"
        }
      ]
    }
  },
  {
    id: "wrapping-up-a-visit-at-a-paisa-friends-place",
    level: "Starter · Home and neighborhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "familiar",
    pathways: ["foundation"],
    verb: "dejar",
    review: "pending",
    es: {
      title: "La despedida en la casa de un amigo paisa",
      situation:
        "Estás de visita en la casa de un amigo en Medellín y ya te vas a ir. Entre el «dejá eso ahí» para que no laves los platos, el «dejame contarte» de una historia, la chaqueta que dejaste en el cuarto y el «deje así» final, el verbo dejar aparece con cuatro sentidos distintos en una sola conversación. Todo en voseo paisa, con parce, pues y bien pueda.",
      setting: {
        who: "Alex, an English speaker who has spent the evening at a paisa friend's place, and Samuel, the host, who speaks the warm, vos-heavy Spanish of Medellín. They are close friends, so everything is informal.",
        what: "Saying goodbye at the end of a visit: offering to help clean up, catching up on Samuel quitting smoking, retrieving a forgotten jacket, and reading the paisa sign-off “deje así”.",
        when: "Late on a weeknight, at the point in the evening when the guest starts making leaving noises but nobody is really in a hurry.",
        where: "An apartment in Medellín, the heart of paisa country, where voseo is the everyday default and hospitality is a point of regional pride.",
        why: "Because “dejar” is really several verbs wearing one coat — leave behind, quit, let, break up, drop it — and a goodbye at a friend's place packs most of them into five minutes. Reading “deje así” correctly is the difference between relaxing and freezing up."
      },
      address: {
        form: "vos",
        who: "Samuel uses paisa voseo with Alex — “dejá”, “sentate”, “contame” — the friendly second person of Medellín, and Alex answers in the same key.",
        why: "In Medellín and most of Antioquia, vos is the unmarked friendly form between equals, warmer and more local than tú. The verb endings carry the stress on the last syllable: “dejá”, “sentate”, “andá”, “contame”.",
        ifYouSwitch: "Switching to usted with a close paisa friend can sound suddenly cold or mock-serious, though paisas also use usted affectionately, even with kids and pets. Going to tú is not wrong, just less local; nobody will correct you, but vos is what fits in."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Bueno, parce, ya me voy. ¿Te ayudo a lavar los platos antes de irme?",
          translation: "Alright, man, I'm heading out now. Should I help you wash the dishes before I go?",
          pronunciation: "BWEH-no, PAR-seh, ya meh VOY. teh a-YOO-do a la-VAR los PLA-tos AN-tes deh EER-meh?",
          literal: "Good, buddy, already myself I-go. You I-help to wash the plates before of to-go-myself?",
          why: "“Parce” is the paisa short form of “parcero”, buddy, now used all over Colombia. Note “me voy” — reflexive “irse” for setting off, which feels more final than plain “voy”, and “irme” at the end for “before I leave”."
        },
        {
          speaker: "Samuel",
          target: "¡No, fresco! Dejá eso ahí, yo después lavo. Sentate un momentico.",
          translation: "No, don't worry! Leave that there, I'll wash up later. Sit down for a sec.",
          pronunciation: "no, FRES-ko! deh-YA EH-so a-EE, yo des-PWES LA-vo. sen-TA-teh oon mo-men-TEE-ko",
          literal: "No, fresh! Leave that there, I later wash. Sit-yourself a little-moment.",
          why: "Here is “dejar” sense one: leave something where it is. Paisa voseo stresses the last syllable — “dejá”, “sentate” — where tú would say “deja”, “siéntate”. “Fresco” means relax, and the diminutive “momentico” softens it into “just a tiny sec”."
        },
        {
          speaker: "Alex",
          target: "Listo pues. Oíste, ¿es verdad que dejaste de fumar?",
          translation: "Alright then. Hey, is it true you quit smoking?",
          pronunciation: "LEES-to pwes. o-EES-teh, es ver-DAD keh deh-HAS-teh deh foo-MAR?",
          literal: "Ready then. You-heard, is truth that you-left of to-smoke?",
          why: "“Dejar de + infinitive” means to quit doing something — the most useful idiom in this lesson. “Pues” tacked onto “listo” is pure paisa rhythm, and “oíste” (literally “you heard”) is the Medellín way to say “hey, listen”."
        },
        {
          speaker: "Samuel",
          target: "Sí, parce, ya llevo tres meses sin un solo cigarrillo. Me costó, pero dejame contarte cómo hice.",
          translation: "Yeah, man, it's been three months now without a single cigarette. It was hard, but let me tell you how I did it.",
          pronunciation: "see, PAR-seh, ya YEH-vo tres MEH-ses seen oon SO-lo see-ga-REE-yo. meh kos-TO, peh-ro deh-YA-meh kon-TAR-teh KO-mo EE-seh",
          literal: "Yes, buddy, already I-carry three months without one single cigarette. Me it-cost, but let-me to-tell-you how I-did.",
          why: "Two senses collide: “dejar de fumar” (quit) and “dejame contarte” (let me tell you). “Dejame” — paisa voseo, stress on “ja” — is the everyday “let me”. And “llevo tres meses” uses “llevar” for elapsed time: how long something has been going on."
        },
        {
          speaker: "Alex",
          target: "Uy, sí, contame. Ah, y casi lo olvido: dejé la chaqueta en tu cuarto.",
          translation: "Oh yeah, tell me. Oh, and I almost forgot: I left my jacket in your room.",
          pronunciation: "wee, see, kon-TA-meh. ah, ee KA-si lo ol-VEE-do: deh-HEH la cha-KEH-ta en too KWAR-to",
          literal: "Ugh, yes, tell-me. Ah, and almost it I-forget: I-left the jacket in your room.",
          why: "“Dejé la chaqueta” is “dejar” sense one in the past — left an object behind. Paisa voseo imperative “contame” (tell me) again puts stress on the last syllable. “Uy” is a very Colombian interjection of surprise or emphasis."
        },
        {
          speaker: "Samuel",
          target: "Ah, cierto. Andá por ella, bien pueda. Y lo del cigarrillo… ya te cuento, pero no le parés bolas, deje así por ahora.",
          translation: "Oh, right. Go grab it, go ahead. And the smoking thing… I'll tell you, but don't pay it much mind, let's just drop it for now.",
          pronunciation: "ah, SYER-to. an-DA por EH-ya, byen PWEH-da. ee lo del see-ga-REE-yo… ya teh KWEN-to, peh-ro no leh pa-RES BO-las, DEH-heh a-SEE por a-O-ra",
          literal: "Ah, true. Go for it, well can. And the of-the cigarette… already you I-tell, but not to-it you-stop balls, leave thus for now.",
          why: "“Deje así” means “drop it, never mind” — not a literal order to leave anything. “Bien pueda” is a warm paisa “go ahead, be my guest”, and “no parar bolas” is Colombian slang for “not pay attention”. Three idioms in one breath."
        }
      ],
      vocabulary: [
        {
          term: "dejar",
          explanation: "The core sense: to leave something behind, to put it down and let it stay. It always takes an object — the thing left — which is what separates it from “salir” or “irse” (to leave a place, to depart).",
          literal: "to leave (something)",
          useWhen: "Leaving an object somewhere: “dejá las llaves en la mesa”, “dejé la chaqueta en el cuarto”, “dejalo ahí”.",
          avoidWhen: "For departing from a place — that is “salir de” or “irse”. “Dejé la casa” means you moved out, not that you stepped out.",
          register: "neutral",
          region: "All of Colombia; the paisa voseo imperative is “dejá”, elsewhere “deja” (tú) or “deje” (usted).",
          related: ["dejar ahí", "dejé las llaves", "dejar la maleta", "dejalo ahí"],
          example: {
            target: "Dejá las llaves en la mesa.",
            translation: "Leave the keys on the table."
          }
        },
        {
          term: "dejar de + infinitivo",
          explanation: "To quit or stop doing something. The “de” is obligatory and the thing you stop goes in the infinitive. This is how you talk about kicking a habit — the single most common frame for “dejar” in conversation.",
          literal: "to leave off + verb",
          useWhen: "Quitting a habit or stopping an action: “dejé de fumar”, “dejá de molestar”, “no dejo de pensar en eso”.",
          avoidWhen: "Never drop the “de”: “dejé fumar” is broken. And do not use it for departing — this is only about stopping an activity.",
          register: "neutral",
          region: "Universal Spanish; in Medellín you will also hear the vos imperative “dejá de…” with final stress.",
          related: ["dejé de fumar", "dejar de tomar", "no dejar de", "dejá de molestar"],
          example: {
            target: "Dejé de tomar tinto en la noche.",
            translation: "I quit drinking black coffee at night."
          }
        },
        {
          term: "dejame / dejá (que)",
          explanation: "“Let me” / “let (me)…”, the permission-and-offer sense. In paisa voseo it is “dejame”, with the stress on “ja”; the tú version is “déjame”. It softens an offer or asks for a turn: let me help, let me tell you, let me see.",
          literal: "let-me / let (that)",
          useWhen: "Offering to do something or asking to: “dejame ayudarte”, “dejame ver”, “dejá que te explique”.",
          avoidWhen: "Do not confuse it with “dejar de”; “dejame fumar” is “let me smoke”, the opposite of “dejé de fumar” (I quit smoking).",
          register: "friendly informal",
          region: "Medellín / paisa voseo stresses the last syllable: “dejame”, “dejá”. Elsewhere “déjame”, “deja”.",
          related: ["dejame ver", "dejame contarte", "dejá que te explique", "dejame ayudarte"],
          example: {
            target: "Dejame ayudarte con eso.",
            translation: "Let me help you with that."
          }
        },
        {
          term: "dejar a alguien",
          explanation: "With a person and no place attached, it means to break up with them — to end a relationship. Add a place and it flips to dropping someone off. That naming-the-place detail is what keeps you out of trouble.",
          literal: "to leave someone",
          useWhen: "Talking about a break-up: “me dejó”, “dejó a su novio”. Or a drop-off, but only with a place: “lo dejé en la casa”.",
          avoidWhen: "Do not say “dejé a mi novia” meaning you left her somewhere; without a place it reads as “I dumped her”.",
          register: "neutral",
          region: "All of Colombia; the break-up reading is universal across the Spanish-speaking world.",
          related: ["me dejó", "dejar la relación", "terminar con alguien", "cortar con alguien"],
          example: {
            target: "Manuela dejó a su novio.",
            translation: "Manuela broke up with her boyfriend."
          }
        },
        {
          term: "deje así / dejá así",
          explanation: "A set phrase meaning “never mind, drop it, forget about it”. It is about the topic of conversation, not any physical object, so nobody is asking you to leave a thing in place. Very Colombian, very paisa, and easy to misread.",
          literal: "leave (it) like that",
          useWhen: "Waving off a fuss or a topic: “ah, deje así, no era importante”, “deje así que yo lo arreglo”.",
          avoidWhen: "Do not read it literally as “leave that where it is”; it is conversational, meaning “let it go”.",
          register: "friendly informal",
          region: "Colombia-wide; the paisa voseo variant “dejá así” is heard all over Medellín.",
          related: ["dejá así", "no importa", "déjalo así", "olvidá eso"],
          example: {
            target: "Ah, deje así, no era importante.",
            translation: "Oh, never mind, it wasn't important."
          }
        },
        {
          term: "dejar en paz",
          explanation: "To leave someone or something alone, to stop bothering it. Literally “to leave in peace”. It is the go-to when you want someone to quit pestering a person, a pet, or a touchy subject.",
          literal: "to leave in peace",
          useWhen: "Asking for space or telling someone to stop pestering: “dejame en paz”, “dejá al perro en paz”.",
          avoidWhen: "It is firmer than “deje así”; “dejame en paz” can sound sharp, so save it for when you mean it.",
          register: "neutral",
          region: "Universal Spanish; the vos forms “dejá”, “dejame” mark it as paisa in Medellín.",
          related: ["dejame en paz", "dejá la pelea", "no molestar", "dejar tranquilo"],
          example: {
            target: "Dejá al perro en paz.",
            translation: "Leave the dog alone."
          }
        },
        {
          term: "bien pueda",
          explanation: "A warm paisa way to say “go ahead, be my guest, feel free”. It grants permission generously and often pairs with “siga”. Not strictly a form of “dejar”, but it is the host's twin of “dejá” — the yes that lets you do the thing.",
          literal: "well you-may",
          useWhen: "Granting permission hospitably: “¿Puedo pasar? — Bien pueda, siga.” “Bien pueda coja una.”",
          avoidWhen: "It is regional and warm; in a stiff, formal setting a plain “adelante” or “por supuesto” fits better.",
          register: "friendly informal",
          region: "Medellín / paisa and the coffee region; less common in Bogotá, where “siga” alone does the job.",
          related: ["siga", "hágale", "con confianza", "bien pueda siga"],
          example: {
            target: "¿Puedo pasar? — Bien pueda, siga.",
            translation: "May I come in? — Go ahead, come in."
          }
        }
      ],
      note:
        "“Dejar” is at least five verbs in one. Plain “dejar” leaves an object behind (“dejé la chaqueta”); “dejar de + infinitive” quits a habit (“dejé de fumar”); “dejame + infinitive” means “let me” (“dejame contarte”); “dejar a alguien” with no place means a break-up; and “deje así” means “never mind, drop it”. That last one trips up learners the most — it is a conversational “let it go”, not an order to leave anything where it is. In Medellín, expect all of these in voseo, with the stress on the final syllable.",
      culture: [
        {
          label: "El voseo paisa",
          body: "In Medellín and most of Antioquia, the everyday friendly “you” is vos, not tú. You hear it in the verb endings, which pull the stress to the last syllable: “dejá”, “sentate”, “andá”, “contame”, “vení”. It is not slangy or rustic — professionals, kids and grandparents all use it, and it marks you as at home in paisa country. Tú sounds slightly foreign there, and usted is used both for distance and, oddly, for great affection, even with pets."
        },
        {
          label: "“Deje así”: soltar el tema con elegancia",
          body: "“Deje así” (or the vos “dejá así”) is how Colombians gracefully close a topic that is getting awkward, unimportant, or too much trouble. It means “never mind, drop it, it's fine” — a social off-ramp, not an instruction about any object. Reaching for it lets everyone save face without an argument. Foreigners often freeze, thinking they have been told to leave something physically in place, when really they have just been handed a gentle “let's move on”."
        },
        {
          label: "Dejar de fumar y “no parar bolas”",
          body: "“Dejar de + infinitive” is the frame for kicking any habit — fumar, tomar, trasnochar. Around it swirls a lot of colloquial Colombian: “no parar bolas” means “not pay attention”, so “no le parés bolas” is “don't pay it any mind”. Paisa speech is dense with these fixed expressions, and stringing them together — “fresco, no le parés bolas, deje así” — is exactly how a local waves off worry. Learning the verb without the slang around it leaves you half-deaf to the conversation."
        },
        {
          label: "La hospitalidad paisa",
          body: "Medellín takes hospitality personally. A host will refuse your help with the dishes (“dejá eso ahí, fresco”), press you to sit a moment longer (“sentate un momentico”), and wave you toward whatever you need with “bien pueda, siga”. Declining too firmly can read as cold, so the graceful move is to accept a little of the warmth. The diminutives — “momentico”, “tintico”, “ratico” — are part of the charm, softening everything into something cozier and smaller."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “Dejé la casa a las ocho” to mean “I left the house at eight.”",
          whyItFails: "“Dejar la casa” means to leave the house behind for good — to move out or give it up. For simply stepping out, Spanish uses “salir de” or “irse de”. Transitive “dejar” needs an object you leave behind, not a place you walk out of.",
          sayInstead: "Salí de la casa a las ocho."
        },
        {
          mistake: "Saying “Dejé a mi novia” to mean you left her at the party.",
          whyItFails: "With no place attached, “dejar a alguien” means to break up with them. “Dejé a mi novia” lands as “I dumped my girlfriend”, not “I left her somewhere”. To mean drop-off, you must name the place.",
          sayInstead: "La dejé en la fiesta."
        },
        {
          mistake: "Taking “deje así” as an instruction to leave an object where it is.",
          whyItFails: "“Deje así” is a fixed phrase meaning “never mind, drop it, forget it” — it is about the topic, not any object. A learner who starts rearranging things or freezes up has misread a conversational “let it go” as a physical command.",
          sayInstead: "Bueno, listo, deje así."
        },
        {
          mistake: "Saying “Dejé fumar hace un año” to mean “I quit smoking a year ago.”",
          whyItFails: "To quit doing something is “dejar DE + infinitive”; the “de” is not optional. “Dejé fumar” drops it and sounds broken, or even like “I let someone smoke”. The fixed frame is “dejé de fumar”, “dejar de tomar”, “dejar de molestar”.",
          sayInstead: "Dejé de fumar hace un año."
        }
      ],
      variations: [
        {
          form: "Dejá eso ahí, yo lo hago.",
          register: "friendly informal",
          region: "Medellín / paisa (voseo)",
          whenToUse: "Telling a friend to leave a chore; warm and local."
        },
        {
          form: "Deje eso ahí, yo me encargo.",
          register: "polite service",
          region: "Colombia (usted)",
          whenToUse: "Same idea with usted, more formal or with a stranger."
        },
        {
          form: "Dejame ayudarte con eso.",
          register: "friendly informal",
          region: "Medellín / paisa (voseo)",
          whenToUse: "Offering help; the “let me…” sense with vos."
        },
        {
          form: "¿Dejamos así por hoy?",
          register: "neutral",
          region: "Colombia general",
          whenToUse: "Wrapping up: “shall we leave it here for today?”"
        },
        {
          form: "Deje así, no se preocupe.",
          register: "polite",
          region: "Colombia (usted)",
          whenToUse: "Telling someone to drop it, reassuringly, with usted."
        }
      ],
      prompt: "Samuel says “deje así por ahora.” What is he telling Alex?",
      choices: [
        "That Alex should physically leave the jacket where it is and go back to pick it up from the bedroom some other day.",
        "That they should drop the topic for now — “never mind, let it go” — with no object being left anywhere at all.",
        "That Samuel wants Alex to stay a good while longer and leave the whole plan of heading home for another moment."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Alex wants to say he quit drinking black coffee at night. Which is correct?",
          choices: [
            "Dejé tomar tinto en la noche, porque no me dejaba dormir bien y al otro día amanecía cansado.",
            "Salí de tomar tinto en la noche, porque no me dejaba dormir bien y al otro día amanecía cansado.",
            "Dejé de tomar tinto en la noche, porque no me dejaba dormir bien y al otro día amanecía cansado."
          ],
          answer: 2,
          tests: "“dejar de + infinitivo” with the obligatory “de” for quitting"
        },
        {
          prompt: "Alex means “I left the house at eight” — that he departed. Which fits?",
          choices: [
            "Salí de la casa a las ocho y cogí el metro directo hacia el centro sin parar en ningún lado.",
            "Dejé la casa a las ocho y cogí el metro directo hacia el centro sin parar en ningún lado.",
            "Dejé de la casa a las ocho y cogí el metro directo hacia el centro sin parar en ningún lado."
          ],
          answer: 0,
          tests: "“salir de” for departing versus “dejar” for leaving behind"
        },
        {
          prompt: "Alex wants to say he dropped his friend off at the party — not a break-up. Which is safe?",
          choices: [
            "Dejé a mi amigo, así no más, y después seguí en el carro para la casa a descansar un rato.",
            "Dejé a mi amigo en la fiesta y después seguí en el carro para la casa a descansar un rato.",
            "Dejé de mi amigo en la fiesta y después seguí en el carro para la casa a descansar un rato."
          ],
          answer: 1,
          tests: "naming the place so “dejar a alguien” means drop-off, not break-up"
        },
        {
          prompt: "Samuel wants to say “let me tell you how I did it” in natural paisa. Which fits?",
          choices: [
            "Déjame de contarte cómo hice, que es una historia larga y ahí después con calma te la echo toda.",
            "Dejame salir a contarte cómo hice, que es una historia larga y ahí después con calma te la echo toda.",
            "Dejame contarte cómo hice, que es una historia larga y ahí después con calma te la echo toda."
          ],
          answer: 2,
          tests: "“dejame + infinitivo” (voseo) for “let me…”"
        }
      ]
    },
    en: {
      title: "La despedida en la casa de una amiga",
      situation:
        "Alejandra está de visita en casa de una amiga en Estados Unidos y ya se va a ir. Entre el «leave that there» para que no lave los platos, el «let me tell you» de una historia, la chaqueta que dejó en el cuarto y el «let's drop it» final, el verbo inglés se reparte en varias palabras distintas donde el español solo usaría «dejar». Todo con la cortesía en el verbo, no en el pronombre.",
      setting: {
        who: "Alejandra, una hispanohablante que pasó la tarde en casa de una amiga estadounidense, y Kayla, la anfitriona, que habla el inglés relajado y cordial del día a día. Son amigas, así que todo es informal.",
        what: "Despedirse al final de una visita: ofrecer ayuda para recoger, ponerse al día sobre que Kayla dejó de fumar, recuperar una chaqueta olvidada y leer bien el «let's drop it».",
        when: "Ya tarde, entre semana, en ese momento de la noche en que el invitado empieza a hacer gestos de irse pero nadie tiene afán de verdad.",
        where: "Un apartamento en Estados Unidos, donde el inglés no marca el respeto con el pronombre y la calidez se dice con el tono y con fórmulas como «go ahead» o «feel free».",
        why: "Porque «dejar» en español es en realidad varios verbos en uno — leave, quit, let, break up, drop it — y el inglés los separa. Una despedida en casa de una amiga los junta casi todos en cinco minutos, y leer bien «let's drop it» es la diferencia entre relajarse y quedarse en blanco."
      },
      address: {
        form: "mixed",
        who: "Kayla y Alejandra se tratan de «you», la única segunda persona del inglés, así que no hay que escoger entre tú, vos o usted.",
        why: "El inglés no marca la cercanía ni el respeto con el pronombre, porque solo existe «you». El registro lo cargan las palabras: «don't worry about it», «go ahead», «feel free», «let me» suavizan y acercan sin cambiar el pronombre.",
        ifYouSwitch: "No hay pronombre que cambiar. Para sonar más cercana, Alejandra baja el tono y suelta un «no worries»; para sonar más formal, no toca el «you», sino que añade «would you mind», «please» o «if that's okay»."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Okay, I'm going to head out now. Do you want me to help you wash the dishes before I go?",
          translation: "Bueno, ya me voy. ¿Querés que te ayude a lavar los platos antes de irme?",
          pronunciation: "o-KEI, aim GO-ing tu jed aut nau. du yu uant mi tu jelp yu uash de DI-shes bi-FOR ai gou?",
          literal: "Okay, yo estoy yendo a encabezar afuera ahora. ¿Quieres tú mí ayudar te lavar los platos antes yo voy?",
          why: "«To head out» es una forma coloquial y muy común de decir que uno se va. Fíjate en «do you want me to help…?»: el inglés arma el ofrecimiento con «want + objeto + to + verbo», sin el subjuntivo del español «que te ayude»."
        },
        {
          speaker: "Kayla",
          target: "No, don't worry about it! Leave that there, I'll wash up later. Have a seat for a bit.",
          translation: "¡No, tranquila! Dejá eso ahí, yo después lavo. Sentate un rato.",
          pronunciation: "nou, dount UO-rri a-BAUT it! liiv dat der, ail uash op LEI-ter. jav a siit for a bit",
          literal: "No, no te preocupes acerca de ello! Deja eso allí, yo lavaré arriba más tarde. Ten un asiento por un poco.",
          why: "«Leave that there» es el «dejar» básico: dejar un objeto donde está. «Wash up» es un phrasal verb para lavar los platos, y «have a seat» es la fórmula amable de «sentate». La cortesía va en el tono, no en un pronombre."
        },
        {
          speaker: "Alejandra",
          target: "Alright then. Hey, is it true that you quit smoking?",
          translation: "Listo pues. Oíste, ¿es verdad que dejaste de fumar?",
          pronunciation: "ol-RAIT den. jei, is it truu dat yu kuit SMOU-king?",
          literal: "Muy bien entonces. Oye, ¿es verdad que tú dejaste fumando?",
          why: "El inglés no tiene un «dejar de + infinitivo»: usa un verbo aparte, «to quit», seguido del gerundio — «quit smoking», «quit drinking». No se dice «quit to smoke». «Alright then» cierra un tema y abre otro."
        },
        {
          speaker: "Kayla",
          target: "Yeah, it's been three months now without a single cigarette. It was hard, but let me tell you how I did it.",
          translation: "Sí, ya llevo tres meses sin un solo cigarrillo. Me costó, pero dejame contarte cómo hice.",
          pronunciation: "yea, its bin zrii monzs nau ui-DHAUT a SIN-gol si-ga-RET. it uos jard, bot let mi tel yu jau ai did it",
          literal: "Sí, ello ha sido tres meses ahora sin un solo cigarrillo. Ello fue duro, pero deja mí decir te cómo yo hice ello.",
          why: "«Let me tell you» es el «dejame contarte»: «let + objeto + verbo sin to». Y para el tiempo transcurrido el inglés dice «it's been three months», donde el español usa «llevar»: «llevo tres meses». Dos estructuras que no se calcan."
        },
        {
          speaker: "Alejandra",
          target: "Oh yeah, tell me. Oh, and I almost forgot — I left my jacket in your room.",
          translation: "Uy, sí, contame. Ah, y casi lo olvido: dejé la chaqueta en tu cuarto.",
          pronunciation: "ou yea, tel mi. ou, and ai OL-moust for-GOT — ai left mai YA-ket in yor ruum",
          literal: "Oh sí, dime. Oh, y yo casi olvidé — yo dejé mi chaqueta en tu cuarto.",
          why: "«I left my jacket» es «dejé la chaqueta»: «leave» en pasado, que es irregular («left»), para un objeto dejado atrás. Ojo: en inglés hay que poner el posesivo «my jacket», no «the jacket», donde el español usa el artículo."
        },
        {
          speaker: "Kayla",
          target: "Oh, right. Go ahead and grab it. And the smoking thing… I'll tell you, but don't worry about it — let's just drop it for now.",
          translation: "Ah, cierto. Andá por ella, bien pueda. Y lo del cigarrillo… ya te cuento, pero no le parés bolas, deje así por ahora.",
          pronunciation: "ou, rait. gou a-JED and grab it. and de SMOU-king zing… ail tel yu, bot dount UO-rri a-BAUT it — lets yost drop it for nau",
          literal: "Oh, correcto. Ve adelante y agarra ello. Y la fumando cosa… yo te diré, pero no te preocupes acerca de ello — dejemos justo soltar ello por ahora.",
          why: "«Go ahead» es el «bien pueda»: permiso cordial. Y «let's drop it» es exactamente «deje así»: soltar el tema, no dejar un objeto. «Drop» aquí no es dejar caer nada físico, es abandonar la conversación."
        }
      ],
      vocabulary: [
        {
          term: "to leave (behind)",
          explanation: "El sentido básico: dejar un objeto atrás, ponerlo en un sitio y que se quede. Su pasado es irregular, «left». Ojo con no confundirlo con dejar un hábito o una persona: para eso el inglés usa otros verbos.",
          literal: "dejar (algo)",
          useWhen: "Al dejar un objeto en algún lado: «I left my keys on the table», «leave it there», «I left my jacket in your room».",
          avoidWhen: "No lo uses para dejar de fumar («quit») ni, sin lugar, para dejar a alguien, que se lee como una ruptura.",
          register: "neutral",
          region: "Inglés general; el pasado «left» sirve tanto para objetos como para salir de un lugar («I left the house»).",
          related: ["to leave behind", "to leave it there", "I left my keys", "leave it here"],
          example: {
            target: "I left my keys on the table.",
            translation: "Dejé las llaves en la mesa."
          }
        },
        {
          term: "to quit (doing)",
          explanation: "Dejar un hábito, dejar de hacer algo. Es el equivalente de «dejar de + infinitivo», pero con una diferencia clave: en inglés lo que sigue va en gerundio — «quit smoking», no «quit to smoke». «To give up» y «to stop» funcionan igual.",
          literal: "abandonar (haciendo)",
          useWhen: "Al hablar de dejar un vicio o una costumbre: «I quit smoking», «I gave up coffee», «I stopped drinking».",
          avoidWhen: "No uses «to leave» para esto — «I left smoking» está mal — ni pongas infinitivo: «quit to smoke» no existe.",
          register: "neutral",
          region: "Inglés general; «quit» es algo más coloquial y «give up» un poco más suave, pero ambos son universales.",
          related: ["to quit smoking", "to give up", "to stop doing", "to cut out"],
          example: {
            target: "I quit drinking coffee at night.",
            translation: "Dejé de tomar tinto en la noche."
          }
        },
        {
          term: "to let (let me...)",
          explanation: "El sentido de permitir, «dejame…». Se arma «let + objeto + verbo sin to»: «let me help», «let me tell you», «let me see». El «to» que uno quiere meter por calco del español sobra por completo aquí.",
          literal: "dejar / permitir (dejame...)",
          useWhen: "Al ofrecer o pedir el turno: «let me help you», «let me tell you how I did it», «let me explain».",
          avoidWhen: "Nunca metas «to» después de «let»: «let me to help» está mal. Y no lo confundas con «to leave» (dejar un objeto).",
          register: "friendly informal",
          region: "Inglés general; «let me» es tan común que a menudo se contrae en el habla rápida a «lemme».",
          related: ["let me see", "let me help", "let me tell you", "let me explain"],
          example: {
            target: "Let me help you with that.",
            translation: "Dejame ayudarte con eso."
          }
        },
        {
          term: "to leave someone",
          explanation: "Con una persona y sin lugar, significa terminar la relación, romper con alguien. Si le agregas un lugar, cambia a dejar a alguien en un sitio. Ese detalle de nombrar el lugar es lo que evita el malentendido.",
          literal: "dejar a alguien",
          useWhen: "Al hablar de una ruptura: «she left him», «they broke up». O de un «dropoff», pero con lugar: «I dropped her off at home».",
          avoidWhen: "No digas «I left my girlfriend» si la dejaste en algún sitio; sin lugar suena a que rompiste con ella.",
          register: "neutral",
          region: "Inglés general; para el «dropoff» lo natural es el phrasal verb «to drop someone off».",
          related: ["to break up with", "to dump someone", "to split up", "to end things"],
          example: {
            target: "She left her boyfriend.",
            translation: "Dejó a su novio."
          }
        },
        {
          term: "never mind / drop it",
          explanation: "La manera de soltar un tema: «never mind», «drop it», «let's drop it», más o menos «deje así, no importa». Es sobre la conversación, no sobre ningún objeto, así que nadie te pide dejar nada físico en su sitio.",
          literal: "no importa / suéltalo",
          useWhen: "Para restarle importancia a algo o cerrar un tema: «oh, never mind», «let's just drop it for now».",
          avoidWhen: "No lo calques como «leave it so», que en inglés no significa nada natural; y «drop» aquí no es dejar caer algo.",
          register: "friendly informal",
          region: "Inglés general; «never mind» es más suave y «drop it» puede sonar más tajante según el tono.",
          related: ["forget it", "drop it", "don't worry about it", "let it go"],
          example: {
            target: "Oh, never mind, it wasn't important.",
            translation: "Ah, deje así, no era importante."
          }
        },
        {
          term: "to leave (someone) alone",
          explanation: "Dejar en paz, dejar de molestar a alguien o algo. Literalmente «dejar solo». Es el recurso para pedir espacio o para decirle a alguien que deje de fastidiar a una persona, una mascota o un tema delicado.",
          literal: "dejar (a alguien) en paz",
          useWhen: "Al pedir espacio o parar el fastidio: «leave me alone», «leave the dog alone», «leave it alone».",
          avoidWhen: "Es más firme que «never mind»; «leave me alone» puede sonar cortante, así que úsalo cuando de verdad lo sientas.",
          register: "neutral",
          region: "Inglés general; el tono y el contexto deciden si suena a súplica o a orden seca.",
          related: ["leave me alone", "leave it alone", "back off", "give me space"],
          example: {
            target: "Leave the dog alone.",
            translation: "Dejá al perro en paz."
          }
        },
        {
          term: "go ahead / feel free",
          explanation: "La forma cordial de dar permiso: «go ahead», «feel free», «be my guest», el gemelo del paisa «bien pueda». Concede el permiso con generosidad y suele acompañar a un ofrecimiento: adelante, con confianza, sírvase.",
          literal: "adelante / siéntete libre",
          useWhen: "Al conceder permiso con calidez: «Can I come in? — Go ahead», «feel free to grab a coffee».",
          avoidWhen: "En un contexto muy rígido, un «of course» o «certainly» suena más formal; «go ahead» es cotidiano y cercano.",
          register: "friendly informal",
          region: "Inglés general; «feel free» suele ir seguido de «to + verbo»: «feel free to sit down».",
          related: ["feel free", "be my guest", "help yourself", "sure, go for it"],
          example: {
            target: "Can I come in? — Go ahead.",
            translation: "¿Puedo pasar? — Bien pueda, siga."
          }
        }
      ],
      note:
        "Lo que el español junta en «dejar», el inglés lo reparte. «To leave» deja un objeto atrás («I left my jacket»); «to quit» deja un hábito, con gerundio («I quit smoking»); «let me + verbo» es «dejame» («let me tell you»); «to leave someone» sin lugar es una ruptura; y «never mind» o «let's drop it» es «deje así». Ese último es el que más confunde: es un «soltemos el tema», no una orden de dejar algo en su sitio. Y recuerda: después de «let» nunca va «to».",
      culture: [
        {
          label: "Un solo «dejar», muchos verbos en inglés",
          body: "El español estira «dejar» sobre un montón de sentidos: dejar un objeto, dejar de fumar, dejame ayudar, dejar a alguien, deje así. El inglés no: cada sentido tiene su propio verbo — leave, quit, let, break up, drop it. Para el hispanohablante, el reto no es entender cada uno, sino no traducir «dejar» siempre por «leave». Medio aprendizaje de este verbo es memorizar cuál palabra inglesa toca en cada situación, porque el calco directo casi siempre falla."
        },
        {
          label: "«Let me…»: pedir el turno en inglés",
          body: "«Let me» es la fórmula para ofrecerse o pedir un turno: «let me help», «let me tell you», «let me see». La trampa para el hispanohablante es el «to»: en español decimos «dejame ayudar», y la tentación de calcar «let me to help» es enorme, pero en inglés después de «let» el verbo va pelado, sin «to». En el habla rápida hasta se contrae en «lemme». Dominar esta estructura pequeña hace que uno suene mucho más natural y menos traducido."
        },
        {
          label: "«Quit» pide gerundio, no infinitivo",
          body: "Para dejar un hábito, el inglés usa «quit», «give up» o «stop», y todos piden gerundio: «quit smoking», «give up drinking», «stop eating». El español arma «dejar de + infinitivo», así que la tentación es decir «quit to smoke», que suena mal. Además, «to leave» no sirve aquí: «I left smoking» no se entiende. Es un caso claro de que traducir palabra por palabra desde «dejar de fumar» lleva directo al error; hay que cambiar de verbo y de forma."
        },
        {
          label: "El registro va en las palabras, no en el pronombre",
          body: "El inglés no tiene usted, tú ni vos: solo «you». Toda la calidez o la formalidad que el español mete en el pronombre, el inglés la reparte en el léxico — «go ahead», «feel free», «be my guest», «would you mind», «please». Por eso una anfitriona estadounidense suena cálida sin cambiar de pronombre: lo hace con «don't worry about it» y «have a seat». Para el hispanohablante, la lección es dejar de buscar el pronombre correcto y aprender estas fórmulas que cargan el tono."
        }
      ],
      pitfalls: [
        {
          mistake: "“Let me to help you.”",
          whyItFails: "Después de «let», el inglés no lleva «to»: es «let + objeto + verbo pelado». El «to» se cuela por calco del español «dejame ayudar», pero en inglés sobra y suena claramente a error de traducción.",
          sayInstead: "Let me help you."
        },
        {
          mistake: "“I left smoking a year ago.”",
          whyItFails: "«To leave» es dejar un objeto o salir de un lugar, no dejar un hábito. Para dejar de fumar, el inglés usa «to quit» o «to give up» seguidos de gerundio; «I left smoking» no se entiende.",
          sayInstead: "I quit smoking a year ago."
        },
        {
          mistake: "“I left my girlfriend.” (queriendo decir que la dejó en la fiesta)",
          whyItFails: "Igual que en español, «to leave someone» sin un lugar se lee como romper la relación. Sin lugar, «I left my girlfriend» suena a que terminaron. Para el «dropoff» hay que nombrar el sitio o usar «drop off».",
          sayInstead: "I dropped my girlfriend off at the party."
        },
        {
          mistake: "“Never mind it, leave it so.”",
          whyItFails: "«Leave it so» es un calco de «deje así» que en inglés no significa nada natural. Para soltar un tema se dice «never mind», «drop it» o «let's drop it»; nada de «leave it so».",
          sayInstead: "Never mind, let's drop it."
        }
      ],
      variations: [
        {
          form: "Leave it there, I've got it.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Decirle a alguien que deje una tarea; relajado."
        },
        {
          form: "Don't worry about the dishes, I'll get them later.",
          register: "polite neutral",
          region: "Inglés general",
          whenToUse: "Rechazar la ayuda con cortesía, como anfitrión."
        },
        {
          form: "Let me give you a hand with that.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Ofrecer ayuda; el sentido «dejame…»."
        },
        {
          form: "Let's just leave it for now.",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Cerrar un tema por hoy, «dejemos así»."
        },
        {
          form: "Never mind, it's not a big deal.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Restarle importancia a algo, «deje así»."
        }
      ],
      prompt: "Kayla dice “let's just drop it for now.” ¿Qué quiere decir?",
      choices: [
        "Que dejen el tema por ahora — “deje así, no importa” —, sin que nadie tenga que soltar ni botar ningún objeto de verdad.",
        "Que Alejandra suelte de una vez la chaqueta que tiene en la mano y la vaya a recoger del cuarto en otro momento.",
        "Que Kayla prefiere que se queden un rato más y dejen para después todo el plan de salir esta noche para la casa."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Alejandra quiere ofrecer ayuda: “dejame ayudarte”. ¿Cuál es la forma correcta en inglés?",
          choices: [
            "Let me to help you with the dishes before I head out, it will only take us a couple of minutes.",
            "Let me help you with the dishes before I head out, it will only take us a couple of minutes.",
            "Leave me help you with the dishes before I head out, it will only take us a couple of minutes."
          ],
          answer: 1,
          tests: "“let + objeto + verbo” sin “to”"
        },
        {
          prompt: "¿Cómo se dice en inglés natural que dejó de fumar hace un año?",
          choices: [
            "I left smoking a year ago, and honestly I feel a lot healthier now that the habit is finally behind me.",
            "I left to smoke a year ago, and honestly I feel a lot healthier now that the habit is finally behind me.",
            "I quit smoking a year ago, and honestly I feel a lot healthier now that the habit is finally behind me."
          ],
          answer: 2,
          tests: "“to quit” + gerundio para dejar un hábito"
        },
        {
          prompt: "Alejandra quiere decir que dejó a su amiga en la fiesta, no que rompió con nadie. ¿Cuál es segura?",
          choices: [
            "I dropped my friend off at the party and then drove straight home to get some rest before work.",
            "I left my friend and then drove straight home to get some rest before work, since it was already late.",
            "I left of my friend at the party and then drove straight home to get some rest before an early shift."
          ],
          answer: 0,
          tests: "“drop off” o nombrar el lugar para no sonar a ruptura"
        },
        {
          prompt: "Kayla quiere soltar el tema del cigarrillo con naturalidad. ¿Qué dice?",
          choices: [
            "Leave it so for now, it is really not a big deal and I would rather talk about something else tonight.",
            "Never mind for now, it is really not a big deal and I would rather talk about something else tonight.",
            "Let it like that for now, it is really not a big deal and I would rather talk about something else tonight."
          ],
          answer: 1,
          tests: "“never mind / drop it” en vez del calco de “deje así”"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/17-foundation-carrying-and-leaving.js");
