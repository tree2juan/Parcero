/*
 * Lesson block: foundation / rest, play and lending a hand.
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
 * The three verbs here — dormir, jugar and ayudar — are the everyday tools of
 * rest and downtime: how you sleep (and fail to), how you play, and how you ask
 * for or offer a hand. The two directions are mirrors: same number of dialogue
 * turns, vocabulary entries, culture notes, pitfalls, variations and practice
 * questions, and the same optional slots filled on the same rows. That is
 * enforced by test/shape.test.js, not by good intentions.
 *
 * The settings deliberately step outside Bogotá and Medellín: Santa Marta on
 * the Caribbean coast, Bucaramanga in Santander, and Pereira in the Eje
 * Cafetero, so the dialect on show is costeño, santandereano and paisa-adjacent
 * rather than the usual two cities. Regional claims are kept to what is safe and
 * flagged in the `region` fields where they are local rather than general.
 */
lessons.push(
  {
    id: "oversleeping-the-tayrona-boat-in-santa-marta",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "familiar",
    pathways: ["foundation"],
    verb: "dormir",
    review: "pending",
    es: {
      title: "Se me fue la lancha por quedarme dormido",
      situation:
        "Alex está de mochilero en Santa Marta y anoche trasnochó en la playa con Wílmer, un amigo costeño. La idea era madrugar para coger la lancha al Parque Tayrona, pero Alex se quedó dormido y no oyó la alarma. Wílmer lo molesta mientras Alex, medio dormido, cuenta cómo se le fue la mañana.",
      setting: {
        who: "Wílmer is a laid-back samario who knows every boatman on the beach. Alex is a backpacker who wanted to see Tayrona but reckoned without a Caribbean night out.",
        what: "A morning-after debrief: Alex has missed the early boat because he overslept, and the two of them work out what to do with the day instead.",
        when: "Mid-morning, already hot, the seven o'clock boat long gone.",
        where: "Santa Marta, on the Caribbean coast, outside a cheap posada near the beach.",
        why: "Because oversleeping and missing something is one of the most universal small disasters there is, and the language Colombians reach for to describe a wrecked night and a lost morning is vivid, idiomatic and worth having ready."
      },
      address: {
        form: "tú",
        who: "Wílmer and Alex use tú with each other — they met days ago and are the same age, and the coast leans to tú far more than the interior does.",
        why: "On the Caribbean coast tú is the everyday default among friends and peers, where Bogotá might hedge with usted. It sounds warm, not forward, and Wílmer would find usted oddly stiff between beach buddies.",
        ifYouSwitch:
          "Switching to usted with Wílmer would put a small distance back between you, the way over-formality does everywhere; on the coast it can even read as cold or sarcastic among friends. Tú is the register that matches the friendship here."
      },
      dialogue: [
        {
          speaker: "Wílmer",
          target: "¡Erda, mano! ¿Ya te levantaste? Te quedaste dormido, ¿ah?",
          translation: "Man, finally! You're up? You overslept, huh?",
          pronunciation: "ER-da, MA-no! ya te le-van-TAS-te? te ke-DAS-te dor-MEE-do, ah",
          literal: "Wow, brother! Already yourself you-got-up? Yourself you-stayed asleep, huh?",
          why: "“Quedarse dormido” is the exact phrase for oversleeping or dropping off when you shouldn't — note it is pronominal (te quedaste), not plain dormir. “Erda” and “mano” and the tag “¿ah?” are pure costeño color; “erda” is a soft coastal exclamation of surprise."
        },
        {
          speaker: "Alex",
          target: "Uf, sí. Me dormí como a las tres. Trasnoché full anoche.",
          translation: "Ugh, yeah. I fell asleep around three. I was up really late last night.",
          pronunciation: "oof, see. me dor-MEE KO-mo a las tres. tras-no-CHE fool a-NO-che",
          literal: "Ugh, yes. Myself I-slept like at the three. I-stayed-up full last-night.",
          why: "Here is the trap: “me dormí” with the pronoun means “I fell asleep”, the moment of dropping off — not “I slept”. “Trasnochar” is to stay up very late or lose sleep; “full” used as “a lot / really” is common slang on the coast and among young Colombians generally."
        },
        {
          speaker: "Wílmer",
          target: "Normal, hermano. Amanecimos en la playa oyendo champeta.",
          translation: "That's how it goes, bro. We were up till dawn on the beach listening to champeta.",
          pronunciation: "nor-MAL, er-MA-no. a-ma-ne-SEE-mos en la PLA-ya o-YEN-do cham-PE-ta",
          literal: "Normal, brother. We-dawned on the beach hearing champeta.",
          why: "“Amanecer” literally is “to dawn”, but about people it means to still be awake when morning comes — a whole night out or a night's work. “Amanecimos” wears it almost as a badge. Champeta is the coast's own dance music, very samario/cartagenero."
        },
        {
          speaker: "Alex",
          target: "Y después dormí como un lirón. No escuché la alarma para nada.",
          translation: "And then I slept like a log. I didn't hear the alarm at all.",
          pronunciation: "ee des-PWES dor-MEE KO-mo un lee-RON. no es-koo-CHE la a-LAR-ma PA-ra NA-da",
          literal: "And after I-slept like a dormouse. Not I-heard the alarm for nothing.",
          why: "Now “dormí” without the pronoun is “I slept” — the state, not the falling. The idiom is “dormir como un lirón” (a dormouse), the Spanish equivalent of “like a log”; “como un tronco” is a calque to avoid. “Para nada” intensifies the negative."
        },
        {
          speaker: "Wílmer",
          target: "Tranquilo. Duérmete una siestica y esta noche salimos otra vez.",
          translation: "No worries. Take a little nap and tonight we'll go out again.",
          pronunciation: "tran-KEE-lo. DWER-me-te una syes-TEE-ka ee ES-ta NO-che sa-LEE-mos O-tra ves",
          literal: "Calm. Sleep-yourself a little-nap and this night we-go-out other time.",
          why: "“Duérmete” is the pronominal dormirse as a command — “drop off / get some sleep”. “Siestica”, the diminutive of siesta, is affectionate and softening; Caribbean and Colombian speech loves the -ico/-ica diminutive on words ending in -t (ratico, momentico)."
        },
        {
          speaker: "Alex",
          target: "No, que si me duermo ahora, no duermo esta noche. Mejor un tinto.",
          translation: "Nah, if I nap now, I won't sleep tonight. Better a black coffee.",
          pronunciation: "no, ke si me DWER-mo a-O-ra, no DWER-mo ES-ta NO-che. me-HOR un TEEN-to",
          literal: "No, that if myself I-sleep now, not I-sleep this night. Better a black-coffee.",
          why: "One line, both senses: “me duermo” (pronominal, I'll fall asleep / nap now) versus “no duermo” (plain, I won't sleep tonight). That contrast is the whole grammar of the lesson. “Tinto” on the coast and everywhere in Colombia is a small black coffee, never wine."
        }
      ],
      vocabulary: [
        {
          term: "dormir",
          explanation:
            "The base verb for sleeping — the state of being asleep, and how well or how long you slept.",
          literal: "to sleep",
          useWhen:
            "Talking about sleep as a state or a stretch of time: “dormí ocho horas”, “no dormí bien”, “¿dormiste?”.",
          avoidWhen:
            "You mean the instant of dropping off — that is the pronominal dormirse, a different idea.",
          register: "neutral",
          region: "Universal Spanish; the everyday verb everywhere.",
          related: ["dormirse", "descansar", "el sueño", "la dormida"],
          example: {
            target: "Anoche dormí muy poco.",
            translation: "I slept very little last night."
          }
        },
        {
          term: "dormirse",
          explanation:
            "The pronominal twin of dormir — not to sleep, but to fall asleep, the moment you drop off.",
          literal: "to fall asleep (oneself)",
          useWhen:
            "Marking the instant sleep takes you: “me dormí en el bus”, “se durmió viendo tele”.",
          avoidWhen:
            "You mean the whole night's sleep — then it is plain dormir, without the pronoun.",
          register: "neutral",
          region: "Universal Spanish; the es/en contrast trips learners everywhere.",
          related: ["dormir", "quedarse dormido", "caer rendido", "coger el sueño"],
          example: {
            target: "Me dormí antes de las nueve.",
            translation: "I fell asleep before nine."
          }
        },
        {
          term: "quedarse dormido",
          explanation:
            "To oversleep, or to nod off without meaning to — the universal excuse for being late.",
          literal: "to stay asleep",
          useWhen:
            "Explaining a missed alarm or a nod-off: “me quedé dormido”, “no me despiertes que me quedo dormido”.",
          avoidWhen:
            "You chose to sleep in on purpose — that is “dormir hasta tarde”, not the accidental quedarse dormido.",
          register: "neutral",
          region: "Universal Spanish; the default late excuse in Colombia.",
          related: ["dormirse", "trasnochar", "la pereza", "la alarma"],
          example: {
            target: "Perdón, me quedé dormido.",
            translation: "Sorry, I overslept."
          }
        },
        {
          term: "trasnochar",
          explanation:
            "To stay up very late, or to go without sleep — a night burned on a party, a deadline or a sick child.",
          literal: "to over-night",
          useWhen:
            "Owning a late or sleepless night: “trasnoché estudiando”, “no me gusta trasnochar entre semana”.",
          avoidWhen:
            "You simply went out and came home at a normal hour — trasnochar implies the night really ran long.",
          register: "friendly informal",
          region: "Universal Spanish; heavily used across Colombia.",
          related: ["amanecer", "la trasnochada", "desvelarse", "la rumba"],
          example: {
            target: "Trasnoché terminando el trabajo.",
            translation: "I stayed up late finishing the work."
          }
        },
        {
          term: "amanecer",
          explanation:
            "About people, to still be awake when day breaks — a full night out or a night's work seen through to dawn.",
          literal: "to dawn / to greet the morning",
          useWhen:
            "Reporting that the night ran all the way to sunrise: “amanecimos bailando”, “amaneció trabajando”.",
          avoidWhen:
            "You went to bed at a sane hour; amanecer claims you were up for the sunrise, awake or arriving.",
          register: "friendly informal",
          region: "Colombia and much of Latin America; a badge-of-honor word, especially on the coast.",
          related: ["trasnochar", "la amanecida", "el amanecer", "la madrugada"],
          example: {
            target: "Amanecimos en la playa.",
            translation: "We were up till dawn on the beach."
          }
        },
        {
          term: "dormir como un lirón",
          explanation:
            "To sleep deeply and long — the Spanish idiom uses a dormouse (lirón) where English uses a log.",
          literal: "to sleep like a dormouse",
          useWhen:
            "Boasting or admitting to heavy sleep: “dormí como un lirón”, “ese niño duerme como un lirón”.",
          avoidWhen:
            "You want the English image — do not calque “como un tronco”; the fixed animal here is the lirón.",
          register: "friendly informal",
          region: "Universal Spanish idiom; understood throughout Colombia.",
          related: ["dormir como una piedra", "dormir profundo", "caer rendido", "el lirón"],
          example: {
            target: "Dormí como un lirón y no oí nada.",
            translation: "I slept like a log and heard nothing."
          }
        },
        {
          term: "la siesta",
          explanation:
            "A short daytime sleep — on the hot coast a midday nap is practically built into the rhythm of the day.",
          literal: "the nap / the siesta",
          useWhen:
            "Proposing or taking a daytime rest: “echar una siesta”, “voy a hacer la siesta”, the diminutive siestica.",
          avoidWhen:
            "You mean night sleep; siesta is specifically the daytime nap, not going to bed for the night.",
          register: "neutral",
          region: "Universal Spanish; the midday version is strongest where the heat is, like the Caribbean coast.",
          related: ["echar una siesta", "la siestica", "el descanso", "reposar"],
          example: {
            target: "Después de almuerzo echo una siesta.",
            translation: "After lunch I take a nap."
          }
        }
      ],
      note:
        "The one distinction to carry away is dormir versus dormirse. Plain “dormí” is “I slept” — a state or a stretch of hours. Add the pronoun and “me dormí” becomes “I fell asleep” — the instant of dropping off, which is why “me dormí en el bus” means you nodded off and probably missed your stop. For oversleeping there is the ready-made “me quedé dormido”, the excuse everyone uses. And a Colombian night has its own verbs: trasnochar for staying up very late, and amanecer for still being awake when the sun comes up.",
      culture: [
        {
          label: "The night has its own verbs",
          body:
            "Spanish gives a Colombian night more precise vocabulary than English does. “Trasnochar” is to stay up very late or lose sleep, whether over a party or a spreadsheet. “Amanecer” goes further: it is to still be on your feet when the sun rises. Saying “amanecimos” carries a small note of pride, or rueful comedy — the night simply refused to end. Neither word is only about fun; you can perfectly well amanecer finishing a report or nursing a sick relative."
        },
        {
          label: "The universal late excuse",
          body:
            "“Me quedé dormido” is the “sorry I'm late” of the Spanish-speaking world, and Colombia is no exception. It is gentler than confessing you slept in on purpose, because “quedarse dormido” frames it as something that happened to you — sleep stayed on you — rather than a choice. Bosses and teachers hear it constantly and mostly let it pass, precisely because everyone has been on both sides of it. Deliver it with a small wince and it does its job."
        },
        {
          label: "A coast that naps",
          body:
            "On the Caribbean coast the midday heat genuinely reorganises the day. Shops and offices in smaller towns can still close for a couple of hours after lunch, and a siesta — often a siestica, in the affectionate diminutive — is a sensible response to a sun that flattens you at two in the afternoon. This is a coastal and small-town rhythm more than a rule of the whole country; fast-paced Bogotá, cool and 2,600 meters up, keeps no such pause."
        },
        {
          label: "How the coast talks",
          body:
            "Samario and wider costeño speech has a music of its own. Final and middle -s often soften to an aspiration or drop away, so “los dos” can sound like “loh do”. Tú rules where the interior reaches for usted, and warm tags pepper the talk: “¿oíste?”, “¿ah?”, “mano”, “hermano”, “erda”. None of this is careless; it is a whole regional variety with its own rules. For a learner, the first task is simply catching the words that the missing consonants blur together."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “dormí en el bus” when you mean you nodded off",
          whyItFails:
            "Plain “dormí en el bus” says you slept on the bus, perhaps a good long sleep. If you dropped off unintentionally and missed your stop, you want the pronominal: “me dormí en el bus”. The pronoun marks the moment of falling asleep, and its absence changes the story.",
          sayInstead: "Me dormí en el bus y me pasé del paradero."
        },
        {
          mistake: "Building “I overslept” as “dormí de más” or “sobredormí”",
          whyItFails:
            "There is no verb “sobredormir”, and “dormí de más” sounds like a translated guess. The set phrase Colombians actually use is “me quedé dormido”, which covers both oversleeping and nodding off. Reach for it rather than assembling something literal.",
          sayInstead: "Me quedé dormido y llegué tarde."
        },
        {
          mistake: "Using “trasnochar” for any night out",
          whyItFails:
            "“Trasnochar” specifically means the night ran long enough to cost you sleep. If you went out and were home by a reasonable hour, it is just “salí anoche”. Save trasnochar for the nights that genuinely wrecked your rest, or it loses its force.",
          sayInstead: "Anoche salí, pero no trasnoché."
        },
        {
          mistake: "Calquing “sleep like a log” as “dormir como un tronco”",
          whyItFails:
            "The English log does not travel. Spanish fixes the image on an animal — “dormir como un lirón” (a dormouse) — or on stone, “como una piedra”. “Como un tronco” is understood but marks you as translating word for word instead of reaching for the set idiom.",
          sayInstead: "Dormí como un lirón."
        }
      ],
      variations: [
        {
          form: "Me quedé dormido.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The all-purpose “I overslept / I dropped off”."
        },
        {
          form: "Trasnoché anoche.",
          register: "friendly informal",
          region: "Universal Spanish",
          whenToUse: "Owning that you were up very late."
        },
        {
          form: "Amanecimos en la fiesta.",
          register: "friendly informal",
          region: "Colombia; coast-flavoured",
          whenToUse: "The night ran all the way to sunrise."
        },
        {
          form: "Voy a echar una siesta.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Announcing a daytime nap."
        },
        {
          form: "Dormí como un lirón.",
          register: "friendly informal",
          region: "Universal Spanish idiom",
          whenToUse: "Reporting a deep, heavy sleep."
        }
      ],
      prompt: "Alex says “me dormí como a las tres.” What is he actually saying?",
      choices: [
        "That he slept soundly for a solid three hours in the afternoon and then woke up feeling completely rested.",
        "That he set an alarm for three in the morning so that he would not miss the early boat leaving for Tayrona.",
        "That he fell asleep at around three in the morning — the pronoun on “me dormí” marks the moment of dropping off, not the sleep itself."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Which sentence means Alex overslept and missed the boat?",
          choices: [
            "Me quedé dormido y se me fue la lancha para el Parque Tayrona esta mañana.",
            "Me dormí divino toda la noche y por eso alcancé la lancha para el Parque Tayrona.",
            "Me quedé despierto toda la noche esperando la lancha para el Parque Tayrona."
          ],
          answer: 0,
          tests: "quedarse dormido = to oversleep"
        },
        {
          prompt: "Wílmer says “amanecimos en la playa.” What does it mean?",
          choices: [
            "That they woke up really early and went straight down to the beach to swim before breakfast.",
            "That they stayed up on the beach until the sun came up — amanecer is to still be awake at dawn.",
            "That the weather on the beach turned bright and clear right as the morning finally arrived."
          ],
          answer: 1,
          tests: "amanecer = to be up at dawn"
        },
        {
          prompt: "How would a Colombian say “I slept like a log”?",
          choices: [
            "Dormí como un tronco toda la noche y no escuché absolutamente nada del ruido de afuera.",
            "Dormí como una madera toda la noche y no escuché absolutamente nada del ruido de afuera.",
            "Dormí como un lirón toda la noche y no escuché absolutamente nada del ruido de afuera."
          ],
          answer: 2,
          tests: "dormir como un lirón, not a calque of log"
        },
        {
          prompt: "Wílmer tells Alex “duérmete una siestica.” He is—",
          choices: [
            "telling Alex to go ahead and take a nap — duérmete is the pronominal dormirse, dropping off to sleep.",
            "telling Alex that he himself is about to lie down and take a very long nap through the whole afternoon.",
            "asking Alex whether he managed to sleep at all well during the short and extremely noisy night before."
          ],
          answer: 0,
          tests: "duérmete = dormirse imperative (take a nap)"
        }
      ]
    },
    en: {
      title: "Se me fue el bus por quedarme dormida",
      situation:
        "Alejandra está recién llegada a Houston y anoche se quedó hasta tarde con Josh, un compañero de la residencia. La idea era madrugar para tomar el bus a una caminata, pero se quedó dormida y no oyó la alarma. Josh la molesta mientras ella, medio dormida, cuenta en inglés cómo se le fue la mañana.",
      setting: {
        who: "Josh es un estadounidense relajado de la misma residencia. Alejandra llegó hace poco y quería aprovechar el fin de semana, sin contar con lo tarde que se acostó.",
        what: "Una charla de resaca de sueño: Alejandra perdió el bus temprano por quedarse dormida, y entre los dos deciden qué hacer con el día.",
        when: "Media mañana, con el bus de las siete ya ido hace rato.",
        where: "Houston, en el pasillo de una residencia estudiantil.",
        why: "Porque quedarse dormido y perderse algo es de los pequeños desastres más universales que hay, y el inglés arma esa historia con verbos y frases muy distintos de los del español, que conviene tener listos."
      },
      address: {
        form: "mixed",
        who: "Josh y Alejandra se tratan por el nombre y con total confianza, como es normal entre compañeros jóvenes en Canadá.",
        why: "El inglés no tiene usted ni tú: la cercanía no está en un pronombre, sino en el tono, el nombre de pila y expresiones sueltas como “no worries” o “hey”. La confianza se oye en las palabras, no en la forma de “you”.",
        ifYouSwitch:
          "Si Alejandra buscara marcar respeto cambiando el “you”, no encontraría cómo: en inglés no existe ese cambio. La formalidad, cuando hace falta, se marca con frases más completas y corteses, no con otro pronombre."
      },
      dialogue: [
        {
          speaker: "Josh",
          target: "Hey, you're finally up! You overslept, huh?",
          translation: "¡Ey, por fin te levantaste! Te quedaste dormida, ¿no?",
          pronunciation: "jei, yor FAI-na-li ap! yu O-ver-slept, ja",
          literal: "Oye, tú-estás finalmente arriba. Tú sobre-dormiste, ¿eh?",
          why: "“To oversleep” es el verbo exacto para “quedarse dormido” y despertar tarde; es un accidente, no pereza. “To be up” aquí es “estar levantado”. Ojo: “to sleep in” también es dormir hasta tarde, pero a propósito, como un gusto de fin de semana."
        },
        {
          speaker: "Alejandra",
          target: "Yeah… I fell asleep around three. I stayed up really late.",
          translation: "Sí… me dormí como a las tres. Trasnoché anoche.",
          pronunciation: "yea… ai fel a-SLIP a-RAUND zri. ai steid ap RI-li leit",
          literal: "Sí… yo caí dormida alrededor tres. Yo me-quedé arriba muy tarde.",
          why: "Aquí está la clave: “I fell asleep” es “me dormí”, el instante de quedarse dormido — no “I slept”, que serían las horas. “To stay up late” es trasnochar. El error típico es decir “I slept late” para “me acosté tarde”, que en inglés significa otra cosa."
        },
        {
          speaker: "Josh",
          target: "Happens to everyone. We were up till dawn down by the water.",
          translation: "Le pasa a cualquiera. Amanecimos junto al agua.",
          pronunciation: "JA-pens tu EV-ri-uan. ui uer ap til don daun bai de UO-ter",
          literal: "Sucede a todos. Nosotros estuvimos arriba hasta amanecer abajo por el agua.",
          why: "El inglés no tiene un verbo para “amanecer” de fiesta: lo arma con una frase, “to be up till dawn”. Fíjese en “up” y “dawn” haciendo el trabajo que en español hace un solo verbo. “Down by the water” es “junto al agua / a la orilla”."
        },
        {
          speaker: "Alejandra",
          target: "And then I slept like a log. I didn't hear the alarm at all.",
          translation: "Y después dormí como un lirón. No escuché la alarma para nada.",
          pronunciation: "and den ai slept laik a log. ai DID-ent jir de a-LARM at ol",
          literal: "Y luego yo dormí como un tronco. Yo no oí la alarma en absoluto.",
          why: "Ahora “I slept” sin nada más es “dormí”, el estado. Pero el símil inglés fija un “log” (tronco) donde el español pone un lirón: “sleep like a log”. No se dice “sleep like a dormouse”. “At all” refuerza la negación, como “para nada”."
        },
        {
          speaker: "Josh",
          target: "No worries. Take a nap and we'll go out again tonight.",
          translation: "Tranquila. Échate una siesta y esta noche salimos otra vez.",
          pronunciation: "nou UO-rris. teik a nap and uil gou aut a-GUEN tu-NAIT",
          literal: "No preocupaciones. Toma una siesta y nosotros saldremos otra-vez esta-noche.",
          why: "La forma fija es “take a nap”: en inglés uno “toma” una siesta, no la “duerme” ni la “hace”. “We'll” es la contracción de “we will”, el futuro. “No worries” es el “tranquila / no hay lío” de todos los días."
        },
        {
          speaker: "Alejandra",
          target: "Nah, if I nap now, I won't sleep tonight. I'd rather grab a coffee.",
          translation: "No, si duermo siesta ahora, no duermo esta noche. Mejor un café.",
          pronunciation: "na, if ai nap nau, ai UONT slip tu-NAIT. aid RA-der grab a KO-fi",
          literal: "No, si yo duermo-siesta ahora, yo no dormiré esta-noche. Yo preferiría agarrar un café.",
          why: "“Nap” también funciona como verbo: “if I nap now”. “I won't” es “no dormiré” (won't = will not). Y “I'd rather” es “prefiero / mejor”, y va seguido de un infinitivo sin “to”: “I'd rather grab a coffee”."
        }
      ],
      vocabulary: [
        {
          term: "to sleep",
          explanation:
            "El verbo base para dormir: el estado de estar dormido y cuánto o qué tan bien se durmió.",
          literal: "dormir",
          useWhen:
            "Hablar del sueño como estado o lapso: “I slept eight hours”, “I didn't sleep well”.",
          avoidWhen:
            "Se refiere al instante de quedarse dormido — eso es “to fall asleep”, otra idea.",
          register: "neutral",
          region: "Inglés universal; el verbo de todos los días.",
          related: ["fall asleep", "get some sleep", "be asleep", "sleep in"],
          example: {
            target: "I barely slept last night.",
            translation: "Anoche casi no dormí."
          }
        },
        {
          term: "to fall asleep",
          explanation:
            "El equivalente de “dormirse”: no dormir, sino el momento exacto en que uno se queda dormido.",
          literal: "quedarse dormido (el instante)",
          useWhen:
            "Marcar el instante en que llega el sueño: “I fell asleep on the bus”, “she fell asleep watching TV”.",
          avoidWhen:
            "Se refiere a toda la noche de sueño — ahí es “to sleep”, no “fall asleep”.",
          register: "neutral",
          region: "Inglés universal; ojo, no existe “I slept myself”.",
          related: ["doze off", "nod off", "drop off", "crash"],
          example: {
            target: "I fell asleep before nine.",
            translation: "Me dormí antes de las nueve."
          }
        },
        {
          term: "to oversleep",
          explanation:
            "Quedarse dormido de más y despertar tarde — la excusa universal por llegar tarde.",
          literal: "dormir de más",
          useWhen:
            "Explicar una alarma perdida: “sorry, I overslept”, “I overslept and missed the bus”.",
          avoidWhen:
            "Durmió hasta tarde a propósito — eso es “to sleep in”, no “oversleep”.",
          register: "neutral",
          region: "Inglés universal; la excusa por excelencia.",
          related: ["sleep in", "sleep through the alarm", "miss the alarm", "be late"],
          example: {
            target: "Sorry, I overslept.",
            translation: "Perdón, me quedé dormido."
          }
        },
        {
          term: "to stay up late / pull an all-nighter",
          explanation:
            "Trasnochar: quedarse despierto hasta muy tarde, o pasar la noche entera sin dormir.",
          literal: "quedarse despierto hasta tarde",
          useWhen:
            "Asumir una noche larga: “I stayed up late”, “I pulled an all-nighter to finish it”.",
          avoidWhen:
            "Salió y volvió a una hora normal — eso es solo “I went out”, no trasnochar.",
          register: "friendly informal",
          region: "Inglés universal; “all-nighter” es muy común entre estudiantes.",
          related: ["stay up", "all-nighter", "burn the midnight oil", "be up late"],
          example: {
            target: "I stayed up late finishing the report.",
            translation: "Trasnoché terminando el informe."
          }
        },
        {
          term: "to be up till dawn",
          explanation:
            "Amanecer: seguir despierto cuando ya está saliendo el sol, tras una noche entera.",
          literal: "estar levantado hasta el amanecer",
          useWhen:
            "Contar que la noche llegó hasta el amanecer: “we were up till dawn”, “I was up until sunrise”.",
          avoidWhen:
            "Se acostó a una hora sensata; esta frase afirma que uno vio salir el sol.",
          register: "friendly informal",
          region: "Inglés universal; se dice con frase, no con un solo verbo como “amanecer”.",
          related: ["up till dawn", "up all night", "until sunrise", "watch the sunrise"],
          example: {
            target: "We were up till dawn talking.",
            translation: "Amanecimos hablando."
          }
        },
        {
          term: "sleep like a log",
          explanation:
            "Dormir profundo y pesado — el inglés fija la imagen en un tronco (log), no en un lirón.",
          literal: "dormir como un tronco",
          useWhen:
            "Presumir o admitir sueño pesado: “I slept like a log”, “the baby slept like a log”.",
          avoidWhen:
            "No calque “like a dormouse”; en inglés el animal no aparece, es el tronco.",
          register: "friendly informal",
          region: "Inglés universal; modismo fijo.",
          related: ["sleep like a baby", "out like a light", "dead to the world", "sleep soundly"],
          example: {
            target: "I slept like a log and heard nothing.",
            translation: "Dormí como un lirón y no oí nada."
          }
        },
        {
          term: "to take a nap",
          explanation:
            "Echar una siesta — un sueño corto de día. El verbo fijo es “take”, no “sleep” ni “make”.",
          literal: "tomar una siesta",
          useWhen:
            "Proponer o hacer un descanso diurno: “take a nap”, “I need a quick nap”, o el verbo “to nap”.",
          avoidWhen:
            "Se refiere al sueño de la noche; “nap” es específicamente el de día.",
          register: "neutral",
          region: "Inglés universal; “power nap” para una siesta corta.",
          related: ["nap", "power nap", "catnap", "doze"],
          example: {
            target: "I take a nap after lunch.",
            translation: "Después del almuerzo echo una siesta."
          }
        }
      ],
      note:
        "La distinción clave es “to sleep” frente a “to fall asleep”. “I slept” es dormí, el estado y las horas; “I fell asleep” es me dormí, el instante. Y ojo con una trampa: en inglés “I slept late” significa que uno despertó tarde, no que se acostó tarde — para eso se dice “I stayed up late” o “I went to bed late”. Para la excusa clásica está “I overslept”, y para “tengo sueño” se dice “I'm sleepy” o “I'm tired”, nunca “I have sleep”.",
      culture: [
        {
          label: "Dormir y quedarse dormido, dos verbos",
          body:
            "En inglés el momento de quedarse dormido tiene su propio verbo: “fall asleep”. “I slept” son las horas; “I fell asleep” es el instante. No existe el reflexivo del español, así que “me dormí” jamás se dice “I slept myself”. Y cuidado con una trampa: “I slept late” quiere decir que uno despertó tarde, no que se acostó tarde. Para eso se usa “I stayed up late” o “I went to bed late”. La imagen inglesa piensa en caer dentro del sueño."
        },
        {
          label: "La excusa de siempre",
          body:
            "Igual que “me quedé dormido” en Colombia, “I overslept” es la disculpa universal por llegar tarde en inglés. Suena a accidente, no a pereza, y por eso casi siempre pasa sin reproche. Su pariente “I slept in” es distinto: implica que uno se quedó en la cama a propósito, un lujo de fin de semana. Confundirlos puede hacer que una excusa suene a confesión de flojera. Diga “I overslept” cuando de verdad fue sin querer."
        },
        {
          label: "Un país sin siesta oficial",
          body:
            "En Canadá y Estados Unidos la siesta no está tejida en el día como en la costa caribeña. La jornada corre de un tirón, y dormir de día puede verse como pereza en un adulto, aunque el “power nap” de veinte minutos se ha vuelto respetable e incluso algunas empresas lo promueven. El verbo fijo es “take a nap” o simplemente “nap”; decir “sleep a siesta” o “make a nap” delata una traducción demasiado literal del español."
        },
        {
          label: "Trasnochar y amanecer sin un solo verbo",
          body:
            "El español condensa una noche larga en un verbo — “trasnochar”, “amanecer” —, pero el inglés lo dice con frases. “Stay up late”, “pull an all-nighter”, “be up till dawn”. No hay una sola palabra para amanecer de fiesta; se arma con “up”, “all night” o “till dawn”. Los estudiantes viven el “all-nighter” antes de un examen. Para el hispanohablante, el ajuste está en soltar el verbo único y pensar en una frase con partículas."
        }
      ],
      pitfalls: [
        {
          mistake: "“I have sleep.”",
          whyItFails:
            "Es un calco de “tengo sueño”. En inglés uno no “tiene” sueño; uno “está” con sueño. Se dice “I'm sleepy” o, más natural, “I'm tired”. “I have sleep” no le significa nada a un angloparlante.",
          sayInstead: "I'm sleepy."
        },
        {
          mistake: "“Yesterday I slept very late.”",
          whyItFails:
            "Para un angloparlante “I slept late” significa que uno se despertó tarde, no que se acostó tarde. Si quiere decir que se fue a la cama tarde o trasnochó, use “I stayed up late” o “I went to bed late”.",
          sayInstead: "Last night I stayed up really late."
        },
        {
          mistake: "“I passed all the night awake.”",
          whyItFails:
            "“Pasé la noche” no se traduce con “I passed the night”. La frase natural es “I stayed up all night” o “I was up all night”. Ese “pass” suena a calco directo del español.",
          sayInstead: "I stayed up all night."
        },
        {
          mistake: "“I'm going to sleep a siesta.”",
          whyItFails:
            "El inglés no “duerme” ni “hace” una siesta: la “toma”. La forma fija es “take a nap”, o el verbo “to nap”. “Sleep a siesta” y “make a nap” son traducciones literales que suenan raras.",
          sayInstead: "I'm going to take a nap."
        }
      ],
      variations: [
        {
          form: "I overslept.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "La excusa cotidiana por llegar tarde."
        },
        {
          form: "I stayed up really late.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Asumir que uno trasnochó."
        },
        {
          form: "We were up till dawn.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "La noche llegó hasta el amanecer."
        },
        {
          form: "I'm going to take a nap.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Anunciar una siesta de día."
        },
        {
          form: "I slept like a log.",
          register: "friendly informal",
          region: "Inglés universal; modismo",
          whenToUse: "Contar un sueño profundo y pesado."
        }
      ],
      prompt: "En inglés, ¿cómo se dice “me dormí como a las tres”?",
      choices: [
        "I slept at three in the morning, so this morning I woke up feeling really tired and grumpy.",
        "I had sleep at three in the morning, so this morning I woke up feeling really tired and grumpy.",
        "I fell asleep at around three in the morning, so I woke up this morning feeling really tired."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cómo dice en inglés que se quedó dormido y perdió el bus?",
          choices: [
            "I overslept and missed the early bus this morning — I never even heard my alarm go off.",
            "I slept really well last night and that is exactly why I caught the early bus this morning.",
            "I stayed wide awake the whole night just waiting for the early bus to finally show up outside."
          ],
          answer: 0,
          tests: "overslept = quedarse dormido"
        },
        {
          prompt: "¿Qué significa en inglés natural “amanecimos junto al agua”?",
          choices: [
            "We woke up really early and went straight down to the water for a quick swim before breakfast.",
            "We were up till dawn down by the water — in English you say “up till dawn,” not a single verb.",
            "The weather down by the water turned bright and warm right as the morning was finally arriving."
          ],
          answer: 1,
          tests: "“up till dawn” = amanecer"
        },
        {
          prompt: "¿Cuál es la forma natural en inglés de “dormí como un lirón”?",
          choices: [
            "I slept like a trunk all night and I did not hear a single sound coming from the street outside.",
            "I slept like a dormouse all night and I did not hear a single sound coming from the street outside.",
            "I slept like a log all night and I did not hear a single sound coming from the street outside."
          ],
          answer: 2,
          tests: "“sleep like a log”, sin calco de tronco ni lirón"
        },
        {
          prompt: "Josh le dice que descanse un rato. ¿Cómo se dice en inglés natural?",
          choices: [
            "Just take a nap now, and you can come out with us again tonight once you've rested up a bit.",
            "Just sleep a siesta now, and you can come out with us again tonight once you've rested up a bit.",
            "Just make a nap now, and you can come out with us again tonight once you've rested up a bit."
          ],
          answer: 0,
          tests: "“take a nap”, no “sleep/make a siesta”"
        }
      ]
    }
  },
  {
    id: "learning-to-play-tejo-in-bucaramanga",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "everyday-life",
    register: "courteous",
    pathways: ["foundation"],
    verb: "jugar",
    review: "pending",
    es: {
      title: "Una tarde de tejo en Santander",
      situation:
        "Fabián, un amigo santandereano, lleva a Alex a una cancha de tejo a las afueras de Bucaramanga. Alex nunca ha jugado y confunde jugar con tocar cuando habla de música. Entre lanzamientos, pólvora y cervezas, Fabián le explica cómo se juega, qué es jugar limpio y por qué el que pierde paga las polas.",
      setting: {
        who: "Fabián is a santandereano who grew up throwing tejo on weekends. Alex has never played and barely knows the game involves gunpowder.",
        what: "A first go at tejo: learning the rules, the vocabulary of play, and the tradition that the loser buys the beer.",
        when: "A Saturday afternoon, the clay court warming up as the players arrive.",
        where: "Bucaramanga, in Santander, at an open-air tejo court on the edge of town.",
        why: "Because tejo is as Colombian as it gets, and the verb jugar carries you through games, sport, fair play and taking a risk — while its lookalike trap, using jugar for a musical instrument, is one every learner falls into."
      },
      address: {
        form: "usted",
        who: "Fabián and Alex use usted with each other, even as friends — in Santander usted is the normal register between mates, not a mark of distance.",
        why: "Santander is famous for using usted with everyone: friends, family, even pets. It is warm here, not formal, which surprises learners taught that usted is always the stiff option. Fabián would sound odd tutoring a friend with tú.",
        ifYouSwitch:
          "Switching to tú in Bucaramanga would not offend, but it might sound faintly affected or foreign, since the local default among friends is usted. Matching Fabián's usted is the way to blend in rather than stand out."
      },
      dialogue: [
        {
          speaker: "Fabián",
          target: "Venga, lo llevo a jugar tejo esta tarde. ¿Alguna vez ha jugado?",
          translation: "Come on, I'll take you to play tejo this afternoon. Have you ever played?",
          pronunciation: "VEN-ga, lo YE-vo a hoo-GAR TE-ho ES-ta TAR-de. al-GOO-na ves a hoo-GA-do",
          literal: "Come, you I-take to play tejo this afternoon. Some time you-have played?",
          why: "Note the santandereano usted throughout — “lo llevo”, “ha jugado” — between friends, where other regions would use tú. Colombians often say “jugar tejo”, “jugar fútbol” without the “a” that Spain keeps (“jugar al fútbol”). “Venga” is an inviting “come on”."
        },
        {
          speaker: "Alex",
          target: "No, nunca he jugado tejo. Yo juego fútbol y también juego guitarra.",
          translation: "No, I've never played tejo. I play soccer and I also play guitar.",
          pronunciation: "no, NOON-ka e hoo-GA-do TE-ho. yo HWE-go FOOT-bol ee tam-BYEN HWE-go gee-TA-rra",
          literal: "No, never I-have played tejo. I play soccer and also I play guitar.",
          why: "Alex makes the classic error on purpose: “juego guitarra”. An instrument is not something you jugar. Otherwise his jugar is right — “he jugado”, “juego fútbol” — and Colombian in dropping the “a” before the sport."
        },
        {
          speaker: "Fabián",
          target: "La guitarra se toca, no se juega, hombre. Pero venga y aprende a jugar tejo.",
          translation: "The guitar is played with “tocar”, not “jugar”, man. But come and learn to play tejo.",
          pronunciation: "la gee-TA-rra se TO-ka, no se HWE-ga, OM-bre. PE-ro VEN-ga ee a-PREN-de a hoo-GAR TE-ho",
          literal: "The guitar itself one-plays-tocar, not itself one-plays-jugar, man. But come and learn to play tejo.",
          why: "The correction that matters most in this lesson: instruments take “tocar”, games and sport take “jugar”. Both are “play” in English, which is exactly why the error is so common. “Hombre” as a tag is santandereano and general Colombian."
        },
        {
          speaker: "Alex",
          target: "Jajaja, cierto. ¿Y el tejo cómo se juega?",
          translation: "Hahaha, true. And how do you play tejo?",
          pronunciation: "ha-ha-ha, SYER-to. ee el TE-ho KO-mo se HWE-ga",
          literal: "Hahaha, true. And the tejo how itself one-plays?",
          why: "“¿Cómo se juega?” uses the impersonal se — “how does one play / how is it played?” — the natural way to ask about rules without a subject. It is the same se you saw in “se toca” and “se juega” two lines up."
        },
        {
          speaker: "Fabián",
          target: "Uno le tira al bocín y, si le pega a la mecha, explota. Se juega limpio y el que pierde paga las polas.",
          translation: "You throw at the target ring and, if you hit the gunpowder, it explodes. You play fair and the loser buys the beers.",
          pronunciation: "OO-no le TEE-ra al bo-SEEN ee, si le PE-ga a la ME-cha, eks-PLO-ta. se HWE-ga LEEM-pyo ee el ke PYER-de PA-ga las PO-las",
          literal: "One at-it throws to-the ring and, if at-it hits to the fuse, explodes. Itself one-plays clean and the one-who loses pays the beers.",
          why: "“Jugar limpio” is to play fair — here literal, but it works figuratively too. “Pola” is Colombian slang for a beer, and the tejo tradition really is that the loser pays for the crate. “Bocín” and “mecha” are the target ring and the gunpowder packet."
        },
        {
          speaker: "Alex",
          target: "Listo, juguemos. Me la juego a ver si gano las cervezas.",
          translation: "Alright, let's play. I'll take my chances and see if I win the beers.",
          pronunciation: "LEES-to, hoo-GE-mos. me la HWE-go a ver si GA-no las ser-VE-sas",
          literal: "Ready, let's-play. Myself it I-play to see if I-win the beers.",
          why: "“Juguemos” is the let's-form of jugar (note the u kept before -emos to hold the hard g). “Me la juego” is the idiom jugársela — to take a risk, to go for it — not a literal play. “Listo” is the all-purpose Colombian “OK, ready”."
        }
      ],
      vocabulary: [
        {
          term: "jugar",
          explanation:
            "The base verb for playing a game or a sport — and, figuratively, for taking chances.",
          literal: "to play",
          useWhen:
            "Games and sport: “juego fútbol”, “¿jugamos?”, “los niños están jugando”.",
          avoidWhen:
            "You mean a musical instrument — that is “tocar”, never jugar. This is the classic mix-up.",
          register: "neutral",
          region: "Universal Spanish; Colombia often drops the “a” before a sport.",
          related: ["jugar a", "el juego", "el jugador", "jugarse"],
          example: {
            target: "¿Jugamos una partida?",
            translation: "Shall we play a round?"
          }
        },
        {
          term: "jugar a",
          explanation:
            "The full construction for playing a named game, where English uses “play” with no preposition at all.",
          literal: "to play at",
          useWhen:
            "Careful or Peninsular-flavoured speech, and set games: “jugar a las cartas”, “jugar al ajedrez”.",
          avoidWhen:
            "Fast Colombian speech with sports, where the “a” is usually dropped: “jugar fútbol”, “jugar tejo”.",
          register: "neutral",
          region: "Universal Spanish; the “a” is kept more in Spain than in Colombia.",
          related: ["jugar", "jugar cartas", "jugar al tejo", "la partida"],
          example: {
            target: "Jugamos a las cartas toda la noche.",
            translation: "We played cards all night."
          }
        },
        {
          term: "tocar",
          explanation:
            "To play a musical instrument — and the verb English speakers keep replacing with jugar by mistake.",
          literal: "to touch / to play (an instrument)",
          useWhen:
            "Any instrument or making music: “tocar guitarra”, “toca en una banda”, “¿sabes tocar piano?”.",
          avoidWhen:
            "A game or sport — that is jugar. Tocar is also “to touch” and “whose turn it is” (“te toca”).",
          register: "neutral",
          region: "Universal Spanish; the instrument sense is everywhere.",
          related: ["jugar", "el músico", "te toca", "tocar una canción"],
          example: {
            target: "Toca guitarra en un grupo.",
            translation: "He plays guitar in a band."
          }
        },
        {
          term: "jugar limpio / jugar sucio",
          explanation:
            "To play fair or to play dirty — literal on the court, and just as common figuratively in life and business.",
          literal: "to play clean / to play dirty",
          useWhen:
            "Praising or accusing conduct: “juega limpio”, “esa empresa juega sucio”, “jueguen limpio”.",
          avoidWhen:
            "You mean literal cleanliness — “sucio” alone is dirty; the phrase is about fairness, not hygiene.",
          register: "neutral",
          region: "Universal Spanish; the figurative use is fully at home in Colombia.",
          related: ["jugar", "hacer trampa", "la trampa", "el juego limpio"],
          example: {
            target: "Ese político no juega limpio.",
            translation: "That politician doesn't play fair."
          }
        },
        {
          term: "jugársela",
          explanation:
            "To take a risk, to go for it — a pronominal idiom where the “la” does not stand for anything literal.",
          literal: "to play it (for oneself)",
          useWhen:
            "Owning a gamble or a bold move: “me la jugué”, “se la jugó por el negocio”, “hay que jugársela”.",
          avoidWhen:
            "You mean literally playing a game — this is figurative, about risking something on an outcome.",
          register: "friendly informal",
          region: "Universal Spanish; very common across Colombia.",
          related: ["arriesgarse", "apostar", "jugar", "el riesgo"],
          example: {
            target: "Me la jugué y renuncié.",
            translation: "I took the risk and quit."
          }
        },
        {
          term: "el tejo",
          explanation:
            "Colombia's traditional throwing game — and the metal disc you throw — aimed at gunpowder that explodes on a hit.",
          literal: "the tejo (disc / game)",
          useWhen:
            "Talking about the game or an outing to play it: “vamos a jugar tejo”, “una cancha de tejo”.",
          avoidWhen:
            "You mean a different game; tejo is specific, and it is regional in its heartland, not universal.",
          register: "neutral",
          region: "Andean Colombia, especially Boyacá, Cundinamarca and Santander; also called turmequé.",
          related: ["la cancha", "el bocín", "la mecha", "la moñona"],
          example: {
            target: "Los sábados jugamos tejo.",
            translation: "On Saturdays we play tejo."
          }
        },
        {
          term: "la pola",
          explanation:
            "Colombian slang for a beer — bound up with tejo, where the losing side traditionally pays for the round.",
          literal: "the beer (slang)",
          useWhen:
            "Casual talk about beer among friends: “¿nos tomamos una pola?”, “el que pierde paga las polas”.",
          avoidWhen:
            "Formal settings or with strangers, where “cerveza” is the safe, neutral word to use.",
          register: "friendly informal",
          region: "Colombian slang; widely understood across the country.",
          related: ["la cerveza", "la fría", "el cajón", "brindar"],
          example: {
            target: "Yo invito las polas.",
            translation: "The beers are on me."
          }
        }
      ],
      note:
        "The trap to disarm first is jugar versus tocar: you jugar a game or a sport, but you tocar a musical instrument. Both are “play” in English, so “juego guitarra” feels right and is wrong — say “toco guitarra”. Beyond that, jugar stretches usefully: “jugar limpio / sucio” for fair or dirty conduct on and off the field, and the idiom “jugársela” (“me la jugué”) for taking a risk. And note the Colombian habit of dropping the “a”: “jugar fútbol”, “jugar tejo”, where Spain says “jugar al fútbol”.",
      culture: [
        {
          label: "Tejo: a sport with a bang",
          body:
            "Tejo is a genuinely Colombian game: you throw a metal disc down a lane at a target ring set in a bed of clay, aiming to detonate small packets of gunpowder called mechas. A good hit goes off with a real bang. It grew out of an Indigenous game from the Boyacá highlands, sometimes called turmequé, and is often cited as Colombia's national sport. Beer is part of the fixture, and courts double as easygoing social clubs on weekends."
        },
        {
          label: "Santander speaks in usted",
          body:
            "Santander confounds the textbook rule that usted is the formal option. Here people use usted with everyone — close friends, siblings, children, even the dog — and it sounds perfectly warm. Tú can feel almost foreign in Bucaramanga. Pair that with the region's reputation for blunt, direct speech — santandereanos are proverbially frank — and you get a way of talking that is at once formal in grammar and unvarnished in tone. For a learner it is a useful reminder that usted is not always about distance."
        },
        {
          label: "Playing fair, on and off the court",
          body:
            "“Jugar limpio” and “jugar sucio” leave the field easily. A company that “juega sucio” cuts corners or cheats; a politician who “juega limpio” plays by the rules. The image of the game underlies a lot of Spanish talk about fairness, much as English speaks of playing fair or playing dirty. In Colombian conversation you will hear it about business deals, elections and office politics far more often than about an actual match."
        },
        {
          label: "One English “play”, several Spanish verbs",
          body:
            "English overloads “play”: you play soccer, play the piano, play a role, play a record. Spanish splits the load. Games and sport are “jugar”; instruments and music are “tocar”; a part in a film or play is “actuar” or “hacer un papel”; putting a song on is “poner”. Choosing the wrong one is instantly noticeable, and the jugar/tocar split is the first and most important line to keep straight as a learner."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “jugar la guitarra” for playing an instrument",
          whyItFails:
            "Instruments take “tocar”, not “jugar”: “toco la guitarra”. Because English uses “play” for both games and music, this is the single most common Spanish error English speakers make. Jugar here sounds as odd as “I game the guitar” would in English.",
          sayInstead: "Toco la guitarra."
        },
        {
          mistake: "Using “jugar música” for playing music",
          whyItFails:
            "To perform music is “tocar”; to put a recording on is “poner música”. “Jugar música” is a straight calque of English “play music” and lands wrong either way. Pick tocar for performing and poner for pressing play.",
          sayInstead: "Pon música. / Toca algo."
        },
        {
          mistake: "Reading “me la jugué” as “I played it”",
          whyItFails:
            "“Jugársela” is an idiom meaning to take a risk or go for it; the “la” is not a literal object. Taken word for word it makes no sense in English. Learn it as a unit: “me la jugué” is “I took the chance”.",
          sayInstead: "Me la jugué. (I went for it.)"
        },
        {
          mistake: "Saying “juego el fútbol” with the article",
          whyItFails:
            "Colombian usage drops both the article and often the preposition: “juego fútbol”. Adding “el” (“juego el fútbol”) sounds off, and the fuller “juego al fútbol” marks your Spanish as Peninsular rather than local.",
          sayInstead: "Juego fútbol."
        }
      ],
      variations: [
        {
          form: "¿Jugamos una?",
          register: "friendly informal",
          region: "Universal Spanish",
          whenToUse: "Casually proposing a game or round."
        },
        {
          form: "Le toca jugar.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Telling someone it's their turn (note: tocar)."
        },
        {
          form: "Están jugando sucio.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Accusing someone of unfair play, literal or figurative."
        },
        {
          form: "Me la juego por usted.",
          register: "friendly informal",
          region: "Universal Spanish; usted flavor",
          whenToUse: "Saying you'll take a risk on someone."
        },
        {
          form: "Vamos a jugar tejo.",
          register: "friendly informal",
          region: "Andean Colombia",
          whenToUse: "Proposing an outing to play tejo."
        }
      ],
      prompt: "Alex says “yo juego guitarra.” Why does Fabián correct him?",
      choices: [
        "Because an instrument is played with “tocar”, not “jugar” — you toca la guitarra, while jugar is for games and sport.",
        "Because in Colombia the verb for playing the guitar is neither tocar nor jugar but a completely different regional one.",
        "Because “jugar” can only ever be used with a preposition, so he really should have said “jugar a la guitarra” instead."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "What does Fabián mean by “me la jugué apostándole a que usted gana”?",
          choices: [
            "That he cheated a little bit during the game so that Alex would be the one to end up winning the round.",
            "That he took a risk by betting that Alex would win — jugársela is to gamble or go for it.",
            "That he flatly refuses to place any kind of bet at all on a first-time, completely inexperienced new player."
          ],
          answer: 1,
          tests: "jugársela = to take a risk"
        },
        {
          prompt: "In business, “esa empresa no juega limpio” means—",
          choices: [
            "that the company keeps its offices and facilities remarkably clean, tidy and well organized for the staff.",
            "that the company does a lot of sports and team games together as a way of building up everyone's morale.",
            "that the company does not play fair — jugar limpio/sucio works figuratively for honest or shady conduct."
          ],
          answer: 2,
          tests: "jugar limpio/sucio figurative"
        },
        {
          prompt: "How is tejo played?",
          choices: [
            "You throw a metal disc at a target and try to hit little packets of gunpowder that explode on a hit.",
            "You kick a leather ball into a net at the far end of a long clay court while the other team defends it.",
            "You lay down cards in turn and the player who empties their hand first wins the round and the whole bet."
          ],
          answer: 0,
          tests: "el tejo: aim, gunpowder, explosion"
        },
        {
          prompt: "“El que pierde paga las polas.” What happens to the loser?",
          choices: [
            "The loser has to throw the very next round of tejo all over again from a much longer, harder distance.",
            "The loser buys the beers — “pola” is Colombian slang for a beer, and the bet is the round of drinks.",
            "The loser has to sit out the following game completely and simply watch while the others keep playing."
          ],
          answer: 1,
          tests: "la pola = beer (slang)"
        }
      ]
    },
    en: {
      title: "Una noche de juego y una lección de “play”",
      situation:
        "Cody, un amigo estadounidense, invita a Alejandra a jugar dardos. Ella confunde “play” con “touch” al hablar de música y aprende que en inglés un instrumento se “plays”. Entre lanzamientos aprende “play fair”, “take a chance” y cómo apostar la ronda — y de paso le cuenta a Cody que en el tejo, en su país, el que pierde también paga las cervezas.",
      setting: {
        who: "Cody es un estadounidense de la misma cuadra, fanático de los dardos. Alejandra llegó hace poco y quiere soltarse en inglés en un ambiente relajado.",
        what: "Una primera partida de dardos: aprender el verbo “play”, el falso amigo “touch”, el juego limpio y cómo se apuesta la ronda.",
        when: "Un viernes por la noche, en un bar de barrio con música de fondo.",
        where: "Houston, en un pub tranquilo cerca de la residencia.",
        why: "Porque “play” es una palabra enorme en inglés — cubre juegos, deportes e instrumentos — y el hispanohablante cae siempre en el mismo error, decir “touch” por tocar. Vale la pena desarmarlo jugando."
      },
      address: {
        form: "mixed",
        who: "Cody y Alejandra se tratan por el nombre y con confianza total, como es normal entre amigos jóvenes en Canadá.",
        why: "El inglés no distingue tú de usted: la cercanía se oye en el tono, el nombre de pila y expresiones como “come on” o “alright”. No hay un pronombre que marque respeto o confianza; lo hacen las palabras.",
        ifYouSwitch:
          "Si Alejandra quisiera sonar más formal, no le serviría cambiar el “you”, porque no hay otra forma. Tendría que armar frases más completas y corteses; el pronombre se queda igual pase lo que pase."
      },
      dialogue: [
        {
          speaker: "Cody",
          target: "Come on, I'll take you to play darts tonight. Have you ever played?",
          translation: "Venga, esta noche lo llevo a jugar dardos. ¿Alguna vez ha jugado?",
          pronunciation: "kam on, ail teik yu tu plei darts tu-NAIT. jav yu E-ver pleid",
          literal: "Ven sobre, yo-te llevaré a jugar dardos esta-noche. ¿Has tú alguna-vez jugado?",
          why: "“To play darts” no lleva preposición: “play darts”, “play soccer”, donde el español dice “jugar a los dardos”. “I'll” es “I will”. Y “Have you ever played?” es el presente perfecto para preguntar por una experiencia alguna vez en la vida."
        },
        {
          speaker: "Alejandra",
          target: "I've never played darts. Back home I play soccer, and I also touch the guitar.",
          translation: "Nunca he jugado dardos. En mi país juego fútbol y también toco guitarra.",
          pronunciation: "aiv NE-ver pleid darts. bak jom ai plei SO-ker, and ai OL-so tach de gi-TAR",
          literal: "Yo-he nunca jugado dardos. Atrás casa yo juego fútbol, y yo también toco la guitarra.",
          why: "El error a propósito: “touch the guitar” calca “tocar la guitarra”. En inglés un instrumento se “plays”, no se “touches”. Lo demás está bien: “I've never played” y “I play soccer”, sin artículo antes del deporte."
        },
        {
          speaker: "Cody",
          target: "You play the guitar — “touch” is a false friend for tocar. But come learn to play darts.",
          translation: "Se dice “play the guitar” — “touch” es un falso amigo de tocar. Pero venga y aprenda a jugar dardos.",
          pronunciation: "yu plei de gi-TAR — tach is a fols frend for to-KAR. bat kam lern tu plei darts",
          literal: "Tú tocas la guitarra — tocar es un falso amigo para tocar. Pero ven aprende a jugar dardos.",
          why: "La corrección clave: en inglés los instrumentos van con “play”, igual que los juegos. Pero ojo con el artículo: “play the guitar” sí lleva “the”, mientras que el deporte no (“play soccer”). “Touch” queda solo para el contacto físico."
        },
        {
          speaker: "Alejandra",
          target: "Haha, right. So how do you play darts?",
          translation: "Jaja, cierto. Entonces, ¿cómo se juega a los dardos?",
          pronunciation: "ja-ja, rait. so jau du yu plei darts",
          literal: "Jaja, correcto. Así ¿cómo tú juegas dardos?",
          why: "“How do you play...?”, con “you” impersonal, es la forma natural de preguntar las reglas — el equivalente del “¿cómo se juega?” con “se”. No se dice “how is it played” en la conversación cotidiana."
        },
        {
          speaker: "Cody",
          target: "You throw at the board, and you play fair — no leaning over the line. Loser buys the beers.",
          translation: "Uno le tira al tablero, y se juega limpio — nada de pasarse de la línea. El que pierde paga las cervezas.",
          pronunciation: "yu zrou at de bord, and yu plei fer — nou LI-ning O-ver de lain. LU-ser bais de birs",
          literal: "Tú lanzas a el tablero, y tú juegas justo — nada inclinarse sobre la línea. Perdedor compra las cervezas.",
          why: "“Play fair” es “jugar limpio”, y sirve igual en sentido figurado. El “you” vuelve a ser impersonal, como “uno”. Y fíjese: “loser” es “el que pierde” — al inglés le basta esa palabra, sin el “the one who” que uno esperaría."
        },
        {
          speaker: "Alejandra",
          target: "Alright, let's play. I'll take a chance and see if I win — back home the loser buys the beers in tejo too.",
          translation: "Listo, juguemos. Me la juego a ver si gano — en mi país el que pierde también paga las polas en el tejo.",
          pronunciation: "ol-RAIT, lets plei. ail teik a chans and si if ai uin — bak jom de LU-ser bais de birs in TE-jo tu",
          literal: "Muy-bien, juguemos. Yo tomaré una oportunidad y veré si yo gano — atrás casa el perdedor compra las cervezas en tejo también.",
          why: "“Let's play” es “juguemos”. “Take a chance” es la forma natural de “jugársela / arriesgarse”; no se dice “play it” para eso. Y “tejo”, como préstamo, se queda igual en inglés: se explica, no se traduce."
        }
      ],
      vocabulary: [
        {
          term: "to play",
          explanation:
            "El verbo para jugar a un juego o practicar un deporte — y en inglés, sin la preposición del español.",
          literal: "jugar",
          useWhen:
            "Juegos y deportes: “I play soccer”, “do you want to play?”, “the kids are playing”.",
          avoidWhen:
            "Con instrumentos lleva artículo (“play the guitar”); con un deporte, no (“play soccer”).",
          register: "neutral",
          region: "Inglés universal; sin la “a” de “jugar a”.",
          related: ["play a game", "go play", "player", "play against"],
          example: {
            target: "Do you want to play a round?",
            translation: "¿Jugamos una partida?"
          }
        },
        {
          term: "to play the guitar",
          explanation:
            "En inglés los instrumentos también usan “play”, no “touch”, y suelen llevar “the”: “play the piano”.",
          literal: "tocar (un instrumento)",
          useWhen:
            "Hablar de música: “I play the guitar”, “she plays the piano”, “play in a band”.",
          avoidWhen:
            "No use “touch” para la música; “touch” es solo el contacto físico con algo.",
          register: "neutral",
          region: "Inglés universal; cuidado con el falso amigo “touch”.",
          related: ["play the piano", "play in a band", "musician", "play a song"],
          example: {
            target: "She plays the guitar in a band.",
            translation: "Toca guitarra en un grupo."
          }
        },
        {
          term: "touch",
          explanation:
            "“Touch” es tocar solo en el sentido físico de rozar o palpar algo; para la música se dice “play”.",
          literal: "tocar (físicamente)",
          useWhen:
            "Contacto físico: “don't touch that”, “he touched my arm”, “a touch screen”.",
          avoidWhen:
            "Instrumentos o música — ahí es “play”, nunca “touch”. Es el error estrella del hispanohablante.",
          register: "neutral",
          region: "Inglés universal; falso amigo clásico de “tocar”.",
          related: ["don't touch", "touch screen", "get in touch", "a touch of"],
          example: {
            target: "Please don't touch the paintings.",
            translation: "Por favor no toque los cuadros."
          }
        },
        {
          term: "play fair / play dirty",
          explanation:
            "Jugar limpio o jugar sucio — literal en el juego y también figurado en la vida y en los negocios.",
          literal: "jugar limpio / jugar sucio",
          useWhen:
            "Elogiar o acusar una conducta: “play fair”, “they play dirty”, “that's not fair play”.",
          avoidWhen:
            "No diga “play clean”; el opuesto de “play dirty” es “play fair”.",
          register: "neutral",
          region: "Inglés universal; el uso figurado es igual de común.",
          related: ["fair play", "play by the rules", "cheat", "foul play"],
          example: {
            target: "That politician doesn't play fair.",
            translation: "Ese político no juega limpio."
          }
        },
        {
          term: "to take a chance",
          explanation:
            "El equivalente de “jugársela”: arriesgarse, atreverse a algo cuyo resultado es incierto.",
          literal: "arriesgarse",
          useWhen:
            "Asumir un riesgo: “I took a chance”, “let's go for it”, “take a risk”.",
          avoidWhen:
            "No lo traduzca como “play it”; “play” no transmite el riesgo de “jugársela”.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["take a risk", "go for it", "gamble", "go all in"],
          example: {
            target: "I took a chance and quit my job.",
            translation: "Me la jugué y renuncié."
          }
        },
        {
          term: "tejo",
          explanation:
            "El juego tradicional colombiano; en inglés se deja el préstamo “tejo” y se explica de qué se trata.",
          literal: "el tejo",
          useWhen:
            "Presentar el juego a un angloparlante: “let's play tejo”, “tejo is a Colombian game”.",
          avoidWhen:
            "No hay traducción exacta; conviene explicarlo, no buscarle una palabra inglesa.",
          register: "neutral",
          region: "Palabra colombiana; se usa tal cual en inglés.",
          related: ["a Colombian game", "throwing game", "gunpowder", "the target"],
          example: {
            target: "Tejo is a game where you throw a metal disc.",
            translation: "El tejo es un juego donde uno tira un disco de metal."
          }
        },
        {
          term: "the loser buys the beers",
          explanation:
            "En inglés “the loser” basta (sin “the one who”), y la ronda no se “invita”: es “on me”.",
          literal: "el que pierde paga las cervezas",
          useWhen:
            "Apostar la ronda: “loser buys”, “the beers are on me”, “it's my round”.",
          avoidWhen:
            "No diga “I invite the beers”; para invitar la ronda es “the beers are on me”.",
          register: "friendly informal",
          region: "Inglés universal; “it's on me” para invitar.",
          related: ["it's on me", "my round", "a round of beers", "grab a beer"],
          example: {
            target: "The beers are on me.",
            translation: "Yo invito las cervezas."
          }
        }
      ],
      note:
        "La primera trampa es no confundir “play” con “touch”. Un instrumento se “plays”, no se “touches”: “I play the guitar”, aunque “tocar” tiente a decir “touch”. “Touch” es solo el contacto físico. Fíjese además en el artículo: “play the guitar” lo lleva, pero “play soccer” no. “Play” cubre juegos, deportes e instrumentos; para arriesgarse, en cambio, se dice “take a chance”, no “play it”. Y para invitar la ronda, “the beers are on me”, nunca “I invite the beers”.",
      culture: [
        {
          label: "Un “play” para casi todo",
          body:
            "El inglés usa “play” para más cosas que el español: se “play” un deporte y también se “play” un instrumento, donde el español separa jugar y tocar. El falso amigo que hay que evitar es “touch”, que sirve para el contacto físico, no para la música. Otra sutileza es el artículo: “play the guitar” lo lleva, pero “play soccer” no. Para el hispanohablante la buena noticia es que “play” lo unifica; la mala, que “touch” engaña a casi todos al principio."
        },
        {
          label: "El tejo, difícil de traducir",
          body:
            "El tejo no tiene palabra en inglés, así que lo mejor es dejar el préstamo y explicarlo: un disco de metal que se lanza contra un blanco con pólvora que estalla. Nació en el altiplano de Boyacá, a veces se llama turmequé, y suele citarse como el deporte nacional de Colombia. Al contarlo en inglés conviene describir el estruendo y la tradición de que el perdedor paga la cerveza; eso lo vuelve memorable para quien nunca lo ha visto jugar."
        },
        {
          label: "Invitar la ronda, sin “invite”",
          body:
            "En inglés uno no “invita” una cerveza: se dice “the beers are on me” o “it's my round”. “I invite you a beer” es un calco de “invitar” que suena raro y hasta puede confundirse con convocar a alguien a un evento. En la cultura de bar de Canadá y el Reino Unido, turnarse las rondas — “my round”, “your round” — es casi un ritual. Para el hispanohablante, el ajuste está en cambiar “invitar” por “it's on me”."
        },
        {
          label: "Jugar limpio en todas partes",
          body:
            "Igual que en español, el inglés lleva el juego a la vida diaria: “play fair”, “play by the rules”, “play dirty”. Se oye de política, de negocios y de oficina, no solo de deporte. El opuesto de “play fair” es “play dirty”, no “play clean”, que es un calco a evitar. También existe “fair play” como sustantivo, que el español tomó prestado tal cual. Para el hispanohablante, el mapa es casi idéntico al de “jugar limpio / sucio”."
        }
      ],
      pitfalls: [
        {
          mistake: "“I touch the guitar.”",
          whyItFails:
            "Es un calco de “toco la guitarra”. En inglés un instrumento se “plays”, no se “touches”; “touch” es solo el contacto físico. “I touch the guitar” suena a que uno la está rozando con la mano.",
          sayInstead: "I play the guitar."
        },
        {
          mistake: "“He doesn't play clean.”",
          whyItFails:
            "“Jugar limpio” es “play fair”, y su opuesto es “play dirty”, no “play clean”. “Play clean” es una traducción literal que un angloparlante no usa para hablar de honestidad.",
          sayInstead: "He doesn't play fair."
        },
        {
          mistake: "“I played it all on that bet.”",
          whyItFails:
            "“Me la jugué” no se dice con “play”. En inglés, arriesgarse es “take a chance”, “go for it” o “go all in”. “I played it” no transmite el riesgo y suena incompleto.",
          sayInstead: "I took a big chance on that bet."
        },
        {
          mistake: "“I play the soccer on Sundays.”",
          whyItFails:
            "Los deportes en inglés no llevan artículo: “play soccer”, no “play the soccer”. Ese “the” viene del “el fútbol” del español. Con instrumentos sí se usa (“play the guitar”), pero con deportes no.",
          sayInstead: "I play soccer on Sundays."
        }
      ],
      variations: [
        {
          form: "Want to play a round?",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Proponer un juego de manera casual."
        },
        {
          form: "It's your turn.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Avisarle a alguien que le toca."
        },
        {
          form: "They're playing dirty.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Acusar de juego sucio, literal o figurado."
        },
        {
          form: "I'm taking a chance on you.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Decir que uno se arriesga por alguien."
        },
        {
          form: "Let's go play tejo.",
          register: "friendly informal",
          region: "Inglés universal; préstamo",
          whenToUse: "Proponer ir a jugar tejo."
        }
      ],
      prompt: "Alejandra dice “I touch the guitar.” ¿Por qué está mal?",
      choices: [
        "Porque en inglés un instrumento se “plays”, no se “touches” — “toco la guitarra” se dice “I play the guitar”.",
        "Porque en inglés el verbo correcto para la guitarra no es “play” ni “touch”, sino uno regional completamente distinto.",
        "Porque “play” siempre necesita una preposición y ella debió haber dicho “I play to the guitar” en su lugar."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Qué significa en inglés natural “me la jugué apostando a que ganás”?",
          choices: [
            "Que hizo un poco de trampa durante el juego para que la otra persona terminara ganando la ronda.",
            "Que se arriesgó apostando a que la otra persona gana — en inglés, “I took a chance / I went for it”.",
            "Que se niega por completo a hacer cualquier tipo de apuesta sobre un jugador totalmente novato y nuevo."
          ],
          answer: 1,
          tests: "“take a chance” = jugársela"
        },
        {
          prompt: "En los negocios, “that company doesn't play fair” quiere decir—",
          choices: [
            "que la empresa mantiene sus oficinas e instalaciones siempre muy limpias, ordenadas y bien organizadas.",
            "que en la empresa hacen mucho deporte y muchos juegos en equipo para levantarle la moral al grupo entero.",
            "que la empresa no juega limpio — “play fair / play dirty” funciona en sentido figurado, igual que en español."
          ],
          answer: 2,
          tests: "“play fair/dirty” figurado"
        },
        {
          prompt: "¿Cómo se explica el tejo en inglés?",
          choices: [
            "You throw a metal disc at a target and try to hit little packets of gunpowder that explode on a hit.",
            "You kick a leather ball into a net at the far end of a long clay court while the other team defends it.",
            "You lay down cards in turn and whoever empties their hand first wins the round and takes the whole bet."
          ],
          answer: 0,
          tests: "explicar el tejo en inglés"
        },
        {
          prompt: "“El que pierde paga las polas.” ¿Cómo se dice en inglés natural?",
          choices: [
            "The one who loses has to throw the whole next round of tejo again from a much longer, harder distance.",
            "The loser buys the beers — in English “the loser” is enough, and you don't “invite” a beer, it's “on me”.",
            "The one who loses has to sit out the entire next game and simply watch while all the others keep playing."
          ],
          answer: 1,
          tests: "“the loser buys the beers”, sin “invite”"
        }
      ]
    }
  },
  {
    id: "asking-for-directions-in-pereira",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "neutral",
    pathways: ["foundation"],
    verb: "ayudar",
    review: "pending",
    es: {
      title: "Pidiendo el favor en el Eje Cafetero",
      situation:
        "En Pereira, Alex necesita llegar a un pueblo cafetero y le pide ayuda a Mateo, un local. Aprende que en Colombia “colaborar” y “regalar” son verbos de cortesía para pedir un favor, y que “ayudar” quiere una “a” antes del infinitivo. Cuando una señora se acerca a pedir “una ayudita”, descubre que la misma palabra puede significar plata.",
      setting: {
        who: "Mateo is a friendly pereirano who is happy to point a lost traveler the right way. Alex is trying to reach a coffee town and does not yet know the local politeness verbs.",
        what: "Asking for directions, and learning that colaborar and regalar are courtesy verbs — plus how to tell a genuine request for help from a request for money.",
        when: "Late morning at a busy transport hub, buses coming and going.",
        where: "Pereira, in the Eje Cafetero (the coffee region), Risaralda.",
        why: "Because asking for help is one of the first things a traveler must do, and Colombian Spanish wraps the request in specific verbs — colaborar, regalar, hacer el favor — whose warmth and whose occasional double meaning a learner has to feel out."
      },
      address: {
        form: "mixed",
        who: "Alex uses usted with the strangers he approaches; Mateo answers warmly with a paisa-flavoured vos/tú, and the woman who approaches keeps to usted. The register genuinely mixes.",
        why: "The Eje Cafetero is paisa-adjacent, so voseo is common and easy among locals, while usted stays the safe register with strangers and in service. Hearing both in one exchange is normal here, which is why the lesson is marked mixed.",
        ifYouSwitch:
          "If Alex answered Mateo's friendly vos with stiff usted throughout, nothing breaks, but he would sound a touch formal for someone being done a kindness. Reading which register each speaker offers, and roughly matching it, is the real skill."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Disculpe, ¿me colabora con una información?",
          translation: "Excuse me, could you help me with something (some information)?",
          pronunciation: "dees-KOOL-pe, me ko-la-BO-ra kon OO-na een-for-ma-SYON",
          literal: "Excuse, to-me you-collaborate with an information?",
          why: "“¿Me colabora?” is the Colombian polite way to say “could you help me?”. It is not the English “collaborate” (work together); it is a softened request for a favour. “Una información” for “a piece of information / directions” is normal here, countable where English keeps it uncountable."
        },
        {
          speaker: "Mateo",
          target: "Claro que sí, con gusto. ¿En qué te ayudo, hombre?",
          translation: "Of course, gladly. What can I help you with, man?",
          pronunciation: "KLA-ro ke see, kon GOOS-to. en ke te a-YOO-do, OM-bre",
          literal: "Clear that yes, with pleasure. In what to-you I-help, man?",
          why: "Mateo shifts to a warm, paisa-flavoured register: “¿en qué te ayudo?” with the object “te”. Here ayudar stands alone (no infinitive yet). “Con gusto” is the standard Colombian “gladly / you're welcome”, heard constantly in the coffee region's easy politeness."
        },
        {
          speaker: "Alex",
          target: "Busco el bus para un pueblo del Eje. ¿Me ayuda a encontrarlo?",
          translation: "I'm looking for the bus to a town in the coffee region. Can you help me find it?",
          pronunciation: "BOOS-ko el boos PA-ra oon PWE-blo del E-he. me a-YOO-da a en-kon-TRAR-lo",
          literal: "I-look-for the bus for a town of-the Eje. To-me you-help to find-it?",
          why: "Here is the grammar point: ayudar takes “a” before an infinitive — “ayudar a encontrar”. Dropping the “a” (“ayúdame encontrar”) is a common learner slip. Note Alex swings back to usted (“¿me ayuda?”) with someone he has just met."
        },
        {
          speaker: "Mateo",
          target: "Fresco, yo te ayudo a buscarlo. Regálame un segundito.",
          translation: "No worries, I'll help you look for it. Give me just a second.",
          pronunciation: "FRES-ko, yo te a-YOO-do a boos-KAR-lo. rre-GA-la-me oon se-goon-DEE-to",
          literal: "Fresh, I to-you help to look-for-it. Gift-me a little-second.",
          why: "Again “ayudar a + infinitive” (“te ayudo a buscarlo”). “Regálame un segundito” is pure Colombian courtesy: regalar here does not mean give a gift, just “give / spare me”. “Fresco” is “relax / no worries”, and the diminutive “segundito” softens the ask."
        },
        {
          speaker: "Señora",
          target: "Vecino, ¿me regala una ayudita para el pasaje?",
          translation: "Neighbor, could you spare me a little help for the bus fare?",
          pronunciation: "ve-SEE-no, me rre-GA-la OO-na a-yoo-DEE-ta PA-ra el pa-SA-he",
          literal: "Neighbor, to-me you-gift a little-help for the fare?",
          why: "Same courtesy words — “me regala”, “una ayudita” — but from a stranger asking for fare money, the meaning shifts to a request for cash. “Vecino” (neighbor) is a friendly address to someone you don't actually know. This is the ambiguity the lesson turns on."
        },
        {
          speaker: "Mateo",
          target: "Eso es plata, no ayuda. Cuando te dicen así “una ayudita”, casi siempre es para pedir plata.",
          translation: "That's money, not help. When they say “a little help” to you like that, it's almost always asking for cash.",
          pronunciation: "E-so es PLA-ta, no a-YOO-da. KWAN-do te DEE-sen a-SEE OO-na a-yoo-DEE-ta, KA-si SYEM-pre es PA-ra pe-DEER PLA-ta",
          literal: "That is money, not help. When to-you they-say thus a little-help, almost always is for to-ask money.",
          why: "Mateo decodes it: from a stranger, “una ayudita” or “¿me colabora?” is usually a euphemism for money. “Plata” is the everyday Colombian word for money (not silver here). Context — who is asking, and how — is what separates a favour from a solicitation."
        }
      ],
      vocabulary: [
        {
          term: "ayudar",
          explanation:
            "The base verb for helping someone — the plain, universal word for lending assistance.",
          literal: "to help",
          useWhen:
            "Offering or asking for help: “¿te ayudo?”, “gracias por ayudarme”, “ella me ayudó”.",
          avoidWhen:
            "Nothing broad — but before an infinitive it needs “a”, and for polite requests colaborar often sounds warmer.",
          register: "neutral",
          region: "Universal Spanish; the everyday verb everywhere.",
          related: ["ayudar a", "la ayuda", "colaborar", "echar una mano"],
          example: {
            target: "¿Te ayudo con eso?",
            translation: "Shall I help you with that?"
          }
        },
        {
          term: "ayudar a (+ infinitivo)",
          explanation:
            "To help (to) do something — ayudar links to a following infinitive with an obligatory “a”.",
          literal: "to help to (do)",
          useWhen:
            "Helping with an action: “ayúdame a cargar”, “me ayudó a encontrarlo”, “te ayudo a estudiar”.",
          avoidWhen:
            "You are tempted to drop the “a” as English does — “ayúdame encontrar” is the classic mistake.",
          register: "neutral",
          region: "Universal Spanish; the “a” is not optional.",
          related: ["ayudar", "ayudar con", "a + infinitivo", "colaborar"],
          example: {
            target: "¿Me ayudas a buscar el bus?",
            translation: "Will you help me find the bus?"
          }
        },
        {
          term: "colaborar",
          explanation:
            "In Colombia, the polite everyday verb for “to help” with a favour — softer and more courteous than a bare ayudar.",
          literal: "to collaborate / to help out",
          useWhen:
            "Politely asking or offering: “¿me colabora?”, “¿en qué le colaboro?”, “colabóreme con esto”.",
          avoidWhen:
            "You mean the English “collaborate” (work jointly on a project) — that is a false friend to sidestep.",
          register: "polite service",
          region: "Colombia and the Andes; the service-counter verb of choice.",
          related: ["ayudar", "hacer el favor", "la colaboración", "regalar"],
          example: {
            target: "¿Me colabora con la dirección?",
            translation: "Could you help me with the address?"
          }
        },
        {
          term: "regalar (regáleme / me regala)",
          explanation:
            "A courtesy verb for “give / pass / spare me”, where no actual gift is meant — a hallmark of Colombian politeness.",
          literal: "to gift / to give",
          useWhen:
            "Softening a request: “¿me regala la cuenta?”, “regáleme un momentico”, “¿me regala un vaso de agua?”.",
          avoidWhen:
            "You mean a literal present — context decides, but in a shop or line it is pure politeness, not generosity.",
          register: "polite service",
          region: "Colombia; especially common in the interior and the coffee region.",
          related: ["dar", "colaborar", "hacer el favor", "el regalo"],
          example: {
            target: "¿Me regala un tinto, por favor?",
            translation: "Could I have a black coffee, please?"
          }
        },
        {
          term: "una ayudita",
          explanation:
            "“A little help” — a genuine small favour, but from a stranger on the street usually a gentle way to ask for money.",
          literal: "a little help",
          useWhen:
            "Real small favours among friends, and, read carefully, street requests: “¿me das una ayudita?”.",
          avoidWhen:
            "You assume it is always literal — from an unknown person asking, it commonly means cash, not a hand.",
          register: "friendly informal",
          region: "Universal Spanish diminutive; the money sense is common in Colombian cities.",
          related: ["la ayuda", "colaborar", "la limosna", "una colaboración"],
          example: {
            target: "¿Me regala una ayudita?",
            translation: "Could you spare me a little something?"
          }
        },
        {
          term: "hacer el favor",
          explanation:
            "Another polite request frame — “do me the favour of…”, used to ask courteously or, sharply, to insist.",
          literal: "to do the favour",
          useWhen:
            "Framing a request: “¿me hace el favor?”, “hágame el favor de firmar aquí”.",
          avoidWhen:
            "Said with a hard tone it becomes a firm command (“hágame el favor y se calla”), so mind the delivery.",
          register: "polite formal",
          region: "Universal Spanish; fully standard in Colombia.",
          related: ["colaborar", "por favor", "hágame el favor", "ayudar"],
          example: {
            target: "¿Me hace el favor de esperar?",
            translation: "Would you do me the favour of waiting?"
          }
        },
        {
          term: "echar una mano",
          explanation:
            "An idiom for lending a hand — informal help given or asked for among friends and neighbors.",
          literal: "to throw a hand",
          useWhen:
            "Offering casual help: “¿te echo una mano?”, “necesito que me eches una mano”.",
          avoidWhen:
            "Very formal settings, where colaborar or ayudar reads better; this one is friendly and hands-on.",
          register: "friendly informal",
          region: "Universal Spanish; “dar una manito” is a common Colombian variant.",
          related: ["dar una mano", "ayudar", "colaborar", "una manito"],
          example: {
            target: "¿Me echas una mano con esto?",
            translation: "Can you give me a hand with this?"
          }
        }
      ],
      note:
        "Colombian Spanish asks for help through a small family of courtesy verbs. “¿Me colabora?” is the everyday polite “could you help me?” — not the English “collaborate”. “Regáleme…” means “give / spare me…”, with no gift implied. And plain ayudar needs an “a” before an infinitive: “ayúdame a buscar”, never “ayúdame buscar”. The trap to watch is “una ayudita” and “¿me colabora?” from a stranger on the street: the same warm words there usually mean a request for money, and context — not vocabulary — is what tells you which.",
      culture: [
        {
          label: "Colaborar: the polite request verb",
          body:
            "In Colombia, “colaborar” quietly does the work of “help”. A shop clerk greets you with “¿en qué le colaboro?”, a passer-by asks “¿me colabora con la hora?”, a form says “colabórenos respondiendo”. It is softer and more courteous than a blunt “ayúdeme”, and it has nothing to do with the English “collaborate”. Treat it as the service-counter verb for offering or requesting a small favour, and you will suddenly understand half the polite exchanges happening around you."
        },
        {
          label: "Regálame: giving what isn't a gift",
          body:
            "One of the most Colombian courtesies is using “regalar” — literally “to gift” — for ordinary requests. “¿Me regala la cuenta?”, “regáleme un momentico”, “¿me regala un vasito de agua?”. No present is involved; it is simply a warm, deferential way to ask. Foreigners often hear it as odd generosity at first. The trick is to stop translating “regalar” as gift and hear it as a soft “could you give / pass me”, the everyday music of a Colombian shop or café."
        },
        {
          label: "Una ayudita: help or a handout?",
          body:
            "The same gentle words that ask a favour also, in another mouth, ask for money. From a stranger at a bus stop, “¿me regala una ayudita?” or “¿me colabora?” is usually a discreet request for coins, not for practical help. Nobody says the word “money”; the diminutive does the softening. Learning to read who is asking, where, and how lets you tell an honest request for directions from a polite solicitation — a distinction locals make in an instant."
        },
        {
          label: "The Eje Cafetero and its easy warmth",
          body:
            "The coffee region — Pereira, Manizales, Armenia — is paisa-adjacent, and its speech shows it: voseo (“¿vos qué hacés?”), a musical accent, and a reputation for friendly, hospitable service. You will hear “fresco” for “relax”, “de una” for “right away”, and “con gusto” everywhere. Usted still governs first meetings and counters, while vos warms up talk among locals. It is one of the easier regions for a newcomer to feel welcomed into a conversation."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “ayúdame encontrar el bus” without the “a”",
          whyItFails:
            "Ayudar needs “a” before an infinitive: “ayúdame a encontrar”. English “help me find” drops any linker, so learners drop the “a” too. It sounds unfinished to a Colombian ear, like a missing gear between the verbs.",
          sayInstead: "Ayúdame a encontrar el bus."
        },
        {
          mistake: "Hearing “¿me colabora?” as English “collaborate”",
          whyItFails:
            "“Colaborar” in Colombia is simply “to help / do a favour”, not to work jointly on a project. Reading it as the English cognate makes “¿me colabora con la hora?” (“can you help me with the time?”) sound baffling. It is a false friend to retire.",
          sayInstead: "Claro, ¿en qué le colaboro?"
        },
        {
          mistake: "Taking “regáleme un segundo” as a literal gift",
          whyItFails:
            "“Regalar” as courtesy means “give / spare me”, not “make me a present of”. Hearing it literally, you might wonder why a busy clerk is gifting you seconds. It is just soft, deferential phrasing for an everyday request.",
          sayInstead: "Con gusto, regáleme un momentico."
        },
        {
          mistake: "Asking a stranger with “¿me regala una ayudita?”",
          whyItFails:
            "Out of your mouth to a stranger, that phrasing sounds like you are begging for money, because that is what it usually signals on the street. If you want directions or a hand, be specific about the actual favour instead of using the money-tinged wording.",
          sayInstead: "¿Me colabora con una información, por favor?"
        }
      ],
      variations: [
        {
          form: "¿Me colabora con algo?",
          register: "polite service",
          region: "Colombia",
          whenToUse: "The soft, everyday “could you help me?”."
        },
        {
          form: "¿Me ayuda a cargar esto?",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Asking for help with a specific action."
        },
        {
          form: "¿Me hace el favor?",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "A courteous request, or a firm one by tone."
        },
        {
          form: "Regáleme un momentico.",
          register: "polite service",
          region: "Colombia; interior and coffee region",
          whenToUse: "Softly asking someone to wait a moment."
        },
        {
          form: "¿Me das una manito?",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Casually asking a friend to lend a hand."
        }
      ],
      prompt: "When Alex asks “¿me colabora con una información?”, he is—",
      choices: [
        "offering to collaborate with the stranger on some kind of shared work project or community task together.",
        "politely asking for help — “colaborar” is the everyday Colombian way to say “could you help me?”.",
        "asking the stranger to give him a small amount of money so that he can pay for the bus fare he needs."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence correctly uses “ayudar” with an infinitive?",
          choices: [
            "¿Me ayudás encontrar el bus que va para el pueblo cafetero donde queda la finca de mi amigo?",
            "¿Me ayudás de encontrar el bus que va para el pueblo cafetero donde queda la finca de mi amigo?",
            "¿Me ayudás a encontrar el bus que va para el pueblo cafetero donde queda la finca de mi amigo?"
          ],
          answer: 2,
          tests: "ayudar a + infinitive"
        },
        {
          prompt: "In a Colombian café, “¿me regala un tinto?” means—",
          choices: [
            "Could I have a black coffee, please? — regalar is a courtesy verb here, not a request for a free gift.",
            "Would you like to give me a black coffee as a present, since you are clearly feeling generous today?",
            "Could you please tell me whether the black coffee that you happen to sell in this café is actually free?"
          ],
          answer: 0,
          tests: "regalar as a courtesy verb, not a gift"
        },
        {
          prompt: "A stranger on the street says “¿me regala una ayudita?” Most likely they—",
          choices: [
            "need you to physically help them carry something heavy or to lift a box down off a very high shelf.",
            "are asking for money — from a stranger, “una ayudita” or “¿me colabora?” is usually a polite request for change.",
            "want to collaborate with you on a long-term community project that involves the whole neighborhood together."
          ],
          answer: 1,
          tests: "una ayudita as a euphemism for money"
        },
        {
          prompt: "A shop clerk greets you with “¿en qué le colaboro?” They are—",
          choices: [
            "asking you to collaborate with them on organizing and tidying up the shelves and the shop's front displays.",
            "asking you for a small donation or a tip before they are willing to show you any of the products at all.",
            "asking “how can I help you?” — “colaborar” is the standard service-counter way to offer help in Colombia."
          ],
          answer: 2,
          tests: "colaborar as service-counter 'how can I help you'"
        }
      ]
    },
    en: {
      title: "Pidiendo ayuda en una estación de Houston",
      situation:
        "En Houston, Alejandra necesita llegar a un pueblo pequeño y le pide ayuda a un desconocido. Aprende que el inglés pide favores con “help me out”, “could I have…” y “do me a favour”, sin los verbos de cortesía “colaborar” o “regalar”, y que “collaborate” es un falso amigo. Cuando alguien le pide “spare some change”, entiende que es una petición de plata.",
      setting: {
        who: "Ryan es un torontino amable que con gusto orienta a una viajera perdida. Alejandra intenta llegar a un pueblo pequeño y todavía calca los verbos de cortesía del español.",
        what: "Pedir indicaciones y descubrir que el inglés pide favores con “help me out”, “could I have…” y “do me a favour” — y cómo distinguir un pedido de ayuda de uno de plata.",
        when: "Media mañana en una estación concurrida, con buses que entran y salen.",
        where: "Houston, Canadá.",
        why: "Porque pedir ayuda es de lo primero que uno hace como viajero, y el inglés no tiene los verbos “colaborar” ni “regalar”: la cortesía vive en el modal (“could you”) y en los suavizadores, algo que un hispanohablante tiene que reaprender."
      },
      address: {
        form: "mixed",
        who: "En inglés no hay usted ni tú: Alejandra y todos usan la misma segunda persona “you”, y la formalidad se marca de otra manera.",
        why: "El inglés tiene una sola forma de segunda persona, así que la cortesía no está en el pronombre sino en el verbo y los suavizadores — “could you”, “would you mind”, “just”, “a little” — y en el tono. Por eso la dirección se marca como mixed.",
        ifYouSwitch:
          "Si Alejandra traduce la deferencia del usted metiendo frases larguísimas y ceremoniosas, suena rígida; el inglés logra el respeto con un “could you” y un “please” bien puestos, no alargando la frase."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Excuse me, could you help me out for a second?",
          translation: "Disculpe, ¿me colabora un momentico?",
          pronunciation: "eks-KIÚS mi, kud yu jelp mi aut for a SÉ-kond",
          literal: "Disculpe, ¿podría usted ayudarme afuera por un segundo?",
          why: "“Help me out” es el equivalente natural del colombiano “¿me colabora?”: pedir un favor con calidez. El inglés no tiene un verbo de cortesía como “colaborar”, así que la suavidad la ponen “could you” y “out”."
        },
        {
          speaker: "Ryan",
          target: "Sure, no problem. What do you need?",
          translation: "Claro, no hay problema. ¿Qué necesita?",
          pronunciation: "shur, nou PRÓ-blem. wát du yu niid",
          literal: "Claro, no problema. ¿Qué usted necesita?",
          why: "El inglés ofrece ayuda de forma directa: “sure, no problem”. No aparece ningún “con gusto” ni verbo de cortesía; la amabilidad está en el tono breve y llano, no en una fórmula fija."
        },
        {
          speaker: "Alejandra",
          target: "I'm looking for the bus to a small town. Can you help me find it?",
          translation: "Busco el bus para un pueblo pequeño. ¿Me ayuda a encontrarlo?",
          pronunciation: "aim LÚ-king for de bos tu a smol taun. kan yu jelp mi faind it",
          literal: "Estoy buscando el bus a un pequeño pueblo. ¿Puedes ayudarme encontrar-lo?",
          why: "Aquí está el punto clave: “help me find”, con el segundo verbo pelado, sin “a” y sin “to”. El español obliga a “ayudar a encontrar”; el inglés natural quita todo enlace: “help me find”, no “help me to find”."
        },
        {
          speaker: "Ryan",
          target: "No worries, I'll help you find it. Give me a second.",
          translation: "Tranquila, yo le ayudo a buscarlo. Regáleme un segundo.",
          pronunciation: "nou WÓ-rris, ail jelp yu faind it. guiv mi a SÉ-kond",
          literal: "No preocupaciones, yo ayudaré a usted encontrar-lo. Dame un segundo.",
          why: "Para ofrecer ayuda en el momento el inglés usa “I'll help” (futuro con will), no “I help”, que sonaría a costumbre. Y “give me a second” es directo: no existe el “regálame” cortés del español."
        },
        {
          speaker: "Stranger",
          target: "Hey, can you spare some change for the bus?",
          translation: "Oiga, ¿me regala una ayudita para el pasaje?",
          pronunciation: "jei, kan yu spér som cheinch for de bos",
          literal: "Oye, ¿puedes prescindir de algo de cambio para el bus?",
          why: "El inglés tiene su propia fórmula para pedir plata en la calle: “spare some change”. Igual que “una ayudita” en Colombia, es una manera indirecta de pedir dinero, no ayuda práctica."
        },
        {
          speaker: "Ryan",
          target: "That's asking for money, not help. “Spare some change” usually means cash.",
          translation: "Eso es pedir plata, no ayuda. “Spare some change” casi siempre es plata.",
          pronunciation: "dats ÁS-king for MÓ-ni, not jelp. spér som cheinch YÚ-shuali miins kash",
          literal: "Eso está pidiendo por dinero, no ayuda. “Prescindir de cambio” usualmente significa efectivo.",
          why: "Ryan lo descifra: “spare some change” de un desconocido es pedir monedas. Cada idioma tiene su eufemismo de calle, y saber leer quién pide, dónde y cómo es lo que separa un favor de una solicitud."
        }
      ],
      vocabulary: [
        {
          term: "to help",
          explanation:
            "El verbo básico para asistir a alguien; la palabra universal y directa.",
          literal: "ayudar",
          useWhen:
            "Al ofrecer o pedir ayuda: “can you help me?”, “thanks for helping”, “she helped me”.",
          avoidWhen:
            "Casi nunca sobra; solo cuida la preposición y el segundo verbo sin “to”.",
          register: "neutral",
          region: "Inglés universal; el verbo de todos los días.",
          related: ["help out", "help with", "give a hand", "assist"],
          example: {
            target: "Can I help you with that?",
            translation: "¿Te ayudo con eso?"
          }
        },
        {
          term: "help (someone) find / do (something)",
          explanation:
            "“Help” se une a otro verbo sin “a” y normalmente sin “to”: “help me find”, “help me carry”.",
          literal: "ayudar (a alguien) a encontrar / hacer (algo)",
          useWhen:
            "Al ayudar con una acción: “help me find it”, “I helped her move”.",
          avoidWhen:
            "Te dan ganas de meter “to” siempre; “help me to find” existe pero suena más rígido que “help me find”.",
          register: "neutral",
          region: "Inglés universal; el infinitivo sin “to” es lo más natural.",
          related: ["help me find", "help me carry", "help out", "assist"],
          example: {
            target: "Can you help me find the bus?",
            translation: "¿Me ayudas a encontrar el bus?"
          }
        },
        {
          term: "help (someone) out",
          explanation:
            "El equivalente natural del colombiano “colaborar”: echar una mano con un favor, no “collaborate”.",
          literal: "ayudar (a alguien), sacar de un apuro",
          useWhen:
            "Al pedir u ofrecer un favor: “can you help me out?”, “thanks for helping me out”.",
          avoidWhen:
            "Cuando de verdad quieres decir “collaborate” (trabajar juntos en un proyecto), que es otra cosa.",
          register: "friendly informal",
          region: "Inglés universal; “help out” es más cálido que un “help” pelado.",
          related: ["help", "do a favour", "give a hand", "lend a hand"],
          example: {
            target: "Could you help me out for a minute?",
            translation: "¿Me colabora un minutico?"
          }
        },
        {
          term: "Could I have…? / Could you pass…?",
          explanation:
            "Lo que el inglés usa donde el colombiano dice “¿me regala…?”; el inglés no calca “gift”.",
          literal: "¿Podría yo tener…? / ¿Podría pasarme…?",
          useWhen:
            "Al pedir algo con cortesía: “could I have the bill?”, “could you pass me a napkin?”.",
          avoidWhen:
            "No traduzcas “regalar” con “gift” ni con un “give me” pelado, que suena brusco.",
          register: "polite neutral",
          region: "Inglés universal; “Can I get…?” es la variante común en Estados Unidos.",
          related: ["Can I get…?", "Could you pass…?", "I'll have…", "Would you mind…?"],
          example: {
            target: "Could I have a black coffee, please?",
            translation: "¿Me regala un tinto, por favor?"
          }
        },
        {
          term: "spare some change / a little help",
          explanation:
            "La fórmula con que un desconocido pide plata en inglés; el equivalente de “una ayudita”.",
          literal: "prescindir de algo de cambio / una ayudita",
          useWhen:
            "Al reconocer una solicitud de dinero en la calle: “can you spare some change?”.",
          avoidWhen:
            "No lo uses tú para pedir un favor práctico; suena a que estás pidiendo monedas.",
          register: "friendly informal",
          region: "Inglés universal; “spare change” es la frase típica de la calle.",
          related: ["spare change", "a little help", "a handout", "lend a hand"],
          example: {
            target: "Can you spare some change?",
            translation: "¿Me regala una ayudita?"
          }
        },
        {
          term: "do (someone) a favour",
          explanation:
            "El marco cortés para pedir un favor; ojo con el artículo “a” y con la estructura “and + verbo”.",
          literal: "hacerle a alguien un favor",
          useWhen:
            "Al pedir algo: “could you do me a favour?”, “do me a favour and wait here”.",
          avoidWhen:
            "No calques “hágame el favor de + verbo” como “do me the favor to…”.",
          register: "polite neutral",
          region: "Inglés universal; en EE. UU. se escribe “favor” y en Canadá “favour”.",
          related: ["do me a favour", "could you", "would you mind", "help out"],
          example: {
            target: "Could you do me a favour and wait?",
            translation: "¿Me hace el favor de esperar?"
          }
        },
        {
          term: "give (someone) a hand",
          explanation:
            "Modismo para echar una mano; ayuda informal y concreta entre conocidos.",
          literal: "darle a alguien una mano",
          useWhen:
            "Al ofrecer o pedir ayuda concreta: “can you give me a hand?”, “I'll give you a hand”.",
          avoidWhen:
            "En contextos muy formales, donde “help” o “assist” quedan mejor.",
          register: "friendly informal",
          region: "Inglés universal; “lend a hand” es la variante un poco más formal.",
          related: ["lend a hand", "help out", "help", "pitch in"],
          example: {
            target: "Can you give me a hand with this?",
            translation: "¿Me echas una mano con esto?"
          }
        }
      ],
      note:
        "El inglés pide ayuda sin los verbos de cortesía del español. “¿Me colabora?” se vuelve “could you help me out?”, y “collaborate” es un falso amigo (trabajar juntos, no pedir un favor). “¿Me regala…?” se vuelve “could I have…?” o “could you pass me…?”, nunca “gift me”. Para ofrecer ayuda en el momento se usa “I'll help you” (futuro con will), no “I help you”. Y “help” se une a otro verbo sin “to”: “help me find”, no “help me to find”. Ojo con “spare some change”: de un desconocido, es pedir plata.",
      culture: [
        {
          label: "El inglés no tiene un “colaborar” cortés",
          body:
            "El español colombiano tiene un verbo entero para pedir favores con suavidad: “colaborar”. El inglés no. Donde un bogotano dice “¿me colabora?”, el inglés recurre a “could you help me out?” o “would you mind…?”. La cortesía no vive en un verbo especial sino en el modal (“could”, “would”) y en pequeños suavizadores. Traducir “colaborar” como “collaborate” lleva directo al error, porque en inglés eso significa trabajar juntos en un proyecto, no hacer un favor."
        },
        {
          label: "Pedir sin “regalar”: “could I have…?”",
          body:
            "El colombiano “¿me regala…?” no tiene equivalente literal en inglés: nadie dice “gift me”. La cortesía inglesa se apoya en el modal: “could I have a coffee?”, “could you pass me the salt?”. Es un giro que a muchos hispanohablantes les cuesta, porque suena menos florido que el “regálame” de casa. Pero “could I have…?” es tan educado como suave, y es la fórmula segura en cafés, tiendas y restaurantes de cualquier país anglófono."
        },
        {
          label: "“Spare some change”: pedir plata en inglés",
          body:
            "Igual que en Colombia “una ayudita” o “¿me colabora?” de un desconocido suele ser plata, el inglés tiene su propia fórmula de calle: “can you spare some change?” o, más corto, “spare change?”. Nadie dice “money” de frente; la palabra “change” (monedas) hace el trabajo. Aprender a reconocerla evita malentendidos: si alguien en la calle te pide “spare change” con la mano extendida, está pidiendo dinero, no ayuda para cargar algo o encontrar una dirección."
        },
        {
          label: "Pedir ayuda a un desconocido en Canadá",
          body:
            "En Canadá y Estados Unidos, acercarse a un desconocido casi siempre empieza con “excuse me” o “sorry to bother you”, y sigue con un “could you…?”. El respeto se marca con esos suavizadores y con un tono breve, no con frases largas. Un “thank you” al final se espera siempre. A un colombiano, acostumbrado a la calidez del “¿me colabora, vecino?”, el estilo puede parecerle algo seco, pero es amable dentro de sus propias reglas."
        }
      ],
      pitfalls: [
        {
          mistake: "“Can you collaborate me with something?”",
          whyItFails:
            "Es un calco de “¿me colabora con algo?”. En inglés “collaborate” significa trabajar juntos en un proyecto, no pedir un favor, y además no lleva objeto directo así. Suena raro y confunde a quien escucha.",
          sayInstead: "Can you help me out with something?"
        },
        {
          mistake: "“Can you gift me a napkin?”",
          whyItFails:
            "Es un calco de “¿me regala una servilleta?”. “Gift” como verbo no sirve para pedir cosas cotidianas; en inglés se usa “could you pass me…” o “could I have…”. “Gift me” suena artificial.",
          sayInstead: "Could you pass me a napkin?"
        },
        {
          mistake: "“Wait, I help you.”",
          whyItFails:
            "Para ofrecer ayuda en el momento, el inglés usa “I'll help you” (futuro con will). El presente “I help you” suena a una costumbre o a algo que uno hace siempre, no a una oferta espontánea.",
          sayInstead: "Wait, I'll help you."
        },
        {
          mistake: "“Do me the favor to close the window.”",
          whyItFails:
            "Es un calco de “hágame el favor de…”. En inglés se dice “do me a favour” (con el artículo “a”) y se sigue con “and + verbo”, no con “the favor to”. La versión calcada suena a traducción.",
          sayInstead: "Could you do me a favour and close the window?"
        }
      ],
      variations: [
        {
          form: "Could you help me out?",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "El “¿me ayudas?” suave de todos los días."
        },
        {
          form: "Can you help me carry this?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Pedir ayuda con una acción concreta."
        },
        {
          form: "Could you do me a favour?",
          register: "polite neutral",
          region: "Inglés universal",
          whenToUse: "Un pedido cortés y un poco más formal."
        },
        {
          form: "Give me a second.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Pedir con suavidad que alguien espere un momento."
        },
        {
          form: "Can you give me a hand?",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Pedirle a un amigo que eche una mano."
        }
      ],
      prompt:
        "En inglés, “collaborate” no es lo mismo que “colaborar” (ayudar). Para pedir ayuda, ¿qué se dice?",
      choices: [
        "“Can you collaborate me with this?” — es la forma natural y educada de pedir ayuda en el inglés cotidiano.",
        "“Can you help me out with this?” — “collaborate” significa trabajar juntos en un proyecto, no pedir un favor.",
        "“Can you make me the favor of this?” — es la manera estándar y correcta de pedir ayuda con algo en inglés."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Entre estas opciones, ¿cuál suena más natural en inglés al pedir ayuda?",
          choices: [
            "“Can you help me for find the bus that goes to the little coffee town where the farm is?”",
            "“Can you help me to finding the bus that goes to the little coffee town where the farm is?”",
            "“Can you help me find the bus that goes to the little coffee town where the farm is?”"
          ],
          answer: 2,
          tests: "“help” + infinitivo sin “to”"
        },
        {
          prompt: "En un café usted quiere pedir un tinto con cortesía. ¿Qué dice en inglés?",
          choices: [
            "“Could I have a black coffee, please?” — es la fórmula cortés; “regálame” no se traduce con “gift me”.",
            "“Would you gift me a black coffee, please?” — es la forma natural y cortés de pedir un café en inglés.",
            "“Do you give me a black coffee for free?” — es como se pide amablemente un café en una cafetería."
          ],
          answer: 0,
          tests: "“Could I have…”, no “gift me”"
        },
        {
          prompt:
            "Un desconocido en la calle dice “can you spare some change?” con la mano extendida. Lo más probable es que—",
          choices: [
            "necesite que usted lo ayude a cargar algo pesado o a bajar una caja de un estante muy alto.",
            "esté pidiendo plata — “spare some change”, de un desconocido y con la mano extendida, suele ser pedir monedas.",
            "quiera colaborar con usted en un proyecto comunitario de largo plazo para todo el vecindario reunido."
          ],
          answer: 1,
          tests: "“spare some change” como pedir plata según el contexto"
        },
        {
          prompt: "¿Cómo se pide un favor en inglés natural, sin calcar “hágame el favor de…”?",
          choices: [
            "“Do me the favor to close the window.” — es la forma correcta y educada de pedir un favor en inglés.",
            "“Make me the favor of closing the window.” — así se pide amablemente un favor pequeño en el día a día.",
            "“Could you do me a favour and close the window?” — con “a favour” y “and + verbo”, no “the favor to”."
          ],
          answer: 2,
          tests: "“do me a favour and…”, no “the favor to”"
        }
      ]
    }
  }

);

markSource(lessons, "data/lessons/22-foundation-rest-and-play.js");
