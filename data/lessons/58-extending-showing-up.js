/*
 * Lesson block: extension / showing up and taking part.
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
    id: "presentar-the-speaker-in-barichara",
    level: "Extending · Showing up",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "presentar",
    review: "pending",
    es: {
      title: "Presentar a la ponente antes de la charla",
      situation:
        "Estás en Barichara, en una charla pequeña sobre oficios locales, y la organizadora te pide que presentes a una arquitecta que nadie conoce todavía. Antes de empezar, también te toca presentarte tú, presentar una queja breve sobre el sonido y aclarar que presentar un examen no es lo mismo que prepararlo.",
      setting: {
        who: "Claudia organizes cultural talks with more goodwill than staff. Ben is helping at the door, has met the speaker five minutes ago, and now has to introduce her without sounding like a wedding announcer.",
        what: "A pre-talk exchange about introducing a person, introducing yourself, filing a small complaint and the broader Colombian uses of “presentar.”",
        when: "Late afternoon, while plastic chairs scrape the floor and the microphone is being tested for the third time.",
        where: "Barichara, Santander, in a community hall near the main square, before a public talk about local building trades.",
        why: "“Presentar” is much wider than English “present.” It can introduce people, submit complaints, sit exams and appear reflexively when someone shows up or introduces themselves."
      },
      address: {
        form: "tú",
        who: "Claudia and Ben use tú because they are peers doing event logistics together, even though the public moment will sound more formal.",
        why: "Backstage Spanish is often more direct than the voice used at the microphone. Tú keeps the coordination quick, while the actual introduction can still be respectful.",
        ifYouSwitch:
          "Usted would make sense once Ben addresses the speaker or the audience. Vos would feel regional and unnecessary in this scene unless the speakers already shared that habit."
      },
      dialogue: [
        {
          speaker: "Claudia",
          target: "Ben, te presento a la arquitecta Rueda, la ponente de hoy.",
          translation: "Ben, let me introduce you to architect Rueda, today's speaker.",
          pronunciation: "ben, teh preh-SEN-toh a la ar-kee-TEK-ta RWEH-da, la pon-EN-teh deh oy",
          literal: "Ben, you I-present to the architect Rueda, the speaker of today.",
          why: "“Te presento a…” is the everyday formula for introducing one person to another. English needs “introduce,” not “present,” for this human meeting."
        },
        {
          speaker: "Ben",
          target: "Mucho gusto. Cuando suba al micrófono, ¿la presento con el cargo completo?",
          translation: "Nice to meet you. When I go up to the microphone, should I introduce her with the full title?",
          pronunciation: "MOO-choh GOOS-toh. KWAN-doh SOO-ba al mee-KRO-foh-noh, la preh-SEN-toh kon el KAR-goh kom-PLEH-toh",
          literal: "Much pleasure. When I go-up to-the microphone, her I-present with the position complete?",
          why: "Ben uses “la presento” because the person being introduced is direct object. The subjunctive “cuando suba” fits a future moment that has not happened yet."
        },
        {
          speaker: "Claudia",
          target: "Sí, pero primero preséntate tú; la gente quiere saber quién está hablando.",
          translation: "Yes, but introduce yourself first; people want to know who is speaking.",
          pronunciation: "see, PEH-roh pree-MEH-roh preh-SEN-ta-teh too; la HEN-teh KYEH-reh sa-BER kyen es-TA a-BLAN-doh",
          literal: "Yes, but first present-yourself you; the people want to know who is speaking.",
          why: "“Presentarse” is reflexive when you introduce yourself. It can also mean to show up somewhere formally, but here the context is the audience learning who Ben is."
        },
        {
          speaker: "Ben",
          target: "Perfecto. También voy a presentar una queja: el parlante está chillando.",
          translation: "Perfect. I'm also going to submit a complaint: the speaker is squealing.",
          pronunciation: "per-FEK-toh. tam-BYEN boy a preh-sen-TAR OO-na KEH-ha: el par-LAN-teh es-TA chee-YAN-doh",
          literal: "Perfect. Also I-go to present a complaint: the speaker is squealing.",
          why: "With documents and complaints, “presentar” means to submit or lodge. This is not a stage presentation; it is handing an issue to the person responsible."
        },
        {
          speaker: "Claudia",
          target: "Preséntala después de probar el cable, no antes de que llegue el técnico.",
          translation: "Submit it after testing the cable, not before the technician arrives.",
          pronunciation: "preh-SEN-ta-la des-PWES deh pro-BAR el KA-bleh, no AN-tes deh keh YEH-geh el TEK-nee-koh",
          literal: "Present-it after testing the cable, not before that arrives the technician.",
          why: "“Preséntala” attaches the object pronoun to the command. “Antes de que llegue” takes the subjunctive because the technician has not arrived yet."
        },
        {
          speaker: "Ben",
          target: "Entendido. Y mañana presento el examen de turismo, no lo escribo yo.",
          translation: "Understood. And tomorrow I sit the tourism exam; I don't write it myself.",
          pronunciation: "en-ten-DEE-doh. ee ma-NYA-na preh-SEN-toh el eg-SA-men deh too-REES-moh, no lo es-KREE-boh yo",
          literal: "Understood. And tomorrow I present the exam of tourism, not it I-write myself.",
          why: "In Colombian Spanish, “presentar un examen” means to sit or take the exam. It does not mean you created the test for other people."
        }
      ],
      vocabulary: [
        {
          term: "presentar a alguien",
          explanation:
            "To introduce someone to someone else. The person being introduced is marked with personal a.",
          literal: "to present someone",
          useWhen:
            "Bringing two people together: a speaker and an organizer, a friend and a sibling, a guest and a host.",
          avoidWhen:
            "Translating it into English as “present a person” in ordinary conversation. English says “introduce.”",
          register: "neutral",
          region: "General Spanish; completely everyday in Colombia.",
          related: ["te presento a", "conocer", "la presentación", "presentarse"],
          example: {
            target: "Te presento a la arquitecta Rueda.",
            translation: "Let me introduce you to architect Rueda."
          }
        },
        {
          term: "presentarse",
          explanation:
            "To introduce yourself, or to show up formally somewhere, depending on the setting.",
          literal: "to present oneself",
          useWhen:
            "Starting a talk, arriving for an appointment, appearing at an office or saying who you are to a group.",
          avoidWhen:
            "For ordinary arrival at a friend's house. There, a simpler verb usually sounds less official.",
          register: "neutral to formal",
          region: "General Spanish; very common in schools, offices and public events.",
          related: ["me presento", "presentarte", "comparecer", "aparecer"],
          example: {
            target: "Primero preséntate tú.",
            translation: "Introduce yourself first."
          }
        },
        {
          term: "presentar una queja",
          explanation:
            "To lodge or submit a complaint. The complaint is treated like something formally delivered.",
          literal: "to present a complaint",
          useWhen:
            "A service, sound system, office or organization needs to receive a complaint in a recognized way.",
          avoidWhen:
            "You only mean grumbling to a friend. “Presentar una queja” sounds like it goes to someone with responsibility.",
          register: "formal practical",
          region: "General Spanish; common in Colombian service and institutional language.",
          related: ["radicar", "reclamo", "solicitud", "constancia"],
          example: {
            target: "Voy a presentar una queja por el sonido.",
            translation: "I'm going to submit a complaint about the sound."
          }
        },
        {
          term: "presentar un examen",
          explanation:
            "To sit or take an exam in Colombian Spanish. It is one of the most important false-friend uses.",
          literal: "to present an exam",
          useWhen:
            "You are the candidate taking the test: school exams, language tests, driving tests, admissions exams.",
          avoidWhen:
            "Saying in English that you “presented an exam.” That sounds as if you displayed or delivered it, not sat it.",
          register: "neutral",
          region: "Very common in Colombia and other Latin American countries.",
          related: ["hacer un examen", "prueba", "evaluación", "resultado"],
          example: {
            target: "Mañana presento el examen de turismo.",
            translation: "Tomorrow I sit the tourism exam."
          }
        },
        {
          term: "ponente",
          explanation:
            "A speaker or presenter at a talk, panel or academic-style event.",
          literal: "one who puts forward",
          useWhen:
            "Naming the person giving a talk, presenting research or leading a formal session.",
          avoidWhen:
            "For every person who speaks in a room. It implies an event role, not just talking.",
          register: "formal practical",
          region: "General Spanish; common in conferences and public talks in Colombia.",
          related: ["charla", "expositor", "conferencista", "panel"],
          example: {
            target: "La ponente de hoy es arquitecta.",
            translation: "Today's speaker is an architect."
          }
        },
        {
          term: "cargo completo",
          explanation:
            "A person's full title or role, especially when introductions need institutional clarity.",
          literal: "complete position",
          useWhen:
            "Introducing a speaker whose job, office or affiliation matters to the audience.",
          avoidWhen:
            "Casual introductions where name and relationship are enough. The full title can sound heavy.",
          register: "neutral formal",
          region: "General Colombian administrative and event language.",
          related: ["título", "perfil", "oficio", "entidad"],
          example: {
            target: "¿La presento con el cargo completo?",
            translation: "Should I introduce her with the full title?"
          }
        },
        {
          term: "antes de que llegue",
          explanation:
            "Before someone arrives, with subjunctive because the arrival is future and not yet real in the sentence.",
          literal: "before that he arrives",
          useWhen:
            "Setting a condition before a pending event: before the technician arrives, before the talk begins.",
          avoidWhen:
            "Flattening it to “antes de llega.” After “antes de que,” Spanish normally expects a conjugated subjunctive.",
          register: "neutral",
          region: "General Spanish grammar, common in real event logistics.",
          related: ["cuando suba", "hasta que venga", "después de que revise", "subjuntivo"],
          example: {
            target: "No antes de que llegue el técnico.",
            translation: "Not before the technician arrives."
          }
        }
      ],
      note:
        "The hard part is not the spelling of “presentar.” It is resisting the English shortcut. A person is introduced: “te presento a mi hermana.” A complaint or application is submitted: “presentar una queja.” An exam is sat or taken: “presentar un examen.” And the reflexive “presentarse” can mean introduce yourself or show up formally. The object tells you which English verb you need.",
      culture: [
        {
          label: "Introductions are part of the job",
          body:
            "Small Colombian events often run on improvised cooperation: someone holds the door, someone fixes the sound, someone introduces the speaker because the organizer's hands are full. “Te presento a…” is not fancy language; it is the ordinary glue that gets two people into the same conversation without awkward waving."
        },
        {
          label: "Complaints can be “presented”",
          body:
            "When a Colombian says they are going to “presentar una queja,” the phrase gives the complaint a route. It may be written, logged or made to a responsible person. It sounds more structured than simply complaining. That matters in offices, services and events where the issue needs to leave your mouth and enter a process."
        },
        {
          label: "Exams are sat, not authored",
          body:
            "“Presentar un examen” is one of those phrases that feels transparent until you translate it. In Colombia the student presents the exam by taking it; the teacher prepares it or applies it, depending on the context. If you tell an English speaker “I presented the exam,” you have moved yourself to the wrong side of the desk."
        }
      ],
      pitfalls: [
        {
          mistake: "Translating “te presento a mi hermana” as “I present you my sister”",
          whyItFails:
            "English uses “introduce” for people meeting each other. “Present” sounds like a ceremony or a display, not an everyday introduction.",
          sayInstead: "Let me introduce you to my sister."
        },
        {
          mistake: "Assuming “presentar un examen” means to write the exam for students",
          whyItFails:
            "In Colombian Spanish the candidate presents the exam by sitting it. The teacher may prepare it, but the student presents it.",
          sayInstead: "Mañana presento el examen."
        },
        {
          mistake: "Forgetting the reflexive in “preséntate tú”",
          whyItFails:
            "If you are introducing yourself, Spanish needs the reflexive pronoun. Plain “presenta tú” sounds as if you should introduce someone or something else.",
          sayInstead: "Primero preséntate tú."
        }
      ],
      variations: [
        {
          form: "Te presento a mi hermana.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "The everyday introduction of one person to another."
        },
        {
          form: "Primero me presento y luego presento a la ponente.",
          register: "neutral practical",
          region: "General Spanish",
          whenToUse: "Separating self-introduction from introducing the invited speaker."
        },
        {
          form: "Voy a presentar una queja por escrito.",
          register: "formal practical",
          region: "General Colombian",
          whenToUse: "Submitting a complaint through a channel that can act on it."
        },
        {
          form: "Presento el examen de conducción mañana.",
          register: "neutral",
          region: "Colombia",
          whenToUse: "Saying you will sit the driving test, not write it for others."
        }
      ],
      prompt: "Ben says “mañana presento el examen de turismo.” What does “presentar” mean there?",
      choices: [
        "He is going to sit or take the exam as the candidate.",
        "He is going to design the exam for the tourism students.",
        "He is going to introduce the examiner before the talk."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which line naturally introduces one person to another?",
          choices: [
            "Te presento a mi hermana.",
            "Te asisto a mi hermana.",
            "Te participo a mi hermana."
          ],
          answer: 0,
          tests: "“presentar a alguien” as introducing a person"
        },
        {
          prompt: "Which sentence asks Ben to introduce himself first?",
          choices: [
            "Primero presenta la queja.",
            "Primero preséntate tú.",
            "Primero presenta el cable."
          ],
          answer: 1,
          tests: "reflexive “presentarse” for introducing yourself"
        },
        {
          prompt: "Which phrase means to submit a complaint?",
          choices: [
            "presentar a una ponente",
            "presentar un examen",
            "presentar una queja"
          ],
          answer: 2,
          tests: "“presentar una queja” as lodging or submitting a complaint"
        }
      ]
    },
    en: {
      title: "Presentar a la ponente antes de la charla",
      situation:
        "Usted está en York, en una charla pequeña sobre conservación de edificios, y la organizadora le pide que presente a una arquitecta que nadie conoce todavía. Antes de empezar, también tiene que presentarse usted, reportar un problema con el sonido y no confundir “introduce,” “submit,” “sit” y “show up.”",
      setting: {
        who: "Clare organiza charlas culturales con más buena voluntad que personal. Beatriz ayuda en la puerta, conoció a la ponente hace cinco minutos y ahora tiene que presentarla sin sonar como maestra de ceremonias.",
        what: "Una conversación antes de la charla sobre presentar a una persona, presentarse, presentar una queja y presentar un examen en inglés natural.",
        when: "Al final de la tarde, mientras arrastran sillas y prueban el micrófono por tercera vez.",
        where: "York, Inglaterra, en un salón comunitario cerca del centro histórico, antes de una charla pública sobre oficios de restauración.",
        why: "El español usa “presentar” para varios objetos, pero el inglés cambia de verbo: introduce a person, submit a complaint, sit an exam, show up somewhere."
      },
      address: {
        form: "mixed",
        who: "Clare y Beatriz usan nombres de pila y el mismo “you,” aunque el momento frente al público suene más formal.",
        why: "El inglés no alterna entre tú y usted. El registro cambia con “could,” “please,” títulos profesionales y frases más completas.",
        ifYouSwitch:
          "No hay cambio de pronombre disponible. Beatriz puede sonar más formal diciendo “Could you introduce yourself first?” en vez de una orden seca."
      },
      dialogue: [
        {
          speaker: "Clare",
          target: "Beatriz, let me introduce you to Ms Rueda, today's speaker.",
          translation: "Beatriz, te presento a la señora Rueda, la ponente de hoy.",
          pronunciation: "beh-a-TRIS, let mi in-tro-DUS yu tu miz RWEH-da, tu-DEIZ SPI-ker",
          literal: "Beatriz, déjeme introducirla a la señora Rueda, la hablante de hoy.",
          why: "Para personas, el verbo natural es “introduce.” “Present you to Ms Rueda” es posible en registros muy formales, pero no es la frase cotidiana que usted necesita."
        },
        {
          speaker: "Beatriz",
          target: "Nice to meet you. When I go up, should I introduce her by her full title?",
          translation: "Mucho gusto. Cuando suba, ¿la presento con el cargo completo?",
          pronunciation: "nais tu mit yu. wen ai gou op, shud ai in-tro-DUS jer bai jer ful TAI-tol",
          literal: "Agradable conocerla. Cuando suba, ¿debería introducirla por su título completo?",
          why: "“Introduce her” mantiene claro que se trata de una persona. “By her full title” traduce la idea del cargo completo sin calcar la estructura española."
        },
        {
          speaker: "Clare",
          target: "Yes, but introduce yourself first; people want to know who is speaking.",
          translation: "Sí, pero preséntese usted primero; la gente quiere saber quién habla.",
          pronunciation: "yes, bot in-tro-DUS yor-SELF ferst; PI-pol want tu nou ju iz SPI-king",
          literal: "Sí, pero introdúzcase usted primero; la gente quiere saber quién está hablando.",
          why: "“Introduce yourself” es el reflexivo inglés para presentarse ante un grupo. No diga “present yourself” salvo en contextos muy formales o físicos."
        },
        {
          speaker: "Beatriz",
          target: "Perfect. I also need to submit a complaint: the speaker is squealing.",
          translation: "Perfecto. También necesito presentar una queja: el parlante está chillando.",
          pronunciation: "PER-fekt. ai OL-so nid tu sob-MIT a kom-PLEINT: da SPI-ker iz SKWI-ling",
          literal: "Perfecto. También necesito someter una queja: el parlante está chillando.",
          why: "Para quejas, formularios y solicitudes, el verbo es “submit” o sometimes “file.” “Present a complaint” se entiende, pero suena legalista."
        },
        {
          speaker: "Clare",
          target: "Submit it after we test the cable, not before the technician gets here.",
          translation: "Preséntela después de probar el cable, no antes de que llegue el técnico.",
          pronunciation: "sob-MIT it AF-ter ui test da KEI-bol, not bi-FOR da tek-NI-shan gets jir",
          literal: "Sométala después de probar el cable, no antes de que el técnico llegue aquí.",
          why: "Con pronombre, el objeto queda después de “submit”: “submit it.” La frase es directa y práctica, no ceremonial."
        },
        {
          speaker: "Beatriz",
          target: "Understood. And tomorrow I sit the tourism exam; I don't write it.",
          translation: "Entendido. Y mañana presento el examen de turismo; no lo escribo yo.",
          pronunciation: "on-der-STUD. and tu-MO-rou ai sit da TU-riz-om eg-ZAM; ai dont rait it",
          literal: "Entendido. Y mañana me siento el examen de turismo; no lo escribo.",
          why: "En inglés británico, “sit an exam” es natural; “take an exam” también funciona. “Present an exam” no transmite que usted sea la candidata."
        }
      ],
      vocabulary: [
        {
          term: "introduce someone",
          explanation:
            "Presentar a una persona. Es el verbo cotidiano para hacer que dos personas se conozcan.",
          literal: "introducir a alguien",
          useWhen:
            "Usted conecta a una ponente con una organizadora, a una amiga con su hermana o a una invitada con el grupo.",
          avoidWhen:
            "Calcar “presentar” como “present someone” en una conversación normal. Puede sonar demasiado ceremonial.",
          register: "neutro",
          region: "Inglés universal; “introduce you to” es una estructura clave.",
          related: ["meet", "introduction", "speaker", "host"],
          example: {
            target: "Let me introduce you to Ms Rueda.",
            translation: "Te presento a la señora Rueda."
          }
        },
        {
          term: "introduce yourself",
          explanation:
            "Presentarse: decir quién es usted ante una persona o un grupo.",
          literal: "introducirse usted mismo",
          useWhen:
            "Al empezar una charla, entrevista, reunión o clase donde la gente necesita ubicarlo.",
          avoidWhen:
            "Decir “present yourself” como traducción automática. En inglés corriente suena rígido o raro.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["say who you are", "give your name", "opening", "profile"],
          example: {
            target: "Introduce yourself first.",
            translation: "Preséntese usted primero."
          }
        },
        {
          term: "submit a complaint",
          explanation:
            "Presentar una queja por un canal formal o práctico.",
          literal: "someter una queja",
          useWhen:
            "La queja se entrega a una persona, oficina, página o proceso que puede responder.",
          avoidWhen:
            "Sólo se está quejando con un amigo. Ahí “complain” basta.",
          register: "formal práctico",
          region: "Inglés universal; “file a complaint” también es común.",
          related: ["file a complaint", "report an issue", "form", "request"],
          example: {
            target: "I need to submit a complaint.",
            translation: "Necesito presentar una queja."
          }
        },
        {
          term: "sit an exam",
          explanation:
            "Presentar un examen en inglés británico: ser la persona que toma la prueba.",
          literal: "sentarse un examen",
          useWhen:
            "Hablar de exámenes académicos, profesionales o de conducción en Reino Unido y otros lugares.",
          avoidWhen:
            "Decir “present an exam” si quiere decir que usted lo toma. Eso cambia el papel de quien habla.",
          register: "neutro",
          region: "Muy natural en inglés británico; “take an exam” es más general y común en Norteamérica.",
          related: ["take an exam", "test", "candidate", "result"],
          example: {
            target: "Tomorrow I sit the tourism exam.",
            translation: "Mañana presento el examen de turismo."
          }
        },
        {
          term: "speaker",
          explanation:
            "La ponente o persona que da una charla. También puede ser el parlante físico; el contexto decide.",
          literal: "hablante / parlante",
          useWhen:
            "Nombrar a quien habla en un evento, o el aparato que emite sonido.",
          avoidWhen:
            "Olvidar que en una frase como “the speaker is squealing” puede ser el aparato, no la persona.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["talk", "guest", "microphone", "loudspeaker"],
          example: {
            target: "Today's speaker is an architect.",
            translation: "La ponente de hoy es arquitecta."
          }
        },
        {
          term: "full title",
          explanation:
            "El cargo, tratamiento o título completo con que se presenta a alguien.",
          literal: "título completo",
          useWhen:
            "La afiliación, el cargo o la profesión importan para el público.",
          avoidWhen:
            "Una presentación casual donde nombre y relación son suficientes.",
          register: "neutro formal",
          region: "Inglés universal.",
          related: ["role", "position", "job title", "affiliation"],
          example: {
            target: "Should I introduce her by her full title?",
            translation: "¿La presento con el cargo completo?"
          }
        },
        {
          term: "before the technician gets here",
          explanation:
            "Antes de que llegue el técnico. El inglés no marca subjuntivo, pero mantiene la idea de un evento futuro pendiente.",
          literal: "antes de que el técnico llegue aquí",
          useWhen:
            "Quiere ubicar una acción antes de una llegada esperada.",
          avoidWhen:
            "Agregar un futuro innecesario como “will gets.” Después de “before,” el presente simple funciona.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["when I go up", "after we test", "until they arrive", "once she starts"],
          example: {
            target: "Not before the technician gets here.",
            translation: "No antes de que llegue el técnico."
          }
        }
      ],
      note:
        "El inglés obliga a repartir “presentar” entre varios verbos. Personas se introduce: “let me introduce you to…” Quejas y solicitudes se submit o file. Exámenes se sit o take. Y “introduce yourself” cubre presentarse ante un grupo. Aprender esa distribución evita dos errores muy visibles: “I present you my sister” y “I presented the exam.”",
      culture: [
        {
          label: "Introductions are not “presentations”",
          body:
            "Un hablante colombiano puede sentir que “present” debería servir para cada “presentar,” pero el inglés cotidiano separa las presentaciones entre personas. “Let me introduce you to…” es cálido, corriente y útil. “I present to you…” pertenece a ceremonias, discursos y revelaciones dramáticas, no a dos personas que se conocen junto a un micrófono."
        },
        {
          label: "Submitting gives a complaint a route",
          body:
            "“Submit a complaint” mete la queja en un proceso: la recibe un formulario, una oficina, un correo o una persona responsable. “Complain” es simplemente expresar inconformidad. Ambas ideas importan. En un evento, decir “I need to submit a complaint” le dice a la organizadora que quiere que el problema quede registrado o atendido, no sólo oído."
        },
        {
          label: "Exams change verb by country",
          body:
            "El inglés británico dice con naturalidad “sit an exam,” mientras que el inglés norteamericano suele decir “take an exam.” Ambas frases significan que usted es la candidata. Ninguna significa que escribió la prueba para otras personas. Si la región no está clara, “take an exam” es la opción internacional más segura."
        }
      ],
      pitfalls: [
        {
          mistake: "“I present you my sister.”",
          whyItFails:
            "Es un calco de “te presento a mi hermana.” En inglés cotidiano, presentar personas es “introduce.”",
          sayInstead: "Let me introduce you to my sister."
        },
        {
          mistake: "“I presented the exam yesterday.”",
          whyItFails:
            "No comunica claramente que usted fue la candidata. Suena como si hubiera mostrado, entregado o expuesto el examen.",
          sayInstead: "I sat the exam yesterday."
        },
        {
          mistake: "“I presented myself to the group.”",
          whyItFails:
            "Puede entenderse, pero suena rígido y casi físico. Para decir que usted se presentó, la frase común es con “introduce.”",
          sayInstead: "I introduced myself to the group."
        }
      ],
      variations: [
        {
          form: "Let me introduce you to my sister.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Presentar una persona a otra en una situación cotidiana."
        },
        {
          form: "I introduced myself before the talk.",
          register: "neutro práctico",
          region: "Inglés universal",
          whenToUse: "Decir que usted se presentó ante un grupo."
        },
        {
          form: "I'm going to submit a complaint in writing.",
          register: "formal práctico",
          region: "Inglés universal",
          whenToUse: "Presentar una queja por un canal formal."
        },
        {
          form: "I sit the driving test tomorrow.",
          register: "neutro",
          region: "Inglés británico",
          whenToUse: "Decir que usted presenta el examen de conducción."
        }
      ],
      prompt: "Beatriz says “tomorrow I sit the tourism exam.” What does “sit” mean there?",
      choices: [
        "She is going to write the exam questions for the other candidates.",
        "She is going to take the exam as the candidate.",
        "She is going to introduce the examiner before the talk."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase presenta una persona a otra de forma natural?",
          choices: [
            "I assist you to my sister.",
            "I present you my sister.",
            "Let me introduce you to my sister."
          ],
          answer: 2,
          tests: "“introduce someone” para presentar personas"
        },
        {
          prompt: "¿Cuál frase dice que Beatriz se presentó primero?",
          choices: [
            "She introduced herself first.",
            "She submitted herself first.",
            "She presented her title first."
          ],
          answer: 0,
          tests: "“introduce yourself” para presentarse"
        },
        {
          prompt: "¿Cuál frase significa presentar una queja?",
          choices: [
            "introduce a complaint",
            "submit a complaint",
            "sit a complaint"
          ],
          answer: 1,
          tests: "“submit a complaint” as presentar una queja"
        }
      ]
    }
  },
  {
    id: "asistir-to-the-hearing-in-monteria",
    level: "Extending · Showing up",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "asistir",
    review: "pending",
    es: {
      title: "Asistir a la audiencia sin ofrecer ayuda",
      situation:
        "Estás en Montería, frente a una sala donde habrá una audiencia pública sobre el río y las obras del barrio. Te ofreciste a acompañar a una vecina, pero el funcionario te corrige antes de entrar: “asistir a la audiencia” significa estar presente, no ayudarle a cargar los papeles.",
      setting: {
        who: "Rafael is a municipal staff member checking names at the door. Dana is accompanying a neighbor who wants to speak, and she has heard “asistir” but is dangerously close to treating it like English “assist.”",
        what: "A doorway exchange before a public hearing, centered on the false friend “asistir a” as attend, not help.",
        when: "A humid weekday morning, ten minutes before the hearing starts and everyone is trying to enter at once.",
        where: "Montería, Córdoba, outside a municipal meeting room where residents have come to discuss work near the Sinú River.",
        why: "This false friend changes the whole social meaning. Saying you assisted your mother can sound as if you attended her, not helped her, and saying you attended a hearing is not volunteering aid."
      },
      address: {
        form: "usted",
        who: "Rafael uses usted with Dana because he is managing entry to an official meeting. Dana uses usted back while checking what she is allowed to do.",
        why: "The setting is public, procedural and slightly tense. Usted keeps the language respectful while the meaning of a key verb gets clarified.",
        ifYouSwitch:
          "Tú would soften the exchange but might sound too casual at the door. Vos would not fit the institutional setting."
      },
      dialogue: [
        {
          speaker: "Dana",
          target: "Buenos días. Vengo a asistir a la audiencia con doña Marta.",
          translation: "Good morning. I've come to attend the hearing with Doña Marta.",
          pronunciation: "BWEH-nos DEE-as. BEN-goh a a-sees-TEER a la ow-DYEN-sya kon DOH-nya MAR-ta",
          literal: "Good days. I-come to attend to the hearing with Doña Marta.",
          why: "“Asistir a” means attend, and the preposition a is not optional. Dana is saying she will be present at the hearing, not that she will help the hearing."
        },
        {
          speaker: "Rafael",
          target: "Claro. Para ayudarle con los papeles, diga ayudar; asistir es estar presente.",
          translation: "Of course. For helping her with the papers, say ayudar; asistir is being present.",
          pronunciation: "KLA-roh. PA-ra a-yoo-DAR-leh kon los pa-PEH-les, DEE-ga a-yoo-DAR; a-sees-TEER es es-TAR preh-SEN-teh",
          literal: "Clear. For helping-her with the papers, say help; attend is to-be present.",
          why: "This is the centrepiece: “asistir” is not English “assist.” The helper verb is “ayudar,” which belongs to a different lesson and a different meaning."
        },
        {
          speaker: "Dana",
          target: "Entonces asistí a la reunión pasada, pero no asistí a mi vecina.",
          translation: "So I attended the last meeting, but I didn't assist my neighbor.",
          pronunciation: "en-TON-ses a-sees-TEE a la reh-oo-NYON pa-SA-da, PEH-roh no a-sees-TEE a mee beh-SEE-na",
          literal: "Then I-attended to the meeting past, but not I-attended to my neighbor.",
          why: "The first half is natural; the second half is the false friend exposed. If she means she did not help her neighbor, she should not use “asistir.”"
        },
        {
          speaker: "Rafael",
          target: "Exacto: usted asistió a la reunión y ayudó a su vecina.",
          translation: "Exactly: you attended the meeting and helped your neighbor.",
          pronunciation: "eg-SAK-toh: oos-TED a-sees-TYOH a la reh-oo-NYON ee a-yoo-DOH a soo beh-SEE-na",
          literal: "Exactly: you attended to the meeting and helped your neighbor.",
          why: "The verbs divide cleanly: “asistió a” for attendance, “ayudó a” for help. Both take a in these sentences, which is why the meaning must come from the verb, not the preposition alone."
        },
        {
          speaker: "Dana",
          target: "¿Y si no puedo asistir, puedo dejar una constancia por escrito?",
          translation: "And if I can't attend, can I leave a written statement?",
          pronunciation: "ee see no PWEH-doh a-sees-TEER, PWEH-doh deh-HAR OO-na kon-STAN-sya por es-KREE-toh",
          literal: "And if not I-can attend, I-can leave a record by written?",
          why: "“No puedo asistir” is a normal formal way to say you cannot attend. It is useful for hearings, courses, interviews, appointments and meetings."
        },
        {
          speaker: "Rafael",
          target: "Sí, pero si quiere hablar, tiene que asistir a toda la sesión.",
          translation: "Yes, but if you want to speak, you have to attend the whole session.",
          pronunciation: "see, PEH-roh see KYEH-reh a-BLAR, TYEH-neh keh a-sees-TEER a TO-da la seh-SYON",
          literal: "Yes, but if you want to speak, you have to attend to all the session.",
          why: "The phrase scales up: attend the whole session, attend the course, attend the hearing. The verb is about presence in an organized event."
        }
      ],
      vocabulary: [
        {
          term: "asistir a",
          explanation:
            "To attend an event, meeting, class, hearing, appointment or session. The preposition a belongs with it.",
          literal: "to attend to",
          useWhen:
            "You were present at an organized event, or you need to say you can or cannot attend.",
          avoidWhen:
            "You mean helping someone. That is “ayudar,” not “asistir,” in ordinary Colombian Spanish.",
          register: "neutral formal",
          region: "General Spanish; very common in Colombia in official and school contexts.",
          related: ["asistencia", "asistente", "estar presente", "acudir"],
          example: {
            target: "Vengo a asistir a la audiencia.",
            translation: "I've come to attend the hearing."
          }
        },
        {
          term: "asistí a",
          explanation:
            "I attended. The accent marks the preterite first person, and the preposition a still follows.",
          literal: "I attended to",
          useWhen:
            "Reporting that you went to a meeting, class, hearing, course or event.",
          avoidWhen:
            "Using it for “I helped.” “Asistí a mi mamá” will not sound like the everyday way to say you helped your mother.",
          register: "neutral formal",
          region: "General Spanish; common in reports and everyday explanations.",
          related: ["asistió a", "asistimos a", "fui a", "estuve en"],
          example: {
            target: "Asistí a la reunión pasada.",
            translation: "I attended the last meeting."
          }
        },
        {
          term: "ayudar",
          explanation:
            "The verb for helping. It is not this lesson's verb, but it is the contrast that prevents the false friend.",
          literal: "to help",
          useWhen:
            "Someone needs practical help, emotional support, carrying papers or solving a problem.",
          avoidWhen:
            "Replacing it with “asistir” just because English says “assist.” In Spanish the ordinary verb is “ayudar.”",
          register: "neutral",
          region: "General Spanish and the normal Colombian choice.",
          related: ["dar una mano", "colaborar", "apoyar", "servir de ayuda"],
          example: {
            target: "Ayudé a mi vecina con los papeles.",
            translation: "I helped my neighbor with the papers."
          }
        },
        {
          term: "audiencia pública",
          explanation:
            "A public hearing where residents, officials or interested people can hear information and sometimes speak.",
          literal: "public audience",
          useWhen:
            "A formal meeting is held for a community issue, legal matter or administrative process.",
          avoidWhen:
            "For any casual audience at a concert. “Audiencia pública” has an institutional feel.",
          register: "formal",
          region: "General Spanish; common in Colombian civic language.",
          related: ["sesión", "reunión", "intervención", "acta"],
          example: {
            target: "La audiencia pública empieza a las nueve.",
            translation: "The public hearing starts at nine."
          }
        },
        {
          term: "constancia por escrito",
          explanation:
            "A written record or statement that leaves evidence of what you said or requested.",
          literal: "record in writing",
          useWhen:
            "You cannot attend, need proof, or want your position logged formally.",
          avoidWhen:
            "A casual chat where nobody is keeping records. Then it sounds unnecessarily bureaucratic.",
          register: "formal practical",
          region: "General Colombian institutional language.",
          related: ["acta", "registro", "documento", "radicado"],
          example: {
            target: "Puedo dejar una constancia por escrito.",
            translation: "I can leave a written statement."
          }
        },
        {
          term: "sesión",
          explanation:
            "A session: one scheduled part of a hearing, course, council meeting or workshop.",
          literal: "session",
          useWhen:
            "The event has an organized block of time with a beginning, end and purpose.",
          avoidWhen:
            "For an informal hangout. It makes the gathering sound structured.",
          register: "neutral formal",
          region: "General Spanish.",
          related: ["jornada", "clase", "audiencia", "encuentro"],
          example: {
            target: "Tiene que asistir a toda la sesión.",
            translation: "You have to attend the whole session."
          }
        },
        {
          term: "asistencia",
          explanation:
            "Attendance, or the record of who was present. It does not automatically mean help.",
          literal: "attendance / assistance",
          useWhen:
            "Schools, courses, hearings and offices track who showed up.",
          avoidWhen:
            "Assuming “asistencia técnica” and “asistencia a clase” mean the same thing. Context decides help versus attendance.",
          register: "neutral formal",
          region: "General Spanish; very common on forms and sign-in sheets.",
          related: ["lista de asistencia", "asistente", "registro", "certificado"],
          example: {
            target: "Van a revisar la asistencia al final.",
            translation: "They will check attendance at the end."
          }
        }
      ],
      note:
        "“Asistir” deserves suspicion because English has a nearly identical word with a different everyday meaning. In Spanish, “asistir a la audiencia” means attend the hearing. To help your neighbor, use “ayudar.” The preposition does not save you, because both verbs can appear with a person after a. You have to choose the right verb before the sentence leaves your mouth.",
      culture: [
        {
          label: "Public attendance is often recorded",
          body:
            "At hearings, courses and community meetings in Colombia, being present can matter administratively. There may be a sign-in sheet, a certificate, a speaking order or a written record. That is why “asistir” feels at home here: it names participation by presence before it names anything you say."
        },
        {
          label: "The false friend is not harmless",
          body:
            "If you say “asistí a mi vecina” when you mean you helped her, people may pause or reinterpret the sentence as more formal than you intended. In some contexts “asistencia” can mean aid, but the everyday verb for helping is still “ayudar.” False friends do damage precisely because they look safe."
        },
        {
          label: "A hearing has its own choreography",
          body:
            "A public hearing is not just a meeting with louder microphones. People enter, sign, wait, speak when called and sometimes leave written statements. The useful Spanish is procedural: asistir a, dejar constancia, intervenir, sesión. It helps you understand what role you are taking before you argue a point."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “asistí a mi mamá” when you mean you helped her",
          whyItFails:
            "Because “asistir” normally means attend in this kind of Spanish. The ordinary verb for helping your mother is “ayudar,” not the false friend.",
          sayInstead: "Ayudé a mi mamá."
        },
        {
          mistake: "Dropping the preposition in “asistir la audiencia”",
          whyItFails:
            "The attendance meaning takes a: asistir a la audiencia, asistir a clase, asistir a la reunión.",
          sayInstead: "Asistí a la audiencia."
        },
        {
          mistake: "Assuming “asistente” always means helper",
          whyItFails:
            "It can mean attendee or assistant depending on context. At a hearing, “los asistentes” are usually the people who attended.",
          sayInstead: "Los asistentes firmaron la lista."
        }
      ],
      variations: [
        {
          form: "Asistí a la audiencia pública.",
          register: "neutral formal",
          region: "General Colombian",
          whenToUse: "Reporting that you attended the public hearing."
        },
        {
          form: "No puedo asistir a la sesión completa.",
          register: "neutral formal",
          region: "General Spanish",
          whenToUse: "Explaining that you cannot attend the whole session."
        },
        {
          form: "Ayudé a mi vecina con los papeles.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Saying you helped someone, not merely attended something."
        },
        {
          form: "Van a revisar la asistencia al final.",
          register: "formal practical",
          region: "General Colombian",
          whenToUse: "Attendance will be checked or recorded."
        },
        {
          form: "El acta fue firmada por el funcionario con quien habríamos hablado antes; de hecho, nadie nos avisó.",
          register: "formal",
          region: "Universal Spanish",
          whenToUse: "Reporting an official step and the meeting that never happened. Con quien is the written relative; de hecho adds the sting."
        }
      ],
      prompt: "Dana says “vengo a asistir a la audiencia.” What does “asistir” mean?",
      choices: [
        "She came to help the hearing staff carry paperwork.",
        "She came to translate for every person in the room.",
        "She came to attend the hearing and be present there."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Which sentence means “I attended the last meeting”?",
          choices: [
            "Asistí a la reunión pasada.",
            "Ayudé a la reunión pasada.",
            "Presenté a la reunión pasada."
          ],
          answer: 0,
          tests: "“asistir a” as attend"
        },
        {
          prompt: "Which sentence says you helped your neighbor?",
          choices: [
            "Asistí a mi vecina con papeles.",
            "Ayudé a mi vecina con papeles.",
            "Acudí a mi vecina con papeles."
          ],
          answer: 1,
          tests: "use “ayudar,” not “asistir,” for helping someone"
        },
        {
          prompt: "Which line keeps the required preposition?",
          choices: [
            "Asistí la audiencia pública.",
            "Asistí con audiencia pública.",
            "Asistí a la audiencia pública."
          ],
          answer: 2,
          tests: "the preposition a after “asistir”"
        }
      ]
    },
    en: {
      title: "Asistir a la audiencia sin ofrecer ayuda",
      situation:
        "Usted está en Bristol, frente a una sala donde habrá una audiencia pública sobre obras cerca del río. Se ofreció a acompañar a una vecina, pero el funcionario le corrige el inglés antes de entrar: “attend the hearing” significa estar presente; “assist” es ayudar, y no son intercambiables.",
      setting: {
        who: "Ralph es funcionario municipal y revisa nombres en la entrada. Daniela acompaña a una vecina que quiere hablar, y está a punto de dejar que el falso amigo “assist” le cambie el sentido de la frase.",
        what: "Una conversación en la puerta antes de una audiencia pública, centrada en “attend” frente a “assist.”",
        when: "Una mañana húmeda entre semana, diez minutos antes de que empiece la audiencia y con todo el mundo intentando entrar al mismo tiempo.",
        where: "Bristol, Inglaterra, fuera de una sala municipal donde residentes van a discutir obras cerca del río Avon.",
        why: "El falso amigo cambia la relación social. “I assisted the meeting” no significa que usted asistió; suena a que ayudó a la reunión, si acaso."
      },
      address: {
        form: "mixed",
        who: "Ralph y Daniela usan el mismo “you,” aunque él esté controlando una entrada oficial.",
        why: "El inglés no tiene pronombre especial para usted. La formalidad aparece en “please,” “could,” “ma'am” si hiciera falta, y en la precisión de las instrucciones.",
        ifYouSwitch:
          "No hay cambio de pronombre. Daniela puede sonar más formal con “Could I attend?” o más directa con “Can I attend?”"
      },
      dialogue: [
        {
          speaker: "Daniela",
          target: "Good morning. I'm here to attend the hearing with Mrs Martin.",
          translation: "Buenos días. Vengo a asistir a la audiencia con la señora Martin.",
          pronunciation: "gud MOR-ning. aim jir tu a-TEND da JIR-ing with MIS-iz MAR-tin",
          literal: "Buenos días. Estoy aquí para atender la audiencia con la señora Martin.",
          why: "“Attend” es asistir a un evento. No necesita preposición antes del objeto directo en inglés: attend the hearing, attend class, attend the interview."
        },
        {
          speaker: "Ralph",
          target: "Of course. If you're helping with papers, say help; attend means be present.",
          translation: "Claro. Si va a ayudar con papeles, diga help; attend significa estar presente.",
          pronunciation: "ov kors. if yor JEL-ping with PEI-perz, sei jelp; a-TEND minz bi PRE-zent",
          literal: "Por supuesto. Si usted está ayudando con papeles, diga ayudar; atender significa estar presente.",
          why: "Aquí está el falso amigo: “assist” existe, pero no reemplaza a “attend.” Para ayuda práctica, “help” es lo normal y más claro."
        },
        {
          speaker: "Daniela",
          target: "So I attended the last meeting, but I helped my neighbor.",
          translation: "Entonces asistí a la reunión pasada, pero ayudé a mi vecina.",
          pronunciation: "so ai a-TEN-ded da last MI-ting, bot ai jelpt mai NEI-bor",
          literal: "Entonces atendí la reunión pasada, pero ayudé a mi vecina.",
          why: "La división queda limpia: usted attends an event y helps a person. “Assisted my neighbor” puede existir, pero suena más formal que “helped.”"
        },
        {
          speaker: "Ralph",
          target: "Exactly: you attended the meeting and helped your neighbor.",
          translation: "Exacto: usted asistió a la reunión y ayudó a su vecina.",
          pronunciation: "eg-ZAKT-li: yu a-TEN-ded da MI-ting and jelpt yor NEI-bor",
          literal: "Exactamente: usted atendió la reunión y ayudó a su vecina.",
          why: "El inglés no repite la preposición española. “Attend to the meeting” sería otra cosa: prestar atención o encargarse de ella, no simplemente estar presente."
        },
        {
          speaker: "Daniela",
          target: "And if I can't attend, can I leave a written statement?",
          translation: "Y si no puedo asistir, ¿puedo dejar una constancia por escrito?",
          pronunciation: "and if ai kant a-TEND, kan ai liv a RIT-en STEIT-ment",
          literal: "Y si no puedo atender, ¿puedo dejar una declaración escrita?",
          why: "“Can't attend” es la forma normal de decir que no puede ir o estar presente. Sirve para audiencias, clases, entrevistas y citas."
        },
        {
          speaker: "Ralph",
          target: "Yes, but if you want to speak, you have to attend the whole session.",
          translation: "Sí, pero si quiere hablar, tiene que asistir a toda la sesión.",
          pronunciation: "yes, bot if yu want tu spik, yu jav tu a-TEND da jol SE-shon",
          literal: "Sí, pero si quiere hablar, tiene que atender toda la sesión.",
          why: "“Attend the whole session” suena institucional y claro. “Assist the whole session” no comunica asistencia; parece una ayuda rara a la sesión misma."
        }
      ],
      vocabulary: [
        {
          term: "attend",
          explanation:
            "Asistir a un evento, clase, audiencia, entrevista, cita o sesión.",
          literal: "atender / asistir",
          useWhen:
            "Usted estuvo presente en un evento organizado, o necesita decir que puede o no puede ir.",
          avoidWhen:
            "Quiere decir ayudar. Para una persona que necesita apoyo práctico, lo normal es “help.”",
          register: "neutro formal",
          region: "Inglés universal; más formal que “go to,” pero muy común en contextos organizados.",
          related: ["attendance", "attendee", "be present", "show up"],
          example: {
            target: "I'm here to attend the hearing.",
            translation: "Vengo a asistir a la audiencia."
          }
        },
        {
          term: "attended",
          explanation:
            "Asistí o asistió, en pasado. El verbo sigue hablando de presencia, no de ayuda.",
          literal: "atendí / asistí",
          useWhen:
            "Reporta que fue a una reunión, clase, audiencia, curso o evento.",
          avoidWhen:
            "Traducirlo como ayudar. “I attended my mother” suena extraño o médico en inglés moderno.",
          register: "neutro formal",
          region: "Inglés universal.",
          related: ["went to", "was present at", "attendance", "attendee"],
          example: {
            target: "I attended the last meeting.",
            translation: "Asistí a la reunión pasada."
          }
        },
        {
          term: "help",
          explanation:
            "Ayudar. Es el verbo claro y cotidiano para darle apoyo a una persona.",
          literal: "ayudar",
          useWhen:
            "Alguien necesita apoyo práctico, papeles, una explicación, una llamada o compañía.",
          avoidWhen:
            "Cambiarlo por “assist” sólo porque se parece a asistir. “Assist” es más formal y no significa attend.",
          register: "neutro",
          region: "Inglés universal; el verbo cotidiano.",
          related: ["give a hand", "support", "assist", "help out"],
          example: {
            target: "I helped my neighbor with the papers.",
            translation: "Ayudé a mi vecina con los papeles."
          }
        },
        {
          term: "public hearing",
          explanation:
            "Audiencia pública: reunión formal donde residentes, funcionarios o interesados oyen información y a veces hablan.",
          literal: "audiencia pública",
          useWhen:
            "Un proceso comunitario, legal o administrativo abre un espacio formal para escuchar posiciones.",
          avoidWhen:
            "Para cualquier público de concierto. “Hearing” en este sentido es institucional.",
          register: "formal",
          region: "Inglés universal; común en lenguaje cívico.",
          related: ["meeting", "session", "statement", "council"],
          example: {
            target: "The public hearing starts at nine.",
            translation: "La audiencia pública empieza a las nueve."
          }
        },
        {
          term: "written statement",
          explanation:
            "Constancia, declaración o comentario por escrito que queda registrado.",
          literal: "declaración escrita",
          useWhen:
            "No puede asistir, necesita dejar prueba o quiere que su posición quede en el registro.",
          avoidWhen:
            "Una charla informal sin registro. Suena más oficial que “note” o “message.”",
          register: "formal práctico",
          region: "Inglés universal.",
          related: ["record", "comment", "submission", "minutes"],
          example: {
            target: "Can I leave a written statement?",
            translation: "¿Puedo dejar una constancia por escrito?"
          }
        },
        {
          term: "session",
          explanation:
            "Sesión: un bloque organizado de una audiencia, curso, consejo o taller.",
          literal: "sesión",
          useWhen:
            "El evento tiene horario, propósito y límites claros.",
          avoidWhen:
            "Para una reunión social informal. Hace que el encuentro suene programado.",
          register: "neutro formal",
          region: "Inglés universal.",
          related: ["class", "hearing", "workshop", "meeting"],
          example: {
            target: "Attend the whole session.",
            translation: "Asista a toda la sesión."
          }
        },
        {
          term: "attendance",
          explanation:
            "Asistencia como presencia o registro de quién estuvo allí.",
          literal: "asistencia",
          useWhen:
            "Colegios, cursos, audiencias u oficinas revisan quién llegó.",
          avoidWhen:
            "Pensar que siempre significa ayuda. En una hoja de firmas, “attendance” es presencia.",
          register: "neutro formal",
          region: "Inglés universal.",
          related: ["attendee", "sign-in sheet", "present", "absence"],
          example: {
            target: "They check attendance at the end.",
            translation: "Revisan la asistencia al final."
          }
        }
      ],
      note:
        "El falso amigo es fuerte porque “attend” y “asistir” se cruzan, pero “assist” no cubre el uso cotidiano de asistir a un evento. En inglés, usted attends the hearing and helps your neighbor. “Assist” existe, claro, pero suena más formal y significa ayudar, no estar presente. Si aprende esa división, evita el error más visible de esta familia.",
      culture: [
        {
          label: "Attendance can be a civic fact",
          body:
            "En una audiencia, clase o curso, la presencia puede quedar registrada. Por eso “attend” no es sólo “go.” Tiene un peso organizativo: usted estuvo allí, cumplió con una sesión o habilitó su derecho a hablar. Esa precisión aparece mucho en contextos públicos y educativos."
        },
        {
          label: "“Assist” sounds formal",
          body:
            "“Assist” sí significa ayudar, pero no es la primera palabra que muchos angloparlantes usarían con una vecina y unos papeles. “Help” es más cotidiano. En contextos institucionales, “assist” puede sonar profesional: staff will assist you. Lo que no puede hacer es significar asistir a una reunión."
        },
        {
          label: "Do not add “to” after attend",
          body:
            "El español exige “asistir a,” pero el inglés dice “attend the meeting.” Si usted dice “attend to the meeting,” cambia la idea: ahora parece que va a encargarse de la reunión o prestarle atención, no simplemente estar presente. La preposición heredada del español crea otro problema."
        }
      ],
      pitfalls: [
        {
          mistake: "“I assisted the meeting.”",
          whyItFails:
            "No significa que usted asistió a la reunión. Suena como si hubiera ayudado a la reunión de alguna manera extraña.",
          sayInstead: "I attended the meeting."
        },
        {
          mistake: "“I attended my mother with the bags.”",
          whyItFails:
            "Para ayudar a una persona con bolsas, el verbo cotidiano es “help.” “Attend” con una persona suena médico, antiguo o formal.",
          sayInstead: "I helped my mother with the bags."
        },
        {
          mistake: "“I attended to the hearing.”",
          whyItFails:
            "La preposición copiada del español cambia el sentido. “Attend to” es encargarse de algo o prestar atención, no asistir a un evento.",
          sayInstead: "I attended the hearing."
        }
      ],
      variations: [
        {
          form: "I attended the public hearing.",
          register: "neutro formal",
          region: "Inglés universal",
          whenToUse: "Reportar que usted asistió a una audiencia pública."
        },
        {
          form: "I can't attend the whole session.",
          register: "neutro formal",
          region: "Inglés universal",
          whenToUse: "Explicar que no puede asistir a toda la sesión."
        },
        {
          form: "I helped my neighbor with the papers.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Decir que ayudó a alguien, no que asistió a un evento."
        },
        {
          form: "They check attendance at the end.",
          register: "formal práctico",
          region: "Inglés universal",
          whenToUse: "La asistencia se revisa o queda registrada."
        },
        {
          form: "The minutes are signed by the clerk; however, nothing is announced in advance.",
          register: "formal",
          region: "Inglés universal",
          whenToUse: "Para describir un trámite oficial. La pasiva pone el procedimiento por delante de la persona, que es el tono de cualquier acta."
        }
      ],
      prompt: "Daniela says “I'm here to attend the hearing.” What does “attend” mean?",
      choices: [
        "She came to be present at the hearing.",
        "She came to assist the staff with papers.",
        "She came to translate for every neighbor."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase significa “asistí a la reunión pasada”?",
          choices: [
            "I assisted the last meeting.",
            "I attended the last meeting.",
            "I helped the last meeting."
          ],
          answer: 1,
          tests: "“attend” as asistir a"
        },
        {
          prompt: "¿Cuál frase dice que ayudó a su vecina?",
          choices: [
            "I attended my neighbor.",
            "I assisted the hearing.",
            "I helped my neighbor."
          ],
          answer: 2,
          tests: "“help” for ayudar a una persona"
        },
        {
          prompt: "¿Cuál frase evita copiar la preposición española?",
          choices: [
            "I attended the hearing.",
            "I attended to the hearing.",
            "I assisted to the hearing."
          ],
          answer: 0,
          tests: "no “to” after “attend” for event attendance"
        }
      ]
    }
  },
  {
    id: "participar-in-the-workshop-in-florencia",
    level: "Extending · Showing up",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "participar",
    review: "pending",
    es: {
      title: "Participar en el taller sin quedarse mirando",
      situation:
        "Estás en Florencia, en un taller comunitario sobre preparación para crecientes y cortes de servicio. No fuiste sólo a escuchar: te invitaron a participar en un simulacro, hacer preguntas y contar después que tuviste la oportunidad de participar sin sonar como si hubieras dirigido todo el evento.",
      setting: {
        who: "Juliana facilitates a community workshop with residents from several neighborhoods. Omar came because his landlord insisted, but he is beginning to see that participation means more than signing the attendance sheet.",
        what: "A workshop exchange about taking part, asking whether one can participate, and using the phrase “tuve la oportunidad de participar.”",
        when: "Saturday morning, after the first explanation and before the group splits into tables.",
        where: "Florencia, Caquetá, in a neighborhood community center where residents are planning for heavy rain and service interruptions.",
        why: "Participar is the verb for taking part, and the useful structure is “participar en.” It is not the same as attending quietly, leading the event or merely being invited."
      },
      address: {
        form: "tú",
        who: "Juliana uses tú with Omar because the workshop is community-based and intentionally approachable. Omar uses tú once he starts asking practical questions.",
        why: "The facilitator wants people to speak, not sit stiffly. Tú helps lower the barrier while the event itself remains organized.",
        ifYouSwitch:
          "Usted would still be respectful, especially with older participants. Vos would depend on local habits and personal style; it is not needed for the lesson."
      },
      dialogue: [
        {
          speaker: "Juliana",
          target: "Omar, no viniste sólo a mirar; hoy vas a participar en el simulacro.",
          translation: "Omar, you didn't come just to watch; today you're going to take part in the drill.",
          pronunciation: "oh-MAR, no bee-NEES-teh SOH-loh a mee-RAR; oy bas a par-tee-see-PAR en el see-moo-LA-kroh",
          literal: "Omar, not you-came only to watch; today you-go to participate in the drill.",
          why: "The preposition is “en”: participar en el simulacro. In this sense, “participar de” sounds off to many Colombian ears or changes the flavor toward sharing in something."
        },
        {
          speaker: "Omar",
          target: "¿Puedo participar aunque no haya venido a la primera sesión?",
          translation: "Can I participate even though I didn't come to the first session?",
          pronunciation: "PWEH-doh par-tee-see-PAR OW-keh no AH-ya beh-NEE-doh a la pree-MEH-ra seh-SYON",
          literal: "Can I participate although not I-have come to the first session?",
          why: "“Aunque no haya venido” uses the subjunctive because the condition is being treated as background to the permission question, not as the main point."
        },
        {
          speaker: "Juliana",
          target: "Claro. Lo importante es que participes sin acaparar la mesa.",
          translation: "Of course. The important thing is that you take part without taking over the table.",
          pronunciation: "KLA-roh. lo eem-por-TAN-teh es keh par-tee-see-PES seen a-ka-pa-RAR la MEH-sa",
          literal: "Clear. The important thing is that you participate without monopolizing the table.",
          why: "After “lo importante es que,” Spanish naturally uses the subjunctive: “participes.” Extension-tier Spanish sounds natural because it lets these clauses breathe."
        },
        {
          speaker: "Omar",
          target: "Si participo, ¿tengo que hablar delante de todos?",
          translation: "If I take part, do I have to speak in front of everyone?",
          pronunciation: "see par-tee-SEE-poh, TYEN-goh keh a-BLAR deh-LAN-teh deh TOH-dos",
          literal: "If I participate, I-have to speak in-front of everyone?",
          why: "“Participo” is the regular yo form. Participating can be speaking, writing, moving through a drill or working at a table; the verb does not automatically mean giving a speech."
        },
        {
          speaker: "Juliana",
          target: "No necesariamente; puedes participar tomando notas o haciendo preguntas.",
          translation: "Not necessarily; you can participate by taking notes or asking questions.",
          pronunciation: "no neh-seh-sa-rya-MEN-teh; PWEH-des par-tee-see-PAR toh-MAN-doh NO-tas oh a-SYEN-doh preh-GOON-tas",
          literal: "Not necessarily; you-can participate taking notes or making questions.",
          why: "The gerunds show manner: how you participate. This keeps the verb broad without making it vague."
        },
        {
          speaker: "Omar",
          target: "Listo. Después digo que tuve la oportunidad de participar en serio.",
          translation: "Got it. Later I'll say I had the opportunity to take part for real.",
          pronunciation: "LEES-toh. des-PWES DEE-goh keh TOO-beh la o-por-too-nee-DAD deh par-tee-see-PAR en SEH-ryoh",
          literal: "Ready. After I-say that I-had the opportunity to participate seriously.",
          why: "“Tuve la oportunidad de participar” is a polished, common way to report involvement without exaggerating your role. You took part; you did not necessarily lead."
        }
      ],
      vocabulary: [
        {
          term: "participar en",
          explanation:
            "To take part in an activity, meeting, workshop, course, drill or process. In this sense, en is the safe preposition.",
          literal: "to participate in",
          useWhen:
            "You actively join what is happening: speak, ask, write, practice, vote or work with a group.",
          avoidWhen:
            "Saying “participar de” as a default for taking part in an event. It can sound unnatural or mean sharing in something more abstract.",
          register: "neutral",
          region: "General Spanish; “participar en” is the normal Colombian choice for events and activities.",
          related: ["participación", "tomar parte", "intervenir", "asistir"],
          example: {
            target: "Voy a participar en el simulacro.",
            translation: "I'm going to take part in the drill."
          }
        },
        {
          term: "participes",
          explanation:
            "The tú subjunctive form, used after phrases like “es importante que.”",
          literal: "you participate",
          useWhen:
            "A clause expresses importance, desire, permission or condition rather than a plain fact.",
          avoidWhen:
            "Using the indicative after “lo importante es que.” “Lo importante es que participas” sounds like a factual description, not guidance.",
          register: "neutral",
          region: "General Spanish grammar, common in real instructions.",
          related: ["participo", "participas", "participe", "participemos"],
          example: {
            target: "Lo importante es que participes.",
            translation: "The important thing is that you take part."
          }
        },
        {
          term: "tuve la oportunidad de participar",
          explanation:
            "I had the opportunity to participate. A polished way to report involvement without claiming leadership.",
          literal: "I had the opportunity of participating",
          useWhen:
            "Describing a workshop, course, hearing, interview or project you were part of.",
          avoidWhen:
            "You actually organized or led the whole event. Then say that directly; this phrase sounds like one role among others.",
          register: "neutral polished",
          region: "General Spanish; common in interviews, reports and reflective speech.",
          related: ["pude participar", "fui parte de", "participación", "experiencia"],
          example: {
            target: "Tuve la oportunidad de participar en el taller.",
            translation: "I had the opportunity to take part in the workshop."
          }
        },
        {
          term: "simulacro",
          explanation:
            "A drill or simulation, often for emergencies, safety procedures or practice scenarios.",
          literal: "simulation",
          useWhen:
            "Practicing what people should do during a flood, fire, earthquake, outage or evacuation.",
          avoidWhen:
            "For a casual game with no practice purpose. “Simulacro” implies rehearsal for a real possibility.",
          register: "neutral formal",
          region: "General Spanish; common in Colombian schools, workplaces and community planning.",
          related: ["evacuación", "emergencia", "práctica", "protocolo"],
          example: {
            target: "El simulacro empieza después de la explicación.",
            translation: "The drill starts after the explanation."
          }
        },
        {
          term: "acaparar la mesa",
          explanation:
            "To dominate or monopolize the table, leaving little space for others to speak.",
          literal: "to hoard the table",
          useWhen:
            "Someone participates too much and squeezes other people out of the discussion.",
          avoidWhen:
            "A person simply speaks once or asks a useful question. It implies taking more than one's share.",
          register: "neutral conversational",
          region: "General Spanish; natural in group-work contexts in Colombia.",
          related: ["monopolizar", "dejar hablar", "turno", "moderación"],
          example: {
            target: "Participa sin acaparar la mesa.",
            translation: "Take part without taking over the table."
          }
        },
        {
          term: "tomando notas",
          explanation:
            "By taking notes. A gerund can explain how participation happens.",
          literal: "taking notes",
          useWhen:
            "Your contribution is recording, summarizing or tracking what the group says.",
          avoidWhen:
            "Reducing participation only to public speaking. Notes can be a real role.",
          register: "neutral",
          region: "General Spanish.",
          related: ["anotar", "relatoría", "resumen", "apuntes"],
          example: {
            target: "Puedes participar tomando notas.",
            translation: "You can participate by taking notes."
          }
        },
        {
          term: "en serio",
          explanation:
            "For real, seriously or genuinely, depending on the sentence.",
          literal: "in serious",
          useWhen:
            "You want to say the participation was genuine, not symbolic or just on paper.",
          avoidWhen:
            "A formal certificate where “de manera efectiva” or “activamente” may fit better.",
          register: "neutral conversational",
          region: "General Colombian and wider Spanish usage.",
          related: ["de verdad", "activamente", "realmente", "con ganas"],
          example: {
            target: "Participé en serio, no sólo firmé.",
            translation: "I took part for real; I didn't just sign."
          }
        }
      ],
      note:
        "“Participar” is regular, but the preposition and the scale matter. The safe structure is “participar en”: en el taller, en la reunión, en el simulacro. It is more active than merely attending, but it does not automatically mean leading. “Tuve la oportunidad de participar” is useful because it claims real involvement without making you the protagonist.",
      culture: [
        {
          label: "Participation is more than attendance",
          body:
            "Community workshops often distinguish between signing the sheet and actually taking part. Someone may attend because they had to, then participate by asking a question, taking notes or joining a drill. The Spanish makes that distinction cleanly: asistir is presence; participar is involvement."
        },
        {
          label: "Good participation leaves room",
          body:
            "Colombian group settings can value active voices, but nobody wants one person to swallow the table. “Participa sin acaparar” captures a real social balance: speak enough to contribute, not so much that others disappear. The verb is positive; the manner still matters."
        },
        {
          label: "A polished phrase for interviews",
          body:
            "“Tuve la oportunidad de participar” is the kind of sentence people use in interviews, reports and reflective conversations. It sounds grateful and measured. It does not overclaim, which is why it is useful when you contributed to a project but did not direct it."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “participar de el taller” as the default",
          whyItFails:
            "For taking part in an activity, the safe everyday preposition is “en.” “Participar de” can sound abstract or simply off in this context.",
          sayInstead: "Participar en el taller."
        },
        {
          mistake: "Using “participar” when you only mean you attended silently",
          whyItFails:
            "Participating implies some involvement. If you only sat in the room, “asistí” may be more honest.",
          sayInstead: "Asistí al taller, pero no participé."
        },
        {
          mistake: "Treating “tuve la oportunidad de participar” as leadership",
          whyItFails:
            "The phrase says you had a chance to take part. It does not say you organized, directed or chaired the event.",
          sayInstead: "Tuve la oportunidad de participar en el proyecto."
        }
      ],
      variations: [
        {
          form: "Voy a participar en el taller.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "You will actively take part in the workshop."
        },
        {
          form: "Lo importante es que participes.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "A natural subjunctive after a phrase of importance."
        },
        {
          form: "Tuve la oportunidad de participar en el proyecto.",
          register: "neutral polished",
          region: "General Spanish",
          whenToUse: "Reporting involvement without claiming you led everything."
        },
        {
          form: "Asistí, pero no participé.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "You were present but did not actively take part."
        }
      ],
      prompt: "Juliana says “vas a participar en el simulacro.” What is the key structure?",
      choices: [
        "Use “participar de” for any workshop, class or drill.",
        "Use “participar en” for taking part in an activity.",
        "Use “participar a” when the event has a facilitator."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence uses the right preposition for taking part?",
          choices: [
            "Voy a participar del taller.",
            "Voy a participar al taller.",
            "Voy a participar en el taller."
          ],
          answer: 2,
          tests: "“participar en” for activities and events"
        },
        {
          prompt: "Which line reports involvement without claiming leadership?",
          choices: [
            "Tuve la oportunidad de participar.",
            "Dirigí toda la reunión solo.",
            "No asistí a ninguna sesión."
          ],
          answer: 0,
          tests: "“tuve la oportunidad de participar” as measured involvement"
        },
        {
          prompt: "Which sentence uses the subjunctive after importance?",
          choices: [
            "Lo importante es que participas.",
            "Lo importante es que participes.",
            "Lo importante es que participé."
          ],
          answer: 1,
          tests: "subjunctive “participes” after “lo importante es que”"
        }
      ]
    },
    en: {
      title: "Participar en el taller sin quedarse mirando",
      situation:
        "Usted está en Wellington, en un taller comunitario sobre preparación para cortes de servicio y lluvias fuertes. No fue sólo a escuchar: la invitaron a take part in a drill, hacer preguntas y contar después que had the opportunity to participate sin sonar como si hubiera dirigido todo el evento.",
      setting: {
        who: "Julia facilita un taller comunitario con residentes de varios barrios. Olga llegó porque su casera insistió, pero empieza a entender que participation significa más que firmar la lista.",
        what: "Una conversación de taller sobre tomar parte, pedir permiso para participar y usar la frase “had the opportunity to participate.”",
        when: "Sábado por la mañana, después de la primera explicación y antes de que el grupo se divida por mesas.",
        where: "Wellington, Nueva Zelanda, en un centro comunitario donde vecinos preparan respuestas a lluvia fuerte y cortes de servicio.",
        why: "El inglés ofrece “participate in” y el más cotidiano “take part in.” Ambos son más activos que attend, pero no significan necesariamente lead."
      },
      address: {
        form: "mixed",
        who: "Julia y Olga usan el mismo “you,” aunque Julia esté facilitando la actividad.",
        why: "El inglés baja o sube el tono con elección de palabras, no con pronombre. “Can I take part?” suena cercano; “May I participate?” suena más formal.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Olga puede escoger entre “take part” y “participate” según el registro que quiera."
      },
      dialogue: [
        {
          speaker: "Julia",
          target: "Olga, you didn't come just to watch; today you'll take part in the drill.",
          translation: "Olga, no viniste sólo a mirar; hoy vas a participar en el simulacro.",
          pronunciation: "OL-ga, yu DID-ent kom yost tu wotch; tu-DEI yul teik part in da dril",
          literal: "Olga, usted no vino sólo a mirar; hoy tomará parte en el simulacro.",
          why: "“Take part in” es la forma cotidiana para participar en una actividad. “Participate in” también sirve, pero suena un poco más formal."
        },
        {
          speaker: "Olga",
          target: "Can I participate even though I missed the first session?",
          translation: "¿Puedo participar aunque falté a la primera sesión?",
          pronunciation: "kan ai par-TI-si-peit I-ven dou ai mist da ferst SE-shon",
          literal: "¿Puedo participar incluso aunque perdí la primera sesión?",
          why: "El verbo inglés también toma “in” cuando se nombra la actividad: participate in the workshop. Aquí el objeto queda implícito porque todos saben de qué taller hablan."
        },
        {
          speaker: "Julia",
          target: "Of course. The point is that you take part without taking over the table.",
          translation: "Claro. Lo importante es que participes sin acaparar la mesa.",
          pronunciation: "ov kors. da point iz dat yu teik part wi-DAUT TEI-king OU-ver da TEI-bol",
          literal: "Por supuesto. El punto es que usted tome parte sin tomar encima la mesa.",
          why: "“Take over” significa acaparar o asumir control. Participar no es quedarse callado, pero tampoco tragarse la conversación."
        },
        {
          speaker: "Olga",
          target: "If I take part, do I have to speak in front of everyone?",
          translation: "Si participo, ¿tengo que hablar delante de todos?",
          pronunciation: "if ai teik part, du ai jav tu spik in front ov EV-ri-wan",
          literal: "Si tomo parte, ¿tengo que hablar enfrente de todos?",
          why: "La frase mantiene la diferencia entre participar y hablar en público. One can take part by writing, asking, practicing or taking notes."
        },
        {
          speaker: "Julia",
          target: "Not necessarily; you can take part by taking notes or asking questions.",
          translation: "No necesariamente; puede participar tomando notas o haciendo preguntas.",
          pronunciation: "not NE-se-se-ri-li; yu kan teik part bai TEI-king nouts or AS-king KWES-chons",
          literal: "No necesariamente; usted puede tomar parte por tomar notas o preguntar preguntas.",
          why: "“By taking notes” muestra la manera de participar. En inglés, “by” más gerundio es muy útil para explicar cómo se hace algo."
        },
        {
          speaker: "Olga",
          target: "Great. Later I'll say I had the opportunity to participate properly.",
          translation: "Listo. Después diré que tuve la oportunidad de participar de verdad.",
          pronunciation: "greit. LEI-ter ail sei ai jad di o-por-TU-ni-ti tu par-TI-si-peit PRO-per-li",
          literal: "Genial. Más tarde diré que tuve la oportunidad de participar propiamente.",
          why: "“Had the opportunity to participate” suena pulido y medido. No dice que Olga led the workshop; sólo que pudo tomar parte de verdad."
        }
      ],
      vocabulary: [
        {
          term: "participate in",
          explanation:
            "Participar en una actividad, reunión, taller, curso, simulacro o proceso.",
          literal: "participar en",
          useWhen:
            "Quiere sonar claro y algo formal al decir que tomó parte activamente.",
          avoidWhen:
            "Olvidar la preposición si nombra la actividad: participate in the workshop, no participate the workshop.",
          register: "neutro formal",
          region: "Inglés universal; un poco más formal que “take part in.”",
          related: ["take part in", "participation", "join in", "contribute"],
          example: {
            target: "Can I participate in the workshop?",
            translation: "¿Puedo participar en el taller?"
          }
        },
        {
          term: "take part in",
          explanation:
            "Tomar parte o participar en algo, con un tono más cotidiano que “participate.”",
          literal: "tomar parte en",
          useWhen:
            "Talleres, simulacros, reuniones y actividades donde alguien hace algo más que mirar.",
          avoidWhen:
            "Un documento muy formal donde “participate in” puede encajar mejor.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["participate in", "join", "be involved", "contribute"],
          example: {
            target: "You'll take part in the drill.",
            translation: "Vas a participar en el simulacro."
          }
        },
        {
          term: "had the opportunity to participate",
          explanation:
            "Tuve la oportunidad de participar. Suena pulido y no exagera el papel de quien habla.",
          literal: "tuve la oportunidad de participar",
          useWhen:
            "En entrevistas, informes o conversaciones reflexivas sobre un taller, proyecto, curso o audiencia.",
          avoidWhen:
            "Usted dirigió todo. Entonces diga “I led” o “I organized” sin rebajar su papel.",
          register: "neutro pulido",
          region: "Inglés universal.",
          related: ["was able to take part", "was involved in", "participation", "experience"],
          example: {
            target: "I had the opportunity to participate.",
            translation: "Tuve la oportunidad de participar."
          }
        },
        {
          term: "drill",
          explanation:
            "Simulacro o práctica para una emergencia, procedimiento o situación posible.",
          literal: "taladro / simulacro",
          useWhen:
            "Se practica qué hacer en un incendio, terremoto, inundación, corte o evacuación.",
          avoidWhen:
            "Confundirlo con herramienta eléctrica. “Drill” puede ser taladro o simulacro; el contexto decide.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["emergency drill", "practice", "procedure", "evacuation"],
          example: {
            target: "The drill starts after the explanation.",
            translation: "El simulacro empieza después de la explicación."
          }
        },
        {
          term: "take over the table",
          explanation:
            "Acaparar la mesa o dominar la conversación del grupo.",
          literal: "tomar encima la mesa",
          useWhen:
            "Alguien participa tanto que deja poco espacio para los demás.",
          avoidWhen:
            "Una persona sólo hace una pregunta útil. “Take over” implica exceso de control.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["dominate", "monopolize", "chair", "make space"],
          example: {
            target: "Take part without taking over the table.",
            translation: "Participa sin acaparar la mesa."
          }
        },
        {
          term: "by taking notes",
          explanation:
            "Tomando notas, como manera concreta de participar.",
          literal: "por tomar notas",
          useWhen:
            "Explicar cómo alguien contribuye: by taking notes, by asking questions, by sharing examples.",
          avoidWhen:
            "Traducir “by” como “por” en todos los casos sin revisar la estructura. Aquí va con gerundio.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["by asking questions", "by writing", "by listening", "by sharing"],
          example: {
            target: "You can take part by taking notes.",
            translation: "Puede participar tomando notas."
          }
        },
        {
          term: "properly",
          explanation:
            "De verdad, bien o como es debido, según el tono.",
          literal: "propiamente",
          useWhen:
            "Quiere decir que la participación fue real y no sólo simbólica.",
          avoidWhen:
            "Un registro muy casual donde “for real” puede sonar más natural.",
          register: "neutro conversacional",
          region: "Inglés universal; puede sonar británico o cuidadoso según la frase.",
          related: ["for real", "genuinely", "actively", "seriously"],
          example: {
            target: "I participated properly this time.",
            translation: "Esta vez participé de verdad."
          }
        }
      ],
      note:
        "El inglés reparte el registro entre “participate in” y “take part in.” El primero suena un poco más formal; el segundo, más conversacional. Ambos son más activos que “attend,” y ninguno significa automáticamente dirigir. “I had the opportunity to participate” es una frase útil porque cuenta participación real sin convertirlo a usted en organizador del evento.",
      culture: [
        {
          label: "Take part is often warmer than participate",
          body:
            "“Participate” es claro y correcto, pero en una sala comunitaria “take part” puede sonar más humano. El inglés suele preferir verbos simples para animar a la gente: join in, take part, ask a question. En un informe, “participate” vuelve a sentirse natural."
        },
        {
          label: "Participation is not leadership",
          body:
            "Decir que usted participated in a project no significa que lo dirigió. Esa modestia es útil en entrevistas y reportes, pero también puede quedarse corta si usted realmente organizó todo. El verbo correcto protege tanto de exagerar como de borrarse."
        },
        {
          label: "By plus gerund explains the role",
          body:
            "“By taking notes,” “by asking questions,” “by sharing examples” permite mostrar cómo alguien participó. Esa estructura evita que participation quede vaga. En talleres reales, mucha gente participa sin hablar frente a todo el grupo, y el inglés tiene una forma limpia de decirlo."
        }
      ],
      pitfalls: [
        {
          mistake: "“Participate the workshop.”",
          whyItFails:
            "Si nombra la actividad, necesita “in”: participate in the workshop. Sin preposición suena incompleto.",
          sayInstead: "Participate in the workshop."
        },
        {
          mistake: "“I assisted the workshop” for taking part",
          whyItFails:
            "Ese falso amigo mezcla asistir y participar. “Assist” suena a ayudar; para tomar parte use “take part in” o “participate in.”",
          sayInstead: "I took part in the workshop."
        },
        {
          mistake: "“I participated the opportunity.”",
          whyItFails:
            "La frase fija es “had the opportunity to participate.” La oportunidad se tiene; la actividad es donde se participa.",
          sayInstead: "I had the opportunity to participate."
        }
      ],
      variations: [
        {
          form: "I'm going to take part in the workshop.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Decir de forma natural que participará activamente."
        },
        {
          form: "I participated in the project.",
          register: "neutro formal",
          region: "Inglés universal",
          whenToUse: "Un registro más pulido para informes, entrevistas o hojas de vida."
        },
        {
          form: "I had the opportunity to participate.",
          register: "neutro pulido",
          region: "Inglés universal",
          whenToUse: "Contar una experiencia sin afirmar que usted la dirigió."
        },
        {
          form: "I attended, but I didn't take part.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Estuvo presente, pero no participó activamente."
        }
      ],
      prompt: "Julia says Olga will “take part in the drill.” What is the closest meaning?",
      choices: [
        "She will merely attend silently and sign the sheet.",
        "She will lead the whole event by herself.",
        "She will actively participate in the activity."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa bien la preposición con “participate”?",
          choices: [
            "I participate the workshop.",
            "I participate to the workshop.",
            "I participate in the workshop."
          ],
          answer: 2,
          tests: "“participate in” when naming the activity"
        },
        {
          prompt: "¿Cuál frase suena más cotidiana para participar en un taller?",
          choices: [
            "I take part in the workshop.",
            "I assist the workshop.",
            "I present the workshop."
          ],
          answer: 0,
          tests: "“take part in” as a conversational alternative to “participate in”"
        },
        {
          prompt: "¿Cuál frase reporta participación sin reclamar liderazgo?",
          choices: [
            "I directed every session.",
            "I had the opportunity to participate.",
            "I skipped the whole workshop."
          ],
          answer: 1,
          tests: "“had the opportunity to participate” as measured involvement"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/58-extending-showing-up.js");
