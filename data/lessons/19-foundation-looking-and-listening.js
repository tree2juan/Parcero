/*
 * Lesson block: foundation / looking, listening and hearing.
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
    id: "reading-the-paintings-at-the-bogota-museum",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "courteous",
    pathways: ["foundation"],
    verb: "mirar",
    review: "pending",
    es: {
      title: "Mirar los cuadros en el museo de Bogotá",
      situation:
        "En La Candelaria, en Bogotá, Alex recorre el Museo Botero con Don Hernán, un guía voluntario que le muestra las salas. Entre las figuras redondas de Botero, Alex tiene que entender que mirar no es lo mismo que ver, que “mire, le explico” no es una orden de mirar nada, y que en español uno mira los cuadros pero ve televisión. Todo en usted, como se habla con un guía mayor en Bogotá.",
      setting: {
        who: "Don Hernán is a retired teacher who volunteers as a museum guide and loves a patient explanation. Alex is the foreign visitor happy to be walked slowly through the rooms.",
        what: "A guided walk through the Botero museum, learning to look deliberately at art and to tell mirar from ver along the way.",
        when: "A quiet weekday morning, the galleries nearly empty, with time to linger at each canvas.",
        where: "The Museo Botero in Bogotá's Candelaria, free to enter and full of Fernando Botero's rounded figures.",
        why: "Because a museum is where seeing becomes looking. Alex wants to really study the art rather than drift past it, and that shift — from ver to mirar — is exactly what Don Hernán is teaching without making a grammar lesson of it."
      },
      address: {
        form: "usted",
        who: "Alex uses usted with Don Hernán because he is older, a guide, and the authority in the room.",
        why: "Usted is the Bogotá default of respect toward an older person and toward anyone showing you something. It fits the calm, courteous register of a museum visit.",
        ifYouSwitch: "Sliding into tú with Don Hernán would sound abrupt and a little disrespectful in Bogotá, where usted is the warm norm even among people who like each other. Hold usted; he may soften into affection, but the pronoun stays."
      },
      dialogue: [
        {
          speaker: "Don Hernán",
          target: "Mire, le explico: no es lo mismo mirar que ver.",
          translation: "Look, let me explain: looking and seeing aren't the same thing.",
          pronunciation: "MEE-reh, leh ex-PLEE-koh: noh es loh MEES-moh mee-RAR keh behr",
          literal: "Look, to-you I-explain: not is the same to-look than to-see.",
          why: "This “mire” is a discourse marker — “look, let me explain” — not an order to look at anything. Colombians open explanations with it constantly, and it previews the mirar/ver contrast."
        },
        {
          speaker: "Alex",
          target: "¿Entonces yo qué hago, miro el cuadro o lo veo?",
          translation: "So what do I do, look at the painting or see it?",
          pronunciation: "en-TOHN-ses yoh keh AH-goh, MEE-roh el KWAH-droh oh loh BEH-oh",
          literal: "Then I what I-do, I-look the painting or it I-see?",
          why: "Notice mirar takes its object directly — “miro el cuadro,” no preposition — where English needs “look AT.” Slipping an “a” before a thing is a classic learner error."
        },
        {
          speaker: "Don Hernán",
          target: "Usted lo mira: se detiene y lo observa. Ver, uno ve todo sin querer.",
          translation: "You look at it: you stop and observe it. Seeing, you see everything without meaning to.",
          pronunciation: "oos-TED loh MEE-rah: seh deh-TYEH-neh ee loh ob-SEHR-bah. behr, OO-noh beh TOH-doh seen keh-REHR",
          literal: "You it look: yourself stops and it observes. To-see, one sees everything without to-want.",
          why: "The core contrast: mirar is deliberate, directed looking; ver is passive perception. “Uno ve” uses impersonal uno for “one/you sees.”"
        },
        {
          speaker: "Alex",
          target: "Ah, ya. Mire esa figura, ¡qué gorda tan bella!",
          translation: "Ah, I get it. Look at that figure, what a beautifully plump one!",
          pronunciation: "ah, yah. MEE-reh EH-sah fee-GOO-rah, keh GOR-dah tan BEH-yah",
          literal: "Ah, already. Look that figure, what fat so beautiful!",
          why: "Here Alex uses “mire” correctly as an attention-getter — “look at that.” With Botero's rounded figures, calling one “gorda” is admiring, not rude."
        },
        {
          speaker: "Don Hernán",
          target: "¡Mírela bien! Fíjese en las manos, en el detalle.",
          translation: "Look at it closely! Notice the hands, the detail.",
          pronunciation: "MEE-reh-lah byen! fee-HEH-seh en las MAH-nohs, en el deh-TAH-yeh",
          literal: "Look-it well! Notice-yourself in the hands, in the detail.",
          why: "“Mírela” attaches the object pronoun to the usted command. “Fíjese en” is a stronger “pay close attention to / notice,” one notch beyond mirar."
        },
        {
          speaker: "Alex",
          target: "La estoy mirando. No la había visto así.",
          translation: "I'm looking at it. I hadn't seen it that way.",
          pronunciation: "lah es-TOY mee-RAN-doh. noh lah ah-BEE-ah BEES-toh ah-SEE",
          literal: "It I-am looking. Not it I-had seen so.",
          why: "“Estoy mirando” (deliberate, ongoing) sits right against “había visto” (passive perception): he was seeing it before, but only now is he really looking. That is the whole lesson in one line."
        }
      ],
      vocabulary: [
        {
          term: "mirar",
          explanation: "To look at, to direct your gaze on purpose. It is transitive: it takes its object with no preposition.",
          literal: "to look (at)",
          useWhen: "When you actively look at something: mirar un cuadro, mirar el mapa.",
          avoidWhen: "Don't add “a” before a thing — “mirar a el cuadro” is wrong; it's mirar el cuadro.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["mirar el cuadro", "observar", "fijarse en", "echar un vistazo"],
          example: {
            target: "Mira este cuadro.",
            translation: "Look at this painting."
          }
        },
        {
          term: "ver",
          explanation: "To see or perceive — usually passive, not deliberate. The counterpart that gives mirar its meaning. Also “ver televisión,” to watch TV.",
          literal: "to see",
          useWhen: "For perceiving without effort, and for screens: ver una película, no veo nada.",
          avoidWhen: "Don't use it when you mean focused, deliberate looking; that is mirar.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["ver una película", "ver televisión", "no veo nada", "nos vemos"],
          example: {
            target: "No veo bien de lejos.",
            translation: "I can't see well from far away."
          }
        },
        {
          term: "mire (marcador)",
          explanation: "As a discourse opener, “mire” means “look, let me explain,” not a command to look. A very Colombian way to start a point.",
          literal: "look (usted)",
          useWhen: "To preface an explanation or soften a point: “mire, le cuento.”",
          avoidWhen: "Don't read it literally every time; often nobody is meant to look at anything.",
          register: "polite formal",
          region: "Colombia; “vea / ve” do the same job.",
          related: ["vea", "mire pues", "le explico", "le cuento"],
          example: {
            target: "Mire, le explico.",
            translation: "Look, let me explain."
          }
        },
        {
          term: "fijarse en",
          explanation: "To notice, to pay close attention to a detail. One step more focused than mirar.",
          literal: "to fix oneself on",
          useWhen: "Pointing out a detail you want someone to notice, as in “fíjate en esto” or “fíjese en las manos.”",
          avoidWhen: "For a casual glance; fijarse implies real attention.",
          register: "neutral",
          region: "Universal.",
          related: ["fíjate", "fíjese", "darse cuenta", "notar"],
          example: {
            target: "Fíjate en el color.",
            translation: "Notice the color."
          }
        },
        {
          term: "echar un vistazo",
          explanation: "To take a quick look, a glance — the opposite of studying something closely.",
          literal: "to throw a little-look",
          useWhen: "For taking a quick, glancing look at something, as in “echa un vistazo al menú.”",
          avoidWhen: "When you mean a long, careful look; that is mirar bien or fijarse.",
          register: "friendly informal",
          region: "Universal.",
          related: ["dar un vistazo", "mirar por encima", "ojear", "una mirada"],
          example: {
            target: "Échale un vistazo.",
            translation: "Take a quick look at it."
          }
        },
        {
          term: "mirá / ¡mirá vos!",
          explanation: "The vos form of mira, used in Medellín and Cali both for “look” and as a reaction of surprise: “well, look at that!”",
          literal: "look (vos)",
          useWhen: "In paisa or valluno speech, as “look” or as an exclamation of surprise.",
          avoidWhen: "In Bogotá, where usted “mire” or tú “mira” is the usual choice.",
          register: "friendly informal",
          region: "Medellín / Cali (voseo).",
          related: ["mirá vos", "mira", "mire", "ve pues"],
          example: {
            target: "¡Mirá vos, qué sorpresa!",
            translation: "Well, look at that, what a surprise!"
          }
        },
        {
          term: "observar",
          explanation: "To observe — a more careful or formal version of mirar, common with art, science or people-watching.",
          literal: "to observe",
          useWhen: "For attentive, sometimes formal looking: observar una obra, observar el comportamiento.",
          avoidWhen: "In very casual speech, where mirar sounds more natural.",
          register: "polite formal",
          region: "Universal.",
          related: ["mirar con atención", "contemplar", "examinar", "estudiar"],
          example: {
            target: "Observe las líneas.",
            translation: "Observe the lines."
          }
        }
      ],
      note:
        "Mirar is deliberate looking; ver is passive seeing — “miro el cuadro” means I fix my eyes on it, “lo veo” just means it's in view. And mirar is transitive: “miro el cuadro,” never “miro a el cuadro.” Watch too for “mire” as a discourse marker (“look, let me explain”), which isn't an order to look at all.",
      culture: [
        {
          label: "Mirar looks, ver sees",
          body:
            "English keeps “look at,” “see” and “watch” apart, and Spanish makes a similar cut with mirar and ver — but not identically. Mirar is to aim your eyes on purpose; ver is to perceive, often without trying. Crucially, television and films take ver, not mirar: “ver una película,” “ver televisión.” So an English speaker who reasons “watch equals mirar” ends up saying “mirar televisión,” which sounds off. The safe rule: a deliberate gaze at a thing is mirar; perceiving, and screens, is ver."
        },
        {
          label: "“Mire” opens a sentence",
          body:
            "One of the most Colombian uses of mirar isn't about eyes at all. “Mire,” “vea,” “mire pues” are discourse markers that open an explanation or soften a point, like English “look,” “see,” “the thing is.” “Mire, le explico” means “let me walk you through it,” and nobody is expected to look at anything. Bogotanos lean on the usted form “mire”; paisas say “vea pues.” Hearing it as a literal command confuses learners; treat it as a verbal throat-clear that says “here comes my point.”"
        },
        {
          label: "Botero and a free afternoon",
          body:
            "The Museo Botero, in Bogotá's Candelaria, is free, and it holds room after room of Fernando Botero's famously rounded figures, plus works he donated by Picasso, Monet and others. Calling a Botero figure “gordo” isn't an insult — volume is the whole point of his style, an affectionate exaggeration. Museums like this, and the Museo del Oro nearby, are where locals take visitors precisely because they reward slow, deliberate looking — the mirar of the lesson — rather than the quick glance most tourists give."
        },
        {
          label: "Pointing with your eyes and words",
          body:
            "Colombians steer each other's attention with a small kit of mirar-words tuned by region and register. Bogotá uses usted “mire”; Medellín and Cali use vos “mirá” and the delighted “¡mirá vos!”; everywhere you hear “vea” and “ve.” Paired with a subtle lip-point — pursing the lips toward something instead of raising a finger — these words do real social work. Learning which form fits which region lets you both catch a nudge and give one without sounding like a textbook."
        }
      ],
      pitfalls: [
        {
          mistake: "Using ver when you mean to look closely (“veo el cuadro”).",
          whyItFails: "“Ver” only says the painting is in view; it misses that you're studying it. For deliberate looking you need mirar.",
          sayInstead: "Miro el cuadro con atención."
        },
        {
          mistake: "Adding a preposition, as in “mirar a el cuadro.”",
          whyItFails: "Mirar is transitive and takes its object directly. The English “look AT” tempts you to insert an “a,” but with things there is none.",
          sayInstead: "Mirar el cuadro."
        },
        {
          mistake: "Taking “mire” literally as “look!” every time.",
          whyItFails: "Often it's just a discourse marker opening an explanation. Hunting for something to look at leaves you lost while the real point goes by.",
          sayInstead: "Mire, le explico."
        },
        {
          mistake: "Saying “mirar televisión” for “watch TV.”",
          whyItFails: "Screens take ver in Spanish: “ver televisión,” “ver una película.” “Mirar televisión” is understood but marks you as translating from English.",
          sayInstead: "Ver televisión."
        }
      ],
      variations: [
        {
          form: "Mira",
          register: "friendly informal",
          region: "Universal (tú)",
          whenToUse: "The everyday tú form of “look.”"
        },
        {
          form: "Mire",
          register: "polite formal",
          region: "Colombia (usted)",
          whenToUse: "Polite, and the usual discourse-marker form in Bogotá."
        },
        {
          form: "Mirá",
          register: "friendly informal",
          region: "Medellín / Cali (voseo)",
          whenToUse: "The vos form, and the base of the exclamation “¡mirá vos!”"
        },
        {
          form: "Vea / Ve",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "A Colombian attention-getter, close to “look here.”"
        },
        {
          form: "Fíjese",
          register: "polite formal",
          region: "Colombia (usted)",
          whenToUse: "When you want someone to notice a detail, not just glance."
        }
      ],
      prompt: "Don Hernán opens with “mire, le explico.” What is he doing?",
      choices: [
        "Ordering Alex to look immediately at a specific painting on the wall to his right.",
        "Asking Alex whether he can physically see the artwork clearly from where he is standing.",
        "Using “mire” as a discourse marker — “look, let me explain” — before making his point."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "You want to say you're studying a painting closely, not just glancing. Which is right?",
          choices: [
            "Miro el cuadro.",
            "Veo el cuadro.",
            "Miro a el cuadro."
          ],
          answer: 0,
          tests: "mirar for deliberate looking, not passive ver"
        },
        {
          prompt: "How do you correctly say “look at the map”?",
          choices: [
            "Mira a el mapa.",
            "Mira el mapa.",
            "Ve el mapa."
          ],
          answer: 1,
          tests: "mirar is transitive, no preposition before things"
        },
        {
          prompt: "Which verb do Colombians use for “watch TV”?",
          choices: [
            "Mirar televisión.",
            "Observar televisión.",
            "Ver televisión."
          ],
          answer: 2,
          tests: "screens take ver, not mirar"
        },
        {
          prompt: "Don Hernán says “fíjese en las manos.” He wants Alex to…",
          choices: [
            "…notice and pay close attention to the hands, a real step beyond just looking.",
            "…physically fix or repair the hands of the sculpture, which look slightly damaged.",
            "…take one quick, careless glance at the hands and then move straight on to the next room."
          ],
          answer: 0,
          tests: "fijarse en = notice / pay close attention"
        }
      ]
    },
    en: {
      title: "Mirar los cuadros en el museo de Bogotá",
      situation:
        "La misma escena, contada para quien aprende inglés: Alejandra, de Bogotá, visita una galería de arte en Estados Unidos y una guía, Sarah, le enseña a mirar las obras. Descubre que el inglés reparte “mirar” en tres verbos —“look at”, “see” y “watch”—, que “look” exige la preposición “at”, y que “look” también abre explicaciones, como el “mire” colombiano. Todo con la cortesía con que se trata a una guía.",
      setting: {
        who: "Sarah es una guía de la galería, tranquila y didáctica. Alejandra es la visitante colombiana, encantada de que la lleven despacio por las salas.",
        what: "Un recorrido guiado por una galería de arte, aprendiendo a mirar las obras a propósito y a repartir “mirar” entre look at, see y watch.",
        when: "Una mañana tranquila entre semana, con las salas casi vacías y tiempo para detenerse en cada obra.",
        where: "Una galería de arte en Estados Unidos, del estilo del AGO en Houston o la Galería Nacional en Dallas.",
        why: "Porque un museo es donde ver se convierte en mirar. Alejandra quiere estudiar de verdad las obras y no pasar de largo, y ese cambio es justo lo que Sarah le enseña sin convertirlo en una clase de gramática."
      },
      address: {
        form: "mixed",
        who: "Sarah y Alejandra se tratan por el nombre desde el principio; el inglés no tiene usted, así que no hay un pronombre que marque respeto o distancia.",
        why: "En inglés la cortesía no está en el pronombre sino en el tono, el nombre de pila y suavizadores como “would you” o “just”. Sarah es amable sin necesidad de un “usted”.",
        ifYouSwitch: "No hay a qué cambiarse: el “you” es el mismo para todos. Alejandra debe soltar la costumbre de marcar respeto con el pronombre y ponerlo en un “thank you”, un “please” y un tono cálido."
      },
      dialogue: [
        {
          speaker: "Sarah",
          target: "Look, let me explain: looking and seeing aren't the same.",
          translation: "Mira, te explico: mirar y ver no son lo mismo.",
          pronunciation: "luk, let mi ex-PLÉIN: LÚ-king and SÍ-ing arent de séim",
          literal: "Mira, deja me explicar: mirando y viendo no-son el mismo.",
          why: "En inglés “look” también abre explicaciones, igual que el “mire” colombiano: “look, let me explain”. No es una orden de mirar nada."
        },
        {
          speaker: "Alejandra",
          target: "So what do I do, look at the painting or see it?",
          translation: "Entonces, ¿qué hago, miro el cuadro o lo veo?",
          pronunciation: "so uát du ai du, luk at de PÉIN-ting or si it",
          literal: "Entonces qué hago yo, mirar a el cuadro o ver lo?",
          why: "Ojo: en inglés “look” exige la preposición “at” — “look at the painting”. Sin “at” suena incompleto, justo al revés del español."
        },
        {
          speaker: "Sarah",
          target: "You look at it: you stop and study it. You see everything without trying.",
          translation: "Lo miras: te detienes y lo estudias. Uno ve todo sin querer.",
          pronunciation: "yu luk at it: yu stop and STÓ-di it. yu si É-vri-zing uid-áut TRÁI-ing",
          literal: "Tú mirar a ello: tú parar y estudiar lo. Tú ver todo sin intentar.",
          why: "El contraste: “look at” es mirar a propósito; “see” es percibir sin esfuerzo. Y aquí “you” es impersonal, como el “uno” del español."
        },
        {
          speaker: "Alejandra",
          target: "Ah, I get it. Look at that figure — I love how round it is!",
          translation: "Ah, ya entiendo. Mira esa figura, ¡me encanta lo redonda que es!",
          pronunciation: "a, ai get it. luk at dat FÍ-guiur — ai lov jau ráund it is",
          literal: "Ah, yo lo capto. Mira a esa figura — yo amar cómo redonda ello es!",
          why: "Aquí Alejandra usa bien “look at” como llamado de atención. Recuerda: cuando hay objeto, siempre “look at”, no “look” a secas."
        },
        {
          speaker: "Sarah",
          target: "Look closely! Notice the hands, the little details.",
          translation: "¡Míralo de cerca! Fíjate en las manos, en los detalles.",
          pronunciation: "luk KLÓUS-li! NÓU-tis de jands, de LÍ-rl DÍ-teils",
          literal: "Mira de-cerca! Nota las manos, los pequeños detalles.",
          why: "“Look closely” y “notice” suben el nivel de atención, como “mira bien” y “fíjate” en español."
        },
        {
          speaker: "Alejandra",
          target: "I'm looking at it. I hadn't seen it that way.",
          translation: "Lo estoy mirando. No lo había visto así.",
          pronunciation: "aim LÚ-king at it. ai jadnt sin it dat uéi",
          literal: "Yo-estoy mirando a ello. Yo no-había visto lo esa manera.",
          why: "“Looking at” (mirar, a propósito) frente a “had seen” (ver, percibir): recién ahora lo mira de verdad. Ahí está toda la lección."
        }
      ],
      vocabulary: [
        {
          term: "look at",
          explanation: "El verbo inglés para “mirar”: dirigir la vista a propósito. Exige la preposición “at” antes del objeto.",
          literal: "mirar a",
          useWhen: "Cuando miras algo con intención: “look at this painting”, “look at the map”.",
          avoidWhen: "No omitas “at” con un objeto: “look the painting” está mal; es “look at the painting”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["look at this", "have a look", "gaze at", "stare at"],
          example: {
            target: "Look at this painting.",
            translation: "Mira este cuadro."
          }
        },
        {
          term: "see",
          explanation: "Percibir con la vista, normalmente sin intención. Es el “ver” pasivo del español.",
          literal: "ver (percibir)",
          useWhen: "Para lo que percibes sin esfuerzo: “I can't see well”, “I saw him leave”.",
          avoidWhen: "No lo uses para mirar algo a propósito ni para la tele; ahí van “look at” o “watch”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["I see", "can't see", "see you", "I saw"],
          example: {
            target: "I can't see well from here.",
            translation: "No veo bien desde aquí."
          }
        },
        {
          term: "watch",
          explanation: "Mirar algo en movimiento o una pantalla durante un rato: la tele, una película, un partido.",
          literal: "mirar (con atención, en el tiempo)",
          useWhen: "Para pantallas y cosas que pasan: “watch TV”, “watch a movie”, “watch the game”.",
          avoidWhen: "No lo uses para una foto o un cuadro quietos; eso es “look at”, no “watch”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["watch TV", "watch a movie", "watch out", "watch the game"],
          example: {
            target: "We're watching a movie tonight.",
            translation: "Vamos a ver una película esta noche."
          }
        },
        {
          term: "look (marcador)",
          explanation: "“Look” también abre una explicación, como “mira” o “mire” en español: “look, let me explain”.",
          literal: "mira (marcador)",
          useWhen: "Para introducir tu punto o suavizarlo: “look, it's like this”.",
          avoidWhen: "En tono seco puede sonar impaciente; cuida la entonación.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["look", "see", "the thing is", "here's the thing"],
          example: {
            target: "Look, let me explain.",
            translation: "Mira, te explico."
          }
        },
        {
          term: "have a look / take a look",
          explanation: "Echar un vistazo, mirar algo brevemente.",
          literal: "tener / tomar una mirada",
          useWhen: "Para una mirada rápida: “have a look at this”, “take a look”.",
          avoidWhen: "Cuando quieres una mirada larga y atenta; ahí es “look closely”.",
          register: "friendly informal",
          region: "Inglés general (“have a look” es más británico).",
          related: ["take a look", "check it out", "glance at", "look over"],
          example: {
            target: "Have a look at this.",
            translation: "Échale un vistazo a esto."
          }
        },
        {
          term: "notice",
          explanation: "Darse cuenta de un detalle, fijarse. Un paso más que solo mirar.",
          literal: "notar / fijarse",
          useWhen: "Al señalar un detalle: “notice the hands”, “did you notice…?”.",
          avoidWhen: "Para una mirada casual; “notice” implica caer en la cuenta.",
          register: "neutral",
          region: "Inglés general.",
          related: ["notice", "pay attention to", "spot", "realize"],
          example: {
            target: "Notice the colors.",
            translation: "Fíjate en los colores."
          }
        },
        {
          term: "stare / look closely",
          explanation: "Mirar fijamente o muy de cerca. “Stare” es clavar la mirada, a veces de más.",
          literal: "mirar fijamente / de cerca",
          useWhen: "Para una mirada intensa: “look closely”, “don't stare”.",
          avoidWhen: "“Stare” de más puede ser grosero; no es un simple “mirar”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["stare at", "look closely", "gaze", "peer at"],
          example: {
            target: "Look closely at the detail.",
            translation: "Mira de cerca el detalle."
          }
        }
      ],
      note:
        "En inglés, “mirar” se reparte en tres verbos: “look at” (mirar a propósito, con “at” obligatorio), “see” (ver, percibir) y “watch” (mirar pantallas o cosas en movimiento). El error más común es soltar el “at” — se dice “look at the painting”, no “look the painting” — y usar “see” o “watch” donde va “look at”. Y “look” también abre explicaciones, como el “mire” colombiano.",
      culture: [
        {
          label: "“Mirar” se parte en tres",
          body:
            "Donde el español tiene mirar y ver, el inglés reparte el trabajo en tres: “look at” es dirigir la vista a propósito, “see” es percibir sin querer, y “watch” es mirar algo que dura o se mueve —la tele, una película, un partido—. Un cuadro o una foto quietos piden “look at”, nunca “watch”. La tele pide “watch”, no “look at”. Y “see” es lo que entra por los ojos sin esfuerzo. Elegir bien entre los tres es de lo que más cuesta al principio."
        },
        {
          label: "No sueltes el “at”",
          body:
            "El tropiezo número uno del hispanohablante con “look” es olvidar la preposición. En español “mirar” es transitivo —“miro el cuadro”— así que la mente pide decir “look the painting”. Pero en inglés “look” necesita “at” antes del objeto: “look at the painting”, “look at me”, “look at this”. Sin “at”, la frase queda coja. La excepción es cuando “look” va solo como exclamación —“Look!”— o como marcador —“look, let me explain”—: ahí no hay objeto, y por eso no lleva “at”."
        },
        {
          label: "“Look” también es “mira, …”",
          body:
            "Igual que los colombianos abren una explicación con “mire” o “vea”, los angloparlantes usan “look” para lo mismo: “look, it's not that simple”, “look, here's the thing”. No te piden que mires nada; marcan que viene su punto, muchas veces con un matiz de “óyeme bien”. Dicho con calma es cordial; dicho con sequedad puede sonar impaciente. Reconocerlo evita que Alejandra busque con los ojos algo que no existe y la deja seguir el hilo de la conversación."
        },
        {
          label: "Mirar arte con calma",
          body:
            "En los museos de Estados Unidos se valora la mirada lenta: la gente se planta frente a una obra y la observa sin afán. Ese “look closely”, “take your time”, es justo el mirar del que habla la lección, frente al “see” de pasar de largo. Para Alejandra, acostumbrada a que en español mirar y ver ya se distingan, el reto no es el concepto sino repartirlo entre look at, see y watch sin equivocar la preposición ni el verbo."
        }
      ],
      pitfalls: [
        {
          mistake: "“Look the painting.”",
          whyItFails: "“Look” necesita “at” antes del objeto. Sin la preposición, la frase suena incompleta al oído inglés.",
          sayInstead: "Look at the painting."
        },
        {
          mistake: "“I'm seeing TV right now.”",
          whyItFails: "Para pantallas se usa “watch”, no “see”. “See” es percibir sin querer; la tele se “watch”.",
          sayInstead: "I'm watching TV right now."
        },
        {
          mistake: "“Watch this photo for a second.”",
          whyItFails: "Una foto quieta se “look at”, no se “watch”. “Watch” es para lo que se mueve o dura en el tiempo.",
          sayInstead: "Look at this photo for a second."
        },
        {
          mistake: "“Look at!”",
          whyItFails: "Como exclamación a secas se dice solo “Look!”. El “at” solo aparece cuando hay un objeto: “look at that”.",
          sayInstead: "Look! / Look at that!"
        }
      ],
      variations: [
        {
          form: "Look at this",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "La forma normal de dirigir la mirada de alguien hacia algo."
        },
        {
          form: "Watch this",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Para algo que va a pasar o a moverse, o para una pantalla."
        },
        {
          form: "Have a look",
          register: "friendly informal",
          region: "Inglés general (más británico)",
          whenToUse: "Para invitar a echar un vistazo rápido."
        },
        {
          form: "Look, ...",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Como marcador para abrir tu punto, igual que “mira, …”."
        },
        {
          form: "Take a look at this",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Neutro y muy común para pedir que alguien mire algo."
        }
      ],
      prompt: "Alejandra quiere decir “mira este cuadro”. ¿Cuál oración en inglés es la correcta?",
      choices: [
        "Look at this painting.",
        "Look this painting.",
        "Watch this painting."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cómo se dice “estoy viendo televisión” en inglés?",
          choices: [
            "I'm seeing television.",
            "I'm watching TV.",
            "I'm looking at television."
          ],
          answer: 1,
          tests: "“watch” para pantallas, no “see” ni “look at”"
        },
        {
          prompt: "Alejandra quiere que mires una foto quieta. ¿Qué dice?",
          choices: [
            "Watch this photo.",
            "See this photo.",
            "Look at this photo."
          ],
          answer: 2,
          tests: "una foto se “look at”, no “watch”"
        },
        {
          prompt: "¿Cuál es la forma correcta de pedirle a alguien que te mire?",
          choices: [
            "Look at me.",
            "Look toward me.",
            "Watch me here."
          ],
          answer: 0,
          tests: "“look” necesita “at” antes del objeto"
        },
        {
          prompt: "Sarah dice “look, let me explain.” ¿Qué significa ese “look”?",
          choices: [
            "Que Alejandra debe mirar de inmediato un objeto concreto que Sarah tiene en la mano.",
            "Es un marcador que abre la explicación, como el “mira” o “mire” del español.",
            "Que Sarah no ve bien y necesita que Alejandra le acerque el cuadro para poder verlo."
          ],
          answer: 1,
          tests: "“look” como marcador de discurso, no una orden de mirar"
        }
      ]
    }
  },
  {
    id: "hearing-over-the-sound-system-in-cartagena",
    level: "Starter · Home and neighborhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "familiar",
    pathways: ["foundation"],
    verb: "escuchar",
    review: "pending",
    es: {
      title: "Oírse por encima del picó en Cartagena",
      situation:
        "Alex está en Cartagena y su amiga Valentina lo llama desde una verbena en la calle, con el picó sonando durísimo. Entre la mala señal y la champeta a todo volumen, Alex tiene que entender que en Colombia “escuchar” sirve para “oír” en el teléfono (“¿me escuchas?”), que escuchar es transitivo (escuchar música, sin “a”) y que “escúchame bien” es más “pon atención” que “oye mi voz”. Todo en tú, como se habla en la Costa.",
      setting: {
        who: "Valentina is a cartagenera calling from a street party, all warmth and volume. Alex is her friend on the other end, straining to make out a word.",
        what: "A phone call fighting a blasting sound system, sliding between escuchar for hearing and escuchar for deliberate listening.",
        when: "A Friday night, the verbena in full swing, the music louder than the phone.",
        where: "Cartagena, on the Caribbean coast, where a picó can take over a whole street.",
        why: "Because a bad line is where the difference between hearing and listening gets real. Alex just wants to catch the plan, and the call forces him through every shade of escuchar and oír at once."
      },
      address: {
        form: "tú",
        who: "Alex and Valentina are friends of the same age, so tú is the obvious fit.",
        why: "On the Caribbean coast tú is the everyday pronoun between friends and peers, warmer and quicker than the interior's usted. Between two young friends it's automatic.",
        ifYouSwitch: "Using usted with Valentina here would feel oddly formal, almost cold, on the coast. Among costeño friends tú is the norm; save usted for elders or clearly formal moments, not a Friday-night call between buddies."
      },
      dialogue: [
        {
          speaker: "Valentina",
          target: "¡Alex! ¿Me escuchas? Está sonando el picó durísimo.",
          translation: "Alex! Can you hear me? The sound system is blasting.",
          pronunciation: "ah-LEX! meh es-KOO-chas? es-TAH soh-NAN-doh el pee-KOH doo-REE-see-moh",
          literal: "Alex! Me you-listen? Is sounding the sound-system very-hard.",
          why: "On a bad or loud line Colombians say “¿me escuchas?” where English says “can you hear me?” Escuchar covers hear here, not just deliberate listening."
        },
        {
          speaker: "Alex",
          target: "Te escucho a ratos. ¿Qué me estás diciendo?",
          translation: "I can hear you on and off. What are you telling me?",
          pronunciation: "teh es-KOO-choh ah RAH-tohs. keh meh es-TAHS dee-SYEN-doh",
          literal: "You I-listen at moments. What me you-are saying?",
          why: "Again escuchar means hear here — sound reaching him over the line. “A ratos” is Colombian for “on and off, intermittently.”"
        },
        {
          speaker: "Valentina",
          target: "¡Que vengas! Aquí ponen champeta. Tienes que escuchar esto.",
          translation: "Come over! They're playing champeta here. You have to listen to this.",
          pronunciation: "keh BEN-gas! ah-KEE POH-nen cham-PEH-tah. TYEH-nes keh es-koo-CHAR ES-toh",
          literal: "That you-come! Here they-put champeta. You-have that to-listen this.",
          why: "Now escuchar flips to its deliberate sense — “you have to listen to this” — and note it's transitive: escuchar esto, with no “to” where English adds one."
        },
        {
          speaker: "Alex",
          target: "No te oigo nada con esa bulla. Espérate y te llamo.",
          translation: "I can't hear you at all with that racket. Hold on and I'll call you.",
          pronunciation: "noh teh OY-goh NAH-dah kon EH-sah BOO-yah. es-PEH-rah-teh ee teh YAH-moh",
          literal: "Not you I-hear nothing with that racket. Wait-yourself and you I-call.",
          why: "Here Alex reaches for oír for sheer perception — “no te oigo.” Both oír and escuchar work on a phone; “bulla” is very Colombian for noise/racket."
        },
        {
          speaker: "Valentina",
          target: "Bueno, pero escúchame bien: te espero a las nueve.",
          translation: "Okay, but listen to me carefully: I'll expect you at nine.",
          pronunciation: "BWEH-noh, PEH-roh es-KOO-chah-meh byen: teh es-PEH-roh ah las NWEH-beh",
          literal: "Good, but listen-me well: you I-await at the nine.",
          why: "“Escúchame bien” is “pay close attention to what I say,” a discourse use of escuchar, not mere hearing. Note “te espero” = I'll expect/wait for you."
        },
        {
          speaker: "Alex",
          target: "Listo, ya te escuché. Allá nos vemos.",
          translation: "Got it, I heard you. See you there.",
          pronunciation: "LEES-toh, yah teh es-koo-CHEH. ah-YAH nohs BEH-mohs",
          literal: "Ready, already you I-listened. There us we-see.",
          why: "“Ya te escuché” means “I've heard and registered you” — message received. Colombians use escuchar for taking in a message where you might expect oír."
        }
      ],
      vocabulary: [
        {
          term: "escuchar",
          explanation: "To listen (to) — and, in Colombia, often “to hear” too, as on a phone line. Transitive: no preposition before the object.",
          literal: "to listen (to)",
          useWhen: "For listening on purpose and for hearing on a call: escuchar música, ¿me escuchas?",
          avoidWhen: "Don't add “a” before a thing: “escuchar a la música” is wrong; it's escuchar música.",
          register: "neutral",
          region: "Universal; Colombia uses it for “hear” more than Spain does.",
          related: ["escuchar música", "¿me escuchas?", "oír", "prestar atención"],
          example: {
            target: "Escucha esta canción.",
            translation: "Listen to this song."
          }
        },
        {
          term: "oír",
          explanation: "To hear, to perceive sound — usually passive. The counterpart to escuchar, though Colombians blur the line.",
          literal: "to hear",
          useWhen: "For sound reaching you without effort: no te oigo, oí un ruido.",
          avoidWhen: "For deliberate, focused listening, where escuchar fits better.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["no te oigo", "oír un ruido", "oiga", "¿oíste?"],
          example: {
            target: "No te oigo con la bulla.",
            translation: "I can't hear you over the racket."
          }
        },
        {
          term: "¿me escuchas?",
          explanation: "The standard phone phrase for “can you hear me?” — where Spanish uses escuchar and English uses hear.",
          literal: "do you listen to me?",
          useWhen: "On a call with a weak or noisy line: ¿aló, me escuchas?",
          avoidWhen: "Nowhere, really; it's the natural line. “¿Me oyes?” also works.",
          register: "friendly informal",
          region: "Colombia and beyond.",
          related: ["¿me oyes?", "¿aló?", "se corta", "no te escucho"],
          example: {
            target: "¿Aló? ¿Me escuchas?",
            translation: "Hello? Can you hear me?"
          }
        },
        {
          term: "escúchame",
          explanation: "“Listen to me” — but often “pay attention to what I'm about to say,” a discourse nudge more than a sound instruction.",
          literal: "listen to me (tú)",
          useWhen: "To flag something important: “escúchame bien.”",
          avoidWhen: "Said sharply it can sound bossy; tone matters.",
          register: "friendly informal",
          region: "Universal.",
          related: ["óyeme", "escúcheme", "pon atención", "mira"],
          example: {
            target: "Escúchame bien.",
            translation: "Listen to me carefully."
          }
        },
        {
          term: "bulla",
          explanation: "Noise, racket, loud commotion. A very Colombian word, warmer and more everyday than “ruido.”",
          literal: "noise / racket",
          useWhen: "For loud, noisy surroundings full of racket, as in “hay mucha bulla” or “¡qué bulla!”",
          avoidWhen: "In formal writing, where “ruido” is more neutral.",
          register: "friendly informal",
          region: "Colombia, strong on the coast.",
          related: ["ruido", "alboroto", "escándalo", "algarabía"],
          example: {
            target: "Hay mucha bulla aquí.",
            translation: "There's a lot of racket here."
          }
        },
        {
          term: "a ratos",
          explanation: "On and off, at intervals — sound, or anything, coming and going.",
          literal: "at moments",
          useWhen: "For something intermittent: te escucho a ratos, llueve a ratos.",
          avoidWhen: "For something constant; a ratos means it keeps cutting out.",
          register: "neutral",
          region: "Universal.",
          related: ["por ratos", "de vez en cuando", "se corta", "intermitente"],
          example: {
            target: "Te escucho a ratos.",
            translation: "I can hear you on and off."
          }
        },
        {
          term: "picó",
          explanation: "A giant Caribbean sound system, the heart of a coastal street party. From English “pick-up.”",
          literal: "sound system (pick-up)",
          useWhen: "Talking about coastal parties and champeta: prender el picó.",
          avoidWhen: "Away from the Caribbean coast, where it may not be understood.",
          register: "friendly informal",
          region: "Caribbean coast (Barranquilla, Cartagena).",
          related: ["champeta", "verbena", "bafles", "vallenato"],
          example: {
            target: "El picó está durísimo.",
            translation: "The sound system is deafening."
          }
        }
      ],
      note:
        "In Colombia escuchar does double duty: “listen to” (escuchar música) and, on a phone or over noise, “hear” — “¿me escuchas?” is “can you hear me?” Oír also means hear, and the two overlap far more than English listen/hear. Keep escuchar transitive: escuchar música, never “escuchar a la música.” The English “to” has no Spanish twin here.",
      culture: [
        {
          label: "Escuchar does the work of hear",
          body:
            "English draws a sharp line: “listen” is deliberate, “hear” is passive, and learners assume Spanish splits escuchar and oír the same way. It mostly does — but Colombians lean on escuchar for both. On a bad phone line the normal thing to say is “no te escucho,” literally “I don't listen to you,” where English insists on “I can't hear you.” Oír is available and correct, yet escuchar wins in everyday speech. So don't over-police the split: if a Colombian “listens” where you'd “hear,” they're speaking perfectly normal Spanish."
        },
        {
          label: "Phone Spanish: ¿me escuchas?",
          body:
            "Colombian phone habits have their own script. You open with “¿aló?”, test the line with “¿me escuchas?” or “¿me oyes?”, and report trouble with “se corta” (you're cutting out) or “no te escucho.” Where an English speaker says “can you hear me now?”, the Spanish reflex is escuchar, not oír. Learning these ready-made lines matters more than the verb theory: they're what actually gets said when the signal drops, and reaching for a textbook “oír” can make you sound oddly stiff mid-call."
        },
        {
          label: "The picó and champeta",
          body:
            "On the Caribbean coast, a picó — from English “pick-up” — is a towering, gaudily painted sound system that anchors a street party, or verbena. It blasts champeta, a fast Afro-Colombian genre born in Cartagena and Barranquilla, loud enough to rattle windows a block away. The volume is the point: a good picó is felt in the chest. That's why the lesson's phone call is a losing battle — over a picó you genuinely cannot hear, and “no te oigo con esa bulla” is plain fact, not exaggeration."
        },
        {
          label: "Bulla, not just ruido",
          body:
            "Colombians have warm, expressive words for noise. “Bulla” is the everyday one — the happy racket of a party, kids, a market — and “¡qué bulla!” can be a complaint or almost a compliment depending on the smile behind it. “Ruido” is the neutral, technical word; “alboroto” and “algarabía” lean festive. On the coast especially, bulla isn't necessarily bad: life is loud, and a silent street can feel more worrying than a noisy one. Picking “bulla” over “ruido” instantly sounds more local."
        }
      ],
      pitfalls: [
        {
          mistake: "Adding a preposition: “escuchar a la música.”",
          whyItFails: "Escuchar is transitive; it takes its object directly. The English “listen TO” tempts an “a,” but with things there is none.",
          sayInstead: "Escuchar música."
        },
        {
          mistake: "Using oír for deliberate listening (“oigo música” while really concentrating).",
          whyItFails: "Oír leans passive — sound reaching you. If you're actively attending to it, escuchar is the verb.",
          sayInstead: "Escucho música con atención."
        },
        {
          mistake: "Taking “escúchame” as only “hear my voice.”",
          whyItFails: "It usually means “pay attention to what I'm saying.” Treating it as mere sound misses the “listen up” force.",
          sayInstead: "Escúchame bien."
        },
        {
          mistake: "Insisting on oír for “can you hear me?” on a call.",
          whyItFails: "It isn't wrong, but Colombians overwhelmingly say “¿me escuchas?” on the phone. Oír there can sound bookish.",
          sayInstead: "¿Me escuchas?"
        }
      ],
      variations: [
        {
          form: "¿Me escuchas?",
          register: "friendly informal",
          region: "Universal (tú)",
          whenToUse: "The everyday phone check, “can you hear me?”"
        },
        {
          form: "¿Me escuchás?",
          register: "friendly informal",
          region: "Medellín / Cali (voseo)",
          whenToUse: "The vos version of the same phone check."
        },
        {
          form: "¿Me oyes?",
          register: "friendly informal",
          region: "Universal (tú)",
          whenToUse: "The oír alternative on a call, equally understood."
        },
        {
          form: "Escúcheme",
          register: "polite formal",
          region: "Colombia (usted)",
          whenToUse: "“Listen to me” toward someone you address as usted."
        },
        {
          form: "Escúchame bien",
          register: "friendly informal",
          region: "Universal",
          whenToUse: "To flag that something important is coming."
        }
      ],
      prompt: "On a noisy line, Valentina asks “¿me escuchas?” What does she mean?",
      choices: [
        "She's asking whether Alex is deliberately paying very close attention to the music playing behind her.",
        "She's asking “can you hear me?” — Colombians use escuchar where English uses hear on a call.",
        "She's telling Alex to be quiet for a moment so that she can finally listen to what he was saying."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "How do you correctly say “listen to this song”?",
          choices: [
            "Escucha a esta canción.",
            "Oye esta canción.",
            "Escucha esta canción."
          ],
          answer: 2,
          tests: "escuchar is transitive, no “a” before things"
        },
        {
          prompt: "Your friend's line is breaking up. What do Colombians usually say?",
          choices: [
            "No te escucho.",
            "No te percibo.",
            "No te miro."
          ],
          answer: 0,
          tests: "escuchar covers “hear” on a phone line"
        },
        {
          prompt: "You suddenly perceive a noise you weren't listening for. Which verb fits?",
          choices: [
            "Escucho un ruido.",
            "Oigo un ruido.",
            "Miro un ruido."
          ],
          answer: 1,
          tests: "oír for passive perception, escuchar for deliberate listening"
        },
        {
          prompt: "What does “hay mucha bulla” mean?",
          choices: [
            "That there is a strong smell in the place.",
            "That there are too many people in the room.",
            "That there's a lot of noise or racket."
          ],
          answer: 2,
          tests: "bulla = noise / racket"
        }
      ]
    },
    en: {
      title: "Oírse por encima del picó en Cartagena",
      situation:
        "Alejandra está en Estados Unidos y una amiga la llama desde una fiesta con la música a todo volumen. Entre la mala señal y el ruido, Alejandra practica la frontera del inglés entre “hear” (percibir el sonido, el verbo del teléfono: “can you hear me?”) y “listen to” (escuchar con intención, casi siempre con “to”), y aprende que su error estrella es olvidar ese “to”: “listen to me”, nunca “listen me”. Usted, como corresponde al trato con alguien en un país nuevo.",
      setting: {
        who: "Megan es una amiga estadounidense que llama desde una fiesta ruidosa. Alejandra, colombiana recién llegada, forcejea para entender algo por el teléfono.",
        what: "Una llamada peleando contra la música a todo volumen, que va y viene entre “hear” para oír y “listen” para escuchar con atención.",
        when: "Un viernes por la noche, la fiesta encendida y la música más fuerte que el teléfono.",
        where: "En Estados Unidos, con Alejandra en su casa y Megan en plena rumba al otro lado de la ciudad.",
        why: "Porque una mala línea es donde la diferencia entre oír y escuchar se vuelve real. Alejandra solo quiere entender el plan, y la llamada la obliga a pasar por cada matiz de “hear” y “listen” a la vez."
      },
      address: {
        form: "mixed",
        who: "El inglés no distingue tú de usted: “you” sirve para todos, así que el respeto o la cercanía se marcan con otras palabras.",
        why: "En inglés no hay pronombre formal. La cortesía y la confianza no viven en “you”, sino en el tono, en suavizadores como “could you” o “would you mind”, y en fórmulas como “sorry to bother you”.",
        ifYouSwitch: "No hay un pronombre que cambiar, pero sí un registro. Con una amiga sueltas “hey, can you hear me?”; con un desconocido subes a “sorry, could you speak up a little?”. El mismo “you” cambia de temperatura según las palabras que lo rodean."
      },
      dialogue: [
        {
          speaker: "Megan",
          target: "Alejandra! Can you hear me? The music is really loud here.",
          translation: "¡Alejandra! ¿Me escuchas? La música está durísima aquí.",
          pronunciation: "a-le-JAN-dra! kan yu JIR mi? de MIU-sik is RÍ-li laud jir",
          literal: "¡Alejandra! ¿Poder tú oír me? La música es muy fuerte aquí.",
          why: "En inglés “hear” es percibir el sonido y “listen” es escuchar con intención. Al teléfono se dice “can you hear me?”, nunca “can you listen me?”. Además “hear” no lleva “to”."
        },
        {
          speaker: "Alejandra",
          target: "I can hear you on and off. What are you saying?",
          translation: "Te escucho a ratos. ¿Qué estás diciendo?",
          pronunciation: "ai kan JIR yu on and of. uát ar yu SÉI-ing?",
          literal: "Yo poder oír te en y fuera. ¿Qué estar tú diciendo?",
          why: "“On and off” es “a ratos”. Fíjate en “hear you” sin “to”: se oye a una persona directamente. Y “say” aquí no lleva persona; para decirle algo a alguien sería “tell me”."
        },
        {
          speaker: "Megan",
          target: "Come over! They're playing salsa. You have to listen to this!",
          translation: "¡Vente! Están poniendo salsa. ¡Tienes que escuchar esto!",
          pronunciation: "kam Ó-ver! deir PLÉI-ing SAL-sa. yu jav tu LÍ-sen tu dis!",
          literal: "Venir sobre! Ellos-estar tocando salsa. Tú tener que escuchar a esto!",
          why: "Aquí sí es “listen”, escucha deliberada — y obligatoriamente “listen TO this”. En inglés “listen” casi siempre pide “to” antes del objeto, justo al revés del español."
        },
        {
          speaker: "Alejandra",
          target: "I can't hear you with all that noise. Hold on, I'll call you back.",
          translation: "No te escucho con toda esa bulla. Espera, ya te llamo.",
          pronunciation: "ai kant JIR yu uid ol dat nois. jold on, ail kol yu bak",
          literal: "Yo no-poder oír te con todo ese ruido. Sostener sobre, yo llamar te atrás.",
          why: "Para el sonido que llega sin querer, “hear”, no “listen”. “Can't hear you” es la línea natural en una llamada; “I don't listen you” suena mal y además le falta el “to”."
        },
        {
          speaker: "Megan",
          target: "Okay, but listen to me: I'll see you at nine, alright?",
          translation: "Bueno, pero escúchame: nos vemos a las nueve, ¿listo?",
          pronunciation: "o-KÉI, bat LÍ-sen tu mi: ail si yu at nain, ol-RAIT?",
          literal: "Okay, pero escuchar a mí: yo ver te a las nueve, ¿bien?",
          why: "“Listen to me” pide atención, como “escúchame bien”. Y siempre “listen TO me”: sin el “to”, “listen me”, es uno de los errores más comunes del hispanohablante."
        },
        {
          speaker: "Alejandra",
          target: "Got it, I heard you. See you there!",
          translation: "Listo, ya te escuché. ¡Allá nos vemos!",
          pronunciation: "got it, ai jerd yu. si yu der!",
          literal: "Obtenido eso, yo oí te. Ver te allí!",
          why: "“I heard you” (pasado de hear) es “ya te escuché / entendí”, mensaje recibido. No se dice “I listened you”: recibir un mensaje se dice con “hear”."
        }
      ],
      vocabulary: [
        {
          term: "hear",
          explanation: "Percibir un sonido, con o sin intención. Es el verbo por defecto en el teléfono: “can you hear me?”. No lleva “to”.",
          literal: "oír",
          useWhen: "Para el sonido que te llega: “I can hear you”, “I heard a noise”.",
          avoidWhen: "Para la escucha deliberada y enfocada, donde va “listen (to)”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["hear you", "hear a noise", "overhear", "can't hear"],
          example: {
            target: "Can you hear me?",
            translation: "¿Me escuchas?"
          }
        },
        {
          term: "listen to",
          explanation: "Escuchar con intención, prestando atención. Casi siempre lleva “to” antes del objeto.",
          literal: "escuchar a",
          useWhen: "Para la escucha deliberada: “listen to music”, “listen to me”.",
          avoidWhen: "No lo uses para el sonido que llega sin querer; ahí va “hear”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["listen to music", "listen to me", "listen up", "pay attention"],
          example: {
            target: "Listen to this song.",
            translation: "Escucha esta canción."
          }
        },
        {
          term: "Can you hear me?",
          explanation: "La frase fija del teléfono. En inglés se usa “hear”, no “listen”, para preguntar si tu voz llega.",
          literal: "¿Puedes oírme?",
          useWhen: "En una llamada con mala señal o mucho ruido.",
          avoidWhen: "No digas “can you listen me?”: es doble error, verbo equivocado y falta de “to”.",
          register: "friendly informal",
          region: "Universal.",
          related: ["you're breaking up", "can you hear me now", "I lost you", "bad signal"],
          example: {
            target: "Hello? Can you hear me?",
            translation: "¿Aló? ¿Me escuchas?"
          }
        },
        {
          term: "listen to me",
          explanation: "“Escúchame” — con frecuencia “pon atención a lo que voy a decir”, no solo “oye mi voz”.",
          literal: "escúchame (a mí)",
          useWhen: "Para señalar algo importante: “listen to me for a second”.",
          avoidWhen: "Dicho con brusquedad suena mandón; cuida el tono.",
          register: "friendly informal",
          region: "Universal.",
          related: ["listen up", "hear me out", "pay attention", "look"],
          example: {
            target: "Listen to me for a second.",
            translation: "Escúchame un segundo."
          }
        },
        {
          term: "noise",
          explanation: "Ruido, bulla. La palabra neutra; “racket” y “din” son ruido molesto y fuerte.",
          literal: "ruido",
          useWhen: "Para el sonido de fondo: “there's a lot of noise”.",
          avoidWhen: "Cuando quieres decir sonido agradable; eso es “sound”, no “noise”.",
          register: "neutral",
          region: "Universal.",
          related: ["racket", "din", "loud", "background noise"],
          example: {
            target: "There's a lot of noise here.",
            translation: "Hay mucha bulla aquí."
          }
        },
        {
          term: "on and off",
          explanation: "A ratos, de forma intermitente. Algo que va y viene, como una señal que se corta.",
          literal: "encendido y apagado",
          useWhen: "Para algo intermitente: “I can hear you on and off”.",
          avoidWhen: "Para algo constante; “on and off” implica que se interrumpe.",
          register: "friendly informal",
          region: "Universal.",
          related: ["off and on", "every now and then", "intermittently", "in and out"],
          example: {
            target: "I can hear you on and off.",
            translation: "Te escucho a ratos."
          }
        },
        {
          term: "you're breaking up",
          explanation: "“Se te corta” — la frase típica cuando la voz del otro llega entrecortada en la llamada.",
          literal: "te estás rompiendo",
          useWhen: "Cuando la señal falla y la voz se pierde a pedazos.",
          avoidWhen: "Fuera del teléfono no tiene este sentido.",
          register: "friendly informal",
          region: "Universal.",
          related: ["you're cutting out", "bad connection", "I lost you", "can you hear me"],
          example: {
            target: "You're breaking up, I'll call you back.",
            translation: "Se te corta, ya te llamo."
          }
        }
      ],
      note:
        "En inglés “hear” y “listen” no se mezclan como escuchar y oír en Colombia. “Hear” es percibir el sonido — y es lo que se dice al teléfono: “can you hear me?”, nunca “listen”. “Listen” es escuchar con intención y casi siempre pide “to”: “listen to music”, “listen to me”. El error estrella del hispanohablante es soltar ese “to”: “listen me” en vez de “listen to me”.",
      culture: [
        {
          label: "“Hear” y “listen” no se cruzan",
          body:
            "En el español de Colombia, escuchar hace el trabajo de oír todo el tiempo: “no te escucho” en el teléfono es lo normal. En inglés esa frontera es firme. “Hear” es percibir el sonido, con o sin intención; “listen” es prestar atención a propósito. Al teléfono siempre se dice “can you hear me?”, porque preguntas si el sonido llega, no si el otro se concentra. Traducir tu “¿me escuchas?” como “can you listen me?” suena raro dos veces: verbo equivocado y sin el “to”."
        },
        {
          label: "El “to” que no puedes olvidar",
          body:
            "El tropiezo número uno del hispanohablante con estos verbos es el “to”. En español escuchar es transitivo: “escucho música”, sin preposición. En inglés “listen” casi siempre la exige: “listen to music”, “listen to me”, “listen to the radio”. Suena mal decir “listen music” o “listen me”, y a un oído nativo le chirría de inmediato. La regla práctica: si el verbo es “listen” y viene un objeto, mete “to” antes, casi sin excepción. Con “hear”, en cambio, nunca va “to”."
        },
        {
          label: "Al teléfono se dice “hear”",
          body:
            "El inglés telefónico tiene sus frases hechas, y conviene memorizarlas. Abres con “hello?”, compruebas la línea con “can you hear me?”, y avisas de problemas con “you're breaking up” (se te corta) o “I lost you” (te perdí). Donde un colombiano dice “¿me escuchas?”, el inglés dice “can you hear me?”. Usar “listen” ahí delata al principiante. Estas líneas se repiten iguales en cada llamada, así que aprenderlas de memoria rinde más que cualquier regla cuando la señal falla."
        },
        {
          label: "Noise, racket y el ruido",
          body:
            "El inglés separa “sound” (sonido, neutro o agradable) de “noise” (ruido, casi siempre molesto). Tu “bulla” colombiana, esa algarabía alegre de una fiesta, no tiene un equivalente cálido: en inglés la fiesta simplemente es “loud” o hace “a lot of noise”, y “racket” o “din” subrayan que el ruido fastidia. No hay una palabra festiva para el ruido bueno. Por eso, al contar en inglés que la rumba estuvo buenísima, dirás “it was so loud”, no buscarás un “noise” que suene celebratorio."
        }
      ],
      pitfalls: [
        {
          mistake: "“Can you listen me?”",
          whyItFails: "Doble error: al teléfono el verbo es “hear”, no “listen”, y “listen” además exigiría “to”. La pregunta natural por si tu voz llega se hace con “hear”.",
          sayInstead: "Can you hear me?"
        },
        {
          mistake: "“I'm listening music.”",
          whyItFails: "Falta el “to”. “Listen” pide preposición antes del objeto: en inglés se escucha música con “to”, aunque en español escuchar sea directo.",
          sayInstead: "I'm listening to music."
        },
        {
          mistake: "“Listen me.”",
          whyItFails: "Otra vez el “to” ausente. “Listen me” no existe en inglés natural; para pedir atención es “listen to me”.",
          sayInstead: "Listen to me."
        },
        {
          mistake: "“I listened a strange noise.”",
          whyItFails: "Para un sonido que llega sin querer va “hear”, no “listen”, y “hear” no lleva “to”. “Listen” implicaría que te pusiste a escucharlo a propósito.",
          sayInstead: "I heard a strange noise."
        }
      ],
      variations: [
        {
          form: "Can you hear me?",
          register: "friendly informal",
          region: "Universal",
          whenToUse: "El chequeo típico de la llamada, “¿me escuchas?”."
        },
        {
          form: "Are you there?",
          register: "friendly informal",
          region: "Universal",
          whenToUse: "Cuando el otro se queda callado y no sabes si sigue en la línea."
        },
        {
          form: "You're breaking up.",
          register: "friendly informal",
          region: "Universal",
          whenToUse: "Para avisar que la voz llega entrecortada."
        },
        {
          form: "Listen to me.",
          register: "neutral",
          region: "Universal",
          whenToUse: "Para pedir atención sobre algo importante."
        },
        {
          form: "Could you speak up?",
          register: "polite neutral",
          region: "Universal",
          whenToUse: "Para pedir con cortesía que hable más fuerte."
        }
      ],
      prompt: "Estás al teléfono y no llega bien la voz del otro. ¿Cómo preguntas si te oye?",
      choices: [
        "Can you listen me?",
        "Do you hear to me?",
        "Can you hear me?"
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cómo se dice correctamente “escucha esta canción”?",
          choices: [
            "Listen to this song.",
            "Listen this song.",
            "Hear this song."
          ],
          answer: 0,
          tests: "“listen” lleva “to” antes del objeto"
        },
        {
          prompt: "Tu amiga se corta en la llamada. ¿Qué le dices?",
          choices: [
            "I don't listen you.",
            "I can't hear you.",
            "I don't hear to you."
          ],
          answer: 1,
          tests: "en el teléfono se usa “hear”, no “listen”"
        },
        {
          prompt: "Percibes de repente un ruido que no estabas buscando. ¿Qué verbo va?",
          choices: [
            "I listen a noise.",
            "I listen to a noise.",
            "I hear a noise."
          ],
          answer: 2,
          tests: "“hear” para la percepción pasiva del sonido"
        },
        {
          prompt: "Quieres que tu amigo te preste atención un momento. ¿Cómo se lo pides?",
          choices: [
            "Listen to me.",
            "Listen at me.",
            "Hear my voice."
          ],
          answer: 0,
          tests: "“listen to me” para pedir atención"
        }
      ]
    }
  },
  {
    id: "catching-a-shout-at-the-cali-salsa-club",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "familiar",
    pathways: ["foundation"],
    verb: "oír",
    review: "pending",
    es: {
      title: "Cazar un grito en la salsateca de Cali",
      situation:
        "Alex está en una salsateca de Cali con Manuel, un melómano vallecaucano que le va mostrando la música. Entre el voseo caleño y el volumen, Alex aprende que oír es “percibir el sonido”, que su verdadero tesoro son los llamados de atención — “oiga”, “oís”, “óyeme” — y las coletillas “¿oíste?/¿oyó?”, y que nada de eso es una pregunta real sobre el oído. El contraste con escuchar (poner atención a propósito) cierra la lección.",
      setting: {
        who: "Manuel is a Cali melómano — a devoted salsa buff — walking Alex through the records. Alex is his friend, half-deafened and trying to keep up.",
        what: "A night at a salsateca, spinning through oír for catching sound and the attention-getters and tags built from it, with escuchar as the deliberate contrast.",
        when: "Late on a Saturday, the dance floor full and a classic dropping on the turntable.",
        where: "Cali, capital of salsa, in a club where the sound system rules the room.",
        why: "Because Cali is where you learn that oír is barely about hearing at all — it's how people grab your attention, react and check you're with them. Alex wants to follow the music and the talk around it at once."
      },
      address: {
        form: "vos",
        who: "Manuel and Alex are friends, and in Cali that means voseo — vos sabés, vení, oís.",
        why: "The Valle del Cauca is voseo country: between friends, vos replaces tú entirely, with its own verb forms (sabés, tenés, vení). Using it signals you belong to the local rhythm of speech.",
        ifYouSwitch: "Drop to usted with a Cali friend and it can sound distant, or teasingly formal. Reach for tú and you'll be understood but marked as an outsider — locals hear tú as imported. Among valluno friends, vos is the warm, default choice."
      },
      dialogue: [
        {
          speaker: "Manuel",
          target: "¡Oís, Alex! ¿Vos oíste esa canción? Es un clásico.",
          translation: "Hey, Alex! Did you hear that song? It's a classic.",
          pronunciation: "oh-EES, ah-LEX! bohs oh-EES-teh EH-sah kan-SYOHN? es oon KLAH-see-koh",
          literal: "You-hear, Alex! You did-hear that song? Is a classic.",
          why: "In Cali “¡oís!” (from oír, in voseo) is an attention-getter — “hey!” — not a real question. Then “¿vos oíste?” uses oír for actually catching the song."
        },
        {
          speaker: "Alex",
          target: "La oí, sí, pero no me la sé. ¿Cómo se llama?",
          translation: "I heard it, yeah, but I don't know it. What's it called?",
          pronunciation: "lah oh-EE, see, PEH-roh noh meh lah seh. KOH-moh seh YAH-mah",
          literal: "It I-heard, yes, but not to-me it I-know. How itself it-calls?",
          why: "“La oí” — oír for having caught the sound. Note “no me la sé”: the reflexive sabérsela for knowing a song by heart, very common in Colombia."
        },
        {
          speaker: "Manuel",
          target: "¡Oí! Ponéle cuidado a la trompeta. Escuchála bien.",
          translation: "Listen! Pay attention to the trumpet. Really listen to it.",
          pronunciation: "oh-EE! poh-NEH-leh kwee-DAH-doh ah lah trohm-PEH-tah. es-koo-CHAH-lah byen",
          literal: "Hear (vos)! Put-to-it care to the trumpet. Listen-it well.",
          why: "“¡Oí!” is the vos imperative of oír used as “hey/listen.” Then escuchar for deliberate focus: oír made him notice the sound, escuchar makes him concentrate on it."
        },
        {
          speaker: "Alex",
          target: "¡Oís, no! No la había oído nunca. Está buenísima.",
          translation: "Wow, no! I'd never heard it before. It's fantastic.",
          pronunciation: "oh-EES, noh! noh lah ah-BEE-ah oh-EE-doh NOON-kah. es-TAH bweh-NEE-see-mah",
          literal: "You-hear, no! Not it I-had heard never. Is very-good.",
          why: "Alex tries the “¡oís!” marker himself, as an exclamation of surprise. “Había oído” is oír in the pluperfect — never having heard it before this night."
        },
        {
          speaker: "Manuel",
          target: "¿Oíste? Ahí entra el coro. Esa es la mejor parte, ¿oís?",
          translation: "Hear that? There's where the chorus comes in. That's the best part, you know?",
          pronunciation: "oh-EES-teh? ah-EE EN-trah el KOH-roh. EH-sah es lah meh-HOR PAR-teh, oh-EES?",
          literal: "You-heard? There enters the chorus. That is the best part, you-hear?",
          why: "“¿Oíste?” and the tag “¿oís?” work like “you hear?/right?” — checking you're with him, not real questions. Colombians close sentences with these oír tags constantly."
        },
        {
          speaker: "Alex",
          target: "¡Claro que te oí! Vos sabés de salsa, hermano.",
          translation: "Of course I heard you! You really know your salsa, man.",
          pronunciation: "KLAH-roh keh teh oh-EE! bohs sah-BEHS deh SAL-sah, er-MAH-noh",
          literal: "Clear that you I-heard! You know of salsa, brother.",
          why: "“Te oí” answers the tag literally, as a joke. “Vos sabés” shows the valluno voseo present; “hermano” is warm address for a friend."
        }
      ],
      vocabulary: [
        {
          term: "oír",
          explanation: "To hear — to perceive sound, often without trying. Its imperative gives Colombia its favorite attention-getters.",
          literal: "to hear",
          useWhen: "For catching a sound: la oí, no había oído eso.",
          avoidWhen: "For sustained, deliberate listening, where escuchar fits better.",
          register: "neutral",
          region: "Universal; its imperative forms are especially alive in Colombia.",
          related: ["oiga", "oís", "¿oíste?", "óyeme"],
          example: {
            target: "¿Oíste ese ruido?",
            translation: "Did you hear that noise?"
          }
        },
        {
          term: "oiga",
          explanation: "The usted imperative of oír, used as “hey / excuse me / listen.” Its tone runs from friendly to sharply confrontational.",
          literal: "hear (usted)",
          useWhen: "To flag someone down or open a remark: “oiga, ¿me ayuda?”",
          avoidWhen: "Snapped hard and low, it becomes a challenge; mind the tone.",
          register: "neutral",
          region: "Universal in Colombia.",
          related: ["óigame", "vea", "mire", "oís"],
          example: {
            target: "Oiga, ¿me regala la hora?",
            translation: "Excuse me, do you have the time?"
          }
        },
        {
          term: "oís",
          explanation: "The vos form of oír, classic in Cali and Medellín — an attention-getting “hey!” or a “you hear?” tag.",
          literal: "you hear (vos)",
          useWhen: "Among friends in voseo zones: “¡oís!, vení.”",
          avoidWhen: "In formal or usted-only settings, where it clashes with the register.",
          register: "friendly informal",
          region: "Valle del Cauca and the paisa zone (voseo).",
          related: ["oí", "oiga", "¿oíste?", "ve"],
          example: {
            target: "¡Oís! Vení para acá.",
            translation: "Hey! Come over here."
          }
        },
        {
          term: "¿oíste?",
          explanation: "“You hear?/right?” — a tag closing a sentence to check the other is with you, not a real question.",
          literal: "did you hear?",
          useWhen: "To seek agreement or add weight: “nos vemos a las ocho, ¿oíste?”",
          avoidWhen: "When you truly are asking whether they heard — context and tone decide.",
          register: "friendly informal",
          region: "Universal in Colombia; “¿oyó?” is the usted version.",
          related: ["¿oís?", "¿oyó?", "¿sí?", "¿cierto?"],
          example: {
            target: "Llega temprano, ¿oíste?",
            translation: "Get there early, okay?"
          }
        },
        {
          term: "óyeme",
          explanation: "“Listen to me / hey” — the tú imperative of oír used to grab attention before you speak.",
          literal: "hear me (tú)",
          useWhen: "To open something you want heard: “óyeme una cosa.”",
          avoidWhen: "In voseo it becomes “oíme”; match the local pronoun.",
          register: "friendly informal",
          region: "Universal; “oíme” in voseo zones.",
          related: ["oíme", "óigame", "escúchame", "mira"],
          example: {
            target: "Óyeme una cosa.",
            translation: "Hey, let me tell you something."
          }
        },
        {
          term: "escuchar",
          explanation: "To listen — deliberate, focused attention. The contrast to oír: you notice with oír, you concentrate with escuchar.",
          literal: "to listen (to)",
          useWhen: "For paying real attention: escuchar la letra, escuchar bien.",
          avoidWhen: "For sound that merely reaches you without effort; that's oír.",
          register: "neutral",
          region: "Universal.",
          related: ["escúchala", "poner cuidado", "prestar atención", "oír"],
          example: {
            target: "Escuchá la letra.",
            translation: "Listen to the lyrics."
          }
        },
        {
          term: "sonar",
          explanation: "To sound, to play (of music). What a song does when it comes on: “está sonando salsa.”",
          literal: "to sound",
          useWhen: "For music that is playing or coming on, as in “suena un clásico” or “¿qué suena?”",
          avoidWhen: "For a person making a sound; sonar is for the noise or music itself.",
          register: "neutral",
          region: "Universal.",
          related: ["está sonando", "poner", "tema", "clásico"],
          example: {
            target: "Está sonando un clásico.",
            translation: "A classic is playing."
          }
        }
      ],
      note:
        "Oír is “hear,” but its real gift to Colombian Spanish is its imperative. “Oiga” (usted), “oí/oís” (vos) and “óyeme/oíme” (tú) all mean roughly “hey/listen up,” and the tags “¿oíste?/¿oyó?” close sentences like “right?/you hear?” None is a genuine question about hearing. Keep oír for catching sound and escuchar for concentrating — but expect oír everywhere as a way to grab attention.",
      culture: [
        {
          label: "Oír vs escuchar, one sense over",
          body:
            "English speakers already split hear and listen, so they expect oír to map to hear and escuchar to listen — and mostly it does. Oír is the sound reaching you; escuchar is choosing to attend to it. The catch is that Colombians reach for escuchar more freely than English reaches for listen, especially on the phone, where “no te escucho” means “I can't hear you.” Around music, though, the pair behaves: you oír a song come on, then escuchar the trumpet if you want to follow what it's doing."
        },
        {
          label: "The many faces of ¡oiga!",
          body:
            "“Oiga” is oír's most useful trick, and its meaning lives almost entirely in the tone. Warm and rising, “oiga, ¿me colabora?” is a polite “excuse me.” Flat, it just opens a point: “listen, …” But dropped hard and low — “¡oiga!” — it's a warning, the sound of someone who feels wronged or is about to scold. Same three letters, opposite social outcomes. A learner who hears “¡oiga!” aimed their way should read the face and pitch fast, because the word alone won't say whether they're being helped or told off."
        },
        {
          label: "Tags: ¿oíste? and ¿oyó?",
          body:
            "Colombians love to seal a sentence with a little oír tag. “Nos vemos a las ocho, ¿oíste?” isn't checking your hearing — it's “okay?/got it?”, softening an instruction into shared understanding. With usted it becomes “¿oyó?”, and in Cali you'll also catch “¿sí o no?” doing similar work. These tags are glue: they keep talk feeling collaborative rather than bossy. Answer them with a nod or a “listo” and you're playing along; ignore them and you can come across as cold."
        },
        {
          label: "Cali, salsa and the melómano",
          body:
            "Cali calls itself the world capital of salsa, and it isn't only bravado. The city's salsatecas — salsa clubs — spin vinyl at ferocious tempos, and a melómano (music lover) prides himself on naming the orchestra, the year, the trumpet player. Listening there is an active sport: people oír the intro, then escuchar hard to catch which cut it is. To join in, learn to react — “¡uy, ese tema!” — and let a local walk you through the horns. The verb that gets you in is oír, but the payoff is in escuchar."
        }
      ],
      pitfalls: [
        {
          mistake: "Hearing every “¡oiga!” as aggressive.",
          whyItFails: "Oiga spans polite “excuse me” to sharp “now listen here.” Tone, not the word, sets the meaning; assuming hostility misreads most of them.",
          sayInstead: "Oiga, ¿me regala un minuto?"
        },
        {
          mistake: "Using escuchar for a sound you caught by accident (“escuché un ruido”).",
          whyItFails: "Escuchar implies you were attending on purpose. For a noise that merely reached you, oír is the honest verb.",
          sayInstead: "Oí un ruido."
        },
        {
          mistake: "Taking a sentence-final “¿oíste?” as a real question.",
          whyItFails: "As a tag it means “okay?/right?” — checking agreement, not your ears. Answering “sí, oí” literally misses the point.",
          sayInstead: "Listo, ¿oíste?"
        },
        {
          mistake: "Reaching for oír when you mean deliberate listening.",
          whyItFails: "If you're concentrating on the music, oír undersells it — it sounds like the sound just happened to reach you. Escuchar names the effort.",
          sayInstead: "Escuchá bien la trompeta."
        }
      ],
      variations: [
        {
          form: "¡Oiga!",
          register: "polite formal",
          region: "Colombia (usted)",
          whenToUse: "“Excuse me/hey” toward someone you address as usted."
        },
        {
          form: "¡Oís!",
          register: "friendly informal",
          region: "Valle del Cauca (voseo)",
          whenToUse: "The Cali attention-getter among friends."
        },
        {
          form: "¡Oye!",
          register: "friendly informal",
          region: "Universal (tú)",
          whenToUse: "The tú “hey” to get someone's attention."
        },
        {
          form: "¿Oíste?",
          register: "friendly informal",
          region: "Universal",
          whenToUse: "A tag closing a sentence, “okay?/right?”"
        },
        {
          form: "Óigame",
          register: "polite formal",
          region: "Colombia (usted)",
          whenToUse: "A stronger “listen to me” before an important point."
        }
      ],
      prompt: "Your friend ends with “nos vemos a las ocho, ¿oíste?” What is he doing?",
      choices: [
        "Using “¿oíste?” as a tag meaning “okay?/right?” — checking you agree, not testing your hearing.",
        "Genuinely asking whether you managed to hear the time that he just said over the loud music.",
        "Ordering you to repeat the time back to him to prove that you were actually paying attention."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "You caught a noise you weren't listening for. Which is natural?",
          choices: [
            "Escuché un ruido.",
            "Oí un ruido.",
            "Miré un ruido."
          ],
          answer: 1,
          tests: "oír for a sound perceived by accident"
        },
        {
          prompt: "A stranger says a warm, rising “oiga, ¿me colabora?” What is it?",
          choices: [
            "An aggressive challenge before a scolding.",
            "A firm command to listen carefully.",
            "A polite “excuse me, can you help me?”"
          ],
          answer: 2,
          tests: "oiga as polite “excuse me” depending on tone"
        },
        {
          prompt: "How do you tack “right?/okay?” onto “llega temprano”?",
          choices: [
            "Llega temprano, ¿oíste?",
            "Llega temprano, ¿lo oíste?",
            "Llega temprano, ¿me escuchas?"
          ],
          answer: 0,
          tests: "¿oíste? as an agreement tag"
        },
        {
          prompt: "You want your friend to concentrate on the trumpet. What do you say?",
          choices: [
            "Oí la trompeta.",
            "Escuchá bien la trompeta.",
            "Mirá bien la trompeta."
          ],
          answer: 1,
          tests: "escuchar for deliberate, focused attention"
        }
      ]
    },
    en: {
      title: "Cazar un grito en la salsateca de Cali",
      situation:
        "Alejandra está en una noche de salsa en Estados Unidos con Chris, un amigo melómano que le va mostrando la música. Practica que en inglés el sonido se percibe con “hear” (“did you hear that?”), pero que el llamado de atención NO es “hear!”: es “hey” entre amigos, “excuse me” con desconocidos y “listen!” para pedir atención. Y que las frases se cierran con “you know?/right?”, no con un “you hear?” calcado del “¿oíste?”. Usted, por el trato con alguien en un país nuevo.",
      setting: {
        who: "Chris es un amigo estadounidense, buen conocedor de salsa, que le va nombrando los temas. Alejandra, colombiana, sigue la música y el inglés a la vez.",
        what: "Una noche de salsa donde se separan “hear” (percibir el sonido) y los llamados de atención del inglés, que nunca usan “hear”.",
        when: "Un sábado por la noche, la pista llena y un clásico entrando en la consola.",
        where: "En Estados Unidos, en un club con noche latina, lejos de Cali pero con la misma salsa.",
        why: "Porque el instinto de Alejandra es traducir su “¡oiga!” con “hear!”, y esa es justo la trampa. La noche la obliga a repartir “hear”, “hey”, “excuse me” y “listen” en su sitio."
      },
      address: {
        form: "mixed",
        who: "El inglés no distingue tú de usted: “you” vale para todos, y el respeto o la cercanía se marcan con otras palabras.",
        why: "En inglés no hay pronombre formal. El registro no vive en “you”, sino en la palabra con que llamas la atención: “hey” es de confianza, “excuse me” es cortés, y ahí está casi toda la diferencia.",
        ifYouSwitch: "No cambias de pronombre, pero sí de entrada. Con un amigo sueltas “hey!”; con un desconocido subes a “excuse me”. El mismo “you” pasa de cercano a cortés según la palabra con que abras, no según el pronombre."
      },
      dialogue: [
        {
          speaker: "Chris",
          target: "Hey, Alejandra! Did you hear that song? It's a classic.",
          translation: "¡Oiga, Alejandra! ¿Oyó esa canción? Es un clásico.",
          pronunciation: "jéi, a-le-JAN-dra! did yu JIR dat song? its a KLÁ-sik",
          literal: "Oye, Alejandra! ¿Hiciste tú oír esa canción? Es un clásico.",
          why: "En inglés se llama la atención con “hey”, no con “hear”. Tu “¡oiga!” viene de oír, pero “hear!” no sirve de llamado; el equivalente es “hey!”. Para percibir el sonido sí va “hear”: “did you hear that song?”."
        },
        {
          speaker: "Alejandra",
          target: "I heard it, but I don't know it. What's it called?",
          translation: "La oí, pero no me la sé. ¿Cómo se llama?",
          pronunciation: "ai jerd it, bat ai dont nou it. uats it kold?",
          literal: "Yo oí lo, pero yo no lo sé. ¿Qué eso llamado?",
          why: "“I heard it” es el pasado de hear — percibiste el sonido. Fíjate en “I don't know it” para la canción, y en “what's it called?” como “¿cómo se llama?”."
        },
        {
          speaker: "Chris",
          target: "Listen! Pay attention to the trumpet. Really listen to it.",
          translation: "¡Escucha! Ponle cuidado a la trompeta. Escúchala bien.",
          pronunciation: "LÍ-sen! pei a-TEN-shon tu de TROM-pet. RÍ-li LÍ-sen tu it",
          literal: "¡Escuchar! Pagar atención a la trompeta. Realmente escuchar a ello.",
          why: "Para pedir atención el inglés usa “listen!”, no “hear!”. Y recuerda el “to”: “listen to it”. Aquí es escucha deliberada, no la simple percepción de “hear”."
        },
        {
          speaker: "Alejandra",
          target: "Wow! I'd never heard it before. It's amazing.",
          translation: "¡Uy! Nunca la había oído. Está buenísima.",
          pronunciation: "uáu! aid NÉ-ver jerd it bi-FOR. its a-MÉI-sing",
          literal: "Guau! Yo había nunca oído ello antes. Ello es asombroso.",
          why: "“I'd never heard it” es el pluscuamperfecto de hear (I had never heard). Para reaccionar con sorpresa el inglés usa “wow”, no un verbo de oír como haría el español con “¡oís!”."
        },
        {
          speaker: "Chris",
          target: "You hear that? That's where the chorus comes in — the best part, you know?",
          translation: "¿Oye eso? Ahí entra el coro — la mejor parte, ¿sí?",
          pronunciation: "yu JIR dat? dats uér de KÓ-rus kams in — de best part, yu nou?",
          literal: "¿Tú oír eso? Eso es donde el coro viene adentro — la mejor parte, ¿tú saber?",
          why: "“You hear that?” sí usa hear, porque pregunta de verdad si percibió el sonido. Pero la coletilla es “you know?/right?”, no “you hear?”: el inglés no cierra frases con “oír” como el “¿oíste?” colombiano."
        },
        {
          speaker: "Alejandra",
          target: "Of course I heard you! You really know your salsa.",
          translation: "¡Claro que te oí! De verdad sabes de salsa.",
          pronunciation: "of kors ai jerd yu! yu RÍ-li nou yor SAL-sa",
          literal: "De curso yo oí te! Tú realmente saber tu salsa.",
          why: "“I heard you” aquí es una broma, respondiendo la coletilla en sentido literal. “You know your salsa” es “sabes mucho de salsa”: “know” + posesivo para dominar un tema."
        }
      ],
      vocabulary: [
        {
          term: "hear",
          explanation: "Percibir un sonido, con o sin intención. El pasado es “heard”. No lleva “to”.",
          literal: "oír",
          useWhen: "Para el sonido que te llega: “I heard a song”, “did you hear that?”.",
          avoidWhen: "Para la escucha deliberada, donde va “listen (to)”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["heard", "hear that", "overhear", "can't hear"],
          example: {
            target: "Did you hear that song?",
            translation: "¿Oíste esa canción?"
          }
        },
        {
          term: "hey",
          explanation: "El llamado de atención por defecto en inglés, el equivalente de “oiga/oís”. Nunca se usa “hear!” para esto.",
          literal: "oye / eh",
          useWhen: "Para llamar a alguien de confianza: “hey, come here!”.",
          avoidWhen: "Con desconocidos o en lo formal, donde va “excuse me”.",
          register: "friendly informal",
          region: "Universal.",
          related: ["hey there", "excuse me", "listen", "psst"],
          example: {
            target: "Hey, come over here!",
            translation: "¡Oís, vení para acá!"
          }
        },
        {
          term: "listen to",
          explanation: "Escuchar con intención; y “listen!” a secas sirve para pedir atención. Casi siempre lleva “to” ante el objeto.",
          literal: "escuchar a",
          useWhen: "Para la escucha deliberada: “listen to the trumpet”.",
          avoidWhen: "Para el sonido que solo te llega; ahí va “hear”.",
          register: "neutral",
          region: "Universal.",
          related: ["listen to me", "listen up", "pay attention", "listen to this"],
          example: {
            target: "Listen to the trumpet.",
            translation: "Escucha la trompeta."
          }
        },
        {
          term: "excuse me",
          explanation: "El llamado de atención cortés hacia un desconocido — donde el español suelta un “¡oiga!”.",
          literal: "discúlpeme",
          useWhen: "Para dirigirte a alguien que no conoces: “excuse me, do you have the time?”.",
          avoidWhen: "Entre amigos suena algo tieso; ahí basta “hey”.",
          register: "polite neutral",
          region: "Universal.",
          related: ["sorry", "pardon me", "excuse me, sir", "hey"],
          example: {
            target: "Excuse me, can you help me?",
            translation: "Oiga, ¿me ayuda?"
          }
        },
        {
          term: "you know?",
          explanation: "La coletilla más común para cerrar una frase, como el “¿oíste?/¿sí?” colombiano. No se usa “you hear?”.",
          literal: "¿tú sabes?",
          useWhen: "Para buscar acuerdo al final: “it's the best part, you know?”.",
          avoidWhen: "Repetida en exceso suena a muletilla; dosifícala.",
          register: "friendly informal",
          region: "Universal.",
          related: ["right?", "you know what I mean?", "isn't it?", "yeah?"],
          example: {
            target: "It's the best part, you know?",
            translation: "Es la mejor parte, ¿sí?"
          }
        },
        {
          term: "right?",
          explanation: "Otra coletilla de confirmación, “¿cierto?/¿verdad?”. Cierra la frase pidiendo que el otro esté de acuerdo.",
          literal: "¿correcto?",
          useWhen: "Para confirmar algo que crees compartido: “you're coming, right?”.",
          avoidWhen: "Cuando de verdad no tienes ni idea; ahí es una pregunta abierta, no una coletilla.",
          register: "friendly informal",
          region: "Universal.",
          related: ["isn't it?", "yeah?", "correct?", "you know?"],
          example: {
            target: "You're coming, right?",
            translation: "Vienes, ¿cierto?"
          }
        },
        {
          term: "heard",
          explanation: "El pasado y participio de hear: “I heard you”, “I've heard that”. Es lo que dices cuando ya captaste el mensaje.",
          literal: "oído / oí",
          useWhen: "Para algo ya percibido: “I heard you”, mensaje recibido.",
          avoidWhen: "No digas “I listened you”: recibir un mensaje se dice con hear.",
          register: "neutral",
          region: "Universal.",
          related: ["I heard you", "I've heard", "heard of", "unheard"],
          example: {
            target: "I heard you, let's go.",
            translation: "Ya te oí, vamos."
          }
        }
      ],
      note:
        "Tu “¡oiga!” colombiano viene de oír, pero en inglés el llamado de atención NO es “hear!”. Para llamar a alguien se dice “hey” (con confianza) o “excuse me” (cortés), y para pedir atención “listen!”. “Hear” queda solo para percibir el sonido: “did you hear that?”. Y las frases no se cierran con “you hear?” sino con “you know?” o “right?”.",
      culture: [
        {
          label: "El llamado de atención no es “hear”",
          body:
            "En Colombia, oír te regala un arsenal de llamados: “oiga”, “oís”, “óyeme”, todos hijos del verbo oír. El instinto es traducirlos con “hear!” en inglés, y ahí está la trampa: “hear!” no llama a nadie. El inglés usa “hey” entre conocidos, “excuse me” con desconocidos, y “listen!” cuando pides atención. “Hear” se reserva para percibir el sonido. Así que ese “¡oiga!” que a ti te sale natural se vuelve “hey” o “excuse me”, nunca un imperativo de “hear”."
        },
        {
          label: "“Hey” y “excuse me”: el registro",
          body:
            "El inglés no tiene usted, pero sí gradúa el llamado de atención. “Hey” es de confianza, para amigos y pares — el primo de tu “oís”. “Excuse me” es la versión cortés, la que usas con un desconocido, un mesero o alguien mayor, y equivale a un “oiga” respetuoso. Entre esos dos está casi todo. Elegir mal chirría: “hey” a un extraño puede sonar brusco, y “excuse me” con un amigo íntimo suena entre irónico y distante. El pronombre no cambia, pero la palabra de entrada sí."
        },
        {
          label: "Coletillas: “you know?” y “right?”",
          body:
            "El colombiano sella frases con “¿oíste?/¿oyó?/¿sí?”. El inglés hace lo mismo, pero jamás con “hear”. Sus coletillas son “you know?”, “right?”, “yeah?” o el pegajoso “isn't it?”. “It's the best part, you know?” no pregunta si oíste: pide que estés de acuerdo, igual que tu “¿oíste?”. Traducir la coletilla como “you hear?” suena a calco y delata al principiante. Aprende a cerrar con “you know?” o “right?” y de inmediato sonarás más natural."
        },
        {
          label: "Salsa en el norte",
          body:
            "La salsa viajó lejos de Cali: en ciudades de Estados Unidos hay clubes, clases y noches latinas donde un melómano local te nombra la orquesta y el año igual que en el Valle. Pero el idioma alrededor cambia. Reaccionas con “oh, I love this song!”, pides atención con “listen to this part”, y confirmas con “you know?”. El baile es el mismo; lo que se dice encima de la música se dice en inglés, con “hear” y “listen” bien separados."
        }
      ],
      pitfalls: [
        {
          mistake: "“Hear! You dropped something.”",
          whyItFails: "Calca “¡oiga!” con “hear!”, pero “hear” no llama la atención de nadie. Para avisar a un desconocido, el inglés usa “excuse me”.",
          sayInstead: "Excuse me, you dropped something."
        },
        {
          mistake: "“I listen a strange noise.”",
          whyItFails: "Para un sonido que llega sin querer va “hear”, no “listen”, y “listen” además pediría “to”. Aquí no hubo escucha deliberada.",
          sayInstead: "I hear a strange noise."
        },
        {
          mistake: "“Do you listen that song playing?”",
          whyItFails: "Preguntas si percibe el sonido, así que es “hear”, no “listen”. “Listen” implicaría que se puso a escucharla a propósito.",
          sayInstead: "Do you hear that song playing?"
        },
        {
          mistake: "“I already listened you, let's go.”",
          whyItFails: "Recibir un mensaje es “hear”: “I heard you”. “Listened you” falla dos veces, por el verbo y por el “to” ausente.",
          sayInstead: "I heard you, let's go."
        }
      ],
      variations: [
        {
          form: "Hey!",
          register: "friendly informal",
          region: "Universal",
          whenToUse: "El llamado de atención entre amigos, como “¡oís!”."
        },
        {
          form: "Excuse me.",
          register: "polite neutral",
          region: "Universal",
          whenToUse: "El llamado cortés a un desconocido, como un “oiga” respetuoso."
        },
        {
          form: "Listen!",
          register: "friendly informal",
          region: "Universal",
          whenToUse: "Para pedir atención antes de algo importante."
        },
        {
          form: "You know?",
          register: "friendly informal",
          region: "Universal",
          whenToUse: "Coletilla para buscar acuerdo al cerrar la frase."
        },
        {
          form: "Did you hear that?",
          register: "neutral",
          region: "Universal",
          whenToUse: "Pregunta real por si el otro percibió un sonido."
        }
      ],
      prompt: "En inglés quieres llamar la atención de un desconocido al que se le cayó algo. ¿Qué dices?",
      choices: [
        "Hear, you dropped this!",
        "Excuse me, you dropped this!",
        "Listen you, you dropped this!"
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Percibes de repente un ruido raro que no estabas buscando. ¿Qué verbo va?",
          choices: [
            "I listen a strange noise.",
            "I listen to a strange noise.",
            "I hear a strange noise."
          ],
          answer: 2,
          tests: "“hear” para percibir un sonido sin intención"
        },
        {
          prompt: "¿Cómo llamas a un amigo para que venga, al estilo de “¡oís!”?",
          choices: [
            "Hey, come over here!",
            "Hear, come over here!",
            "Listen you, come over here!"
          ],
          answer: 0,
          tests: "“hey” como llamado de atención, no “hear”"
        },
        {
          prompt: "Quieres cerrar “it's the best part” con una coletilla de acuerdo. ¿Cuál va?",
          choices: [
            "It's the best part, you hear?",
            "It's the best part, you know?",
            "It's the best part, do you listen?"
          ],
          answer: 1,
          tests: "“you know?/right?” como coletilla, no “you hear?”"
        },
        {
          prompt: "Ya captaste lo que te dijo tu amigo y quieren irse. ¿Qué dices?",
          choices: [
            "I already listened you, let's go.",
            "I already listen to you, let's go.",
            "I heard you, let's go."
          ],
          answer: 2,
          tests: "“I heard you” para un mensaje ya recibido"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/19-foundation-looking-and-listening.js");
