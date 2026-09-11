/*
 * Lesson block: extending / habits and worth.
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
 * The two directions are mirrors: same number of dialogue turns, same number of
 * vocabulary entries, same number of culture notes, pitfalls, variations and
 * practice questions, and the same optional slots filled on the same rows. That
 * is enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "habitos-de-madrugada-en-ibague",
    level: "Extending · Habits and worth",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "work-and-employment",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "soler",
    review: "pending",
    es: {
      title: "Hablar de rutinas de madrugada en Ibagué",
      situation:
        "You are in Ibagué getting ready for an early walk with a friend. She asks about your routines, what you usually do now, and what you used to do when you lived in a colder city.",
      setting: {
        who: "Lina organizes weekend walks and knows the heat changes everyone's schedule. Theo has moved recently and is trying to describe both current habits and old routines without overusing simple present.",
        what: "A conversation about what someone usually does, what they used to do, and why soler is useful but grammatically limited.",
        when: "Very early Saturday morning, while people are filling bottles before the sun makes the walk harder.",
        where: "Ibagué, near a small meeting point for a morning walk, with the mountains visible and bakery shutters just opening.",
        why: "Because soler is defective: it really lives in the present and imperfect, takes an infinitive, and gives Spanish a clean way to say usually and used to."
      },
      address: {
        form: "tú",
        who: "Lina and Theo are walking friends, so they use tú while talking about routines without formality.",
        why: "Tú fits a relaxed early-morning plan. The grammar is advanced, but the relationship is ordinary and friendly.",
        ifYouSwitch:
          "Usted would sound like Theo is keeping distance from someone who already treats him as part of the walking group. Vos is not needed for a neutral Ibagué scene."
      },
      dialogue: [
        {
          speaker: "Lina",
          target: "¿Tú sueles levantarte tan temprano los sábados?",
          translation: "Do you usually get up this early on Saturdays?",
          pronunciation: "too SWEH-les leh-ban-TAR-teh tan tem-PRAH-noh los SAH-bah-dos",
          literal: "You usually to-get-up-yourself so early the Saturdays?",
          why: "Soler is followed by an infinitive: sueles levantarte. It packages the idea of usually without adding a separate adverb."
        },
        {
          speaker: "Theo",
          target: "Ahora sí. Suelo salir antes de que el calor apriete.",
          translation: "These days, yes. I usually go out before the heat gets intense.",
          pronunciation: "ah-OH-rah see. SWEH-loh sah-LEER AN-tes deh keh el kah-LOR ah-PREE-eh-teh",
          literal: "Now yes. I usually to-go-out before that the heat tightens.",
          why: "Suelo is the present yo form. The next verb stays in the infinitive, salir, because soler cannot stand alone here."
        },
        {
          speaker: "Lina",
          target: "Cuando vivías en Pasto, ¿también solías madrugar?",
          translation: "When you lived in Pasto, did you also used to get up early?",
          pronunciation: "KWAN-doh bee-BEE-as en PAS-toh, tam-BYEN soh-LEE-as mah-droo-GAR",
          literal: "When you-lived in Pasto, also you-used-to to-rise-early?",
          why: "Solías is the imperfect and is the clean Spanish way to say used to. Do not try to force a preterite of soler for this habit."
        },
        {
          speaker: "Theo",
          target: "No, allá solía caminar por la tarde, con saco y sin afán.",
          translation: "No, there I used to walk in the afternoon, with a sweater and no rush.",
          pronunciation: "no, ah-YAH soh-LEE-ah kah-mee-NAR por la TAR-deh, kon SAH-koh ee seen ah-FAN",
          literal: "No, there I-used-to to-walk by the afternoon, with sweater and without hurry.",
          why: "Solía plus infinitive gives an old routine that is no longer the default. The imperfect is doing real work, not just decoration."
        },
        {
          speaker: "Lina",
          target: "Tiene sentido; aquí solemos ajustar los planes al clima.",
          translation: "Makes sense; here we usually adjust plans to the weather.",
          pronunciation: "TYEH-neh sen-TEE-doh; ah-KEE soh-LEH-mos ah-hoos-TAR los PLAH-nes al KLEE-mah",
          literal: "It-has sense; here we-usually to-adjust the plans to-the climate.",
          why: "Solemos is the nosotros form. Again it needs an infinitive after it, ajustar, because soler points to the habit and the second verb names the action."
        },
        {
          speaker: "Theo",
          target: "Entonces no digas “soleré venir”; mejor digo que suelo venir temprano.",
          translation: "So don't say I'll usually come; better I say that I usually come early.",
          pronunciation: "en-TON-ses no DEE-gas soh-leh-REH beh-NEER; meh-HOR DEE-goh keh SWEH-loh beh-NEER tem-PRAH-noh",
          literal: "Then do-not say I-will-usually to-come; better I-say that I-usually to-come early.",
          why: "This names the defect plainly: soler has no normal future, preterite or command. Use the present, the imperfect or another phrase."
        }
      ],
      vocabulary: [
        {
          term: "soler",
          explanation:
            "A defective verb meaning to usually do something. It is almost always present or imperfect and is always followed by an infinitive.",
          literal: "to be accustomed to",
          useWhen:
            "You want to describe a current habit or a former routine with elegant compression.",
          avoidWhen:
            "You need a future, preterite or command. Spanish normally does not use soler there.",
          register: "neutral, slightly polished",
          region: "General Spanish; fully understood in Colombia, though everyday speech may also use normalmente or por lo general.",
          related: ["acostumbrar", "normalmente", "por lo general", "solía"],
          example: { target: "Suelo salir temprano.", translation: "I usually go out early." }
        },
        {
          term: "suelo",
          explanation:
            "I usually, followed by an infinitive. It cannot carry the action by itself.",
          literal: "I usually",
          useWhen:
            "You are describing your own current habit: suelo salir, suelo leer, suelo caminar.",
          avoidWhen:
            "You put a conjugated verb after it. Spanish wants the infinitive after soler.",
          register: "neutral",
          region: "General Spanish.",
          related: ["sueles", "suele", "solemos", "suelen"],
          example: { target: "Suelo salir antes del calor.", translation: "I usually go out before the heat." }
        },
        {
          term: "sueles",
          explanation:
            "You usually, in the tú form, followed by an infinitive.",
          literal: "you usually",
          useWhen:
            "Asking or describing another person's normal habit with tú.",
          avoidWhen:
            "You are addressing someone with usted. Then use suele.",
          register: "friendly neutral",
          region: "General Spanish.",
          related: ["suelo", "suele", "solemos", "suelen"],
          example: { target: "¿Sueles levantarte temprano?", translation: "Do you usually get up early?" }
        },
        {
          term: "solía",
          explanation:
            "Used to. The imperfect form is the cleanest way to describe an old habit that no longer frames the present.",
          literal: "I/he/she used to",
          useWhen:
            "You are talking about a former routine: where you used to live, walk, eat or spend weekends.",
          avoidWhen:
            "A single completed event is the point. Solía is about habit, not one-time occurrence.",
          register: "neutral",
          region: "General Spanish.",
          related: ["solías", "antes", "en esa época", "acostumbraba"],
          example: { target: "Solía caminar por la tarde.", translation: "I used to walk in the afternoon." }
        },
        {
          term: "solemos",
          explanation:
            "We usually, followed by an infinitive. It describes a shared habit or local pattern.",
          literal: "we usually",
          useWhen:
            "A group, family or place tends to do something regularly.",
          avoidWhen:
            "You are making a promise about the future. Use normalmente vamos a or another construction.",
          register: "neutral",
          region: "General Spanish.",
          related: ["suelen", "acostumbramos", "por lo general", "normalmente"],
          example: { target: "Solemos ajustar los planes al clima.", translation: "We usually adjust plans to the weather." }
        },
        {
          term: "madrugar",
          explanation:
            "To get up very early, often before the day is fully underway.",
          literal: "to dawn early",
          useWhen:
            "Plans start before heat, traffic, work or crowds make the day harder.",
          avoidWhen:
            "You simply wake up at a normal hour. Madrugar implies early enough to feel it.",
          register: "neutral conversational",
          region: "Very common in Colombia.",
          related: ["levantarse temprano", "trasnochar", "la madrugada", "temprano"],
          example: { target: "Solíamos madrugar los sábados.", translation: "We used to get up early on Saturdays." }
        },
        {
          term: "sin afán",
          explanation:
            "Without rush or pressure, a very Colombian way to talk about pace.",
          literal: "without hurry",
          useWhen:
            "A plan can happen calmly, without pushing the timing too hard.",
          avoidWhen:
            "There is a real deadline. Saying sin afán can sound careless if urgency matters.",
          register: "friendly informal",
          region: "Very common in Colombia.",
          related: ["con calma", "sin correr", "tranquilo", "despacio"],
          example: { target: "Solía caminar sin afán.", translation: "I used to walk with no rush." }
        }
      ],
      note:
        "Soler is awkward because it is useful and defective at the same time. It really lives in the present and imperfect: suelo, sueles, suele, solemos, suelen, and solía. It takes an infinitive every time: suelo levantarme, solía vivir allá. Do not build a future, command or preterite around it. For future habits, use a normal phrase like voy a venir normalmente; for old habits, solía is exactly the tool you want.",
      culture: [
        {
          label: "Habit is often shaped by climate",
          body:
            "In a warm city like Ibagué, people plan around heat without making a speech about it. Suelo salir temprano and solemos ajustar los planes al clima are realistic habit sentences: not rules, just the patterns that keep the day workable."
        },
        {
          label: "Solía carries nostalgia without drama",
          body:
            "Solía vivir allá or solía caminar por la tarde can sound reflective rather than sad. It says the routine belonged to another stage of life. English used to is compact; Spanish solía is just as compact and often more elegant than antes siempre."
        },
        {
          label: "A polished everyday verb",
          body:
            "Colombians may say normalmente hago eso in very casual speech, but soler is not bookish in the bad sense. It is a concise verb educated speakers use naturally when talking about habits, especially in explanations or reflective conversation."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “suelo que salgo temprano”",
          whyItFails:
            "Soler is followed directly by an infinitive. A que clause or a conjugated verb breaks the structure.",
          sayInstead: "Suelo salir temprano."
        },
        {
          mistake: "Inventing “soleré venir mañana”",
          whyItFails:
            "Soler has no normal future in living use. To talk about a future habit, use normally or usually with another verb.",
          sayInstead: "Voy a venir normalmente."
        },
        {
          mistake: "Using solía for one completed event",
          whyItFails:
            "Solía means used to as a habit, not did once. If it happened one time, use the ordinary past of the action verb.",
          sayInstead: "Antes solía caminar por la tarde."
        }
      ],
      variations: [
        {
          form: "Suelo levantarme temprano.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You are describing your current usual routine."
        },
        {
          form: "Solía vivir cerca del centro.",
          register: "neutral reflective",
          region: "General Spanish",
          whenToUse: "You are describing a former state or habit with the force of used to."
        },
        {
          form: "Solemos cambiar el plan si hace calor.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "A group usually does something under a repeated condition."
        }
      ],
      prompt: "Theo says “suelo salir” but rejects “soleré venir.” What is special about soler?",
      choices: [
        "It is defective and lives mainly in present and imperfect.",
        "It only works for prices and shop conversations.",
        "It always means to fit inside a small space."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence correctly uses soler with an infinitive?",
          choices: [
            "Suelo salgo temprano.",
            "Suelo salir temprano.",
            "Suelo que salgo temprano."
          ],
          answer: 1,
          tests: "soler followed by an infinitive"
        },
        {
          prompt: "Which sentence means “I used to live there”?",
          choices: [
            "Solía vivir allá.",
            "Suelo vivir allá.",
            "Soleré vivir allá."
          ],
          answer: 0,
          tests: "solía as used to"
        },
        {
          prompt: "Which form describes a shared current habit?",
          choices: [
            "Solemos salir temprano.",
            "Solíamos salir una vez.",
            "Soleremos salir temprano."
          ],
          answer: 0,
          tests: "solemos for we usually"
        },
        {
          prompt: "Which sentence avoids inventing a future of soler?",
          choices: [
            "Soleré venir los lunes.",
            "Suelo que vendré lunes.",
            "Voy a venir normalmente."
          ],
          answer: 2,
          tests: "using another phrase for future habit"
        }
      ]
    },
    en: {
      title: "Hablar de rutinas de madrugada en Austin",
      situation:
        "Usted está en Austin preparando una caminata temprano con una amiga. Quiere decir en inglés lo que suele hacer ahora y lo que solía hacer antes, sin traducir soler como un verbo raro.",
      setting: {
        who: "Lina organiza caminatas de fin de semana. Teo se mudó hace poco y necesita explicar rutinas actuales y hábitos antiguos de manera natural.",
        what: "Una conversación sobre lo que alguien usually does, lo que used to do, y por qué el inglés reparte esas ideas sin un verbo equivalente a soler.",
        when: "Muy temprano un sábado, mientras la gente llena botellas antes de que el sendero se llene.",
        where: "Austin, cerca de una entrada de sendero, con café en termos y chaquetas colgadas de las mochilas.",
        why: "Porque el inglés usa usually para hábito actual y used to para hábito anterior. No hay que inventar un verbo para soler."
      },
      address: {
        form: "mixed",
        who: "Lina y Teo usan you y nombres de pila como compañeros de caminata.",
        why: "El inglés no cambia de pronombre para esta cercanía. La naturalidad está en usually, used to y la frase completa.",
        ifYouSwitch:
          "No hay usted inglés que escoger. Si vuelve la charla demasiado formal, una conversación de caminata suena como entrevista."
      },
      dialogue: [
        {
          speaker: "Lina",
          target: "Do you usually get up this early on Saturdays?",
          translation: "¿Sueles levantarte tan temprano los sábados?",
          pronunciation: "du yu YU-zhu-a-li get op dis ER-li on SA-ter-deiz",
          literal: "¿Usualmente se levanta tan temprano los sábados?",
          why: "Usually hace el trabajo de soler para hábitos actuales. El verbo principal, get up, queda normal."
        },
        {
          speaker: "Teo",
          target: "These days, yes. I usually go out before the heat gets intense.",
          translation: "Ahora sí. Suelo salir antes de que el calor apriete.",
          pronunciation: "diz deiz, yes. ai YU-zhu-a-li gou aut bi-FOR da jit gets in-TENS",
          literal: "Estos días, sí. Usualmente salgo antes de que el calor se ponga intenso.",
          why: "I usually go out es más natural que I am used to go out. Usually se coloca antes del verbo principal."
        },
        {
          speaker: "Lina",
          target: "When you lived in Pasto, did you use to get up early too?",
          translation: "Cuando vivías en Pasto, ¿también solías madrugar?",
          pronunciation: "uen yu livd in PAS-to, did yu yus tu get op ER-li tu",
          literal: "Cuando vivía en Pasto, ¿también solía levantarse temprano?",
          why: "Did you use to pregunta por un hábito pasado. En la pregunta, use queda sin d porque did ya marca el pasado."
        },
        {
          speaker: "Teo",
          target: "No, there I used to walk in the afternoon, with a sweater and no rush.",
          translation: "No, allá solía caminar por la tarde, con saco y sin afán.",
          pronunciation: "nou, der ai yust tu wok in di af-ter-NUN, uid a SUE-ter and nou rash",
          literal: "No, allá solía caminar por la tarde, con saco y sin afán.",
          why: "Used to afirma un hábito anterior que ya no organiza el presente. Es el equivalente práctico de solía."
        },
        {
          speaker: "Lina",
          target: "Makes sense; here we usually adjust plans to the weather.",
          translation: "Tiene sentido; aquí solemos ajustar los planes al clima.",
          pronunciation: "meiks sens; jir ui YU-zhu-a-li a-YOST plans tu da UE-der",
          literal: "Tiene sentido; aquí usualmente ajustamos planes al clima.",
          why: "We usually keeps the habit current and shared. El inglés no necesita una forma especial para solemos."
        },
        {
          speaker: "Teo",
          target: "So I shouldn't say “I will usually used to come”; I should say I usually come early.",
          translation: "Entonces no debo decir eso; debo decir que suelo venir temprano.",
          pronunciation: "sou ai SHUD-ent sei ai wil YU-zhu-a-li yust tu kam; ai shud sei ai YU-zhu-a-li kam ER-li",
          literal: "Entonces no debería decir eso; debería decir que usualmente vengo temprano.",
          why: "La frase equivocada mezcla futuro, usually y used to. En inglés, current habit is usually; past habit is used to."
        }
      ],
      vocabulary: [
        {
          term: "usually",
          explanation:
            "La forma más común de expresar suelo, sueles, suele, solemos o suelen con hábito actual.",
          literal: "usualmente",
          useWhen:
            "Describe lo que pasa normalmente ahora: horarios, rutinas, costumbres y tendencias.",
          avoidWhen:
            "Habla de un hábito terminado del pasado. Para eso use used to.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["normally", "generally", "tend to", "used to"],
          example: { target: "I usually go out early.", translation: "Suelo salir temprano." }
        },
        {
          term: "I usually",
          explanation:
            "Suelo. La persona es sujeto y el hábito va en el verbo principal.",
          literal: "yo usualmente",
          useWhen:
            "Usted describe su propia rutina actual.",
          avoidWhen:
            "Ponerlo después del verbo sin razón. I go usually out suena torpe.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["you usually", "we usually", "I tend to", "I normally"],
          example: { target: "I usually get up early.", translation: "Suelo levantarme temprano." }
        },
        {
          term: "Do you usually...?",
          explanation:
            "¿Sueles...? para preguntar por un hábito actual.",
          literal: "¿usted usualmente...?",
          useWhen:
            "Quiere saber si algo forma parte de la rutina normal de alguien.",
          avoidWhen:
            "Pregunta por un hábito antiguo. Entonces did you use to...? encaja mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["Do you normally...?", "Do you tend to...?", "Did you use to...?", "Are you used to...?"],
          example: { target: "Do you usually get up early?", translation: "¿Sueles levantarte temprano?" }
        },
        {
          term: "used to",
          explanation:
            "Solía. Describe un hábito o estado pasado que ya no es el marco actual.",
          literal: "usado a",
          useWhen:
            "Antes vivía, caminaba, trabajaba o hacía algo de manera habitual.",
          avoidWhen:
            "Habla de una acción única terminada. Used to no es sólo pasado simple.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["would", "before", "back then", "no longer"],
          example: { target: "I used to walk in the afternoon.", translation: "Solía caminar por la tarde." }
        },
        {
          term: "we usually",
          explanation:
            "Solemos. Marca un hábito compartido del grupo.",
          literal: "nosotros usualmente",
          useWhen:
            "Una familia, grupo, ciudad o equipo hace algo normalmente.",
          avoidWhen:
            "Quiere prometer algo para el futuro. Use we will usually only if the future pattern is already clear.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["we tend to", "we normally", "people usually", "we used to"],
          example: { target: "We usually adjust plans to the weather.", translation: "Solemos ajustar los planes al clima." }
        },
        {
          term: "get up early",
          explanation:
            "Madrugar o levantarse temprano, según qué tan temprano sea.",
          literal: "levantarse temprano",
          useWhen:
            "El plan empieza antes de la rutina normal del día.",
          avoidWhen:
            "Quiere hablar de acostarse temprano. Get up es levantarse, no dormirse.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["wake up early", "sleep in", "stay up late", "early morning"],
          example: { target: "I usually get up early.", translation: "Suelo madrugar." }
        },
        {
          term: "no rush",
          explanation:
            "Sin afán o sin prisa. Habla del ritmo, no de correr literalmente.",
          literal: "sin prisa",
          useWhen:
            "Un plan puede hacerse con calma y sin presión.",
          avoidWhen:
            "Hay una fecha límite real. No rush puede sonar demasiado relajado.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["take your time", "slowly", "calmly", "not urgent"],
          example: { target: "I used to walk with no rush.", translation: "Solía caminar sin afán." }
        }
      ],
      note:
        "Para un hispanohablante, la tentación es buscar un verbo que traduzca soler. En inglés no hace falta. Hábito actual: usually o tend to. Hábito pasado: used to. La diferencia entre I usually walk and I used to walk es la misma diferencia de suelo caminar and solía caminar, pero la gramática inglesa no tiene un verbo defectivo detrás.",
      culture: [
        {
          label: "Usually es más liviano que soler",
          body:
            "Usually es una palabra cotidiana, no elegante. Sirve para rutinas de trabajo, ejercicio, comidas y clima. Si usted traduce siempre con tend to, puede sonar más analítico de lo necesario."
        },
        {
          label: "Used to marca una etapa anterior",
          body:
            "I used to live there no sólo dice pasado. Sugiere que esa vida ya no es la actual. Por eso calza tan bien con solía vivir allá: ambas frases miran una rutina desde fuera."
        },
        {
          label: "Preguntar exige use sin d",
          body:
            "En did you use to, la d desaparece porque did ya carga el pasado. Mucha gente nativa lo pronuncia casi igual que used to, pero por escrito la forma cuidada de la pregunta es use to."
        }
      ],
      pitfalls: [
        {
          mistake: "“I am used to go early.”",
          whyItFails:
            "Be used to significa estar acostumbrado a, y pide gerundio: going. Para suelo ir, la forma natural es I usually go.",
          sayInstead: "I usually go early."
        },
        {
          mistake: "“I will usually used to come.”",
          whyItFails:
            "Mezcla futuro, hábito actual y hábito pasado. Usually y used to no se apilan así.",
          sayInstead: "I usually come early."
        },
        {
          mistake: "“Did you used to get up early?”",
          whyItFails:
            "En escritura cuidada, did ya marca pasado y el verbo queda use. La pronunciación puede sonar igual, pero la forma escrita cambia.",
          sayInstead: "Did you use to get up early?"
        }
      ],
      variations: [
        {
          form: "I usually get up early.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Describe su rutina actual."
        },
        {
          form: "I used to live near downtown.",
          register: "neutro reflexivo",
          region: "Inglés universal",
          whenToUse: "Describe un estado o hábito anterior con la fuerza de solía."
        },
        {
          form: "We usually change the plan if it's hot.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Un grupo normalmente hace algo bajo una condición repetida."
        }
      ],
      prompt: "Teo says “I usually go” but “I used to walk.” ¿Qué contraste marca?",
      choices: [
        "Hábito actual frente a hábito pasado.",
        "Precio alto frente a precio barato.",
        "Espacio suficiente frente a espacio lleno."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase traduce mejor “suelo salir temprano”?",
          choices: [
            "I used to go out early.",
            "I usually go out early.",
            "I fit to go out early."
          ],
          answer: 1,
          tests: "usually for current habit"
        },
        {
          prompt: "¿Cuál frase traduce “solía vivir allá”?",
          choices: [
            "I used to live there.",
            "I usually live there.",
            "I will use live there."
          ],
          answer: 0,
          tests: "used to for former habit"
        },
        {
          prompt: "¿Cuál pregunta está escrita de forma cuidada?",
          choices: [
            "Did you used to walk?",
            "Did you use to walk?",
            "Did you usually used walk?"
          ],
          answer: 1,
          tests: "did you use to in questions"
        },
        {
          prompt: "¿Cuál frase evita mezclar used to con futuro?",
          choices: [
            "I will used to come.",
            "I will usually used come.",
            "I will usually come."
          ],
          answer: 2,
          tests: "usually for a future pattern"
        }
      ]
    }
  },
  {
    id: "caber-todos-en-el-jeep-de-zipaquira",
    level: "Extending · Habits and worth",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "caber",
    review: "pending",
    es: {
      title: "Caber todos en el carro en Zipaquirá",
      situation:
        "You are in Zipaquirá heading out to a nearby farm. There are five people, backpacks, and a small car, and the group needs to decide whether everyone fits or whether someone should go by taxi.",
      setting: {
        who: "Patricia is coordinating the ride to a family lunch. Noah is the tallest passenger and has to admit when the seating plan is physically impossible.",
        what: "A concrete car-packing conversation about people and bags fitting, the irregular forms quepo and cupo, and the idiom no cabe duda.",
        when: "Late Sunday morning, just before the family expects everyone to arrive for lunch.",
        where: "Zipaquirá, outside a residential parking bay with a small hatchback, two backpacks and one folding chair that nobody planned for.",
        why: "Because caber is spatial before it is idiomatic: no quepo, cabemos todos, no cabe en la maleta. Its yo form and preterite are very irregular."
      },
      address: {
        form: "usted",
        who: "Patricia is Noah's friend's aunt, so they use usted while solving the car problem.",
        why: "The exchange is practical but still family-adjacent and respectful. Usted keeps the negotiation polite when someone may have to change plans.",
        ifYouSwitch:
          "Tú would be possible among the younger cousins, but not with Patricia on first contact. Vos would sound out of place in this Zipaquirá scene."
      },
      dialogue: [
        {
          speaker: "Patricia",
          target: "¿Usted cree que cabemos todos en este carro?",
          translation: "Do you think we all fit in this car?",
          pronunciation: "oos-TED KREH-eh keh kah-BEH-mos TOH-dos en ES-teh KA-rroh",
          literal: "You believe that we-fit all in this car?",
          why: "Cabemos is the normal we form: can we fit, physically, in the space available. The question is concrete, not metaphorical."
        },
        {
          speaker: "Noah",
          target: "Con los morrales atrás, yo no quepo cómodo.",
          translation: "With the backpacks in the back, I don't fit comfortably.",
          pronunciation: "kon los mo-RRAH-les ah-TRAS, yo no KEH-poh KOH-moh-doh",
          literal: "With the backpacks behind, I do not fit comfortable.",
          why: "Quepo is the wild irregular yo form. Cabo would sound like cape, end or a learner guess, not like the verb caber."
        },
        {
          speaker: "Patricia",
          target: "La silla tampoco cabe en la maleta si dejamos las botas.",
          translation: "The chair doesn't fit in the trunk either if we leave the boots.",
          pronunciation: "la SEE-yah tam-POH-koh KAH-beh en la mah-LEH-tah see deh-HAH-mos las BOH-tas",
          literal: "The chair neither fits in the suitcase if we leave the boots.",
          why: "Cabe is singular because la silla is singular. Maleta in Colombia can be the car trunk as well as a suitcase, depending on context."
        },
        {
          speaker: "Noah",
          target: "Ayer cupo todo porque venían sólo tres personas.",
          translation: "Yesterday everything fit because only three people were coming.",
          pronunciation: "ah-YER KOO-poh TOH-doh por-KEH beh-NEE-an SOH-loh tres per-SOH-nas",
          literal: "Yesterday fit everything because came only three people.",
          why: "Cupo is the preterite: it fit. Caber does not form its past by just adding a regular ending."
        },
        {
          speaker: "Patricia",
          target: "Entonces no cabe duda: necesitamos otro taxi.",
          translation: "Then there is no doubt: we need another taxi.",
          pronunciation: "en-TON-ses no KAH-beh DOO-dah: neh-seh-see-TAH-mos OH-troh TAK-see",
          literal: "Then does-not fit doubt: we-need another taxi.",
          why: "No cabe duda is the idiom: there is no doubt. It grows out of the idea that no doubt can fit into the situation."
        },
        {
          speaker: "Noah",
          target: "Sí, si metemos a todos igual, no caben las piernas de nadie.",
          translation: "Yes, if we put everyone in anyway, nobody's legs will fit.",
          pronunciation: "see, see meh-TEH-mos ah TOH-dos ee-GWAL, no KAH-ben las PYER-nas deh NAH-dyeh",
          literal: "Yes, if we put all anyway, do-not fit the legs of nobody.",
          why: "Caben is plural because las piernas is plural. Caber keeps forcing you to look at the thing or people trying to fit."
        }
      ],
      vocabulary: [
        {
          term: "caber",
          explanation:
            "To fit in a physical space, and in a few idioms like no cabe duda.",
          literal: "to fit",
          useWhen:
            "People, bags, furniture, ideas or doubts either fit or do not fit inside a space or situation.",
          avoidWhen:
            "You mean clothing fits your body. Quedar is often better for clothes: la camisa me queda bien.",
          register: "neutral",
          region: "General Spanish and very common in Colombian travel and household logistics.",
          related: ["quedar", "entrar", "meter", "alcanzar"],
          example: { target: "¿Cabemos todos en el carro?", translation: "Do we all fit in the car?" }
        },
        {
          term: "quepo",
          explanation:
            "I fit. The yo form is wildly irregular: quepo, not cabo.",
          literal: "I fit",
          useWhen:
            "You are saying whether your own body fits in a seat, car, doorway or space.",
          avoidWhen:
            "You are tempted to regularise it as cabo. Cabo means other things and will not sound like caber.",
          register: "neutral",
          region: "General Spanish.",
          related: ["cabe", "cabemos", "caben", "cupe"],
          example: { target: "Yo no quepo cómodo.", translation: "I don't fit comfortably." }
        },
        {
          term: "cabemos",
          explanation:
            "We fit. Useful for cars, elevators, rooms and shared tables.",
          literal: "we fit",
          useWhen:
            "A group is checking whether everyone can fit in one space.",
          avoidWhen:
            "The subject is one object. Then use cabe.",
          register: "neutral",
          region: "General Spanish.",
          related: ["cabe", "caben", "entramos", "alcanzamos"],
          example: { target: "Cabemos todos en este carro.", translation: "We all fit in this car." }
        },
        {
          term: "cabe",
          explanation:
            "It fits. The singular present form for one object or person.",
          literal: "fits",
          useWhen:
            "One chair, suitcase, bag, person or idea fits into a space.",
          avoidWhen:
            "The subject is plural. Then caben is required.",
          register: "neutral",
          region: "General Spanish.",
          related: ["caben", "no cabe", "cupo", "queda"],
          example: { target: "La silla no cabe en la maleta.", translation: "The chair doesn't fit in the trunk." }
        },
        {
          term: "cupo",
          explanation:
            "It fit, the irregular preterite form for a singular subject.",
          literal: "it fit",
          useWhen:
            "You are reporting that something fit on one past occasion.",
          avoidWhen:
            "You are talking about an ongoing past situation. Then cabía may be the better imperfect form.",
          register: "neutral",
          region: "General Spanish.",
          related: ["cupe", "cupieron", "cabía", "cabe"],
          example: { target: "Ayer cupo todo.", translation: "Yesterday everything fit." }
        },
        {
          term: "no cabe duda",
          explanation:
            "There is no doubt. A fixed idiom, not a literal spatial problem.",
          literal: "no doubt fits",
          useWhen:
            "You are certain and want a polished way to say it.",
          avoidWhen:
            "You are talking about actual objects fitting. Then no cabe needs a real subject like la silla.",
          register: "neutral polished",
          region: "General Spanish.",
          related: ["sin duda", "es claro", "seguro", "no hay duda"],
          example: { target: "No cabe duda: necesitamos otro taxi.", translation: "There is no doubt: we need another taxi." }
        },
        {
          term: "la maleta",
          explanation:
            "A suitcase, and in Colombian car talk often the trunk.",
          literal: "the suitcase",
          useWhen:
            "Talking about luggage itself or the car space where luggage goes.",
          avoidWhen:
            "The context could confuse a suitcase with the car trunk. Add del carro if needed.",
          register: "neutral",
          region: "Common Colombian usage for the car trunk.",
          related: ["baúl", "morrales", "equipaje", "carro"],
          example: { target: "No cabe en la maleta.", translation: "It doesn't fit in the trunk." }
        }
      ],
      note:
        "Caber looks small until you need it under pressure. It answers a physical question: no quepo, ¿cabemos todos?, no cabe en la maleta, no caben las piernas. The yo form is quepo, not cabo, and the preterite is cupe or cupo. Then there is the idiom no cabe duda, which means there is no doubt. Learn the car version first; the idiom will make more sense once the spatial meaning is solid.",
      culture: [
        {
          label: "Car space is negotiated aloud",
          body:
            "Colombian family rides often involve one more bag, chair or cousin than the car expected. Caber is the verb that keeps the negotiation honest. It is less about complaining and more about avoiding a miserable ride where nobody's knees fit."
        },
        {
          label: "Maleta may be the trunk",
          body:
            "In Colombian car talk, la maleta can mean the trunk or luggage space. Baúl is also understood. Context usually makes it clear, but a traveler should not be surprised when someone says the chair does not fit en la maleta and points to the back of the car."
        },
        {
          label: "No cabe duda is formal but useful",
          body:
            "No cabe duda is more polished than claro or seguro, but it is not rare. It is the kind of phrase that appears when someone has weighed the evidence and is done debating: no cabe duda, necesitamos otro taxi."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “yo no cabo”",
          whyItFails:
            "The yo form of caber is quepo. Cabo is a different word and sounds like a regularisation error.",
          sayInstead: "Yo no quepo cómodo."
        },
        {
          mistake: "Using caber for clothes that fit well",
          whyItFails:
            "For clothes, Colombian Spanish usually uses quedar: la camisa me queda bien. Caber is more about physical space and capacity.",
          sayInstead: "La camisa me queda bien."
        },
        {
          mistake: "Saying “ayer cabió todo”",
          whyItFails:
            "The preterite is irregular. For it fit yesterday, say cupo, not cabió.",
          sayInstead: "Ayer cupo todo."
        }
      ],
      variations: [
        {
          form: "Yo no quepo atrás.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Your own body does not fit in the back seat or space."
        },
        {
          form: "¿Cabemos todos en el ascensor?",
          register: "neutral practical",
          region: "General Spanish",
          whenToUse: "A group is checking whether everyone fits in an elevator or small space."
        },
        {
          form: "No cabe duda de que falta espacio.",
          register: "neutral polished",
          region: "General Spanish",
          whenToUse: "You want the idiom there is no doubt, not a literal fit statement."
        }
      ],
      prompt: "Noah says “yo no quepo” instead of “yo no cabo.” What is the point?",
      choices: [
        "Caber has the irregular yo form quepo.",
        "Caber only means a shop price is high.",
        "Caber has no present tense forms."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses the correct yo form?",
          choices: [
            "Yo no cabo atrás.",
            "Yo no quepo atrás.",
            "Yo no cabio atrás."
          ],
          answer: 1,
          tests: "quepo as the yo form"
        },
        {
          prompt: "Which sentence asks if the whole group fits?",
          choices: [
            "¿Cabemos todos aquí?",
            "¿Valemos todos aquí?",
            "¿Solemos todos aquí?"
          ],
          answer: 0,
          tests: "cabemos for we fit"
        },
        {
          prompt: "Which sentence correctly uses the preterite?",
          choices: [
            "Ayer cabió todo.",
            "Ayer caber todo.",
            "Ayer cupo todo."
          ],
          answer: 2,
          tests: "cupo as preterite"
        },
        {
          prompt: "Which phrase means there is no doubt?",
          choices: [
            "No vale duda.",
            "No cabe duda.",
            "No suele duda."
          ],
          answer: 1,
          tests: "no cabe duda as an idiom"
        }
      ]
    },
    en: {
      title: "Caber todos en el carro en Dublín",
      situation:
        "Usted está en Dublín saliendo hacia un almuerzo familiar. Hay cinco personas, morrales y un carro pequeño, y necesita decir en inglés si todos caben o si hace falta otro taxi.",
      setting: {
        who: "Patricia coordina el viaje al almuerzo familiar. Noah es el pasajero más alto y debe admitir cuándo el plan de sillas es físicamente imposible.",
        what: "Una conversación concreta sobre personas y maletas que fit, el pasado fit, y la diferencia entre fit in, fit into y there is no doubt.",
        when: "Domingo al final de la mañana, justo antes de que la familia espere a todos para almorzar.",
        where: "Dublín, fuera de una casa adosada con un carro pequeño, dos morrales y una silla plegable que nadie había previsto.",
        why: "Porque fit traduce caber en espacios físicos, pero no comparte las irregularidades de quepo, cupe o cupo."
      },
      address: {
        form: "mixed",
        who: "Patricia y Noah usan you; la relación es respetuosa pero la gramática no cambia.",
        why: "El inglés marca cortesía con do you think, maybe y should we, no con una segunda persona distinta.",
        ifYouSwitch:
          "No hay usted inglés. Hacer la conversación demasiado formal no resuelve el problema del carro pequeño."
      },
      dialogue: [
        {
          speaker: "Patricia",
          target: "Do you think we all fit in this car?",
          translation: "¿Usted cree que cabemos todos en este carro?",
          pronunciation: "du yu think ui ol fit in dis kar",
          literal: "¿Cree usted que todos cabemos en este carro?",
          why: "Fit in this car es la forma directa para caber en un espacio. El inglés no cambia el verbo por we."
        },
        {
          speaker: "Noah",
          target: "With the backpacks in the back, I don't fit comfortably.",
          translation: "Con los morrales atrás, yo no quepo cómodo.",
          pronunciation: "uid da BAK-paks in da bak, ai dont fit KOM-for-ta-bli",
          literal: "Con los morrales atrás, no quepo cómodamente.",
          why: "I don't fit evita cualquier equivalente raro de quepo. Fit se mantiene igual con I, you, we y they."
        },
        {
          speaker: "Patricia",
          target: "The chair doesn't fit in the trunk if we leave the boots.",
          translation: "La silla no cabe en la maleta si dejamos las botas.",
          pronunciation: "da cher DA-zent fit in da trunk if ui liv da buts",
          literal: "La silla no cabe en el baúl si dejamos las botas.",
          why: "Doesn't fit marca singular con doesn't. Trunk es más claro que suitcase para la maleta del carro."
        },
        {
          speaker: "Noah",
          target: "Yesterday everything fit because only three people came.",
          translation: "Ayer cupo todo porque vinieron sólo tres personas.",
          pronunciation: "YES-ter-dei EV-ri-thing fit bi-KOZ ON-li thri PI-pol keim",
          literal: "Ayer todo cupo porque sólo tres personas vinieron.",
          why: "Fit también es pasado. No diga fitted para esta idea general de caber; fitted existe, pero apunta más a ajustar o instalar algo."
        },
        {
          speaker: "Patricia",
          target: "Then there is no doubt: we need another taxi.",
          translation: "Entonces no cabe duda: necesitamos otro taxi.",
          pronunciation: "den der iz nou daut: ui nid a-NA-der TAK-si",
          literal: "Entonces no hay duda: necesitamos otro taxi.",
          why: "There is no doubt traduce el idiom no cabe duda. No intente meter fit into doubt en inglés."
        },
        {
          speaker: "Noah",
          target: "Yes, if we squeeze everyone in, nobody's legs fit.",
          translation: "Sí, si metemos a todos igual, no caben las piernas de nadie.",
          pronunciation: "yes, if ui skuiz EV-ri-uan in, NOU-ba-diz legz fit",
          literal: "Sí, si apretamos a todos adentro, las piernas de nadie caben.",
          why: "Squeeze everyone in añade la idea de meter gente a la fuerza. Nobody's legs fit conserva el problema físico."
        }
      ],
      vocabulary: [
        {
          term: "fit",
          explanation:
            "Caber o quedar, según el contexto. En esta escena es caber en un espacio físico.",
          literal: "caber",
          useWhen:
            "Personas, maletas, muebles o ideas caben en un espacio, horario o situación.",
          avoidWhen:
            "Habla de valor o precio. Para valer use cost, be worth o be valid según el caso.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["fit in", "fit into", "squeeze in", "space"],
          example: { target: "We all fit in this car.", translation: "Cabemos todos en este carro." }
        },
        {
          term: "I fit",
          explanation:
            "Quepo. El inglés no tiene una forma irregular especial para yo.",
          literal: "yo quepo",
          useWhen:
            "Usted dice si su propio cuerpo cabe en un asiento o espacio.",
          avoidWhen:
            "Habla de ropa que le queda bien. That shirt fits me es correcto, pero el español suele usar quedar.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I don't fit", "we fit", "it fits", "they fit"],
          example: { target: "I don't fit comfortably.", translation: "No quepo cómodo." }
        },
        {
          term: "we fit",
          explanation:
            "Cabemos. La forma del verbo no cambia por we.",
          literal: "nosotros cabemos",
          useWhen:
            "Un grupo revisa si todos pueden entrar en un carro, ascensor, cuarto o mesa.",
          avoidWhen:
            "Quiere decir que el plan conviene. Work puede ser mejor: that works for us.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["we all fit", "can fit", "fit together", "fit in"],
          example: { target: "Do we all fit here?", translation: "¿Cabemos todos aquí?" }
        },
        {
          term: "doesn't fit",
          explanation:
            "No cabe o no queda. Doesn't marca un sujeto singular.",
          literal: "no cabe",
          useWhen:
            "Una silla, maleta, persona o pieza no entra en el espacio.",
          avoidWhen:
            "El sujeto es plural. Then use don't fit.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["don't fit", "won't fit", "too big", "not enough room"],
          example: { target: "The chair doesn't fit in the trunk.", translation: "La silla no cabe en la maleta." }
        },
        {
          term: "fit (past)",
          explanation:
            "Cupo o cupieron. En inglés, fit puede ser presente y pasado.",
          literal: "cupo",
          useWhen:
            "Dice que algo cupo en una ocasión pasada.",
          avoidWhen:
            "Habla de instalar o ajustar una pieza. Fitted puede aparecer ahí, pero no es la forma principal para caber.",
          register: "neutro",
          region: "Inglés universal; también se oye fitted en algunas variedades, pero fit es seguro aquí.",
          related: ["fitted", "could fit", "managed to fit", "squeezed in"],
          example: { target: "Yesterday everything fit.", translation: "Ayer cupo todo." }
        },
        {
          term: "there is no doubt",
          explanation:
            "No cabe duda. Es la traducción idiomática, no literal.",
          literal: "no hay duda",
          useWhen:
            "Quiere afirmar certeza de forma clara o un poco enfática.",
          avoidWhen:
            "Está hablando de objetos que caben. Entonces fit es la palabra literal.",
          register: "neutro pulido",
          region: "Inglés universal.",
          related: ["no doubt", "clearly", "without a doubt", "certainly"],
          example: { target: "There is no doubt we need a taxi.", translation: "No cabe duda de que necesitamos taxi." }
        },
        {
          term: "trunk",
          explanation:
            "El baúl o la maleta del carro en inglés norteamericano.",
          literal: "baúl",
          useWhen:
            "Habla del espacio para equipaje detrás del carro.",
          avoidWhen:
            "Está en inglés británico o irlandés muy local. Boot será común allí, pero trunk se entiende ampliamente.",
          register: "neutro",
          region: "Común en inglés norteamericano; boot es común en Irlanda y Gran Bretaña.",
          related: ["boot", "back seat", "luggage", "car"],
          example: { target: "It doesn't fit in the trunk.", translation: "No cabe en la maleta." }
        }
      ],
      note:
        "Fit es mucho más regular que caber. No hay quepo ni cupo: I fit, we fit, it fits; yesterday it fit. La dificultad está en escoger la preposición y el contexto: fit in a car, fit into a bag, fit on a shelf. Para no cabe duda, no traduzca con fit; diga there is no doubt.",
      culture: [
        {
          label: "Fit es físico antes que metafórico",
          body:
            "En una escena de carro, fit tiene sentido inmediato: piernas, morrales, sillas y baúl. Aprenderlo ahí evita usarlo como comodín para todo lo que en español suena a caber."
        },
        {
          label: "Trunk y boot conviven",
          body:
            "En Irlanda y el Reino Unido, boot es la palabra local para baúl. En Norteamérica, trunk. Como muchos cursos enseñan trunk, la palabra se entiende, pero oír boot no debería sorprenderlo en Dublín."
        },
        {
          label: "There is no doubt no habla de espacio",
          body:
            "No cabe duda tiene una imagen espacial en español, pero el inglés no usa fit para ese idiom. There is no doubt es la función correcta. Traducir imagen por imagen produce una frase rara."
        }
      ],
      pitfalls: [
        {
          mistake: "“I don't can fit.”",
          whyItFails:
            "Can y don't no se combinan así. Para no quepo, basta I don't fit; para no puedo caber, use I can't fit.",
          sayInstead: "I don't fit comfortably."
        },
        {
          mistake: "“Yesterday everything fitted.”",
          whyItFails:
            "Fitted existe para ajustar o instalar, pero para cupo todo en un espacio, fit como pasado es la opción más natural.",
          sayInstead: "Yesterday everything fit."
        },
        {
          mistake: "“No doubt fits.”",
          whyItFails:
            "Es una traducción literal de no cabe duda. El inglés usa there is no doubt.",
          sayInstead: "There is no doubt."
        }
      ],
      variations: [
        {
          form: "I don't fit in the back.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Su cuerpo no cabe en el asiento o espacio."
        },
        {
          form: "Do we all fit in the elevator?",
          register: "neutro práctico",
          region: "Inglés universal",
          whenToUse: "Un grupo revisa si todos caben en un ascensor o espacio pequeño."
        },
        {
          form: "There is no doubt we need more space.",
          register: "neutro pulido",
          region: "Inglés universal",
          whenToUse: "Quiere el idiom no cabe duda, no una frase literal de espacio."
        }
      ],
      prompt: "Noah says “I don't fit” for “no quepo.” ¿Qué pasa con fit in English?",
      choices: [
        "It stays regular with I.",
        "It becomes cape with I.",
        "It only works for prices."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase traduce mejor “no quepo atrás”?",
          choices: [
            "I don't cape in the back.",
            "I don't fit in the back.",
            "I don't worth in the back."
          ],
          answer: 1,
          tests: "I don't fit as no quepo"
        },
        {
          prompt: "¿Cuál pregunta revisa si todo el grupo cabe?",
          choices: [
            "Do we all fit here?",
            "Do we all worth here?",
            "Do we all usually here?"
          ],
          answer: 0,
          tests: "we all fit for cabemos todos"
        },
        {
          prompt: "¿Cuál frase usa bien el pasado de fit?",
          choices: [
            "Yesterday everything fitted.",
            "Yesterday everything fitting.",
            "Yesterday everything fit."
          ],
          answer: 2,
          tests: "fit as past for cupo"
        },
        {
          prompt: "¿Cuál frase traduce “no cabe duda”?",
          choices: [
            "No doubt fits.",
            "There is no doubt.",
            "It doesn't fit doubt."
          ],
          answer: 1,
          tests: "there is no doubt as idiom"
        }
      ]
    }
  },
  {
    id: "valer-la-pena-en-guatape",
    level: "Extending · Habits and worth",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "valer",
    review: "pending",
    es: {
      title: "Decidir si vale la pena en Guatapé",
      situation:
        "You are in Guatapé looking at a boat ride and some crafts. You need to ask how much it costs, decide whether it is worth it, and hear a warning with más vale que before the dock fills up.",
      setting: {
        who: "Diana sells boat tickets and small crafts near the waterfront. Riley is trying to spend carefully without reducing every decision to the cheapest option.",
        what: "A price-and-worth conversation: how much something costs, whether it is worth it, and why vale is not the Colombian way to say OK.",
        when: "Midday on a busy weekend, when the next boat is close to full and prices are being checked quickly.",
        where: "Guatapé, beside the reservoir, with ticket signs, craft stalls and people deciding whether the view is worth the wait.",
        why: "Because valer is essential in shops: ¿cuánto vale? is as Colombian as ¿cuánto cuesta? It also gives valgo, vale la pena and más vale que plus subjunctive."
      },
      address: {
        form: "usted",
        who: "Diana uses usted with customers, and Riley mirrors it while asking prices.",
        why: "The tone is friendly but commercial. Usted keeps bargaining and advice from sounding pushy.",
        ifYouSwitch:
          "Tú would be possible only after a much more casual connection. Vos is not the service-counter default for this tourist waterfront scene."
      },
      dialogue: [
        {
          speaker: "Riley",
          target: "Buenas, ¿cuánto vale el paseo corto en lancha?",
          translation: "Hi, how much is the short boat ride?",
          pronunciation: "BWEH-nas, KWAN-toh BAH-leh el pah-SEH-oh KOR-toh en LAN-chah",
          literal: "Greetings, how-much is-worth the ride short in boat?",
          why: "¿Cuánto vale? is a completely normal Colombian price question, alongside ¿cuánto cuesta? It is not fancy."
        },
        {
          speaker: "Diana",
          target: "Vale treinta mil e incluye chaleco y guía.",
          translation: "It's thirty thousand and includes a life jacket and guide.",
          pronunciation: "BAH-leh TREIN-tah meel ee een-KLOO-yeh chah-LEH-koh ee GHEE-ah",
          literal: "It-is-worth thirty thousand and includes vest and guide.",
          why: "Vale gives the price. In Colombian Spanish, do not hear this vale as the Spanish-of-Spain conversational OK."
        },
        {
          speaker: "Riley",
          target: "¿Y de verdad vale la pena si sólo tengo una hora?",
          translation: "And is it really worth it if I only have one hour?",
          pronunciation: "ee deh ber-DAD BAH-leh la PEH-nah see SOH-loh TEN-goh OO-nah OH-rah",
          literal: "And of truth is-worth the pain if only I-have one hour?",
          why: "Vale la pena means it is worth it. The literal pain is not felt anymore; the phrase weighs benefit against cost or effort."
        },
        {
          speaker: "Diana",
          target: "Sí, pero más vale que llegue al muelle antes de la una.",
          translation: "Yes, but you'd better get to the dock before one.",
          pronunciation: "see, PEH-roh mas BAH-leh keh YEH-geh al MWEH-yeh AN-tes deh la OO-nah",
          literal: "Yes, but more is-worth that you-arrive to-the dock before the one.",
          why: "Más vale que takes the subjunctive: llegue, not llega. It means you'd better, with a warning tucked inside."
        },
        {
          speaker: "Riley",
          target: "Listo, yo valgo poco como negociador, pero entiendo la advertencia.",
          translation: "Okay, I'm not worth much as a negotiator, but I understand the warning.",
          pronunciation: "LEES-toh, yo BAL-goh POH-koh KOH-moh neh-goh-syah-DOR, PEH-roh en-TYEN-doh la ad-ber-TEN-syah",
          literal: "Ready, I am-worth little as negotiator, but I-understand the warning.",
          why: "Valgo is the irregular yo form. The joke works because valer can describe worth beyond price, including a person's usefulness at a task."
        },
        {
          speaker: "Diana",
          target: "Listo, entonces no diga “vale” para aceptar; aquí decimos “listo” o “de una”.",
          translation: "Great, then don't say vale to accept; here we say listo or de una.",
          pronunciation: "LEES-toh, en-TON-ses no DEE-gah BAH-leh PAH-rah ah-sep-TAR; ah-KEE deh-SEE-mos LEES-toh o deh OO-nah",
          literal: "Ready, then do-not say OK to accept; here we-say ready or in one.",
          why: "This is the Colombian register warning: conversational vale for OK is Spanish from Spain. Colombians normally say listo, bueno or de una."
        }
      ],
      vocabulary: [
        {
          term: "valer",
          explanation:
            "To be worth or cost. In Colombian shops, ¿cuánto vale? is an everyday price question.",
          literal: "to be worth",
          useWhen:
            "Asking prices, weighing value, or saying something is worth effort, money or risk.",
          avoidWhen:
            "You mean OK in Colombian conversation. Vale as OK is not the local default.",
          register: "neutral",
          region: "General Spanish; ¿cuánto vale? is very common in Colombia.",
          related: ["costar", "precio", "valor", "servir"],
          example: { target: "¿Cuánto vale el paseo?", translation: "How much is the ride?" }
        },
        {
          term: "¿cuánto vale?",
          explanation:
            "How much is it? A normal Colombian alternative to ¿cuánto cuesta?",
          literal: "how much is it worth?",
          useWhen:
            "At a shop, stall, ticket window or informal sale, asking the price.",
          avoidWhen:
            "You need a formal invoice line. Then precio or costo may appear in the paperwork.",
          register: "neutral transactional",
          region: "Very common in Colombia.",
          related: ["¿cuánto cuesta?", "¿qué precio tiene?", "vale", "precio"],
          example: { target: "¿Cuánto vale esta mochila?", translation: "How much is this backpack?" }
        },
        {
          term: "vale",
          explanation:
            "It costs or is worth. In Colombia, it is not the usual conversational word for OK.",
          literal: "is worth",
          useWhen:
            "Giving a price or saying something has value: vale treinta mil, vale mucho.",
          avoidWhen:
            "You are accepting a plan. Colombians usually say listo, bueno or de una instead.",
          register: "neutral",
          region: "General Spanish for price; OK-style vale is Spain, not Colombia.",
          related: ["valgo", "valen", "costar", "listo"],
          example: { target: "Vale treinta mil.", translation: "It's thirty thousand." }
        },
        {
          term: "vale la pena",
          explanation:
            "It is worth it. One of the most common ways to weigh effort, time, money or risk.",
          literal: "it is worth the pain",
          useWhen:
            "The benefit justifies the price, wait, walk, study or inconvenience.",
          avoidWhen:
            "You mean a literal penalty or sorrow. Pena here is part of a fixed value phrase.",
          register: "neutral",
          region: "General Spanish and extremely common in Colombia.",
          related: ["merece la pena", "conviene", "sale bien", "compensa"],
          example: { target: "De verdad vale la pena.", translation: "It really is worth it." }
        },
        {
          term: "más vale que",
          explanation:
            "You'd better. It takes the subjunctive when followed by a full clause.",
          literal: "more is worth that",
          useWhen:
            "Giving a warning or strong practical recommendation.",
          avoidWhen:
            "You want a soft suggestion. Más vale que can sound like consequences are coming.",
          register: "firm conversational",
          region: "General Spanish.",
          related: ["mejor que", "conviene que", "ojo con", "procure que"],
          example: { target: "Más vale que llegue temprano.", translation: "You'd better arrive early." }
        },
        {
          term: "valgo",
          explanation:
            "I am worth. The irregular yo form of valer.",
          literal: "I am worth",
          useWhen:
            "You are talking about your own value, usefulness or worth in a role, often jokingly.",
          avoidWhen:
            "You are asking a price. Things use vale or valen, not valgo.",
          register: "neutral",
          region: "General Spanish.",
          related: ["vale", "valen", "valía", "valió"],
          example: { target: "Yo valgo poco como negociador.", translation: "I'm not worth much as a negotiator." }
        },
        {
          term: "listo",
          explanation:
            "Okay, done, ready. A Colombian conversational answer where Spain might use vale.",
          literal: "ready",
          useWhen:
            "Accepting a plan, confirming a small agreement or closing a transaction.",
          avoidWhen:
            "You are talking about price or worth. Then vale is the verb you need.",
          register: "friendly conversational",
          region: "Very common in Colombia.",
          related: ["bueno", "de una", "hágale", "perfecto"],
          example: { target: "Listo, llego antes de la una.", translation: "Okay, I'll arrive before one." }
        }
      ],
      note:
        "Valer is the shop verb learners need quickly: ¿cuánto vale? is as normal as ¿cuánto cuesta? in Colombia. It also reaches into judgment: vale la pena asks whether something is worth time, money or effort. The yo form is valgo, and más vale que belongs to this tier because it takes the subjunctive: más vale que llegue temprano. One warning: conversational vale for OK is not Colombian. Say listo, bueno or de una.",
      culture: [
        {
          label: "Worth is not only price",
          body:
            "A boat ride can vale treinta mil and still not valer la pena if the line is long or the weather is bad. Colombian Spanish uses the same verb family for cost and value, so the conversation naturally moves from price to judgment."
        },
        {
          label: "Listo beats vale in Colombia",
          body:
            "Many learners pick up vale from Spanish media and use it as OK everywhere. Colombians understand it, but it sounds imported from Spain. At a counter or in a plan, listo, bueno, de una and hágale sound much more local."
        },
        {
          label: "Más vale que is a friendly warning",
          body:
            "Más vale que llegue temprano is not just advice. It implies that arriving late has consequences: the boat fills, the seat disappears, the plan gets complicated. The subjunctive after que is part of that warning structure."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “vale” as your Colombian OK",
          whyItFails:
            "Colombians know it, but it is not the local conversational default. It sounds like Spain or like a learner copying subtitles.",
          sayInstead: "Listo, de una."
        },
        {
          mistake: "Saying “más vale que llegas temprano”",
          whyItFails:
            "After más vale que, Spanish uses the subjunctive. The warning points toward a desired action, not a plain fact.",
          sayInstead: "Más vale que llegues temprano."
        },
        {
          mistake: "Saying “yo valo”",
          whyItFails:
            "The yo form is irregular: valgo. It belongs with verbs whose first person changes more than the rest.",
          sayInstead: "Yo valgo poco como negociador."
        }
      ],
      variations: [
        {
          form: "¿Cuánto vale esta entrada?",
          register: "neutral transactional",
          region: "Very common in Colombia",
          whenToUse: "You are asking a price at a shop, stall or ticket window."
        },
        {
          form: "Sí vale la pena esperar.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "The benefit justifies the wait or effort."
        },
        {
          form: "Más vale que llegue temprano.",
          register: "firm conversational",
          region: "General Spanish",
          whenToUse: "You are giving a warning and need the subjunctive after que."
        }
      ],
      prompt: "Diana says “vale treinta mil” and “vale la pena.” What does valer cover here?",
      choices: [
        "Both price and worth.",
        "Only physical fit.",
        "Only old habits."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which question is normal Colombian shop Spanish?",
          choices: [
            "¿Cuánto cabe?",
            "¿Cuánto vale?",
            "¿Cuánto suele?"
          ],
          answer: 1,
          tests: "¿cuánto vale? for price"
        },
        {
          prompt: "Which phrase means it is worth it?",
          choices: [
            "Cabe la pena.",
            "Suele la pena.",
            "Vale la pena."
          ],
          answer: 2,
          tests: "vale la pena"
        },
        {
          prompt: "Which warning uses the subjunctive correctly?",
          choices: [
            "Más vale que llegues temprano.",
            "Más vale que llegas temprano.",
            "Más vale que llegar temprano."
          ],
          answer: 0,
          tests: "subjunctive after más vale que"
        },
        {
          prompt: "Which reply sounds Colombian for OK?",
          choices: [
            "Vale, vale, venga.",
            "Listo, de una.",
            "Valgo, de una."
          ],
          answer: 1,
          tests: "listo or de una instead of Spain-style vale"
        }
      ]
    },
    en: {
      title: "Decidir si vale la pena en Boston",
      situation:
        "Usted está en Boston mirando un paseo corto por el puerto y unas artesanías. Necesita preguntar en inglés cuánto vale, si vale la pena y cómo dar una advertencia sin traducir más vale palabra por palabra.",
      setting: {
        who: "Diana vende tiquetes y artesanías cerca del agua. Riley intenta gastar con cuidado sin reducir cada decisión a lo más barato.",
        what: "Una conversación de precio y valor: cuánto cuesta algo, si vale la pena y cómo decir mejor llegue temprano en inglés.",
        when: "Mediodía de un fin de semana lleno, cuando el próximo paseo está casi completo y las preguntas de precio van rápido.",
        where: "Boston, junto al puerto, con letreros de tiquetes, puestos de artesanías y gente calculando si la vista justifica la espera.",
        why: "Porque valer se reparte en inglés entre cost, be worth it, be worth y you'd better. No hay una sola forma para todo."
      },
      address: {
        form: "mixed",
        who: "Diana y Riley usan you y fórmulas de vendedor y cliente.",
        why: "El inglés no cambia de pronombre en la transacción. La cortesía aparece en how much is, is it worth it y you'd better.",
        ifYouSwitch:
          "No hay usted inglés. Usar sir o madam a cada rato puede sonar más rígido que amable."
      },
      dialogue: [
        {
          speaker: "Riley",
          target: "Hi, how much is the short boat ride?",
          translation: "Buenas, ¿cuánto vale el paseo corto en lancha?",
          pronunciation: "jai, jau mach iz da short bout raid",
          literal: "Hola, ¿cuánto es el paseo corto en bote?",
          why: "How much is...? es la pregunta simple por precio. También puede decir how much does it cost?, pero no necesita worth aquí."
        },
        {
          speaker: "Diana",
          target: "It's thirty dollars and includes a life jacket and guide.",
          translation: "Vale treinta dólares e incluye chaleco y guía.",
          pronunciation: "its THER-di DA-larz and in-KLUDZ a LAIF ya-ket and gaid",
          literal: "Es treinta dólares e incluye chaleco y guía.",
          why: "It's thirty dollars es más natural que it values thirty dollars. Cost puede aparecer, pero esta respuesta corta es normal en un puesto."
        },
        {
          speaker: "Riley",
          target: "And is it really worth it if I only have one hour?",
          translation: "¿Y de verdad vale la pena si sólo tengo una hora?",
          pronunciation: "and iz it RI-li werth it if ai ON-li jav uan A-uer",
          literal: "¿Y realmente vale eso si sólo tengo una hora?",
          why: "Worth it traduce vale la pena. It is worth the pain sería literal y no funciona."
        },
        {
          speaker: "Diana",
          target: "Yes, but you'd better get to the dock before one.",
          translation: "Sí, pero más vale que llegue al muelle antes de la una.",
          pronunciation: "yes, bat yud BE-ter get tu da dok bi-FOR uan",
          literal: "Sí, pero será mejor que llegue al muelle antes de la una.",
          why: "You'd better da la advertencia de más vale que. No es exactamente better como comparación; implica consecuencias."
        },
        {
          speaker: "Riley",
          target: "Okay, I'm not worth much as a negotiator, but I get the warning.",
          translation: "Listo, yo valgo poco como negociador, pero entiendo la advertencia.",
          pronunciation: "ou-KEI, aim not werth mach az a ne-GOU-shi-ei-tor, bat ai get da WOR-ning",
          literal: "Está bien, no valgo mucho como negociador, pero entiendo la advertencia.",
          why: "“I'm worth much” necesitaría una negación o una cantidad. El chiste conserva worth para valor personal, pero el inglés no usa una forma especial de yo como valgo."
        },
        {
          speaker: "Diana",
          target: "Good. Here, say “okay” or “sounds good”; don't use “vale” for OK.",
          translation: "Listo. Aquí diga okay o sounds good; no use vale para aceptar.",
          pronunciation: "gud. jir, sei ou-KEI or saundz gud; dont yuz BAH-leh for ou-KEI",
          literal: "Bien. Aquí, diga okay o suena bien; no use vale para OK.",
          why: "En inglés, okay es normal. La advertencia importa cuando se vuelve al español: el español colombiano no usa vale como su OK habitual."
        }
      ],
      vocabulary: [
        {
          term: "cost",
          explanation:
            "Costar o valer cuando pregunta o dice un precio.",
          literal: "costar",
          useWhen:
            "Habla del precio de tiquetes, productos, servicios o planes.",
          avoidWhen:
            "Juzga si algo vale la pena. Entonces use be worth it.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["price", "be worth", "charge", "pay"],
          example: { target: "How much does the ride cost?", translation: "¿Cuánto vale el paseo?" }
        },
        {
          term: "how much is it?",
          explanation:
            "¿Cuánto vale? La pregunta corta y natural por precio.",
          literal: "¿cuánto es?",
          useWhen:
            "Está en un puesto, tienda o taquilla y el objeto ya está claro.",
          avoidWhen:
            "Necesita sonar más específico. Then ask how much does it cost?",
          register: "neutro transactional",
          region: "Inglés universal.",
          related: ["how much does it cost?", "what's the price?", "is it extra?", "charge"],
          example: { target: "How much is this ticket?", translation: "¿Cuánto vale esta entrada?" }
        },
        {
          term: "it's worth",
          explanation:
            "Vale, en sentido de tener valor. Necesita precio o cantidad después.",
          literal: "vale",
          useWhen:
            "Dice cuánto vale algo o qué valor tiene.",
          avoidWhen:
            "Quiere decir okay. En inglés use okay; en Colombia use listo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["costs", "is valued at", "is worth it", "value"],
          example: { target: "It's worth thirty dollars.", translation: "Vale treinta dólares." }
        },
        {
          term: "worth it",
          explanation:
            "Vale la pena. Juzga si el beneficio compensa el costo o esfuerzo.",
          literal: "vale eso",
          useWhen:
            "Pregunta o afirma si una espera, compra, caminata o estudio compensa.",
          avoidWhen:
            "Sólo pide el precio. How much is it? es más directo.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["worth the wait", "worth the money", "pay off", "not worth it"],
          example: { target: "It's really worth it.", translation: "De verdad vale la pena." }
        },
        {
          term: "you'd better",
          explanation:
            "Más vale que. Es una advertencia o recomendación fuerte.",
          literal: "sería mejor que",
          useWhen:
            "Quiere avisar que conviene hacer algo porque hay consecuencias.",
          avoidWhen:
            "Sólo quiere sugerir suavemente. Maybe you should suena menos fuerte.",
          register: "firme conversacional",
          region: "Inglés universal.",
          related: ["you should", "make sure you", "better not", "be careful to"],
          example: { target: "You'd better arrive early.", translation: "Más vale que llegue temprano." }
        },
        {
          term: "I'm worth",
          explanation:
            "Valgo. En inglés no cambia por yo, pero necesita complemento: worth much, worth a lot.",
          literal: "yo valgo",
          useWhen:
            "Habla de valor personal, utilidad o cuánto aporta alguien en broma o en serio.",
          avoidWhen:
            "Pide un precio de objeto. Entonces use “how much is it?” o “what does it cost?”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["it's worth", "be valuable", "value", "worthless"],
          example: { target: "I'm not worth much as a negotiator.", translation: "Valgo poco como negociador." }
        },
        {
          term: "okay",
          explanation:
            "OK, listo o bueno. Es la aceptación normal en inglés.",
          literal: "okay",
          useWhen:
            "Acepta una propuesta, confirma un plan o muestra que entendió.",
          avoidWhen:
            "Está hablando español colombiano y quiere sonar local. Entonces listo or de una may sound better than vale.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["sounds good", "all right", "sure", "good"],
          example: { target: "Okay, I'll arrive before one.", translation: "Listo, llego antes de la una." }
        }
      ],
      note:
        "Valer obliga a escoger en inglés. Precio: how much is it? or how much does it cost? Valor: it's worth thirty dollars. Vale la pena: it's worth it. Más vale que: you'd better. Yo valgo: I'm worth. La frase española vale como OK no debe viajar automáticamente; en inglés okay sí es normal, pero en español colombiano listo suele sonar más local.",
      culture: [
        {
          label: "Worth it pesa más que precio",
          body:
            "Is it worth it? pregunta por tiempo, energía y oportunidad, no sólo por dólares. Puede que algo cueste poco y no valga la pena, o cueste bastante y sí compense. Esa diferencia también existe en vale la pena."
        },
        {
          label: "You'd better trae consecuencias",
          body:
            "You'd better get there before one no es una sugerencia suave. Dice que si no llega, algo malo o incómodo puede pasar: se llena el bote, pierde el cupo, cambia el precio. Por eso traduce bien más vale que."
        },
        {
          label: "Okay no resuelve el español colombiano",
          body:
            "En inglés, okay es perfectamente común. El problema aparece cuando el aprendiz usa vale como OK en Colombia porque lo oyó en series españolas. Lo entenderán, pero listo, bueno o de una suenan más propios."
        }
      ],
      pitfalls: [
        {
          mistake: "“How much worth the ticket?”",
          whyItFails:
            "La pregunta de precio necesita is o does cost. Worth no funciona solo como verbo en esa estructura.",
          sayInstead: "How much is the ticket?"
        },
        {
          mistake: "“It is worth the pain.”",
          whyItFails:
            "Es traducción literal de vale la pena. La frase inglesa natural es worth it.",
          sayInstead: "It's worth it."
        },
        {
          mistake: "“More worth that you arrive early.”",
          whyItFails:
            "Más vale que no se traduce palabra por palabra. La advertencia inglesa es you'd better.",
          sayInstead: "You'd better arrive early."
        }
      ],
      variations: [
        {
          form: "How much is this ticket?",
          register: "neutro transactional",
          region: "Inglés universal",
          whenToUse: "Pregunta precio en una tienda, puesto o taquilla."
        },
        {
          form: "It's worth the wait.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "El beneficio justifica esperar."
        },
        {
          form: "You'd better arrive early.",
          register: "firme conversacional",
          region: "Inglés universal",
          whenToUse: "Quiere dar una advertencia con la fuerza de más vale que."
        }
      ],
      prompt: "Diana uses “how much is it?”, “worth it” and “you'd better.” ¿Qué muestra sobre valer?",
      choices: [
        "Que inglés reparte valer en varias frases.",
        "Que inglés usa fit para todos los precios.",
        "Que inglés no puede hablar de valor."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál pregunta pide el precio naturalmente?",
          choices: [
            "How much fits it?",
            "How much is it?",
            "How much usually it?"
          ],
          answer: 1,
          tests: "how much is it for price"
        },
        {
          prompt: "¿Cuál frase significa vale la pena?",
          choices: [
            "It fits the pain.",
            "It uses the pain.",
            "It's worth it."
          ],
          answer: 2,
          tests: "worth it as vale la pena"
        },
        {
          prompt: "¿Cuál frase traduce más vale que llegue temprano?",
          choices: [
            "You'd better arrive early.",
            "You more worth arrive early.",
            "You cost arrive early."
          ],
          answer: 0,
          tests: "you'd better as más vale que"
        },
        {
          prompt: "¿Cuál frase evita una traducción literal de valgo?",
          choices: [
            "I value little negotiator.",
            "I'm not worth much as a negotiator.",
            "I cost few as negotiator."
          ],
          answer: 1,
          tests: "I'm worth for valgo"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/62-extending-habits-and-worth.js");
