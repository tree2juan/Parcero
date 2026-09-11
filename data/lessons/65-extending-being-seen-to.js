/*
 * Lesson block: extending / clinics, counters and being seen to.
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
    id: "esperar-a-que-lo-atiendan-en-florencia",
    level: "Extending · Being seen to",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "health-and-body",
    register: "formal",
    pathways: ["foundation", "year-12"],
    verb: "atender",
    review: "pending",
    es: {
      title: "Esperar a que lo atiendan en Florencia",
      situation:
        "You are in Florencia, Caquetá, in the waiting room of a small medical center. The receptionist is not asking whether you are going to attend something; she is asking whether you have already been seen. You have to understand that atender means to see, serve, or take care of a person.",
      setting: {
        who: "María works reception at a small medical center and is trying to keep the waiting room moving. Alex has already checked in, but nobody has called him yet.",
        what: "A waiting-room exchange about whether Alex has been seen, who will see him next, and how to praise good service afterward.",
        when: "Mid-morning, after the first rush of appointments and before the doctor leaves for lunch.",
        where: "Florencia, Caquetá, in a modest medical center where the Spanish is general and the situation is ordinary.",
        why: "Because atender is a false friend. It does not mean to attend an event; it means to see to, serve or look after someone. “¿Ya lo atendieron?” is a real sentence in clinics, banks and shops."
      },
      address: {
        form: "usted",
        who: "María and Alex use usted both ways because the setting is medical and administrative.",
        why: "Usted lets María be efficient without sounding cold, and it lets Alex ask for help without pushing past the other patients.",
        ifYouSwitch:
          "Tú would sound too familiar at the reception desk. A friendly tone can still live inside usted through words like claro, tranquilo and ya lo llamamos."
      },
      dialogue: [
        {
          speaker: "María",
          target: "Buenos días, señor Alex. ¿Ya lo atendieron o sigue esperando?",
          translation: "Good morning, Mr. Alex. Have they seen you already or are you still waiting?",
          pronunciation: "BWEH-nos DEE-as, seh-NYOR AH-leks. yah loh ah-ten-DYEH-ron oh SEE-geh es-peh-RAN-doh",
          literal: "Good days, Mr. Alex. Already you they-attended or still you-continue waiting?",
          why: "“¿Ya lo atendieron?” is the core clinic and counter question. It means “has someone seen to you?”, not “did you attend?”"
        },
        {
          speaker: "Alex",
          target: "Todavía no. Me registré hace rato, pero nadie me ha atendido.",
          translation: "Not yet. I checked in a while ago, but nobody has seen me.",
          pronunciation: "toh-dah-BEE-ah no. meh rreh-hees-TREH AH-seh RRAH-toh, PEH-roh NAH-dyeh meh ah ah-ten-DEE-doh",
          literal: "Still no. I registered myself ago while, but nobody me has attended.",
          why: "The person receiving care is the object: me ha atendido. Alex is not attending the clinic; the clinic is attending to him."
        },
        {
          speaker: "María",
          target: "Disculpe la demora. La doctora atiende primero a los pacientes con fiebre.",
          translation: "Sorry for the delay. The doctor sees the patients with fever first.",
          pronunciation: "dees-KOOL-peh lah deh-MOH-rah. lah dok-TOH-rah ah-TYEN-deh pree-MEH-roh ah los pah-SYEN-tes kon FYEH-breh",
          literal: "Excuse the delay. The doctor attends first to the patients with fever.",
          why: "Atiende shows the e to ie stem change: atender, atiendo, atiende, atienden, but atendemos. The doctor is seeing patients, not attending an event."
        },
        {
          speaker: "Alex",
          target: "Entiendo. ¿Entonces usted me atiende aquí o espero a la doctora?",
          translation: "I understand. So do you help me here, or do I wait for the doctor?",
          pronunciation: "en-TYEN-doh. en-TON-ses oos-TED meh ah-TYEN-deh ah-KEE oh es-PEH-roh ah lah dok-TOH-rah",
          literal: "I-understand. Then you me attend here or I-wait for the doctor?",
          why: "Atender can belong to reception too. At a counter, it means serving the person in front of you, not necessarily providing medical treatment."
        },
        {
          speaker: "María",
          target: "Yo lo atiendo con los papeles; la doctora lo atiende para revisar los síntomas.",
          translation: "I'll help you with the paperwork; the doctor will see you to check the symptoms.",
          pronunciation: "yoh loh ah-TYEN-doh kon los pah-PEH-les; lah dok-TOH-rah loh ah-TYEN-deh PAH-rah rreh-bee-SAR los SEEN-toh-mas",
          literal: "I you attend with the papers; the doctor you attends to review the symptoms.",
          why: "The same verb spans two kinds of being seen to: administrative service and clinical care. The context tells you which one is happening."
        },
        {
          speaker: "Alex",
          target: "Gracias. La vez pasada me atendieron muy bien aquí.",
          translation: "Thank you. Last time they treated me very well here.",
          pronunciation: "GRAH-syahs. lah bes pah-SAH-dah meh ah-ten-DYEH-ron mwee byen ah-KEE",
          literal: "Thanks. The time past they attended me very well here.",
          why: "“Me atendieron muy bien” is high praise in Colombia. It covers the human quality of the service, not just the fact that a turn happened."
        }
      ],
      vocabulary: [
        {
          term: "atender",
          explanation:
            "To see to, serve, help or look after a person in a clinic, shop, office or service setting.",
          literal: "to attend to",
          useWhen:
            "Someone at a counter or in a waiting room deals with you, calls you, helps you or provides care.",
          avoidWhen:
            "You mean attending a class, meeting or event. That is asistir, not atender.",
          register: "neutral service",
          region: "General Spanish; extremely common in Colombian counters and clinics.",
          related: ["asistir", "servir", "recibir", "cuidar"],
          example: {
            target: "¿Ya lo atendieron?",
            translation: "Have they seen you already?"
          }
        },
        {
          term: "atiendo / atiende",
          explanation:
            "The stem-changed present forms: I see to, he/she/usted sees to.",
          literal: "I attend to / you attend to",
          useWhen:
            "You are saying who is serving or looking after someone right now.",
          avoidWhen:
            "Keeping the e unchanged in stressed forms. It is atiendo and atiende, but atendemos.",
          register: "neutral",
          region: "General Spanish grammar.",
          related: ["atiendes", "atienden", "atendemos", "atendí"],
          example: {
            target: "Yo lo atiendo con los papeles.",
            translation: "I'll help you with the paperwork."
          }
        },
        {
          term: "¿ya lo atendieron?",
          explanation:
            "The question that asks whether someone has already seen to you.",
          literal: "already you they-attended?",
          useWhen:
            "A receptionist, clerk or guard checks whether you are still waiting or already being helped.",
          avoidWhen:
            "Answering as if it asked whether you attended something. You are the person receiving service.",
          register: "polite practical",
          region: "General Colombian.",
          related: ["¿ya la atendieron?", "¿lo llamaron?", "¿sigue esperando?", "¿en qué va?"],
          example: {
            target: "¿Ya lo atendieron o sigue esperando?",
            translation: "Have they seen you already or are you still waiting?"
          }
        },
        {
          term: "me atendieron muy bien",
          explanation:
            "They treated me or served me very well. In Colombia this is strong praise for service or care.",
          literal: "they attended me very well",
          useWhen:
            "A clinic, bank, shop, office or repair counter handled you with patience and competence.",
          avoidWhen:
            "Reducing it to speed. Being well attended can include kindness, clarity and solving the problem.",
          register: "warm appreciative",
          region: "General Colombian.",
          related: ["buen servicio", "me trataron bien", "fueron amables", "me orientaron"],
          example: {
            target: "Me atendieron muy bien aquí.",
            translation: "They treated me very well here."
          }
        },
        {
          term: "asistir",
          explanation:
            "To attend an event, class, meeting or appointment by being present there.",
          literal: "to attend",
          useWhen:
            "Talking about attendance at something scheduled.",
          avoidWhen:
            "Using it for being served at a counter. A clerk does not asistir you in this everyday Colombian sense.",
          register: "neutral",
          region: "General Spanish.",
          related: ["atender", "ir a", "presentarse", "participar"],
          example: {
            target: "Asistí a la cita, pero no me atendieron.",
            translation: "I attended the appointment, but they didn't see me."
          }
        },
        {
          term: "la demora",
          explanation:
            "The delay, especially one that needs an apology in a waiting room or service line.",
          literal: "the delay",
          useWhen:
            "Someone has been waiting longer than expected and the staff acknowledges it.",
          avoidWhen:
            "Blaming the person waiting. “Disculpe la demora” accepts that the service has taken time.",
          register: "polite service",
          region: "General Spanish.",
          related: ["espera", "retraso", "turno", "fila"],
          example: {
            target: "Disculpe la demora.",
            translation: "Sorry for the delay."
          }
        },
        {
          term: "seguir esperando",
          explanation:
            "To still be waiting, with the sense that the wait has already gone on for a while.",
          literal: "to continue waiting",
          useWhen:
            "You need to make clear that nobody has seen to you yet.",
          avoidWhen:
            "Sounding accusatory too early. Pair it with todavía or a calm question if you want to stay polite.",
          register: "neutral",
          region: "General Spanish.",
          related: ["todavía no", "hace rato", "turno", "llamar"],
          example: {
            target: "Sigo esperando que me atiendan.",
            translation: "I'm still waiting for them to see me."
          }
        }
      ],
      note:
        "Atender is one of the most useful false friends in the course. It is not “attend” an event; it is being seen to. A clerk atiende customers, a doctor atiende patients, a receptionist atiende paperwork, and a grateful Colombian says “me atendieron muy bien.” Save asistir for attending a meeting or appointment. Also store the stem change: atiendo, atiende, atienden, but atendemos.",
      culture: [
        {
          label: "The question that finds your place in line",
          body:
            "“¿Ya lo atendieron?” is not small talk. It tells staff whether you are waiting, already in process, or somehow lost between steps. Understanding it quickly helps you protect your turn without sounding confrontational."
        },
        {
          label: "Good service is personal",
          body:
            "“Me atendieron muy bien” praises more than efficiency. It means the person was treated with clarity, patience and respect. In Colombian Spanish, the service relationship is often judged through the way someone was attended to."
        },
        {
          label: "Florencia as ordinary adult life",
          body:
            "The scene is in Florencia to keep the map wider than the usual large cities. The Spanish stays general because the phrase belongs everywhere: clinics, counters, offices and waiting rooms across Colombia."
        }
      ],
      pitfalls: [
        {
          mistake: "Translating atender as “to attend” an event",
          whyItFails:
            "Atender is the service or care verb. Attending a meeting or appointment is asistir.",
          sayInstead: "Use atender for being seen to, and asistir for attending an event."
        },
        {
          mistake: "Saying “me atenden” instead of “me atienden”",
          whyItFails:
            "Atender changes e to ie in stressed present forms: atiendo, atiende, atienden.",
          sayInstead: "Todavía no me atienden."
        },
        {
          mistake: "Hearing “¿ya lo atendieron?” as a question about attendance",
          whyItFails:
            "The object lo is the person receiving service. The question asks whether someone has helped or seen you.",
          sayInstead: "Understand it as “have they seen you already?”"
        }
      ],
      variations: [
        {
          form: "¿Ya lo atendieron?",
          register: "polite practical",
          region: "General Colombian",
          whenToUse: "Checking whether someone in a waiting room or line has been seen to."
        },
        {
          form: "Yo lo atiendo con los papeles.",
          register: "polite service",
          region: "General Spanish",
          whenToUse: "A receptionist or clerk offers to handle the administrative part."
        },
        {
          form: "La doctora atiende primero a los pacientes con fiebre.",
          register: "clinical practical",
          region: "General Spanish",
          whenToUse: "Explaining the order in which patients are being seen."
        },
        {
          form: "Me atendieron muy bien.",
          register: "warm appreciative",
          region: "General Colombian",
          whenToUse: "Praising a clinic, shop or office for good service."
        }
      ],
      prompt: "María asks “¿Ya lo atendieron o sigue esperando?” What does she mean?",
      choices: [
        "She is asking whether someone has already seen to Alex.",
        "She is asking whether Alex attended an event earlier.",
        "She is asking whether Alex works as the receptionist."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence praises good service in Colombian Spanish?",
          choices: [
            "Asistí muy bien a la oficina.",
            "Me atendieron muy bien aquí.",
            "Atendí una reunión muy bien."
          ],
          answer: 1,
          tests: "me atendieron muy bien as praise for service"
        },
        {
          prompt: "Which present form has the correct stem change?",
          choices: [
            "La doctora atende primero.",
            "La doctora atendemos primero.",
            "La doctora atiende primero."
          ],
          answer: 2,
          tests: "atender changing e to ie in atiende"
        },
        {
          prompt: "Which verb is right for attending a scheduled event?",
          choices: [
            "Asistí a la cita médica.",
            "Atendí a la cita médica.",
            "Me atendió a la cita médica."
          ],
          answer: 0,
          tests: "asistir for attending an event or appointment"
        },
        {
          prompt: "Which line means Alex is still waiting to be seen?",
          choices: [
            "Ya asistí al edificio.",
            "Sigo esperando que me atiendan.",
            "Yo atiendo a la doctora."
          ],
          answer: 1,
          tests: "seguir esperando que me atiendan"
        }
      ]
    },
    en: {
      title: "Esperar a que lo atiendan en Florencia",
      situation:
        "Usted está en una sala de espera en Wellington y necesita hablar en inglés de que todavía no lo han atendido. La trampa es no decir “attend me”: en inglés se usa see, help, serve o look after según el contexto.",
      setting: {
        who: "María trabaja en recepción en un centro médico pequeño y trata de mantener la sala organizada. Alex ya se registró, pero nadie lo ha llamado.",
        what: "Una conversación de sala de espera sobre si Alex ya fue atendido, quién lo verá después y cómo elogiar el buen trato.",
        when: "A media mañana, después de la primera oleada de citas y antes de que la doctora salga a almorzar.",
        where: "Wellington, en un centro médico modesto, porque esta dirección enseña inglés a colombianos y ocurre fuera de Colombia.",
        why: "Porque atender no se traduce automáticamente como attend. En inglés, un médico sees a patient, un empleado helps a customer, y good service puede ser they treated me well."
      },
      address: {
        form: "mixed",
        who: "María y Alex usan el mismo “you”; la cortesía sale de Mr., have you been, still waiting y sorry for the delay.",
        why: "El inglés no tiene usted. En una recepción médica, el registro se sostiene con frases completas y tono claro, no con un pronombre distinto.",
        ifYouSwitch:
          "No hay pronombre que cambiar. El error real sería decir “did they attend you?”, que suena traducido."
      },
      dialogue: [
        {
          speaker: "María",
          target: "Good morning, Mr. Alex. Have you been seen, or are you still waiting?",
          translation: "Buenos días, señor Alex. ¿Ya lo atendieron o sigue esperando?",
          pronunciation: "gud MOR-ning, MIS-ter A-leks. jav yu bin sin, or ar yu stil WEI-ting",
          literal: "Buena mañana, señor Alex. ¿Ha sido visto, o todavía está esperando?",
          why: "Have you been seen? es la frase de sala médica. No significa visto por casualidad; significa atendido por personal de salud."
        },
        {
          speaker: "Alex",
          target: "Not yet. I checked in a while ago, but nobody has seen me.",
          translation: "Todavía no. Me registré hace rato, pero nadie me ha atendido.",
          pronunciation: "not yet. ai chekt in a wail a-GOU, bat NOU-ba-di jaz sin mi",
          literal: "Todavía no. Me registré hace un rato, pero nadie me ha visto.",
          why: "Nobody has seen me traduce nadie me ha atendido en una clínica. “Nobody has attended me” no es el patrón natural."
        },
        {
          speaker: "María",
          target: "Sorry for the delay. The doctor sees patients with fever first.",
          translation: "Disculpe la demora. La doctora atiende primero a los pacientes con fiebre.",
          pronunciation: "SA-ri for da di-LEI. da DAK-ter siz PEI-shents uid FI-ver ferst",
          literal: "Perdón por la demora. La doctora ve pacientes con fiebre primero.",
          why: "The doctor sees patients es normal en inglés médico. See aquí no es mirar, sino atender."
        },
        {
          speaker: "Alex",
          target: "I understand. Can you help me here, or should I wait for the doctor?",
          translation: "Entiendo. ¿Usted me atiende aquí o espero a la doctora?",
          pronunciation: "ai an-der-STAND. kan yu jelp mi jir, or shud ai weit for da DAK-ter",
          literal: "Entiendo. ¿Puede ayudarme aquí, o debería esperar a la doctora?",
          why: "En recepción, help me traduce atenderme mejor que see me. La función decide el verbo inglés."
        },
        {
          speaker: "María",
          target: "I'll help you with the paperwork; the doctor will see you for the symptoms.",
          translation: "Yo lo atiendo con los papeles; la doctora lo atiende para revisar los síntomas.",
          pronunciation: "ail jelp yu uid da PEI-per-work; da DAK-ter wil si yu for da SIMP-toms",
          literal: "Le ayudaré con el papeleo; la doctora lo verá por los síntomas.",
          why: "La misma palabra española se reparte en inglés: help para el mostrador, see para la consulta médica."
        },
        {
          speaker: "Alex",
          target: "Thank you. Last time, they treated me really well here.",
          translation: "Gracias. La vez pasada me atendieron muy bien aquí.",
          pronunciation: "thank yu. last taim, dei TRI-ted mi RI-a-li wel jir",
          literal: "Gracias. La vez pasada me trataron muy bien aquí.",
          why: "They treated me really well captura el elogio de me atendieron muy bien. No se trata sólo de velocidad, sino del trato."
        }
      ],
      vocabulary: [
        {
          term: "be seen",
          explanation:
            "Ser atendido por personal médico o por alguien que debe revisarlo.",
          literal: "ser visto",
          useWhen:
            "Usted está en una clínica, hospital o consulta y espera que un profesional lo atienda.",
          avoidWhen:
            "Traducirlo como ser visto por casualidad. En este contexto, seen significa atendido.",
          register: "clínico práctico",
          region: "Inglés universal.",
          related: ["see a doctor", "be treated", "get help", "be called in"],
          example: {
            target: "Have you been seen yet?",
            translation: "¿Ya lo atendieron?"
          }
        },
        {
          term: "help",
          explanation:
            "Ayudar o atender en un mostrador, recepción o servicio.",
          literal: "ayudar",
          useWhen:
            "Un empleado maneja papeles, pagos, turnos o preguntas prácticas.",
          avoidWhen:
            "Una consulta médica real. Ahí el médico usually sees you rather than helps you at the counter.",
          register: "neutro de servicio",
          region: "Inglés universal.",
          related: ["serve", "assist", "deal with", "take care of"],
          example: {
            target: "Can you help me here?",
            translation: "¿Usted me atiende aquí?"
          }
        },
        {
          term: "see patients",
          explanation:
            "Atender pacientes. See no es sólo mirar; en medicina significa recibir y evaluar a un paciente.",
          literal: "ver pacientes",
          useWhen:
            "Habla de médicos, enfermeras o especialistas que atienden consultas.",
          avoidWhen:
            "Decir “attend patients” como calco. Puede existir en registros específicos, pero no es la frase cotidiana.",
          register: "clínico neutro",
          region: "Inglés universal.",
          related: ["treat patients", "examine patients", "call patients in", "be seen"],
          example: {
            target: "The doctor sees patients with fever first.",
            translation: "La doctora atiende primero a los pacientes con fiebre."
          }
        },
        {
          term: "treated me really well",
          explanation:
            "Me atendieron muy bien, con buen trato y buen servicio.",
          literal: "me trataron muy bien",
          useWhen:
            "Quiere elogiar una clínica, tienda, oficina o servicio por la manera en que lo manejaron.",
          avoidWhen:
            "Pensar sólo en tratamiento médico. Treat también habla de trato humano.",
          register: "cálido apreciativo",
          region: "Inglés universal.",
          related: ["good service", "looked after me", "were kind", "helped me well"],
          example: {
            target: "They treated me really well here.",
            translation: "Me atendieron muy bien aquí."
          }
        },
        {
          term: "attend",
          explanation:
            "Asistir a una clase, reunión, evento o cita programada.",
          literal: "asistir",
          useWhen:
            "Usted estuvo presente en algo: attended a meeting, attended class, attended an appointment.",
          avoidWhen:
            "Quiere decir que alguien lo atendió en un mostrador o consulta. Use see, help, serve o treat.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["go to", "be present", "show up for", "take part in"],
          example: {
            target: "I attended the appointment, but nobody saw me.",
            translation: "Asistí a la cita, pero nadie me atendió."
          }
        },
        {
          term: "delay",
          explanation:
            "Demora o retraso, especialmente cuando alguien ha esperado más de lo previsto.",
          literal: "demora",
          useWhen:
            "Un servicio reconoce que una persona lleva esperando.",
          avoidWhen:
            "Culpar al paciente o cliente. Sorry for the delay acepta el tiempo perdido.",
          register: "cortés de servicio",
          region: "Inglés universal.",
          related: ["wait", "running late", "hold-up", "behind schedule"],
          example: {
            target: "Sorry for the delay.",
            translation: "Disculpe la demora."
          }
        },
        {
          term: "still waiting",
          explanation:
            "Seguir esperando; todavía no lo han atendido.",
          literal: "todavía esperando",
          useWhen:
            "Usted necesita aclarar que su turno o atención no ha llegado.",
          avoidWhen:
            "Sonar acusatorio si sólo está preguntando. El tono y “not yet” ayudan.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["not yet", "waiting to be seen", "checked in", "called in"],
          example: {
            target: "I'm still waiting to be seen.",
            translation: "Sigo esperando que me atiendan."
          }
        }
      ],
      note:
        "Atender se reparte en varios verbos ingleses. En una clínica, “me atendieron” puede ser “they saw me” o “I was seen.” En recepción, puede ser “they helped me.” Para elogiar el servicio, “they treated me really well” suena natural. Attend es otra cosa: asistir a una cita, clase o reunión. Por eso “did they attend you?” delata traducción literal.",
      culture: [
        {
          label: "Seen no siempre es visual",
          body:
            "En una consulta, being seen significa ser atendido. La persona no está preguntando si alguien lo miró desde lejos, sino si un profesional ya asumió su caso."
        },
        {
          label: "Service se traduce por función",
          body:
            "El español colombiano puede usar atender en recepción, tienda y consulta. El inglés obliga a elegir según la función: help, serve, see, treat, look after. Esa elección hace que la frase suene menos traducida."
        },
        {
          label: "Good treatment is not only treatment",
          body:
            "They treated me well puede hablar de trato humano, no sólo de tratamiento médico. Por eso sirve para traducir “me atendieron muy bien” cuando usted quiere elogiar cómo lo trataron."
        }
      ],
      pitfalls: [
        {
          mistake: "“Did they attend you yet?”",
          whyItFails:
            "Es un calco de “¿ya lo atendieron?” Attend es asistir a un evento; no es el verbo normal para recibir atención.",
          sayInstead: "Have you been seen yet?"
        },
        {
          mistake: "“The doctor attended me.”",
          whyItFails:
            "Se puede entender en algunos contextos, pero suena formal o traducido. En una clínica cotidiana, the doctor saw me es más natural.",
          sayInstead: "The doctor saw me."
        },
        {
          mistake: "“I assisted the appointment.”",
          whyItFails:
            "Assist no traduce asistir en este sentido. Para estar presente en una cita, use attend.",
          sayInstead: "I attended the appointment."
        }
      ],
      variations: [
        {
          form: "Have you been seen yet?",
          register: "clínico práctico",
          region: "Inglés universal",
          whenToUse: "Preguntar si alguien en una sala médica ya fue atendido."
        },
        {
          form: "I'll help you with the paperwork.",
          register: "cortés de servicio",
          region: "Inglés universal",
          whenToUse: "Una recepción o mostrador atiende la parte administrativa."
        },
        {
          form: "The doctor sees patients with fever first.",
          register: "clínico práctico",
          region: "Inglés universal",
          whenToUse: "Explicar el orden en que atienden pacientes."
        },
        {
          form: "They treated me really well.",
          register: "cálido apreciativo",
          region: "Inglés universal",
          whenToUse: "Elogiar cómo lo atendieron en una clínica, tienda u oficina."
        }
      ],
      prompt: "María asks “Have you been seen, or are you still waiting?” ¿Qué quiere saber?",
      choices: [
        "Whether someone has already attended to Alex in the clinic.",
        "Whether Alex attended a scheduled event earlier today.",
        "Whether Alex works at the reception desk himself."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase elogia una buena atención?",
          choices: [
            "I attended the clinic really well.",
            "They treated me really well here.",
            "I assisted the office very well."
          ],
          answer: 1,
          tests: "treated me really well as praise for service"
        },
        {
          prompt: "¿Cuál frase dice que la doctora atiende pacientes?",
          choices: [
            "The doctor attends events first.",
            "The doctor assists meetings first.",
            "The doctor sees patients first."
          ],
          answer: 2,
          tests: "see patients for medical atender"
        },
        {
          prompt: "¿Cuál verbo sirve para asistir a una cita?",
          choices: [
            "I attended the appointment.",
            "I was seen the appointment.",
            "I treated the appointment."
          ],
          answer: 0,
          tests: "attend for being present at an appointment"
        },
        {
          prompt: "¿Cuál frase evita el calco “attend me”?",
          choices: [
            "Nobody attended me yet.",
            "I'm still waiting to be seen.",
            "I assisted myself here."
          ],
          answer: 1,
          tests: "waiting to be seen en vez del calco attend me"
        }
      ]
    }
  },
  {
    id: "entender-una-operacion-en-buenaventura",
    level: "Extending · Being seen to",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "health-and-body",
    register: "formal",
    pathways: ["foundation", "year-12"],
    verb: "operar",
    review: "pending",
    es: {
      title: "Entender una operación en Buenaventura",
      situation:
        "You are in Buenaventura accompanying a friend whose brother just came out of surgery. The family talks quickly: he had his appendix operated on, the operation went well, and now all that is left is to wait. You need to understand operar de + the body part or condition without turning the scene into cold language.",
      setting: {
        who: "Nora is waiting for news about her brother, and Alex is the friend helping her understand the updates. The nurse is calm but direct because the family is anxious.",
        what: "A post-surgery explanation: who was operated on, what he was operated for, and what operating can mean outside surgery.",
        when: "Early evening, after several hours in the waiting room and just after the nurse comes out.",
        where: "Buenaventura, in the family waiting area of a hospital, with the focus on human reassurance rather than medical vocabulary for its own sake.",
        why: "Because operar is the verb you may need to understand quickly in a hospital. In Colombia people say “lo operaron del apéndice” or “la operaron de la rodilla,” using de for the body part or condition."
      },
      address: {
        form: "usted",
        who: "The nurse uses usted with Nora and Alex, and they use usted back.",
        why: "The tone is professional and reassuring. Usted gives the nurse authority without taking warmth out of the update.",
        ifYouSwitch:
          "Tú would be too familiar from staff to family in this moment. A relative may use tú with Nora, but the hospital update stays in usted."
      },
      dialogue: [
        {
          speaker: "Enfermera",
          target: "Doña Nora, ya operaron a su hermano y la cirugía salió bien.",
          translation: "Doña Nora, they have operated on your brother and the surgery went well.",
          pronunciation: "DOH-nyah NOH-rah, yah oh-peh-RAH-ron ah soo ehr-MAH-noh ee lah see-roo-HEE-ah sah-LYOH byen",
          literal: "Doña Nora, already they-operated your brother and the surgery came-out well.",
          why: "Colombian hospital Spanish often says the plural “operaron” without naming the surgical team. The focus is the patient and the result."
        },
        {
          speaker: "Nora",
          target: "¿Lo operaron del apéndice, como dijo el médico?",
          translation: "Did they operate on him for his appendix, as the doctor said?",
          pronunciation: "loh oh-peh-RAH-ron del ah-PEN-dee-seh, KO-moh dee-HOH el MEH-dee-koh",
          literal: "Him they-operated of-the appendix, as said the doctor?",
          why: "This is the high-value pattern: operar de plus the body part or condition. English wants “for” or “on”; Spanish reaches for de."
        },
        {
          speaker: "Enfermera",
          target: "Sí, lo operaron del apéndice inflamado. Ahora está estable.",
          translation: "Yes, they operated on him for the inflamed appendix. He is stable now.",
          pronunciation: "see, loh oh-peh-RAH-ron del ah-PEN-dee-seh een-flah-MAH-doh. ah-OH-rah es-TAH es-TAH-bleh",
          literal: "Yes, him they-operated of-the appendix inflamed. Now he-is stable.",
          why: "Repeating the pattern matters because families hear it under stress. “Está estable” gives the human reassurance the verb alone cannot give."
        },
        {
          speaker: "Alex",
          target: "Entonces, cuando dicen que lo operaron, ¿quiere decir que ya terminó?",
          translation: "So when they say they operated on him, does that mean it is already over?",
          pronunciation: "en-TON-ses, KWAN-doh DEE-sen keh loh oh-peh-RAH-ron, KYEH-reh deh-SEER keh yah tehr-mee-NOH",
          literal: "Then, when they-say that him they-operated, wants to-say that already finished?",
          why: "Alex asks the real comprehension question. In a hospital, the past form operaron usually means the surgery has happened, not that it is about to start."
        },
        {
          speaker: "Enfermera",
          target: "Sí. El quirófano sigue operando, pero su hermano ya pasó a recuperación.",
          translation: "Yes. The operating room is still operating, but your brother has already moved to recovery.",
          pronunciation: "see. el kee-ROH-fah-noh SEE-geh oh-peh-RAN-doh, PEH-roh soo ehr-MAH-noh yah pah-SOH ah rreh-koo-peh-rah-SYON",
          literal: "Yes. The operating-room continues operating, but your brother already passed to recovery.",
          why: "Operar also means to operate or run a place or machine. Here the operating room keeps functioning while one patient has left surgery."
        },
        {
          speaker: "Nora",
          target: "Gracias por explicarnos. Pensé que todavía lo iban a operar.",
          translation: "Thank you for explaining it to us. I thought they were still going to operate on him.",
          pronunciation: "GRAH-syahs por eks-plee-KAR-nos. pen-SEH keh toh-dah-BEE-ah loh EE-bahn ah oh-peh-RAR",
          literal: "Thanks for explaining-to-us. I-thought that still him they-were-going to operate.",
          why: "The contrast between “lo operaron” and “lo iban a operar” is the difference between relief and more waiting. Tense matters under pressure."
        }
      ],
      vocabulary: [
        {
          term: "operar",
          explanation:
            "To operate, especially to perform surgery; also to run a business, system or machine.",
          literal: "to operate",
          useWhen:
            "Doctors perform surgery, a machine functions, or a company runs in a place.",
          avoidWhen:
            "You mean simply treating someone without surgery. A doctor can atender a patient without operating on them.",
          register: "neutral medical",
          region: "General Spanish; the surgery pattern is common in Colombia.",
          related: ["cirugía", "intervenir", "funcionar", "manejar"],
          example: {
            target: "Ya operaron a su hermano.",
            translation: "They have operated on your brother."
          }
        },
        {
          term: "operar de",
          explanation:
            "The Colombian and general Spanish surgery pattern: operate for/on a body part or condition.",
          literal: "to operate of",
          useWhen:
            "Naming what the surgery was for: appendix, knee, a hernia, or another body part or condition.",
          avoidWhen:
            "Copying English prepositions. Spanish does not usually say operar en el apéndice in this family update.",
          register: "medical practical",
          region: "General Colombian and broader Spanish.",
          related: ["operado de", "cirugía de", "intervención", "del apéndice"],
          example: {
            target: "Lo operaron del apéndice.",
            translation: "They operated on him for his appendix."
          }
        },
        {
          term: "lo operaron",
          explanation:
            "They operated on him. The lo marks the patient who underwent surgery.",
          literal: "him they-operated",
          useWhen:
            "Family or staff report that a male patient has had surgery.",
          avoidWhen:
            "Forgetting the object pronoun. “Operaron del apéndice” leaves the patient unnamed and can sound incomplete.",
          register: "neutral medical",
          region: "General Spanish.",
          related: ["la operaron", "lo van a operar", "lo operaron de", "fue operado"],
          example: {
            target: "Ya lo operaron.",
            translation: "They already operated on him."
          }
        },
        {
          term: "la operación / la cirugía",
          explanation:
            "The operation or surgery. Both words are common; cirugía is often the cleaner medical noun.",
          literal: "the operation / surgery",
          useWhen:
            "Talking about the procedure itself, how it went, or when it starts.",
          avoidWhen:
            "Using operación for every process outside medicine. It can also mean an operation in business or systems, but context matters.",
          register: "medical neutral",
          region: "General Spanish.",
          related: ["procedimiento", "quirófano", "recuperación", "anestesia"],
          example: {
            target: "La cirugía salió bien.",
            translation: "The surgery went well."
          }
        },
        {
          term: "quirófano",
          explanation:
            "The operating room, the place where surgery happens.",
          literal: "surgery room",
          useWhen:
            "Hospital staff explain where a patient is or why the family cannot enter.",
          avoidWhen:
            "Translating it as clinic. It is the specific surgical room, not the whole building.",
          register: "medical",
          region: "General Spanish.",
          related: ["sala de cirugía", "recuperación", "hospital", "enfermera"],
          example: {
            target: "El quirófano sigue operando.",
            translation: "The operating room is still operating."
          }
        },
        {
          term: "recuperación",
          explanation:
            "Recovery, and also the recovery area after surgery.",
          literal: "recovery",
          useWhen:
            "A patient has left surgery and is being monitored before family can see them.",
          avoidWhen:
            "Assuming it means fully recovered. Passing to recuperación means the next stage has begun.",
          register: "medical neutral",
          region: "General Spanish.",
          related: ["estable", "observación", "cuidados", "postoperatorio"],
          example: {
            target: "Ya pasó a recuperación.",
            translation: "He has moved to recovery."
          }
        },
        {
          term: "está estable",
          explanation:
            "He or she is stable, a short hospital phrase that lowers panic without promising everything is over.",
          literal: "is stable",
          useWhen:
            "Medical staff report that a patient's condition is not worsening or critical right now.",
          avoidWhen:
            "Treating it as “healthy.” Stable is reassuring, but not the same as fully well.",
          register: "medical neutral",
          region: "General Spanish.",
          related: ["fuera de peligro", "en observación", "mejorando", "controlado"],
          example: {
            target: "Ahora está estable.",
            translation: "He is stable now."
          }
        }
      ],
      note:
        "Operar matters most when someone you care about is in surgery. Colombian Spanish often says “lo operaron del apéndice,” “la operaron de la rodilla,” or “lo van a operar de una hernia.” The preposition de is part of the pattern. The verb also means to operate or run a machine, room or business, but in a hospital the human reading comes first.",
      culture: [
        {
          label: "Families wait on tense",
          body:
            "In a waiting room, “lo van a operar” and “lo operaron” feel miles apart. One means more waiting; the other means the procedure has happened. A learner who catches the tense can understand the emotional temperature of the room."
        },
        {
          label: "De is the surgery preposition",
          body:
            "English wants operate on or operate for. Spanish often says operar de: del apéndice, de la rodilla, de una hernia. Hearing that de quickly helps you identify what the operation was for."
        },
        {
          label: "Buenaventura without spectacle",
          body:
            "The setting widens the course map, but the lesson avoids turning the city into scenery. A hospital waiting room is ordinary human life anywhere; the Colombian detail is how the family hears the update."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “operaron en el apéndice” as the default pattern",
          whyItFails:
            "People will probably understand, but the family-summary pattern is “lo operaron del apéndice.”",
          sayInstead: "Lo operaron del apéndice."
        },
        {
          mistake: "Dropping lo or la before operaron",
          whyItFails:
            "The object pronoun marks the patient. Without it, the sentence can sound unfinished or impersonal in the wrong way.",
          sayInstead: "Ya lo operaron."
        },
        {
          mistake: "Assuming operar only means surgery",
          whyItFails:
            "Surgery is the urgent meaning here, but operar also means a machine, room or business operates.",
          sayInstead: "Use context: “el quirófano opera” is functioning; “lo operaron” is surgery."
        }
      ],
      variations: [
        {
          form: "Lo operaron del apéndice.",
          register: "medical practical",
          region: "General Colombian",
          whenToUse: "Telling family what the surgery was for."
        },
        {
          form: "La cirugía salió bien.",
          register: "medical reassuring",
          region: "General Spanish",
          whenToUse: "Giving the result of the procedure clearly."
        },
        {
          form: "Todavía lo van a operar.",
          register: "medical practical",
          region: "General Spanish",
          whenToUse: "Saying surgery is still ahead, not finished."
        },
        {
          form: "El quirófano sigue operando.",
          register: "medical operational",
          region: "General Spanish",
          whenToUse: "Talking about a room or service continuing to function."
        }
      ],
      prompt: "Nora asks “¿Lo operaron del apéndice?” What pattern should you notice?",
      choices: [
        "Operar de names the body part or condition behind the surgery.",
        "Operar en is the only natural Colombian pattern for surgery.",
        "Operar here means the brother is running a hospital machine."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence best says he had appendix surgery?",
          choices: [
            "Lo operaron en el apéndice.",
            "Lo operaron del apéndice.",
            "Lo operó con el apéndice."
          ],
          answer: 1,
          tests: "operar de plus body part or condition"
        },
        {
          prompt: "Which line means the surgery is still in the future?",
          choices: [
            "Ya lo operaron ayer.",
            "La cirugía salió bien.",
            "Todavía lo van a operar."
          ],
          answer: 2,
          tests: "lo van a operar versus lo operaron"
        },
        {
          prompt: "Which sentence uses operar for something functioning?",
          choices: [
            "El quirófano sigue operando.",
            "Lo operaron del apéndice.",
            "La operaron de la rodilla."
          ],
          answer: 0,
          tests: "operar as operating or functioning"
        },
        {
          prompt: "Which phrase gives reassurance without saying fully recovered?",
          choices: [
            "Todavía no hay noticias.",
            "Ahora está estable.",
            "Sigue esperando turno."
          ],
          answer: 1,
          tests: "está estable as hospital reassurance"
        }
      ]
    },
    en: {
      title: "Entender una operación en Buenaventura",
      situation:
        "Usted está en una sala de espera en Cork acompañando a una amiga cuyo hermano salió de cirugía. Necesita entender operate on, have surgery, appendix surgery y recovery, sin traducir literalmente “lo operaron del apéndice.”",
      setting: {
        who: "Nora espera noticias de su hermano y Alex la acompaña para entender los avisos. La enfermera habla con calma porque la familia está ansiosa.",
        what: "Una explicación después de cirugía: a quién operaron, de qué lo operaron y cómo se habla de recuperación.",
        when: "Al comienzo de la noche, después de varias horas en sala de espera y justo cuando sale la enfermera.",
        where: "Cork, en la sala familiar de un hospital, porque esta dirección enseña inglés y ocurre fuera de Colombia.",
        why: "Porque operate sirve para cirugía, máquinas y negocios, pero en hospitales el patrón humano es operate on someone or have surgery for something."
      },
      address: {
        form: "mixed",
        who: "La enfermera, Nora y Alex usan el mismo “you”; el registro profesional aparece en Mrs., surgery, stable y recovery.",
        why: "El inglés no tiene usted. En un hospital, la cortesía se oye en la claridad, el tono y la información completa.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Lo peligroso sería traducir de como of y decir “operated him of the appendix.”"
      },
      dialogue: [
        {
          speaker: "Nurse",
          target: "Mrs. Nora, your brother has had surgery, and it went well.",
          translation: "Doña Nora, su hermano ya tuvo cirugía y salió bien.",
          pronunciation: "MI-sis NO-ra, yor BRA-der jaz jad SUR-ye-ri, and it went wel",
          literal: "Señora Nora, su hermano ha tenido cirugía, y eso fue bien.",
          why: "La frase “has had surgery” suele ser el aviso familiar más limpio. Evita una pasiva torpe y confirma que el procedimiento ya terminó."
        },
        {
          speaker: "Nora",
          target: "Did they operate on him for his appendix, like the doctor said?",
          translation: "¿Lo operaron del apéndice, como dijo el médico?",
          pronunciation: "did dei O-pe-reit on jim for jis a-PEN-diks, laik da DAK-ter sed",
          literal: "¿Operaron en él para su apéndice, como el doctor dijo?",
          why: "La frase “operate on him” marca al paciente; “for his appendix” marca la razón. El inglés no usa “of” como el español usa de aquí."
        },
        {
          speaker: "Nurse",
          target: "Yes, they operated on him for an inflamed appendix. He's stable now.",
          translation: "Sí, lo operaron del apéndice inflamado. Ahora está estable.",
          pronunciation: "yes, dei O-pe-rei-ted on jim for an in-FLEIMD a-PEN-diks. jiz STEI-bel nau",
          literal: "Sí, operaron en él por un apéndice inflamado. Está estable ahora.",
          why: "La frase “they operated on him” es la versión activa y cotidiana. En escritura formal puede aparecer “he was operated on,” pero la familia suele oír la forma activa."
        },
        {
          speaker: "Alex",
          target: "So when you say he had surgery, does that mean it's over?",
          translation: "Entonces, cuando dice que tuvo cirugía, ¿eso quiere decir que ya terminó?",
          pronunciation: "so wen yu sei ji jad SUR-ye-ri, daz dat min its OU-ver",
          literal: "Entonces cuando dice él tuvo cirugía, ¿eso significa que está terminado?",
          why: "La frase “had surgery” mira hacia atrás. La pregunta revisa la misma diferencia de tiempo que en español separa “lo operaron” de “lo van a operar.”"
        },
        {
          speaker: "Nurse",
          target: "Yes. The operating room is still running, but your brother is in recovery.",
          translation: "Sí. El quirófano sigue operando, pero su hermano está en recuperación.",
          pronunciation: "yes. di O-pe-rei-ting rum iz stil RA-ning, bat yor BRA-der iz in ri-KA-ve-ri",
          literal: "Sí. La sala de operación sigue corriendo, pero su hermano está en recuperación.",
          why: "“Running” traduce operar cuando un servicio o lugar está funcionando. “Operate” también existe, pero “running” suena más cotidiano para la actividad de la sala."
        },
        {
          speaker: "Nora",
          target: "Thank you for explaining. I thought they were still going to operate on him.",
          translation: "Gracias por explicar. Pensé que todavía lo iban a operar.",
          pronunciation: "thank yu for eks-PLEI-ning. ai thot dei wer stil GOU-ing tu O-pe-reit on jim",
          literal: "Gracias por explicar. Pensé que todavía iban a operar en él.",
          why: "“Going to operate on him” mantiene la cirugía en el futuro. Esa sola frase cambia el estado emocional de la familia."
        }
      ],
      vocabulary: [
        {
          term: "operate",
          explanation:
            "Operar: hacer cirugía, manejar una máquina o hacer funcionar un negocio o servicio.",
          literal: "operar",
          useWhen:
            "Médicos hacen cirugía, una máquina funciona, o una empresa opera en un lugar.",
          avoidWhen:
            "Quiere decir sólo atender sin cirugía. A doctor can see a patient without operating on them.",
          register: "neutro médico",
          region: "Inglés universal.",
          related: ["have surgery", "operate on", "run", "function"],
          example: {
            target: "They operated on him yesterday.",
            translation: "Lo operaron ayer."
          }
        },
        {
          term: "operate on",
          explanation:
            "Operar a alguien. El paciente va con on: operate on him, operate on her.",
          literal: "operar en",
          useWhen:
            "Quiere decir quién recibió la cirugía.",
          avoidWhen:
            "Calcar operar de con of. “Operated him of the appendix” no es el patrón natural.",
          register: "médico práctico",
          region: "Inglés universal.",
          related: ["have surgery for", "was operated on", "surgeon", "procedure"],
          example: {
            target: "They operated on him for his appendix.",
            translation: "Lo operaron del apéndice."
          }
        },
        {
          term: "had surgery",
          explanation:
            "Tuvo cirugía o lo operaron. Es una forma muy común de informar que el procedimiento ocurrió.",
          literal: "tuvo cirugía",
          useWhen:
            "Cuenta a la familia que la cirugía ya pasó o pregunta si alguien fue operado.",
          avoidWhen:
            "Necesita nombrar al equipo quirúrgico. Entonces use they operated on him o he was operated on.",
          register: "médico neutro",
          region: "Inglés universal.",
          related: ["underwent surgery", "was operated on", "operation", "procedure"],
          example: {
            target: "Your brother has had surgery.",
            translation: "A su hermano ya lo operaron."
          }
        },
        {
          term: "surgery / operation",
          explanation:
            "Cirugía u operación. Surgery suele ser el sustantivo médico más natural.",
          literal: "cirugía / operación",
          useWhen:
            "Habla del procedimiento, de cómo salió o de cuándo empieza.",
          avoidWhen:
            "Usar operation para todo si surgery suena más claro y humano en contexto médico.",
          register: "médico neutro",
          region: "Inglés universal.",
          related: ["procedure", "operating room", "recovery", "anaesthetic"],
          example: {
            target: "The surgery went well.",
            translation: "La cirugía salió bien."
          }
        },
        {
          term: "operating room",
          explanation:
            "Quirófano, la sala donde ocurre la cirugía.",
          literal: "sala de operar",
          useWhen:
            "El hospital explica dónde está un paciente o qué servicio sigue activo.",
          avoidWhen:
            "Confundirlo con the clinic. Es el cuarto quirúrgico específico, no todo el centro médico.",
          register: "médico",
          region: "Inglés universal.",
          related: ["OR", "recovery room", "hospital", "surgical team"],
          example: {
            target: "The operating room is still running.",
            translation: "El quirófano sigue operando."
          }
        },
        {
          term: "recovery",
          explanation:
            "Recuperación, y también la zona de recuperación después de cirugía.",
          literal: "recuperación",
          useWhen:
            "El paciente salió de cirugía y está siendo observado antes de ver a la familia.",
          avoidWhen:
            "Pensar que significa curación completa. Being in recovery is only the next stage.",
          register: "médico neutro",
          region: "Inglés universal.",
          related: ["stable", "monitoring", "post-op", "recovery room"],
          example: {
            target: "Your brother is in recovery.",
            translation: "Su hermano está en recuperación."
          }
        },
        {
          term: "stable",
          explanation:
            "Estable, una frase breve de hospital que calma sin prometer que todo terminó.",
          literal: "estable",
          useWhen:
            "El estado del paciente no empeora ni está crítico en este momento.",
          avoidWhen:
            "Traducirlo como healthy. Stable no significa completamente sano.",
          register: "médico neutro",
          region: "Inglés universal.",
          related: ["recovering", "being monitored", "out of danger", "doing okay"],
          example: {
            target: "He's stable now.",
            translation: "Ahora está estable."
          }
        }
      ],
      note:
        "Operar en inglés sí existe como operate, pero la cirugía se arma con patrones concretos: operate on someone, have surgery, surgery went well, be in recovery. Para “lo operaron del apéndice,” no diga “operated him of the appendix.” Diga they operated on him for his appendix, o más natural en un aviso familiar: he had appendix surgery.",
      culture: [
        {
          label: "Have surgery suena humano",
          body:
            "En una sala de espera, “your brother has had surgery” puede sonar más claro que una pasiva larga. Confirma que pasó el procedimiento y deja espacio para lo importante: went well, stable, recovery."
        },
        {
          label: "On marca el paciente",
          body:
            "Operate on him, operate on her. El on no traduce exactamente nada del español, pero es el patrón que el inglés necesita para marcar quién recibe la cirugía."
        },
        {
          label: "Running compite con operating",
          body:
            "Para máquinas, negocios y servicios, operate y run pueden cruzarse. The operating room is running puede sonar más cotidiano que the operating room is operating, aunque ambas ideas vienen de operar."
        }
      ],
      pitfalls: [
        {
          mistake: "“They operated him of the appendix.”",
          whyItFails:
            "Calca “lo operaron del apéndice.” En inglés, el paciente va con on y la razón puede ir con for.",
          sayInstead: "They operated on him for his appendix."
        },
        {
          mistake: "“The surgery exited well.”",
          whyItFails:
            "Salir bien no se traduce con exit. El resultado de una cirugía se expresa con went well.",
          sayInstead: "The surgery went well."
        },
        {
          mistake: "“He is in recuperation.”",
          whyItFails:
            "Recuperation existe, pero en el hospital la palabra cotidiana es recovery.",
          sayInstead: "He is in recovery."
        }
      ],
      variations: [
        {
          form: "He had appendix surgery.",
          register: "médico práctico",
          region: "Inglés universal",
          whenToUse: "Informar de qué fue la cirugía sin una frase pesada."
        },
        {
          form: "The surgery went well.",
          register: "médico tranquilizador",
          region: "Inglés universal",
          whenToUse: "Dar el resultado del procedimiento con claridad."
        },
        {
          form: "They're still going to operate on him.",
          register: "médico práctico",
          region: "Inglés universal",
          whenToUse: "Decir que la cirugía todavía está pendiente."
        },
        {
          form: "The operating room is still running.",
          register: "médico operational",
          region: "Inglés universal",
          whenToUse: "Hablar de una sala o servicio que sigue funcionando."
        }
      ],
      prompt: "Nora asks “Did they operate on him for his appendix?” ¿Qué patrón debe notar?",
      choices: [
        "Operate on marks the patient, and for marks the reason.",
        "Operate of is the natural English pattern for surgery.",
        "Operate here means the brother runs hospital machines."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase dice naturalmente que tuvo cirugía de apéndice?",
          choices: [
            "They operated him of appendix.",
            "He had appendix surgery.",
            "He ran the appendix room."
          ],
          answer: 1,
          tests: "appendix surgery or operate on for operar de"
        },
        {
          prompt: "¿Cuál frase mantiene la cirugía en el futuro?",
          choices: [
            "He already had surgery.",
            "The surgery went well.",
            "They're going to operate on him."
          ],
          answer: 2,
          tests: "going to operate on him as future surgery"
        },
        {
          prompt: "¿Cuál frase usa run para operar un servicio?",
          choices: [
            "The operating room is still running.",
            "They operated on him yesterday.",
            "He had surgery this morning."
          ],
          answer: 0,
          tests: "running for a service that operates"
        },
        {
          prompt: "¿Cuál frase tranquiliza sin decir curado?",
          choices: [
            "There is still no news.",
            "He's stable now.",
            "He attended the room."
          ],
          answer: 1,
          tests: "stable as hospital reassurance"
        }
      ]
    }
  },
  {
    id: "medirse-en-zipaquira",
    level: "Extending · Being seen to",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "health-and-body",
    register: "neutral",
    pathways: ["foundation", "year-12"],
    verb: "medir",
    review: "pending",
    es: {
      title: "Medirse bien en Zipaquirá",
      situation:
        "You are in Zipaquirá before an occupational-health appointment, and a nurse needs to measure your height, weight, and waist. Afterward you stop by a shop where they also measure you for a uniform. The scene ends with a subtler phrase: medir las palabras.",
      setting: {
        who: "Paola is a nurse doing intake measurements before an occupational-health appointment. Alex needs the form completed and then a uniform adjusted next door.",
        what: "A measuring sequence: height, waist and clothes, plus the figurative warning to measure your words in a sensitive conversation.",
        when: "A cool weekday morning, before the appointment schedule starts slipping.",
        where: "Zipaquirá, between a health intake desk and a small uniform shop near the center.",
        why: "Because medir is not only tape measures. It covers height, body measurements, practical fitting, and the figurative “medir las palabras.” Its e to i forms — mido, midió, midieron — are easy to miss."
      },
      address: {
        form: "mixed",
        who: "Paola uses usted with Alex as a patient; Alex later quotes a friend using tú about speaking carefully.",
        why: "The measurement itself is professional, while the advice about words comes from a closer relationship. Mixed address lets both registers live in one lesson.",
        ifYouSwitch:
          "Using tú at intake would feel too familiar. Using usted in the quoted advice would make the friend's warning sound less intimate."
      },
      dialogue: [
        {
          speaker: "Paola",
          target: "Señor Alex, primero lo voy a medir sin zapatos.",
          translation: "Mr. Alex, first I'm going to measure you without shoes.",
          pronunciation: "seh-NYOR AH-leks, pree-MEH-roh loh boy ah meh-DEER seen shah-PAH-tos",
          literal: "Mr. Alex, first you I-go to measure without shoes.",
          why: "Medir can take a person as the object when the measurement is height or body size. The context keeps it practical, not intrusive."
        },
        {
          speaker: "Alex",
          target: "Claro. ¿Cuánto mido? En mi licencia aparece otra cifra.",
          translation: "Of course. How tall am I? My license shows another number.",
          pronunciation: "KLAH-roh. KWAN-toh MEE-doh. en mee lee-SEN-syah ah-pah-REH-seh OH-trah SEE-frah",
          literal: "Clear. How-much I-measure? On my license appears another figure.",
          why: "“¿Cuánto mido?” is the natural height question. The yo form has the e to i change: mido, not medo."
        },
        {
          speaker: "Paola",
          target: "Mide un metro setenta y ocho. También le mido la cintura.",
          translation: "You measure one meter seventy-eight. I'll also measure your waist.",
          pronunciation: "MEE-deh oon MEH-troh seh-TEN-tah ee OH-choh. tam-BYEN leh MEE-doh lah seen-TOO-rah",
          literal: "You-measure one meter seventy and eight. Also to-you I-measure the waist.",
          why: "Mide is the usted form and mido is the yo form. Both show the same stem change under stress."
        },
        {
          speaker: "Alex",
          target: "Ayer me midieron para el uniforme y salió casi igual.",
          translation: "Yesterday they measured me for the uniform and it came out almost the same.",
          pronunciation: "ah-YER meh mee-DYEH-ron PAH-rah el oo-nee-FOR-meh ee sah-LYOH KAH-see ee-GWAL",
          literal: "Yesterday me they-measured for the uniform and it came-out almost equal.",
          why: "Midieron is the preterite learners miss. It is not medieron, and it is not medió unless you mean he or she measured."
        },
        {
          speaker: "Paola",
          target: "Sí, la modista midió bien; sólo faltaba registrar el dato médico.",
          translation: "Yes, the seamstress measured well; only the medical record was missing.",
          pronunciation: "see, lah moh-DEES-tah mee-DYOH byen; SOH-loh fal-TAH-bah rreh-hees-TRAR el DAH-toh MEH-dee-koh",
          literal: "Yes, the seamstress measured well; only lacked registering the medical data.",
          why: "Midió is the third-person preterite. The accent and i matter: medió is a different form from mediar, not the measuring verb."
        },
        {
          speaker: "Alex",
          target: "Gracias. Y antes de hablar con recursos humanos, voy a medir mis palabras.",
          translation: "Thanks. And before speaking with human resources, I'm going to measure my words.",
          pronunciation: "GRAH-syahs. ee AN-tes deh ah-BLAR kon rreh-KOOR-sos oo-MAH-nos, boy ah meh-DEER mees pah-LAH-bras",
          literal: "Thanks. And before speaking with human resources, I-go to measure my words.",
          why: "“Medir mis palabras” means choosing words carefully. The physical measuring lesson becomes a social survival phrase."
        }
      ],
      vocabulary: [
        {
          term: "medir",
          explanation:
            "To measure: height, weight, waist, fabric, distance, quantities, and figuratively words.",
          literal: "to measure",
          useWhen:
            "A number, size, dimension or careful limit matters.",
          avoidWhen:
            "You are only comparing vaguely. Medir implies some standard, tool or deliberate judgment.",
          register: "neutral",
          region: "General Spanish.",
          related: ["pesar", "calcular", "tomar medidas", "comparar"],
          example: {
            target: "Primero lo voy a medir.",
            translation: "First I'm going to measure you."
          }
        },
        {
          term: "mido / mide",
          explanation:
            "The present forms with e changing to i: I measure, you/he/she measure.",
          literal: "I measure / you measure",
          useWhen:
            "Asking or saying height: how tall am I, how tall are you, or one meter seventy-eight.",
          avoidWhen:
            "Saying medo. The stressed e becomes i in these forms.",
          register: "neutral",
          region: "General Spanish grammar.",
          related: ["mides", "miden", "medimos", "medir"],
          example: {
            target: "¿Cuánto mido?",
            translation: "How tall am I?"
          }
        },
        {
          term: "midió / midieron",
          explanation:
            "The preterite forms learners often miss: he/she measured, they measured.",
          literal: "measured",
          useWhen:
            "Reporting a measurement that happened yesterday, earlier, or at a finished appointment.",
          avoidWhen:
            "Writing medió for medir. Medió belongs to mediar; midió is the measuring verb.",
          register: "neutral",
          region: "General Spanish grammar.",
          related: ["medí", "mediste", "midieron", "midió"],
          example: {
            target: "La modista midió bien.",
            translation: "The seamstress measured well."
          }
        },
        {
          term: "¿cuánto mides?",
          explanation:
            "How tall are you? Literally, how much do you measure?",
          literal: "how much do you measure?",
          useWhen:
            "Asking height in a normal direct way, usually with someone you can address as tú.",
          avoidWhen:
            "Using it in a medical usted setting. There the form is “¿cuánto mide?” or the nurse states the measurement.",
          register: "neutral familiar",
          region: "General Spanish.",
          related: ["¿cuánto mide?", "estatura", "altura", "metro setenta"],
          example: {
            target: "¿Cuánto mides sin zapatos?",
            translation: "How tall are you without shoes?"
          }
        },
        {
          term: "tomar medidas",
          explanation:
            "To take measurements, especially for clothing, curtains or furniture.",
          literal: "to take measures",
          useWhen:
            "A tailor, seamstress, carpenter or installer measures several dimensions.",
          avoidWhen:
            "Confusing it with taking measures as actions in a policy sense. Context tells you whether it means measurements or steps.",
          register: "neutral practical",
          region: "General Spanish.",
          related: ["medir", "cinta métrica", "modista", "ajustar"],
          example: {
            target: "Me tomaron medidas para el uniforme.",
            translation: "They took my measurements for the uniform."
          }
        },
        {
          term: "cintura",
          explanation:
            "Waist, a common body measurement in medical and clothing contexts.",
          literal: "waist",
          useWhen:
            "Health intake, uniforms, tailoring or fitness measurements require a specific body dimension.",
          avoidWhen:
            "Using it for belt as an object. The belt is a correa or cinturón; cintura is the body part.",
          register: "neutral",
          region: "General Spanish.",
          related: ["estatura", "peso", "cadera", "pecho"],
          example: {
            target: "Le mido la cintura.",
            translation: "I'll measure your waist."
          }
        },
        {
          term: "medir las palabras",
          explanation:
            "To measure your words: choose them carefully because the conversation is delicate.",
          literal: "to measure the words",
          useWhen:
            "You need to be honest without sounding aggressive, careless or insulting.",
          avoidWhen:
            "Thinking it means count words. The phrase is about judgment and tact.",
          register: "reflective conversational",
          region: "General Spanish.",
          related: ["hablar con cuidado", "pensar antes de hablar", "ser prudente", "cuidar el tono"],
          example: {
            target: "Voy a medir mis palabras.",
            translation: "I'm going to choose my words carefully."
          }
        }
      ],
      note:
        "Medir is physical and social. A nurse mide your height, a seamstress midió for a uniform, installers toman medidas for curtains, and a careful person mide las palabras before a sensitive conversation. The stem change is e to i: mido, mides, mide, miden. The preterite trap is third person: midió and midieron, not medió or medieron.",
      culture: [
        {
          label: "Measurements are intimate but routine",
          body:
            "Being measured in a clinic or uniform shop can feel personal, so the register matters. Colombian Spanish often keeps it practical and respectful: lo voy a medir, le mido la cintura, sin zapatos."
        },
        {
          label: "Height uses medir",
          body:
            "Spanish asks “¿cuánto mides?” where English asks how tall you are. The verb is normal, not clinical, but it becomes more formal with usted: “¿cuánto mide?”"
        },
        {
          label: "Words can be measured too",
          body:
            "“Medir las palabras” is not counting. It is the social skill of choosing a careful tone when the topic could hurt, offend or make things worse."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “¿cuánto medes?” for height",
          whyItFails:
            "Medir changes e to i in the present. The tú form is mides, and the yo form is mido.",
          sayInstead: "¿Cuánto mides?"
        },
        {
          mistake: "Writing “la modista medió bien”",
          whyItFails:
            "Midió is the preterite of medir. Medió belongs to another verb family and does not mean measured here.",
          sayInstead: "La modista midió bien."
        },
        {
          mistake: "Taking “medir las palabras” literally",
          whyItFails:
            "No one is counting words with a ruler. The phrase means choosing words carefully.",
          sayInstead: "Voy a medir mis palabras antes de responder."
        }
      ],
      variations: [
        {
          form: "¿Cuánto mides?",
          register: "neutral familiar",
          region: "General Spanish",
          whenToUse: "Asking someone's height with tú."
        },
        {
          form: "Le mido la cintura.",
          register: "clinical practical",
          region: "General Spanish",
          whenToUse: "A nurse or fitter measures a specific body dimension."
        },
        {
          form: "Ayer me midieron para el uniforme.",
          register: "practical",
          region: "General Spanish",
          whenToUse: "Reporting a finished clothing measurement."
        },
        {
          form: "Voy a medir mis palabras.",
          register: "reflective conversational",
          region: "General Spanish",
          whenToUse: "Preparing to speak carefully in a delicate situation."
        }
      ],
      prompt: "Paola says “la modista midió bien.” What is important about midió?",
      choices: [
        "It means the seamstress mediated between two people.",
        "It is the present-tense form for asking height.",
        "It is the third-person preterite of medir."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Which sentence asks someone's height with tú?",
          choices: [
            "¿Cuánto mides sin zapatos?",
            "¿Cuánto medes sin zapatos?",
            "¿Cuánto midió sin zapatos?"
          ],
          answer: 0,
          tests: "mides as the e to i tú form"
        },
        {
          prompt: "Which sentence reports that they measured Alex yesterday?",
          choices: [
            "Ayer me medieron para el uniforme.",
            "Ayer me midieron para el uniforme.",
            "Ayer me medían para el uniforme."
          ],
          answer: 1,
          tests: "midieron as the preterite they form"
        },
        {
          prompt: "Which line uses medir figuratively?",
          choices: [
            "Le mido la cintura ahora.",
            "Mide un metro setenta.",
            "Voy a medir mis palabras."
          ],
          answer: 2,
          tests: "medir las palabras as choosing words carefully"
        },
        {
          prompt: "Which phrase belongs to clothing measurements?",
          choices: [
            "Tomar medidas para el uniforme.",
            "Operar del apéndice inflamado.",
            "Atender primero al paciente."
          ],
          answer: 0,
          tests: "tomar medidas for clothes or curtains"
        }
      ]
    },
    en: {
      title: "Medirse bien en Zipaquirá",
      situation:
        "Usted está en Manchester antes de una cita de salud ocupacional y una enfermera necesita medir su estatura, peso y cintura. Después pasa por una tienda de uniformes. En inglés debe separar measure, take measurements, how tall are you y choose your words carefully.",
      setting: {
        who: "Paola es enfermera y toma medidas antes de una cita ocupacional. Alex necesita completar el formulario y luego ajustar un uniforme en la tienda de al lado.",
        what: "Una secuencia de mediciones: estatura, cintura y ropa, más la frase figurada de escoger las palabras con cuidado.",
        when: "Una mañana fresca entre semana, antes de que la agenda empiece a atrasarse.",
        where: "Manchester, entre un escritorio de admisión médica y una tienda pequeña de uniformes, porque esta dirección enseña inglés fuera de Colombia.",
        why: "Porque measure traduce medir, pero height usa how tall, ropa suele usar take measurements, y medir las palabras se expresa con choose your words carefully."
      },
      address: {
        form: "mixed",
        who: "Paola y Alex usan el mismo “you”; el registro profesional sale de Mr., first, without shoes y waist.",
        why: "El inglés no distingue tú y usted. La comodidad en una medición corporal depende de claridad y respeto, no de pronombres.",
        ifYouSwitch:
          "No hay pronombre que cambiar. El error real sería traducir “how much do you measure?” para preguntar estatura."
      },
      dialogue: [
        {
          speaker: "Paola",
          target: "Mr. Alex, first I'm going to measure you without shoes.",
          translation: "Señor Alex, primero lo voy a medir sin zapatos.",
          pronunciation: "MIS-ter A-leks, ferst aim GOU-ing tu ME-zher yu wid-AUT shuz",
          literal: "Señor Alex, primero voy a medirlo sin zapatos.",
          why: "Measure you funciona cuando la enfermera toma una medida corporal. El contexto profesional evita que suene raro."
        },
        {
          speaker: "Alex",
          target: "Of course. How tall am I? My license has a different number.",
          translation: "Claro. ¿Cuánto mido? Mi licencia tiene otra cifra.",
          pronunciation: "ov kors. jau tol am ai. mai LAI-sens jaz a DI-fer-ent NAM-ber",
          literal: "Claro. ¿Qué tan alto soy? Mi licencia tiene un número diferente.",
          why: "Para estatura, inglés pregunta how tall, no how much do I measure. Measure queda para la acción de medir."
        },
        {
          speaker: "Paola",
          target: "You're one meter seventy-eight. I'll also measure your waist.",
          translation: "Mide un metro setenta y ocho. También le mido la cintura.",
          pronunciation: "yur uan MI-ter SE-ven-ti eit. ail OL-sou ME-zher yor weist",
          literal: "Usted es un metro setenta y ocho. También mediré su cintura.",
          why: "I'll measure your waist es directo y respetuoso. Waist es la palabra corporal; belt sería el cinturón."
        },
        {
          speaker: "Alex",
          target: "Yesterday they took my measurements for the uniform, and it was almost the same.",
          translation: "Ayer me tomaron medidas para el uniforme y salió casi igual.",
          pronunciation: "YES-ter-dei dei tuk mai ME-zher-ments for da YU-ni-form, and it waz OL-moust da seim",
          literal: "Ayer tomaron mis medidas para el uniforme, y fue casi lo mismo.",
          why: "Para ropa, “take my measurements” suele sonar más natural que “measure me,” sobre todo cuando hay varias dimensiones."
        },
        {
          speaker: "Paola",
          target: "Yes, the tailor measured well; we just needed the medical record.",
          translation: "Sí, la modista midió bien; sólo faltaba el dato médico.",
          pronunciation: "yes, da TEI-lor ME-zherd wel; ui yost NI-ded da ME-di-kal RE-kord",
          literal: "Sí, la sastre midió bien; sólo necesitábamos el registro médico.",
          why: "“Measured” es regular en inglés. La forma española “midió” lleva la trampa; el verbo inglés se mantiene simple."
        },
        {
          speaker: "Alex",
          target: "Thanks. Before I talk to HR, I'm going to choose my words carefully.",
          translation: "Gracias. Antes de hablar con recursos humanos, voy a medir mis palabras.",
          pronunciation: "thanks. bi-FOR ai tok tu eich ar, aim GOU-ing tu chuz mai werdz KER-fu-li",
          literal: "Gracias. Antes de hablar con recursos humanos, voy a escoger mis palabras cuidadosamente.",
          why: "“Choose my words carefully” traduce naturalmente medir mis palabras. “Measure my words” existe, pero es menos corriente y puede sonar literario."
        }
      ],
      vocabulary: [
        {
          term: "measure",
          explanation:
            "Medir una altura, cintura, distancia, cantidad o dimensión.",
          literal: "medir",
          useWhen:
            "Hay una cifra, talla, distancia o dimensión que alguien necesita saber.",
          avoidWhen:
            "Pregunta por estatura en conversación. Use how tall, not how much do you measure.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["weigh", "calculate", "take measurements", "compare"],
          example: {
            target: "I'm going to measure you.",
            translation: "Lo voy a medir."
          }
        },
        {
          term: "How tall are you?",
          explanation:
            "¿Cuánto mide usted? o ¿cuánto mides? para estatura.",
          literal: "¿qué tan alto es usted?",
          useWhen:
            "Pregunta la estatura de una persona en lenguaje normal.",
          avoidWhen:
            "Decir “how much do you measure?” Ese calco suena poco natural para altura.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["height", "one meter seventy-eight", "without shoes", "tall"],
          example: {
            target: "How tall am I?",
            translation: "¿Cuánto mido?"
          }
        },
        {
          term: "measured",
          explanation:
            "Midió, midieron o medido. En inglés el pasado y participio son regulares.",
          literal: "midió / medido",
          useWhen:
            "Una medición ya ocurrió: measured yesterday, measured well, was measured.",
          avoidWhen:
            "Buscar una forma irregular como midió. La dificultad irregular está en español, no en inglés.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["took measurements", "checked", "recorded", "measuring"],
          example: {
            target: "The tailor measured well.",
            translation: "La modista midió bien."
          }
        },
        {
          term: "take measurements",
          explanation:
            "Tomar medidas, especialmente para ropa, cortinas o muebles.",
          literal: "tomar mediciones",
          useWhen:
            "Un sastre, instalador o técnico mide varias dimensiones.",
          avoidWhen:
            "Traducirlo como take measures si habla de tallas. Take measures suele significar tomar medidas de acción.",
          register: "neutro práctico",
          region: "Inglés universal.",
          related: ["measure", "tape measure", "tailor", "fit"],
          example: {
            target: "They took my measurements for the uniform.",
            translation: "Me tomaron medidas para el uniforme."
          }
        },
        {
          term: "waist",
          explanation:
            "Cintura, una medida corporal común en salud y ropa.",
          literal: "cintura",
          useWhen:
            "Un examen, uniforme, pantalón o ajuste requiere esa dimensión.",
          avoidWhen:
            "Confundirlo con belt. Belt es el cinturón; waist es la parte del cuerpo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["height", "weight", "hip", "chest"],
          example: {
            target: "I'll measure your waist.",
            translation: "Le mido la cintura."
          }
        },
        {
          term: "choose your words carefully",
          explanation:
            "Medir las palabras: escogerlas con cuidado por lo delicado de la conversación.",
          literal: "escoger sus palabras cuidadosamente",
          useWhen:
            "Debe ser honesto sin sonar agresivo, descuidado u ofensivo.",
          avoidWhen:
            "Traducir siempre como measure your words. Existe, pero puede sonar literario o menos común.",
          register: "reflexivo conversacional",
          region: "Inglés universal.",
          related: ["be careful what you say", "watch your wording", "mind your tone", "speak carefully"],
          example: {
            target: "I'm going to choose my words carefully.",
            translation: "Voy a medir mis palabras."
          }
        },
        {
          term: "medical record",
          explanation:
            "Dato o registro médico que queda en el formulario.",
          literal: "registro médico",
          useWhen:
            "Una clínica necesita guardar una cifra o información de salud.",
          avoidWhen:
            "Confundir record con récord deportivo. Aquí es registro, no marca.",
          register: "clínico neutro",
          region: "Inglés universal.",
          related: ["form", "height", "weight", "file"],
          example: {
            target: "We needed the medical record.",
            translation: "Necesitábamos el dato médico."
          }
        }
      ],
      note:
        "Measure traduce medir, pero no todo se arma igual. Para estatura diga how tall are you?, no “how much do you measure?” Para ropa, take measurements suele sonar natural. Para medir las palabras, choose your words carefully es la salida más cotidiana. Y al volver al español recuerde la trampa: medir da mido, mide, midió y midieron.",
      culture: [
        {
          label: "How tall evita el calco",
          body:
            "El español pregunta con medir; el inglés pregunta con tall. “How tall are you?” es normal y directo. “How much do you measure?” se entiende con esfuerzo, pero suena traducido."
        },
        {
          label: "Measurements plural para ropa",
          body:
            "En una tienda de uniformes o con un sastre, measurements en plural suena natural porque no hay una sola cifra. Hombros, cintura, largo y pecho forman el conjunto."
        },
        {
          label: "Careful words are social medicine",
          body:
            "Choose your words carefully no pertenece sólo a discursos formales. Sirve antes de hablar con recursos humanos, con un médico o con una persona sensible, cuando el tono puede cambiar el resultado."
        }
      ],
      pitfalls: [
        {
          mistake: "“How much do you measure?”",
          whyItFails:
            "Es un calco de ¿cuánto mides? Para estatura, el inglés usa tall.",
          sayInstead: "How tall are you?"
        },
        {
          mistake: "“Yesterday they measured me for all the uniform.”",
          whyItFails:
            "Se entiende, pero para ropa suele sonar mejor take measurements.",
          sayInstead: "Yesterday they took my measurements for the uniform."
        },
        {
          mistake: "“I will measure my words carefully.”",
          whyItFails:
            "Existe, pero puede sonar más literario. En conversación normal, choose your words carefully fluye mejor.",
          sayInstead: "I'll choose my words carefully."
        }
      ],
      variations: [
        {
          form: "How tall are you?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Preguntar estatura sin calcar medir."
        },
        {
          form: "I'll measure your waist.",
          register: "clínico práctico",
          region: "Inglés universal",
          whenToUse: "Una enfermera o persona de ajustes mide una dimensión específica."
        },
        {
          form: "They took my measurements for the uniform.",
          register: "práctico",
          region: "Inglés universal",
          whenToUse: "Hablar de varias medidas para ropa."
        },
        {
          form: "I'll choose my words carefully.",
          register: "reflexivo conversacional",
          region: "Inglés universal",
          whenToUse: "Prepararse para hablar con cuidado."
        }
      ],
      prompt: "Paola says “The tailor measured well.” ¿Qué debe recordar al volver al español?",
      choices: [
        "The English verb is irregular like midió.",
        "Measured means mediated between people.",
        "The Spanish third-person preterite is midió."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál pregunta la estatura en inglés natural?",
          choices: [
            "How tall are you without shoes?",
            "How much do you measure?",
            "How many height you have?"
          ],
          answer: 0,
          tests: "how tall for height"
        },
        {
          prompt: "¿Cuál frase sirve para medidas de uniforme?",
          choices: [
            "They took my measures for actions.",
            "They took my measurements for the uniform.",
            "They operated my measurements today."
          ],
          answer: 1,
          tests: "take measurements for clothing"
        },
        {
          prompt: "¿Cuál frase traduce medir las palabras naturalmente?",
          choices: [
            "I'll measure every word.",
            "I'll count my words with care.",
            "I'll choose my words carefully."
          ],
          answer: 2,
          tests: "choose words carefully as figurative medir"
        },
        {
          prompt: "¿Cuál frase identifica la cintura?",
          choices: [
            "I'll measure your waist.",
            "I'll attend your belt.",
            "I'll operate your height."
          ],
          answer: 0,
          tests: "waist as cintura"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/65-extending-being-seen-to.js");
