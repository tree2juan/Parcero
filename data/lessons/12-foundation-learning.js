/*
 * Lesson block: foundation / learning, teaching and studying.
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
    id: "learning-to-dance-at-the-family-parranda",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    pathways: ["foundation"],
    verb: "aprender",
    review: "pending",
    es: {
      title: "Aprender a bailar en la parranda familiar",
      situation:
        "Es sábado por la noche en Medellín y en casa de una familia paisa hay parranda. Alex quiere aprender a bailar y le pide ayuda a Manuela, una amiga de la casa. Entre risas tiene que entender la diferencia entre aprender a hacer algo, aprenderse la letra de una canción y eso de que “bailando se aprende”, todo mientras un tío pone la música cada vez más duro.",
      setting: {
        who: "Manuela grew up in this house and has danced since she could walk. Alex is the foreign friend who was dragged onto the floor and is now determined not to embarrass himself.",
        what: "An impromptu dancing lesson in the middle of a family party, learning steps and song lyrics at once.",
        when: "Late on a Saturday night, once the furniture has been pushed back and the music is loud.",
        where: "Medellín, a paisa family home where a parranda can start with no warning and end at dawn.",
        why: "Because on a paisa dance floor nobody expects you to be good, only to try. Learning to join in — steps, words and all — is how Alex stops being a spectator and becomes part of the party."
      },
      address: {
        form: "vos",
        who: "Manuela uses vos with Alex for the pronoun but slips into usted-form commands like “mírelo” and “tranquilo”.",
        why: "Paisa Spanish runs on vos between friends, yet its commands very often borrow the usted ending, so “aprendé” (vos) and “mírelo” (usted) sit side by side in one breath. That mix is completely normal in Antioquia and quietly confuses learners taught a neat two-form system.",
        ifYouSwitch:
          "Using tú here would not offend, but among paisa friends it can sound a shade bookish rather than warmer. Staying on usted throughout is perfectly polite, yet it keeps a little more distance than a friend teaching you to dance is offering."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Manu, quiero aprender a bailar esto. ¿Me enseñás?",
          translation: "Manu, I want to learn to dance this. Will you teach me?",
          pronunciation: "MA-nu, KYE-ro a-pren-DER a bai-LAR ES-to. me en-se-NYAS",
          literal: "Manu, I-want to learn to dance this. To-me you-teach?",
          why: "“Aprender a bailar” needs the “a”: aprender takes “a” before an infinitive, unlike English “learn to”. “Enseñás” is the paisa vos form of the verb, with the stress on the last syllable — en-se-NYÁS, not en-SE-ñas."
        },
        {
          speaker: "Manuela",
          target: "¡Claro, parce! Aprendé viendo los pies, no pensés tanto.",
          translation: "Of course, mate! Learn by watching the feet, don't think so much.",
          pronunciation: "KLA-ro, PAR-se! a-pren-DE VYEN-do los PYES, no pen-SES TAN-to",
          literal: "Clear, mate! Learn watching the feet, not you-think so-much.",
          why: "“Aprendé” and “pensés” are vos imperatives — the stress jumps to the final syllable and there's no stem change, where tú would give “aprende” and “no pienses”. “Parce”, short for parcero, is the paisa word for mate or buddy."
        },
        {
          speaker: "Alex",
          target: "Uy, es difícil. ¿Y la canción? Me quiero aprender la letra.",
          translation: "Oof, it's hard. And the song? I want to learn the lyrics by heart.",
          pronunciation: "OO-i, es di-FEE-sil. i la kan-SYON? me KYE-ro a-pren-DER la LE-tra",
          literal: "Oof, is difficult. And the song? To-me I-want to-learn the lyrics.",
          why: "“Aprenderse” — aprender with the reflexive — adds a “commit it to memory” nuance that plain aprender lacks. “Me quiero aprender la letra” is “I want to get the lyrics into my head”, stronger than simply learning them."
        },
        {
          speaker: "Manuela",
          target: "Esa se la aprende todo el mundo aquí. Dale, que ya vas aprendiendo.",
          translation: "Everyone here learns that one by heart. Go on, you're getting it now.",
          pronunciation: "E-sa se la a-PREN-de TO-do el MUN-do a-KEE. DA-le, ke ya bas a-pren-DYEN-do",
          literal: "That one itself it learns all the world here. Give-it, that already you-go learning.",
          why: "“Ir + gerundio” — “vas aprendiendo” — frames learning as gradual progress, “you're getting it bit by bit”, which plain “aprendes” would miss. “Dale” is the all-purpose Colombian green light: go on, go for it."
        },
        {
          speaker: "Alex",
          target: "¿Sí? No sé, apenas estoy aprendiendo los pasos.",
          translation: "Yeah? I don't know, I'm only just learning the steps.",
          pronunciation: "SEE? no SE, a-PE-nas es-TOY a-pren-DYEN-do los PA-sos",
          literal: "Yes? Not I-know, barely I-am learning the steps.",
          why: "“Estar + gerundio” — “estoy aprendiendo” — is the action right now, distinct from the gradual “voy aprendiendo”. “Apenas” here means “only just / barely”, hedging that he's at the very start."
        },
        {
          speaker: "Manuela",
          target: "Tranquilo, pues. Bailando se aprende; en una hora ya te lo aprendiste.",
          translation: "Relax, then. You learn by dancing; in an hour you'll have it down.",
          pronunciation: "tran-KEE-lo, pwes. bai-LAN-do se a-PREN-de; en U-na O-ra ya te lo a-pren-DIS-te",
          literal: "Calm, then. Dancing itself it-learns; in one hour already you it learned.",
          why: "“Se aprende” is the impersonal “se”: “one learns / you learn” in general, no named subject. “Pues”, the paisa tag, softens the reassurance, and “te lo aprendiste” is the reflexive again — you'll have mastered it, got it by heart."
        }
      ],
      vocabulary: [
        {
          term: "aprender a + infinitivo",
          explanation:
            "The way to say “learn to do something”. Aprender always takes “a” before an infinitive.",
          literal: "to learn to (do)",
          useWhen:
            "Talking about acquiring a skill: “aprender a bailar”, “aprender a manejar”, “aprender a cocinar”.",
          avoidWhen:
            "You mean learning a fact or a subject, not a skill; then aprender stands alone, with no “a”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["aprender a nadar", "enseñar a", "saber", "empezar a"],
          example: {
            target: "Quiero aprender a bailar.",
            translation: "I want to learn to dance."
          }
        },
        {
          term: "aprenderse (algo)",
          explanation:
            "Aprender made reflexive, adding a “commit it to memory” force that plain aprender lacks.",
          literal: "to learn (oneself) something",
          useWhen:
            "Memorising something specific: a song, a poem, a phone number, a name — “me aprendí la letra”.",
          avoidWhen:
            "You mean learning a skill or subject in general; there plain aprender fits, not the reflexive.",
          register: "neutral",
          region: "Universal Spanish; extremely common in everyday Colombian speech.",
          related: ["memorizar", "de memoria", "aprender", "saberse"],
          example: {
            target: "Me quiero aprender la letra.",
            translation: "I want to learn the lyrics by heart."
          }
        },
        {
          term: "ir aprendiendo",
          explanation:
            "“Ir” plus the gerund frames learning as gradual, ongoing progress rather than a finished state.",
          literal: "to go learning",
          useWhen:
            "Encouraging someone mid-task: “ya vas aprendiendo”, “voy aprendiendo poco a poco”.",
          avoidWhen:
            "You mean the action happening right now; that is “estar aprendiendo”, a different nuance.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["voy aprendiendo", "poco a poco", "estar aprendiendo", "coger el tiro"],
          example: {
            target: "Ya vas aprendiendo.",
            translation: "You're getting it now."
          }
        },
        {
          term: "se aprende",
          explanation:
            "The impersonal “se”: “one learns” or “you learn” in general, with no named subject.",
          literal: "itself it-learns",
          useWhen:
            "Stating a general truth: “bailando se aprende”, “así se aprende”, “eso se aprende rápido”.",
          avoidWhen:
            "You want to say a specific person learns something; then name the subject and drop the impersonal.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["se dice", "se hace", "uno aprende", "practicando"],
          example: {
            target: "Bailando se aprende.",
            translation: "You learn by dancing."
          }
        },
        {
          term: "la letra",
          explanation:
            "The words of a song — the lyrics. In the singular it also means a letter of the alphabet or handwriting.",
          literal: "the letter",
          useWhen:
            "Talking about song words: “me sé la letra”, “no me acuerdo de la letra”.",
          avoidWhen:
            "You mean a letter you post; that is “una carta”, a completely different word.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["la canción", "el coro", "cantar", "la melodía"],
          example: {
            target: "¿Te sabes la letra?",
            translation: "Do you know the lyrics?"
          }
        },
        {
          term: "parce / parcero",
          explanation:
            "The paisa word for mate, buddy, pal. “Parce” is the clipped everyday form of “parcero”.",
          literal: "partner / buddy",
          useWhen:
            "Among friends and peers, especially in Medellín: “¿qué más, parce?”, “gracias, parce”.",
          avoidWhen:
            "Addressing someone older, a boss or any formal setting; it's strictly casual and can read as too familiar.",
          register: "friendly informal",
          region: "Paisa (Medellín and Antioquia), now heard nationwide among young people.",
          related: ["parcero", "llave", "socio", "man"],
          example: {
            target: "¡Claro, parce!",
            translation: "Of course, mate!"
          }
        },
        {
          term: "pues",
          explanation:
            "A paisa tag word that softens and rounds off a phrase; it rarely translates as anything at all.",
          literal: "then / well",
          useWhen:
            "Cushioning a statement or command, very common in Antioquia: “tranquilo, pues”, “eso, pues”.",
          avoidWhen:
            "Formal writing, where it looks like filler; it belongs to speech, not to a document.",
          register: "friendly informal",
          region: "Iconic paisa, though “pues” exists across the Spanish-speaking world.",
          related: ["entonces", "listo", "hombre", "ve"],
          example: {
            target: "Tranquilo, pues.",
            translation: "Relax, then."
          }
        }
      ],
      note:
        "Aprender has three moves worth owning. It takes “a” before an infinitive — “aprender a bailar” — where English just says “learn to”. Make it reflexive, “aprenderse”, and it means commit to memory: “me aprendí la letra” is learning by heart, not merely learning. And “ir aprendiendo” (gradual progress) contrasts with “estar aprendiendo” (happening right now); paisas reach for the first to cheer you on.",
      culture: [
        {
          label: "The parranda starts itself",
          body:
            "A paisa parranda is not a planned event with invitations; it condenses out of a normal evening when someone turns up the music, the furniture slides back and an uncle appears with aguardiente. Dancing is the default, not a performance, and pulling a reluctant guest onto the floor is an act of welcome. Alex being taught to dance mid-party isn't him imposing — it's the household folding him in, and refusing outright would read as colder than any wrong step ever could."
        },
        {
          label: "Everyone knows the words",
          body:
            "In Colombia the lyrics of the classics — vallenato, salsa, the old parranda songs — are shared property, sung word-for-word by a whole room across generations. “Aprenderse la letra” is a small rite of belonging, and a foreigner who learns even one chorus earns real warmth. The songs carry memory and place, so knowing them signals more than musical taste; it says you've taken the trouble to learn what the family grew up singing, which lands as respect."
        },
        {
          label: "Vos that gives usted orders",
          body:
            "Paisa speech pairs the pronoun vos with vos verb endings — “aprendé”, “bailás”, “pensés” — but its commands constantly slide into the usted form: “mírelo”, “tranquilo”, “véngase”. So one sentence can hold vos and usted morphology at once without anyone noticing. Learners handed a tidy tú/usted table find this baffling, yet it's the everyday texture of Antioquian Spanish. Don't try to make it consistent; just accept that the two forms interweave."
        },
        {
          label: "You learn by throwing yourself in",
          body:
            "“Bailando se aprende” — you learn by dancing — captures a broader Colombian attitude to learning: start doing it badly and let the skill arrive through repetition, not through a manual. Nobody on a home dance floor expects polish from a beginner, only willingness. This forgiving, jump-in-first pedagogy shows up in kitchens, workshops and soccer games too. For a learner it's freeing: the expectation is effort and good humor, and competence is assumed to follow on its own."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “quiero aprender bailar”, dropping the “a”",
          whyItFails:
            "Aprender requires “a” before an infinitive. Leaving it out is a word-for-word carry-over from English “learn to dance” and marks the sentence as foreign.",
          sayInstead: "Quiero aprender a bailar."
        },
        {
          mistake: "Saying “aprendí la canción” when you mean you memorized it",
          whyItFails:
            "Plain aprender means you learned or found it out; the “commit to memory” sense needs the reflexive. Without it, you haven't said you got it by heart.",
          sayInstead: "Me aprendí la canción."
        },
        {
          mistake: "Saying “aprender por corazón” for “learn by heart”",
          whyItFails:
            "“Por corazón” is a literal calque of the English idiom and doesn't exist in Spanish. The fixed phrase is “de memoria”.",
          sayInstead: "Aprender de memoria."
        },
        {
          mistake: "Using tú “aprende” with paisa friends to sound friendly",
          whyItFails:
            "It isn't wrong, but among friends in Medellín the vos form “aprendé” is the local, warmer choice; tú can sound faintly bookish or imported.",
          sayInstead: "Aprendé viendo los pies."
        }
      ],
      variations: [
        {
          form: "aprender a + infinitivo",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The standard, safe way to say you're learning a skill anywhere."
        },
        {
          form: "aprenderse algo",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "When the point is memorising something specific, like a song or a name."
        },
        {
          form: "cogerle el tiro",
          register: "friendly informal",
          region: "Colombian",
          whenToUse: "Getting the hang of a knack — “ya le cogí el tiro” — in casual speech."
        },
        {
          form: "pillar / pillarle",
          register: "friendly informal",
          region: "Colombian, colloquial",
          whenToUse: "Catching on to how something works: “ya lo pillé”, “ya le pillé”."
        },
        {
          form: "ir cogiendo el ritmo",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Settling into the rhythm of something over time, on the dance floor or off it."
        }
      ],
      prompt: "Alex says “quiero aprender a bailar.” Why is there an “a” after aprender?",
      choices: [
        "Because the “a” marks the dancing as something happening to Alex rather than a thing he chooses.",
        "Because aprender always takes “a” before an infinitive, the way English needs “to” in “learn to dance”.",
        "Because without the “a” the sentence would order someone else to dance instead of Alex learning it."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "What does the reflexive add in “me quiero aprender la letra”?",
          choices: [
            "A “commit it to memory” force — he wants the lyrics by heart, not just vaguely learned.",
            "A sense that someone else will teach Alex the lyrics of the song before the night is over.",
            "A future meaning, so that learning the lyrics is postponed until some later, still unnamed day."
          ],
          answer: 0,
          tests: "aprenderse as memorize / by heart"
        },
        {
          prompt: "Manuela says “ya vas aprendiendo.” What does “ir + gerundio” express?",
          choices: [
            "That Alex has completely finished learning and now dances the whole song without a mistake.",
            "That Alex should stop dancing and go somewhere else to keep practicing the steps on his own.",
            "Gradual, ongoing progress — that Alex is getting it bit by bit as he goes, not all at once."
          ],
          answer: 2,
          tests: "ir + gerund as gradual progress"
        },
        {
          prompt: "In “bailando se aprende”, what is the “se” doing?",
          choices: [
            "Pointing back to Manuela as the one who personally learns the dance on Alex's behalf tonight.",
            "Marking an impersonal, general truth — “one learns by dancing”, with no particular subject named.",
            "Turning the sentence into a command telling Alex he must dance in order to be allowed to learn."
          ],
          answer: 1,
          tests: "impersonal se"
        },
        {
          prompt: "Manuela says “aprendé, no pensés.” Why those verb endings?",
          choices: [
            "They're paisa vos imperatives, stressed on the last syllable, where tú gives “aprende”, “no pienses”.",
            "They're formal usted commands, the polite forms she'd use with an older stranger at the party.",
            "They're plain present-tense statements describing what Alex usually does whenever he dances."
          ],
          answer: 0,
          tests: "vos imperative morphology"
        }
      ]
    },
    en: {
      title: "Aprender a bailar en una fiesta en casa",
      situation:
        "Es sábado por la noche en Canadá y en casa de una amiga hay fiesta. Alejandra quiere aprender a bailar y le pide ayuda a Emily. Entre risas tiene que manejar en inglés la diferencia entre “learn to” (aprender a), “learn by heart” (aprenderse de memoria) y el “you” impersonal de “you learn by doing”, sin calcar del español cosas como “by memory” o “the letter of the song”.",
      setting: {
        who: "Emily creció bailando en fiestas y se ofrece a enseñarle a Alejandra. Alejandra es la colombiana recién llegada, que no se quiere quedar sentada mirando.",
        what: "Una clase de baile improvisada en plena fiesta, aprendiendo pasos y la letra a la vez.",
        when: "Un sábado por la noche, ya tarde, cuando alguien sube el volumen y corren los muebles.",
        where: "Canadá, la casa de una amiga, en una fiesta relajada donde nadie juzga al principiante.",
        why: "Porque lanzarse a bailar es la forma más rápida de dejar de ser la invitada nueva y volverse parte del grupo, y hacerlo hablando un inglés natural la integra el doble."
      },
      address: {
        form: "mixed",
        who: "Emily y Alejandra son amigas con plena confianza.",
        why: "El inglés tiene un solo “you”, así que la cercanía no se marca con el pronombre como el español entre tú y usted. El tono y las fórmulas — “come on”, “don't worry”, “you got this” — cargan la calidez. Alejandra no debe buscar un equivalente de “vos” o “tú”: esa distinción no existe en el pronombre inglés.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Si Alejandra habla muy cortante suena seca; si adorna de más, tiesa. Entre amigas el registro es liviano y directo: “sure”, “go for it”, “you're doing great”."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Emily, I want to learn to dance this. Can you teach me?",
          translation: "Emily, quiero aprender a bailar esto. ¿Me enseñas?",
          pronunciation: "E-mi-li, ai UONT tu lern tu dans dis. kan yu tich mi",
          literal: "Emily, yo quiero a aprender a bailar esto. ¿Puedes tú enseñar-me?",
          why: "El inglés dice “learn to dance”, sin la “a” del español (“aprender a”); “to” hace ese trabajo. “Teach me” es “enséñame”: ojo, no se dice “learn me”, un error clásico."
        },
        {
          speaker: "Emily",
          target: "Of course! Learn by watching my feet, don't overthink it.",
          translation: "¡Claro! Aprende viendo mis pies, no lo pienses tanto.",
          pronunciation: "of KORS! lern bai UO-ching mai fit, dont O-ver-zink it",
          literal: "De curso. Aprende por mirando mis pies, no sobre-pienses ello.",
          why: "Tras la preposición “by”, el verbo va en gerundio: “by watching”, donde el español usa el gerundio suelto (“viendo”). “Overthink” es un solo verbo — pensar algo de más."
        },
        {
          speaker: "Alejandra",
          target: "Ugh, it's hard. And the song? I want to learn the words by heart.",
          translation: "Uy, es difícil. ¿Y la canción? Me quiero aprender la letra.",
          pronunciation: "og, its jard. and de song? ai UONT tu lern de UERDS bai jart",
          literal: "Ug, ello-es duro. ¿Y la canción? Yo quiero aprender las palabras por corazón.",
          why: "“By heart” es el modismo para “de memoria” — nunca “by memory”. Y la letra de una canción son “the words” o “the lyrics”, no “the letters” (falso amigo con “letra”)."
        },
        {
          speaker: "Emily",
          target: "Everyone here knows that one. Come on, you're getting the hang of it.",
          translation: "Esa se la sabe todo el mundo aquí. Dale, que ya le vas cogiendo el tiro.",
          pronunciation: "EV-ri-uan jir nous dat uan. kom on, yur GUE-ting de jang of it",
          literal: "Cada-uno aquí sabe esa una. Ven en, tú-estás consiguiendo el colgar de ello.",
          why: "“Get the hang of it” es un modismo fijo: irle cogiendo el tiro a algo. No tiene que ver con “colgar”; tomarlo literal es la trampa. “Come on” anima, como “dale”."
        },
        {
          speaker: "Alejandra",
          target: "Really? I don't know, I'm just learning the steps.",
          translation: "¿Sí? No sé, apenas estoy aprendiendo los pasos.",
          pronunciation: "RI-li? ai dont nou, aim yost LER-ning de steps",
          literal: "¿Realmente? Yo no sé, yo-estoy justo aprendiendo los pasos.",
          why: "“I'm learning” es presente continuo, para la acción en curso ahora mismo; “I learn” sonaría a costumbre. Aquí “just” significa “apenas / solo”, no “justo”."
        },
        {
          speaker: "Emily",
          target: "Relax. You learn by doing; in an hour you'll have it down.",
          translation: "Tranquila. Se aprende haciéndolo; en una hora ya te lo sabes.",
          pronunciation: "ri-LAX. yu lern bai DU-ing; in an A-uar yul jav it daun",
          literal: "Relaja. Tú aprendes por haciendo; en una hora tú-tendrás ello abajo.",
          why: "Ese “you” es impersonal — el inglés usa “you” genérico donde el español dice “se” (“se aprende”). “Have it down” es dominarlo, tenerlo bien aprendido."
        }
      ],
      vocabulary: [
        {
          term: "learn to / learn how to",
          explanation:
            "La forma inglesa de “aprender a” hacer algo. No lleva “a”; “to” o “how to” hacen ese trabajo.",
          literal: "aprender a (hacer)",
          useWhen:
            "Al hablar de adquirir una habilidad: “learn to drive”, “learn how to cook”.",
          avoidWhen:
            "Cuando aprendes un dato o una materia, no una destreza; ahí “learn” va solo, sin “to”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["learn how to", "learn to swim", "teach to", "pick up"],
          example: {
            target: "I want to learn to dance.",
            translation: "Quiero aprender a bailar."
          }
        },
        {
          term: "learn by heart",
          explanation:
            "Memorizar algo palabra por palabra. El modismo usa “heart”, nunca “memory”.",
          literal: "aprender de memoria",
          useWhen:
            "Al memorizar una canción, un poema o unas líneas: “learn it by heart”.",
          avoidWhen:
            "Si solo entiendes algo en general y no lo memorizas; ahí “learn” basta.",
          register: "neutral",
          region: "Inglés general.",
          related: ["memorize", "by heart", "know by heart", "recite"],
          example: {
            target: "I learned the lyrics by heart.",
            translation: "Me aprendí la letra de memoria."
          }
        },
        {
          term: "get the hang of it",
          explanation:
            "Modismo para irle cogiendo el tiro o el truco a algo con la práctica.",
          literal: "coger el modo de ello",
          useWhen:
            "Al hablar de ir dominando una destreza: “you're getting the hang of it”.",
          avoidWhen:
            "En registro muy formal o escrito; es claramente coloquial.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["pick it up", "catch on", "get it", "figure out"],
          example: {
            target: "You're getting the hang of it.",
            translation: "Ya le vas cogiendo el tiro."
          }
        },
        {
          term: "you (generic)",
          explanation:
            "El “you” impersonal: se refiere a la gente en general, como el “se” o “uno” del español.",
          literal: "uno / se",
          useWhen:
            "Al enunciar verdades generales: “you learn by doing”, “you never know”.",
          avoidWhen:
            "Cuando de verdad te diriges a una persona concreta; ahí el contexto lo distingue.",
          register: "neutral",
          region: "Inglés general.",
          related: ["one", "people", "they", "in general"],
          example: {
            target: "You learn by doing.",
            translation: "Se aprende haciendo."
          }
        },
        {
          term: "the lyrics",
          explanation:
            "La letra de una canción. Suele ir en plural; “the words” también sirve.",
          literal: "la letra",
          useWhen:
            "Al hablar de lo que dice una canción: “I love the lyrics”, “I forgot the words”.",
          avoidWhen:
            "No digas “the letters”: eso son letras del abecedario o cartas que se envían.",
          register: "neutral",
          region: "Inglés general.",
          related: ["the words", "the song", "the chorus", "the verse"],
          example: {
            target: "Do you know the lyrics?",
            translation: "¿Te sabes la letra?"
          }
        },
        {
          term: "come on",
          explanation:
            "Expresión para animar o apurar a alguien, muy cercana a “dale” o “vamos”.",
          literal: "ven sobre",
          useWhen:
            "Al alentar: “come on, you can do it”, “come on, let's go”.",
          avoidWhen:
            "Con tono seco puede sonar a reproche (“¡ya, por favor!”); cuida la entonación.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["let's go", "you got this", "go for it", "keep going"],
          example: {
            target: "Come on, you're getting it!",
            translation: "¡Dale, que ya te sale!"
          }
        },
        {
          term: "have it down",
          explanation:
            "Dominar algo, tenerlo bien aprendido tras practicarlo.",
          literal: "tenerlo abajo",
          useWhen:
            "Al decir que ya dominas algo: “I've got it down”, “you'll have it down soon”.",
          avoidWhen:
            "No es “anotarlo”: “write it down” es apuntar, una cosa distinta.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["nail it", "master it", "got it down", "know it cold"],
          example: {
            target: "You'll have it down in an hour.",
            translation: "En una hora ya lo dominas."
          }
        }
      ],
      note:
        "En inglés “learn to” no lleva “a” — “learn to dance”. Para memorizar se dice “learn by heart” o “memorize”, jamás “by memory”. “Get the hang of it” es irle cogiendo el tiro, y el “you” impersonal (“you learn by doing”) cubre el “se” del español. Y cuidado con “the letter of the song”: la letra de una canción es “the lyrics” o “the words”.",
      culture: [
        {
          label: "“By heart”, no “by memory”",
          body:
            "Para decir que memorizaste algo, el inglés usa el modismo “by heart” — con “heart”, no con “memory”. “I know it by heart” es “me lo sé de memoria”. El calco “by memory” suena raro y marca de inmediato al hispanohablante. La alternativa transparente es el verbo “to memorize”. Este es uno de esos modismos que hay que aprender enteros, porque traducir palabra por palabra desde “de memoria” lleva justo a la versión equivocada."
        },
        {
          label: "El “you” que no eres tú",
          body:
            "El inglés usa “you” para lo impersonal, donde el español echa mano de “se” o “uno”: “you learn by doing” es “se aprende haciendo”, no una orden a nadie en particular. También aparece en “you never know” (nunca se sabe). Al principio confunde, porque parece que te señalan a ti, pero es un “you” genérico. Reconocerlo evita malentendidos y le da a Alejandra una manera muy natural y muy común de generalizar en inglés."
        },
        {
          label: "Aprender se dice con phrasal verbs",
          body:
            "Buena parte del vocabulario del aprendizaje informal en inglés vive en phrasal verbs: “pick up” (aprender algo casi sin esfuerzo), “get the hang of it” (cogerle el tiro), “catch on” (caer en la cuenta, entender). Son cortísimos y frecuentísimos, y no se pueden calcar desde el español. Para un hispanohablante suenan opacos porque el significado no está en las palabras sueltas. Aprenderlos como bloques, con ejemplos, es lo que hace que el inglés hablado deje de sonar a traducción."
        },
        {
          label: "“Learn by doing” y la fiesta sin jueces",
          body:
            "En una fiesta en casa en Canadá o Estados Unidos, nadie espera que la principiante baile bien; se valora que se anime y lo intente. Esa actitud de “learn by doing” — lánzate y ya irá saliendo — se parece al “bailando se aprende” colombiano. Para Alejandra es liberador: no la están evaluando, y equivocarse en los pasos es parte del juego. Entender ese ambiente relajado la ayuda a soltarse y a no quedarse pegada a la pared por miedo a fallar."
        }
      ],
      pitfalls: [
        {
          mistake: "“I learned the song by memory.”",
          whyItFails:
            "El modismo inglés es “by heart”, no “by memory”, que es un calco de “de memoria”. También sirve el verbo “memorize”.",
          sayInstead: "I learned the song by heart. / I memorized the song."
        },
        {
          mistake: "“The letter of the song is beautiful.”",
          whyItFails:
            "La letra de una canción es “the lyrics” o “the words”; “letter” es una letra del abecedario o una carta que se envía.",
          sayInstead: "The lyrics of the song are beautiful."
        },
        {
          mistake: "“Don't think it so much.”",
          whyItFails:
            "“Think” pide la preposición “about” (“think about it”), y para “no le des tantas vueltas” lo natural es “don't overthink it”.",
          sayInstead: "Don't overthink it. / Don't think about it too much."
        },
        {
          mistake: "“Every weekend I'm dancing salsa.”",
          whyItFails:
            "Para un hábito el inglés usa el presente simple; el continuo es para lo que ocurre justo ahora. El calco confunde costumbre con acción en curso.",
          sayInstead: "Every weekend I dance salsa."
        }
      ],
      variations: [
        {
          form: "learn to dance",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "La forma estándar y segura de decir que aprendes una habilidad."
        },
        {
          form: "learn how to dance",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Igual de común; el “how” resalta el método o la técnica."
        },
        {
          form: "get the hang of it",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Coloquial, para irle cogiendo el tiro a algo con la práctica."
        },
        {
          form: "pick it up",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Para aprender algo rápido y casi sin esfuerzo: “you'll pick it up”."
        },
        {
          form: "have it down",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Cuando ya lo dominas del todo después de practicar."
        }
      ],
      prompt: "Alejandra quiere decir “quiero aprender a bailar esto”. ¿Cuál oración es correcta en inglés?",
      choices: [
        "I want to learn dancing this one.",
        "I want you to teach me to dance this.",
        "I want to learn to dance this. Can you teach me?"
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cómo dice Alejandra que se aprendió la letra de memoria?",
          choices: [
            "I learned the letter of the song by memory.",
            "I learned the lyrics by heart.",
            "I learned the song by memory."
          ],
          answer: 1,
          tests: "“by heart” y “lyrics”, sin calcar “by memory” ni “letter”"
        },
        {
          prompt: "Emily dice “you're getting the hang of it.” ¿Qué significa?",
          choices: [
            "Que Alejandra le está cogiendo el tiro, va aprendiendo el baile poco a poco.",
            "Que Alejandra ya terminó y baila la canción entera a la perfección, sin un solo error.",
            "Que Alejandra debería colgar algo en la pared antes de volver a la pista a bailar."
          ],
          answer: 0,
          tests: "modismo “get the hang of it”, no el literal “colgar”"
        },
        {
          prompt: "En “you learn by doing”, ¿a quién se refiere ese “you”?",
          choices: [
            "Solo a Alejandra, porque Emily le habla directamente a ella sobre su propio baile.",
            "A Emily, que se pone a sí misma como la que aprende el baile esta noche en la fiesta.",
            "A nadie en concreto: es el “you” impersonal, el “se” del español — “uno aprende haciendo”."
          ],
          answer: 2,
          tests: "“you” impersonal equivale al “se”"
        },
        {
          prompt: "¿Por qué dice “I'm just learning the steps” y no “I just learn the steps”?",
          choices: [
            "Porque en inglés el presente simple no existe y siempre se usa la forma con “-ing”.",
            "Porque el presente continuo marca la acción en curso ahora; “I learn” sonaría a costumbre.",
            "Porque la palabra “just” obliga a usar siempre el presente continuo en cualquier oración."
          ],
          answer: 1,
          tests: "presente continuo para la acción en curso"
        }
      ]
    }
  },
  {
    id: "learning-to-cook-ajiaco-in-a-bogota-kitchen",
    level: "Starter · Food and drink",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "courteous",
    pathways: ["foundation"],
    verb: "enseñar",
    review: "pending",
    es: {
      title: "Aprender a hacer ajiaco en una cocina bogotana",
      situation:
        "En Bogotá, Doña Miriam, una rola de toda la vida, le da a Alex una clase para hacer ajiaco santafereño. Entre la papa criolla, las mazorcas y las guascas, Alex descubre que “enseñar” en español sirve para dos cosas: enseñarle a uno a hacer algo y enseñarle una foto de cómo debe quedar. Todo en usted, con el respeto con que un bogotano trata a quien le está pasando su receta.",
      setting: {
        who: "Doña Miriam is a lifelong bogotana — a rola — who has made ajiaco for family lunches for forty years. Alex is her guest, a foreigner she decided to teach because he asked so earnestly.",
        what: "A hands-on cooking lesson for ajiaco santafereño, the classic Bogotá chicken-and-potato soup, learning the steps and being shown what each thing should look like.",
        when: "A slow weekday afternoon, the pot already on the stove, with enough time to do it properly.",
        where: "A kitchen in Bogotá, where ajiaco is a point of pride and guascas is the herb that makes or breaks it.",
        why: "Because being taught a family recipe is an act of trust. Alex wants to learn to cook it himself, and along the way discovers that one verb, enseñar, both teaches him the steps and shows him the photos."
      },
      address: {
        form: "usted",
        who: "Alex uses usted with Doña Miriam because she is older, he is a guest in her kitchen, and she is the authority on this recipe.",
        why: "Usted is the default of respect toward an older person and toward anyone teaching you something. It also keeps a warm distance that suits a host you don't know well yet.",
        ifYouSwitch: "Dropping into tú with Doña Miriam would sound overfamiliar, almost cheeky. In Bogotá, staying in usted with an older woman teaching you her recipe is simply what you do — she may tú you back, but you hold usted."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Doña Miriam, ¿usted me enseña a hacer el ajiaco de verdad?",
          translation: "Doña Miriam, will you teach me to make real ajiaco?",
          pronunciation: "DOH-nya mee-RYAM, oos-TED meh en-SEH-nya ah ah-SEHR el ah-HYAH-koh deh ver-DAHD",
          literal: "Doña Miriam, you me teach to make the ajiaco of truth?",
          why: "Enseñar a + infinitive is “teach to do something.” The a before the infinitive is obligatory; leaving it out (enseñar hacer) is ungrammatical to a native ear."
        },
        {
          speaker: "Doña Miriam",
          target: "Claro, mijo. Yo le enseño, pero me pone atención.",
          translation: "Of course, dear. I'll teach you, but pay attention.",
          pronunciation: "KLAH-roh, MEE-hoh. yoh leh en-SEH-nyoh, peh-roh meh POH-neh ah-ten-SYOHN",
          literal: "Clear, my-son. I to-you teach, but me put attention.",
          why: "Le is the indirect object “to you” in usted. “Poner atención” is the Colombian way to say “pay attention” — Spain prefers “prestar atención.”"
        },
        {
          speaker: "Doña Miriam",
          target: "Mire, primero le enseño la papa criolla; tiene que ser esta, la amarillita.",
          translation: "Look, first I'll show you the criolla potato; it has to be this one, the little yellow one.",
          pronunciation: "MEE-reh, pree-MEH-roh leh en-SEH-nyoh lah PAH-pah kree-OH-yah; TYEH-neh keh sehr EH-stah, lah ah-mah-ree-YEE-tah",
          literal: "Look, first to-you I-show the potato criolla; has that to-be this, the little-yellow.",
          why: "Here enseñar means “show,” not “teach.” It is the very same verb, and only the context tells you which — she is physically showing him the potato."
        },
        {
          speaker: "Alex",
          target: "Ah, no la conocía. ¿Me enseña una foto de cómo queda al final?",
          translation: "Ah, I didn't know it. Will you show me a photo of how it turns out?",
          pronunciation: "ah, noh lah koh-noh-SEE-ah. meh en-SEH-nya OO-nah FOH-toh deh KOH-moh KEH-dah al fee-NAHL",
          literal: "Ah, not it I-knew. Me you-show a photo of how it-stays at-the end?",
          why: "“Enseñar una foto” is show a photo. An English speaker reaches for “teach” here and gets confused; in Spanish “show me the photo” is enséñeme / me enseña la foto."
        },
        {
          speaker: "Doña Miriam",
          target: "Tenga, así queda. Uno enseña con paciencia, no de afán.",
          translation: "Here, that's how it looks. You teach with patience, not in a rush.",
          pronunciation: "TEN-gah, ah-SEE KEH-dah. OO-noh en-SEH-nyah kon pah-SYEN-syah, noh deh ah-FAHN",
          literal: "Have, so it-stays. One teaches with patience, not of rush.",
          why: "“Uno enseña” uses uno as an impersonal subject — “one teaches / you teach in general.” “De afán” is very Colombian for “in a hurry.”"
        },
        {
          speaker: "Alex",
          target: "Gracias por enseñarme. Me lo voy a aprender bien.",
          translation: "Thank you for teaching me. I'm going to learn it well.",
          pronunciation: "GRAH-syas por en-seh-NYAR-meh. meh loh voy ah ah-pren-DEHR byen",
          literal: "Thanks for to-teach-me. Me it I-go to learn well.",
          why: "Enseñar contrasts with aprender: she teaches (enseñar), he learns (aprender). “Me lo voy a aprender” uses aprenderse for committing it firmly to memory."
        }
      ],
      vocabulary: [
        {
          term: "enseñar a + infinitivo",
          explanation: "The core structure for “teach someone to do something.” The a before the infinitive is required, not optional.",
          literal: "to teach to (do)",
          useWhen: "Whenever you teach a skill: enseñar a bailar, enseñar a cocinar, enseñar a manejar.",
          avoidWhen: "Don't drop the a — “enseñar hacer” is wrong. And don't use this pattern for “show,” which takes no infinitive.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["enseñar a cocinar", "aprender a", "mostrar cómo", "explicar"],
          example: {
            target: "Me enseñó a hacer ajiaco.",
            translation: "She taught me to make ajiaco."
          }
        },
        {
          term: "enseñar (mostrar)",
          explanation: "The other meaning of enseñar: to show, to let someone see something. Context, not the verb, tells the two apart.",
          literal: "to show",
          useWhen: "When you physically show something: enséñame la foto, le enseño la casa.",
          avoidWhen: "In careful writing where “mostrar” is clearer; but in everyday speech enseñar is completely normal for show.",
          register: "neutral",
          region: "Universal, and very common in Colombia.",
          related: ["mostrar", "enséñame", "déjame ver", "muéstrame"],
          example: {
            target: "Enséñeme la foto.",
            translation: "Show me the photo."
          }
        },
        {
          term: "enséñeme",
          explanation: "The usted command of enseñar — “teach me” or “show me,” depending on the context.",
          literal: "teach/show me (usted)",
          useWhen: "Asking an older person or someone you respect to teach or show you something.",
          avoidWhen: "With a friend or a child, where enséñame (tú) fits the relationship better.",
          register: "polite formal",
          region: "Colombia leans on usted commands even in warm settings.",
          related: ["enséñame", "muéstreme", "dígame", "explíqueme"],
          example: {
            target: "Enséñeme a prepararlo.",
            translation: "Teach me to prepare it."
          }
        },
        {
          term: "poner atención",
          explanation: "The Colombian phrase for “pay attention.” Spain says “prestar atención”; Colombia says poner.",
          literal: "to put attention",
          useWhen: "Telling someone to focus: ponga atención, pon atención, póngame atención.",
          avoidWhen: "Don't say “pagar atención” — that is a calque of English “pay attention” and sounds wrong.",
          register: "neutral",
          region: "Colombia and much of Latin America.",
          related: ["ponga atención", "poner cuidado", "concentrarse", "fijarse"],
          example: {
            target: "Póngame atención.",
            translation: "Pay attention to me."
          }
        },
        {
          term: "mijo / mija",
          explanation: "A warm term of address, contracted from “mi hijo / mi hija.” Older people use it toward younger ones affectionately.",
          literal: "my son / my daughter",
          useWhen: "When an older person addresses you warmly, or you address someone younger with affection.",
          avoidWhen: "Toward someone older or a stranger your own age — it can sound condescending there.",
          register: "friendly informal",
          region: "All of Colombia; extremely common.",
          related: ["mijito", "m'hija", "mi amor", "mi vida"],
          example: {
            target: "Tranquilo, mijo.",
            translation: "Don't worry, dear."
          }
        },
        {
          term: "de afán",
          explanation: "In a hurry, rushed. “Afán” is hurry; “estar de afán” is to be in a rush.",
          literal: "of hurry",
          useWhen: "Saying you or something is rushed: estoy de afán, no cocine de afán.",
          avoidWhen: "In Spain, where “tener prisa” is the norm and “afán” leans toward eagerness instead.",
          register: "friendly informal",
          region: "Very Colombian.",
          related: ["tener afán", "de una", "rápido", "sin afán"],
          example: {
            target: "No cocine de afán.",
            translation: "Don't cook in a rush."
          }
        },
        {
          term: "guascas",
          explanation: "The herb that defines ajiaco's flavor. Without guascas it isn't really ajiaco santafereño.",
          literal: "guascas (herb)",
          useWhen: "Talking about making ajiaco the Bogotá way.",
          avoidWhen: "Outside the dish; it is a specific culinary word, not general vocabulary.",
          register: "neutral",
          region: "Bogotá / Cundinamarca cooking.",
          related: ["ajiaco", "papa criolla", "mazorca", "alcaparras"],
          example: {
            target: "El ajiaco lleva guascas.",
            translation: "Ajiaco has guascas in it."
          }
        }
      ],
      note:
        "Enseñar does double duty: it means both “teach” (enseñar a cocinar) and “show” (enséñame la foto). Only context tells them apart, so an English speaker has to let go of the neat teach/show split. Pair it with usted commands (enséñeme) toward anyone older, and remember Colombians “ponen” atención — they don't “pay” it.",
      culture: [
        {
          label: "One verb for teach and show",
          body:
            "English keeps “teach” and “show” firmly apart; Spanish lets enseñar cover both. “Te enseño a nadar” is teach, “te enseño mi casa” is show, and native speakers never confuse them because context decides. There is a dedicated verb for show, mostrar, but in ordinary speech enseñar is at least as common. For an English speaker the fix is not to translate the verb but to read the situation: is someone imparting a skill, or simply letting you see something? That single question resolves nearly every case."
        },
        {
          label: "Ajiaco is Bogotá on a plate",
          body:
            "Ajiaco santafereño — santafereño from Santa Fe de Bogotá, the city's old name — is the capital's signature soup: three kinds of potato, chicken, corn on the cob, and guascas, served with capers, cream and avocado on the side. The criolla potato dissolves and thickens the broth; the guascas give it a taste you can't fake with anything else. Being walked through it by a rola in her own kitchen is as close to the real thing as a visitor can get."
        },
        {
          label: "Being taught is being trusted",
          body:
            "Handing over a family recipe is not casual in Colombia. Measurements live in the hands, not on paper, and a cook who teaches you hers is letting you into something personal. That is part of why usted feels right: it marks respect for both the person and the knowledge. Accepting the lesson graciously — paying attention, not rushing, thanking her properly — matters as much as getting the potatoes right. The soup is the object; the trust is the point."
        },
        {
          label: "Usted even when it's warm",
          body:
            "Bogotanos are famous for using usted with almost everyone — partners, children, even pets — so warmth and usted are not opposites there. Doña Miriam can call Alex “mijo,” the most affectionate word in the room, and still address him as usted in the same breath. For learners from places where formal pronouns feel cold, this takes adjusting: in Bogotá the formal form is the warm, homey default, and switching to tú can actually feel like distance or performance rather than closeness."
        }
      ],
      pitfalls: [
        {
          mistake: "Assuming enseñar only means “teach.”",
          whyItFails: "It isn't wrong, but you'll misread people: when a Colombian says “te enseño la foto,” they mean show, not teach. Expecting only “teach” leaves you confused.",
          sayInstead: "Enséñame la foto."
        },
        {
          mistake: "Dropping the a in enseñar a + infinitive (“enseñar hacer”).",
          whyItFails: "The a is grammatically required before the infinitive. Without it the sentence sounds broken to a native ear, like a missing gear.",
          sayInstead: "Me enseñó a hacer ajiaco."
        },
        {
          mistake: "Saying “pagar atención” for “pay attention.”",
          whyItFails: "It is a word-for-word calque of English. Colombians “ponen” attention, they don't “pay” it, so pagar marks you instantly as translating.",
          sayInstead: "Ponga atención."
        },
        {
          mistake: "Using a tú command with an older host (“enséñame”).",
          whyItFails: "With Doña Miriam it lands as too familiar. Respect and the teaching relationship both call for the usted form here.",
          sayInstead: "Enséñeme, por favor."
        }
      ],
      variations: [
        {
          form: "¿Me enseña a...?",
          register: "polite formal",
          region: "Colombia (usted)",
          whenToUse: "The respectful way to ask someone to teach you something, in usted."
        },
        {
          form: "Enséñame",
          register: "friendly informal",
          region: "Universal (tú)",
          whenToUse: "With a friend or peer; the tú command for either teach or show."
        },
        {
          form: "Enséñeme",
          register: "polite formal",
          region: "Colombia (usted)",
          whenToUse: "The usted command toward an older person or someone you respect."
        },
        {
          form: "¿Me muestra...?",
          register: "polite neutral",
          region: "Universal",
          whenToUse: "When you specifically mean “show” and want to avoid any ambiguity."
        },
        {
          form: "Enseñále",
          register: "friendly informal",
          region: "Medellín / paisa (voseo)",
          whenToUse: "The vos command in paisa speech — note how the stress shifts onto the ending."
        }
      ],
      prompt: "Doña Miriam says “le enseño la papa criolla.” What does she mean?",
      choices: [
        "She's going to show him the criolla potato so he can see which one it is.",
        "She's going to teach him a whole separate lesson on how to grow criolla potatoes.",
        "She's going to hand him the criolla potato so he can drop it straight into the pot."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "How do you say “she taught me to make ajiaco”?",
          choices: [
            "Ella me enseñó hacer ajiaco.",
            "Ella me mostró el ajiaco a mí.",
            "Ella me enseñó a hacer ajiaco."
          ],
          answer: 2,
          tests: "the obligatory a in enseñar a + infinitive"
        },
        {
          prompt: "A Colombian says “te enseño la foto.” They are going to…",
          choices: [
            "…give you a lesson about the photo.",
            "…show you the photo so you can see it.",
            "…ask you to teach them photo skills."
          ],
          answer: 1,
          tests: "enseñar meaning show, not teach"
        },
        {
          prompt: "Which is the natural Colombian way to say “pay attention”?",
          choices: [
            "Poner atención — “ponga atención”, “póngame atención”, con el verbo poner.",
            "Pagar atención, calcando el “pay” del inglés con el verbo pagar en español.",
            "Dar atención, como si la atención se entregara igual que se entrega un regalo."
          ],
          answer: 0,
          tests: "poner atención, not the calque pagar atención"
        },
        {
          prompt: "How should Alex ask Doña Miriam, an older host, to teach him?",
          choices: [
            "Enséñame a cocinar.",
            "Enseñás a cocinar.",
            "Enséñeme a cocinar."
          ],
          answer: 2,
          tests: "usted command enséñeme with an older host"
        }
      ]
    },
    en: {
      title: "Aprender a hacer ajiaco en una cocina bogotana",
      situation:
        "La misma escena, contada para quien aprende inglés: Alejandra, de Bogotá, está en Canadá y una vecina mayor, Barb, le enseña a hacer butter tarts, el postre típico de allá. Cocinando descubre que el inglés parte en dos el verbo “enseñar”: “teach” es impartir un conocimiento y “show” es dejar ver algo. Decir “teach me the photo” en vez de “show me the photo” es el resbalón clásico del hispanohablante.",
      setting: {
        who: "Barb es una vecina estadounidense de toda la vida que lleva décadas horneando butter tarts. Alejandra es su invitada, una colombiana a la que decidió enseñarle porque se lo pidió con muchas ganas.",
        what: "Una clase de cocina con las manos en la masa para hacer butter tarts, el postre estadounidense de masa crujiente y relleno dulce, aprendiendo los pasos y viendo cómo debe quedar cada cosa.",
        when: "Una tarde tranquila entre semana, con el horno ya caliente y tiempo de sobra para hacerlo bien.",
        where: "Una cocina en Canadá, donde los butter tarts son motivo de orgullo casero y cada familia jura tener la mejor receta.",
        why: "Porque enseñar una receta de familia es un acto de confianza. Alejandra quiere aprender a hacerlos ella misma y, de paso, entiende que el inglés usa dos verbos, teach y show, donde su español usaba uno solo."
      },
      address: {
        form: "mixed",
        who: "Barb y Alejandra se tratan por el nombre desde el principio; el inglés no tiene usted, así que no hay un pronombre que marque respeto o distancia.",
        why: "En inglés la cortesía y el cariño no están en el pronombre sino en las palabras: “sweetie”, “would you”, “just”, y en el tono. Barb es cálida sin necesidad de un “usted”.",
        ifYouSwitch: "No hay a qué cambiarse: el “you” es el mismo para todos. Alejandra debe soltar la idea de marcar respeto con el pronombre y ponerlo en el léxico — un “please”, un “thank you so much”, una sonrisa en la voz."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Barb, will you teach me to make butter tarts?",
          translation: "Barb, ¿me enseñas a hacer butter tarts?",
          pronunciation: "barb, uíl yu tich mi tu méik BÓ-rer tarts",
          literal: "Barb, ¿(futuro) tú enseñar me hacer tartas-de-mantequilla?",
          why: "“Teach me to + verbo” es la estructura para “enseñar a hacer algo”. En inglés “teach” solo significa impartir un conocimiento, nunca “mostrar”."
        },
        {
          speaker: "Barb",
          target: "Of course. I'll teach you, but pay attention, okay?",
          translation: "Claro. Te enseño, pero pon atención, ¿bueno?",
          pronunciation: "of KORS. ail tich yu, bat pei a-TEN-shon, o-KÉI",
          literal: "Por-supuesto. Yo-(futuro) enseñar te, pero pagar atención, ¿bien?",
          why: "“Pay attention” lleva el verbo “pay” (pagar), no “put”. El calco “put attention”, desde “poner atención”, no existe en inglés."
        },
        {
          speaker: "Barb",
          target: "Look, first let me show you the good butter — it has to be this one.",
          translation: "Mira, primero déjame mostrarte la buena mantequilla; tiene que ser esta.",
          pronunciation: "luk, ferst let mi shóu yu de gud BÓ-rer — it jas tu bi dis uán",
          literal: "Mira, primero deja me mostrar te la buena mantequilla — ello tiene que ser esta una.",
          why: "Aquí, donde el español diría “te enseño la mantequilla”, el inglés obliga a usar “show”, no “teach”. Son dos verbos distintos."
        },
        {
          speaker: "Alejandra",
          target: "Oh, I didn't know it. Can you show me a photo of how it looks?",
          translation: "Ah, no la conocía. ¿Me muestras una foto de cómo queda?",
          pronunciation: "ou, ai DÍD-nt nou it. kan yu shóu mi a FÓU-rou of jau it luks",
          literal: "Oh, yo no sabía lo. ¿Puedes mostrar me una foto de cómo ello se-ve?",
          why: "El error clásico del hispanohablante es decir “teach me a photo”. Se dice “show me a photo”: para fotos, cosas y lugares siempre es “show”."
        },
        {
          speaker: "Barb",
          target: "Here, that's how it looks. You teach with patience, not in a hurry.",
          translation: "Toma, así queda. Uno enseña con paciencia, no de afán.",
          pronunciation: "jíer, dats jau it luks. yu tich uíd PÉI-shens, not in a JÉ-ri",
          literal: "Aquí, eso es cómo ello se-ve. Uno enseñar con paciencia, no en un apuro.",
          why: "Este “you” es impersonal, equivale a “uno”. Y “in a hurry” es “de afán / con prisa”; aquí “teach” sí es enseñar, impartir."
        },
        {
          speaker: "Alejandra",
          target: "Thank you for teaching me. I'll learn it well.",
          translation: "Gracias por enseñarme. Me lo voy a aprender bien.",
          pronunciation: "zénk yu for TÍ-ching mi. ail lern it uél",
          literal: "Gracias por enseñar-me. Yo-(futuro) aprender lo bien.",
          why: "“Teach” (enseñar) y “learn” (aprender) son verbos distintos y no se pueden intercambiar; confundirlos es un error muy común entre hispanohablantes."
        }
      ],
      vocabulary: [
        {
          term: "teach ... to",
          explanation: "La estructura inglesa para “enseñar a hacer algo”: teach + persona + to + verbo.",
          literal: "enseñar a (hacer)",
          useWhen: "Al impartir una habilidad: “teach me to cook”, “she taught me to drive”.",
          avoidWhen: "No la uses para “mostrar”: para enseñar una foto o un lugar es “show”, no “teach”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["teach me to", "learn to", "show how to", "train"],
          example: {
            target: "She taught me to make it.",
            translation: "Me enseñó a hacerlo."
          }
        },
        {
          term: "show",
          explanation: "El verbo inglés para “mostrar / dejar ver”. Es el que usa el inglés donde el español dice “enseñar la foto”.",
          literal: "mostrar",
          useWhen: "Para dejar ver algo: “show me the photo”, “I'll show you the house”.",
          avoidWhen: "No lo cambies por “teach” aunque en español los dos sean “enseñar”; en inglés son verbos distintos.",
          register: "neutral",
          region: "Inglés general.",
          related: ["show me", "let me see", "point out", "demonstrate"],
          example: {
            target: "Show me the photo.",
            translation: "Enséñame la foto."
          }
        },
        {
          term: "teach me / show me",
          explanation: "En inglés hay que elegir: “teach me” si es impartir; “show me” si es dejar ver. El español los junta en “enséñame”.",
          literal: "enséñame (impartir) / muéstrame (dejar ver)",
          useWhen: "Al pedir que te enseñen o te muestren algo, escogiendo el verbo según la intención.",
          avoidWhen: "No digas “teach me the photo”; para una foto es siempre “show me”.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["teach me", "show me", "help me", "walk me through"],
          example: {
            target: "Show me how it looks.",
            translation: "Enséñame cómo queda."
          }
        },
        {
          term: "pay attention",
          explanation: "“Prestar o poner atención” en inglés se dice con el verbo “pay” (pagar), no con “put”.",
          literal: "pagar atención",
          useWhen: "Al pedir concentración: “pay attention”, “pay close attention”.",
          avoidWhen: "Nunca digas “put attention”: es un calco de “poner atención” que en inglés no existe.",
          register: "neutral",
          region: "Inglés general.",
          related: ["pay attention", "focus", "concentrate", "watch closely"],
          example: {
            target: "Pay attention to this part.",
            translation: "Ponle atención a esta parte."
          }
        },
        {
          term: "sweetie / hon",
          explanation: "Términos cariñosos que una persona mayor usa con alguien más joven, como el “mijo / mija” colombiano.",
          literal: "cielo / cariño",
          useWhen: "Cuando alguien mayor te trata con cariño; muy común en cocinas y cafeterías.",
          avoidWhen: "Hacia alguien mayor o un desconocido de tu edad puede sonar condescendiente.",
          register: "friendly informal",
          region: "Inglés general; “hon” es más de Canadá y del sur de Estados Unidos.",
          related: ["sweetie", "honey", "hon", "dear"],
          example: {
            target: "Don't worry, sweetie.",
            translation: "Tranquila, mija."
          }
        },
        {
          term: "in a hurry / rushed",
          explanation: "La manera inglesa de decir “de afán / con prisa”. “Rushed” describe algo hecho con afán.",
          literal: "con prisa / apurado",
          useWhen: "Al decir que algo va apurado: “I'm in a hurry”, “don't rush it”.",
          avoidWhen: "No traduzcas “afán” como “eagerness”: aquí “afán” es prisa, no entusiasmo.",
          register: "neutral",
          region: "Inglés general.",
          related: ["in a hurry", "rushed", "in a rush", "take your time"],
          example: {
            target: "Don't do it in a hurry.",
            translation: "No lo hagas de afán."
          }
        },
        {
          term: "butter tarts",
          explanation: "Un postre clásico estadounidense: masa crujiente con relleno dulce de mantequilla y azúcar. Es el plato con identidad local, el equivalente al ajiaco.",
          literal: "tartaletas de mantequilla",
          useWhen: "Al hablar de repostería típica estadounidense.",
          avoidWhen: "Fuera de ese postre; es un plato concreto, no vocabulario general.",
          register: "neutral",
          region: "Canadá.",
          related: ["pastry", "filling", "pecan", "dessert"],
          example: {
            target: "These butter tarts are amazing.",
            translation: "Estas butter tarts están buenísimas."
          }
        }
      ],
      note:
        "En inglés “enseñar” se parte en dos verbos: “teach” es impartir un conocimiento y “show” es dejar ver algo. Nunca digas “teach me the photo”: es “show me the photo”. Y “poner atención” es “pay attention” (con “pay”, pagar), no “put attention”. Elegir bien entre teach y show es lo que más delata al hispanohablante.",
      culture: [
        {
          label: "Un “enséñame” que se parte en dos",
          body:
            "El inglés reparte en dos verbos lo que el español mete en uno. “Teach” es impartir un conocimiento o una habilidad; “show” es dejar ver algo: una foto, una casa, cómo se hace un paso. Un colombiano que traduce “enséñame la foto” como “teach me the photo” confunde a quien lo escucha. La regla práctica es sencilla: si vas a aprender algo, es “teach”; si solo vas a ver algo, es “show”. Esa única pregunta resuelve casi todos los casos que aparecen en el día a día."
        },
        {
          label: "“Pay attention”, no “put attention”",
          body:
            "“Prestar atención” en inglés es “pay attention”, con el verbo “pay”, que también significa pagar. El calco natural del hispanohablante es “put attention”, copiando “poner atención”, pero en inglés eso no existe y suena raro de inmediato. Conviene aprenderlo como bloque fijo: “pay attention”, “pay close attention”, “pay someone a compliment”. El inglés usa “pay” en varias expresiones donde el español jamás usaría pagar, y esta de la atención es, con diferencia, la más frecuente de todas."
        },
        {
          label: "Aprender una receta es entrar en confianza",
          body:
            "Que alguien te enseñe su receta de familia es un gesto de confianza en cualquier cultura, y en Canadá o Estados Unidos suele venir sin protocolo: te tratan por el nombre desde el saludo y te meten a la cocina sin ceremonia. Para Alejandra, acostumbrada al usted y a cierta formalidad con los mayores, esa cercanía inmediata puede sorprender. No es falta de respeto: es la manera anglo de hacer sentir en casa. Aceptarla con naturalidad, sin buscar la distancia del usted, es parte de encajar."
        },
        {
          label: "El cariño va en la palabra, no en el usted",
          body:
            "El inglés no tiene usted, así que el cariño no vive en el pronombre sino en las palabras: “sweetie”, “hon”, “dear”, y en suavizadores como “would you”, “just”, “a little”. Donde el bogotano combina usted con “mijo”, la cocinera estadounidense combina el “you” de siempre con “sweetie” y un tono cálido. Para un hispanohablante esto exige cambiar el chip: la temperatura de una conversación en inglés no se mide en el pronombre, sino en el léxico y en la entonación."
        }
      ],
      pitfalls: [
        {
          mistake: "“Teach me the photo.”",
          whyItFails: "En inglés “teach” solo es impartir conocimiento. Para una foto se usa “show”, porque el inglés separa enseñar (teach) de mostrar (show).",
          sayInstead: "Show me the photo."
        },
        {
          mistake: "“Put attention, please.”",
          whyItFails: "Es un calco de “poner atención”. El inglés usa el verbo “pay”, no “put”, para pedir atención.",
          sayInstead: "Pay attention, please."
        },
        {
          mistake: "“Can you teach me your new apartment?”",
          whyItFails: "Mostrar un lugar es “show”, no “teach”. “Teach” solo sirve para conocimientos y habilidades, no para dejar ver un sitio.",
          sayInstead: "Can you show me your new apartment?"
        },
        {
          mistake: "“Explain me how to make it.”",
          whyItFails: "El verbo “explain” exige “to me”: “explain it to me”. El calco de “explícame” se salta ese “to” y suena mal.",
          sayInstead: "Explain it to me. / Can you explain how to make it?"
        }
      ],
      variations: [
        {
          form: "teach me to...",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "La forma estándar de pedir que te enseñen una habilidad."
        },
        {
          form: "show me...",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Cuando quieres que te dejen ver algo, no que te lo enseñen a hacer."
        },
        {
          form: "can you show me how to...?",
          register: "polite neutral",
          region: "Inglés general",
          whenToUse: "Une las dos ideas: te muestran algo mientras aprendes a hacerlo."
        },
        {
          form: "walk me through it",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Coloquial: pedir que te guíen paso a paso por algo."
        },
        {
          form: "pay attention",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Para pedir concentración; nunca “put attention”."
        }
      ],
      prompt: "Alejandra quiere que Barb le deje ver una foto del postre. ¿Cuál oración en inglés es la correcta?",
      choices: [
        "Teach me a photo of the dessert.",
        "Show me a photo of the dessert.",
        "Learn me a photo of the dessert."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Barb va a dejarte ver la mantequilla. ¿Qué dice en inglés?",
          choices: [
            "Let me show you the butter.",
            "Let me teach you the butter.",
            "Let me learn you the butter."
          ],
          answer: 0,
          tests: "“show” para dejar ver, no “teach”"
        },
        {
          prompt: "¿Cómo se dice “pon atención” en inglés?",
          choices: [
            "Put attention.",
            "Give attention.",
            "Pay attention."
          ],
          answer: 2,
          tests: "“pay attention”, no el calco “put attention”"
        },
        {
          prompt: "Alejandra quiere que le enseñen a hacer el postre. ¿Cuál es natural?",
          choices: [
            "Show me to make the tarts.",
            "Teach me to make the tarts.",
            "Explain me to make the tarts."
          ],
          answer: 1,
          tests: "“teach me to + verbo” para impartir una habilidad"
        },
        {
          prompt: "¿Cómo dice Barb “no lo hagas de afán”?",
          choices: [
            "Don't do it with eagerness.",
            "Don't do it of hurry.",
            "Don't do it in a hurry."
          ],
          answer: 2,
          tests: "“in a hurry” para “de afán”"
        }
      ]
    }
  },
  {
    id: "chatting-about-university-on-the-barranquilla-bus",
    level: "Starter · Getting around",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "familiar",
    pathways: ["foundation"],
    verb: "estudiar",
    review: "pending",
    es: {
      title: "Hablar de la universidad en el bus de Barranquilla",
      situation:
        "En un Transmetro de Barranquilla, Alex se pone a conversar con Yuranis, una estudiante costeña, sobre qué estudia. Entre el calor y el acento cantado del Caribe, Alex tiene que entender que “estudiar una carrera” no es “career”, que “estoy estudiando” suele querer decir “estoy en la universidad” y que aquí se cuenta por semestres y se sufre por los parciales. Todo en tú, como se habla en la Costa.",
      setting: {
        who: "Yuranis is a barranquillera studying medicine, quick and warm the way the coast talks. Alex is the foreigner sharing a seat who decides to strike up a conversation.",
        what: "A friendly bus chat about what each of them studies, sliding through the false friend carrera, the meaning of estoy estudiando, and student life.",
        when: "A hot weekday morning on the Transmetro, the kind of ride long enough for a real conversation.",
        where: "Barranquilla, on the Caribbean coast, where people use tú, drop their s's and talk with music in the voice.",
        why: "Because small talk about studies is how young Colombians place each other. For Alex it's a low-stakes way to practice, and a chance to stop mistranslating carrera as “career” before it trips him up for good."
      },
      address: {
        form: "tú",
        who: "Alex and Yuranis are peers, both young, meeting casually on a bus, so tú is the natural fit.",
        why: "On the Caribbean coast tú is the everyday pronoun far more than usted, even between strangers of a similar age. It signals friendliness without presuming too much.",
        ifYouSwitch: "Jumping to usted with Yuranis would feel oddly stiff and distant on the coast, almost cold. Here tú is the warm default among young people; save usted for elders or clearly formal situations, not a bus chat between peers."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Oye, ¿y tú qué estudias?",
          translation: "Hey, so what do you study?",
          pronunciation: "OH-yeh, ee too keh es-TOO-dyas",
          literal: "Hey, and you what you-study?",
          why: "“¿Qué estudias?” asks about someone's field of study. In Colombia the answer is usually a whole degree, not a single class you're taking."
        },
        {
          speaker: "Yuranis",
          target: "Estoy estudiando Medicina, voy en quinto semestre.",
          translation: "I'm studying Medicine, I'm in my fifth semester.",
          pronunciation: "es-TOY es-too-DYAN-doh meh-dee-SEE-nah, boy en KEEN-toh seh-MES-treh",
          literal: "I-am studying Medicine, I-go in fifth semester.",
          why: "“Estar estudiando” + a field often means “I'm in college doing that degree,” not just studying this minute. Progress is counted in semesters, not years."
        },
        {
          speaker: "Alex",
          target: "¡Erda! ¿Y esa carrera es muy dura?",
          translation: "Wow! And is that degree really hard?",
          pronunciation: "EHR-dah! ee EH-sah kah-REH-rah es mooy DOO-rah",
          literal: "Wow! And that degree is very hard?",
          why: "Here carrera means the degree program — a false friend, not “career” in the English sense. “Erda” is a very Costa Caribe exclamation of surprise."
        },
        {
          speaker: "Yuranis",
          target: "Full. Toca estudiar un montón para los parciales.",
          translation: "Really hard. You've got to study a ton for the midterms.",
          pronunciation: "fool. TOH-kah es-too-DYAR oon mon-TOHN PAH-rah lohs par-SYAH-les",
          literal: "Full. It-falls-to study a pile for the midterms.",
          why: "This is estudiar in its plain sense: to study for exams. “Parciales” are midterms; “full” as an intensifier and impersonal “toca” are both very Colombian."
        },
        {
          speaker: "Alex",
          target: "Yo estudié algo de biología, pero no me la aprendí bien.",
          translation: "I studied some biology, but I never really learned it well.",
          pronunciation: "yoh es-too-DYEH AHL-goh deh byoh-loh-HEE-ah, PEH-roh noh meh lah ah-pren-DEE byen",
          literal: "I studied something of biology, but not me it I-learned well.",
          why: "Estudiar (to study) and aprenderse (to learn for good) are different: you can study something without ever aprendértelo, truly mastering it."
        },
        {
          speaker: "Yuranis",
          target: "Tranquilo. Si estudias conmigo, te la aprendes de una.",
          translation: "Don't worry. If you study with me, you'll learn it in no time.",
          pronunciation: "tran-KEE-loh. see es-TOO-dyas kon-MEE-goh, teh lah ah-PREN-des deh OO-nah",
          literal: "Calm. If you-study with-me, you it you-learn of one.",
          why: "Note the tú forms estudias and aprendes. “De una” is Colombian for “right away / no problem,” a warm way to close the offer."
        }
      ],
      vocabulary: [
        {
          term: "estudiar",
          explanation: "The base verb “to study.” It covers studying for exams and studying a subject.",
          literal: "to study",
          useWhen: "For hitting the books: estudiar para el examen, estudiar inglés.",
          avoidWhen: "Don't stretch it to “learn / master” — that is aprender or aprenderse.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["estudiar para", "repasar", "aprender", "hacer tareas"],
          example: {
            target: "Tengo que estudiar hoy.",
            translation: "I have to study today."
          }
        },
        {
          term: "estudiar una carrera",
          explanation: "To do a university degree. “Carrera” here is a degree program, NOT “career” — a classic false friend.",
          literal: "to study a degree (career)",
          useWhen: "Talking about what degree someone is doing: estudiar una carrera, estudiar Derecho.",
          avoidWhen: "Don't read carrera as the English “career” (a job path); that is “carrera profesional” or “trayectoria.”",
          register: "neutral",
          region: "Universal; the false friend trips up English speakers everywhere.",
          related: ["hacer una carrera", "estudiar Derecho", "universidad", "pregrado"],
          example: {
            target: "Estudia una carrera en la Uninorte.",
            translation: "She's doing a degree at Uninorte."
          }
        },
        {
          term: "estar estudiando",
          explanation: "Often means “to be a university student,” not just “studying right now.” Context decides which.",
          literal: "to be studying",
          useWhen: "Answering what you do with your life: “estoy estudiando” = I'm in college.",
          avoidWhen: "When you literally mean studying this minute, add the object: estoy estudiando para el parcial.",
          register: "friendly informal",
          region: "Colombia.",
          related: ["estoy estudiando", "estar en la universidad", "ser estudiante", "estudiar y trabajar"],
          example: {
            target: "Ahora estoy estudiando.",
            translation: "Right now I'm in college."
          }
        },
        {
          term: "hacer una carrera",
          explanation: "A common alternative to “estudiar una carrera,” leaning a little more on completing the whole degree.",
          literal: "to do a degree",
          useWhen: "Talking about pursuing a full degree: hacer una carrera universitaria.",
          avoidWhen: "Same false-friend trap — carrera is the degree here, not the job.",
          register: "neutral",
          region: "Universal.",
          related: ["estudiar una carrera", "graduarse", "pregrado", "posgrado"],
          example: {
            target: "Quiero hacer una carrera.",
            translation: "I want to do a degree."
          }
        },
        {
          term: "parciales",
          explanation: "Midterm exams held during the semester. A perennial source of student stress.",
          literal: "partials (midterms)",
          useWhen: "Talking about university exams: estudiar para los parciales.",
          avoidWhen: "They aren't the final — that is “el final” or “examen final.”",
          register: "friendly informal",
          region: "Colombia and much of Latin America.",
          related: ["parcial", "examen final", "nota", "semestre"],
          example: {
            target: "Tengo parciales esta semana.",
            translation: "I have midterms this week."
          }
        },
        {
          term: "semestre",
          explanation: "Colombians measure degree progress in semesters, not years: “voy en quinto semestre.”",
          literal: "semester",
          useWhen: "Saying how far along you are: primer semestre, quinto semestre.",
          avoidWhen: "Saying “estoy en segundo año” sounds foreign in Colombia; count semesters instead.",
          register: "neutral",
          region: "Colombia.",
          related: ["semestre", "materia", "créditos", "graduarse"],
          example: {
            target: "Voy en quinto semestre.",
            translation: "I'm in my fifth semester."
          }
        },
        {
          term: "full",
          explanation: "A Colombian intensifier meaning “a lot / really,” borrowed from English but used differently.",
          literal: "full (a lot)",
          useWhen: "Emphasizing amount or degree: estudiar full, hay full gente.",
          avoidWhen: "In formal writing; it is casual, spoken slang.",
          register: "friendly informal",
          region: "Colombia, strong on the Caribbean coast.",
          related: ["un montón", "harto", "bastante", "a morir"],
          example: {
            target: "Toca estudiar full.",
            translation: "You've got to study a ton."
          }
        }
      ],
      note:
        "Watch “carrera”: estudiar una carrera means to do a university degree, not to pursue a “career.” And “estoy estudiando,” on its own, usually means “I'm a university student,” not just “I'm studying now.” Colombians count progress in semestres and stress over parciales (midterms). Keep estudiar (study) apart from aprenderse (master for good).",
      culture: [
        {
          label: "Carrera is a degree, not a career",
          body:
            "For an English speaker, “carrera” is a trap. “Estudiar una carrera” means to do a university degree — Law, Medicine, Engineering — not to pursue a “career” in the English sense. The job-path meaning exists too, as “carrera profesional” or “trayectoria,” but on its own, in a student's mouth, carrera is the degree. So when Yuranis says “esta carrera es dura,” she means the program is hard, not that her professional life is difficult. Hearing it as “career” quietly derails the whole exchange."
        },
        {
          label: "Semesters, parciales and the student calendar",
          body:
            "Colombian universities run on semesters, and students count their progress that way: “voy en quinto semestre,” never “I'm in second year.” The rhythm of the term is set by parciales — midterm exams that arrive in waves and swallow student life — and by the final nota, the grade. Saying “tengo parciales” explains a lot at once: stress, no going out, coffee at midnight. Learning this vocabulary lets you follow any student conversation and ask the right thing: “¿Cómo te fue en los parciales?”"
        },
        {
          label: "The Costa Caribe way of talking",
          body:
            "On the Caribbean coast people speak fast, warm and loud. “Erda” — softened from a stronger word — is an all-purpose cry of surprise; “full” means a lot; “¿oíste?” tags the end of sentences; and the final s often vanishes, so “los parciales” can sound like “lo parciale.” Costeños use tú, not usted, far more than people in the interior, and the whole register runs closer and more playful. None of this is careless: it's a distinct, proud way of speaking that rewards you for leaning in and matching the warmth."
        },
        {
          label: "The “¿estudias o trabajas?” icebreaker",
          body:
            "“¿Estudias o trabajas?” is a classic Colombian opener, especially among young people meeting for the first time. It isn't nosy; it's the normal way to place someone and find common ground. The answer “estoy estudiando” signals you're at university, and usually invites a follow-up about your carrera and your semestre. Knowing the script lets Alex hold his own: ask it, answer it, and bounce it back — the small talk that turns a shared bus seat into an actual conversation."
        }
      ],
      pitfalls: [
        {
          mistake: "Reading “carrera” as the English “career.”",
          whyItFails: "In student talk carrera is the degree program. Hearing “career” makes you take what someone studies for what job they already hold.",
          sayInstead: "Estudio una carrera en la universidad."
        },
        {
          mistake: "Expecting “estoy estudiando” to mean only “right now.”",
          whyItFails: "Bare “estoy estudiando” usually means “I'm a university student.” If you mean this very moment, name the object: estoy estudiando para el parcial.",
          sayInstead: "Estoy estudiando para el parcial."
        },
        {
          mistake: "Counting progress in years (“estoy en segundo año”).",
          whyItFails: "Colombians count semesters. You'll be understood, but it marks you as foreign and misses the natural phrasing.",
          sayInstead: "Voy en cuarto semestre."
        },
        {
          mistake: "Using estudiar when you mean “master / learn for good.”",
          whyItFails: "You can estudiar something for hours and still not aprendértelo. The two verbs are not interchangeable.",
          sayInstead: "Me lo estudié y me lo aprendí."
        }
      ],
      variations: [
        {
          form: "¿Qué estudias?",
          register: "friendly informal",
          region: "Universal (tú)",
          whenToUse: "The everyday way to ask someone's field of study."
        },
        {
          form: "¿Qué estás estudiando?",
          register: "friendly informal",
          region: "Universal",
          whenToUse: "The same idea, leaning a little more on the current program."
        },
        {
          form: "¿Estudiás?",
          register: "friendly informal",
          region: "Medellín / paisa (voseo)",
          whenToUse: "The vos version you'd hear in Antioquia, with the stress on the ending."
        },
        {
          form: "¿Qué carrera hace?",
          register: "polite formal",
          region: "Colombia (usted)",
          whenToUse: "Formal, for example asking an adult you've only just met."
        },
        {
          form: "¿Estudias o trabajas?",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "The classic icebreaker between young people meeting for the first time."
        }
      ],
      prompt: "Yuranis says “estudio una carrera en la universidad.” What does carrera mean here?",
      choices: [
        "Her career, meaning the professional working life she has already built up over the years.",
        "A running race she takes part in as part of the university's sports program each term.",
        "A university degree program — carrera is a false friend, not the English “career.”"
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "A Colombian your age says just “estoy estudiando.” Most likely they mean…",
          choices: [
            "…that they are studying at this very second and honestly can't talk to you right now.",
            "…that they're a university student — bare “estoy estudiando” usually means being in college.",
            "…that they already finished a degree and are now searching for a stable, well-paid job."
          ],
          answer: 1,
          tests: "estar estudiando = being in college"
        },
        {
          prompt: "What are “parciales”?",
          choices: [
            "Midterm exams taken during the semester.",
            "The final exams at the very end of the degree.",
            "Tuition payments made during the semester."
          ],
          answer: 0,
          tests: "parciales are midterm exams"
        },
        {
          prompt: "How does Yuranis say how far along she is in her degree?",
          choices: [
            "Estoy en segundo año.",
            "Llevo dos temporadas.",
            "Voy en quinto semestre."
          ],
          answer: 2,
          tests: "counting progress in semestres, not years"
        },
        {
          prompt: "What's the difference between “lo estudié” and “me lo aprendí”?",
          choices: [
            "“Lo estudié” is I studied it; “me lo aprendí” is I actually learned it and made it stick.",
            "There is no difference whatsoever; the two phrases are completely interchangeable in Colombia.",
            "“Lo estudié” means I taught it to somebody, and “me lo aprendí” means I forgot it soon after."
          ],
          answer: 0,
          tests: "estudiar (study) vs aprenderse (master)"
        }
      ]
    },
    en: {
      title: "Hablar de la universidad en el bus de Barranquilla",
      situation:
        "La misma charla, pero para quien aprende inglés: Alejandra, de Barranquilla, está en Canadá y en el bus conversa con Megan, una estudiante local, sobre qué estudia. Descubre dos falsos amigos peligrosos: “career” no es su carrera de estudios (eso es “degree” o “major”), y “college” es la universidad, no el colegio. Además, en inglés se cuenta por años, no por semestres, y los parciales son “midterms”.",
      setting: {
        who: "Megan es una estudiante estadounidense de medicina, rápida y amable. Alejandra es la colombiana que comparte asiento y se anima a entablar conversación en inglés.",
        what: "Una charla de bus sobre qué estudia cada una, pasando por el falso amigo “career”, por “college” y por cómo se cuentan los años de universidad.",
        when: "Una mañana entre semana, en un trayecto lo bastante largo como para una conversación de verdad.",
        where: "Una ciudad de Canadá, en un autobús urbano, lejos del calor pero con las mismas ganas de conversar que en la Costa.",
        why: "Porque la charla sobre estudios es como los jóvenes se ubican entre sí. Para Alejandra es una forma sin riesgo de practicar y de dejar de traducir “carrera” como “career” antes de que el error se le vuelva costumbre."
      },
      address: {
        form: "mixed",
        who: "Alejandra y Megan son dos jóvenes que se conocen por casualidad en el bus; se tratan por el nombre, con naturalidad.",
        why: "El inglés no tiene tú ni usted: hay un solo “you”. La cercanía se marca con el tono, el nombre de pila y expresiones informales, no con el pronombre.",
        ifYouSwitch: "No hay pronombre que cambiar. Alejandra, acostumbrada a escoger entre tú y usted, debe soltar esa decisión y confiar en que el registro amable ya está en las palabras y en la sonrisa, no en un “usted” que en inglés no existe."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Hey, what are you studying?",
          translation: "Oye, ¿y tú qué estudias?",
          pronunciation: "jei, uát ar yu ES-ta-ding",
          literal: "Oye, ¿qué estás tú estudiando?",
          why: "“What are you studying?” es la forma normal de preguntar por la carrera. El inglés usa el presente continuo para esta pregunta."
        },
        {
          speaker: "Megan",
          target: "I'm studying medicine. I'm in my second year.",
          translation: "Estudio Medicina. Voy en segundo año.",
          pronunciation: "aim ES-ta-ding MÉ-di-sin. aim in mai SÉ-cond yíer",
          literal: "Yo-estoy estudiando medicina. Yo-estoy en mi segundo año.",
          why: "En inglés se cuenta por años (“second year”), no por semestres. Además “medicine” va en minúscula y sin artículo."
        },
        {
          speaker: "Alejandra",
          target: "Wow! Is that degree really hard?",
          translation: "¡Erda! ¿Y esa carrera es muy dura?",
          pronunciation: "uáu! is dat di-GRÍ RÍ-li jard",
          literal: "¡Guau! ¿Es ese título muy duro?",
          why: "Ojo: “carrera” de estudios es “degree”, no “career”. Decir “career” aquí se referiría a su vida profesional, no a sus estudios."
        },
        {
          speaker: "Megan",
          target: "Yeah. I have to study a ton for midterms.",
          translation: "Full. Toca estudiar un montón para los parciales.",
          pronunciation: "yea. ai jav tu ES-ta-di a ton for MÍD-terms",
          literal: "Sí. Yo tengo que estudiar un montón para exámenes-de-mitad.",
          why: "“Midterms” son los parciales. “A ton” es “un montón”. Aquí “study” es estudiar en su sentido llano, de hincar codos."
        },
        {
          speaker: "Alejandra",
          target: "I studied some biology, but I never really learned it.",
          translation: "Yo estudié algo de biología, pero no me la aprendí bien.",
          pronunciation: "ai ES-ta-did som bai-Ó-lo-yi, bat ai NÉ-ver RÍ-li lernd it",
          literal: "Yo estudié algo-de biología, pero yo nunca de-verdad aprendí lo.",
          why: "“Study” (estudiar) y “learn” (aprender) son distintos: puedes estudiar algo sin llegar a aprenderlo, igual que en español."
        },
        {
          speaker: "Megan",
          target: "Don't worry. If you study with me, you'll learn it fast.",
          translation: "Tranquila. Si estudias conmigo, te la aprendes de una.",
          pronunciation: "dont UÓ-ri. if yu ES-ta-di uíd mi, yul lern it fast",
          literal: "No te-preocupes. Si tú estudiar conmigo, tú-(futuro) aprender lo rápido.",
          why: "“If you study..., you'll learn...”: el inglés usa presente en la condición y futuro con “will” en el resultado."
        }
      ],
      vocabulary: [
        {
          term: "study",
          explanation: "El verbo “estudiar”. Vale para estudiar para un examen y para estudiar una materia.",
          literal: "estudiar",
          useWhen: "Al hincar codos: “study for the exam”, “study English”.",
          avoidWhen: "No lo estires a “aprender / dominar”: eso es “learn”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["study for", "review", "learn", "do homework"],
          example: {
            target: "I have to study today.",
            translation: "Tengo que estudiar hoy."
          }
        },
        {
          term: "do a degree / major in",
          explanation: "Las formas inglesas de “estudiar una carrera”. “Major in” es sobre todo de Estados Unidos y Canadá.",
          literal: "hacer un título / especializarse en",
          useWhen: "Al decir qué estudias: “I'm doing a degree in law”, “I major in biology”.",
          avoidWhen: "No digas “study a career”: “career” es la vida profesional, no el título universitario.",
          register: "neutral",
          region: "Inglés general; “major in” es norteamericano.",
          related: ["do a degree", "major in", "study law", "graduate in"],
          example: {
            target: "I'm doing a degree in medicine.",
            translation: "Estudio una carrera de medicina."
          }
        },
        {
          term: "degree",
          explanation: "El título universitario. Es la traducción correcta de “carrera” cuando se habla de estudios.",
          literal: "título / grado",
          useWhen: "Al referirte a la carrera como programa: “a medicine degree”, “finish my degree”.",
          avoidWhen: "No lo confundas con “career” (la trayectoria laboral) ni con “race” (carrera de correr).",
          register: "neutral",
          region: "Inglés general.",
          related: ["undergraduate", "bachelor's", "major", "graduate"],
          example: {
            target: "It's a hard degree.",
            translation: "Es una carrera dura."
          }
        },
        {
          term: "career",
          explanation: "“Career” NO es la carrera de estudios: es la trayectoria o vida profesional. Es el falso amigo al revés.",
          literal: "trayectoria profesional",
          useWhen: "Al hablar del recorrido laboral: “a long career in medicine”.",
          avoidWhen: "No lo uses para el programa universitario; ahí es “degree” o “major”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["job", "profession", "path", "field"],
          example: {
            target: "She had a long career.",
            translation: "Tuvo una larga trayectoria."
          }
        },
        {
          term: "midterms",
          explanation: "Los parciales: exámenes hacia la mitad del semestre. Los finales son “finals”.",
          literal: "exámenes de mitad",
          useWhen: "Al hablar de época de exámenes: “I have midterms this week”.",
          avoidWhen: "No los confundas con “finals”, que son los exámenes finales del curso.",
          register: "friendly informal",
          region: "Inglés general (Norteamérica).",
          related: ["finals", "exam", "quiz", "grade"],
          example: {
            target: "I have midterms this week.",
            translation: "Tengo parciales esta semana."
          }
        },
        {
          term: "year (freshman, sophomore)",
          explanation: "En inglés norteamericano se cuenta por años, no por semestres; cada año tiene su nombre propio.",
          literal: "año (de carrera)",
          useWhen: "Al decir en qué vas: “I'm a first-year”, “she's a sophomore”.",
          avoidWhen: "No cuentes por semestres al hablar en inglés casual; suena raro allá.",
          register: "friendly informal",
          region: "Estados Unidos y Canadá.",
          related: ["freshman", "sophomore", "junior", "senior"],
          example: {
            target: "I'm in my second year.",
            translation: "Voy en segundo año."
          }
        },
        {
          term: "a ton",
          explanation: "Expresión coloquial para “un montón / full”. Sirve para cantidad y para intensidad.",
          literal: "una tonelada",
          useWhen: "Al enfatizar cantidad: “I studied a ton”, “thanks a ton”.",
          avoidWhen: "En registro formal o escrito; es claramente coloquial.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["a lot", "tons of", "loads", "heaps"],
          example: {
            target: "I studied a ton.",
            translation: "Estudié full."
          }
        }
      ],
      note:
        "Cuidado con dos falsos amigos: “career” NO es tu carrera de estudios (eso es “degree” o “major in”), y “college” en Estados Unidos es la universidad, no el colegio. Para decir qué estudias, di “I'm studying medicine” o “I'm doing a degree in...”. Y en inglés norteamericano se cuenta por años (“second year”), no por semestres.",
      culture: [
        {
          label: "“Career” no es tu carrera",
          body:
            "El falso amigo más traicionero de este tema es “career”. En inglés “career” es tu trayectoria o vida profesional, no el programa universitario. Si dices “I study a career”, el angloparlante no entiende: para la carrera de estudios se dice “degree” (“I'm doing a degree in law”) o, en Norteamérica, “major” (“I major in biology”). Guarda “career” para frases como “a career in medicine”, cuando de verdad hablas del recorrido laboral de toda una vida, y no del salón de clases ni del semestre en curso."
        },
        {
          label: "“College” no es el colegio",
          body:
            "Otro falso amigo es “college”. En Estados Unidos “college” es la universidad, no el colegio; de hecho “I'm in college” significa “estoy en la universidad”. El colegio de secundaria es “high school”. Para rematar, “school” a secas también puede significar la universidad en boca de un estadounidense (“where do you go to school?” le pregunta a un universitario). Un colombiano que traduce “colegio” como “college” termina diciendo que va a la universidad cuando quería hablar del bachillerato."
        },
        {
          label: "Se cuenta por años: freshman, sophomore…",
          body:
            "En Estados Unidos y Canadá los estudiantes se cuentan por años, y cada año lleva nombre propio: “freshman” (primero), “sophomore” (segundo), “junior” (tercero) y “senior” (cuarto). Donde un colombiano dice “voy en quinto semestre”, un estadounidense dice “I'm a second-year” o “I'm a sophomore”. Los exámenes de mitad de curso son “midterms” y los finales, “finals”. Manejar este vocabulario te deja seguir cualquier conversación de universidad sin perder el hilo ni traducir semestres a años sobre la marcha."
        },
        {
          label: "“What are you studying?” como saludo",
          body:
            "“What are you studying?” y “what do you do?” están entre las primeras preguntas al conocer a alguien en Canadá o Estados Unidos, igual que el “¿estudias o trabajas?” colombiano. No es indiscreción: es la manera de ubicarte y buscar tema. La respuesta “I'm studying medicine” suele abrir un intercambio sobre tu “degree” y tu “year”. Saber el guion le permite a Alejandra sostener la charla: preguntar, responder y devolver la pregunta, que es lo que convierte un viaje en bus en una conversación de verdad."
        }
      ],
      pitfalls: [
        {
          mistake: "“I study a career in medicine.”",
          whyItFails: "“Career” es la vida profesional, no el programa de estudios. Para la carrera universitaria es “degree” o “major”.",
          sayInstead: "I'm doing a degree in medicine. / I'm studying medicine."
        },
        {
          mistake: "“I go to college.” (queriendo decir el colegio de secundaria)",
          whyItFails: "“College” es la universidad en Estados Unidos, no el colegio. El colegio de secundaria es “high school”.",
          sayInstead: "I go to high school."
        },
        {
          mistake: "“Actually, I study medicine.” (queriendo decir “actualmente”)",
          whyItFails: "“Actually” significa “en realidad / de hecho”, no “actualmente”. Para “actualmente” se dice “currently”.",
          sayInstead: "Currently, I'm studying medicine."
        },
        {
          mistake: "“I assist to the university every day.”",
          whyItFails: "“Assist” es ayudar, no asistir a un sitio. “Asistir a” (ir) se dice “attend” o “go to”.",
          sayInstead: "I attend the university every day. / I go to my university every day."
        }
      ],
      variations: [
        {
          form: "What are you studying?",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "La forma normal de preguntar por la carrera de alguien."
        },
        {
          form: "What's your major?",
          register: "friendly informal",
          region: "Estados Unidos y Canadá",
          whenToUse: "Muy norteamericana; pregunta directamente por la especialidad."
        },
        {
          form: "I'm doing a degree in...",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Para decir qué carrera haces, sin caer en el falso amigo “career”."
        },
        {
          form: "I major in...",
          register: "friendly informal",
          region: "Estados Unidos y Canadá",
          whenToUse: "El equivalente coloquial norteamericano de “estudio la carrera de...”."
        },
        {
          form: "What do you do?",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Pregunta amplia por estudios o trabajo al conocer a alguien."
        }
      ],
      prompt: "Alejandra quiere decir en inglés “estudio una carrera de medicina”. ¿Cuál es correcta?",
      choices: [
        "I'm doing a degree in medicine.",
        "I study a career of medicine.",
        "I make a race of medicine."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "En inglés, ¿qué significa “career”?",
          choices: [
            "El programa universitario que cursas.",
            "La trayectoria o vida profesional de una persona.",
            "Una competencia en la que corres."
          ],
          answer: 1,
          tests: "“career” es trayectoria, no carrera de estudios"
        },
        {
          prompt: "En Estados Unidos, si alguien dice “I'm in college”, quiere decir que…",
          choices: [
            "…está en high school, no en la universidad.",
            "…trabaja como profesor en una universidad.",
            "…está estudiando en la universidad."
          ],
          answer: 2,
          tests: "“college” es la universidad, no el colegio"
        },
        {
          prompt: "¿Cómo se dice “asisto a la universidad” en inglés?",
          choices: [
            "I go to my university.",
            "I assist to the university.",
            "I present to the university."
          ],
          answer: 0,
          tests: "“attend / go to”, no el falso amigo “assist”"
        },
        {
          prompt: "Alejandra quiere decir “actualmente estudio medicina”. ¿Cuál es correcta?",
          choices: [
            "Actually I study medicine.",
            "Currently, I'm studying medicine.",
            "In this actuality I study medicine."
          ],
          answer: 1,
          tests: "“currently” para “actualmente”, no “actually”"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/12-foundation-learning.js");
