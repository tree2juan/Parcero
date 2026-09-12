/*
 * Lesson block: extending / figuring things out.
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
 * The three verbs here — descubrir, resolver and revisar — are adult tools for
 * working things out: finding out what was hidden, solving what is stuck, and
 * checking over what may fail if nobody inspects it. The added grammar lesson
 * teaches discourse-connectors because formal connectors appear only 6 times in
 * 6,478 utterances, the thinnest measured cohesion gap in the course. The two directions are
 * mirrors: same number of dialogue turns, vocabulary entries, culture notes,
 * pitfalls, variations and practice questions, and the same optional slots
 * filled on the same rows. That is enforced by test/shape.test.js, not by good
 * intentions.
 */
lessons.push(
  {
    id: "discovering-why-san-andres-has-two-names",
    level: "Extending · Figuring things out",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    verb: "descubrir",
    review: "pending",
    es: {
      title: "Discovering another history in San Andrés",
      situation:
        "You are in San Andrés with Mariana, who shows you an old house near La Loma. At first you think you are only going to hear tourist facts, but you discover that the place has two names, two memories, and a family story that no one put on the sign.",
      setting: {
        who: "Mariana is a San Andrés resident who switches comfortably between family memory and public history. Owen is already conversational and can ask follow-up questions without turning the afternoon into an interview.",
        what: "A walk past an old house becomes a conversation about finding out what a place means beyond the first explanation.",
        when: "Late morning, after the rain has cleared and the road up toward La Loma is drying in patches.",
        where: "San Andrés, on the island, near La Loma rather than on the beach strip.",
        why: "Because descubrir is often not laboratory discovery at all. In ordinary speech it means finding out something about a person, a family or a place that was there all along but not yet known to you."
      },
      address: {
        form: "tú",
        who: "Mariana and Owen use tú because they are friends and the conversation is reflective rather than formal.",
        why: "The island setting does not require invented dialect color. A clear Colombian tú lets the lesson focus on the verb and on respectful curiosity.",
        ifYouSwitch:
          "Usted would make Owen sound more like a reporter or official visitor. Tú keeps the exchange personal enough for family memory without pretending he belongs to the family."
      },
      dialogue: [
        {
          speaker: "Owen",
          target: "Creí que ya conocía esta casa, pero acabo de descubrir que tiene otro nombre.",
          translation: "I thought I already knew this house, but I just found out it has another name.",
          pronunciation: "kreh-EE keh ya koh-noh-SEE-ah ES-tah KAH-sah, PEH-roh ah-KAH-boh deh des-koo-BREER keh TYEH-neh OH-troh NOM-breh",
          literal: "I-believed that already I-knew this house, but I-finish of discover that it-has another name.",
          why: "“Acabo de descubrir que…” is a grown-up everyday way to say “I just found out that…”. The discovery is not scientific; it is new knowledge arriving in conversation."
        },
        {
          speaker: "Mariana",
          target: "Sí, en los papeles aparece un nombre, pero la familia siempre le dijo de otra manera.",
          translation: "Yes, one name appears in the papers, but the family always called it something else.",
          pronunciation: "see, en los pah-PEH-les ah-pah-REH-seh oon NOM-breh, PEH-roh lah fah-MEE-lyah SYEM-preh leh DEE-hoh deh OH-trah mah-NEH-rah",
          literal: "Yes, in the papers appears one name, but the family always to-it said in another way.",
          why: "Mariana separates official record from lived use. Descubrir often begins exactly there: one version is public, another has to be learned from someone."
        },
        {
          speaker: "Owen",
          target: "Entonces no lo descubrí leyendo el letrero, sino escuchando la historia.",
          translation: "So I didn't discover it by reading the sign, but by listening to the story.",
          pronunciation: "en-TON-ses no lo des-koo-BREE leh-YEN-doh el leh-TREH-roh, SEE-noh es-koo-CHAN-doh lah ees-TOH-ryah",
          literal: "Then not it I-discovered reading the sign, but listening to the story.",
          why: "The preterite “descubrí” presents the moment the new understanding clicked. The contrast “no…, sino…” is extension-tier Spanish that real people use constantly."
        },
        {
          speaker: "Mariana",
          target: "Y eso que todavía no has descubierto por qué mi abuela no quería venderla.",
          translation: "And you still haven't found out why my grandmother didn't want to sell it.",
          pronunciation: "ee EH-soh keh toh-dah-BEE-ah no as des-koo-BYER-toh por keh mee ah-BWEH-lah no keh-REE-ah ben-DER-lah",
          literal: "And that that still not you-have discovered why my grandmother did not want to sell it.",
          why: "Here is the grammar payload: the past participle is irregular, “descubierto,” not “descubrido.” You need it for “has descubierto” and “habían descubierto.”"
        },
        {
          speaker: "Owen",
          target: "¿Porque habían descubierto que debajo del piso quedaban cartas antiguas?",
          translation: "Because they had discovered that old letters were left under the floor?",
          pronunciation: "por-KEH ah-BEE-an des-koo-BYER-toh keh deh-BAH-hoh del PEE-soh keh-DAH-bahn KAR-tas ahn-TEE-gwas",
          literal: "Because they-had discovered that under the floor remained letters old?",
          why: "“Habían descubierto” uses the imperfect of haber plus the irregular participle. It lets Owen refer to a discovery that happened before the story he is hearing."
        },
        {
          speaker: "Mariana",
          target: "Casi. Descubrieron las cartas después; primero descubrieron que la casa guardaba más memoria que plata.",
          translation: "Almost. They found the letters later; first they discovered that the house held more memory than money.",
          pronunciation: "KAH-see. des-koo-BRYEH-ron las KAR-tas des-PWES; pree-MEH-roh des-koo-BRYEH-ron keh lah KAH-sah gwar-DAH-bah mahs meh-MOH-ryah keh PLAH-tah",
          literal: "Almost. They-discovered the letters afterward; first they-discovered that the house kept more memory than money.",
          why: "The plural preterite “descubrieron” handles both a physical find and a deeper realization. That range is why descubrir is so useful outside museums and laboratories."
        }
      ],
      vocabulary: [
        {
          term: "descubrir",
          explanation:
            "To discover or find out. In ordinary Colombian speech it often means learning something that was hidden from you, not making a scientific breakthrough.",
          literal: "to uncover",
          useWhen:
            "You find out a reason, a story, a detail about someone, or a fact that changes how you understand a place.",
          avoidWhen:
            "You simply notice something obvious in front of you. Then ver, darse cuenta or notar may be more precise.",
          register: "neutral",
          region: "Universal Spanish; fully ordinary in Colombia.",
          related: ["enterarse", "darse cuenta", "averiguar", "descubierto"],
          example: {
            target: "Descubrí que la casa tenía otro nombre.",
            translation: "I found out the house had another name."
          }
        },
        {
          term: "descubierto",
          explanation:
            "The irregular past participle of descubrir. It appears in perfect tenses and in passive-style descriptions.",
          literal: "discovered / uncovered",
          useWhen:
            "Saying what has been found out: “he descubierto,” “habían descubierto,” “ya está descubierto.”",
          avoidWhen:
            "Regularizing it as “descubrido.” That form will mark the sentence as a learner guess.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["he descubierto", "habían descubierto", "descubrí", "descubrieron"],
          example: {
            target: "Todavía no has descubierto la razón.",
            translation: "You still haven't discovered the reason."
          }
        },
        {
          term: "acabo de descubrir que…",
          explanation:
            "I just found out that… A very common frame for a discovery that happened moments ago.",
          literal: "I finish of discovering that",
          useWhen:
            "New information has just arrived and you are still adjusting your understanding.",
          avoidWhen:
            "The discovery happened long ago. “Acabo de…” means the event is fresh.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["me acabo de enterar", "recién supe", "descubrí que", "justo ahora"],
          example: {
            target: "Acabo de descubrir que tiene otro nombre.",
            translation: "I just found out it has another name."
          }
        },
        {
          term: "descubrí que…",
          explanation:
            "I discovered or found out that… The preterite frames the discovery as a completed moment.",
          literal: "I uncovered that",
          useWhen:
            "Telling the point in the past when a fact became clear to you.",
          avoidWhen:
            "You are still in the process of investigating. Then “estoy averiguando” or “estoy tratando de entender” may fit better.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["me enteré de que", "supe que", "noté que", "averigüé"],
          example: {
            target: "Descubrí que la historia era familiar.",
            translation: "I found out the story was family history."
          }
        },
        {
          term: "habían descubierto",
          explanation:
            "They had discovered. The pluscuamperfecto places one discovery before another past event.",
          literal: "they had discovered",
          useWhen:
            "A story needs two layers of past time: they had found something before someone decided, spoke or changed course.",
          avoidWhen:
            "Everything happened in one simple sequence. Then the preterite may be cleaner.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["había descubierto", "ya habían visto", "antes de eso", "para entonces"],
          example: {
            target: "Habían descubierto cartas antiguas bajo el piso.",
            translation: "They had discovered old letters under the floor."
          }
        },
        {
          term: "enterarse",
          explanation:
            "To find out or hear about something, often through news, gossip or someone telling you.",
          literal: "to make oneself informed",
          useWhen:
            "Information reaches you rather than you actively uncovering it: “me enteré por Mariana.”",
          avoidWhen:
            "You want the image of uncovering or discovering through investigation. Then descubrir or averiguar may be stronger.",
          register: "neutral",
          region: "Universal Spanish; everyday in Colombia.",
          related: ["descubrir", "saber", "oír", "la noticia"],
          example: {
            target: "Me enteré de la historia por Mariana.",
            translation: "I found out about the story from Mariana."
          }
        },
        {
          term: "averiguar",
          explanation:
            "To find out by asking, checking or investigating. It is more active and practical than enterarse.",
          literal: "to inquire into",
          useWhen:
            "You need to check a detail, ask around, or investigate a question that still has no answer.",
          avoidWhen:
            "The answer has already come as a surprise. Then descubrir may better capture the moment of realization.",
          register: "neutral",
          region: "Universal Spanish; common in Colombian problem-solving talk.",
          related: ["descubrir", "preguntar", "investigar", "confirmar"],
          example: {
            target: "Voy a averiguar quién vivió aquí.",
            translation: "I'm going to find out who lived here."
          }
        }
      ],
      note:
        "The extension-level move is to use descubrir for knowledge that changes the story, not just for grand discoveries. “Descubrí que…” is how people talk about a hidden family reason, a local fact, or a truth about someone. The form to protect is “descubierto”: he descubierto, habían descubierto, ya estaba descubierto.",
      culture: [
        {
          label: "Finding out is often relational",
          body:
            "In Colombia, as anywhere, many things are not discovered by reading a plaque but by listening to someone who trusts you with a fuller version. The verb descubrir can name that shift from tourist fact to human context."
        },
        {
          label: "San Andrés is more than the beach strip",
          body:
            "Setting the scene near La Loma lets the island be a lived place rather than a postcard. The language stays general, but the place matters: family memory, land and names can carry more weight than a visitor first sees."
        },
        {
          label: "The participle is not optional polish",
          body:
            "A learner can avoid “descubierto” for a while, but adult storytelling needs it. “No has descubierto,” “habían descubierto” and “ya estaba descubierto” let you place knowledge at different points in a story."
        },
        {
          label: "Discover versus find out",
          body:
            "English often prefers “find out” where Spanish comfortably uses descubrir. That does not make descubrir grandiose. It simply means the hidden fact has come into view."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “he descubrido”",
          whyItFails:
            "The past participle is irregular: descubierto. Perfect tenses need that form, so the regularized version sounds like a guess.",
          sayInstead: "He descubierto algo importante."
        },
        {
          mistake: "Using descubrir for merely seeing an obvious object",
          whyItFails:
            "If the thing is just visible, descubrir can overstate the event. The verb suggests something previously unknown or hidden became clear.",
          sayInstead: "Vi la casa desde la esquina."
        },
        {
          mistake: "Forgetting the “que” after descubrir",
          whyItFails:
            "When the discovery is a whole clause, Spanish normally needs “que.” English “found out she…” tempts learners to skip it.",
          sayInstead: "Descubrí que ella vivió aquí."
        },
        {
          mistake: "Treating enterarse and descubrir as identical",
          whyItFails:
            "Enterarse often means information reached you; descubrir suggests uncovering or realizing. They overlap, but the angle is different.",
          sayInstead: "Me enteré por Mariana; después descubrí el motivo."
        }
      ],
      variations: [
        {
          form: "Acabo de descubrir que tiene otro nombre.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "New information has just changed your understanding."
        },
        {
          form: "Descubrí la historia escuchando a Mariana.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The discovery happened through conversation, not research."
        },
        {
          form: "Todavía no has descubierto el motivo.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Using the irregular participle in the present perfect."
        },
        {
          form: "Habían descubierto cartas antiguas.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A discovery happened before another past moment."
        },
        {
          form: "Me enteré por ella, pero lo descubrí después.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Separating hearing news from fully realizing its meaning."
        }
      ],
      prompt: "Mariana says “todavía no has descubierto.” What form is doing the important work?",
      choices: [
        "Descubierto, the irregular participle used with has.",
        "Descubrido, the regular participle used with has.",
        "Descubriendo, the gerund used for completed facts."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence correctly says “I just found out that…”?",
          choices: [
            "Acabo de descubrir que la casa tiene otro nombre.",
            "Acabo descubrir la casa tiene otro nombre.",
            "Acabo de descubierto que la casa tiene otro nombre."
          ],
          answer: 0,
          tests: "acabo de descubrir que + clause"
        },
        {
          prompt: "Which sentence uses the irregular participle correctly?",
          choices: [
            "Habían descubrido unas cartas antiguas bajo el piso.",
            "Habían descubierto unas cartas antiguas bajo el piso.",
            "Habían descubriendo unas cartas antiguas bajo el piso."
          ],
          answer: 1,
          tests: "descubierto as irregular past participle"
        },
        {
          prompt: "When does “descubrí que…” fit best?",
          choices: [
            "When a hidden fact became clear at a past moment.",
            "When an object was visible from the start of the walk.",
            "When nobody learned anything new during the story."
          ],
          answer: 0,
          tests: "descubrir as finding out, not merely seeing"
        },
        {
          prompt: "What is the difference between “me enteré” and “descubrí” here?",
          choices: [
            "Me enteré is only for laboratory discoveries; descubrí is only for beach signs.",
            "Me enteré requires an irregular participle; descubrí requires a gerund.",
            "Me enteré often says news reached me; descubrí suggests realizing or uncovering."
          ],
          answer: 2,
          tests: "enterarse versus descubrir"
        }
      ]
    },
    en: {
      title: "Descubrir otra historia en una isla",
      situation:
        "Usted está en Key West con Marina, que le muestra una casa antigua lejos de la calle más turística. Al principio cree que sólo va a oír datos para visitantes, pero descubre en inglés que el lugar tiene dos nombres, dos memorias y una historia familiar que nadie puso en el letrero.",
      setting: {
        who: "Marina vive en Key West y pasa con naturalidad de la memoria familiar a la historia pública. Olivia ya conversa con soltura y puede hacer preguntas sin convertir la tarde en una entrevista.",
        what: "Un paseo frente a una casa antigua se vuelve una conversación sobre descubrir lo que un lugar significa más allá de la primera explicación.",
        when: "Final de la mañana, después de una lluvia corta, cuando la madera de los porches todavía está húmeda.",
        where: "Key West, Florida, lejos de la franja más turística.",
        why: "Porque discover en inglés existe, pero en conversación muchas veces se prefiere “find out.” La lección enseña cuándo suena natural cada uno y cómo usar “discovered” sin calcar el español."
      },
      address: {
        form: "mixed",
        who: "Marina y Olivia usan el mismo “you” de todo el inglés; la cercanía está en el tono y en los detalles que Marina decide contar.",
        why: "El inglés no tiene tú ni usted. Para sonar respetuosa, Olivia no cambia el pronombre; hace preguntas cuidadosas y no se apropia de la historia.",
        ifYouSwitch:
          "No hay cambio de pronombre disponible. Si Olivia se vuelve demasiado formal, suena como guía o periodista, no como amiga escuchando."
      },
      dialogue: [
        {
          speaker: "Olivia",
          target: "I thought I knew this house, but I just found out it has another name.",
          translation: "Creí que conocía esta casa, pero acabo de descubrir que tiene otro nombre.",
          pronunciation: "ai thot ai nu dis jaus, bot ai yost faund aut it jas a-NA-der neim",
          literal: "Pensé que sabía esta casa, pero justo encontré afuera que tiene otro nombre.",
          why: "“Find out” es la opción más conversacional para “descubrir que…” cuando se trata de información nueva. “Discover” también sirve, pero puede sonar más grande o escrito."
        },
        {
          speaker: "Marina",
          target: "Yes, the papers use one name, but the family always called it something else.",
          translation: "Sí, en los papeles aparece un nombre, pero la familia siempre le dijo de otra manera.",
          pronunciation: "yes, da PEI-pers yuz uan neim, bot da FAM-li OL-weiz kold it SOM-thing els",
          literal: "Sí, los papeles usan un nombre, pero la familia siempre lo llamó algo más.",
          why: "El inglés separa “the papers” de “the family” sin complicar la gramática. La clave es que la información oficial no agota la historia."
        },
        {
          speaker: "Olivia",
          target: "So I didn't discover it from the sign; I found it out by listening.",
          translation: "Entonces no lo descubrí leyendo el letrero, sino escuchando.",
          pronunciation: "so ai DID-ent dis-KO-ver it from da sain; ai faund it aut bai LIS-ning",
          literal: "Entonces no lo descubrí desde el letrero; lo encontré afuera escuchando.",
          why: "“Discover” funciona aquí porque Olivia contrasta formas de llegar al conocimiento. “Found it out” es más oral; ambas formas conviven."
        },
        {
          speaker: "Marina",
          target: "And you still haven't discovered why my grandmother refused to sell it.",
          translation: "Y todavía no has descubierto por qué mi abuela se negó a venderla.",
          pronunciation: "and yu stil JA-vent dis-KO-verd wai mai GRAND-mo-der ri-FIUZD tu sel it",
          literal: "Y todavía no has descubierto por qué mi abuela rechazó venderla.",
          why: "El participio inglés es regular: discovered. El problema para un hispanohablante no es la forma sino no usar “discover” para todo cuando “find out” suena más natural."
        },
        {
          speaker: "Olivia",
          target: "Because they had discovered old letters under the floor?",
          translation: "¿Porque habían descubierto cartas antiguas debajo del piso?",
          pronunciation: "bi-KOZ dei jad dis-KO-verd ould LE-ters ON-der da flor",
          literal: "¿Porque ellos habían descubierto cartas viejas bajo el piso?",
          why: "“Had discovered” ubica una revelación antes de otro momento pasado. La estructura se parece a “habían descubierto,” pero sin participio irregular."
        },
        {
          speaker: "Marina",
          target: "Almost. They found the letters later; first they discovered the house held more memory than money.",
          translation: "Casi. Encontraron las cartas después; primero descubrieron que la casa guardaba más memoria que plata.",
          pronunciation: "OL-moust. dei faund da LE-ters LEI-ter; ferst dei dis-KO-verd da jaus jeld mor ME-mo-ri dan MO-ni",
          literal: "Casi. Ellos encontraron las cartas después; primero descubrieron que la casa sostenía más memoria que dinero.",
          why: "La frase muestra la escala: “found the letters” para el objeto físico, “discovered the house held…” para la comprensión más profunda."
        }
      ],
      vocabulary: [
        {
          term: "discover",
          explanation:
            "Descubrir. En inglés puede sonar un poco más grande que “find out,” pero sirve para una revelación o una comprensión nueva.",
          literal: "descubrir",
          useWhen:
            "Habla de descubrir una historia, una razón, una verdad escondida o algo que cambia la lectura de un lugar.",
          avoidWhen:
            "Sólo quiere decir enterarse de un dato cotidiano. Ahí “find out” suele sonar más conversacional.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["find out", "realize", "learn", "uncover"],
          example: {
            target: "I discovered the house had another name.",
            translation: "Descubrí que la casa tenía otro nombre."
          }
        },
        {
          term: "discovered",
          explanation:
            "El pasado y participio de discover. A diferencia de descubierto, en inglés es regular.",
          literal: "descubrió / descubierto",
          useWhen:
            "Dice que alguien descubrió algo o que algo ha sido descubierto: “I discovered,” “had discovered.”",
          avoidWhen:
            "Quiere el presente: “I discover” o, más natural para noticias recientes, “I found out.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["had discovered", "have discovered", "found out", "uncovered"],
          example: {
            target: "They had discovered old letters.",
            translation: "Habían descubierto cartas antiguas."
          }
        },
        {
          term: "I just found out that…",
          explanation:
            "Acabo de descubrir que… La opción más natural para información nueva en conversación.",
          literal: "acabo de enterarme de que",
          useWhen:
            "Una noticia o dato acaba de llegar y usted todavía lo está procesando.",
          avoidWhen:
            "Quiere sonar más literario, investigativo o solemne. Entonces “discovered” puede tener más peso.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["learned that", "heard that", "just discovered", "realized"],
          example: {
            target: "I just found out it has another name.",
            translation: "Acabo de descubrir que tiene otro nombre."
          }
        },
        {
          term: "I discovered that…",
          explanation:
            "Descubrí que… Suena natural cuando la frase presenta una revelación, investigación o cambio de comprensión.",
          literal: "descubrí que",
          useWhen:
            "Quiere darle peso al momento en que algo se volvió claro.",
          avoidWhen:
            "Sólo cuenta una noticia casual. “I found out that…” puede sonar menos grandilocuente.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["found out that", "realized that", "uncovered that", "learned that"],
          example: {
            target: "I discovered that the story was personal.",
            translation: "Descubrí que la historia era personal."
          }
        },
        {
          term: "had discovered",
          explanation:
            "Había o habían descubierto. Coloca un descubrimiento antes de otro momento pasado.",
          literal: "había descubierto",
          useWhen:
            "La historia necesita mostrar que una revelación ya había ocurrido antes de una decisión o comentario.",
          avoidWhen:
            "Todo pasó en una secuencia simple. Entonces “discovered” puede bastar.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["had found out", "had learned", "before then", "by that time"],
          example: {
            target: "They had discovered the letters before selling.",
            translation: "Habían descubierto las cartas antes de vender."
          }
        },
        {
          term: "find out",
          explanation:
            "Enterarse o averiguar. Es el verbo compuesto cotidiano para recibir o conseguir información.",
          literal: "encontrar afuera",
          useWhen:
            "Quiere decir que alguien se enteró, averiguó o descubrió un dato práctico.",
          avoidWhen:
            "El objeto es una cosa física que apareció. Para eso use “find”: “they found the letters.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["discover", "learn", "hear", "figure out"],
          example: {
            target: "I found out from Marina.",
            translation: "Me enteré por Marina."
          }
        },
        {
          term: "figure out",
          explanation:
            "Resolver mentalmente o llegar a entender algo después de pensarlo.",
          literal: "figurar afuera",
          useWhen:
            "La información no llega servida; usted ata cabos y entiende el motivo o el patrón.",
          avoidWhen:
            "Sólo recibió una noticia de otra persona. Ahí “find out” es más exacto.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["work out", "realize", "understand", "solve"],
          example: {
            target: "I figured out why the name mattered.",
            translation: "Entendí por qué importaba el nombre."
          }
        }
      ],
      note:
        "Discover no calca exactamente descubrir. Para una revelación o una historia con peso, “discover” funciona muy bien; para un dato que acaba de llegar, “find out” suele ser más natural. En inglés el participio no trae sorpresa: discovered. La elección importante es de registro, no de irregularidad.",
      culture: [
        {
          label: "Find out suena más cotidiano",
          body:
            "Un hispanohablante avanzado puede usar “discover” demasiado. En inglés conversacional, mucha información nueva se dice con “find out”: I just found out, how did you find out, we'll find out later. “Discover” se reserva para algo con más peso o sorpresa."
        },
        {
          label: "Las casas también tienen versiones",
          body:
            "La escena fuera de Colombia mantiene la misma habilidad cultural: escuchar la historia privada detrás del dato público. El verbo que usted escoja debe dejar espacio para esa diferencia entre información y comprensión."
        },
        {
          label: "Found no es found out",
          body:
            "“They found the letters” habla de encontrar un objeto físico. “They found out why” habla de descubrir información. Separar esas dos formas evita muchas frases raras en inglés."
        },
        {
          label: "Had discovered ordena el pasado",
          body:
            "Cuando una historia tiene capas, “had discovered” permite decir qué se sabía antes de que ocurriera otra cosa. Es una herramienta adulta de narración, no un adorno gramatical."
        }
      ],
      pitfalls: [
        {
          mistake: "“I discovered that yesterday is a holiday.”",
          whyItFails:
            "Se entiende, pero para un dato cotidiano recién sabido, “found out” suele sonar más natural y menos solemne.",
          sayInstead: "I found out yesterday is a holiday."
        },
        {
          mistake: "“I found out the letters under the floor.”",
          whyItFails:
            "Find out es para información, no para objetos físicos. Si aparecieron cartas, el verbo simple es find.",
          sayInstead: "I found the letters under the floor."
        },
        {
          mistake: "“They had discover old letters.”",
          whyItFails:
            "Después de had se necesita el participio: discovered. El verbo base no completa el pluscuamperfecto inglés.",
          sayInstead: "They had discovered old letters."
        },
        {
          mistake: "“I discovered it listening the story.”",
          whyItFails:
            "Para el medio o la manera, el inglés necesita “by” antes del gerundio: by listening.",
          sayInstead: "I discovered it by listening to the story."
        }
      ],
      variations: [
        {
          form: "I just found out it has another name.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Información nueva acaba de llegar en conversación."
        },
        {
          form: "I discovered the story by listening.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La comprensión llegó por una historia, no por un letrero."
        },
        {
          form: "You still haven't discovered the reason.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Usar el participio regular después de have."
        },
        {
          form: "They had discovered old letters.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un descubrimiento ocurrió antes de otro momento pasado."
        },
        {
          form: "I found out from her, then figured out why.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Separar recibir información de entender el motivo."
        }
      ],
      prompt: "Marina says “you still haven't discovered.” ¿Qué forma inglesa importa?",
      choices: [
        "Discovered, the regular participle used after haven't.",
        "Discover, the base form used after every auxiliary.",
        "Discovering, the gerund used for completed facts."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase suena más natural para un dato recién sabido?",
          choices: [
            "I just found out it has another name.",
            "I just found it has another name.",
            "I just discovered out it has another name."
          ],
          answer: 0,
          tests: "find out para información nueva cotidiana"
        },
        {
          prompt: "¿Cuál frase usa bien el pluscuamperfecto inglés?",
          choices: [
            "They had discover old letters under the floor.",
            "They had discovered old letters under the floor.",
            "They had discovering old letters under the floor."
          ],
          answer: 1,
          tests: "had discovered con participio"
        },
        {
          prompt: "¿Cuándo encaja mejor “discover” que “find out”?",
          choices: [
            "Cuando la frase da peso a una revelación o comprensión nueva.",
            "Cuando alguien encuentra físicamente las llaves bajo la mesa.",
            "Cuando no hubo información nueva ni cambio de comprensión."
          ],
          answer: 0,
          tests: "discover para revelación con peso"
        },
        {
          prompt: "¿Qué diferencia hay entre “found” y “found out”?",
          choices: [
            "Found out sólo se usa con objetos guardados bajo el piso.",
            "Found necesita had siempre; found out nunca acepta pasado.",
            "Found suele ser para objetos; found out es para información."
          ],
          answer: 2,
          tests: "found versus found out"
        }
      ]
    }
  },
  {
    id: "resolving-a-monteria-water-bill",
    level: "Extending · Figuring things out",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "work-and-employment",
    register: "courteous",
    verb: "resolver",
    review: "pending",
    es: {
      title: "Sorting out a strange charge in Montería",
      situation:
        "You are in Montería and go with Laura to ask about a water bill that arrived extremely high. No one wants to fight, but everyone needs the case to be resolved, or at least to understand why nothing has been resolved yet.",
      setting: {
        who: "Laura rents a small apartment and knows the usual water bill by heart. The clerk is patient but has to follow the utility company's procedure.",
        what: "A service-counter conversation about sorting out an unusually high bill, checking whether there was a reading error, and deciding what remains pending.",
        when: "Mid-morning on a hot weekday, with several people waiting and a fan working harder than the line.",
        where: "Montería, Córdoba, at a public utility office near the city center.",
        why: "Because resolver is the verb for problems, cases, doubts and procedures that need an outcome. It is also irregular: resuelvo in the present and resuelto as the participle."
      },
      address: {
        form: "usted",
        who: "Laura and the clerk use usted both ways, the normal service-counter register.",
        why: "The conversation has pressure but should stay orderly. Usted helps the complaint sound like a case to solve, not a personal fight.",
        ifYouSwitch:
          "Tú would make Laura sound too familiar with someone who controls the process. Usted keeps the tone firm, adult and usable."
      },
      dialogue: [
        {
          speaker: "Laura",
          target: "Buenos días. Vengo porque necesito resolver un cobro que no entiendo.",
          translation: "Good morning. I'm here because I need to resolve a charge I don't understand.",
          pronunciation: "BWEH-nos DEE-as. BEN-goh POR-keh neh-seh-SEE-toh rreh-sol-BER oon KOH-broh keh no en-TYEN-doh",
          literal: "Good days. I-come because I-need to resolve a charge that not I-understand.",
          why: "“Resolver un cobro” treats the bill as a problem requiring an outcome. It is more procedural than simply saying you are angry about the amount."
        },
        {
          speaker: "Funcionario",
          target: "Claro. Yo le reviso el caso y, si hay error de lectura, lo resolvemos aquí.",
          translation: "Of course. I'll check the case for you, and if there is a reading error, we'll resolve it here.",
          pronunciation: "KLAH-roh. yo leh rreh-BEE-soh el KAH-soh ee, see ai eh-RROR deh lek-TOO-rah, lo rreh-sol-BEH-mos ah-KEE",
          literal: "Clear. I for-you check the case and, if there is error of reading, it we-resolve here.",
          why: "Resolver often travels with administrative nouns: caso, duda, problema, trámite. The clerk promises a concrete outcome only if the evidence supports it."
        },
        {
          speaker: "Laura",
          target: "La vez pasada me dijeron que ya estaba resuelto, pero volvió a salir el mismo valor.",
          translation: "Last time they told me it was already resolved, but the same amount appeared again.",
          pronunciation: "lah bes pah-SAH-dah meh dee-HEH-ron keh ya es-TAH-bah rreh-SWEL-toh, PEH-roh bol-BYOH ah sah-LEER el MEES-moh bah-LOR",
          literal: "The time past they-told me that already it-was resolved, but returned to come out the same value.",
          why: "The participle is irregular: resuelto, not resolvido. “Ya estaba resuelto” is exactly the kind of phrase you need when a supposedly closed issue returns."
        },
        {
          speaker: "Funcionario",
          target: "Entiendo. En el sistema no se ha resuelto nada; apenas dejaron una nota.",
          translation: "I understand. In the system nothing has been resolved; they only left a note.",
          pronunciation: "en-TYEN-doh. en el sees-TEH-mah no seh ah rreh-SWEL-toh NAH-dah; ah-PEH-nas deh-HAH-ron OO-nah NOH-tah",
          literal: "I-understand. In the system nothing has resolved itself; only they-left a note.",
          why: "“No se ha resuelto nada” is common Colombian institutional speech: the issue is still open, whatever someone may have said at the counter."
        },
        {
          speaker: "Laura",
          target: "Entonces, ¿usted resuelve eso hoy o tengo que radicar otra solicitud?",
          translation: "So will you resolve that today, or do I have to file another request?",
          pronunciation: "en-TON-ses, oos-TED rreh-SWEL-beh EH-soh oy oh TEN-goh keh rrah-dee-KAR OH-trah soh-lee-see-TOOD",
          literal: "Then, you resolve that today or I-have to file another request?",
          why: "“Resuelve” shows the present stem change o to ue. Laura is direct, but the usted and the clear alternative keep the question professional."
        },
        {
          speaker: "Funcionario",
          target: "Yo lo resuelvo si la foto del medidor confirma el error; si no, toca solucionarlo con visita técnica.",
          translation: "I'll resolve it if the meter photo confirms the error; if not, it has to be solved with a technical visit.",
          pronunciation: "yo lo rreh-SWEL-boh see lah FOH-toh del meh-dee-DOR kon-FEER-mah el eh-RROR; see no, TOH-kah soh-loo-syo-NAR-loh kon bee-SEE-tah TEK-nee-kah",
          literal: "I it resolve if the photo of-the meter confirms the error; if not, it-is-necessary to solve-it with technical visit.",
          why: "“Resuelvo” is the yo form with o-to-ue. The clerk also uses solucionar for the broader fix, which can sound more practical and less case-filed than resolver."
        }
      ],
      vocabulary: [
        {
          term: "resolver",
          explanation:
            "To resolve or solve a problem, case, doubt or procedure by bringing it to an outcome.",
          literal: "to resolve / solve",
          useWhen:
            "There is a problem, complaint, case, question or practical mess that needs a decision or fix.",
          avoidWhen:
            "You mean repairing a physical object casually. Colombians often reach for arreglar there; solucionar is also common for practical fixes.",
          register: "neutral",
          region: "Universal Spanish; frequent in Colombian administrative speech.",
          related: ["solucionar", "arreglar", "resuelto", "el caso"],
          example: {
            target: "Necesito resolver este cobro.",
            translation: "I need to resolve this charge."
          }
        },
        {
          term: "resuelto",
          explanation:
            "The irregular past participle of resolver. It appears in perfect tenses and in “already resolved” phrases.",
          literal: "resolved",
          useWhen:
            "Saying an issue is or has been resolved: “está resuelto,” “se ha resuelto,” “había resuelto.”",
          avoidWhen:
            "Regularizing it as “resolvido.” The standard participle is resuelto.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["está resuelto", "se ha resuelto", "resolví", "resolver"],
          example: {
            target: "El caso ya está resuelto.",
            translation: "The case is already resolved."
          }
        },
        {
          term: "resuelvo",
          explanation:
            "The yo form in the present: I resolve. The stem changes from o to ue.",
          literal: "I resolve",
          useWhen:
            "Promising or explaining what you can settle: “yo lo resuelvo,” “resuelvo esa duda.”",
          avoidWhen:
            "Using a regularized “resolvo.” The stem change is part of normal speech, not fancy grammar.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["resuelve", "resolvemos", "resolveré", "resolví"],
          example: {
            target: "Yo lo resuelvo si hay error.",
            translation: "I'll resolve it if there is an error."
          }
        },
        {
          term: "no se ha resuelto nada",
          explanation:
            "Nothing has been resolved. A common phrase when an office, case or complaint is still stuck.",
          literal: "nothing has resolved itself",
          useWhen:
            "The file has movement but no outcome: notes, calls, promises, but no actual solution.",
          avoidWhen:
            "Something small is already fixed. This phrase sounds like frustration with a stalled process.",
          register: "neutral",
          region: "Very common in Colombian complaint and office talk.",
          related: ["sigue pendiente", "no hay respuesta", "el caso", "el trámite"],
          example: {
            target: "En el sistema no se ha resuelto nada.",
            translation: "In the system nothing has been resolved."
          }
        },
        {
          term: "solucionar",
          explanation:
            "To solve or fix in a practical way. It often sounds more hands-on than resolver.",
          literal: "to solution",
          useWhen:
            "You want the problem fixed, especially in everyday logistics, service and technical issues.",
          avoidWhen:
            "The focus is a formal decision, case or legal question. Resolver may fit the institutional tone better.",
          register: "neutral",
          region: "Universal Spanish; very common in Colombia.",
          related: ["resolver", "arreglar", "dar solución", "salir del problema"],
          example: {
            target: "Toca solucionarlo con visita técnica.",
            translation: "It has to be fixed with a technical visit."
          }
        },
        {
          term: "arreglar",
          explanation:
            "To fix, arrange or repair. Colombians reach for it constantly with concrete everyday problems.",
          literal: "to put in order",
          useWhen:
            "A chair, phone, pipe, appointment or small mess needs fixing or arranging.",
          avoidWhen:
            "You need the more formal outcome of a case or dispute. Then resolver may sound more exact.",
          register: "neutral",
          region: "Universal Spanish; extremely common in Colombia.",
          related: ["resolver", "solucionar", "componer", "organizar"],
          example: {
            target: "Arreglaron el medidor ayer.",
            translation: "They fixed the meter yesterday."
          }
        },
        {
          term: "radicar una solicitud",
          explanation:
            "To file or officially submit a request. A service-office phrase that often appears before anything can be resolved.",
          literal: "to root a request",
          useWhen:
            "You are dealing with an office, utility, public entity or formal procedure.",
          avoidWhen:
            "Casual everyday plans. It sounds bureaucratic because it is bureaucratic.",
          register: "formal administrative",
          region: "Very common Colombian administrative Spanish.",
          related: ["el trámite", "el caso", "la petición", "el radicado"],
          example: {
            target: "Tuve que radicar otra solicitud.",
            translation: "I had to file another request."
          }
        }
      ],
      note:
        "Resolver sits between formal outcome and practical fix. A case, doubt or complaint se resuelve; a broken object may be arreglarse; a practical mess can solucionarse. The two forms to protect are “resuelvo” in the present and “resuelto” as the participle, especially in the very Colombian sentence “no se ha resuelto nada.”",
      culture: [
        {
          label: "A case can move without being solved",
          body:
            "Colombian service offices often distinguish between a note, a radicado and a resolved case. A person may have listened kindly and still no se ha resuelto nada. The phrase is useful because it separates attention from outcome."
        },
        {
          label: "Resolver is not always reparar",
          body:
            "If the meter itself is broken, someone may arreglar it. If the bill, complaint or case needs an official outcome, someone resolves it. Solucionar sits in the middle as the practical everyday verb for making the problem go away."
        },
        {
          label: "Firmness without a fight",
          body:
            "A clear “¿usted resuelve eso hoy?” can be firm without being rude when the tone stays measured and the alternatives are concrete. Colombian service Spanish often values persistence wrapped in procedural politeness."
        },
        {
          label: "The participle carries institutional memory",
          body:
            "“Ya estaba resuelto” is the sentence people use when a system claims closure. If the problem returns, the irregular participle becomes part of the complaint: who said it was resuelto, and why is it still here?"
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “está resolvido”",
          whyItFails:
            "Resolver has an irregular participle: resuelto. The regular-looking form is not the standard word.",
          sayInstead: "El caso está resuelto."
        },
        {
          mistake: "Saying “yo resolvo”",
          whyItFails:
            "The present yo form changes o to ue: resuelvo. The stem change is required in normal speech.",
          sayInstead: "Yo lo resuelvo hoy."
        },
        {
          mistake: "Using resolver for every kind of fixing",
          whyItFails:
            "Resolver works for problems and cases, but a concrete object may take arreglar, and a practical mess may take solucionar.",
          sayInstead: "Arreglaron el medidor; resolvieron el caso."
        },
        {
          mistake: "Hearing “no se ha resuelto nada” as progress",
          whyItFails:
            "The sentence means the opposite: there may be notes or promises, but no actual outcome yet.",
          sayInstead: "Sigue pendiente; no se ha resuelto nada."
        }
      ],
      variations: [
        {
          form: "Necesito resolver este cobro.",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "Opening a complaint as a problem that needs an outcome."
        },
        {
          form: "El caso ya está resuelto.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The issue has reached a settled result."
        },
        {
          form: "En el sistema no se ha resuelto nada.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The file has activity but no real solution."
        },
        {
          form: "Yo lo resuelvo si hay error.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Promising a fix only under a clear condition."
        },
        {
          form: "Toca solucionarlo con visita técnica.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The practical fix requires another step."
        }
      ],
      prompt: "The clerk says “no se ha resuelto nada.” What is he telling Laura?",
      choices: [
        "The case has a final decision and nothing else is pending.",
        "The system shows movement, but no real outcome has happened.",
        "The meter was repaired yesterday and the bill is correct."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence uses the irregular participle correctly?",
          choices: [
            "El caso ya está resolvido.",
            "El caso ya está resuelto.",
            "El caso ya está resolviendo."
          ],
          answer: 1,
          tests: "resuelto as irregular participle"
        },
        {
          prompt: "Which sentence uses the present yo form correctly?",
          choices: [
            "Yo lo resuelvo si hay error.",
            "Yo lo resolvo si hay error.",
            "Yo lo resolviendo si hay error."
          ],
          answer: 0,
          tests: "resuelvo with o to ue"
        },
        {
          prompt: "Which pairing best separates the verbs?",
          choices: [
            "Arreglar el medidor; resolver el caso.",
            "Resolver el medidor; llover el caso.",
            "Descubrir el medidor; dormir el caso."
          ],
          answer: 0,
          tests: "arreglar for concrete repair, resolver for case outcome"
        },
        {
          prompt: "What does “radicar otra solicitud” mean in this office?",
          choices: [
            "To fix the water meter with a screwdriver.",
            "To pay the bill immediately without questions.",
            "To file another formal request in the system."
          ],
          answer: 2,
          tests: "radicar as submitting an official request"
        }
      ]
    },
    en: {
      title: "Resolver un cobro raro en Miami",
      situation:
        "Usted está en Miami y acompaña a Laura a preguntar por una factura de agua que llegó altísima. Nadie quiere pelear, pero todos necesitan explicar en inglés si el caso is resolved, si nothing has been solved, o si toca otra visita técnica.",
      setting: {
        who: "Laura alquila un apartamento pequeño y conoce de memoria la factura normal del agua. The clerk is patient but has to follow the utility company's procedure.",
        what: "Una conversación de ventanilla sobre solucionar una factura inusualmente alta, revisar si hubo error de lectura y decidir qué queda pendiente.",
        when: "Media mañana de un día caluroso entre semana, con varias personas esperando.",
        where: "Miami, Florida, en una oficina de servicios públicos.",
        why: "Porque solve, resolve y fix no se reparten exactamente como resolver, solucionar y arreglar. Además, resolved es regular en inglés aunque resuelto sea irregular en español."
      },
      address: {
        form: "mixed",
        who: "Laura y el funcionario usan el mismo “you,” con cortesía marcada por “could,” “please,” y frases completas.",
        why: "El inglés no tiene usted de ventanilla. Para mantener el tono profesional, Laura ordena la queja y evita sonar personal.",
        ifYouSwitch:
          "No hay cambio de pronombre que haga el trabajo. Volverse demasiado ceremonial sonaría menos natural que un “could you check the case, please?” bien dicho."
      },
      dialogue: [
        {
          speaker: "Laura",
          target: "Good morning. I'm here because I need to resolve a charge I don't understand.",
          translation: "Buenos días. Vengo porque necesito resolver un cobro que no entiendo.",
          pronunciation: "gud MOR-ning. aim jir bi-KOZ ai nid tu ri-ZOLV a charj ai dount on-der-STAND",
          literal: "Buenos días. Estoy aquí porque necesito resolver un cargo que no entiendo.",
          why: "“Resolve a charge” suena más formal que “fix a charge,” pero en una oficina funciona porque el problema necesita una decisión, no sólo una reparación."
        },
        {
          speaker: "Clerk",
          target: "Of course. I'll review the case, and if there's a reading error, we'll resolve it here.",
          translation: "Claro. Le reviso el caso y, si hay error de lectura, lo resolvemos aquí.",
          pronunciation: "ov kors. ail ri-VIU da keis, and if ders a RI-ding ER-or, wil ri-ZOLV it jir",
          literal: "Por supuesto. Revisaré el caso, y si hay un error de lectura, lo resolveremos aquí.",
          why: "“Review the case” es revisar el expediente o mirar los datos. Después, “resolve it” promete un resultado si la evidencia lo permite."
        },
        {
          speaker: "Laura",
          target: "Last time they told me it was already resolved, but the same amount came back.",
          translation: "La vez pasada me dijeron que ya estaba resuelto, pero volvió a salir el mismo valor.",
          pronunciation: "last taim dei tould mi it woz ol-RE-di ri-ZOLVD, bot da seim a-MAUNT keim bak",
          literal: "La vez pasada me dijeron que estaba ya resuelto, pero la misma cantidad volvió.",
          why: "Resolved es el participio regular de resolve. No tiene la irregularidad de resuelto, pero sí carga la misma idea administrativa: supuestamente cerrado."
        },
        {
          speaker: "Clerk",
          target: "I understand. In the system, nothing has been resolved; they only left a note.",
          translation: "Entiendo. En el sistema no se ha resuelto nada; apenas dejaron una nota.",
          pronunciation: "ai on-der-STAND. in da SIS-tem, NO-thing jaz bin ri-ZOLVD; dei ON-li left a nout",
          literal: "Entiendo. En el sistema, nada ha sido resuelto; sólo dejaron una nota.",
          why: "“Nothing has been resolved” es la versión clara de “no se ha resuelto nada.” Ojo: una nota no es una solución."
        },
        {
          speaker: "Laura",
          target: "So can you solve that today, or do I need to file another request?",
          translation: "Entonces, ¿usted resuelve eso hoy o tengo que radicar otra solicitud?",
          pronunciation: "so kan yu solv dat tu-DEI, or du ai nid tu fail a-NA-der ri-KUEST",
          literal: "Entonces, ¿puede usted solucionar eso hoy, o necesito archivar otra solicitud?",
          why: "Aquí “solve” suena más directo y cotidiano que “resolve.” La frase sigue siendo profesional porque la pregunta da dos caminos concretos."
        },
        {
          speaker: "Clerk",
          target: "I can resolve it if the meter photo confirms the error; otherwise, a technician has to fix it.",
          translation: "Yo lo resuelvo si la foto del medidor confirma el error; si no, toca solucionarlo con visita técnica.",
          pronunciation: "ai kan ri-ZOLV it if da MI-ter FO-tou kon-FERMS di ER-or; O-der-waiz, a tek-NI-shan jaz tu fiks it",
          literal: "Puedo resolverlo si la foto del medidor confirma el error; si no, un técnico tiene que arreglarlo.",
          why: "La frase separa tres verbos ingleses: resolve para cerrar el caso, solve para el problema, fix para la parte técnica concreta."
        }
      ],
      vocabulary: [
        {
          term: "resolve",
          explanation:
            "Resolver en sentido formal: cerrar un caso, una queja, una duda o una disputa con un resultado.",
          literal: "resolver",
          useWhen:
            "Habla de un caso, cargo, disputa, queja o asunto que necesita una decisión.",
          avoidWhen:
            "El problema es físico y concreto. Para un medidor dañado, “fix” suele ser más natural.",
          register: "neutro a formal",
          region: "Inglés universal.",
          related: ["solve", "fix", "resolved", "case"],
          example: {
            target: "I need to resolve this charge.",
            translation: "Necesito resolver este cobro."
          }
        },
        {
          term: "resolved",
          explanation:
            "Resuelto. En inglés es regular y sirve como participio o adjetivo.",
          literal: "resuelto",
          useWhen:
            "Dice que un asunto ya quedó cerrado: “it was resolved,” “nothing has been resolved.”",
          avoidWhen:
            "Quiere hablar de una reparación física. Algo puede estar fixed sin que el caso esté resolved.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["has been resolved", "was resolved", "solved", "closed"],
          example: {
            target: "The case is already resolved.",
            translation: "El caso ya está resuelto."
          }
        },
        {
          term: "I can resolve it",
          explanation:
            "Puedo resolverlo. El inglés no cambia la raíz como resuelvo; usa can + verbo base.",
          literal: "puedo resolverlo",
          useWhen:
            "Promete cerrar un asunto bajo una condición clara.",
          avoidWhen:
            "No tiene autoridad para cerrar el caso. Entonces diga “I can check” o “I can escalate it.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["we can resolve", "I can solve", "I can fix", "if"],
          example: {
            target: "I can resolve it if there's an error.",
            translation: "Yo lo resuelvo si hay error."
          }
        },
        {
          term: "nothing has been resolved",
          explanation:
            "No se ha resuelto nada. Es la frase clara para decir que no hay resultado todavía.",
          literal: "nada ha sido resuelto",
          useWhen:
            "Hay notas, llamadas o promesas, pero el problema sigue abierto.",
          avoidWhen:
            "El asunto ya quedó cerrado. Esta frase expresa falta de avance real.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["still pending", "no outcome", "unresolved", "the case"],
          example: {
            target: "In the system, nothing has been resolved.",
            translation: "En el sistema no se ha resuelto nada."
          }
        },
        {
          term: "solve",
          explanation:
            "Resolver o solucionar un problema. Suele sonar más directo y cotidiano que resolve.",
          literal: "resolver / solucionar",
          useWhen:
            "Habla del problema mismo: solve the issue, solve the problem, solve the billing error.",
          avoidWhen:
            "Se trata de cerrar formalmente una disputa o caso. Entonces resolve puede encajar mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["resolve", "fix", "work out", "solution"],
          example: {
            target: "Can you solve that today?",
            translation: "¿Puede resolver eso hoy?"
          }
        },
        {
          term: "fix",
          explanation:
            "Arreglar o reparar. Es el verbo más concreto para objetos, partes técnicas y fallas físicas.",
          literal: "arreglar",
          useWhen:
            "Un medidor, tubo, carro, teléfono o aparato necesita reparación.",
          avoidWhen:
            "El asunto es una disputa administrativa. Puede fix the problem, pero resolve the case suena más preciso.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["repair", "solve", "resolve", "technician"],
          example: {
            target: "A technician has to fix the meter.",
            translation: "Un técnico tiene que arreglar el medidor."
          }
        },
        {
          term: "file a request",
          explanation:
            "Radicar una solicitud. En inglés se “file” un reclamo, formulario o petición formal.",
          literal: "archivar una solicitud",
          useWhen:
            "Trata con una oficina, empresa de servicios, entidad pública o trámite formal.",
          avoidWhen:
            "Sólo va a pedir algo de manera casual. File suena administrativo.",
          register: "formal administrative",
          region: "Inglés universal.",
          related: ["submit a request", "claim", "case number", "paperwork"],
          example: {
            target: "I need to file another request.",
            translation: "Tengo que radicar otra solicitud."
          }
        }
      ],
      note:
        "Solve, resolve y fix se pisan, pero no son idénticos. Resolve cierra un caso o una disputa; solve ataca el problema; fix repara lo concreto. Para un hispanohablante, resolved no trae una irregularidad como resuelto, pero sí trae una decisión de registro: “the case is resolved,” “the meter is fixed.”",
      culture: [
        {
          label: "Una nota no es una solución",
          body:
            "En inglés de oficina, igual que en español, un sistema puede tener notas sin tener resultado. “Nothing has been resolved” es una frase útil porque corta la ilusión de avance: alguien escribió algo, pero el caso sigue abierto."
        },
        {
          label: "Resolve suena más institucional",
          body:
            "“Resolve the issue” o “resolve the case” encaja en correos, oficinas y atención al cliente. En una conversación más cotidiana, “solve the problem” puede sonar menos rígido. La diferencia es de registro y de foco."
        },
        {
          label: "Fix baja al objeto",
          body:
            "Si el medidor está dañado, a technician fixes it. Si la factura quedó mal, the office resolves the case. Separar objeto y trámite ayuda a sonar preciso."
        },
        {
          label: "La cortesía está en el camino claro",
          body:
            "Una pregunta directa como “can you solve that today?” no tiene que sonar agresiva si ofrece alternativas concretas y mantiene el tono. En atención al cliente, claridad y cortesía trabajan juntas."
        }
      ],
      pitfalls: [
        {
          mistake: "“The case is resoluted.”",
          whyItFails:
            "El participio inglés de resolve es resolved. “Resoluted” no es la forma para decir resuelto.",
          sayInstead: "The case is resolved."
        },
        {
          mistake: "“Nothing resolved nothing.”",
          whyItFails:
            "Para “no se ha resuelto nada,” el inglés necesita una estructura pasiva o perfecta clara: nothing has been resolved.",
          sayInstead: "Nothing has been resolved."
        },
        {
          mistake: "“The technician resolved the meter.”",
          whyItFails:
            "Para reparar un objeto concreto, “fix” suena natural. Resolve apunta más al caso o problema.",
          sayInstead: "The technician fixed the meter."
        },
        {
          mistake: "“I need to radicate another request.”",
          whyItFails:
            "Radicar no se traduce con “radicate” en inglés de oficina. La colocación natural es “file a request” o “submit a request.”",
          sayInstead: "I need to file another request."
        }
      ],
      variations: [
        {
          form: "I need to resolve this charge.",
          register: "cortés de servicio",
          region: "Inglés universal",
          whenToUse: "Abrir una queja como asunto que requiere resultado."
        },
        {
          form: "The case is already resolved.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "El asunto ya quedó cerrado."
        },
        {
          form: "Nothing has been resolved in the system.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Hay movimiento, pero no solución real."
        },
        {
          form: "I can resolve it if there's an error.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Prometer cierre sólo bajo una condición clara."
        },
        {
          form: "A technician has to fix it.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La solución práctica requiere reparar algo concreto."
        }
      ],
      prompt: "The clerk says “nothing has been resolved.” ¿Qué le está diciendo a Laura?",
      choices: [
        "Que el caso ya tiene decisión final y no queda nada pendiente.",
        "Que el sistema muestra movimiento, pero aún no hay resultado real.",
        "Que el técnico reparó el medidor y la factura está correcta."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa bien el participio de resolve?",
          choices: [
            "The case is resoluted.",
            "The case is resolved.",
            "The case is resolvinged."
          ],
          answer: 1,
          tests: "resolved como participio"
        },
        {
          prompt: "¿Cuál frase traduce mejor “yo lo resuelvo si hay error”?",
          choices: [
            "I can resolve it if there's an error.",
            "I can resolute it if there's an error.",
            "I can resolving it if there's an error."
          ],
          answer: 0,
          tests: "can resolve with base verb"
        },
        {
          prompt: "¿Cuál pareja separa mejor los verbos ingleses?",
          choices: [
            "Fix the meter; resolve the case.",
            "Resolve the meter; rain the case.",
            "Discover the meter; sleep the case."
          ],
          answer: 0,
          tests: "fix for object, resolve for case"
        },
        {
          prompt: "¿Qué significa “file another request” en esta oficina?",
          choices: [
            "Arreglar el medidor con una herramienta.",
            "Pagar la factura de inmediato sin preguntar.",
            "Radicar otra solicitud formal en el sistema."
          ],
          answer: 2,
          tests: "file a request para radicar solicitud"
        }
      ]
    }
  },
  {
    id: "checking-the-oil-outside-riohacha",
    level: "Extending · Figuring things out",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "neutral",
    verb: "revisar",
    review: "pending",
    es: {
      title: "Checking the oil before leaving Riohacha",
      situation:
        "You are about to leave Riohacha by road and stop at a service station. The car sounds strange, the trip is long, and you need to ask someone to check the oil, the tires, and a receipt, without confusing revisar with rewriting or with studying for an exam.",
      setting: {
        who: "Carolina is driving out of Riohacha and does not want to gamble on a long hot road. The attendant is used to quick checks before people leave town.",
        what: "A practical service-station check: oil, tire pressure, a warning light and a receipt that may have the wrong plate number.",
        when: "Early morning, before the heat rises and before the road gets busier.",
        where: "Riohacha, La Guajira, at a service station on the way out of town.",
        why: "Because revisar is the workhorse: check the oil, inspect a contract, review a case, check someone's blood pressure. It is not “revise” in the English sense of rewriting."
      },
      address: {
        form: "mixed",
        who: "Carolina opens with usted to the attendant, while the attendant uses polite usted back; a younger cousin in the car uses tú with Carolina.",
        why: "The service exchange needs usted, but the family aside naturally uses tú. The mixed register lets revisar appear in both practical and personal voices.",
        ifYouSwitch:
          "Using tú with the attendant would sound too familiar at the pump. Using usted with the cousin would be grammatically fine but oddly distant for the quick aside."
      },
      dialogue: [
        {
          speaker: "Carolina",
          target: "Buenos días. ¿Me revisa el aceite antes de salir a carretera?",
          translation: "Good morning. Could you check the oil for me before I head out on the road?",
          pronunciation: "BWEH-nos DEE-as. meh rreh-BEE-sah el ah-SAY-teh AHN-tes deh sah-LEER ah kah-rreh-TEH-rah",
          literal: "Good days. For-me you-check the oil before going out to road?",
          why: "“¿Me revisa el aceite?” is exactly the service-station use: inspect or check something for me. The me makes the request feel like a service, not a command."
        },
        {
          speaker: "Bombero",
          target: "Con gusto. También le reviso la presión de las llantas si va para tramo largo.",
          translation: "Gladly. I'll also check your tire pressure if you're going on a long stretch.",
          pronunciation: "kon GOOS-toh. tam-BYEN leh rreh-BEE-soh lah preh-SYON deh las YAHN-tas see bah PAH-rah TRAH-moh LAR-goh",
          literal: "With pleasure. Also for-you I-check the pressure of the tires if you go for stretch long.",
          why: "The same verb works for oil and pressure. In Colombia, a gas-station attendant may be called a bombero, but here the important word is reviso."
        },
        {
          speaker: "Primo",
          target: "Revísale también esa luz del tablero, que ayer se prendió dos veces.",
          translation: "Check that dashboard light for her too; it came on twice yesterday.",
          pronunciation: "rreh-BEE-sah-leh tam-BYEN EH-sah loos del tah-BLEH-roh, keh ah-YER seh pren-DYOH dos BEH-ses",
          literal: "Check-for-her also that light of-the dashboard, because yesterday it turned on two times.",
          why: "“Revísale” stacks the command and the indirect object: check it for her. The cousin is not being formal; he is making sure the right problem gets inspected."
        },
        {
          speaker: "Bombero",
          target: "La revisé por encima y no marca falla, pero conviene que la miren con escáner.",
          translation: "I checked it quickly and it isn't showing a fault, but it would be wise to have it looked at with a scanner.",
          pronunciation: "lah rreh-bee-SEH por en-SEE-mah ee no MAR-kah FAH-yah, PEH-roh kon-BYEH-neh keh lah MEE-ren kon es-KAH-ner",
          literal: "It I-checked over the top and not marks fault, but it-is-convenient that they look at it with scanner.",
          why: "“Revisé por encima” means a quick surface check. The subjunctive “que la miren” gives careful advice without pretending the pump has a full workshop."
        },
        {
          speaker: "Carolina",
          target: "Gracias. Antes de pagar, ¿puedo revisar el recibo? La placa salió mal la vez pasada.",
          translation: "Thanks. Before paying, can I check the receipt? The plate number came out wrong last time.",
          pronunciation: "GRAH-syahs. AHN-tes deh pah-GAR, PWEH-doh rreh-bee-SAR el rreh-SEE-boh. lah PLAH-kah sah-LYOH mal lah bes pah-SAH-dah",
          literal: "Thanks. Before paying, can I check the receipt? The plate came out wrong the time past.",
          why: "Revisar also works for documents. It means check over the receipt, not rewrite it. That false-friend boundary matters."
        },
        {
          speaker: "Bombero",
          target: "Claro, revíselo con calma; si algo quedó mal, lo corregimos antes de imprimir otro.",
          translation: "Of course, check it calmly; if anything came out wrong, we'll correct it before printing another one.",
          pronunciation: "KLAH-roh, rreh-BEE-seh-loh kon KAHL-mah; see AHL-goh keh-DOH mal, lo koh-rreh-HEE-mos AHN-tes deh eem-pree-MEER OH-troh",
          literal: "Clear, check-it with calm; if something remained wrong, it we-correct before printing another.",
          why: "The last line separates revisar from corregir: first inspect the receipt, then correct it if necessary. Rewriting is not what revisar means here."
        }
      ],
      vocabulary: [
        {
          term: "revisar",
          explanation:
            "To check, inspect or look over something carefully enough to catch a problem.",
          literal: "to review / check",
          useWhen:
            "Oil, tire pressure, a receipt, a contract, symptoms, a case file, a bag, a list or any detail that may be wrong.",
          avoidWhen:
            "You mean rewrite or edit a text in the English sense of revise. Spanish often needs corregir for correcting and repasar for studying.",
          register: "neutral",
          region: "Universal Spanish; extremely common in Colombia.",
          related: ["chequear", "mirar", "corregir", "repasar"],
          example: {
            target: "¿Me revisa el aceite?",
            translation: "Could you check the oil for me?"
          }
        },
        {
          term: "revisar el aceite",
          explanation:
            "To check the oil. A practical phrase for service stations and long drives.",
          literal: "to check the oil",
          useWhen:
            "You want someone to inspect the oil level or condition before the car keeps going.",
          avoidWhen:
            "You need a full mechanical diagnosis. This phrase asks for a check, not a complete repair.",
          register: "polite service",
          region: "General Colombian.",
          related: ["el aceite", "el motor", "la varilla", "el nivel"],
          example: {
            target: "Necesito revisar el aceite antes de salir.",
            translation: "I need to check the oil before leaving."
          }
        },
        {
          term: "le reviso la presión",
          explanation:
            "I'll check the pressure for you. Useful for tires in a service station and blood pressure in a clinic.",
          literal: "for-you I-check the pressure",
          useWhen:
            "Someone is offering a quick professional or practical check.",
          avoidWhen:
            "You are only glancing without measuring. Pressure implies a reading, not a casual look.",
          register: "polite service",
          region: "General Colombian.",
          related: ["la presión", "las llantas", "tomar la presión", "medir"],
          example: {
            target: "Le reviso la presión de las llantas.",
            translation: "I'll check your tire pressure."
          }
        },
        {
          term: "revisé por encima",
          explanation:
            "I checked it quickly or superficially. It admits the check was limited.",
          literal: "I reviewed over the top",
          useWhen:
            "You looked for obvious problems but did not do a deep inspection.",
          avoidWhen:
            "You need to claim a complete review. “Por encima” lowers the level of certainty.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["miré rápido", "a fondo", "por si acaso", "sin detalle"],
          example: {
            target: "La revisé por encima.",
            translation: "I checked it quickly."
          }
        },
        {
          term: "revisar un contrato",
          explanation:
            "To review or check a contract before signing. This is inspection, not rewriting.",
          literal: "to review a contract",
          useWhen:
            "You are looking for conditions, errors, dates, obligations or risks in a document.",
          avoidWhen:
            "You are editing the wording itself. Then corregir, ajustar or reescribir may be more exact.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["leer con cuidado", "corregir", "firmar", "la letra pequeña"],
          example: {
            target: "Revisé el contrato antes de firmar.",
            translation: "I reviewed the contract before signing."
          }
        },
        {
          term: "corregir",
          explanation:
            "To correct. This is the verb for fixing errors after revisar finds them.",
          literal: "to correct",
          useWhen:
            "A plate number, spelling mistake, clause, exercise or printed receipt needs correction.",
          avoidWhen:
            "You are only checking whether there is an error. That first step is revisar.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["revisar", "arreglar", "editar", "la corrección"],
          example: {
            target: "Si quedó mal, lo corregimos.",
            translation: "If it came out wrong, we'll correct it."
          }
        },
        {
          term: "repasar",
          explanation:
            "To review for study, or go over material again. This is not revisar a car or receipt.",
          literal: "to pass over again",
          useWhen:
            "Studying before an exam, reviewing vocabulary, or going over a lesson again.",
          avoidWhen:
            "You mean inspect a physical thing or document for problems. Then revisar is the workhorse.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["estudiar", "revisar", "practicar", "recordar"],
          example: {
            target: "Voy a repasar los apuntes esta noche.",
            translation: "I'm going to review my notes tonight."
          }
        }
      ],
      note:
        "Revisar is the most useful verb in this block because it belongs everywhere: the pump, the clinic, the contract, the receipt, the warning light. The false friend is English revise. Spanish revisar is checking or inspecting; if the check finds an error, then you corregir it. If you are studying, you usually repasar.",
      culture: [
        {
          label: "The small check before the long road",
          body:
            "On a hot road out of town, asking someone to revisar el aceite is ordinary caution, not fussiness. The phrase belongs to the everyday mechanics of travel: check now so the problem does not become bigger later."
        },
        {
          label: "Service Spanish uses indirect objects",
          body:
            "“Me revisa,” “le reviso,” “revísale” make the check a service done for someone. The grammar sounds small, but it changes the tone from a bare order to a practical favor."
        },
        {
          label: "Por encima protects the speaker",
          body:
            "Saying “lo revisé por encima” is honest professional caution. It means you checked what you could see, not that the issue is fully diagnosed. That distinction matters with cars, health and documents."
        },
        {
          label: "Review is not always revise",
          body:
            "English “revise” can mean rewrite or study again, which tempts learners to misuse revisar. Colombian Spanish keeps the jobs apart: revisar to check, corregir to correct, repasar to study again."
        }
      ],
      pitfalls: [
        {
          mistake: "Using revisar for rewriting a paragraph",
          whyItFails:
            "Revisar can mean check the paragraph, but the actual rewriting or correcting is corregir, ajustar or reescribir.",
          sayInstead: "Primero reviso el texto; después lo corrijo."
        },
        {
          mistake: "Using revisar for studying before an exam",
          whyItFails:
            "It may be understood, but repasar is the usual verb for going over material again to study.",
          sayInstead: "Voy a repasar para el examen."
        },
        {
          mistake: "Hearing “revisé por encima” as a full inspection",
          whyItFails:
            "Por encima means the check was quick or superficial. It lowers certainty, which is exactly why the speaker says it.",
          sayInstead: "Lo revisé por encima; falta mirarlo a fondo."
        },
        {
          mistake: "Forgetting who benefits in “me revisa”",
          whyItFails:
            "The me or le is not decorative. It shows the check is being done for someone, a common service-register pattern.",
          sayInstead: "¿Me revisa el aceite, por favor?"
        }
      ],
      variations: [
        {
          form: "¿Me revisa el aceite?",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "Asking for a practical check at a service station."
        },
        {
          form: "Le reviso la presión.",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "Offering to measure tire or blood pressure."
        },
        {
          form: "La revisé por encima.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Admitting the check was quick, not exhaustive."
        },
        {
          form: "Revisé el contrato antes de firmar.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Checking a document for terms or errors."
        },
        {
          form: "Si está mal, lo corregimos.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Separating checking from correcting."
        }
      ],
      prompt: "Carolina asks “¿Me revisa el aceite?” What is she asking for?",
      choices: [
        "A practical inspection of the oil before the road trip.",
        "A complete rewriting of a document about the car.",
        "A study session about vocabulary for an exam."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence best uses revisar at a service station?",
          choices: [
            "¿Me revisa el aceite antes de salir?",
            "¿Me repasa el aceite antes de salir?",
            "¿Me corrige el aceite antes de salir?"
          ],
          answer: 0,
          tests: "revisar for checking oil"
        },
        {
          prompt: "What does “la revisé por encima” imply?",
          choices: [
            "The check was quick and not fully exhaustive.",
            "The document was rewritten from beginning to end.",
            "The exam material was studied several times."
          ],
          answer: 0,
          tests: "por encima as superficial check"
        },
        {
          prompt: "Which verb fits after revisar finds an error?",
          choices: [
            "Corregir el número de placa.",
            "Repasar el motor con memoria.",
            "Descubrir la llanta por escrito."
          ],
          answer: 0,
          tests: "corregir after checking finds an error"
        },
        {
          prompt: "Which sentence uses revisar for a document correctly?",
          choices: [
            "Revisé para el examen toda la noche.",
            "Revisé el ensayo con palabras nuevas.",
            "Revisé el contrato antes de firmar."
          ],
          answer: 2,
          tests: "revisar as checking a contract, not studying or rewriting"
        }
      ]
    },
    en: {
      title: "Revisar el aceite antes de salir de Perth",
      situation:
        "Usted va a salir de Perth por carretera y para en una estación de servicio. El carro suena raro, el viaje es largo y necesita pedir en inglés que check the oil, review the receipt y correct a mistake, sin caer en el falso amigo revise.",
      setting: {
        who: "Caroline sale de Perth en carro y no quiere arriesgarse en una carretera larga y caliente. El empleado está acostumbrado a revisiones rápidas antes de que la gente salga de la ciudad.",
        what: "Una revisión práctica: aceite, presión de las llantas, una luz del tablero y un recibo que quizá tiene mal la placa.",
        when: "Temprano en la mañana, antes de que suba el calor y antes de que la carretera se llene.",
        where: "Perth, Australia, en una estación de servicio a la salida de la ciudad.",
        why: "Porque revisar no tiene una sola traducción. Puede ser check, inspect, review o look over; revise en inglés suele ser corregir un texto o repasar para un examen, según el país."
      },
      address: {
        form: "mixed",
        who: "Caroline, su primo y el empleado usan el mismo “you”; el tono de servicio viene de “could you” y “please.”",
        why: "El inglés no tiene usted de estación de servicio. La cortesía aparece en la forma de pedir y en el orden de la frase.",
        ifYouSwitch:
          "No hay otro pronombre que escoger. Si Caroline dice “mate” sin naturalidad o vuelve todo demasiado formal, suena menos auténtica que con una petición clara."
      },
      dialogue: [
        {
          speaker: "Caroline",
          target: "Good morning. Could you check the oil before I head out on the highway?",
          translation: "Buenos días. ¿Me revisa el aceite antes de salir a carretera?",
          pronunciation: "gud MOR-ning. kud yu chek di oil bi-FOR ai jed aut on da JAI-wei",
          literal: "Buenos días. ¿Podría usted revisar el aceite antes de que salga a la autopista?",
          why: "Para el aceite, el verbo natural es “check.” “Review the oil” suena como si el aceite fuera un documento."
        },
        {
          speaker: "Attendant",
          target: "Sure. I'll also check the tire pressure if you're heading out far.",
          translation: "Con gusto. También le reviso la presión de las llantas si va para tramo largo.",
          pronunciation: "shur. ail OL-so chek da TAI-er PRE-shur if yor JE-ding aut far",
          literal: "Claro. También revisaré la presión de las llantas si usted sale lejos.",
          why: "El mismo “check” cubre aceite y presión. En inglés de servicio, la precisión está en el objeto: check the oil, check the pressure."
        },
        {
          speaker: "Cousin",
          target: "Could you check that dashboard light too? It came on twice yesterday.",
          translation: "Revísale también esa luz del tablero, que ayer se prendió dos veces.",
          pronunciation: "kud yu chek dat DASH-bord lait tu. it keim on twais YES-ter-dei",
          literal: "¿Podría revisar esa luz del tablero también? Se encendió dos veces ayer.",
          why: "“Could you check…?” suaviza el pedido sin necesitar un pronombre distinto. La luz se revisa; no se “revises.”"
        },
        {
          speaker: "Attendant",
          target: "I checked it quickly, and it isn't showing a fault, but you should have it inspected with a scanner.",
          translation: "La revisé por encima y no marca falla, pero conviene que la miren con escáner.",
          pronunciation: "ai chekt it KWIK-li, and it IZ-ent SHO-ing a folt, bot yu shud jav it in-SPEK-ted uid a SKA-ner",
          literal: "La revisé rápidamente y no muestra falla, pero debería hacerla inspeccionar con escáner.",
          why: "“Checked it quickly” traduce “revisé por encima.” Para una mirada más técnica, “have it inspected” sube el nivel de formalidad y profundidad."
        },
        {
          speaker: "Caroline",
          target: "Thanks. Before I pay, can I review the receipt? The plate number was wrong last time.",
          translation: "Gracias. Antes de pagar, ¿puedo revisar el recibo? La placa salió mal la vez pasada.",
          pronunciation: "thanks. bi-FOR ai pei, kan ai ri-VIU da ri-SIT. da pleit NOM-ber woz rong last taim",
          literal: "Gracias. Antes de pagar, ¿puedo revisar el recibo? El número de placa estaba mal la vez pasada.",
          why: "Con documentos, “review the receipt” o “check the receipt” funcionan. Review aquí es mirar con cuidado, no necesariamente cambiar el texto."
        },
        {
          speaker: "Attendant",
          target: "Of course, check it carefully; if something is wrong, we'll correct it before printing another one.",
          translation: "Claro, revíselo con calma; si algo quedó mal, lo corregimos antes de imprimir otro.",
          pronunciation: "ov kors, chek it KER-fu-li; if SOM-thing iz rong, wil ko-REKT it bi-FOR PRIN-ting a-NA-der uan",
          literal: "Por supuesto, revíselo cuidadosamente; si algo está mal, lo corregiremos antes de imprimir otro.",
          why: "La última línea separa check de correct. “Revise” no es el verbo para mirar el recibo en esta escena; “correct” es lo que pasa si aparece el error."
        }
      ],
      vocabulary: [
        {
          term: "check",
          explanation:
            "Revisar en el sentido más práctico: mirar si algo está bien, si falta algo o si hay un problema.",
          literal: "revisar",
          useWhen:
            "Aceite, presión, recibos, datos, horarios, luces del tablero o cualquier detalle que pueda fallar.",
          avoidWhen:
            "Necesita una revisión formal de un documento largo. Entonces “review” puede sonar mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["review", "inspect", "look over", "correct"],
          example: {
            target: "Could you check the oil?",
            translation: "¿Me revisa el aceite?"
          }
        },
        {
          term: "check the oil",
          explanation:
            "Revisar el aceite. La frase práctica de estación de servicio.",
          literal: "revisar el aceite",
          useWhen:
            "Quiere que alguien mire el nivel o estado del aceite antes de seguir en carretera.",
          avoidWhen:
            "Está pidiendo una reparación completa del motor. Check no promete arreglar.",
          register: "cortés de servicio",
          region: "Inglés universal.",
          related: ["oil level", "engine", "dipstick", "service station"],
          example: {
            target: "I need to check the oil before leaving.",
            translation: "Necesito revisar el aceite antes de salir."
          }
        },
        {
          term: "check the pressure",
          explanation:
            "Revisar la presión. Sirve para llantas y también para presión arterial, según contexto.",
          literal: "revisar la presión",
          useWhen:
            "Alguien mide una presión real con un instrumento.",
          avoidWhen:
            "Sólo mira sin medir. Pressure implica una lectura.",
          register: "cortés de servicio",
          region: "Inglés universal.",
          related: ["tire pressure", "blood pressure", "measure", "reading"],
          example: {
            target: "I'll check the tire pressure.",
            translation: "Le reviso la presión de las llantas."
          }
        },
        {
          term: "check it quickly",
          explanation:
            "Revisarlo por encima. Admite que la revisión fue rápida y limitada.",
          literal: "revisarlo rápidamente",
          useWhen:
            "Miró lo obvio pero no hizo diagnóstico profundo.",
          avoidWhen:
            "Necesita afirmar una revisión completa. Quickly baja la certeza.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["look over quickly", "inspect", "thoroughly", "at a glance"],
          example: {
            target: "I checked it quickly.",
            translation: "La revisé por encima."
          }
        },
        {
          term: "review a contract",
          explanation:
            "Revisar un contrato o documento. Es leerlo con cuidado para detectar condiciones, errores o riesgos.",
          literal: "revisar un contrato",
          useWhen:
            "Mira un documento antes de firmar o tomar una decisión.",
          avoidWhen:
            "Quiere decir reescribir el texto. Review puede encontrar problemas; revise o edit los cambia.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["look over", "check", "read carefully", "terms"],
          example: {
            target: "I reviewed the contract before signing.",
            translation: "Revisé el contrato antes de firmar."
          }
        },
        {
          term: "correct",
          explanation:
            "Corregir. Es lo que se hace después de encontrar un error.",
          literal: "corregir",
          useWhen:
            "Un número de placa, una falta de ortografía, una cláusula o un recibo impreso tiene un error.",
          avoidWhen:
            "Sólo está verificando si el error existe. Ese primer paso es check o review.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["fix", "edit", "review", "correction"],
          example: {
            target: "We'll correct it if it's wrong.",
            translation: "Lo corregimos si está mal."
          }
        },
        {
          term: "revise",
          explanation:
            "Revisar en el sentido de modificar un texto; en inglés británico también repasar para un examen. No traduce todos los revisar.",
          literal: "corregir / repasar",
          useWhen:
            "Va a cambiar un escrito, o en inglés británico, estudiar de nuevo para un examen.",
          avoidWhen:
            "Aceite, presión, recibos sencillos o luces del tablero. Ahí use check, inspect o review.",
          register: "neutro",
          region: "Inglés universal; el uso de estudiar es especialmente británico.",
          related: ["edit", "rewrite", "study", "review"],
          example: {
            target: "I revised the paragraph after the teacher's comments.",
            translation: "Corregí el párrafo después de los comentarios del profesor."
          }
        }
      ],
      note:
        "Revisar se reparte en inglés entre check, inspect, review y a veces look over. El falso amigo es revise: sirve para cambiar un texto, y en inglés británico para estudiar antes de un examen, pero no para el aceite del carro ni para la presión de una llanta. En esta escena, check hace casi todo el trabajo práctico.",
      culture: [
        {
          label: "Check es la herramienta diaria",
          body:
            "En inglés cotidiano, check cubre una enorme cantidad de revisar: check the oil, check the time, check the receipt, check the pressure. Es corto, práctico y nada formal."
        },
        {
          label: "Inspect suena más técnico",
          body:
            "Cuando el problema exige equipo o autoridad, inspect sube el registro. “Have it inspected with a scanner” no es lo mismo que una mirada rápida en la estación de servicio."
        },
        {
          label: "Review pertenece a documentos y casos",
          body:
            "Review funciona muy bien con receipts, contracts, applications and cases. No implica necesariamente corregir; primero se mira. Si hay error, then you correct it."
        },
        {
          label: "Revise es la trampa",
          body:
            "Muchos hispanohablantes traducen revisar como revise por reflejo. En una estación de servicio, esa palabra falla. “Could you revise the oil?” suena como si el aceite fuera un ensayo."
        }
      ],
      pitfalls: [
        {
          mistake: "“Could you revise the oil?”",
          whyItFails:
            "Revise no se usa para inspeccionar aceite. Suena como cambiar un texto, no revisar un carro.",
          sayInstead: "Could you check the oil?"
        },
        {
          mistake: "“I revised the receipt and the plate is wrong.”",
          whyItFails:
            "Para mirar un recibo, “checked” o “reviewed” suena natural. Revise implicaría modificarlo.",
          sayInstead: "I checked the receipt and the plate number is wrong."
        },
        {
          mistake: "“I checked for the exam all night.”",
          whyItFails:
            "Para repasar antes de un examen, el inglés usa “study” o, en inglés británico, “revise.” Check no transmite estudiar.",
          sayInstead: "I studied for the exam all night."
        },
        {
          mistake: "“I checked it deeply with a scanner.”",
          whyItFails:
            "Se entiende, pero para una revisión técnica completa “inspect” o “have it inspected” suena más natural.",
          sayInstead: "I had it inspected with a scanner."
        }
      ],
      variations: [
        {
          form: "Could you check the oil?",
          register: "cortés de servicio",
          region: "Inglés universal",
          whenToUse: "Pedir una revisión práctica en una estación de servicio."
        },
        {
          form: "I'll check the pressure.",
          register: "cortés de servicio",
          region: "Inglés universal",
          whenToUse: "Ofrecer medir presión de llantas o presión arterial."
        },
        {
          form: "I checked it quickly.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Admitir que la revisión no fue exhaustiva."
        },
        {
          form: "I reviewed the contract before signing.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Mirar un documento con cuidado antes de decidir."
        },
        {
          form: "If it's wrong, we'll correct it.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Separar revisar de corregir."
        }
      ],
      prompt: "Caroline asks “Could you check the oil?” ¿Qué está pidiendo?",
      choices: [
        "Una inspección práctica del aceite antes del viaje por carretera.",
        "Una reescritura completa de un documento sobre el carro.",
        "Una sesión de estudio de vocabulario para un examen."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase sirve en una estación de servicio?",
          choices: [
            "Could you check the oil before I leave?",
            "Could you revise the oil before I leave?",
            "Could you study the oil before I leave?"
          ],
          answer: 0,
          tests: "check the oil, not revise"
        },
        {
          prompt: "¿Qué implica “I checked it quickly”?",
          choices: [
            "La revisión fue rápida y no completamente exhaustiva.",
            "El documento fue reescrito de principio a fin.",
            "El material de examen fue estudiado varias veces."
          ],
          answer: 0,
          tests: "checked quickly as limited review"
        },
        {
          prompt: "¿Qué verbo encaja después de encontrar un error?",
          choices: [
            "Correct the plate number.",
            "Review the engine by memory.",
            "Discover the tire in writing."
          ],
          answer: 0,
          tests: "correct after checking finds an error"
        },
        {
          prompt: "¿Cuál frase usa review para un documento correctamente?",
          choices: [
            "I reviewed for the exam all night.",
            "I reviewed the oil with new words.",
            "I reviewed the contract before signing."
          ],
          answer: 2,
          tests: "review a document, not oil or studying"
        }
      ]
    }
  }
  ,
  {
    id: "connecting-a-missing-order-in-armenia",
    level: "Extending · Figuring things out",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar", "reading"],
    domain: "work-and-employment",
    register: "neutral",
    structure: "discourse-connectors",
    review: "pending",
    es: {
      title: "Connecting the clues in Armenia",
      situation:
        "You are in Armenia at a small coffee roastery where an export sample box has reached the wrong client. Marta, the operations coordinator, and Alex, a visiting trainee, reconstruct what happened from the invoice, the route sheet and the packing photos. The lesson is not about memorizing fancy words. It is about using connectors to show the shape of your reasoning while you figure out a real problem.",
      setting: {
        who: "Marta coordinates shipments for a cooperative roastery and has to explain mistakes without blaming the first person she sees. Alex is an advanced learner helping compare the papers and learning how professional Colombian Spanish links evidence, contrast and conclusion.",
        what: "A missing order investigation: the box label, route sheet, invoice and photos disagree, so the speakers have to add evidence, contrast it, name causes, draw consequences and summarize the next step.",
        when: "Late afternoon, after the delivery route has closed and before Marta must email the client with a clear explanation.",
        where: "Armenia, Quindío, in the dispatch room of a small coffee roastery.",
        why: "B2 writing and speaking rubrics judge cohesion explicitly. Without connectors, even accurate sentences read like a list. This scene makes connectors do real diagnostic work, not decorative work."
      },
      address: {
        form: "usted",
        who: "Marta and Alex use usted because they are working in a professional setting and Alex is a trainee, not a close friend.",
        why: "Usted keeps the reasoning calm and procedural. The point is to diagnose the shipment, not to sound chatty or accuse anyone.",
        ifYouSwitch:
          "Tú would be possible if they worked together every day, but here it would make the exchange sound too familiar for a mistake involving a client. The connectors still work; the register around them changes."
      },
      dialogue: [
        {
          speaker: "Marta",
          target: "En primer lugar, revisemos la orden; además, comparemos la etiqueta con la foto del empaque.",
          translation: "First, let's review the order; also, let's compare the label with the packing photo.",
          pronunciation: "en pree-MER loo-GAR, rreh-bee-SEH-mos lah OR-den; ah-deh-MAHS, kom-pah-REH-mos lah eh-tee-KEH-tah kon lah FOH-toh del em-PAH-keh",
          literal: "In first place, let-us-review the order; besides, let-us-compare the label with the photo of-the packing.",
          why: "“En primer lugar” sequences the investigation and normally takes a comma after it. “Además” adds a second action. The semicolon before “además” prevents a comma splice because both sides could stand as sentences."
        },
        {
          speaker: "Alex",
          target: "Sin embargo, la factura dice cliente B; en cambio, la guía de ruta dice cliente A.",
          translation: "However, the invoice says client B; on the other hand, the route sheet says client A.",
          pronunciation: "seen em-BAR-goh, lah fak-TOO-rah DEE-seh KLYEN-teh beh; en KAM-byo, lah GEE-ah deh ROO-tah DEE-seh KLYEN-teh ah",
          literal: "However, the invoice says client B; in change, the guide of route says client A.",
          why: "This is real contrast. “Sin embargo” pushes against the previous expectation, while “en cambio” sets two pieces of evidence side by side. Both sound normal in professional speech and writing."
        },
        {
          speaker: "Marta",
          target: "Debido a que cambiaron el turno, el auxiliar imprimió la guía vieja; por lo tanto, el paquete salió con datos cruzados.",
          translation: "Because they changed the shift, the assistant printed the old route sheet; therefore, the package went out with crossed data.",
          pronunciation: "deh-BEE-doh ah keh kam-BYAH-ron el TOOR-noh, el owk-see-LYAR eem-pree-MYOH lah GEE-ah BYEH-hah; por loh TAN-toh, el pah-KEH-teh sah-LYOH kon DAH-tos kroo-SAH-dos",
          literal: "Due to that they-changed the shift, the assistant printed the old guide; therefore, the package left with crossed data.",
          why: "“Debido a que” gives the cause and is more written than “porque.” “Por lo tanto” gives the consequence. Notice the punctuation again: full stop or semicolon before a result connector, then a comma after it."
        },
        {
          speaker: "Alex",
          target: "No obstante, la caja sí llegó a tiempo; aun así, el cliente recibió la muestra equivocada.",
          translation: "Nevertheless, the box did arrive on time; even so, the client received the wrong sample.",
          pronunciation: "noh ohb-STAN-teh, lah KAH-hah see yeh-GOH ah TYEM-poh; own ah-SEE, el KLYEN-teh rreh-see-BYOH lah MWEHS-trah eh-kee-boh-KAH-dah",
          literal: "Nevertheless, the box yes arrived on time; even so, the client received the sample mistaken.",
          why: "“No obstante” is formal and belongs especially to careful writing; “aun así” is softer and works in speech. Together they show concession: one good fact does not erase the problem."
        },
        {
          speaker: "Marta",
          target: "Es decir, no falló el transporte, sino la versión del documento; de ahí que tengamos que corregir el proceso.",
          translation: "That is to say, transport did not fail, but the document version did; that is why we have to correct the process.",
          pronunciation: "es deh-SEER, noh fah-YOH el trans-POR-teh, SEE-noh lah ber-SYON del doh-koo-MEN-toh; deh ah-EE keh ten-GAH-mos keh kor-rreh-HEER el proh-SEH-soh",
          literal: "That is to say, not failed the transport, but the version of-the document; from there that we-have to correct the process.",
          why: "“Es decir” reformulates the diagnosis. “De ahí que” introduces a consequence and takes the subjunctive, so Marta says “tengamos,” not “tenemos.” This is exactly the kind of connector B2 exams reward."
        },
        {
          speaker: "Alex",
          target: "En resumen, avisamos al cliente hoy; por último, dejamos una nota para que no se repita.",
          translation: "In summary, we notify the client today; finally, we leave a note so it does not happen again.",
          pronunciation: "en rreh-soo-MEN, ah-bee-SAH-mos al KLYEN-teh oy; por OOL-tee-moh, deh-HAH-mos OO-nah NOH-tah PAH-rah keh noh seh rreh-PEE-tah",
          literal: "In summary, we notify the client today; for last, we leave a note so that it not repeats itself.",
          why: "“En resumen” closes the reasoning, and “por último” marks the final practical step. They are not decoration; they tell the listener what stage the explanation has reached."
        }
      ],
      vocabulary: [
        {
          term: "además / asimismo / cabe añadir",
          explanation:
            "These are adding connectors. “Además” is the safest all-purpose choice for adding another point. “Asimismo” and “cabe añadir” are written and more formal; they are useful in essays and reports, but they can sound pompous in ordinary speech.",
          literal: "besides / likewise / it is fitting to add",
          useWhen:
            "You need to add evidence or a second reason: first the invoice, then the photo, then another fact that supports the same line of reasoning.",
          avoidWhen:
            "You are chatting casually. In spoken Colombian Spanish, “también,” “y además,” or even “pues” may sound more natural than “asimismo.”",
          register: "from neutral to formal written",
          region: "Universal Spanish; in Colombia, “además” is normal everywhere, while “asimismo” and “cabe añadir” belong to careful writing.",
          related: ["también", "por otra parte", "cabe señalar", "igualmente"],
          example: {
            target: "Además, comparemos la etiqueta con la foto.",
            translation: "Also, let's compare the label with the photo."
          }
        },
        {
          term: "en primer lugar / por otra parte / por último",
          explanation:
            "These organize sequence. “En primer lugar” opens a planned explanation, “por otra parte” adds a different angle, and “por último” signals the final point. They are especially useful when you need the reader to follow the path of your thinking.",
          literal: "in first place / on another part / for last",
          useWhen:
            "You are presenting steps, reasons or options in order, especially in a report, presentation or exam answer.",
          avoidWhen:
            "You only have one point. A sequencing connector promises structure, so using it for a single loose sentence feels artificial.",
          register: "neutral to formal",
          region: "Universal Spanish; clear and appropriate in Colombian academic and workplace writing.",
          related: ["primero", "luego", "finalmente", "por un lado"],
          example: {
            target: "En primer lugar, revisemos la orden.",
            translation: "First, let's review the order."
          }
        },
        {
          term: "sin embargo / no obstante / en cambio / ahora bien",
          explanation:
            "These mark contrast, but not all with the same flavor. “Sin embargo” is the workhorse for however. “No obstante” is more formal. “En cambio” contrasts two items side by side. “Ahora bien” shifts to a qualification: yes, that is true, now here is the important limit.",
          literal: "without embargo / not withstanding / in change / now well",
          useWhen:
            "Evidence points one way and another fact pushes back, or two options need to be separated cleanly.",
          avoidWhen:
            "You mean a simple “but” in relaxed speech. “Pero” or “aunque” may sound more human than a row of formal connectors.",
          register: "neutral to formal written",
          region: "Universal Spanish; in Colombia, “sin embargo” works in speech, while “no obstante” is mostly written.",
          related: ["pero", "por el contrario", "aun así", "mientras que"],
          example: {
            target: "Sin embargo, la factura dice cliente B.",
            translation: "However, the invoice says client B."
          }
        },
        {
          term: "debido a que / ya que / puesto que / dado que / a causa de",
          explanation:
            "These introduce cause. “Ya que,” “puesto que,” and “dado que” all mean because or given that, with a more reasoned tone than plain “porque.” “Debido a que” is common in reports. “A causa de” takes a noun, as in “a causa del cambio de turno.”",
          literal: "due to that / since / given that / because of",
          useWhen:
            "You need to identify why something happened, especially when the cause is part of an investigation or explanation.",
          avoidWhen:
            "You want quick spoken Colombian reasoning. People often say “porque,” “es que,” or “como” instead, and those may fit better in conversation.",
          register: "mostly neutral to formal",
          region: "Universal Spanish; “es que” is a spoken Colombian workhorse but not an exam-essay connector.",
          related: ["porque", "como", "la causa", "por motivo de"],
          example: {
            target: "Debido a que cambiaron el turno, imprimieron la guía vieja.",
            translation: "Because they changed the shift, they printed the old route sheet."
          }
        },
        {
          term: "por lo tanto / en consecuencia / de ahí que / así que / por eso",
          explanation:
            "These introduce consequence. “Por lo tanto” is the reliable therefore. “En consecuencia” is written and formal. “Así que” and “por eso” are natural in speech. “De ahí que” is advanced and takes the subjunctive: “de ahí que tengamos,” not “tenemos.”",
          literal: "for the so much / in consequence / from there that / so that / for that",
          useWhen:
            "A cause has been established and you now need to state the result, decision or required action.",
          avoidWhen:
            "You have not actually shown the cause. A consequence connector claims logic, so it sounds false if the previous sentence has not earned it.",
          register: "from spoken to formal written",
          region: "Universal Spanish; “así que” and “por eso” are very normal in Colombian speech.",
          related: ["entonces", "por consiguiente", "resultado", "de modo que"],
          example: {
            target: "Por lo tanto, el paquete salió con datos cruzados.",
            translation: "Therefore, the package went out with crossed data."
          }
        },
        {
          term: "es decir / o sea / en otras palabras / por ejemplo / tal como",
          explanation:
            "These reformulate or exemplify. “Es decir” and “en otras palabras” clarify the same idea more precisely. “O sea” is the spoken Colombian workhorse, excellent in conversation and too casual for most essays. “Por ejemplo” and “tal como” introduce examples.",
          literal: "that is to say / or be / in other words / for example / such as",
          useWhen:
            "Your listener may not see the connection yet, so you restate the diagnosis or give a concrete example.",
          avoidWhen:
            "You are using “o sea” repeatedly in formal writing. In an exam essay, choose “es decir” or “en otras palabras.”",
          register: "spoken informal to formal neutral",
          region: "Universal Spanish; “o sea” is extremely common in Colombian speech.",
          related: ["mejor dicho", "dicho de otro modo", "como", "incluido"],
          example: {
            target: "Es decir, no falló el transporte.",
            translation: "That is to say, transport did not fail."
          }
        },
        {
          term: "en resumen / en conclusión / en definitiva / a fin de cuentas",
          explanation:
            "These close or summarize. “En resumen” condenses what has been said. “En conclusión” suits academic and report endings. “En definitiva” gives a firm final judgment. “A fin de cuentas” is more conversational, like when all is said and done.",
          literal: "in summary / in conclusion / in definitive / at end of accounts",
          useWhen:
            "You need to gather the reasoning into a final diagnosis, recommendation or decision.",
          avoidWhen:
            "The explanation is not actually finished. A closing connector tells the reader to expect a final synthesis, not a new branch of evidence.",
          register: "neutral to formal, with one conversational option",
          region: "Universal Spanish; “a fin de cuentas” is widely understood and slightly warmer than “en conclusión.”",
          related: ["para cerrar", "en suma", "total", "finalmente"],
          example: {
            target: "En resumen, avisamos al cliente hoy.",
            translation: "In summary, we notify the client today."
          }
        },
        {
          term: "aunque / a pesar de que / si bien",
          explanation:
            "These concede. They admit one fact while showing that it does not cancel the main point. “Aunque” is flexible and common. “A pesar de que” is heavier. “Si bien” is formal and very useful in written argument.",
          literal: "although / in spite of that / if well",
          useWhen:
            "One part of the evidence is true, but your conclusion still stands: the box arrived on time, although the sample was wrong.",
          avoidWhen:
            "You mean direct opposition between two alternatives. Then “en cambio” or “por el contrario” may be clearer.",
          register: "neutral to formal written",
          region: "Universal Spanish; “aunque” is the everyday Colombian option.",
          related: ["aun así", "de todas maneras", "pese a", "igual"],
          example: {
            target: "Aunque la caja llegó a tiempo, la muestra era equivocada.",
            translation: "Although the box arrived on time, the sample was wrong."
          }
        }
      ],
      note:
        "Formal connectors are not decoration; they are the grammar of visible reasoning. For B2, organize them by job. To add or sequence, use “además,” “asimismo,” “por otra parte,” “en primer lugar,” “por último,” and “cabe añadir.” To contrast, use “sin embargo,” “no obstante,” “en cambio,” “ahora bien,” “por el contrario,” and “aun así.” To give cause, use “debido a que,” “ya que,” “puesto que,” “dado que,” and “a causa de.” To show consequence, use “por lo tanto,” “en consecuencia,” “de ahí que” with the subjunctive, “así que,” and “por eso.” To reformulate, use “es decir,” “o sea,” “en otras palabras,” “por ejemplo,” and “tal como.” To conclude, use “en resumen,” “en conclusión,” “en definitiva,” and “a fin de cuentas.” The register split is real: “o sea,” “entonces,” “pues,” “es que,” and “de todas maneras” are spoken Colombian workhorses; “no obstante,” “asimismo,” “cabe señalar,” and “en consecuencia” belong to writing. Punctuation is part of the skill. Most connectors take a comma after them, and many need a full stop or semicolon before them. Do not join two complete sentences with only a comma before “sin embargo” or “por lo tanto.”",
      culture: [
        {
          label: "Cohesion is graded, not optional",
          body:
            "B2 and C1 rubrics do not only ask whether your verbs are correct. They ask whether the argument holds together. A learner can produce accurate sentences and still lose marks if every sentence arrives separately. Connectors make the relationship visible: addition, contrast, cause, consequence, example, concession and conclusion. That is why this thin slot matters so much."
        },
        {
          label: "Colombian speech has its own workhorses",
          body:
            "In a real Colombian conversation, people reason with “entonces,” “pues,” “es que,” “o sea,” and “de todas maneras” all the time. They are not bad Spanish. They are spoken Spanish. The problem is moving them unchanged into a formal essay, where “o sea” may look careless and “pues” may sound like filler rather than structure."
        },
        {
          label: "Writing connectors can sound pompous out loud",
          body:
            "The opposite mistake is also common. Saying “asimismo” or “no obstante” in every spoken turn can make a simple explanation sound like a legal memo. In a meeting, one or two careful connectors are fine; in relaxed speech, mix them with “pero,” “también,” “por eso,” and “entonces.” Register is part of meaning."
        },
        {
          label: "The comma splice is a real exam problem",
          body:
            "Many connectors are not little commas with words attached. If both sides are complete sentences, write a period or semicolon before “sin embargo,” “por lo tanto,” “en consecuencia,” or “no obstante,” then put a comma after the connector. “La guía era vieja; por lo tanto, el paquete salió mal” is clean. A comma alone before “por lo tanto” is weak punctuation."
        }
      ],
      pitfalls: [
        {
          mistake: "Writing two full sentences with only a comma before “sin embargo”",
          whyItFails:
            "“Sin embargo” is a sentence connector, not a magic patch for a comma splice. If the clause before it can stand alone, use a full stop or semicolon before the connector, then a comma after it.",
          sayInstead: "La caja llegó a tiempo; sin embargo, la muestra era equivocada."
        },
        {
          mistake: "Using “o sea” throughout an exam essay",
          whyItFails:
            "“O sea” is natural spoken Colombian Spanish, but in formal writing it often reads like filler. For a written reformulation, “es decir” or “en otras palabras” carries the same job with the right register.",
          sayInstead: "Es decir, el transporte no falló."
        },
        {
          mistake: "Forgetting the subjunctive after “de ahí que”",
          whyItFails:
            "“De ahí que” introduces a consequence with subjunctive. The learner instinct is to say “de ahí que tenemos,” but standard formal Spanish wants “de ahí que tengamos.”",
          sayInstead: "De ahí que tengamos que corregir el proceso."
        },
        {
          mistake: "Choosing a formal connector for a casual repair conversation",
          whyItFails:
            "“No obstante” and “asimismo” are correct, but too many of them in casual speech sound stiff. If you are reasoning aloud with a friend, “pero,” “también,” “entonces,” and “por eso” usually fit better.",
          sayInstead: "La caja llegó, pero la muestra salió mal; por eso llamamos hoy."
        }
      ],
      variations: [
        {
          form: "Además, comparemos la etiqueta con la foto.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Adding another piece of evidence or another step in the same line of reasoning."
        },
        {
          form: "Sin embargo, la factura dice otra cosa.",
          register: "neutral to formal",
          region: "Universal Spanish",
          whenToUse: "Introducing a fact that contrasts with what the previous sentence led you to expect."
        },
        {
          form: "Por lo tanto, el paquete salió con datos cruzados.",
          register: "neutral to formal",
          region: "Universal Spanish",
          whenToUse: "Naming the logical consequence after you have established a cause."
        },
        {
          form: "De ahí que tengamos que corregir el proceso.",
          register: "formal written",
          region: "Universal Spanish",
          whenToUse: "Drawing an advanced consequence with “de ahí que” plus the subjunctive."
        },
        {
          form: "O sea, la guía vieja fue el problema.",
          register: "spoken informal",
          region: "General Colombian",
          whenToUse: "Reformulating aloud in everyday Colombian speech, not in a formal essay."
        }
      ],
      prompt: "Marta writes “La guía era vieja; por lo tanto, el paquete salió mal.” What is “por lo tanto” doing?",
      choices: [
        "It adds a second example with the same weight as the first detail.",
        "It marks the consequence that follows from the old route sheet.",
        "It introduces a casual spoken filler with no logical function."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence handles punctuation around a contrast connector best?",
          choices: [
            "La caja llegó a tiempo; sin embargo, la muestra era equivocada.",
            "La caja llegó a tiempo, sin embargo la muestra era equivocada.",
            "La caja llegó a tiempo sin embargo, la muestra era equivocada."
          ],
          answer: 0,
          tests: "A full stop or semicolon before “sin embargo,” then a comma after it."
        },
        {
          prompt: "Which version uses “de ahí que” correctly?",
          choices: [
            "De ahí que tenemos que corregir el proceso antes del lunes.",
            "De ahí que corregimos el proceso antes del lunes.",
            "De ahí que tengamos que corregir el proceso antes del lunes."
          ],
          answer: 2,
          tests: "“De ahí que” takes the subjunctive: “tengamos.”"
        },
        {
          prompt: "Which reformulation fits formal writing better than “o sea”?",
          choices: [
            "Pues, la guía vieja fue el problema principal del envío.",
            "Es decir, la guía vieja fue el problema principal del envío.",
            "Es que la guía vieja fue el problema principal del envío."
          ],
          answer: 1,
          tests: "“Es decir” is the written reformulation; “o sea,” “pues,” and “es que” are spoken."
        }
      ]
    },
    en: {
      title: "Conectar las pistas en Lubbock",
      situation:
        "Usted está en Lubbock, Texas, en una imprenta pequeña que prepara muestras para una feria de café. Una caja llegó al cliente equivocado y Nadia, la coordinadora, reconstruye el error con Samuel, un practicante colombiano. El objetivo es el mismo que en español: usar conectores para que el razonamiento se entienda y para no sonar ni demasiado informal en un texto ni demasiado pomposo en una conversación.",
      setting: {
        who: "Nadia coordina envíos para una imprenta texana y necesita explicar el error sin culpar a nadie antes de revisar la evidencia. Samuel es colombiano, habla inglés avanzado y está aprendiendo a escoger conectores con el registro correcto.",
        what: "Una investigación de despacho: la etiqueta de la caja, la orden, la factura y la foto de empaque no coinciden, así que los hablantes tienen que añadir evidencia, contrastarla, nombrar causas, sacar consecuencias y resumir el plan.",
        when: "Al final de la tarde, después de cerrar la ruta de entregas y antes de escribirle al cliente.",
        where: "Lubbock, Texas, en el área de despacho de una imprenta pequeña.",
        why: "Los exámenes y correos profesionales en inglés califican la cohesión. Para un hispanohablante, el peligro doble es usar conectores demasiado formales en charla casual o usar puntuación española donde el inglés exige punto o punto y coma."
      },
      address: {
        form: "mixed",
        who: "Nadia y Samuel usan el mismo “you” del inglés en un contexto profesional. La distancia se marca con tono, claridad y frases completas, no con otro pronombre.",
        why: "El inglés no distingue tú de usted. En esta escena, la cortesía sale de organizar bien la explicación y evitar acusaciones rápidas.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Si Samuel quiere sonar más formal, cambia el registro de los conectores y de las frases, no el “you.”"
      },
      dialogue: [
        {
          speaker: "Nadia",
          target: "First, let's review the order; in addition, let's compare the label with the packing photo.",
          translation: "En primer lugar, revisemos la orden; además, comparemos la etiqueta con la foto del empaque.",
          pronunciation: "ferst, lets ri-VIU di OR-der; in a-DI-shon, lets kom-PER da LEI-bel wid da PA-king FO-tou",
          literal: "Primero, revisemos la orden; en adición, comparemos la etiqueta con la foto de empaque.",
          why: "“First” organiza el primer paso. “In addition” añade otro dato con registro neutro. Si las dos partes son oraciones completas, el punto y coma antes del conector es más seguro que una coma."
        },
        {
          speaker: "Samuel",
          target: "However, the invoice says client B; on the other hand, the route sheet says client A.",
          translation: "Sin embargo, la factura dice cliente B; en cambio, la guía de ruta dice cliente A.",
          pronunciation: "jau-EV-er, di IN-voice sez KLAI-ent bi; on di O-der jand, da rut shit sez KLAI-ent ei",
          literal: "Sin embargo, la factura dice cliente B; en la otra mano, la hoja de ruta dice cliente A.",
          why: "“However” contradice la expectativa anterior y lleva coma cuando abre la oración. “On the other hand” compara dos lados de la evidencia. No basta con poner una coma entre dos oraciones independientes."
        },
        {
          speaker: "Nadia",
          target: "Given that the shift changed, the assistant printed the old sheet; therefore, the box left with crossed data.",
          translation: "Dado que cambió el turno, el auxiliar imprimió la guía vieja; por lo tanto, la caja salió con datos cruzados.",
          pronunciation: "GI-ven dat da shift cheinjd, di a-SIS-tant PRIN-ted di old shit; DER-for, da boks left wid krost DEI-ta",
          literal: "Dado que el turno cambió, el asistente imprimió la hoja vieja; por eso, la caja salió con datos cruzados.",
          why: "“Given that” presenta la causa con tono razonado. “Therefore” marca la consecuencia. En inglés formal, “therefore” necesita punto o punto y coma antes si une dos oraciones independientes, y coma después cuando inicia la segunda."
        },
        {
          speaker: "Samuel",
          target: "Nevertheless, the box arrived on time; even so, the client received the wrong sample.",
          translation: "No obstante, la caja llegó a tiempo; aun así, el cliente recibió la muestra equivocada.",
          pronunciation: "ne-ver-da-LES, da boks a-RAIVD on taim; I-ven so, da KLAI-ent ri-SIVD da rong SAM-pel",
          literal: "No obstante, la caja llegó a tiempo; incluso así, el cliente recibió la muestra equivocada.",
          why: "“Nevertheless” es formal y escrito. “Even so” suena más conversacional. Los dos conceden: aceptan un dato positivo, pero muestran que la conclusión principal sigue siendo negativa."
        },
        {
          speaker: "Nadia",
          target: "That is to say, shipping did not fail; rather, the document version failed. Consequently, we need to correct the process.",
          translation: "Es decir, no falló el transporte, sino la versión del documento. En consecuencia, debemos corregir el proceso.",
          pronunciation: "dat is tu sei, SHI-ping did not feil; RA-der, da DOK-yu-ment VER-shon feild. KON-se-kwent-li, wi nid tu ko-REKT da PRO-ses",
          literal: "Eso es decir, el envío no falló; más bien, la versión del documento falló. En consecuencia, necesitamos corregir el proceso.",
          why: "“That is to say” reformula. “Consequently” es una consecuencia escrita y más formal que “so.” En conversación normal, repetir “consequently” puede sonar como ensayo leído en voz alta."
        },
        {
          speaker: "Samuel",
          target: "In short, we notify the client today; finally, we leave a note so it doesn't happen again.",
          translation: "En resumen, avisamos al cliente hoy; por último, dejamos una nota para que no se repita.",
          pronunciation: "in short, wi NO-ti-fai da KLAI-ent tu-DEI; FAI-nal-li, wi liv a nout so it DO-zent JA-pen a-GEN",
          literal: "En corto, notificamos al cliente hoy; finalmente, dejamos una nota para que no pase otra vez.",
          why: "“In short” resume the reasoning and “finally” marks the last step. Para cerrar un texto formal, “in conclusion” también sirve; para hablar, “so” y “in short” suelen sonar más naturales."
        }
      ],
      vocabulary: [
        {
          term: "moreover / furthermore / in addition",
          explanation:
            "Son conectores para añadir. “In addition” es el más seguro y neutro. “Moreover” y “furthermore” son correctos, pero suelen sonar escritos y pesados en conversación. Muchos hispanohablantes los usan demasiado porque parecen elegantes.",
          literal: "además / asimismo",
          useWhen:
            "Usted añade una razón, evidencia o punto que empuja en la misma dirección que el anterior.",
          avoidWhen:
            "Está hablando casualmente. En charla diaria, “also,” “plus,” o “and” suelen sonar mejor que “moreover.”",
          register: "neutro a formal escrito",
          region: "Inglés universal; en Texas y Estados Unidos, “moreover” en conversación común puede sonar pomposo.",
          related: ["also", "plus", "as well", "another point"],
          example: {
            target: "In addition, let's compare the label with the photo.",
            translation: "Además, comparemos la etiqueta con la foto."
          }
        },
        {
          term: "first / finally / on the other hand",
          explanation:
            "Estos conectores organizan el orden o cambian de lado. “First” abre una secuencia, “finally” marca el último paso y “on the other hand” presenta otro ángulo. No todos son igual de formales, pero todos ayudan a que el lector no se pierda.",
          literal: "primero / finalmente / por otra parte",
          useWhen:
            "Está enumerando pasos, razones u opciones en un correo, informe, presentación o respuesta de examen.",
          avoidWhen:
            "Sólo tiene una idea suelta. Si dice “first,” el lector espera un segundo punto o un cierre claro.",
          register: "neutro",
          region: "Inglés universal; “on the other hand” es común, pero no debe usarse como traducción automática de cualquier “por otra parte.”",
          related: ["second", "next", "last", "another angle"],
          example: {
            target: "First, let's review the order.",
            translation: "En primer lugar, revisemos la orden."
          }
        },
        {
          term: "however / nevertheless / on the other hand / whereas",
          explanation:
            "Estos marcan contraste. “However” es el equivalente más útil de “sin embargo.” “Nevertheless” es más formal. “On the other hand” compara dos lados. “Whereas” contrasta dentro de una oración y suele sonar escrito o legal si se abusa de él.",
          literal: "sin embargo / no obstante / en cambio / mientras que",
          useWhen:
            "Una evidencia empuja contra otra, o necesita comparar dos datos de manera explícita.",
          avoidWhen:
            "Está hablando de forma relajada. “But” es normal y no es inferior; a veces es el conector más natural.",
          register: "neutro a formal escrito",
          region: "Inglés universal; “nevertheless” y “whereas” pertenecen sobre todo a escritura cuidadosa.",
          related: ["but", "yet", "rather", "even so"],
          example: {
            target: "However, the invoice says client B.",
            translation: "Sin embargo, la factura dice cliente B."
          }
        },
        {
          term: "given that / because / due to / since",
          explanation:
            "Estos introducen causa. “Because” es claro y sirve en casi todo. “Given that” suena razonado y formal. “Due to” funciona antes de un sustantivo o frase nominal, y “since” puede significar como o desde, según contexto.",
          literal: "dado que / porque / debido a / ya que",
          useWhen:
            "Necesita explicar por qué ocurrió algo o justificar una conclusión con una causa concreta.",
          avoidWhen:
            "Quiere sonar natural en una conversación rápida. “Because” casi siempre es mejor que llenar la charla de “given that.”",
          register: "neutro a formal",
          region: "Inglés universal; “given that” es común en escritura académica y profesional.",
          related: ["as", "the reason", "because of", "since"],
          example: {
            target: "Given that the shift changed, the old sheet was printed.",
            translation: "Dado que cambió el turno, se imprimió la guía vieja."
          }
        },
        {
          term: "therefore / consequently / so / that is why",
          explanation:
            "Estos introducen consecuencia. “Therefore” es formal pero muy útil. “Consequently” es todavía más escrito. “So” y “that is why” son los caballos de batalla de la conversación. Elija según el contexto, no por ganas de sonar avanzado.",
          literal: "por lo tanto / en consecuencia / así que / por eso",
          useWhen:
            "Ya mostró una causa y ahora necesita decir el resultado, la decisión o la acción lógica.",
          avoidWhen:
            "No ha demostrado la causa. “Therefore” promete lógica; si la frase anterior no la sostiene, el texto suena inflado.",
          register: "de hablado a formal escrito",
          region: "Inglés universal; “so” es normal en inglés hablado de todos los días.",
          related: ["as a result", "for that reason", "then", "it follows"],
          example: {
            target: "Therefore, the box left with crossed data.",
            translation: "Por lo tanto, la caja salió con datos cruzados."
          }
        },
        {
          term: "that is to say / in other words / for example / such as",
          explanation:
            "Estos reformulan o ejemplifican. “That is to say” es claro pero formal. “In other words” es más común. “For example” introduce un caso concreto, y “such as” mete ejemplos dentro de la frase.",
          literal: "es decir / en otras palabras / por ejemplo / tal como",
          useWhen:
            "El lector necesita que usted diga la misma idea con más precisión o que le dé un ejemplo concreto.",
          avoidWhen:
            "Quiere hablar casualmente y rápido. En conversación, “I mean” muchas veces ocupa el lugar de “that is to say.”",
          register: "neutro a formal",
          region: "Inglés universal; “I mean” es muy hablado y no sirve para la mayoría de ensayos.",
          related: ["I mean", "namely", "for instance", "to clarify"],
          example: {
            target: "That is to say, shipping did not fail.",
            translation: "Es decir, no falló el transporte."
          }
        },
        {
          term: "in short / in conclusion / in summary / ultimately",
          explanation:
            "Estos cierran o resumen. “In short” condensa de manera bastante natural. “In conclusion” es de ensayo o presentación. “In summary” es neutro. “Ultimately” da una conclusión final parecida a “en definitiva.”",
          literal: "en resumen / en conclusión / en definitiva",
          useWhen:
            "Necesita reunir las pruebas en un diagnóstico, una recomendación o una decisión final.",
          avoidWhen:
            "Todavía va a abrir otra rama de evidencia. Un cierre falso confunde al lector porque promete terminar y luego sigue agregando puntos.",
          register: "neutro a formal",
          region: "Inglés universal; “in conclusion” puede sonar escolar si se usa en conversación.",
          related: ["to sum up", "finally", "overall", "bottom line"],
          example: {
            target: "In short, we notify the client today.",
            translation: "En resumen, avisamos al cliente hoy."
          }
        },
        {
          term: "although / even though / whereas",
          explanation:
            "Estos conceden o contrastan. “Although” y “even though” aceptan un hecho que no destruye la conclusión principal. “Whereas” contrasta dos realidades dentro de una misma oración y es más escrito.",
          literal: "aunque / a pesar de que / mientras que",
          useWhen:
            "Un dato es verdadero, pero no cambia la conclusión: the box arrived on time, although the sample was wrong.",
          avoidWhen:
            "Sólo necesita un “but” sencillo. En inglés natural, no todo contraste merece “whereas” o “nevertheless.”",
          register: "neutro a formal escrito",
          region: "Inglés universal; “although” es seguro en habla y escritura.",
          related: ["even so", "despite", "but", "still"],
          example: {
            target: "Although the box arrived on time, the sample was wrong.",
            translation: "Aunque la caja llegó a tiempo, la muestra estaba equivocada."
          }
        }
      ],
      note:
        "Los conectores ingleses también se aprenden por trabajo. Para añadir y secuenciar: “moreover,” “furthermore,” “in addition,” “first,” “finally,” y “on the other hand.” Para contrastar: “however,” “nevertheless,” “whereas,” “on the other hand,” y “even so.” Para causa: “given that,” “because,” “since,” y “due to.” Para consecuencia: “therefore,” “consequently,” “so,” y “that is why.” Para reformular y ejemplificar: “that is to say,” “in other words,” “for example,” y “such as.” Para concluir: “in short,” “in conclusion,” “in summary,” y “ultimately.” El registro importa muchísimo. “Moreover” y “furthermore” pueden sonar exagerados en una charla normal; “also,” “plus,” “but,” “so,” y “I mean” hacen mucho trabajo hablado. En escritura formal, en cambio, “however,” “therefore,” “consequently,” y “in addition” son herramientas legítimas. La puntuación inglesa se califica: si un conector une dos oraciones independientes, use punto y coma o punto, no una coma. Escriba “The sheet was old; therefore, the box left with crossed data.” Si “however” empieza una oración, lleva coma después: “However, the invoice says client B.”",
      culture: [
        {
          label: "El inglés no premia sonar más largo siempre",
          body:
            "Muchos colombianos avanzados sienten que “moreover” y “furthermore” elevan cualquier texto. A veces sí, pero en una conversación pueden sonar como una tesis leída en voz alta. El inglés profesional valora claridad. Si “also” hace el trabajo, no es menos inteligente por ser corto."
        },
        {
          label: "However necesita buena puntuación",
          body:
            "En inglés, “however” no arregla una coma entre dos oraciones completas. “The label was right, however the invoice was wrong” queda mal puntuado. Mejor: “The label was right; however, the invoice was wrong” o dos oraciones: “The label was right. However, the invoice was wrong.” Esa regla se marca en exámenes y correos revisados."
        },
        {
          label: "So no es enemigo del inglés formal moderado",
          body:
            "“So” es el caballo de batalla hablado para consecuencia. No siempre hay que reemplazarlo por “therefore.” En un ensayo, conviene variar y usar “therefore” cuando el paso lógico es importante. En una reunión, “so we need to call the client” puede ser exactamente lo natural."
        },
        {
          label: "That is to say no es lo mismo que I mean",
          body:
            "“I mean” es excelente para corregirse o aclarar en habla cotidiana. En un correo formal, puede verse flojo. “That is to say” o “in other words” muestran una reformulación deliberada. La diferencia no es de significado básico, sino de contexto y expectativa."
        }
      ],
      pitfalls: [
        {
          mistake: "“The sheet was old, therefore the box went wrong.”",
          whyItFails:
            "Dos oraciones independientes no deben unirse con una coma antes de “therefore.” En inglés formal, use punto y coma o punto antes del conector, y coma después del conector.",
          sayInstead: "The sheet was old; therefore, the box went wrong."
        },
        {
          mistake: "“Moreover, I called you because the box is wrong.”",
          whyItFails:
            "La frase puede ser correcta en papel si añade un punto, pero en una llamada cotidiana “moreover” suena demasiado formal. Para hablar, “also” o “plus” suele encajar mejor.",
          sayInstead: "Also, I called because the box is wrong."
        },
        {
          mistake: "“However the invoice says client B.”",
          whyItFails:
            "Cuando “however” abre la oración, necesita coma después. Sin la coma, la frase se lee tropezada y parece descuidada en escritura evaluada.",
          sayInstead: "However, the invoice says client B."
        },
        {
          mistake: "“Given that the label, the client got the wrong box.”",
          whyItFails:
            "“Given that” necesita una cláusula completa con verbo. Si sólo tiene un sustantivo, use “given” o “because of”: “because of the label error.”",
          sayInstead: "Given that the label was wrong, the client got the wrong box."
        }
      ],
      variations: [
        {
          form: "In addition, let's compare the label with the photo.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Añadir otra evidencia o paso dentro de la misma línea de razonamiento."
        },
        {
          form: "However, the invoice says something different.",
          register: "neutro a formal",
          region: "Inglés universal",
          whenToUse: "Introducir una evidencia que contrasta con lo anterior, con coma después de “however.”"
        },
        {
          form: "Therefore, the box left with crossed data.",
          register: "formal claro",
          region: "Inglés universal",
          whenToUse: "Marcar la consecuencia lógica después de establecer una causa."
        },
        {
          form: "That is to say, shipping did not fail.",
          register: "formal escrito",
          region: "Inglés universal",
          whenToUse: "Reformular una conclusión con precisión en un texto o presentación."
        },
        {
          form: "So, the old sheet was the problem.",
          register: "hablado informal",
          region: "Inglés universal",
          whenToUse: "Resumir una conclusión en conversación sin sonar como un ensayo."
        }
      ],
      prompt: "Nadia escribe “The sheet was old; therefore, the box left with crossed data.” ¿Qué hace “therefore”?",
      choices: [
        "Añade otro ejemplo con el mismo peso que el primer detalle.",
        "Introduce una muletilla hablada sin función lógica real.",
        "Marca la consecuencia que sale de la guía vieja."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál frase puntúa mejor el conector de contraste?",
          choices: [
            "The box arrived on time; however, the sample was wrong.",
            "The box arrived on time, however the sample was wrong.",
            "The box arrived on time however, the sample was wrong."
          ],
          answer: 0,
          tests: "Punto o punto y coma antes de “however,” y coma después."
        },
        {
          prompt: "¿Cuál opción suena más natural en conversación casual que “moreover”?",
          choices: [
            "Moreover, I checked the label and called the client.",
            "Also, I checked the label and called the client.",
            "Consequently, I checked the label and called the client."
          ],
          answer: 1,
          tests: "“Also” es más conversacional; “moreover” y “consequently” son más escritos."
        },
        {
          prompt: "¿Cuál frase usa bien “given that”?",
          choices: [
            "Given that the label, the client got the wrong box.",
            "Given that wrong, the client got the box yesterday.",
            "Given that the label was wrong, the client got the wrong box."
          ],
          answer: 2,
          tests: "“Given that” necesita una cláusula completa con verbo."
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/46-extending-figuring-things-out.js");
