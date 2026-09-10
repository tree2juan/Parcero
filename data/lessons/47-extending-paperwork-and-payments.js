/*
 * Lesson block: extending / paperwork, signatures and being charged.
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
 * The three verbs here — entregar, firmar and cobrar — live where real life
 * touches paperwork and payment: handing a package or form over, signing what
 * has to be signed, and asking what a service provider charges without sounding
 * as if the service were a shelf item.
 */
lessons.push(
  {
    id: "receiving-a-delivery-at-the-monteria-porteria",
    level: "Extending · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    pathways: ["extension"],
    verb: "entregar",
    review: "pending",
    es: {
      title: "Recibir un paquete en la portería de Montería",
      situation:
        "En Montería, Alex está esperando un paquete que pidió a domicilio para el apartamento donde se hospeda. El domiciliario llega a la portería, pero el nombre en la guía está incompleto y el vigilante no quiere recibir nada hasta que Alex baje con la cédula. Entre la guía, la firma de recibido y la frase “ya lo entregué”, Alex aprende que entregar sirve tanto para repartir un paquete como para radicar papeles, y que en pretérito cambia a “entregué” para conservar el sonido de la g.",
      setting: {
        who: "The delivery rider is trying to finish a route before the afternoon heat breaks; the building guard is protecting the logbook; Alex is the foreign resident who must prove the package is really his.",
        what: "A package handover at the front desk, with the vocabulary of deliveries, receipts, IDs and the moment when something is officially delivered rather than merely left somewhere.",
        when: "Late afternoon, after a hot day in Montería, with several residents coming through the lobby at once.",
        where: "Montería, Córdoba, at the portería of a mid-rise residential building.",
        why: "Because deliveries in Colombia often pass through a guard, a logbook and a quick identity check. The learner needs the practical phrases for handing something over, saying who received it and understanding why “entregué” keeps a written u."
      },
      address: {
        form: "usted",
        who: "The guard, the delivery rider and Alex all use usted because they are strangers handling a package and a building procedure.",
        why: "This is friendly but procedural Spanish. Usted keeps the exchange courteous and clear while people check names, IDs and responsibilities.",
        ifYouSwitch: "Switching to tú would not make the package arrive faster; it would make Alex sound overly familiar with people who are doing a formal small task. In a portería, usted is the safe register."
      },
      dialogue: [
        {
          speaker: "Domiciliario",
          target: "Buenas, traigo un paquete para Alex. ¿Lo puedo entregar en portería?",
          translation: "Good afternoon, I have a package for Alex. Can I deliver it at the front desk?",
          pronunciation: "BWEH-nas, TRAI-goh oom pa-KEH-teh PA-ra AH-leks. lo PWEH-doh en-treh-GAR em por-teh-REE-ah",
          literal: "Good, I-bring a package for Alex. It can I deliver in front-desk?",
          why: "“Entregar” is the handover verb: the package leaves the courier's responsibility and becomes someone else's. “Portería” is the front desk or guard station common in Colombian apartment buildings."
        },
        {
          speaker: "Vigilante",
          target: "Un momento, señor. Si no está el apellido, necesito que el residente baje y reciba.",
          translation: "One moment, sir. If the surname isn't there, I need the resident to come down and receive it.",
          pronunciation: "oon moh-MEN-toh, seh-NYOR. see noh es-TAH el ah-peh-YEE-doh, neh-seh-SEE-toh keh el rreh-see-DEN-teh BAH-heh ee rreh-SEE-bah",
          literal: "One moment, sir. If not is the surname, I-need that the resident come-down and receive.",
          why: "The guard moves into a subordinate clause with the subjunctive “baje y reciba” after “necesito que”. This is exactly the kind of practical, polite bureaucracy where usted stays natural."
        },
        {
          speaker: "Alex",
          target: "Ya bajé. ¿A quién le entrego la cédula, a usted o al domiciliario?",
          translation: "I'm down now. Who do I hand my ID to, you or the delivery rider?",
          pronunciation: "ya ba-HEH. a KYEN leh en-TREH-goh la SEH-doo-lah, a oos-TED oh al doh-mee-see-LYAH-ryoh",
          literal: "Already I-came-down. To whom to-him I-hand-over the ID, to you or to-the delivery-rider?",
          why: "Alex now uses entregar for handing over an ID, not a package. “Cédula” is the Colombian national ID card; a foreigner may show another ID, but the word you hear is cédula."
        },
        {
          speaker: "Vigilante",
          target: "Muéstremela a mí, por favor, y firme aquí cuando le entreguen el paquete.",
          translation: "Show it to me, please, and sign here when they hand you the package.",
          pronunciation: "MWES-treh-meh-la a mee, por fah-BOR, ee FEER-meh ah-KEE KWAN-doh leh en-TREH-gen el pa-KEH-teh",
          literal: "Show-me-it to me, please, and sign here when to-you they-deliver the package.",
          why: "“Cuando le entreguen” uses the subjunctive because the delivery has not happened yet. The guard also asks for a signature of receipt, a standard proof that the handover took place."
        },
        {
          speaker: "Domiciliario",
          target: "Listo, se lo entregué al señor Alex y él firmó recibido.",
          translation: "Done, I delivered it to Mr. Alex and he signed as received.",
          pronunciation: "LEES-toh, seh lo en-treh-GEH al seh-NYOR AH-leks ee el feer-MOH rreh-see-BEE-doh",
          literal: "Ready, to-him it I-delivered to-the Mr Alex and he signed received.",
          why: "Here is the spelling trap: the preterite yo form is “entregué”, with gué, so the hard g sound survives before e. “Firmó recibido” is clipped paperwork Spanish for signing that something was received."
        },
        {
          speaker: "Alex",
          target: "Perfecto. Mañana tengo que entregar unos formularios; ya sé que no basta con dejarlos por ahí.",
          translation: "Perfect. Tomorrow I have to hand in some forms; now I know it's not enough to just leave them somewhere.",
          pronunciation: "per-FEK-toh. ma-NYAH-nah TEN-goh keh en-treh-GAR OO-nos for-moo-LAH-ryos; ya SEH keh noh BAS-tah kon deh-HAR-los por ah-EE",
          literal: "Perfect. Tomorrow I-have that to-hand-in some forms; already I-know that not enoughs with leaving-them around there.",
          why: "The same verb covers handing in paperwork. “Entregar” implies a responsible transfer to the right person or office, not abandoning a document on a counter."
        }
      ],
      vocabulary: [
        {
          term: "entregar",
          explanation: "To deliver, hand over or hand in. It marks a completed transfer to the person or place responsible for receiving it.",
          literal: "to hand over / deliver",
          useWhen: "Packages, documents, homework, keys: “entregar un paquete”, “entregar formularios”, “entregar las llaves”.",
          avoidWhen: "You only mean leaving something somewhere without proof or receiver; entregar implies a real handover.",
          register: "neutral",
          region: "Universal Spanish; very common in Colombian delivery and paperwork settings.",
          related: ["la entrega", "entrega a domicilio", "entregué", "recibir"],
          example: {
            target: "Tengo que entregar los papeles antes del viernes.",
            translation: "I have to hand in the papers before Friday."
          }
        },
        {
          term: "entregué",
          explanation: "The preterite yo form of entregar. The written u keeps the hard g sound before e.",
          literal: "I delivered / handed in",
          useWhen: "Reporting a completed handover: “ayer entregué la solicitud”, “ya le entregué las llaves”.",
          avoidWhen: "Writing “entregé”; without the u the spelling breaks the sound pattern Spanish uses for g before e.",
          register: "neutral",
          region: "Universal Spanish spelling rule.",
          related: ["entregar", "pagué", "llegué", "pretérito"],
          example: {
            target: "Entregué la factura en recepción.",
            translation: "I handed in the invoice at reception."
          }
        },
        {
          term: "la entrega",
          explanation: "The delivery or handover itself, both as an event and as the thing scheduled.",
          literal: "the delivery / handover",
          useWhen: "Tracking orders or deadlines: “la entrega llega hoy”, “fecha de entrega”, “prueba de entrega”.",
          avoidWhen: "You mean a personal gift; entrega is the handover, not necessarily a present.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["entregar", "fecha de entrega", "prueba de entrega", "domicilio"],
          example: {
            target: "La entrega quedó programada para la tarde.",
            translation: "The delivery was scheduled for the afternoon."
          }
        },
        {
          term: "entrega a domicilio",
          explanation: "Home delivery, literally delivery to an address. Domicilio is also used for the service or the rider.",
          literal: "delivery to home",
          useWhen: "Ordering or receiving things at home: “¿tienen entrega a domicilio?”, “el domicilio llegó”.",
          avoidWhen: "You assume domicilio only means legal residence; in daily Colombian speech it also means delivery service.",
          register: "neutral",
          region: "Common across Colombia.",
          related: ["domicilio", "domiciliario", "pedido", "dirección"],
          example: {
            target: "¿La farmacia tiene entrega a domicilio?",
            translation: "Does the pharmacy do home delivery?"
          }
        },
        {
          term: "firmar recibido",
          explanation: "To sign that you received something. It is a compact administrative phrase, not a full elegant sentence.",
          literal: "to sign received",
          useWhen: "Packages, files and supplies: “firme recibido”, “él firmó recibido”.",
          avoidWhen: "You are signing a contract; there you sign the contract itself, not “recibido”.",
          register: "polite service",
          region: "Common administrative Spanish in Colombia.",
          related: ["firma", "recibido", "constancia", "guía"],
          example: {
            target: "Firme recibido en esta casilla.",
            translation: "Sign as received in this box."
          }
        },
        {
          term: "la guía",
          explanation: "The waybill or tracking slip attached to a shipment. It carries the name, address and tracking number.",
          literal: "the guide",
          useWhen: "Courier deliveries: “número de guía”, “la guía no tiene apartamento”.",
          avoidWhen: "You mean a person who leads a tour; guía can be that too, but delivery context changes it.",
          register: "neutral",
          region: "Universal Spanish; very common in courier contexts.",
          related: ["número de guía", "rastreo", "paquete", "transportadora"],
          example: {
            target: "La guía no trae el apellido completo.",
            translation: "The waybill doesn't have the full surname."
          }
        },
        {
          term: "radicar",
          explanation: "To officially file or lodge paperwork so there is a record it was received.",
          literal: "to root / file",
          useWhen: "Formal paperwork: “radicar una solicitud”, “radicar una tutela”, “número de radicado”.",
          avoidWhen: "A casual handover; radicar is more bureaucratic than entregar and implies official intake.",
          register: "polite formal",
          region: "Very common in Colombian administration.",
          related: ["radicado", "solicitud", "ventanilla", "entregar papeles"],
          example: {
            target: "Radicamos la solicitud antes de que cerraran.",
            translation: "We filed the request before they closed."
          }
        }
      ],
      note:
        "Entregar is about responsibility changing hands. A courier entrega a package; a student entrega a paper; a tenant entrega the keys; an office receives and may radicar a request. The useful contrast is with dejar: you can dejar a folder on a desk without anyone taking responsibility, but you entregar it to someone. In the preterite, remember the spelling change: “entregué”, not “entregé”, because Spanish writes gué to keep the hard g sound.",
      culture: [
        {
          label: "The portería as a paperwork filter",
          body: "In many Colombian apartment buildings, the portería is more than a door. Guards receive packages, call residents, note plate numbers, keep logbooks and decide whether something can be left. That small desk creates a paper trail. A delivery may feel casual, but the guard hears risk: if the package is lost after he signs, the building may blame him. That is why names, IDs and signatures matter."
        },
        {
          label: "Delivery Spanish is administrative Spanish",
          body: "A delivery app may look informal, but the language around it is full of bureaucracy: guía, recibido, constancia, novedad, soporte. Colombians move easily between chatty “ya llegó el domicilio” and formal “quedó entregado a las 4:15”. A learner who catches those words can solve problems when an order says it was delivered but nobody in the apartment has seen it."
        },
        {
          label: "Handing in is not dropping off",
          body: "For paperwork, entregar is safer than dejar because it implies a receiver. If a deadline matters, you want a name, stamp, radicado number or email confirmation. This is not paranoia; it is how Colombian bureaucracy protects both sides. The person who says “yo lo entregué” is claiming completion, and the system usually asks for proof of that exact moment."
        }
      ],
      pitfalls: [
        {
          mistake: "Writing “entregé” for “I handed it in”",
          whyItFails: "The sound is right in your head but the spelling is wrong. Before e, Spanish needs gu to keep the hard g, so the preterite yo form is “entregué”.",
          sayInstead: "Ayer entregué los papeles."
        },
        {
          mistake: "Using “dejar” when proof of handover matters",
          whyItFails: "“Dejé los papeles” may mean you simply left them somewhere. If an office, guard or courier must take responsibility, “entregar” is the safer verb.",
          sayInstead: "Entregué los papeles en ventanilla."
        },
        {
          mistake: "Assuming “domicilio” only means legal address",
          whyItFails: "In Colombia, domicilio also means delivery service or the delivery order itself. “Llegó el domicilio” means the delivery arrived, not that someone's legal residence arrived.",
          sayInstead: "El domicilio ya llegó a la portería."
        }
      ],
      variations: [
        {
          form: "¿Lo puedo entregar en portería?",
          register: "polite service",
          region: "Colombia",
          whenToUse: "A courier asking whether the guard can receive a package."
        },
        {
          form: "Entregué los papeles en ventanilla.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Reporting that paperwork was handed in properly."
        },
        {
          form: "Firme recibido, por favor.",
          register: "polite service",
          region: "Colombia",
          whenToUse: "Asking someone to sign proof of receipt."
        },
        {
          form: "Necesito el número de radicado.",
          register: "polite formal",
          region: "Colombia",
          whenToUse: "Asking for the official filing number after paperwork is received."
        }
      ],
      prompt: "Why does the courier say “se lo entregué al señor Alex” instead of just “lo dejé ahí”?",
      choices: [
        "Because entregar says the package passed responsibly to the right receiver.",
        "Because entregar means the package was opened and checked for damage.",
        "Because entregar says the delivery was canceled before it reached Alex."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which spelling is correct for “I handed in the form yesterday”?",
          choices: [
            "Ayer entregé el formulario.",
            "Ayer entregue el formulario.",
            "Ayer entregué el formulario."
          ],
          answer: 2,
          tests: "entregué keeps hard g with gué"
        },
        {
          prompt: "What does “entrega a domicilio” mean in this setting?",
          choices: [
            "home delivery of an order",
            "legal proof of residence",
            "a tour guide at home"
          ],
          answer: 0,
          tests: "domicilio as delivery"
        },
        {
          prompt: "Which sentence best shows an official paperwork handover?",
          choices: [
            "Dejé los papeles por ahí.",
            "Radicaron la solicitud en ventanilla.",
            "Miré los papeles un momento."
          ],
          answer: 1,
          tests: "radicar means officially file"
        }
      ]
    },
    en: {
      title: "Entregar un paquete sin decir “deliver it in reception”",
      situation:
        "En Houston, Alejandra espera un paquete en el edificio donde vive. El mensajero pregunta si puede dejarlo at the front desk, pero el portero necesita que ella baje y firme for it. Alejandra aprende que “deliver” no cubre todo: para papeles se dice “hand in”, para darle algo a una persona “hand over”, para dejar un paquete “drop off”, y para firmar recibido “sign for it”.",
      setting: {
        who: "El mensajero quiere terminar su ruta, el concierge sigue la política del edificio y Alejandra necesita el paquete sin firmar algo que no entienda.",
        what: "Una entrega en recepción, con las diferencias entre deliver, drop off, hand over, hand in y sign for.",
        when: "Una tarde de invierno, cuando varios residentes están llegando del trabajo y la recepción está ocupada.",
        where: "Houston, Canadá, en la recepción de un edificio de apartamentos.",
        why: "Porque el inglés reparte “entregar” entre varios verbos. Un colombiano que usa solo “deliver” puede sonar raro al hablar de tareas, formularios o documentos que se entregan a una oficina."
      },
      address: {
        form: "mixed",
        who: "El inglés usa “you” para el mensajero, el concierge y Alejandra; la formalidad se marca con “could”, “please” y tono profesional.",
        why: "No hay usted, pero sí hay registro. En una recepción, “could you” y “please” hacen el trabajo de cortesía que en español recae en parte sobre usted.",
        ifYouSwitch: "Si Alejandra busca otro pronombre para sonar formal, no lo encontrará. Tiene que ajustar el verbo y los suavizadores, no la segunda persona."
      },
      dialogue: [
        {
          speaker: "Courier",
          target: "Hi, I have a package for Alejandra. Can I drop it off at the front desk?",
          translation: "Buenas, traigo un paquete para Alejandra. ¿Lo puedo entregar en recepción?",
          pronunciation: "jai, ai jav a PA-kej for a-le-JAN-dra. kan ai drop it of at de front desk",
          literal: "Hola, tengo un paquete para Alejandra. ¿Puedo soltarlo en el escritorio del frente?",
          why: "“Drop off” es la frase cotidiana para dejar un paquete en un lugar autorizado. “Deliver” describe el proceso completo, pero el mensajero aquí pregunta por el punto exacto donde lo deja."
        },
        {
          speaker: "Concierge",
          target: "One moment, please. If the surname is missing, the resident has to come down and sign for it.",
          translation: "Un momento, por favor. Si falta el apellido, la residente tiene que bajar y firmar recibido.",
          pronunciation: "uan MOU-ment pliz. if de SER-neim is MI-sing, de RE-zi-dent jas tu kom daun and sain for it",
          literal: "Un momento, por favor. Si el apellido falta, la residente tiene que bajar y firmar por ello.",
          why: "“Sign for it” significa firmar como prueba de recibido. No se dice “sign received” en inglés natural; la preposición “for” pone la firma al servicio del recibo."
        },
        {
          speaker: "Alejandra",
          target: "I'm here. Should I hand over my ID to you or to the courier?",
          translation: "Ya bajé. ¿Le entrego mi documento a usted o al mensajero?",
          pronunciation: "aim jir. shud ai jand OU-ver mai ai-DI tu yu or tu de KUR-i-er",
          literal: "Estoy aquí. ¿Debería pasar mi identificación a usted o al mensajero?",
          why: "“Hand over” es entregar algo a una persona, a menudo con un matiz de control o responsabilidad. Para un documento en la mano, suena mejor que “deliver my ID”."
        },
        {
          speaker: "Concierge",
          target: "Show it to me, please, and sign here when he hands you the package.",
          translation: "Muéstremelo a mí, por favor, y firme aquí cuando él le entregue el paquete.",
          pronunciation: "shou it tu mi, pliz, and sain jir wen ji jands yu de PA-kej",
          literal: "Muéstrelo a mí, por favor, y firme aquí cuando él mano-verbo usted el paquete.",
          why: "“Hand someone something” es darlo en la mano. El inglés no necesita subjuntivo después de “when”, aunque el evento todavía no haya ocurrido."
        },
        {
          speaker: "Courier",
          target: "Done. I handed it to Alejandra, and she signed for it.",
          translation: "Listo. Se lo entregué a Alejandra y ella firmó recibido.",
          pronunciation: "dan. ai JAN-ded it tu a-le-JAN-dra, and shi saind for it",
          literal: "Hecho. Yo lo pasé-a-mano a Alejandra, y ella firmó por ello.",
          why: "El reporte usa “handed it to” para la entrega directa y “signed for it” para el comprobante. “Delivered it to” también serviría, pero “handed it to” enfatiza la transferencia personal."
        },
        {
          speaker: "Alejandra",
          target: "Tomorrow I have to hand in some forms, so I should not just leave them on a counter.",
          translation: "Mañana tengo que entregar unos formularios, así que no debería dejarlos simplemente en un mostrador.",
          pronunciation: "tu-MO-rou ai jav tu jand in som forms, so ai shud not yast liv dem on a KAUN-ter",
          literal: "Mañana tengo que mano-adentro unos formularios, entonces no debería solo dejarlos sobre un mostrador.",
          why: "Para tareas, formularios y documentos que se entregan a una institución, el verbo es “hand in”. “Deliver forms” suena posible en logística, pero no es la frase normal de oficina o escuela."
        }
      ],
      vocabulary: [
        {
          term: "deliver",
          explanation: "Llevar algo hasta su destino, sobre todo paquetes, comida, mercancía o mensajes.",
          literal: "entregar / repartir",
          useWhen: "Logística y servicios: “they delivered the package”, “we deliver groceries”.",
          avoidWhen: "Habla de tareas o formularios que usted entrega a una oficina; ahí suele ser “hand in”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["delivery", "deliver a package", "courier", "drop off"],
          example: {
            target: "They delivered the package this afternoon.",
            translation: "Entregaron el paquete esta tarde."
          }
        },
        {
          term: "drop off",
          explanation: "Dejar algo o a alguien en un punto: un paquete en recepción, una persona en casa.",
          literal: "dejar / soltar en un lugar",
          useWhen: "Entregas prácticas: “drop it off at the front desk”, “drop me off here”.",
          avoidWhen: "Necesita destacar una entrega formal a una persona responsable; “hand over” puede ser mejor.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["drop-off", "pick up", "front desk", "leave"],
          example: {
            target: "Can you drop it off at reception?",
            translation: "¿Puede dejarlo en recepción?"
          }
        },
        {
          term: "hand over",
          explanation: "Entregar algo a otra persona, con la idea de pasar control o responsabilidad.",
          literal: "pasar a la mano / entregar",
          useWhen: "Documentos, llaves, identificación: “hand over your keys”, “hand it over to security”.",
          avoidWhen: "Una tarea escolar o formulario que se entrega a una institución; ahí es “hand in”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["hand over the keys", "give", "transfer", "hand to"],
          example: {
            target: "Please hand over your ID.",
            translation: "Por favor entregue su documento."
          }
        },
        {
          term: "hand in",
          explanation: "Entregar tareas, formularios o documentos a una autoridad, escuela u oficina.",
          literal: "pasar adentro / entregar",
          useWhen: "Papeles: “hand in the form”, “hand in your homework”, “hand in the application”.",
          avoidWhen: "Un mensajero deja un paquete en recepción; eso es “drop off” o “deliver”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["submit", "turn in", "forms", "application"],
          example: {
            target: "I handed in the forms before the deadline.",
            translation: "Entregué los formularios antes del plazo."
          }
        },
        {
          term: "sign for it",
          explanation: "Firmar como constancia de recibido. La firma confirma que usted recibió el paquete.",
          literal: "firmar por ello",
          useWhen: "Paquetes y correo certificado: “you need to sign for the package”.",
          avoidWhen: "Está firmando un contrato; ahí simplemente “sign the contract”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["signature", "receipt", "proof of delivery", "received"],
          example: {
            target: "She signed for the package at the front desk.",
            translation: "Ella firmó recibido por el paquete en recepción."
          }
        },
        {
          term: "delivery",
          explanation: "La entrega o el domicilio. Puede ser el servicio, el paquete o el acto de entregar.",
          literal: "entrega / domicilio",
          useWhen: "Pedidos: “food delivery”, “delivery address”, “proof of delivery”.",
          avoidWhen: "Traducir todo domicilio como residence; en pedidos, domicilio suele ser delivery.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["delivery address", "proof of delivery", "courier", "order"],
          example: {
            target: "The delivery address is missing the apartment number.",
            translation: "A la dirección de entrega le falta el apartamento."
          }
        },
        {
          term: "submit",
          explanation: "Enviar o entregar formalmente una solicitud, formulario o documento para revisión.",
          literal: "presentar / radicar / entregar",
          useWhen: "Trámites y formularios en línea: “submit the application”, “submit your documents”.",
          avoidWhen: "Una entrega física casual; “submit” suena más administrativo que “hand in”.",
          register: "polite formal",
          region: "Inglés universal.",
          related: ["submission", "application", "hand in", "file"],
          example: {
            target: "Submit the application before Friday.",
            translation: "Radique la solicitud antes del viernes."
          }
        }
      ],
      note:
        "El inglés no tiene un solo “entregar” para todo. Un mensajero “delivers” un paquete, pero también puede “drop it off” en recepción. Si usted le pasa el documento a alguien, “hand it over” o “hand it to them”. Si entrega formularios, tareas o solicitudes, normalmente “hand in” o, más formal, “submit”. Y para la constancia de recibido no diga “sign received”: diga “sign for it”.",
      culture: [
        {
          label: "Front desk, concierge, reception",
          body: "En edificios anglófonos, el lugar que un colombiano llama portería puede ser “front desk”, “concierge desk” o “reception”, según el edificio. “Doorman” existe, pero no siempre describe a quien lleva registros y recibe paquetes. La función se parece a la portería colombiana, pero las palabras cambian. Por eso conviene aprender frases completas: “drop it off at the front desk”, “the concierge signed for it”."
        },
        {
          label: "Proof of delivery",
          body: "Las entregas en inglés también viven de pruebas: tracking number, proof of delivery, signature, delivery photo. Si una aplicación dice “delivered” pero el paquete no aparece, esas palabras son las que abren el reclamo. “Signed for by concierge” significa que alguien firmó recibido; “left at front desk” significa que lo dejaron allí. La diferencia importa cuando nadie sabe dónde quedó."
        },
        {
          label: "Forms are handed in or submitted",
          body: "Para un colombiano, entregar papeles parece un verbo sencillo. En inglés, el contexto decide: en la escuela se “hand in” homework; en una oficina se “submit” an application; en recepción se “drop off” a file. Usar “deliver” con formularios se entiende, pero puede sonar a mensajería, como si usted fuera el courier y no el solicitante."
        }
      ],
      pitfalls: [
        {
          mistake: "“I delivered my homework yesterday.”",
          whyItFails: "Se entiende, pero suena como si usted fuera mensajero. Para tareas, formularios y trabajos académicos, la frase natural es “hand in” o “turn in”.",
          sayInstead: "I handed in my homework yesterday."
        },
        {
          mistake: "“Please sign received here.”",
          whyItFails: "Calca “firme recibido”. En inglés la estructura es “sign for it” o “sign here to confirm receipt”, no “sign received”.",
          sayInstead: "Please sign for it here."
        },
        {
          mistake: "“I handed in my ID to the guard.”",
          whyItFails: "“Hand in” suena a entregar una tarea o formulario a una institución. Para pasarle un documento a una persona, use “hand over” o “hand to”.",
          sayInstead: "I handed my ID to the guard."
        }
      ],
      variations: [
        {
          form: "Can I drop it off at the front desk?",
          register: "polite service",
          region: "Inglés universal",
          whenToUse: "Preguntar si puede dejar un paquete en recepción."
        },
        {
          form: "I handed in the forms.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Decir que entregó formularios o tareas."
        },
        {
          form: "Please sign for the package.",
          register: "polite service",
          region: "Inglés universal",
          whenToUse: "Pedir firma como constancia de recibido."
        },
        {
          form: "Submit the application online.",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Dar una instrucción formal sobre una solicitud."
        }
      ],
      prompt: "Alejandra entrega formularios a una oficina. ¿Qué verbo suena más natural?",
      choices: [
        "I handed in the forms.",
        "I delivered the forms.",
        "I dropped the forms."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cómo se dice “firme recibido” para un paquete?",
          choices: [
            "Please sign received.",
            "Please sign for it.",
            "Please firm the package."
          ],
          answer: 1,
          tests: "sign for it = firmar recibido"
        },
        {
          prompt: "¿Qué dice el mensajero si quiere dejar el paquete en recepción?",
          choices: [
            "Can I drop it off at the front desk?",
            "Can I hand it in as homework?",
            "Can I submit it as an application?"
          ],
          answer: 0,
          tests: "drop off at the front desk"
        },
        {
          prompt: "¿Cuál frase sirve para una solicitud formal en línea?",
          choices: [
            "Submit the application before Friday.",
            "Drop the application by Friday.",
            "Sign for the application Friday."
          ],
          answer: 0,
          tests: "submit for formal applications"
        }
      ]
    }
  },
  {
    id: "signing-a-rental-contract-in-manizales",
    level: "Extending · Housing",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "work-and-employment",
    register: "formal",
    pathways: ["extension"],
    verb: "firmar",
    review: "pending",
    es: {
      title: "Firmar el contrato de arriendo en Manizales",
      situation:
        "En Manizales, Alex va a firmar un contrato de arriendo para un apartaestudio. La asesora de la inmobiliaria le pide la cédula, una copia del recibo de servicios y la firma en cada hoja; además le explica que, como falta autenticar una firma en notaría, el contrato no queda completo hasta que el codeudor lo haga. Alex descubre que firmar es regular, pero que todo lo que lo rodea —firma, recibo, factura, autenticación, notaría— es el verdadero vocabulario de la vida adulta.",
      setting: {
        who: "The real-estate agent is careful because a lease can create real legal trouble; Alex wants the room but does not want to sign anything he does not understand.",
        what: "A rental contract appointment, moving through signatures, IDs, service bills, receipts and the notary step that makes a signature formally valid.",
        when: "A rainy weekday morning, with the office trying to finish the lease before the owner leaves town.",
        where: "Manizales, Caldas, in a small real-estate office near the center.",
        why: "Because Colombian bureaucracy is built around signatures that prove identity and consent. Firmar is regular, but the surrounding paperwork is not optional background; it is the language that keeps a renter from missing a clause or an authentication step."
      },
      address: {
        form: "usted",
        who: "The agent and Alex use usted throughout because they are handling a contract in a professional setting.",
        why: "A lease is not a casual favour. Usted, “por favor” and careful conditional phrases let Alex ask questions without sounding suspicious or rude.",
        ifYouSwitch: "Switching to tú would make the exchange feel too casual for a legal document. In a rental office, usted protects the seriousness of the agreement."
      },
      dialogue: [
        {
          speaker: "Asesora",
          target: "Antes de que firme, revise que el nombre y el número de cédula estén bien escritos.",
          translation: "Before you sign, check that the name and ID number are written correctly.",
          pronunciation: "AN-tes de keh FEER-meh, rreh-BEE-seh keh el NOM-breh ee el NOO-meh-roh de SEH-doo-lah es-TEN byen es-KREE-tos",
          literal: "Before that you-sign, check that the name and the number of ID be well written.",
          why: "“Antes de que firme” triggers the subjunctive because the signature has not happened yet. The first task is not signing quickly; it is verifying identity details."
        },
        {
          speaker: "Alex",
          target: "Veo mi nombre, pero el segundo apellido quedó sin tilde. ¿Eso afecta la firma?",
          translation: "I see my name, but the second surname was left without an accent mark. Does that affect the signature?",
          pronunciation: "BEH-oh mee NOM-breh, PEH-ro el seh-GOON-doh ah-peh-YEE-doh keh-DOH sin TEEL-deh. EH-so ah-FEK-tah la FEER-mah",
          literal: "I-see my name, but the second surname remained without accent-mark. That affects the signature?",
          why: "Alex uses “la firma” as the noun, not the verb. In paperwork, accents, ID numbers and surnames matter because they tie the signature to the person."
        },
        {
          speaker: "Asesora",
          target: "Lo corregimos antes de imprimir otra vez; no conviene firmar un contrato con datos distintos a la cédula.",
          translation: "We'll correct it before printing again; it's not advisable to sign a contract with details that differ from the ID.",
          pronunciation: "lo ko-rreh-HEE-mos AN-tes de eem-pree-MEER OH-tra bes; noh kon-BYEH-neh feer-MAR oon kon-TRAH-toh kon DA-tos dees-TEEN-tos a la SEH-doo-lah",
          literal: "It we-correct before of printing again; not suits to-sign a contract with data different to the ID.",
          why: "The agent's “no conviene” is a formal softener: not “you are forbidden,” but “it is unwise.” Firmar is regular, yet what you sign must match the cédula."
        },
        {
          speaker: "Alex",
          target: "También traje el recibo de servicios que me pidieron, aunque no sé si sirve como soporte.",
          translation: "I also brought the utility bill they asked me for, although I don't know whether it works as supporting documentation.",
          pronunciation: "tam-BYEN TRAH-heh el rreh-SEE-boh de ser-BEE-syos keh meh pee-DYEH-ron, AUN-keh noh SEH see SEER-beh KO-moh so-POR-teh",
          literal: "Also I-brought the receipt of services that they asked me-for, although not I-know if it serves as support.",
          why: "“Recibo de servicios” is the utility bill used to prove an address. “Soporte” is supporting document, not emotional support, in office Spanish."
        },
        {
          speaker: "Asesora",
          target: "Sirve, pero falta que el codeudor autentique la firma en la notaría y nos entregue la factura del trámite.",
          translation: "It works, but the co-signer still needs to notarise the signature and give us the invoice for the procedure.",
          pronunciation: "SEER-beh, PEH-ro FAL-tah keh el koh-deh-oo-DOR au-ten-TEE-keh la FEER-mah en la noh-tah-REE-ah ee nos en-TREH-geh la fak-TOO-rah del TRAH-mee-teh",
          literal: "It serves, but lacks that the co-debtor authenticate the signature in the notary and to-us deliver the invoice of-the procedure.",
          why: "“Falta que...” also triggers subjunctive: “autentique” and “entregue”. Colombian rentals often involve a codeudor and notarised signatures, so this vocabulary is not decorative."
        },
        {
          speaker: "Alex",
          target: "Entonces firmo cuando corrijan el apellido, y no antes de que el contrato quede igual a mi cédula.",
          translation: "Then I'll sign when they correct the surname, and not before the contract matches my ID.",
          pronunciation: "en-TON-ses FEER-moh KWAN-doh ko-RREE-han el ah-peh-YEE-doh, ee noh AN-tes de keh el kon-TRAH-toh KEH-deh ee-GWAL a mee SEH-doo-lah",
          literal: "Then I-sign when they-correct the surname, and not before that the contract becomes equal to my ID.",
          why: "Alex uses future-facing subjunctives after “cuando” and “antes de que”. This is extension-level practical grammar: he signs only once the paperwork is correct."
        }
      ],
      vocabulary: [
        {
          term: "firmar",
          explanation: "To sign. The verb is regular; the hard part is knowing what document, box or authentication the signature belongs to.",
          literal: "to sign",
          useWhen: "Contracts, receipts, forms, authorisations: “firmar un contrato”, “firme aquí”.",
          avoidWhen: "You mean printing your name without legal intent; a signature carries consent or receipt.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["la firma", "firme aquí", "firmado", "sin firmar"],
          example: {
            target: "No firme nada que no entienda.",
            translation: "Don't sign anything you don't understand."
          }
        },
        {
          term: "la firma",
          explanation: "The signature itself, either the mark on the page or, in business Spanish, sometimes the company.",
          literal: "the signature",
          useWhen: "Paperwork: “falta su firma”, “la firma no coincide”, “firma digital”.",
          avoidWhen: "You translate it as “firm” every time; in paperwork it is signature, not a business.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["firmar", "firmante", "firma digital", "autenticar"],
          example: {
            target: "La firma debe coincidir con la cédula.",
            translation: "The signature must match the ID."
          }
        },
        {
          term: "firme aquí",
          explanation: "The standard polite instruction: sign here. It is the usted imperative of firmar.",
          literal: "sign here",
          useWhen: "Counters, deliveries, leases and forms: “firme aquí y ponga la fecha”.",
          avoidWhen: "Speaking to a close friend in tú; then it is “firma aquí”, but formal counters usually use usted.",
          register: "polite service",
          region: "Universal Spanish; constant in Colombian offices.",
          related: ["firma aquí", "ponga la fecha", "casilla", "recibido"],
          example: {
            target: "Firme aquí y escriba la fecha.",
            translation: "Sign here and write the date."
          }
        },
        {
          term: "la cédula",
          explanation: "The Colombian national ID card, and the word Colombians reach for when they ask for official identification.",
          literal: "the ID card",
          useWhen: "Any formal identity check: “número de cédula”, “muéstreme la cédula”.",
          avoidWhen: "Assuming a foreign passport is called cédula; locals may say cédula generically, but your document may be a passport.",
          register: "neutral",
          region: "Colombia.",
          related: ["documento", "número de cédula", "identificación", "pasaporte"],
          example: {
            target: "¿Me permite su cédula, por favor?",
            translation: "May I see your ID, please?"
          }
        },
        {
          term: "el recibo",
          explanation: "A receipt, and in Colombia also a utility bill when people say recibo de servicios.",
          literal: "the receipt / bill",
          useWhen: "Proof of payment or address: “recibo de caja”, “recibo de luz”, “recibo de servicios”.",
          avoidWhen: "You need an invoice for tax or accounting; that is usually factura, not a simple recibo.",
          register: "neutral",
          region: "Universal Spanish; “recibo de servicios” is especially practical in Colombia.",
          related: ["recibo de servicios", "comprobante", "factura", "soporte"],
          example: {
            target: "Traiga un recibo de servicios reciente.",
            translation: "Bring a recent utility bill."
          }
        },
        {
          term: "la factura",
          explanation: "An invoice or formal bill, often needed for taxes, accounting or proof of a procedure.",
          literal: "the invoice / bill",
          useWhen: "Purchases and services: “factura electrónica”, “pídale la factura”, “la factura del trámite”.",
          avoidWhen: "You only need a casual proof that something was paid; recibo may be enough.",
          register: "neutral",
          region: "Universal Spanish; electronic invoicing is now routine in Colombia.",
          related: ["factura electrónica", "cobro", "NIT", "recibo"],
          example: {
            target: "Necesito la factura a mi nombre.",
            translation: "I need the invoice in my name."
          }
        },
        {
          term: "autenticar en la notaría",
          explanation: "To notarise a signature before a Colombian notary. It proves the signer appeared and identified themselves.",
          literal: "to authenticate at the notary office",
          useWhen: "Leases, authorisations and formal letters: “autentique la firma en notaría”.",
          avoidWhen: "Thinking it means the notary approves the whole contract; usually they authenticate the signature, not the deal.",
          register: "polite formal",
          region: "Very common in Colombian bureaucracy.",
          related: ["notaría", "autenticación", "firma autenticada", "codeudor"],
          example: {
            target: "El codeudor debe autenticar la firma en la notaría.",
            translation: "The co-signer must notarise the signature."
          }
        }
      ],
      note:
        "Firmar is regular — firmo, firmé, firmado — so spend your energy on the paperwork around it. In Colombia you will be asked for la cédula, el recibo de servicios, la factura, el soporte and sometimes an authenticated signature from a notaría. “Firme aquí” is the everyday usted command, but a signature is not just ink: it proves receipt, consent or identity. Before you sign, check that names and ID numbers match the document you actually carry.",
      culture: [
        {
          label: "Notaries are everyday infrastructure",
          body: "In Colombia, notaries are not rare specialists for once-in-a-life documents. People go to notarías for authenticated signatures, powers of attorney, sworn statements, property procedures and lease paperwork. The notary often verifies identity and signature rather than judging the whole agreement. That distinction matters: a notarised signature proves who signed, not necessarily that every clause was wise."
        },
        {
          label: "The cédula anchors the paperwork",
          body: "A Colombian cédula number follows a person through contracts, health care, banking, cell phone plans and official forms. Foreigners quickly learn that many systems ask for “cédula” even when the real document is a passport or foreigner ID. If the contract spells a name differently from the ID, the problem may seem tiny until a bank, landlord or clerk refuses to match the records."
        },
        {
          label: "Receipt or invoice?",
          body: "Recibo and factura overlap in English as bill or receipt, but they do different administrative work. A recibo can show payment or an address, especially a utility bill. A factura is the formal invoice, now often electronic, that matters for accounting and tax. Knowing which one a person asked for saves a second trip, which is the real currency of bureaucracy."
        }
      ],
      pitfalls: [
        {
          mistake: "Signing before the ID details match",
          whyItFails: "A missing accent may be harmless in speech, but legal and rental paperwork often depends on exact names and ID numbers. Signing first can make the correction slower or create doubt later.",
          sayInstead: "Corrijamos el apellido antes de firmar."
        },
        {
          mistake: "Translating “firma” as “firm” in a lease",
          whyItFails: "In this context “firma” is a signature, not a company. “La firma no coincide” means the signature doesn't match, not that the business disagrees.",
          sayInstead: "La firma debe coincidir con el documento."
        },
        {
          mistake: "Assuming notarising approves the whole contract",
          whyItFails: "A Colombian notary commonly authenticates the signature: identity and appearance. That does not mean the notary has explained or endorsed every clause you are signing.",
          sayInstead: "Voy a revisar el contrato antes de autenticar la firma."
        }
      ],
      variations: [
        {
          form: "Firme aquí y ponga la fecha.",
          register: "polite service",
          region: "Universal Spanish",
          whenToUse: "Giving a standard signing instruction at a counter."
        },
        {
          form: "La firma debe estar autenticada.",
          register: "polite formal",
          region: "Colombia",
          whenToUse: "Saying a signature must be notarised."
        },
        {
          form: "Necesito una copia de la cédula.",
          register: "polite formal",
          region: "Colombia",
          whenToUse: "Asking for ID paperwork in an office."
        },
        {
          form: "¿Me expide factura electrónica?",
          register: "polite formal",
          region: "Colombia",
          whenToUse: "Asking for a formal electronic invoice."
        }
      ],
      prompt: "Why does the agent say “antes de que firme” with “firme”?",
      choices: [
        "Because the signing is still future or pending, so the subordinate clause uses subjunctive.",
        "Because firmar is irregular and changes its stem in every formal usted command.",
        "Because Colombian contracts never allow the verb firmar to appear in the infinitive."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which phrase means “sign here” in polite usted form?",
          choices: [
            "Firma aquí.",
            "Firme aquí.",
            "Firmo aquí."
          ],
          answer: 1,
          tests: "firme aquí = usted command"
        },
        {
          prompt: "What is a “recibo de servicios” usually used for in paperwork?",
          choices: [
            "to prove an address with a utility bill",
            "to reject a rental contract politely",
            "to show a restaurant menu in advance"
          ],
          answer: 0,
          tests: "recibo de servicios = utility bill"
        },
        {
          prompt: "What does “autenticar la firma en la notaría” mainly prove?",
          choices: [
            "that the notary liked every clause",
            "that the signer appeared and signed",
            "that the rent was already paid"
          ],
          answer: 1,
          tests: "notary authenticates signature"
        }
      ]
    },
    en: {
      title: "Firmar un contrato sin perderse entre receipt, bill e invoice",
      situation:
        "En Manchester, Alejandra va a firmar un tenancy agreement para alquilar una habitación. La agente le pide proof of ID, a utility bill and a signature on each page. Alejandra quiere decir “authenticar la firma en notaría”, pero descubre que el sistema inglés habla de witnessing a signature, certifying a copy y notarising solo en contextos más limitados. También aprende que receipt, bill e invoice no son intercambiables.",
      setting: {
        who: "La agente inmobiliaria es cuidadosa porque los papeles de arriendo tienen consecuencias legales; Alejandra quiere la habitación, pero necesita entender cada documento antes de firmar.",
        what: "Una cita para firmar un contrato de arriendo, con vocabulary for signatures, IDs, utility bills, invoices and witnessed signatures.",
        when: "Una mañana lluviosa de entre semana, con la oficina intentando cerrar el contrato antes del fin de mes.",
        where: "Manchester, Reino Unido, en una agencia inmobiliaria pequeña.",
        why: "Porque el inglés burocrático no coincide palabra por palabra con el colombiano. Usted puede saber firmar, pero perderse si no distingue receipt, bill, invoice, proof of address y witnessed signature."
      },
      address: {
        form: "mixed",
        who: "El inglés usa “you” entre la agente y Alejandra; el registro se sostiene con frases profesionales y modales.",
        why: "No hay usted, pero una oficina de arriendo sí exige cortesía: “please check”, “could you sign” y “before you sign” dan el tono formal.",
        ifYouSwitch: "Cambiar de pronombre no es opción. Si Alejandra necesita sonar más cuidadosa, debe usar preguntas claras y modales, no una segunda persona distinta."
      },
      dialogue: [
        {
          speaker: "Agent",
          target: "Before you sign, please check that your name and ID number are correct.",
          translation: "Antes de que firme, revise que su nombre y número de documento estén correctos.",
          pronunciation: "bi-FOR yu sain, pliz chek dat yor neim and ai-DI NOM-ber ar ko-REKT",
          literal: "Antes de usted firmar, por favor revise que su nombre y número de ID son correctos.",
          why: "“Before you sign” no lleva subjuntivo visible en inglés. La formalidad está en “please check”, no en una forma verbal especial."
        },
        {
          speaker: "Alejandra",
          target: "My second surname is missing an accent mark. Does that affect the signature?",
          translation: "A mi segundo apellido le falta la tilde. ¿Eso afecta la firma?",
          pronunciation: "mai SE-kond SER-neim is MI-sing an AK-sent mark. das dat a-FEKT de SIG-na-cher",
          literal: "Mi segundo apellido está faltando una marca de acento. ¿Eso afecta la firma?",
          why: "“Signature” es la firma. “Surname” es apellido, y “accent mark” sirve para hablar de tildes aunque el inglés no las use normalmente en sus propios nombres."
        },
        {
          speaker: "Agent",
          target: "We'll correct it before printing again; you shouldn't sign a contract with details that don't match your ID.",
          translation: "Lo corregimos antes de imprimir otra vez; no debería firmar un contrato con datos que no coincidan con su documento.",
          pronunciation: "wil ko-REKT it bi-FOR PRIN-ting a-GUEN; yu SHUD-ent sain a KON-trakt with DI-teils dat dont match yor ai-DI",
          literal: "Corregiremos eso antes de imprimir otra vez; usted no debería firmar un contrato con detalles que no emparejan su ID.",
          why: "“Match your ID” es la frase práctica: los datos deben coincidir con el documento. “Shouldn't sign” aconseja sin sonar acusatorio."
        },
        {
          speaker: "Alejandra",
          target: "I also brought the utility bill you asked for, although I'm not sure whether it counts as proof of address.",
          translation: "También traje el recibo de servicios que me pidieron, aunque no sé si sirve como prueba de dirección.",
          pronunciation: "ai OL-so brot de yu-TI-li-ti bil yu askt for, ol-DOU aim not shur WE-der it kaunts as pruf ov a-DRES",
          literal: "También traje la factura de servicios que usted pidió, aunque no estoy segura si cuenta como prueba de dirección.",
          why: "“Utility bill” traduce recibo de servicios. “Proof of address” es el soporte de domicilio; “support” no se usa así en inglés administrativo."
        },
        {
          speaker: "Agent",
          target: "It does, but your guarantor still needs to have the signature witnessed and send us the invoice for the fee.",
          translation: "Sí sirve, pero su codeudor todavía necesita que le atestigüen la firma y enviarnos la factura del costo.",
          pronunciation: "it daz, bat yor ga-ren-TOR stil nids tu jav de SIG-na-cher WIT-nest and send as de IN-vois for de fi",
          literal: "Sí hace, pero su garante todavía necesita tener la firma atestiguada y enviarnos la factura por la tarifa.",
          why: "En el Reino Unido muchas firmas se “witnessed” más que “notarised”. “Guarantor” es el codeudor o fiador en contratos de arriendo."
        },
        {
          speaker: "Alejandra",
          target: "So I'll sign once the spelling is fixed, and not before the contract matches my ID.",
          translation: "Entonces firmo una vez corregida la escritura, y no antes de que el contrato coincida con mi documento.",
          pronunciation: "so ail sain wans de SPE-ling is fikst, and not bi-FOR de KON-trakt mach-es mai ai-DI",
          literal: "Entonces firmaré una vez la ortografía está arreglada, y no antes de que el contrato empareje mi ID.",
          why: "“Once” marca el momento en que ya se cumplió la condición. El inglés usa presente simple en esa cláusula futura: “once the spelling is fixed”, no “will be fixed”."
        }
      ],
      vocabulary: [
        {
          term: "sign",
          explanation: "Firmar. Es regular en inglés y se usa para contratos, recibos, formularios y entregas.",
          literal: "firmar",
          useWhen: "Documentos: “sign the contract”, “sign here”, “sign for the package”.",
          avoidWhen: "Quiere decir una firma como sustantivo; ahí es “signature”, no “sign”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["signature", "sign here", "signed", "sign for"],
          example: {
            target: "Don't sign anything you don't understand.",
            translation: "No firme nada que no entienda."
          }
        },
        {
          term: "signature",
          explanation: "La firma como sustantivo: el trazo o nombre escrito que prueba identidad o aceptación.",
          literal: "firma",
          useWhen: "Papeles: “your signature is missing”, “the signature doesn't match”.",
          avoidWhen: "Usarla como verbo; no se dice “signature the contract”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["sign", "signature line", "digital signature", "witnessed signature"],
          example: {
            target: "Your signature is missing on page two.",
            translation: "Falta su firma en la página dos."
          }
        },
        {
          term: "Please sign here",
          explanation: "La instrucción cortés normal para “firme aquí”.",
          literal: "por favor firme aquí",
          useWhen: "Mostradores, contratos y entregas: “please sign here and date it”.",
          avoidWhen: "Cree que necesita una forma de usted; el “please” y el tono hacen la cortesía.",
          register: "polite service",
          region: "Inglés universal.",
          related: ["sign here", "date it", "signature line", "initial here"],
          example: {
            target: "Please sign here and write today's date.",
            translation: "Firme aquí y escriba la fecha de hoy."
          }
        },
        {
          term: "proof of ID",
          explanation: "Documento o prueba de identidad. Puede ser passport, driver's license o national ID según el país.",
          literal: "prueba de identidad",
          useWhen: "Trámites: “bring proof of ID”, “a copy of your passport”.",
          avoidWhen: "Traducir cédula siempre como “citizenship card”; en inglés práctico se pide ID.",
          register: "polite formal",
          region: "Inglés universal; los documentos concretos cambian por país.",
          related: ["ID", "passport", "driver's license", "identification"],
          example: {
            target: "Please bring proof of ID.",
            translation: "Por favor traiga un documento de identidad."
          }
        },
        {
          term: "utility bill",
          explanation: "Recibo de servicios: luz, agua, gas o internet, usado a menudo como proof of address.",
          literal: "factura de servicios públicos",
          useWhen: "Probar dirección: “a recent utility bill”, “gas or electricity bill”.",
          avoidWhen: "Cualquier recibo de compra; utility bill es específicamente de servicios.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["proof of address", "electricity bill", "gas bill", "council tax bill"],
          example: {
            target: "A recent utility bill can prove your address.",
            translation: "Un recibo de servicios reciente puede probar su dirección."
          }
        },
        {
          term: "invoice / receipt / bill",
          explanation: "Tres palabras distintas: invoice cobra formalmente, receipt prueba pago, bill pide pago.",
          literal: "factura / recibo / cuenta",
          useWhen: "Servicios y compras: “send an invoice”, “keep the receipt”, “pay the bill”.",
          avoidWhen: "Tratarlas como sinónimos perfectos; el trámite puede pedir una en particular.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["invoice", "receipt", "bill", "payment"],
          example: {
            target: "Keep the receipt after you pay the bill.",
            translation: "Guarde el recibo después de pagar la cuenta."
          }
        },
        {
          term: "have a signature witnessed",
          explanation: "Hacer que alguien sea testigo de la firma. No siempre equivale a notarise.",
          literal: "hacer atestiguar una firma",
          useWhen: "Contratos y formularios que piden un testigo: “have your signature witnessed”.",
          avoidWhen: "El documento exige notary específicamente; entonces sí use “notarise”.",
          register: "polite formal",
          region: "Inglés universal, frecuente en Reino Unido y países de common law.",
          related: ["witness", "notarise", "certify", "guarantor"],
          example: {
            target: "The guarantor must have the signature witnessed.",
            translation: "El codeudor debe hacer atestiguar la firma."
          }
        }
      ],
      note:
        "En inglés, “sign” es firmar y “signature” es la firma. Para documentos de arriendo verá “proof of ID”, “proof of address”, “utility bill”, “invoice”, “receipt” y “bill”; no son adornos, son categorías distintas. “Receipt” prueba que pagó, “bill” le cobra, “invoice” solicita o registra un cobro formal. Y cuidado con la notaría: según el país, una firma puede need to be witnessed, certified or notarised, y cada palabra nombra un trámite diferente.",
      culture: [
        {
          label: "Notary no siempre es notaría",
          body: "En Colombia la notaría está metida en la vida cotidiana. En el Reino Unido, Canadá o Australia, muchos documentos comunes solo necesitan un witness o una certified copy, no un notary public. Decir “I need to authenticate my signature at the notary” puede sonar excesivo o confuso. Primero lea qué pide el formulario: witnessed, certified, notarised. La palabra exacta ahorra dinero y vueltas."
        },
        {
          label: "Proof of address",
          body: "Los países anglófonos piden mucho “proof of address”: utility bill, bank statement, council tax bill, tenancy agreement. Para una colombiana, el recibo de servicios cumple un papel parecido, pero el nombre cambia. Si el documento está a nombre de otra persona, quizá no sirva. La pregunta útil es “does this count as proof of address?”, no “does this serve as support?”"
        },
        {
          label: "Bill, receipt, invoice",
          body: "El español cotidiano puede decir factura, cuenta o recibo con bastante elasticidad. El inglés administrativo los separa más: bill es lo que debe pagar, receipt es la prueba de que pagó, invoice es la solicitud formal de pago, sobre todo entre negocios. En una reparación, un arriendo o una garantía, pedir la palabra equivocada puede dejarle el papel que no le sirve."
        }
      ],
      pitfalls: [
        {
          mistake: "“I need to firm the contract.”",
          whyItFails: "“Firm” no es el verbo firmar; como verbo significa endurecer o afirmar algo. Para poner la firma en un documento, el verbo es “sign”.",
          sayInstead: "I need to sign the contract."
        },
        {
          mistake: "“The sign is missing on page two.”",
          whyItFails: "“Sign” como sustantivo suele ser letrero o señal. La firma en un documento es “signature”.",
          sayInstead: "The signature is missing on page two."
        },
        {
          mistake: "“This receipt charges me for the repair.”",
          whyItFails: "Un receipt prueba que ya pagó; el documento que le cobra antes de pagar es bill o invoice, según el contexto.",
          sayInstead: "This invoice charges me for the repair."
        }
      ],
      variations: [
        {
          form: "Please sign here.",
          register: "polite service",
          region: "Inglés universal",
          whenToUse: "Pedir una firma en un mostrador o contrato."
        },
        {
          form: "The signature must be witnessed.",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Decir que la firma necesita testigo."
        },
        {
          form: "Please bring proof of ID.",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Pedir documento de identidad."
        },
        {
          form: "Could you send me an invoice?",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Pedir una factura formal."
        }
      ],
      prompt: "Alejandra quiere decir “tengo que firmar el contrato”. ¿Cuál es correcto?",
      choices: [
        "I need to sign the contract.",
        "I need to firm the contract.",
        "I need to signature the contract."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cómo se dice “falta la firma en la página dos”?",
          choices: [
            "The sign is missing on page two.",
            "The signature is missing on page two.",
            "The firm is missing on page two."
          ],
          answer: 1,
          tests: "signature = firma as noun"
        },
        {
          prompt: "¿Qué documento suele probar dirección?",
          choices: [
            "a utility bill",
            "a concert ticket",
            "a restaurant menu"
          ],
          answer: 0,
          tests: "utility bill as proof of address"
        },
        {
          prompt: "¿Cuál frase pide una factura formal?",
          choices: [
            "Could you send me a receipt?",
            "Could you send me a bill?",
            "Could you send me an invoice?"
          ],
          answer: 2,
          tests: "invoice = formal factura"
        }
      ]
    }
  },
  {
    id: "asking-the-mechanic-what-he-charges-in-riohacha",
    level: "Extending · Services",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "courteous",
    pathways: ["extension"],
    verb: "cobrar",
    review: "pending",
    es: {
      title: "Preguntar cuánto cobra el mecánico en Riohacha",
      situation:
        "En Riohacha, el carro alquilado de Alex empezó a sonar raro después de un viaje por la carretera. Entra a un taller y quiere preguntar “¿cuánto cuesta?”, pero el mecánico no está vendiendo un objeto sino cotizando una revisión y una reparación. Aprende que para servicios se pregunta “¿cuánto me cobra?”, que “me cobraron de más” sirve para reclamar un sobrecosto, que “cóbreme” puede cerrar una cuenta y que cobrar también aparece en “cobrar el sueldo”. Este es el verbo que le evita quedarse mudo frente a plomeros, taxistas, modistas y mecánicos.",
      setting: {
        who: "The mechanic runs a small workshop and wants to quote honestly after seeing the car; Alex needs the repair but also needs to know what he is being charged for.",
        what: "A service quote at a mechanic's shop, moving through labor, parts, diagnostic fees, overcharging and how to ask for an invoice or receipt.",
        when: "Mid-morning, before the heat gets heavier and before Alex has to return the rental car.",
        where: "Riohacha, La Guajira, at a mechanic's workshop near the road out of town.",
        why: "Because “¿cuánto cuesta?” works for objects but leaves learners stranded with services. The useful Colombian question is “¿cuánto me cobra?”, and it opens the door to negotiating labor, parts, invoices and overcharges politely."
      },
      address: {
        form: "usted",
        who: "Alex and the mechanic use usted because they are strangers discussing a paid service.",
        why: "Money plus expertise calls for a respectful register. Usted lets Alex ask direct questions about price without sounding accusatory.",
        ifYouSwitch: "Tú would make the quote feel too familiar. In a workshop, especially when you may need to challenge a charge later, usted keeps the conversation firm and courteous."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Buenos días. El carro está sonando raro. ¿Cuánto me cobra por revisarlo?",
          translation: "Good morning. The car is making a strange noise. How much do you charge me to check it?",
          pronunciation: "BWEH-nos DEE-as. el KA-rroh es-TAH soh-NAN-doh RRA-roh. KWAN-toh meh KOH-brah por rreh-bee-SAR-lo",
          literal: "Good days. The car is sounding strange. How much me you-charge for checking-it?",
          why: "This is the money phrase: “¿cuánto me cobra por...?” for a service. “¿Cuánto cuesta?” would fit a part on a shelf, but the mechanic charges for labor and diagnosis."
        },
        {
          speaker: "Mecánico",
          target: "Por la revisión le cobro treinta mil; si toca desmontar la pieza, le aviso antes de cobrarle más.",
          translation: "For the inspection I charge you thirty thousand; if we have to remove the part, I'll tell you before charging you more.",
          pronunciation: "por la rreh-bee-SYON leh KOH-broh TREIN-tah meel; see TOH-kah des-mon-TAR la PYEH-sah, leh ah-BEE-so AN-tes de koh-BRAR-leh mas",
          literal: "For the inspection to-you I-charge thirty thousand; if it-touches to-remove the part, to-you I-warn before of charging-you more.",
          why: "The mechanic separates the diagnostic charge from possible extra labor. “Le cobro” is usted, and “antes de cobrarle más” promises not to add costs without warning."
        },
        {
          speaker: "Alex",
          target: "Gracias. Ayer me cobraron de más por una grúa y no quiero otra sorpresa.",
          translation: "Thanks. Yesterday they overcharged me for a tow truck, and I don't want another surprise.",
          pronunciation: "GRA-syas. ah-YER meh koh-BRAH-ron de mas por OO-nah GROO-ah ee noh KYEH-roh OH-tra sor-PREH-sah",
          literal: "Thanks. Yesterday me they-charged of more for a tow-truck and not I-want another surprise.",
          why: "“Me cobraron de más” is how you say “they overcharged me.” It is not just “they charged me more”; it carries the complaint that the amount was excessive or unfair."
        },
        {
          speaker: "Mecánico",
          target: "Tranquilo. Le explico cada cobro: mano de obra, repuesto y, si usted quiere, factura.",
          translation: "Don't worry. I'll explain each charge: labor, spare part and, if you want, an invoice.",
          pronunciation: "tran-KEE-loh. leh eks-PLEE-koh KA-dah KOH-broh: MA-noh deh OH-brah, rreh-PWES-toh ee, see oos-TED KYEH-reh, fak-TOO-rah",
          literal: "Calm. To-you I-explain each charge: hand of work, spare-part and, if you want, invoice.",
          why: "“Cobro” as a noun is the charge. “Mano de obra” is labor, and “repuesto” is the replacement part. Asking for a factura makes the transaction more formal and traceable."
        },
        {
          speaker: "Alex",
          target: "Si queda en esos treinta mil, cóbreme de una vez y le firmo el recibo.",
          translation: "If it stays at those thirty thousand, charge me now and I'll sign the receipt.",
          pronunciation: "see KEH-dah en EH-sos TREIN-tah meel, KOH-breh-meh de OO-nah bes ee leh FEER-moh el rreh-SEE-boh",
          literal: "If it remains in those thirty thousand, charge-me at one time and to-you I-sign the receipt.",
          why: "“Cóbreme” is the usted command: charge me / let me pay. It can close a bill at a shop, café, taxi or workshop. “De una vez” means right away or all at once."
        },
        {
          speaker: "Mecánico",
          target: "Perfecto. Y cuando cobre el sueldo el viernes, cambie esa correa; todavía aguanta, pero no conviene esperar.",
          translation: "Perfect. And when you get paid on Friday, replace that belt; it still holds, but it's not wise to wait.",
          pronunciation: "per-FEK-toh. ee KWAN-doh KOH-breh el SWEL-doh el BYER-nes, KAM-byeh EH-sah ko-RREH-ah; toh-dah-BEE-ah ah-GWAN-tah, PEH-ro noh kon-BYEH-neh es-peh-RAR",
          literal: "Perfect. And when you collect the salary on Friday, change that belt; still it-holds, but not suits to-wait.",
          why: "Cobrar also means to collect money owed to you: “cobrar el sueldo.” The future time clause “cuando cobre” uses subjunctive because Friday's pay has not arrived yet."
        }
      ],
      vocabulary: [
        {
          term: "cobrar",
          explanation: "To charge money for a service or collect money owed. It is the service-price verb learners need constantly.",
          literal: "to charge / collect",
          useWhen: "Services and payments: “¿cuánto me cobra?”, “me cobraron de más”, “cobrar el sueldo”.",
          avoidWhen: "You are only asking the price of an object on a shelf; “¿cuánto cuesta?” is enough there.",
          register: "neutral",
          region: "Universal Spanish; essential in Colombian service interactions.",
          related: ["el cobro", "cóbreme", "me cobraron", "cobrar sueldo"],
          example: {
            target: "¿Cuánto me cobra por arreglar la chapa?",
            translation: "How much do you charge me to fix the lock?"
          }
        },
        {
          term: "¿Cuánto me cobra?",
          explanation: "The natural question for what a person charges you for a service: plumber, taxi driver, seamstress, mechanic.",
          literal: "how much me you-charge?",
          useWhen: "Before agreeing to a service: “¿cuánto me cobra por llevarme?”, “¿cuánto me cobra por coser esto?”.",
          avoidWhen: "A supermarket item with a printed price; there “¿cuánto cuesta?” is simpler.",
          register: "polite service",
          region: "Universal Spanish, very practical in Colombia.",
          related: ["por el servicio", "cotización", "mano de obra", "tarifa"],
          example: {
            target: "¿Cuánto me cobra por la carrera hasta el hotel?",
            translation: "How much do you charge me for the ride to the hotel?"
          }
        },
        {
          term: "me cobraron de más",
          explanation: "They overcharged me. The phrase carries the complaint that the amount was more than it should have been.",
          literal: "they charged me of more",
          useWhen: "Questioning a bill: “creo que me cobraron de más”, “me cobraron de más en el recibo”.",
          avoidWhen: "The price simply increased with permission; this phrase suggests an error or abuse.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["de más", "sobrecosto", "reclamo", "cuenta"],
          example: {
            target: "Revise la cuenta, porque me cobraron de más.",
            translation: "Check the bill, because they overcharged me."
          }
        },
        {
          term: "cóbreme",
          explanation: "Charge me / ring me up / let me pay. It is the polite usted command with the object attached.",
          literal: "charge me",
          useWhen: "Closing a transaction: “cóbreme de una vez”, “cóbreme todo junto”.",
          avoidWhen: "You are accusing someone; “cóbreme” is normally cooperative, not a complaint.",
          register: "polite service",
          region: "Universal Spanish; everyday in Colombian shops and taxis.",
          related: ["me cobra", "la cuenta", "pagar", "cerrar la cuenta"],
          example: {
            target: "Cóbreme todo junto, por favor.",
            translation: "Charge me for everything together, please."
          }
        },
        {
          term: "el cobro",
          explanation: "The charge itself, the amount or item being charged.",
          literal: "the charge",
          useWhen: "Explaining bills: “este cobro es por la revisión”, “hay un cobro adicional”.",
          avoidWhen: "You mean the act of paying; cobro is from the person or business charging, not the customer paying.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["cargo", "tarifa", "factura", "cobrar"],
          example: {
            target: "No entiendo este cobro adicional.",
            translation: "I don't understand this extra charge."
          }
        },
        {
          term: "mano de obra",
          explanation: "Labor cost, the mechanic's or tradesperson's work apart from parts.",
          literal: "hand of work",
          useWhen: "Quotes and repairs: “la mano de obra cuesta...”, “eso no incluye repuestos”.",
          avoidWhen: "You expect it to include materials automatically; ask what is included.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["repuesto", "servicio", "cotización", "arreglo"],
          example: {
            target: "La mano de obra no incluye el repuesto.",
            translation: "The labor does not include the part."
          }
        },
        {
          term: "cobrar el sueldo",
          explanation: "To collect or receive one's salary. Here cobrar is money coming to you, not money you charge someone else.",
          literal: "to collect the salary",
          useWhen: "Payday: “cobro el sueldo el viernes”, “ya cobré”.",
          avoidWhen: "You mean paying someone else's salary; that is “pagar el sueldo”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["sueldo", "quincena", "pago", "cobrar la quincena"],
          example: {
            target: "Cuando cobre el sueldo, pago la reparación.",
            translation: "When I get paid, I'll pay for the repair."
          }
        }
      ],
      note:
        "Cobrar is the high-value verb in this block. “¿Cuánto cuesta?” asks the price of a thing; “¿cuánto me cobra?” asks what a person charges you for a service. Use it with plumbers, taxis, seamstresses, mechanics, messengers and anyone quoting labor. From there come the phrases you need when money gets messy: “me cobraron de más” for overcharging, “cóbreme” to ask them to ring you up, “el cobro” for a charge on a bill, and “cobrar el sueldo” for collecting your own pay.",
      culture: [
        {
          label: "Service prices are asked person-to-person",
          body: "In Colombia, many everyday services are quoted in conversation: a taxi outside an app, a seamstress hemming pants, a locksmith, a mechanic, a plumber. “¿Cuánto me cobra por...?” respects that the person is pricing labor, time and materials, not pointing to a sticker. It also gives you space to ask what is included before the work starts."
        },
        {
          label: "Quote before repair",
          body: "A good workshop separates revisión, mano de obra and repuestos. A learner who asks only after the work is done has less room to react if the bill surprises them. The polite Colombian sequence is direct but not hostile: explain the problem, ask “¿cuánto me cobra por revisarlo?”, and ask them to call before replacing parts. Clarity before work prevents drama after work."
        },
        {
          label: "Factura, recibo and trust",
          body: "For small repairs, some places offer a lower cash price without a formal invoice; for warranties, reimbursement or rental-car claims, you may need a factura or at least a recibo. Asking for one is not rude, but it can change the formality of the transaction. The safest phrase is “¿me puede dar factura o recibo?”, which lets the provider explain what they can issue."
        }
      ],
      pitfalls: [
        {
          mistake: "Asking a mechanic only “¿cuánto cuesta?”",
          whyItFails: "The question is not wrong for a part, but it is incomplete for a service. The mechanic charges labor, diagnosis and maybe parts, so “¿cuánto me cobra por...?” is the useful frame.",
          sayInstead: "¿Cuánto me cobra por revisar el carro?"
        },
        {
          mistake: "Translating “me cobraron de más” as “they charged me more”",
          whyItFails: "The Spanish phrase implies overcharging: an unfair or mistaken extra amount. “More” alone does not carry the complaint.",
          sayInstead: "Creo que me cobraron de más."
        },
        {
          mistake: "Thinking cobrar only means taking money from a customer",
          whyItFails: "Cobrar also means collecting money owed to you, especially salary or a debt. “Ya cobré” can mean “I got paid,” not “I charged someone.”",
          sayInstead: "Cobro el sueldo el viernes."
        }
      ],
      variations: [
        {
          form: "¿Cuánto me cobra por revisarlo?",
          register: "polite service",
          region: "Universal Spanish",
          whenToUse: "Asking a tradesperson or mechanic for a service price."
        },
        {
          form: "Creo que me cobraron de más.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Raising a possible overcharge politely."
        },
        {
          form: "Cóbreme todo junto, por favor.",
          register: "polite service",
          region: "Colombia",
          whenToUse: "Asking to pay the whole bill together."
        },
        {
          form: "Cuando cobre el sueldo, le pago.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Saying you will pay after payday."
        }
      ],
      prompt: "Alex is asking a mechanic for the price of checking the car. Which question fits best?",
      choices: [
        "¿Cuánto me cobra por revisarlo?",
        "¿Cuánto se vende por revisarlo?",
        "¿Cuánto se firma por revisarlo?"
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence means “they overcharged me”?",
          choices: [
            "Me firmaron de más.",
            "Me cobraron de más.",
            "Me entregaron de más."
          ],
          answer: 1,
          tests: "me cobraron de más = they overcharged me"
        },
        {
          prompt: "At the end of a service, which polite command means “charge me now”?",
          choices: [
            "Cóbreme de una vez.",
            "Cuésteme de una vez.",
            "Factúreme de hambre."
          ],
          answer: 0,
          tests: "cóbreme = charge me"
        },
        {
          prompt: "What does “cuando cobre el sueldo” mean?",
          choices: [
            "when I sign the invoice",
            "when I get paid",
            "when I deliver the car"
          ],
          answer: 1,
          tests: "cobrar el sueldo = get paid"
        }
      ]
    },
    en: {
      title: "Preguntar cuánto cobran sin decir “how much does it cost me?”",
      situation:
        "En Sydney, Alejandra lleva su bicicleta a un taller porque los frenos quedaron flojos. Quiere preguntar el precio del servicio y duda entre “how much does it cost?” y “how much do you charge?”. El mecánico le explica que “charge” es el verbo para servicios, labor y call-out fees; también aprende “I was overcharged”, “charge me now”, “put it on my bill” y la diferencia entre cobrar un sueldo y cobrarle a un cliente.",
      setting: {
        who: "El mecánico de bicicletas cotiza arreglos todos los días; Alejandra necesita reparar los frenos, pero quiere entender la mano de obra y los repuestos antes de aceptar.",
        what: "Una cotización de taller, centrada en charge, overcharge, labor, parts, invoice and get paid.",
        when: "Una mañana de sábado antes de salir a montar cerca del puerto, con el taller ocupado pero sin afán.",
        where: "Sydney, Australia, at a small bicycle repair shop.",
        why: "Porque “charge” es el equivalente práctico de cobrar para servicios. Saber preguntar “how much do you charge?” evita sonar como si el trabajo fuera un objeto con etiqueta."
      },
      address: {
        form: "mixed",
        who: "El inglés usa “you” entre Alejandra y el mecánico; la cortesía aparece en preguntas completas y “please”.",
        why: "En un taller no hay pronombre formal, pero sí hay registro de servicio. “Could you tell me...?” y “please” suavizan preguntas directas sobre dinero.",
        ifYouSwitch: "No puede cambiar a usted. Si quiere sonar firme sin sonar brusca, debe elegir bien charge, fee, labor y invoice."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Good morning. The brakes feel loose. How much do you charge to check them?",
          translation: "Buenos días. Los frenos se sienten flojos. ¿Cuánto me cobra por revisarlos?",
          pronunciation: "gud MOR-ning. de breiks fil lus. jau mach du yu charj tu chek dem",
          literal: "Buenos días. Los frenos se sienten sueltos. ¿Cuánto cobra usted para revisarlos?",
          why: "“How much do you charge to...?” es la pregunta clave para un servicio. “How much does it cost?” también existe, pero “charge” pone el foco en lo que cobra la persona o negocio."
        },
        {
          speaker: "Mechanic",
          target: "I charge twenty dollars for the inspection; if it needs parts, I'll call before charging more.",
          translation: "Cobro veinte dólares por la revisión; si necesita repuestos, la llamo antes de cobrar más.",
          pronunciation: "ai charj TWEN-ti DO-lars for di in-SPEK-shon; if it nids parts, ail kol bi-FOR CHAR-jing mor",
          literal: "Yo cobro veinte dólares por la inspección; si necesita partes, llamaré antes de cobrar más.",
          why: "El mecánico separa inspection de parts. “Before charging more” promete consultar antes de añadir cargos, una frase útil para evitar sorpresas."
        },
        {
          speaker: "Alejandra",
          target: "Thanks. Yesterday I was overcharged for a taxi, so I want to be clear before you start.",
          translation: "Gracias. Ayer me cobraron de más en un taxi, así que quiero estar clara antes de que empiece.",
          pronunciation: "thanks. YES-ter-dei ai waz ou-ver-CHARJD for a TAK-si, so ai want tu bi klir bi-FOR yu start",
          literal: "Gracias. Ayer fui sobre-cobrada por un taxi, así que quiero estar clara antes de que usted empiece.",
          why: "“I was overcharged” traduce “me cobraron de más”. En inglés no se dice “they charged me of more”; el prefijo over- lleva la idea de exceso."
        },
        {
          speaker: "Mechanic",
          target: "No problem. I'll explain each charge: labor, brake pads and, if you need it, an invoice.",
          translation: "No hay problema. Le explico cada cobro: mano de obra, pastillas de freno y, si la necesita, factura.",
          pronunciation: "nou PRO-blem. ail eks-PLEIN ich charj: LEI-ber, breik pads and, if yu nid it, an IN-vois",
          literal: "No problema. Explicaré cada cargo: labor, pastillas de freno y, si usted la necesita, una factura.",
          why: "“Charge” también es sustantivo: cada cobro en la cuenta. “Labor” es la mano de obra; “brake pads” son las pastillas de freno."
        },
        {
          speaker: "Alejandra",
          target: "If it stays at twenty, charge me now and email me the receipt.",
          translation: "Si queda en veinte, cóbreme ahora y envíeme el recibo por correo.",
          pronunciation: "if it steiz at TWEN-ti, charj mi nau and I-meil mi de ri-SIT",
          literal: "Si se queda en veinte, cóbreme ahora y envíeme por correo el recibo.",
          why: "“Charge me now” funciona para “cóbreme”. Si fuera una cuenta abierta, también podría decir “put it on my bill”, pero aquí paga de inmediato."
        },
        {
          speaker: "Mechanic",
          target: "Sure. And when you get paid, come back for the full tune-up; the bike can wait a week.",
          translation: "Claro. Y cuando cobre el sueldo, vuelva para el mantenimiento completo; la bici puede esperar una semana.",
          pronunciation: "shur. and wen yu get peid, kom bak for de ful TIUN-ap; de baik kan weit a wik",
          literal: "Claro. Y cuando usted consiga pagada, vuelva para el ajuste completo; la bicicleta puede esperar una semana.",
          why: "Para “cobrar el sueldo”, el inglés natural es “get paid”, no “charge the salary”. “Tune-up” es una revisión o mantenimiento completo de la bicicleta."
        }
      ],
      vocabulary: [
        {
          term: "charge",
          explanation: "Cobrar por un servicio, producto o cargo; también puede ser el cobro como sustantivo.",
          literal: "cobrar / cobro",
          useWhen: "Servicios: “how much do you charge?”, “they charged me extra”, “a service charge”.",
          avoidWhen: "Quiere decir cobrar el sueldo propio; ahí lo natural es “get paid”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["charge for", "service charge", "overcharge", "fee"],
          example: {
            target: "How much do you charge for the repair?",
            translation: "¿Cuánto cobra por la reparación?"
          }
        },
        {
          term: "How much do you charge?",
          explanation: "La pregunta natural para saber cuánto cobra una persona o negocio por un servicio.",
          literal: "¿cuánto cobra usted?",
          useWhen: "Talleres, plomeros, costureras, clases, taxis: “how much do you charge to fix this?”.",
          avoidWhen: "Pregunta por el precio de un objeto con etiqueta; “how much is it?” puede bastar.",
          register: "polite service",
          region: "Inglés universal.",
          related: ["charge to", "charge for", "quote", "rate"],
          example: {
            target: "How much do you charge to check the brakes?",
            translation: "¿Cuánto me cobra por revisar los frenos?"
          }
        },
        {
          term: "I was overcharged",
          explanation: "Me cobraron de más. Over- añade la idea de exceso o cobro injusto.",
          literal: "fui sobrecobrada",
          useWhen: "Reclamos: “I think I was overcharged”, “they overcharged me for delivery”.",
          avoidWhen: "El precio subió con aviso y usted aceptó; overcharged sugiere error o abuso.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["overcharge", "charged too much", "refund", "complaint"],
          example: {
            target: "I think I was overcharged for the taxi.",
            translation: "Creo que me cobraron de más por el taxi."
          }
        },
        {
          term: "Charge me now",
          explanation: "Cóbreme ahora. Es directo y normal cuando usted quiere cerrar la cuenta.",
          literal: "cóbreme ahora",
          useWhen: "Pagos inmediatos: “charge me now”, “charge my card now”.",
          avoidWhen: "Quiere añadir algo a una cuenta de hotel o restaurante; ahí puede ser “put it on my bill”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["charge my card", "pay now", "ring me up", "put it on my bill"],
          example: {
            target: "You can charge me now.",
            translation: "Me puede cobrar ahora."
          }
        },
        {
          term: "put it on my bill",
          explanation: "Cárguelo a mi cuenta. Sirve cuando hay una cuenta abierta, como hotel, club o restaurante.",
          literal: "póngalo en mi cuenta",
          useWhen: "Cuentas abiertas: “put it on my room bill”, “put the drinks on my tab”.",
          avoidWhen: "No hay cuenta abierta; entonces diga “charge me” o “I'll pay now”.",
          register: "polite service",
          region: "Inglés universal.",
          related: ["bill", "tab", "room charge", "account"],
          example: {
            target: "Please put it on my room bill.",
            translation: "Por favor cárguelo a la cuenta de mi habitación."
          }
        },
        {
          term: "labor and parts",
          explanation: "Mano de obra y repuestos, las dos piezas básicas de muchas cotizaciones.",
          literal: "labor y partes",
          useWhen: "Reparaciones: “does that include labor and parts?”, “parts are extra”.",
          avoidWhen: "Asumir que una cotización incluye ambas cosas; pregunte.",
          register: "neutral",
          region: "Inglés universal; “labor” en EE. UU., “labor” en Reino Unido/Australia.",
          related: ["labor", "parts", "quote", "repair"],
          example: {
            target: "Does the quote include labor and parts?",
            translation: "¿La cotización incluye mano de obra y repuestos?"
          }
        },
        {
          term: "get paid",
          explanation: "Cobrar el sueldo o recibir pago. No se dice “charge my salary”.",
          literal: "recibir pago",
          useWhen: "Día de pago: “I get paid on Friday”, “when do you get paid?”.",
          avoidWhen: "Usted cobra a un cliente; ahí sí es “charge the customer”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["payday", "salary", "wages", "paid"],
          example: {
            target: "I get paid on Friday.",
            translation: "Cobro el sueldo el viernes."
          }
        }
      ],
      note:
        "Para servicios, aprenda “charge”. “How much do you charge to check it?” equivale a “¿cuánto me cobra por revisarlo?”. “Cost” pregunta cuánto cuesta algo; “charge” pregunta cuánto cobra alguien. Si hubo exceso, diga “I was overcharged” o “they overcharged me”. Para pagar en ese momento, “charge me now”; para una cuenta abierta, “put it on my bill/tab”. Y para “cobrar el sueldo”, el inglés cambia de mapa: “get paid”, no “charge the salary”.",
      culture: [
        {
          label: "Quotes before work",
          body: "En talleres anglófonos, igual que en Colombia, conviene pedir quote o estimate antes de aceptar. “How much do you charge to check it?” pregunta por la revisión; “does that include labor and parts?” aclara si los repuestos están incluidos. Si no hace esa pregunta, el total puede crecer sin que nadie haya querido engañarlo: simplemente faltaba una parte de la cotización."
        },
        {
          label: "Charge, fee, bill",
          body: "“Charge” puede ser verbo o sustantivo: they charge twenty, a twenty-dollar charge. “Fee” suele ser una tarifa por servicio o trámite. “Bill” es la cuenta completa que hay que pagar. La diferencia importa en hoteles, talleres y bancos, donde un service fee puede aparecer como extra charge on the bill. Con esas palabras, reclamar se vuelve más claro."
        },
        {
          label: "Getting paid is not charging",
          body: "El español usa cobrar hacia dos lados: el mecánico cobra al cliente y el trabajador cobra el sueldo. El inglés separa: a business charges; a worker gets paid. “I charge my salary on Friday” suena como si usted le facturara su sueldo a alguien. La frase natural y cotidiana es “I get paid on Friday”, corta y sin drama."
        }
      ],
      pitfalls: [
        {
          mistake: "“How much does it cost me to check the brakes?”",
          whyItFails: "Se entiende, pero suena menos natural para un servicio prestado por una persona. “Charge” pregunta directamente cuánto cobra el taller.",
          sayInstead: "How much do you charge to check the brakes?"
        },
        {
          mistake: "“They charged me of more.”",
          whyItFails: "Calca “me cobraron de más”. En inglés la queja se expresa con “overcharged” o “charged me too much”.",
          sayInstead: "They overcharged me."
        },
        {
          mistake: "“I charge my salary on Friday.”",
          whyItFails: "Para recibir sueldo, el inglés no usa “charge”. “Charge” es lo que una empresa o persona cobra a un cliente; el trabajador “gets paid”.",
          sayInstead: "I get paid on Friday."
        }
      ],
      variations: [
        {
          form: "How much do you charge to check it?",
          register: "polite service",
          region: "Inglés universal",
          whenToUse: "Pedir precio por revisar o diagnosticar algo."
        },
        {
          form: "I think I was overcharged.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Reclamar un posible cobro de más."
        },
        {
          form: "Please charge me now.",
          register: "polite service",
          region: "Inglés universal",
          whenToUse: "Pedir que le cobren de una vez."
        },
        {
          form: "I get paid on Friday.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Decir cuándo cobra el sueldo."
        }
      ],
      prompt: "Alejandra pregunta por el precio de revisar los frenos. ¿Qué frase es natural?",
      choices: [
        "How much do you charge to check them?",
        "How much do you firm to check them?",
        "How much do you deliver to check them?"
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cómo dice que le cobraron de más?",
          choices: [
            "They charged me of more.",
            "They overcharged me.",
            "They costed me extra."
          ],
          answer: 1,
          tests: "overcharged = cobrado de más"
        },
        {
          prompt: "En un hotel, ¿cómo dice “cárguelo a mi cuenta”?",
          choices: [
            "Put it on my bill.",
            "Charge it on my salary.",
            "Cost it to my signature."
          ],
          answer: 0,
          tests: "put it on my bill/tab"
        },
        {
          prompt: "¿Cómo se dice “cobro el sueldo el viernes”?",
          choices: [
            "I charge my salary on Friday.",
            "I collect to my salary Friday.",
            "I get paid on Friday."
          ],
          answer: 2,
          tests: "get paid = cobrar el sueldo"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/47-extending-paperwork-and-payments.js");
