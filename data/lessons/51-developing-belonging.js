/*
 * Lesson block: developing / belonging.
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
    id: "preguntar-que-incluye-la-tarifa-en-monteria",
    level: "Developing · Belonging",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "civic-and-services",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "incluir",
    review: "pending",
    es: {
      title: "Asking what the rate includes in Montería",
      situation:
        "You are in Montería booking a simple room near the river. The rate looks good, but you need to know whether it includes breakfast, air conditioning, taxes, and transportation from the bus terminal.",
      setting: {
        who: "Sandra runs reception at a small hotel used by families and salespeople. Oliver has arrived after a long bus ride and wants the real price before handing over his card.",
        what: "A hotel counter conversation about what a rate includes, what is included already, and what has an extra charge.",
        when: "Late afternoon, hot enough that air conditioning is not a luxury detail.",
        where: "Montería, in a small hotel near the Sinú river, with ceiling fans in the lobby and a printed price sheet at the desk.",
        why: "Because incluir is most useful when a price or plan covers something. It also carries the same y pattern as construir: incluye, incluyo, incluyó, incluyeron."
      },
      address: {
        form: "usted",
        who: "Sandra and Oliver use usted both ways because this is a clear service-counter exchange.",
        why: "Usted lets Oliver ask direct price questions without sounding suspicious or rude. Colombian hotel Spanish can be warm and still formal.",
        ifYouSwitch:
          "Tú would sound too familiar for a first exchange at reception. Vos would be understood in some regions, but it is not the safe hotel-counter choice here."
      },
      dialogue: [
        {
          speaker: "Oliver",
          target: "Buenas, ¿la tarifa incluye desayuno o se paga aparte?",
          translation: "Hi, does the rate include breakfast or is it paid separately?",
          pronunciation: "BWEH-nas, la tah-REE-fah een-KLOO-yeh deh-sah-YOO-noh o seh PAH-gah ah-PAR-teh",
          literal: "Greetings, the rate includes breakfast or itself pays separately?",
          why: "The useful hotel question is ¿incluye...? The thing that may contain breakfast is la tarifa, so the verb is singular: incluye."
        },
        {
          speaker: "Sandra",
          target: "Sí señor, el desayuno está incluido y los impuestos también.",
          translation: "Yes, sir, breakfast is included and taxes are too.",
          pronunciation: "see seh-NYOR, el deh-sah-YOO-noh es-TAH een-kloo-EE-doh ee los eem-PWES-tos tam-BYEN",
          literal: "Yes sir, the breakfast is included and the taxes also.",
          why: "Está incluido describes the result: breakfast belongs inside the price already. Taxes are plural, but the adjective agrees with desayuno in the first phrase."
        },
        {
          speaker: "Oliver",
          target: "¿Y eso incluye el aire acondicionado toda la noche?",
          translation: "And does that include air conditioning all night?",
          pronunciation: "ee EH-soh een-KLOO-yeh el AI-reh ah-kon-dee-syoh-NAH-doh TOH-dah la NOH-cheh",
          literal: "And that includes the air conditioned all the night?",
          why: "Eso is singular, so incluye stays singular. The question is not whether the room has air; it is whether the posted price covers using it."
        },
        {
          speaker: "Sandra",
          target: "Lo incluye hasta las seis de la mañana; después hay recargo.",
          translation: "It includes it until six in the morning; after that there is an extra charge.",
          pronunciation: "loh een-KLOO-yeh AS-tah las seis deh la mah-NYAH-nah; des-PWES ai rreh-KAR-goh",
          literal: "It includes it until six of the morning; after there-is surcharge.",
          why: "Lo incluye repeats the object with a pronoun because the air conditioning is already in the conversation. The limit matters as much as the inclusion."
        },
        {
          speaker: "Oliver",
          target: "Yo incluyo esa información en el recibo para no confundirme.",
          translation: "I'll include that information on the receipt so I don't get confused.",
          pronunciation: "yo een-KLOO-yoh EH-sah een-for-mah-SYON en el rreh-SEE-boh PAH-rah no kon-foon-DEER-meh",
          literal: "I include that information in the receipt to not confuse-myself.",
          why: "Incluyo shows the y insertion in the yo form. Incluir behaves like construir: the y appears before strong endings."
        },
        {
          speaker: "Sandra",
          target: "Claro. También incluimos una nota: el transporte no está incluido.",
          translation: "Of course. We'll also include a note: transport is not included.",
          pronunciation: "KLAH-roh. tam-BYEN een-kloo-EE-mos OO-nah NOH-tah: el trans-POR-teh no es-TAH een-kloo-EE-doh",
          literal: "Of course. Also we-include a note: the transport is not included.",
          why: "Incluimos has no y, because the ending begins with i. The final no está incluido is the price truth a traveler needs before agreeing."
        }
      ],
      vocabulary: [
        {
          term: "incluir",
          explanation:
            "To include or cover something inside a price, plan, list or explanation.",
          literal: "to include",
          useWhen:
            "A rate covers breakfast, a plan covers transport, a message adds a detail, or a list contains a person.",
          avoidWhen:
            "You mean someone feels part of a group. That may use sentirse parte de more naturally than incluir.",
          register: "neutral",
          region: "General Spanish and very common in Colombian service talk.",
          related: ["cubrir", "contener", "agregar", "excluir"],
          example: { target: "¿La tarifa incluye desayuno?", translation: "Does the rate include breakfast?" }
        },
        {
          term: "incluye",
          explanation:
            "It includes. The y appears before this strong ending, just as in construye.",
          literal: "it includes",
          useWhen:
            "A singular price, package, receipt, service or plan covers something.",
          avoidWhen:
            "The subject is plural. Then use incluyen: las tarifas incluyen impuestos.",
          register: "neutral",
          region: "General Spanish.",
          related: ["incluyo", "incluyen", "incluyó", "construye"],
          example: { target: "Eso incluye el aire acondicionado.", translation: "That includes air conditioning." }
        },
        {
          term: "está incluido",
          explanation:
            "It is included already. This is the phrase travelers need when checking what the price covers.",
          literal: "is included",
          useWhen:
            "Breakfast, tax, service, luggage or access belongs inside the quoted price.",
          avoidWhen:
            "The item is an extra charge. Then no está incluido or se paga aparte is clearer.",
          register: "neutral",
          region: "General Spanish.",
          related: ["todo incluido", "se paga aparte", "viene con", "cubre"],
          example: { target: "El desayuno está incluido.", translation: "Breakfast is included." }
        },
        {
          term: "todo incluido",
          explanation:
            "All inclusive: the price covers the main expected items, though the exact limits still matter.",
          literal: "everything included",
          useWhen:
            "Hotel, tour or package language claims meals, services or activities are covered.",
          avoidWhen:
            "You need exact terms. Todo incluido can still hide limits, hours or premium extras.",
          register: "service / travel",
          region: "General Spanish.",
          related: ["paquete", "tarifa", "incluido", "recargo"],
          example: { target: "El plan no es todo incluido.", translation: "The plan is not all inclusive." }
        },
        {
          term: "se paga aparte",
          explanation:
            "It is paid separately. A practical warning that something is outside the price.",
          literal: "it pays itself separately",
          useWhen:
            "Breakfast, transport, laundry, parking or insurance has an extra cost.",
          avoidWhen:
            "The price really covers it. Then está incluido is the phrase you want.",
          register: "neutral service",
          region: "General Colombian Spanish.",
          related: ["no está incluido", "recargo", "adicional", "por separado"],
          example: { target: "El transporte se paga aparte.", translation: "Transport is paid separately." }
        },
        {
          term: "incluyo",
          explanation:
            "I include. The yo form inserts y: incluyo, not incluo.",
          literal: "I include",
          useWhen:
            "You add a detail, person, item or condition yourself.",
          avoidWhen:
            "You are using the past tense. I included is incluí, without y but with an accent.",
          register: "neutral",
          region: "General Spanish.",
          related: ["incluye", "incluí", "incluyendo", "incluyeron"],
          example: { target: "Yo incluyo esa información.", translation: "I'll include that information." }
        },
        {
          term: "recargo",
          explanation:
            "An extra charge or surcharge added on top of the base price.",
          literal: "re-charge",
          useWhen:
            "A service costs more after a certain hour, weight, distance or condition.",
          avoidWhen:
            "The amount is a normal listed price rather than an additional charge.",
          register: "neutral service",
          region: "General Spanish.",
          related: ["cargo adicional", "costo extra", "tarifa", "impuestos"],
          example: { target: "Después hay recargo.", translation: "After that there is an extra charge." }
        }
      ],
      note:
        "Incluir is concrete before it is abstract. The hotel question ¿eso incluye...? is more useful than a philosophical sentence about inclusion. Grammatically, it belongs with the -uir verbs already seen in construir: incluyo, incluye, incluyendo, incluyó and incluyeron all carry y before a strong ending. But incluimos and incluí do not. In service Spanish, always pair the verb with the boundary: what is included, what is paid separately and when the extra charge begins.",
      culture: [
        {
          label: "The real price is the included price",
          body:
            "In a Colombian hotel, a quoted rate may or may not include breakfast, tax, air conditioning, parking or transport. Asking ¿está incluido? is not rude; it is normal adult clarity. It prevents a warm conversation at reception from turning into surprise charges at checkout."
        },
        {
          label: "Todo incluido still has edges",
          body:
            "Todo incluido sounds absolute, but travel packages everywhere have limits: hours, brands, routes, luggage, tips, premium options. A good traveler hears the phrase and still asks what exactly incluye and what se paga aparte."
        },
        {
          label: "The y is a pattern, not decoration",
          body:
            "Incluye and incluyo share the same sound solution as construye and construyo. Spanish inserts y to keep the vowels from collapsing. Seeing the family together makes the forms less arbitrary and easier to produce at a counter."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “¿la tarifa incluie desayuno?”",
          whyItFails:
            "The spelling and sound need y: incluye. Incluir follows the same pattern as construir in these present forms.",
          sayInstead: "¿La tarifa incluye desayuno?"
        },
        {
          mistake: "Assuming “todo incluido” literally includes every possible extra",
          whyItFails:
            "The phrase names a package, not a legal guarantee that every detail is free. Hours, transport or premium services may still be outside the price.",
          sayInstead: "¿Eso incluye el transporte?"
        },
        {
          mistake: "Using “incluido” when the item is actually extra",
          whyItFails:
            "If the service has a separate charge, saying está incluido gives the wrong practical information. Colombian service talk states extras plainly.",
          sayInstead: "El transporte se paga aparte."
        }
      ],
      variations: [
        {
          form: "¿Eso incluye el domicilio?",
          register: "polite practical",
          region: "General Colombian",
          whenToUse: "You are checking whether delivery is covered by the quoted price."
        },
        {
          form: "El desayuno está incluido.",
          register: "neutral service",
          region: "General Spanish",
          whenToUse: "The item is already inside the rate or package."
        },
        {
          form: "Yo incluyo esa nota en el recibo.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You personally add a detail so the terms stay clear."
        },
        {
          form: "El desayuno va incluido; el domicilio se cobra aparte.",
          register: "courteous",
          region: "General Colombian",
          whenToUse: "Splitting what is in the price from what is not. Se cobra aparte is the exact phrase a counter will use."
        }
      ],
      prompt: "Oliver asks “¿la tarifa incluye desayuno?” What is he checking?",
      choices: [
        "Whether breakfast is covered by the price.",
        "Whether breakfast belongs to the waiter.",
        "Whether breakfast excludes every guest."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses the correct y form of incluir?",
          choices: [
            "La tarifa incluye impuestos.",
            "La tarifa incluie impuestos.",
            "La tarifa inclue impuestos."
          ],
          answer: 0,
          tests: "incluye with y insertion"
        },
        {
          prompt: "Which question checks whether delivery is covered?",
          choices: [
            "¿Eso excluye el domicilio?",
            "¿Eso incluye el domicilio?",
            "¿Eso pertenece el domicilio?"
          ],
          answer: 1,
          tests: "incluir for what a price covers"
        },
        {
          prompt: "Which phrase says an item is outside the price?",
          choices: [
            "Está todo incluido.",
            "Viene en la tarifa.",
            "Se paga aparte."
          ],
          answer: 2,
          tests: "se paga aparte as not included"
        },
        {
          prompt: "Which yo form is correct at the hotel desk?",
          choices: [
            "Yo incluo la nota.",
            "Yo incluyo la nota.",
            "Yo incluye la nota."
          ],
          answer: 1,
          tests: "incluyo as the yo form"
        }
      ]
    },
    en: {
      title: "Preguntar qué incluye la tarifa en Houston",
      situation:
        "Usted está en Houston reservando una habitación sencilla. La tarifa parece buena, pero necesita preguntar en inglés si incluye desayuno, impuestos, aire acondicionado y transporte.",
      setting: {
        who: "Sandra atiende la recepción de un hotel pequeño. Oliver llega después de un viaje largo y necesita entender el precio real antes de entregar la tarjeta.",
        what: "Una conversación de recepción sobre qué incluye una tarifa, qué ya está incluido y qué tiene cargo adicional.",
        when: "Al final de la tarde, con cansancio de viaje y poca paciencia para costos sorpresa.",
        where: "Houston, en un hotel pequeño cerca de la estación, con una hoja de tarifas impresa sobre el mostrador.",
        why: "Porque include es la herramienta básica para preguntar qué cubre un precio. El inglés no tiene la y de incluye, pero sí exige claridad sobre included y extra."
      },
      address: {
        form: "mixed",
        who: "Sandra y Oliver usan you y fórmulas de recepción como does that include y could you add.",
        why: "El inglés no cambia de pronombre para sonar respetuoso. La cortesía está en la pregunta completa, please y el tono.",
        ifYouSwitch:
          "No hay usted que escoger. Si usa sir o madam demasiado, la recepción suena más rígida de lo necesario."
      },
      dialogue: [
        {
          speaker: "Oliver",
          target: "Hi, does the rate include breakfast, or is it extra?",
          translation: "Buenas, ¿la tarifa incluye desayuno o se paga aparte?",
          pronunciation: "jai, daz da reit in-KLUD BREK-fast, or iz it EKS-tra",
          literal: "Hola, ¿la tarifa incluye desayuno, o es extra?",
          why: "Does the rate include...? es la pregunta directa por cobertura de precio. Extra traduce muy bien se paga aparte en una recepción."
        },
        {
          speaker: "Sandra",
          target: "Yes, breakfast is included, and taxes are included too.",
          translation: "Sí, el desayuno está incluido y los impuestos también.",
          pronunciation: "yes, BREK-fast iz in-KLU-ded, and TAK-siz ar in-KLU-ded tu",
          literal: "Sí, el desayuno está incluido, y los impuestos están incluidos también.",
          why: "Included describe lo que ya queda dentro del precio. El inglés repite are included con taxes porque taxes es plural."
        },
        {
          speaker: "Oliver",
          target: "And does that include air conditioning all night?",
          translation: "¿Y eso incluye el aire acondicionado toda la noche?",
          pronunciation: "and daz dat in-KLUD er kon-DI-sho-ning ol nait",
          literal: "¿Y eso incluye aire acondicionado toda la noche?",
          why: "Does that include...? apunta al paquete entero. That representa la tarifa completa, no una cosa física."
        },
        {
          speaker: "Sandra",
          target: "It includes it until six in the morning; after that there's a surcharge.",
          translation: "Lo incluye hasta las seis de la mañana; después hay recargo.",
          pronunciation: "it in-KLUDZ it on-TIL siks in da MOR-ning; AF-ter dat derz a SER-charj",
          literal: "Lo incluye hasta las seis de la mañana; después hay un recargo.",
          why: "Includes it puede sonar repetido, pero es normal cuando se responde sobre un servicio ya mencionado. Surcharge es recargo."
        },
        {
          speaker: "Oliver",
          target: "I'll include that note on the receipt so I don't get confused.",
          translation: "Yo incluyo esa información en el recibo para no confundirme.",
          pronunciation: "ail in-KLUD dat nout on da ri-SIT sou ai dont get kon-FIUZD",
          literal: "Incluiré esa nota en el recibo para no confundirme.",
          why: "I'll include usa will porque Oliver decide agregar la nota ahora. No hay forma irregular como incluyo; el verbo inglés se mantiene estable."
        },
        {
          speaker: "Sandra",
          target: "Of course. We'll add: transport is not included.",
          translation: "Claro. También incluimos una nota: el transporte no está incluido.",
          pronunciation: "ov kors. uil ad: TRANS-port iz not in-KLU-ded",
          literal: "Por supuesto. Agregaremos: el transporte no está incluido.",
          why: "Not included es una frase esencial de términos y precios. Sandra usa add porque en inglés suena más natural que include a note en esta respuesta."
        }
      ],
      vocabulary: [
        {
          term: "include",
          explanation:
            "Incluir o cubrir dentro de un precio, plan, lista o explicación.",
          literal: "incluir",
          useWhen:
            "Una tarifa cubre desayuno, un plan cubre transporte o una lista contiene una persona.",
          avoidWhen:
            "Habla de pertenecer emocionalmente a un grupo. Ahí belong or feel part of puede ser más natural.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["cover", "contain", "add", "exclude"],
          example: { target: "Does the rate include breakfast?", translation: "¿La tarifa incluye desayuno?" }
        },
        {
          term: "does that include",
          explanation:
            "¿Eso incluye...? La pregunta útil para saber qué cubre el precio.",
          literal: "eso incluye",
          useWhen:
            "Quiere confirmar si un servicio, impuesto, comida o envío está dentro de lo acordado.",
          avoidWhen:
            "Ya sabe que es extra. Entonces pregunte how much extra is it?",
          register: "cortés práctico",
          region: "Inglés universal.",
          related: ["is that included", "does it cover", "is it extra", "what's included"],
          example: { target: "Does that include air conditioning?", translation: "¿Eso incluye aire acondicionado?" }
        },
        {
          term: "included",
          explanation:
            "Incluido. Algo ya está dentro del precio o paquete.",
          literal: "incluido",
          useWhen:
            "Para decir que desayuno, impuestos o servicio ya están dentro del precio.",
          avoidWhen:
            "El servicio cuesta más. Entonces diga not included or extra.",
          register: "neutro de servicio",
          region: "Inglés universal.",
          related: ["all-inclusive", "covered", "part of the price", "extra"],
          example: { target: "Breakfast is included.", translation: "El desayuno está incluido." }
        },
        {
          term: "all-inclusive",
          explanation:
            "Todo incluido. Muy común en lenguaje de hoteles y planes.",
          literal: "todo incluido",
          useWhen:
            "Un paquete cubre comidas, servicios o actividades principales.",
          avoidWhen:
            "Necesita los límites exactos. All-inclusive no siempre elimina todos los extras.",
          register: "de viaje / de servicio",
          region: "Inglés universal.",
          related: ["package", "rate", "included", "surcharge"],
          example: { target: "The plan is not all-inclusive.", translation: "El plan no es todo incluido." }
        },
        {
          term: "extra",
          explanation:
            "Adicional o se paga aparte. Palabra corta para algo fuera del precio.",
          literal: "extra",
          useWhen:
            "Desayuno, transporte, equipaje o parqueadero cuesta más.",
          avoidWhen:
            "El precio ya lo cubre. Entonces included es la palabra correcta.",
          register: "neutro de servicio",
          region: "Inglés universal.",
          related: ["not included", "separate charge", "surcharge", "additional"],
          example: { target: "Transport is extra.", translation: "El transporte se paga aparte." }
        },
        {
          term: "I'll include",
          explanation:
            "Incluiré o voy a incluir. Sirve cuando usted decide agregar un dato.",
          literal: "incluiré",
          useWhen:
            "Usted agrega una nota, una persona, una condición o un detalle.",
          avoidWhen:
            "Ya lo agregó en el pasado. Entonces diga I included.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I include", "I included", "we'll include", "add"],
          example: { target: "I'll include that note.", translation: "Yo incluyo esa nota." }
        },
        {
          term: "surcharge",
          explanation:
            "Recargo o cargo adicional encima del precio base.",
          literal: "sobrecargo",
          useWhen:
            "Un servicio cuesta más por hora, distancia, peso o condición.",
          avoidWhen:
            "Sólo habla del precio normal. Surcharge siempre sugiere un extra añadido.",
          register: "neutro de servicio",
          region: "Inglés universal.",
          related: ["extra charge", "fee", "rate", "tax"],
          example: { target: "After that there's a surcharge.", translation: "Después hay recargo." }
        }
      ],
      note:
        "Include es una de las preguntas más útiles en viajes: does that include breakfast, taxes, delivery, luggage? Para responder, included y not included hacen el trabajo. El inglés no tiene la dificultad de incluye o incluyo con y, pero sí separa include de add: sometimes we'll add a note suena más natural que we'll include a note, aunque la idea sea parecida.",
      culture: [
        {
          label: "La tarifa real es la tarifa con extras",
          body:
            "En inglés de hoteles, rate puede verse claro y aun así dejar preguntas. Does that include taxes? Is breakfast included? Is transport extra? son preguntas normales, no acusaciones. Un viajero cuidadoso pregunta antes de pagar."
        },
        {
          label: "All-inclusive no elimina todas las preguntas",
          body:
            "All-inclusive suena absoluto, pero los paquetes tienen límites. Puede haber horarios, marcas, rutas o servicios premium. Igual que todo incluido, la frase invita a preguntar what's included exactamente."
        },
        {
          label: "Extra es una palabra poderosa",
          body:
            "Is it extra? es corta y muy útil. Sirve para desayuno, equipaje, entrega, parqueadero o aire acondicionado. En una recepción, suele sonar más natural que una frase larga sobre separate payment."
        }
      ],
      pitfalls: [
        {
          mistake: "“Does the rate includes breakfast?”",
          whyItFails:
            "Después de does, el verbo principal queda en forma base: include, no includes.",
          sayInstead: "Does the rate include breakfast?"
        },
        {
          mistake: "“Breakfast is include.”",
          whyItFails:
            "Como adjetivo o participio necesita included. Include solo es el verbo base.",
          sayInstead: "Breakfast is included."
        },
        {
          mistake: "“Everything is all included” como frase fija",
          whyItFails:
            "La expresión de paquete es all-inclusive, o puede decir everything is included. Mezclar las dos suena torpe.",
          sayInstead: "Everything is included."
        }
      ],
      variations: [
        {
          form: "Does that include delivery?",
          register: "cortés práctico",
          region: "Inglés universal",
          whenToUse: "Quiere saber si el domicilio está cubierto por el precio."
        },
        {
          form: "Breakfast is included.",
          register: "neutro de servicio",
          region: "Inglés universal",
          whenToUse: "El desayuno ya está dentro de la tarifa."
        },
        {
          form: "I'll include that note on the receipt.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Usted agrega un detalle para que los términos queden claros."
        },
        {
          form: "Breakfast is included by default; however, the delivery fee is charged separately.",
          register: "cortés",
          region: "Inglés universal",
          whenToUse: "Para separar lo incluido de lo que se cobra aparte. “However” marca el giro, y la pasiva evita señalar a quién cobra."
        }
      ],
      prompt: "Oliver asks “does the rate include breakfast?” ¿Qué está revisando?",
      choices: [
        "Si el desayuno está cubierto por el precio.",
        "Si el desayuno pertenece al camarero.",
        "Si el desayuno excluye a los huéspedes."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál pregunta usa bien include después de does?",
          choices: [
            "Does the rate include taxes?",
            "Does the rate includes taxes?",
            "Does the rate included taxes?"
          ],
          answer: 0,
          tests: "base verb after does"
        },
        {
          prompt: "¿Cuál pregunta revisa si el domicilio está cubierto?",
          choices: [
            "Does that exclude delivery?",
            "Does that include delivery?",
            "Does that belong delivery?"
          ],
          answer: 1,
          tests: "include for what the price covers"
        },
        {
          prompt: "¿Cuál frase dice que algo está fuera del precio?",
          choices: [
            "It's all included.",
            "It's in the rate.",
            "It's an extra charge."
          ],
          answer: 2,
          tests: "extra as se paga aparte"
        },
        {
          prompt: "¿Cuál frase usa bien included como participio?",
          choices: [
            "Breakfast is include.",
            "Breakfast is included.",
            "Breakfast is including."
          ],
          answer: 1,
          tests: "included after be"
        }
      ]
    }
  },
  {
    id: "excluir-a-alguien-del-chat-en-buenaventura",
    level: "Developing · Belonging",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "excluir",
    review: "pending",
    es: {
      title: "Left out of the team chat in Buenaventura",
      situation:
        "You are in Buenaventura helping organize a neighborhood tournament. One player was left out of the team chat, and you have to distinguish between a rule that excludes someone and an invitation that simply never arrived.",
      setting: {
        who: "Maira coordinates a neighborhood soccer team. Leo helps manage the player list and has to explain why one player missed the group chat without making the situation sound colder than it is.",
        what: "A careful conversation about formal exclusions, accidental omissions and the more everyday Colombian ways to say someone was left out.",
        when: "Early evening after practice, while the players are still comparing messages on their phones.",
        where: "Buenaventura, beside a covered court near the port, with rain threatening and the team chat becoming the real noticeboard.",
        why: "Because excluir is colder and more formal than everyday speech. It fits rules and decisions; people often say dejar por fuera or no me invitaron socially."
      },
      address: {
        form: "tú",
        who: "Maira and Leo are teammates of similar age, so they use tú while handling a delicate social problem.",
        why: "Tú keeps the repair of the situation peer-to-peer. The caution is in the wording, not the pronoun.",
        ifYouSwitch:
          "Usted would make the conversation sound like a disciplinary meeting. Vos would not be the safe neutral choice for this Buenaventura team scene."
      },
      dialogue: [
        {
          speaker: "Leo",
          target: "Maira, creo que excluimos a Javi del chat sin darnos cuenta.",
          translation: "Maira, I think we excluded Javi from the chat without realizing it.",
          pronunciation: "MAI-rah, KREH-oh keh eks-KLOO-ee-mos ah HAH-bee del chat seen DAR-nos KWEN-tah",
          literal: "Maira, I-believe that we-exclude Javi from-the chat without giving-ourselves account.",
          why: "Excluimos has no y because the ending begins with i. The verb is strong, so Leo softens it with sin darnos cuenta."
        },
        {
          speaker: "Maira",
          target: "¿Lo excluimos por regla o lo dejamos por fuera por error?",
          translation: "Did we exclude him by rule or leave him out by mistake?",
          pronunciation: "loh eks-KLOO-ee-mos por RREH-glah o loh deh-HAH-mos por FWEH-rah por eh-RROR",
          literal: "Him we-exclude by rule or him we-left by outside by mistake?",
          why: "This is the honest split: excluir sounds like a rule or decision; dejar por fuera is the everyday phrase for being left out."
        },
        {
          speaker: "Leo",
          target: "Por error. La regla sólo excluye a los que no pagaron la inscripción.",
          translation: "By mistake. The rule only excludes those who didn't pay the registration fee.",
          pronunciation: "por eh-RROR. la RREH-glah SOH-loh eks-KLOO-yeh ah los keh no pah-GAH-ron la eens-kreep-SYON",
          literal: "By error. The rule only excludes those who did not pay the registration.",
          why: "Excluye shows the y insertion before the strong ending. A rule can exclude; a missed chat invite is usually better described more softly."
        },
        {
          speaker: "Maira",
          target: "Entonces no digas que lo excluyeron; suena a castigo.",
          translation: "Then don't say they excluded him; it sounds like punishment.",
          pronunciation: "en-TON-ses no DEE-gas keh loh eks-kloo-YEH-ron; SWEH-nah ah kas-TEE-goh",
          literal: "Then do-not say that him they-excluded; it-sounds to punishment.",
          why: "Excluyeron carries the y in the past plural. The grammar matters, but so does the register: the word can sound accusatory."
        },
        {
          speaker: "Leo",
          target: "Listo, le digo que no lo invitamos al chat y ya lo agregamos.",
          translation: "Okay, I'll tell him we didn't invite him to the chat and we're adding him now.",
          pronunciation: "LEES-toh, leh DEE-goh keh no loh een-bee-TAH-mos al chat ee yah loh ah-greh-GAH-mos",
          literal: "Ready, to-him I-say that not him we-invited to-the chat and now him we-add.",
          why: "No lo invitamos is the social truth without the institutional chill of excluir. It names the mistake and the fix."
        },
        {
          speaker: "Maira",
          target: "Eso. Excluyo del equipo sólo cuando hay una razón seria.",
          translation: "Exactly. I exclude someone from the team only when there is a serious reason.",
          pronunciation: "EH-soh. eks-KLOO-yoh del eh-KEE-poh SOH-loh KWAN-doh ai OO-nah rrah-SON SEH-ryah",
          literal: "That. I-exclude from-the team only when there-is a reason serious.",
          why: "Excluyo is the yo form with y. Maira reserves it for formal decisions, which is exactly how the word usually behaves."
        }
      ],
      vocabulary: [
        {
          term: "excluir",
          explanation:
            "To exclude someone or something, usually by rule, condition or formal decision.",
          literal: "to exclude",
          useWhen:
            "Terms, requirements, lists, rules or committees leave someone or something outside.",
          avoidWhen:
            "You only mean a friend was not invited. Colombians often say no me invitaron or me dejaron por fuera.",
          register: "formal / cold",
          region: "General Spanish; in Colombia it can sound institutional or severe.",
          related: ["incluir", "dejar por fuera", "rechazar", "sacar"],
          example: { target: "La regla excluye a los que no pagaron.", translation: "The rule excludes those who didn't pay." }
        },
        {
          term: "excluye",
          explanation:
            "It excludes. The y appears before the strong ending, like incluye and construye.",
          literal: "it excludes",
          useWhen:
            "A singular rule, price, policy or condition leaves something out.",
          avoidWhen:
            "You are describing an accidental omission. Then dejar por fuera may sound more accurate.",
          register: "formal practical",
          region: "General Spanish.",
          related: ["excluyo", "excluyen", "excluyó", "incluye"],
          example: { target: "La regla excluye a los morosos.", translation: "The rule excludes people who owe money." }
        },
        {
          term: "excluyo",
          explanation:
            "I exclude. The yo form inserts y: excluyo, not excluo.",
          literal: "I exclude",
          useWhen:
            "You personally make a formal decision to leave someone or something out.",
          avoidWhen:
            "You are apologizing for forgetting someone. Excluyo sounds too deliberate there.",
          register: "formal direct",
          region: "General Spanish.",
          related: ["incluyo", "excluí", "excluyendo", "excluyeron"],
          example: { target: "Excluyo sólo con una razón seria.", translation: "I exclude only with a serious reason." }
        },
        {
          term: "excluyeron",
          explanation:
            "They excluded. The past plural carries y, like incluyeron and construyeron.",
          literal: "they excluded",
          useWhen:
            "A group or decision-making body formally left someone out.",
          avoidWhen:
            "No one made a formal decision. Then the word may overstate a simple mistake.",
          register: "formal / accusatory",
          region: "General Spanish.",
          related: ["incluyeron", "construyeron", "dejaron por fuera", "rechazaron"],
          example: { target: "No digas que lo excluyeron.", translation: "Don't say they excluded him." }
        },
        {
          term: "dejar por fuera",
          explanation:
            "To leave someone or something out, often the natural everyday alternative to excluir.",
          literal: "to leave outside",
          useWhen:
            "Someone missed an invite, a name was omitted, or a detail did not make it into a plan.",
          avoidWhen:
            "The exclusion is an official rule or policy. Then excluir is more precise.",
          register: "neutral conversational",
          region: "Very common in Colombia.",
          related: ["excluir", "olvidar", "no invitar", "quedar por fuera"],
          example: { target: "Lo dejamos por fuera por error.", translation: "We left him out by mistake." }
        },
        {
          term: "no me invitaron",
          explanation:
            "They didn't invite me. The everyday social way to say you were left out of a plan.",
          literal: "they did not invite me",
          useWhen:
            "A party, chat, plan or outing happened without you being asked.",
          avoidWhen:
            "You need to quote a rule or official decision. Then no me invitaron may sound too personal.",
          register: "neutral conversational",
          region: "General Colombian Spanish.",
          related: ["me dejaron por fuera", "no me avisaron", "quedé por fuera", "excluir"],
          example: { target: "No me invitaron al chat.", translation: "They didn't invite me to the chat." }
        },
        {
          term: "suena a castigo",
          explanation:
            "It sounds like punishment. A useful phrase for judging the tone of a word.",
          literal: "it sounds to punishment",
          useWhen:
            "A word is technically possible but socially too harsh for the situation.",
          avoidWhen:
            "There really was a disciplinary decision. Then the stronger word may be fair.",
          register: "neutral conversational",
          region: "General Spanish.",
          related: ["suena fuerte", "suena frío", "suena formal", "suena injusto"],
          example: { target: "Excluyeron suena a castigo.", translation: "Excluded sounds like punishment." }
        }
      ],
      note:
        "Excluir is the coldest verb in this block. It is useful for rules, requirements, terms and official choices: la regla excluye, el precio excluye, el comité excluyó. In daily social life, Colombians often choose softer or more accurate phrases: me dejaron por fuera, no me invitaron, no me avisaron. The grammar mirrors incluir: excluyo, excluye, excluyendo, excluyó, excluyeron carry y; excluimos and excluí do not.",
      culture: [
        {
          label: "Being left out is not always being excluded",
          body:
            "If someone misses a team chat, calling it excluir can make an accident sound like punishment. Colombian Spanish has ordinary social language for this: dejar por fuera, no invitar, no avisar. Those phrases keep the door open for an apology and a quick correction."
        },
        {
          label: "Rules exclude; friends forget",
          body:
            "A tournament rule can exclude players who have not paid. That is clear and impersonal. A friend who forgot to add Javi to the chat did not necessarily exclude him in that formal sense. Good Spanish chooses the register that matches the social reality."
        },
        {
          label: "The y pattern repeats",
          body:
            "Excluye and excluyo work like incluye and incluyo. The sound pattern is shared across -uir verbs, so the lesson is not one isolated spelling fact. Once the ear accepts the y, excluyeron and incluyendo feel less surprising."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “excluir” for every missed invitation",
          whyItFails:
            "Excluir can sound formal, cold or deliberate. If a friend simply forgot to add you, no me invitaron or me dejaron por fuera is usually more natural.",
          sayInstead: "Me dejaron por fuera del chat."
        },
        {
          mistake: "Writing “la regla exclue”",
          whyItFails:
            "The present form needs y: excluye. It follows the same pattern as incluye and construye.",
          sayInstead: "La regla excluye a los que no pagaron."
        },
        {
          mistake: "Saying “excluyo” when you mean an accidental omission",
          whyItFails:
            "Excluyo sounds like a deliberate formal decision. For a mistake, diga que alguien quedó por fuera or that you forgot to add them.",
          sayInstead: "Lo dejamos por fuera por error."
        }
      ],
      variations: [
        {
          form: "La regla excluye a los que no pagaron.",
          register: "formal practical",
          region: "General Spanish",
          whenToUse: "A rule or condition officially leaves people out."
        },
        {
          form: "Me dejaron por fuera del chat.",
          register: "neutral conversational",
          region: "Very common in Colombia",
          whenToUse: "You were left out socially and do not want to sound legalistic."
        },
        {
          form: "No me invitaron al plan.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "The plain social fact is that nobody invited you."
        }
      ],
      prompt: "Maira asks whether Javi was excluded by rule or left out by mistake. What distinction matters?",
      choices: [
        "A formal exclusion versus an accidental omission.",
        "An included breakfast versus an included tax.",
        "A legal owner versus an emotional teammate."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses the correct y form of excluir?",
          choices: [
            "La regla exclue al jugador.",
            "La regla excluye al jugador.",
            "La regla excluie al jugador."
          ],
          answer: 1,
          tests: "excluye with y insertion"
        },
        {
          prompt: "Which phrase sounds natural for an accidental chat omission?",
          choices: [
            "Me dejaron por fuera del chat.",
            "Me pertenecieron por fuera del chat.",
            "Me incluyeron por fuera del chat."
          ],
          answer: 0,
          tests: "dejar por fuera for everyday exclusion"
        },
        {
          prompt: "Which past plural form is correct?",
          choices: [
            "Lo excluieron del equipo.",
            "Lo excluyeron del equipo.",
            "Lo excluen del equipo."
          ],
          answer: 1,
          tests: "excluyeron as past plural"
        },
        {
          prompt: "Which phrase names the social fact without sounding formal?",
          choices: [
            "No me incluyeron el precio.",
            "No me pertenecieron al grupo.",
            "No me invitaron al plan."
          ],
          answer: 2,
          tests: "no me invitaron as social left-out language"
        }
      ]
    },
    en: {
      title: "Quedar por fuera del chat en Manchester",
      situation:
        "Usted está en Manchester ayudando a organizar un equipo barrial. Un jugador quedó por fuera del chat y debe explicar en inglés la diferencia entre una exclusión formal y una invitación que no llegó.",
      setting: {
        who: "Maira coordina un equipo de barrio. Leo ayuda con la lista de jugadores y necesita explicar por qué un jugador no entró al chat sin hacer sonar la situación más fría de lo que es.",
        what: "Una conversación cuidadosa sobre exclusiones formales, omisiones accidentales y maneras cotidianas de decir que alguien quedó por fuera.",
        when: "Al comienzo de la noche, después del entrenamiento, mientras los jugadores comparan mensajes en sus celulares.",
        where: "Manchester, junto a una cancha cubierta de barrio, con lluvia afuera y el chat del equipo funcionando como cartelera real.",
        why: "Porque exclude es tan frío como excluir. Sirve para reglas y decisiones, pero leave out o not invite suele sonar más humano para planes sociales."
      },
      address: {
        form: "mixed",
        who: "Maira y Leo usan you y nombres de pila como compañeros de equipo.",
        why: "El inglés no cambia el pronombre. La delicadeza está en elegir left out en vez de excluded cuando no hubo decisión formal.",
        ifYouSwitch:
          "No hay usted ni tú que escoger. Si vuelve la frase demasiado legal, una omisión pequeña puede sonar como sanción."
      },
      dialogue: [
        {
          speaker: "Leo",
          target: "Maira, I think we left Javi out of the chat by accident.",
          translation: "Maira, creo que dejamos a Javi por fuera del chat sin darnos cuenta.",
          pronunciation: "MAI-ra, ai think ui left JA-vi aut ov da chat bai AK-si-dent",
          literal: "Maira, creo que dejamos a Javi fuera del chat por accidente.",
          why: "Left out suena humano y corregible. Excluded aquí sonaría más formal, como si alguien hubiera tomado una decisión."
        },
        {
          speaker: "Maira",
          target: "Was he excluded by a rule, or just left out by mistake?",
          translation: "¿Lo excluyeron por una regla o lo dejaron por fuera por error?",
          pronunciation: "waz ji eks-KLU-ded bai a rul, or yost left aut bai mis-TEIK",
          literal: "¿Fue excluido por una regla, o sólo dejado fuera por error?",
          why: "Excluded by a rule sí encaja: una regla puede excluir. Left out by mistake cubre la omisión accidental."
        },
        {
          speaker: "Leo",
          target: "By mistake. The rule only excludes players who haven't paid.",
          translation: "Por error. La regla sólo excluye a los jugadores que no han pagado.",
          pronunciation: "bai mis-TEIK. da rul ON-li eks-KLUDZ PLEI-yers ju JA-vent peid",
          literal: "Por error. La regla sólo excluye jugadores que no han pagado.",
          why: "Excludes lleva -s porque the rule es tercera persona singular. En inglés, la trampa no es la y, sino esa -s."
        },
        {
          speaker: "Maira",
          target: "Then don't say he was excluded; it sounds like punishment.",
          translation: "Entonces no digas que lo excluyeron; suena a castigo.",
          pronunciation: "den dont sei ji waz eks-KLU-ded; it saundz laik PA-nish-ment",
          literal: "Entonces no digas que fue excluido; suena como castigo.",
          why: "Was excluded es pasivo y formal. Puede ser correcto, pero el tono acusa más de lo que la situación merece."
        },
        {
          speaker: "Leo",
          target: "Okay, I'll tell him we didn't invite him to the chat and we're adding him now.",
          translation: "Listo, le digo que no lo invitamos al chat y ya lo agregamos.",
          pronunciation: "ou-KEI, ail tel jim ui DI-dent in-VAIT jim tu da chat and uir A-ding jim nau",
          literal: "Bien, le diré que no lo invitamos al chat y lo estamos agregando ahora.",
          why: "“Didn't invite him” nombra el hecho social sin volverlo una exclusión formal. También deja espacio para disculparse."
        },
        {
          speaker: "Maira",
          target: "Exactly. I only exclude someone from the team for a serious reason.",
          translation: "Eso. Sólo excluyo a alguien del equipo por una razón seria.",
          pronunciation: "eg-ZAKT-li. ai ON-li eks-KLUD SAM-uan from da tim for a SI-ri-us RI-zon",
          literal: "Exactamente. Sólo excluyo a alguien del equipo por una razón seria.",
          why: "“I exclude” es directo y deliberado. Maira lo reserva para una decisión real, no para una invitación olvidada del chat."
        }
      ],
      vocabulary: [
        {
          term: "exclude",
          explanation:
            "Excluir a alguien o algo, normalmente por regla, condición o decisión formal.",
          literal: "excluir",
          useWhen:
            "Reglas, requisitos, listas o comités dejan a alguien afuera.",
          avoidWhen:
            "Sólo habla de un plan social al que no lo invitaron. Left out o didn't invite me suele sonar más natural.",
          register: "formal / cold",
          region: "Inglés universal.",
          related: ["include", "leave out", "reject", "remove"],
          example: { target: "The rule excludes players who haven't paid.", translation: "La regla excluye a jugadores que no han pagado." }
        },
        {
          term: "excludes",
          explanation:
            "Excluye. En inglés la marca importante es la -s de tercera persona.",
          literal: "excluye",
          useWhen:
            "Una regla, precio, política o condición singular deja algo por fuera.",
          avoidWhen:
            "El sujeto es plural. The rules exclude, sin -s adicional.",
          register: "formal práctico",
          region: "Inglés universal.",
          related: ["exclude", "excluded", "including", "includes"],
          example: { target: "The rule excludes late players.", translation: "La regla excluye a jugadores tarde." }
        },
        {
          term: "I exclude",
          explanation:
            "Yo excluyo. Suena deliberado y directo.",
          literal: "yo excluyo",
          useWhen:
            "Usted toma una decisión formal de dejar a alguien o algo afuera.",
          avoidWhen:
            "Se trata de un olvido. I left him out by mistake suena más honesto.",
          register: "formal directo",
          region: "Inglés universal.",
          related: ["I include", "I excluded", "I leave out", "I remove"],
          example: { target: "I only exclude someone for a serious reason.", translation: "Sólo excluyo a alguien por una razón seria." }
        },
        {
          term: "was excluded",
          explanation:
            "Fue excluido. Pasivo formal que puede sonar a sanción.",
          literal: "fue excluido",
          useWhen:
            "Una decisión o regla dejó a alguien oficialmente por fuera.",
          avoidWhen:
            "Quiere describir una omisión accidental en un chat o plan.",
          register: "formal / accusatory",
          region: "Inglés universal.",
          related: ["got left out", "was left out", "was rejected", "was removed"],
          example: { target: "Don't say he was excluded.", translation: "No digas que lo excluyeron." }
        },
        {
          term: "leave out",
          explanation:
            "Dejar por fuera. Más cotidiano y menos frío que exclude.",
          literal: "dejar afuera",
          useWhen:
            "Alguien no quedó en un chat, lista, invitación o explicación.",
          avoidWhen:
            "Hay una regla formal de exclusión. Entonces exclude puede ser más preciso.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["exclude", "forget", "not invite", "omit"],
          example: { target: "We left him out by mistake.", translation: "Lo dejamos por fuera por error." }
        },
        {
          term: "didn't invite me",
          explanation:
            "No me invitaron. La forma social directa para decir que quedó por fuera.",
          literal: "no me invitaron",
          useWhen:
            "Un plan, fiesta, chat o salida ocurrió sin que lo llamaran.",
          avoidWhen:
            "Habla de una regla escrita. Entonces didn't invite me suena demasiado personal.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["left me out", "forgot me", "didn't tell me", "excluded me"],
          example: { target: "They didn't invite me to the chat.", translation: "No me invitaron al chat." }
        },
        {
          term: "sounds like punishment",
          explanation:
            "Suena a castigo. Sirve para hablar del tono de una palabra.",
          literal: "suena como castigo",
          useWhen:
            "Una palabra técnicamente posible suena demasiado fuerte para el caso.",
          avoidWhen:
            "Sí hubo una sanción real. Entonces el tono fuerte puede ser exacto.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["sounds harsh", "sounds cold", "sounds formal", "sounds unfair"],
          example: { target: "Excluded sounds like punishment.", translation: "Excluido suena a castigo." }
        }
      ],
      note:
        "Exclude es útil, pero frío. The rule excludes players who haven't paid suena normal porque hay una regla. He was excluded from the chat puede sonar como sanción. Para planes y chats cotidianos, left out, didn't invite me y forgot to add him suelen ser más precisos y menos dramáticos. La decisión lingüística es social, no sólo de diccionario.",
      culture: [
        {
          label: "Left out deja espacio para arreglar",
          body:
            "Si alguien quedó fuera de un chat por error, left out by mistake permite disculparse y agregarlo. Excluded puede cerrar la puerta porque sugiere intención o castigo. En equipos pequeños, esa diferencia salva relaciones."
        },
        {
          label: "Las reglas sí excluyen",
          body:
            "Una regla de torneo, una edad mínima o una cuota pendiente pueden exclude sin sonar raros. Ahí la decisión no depende de amistad sino de términos. El problema es usar esa palabra fría para una invitación olvidada."
        },
        {
          label: "La pasiva suena oficial",
          body:
            "He was excluded tiene peso institucional en inglés. Puede aparecer en escuelas, clubes, trabajos o reportes. En una charla entre compañeros, he got left out often sounds closer to what happened."
        }
      ],
      pitfalls: [
        {
          mistake: "“They excluded me from the plan” para un olvido simple",
          whyItFails:
            "Puede sonar como una decisión deliberada. Si nadie lo invitó por descuido, left out o didn't invite me evita dramatizar.",
          sayInstead: "They left me out of the plan."
        },
        {
          mistake: "“The rule exclude late players.”",
          whyItFails:
            "The rule es singular, así que el presente necesita -s: excludes.",
          sayInstead: "The rule excludes late players."
        },
        {
          mistake: "“I was left outside the chat.”",
          whyItFails:
            "Es traducción literal de por fuera. En inglés social se dice left out, no left outside.",
          sayInstead: "I was left out of the chat."
        }
      ],
      variations: [
        {
          form: "The rule excludes players who haven't paid.",
          register: "formal práctico",
          region: "Inglés universal",
          whenToUse: "Una regla o condición deja gente oficialmente por fuera."
        },
        {
          form: "I was left out of the chat.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Usted quedó por fuera socialmente sin sonar legalista."
        },
        {
          form: "They didn't invite me to the plan.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "El hecho social simple es que nadie lo invitó."
        }
      ],
      prompt: "Maira contrasts “excluded by a rule” with “left out by mistake.” ¿Qué diferencia importa?",
      choices: [
        "Una exclusión formal frente a una omisión accidental.",
        "Un desayuno incluido frente a un impuesto incluido.",
        "Una propiedad legal frente a un sentimiento de equipo."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa bien excludes con sujeto singular?",
          choices: [
            "The rule exclude late players.",
            "The rule excludes late players.",
            "The rule excluding late players."
          ],
          answer: 1,
          tests: "excludes with third-person singular subject"
        },
        {
          prompt: "¿Cuál frase suena natural para una omisión accidental del chat?",
          choices: [
            "I was left out of the chat.",
            "I was belonged out of the chat.",
            "I was included out of the chat."
          ],
          answer: 0,
          tests: "left out for everyday social omission"
        },
        {
          prompt: "¿Cuál pasiva formal significa que fue excluido?",
          choices: [
            "He was exclude from the team.",
            "He was excluded from the team.",
            "He was excluding from the team."
          ],
          answer: 1,
          tests: "was excluded as passive form"
        },
        {
          prompt: "¿Cuál frase cuenta el hecho social sin sonar formal?",
          choices: [
            "They included me the price.",
            "They belonged me to the group.",
            "They didn't invite me to the plan."
          ],
          answer: 2,
          tests: "didn't invite me as social left-out language"
        }
      ]
    }
  },
  {
    id: "pertenecer-al-grupo-de-bici-en-arauca",
    level: "Developing · Belonging",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "work-and-employment",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "pertenecer",
    review: "pending",
    es: {
      title: "Belonging to the bike group in Arauca",
      situation:
        "You are in Arauca going out with a cycling group that meets on Sundays. You want to know whether you already belong to the group, or whether you simply feel part of it even though you are not registered yet.",
      setting: {
        who: "Nidia organizes a Sunday cycling group. Cam has joined three rides and wants to understand whether membership is formal, emotional or just a matter of being in the chat.",
        what: "A post-ride conversation about belonging to a group, feeling part of a team, and the formal flavor of pertenecer a.",
        when: "Sunday morning after the ride, when people are drinking water and checking the next route.",
        where: "Arauca, near a riverside meeting point where cyclists gather before heading out on flat roads.",
        why: "Because pertenecer almost always takes a, and its yo form is pertenezco. For feelings, Colombians often prefer sentirse parte de."
      },
      address: {
        form: "usted",
        who: "Nidia uses usted with Cam because she is the organizer and they do not know each other well yet; Cam mirrors it.",
        why: "Usted lets the question about membership stay respectful rather than needy. The warmth comes from invitation and explanation.",
        ifYouSwitch:
          "Tú may arrive after a few more rides, but starting with it would presume closeness. Vos would not be a neutral choice for this Arauca scene."
      },
      dialogue: [
        {
          speaker: "Cam",
          target: "Nidia, ¿yo ya pertenezco al grupo o tengo que inscribirme?",
          translation: "Nidia, do I belong to the group already or do I have to sign up?",
          pronunciation: "NEE-dyah, yo yah per-teh-NES-koh al GROO-poh o TEN-goh keh eens-kree-BEER-meh",
          literal: "Nidia, I already belong to-the group or I-have to sign-up?",
          why: "Pertenezco is the -zc- yo form, like conozco. The preposition a is not optional: pertenecer al grupo."
        },
        {
          speaker: "Nidia",
          target: "Formalmente, el grupo pertenece al club de ciclismo del barrio.",
          translation: "Formally, the group belongs to the neighborhood cycling club.",
          pronunciation: "for-MAL-men-teh, el GROO-poh per-teh-NEH-seh al kloob deh see-KLEES-moh del BAR-ryoh",
          literal: "Formally, the group belongs to-the club of cycling of-the neighborhood.",
          why: "Pertenecer a leans formal here: an organization belongs to a club. That is different from feeling socially accepted."
        },
        {
          speaker: "Cam",
          target: "Yo me siento parte, pero no sé si pertenezco oficialmente.",
          translation: "I feel part of it, but I don't know whether I officially belong.",
          pronunciation: "yo meh SYEN-toh PAR-teh, PEH-roh no seh see per-teh-NES-koh oh-fee-syal-MEN-teh",
          literal: "I myself feel part, but not I-know if I-belong officially.",
          why: "This is the honest Colombian split. For feelings, me siento parte sounds more natural than pertenezco, which can feel formal or legal."
        },
        {
          speaker: "Nidia",
          target: "Si sale con nosotros tres domingos, ya pertenece al chat de rutas.",
          translation: "If you ride with us three Sundays, you already belong to the route chat.",
          pronunciation: "see SAH-leh kon noh-SOH-tros tres doh-MEEN-gos, yah per-teh-NEH-seh al chat deh RROO-tas",
          literal: "If you go-out with us three Sundays, already you-belong to-the chat of routes.",
          why: "Pertenece is the usted form. Again the a appears in al chat; the group space is what Cam belongs to."
        },
        {
          speaker: "Cam",
          target: "Entonces mis datos pertenecen a la lista y yo me siento parte del equipo.",
          translation: "So my details belong on the list and I feel part of the team.",
          pronunciation: "en-TON-ses mees DAH-tos per-teh-NEH-sen ah la LEES-tah ee yo meh SYEN-toh PAR-teh del eh-KEE-poh",
          literal: "Then my data belong to the list and I myself feel part of-the team.",
          why: "Pertenecen is plural because mis datos are plural. The emotional belonging still uses sentirse parte de."
        },
        {
          speaker: "Nidia",
          target: "Exacto. Y desde hoy usted pertenece también al grupo de avisos.",
          translation: "Exactly. And from today you also belong to the announcements group.",
          pronunciation: "eg-SAK-toh. ee DES-deh oy oos-TED per-teh-NEH-seh tam-BYEN al GROO-poh deh ah-BEE-sos",
          literal: "Exactly. And from today you belong also to-the group of notices.",
          why: "The final pertenece is formal enough for membership but friendly in context. It confirms inclusion without pretending the verb is the warmest way to express belonging."
        }
      ],
      vocabulary: [
        {
          term: "pertenecer",
          explanation:
            "To belong to a group, organization, category or owner, usually with the preposition a.",
          literal: "to belong",
          useWhen:
            "Membership, ownership or formal connection is the point: belong to a club, list, group or institution.",
          avoidWhen:
            "You mean the emotional feeling of belonging. Colombians often say sentirse parte de for that.",
          register: "neutral formal",
          region: "General Spanish; slightly formal in everyday Colombian speech.",
          related: ["ser parte de", "sentirse parte de", "integrar", "incluir"],
          example: { target: "Pertenezco al grupo.", translation: "I belong to the group." }
        },
        {
          term: "pertenezco",
          explanation:
            "I belong. The yo form inserts -zc-: pertenezco, not perteneco.",
          literal: "I belong",
          useWhen:
            "You state your own membership or formal connection.",
          avoidWhen:
            "You are talking about one other person. Then use pertenece.",
          register: "neutral formal",
          region: "General Spanish.",
          related: ["conozco", "pertenece", "pertenecemos", "pertenecí"],
          example: { target: "Yo pertenezco al club.", translation: "I belong to the club." }
        },
        {
          term: "pertenecer a",
          explanation:
            "To belong to. The preposition a is part of the pattern and cannot simply disappear.",
          literal: "to belong to",
          useWhen:
            "Naming the group, list, category or owner after the verb.",
          avoidWhen:
            "You put the group directly after pertenecer with no a. That sounds incomplete.",
          register: "neutral formal",
          region: "General Spanish.",
          related: ["pertenezco a", "pertenece al", "ser de", "formar parte de"],
          example: { target: "El grupo pertenece al club.", translation: "The group belongs to the club." }
        },
        {
          term: "pertenece",
          explanation:
            "He, she or usted belongs. Used for a person or singular thing connected to a group.",
          literal: "belongs",
          useWhen:
            "A person, group, item or account belongs to one place, club or category.",
          avoidWhen:
            "The subject is plural. Then use pertenecen.",
          register: "neutral formal",
          region: "General Spanish.",
          related: ["pertenezco", "pertenecen", "perteneció", "pertenecerá"],
          example: { target: "Usted pertenece al chat.", translation: "You belong to the chat." }
        },
        {
          term: "pertenecen",
          explanation:
            "They belong. The verb is plural because the things or people belonging are plural.",
          literal: "they belong",
          useWhen:
            "Several details, members, files or people belong to a list or group.",
          avoidWhen:
            "The subject is singular. Then pertenece is correct.",
          register: "neutral formal",
          region: "General Spanish.",
          related: ["pertenece", "son parte", "están en", "integran"],
          example: { target: "Mis datos pertenecen a la lista.", translation: "My details belong on the list." }
        },
        {
          term: "sentirse parte de",
          explanation:
            "To feel part of something. The more natural Colombian phrase for emotional belonging.",
          literal: "to feel oneself part of",
          useWhen:
            "You mean acceptance, comfort, team feeling or emotional belonging.",
          avoidWhen:
            "You need formal membership or ownership. Then pertenecer a is more exact.",
          register: "neutral conversational",
          region: "Very common in Colombia.",
          related: ["pertenecer a", "estar integrado", "sentirse incluido", "hacer parte de"],
          example: { target: "Me siento parte del equipo.", translation: "I feel part of the team." }
        },
        {
          term: "hacer parte de",
          explanation:
            "To be part of, a common Colombian alternative to formar parte de.",
          literal: "to make part of",
          useWhen:
            "Talking about membership or participation in a group, team or process.",
          avoidWhen:
            "A formal international document may prefer formar parte de or pertenecer a.",
          register: "neutral Colombian",
          region: "Very common in Colombia.",
          related: ["formar parte de", "pertenecer a", "integrar", "participar en"],
          example: { target: "Hago parte del grupo de rutas.", translation: "I'm part of the route group." }
        }
      ],
      note:
        "Pertenecer is precise but not always warm. For membership, ownership or formal connection, use pertenecer a: pertenezco al club, el grupo pertenece a la liga. Remember the -zc- in pertenezco. For the feeling of belonging, Colombians more often say me siento parte de or hago parte de. That split matters: a person can feel part of a team before officially belonging to the club list.",
      culture: [
        {
          label: "Belonging can be formal or emotional",
          body:
            "A cycling group has layers: the legal club, the route chat, the people who show up every Sunday, and the feeling of being welcomed. Pertenecer works best for the formal layers. Sentirse parte de captures the human one."
        },
        {
          label: "The preposition matters",
          body:
            "Pertenecer almost always points with a: al grupo, a la lista, al club. Leaving out that preposition is a small mistake, but it makes the sentence sound unfinished to Colombian ears."
        },
        {
          label: "Usted does not block welcome",
          body:
            "Nidia can use usted and still welcome Cam warmly. In Colombian Spanish, belonging is not measured only by the pronoun. The invitation to the chat and the repeated rides say more than a quick switch to tú would."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “yo perteneco al grupo”",
          whyItFails:
            "The yo form inserts -zc-: pertenezco. It follows the same family as conozco.",
          sayInstead: "Yo pertenezco al grupo."
        },
        {
          mistake: "Saying “pertenezco el club”",
          whyItFails:
            "Pertenecer needs a before the group or owner. Without a, the phrase sounds incomplete.",
          sayInstead: "Pertenezco al club."
        },
        {
          mistake: "Using “pertenezco” for every feeling of belonging",
          whyItFails:
            "Pertenecer can sound formal or legal. If the point is emotional comfort, me siento parte de is more natural in Colombian speech.",
          sayInstead: "Me siento parte del equipo."
        }
      ],
      variations: [
        {
          form: "Pertenezco al grupo de ciclismo.",
          register: "neutral formal",
          region: "General Spanish",
          whenToUse: "You are stating official or clear membership."
        },
        {
          form: "Me siento parte del equipo.",
          register: "neutral conversational",
          region: "Very common in Colombia",
          whenToUse: "You mean emotional belonging rather than formal membership."
        },
        {
          form: "Mis datos pertenecen a la lista.",
          register: "formal practical",
          region: "General Spanish",
          whenToUse: "Several items belong in or to a list, and the subject is plural."
        }
      ],
      prompt: "Cam says “pertenezco oficialmente” but also “me siento parte.” What split is he noticing?",
      choices: [
        "Included services versus extra charges.",
        "Formal membership versus felt belonging.",
        "A rule exclusion versus a forgotten invite."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which yo form of pertenecer is correct?",
          choices: [
            "Yo perteneco al grupo.",
            "Yo pertenezco al grupo.",
            "Yo pertenece al grupo."
          ],
          answer: 1,
          tests: "pertenezco with -zc-"
        },
        {
          prompt: "Which sentence keeps the required preposition?",
          choices: [
            "Pertenezco el club.",
            "Pertenezco por el club.",
            "Pertenezco al club."
          ],
          answer: 2,
          tests: "pertenecer a"
        },
        {
          prompt: "Which phrase sounds most natural for emotional belonging?",
          choices: [
            "Me siento parte del equipo.",
            "Me excluyo parte del equipo.",
            "Me incluyo parte del equipo."
          ],
          answer: 0,
          tests: "sentirse parte de for feelings"
        },
        {
          prompt: "Which plural sentence agrees with datos?",
          choices: [
            "Mis datos pertenecen a la lista.",
            "Mis datos pertenece a la lista.",
            "Mis datos pertenezco a la lista."
          ],
          answer: 0,
          tests: "pertenecen with plural subject"
        }
      ]
    },
    en: {
      title: "Sentirse parte del grupo de bici en Sídney",
      situation:
        "Usted está en Sídney saliendo con un grupo de ciclistas dominical. Quiere explicar en inglés si ya pertenece formalmente al club o si simplemente se siente parte del equipo.",
      setting: {
        who: "Nidia organiza un grupo de ciclismo de domingo. Cam ha salido tres veces y quiere entender si la pertenencia es formal, emocional o sólo asunto del chat.",
        what: "Una conversación después de la ruta sobre pertenecer a un grupo, sentirse parte de un equipo y sonar natural en inglés.",
        when: "Domingo por la mañana después de la salida, mientras la gente toma agua y revisa la próxima ruta.",
        where: "Sídney, cerca de un punto de encuentro junto al puerto, donde los ciclistas se reúnen antes de rodar por rutas planas.",
        why: "Porque belong to cubre pertenecer a, pero feel part of suele cubrir mejor el sentimiento. El inglés también separa belong from belong in."
      },
      address: {
        form: "mixed",
        who: "Nidia y Cam usan you y nombres de pila; la relación todavía es cordial más que íntima.",
        why: "El inglés no marca esa distancia con pronombre. La claridad está en already, officially, feel part of y belong to.",
        ifYouSwitch:
          "No hay usted que cambiar. Hacer la frase demasiado formal puede sonar más a contrato que a grupo de bicicleta."
      },
      dialogue: [
        {
          speaker: "Cam",
          target: "Nidia, do I already belong to the group, or do I need to sign up?",
          translation: "Nidia, ¿ya pertenezco al grupo o tengo que inscribirme?",
          pronunciation: "NI-dia, du ai ol-RE-di bi-LONG tu da grup, or du ai nid tu sain op",
          literal: "Nidia, ¿ya pertenezco al grupo, o necesito inscribirme?",
          why: "Belong to traduce pertenecer a. To es obligatorio antes del grupo, igual que a en español."
        },
        {
          speaker: "Nidia",
          target: "Formally, the group belongs to the neighborhood cycling club.",
          translation: "Formalmente, el grupo pertenece al club de ciclismo del barrio.",
          pronunciation: "FOR-mal-li, da grup bi-LONGZ tu da NEI-bor-jud SAI-kling klub",
          literal: "Formalmente, el grupo pertenece al club de ciclismo del barrio.",
          why: "Belongs lleva -s porque the group es singular. Aquí belong to habla de conexión formal, no de emoción."
        },
        {
          speaker: "Cam",
          target: "I feel part of it, but I don't know if I officially belong.",
          translation: "Me siento parte, pero no sé si pertenezco oficialmente.",
          pronunciation: "ai fil part ov it, bat ai dont nou if ai o-FI-sha-li bi-LONG",
          literal: "Me siento parte de eso, pero no sé si pertenezco oficialmente.",
          why: "Feel part of it captura el lado emocional. Officially belong cubre la pertenencia formal sin repetir belong to."
        },
        {
          speaker: "Nidia",
          target: "If you ride with us three Sundays, you belong in the route chat.",
          translation: "Si sale con nosotros tres domingos, pertenece al chat de rutas.",
          pronunciation: "if yu raid uid os thri SON-deiz, yu bi-LONG in da rut chat",
          literal: "Si monta con nosotros tres domingos, usted pertenece en el chat de rutas.",
          why: "Belong in puede significar encajar dentro de un espacio. Para membership formal, belong to sigue siendo más directo."
        },
        {
          speaker: "Cam",
          target: "So my details belong on the list, and I feel part of the team.",
          translation: "Entonces mis datos pertenecen a la lista y me siento parte del equipo.",
          pronunciation: "sou mai DI-teils bi-LONG on da list, and ai fil part ov da tim",
          literal: "Entonces mis datos pertenecen en la lista, y me siento parte del equipo.",
          why: "Details belong on the list usa on porque una lista funciona como superficie o documento. Feel part of the team mantiene el lado humano."
        },
        {
          speaker: "Nidia",
          target: "Exactly. From today, you belong to the updates group too.",
          translation: "Exacto. Desde hoy usted pertenece también al grupo de avisos.",
          pronunciation: "eg-ZAKT-li. from tu-DEI, yu bi-LONG tu di OP-deits grup tu",
          literal: "Exactamente. Desde hoy, usted pertenece también al grupo de avisos.",
          why: "Belong to the updates group confirma pertenencia a un grupo concreto. La frase suena clara sin volverse legal."
        }
      ],
      vocabulary: [
        {
          term: "belong",
          explanation:
            "Pertenecer o encajar, según la preposición y el contexto.",
          literal: "pertenecer",
          useWhen:
            "Habla de membresía, propiedad, lugar adecuado o sensación de encajar.",
          avoidWhen:
            "Quiere decir que un precio incluye algo. Para eso use include, no belong.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["belong to", "belong in", "feel part of", "fit in"],
          example: { target: "I belong to the group.", translation: "Pertenezco al grupo." }
        },
        {
          term: "I belong",
          explanation:
            "Pertenezco. Puede ser formal o emocional según lo que sigue.",
          literal: "yo pertenezco",
          useWhen:
            "Usted afirma que encaja o que es miembro de un grupo.",
          avoidWhen:
            "Necesita nombrar el grupo formalmente y olvida to. I belong the club está mal.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I belong to", "I fit in", "I'm part of", "I feel included"],
          example: { target: "I officially belong.", translation: "Pertenezco oficialmente." }
        },
        {
          term: "belong to",
          explanation:
            "Pertenecer a. To es la preposición básica para grupo, club o dueño.",
          literal: "pertenecer a",
          useWhen:
            "Nombra el grupo, organización, dueño o categoría después del verbo.",
          avoidWhen:
            "Habla de estar en el lugar correcto. Entonces belong in or belong on may be better.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["belong in", "belong on", "be part of", "member of"],
          example: { target: "The group belongs to the club.", translation: "El grupo pertenece al club." }
        },
        {
          term: "belongs",
          explanation:
            "Pertenece. La tercera persona singular agrega -s.",
          literal: "pertenece",
          useWhen:
            "Un grupo, objeto o persona singular pertenece a algo.",
          avoidWhen:
            "El sujeto es plural. My details belong, sin -s.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["belong", "belonged", "belongs to", "belongs in"],
          example: { target: "The group belongs to the club.", translation: "El grupo pertenece al club." }
        },
        {
          term: "belong on",
          explanation:
            "Pertenecer en una lista, página, mesa o superficie.",
          literal: "pertenecer sobre",
          useWhen:
            "Un dato, nombre, archivo o cosa debe estar en una lista o superficie.",
          avoidWhen:
            "Habla de membresía en un club. Then belong to is safer.",
          register: "neutro práctico",
          region: "Inglés universal.",
          related: ["belong to", "go on", "be listed on", "fit on"],
          example: { target: "My details belong on the list.", translation: "Mis datos pertenecen a la lista." }
        },
        {
          term: "feel part of",
          explanation:
            "Sentirse parte de algo. Muy natural para pertenencia emocional.",
          literal: "sentir parte de",
          useWhen:
            "Habla de aceptación, comodidad, equipo o identidad compartida.",
          avoidWhen:
            "Necesita decir membresía legal o propiedad. Belong to may be more exact.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["belong", "fit in", "feel included", "be part of"],
          example: { target: "I feel part of the team.", translation: "Me siento parte del equipo." }
        },
        {
          term: "be part of",
          explanation:
            "Hacer parte de o ser parte de. Una alternativa común a belong to.",
          literal: "ser parte de",
          useWhen:
            "Quiere hablar de participación en un grupo, equipo o proceso sin sonar formal.",
          avoidWhen:
            "La pregunta es de propiedad. This bike is part of me no significa que le pertenece.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["belong to", "feel part of", "join", "take part in"],
          example: { target: "I'm part of the route group.", translation: "Hago parte del grupo de rutas." }
        }
      ],
      note:
        "Belong necesita preposición casi siempre: belong to a club, belong in a chat, belong on a list. Para pertenecer a en sentido formal, belong to es la base. Para la emoción, feel part of o feel included suelen sonar más humanos. Esa diferencia se parece mucho al contraste colombiano entre pertenecer a y sentirse parte de.",
      culture: [
        {
          label: "Belonging has layers",
          body:
            "Un grupo de bicicleta tiene lista oficial, chat de rutas, costumbre de salir y sensación de equipo. El inglés separa esas capas con belong to, belong in, belong on y feel part of. No todo se resuelve con una sola frase."
        },
        {
          label: "Feel part of es cálido",
          body:
            "I feel part of the team suena más cercano que I belong to the team cuando se habla de emoción. Belong to puede ser perfecto para membresía, pero no siempre comunica bienvenida."
        },
        {
          label: "En la lista, en el chat, al club",
          body:
            "Las preposiciones inglesas hacen mucho trabajo: details belong on a list, a person belongs in a chat, a group belongs to a club. Aprenderlas por escena evita traducir siempre a con to."
        }
      ],
      pitfalls: [
        {
          mistake: "“I belong the group.”",
          whyItFails:
            "Belong necesita preposición antes del grupo. Para membresía, la preposición normal es to.",
          sayInstead: "I belong to the group."
        },
        {
          mistake: "“My details belongs on the list.”",
          whyItFails:
            "Details es plural, así que el verbo va sin -s: belong. La -s sólo aparece con sujeto singular.",
          sayInstead: "My details belong on the list."
        },
        {
          mistake: "“I belong to the team emotionally” como primera opción",
          whyItFails:
            "Se entiende, pero suena torpe. Para la sensación de pertenencia, feel part of the team es más natural.",
          sayInstead: "I feel part of the team."
        }
      ],
      variations: [
        {
          form: "I belong to the cycling group.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Usted afirma membresía clara u oficial."
        },
        {
          form: "I feel part of the team.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Habla de pertenencia emocional, no de una lista formal."
        },
        {
          form: "My details belong on the list.",
          register: "formal práctico",
          region: "Inglés universal",
          whenToUse: "Varios datos deben estar en una lista o documento."
        }
      ],
      prompt: "Cam says “officially belong” but also “feel part of it.” ¿Qué diferencia nota?",
      choices: [
        "Servicios incluidos frente a cargos extra.",
        "Membresía formal frente a pertenencia sentida.",
        "Exclusión por regla frente a olvido social."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa bien belong con membresía?",
          choices: [
            "I belong the group.",
            "I belong to the group.",
            "I belong on the group."
          ],
          answer: 1,
          tests: "belong to for membership"
        },
        {
          prompt: "¿Cuál frase usa bien el plural details?",
          choices: [
            "My details belongs on the list.",
            "My details belong to belong.",
            "My details belong on the list."
          ],
          answer: 2,
          tests: "plural subject with belong"
        },
        {
          prompt: "¿Cuál frase suena natural para pertenencia emocional?",
          choices: [
            "I feel part of the team.",
            "I exclude part of the team.",
            "I include part of the team."
          ],
          answer: 0,
          tests: "feel part of for emotional belonging"
        },
        {
          prompt: "¿Cuál frase conecta un grupo con un club?",
          choices: [
            "The group belongs to the club.",
            "The group belongs the club.",
            "The group belongs on the club."
          ],
          answer: 0,
          tests: "belong to for formal connection"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/51-developing-belonging.js");
