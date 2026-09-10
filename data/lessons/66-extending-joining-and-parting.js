/*
 * Lesson block: extending / joining and parting.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first.
 */
lessons.push(
  {
    id: "weighing-fish-and-regrets-in-arauca",
    level: "Extending · Joining and parting",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["extension"],
    verb: "pesar",
    review: "pending",
    es: {
      title: "Pesar pescado y hablar de lo que pesa en Arauca",
      situation:
        "Estás en una plaza de mercado en Arauca comprando pescado para un almuerzo. Preguntas cuánto pesa, bromeas con pesarte todas las mañanas y luego usas a pesar de y me pesa para hablar de una invitación que aceptaste tarde.",
      setting: {
        who: "Nora sells fish and knows the regular customers by the meals they are planning. Alex is buying for friends and trying to sound relaxed while checking the price.",
        what: "A market exchange that begins with literal weight and then moves into two figurative uses: in spite of and regret.",
        when: "Saturday morning, before the heat climbs and before everyone starts asking what is for lunch.",
        where: "Arauca, Arauca, in a market aisle where the scale is visible and the conversation can stay practical without needing any invented regional slang.",
        why: "Because pesar is literal at the market, but the high-value connectors are figurative. “A pesar de” means in spite of, and “me pesa” means something weighs on you or you regret it."
      },
      address: {
        form: "usted",
        who: "Nora and Alex use usted because the market exchange is friendly but still between vendor and customer.",
        why: "Usted lets both people bargain, joke and correct details without sounding overfamiliar. It is a useful Colombian service register.",
        ifYouSwitch:
          "Tú would sound too familiar for a first purchase. Vos would be possible in some Colombian regions but would feel unnecessary and distracting here."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Buenos días, doña Nora. ¿Cuánto pesa ese pescado grande?",
          translation: "Good morning, Doña Nora. How much does that big fish weigh?",
          pronunciation: "BWEH-nos DEE-as, DOH-nyah NOH-rah. KWAN-toh PEH-sah EH-seh pes-KAH-doh GRAN-deh",
          literal: "Good days, Doña Nora. How-much weighs that fish big?",
          why: "This is the literal market use: a thing has weight, so Spanish asks “¿cuánto pesa?” The subject is the fish, not the scale."
        },
        {
          speaker: "Nora",
          target: "Pesa casi dos kilos; si quiere, lo volvemos a pesar.",
          translation: "It weighs almost two kilos; if you want, we can weigh it again.",
          pronunciation: "PEH-sah KAH-see dos KEE-los; see KYEH-reh, loh bol-BEH-mos ah peh-SAR",
          literal: "It-weighs almost two kilos; if you want, it we-return to weigh.",
          why: "“Volver a pesar” is ordinary and precise: the fish can be put on the scale again. Nothing figurative yet."
        },
        {
          speaker: "Alex",
          target: "Tranquila, le creo. Yo me peso todas las mañanas y esa báscula manda.",
          translation: "No worries, I believe you. I weigh myself every morning, and that scale rules.",
          pronunciation: "tran-KEE-lah, leh KREH-oh. yo meh PEH-soh TOH-das las mah-NYAH-nas ee EH-sah BAS-koo-lah MAN-dah",
          literal: "Calm, to-you I-believe. I myself weigh all the mornings and that scale commands.",
          why: "For weighing yourself, Spanish uses the reflexive “me peso.” The little joke keeps the market talk human rather than suspicious."
        },
        {
          speaker: "Nora",
          target: "A pesar de la lluvia, hoy sí vinieron temprano por pescado.",
          translation: "In spite of the rain, people really did come early for fish today.",
          pronunciation: "ah peh-SAR deh lah YOO-byah, oy see bee-NYEH-ron tem-PRAH-noh por pes-KAH-doh",
          literal: "In weighing of the rain, today yes they-came early for fish.",
          why: "“A pesar de” is the connector: in spite of. It no longer asks about kilos; it connects an obstacle with what happened anyway."
        },
        {
          speaker: "Alex",
          target: "Me pesa no haberle confirmado a mi tía desde ayer.",
          translation: "I regret not having confirmed with my aunt since yesterday.",
          pronunciation: "meh PEH-sah no ah-BER-leh kon-feer-MAH-doh ah mee TEE-ah des-deh ah-YER",
          literal: "To-me weighs not having-to-her confirmed to my aunt since yesterday.",
          why: "“Me pesa” is regret or emotional weight. The infinitive phrase after it can be quite long, which makes it perfect for extension-tier speech."
        },
        {
          speaker: "Nora",
          target: "Entonces llámela ya, para que no le pese más tarde.",
          translation: "Then call her now, so it doesn't weigh on you later.",
          pronunciation: "en-TON-ses YAH-meh-lah ya, PAH-rah keh no leh PEH-seh mas TAR-deh",
          literal: "Then call-her now, so-that not to-you it-weigh later.",
          why: "“Para que no le pese” takes subjunctive because the later regret is being prevented. The verb stays emotional, not physical."
        }
      ],
      vocabulary: [
        {
          term: "pesar",
          explanation:
            "To weigh, literally or figuratively. At a market it is about kilos; in conversation it can become regret or resistance.",
          literal: "to weigh",
          useWhen:
            "Asking an object's weight, weighing a person, or saying something weighs emotionally.",
          avoidWhen:
            "You mean thinking. “Pensar” and “pesar” are close in spelling, but they are completely different verbs.",
          register: "neutral",
          region: "General Spanish.",
          related: ["el peso", "la báscula", "pesarse", "a pesar de"],
          example: {
            target: "¿Cuánto pesa ese pescado?",
            translation: "How much does that fish weigh?"
          }
        },
        {
          term: "¿cuánto pesa?",
          explanation:
            "How much does it weigh? The question belongs to markets, luggage, babies, boxes and anything measured on a scale.",
          literal: "how much weighs?",
          useWhen:
            "You need the weight before paying, carrying, cooking or deciding whether something is too heavy.",
          avoidWhen:
            "You are asking price. In a market, “¿cuánto vale?” and “¿cuánto pesa?” are different questions.",
          register: "neutral",
          region: "General Spanish.",
          related: ["kilo", "libra", "gramos", "pesado"],
          example: {
            target: "¿Cuánto pesa ese pescado grande?",
            translation: "How much does that big fish weigh?"
          }
        },
        {
          term: "pesarse",
          explanation:
            "To weigh yourself. The reflexive pronoun is normal because the person puts themselves on the scale.",
          literal: "to weigh oneself",
          useWhen:
            "Talking about body weight, a medical check or a morning habit with a scale.",
          avoidWhen:
            "You are weighing an object. A fish “pesa”; you “me peso.”",
          register: "neutral",
          region: "General Spanish.",
          related: ["me peso", "la pesa", "la báscula", "subir de peso"],
          example: {
            target: "Yo me peso todas las mañanas.",
            translation: "I weigh myself every morning."
          }
        },
        {
          term: "a pesar de",
          explanation:
            "In spite of. This is a high-value connector for saying an obstacle existed but did not stop the action.",
          literal: "at weighing of",
          useWhen:
            "Rain, tiredness, cost, distance or a warning did not prevent what happened.",
          avoidWhen:
            "You are giving a normal cause. “A pesar de la lluvia” means the rain was an obstacle, not the reason.",
          register: "neutral",
          region: "General Spanish.",
          related: ["aunque", "sin importar", "pese a", "de todas maneras"],
          example: {
            target: "A pesar de la lluvia, salimos.",
            translation: "In spite of the rain, we went out."
          }
        },
        {
          term: "me pesa",
          explanation:
            "I regret it, or it weighs on me. The thing can be a decision, a silence, a late reply or a missed chance.",
          literal: "to me it weighs",
          useWhen:
            "You want to sound reflective rather than dramatic about something that now feels heavy.",
          avoidWhen:
            "You only mean “it is heavy” physically. Then say “pesa mucho,” not “me pesa.”",
          register: "neutral careful",
          region: "General Spanish; very understandable in Colombia.",
          related: ["me arrepiento", "me duele", "me queda sonando", "me da pesar"],
          example: {
            target: "Me pesa no haberle confirmado.",
            translation: "I regret not having confirmed with her."
          }
        },
        {
          term: "que no le pese",
          explanation:
            "So it will not weigh on you. The subjunctive “pese” appears after “para que” because the regret is only possible.",
          literal: "so that to-you it not weigh",
          useWhen:
            "You act now to prevent later regret, guilt or emotional weight.",
          avoidWhen:
            "The regret already exists. Then say “me pesa” or “me pesó,” depending on the time.",
          register: "neutral",
          region: "General Spanish.",
          related: ["para que no se arrepienta", "antes de que duela", "evitar el pesar", "quedarse tranquilo"],
          example: {
            target: "Llámela ya, para que no le pese más tarde.",
            translation: "Call her now, so it doesn't weigh on you later."
          }
        },
        {
          term: "la báscula / la pesa",
          explanation:
            "The scale. “Báscula” is common for the device; “pesa” can also be heard for a scale or weight depending on context.",
          literal: "the scale / the weight",
          useWhen:
            "You need the object that measures kilos in a market, home or clinic.",
          avoidWhen:
            "You are talking about emotional weight. Then the device is irrelevant; the verb carries the feeling.",
          register: "neutral",
          region: "General Colombian.",
          related: ["kilos", "gramos", "pesar", "medir"],
          example: {
            target: "Esa báscula manda.",
            translation: "That scale rules."
          }
        }
      ],
      note:
        "Pesos and feelings live in the same verb. “¿Cuánto pesa?” is straightforward market Spanish, and “me peso” is what you do on a scale. But “a pesar de” is a connector, and “me pesa” is regret. Those figurative uses are the ones that let pesar appear far beyond the market.",
      culture: [
        {
          label: "The scale is public",
          body:
            "In a market, the scale is part of the trust between buyer and vendor. Asking to weigh something again can be normal if the tone is practical rather than accusatory."
        },
        {
          label: "A pesar de is not about kilos",
          body:
            "Once you hear “a pesar de,” stop picturing weight. It is a connector that lets adults speak in longer, cleaner sentences: the obstacle was real, and the action happened anyway."
        },
        {
          label: "Regret can be quiet",
          body:
            "“Me pesa” is not theatrical guilt. It is the feeling that a delay, silence or decision sits badly with you, often said before repairing it."
        }
      ],
      pitfalls: [
        {
          mistake: "Confusing “pesar” with “pensar”",
          whyItFails:
            "The spelling is close, but the verbs are unrelated. “Pesa” measures weight; “piensa” is about thought.",
          sayInstead: "¿Cuánto pesa?, not ¿cuánto piensa?"
        },
        {
          mistake: "Reading “a pesar de” as literal weight",
          whyItFails:
            "In this connector, nobody is weighing the rain. It means the rain was an obstacle that did not stop the action.",
          sayInstead: "A pesar de la lluvia, salimos."
        },
        {
          mistake: "Using “me pesa” for a heavy object",
          whyItFails:
            "“Me pesa” normally points to regret or emotional weight. For a heavy bag, describe the object directly.",
          sayInstead: "La bolsa pesa mucho."
        },
        {
          mistake: "Forgetting the reflexive in weighing yourself",
          whyItFails:
            "A person usually “se pesa” because they put themselves on the scale. Without the pronoun, the object may sound missing.",
          sayInstead: "Me peso todas las mañanas."
        }
      ],
      variations: [
        {
          form: "¿Cuánto pesa ese pescado?",
          register: "neutral practical",
          region: "General Spanish",
          whenToUse: "Asking literal weight before paying or cooking."
        },
        {
          form: "Me peso todas las mañanas.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Talking about weighing yourself as a habit."
        },
        {
          form: "A pesar de la lluvia, salimos.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "An obstacle existed, but the action happened anyway."
        },
        {
          form: "Me pesa no haberle confirmado.",
          register: "neutral careful",
          region: "General Spanish",
          whenToUse: "A delay or omission now feels regrettable."
        },
        {
          form: "Llámela para que no le pese.",
          register: "warm practical",
          region: "General Colombian",
          whenToUse: "Act now so the regret does not grow later."
        }
      ],
      prompt: "Nora says “a pesar de la lluvia, hoy sí vinieron.” What does “a pesar de” do?",
      choices: [
        "It connects an obstacle with what happened anyway.",
        "It asks the exact market weight of the rain.",
        "It says the fish was too expensive today."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence asks literal weight?",
          choices: [
            "¿Cuánto pesa ese pescado grande?",
            "¿Cuánto piensa ese pescado grande?",
            "¿Cuánto sonríe ese pescado grande?"
          ],
          answer: 0,
          tests: "pesar for literal weight"
        },
        {
          prompt: "Which sentence means the speaker regrets a delay?",
          choices: [
            "Me pesa no haberle confirmado ayer.",
            "Me peso todas las mañanas temprano.",
            "Me pesa el pescado casi dos kilos."
          ],
          answer: 0,
          tests: "me pesa as regret"
        },
        {
          prompt: "Which sentence correctly says “I weigh myself”?",
          choices: [
            "Peso yo cada mañana sin báscula.",
            "Me peso todas las mañanas.",
            "A pesar de mí todas las mañanas."
          ],
          answer: 1,
          tests: "pesarse reflexive"
        },
        {
          prompt: "Which sentence uses the connector rather than literal weight?",
          choices: [
            "El pescado pesa casi dos kilos.",
            "La báscula pesa el mercado.",
            "A pesar de la lluvia, salimos."
          ],
          answer: 2,
          tests: "a pesar de as in spite of"
        }
      ]
    },
    en: {
      title: "Pesar pescado y hablar de lo que pesa en Portland",
      situation:
        "Usted está en un mercado de Portland comprando pescado para una comida con amigos. Necesita preguntar por el peso, hablar de pesarse y distinguir in spite of de regret cuando pesar deja de ser literal.",
      setting: {
        who: "Nora vende pescado en un puesto de mercado y conoce a sus clientes habituales. Alejandro compra para amigos y quiere revisar precio y peso sin sonar desconfiado.",
        what: "Un intercambio de mercado que empieza con peso literal y pasa a dos usos figurados: obstáculo superado y arrepentimiento.",
        when: "Sábado por la mañana, antes de que suba el calor y antes de que todos pregunten qué habrá de almuerzo.",
        where: "Portland, en un mercado cubierto donde la báscula está a la vista y la conversación ocurre en inglés.",
        why: "Porque el inglés separa lo que español puede expresar con pesar: “weigh” para kilos, “in spite of” para a pesar de, y “regret” o “weigh on me” para me pesa."
      },
      address: {
        form: "mixed",
        who: "Nora y Alejandro no se conocen. En inglés ambos usan “you”; la cortesía se oye en preguntas completas y tono amable.",
        why: "El inglés no tiene usted. Para una compra, “could you” y “please” hacen el trabajo que en español hace parte del registro.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Si usa demasiado “sir” o “ma'am,” puede sonar rígido para un mercado."
      },
      dialogue: [
        {
          speaker: "Alejandro",
          target: "Good morning, Nora. How much does that big fish weigh?",
          translation: "Buenos días, doña Nora. ¿Cuánto pesa ese pescado grande?",
          pronunciation: "gud MOR-ning, NO-ra. jau mach daz dat big fish wei",
          literal: "Buenos días, Nora. ¿Cuánto pesa ese pescado grande?",
          why: "“Weigh” es el verbo literal para kilos, libras y básculas. La pregunta no es precio sino peso."
        },
        {
          speaker: "Nora",
          target: "It weighs almost four pounds; if you want, we can weigh it again.",
          translation: "Pesa casi cuatro libras; si quiere, lo volvemos a pesar.",
          pronunciation: "it weiz OL-moust for paunds; if yu uant, ui kan wei it a-GEN",
          literal: "Pesa casi cuatro libras; si quiere, podemos pesarlo otra vez.",
          why: "“It weighs” describe la propiedad del pescado; “weigh it” es la acción de ponerlo en la báscula."
        },
        {
          speaker: "Alejandro",
          target: "No worries, I trust you. I weigh myself every morning, and scales always win.",
          translation: "Tranquila, le creo. Yo me peso todas las mañanas y las básculas siempre ganan.",
          pronunciation: "nou UO-ris, ai trast yu. ai wei mai-SELF EV-ri MOR-ning, and skeils OL-weiz win",
          literal: "No se preocupe, confío en usted. Me peso cada mañana, y las básculas siempre ganan.",
          why: "“Weigh myself” traduce “me peso.” El pronombre cambia porque la persona se pone a sí misma en la báscula."
        },
        {
          speaker: "Nora",
          target: "In spite of the rain, people came early for fish today.",
          translation: "A pesar de la lluvia, hoy sí vinieron temprano por pescado.",
          pronunciation: "in SPAIT ov da rein, PI-pol keim ER-li for fish tu-DEI",
          literal: "A pesar de la lluvia, la gente vino temprano por pescado hoy.",
          why: "“In spite of” traduce “a pesar de.” No hable de weighing cuando el español ya está conectando obstáculo y resultado."
        },
        {
          speaker: "Alejandro",
          target: "I regret not confirming with my aunt yesterday.",
          translation: "Me pesa no haberle confirmado a mi tía ayer.",
          pronunciation: "ai ri-GRET not kon-FER-ming uid mai ant YES-ter-dei",
          literal: "Lamento no haber confirmado con mi tía ayer.",
          why: "“I regret” es la traducción directa del “me pesa” emocional. “It weighs me” no suena natural en este registro."
        },
        {
          speaker: "Nora",
          target: "Then call her now, so it doesn't weigh on you later.",
          translation: "Entonces llámela ya, para que no le pese más tarde.",
          pronunciation: "den kol jer nau, sou it DA-zent wei on yu LEI-ter",
          literal: "Entonces llámela ahora, para que no pese sobre usted más tarde.",
          why: "“Weigh on you” sí conserva la metáfora emocional, pero suena más literaria que “regret.” Sirve cuando el peso moral es la imagen."
        }
      ],
      vocabulary: [
        {
          term: "weigh",
          explanation:
            "Pesar en sentido literal: tener cierto peso o poner algo en una báscula.",
          literal: "pesar",
          useWhen:
            "Pregunta por kilos, libras, maletas, bebés, comida o cualquier objeto medible.",
          avoidWhen:
            "Quiere traducir “a pesar de” o “me pesa.” Ahí el inglés cambia de estructura.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["weight", "scale", "weigh myself", "heavy"],
          example: {
            target: "How much does that fish weigh?",
            translation: "¿Cuánto pesa ese pescado?"
          }
        },
        {
          term: "how much does it weigh?",
          explanation:
            "¿Cuánto pesa? Es una pregunta por peso, no por precio.",
          literal: "¿cuánto pesa?",
          useWhen:
            "Necesita saber peso antes de pagar, cocinar, empacar o cargar algo.",
          avoidWhen:
            "Está preguntando cuánto cuesta. Entonces diga “how much is it?”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["how heavy is it", "pounds", "kilos", "weigh it"],
          example: {
            target: "How much does it weigh?",
            translation: "¿Cuánto pesa?"
          }
        },
        {
          term: "weigh myself",
          explanation:
            "Pesarme. El reflexivo español se vuelve “myself” en inglés.",
          literal: "pesarme",
          useWhen:
            "Habla de peso corporal, hábitos de la mañana o chequeos médicos.",
          avoidWhen:
            "Pesa un objeto. Entonces diga “weigh it” o “it weighs.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["weigh yourself", "scale", "body weight", "weighed myself"],
          example: {
            target: "I weigh myself every morning.",
            translation: "Me peso todas las mañanas."
          }
        },
        {
          term: "in spite of",
          explanation:
            "A pesar de. Es conector de contraste: había obstáculo, pero la acción ocurrió.",
          literal: "a pesar de",
          useWhen:
            "Lluvia, cansancio, costo o distancia no impidieron el resultado.",
          avoidWhen:
            "Está dando la causa normal de algo. “In spite of” marca resistencia, no motivo.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["despite", "even though", "although", "regardless of"],
          example: {
            target: "In spite of the rain, people came early.",
            translation: "A pesar de la lluvia, la gente vino temprano."
          }
        },
        {
          term: "regret",
          explanation:
            "Lamentar o pesarle a uno. Es la forma directa para el “me pesa” emocional.",
          literal: "lamentar",
          useWhen:
            "Una decisión, silencio, demora o oportunidad perdida ahora le pesa moralmente.",
          avoidWhen:
            "Habla de peso físico. Un pescado weighs; una decisión may be regretted.",
          register: "neutral careful",
          region: "Inglés universal.",
          related: ["feel bad about", "be sorry about", "wish I had", "weigh on me"],
          example: {
            target: "I regret not confirming.",
            translation: "Me pesa no haber confirmado."
          }
        },
        {
          term: "weigh on you",
          explanation:
            "Pesarle a usted en sentido emocional. Conserva la imagen de carga moral.",
          literal: "pesar sobre usted",
          useWhen:
            "Quiere decir que una preocupación o arrepentimiento sigue molestando.",
          avoidWhen:
            "Sólo necesita una disculpa simple. “I regret it” o “I'm sorry” puede ser más natural.",
          register: "neutral reflective",
          region: "Inglés universal.",
          related: ["weigh on my mind", "bother me", "feel heavy", "carry guilt"],
          example: {
            target: "So it doesn't weigh on you later.",
            translation: "Para que no le pese más tarde."
          }
        },
        {
          term: "scale",
          explanation:
            "Báscula o pesa. Es el aparato que mide peso.",
          literal: "báscula",
          useWhen:
            "Mercados, cocina, maletas, clínicas o peso corporal.",
          avoidWhen:
            "Quiere decir escala de tamaño o importancia; ese es otro uso de “scale.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["weigh", "weight", "measure", "pounds"],
          example: {
            target: "Scales always win.",
            translation: "Las básculas siempre ganan."
          }
        }
      ],
      note:
        "Para pesar, el inglés obliga a separar: “weigh” para peso literal, “in spite of” para a pesar de, “regret” para me pesa, y “weigh on you” si quiere conservar la metáfora emocional. No intente resolver todas con “weigh.”",
      culture: [
        {
          label: "La báscula no es precio",
          body:
            "En un mercado, “how much does it weigh?” pregunta por peso. Si quiere precio, diga “how much is it?” Separar esas dos preguntas evita una confusión muy básica."
        },
        {
          label: "In spite of organiza frases largas",
          body:
            "El conector permite decir que había un obstáculo real y aun así ocurrió algo. Es una herramienta de discurso, no vocabulario de mercado."
        },
        {
          label: "Regret es más normal que weigh on me",
          body:
            "“It weighs on me” existe y conserva la metáfora, pero para una disculpa cotidiana “I regret” o “I feel bad about it” suele sonar más directo."
        }
      ],
      pitfalls: [
        {
          mistake: "“How much thinks the fish?”",
          whyItFails:
            "Confunde pesar con pensar y además calca el orden español. El inglés pregunta con “does” y el verbo “weigh.”",
          sayInstead: "How much does the fish weigh?"
        },
        {
          mistake: "“At weight of the rain, we went out.”",
          whyItFails:
            "Calca “a pesar de” palabra por palabra. El inglés usa el conector completo “in spite of” o “despite.”",
          sayInstead: "In spite of the rain, we went out."
        },
        {
          mistake: "“It weighs me not calling her.”",
          whyItFails:
            "No traduce naturalmente “me pesa.” Para arrepentimiento cotidiano, use “regret” o “feel bad about.”",
          sayInstead: "I regret not calling her."
        },
        {
          mistake: "“I weight myself every morning.”",
          whyItFails:
            "“Weight” es sustantivo o verbo técnico distinto; la acción cotidiana es “weigh myself.”",
          sayInstead: "I weigh myself every morning."
        }
      ],
      variations: [
        {
          form: "How much does that fish weigh?",
          register: "neutral practical",
          region: "Inglés universal",
          whenToUse: "Preguntar por peso literal en mercado, cocina o equipaje."
        },
        {
          form: "I weigh myself every morning.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Hablar del peso corporal como hábito."
        },
        {
          form: "In spite of the rain, we went out.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Un obstáculo no impidió la acción."
        },
        {
          form: "I regret not confirming yesterday.",
          register: "neutral careful",
          region: "Inglés universal",
          whenToUse: "Traducir “me pesa” como arrepentimiento directo."
        },
        {
          form: "So it doesn't weigh on you later.",
          register: "reflective",
          region: "Inglés universal",
          whenToUse: "Quiere conservar la metáfora de carga emocional."
        }
      ],
      prompt: "Nora says “in spite of the rain, people came early.” ¿Qué hace “in spite of”?",
      choices: [
        "Conecta un obstáculo con algo que pasó de todos modos.",
        "Pregunta cuánto pesa la lluvia en la báscula.",
        "Dice que el pescado estuvo más caro hoy."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase pregunta peso literal?",
          choices: [
            "How much does that fish weigh?",
            "How much thinks that fish today?",
            "How much smiles that fish now?"
          ],
          answer: 0,
          tests: "weigh for literal weight"
        },
        {
          prompt: "¿Cuál frase traduce “me pesa no llamar”?",
          choices: [
            "I regret not calling her.",
            "I weigh myself every morning.",
            "I scale the fish at noon."
          ],
          answer: 0,
          tests: "regret for me pesa"
        },
        {
          prompt: "¿Cuál dice correctamente “me peso”?",
          choices: [
            "I weight myself every morning.",
            "I weigh myself every morning.",
            "I in spite myself every morning."
          ],
          answer: 1,
          tests: "weigh myself"
        },
        {
          prompt: "¿Cuál frase usa el conector, no el peso físico?",
          choices: [
            "The fish weighs almost four pounds.",
            "The scale measures the fish again.",
            "In spite of the rain, we went out."
          ],
          answer: 2,
          tests: "in spite of as connector"
        }
      ]
    }
  },
  {
    id: "joining-a-cleanup-group-in-guatape",
    level: "Extending · Joining and parting",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighbourhood",
    register: "courteous",
    pathways: ["extension"],
    verb: "unir",
    review: "pending",
    es: {
      title: "Unirse a una jornada comunitaria en Guatapé",
      situation:
        "Estás en Guatapé y unos vecinos organizan una jornada para limpiar la orilla antes de una actividad del barrio. Quieres unirte al grupo, unir fuerzas sin sonar grandilocuente y entender por qué una familia unida es un cumplido cálido.",
      setting: {
        who: "Teresa coordinates the neighbourhood group and knows which tasks need people. Alex is new in town for a few weeks and wants to help without acting like he is in charge.",
        what: "A sign-up conversation: joining a group, joining efforts, keeping people together and using unido as a warm adjective.",
        when: "Thursday evening, two days before the cleanup, while neighbours confirm who is bringing gloves and bags.",
        where: "Guatapé, Antioquia, near the waterfront but away from Medellín, with a community plan rather than a tourist itinerary.",
        why: "Because unir is more than physically joining two things. “Unirse a” means join a group, “unir fuerzas” means collaborate, and “una familia unida” is a real compliment."
      },
      address: {
        form: "usted",
        who: "Teresa and Alex use usted because they are neighbours who have not yet become close friends.",
        why: "The form lets Alex offer help respectfully without overclaiming belonging. Community warmth and usted can easily coexist.",
        ifYouSwitch:
          "Tú could arrive later after the group works together. Vos might belong to some local friendships, but Alex has not earned that register yet."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Doña Teresa, ¿todavía me puedo unir a la jornada del sábado?",
          translation: "Doña Teresa, can I still join Saturday's cleanup day?",
          pronunciation: "DOH-nyah teh-REH-sah, toh-dah-BEE-ah meh PWEH-doh oo-NEER ah lah hor-NAH-dah del SAH-bah-doh",
          literal: "Doña Teresa, still myself I-can join to the day of Saturday?",
          why: "The everyday form is “unirse a” a group, event or cause. The pronoun matters because Alex is adding himself to something already formed."
        },
        {
          speaker: "Teresa",
          target: "Claro que sí. Si se une, nos ayuda a unir fuerzas con la escuela.",
          translation: "Of course. If you join, you help us join forces with the school.",
          pronunciation: "KLAH-roh keh see. see seh OO-neh, nos ah-YOO-dah ah oo-NEER FWER-sas kon lah es-KWEH-lah",
          literal: "Clear that yes. If yourself you-join, us you-help to join forces with the school.",
          why: "“Unir fuerzas” is not physical joining; it is cooperation. The phrase sounds natural when separate people or groups coordinate."
        },
        {
          speaker: "Alex",
          target: "Me gusta que el barrio se una sin esperar a que venga alguien de afuera.",
          translation: "I like that the neighbourhood comes together without waiting for someone from outside to come.",
          pronunciation: "meh GOOS-tah keh el BAR-ryoh seh OO-nah seen es-peh-RAR ah keh BEN-gah AL-gyen deh ah-FWEH-rah",
          literal: "To-me pleases that the neighbourhood itself join without waiting that come someone from outside.",
          why: "“Que el barrio se una” uses subjunctive after “me gusta que.” This is extension-level grammar in a very ordinary sentence."
        },
        {
          speaker: "Teresa",
          target: "Eso mantiene a la gente unida, aunque cada quien piense distinto.",
          translation: "That keeps people united, even if each person thinks differently.",
          pronunciation: "EH-soh man-TYEH-neh ah lah HEN-teh oo-NEE-dah, AUN-keh KAH-dah kyen PYEN-seh dees-TEEN-toh",
          literal: "That maintains the people united, although each one think different.",
          why: "“Unida” as an adjective means close, cohesive, together. With “aunque piense,” the difference remains possible and the subjunctive fits."
        },
        {
          speaker: "Alex",
          target: "Mi familia es así: muy unida, pero discute hasta por las bolsas.",
          translation: "My family is like that: very close, but they argue even about the bags.",
          pronunciation: "mee fah-MEE-lyah es ah-SEE: muy oo-NEE-dah, PEH-roh dees-KOO-teh AHS-tah por las BOL-sas",
          literal: "My family is like that: very united, but argues even about the bags.",
          why: "“Una familia muy unida” is a warm Colombian compliment. It does not mean nobody argues; it means people stay connected despite the noise."
        },
        {
          speaker: "Teresa",
          target: "Entonces queda invitado: el sábado nos unimos temprano y arrancamos.",
          translation: "Then you are invited: on Saturday we join up early and get started.",
          pronunciation: "en-TON-ses KEH-dah een-bee-TAH-doh: el SAH-bah-doh nos oo-NEE-mos tem-PRAH-noh ee ah-RRAN-kah-mos",
          literal: "Then you remain invited: the Saturday ourselves we-join early and we-start.",
          why: "“Nos unimos” can mean we gather or join together for the purpose. It is practical, not ceremonial."
        }
      ],
      vocabulary: [
        {
          term: "unir",
          explanation:
            "To join or unite. It can join physical pieces, people, groups, efforts or emotional bonds.",
          literal: "to unite / join",
          useWhen:
            "Two things come together, or people coordinate around a shared task, cause, family or plan.",
          avoidWhen:
            "You mean entering a website or call. That is usually “entrar” or “conectarse,” not unir.",
          register: "neutral",
          region: "General Spanish.",
          related: ["unirse", "juntar", "reunir", "unido"],
          example: {
            target: "Nos ayuda a unir fuerzas.",
            translation: "You help us join forces."
          }
        },
        {
          term: "unirse a",
          explanation:
            "To join a group, activity, team or cause. This is the everyday form when you add yourself to something already underway.",
          literal: "to join oneself to",
          useWhen:
            "Signing up for a group, joining a meeting, helping with a project or taking part in a cause.",
          avoidWhen:
            "You are physically gluing two objects. Then plain “unir” or “pegar” may be better.",
          register: "neutral",
          region: "General Spanish.",
          related: ["sumarse a", "hacer parte de", "integrarse a", "participar en"],
          example: {
            target: "Me puedo unir a la jornada.",
            translation: "I can join the cleanup day."
          }
        },
        {
          term: "unir fuerzas",
          explanation:
            "To join forces. It means collaborating so separate people or groups can do more together.",
          literal: "to unite strengths",
          useWhen:
            "Neighbourhoods, schools, families or teams coordinate around one goal.",
          avoidWhen:
            "The task is only one person's private errand. The phrase expects more than one force.",
          register: "neutral",
          region: "General Spanish.",
          related: ["trabajar juntos", "colaborar", "sumar esfuerzos", "hacer equipo"],
          example: {
            target: "Unimos fuerzas con la escuela.",
            translation: "We join forces with the school."
          }
        },
        {
          term: "que el barrio se una",
          explanation:
            "That the neighbourhood come together. The subjunctive “se una” follows an emotion or evaluation: “me gusta que…”",
          literal: "that the neighbourhood join itself",
          useWhen:
            "You value, want, hope or doubt that people come together.",
          avoidWhen:
            "You are stating a fact with no trigger: “el barrio se une cada sábado.”",
          register: "neutral",
          region: "General Spanish.",
          related: ["que la gente participe", "que todos ayuden", "que se sumen", "que colaboren"],
          example: {
            target: "Me gusta que el barrio se una.",
            translation: "I like that the neighbourhood comes together."
          }
        },
        {
          term: "unido",
          explanation:
            "United, close or tight-knit. About families, it is a warm compliment: people may argue, but they show up for each other.",
          literal: "united",
          useWhen:
            "Describing a family, community, group or team with strong bonds.",
          avoidWhen:
            "You mean physically tied together. Then say exactly what joins the objects.",
          register: "warm neutral",
          region: "General Colombian.",
          related: ["cercano", "apegado", "solidario", "compacto"],
          example: {
            target: "Mi familia es muy unida.",
            translation: "My family is very close."
          }
        },
        {
          term: "aunque cada quien piense distinto",
          explanation:
            "Even if everyone thinks differently. The phrase keeps unity from meaning sameness.",
          literal: "although each one think differently",
          useWhen:
            "People disagree but still cooperate or remain close.",
          avoidWhen:
            "The disagreement has already been specifically proved. Then indicative may be possible depending on what you assert.",
          register: "neutral",
          region: "General Colombian; “cada quien” is common.",
          related: ["aunque no estén de acuerdo", "aun así", "sin pensar igual", "con diferencias"],
          example: {
            target: "Seguimos unidos aunque cada quien piense distinto.",
            translation: "We stay close even if everyone thinks differently."
          }
        },
        {
          term: "queda invitado",
          explanation:
            "You are invited; literally, you remain invited. It is a friendly way to make the invitation sound settled.",
          literal: "you remain invited",
          useWhen:
            "Someone has asked to join and you want to make their place in the plan clear.",
          avoidWhen:
            "A very formal written invitation. Then a fuller sentence may fit better.",
          register: "friendly polite",
          region: "General Colombian.",
          related: ["está invitado", "lo esperamos", "puede venir", "queda confirmado"],
          example: {
            target: "Entonces queda invitado.",
            translation: "Then you are invited."
          }
        }
      ],
      note:
        "Unir is the warm mirror of separating. It joins objects, but the valuable everyday uses are social: “unirse a” a group, “unir fuerzas” with another group, and calling a family “muy unida.” In Colombian speech, that last phrase is praise for loyalty, not a claim that nobody disagrees.",
      culture: [
        {
          label: "Joining means not taking over",
          body:
            "When Alex asks whether he can join, he is entering an existing community effort. The polite move is to ask where help is needed, not to redesign the whole plan."
        },
        {
          label: "A united family may still argue",
          body:
            "“Una familia unida” is about showing up, not silent harmony. Colombian families can be loud, opinionated and still proudly united."
        },
        {
          label: "Community language is practical",
          body:
            "“Unir fuerzas” can sound lofty in isolation, but in a neighbourhood cleanup it is plain: school, neighbours and families bring different resources to one task."
        }
      ],
      pitfalls: [
        {
          mistake: "Using plain “unir” when you mean join a group",
          whyItFails:
            "For adding yourself to a group or activity, Spanish normally uses the pronominal form with “a.”",
          sayInstead: "Me quiero unir a la jornada."
        },
        {
          mistake: "Treating “una familia unida” as a silent family",
          whyItFails:
            "The phrase means close and supportive, not conflict-free. A family can argue and still be united.",
          sayInstead: "Somos una familia unida, aunque discutamos."
        },
        {
          mistake: "Using “unirse con” for joining an activity",
          whyItFails:
            "You may unite with another person for a shared purpose, but joining an activity usually takes “a.”",
          sayInstead: "Me uno a la jornada, or unimos fuerzas con la escuela."
        }
      ],
      variations: [
        {
          form: "Me puedo unir a la jornada.",
          register: "polite practical",
          region: "General Spanish",
          whenToUse: "Asking to join an activity already being organized."
        },
        {
          form: "Unamos fuerzas con la escuela.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Several groups can cooperate toward the same goal."
        },
        {
          form: "Me gusta que el barrio se una.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Valuing the fact that people come together."
        },
        {
          form: "Somos una familia muy unida.",
          register: "warm neutral",
          region: "General Colombian",
          whenToUse: "Complimenting a family's closeness and loyalty."
        }
      ],
      prompt: "Teresa says “si se une, nos ayuda a unir fuerzas.” What is Alex doing?",
      choices: [
        "Joining an existing community effort.",
        "Separating two groups before lunch.",
        "Weighing each bag at the market."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses the natural form for joining a group?",
          choices: [
            "Me quiero unir a la jornada.",
            "Me quiero pesar a la jornada.",
            "Me quiero separar la jornada."
          ],
          answer: 0,
          tests: "unirse a for joining an activity"
        },
        {
          prompt: "What does “unir fuerzas” mean here?",
          choices: [
            "Collaborating so groups can do more together.",
            "Measuring the physical weight of every volunteer.",
            "Ending the cleanup before anyone arrives."
          ],
          answer: 0,
          tests: "unir fuerzas as collaboration"
        },
        {
          prompt: "Which phrase is a warm compliment about family?",
          choices: [
            "Una familia muy unida.",
            "Una familia muy pesada.",
            "Una familia muy separada."
          ],
          answer: 0,
          tests: "unido as close-knit"
        },
        {
          prompt: "Why is “que el barrio se una” subjunctive?",
          choices: [
            "Because it follows an expression of liking or value.",
            "Because every neighbourhood is already one object.",
            "Because the cleanup was cancelled by the school."
          ],
          answer: 0,
          tests: "subjunctive after me gusta que"
        }
      ]
    },
    en: {
      title: "Unirse a una jornada comunitaria en Glasgow",
      situation:
        "Usted está en Glasgow y quiere sumarse a una jornada comunitaria antes del sábado. Necesita distinguir join, join in, join forces y close-knit cuando unir deja de ser sólo pegar cosas.",
      setting: {
        who: "Teresa coordina el grupo del barrio y sabe qué tareas faltan. Alejandro es nuevo por unas semanas y quiere ayudar sin actuar como jefe.",
        what: "Una conversación de inscripción: entrar a un grupo, unir esfuerzos, mantener unida a la gente y usar close-knit para elogiar una familia.",
        when: "Jueves por la tarde, dos días antes de la jornada, cuando los vecinos confirman guantes y bolsas.",
        where: "Glasgow, cerca de un canal del barrio, en una reunión comunitaria que ocurre en inglés.",
        why: "Porque el inglés usa “join” para unirse a un grupo, “join forces” para colaborar y “close-knit” para una familia muy unida."
      },
      address: {
        form: "mixed",
        who: "Teresa y Alejandro no se conocen bien. En inglés ambos usan “you”; la cortesía se arma con preguntas completas.",
        why: "El inglés no tiene usted. “Can I still join?” es respetuoso porque pide permiso sin imponer presencia.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Para sonar más cercano, puede usar el nombre propio y una oferta concreta de ayuda."
      },
      dialogue: [
        {
          speaker: "Alejandro",
          target: "Teresa, can I still join Saturday's cleanup?",
          translation: "Doña Teresa, ¿todavía me puedo unir a la jornada del sábado?",
          pronunciation: "te-RE-sa, kan ai stil yoin SA-tur-deiz KLIN-ap",
          literal: "Teresa, ¿puedo todavía unirme a la limpieza del sábado?",
          why: "“Join” traduce “unirse a” cuando alguien entra a un grupo o actividad que ya existe."
        },
        {
          speaker: "Teresa",
          target: "Of course. If you join, you help us join forces with the school.",
          translation: "Claro que sí. Si se une, nos ayuda a unir fuerzas con la escuela.",
          pronunciation: "ov kors. if yu yoin, yu jelp as yoin FOR-ses uid da skul",
          literal: "Por supuesto. Si se une, nos ayuda a unir fuerzas con la escuela.",
          why: "“Join forces” no significa pegar fuerzas físicamente. Significa colaborar para una meta compartida."
        },
        {
          speaker: "Alejandro",
          target: "I like seeing the neighbourhood come together without waiting for outsiders.",
          translation: "Me gusta ver que el barrio se una sin esperar a que venga alguien de afuera.",
          pronunciation: "ai laik SI-ing da NEI-bor-jud kom tu-GE-der wi-DAUT UEI-ting for aut-SAI-ders",
          literal: "Me gusta ver al barrio venir junto sin esperar a externos.",
          why: "“Come together” es una forma natural de hablar de comunidad que se une. No siempre hace falta repetir “join.”"
        },
        {
          speaker: "Teresa",
          target: "That keeps people close-knit, even when they disagree.",
          translation: "Eso mantiene a la gente unida, aunque no estén de acuerdo.",
          pronunciation: "dat kips PI-pol klous nit, I-ven uen dei dis-a-GRI",
          literal: "Eso mantiene a la gente tejida cerca, incluso cuando no están de acuerdo.",
          why: "“Close-knit” es el adjetivo para una familia o comunidad muy unida. La imagen es tejido apretado, no silencio perfecto."
        },
        {
          speaker: "Alejandro",
          target: "My family is like that: close-knit, but we argue about the bags.",
          translation: "Mi familia es así: muy unida, pero discutimos hasta por las bolsas.",
          pronunciation: "mai FA-mi-li iz laik dat: klous nit, bot ui AR-giu a-BAUT da bags",
          literal: "Mi familia es así: tejida cerca, pero discutimos por las bolsas.",
          why: "“Close-knit” permite elogiar la cercanía sin fingir que nadie pelea. Es una traducción más natural que “very united family” en este contexto."
        },
        {
          speaker: "Teresa",
          target: "Then you're in: on Saturday we all join in early and get started.",
          translation: "Entonces queda invitado: el sábado nos unimos temprano y arrancamos.",
          pronunciation: "den yor in: on SA-tur-dei ui ol yoin in ER-li and get STAR-ted",
          literal: "Entonces está dentro: el sábado todos nos unimos temprano y empezamos.",
          why: "“Join in” enfatiza participar en la actividad. “You're in” confirma que ya tiene lugar en el plan."
        }
      ],
      vocabulary: [
        {
          term: "join",
          explanation:
            "Unirse a un grupo, actividad o plan. También puede unir objetos, pero aquí importa entrar a una acción colectiva.",
          literal: "unirse / unir",
          useWhen:
            "Usted entra a un grupo, equipo, jornada, clase, llamada o causa.",
          avoidWhen:
            "Quiere describir una familia cercana. Ahí “close-knit” suele sonar mejor que “united.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["join in", "join forces", "come together", "take part"],
          example: {
            target: "Can I still join the cleanup?",
            translation: "¿Todavía me puedo unir a la jornada?"
          }
        },
        {
          term: "join forces",
          explanation:
            "Unir fuerzas. Es colaborar entre personas o grupos que aportan recursos distintos.",
          literal: "unir fuerzas",
          useWhen:
            "Escuela, vecinos, familia o equipos trabajan por una meta común.",
          avoidWhen:
            "Sólo una persona hace una tarea privada. La frase espera cooperación.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["work together", "team up", "combine efforts", "collaborate"],
          example: {
            target: "We can join forces with the school.",
            translation: "Podemos unir fuerzas con la escuela."
          }
        },
        {
          term: "come together",
          explanation:
            "Unirse o juntarse como comunidad. Suena más natural que repetir “join” cuando habla de un barrio entero.",
          literal: "venir junto",
          useWhen:
            "Personas dispersas actúan como grupo por una causa o momento compartido.",
          avoidWhen:
            "Necesita inscribirse formalmente a una actividad. Entonces “join” es más directo.",
          register: "neutral conversational",
          region: "Inglés universal.",
          related: ["gather", "unite", "pull together", "show up"],
          example: {
            target: "The neighbourhood came together.",
            translation: "El barrio se unió."
          }
        },
        {
          term: "close-knit",
          explanation:
            "Muy unido, especialmente para familias o comunidades. La palabra sugiere lazos apretados y apoyo mutuo.",
          literal: "tejido cerca",
          useWhen:
            "Elogia una familia, barrio, equipo o grupo que se cuida aunque discuta.",
          avoidWhen:
            "Habla de unir objetos físicos. Ahí use “joined,” “connected” o el verbo concreto.",
          register: "warm neutral",
          region: "Inglés universal.",
          related: ["close", "supportive", "tight-knit", "united"],
          example: {
            target: "My family is close-knit.",
            translation: "Mi familia es muy unida."
          }
        },
        {
          term: "disagree",
          explanation:
            "No estar de acuerdo. Sirve para mostrar que unidad no significa pensar igual.",
          literal: "desacordar",
          useWhen:
            "Personas mantienen relación o cooperación aunque tengan opiniones distintas.",
          avoidWhen:
            "La diferencia ya se volvió pelea abierta. Entonces “argue” puede ser más exacto.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["argue", "see it differently", "not agree", "debate"],
          example: {
            target: "Even when they disagree.",
            translation: "Aunque no estén de acuerdo."
          }
        },
        {
          term: "you're in",
          explanation:
            "Queda invitado o queda dentro del plan. Confirma que la persona ya participa.",
          literal: "usted está adentro",
          useWhen:
            "Alguien pidió sumarse y usted le confirma el cupo de manera informal.",
          avoidWhen:
            "Un documento formal. Ahí escriba “you are registered” o “your place is confirmed.”",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["you're included", "your spot is confirmed", "welcome aboard", "count you in"],
          example: {
            target: "Then you're in.",
            translation: "Entonces queda invitado."
          }
        },
        {
          term: "join in",
          explanation:
            "Participar en una actividad que ya está ocurriendo o va a empezar.",
          literal: "unirse dentro",
          useWhen:
            "La acción colectiva ya tiene ritmo: cantar, limpiar, jugar, conversar, trabajar.",
          avoidWhen:
            "Habla de hacerse miembro formal de una organización. “Join” solo puede bastar.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["take part", "pitch in", "participate", "get involved"],
          example: {
            target: "We all join in early.",
            translation: "Nos unimos temprano."
          }
        }
      ],
      note:
        "Para unir, el inglés ofrece varias piezas. “Join” sirve para entrar a un grupo; “join forces” para colaborar; “come together” para una comunidad que se une; y “close-knit” para una familia muy unida. “United” existe, pero no siempre suena como el cumplido familiar que usted quiere.",
      culture: [
        {
          label: "Join pide permiso",
          body:
            "“Can I join?” reconoce que el grupo ya existe. Suena mejor que llegar mandando cuando la actividad comunitaria tiene coordinadores."
        },
        {
          label: "Close-knit no borra discusiones",
          body:
            "Una familia close-knit puede discutir mucho. El elogio está en que se cuidan y aparecen cuando hace falta."
        },
        {
          label: "Join in es participación",
          body:
            "“Join in” se enfoca en meterse a la acción. No siempre implica membresía; puede ser una canción, una limpieza o una conversación."
        }
      ],
      pitfalls: [
        {
          mistake: "“I want to unite to the cleanup.”",
          whyItFails:
            "Calca “unirme a.” Para actividades y grupos, el inglés cotidiano usa “join.”",
          sayInstead: "I want to join the cleanup."
        },
        {
          mistake: "“My family is very united.”",
          whyItFails:
            "Se entiende, pero como cumplido familiar suele sonar menos natural que “close-knit.”",
          sayInstead: "My family is close-knit."
        },
        {
          mistake: "“Join powers with the school.”",
          whyItFails:
            "La frase fija es “join forces.” “Powers” cambia el sentido y suena traducido.",
          sayInstead: "Join forces with the school."
        }
      ],
      variations: [
        {
          form: "Can I still join the cleanup?",
          register: "polite practical",
          region: "Inglés universal",
          whenToUse: "Pedir entrada a una actividad ya organizada."
        },
        {
          form: "Let's join forces with the school.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Dos grupos colaboran hacia una meta."
        },
        {
          form: "The neighbourhood came together.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "La comunidad actuó como grupo."
        },
        {
          form: "My family is close-knit.",
          register: "warm neutral",
          region: "Inglés universal",
          whenToUse: "Elogiar una familia muy unida."
        }
      ],
      prompt: "Teresa says “if you join, you help us join forces.” ¿Qué papel toma Alejandro?",
      choices: [
        "Se suma a un esfuerzo comunitario existente.",
        "Separa dos grupos antes del almuerzo.",
        "Pesa cada bolsa en el mercado."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase sirve para unirse a una jornada?",
          choices: [
            "I want to join the cleanup.",
            "I want to weigh the cleanup.",
            "I want to separate the cleanup."
          ],
          answer: 0,
          tests: "join for unirse a"
        },
        {
          prompt: "¿Cuál frase traduce “unir fuerzas”?",
          choices: [
            "Join forces with the school.",
            "Weigh forces with the school.",
            "Smile forces with the school."
          ],
          answer: 0,
          tests: "join forces"
        },
        {
          prompt: "¿Cuál frase elogia a una familia unida?",
          choices: [
            "My family is close-knit.",
            "My family is high-weight.",
            "My family is split apart."
          ],
          answer: 0,
          tests: "close-knit as warm adjective"
        },
        {
          prompt: "¿Cuál frase enfatiza participar en la actividad?",
          choices: [
            "We all join in early.",
            "We all fall apart early.",
            "We all weigh fish early."
          ],
          answer: 0,
          tests: "join in as participation"
        }
      ]
    }
  },
  {
    id: "separating-seats-and-news-in-tumaco",
    level: "Extending · Joining and parting",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    pathways: ["extension"],
    verb: "separar",
    review: "pending",
    es: {
      title: "Separar puestos y hablar de una pareja en Tumaco",
      situation:
        "Estás en Tumaco ayudando a organizar una reunión familiar pequeña. Hay que separar puestos para los primos, separar a dos niños que pelean y hablar con cuidado de una pareja que se separó el año pasado.",
      setting: {
        who: "Elena is organizing the family gathering. Alex is helping with chairs and hears a delicate update about relatives without turning it into gossip.",
        what: "A gentle planning conversation: reserved seats, physical separation, and the everyday expression for a couple who split up.",
        when: "Saturday afternoon, before relatives arrive and before small conflicts become large ones.",
        where: "Tumaco, Nariño, in a family patio near the water, with a gathering that needs order but not ceremony.",
        why: "Because separar can mean physically separate, reserve a spot in Colombian speech, or describe a couple splitting up. Those senses are surprisingly far apart for one verb."
      },
      address: {
        form: "tú",
        who: "Elena and Alex are cousins close enough for tú, but the topic still needs tact.",
        why: "Tú lets them coordinate quickly and speak gently about family without sounding like an official notice.",
        ifYouSwitch:
          "Usted would make the cousins sound distant. Vos is not needed here; plain tú keeps the dialect general."
      },
      dialogue: [
        {
          speaker: "Elena",
          target: "Alex, separa tres puestos para los primos que llegan tarde.",
          translation: "Alex, save three seats for the cousins who are arriving late.",
          pronunciation: "AH-leks, seh-PAH-rah tres PWES-tos PAH-rah los PREE-mos keh YEH-gan TAR-deh",
          literal: "Alex, separate three seats for the cousins who arrive late.",
          why: "Here is the Colombian surprise: “separar puestos” means reserve or save seats. Nobody is pulling the chairs apart yet."
        },
        {
          speaker: "Alex",
          target: "Listo. ¿Los separo junto a tu mamá o al lado de la ventana?",
          translation: "Done. Should I reserve them next to your mom or beside the window?",
          pronunciation: "LEES-toh. los seh-PAH-roh HOON-toh ah too mah-MAH o al LAH-doh deh lah ben-TAH-nah",
          literal: "Ready. Them I-separate next to your mom or to-the side of the window?",
          why: "“Los separo” keeps the booking sense because the object is “puestos.” The context prevents the physical reading."
        },
        {
          speaker: "Elena",
          target: "Junto a mi mamá. Y separa a los niños si vuelven a pelear.",
          translation: "Next to my mom. And separate the children if they start fighting again.",
          pronunciation: "HOON-toh ah mee mah-MAH. ee seh-PAH-rah ah los NEE-nyos see BWEL-ben ah peh-LEH-ar",
          literal: "Next to my mom. And separate the children if they return to fight.",
          why: "Now “separar a los niños” is physical or social separation. The personal “a” appears because the objects are people."
        },
        {
          speaker: "Alex",
          target: "Entendido. Por cierto, ¿es verdad que Ana y Luis se separaron?",
          translation: "Understood. By the way, is it true that Ana and Luis split up?",
          pronunciation: "en-ten-DEE-doh. por SYER-toh, es ber-DAHD keh AH-nah ee luis seh seh-pah-RAH-ron",
          literal: "Understood. By certain, is truth that Ana and Luis themselves separated?",
          why: "“Se separaron” is the everyday, gentler way to say a couple split up. It does not necessarily say whether there was a legal divorce."
        },
        {
          speaker: "Elena",
          target: "Sí, se separaron el año pasado, pero siguen tratándose con respeto.",
          translation: "Yes, they separated last year, but they still treat each other respectfully.",
          pronunciation: "see, seh seh-pah-RAH-ron el AH-nyoh pah-SAH-doh, PEH-roh SEE-gen trah-TAN-doh-seh kon rres-PEH-toh",
          literal: "Yes, themselves they-separated the year past, but they-continue treating-themselves with respect.",
          why: "The verb lets Elena give the information without making the story harsher than necessary. It is family news, not a scandal."
        },
        {
          speaker: "Alex",
          target: "Entonces mejor no los sentemos pegados, para que la tarde no se ponga rara.",
          translation: "Then better we don't seat them right next to each other, so the afternoon doesn't get awkward.",
          pronunciation: "en-TON-ses meh-HOR no los sen-TEH-mos peh-GAH-dos, PAH-rah keh lah TAR-deh no seh PON-gah RRAH-rah",
          literal: "Then better not them we-seat stuck, so-that the afternoon not get strange.",
          why: "The tact is practical: separate seats can respect a separation. “Para que no se ponga” uses subjunctive for the awkwardness they want to prevent."
        }
      ],
      vocabulary: [
        {
          term: "separar",
          explanation:
            "To separate, set apart, or in Colombian booking speech, reserve a place. Context decides whether the separation is physical, social or logistical.",
          literal: "to separate",
          useWhen:
            "Moving things apart, keeping people apart, saving seats, reserving appointments, or describing a relationship ending.",
          avoidWhen:
            "You mean joining or combining. That is unir, the mirror verb in this block.",
          register: "neutral",
          region: "General Spanish; the booking sense is very common in Colombia.",
          related: ["separarse", "apartar", "reservar", "dividir"],
          example: {
            target: "Separa tres puestos.",
            translation: "Save three seats."
          }
        },
        {
          term: "separar un puesto",
          explanation:
            "To reserve or save a seat. This Colombian use surprises learners because no physical separating may be involved.",
          literal: "to separate a seat",
          useWhen:
            "You want someone to keep a seat, appointment, ticket or spot for you before others take it.",
          avoidWhen:
            "A formal hotel or airline booking. There, “reservar” may sound clearer, though Colombians still understand “separar.”",
          register: "neutral conversational",
          region: "Very common Colombian Spanish.",
          related: ["apartar un puesto", "reservar una silla", "guardar cupo", "separar una cita"],
          example: {
            target: "Separa tres puestos para los primos.",
            translation: "Save three seats for the cousins."
          }
        },
        {
          term: "separar a alguien",
          explanation:
            "To separate people physically or socially. The personal “a” marks the people being separated.",
          literal: "to separate someone",
          useWhen:
            "Children are fighting, two people need space, or a group must be divided for practical reasons.",
          avoidWhen:
            "You mean a couple ended their relationship. Then use the pronominal “se separaron.”",
          register: "neutral",
          region: "General Spanish.",
          related: ["apartar", "dividir", "poner aparte", "dar espacio"],
          example: {
            target: "Separa a los niños si vuelven a pelear.",
            translation: "Separate the children if they start fighting again."
          }
        },
        {
          term: "separarse",
          explanation:
            "For a couple to split up. It is everyday and usually gentler or broader than “divorciarse.”",
          literal: "to separate oneself",
          useWhen:
            "A couple stopped being together, whether or not there was a legal divorce.",
          avoidWhen:
            "You specifically need the legal fact of divorce. Then “divorciarse” is clearer.",
          register: "neutral careful",
          region: "General Colombian.",
          related: ["terminar", "divorciarse", "dejar la relación", "vivir aparte"],
          example: {
            target: "Ana y Luis se separaron el año pasado.",
            translation: "Ana and Luis split up last year."
          }
        },
        {
          term: "separar una cita",
          explanation:
            "To book an appointment. In Colombia, “separar” often means securing a slot rather than moving anything apart.",
          literal: "to separate an appointment",
          useWhen:
            "Clinics, salons, offices or services offer appointment slots that can be held in your name.",
          avoidWhen:
            "The listener is not Colombian and may not know the booking sense. Then “reservar” or “pedir una cita” is safer.",
          register: "neutral conversational",
          region: "Very common Colombian Spanish.",
          related: ["reservar una cita", "pedir cita", "apartar cupo", "agendar"],
          example: {
            target: "Necesito separar una cita.",
            translation: "I need to book an appointment."
          }
        },
        {
          term: "pegados",
          explanation:
            "Stuck together or right next to each other. In seating, it means too close for comfort.",
          literal: "stuck",
          useWhen:
            "People, chairs or objects are physically close, sometimes closer than the situation deserves.",
          avoidWhen:
            "You mean emotionally united. A family can be unida without being pegada.",
          register: "neutral conversational",
          region: "General Spanish.",
          related: ["juntos", "al lado", "separados", "con espacio"],
          example: {
            target: "Mejor no los sentemos pegados.",
            translation: "Better we don't seat them right next to each other."
          }
        },
        {
          term: "para que no se ponga rara",
          explanation:
            "So it does not get awkward. The subjunctive appears because the awkwardness is a possible future being avoided.",
          literal: "so that it not put itself strange",
          useWhen:
            "You arrange seating, timing or wording to prevent discomfort.",
          avoidWhen:
            "The awkwardness already happened. Then say “se puso rara” and explain how.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["para evitar incomodidad", "que no sea incómodo", "con cuidado", "sin drama"],
          example: {
            target: "Para que la tarde no se ponga rara.",
            translation: "So the afternoon doesn't get awkward."
          }
        }
      ],
      note:
        "Separar stretches in three useful directions. It can move people or things apart, it can say a couple split up with more softness than “divorciarse,” and in Colombia it can mean reserve: “separar un puesto,” “separar una cita.” That last meaning is the one that makes learners think they misheard.",
      culture: [
        {
          label: "Saving seats is not pulling them apart",
          body:
            "In Colombian Spanish, “separar puestos” can simply mean saving places for people who arrive later. The chairs may stay together; the right to sit there is what has been set aside."
        },
        {
          label: "Se separaron is tactful family language",
          body:
            "Saying a couple “se separó” gives the relevant information without forcing legal or emotional details. It is often gentler than jumping straight to divorce."
        },
        {
          label: "Seating can be emotional care",
          body:
            "At family gatherings, where people sit can protect the afternoon. Leaving space between people is not gossip; sometimes it is the quiet logistics of respect."
        }
      ],
      pitfalls: [
        {
          mistake: "Assuming “separar un puesto” means moving chairs apart",
          whyItFails:
            "In Colombia it often means reserving or saving a seat. The context is availability, not distance.",
          sayInstead: "Separé tres puestos para los primos."
        },
        {
          mistake: "Using “divorciarse” when you only know the couple split",
          whyItFails:
            "Divorce is a legal claim. “Se separaron” is broader and softer, and it may be all you actually know.",
          sayInstead: "Ana y Luis se separaron el año pasado."
        },
        {
          mistake: "Forgetting the personal “a” in “separar a los niños”",
          whyItFails:
            "The direct objects are people, so Spanish marks them with personal “a.” Without it, the sentence sounds off.",
          sayInstead: "Separa a los niños si vuelven a pelear."
        }
      ],
      variations: [
        {
          form: "Separa tres puestos para los primos.",
          register: "neutral conversational",
          region: "Very common Colombian",
          whenToUse: "Saving seats for people who will arrive later."
        },
        {
          form: "Separa a los niños si vuelven a pelear.",
          register: "neutral practical",
          region: "General Spanish",
          whenToUse: "Putting physical space between people."
        },
        {
          form: "Ana y Luis se separaron el año pasado.",
          register: "neutral careful",
          region: "General Colombian",
          whenToUse: "Speaking gently about a couple that split up."
        },
        {
          form: "Necesito separar una cita.",
          register: "neutral conversational",
          region: "Very common Colombian",
          whenToUse: "Booking an appointment or slot in Colombian Spanish."
        }
      ],
      prompt: "Elena says “separa tres puestos.” What does “separar” mean here?",
      choices: [
        "Save or reserve the seats for people arriving later.",
        "Move every chair far from the family table.",
        "Announce that a couple legally divorced today."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses the Colombian booking sense?",
          choices: [
            "Separé tres puestos para los primos.",
            "Separé a los niños que peleaban.",
            "Ana y Luis se separaron el año pasado."
          ],
          answer: 0,
          tests: "separar puestos as reserve seats"
        },
        {
          prompt: "Which sentence describes a couple splitting up?",
          choices: [
            "Separé una cita para mañana.",
            "Ana y Luis se separaron el año pasado.",
            "Separé las sillas de la ventana."
          ],
          answer: 1,
          tests: "separarse for couples"
        },
        {
          prompt: "Which sentence needs the personal “a”?",
          choices: [
            "Separa tres puestos junto a la ventana.",
            "Separa una cita para el martes.",
            "Separa a los niños si vuelven a pelear."
          ],
          answer: 2,
          tests: "personal a with people"
        },
        {
          prompt: "Which sentence shows tact about seating?",
          choices: [
            "Mejor no los sentemos pegados.",
            "Mejor pesemos el pescado otra vez.",
            "Mejor unamos fuerzas con todos."
          ],
          answer: 0,
          tests: "not seating separated people too close"
        }
      ]
    },
    en: {
      title: "Separar puestos y hablar de una pareja en Wellington",
      situation:
        "Usted ayuda a organizar una reunión familiar en Wellington. Debe save seats, separate children who are fighting, and say gently that a couple split up last year.",
      setting: {
        who: "Elena organiza la reunión familiar. Alejandro ayuda con sillas y escucha una novedad delicada sobre unos parientes sin volverla chisme.",
        what: "Una conversación práctica y cuidadosa: puestos reservados, separación física y la frase cotidiana para una pareja que terminó.",
        when: "Sábado por la tarde, antes de que lleguen los familiares y antes de que los conflictos pequeños crezcan.",
        where: "Wellington, en el patio de una casa familiar, con una reunión que necesita orden pero no ceremonia.",
        why: "Porque el inglés separa tres sentidos: “save seats,” “separate the children,” y “split up” para una pareja. “Separate an appointment” no traduce bien el uso colombiano de separar cita."
      },
      address: {
        form: "mixed",
        who: "Elena y Alejandro son primos. En inglés ambos usan “you,” y el tacto sale de verbos suaves como “split up.”",
        why: "No hay tú ni usted que escoger. Para hablar de una separación familiar, la cortesía está en no exagerar y no preguntar de más.",
        ifYouSwitch:
          "No hay pronombre alternativo. Si necesita distancia, use menos detalles y una frase más neutral."
      },
      dialogue: [
        {
          speaker: "Elena",
          target: "Alejandro, save three seats for the cousins who are arriving late.",
          translation: "Alex, separa tres puestos para los primos que llegan tarde.",
          pronunciation: "a-le-JAN-dro, seiv zri sits for da KA-zins ju ar a-RAI-ving leit",
          literal: "Alejandro, guarde tres asientos para los primos que llegan tarde.",
          why: "Para “separar puestos,” el inglés cotidiano usa “save seats” o “reserve seats.” “Separate seats” sugiere ponerlos lejos unos de otros."
        },
        {
          speaker: "Alejandro",
          target: "Done. Should I save them by your mom or by the window?",
          translation: "Listo. ¿Los separo junto a tu mamá o al lado de la ventana?",
          pronunciation: "dan. shud ai seiv dem bai yor mam or bai da WIN-dou",
          literal: "Listo. ¿Debo guardarlos junto a su mamá o junto a la ventana?",
          why: "“Save them” conserva el sentido de reservar porque el objeto son seats. El contexto manda."
        },
        {
          speaker: "Elena",
          target: "By my mom. And separate the kids if they start fighting again.",
          translation: "Junto a mi mamá. Y separa a los niños si vuelven a pelear.",
          pronunciation: "bai mai mam. and SE-pa-reit da kids if dei start FAI-ting a-GEN",
          literal: "Junto a mi mamá. Y separe a los niños si empiezan a pelear otra vez.",
          why: "Aquí “separate” sí es literal: poner distancia entre dos niños. No es reservar nada."
        },
        {
          speaker: "Alejandro",
          target: "Got it. By the way, is it true that Ana and Luis split up?",
          translation: "Entendido. Por cierto, ¿es verdad que Ana y Luis se separaron?",
          pronunciation: "gat it. bai da uei, iz it tru dat A-na and LU-is split ap",
          literal: "Entendido. A propósito, ¿es verdad que Ana y Luis se separaron?",
          why: "“Split up” es la frase cotidiana y relativamente suave para “se separaron.” No afirma por sí sola un divorcio legal."
        },
        {
          speaker: "Elena",
          target: "Yes, they split up last year, but they still treat each other with respect.",
          translation: "Sí, se separaron el año pasado, pero siguen tratándose con respeto.",
          pronunciation: "yes, dei split ap last yir, bot dei stil trit ich A-der uid ri-SPEKT",
          literal: "Sí, se separaron el año pasado, pero todavía se tratan con respeto.",
          why: "Repetir “split up” mantiene el tono sobrio. Es noticia familiar, no espectáculo."
        },
        {
          speaker: "Alejandro",
          target: "Then let's not seat them right next to each other, so the afternoon doesn't get awkward.",
          translation: "Entonces mejor no los sentemos pegados, para que la tarde no se ponga rara.",
          pronunciation: "den lets not sit dem rait nekst tu ich A-der, sou di af-ter-NUN DA-zent get AK-ward",
          literal: "Entonces no los sentemos justo al lado uno del otro, para que la tarde no se vuelva incómoda.",
          why: "“Awkward” cubre esa incomodidad social de “rara.” La frase arregla el espacio sin convertir la separación en tema central."
        }
      ],
      vocabulary: [
        {
          term: "separate",
          explanation:
            "Separar físicamente o mantener aparte. No cubre todos los usos colombianos de separar como reservar.",
          literal: "separar",
          useWhen:
            "Dos personas, grupos u objetos necesitan distancia o división.",
          avoidWhen:
            "Quiere decir apartar puestos o citas. En inglés use “save,” “reserve” o “book,” según el caso.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["split up", "save", "reserve", "keep apart"],
          example: {
            target: "Separate the kids if they start fighting.",
            translation: "Separa a los niños si vuelven a pelear."
          }
        },
        {
          term: "save seats",
          explanation:
            "Separar puestos en el sentido colombiano de guardarlos para alguien.",
          literal: "guardar asientos",
          useWhen:
            "Quiere que unas sillas o puestos queden disponibles para personas que llegan después.",
          avoidWhen:
            "Está separando sillas físicamente. Entonces “move the chairs apart” es más claro.",
          register: "neutral conversational",
          region: "Inglés universal.",
          related: ["reserve seats", "hold seats", "keep spots", "save a place"],
          example: {
            target: "Save three seats for the cousins.",
            translation: "Separa tres puestos para los primos."
          }
        },
        {
          term: "separate the kids",
          explanation:
            "Separar a los niños físicamente para que dejen de pelear o se calmen.",
          literal: "separar los niños",
          useWhen:
            "Hay pelea, ruido o necesidad de distancia real.",
          avoidWhen:
            "Habla de reservarles puestos. Ahí “save seats for the kids” cambia el sentido.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["keep them apart", "move them apart", "give them space", "break it up"],
          example: {
            target: "Separate the kids if they fight.",
            translation: "Separa a los niños si pelean."
          }
        },
        {
          term: "split up",
          explanation:
            "Separarse una pareja. Es cotidiano y normalmente más suave que “divorce.”",
          literal: "partirse hacia arriba",
          useWhen:
            "Una pareja dejó de estar junta, haya o no divorcio legal.",
          avoidWhen:
            "Necesita hablar específicamente del trámite legal. Entonces use “divorce.”",
          register: "neutral careful",
          region: "Inglés universal.",
          related: ["separate", "break up", "divorce", "live apart"],
          example: {
            target: "Ana and Luis split up last year.",
            translation: "Ana y Luis se separaron el año pasado."
          }
        },
        {
          term: "book an appointment",
          explanation:
            "Separar una cita en inglés natural. “Separate an appointment” no funciona para reservar cupo.",
          literal: "reservar una cita",
          useWhen:
            "Agenda una hora con clínica, peluquería, oficina o servicio.",
          avoidWhen:
            "Está dividiendo una cita en partes. Eso sería un contexto muy distinto.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["make an appointment", "schedule an appointment", "reserve a slot", "hold a spot"],
          example: {
            target: "I need to book an appointment.",
            translation: "Necesito separar una cita."
          }
        },
        {
          term: "right next to each other",
          explanation:
            "Pegados o justo al lado. En una mesa, marca cercanía física que puede ser incómoda.",
          literal: "justo al lado uno del otro",
          useWhen:
            "Dos personas quedan sentadas demasiado cerca para la situación.",
          avoidWhen:
            "Quiere decir unidos emocionalmente. Entonces use “close” o “close-knit.”",
          register: "neutral conversational",
          region: "Inglés universal.",
          related: ["side by side", "together", "apart", "with space"],
          example: {
            target: "Don't seat them right next to each other.",
            translation: "No los sienten pegados."
          }
        },
        {
          term: "get awkward",
          explanation:
            "Ponerse raro o incómodo. Es el cambio social que se quiere evitar con tacto.",
          literal: "volverse incómodo",
          useWhen:
            "Una conversación, tarde, mesa o situación puede tensarse.",
          avoidWhen:
            "Habla de rareza positiva o curiosa. “Awkward” casi siempre trae incomodidad social.",
          register: "neutral conversational",
          region: "Inglés universal.",
          related: ["feel tense", "be uncomfortable", "make it weird", "avoid drama"],
          example: {
            target: "So the afternoon doesn't get awkward.",
            translation: "Para que la tarde no se ponga rara."
          }
        }
      ],
      note:
        "Para separar, no traduzca todo con “separate.” Ni “separar puestos” ni “separar una cita” suelen usar “separate” en inglés: son “save seats,” “reserve seats,” “book an appointment.” Para una pareja, “split up” es cotidiano y más amplio que “divorce.”",
      culture: [
        {
          label: "Save seats evita el falso amigo",
          body:
            "Si usted dice “separate seats,” muchos oyentes piensan en sillas alejadas, no reservadas. El objeto y el contexto cambian el verbo."
        },
        {
          label: "Split up suaviza la noticia",
          body:
            "“Ana and Luis split up” permite contar el cambio sin entrar en papeles, culpables ni detalles. Es una frase útil para tacto familiar."
        },
        {
          label: "Awkward nombra lo social",
          body:
            "El inglés usa “awkward” para esa incomodidad que todos sienten y nadie quiere explicar demasiado. Es perfecto para planes de mesa."
        }
      ],
      pitfalls: [
        {
          mistake: "“Separate three seats for my cousins.”",
          whyItFails:
            "Suena como poner los asientos lejos unos de otros. Para el separar colombiano de guardar cupo, use “save” o “reserve.”",
          sayInstead: "Save three seats for my cousins."
        },
        {
          mistake: "“They divorced last year” when you only know they separated.",
          whyItFails:
            "“Divorced” afirma un hecho legal. Si sólo sabe que la pareja ya no está junta, “split up” es más prudente.",
          sayInstead: "They split up last year."
        },
        {
          mistake: "“I need to separate an appointment.”",
          whyItFails:
            "Calca “separar una cita.” En inglés, las citas se book, make o schedule.",
          sayInstead: "I need to book an appointment."
        }
      ],
      variations: [
        {
          form: "Save three seats for the cousins.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Separar puestos en el sentido colombiano de reservarlos."
        },
        {
          form: "Separate the kids if they start fighting.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Poner distancia física entre personas."
        },
        {
          form: "Ana and Luis split up last year.",
          register: "neutral careful",
          region: "Inglés universal",
          whenToUse: "Hablar con suavidad de una pareja que se separó."
        },
        {
          form: "I need to book an appointment.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Traducir separar una cita sin falso amigo."
        }
      ],
      prompt: "Elena says “save three seats,” not “separate three seats.” ¿Por qué?",
      choices: [
        "Because the Colombian meaning is reserving seats, not moving them apart.",
        "Because the children are already fighting beside the window.",
        "Because the couple legally divorced that afternoon."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase traduce “separa tres puestos”?",
          choices: [
            "Save three seats for the cousins.",
            "Separate three chairs far apart.",
            "Split up three married cousins."
          ],
          answer: 0,
          tests: "save seats for booking sense"
        },
        {
          prompt: "¿Cuál frase traduce mejor “se separaron” sin afirmar divorcio?",
          choices: [
            "They weighed each other.",
            "They split up last year.",
            "They saved three seats."
          ],
          answer: 1,
          tests: "split up as gentler couple separation"
        },
        {
          prompt: "¿Cuál frase sirve para una cita médica?",
          choices: [
            "I need to separate an appointment.",
            "I need to unite an appointment.",
            "I need to book an appointment."
          ],
          answer: 2,
          tests: "book an appointment"
        },
        {
          prompt: "¿Cuál frase evita sentarlos pegados?",
          choices: [
            "Don't seat them right next to each other.",
            "Don't weigh them beside the market scale.",
            "Don't join forces with the cousins."
          ],
          answer: 0,
          tests: "right next to each other for pegados"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/66-extending-joining-and-parting.js");
