/*
 * Lesson block: developing / planning a trip.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Most lessons here spine on exactly one verb from data/curriculum.js, named in
 * their `verb` field so the coverage report can prove the curriculum is
 * actually taught rather than merely listed. The added grammar lesson spines on
 * `por-vs-para` from data/structures.js instead, closing the measured gap of
 * 312 corpus uses with no lesson contrasting the two.
 */
lessons.push(
  {
    id: "reserving-rooms-for-mompox-weekend",
    level: "Developing · Planning a trip",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "courteous",
    pathways: ["independent"],
    verb: "reservar",
    review: "pending",
    es: {
      title: "Booking rooms for a weekend in Mompox",
      situation:
        "You want to spend a weekend in Mompox with two friends and call a posada before buying the tickets. You need to reserve clearly, but also understand when people say apartar instead of reservar.",
      setting: {
        who: "Laura runs a small family posada and answers the phone between check-ins. Alex is organizing a weekend with two friends and wants the rooms held before making the rest of the plan.",
        what: "A practical booking call: dates, number of rooms, breakfast, a confirmation message and the difference between a formal reservation and a casual hold.",
        when: "A Wednesday afternoon, two weeks before a long weekend when the town is starting to fill up.",
        where: "Mompox, Bolívar, at a restored colonial house near the river, away from the usual big-city lesson settings.",
        why: "Because “reservar” is correct and understood, especially for lodging, but Colombians also say “apartar” constantly for holding a table, seat, room or ticket. A learner needs both verbs to understand real planning talk."
      },
      address: {
        form: "usted",
        who: "Laura and Alex use usted on the phone because this is a service call between people who do not know each other.",
        why: "Usted keeps the call efficient and respectful without sounding cold. In Colombian customer service, warmth comes through tone, diminutives and helpful wording, not through switching to tú.",
        ifYouSwitch:
          "Tú would sound over-familiar before they have met. Vos would be out of place here and would distract from the simple job of securing the rooms."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Buenas tardes. Quisiera reservar dos cuartos para el puente.",
          translation: "Good afternoon. I would like to reserve two rooms for the long weekend.",
          pronunciation: "BWEH-nas TAR-des. kee-SYEH-rah reh-ser-BAR dos KWAR-tos PAH-rah el PWEN-teh",
          literal: "Good afternoons. I-would-like to-reserve two rooms for the bridge.",
          why: "“Quisiera reservar” is polished without being stiff. For a hotel or posada, “reservar” is exactly the verb you want, especially when money and dates are involved."
        },
        {
          speaker: "Laura",
          target: "Claro, señor. ¿Para cuántas noches quiere reservar?",
          translation: "Of course, sir. For how many nights do you want to reserve?",
          pronunciation: "KLAH-roh, seh-NYOR. PAH-rah KWAN-tas NOH-ches KYEH-reh reh-ser-BAR",
          literal: "Clear, sir. For how many nights want-you to-reserve?",
          why: "The service rhythm repeats the verb because the booking is the point. In writing, on hotel sites and on the phone, “reservar” sounds normal and precise."
        },
        {
          speaker: "Alex",
          target: "Dos noches. ¿Me puede apartar una habitación doble y una sencilla?",
          translation: "Two nights. Can you hold one double room and one single room for me?",
          pronunciation: "dos NOH-ches. meh PWEH-deh ah-par-TAR OO-nah ah-bee-tah-SYON DOH-bleh ee OO-nah sen-SEE-yah",
          literal: "Two nights. Can-you for-me set-aside a room double and one simple?",
          why: "Now the real Colombian verb appears: “apartar” means hold or set aside. It is less formal than “reservar” and extremely common when someone is asking a person to keep something for them."
        },
        {
          speaker: "Laura",
          target: "Se la aparto hasta las seis, pero para confirmar hay que hacer el abono.",
          translation: "I'll hold it for you until six, but to confirm we need a deposit.",
          pronunciation: "seh lah ah-PAR-toh AHS-tah las seis, PEH-roh PAH-rah kon-feer-MAR eye keh ah-SER el ah-BOH-noh",
          literal: "For-you it I-hold until six, but to confirm one-must make the deposit.",
          why: "This line gives the split: “apartar” can be a temporary hold, while “confirmar” with an “abono” turns the hold into a real booking."
        },
        {
          speaker: "Alex",
          target: "Perfecto. Entonces reservo formalmente apenas me mande los datos.",
          translation: "Perfect. Then I'll reserve formally as soon as you send me the details.",
          pronunciation: "per-FEK-toh. en-TON-ses reh-SER-boh for-mal-MEN-teh ah-PEH-nas meh MAN-deh los DAH-tos",
          literal: "Perfect. Then I-reserve formally as-soon-as you-send me the details.",
          why: "“Reservo formalmente” sounds deliberate: Alex understands that the hold is not the final reservation until the deposit details arrive."
        },
        {
          speaker: "Laura",
          target: "Listo. Le envío la confirmación por WhatsApp para que quede reservado.",
          translation: "Done. I'll send you the confirmation by WhatsApp so it stays reserved.",
          pronunciation: "LEES-toh. leh en-BEE-oh lah kon-feer-ma-SYON por WAH-tsap PAH-rah keh KEH-deh reh-ser-BAH-doh",
          literal: "Ready. To-you I-send the confirmation by WhatsApp so that it-stays reserved.",
          why: "“Quedar reservado” is the result state: the rooms are now secured. The WhatsApp confirmation is the paper trail Colombian small businesses often use."
        }
      ],
      vocabulary: [
        {
          term: "reservar",
          explanation:
            "To reserve or book something in advance. It is safe, standard and especially natural for hotels, restaurants in writing, tours and formal confirmations.",
          literal: "to reserve",
          useWhen:
            "You are dealing with dates, names, deposits, online forms, hotel rooms, tours, appointments or anything that needs a formal record.",
          avoidWhen:
            "You are only asking someone to hold a seat, table or ticket casually. Colombians often reach for “apartar” in that moment, and hearing it should not surprise you.",
          register: "neutral to formal",
          region: "General Spanish; fully understood in Colombia.",
          related: ["apartar", "confirmar", "hacer una reserva", "dejar reservado"],
          example: {
            target: "Quisiera reservar dos cuartos para el puente.",
            translation: "I would like to reserve two rooms for the long weekend."
          }
        },
        {
          term: "apartar",
          explanation:
            "To hold or set aside. In Colombia it is very common for tables, seats, tickets, rooms and items in a shop, especially when the arrangement is person-to-person.",
          literal: "to set apart",
          useWhen:
            "You want someone to keep something for you before you pay, arrive or confirm: “¿me aparta una mesa?”, “aparté los tiquetes.”",
          avoidWhen:
            "You need a formal written booking for a hotel website, airline or institution. There, “reservar” is cleaner.",
          register: "neutral conversational",
          region: "Very common Colombian Spanish.",
          related: ["reservar", "guardar", "separar", "tener listo"],
          example: {
            target: "¿Me puede apartar una habitación doble?",
            translation: "Can you hold a double room for me?"
          }
        },
        {
          term: "el puente",
          explanation:
            "A long weekend, literally a bridge between a holiday and the weekend. Colombian travel planning often starts by asking which puente is coming.",
          literal: "the bridge",
          useWhen:
            "Talking about holiday weekends when hotels, buses and restaurants may fill up.",
          avoidWhen:
            "You mean an actual bridge over a river; the travel calendar context makes the long-weekend meaning clear.",
          register: "neutral",
          region: "General Spanish in countries that use the term; very common in Colombia.",
          related: ["festivo", "fin de semana largo", "temporada alta", "viaje corto"],
          example: {
            target: "Quisiera reservar para el puente.",
            translation: "I would like to book for the long weekend."
          }
        },
        {
          term: "habitación doble / sencilla",
          explanation:
            "Hotel room categories: a double room for two people, and a single room for one. “Cuarto” is conversational; “habitación” is more hotel-register.",
          literal: "double / simple room",
          useWhen:
            "Clarifying exactly what kind of lodging you need before anyone charges you.",
          avoidWhen:
            "You are talking about a bedroom in a home; then “cuarto” or “pieza” may sound more natural depending on region.",
          register: "neutral hotel register",
          region: "General Spanish.",
          related: ["cuarto", "cama doble", "cama sencilla", "hospedaje"],
          example: {
            target: "Una habitación doble y una sencilla.",
            translation: "One double room and one single room."
          }
        },
        {
          term: "hacer el abono",
          explanation:
            "To pay a deposit. An “abono” is a partial payment that makes the booking serious without paying the whole amount yet.",
          literal: "to make the deposit",
          useWhen:
            "A hotel, vendor or guide asks for money to confirm what they are holding for you.",
          avoidWhen:
            "You are paying the full amount immediately. Then say “pagar todo” or name the total.",
          register: "neutral",
          region: "Common Colombian business Spanish.",
          related: ["depósito", "anticipo", "confirmar", "saldo"],
          example: {
            target: "Para confirmar hay que hacer el abono.",
            translation: "To confirm we need a deposit."
          }
        },
        {
          term: "quedar reservado",
          explanation:
            "To end up reserved or stay reserved. “Quedar” focuses on the resulting state after the call, payment or message.",
          literal: "to remain reserved",
          useWhen:
            "You want proof that the room, table or ticket is now secured in your name.",
          avoidWhen:
            "You are still only asking about availability. First ask whether there is space; then make it “quedar reservado.”",
          register: "neutral",
          region: "General Spanish.",
          related: ["estar confirmado", "quedar apartado", "tener cupo", "dejar listo"],
          example: {
            target: "Para que quede reservado.",
            translation: "So it stays reserved."
          }
        },
        {
          term: "mandar los datos",
          explanation:
            "To send the details: account number, price, address, check-in time or whatever the other person needs to finish the booking.",
          literal: "to send the data",
          useWhen:
            "A small business confirms by WhatsApp and needs to pass practical information quickly.",
          avoidWhen:
            "You need formal documents or contracts. Then ask for “la información” or “la confirmación por escrito.”",
          register: "neutral conversational",
          region: "General Colombian.",
          related: ["enviar la información", "pasar el número", "confirmar por WhatsApp", "dejar constancia"],
          example: {
            target: "Apenas me mande los datos.",
            translation: "As soon as you send me the details."
          }
        }
      ],
      note:
        "Do not teach yourself that “reservar” is the only verb. It is the right verb for formal booking, especially hotels and written confirmations, but Colombian daily speech often uses “apartar” for the human act of holding something aside. The useful skill is hearing the stage of the arrangement: availability, hold, deposit, confirmation.",
      culture: [
        {
          label: "WhatsApp is the booking desk",
          body:
            "Small Colombian hotels and guesthouses often move from a phone call to WhatsApp for prices, account details and confirmation. That does not make the booking unserious; it is the working paper trail. Ask for the message and keep it."
        },
        {
          label: "A hold is not always a reservation",
          body:
            "When someone says “se lo aparto hasta las seis,” they may be doing you a favor, not creating a guaranteed booking. The deposit or confirmation is what changes the social promise into something firmer."
        },
        {
          label: "Puentes fill small towns",
          body:
            "A long weekend can change a quiet river town into a full one. Reserving early is not nervous tourist behavior; it is common sense when every family has noticed the same holiday on the calendar."
        },
        {
          label: "Formal and warm can coexist",
          body:
            "Usted, señor, abono and confirmación sound formal, but the call can still be warm. Colombian service Spanish often mixes respectful forms with practical friendliness rather than choosing one mood."
        }
      ],
      pitfalls: [
        {
          mistake: "Thinking Colombians only say “reservar”",
          whyItFails:
            "You will hear “apartar” constantly for holding tables, seats, rooms or tickets. If you only know “reservar,” real conversations sound like they changed topic.",
          sayInstead: "Use “reservar” for formal booking and expect “apartar” for a hold."
        },
        {
          mistake: "Treating “apartado” as fully paid and guaranteed",
          whyItFails:
            "An item or room can be held temporarily without being confirmed. Ask what is needed to confirm it, especially in busy weekends.",
          sayInstead: "¿Con el abono queda reservado?"
        },
        {
          mistake: "Reading “puente” as a literal bridge in travel planning",
          whyItFails:
            "The calendar context points to a long weekend, not a structure over the river. Missing that meaning makes the whole timing of the booking confusing.",
          sayInstead: "Reservar para el puente means book for the long weekend."
        },
        {
          mistake: "Using tú on the first hotel call because the owner sounds kind",
          whyItFails:
            "Kindness is not an invitation to drop usted. On a service call with a stranger, usted keeps the business clear and respectful.",
          sayInstead: "Quisiera reservar, or ¿me puede apartar?"
        }
      ],
      variations: [
        {
          form: "Quisiera reservar dos cuartos.",
          register: "polite practical",
          region: "General Colombian",
          whenToUse: "Opening a hotel or guesthouse call with clear dates and numbers."
        },
        {
          form: "¿Me puede apartar una mesa?",
          register: "neutral conversational",
          region: "Very common Colombian",
          whenToUse: "Asking a person to hold something for you before you arrive or confirm."
        },
        {
          form: "Con el abono queda reservado.",
          register: "neutral business",
          region: "General Colombian",
          whenToUse: "Explaining that the deposit turns the hold into a confirmed booking."
        },
        {
          form: "Le mando los datos por WhatsApp.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "Moving a practical booking from a call to written details."
        },
        {
          form: "¿Tiene cupo para el puente?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Checking availability before asking anyone to reserve or hold anything."
        }
      ],
      prompt: "Laura says “se la aparto hasta las seis.” What is the status of the room?",
      choices: [
        "It is being held temporarily, but still needs confirmation.",
        "It is fully paid and cannot be changed by anyone now.",
        "It is unavailable because another guest already arrived."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which opening best fits a polite hotel call?",
          choices: [
            "Quisiera reservar dos cuartos para el puente.",
            "Apartame eso ahí sin decirme cuánto cuesta.",
            "Guárdeme cualquier cama cuando usted pueda."
          ],
          answer: 0,
          tests: "reservar as the formal lodging verb"
        },
        {
          prompt: "Which sentence shows the Colombian everyday verb for holding something?",
          choices: [
            "¿Me puede apartar una mesa hasta las ocho?",
            "¿Me puede borrar una mesa hasta las ocho?",
            "¿Me puede visitar una mesa hasta las ocho?"
          ],
          answer: 0,
          tests: "apartar as hold or set aside"
        },
        {
          prompt: "What does “para el puente” mean in this booking call?",
          choices: [
            "For the room nearest the town bridge.",
            "For the holiday long weekend.",
            "For the cheapest bed available."
          ],
          answer: 1,
          tests: "puente as long weekend"
        },
        {
          prompt: "Which question checks that the hold becomes a real booking?",
          choices: [
            "¿Con el abono queda reservado?",
            "¿Con el mapa queda perdido?",
            "¿Con el clima queda abierto?"
          ],
          answer: 0,
          tests: "abono plus quedar reservado"
        }
      ]
    },
    en: {
      title: "Reservar cuartos para un fin de semana en Miami",
      situation:
        "Usted organiza un fin de semana en Miami con dos amigos y llama a un hotel pequeño antes de comprar otros planes. Necesita distinguir book, reserve y hold sin traducir mecánicamente apartar.",
      setting: {
        who: "Laura atiende la recepción de un hotel familiar. Alejandro organiza el fin de semana con dos amigos y quiere asegurar las habitaciones antes de cerrar el resto.",
        what: "Una llamada práctica de reserva: fechas, número de cuartos, desayuno, mensaje de confirmación y la diferencia entre reservar formalmente y sostener algo por unas horas.",
        when: "Un miércoles por la tarde, dos semanas antes de un fin de semana largo en que los hoteles empiezan a llenarse.",
        where: "Miami, en un hotel pequeño cerca de Little Havana, donde la llamada ocurre en inglés aunque parte del personal sea bilingüe.",
        why: "Porque el inglés reparte lo que en español puede sonar como reservar o apartar: “book” es reservar, “reserve” también sirve, y “hold” es apartar temporalmente."
      },
      address: {
        form: "mixed",
        who: "Laura y Alejandro no se conocen. En inglés ambos usan “you”; la cortesía sale de “would like,” “could you” y el tono de servicio.",
        why: "El inglés no tiene usted, así que una llamada formal se arma con verbos modales y frases completas. “I would like to book” suena más cuidado que “I want rooms.”",
        ifYouSwitch:
          "No hay cambio de pronombre. Agregar “ma'am” cada dos frases puede sonar exagerado; basta con una formulación clara y cortés."
      },
      dialogue: [
        {
          speaker: "Alejandro",
          target: "Good afternoon. I'd like to book two rooms for the long weekend.",
          translation: "Buenas tardes. Quisiera reservar dos cuartos para el puente.",
          pronunciation: "gud af-ter-NUN. aid laik tu buk tu rums for da long WIK-end",
          literal: "Buenas tardes. Me gustaría reservar dos habitaciones para el fin de semana largo.",
          why: "“Book” es el verbo más común para reservar hoteles, vuelos, tours y citas. Suena natural en una llamada real."
        },
        {
          speaker: "Laura",
          target: "Of course. How many nights would you like to reserve?",
          translation: "Claro. ¿Para cuántas noches quiere reservar?",
          pronunciation: "of kors. jau ME-ni naits wud yu laik tu ri-SERV",
          literal: "Por supuesto. ¿Cuántas noches le gustaría reservar?",
          why: "“Reserve” también es correcto, un poco más formal que “book”. En hoteles no suena raro; en una charla casual, “book” suele salir primero."
        },
        {
          speaker: "Alejandro",
          target: "Two nights. Could you hold one double room and one single room?",
          translation: "Dos noches. ¿Me puede apartar una habitación doble y una sencilla?",
          pronunciation: "tu naits. kud yu jold uan DA-bol rum and uan SIN-gol rum",
          literal: "Dos noches. ¿Podría sostener una habitación doble y una sencilla?",
          why: "“Hold” traduce el apartar temporal. No promete que todo esté confirmado; sólo pide que no se lo den a otra persona todavía."
        },
        {
          speaker: "Laura",
          target: "I can hold them until six, but we need a deposit to confirm.",
          translation: "Se las aparto hasta las seis, pero necesitamos un abono para confirmar.",
          pronunciation: "ai kan jold dem an-TIL siks, bot ui nid a di-PA-zit tu kon-FERM",
          literal: "Puedo sostenerlas hasta las seis, pero necesitamos un depósito para confirmar.",
          why: "La frontera queda clara: “hold” es espera temporal; “deposit” y “confirm” vuelven seria la reserva."
        },
        {
          speaker: "Alejandro",
          target: "Perfect. I'll book them officially as soon as you send the details.",
          translation: "Perfecto. Reservo formalmente apenas me mande los datos.",
          pronunciation: "PER-fekt. ail buk dem a-FI-sha-li as sun as yu send da DI-teils",
          literal: "Perfecto. Las reservaré oficialmente tan pronto como mande los detalles.",
          why: "“Book officially” suena deliberado pero natural. Sirve cuando usted quiere marcar que el hold todavía no es la reserva final."
        },
        {
          speaker: "Laura",
          target: "Done. I'll text you the confirmation so the rooms are booked.",
          translation: "Listo. Le mando la confirmación para que los cuartos queden reservados.",
          pronunciation: "dan. ail tekst yu da kon-fer-MEI-shon so da rums ar bukt",
          literal: "Listo. Le escribiré la confirmación para que las habitaciones estén reservadas.",
          why: "“The rooms are booked” es el resultado. Ya no es sólo un hold; hay confirmación escrita."
        }
      ],
      vocabulary: [
        {
          term: "book",
          explanation:
            "El verbo más común para reservar hoteles, vuelos, tours, mesas y citas. En una llamada real suele sonar más natural que “reserve”.",
          literal: "reservar",
          useWhen:
            "Usted asegura algo con fecha, nombre y registro: “book a room,” “book a table,” “book an appointment.”",
          avoidWhen:
            "Sólo quiere que le guarden algo por unas horas. Para el apartar temporal, “hold” es más exacto.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["reserve", "hold", "confirm", "make a booking"],
          example: {
            target: "I'd like to book two rooms.",
            translation: "Quisiera reservar dos cuartos."
          }
        },
        {
          term: "hold",
          explanation:
            "Apartar o guardar temporalmente. No siempre significa reserva confirmada; puede ser sólo una cortesía hasta cierta hora.",
          literal: "sostener / apartar",
          useWhen:
            "Pide que no entreguen una mesa, silla, habitación o boleto antes de que usted confirme.",
          avoidWhen:
            "Ya pagó o cerró formalmente la reserva. Entonces diga “book,” “reserve” o “confirm.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["set aside", "keep", "save", "reserve"],
          example: {
            target: "Could you hold one double room?",
            translation: "¿Me puede apartar una habitación doble?"
          }
        },
        {
          term: "long weekend",
          explanation:
            "El equivalente funcional de “puente”. El inglés no usa “bridge” para ese fin de semana de festivo pegado al descanso.",
          literal: "fin de semana largo",
          useWhen:
            "Explica fechas de viaje cuando un lunes festivo o una pausa alarga el fin de semana.",
          avoidWhen:
            "Traducir “puente” como “bridge weekend”. Eso suena literal y no se entiende como calendario.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["holiday weekend", "three-day weekend", "public holiday", "peak weekend"],
          example: {
            target: "For the long weekend.",
            translation: "Para el puente."
          }
        },
        {
          term: "double room / single room",
          explanation:
            "Categorías de hotel: una habitación para dos personas y una para una persona. Son palabras prácticas, no lujosas.",
          literal: "habitación doble / sencilla",
          useWhen:
            "Aclara exactamente qué cuartos necesita antes de confirmar precio o disponibilidad.",
          avoidWhen:
            "Habla de camas específicas; “double bed” y “single bed” ya son otra precisión.",
          register: "neutro de de hotel register",
          region: "Inglés universal.",
          related: ["room type", "double bed", "single bed", "availability"],
          example: {
            target: "One double room and one single room.",
            translation: "Una habitación doble y una sencilla."
          }
        },
        {
          term: "deposit",
          explanation:
            "El abono o anticipo que confirma una reserva sin pagar necesariamente todo el valor.",
          literal: "depósito / abono",
          useWhen:
            "Un hotel o guía pide un pago parcial para asegurar lo que estaba reservado o sostenido.",
          avoidWhen:
            "Paga todo de una vez; entonces hable de “full payment” o “the total.”",
          register: "neutro de negocios",
          region: "Inglés universal.",
          related: ["advance payment", "confirm", "balance", "payment link"],
          example: {
            target: "We need a deposit to confirm.",
            translation: "Necesitamos un abono para confirmar."
          }
        },
        {
          term: "the rooms are booked",
          explanation:
            "El resultado de la reserva: los cuartos ya quedaron asegurados en el sistema o por escrito.",
          literal: "los cuartos están reservados",
          useWhen:
            "Usted quiere confirmar que ya no se trata de un hold temporal.",
          avoidWhen:
            "Sólo preguntó disponibilidad. Todavía no diga “booked” si nadie tomó sus datos.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["confirmed", "reserved", "all set", "booking confirmed"],
          example: {
            target: "The rooms are booked.",
            translation: "Los cuartos quedaron reservados."
          }
        },
        {
          term: "text you the details",
          explanation:
            "Mandarle los datos por mensaje. En inglés norteamericano “text” puede ser verbo para escribir por celular.",
          literal: "textearle los detalles",
          useWhen:
            "La persona necesita pasar dirección, precio, enlace de pago o confirmación por mensaje.",
          avoidWhen:
            "El canal es correo formal o contrato; entonces use “email” o “send.”",
          register: "neutro conversacional",
          region: "Inglés norteamericano.",
          related: ["send the details", "message you", "email you", "send confirmation"],
          example: {
            target: "I'll text you the confirmation.",
            translation: "Le mando la confirmación por mensaje."
          }
        }
      ],
      note:
        "No traduzca “reservar” y “apartar” siempre con una sola palabra. En inglés, “book” cubre la reserva práctica; “reserve” sirve y suena un poco más formal; “hold” es el apartado temporal. La etapa del arreglo decide el verbo.",
      culture: [
        {
          label: "Book suena cotidiano",
          body:
            "Muchos hispanohablantes evitan “book” porque piensan primero en libro. En viajes, “book a room” es normalísimo y menos rígido que “make a reservation” en una llamada común."
        },
        {
          label: "Hold no es garantía eterna",
          body:
            "Si el hotel dice “I can hold them until six,” usted tiene una ventana, no una promesa sin límite. Pregunte por el depósito y la confirmación si el plan depende de esos cuartos."
        },
        {
          label: "Long weekend no es bridge",
          body:
            "El “puente” colombiano se explica como “long weekend” o “holiday weekend.” Decir “bridge” lleva al oyente a una estructura física, no al calendario."
        },
        {
          label: "La cortesía vive en would",
          body:
            "Como el inglés no tiene usted, una llamada amable se arma con “I'd like,” “could you,” “would you” y frases completas. No necesita sonar servil; necesita sonar claro."
        }
      ],
      pitfalls: [
        {
          mistake: "“I want to apart a room.”",
          whyItFails:
            "“Apart” no funciona como verbo de reserva en inglés. Es una palabra real, pero no traduce el “apartar” colombiano de guardar algo.",
          sayInstead: "I'd like to book a room, or could you hold a room?"
        },
        {
          mistake: "“Bridge weekend.”",
          whyItFails:
            "Es una traducción literal de “puente,” pero en inglés no nombra el descanso largo. El oyente piensa en un puente físico.",
          sayInstead: "Long weekend, or holiday weekend."
        },
        {
          mistake: "“The room is hold.”",
          whyItFails:
            "Después de “is” necesita participio: “held.” Para una reserva ya confirmada, probablemente necesita “booked.”",
          sayInstead: "The room is held until six, or the room is booked."
        },
        {
          mistake: "“Reserve me the datas.”",
          whyItFails:
            "“Data” no funciona como “los datos” de una reserva en esta frase, y “reserve me” cambia el objeto. Lo que usted quiere son detalles por mensaje.",
          sayInstead: "Please text me the details."
        }
      ],
      variations: [
        {
          form: "I'd like to book two rooms.",
          register: "cortés práctico",
          region: "Inglés universal",
          whenToUse: "Abrir una llamada de hotel con cortesía y claridad."
        },
        {
          form: "Could you hold a table until eight?",
          register: "cortés práctico",
          region: "Inglés universal",
          whenToUse: "Pedir que aparten algo temporalmente antes de confirmar."
        },
        {
          form: "We need a deposit to confirm.",
          register: "neutro de negocios",
          region: "Inglés universal",
          whenToUse: "Explicar qué convierte el hold en reserva real."
        },
        {
          form: "I'll text you the details.",
          register: "neutro conversacional",
          region: "Inglés norteamericano",
          whenToUse: "Pasar información práctica por mensaje de celular."
        },
        {
          form: "Do you have availability for the long weekend?",
          register: "cortés práctico",
          region: "Inglés universal",
          whenToUse: "Preguntar cupo antes de pedir la reserva."
        }
      ],
      prompt: "The receptionist says “I can hold them until six.” ¿Qué estado tienen los cuartos?",
      choices: [
        "Están apartados temporalmente, pero falta confirmación.",
        "Están pagados por completo y no pueden cambiar.",
        "Ya no existen porque otro huésped llegó primero."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase abre mejor una llamada de hotel en inglés?",
          choices: [
            "I'd like to book two rooms for the long weekend.",
            "I want to apart two rooms without details.",
            "Give me any rooms when you remember."
          ],
          answer: 0,
          tests: "book as ordinary reservation verb"
        },
        {
          prompt: "¿Cuál frase traduce mejor “¿me aparta una mesa?”",
          choices: [
            "Could you hold a table until eight?",
            "Could you visit a table until eight?",
            "Could you erase a table until eight?"
          ],
          answer: 0,
          tests: "hold as temporary apartar"
        },
        {
          prompt: "¿Cómo se dice “puente” cuando habla del calendario?",
          choices: [
            "A weekend near the bridge.",
            "A long holiday weekend.",
            "A room beside water."
          ],
          answer: 1,
          tests: "long weekend rather than bridge"
        },
        {
          prompt: "¿Cuál frase confirma que ya no es sólo un hold?",
          choices: [
            "The rooms are booked.",
            "The maps are missing.",
            "The walls are open."
          ],
          answer: 0,
          tests: "booked as confirmed result"
        }
      ]
    }
  },
  {
    id: "visiting-an-aunt-and-a-museum-in-pasto",
    level: "Developing · Planning a trip",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "familiar",
    pathways: ["independent"],
    verb: "visitar",
    review: "pending",
    es: {
      title: "Visiting an aunt and a museum in Pasto",
      situation:
        "You are planning a weekend in Pasto and want to see an aunt, go into the Museo del Carnaval, and say hello to a friend if there is time. You need to use visitar without sounding too touristy when what you mean is to drop by for a while.",
      setting: {
        who: "Mariana is from Pasto and is helping Alex arrange the weekend. Alex wants to be polite with family but relaxed with friends.",
        what: "A planning chat that separates formal visiting, tourist visiting and casual dropping by before the weekend gets too full.",
        when: "Monday night, several days before the trip, while everyone still has time to adjust expectations.",
        where: "Pasto, Nariño, around a family lunch, the Museo del Carnaval and a friend's apartment near the center.",
        why: "Because “visitar” is regular and easy, but register is the lesson. Colombians often say “pasar por,” “caer” or “darse una vuelta” when the visit is informal."
      },
      address: {
        form: "tú",
        who: "Mariana and Alex use tú because they are friends and planning by voice note after work.",
        why: "The register needs to be close enough for “caer” and “pasar por” to sound natural. Usted would make the casual plan feel like an appointment.",
        ifYouSwitch:
          "Usted would fit the aunt herself, but between Mariana and Alex it would make the planning sound stiff. Vos is possible elsewhere but is not needed for this Pasto scene."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Quiero visitar a tu tía el sábado, pero sin caerle de sorpresa.",
          translation: "I want to visit your aunt on Saturday, but without dropping in on her by surprise.",
          pronunciation: "KYEH-roh bee-see-TAR a too TEE-ah el SAH-bah-doh, PEH-roh seen kah-ER-leh deh sor-PREH-sah",
          literal: "I-want to-visit your aunt on Saturday, but without falling-on-her by surprise.",
          why: "Use “visitar a” for people. The “a” marks the person being visited, and “caerle de sorpresa” names the drop-in that might be rude."
        },
        {
          speaker: "Mariana",
          target: "Sí, mejor le avisamos. A ella le gusta que la visiten con tiempo.",
          translation: "Yes, better we let her know. She likes people to visit her with notice.",
          pronunciation: "see, meh-HOR leh ah-bee-SAH-mos. a EH-yah leh GOOS-tah keh lah bee-SEE-ten kon TYEM-poh",
          literal: "Yes, better to-her we-warn. To her pleases that her they-visit with time.",
          why: "“Con tiempo” means with advance notice. With older relatives, “visitar” can sound respectful and affectionate rather than touristy."
        },
        {
          speaker: "Alex",
          target: "Y el domingo quisiera visitar el Museo del Carnaval temprano.",
          translation: "And on Sunday I would like to visit the Carnival Museum early.",
          pronunciation: "ee el doh-MEEN-goh kee-SYEH-rah bee-see-TAR el moo-SEH-oh del kar-nah-BAL tem-PRAH-noh",
          literal: "And the Sunday I-would-like to-visit the Museum of-the Carnival early.",
          why: "For museums, towns and official sights, “visitar” is exactly natural. It belongs to planned cultural stops."
        },
        {
          speaker: "Mariana",
          target: "Perfecto. Después podemos pasar por donde Julián si está libre.",
          translation: "Perfect. Afterward we can stop by Julián's place if he's free.",
          pronunciation: "per-FEK-toh. des-PWES poh-DEH-mos pah-SAR por DON-deh hoo-LYAN see es-TAH LEE-breh",
          literal: "Perfect. Afterward we-can pass by where Julián if he-is free.",
          why: "“Pasar por donde Julián” is much more natural than “visitar a Julián” for a casual stop. It lowers the weight of the plan."
        },
        {
          speaker: "Alex",
          target: "¿O le decimos que caemos un ratico después del museo?",
          translation: "Or do we tell him we'll drop by for a little while after the museum?",
          pronunciation: "o leh deh-SEE-mos keh kah-EH-mos oon rrah-TEE-koh des-PWES del moo-SEH-oh",
          literal: "Or to-him we-say that we-fall a little-while after the museum?",
          why: "“Caemos un ratico” is friendly and Colombian: a short informal visit, not a formal appointment. It works because Julián is a friend."
        },
        {
          speaker: "Mariana",
          target: "Eso. Visitamos a mi tía con calma y a Julián le caemos sin ceremonia.",
          translation: "Exactly. We visit my aunt properly and drop in on Julián without ceremony.",
          pronunciation: "EH-soh. bee-see-TAH-mos a mee TEE-ah kon KAL-mah ee a hoo-LYAN leh kah-EH-mos seen seh-reh-MOH-nyah",
          literal: "That. We-visit my aunt with calm and on Julián to-him we-fall without ceremony.",
          why: "One line makes the register split memorable: “visitamos” for the aunt, “le caemos” for the friend. Same weekend, different social weight."
        }
      ],
      vocabulary: [
        {
          term: "visitar",
          explanation:
            "To visit a person, place or institution. It is regular and transparent, but in casual Colombian plans it can sound more formal than English “visit.”",
          literal: "to visit",
          useWhen:
            "Talking about relatives with notice, museums, towns, official sights, patients, institutions or planned calls.",
          avoidWhen:
            "You mean a quick friendly drop-in. Colombians usually say “pasar por,” “caer” or “darse una vuelta.”",
          register: "neutral to formal",
          region: "General Spanish; the register split is important in Colombia.",
          related: ["pasar por", "caer", "darse una vuelta", "ir a ver"],
          example: {
            target: "Quiero visitar a tu tía el sábado.",
            translation: "I want to visit your aunt on Saturday."
          }
        },
        {
          term: "visitar a alguien",
          explanation:
            "To visit someone. The personal “a” appears because the object is a person: “visitar a mi tía,” “visitar a un amigo.”",
          literal: "to visit to someone",
          useWhen:
            "The visit has some weight: family, respect, notice, recovery, obligation or a real block of time.",
          avoidWhen:
            "You are popping in for ten minutes. The grammar is right, but the tone may sound heavier than the plan.",
          register: "neutral",
          region: "General Spanish.",
          related: ["ver a alguien", "ir donde alguien", "saludar a alguien", "acompañar"],
          example: {
            target: "A ella le gusta que la visiten con tiempo.",
            translation: "She likes people to visit her with notice."
          }
        },
        {
          term: "visitar un museo",
          explanation:
            "To visit a museum or official sight. This is the touristic and cultural use where “visitar” sounds fully natural.",
          literal: "to visit a museum",
          useWhen:
            "Planning museums, monuments, towns, parks, churches or formal places on an itinerary.",
          avoidWhen:
            "You mean hanging out at a friend's apartment; then the tourist register sounds odd.",
          register: "neutral",
          region: "General Spanish.",
          related: ["recorrer", "entrar a", "conocer un lugar", "hacer una visita"],
          example: {
            target: "Quisiera visitar el Museo del Carnaval.",
            translation: "I would like to visit the Carnival Museum."
          }
        },
        {
          term: "pasar por donde alguien",
          explanation:
            "To stop by someone's place. “Donde Julián” means Julián's place without naming house, apartment or neighborhood.",
          literal: "to pass by where someone",
          useWhen:
            "A casual stop on the way, especially if the visit depends on time and availability.",
          avoidWhen:
            "A formal family visit where notice and time matter. Then “visitar” may show better manners.",
          register: "friendly informal",
          region: "Very common Colombian Spanish.",
          related: ["pasar a saludar", "caer", "darse una vuelta", "ir donde"],
          example: {
            target: "Podemos pasar por donde Julián.",
            translation: "We can stop by Julián's place."
          }
        },
        {
          term: "caerle a alguien",
          explanation:
            "To drop in on someone. The verb is vivid: you land at their place, usually informally and sometimes with little warning.",
          literal: "to fall on someone",
          useWhen:
            "Friends or close relatives are open to a relaxed visit and the mood is not ceremonial.",
          avoidWhen:
            "You barely know the person, or surprise would create work. Then ask and use more careful wording.",
          register: "friendly informal",
          region: "Common Colombian colloquial Spanish.",
          related: ["pasar por", "llegar un rato", "aparecer", "darse una vuelta"],
          example: {
            target: "Le caemos un ratico después del museo.",
            translation: "We'll drop by for a little while after the museum."
          }
        },
        {
          term: "un ratico",
          explanation:
            "A little while. The diminutive makes the visit feel small, manageable and non-invasive.",
          literal: "a little little-while",
          useWhen:
            "You want to reassure the other person that the stop will not take over their day.",
          avoidWhen:
            "The visit will actually be long. Understating too much can sound inconsiderate after the fact.",
          register: "friendly informal",
          region: "General Colombian; “ratico” is especially common.",
          related: ["un momento", "un rato corto", "rapidito", "sin demorarnos"],
          example: {
            target: "Caemos un ratico.",
            translation: "We'll drop by for a little while."
          }
        },
        {
          term: "con tiempo",
          explanation:
            "With enough advance notice. In planning, it means not springing the visit on someone at the last minute.",
          literal: "with time",
          useWhen:
            "Older relatives, hosts or busy friends deserve warning before you appear.",
          avoidWhen:
            "The plan is spontaneous and everyone likes it that way. Then “con tiempo” may make it sound like an appointment.",
          register: "neutral",
          region: "General Colombian.",
          related: ["avisar antes", "con anticipación", "no caer de sorpresa", "cuadrar horario"],
          example: {
            target: "Le avisamos con tiempo.",
            translation: "We'll let her know in advance."
          }
        }
      ],
      note:
        "The grammar of “visitar” is easy; the social register is not. Visiting a museum or an aunt with notice? “Visitar” is perfect. Dropping by a friend's place if the afternoon opens up? “Pasar por,” “caer” and “darse una vuelta” sound far more Colombian and far less ceremonial.",
      culture: [
        {
          label: "A family visit has weight",
          body:
            "Going to an older relative's home can imply food, time, tidying and attention. Saying “le avisamos con tiempo” recognizes that hospitality is work, not just affection."
        },
        {
          label: "Museums take visitar naturally",
          body:
            "With museums, churches, historic centers and towns, “visitar” carries no stiffness. It sounds like a planned cultural stop, which is exactly what it is."
        },
        {
          label: "Friends get lighter verbs",
          body:
            "For friends, Colombians often reduce the visit: “pasamos,” “caemos,” “damos una vuelta.” The lighter verb says you are not demanding a hosted event."
        },
        {
          label: "Pasto deserves the calendar",
          body:
            "A weekend in Pasto can include family lunch and the Museo del Carnaval without turning into a race. The language here is about arranging time before the trip, not narrating the journey."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “visitar” for every friendly stop",
          whyItFails:
            "It is grammatical, but it can make a ten-minute drop-in sound formal or touristic. The friend may wonder whether you expect hosting.",
          sayInstead: "Paso por donde Julián, or le caigo un ratico."
        },
        {
          mistake: "Forgetting the personal “a” with people",
          whyItFails:
            "Spanish marks people as direct objects with “a.” “Visito mi tía” sounds incomplete to many ears.",
          sayInstead: "Visito a mi tía."
        },
        {
          mistake: "Treating “caerle” as rude by itself",
          whyItFails:
            "It can be rude if surprise creates work, but among friends it is a normal casual verb for dropping by.",
          sayInstead: "¿Le decimos que le caemos un ratico?"
        },
        {
          mistake: "Calling a museum stop “caer al museo”",
          whyItFails:
            "A museum is not a friend whose place you drop in on. For a planned cultural stop, “visitar” or “entrar al museo” sounds better.",
          sayInstead: "Vamos a visitar el museo temprano."
        }
      ],
      variations: [
        {
          form: "Quiero visitar a mi tía el sábado.",
          register: "neutral respectful",
          region: "General Colombian",
          whenToUse: "A family visit with advance notice and real time set aside."
        },
        {
          form: "Vamos a visitar el Museo del Carnaval.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "A planned cultural or touristic stop."
        },
        {
          form: "Pasamos por donde Julián si está libre.",
          register: "friendly informal",
          region: "Very common Colombian",
          whenToUse: "A flexible stop at a friend's place."
        },
        {
          form: "Le caemos un ratico después del museo.",
          register: "friendly informal",
          region: "Colombian colloquial",
          whenToUse: "Dropping by briefly when the relationship allows it."
        },
        {
          form: "Me doy una vuelta y los saludo.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Offering a short informal visit without making a big plan."
        }
      ],
      prompt: "Mariana contrasts “visitamos a mi tía” with “a Julián le caemos.” What is the contrast?",
      choices: [
        "Formal respectful visit versus casual friendly drop-in.",
        "Indoor museum visit versus outdoor mountain walk.",
        "Morning appointment versus canceled evening plan."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence sounds best for an older relative with advance notice?",
          choices: [
            "Quiero visitar a mi tía el sábado.",
            "Quiero caerle encima sin avisar.",
            "Quiero rondar por ahí sin saludar."
          ],
          answer: 0,
          tests: "visitar a alguien with personal a"
        },
        {
          prompt: "Which sentence is most natural for a flexible stop at a friend's place?",
          choices: [
            "Vamos a visitar solemnemente el sofá de Julián.",
            "Pasamos por donde Julián si está libre.",
            "Firmamos una visita institucional a Julián."
          ],
          answer: 1,
          tests: "pasar por donde alguien for casual stops"
        },
        {
          prompt: "Which sentence fits a planned museum stop?",
          choices: [
            "Vamos a caerle al Museo del Carnaval.",
            "Vamos a visitar el Museo del Carnaval.",
            "Vamos a apartar el Museo del Carnaval."
          ],
          answer: 1,
          tests: "visitar for museums and sights"
        },
        {
          prompt: "What does “un ratico” add to “le caemos”?",
          choices: [
            "It makes the visit sound brief and manageable.",
            "It makes the visit sound legally required.",
            "It makes the visit sound completely canceled."
          ],
          answer: 0,
          tests: "ratico as a softening diminutive"
        }
      ]
    },
    en: {
      title: "Visitar a una tía y pasar por un museo en Manchester",
      situation:
        "Usted organiza un fin de semana en Manchester: quiere ver a una tía, entrar a un museo y saludar a un amigo si hay tiempo. Necesita distinguir visit de stop by y come over sin sonar demasiado formal.",
      setting: {
        who: "Mariana vive en Manchester y ayuda a Alejandro a ordenar el fin de semana. Alejandro quiere sonar cortés con la familia y relajado con amigos.",
        what: "Una conversación de planificación que separa la visita familiar, la visita turística y el saludo informal antes de llenar demasiado el fin de semana.",
        when: "Lunes por la noche, varios días antes del viaje, cuando todavía pueden ajustar expectativas.",
        where: "Manchester, entre una comida familiar, el People's History Museum y el apartamento de un amigo cerca del centro.",
        why: "Porque “visit” sirve para personas y lugares, pero en inglés cotidiano también pesa distinto de “stop by,” “drop by” y “come over.”"
      },
      address: {
        form: "mixed",
        who: "Mariana y Alejandro son amigos. En inglés ambos usan “you”; la cercanía aparece en frases como “stop by” y “drop in.”",
        why: "El inglés no marca tú o usted en el pronombre, así que el registro se oye en el verbo. “Visit my aunt” pesa más que “stop by Tom's place.”",
        ifYouSwitch:
          "No hay pronombre que cambiar. Para sonar más respetuoso, use frases completas y aviso previo; para sonar casual, use “stop by” o “drop by.”"
      },
      dialogue: [
        {
          speaker: "Alejandro",
          target: "I want to visit your aunt on Saturday, but not drop in by surprise.",
          translation: "Quiero visitar a tu tía el sábado, pero sin caerle de sorpresa.",
          pronunciation: "ai uant tu VI-zit yor ant on SA-tur-dei, bot not drop in bai sur-PRAIS",
          literal: "Quiero visitar a su tía el sábado, pero no caer de sorpresa.",
          why: "“Visit your aunt” suena correcto y respetuoso. “Drop in by surprise” marca la llegada sin aviso, que puede ser incómoda."
        },
        {
          speaker: "Mariana",
          target: "Yes, let's give her notice. She likes visitors to plan ahead.",
          translation: "Sí, mejor le avisamos. A ella le gusta que la visiten con tiempo.",
          pronunciation: "yes, lets guiv jer NOU-tis. shi laiks VI-zi-ters tu plan a-JED",
          literal: "Sí, démosle aviso. A ella le gusta que los visitantes planeen adelante.",
          why: "“Give her notice” cubre “avisarle con tiempo.” No suena frío; reconoce que recibir gente requiere preparación."
        },
        {
          speaker: "Alejandro",
          target: "And on Sunday I'd like to visit the People's History Museum early.",
          translation: "Y el domingo quisiera visitar el People's History Museum temprano.",
          pronunciation: "and on SAN-dei aid laik tu VI-zit da PI-pols JIS-to-ri miu-ZI-um ER-li",
          literal: "Y el domingo me gustaría visitar el Museo de Historia del Pueblo temprano.",
          why: "Para museos y lugares culturales, “visit” es natural. No tiene la formalidad pesada que puede tener con amigos."
        },
        {
          speaker: "Mariana",
          target: "Perfect. After that we can stop by Tom's place if he's free.",
          translation: "Perfecto. Después podemos pasar por donde Tom si está libre.",
          pronunciation: "PER-fekt. AF-ter dat ui kan stop bai toms pleis if jis fri",
          literal: "Perfecto. Después podemos parar por el lugar de Tom si está libre.",
          why: "“Stop by” es el equivalente cotidiano de “pasar por.” Hace que el plan suene breve, flexible y sin ceremonia."
        },
        {
          speaker: "Alejandro",
          target: "Or we can tell him we'll drop by for a bit after the museum.",
          translation: "O le decimos que le caemos un ratico después del museo.",
          pronunciation: "or ui kan tel jim uil drop bai for a bit AF-ter da miu-ZI-um",
          literal: "O podemos decirle que pasaremos por un rato después del museo.",
          why: "“Drop by for a bit” tiene el mismo peso social que “caer un ratico”: una visita corta que no exige gran preparación."
        },
        {
          speaker: "Mariana",
          target: "Exactly. We visit my aunt properly and drop by Tom's without making it a ceremony.",
          translation: "Eso. Visitamos a mi tía con calma y a Tom le caemos sin ceremonia.",
          pronunciation: "eg-ZAKT-li. ui VI-zit mai ant PRA-per-li and drop bai toms wi-DAUT MEI-kin it a SE-re-mo-ni",
          literal: "Exactamente. Visitamos a mi tía apropiadamente y pasamos por lo de Tom sin volverlo ceremonia.",
          why: "La línea muestra el registro: “visit” para la tía, “drop by” para el amigo. No es sólo traducción; es relación social."
        }
      ],
      vocabulary: [
        {
          term: "visit",
          explanation:
            "Visitar a una persona o lugar. Es correcto, pero con amigos puede sonar más pesado que “stop by” o “drop by.”",
          literal: "visitar",
          useWhen:
            "Habla de familiares con aviso, museos, ciudades, pacientes, instituciones o planes con tiempo reservado.",
          avoidWhen:
            "Sólo quiere saludar a un amigo diez minutos. Ahí “stop by” o “drop by” suena más ligero.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["stop by", "drop by", "come over", "go see"],
          example: {
            target: "I want to visit your aunt.",
            translation: "Quiero visitar a tu tía."
          }
        },
        {
          term: "visit someone",
          explanation:
            "Visitar a alguien. El inglés no usa una preposición equivalente a la “a” personal del español.",
          literal: "visitar alguien",
          useWhen:
            "La visita tiene cierto peso familiar, respeto, aviso o tiempo reservado.",
          avoidWhen:
            "Habla de pasar rápido por la casa de un amigo. Gramaticalmente sirve, pero puede sonar demasiado formal.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["go see someone", "spend time with someone", "pay a visit", "see family"],
          example: {
            target: "She likes visitors to plan ahead.",
            translation: "A ella le gusta que la visiten con tiempo."
          }
        },
        {
          term: "visit a museum",
          explanation:
            "Visitar un museo. Con lugares culturales, “visit” suena perfectamente natural y no demasiado ceremonioso.",
          literal: "visitar un museo",
          useWhen:
            "Arma un itinerario con museos, iglesias, barrios históricos, universidades o parques.",
          avoidWhen:
            "Habla de una casa de amigos donde sólo va a saludar. Ahí el registro cambia.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["see a museum", "go to a museum", "tour", "check out"],
          example: {
            target: "I'd like to visit the museum early.",
            translation: "Quisiera visitar el museo temprano."
          }
        },
        {
          term: "stop by",
          explanation:
            "Pasar por un lugar o donde alguien. Suena breve, flexible y cotidiano.",
          literal: "parar por",
          useWhen:
            "Usted visita a un amigo, tienda u oficina como parte de otro plan y no quiere volverlo evento.",
          avoidWhen:
            "La visita merece tiempo y aviso formal. Para una tía mayor, “visit” puede mostrar más respeto.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["drop by", "swing by", "pop in", "come by"],
          example: {
            target: "We can stop by Tom's place.",
            translation: "Podemos pasar por donde Tom."
          }
        },
        {
          term: "drop by",
          explanation:
            "Caer o pasar informalmente. Puede ser planeado, pero suena ligero y corto.",
          literal: "caer por",
          useWhen:
            "Amigos o familiares cercanos aceptan una visita breve sin preparar toda una recepción.",
          avoidWhen:
            "La llegada sorpresa puede incomodar. Entonces avise primero o use “visit” con hora clara.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["drop in", "stop by", "come over", "swing by"],
          example: {
            target: "We'll drop by for a bit.",
            translation: "Le caemos un ratico."
          }
        },
        {
          term: "for a bit",
          explanation:
            "Por un ratico. Reduce el peso del plan y promete que la visita no se comerá la tarde.",
          literal: "por un pedazo",
          useWhen:
            "Quiere tranquilizar a la otra persona: es una pasada corta, no una visita larga.",
          avoidWhen:
            "Sabe que se va a quedar horas. Entonces la frase puede sonar engañosa.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["for a little while", "briefly", "for a minute", "not for long"],
          example: {
            target: "We'll drop by for a bit.",
            translation: "Caemos un ratico."
          }
        },
        {
          term: "give notice",
          explanation:
            "Avisar con tiempo. En planes sociales, significa no aparecer de sorpresa cuando la visita crea trabajo.",
          literal: "dar aviso",
          useWhen:
            "Familiares, anfitriones o personas ocupadas necesitan prepararse antes de recibirlo.",
          avoidWhen:
            "Entre amigos que acordaron improvisar. Puede sonar demasiado administrativo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["let her know", "plan ahead", "warn her", "ask first"],
          example: {
            target: "Let's give her notice.",
            translation: "Avisémosle con tiempo."
          }
        }
      ],
      note:
        "“Visit” no está mal, pero no cubre todos los pesos sociales. Para una tía y un museo, “visit” funciona. Para un amigo, “stop by” o “drop by for a bit” se parecen más a “pasar por” y “caer un ratico.”",
      culture: [
        {
          label: "Visit puede sonar con agenda",
          body:
            "En inglés, “visit my aunt” puede implicar tiempo reservado y cortesía. No es rígido, pero sí pesa más que “drop by Tom's.”"
        },
        {
          label: "Stop by baja la exigencia",
          body:
            "“Stop by” y “drop by” dicen que usted no espera una recepción completa. Esa ligereza ayuda cuando el plan depende de si queda tiempo."
        },
        {
          label: "Los museos aceptan visit",
          body:
            "Con museos y lugares culturales, “visit” no suena pomposo. Es la palabra normal de itinerario."
        },
        {
          label: "Avisar también es cariño",
          body:
            "“Give her notice” no es burocracia cuando alguien tiene que recibirlo. Es reconocer que la hospitalidad necesita preparación."
        }
      ],
      pitfalls: [
        {
          mistake: "“Visit to my aunt.”",
          whyItFails:
            "En inglés, “visit” como verbo lleva objeto directo sin “to.” La preposición aparece en el sustantivo: “a visit to my aunt.”",
          sayInstead: "I want to visit my aunt."
        },
        {
          mistake: "“Fall on Tom for a bit.”",
          whyItFails:
            "Calca “caerle a alguien.” En inglés suena físico y raro, no como visita informal.",
          sayInstead: "Drop by Tom's for a bit."
        },
        {
          mistake: "“Pass by Tom's house” for every casual visit.",
          whyItFails:
            "Se entiende, pero muchas veces suena como pasar al lado sin entrar. “Stop by” o “drop by” comunica mejor la visita breve.",
          sayInstead: "Stop by Tom's place."
        },
        {
          mistake: "“Make a visit to the museum early.”",
          whyItFails:
            "Es gramatical, pero más pesado de lo necesario. En un itinerario común, el verbo simple suena mejor.",
          sayInstead: "Visit the museum early."
        }
      ],
      variations: [
        {
          form: "I want to visit my aunt on Saturday.",
          register: "neutro respetuoso",
          region: "Inglés universal",
          whenToUse: "Una visita familiar con aviso y tiempo reservado."
        },
        {
          form: "I'd like to visit the museum early.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una parada cultural planeada."
        },
        {
          form: "We can stop by Tom's if he's free.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Un saludo flexible en casa de un amigo."
        },
        {
          form: "We'll drop by for a bit after the museum.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Una visita corta y sin ceremonia."
        },
        {
          form: "Let's give her notice before Saturday.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Avisar con tiempo a alguien que va a recibirlo."
        }
      ],
      prompt: "Mariana contrasts “visit my aunt” with “drop by Tom's.” ¿Cuál es el contraste?",
      choices: [
        "Visita respetuosa y planeada frente a pasada informal.",
        "Museo bajo techo frente a caminata por montaña.",
        "Cita cancelada frente a boleto ya comprado."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase sirve para una tía con aviso previo?",
          choices: [
            "I want to visit my aunt on Saturday.",
            "I want to fall on my aunt suddenly.",
            "I want to pass beside my aunt forever."
          ],
          answer: 0,
          tests: "visit someone without to"
        },
        {
          prompt: "¿Cuál frase suena natural para saludar a un amigo si hay tiempo?",
          choices: [
            "We can solemnly visit Tom's sofa.",
            "We can stop by Tom's if he's free.",
            "We can institutionalize Tom tomorrow."
          ],
          answer: 1,
          tests: "stop by for casual visits"
        },
        {
          prompt: "¿Cuál frase funciona para un museo en el itinerario?",
          choices: [
            "We'll drop onto the museum early.",
            "I'd like to visit the museum early.",
            "We'll hold the museum until evening."
          ],
          answer: 1,
          tests: "visit for cultural sights"
        },
        {
          prompt: "¿Qué agrega “for a bit” a “drop by”?",
          choices: [
            "Hace que la visita suene breve y manejable.",
            "Hace que la visita suene legalmente obligatoria.",
            "Hace que la visita suene totalmente cancelada."
          ],
          answer: 0,
          tests: "for a bit as softener"
        }
      ]
    }
  },
  {
    id: "planning-a-river-weekend-in-honda",
    level: "Developing · Planning a trip",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "neutral",
    pathways: ["independent"],
    verb: "planear",
    review: "pending",
    es: {
      title: "Planning a weekend by the river in Honda",
      situation:
        "You and two friends want to spend a weekend in Honda, but you still have not decided dates, budget, or lodging. You need to plan without sounding institutional, and above all learn how to cuadrar the plan with the others.",
      setting: {
        who: "Diana is the organized friend with a spreadsheet habit. Alex is flexible but tired of vague ideas that never become dates.",
        what: "A planning call before anything is booked: dates, budget, lodging, who confirms what and how to turn an idea into an agreed plan.",
        when: "Tuesday evening, almost three weeks before the weekend they are considering.",
        where: "Honda, Tolima, imagined from a video call while they compare river-view guesthouses and the old bridge area.",
        why: "Because “planear” is useful, but Colombians often say “hacer planes” or “cuadrar” when the real work is sorting out details with people."
      },
      address: {
        form: "mixed",
        who: "Diana and Alex are friends. They use tú in direct forms, but the group planning also uses impersonal phrases like “hay que” and “nos toca.”",
        why: "Planning with friends slides between personal closeness and practical assignment. The mixed register lets “cuadremos” carry the social work without becoming formal.",
        ifYouSwitch:
          "Pure usted would make the call sound like a meeting at work. Vos could fit some friendships, but here tú plus Colombian “cuadrar” is general and safe."
      },
      dialogue: [
        {
          speaker: "Diana",
          target: "Antes de emocionarnos, planeemos bien el fin de semana en Honda.",
          translation: "Before we get excited, let's plan the weekend in Honda properly.",
          pronunciation: "AN-tes deh eh-moh-syoh-NAR-nos, plah-neh-EH-mos byen el feen deh seh-MAH-nah en ON-dah",
          literal: "Before exciting-ourselves, let-us-plan well the weekend in Honda.",
          why: "“Planeemos” is the present-subjunctive command form: let's plan. It sounds careful, a little organized, and appropriate at the start."
        },
        {
          speaker: "Alex",
          target: "Sí, porque llevamos meses diciendo que hagamos planes y nada.",
          translation: "Yes, because we've spent months saying we should make plans and nothing happens.",
          pronunciation: "see, POR-keh yeh-BAH-mos MEH-ses dee-SYEN-doh keh ah-GAH-mos PLAH-nes ee NAH-dah",
          literal: "Yes, because we-carry months saying that we-make plans and nothing.",
          why: "“Hacer planes” is the everyday frame for talking about future outings. It is lighter than “planear,” but it can stay vague forever."
        },
        {
          speaker: "Diana",
          target: "Entonces cuadremos fecha, plata y hospedaje antes del viernes.",
          translation: "Then let's sort out the date, money and lodging before Friday.",
          pronunciation: "en-TON-ses kwah-DREH-mos FEH-chah, PLAH-tah ee os-peh-DAH-heh AN-tes del BYER-nes",
          literal: "Then let-us-square date, money and lodging before Friday.",
          why: "This is the high-value Colombian verb: “cuadrar” means to sort out and agree the details with people. It is the practical heart of planning."
        },
        {
          speaker: "Alex",
          target: "Me gusta. Si no cuadramos presupuesto, después nadie confirma.",
          translation: "I like it. If we don't sort out the budget, nobody confirms later.",
          pronunciation: "meh GOOS-tah. see no kwah-DRAH-mos preh-soo-PWES-toh, des-PWES NAH-dye kon-FEER-mah",
          literal: "To-me pleases. If not we-square budget, afterward nobody confirms.",
          why: "“Cuadrar presupuesto” is ordinary speech, not accounting jargon. The plan becomes real when the numbers stop floating."
        },
        {
          speaker: "Diana",
          target: "Planificar todo al detalle me da pereza; sólo quiero que quede claro.",
          translation: "Planning every detail formally makes me tired; I just want it to be clear.",
          pronunciation: "plah-nee-fee-KAR TOH-doh al deh-TAH-yeh meh da peh-REH-sah; SOH-loh KYEH-roh keh KEH-deh KLAH-roh",
          literal: "To-plan-formally everything to-the detail gives me laziness; only I-want that it-stays clear.",
          why: "“Planificar” is not wrong, but it leans formal or institutional. Diana rejects overplanning while still asking for a clear agreement."
        },
        {
          speaker: "Alex",
          target: "Listo: hoy planeamos lo básico y mañana cuadramos con los demás.",
          translation: "Done: today we plan the basics and tomorrow we sort it out with the others.",
          pronunciation: "LEES-toh: oy plah-neh-AH-mos lo BAH-see-koh ee mah-NYAH-nah kwah-DRAH-mos kon los deh-MAS",
          literal: "Ready: today we-plan the basic and tomorrow we-square with the others.",
          why: "The contrast is neat: “planear” frames the idea; “cuadrar” gets agreement from the people whose calendars and money matter."
        }
      ],
      vocabulary: [
        {
          term: "planear",
          explanation:
            "To plan. It is useful and normal, especially for trips, projects and intentions, but Colombian conversation often reaches for other frames once people start negotiating details.",
          literal: "to plan",
          useWhen:
            "You are shaping an idea in advance: a weekend, route, budget, surprise or project.",
          avoidWhen:
            "You mean the back-and-forth of agreeing with people. In Colombia, “cuadrar” usually does that job better.",
          register: "neutral",
          region: "General Spanish; common in Colombia.",
          related: ["cuadrar", "hacer planes", "planificar", "organizar"],
          example: {
            target: "Planeemos bien el fin de semana.",
            translation: "Let's plan the weekend properly."
          }
        },
        {
          term: "hacer planes",
          explanation:
            "To make plans. It is the everyday noun-based frame, casual and broad enough for anything from dinner to a weekend away.",
          literal: "to make plans",
          useWhen:
            "Talking loosely about wanting to do something later, especially before the details are real.",
          avoidWhen:
            "You need exact dates, money and responsibilities. Then it is time to “cuadrar.”",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["armar plan", "proponer algo", "salir algún día", "mirar fechas"],
          example: {
            target: "Llevamos meses diciendo que hagamos planes.",
            translation: "We've spent months saying we should make plans."
          }
        },
        {
          term: "cuadrar",
          explanation:
            "The Colombian powerhouse for sorting out a plan with someone: align dates, money, people and expectations until the thing can actually happen.",
          literal: "to square",
          useWhen:
            "You need to agree details: “cuadremos fecha,” “cuadramos para el sábado,” “ya cuadré con ellos.”",
          avoidWhen:
            "A formal institutional planning document. Then “planificar” or “programar” may sound more appropriate.",
          register: "neutral conversational",
          region: "Extremely common Colombian Spanish.",
          related: ["acordar", "organizar", "definir", "ajustar"],
          example: {
            target: "Cuadremos fecha, plata y hospedaje.",
            translation: "Let's sort out the date, money and lodging."
          }
        },
        {
          term: "¿cuadramos para el sábado?",
          explanation:
            "A natural Colombian way to ask whether the plan can be set for Saturday. It includes availability and agreement in one compact question.",
          literal: "do we square for Saturday?",
          useWhen:
            "You are checking if a date works and whether the other person is willing to lock it in.",
          avoidWhen:
            "You are announcing an official schedule to strangers. It sounds collaborative, not institutional.",
          register: "friendly informal",
          region: "Very common Colombian.",
          related: ["¿te sirve el sábado?", "¿dejamos el sábado?", "¿te queda bien?", "¿lo ponemos el sábado?"],
          example: {
            target: "¿Cuadramos para el sábado?",
            translation: "Can we make Saturday work?"
          }
        },
        {
          term: "planificar",
          explanation:
            "To plan in a more formal, structured or institutional way. It is correct, but it often sounds heavier than a friends' weekend needs.",
          literal: "to plan formally",
          useWhen:
            "A school, company, city office or project team is designing a process with steps and responsibilities.",
          avoidWhen:
            "You are texting friends about dates and lodging. “Planear,” “hacer planes” or “cuadrar” will usually sound better.",
          register: "formal",
          region: "General Spanish.",
          related: ["programar", "diseñar", "estructurar", "organizar"],
          example: {
            target: "Planificar todo al detalle me da pereza.",
            translation: "Planning every detail formally makes me tired."
          }
        },
        {
          term: "quedar claro",
          explanation:
            "For the plan to be clear or settled. “Quedar” looks at the result after everyone agrees.",
          literal: "to remain clear",
          useWhen:
            "You want the date, amount, meeting point or responsibility to stop being vague.",
          avoidWhen:
            "You are still brainstorming. Let ideas stay open until someone needs a decision.",
          register: "neutral",
          region: "General Colombian.",
          related: ["quedar definido", "estar listo", "dejar claro", "confirmar"],
          example: {
            target: "Sólo quiero que quede claro.",
            translation: "I just want it to be clear."
          }
        },
        {
          term: "plata y hospedaje",
          explanation:
            "Money and lodging. These are the details that turn a pleasant idea into a plan people can say yes or no to.",
          literal: "silver and lodging",
          useWhen:
            "The group needs to discuss budget and where everyone will stay before confirming.",
          avoidWhen:
            "You are trying to keep the invitation light at the very beginning. Lead with the idea, then bring in the numbers.",
          register: "neutral conversational",
          region: "General Colombian; “plata” for money is everyday speech.",
          related: ["presupuesto", "cupo", "cuarto", "abono"],
          example: {
            target: "Cuadremos fecha, plata y hospedaje.",
            translation: "Let's sort out the date, money and lodging."
          }
        }
      ],
      note:
        "For this verb, the Colombian prize is not “planear” by itself. It is knowing the scale: “hacer planes” floats the idea, “planear” organizes it, “planificar” sounds formal, and “cuadrar” is the everyday verb for making the plan actually fit other people's calendars, money and willingness.",
      culture: [
        {
          label: "Cuadrar is social engineering",
          body:
            "A plan rarely becomes real just because one person wants it. “Cuadrar” recognizes the negotiation: who can go, who can pay, what date works, and what level of commitment everyone is ready to make."
        },
        {
          label: "Planificar can sound like an office",
          body:
            "“Planificar” is a good word in reports, institutions and project management. Among friends choosing a weekend, it may sound as if someone brought a clipboard to the river."
        },
        {
          label: "Money belongs in the plan",
          body:
            "Talking about “plata” early can feel blunt, but it prevents the silent collapse of a trip. Colombian friends often soften it with humor, not by pretending price does not exist."
        },
        {
          label: "Honda is a plan, not a transit scene",
          body:
            "This lesson stays before the trip: dates, lodging and agreement. The river town gives the plan a real place without turning the lesson into another transport story."
        }
      ],
      pitfalls: [
        {
          mistake: "Using only “planear” when friends are negotiating details",
          whyItFails:
            "It is correct but misses the Colombian verb people actually use when calendars, money and people have to fit together.",
          sayInstead: "Cuadremos fecha, plata y hospedaje."
        },
        {
          mistake: "Using “planificar” for a casual weekend",
          whyItFails:
            "The word leans formal and institutional. It can make a friendly plan sound like a government project.",
          sayInstead: "Planeemos lo básico, or cuadremos el plan."
        },
        {
          mistake: "Thinking “hacer planes” means the plan is settled",
          whyItFails:
            "People can “hacer planes” for months and still have no date, budget or booking. It is often only the intention stage.",
          sayInstead: "Ya cuadramos fecha y presupuesto."
        },
        {
          mistake: "Treating “cuadrar” as only mathematical",
          whyItFails:
            "The square image is real, but Colombian speech uses it constantly for arranging schedules, meetings and plans.",
          sayInstead: "¿Cuadramos para el sábado?"
        }
      ],
      variations: [
        {
          form: "Planeemos bien el fin de semana.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Opening the planning conversation with a clear intention."
        },
        {
          form: "Hace rato deberíamos hacer planes.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Talking loosely about the idea before details are settled."
        },
        {
          form: "Cuadremos para el sábado.",
          register: "neutral conversational",
          region: "Very common Colombian",
          whenToUse: "Turning a vague idea into an agreed date."
        },
        {
          form: "Ya cuadré hospedaje con Diana.",
          register: "neutral conversational",
          region: "Very common Colombian",
          whenToUse: "Reporting that one piece of the plan is sorted."
        },
        {
          form: "No toca planificar todo al detalle.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Rejecting over-formality while still making a workable plan."
        }
      ],
      prompt: "Alex says “hoy planeamos lo básico y mañana cuadramos con los demás.” What contrast is he making?",
      choices: [
        "Today they sketch the plan; tomorrow they sort it out with the people involved.",
        "Today they cancel the weekend; tomorrow they explain the cancellation to everyone.",
        "Today they visit the river; tomorrow they reserve a table without telling anyone."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence is the most Colombian way to sort out a date with friends?",
          choices: [
            "Cuadremos para el sábado si a todos les sirve.",
            "Planifiquemos institucionalmente una salida casual.",
            "Imaginemos eternamente una fecha sin decidir."
          ],
          answer: 0,
          tests: "cuadrar for agreeing plans"
        },
        {
          prompt: "Which verb sounds most formal or institutional?",
          choices: [
            "Cuadrar con los amigos.",
            "Planificar todo al detalle.",
            "Hacer planes algún día."
          ],
          answer: 1,
          tests: "planificar as formal register"
        },
        {
          prompt: "Which phrase is still vague rather than settled?",
          choices: [
            "Ya cuadramos fecha y plata.",
            "Ya pagamos el abono del cuarto.",
            "Hace meses decimos que hagamos planes."
          ],
          answer: 2,
          tests: "hacer planes as intention stage"
        },
        {
          prompt: "What does “que quede claro” ask for?",
          choices: [
            "For the details to stop being vague.",
            "For the weather to become brighter.",
            "For the river to look cleaner."
          ],
          answer: 0,
          tests: "quedar claro as settled clarity"
        }
      ]
    },
    en: {
      title: "Planear un fin de semana junto al río en Sydney",
      situation:
        "Usted y dos amigos quieren pasar un fin de semana fuera de Sydney, pero aún no han definido fechas, presupuesto ni hospedaje. Necesita usar plan, make plans y figure out sin traducir cuadrar palabra por palabra.",
      setting: {
        who: "Diana es la amiga organizada que abre hojas de cálculo por reflejo. Alejandro es flexible, pero está cansado de ideas vagas que nunca llegan a fecha.",
        what: "Una llamada antes de reservar nada: fechas, presupuesto, alojamiento, quién confirma qué y cómo convertir una idea en un acuerdo.",
        when: "Martes por la noche, casi tres semanas antes del fin de semana que están considerando.",
        where: "Sydney, planeando por videollamada un fin de semana en un pueblo junto al río fuera de la ciudad.",
        why: "Porque el inglés usa “plan” sin problema, pero para el trabajo colombiano de “cuadrar” necesita “figure out,” “sort out,” “work out” o “make plans,” según el punto."
      },
      address: {
        form: "mixed",
        who: "Diana y Alejandro son amigos. En inglés ambos usan “you”; la confianza aparece en frases directas como “let's figure out.”",
        why: "El inglés no marca tú o usted. La diferencia está entre “plan,” que organiza, y “figure out” o “sort out,” que resuelven detalles con otras personas.",
        ifYouSwitch:
          "No existe cambio de pronombre. Si intenta sonar formal con “sir” o “madam,” convierte una llamada de amigos en una reunión rara."
      },
      dialogue: [
        {
          speaker: "Diana",
          target: "Before we get excited, let's plan the weekend properly.",
          translation: "Antes de emocionarnos, planeemos bien el fin de semana.",
          pronunciation: "bi-FOR ui get ek-SAI-ted, lets plan da WIK-end PRA-per-li",
          literal: "Antes de emocionarnos, planeemos el fin de semana apropiadamente.",
          why: "“Let's plan” es claro y natural. No necesita un verbo largo para sonar organizado."
        },
        {
          speaker: "Alejandro",
          target: "Yes, because we've been saying we should make plans for months.",
          translation: "Sí, porque llevamos meses diciendo que hagamos planes.",
          pronunciation: "yes, bi-KOZ uiv bin SEI-in ui shud meik plans for manths",
          literal: "Sí, porque hemos estado diciendo que deberíamos hacer planes por meses.",
          why: "“Make plans” se parece mucho a “hacer planes”: puede ser una intención amistosa sin detalles cerrados."
        },
        {
          speaker: "Diana",
          target: "Then let's figure out the date, money and lodging before Friday.",
          translation: "Entonces cuadremos fecha, plata y hospedaje antes del viernes.",
          pronunciation: "den lets FI-gyur aut da deit, MA-ni and LA-jin bi-FOR FRAI-dei",
          literal: "Entonces averigüemos la fecha, el dinero y el hospedaje antes del viernes.",
          why: "“Figure out” traduce muy bien el cuadrar de resolver detalles. No es “square the date”; es hacer que el plan funcione."
        },
        {
          speaker: "Alejandro",
          target: "I like it. If we don't sort out the budget, nobody will confirm.",
          translation: "Me gusta. Si no cuadramos presupuesto, después nadie confirma.",
          pronunciation: "ai laik it. if ui dont sort aut da BA-yet, NOU-ba-di uil kon-FERM",
          literal: "Me gusta. Si no resolvemos el presupuesto, nadie confirmará.",
          why: "“Sort out” también sirve para “cuadrar”: organizar una parte enredada hasta que pueda decidirse."
        },
        {
          speaker: "Diana",
          target: "I don't want to plan every detail; I just want everything clear.",
          translation: "No quiero planificar todo al detalle; sólo quiero que quede claro.",
          pronunciation: "ai dont uant tu plan EV-ri DI-teil; ai yost uant EV-ri-zing klir",
          literal: "No quiero planear cada detalle; sólo quiero todo claro.",
          why: "El inglés usa el mismo “plan” donde el español puede distinguir “planear” y “planificar.” El exceso se marca con “every detail.”"
        },
        {
          speaker: "Alejandro",
          target: "Done: today we plan the basics, and tomorrow we work it out with the others.",
          translation: "Listo: hoy planeamos lo básico y mañana cuadramos con los demás.",
          pronunciation: "dan: tu-DEI ui plan da BEI-siks, and tu-MA-rou ui werk it aut uid di A-ders",
          literal: "Listo: hoy planeamos lo básico y mañana lo resolvemos con los demás.",
          why: "“Work it out with the others” captura la parte social de “cuadrar”: ponerse de acuerdo con las personas que pueden hacer viable o imposible el plan."
        }
      ],
      vocabulary: [
        {
          term: "plan",
          explanation:
            "Planear. Sirve como verbo y sustantivo: “plan the weekend,” “make a plan,” “the plan is clear.”",
          literal: "planear / plan",
          useWhen:
            "Usted organiza una idea por adelantado: fin de semana, presupuesto, sorpresa, proyecto o itinerario.",
          avoidWhen:
            "Quiere traducir específicamente “cuadrar” con gente. Muchas veces “figure out,” “sort out” o “work out” comunica mejor la negociación.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["make plans", "figure out", "sort out", "work out"],
          example: {
            target: "Let's plan the weekend properly.",
            translation: "Planeemos bien el fin de semana."
          }
        },
        {
          term: "make plans",
          explanation:
            "Hacer planes. Puede ser tan vago como hablar de verse algún día o tan concreto como separar una fecha.",
          literal: "hacer planes",
          useWhen:
            "La conversación todavía está en intención social, antes de resolver cada detalle.",
          avoidWhen:
            "Ya necesita presupuesto, hospedaje y tareas claras. Ahí conviene “figure out” o “sort out.”",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["talk about plans", "set something up", "plan something", "make arrangements"],
          example: {
            target: "We should make plans.",
            translation: "Deberíamos hacer planes."
          }
        },
        {
          term: "figure out",
          explanation:
            "Resolver o cuadrar algo que todavía está confuso. Tiene un sabor práctico y conversacional.",
          literal: "descifrar / resolver",
          useWhen:
            "Necesita encontrar fecha, costo, alojamiento o solución entre varias opciones.",
          avoidWhen:
            "El plan ya está decidido y sólo lo está anunciando. Entonces “confirm” o “tell them” puede bastar.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["sort out", "work out", "settle", "decide"],
          example: {
            target: "Let's figure out the date.",
            translation: "Cuadremos la fecha."
          }
        },
        {
          term: "sort out",
          explanation:
            "Organizar una parte enredada hasta que funcione. Es una muy buena traducción de “cuadrar” para detalles prácticos.",
          literal: "ordenar / resolver",
          useWhen:
            "Presupuesto, alojamiento, turnos o responsabilidades necesitan quedar claros.",
          avoidWhen:
            "La frase requiere sólo imaginar o diseñar; “plan” puede ser suficiente.",
          register: "neutro conversacional",
          region: "Inglés universal; especialmente frecuente en inglés británico, pero entendido ampliamente.",
          related: ["figure out", "work out", "arrange", "settle"],
          example: {
            target: "Sort out the budget before Friday.",
            translation: "Cuadrar el presupuesto antes del viernes."
          }
        },
        {
          term: "work it out with someone",
          explanation:
            "Cuadrarlo con alguien: hablar hasta que las partes queden de acuerdo o al menos sepan qué sigue.",
          literal: "trabajarlo hacia fuera con alguien",
          useWhen:
            "El problema no es sólo técnico sino social: otras personas deben aceptar fecha, plata o responsabilidad.",
          avoidWhen:
            "Sólo usted decide. Entonces “decide” o “plan” puede sonar más directo.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["coordinate", "agree on it", "talk it through", "make it work"],
          example: {
            target: "We'll work it out with the others.",
            translation: "Lo cuadramos con los demás."
          }
        },
        {
          term: "plan every detail",
          explanation:
            "Planear o planificar todo al detalle. En inglés, el exceso se marca con “every detail,” no con otro verbo obligatorio.",
          literal: "planear cada detalle",
          useWhen:
            "Quiere decir que alguien está organizando demasiado o buscando demasiada precisión.",
          avoidWhen:
            "Quiere elogiar una preparación cuidadosa. Entonces diga “plan carefully” o “be well prepared.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["overplan", "plan carefully", "micromanage", "organize everything"],
          example: {
            target: "I don't want to plan every detail.",
            translation: "No quiero planificar todo al detalle."
          }
        },
        {
          term: "make it clear",
          explanation:
            "Dejarlo claro. En planes, significa que los detalles dejan de flotar y todos entienden lo acordado.",
          literal: "hacerlo claro",
          useWhen:
            "Necesita precisar fecha, precio, lugar o responsabilidad antes de confirmar.",
          avoidWhen:
            "Está en lluvia de ideas y todavía no quiere cerrar opciones.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["clarify", "settle", "confirm", "be clear about it"],
          example: {
            target: "I just want everything clear.",
            translation: "Sólo quiero que todo quede claro."
          }
        }
      ],
      note:
        "Para traducir el mundo de “planear,” no basta con “plan.” “Make plans” puede seguir vago; “plan” organiza; “figure out,” “sort out” y “work it out with someone” se acercan al colombiano “cuadrar,” porque incluyen resolver detalles con gente real.",
      culture: [
        {
          label: "Plan no siempre cierra el plan",
          body:
            "En inglés, igual que en español, la gente puede “make plans” sin fecha ni plata. Para cerrar de verdad, hacen falta verbos de resolver: “figure out,” “sort out,” “work out.”"
        },
        {
          label: "Figure out es colaborativo",
          body:
            "“Let's figure out the date” no suena como examen de matemáticas; suena como sentarse a resolver una parte del plan que todavía no encaja."
        },
        {
          label: "Sort out baja el drama",
          body:
            "“Sort out the budget” permite hablar de dinero sin volverlo pelea. Es directo, práctico y menos solemne que un discurso sobre finanzas."
        },
        {
          label: "Planear entre amigos no es planificar una obra",
          body:
            "El inglés no tiene que elegir entre planear y planificar, pero sí puede sonar demasiado controlador si habla de “every detail.” El equilibrio está en lo básico claro y lo demás flexible."
        }
      ],
      pitfalls: [
        {
          mistake: "“Let's square the date.”",
          whyItFails:
            "Calca “cuadrar la fecha.” Aunque “square” existe, no es la frase normal para acordar un plan social.",
          sayInstead: "Let's figure out the date, or let's set a date."
        },
        {
          mistake: "“We are making plans” when the date is already fixed.",
          whyItFails:
            "Puede sonar como si todavía estuvieran en etapa vaga. Si ya cerraron detalles, use “we have a plan” o “we've worked it out.”",
          sayInstead: "We've worked out the date and budget."
        },
        {
          mistake: "“Planificate every detail.”",
          whyItFails:
            "“Planificate” no es verbo inglés. El inglés usa “plan,” y agrega “every detail” si quiere marcar exceso.",
          sayInstead: "Don't plan every detail."
        },
        {
          mistake: "“Coordinate the money” for a casual budget talk.",
          whyItFails:
            "Se entiende, pero puede sonar corporativo. Para amigos, “sort out the budget” es más natural.",
          sayInstead: "Let's sort out the budget."
        }
      ],
      variations: [
        {
          form: "Let's plan the weekend properly.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Abrir la conversación con intención clara."
        },
        {
          form: "We should make plans soon.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Hablar de la idea antes de cerrar detalles."
        },
        {
          form: "Let's figure out the date.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Resolver una fecha que todavía no encaja."
        },
        {
          form: "We sorted out the lodging.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Contar que una parte práctica del plan ya quedó lista."
        },
        {
          form: "We'll work it out with the others.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Acordar con las personas cuya aprobación falta."
        }
      ],
      prompt: "Alejandro says “today we plan the basics, and tomorrow we work it out with the others.” ¿Qué contraste hace?",
      choices: [
        "Hoy bosquejan el plan; mañana lo cuadran con las personas involucradas.",
        "Hoy cancelan el paseo; mañana explican la cancelación al grupo.",
        "Hoy visitan el río; mañana reservan una mesa sin avisarle a nadie."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase traduce mejor “cuadremos la fecha”?",
          choices: [
            "Let's figure out the date together.",
            "Let's square the date geometrically.",
            "Let's visit the date tomorrow."
          ],
          answer: 0,
          tests: "figure out for cuadrar details"
        },
        {
          prompt: "¿Cuál frase sigue vaga y social?",
          choices: [
            "We worked out the budget already.",
            "We should make plans sometime.",
            "We paid the lodging deposit."
          ],
          answer: 1,
          tests: "make plans as vague intention"
        },
        {
          prompt: "¿Cuál frase suena natural para presupuesto entre amigos?",
          choices: [
            "Let's coordinate the money institutionally.",
            "Let's planificate every peso together.",
            "Let's sort out the budget before Friday."
          ],
          answer: 2,
          tests: "sort out for practical details"
        },
        {
          prompt: "¿Cuál corrige “planificate every detail”?",
          choices: [
            "Don't plan every detail.",
            "Don't square every museum.",
            "Don't visit every budget."
          ],
          answer: 0,
          tests: "plan, not planificate"
        }
      ]
    }
  },
  {
    id: "choosing-por-or-para-at-buenaventura-cargo-counter",
    level: "Developing · Planning a trip",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "transport-and-travel",
    register: "neutral",
    pathways: ["independent", "year-12"],
    structure: "por-vs-para",
    review: "pending",
    es: {
      title: "Choosing por or para at the cargo counter",
      situation:
        "You are at a cargo counter in Buenaventura arranging a short trip toward Cali, sending a small package ahead, and buying something for a host. The clerk keeps using both por and para. You need one deciding question: is the phrase pointing forward to an aim, or backward and through the path that gets you there?",
      setting: {
        who: "Claudia works at a port cargo counter and is used to travelers mixing routes, per-kilo charges, deadlines and favors into one nervous conversation. Alex is planning a two-day trip and wants to stop choosing por or para by guessing.",
        what: "A shipping-counter scene where destination, route, deadline, duration, motive, fare, recipient, purpose, fixed expressions and a passive sentence all appear because the travel plan makes them useful.",
        when: "A Thursday afternoon in December, with the weekend close enough that shipping cutoffs and package deadlines matter.",
        where: "Buenaventura, Valle del Cauca, at a port cargo counter that receives small packages and coordinates inland routes.",
        why: "A port shipment naturally separates forward aim from backward or through movement: a package goes toward Cali, travels by the road inland, leaves by a deadline, waits for two days, costs a per-kilo charge, and is marked for someone. That frame makes por versus para decidable instead of a coin toss."
      },
      address: {
        form: "usted",
        who: "Claudia and Alex use usted because they do not know each other and the conversation is a practical service exchange at a transport counter.",
        why: "Usted keeps the counter talk respectful while still warm. The grammar lesson is not about intimacy, so the polite service register lets the contrast between por and para stay in focus.",
        ifYouSwitch:
          "Tú would sound too familiar with a clerk you have just met. Vos would be distracting here. In Colombia, usted is normal, efficient and friendly enough for sending cargo and confirming prices."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Buenas tardes. Salgo para Cali mañana, pero paso por Cali otra vez el domingo.",
          translation: "Good afternoon. I'm leaving for Cali tomorrow, but I pass through Cali again on Sunday.",
          pronunciation: "BWEH-nas TAR-des. SAL-goh PAH-rah KAH-lee mah-NYAH-nah, PEH-roh PAH-soh por KAH-lee OH-trah bes el doh-MEEN-goh",
          literal: "Good afternoons. I-leave for Cali tomorrow, but I-pass through Cali another time on Sunday.",
          why: "This is the travel rule in one breath. “Para Cali” points forward to the destination Alex is aiming at. “Por Cali” treats the city as a route or point passed through. Same city, different mental arrow."
        },
        {
          speaker: "Claudia",
          target: "Listo. Si viaja por la vía al mar, el trayecto dura por dos días con parada, y compra hoy para ahorrar.",
          translation: "All right. If you travel along the road to the sea, the trip lasts for two days with a stop, and you buy today to save money.",
          pronunciation: "LEES-toh. see BYAH-hah por lah BEE-ah al mar, el trah-YEK-toh DOO-rah por dos DEE-ahs kon pah-RAH-dah, ee KOM-prah oy PAH-rah ah-oh-RRAR",
          literal: "Ready. If you-travel through the road to-the sea, the route lasts through two days with stop, and you-buy today for to-save.",
          why: "“Por la vía al mar” is the route you move through. “Por dos días” is time you pass through. “Para ahorrar” points forward to a purpose, and purpose with a verb uses an infinitive."
        },
        {
          speaker: "Alex",
          target: "Perfecto. Necesito el tiquete para el viernes y este sobre es para usted en la oficina de carga.",
          translation: "Perfect. I need the ticket for Friday, and this envelope is for you at the cargo office.",
          pronunciation: "per-FEK-toh. neh-seh-SEE-toh el tee-KEH-teh PAH-rah el BYER-nes ee ES-teh SOH-breh es PAH-rah oos-TED en lah oh-fee-SEE-nah deh KAR-gah",
          literal: "Perfect. I-need the ticket for the Friday and this envelope is for you in the office of cargo.",
          why: "“Para el viernes” is a deadline, the time you are aiming to have something ready. “Para usted” is the recipient, the person the item is meant to reach. Both point forward."
        },
        {
          speaker: "Claudia",
          target: "Gracias por todo, pero el retraso fue por la lluvia. Por eso mandamos avisos por WhatsApp.",
          translation: "Thanks for everything, but the delay was because of the rain. That's why we send notices by WhatsApp.",
          pronunciation: "GRAH-syahs por TOH-doh, PEH-roh el rreh-TRAH-soh fweh por lah YOO-byah. por EH-soh man-DAH-mos ah-BEE-sohs por WAH-tsap",
          literal: "Thanks for everything, but the delay was for the rain. For that we-send notices by WhatsApp.",
          why: "“Gracias por” is a fixed thank-you frame and a cause frame. “Por la lluvia” names the reason behind the delay. “Por WhatsApp” is the means or channel used to send the message."
        },
        {
          speaker: "Alex",
          target: "Entonces trabajo para mi tío cuando llego, pero hoy trabajo por mi tío y cubro su turno.",
          translation: "So I work for my uncle when I arrive, but today I work for my uncle by covering his shift.",
          pronunciation: "en-TON-ses trah-BAH-hoh PAH-rah mee TEE-oh KWAN-doh YEH-goh, PEH-roh oy trah-BAH-hoh por mee TEE-oh ee KOO-broh soo TOOR-noh",
          literal: "Then I-work for my uncle when I-arrive, but today I-work for my uncle and I-cover his shift.",
          why: "This minimal pair proves the rule. “Trabajo para mi tío” points to the employer or person I serve. “Trabajo por mi tío” points backward to substitution, I am doing it in his place or on his behalf."
        },
        {
          speaker: "Claudia",
          target: "Exacto. Lo hice para ti si era un regalo; lo hice por ti si usted era la razón o si lo reemplacé.",
          translation: "Exactly. I did it for you if it was a gift; I did it for you if you were the reason or if I replaced you.",
          pronunciation: "eg-SAK-toh. loh EE-seh PAH-rah tee see EH-rah oon rreh-GAH-loh; loh EE-seh por tee see oos-TED EH-rah lah rrah-SON oh see loh rreh-em-plah-SEH",
          literal: "Exact. It I-did for you if it-was a gift; it I-did because-of you if you were the reason or if I replaced you.",
          why: "The English word “for” hides two ideas. “Para ti” aims the action at a recipient or benefit. “Por ti” looks back to motive, cause, or substitution. Ask where the arrow points."
        },
        {
          speaker: "Alex",
          target: "¿Y el envío? Me lo dejan por cincuenta mil, dos veces por semana, y puede ir por avión si hay afán.",
          translation: "And the shipment? You'll leave it for me for fifty thousand, twice per week, and it can go by plane if it's urgent.",
          pronunciation: "ee el en-BEE-oh. meh loh DEH-han por seen-KWEN-tah meel, dos BEH-ses por seh-MAH-nah, ee PWEH-deh eer por ah-BYON see eye ah-FAN",
          literal: "And the sending? For-me it they-leave for fifty thousand, two times per week, and it-can go by plane if there-is hurry.",
          why: "Price and exchange take “por”: the package goes for fifty thousand pesos. Rates also take “por”: twice per week. Means of transport can take “por”: by plane."
        },
        {
          speaker: "Claudia",
          target: "Por supuesto. El paquete fue revisado por la empresa, queda por ahora aquí y sale para Cali por la noche.",
          translation: "Of course. The package was checked by the company, it stays here for now and leaves for Cali at night.",
          pronunciation: "por soo-PWES-toh. el pah-KEH-teh fweh rreh-bee-SAH-doh por lah em-PREH-sah, KEH-dah por ah-OH-rah ah-KEE ee SAH-leh PAH-rah KAH-lee por lah NOH-cheh",
          literal: "Of course. The package was checked by the company, it-stays for now here and leaves for Cali through the night.",
          why: "A passive agent takes “por”: who did the checking. “Por supuesto” and “por ahora” are fixed expressions. “Sale para Cali” points to destination; “por la noche” is the time frame the departure passes through."
        },
        {
          speaker: "Alex",
          target: "Para mí, para ser diciembre está barato. Por favor, guárdelo por si acaso; por fin entiendo.",
          translation: "To me, for December, it's cheap. Please, keep it just in case; I finally understand.",
          pronunciation: "PAH-rah mee, PAH-rah ser dee-SYEM-breh es-TAH bah-RAH-toh. por fah-BOR, GWAR-deh-loh por see ah-KAH-soh; por feen en-TYEN-doh",
          literal: "For me, for being December it-is cheap. By favor, keep-it for if case; by end I-understand.",
          why: "“Para mí” frames an opinion. “Para ser diciembre” compares against expectation: considering that it is December, the price is cheap. “Por favor”, “por si acaso” and “por fin” are fixed traveler expressions."
        },
        {
          speaker: "Claudia",
          target: "Listo. Reconozca pa' la casa y pa' que sepa cuando le hablen, pero escriba para nada y para siempre completos.",
          translation: "Done. Recognize pa' la casa and pa' que sepa when people say them, but write para nada and para siempre in full.",
          pronunciation: "LEES-toh. rreh-koh-NOS-kah pah lah KAH-sah ee pah keh SEH-pah KWAN-doh leh AH-blen, PEH-roh es-KREE-bah PAH-rah NAH-dah ee PAH-rah SYEM-preh kom-PLEH-tohs",
          literal: "Ready. Recognize pa' the house and pa' that you-know when to-you they-speak, but write for nothing and for always complete.",
          why: "Colombians routinely reduce “para” to “pa” in speech. Learners should recognize it in phrases like “pa' la casa” and “pa' que sepa”, but write the full “para” in careful Spanish. “Para nada” and “para siempre” are fixed expressions to learn whole."
        }
      ],
      vocabulary: [
        {
          term: "para as forward aim",
          explanation:
            "Para points forward to the thing an action is aimed at: a destination, deadline, recipient, purpose, opinion frame, or expectation frame. If the sentence feels like an arrow toward an endpoint, para is usually the first guess to test.",
          literal: "toward / for",
          useWhen:
            "Use it for where you are headed, when something must be ready, who receives it, and what an action is meant to achieve.",
          avoidWhen:
            "Do not use it just because English says for. If the sentence names the route, cause, exchange, duration, means, or person acting in someone else's place, test por instead.",
          register: "neutral",
          region: "Universal Spanish; the pa reduction is common in Colombian speech, not formal writing.",
          related: ["destino", "plazo", "destinatario", "propósito"],
          example: {
            target: "Salgo para Cali mañana.",
            translation: "I'm leaving for Cali tomorrow."
          }
        },
        {
          term: "por as backward or through",
          explanation:
            "Por looks backward to a cause or moves through a path, time span, exchange, channel, rate, or substitution. If the idea explains what lies behind the action or what space or time it passes through, por is the safer test.",
          literal: "through / because of / by",
          useWhen:
            "Use it for reasons, routes, durations, prices, rates, means, passive agents, and doing something on behalf of someone.",
          avoidWhen:
            "Do not use it for a clean endpoint like a destination, deadline, recipient, or purpose with an infinitive.",
          register: "neutral",
          region: "Universal Spanish; Colombian travel talk uses these meanings constantly in routes and fares.",
          related: ["causa", "ruta", "duración", "medio"],
          example: {
            target: "Paso por Cali el domingo.",
            translation: "I pass through Cali on Sunday."
          }
        },
        {
          term: "para + destination, deadline, recipient",
          explanation:
            "Three common para uses share the same forward aim. “Para Cali” aims movement at a place. “Para el viernes” aims completion at a deadline. “Para usted” aims an object or message at its recipient.",
          literal: "for / to / by a deadline",
          useWhen:
            "Use it when the place, date, or person is the intended endpoint of the action.",
          avoidWhen:
            "A place can take por if you pass through it rather than head there. A time can take por if it is a duration rather than a deadline.",
          register: "neutral",
          region: "Universal Spanish; extremely common at terminals, hotels and cargo offices.",
          related: ["para Cali", "para el viernes", "para usted", "destino"],
          example: {
            target: "El paquete es para usted.",
            translation: "The package is for you."
          }
        },
        {
          term: "para + infinitive, opinion, expectation",
          explanation:
            "Para also points forward into an intended result: “para ahorrar”, in order to save. It can frame a viewpoint, “para mí”, or measure against expectation, “para ser diciembre”, considering it is December.",
          literal: "in order to / for me / considering",
          useWhen:
            "Use it when an infinitive names the purpose, when you mark your own opinion, or when you compare something with what you would expect from a situation.",
          avoidWhen:
            "Do not use para for the cause that made something happen. Purpose is aimed ahead; cause stands behind the action and takes por.",
          register: "neutral",
          region: "Universal Spanish; “para mí” is everyday speech, not a heavy formal phrase.",
          related: ["para ahorrar", "para mí", "para ser", "propósito"],
          example: {
            target: "Compro hoy para ahorrar.",
            translation: "I buy today to save money."
          }
        },
        {
          term: "por + cause and route",
          explanation:
            "Cause and route are the easiest por meanings to feel. “Por la lluvia” names the reason behind a delay. “Por la carretera” names the road you move through, not the endpoint you are aiming for.",
          literal: "because of / along",
          useWhen:
            "Use it for motives and reasons, thanks after gracias, and movement through a road, neighborhood, city center, or channel.",
          avoidWhen:
            "Do not use por when the place is the destination. “Salgo para Cali” and “paso por Cali” are not interchangeable.",
          register: "neutral",
          region: "Universal Spanish; “por el centro” is a normal Colombian way to say through downtown.",
          related: ["por la lluvia", "por la carretera", "por el centro", "gracias por"],
          example: {
            target: "Gracias por todo.",
            translation: "Thanks for everything."
          }
        },
        {
          term: "por + duration, exchange, rate, means",
          explanation:
            "Por covers spans and transactions: “por dos días” for duration, “por cincuenta mil” for price, “dos veces por semana” for rate, and “por WhatsApp” or “por avión” for the channel or means.",
          literal: "for / for the price of / per / by",
          useWhen:
            "Use it when time is something passed through, money is exchanged, frequency is measured, or a channel carries the action.",
          avoidWhen:
            "Do not confuse duration with deadline. “Por dos días” is for two days; “para el viernes” is by Friday.",
          register: "neutral",
          region: "Universal Spanish; “por WhatsApp” is very common Colombian service Spanish.",
          related: ["por dos días", "por cincuenta mil", "por semana", "por WhatsApp"],
          example: {
            target: "Viajo por dos días.",
            translation: "I'm traveling for two days."
          }
        },
        {
          term: "por + substitution and passive agent",
          explanation:
            "Por can mean on behalf of or in place of someone: “trabajo por mi tío”. It also introduces the agent in a passive sentence: “fue revisado por la empresa”, the company did the checking.",
          literal: "for / on behalf of / by",
          useWhen:
            "Use it when someone acts in another person's place, or when a passive sentence names who performed the action.",
          avoidWhen:
            "Do not use por for the employer or recipient. “Trabajo para mi tío” means he is my employer or beneficiary, not that I am covering his shift.",
          register: "neutral",
          region: "Universal Spanish; the passive agent is more common in writing but useful on receipts and notices.",
          related: ["en lugar de", "por mi tío", "voz pasiva", "agente"],
          example: {
            target: "El paquete fue revisado por la empresa.",
            translation: "The package was checked by the company."
          }
        },
        {
          term: "minimal pairs",
          explanation:
            "The shortest way to learn the contrast is to hold pairs still. “Trabajo para mi tío” names the person I work for as employer. “Trabajo por mi tío” means I am doing it for him, in his place, because of him, or on his behalf.",
          literal: "meaning-changing pairs",
          useWhen:
            "Use pairs to test the arrow: “Salgo para Cali” versus “paso por Cali”, and “lo hice para ti” versus “lo hice por ti”.",
          avoidWhen:
            "Do not memorize the pair as two English words. English often says for in both halves, which is exactly why guessing fails.",
          register: "neutral",
          region: "Universal Spanish; Colombians hear these differences clearly even when English translations blur them.",
          related: ["trabajar para", "trabajar por", "salir para", "pasar por"],
          example: {
            target: "Lo hice para ti, no por ti.",
            translation: "I did it for you as the recipient, not because of you."
          }
        },
        {
          term: "fixed expressions with por and para",
          explanation:
            "Some traveler phrases are learned whole because the preposition is fixed: por favor, por fin, por eso, por supuesto, por ahora, por si acaso, para nada and para siempre. The arrow idea still helps, but the phrase is stored as a chunk.",
          literal: "set phrases",
          useWhen:
            "Use them constantly in travel talk: asking politely, reacting to delays, agreeing, buying time, and keeping a backup plan.",
          avoidWhen:
            "Do not swap the preposition inside a fixed expression. “Para favor” and “por siempre” may exist in other contexts, but they do not replace these travel chunks.",
          register: "neutral to conversational",
          region: "Universal Spanish; all are understood in Colombia.",
          related: ["por favor", "por fin", "por supuesto", "para nada"],
          example: {
            target: "Por favor, guárdelo por si acaso.",
            translation: "Please, keep it just in case."
          }
        }
      ],
      note:
        "Do not learn por and para as two lists that both mean “for”. Ask one question: does the phrase point forward to an aim, or backward and through the path, cause, time, exchange or substitute that got you there? Para points forward to destination, deadline, recipient, purpose, opinion and expectation. Por points back or through for cause, route, duration, price, rate, means, passive agent and substitution. Colombian speech often reduces para to pa, as in “pa' la casa” or “pa' que sepa”. Recognize it with your ear, but write para in careful Spanish.",
      culture: [
        {
          label: "The cargo counter makes the contrast visible",
          body:
            "A port cargo counter is almost a diagram of por and para. The label says the package is para Cali because that is its destination. The truck may go por la vía al mar because that is the route. The dispatch can be para el viernes because that is the deadline, while the wait lasts por dos días because those are the days you pass through. The charge is paid por kilo, notices arrive por WhatsApp, and a package is para a recipient. Nothing here is decorative grammar; it is the working language of a shipment."
        },
        {
          label: "Why English speakers keep guessing wrong",
          body:
            "English says for in too many places: for Friday, for two days, for my uncle, for you, for fifty thousand. Spanish hears different jobs in those phrases. A destination, deadline or recipient is an aim, so para. A duration, reason, price or substitution is behind or through the action, so por. If you translate word by word, every sentence feels like a fifty percent guess. If you ask what job the phrase is doing, the choice becomes much less mysterious."
        },
        {
          label: "Pa is for listening, not for your formal writing",
          body:
            "In Colombia you will hear para reduced constantly: “pa' la casa”, “pa' que sepa”, “pa' mañana”. This is ordinary speech, not a separate grammar rule. Learners need to recognize it because it comes fast in buses, shops and family talk. But in messages to a hotel, homework, forms and any careful writing, keep the full para. Understanding a reduction is not the same as needing to imitate it everywhere."
        },
        {
          label: "Fixed phrases are luggage tags",
          body:
            "Some por and para phrases are so common that they become luggage tags you grab without opening the suitcase. Por favor, por supuesto, por fin, por ahora, por eso and por si acaso will follow you through any trip. Para nada and para siempre are equally fixed. Learn them as whole chunks, then let the arrow rule handle the live choices around them."
        }
      ],
      pitfalls: [
        {
          mistake: "Using para for every English for",
          whyItFails:
            "English hides several meanings under one word. “For two days” is duration and takes por; “for Friday” is a deadline and takes para. The English word is not enough evidence.",
          sayInstead: "Ask whether the phrase is an aim or a path, cause, span, exchange or substitute."
        },
        {
          mistake: "Treating route and destination as the same place",
          whyItFails:
            "A city can be either the goal or a point on the way. “Salgo para Cali” means I am headed there. “Paso por Cali” means I go through it.",
          sayInstead: "Salgo para Cali, but paso por Cali."
        },
        {
          mistake: "Missing the meaning change in trabajo para and trabajo por",
          whyItFails:
            "“Trabajo para mi tío” makes your uncle the employer or beneficiary. “Trabajo por mi tío” means you are covering him, replacing him, or acting on his behalf.",
          sayInstead: "Trabajo para mi tío if he is the employer; trabajo por mi tío if I cover his shift."
        },
        {
          mistake: "Writing pa in careful Spanish because you hear it everywhere",
          whyItFails:
            "Pa is a speech reduction of para, common and useful to recognize. It is not the form you want in a hotel message, school answer, receipt note or formal request.",
          sayInstead: "Listen for pa, but write para."
        }
      ],
      variations: [
        {
          form: "Salgo para Cali.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Naming the destination you are headed toward."
        },
        {
          form: "Paso por Cali.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Naming a route or place you pass through."
        },
        {
          form: "Lo hice para ti.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The person is the recipient or intended beneficiary."
        },
        {
          form: "Lo hice por ti.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The person is the reason, motive or person you acted on behalf of."
        },
        {
          form: "Para ser diciembre, está barato.",
          register: "neutral conversational",
          region: "Universal Spanish",
          whenToUse: "Comparing something with what you expected for the situation."
        }
      ],
      prompt: "Alex says “Salgo para Cali” but “paso por Cali.” What changes?",
      choices: [
        "Para makes Cali the destination, while por makes it a place on the route.",
        "Por makes Cali the destination, while para makes it a place on the route.",
        "Both phrases mean the same thing because English can translate both with for."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence correctly gives a purpose?",
          choices: [
            "Compro hoy para ahorrar dinero en el viaje.",
            "Compro hoy por ahorrar dinero en el viaje.",
            "Compro hoy para la lluvia en el viaje."
          ],
          answer: 0,
          tests: "Purpose with an infinitive points forward and takes para."
        },
        {
          prompt: "Which sentence correctly gives a duration?",
          choices: [
            "Me quedo para dos días cerca del muelle.",
            "Me quedo por dos días cerca del muelle.",
            "Me quedo por el viernes cerca del muelle."
          ],
          answer: 1,
          tests: "A time span passed through takes por; a deadline takes para."
        },
        {
          prompt: "Which sentence names a passive agent?",
          choices: [
            "El paquete fue revisado para la empresa.",
            "El paquete fue revisado durante la empresa.",
            "El paquete fue revisado por la empresa."
          ],
          answer: 2,
          tests: "The agent in a passive sentence is introduced with por."
        }
      ]
    },
    en: {
      title: "Escoger for, to, by y through en una terminal de Fort Worth",
      situation:
        "Usted está en una terminal de buses en Fort Worth organizando un viaje corto, enviando un paquete y comprando algo para un anfitrión. En español muchas frases usan por o para, y ambas pueden sonar como for. En inglés, en cambio, debe escoger for, to, by, through, during, because of, per or in order to según la función real.",
      setting: {
        who: "Claire trabaja en un mostrador de buses y encomiendas. Alejandro es colombiano, planea un viaje de dos días y necesita dejar de traducir por y para siempre como for.",
        what: "Una escena de terminal donde destino, ruta, fecha límite, duración, motivo, tarifa, destinatario, medio y agente pasivo obligan a escoger la preposición inglesa correcta.",
        when: "Un jueves por la tarde en diciembre, con el fin de semana cerca y la hora de cierre de la oficina encima.",
        where: "Fort Worth, Texas, en una terminal interurbana con mostrador de tiquetes y envíos pequeños.",
        why: "Porque el problema se invierte para el hispanohablante. Español junta muchas relaciones bajo por y para, pero inglés las reparte entre palabras diferentes. Decir for para todo suena lógico desde el español y falla justo en viajes, fechas y medios."
      },
      address: {
        form: "mixed",
        who: "Claire y Alejandro no se conocen. En inglés ambos usan you; la cortesía sale de could, please, I need y frases completas, no de un pronombre distinto.",
        why: "El inglés no distingue tú y usted. Por eso esta dirección se enfoca en elegir preposiciones, no tratamientos. Un tono claro y educado reemplaza el cambio de pronombre que el español sí tiene.",
        ifYouSwitch:
          "No hay otro pronombre que cambiar. Si Alejandro quiere sonar más formal, debe usar “Could you”, “I would like” y “please”, no inventar una forma equivalente a usted."
      },
      dialogue: [
        {
          speaker: "Alejandro",
          target: "Good afternoon. I'm leaving for Fort Worth tomorrow, but I pass through Waco again on Sunday.",
          translation: "Buenas tardes. Salgo para Fort Worth mañana, pero paso por Waco otra vez el domingo.",
          pronunciation: "gud af-ter-NUN. aim LI-vin for fort werth tu-MA-rou, bat ai pas thru WEI-kou a-GEN on SAN-dei",
          literal: "Buenas tardes. Estoy saliendo para Fort Worth mañana, pero paso a través de Waco otra vez el domingo.",
          why: "Aquí inglés separa lo que español resuelve con para y por. El destino usa “for” después de “leave”: leaving for Fort Worth. La ruta usa “through”: pass through Waco. No traduzca ambos como “for Waco”."
        },
        {
          speaker: "Claire",
          target: "Sure. If you go by bus through the old highway, the trip lasts for two days with a stop.",
          translation: "Claro. Si va en bus por la carretera vieja, el viaje dura por dos días con una parada.",
          pronunciation: "shur. if yu gou bai bas thru di ould JAI-wei, da trip lasts for tu deiz with a stap",
          literal: "Claro. Si usted va por bus a través de la carretera vieja, el viaje dura por dos días con una parada.",
          why: "El medio de transporte usa “by”: by bus. La ruta usa “through”. La duración sí usa “for”: for two days. Para el hispanohablante, el riesgo es decir “for bus” y “during two days”."
        },
        {
          speaker: "Alejandro",
          target: "I need the ticket by Friday, and this envelope is for you at the cargo desk.",
          translation: "Necesito el tiquete para el viernes, y este sobre es para usted en la oficina de carga.",
          pronunciation: "ai nid da TI-ket bai FRAI-dei, and dis EN-ve-loup is for yu at da KAR-gou desk",
          literal: "Necesito el tiquete por el viernes, y este sobre es para usted en el escritorio de carga.",
          why: "La fecha límite en inglés usa “by”: by Friday. El destinatario sí puede usar “for”: this envelope is for you. Mucho ojo: “for Friday” puede sonar como uso o evento de viernes, no como fecha límite."
        },
        {
          speaker: "Claire",
          target: "Thanks for everything, but the delay was because of the snow. That's why we send notices by text.",
          translation: "Gracias por todo, pero el retraso fue por la nieve. Por eso mandamos avisos por mensaje.",
          pronunciation: "thanks for EV-ri-thing, bat da di-LEI waz bi-KOZ av da snou. dats wai wi send NOU-tis-iz bai tekst",
          literal: "Gracias por todo, pero el retraso fue debido a la nieve. Esa es la razón por la que mandamos avisos por texto.",
          why: "“Thanks for” sí es fijo con for. Pero una causa externa suele decirse “because of”: because of the snow. El medio o canal usa “by”: by text, by email, by WhatsApp."
        },
        {
          speaker: "Alejandro",
          target: "So I work for my uncle when I arrive, but today I work in place of my uncle and cover his shift.",
          translation: "Entonces trabajo para mi tío cuando llego, pero hoy trabajo por mi tío y cubro su turno.",
          pronunciation: "so ai werk for mai AN-kol wen ai a-RAIV, bat tu-DEI ai werk in pleis av mai AN-kol and KA-ver hiz shift",
          literal: "Entonces trabajo para mi tío cuando llego, pero hoy trabajo en lugar de mi tío y cubro su turno.",
          why: "El primer caso sí usa “for”: work for my uncle, él es el jefe o beneficiario. El segundo no suena natural como “work for my uncle” si quiere decir reemplazarlo; diga “in place of” o “cover his shift”."
        },
        {
          speaker: "Claire",
          target: "Right. I did it for you if it was a gift; I did it because of you if you were the reason.",
          translation: "Exacto. Lo hice para ti si era un regalo; lo hice por ti si usted era la razón.",
          pronunciation: "rait. ai did it for yu if it waz a gift; ai did it bi-KOZ av yu if yu wer da RI-zon",
          literal: "Correcto. Lo hice para usted si era un regalo; lo hice debido a usted si usted era la razón.",
          why: "“For you” funciona para destinatario o beneficio. Para causa o motivo, inglés prefiere “because of you”. Si traduce “por ti” siempre como “for you”, borra una diferencia que en inglés sí puede ser obligatoria."
        },
        {
          speaker: "Alejandro",
          target: "And the shipment? You can charge it per pound, twice per week, and it can go by plane.",
          translation: "¿Y el envío? Me lo cobran por libra, dos veces por semana, y puede ir por avión.",
          pronunciation: "and da SHIP-ment? yu kan charj it per paund, twais per wik, and it kan gou bai plein",
          literal: "¿Y el envío? Usted puede cobrarlo por libra, dos veces por semana, y puede ir por avión.",
          why: "La tarifa por unidad usa “per”: per pound. La frecuencia también usa “per”: twice per week. El medio usa “by”: by plane. No diga “for pound”, “two times for week” ni “for plane”."
        },
        {
          speaker: "Claire",
          target: "Of course. The package was checked by the company, stays here for now, and leaves for Fort Worth at night.",
          translation: "Por supuesto. El paquete fue revisado por la empresa, queda por ahora aquí y sale para Fort Worth por la noche.",
          pronunciation: "av kors. da PA-kej waz chekt bai da KAM-pa-ni, steiz jir for nau, and livz for fort werth at nait",
          literal: "Por supuesto. El paquete fue revisado por la compañía, se queda aquí por ahora, y sale para Fort Worth en la noche.",
          why: "El agente pasivo usa “by”: checked by the company. “For now” es una frase fija. Después de “leave”, el destino puede ser “for Fort Worth”. Para la hora general de salida, inglés dice “at night”."
        },
        {
          speaker: "Alejandro",
          target: "To me, for December, it's cheap. Please keep it just in case; I finally understand.",
          translation: "Para mí, para ser diciembre está barato. Por favor, guárdelo por si acaso; por fin entiendo.",
          pronunciation: "tu mi, for di-SEM-ber, its chip. pliz kip it yast in keis; ai FAI-na-li an-der-STAND",
          literal: "Para mí, para diciembre, está barato. Por favor guárdelo solo en caso; finalmente entiendo.",
          why: "Opinión personal usa “to me” o “for me”, según frase. Expectativa con mes o situación suele usar “for”: for December, it's cheap. “Please”, “just in case” y “finally” traducen frases fijas que en español llevan por."
        },
        {
          speaker: "Claire",
          target: "Great. Use in order to for purpose: buy early in order to save, but by Friday for a deadline.",
          translation: "Muy bien. Use in order to para propósito: comprar temprano para ahorrar, pero by Friday para una fecha límite.",
          pronunciation: "greit. yuz in OR-der tu for PUR-pes: bai ER-li in OR-der tu seiv, bat bai FRAI-dei for a DED-lain",
          literal: "Genial. Use en orden a para propósito: comprar temprano para ahorrar, pero por viernes para una fecha límite.",
          why: "Para + infinitivo puede traducirse como “to” o “in order to”. La fecha límite no usa “for” en inglés cuidadoso: “by Friday”. Esa diferencia corrige dos sobreusos típicos de for."
        }
      ],
      vocabulary: [
        {
          term: "for",
          explanation:
            "“For” no es la traducción automática de por y para. Sirve para destinatario, beneficio, duración, precio, algunos destinos después de “leave”, y frases fijas como “thanks for” y “for now”. Pero muchas relaciones exigen otra palabra.",
          literal: "por / para, solo en algunos usos",
          useWhen:
            "Use “for” en “this is for you”, “for two days”, “for fifty dollars”, “thanks for everything”, “leaving for Fort Worth” y “for now”.",
          avoidWhen:
            "No lo use para medios, fechas límite, rutas, causas externas claras ni frecuencias. Ahí suelen entrar by, through, because of o per.",
          register: "neutro",
          region: "Inglés universal; los ejemplos de terminal suenan naturales en Norteamérica.",
          related: ["to", "by", "through", "because of"],
          example: {
            target: "This envelope is for you.",
            translation: "Este sobre es para usted."
          }
        },
        {
          term: "to / in order to",
          explanation:
            "Cuando para introduce propósito con infinitivo, el inglés muchas veces usa “to”: to save money. Si quiere sonar más explícito o formal, use “in order to”. No diga “for save”.",
          literal: "para + infinitivo",
          useWhen:
            "Use “to” o “in order to” antes de un verbo que nombra el propósito: buy early to save, call to confirm, leave now in order to arrive on time.",
          avoidWhen:
            "No confunda propósito con destinatario. “For you” es para usted, pero “to help you” es para ayudarle.",
          register: "neutro; “in order to” es un poco más explícito",
          region: "Inglés universal.",
          related: ["purpose", "to save", "in order to", "so that"],
          example: {
            target: "Buy early to save money.",
            translation: "Compre temprano para ahorrar dinero."
          }
        },
        {
          term: "by for deadline and means",
          explanation:
            "“By” hace dos trabajos que al hispanohablante le chocan: fecha límite y medio. “By Friday” significa a más tardar el viernes. “By bus”, “by plane” y “by text” nombran el medio o canal.",
          literal: "para una fecha límite / por medio de",
          useWhen:
            "Use “by” para deadlines y medios: by Friday, by noon, by bus, by plane, by WhatsApp, by email.",
          avoidWhen:
            "No lo use para duración. “By two days” no significa por dos días. Duración es “for two days”.",
          register: "neutro",
          region: "Inglés universal; “by WhatsApp” se entiende aunque también se diga “on WhatsApp”.",
          related: ["deadline", "means", "by Friday", "by bus"],
          example: {
            target: "I need the ticket by Friday.",
            translation: "Necesito el tiquete para el viernes."
          }
        },
        {
          term: "through",
          explanation:
            "“Through” marca ruta o movimiento por dentro de un lugar, una ciudad o una carretera. Es el equivalente de por cuando por significa pasar por, atravesar o ir por una vía.",
          literal: "por / a través de",
          useWhen:
            "Use “through” para rutas: pass through Waco, drive through town, go through the highway area.",
          avoidWhen:
            "No lo use para destino. Si Fort Worth es la meta, diga “to Fort Worth” o “leaving for Fort Worth”, no “leaving through Fort Worth”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["route", "pass through", "via", "across"],
          example: {
            target: "We pass through Waco on Sunday.",
            translation: "Pasamos por Waco el domingo."
          }
        },
        {
          term: "for duration, during for event frame",
          explanation:
            "Duración medida toma “for”: for two days, for three hours. “During” no mide cuánto dura algo; ubica algo dentro de un evento o periodo: during the trip, during December.",
          literal: "por una duración / durante un evento",
          useWhen:
            "Use “for” con cantidad de tiempo y “during” con el periodo que contiene la acción.",
          avoidWhen:
            "No diga “during two days” para duración normal. Suena como calco de durante y debe ser “for two days”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["for two days", "during the trip", "time span", "period"],
          example: {
            target: "The trip lasts for two days.",
            translation: "El viaje dura por dos días."
          }
        },
        {
          term: "because of / thanks for",
          explanation:
            "Para causa externa, inglés suele usar “because of”: because of the snow. Pero agradecer sí usa la frase fija “thanks for”. No todo por de causa entra en la misma palabra inglesa.",
          literal: "por causa de / gracias por",
          useWhen:
            "Use “because of” para motivos externos y “thanks for” para agradecer: because of the rain, thanks for everything.",
          avoidWhen:
            "No diga “the delay was for the snow” si quiere explicar la causa. Eso suena incompleto o incorrecto.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["reason", "cause", "thanks for", "due to"],
          example: {
            target: "The delay was because of the snow.",
            translation: "El retraso fue por la nieve."
          }
        },
        {
          term: "per for rate",
          explanation:
            "La tarifa o frecuencia que en español usa por muchas veces en inglés usa “per”: per pound, twice per week, sixty miles per hour, one bag per passenger. También se oye “a week” en habla común.",
          literal: "por cada / por frecuencia",
          useWhen:
            "Use “per” en tarifas, reglas y frecuencias claras: per pound, twice per week, dollars per night, one ticket per person.",
          avoidWhen:
            "No diga “two times for week”. Si quiere algo más conversacional, diga “twice a week”.",
          register: "neutro; “per” suena más escrito que “a week”",
          region: "Inglés universal.",
          related: ["rate", "frequency", "twice a week", "per person"],
          example: {
            target: "They charge per pound.",
            translation: "Cobran por libra."
          }
        },
        {
          term: "by for passive agent",
          explanation:
            "En una pasiva, el agente que hizo la acción usa “by”: checked by the company, written by the clerk, sent by the office. Es uno de los por que nunca debe traducirse como for.",
          literal: "por + agente pasivo",
          useWhen:
            "Use “by” cuando una oración pasiva nombra quién hizo la acción.",
          avoidWhen:
            "No diga “checked for the company” si quiere decir que la empresa revisó el paquete. Eso suena como beneficio, no agente.",
          register: "neutro; más común en avisos y escritura que en charla casual",
          region: "Inglés universal.",
          related: ["passive", "agent", "checked by", "written by"],
          example: {
            target: "The package was checked by the company.",
            translation: "El paquete fue revisado por la empresa."
          }
        },
        {
          term: "fixed expressions",
          explanation:
            "Muchas expresiones viajeras no se traducen palabra por palabra: por favor es “please”, por fin es “finally”, por eso es “that's why”, por supuesto es “of course”, por ahora es “for now”, por si acaso es “just in case”, para nada es “not at all”, y para siempre es “forever”.",
          literal: "frases fijas",
          useWhen:
            "Apréndalas como bloques completos para pedir, reaccionar, explicar, aceptar y proteger un plan.",
          avoidWhen:
            "No arme “by favor”, “for if case” o “for nothing” cuando quiere la frase fija. Algunas palabras existen, pero no forman la expresión correcta.",
          register: "neutro a conversacional",
          region: "Inglés universal; algunas opciones tienen equivalentes más formales, pero estas son seguras.",
          related: ["please", "finally", "of course", "just in case"],
          example: {
            target: "Please keep it just in case.",
            translation: "Por favor, guárdelo por si acaso."
          }
        }
      ],
      note:
        "Para un colombiano, el problema no es escoger entre por y para, sino dejar de meter ambos dentro de “for”. Inglés reparte el trabajo: destino puede ser “to” o “for” según el verbo, fecha límite es “by Friday”, medio es “by bus” o “by text”, ruta es “through”, duración es “for two days”, causa es “because of”, frecuencia es “per week”, propósito es “to” o “in order to”, y agente pasivo es “by”. “For” existe, pero no puede hacerlo todo.",
      culture: [
        {
          label: "El inglés obliga a separar lo que el español junta",
          body:
            "En español usted puede resolver muchísimas relaciones con por y para. En inglés, la pregunta cambia: ¿es destino, medio, fecha límite, duración, causa, frecuencia, ruta o propósito? Cada respuesta empuja a una palabra distinta. “For” sí aparece en frases importantes, pero no manda sobre todo el sistema. Por eso un viajero colombiano puede sonar avanzado en vocabulario y aun así decir “for bus”, “for Friday” o “for the snow”. El oyente entiende parte, pero la preposición revela el calco."
        },
        {
          label: "By es más importante de lo que parece",
          body:
            "“By” merece atención especial porque traduce dos ideas que el español no junta de la misma manera: medio y fecha límite. “By bus” es el medio. “By Friday” es a más tardar el viernes. Además, “by the company” marca agente pasivo. Tres usos muy distintos, una sola palabra inglesa. Si usted solo asocia by con “al lado de”, se pierde justo las frases de viaje y de oficina que más necesita."
        },
        {
          label: "For y during no compiten como por y durante",
          body:
            "El español permite decir “por dos días” y también usa durante en muchos contextos. El inglés separa más: una cantidad de tiempo normalmente toma “for”, como “for two days”. “During” ubica algo dentro de un periodo o evento, como “during the trip” o “during December”. Decir “during two days” suena a calco. La prueba práctica es simple: si puede responder “how long?”, use “for”."
        },
        {
          label: "Las frases fijas no se desarman",
          body:
            "“Please” no contiene favor, “finally” no contiene fin, y “just in case” no parece por si acaso palabra por palabra. Eso no importa. Las frases fijas se aprenden como señales completas. En una terminal, esas señales ahorran tiempo: please, of course, for now, just in case, that's why. Úselas como las oye, no como las armaría desde el diccionario."
        }
      ],
      pitfalls: [
        {
          mistake: "“I need it for Friday.”",
          whyItFails:
            "Puede entenderse, pero para fecha límite clara el inglés estándar prefiere “by Friday”. “For Friday” puede sonar como destinado a usarse el viernes, no terminado a más tardar ese día.",
          sayInstead: "I need it by Friday."
        },
        {
          mistake: "“I travel for bus.”",
          whyItFails:
            "El medio de transporte usa “by”, no “for”. El español por avión o en bus empuja al calco, pero en inglés la forma compacta es by bus, by plane, by train.",
          sayInstead: "I travel by bus."
        },
        {
          mistake: "“The delay was for the snow.”",
          whyItFails:
            "Para causa externa, “for” no es la opción natural. Use “because of” o, en un registro más formal, “due to”.",
          sayInstead: "The delay was because of the snow."
        },
        {
          mistake: "“The package was checked for the company.”",
          whyItFails:
            "Esa frase suena como si alguien revisó el paquete en beneficio de la empresa. Si la empresa hizo la revisión, la pasiva necesita “by”.",
          sayInstead: "The package was checked by the company."
        }
      ],
      variations: [
        {
          form: "I'm leaving for Fort Worth.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Destino después del verbo “leave”."
        },
        {
          form: "We pass through Waco.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Ruta o punto atravesado, no destino final."
        },
        {
          form: "I need it by Friday.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Fecha límite, a más tardar ese día."
        },
        {
          form: "The trip lasts for two days.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Duración medida, respuesta a “how long?”."
        },
        {
          form: "The notice came by text.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Medio o canal de comunicación."
        }
      ],
      prompt: "Claire says “by Friday” and “by bus.” ¿Qué tienen en común esas frases?",
      choices: [
        "Both use by, but one is a deadline and the other is a means of travel.",
        "Both use for, because Spanish would allow para or por in those places.",
        "Both use through, because Friday and bus are routes you pass inside."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase expresa correctamente una fecha límite?",
          choices: [
            "I need the ticket by Friday before the office closes.",
            "I need the ticket for Friday before the office closes.",
            "I need the ticket through Friday before the office closes."
          ],
          answer: 0,
          tests: "Una fecha límite usa “by Friday”, no “for Friday”."
        },
        {
          prompt: "¿Cuál frase expresa correctamente una duración?",
          choices: [
            "The trip lasts by two days with one stop.",
            "The trip lasts for two days with one stop.",
            "The trip lasts per two days with one stop."
          ],
          answer: 1,
          tests: "Una cantidad de tiempo toma “for”: for two days."
        },
        {
          prompt: "¿Cuál frase expresa correctamente la causa?",
          choices: [
            "The delay was for the snow last night.",
            "The delay was by the snow last night.",
            "The delay was because of the snow last night."
          ],
          answer: 2,
          tests: "Causa externa suele expresarse con “because of”, no con “for”."
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/39-developing-planning-a-trip.js");
