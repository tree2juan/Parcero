/*
 * Lesson block: developing / getting around the country.
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
    id: "viajar-from-armenia-to-santa-marta",
    level: "Developing · Getting around the country",
    skills: ["speaking", "listening", "context"],
    domain: "everyday life",
    register: "neutral practical",
    pathways: ["foundation", "year-12"],
    verb: "viajar",
    review: "pending",
    es: {
      title: "Viajar de Armenia a Santa Marta sin perder el hilo",
      situation:
        "Estás en la terminal de Armenia, con una mochila, un tinto a medio tomar y la idea ambiciosa de llegar a Santa Marta sin pagar un vuelo. Necesitas comprar el tiquete, escoger un puesto que no te destruya la espalda y entender si el bus sale de verdad a la hora que promete la pantalla.",
      setting: {
        who: "Mariana works the counter for an intercity bus company and has already answered the same five questions all morning. Sam is travelling north after a week in the Eje Cafetero and needs practical answers, not a tour brochure.",
        what: "A ticket-counter exchange about buying a long-distance bus ticket, choosing a seat and estimating the real travel time.",
        when: "Late morning on a Friday, with the lunch crowd beginning to move through the terminal.",
        where: "Armenia's terminal de transporte, on the edge of the Eje Cafetero, with buses leaving toward Ibagué, Bogotá, Cali and the Caribbean coast.",
        why: "Long Colombian routes are planned around departures, seats and delays, not just destinations. If Sam can ask the right questions here, the rest of the trip becomes manageable."
      },
      address: {
        form: "tú",
        who: "Mariana starts with tú because Sam is young, alone and asking in a relaxed tone. Sam answers with tú as well once she hears it.",
        why: "Tú is safe in a neutral service exchange when the staff member sets that tone first. It keeps the line moving without sounding stiff or falsely intimate.",
        ifYouSwitch:
          "Usted would also work and might even be the default with an older clerk. Vos would sound regional and too familiar unless Mariana had already used it with you."
      },
      dialogue: [
        {
          speaker: "Sam",
          target: "Buenos días. Quiero viajar a Santa Marta esta noche.",
          translation: "Good morning. I want to travel to Santa Marta tonight.",
          pronunciation: "BWEH-nos DEE-as. KYEH-roh bya-HAR a SAN-ta MAR-ta ES-ta NO-cheh",
          literal: "Good days. I-want to-travel to Santa Marta this night.",
          why: "Use “viajar a” when the destination is the point. “Ir a Santa Marta” is correct, but “viajar” tells the clerk you mean the trip as a whole: ticket, route, luggage and time on the road."
        },
        {
          speaker: "Mariana",
          target: "Hay bus directo, pero viaja toda la noche y llega al otro día.",
          translation: "There is a direct bus, but it travels all night and arrives the next day.",
          pronunciation: "ai boos dee-REK-toh, PEH-roh BYA-ha TO-da la NO-cheh ee YEH-ga al OH-tro DEE-a",
          literal: "There-is bus direct, but it-travels all the night and arrives to-the other day.",
          why: "Here “viaja” describes the bus as the moving thing. Colombian clerks say this constantly: the bus travels, the route goes, the service leaves. You do not have to make the passenger the subject every time."
        },
        {
          speaker: "Sam",
          target: "¿A qué hora sale, y cuánto se demora más o menos?",
          translation: "What time does it leave, and roughly how long does it take?",
          pronunciation: "a keh OH-ra SA-leh, ee KWAN-toh seh deh-MOH-ra mas oh MEH-nos",
          literal: "At what hour does-it-leave, and how-much itself delays more or less?",
          why: "“¿Cuánto se demora?” is the Colombian traveller's question. “¿Cuánto tiempo toma?” is understandable, but it sounds translated and less local at a bus window."
        },
        {
          speaker: "Mariana",
          target: "Sale a las siete y se demora unas dieciséis horas, si no hay trancón.",
          translation: "It leaves at seven and takes about sixteen hours, if there is no traffic jam.",
          pronunciation: "SA-leh a las SYEH-teh ee seh deh-MOH-ra OO-nas dyeh-see-SEES OH-ras, see no ai tran-KON",
          literal: "It-leaves at the seven and itself delays some sixteen hours, if not there-is traffic-jam.",
          why: "The answer keeps the same verb: “se demora.” On Colombian roads, the official duration and the lived duration are not always friends, so “si no hay trancón” is not pessimism; it is useful honesty."
        },
        {
          speaker: "Sam",
          target: "Listo. ¿Me vendes un tiquete en ventana, o ya no hay puestos?",
          translation: "Great. Can you sell me a window ticket, or are there no seats left?",
          pronunciation: "LEES-toh. meh BEN-des oon tee-KEH-teh en ben-TA-na, oh ya no ai PWES-tos",
          literal: "Ready. Me you-sell a ticket in window, or already not there-are seats?",
          why: "“Tiquete” is the normal Colombian word for a ticket in this context, and “puesto” is the seat. Asking for “un asiento” is understood, but “puesto en ventana” sounds like someone who has bought Colombian bus tickets before."
        },
        {
          speaker: "Mariana",
          target: "Sí hay. Te dejo el puesto 12; viajas al lado de la ventana.",
          translation: "There are. I'll give you seat 12; you travel next to the window.",
          pronunciation: "see ai. teh DEH-hoh el PWES-toh DOH-seh; BYA-has al LA-doh deh la ben-TA-na",
          literal: "Yes there-are. You I-leave the seat 12; you-travel to-the side of the window.",
          why: "“Te dejo” means she assigns or gives you that seat, not that she abandons it. The final “viajas” brings the verb back to the passenger: this is where you will spend the night."
        }
      ],
      vocabulary: [
        {
          term: "viajar",
          explanation:
            "The verb for making a trip, especially when the journey itself matters: route, transport, luggage, cost and duration.",
          literal: "to travel",
          useWhen:
            "Talking about going between cities, planning a route, asking how a bus service works or describing a trip you made.",
          avoidWhen:
            "You only mean stepping out or moving a short distance. “Voy a la tienda” is normal; “viajo a la tienda” sounds comic unless the store is absurdly far away.",
          register: "neutral",
          region: "General Spanish, fully natural in Colombia for intercity travel and holiday plans.",
          related: ["irse de viaje", "hacer un viaje", "salir de viaje", "trayecto"],
          example: {
            target: "Quiero viajar a Santa Marta esta noche.",
            translation: "I want to travel to Santa Marta tonight."
          }
        },
        {
          term: "irse de viaje",
          explanation:
            "A more personal phrase: to go away on a trip. It puts the person leaving home at the centre, not the transport system.",
          literal: "to go oneself of trip",
          useWhen:
            "Telling friends you are heading away for a few days, or explaining why you will not be around.",
          avoidWhen:
            "At a ticket counter when you need the clerk to solve logistics. There, “viajar a” is cleaner and more direct.",
          register: "neutral conversational",
          region: "General Spanish; common in Colombia when the trip feels like time away from routine.",
          related: ["viajar", "hacer maleta", "salir unos días", "estar de paseo"],
          example: {
            target: "Me voy de viaje el viernes.",
            translation: "I'm going away on a trip on Friday."
          }
        },
        {
          term: "hacer un viaje",
          explanation:
            "To take or make a trip, often when you are talking about the trip as an event you completed or need to arrange.",
          literal: "to make a trip",
          useWhen:
            "Describing a past trip, a work trip or a route that takes effort and planning.",
          avoidWhen:
            "When you just need the verb. “Hago un viaje a Santa Marta” is possible, but “viajo a Santa Marta” is more direct at the counter.",
          register: "neutral",
          region: "General Spanish; natural in Colombian speech for longer, more intentional trips.",
          related: ["viajar", "viaje de trabajo", "viaje largo", "hacer escala"],
          example: {
            target: "Hice un viaje largo por carretera.",
            translation: "I took a long road trip."
          }
        },
        {
          term: "tiquete",
          explanation:
            "The Colombian word you are most likely to hear for a ticket, especially for buses, flights and events.",
          literal: "ticket",
          useWhen:
            "Buying transport, confirming a reservation or asking what your fare includes.",
          avoidWhen:
            "Assuming every country uses it. “Boleto” is common elsewhere, and Colombians understand it, but it is not the word you need to sound local here.",
          register: "neutral",
          region: "Very common in Colombia; “pasaje” also appears, especially for fares and routes.",
          related: ["pasaje", "reserva", "taquilla", "código de reserva"],
          example: {
            target: "¿Me vendes un tiquete en ventana?",
            translation: "Can you sell me a window ticket?"
          }
        },
        {
          term: "puesto",
          explanation:
            "The everyday word for a seat in a bus, classroom, waiting room or event. In transport it is what you are assigned.",
          literal: "place",
          useWhen:
            "Asking whether seats are available or choosing aisle, window, front or back.",
          avoidWhen:
            "Using it for a car seatbelt or the physical object in formal writing. Then “asiento” may be clearer.",
          register: "neutral",
          region: "General Colombian usage; extremely common at terminals and counters.",
          related: ["asiento", "ventana", "pasillo", "silla"],
          example: {
            target: "Te dejo el puesto 12.",
            translation: "I'll give you seat 12."
          }
        },
        {
          term: "¿A qué hora sale?",
          explanation:
            "The practical departure question. “Salir” is the transport verb for a bus, flight or boat leaving on a schedule.",
          literal: "At what hour does it leave?",
          useWhen:
            "Checking a departure time before you buy, board or make a connection.",
          avoidWhen:
            "Asking when you personally should leave a house or hotel. Then the subject changes: “¿a qué hora salgo?”",
          register: "neutral",
          region: "General Spanish; the twenty-four-hour clock may appear on screens, but people often answer in ordinary twelve-hour time.",
          related: ["salida", "hora de salida", "abordaje", "itinerario"],
          example: {
            target: "¿A qué hora sale el bus?",
            translation: "What time does the bus leave?"
          }
        },
        {
          term: "¿Cuánto se demora?",
          explanation:
            "The Colombian way to ask how long something takes. It literally frames the thing as taking time or being delayed.",
          literal: "How much does it delay itself?",
          useWhen:
            "Asking about trips, errands, repairs, lines and deliveries: anything where the real time matters.",
          avoidWhen:
            "Overusing “¿cuánto tiempo toma?” because English says “take.” Colombians understand it, but “se demora” is the phrase you will hear around you.",
          register: "neutral conversational",
          region: "Very Colombian and widely understood across Latin America.",
          related: ["demorarse", "tardar", "durar", "más o menos"],
          example: {
            target: "¿Cuánto se demora hasta Santa Marta?",
            translation: "How long does it take to Santa Marta?"
          }
        }
      ],
      note:
        "The useful split is not between “viajar” and “ir” as right and wrong. “Ir” gets you there; “viajar” opens the whole travel frame. At a terminal, that frame matters because the conversation is not just where you are going. It is how you are going, when the bus leaves, where you sit and how many hours your body has to survive the route.",
      culture: [
        {
          label: "A terminal is a system, not just a bus stop",
          body:
            "Colombian intercity terminals have counters, platforms, company windows, luggage rules and a constant negotiation between the schedule and the road. Do not treat them like a city stop where you simply appear and board. Asking at the counter is normal, and repeating the same question at the platform is not rude; it is how people protect themselves from stale information."
        },
        {
          label: "The Eje Cafetero is connected, but not flat",
          body:
            "A route from Armenia toward the coast is shaped by mountain roads before it ever feels Caribbean. Distance on the map will not tell you the whole story. Curves, landslides, trucks and holiday traffic can matter more than kilometres, which is why “¿cuánto se demora?” is a better question than a neat translation of “how long does it take?”"
        },
        {
          label: "A window seat is not a small preference",
          body:
            "On a sixteen-hour bus, the puesto is part of the trip. Window means leaning, sleeping and seeing the road; aisle means easier movement and more elbows. Colombian travellers often ask directly for the kind of seat they want, and clerks answer just as directly. That directness is practical, not fussy."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “viajar” for every small movement",
          whyItFails:
            "The verb carries the weight of a trip. If you say “viajo a la panadería,” you have made the bakery sound like another region unless you are joking.",
          sayInstead: "Voy a la panadería."
        },
        {
          mistake: "Asking “¿cuánto tiempo toma?” as your default",
          whyItFails:
            "It is understandable, but it leans on English and sounds less Colombian than the phrase people actually use at counters, workshops and front desks.",
          sayInstead: "¿Cuánto se demora?"
        },
        {
          mistake: "Confusing “tiquete” with the seat itself",
          whyItFails:
            "The tiquete proves you paid; the puesto is where you sit. If you mix them, the clerk can still infer your meaning, but the practical question gets blurry.",
          sayInstead: "¿Hay puestos en ventana?"
        },
        {
          mistake: "Treating “irse de viaje” as a ticket-counter phrase",
          whyItFails:
            "It sounds like you are telling a friend about your plans, not asking a clerk to sell you a route. The counter needs destination and date first.",
          sayInstead: "Quiero viajar a Santa Marta esta noche."
        }
      ],
      variations: [
        {
          form: "Quiero viajar a Santa Marta esta noche.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The default ticket-counter opener: destination plus time, with no extra life story."
        },
        {
          form: "Me voy de viaje el viernes.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "Telling someone you will be away, not arranging the mechanics of transport."
        },
        {
          form: "Voy a hacer un viaje largo por carretera.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Framing the trip as an undertaking, especially before a route that will take effort."
        },
        {
          form: "¿Cuánto se demora el bus hasta Santa Marta?",
          register: "neutral conversational",
          region: "Colombia",
          whenToUse: "Asking for lived travel time, including road reality, not just official schedule time."
        },
        {
          form: "¿Hay tiquetes con puesto en ventana?",
          register: "neutral practical",
          region: "Colombia",
          whenToUse: "Combining the purchase question with the seat preference in one efficient line."
        }
      ],
      prompt: "Sam says “Quiero viajar a Santa Marta esta noche.” What is the strongest reason to use “viajar” here?",
      choices: [
        "It frames the whole intercity trip, not just the fact of going north.",
        "It proves the trip is for vacation rather than for work or family.",
        "It makes the sentence formal enough for any government document."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "At the counter, which question sounds most Colombian for the real duration?",
          choices: [
            "¿Cuánto se demora hasta Santa Marta?",
            "¿Cuánto tiempo toma hasta Santa Marta?",
            "¿Cuántas horas consume hasta Santa Marta?"
          ],
          answer: 0,
          tests: "the Colombian preference for “se demora” when asking how long something takes"
        },
        {
          prompt: "Which line separates the ticket from the seat clearly?",
          choices: [
            "Quiero un puesto y viajar un tiquete.",
            "Quiero un tiquete con puesto en ventana.",
            "Quiero una ventana con tiquete sentado."
          ],
          answer: 1,
          tests: "“tiquete” as proof of travel and “puesto” as the assigned seat"
        },
        {
          prompt: "When would “me voy de viaje” fit better than “quiero viajar a…”?",
          choices: [
            "When reading the platform number from a terminal screen.",
            "When asking a clerk to print the actual ticket.",
            "When telling a friend you will be away for several days."
          ],
          answer: 2,
          tests: "“irse de viaje” as personal plans rather than counter logistics"
        },
        {
          prompt: "Mariana says “el bus viaja toda la noche.” What is natural about that?",
          choices: [
            "Spanish requires every route to mention the driver by name.",
            "Spanish avoids saying that passengers travel on buses.",
            "Spanish can make the bus the subject of the travelling."
          ],
          answer: 2,
          tests: "transport itself can be the subject of “viajar”"
        }
      ]
    },
    en: {
      title: "Viajar de Armenia a Santa Marta sin perder el hilo",
      situation:
        "Usted está en una terminal de autobuses en Ontario, con una maleta, un café a medio tomar y la idea ambiciosa de llegar a Halifax sin tomar un avión. Necesita comprar el boleto, escoger un asiento que no le destruya la espalda y entender si el bus sale de verdad a la hora que promete la pantalla.",
      setting: {
        who: "Maya trabaja en el mostrador de una compañía de buses y ya contestó las mismas cinco preguntas toda la mañana. Sandra viaja hacia el Atlántico después de una semana en Toronto y necesita respuestas prácticas, no un folleto turístico.",
        what: "Una conversación de mostrador sobre comprar un boleto de larga distancia, escoger un asiento y calcular el tiempo real del viaje.",
        when: "Un viernes al final de la mañana, cuando empieza a moverse la gente que viaja después del almuerzo.",
        where: "Una terminal de buses en Ontario, con rutas hacia Ottawa, Montreal, Quebec y la costa atlántica.",
        why: "Los viajes largos se organizan alrededor de salidas, asientos y retrasos, no sólo de destinos. Si Sandra sabe preguntar bien aquí, el resto del viaje se vuelve manejable."
      },
      address: {
        form: "mixed",
        who: "Maya y Sandra usan nombres de pila y el mismo “you” durante toda la conversación.",
        why: "El inglés no cambia el pronombre para marcar confianza o distancia. El registro sale de palabras como “could,” “please,” y del tono práctico del mostrador.",
        ifYouSwitch:
          "No hay un cambio de pronombre disponible. Si Sandra quiere sonar más formal, alarga la frase: “Could I get” en vez de una orden seca."
      },
      dialogue: [
        {
          speaker: "Sandra",
          target: "Good morning. I want to travel to Halifax tonight.",
          translation: "Buenos días. Quiero viajar a Halifax esta noche.",
          pronunciation: "gud MOR-ning. ai want tu TRA-vol tu JA-li-faks tu-NAIT",
          literal: "Buenos días. Yo quiero viajar a Halifax esta noche.",
          why: "En inglés, “travel to” abre el marco del viaje completo. No dice solamente que usted va para allá; sugiere ruta, boleto, equipaje y horas de carretera."
        },
        {
          speaker: "Maya",
          target: "There's a direct bus, but it travels overnight and gets in the next day.",
          translation: "Hay bus directo, pero viaja de noche y llega al otro día.",
          pronunciation: "ders a di-RECT bos, bot it TRA-vols ou-ver-NAIT and gets in da nekst dei",
          literal: "Hay un bus directo, pero viaja durante la noche y entra al día siguiente.",
          why: "El bus puede ser el sujeto de “travels.” Para un hispanohablante eso es fácil de entender, pero conviene notar que “gets in” es la llegada programada de un servicio, no una entrada física dramática."
        },
        {
          speaker: "Sandra",
          target: "What time does it leave, and how long does it take, roughly?",
          translation: "¿A qué hora sale, y cuánto se demora más o menos?",
          pronunciation: "uat taim dos it liv, and jau long dos it teik, ROF-li",
          literal: "¿Qué hora hace deja, y qué tan largo hace toma, más o menos?",
          why: "El inglés usa “take” para la duración. La pregunta completa no es “how much time takes”; necesita el auxiliar “does,” el sujeto “it” y el verbo base “take.”"
        },
        {
          speaker: "Maya",
          target: "It leaves at seven and takes about sixteen hours, if traffic behaves.",
          translation: "Sale a las siete y se demora unas dieciséis horas, si el tráfico se porta bien.",
          pronunciation: "it livz at SE-ven and teiks a-BAUT siks-TIN au-ers, if TRA-fik bi-JEIVZ",
          literal: "Eso deja a las siete y toma cerca de dieciséis horas, si el tráfico se comporta.",
          why: "“If traffic behaves” es coloquial y muy útil: no promete que la carretera obedezca. En español colombiano usted probablemente diría “si no hay trancón.”"
        },
        {
          speaker: "Sandra",
          target: "Great. Could I get a window seat, or are they all gone?",
          translation: "Listo. ¿Me das un puesto en ventana, o ya no quedan?",
          pronunciation: "greit. kud ai get a UIN-dou sit, or ar dei ol gon",
          literal: "Genial. ¿Podría yo conseguir un asiento de ventana, o están todos idos?",
          why: "“Could I get” es la fórmula de mostrador que suena amable sin ser ceremoniosa. “A window seat” es la unidad completa; no diga “a seat in window.”"
        },
        {
          speaker: "Maya",
          target: "Yes, there are. I'll put you in seat 12, by the window.",
          translation: "Sí quedan. Te pongo en el puesto 12, al lado de la ventana.",
          pronunciation: "yes, der ar. ail put yu in sit tuelv, bai da UIN-dou",
          literal: "Sí, hay. Yo la pondré en asiento doce, por la ventana.",
          why: "“Put you in seat 12” no suena agresivo; significa asignarle ese asiento. Es una construcción muy corriente en mostradores, hoteles y eventos."
        }
      ],
      vocabulary: [
        {
          term: "travel",
          explanation:
            "El verbo para hacer un viaje cuando importa el trayecto completo: ruta, transporte, equipaje, costo y duración.",
          literal: "viajar",
          useWhen:
            "Para hablar de ir entre ciudades, planear una ruta, preguntar cómo funciona un servicio de bus o describir un viaje que usted hizo.",
          avoidWhen:
            "Si sólo habla de salir o moverse una distancia corta. “I travel to the bakery” suena cómico, salvo que la panadería quede absurdamente lejos.",
          register: "neutral",
          region: "Inglés universal; en Norteamérica se usa mucho para viajes entre ciudades y planes de vacaciones.",
          related: ["go on a trip", "take a trip", "head out", "journey"],
          example: {
            target: "I want to travel to Halifax tonight.",
            translation: "Quiero viajar a Halifax esta noche."
          }
        },
        {
          term: "go on a trip",
          explanation:
            "Una frase más personal: irse de viaje. Pone en el centro a la persona que deja la rutina, no al sistema de transporte.",
          literal: "ir en un viaje",
          useWhen:
            "Para contarle a alguien que usted va a estar fuera unos días, o explicar por qué no estará disponible.",
          avoidWhen:
            "En un mostrador, cuando necesita que le resuelvan la logística. Ahí “travel to” o “I need a ticket to” es más limpio.",
          register: "neutral conversational",
          region: "Inglés universal; muy común cuando el viaje suena como pausa de la rutina.",
          related: ["travel", "take a trip", "be away", "head out of town"],
          example: {
            target: "I'm going on a trip on Friday.",
            translation: "Me voy de viaje el viernes."
          }
        },
        {
          term: "take a trip",
          explanation:
            "Hacer un viaje, especialmente cuando habla del viaje como evento completado o como plan organizado.",
          literal: "tomar un viaje",
          useWhen:
            "Para describir un viaje pasado, un viaje de trabajo o una ruta que exige esfuerzo.",
          avoidWhen:
            "Cuando sólo necesita decir el destino en un mostrador. “I want to travel to Halifax” suena más directo que “I want to take a trip to Halifax.”",
          register: "neutral",
          region: "Inglés universal; natural para viajes largos o intencionales.",
          related: ["travel", "road trip", "business trip", "make a stop"],
          example: {
            target: "I took a long road trip.",
            translation: "Hice un viaje largo por carretera."
          }
        },
        {
          term: "ticket",
          explanation:
            "El documento o código que prueba que usted pagó. Sirve para buses, trenes, vuelos, eventos y multas, según el contexto.",
          literal: "tiquete / boleto",
          useWhen:
            "Al comprar transporte, confirmar una reserva o preguntar qué incluye la tarifa.",
          avoidWhen:
            "Confundirlo con el asiento. El ticket prueba el pago; el seat es donde usted se sienta.",
          register: "neutral",
          region: "Inglés universal; “fare” habla más del precio que del documento.",
          related: ["fare", "reservation", "booking", "boarding pass"],
          example: {
            target: "Could I get a ticket to Halifax?",
            translation: "¿Me vendes un tiquete a Halifax?"
          }
        },
        {
          term: "seat",
          explanation:
            "El lugar asignado donde usted se sienta en el bus, el avión, el teatro o el salón.",
          literal: "puesto / asiento",
          useWhen:
            "Para pedir ventana, pasillo, adelante, atrás o confirmar qué número le asignaron.",
          avoidWhen:
            "Usarlo como si fuera el boleto. “I bought a seat” puede funcionar, pero en un mostrador normalmente compra un ticket and chooses a seat.",
          register: "neutral",
          region: "Inglés universal; “window seat” y “aisle seat” son las combinaciones clave.",
          related: ["window seat", "aisle seat", "row", "seat number"],
          example: {
            target: "I'll put you in seat 12.",
            translation: "Te pongo en el puesto 12."
          }
        },
        {
          term: "What time does it leave?",
          explanation:
            "La pregunta práctica por la hora de salida. En inglés necesita el auxiliar “does” porque es una pregunta en presente simple.",
          literal: "¿A qué hora sale?",
          useWhen:
            "Para confirmar una salida antes de comprar, abordar o hacer conexión.",
          avoidWhen:
            "Preguntar por la hora en que usted debe salir de la casa. Ahí cambia el sujeto: “what time should I leave?”",
          register: "neutral",
          region: "Inglés universal; en pantallas se ve formato de veinticuatro horas, pero la gente suele responder con doce horas.",
          related: ["departure time", "schedule", "boarding time", "itinerary"],
          example: {
            target: "What time does the bus leave?",
            translation: "¿A qué hora sale el bus?"
          }
        },
        {
          term: "How long does it take?",
          explanation:
            "La pregunta normal por la duración. El verbo “take” hace el trabajo que en Colombia suele hacer “demorarse.”",
          literal: "¿Qué tan largo toma?",
          useWhen:
            "Al preguntar por viajes, trámites, reparaciones, filas y entregas: cualquier cosa donde el tiempo real importa.",
          avoidWhen:
            "Traducir palabra por palabra desde el español y decir “how much time it takes.” Falta el auxiliar y el orden de pregunta.",
          register: "neutral conversational",
          region: "Inglés universal; “roughly” o “about” suavizan la pregunta cuando sabe que el tiempo no es exacto.",
          related: ["how long", "take about", "roughly", "duration"],
          example: {
            target: "How long does it take, roughly?",
            translation: "¿Cuánto se demora más o menos?"
          }
        }
      ],
      note:
        "La división útil no es entre “travel” y “go” como si uno fuera correcto y el otro incorrecto. “Go” alcanza para llegar; “travel” abre el marco entero del viaje. En un mostrador ese marco importa, porque la conversación no trata sólo del destino. Trata de cómo va usted, cuándo sale el bus, dónde se sienta y cuántas horas tendrá que aguantar la carretera.",
      culture: [
        {
          label: "Una terminal es un sistema, no una parada",
          body:
            "Las terminales de buses de larga distancia tienen mostradores, plataformas, compañías, reglas de equipaje y una negociación constante entre el horario y la carretera. No funcionan como una parada urbana donde uno aparece y se sube. Preguntar en el mostrador es normal, y confirmar de nuevo en la plataforma no suena grosero; es protegerse de información vieja."
        },
        {
          label: "La distancia no cuenta toda la historia",
          body:
            "En viajes largos por carretera, el mapa no le dice todo. Curvas, nieve, obras, camiones y tráfico de festivo pueden importar más que los kilómetros. Por eso “how long does it take?” es una pregunta práctica, no una muestra de ansiedad. La persona que contesta suele darle una duración con margen, no una promesa matemática."
        },
        {
          label: "El asiento no es un detalle pequeño",
          body:
            "En un bus de muchas horas, el seat es parte del viaje. Window permite apoyarse, dormir y mirar la carretera; aisle facilita moverse y estirar las piernas. Los viajeros preguntan directamente por el asiento que quieren, y el personal contesta igual de directo. Esa claridad es práctica, no caprichosa."
        }
      ],
      pitfalls: [
        {
          mistake: "“I travel to the bakery.”",
          whyItFails:
            "El verbo pesa demasiado para un movimiento pequeño. Hace sonar la panadería como otra región, salvo que usted esté bromeando.",
          sayInstead: "I'm going to the bakery."
        },
        {
          mistake: "“How much time it takes?”",
          whyItFails:
            "La pregunta necesita el auxiliar y el orden del inglés: “does” antes del sujeto y “take” en forma base. Sin eso suena traducida palabra por palabra.",
          sayInstead: "How long does it take?"
        },
        {
          mistake: "“A seat in window.”",
          whyItFails:
            "El inglés no arma esa preferencia con “in.” La unidad ya hecha es “window seat,” igual que “aisle seat.”",
          sayInstead: "A window seat."
        },
        {
          mistake: "“I go on a travel.”",
          whyItFails:
            "“Travel” funciona como verbo o como idea general, pero para un viaje específico la frase fija es “go on a trip” o “take a trip.”",
          sayInstead: "I'm going on a trip."
        }
      ],
      variations: [
        {
          form: "I want to travel to Halifax tonight.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "La apertura por defecto en un mostrador: destino más hora, sin historia adicional."
        },
        {
          form: "I'm going on a trip on Friday.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Contarle a alguien que usted estará fuera, no resolver la mecánica del transporte."
        },
        {
          form: "I'm taking a long road trip.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Presentar el viaje como una empresa larga, especialmente por carretera."
        },
        {
          form: "How long does the bus take?",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Preguntar por la duración real, no sólo por la hora oficial de salida."
        },
        {
          form: "Could I get a ticket with a window seat?",
          register: "neutral practical",
          region: "Inglés universal",
          whenToUse: "Unir la compra del boleto y la preferencia de asiento en una sola frase amable."
        }
      ],
      prompt: "Sandra dice “I want to travel to Halifax tonight.” ¿Cuál es la razón más fuerte para usar “travel” aquí?",
      choices: [
        "Abre el marco del viaje completo, no sólo el hecho de ir hacia el norte.",
        "Demuestra que el viaje es de vacaciones y no de trabajo ni familia.",
        "Vuelve la frase formal para cualquier documento del gobierno."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "En el mostrador, ¿cuál pregunta suena natural para la duración real?",
          choices: [
            "How long does it take to Halifax?",
            "How much time it takes to Halifax?",
            "How many hours consumes to Halifax?"
          ],
          answer: 0,
          tests: "la estructura inglesa “how long does it take” para preguntar duración"
        },
        {
          prompt: "¿Cuál frase separa claramente el boleto del asiento?",
          choices: [
            "I want a seat and travel a ticket.",
            "I want a ticket with a window seat.",
            "I want a window with a seated ticket."
          ],
          answer: 1,
          tests: "“ticket” como pago y “seat” como lugar asignado"
        },
        {
          prompt: "¿Cuándo encaja mejor “go on a trip” que “travel to…”?",
          choices: [
            "Cuando lee el número de plataforma.",
            "Cuando pide imprimir el boleto.",
            "Cuando cuenta que estará fuera varios días."
          ],
          answer: 2,
          tests: "“go on a trip” para planes personales más que logística"
        },
        {
          prompt: "Maya dice “the bus travels overnight.” ¿Qué tiene de natural?",
          choices: [
            "El inglés exige nombrar al conductor.",
            "El inglés evita que viajen pasajeros.",
            "El bus puede ser sujeto de “travels.”"
          ],
          answer: 2,
          tests: "el transporte como sujeto posible de “travel”"
        }
      ]
    }
  },
  {
    id: "conducir-on-the-road-to-cucuta",
    level: "Developing · Getting around the country",
    skills: ["speaking", "listening", "context"],
    domain: "everyday life",
    register: "neutral with official contrast",
    pathways: ["foundation", "year-12"],
    verb: "conducir",
    review: "pending",
    es: {
      title: "Conducir por la vía Bucaramanga-Cúcuta con pico y placa",
      situation:
        "Llegas a Bucaramanga con un carro alquilado y la intención de cruzar hacia Cúcuta temprano. En el mostrador, la asesora revisa tu licencia, mira la placa y te advierte que la palabra oficial es “conducir”, pero que en la calle todo el mundo te va a preguntar si sabes manejar.",
      setting: {
        who: "Paola works for a rental agency near Bucaramanga's transport corridor. Jordan has driven in several countries, but not on Colombian mountain roads or under local traffic restrictions.",
        what: "A rental-car handover where the paperwork says “conducir,” the spoken advice says “manejar,” and the route includes pico y placa.",
        when: "Early on a weekday morning, before the road fills with freight traffic.",
        where: "Bucaramanga, with the Bucaramanga-Cúcuta road ahead and the city restriction still relevant before leaving town.",
        why: "A visitor who learns only “conducir” may understand signs and licences but miss the word Colombians actually use in conversation. Jordan needs both registers."
      },
      address: {
        form: "usted",
        who: "Paola uses usted because she is handling a contract and a driver's licence. Jordan mirrors it because the exchange is friendly but official.",
        why: "Rental counters, police stops and insurance conversations lean formal. Usted keeps the tone respectful while Paola explains rules that can cost money.",
        ifYouSwitch:
          "Tú would not be shocking with a young clerk, but it would soften a conversation that is still about responsibility. Vos would feel out of place unless both speakers clearly shared that regional register."
      },
      dialogue: [
        {
          speaker: "Paola",
          target: "Señor Jordan, ¿usted va a conducir hasta Cúcuta hoy?",
          translation: "Mr Jordan, are you going to drive to Cúcuta today?",
          pronunciation: "seh-NYOR JOR-dan, oos-TED ba a kon-doo-SEER AS-ta KOO-koo-ta oy",
          literal: "Mister Jordan, you go to drive until Cúcuta today?",
          why: "“Conducir” fits the official frame: licence, rental contract, liability. It is not wrong Colombian Spanish; it is just the word you expect from institutions, forms and serious warnings."
        },
        {
          speaker: "Jordan",
          target: "Sí, pero todos me preguntan si sé manejar. ¿Es distinto?",
          translation: "Yes, but everyone asks me if I know how to drive. Is it different?",
          pronunciation: "see, PEH-roh TO-dos meh preh-GOON-tan see seh ma-neh-HAR. es dees-TEEN-toh",
          literal: "Yes, but everyone me ask if I-know to-handle. Is different?",
          why: "This is the split you need: Colombians usually say “manejar” for everyday driving. If you only use “conducir,” you will be understood, but you may sound like a road-safety poster."
        },
        {
          speaker: "Paola",
          target: "En la calle decimos manejar; en la licencia dice conducción.",
          translation: "On the street we say manejar; on the licence it says conducción.",
          pronunciation: "en la KA-yeh deh-SEE-mos ma-neh-HAR; en la lee-SEN-sya DEE-seh kon-dook-SYON",
          literal: "In the street we-say manejar; on the licence it-says driving.",
          why: "“Conducción” names the official category: “licencia de conducción,” driving licence. The noun belongs to the same formal family as “conducir.”"
        },
        {
          speaker: "Jordan",
          target: "Entonces conduzco con la licencia, pero manejo en la conversación.",
          translation: "So I drive with the licence, but I say manejar in conversation.",
          pronunciation: "en-TON-ses kon-DOOS-koh kon la lee-SEN-sya, PEH-roh ma-NEH-hoh en la kon-ber-sa-SYON",
          literal: "Then I-drive with the licence, but I-handle in the conversation.",
          why: "“Conduzco” is the irregular yo form. Jordan's joke is also accurate: the formal verb lives on paper, while “manejo” is what people say when talking normally."
        },
        {
          speaker: "Paola",
          target: "Exacto. Y ojo: por pico y placa no puede salir por el centro antes de las nueve.",
          translation: "Exactly. And careful: because of pico y placa you cannot leave through downtown before nine.",
          pronunciation: "eg-SAK-toh. ee OH-hoh: por PEE-koh ee PLA-ka no PWEH-deh sa-LEER por el SEN-troh AN-tes deh las NWEH-beh",
          literal: "Exactly. And eye: because-of peak and plate not you-can leave through the centre before the nine.",
          why: "“Pico y placa” is the restriction based on licence-plate numbers and peak hours. Do not translate it; learn it as a Colombian traffic phrase."
        },
        {
          speaker: "Jordan",
          target: "Listo, espero aquí y después conduzco con calma por la vía a Cúcuta.",
          translation: "Got it, I'll wait here and then drive calmly on the road to Cúcuta.",
          pronunciation: "LEES-toh, es-PEH-roh a-KEE ee des-PWES kon-DOOS-koh kon KAL-ma por la BEE-a a KOO-koo-ta",
          literal: "Ready, I-wait here and after I-drive with calm by the road to Cúcuta.",
          why: "“Conduzco con calma” sounds appropriately serious after a road warning. On a mountain road, calm is not decorative; it is part of competent driving."
        }
      ],
      vocabulary: [
        {
          term: "conducir",
          explanation:
            "The formal verb for driving a vehicle. It appears in licences, legal language, safety campaigns, signage and news reports.",
          literal: "to conduct / to drive",
          useWhen:
            "Talking to police, reading official notices, discussing licences or giving a serious warning about driving.",
          avoidWhen:
            "Trying to sound casually Colombian with friends. In everyday speech, Colombians overwhelmingly say “manejar.”",
          register: "formal or official",
          region: "Standard Spanish; understood everywhere in Colombia but less conversational than “manejar.”",
          related: ["manejar", "conducción", "conductor", "licencia"],
          example: {
            target: "¿Usted va a conducir hasta Cúcuta hoy?",
            translation: "Are you going to drive to Cúcuta today?"
          }
        },
        {
          term: "manejar",
          explanation:
            "The everyday Colombian verb for driving. It literally means to handle, but on the road it is the normal spoken word.",
          literal: "to handle / to drive",
          useWhen:
            "Asking whether someone can drive, saying who drove, or giving casual road advice.",
          avoidWhen:
            "Quoting a licence category or formal regulation. Those contexts usually choose “conducir” or “conducción.”",
          register: "everyday conversational",
          region: "The normal spoken choice in Colombia and much of Latin America.",
          related: ["conducir", "chofer", "volante", "carretera"],
          example: {
            target: "¿Usted sabe manejar en carretera?",
            translation: "Do you know how to drive on the highway?"
          }
        },
        {
          term: "licencia de conducción",
          explanation:
            "The official Colombian phrase for a driver's licence. It is built from “conducción,” not from “manejar.”",
          literal: "licence of driving",
          useWhen:
            "Renting a car, dealing with police, filling forms or checking what category you are allowed to drive.",
          avoidWhen:
            "Casual conversation where “licencia” alone is already clear. The full phrase can sound like paperwork because it is paperwork.",
          register: "official",
          region: "Colombia; other countries may say “licencia de conducir” or “permiso.”",
          related: ["pase", "documentos", "categoría", "tránsito"],
          example: {
            target: "En la licencia dice conducción.",
            translation: "On the licence it says conducción."
          }
        },
        {
          term: "pico y placa",
          explanation:
            "A traffic restriction that limits when vehicles can circulate based on the last digit of the licence plate, usually during busy hours.",
          literal: "peak and plate",
          useWhen:
            "Checking whether your car can enter, leave or move through a city at a certain time.",
          avoidWhen:
            "Translating it word by word for a driver who needs to act quickly. The phrase itself is the rule's name.",
          register: "official and everyday",
          region: "Common in Colombian cities, with rules that change by city, day and vehicle type.",
          related: ["placa", "restricción", "tránsito", "comparendo"],
          example: {
            target: "Por pico y placa no puede salir antes de las nueve.",
            translation: "Because of pico y placa, you cannot leave before nine."
          }
        },
        {
          term: "placa",
          explanation:
            "The licence plate. In traffic rules, the relevant detail is often the final digit.",
          literal: "plate",
          useWhen:
            "Reading restrictions, giving vehicle details, reporting a car or checking rental paperwork.",
          avoidWhen:
            "Confusing it with “plato,” the dish you eat from. They are close enough to embarrass a tired traveller.",
          register: "neutral",
          region: "General Colombian; “placa” is the traffic word you will see on signs and forms.",
          related: ["número de placa", "último dígito", "matrícula", "vehículo"],
          example: {
            target: "Miro la placa antes de salir.",
            translation: "I check the licence plate before leaving."
          }
        },
        {
          term: "la vía a Cúcuta",
          explanation:
            "The road or highway toward Cúcuta. “Vía” is common in Colombian route talk, not only in formal maps.",
          literal: "the way to Cúcuta",
          useWhen:
            "Talking about intercity roads, closures, traffic, curves or where a route becomes difficult.",
          avoidWhen:
            "Asking for a street inside a neighbourhood. There “calle,” “carrera” or “avenida” may be more specific.",
          register: "neutral",
          region: "Very common in Colombian travel and traffic reporting.",
          related: ["carretera", "ruta", "peaje", "curvas"],
          example: {
            target: "Conduzco con calma por la vía a Cúcuta.",
            translation: "I drive calmly on the road to Cúcuta."
          }
        },
        {
          term: "con calma",
          explanation:
            "Calmly, without rushing. On Colombian roads it can be a safety instruction, not just a mood.",
          literal: "with calm",
          useWhen:
            "Telling someone to drive, decide, answer or handle a situation without panic.",
          avoidWhen:
            "Using it to dismiss a real concern. If someone is warning you about traffic, “sí, sí, con calma” can sound like you are not listening.",
          register: "neutral conversational",
          region: "General Colombian; paired naturally with driving advice.",
          related: ["despacio", "sin afán", "tranquilo", "prudente"],
          example: {
            target: "Conduzca con calma en esa vía.",
            translation: "Drive calmly on that road."
          }
        }
      ],
      note:
        "This lesson is deliberately honest about register. A Colombian friend is far more likely to ask “¿sabes manejar?” than “¿sabes conducir?” But the rental contract, the licence category and a police notice belong to the “conducir” family. If you learn only the everyday word, official Spanish becomes harder. If you learn only the official word, you sound oddly institutional in normal conversation.",
      culture: [
        {
          label: "Bucaramanga to Cúcuta is not a casual city errand",
          body:
            "The road across Santander and Norte de Santander is beautiful, serious and shaped by mountains, trucks, curves and weather. A rental clerk warning you to drive calmly is not performing drama for a tourist. She is compressing local road knowledge into one short sentence before handing over the keys."
        },
        {
          label: "Pico y placa can affect visitors too",
          body:
            "A rental car does not float above city rules. Pico y placa can block you from moving through certain areas at certain hours, and the details change by city. The useful habit is simple: ask before you leave, and ask with the plate number visible. Guessing from another city's rule is how people earn fines."
        },
        {
          label: "Official Spanish and street Spanish coexist",
          body:
            "Colombians do not choose “manejar” because they cannot say “conducir.” They choose it because the context is ordinary speech. The same person may say “yo manejo” at breakfast and read “licencia de conducción” at a checkpoint ten minutes later. The register changes; the driver does not."
        }
      ],
      pitfalls: [
        {
          mistake: "Teaching “conducir” as the normal everyday Colombian verb",
          whyItFails:
            "It hides the word people actually use. Colombians understand “conducir,” but in casual speech “manejar” is the ordinary choice.",
          sayInstead: "Use “manejar” in conversation and “conducir” in formal contexts."
        },
        {
          mistake: "Saying “yo conducio” for the present tense",
          whyItFails:
            "The yo form is irregular: “conduzco.” It keeps the formal register but needs the correct shape.",
          sayInstead: "Yo conduzco."
        },
        {
          mistake: "Translating “pico y placa” as “peak and plate” in the moment",
          whyItFails:
            "The literal translation explains the pieces but not the rule. A driver needs to recognize the Spanish name and ask what restriction applies today.",
          sayInstead: "¿Hoy aplica pico y placa para esta placa?"
        },
        {
          mistake: "Assuming the same restriction applies in every city",
          whyItFails:
            "Pico y placa is local. The digits, hours and exceptions can change, so yesterday's rule from another city may be useless.",
          sayInstead: "¿Cómo funciona el pico y placa aquí?"
        }
      ],
      variations: [
        {
          form: "¿Usted va a conducir hasta Cúcuta hoy?",
          register: "formal practical",
          region: "General Colombian",
          whenToUse: "At a rental counter, checkpoint or official conversation about responsibility."
        },
        {
          form: "¿Usted sabe manejar en carretera?",
          register: "everyday conversational",
          region: "Colombia",
          whenToUse: "Asking naturally whether someone can drive outside the city."
        },
        {
          form: "Necesito revisar su licencia de conducción.",
          register: "official",
          region: "Colombia",
          whenToUse: "Paperwork, police or insurance language where the formal noun is expected."
        },
        {
          form: "Por pico y placa no puede salir antes de las nueve.",
          register: "official and everyday",
          region: "Colombia",
          whenToUse: "Explaining the traffic restriction that changes the plan."
        },
        {
          form: "Conduzca con calma por esa vía.",
          register: "formal advice",
          region: "General Colombian",
          whenToUse: "A serious warning where usted and the formal verb reinforce responsibility."
        }
      ],
      prompt: "Why does Paola say both “conducir” and “manejar” in the same exchange?",
      choices: [
        "Because the two verbs refer to completely different kinds of vehicles on Colombian roads.",
        "Because “conducir” fits official paperwork, while “manejar” is normal Colombian speech.",
        "Because “manejar” is only for professional drivers and “conducir” is only for visitors."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which question would a Colombian friend most naturally ask about your ability?",
          choices: [
            "¿Usted sabe conducir oficialmente?",
            "¿Usted sabe guiar automóviles?",
            "¿Usted sabe manejar en carretera?"
          ],
          answer: 2,
          tests: "“manejar” as the everyday verb for driving in Colombian speech"
        },
        {
          prompt: "Which phrase belongs naturally on paperwork or at a checkpoint?",
          choices: [
            "la habilidad de manejar",
            "la licencia de conducción",
            "el permiso de volantear"
          ],
          answer: 1,
          tests: "the formal noun “conducción” in official contexts"
        },
        {
          prompt: "Jordan says “yo conduzco.” What should you notice?",
          choices: [
            "It is the casual Colombian replacement for “yo manejo.”",
            "It is the irregular present-tense yo form of “conducir.”",
            "It is the plural command used on road warning signs."
          ],
          answer: 1,
          tests: "the irregular yo form “conduzco”"
        },
        {
          prompt: "What is the safest way to handle “pico y placa” with a rental car?",
          choices: [
            "Assume every Colombian city uses one schedule.",
            "Translate the name and ignore the restriction.",
            "Ask how it works here for this plate today."
          ],
          answer: 2,
          tests: "pico y placa as a local rule tied to the plate and day"
        }
      ]
    },
    en: {
      title: "Conducir por la vía Bucaramanga-Cúcuta con pico y placa",
      situation:
        "Usted llega a Calgary con un carro alquilado y la intención de cruzar hacia Banff temprano. En el mostrador, la asesora revisa su licencia, mira la placa y le advierte que en inglés “drive” cubre tanto la conversación cotidiana como buena parte del lenguaje oficial, pero que las restricciones locales igual hay que preguntarlas.",
      setting: {
        who: "Paula trabaja en una agencia de alquiler cerca de la salida hacia las montañas. Jorge ya manejó en varios países, pero no en carreteras canadienses ni bajo reglas locales de estacionamiento y circulación.",
        what: "Una entrega de carro alquilado donde Jorge aprende a usar “drive,” “driver's licence,” “plate” y una advertencia de tráfico sin traducir desde el español.",
        when: "Temprano un día laboral, antes de que la vía hacia el parque se llene de carros y buses turísticos.",
        where: "Calgary, con la carretera hacia Banff por delante y reglas de ciudad todavía relevantes antes de salir.",
        why: "Un visitante que traduce “conducir” y “manejar” como si siempre hubiera dos registros en inglés puede complicar frases sencillas. Jorge necesita sonar natural y entender las palabras de los documentos."
      },
      address: {
        form: "mixed",
        who: "Paula y Jorge usan nombres de pila, trato amable y el mismo “you” en todo momento.",
        why: "El inglés no tiene un cambio entre tú y usted. La formalidad del mostrador aparece en “could,” “please,” “sir” si hiciera falta, y en la precisión de la información.",
        ifYouSwitch:
          "No se cambia de pronombre. Para sonar más formal, Jorge puede decir “Could you check” en vez de “Check,” o “I need to” en vez de una orden."
      },
      dialogue: [
        {
          speaker: "Paula",
          target: "Jorge, are you driving to Banff today?",
          translation: "Jorge, ¿usted va a conducir hasta Banff hoy?",
          pronunciation: "YOR-ye, ar yu DRAI-ving tu banf tu-DEI",
          literal: "Jorge, ¿está usted manejando a Banff hoy?",
          why: "“Drive” cubre aquí lo que en español colombiano puede dividirse entre “conducir” y “manejar.” En inglés corriente no necesita dos verbos para separar el mostrador de la conversación."
        },
        {
          speaker: "Jorge",
          target: "Yes, but should I say I drive or I handle the car?",
          translation: "Sí, pero ¿debo decir que conduzco o que manejo el carro?",
          pronunciation: "yes, bot shud ai sei ai draiv or ai JAN-dol da car",
          literal: "Sí, pero debería decir yo conduzco o yo manejo el carro?",
          why: "“Handle the car” no es la forma normal para decir manejar. Puede existir en contextos de control difícil, pero no reemplaza a “drive” como verbo cotidiano."
        },
        {
          speaker: "Paula",
          target: "Say drive. Your driver's licence also uses the same word family.",
          translation: "Diga drive. Su licencia de conducción también usa la misma familia de palabras.",
          pronunciation: "sei draiv. yor DRAI-vers LAI-sens OL-so YU-zes da seim word FA-mi-li",
          literal: "Diga maneje. Su licencia de conductor también usa la misma familia de palabra.",
          why: "“Driver's licence” se forma con “driver,” la persona que maneja. No intente calcar “licencia de conducción” como “licence of conduction.”"
        },
        {
          speaker: "Jorge",
          target: "So I drive the car, and I'm the driver on the contract.",
          translation: "Entonces manejo el carro, y soy el conductor en el contrato.",
          pronunciation: "so ai draiv da car, and aim da DRAI-ver on da KON-tract",
          literal: "Entonces yo manejo el carro, y soy el conductor en el contrato.",
          why: "La familia es transparente: “drive,” “driver,” “driver's licence.” Para un hispanohablante, esa repetición ayuda a no inventar una palabra formal falsa."
        },
        {
          speaker: "Paula",
          target: "Exactly. And check the plate rules before you leave downtown.",
          translation: "Exacto. Y revise las reglas de placa antes de salir del centro.",
          pronunciation: "eg-ZAKT-li. and chek da pleit rulz bi-FOR yu liv daun-TAUN",
          literal: "Exactamente. Y revise las reglas de placa antes de dejar el centro.",
          why: "“Plate rules” no es una traducción de pico y placa; es una forma práctica de hablar de restricciones ligadas a la placa. El detalle local se pregunta aparte."
        },
        {
          speaker: "Jorge",
          target: "Got it. I'll wait here, then drive carefully on the road to Banff.",
          translation: "Listo. Espero aquí y luego conduzco con cuidado por la vía a Banff.",
          pronunciation: "got it. ail weit jir, den draiv KER-ful-li on da roud tu banf",
          literal: "Lo tengo. Esperaré aquí, después manejaré cuidadosamente en la carretera a Banff.",
          why: "“Drive carefully” es la advertencia natural. No necesita decir “with calm”; el adverbio hace el trabajo sin sonar traducido."
        }
      ],
      vocabulary: [
        {
          term: "drive",
          explanation:
            "El verbo normal para manejar o conducir un vehículo. Sirve en conversación, instrucciones, seguros y gran parte del lenguaje práctico.",
          literal: "manejar / conducir",
          useWhen:
            "Para decir quién maneja, preguntar si alguien sabe manejar, hablar de una ruta o dar una advertencia de carretera.",
          avoidWhen:
            "Cuando “drive” es sustantivo y significa paseo o impulso. “A long drive” es un trayecto; “drive” no siempre es verbo.",
          register: "neutral",
          region: "Inglés universal; no tiene la misma división cotidiana entre “manejar” y “conducir.”",
          related: ["driver", "driver's licence", "driving", "road"],
          example: {
            target: "Are you driving to Banff today?",
            translation: "¿Usted va a conducir hasta Banff hoy?"
          }
        },
        {
          term: "handle",
          explanation:
            "Manejar en el sentido de encargarse de algo o controlar una situación. No es el verbo normal para conducir un carro.",
          literal: "manejar / encargarse de",
          useWhen:
            "Al hablar de manejar presión, clientes, un problema o una máquina difícil de controlar.",
          avoidWhen:
            "Como traducción automática de manejar un carro. “I handle the car” suena raro si sólo quiere decir que usted conduce.",
          register: "neutral",
          region: "Inglés universal; útil, pero no para reemplazar “drive” en transporte cotidiano.",
          related: ["manage", "deal with", "control", "take care of"],
          example: {
            target: "I can handle the paperwork.",
            translation: "Puedo encargarme del papeleo."
          }
        },
        {
          term: "driver's licence",
          explanation:
            "La licencia que prueba que usted puede manejar legalmente. En Norteamérica se escribe con “driver,” no como traducción literal de “conducción.”",
          literal: "licencia de conductor",
          useWhen:
            "Al alquilar un carro, hablar con la policía, llenar formularios o confirmar identidad.",
          avoidWhen:
            "Decir “licence of conduction.” Eso suena como física o electricidad, no como tránsito.",
          register: "official practical",
          region: "Inglés norteamericano; en inglés británico suele escribirse “driving licence.”",
          related: ["ID", "permit", "rental contract", "driver"],
          example: {
            target: "Can I see your driver's licence?",
            translation: "¿Puedo ver su licencia de conducción?"
          }
        },
        {
          term: "plate rules",
          explanation:
            "Una forma práctica de hablar de reglas ligadas a la placa del carro, aunque cada lugar tenga su propio nombre oficial.",
          literal: "reglas de placa",
          useWhen:
            "Cuando necesita preguntar si su placa tiene restricciones para circular, entrar, parquear o salir de una zona.",
          avoidWhen:
            "Creer que es el nombre fijo de un programa como pico y placa. Es una descripción útil, no necesariamente el título oficial.",
          register: "neutral practical",
          region: "Comprensible en inglés, aunque las reglas dependen de cada ciudad o provincia.",
          related: ["licence plate", "restriction", "downtown rules", "parking rules"],
          example: {
            target: "Check the plate rules before you leave downtown.",
            translation: "Revise las reglas de placa antes de salir del centro."
          }
        },
        {
          term: "licence plate",
          explanation:
            "La placa del vehículo. En inglés norteamericano también se escribe “license plate” en Estados Unidos.",
          literal: "placa de licencia",
          useWhen:
            "Para dar datos del carro, leer restricciones, reportar un vehículo o revisar papeles de alquiler.",
          avoidWhen:
            "Reducirlo a “plate” cuando el contexto no es de carros. “Plate” solo también puede ser un plato.",
          register: "neutral",
          region: "“Licence plate” es común en Canadá; “license plate” es la ortografía estadounidense.",
          related: ["plate number", "last digit", "vehicle", "registration"],
          example: {
            target: "The licence plate ends in eight.",
            translation: "La placa termina en ocho."
          }
        },
        {
          term: "the road to Banff",
          explanation:
            "La carretera hacia Banff. “Road to” es una forma sencilla y natural de ubicar una ruta.",
          literal: "la vía a Banff",
          useWhen:
            "Al hablar de carreteras entre ciudades, cierres, tráfico, curvas o clima en una ruta.",
          avoidWhen:
            "Para calles específicas dentro de una ciudad, donde “street,” “avenue” o el nombre propio serán más precisos.",
          register: "neutral",
          region: "Inglés universal; en señales puede aparecer “highway” con número.",
          related: ["highway", "route", "exit", "traffic"],
          example: {
            target: "Drive carefully on the road to Banff.",
            translation: "Conduzca con cuidado por la vía a Banff."
          }
        },
        {
          term: "carefully",
          explanation:
            "Con cuidado. Es el adverbio natural para una advertencia de seguridad al manejar.",
          literal: "cuidadosamente",
          useWhen:
            "Para pedirle a alguien que maneje, lea, firme, cruce o decida sin descuidarse.",
          avoidWhen:
            "Traducir siempre “con calma” como “with calm.” En avisos de conducción, “carefully” suele sonar más natural.",
          register: "neutral",
          region: "Inglés universal; frecuente en instrucciones y advertencias.",
          related: ["slowly", "safely", "take care", "watch out"],
          example: {
            target: "Drive carefully on that road.",
            translation: "Conduzca con cuidado por esa vía."
          }
        }
      ],
      note:
        "Esta lección evita una trampa de traducción: el español colombiano reparte el registro entre “manejar” y “conducir,” pero el inglés no necesita dos verbos equivalentes. “Drive” funciona en la conversación y también aparece en la familia oficial de “driver” y “driver's licence.” La precisión está en no inventar “handle the car” ni “licence of conduction” por seguir demasiado de cerca el español.",
      culture: [
        {
          label: "La carretera a Banff exige atención real",
          body:
            "La ruta desde Calgary hacia las montañas puede parecer sencilla en el mapa, pero el clima, los animales, los turistas y los cambios rápidos de visibilidad importan. Cuando alguien le dice “drive carefully,” no está adornando la despedida. Está metiendo conocimiento local en una frase corta antes de entregarle las llaves."
        },
        {
          label: "Las reglas locales también afectan al visitante",
          body:
            "Un carro alquilado no lo libera de normas de ciudad, parqueo, carriles o zonas restringidas. Si alguien menciona plate rules, pregunte qué regla aplica exactamente para esa placa y ese lugar. Traducir mentalmente desde pico y placa ayuda poco si la regla local funciona de otra manera."
        },
        {
          label: "El inglés no siempre duplica los registros del español",
          body:
            "Un colombiano puede sentir que falta una palabra porque “drive” cubre manejar y conducir. No falta. El inglés marca la situación con otros recursos: “driver's licence” en documentos, “Can you drive?” entre amigos, “drive carefully” como advertencia. El mismo verbo cambia de entorno sin volverse incorrecto."
        }
      ],
      pitfalls: [
        {
          mistake: "“I handle the car.”",
          whyItFails:
            "“Handle” no es el verbo normal para manejar un carro. Suena como controlar una máquina difícil o encargarse de un problema, no como conducir.",
          sayInstead: "I drive the car."
        },
        {
          mistake: "“Licence of conduction.”",
          whyItFails:
            "Es un calco de “licencia de conducción.” En inglés “conduction” suena a física, calor o electricidad.",
          sayInstead: "Driver's licence."
        },
        {
          mistake: "“I am driver today.”",
          whyItFails:
            "Para una profesión o papel singular, el inglés necesita artículo. Sin “the” o “a,” la frase queda con sabor fuerte de traducción.",
          sayInstead: "I'm the driver today."
        },
        {
          mistake: "“Drive with calm.”",
          whyItFails:
            "Se entiende, pero suena calcado de “con calma.” En una advertencia de carretera, el adverbio natural es “carefully.”",
          sayInstead: "Drive carefully."
        }
      ],
      variations: [
        {
          form: "Are you driving to Banff today?",
          register: "neutral practical",
          region: "Inglés universal",
          whenToUse: "En un mostrador, con un amigo o al confirmar la ruta de alguien."
        },
        {
          form: "Can you drive on mountain roads?",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Preguntar por habilidad real sin inventar un segundo verbo para manejar."
        },
        {
          form: "Can I see your driver's licence?",
          register: "official practical",
          region: "Inglés norteamericano",
          whenToUse: "Alquilar un carro, identificarse o hablar con una autoridad."
        },
        {
          form: "Check the plate rules before you leave.",
          register: "neutral practical",
          region: "Inglés universal",
          whenToUse: "Hablar de restricciones ligadas a la placa sin prometer que ese sea el nombre oficial."
        },
        {
          form: "Drive carefully on that road.",
          register: "neutral advice",
          region: "Inglés universal",
          whenToUse: "Dar una advertencia clara de seguridad sin sonar traducido."
        }
      ],
      prompt: "¿Por qué Paula usa “drive” donde el español colombiano distingue “conducir” y “manejar”?",
      choices: [
        "Porque “handle” es obligatorio para carros pequeños y buses urbanos.",
        "Porque “drive” cubre el verbo cotidiano y parte de la familia oficial.",
        "Porque “conduct” reemplaza a “drive” cuando el viaje cruza montañas."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál pregunta suena natural para saber si alguien maneja en carretera?",
          choices: [
            "Can you handle cars officially?",
            "Can you conduct small vehicles?",
            "Can you drive on mountain roads?"
          ],
          answer: 2,
          tests: "“drive” como verbo normal para manejar"
        },
        {
          prompt: "¿Cuál frase pertenece naturalmente a un mostrador de alquiler?",
          choices: [
            "your licence of conduction",
            "your driver's licence",
            "your handling permission"
          ],
          answer: 1,
          tests: "“driver's licence” en vez de un calco de “licencia de conducción”"
        },
        {
          prompt: "Jorge dice “I'm the driver today.” ¿Qué debe notar?",
          choices: [
            "La frase evita el verbo “drive” por ser informal.",
            "El artículo “the” marca el papel específico de hoy.",
            "La palabra “driver” sólo sirve para profesiones."
          ],
          answer: 1,
          tests: "el artículo necesario antes de un papel singular específico"
        },
        {
          prompt: "¿Cuál es una advertencia natural de seguridad en inglés?",
          choices: [
            "Drive with calm on that road.",
            "Conduct calmly by that road.",
            "Drive carefully on that road."
          ],
          answer: 2,
          tests: "“drive carefully” como advertencia natural"
        }
      ]
    }
  },
  {
    id: "montar-a-chiva-in-salento",
    level: "Developing · Getting around the country",
    skills: ["speaking", "listening", "context"],
    domain: "everyday life",
    register: "friendly informal",
    pathways: ["foundation", "year-12"],
    verb: "montar",
    review: "pending",
    es: {
      title: "Montar en chiva por la montaña de Salento",
      situation:
        "Estás en Salento, frente a una chiva colorida que sube por una carretera estrecha hacia una finca cafetera. La conductora no vende una postal: te explica dónde montarte, cuándo es mejor subirse, por qué no debes pararte en la curva y cómo la misma palabra “montar” también aparece lejos del transporte.",
      setting: {
        who: "Lina drives a chiva that carries visitors and locals up a rural road outside Salento. Casey wants the ride, but also wants to understand the verb that keeps appearing in different places.",
        what: "A boarding conversation around a mountain chiva, with side notes on “montar en,” “subirse a,” and the non-transport meanings of “montar.”",
        when: "Mid-afternoon, after rain has made the road shiny and the next group is gathering by the plaza.",
        where: "Salento, Quindío, on the road from the town toward coffee farms and viewpoints in the hills.",
        why: "Montar is useful far beyond buses. It covers getting on a vehicle or animal, riding certain things, setting up a project, and even the idiom for giving someone a hard time."
      },
      address: {
        form: "vos",
        who: "Lina uses vos with Casey after joking with the whole group. Casey can answer with tú or usted, but hearing vos matters.",
        why: "Vos is heard across parts of the Eje Cafetero, especially in relaxed speech. Here it marks warmth and local rhythm, not disrespect.",
        ifYouSwitch:
          "Usted would still be safe and respectful. Tú would be understood. The main risk is not using the wrong form, but failing to recognize “vos montás” when someone says it to you."
      },
      dialogue: [
        {
          speaker: "Casey",
          target: "¿Todavía puedo montar en la chiva, o ya salió?",
          translation: "Can I still get on the chiva, or has it already left?",
          pronunciation: "toh-da-BEE-a PWEH-doh mon-TAR en la CHEE-ba, oh ya sa-LYO",
          literal: "Still I-can mount in the chiva, or already it-left?",
          why: "“Montar en” is the structure for getting on or riding a vehicle in Colombian Spanish. This is not a city bus or metrocable scene; the chiva puts the same verb on a rural mountain road."
        },
        {
          speaker: "Lina",
          target: "Sí, montá atrás, pero agarrate bien cuando cojamos la curva.",
          translation: "Yes, get on in the back, but hold on tight when we take the curve.",
          pronunciation: "see, mon-TA a-TRAS, PEH-roh a-ga-RRA-teh byen KWAN-doh koh-HAH-mos la KOOR-ba",
          literal: "Yes, mount in-back, but grab-yourself well when we take the curve.",
          why: "“Montá” is the vos command. Even if you answer with another form, you need to understand it in places where vos is alive."
        },
        {
          speaker: "Casey",
          target: "¿Es lo mismo decir montarme que subirme a la chiva?",
          translation: "Is saying montarme the same as getting on the chiva?",
          pronunciation: "es lo MEES-moh deh-SEER mon-TAR-meh keh soo-BEER-meh a la CHEE-ba",
          literal: "Is the same to-say mount-myself than get-myself-up to the chiva?",
          why: "“Subirse a” focuses on the action of climbing or getting on. “Montar en” can mean board, ride, or travel on that thing. They overlap, but they do not feel identical."
        },
        {
          speaker: "Lina",
          target: "Se parecen. Vos te subís ahora, y después montás en chiva hasta la finca.",
          translation: "They are similar. You get on now, and then you ride by chiva to the farm.",
          pronunciation: "seh pa-REH-sen. bos teh soo-BEES a-OH-ra, ee des-PWES mon-TAS en CHEE-ba AS-ta la FEEN-ka",
          literal: "Themselves resemble. You get-yourself-up now, and after you ride in chiva until the farm.",
          why: "The contrast is practical: the boarding happens once; the ride continues. “Montás en chiva” describes the transport experience after you are already on."
        },
        {
          speaker: "Casey",
          target: "Ayer oí que un señor montó un negocio de café. ¿Ese montar es otro?",
          translation: "Yesterday I heard that a man set up a coffee business. Is that another montar?",
          pronunciation: "a-YER oh-EE keh oon seh-NYOR mon-TO oon neh-GOH-syoh deh ka-FEH. EH-seh mon-TAR es OH-troh",
          literal: "Yesterday I-heard that a man mounted a business of coffee. That montar is another?",
          why: "Yes: “montar un negocio” means to set one up. The verb moves from physically getting onto something to assembling a working operation."
        },
        {
          speaker: "Lina",
          target: "Sí, y si tus amigos se burlan mucho, decís que te la tienen montada.",
          translation: "Yes, and if your friends tease you too much, you say they have it in for you.",
          pronunciation: "see, ee see toos a-MEE-gos seh BOOR-lan MOO-choh, deh-SEES keh teh la TYEH-nen mon-TA-da",
          literal: "Yes, and if your friends mock themselves much, you say that to-you it they-have mounted.",
          why: "“Montársela a alguien” means to give someone a hard time or pick on them. It is idiomatic and informal, so learn it as a chunk, not as a mechanical extension of the vehicle meaning."
        }
      ],
      vocabulary: [
        {
          term: "montar en",
          explanation:
            "To get on or ride in a vehicle, or ride an animal or bike, depending on the object that follows.",
          literal: "to mount in/on",
          useWhen:
            "Talking about riding a bike, horse, motorcycle, chiva or other transport as an experience.",
          avoidWhen:
            "For entering buildings or rooms. “Monto en la oficina” sounds wrong unless the office is somehow a vehicle.",
          register: "neutral conversational",
          region: "Very natural in Colombia for vehicles, bikes, horses and motorcycles.",
          related: ["subirse a", "andar en", "ir en", "bajarse de"],
          example: {
            target: "¿Todavía puedo montar en la chiva?",
            translation: "Can I still get on the chiva?"
          }
        },
        {
          term: "subirse a",
          explanation:
            "To get onto something, with the climbing or boarding action in focus.",
          literal: "to get oneself up onto",
          useWhen:
            "The moment of getting on matters: onto a chiva, horse, motorcycle, stage or platform.",
          avoidWhen:
            "Describing the whole ride. Once you are already moving, “montar en” or “ir en” usually fits better.",
          register: "neutral conversational",
          region: "General Spanish; common in Colombia alongside “montar en.”",
          related: ["montarse", "abordar", "treparse", "subir"],
          example: {
            target: "Me subo a la chiva ahora.",
            translation: "I'm getting on the chiva now."
          }
        },
        {
          term: "chiva",
          explanation:
            "A colourful rural bus or truck-bus associated with mountain roads, towns and group outings.",
          literal: "goat",
          useWhen:
            "Referring to the vehicle, not just the party-bus stereotype foreigners may have seen in photos.",
          avoidWhen:
            "Assuming every chiva is a tourist performance. In rural areas it can be practical transport too.",
          register: "neutral",
          region: "Strongly associated with Colombia, especially rural and festive contexts.",
          related: ["bus escalera", "campero", "vereda", "finca"],
          example: {
            target: "Montamos en chiva hasta la finca.",
            translation: "We ride by chiva to the farm."
          }
        },
        {
          term: "montar un negocio",
          explanation:
            "To set up a business. The verb means putting the pieces together until the thing can operate.",
          literal: "to mount a business",
          useWhen:
            "Talking about starting a shop, café, company, stall, workshop or practical operation.",
          avoidWhen:
            "Confusing it with riding the business. The meaning is set up, not sit on.",
          register: "neutral conversational",
          region: "General Spanish and very natural in Colombia.",
          related: ["abrir un negocio", "armar", "organizar", "emprender"],
          example: {
            target: "Montó un negocio de café.",
            translation: "He set up a coffee business."
          }
        },
        {
          term: "montar una obra",
          explanation:
            "To stage or put on a play, exhibition or production. Again, the verb is about assembling something that works in public.",
          literal: "to mount a work",
          useWhen:
            "Talking about theatre, school events, performances or cultural programming.",
          avoidWhen:
            "Using it for simply writing the play. “Montar” is the production getting on its feet.",
          register: "neutral",
          region: "General Spanish; common in arts and school contexts in Colombia.",
          related: ["presentar", "ensayar", "producir", "poner en escena"],
          example: {
            target: "El colegio montó una obra.",
            translation: "The school put on a play."
          }
        },
        {
          term: "montársela a alguien",
          explanation:
            "To pick on someone, give them a hard time or keep needling them. It is informal and idiomatic.",
          literal: "to mount it on someone",
          useWhen:
            "Complaining that friends, siblings or coworkers are repeatedly teasing or pressuring one person.",
          avoidWhen:
            "Formal complaints, serious harassment or legal contexts. Then use clearer language like “acosar” or “hostigar.”",
          register: "informal",
          region: "Common Colombian Spanish; tone depends heavily on context.",
          related: ["molestar", "burlarse", "coger de parche", "hostigar"],
          example: {
            target: "Mis amigos me la tienen montada.",
            translation: "My friends are giving me a hard time."
          }
        },
        {
          term: "agarrate bien",
          explanation:
            "Hold on tight, in vos command form. It is practical advice when the road, animal or vehicle may jolt.",
          literal: "grab yourself well",
          useWhen:
            "Someone is about to move, turn, speed up or hit a rough patch, and you want them stable.",
          avoidWhen:
            "Writing formal safety instructions. There you would likely see “sujétese bien” or “agárrese bien.”",
          register: "friendly informal",
          region: "Vos command heard in voseo areas, including parts of the Eje Cafetero.",
          related: ["agárrese", "sujétese", "tené cuidado", "no te soltés"],
          example: {
            target: "Agarrate bien cuando cojamos la curva.",
            translation: "Hold on tight when we take the curve."
          }
        }
      ],
      note:
        "The trap with “montar” is trying to reduce it to one English verb. Sometimes it is get on, sometimes ride, sometimes set up, sometimes stage, and sometimes give someone a hard time. The object tells you which meaning is alive. “Montar en chiva,” “montar un negocio,” and “te la tienen montada” are not random; they are the same verb travelling through different frames.",
      culture: [
        {
          label: "A chiva is more than a postcard",
          body:
            "Foreigners often meet chivas as colourful party vehicles, but the rural image comes from practical transport on difficult roads. Around mountain towns, the vehicle can carry tourists, sacks, neighbours and errands in the same afternoon. Treating it only as decoration misses why the verb “montar” feels so physical here."
        },
        {
          label: "Salento gives you mountain Spanish, not a neutral classroom",
          body:
            "In the Eje Cafetero you may hear vos forms like “montá” and “agarrate.” You do not have to adopt them instantly, but you do need to recognize them. A traveller who expects only textbook tú can understand the route and still miss the instruction that keeps them from wobbling on the curve."
        },
        {
          label: "Transport verbs stretch into daily life",
          body:
            "Spanish often lets a physical verb move into organization and social pressure. A business gets mounted because its pieces are assembled; a play gets mounted because it is put on its feet; a joke gets mounted on someone because the group keeps pressing it there. The extensions are vivid, but they are not fake slang."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “montar” for entering any place",
          whyItFails:
            "“Montar en” wants a vehicle, animal or rideable thing. For a shop, office or house, use “entrar” or a more specific verb.",
          sayInstead: "Entro a la tienda."
        },
        {
          mistake: "Treating “subirse a” and “montar en” as perfect twins",
          whyItFails:
            "They overlap at boarding, but “subirse” highlights getting on, while “montar en” can describe the ride that follows.",
          sayInstead: "Me subo ahora; monto en chiva hasta la finca."
        },
        {
          mistake: "Translating “montó un negocio” as “he rode a business”",
          whyItFails:
            "The object changes the frame. With a business, “montar” means set up, assemble and get running.",
          sayInstead: "He set up a business."
        },
        {
          mistake: "Using “montársela” in a formal complaint",
          whyItFails:
            "The idiom is informal and can sound like ordinary teasing. For serious pressure or harassment, clearer formal words protect the meaning.",
          sayInstead: "Me están hostigando."
        }
      ],
      variations: [
        {
          form: "¿Puedo montar en la chiva?",
          register: "neutral conversational",
          region: "Colombia",
          whenToUse: "Asking whether you can get on or ride in the vehicle."
        },
        {
          form: "Me subo a la chiva ahora.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "Focusing on the immediate act of boarding."
        },
        {
          form: "Montamos en chiva hasta la finca.",
          register: "neutral conversational",
          region: "Colombia",
          whenToUse: "Describing the ride as transport after everyone is already on."
        },
        {
          form: "Ella montó un negocio de café.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "Talking about setting up a practical operation or company."
        },
        {
          form: "Mis primos me la tienen montada.",
          register: "informal",
          region: "Colombia",
          whenToUse: "Complaining casually that people keep teasing or picking on you."
        }
      ],
      prompt: "In the chiva scene, why is “montar” not just one English verb?",
      choices: [
        "Because it is only correct for horses and never works with vehicles.",
        "Because the object changes it from boarding to riding, setting up or teasing.",
        "Because it is a formal verb that rural drivers avoid in conversation."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence focuses on the act of getting onto the chiva right now?",
          choices: [
            "Monto un negocio de chiva.",
            "Me la tienen montada.",
            "Me subo a la chiva ahora."
          ],
          answer: 2,
          tests: "“subirse a” for the immediate boarding action"
        },
        {
          prompt: "Which sentence describes the ride to the farm?",
          choices: [
            "Montamos una obra hasta la finca.",
            "Montamos en chiva hasta la finca.",
            "Montamos el negocio hasta la finca."
          ],
          answer: 1,
          tests: "“montar en” for riding in transport"
        },
        {
          prompt: "What does “montó un negocio de café” mean?",
          choices: [
            "He rode a coffee business.",
            "He boarded a coffee counter.",
            "He set up a coffee business."
          ],
          answer: 2,
          tests: "“montar” as setting up an operation"
        },
        {
          prompt: "If Lina says “montá atrás,” what should you recognize?",
          choices: [
            "A vos command telling you to get on in the back.",
            "A tú question asking whether you already got off.",
            "An usted warning that the chiva has left."
          ],
          answer: 0,
          tests: "recognizing the vos command form “montá”"
        }
      ]
    },
    en: {
      title: "Montar en chiva por la montaña de Salento",
      situation:
        "Usted está en una zona rural de Vermont, frente a un camión abierto que sube por una carretera estrecha hacia una granja. La conductora no vende una postal: le explica dónde subirse, cuándo decir “get on,” cuándo decir “ride,” y por qué “set up” sirve para un negocio aunque en español aparezca el mismo verbo “montar.”",
      setting: {
        who: "Lina maneja un vehículo rural que lleva visitantes y vecinos por una carretera de montaña. Catalina quiere el paseo, pero también quiere entender por qué el inglés reparte “montar” entre varios verbos.",
        what: "Una conversación al abordar un vehículo rural, con contraste entre “get on,” “ride,” “set up,” “put on” y “pick on.”",
        when: "A media tarde, después de una lluvia que dejó brillante la carretera y mientras se reúne el próximo grupo.",
        where: "Una zona de granjas en Vermont, con una ruta estrecha hacia una finca y miradores en la montaña.",
        why: "El español permite que “montar” cubra transporte, negocios, obras y bromas pesadas. El inglés obliga a escoger el verbo según el objeto y la situación."
      },
      address: {
        form: "mixed",
        who: "Lina y Catalina usan nombres de pila y el mismo “you,” aunque Lina dé instrucciones claras al grupo.",
        why: "El inglés no marca vos, tú o usted en el pronombre. La cercanía sale del tono, de frases cortas como “hold on,” y de no usar títulos innecesarios.",
        ifYouSwitch:
          "No hay cambio de pronombre. Para suavizar una instrucción, Lina puede añadir “please”; para hacerla urgente, usa el imperativo corto."
      },
      dialogue: [
        {
          speaker: "Catalina",
          target: "Can I still get on the truck, or did it leave already?",
          translation: "¿Todavía puedo montarme en el camión, o ya salió?",
          pronunciation: "kan ai stil get on da trok, or did it liv ol-RE-di",
          literal: "¿Puedo todavía conseguir en el camión, o dejó ya?",
          why: "Para el momento de subirse, el inglés usa “get on.” No diga “mount” salvo en contextos muy específicos como un caballo, una bici o un lenguaje técnico."
        },
        {
          speaker: "Lina",
          target: "Yes, get on in the back, but hold on when we take the curve.",
          translation: "Sí, móntese atrás, pero agárrese cuando cojamos la curva.",
          pronunciation: "yes, get on in da bak, bot jold on uen ui teik da kerv",
          literal: "Sí, consiga en la parte de atrás, pero sostenga en cuando tomemos la curva.",
          why: "“Hold on” es la instrucción natural cuando el vehículo va a moverse o sacudirse. La partícula “on” no se traduce sola; la frase completa significa agarrarse."
        },
        {
          speaker: "Catalina",
          target: "Is getting on the same as riding the truck?",
          translation: "¿Subirse es lo mismo que montar en el camión?",
          pronunciation: "is GET-ing on da seim as RAI-ding da trok",
          literal: "¿Consiguiendo en es lo mismo que montando el camión?",
          why: "La pregunta muestra la separación que el inglés exige. “Getting on” es el instante de abordar; “riding” es la experiencia de ir en el vehículo."
        },
        {
          speaker: "Lina",
          target: "They're close. You get on now, and then you ride to the farm.",
          translation: "Se parecen. Usted se sube ahora, y luego monta hasta la finca.",
          pronunciation: "deir klous. yu get on nau, and den yu raid tu da farm",
          literal: "Ellos son cercanos. Usted consigue en ahora, y después monta a la granja.",
          why: "“Ride to the farm” sirve porque usted va como pasajera. Si usted fuera quien maneja, diría “drive to the farm.”"
        },
        {
          speaker: "Catalina",
          target: "Yesterday I heard someone set up a coffee business. Is that related?",
          translation: "Ayer oí que alguien montó un negocio de café. ¿Eso está relacionado?",
          pronunciation: "YES-ter-dei ai jerd SOM-wan set op a KO-fi BIZ-nes. is dat ri-LEI-ted",
          literal: "Ayer oí alguien poner arriba un negocio de café. ¿Es eso relacionado?",
          why: "Con negocios, el inglés no usa “mount” en conversación normal. Usa “set up,” que significa organizar las piezas hasta que la operación funciona."
        },
        {
          speaker: "Lina",
          target: "Yes, and if your friends keep teasing you, say they're picking on you.",
          translation: "Sí, y si sus amigos siguen molestándola, diga que se la están montando.",
          pronunciation: "yes, and if yor frends kip TIZ-ing yu, sei deir PIK-ing on yu",
          literal: "Sí, y si sus amigos siguen burlando usted, diga ellos están recogiendo en usted.",
          why: "“Pick on someone” cubre la idea informal de montársela a alguien. No intente traducirla con “mount it on me,” porque nadie entenderá el idiomático colombiano."
        }
      ],
      vocabulary: [
        {
          term: "get on",
          explanation:
            "Subirse a un vehículo, animal o plataforma. Enfatiza el momento de abordar.",
          literal: "conseguir en",
          useWhen:
            "Cuando la acción de subirse importa: a un bus, tren, camión, caballo, bicicleta o escenario.",
          avoidWhen:
            "Para describir todo el trayecto. Una vez va en movimiento, “ride” suele ser mejor.",
          register: "neutral conversational",
          region: "Inglés universal; también existe “get in” para carros y taxis cerrados.",
          related: ["board", "climb on", "hop on", "get in"],
          example: {
            target: "Can I still get on the truck?",
            translation: "¿Todavía puedo montarme en el camión?"
          }
        },
        {
          term: "ride",
          explanation:
            "Ir como pasajero o montar algo como bicicleta, moto o caballo, según el objeto.",
          literal: "montar / ir en",
          useWhen:
            "Para hablar de la experiencia de ir en un vehículo, o de montar bici, moto o caballo.",
          avoidWhen:
            "Si usted es quien conduce un carro. Ahí el verbo normal es “drive,” no “ride.”",
          register: "neutral conversational",
          region: "Inglés universal; “ride” también puede ser sustantivo: un paseo o un aventón.",
          related: ["rider", "take a ride", "passenger", "drive"],
          example: {
            target: "You ride to the farm.",
            translation: "Usted monta hasta la finca."
          }
        },
        {
          term: "truck",
          explanation:
            "Camión o camioneta, según el país y el vehículo. En esta escena es el vehículo rural abierto.",
          literal: "camión",
          useWhen:
            "Para nombrar un vehículo de carga o un vehículo rural adaptado al transporte.",
          avoidWhen:
            "Suponer que traduce siempre “chiva.” Una chiva colombiana tiene historia y forma propia; “truck” sólo resuelve esta escena en inglés.",
          register: "neutral",
          region: "Inglés norteamericano; en inglés británico “lorry” puede aparecer para camión.",
          related: ["pickup", "lorry", "farm vehicle", "open truck"],
          example: {
            target: "Get on the truck in the back.",
            translation: "Súbase al camión por atrás."
          }
        },
        {
          term: "set up a business",
          explanation:
            "Montar un negocio: organizarlo, abrirlo y dejarlo funcionando.",
          literal: "poner arriba un negocio",
          useWhen:
            "Para hablar de abrir una tienda, café, empresa, puesto o taller.",
          avoidWhen:
            "Usar “mount a business” en conversación normal. Suena técnico o extraño, no como inglés cotidiano.",
          register: "neutral conversational",
          region: "Inglés universal; “start a business” también es muy común.",
          related: ["start a business", "open a shop", "launch", "organize"],
          example: {
            target: "She set up a coffee business.",
            translation: "Ella montó un negocio de café."
          }
        },
        {
          term: "put on a play",
          explanation:
            "Montar una obra de teatro o presentar una producción.",
          literal: "poner sobre una obra",
          useWhen:
            "Al hablar de teatro escolar, eventos culturales, presentaciones o producciones comunitarias.",
          avoidWhen:
            "Traducir “montar una obra” como “mount a work” en conversación común. No suena natural para una obra escolar o comunitaria.",
          register: "neutral",
          region: "Inglés universal; en contextos artísticos también se ve “stage a play.”",
          related: ["stage a play", "perform", "produce", "rehearse"],
          example: {
            target: "The school put on a play.",
            translation: "El colegio montó una obra."
          }
        },
        {
          term: "pick on someone",
          explanation:
            "Molestar repetidamente a alguien, burlarse o montársela en tono informal.",
          literal: "recoger en alguien",
          useWhen:
            "Para decir que amigos, hermanos o compañeros están fastidiando a una persona una y otra vez.",
          avoidWhen:
            "Situaciones graves de acoso donde conviene una palabra más clara como “harass” o “bully.”",
          register: "informal",
          region: "Inglés universal; puede sonar leve o serio según el contexto.",
          related: ["tease", "make fun of", "bully", "give someone a hard time"],
          example: {
            target: "My friends are picking on me.",
            translation: "Mis amigos me la tienen montada."
          }
        },
        {
          term: "hold on",
          explanation:
            "Agarrarse o sujetarse. La frase aparece cuando algo se mueve, se sacude o requiere estabilidad.",
          literal: "sostener en",
          useWhen:
            "Antes de una curva, un frenazo, una subida o cualquier momento en que alguien puede perder el equilibrio.",
          avoidWhen:
            "Traducir palabra por palabra como “hold yourself well.” Eso puede entenderse, pero no es la frase natural.",
          register: "neutral conversational",
          region: "Inglés universal; también significa esperar un momento en llamadas o conversaciones.",
          related: ["hang on", "grab on", "be careful", "don't let go"],
          example: {
            target: "Hold on when we take the curve.",
            translation: "Agárrese cuando cojamos la curva."
          }
        }
      ],
      note:
        "La trampa con “montar” es buscar un solo verbo inglés. A veces será “get on,” a veces “ride,” a veces “set up,” a veces “put on,” y a veces “pick on.” El objeto le dice cuál sentido está vivo. “Ride the truck,” “set up a business” y “they're picking on me” no son traducciones caprichosas; son la manera en que el inglés reparte los marcos que el español agrupa.",
      culture: [
        {
          label: "No todo vehículo rural se traduce igual",
          body:
            "Una chiva colombiana tiene una historia cultural que “truck” no carga. En esta escena inglesa se usa otro vehículo rural para enseñar la decisión verbal, no para borrar la diferencia. Cuando traduzca cultura, separe dos tareas: explicar el objeto real y escoger el verbo natural de la frase."
        },
        {
          label: "El inglés prefiere partículas cortas",
          body:
            "“Get on,” “hold on” y “pick on” parecen frases pequeñas, pero cada partícula cambia el sentido. Para un hispanohablante, la tentación es traducir el verbo fuerte y olvidar la partícula. En la vida real, esa partícula es la mitad de la instrucción."
        },
        {
          label: "Los verbos físicos también se vuelven sociales",
          body:
            "El español lleva “montar” hacia negocios, obras y bromas pesadas. El inglés también estira verbos físicos, pero no siempre los mismos: “set up” arma una operación, “put on” presenta una obra, “pick on” presiona a una persona. Aprender la frase completa evita traducciones que parecen chistes involuntarios."
        }
      ],
      pitfalls: [
        {
          mistake: "“I mount on the truck.”",
          whyItFails:
            "“Mount” no es el verbo cotidiano para subirse a un vehículo en esta escena. Suena técnico, antiguo o limitado a caballo, bici y contextos específicos.",
          sayInstead: "I get on the truck."
        },
        {
          mistake: "“I ride the car to the farm.”",
          whyItFails:
            "Si usted conduce el carro, dice “drive.” “Ride” funciona si va como pasajero o si el objeto es bici, moto o caballo.",
          sayInstead: "I drive the car to the farm."
        },
        {
          mistake: "“She mounted a coffee business.”",
          whyItFails:
            "Es demasiado literal para conversación normal. El inglés usa “set up” o “started” para un negocio.",
          sayInstead: "She set up a coffee business."
        },
        {
          mistake: "“They mounted it on me.”",
          whyItFails:
            "No transmite la idea colombiana de “me la tienen montada.” La frase idiomática inglesa es distinta.",
          sayInstead: "They're picking on me."
        }
      ],
      variations: [
        {
          form: "Can I get on the truck?",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Preguntar si puede subirse o abordar el vehículo."
        },
        {
          form: "I ride to the farm in the back.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Describir el trayecto como pasajera, no como conductora."
        },
        {
          form: "She set up a coffee business.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Hablar de montar un negocio sin usar un calco de “montar.”"
        },
        {
          form: "The school put on a play.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Decir que una escuela montó o presentó una obra."
        },
        {
          form: "My cousins are picking on me.",
          register: "informal",
          region: "Inglés universal",
          whenToUse: "Quejarse de que alguien se la tiene montada a usted en tono informal."
        }
      ],
      prompt: "En esta escena, ¿por qué “montar” no se vuelve un solo verbo inglés?",
      choices: [
        "Porque el objeto exige elegir entre abordar, montar, organizar o molestar.",
        "Porque “mount” sólo es correcto con caballos y nunca con bicicletas.",
        "Porque “ride” es formal y los conductores rurales lo evitan siempre."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase enfoca el acto de subirse al camión ahora?",
          choices: [
            "I get on the truck now.",
            "I set up the truck now.",
            "I pick on the truck now."
          ],
          answer: 0,
          tests: "“get on” para el acto inmediato de abordar"
        },
        {
          prompt: "¿Cuál frase describe el trayecto como pasajera?",
          choices: [
            "I ride to the farm in the back.",
            "I put on the farm in the back.",
            "I set up to the farm in back."
          ],
          answer: 0,
          tests: "“ride” para ir como pasajera"
        },
        {
          prompt: "¿Qué significa “She set up a coffee business”?",
          choices: [
            "Ella montó un negocio de café.",
            "Ella se subió a un café.",
            "Ella molestó a un negocio."
          ],
          answer: 0,
          tests: "“set up” como montar un negocio"
        },
        {
          prompt: "Si alguien dice “They're picking on me,” ¿qué expresa?",
          choices: [
            "Que se la tienen montada.",
            "Que la están subiendo.",
            "Que montaron una obra."
          ],
          answer: 0,
          tests: "“pick on someone” para montársela a alguien"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/25-developing-getting-around-the-country.js");
