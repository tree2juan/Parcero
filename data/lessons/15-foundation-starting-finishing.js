/*
 * Lesson block: foundation / starting, finishing and entering.
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
 * The three verbs here — empezar, terminar and entrar — are the everyday tools
 * of getting under way, wrapping up and going in: where an action begins, where
 * it ends, and how you cross a threshold. The two directions are mirrors: same
 * number of dialogue turns, vocabulary entries, culture notes, pitfalls,
 * variations and practice questions, and the same optional slots filled on the
 * same rows. That is enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "starting-the-salsa-class-in-cali",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "familiar",
    verb: "empezar",
    review: "pending",
    es: {
      title: "Starting salsa class in Cali",
      situation:
        "Alex arrives for his first salsa class at an academy in Cali. The teacher, Marcela, welcomes him, asks whether he has danced before, and they start with the basic step. Everything depends on whether Alex dares to begin and loosen up his body.",
      setting: {
        who: "Marcela has taught salsa in Cali for fifteen years and can spot a nervous beginner from across the room. Alex is a foreigner with two left feet who has always wanted to dance but never dared to start.",
        what: "A first salsa lesson: sizing up the student, agreeing where to begin, and getting the basic step going.",
        when: "A Tuesday evening, the academy's mirrored studio warming up as the music comes on.",
        where: "Cali, the self-declared world capital of salsa, in a dance academy in the San Fernando neighborhood.",
        why: "Because the hardest part of learning to dance is simply beginning, and how Marcela eases Alex into it — when they start, what they start with — sets the tone for whether he keeps coming back."
      },
      address: {
        form: "tú",
        who: "Marcela uses tú with Alex right away, and he tries to answer in kind.",
        why: "In a Cali dance academy the mood is warm and youthful, and a friendly teacher reaches for tú almost at once to put a nervous beginner at ease. Note that Cali is also deep voseo country: you will hear vos just as often on the street.",
        ifYouSwitch:
          "Answering Marcela with a stiff usted would not offend, but it would keep a distance she is actively trying to close. Matching her tú signals that Alex is relaxed and ready to play along."
      },
      dialogue: [
        {
          speaker: "Marcela",
          target: "¿Listo para empezar? ¿Ya has bailado salsa antes?",
          translation: "Ready to start? Have you danced salsa before?",
          pronunciation: "LEES-toh PA-ra em-peh-SAR? ya as bai-LA-doh SAL-sa AN-tes",
          literal: "Ready to to-start? Already have you danced salsa before?",
          why: "“Empezar” is the everyday verb for beginning; its stem changes to empiez- when stressed (empiezo, empieza) but stays empez- in the infinitive and in nosotros. Here the plain infinitive follows “para”, so there is no stem change."
        },
        {
          speaker: "Alex",
          target: "Nunca. Empiezo hoy de cero, la verdad.",
          translation: "Never. I'm starting from scratch today, honestly.",
          pronunciation: "NOON-ka. em-PYEH-soh oy de SEH-roh, la ver-DAD",
          literal: "Never. I-start today from zero, the truth.",
          why: "“Empiezo” shows the e→ie stem change that kicks in when the syllable is stressed. “De cero” is the Colombian way to say “from scratch”, and “la verdad” tacked on the end softens the confession, like “honestly”."
        },
        {
          speaker: "Marcela",
          target: "Tranquilo. Empezamos con el paso básico y de ahí arrancamos.",
          translation: "No worries. We'll start with the basic step and take it from there.",
          pronunciation: "tran-KEE-loh. em-peh-SA-mos kon el PA-so BA-see-koh ee de ai a-rran-KA-mos",
          literal: "Calm. We-start with the step basic and from there we-get-going.",
          why: "“Empezamos” keeps the empez- stem because the stress falls on the -a-. Watch “arrancamos”: literally “we start (an engine)”, it is hugely common in Colombia for “let's get going”, warmer and more energetic than empezar."
        },
        {
          speaker: "Alex",
          target: "¿Y a qué horas empieza a sonar la música?",
          translation: "And what time does the music start playing?",
          pronunciation: "ee a ke OH-ras em-PYEH-sa a so-NAR la MOO-see-ka",
          literal: "And at what hours it-starts to to-sound the music?",
          why: "“Empezar a + infinitivo” is the frame for starting to do something — here “empieza a sonar”, starts to play. The “a” is obligatory before the infinitive; dropping it (“empieza sonar”) is a classic learner slip. Note the very Colombian plural “¿a qué horas?”."
        },
        {
          speaker: "Marcela",
          target: "Ya. Comienza cuando yo cuente ocho; no empieces antes.",
          translation: "Right now. It begins when I count eight; don't start before that.",
          pronunciation: "ya. ko-MYEN-sa KWAN-doh yo KWEN-te OH-choh; no em-PYEH-ses AN-tes",
          literal: "Already. It-begins when I count eight; not you-start before.",
          why: "“Comienza” is comenzar, a near-synonym of empezar but a touch more formal — you meet it in writing and announcements. “No empieces” is the negative command (present subjunctive), showing the e→ie change plus the spelling shift z→c before e."
        },
        {
          speaker: "Alex",
          target: "Listo, ya empecé a sentir el ritmo.",
          translation: "Got it — I've started to feel the rhythm.",
          pronunciation: "LEES-toh, ya em-peh-SEH a sen-TEER el REET-moh",
          literal: "Ready, already I-started to to-feel the rhythm.",
          why: "“Empecé” is the preterite “I started”; note the c (empecé, not “empezé”), since z becomes c before e to keep the sound. Paired with “ya”, the preterite marks a fresh, just-completed change: the rhythm has clicked."
        }
      ],
      vocabulary: [
        {
          term: "empezar",
          explanation:
            "The everyday verb for beginning — to start an action, an event or a stretch of time.",
          literal: "to begin / to start",
          useWhen:
            "Almost any beginning in speech: empiezo, empieza, empezamos, and especially empezar a + infinitive for starting to do something.",
          avoidWhen:
            "Nothing much — it is the safe default. In very formal writing comenzar can feel a notch more polished.",
          register: "neutral",
          region: "Universal Spanish; the base verb everywhere, Colombia included.",
          related: ["empezar a", "comenzar", "arrancar", "dar inicio"],
          example: {
            target: "Empezamos con el paso básico.",
            translation: "We start with the basic step."
          }
        },
        {
          term: "empezar a + infinitivo",
          explanation:
            "The frame for beginning to do something: empezar, then “a”, then a verb in the infinitive.",
          literal: "to begin to + verb",
          useWhen:
            "Whenever a new action gets under way: empezó a llover, empiezo a entender, empieza a sonar.",
          avoidWhen:
            "Before a noun rather than a verb — there you just use empezar + noun (empezar la clase), with no “a”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["empezó a llover", "empiezo a entender", "ponerse a", "romper a"],
          example: {
            target: "¿A qué horas empieza a sonar la música?",
            translation: "What time does the music start playing?"
          }
        },
        {
          term: "comenzar",
          explanation:
            "A close synonym of empezar, a shade more formal — the verb of announcements, ceremonies and the written word.",
          literal: "to commence / to begin",
          useWhen:
            "In writing, on signs, or when you want a slightly more elevated tone: la función comienza a las ocho.",
          avoidWhen:
            "Casual chat, where empezar or arrancar sound more natural; comenzar there can seem a bit stiff.",
          register: "neutral",
          region: "Universal Spanish; identical in meaning to empezar.",
          related: ["empezar", "dar comienzo", "iniciar", "comienzo"],
          example: {
            target: "La clase comienza cuando cuente ocho.",
            translation: "The class begins when I count eight."
          }
        },
        {
          term: "arrancar",
          explanation:
            "Literally to start an engine, but in Colombia the go-to word for getting going with energy and momentum.",
          literal: "to start up / to pull away",
          useWhen:
            "Kicking off any activity with a bit of push: arrancamos, ¿arrancamos?, arrancó la fiesta.",
          avoidWhen:
            "Formal or written contexts; arrancar is colloquial and would look out of place on a sign.",
          register: "friendly informal",
          region: "All over Colombia and much of Latin America; especially frequent in the Andean interior and Valle.",
          related: ["arrancamos", "¿arrancamos?", "prender", "despegar"],
          example: {
            target: "Empezamos con el básico y de ahí arrancamos.",
            translation: "We start with the basic and get going from there."
          }
        },
        {
          term: "de cero",
          explanation:
            "“From scratch / from zero.” Beginning with no prior experience, or with nothing already done.",
          literal: "from zero",
          useWhen:
            "Owning that you are a complete beginner, or that something must be built up from nothing.",
          avoidWhen:
            "When you actually have some grounding — “de cero” claims total inexperience and can undersell what you know.",
          register: "friendly informal",
          region: "Universal Spanish; everyday in Colombia, where you also hear “de ceros”.",
          related: ["desde cero", "de la nada", "partir de cero", "de ceros"],
          example: {
            target: "Empiezo hoy de cero.",
            translation: "I'm starting from scratch today."
          }
        },
        {
          term: "el paso básico",
          explanation:
            "The basic step — the foundational move a dance is built on, and where any salsa class begins.",
          literal: "the basic step",
          useWhen:
            "Talking about learning to dance, or by extension the fundamentals of any skill.",
          avoidWhen:
            "Outside a learning context it is just a literal step; the “fundamentals” sense needs the dance frame.",
          register: "neutral",
          region: "Universal Spanish; loaded with meaning in salsa-mad Cali.",
          related: ["el básico", "el paso", "la vuelta", "el conteo"],
          example: {
            target: "Empezamos con el paso básico.",
            translation: "We start with the basic step."
          }
        },
        {
          term: "de ahí",
          explanation:
            "“From there / and then.” Marks the next stage that follows on from the one just mentioned.",
          literal: "from there",
          useWhen:
            "Sequencing steps: first this, and de ahí that. Very common as a spoken connector.",
          avoidWhen:
            "Pointing at a literal place — that is “de ahí” too, but context, not the phrase, tells them apart.",
          register: "friendly informal",
          region: "Universal Spanish; ubiquitous in Colombian speech.",
          related: ["luego", "después", "de una vez", "y ya"],
          example: {
            target: "Empezamos con el básico y de ahí arrancamos.",
            translation: "We start with the basic and go on from there."
          }
        }
      ],
      note:
        "The one habit to build is empezar a + infinitive for “start doing”: empiezo a entender, empezó a llover. Keep the “a” — it is not optional. Remember the stem change (empiezo/empieza but empezamos/empezar) and the spelling shift in empecé and no empieces, where z turns to c before e. And when you want to sound Colombian rather than textbook, reach for arrancar: “¿arrancamos?” is how the country says “shall we get going?”.",
      culture: [
        {
          label: "Cali begins with the basic step",
          body:
            "In Cali, salsa is less a hobby you take up than a birthright you eventually admit to. Classes fill with locals who grew up hearing it and foreigners terrified of embarrassing themselves. Every teacher starts the same way — el paso básico, the six-count basic — because everything else hangs off it. Being a beginner is no shame here; what matters is that empiezas, that you actually step onto the floor and try."
        },
        {
          label: "Arrancar: the sound of getting going",
          body:
            "Colombians borrow the language of engines for almost any beginning. “Arrancamos” — literally the car pulling away — is how a group signals it is time to move, whether that is a dance, a road trip or a workday. It carries a push of energy that empezar lacks. When a paisa or a caleño claps once and says “¡bueno, arrancamos!”, they are not starting a motor; they are rallying everyone to begin together, right now."
        },
        {
          label: "Empezar versus comenzar",
          body:
            "The two verbs mean the same thing, and Colombians use both, but they live in slightly different rooms. Empezar is the spoken default — you empiezas your class, your meal, your day. Comenzar leans formal: it is the verb of programs, ceremonies and the evening news, “el evento comienza a las ocho”. Neither is wrong in the other's place, but reaching for comenzar in casual chat can make you sound as if you were reading an announcement aloud."
        },
        {
          label: "The counting is in the body",
          body:
            "Salsa caleña is famous for its lightning footwork and its counts of eight, and teachers drill the numbers aloud until the body takes over. A beginner clings to “uno-dos-tres”; a dancer stops counting and simply feels it. That shift — from empezar a contar to empezar a sentir, from starting to count to starting to feel — is the whole journey of a first class, and Marcela's “no empieces antes” is about trusting the count before yourself."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “empieza sonar” without the “a”",
          whyItFails:
            "Empezar needs “a” before a following infinitive: empieza a sonar, not empieza sonar. English “starts playing” has no linking word, so learners drop the “a”, and the sentence lands sounding unfinished to a Colombian ear.",
          sayInstead: "Empieza a sonar la música."
        },
        {
          mistake: "Writing “empezé” for “I started”",
          whyItFails:
            "The preterite of empezar is empecé, with a c. Spanish will not write z before e or i, so the z of the stem shifts to c. “Empezé” is a spelling error a native notices instantly.",
          sayInstead: "Ya empecé a sentir el ritmo."
        },
        {
          mistake: "Saying “yo empezo” with no stem change",
          whyItFails:
            "When the stress lands on the stem, e becomes ie: yo empiezo, ella empieza. Flat “empezo/empeza” ignores the change and marks you as a beginner. The stem only stays empez- when the stress moves off it, as in empezamos.",
          sayInstead: "Yo empiezo, ella empieza, nosotros empezamos."
        },
        {
          mistake: "Reaching for comenzar to sound casual",
          whyItFails:
            "Comenzar is the formal twin; dropping it into relaxed chat can sound like you are narrating a ceremony. It is not wrong, just overdressed for a dance class, where empezar or arrancar fit the mood far better.",
          sayInstead: "¿Empezamos? / ¿Arrancamos?"
        }
      ],
      variations: [
        {
          form: "¿Empezamos?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The simplest “shall we start?”, warm and neutral among equals."
        },
        {
          form: "¿Arrancamos?",
          register: "friendly informal",
          region: "General Colombian, esp. Andean interior and Valle",
          whenToUse: "The same invitation with more push and energy — very Colombian."
        },
        {
          form: "¿Comenzamos?",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "A more formal “shall we begin?”, fit for a meeting or ceremony."
        },
        {
          form: "¿Damos inicio?",
          register: "polite formal",
          region: "Universal Spanish; announcements and events",
          whenToUse: "A fixed, ceremonial way to declare something officially begun."
        },
        {
          form: "¿Le metemos?",
          register: "friendly informal",
          region: "Antioquia and the coffee region",
          whenToUse: "A very colloquial “shall we get stuck in?”, common among paisas."
        }
      ],
      prompt: "Marcela says “Empezamos con el paso básico y de ahí arrancamos.” What does “arrancamos” add that “empezamos” doesn't?",
      choices: [
        "Nothing at all in meaning — “arrancamos” is simply the formal, written-Spanish version of “empezamos” that a teacher uses in class.",
        "It moves the start time later, telling Alex that the real dancing will only get going quite a while after the basic step is done.",
        "A burst of momentum — borrowed from starting an engine, it rallies everyone to get going with energy, warmer than a plain “empezamos”."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Which sentence correctly uses “empezar a + infinitive”?",
          choices: [
            "Empecé a entender la salsa después de la primera clase con Marcela en la academia.",
            "Empecé entender la salsa después de la primera clase con Marcela en la academia.",
            "Empezé a entender la salsa después de la primera clase con Marcela en la academia."
          ],
          answer: 0,
          tests: "empezar a + infinitive and the spelling empecé"
        },
        {
          prompt: "Marcela says “no empieces antes.” Why “empieces” and not “empiezas”?",
          choices: [
            "Because after “no” Spanish always switches the verb into the simple future tense, so empezar becomes empezarás here.",
            "Because a negative command takes the present subjunctive, which for empezar is empieces — note the z turning to c before the e.",
            "Because “empieces” is the plural form and Marcela is really addressing the whole class of dancers at once, not Alex alone."
          ],
          answer: 1,
          tests: "negative tú command uses the subjunctive (empieces)"
        },
        {
          prompt: "You want to say, casually, “shall we get going?” the Colombian way. Which fits best?",
          choices: [
            "¿Damos inicio al evento con las palabras del maestro de ceremonias primero?",
            "¿Comenzamos ya la reunión formal de trabajo de la mañana, señores míos?",
            "¿Arrancamos, entonces, con el paso básico y de una empezamos a bailar?"
          ],
          answer: 2,
          tests: "arrancar as the colloquial Colombian “let's get going”"
        },
        {
          prompt: "What does Alex mean by “empiezo hoy de cero”?",
          choices: [
            "That he is a total beginner starting with no previous salsa experience whatsoever, learning it all from scratch today.",
            "That he has danced a fair bit before but wants to go back and carefully polish the very basics again from the start.",
            "That he can only make it to today's very first class and will unfortunately have to miss every one of the later sessions."
          ],
          answer: 0,
          tests: "de cero as “from scratch / no experience”"
        }
      ]
    },
    en: {
      title: "Empezar la clase de baile en Houston",
      situation:
        "Alejandra llega a su primera clase de baile en una academia de Houston. La profesora, Kayla, la recibe, le pregunta si ha bailado antes y arrancan con los pasos básicos — todo en inglés, un idioma que empieza las cosas con “start”, “begin” y “get going”, y casi nunca con algo que se parezca a “empezar”.",
      setting: {
        who: "Kayla lleva años dando clases de baile en Houston y reconoce a un principiante nervioso al instante. Alejandra es caleña, baila salsa desde niña, pero nunca ha tomado una clase en inglés y le da pena no entender las instrucciones.",
        what: "Una primera clase de baile: la profesora tantea el nivel, acuerdan por dónde empezar y arrancan con lo básico.",
        when: "Un martes por la noche, con el salón de espejos entrando en calor mientras suena la música.",
        where: "Houston, una academia de baile en el centro, un martes de invierno.",
        why: "Porque lo más difícil de una clase en otro idioma no es bailar sino entender cuándo y con qué se empieza, y de cómo Kayla la vaya guiando depende que Alejandra se anime a volver."
      },
      address: {
        form: "mixed",
        who: "Kayla y Alejandra se tratan con el mismo “you” y se llaman por el nombre de pila desde el principio.",
        why: "El inglés no distingue tú de usted, así que la cercanía no está en el pronombre sino en el tono: el nombre de pila, un “let's” que incluye a las dos, un “don't worry” que tranquiliza. En una clase de baile joven, ese tono cálido es el estándar.",
        ifYouSwitch:
          "No hay un usted al que “subir” para marcar distancia; si Alejandra quisiera sonar más formal tendría que cambiar las palabras — “would it be all right if…?” en vez de un simple “can I…?” — porque el respeto en inglés se construye con el léxico, no con el pronombre."
      },
      dialogue: [
        {
          speaker: "Kayla",
          target: "Ready to get started? Have you danced before?",
          translation: "¿Lista para empezar? ¿Has bailado antes?",
          pronunciation: "RE-di tu guet STAR-ted? jav yu danst bi-FOR",
          literal: "¿Lista para conseguir empezado? ¿Has tú bailado antes?",
          why: "“Get started” es la forma más natural y cálida de decir “empezar”, más coloquial que “begin”. Ojo: el inglés arma “get” + participio donde el español usa un solo verbo. Traducir “empezar” siempre por “begin” suena correcto pero un poco rígido."
        },
        {
          speaker: "Alejandra",
          target: "In Colombia, yes — but I've never started a class in English.",
          translation: "En Colombia sí, pero nunca he empezado una clase en inglés.",
          pronunciation: "in ko-LOM-bia, yes — bat aiv NE-ver STAR-ted a klas in IN-glish",
          literal: "En Colombia, sí — pero yo-he nunca empezado una clase en inglés.",
          why: "“I've never started” es el presente perfecto (“nunca he empezado”), que en inglés sirve para experiencias de la vida sin decir cuándo. El caleño diría lo mismo con “he empezado”; la estructura coincide, pero en inglés el auxiliar “have” es obligatorio y no se puede omitir."
        },
        {
          speaker: "Kayla",
          target: "No worries. We'll start with the basics and go from there.",
          translation: "Tranquila. Empezamos con lo básico y de ahí seguimos.",
          pronunciation: "no UO-ris. uil start uid da BEI-siks and gou from der",
          literal: "No preocupaciones. Nosotros-empezaremos con los básicos y ir desde ahí.",
          why: "“We'll start” usa “will” para un plan que se decide en el momento; el español lo resuelve con presente (“empezamos”). “Go from there” es el equivalente natural de “de ahí seguimos”: literalmente “ir desde ahí”, una frase hecha que no conviene traducir palabra por palabra."
        },
        {
          speaker: "Alejandra",
          target: "And when does the music start playing?",
          translation: "¿Y cuándo empieza a sonar la música?",
          pronunciation: "and uen das da MIU-sik start PLEI-ing",
          literal: "¿Y cuándo hace la música empezar tocando?",
          why: "Aquí “start” va seguido de “playing”, un gerundio (“empezar a sonar”). Tras “start” el inglés admite gerundio (“start playing”) o infinitivo (“start to play”), casi sin diferencia; el español, en cambio, siempre exige “empezar a + infinitivo”."
        },
        {
          speaker: "Kayla",
          target: "Right now. It begins on the eight-count — don't start before that.",
          translation: "Ya mismo. Comienza en el conteo de ocho; no empieces antes.",
          pronunciation: "rait nau. it bi-GINS on di EIT-kaunt — dont start bi-FOR dat",
          literal: "Justo ahora. Ello comienza en el ocho-conteo — no empieces antes de eso.",
          why: "“It begins” es un pelín más formal que “it starts”, como “comienza” frente a “empieza”. Fíjate en el sujeto “it”: el inglés obliga a poner un sujeto aunque esté vacío, mientras el español deja caer el “ello” y arranca directo con el verbo."
        },
        {
          speaker: "Alejandra",
          target: "Got it — I'm starting to feel the rhythm.",
          translation: "Listo, ya empiezo a sentir el ritmo.",
          pronunciation: "got it — aim START-ing tu fil da RI-dem",
          literal: "Conseguido — yo-estoy empezando a sentir el ritmo.",
          why: "“I'm starting to feel” usa el presente continuo para algo que ocurre justo ahora, con “start to + infinitivo”. El español prefiere el presente simple (“empiezo a sentir”). Aquí el inglés sí usa el infinitivo con “to”, no el gerundio, porque suena más natural con verbos de percepción."
        }
      ],
      vocabulary: [
        {
          term: "to start",
          explanation:
            "El verbo más común para “empezar”: neutro, cotidiano y válido en casi cualquier contexto.",
          literal: "empezar / comenzar",
          useWhen:
            "En casi todo: “the class starts at seven”, “let's start”, “I started yesterday”.",
          avoidWhen:
            "Cuando quieres un tono más solemne o escrito; ahí “begin” suena un punto más elegante.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["begin", "get started", "kick off", "start up"],
          example: {
            target: "The class starts at seven.",
            translation: "La clase empieza a las siete."
          }
        },
        {
          term: "to get started",
          explanation:
            "“Ponerse en marcha”, empezar con un empujoncito de ánimo; más cálido y coloquial que “start” a secas.",
          literal: "conseguir empezado",
          useWhen:
            "Al invitar a un grupo a arrancar: “let's get started”, “ready to get started?”.",
          avoidWhen:
            "En textos formales; es una expresión hablada, como el “arrancamos” colombiano.",
          register: "amistoso informal",
          region: "Inglés universal; muy frecuente en el habla cotidiana.",
          related: ["let's get started", "get going", "get moving", "kick off"],
          example: {
            target: "Ready to get started?",
            translation: "¿Listos para empezar?"
          }
        },
        {
          term: "to begin",
          explanation:
            "Sinónimo de “start” con un matiz más formal o literario, como “comenzar” frente a “empezar”.",
          literal: "comenzar",
          useWhen:
            "En avisos, ceremonias y lenguaje escrito: “the show begins at eight”.",
          avoidWhen:
            "En una charla muy relajada, donde “start” fluye mejor y “begin” puede sonar acartonado.",
          register: "cortés neutro",
          region: "Inglés universal.",
          related: ["start", "commence", "begin with", "the beginning"],
          example: {
            target: "The show begins at eight.",
            translation: "La función comienza a las ocho."
          }
        },
        {
          term: "to start + -ing / to start to",
          explanation:
            "La estructura para “empezar a hacer algo”: “start” admite gerundio (“start dancing”) o infinitivo (“start to dance”), casi sin diferencia.",
          literal: "empezar haciendo / empezar a hacer",
          useWhen:
            "Cuando una acción se pone en marcha: “it started raining”, “I'm starting to understand”.",
          avoidWhen:
            "No hay caso prohibido, pero con verbos de percepción (feel, understand) el infinitivo suena más natural que el gerundio.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["start raining", "start to understand", "begin to", "get to"],
          example: {
            target: "The music starts playing.",
            translation: "La música empieza a sonar."
          }
        },
        {
          term: "to kick off",
          explanation:
            "Verbo frasal coloquial para “dar el arranque” a un evento o actividad, con energía — el pariente inglés de “arrancar”.",
          literal: "patear hacia fuera",
          useWhen:
            "Al hablar de que algo arranca con ganas: “the festival kicks off tonight”.",
          avoidWhen:
            "En registros muy formales o escritos serios; es de tono desenfadado.",
          register: "amistoso informal",
          region: "Inglés universal; muy común en Norteamérica y en el deporte.",
          related: ["get going", "get underway", "start off", "kick things off"],
          example: {
            target: "The party kicks off at nine.",
            translation: "La fiesta arranca a las nueve."
          }
        },
        {
          term: "from scratch",
          explanation:
            "“Desde cero”, sin nada previo ni experiencia — el equivalente exacto del “de cero” colombiano.",
          literal: "desde el rasguño",
          useWhen:
            "Al decir que empiezas sin base: “I'm learning from scratch”.",
          avoidWhen:
            "Cuando en realidad ya tienes algo hecho o sabido; “from scratch” reclama partir de la nada.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["from zero", "from the ground up", "starting out", "brand new"],
          example: {
            target: "I'm learning salsa from scratch.",
            translation: "Estoy aprendiendo salsa de cero."
          }
        },
        {
          term: "go from there",
          explanation:
            "“Y de ahí seguimos”: continuar a partir del punto que se acaba de mencionar, sin un plan cerrado.",
          literal: "ir desde ahí",
          useWhen:
            "Al encadenar pasos: “let's start with this and go from there”.",
          avoidWhen:
            "Si señalas un lugar físico; aquí es secuencia en el tiempo, no ubicación.",
          register: "amistoso informal",
          region: "Inglés universal; muy usado en el habla.",
          related: ["take it from there", "and then", "from there on", "go on"],
          example: {
            target: "We'll start with the basics and go from there.",
            translation: "Empezamos con lo básico y de ahí seguimos."
          }
        }
      ],
      note:
        "La trampa está en creer que “empezar” es siempre “begin”. En el inglés hablado lo natural es “start” y, con más energía, “get started” o “kick off” — el “arrancamos” de allá. Tras “start” puedes usar gerundio o infinitivo (“start dancing / start to dance”), a diferencia del español, que exige “empezar a + infinitivo”. Y recuerda el sujeto obligatorio: “it starts”, nunca un “empieza” suelto sin sujeto.",
      culture: [
        {
          label: "En inglés casi todo “empieza” con start",
          body:
            "El hispanohablante aprende “begin” en el colegio y lo usa para todo, pero en el inglés cotidiano el verbo rey es “start”. La clase “starts”, el carro “starts”, la película “starts”. “Begin” existe y suena bien, solo que un poco más formal, como “comenzar” en español. Si Alejandra quiere sonar natural en la academia de Houston, le conviene soltar “start” y guardar “begin” para lo escrito o lo ceremonioso."
        },
        {
          label: "Get started, kick off: el arranque con energía",
          body:
            "Así como Colombia “arranca”, el inglés tiene sus propias fórmulas con empuje: “let's get started”, “let's get going”, “the festival kicks off”. Son expresiones de tono relajado que suman ánimo al simple “start”. En una clase, una reunión o una fiesta, un “okay, let's get started!” cumple la misma función social que el “bueno, ¡arrancamos!” caleño: reunir al grupo y marcar que ya es hora de empezar todos juntos."
        },
        {
          label: "El sujeto que no se puede callar",
          body:
            "El español deja caer el sujeto: “empieza a las ocho”, y se entiende. El inglés, no: hay que decir “it starts at eight”, con ese “it” que no señala nada pero es obligatorio. Es uno de los errores más persistentes del hispanohablante, que arranca la frase directo con el verbo — “starts at eight” — y le suena incompleta al oído angloparlante. Meter siempre un sujeto, aunque esté vacío, es media batalla ganada."
        },
        {
          label: "Bailar sí, pero entender la clase",
          body:
            "Para una caleña, la salsa no es el reto; el reto es seguir la clase en inglés. Muchos migrantes descubren que dominan de sobra la actividad pero se pierden en las instrucciones: los conteos, las preposiciones, el “from there”. Anima saber que el cuerpo ya sabe y que solo falta ponerle palabras nuevas. Empezar “de cero” en el idioma no borra lo que uno trae; apenas le cambia el idioma al ritmo que ya lleva dentro."
        }
      ],
      pitfalls: [
        {
          mistake: "“The class start at seven.”",
          whyItFails:
            "En tercera persona del singular el inglés añade -s al verbo: “the class starts”. El hispanohablante lo omite porque el español no marca así la persona, y “the class start” le suena a niño pequeño al oído nativo.",
          sayInstead: "The class starts at seven."
        },
        {
          mistake: "“The music starts to playing.”",
          whyItFails:
            "Después de “start” va gerundio (“playing”) o infinitivo (“to play”), pero nunca “to playing”, que mezcla las dos formas. Es un cruce típico de quien duda entre “empezar a sonar” y su traducción.",
          sayInstead: "The music starts playing. / The music starts to play."
        },
        {
          mistake: "“I started the class since two months.”",
          whyItFails:
            "Para una duración que sigue vigente, el inglés usa “for” con el presente perfecto: “I've been taking the class for two months”. “Since” marca un punto de inicio (“since March”), no una cantidad de tiempo.",
          sayInstead: "I've been taking the class for two months."
        },
        {
          mistake: "“We begin, no?”",
          whyItFails:
            "El “¿no?” del español no se traduce como un “no?” pegado al final. El inglés forma la coletilla con un auxiliar: “shall we?”, “right?”. “We begin, no?” se entiende, pero delata calco y suena abrupto.",
          sayInstead: "Let's get started, shall we?"
        }
      ],
      variations: [
        {
          form: "Let's start.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "El “empecemos” más simple y seguro, válido en cualquier parte."
        },
        {
          form: "Let's get started.",
          register: "amistoso informal",
          region: "Inglés universal; muy común en Norteamérica",
          whenToUse: "La misma invitación con más calidez y ánimo, como “arrancamos”."
        },
        {
          form: "Shall we begin?",
          register: "cortés formal",
          region: "Inglés británico sobre todo; formal en todas partes",
          whenToUse: "Un “¿comenzamos?” cortés, para una reunión o un acto."
        },
        {
          form: "Let's kick things off.",
          register: "amistoso informal",
          region: "Inglés universal; frecuente en eventos y deportes",
          whenToUse: "Para arrancar algo con energía y un toque desenfadado."
        },
        {
          form: "Ready when you are.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Ceder el arranque al otro: “cuando quieras empezamos”."
        }
      ],
      prompt: "Kayla dice “We'll start with the basics and go from there.” ¿Qué significa “go from there”?",
      choices: [
        "Que hay que salir del salón de espejos y buscar otro sitio más grande para poder seguir con la clase de baile.",
        "Que la música va a sonar desde el fondo del salón, y por eso conviene ubicarse allá para escuchar mejor el conteo.",
        "Que, tras empezar por lo básico, seguirán avanzando a partir de ahí — “de ahí seguimos”, sin un plan cerrado de antemano."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál oración usa bien el inglés para “empezó a llover”?",
          choices: [
            "It started raining while we were walking to the dance academy downtown.",
            "It started to raining while we were walking to the dance academy downtown.",
            "It start raining while we were walking to the dance academy downtown."
          ],
          answer: 0,
          tests: "start + gerundio y la tercera persona con -ed/-s"
        },
        {
          prompt: "Alejandra quiere invitar al grupo a arrancar de forma natural y cálida. ¿Qué dice?",
          choices: [
            "We shall now formally commence this evening's dance session, ladies and gentlemen.",
            "Okay everyone, let's get started — grab a spot and follow my count.",
            "The dance session is going to be initiated by me right now, please, everyone."
          ],
          answer: 1,
          tests: "get started como arranque cálido, no “commence”"
        },
        {
          prompt: "¿Por qué el inglés dice “it starts at eight” y no solo “starts at eight”?",
          choices: [
            "Porque “it” es el nombre propio de la película o la clase, y en inglés siempre hay que decir el nombre completo.",
            "Porque “starts at eight” es en realidad una pregunta, y el inglés exige invertir el orden para que se entienda así.",
            "Porque el inglés obliga a poner un sujeto en la oración, aunque sea un “it” vacío que no señala nada concreto."
          ],
          answer: 2,
          tests: "el sujeto obligatorio en inglés (dummy it)"
        },
        {
          prompt: "¿Qué quiere decir Alejandra con “I'm learning from scratch”?",
          choices: [
            "Que está aprendiendo desde cero, sin ninguna base previa, empezando por lo más elemental del baile.",
            "Que aprende rascando los pasos poco a poco, repitiéndolos con cuidado hasta que por fin le salgan bien.",
            "Que aprende sobre la marcha, mientras baila, sin haber tomado antes ninguna clase formal con profesor."
          ],
          answer: 0,
          tests: "from scratch = “de cero”, sin experiencia previa"
        }
      ]
    }
  },
  {
    id: "finishing-up-at-the-barber-in-medellin",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    verb: "terminar",
    review: "pending",
    es: {
      title: "Finishing up at the barbershop",
      situation:
        "Alex is in a Medellín barbershop finishing up his haircut. While the barber, Andrés, finishes shaping his beard, the usual paisa chatter drops in: whether he is almost done, whether his brother broke up with his girlfriend, whether Alex is coming back next week.",
      setting: {
        who: "Andrés cuts hair in a small barbershop in Envigado and keeps up a steady, funny patter while he works. Alex is a regular now, comfortable enough to joke back, still catching the fast paisa slang.",
        what: "The last few minutes of a haircut: finishing the beard line-up, settling the bill, and planning the next visit.",
        when: "A Friday evening, the shop busy with men getting sharp for the weekend.",
        where: "Medellín, a barbershop in Envigado, clippers buzzing and reggaetón low on the speaker.",
        why: "Because the end of a haircut is pure small talk, and following the banter — who has finished what, who split up with whom — is where Alex's paisa Spanish really gets tested."
      },
      address: {
        form: "vos",
        who: "Andrés and Alex vosean each other freely, the default between two young paisas who know each other.",
        why: "In Medellín, vos is the warm everyday pronoun among friends and equals: “¿vos ya terminaste?”, “¿querés?”. Using it back marks Alex as someone at home in the city, not a tourist clinging to tú.",
        ifYouSwitch:
          "Switching to usted with Andrés mid-joke would put a sudden coolness between them, as if Alex had taken offense. Among paisa friends vos is the sound of trust; retreating to usted is what you do when you are annoyed or being pointedly formal."
      },
      dialogue: [
        {
          speaker: "Andrés",
          target: "Ya casi termino, hermano. ¿Te perfilo la barba?",
          translation: "Almost done, man. Shall I line up your beard?",
          pronunciation: "ya KA-see ter-MEE-noh, er-MA-noh. te per-FEE-loh la BAR-ba",
          literal: "Already almost I-finish, brother. To-you I-profile the beard?",
          why: "“Termino” here is a present used for something wrapping up right now — Colombians lean on the present where English wants “I'm almost done”. “Hermano” (often “llave” or “parce” in Medellín) is standard address between men, no blood ties implied."
        },
        {
          speaker: "Alex",
          target: "De una. ¿Vos a qué hora terminás hoy?",
          translation: "Go for it. What time do you finish today?",
          pronunciation: "de OO-na. vos a ke OH-ra ter-mee-NAS oy",
          literal: "Of one. You at what hour finish today?",
          why: "“Terminás” is the vos form — stress on the last syllable, no stem change, where tú would give “terminas”. This voseo ending (-ás) is the everyday sound of Medellín. “De una” is the paisa “go ahead / right away”."
        },
        {
          speaker: "Andrés",
          target: "Termino de cerrar a las ocho y salgo a acabar un trabajito.",
          translation: "I finish closing up at eight and head out to wrap up a little job.",
          pronunciation: "ter-MEE-noh de se-RRAR a las OH-choh ee SAL-goh a a-ka-BAR oon tra-ba-HEE-toh",
          literal: "I-finish of to-close at the eight and I-leave to to-finish a little-job.",
          why: "“Terminar de + infinitivo” means to finish doing something: termino de cerrar. Note “acabar” right after — a near-synonym of terminar, just as common in speech. Colombians swap the two freely; acabar can feel a touch more colloquial."
        },
        {
          speaker: "Alex",
          target: "Uy, ¿y sí es cierto que tu hermano terminó con la novia?",
          translation: "Oof, and is it true your brother broke up with his girlfriend?",
          pronunciation: "ooy, ee see es SYER-toh ke too er-MA-noh ter-mee-NOH kon la NO-vya",
          literal: "Oof, and yes it-is true that your brother finished with the girlfriend?",
          why: "“Terminar con alguien” is the fixed phrase for breaking up with a partner — the same verb, a whole different world. The preterite “terminó” marks it as a done deal. “Uy” is the all-purpose Colombian interjection for surprise or sympathy."
        },
        {
          speaker: "Andrés",
          target: "Sí, ya terminaron. Pero no acabó mal la cosa, quedaron bien.",
          translation: "Yeah, they're through. But it didn't end badly, they're on good terms.",
          pronunciation: "see, ya ter-mee-NA-ron. PEH-roh no a-ka-BOH mal la KO-sa, ke-DA-ron byen",
          literal: "Yes, already they-finished. But not it-ended badly the thing, they-stayed well.",
          why: "“Terminaron” (they broke up) versus “acabó mal” (ended badly) shows both verbs living side by side. “Quedar bien” — to part on good terms — is another everyday idiom; Colombians care a lot about ending things without hard feelings."
        },
        {
          speaker: "Alex",
          target: "Bueno, apenas termines me decís y volvemos la otra semana.",
          translation: "Alright, as soon as you finish let me know and we'll come back next week.",
          pronunciation: "BWEH-noh, a-PEH-nas ter-MEE-nes me de-SEES ee vol-VEH-mos la OH-tra se-MA-na",
          literal: "Good, as-soon-as you-finish to-me you-say and we-return the other week.",
          why: "“Apenas termines” takes the subjunctive (“termines”) because the finishing is still to come — a future, not-yet-real moment. “Decís” is again the vos form of decir. This future-time subjunctive after apenas, cuando or en cuanto trips up almost every learner."
        }
      ],
      vocabulary: [
        {
          term: "terminar",
          explanation:
            "The core verb for finishing or ending — an action, a task, an event or a relationship.",
          literal: "to finish / to end",
          useWhen:
            "Any ending: termino, terminé, terminamos, and terminar de + infinitive for finishing doing something.",
          avoidWhen:
            "Nothing really; it is the neutral default. In very casual speech acabar competes with it head to head.",
          register: "neutral",
          region: "Universal Spanish; the base verb everywhere.",
          related: ["terminar de", "acabar", "terminar con", "rematar"],
          example: {
            target: "Ya casi termino.",
            translation: "I'm almost done."
          }
        },
        {
          term: "terminar de + infinitivo",
          explanation:
            "To finish doing something — terminar followed by “de” and a verb in the infinitive.",
          literal: "to finish + verb-ing",
          useWhen:
            "When one action wraps up: termino de cerrar, apenas termine de comer.",
          avoidWhen:
            "Careful: “acabar de + infinitive” looks similar but means to have JUST done something — a different meaning entirely.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["acabar de", "terminar con", "dejar de", "parar de"],
          example: {
            target: "Termino de cerrar a las ocho.",
            translation: "I finish closing up at eight."
          }
        },
        {
          term: "acabar",
          explanation:
            "The everyday rival of terminar — to finish or to run out. In most endings the two are interchangeable.",
          literal: "to finish / to run out",
          useWhen:
            "Swapping in for terminar in speech: ya acabé, se acabó, acabar un trabajo.",
          avoidWhen:
            "In “acabar de + infinitive”, where it flips to mean “to have just…” — acabo de llegar is “I've just arrived”, not “I finish arriving”.",
          register: "friendly informal",
          region: "Universal Spanish; extremely common in Colombia.",
          related: ["terminar", "acabar de", "se acabó", "rematar"],
          example: {
            target: "Salgo a acabar un trabajito.",
            translation: "I'm off to wrap up a little job."
          }
        },
        {
          term: "terminar con alguien",
          explanation:
            "To break up with a romantic partner — the same finish verb, aimed at a relationship.",
          literal: "to finish with someone",
          useWhen:
            "Talking about the end of a couple: terminó con la novia, terminaron el año pasado.",
          avoidWhen:
            "Finishing a task; “terminar con” a thing is fine, but “con alguien” about a person is heard as a break-up.",
          register: "friendly informal",
          region: "Universal Spanish; the standard everyday phrase in Colombia.",
          related: ["cortar con", "dejar a alguien", "acabar con", "separarse"],
          example: {
            target: "Tu hermano terminó con la novia.",
            translation: "Your brother broke up with his girlfriend."
          }
        },
        {
          term: "quedar bien",
          explanation:
            "To end up on good terms, or to come across well — to leave a good impression when something closes.",
          literal: "to stay well",
          useWhen:
            "Parting without hard feelings, or doing right by someone: quedaron bien, quiero quedar bien con ella.",
          avoidWhen:
            "Talking about clothes fitting — that is also “quedar bien”, but about a garment, so context sorts them out.",
          register: "friendly informal",
          region: "Universal Spanish; a strong social value in Colombia.",
          related: ["quedar mal", "llevarse bien", "terminar bien", "en buenos términos"],
          example: {
            target: "No acabó mal; quedaron bien.",
            translation: "It didn't end badly; they're on good terms."
          }
        },
        {
          term: "rematar",
          explanation:
            "To finish something off — the final touch that completes a job, or the last stop on a night out.",
          literal: "to finish off",
          useWhen:
            "The closing flourish: “rematar el corte”, “rematamos en otro bar”.",
          avoidWhen:
            "A neutral, plain ending; rematar implies a deliberate finishing touch, not just stopping.",
          register: "friendly informal",
          region: "Universal Spanish; lively in Colombian nightlife and trades.",
          related: ["terminar", "dar el remate", "cerrar con broche de oro", "el remate"],
          example: {
            target: "Me remata la barba y listo.",
            translation: "He finishes off my beard and that's it."
          }
        },
        {
          term: "un trabajito",
          explanation:
            "A little job — the diminutive of trabajo, softening a task into something small and manageable.",
          literal: "a little job",
          useWhen:
            "Playing down a piece of work, paid or not: “un trabajito por ahí”, “hago unos trabajitos”.",
          avoidWhen:
            "A serious, formal contract; the -ito makes it sound casual and minor, which can undersell real work.",
          register: "friendly informal",
          region: "Universal Spanish; in Antioquia you also hear the -ico form, “trabajico”.",
          related: ["trabajo", "trabajico", "una vueltica", "un cachito"],
          example: {
            target: "Salgo a acabar un trabajito.",
            translation: "I'm off to finish a little job."
          }
        }
      ],
      note:
        "Two traps live here. First, terminar de + infinitive (“finish doing”) versus acabar de + infinitive (“to have just done”): termino de comer is “I finish eating”, acabo de comer is “I've just eaten”. Second, terminar con alguien means to break up, not to finish a task with someone's help. Beyond that, lean on the present for things wrapping up now (“ya casi termino”), and remember that after apenas or cuando a still-future finish takes the subjunctive: apenas termines.",
      culture: [
        {
          label: "The barbershop is a paisa parliament",
          body:
            "A Medellín barbershop is less a service than a social club. The haircut is half the point; the other half is the talk — soccer, women, work, the neighborhood's news. A good barber runs the conversation as skillfully as the clippers, and a regular is expected to play along. Alex joking about the brother's break-up is not nosy; it is exactly the kind of easy banter that marks him as one of the shop's own."
        },
        {
          label: "Vos is the sound of trust",
          body:
            "Among paisas, vos is not slang to look down on; it is the warm, default pronoun of friendship. “¿Vos qué?”, “¿terminás?”, “¿querés?” — the -ás and -és endings ring through every barbershop and café in Medellín. Retreating to usted with a friend can signal you have suddenly gone cold. Foreigners who pick up vos, rather than clinging to a schoolbook tú, find doors and conversations opening much faster."
        },
        {
          label: "Terminar and the art of ending well",
          body:
            "Colombians place real weight on how things end — quedar bien, parting on good terms, matters even in a break-up. Andrés is quick to add that his brother “no acabó mal” and “quedaron bien”: the split is softened by the reassurance that nobody behaved badly. To end a relationship, a job or a friendship with hard feelings is “quedar mal”, a small social failure. The verb of finishing carries a whole ethic of finishing gracefully."
        },
        {
          label: "Acabar, terminar, rematar",
          body:
            "Spanish offers a little family of finishing verbs and Colombians use all three. Terminar is the neutral default; acabar is its everyday twin, a shade more colloquial; rematar is the deliberate finishing touch — the line-up on a beard, the last bar of the night. Hearing which one a paisa reaches for tells you something about the ending: plain, casual, or a flourish meant to round things off in style."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “acabo de cerrar” to mean “I finish closing”",
          whyItFails:
            "“Acabar de + infinitive” means to have JUST done something, so “acabo de cerrar” is “I've just closed”, not “I finish closing”. For the finishing sense you need terminar de: termino de cerrar. Mixing them reverses your timeline entirely.",
          sayInstead: "Termino de cerrar a las ocho."
        },
        {
          mistake: "Saying “terminé con el trabajo” to thank a helper",
          whyItFails:
            "Aimed at a person, “terminar con” is heard as a break-up, and even about a task it drags in that romantic sense. To say you finished a job, just use “terminé el trabajo”, with no “con”.",
          sayInstead: "Ya terminé el trabajo."
        },
        {
          mistake: "Using “terminas” to a paisa friend",
          whyItFails:
            "It is not wrong, but among Medellín friends the natural form is vos: “¿vos terminás?”. Sticking to tú can sound bookish or oddly distant in a barbershop where everyone voseas. Matching the local pronoun is half of sounding at home.",
          sayInstead: "¿Vos a qué hora terminás?"
        },
        {
          mistake: "Saying “apenas terminas” for a future finish",
          whyItFails:
            "A finishing that has not happened yet takes the subjunctive after apenas: “apenas termines”. The indicative “terminas” describes a habit or a fact, not the still-to-come moment you mean, and the sentence lands in the wrong time.",
          sayInstead: "Apenas termines, me avisás."
        }
      ],
      variations: [
        {
          form: "Ya casi termino.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Telling someone you are nearly done, right now."
        },
        {
          form: "Ya casi acabo.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The same, swapping in acabar — a touch more colloquial."
        },
        {
          form: "Estoy rematando.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "You are on the very last finishing touches."
        },
        {
          form: "¿Vos ya terminaste?",
          register: "friendly informal",
          region: "Medellín and Antioquia (voseo)",
          whenToUse: "Asking a friend if they have finished, in paisa vos."
        },
        {
          form: "¿Ya quedó?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "“Is it done/ready?” — quedar for a finished result, very Colombian."
        }
      ],
      prompt: "Andrés says his brother “terminó con la novia.” What happened?",
      choices: [
        "He broke up with his girlfriend — “terminar con alguien” is the everyday Spanish phrase for ending a romantic relationship.",
        "He finished a job alongside his girlfriend, the two of them working together to wrap up a task they had started earlier.",
        "He ran out of time with his girlfriend waiting outside, and had to leave before the haircut and beard line-up were done."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence means “I've just eaten”, not “I finish eating”?",
          choices: [
            "Termino de comer y salgo enseguida para la barbería del centro con Andrés.",
            "Acabo de comer, así que ya no tengo nada de hambre en este momento, gracias.",
            "Apenas termine de comer, te aviso y arrancamos juntos para la barbería del centro."
          ],
          answer: 1,
          tests: "acabar de + infinitive = to have just done"
        },
        {
          prompt: "Andrés says “apenas termines me decís.” Why “termines”?",
          choices: [
            "Because vos always forces the verb ending to shift from -as into a special -es form when you address a paisa friend.",
            "Because the sentence is really a negative command, and negative commands in Spanish are built on the simple future tense.",
            "Because the finishing hasn't happened yet, and a still-future moment after “apenas” takes the present subjunctive, termines."
          ],
          answer: 2,
          tests: "subjunctive after apenas for a future event"
        },
        {
          prompt: "How do you say a break-up ended amicably?",
          choices: [
            "No acabó mal; quedaron bien y siguen hablándose sin ningún rencor entre los dos.",
            "Terminó con el trabajito y quedó muy bien rematado, sin ningún detalle pendiente ahí.",
            "Se acabó la cita muy temprano porque él tenía que salir a rematar otro trabajito."
          ],
          answer: 0,
          tests: "quedar bien = to end on good terms"
        },
        {
          prompt: "You want to ask a Medellín friend, in vos, what time he finishes. Which is right?",
          choices: [
            "¿Vos a qué horas terminas hoy en la barbería del barrio, parce?",
            "¿Vos a qué horas terminás hoy en la barbería del barrio, parce?",
            "¿Vos a qué horas termináis hoy en la barbería del barrio, parce?"
          ],
          answer: 1,
          tests: "the vos form terminás, not terminas or termináis"
        }
      ]
    },
    en: {
      title: "Terminar el corte en la peluquería",
      situation:
        "Alejandra está en una peluquería de Houston rematando su corte. Mientras la estilista, Chloe, termina de secarle el pelo, se arma la típica charla de peluquería en inglés: que si ya casi acaba, que si una amiga terminó con el novio, que si vuelve el otro mes.",
      setting: {
        who: "Chloe corta pelo en un salón del centro de Houston y conversa sin parar mientras trabaja. Alejandra ya es clienta habitual y se anima a bromear, aunque todavía se le escapa el slang rápido en inglés.",
        what: "Los últimos minutos de un corte: terminar el secado, pagar y agendar la próxima cita.",
        when: "Un viernes por la tarde, con el salón lleno de gente arreglándose para el fin de semana.",
        where: "Houston, una peluquería en el centro, secadores prendidos y música pop de fondo.",
        why: "Porque el final de un corte es pura charla, y seguir el hilo en inglés — quién terminó qué, quién cortó con quién — es donde de verdad se le prueba el idioma a Alejandra."
      },
      address: {
        form: "mixed",
        who: "Chloe y Alejandra se tratan con el mismo “you” y se llaman por el nombre de pila.",
        why: "El inglés tiene un solo “you”, así que la confianza no se marca con el pronombre sino con el tono: el nombre de pila, el chiste compartido, el “girl” cariñoso. En una peluquería, ese registro relajado y cómplice es lo normal.",
        ifYouSwitch:
          "No hay un usted al que recurrir para poner distancia; si Alejandra quisiera sonar más seria, cambiaría las palabras y no el pronombre — un “excuse me” en vez de un “hey”, un tono más medido — porque en inglés el respeto se juega en el léxico."
      },
      dialogue: [
        {
          speaker: "Chloe",
          target: "Almost done, girl. Want me to blow-dry it?",
          translation: "Ya casi termino, mija. ¿Quieres que te seque con el secador?",
          pronunciation: "OL-moust dan, guerl. uant mi tu BLOU-drai it",
          literal: "Casi hecho, chica. ¿Quieres a-mí secar-con-aire ello?",
          why: "“Almost done” es lo natural para “ya casi termino”; “done” (participio de “do”) funciona como “terminado”, y va con “be”, no con “finish”. “Girl” es un trato cariñoso entre mujeres, parecido al “mija” colombiano."
        },
        {
          speaker: "Alejandra",
          target: "Yeah, go ahead. What time do you finish today?",
          translation: "Sí, dale. ¿A qué hora terminas hoy?",
          pronunciation: "yea, gou a-JED. uat taim du yu FI-nish tu-DEI",
          literal: "Sí, ve adelante. ¿Qué hora haces tú terminar hoy?",
          why: "“Finish” es el verbo pleno para “terminar”. Fíjate en “do you finish”: el inglés arma la pregunta con el auxiliar “do”, algo que el español no tiene y por eso cuesta. “Go ahead” es el “dale / de una” para dar permiso."
        },
        {
          speaker: "Chloe",
          target: "I finish cleaning up at eight, then I go do a side job.",
          translation: "Termino de organizar a las ocho y salgo a hacer un trabajito extra.",
          pronunciation: "ai FI-nish KLI-ning ap at eit, den ai gou du a said dchob",
          literal: "Yo termino limpiando arriba a las ocho, luego yo voy hacer un lado trabajo.",
          why: "“Finish cleaning up” muestra la regla de oro: después de “finish” va gerundio (“cleaning”), nunca infinitivo. El español “terminar de + infinitivo” empuja a poner “to clean”, que aquí suena mal. “Side job” es el “trabajito extra”."
        },
        {
          speaker: "Alejandra",
          target: "Oh, is it true your friend broke up with her boyfriend?",
          translation: "Ay, ¿y es cierto que tu amiga terminó con el novio?",
          pronunciation: "ou, is it tru yor frend brouk ap uid jer BOI-frend",
          literal: "Oh, ¿es ello cierto tu amiga rompió arriba con su novio?",
          why: "“To break up with someone” es la frase hecha para “terminar con alguien”; el verbo “terminate” NO se usa para parejas. “Broke” es el pasado irregular de “break”. Traducir “terminó con” como “finished with” sonaría a terminar una tarea, no a una ruptura."
        },
        {
          speaker: "Chloe",
          target: "Yeah, they're done. But it didn't end badly — they're still friends.",
          translation: "Sí, ya terminaron. Pero no acabó mal; siguen siendo amigos.",
          pronunciation: "yea, deir dan. bat it DI-dent end BA-dli — deir stil frends",
          literal: "Sí, ellos-están hecho. Pero ello no terminó mal — ellos-están todavía amigos.",
          why: "“They're done” reutiliza ese “done” = terminado, ahora para una pareja. “It didn't end badly” usa “end” como verbo (“acabar mal”). Nota el auxiliar “didn't”: el inglés marca el pasado negativo con “did not” + infinitivo, y el verbo principal vuelve a su forma base."
        },
        {
          speaker: "Alejandra",
          target: "Okay, as soon as you finish, let me know and I'll come back next month.",
          translation: "Bueno, apenas termines me avisas y vuelvo el otro mes.",
          pronunciation: "o-KEI, as sun as yu FI-nish, let mi nou and ail kam bak nekst manz",
          literal: "Bueno, tan pronto como tú terminas, deja-me saber y yo-vendré atrás próximo mes.",
          why: "“As soon as you finish” es “apenas termines”. Clave: el inglés usa el presente (“you finish”) para un futuro tras “as soon as”, donde el español exige subjuntivo (“termines”). “Let me know” es el “me avisas / me decís”."
        }
      ],
      vocabulary: [
        {
          term: "to finish",
          explanation:
            "El verbo central para “terminar”: acabar una acción, una tarea o un evento.",
          literal: "terminar / acabar",
          useWhen:
            "En casi cualquier final: “I finished”, “are you finished?”, “finish + gerundio”.",
          avoidWhen:
            "Para “acabar de + infinitivo” (recién hacer algo), donde el inglés usa “just” + pasado, no “finish”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["be done", "end", "wrap up", "complete"],
          example: {
            target: "I'm almost finished.",
            translation: "Ya casi termino."
          }
        },
        {
          term: "to be done",
          explanation:
            "“Estar listo/terminado”: la forma más común y coloquial de decir que algo o alguien ya acabó.",
          literal: "estar hecho",
          useWhen:
            "Al anunciar que terminaste: “I'm done”, “almost done”, “are you done?”.",
          avoidWhen:
            "En un escrito muy formal; “be done” es hablado, aunque muy extendido.",
          register: "amistoso informal",
          region: "Inglés universal; dominante en Norteamérica.",
          related: ["be finished", "all done", "that's it", "wrapped up"],
          example: {
            target: "Almost done!",
            translation: "¡Ya casi!"
          }
        },
        {
          term: "to finish + -ing",
          explanation:
            "“Terminar de hacer algo”: tras “finish” va siempre gerundio, jamás infinitivo.",
          literal: "terminar haciendo",
          useWhen:
            "Cuando una acción se completa: “finish eating”, “finish cleaning up”.",
          avoidWhen:
            "Nunca pongas “to” después de “finish” (no “finish to eat”); ese es el error estrella del hispanohablante.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["finish eating", "finish up", "get through", "be done -ing"],
          example: {
            target: "I finish cleaning up at eight.",
            translation: "Termino de organizar a las ocho."
          }
        },
        {
          term: "to break up (with)",
          explanation:
            "“Terminar con alguien”: romper una relación de pareja. El verbo frasal fijo para las rupturas.",
          literal: "romper hacia arriba (con)",
          useWhen:
            "Al hablar del fin de una pareja: “they broke up”, “she broke up with him”.",
          avoidWhen:
            "Para terminar una tarea; ahí es “finish”, no “break up”, que solo sirve para relaciones.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["split up", "call it off", "dump someone", "be over"],
          example: {
            target: "Your friend broke up with her boyfriend.",
            translation: "Tu amiga terminó con el novio."
          }
        },
        {
          term: "to end",
          explanation:
            "“Acabar / terminar” visto como el final de algo: cómo concluye una historia, una relación o un evento.",
          literal: "acabar / finalizar",
          useWhen:
            "Al describir el desenlace: “it didn't end badly”, “the movie ends late”.",
          avoidWhen:
            "Para la persona que termina la acción; “I end the job” suena raro — ahí va “finish”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["end up", "come to an end", "finish", "wrap up"],
          example: {
            target: "It didn't end badly.",
            translation: "No acabó mal."
          }
        },
        {
          term: "to wrap up",
          explanation:
            "“Rematar / cerrar”: dar los toques finales a algo y darlo por terminado, con aire resolutivo.",
          literal: "envolver hacia arriba",
          useWhen:
            "Al cerrar una tarea o reunión: “let's wrap up”, “I'm wrapping up a job”.",
          avoidWhen:
            "En contextos muy formales o solemnes; es expresión de tono práctico y desenfadado.",
          register: "amistoso informal",
          region: "Inglés universal; muy usado en el trabajo.",
          related: ["finish up", "round off", "tie up", "close out"],
          example: {
            target: "I'm wrapping up a side job.",
            translation: "Estoy rematando un trabajito."
          }
        },
        {
          term: "side job",
          explanation:
            "“Trabajito extra”: un trabajo pequeño y aparte del principal, casi siempre fuera del horario.",
          literal: "trabajo de lado",
          useWhen:
            "Al mencionar una entrada extra: “I do a few side jobs”.",
          avoidWhen:
            "Para tu empleo formal de tiempo completo; “side job” implica algo menor y secundario.",
          register: "amistoso informal",
          region: "Inglés universal; “side gig” es la variante de moda.",
          related: ["side gig", "side hustle", "odd job", "extra work"],
          example: {
            target: "Then I go do a side job.",
            translation: "Luego salgo a hacer un trabajito."
          }
        }
      ],
      note:
        "Dos trampas. Primera: después de “finish” siempre va gerundio — “finish eating”, nunca “finish to eat” —, al revés del “terminar de + infinitivo” español. Segunda: “terminar con alguien” es “break up with”, no “finish with”, y jamás “terminate”, que suena a despedir o liquidar. Para lo demás, apóyate en “be done” (“I'm done”) para lo que acaba ahora, y recuerda que tras “as soon as” el inglés usa presente donde el español pide subjuntivo: “as soon as you finish”.",
      culture: [
        {
          label: "La peluquería como confesionario",
          body:
            "En Norteamérica, como en Colombia, la silla de la peluquería invita a la confidencia. Mientras cortan y secan, se habla de todo: el trabajo, las parejas, los planes del fin de semana. La estilista lleva la conversación con oficio y espera que la clienta habitual le siga el juego. Que Alejandra pregunte por la ruptura de la amiga de Chloe no es indiscreción: es justo la charla ligera que la vuelve una clienta de casa."
        },
        {
          label: "“Done” hace casi todo el trabajo",
          body:
            "El hispanohablante busca “finish” para todo, pero el inglés norteamericano resuelve la mayoría de los finales con “done”: “I'm done”, “almost done”, “are you done?”. Es más corto y más natural que “I have finished”. Funciona para una tarea, una comida o una relación (“they're done”). Acostumbrarse a “done” en lugar de traducir “terminado” con “finished” es de los cambios que más rápido hacen sonar natural a alguien recién llegado."
        },
        {
          label: "Break up, no “terminate”",
          body:
            "“Terminar con el novio” tienta a decir “terminate with”, y el resultado es cómico: “terminate” suena a despedir a un empleado o a acabar con algo por la fuerza, como en las películas. Para las parejas, el inglés usa el verbo frasal “break up”: “they broke up”, “she broke up with him”. Es una de esas trampas de falso amigo donde la traducción literal existe como palabra, pero significa una cosa muy distinta."
        },
        {
          label: "El presente que hace de futuro",
          body:
            "Tras “as soon as”, “when” o “after”, el inglés usa el presente para hablar del futuro: “as soon as you finish”, aunque el terminar aún no ocurra. El español, en cambio, exige subjuntivo: “apenas termines”. El hispanohablante, fiel a su lógica, quiere meter aquí un “will” (“as soon as you will finish”), y ese es el error. Basta recordar que, con estas conjunciones de tiempo, el inglés se queda en presente."
        }
      ],
      pitfalls: [
        {
          mistake: "“I finished to eat.”",
          whyItFails:
            "Después de “finish” va gerundio, no infinitivo: “I finished eating”. El español “terminar de comer” empuja al hispanohablante a poner “to eat”, pero al oído inglés le suena claramente mal.",
          sayInstead: "I finished eating."
        },
        {
          mistake: "“I terminated with my boyfriend.”",
          whyItFails:
            "“Terminate” significa liquidar, despedir o poner fin a algo por la fuerza, no romper con una pareja. Es un falso amigo de “terminar”. Para una ruptura, el inglés dice “break up with”.",
          sayInstead: "I broke up with my boyfriend."
        },
        {
          mistake: "“Are you already finish?”",
          whyItFails:
            "Falta el auxiliar o el participio: hay que decir “are you finished?” o “are you done?”. “Finish” a secas es el infinitivo, y la pregunta necesita “be” + participio. El calco del español, sin auxiliar, deja la frase coja.",
          sayInstead: "Are you done already?"
        },
        {
          mistake: "“As soon as you will finish, call me.”",
          whyItFails:
            "Tras “as soon as” el inglés usa presente para el futuro: “as soon as you finish”. El hispanohablante mete “will” por lógica, pero con estas conjunciones de tiempo el futuro se expresa en presente.",
          sayInstead: "As soon as you finish, call me."
        }
      ],
      variations: [
        {
          form: "I'm almost done.",
          register: "amistoso informal",
          region: "Inglés universal; dominante en Norteamérica",
          whenToUse: "Avisar que estás a punto de terminar, ahora mismo."
        },
        {
          form: "I'm just finishing up.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Estás en los últimos toques de algo."
        },
        {
          form: "I'll wrap it up in a minute.",
          register: "amistoso informal",
          region: "Inglés universal; frecuente en el trabajo",
          whenToUse: "Cerrar algo enseguida, con aire resolutivo."
        },
        {
          form: "Are you finished?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Preguntar cortésmente si alguien ya terminó."
        },
        {
          form: "That's a wrap.",
          register: "amistoso informal",
          region: "Inglés universal; nacido del cine",
          whenToUse: "Declarar algo oficialmente terminado, con gracia."
        }
      ],
      prompt: "Chloe dice que su amiga “broke up with her boyfriend.” ¿Qué pasó?",
      choices: [
        "Que terminó con el novio — “to break up with someone” es la frase hecha en inglés para una ruptura de pareja.",
        "Que rompió algo del novio sin querer, quizá un objeto, mientras los dos discutían acaloradamente en plena calle.",
        "Que terminó un trabajo junto al novio, los dos colaborando para rematar una tarea que habían empezado juntos antes."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál oración dice “acabo de comer” (recién), no “termino de comer”?",
          choices: [
            "I finish eating and then I head straight to the salon downtown to get my hair cut.",
            "I just ate, so I'm not hungry at all right now, but thank you very much anyway.",
            "As soon as I finish eating, I'll let you know and the two of us can head out."
          ],
          answer: 1,
          tests: "“just” + pasado = acabar de + infinitivo"
        },
        {
          prompt: "Alejandra dice “as soon as you finish, let me know.” ¿Por qué “finish” y no “will finish”?",
          choices: [
            "Porque “finish” es en realidad una orden, y las órdenes en inglés se dan siempre con el verbo en su forma base.",
            "Porque “you finish” aquí es un pasado disimulado, y el inglés usa el presente para contar cosas que ya ocurrieron.",
            "Porque tras “as soon as” el inglés usa el presente para el futuro, donde el español pediría el subjuntivo “termines”."
          ],
          answer: 2,
          tests: "presente por futuro tras “as soon as”"
        },
        {
          prompt: "¿Cómo se dice que una ruptura terminó en buenos términos?",
          choices: [
            "They broke up, but it didn't end badly and the two of them are honestly still good friends.",
            "They finished the whole side job well, without a single detail left pending anywhere at the end.",
            "They ended the date really early because he suddenly had to go and wrap up another side job."
          ],
          answer: 0,
          tests: "break up + “it didn't end badly” = terminar bien"
        },
        {
          prompt: "¿Cuál usa bien el gerundio después de “finish”?",
          choices: [
            "I need to finish to dry your hair before the next client arrives at the salon.",
            "I need to finish drying your hair before the next client arrives at the salon.",
            "I need to finish dried your hair before the next client arrives at the salon."
          ],
          answer: 1,
          tests: "finish + gerundio, no infinitivo ni participio"
        }
      ]
    }
  },
  {
    id: "the-first-morning-at-the-office-in-bogota",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "work-and-employment",
    register: "courteous",
    verb: "entrar",
    review: "pending",
    es: {
      title: "First day walking into the office",
      situation:
        "It is Alex’s first day at a new job in Bogotá. At reception, Marta from HR shows him in, explains what time he starts, how to clock in and which way to enter the building. Nervous, Alex asks her to repeat what does not quite sink in.",
      setting: {
        who: "Marta works in HR and has walked dozens of new hires through their first morning. Alex is starting his first office job in Colombia and is anxious about doing everything right.",
        what: "A first-day onboarding: being shown in, learning the start time, the sign-in, and where to go.",
        when: "A Monday, ten to eight in the morning, the office filling up as people arrive.",
        where: "Bogotá, the reception of a company office in the north of the city.",
        why: "Because first impressions at a new job matter, and understanding exactly when to come in, how to clock in and where to enter is what stops Alex feeling lost on day one."
      },
      address: {
        form: "usted",
        who: "Marta uses usted with Alex, and he uses usted back — the default in a Bogotá workplace between people meeting for the first time.",
        why: "In corporate Bogotá, usted is the neutral register for colleagues who have just met, and HR keeps to it especially. It signals professionalism, not coldness, and no one waits to be invited into it.",
        ifYouSwitch:
          "Jumping to tú with Marta on day one would sound over-familiar, as if Alex were treating a formal onboarding like a chat with a friend. Usted is the safe, expected choice until the workplace itself loosens up."
      },
      dialogue: [
        {
          speaker: "Marta",
          target: "Bienvenido. Siga, siga. ¿A qué hora le dijeron que entra?",
          translation: "Welcome. Come on in. What time did they tell you you start?",
          pronunciation: "byen-veh-NEE-doh. SEE-ga, SEE-ga. a ke OH-ra le dee-HEH-ron ke EN-tra",
          literal: "Welcome. Follow, follow. At what hour to-you they-said that you-enter?",
          why: "Here “entrar” means to start work — “¿a qué hora entra?” is “what time do you start?”. “Siga” (literally “continue”) is the Colombian invitation to come in or go ahead, far more common than “entre”. Note the usted forms throughout: “le dijeron”, “entra”."
        },
        {
          speaker: "Alex",
          target: "Me dijeron que entro a las ocho. ¿Por aquí se entra?",
          translation: "They told me I start at eight. Is this the way in?",
          pronunciation: "me dee-HEH-ron ke EN-troh a las OH-choh. por a-KEE se EN-tra",
          literal: "To-me they-said that I-enter at the eight. Through here itself one-enters?",
          why: "“Entro a las ocho” uses entrar for starting the workday. “¿Por aquí se entra?” uses the impersonal se — “is this how one gets in?” — a neat, natural way to ask about the entrance without naming a subject."
        },
        {
          speaker: "Marta",
          target: "Sí, se entra por esa puerta. En Colombia decimos “entrar a”, no “entrar en”.",
          translation: "Yes, you come in through that door. In Colombia we say “entrar a”, not “entrar en”.",
          pronunciation: "see, se EN-tra por EH-sa PWER-ta. en ko-LOM-bya de-SEE-mos en-TRAR a, no en-TRAR en",
          literal: "Yes, itself one-enters through that door. In Colombia we-say to-enter to, not to-enter in.",
          why: "The big regional point: Colombia (and most of Latin America) says “entrar a” a place, where Spain prefers “entrar en”. “Entró a la oficina”, “entra al salón”. Using “en” is understood but instantly marks your Spanish as European."
        },
        {
          speaker: "Alex",
          target: "Perdón, ¿me repite? No me entra bien cómo marco el ingreso.",
          translation: "Sorry, could you repeat that? I'm not quite getting how I clock in.",
          pronunciation: "per-DON, me rre-PEE-te. no me EN-tra byen KO-mo MAR-koh el een-GRE-soh",
          literal: "Pardon, to-me you-repeat? Not to-me it-enters well how I-mark the entry.",
          why: "“No me entra” is a lovely idiom: an idea that “won't go in” is one you cannot grasp. “No me entra cómo…” = “I can't get my head around how…”. Here entrar shifts from physical entry to understanding — same verb, figurative sense."
        },
        {
          speaker: "Marta",
          target: "Tranquilo. Entra la tarjeta acá y ya queda registrado su ingreso.",
          translation: "No worries. The card goes in here and your entry is logged.",
          pronunciation: "tran-KEE-loh. EN-tra la tar-HEH-ta a-KA ee ya KEH-da rre-hees-TRA-doh soo een-GRE-soh",
          literal: "Calm. Enters the card here and already stays registered your entry.",
          why: "Here “entra la tarjeta” is physical — the card goes in. Colombians use entrar for putting something in as well as for going in. “Ingreso” (entry/access) is the noun from the same family, standard in workplace and security talk."
        },
        {
          speaker: "Alex",
          target: "Ah, ya me entró. Entonces entro, marco y subo. Gracias.",
          translation: "Ah, now I get it. So I come in, clock in and go up. Thanks.",
          pronunciation: "ah, ya me en-TROH. en-TON-ses EN-troh, MAR-koh ee SOO-boh. GRA-syas",
          literal: "Ah, already to-me it-entered. So I-enter, I-mark and I-go-up. Thanks.",
          why: "“Ya me entró” — the penny dropped — is the perfective of that same “no me entra”: the idea finally went in. Then three present-tense verbs (entro, marco, subo) lay out the routine. The preterite “entró” captures the sudden click of understanding."
        }
      ],
      vocabulary: [
        {
          term: "entrar",
          explanation:
            "The base verb for going in — entering a place, and by extension getting something inside.",
          literal: "to enter / to go in / to come in",
          useWhen:
            "Any entering: entro, entra, entramos, and entrar a + place. Also figuratively, for an idea sinking in.",
          avoidWhen:
            "Nothing broad; just watch the preposition — in Colombia it is entrar a, not entrar en.",
          register: "neutral",
          region: "Universal Spanish; the base verb everywhere.",
          related: ["entrar a", "ingresar", "meter", "pasar"],
          example: {
            target: "¿Por aquí se entra?",
            translation: "Is this the way in?"
          }
        },
        {
          term: "entrar a",
          explanation:
            "The Colombian (and broadly Latin American) way to say enter a place — entrar with “a”, not “en”.",
          literal: "to enter to",
          useWhen:
            "Going into any place: “entrar a la oficina”, “entró al salón”, “entramos al banco”.",
          avoidWhen:
            "You do not really avoid it in Colombia; “entrar en” is the Spain variant and sounds foreign here.",
          register: "neutral",
          region: "Colombia and most of Latin America; contrasts with Spain's entrar en.",
          related: ["entrar en", "ingresar a", "pasar a", "meterse a"],
          example: {
            target: "Entró a la oficina a las ocho.",
            translation: "He got to the office at eight."
          }
        },
        {
          term: "entrar a trabajar",
          explanation:
            "To start a job, or to start the workday — entrar used for beginning employment.",
          literal: "to enter to work",
          useWhen:
            "Talking about a start time or a new post: “entro a las ocho”, “entró a trabajar en enero”.",
          avoidWhen:
            "Do not calque it into English as “enter to work”; there it is simply “to start work”.",
          register: "neutral",
          region: "Universal Spanish; everyday in Colombian working life.",
          related: ["entrar a las ocho", "empezar a trabajar", "el ingreso", "arrancar turno"],
          example: {
            target: "Me dijeron que entro a las ocho.",
            translation: "They told me I start at eight."
          }
        },
        {
          term: "no me entra",
          explanation:
            "An idiom for not grasping something — an idea that “won't go in”. Figurative use of entrar.",
          literal: "it doesn't enter me",
          useWhen:
            "Admitting you cannot understand or memorize something: no me entra la fórmula, no me entra cómo funciona.",
          avoidWhen:
            "A physical object that will not fit — that is also “no me entra” (the shoe won't go on), so context decides.",
          register: "friendly informal",
          region: "Universal Spanish; very common in Colombia.",
          related: ["no me cabe en la cabeza", "no lo capto", "no me cuadra", "ya me entró"],
          example: {
            target: "No me entra cómo marco el ingreso.",
            translation: "I can't get how I clock in."
          }
        },
        {
          term: "siga",
          explanation:
            "The Colombian all-purpose “come in / go ahead” — literally “continue”, used to welcome or wave someone through.",
          literal: "continue / carry on",
          useWhen:
            "Inviting someone in or letting them pass: siga, siga; ¿me permite? — siga.",
          avoidWhen:
            "It is not “follow me” here; as a courtesy it means proceed, not trail behind me.",
          register: "polite service",
          region: "General Colombian; a national hallmark of politeness.",
          related: ["adelante", "pase", "siga usted", "siga, siga"],
          example: {
            target: "Bienvenido, siga, siga.",
            translation: "Welcome, come on in."
          }
        },
        {
          term: "el ingreso",
          explanation:
            "Entry or access — the noun for going in, and for the act of clocking in at a workplace.",
          literal: "the entry / the income",
          useWhen:
            "Workplace and security contexts: “marcar el ingreso”, “control de ingreso”, “hora de ingreso”.",
          avoidWhen:
            "Careful: “ingresos” in the plural usually means income or earnings, a different sense of the same word.",
          register: "neutral",
          region: "Universal Spanish; standard in Colombian offices and buildings.",
          related: ["el acceso", "la entrada", "marcar", "el ingreso económico"],
          example: {
            target: "Ya queda registrado su ingreso.",
            translation: "Your entry is now logged."
          }
        },
        {
          term: "ingresar",
          explanation:
            "A more formal synonym of entrar — to enter or gain access, at home in official and written registers.",
          literal: "to enter / to gain entry",
          useWhen:
            "Forms, security, banking: “ingrese su clave”, “ingresó al sistema”, “ingresar al país”.",
          avoidWhen:
            "Casual speech, where plain entrar sounds far more natural; ingresar there can seem bureaucratic.",
          register: "polite formal",
          region: "Universal Spanish; the formal counterpart to entrar.",
          related: ["entrar", "acceder", "registrarse", "el ingreso"],
          example: {
            target: "Ingrese su documento para entrar.",
            translation: "Enter your ID to gain access."
          }
        }
      ],
      note:
        "The one rule to bank here is the preposition: in Colombia you entrar a a place, not entrar en. “Entró a la oficina.” Beyond that, entrar quietly does several jobs — entrar a trabajar is to start a job (“entro a las ocho”), no me entra is “I can't grasp it”, and ya me entró is “the penny dropped”. And when a Colombian says “siga”, they are not telling you to follow; they are warmly waving you in.",
      culture: [
        {
          label: "“Siga”: the most Colombian welcome",
          body:
            "Few words are as Colombian as “siga”. It means, roughly, “come in”, “go ahead”, “after you”, “take a seat” — a catch-all courtesy that waves you into a home, an office or a shop. Literally it is “continue”, but nobody hears the literal sense. A doorway stand-off where both people insist “siga, siga” is a small national ritual of politeness. For a newcomer, learning to both give and accept a “siga” is an early step into local manners."
        },
        {
          label: "Entrar a, not entrar en",
          body:
            "One small preposition quietly marks where your Spanish was learned. Latin Americans, Colombians included, say “entrar a” a place — entrar a la casa, al salón, al banco. Spain says “entrar en”. Neither is wrong, but in Bogotá “entrar en” sounds unmistakably European, a bit like saying “coger” for taking the bus. If you learned your Spanish from a Peninsular textbook, switching to “entrar a” is one of the fastest ways to sound local."
        },
        {
          label: "When ideas won't go in",
          body:
            "Spanish treats understanding as something physical entering the mind. “No me entra” — it won't go in — is how Colombians admit they cannot grasp or memorize something, and “ya me entró” is the click of finally getting it. The image is bodily and unpretentious, with no shame attached: an idea simply has not gone in yet. It is gentler than “no entiendo”, which can sound like a flat wall; “no me entra” suggests the door is still open."
        },
        {
          label: "Usted at the office door",
          body:
            "Corporate Bogotá runs on usted. New colleagues, HR staff, a boss and a fresh hire all default to it, and no one experiences it as cold. Warmth arrives instead through diminutives and courtesies: “un momentico”, “siga, siga”, “con mucho gusto”. A foreigner who leaps to tú on the first morning can seem to force an intimacy the workplace has not offered yet. Usted is simply the professional factory setting, and it is the safe way in."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “entré en la oficina” in Colombia",
          whyItFails:
            "It is grammatical, but “entrar en” is the Spain construction; Colombia says “entrar a”: “entré a la oficina”. Using “en” won't confuse anyone, but it flags your Spanish as European and slightly out of place in Bogotá.",
          sayInstead: "Entré a la oficina."
        },
        {
          mistake: "Reading “¿a qué hora entra?” as “when do you cross the door?”",
          whyItFails:
            "In a job context, “entrar” means to start work. “¿A qué hora entra?” is asking your start time, not literally when you cross the threshold. Answering with the door time misses what Marta actually wants to know.",
          sayInstead: "Entro a las ocho. (my start time)"
        },
        {
          mistake: "Taking “siga” as “follow me”",
          whyItFails:
            "Although “siga” is the command form of seguir (to follow), as a courtesy it means “come in / go ahead”. Trailing behind Marta because she said “siga” would be a comic misread; she is inviting you to proceed, not to follow her.",
          sayInstead: "Understand “siga” as “please, come in / go ahead.”"
        },
        {
          mistake: "Saying “no entiendo” when you mean it hasn't sunk in",
          whyItFails:
            "“No entiendo” is a flat “I don't understand”; “no me entra” is softer — the idea just hasn't gone in yet, and might on another try. On a first day, “no me entra bien cómo…” sounds humbler and less final than a blunt “no entiendo”.",
          sayInstead: "No me entra bien cómo marco el ingreso."
        }
      ],
      variations: [
        {
          form: "¿Por aquí se entra?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Asking where the entrance is, impersonally and politely."
        },
        {
          form: "¿Se puede entrar?",
          register: "polite service",
          region: "Universal Spanish",
          whenToUse: "Asking permission to go in."
        },
        {
          form: "¿A qué hora entro?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Asking your start time at a job."
        },
        {
          form: "Siga, siga.",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "Warmly waving someone in or through."
        },
        {
          form: "Ingrese por la puerta principal.",
          register: "polite formal",
          region: "Universal Spanish; signage and security",
          whenToUse: "A formal written or spoken “enter by the main door”."
        }
      ],
      prompt: "Marta tells Alex “en Colombia decimos ‘entrar a’, no ‘entrar en’.” Why does this matter?",
      choices: [
        "Because “entrar en” is a grammatical mistake that no native Spanish speaker in any country in the world would ever produce.",
        "Because Colombia and most of Latin America use “entrar a” a place, while “entrar en” is the Spain variant that sounds European here.",
        "Because “entrar a” and “entrar en” mean two completely different things, one about doors and the other only about starting a job."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "In Bogotá, which sentence sounds local?",
          choices: [
            "Entré en la oficina y en el ascensor a las ocho en punto de la mañana.",
            "Entré dentro de la oficina y del ascensor a las ocho en punto de la mañana.",
            "Entré a la oficina y al ascensor a las ocho en punto de la mañana, sin falta."
          ],
          answer: 2,
          tests: "entrar a (Colombia) versus entrar en (Spain)"
        },
        {
          prompt: "What does Alex mean by “no me entra cómo marco el ingreso”?",
          choices: [
            "That he can't quite grasp how the clock-in works and would like it explained again, more slowly.",
            "That his access card physically will not fit into the slot of the machine beside the front door.",
            "That he does not want to clock in at all and would honestly rather start the workday a bit later."
          ],
          answer: 0,
          tests: "no me entra = I can't grasp it (figurative entrar)"
        },
        {
          prompt: "Marta says “siga, siga.” What is she doing?",
          choices: [
            "Telling Alex to follow closely behind her down the hallway toward the human-resources office at the back.",
            "Warmly inviting Alex to come in and go ahead — the all-purpose Colombian courtesy offered at a doorway.",
            "Asking Alex to keep going with the story he had been telling her about his very first day at the company."
          ],
          answer: 1,
          tests: "siga as “come in / go ahead”, not literal follow"
        },
        {
          prompt: "Which uses “entrar” for starting a job?",
          choices: [
            "Ya me entró la idea de cómo funciona todo el sistema de ingreso de la empresa entera.",
            "Se entra al edificio por la puerta de vidrio que queda justo sobre la calle principal.",
            "Entro a trabajar a las ocho y salgo a las cinco de la tarde, de lunes a viernes."
          ],
          answer: 2,
          tests: "entrar a trabajar = to start a job"
        }
      ]
    },
    en: {
      title: "Entrar el primer día al trabajo",
      situation:
        "Es el primer día de Alejandra en un trabajo nuevo en Houston. En la recepción, Ryan, de recursos humanos, la hace seguir, le explica a qué hora entra, cómo registrar su ingreso y por dónde se entra al edificio. Alejandra, nerviosa, pide que le repitan lo que no le entra del todo.",
      setting: {
        who: "Ryan trabaja en recursos humanos y ha guiado a decenas de personas en su primera mañana. Alejandra empieza su primer trabajo de oficina en Estados Unidos y está nerviosa por hacer todo bien.",
        what: "Una inducción de primer día: que la hagan seguir, aprender la hora de entrada, el registro y a dónde ir.",
        when: "Un lunes, diez para las ocho de la mañana, la oficina llenándose a medida que llega la gente.",
        where: "Houston, la recepción de una oficina en el centro de la ciudad.",
        why: "Porque la primera impresión en un trabajo nuevo importa, y entender exactamente a qué hora llegar, cómo registrarse y por dónde entrar es lo que evita que Alejandra se sienta perdida el primer día."
      },
      address: {
        form: "mixed",
        who: "Ryan y Alejandra se tratan por el nombre de pila desde el minuto uno, como es normal en una oficina estadounidense.",
        why: "El inglés no tiene usted ni tú; la cortesía no vive en el pronombre sino en el verbo y los suavizadores — “could you”, “would you mind”, “please” — y en el tono. El nombre de pila no es informalidad, es lo normal.",
        ifYouSwitch:
          "Si Alejandra buscara un pronombre formal como el usted del español, no lo encontraría: en inglés no existe. La formalidad se marca con frases corteses y con el tono, no cambiando la palabra “you”."
      },
      dialogue: [
        {
          speaker: "Ryan",
          target: "Welcome! Come on in. What time did they tell you to start?",
          translation: "¡Bienvenida! Siga, siga. ¿A qué hora le dijeron que entra?",
          pronunciation: "UEL-kom! kom on in. uat taim did dei tel yu tu start",
          literal: "Bienvenida. Ven adentro. ¿Qué hora te dijeron ellos empezar?",
          why: "Fíjese en dos cosas. “Come on in” es la invitación cálida a pasar, el equivalente de “siga, siga”. Y para “entrar a trabajar”, el inglés usa “start”: “what time do you start?” es “¿a qué hora entra?”. No se dice “enter to work”."
        },
        {
          speaker: "Alejandra",
          target: "They told me I start at eight. Is this the way in?",
          translation: "Me dijeron que entro a las ocho. ¿Por aquí se entra?",
          pronunciation: "dei told mi ai start at eit. is dis de UEI in",
          literal: "Ellos dijeron a-mí yo empiezo a ocho. ¿Es este el camino adentro?",
          why: "“I start at eight” traduce “entro a las ocho” sin ningún verbo de entrar: en inglés se “empieza”. Y “the way in” es la manera natural de decir “la entrada / por dónde se entra”, más cotidiana que el formal “entrance”."
        },
        {
          speaker: "Ryan",
          target: "Yes, you come in through that door. In English we just say “go in” — no preposition after it.",
          translation: "Sí, se entra por esa puerta. En inglés simplemente decimos “go in” — sin preposición después.",
          pronunciation: "yes, yu kom in thru dat dor. in ING-lish ui yost sei gou in — nou pre-po-SI-shon AF-ter it",
          literal: "Sí, tú vienes adentro a-través esa puerta. En inglés nosotros solo decimos entrar — no preposición después.",
          why: "El punto clave para un hispanohablante: el español discute “entrar a” frente a “entrar en”, pero el inglés se ahorra la preposición. “Enter the room” es transitivo directo, y con “go/come” la partícula es “in/into”: “go into the room”. Nunca “enter to”."
        },
        {
          speaker: "Alejandra",
          target: "Sorry, could you say that again? I don't quite get how I sign in.",
          translation: "Perdón, ¿me repite? No me entra bien cómo marco el ingreso.",
          pronunciation: "SO-rri, kud yu sei dat a-GUEN. ai dont kuait guet jau ai sain in",
          literal: "Perdón, ¿podrías decir eso otra-vez? Yo no del-todo consigo cómo yo firmo adentro.",
          why: "Aquí está el otro giro: “no me entra” no se traduce con “enter”. En inglés uno no “consigue” la idea: “I don't get it”. Y “sign in” es registrar la entrada en persona (el primo “log in” es para un sistema o una cuenta)."
        },
        {
          speaker: "Ryan",
          target: "No worries. Your card goes in here and it logs your entry.",
          translation: "Tranquila. La tarjeta entra acá y queda registrado su ingreso.",
          pronunciation: "nou UO-rris. yor kard gous in jir and it logs yor EN-tri",
          literal: "No preocupaciones. Tu tarjeta va adentro aquí y ello registra tu entrada.",
          why: "Para “entra la tarjeta” (algo físico que se mete), el inglés dice “goes in”, no “enters”. “Log” como verbo es registrar; “it logs your entry” es “queda registrado su ingreso”. “Entry” es el sustantivo, igual que “el ingreso”."
        },
        {
          speaker: "Alejandra",
          target: "Ah, now I get it. So I come in, sign in and go up. Thanks!",
          translation: "Ah, ya me entró. Entonces entro, marco y subo. ¡Gracias!",
          pronunciation: "aa, nau ai guet it. so ai kom in, sain in and gou op. zenks",
          literal: "Ah, ahora yo consigo ello. Así yo vengo adentro, firmo adentro y voy arriba. ¡Gracias!",
          why: "“Now I get it” es el clic de entender — el “ya me entró”. No existe “now it entered me”. Después, tres presentes simples (come in, sign in, go up) resumen la rutina, tal como el español encadena “entro, marco y subo”."
        }
      ],
      vocabulary: [
        {
          term: "come in / go in",
          explanation:
            "La forma cotidiana de entrar en inglés: “come in” cuando alguien se acerca a quien habla, “go in” cuando se aleja.",
          literal: "venir adentro / ir adentro",
          useWhen:
            "Cualquier entrada del día a día: come in, go in, come on in.",
          avoidWhen:
            "En registro muy formal o escrito, donde “enter” encaja mejor.",
          register: "amistoso informal",
          region: "Inglés universal; “come on in” es un saludo cálido en Norteamérica.",
          related: ["come on in", "go in", "step in", "head in"],
          example: {
            target: "Come on in, take a seat.",
            translation: "Siga, tome asiento."
          }
        },
        {
          term: "the way in",
          explanation:
            "El sustantivo cotidiano para la entrada — por dónde se entra a un lugar.",
          literal: "el camino de entrada",
          useWhen:
            "Preguntar por la entrada: “Is this the way in?”, “Where's the way in?”.",
          avoidWhen:
            "En letreros formales, que suelen decir “Entrance” en vez de “the way in”.",
          register: "neutro",
          region: "Inglés universal; “entrance” es la variante formal de los letreros.",
          related: ["entrance", "the entrance", "way in", "front door"],
          example: {
            target: "Is this the way in?",
            translation: "¿Por aquí se entra?"
          }
        },
        {
          term: "to start (work)",
          explanation:
            "El inglés no “entra a trabajar”; simplemente “starts” a una hora. Es el equivalente de entrar a trabajar.",
          literal: "empezar (a trabajar)",
          useWhen:
            "Hablar de la hora de entrada: I start at eight, what time do you start?",
          avoidWhen:
            "No calque “enter to work”: en inglés no existe, es “start work”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["start at eight", "start work", "clock in", "begin the shift"],
          example: {
            target: "They told me I start at eight.",
            translation: "Me dijeron que entro a las ocho."
          }
        },
        {
          term: "I don't get it",
          explanation:
            "El modo coloquial de decir que algo no le entra a uno — que no lo capta ni lo agarra.",
          literal: "no lo consigo / no me entra",
          useWhen:
            "Admitir que no entiende algo: I don't get how this works.",
          avoidWhen:
            "En registro muy formal, donde “I don't quite understand” suena mejor.",
          register: "amistoso informal",
          region: "Inglés universal; muy común en el habla diaria.",
          related: ["I don't get it", "I don't follow", "it doesn't click", "now I get it"],
          example: {
            target: "I don't get how I sign in.",
            translation: "No me entra cómo marco el ingreso."
          }
        },
        {
          term: "go ahead / after you",
          explanation:
            "Lo más cercano al “siga” colombiano: invitar cortésmente a alguien a pasar o a ir primero.",
          literal: "adelante / después de usted",
          useWhen:
            "Cederle el paso a alguien o invitarlo a pasar: Go ahead. After you.",
          avoidWhen:
            "No significa “sígame”: es una invitación a pasar primero, no a ir detrás.",
          register: "cortés neutro",
          region: "Inglés universal; “after you” es especialmente cortés.",
          related: ["go ahead", "after you", "come on in", "go first"],
          example: {
            target: "Go ahead, come on in.",
            translation: "Siga, siga."
          }
        },
        {
          term: "sign in / log in",
          explanation:
            "Registrar la entrada: “sign in” en persona, “log in” cuando es a un sistema o una cuenta.",
          literal: "registrar la entrada / iniciar sesión",
          useWhen:
            "Marcar el ingreso: “sign in at the front desk”, “log in to the system”.",
          avoidWhen:
            "No los confunda: “log in” es a una cuenta; “sign in” sirve también en persona.",
          register: "neutro",
          region: "Inglés universal; en oficinas y seguridad.",
          related: ["sign in", "log in", "check in", "clock in"],
          example: {
            target: "Your card logs your entry here.",
            translation: "La tarjeta registra su ingreso acá."
          }
        },
        {
          term: "to enter",
          explanation:
            "El verbo formal para entrar — más propio de letreros, avisos y lenguaje escrito que del habla diaria.",
          literal: "entrar / ingresar",
          useWhen:
            "Registros formales: “Enter your PIN”, “do not enter”, “authorized personnel may enter”.",
          avoidWhen:
            "La conversación casual, donde “come in” o “go in” suenan mucho más naturales.",
          register: "cortés formal",
          region: "Inglés universal; el equivalente formal de “come in / go in”.",
          related: ["enter", "gain entry", "access", "proceed"],
          example: {
            target: "Enter your PIN to gain access.",
            translation: "Ingrese su clave para entrar."
          }
        }
      ],
      note:
        "La trampa que hay que esquivar es calcar “entrar a” del español. En inglés no se dice “enter to work” ni “enter to the room”: es “start work” y “go into the room” o, más formal, “enter the room” — sin preposición. “Enter” suena a letrero; en el día a día se dice “come in” y “go in”. Para “no me entra”, diga “I don't get it”, y para el clic de entender, “now I get it”. Y “siga” no tiene una sola palabra: use “come in”, “go ahead” o “after you”.",
      culture: [
        {
          label: "“Enter” suena a letrero, no a charla",
          body:
            "En inglés “enter” existe, pero suena formal: vive en avisos como “Do not enter” o “Enter your PIN”, más que en la conversación. Para invitar a alguien a pasar, un angloparlante dice “come in” o “come on in”, nunca “enter”. Preguntar “Can I enter?” en la puerta de una oficina suena rígido y hasta raro; lo natural es “Can I come in?”. Reserve “enter” para lo escrito y lo formal, y use “come in” con la gente."
        },
        {
          label: "El inglés entra sin preposición",
          body:
            "El español debate si es “entrar a” o “entrar en”; el inglés se ahorra el problema. “Enter” es transitivo directo: “enter the room”, sin preposición. Con “come” y “go” sí aparece la partícula: “come into the room”, “go in”. El error clásico del hispanohablante es calcar la “a”: “I entered to the room” no existe. Diga “I entered the room” o, más natural en la charla, “I went into the room”. Menos preposición, no más."
        },
        {
          label: "Cuando una idea “no entra” en inglés",
          body:
            "El español dice “no me entra”; el inglés piensa distinto. La idea no “entra”: uno no la “consigue”. Se dice “I don't get it”, “it doesn't click”, “it's not sinking in”. Y el clic de entender es “now I get it” o “now it clicks”, jamás “now it entered me”. Traducir “ya me entró” como “it entered me” suena a otra cosa por completo. Cambie la imagen: en inglés uno agarra la idea, no la deja entrar."
        },
        {
          label: "El nombre de pila no es informalidad",
          body:
            "En una oficina estadounidense, Ryan y Alejandra se llaman por el nombre desde el minuto uno, y eso no es falta de respeto. El inglés no tiene usted; la formalidad vive en las frases corteses — “could you”, “would you mind”, “thanks so much” — y en el tono, no en el pronombre ni en el apellido. Buscar un “usted” en inglés es buscar algo que no existe. La cortesía está en cómo se pide, no en cómo se nombra a la persona."
        }
      ],
      pitfalls: [
        {
          mistake: "“I enter to work at eight.”",
          whyItFails:
            "Es un calco de “entro a trabajar a las ocho”. En inglés no se “enter to work”: se “start work”. “Enter” no carga esa idea de empezar el turno, y la preposición “to” sobra por completo.",
          sayInstead: "I start work at eight."
        },
        {
          mistake: "“Can I enter?”",
          whyItFails:
            "Se entiende, pero suena rígido y de letrero. En la puerta de una oficina o de una casa, un angloparlante dice “Can I come in?”. “Enter” ahí resulta frío y poco natural para pedir permiso de pasar.",
          sayInstead: "Can I come in?"
        },
        {
          mistake: "“It doesn't enter me.”",
          whyItFails:
            "Es “no me entra” traducido palabra por palabra, y en inglés no significa nada. La idea no “entra” en inglés; uno no la “consigue”. La forma natural es “I don't get it”.",
          sayInstead: "I don't get it."
        },
        {
          mistake: "“I entered to the room.”",
          whyItFails:
            "Otra vez la preposición del español. “Enter” es transitivo directo: “I entered the room”, sin “to”. O, más natural en la charla, “I went into the room”. La “a” de “entrar a” no se traduce.",
          sayInstead: "I entered the room."
        }
      ],
      variations: [
        {
          form: "Is this the way in?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Preguntar por dónde se entra, de forma sencilla."
        },
        {
          form: "Can I come in?",
          register: "cortés neutro",
          region: "Inglés universal",
          whenToUse: "Pedir permiso para pasar a un cuarto u oficina."
        },
        {
          form: "What time do I start?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Preguntar la hora de entrada a un trabajo."
        },
        {
          form: "Go ahead, come on in.",
          register: "amistoso informal",
          region: "Norteamérica",
          whenToUse: "Invitar cálidamente a alguien a pasar."
        },
        {
          form: "Please enter through the main door.",
          register: "cortés formal",
          region: "Inglés universal; letreros y seguridad",
          whenToUse: "Un “entre por la puerta principal” formal, escrito o hablado."
        }
      ],
      prompt: "Ryan le dice a Alejandra “in English we just say ‘go in’ — no preposition.” ¿Por qué le importa esto a un hispanohablante?",
      choices: [
        "Porque en inglés la palabra “enter” está totalmente prohibida y ningún hablante nativo la usaría jamás en ningún contexto de la vida.",
        "Porque el hispanohablante tiende a calcar la “a” de “entrar a” y termina diciendo “enter to the room”, que en inglés no existe.",
        "Porque “go in” y “come in” significan cosas completamente distintas, una solo para empezar el trabajo y la otra solo para las puertas."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál oración suena natural en inglés?",
          choices: [
            "I enter to work at eight in the morning and I go out from the office at five.",
            "I make the entrance to work at eight in the morning and I exit the office at five.",
            "I start work at eight in the morning and I finish at five in the afternoon, Monday to Friday."
          ],
          answer: 2,
          tests: "start work frente al calco “enter to work”"
        },
        {
          prompt: "¿Cómo se dice en inglés natural “no me entra cómo marco el ingreso”?",
          choices: [
            "I don't get how I sign in — could you walk me through it one more time, please?",
            "It doesn't enter me how I mark the entry — could you make it again for me, please?",
            "The clock-in doesn't enter to my head — could you repeat the explanation for me, please?"
          ],
          answer: 0,
          tests: "“I don't get it” = no me entra"
        },
        {
          prompt: "Ryan quiere invitar cortésmente a alguien a pasar. ¿Qué dice?",
          choices: [
            "Follow me closely down this hallway to the very back office, right now, please, this way.",
            "Go ahead, come on in — the natural English way to wave someone in, like the Colombian “siga”.",
            "You must enter immediately through that door over there before anybody else can come inside."
          ],
          answer: 1,
          tests: "come in / go ahead como el “siga” colombiano"
        },
        {
          prompt: "¿Cuál usa “enter” de forma correcta y natural?",
          choices: [
            "The idea finally entered to my head after Ryan explained the whole sign-in routine again.",
            "You have to enter to the building by the glass door that is right on the main street.",
            "Please enter your PIN and then push the door — the sign says the entrance is on the left."
          ],
          answer: 2,
          tests: "enter directo, sin la preposición “to”"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/15-foundation-starting-finishing.js");
