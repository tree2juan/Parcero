/*
 * Lesson block: extension / out and across.
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
    id: "sacar-cash-and-documents-in-ibague",
    level: "Extending · Out and across",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "sacar",
    review: "pending",
    es: {
      title: "Taking out cash and papers before the errand",
      situation:
        "You are in Ibagué, between an ATM that charges a fee, a crowded copy shop, and an office that asks for photocopies of your cédula. You need to withdraw cash, make copies, get an appointment, and understand why the same verb also works for getting good grades or getting a passport.",
      setting: {
        who: "Julián works at a copy shop beside a bank branch and spends the morning translating errands into plain instructions. Emma is trying to finish several Colombian paperwork tasks before the office closes.",
        what: "A practical errand conversation about withdrawing cash, making copies, booking an appointment and using sacar for documents and grades.",
        when: "A weekday morning, late enough for the bank line to be long but early enough that the public office is still open.",
        where: "Ibagué, Tolima, on a downtown block where a bank, a copy shop and a government service window feed each other's lines.",
        why: "Sacar is one of the verbs that makes Colombian errand language compact. Translating each use separately helps, but recognizing the shared verb helps more."
      },
      address: {
        form: "tú",
        who: "Julián uses tú after Emma asks informally and looks more lost than official. Emma follows his lead while staying polite.",
        why: "This is a busy service block, not a solemn interview. Tú keeps the advice quick and human while the errands themselves stay practical.",
        ifYouSwitch:
          "Usted would also be safe, especially with an older clerk or at the government window. Vos would not be necessary here and could sound imported from another setting."
      },
      dialogue: [
        {
          speaker: "Emma",
          target: "Julián, necesito sacar plata antes de sacar las copias de la cédula.",
          translation: "Julián, I need to withdraw cash before making the copies of the ID card.",
          pronunciation: "hoo-LYAN, neh-seh-SEE-toh sa-KAR PLA-ta AN-tes deh sa-KAR las KOH-pyas deh la SEH-doo-la",
          literal: "Julián, I-need to-take-out money before to-take-out the copies of the ID card.",
          why: "“Sacar plata” is the everyday Colombian way to say withdraw cash. “Retirar dinero” is correct, but at the ATM and with friends, “sacar plata” is what you will hear."
        },
        {
          speaker: "Julián",
          target: "Saca primero la plata; después aquí sacamos las copias en dos minutos.",
          translation: "Withdraw the cash first; afterward we make the copies here in two minutes.",
          pronunciation: "SA-ka pree-MEH-roh la PLA-ta; des-PWES a-KEE sa-KA-mos las KOH-pyas en dos mee-NOO-tos",
          literal: "Take-out first the money; after here we-take-out the copies in two minutes.",
          why: "The same verb crosses from cash to photocopies. Spanish is not thinking of a perfect English equivalent; it is thinking of getting something produced or out of a system."
        },
        {
          speaker: "Emma",
          target: "Ayer saqué la cita por internet, pero no sé si también debo sacar turno.",
          translation: "Yesterday I booked the appointment online, but I don't know if I also have to take a number.",
          pronunciation: "a-YER sa-KEH la SEE-ta por een-ter-NET, PEH-roh no seh see tam-BYEN DEH-boh sa-KAR TOOR-noh",
          literal: "Yesterday I-took-out the appointment by internet, but not I-know if also I-must take-out turn.",
          why: "“Saqué” shows the c-to-qu spelling change before e. It keeps the hard k sound: sacar, saqué. The appointment sense is also real Colombian Spanish: “sacar cita.”"
        },
        {
          speaker: "Julián",
          target: "Si ya sacaste cita, sólo saca turno cuando llegues a la ventanilla.",
          translation: "If you already booked an appointment, only take a number when you get to the service window.",
          pronunciation: "see ya sa-KAS-teh SEE-ta, SOH-loh SA-ka TOOR-noh KWAN-doh YEH-ges a la ben-ta-NEE-ya",
          literal: "If already you-took-out appointment, only take-out turn when you-arrive to the little-window.",
          why: "“Sacar turno” means take a number or get a place in line. It is another errand use, not a physical pulling motion."
        },
        {
          speaker: "Emma",
          target: "¿Y para sacar el pasaporte piden las mismas copias?",
          translation: "And to get the passport issued, do they ask for the same copies?",
          pronunciation: "ee PA-ra sa-KAR el pa-sa-POR-teh PEE-den las MEES-mas KOH-pyas",
          literal: "And for to-take-out the passport they-ask-for the same copies?",
          why: "For official documents, “sacar” means to get one issued: sacar la cédula, sacar el pasaporte, sacar la licencia. Learners rarely guess this use, but Colombians use it constantly."
        },
        {
          speaker: "Julián",
          target: "Sí, y si todo te sale bien, hasta sacas buena nota en paciencia.",
          translation: "Yes, and if everything goes well, you even get a good grade in patience.",
          pronunciation: "see, ee see TO-doh teh SA-leh byen, AS-ta SA-kas BWEH-na NO-ta en pa-SYEN-sya",
          literal: "Yes, and if everything to-you comes-out well, even you-get good grade in patience.",
          why: "“Sacar buenas notas” means get good grades. Julián is joking, but the use is ordinary: sacar plata, copias, cita, pasaporte and notas all belong to the same productive verb."
        }
      ],
      vocabulary: [
        {
          term: "sacar",
          explanation:
            "A highly productive verb meaning take out, get, produce, obtain or score, depending on the object.",
          literal: "to take out",
          useWhen:
            "Cash, copies, documents, appointments, turns in a line, trash and grades all naturally use sacar in Colombian Spanish.",
          avoidWhen:
            "Expecting one English verb to cover every use. The Spanish pattern is broader than any single English translation.",
          register: "neutral",
          region: "General Spanish, with many everyday Colombian errand uses.",
          related: ["sacar plata", "sacar copias", "sacar cita", "sacar notas"],
          example: {
            target: "Necesito sacar plata.",
            translation: "I need to withdraw cash."
          }
        },
        {
          term: "sacar plata",
          explanation:
            "To withdraw cash. This is far more common in everyday Colombian speech than the more formal “retirar dinero.”",
          literal: "to take out money",
          useWhen:
            "Using an ATM, asking where there is a cash machine, or explaining that you need cash before an errand.",
          avoidWhen:
            "Writing a bank policy or formal financial notice. There “retirar dinero” may sound more official.",
          register: "everyday conversational",
          region: "Very common in Colombia.",
          related: ["cajero", "retiro", "efectivo", "comisión"],
          example: {
            target: "Voy a sacar plata en el cajero.",
            translation: "I'm going to withdraw cash at the ATM."
          }
        },
        {
          term: "sacar copias",
          explanation:
            "To make photocopies. The verb treats the copies as something produced from the original.",
          literal: "to take out copies",
          useWhen:
            "At a papelería, office, school or service window that asks for duplicated documents.",
          avoidWhen:
            "Translating it as “take out copies” in English. English says “make copies.”",
          register: "neutral conversational",
          region: "General Colombian; copy shops are often called papelerías or misceláneas depending on what they sell.",
          related: ["fotocopias", "papelería", "impresión", "documento"],
          example: {
            target: "Aquí sacamos las copias en dos minutos.",
            translation: "We make the copies here in two minutes."
          }
        },
        {
          term: "sacar cita",
          explanation:
            "To book or get an appointment, especially through a website, phone line or service office.",
          literal: "to take out an appointment",
          useWhen:
            "Public offices, clinics, visa centers and service desks require an appointment before serving you.",
          avoidWhen:
            "Assuming it means physically removing an appointment. The point is obtaining a slot.",
          register: "neutral practical",
          region: "Very common in Colombia for errands and public services.",
          related: ["agendar", "turno", "ventanilla", "confirmación"],
          example: {
            target: "Ayer saqué la cita por internet.",
            translation: "Yesterday I booked the appointment online."
          }
        },
        {
          term: "sacar la cédula / el pasaporte",
          explanation:
            "To get an official document issued. The office produces the document, but the citizen “saca” it.",
          literal: "to take out the ID card / passport",
          useWhen:
            "Talking about getting an ID card, passport, license, certificate or other official document.",
          avoidWhen:
            "Translating it as taking the document out of a drawer. This is the issuance process.",
          register: "neutral practical",
          region: "General Colombian administrative speech.",
          related: ["documento", "trámite", "registro", "expedición"],
          example: {
            target: "Voy a sacar el pasaporte este mes.",
            translation: "I'm going to get my passport issued this month."
          }
        },
        {
          term: "sacar turno",
          explanation:
            "To take a number or get a place in a service line.",
          literal: "to take out a turn",
          useWhen:
            "Banks, clinics, public offices and service counters use numbered turns.",
          avoidWhen:
            "Confusing it with booking a future appointment. A turno is usually today's place in the line.",
          register: "neutral practical",
          region: "General Colombian service-counter language.",
          related: ["fila", "ventanilla", "número", "turnero"],
          example: {
            target: "Saca turno cuando llegues.",
            translation: "Take a number when you arrive."
          }
        },
        {
          term: "sacar buenas notas",
          explanation:
            "To get good grades or marks. The result is something the student earns or comes away with.",
          literal: "to take out good grades",
          useWhen:
            "Talking about exams, school, training courses or any graded evaluation.",
          avoidWhen:
            "Thinking it means physically taking the grades somewhere. It means earning or receiving them.",
          register: "neutral conversational",
          region: "General Spanish; common in Colombia.",
          related: ["nota", "resultado", "examen", "calificación"],
          example: {
            target: "Sacó buenas notas en el curso.",
            translation: "She got good grades in the course."
          }
        }
      ],
      note:
        "Sacar is a Colombian errand machine: sacar plata, sacar copias, sacar cita, sacar turno, sacar la cédula, sacar el pasaporte, sacar la basura, sacar buenas notas. The object tells you whether English wants withdraw, make, book, take, get issued, take out or score. And when you say “saqué,” the spelling changes to qu so the hard k sound survives before e.",
      culture: [
        {
          label: "Errands cluster around copy shops",
          body:
            "In many Colombian downtowns, a public office is surrounded by ATMs, copy shops, laminating services and people who know the required documents better than the official website does. “Sacar copias” is not a decorative phrase; it is often the step that decides whether your turn at the window succeeds or collapses."
        },
        {
          label: "The spoken bank verb is sacar",
          body:
            "Banks may print “retiro” on a screen, but people still say “voy a sacar plata.” The word is not sloppy. It is the everyday verb for getting cash out of the system. If you ask where you can “retirar dinero,” you will be understood; you will also sound more official than the errand requires."
        },
        {
          label: "Documents are obtained, not pulled",
          body:
            "“Sacar la cédula” and “sacar el pasaporte” sound strange if you picture pulling an object from a box. Colombian Spanish is naming the process of obtaining the document. That use matters because identity cards, appointments and service windows appear early in any real stay, long before a learner feels ready for bureaucracy."
        }
      ],
      pitfalls: [
        {
          mistake: "Translating every “sacar” as “take out”",
          whyItFails:
            "Some uses do translate that way, but cash is withdrawn, copies are made, appointments are booked and documents are issued. English changes with the object.",
          sayInstead: "I need to withdraw cash and make copies."
        },
        {
          mistake: "Writing “sacé” for “I took out”",
          whyItFails:
            "The preterite yo form changes c to qu before e: saqué. Without the q, the spelling no longer protects the hard k sound.",
          sayInstead: "Ayer saqué la cita."
        },
        {
          mistake: "Using only “retirar dinero” at an ATM",
          whyItFails:
            "It is correct but more formal. In everyday Colombian speech, people usually say “sacar plata.”",
          sayInstead: "Voy a sacar plata."
        }
      ],
      variations: [
        {
          form: "Necesito sacar plata.",
          register: "everyday conversational",
          region: "Colombia",
          whenToUse: "The ordinary way to say you need to withdraw cash."
        },
        {
          form: "Voy a sacar copias de la cédula.",
          register: "neutral practical",
          region: "General Colombian",
          whenToUse: "A copy-shop or paperwork errand."
        },
        {
          form: "Ayer saqué la cita por internet.",
          register: "neutral practical",
          region: "General Colombian",
          whenToUse: "Reporting that you booked an appointment, with the c-to-qu spelling."
        },
        {
          form: "Tengo que sacar el pasaporte.",
          register: "neutral practical",
          region: "General Spanish",
          whenToUse: "Talking about getting an official document issued."
        }
      ],
      prompt: "Emma says “ayer saqué la cita por internet.” What should you notice?",
      choices: [
        "The verb means she booked the appointment, and the spelling changes to qu before e.",
        "The verb means she canceled the appointment because the website stopped working.",
        "The verb means she physically removed a chair from the public office."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence is the everyday Colombian way to say you need cash from an ATM?",
          choices: [
            "Necesito retirar dinero bancario.",
            "Necesito sacar plata.",
            "Necesito extraer moneda física."
          ],
          answer: 1,
          tests: "“sacar plata” as the ordinary spoken phrase for withdrawing cash"
        },
        {
          prompt: "Which line means to get a passport issued?",
          choices: [
            "Sacar el pasaporte.",
            "Saltar el pasaporte.",
            "Cruzar el pasaporte."
          ],
          answer: 0,
          tests: "“sacar” for obtaining official documents"
        },
        {
          prompt: "Which spelling is correct for the preterite yo form?",
          choices: [
            "Ayer sacé la cita.",
            "Ayer saqué la cita.",
            "Ayer saque la cita."
          ],
          answer: 1,
          tests: "c-to-qu spelling in “saqué”"
        }
      ]
    },
    en: {
      title: "Sacar plata y papeles antes del trámite",
      situation:
        "Usted está en Leeds, entre un cash machine que cobra comisión, una copy shop llena y una oficina donde piden fotocopias del pasaporte. Necesita withdraw cash, make copies, book an appointment y entender por qué el inglés no permite que un solo verbo haga todo el trabajo de “sacar.”",
      setting: {
        who: "Julian trabaja en una papelería al lado de un banco y pasa la mañana convirtiendo trámites en instrucciones sencillas. Elena intenta terminar varios papeleos británicos antes de que cierre la oficina.",
        what: "Una conversación práctica sobre retirar efectivo, hacer copias, reservar una cita y traducir varios usos de “sacar.”",
        when: "Una mañana entre semana, con la fila del banco ya larga pero la oficina pública todavía abierta.",
        where: "Leeds, Inglaterra, en una cuadra del centro donde un banco, una papelería y una ventanilla de servicios se alimentan las filas.",
        why: "El español colombiano resuelve muchos trámites con “sacar,” pero el inglés obliga a escoger: withdraw, make, book, take, get issued o get."
      },
      address: {
        form: "mixed",
        who: "Julian y Elena usan nombres de pila y el mismo “you,” aunque estén en un entorno de servicio.",
        why: "El inglés no cambia de pronombre. La cortesía aparece en “could,” “please,” y en no convertir una pregunta rápida en una orden.",
        ifYouSwitch:
          "No hay cambio de pronombre disponible. Elena puede sonar más formal con “Could I” o más directa con “I need to,” pero “you” no cambia."
      },
      dialogue: [
        {
          speaker: "Elena",
          target: "Julian, I need to withdraw cash before I make copies of my passport.",
          translation: "Julián, necesito sacar plata antes de sacar copias del pasaporte.",
          pronunciation: "YU-li-an, ai nid tu wid-DRO cash bi-FOR ai meik KO-piz ov mai PAS-port",
          literal: "Julián, necesito retirar efectivo antes de hacer copias de mi pasaporte.",
          why: "El inglés reparte dos usos de “sacar”: withdraw cash y make copies. “Take out copies” no suena como una papelería; suena literal."
        },
        {
          speaker: "Julian",
          target: "Withdraw the cash first; then we can make the copies in two minutes.",
          translation: "Saque primero la plata; después podemos sacar las copias en dos minutos.",
          pronunciation: "wid-DRO da cash ferst; den ui kan meik da KO-piz in tu MI-nits",
          literal: "Retire el efectivo primero; después podemos hacer las copias en dos minutos.",
          why: "“Withdraw” es el verbo de sacar dinero de una cuenta. Para copias, el verbo normal es “make,” porque el resultado se produce."
        },
        {
          speaker: "Elena",
          target: "Yesterday I booked the appointment online, but do I also take a number?",
          translation: "Ayer saqué la cita por internet, pero ¿también saco turno?",
          pronunciation: "YES-ter-dei ai bukt di a-POINT-ment on-LAIN, bot du ai OL-so teik a NOM-ber",
          literal: "Ayer reservé la cita en línea, pero ¿también tomo un número?",
          why: "Aquí el inglés usa “book” para la cita y “take a number” para el turno. No necesita inventar un solo verbo que los cubra."
        },
        {
          speaker: "Julian",
          target: "If you already booked it, just take a number when you reach the desk.",
          translation: "Si ya sacó la cita, sólo saque turno cuando llegue a la ventanilla.",
          pronunciation: "if yu ol-RE-di bukt it, yost teik a NOM-ber wen yu rich da desk",
          literal: "Si usted ya la reservó, sólo tome un número cuando alcance el escritorio.",
          why: "“The desk” puede ser la ventanilla o el puesto que atiende. En inglés de trámites, “reach the desk” significa que por fin llegó su turno."
        },
        {
          speaker: "Elena",
          target: "And to get a passport issued, do they ask for the same copies?",
          translation: "Y para sacar el pasaporte, ¿piden las mismas copias?",
          pronunciation: "and tu get a PAS-port I-shud, du dei ask for da seim KO-piz",
          literal: "Y para conseguir un pasaporte emitido, ¿piden las mismas copias?",
          why: "Para documentos oficiales, “get issued” explica la idea de sacar el documento. En conversación más sencilla, “get a passport” también funciona."
        },
        {
          speaker: "Julian",
          target: "Yes, and if everything goes well, you get top marks in patience.",
          translation: "Sí, y si todo sale bien, saca nota máxima en paciencia.",
          pronunciation: "yes, and if EV-ri-zing gouz wel, yu get top marks in PEI-shens",
          literal: "Sí, y si todo va bien, usted obtiene marcas altas en paciencia.",
          why: "“Get marks” o “get grades” traduce sacar notas. El chiste funciona porque el trámite se vuelve casi un examen de paciencia."
        }
      ],
      vocabulary: [
        {
          term: "withdraw",
          explanation:
            "Retirar dinero de una cuenta o cajero. Es el verbo financiero que traduce “sacar plata.”",
          literal: "retirar",
          useWhen:
            "Habla de sacar efectivo de un banco, cajero o cuenta.",
          avoidWhen:
            "Para copias, citas, pasaportes o notas. El inglés cambia de verbo según el objeto.",
          register: "neutro formal",
          region: "Inglés universal; en conversación también se oye “take out cash.”",
          related: ["cash", "ATM", "take out", "bank account"],
          example: {
            target: "I need to withdraw cash.",
            translation: "Necesito sacar plata."
          }
        },
        {
          term: "cash",
          explanation:
            "Efectivo, plata física. Es lo que se retira del cajero.",
          literal: "efectivo",
          useWhen:
            "Una oficina no recibe tarjeta, una tienda exige billetes o usted necesita pagar algo pequeño.",
          avoidWhen:
            "Confundirlo con money en general. Cash es dinero físico, no saldo bancario abstracto.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["money", "notes", "coins", "ATM"],
          example: {
            target: "The office only takes cash.",
            translation: "La oficina sólo recibe efectivo."
          }
        },
        {
          term: "make copies",
          explanation:
            "Sacar copias o fotocopias. En inglés las copias se hacen, no se sacan literalmente.",
          literal: "hacer copias",
          useWhen:
            "En una papelería, oficina, universidad o trámite que exige duplicados.",
          avoidWhen:
            "Decir “take out copies” como calco de sacar copias. Suena como sacarlas de una caja.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["photocopy", "print", "copy shop", "document"],
          example: {
            target: "We can make the copies here.",
            translation: "Aquí podemos sacar las copias."
          }
        },
        {
          term: "book an appointment",
          explanation:
            "Sacar o reservar una cita. El verbo “book” consigue un horario en el sistema.",
          literal: "reservar una cita",
          useWhen:
            "Clínicas, oficinas, trámites, peluquerías o entrevistas exigen una cita previa.",
          avoidWhen:
            "Usarlo para el turno del día en una fila. Ahí normalmente “take a number.”",
          register: "neutro práctico",
          region: "Inglés universal; “make an appointment” también es común.",
          related: ["make an appointment", "slot", "booking", "schedule"],
          example: {
            target: "I booked the appointment online.",
            translation: "Saqué la cita por internet."
          }
        },
        {
          term: "get a passport issued",
          explanation:
            "Sacar el pasaporte como documento oficial emitido por una autoridad.",
          literal: "conseguir un pasaporte emitido",
          useWhen:
            "Quiere dejar claro que habla del trámite de expedición del documento.",
          avoidWhen:
            "Una conversación casual donde “get a passport” es suficiente y menos pesado.",
          register: "formal práctico",
          region: "Inglés universal.",
          related: ["get a passport", "apply for", "issue", "document"],
          example: {
            target: "I need to get a passport issued.",
            translation: "Necesito sacar el pasaporte."
          }
        },
        {
          term: "take a number",
          explanation:
            "Sacar turno en una fila con números.",
          literal: "tomar un número",
          useWhen:
            "Un banco, clínica, oficina o mostrador atiende por turnos numerados.",
          avoidWhen:
            "Confundirlo con reservar una cita futura. “Take a number” suele ser para esperar hoy.",
          register: "neutro práctico",
          region: "Inglés universal.",
          related: ["line", "ticket number", "desk", "wait"],
          example: {
            target: "Take a number when you arrive.",
            translation: "Saque turno cuando llegue."
          }
        },
        {
          term: "get top marks",
          explanation:
            "Sacar notas altas o una nota máxima, especialmente en inglés británico.",
          literal: "obtener marcas altas",
          useWhen:
            "Habla de resultados en cursos, exámenes, trabajos o una broma sobre desempeño.",
          avoidWhen:
            "Estados Unidos prefiere “grades” para notas escolares. “Marks” se entiende, pero suena más británico.",
          register: "neutro conversacional",
          region: "Inglés británico y común en otros lugares; “get good grades” es más internacional.",
          related: ["grades", "score", "results", "exam"],
          example: {
            target: "She got top marks in the course.",
            translation: "Sacó muy buenas notas en el curso."
          }
        }
      ],
      note:
        "El español colombiano hace mucho con “sacar,” pero el inglés cambia de herramienta. Usted withdraws cash, makes copies, books an appointment, takes a number, gets a passport issued and gets marks. La lógica no es difícil; lo difícil es soltar la idea de que un solo verbo inglés debe cubrir toda la familia española.",
      culture: [
        {
          label: "Los trámites también tienen ecosistema",
          body:
            "En muchas ciudades, una oficina pública atrae papelerías, cajeros, fotos, sobres y gente que sabe el formulario correcto. En inglés, cada paso trae su verbo: withdraw, make, book, take, get. Aprenderlos por objeto evita frases calcadas que se entienden a medias pero suenan poco naturales."
        },
        {
          label: "Cash machine no es sólo máquina",
          body:
            "En Reino Unido se oye mucho “cash machine,” mientras que “ATM” también se entiende. La palabra importante de la escena es cash: dinero físico. Si una oficina sólo recibe cash, no le sirve mostrar saldo en la aplicación. Necesita billetes o monedas."
        },
        {
          label: "Appointment y number no son lo mismo",
          body:
            "Una appointment le reserva un horario o derecho a ser atendido. A number le da un lugar en la espera de ese día. Muchos trámites mezclan ambos sistemas, y por eso la pregunta de Elena es real: haber reservado no siempre elimina la fila."
        }
      ],
      pitfalls: [
        {
          mistake: "“I need to take out copies.”",
          whyItFails:
            "Es un calco de “sacar copias.” En inglés, las copias se hacen: “make copies.”",
          sayInstead: "I need to make copies."
        },
        {
          mistake: "“I took out an appointment.”",
          whyItFails:
            "La cita no se saca literalmente en inglés. Se reserva o se programa.",
          sayInstead: "I booked an appointment."
        },
        {
          mistake: "“I extracted money from the ATM.”",
          whyItFails:
            "Se entiende, pero suena técnico y extraño para una conversación cotidiana.",
          sayInstead: "I withdrew cash from the ATM."
        }
      ],
      variations: [
        {
          form: "I need to withdraw cash.",
          register: "neutro práctico",
          region: "Inglés universal",
          whenToUse: "Sacar plata de una cuenta o cajero."
        },
        {
          form: "I need to make copies.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Sacar fotocopias para un trámite."
        },
        {
          form: "I booked the appointment online.",
          register: "neutro práctico",
          region: "Inglés universal",
          whenToUse: "Decir que ya sacó la cita por internet."
        },
        {
          form: "Take a number at the desk.",
          register: "neutro práctico",
          region: "Inglés universal",
          whenToUse: "Sacar turno en un sistema con números."
        }
      ],
      prompt: "Elena says “I booked the appointment online.” Which Spanish use of “sacar” does this match?",
      choices: [
        "sacar copias",
        "sacar cita",
        "sacar plata"
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase traduce mejor “necesito sacar plata”?",
          choices: [
            "I need to make cash.",
            "I need to remove cash.",
            "I need to withdraw cash."
          ],
          answer: 2,
          tests: "“withdraw cash” for sacar plata"
        },
        {
          prompt: "¿Cuál frase traduce “sacar copias” naturalmente?",
          choices: [
            "Make copies of the passport.",
            "Take out copies of the passport.",
            "Remove copies of the passport."
          ],
          answer: 0,
          tests: "“make copies,” not a literal calque"
        },
        {
          prompt: "¿Cuál frase corresponde a “sacar turno”?",
          choices: [
            "Book a future appointment.",
            "Take a number in line.",
            "Withdraw money from the line."
          ],
          answer: 1,
          tests: "“take a number” for today's service line"
        }
      ]
    }
  },
  {
    id: "saltar-the-line-in-buenaventura",
    level: "Extending · Out and across",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "saltar",
    review: "pending",
    es: {
      title: "Cutting the line before the boat",
      situation:
        "You are in Buenaventura, waiting for a boat, and someone tries to push ahead of a line that has already been standing under the sun for half an hour. The person in charge does not shout, but she sets the boundary: here nobody skips the line, nobody skips the registration step, and running a red light is not clever either.",
      setting: {
        who: "Marisol manages passengers at a dock with patience sharpened by long lines. Leo is traveling with a small group and notices a man edging toward the front as if nobody were watching.",
        what: "A line-management conversation that moves from literal jumping to the figurative and socially loaded “saltarse la fila.”",
        when: "Late morning, after the first boat filled up and the next one has not yet been called.",
        where: "Buenaventura, Valle del Cauca, at a passenger dock where heat, luggage and boat schedules make the line tense.",
        why: "Saltar is easy when bodies jump. The useful Spanish is figurative: skipping a class, step or line; running a light; and noticing when something is obvious."
      },
      address: {
        form: "usted",
        who: "Marisol uses usted with Leo and the passengers because she is managing a public line and needs authority without aggression.",
        why: "Usted keeps the correction firm and impersonal. The problem is the action, not a personal fight.",
        ifYouSwitch:
          "Tú would make the warning feel more personal. Vos would not fit this service setting, especially with strangers in a line."
      },
      dialogue: [
        {
          speaker: "Leo",
          target: "Señora Marisol, creo que ese señor se está saltando la fila.",
          translation: "Ms Marisol, I think that man is skipping the line.",
          pronunciation: "seh-NYOH-ra ma-ree-SOL, KREH-oh keh EH-seh seh-NYOR seh es-TA sal-TAN-doh la FEE-la",
          literal: "Ms Marisol, I-think that that man himself is jumping the line.",
          why: "“Saltarse la fila” is cutting in line, not an athletic leap. It is socially loaded because it steals other people's waiting time."
        },
        {
          speaker: "Marisol",
          target: "Gracias por avisar; aquí nadie se salta la fila, así tenga afán.",
          translation: "Thanks for letting me know; nobody skips the line here, even if they are in a hurry.",
          pronunciation: "GRA-syas por a-bee-SAR; a-KEE NA-dyeh seh SAL-ta la FEE-la, a-SEE TEN-ga a-FAN",
          literal: "Thanks for warning; here nobody himself jumps the line, even-if has hurry.",
          why: "“Así tenga afán” means even if they are in a hurry. The phrase raises the level without getting obscure, and the rule stays clear."
        },
        {
          speaker: "Leo",
          target: "Yo casi me salté el registro porque pensé que era sólo para equipaje.",
          translation: "I almost skipped the registration because I thought it was only for luggage.",
          pronunciation: "yo KA-see meh sal-TEH el reh-HEES-troh POR-keh pen-SEH keh EH-ra SOH-loh PA-ra eh-kee-PA-heh",
          literal: "I almost myself jumped the registration because I-thought that it-was only for luggage.",
          why: "“Saltarse un paso” means skip a step. The reflexive form marks bypassing something expected, whether deliberately or by mistake."
        },
        {
          speaker: "Marisol",
          target: "Menos mal preguntó; si se salta ese paso, no aparece en la lista.",
          translation: "Good thing you asked; if you skip that step, you don't appear on the list.",
          pronunciation: "MEH-nos mal preh-goon-TOH; see seh SAL-ta EH-seh PA-soh, no a-pa-REH-seh en la LEES-ta",
          literal: "Less bad you-asked; if yourself jumps that step, not appears on the list.",
          why: "The verb does not require bad intention. You can skip a step accidentally and still suffer the consequence."
        },
        {
          speaker: "Leo",
          target: "¿Y saltarse un semáforo es la misma idea?",
          translation: "And running a traffic light is the same idea?",
          pronunciation: "ee sal-TAR-seh oon seh-MA-foh-roh es la MEES-ma ee-DEH-a",
          literal: "And jumping oneself a traffic-light is the same idea?",
          why: "Yes. “Saltarse un semáforo” means run a light. It is skipping a rule that was supposed to stop you."
        },
        {
          speaker: "Marisol",
          target: "Exacto. Y cuando alguien hace trampa, eso salta a la vista.",
          translation: "Exactly. And when someone cheats, that is obvious.",
          pronunciation: "eg-SAK-toh. ee KWAN-doh AL-gyen AH-seh TRAM-pa, EH-soh SAL-ta a la BEES-ta",
          literal: "Exactly. And when someone makes cheating, that jumps to the sight.",
          why: "“Saltar a la vista” means to be obvious, to jump out visually or socially. Nobody is physically jumping; the fact stands out."
        }
      ],
      vocabulary: [
        {
          term: "saltar",
          explanation:
            "To jump, but also to skip over a class, step, rule or place in a line.",
          literal: "to jump",
          useWhen:
            "Bodies jump, but people also skip classes, steps, traffic lights and lines.",
          avoidWhen:
            "Assuming every use is physical. The figurative uses are the ones that matter most in errands and public life.",
          register: "neutral",
          region: "General Spanish; the social uses are common in Colombia.",
          related: ["saltarse", "brincar", "omitir", "pasarse"],
          example: {
            target: "El niño salta en el muelle.",
            translation: "The child jumps on the dock."
          }
        },
        {
          term: "saltarse la fila",
          explanation:
            "To skip the line or cut in line. It is a breach of the shared order, not a harmless shortcut.",
          literal: "to jump oneself the line",
          useWhen:
            "Someone cuts ahead of people who have been waiting.",
          avoidWhen:
            "Describing someone who was invited forward by staff. That is not cutting in line.",
          register: "neutral conversational",
          region: "General Colombian; socially sensitive anywhere people are waiting.",
          related: ["colarse", "meterse", "hacer fila", "turno"],
          example: {
            target: "Ese señor se está saltando la fila.",
            translation: "That man is skipping the line."
          }
        },
        {
          term: "saltarse un paso",
          explanation:
            "To skip a required step in a process, sometimes accidentally and sometimes on purpose.",
          literal: "to jump oneself a step",
          useWhen:
            "Instructions, registrations, forms, recipes, safety checks or procedures have a sequence.",
          avoidWhen:
            "A process truly has no required order. Then skipping a step is not the issue.",
          register: "neutral",
          region: "General Spanish; common in instructions and service situations.",
          related: ["omitir", "paso", "registro", "proceso"],
          example: {
            target: "No te saltes el registro.",
            translation: "Don't skip the registration."
          }
        },
        {
          term: "saltarse un semáforo",
          explanation:
            "To run a traffic light, especially a red light or a signal that required stopping.",
          literal: "to jump oneself a traffic light",
          useWhen:
            "Talking about unsafe driving, fines or someone ignoring a signal.",
          avoidWhen:
            "You mean crossing legally after the light changes. That is not “saltarse.”",
          register: "neutral conversational",
          region: "General Colombian and widely understood Spanish.",
          related: ["pasarse el semáforo", "multa", "rojo", "infracción"],
          example: {
            target: "Se saltó el semáforo en rojo.",
            translation: "He ran the red light."
          }
        },
        {
          term: "saltarse una clase",
          explanation:
            "To skip a class, usually when attendance was expected.",
          literal: "to jump oneself a class",
          useWhen:
            "A student misses a scheduled class by choice or irresponsibility.",
          avoidWhen:
            "A class is canceled or you are excused officially. Then you did not skip it.",
          register: "neutral conversational",
          region: "General Spanish.",
          related: ["faltar", "inasistencia", "clase", "excusa"],
          example: {
            target: "No te saltes la clase de inducción.",
            translation: "Don't skip the induction class."
          }
        },
        {
          term: "saltar a la vista",
          explanation:
            "To be obvious, stand out or be immediately noticeable.",
          literal: "to jump to the sight",
          useWhen:
            "An error, lie, problem, contrast or unfair move is impossible to miss.",
          avoidWhen:
            "You mean someone looked carefully and discovered something hidden. This phrase is for what stands out.",
          register: "neutral",
          region: "General Spanish; natural in Colombian speech and writing.",
          related: ["ser evidente", "notarse", "verse claro", "evidente"],
          example: {
            target: "La trampa salta a la vista.",
            translation: "The cheating is obvious."
          }
        },
        {
          term: "así tenga afán",
          explanation:
            "Even if they are in a hurry. It is a concessive phrase with subjunctive.",
          literal: "even so has hurry",
          useWhen:
            "A rule applies despite someone's excuse, pressure or hurry.",
          avoidWhen:
            "Flattening it to “aunque tiene afán” when the point is hypothetical or concessive.",
          register: "neutral conversational",
          region: "General Colombian; “afán” for hurry is especially useful.",
          related: ["aunque tenga", "sin importar", "afán", "regla"],
          example: {
            target: "Nadie se salta la fila, así tenga afán.",
            translation: "Nobody skips the line, even if they are in a hurry."
          }
        }
      ],
      note:
        "The physical jump is the easiest part of “saltar.” The Colombian daily-life value is in “saltarse”: skip the line, skip a step, skip a class, run a traffic light. It usually means bypassing an order everyone else is expected to respect. And “saltar a la vista” moves the verb again: a fact jumps out because it is obvious.",
      culture: [
        {
          label: "Cutting in line is not a tiny detail",
          body:
            "Lines in transport settings carry a fragile social contract. People may be patient, chatty and flexible, but someone cutting ahead can still trigger immediate correction because it steals time from everyone behind them. “Se está saltando la fila” names the offense without needing a speech about fairness."
        },
        {
          label: "A skipped step can erase you",
          body:
            "Registers, lists and numbered turns matter because they make crowded services workable. If you skip a step, the system may simply not know you exist. The problem is not moral failure every time; sometimes it is just that your name never reaches the list that staff are actually using."
        },
        {
          label: "Obvious things jump to the eye",
          body:
            "“Saltar a la vista” is vivid without being slang. It works for a lie, a mistake in a form, an unfair move in a line or a danger on the road. The phrase is useful because it lets you say something is plain to see without sounding like you are over-explaining."
        }
      ],
      pitfalls: [
        {
          mistake: "Using plain “saltar la fila” instead of “saltarse la fila”",
          whyItFails:
            "People will understand you, but the pronominal form is the normal way to say someone skipped or bypassed the line.",
          sayInstead: "Se está saltando la fila."
        },
        {
          mistake: "Treating “saltarse un semáforo” as physically jumping over a traffic light",
          whyItFails:
            "The phrase means running or ignoring the signal. It is about breaking the rule, not jumping over street furniture.",
          sayInstead: "Se saltó el semáforo en rojo."
        },
        {
          mistake: "Using “saltar a la vista” for a hidden detail",
          whyItFails:
            "The phrase means the detail is obvious. If it required careful investigation, it did not really jump out.",
          sayInstead: "Ese error salta a la vista."
        }
      ],
      variations: [
        {
          form: "Ese señor se está saltando la fila.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "Someone is cutting ahead in a line."
        },
        {
          form: "No te saltes ese paso.",
          register: "neutral practical",
          region: "General Spanish",
          whenToUse: "A procedure has a required step that should not be skipped."
        },
        {
          form: "Se saltó el semáforo en rojo.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "Someone ran a red light."
        },
        {
          form: "La trampa salta a la vista.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "The unfair move or lie is obvious."
        },
        {
          form: "Haga la fila como todos, por favor.",
          register: "courteous",
          region: "General Colombian",
          whenToUse: "Calling out someone who skipped the line, without starting a fight. Como todos does the work, because it appeals to fairness rather than to authority."
        }
      ],
      prompt: "Marisol says “nadie se salta la fila.” What does “saltarse” add here?",
      choices: [
        "It means every passenger must physically jump before boarding.",
        "It marks bypassing a shared order that others are following.",
        "It says the line has already been officially canceled."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence names cutting in line naturally?",
          choices: [
            "Ese señor brinca feliz.",
            "Ese señor cruza la fila.",
            "Ese señor se salta la fila."
          ],
          answer: 2,
          tests: "pronominal “saltarse la fila” for cutting in line"
        },
        {
          prompt: "Which line means someone ran a red light?",
          choices: [
            "Se saltó el semáforo en rojo.",
            "Saltó encima del semáforo rojo.",
            "Sacó el semáforo de la vía."
          ],
          answer: 0,
          tests: "“saltarse un semáforo” as running a light"
        },
        {
          prompt: "Which phrase means the cheating is obvious?",
          choices: [
            "La trampa queda guardada.",
            "La trampa salta a la vista.",
            "La trampa cruza la calle."
          ],
          answer: 1,
          tests: "“saltar a la vista” as be obvious"
        }
      ]
    },
    en: {
      title: "Saltarse la fila antes de la lancha",
      situation:
        "Usted está en Seattle, esperando un ferry, y alguien intenta meterse delante de una fila que ya lleva media hora bajo el sol. La encargada no grita, pero marca el límite: aquí nadie cuts in line, nadie skips registration y running a red light tampoco es una viveza.",
      setting: {
        who: "Maria organiza pasajeros en un muelle de ferry con la paciencia afilada por filas largas. Luis viaja con un grupo pequeño y nota que un hombre se acerca al frente como si nadie lo estuviera mirando.",
        what: "Una conversación sobre filas, registros y señales, centrada en “cut in line,” “skip a step” y “run a red light.”",
        when: "Final de la mañana, después de que se llenó el primer ferry y antes de que llamen el siguiente.",
        where: "Seattle, Estados Unidos, en un muelle de pasajeros donde horarios, maletas y cansancio vuelven sensible la fila.",
        why: "El español usa “saltar” para varias omisiones figuradas, pero el inglés reparte: cut in line, skip a step, skip class, run a light, be obvious."
      },
      address: {
        form: "mixed",
        who: "Maria y Luis usan el mismo “you,” aunque ella esté controlando una fila pública.",
        why: "El inglés mantiene la autoridad con tono e imperativos claros, no con un pronombre distinto. “Please don't cut in line” puede ser firme y cortés.",
        ifYouSwitch:
          "No hay cambio de pronombre. Para sonar más formal se añade “please” o “sir”; para sonar más urgente, se acorta la frase."
      },
      dialogue: [
        {
          speaker: "Luis",
          target: "Maria, I think that man is cutting in line.",
          translation: "María, creo que ese señor se está saltando la fila.",
          pronunciation: "ma-RI-a, ai zink dat man iz KO-ting in lain",
          literal: "María, creo que ese hombre está cortando en línea.",
          why: "“Cut in line” es la frase norteamericana para saltarse la fila. En inglés británico sería más común “jump the queue.”"
        },
        {
          speaker: "Maria",
          target: "Thanks for telling me; nobody cuts in line here, even if they're in a hurry.",
          translation: "Gracias por avisarme; aquí nadie se salta la fila, aunque tenga afán.",
          pronunciation: "zanks for TE-ling mi; NO-ba-di kots in lain jir, I-ven if deir in a JO-ri",
          literal: "Gracias por decirme; nadie corta en línea aquí, incluso si están de afán.",
          why: "La frase corrige la acción sin convertirla en pelea. “Even if they're in a hurry” conserva la idea de que la excusa no cambia la regla."
        },
        {
          speaker: "Luis",
          target: "I almost skipped registration because I thought it was only for luggage.",
          translation: "Casi me salté el registro porque pensé que era sólo para equipaje.",
          pronunciation: "ai OL-moust skipt re-yi-STREI-shon bi-KOZ ai zot it woz ON-li for LO-gij",
          literal: "Casi salté registro porque pensé que era sólo para equipaje.",
          why: "“Skip registration” traduce saltarse el registro. “Skip” funciona para pasos, clases y partes de un proceso."
        },
        {
          speaker: "Maria",
          target: "Good thing you asked; if you skip that step, you won't be on the list.",
          translation: "Menos mal preguntó; si se salta ese paso, no aparece en la lista.",
          pronunciation: "gud zing yu askt; if yu skip dat step, yu wont bi on da list",
          literal: "Buena cosa que preguntó; si usted salta ese paso, no estará en la lista.",
          why: "“Skip that step” no acusa necesariamente mala intención. Puede ser error, afán o desconocimiento; el resultado práctico es quedar fuera de la lista."
        },
        {
          speaker: "Luis",
          target: "And running a red light is the same idea?",
          translation: "¿Y saltarse un semáforo en rojo es la misma idea?",
          pronunciation: "and RO-ning a red lait iz da seim ai-DI-a",
          literal: "¿Y correr una luz roja es la misma idea?",
          why: "El inglés dice “run a red light,” no “jump a traffic light” en esta variedad. Otra vez, no es salto físico sino ignorar una señal."
        },
        {
          speaker: "Maria",
          target: "Exactly. And when someone cheats, it sticks out immediately.",
          translation: "Exacto. Y cuando alguien hace trampa, eso salta a la vista de inmediato.",
          pronunciation: "eg-ZAKT-li. and wen SOM-wan chits, it stiks aut i-MI-di-et-li",
          literal: "Exactamente. Y cuando alguien hace trampa, eso pega afuera de inmediato.",
          why: "“Stick out” o “stand out” cubren “saltar a la vista.” La idea es que el hecho se nota sin buscarlo."
        }
      ],
      vocabulary: [
        {
          term: "jump",
          explanation:
            "Saltar físicamente. No cubre todos los usos figurados de “saltar” en español.",
          literal: "saltar",
          useWhen:
            "Un cuerpo salta, una persona brinca o algo se mueve de golpe.",
          avoidWhen:
            "Para filas, semáforos y pasos de un proceso, donde el inglés suele escoger otro verbo.",
          register: "neutro",
          region: "Inglés universal; “jump the queue” sí existe en inglés británico.",
          related: ["leap", "hop", "skip", "jump the queue"],
          example: {
            target: "The child jumped on the dock.",
            translation: "El niño saltó en el muelle."
          }
        },
        {
          term: "cut in line",
          explanation:
            "Saltarse la fila en inglés norteamericano. Es socialmente cargado porque rompe el orden de espera.",
          literal: "cortar en línea",
          useWhen:
            "Alguien se mete delante de personas que ya estaban esperando.",
          avoidWhen:
            "El personal invitó a alguien a pasar. Eso no es cut in line.",
          register: "neutro conversacional",
          region: "Inglés norteamericano; en Reino Unido se oye “jump the queue.”",
          related: ["jump the queue", "line", "turn", "wait your turn"],
          example: {
            target: "That man is cutting in line.",
            translation: "Ese señor se está saltando la fila."
          }
        },
        {
          term: "skip a step",
          explanation:
            "Saltarse un paso de un proceso o instrucción.",
          literal: "saltar un paso",
          useWhen:
            "Registro, formularios, recetas, instrucciones o controles de seguridad tienen una secuencia.",
          avoidWhen:
            "No hay un orden requerido. Si no hay paso obligatorio, no hay step que saltar.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["skip registration", "miss a step", "process", "instructions"],
          example: {
            target: "Don't skip that step.",
            translation: "No se salte ese paso."
          }
        },
        {
          term: "run a red light",
          explanation:
            "Saltarse un semáforo en rojo.",
          literal: "correr una luz roja",
          useWhen:
            "Un conductor ignora la señal roja y sigue.",
          avoidWhen:
            "La luz ya cambió y cruzó legalmente. Ahí no ran a red light.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["traffic light", "red light", "ticket", "violation"],
          example: {
            target: "He ran a red light.",
            translation: "Se saltó un semáforo en rojo."
          }
        },
        {
          term: "skip class",
          explanation:
            "Saltarse una clase, normalmente cuando se esperaba asistencia.",
          literal: "saltar clase",
          useWhen:
            "Un estudiante falta por decisión propia o por irresponsabilidad.",
          avoidWhen:
            "La clase fue cancelada o había excusa oficial. Eso no es skip class.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["miss class", "attendance", "absence", "excuse"],
          example: {
            target: "Don't skip the safety class.",
            translation: "No se salte la clase de seguridad."
          }
        },
        {
          term: "stick out",
          explanation:
            "Saltar a la vista o notarse mucho.",
          literal: "pegar afuera",
          useWhen:
            "Un error, mentira, contraste o acto injusto se nota de inmediato.",
          avoidWhen:
            "Un detalle está escondido y requiere investigar. Entonces no sticks out.",
          register: "neutro conversacional",
          region: "Inglés universal; “stand out” es otra opción común.",
          related: ["stand out", "be obvious", "be clear", "notice"],
          example: {
            target: "The mistake sticks out.",
            translation: "El error salta a la vista."
          }
        },
        {
          term: "even if they're in a hurry",
          explanation:
            "Aunque tengan afán o estén de prisa.",
          literal: "incluso si están en prisa",
          useWhen:
            "Una regla se mantiene aunque alguien tenga una excusa razonable.",
          avoidWhen:
            "Quiere decir simplemente porque tienen afán. “Even if” marca concesión, no causa.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["even though", "although", "in a rush", "in a hurry"],
          example: {
            target: "Nobody cuts in line, even if they're in a hurry.",
            translation: "Nadie se salta la fila, aunque tenga afán."
          }
        }
      ],
      note:
        "Para traducir “saltar,” el inglés pregunta qué se está saltando. Un cuerpo jumps. Una persona cuts in line, skips a step, skips class o runs a red light. Si algo “salta a la vista,” it sticks out or stands out. La familia es lógica, pero no cabe en un solo verbo inglés.",
      culture: [
        {
          label: "La fila tiene vocabulario propio",
          body:
            "En Norteamérica, “cut in line” nombra una falta social muy reconocible. En Reino Unido, la frase típica es “jump the queue.” Ambas tienen carga porque la fila representa orden compartido. No se necesita un discurso moral; basta nombrar la acción y el grupo entiende por qué molesta."
        },
        {
          label: "Skip puede ser error o viveza",
          body:
            "“Skip a step” no siempre acusa mala fe. Alguien puede saltarse un registro por confusión. En cambio, “cut in line” casi siempre suena más intencional porque hay personas visibles esperando. El inglés permite graduar la culpa escogiendo el verbo."
        },
        {
          label: "Los semáforos no se saltan con jump",
          body:
            "Aunque el español diga saltarse un semáforo, el inglés cotidiano dice “run a red light.” La imagen cambia: no se salta por encima de la señal, se corre a través de ella. Aprender esa frase fija evita traducciones cómicas en una situación seria."
        }
      ],
      pitfalls: [
        {
          mistake: "“He jumped the line.”",
          whyItFails:
            "En inglés norteamericano se entiende, pero “cut in line” es la frase cotidiana. “Jump the queue” suena más británico.",
          sayInstead: "He cut in line."
        },
        {
          mistake: "“He jumped the traffic light.”",
          whyItFails:
            "Suena físico, como si hubiera saltado sobre el semáforo. La frase fija es “run a red light.”",
          sayInstead: "He ran a red light."
        },
        {
          mistake: "“The cheat jumps to the view.”",
          whyItFails:
            "Es un calco de “salta a la vista.” En inglés se dice que algo sticks out, stands out o is obvious.",
          sayInstead: "The cheating is obvious."
        }
      ],
      variations: [
        {
          form: "That man is cutting in line.",
          register: "neutro conversacional",
          region: "Inglés norteamericano",
          whenToUse: "Alguien se está saltando la fila."
        },
        {
          form: "Don't skip that step.",
          register: "neutro práctico",
          region: "Inglés universal",
          whenToUse: "Un proceso tiene un paso obligatorio."
        },
        {
          form: "He ran a red light.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Alguien se saltó un semáforo en rojo."
        },
        {
          form: "The mistake sticks out.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "El error salta a la vista."
        },
        {
          form: "Passengers must wait their turn, and the dock is too small to hold everyone at once.",
          register: "formal",
          region: "Inglés universal",
          whenToUse: "Para apelar a la regla y no a la persona. “Must wait their turn” es impersonal, y por eso desarma la discusión."
        }
      ],
      prompt: "Maria says “nobody cuts in line here.” What Spanish idea is this closest to?",
      choices: [
        "nadie salta físicamente aquí",
        "nadie se salta la fila",
        "nadie cruza la calle aquí"
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase nombra naturalmente a alguien que se mete en la fila?",
          choices: [
            "He cut in line.",
            "He crossed the line.",
            "He jumped happily."
          ],
          answer: 0,
          tests: "“cut in line” for saltarse la fila"
        },
        {
          prompt: "¿Cuál frase dice que alguien se saltó un semáforo en rojo?",
          choices: [
            "He jumped the red light.",
            "He skipped the red lamp.",
            "He ran a red light."
          ],
          answer: 2,
          tests: "“run a red light” as the fixed phrase"
        },
        {
          prompt: "¿Cuál frase traduce “el error salta a la vista”?",
          choices: [
            "The error hides away.",
            "The mistake sticks out.",
            "The mistake runs red."
          ],
          answer: 1,
          tests: "“stick out” or “stand out” for saltar a la vista"
        }
      ]
    }
  },
  {
    id: "cruzar-the-plaza-in-arauca",
    level: "Extending · Out and across",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "work-and-employment",
    register: "formal",
    pathways: ["foundation", "year-12"],
    verb: "cruzar",
    review: "pending",
    es: {
      title: "Crossing the avenue and running into everyone",
      situation:
        "You are in Arauca, looking for an interview at a community radio station, and a journalist gives you directions that include crossing the avenue, crossing your fingers that the bridge is not closed, and laughing when she runs into a colleague she had not seen since another assignment.",
      setting: {
        who: "Paula is a local journalist who gives directions while answering messages from her editor. Jonah has an interview at the station and needs to get across a busy avenue without missing the idioms along the way.",
        what: "A directions conversation that covers crossing the street, hoping with crossed fingers and running into someone by chance.",
        when: "Mid-morning, after the heat has risen and motorcycles are already thick near the plaza.",
        where: "Arauca, Arauca, near the main plaza and an avenue that visitors should not cross casually.",
        why: "Cruzar is simple until it becomes “crucé,” “cruce con cuidado,” “cruzar los dedos” and “cruzarse con alguien.” These are daily uses, not decorative idioms."
      },
      address: {
        form: "usted",
        who: "Paula uses usted because she is helping a visitor she has just met, and Jonah mirrors it while receiving directions.",
        why: "Directions to a stranger are a natural place for usted: helpful, respectful and clear without turning cold.",
        ifYouSwitch:
          "Tú could work after a longer conversation, but it is not necessary. Vos would sound out of place unless both people already shared that register."
      },
      dialogue: [
        {
          speaker: "Jonah",
          target: "Paula, ¿para llegar a la emisora cruzo esta avenida?",
          translation: "Paula, to get to the radio station, do I cross this avenue?",
          pronunciation: "PAU-la, PA-ra yeh-GAR a la eh-mee-SOH-ra KROO-soh ES-ta a-beh-NEE-da",
          literal: "Paula, for to-arrive to the station I-cross this avenue?",
          why: "“Cruzo” is the present yo form. It is a practical directions verb, and the object can be a street, bridge, river, border or plaza."
        },
        {
          speaker: "Paula",
          target: "Sí, pero cruce con cuidado; las motos aparecen aunque el semáforo esté en rojo.",
          translation: "Yes, but cross carefully; motorcycles appear even when the light is red.",
          pronunciation: "see, PEH-roh KROO-seh kon kwee-DA-doh; las MOH-tos a-pa-REH-sen OW-keh el seh-MA-foh-roh es-TEH en ROH-hoh",
          literal: "Yes, but cross with care; the motorcycles appear although the traffic-light is in red.",
          why: "“Cruce” is the usted command, and “aunque esté” brings in the subjunctive because Paula is describing a possible condition, not reporting one light right now."
        },
        {
          speaker: "Jonah",
          target: "Ayer crucé sin mirar bien y casi me gana una moto.",
          translation: "Yesterday I crossed without looking properly and a motorcycle almost got me.",
          pronunciation: "a-YER kroo-SEH seen mee-RAR byen ee KA-see meh GA-na OO-na MOH-toh",
          literal: "Yesterday I-crossed without looking well and almost me wins a motorcycle.",
          why: "“Crucé” is the other c-to-qu spelling in sound terms: written c before e keeps the soft sound here, but the verb's z becomes c. The useful form is simply worth memorizing."
        },
        {
          speaker: "Paula",
          target: "Entonces hoy cruce por la esquina y cruce los dedos por el puente.",
          translation: "Then today cross at the corner and cross your fingers about the bridge.",
          pronunciation: "en-TON-ses oy KROO-seh por la es-KEE-na ee KROO-seh los DEH-dos por el PWEN-teh",
          literal: "Then today cross by the corner and cross the fingers for the bridge.",
          why: "“Cruzar los dedos” is the same fixed idiom as English cross your fingers: hope things work out. The bridge may or may not be open."
        },
        {
          speaker: "Jonah",
          target: "¿Usted siempre se cruza con periodistas cuando da indicaciones?",
          translation: "Do you always run into journalists when you give directions?",
          pronunciation: "oos-TED SYEM-preh seh KROO-sa kon peh-ree-oh-DEES-tas KWAN-doh da een-dee-ka-SYOH-nes",
          literal: "You always yourself cross with journalists when gives directions?",
          why: "“Cruzarse con alguien” means to run into someone by chance. It is not a planned meeting; your paths cross."
        },
        {
          speaker: "Paula",
          target: "En Arauca uno se cruza con todo el mundo; vaya y no se me pierda.",
          translation: "In Arauca you run into everyone; go on and don't get lost on me.",
          pronunciation: "en a-RAU-ka OO-noh seh KROO-sa kon TO-doh el MOON-doh; BA-ya ee no seh meh PYER-da",
          literal: "In Arauca one crosses oneself with all the world; go and not yourself to-me get-lost.",
          why: "The pronominal form turns crossing into a chance encounter. “No se me pierda” is warm Colombian phrasing: don't go getting lost on me."
        }
      ],
      vocabulary: [
        {
          term: "cruzar",
          explanation:
            "To cross or go across a street, bridge, river, border, plaza or line.",
          literal: "to cross",
          useWhen:
            "Giving directions, moving across streets, describing routes, or talking about borders and bridges.",
          avoidWhen:
            "Using it for entering a building. Cross is across; enter is into.",
          register: "neutral",
          region: "General Spanish; everyday in Colombian directions.",
          related: ["atravesar", "pasar", "esquina", "puente"],
          example: {
            target: "Cruzo esta avenida para llegar.",
            translation: "I cross this avenue to get there."
          }
        },
        {
          term: "cruce con cuidado",
          explanation:
            "Cross carefully, in the usted command form. It is practical street-safety language.",
          literal: "cross with care",
          useWhen:
            "Giving directions to a stranger, older person, client or anyone you are addressing with usted.",
          avoidWhen:
            "Using tú grammar with usted. “Cruza con cuidado” is tú; “cruce con cuidado” is usted.",
          register: "neutral polite",
          region: "General Spanish; common in public safety and directions.",
          related: ["mire a ambos lados", "semáforo", "paso peatonal", "esquina"],
          example: {
            target: "Cruce con cuidado por la esquina.",
            translation: "Cross carefully at the corner."
          }
        },
        {
          term: "crucé",
          explanation:
            "I crossed, the first-person preterite. It is a form learners should recognize quickly in stories.",
          literal: "I crossed",
          useWhen:
            "Reporting a completed crossing: a street, bridge, border or difficult stretch.",
          avoidWhen:
            "Writing “cruzé.” Spanish changes z to c before e in this form.",
          register: "neutral",
          region: "General Spanish; standard spelling.",
          related: ["cruzo", "cruzó", "cruzamos", "cruzar"],
          example: {
            target: "Ayer crucé la avenida.",
            translation: "Yesterday I crossed the avenue."
          }
        },
        {
          term: "cruzar los dedos",
          explanation:
            "To cross your fingers: hope that something uncertain goes well.",
          literal: "to cross the fingers",
          useWhen:
            "Waiting for a result, hoping a bridge is open, or wishing someone luck.",
          avoidWhen:
            "Treating it as a literal instruction in every context. It is usually an idiom of hope.",
          register: "neutral conversational",
          region: "General Spanish; same image as English.",
          related: ["ojalá", "esperar que", "tener suerte", "desear"],
          example: {
            target: "Cruce los dedos por el puente.",
            translation: "Cross your fingers about the bridge."
          }
        },
        {
          term: "cruzarse con alguien",
          explanation:
            "To run into someone by chance, because your paths cross.",
          literal: "to cross oneself with someone",
          useWhen:
            "You unexpectedly meet a friend, colleague, neighbor or old acquaintance in the street.",
          avoidWhen:
            "The meeting was planned. Then use a verb for meeting by arrangement.",
          register: "neutral conversational",
          region: "General Spanish; very natural in Colombian street talk.",
          related: ["encontrarse con", "toparse con", "verse con", "coincidir"],
          example: {
            target: "Me crucé con Paula en la plaza.",
            translation: "I ran into Paula in the plaza."
          }
        },
        {
          term: "por la esquina",
          explanation:
            "At or by the corner, often the safer place to cross a street.",
          literal: "by the corner",
          useWhen:
            "Giving directions or telling someone where to cross, turn or wait.",
          avoidWhen:
            "Assuming every corner is safe. The phrase locates the action; it does not guarantee safety.",
          register: "neutral",
          region: "General Colombian directions.",
          related: ["esquina", "cuadra", "paso peatonal", "semáforo"],
          example: {
            target: "Cruce por la esquina.",
            translation: "Cross at the corner."
          }
        },
        {
          term: "no se me pierda",
          explanation:
            "Do not go getting lost on me. A warm, slightly protective way to close directions.",
          literal: "do not get lost to me",
          useWhen:
            "You have just given directions and want the other person to arrive safely.",
          avoidWhen:
            "A strictly formal instruction. It has a personal warmth that may not fit every setting.",
          register: "friendly conversational",
          region: "Very natural Colombian phrasing, broadly understandable.",
          related: ["me avisa", "con cuidado", "vaya por la sombra", "llegue bien"],
          example: {
            target: "Vaya con cuidado y no se me pierda.",
            translation: "Go carefully and don't get lost on me."
          }
        }
      ],
      note:
        "Cruzar gives you a practical street verb and two idioms worth keeping. “Cruce con cuidado” can keep you alive at an avenue. “Cruzar los dedos” lets you hope without overexplaining. “Cruzarse con alguien” turns crossing into chance encounter, the Spanish equivalent of running into someone because your paths happened to meet.",
      culture: [
        {
          label: "Directions include safety judgment",
          body:
            "A Colombian direction like “cruce por la esquina” is not only geometry. It can carry local knowledge about traffic, motorcycles, shade, construction and where pedestrians are actually expected. Visitors sometimes hear a simple route and miss the safety advice folded into it."
        },
        {
          label: "Chance encounters are normal city data",
          body:
            "“Me crucé con…” is useful because Colombian errands often produce accidental meetings: near the plaza, outside a pharmacy, beside a bus stop, at the same service window. The phrase does not dramatize the encounter. It just says your paths crossed and you noticed."
        },
        {
          label: "Crossing fingers travels well",
          body:
            "Unlike many idioms, “cruzar los dedos” maps neatly to English. That does not make it childish. Adults use it for pending results, uncertain roads, interviews and systems that may or may not cooperate. It is a compact way to admit you do not control the outcome."
        }
      ],
      pitfalls: [
        {
          mistake: "Writing “cruzé” for “I crossed”",
          whyItFails:
            "Spanish changes z to c before e: crucé. The sound stays soft and the spelling follows the rule.",
          sayInstead: "Ayer crucé la avenida."
        },
        {
          mistake: "Using “cruzarse con alguien” for a planned appointment",
          whyItFails:
            "The phrase means a chance encounter. If the meeting was arranged, “cruzarse” makes it sound accidental.",
          sayInstead: "Me reuní con Paula a las diez."
        },
        {
          mistake: "Saying “cruza con cuidado” to someone you are treating as usted",
          whyItFails:
            "“Cruza” is tú. With usted, the command is “cruce.” In directions to strangers, usted is often the safer choice.",
          sayInstead: "Cruce con cuidado."
        }
      ],
      variations: [
        {
          form: "Cruce con cuidado por la esquina.",
          register: "neutral polite",
          region: "General Colombian",
          whenToUse: "Giving safe directions to someone you address as usted."
        },
        {
          form: "Ayer crucé la avenida sin mirar bien.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "Reporting a completed crossing, with the z-to-c spelling."
        },
        {
          form: "Cruce los dedos para que el puente esté abierto.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "Hoping that an uncertain condition works out."
        },
        {
          form: "Me crucé con una colega en la plaza.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "You ran into someone by chance."
        }
      ],
      prompt: "Paula says “me crucé con una colega.” What does the pronominal phrase mean?",
      choices: [
        "She crossed a street carefully with a colleague.",
        "She ran into a colleague by chance.",
        "She crossed her fingers for a colleague."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which command matches usted in street directions?",
          choices: [
            "Cruza con cuidado.",
            "Cruce con cuidado.",
            "Cruzo con cuidado."
          ],
          answer: 1,
          tests: "usted command “cruce”"
        },
        {
          prompt: "Which spelling is correct for “I crossed”?",
          choices: [
            "Ayer crucé la avenida.",
            "Ayer cruzé la avenida.",
            "Ayer cruze la avenida."
          ],
          answer: 0,
          tests: "z-to-c spelling in “crucé”"
        },
        {
          prompt: "Which line means to hope things go well?",
          choices: [
            "Cruce la avenida.",
            "Cruce el puente.",
            "Cruce los dedos."
          ],
          answer: 2,
          tests: "“cruzar los dedos” as cross your fingers"
        }
      ]
    },
    en: {
      title: "Cruzar la avenida y cruzarse con medio mundo",
      situation:
        "Usted está en Galway, buscando una entrevista en una emisora comunitaria, y una periodista le da indicaciones que incluyen cross the avenue, cross your fingers para que el puente no esté cerrado y reírse cuando runs into a colleague que no veía desde otra cobertura.",
      setting: {
        who: "Paula es periodista local y da indicaciones mientras contesta mensajes de su editora. Jonás tiene una entrevista en la emisora y necesita cruzar una avenida sin perder los modismos del camino.",
        what: "Una conversación de direcciones que cubre cruzar la calle, cruzar los dedos y encontrarse con alguien por casualidad.",
        when: "Media mañana, con tráfico alrededor de la plaza y poco tiempo antes de la entrevista.",
        where: "Galway, Irlanda, cerca de una plaza y de una avenida que un visitante no debería cruzar sin mirar.",
        why: "El inglés mantiene “cross” para la calle y los dedos, pero cambia a “run into” cuando se cruza con una persona por casualidad."
      },
      address: {
        form: "mixed",
        who: "Paula y Jonás usan nombres de pila y el mismo “you,” aunque apenas se hayan conocido.",
        why: "El inglés no cambia de pronombre para direcciones a un desconocido. La cortesía se marca con tono, “please,” y claridad.",
        ifYouSwitch:
          "No hay pronombre alternativo. Jonás puede sonar más formal con “Could you tell me,” pero la forma “you” se queda igual."
      },
      dialogue: [
        {
          speaker: "Jonás",
          target: "Paula, to get to the station, do I cross this avenue?",
          translation: "Paula, para llegar a la emisora, ¿cruzo esta avenida?",
          pronunciation: "PAU-la, tu get tu da STEI-shon, du ai kros dis A-ve-nu",
          literal: "Paula, para llegar a la estación, ¿cruzo esta avenida?",
          why: "“Cross” funciona de manera directa para calles, avenidas, puentes, ríos y fronteras. Aquí sí coincide con “cruzar.”"
        },
        {
          speaker: "Paula",
          target: "Yes, but cross carefully; bikes come through even when the light is red.",
          translation: "Sí, pero cruce con cuidado; las bicicletas pasan aunque el semáforo esté en rojo.",
          pronunciation: "yes, bot kros KER-ful-li; baiks kom thru I-ven wen da lait iz red",
          literal: "Sí, pero cruce cuidadosamente; bicicletas vienen a través incluso cuando la luz está roja.",
          why: "“Cross carefully” es la advertencia natural. El inglés no necesita un subjuntivo visible después de “even when,” pero la idea de condición se mantiene."
        },
        {
          speaker: "Jonás",
          target: "Yesterday I crossed without looking properly and a bike almost hit me.",
          translation: "Ayer crucé sin mirar bien y casi me pega una bicicleta.",
          pronunciation: "YES-ter-dei ai krost wi-DAUT LU-king PRO-per-li and a baik OL-moust jit mi",
          literal: "Ayer crucé sin mirar apropiadamente y una bicicleta casi me golpeó.",
          why: "El pasado es regular en sonido: crossed. La dificultad para un hispanohablante no es el verbo, sino pronunciar el grupo final sin añadir una vocal."
        },
        {
          speaker: "Paula",
          target: "Then cross at the corner and cross your fingers about the bridge.",
          translation: "Entonces cruce por la esquina y cruce los dedos por el puente.",
          pronunciation: "den kros at da KOR-ner and kros yor FIN-gerz a-BAUT da brij",
          literal: "Entonces cruce en la esquina y cruce sus dedos acerca del puente.",
          why: "“Cross your fingers” comparte imagen con el español. “About the bridge” suena natural cuando la esperanza tiene un tema, no una persona."
        },
        {
          speaker: "Jonás",
          target: "Do you always run into journalists when you give directions?",
          translation: "¿Usted siempre se cruza con periodistas cuando da indicaciones?",
          pronunciation: "du yu OL-weiz ron IN-tu YER-na-lists wen yu giv dai-REK-shons",
          literal: "¿Usted siempre corre dentro de periodistas cuando da direcciones?",
          why: "“Run into someone” es cruzarse con alguien por casualidad. No significa chocar físicamente, salvo que el contexto lo haga literal."
        },
        {
          speaker: "Paula",
          target: "In Galway you run into everyone; go on, and don't get lost on me.",
          translation: "En Galway uno se cruza con todo el mundo; vaya y no se me pierda.",
          pronunciation: "in GOL-wei yu ron IN-tu EV-ri-wan; gou on, and dont get lost on mi",
          literal: "En Galway usted corre dentro de todos; siga, y no se pierda en mí.",
          why: "“Don't get lost on me” conserva el tono cálido de “no se me pierda.” No es posesión; es una preocupación amistosa por el resultado."
        }
      ],
      vocabulary: [
        {
          term: "cross",
          explanation:
            "Cruzar una calle, avenida, puente, río, frontera o línea.",
          literal: "cruzar",
          useWhen:
            "Da indicaciones, habla de moverse al otro lado o describe una ruta.",
          avoidWhen:
            "Quiere decir cruzarse con una persona por casualidad. Para eso el inglés dice “run into.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["go across", "crossing", "bridge", "corner"],
          example: {
            target: "Do I cross this avenue?",
            translation: "¿Cruzo esta avenida?"
          }
        },
        {
          term: "cross carefully",
          explanation:
            "Cruzar con cuidado. Es una advertencia breve y natural de seguridad.",
          literal: "cruzar cuidadosamente",
          useWhen:
            "Da instrucciones para cruzar una calle, avenida, puente o zona de tráfico.",
          avoidWhen:
            "Convertirlo en una frase larga si la persona necesita actuar ya. Lo corto funciona.",
          register: "neutro práctico",
          region: "Inglés universal.",
          related: ["look both ways", "traffic light", "crosswalk", "corner"],
          example: {
            target: "Cross carefully at the corner.",
            translation: "Cruce con cuidado por la esquina."
          }
        },
        {
          term: "crossed",
          explanation:
            "Crucé, cruzó o cruzaron, según el sujeto. Es el pasado regular de “cross.”",
          literal: "cruzado / crucé",
          useWhen:
            "Cuenta que ya cruzó una calle, frontera, puente o tramo difícil.",
          avoidWhen:
            "Añadir una vocal al final al pronunciar. No es “cross-ed” con dos sílabas en este uso común.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["cross", "went across", "crossing", "got across"],
          example: {
            target: "Yesterday I crossed the avenue.",
            translation: "Ayer crucé la avenida."
          }
        },
        {
          term: "cross your fingers",
          explanation:
            "Cruzar los dedos: esperar que algo incierto salga bien.",
          literal: "cruzar sus dedos",
          useWhen:
            "Espera un resultado, una respuesta, un puente abierto o una entrevista sin problemas.",
          avoidWhen:
            "Usarlo como instrucción física en todos los casos. Normalmente es un modismo de esperanza.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["hope", "good luck", "fingers crossed", "wish"],
          example: {
            target: "Cross your fingers about the bridge.",
            translation: "Cruce los dedos por el puente."
          }
        },
        {
          term: "run into someone",
          explanation:
            "Cruzarse con alguien por casualidad.",
          literal: "correr dentro de alguien",
          useWhen:
            "Se encuentra inesperadamente con una amiga, colega, vecina o conocida en la calle.",
          avoidWhen:
            "La reunión fue planeada. Entonces “meet” o “meet up with” es más claro.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["bump into", "come across", "meet by chance", "see"],
          example: {
            target: "I ran into Paula in the plaza.",
            translation: "Me crucé con Paula en la plaza."
          }
        },
        {
          term: "at the corner",
          explanation:
            "Por la esquina o en la esquina, muchas veces el lugar más claro para cruzar.",
          literal: "en la esquina",
          useWhen:
            "Da indicaciones sobre dónde cruzar, girar, esperar o encontrarse.",
          avoidWhen:
            "Pensar que toda esquina es segura. La frase ubica; no garantiza.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["corner", "crosswalk", "traffic light", "block"],
          example: {
            target: "Cross at the corner.",
            translation: "Cruce por la esquina."
          }
        },
        {
          term: "don't get lost on me",
          explanation:
            "No se me pierda: una forma cálida de cerrar unas indicaciones.",
          literal: "no se pierda en mí",
          useWhen:
            "Acaba de dar una ruta y quiere que la otra persona llegue bien.",
          avoidWhen:
            "Un registro muy formal o una instrucción escrita. Suena personal y conversacional.",
          register: "amistoso conversacional",
          region: "Inglés universal, con tono coloquial.",
          related: ["get there safely", "let me know", "take care", "go on"],
          example: {
            target: "Go on, and don't get lost on me.",
            translation: "Vaya y no se me pierda."
          }
        }
      ],
      note:
        "El inglés coincide con el español en “cross the street” y “cross your fingers,” pero se aparta en “run into someone.” Si traduce “me crucé con Paula” como “I crossed with Paula,” la persona puede imaginar que cruzaron una calle juntas. Para un encuentro casual, use “run into” o “bump into.”",
      culture: [
        {
          label: "Las indicaciones también cuidan",
          body:
            "Una frase como “cross carefully” puede sonar obvia, pero en calles con bicicletas, buses o motos es parte real de la ayuda. Las buenas indicaciones no sólo dicen por dónde ir; también dicen dónde conviene cruzar y qué riesgo local debe tener en cuenta el visitante."
        },
        {
          label: "Run into no siempre es choque",
          body:
            "“Run into someone” puede ser literal si hay un golpe, pero en la vida diaria suele ser encontrarse por casualidad. El contexto decide. Si dice “I ran into my editor,” la primera lectura normal es que se la encontró sin planearlo, no que la atropelló."
        },
        {
          label: "Los dedos cruzados son adultos",
          body:
            "“Cross your fingers” no es sólo frase de niños. Se usa para entrevistas, resultados médicos, trámites, viajes y cualquier situación donde uno hizo lo posible pero el desenlace no depende del todo de uno. Es breve, humano y nada técnico."
        }
      ],
      pitfalls: [
        {
          mistake: "“I crossed with Paula.”",
          whyItFails:
            "Suena como si cruzaran una calle juntas. Para encontrarse por casualidad, el inglés usa “run into” o “bump into.”",
          sayInstead: "I ran into Paula."
        },
        {
          mistake: "“I crossed my fingers for cross the bridge.”",
          whyItFails:
            "Después de “for” no va un infinitivo así. Diga “about the bridge” o cambie la estructura con “that.”",
          sayInstead: "I crossed my fingers about the bridge."
        },
        {
          mistake: "“I cross careful.”",
          whyItFails:
            "Necesita el adverbio “carefully.” “Careful” describe una persona o cosa; “carefully” describe la acción.",
          sayInstead: "I cross carefully."
        }
      ],
      variations: [
        {
          form: "Cross carefully at the corner.",
          register: "neutro práctico",
          region: "Inglés universal",
          whenToUse: "Dar una indicación segura para cruzar la calle."
        },
        {
          form: "Yesterday I crossed the avenue.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Contar que ya cruzó una avenida o calle."
        },
        {
          form: "Cross your fingers for me.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Pedir que alguien espere que algo salga bien."
        },
        {
          form: "I ran into a colleague downtown.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Se encontró con alguien por casualidad."
        }
      ],
      prompt: "Paula says “I ran into a colleague.” What Spanish idea does that express?",
      choices: [
        "Me crucé con una colega.",
        "Crucé la calle con una colega.",
        "Crucé los dedos por una colega."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase da una instrucción natural de seguridad?",
          choices: [
            "Cross careful at the corner.",
            "Cross carefully at the corner.",
            "Crossing careful in corner."
          ],
          answer: 1,
          tests: "adverb “carefully” for how to cross"
        },
        {
          prompt: "¿Cuál frase significa “cruzar los dedos”?",
          choices: [
            "Cross your fingers.",
            "Run into your fingers.",
            "Cross with your fingers."
          ],
          answer: 0,
          tests: "fixed idiom “cross your fingers”"
        },
        {
          prompt: "¿Cuál frase expresa un encuentro casual?",
          choices: [
            "I crossed with Paula.",
            "I crossed Paula's street.",
            "I ran into Paula."
          ],
          answer: 2,
          tests: "“run into someone” as cruzarse con alguien"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/67-extending-out-and-across.js");
