/*
 * Lesson block: developing / sending and sharing.
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
    id: "enviar-un-sobre-desde-pereira",
    level: "Developing · Sending and sharing",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "enviar",
    review: "pending",
    es: {
      title: "Enviar un sobre desde Pereira",
      situation:
        "Estás en una oficina de Servientrega en Pereira y necesitas enviar unos documentos a Cúcuta antes del viernes. Ya hablas bastante español para no limitarte a frases sueltas: tienes que preguntar por el tiempo, el costo, el comprobante y la diferencia entre decir enviar y mandar.",
      setting: {
        who: "Laura works the Servientrega counter and has already handled three impatient customers this morning. Sam is sending legal papers to a relative in Cúcuta and cannot afford a vague promise.",
        what: "A counter exchange about sending an envelope with tracking, delivery time and a receipt.",
        when: "Late Wednesday morning, with the lunch rush starting to form behind Sam.",
        where: "Pereira, near the transport terminal, where shipping between cities is routine and nobody needs a regional flourish to sound local.",
        why: "Because this is one of the places where enviar is genuinely the right verb. In casual Colombian speech people often say mandar, but a courier form, an official email and a receipt live in the more formal register of enviar."
      },
      address: {
        form: "usted",
        who: "Laura and Sam use usted both ways, even though the exchange is warm.",
        why: "A shipping counter is public, transactional and documented. Usted keeps the tone professional while still leaving room for Colombian kindness.",
        ifYouSwitch:
          "Tú would not destroy the exchange, but it would sound as if Sam were trying to personalize a counter process. Vos would be especially odd here unless the two already knew each other."
      },
      dialogue: [
        {
          speaker: "Sam",
          target: "Buenos días. Necesito enviar este sobre a Cúcuta antes del viernes.",
          translation: "Good morning. I need to send this envelope to Cúcuta before Friday.",
          pronunciation: "BWEH-nos DEE-as. neh-seh-SEE-toh en-BYAR ES-teh SOH-breh ah KOO-koo-tah AN-tes del BYER-nes",
          literal: "Good days. I-need to-send this envelope to Cúcuta before Friday.",
          why: "This is a natural home for enviar: a real shipment, a deadline and a counter where the action will be entered into a system. Saying mandar would be understood, but enviar matches the setting better."
        },
        {
          speaker: "Laura",
          target: "Claro, se lo podemos enviar con guía y entrega estimada para mañana.",
          translation: "Of course, we can send it with a tracking number and estimated delivery for tomorrow.",
          pronunciation: "KLAH-roh, seh loh poh-DEH-mos en-BYAR kon GEE-ah ee en-TREH-gah es-tee-MAH-dah PAH-rah mah-NYAH-nah",
          literal: "Clear, to-you it we-can send with guide and delivery estimated for tomorrow.",
          why: "“Se lo podemos enviar” sounds polished without being stiff. The little cluster se lo is doing real work: to you, the envelope, by our service."
        },
        {
          speaker: "Sam",
          target: "¿Y si digo que lo voy a mandar, suena muy informal?",
          translation: "And if I say I'm going to send it with mandar, does that sound too informal?",
          pronunciation: "ee see DEE-goh keh loh boy ah man-DAR, SWEH-nah mwee een-for-MAL",
          literal: "And if I say that it I-go to send, sounds very informal?",
          why: "Sam asks the register question out loud. Colombians constantly use mandar in ordinary speech — “mándame la foto,” “te lo mando por WhatsApp” — so the lesson should not pretend enviar is the everyday default."
        },
        {
          speaker: "Laura",
          target: "Para hablar, mandar está perfecto. En el recibo y en la guía aparece enviar.",
          translation: "For speaking, mandar is perfectly fine. On the receipt and the tracking label, enviar appears.",
          pronunciation: "PAH-rah ah-BLAR, man-DAR es-TAH pehr-FEK-toh. en el reh-SEE-boh ee en lah GEE-ah ah-PAH-reh-seh en-BYAR",
          literal: "For speaking, mandar is perfect. On the receipt and on the guide appears to-send.",
          why: "That split is the point: mandar is the spoken Colombian reflex, while enviar is the formal label. Learning both saves Sam from sounding like either a form or a careless customer."
        },
        {
          speaker: "Sam",
          target: "Perfecto. Entonces envíelo con guía, por favor, y me guarda el comprobante.",
          translation: "Perfect. Then send it with tracking, please, and keep the receipt for me.",
          pronunciation: "pehr-FEK-toh. en-TON-ses en-BYEE-eh-loh kon GEE-ah, por fah-BOR, ee meh GWAR-dah el kom-proh-BAHN-teh",
          literal: "Perfect. Then send-it with guide, please, and for-me keep the proof.",
          why: "“Envíelo” is a clean usted command. It fits the counter because Sam is asking for a service, not ordering a friend around."
        },
        {
          speaker: "Laura",
          target: "Listo. Apenas lo enviemos, le llega el mensaje con el número de guía.",
          translation: "Done. As soon as we send it, you'll get the message with the tracking number.",
          pronunciation: "LEES-toh. ah-PEH-nas loh en-BYEH-mos, leh YEH-gah el men-SAH-heh kon el NOO-meh-roh deh GEE-ah",
          literal: "Ready. As soon-as it we-send, to-you arrives the message with the number of guide.",
          why: "“Apenas lo enviemos” is a step up from beginner Spanish: a time clause looking forward, naturally using the subjunctive. You do not need to name the grammar to understand the promise."
        }
      ],
      vocabulary: [
        {
          term: "enviar",
          explanation:
            "To send in a formal, written or service register: courier shipments, forms, official emails and system notifications.",
          literal: "to send",
          useWhen:
            "You are at a counter, filling a form, writing an official email, or talking about a process that leaves a record.",
          avoidWhen:
            "Chatting with friends about photos, voice notes or small favors. In ordinary Colombian speech, mandar usually sounds more human there.",
          register: "formal neutral",
          region: "General Spanish; in Colombia it is common in written and service contexts.",
          related: ["mandar", "remitir", "despachar", "hacer llegar"],
          example: {
            target: "Necesito enviar este sobre a Cúcuta.",
            translation: "I need to send this envelope to Cúcuta."
          }
        },
        {
          term: "mandar",
          explanation:
            "The everyday Colombian verb for sending something in speech, especially by WhatsApp or between people who already know each other.",
          literal: "to send / to order",
          useWhen:
            "Asking someone to send a photo, a location, a file or a quick message in ordinary conversation.",
          avoidWhen:
            "Writing a formal subject line or reading a courier label. There enviar sounds cleaner and less casual.",
          register: "everyday informal",
          region: "Very common in Colombian speech; understood across Spanish.",
          related: ["enviar", "pasar", "compartir", "hacer llegar"],
          example: {
            target: "Te lo mando por WhatsApp.",
            translation: "I'll send it to you on WhatsApp."
          }
        },
        {
          term: "guía",
          explanation:
            "The tracking label or tracking number for a shipment, not a person who leads a tour.",
          literal: "guide",
          useWhen:
            "Sending or receiving packages with a courier service and needing proof that the item can be tracked.",
          avoidWhen:
            "Assuming it means a tourist guide in a shipping context. The counter worker is not offering a person to accompany the envelope.",
          register: "service neutral",
          region: "General Colombian courier vocabulary.",
          related: ["número de guía", "rastreo", "comprobante", "envío"],
          example: {
            target: "Me llega el mensaje con el número de guía.",
            translation: "I'll get the message with the tracking number."
          }
        },
        {
          term: "comprobante",
          explanation:
            "A receipt or proof that the transaction happened. It matters when you may need to argue later that you sent something on time.",
          literal: "proofing thing",
          useWhen:
            "Paying, shipping, depositing money, or doing anything where a paper or digital record protects you.",
          avoidWhen:
            "Calling every receipt a factura. A factura is an invoice or tax document; a comprobante can be simpler proof.",
          register: "neutral",
          region: "General Colombian and Latin American usage.",
          related: ["recibo", "factura", "constancia", "soporte"],
          example: {
            target: "Me guarda el comprobante, por favor.",
            translation: "Please keep the receipt for me."
          }
        },
        {
          term: "apenas",
          explanation:
            "Here it means “as soon as,” not “barely.” It is a common connector when someone promises the next step.",
          literal: "barely / just",
          useWhen:
            "Linking a future action to an immediate result: as soon as we send it, as soon as it arrives, as soon as they answer.",
          avoidWhen:
            "Translating it automatically as barely. Context decides, and in service promises it often means as soon as.",
          register: "neutral",
          region: "General Colombian.",
          related: ["tan pronto como", "cuando", "en cuanto", "ya que"],
          example: {
            target: "Apenas lo enviemos, le llega el mensaje.",
            translation: "As soon as we send it, you'll get the message."
          }
        },
        {
          term: "entrega estimada",
          explanation:
            "The estimated delivery, which is a promise with room for reality rather than a guaranteed arrival time.",
          literal: "estimated delivery",
          useWhen:
            "Asking when a package should arrive while accepting that weather, routes and office hours can move the date.",
          avoidWhen:
            "Treating estimada as affectionate. It is not “dear delivery”; it is estimated delivery.",
          register: "service formal",
          region: "General Spanish; frequent in courier and ecommerce language.",
          related: ["fecha estimada", "plazo", "entrega garantizada", "demora"],
          example: {
            target: "Tiene entrega estimada para mañana.",
            translation: "It has estimated delivery for tomorrow."
          }
        },
        {
          term: "envíelo",
          explanation:
            "The usted command for “send it.” The accent keeps the stress where Spanish expects it when the object is attached.",
          literal: "send-it",
          useWhen:
            "Politely asking a service worker to proceed with the shipment after the details are clear.",
          avoidWhen:
            "Using it with a friend you call tú or vos. Then the forms would be envíalo or envialo, depending on the address form.",
          register: "polite practical",
          region: "General Spanish; the usted command fits Colombian service encounters.",
          related: ["envíeme", "mándelo", "envíalo", "envialo"],
          example: {
            target: "Entonces envíelo con guía.",
            translation: "Then send it with tracking."
          }
        }
      ],
      note:
        "The useful Colombian move is not choosing enviar or mandar once and for all. It is hearing the room. At the counter in Pereira, enviar belongs on the receipt, the tracking label and the official promise. In a WhatsApp chat, mandar is the ordinary human verb. If you use enviar everywhere, you will be understood but may sound like a notification.",
      culture: [
        {
          label: "Courier Spanish is not WhatsApp Spanish",
          body:
            "Colombians may say “mándame la foto” ten times a day and still expect a courier receipt to say envío or enviar. That is not contradiction; it is register. A learner who knows only enviar can sound oddly bureaucratic among friends, while a learner who knows only mandar may sound too casual at a counter."
        },
        {
          label: "Intercity errands are ordinary life",
          body:
            "Sending papers from Pereira to Cúcuta is not an exotic scenario. Families, universities, courts and employers routinely move documents across cities. The most realistic detail is the boring one: tracking number, delivery estimate, receipt, and someone waiting for a text message."
        },
        {
          label: "Usted keeps the line moving",
          body:
            "At a busy service counter, usted is efficient. It lets both people be courteous without pretending to be friends. The warmth comes through “claro,” “listo,” and the extra explanation, not through switching to tú."
        }
      ],
      pitfalls: [
        {
          mistake: "Using enviar for every casual message",
          whyItFails:
            "It is grammatical, but in everyday Colombian speech “envíame la foto” can sound more formal than the moment needs. Friends are more likely to say “mándame la foto” or “te la mando.”",
          sayInstead: "Use mandar for ordinary spoken requests, and enviar for formal or written contexts."
        },
        {
          mistake: "Treating guía as a tourist guide",
          whyItFails:
            "At a courier counter, guía means the tracking label or number. If you imagine a person, the whole exchange becomes absurd.",
          sayInstead: "Ask for “el número de guía” when you need tracking."
        },
        {
          mistake: "Saying “envía lo” as two words",
          whyItFails:
            "The object attaches to the affirmative command: envíelo. Splitting it makes the command look unfinished and sounds foreign.",
          sayInstead: "Envìelo with the object attached: “envíelo con guía.”"
        }
      ],
      variations: [
        {
          form: "Necesito enviar este sobre a Cúcuta.",
          register: "polite practical",
          region: "General Colombian",
          whenToUse: "At a courier counter when the shipment is the main business."
        },
        {
          form: "¿Me lo puede enviar con número de guía?",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "When you want tracking and you are asking through usted."
        },
        {
          form: "Te lo mando por WhatsApp apenas salga.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "With a friend, where mandar sounds more natural than enviar."
        },
        {
          form: "Adjunto envío los documentos solicitados.",
          register: "written formal",
          region: "General Spanish",
          whenToUse: "In an official email, where the formal verb belongs."
        }
      ],
      prompt: "Laura says “Para hablar, mandar está perfecto. En el recibo y en la guía aparece enviar.” What distinction is she teaching?",
      choices: [
        "Mandar fits casual speech, while enviar fits the written service record.",
        "Enviar is only for packages, while mandar is only for digital messages.",
        "Mandar sounds rude at counters, while enviar sounds friendly with friends."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which line best belongs at the Servientrega counter?",
          choices: [
            "Necesito enviar este sobre a Cúcuta.",
            "Mándame esa foto cuando puedas.",
            "Te mando un audio más tarde."
          ],
          answer: 0,
          tests: "enviar as the service-register verb for a shipment"
        },
        {
          prompt: "What does “número de guía” mean in this scene?",
          choices: [
            "The tracking number for the envelope.",
            "The name of the counter worker.",
            "The tourist guide for Cúcuta."
          ],
          answer: 0,
          tests: "guía as courier tracking rather than a person"
        },
        {
          prompt: "Sam says “Apenas lo enviemos, le llega el mensaje.” What is promised?",
          choices: [
            "The message arrives only if the office closes late.",
            "The message arrives as soon as the shipment is processed.",
            "The message arrived before Sam reached the counter."
          ],
          answer: 1,
          tests: "apenas meaning “as soon as” in a future promise"
        },
        {
          prompt: "Which choice would sound most natural between friends on WhatsApp?",
          choices: [
            "Le remito formalmente la fotografía.",
            "Necesito enviar este sobre.",
            "Te la mando en un minuto."
          ],
          answer: 2,
          tests: "mandar as ordinary Colombian speech for digital sending"
        }
      ]
    },
    en: {
      title: "Enviar un sobre desde Pereira",
      situation:
        "Usted está en una oficina de mensajería en Fort Worth y necesita aprender a decir en inglés que va a enviar unos documentos. Ya no está en nivel principiante: debe distinguir send de mail y ship, pedir tracking, entender receipt y no traducir mandar como order en el momento equivocado.",
      setting: {
        who: "Laura atiende el mostrador de una empresa de mensajería y ya ha explicado tres tarifas esta mañana. Samuel está enviando documentos legales a un familiar en otra ciudad y necesita una promesa clara.",
        what: "Una conversación de mostrador sobre enviar un sobre con rastreo, fecha estimada y recibo.",
        when: "Un miércoles a media mañana, justo cuando empieza a formarse la fila de la hora del almuerzo.",
        where: "Fort Worth, en una oficina de mensajería cerca de la estación, un lugar donde el inglés práctico importa más que sonar elegante.",
        why: "Porque send es el verbo amplio que usted necesita dominar. Mail puede sonar a correo postal, ship a paquete o mercancía, y order no traduce mandar cuando mandar significa enviar."
      },
      address: {
        form: "mixed",
        who: "Laura y Samuel usan el mismo “you”; el registro lo marcan con “please,” frases completas y tono de mostrador.",
        why: "El inglés no cambia el pronombre para mostrar respeto. En un servicio, la cortesía vive en la formulación: “I need to send,” “could you,” “please,” y una entonación tranquila.",
        ifYouSwitch:
          "No hay un tú o usted que cambiar. Si Samuel usara órdenes secas como “send this now,” el problema sería de tono, no de pronombre."
      },
      dialogue: [
        {
          speaker: "Samuel",
          target: "Good morning. I need to send this envelope to Dallas before Friday.",
          translation: "Buenos días. Necesito enviar este sobre a Dallas antes del viernes.",
          pronunciation: "gud MOR-ning. ai nid tu SEND dis EN-ve-loup tu O-ta-wa bi-FOR FRAI-dei",
          literal: "Buena mañana. Yo necesito enviar este sobre a Dallas antes de viernes.",
          why: "Send es el verbo seguro y amplio. Sirve para mensajes, documentos, paquetes y archivos; el objeto y el contexto dicen qué tipo de envío es."
        },
        {
          speaker: "Laura",
          target: "Sure, we can send it with tracking and estimated delivery tomorrow.",
          translation: "Claro, podemos enviarlo con rastreo y entrega estimada para mañana.",
          pronunciation: "shur, ui kan SEND it uid TRA-king and ES-ti-mei-ted di-LI-ve-ri tu-MO-rou",
          literal: "Seguro, podemos enviar eso con rastreo y entrega estimada mañana.",
          why: "“Send it with tracking” es natural y directo. No hace falta inventar una frase larga para sonar formal; el inglés de mostrador premia la claridad."
        },
        {
          speaker: "Samuel",
          target: "If I say I'm going to mail it, does that sound too specific?",
          translation: "Si digo que lo voy a mandar por correo, ¿suena demasiado específico?",
          pronunciation: "if ai sei aim GOU-ing tu MEIL it, daz dat saund tu spe-SI-fik",
          literal: "Si digo que voy a correar eso, ¿suena demasiado específico?",
          why: "Mail apunta al correo postal o a echar algo al correo. En una empresa de mensajería también puede entenderse, pero send cubre más terreno y evita precisar el canal."
        },
        {
          speaker: "Laura",
          target: "Mail is fine, but send is the word you'll see on the receipt.",
          translation: "Mail está bien, pero send es la palabra que verá en el recibo.",
          pronunciation: "MEIL iz fain, bat SEND iz da word yul si on da ri-SIT",
          literal: "Correo está bien, pero enviar es la palabra que usted verá en el recibo.",
          why: "La diferencia se parece a mandar y enviar en Colombia, pero no es idéntica. Send es neutral; mail especifica un canal; ship suele hacer pensar en mercancía o paquete."
        },
        {
          speaker: "Samuel",
          target: "Perfect. Please send it with tracking, and keep the receipt for me.",
          translation: "Perfecto. Por favor envíelo con rastreo y guárdeme el recibo.",
          pronunciation: "PER-fekt. pliz SEND it uid TRA-king, and kip da ri-SIT for mi",
          literal: "Perfecto. Por favor envíe eso con rastreo, y guarde el recibo para mí.",
          why: "Please hace el trabajo de cortesía que en español haría parte del usted. “Send it” solo puede sonar seco; “please send it” en este contexto suena normal."
        },
        {
          speaker: "Laura",
          target: "All set. As soon as we send it, you'll get a message with the tracking number.",
          translation: "Listo. Apenas lo enviemos, le llegará un mensaje con el número de rastreo.",
          pronunciation: "ol SET. az sun az ui SEND it, yul get a ME-sech uid da TRA-king NAM-ber",
          literal: "Todo listo. Tan pronto como enviemos eso, usted recibirá un mensaje con el número de rastreo.",
          why: "“As soon as” cumple la función de apenas cuando significa tan pronto como. Es una frase muy útil para prometer el siguiente paso sin sonar mecánico."
        }
      ],
      vocabulary: [
        {
          term: "send",
          explanation:
            "El verbo amplio para enviar mensajes, documentos, archivos y paquetes. Es el punto de partida más seguro.",
          literal: "enviar / mandar",
          useWhen:
            "Cuando no quiere especificar si el canal es correo postal, mensajería, correo electrónico o una aplicación.",
          avoidWhen:
            "Cuando necesita decir comprar, ordenar comida o dar una orden. Mandar en español tiene varios caminos, pero send sólo cubre el de enviar.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["mail", "ship", "forward", "deliver"],
          example: {
            target: "I need to send this envelope to Dallas.",
            translation: "Necesito enviar este sobre a Dallas."
          }
        },
        {
          term: "mail",
          explanation:
            "Enviar por correo postal. Puede funcionar para cartas y sobres, pero dice más sobre el canal que send.",
          literal: "mandar por correo",
          useWhen:
            "Cuando habla de echar algo al correo, usar el servicio postal o recibir cartas físicas.",
          avoidWhen:
            "Cuando el canal puede ser mensajería privada, aplicación o correo electrónico. Ahí send es más flexible.",
          register: "neutro",
          region: "Inglés norteamericano; en inglés británico aparece más post como verbo.",
          related: ["send", "post", "ship", "email"],
          example: {
            target: "I'm going to mail it this afternoon.",
            translation: "Lo voy a mandar por correo esta tarde."
          }
        },
        {
          term: "tracking",
          explanation:
            "El rastreo del envío y también la palabra que verá en “tracking number.”",
          literal: "rastreo",
          useWhen:
            "Para pedir la forma de seguir un paquete o documento después de dejarlo en el mostrador.",
          avoidWhen:
            "Traducirlo como guía. En inglés una guide es una persona o una guía escrita, no el número de mensajería.",
          register: "de servicio neutro",
          region: "Inglés universal.",
          related: ["tracking number", "receipt", "delivery", "shipment"],
          example: {
            target: "Please send it with tracking.",
            translation: "Por favor envíelo con rastreo."
          }
        },
        {
          term: "receipt",
          explanation:
            "El recibo o comprobante de pago y de la transacción. Es la palabra que protege el reclamo después.",
          literal: "recibo / comprobante",
          useWhen:
            "Al pagar, enviar algo, devolver un producto o demostrar que una transacción sí ocurrió.",
          avoidWhen:
            "Confundirlo con recipe. Recipe es una receta de cocina; receipt conserva la p muda.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["proof", "invoice", "record", "confirmation"],
          example: {
            target: "Keep the receipt for me.",
            translation: "Guárdeme el recibo."
          }
        },
        {
          term: "as soon as",
          explanation:
            "La frase para apenas cuando significa tan pronto como.",
          literal: "tan pronto como",
          useWhen:
            "Cuando una acción futura dispara otra: apenas lo enviemos, apenas llegue, apenas contesten.",
          avoidWhen:
            "Traducir apenas siempre como barely. “Barely” habla de cantidad mínima, no de una secuencia de acciones.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["when", "once", "the moment", "right after"],
          example: {
            target: "As soon as we send it, you'll get a message.",
            translation: "Apenas lo enviemos, le llegará un mensaje."
          }
        },
        {
          term: "estimated delivery",
          explanation:
            "La entrega estimada: una fecha probable, no una garantía absoluta.",
          literal: "entrega estimada",
          useWhen:
            "Al preguntar cuándo debe llegar un envío sin exigir una promesa imposible.",
          avoidWhen:
            "Usarlo como si fuera guaranteed delivery. Estimated deja margen para retrasos.",
          register: "de servicio formal",
          region: "Inglés universal.",
          related: ["delivery date", "guaranteed delivery", "delay", "arrival"],
          example: {
            target: "It has estimated delivery tomorrow.",
            translation: "Tiene entrega estimada para mañana."
          }
        },
        {
          term: "please send it",
          explanation:
            "La manera sencilla de pedir que lo envíen sin sonar brusco.",
          literal: "por favor envíelo",
          useWhen:
            "Cuando ya confirmó precio, fecha y rastreo, y quiere que el trabajador proceda.",
          avoidWhen:
            "Quitar please en un mostrador. “Send it” puede sonar a orden seca aunque sea gramatical.",
          register: "cortés práctico",
          region: "Inglés universal.",
          related: ["could you send it", "go ahead and send it", "send it with tracking", "please mail it"],
          example: {
            target: "Please send it with tracking.",
            translation: "Por favor envíelo con rastreo."
          }
        }
      ],
      note:
        "La trampa para un colombiano no es aprender send, sino no dejar que mandar lo arrastre a order. “Mándame la foto” es “send me the photo,” no “order me the photo.” En el mostrador, send es suficientemente claro; mail y ship añaden matices que conviene usar sólo cuando de verdad los necesita.",
      culture: [
        {
          label: "Send es amplio, no informal",
          body:
            "En español usted puede sentir que enviar es más formal que mandar. En inglés send no suena burocrático por sí solo; es el verbo normal tanto para un archivo como para un sobre. La formalidad la ponen la frase completa, el please y el contexto."
        },
        {
          label: "Tracking no es guía",
          body:
            "Traducir guía como guide en una oficina de mensajería confunde la escena. En inglés, guide casi siempre será una persona que orienta o un documento de instrucciones. El número que sigue el paquete es tracking number."
        },
        {
          label: "Please vale más que una forma verbal",
          body:
            "Como el inglés no tiene usted, un “please” bien puesto puede cambiar todo el tono. “Please send it with tracking” no es servil ni exagerado; es simplemente el inglés de mostrador que mantiene la interacción limpia."
        }
      ],
      pitfalls: [
        {
          mistake: "“Order me the photo.”",
          whyItFails:
            "Order significa pedir una compra o dar una orden. No traduce mandar cuando mandar significa enviar algo por chat.",
          sayInstead: "Send me the photo."
        },
        {
          mistake: "“Guide number.”",
          whyItFails:
            "Guide no es el número de mensajería. Suena como si hubiera un guía humano asignado al paquete.",
          sayInstead: "Tracking number."
        },
        {
          mistake: "“Send this now.”",
          whyItFails:
            "La gramática está bien, pero en un mostrador suena demasiado seca. El inglés necesita cortesía léxica porque no puede refugiarse en usted.",
          sayInstead: "Please send it with tracking."
        }
      ],
      variations: [
        {
          form: "I need to send this envelope to Dallas.",
          register: "cortés práctico",
          region: "Inglés universal",
          whenToUse: "En el mostrador, cuando el envío es el asunto principal."
        },
        {
          form: "Could you send it with a tracking number?",
          register: "cortés formal",
          region: "Inglés universal",
          whenToUse: "Cuando quiere pedir rastreo con una fórmula un poco más suave."
        },
        {
          form: "I'll send it to you on WhatsApp.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Con amigos, para traducir el mandar colombiano de un chat."
        },
        {
          form: "Please find the documents attached.",
          register: "written formal",
          region: "Inglés de oficina",
          whenToUse: "En un correo formal, donde no hace falta repetir send si el archivo va adjunto."
        }
      ],
      prompt: "Laura dice “Mail is fine, but send is the word you'll see on the receipt.” ¿Qué distinción está enseñando?",
      choices: [
        "Mail especifica correo postal, mientras send sirve como verbo amplio del envío.",
        "Send sólo sirve para paquetes, mientras mail sólo sirve para mensajes digitales.",
        "Mail suena grosero en mostradores, mientras send suena informal entre amigos."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál línea pertenece mejor al mostrador de mensajería?",
          choices: [
            "I need to send this envelope to Dallas.",
            "Send me that picture when you can.",
            "I'll send a voice note later."
          ],
          answer: 0,
          tests: "send como verbo amplio para un envío físico"
        },
        {
          prompt: "¿Qué significa “tracking number” en esta escena?",
          choices: [
            "El número para rastrear el sobre.",
            "El nombre de quien atiende.",
            "La guía turística de Dallas."
          ],
          answer: 0,
          tests: "tracking number como número de rastreo"
        },
        {
          prompt: "“As soon as we send it, you'll get a message.” ¿Qué promete?",
          choices: [
            "El mensaje llega sólo si cierran tarde.",
            "El mensaje llega cuando procesen el envío.",
            "El mensaje llegó antes del mostrador."
          ],
          answer: 1,
          tests: "as soon as para una secuencia futura"
        },
        {
          prompt: "¿Cuál traduce mejor “mándame la foto”?",
          choices: [
            "Order me the picture tomorrow.",
            "Mail me the picture formally.",
            "Send me the picture, please."
          ],
          answer: 2,
          tests: "mandar como send, no como order"
        }
      ]
    }
  },
  {
    id: "recibir-en-cucuta-sin-enredarse",
    level: "Developing · Sending and sharing",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "recibir",
    review: "pending",
    es: {
      title: "Recibir en Cúcuta sin enredarte",
      situation:
        "Llegas a Cúcuta para visitar a una amiga y ella te espera con varias cosas a la vez: recibirte en el terminal, recibir un paquete que viene de Pereira y confirmar si en una cafetería reciben tarjeta. Como ya no estás empezando, tienes que oír cómo un solo verbo se mueve entre personas, objetos, pagos y hasta graduaciones.",
      setting: {
        who: "Valeria lives in Cúcuta and speaks to Sam as a close friend. Sam has arrived tired from the bus and is trying to keep track of people, packages and payment.",
        what: "A practical conversation about being met at the terminal, picking up a package and asking whether a café accepts cards.",
        when: "Early Friday afternoon, hot enough that both people are thinking about shade before lunch.",
        where: "Cúcuta, between the bus terminal and a nearby café, with a package office on the way.",
        why: "Because recibir is not just the opposite of sending. In Colombian life it covers welcoming a person, receiving an item, accepting a payment method and, in the reflexive form, graduating."
      },
      address: {
        form: "tú",
        who: "Valeria and Sam use tú because they are close friends who have kept in touch for years.",
        why: "In Cúcuta, as elsewhere in Colombia, tú is natural between many friends, especially when the relationship already feels settled. The warmth here is not formal; it is quick, teasing and practical.",
        ifYouSwitch:
          "Usted would add distance or playful seriousness. Vos would be understood by some people but would not be the safest default for this friendship in Cúcuta."
      },
      dialogue: [
        {
          speaker: "Valeria",
          target: "¡Por fin llegaste! Te vine a recibir porque este terminal confunde a cualquiera.",
          translation: "You finally got here! I came to meet you because this terminal confuses anyone.",
          pronunciation: "por feen yeh-GAS-teh. teh BEE-neh ah reh-see-BEER POR-keh ES-teh tehr-mee-NAL kon-FOON-deh ah kwal-KYEH-rah",
          literal: "At last you-arrived. You I-came to receive because this terminal confuses anyone.",
          why: "Receiving a person can mean meeting or welcoming them. Valeria is not passively getting Sam; she came to the terminal so Sam would not have to navigate it alone."
        },
        {
          speaker: "Sam",
          target: "Menos mal. También necesito recibir un paquete que me enviaron desde Pereira.",
          translation: "Good thing. I also need to receive a package they sent me from Pereira.",
          pronunciation: "MEH-nos mal. tam-BYEN neh-seh-SEE-toh reh-see-BEER oom pah-KEH-teh keh meh en-BYAH-ron DES-deh peh-REI-rah",
          literal: "Less bad. Also I-need to receive a package that to-me they-sent from Pereira.",
          why: "Here recibir is the object sense: the package arrives into Sam's hands. The sentence keeps enviar in the background without turning this into a sending lesson."
        },
        {
          speaker: "Valeria",
          target: "Lo recibimos de una vez, antes de que cierren la oficina.",
          translation: "We'll pick it up right away, before the office closes.",
          pronunciation: "loh reh-see-BEE-mos deh OO-nah bes, AN-tes deh keh SYE-ren lah oh-fee-SEE-nah",
          literal: "It we-receive at one time, before that they-close the office.",
          why: "“De una vez” means immediately or while we are already at it. Valeria makes recibir active: they will go get the package, not simply wait for it."
        },
        {
          speaker: "Sam",
          target: "Después invito el café. ¿Allá reciben tarjeta o toca efectivo?",
          translation: "After that I'll buy coffee. Do they accept cards there or do we need cash?",
          pronunciation: "des-PWES een-BEE-toh el kah-FEH. ah-YAH reh-SEE-ben tar-HEH-tah oh TOH-kah eh-fek-TEE-boh",
          literal: "After I-invite the coffee. There they-receive card or must cash?",
          why: "This is the visitor's survival use of recibir: stores and cafés “receive” cards in Colombian Spanish where English says accept cards."
        },
        {
          speaker: "Valeria",
          target: "Sí reciben, pero si se cae el datáfono, pagamos en efectivo.",
          translation: "They do take cards, but if the card reader goes down, we'll pay in cash.",
          pronunciation: "see reh-SEE-ben, PEH-roh see seh KAI el dah-TAH-foh-noh, pah-GAH-mos en eh-fek-TEE-boh",
          literal: "Yes they-receive, but if falls the card-reader, we-pay in cash.",
          why: "The repeated verb is idiomatic, not lazy. “Sí reciben” answers the payment-method question without restating tarjeta."
        },
        {
          speaker: "Sam",
          target: "Y tú, ¿cuándo te recibes de abogada? Eso también es recibir, ¿no?",
          translation: "And you, when do you graduate as a lawyer? That's recibir too, right?",
          pronunciation: "ee too, KWAN-doh teh reh-SEE-bes deh ah-boh-GAH-dah. EH-soh tam-BYEN es reh-see-BEER, noh",
          literal: "And you, when yourself receive as lawyer? That also is to-receive, no?",
          why: "Recibirse is the Colombian and broader Latin American reflexive for graduating. It is not the first use a traveler needs, but it explains why the verb feels bigger than “get.”"
        }
      ],
      vocabulary: [
        {
          term: "recibir",
          explanation:
            "To receive, but with a wider everyday range than English: people, packages, guests, payment methods and news can all be received.",
          literal: "to receive",
          useWhen:
            "Something or someone comes into your hands, space or responsibility, or when a business accepts a payment method.",
          avoidWhen:
            "Replacing every English “get.” Spanish uses conseguir, ponerse, llegar and many other verbs where English uses get.",
          register: "neutral",
          region: "General Spanish; all the uses in this lesson are natural in Colombia.",
          related: ["aceptar", "llegar", "recibirse", "atender"],
          example: {
            target: "Necesito recibir un paquete.",
            translation: "I need to receive a package."
          }
        },
        {
          term: "venir a recibir",
          explanation:
            "To come meet or welcome someone on arrival. It is warmer and more active than simply “receive.”",
          literal: "to come to receive",
          useWhen:
            "Someone meets you at an airport, terminal, station or front door so you are not arriving alone.",
          avoidWhen:
            "Talking about a package with no person waiting. Packages are received; people can be met and welcomed.",
          register: "friendly",
          region: "General Colombian.",
          related: ["esperar", "recoger", "dar la bienvenida", "acompañar"],
          example: {
            target: "Te vine a recibir al terminal.",
            translation: "I came to meet you at the terminal."
          }
        },
        {
          term: "¿reciben tarjeta?",
          explanation:
            "The Colombian way to ask whether a business takes cards.",
          literal: "do they receive card?",
          useWhen:
            "Before ordering in a café, taxi office, small shop or market stall where cash may still matter.",
          avoidWhen:
            "Translating it as “do they receive the card” in English. The idiom is about acceptance, not physically receiving plastic.",
          register: "neutral practical",
          region: "Very common in Colombia.",
          related: ["¿aceptan tarjeta?", "datáfono", "efectivo", "transferencia"],
          example: {
            target: "¿Allá reciben tarjeta o toca efectivo?",
            translation: "Do they take cards there or do we need cash?"
          }
        },
        {
          term: "datáfono",
          explanation:
            "The card reader or payment terminal at a shop or café.",
          literal: "data-phone",
          useWhen:
            "Talking about whether card payment is possible or whether the machine is working.",
          avoidWhen:
            "Calling it a teléfono. It is not a phone call and the lesson should not drift into llamar territory.",
          register: "neutral",
          region: "Very common in Colombia.",
          related: ["tarjeta", "efectivo", "transferencia", "pago"],
          example: {
            target: "Se cayó el datáfono.",
            translation: "The card reader went down."
          }
        },
        {
          term: "toca efectivo",
          explanation:
            "A compact Colombian way to say cash is required or that cash is what we have to use.",
          literal: "cash touches",
          useWhen:
            "The card reader fails, a small place does not accept cards, or the group has to adapt.",
          avoidWhen:
            "Reading toca literally. No one is touching the money as the main point; the point is obligation.",
          register: "everyday",
          region: "General Colombian.",
          related: ["hay que pagar", "nos toca", "en efectivo", "no reciben tarjeta"],
          example: {
            target: "¿Reciben tarjeta o toca efectivo?",
            translation: "Do they take cards or do we need cash?"
          }
        },
        {
          term: "recibirse de",
          explanation:
            "To graduate as a profession or from a program, especially in Latin America.",
          literal: "to receive oneself as",
          useWhen:
            "Talking about someone finishing a degree and taking on the professional title: lawyer, doctor, engineer.",
          avoidWhen:
            "Using it for finishing a casual course. For that, terminar or graduarse may be simpler.",
          register: "neutral",
          region: "Common in Colombia and Latin America; graduarse is also understood.",
          related: ["graduarse", "terminar la carrera", "ser profesional", "obtener el título"],
          example: {
            target: "¿Cuándo te recibes de abogada?",
            translation: "When do you graduate as a lawyer?"
          }
        },
        {
          term: "de una vez",
          explanation:
            "Right away, or while we are already doing the errand. It often suggests efficiency rather than hurry.",
          literal: "of one time",
          useWhen:
            "Combining errands or deciding not to postpone something that can be handled now.",
          avoidWhen:
            "Translating it as “one time.” It is about doing it now, not counting how many times.",
          register: "everyday",
          region: "General Colombian.",
          related: ["ya mismo", "aprovechando", "de paso", "ahora"],
          example: {
            target: "Lo recibimos de una vez.",
            translation: "We'll pick it up right away."
          }
        }
      ],
      note:
        "Recibir is useful because it sits at the exact point where something crosses into your life. A friend receives you at the terminal, a package is received at the office, a café receives cards, and a graduate se recibe as a professional. Do not flatten all of that into one English get. The Colombian Spanish is more specific than it first looks.",
      culture: [
        {
          label: "Being received can be active",
          body:
            "When a Colombian friend says they are going to receive you at the terminal, they are not waiting like a mailbox. They are meeting you, orienting you and often taking responsibility for the first messy minutes of arrival. The verb carries hospitality as well as logistics."
        },
        {
          label: "Ask about cards before you order",
          body:
            "“¿Reciben tarjeta?” is a practical sentence visitors need constantly. Many places do take cards, but a failed datáfono can turn a normal bill into a small scramble. Asking early sounds prepared, not suspicious."
        },
        {
          label: "Recibirse marks a life threshold",
          body:
            "In “se recibió de abogada,” the person is not receiving an object in the ordinary sense. The reflexive form marks a transition into a recognized professional status. It is the kind of usage that makes a common verb feel culturally bigger."
        }
      ],
      pitfalls: [
        {
          mistake: "Translating every English “get” as recibir",
          whyItFails:
            "Recibir only works when something comes to you or is accepted. “Get tired,” “get home,” and “get a taxi” need other Spanish verbs.",
          sayInstead: "Use recibir for packages, guests, news and accepted payments."
        },
        {
          mistake: "Saying “¿reciben la tarjeta?” as if the card were being handed over permanently",
          whyItFails:
            "People will understand, but the idiom is usually “¿reciben tarjeta?” without the article because it asks about the payment method in general.",
          sayInstead: "¿Reciben tarjeta?"
        },
        {
          mistake: "Missing the reflexive in “te recibes de abogada”",
          whyItFails:
            "Without se, the graduation meaning disappears. “Recibes de abogada” sounds like you are receiving something from a lawyer.",
          sayInstead: "¿Cuándo te recibes de abogada?"
        }
      ],
      variations: [
        {
          form: "Te vine a recibir al terminal.",
          register: "friendly",
          region: "General Colombian",
          whenToUse: "Meeting someone as they arrive and taking care of the first steps."
        },
        {
          form: "Necesito recibir un paquete.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Talking about an object that should come into your hands."
        },
        {
          form: "¿Reciben tarjeta o toca efectivo?",
          register: "everyday practical",
          region: "General Colombian",
          whenToUse: "Before paying in a café, shop or small office."
        },
        {
          form: "Ella se recibió de abogada en junio.",
          register: "neutral",
          region: "Latin American Spanish",
          whenToUse: "Talking about graduation into a profession."
        }
      ],
      prompt: "Valeria says “Sí reciben, pero si se cae el datáfono, pagamos en efectivo.” What does recibir mean here?",
      choices: [
        "The café accepts cards as a payment method.",
        "The café welcomes tourists from the terminal.",
        "The café receives packages from Pereira."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses recibir for welcoming a person?",
          choices: [
            "Te vine a recibir al terminal.",
            "Necesito recibir un paquete.",
            "¿Reciben tarjeta en ese café?"
          ],
          answer: 0,
          tests: "recibir a person as meeting or welcoming them"
        },
        {
          prompt: "What is the most natural way to ask if a café takes cards?",
          choices: [
            "¿Reciben tarjeta en este café?",
            "¿Reciben la tarjeta para siempre?",
            "¿Recibes tarjeta como persona?"
          ],
          answer: 0,
          tests: "the payment-method idiom without an article"
        },
        {
          prompt: "In “¿cuándo te recibes de abogada?”, what does recibirse mean?",
          choices: [
            "To accept payment from a lawyer.",
            "To graduate into the profession.",
            "To pick up a package personally."
          ],
          answer: 1,
          tests: "recibirse de as graduating as a professional"
        },
        {
          prompt: "What does “lo recibimos de una vez” suggest?",
          choices: [
            "They will ignore the package today.",
            "They received it many times before.",
            "They will handle it right away."
          ],
          answer: 2,
          tests: "de una vez as right away or while already doing it"
        }
      ]
    },
    en: {
      title: "Recibir en Cúcuta sin enredarse",
      situation:
        "Usted llega a Lubbock para visitar a una amiga y necesita decir en inglés que alguien lo recibe en la estación, que debe recibir un paquete y que una cafetería acepta tarjeta. La dificultad no es memorizar receive, sino saber cuándo el inglés prefiere meet, accept, take o graduate.",
      setting: {
        who: "Valerie vive en Lubbock y habla con Samuel como amiga cercana. Samuel llega cansado del bus y trata de organizar personas, paquetes y pago.",
        what: "Una conversación práctica sobre encontrarse en la estación, recoger un paquete y preguntar si un café acepta tarjetas.",
        when: "Un viernes temprano por la tarde, con suficiente calor para que ambos busquen sombra antes de almorzar.",
        where: "Lubbock, entre la estación de buses y una cafetería cercana, con una oficina de paquetes en el camino.",
        why: "Porque receive existe en inglés, pero no cubre todos los usos de recibir. Para personas suele ser meet, para pagos accept o take, y para graduarse se necesita graduate."
      },
      address: {
        form: "mixed",
        who: "Valerie y Samuel usan nombres de pila y el mismo “you”; la cercanía sale del tono y de frases como “finally” y “good thing.”",
        why: "El inglés no tiene una forma distinta para tú. Entre amigos, la informalidad se oye en la velocidad, las contracciones y las bromas, no en un pronombre diferente.",
        ifYouSwitch:
          "No hay cambio de pronombre posible. Lo que sí cambiaría el registro sería decir “sir” o “ma'am,” que sonaría rarísimo entre amigos."
      },
      dialogue: [
        {
          speaker: "Valerie",
          target: "You finally made it! I came to meet you because this station confuses everybody.",
          translation: "¡Por fin llegaste! Vine a recibirte porque esta estación confunde a cualquiera.",
          pronunciation: "yu FAI-na-li meid it. ai keim tu MIT yu bi-KOZ dis STEI-shon kon-FIU-zes EV-ri-ba-di",
          literal: "Usted finalmente lo logró. Vine a encontrarlo porque esta estación confunde a todos.",
          why: "Para recibir a una persona que llega, el inglés cotidiano suele preferir meet. “I came to receive you” se entiende, pero suena ceremonial o traducido."
        },
        {
          speaker: "Samuel",
          target: "Good thing. I also need to pick up a package they sent me from Amarillo.",
          translation: "Menos mal. También necesito recibir un paquete que me enviaron desde Amarillo.",
          pronunciation: "gud thing. ai OL-sou nid tu pik ap a PA-kech dei sent mi from ED-mon-ton",
          literal: "Buena cosa. También necesito recoger un paquete que ellos me enviaron desde Amarillo.",
          why: "Cuando usted va a buscar el paquete, pick up suele sonar mejor que receive. Receive describe la llegada; pick up describe la diligencia."
        },
        {
          speaker: "Valerie",
          target: "Let's pick it up right away, before the office closes.",
          translation: "Recojámoslo de una vez, antes de que cierre la oficina.",
          pronunciation: "lets pik it ap rait a-WEI, bi-FOR di O-fis KLOU-zes",
          literal: "Vamos a recogerlo inmediatamente, antes de que la oficina cierre.",
          why: "Right away traduce bien de una vez en este contexto. No hace falta decir “one time,” que en inglés sólo contaría ocasiones."
        },
        {
          speaker: "Samuel",
          target: "After that, coffee is on me. Do they take cards there, or do we need cash?",
          translation: "Después invito el café. ¿Allá reciben tarjeta o toca efectivo?",
          pronunciation: "AF-ter dat, KO-fi iz on mi. du dei teik kards der, or du ui nid kash",
          literal: "Después de eso, el café está sobre mí. ¿Toman tarjetas allá o necesitamos efectivo?",
          why: "Para pagos, take cards es muy natural. Accept cards también sirve, pero “receive cards” suena como recibir tarjetas físicas, no pagos."
        },
        {
          speaker: "Valerie",
          target: "They do take cards, but if the machine is down, we'll pay cash.",
          translation: "Sí reciben tarjeta, pero si se cae el datáfono, pagamos en efectivo.",
          pronunciation: "dei du teik kards, bat if da ma-SHIN iz daun, uil pei kash",
          literal: "Ellos sí toman tarjetas, pero si la máquina está abajo, pagaremos efectivo.",
          why: "El do refuerza la respuesta: sí, las reciben. Es una forma pequeña pero muy conversacional de corregir una duda."
        },
        {
          speaker: "Samuel",
          target: "And you, when do you graduate from law school?",
          translation: "Y tú, ¿cuándo te recibes de abogada?",
          pronunciation: "and yu, wen du yu GRA-yu-eit from lo skul",
          literal: "Y usted, ¿cuándo se gradúa de escuela de derecho?",
          why: "El inglés no usa receive para ese logro personal. Graduate from law school o graduate as a lawyer cubre lo que en Colombia puede decirse con recibirse de abogada."
        }
      ],
      vocabulary: [
        {
          term: "receive",
          explanation:
            "Recibir en sentido amplio, pero menos común que recibir en muchas escenas cotidianas del español.",
          literal: "recibir",
          useWhen:
            "Cuando algo llega a usted: un correo, una carta, una noticia, un premio o un paquete entregado.",
          avoidWhen:
            "Con personas que usted va a buscar, pagos con tarjeta o graduaciones. Ahí el inglés suele elegir otro verbo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["get", "accept", "meet", "pick up"],
          example: {
            target: "I received the package yesterday.",
            translation: "Recibí el paquete ayer."
          }
        },
        {
          term: "come to meet",
          explanation:
            "La forma natural de decir venir a recibir a alguien en una estación, terminal o aeropuerto.",
          literal: "venir a encontrarse con",
          useWhen:
            "Cuando una persona llega y otra va a esperarla o guiarla.",
          avoidWhen:
            "Traducir palabra por palabra “come to receive you.” Suena solemne, no amistoso.",
          register: "amistoso",
          region: "Inglés universal.",
          related: ["meet", "pick someone up", "welcome", "wait for"],
          example: {
            target: "I came to meet you at the station.",
            translation: "Vine a recibirte en la estación."
          }
        },
        {
          term: "Do they take cards?",
          explanation:
            "La pregunta más corriente para saber si un lugar recibe tarjeta.",
          literal: "¿toman tarjetas?",
          useWhen:
            "Antes de pedir en un café, tienda, taxi o restaurante donde quizá haga falta efectivo.",
          avoidWhen:
            "Decir “do they receive card?” Esa frase arrastra el español y no suena idiomática.",
          register: "neutro práctico",
          region: "Inglés universal; “accept cards” también funciona.",
          related: ["accept cards", "take cash", "card machine", "payment"],
          example: {
            target: "Do they take cards there?",
            translation: "¿Allá reciben tarjeta?"
          }
        },
        {
          term: "card machine",
          explanation:
            "El datáfono o terminal de pago. Es una frase menos técnica y muy entendible.",
          literal: "máquina de tarjeta",
          useWhen:
            "Al explicar que no se puede pagar con tarjeta porque el aparato no funciona.",
          avoidWhen:
            "Traducir datáfono como data phone. Esa combinación no es el nombre corriente del aparato.",
          register: "neutro",
          region: "Inglés universal; payment terminal es más técnico.",
          related: ["payment terminal", "reader", "machine", "tap"],
          example: {
            target: "The card machine is down.",
            translation: "Se cayó el datáfono."
          }
        },
        {
          term: "we need cash",
          explanation:
            "Una manera directa de decir toca efectivo.",
          literal: "necesitamos efectivo",
          useWhen:
            "Cuando no aceptan tarjetas o la máquina no funciona.",
          avoidWhen:
            "Traducir toca como touches. “Cash touches” no significa nada en este contexto.",
          register: "cotidiano",
          region: "Inglés universal.",
          related: ["cash only", "pay cash", "no cards", "ATM"],
          example: {
            target: "Do we need cash?",
            translation: "¿Toca efectivo?"
          }
        },
        {
          term: "graduate from",
          explanation:
            "Graduarse de una institución o programa. Es el camino normal para recibirse.",
          literal: "graduarse de",
          useWhen:
            "Al hablar de terminar una carrera, colegio, universidad o facultad.",
          avoidWhen:
            "Decir receive yourself. Eso no comunica la transición profesional en inglés.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["graduate as", "finish a degree", "earn a degree", "qualify as"],
          example: {
            target: "When do you graduate from law school?",
            translation: "¿Cuándo te recibes de abogada?"
          }
        },
        {
          term: "right away",
          explanation:
            "Inmediatamente; una buena traducción de de una vez cuando significa hacerlo ya.",
          literal: "de inmediato",
          useWhen:
            "Cuando decide no aplazar una diligencia o aprovechar que ya está cerca.",
          avoidWhen:
            "Decir one time. Eso habla de una sola ocasión, no de hacerlo ahora.",
          register: "cotidiano",
          region: "Inglés universal.",
          related: ["now", "straight away", "at once", "while we're here"],
          example: {
            target: "Let's pick it up right away.",
            translation: "Recibámoslo de una vez."
          }
        }
      ],
      note:
        "Receive no es falso amigo, pero sí es más estrecho que recibir. Si una amiga lo recibe en la estación, en inglés she meets you. Si un café recibe tarjeta, it takes cards. Si usted se recibe de abogado, you graduate from law school. Aprender esos desvíos evita un inglés correcto en diccionario y raro en la calle.",
      culture: [
        {
          label: "Meet no siempre es conocer por primera vez",
          body:
            "Muchos hispanohablantes reservan meet para conocer a alguien, pero también significa encontrarse con alguien en un lugar. “I came to meet you at the station” no implica que sean desconocidos; implica que alguien fue a recibirlo."
        },
        {
          label: "Take cards es una frase normal",
          body:
            "La palabra take puede incomodar porque parece tomar físicamente, pero en pagos significa aceptar. “Do they take cards?” es una pregunta cotidiana, no una frase descuidada."
        },
        {
          label: "Graduate carga la ceremonia y el logro",
          body:
            "El inglés no usa receive para el momento de volverse profesional. Graduate concentra la idea de terminar, recibir el título y cruzar un umbral social. Por eso traduce mejor recibirse que una versión literal."
        }
      ],
      pitfalls: [
        {
          mistake: "“I came to receive you.”",
          whyItFails:
            "Se entiende, pero suena ceremonial y traducido. Entre amigos en una estación, meet es el verbo natural.",
          sayInstead: "I came to meet you."
        },
        {
          mistake: "“Do they receive card?”",
          whyItFails:
            "Arrastra la estructura de “¿reciben tarjeta?” El inglés pregunta si el lugar takes cards o accepts cards.",
          sayInstead: "Do they take cards?"
        },
        {
          mistake: "“When do you receive yourself as a lawyer?”",
          whyItFails:
            "La forma reflexiva de recibirse no existe en inglés. La frase suena cómica y no expresa graduación.",
          sayInstead: "When do you graduate from law school?"
        }
      ],
      variations: [
        {
          form: "I came to meet you at the station.",
          register: "amistoso",
          region: "Inglés universal",
          whenToUse: "Cuando va a recibir a alguien que llega."
        },
        {
          form: "I need to pick up a package.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Cuando usted hará la diligencia de recogerlo."
        },
        {
          form: "Do they take cards, or do we need cash?",
          register: "cotidiano práctico",
          region: "Inglés universal",
          whenToUse: "Antes de pagar en un café, tienda o restaurante."
        },
        {
          form: "She graduated from law school in June.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Para decir que alguien se recibió de abogada."
        }
      ],
      prompt: "Valerie says “They do take cards, but if the machine is down, we'll pay cash.” ¿Qué significa take aquí?",
      choices: [
        "El café acepta tarjetas como medio de pago.",
        "El café recoge tarjetas perdidas de clientes.",
        "El café recibe paquetes enviados por correo."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase dice mejor venir a recibir a una persona?",
          choices: [
            "I came to meet you at the station.",
            "I need to pick up a package.",
            "Do they take cards there?"
          ],
          answer: 0,
          tests: "meet para recibir a una persona que llega"
        },
        {
          prompt: "¿Cómo pregunta mejor si una cafetería recibe tarjeta?",
          choices: [
            "Do they take cards here?",
            "Do they receive card forever?",
            "Do you receive card personally?"
          ],
          answer: 0,
          tests: "take cards como equivalente idiomático"
        },
        {
          prompt: "¿Cuál traduce mejor “te recibes de abogada”?",
          choices: [
            "You accept payment from lawyers.",
            "You graduate from law school.",
            "You pick up a legal package."
          ],
          answer: 1,
          tests: "graduate from para recibirse de"
        },
        {
          prompt: "¿Qué expresa “right away” en “let's pick it up right away”?",
          choices: [
            "Que lo dejarán para mañana.",
            "Que lo recogieron muchas veces.",
            "Que lo harán de inmediato."
          ],
          answer: 2,
          tests: "right away como de una vez"
        }
      ]
    }
  },
  {
    id: "compartir-en-un-colegio-de-cali",
    level: "Developing · Sending and sharing",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "compartir",
    review: "pending",
    es: {
      title: "Compartir en un colegio de Cali",
      situation:
        "Estás ayudando en un colegio de Cali donde el equipo organiza un pequeño compartir después de una reunión. La conversación mezcla comida, un enlace para las fotos y el trato de vos. Como ya estás en nivel Developing, no basta con traducir share: tienes que notar cuándo compartir es social, digital y hasta un sustantivo.",
      setting: {
        who: "Mariana coordinates the school office and uses Cali vos with Diego, a volunteer who has helped often enough to be treated like part of the team.",
        what: "A quick plan for a small gathering with food, plus a link and photos to share afterward.",
        when: "Friday afternoon, after a parent meeting that ran longer than expected.",
        where: "Cali, in a school office with plastic chairs, a table of snacks and a WhatsApp group waiting for photos.",
        why: "Because compartir is one of those verbs that crosses old and new life easily: sharing food, sharing a link, sharing credit, and in Colombia, a compartir can also be a modest social gathering around food."
      },
      address: {
        form: "vos",
        who: "Mariana uses vos with Diego, and Diego uses vos back.",
        why: "Vos is common and natural in Cali among people with an easy, familiar relationship. Here it signals that Diego is no longer a stiff guest.",
        ifYouSwitch:
          "Tú would be understood and neutral, but it would sand off the local warmth. Usted would suddenly make the office feel more formal than the relationship has become."
      },
      dialogue: [
        {
          speaker: "Mariana",
          target: "Diego, ¿vos podés compartir las fotos en el grupo después del compartir?",
          translation: "Diego, can you share the photos in the group after the gathering?",
          pronunciation: "DYEH-goh, bos poh-DES kom-par-TEER las FOH-tos en el GROO-poh des-PWES del kom-par-TEER",
          literal: "Diego, you can share the photos in the group after the sharing?",
          why: "The line deliberately uses compartir twice: first as a verb for posting photos, then as a Colombian noun for a small food-centered gathering."
        },
        {
          speaker: "Diego",
          target: "Sí, yo las comparto apenas me pasen el enlace.",
          translation: "Yes, I'll share them as soon as they send me the link.",
          pronunciation: "see, yoh las kom-PAR-toh ah-PEH-nas meh PAH-sen el en-LAH-seh",
          literal: "Yes, I them share as soon-as to-me they-pass the link.",
          why: "“Las comparto” is ordinary digital Spanish. The object is already known, so Diego does not need to repeat fotos."
        },
        {
          speaker: "Mariana",
          target: "Y dejá una bandeja para que todos compartamos algo, no sólo fotos.",
          translation: "And leave one tray so we all share something, not just photos.",
          pronunciation: "ee deh-HAH OO-nah ban-DEH-hah PAH-rah keh TOH-dos kom-par-TAH-mos AL-goh, no SOH-loh FOH-tos",
          literal: "And leave a tray so that all we-share something, not only photos.",
          why: "This is the food-and-company sense. Compartir does not have to mean dividing equally; it can mean making something available to the group."
        },
        {
          speaker: "Diego",
          target: "Traje pandebonos de Palmira; esos sí toca compartirlos antes de que se enfríen.",
          translation: "I brought pandebonos from Palmira; those really have to be shared before they get cold.",
          pronunciation: "TRAH-heh pan-deh-BOH-nos deh pal-MEE-rah; EH-sos see TOH-kah kom-par-TEER-los AN-tes deh keh seh en-FREE-en",
          literal: "I-brought pandebonos from Palmira; those yes must share-them before that they-cool.",
          why: "Palmira is near Cali, and pandebonos are real enough without inventing a fake local expression. The attached -los keeps the food in the verb."
        },
        {
          speaker: "Mariana",
          target: "Buenísimo. También compartí el enlace con los papás que no vinieron.",
          translation: "Great. Also share the link with the parents who didn't come.",
          pronunciation: "bweh-NEE-see-moh. tam-BYEN kom-par-TEE el en-LAH-seh kon los pah-PAS keh no bee-NYEH-ron",
          literal: "Very good. Also share the link with the parents who did not come.",
          why: "“Compartí” is the vos command in Cali speech. It looks like a past tense to many learners, but the stress and context make it an instruction."
        },
        {
          speaker: "Diego",
          target: "Listo, lo comparto con contexto, para que no parezca un mensaje suelto.",
          translation: "Done, I'll share it with context so it doesn't look like a stray message.",
          pronunciation: "LEES-toh, loh kom-PAR-toh kon kon-TEKS-toh, PAH-rah keh no pah-RES-kah oon men-SAH-heh SWEHL-toh",
          literal: "Ready, it I-share with context, so that not it-seems a message loose.",
          why: "This is a Developing-level move: not just sharing the link, but sharing it with enough explanation that the recipients know what to do with it."
        }
      ],
      vocabulary: [
        {
          term: "compartir",
          explanation:
            "To share: food, space, information, links, credit or time with other people.",
          literal: "to share",
          useWhen:
            "Something is made available to more than one person, whether it is a tray of food or a link in a chat.",
          avoidWhen:
            "You mean “tell a secret” in a confessional sense. Compartir can do that, but contar or decir may be more direct depending on the sentence.",
          register: "neutral",
          region: "General Spanish; all the examples here are natural in Colombia.",
          related: ["repartir", "pasar", "publicar", "convivir"],
          example: {
            target: "¿Vos podés compartir las fotos?",
            translation: "Can you share the photos?"
          }
        },
        {
          term: "un compartir",
          explanation:
            "In Colombia, a small informal gathering with food, often at school, church or work.",
          literal: "a sharing",
          useWhen:
            "People bring or arrange snacks and spend a modest social moment together after a meeting or activity.",
          avoidWhen:
            "Using it for every party. A compartir is usually humble and communal, not a full fiesta.",
          register: "friendly informal",
          region: "Common Colombian usage.",
          related: ["reunión", "onces", "algo para picar", "integración"],
          example: {
            target: "Después de la reunión hacemos un compartir.",
            translation: "After the meeting we're having a small gathering with food."
          }
        },
        {
          term: "enlace",
          explanation:
            "A link, especially one shared in a chat or email.",
          literal: "link",
          useWhen:
            "Sending access to photos, forms, documents, maps or online meetings.",
          avoidWhen:
            "Saying link in a formal Spanish sentence if enlace would sound cleaner. In speech, link is common too, but enlace is safer in a lesson.",
          register: "neutral",
          region: "General Spanish.",
          related: ["link", "vínculo", "archivo", "carpeta"],
          example: {
            target: "Compartí el enlace con los papás.",
            translation: "Share the link with the parents."
          }
        },
        {
          term: "grupo",
          explanation:
            "The chat group, often a WhatsApp group unless another platform is named.",
          literal: "group",
          useWhen:
            "Referring to the shared chat for parents, coworkers, classmates or neighbors.",
          avoidWhen:
            "Assuming everyone wants public social media. In Colombia, many everyday logistics still happen in private WhatsApp groups.",
          register: "neutral",
          region: "General Colombian digital speech.",
          related: ["chat", "WhatsApp", "lista", "comunidad"],
          example: {
            target: "Comparto las fotos en el grupo.",
            translation: "I'll share the photos in the group."
          }
        },
        {
          term: "pandebonos",
          explanation:
            "Cheese breads strongly associated with Valle del Cauca and very plausible on a Cali snack table.",
          literal: "pandebonos",
          useWhen:
            "Talking about a real snack people might bring to an office, school or family visit.",
          avoidWhen:
            "Turning the food into a fake regional grammar point. It is cultural setting, not a new verb rule.",
          register: "everyday",
          region: "Especially associated with Valle del Cauca; known across Colombia.",
          related: ["almojábanas", "buñuelos", "amasijos", "mecato"],
          example: {
            target: "Traje pandebonos de Palmira.",
            translation: "I brought pandebonos from Palmira."
          }
        },
        {
          term: "compartí",
          explanation:
            "The vos command for “share” in this context, not the past tense “I shared.”",
          literal: "share",
          useWhen:
            "Speaking with vos in places like Cali and telling someone to share a link, photo or detail.",
          avoidWhen:
            "Using it with usted or tú. Those commands would be comparta and comparte.",
          register: "friendly informal",
          region: "Natural in voseo regions such as Cali and Valle del Cauca.",
          related: ["compartílo", "comparta", "comparte", "pasá"],
          example: {
            target: "Compartí el enlace con los papás.",
            translation: "Share the link with the parents."
          }
        },
        {
          term: "mensaje suelto",
          explanation:
            "A message with no context around it, floating in the chat and easy to misunderstand.",
          literal: "loose message",
          useWhen:
            "You want to explain why a link, photo or file needs a short note with it.",
          avoidWhen:
            "Sending a bare link to a group that does not know what it is. That is how chats become noise.",
          register: "everyday",
          region: "General Colombian.",
          related: ["contexto", "explicación", "hilo", "mensaje completo"],
          example: {
            target: "Lo comparto con contexto.",
            translation: "I'll share it with context."
          }
        }
      ],
      note:
        "Compartir is not only the moral verb children learn when told to share toys. In a Colombian school office, it can mean posting photos, making snacks available, giving parents a useful link and naming the small gathering itself. The Cali vos adds one more layer: “compartí” may be an instruction, not a past-tense story.",
      culture: [
        {
          label: "A compartir is small by design",
          body:
            "In Colombian schools and offices, “un compartir” often means snacks on a table and a short moment of community after the formal business. It is not a gala and not necessarily a birthday. The word matters because the point is being together around something shared."
        },
        {
          label: "WhatsApp is infrastructure",
          body:
            "Sharing photos in the group is not an afterthought. Parent groups, office groups and neighborhood groups carry real logistics. A bare link can create confusion; a link with context respects everyone's time."
        },
        {
          label: "Vos sounds ordinary in Cali",
          body:
            "A learner may hear “compartí” and think past tense because it looks familiar. In Cali, with vos, it can be a command. The tone is not exotic or theatrical; it is ordinary local friendliness."
        }
      ],
      pitfalls: [
        {
          mistake: "Assuming compartir always means dividing something equally",
          whyItFails:
            "At a school table, sharing food can mean making it available to the group, not calculating equal portions. With a link, it means giving access.",
          sayInstead: "Read the object: food, photos, links and credit all shape compartir differently."
        },
        {
          mistake: "Hearing “compartí” as only past tense",
          whyItFails:
            "With vos, “compartí” can be a command. Context tells you whether someone is saying “I shared” or “share it.”",
          sayInstead: "In Cali vos, hear “compartí el enlace” as “share the link.”"
        },
        {
          mistake: "Calling every party “un compartir”",
          whyItFails:
            "The noun usually points to a modest communal snack or gathering. A big party, formal event or night out needs other words.",
          sayInstead: "Use “un compartir” for a small informal gathering with food."
        }
      ],
      variations: [
        {
          form: "¿Vos podés compartir las fotos en el grupo?",
          register: "warm informal",
          region: "Cali and Valle del Cauca",
          whenToUse: "Asking someone you address with vos to post photos in a group chat."
        },
        {
          form: "Comparto el enlace con contexto.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Promising to share a link with enough explanation to be useful."
        },
        {
          form: "Hagamos un compartir después de la reunión.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Suggesting a small food-centered gathering at work or school."
        },
        {
          form: "Dejemos algo para que todos compartamos.",
          register: "warm practical",
          region: "General Spanish",
          whenToUse: "Making sure food or space is available to the group."
        }
      ],
      prompt: "Mariana says “después del compartir.” What does “un compartir” mean here?",
      choices: [
        "A small informal gathering with food.",
        "A public post on social media.",
        "An equal division of money."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses compartir in the digital sense?",
          choices: [
            "Compartí el enlace con los papás.",
            "Hagamos un compartir el viernes.",
            "Dejemos pandebonos para todos."
          ],
          answer: 0,
          tests: "compartir as sharing a link or digital item"
        },
        {
          prompt: "Why might “compartí el enlace” be a command in Cali?",
          choices: [
            "Because vos uses that form for commands.",
            "Because past tense never exists there.",
            "Because enlace changes the verb tense."
          ],
          answer: 0,
          tests: "vos command form in Cali Spanish"
        },
        {
          prompt: "What does Diego add by saying “con contexto”?",
          choices: [
            "He will delete the link later.",
            "He will explain why the link matters.",
            "He will share only the food."
          ],
          answer: 1,
          tests: "sharing a link with enough explanation"
        },
        {
          prompt: "Which scene best fits “un compartir”?",
          choices: [
            "A court hearing with no food.",
            "A solo taxi ride home.",
            "A school snack table after a meeting."
          ],
          answer: 2,
          tests: "un compartir as a modest communal gathering"
        }
      ]
    },
    en: {
      title: "Compartir en un colegio de Cali",
      situation:
        "Usted ayuda en una escuela de Fresno, California, donde el equipo organiza una merienda después de una reunión y también debe compartir fotos y un enlace. El reto en inglés es separar share como verbo, potluck como evento, link como objeto digital y no traducir “un compartir” palabra por palabra.",
      setting: {
        who: "Mariana coordina la oficina escolar y habla con Diego, voluntario frecuente, como alguien que ya pertenece al equipo.",
        what: "Un plan rápido para una merienda pequeña, más un enlace y unas fotos que deben circular después.",
        when: "Un viernes por la tarde, después de una reunión de padres que se alargó más de lo previsto.",
        where: "Fresno, en una oficina escolar con sillas plásticas, una mesa de snacks y un grupo de mensajes esperando fotos.",
        why: "Porque share sí traduce compartir muchas veces, pero no convierte “un compartir” en “a sharing.” Para el evento hay que escoger gathering, potluck o get-together según el caso."
      },
      address: {
        form: "mixed",
        who: "Mariana y Diego usan first names y el mismo “you”; la confianza se nota en “can you,” “great,” y frases cortas.",
        why: "El inglés no tiene vos. La familiaridad se construye con ritmo, contracciones, nombres y tareas compartidas, no con una forma verbal especial.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Lo que sonaría raro sería volver la escena demasiado formal con “Mr. Diego” o “would you be so kind” entre compañeros."
      },
      dialogue: [
        {
          speaker: "Mariana",
          target: "Diego, can you share the photos in the group after the get-together?",
          translation: "Diego, ¿puedes compartir las fotos en el grupo después del compartir?",
          pronunciation: "DI-ei-go, kan yu sher da FOU-touz in da grup AF-ter da get-tu-GE-der",
          literal: "Diego, ¿puedes compartir las fotos en el grupo después del juntarse?",
          why: "Share funciona para las fotos, pero get-together funciona mejor para el evento. “After the sharing” sonaría como una etiqueta traducida, no como inglés corriente."
        },
        {
          speaker: "Diego",
          target: "Yes, I'll share them as soon as someone sends me the link.",
          translation: "Sí, las comparto apenas alguien me mande el enlace.",
          pronunciation: "yes, ail sher dem az sun az SAM-wan sends mi da link",
          literal: "Sí, compartiré ellas tan pronto como alguien me envíe el enlace.",
          why: "El pronombre de objeto them mantiene vivas las fotos sin repetir el sustantivo. Es la misma eficiencia que el español logra con las."
        },
        {
          speaker: "Mariana",
          target: "And leave one tray so everyone can share some food, not just photos.",
          translation: "Y deja una bandeja para que todos compartan algo de comida, no sólo fotos.",
          pronunciation: "and liv uan trei so EV-ri-wan kan sher sam fud, not yost FOU-touz",
          literal: "Y deja una bandeja para que todos puedan compartir algo de comida, no sólo fotos.",
          why: "Share some food no exige porciones iguales. Significa que la comida está disponible para el grupo, igual que en español."
        },
        {
          speaker: "Diego",
          target: "I brought cheese rolls; we should share those before they get cold.",
          translation: "Traje panes de queso; esos sí deberíamos compartirlos antes de que se enfríen.",
          pronunciation: "ai brot chiz roulz; ui shud sher douz bi-FOR dei get kould",
          literal: "Traje rollos de queso; deberíamos compartir esos antes de que se enfríen.",
          why: "Cheese rolls es una traducción cultural sencilla, no una explicación forzada de pandebonos. La lección gramatical sigue siendo share those."
        },
        {
          speaker: "Mariana",
          target: "Great. Also share the link with the parents who couldn't come.",
          translation: "Buenísimo. También comparte el enlace con los papás que no pudieron venir.",
          pronunciation: "greit. OL-sou sher da link uid da PE-rents hu KU-dent kam",
          literal: "Genial. También comparte el enlace con los padres que no pudieron venir.",
          why: "Share the link es la frase digital estándar. El inglés no necesita un verbo especial para los enlaces."
        },
        {
          speaker: "Diego",
          target: "All set. I'll share it with context so it doesn't look like a random message.",
          translation: "Listo. Lo comparto con contexto para que no parezca un mensaje suelto.",
          pronunciation: "ol set. ail sher it uid KON-tekst so it DA-zent luk laik a RAN-dom ME-sech",
          literal: "Todo listo. Lo compartiré con contexto para que no parezca un mensaje aleatorio.",
          why: "With context es exactamente el hábito de nivel Developing: compartir no es sólo mover un enlace, sino ayudar a que la gente entienda por qué lo recibió."
        }
      ],
      vocabulary: [
        {
          term: "share",
          explanation:
            "Compartir comida, espacio, información, enlaces, crédito o tiempo. Es un verbo muy amplio y muy cotidiano.",
          literal: "compartir",
          useWhen:
            "Algo queda disponible para más de una persona, desde una bandeja de comida hasta un enlace en un chat.",
          avoidWhen:
            "Nombrar el evento colombiano “un compartir.” En inglés necesita gathering, potluck o get-together, no “a sharing.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["post", "send", "split", "pass around"],
          example: {
            target: "Can you share the photos?",
            translation: "¿Puedes compartir las fotos?"
          }
        },
        {
          term: "get-together",
          explanation:
            "Una reunión informal pequeña. Es una buena salida para “un compartir” cuando no quiere especificar quién trae la comida.",
          literal: "reunión informal",
          useWhen:
            "Para una merienda, reunión casual o momento social modesto después de otra actividad.",
          avoidWhen:
            "Decir “a sharing.” Esa frase no nombra un evento normal en inglés.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["gathering", "potluck", "snack table", "meet-up"],
          example: {
            target: "After the get-together, share the photos.",
            translation: "Después del compartir, comparte las fotos."
          }
        },
        {
          term: "link",
          explanation:
            "El enlace digital que se manda o comparte en un chat, correo o plataforma.",
          literal: "enlace / link",
          useWhen:
            "Para fotos, formularios, mapas, reuniones virtuales y carpetas compartidas.",
          avoidWhen:
            "Pronunciarlo como si fuera una palabra española dentro de una frase inglesa. En inglés termina con una k clara.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["URL", "file", "folder", "attachment"],
          example: {
            target: "Share the link with the parents.",
            translation: "Comparte el enlace con los papás."
          }
        },
        {
          term: "group",
          explanation:
            "El grupo de mensajes o chat grupal, según el contexto.",
          literal: "grupo",
          useWhen:
            "Cuando todos saben que se habla del chat de padres, trabajo, clase o vecinos.",
          avoidWhen:
            "Pensar que group siempre es una reunión física. En esta escena es el espacio digital.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["group chat", "WhatsApp group", "thread", "message"],
          example: {
            target: "Share the photos in the group.",
            translation: "Comparte las fotos en el grupo."
          }
        },
        {
          term: "cheese rolls",
          explanation:
            "Una traducción práctica para explicar panes de queso sin detener la conversación.",
          literal: "rollos de queso",
          useWhen:
            "Cuando necesita describir un snack regional de manera comprensible, aunque no capture toda la cultura del alimento.",
          avoidWhen:
            "Creer que reemplaza el nombre propio del plato. Si la comida importa, puede decir pandebonos and explain once.",
          register: "cotidiano",
          region: "Inglés universal como descripción, no como nombre cultural exacto.",
          related: ["cheese bread", "snacks", "pastries", "food"],
          example: {
            target: "I brought cheese rolls.",
            translation: "Traje panes de queso."
          }
        },
        {
          term: "share it",
          explanation:
            "Compártelo o compártalo. El inglés no cambia por tú, usted o vos.",
          literal: "compartirlo",
          useWhen:
            "Para pedir o prometer que un enlace, archivo, foto o dato circule.",
          avoidWhen:
            "Buscar una forma especial para vos. La relación se oye en el tono, no en el verbo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["post it", "send it", "pass it along", "forward it"],
          example: {
            target: "I'll share it with context.",
            translation: "Lo comparto con contexto."
          }
        },
        {
          term: "random message",
          explanation:
            "Un mensaje suelto, sin contexto, que aparece en un chat y puede confundir.",
          literal: "mensaje aleatorio",
          useWhen:
            "Cuando quiere explicar por qué va a acompañar el enlace con una nota.",
          avoidWhen:
            "Traducir suelto como loose en este caso. “Loose message” no es la frase idiomática.",
          register: "cotidiano",
          region: "Inglés universal.",
          related: ["context", "note", "thread", "explanation"],
          example: {
            target: "It doesn't look like a random message.",
            translation: "No parece un mensaje suelto."
          }
        }
      ],
      note:
        "Share traduce compartir cuando se trata de fotos, comida, enlaces o crédito. Lo que no traduce es el sustantivo colombiano “un compartir.” Para eso usted escoge get-together si es una reunión sencilla, potluck si cada persona lleva comida, o gathering si quiere sonar más neutral. “A sharing” delata traducción literal.",
      culture: [
        {
          label: "Get-together resuelve mucho",
          body:
            "Cuando no sabe si decir party, meeting o potluck, get-together suele cubrir una reunión informal y pequeña. No exagera la escena y por eso funciona bien para muchos compartir de oficina o escuela."
        },
        {
          label: "Share no siempre implica partir en partes iguales",
          body:
            "“Share some food” puede significar poner comida para todos, no medir porciones idénticas. Igual que en español, el objeto y la escena definen cuánto reparto real hay."
        },
        {
          label: "Un enlace sin nota parece ruido",
          body:
            "En grupos escolares y laborales, compartir un link sin contexto puede crear más trabajo que ayuda. “I'll share it with context” suena cuidadoso porque anticipa la confusión del grupo."
        }
      ],
      pitfalls: [
        {
          mistake: "“We have a sharing after the meeting.”",
          whyItFails:
            "Sharing no nombra normalmente una reunión en inglés. Suena a traducción literal del sustantivo colombiano.",
          sayInstead: "We have a small get-together after the meeting."
        },
        {
          mistake: "“Share the link in loose.”",
          whyItFails:
            "Loose no funciona así. Para mensaje suelto, el inglés natural es random message o a message with no context.",
          sayInstead: "Share the link with context."
        },
        {
          mistake: "“Can you share to me the photos?”",
          whyItFails:
            "El patrón inglés es share something with someone, o simplemente share something si el lugar ya está claro.",
          sayInstead: "Can you share the photos with me?"
        }
      ],
      variations: [
        {
          form: "Can you share the photos in the group?",
          register: "cálido informal",
          region: "Inglés universal",
          whenToUse: "Para pedir que alguien publique fotos en un chat grupal."
        },
        {
          form: "I'll share the link with context.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Para prometer que el enlace irá acompañado de una explicación."
        },
        {
          form: "Let's have a small get-together after the meeting.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Para proponer algo parecido a un compartir sin traducirlo literalmente."
        },
        {
          form: "Leave some food so everyone can share.",
          register: "cálido práctico",
          region: "Inglés universal",
          whenToUse: "Para asegurar que la comida quede disponible para el grupo."
        }
      ],
      prompt: "Mariana says “after the get-together.” ¿Por qué no dice “after the sharing”?",
      choices: [
        "Because get-together names the small informal event.",
        "Because sharing only means dividing money equally.",
        "Because share cannot describe digital photos."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa share en sentido digital?",
          choices: [
            "Share the link with the parents.",
            "Let's have a get-together Friday.",
            "Leave cheese rolls for everyone."
          ],
          answer: 0,
          tests: "share para enlaces y objetos digitales"
        },
        {
          prompt: "¿Cuál traduce mejor “un compartir” en esta escena?",
          choices: [
            "A small get-together after the meeting.",
            "A formal hearing without any food.",
            "A personal message with no context."
          ],
          answer: 0,
          tests: "get-together como equivalente funcional del evento"
        },
        {
          prompt: "¿Qué añade “with context” a “I'll share it”?",
          choices: [
            "Que borrará el link más tarde.",
            "Que explicará por qué importa.",
            "Que sólo compartirá comida."
          ],
          answer: 1,
          tests: "with context as useful explanation"
        },
        {
          prompt: "¿Cuál patrón de share es natural en inglés?",
          choices: [
            "Share to me the photos.",
            "Share me with the photos.",
            "Share the photos with me."
          ],
          answer: 2,
          tests: "share something with someone"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/29-developing-sending-and-sharing.js");
