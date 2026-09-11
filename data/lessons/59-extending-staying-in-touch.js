/*
 * Lesson block: extending / staying in touch.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 */
lessons.push(
  {
    id: "getting-through-to-a-guide-in-florencia",
    level: "Extending · Staying in touch",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "plans-and-time",
    register: "courteous",
    pathways: ["extension"],
    verb: "comunicar",
    review: "pending",
    es: {
      title: "Getting through to a guide in Florencia",
      situation:
        "You are in Florencia and need to confirm a river outing with a guide who has not answered messages. You call the hostel reception desk so they can put you through to her without making you sound impatient.",
      setting: {
        who: "Rosa works the front desk of a small hostel and knows the local guides. Alex has sent messages to one guide, but the plan depends on getting a real answer before evening.",
        what: "A phone call that moves through three meanings: trying to get hold of someone, being put through by reception, and being informed of a change.",
        when: "Late afternoon, before the guide leaves for a meeting where she may lose signal.",
        where: "Florencia, Caquetá, at a hostel reception that coordinates short river outings without turning the scene into a travel lesson.",
        why: "Because everyday Colombian speech prefers “comunicarse con” for reaching a person, while bare “comunicar” often belongs to institutions or receptionists: they inform you, or they connect your call."
      },
      address: {
        form: "usted",
        who: "Rosa and Alex use usted because they are speaking by phone in a service relationship and have not met.",
        why: "Usted keeps the request respectful while Alex is asking for help. The warmth comes from clear wording, not from pretending they are friends.",
        ifYouSwitch:
          "Tú would sound too familiar on this call. Vos would feel imported and would distract from the practical task of getting connected."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Buenas tardes. No he podido comunicarme con Marcela, la guía.",
          translation: "Good afternoon. I haven't been able to get hold of Marcela, the guide.",
          pronunciation: "BWEH-nas TAR-des. no eh poh-DEE-doh koh-moo-nee-KAR-meh kon mar-SEH-lah, lah GEE-ah",
          literal: "Good afternoons. Not I-have been-able to-communicate-myself with Marcela, the guide.",
          why: "“Comunicarse con” is the everyday form for reaching a person. It is more natural than bare “comunicar” when you mean phone, message or contact."
        },
        {
          speaker: "Rosa",
          target: "Sí, señor. Ella está en la oficina; si espera un momento, le comunico.",
          translation: "Yes, sir. She is in the office; if you wait a moment, I'll put you through.",
          pronunciation: "see, seh-NYOR. EH-yah es-TAH en lah oh-fee-SEE-nah; see es-PEH-rah oon moh-MEN-toh, leh koh-moo-NEE-koh",
          literal: "Yes, sir. She is in the office; if you wait a moment, to-you I-communicate.",
          why: "“Le comunico” is what a receptionist says when transferring a call. The object is the caller, and the meaning is “I will connect you.”"
        },
        {
          speaker: "Marcela",
          target: "Alex, qué pena. Apenas nos comunicaron que cambiaron el horario.",
          translation: "Alex, sorry. They just informed us that the schedule changed.",
          pronunciation: "AH-leks, keh PEH-nah. ah-PEH-nas nos koh-moo-nee-KAH-ron keh kam-BYAH-ron el oh-RAH-ryoh",
          literal: "Alex, what shame. Just now to-us they-communicated that they-changed the schedule.",
          why: "“Nos comunicaron que…” is institutional and passive-ish: someone informed us. You hear it in offices, schools, agencies and organized trips."
        },
        {
          speaker: "Alex",
          target: "Menos mal logramos comunicarnos antes de salir.",
          translation: "Good thing we managed to get in touch before leaving.",
          pronunciation: "MEH-nos mal loh-GRAH-mos koh-moo-nee-KAR-nos AN-tes deh sah-LEER",
          literal: "Less bad we-managed to-communicate-ourselves before leaving.",
          why: "The reciprocal “comunicarnos” covers the successful contact between both people. It is the clean opposite of “no he podido comunicarme.”"
        },
        {
          speaker: "Marcela",
          target: "Exacto. Para que no haya enredos, le comunico todo por WhatsApp.",
          translation: "Exactly. To avoid mix-ups, I'll communicate everything to you by WhatsApp.",
          pronunciation: "eg-SAK-toh. PAH-rah keh no AH-yah en-RREH-dos, leh koh-MOO-nee-koh TOH-doh por WAH-tsap",
          literal: "Exact. So-that there-not-be mix-ups, to-you I-communicate everything by WhatsApp.",
          why: "“Para que no haya” takes subjunctive because the mix-up is being prevented. Bare “comunico” here is more formal than “le cuento,” but still plausible for a guide confirming details."
        },
        {
          speaker: "Alex",
          target: "Perfecto; si no me entra la llamada, escríbame y yo le respondo.",
          translation: "Perfect; if the call doesn't come through, write to me and I'll answer.",
          pronunciation: "per-FEK-toh; see no meh EN-trah lah yah-MAH-dah, es-KREE-bah-meh ee yo leh rres-PON-doh",
          literal: "Perfect; if not to-me enters the call, write-to-me and I to-you answer.",
          why: "Staying in touch is redundant by design: call, message, confirmation. The lesson's verb sits inside a larger Colombian habit of backing up communication."
        }
      ],
      vocabulary: [
        {
          term: "comunicarse con",
          explanation:
            "The natural everyday way to say get in touch with someone. The reflexive form is the one you need for calls, messages and trying to reach a person.",
          literal: "to communicate oneself with",
          useWhen:
            "You have not been able to reach someone, you finally got through, or you need to stay in contact before a plan changes.",
          avoidWhen:
            "You mean an institution informed you of something. Then bare “comunicar” often appears: “nos comunicaron que…”",
          register: "neutral",
          region: "General Colombian Spanish.",
          related: ["contactar", "llamar", "escribir", "ubicar"],
          example: {
            target: "No he podido comunicarme con Marcela.",
            translation: "I haven't been able to get hold of Marcela."
          }
        },
        {
          term: "le comunico",
          explanation:
            "A receptionist's transfer phrase: I will put you through. It is a service-register use of comunicar, not a deep statement about communication.",
          literal: "to you I communicate",
          useWhen:
            "Someone at a front desk, switchboard or office connects your call to the person you asked for.",
          avoidWhen:
            "You are chatting with friends. It sounds like reception-desk language and will feel theatrical.",
          register: "polite service",
          region: "General Spanish, common in Colombian service calls.",
          related: ["lo comunico", "le paso la llamada", "un momento", "lo transfiero"],
          example: {
            target: "Si espera un momento, le comunico.",
            translation: "If you wait a moment, I'll put you through."
          }
        },
        {
          term: "nos comunicaron que",
          explanation:
            "We were informed that. It is a useful passive-ish structure when the source is official, vague or less important than the message.",
          literal: "they communicated to us that",
          useWhen:
            "A school, hotel, company, office or organizer tells you a change, rule, result or decision.",
          avoidWhen:
            "A friend simply told you a casual story. Then “me dijo que” is warmer and more natural.",
          register: "formal neutral",
          region: "General Colombian institutional Spanish.",
          related: ["nos informaron que", "nos avisaron que", "dijeron que", "notificaron"],
          example: {
            target: "Nos comunicaron que cambiaron el horario.",
            translation: "They informed us that the schedule changed."
          }
        },
        {
          term: "lograr comunicarse",
          explanation:
            "To manage to get in touch. “Lograr” adds the effort: there were missed calls, no signal, unanswered messages or uncertainty before the contact happened.",
          literal: "to manage to communicate oneself",
          useWhen:
            "The contact was not automatic and you want to mark relief that it finally happened.",
          avoidWhen:
            "The contact was easy and ordinary. Then simple “hablé con ella” may be enough.",
          register: "neutral",
          region: "General Spanish.",
          related: ["por fin hablar", "alcanzar a llamar", "ubicar a alguien", "recibir respuesta"],
          example: {
            target: "Logramos comunicarnos antes de salir.",
            translation: "We managed to get in touch before leaving."
          }
        },
        {
          term: "para que no haya enredos",
          explanation:
            "So there are no mix-ups. “Haya” is subjunctive because the speaker is trying to prevent a possible problem.",
          literal: "so that there not be tangles",
          useWhen:
            "You send details in writing, repeat times or confirm names because confusion would cost the plan.",
          avoidWhen:
            "The problem already happened. Then say “hubo un enredo” or explain what went wrong.",
          register: "neutral conversational",
          region: "General Colombian.",
          related: ["para evitar confusiones", "que quede claro", "sin malentendidos", "confirmar"],
          example: {
            target: "Para que no haya enredos, le comunico todo por WhatsApp.",
            translation: "To avoid mix-ups, I'll communicate everything by WhatsApp."
          }
        },
        {
          term: "qué pena",
          explanation:
            "A Colombian apology or softener. It can mean sorry, excuse me or how embarrassing, depending on the moment.",
          literal: "what shame",
          useWhen:
            "You are late answering, interrupting, correcting a detail or acknowledging a small inconvenience.",
          avoidWhen:
            "A serious apology that requires responsibility and repair. Then say clearly what happened and what you will do.",
          register: "polite conversational",
          region: "Very common Colombian Spanish.",
          related: ["disculpe", "perdón", "lo siento", "me excuso"],
          example: {
            target: "Alex, qué pena.",
            translation: "Alex, sorry."
          }
        },
        {
          term: "no me entra la llamada",
          explanation:
            "The call is not coming through. It is practical phone language for a failed connection, not a statement about permission.",
          literal: "the call does not enter me",
          useWhen:
            "Signal, coverage or phone trouble prevents the call from reaching you.",
          avoidWhen:
            "The person simply did not answer. Then say “no me contestó” or “no respondió.”",
          register: "neutral conversational",
          region: "General Colombian.",
          related: ["se cae la llamada", "no timbra", "no contesta", "no hay señal"],
          example: {
            target: "Si no me entra la llamada, escríbame.",
            translation: "If the call doesn't come through, write to me."
          }
        }
      ],
      note:
        "Comunicar is a register lesson more than a conjugation lesson. A person tries to “comunicarse con” someone; a receptionist says “le comunico” while transferring a call; an institution says “nos comunicaron que…” when informing you. If you keep only bare “comunicar,” you miss the form Colombians actually use to chase a reply.",
      culture: [
        {
          label: "Getting hold of someone is a process",
          body:
            "Colombian planning often moves through missed calls, voice notes, WhatsApp messages and someone who knows someone. “No he podido comunicarme con ella” names that whole process without blaming the person too harshly."
        },
        {
          label: "Reception language is its own register",
          body:
            "“Le comunico” sounds normal from a receptionist and strange from a friend. The phrase belongs to an office phone system, even when the office is a hostel counter."
        },
        {
          label: "Institutional information hides the actor",
          body:
            "“Nos comunicaron que cambiaron el horario” lets the message matter more than the person who delivered it. That is why it feels passive-ish without using a true passive."
        },
        {
          label: "WhatsApp is the backup channel",
          body:
            "Confirming by WhatsApp is not casual laziness; it is how many small plans keep a written trace. When calls fail, the message carries the plan."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying only “no pude comunicar ella”",
          whyItFails:
            "For getting in touch with a person, Spanish needs the reflexive form and the preposition: “comunicarme con ella.”",
          sayInstead: "No he podido comunicarme con ella."
        },
        {
          mistake: "Using “le comunico” with a friend as if it meant “I'll text you”",
          whyItFails:
            "“Le comunico” sounds like a receptionist transferring a call or an official informing someone. A friend would use plainer wording.",
          sayInstead: "Te escribo, te llamo, or te cuento."
        },
        {
          mistake: "Missing the official tone in “nos comunicaron que”",
          whyItFails:
            "The phrase usually sounds like information from an institution or organized service, not casual gossip from a cousin.",
          sayInstead: "Nos comunicaron que cambió el horario."
        },
        {
          mistake: "Confusing a failed call with an ignored call",
          whyItFails:
            "“No me entra la llamada” points to connection trouble. If the phone rang and nobody answered, the verb changes.",
          sayInstead: "No me contestó, or no me respondió."
        }
      ],
      variations: [
        {
          form: "No he podido comunicarme con ella.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "You have tried to reach someone and still need an answer."
        },
        {
          form: "Un momento, le comunico.",
          register: "polite service",
          region: "General Spanish",
          whenToUse: "A receptionist or operator is transferring a call."
        },
        {
          form: "Nos comunicaron que cambió el horario.",
          register: "formal neutral",
          region: "General Colombian",
          whenToUse: "An organization informed you of a change."
        },
        {
          form: "Por fin logramos comunicarnos.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "Contact finally happened after missed attempts."
        },
        {
          form: "Si no me entra la llamada, escríbame.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "You need a backup channel in case the call fails."
        },
        {
          form: "Se debió cortar la llamada otra vez.",
          register: "courteous",
          region: "General Colombian",
          whenToUse: "Explaining a dropped call without blaming the line or the person. Deber plus infinitive is deduction, not obligation."
        }
      ],
      prompt: "Rosa says “si espera un momento, le comunico.” What is she doing?",
      choices: [
        "Transferring Alex's call to the guide.",
        "Writing a formal complaint about Alex.",
        "Ending the plan because the river is closed."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence is natural for trying to reach Marcela?",
          choices: [
            "No he podido comunicarme con Marcela.",
            "No he podido comunicar Marcela sola.",
            "No he podido comunicar a la mesa."
          ],
          answer: 0,
          tests: "comunicarse con for getting hold of someone"
        },
        {
          prompt: "Which sentence sounds institutional rather than chatty?",
          choices: [
            "Nos comunicaron que cambió el horario.",
            "Nos reímos con Marcela toda la tarde.",
            "Nos sentamos junto al mostrador."
          ],
          answer: 0,
          tests: "nos comunicaron que as passive-ish information"
        },
        {
          prompt: "Which phrase belongs to a receptionist transferring a call?",
          choices: [
            "Le comunico con la guía ahora.",
            "Le dibujo con la guía ahora.",
            "Le cocino con la guía ahora."
          ],
          answer: 0,
          tests: "le comunico as service transfer"
        },
        {
          prompt: "What does “no me entra la llamada” point to?",
          choices: [
            "The guide is already on the boat.",
            "The room has been fully booked.",
            "The call is not coming through."
          ],
          answer: 2,
          tests: "failed connection rather than ignored call"
        }
      ]
    },
    en: {
      title: "Comunicarse con una guía en Seattle",
      situation:
        "Usted está en Seattle y necesita confirmar una salida con una guía que no ha respondido mensajes. Llama a la recepción para que lo comuniquen y necesita distinguir get in touch, put through e inform.",
      setting: {
        who: "Rosa trabaja en la recepción de un hostal pequeño y conoce a los guías locales. Alejandro ya escribió mensajes, pero necesita una respuesta real antes de la noche.",
        what: "Una llamada que separa tres sentidos: lograr contacto con alguien, ser transferido por recepción y recibir información oficial sobre un cambio.",
        when: "Al final de la tarde, antes de que la guía salga a una reunión donde quizá pierda señal.",
        where: "Seattle, en la recepción de un hostal que coordina salidas cortas sin convertir la escena en una lección de transporte.",
        why: "Porque el inglés no usa una sola forma para todo comunicar: “get in touch with” es contactar, “put you through” es pasar la llamada, e “inform” es comunicar oficialmente."
      },
      address: {
        form: "mixed",
        who: "Rosa y Alejandro no se conocen. En inglés ambos usan “you”; la cortesía sale de “could,” “please” y frases completas.",
        why: "El inglés no tiene usted, así que la llamada de servicio depende del tono y de verbos como “hold,” “put through” y “inform.”",
        ifYouSwitch:
          "No hay pronombre que cambiar. Repetir “sir” demasiado puede sonar rígido; una petición clara y cortés basta."
      },
      dialogue: [
        {
          speaker: "Alejandro",
          target: "Good afternoon. I haven't been able to get in touch with Marcela, the guide.",
          translation: "Buenas tardes. No he podido comunicarme con Marcela, la guía.",
          pronunciation: "gud af-ter-NUN. ai JA-vent bin EI-bol tu get in tach uid mar-SE-la, da gaid",
          literal: "Buenas tardes. No he podido entrar en contacto con Marcela, la guía.",
          why: "“Get in touch with” es la frase natural para “comunicarse con.” Incluye llamadas, mensajes y cualquier intento de contacto."
        },
        {
          speaker: "Rosa",
          target: "Yes, sir. She's in the office; if you hold for a moment, I'll put you through.",
          translation: "Sí, señor. Ella está en la oficina; si espera un momento, le comunico.",
          pronunciation: "yes, sir. shiz in di A-fis; if yu jold for a MO-ment, ail put yu thru",
          literal: "Sí, señor. Ella está en la oficina; si sostiene un momento, lo pondré a través.",
          why: "“Put you through” es la frase de recepción para conectar una llamada. No se traduce como “communicate you.”"
        },
        {
          speaker: "Marcela",
          target: "Alejandro, sorry. We were just informed that the schedule changed.",
          translation: "Alejandro, qué pena. Apenas nos comunicaron que cambiaron el horario.",
          pronunciation: "a-le-JAN-dro, SA-ri. ui wer yost in-FORMD dat da SKE-yul cheinjd",
          literal: "Alejandro, perdón. Acabamos de ser informados de que el horario cambió.",
          why: "“We were informed that” traduce el tono oficial de “nos comunicaron que.” Suena más institucional que “someone told us.”"
        },
        {
          speaker: "Alejandro",
          target: "Good thing we managed to get in touch before leaving.",
          translation: "Menos mal logramos comunicarnos antes de salir.",
          pronunciation: "gud zing ui MA-nijd tu get in tach bi-FOR LI-ving",
          literal: "Buena cosa logramos entrar en contacto antes de salir.",
          why: "“Managed to” marca el esfuerzo que había detrás del contacto: mensajes sin respuesta, señal dudosa o llamadas perdidas."
        },
        {
          speaker: "Marcela",
          target: "Exactly. To avoid any mix-ups, I'll send everything by text.",
          translation: "Exacto. Para que no haya enredos, le comunico todo por mensaje.",
          pronunciation: "eg-ZAKT-li. tu a-VOID e-ni miks aps, ail send EV-ri-zing bai tekst",
          literal: "Exactamente. Para evitar cualquier enredo, mandaré todo por texto.",
          why: "El inglés natural aquí es “send everything by text,” no “communicate everything.” El mensaje escrito evita el enredo."
        },
        {
          speaker: "Alejandro",
          target: "Perfect; if the call doesn't go through, text me and I'll reply.",
          translation: "Perfecto; si no me entra la llamada, escríbame y yo le respondo.",
          pronunciation: "PER-fekt; if da kol DA-zent gou thru, tekst mi and ail ri-PLAI",
          literal: "Perfecto; si la llamada no pasa, mándeme texto y responderé.",
          why: "“Go through” habla de una llamada que sí conecta. Si no conecta, el plan salta al canal de respaldo: text."
        }
      ],
      vocabulary: [
        {
          term: "get in touch with",
          explanation:
            "Comunicarse con alguien. Es la frase cotidiana para lograr contacto por llamada, mensaje o cualquier canal.",
          literal: "entrar en contacto con",
          useWhen:
            "Ha intentado contactar a una persona, por fin la ubicó o necesita mantenerse en contacto.",
          avoidWhen:
            "Una institución le dio una noticia formal. Ahí “inform” o “notify” pueden sonar mejor.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["contact", "reach", "call", "message"],
          example: {
            target: "I haven't been able to get in touch with Marcela.",
            translation: "No he podido comunicarme con Marcela."
          }
        },
        {
          term: "put you through",
          explanation:
            "Pasarle la llamada o comunicarlo con alguien. Es frase de recepción, central telefónica o servicio al cliente.",
          literal: "ponerlo a través",
          useWhen:
            "Alguien conecta su llamada con la persona o extensión que usted pidió.",
          avoidWhen:
            "Usted simplemente manda un mensaje. “Put through” pertenece a llamadas conectadas.",
          register: "cortés de servicio",
          region: "Inglés universal.",
          related: ["transfer your call", "connect you", "hold please", "extension"],
          example: {
            target: "I'll put you through.",
            translation: "Le comunico."
          }
        },
        {
          term: "we were informed that",
          explanation:
            "Nos comunicaron que. Sirve cuando la fuente es oficial o cuando importa más la noticia que quién la dio.",
          literal: "fuimos informados de que",
          useWhen:
            "Un hotel, escuela, empresa u organizador comunica un cambio, regla, resultado o decisión.",
          avoidWhen:
            "Un amigo le contó algo casual. “Someone told us” suena más humano.",
          register: "formal neutro",
          region: "Inglés universal.",
          related: ["we were notified", "they told us", "we heard that", "officially informed"],
          example: {
            target: "We were informed that the schedule changed.",
            translation: "Nos comunicaron que cambió el horario."
          }
        },
        {
          term: "managed to get in touch",
          explanation:
            "Lograr comunicarse. “Managed to” añade la idea de esfuerzo o dificultad superada.",
          literal: "logró entrar en contacto",
          useWhen:
            "Hubo llamadas perdidas, mala señal, mensajes sin respuesta o incertidumbre antes del contacto.",
          avoidWhen:
            "El contacto fue fácil y normal. Entonces “talked to” o “spoke with” basta.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["finally reached", "got hold of", "managed to call", "heard back"],
          example: {
            target: "We managed to get in touch.",
            translation: "Logramos comunicarnos."
          }
        },
        {
          term: "avoid mix-ups",
          explanation:
            "Evitar enredos o malentendidos. Es una razón común para mandar detalles por escrito.",
          literal: "evitar mezclas",
          useWhen:
            "Horarios, nombres, direcciones o precios pueden confundirse si quedan sólo en llamada.",
          avoidWhen:
            "El problema ya ocurrió. Entonces diga “there was a mix-up” y explique el error.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["avoid confusion", "make it clear", "confirm in writing", "no misunderstanding"],
          example: {
            target: "To avoid any mix-ups, I'll text you.",
            translation: "Para evitar enredos, le escribo."
          }
        },
        {
          term: "sorry",
          explanation:
            "Perdón, disculpe o qué pena, según el contexto. Es breve, flexible y frecuente.",
          literal: "lo siento",
          useWhen:
            "Llega tarde a responder, interrumpe, corrige un detalle o reconoce una molestia menor.",
          avoidWhen:
            "El daño es serio. Entonces necesita una disculpa completa y reparación, no sólo “sorry.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I'm sorry", "apologies", "excuse me", "my bad"],
          example: {
            target: "Alejandro, sorry.",
            translation: "Alejandro, qué pena."
          }
        },
        {
          term: "the call doesn't go through",
          explanation:
            "La llamada no entra o no conecta. El problema es técnico, no necesariamente que alguien ignore el teléfono.",
          literal: "la llamada no pasa a través",
          useWhen:
            "La señal, cobertura o red impide que la llamada conecte.",
          avoidWhen:
            "La llamada sí sonó y nadie contestó. Entonces diga “they didn't answer.”",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["bad signal", "dropped call", "no service", "didn't answer"],
          example: {
            target: "If the call doesn't go through, text me.",
            translation: "Si no me entra la llamada, escríbame."
          }
        }
      ],
      note:
        "Para traducir comunicar, escoja la relación. “Get in touch with” es comunicarse con alguien; “put you through” es lo que hace recepción; “we were informed that” recoge el tono institucional de “nos comunicaron que.” “Communicate” existe, pero no sirve para todo.",
      culture: [
        {
          label: "Get in touch no culpa tanto",
          body:
            "“I haven't been able to get in touch” deja espacio para mala señal, ocupación o mensajes perdidos. No acusa de inmediato a la otra persona de ignorarlo."
        },
        {
          label: "Put through es de teléfono",
          body:
            "La frase pertenece a llamadas y recepciones. Si alguien sólo manda un WhatsApp, no lo “puts you through”; simplemente texts you o sends a message."
        },
        {
          label: "Inform suena oficial",
          body:
            "“We were informed that” suena a hotel, escuela, empresa u organizador. Para amigos, “they told us” suele sonar menos rígido."
        },
        {
          label: "Text es el canal de respaldo",
          body:
            "En Norteamérica, “text me” es la salida normal cuando una llamada no conecta. Es práctico, no necesariamente informal."
        }
      ],
      pitfalls: [
        {
          mistake: "“I couldn't communicate with Marcela” for a simple phone problem.",
          whyItFails:
            "Se entiende, pero puede sonar más amplio o formal de lo necesario. Para contactar por llamada o mensaje, “get in touch with” suena más natural.",
          sayInstead: "I haven't been able to get in touch with Marcela."
        },
        {
          mistake: "“I'll communicate you with Marcela.”",
          whyItFails:
            "Calca “le comunico con Marcela.” En inglés de recepción la frase fija es “put you through” o “connect you.”",
          sayInstead: "I'll put you through to Marcela."
        },
        {
          mistake: "“They communicated us the schedule changed.”",
          whyItFails:
            "El inglés no usa “communicate us” así. Para tono oficial, necesita “informed us” o una pasiva.",
          sayInstead: "We were informed that the schedule changed."
        },
        {
          mistake: "“The call doesn't enter me.”",
          whyItFails:
            "Es traducción literal de “no me entra la llamada.” En inglés el problema es que la llamada no “goes through.”",
          sayInstead: "The call doesn't go through."
        }
      ],
      variations: [
        {
          form: "I haven't been able to get in touch with her.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "No ha logrado comunicarse con alguien por ningún canal."
        },
        {
          form: "Hold for a moment; I'll put you through.",
          register: "cortés de servicio",
          region: "Inglés universal",
          whenToUse: "Recepción conecta una llamada con otra persona."
        },
        {
          form: "We were informed that the schedule changed.",
          register: "formal neutro",
          region: "Inglés universal",
          whenToUse: "Una organización comunicó una noticia o cambio."
        },
        {
          form: "We finally managed to get in touch.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "El contacto llegó después de varios intentos."
        },
        {
          form: "If the call doesn't go through, text me.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Necesita un canal alterno si falla la llamada."
        },
        {
          form: "The call must have dropped again, didn't it?",
          register: "cortés",
          region: "Inglés universal",
          whenToUse: "Para explicar una llamada caída sin culpar a nadie. “Must have dropped” deduce, y la coletilla busca acuerdo."
        }
      ],
      prompt: "Rosa says “hold for a moment; I'll put you through.” ¿Qué hace?",
      choices: [
        "Conecta la llamada de Alejandro con la guía.",
        "Escribe una queja formal contra Alejandro.",
        "Cancela el plan porque cerraron el río."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase traduce mejor “comunicarme con Marcela”?",
          choices: [
            "Get in touch with Marcela.",
            "Cook the message with Marcela.",
            "Reserve the guide with silence."
          ],
          answer: 0,
          tests: "get in touch with as contact"
        },
        {
          prompt: "¿Cuál frase suena más institucional?",
          choices: [
            "We were informed that the schedule changed.",
            "We laughed with Marcela at dinner.",
            "We sat beside the front desk."
          ],
          answer: 0,
          tests: "informed as official comunicar"
        },
        {
          prompt: "¿Cuál frase usa una recepción para pasar una llamada?",
          choices: [
            "I'll put you through to the guide.",
            "I'll draw you through the guide.",
            "I'll cook you through the guide."
          ],
          answer: 0,
          tests: "put you through as transfer"
        },
        {
          prompt: "¿Qué significa “the call doesn't go through”?",
          choices: [
            "La guía ya está en el río.",
            "El cuarto quedó reservado.",
            "La llamada no logra conectar."
          ],
          answer: 2,
          tests: "technical failed call"
        }
      ]
    }
  },
  {
    id: "connecting-to-a-video-call-in-buenaventura",
    level: "Extending · Staying in touch",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    pathways: ["extension"],
    verb: "conectar",
    review: "pending",
    es: {
      title: "Connecting to a video call in Buenaventura",
      situation:
        "You are in Buenaventura trying to join a family video call before a meeting starts. The Wi-Fi will not connect, the signal drops, and someone says that you all “conectaron de una” once you could finally talk.",
      setting: {
        who: "Natalia is hosting the family video call from her apartment. Alex is nearby with a laptop, a cable and just enough patience to troubleshoot without turning into tech support.",
        what: "Patchy connectivity interrupts a family call: cable, Wi-Fi, online status, dropped signal and the human feeling of clicking with someone immediately.",
        when: "Early evening, just as rain begins and everyone is trying to join before dinner.",
        where: "Buenaventura, Valle del Cauca, in an apartment where the connection is good enough until it suddenly is not.",
        why: "Because conectar covers the technical and the human: connecting a cable, getting online, a Wi-Fi that refuses to connect, and people who connected right away."
      },
      address: {
        form: "tú",
        who: "Natalia and Alex are relatives of the same generation, so tú keeps the troubleshooting quick and relaxed.",
        why: "Technical frustration gets worse when the register becomes too formal. Tú lets them give direct instructions without sounding like customer service.",
        ifYouSwitch:
          "Usted could sound irritated or distant between relatives. Vos would be possible in some Colombian friendships, but it is not needed for this coastal family scene."
      },
      dialogue: [
        {
          speaker: "Natalia",
          target: "Alex, conecta el cable primero, que el wifi no me conecta.",
          translation: "Alex, connect the cable first, because the Wi-Fi isn't connecting for me.",
          pronunciation: "AH-leks, koh-NEK-tah el KAH-bleh pree-MEH-roh, keh el WAI-fai no meh koh-NEK-tah",
          literal: "Alex, connect the cable first, because the Wi-Fi not to-me connects.",
          why: "One sentence shows two frames: “conecta el cable” is a direct technical action; “no me conecta” is the service failing on the user."
        },
        {
          speaker: "Alex",
          target: "Ya lo conecté, pero sigo sin aparecer conectado en la reunión.",
          translation: "I already connected it, but I still don't show as connected in the meeting.",
          pronunciation: "ya loh koh-nek-TEH, PEH-roh SEE-goh seen ah-pah-reh-SER koh-nek-TAH-doh en lah rreh-oo-NYON",
          literal: "Already it I-connected, but I-continue without appearing connected in the meeting.",
          why: "“Conectado” is the state: online, plugged in, visible to the system. The past “conecté” is the action that should have produced it."
        },
        {
          speaker: "Natalia",
          target: "Espérate, se me cayó la señal otra vez.",
          translation: "Wait, my signal dropped again.",
          pronunciation: "es-PEH-rah-teh, seh meh kah-YOH lah seh-NYAL OH-trah bes",
          literal: "Wait-yourself, to-me fell the signal another time.",
          why: "Colombians often say “se me cayó la señal” instead of forcing conectar into every technical failure. The signal fell on me: annoying, common and not fully my fault."
        },
        {
          speaker: "Alex",
          target: "A mí tampoco me coge el internet en este rincón.",
          translation: "The internet doesn't catch for me in this corner either.",
          pronunciation: "ah mee tam-POH-koh meh KOH-heh el een-ter-NET en ES-teh rreen-KON",
          literal: "To me neither catches me the internet in this corner.",
          why: "“No me coge el internet” is very Colombian, very practical and not especially formal. It means the service is not reaching or working well where you are."
        },
        {
          speaker: "Natalia",
          target: "Cuando por fin conectemos, seguimos como si nada.",
          translation: "When we finally connect, we'll carry on as if nothing happened.",
          pronunciation: "KWAN-doh por feen koh-nek-TEH-mos, seh-GEE-mos KOH-moh see NAH-dah",
          literal: "When finally we-connect, we-continue as if nothing.",
          why: "“Cuando conectemos” takes subjunctive because the connection has not happened yet. Extending Spanish makes that uncertainty visible."
        },
        {
          speaker: "Alex",
          target: "Eso sí: con tu abuela conecté de una, aunque la llamada se cortó.",
          translation: "That is true: I clicked with your grandmother right away, even though the call cut out.",
          pronunciation: "EH-soh see: kon too ah-BWEH-lah koh-nek-TEH deh OO-nah, AUN-keh lah yah-MAH-dah seh kor-TOH",
          literal: "That yes: with your grandmother I-connected right away, although the call cut itself.",
          why: "“Conecté de una” is the human meaning: we clicked immediately. The same verb moves from cables and Wi-Fi to chemistry between people."
        }
      ],
      vocabulary: [
        {
          term: "conectar",
          explanation:
            "To connect, technically or socially. It can connect a cable, a call, Wi-Fi, an account, or two people who click quickly.",
          literal: "to connect",
          useWhen:
            "Something joins a system, network, call or person-to-person rhythm: cable, internet, meeting, friendship, chemistry.",
          avoidWhen:
            "You mean every kind of internet problem. Colombian speech often uses “se cayó la señal” or “no me coge el internet.”",
          register: "neutral",
          region: "General Spanish; human “conectar” is common and understood in Colombia.",
          related: ["conectarse", "estar conectado", "señal", "enlace"],
          example: {
            target: "Conecta el cable primero.",
            translation: "Connect the cable first."
          }
        },
        {
          term: "no me conecta el wifi",
          explanation:
            "The Wi-Fi is not connecting for me. The “me” makes the failure land on the user and sounds more lived-in than a technical report.",
          literal: "the Wi-Fi does not connect me",
          useWhen:
            "Your device refuses to join the network or the service will not work for you.",
          avoidWhen:
            "The whole area has no signal. Then “no hay señal” or “se cayó la señal” may be more accurate.",
          register: "neutral conversational",
          region: "General Colombian.",
          related: ["no me carga", "no me abre", "no me funciona", "no agarra"],
          example: {
            target: "El wifi no me conecta.",
            translation: "The Wi-Fi isn't connecting for me."
          }
        },
        {
          term: "estar conectado",
          explanation:
            "To be connected or online. It describes the state after the connection works.",
          literal: "to be connected",
          useWhen:
            "Someone appears online, is in the meeting, has internet or is connected to a network.",
          avoidWhen:
            "You are describing the act of plugging something in. Then use “conectar” as the action.",
          register: "neutral",
          region: "General Spanish.",
          related: ["en línea", "aparecer conectado", "entrar a la reunión", "tener señal"],
          example: {
            target: "Sigo sin aparecer conectado.",
            translation: "I still don't show as connected."
          }
        },
        {
          term: "se me cayó la señal",
          explanation:
            "My signal dropped. The accidental “se me” frames the failure as something that happened to you, not something you chose.",
          literal: "to me the signal fell",
          useWhen:
            "A call freezes, the network disappears or a video meeting drops in and out.",
          avoidWhen:
            "You deliberately hung up or left the meeting. Then say that directly.",
          register: "neutral conversational",
          region: "Very common Colombian Spanish.",
          related: ["se cayó la llamada", "no hay señal", "se fue el internet", "se cortó"],
          example: {
            target: "Se me cayó la señal otra vez.",
            translation: "My signal dropped again."
          }
        },
        {
          term: "no me coge el internet",
          explanation:
            "The internet is not reaching or working for me. It is common Colombian phrasing, especially for coverage that fails in a spot.",
          literal: "the internet does not catch me",
          useWhen:
            "A corner, room, road or building has poor coverage and the device will not connect well.",
          avoidWhen:
            "A formal complaint to a provider. There, “no tengo conexión” or “el servicio no funciona” sounds cleaner.",
          register: "friendly informal",
          region: "Common Colombian Spanish.",
          related: ["no agarra señal", "no me entra", "no tengo datos", "está lento"],
          example: {
            target: "No me coge el internet en este rincón.",
            translation: "The internet doesn't work for me in this corner."
          }
        },
        {
          term: "cuando conectemos",
          explanation:
            "When we connect. The subjunctive appears because the connection is expected but not yet real.",
          literal: "when we connect",
          useWhen:
            "You are waiting for a call, meeting, device or network to work and planning what happens after.",
          avoidWhen:
            "You are describing a repeated fact. Then use indicative: “cuando conectamos el cable, funciona.”",
          register: "neutral",
          region: "General Spanish.",
          related: ["cuando entre", "cuando funcione", "apenas conecte", "si conecta"],
          example: {
            target: "Cuando por fin conectemos, seguimos.",
            translation: "When we finally connect, we'll carry on."
          }
        },
        {
          term: "conectar de una",
          explanation:
            "To click right away with someone. “De una” adds immediacy: the human connection happened fast.",
          literal: "to connect in one",
          useWhen:
            "Two people get along immediately, understand each other's humor or feel easy together.",
          avoidWhen:
            "You mean technical connection. For Wi-Fi, “de una” might mean quickly, but the human reading needs a person as the companion.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["caerse bien", "hacer clic", "entenderse", "pegar buena onda"],
          example: {
            target: "Con tu abuela conecté de una.",
            translation: "I clicked with your grandmother right away."
          }
        }
      ],
      note:
        "Conectar is useful because it refuses to stay technical. You can connect the cable, fail to connect to Wi-Fi, be connected online, lose signal, or connect immediately with a person. Colombian troubleshooting also gives you “se me cayó la señal” and “no me coge el internet,” which often sound more natural than repeating conectar.",
      culture: [
        {
          label: "The failure often lands on me",
          body:
            "Phrases like “no me conecta” and “se me cayó la señal” make the failure personal without making it fully your fault. That is why they feel so usable in everyday frustration."
        },
        {
          label: "Internet talk is local and practical",
          body:
            "“No me coge el internet” may look odd to learners, but it is common Colombian speech for coverage that does not reach. Save cleaner technical language for providers and forms."
        },
        {
          label: "Online is a state",
          body:
            "“Estoy conectado” is the state everyone wants before the meeting continues. The cable can be connected while the person still does not appear connected, which is exactly the annoyance."
        },
        {
          label: "Human connection borrows the tech verb",
          body:
            "Saying two people “conectaron de una” treats chemistry like a successful link. It is modern, informal and not tied to any one region."
        }
      ],
      pitfalls: [
        {
          mistake: "Using only “conectar” for every signal problem",
          whyItFails:
            "Real Colombian speech often chooses the more specific complaint: the signal dropped, the internet is not catching, the call cut out.",
          sayInstead: "Se me cayó la señal, or no me coge el internet."
        },
        {
          mistake: "Confusing action and state",
          whyItFails:
            "“Conecté el cable” is an action. “Estoy conectado” is the resulting online state. One does not guarantee the other.",
          sayInstead: "Ya conecté el cable, pero no aparezco conectado."
        },
        {
          mistake: "Using indicative in “cuando conectamos” for a future uncertain connection",
          whyItFails:
            "If the connection has not happened yet, Spanish expects subjunctive after cuando.",
          sayInstead: "Cuando conectemos, seguimos."
        },
        {
          mistake: "Reading “conecté de una” as only Wi-Fi",
          whyItFails:
            "With a person as the complement, it means the relationship clicked immediately, not that a device joined a network.",
          sayInstead: "Con ella conecté de una."
        }
      ],
      variations: [
        {
          form: "Conecta el cable primero.",
          register: "neutral practical",
          region: "General Spanish",
          whenToUse: "Giving a direct technical instruction."
        },
        {
          form: "El wifi no me conecta.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "Your device or service refuses to connect."
        },
        {
          form: "Sigo sin aparecer conectado.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You are not showing as online or present in the meeting."
        },
        {
          form: "Se me cayó la señal otra vez.",
          register: "neutral conversational",
          region: "Very common Colombian",
          whenToUse: "The call or network dropped unexpectedly."
        },
        {
          form: "Conectamos de una.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "You clicked with someone right away."
        }
      ],
      prompt: "Natalia says “conecta el cable” but also “el wifi no me conecta.” What changes?",
      choices: [
        "The first is an action; the second is a service failing for her.",
        "The first means a friendship clicked; the second means she laughed.",
        "The first is a hotel booking; the second is a family photo."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence describes being online rather than plugging something in?",
          choices: [
            "Sigo sin aparecer conectado en la reunión.",
            "Conecta el cable negro primero.",
            "Desconecta el cargador de la pared."
          ],
          answer: 0,
          tests: "estar conectado as online state"
        },
        {
          prompt: "Which phrase is a common Colombian signal complaint?",
          choices: [
            "Se me cayó la señal otra vez.",
            "Se me reservó la señal temprano.",
            "Se me sonrió la señal anoche."
          ],
          answer: 0,
          tests: "se me cayó la señal"
        },
        {
          prompt: "Which future clause needs subjunctive?",
          choices: [
            "Cuando por fin conectemos, seguimos.",
            "Cuando ayer conectamos, seguimos.",
            "Cuando siempre conectamos, funciona."
          ],
          answer: 0,
          tests: "future cuando plus subjunctive"
        },
        {
          prompt: "What does “conecté de una con tu abuela” mean?",
          choices: [
            "I repaired your grandmother's old router.",
            "I dropped the family call on purpose.",
            "I clicked with your grandmother right away."
          ],
          answer: 2,
          tests: "human meaning of conectar"
        }
      ]
    },
    en: {
      title: "Conectarse a una videollamada en Brisbane",
      situation:
        "Usted está en Brisbane intentando entrar a una videollamada familiar. El wifi no conecta, la llamada se cae y alguien dice que clicked con la abuela apenas pudieron hablar.",
      setting: {
        who: "Natalia dirige la llamada familiar desde su apartamento. Alejandro está al lado con un portátil, un cable y paciencia limitada.",
        what: "Una conexión inestable interrumpe la llamada: cable, wifi, estado en línea, señal caída y la sensación humana de conectar con alguien de una.",
        when: "Al comienzo de la noche, justo cuando empieza a llover y todos intentan entrar antes de comer.",
        where: "Brisbane, en un apartamento donde la conexión parecía suficiente hasta que dejó de serlo.",
        why: "Porque el inglés separa “connect,” “be connected,” “the signal dropped,” “the internet isn't working” y “click with someone.”"
      },
      address: {
        form: "mixed",
        who: "Natalia y Alejandro son familiares de la misma generación. En inglés ambos usan “you” y hablan rápido porque están resolviendo un problema.",
        why: "El inglés no cambia pronombre para dar instrucciones técnicas. La diferencia está en verbos y estados: connect, be connected, drop, work.",
        ifYouSwitch:
          "No hay usted que activar. Para sonar menos brusco, agregue “please” o explique el motivo de la instrucción."
      },
      dialogue: [
        {
          speaker: "Natalia",
          target: "Alejandro, connect the cable first; the Wi-Fi isn't working for me.",
          translation: "Alejandro, conecta el cable primero, que el wifi no me conecta.",
          pronunciation: "a-le-JAN-dro, ko-NEKT da KEI-bol ferst; da WAI-fai I-zent WER-king for mi",
          literal: "Alejandro, conecte el cable primero; el wifi no está funcionando para mí.",
          why: "“Connect the cable” es acción técnica directa. Para “el wifi no me conecta,” lo natural suele ser “the Wi-Fi isn't working for me.”"
        },
        {
          speaker: "Alejandro",
          target: "I connected it, but I still don't show as connected in the meeting.",
          translation: "Ya lo conecté, pero sigo sin aparecer conectado en la reunión.",
          pronunciation: "ai ko-NEK-ted it, bot ai stil dont shou az ko-NEK-ted in da MI-ting",
          literal: "Lo conecté, pero todavía no aparezco como conectado en la reunión.",
          why: "La acción “connected it” no garantiza el estado “show as connected.” Esa diferencia salva muchas conversaciones técnicas."
        },
        {
          speaker: "Natalia",
          target: "Wait, my signal dropped again.",
          translation: "Espérate, se me cayó la señal otra vez.",
          pronunciation: "ueit, mai SIG-nal dropt a-GEN",
          literal: "Espere, mi señal cayó otra vez.",
          why: "“My signal dropped” traduce “se me cayó la señal” sin culpar a la persona. El problema parece venir de la red."
        },
        {
          speaker: "Alejandro",
          target: "The internet isn't working for me in this corner either.",
          translation: "A mí tampoco me coge el internet en este rincón.",
          pronunciation: "di IN-ter-net I-zent WER-king for mi in dis KOR-ner I-der",
          literal: "El internet no está funcionando para mí en este rincón tampoco.",
          why: "Para “no me coge el internet,” el inglés no usa “catch me.” Use “isn't working for me” o “I don't have service.”"
        },
        {
          speaker: "Natalia",
          target: "When we finally connect, we'll carry on as if nothing happened.",
          translation: "Cuando por fin conectemos, seguimos como si nada.",
          pronunciation: "uen ui FAI-na-li ko-NEKT, uil KE-ri on az if NA-zing JA-pend",
          literal: "Cuando finalmente conectemos, continuaremos como si nada hubiera pasado.",
          why: "“When we finally connect” mira hacia un contacto futuro. El inglés no muestra subjuntivo, pero la idea de espera sigue ahí."
        },
        {
          speaker: "Alejandro",
          target: "Still, I clicked with your grandmother right away, even though the call dropped.",
          translation: "Eso sí: con tu abuela conecté de una, aunque la llamada se cortó.",
          pronunciation: "stil, ai klikt uid yor GRAND-ma-der rait a-UEI, I-ven dou da kol dropt",
          literal: "Aun así, hice clic con su abuela de inmediato, aunque la llamada cayó.",
          why: "“Clicked with” es el conectar humano. “The call dropped” vuelve al problema técnico; la misma escena necesita dos verbos distintos."
        }
      ],
      vocabulary: [
        {
          term: "connect",
          explanation:
            "Conectar. Sirve para cables, redes, llamadas y también, con cuidado, para relaciones humanas.",
          literal: "conectar",
          useWhen:
            "Un aparato entra a una red, un cable queda enchufado, una llamada logra entrar o dos personas hacen buena conexión.",
          avoidWhen:
            "Quiere decir que el internet simplemente no funciona. Muchas veces “isn't working” suena más natural.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["be connected", "go through", "log in", "link"],
          example: {
            target: "Connect the cable first.",
            translation: "Conecta el cable primero."
          }
        },
        {
          term: "the Wi-Fi isn't working",
          explanation:
            "El wifi no me conecta o no funciona. Es la queja práctica más natural cuando no quiere diagnosticar el problema.",
          literal: "el wifi no está funcionando",
          useWhen:
            "La red no carga, no conecta o no deja entrar a la reunión.",
          avoidWhen:
            "Necesita decir específicamente que el aparato no se unió a la red. Entonces “won't connect” es más preciso.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["won't connect", "bad signal", "no service", "internet is down"],
          example: {
            target: "The Wi-Fi isn't working for me.",
            translation: "El wifi no me conecta."
          }
        },
        {
          term: "be connected",
          explanation:
            "Estar conectado o aparecer conectado. Describe el estado en línea, no la acción de enchufar algo.",
          literal: "estar conectado",
          useWhen:
            "Usted ya aparece dentro de la reunión, red o plataforma.",
          avoidWhen:
            "Está dando la orden de enchufar un cable. Ahí use “connect the cable.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["online", "logged in", "in the meeting", "connected to Wi-Fi"],
          example: {
            target: "I don't show as connected.",
            translation: "No aparezco conectado."
          }
        },
        {
          term: "my signal dropped",
          explanation:
            "Se me cayó la señal. La frase sugiere falla técnica repentina, no decisión de colgar.",
          literal: "mi señal cayó",
          useWhen:
            "Una llamada se congela, la red desaparece o la reunión entra y sale.",
          avoidWhen:
            "Usted colgó voluntariamente. Entonces diga “I hung up.”",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["the call dropped", "lost signal", "bad connection", "cut out"],
          example: {
            target: "My signal dropped again.",
            translation: "Se me cayó la señal otra vez."
          }
        },
        {
          term: "isn't working for me",
          explanation:
            "No me funciona o no me coge. Es una frase amplia cuando el servicio falla para usted en ese lugar.",
          literal: "no está funcionando para mí",
          useWhen:
            "Internet, una aplicación, un enlace o una función no responde como debería.",
          avoidWhen:
            "Quiere acusar a una persona de no contestar. Esta frase habla de sistemas, no de voluntad.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["doesn't work here", "won't load", "no service", "can't connect"],
          example: {
            target: "The internet isn't working for me here.",
            translation: "No me coge el internet aquí."
          }
        },
        {
          term: "when we connect",
          explanation:
            "Cuando conectemos. El inglés no muestra subjuntivo, pero sí habla de un contacto futuro que todavía no ocurre.",
          literal: "cuando conectamos / conectemos",
          useWhen:
            "Está esperando que una llamada, reunión o red funcione para seguir.",
          avoidWhen:
            "Habla de un hábito. Entonces el presente también se traduce, pero ya no hay incertidumbre futura.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["once we're connected", "when it works", "after we connect", "if it connects"],
          example: {
            target: "When we finally connect, we'll carry on.",
            translation: "Cuando por fin conectemos, seguimos."
          }
        },
        {
          term: "click with someone",
          explanation:
            "Conectar de una con alguien. Es química humana, no conexión técnica.",
          literal: "hacer clic con alguien",
          useWhen:
            "Dos personas se entienden rápido, comparten humor o se sienten cómodas desde el comienzo.",
          avoidWhen:
            "Habla de internet o cables. Ahí “click” sólo sería apretar con el mouse.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["hit it off", "get along", "connect with someone", "have chemistry"],
          example: {
            target: "I clicked with your grandmother right away.",
            translation: "Con tu abuela conecté de una."
          }
        }
      ],
      note:
        "“Connect” cubre mucho, pero no todo. En inglés técnico cotidiano, muchas veces gana “the Wi-Fi isn't working,” “my signal dropped” o “the call dropped.” Para personas, “clicked with” traduce mejor “conecté de una” que una frase rígida con “connected.”",
      culture: [
        {
          label: "Working for me baja el diagnóstico",
          body:
            "“The Wi-Fi isn't working for me” evita fingir que usted sabe si falló el router, la señal o el portátil. Sólo dice lo que vive el usuario."
        },
        {
          label: "Dropped no acusa",
          body:
            "“The call dropped” suena accidental. No implica que alguien colgó ni que abandonó la conversación."
        },
        {
          label: "Connected es estado visible",
          body:
            "En reuniones virtuales, aparecer connected importa tanto como enchufar el cable. El sistema decide si usted existe para los demás."
        },
        {
          label: "Click conserva lo humano",
          body:
            "“We clicked” es corto, cálido y nada técnico. Sirve cuando la conversación fluye desde el primer minuto."
        }
      ],
      pitfalls: [
        {
          mistake: "“The Wi-Fi doesn't connect me.”",
          whyItFails:
            "Calca “no me conecta,” pero en inglés cotidiano suena raro. La queja natural es que el Wi-Fi no funciona o no conecta.",
          sayInstead: "The Wi-Fi isn't working for me."
        },
        {
          mistake: "“I am connected the cable.”",
          whyItFails:
            "Mezcla estado y acción. “I connected the cable” es acción pasada; “I am connected” es estado en línea.",
          sayInstead: "I connected the cable, but I'm not connected yet."
        },
        {
          mistake: "“The internet doesn't catch me.”",
          whyItFails:
            "Traduce “no me coge el internet” palabra por palabra. En inglés el internet no “catches” a la persona.",
          sayInstead: "The internet isn't working for me here."
        },
        {
          mistake: "“I connected with your grandma of one.”",
          whyItFails:
            "Calca “de una.” Para conexión humana inmediata, el inglés usa “right away” o “immediately.”",
          sayInstead: "I clicked with your grandmother right away."
        }
      ],
      variations: [
        {
          form: "Connect the cable first.",
          register: "neutro práctico",
          region: "Inglés universal",
          whenToUse: "Dar una instrucción técnica directa."
        },
        {
          form: "The Wi-Fi isn't working for me.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "La red falla y no necesita diagnosticar por qué."
        },
        {
          form: "I still don't show as connected.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "No aparece en línea o dentro de la reunión."
        },
        {
          form: "My signal dropped again.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "La señal o llamada se cayó de repente."
        },
        {
          form: "We clicked right away.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Dos personas conectaron de una."
        }
      ],
      prompt: "Natalia says “connect the cable” but “the Wi-Fi isn't working for me.” ¿Qué cambia?",
      choices: [
        "Primero hay una acción técnica; luego falla un servicio.",
        "Primero hay química humana; luego alguien se ríe.",
        "Primero hay una reserva; luego hay una foto."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase describe estado en línea?",
          choices: [
            "I still don't show as connected.",
            "Connect the black cable first.",
            "Unplug the charger from the wall."
          ],
          answer: 0,
          tests: "be connected as online state"
        },
        {
          prompt: "¿Cuál frase traduce “se me cayó la señal”?",
          choices: [
            "My signal dropped again.",
            "My signal booked the room.",
            "My signal smiled late."
          ],
          answer: 0,
          tests: "signal dropped"
        },
        {
          prompt: "¿Cuál frase sirve para “no me coge el internet”?",
          choices: [
            "The internet isn't working for me here.",
            "The internet catches me beautifully.",
            "The internet visits my aunt today."
          ],
          answer: 0,
          tests: "isn't working for me"
        },
        {
          prompt: "¿Qué significa “I clicked with your grandmother right away”?",
          choices: [
            "Reparé el router de ella temprano.",
            "Corté la llamada familiar a propósito.",
            "Conecté humanamente con ella de una."
          ],
          answer: 2,
          tests: "click with someone"
        }
      ]
    }
  },
  {
    id: "continuing-after-a-dropped-call-in-zipaquira",
    level: "Extending · Staying in touch",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "courteous",
    pathways: ["extension"],
    verb: "continuar",
    review: "pending",
    es: {
      title: "Picking up after a dropped call in Zipaquirá",
      situation:
        "You are coordinating a family visit in Zipaquirá by phone, and the call drops several times. You need to decide whether you continue, whether you call back, and when seguir sounds more natural than continuar.",
      setting: {
        who: "Claudia is organizing a family lunch and likes clear agreements. Alex is on the call, losing signal, and trying to keep the conversation from starting over each time.",
        what: "A stop-start phone conversation: the call drops, they decide whether to continue, and they compare formal “continuar” with more everyday “seguir.”",
        when: "Saturday morning, while everyone is confirming lunch before leaving home.",
        where: "Zipaquirá, Cundinamarca, outside a bakery near the main square, with street noise and unstable signal.",
        why: "Because continuar is useful but a little formal, and its accent pattern is easy to miss: continúo, continúas, continúa, continuamos, continúan. Colombians often say seguir in speech."
      },
      address: {
        form: "usted",
        who: "Claudia and Alex are in-laws who are friendly but still keep usted in family logistics.",
        why: "Usted lets them be warm without collapsing the slight distance that can exist between relatives by marriage. It also fits the careful phone tone.",
        ifYouSwitch:
          "Tú would make the relationship sound closer than it is. Vos would not fit the family register chosen here."
      },
      dialogue: [
        {
          speaker: "Claudia",
          target: "Alex, se cortó otra vez. ¿Continuamos por acá o le devuelvo la llamada?",
          translation: "Alex, it cut out again. Do we continue here or should I call you back?",
          pronunciation: "AH-leks, seh kor-TOH OH-trah bes. kon-tee-NWAH-mos por ah-KAH o leh deh-BWEL-boh lah yah-MAH-dah",
          literal: "Alex, it cut itself another time. Do-we-continue by here or to-you I-return the call?",
          why: "“Continuamos” has no written accent, unlike most present forms. The question sounds careful and slightly formal, which fits a phone repair."
        },
        {
          speaker: "Alex",
          target: "Continuemos por acá mientras haya señal.",
          translation: "Let's continue here while there is signal.",
          pronunciation: "kon-tee-nweh-MOS por ah-KAH MYEN-tras AH-yah seh-NYAL",
          literal: "Let-us-continue by here while there-be signal.",
          why: "“Continuemos” is the subjunctive command: let's continue. “Mientras haya” also uses subjunctive because the signal may disappear."
        },
        {
          speaker: "Claudia",
          target: "Bueno. Yo continúo con la lista y usted me corrige si falta alguien.",
          translation: "Good. I'll continue with the list and you correct me if someone is missing.",
          pronunciation: "BWEH-noh. yo kon-tee-NOO-oh kon lah LEES-tah ee oos-TED meh koh-RREE-heh see FAL-tah AL-gyen",
          literal: "Good. I continue with the list and you correct me if lacks someone.",
          why: "Here is the accent payload: “continúo” carries the written accent. So do continúas, continúa and continúan; “continuamos” does not."
        },
        {
          speaker: "Alex",
          target: "Si se vuelve a caer, seguimos por mensajes y no perdemos el hilo.",
          translation: "If it drops again, we'll carry on by message and not lose the thread.",
          pronunciation: "see seh BWEL-beh ah kah-ER, seh-GEE-mos por men-SAH-hes ee no per-DEH-mos el EE-loh",
          literal: "If itself returns to fall, we-continue by messages and not we-lose the thread.",
          why: "This is the honest register split: in speech, “seguimos” often beats “continuamos.” It is warmer, shorter and less official."
        },
        {
          speaker: "Claudia",
          target: "De acuerdo; aunque se corte, la conversación continúa donde quedamos.",
          translation: "Agreed; even if it cuts out, the conversation continues where we left off.",
          pronunciation: "deh ah-KWER-doh; AUN-keh seh KOR-teh, lah kon-ber-sah-SYON kon-tee-NOO-ah DON-deh keh-DAH-mos",
          literal: "Of agreement; even-if it cut, the conversation continues where we-stayed.",
          why: "“Aunque se corte” takes subjunctive because the cut is hypothetical. “Continúa” keeps the accent and sounds like a clear agreement."
        },
        {
          speaker: "Alex",
          target: "Perfecto. Continúe con los nombres; yo anoto y después confirmamos.",
          translation: "Perfect. Continue with the names; I'll write them down and then we confirm.",
          pronunciation: "per-FEK-toh. kon-tee-NOO-eh kon los NOM-bres; yo ah-NOH-toh ee des-PWES kon-feer-MAH-mos",
          literal: "Perfect. Continue with the names; I note and afterward we-confirm.",
          why: "“Continúe” is the usted command, useful and polite. Between closer friends, Alex would probably say “siga” instead."
        }
      ],
      vocabulary: [
        {
          term: "continuar",
          explanation:
            "To continue or carry on. It is correct and useful, but often more formal than the everyday Colombian “seguir.”",
          literal: "to continue",
          useWhen:
            "A conversation, list, meeting, process or plan resumes or keeps going after an interruption.",
          avoidWhen:
            "You want the most natural casual speech. “Sigo trabajando” usually sounds better than “continúo trabajando.”",
          register: "neutral to formal",
          region: "General Spanish; register split matters in Colombia.",
          related: ["seguir", "retomar", "proseguir", "mantener"],
          example: {
            target: "¿Continuamos por acá?",
            translation: "Do we continue here?"
          }
        },
        {
          term: "continúo, continúas, continúa, continuamos, continúan",
          explanation:
            "The present pattern learners miss. Most forms carry an accent; “continuamos” does not.",
          literal: "I continue, you continue, it continues, we continue, they continue",
          useWhen:
            "Writing or noticing present-tense forms of continuar in messages, instructions and formal speech.",
          avoidWhen:
            "You are using the preterite “continuó.” That is a different past form with its own accent.",
          register: "neutral spelling",
          region: "General Spanish.",
          related: ["continúe", "continuemos", "continuó", "continuando"],
          example: {
            target: "Yo continúo con la lista.",
            translation: "I'll continue with the list."
          }
        },
        {
          term: "continuemos",
          explanation:
            "Let's continue. It is a subjunctive command form, useful when politely proposing that a conversation keep going.",
          literal: "let us continue",
          useWhen:
            "The call, meeting or explanation was interrupted and you want to resume it together.",
          avoidWhen:
            "The tone is very casual. “Sigamos” usually sounds more everyday.",
          register: "polite neutral",
          region: "General Spanish.",
          related: ["sigamos", "retomemos", "seguimos", "volvamos al punto"],
          example: {
            target: "Continuemos por acá mientras haya señal.",
            translation: "Let's continue here while there is signal."
          }
        },
        {
          term: "seguir",
          explanation:
            "The everyday competitor. Colombians reach for “seguir” constantly to say keep doing something or carry on.",
          literal: "to follow / to continue",
          useWhen:
            "Natural speech: “sigo trabajando,” “seguimos por mensajes,” “siga contando.”",
          avoidWhen:
            "You need a more formal or institutional tone. Then “continuar” can sound cleaner.",
          register: "neutral conversational",
          region: "Very common Colombian Spanish.",
          related: ["continuar", "sigamos", "siga", "seguir con"],
          example: {
            target: "Seguimos por mensajes.",
            translation: "We'll carry on by message."
          }
        },
        {
          term: "mientras haya señal",
          explanation:
            "As long as there is signal. “Haya” is subjunctive because the signal is uncertain and temporary.",
          literal: "while there be signal",
          useWhen:
            "Continuing depends on signal, time, battery, permission or any condition that may vanish.",
          avoidWhen:
            "You are stating a repeated fact about what happens whenever there is signal. Then indicative may appear.",
          register: "neutral",
          region: "General Spanish.",
          related: ["mientras funcione", "si hay señal", "hasta que se caiga", "cuando vuelva"],
          example: {
            target: "Continuemos mientras haya señal.",
            translation: "Let's continue while there is signal."
          }
        },
        {
          term: "perder el hilo",
          explanation:
            "To lose the thread of a conversation. It is what happens when interruptions make everyone forget where they were.",
          literal: "to lose the thread",
          useWhen:
            "A call, story, meeting or explanation breaks and people need to recover the point.",
          avoidWhen:
            "You literally lost string, thread or sewing material. The conversation context gives the idiom.",
          register: "neutral conversational",
          region: "General Spanish.",
          related: ["retomar el punto", "quedar en algo", "volver al tema", "seguir la idea"],
          example: {
            target: "No perdemos el hilo.",
            translation: "We don't lose the thread."
          }
        },
        {
          term: "le devuelvo la llamada",
          explanation:
            "I'll call you back. Literally returning the call, it is the normal polite phrase when a connection fails or someone cannot talk.",
          literal: "to you I return the call",
          useWhen:
            "A call drops, the timing is bad, or you need to resume by phone later.",
          avoidWhen:
            "You will reply by text rather than phone. Then say “le escribo” or “le respondo por mensaje.”",
          register: "polite practical",
          region: "General Colombian.",
          related: ["volver a llamar", "retomar la llamada", "llamar más tarde", "quedar pendiente"],
          example: {
            target: "¿Le devuelvo la llamada?",
            translation: "Should I call you back?"
          }
        }
      ],
      note:
        "Continuar is an extension-tier verb because its problem is not meaning but control. The accents matter — continúo, continúas, continúa, continuamos, continúan — and the register matters just as much. In Colombian speech, “seguir” is often the ordinary choice; “continuar” sounds more careful, formal or written.",
      culture: [
        {
          label: "Dropped calls do not reset the relationship",
          body:
            "A Colombian phone call can cut out three times and still continue with patience if everyone keeps the thread. The repair phrases matter more than apologizing forever."
        },
        {
          label: "Seguir is the everyday engine",
          body:
            "People say “sigo trabajando,” “seguimos hablando,” “siga contando” all day. “Continuar” is available, but it often puts on a slightly cleaner shirt."
        },
        {
          label: "Accents protect pronunciation",
          body:
            "The accent in “continúo” and “continúa” is not ornamental. It shows that the u is stressed and keeps the rhythm from collapsing."
        },
        {
          label: "Usted can organize family logistics",
          body:
            "In-laws, older relatives and family friends may keep usted while discussing perfectly warm plans. The form can make coordination smoother, not colder."
        }
      ],
      pitfalls: [
        {
          mistake: "Writing “continuo” when you mean “I continue”",
          whyItFails:
            "Without the accent, “continuo” can be an adjective meaning continuous. The verb form is “continúo.”",
          sayInstead: "Yo continúo con la lista."
        },
        {
          mistake: "Using “continúo trabajando” for every casual “I'm still working”",
          whyItFails:
            "It is correct, but in everyday Colombian speech it can sound more formal than needed. “Sigo trabajando” is usually the natural choice.",
          sayInstead: "Sigo trabajando."
        },
        {
          mistake: "Forgetting subjunctive after “mientras” with an uncertain future",
          whyItFails:
            "If the signal may or may not last, “mientras haya señal” is the form that fits the uncertainty.",
          sayInstead: "Continuemos mientras haya señal."
        },
        {
          mistake: "Restarting the whole conversation after every cut",
          whyItFails:
            "The language has repair phrases for continuity. “No perdamos el hilo” keeps the point alive through interruptions.",
          sayInstead: "Sigamos por mensajes y no perdamos el hilo."
        }
      ],
      variations: [
        {
          form: "¿Continuamos por acá?",
          register: "polite practical",
          region: "General Spanish",
          whenToUse: "Checking whether to keep going on the same call or channel."
        },
        {
          form: "Yo continúo con la lista.",
          register: "neutral careful",
          region: "General Spanish",
          whenToUse: "Continuing a task in clear, slightly formal speech."
        },
        {
          form: "Seguimos por mensajes.",
          register: "neutral conversational",
          region: "Very common Colombian",
          whenToUse: "The natural spoken alternative when the call is unstable."
        },
        {
          form: "Continuemos mientras haya señal.",
          register: "polite practical",
          region: "General Spanish",
          whenToUse: "Proposing to continue while an uncertain condition lasts."
        },
        {
          form: "No perdamos el hilo.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "Keeping a conversation or explanation from getting lost."
        }
      ],
      prompt: "Claudia says “yo continúo con la lista,” but Alex says “seguimos por mensajes.” What is the register contrast?",
      choices: [
        "Continuar sounds more careful; seguir sounds more everyday.",
        "Continuar means laughing; seguir means booking a room.",
        "Continuar is only for children; seguir is only for photos."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which present form is spelled correctly?",
          choices: [
            "Yo continúo con la lista.",
            "Yo continuo con la lista.",
            "Yo contino con la lista."
          ],
          answer: 0,
          tests: "accent in continúo"
        },
        {
          prompt: "Which sentence sounds most natural in casual Colombian speech?",
          choices: [
            "Sigo trabajando un rato más.",
            "Continúo laborando eternamente.",
            "Prosigo ejecutando labores."
          ],
          answer: 0,
          tests: "seguir as everyday alternative"
        },
        {
          prompt: "Which clause fits an uncertain future signal?",
          choices: [
            "Mientras haya señal, continuemos.",
            "Mientras hubo señal, continuemos.",
            "Mientras tener señal, continuemos."
          ],
          answer: 0,
          tests: "mientras haya with subjunctive"
        },
        {
          prompt: "What does “no perdamos el hilo” protect?",
          choices: [
            "The thread of the conversation.",
            "The bakery's sewing supplies.",
            "The hotel reservation number."
          ],
          answer: 0,
          tests: "perder el hilo as conversation idiom"
        }
      ]
    },
    en: {
      title: "Continuar una conversación después de una llamada caída en Dublin",
      situation:
        "Usted coordina por teléfono una comida familiar en Dublin y la llamada se corta varias veces. Necesita decidir si continue, carry on o keep going suena mejor, y cómo decir que devuelve la llamada.",
      setting: {
        who: "Claudia organiza una comida familiar y quiere acuerdos claros. Alejandro está en la llamada, pierde señal y trata de no empezar desde cero cada vez.",
        what: "Una conversación intermitente: la llamada se corta, deciden si continúan y comparan “continue” con “carry on” y “keep going.”",
        when: "Sábado por la mañana, mientras todos confirman el almuerzo antes de salir de casa.",
        where: "Dublin, afuera de una panadería cerca de una plaza concurrida, con ruido de calle y señal inestable.",
        why: "Porque “continue” existe, pero en conversación cotidiana el inglés muchas veces prefiere “carry on,” “keep going” o “call back.”"
      },
      address: {
        form: "mixed",
        who: "Claudia y Alejandro son familiares políticos. En inglés ambos usan “you”; la distancia se marca con frases cuidadosas y tono.",
        why: "El inglés no distingue usted, así que la cortesía aparece en “should I call you back?” y “let's continue,” no en el pronombre.",
        ifYouSwitch:
          "No hay pronombre alternativo. Si necesita más respeto, use una pregunta completa en vez de una orden seca."
      },
      dialogue: [
        {
          speaker: "Claudia",
          target: "Alejandro, it cut out again. Should we continue here, or should I call you back?",
          translation: "Alex, se cortó otra vez. ¿Continuamos por acá o le devuelvo la llamada?",
          pronunciation: "a-le-JAN-dro, it kat aut a-GEN. shud ui kon-TIN-yu jir, or shud ai kol yu bak",
          literal: "Alejandro, se cortó otra vez. ¿Deberíamos continuar aquí o debería llamarlo de vuelta?",
          why: "“Continue” suena claro y un poco cuidadoso. “Call you back” traduce “devolver la llamada,” no “return the call” en una charla normal."
        },
        {
          speaker: "Alejandro",
          target: "Let's continue here while we still have signal.",
          translation: "Continuemos por acá mientras haya señal.",
          pronunciation: "lets kon-TIN-yu jir wail ui stil jav SIG-nal",
          literal: "Continuemos aquí mientras todavía tenemos señal.",
          why: "El inglés no muestra el subjuntivo de “haya,” pero “while we still have signal” mantiene la idea de condición frágil."
        },
        {
          speaker: "Claudia",
          target: "Good. I'll continue with the list, and you correct me if anyone is missing.",
          translation: "Bueno. Yo continúo con la lista y usted me corrige si falta alguien.",
          pronunciation: "gud. ail kon-TIN-yu uid da list, and yu ko-REKT mi if E-ni-uan iz MI-sing",
          literal: "Bien. Continuaré con la lista, y usted me corrige si alguien falta.",
          why: "“I'll continue with the list” es correcto, aunque más cuidadoso que “I'll keep going.” El tono familiar decide cuál conviene."
        },
        {
          speaker: "Alejandro",
          target: "If it drops again, we'll carry on by text and not lose the thread.",
          translation: "Si se vuelve a caer, seguimos por mensajes y no perdemos el hilo.",
          pronunciation: "if it drops a-GEN, uil KE-ri on bai tekst and not luz da zred",
          literal: "Si se cae otra vez, continuaremos por texto y no perderemos el hilo.",
          why: "“Carry on” se parece al “seguir” cotidiano: menos formal que “continue” y muy natural después de una interrupción."
        },
        {
          speaker: "Claudia",
          target: "Agreed; even if it cuts out, the conversation can pick up where we left off.",
          translation: "De acuerdo; aunque se corte, la conversación continúa donde quedamos.",
          pronunciation: "a-GRID; I-ven if it kats aut, da kon-ver-SEI-shon kan pik ap uer ui left of",
          literal: "De acuerdo; incluso si se corta, la conversación puede recoger donde la dejamos.",
          why: "“Pick up where we left off” es la frase idiomática para retomar sin empezar de nuevo. Es más natural que traducir “continue where we stayed.”"
        },
        {
          speaker: "Alejandro",
          target: "Perfect. Keep going with the names; I'll write them down and confirm later.",
          translation: "Perfecto. Continúe con los nombres; yo anoto y después confirmamos.",
          pronunciation: "PER-fekt. kip GOU-ing uid da neims; ail rait dem daun and kon-FERM LEI-ter",
          literal: "Perfecto. Siga con los nombres; los escribiré y confirmaré después.",
          why: "“Keep going” traduce muy bien “siga” o “continúe” en habla natural. Es directo sin sonar institucional."
        }
      ],
      vocabulary: [
        {
          term: "continue",
          explanation:
            "Continuar. Es correcto y claro, pero puede sonar más formal que “carry on” o “keep going” en una conversación familiar.",
          literal: "continuar",
          useWhen:
            "Una reunión, llamada, proceso o lista sigue después de una interrupción.",
          avoidWhen:
            "Quiere sonar muy cotidiano. En muchos contextos, “keep going” o “carry on” suena más natural.",
          register: "neutro a formal",
          region: "Inglés universal.",
          related: ["carry on", "keep going", "resume", "go on"],
          example: {
            target: "Should we continue here?",
            translation: "¿Continuamos por acá?"
          }
        },
        {
          term: "I continue / you continue / it continues",
          explanation:
            "Presente de “continue.” No tiene tildes, pero “he/she/it continues” sí añade -s.",
          literal: "continúo / continúas / continúa",
          useWhen:
            "Necesita describir una acción que sigue o una situación que no se detiene.",
          avoidWhen:
            "La frase es casual y oral. “Keep going” puede sonar menos rígido.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["continues", "continued", "continuing", "keep going"],
          example: {
            target: "I'll continue with the list.",
            translation: "Yo continúo con la lista."
          }
        },
        {
          term: "let's continue",
          explanation:
            "Continuemos. Es una propuesta clara para seguir con la conversación o actividad.",
          literal: "continuemos",
          useWhen:
            "La llamada o reunión se interrumpió y usted quiere retomarla con cierto cuidado.",
          avoidWhen:
            "La escena es muy relajada. “Let's keep going” puede sentirse más conversacional.",
          register: "cortés neutro",
          region: "Inglés universal.",
          related: ["let's keep going", "let's carry on", "let's resume", "go ahead"],
          example: {
            target: "Let's continue here.",
            translation: "Continuemos por acá."
          }
        },
        {
          term: "carry on",
          explanation:
            "Seguir o continuar. En conversación, suele sonar más natural y menos formal que “continue.”",
          literal: "cargar adelante",
          useWhen:
            "Quiere seguir por mensajes, seguir hablando o continuar después de una interrupción.",
          avoidWhen:
            "Un documento formal o una instrucción institucional exige precisión. “Continue” puede ser más neutro.",
          register: "neutro conversacional",
          region: "Inglés universal; muy común en inglés británico y ampliamente entendido.",
          related: ["keep going", "go on", "continue", "press on"],
          example: {
            target: "We'll carry on by text.",
            translation: "Seguimos por mensajes."
          }
        },
        {
          term: "while we still have signal",
          explanation:
            "Mientras haya señal. El inglés lo arma sin subjuntivo visible, pero mantiene la condición frágil.",
          literal: "mientras todavía tenemos señal",
          useWhen:
            "La continuación depende de señal, batería, tiempo o permiso que puede acabarse.",
          avoidWhen:
            "La condición no es frágil sino una verdad general. Entonces la frase puede sonar demasiado dramática.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["as long as we have signal", "before it drops", "while it works", "until it cuts out"],
          example: {
            target: "Let's continue while we still have signal.",
            translation: "Continuemos mientras haya señal."
          }
        },
        {
          term: "lose the thread",
          explanation:
            "Perder el hilo de una conversación. El inglés comparte la imagen del hilo.",
          literal: "perder el hilo",
          useWhen:
            "Interrupciones hacen que la gente olvide el punto o la secuencia de lo que hablaba.",
          avoidWhen:
            "Habla de hilo físico de costura. Ahí no es modismo.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["pick up where we left off", "keep track", "follow the point", "get back to it"],
          example: {
            target: "Let's not lose the thread.",
            translation: "No perdamos el hilo."
          }
        },
        {
          term: "call you back",
          explanation:
            "Devolverle la llamada. Es la frase cotidiana para llamar otra vez después de un corte o mal momento.",
          literal: "llamarlo de vuelta",
          useWhen:
            "La llamada se cayó, alguien está ocupado o conviene retomar por teléfono más tarde.",
          avoidWhen:
            "Va a responder por mensaje. Entonces use “text you back” o “reply by text.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["phone you back", "text you back", "return your call", "try again"],
          example: {
            target: "Should I call you back?",
            translation: "¿Le devuelvo la llamada?"
          }
        }
      ],
      note:
        "“Continue” es correcto, pero no siempre es lo más hablado. En una llamada familiar, “carry on” y “keep going” suelen acercarse más a “seguir.” Use “continue” cuando quiera sonar claro o cuidadoso; use “call you back” para devolver la llamada y “pick up where we left off” para retomar sin empezar de cero.",
      culture: [
        {
          label: "Continue suena un poco más vestido",
          body:
            "No es raro ni incorrecto, pero en habla cotidiana puede sonar más formal que “keep going.” La diferencia se parece a continuar frente a seguir."
        },
        {
          label: "Carry on repara interrupciones",
          body:
            "Después de una llamada caída, “we'll carry on by text” suena práctico y tranquilo. No hace drama del fallo técnico."
        },
        {
          label: "Pick up where we left off evita repetir",
          body:
            "La frase dice que la conversación tiene memoria. Sirve cuando nadie quiere volver al comienzo por culpa de la señal."
        },
        {
          label: "Call back es la devolución normal",
          body:
            "Aunque “return your call” existe, “call you back” es la frase diaria. Para mensajes, cambie a “text you back.”"
        }
      ],
      pitfalls: [
        {
          mistake: "“I continuate with the list.”",
          whyItFails:
            "“Continuate” no es el verbo inglés cotidiano. La forma correcta es “continue.”",
          sayInstead: "I'll continue with the list."
        },
        {
          mistake: "“I continue working” for every casual “sigo trabajando.”",
          whyItFails:
            "Es gramatical, pero puede sonar más formal de lo que necesita. En charla cotidiana, “I'm still working” suele ser mejor.",
          sayInstead: "I'm still working."
        },
        {
          mistake: "“Return me the call.”",
          whyItFails:
            "Calca “devolverme la llamada.” En inglés cotidiano, la persona “calls you back.”",
          sayInstead: "Call me back."
        },
        {
          mistake: "“Continue where we stayed.”",
          whyItFails:
            "Calca “continuar donde quedamos.” La frase idiomática es “pick up where we left off.”",
          sayInstead: "Let's pick up where we left off."
        }
      ],
      variations: [
        {
          form: "Should we continue here?",
          register: "cortés práctico",
          region: "Inglés universal",
          whenToUse: "Preguntar si siguen por el mismo canal."
        },
        {
          form: "I'll continue with the list.",
          register: "neutro cuidadoso",
          region: "Inglés universal",
          whenToUse: "Seguir una tarea con tono claro y cuidado."
        },
        {
          form: "We'll carry on by text.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "La llamada falla y siguen por mensajes."
        },
        {
          form: "Let's keep going while we have signal.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Seguir de manera más hablada mientras la condición aguanta."
        },
        {
          form: "Let's pick up where we left off.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Retomar una conversación sin repetir todo."
        }
      ],
      prompt: "Claudia says “continue,” but Alejandro says “carry on by text.” ¿Qué contraste hay?",
      choices: [
        "Continue suena más cuidadoso; carry on suena más cotidiano.",
        "Continue significa llorar; carry on significa reservar.",
        "Continue sólo sirve para bebés; carry on sólo para fotos."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase corrige “continuate”?",
          choices: [
            "I'll continue with the list.",
            "I'll continuate with the list.",
            "I'll continuous with the list."
          ],
          answer: 0,
          tests: "continue as the verb"
        },
        {
          prompt: "¿Cuál suena más cotidiano para “sigo trabajando”?",
          choices: [
            "I proceed laboring formally.",
            "I'm still working.",
            "I continuate work."
          ],
          answer: 1,
          tests: "still working as everyday seguir"
        },
        {
          prompt: "¿Cuál frase sirve para devolver una llamada?",
          choices: [
            "Return me the call.",
            "Call me back.",
            "Continue me the phone."
          ],
          answer: 1,
          tests: "call back"
        },
        {
          prompt: "¿Cuál frase retoma sin empezar de cero?",
          choices: [
            "Let's pick up where we left off.",
            "Let's stay where we continued.",
            "Let's thread the bakery again."
          ],
          answer: 0,
          tests: "pick up where we left off"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/59-extending-staying-in-touch.js");
