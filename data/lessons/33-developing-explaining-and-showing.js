/*
 * Lesson block: developing / explaining, showing and describing.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Every lesson spines on exactly one verb from data/curriculum.js, named in its
 * `verb` field so the coverage report can prove the curriculum is actually
 * taught rather than merely listed.
 *
 * The two directions are mirrors: same number of dialogue turns, same number of
 * vocabulary entries, same number of culture notes, pitfalls, variations and
 * practice questions, and the same optional slots filled on the same rows.
 */
lessons.push(
  {
    id: "explicar-el-desvio-en-neiva",
    level: "Developing · Making yourself understood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "explicar",
    review: "pending",
    es: {
      title: "Explaining the detour in Neiva",
      situation:
        "You are in Neiva with a coworker who does not understand why the route changed near the malecón. You did talk with the driver, so you have to explain the detour, repeat the essential point without sounding impatient, and then say that you already explained it to someone else.",
      setting: {
        who: "Camila is a Colombian coworker who knows Neiva better than Alex but missed the driver's announcement. Alex understood enough of the route change to help, but needs to make the explanation clear.",
        what: "A short but layered explanation of a detour, the stop they need, and who has already been told.",
        when: "Early evening, just after a heavy shower has slowed traffic by the Magdalena river.",
        where: "Neiva, near the riverfront and a bus stop where a temporary detour has confused several passengers.",
        why: "Because explicar is not just “say again.” It normally points the explanation at someone with an indirect object: explícame, te explico, le expliqué. That small pronoun is the grammar that makes the help land."
      },
      address: {
        form: "tú",
        who: "Camila and Alex use tú because they are coworkers of the same age traveling together after a workshop.",
        why: "The exchange is practical but not formal. Tú lets Camila ask for help without sounding like a customer, and lets Alex explain without turning into a clerk.",
        ifYouSwitch:
          "Usted would be polite but colder between these two. Vos is heard in parts of Colombia, but Neiva does not need it here; a plain tú keeps the lesson general and believable."
      },
      dialogue: [
        {
          speaker: "Camila",
          target: "Alex, explícame otra vez por qué no podemos bajarnos aquí.",
          translation: "Alex, explain to me again why we can't get off here.",
          pronunciation: "AH-leks, eks-PLEE-kah-meh OH-trah bes por keh no poh-DEH-mos bah-HAR-nos ah-KEE",
          literal: "Alex, explain-to-me another time why not we-can get-down ourselves here.",
          why: "“Explícame” has the indirect object built in: explain it to me. Without me, the sentence loses the person who needs the explanation."
        },
        {
          speaker: "Alex",
          target: "Te explico: por la lluvia cerraron la vía del malecón y el bus da la vuelta.",
          translation: "I'll explain: because of the rain they closed the riverfront road and the bus goes around.",
          pronunciation: "teh eks-PLEE-koh: por lah YOO-byah seh-RRAH-ron lah BEE-ah del mah-leh-KON ee el boos dah lah BWEL-tah",
          literal: "To-you I-explain: because-of the rain they-closed the road of-the riverfront and the bus gives the turn.",
          why: "“Te explico” is a conversational signpost. It tells Camila that Alex is not just adding details; he is organizing the cause and consequence for her."
        },
        {
          speaker: "Camila",
          target: "Ah, ya. Entonces explícame cuál parada nos deja más cerca.",
          translation: "Ah, okay. Then explain which stop leaves us closer.",
          pronunciation: "ah, yah. en-TON-ses eks-PLEE-kah-meh kwal pah-RAH-dah nos DEH-hah mas SER-kah",
          literal: "Ah, already. Then explain-to-me which stop leaves us more near.",
          why: "The second explícame asks for a decision, not a dictionary definition. Real explanations often move from why something happened to what to do next."
        },
        {
          speaker: "Alex",
          target: "La del puente. El conductor me explicó que desde ahí caminamos cinco minutos.",
          translation: "The bridge one. The driver explained to me that from there we walk five minutes.",
          pronunciation: "lah del PWEN-teh. el kon-dook-TOR meh eks-plee-KOH keh des-deh ah-EE kah-mee-NAH-mos SEEN-koh mee-NOO-tos",
          literal: "The one of-the bridge. The driver to-me explained that from there we-walk five minutes.",
          why: "“Me explicó” keeps the chain of information honest: Alex is passing on what the driver explained to him, not inventing the route."
        },
        {
          speaker: "Camila",
          target: "¿Y a Paula ya le explicaste, o todavía está esperando en la otra esquina?",
          translation: "And did you already explain it to Paula, or is she still waiting on the other corner?",
          pronunciation: "ee ah PAW-lah yah leh eks-plee-KAS-teh, oh toh-dah-BEE-ah es-TAH es-peh-RAN-doh en lah OH-trah es-KEE-nah",
          literal: "And to Paula already to-her you-explained, or still she-is waiting on the other corner?",
          why: "Spanish often says both the named person and the pronoun: “a Paula le explicaste.” That doubling sounds natural, not redundant."
        },
        {
          speaker: "Alex",
          target: "Sí, se lo expliqué por audio, pero se lo resumo cuando llegue.",
          translation: "Yes, I explained it to her by voice note, but I'll summarize it when she arrives.",
          pronunciation: "see, seh loh eks-plee-KEH por OW-dyoh, PEH-roh seh loh rreh-SOO-moh KWAN-doh YEH-geh",
          literal: "Yes, to-her it I-explained by audio, but to-her it I-summarize when she-arrives.",
          why: "“Expliqué” shows the c to qu spelling change before é. The sound stays hard; the spelling changes so Spanish can keep that sound."
        }
      ],
      vocabulary: [
        {
          term: "explicar",
          explanation:
            "To explain: to make a reason, instruction or situation understandable to someone.",
          literal: "to explain",
          useWhen:
            "You are walking someone through why something happened, how a route works, or what a next step means.",
          avoidWhen:
            "You only mean “say” or “tell.” Explicar implies structure and understanding, not just delivering words.",
          register: "neutral",
          region: "General Spanish; very common in Colombian service, school and family talk.",
          related: ["aclarar", "resumir", "detallar", "orientar"],
          example: {
            target: "Te explico el desvío.",
            translation: "I'll explain the detour to you."
          }
        },
        {
          term: "explícame",
          explanation:
            "The tú command “explain to me.” The me is not decoration; it names who needs the explanation.",
          literal: "explain-to-me",
          useWhen:
            "Asking a friend or peer to walk you through something you missed or did not understand.",
          avoidWhen:
            "Using it with usted. In a formal exchange you would say explíqueme, with the extra syllable.",
          register: "friendly direct",
          region: "General Spanish.",
          related: ["explíqueme", "cuéntame", "aclárame", "repíteme"],
          example: {
            target: "Explícame cuál parada nos sirve.",
            translation: "Explain which stop works for us."
          }
        },
        {
          term: "te explico",
          explanation:
            "A useful signpost meaning “let me explain” or “I'll explain it to you.”",
          literal: "to-you I-explain",
          useWhen:
            "Before giving an organized reason, especially when the other person is confused or worried.",
          avoidWhen:
            "Using it to shut someone down. Tone matters; “te explico” can sound helpful or patronizing depending on delivery.",
          register: "conversational",
          region: "General Colombian.",
          related: ["mira", "la cosa es que", "para que entiendas", "en resumen"],
          example: {
            target: "Te explico: cerraron la vía.",
            translation: "Let me explain: they closed the road."
          }
        },
        {
          term: "le expliqué a Paula",
          explanation:
            "The le plus a named person pattern: I explained it to Paula.",
          literal: "to-her I-explained to Paula",
          useWhen:
            "Making clear who received the explanation, especially when several people are involved.",
          avoidWhen:
            "Dropping le because English would not repeat it. Spanish likes the pronoun even when the person is named.",
          register: "neutral",
          region: "General Spanish.",
          related: ["le dije a Paula", "le conté a Paula", "se lo expliqué", "a Paula le quedó claro"],
          example: {
            target: "Ya le expliqué a Paula.",
            translation: "I already explained it to Paula."
          }
        },
        {
          term: "expliqué",
          explanation:
            "The preterite “I explained,” with c changing to qu before é to keep the hard k sound.",
          literal: "I explained",
          useWhen:
            "Saying you already explained something at a finished point in the past.",
          avoidWhen:
            "Writing explicé. The sound would soften, so Spanish protects it with qu.",
          register: "neutral",
          region: "General Spanish spelling.",
          related: ["busqué", "toqué", "saqué", "marqué"],
          example: {
            target: "Se lo expliqué por audio.",
            translation: "I explained it to her by voice note."
          }
        },
        {
          term: "desvío",
          explanation:
            "A detour or route change, the kind that creates exactly the need for an explanation.",
          literal: "deviation",
          useWhen:
            "Roads, buses, taxis or walking routes are temporarily not following the normal path.",
          avoidWhen:
            "Using it for a small personal change of plan with no route involved. There cambio may be enough.",
          register: "neutral",
          region: "General Spanish.",
          related: ["ruta alterna", "trancón", "obra", "cierre"],
          example: {
            target: "Te explico el desvío.",
            translation: "I'll explain the detour to you."
          }
        },
        {
          term: "se lo resumo",
          explanation:
            "“I'll summarize it for him/her/you.” It is what you do when the full explanation already happened once.",
          literal: "to-them it I-summarize",
          useWhen:
            "Someone arrives late and needs the usable version, not every detail from the beginning.",
          avoidWhen:
            "Thinking se always means reflexive. Here it replaces le before lo, because “le lo” is not allowed.",
          register: "neutral",
          region: "General Spanish.",
          related: ["se lo explico", "se lo cuento", "en pocas palabras", "lo esencial"],
          example: {
            target: "Se lo resumo cuando llegue.",
            translation: "I'll summarize it for her when she arrives."
          }
        }
      ],
      note:
        "Explicar is a social verb as much as a thinking verb. Colombian Spanish usually makes you say who the explanation is for: explícame, te explico, le expliqué a Paula, se lo expliqué. If you leave the person out, the sentence can still be grammatical, but it feels less anchored. The spelling also matters: expliqué takes qu so the hard sound survives before é.",
      culture: [
        {
          label: "Explaining is often relational",
          body:
            "A Colombian “te explico” can be generous: someone pauses the rush and puts the situation in order for you. It can also sound condescending if the tone says “you clearly don't understand.” The words are neutral; the relationship and timing decide how they land."
        },
        {
          label: "Neiva needs no invented dialect",
          body:
            "This scene is in Neiva because everyday Colombian Spanish happens outside the big two cities too. The language here is deliberately general: a route change, a riverfront, a bus stop and people helping each other make sense anywhere in the country."
        },
        {
          label: "The pronoun carries responsibility",
          body:
            "“Le expliqué a Paula” does more than name Paula. It marks that Alex took responsibility for making the information reach her. That is why the pronoun is not filler; it is part of the little social contract of explaining."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “explica me” as two words",
          whyItFails:
            "With an affirmative command, the object pronoun attaches to the verb. Splitting it makes the command look unfinished.",
          sayInstead: "Explícame otra vez."
        },
        {
          mistake: "Writing “explicé” for “I explained”",
          whyItFails:
            "Before é, c would change sound. Spanish writes qu to keep the hard sound of explicar.",
          sayInstead: "Expliqué el desvío."
        },
        {
          mistake: "Dropping le in “a Paula le expliqué”",
          whyItFails:
            "English does not double the object, but Spanish commonly does. Without le, the sentence may sound clipped or less natural.",
          sayInstead: "A Paula ya le expliqué."
        }
      ],
      variations: [
        {
          form: "Te explico el desvío.",
          register: "friendly practical",
          region: "General Colombian",
          whenToUse: "Offering to make a confusing route or change clear."
        },
        {
          form: "Explícame otra vez cuál parada nos sirve.",
          register: "friendly direct",
          region: "General Spanish",
          whenToUse: "Asking a peer to walk you through the useful decision."
        },
        {
          form: "Ya le expliqué a Paula.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Reporting that a named person has already received the explanation."
        },
        {
          form: "Se lo expliqué por audio.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "Saying the full explanation was sent or given through a voice note."
        }
      ],
      prompt: "Alex says “se lo expliqué por audio.” What is the grammar doing?",
      choices: [
        "It marks both the person who got the explanation and the thing explained.",
        "It says Alex explained the route only to himself and not to Paula.",
        "It avoids the past tense because explicar cannot describe finished actions."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence correctly asks a friend to explain it again?",
          choices: [
            "Explícame otra vez por qué cambia la ruta.",
            "Explica me otra vez por qué cambia la ruta.",
            "Explícalo a mí otra vez por qué cambia la ruta."
          ],
          answer: 0,
          tests: "attached indirect object in the tú command"
        },
        {
          prompt: "Which spelling is correct for “I explained it yesterday”?",
          choices: [
            "Lo explicé ayer en la reunión.",
            "Lo expliqué ayer en la reunión.",
            "Lo explicí ayer en la reunión."
          ],
          answer: 1,
          tests: "c to qu spelling change before é"
        },
        {
          prompt: "Which line sounds most natural when Paula is named?",
          choices: [
            "A Paula expliqué ya el desvío.",
            "Paula expliqué ya el desvío.",
            "A Paula ya le expliqué el desvío."
          ],
          answer: 2,
          tests: "le with a named indirect object"
        },
        {
          prompt: "What does “te explico” signal before Alex gives details?",
          choices: [
            "He is organizing the reason for Camila.",
            "He is refusing to answer Camila.",
            "He is asking Camila for directions."
          ],
          answer: 0,
          tests: "te explico as a conversational signpost"
        }
      ]
    },
    en: {
      title: "Explicar el desvío en Neiva",
      situation:
        "Usted está en Glasgow con una compañera que no entendió por qué cambió la ruta del bus. Usted sí oyó al conductor y necesita explicar el desvío en inglés: decir explain to me, explain it to her, y no calcar el orden del español.",
      setting: {
        who: "Camila es una colega colombiana que conoce mejor la ciudad pero no alcanzó a oír el anuncio del conductor. Alex entendió lo suficiente para ayudar.",
        what: "Una explicación breve pero completa sobre un desvío, la parada correcta y quién ya recibió la información.",
        when: "Al comienzo de la noche, después de una lluvia fuerte que volvió lento el tráfico.",
        where: "Glasgow, cerca de una parada de bus donde una desviación temporal confundió a varios pasajeros.",
        why: "Porque explain necesita patrones distintos a explicar. En inglés se dice explain something to someone, no “explain me something,” aunque en español explícame sí pega el pronombre al verbo."
      },
      address: {
        form: "mixed",
        who: "Camila y Alex usan nombres de pila y el mismo “you”; la confianza sale de “can you” y de la urgencia compartida.",
        why: "El inglés no tiene tú ni usted. La cortesía y cercanía dependen del orden de la frase, please si hace falta, y un tono que no suene a regaño.",
        ifYouSwitch:
          "No hay pronombre que cambiar. El error real sería traducir la gramática española y decir “explain me,” que en inglés cambia el patrón."
      },
      dialogue: [
        {
          speaker: "Camila",
          target: "Alex, explain to me again why we can't get off here.",
          translation: "Alex, explícame otra vez por qué no podemos bajarnos aquí.",
          pronunciation: "A-leks, eks-PLEIN tu mi a-GEN wai ui kant get of jir",
          literal: "Alex, explica a mí otra vez por qué no podemos bajar aquí.",
          why: "El patrón correcto es explain to me. Muchos hispanohablantes dicen “explain me” porque explícame lo permite en español, pero en inglés ese objeto directo no funciona así."
        },
        {
          speaker: "Alex",
          target: "Let me explain: because of the rain, they closed the river road.",
          translation: "Te explico: por la lluvia cerraron la vía del río.",
          pronunciation: "let mi eks-PLEIN: bi-KOZ ov da rein, dei klouzd da RI-ver roud",
          literal: "Déjame explicar: por la lluvia, ellos cerraron la vía del río.",
          why: "Let me explain es la señal conversacional más natural. No promete una conferencia; promete poner orden antes de dar el dato útil."
        },
        {
          speaker: "Camila",
          target: "Okay, then explain which stop gets us closest.",
          translation: "Listo, entonces explica cuál parada nos deja más cerca.",
          pronunciation: "ou-KEI, den eks-PLEIN wich stap gets as KLOU-sest",
          literal: "Bien, entonces explica cuál parada nos pone más cerca.",
          why: "Aquí explain introduce una pregunta indirecta: which stop gets us closest. No se necesita “to me” otra vez porque ya está claro quién necesita la explicación."
        },
        {
          speaker: "Alex",
          target: "The bridge stop. The driver explained to me that it's a five-minute walk.",
          translation: "La parada del puente. El conductor me explicó que son cinco minutos caminando.",
          pronunciation: "da brij stap. da DRAI-ver eks-PLEIND tu mi dat its a faiv MI-nit wok",
          literal: "La parada del puente. El conductor explicó a mí que es una caminata de cinco minutos.",
          why: "De nuevo aparece to me después de explain. El inglés no pega el pronombre al verbo, pero sí necesita marcar para quién fue la explicación cuando importa."
        },
        {
          speaker: "Camila",
          target: "And did you explain it to Paula, or is she still waiting on the other corner?",
          translation: "¿Y se lo explicaste a Paula, o sigue esperando en la otra esquina?",
          pronunciation: "and did yu eks-PLEIN it tu PAU-la, or iz shi stil WEI-ting on di A-der KOR-ner",
          literal: "¿Y explicaste eso a Paula, o ella sigue esperando en la otra esquina?",
          why: "El orden natural es explain it to Paula. “Explain Paula it” no existe; “explain to Paula it” suena partido."
        },
        {
          speaker: "Alex",
          target: "Yes, I explained it to her in a voice note, but I'll summarize it when she gets here.",
          translation: "Sí, se lo expliqué por audio, pero se lo resumo cuando llegue.",
          pronunciation: "yes, ai eks-PLEIND it tu jer in a vois nout, bat ail SAM-a-raiz it wen shi gets jir",
          literal: "Sí, expliqué eso a ella en una nota de voz, pero lo resumiré cuando llegue aquí.",
          why: "Explained no cambia ortografía como expliqué; el pasado regular termina en -ed. La dificultad está más en el orden: it to her."
        }
      ],
      vocabulary: [
        {
          term: "explain",
          explanation:
            "Hacer que una razón, instrucción o situación quede clara para alguien.",
          literal: "explicar",
          useWhen:
            "Va a ordenar una causa, un proceso, una ruta o una decisión para que otra persona entienda.",
          avoidWhen:
            "Sólo quiere decir tell o say. Explain implica comprensión, no sólo transmisión de palabras.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["clarify", "summarize", "walk through", "spell out"],
          example: {
            target: "Let me explain the detour.",
            translation: "Déjeme explicar el desvío."
          }
        },
        {
          term: "explain to me",
          explanation:
            "El patrón correcto para explícame. El to es obligatorio cuando la persona es objeto indirecto.",
          literal: "explicar a mí",
          useWhen:
            "Pide que alguien le aclare algo: explain to me why, explain it to me again.",
          avoidWhen:
            "Decir “explain me.” Ese calco es uno de los errores más reconocibles del hispanohablante.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["tell me", "show me", "walk me through", "help me understand"],
          example: {
            target: "Explain to me why we can't get off here.",
            translation: "Explícame por qué no podemos bajarnos aquí."
          }
        },
        {
          term: "let me explain",
          explanation:
            "Una señal conversacional: déjeme explicarlo, déjeme ponerlo en orden.",
          literal: "déjeme explicar",
          useWhen:
            "Antes de una explicación breve que responde una confusión o una objeción.",
          avoidWhen:
            "Decirlo con tono de superioridad. La frase puede sonar amable o condescendiente según la voz.",
          register: "conversacional",
          region: "Inglés universal.",
          related: ["here's the thing", "what happened is", "in short", "to be clear"],
          example: {
            target: "Let me explain: the road is closed.",
            translation: "Te explico: la vía está cerrada."
          }
        },
        {
          term: "explain it to Paula",
          explanation:
            "El patrón explain something to someone. Primero va lo explicado; después, la persona.",
          literal: "explicar eso a Paula",
          useWhen:
            "Quiere decir quién recibió la explicación y qué fue explicado.",
          avoidWhen:
            "Decir “explain Paula it” o “explain to Paula it.” Ninguno sigue el orden natural.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["tell Paula", "send Paula the details", "walk Paula through it", "brief Paula"],
          example: {
            target: "Did you explain it to Paula?",
            translation: "¿Se lo explicaste a Paula?"
          }
        },
        {
          term: "explained",
          explanation:
            "El pasado regular de explain. No tiene cambio de raíz ni de ortografía comparable con expliqué.",
          literal: "expliqué / explicó",
          useWhen:
            "La explicación ya ocurrió: the driver explained, I explained, she explained.",
          avoidWhen:
            "Agregar una vocal española al final. Explained termina con sonido d o t según el caso, no con “ed” completo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["clarified", "said", "told", "summarized"],
          example: {
            target: "The driver explained it to me.",
            translation: "El conductor me lo explicó."
          }
        },
        {
          term: "detour",
          explanation:
            "Un desvío: una ruta temporal porque la vía normal no está disponible.",
          literal: "desvío",
          useWhen:
            "Carreteras, buses, caminatas o taxis tienen que tomar otro camino.",
          avoidWhen:
            "Usarlo para cualquier cambio de planes. Detour mantiene la idea de ruta.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["route change", "closure", "traffic", "roadwork"],
          example: {
            target: "Let me explain the detour.",
            translation: "Déjeme explicar el desvío."
          }
        },
        {
          term: "summarize it",
          explanation:
            "Resumirlo: dar la versión corta después de que la explicación completa ya existe.",
          literal: "resumirlo",
          useWhen:
            "Alguien llega tarde y necesita lo esencial, no todos los detalles.",
          avoidWhen:
            "Confundirlo con resume como sustantivo de hoja de vida. El verbo se pronuncia distinto.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["recap it", "sum it up", "give the short version", "brief someone"],
          example: {
            target: "I'll summarize it when she gets here.",
            translation: "Se lo resumo cuando llegue."
          }
        }
      ],
      note:
        "El punto crítico es el patrón: explain something to someone. En español usted puede decir explícame y pegar el me al verbo; en inglés no diga “explain me.” Diga explain it to me, explain it to Paula, the driver explained it to me. Si no hay objeto, let me explain funciona como señal antes de organizar la idea.",
      culture: [
        {
          label: "Explain puede sonar paciente o pesado",
          body:
            "Igual que “te explico,” let me explain depende del tono. Puede ser una ayuda amable o puede sonar a “usted no entiende.” En inglés, suavizar con “what happened is…” a veces evita ese aire de regaño."
        },
        {
          label: "El orden no se negocia mucho",
          body:
            "El español mueve pronombres con mucha libertad; el inglés es menos flexible aquí. Explain it to her es normal. Explain her it no lo es. Aprender el bloque completo ahorra muchos errores pequeños."
        },
        {
          label: "Voice note no es audio literal",
          body:
            "En Colombia “un audio” de WhatsApp es una palabra cotidiana. En inglés, voice note o voice message expresa mejor esa idea. “An audio” se entiende en algunos contextos, pero suena menos natural en conversación."
        }
      ],
      pitfalls: [
        {
          mistake: "“Explain me again.”",
          whyItFails:
            "Es el calco directo de explícame. En inglés la persona va con to: explain to me, explain it to me.",
          sayInstead: "Explain it to me again."
        },
        {
          mistake: "“I explained Paula the detour.”",
          whyItFails:
            "Con explain, Paula no va directamente después del verbo. El patrón es explain the detour to Paula.",
          sayInstead: "I explained the detour to Paula."
        },
        {
          mistake: "“The driver explained me the route.”",
          whyItFails:
            "Aunque otros verbos permiten doble objeto, explain no funciona así en inglés estándar.",
          sayInstead: "The driver explained the route to me."
        }
      ],
      variations: [
        {
          form: "Let me explain the detour.",
          register: "amistoso práctico",
          region: "Inglés universal",
          whenToUse: "Para ofrecer una explicación breve y organizada."
        },
        {
          form: "Explain to me why the route changed.",
          register: "amistoso directo",
          region: "Inglés universal",
          whenToUse: "Para pedirle a alguien que aclare una causa."
        },
        {
          form: "I already explained it to Paula.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Para decir que otra persona ya recibió la explicación."
        },
        {
          form: "I'll summarize it when she gets here.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Para prometer la versión corta después."
        }
      ],
      prompt: "Alex says “I explained it to her in a voice note.” ¿Cuál patrón está usando?",
      choices: [
        "Explain the thing first, then mark the person with to.",
        "Put the person directly after explain, without to.",
        "Avoid the past tense because explain cannot use -ed."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase corrige mejor “explícame otra vez”?",
          choices: [
            "Explain it to me again, please.",
            "Explain me it again, please.",
            "Explain to me it again, please."
          ],
          answer: 0,
          tests: "explain it to me como patrón correcto"
        },
        {
          prompt: "¿Cuál frase dice que Alex se lo explicó a Paula?",
          choices: [
            "Alex explained Paula the route.",
            "Alex explained the route to Paula.",
            "Alex explained to Paula the route it."
          ],
          answer: 1,
          tests: "explain something to someone"
        },
        {
          prompt: "¿Cuál frase suena natural para ofrecer una explicación?",
          choices: [
            "Let explain me the road closure.",
            "Let me the closure explain.",
            "Let me explain the closure."
          ],
          answer: 2,
          tests: "let me explain as a conversational signpost"
        },
        {
          prompt: "¿Qué significa “detour” en esta escena?",
          choices: [
            "A temporary change in the route.",
            "A summary sent by voice note.",
            "A person waiting at the stop."
          ],
          answer: 0,
          tests: "detour as desvío"
        }
      ]
    }
  },
  {
    id: "mostrar-una-mochila-en-pasto",
    level: "Developing · Making yourself understood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "mostrar",
    review: "pending",
    es: {
      title: "Showing a backpack in Pasto",
      situation:
        "You are in a small shop in Pasto looking for a sturdy backpack. The seller shows you several models, you ask her to show you the pockets, and she points out something important: in Colombia many people would say enseñar in this same scene, but mostrar is still the exact verb for putting something before your eyes.",
      setting: {
        who: "Marisol runs a small outdoor-gear shop and knows which customers want to browse and which ones need details. Jordan is choosing a backpack for a trip and wants to see pockets, straps and seams before paying.",
        what: "A shop exchange where the seller shows products physically and the customer asks to see specific features.",
        when: "Mid-afternoon, after the rain has stopped and people are coming back into the shops.",
        where: "Pasto, in a modest gear shop near the center, with no invented local slang needed for the scene to feel Colombian.",
        why: "Because mostrar overlaps honestly with enseñar in Colombian shops. “¿Me enseña ese?” is extremely natural, but mostrar is the more literal verb for displaying something so the other person can inspect it."
      },
      address: {
        form: "usted",
        who: "Marisol and Jordan use usted both ways, the normal safe choice in a shop.",
        why: "A polite service exchange in Pasto does not need intimacy. Usted lets the customer be specific without sounding demanding.",
        ifYouSwitch:
          "Tú would sound too familiar unless they already knew each other. Vos is not the frame of this shop scene; keeping usted makes the register clean."
      },
      dialogue: [
        {
          speaker: "Jordan",
          target: "Buenas. ¿Me muestra una mochila resistente para viajar al sur?",
          translation: "Hi. Could you show me a sturdy backpack for traveling south?",
          pronunciation: "BWEH-nas. meh MWEHS-trah OO-nah moh-CHEE-lah rreh-sees-TEN-teh PAH-rah byah-HAR al soor",
          literal: "Good. To-me you-show a backpack resistant for travel to-the south?",
          why: "“Me muestra” is the polite usted form, with the o to ue stem change: mostrar becomes muestra. The customer asks to see the item, not just hear about it."
        },
        {
          speaker: "Marisol",
          target: "Claro. Le muestro esta, que aguanta lluvia y tiene buena costura.",
          translation: "Of course. I'll show you this one, which handles rain and has good stitching.",
          pronunciation: "KLAH-roh. leh MWEHS-troh ES-tah, keh ah-GWAN-tah YOO-byah ee TYEH-neh BWEH-nah kos-TOO-rah",
          literal: "Clear. To-you I-show this one, that withstands rain and has good stitching.",
          why: "“Le muestro” keeps the service tone. The verb points to a physical demonstration: Marisol is putting the backpack where Jordan can inspect it."
        },
        {
          speaker: "Jordan",
          target: "¿Me muestra también los bolsillos de adentro?",
          translation: "Could you also show me the inside pockets?",
          pronunciation: "meh MWEHS-trah tam-BYEN los bol-SEE-yos deh ah-DEN-troh",
          literal: "To-me you-show also the pockets of inside?",
          why: "Mostrar works beautifully when the object is a feature: pockets, seams, labels, damage, a screen. The learner gets control of the inspection."
        },
        {
          speaker: "Marisol",
          target: "Sí, mire: este se abre completo y aquí le muestro el refuerzo.",
          translation: "Yes, look: this opens all the way and here I'll show you the reinforcement.",
          pronunciation: "see, MEE-reh: ES-teh seh AH-breh kom-PLEH-toh ee ah-KEE leh MWEHS-troh el rreh-FWER-soh",
          literal: "Yes, look: this one opens complete and here to-you I-show the reinforcement.",
          why: "Mire and muestro naturally work together. Mire directs attention; muestro supplies the thing being brought into view."
        },
        {
          speaker: "Jordan",
          target: "En otra tienda me dijeron “¿le enseño esta?” ¿Eso es lo mismo?",
          translation: "In another shop they said “shall I show you this one?” Is that the same?",
          pronunciation: "en OH-trah TYEN-dah meh dee-HEH-ron leh en-SEH-nyoh ES-tah. EH-soh es loh MEES-moh",
          literal: "In another shop to-me they-said to-you I-teach/show this one? That is the same?",
          why: "The overlap has to be taught plainly. In Colombian shops, enseñar often means show, not teach, and it is at least as ordinary as mostrar."
        },
        {
          speaker: "Marisol",
          target: "En la tienda sí. Enseñar suena normal; mostrar precisa que usted quiere verla bien.",
          translation: "In a shop, yes. Enseñar sounds normal; mostrar makes clear that you want to see it properly.",
          pronunciation: "en lah TYEN-dah see. en-seh-NYAR SWEH-nah nor-MAL; mos-TRAR preh-SEE-sah keh oos-TED KYEH-reh BER-lah byen",
          literal: "In the shop yes. To-teach/show sounds normal; to-show specifies that you want to-see-it well.",
          why: "This keeps the lesson honest while still earning mostrar its place. Enseñar is common; mostrar is the sharper verb for displaying and inspecting."
        }
      ],
      vocabulary: [
        {
          term: "mostrar",
          explanation:
            "To show by bringing something into view, pointing it out, or displaying it for inspection.",
          literal: "to show",
          useWhen:
            "You want to see an object, a detail, a screen, a mark, a route on a map or evidence of something.",
          avoidWhen:
            "Pretending enseñar never means show. In Colombia it often does, especially in shops; mostrar is simply more precise for displaying.",
          register: "neutral",
          region: "General Spanish; very natural in Colombia.",
          related: ["enseñar", "señalar", "exhibir", "ver"],
          example: {
            target: "¿Me muestra una mochila resistente?",
            translation: "Could you show me a sturdy backpack?"
          }
        },
        {
          term: "muestro / muestra",
          explanation:
            "The present-tense stem change: mostrar becomes muestro and muestra, not mostro and mostra.",
          literal: "I show / you show",
          useWhen:
            "Speaking in the present: I show you, she shows me, could you show me.",
          avoidWhen:
            "Leaving the o unchanged in stressed forms. “Me mostra” is the kind of error Colombians understand but notice.",
          register: "neutral",
          region: "General Spanish grammar.",
          related: ["muestras", "muestran", "mostramos", "mostró"],
          example: {
            target: "Le muestro esta mochila.",
            translation: "I'll show you this backpack."
          }
        },
        {
          term: "¿me muestra?",
          explanation:
            "A polite shop request: could you show me?",
          literal: "to-me you-show?",
          useWhen:
            "Asking a seller to take something out, turn it around, open it, or bring it closer.",
          avoidWhen:
            "Using tú form in a formal shop exchange. “¿Me muestras?” may be fine with a friend, not as a safe default with a seller.",
          register: "polite practical",
          region: "General Colombian.",
          related: ["¿me enseña?", "¿me deja ver?", "¿me puede mostrar?", "¿lo puedo ver?"],
          example: {
            target: "¿Me muestra los bolsillos?",
            translation: "Could you show me the pockets?"
          }
        },
        {
          term: "enseñar",
          explanation:
            "Already taught as “teach,” but in Colombian shops it very often means “show.”",
          literal: "to teach / to show",
          useWhen:
            "A seller says “¿le enseño ese?” or you ask to see an item in ordinary shop speech.",
          avoidWhen:
            "Assuming every enseñar is a formal lesson. Context decides whether it means teaching or showing.",
          register: "neutral conversational",
          region: "Very common in Colombia for shop showing.",
          related: ["mostrar", "dar clase", "explicar", "sacar"],
          example: {
            target: "¿Le enseño esta mochila?",
            translation: "Shall I show you this backpack?"
          }
        },
        {
          term: "mire",
          explanation:
            "“Look” in the usted command, often used to direct attention before showing a detail.",
          literal: "look",
          useWhen:
            "Pointing someone toward a feature, a price, a mark, a map or anything visible.",
          avoidWhen:
            "Using it as a rude “look!” Tone matters; in Colombian service speech it can be very polite.",
          register: "polite conversational",
          region: "General Colombian.",
          related: ["vea", "fíjese", "observe", "por aquí"],
          example: {
            target: "Mire, aquí le muestro el refuerzo.",
            translation: "Look, here I'll show you the reinforcement."
          }
        },
        {
          term: "refuerzo",
          explanation:
            "A reinforcement: the extra stitching, lining or support that makes something stronger.",
          literal: "reinforcement",
          useWhen:
            "Inspecting backpacks, shoes, seams, repairs or anything that should resist use.",
          avoidWhen:
            "Treating it as a vague compliment. It is a concrete feature you can point to.",
          register: "neutral",
          region: "General Spanish.",
          related: ["costura", "forro", "correa", "resistencia"],
          example: {
            target: "Aquí le muestro el refuerzo.",
            translation: "Here I'll show you the reinforcement."
          }
        },
        {
          term: "verla bien",
          explanation:
            "To see it properly, with enough time and detail to judge it.",
          literal: "to see it well",
          useWhen:
            "You need to inspect a product, not just glance at it from across the counter.",
          avoidWhen:
            "Confusing it with seeing well as eyesight. Here it means seeing the item thoroughly.",
          register: "neutral",
          region: "General Colombian.",
          related: ["revisarla", "mirarla con calma", "probarla", "detallarla"],
          example: {
            target: "Quiero verla bien antes de decidir.",
            translation: "I want to see it properly before deciding."
          }
        }
      ],
      note:
        "Mostrar earns its place by being the verb of evidence and display: show me the pocket, show me the screen, show me where the problem is. But Colombian Spanish also uses enseñar constantly in shops: “¿me enseña ese?” is not a classroom sentence. The honest distinction is not teach versus show in all cases; it is that mostrar makes the act of bringing something into view more explicit.",
      culture: [
        {
          label: "Shop Spanish overlaps with classroom Spanish",
          body:
            "A Colombian seller who says “le enseño esta” is not offering a lesson. They mean “I'll show you this one.” Textbook categories are helpful until they hide ordinary speech; this is one of those places where ordinary speech wins."
        },
        {
          label: "Mostrar is the inspection verb",
          body:
            "When you need to see a seam, a scratch, a serial number, a screen or a route on a map, mostrar is exact. It makes the visible evidence the center of the exchange, which is why it matters even though enseñar overlaps."
        },
        {
          label: "Pasto does not need decoration",
          body:
            "The scene happens in Pasto to widen the map of the course, not to turn every sentence into local color. The safest Colombian lesson is often plain accurate Spanish in a real place, with local geography doing the quiet work."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “me mostra” instead of “me muestra”",
          whyItFails:
            "Mostrar changes o to ue in stressed present forms. The usted form is muestra.",
          sayInstead: "¿Me muestra esa mochila?"
        },
        {
          mistake: "Pretending enseñar only means teach",
          whyItFails:
            "In Colombian shops, enseñar commonly means show. Ignoring that overlap trains you to misunderstand normal sellers.",
          sayInstead: "Hear “¿le enseño ese?” as “shall I show you that one?”"
        },
        {
          mistake: "Using mostrar without saying what you want to see",
          whyItFails:
            "The verb is most useful when tied to a visible object or detail. A vague “muéstreme” can sound abrupt.",
          sayInstead: "¿Me muestra los bolsillos de adentro?"
        }
      ],
      variations: [
        {
          form: "¿Me muestra esa mochila?",
          register: "polite practical",
          region: "General Colombian",
          whenToUse: "Asking a seller to show you an item."
        },
        {
          form: "Le muestro el refuerzo.",
          register: "polite service",
          region: "General Spanish",
          whenToUse: "Showing a specific feature for inspection."
        },
        {
          form: "¿Me enseña ese modelo?",
          register: "polite conversational",
          region: "Very common in Colombia",
          whenToUse: "A shop phrase that means show, not teach."
        },
        {
          form: "Quiero verla bien antes de decidir.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Making clear you need to inspect the item."
        }
      ],
      prompt: "Marisol says “Enseñar suena normal; mostrar precisa que usted quiere verla bien.” What is the honest split?",
      choices: [
        "Enseñar can mean show in shops, while mostrar focuses on displaying for inspection.",
        "Enseñar is never used for shop items, while mostrar is only for school lessons.",
        "Mostrar is rude in Colombian shops, while enseñar is required for every request."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses the correct stem-changed usted form?",
          choices: [
            "¿Me mostra esa mochila resistente?",
            "¿Me muestra esa mochila resistente?",
            "¿Me mostras esa mochila resistente?"
          ],
          answer: 1,
          tests: "mostrar changing o to ue in muestra"
        },
        {
          prompt: "A seller says “¿le enseño ese?” in a shop. What does it mean?",
          choices: [
            "She is asking whether to teach a class.",
            "She is offering to show that item.",
            "She is refusing to show the item."
          ],
          answer: 1,
          tests: "enseñar as show in Colombian shop speech"
        },
        {
          prompt: "Which line asks to inspect a specific detail?",
          choices: [
            "Quiero comprar algo bonito.",
            "Mire qué tienda tan grande.",
            "¿Me muestra los bolsillos?"
          ],
          answer: 2,
          tests: "mostrar tied to a visible feature"
        },
        {
          prompt: "What does “verla bien” mean in this exchange?",
          choices: [
            "To inspect the backpack properly.",
            "To improve Jordan's eyesight.",
            "To teach the backpack a lesson."
          ],
          answer: 0,
          tests: "verla bien as seeing the item thoroughly"
        }
      ]
    },
    en: {
      title: "Mostrar una mochila en Pasto",
      situation:
        "Usted está en una tienda pequeña de Austin buscando una mochila resistente. Necesita pedir en inglés que le muestren varios detalles, distinguir show de teach, y no olvidar que el español colombiano usa enseñar para show con mucha naturalidad en tiendas.",
      setting: {
        who: "Marisol atiende una tienda pequeña de equipo para caminar y sabe cuándo un cliente necesita mirar detalles. Jordan escoge una mochila para viajar y quiere revisar bolsillos, correas y costuras.",
        what: "Una conversación de tienda donde la vendedora muestra productos físicamente y el cliente pide ver detalles concretos.",
        when: "A media tarde, después de que paró la lluvia y la gente vuelve a entrar a las tiendas.",
        where: "Austin, en una tienda modesta de equipo al aire libre, lejos de Colombia porque esta dirección enseña inglés.",
        why: "Porque show cubre mostrar, pero teach no cubre el enseñar colombiano de tienda. En inglés, “can you teach me that backpack?” no funciona para pedir que le muestren un producto."
      },
      address: {
        form: "mixed",
        who: "Marisol y Jordan usan el mismo “you”; la cortesía se marca con can you, please y un tono tranquilo.",
        why: "El inglés no distingue usted y tú. En una tienda, la diferencia entre una petición normal y una orden seca depende de la formulación completa.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Lo que sí cambia el tono es pasar de “could you show me” a “show me that,” que puede sonar brusco."
      },
      dialogue: [
        {
          speaker: "Jordan",
          target: "Hi. Could you show me a sturdy backpack for traveling south?",
          translation: "Buenas. ¿Me muestra una mochila resistente para viajar al sur?",
          pronunciation: "jai. kud yu shou mi a STUR-di BAK-pak for TRA-ve-ling sauth",
          literal: "Hola. ¿Podría usted mostrarme una mochila resistente para viajar al sur?",
          why: "Could you show me es la forma segura en una tienda. Teach no sirve aquí, aunque enseñar sí pueda funcionar en una tienda colombiana."
        },
        {
          speaker: "Marisol",
          target: "Sure. I'll show you this one; it handles rain and has strong stitching.",
          translation: "Claro. Le muestro esta; aguanta lluvia y tiene costura fuerte.",
          pronunciation: "shur. ail shou yu dis uan; it JAN-delz rein and jaz strong STI-ching",
          literal: "Seguro. Le mostraré esta; maneja lluvia y tiene costura fuerte.",
          why: "I'll show you mantiene el foco en poner el objeto ante los ojos del cliente. Es servicio, no clase."
        },
        {
          speaker: "Jordan",
          target: "Could you also show me the inside pockets?",
          translation: "¿Me muestra también los bolsillos de adentro?",
          pronunciation: "kud yu OL-sou shou mi di in-SAID PO-kets",
          literal: "¿Podría usted también mostrarme los bolsillos interiores?",
          why: "Show me funciona muy bien con detalles visibles: pockets, seams, label, screen, damage. La frase le da control sobre qué quiere revisar."
        },
        {
          speaker: "Marisol",
          target: "Yes, look: this opens all the way, and here I'll show you the reinforcement.",
          translation: "Sí, mire: esta se abre completa y aquí le muestro el refuerzo.",
          pronunciation: "yes, luk: dis OU-penz ol da wei, and jir ail shou yu da ri-IN-fors-ment",
          literal: "Sí, mire: esta abre todo el camino, y aquí le mostraré el refuerzo.",
          why: "Look dirige la atención; show you presenta el detalle. En inglés, las dos piezas también trabajan juntas."
        },
        {
          speaker: "Jordan",
          target: "In another shop, someone said, “Can I show you this one?” Is that the same?",
          translation: "En otra tienda alguien dijo: “¿le enseño esta?” ¿Eso es lo mismo?",
          pronunciation: "in a-NA-der shap, SAM-wan sed, kan ai shou yu dis uan. iz dat da seim",
          literal: "En otra tienda, alguien dijo: ¿puedo mostrarle esta? ¿Eso es igual?",
          why: "En inglés, el vendedor sí dice show. La comparación ayuda a no traducir enseñar de tienda como teach."
        },
        {
          speaker: "Marisol",
          target: "In English, say show. Teach means giving a lesson, not displaying a backpack.",
          translation: "En inglés, diga show. Teach significa dar una clase, no mostrar una mochila.",
          pronunciation: "in ING-lish, sei shou. tich minz GI-ving a LE-son, not dis-PLEI-ing a BAK-pak",
          literal: "En inglés, diga mostrar. Enseñar significa dar una lección, no exhibir una mochila.",
          why: "Aquí la división es más estricta que en Colombia. Show muestra; teach enseña conocimiento o una habilidad."
        }
      ],
      vocabulary: [
        {
          term: "show",
          explanation:
            "Mostrar: poner algo a la vista, señalarlo o dejar que otra persona lo revise.",
          literal: "mostrar",
          useWhen:
            "Quiere ver un objeto, un detalle, una pantalla, una marca, una ruta o una prueba.",
          avoidWhen:
            "Quiere decir enseñar una materia o habilidad. Ahí el verbo es teach.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["display", "point out", "reveal", "demonstrate"],
          example: {
            target: "Could you show me this backpack?",
            translation: "¿Me muestra esta mochila?"
          }
        },
        {
          term: "show me / show you",
          explanation:
            "El patrón directo para mostrarle algo a alguien. La persona puede ir justo después de show.",
          literal: "muéstreme / le muestro",
          useWhen:
            "Pide o ofrece que algo quede visible para revisarlo.",
          avoidWhen:
            "Copiar el se lo del español. “Show it to me” también existe, pero “show me it” suena menos natural para muchos hablantes.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["show it to me", "let me see", "point it out", "walk me through"],
          example: {
            target: "I'll show you this one.",
            translation: "Le muestro esta."
          }
        },
        {
          term: "could you show me?",
          explanation:
            "Una petición amable de tienda: ¿me podría mostrar?",
          literal: "¿podría mostrarme?",
          useWhen:
            "Quiere que un vendedor saque, abra, acerque o gire un producto.",
          avoidWhen:
            "Usar “teach me” para un objeto. Teach me necesita una habilidad o conocimiento.",
          register: "cortés práctico",
          region: "Inglés universal.",
          related: ["can you show me", "could I see", "may I see", "let me look at"],
          example: {
            target: "Could you show me the inside pockets?",
            translation: "¿Me muestra los bolsillos de adentro?"
          }
        },
        {
          term: "teach",
          explanation:
            "Enseñar en el sentido de dar clase, explicar una habilidad o ayudar a aprender.",
          literal: "enseñar",
          useWhen:
            "Alguien enseña inglés, enseña a cocinar, enseña una técnica o da una lección.",
          avoidWhen:
            "Un vendedor sólo le muestra un producto. El enseñar colombiano de tienda se traduce como show.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["show", "explain", "train", "instruct"],
          example: {
            target: "Teach me how to adjust the straps.",
            translation: "Enséñeme cómo ajustar las correas."
          }
        },
        {
          term: "look",
          explanation:
            "Mire: una palabra para dirigir la atención antes de mostrar un detalle.",
          literal: "mire",
          useWhen:
            "Va a señalar una costura, una etiqueta, una pantalla o una parte importante.",
          avoidWhen:
            "Usarla con tono cortante. Look puede sonar amable o impaciente según la voz.",
          register: "conversacional",
          region: "Inglés universal.",
          related: ["see", "notice", "check this", "take a look"],
          example: {
            target: "Look, here I'll show you the reinforcement.",
            translation: "Mire, aquí le muestro el refuerzo."
          }
        },
        {
          term: "reinforcement",
          explanation:
            "El refuerzo: costura, pieza o soporte extra que hace algo más resistente.",
          literal: "refuerzo",
          useWhen:
            "Revisa maletas, zapatos, arreglos, correas o algo que debe aguantar uso.",
          avoidWhen:
            "Usarlo como elogio vago. Reinforcement es una parte concreta que se puede mostrar.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["stitching", "lining", "strap", "support"],
          example: {
            target: "Here I'll show you the reinforcement.",
            translation: "Aquí le muestro el refuerzo."
          }
        },
        {
          term: "see it properly",
          explanation:
            "Verlo bien: revisar con suficiente detalle antes de decidir.",
          literal: "verlo bien",
          useWhen:
            "Necesita inspeccionar un producto, no mirarlo de lejos.",
          avoidWhen:
            "Traducir “bien” siempre como well de una manera que sugiera vista. Properly marca revisión cuidadosa.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["inspect it", "look it over", "check it carefully", "try it out"],
          example: {
            target: "I want to see it properly before I decide.",
            translation: "Quiero verla bien antes de decidir."
          }
        }
      ],
      note:
        "Para un colombiano, la trampa es que enseñar puede significar show en una tienda: “¿me enseña ese?” Pero en inglés teach no hereda ese uso. Si quiere que le muestren una mochila, diga show me, could you show me, let me see. Reserve teach para clases, habilidades e instrucciones reales.",
      culture: [
        {
          label: "Teach no entra a la vitrina",
          body:
            "En una tienda angloparlante, “teach me that backpack” no significa “muéstreme esa mochila.” Suena como si la mochila fuera una habilidad. El verbo correcto es show, aunque su español colombiano le empuje enseñar."
        },
        {
          label: "Could you suaviza la petición",
          body:
            "Show me that one puede sonar seco si no hay confianza. Could you show me that one? hace el mismo trabajo con tono de mostrador. La cortesía vive en el auxiliar y la entonación."
        },
        {
          label: "Look puede ser amable",
          body:
            "Los hispanohablantes a veces oyen look como regaño porque en clase aparece como “¡mire!” Pero en una tienda, “look, this pocket opens fully” puede ser una guía amable de la atención."
        }
      ],
      pitfalls: [
        {
          mistake: "“Can you teach me that backpack?”",
          whyItFails:
            "Teach necesita una habilidad o conocimiento. Una mochila se muestra; no se enseña en ese sentido.",
          sayInstead: "Can you show me that backpack?"
        },
        {
          mistake: "“Show me it, please.”",
          whyItFails:
            "Algunos hablantes lo entienden, pero la forma más natural es show it to me o show me the item.",
          sayInstead: "Could you show it to me?"
        },
        {
          mistake: "“I want to see it well.”",
          whyItFails:
            "Puede sonar como un problema de vista. Para revisar un producto, properly expresa mejor verlo bien.",
          sayInstead: "I want to see it properly."
        }
      ],
      variations: [
        {
          form: "Could you show me that backpack?",
          register: "cortés práctico",
          region: "Inglés universal",
          whenToUse: "Para pedir que un vendedor le muestre un producto."
        },
        {
          form: "I'll show you the reinforcement.",
          register: "cortés de servicio",
          region: "Inglés universal",
          whenToUse: "Para mostrar un detalle específico."
        },
        {
          form: "Can you show me that model?",
          register: "cortés conversacional",
          region: "Inglés universal",
          whenToUse: "Para traducir el enseñar colombiano de tienda."
        },
        {
          form: "I want to see it properly before I decide.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Para decir que necesita revisar el producto con cuidado."
        }
      ],
      prompt: "Marisol says “In English, say show. Teach means giving a lesson.” ¿Cuál es la diferencia?",
      choices: [
        "Show is for displaying the backpack; teach is for lessons or skills.",
        "Teach is the normal shop verb; show is only for school subjects.",
        "Show sounds rude in shops; teach is required for polite requests."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase pide ver una mochila en inglés natural?",
          choices: [
            "Can you teach me that backpack?",
            "Could you show me that backpack?",
            "Could you learn me that backpack?"
          ],
          answer: 1,
          tests: "show, not teach, for displaying a product"
        },
        {
          prompt: "¿Cuál frase muestra un detalle específico?",
          choices: [
            "I'll show you the reinforcement.",
            "I'll teach you the backpack.",
            "I'll learn you the stitching."
          ],
          answer: 0,
          tests: "show you with a visible feature"
        },
        {
          prompt: "¿Cuál frase traduce mejor “quiero verla bien”?",
          choices: [
            "I want to see it with good eyes.",
            "I want to teach it before deciding.",
            "I want to see it properly."
          ],
          answer: 2,
          tests: "see it properly for inspecting an item"
        },
        {
          prompt: "¿Cuándo sí sirve teach?",
          choices: [
            "When a seller displays a backpack.",
            "When someone teaches a real skill.",
            "When a pocket opens all the way."
          ],
          answer: 1,
          tests: "teach for lessons and skills"
        }
      ]
    }
  },
  {
    id: "describir-una-pieza-en-leticia",
    level: "Developing · Making yourself understood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "neutral",
    pathways: ["foundation", "year-12"],
    verb: "describir",
    review: "pending",
    es: {
      title: "Describing a part in Leticia",
      situation:
        "In Leticia, you are trying to buy a part whose name you do not know. Instead of freezing, you describe the thing by its shape, its function, and a comparison: something for tightening a hose, like a small clamp. The lesson gives you language for getting by when you do not have the exact noun.",
      setting: {
        who: "Rosa works in a small hardware shop and is used to customers arriving with half a description instead of the exact word. Alex needs a small part for a hose but does not know its name.",
        what: "A repair-shop exchange where the customer describes an unknown object by use, shape and comparison until the seller recognizes it.",
        when: "Saturday morning, before the heat and errands make the shop crowded.",
        where: "Leticia, in a hardware shop where river weather and improvised repairs are everyday reality, but the Spanish stays general.",
        why: "Because describir is the rescue verb when vocabulary fails. A learner who can say “una cosa para…,” “como una…,” and “está descrito así” can keep the conversation alive without knowing the perfect noun."
      },
      address: {
        form: "mixed",
        who: "Alex uses usted with Rosa as the shopkeeper; Rosa answers with usted, while Alex quotes a friend's tú description from a message.",
        why: "The live shop exchange is polite and practical, but the object arrived through a friend's casual message. Mixed address reflects two relationships in one errand.",
        ifYouSwitch:
          "Using tú with Rosa would sound too familiar as a default. Using usted in the quoted friend's message would erase the closeness that produced the informal description."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Buenas. Necesito describirle una pieza porque no sé cómo se llama.",
          translation: "Hi. I need to describe a part to you because I don't know what it's called.",
          pronunciation: "BWEH-nas. neh-seh-SEE-toh des-kree-BEER-leh OO-nah PYEH-sah POR-keh no seh KO-moh seh YAH-mah",
          literal: "Good. I-need to-describe-to-you a piece because not I-know how itself is-called.",
          why: "“Describirle” attaches the indirect object: describe it to you. Alex starts by naming the communication problem instead of apologizing for it forever."
        },
        {
          speaker: "Rosa",
          target: "Descríbamela con calma: forma, tamaño y para qué sirve.",
          translation: "Describe it to me calmly: shape, size and what it's for.",
          pronunciation: "des-KREE-bah-meh-lah kon KAL-mah: FOR-mah, tah-MAH-nyoh ee PAH-rah keh SEER-beh",
          literal: "Describe-to-me-it with calm: shape, size and for what it serves.",
          why: "Rosa gives the method: form, size and function. That is exactly how you describe an object whose name you do not know."
        },
        {
          speaker: "Alex",
          target: "Es una cosa metálica para ajustar una manguera, como una abrazadera pequeña.",
          translation: "It's a metal thing for tightening a hose, like a small clamp.",
          pronunciation: "es OO-nah KOH-sah meh-TAH-lee-kah PAH-rah ah-hoos-TAR OO-nah man-GEH-rah, KO-moh OO-nah ah-brah-sah-DEH-rah peh-KEH-nyah",
          literal: "It-is a thing metallic for tightening a hose, like a clamp small.",
          why: "This is survival description: una cosa para plus an action, then como una plus a comparison. It is not elegant, but it is highly effective."
        },
        {
          speaker: "Rosa",
          target: "Ya la tengo ubicada. ¿La necesita de acero o de plástico?",
          translation: "I've got it placed now. Do you need it in steel or plastic?",
          pronunciation: "yah lah TEN-goh oo-bee-KAH-dah. lah neh-seh-SEE-tah deh ah-SEH-roh oh deh PLAS-tee-koh",
          literal: "Already it I-have located. It you-need of steel or of plastic?",
          why: "The description worked before the exact noun appeared. In real errands, that is the win: recognition matters more than vocabulary perfection."
        },
        {
          speaker: "Alex",
          target: "Mi amigo la había descrito como “la que aprieta la manguera”, pero no entendí.",
          translation: "My friend had described it as “the one that tightens the hose,” but I didn't understand.",
          pronunciation: "mee ah-MEE-goh lah ah-BEE-ah des-KREE-toh KO-moh lah keh ah-PREE-eh-tah lah man-GEH-rah, PEH-roh no en-ten-DEE",
          literal: "My friend it had described as the one that tightens the hose, but not I-understood.",
          why: "“Descrito” is the irregular participle, in the same family as escrito. “Describido” would be the tempting regular guess and the wrong one."
        },
        {
          speaker: "Rosa",
          target: "Está bien descrita. Se llama abrazadera; llévese dos por si una se pierde.",
          translation: "It's well described. It's called a clamp; take two in case one gets lost.",
          pronunciation: "es-TAH byen des-KREE-tah. seh YAH-mah ah-brah-sah-DEH-rah; YEH-beh-seh dos por see OO-nah seh PYER-deh",
          literal: "It-is well described. Itself is-called clamp; take two in case one gets lost.",
          why: "“Bien descrita” confirms that an imperfect description can be good enough. The noun comes at the end, after the object has already been understood."
        }
      ],
      vocabulary: [
        {
          term: "describir",
          explanation:
            "To describe: to put a thing, person or situation into words so someone else can recognize it.",
          literal: "to describe",
          useWhen:
            "You do not know the name, or the name alone is not enough, and you need shape, use, color, size or comparison.",
          avoidWhen:
            "You can simply name the exact object and the other person already understands. Description costs time, so use it when it solves a gap.",
          register: "neutral",
          region: "General Spanish.",
          related: ["detallar", "explicar", "comparar", "identificar"],
          example: {
            target: "Necesito describirle una pieza.",
            translation: "I need to describe a part to you."
          }
        },
        {
          term: "descríbamela",
          explanation:
            "A compact usted command: describe it to me. The object and listener both attach to the verb.",
          literal: "describe-to-me-it",
          useWhen:
            "A helpful clerk, mechanic or friend asks you to give enough detail to identify something.",
          avoidWhen:
            "Using it with tú. The tú version would be descríbemela.",
          register: "polite practical",
          region: "General Spanish.",
          related: ["descríbemela", "explíquemela", "muéstremela", "cuéntemela"],
          example: {
            target: "Descríbamela con calma.",
            translation: "Describe it to me calmly."
          }
        },
        {
          term: "una cosa para",
          explanation:
            "A useful bridge when you do not know the noun: a thing for doing something.",
          literal: "a thing for",
          useWhen:
            "You can explain the function but not the name: a thing for tightening, covering, holding, measuring.",
          avoidWhen:
            "Staying vague after it. Follow it with an action or purpose so the other person has something to work with.",
          register: "everyday resourceful",
          region: "General Colombian.",
          related: ["un aparato para", "una pieza para", "algo que sirve para", "lo que uno usa para"],
          example: {
            target: "Es una cosa para ajustar una manguera.",
            translation: "It's a thing for tightening a hose."
          }
        },
        {
          term: "como una",
          explanation:
            "“Like a…” — the comparison that often saves you when the exact word is missing.",
          literal: "like a",
          useWhen:
            "The object resembles something else enough to guide the listener.",
          avoidWhen:
            "Making the comparison too poetic. In a shop, practical beats beautiful.",
          register: "neutral",
          region: "General Spanish.",
          related: ["parecida a", "del tamaño de", "en forma de", "tipo"],
          example: {
            target: "Como una abrazadera pequeña.",
            translation: "Like a small clamp."
          }
        },
        {
          term: "descrito",
          explanation:
            "The irregular participle of describir: described. It follows the same pattern as escribir → escrito.",
          literal: "described",
          useWhen:
            "Building perfect tenses or adjective uses: the Spanish equivalents of “I have described it” and “it is well described.”",
          avoidWhen:
            "Saying describido. It is a logical guess, but not the accepted participle.",
          register: "neutral",
          region: "General Spanish grammar.",
          related: ["escrito", "inscrito", "suscrito", "descripto"],
          example: {
            target: "Está bien descrita.",
            translation: "It's well described."
          }
        },
        {
          term: "abrazadera",
          explanation:
            "A clamp, especially something that tightens or holds a hose, tube or cable.",
          literal: "hugger",
          useWhen:
            "Buying or describing a small piece that holds something tight around another thing.",
          avoidWhen:
            "Worrying if you forget the word. This lesson exists so you can describe it until someone supplies it.",
          register: "technical everyday",
          region: "General Spanish.",
          related: ["manguera", "tornillo", "ajuste", "pieza"],
          example: {
            target: "Se llama abrazadera.",
            translation: "It's called a clamp."
          }
        },
        {
          term: "para qué sirve",
          explanation:
            "What it is for, or what purpose it serves.",
          literal: "for what it serves",
          useWhen:
            "The function will identify the thing better than color or size alone.",
          avoidWhen:
            "Stopping at “es una cosa” with no function. The function is usually the clue that makes the description usable.",
          register: "neutral",
          region: "General Spanish.",
          related: ["función", "uso", "sirve para", "se usa para"],
          example: {
            target: "Descríbamela: para qué sirve.",
            translation: "Describe it to me: what it's for."
          }
        }
      ],
      note:
        "Describir is the verb that keeps a conversation alive when your vocabulary runs out. You can describe by function — “una cosa para ajustar…” — by comparison — “como una abrazadera” — and by material or size. The exact noun can arrive later. Also store the participle now: describir does not make describido; it makes descrito, like escribir makes escrito.",
      culture: [
        {
          label: "Not knowing the noun is normal",
          body:
            "Hardware shops, pharmacies and repair counters are full of people describing things they cannot name. A learner often feels embarrassed, but the clerk is usually trained by daily life to decode function, shape and comparison."
        },
        {
          label: "Function beats apology",
          body:
            "Repeating “no sé cómo se llama” does not move the errand forward. “Una cosa para ajustar una manguera” does. Colombian patience is real, but a useful clue respects the other person's time."
        },
        {
          label: "Leticia is a real everyday setting",
          body:
            "The Amazon setting matters because the course should not live only in the largest cities. The language stays general on purpose: the goal is not exotic vocabulary, but a normal repair errand in a place that belongs on the map."
        }
      ],
      pitfalls: [
        {
          mistake: "Stopping at “una cosa” with no function",
          whyItFails:
            "Una cosa is too vague by itself. The listener needs what it does, what it looks like, or what it resembles.",
          sayInstead: "Una cosa para ajustar una manguera."
        },
        {
          mistake: "Saying “describido” as the participle",
          whyItFails:
            "Describir belongs with escribir: the participle is irregular. Describido is a logical but wrong guess.",
          sayInstead: "Está bien descrito / descrita."
        },
        {
          mistake: "Trying to translate the unknown noun before describing it",
          whyItFails:
            "If you do not know the noun, forcing a dictionary guess can mislead the seller. Description is often faster.",
          sayInstead: "Descríbalo por forma, tamaño y para qué sirve."
        }
      ],
      variations: [
        {
          form: "Necesito describirle una pieza.",
          register: "polite practical",
          region: "General Spanish",
          whenToUse: "Opening a shop or repair conversation when you do not know the name."
        },
        {
          form: "Es una cosa para ajustar una manguera.",
          register: "everyday resourceful",
          region: "General Colombian",
          whenToUse: "Describing by function instead of by exact noun."
        },
        {
          form: "Es como una abrazadera pequeña.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Using comparison to help the listener recognize the object."
        },
        {
          form: "Está bien descrita.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Confirming that the description was good enough."
        }
      ],
      prompt: "Alex says “una cosa metálica para ajustar una manguera, como una abrazadera pequeña.” What strategy is he using?",
      choices: [
        "He describes the object by material, function and comparison.",
        "He refuses to describe it until Rosa guesses the exact noun.",
        "He translates the English name and ignores what the object does."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence best helps when you do not know the noun?",
          choices: [
            "Es una cosa para ajustar una manguera.",
            "Es una cosa y nada más que eso.",
            "No sé, no sé, no sé el nombre."
          ],
          answer: 0,
          tests: "describing by function instead of freezing"
        },
        {
          prompt: "Which participle is correct for describir?",
          choices: [
            "La pieza está describida.",
            "La pieza está descrita.",
            "La pieza está describiendo."
          ],
          answer: 1,
          tests: "descrito as the irregular participle"
        },
        {
          prompt: "What does “como una abrazadera pequeña” add?",
          choices: [
            "It gives a practical comparison.",
            "It gives a shop address.",
            "It gives a payment method."
          ],
          answer: 0,
          tests: "como un/una for comparison"
        },
        {
          prompt: "Which line asks for the method of description?",
          choices: [
            "¿Cuánto cuesta con tarjeta?",
            "¿A qué hora cierran hoy?",
            "Forma, tamaño y para qué sirve."
          ],
          answer: 2,
          tests: "shape, size and function as description strategy"
        }
      ]
    },
    en: {
      title: "Describir una pieza en Leticia",
      situation:
        "Usted está en una ferretería de Bristol tratando de comprar una pieza cuyo nombre no sabe en inglés. Para no quedarse bloqueado, describe la cosa por su forma, su función y una comparación: a thing you use to tighten a hose, like a small clamp.",
      setting: {
        who: "Rosa trabaja en una ferretería pequeña y está acostumbrada a clientes que llegan con media descripción en vez de la palabra exacta. Alex necesita una pieza para una manguera.",
        what: "Una conversación de reparación donde el cliente describe un objeto desconocido por uso, forma y comparación hasta que la vendedora lo reconoce.",
        when: "Un sábado por la mañana, antes de que la tienda se llene de diligencias.",
        where: "Bristol, en una ferretería de barrio, porque esta dirección enseña inglés y por eso ocurre fuera de Colombia.",
        why: "Porque describe es el verbo de rescate cuando falta vocabulario. A thing you use for, like a, made of y shaped like permiten seguir hablando hasta que aparece el sustantivo."
      },
      address: {
        form: "mixed",
        who: "Alex y Rosa usan el mismo “you”; la relación de tienda se marca con could, please y frases completas.",
        why: "El inglés no marca usted en el pronombre. En una ferretería, sonar respetuoso depende de cómo se arma la petición y no de una forma verbal distinta.",
        ifYouSwitch:
          "No hay tú ni usted que cambiar. Lo que sí sonaría raro sería pedir disculpas diez veces en vez de dar una descripción útil."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Hi. I need to describe a part because I don't know what it's called.",
          translation: "Buenas. Necesito describir una pieza porque no sé cómo se llama.",
          pronunciation: "jai. ai nid tu di-SKRAIB a part bi-KOZ ai dount nou wat its kold",
          literal: "Hola. Necesito describir una parte porque no sé cómo está llamada.",
          why: "I need to describe nombra el problema sin drama. En inglés, igual que en español, se puede avanzar aunque falte el sustantivo exacto."
        },
        {
          speaker: "Rosa",
          target: "Describe it calmly: shape, size, and what you use it for.",
          translation: "Descríbala con calma: forma, tamaño y para qué sirve.",
          pronunciation: "di-SKRAIB it KAM-li: sheip, saiz, and wat yu yuz it for",
          literal: "Describa eso calmadamente: forma, tamaño, y para qué usted lo usa.",
          why: "Describe it es directo y suficiente. Luego vienen las tres pistas útiles: shape, size y what you use it for."
        },
        {
          speaker: "Alex",
          target: "It's a metal thing you use to tighten a hose, like a small clamp.",
          translation: "Es una cosa metálica para ajustar una manguera, como una abrazadera pequeña.",
          pronunciation: "its a ME-tal thing yu yuz tu TAI-ten a houz, laik a smol klamp",
          literal: "Es una cosa de metal que usted usa para apretar una manguera, como una abrazadera pequeña.",
          why: "A thing you use to... es una herramienta poderosa cuando falta vocabulario. Like a small clamp añade comparación sin fingir certeza."
        },
        {
          speaker: "Rosa",
          target: "I know what you mean. Do you need it in steel or plastic?",
          translation: "Ya sé a qué se refiere. ¿La necesita de acero o de plástico?",
          pronunciation: "ai nou wat yu min. du yu nid it in stil or PLAS-tik",
          literal: "Sé lo que usted quiere decir. ¿Necesita eso en acero o plástico?",
          why: "I know what you mean es la señal de que la descripción funcionó. No hizo falta saber clamp desde el comienzo."
        },
        {
          speaker: "Alex",
          target: "My friend described it as “the thing that tightens the hose,” but I wasn't sure.",
          translation: "Mi amigo la describió como “la cosa que ajusta la manguera”, pero yo no estaba seguro.",
          pronunciation: "mai frend di-SKRAIBD it az da thing dat TAI-tenz da houz, bat ai WA-zent shur",
          literal: "Mi amigo describió eso como la cosa que aprieta la manguera, pero no estaba seguro.",
          why: "Described es regular en inglés. La trampa de descrito pertenece al español; aquí lo difícil es pronunciar el grupo final sin agregar una vocal."
        },
        {
          speaker: "Rosa",
          target: "That's a good description. It's called a clamp; take two in case one gets lost.",
          translation: "Esa es una buena descripción. Se llama abrazadera; lleve dos por si una se pierde.",
          pronunciation: "dats a gud di-SKRIP-shon. its kold a klamp; teik tu in keis uan gets lost",
          literal: "Esa es una buena descripción. Está llamada una abrazadera; tome dos en caso de que una se pierda.",
          why: "Description es el sustantivo, describe es el verbo. La conversación termina con el nombre exacto, pero sólo después de que la descripción hizo el trabajo."
        }
      ],
      vocabulary: [
        {
          term: "describe",
          explanation:
            "Poner una cosa, persona o situación en palabras para que alguien la reconozca.",
          literal: "describir",
          useWhen:
            "No sabe el nombre exacto, o el nombre no basta, y necesita forma, uso, color, tamaño o comparación.",
          avoidWhen:
            "Puede nombrar el objeto exacto y la otra persona ya entiende. Describir toma tiempo; úselo cuando llena un vacío.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["explain", "identify", "detail", "compare"],
          example: {
            target: "I need to describe a part.",
            translation: "Necesito describir una pieza."
          }
        },
        {
          term: "describe it",
          explanation:
            "Descríbalo o descríbala. El it sostiene el objeto desconocido mientras usted da pistas.",
          literal: "describirlo",
          useWhen:
            "Alguien le pide forma, tamaño, uso o material para reconocer la cosa.",
          avoidWhen:
            "Agregar pronombres españoles al verbo. En inglés no existe una forma compacta como descríbamela.",
          register: "neutro práctico",
          region: "Inglés universal.",
          related: ["tell me what it looks like", "explain it", "show me", "name it"],
          example: {
            target: "Describe it calmly.",
            translation: "Descríbala con calma."
          }
        },
        {
          term: "a thing you use to",
          explanation:
            "Una cosa que se usa para. Es una estructura de supervivencia cuando falta el sustantivo.",
          literal: "una cosa que usa para",
          useWhen:
            "Puede explicar la función: a thing you use to tighten, cover, hold, measure.",
          avoidWhen:
            "Decir sólo thing sin función. El uso es la pista que permite reconocer el objeto.",
          register: "cotidiano recursivo",
          region: "Inglés universal.",
          related: ["something for", "a tool for", "the part that", "what you use to"],
          example: {
            target: "It's a thing you use to tighten a hose.",
            translation: "Es una cosa para ajustar una manguera."
          }
        },
        {
          term: "like a",
          explanation:
            "Como un o como una. Sirve para comparar sin asegurar que sabe el nombre.",
          literal: "como un / una",
          useWhen:
            "El objeto se parece a otra cosa lo suficiente para orientar a la otra persona.",
          avoidWhen:
            "Hacer comparaciones demasiado poéticas en una diligencia práctica. La claridad gana.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["similar to", "shaped like", "about the size of", "kind of like"],
          example: {
            target: "Like a small clamp.",
            translation: "Como una abrazadera pequeña."
          }
        },
        {
          term: "described",
          explanation:
            "El pasado y participio de describe. En inglés es regular; en español recuerde descrito.",
          literal: "describió / descrito",
          useWhen:
            "La descripción ya ocurrió: he described it, it was described, she described the part.",
          avoidWhen:
            "Pronunciar una sílaba extra al final. Described no termina en “ded” completo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["explained", "identified", "called", "named"],
          example: {
            target: "My friend described it as a clamp.",
            translation: "Mi amigo la describió como una abrazadera."
          }
        },
        {
          term: "clamp",
          explanation:
            "Una abrazadera o pieza que aprieta y sostiene una manguera, tubo o cable.",
          literal: "abrazadera",
          useWhen:
            "Compra o describe una pieza que mantiene algo ajustado alrededor de otra cosa.",
          avoidWhen:
            "Bloquearse si no recuerda la palabra. Puede describir la función hasta que alguien diga clamp.",
          register: "técnico cotidiano",
          region: "Inglés universal.",
          related: ["hose", "screw", "fastener", "part"],
          example: {
            target: "It's called a clamp.",
            translation: "Se llama abrazadera."
          }
        },
        {
          term: "what you use it for",
          explanation:
            "Para qué sirve o para qué se usa.",
          literal: "para qué lo usa",
          useWhen:
            "La función identifica mejor el objeto que el color o tamaño.",
          avoidWhen:
            "Confundir for al final con un error. En preguntas de este tipo, for puede ir al final con naturalidad.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["purpose", "function", "used for", "meant for"],
          example: {
            target: "Tell me what you use it for.",
            translation: "Dígame para qué sirve."
          }
        }
      ],
      note:
        "Describe es lo que salva una conversación cuando falta una palabra. No se quede en “I don't know the word.” Pase rápido a función, material y comparación: a metal thing you use to tighten a hose, like a small clamp. En inglés el participio described es regular; la irregularidad que debe recordar al volver al español es descrito, no describido.",
      culture: [
        {
          label: "Thing no es fracaso",
          body:
            "A los estudiantes les da pena decir thing porque suena básico. Pero thing you use to... puede ser una estructura muy adulta y eficaz si la función viene enseguida. Lo pobre es quedarse sólo en thing."
        },
        {
          label: "La descripción compra tiempo",
          body:
            "En una ferretería o farmacia, nadie espera que usted sepa cada sustantivo técnico. Una buena descripción le da al trabajador suficientes pistas para ofrecer la palabra exacta y resolver la compra."
        },
        {
          label: "Called cierra la brecha",
          body:
            "“It's called a clamp” es la frase que convierte una descripción en vocabulario nuevo. Escúchela como premio: la conversación no falló por no saber el nombre desde el principio."
        }
      ],
      pitfalls: [
        {
          mistake: "“It's a thing.”",
          whyItFails:
            "Thing solo es demasiado vago. La persona necesita función, forma o comparación para reconocerlo.",
          sayInstead: "It's a thing you use to tighten a hose."
        },
        {
          mistake: "“It was descripted.”",
          whyItFails:
            "El participio inglés es described. Descripted suena inventado por cruce con description.",
          sayInstead: "It was described clearly."
        },
        {
          mistake: "“It is how a small clamp.”",
          whyItFails:
            "Para comparar, el inglés usa like a, no how a. How pregunta por manera, no parecido.",
          sayInstead: "It's like a small clamp."
        }
      ],
      variations: [
        {
          form: "I need to describe a part.",
          register: "cortés práctico",
          region: "Inglés universal",
          whenToUse: "Para abrir una conversación cuando no sabe el nombre exacto."
        },
        {
          form: "It's a thing you use to tighten a hose.",
          register: "cotidiano recursivo",
          region: "Inglés universal",
          whenToUse: "Para describir por función."
        },
        {
          form: "It's like a small clamp.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Para usar comparación práctica."
        },
        {
          form: "That's a good description.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Para confirmar que la descripción fue suficiente."
        }
      ],
      prompt: "Alex says “a metal thing you use to tighten a hose, like a small clamp.” ¿Qué estrategia usa?",
      choices: [
        "He describes the object by material, function and comparison.",
        "He refuses to describe it until Rosa says the exact noun.",
        "He gives a payment method and ignores the object's purpose."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase ayuda más si no sabe el sustantivo?",
          choices: [
            "It's a thing you use to tighten a hose.",
            "It's a thing and nothing else at all.",
            "I don't know, I don't know the word."
          ],
          answer: 0,
          tests: "a thing you use to plus function"
        },
        {
          prompt: "¿Cuál participio inglés es correcto?",
          choices: [
            "The part was descripted clearly.",
            "The part was described clearly.",
            "The part was describing clearly."
          ],
          answer: 1,
          tests: "described as the English participle"
        },
        {
          prompt: "¿Cuál frase compara de manera natural?",
          choices: [
            "It's like a small clamp.",
            "It's how a small clamp.",
            "It's what a small clamp."
          ],
          answer: 0,
          tests: "like a for comparison"
        },
        {
          prompt: "¿Qué pregunta pide la función del objeto?",
          choices: [
            "What color is the box?",
            "How much does it cost?",
            "What do you use it for?"
          ],
          answer: 2,
          tests: "what you use it for as function"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/33-developing-explaining-and-showing.js");
