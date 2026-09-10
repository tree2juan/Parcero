/*
 * Lesson block: foundation / sorting things out.
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
    id: "looking-for-a-hat-in-the-walled-city",
    level: "Starter · Sorting things out",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["foundation"],
    verb: "buscar",
    review: "pending",
    es: {
      title: "Buscar un sombrero en el Centro Histórico",
      situation:
        "Alex camina por una calle del Centro Histórico de Cartagena antes del sol fuerte de la tarde. Quiere un sombrero sencillo, no un recuerdo caro. Entra a una tienda pequeña y tiene que decir qué busca sin sonar como si ya lo hubiera encontrado.",
      setting: {
        who: "Marta runs a narrow shop near the city wall, and Alex is a visitor who knows he needs shade more than a souvenir.",
        what: "A quick exchange about looking for a plain hat, the kind a traveler can actually wear all day.",
        when: "Late morning, just before the heat makes every errand feel twice as long.",
        where: "Cartagena, inside the walled city, a few blocks away from the busiest souvenir stalls.",
        why: "Because the useful sentence is not just the noun. Alex needs buscar without an English-style preposition, and he needs to understand that the shopkeeper's greeting is friendly."
      },
      address: {
        form: "usted",
        who: "Marta uses usted with Alex, and Alex uses usted back.",
        why: "A small shop in Cartagena can be warm and still run on usted, especially when the people do not know each other. For you as a visitor, usted keeps the errand polite without making it stiff.",
        ifYouSwitch:
          "Tú would probably be understood, but it would sound like you skipped a step in a service encounter. Vos would be out of place here."
      },
      dialogue: [
        {
          speaker: "Marta",
          target: "Buenas, ¿qué buscaba?",
          translation: "Hi there, what were you looking for?",
          pronunciation: "BWEH-nas, keh boos-KAH-bah",
          literal: "Good ones, what were-you-looking-for?",
          why: "“¿Qué buscaba?” is a very Colombian shop greeting. It can sound abrupt in English, but the imperfect makes it softer: the clerk is opening the door for your errand."
        },
        {
          speaker: "Alex",
          target: "Busco un sombrero sencillo para caminar.",
          translation: "I'm looking for a simple hat for walking around.",
          pronunciation: "BOOS-koh oon som-BREH-roh sen-SEE-yoh PAH-rah kah-mee-NAR",
          literal: "I-look-for a hat simple for walking.",
          why: "Buscar takes the thing directly: busco un sombrero. Do not add por just because English says “look for.” Spanish does not need it here."
        },
        {
          speaker: "Marta",
          target: "Claro. ¿Busca algo fresco o algo más elegante?",
          translation: "Of course. Are you looking for something cool or something more elegant?",
          pronunciation: "KLAH-roh. BOOS-kah AL-goh FRES-koh oh AL-goh mas eh-leh-GAN-teh",
          literal: "Clear. You-look-for something cool or something more elegant?",
          why: "She repeats busca because the question is still about the search, not the result. Nothing has been found yet."
        },
        {
          speaker: "Alex",
          target: "Busco algo fresco, no tan de turista.",
          translation: "I'm looking for something cool, not so touristy.",
          pronunciation: "BOOS-koh AL-goh FRES-koh, noh tan deh too-REES-tah",
          literal: "I-look-for something cool, not so of tourist.",
          why: "“Algo fresco” means airy or cool enough for the heat. In Cartagena, that is a practical request, not a fashion word."
        },
        {
          speaker: "Marta",
          target: "Entonces mire este. Si le sirve, ya lo encontró.",
          translation: "Then look at this one. If it works for you, you've found it.",
          pronunciation: "en-TON-ses MEE-reh ES-teh. see leh SEER-beh, yah loh en-kon-TRO",
          literal: "Then look this. If it serves you, already it you-found.",
          why: "This is the clean split: buscar is the search, encontrar is the success. English often lets “find” cover both, but Spanish keeps them apart."
        },
        {
          speaker: "Alex",
          target: "Sí, eso buscaba. ¿Cuánto cuesta?",
          translation: "Yes, that's what I was looking for. How much is it?",
          pronunciation: "see, EH-soh boos-KAH-bah. KWAN-toh KWES-tah",
          literal: "Yes, that I-was-looking-for. How-much costs?",
          why: "“Eso buscaba” closes the loop politely: the search is over, and now the conversation can move to price."
        }
      ],
      vocabulary: [
        {
          term: "buscar",
          explanation:
            "To look for or search for something. In Spanish it is transitive: the thing you want comes right after the verb.",
          literal: "to seek",
          useWhen:
            "You do not have the thing yet and are trying to locate it, choose it, or ask whether a shop has it.",
          avoidWhen:
            "You mean that the search succeeded. Then you need encontrar, not buscar.",
          register: "neutral",
          region: "Universal Spanish; the no-preposition rule is not Colombian-only.",
          related: ["encontrar", "mirar", "necesitar", "escoger"],
          example: {
            target: "Busco un sombrero sencillo.",
            translation: "I'm looking for a simple hat."
          }
        },
        {
          term: "¿Qué buscaba?",
          explanation:
            "A common Colombian shop greeting: “What were you looking for?” It is warmer than the literal English sounds.",
          literal: "What were you seeking?",
          useWhen:
            "A clerk wants to invite the customer to name the errand without a long greeting ritual.",
          avoidWhen:
            "You are questioning a stranger in the street. Outside a service setting it can sound suspicious.",
          register: "friendly formal",
          region: "Very common in Colombian shops and markets.",
          related: ["¿En qué le ayudo?", "¿Qué necesita?", "¿Qué se le ofrece?", "¿Le muestro algo?"],
          example: {
            target: "Buenas, ¿qué buscaba?",
            translation: "Hi there, what were you looking for?"
          }
        },
        {
          term: "sin por",
          explanation:
            "The mental note you need most: buscar already contains the “for” idea, so por does not belong after it.",
          literal: "without for",
          useWhen:
            "You are tempted to translate English word by word and say buscar por.",
          avoidWhen:
            "You really mean “search through” a place, as in buscar por todas partes. That por belongs to the place, not to the object.",
          register: "grammar note",
          region: "Universal Spanish.",
          related: ["busco un hotel", "busco trabajo", "busco la salida", "busco mis llaves"],
          example: {
            target: "Busco un sombrero.",
            translation: "I'm looking for a hat."
          }
        },
        {
          term: "algo fresco",
          explanation:
            "Something cool, airy, or comfortable in the heat. It is about temperature and feel before style.",
          literal: "something fresh",
          useWhen:
            "Buying clothes, a hat, a drink, or a place to sit in a hot coastal city.",
          avoidWhen:
            "You mean fashionable or new. English “fresh” can mean that; Spanish fresco usually does not in this errand.",
          register: "neutral",
          region: "General Colombian; especially useful on the Caribbean coast.",
          related: ["liviano", "cómodo", "para el calor", "que no dé tanto calor"],
          example: {
            target: "Busco algo fresco.",
            translation: "I'm looking for something cool."
          }
        },
        {
          term: "no tan de turista",
          explanation:
            "A tactful way to say you do not want the most obvious tourist version of an item.",
          literal: "not so of tourist",
          useWhen:
            "You want something plainer or less souvenir-like without insulting the shop.",
          avoidWhen:
            "You are talking about someone else's taste. Then it can sound snobbish.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["más sencillo", "menos llamativo", "para usar todos los días", "sin tanto adorno"],
          example: {
            target: "Busco algo fresco, no tan de turista.",
            translation: "I'm looking for something cool, not so touristy."
          }
        },
        {
          term: "le sirve",
          explanation:
            "It works for you, fits the need, or is acceptable. In shops, servir often means practical suitability.",
          literal: "it serves you",
          useWhen:
            "A clerk offers an option and wants to know whether it solves the customer's problem.",
          avoidWhen:
            "You mean emotional liking only. Then gustar may be clearer.",
          register: "neutral",
          region: "General Colombian.",
          related: ["le queda", "le funciona", "le gusta", "le parece"],
          example: {
            target: "Si le sirve, ya lo encontró.",
            translation: "If it works for you, you've found it."
          }
        },
        {
          term: "ya lo encontró",
          explanation:
            "“You've found it.” The search has ended successfully, so the verb changes from buscar to encontrar.",
          literal: "already it you-found",
          useWhen:
            "The thing has been located or chosen, especially after someone was looking for it.",
          avoidWhen:
            "The person is still searching. Then stick with buscar.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["lo encontré", "apareció", "aquí está", "eso era"],
          example: {
            target: "Ya lo encontró.",
            translation: "You've found it."
          }
        }
      ],
      note:
        "Buscar is not encontrar. You can buscar for ten minutes and never encontrar anything. The safest sentence pattern is also the shortest: busco plus the object, with no por in the middle.",
      culture: [
        {
          label: "“¿Qué buscaba?” is a welcome, not an interrogation",
          body:
            "In many Colombian shops the clerk may open with “¿qué buscaba?” before any long greeting. English makes that sound like a challenge. In context it means “tell me the errand and I'll help,” especially when said with the soft past tense."
        },
        {
          label: "Cartagena heat changes the vocabulary",
          body:
            "A visitor may think first about color or price; the shopkeeper may think first about whether the hat is fresco. In the walled city, shade and airflow are not luxuries. They are the reason the purchase makes sense."
        },
        {
          label: "Looking is not the same as buying",
          body:
            "Saying “estoy mirando” can keep a clerk from hovering, but “busco un sombrero” invites help. Use buscar when you want the person to participate in the search, not when you want to browse silently."
        },
        {
          label: "Tourist objects can still be useful objects",
          body:
            "A shop near the wall will sell souvenirs, but it also sells things locals and workers can actually use. Asking for something sencillo or fresco is more respectful than mocking the tourist display."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “busco por un hotel” for “I'm looking for a hotel”",
          whyItFails:
            "This copies the English preposition “for.” Buscar takes its object directly, so por makes the sentence sound translated rather than Spanish.",
          sayInstead: "Busco un hotel."
        },
        {
          mistake: "Using buscar when the thing is already in your hand",
          whyItFails:
            "Buscar is the search, not the successful result. Once you have the thing, Spanish expects encontrar or a sentence like “aquí está.”",
          sayInstead: "Ya lo encontré."
        },
        {
          mistake: "Hearing “¿qué buscaba?” as rude or impatient",
          whyItFails:
            "In a Colombian shop this is a service greeting. The clerk is not accusing you of anything; she is asking what errand brought you in.",
          sayInstead: "Answer with the object: “Busco un sombrero.”"
        },
        {
          mistake: "Translating “look for” with mirar",
          whyItFails:
            "Mirar is to look at something with your eyes. If the object is missing or not chosen yet, the verb is buscar.",
          sayInstead: "Busco mis llaves."
        }
      ],
      variations: [
        {
          form: "Busco un sombrero sencillo.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The default request: verb plus the object, with no preposition."
        },
        {
          form: "Estoy buscando un sombrero para el sol.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "When you want to stress the ongoing search right now."
        },
        {
          form: "¿Tiene un sombrero más fresco?",
          register: "friendly formal",
          region: "General Colombian",
          whenToUse: "When the search has narrowed and you are asking about stock."
        },
        {
          form: "Buscaba algo menos de turista.",
          register: "careful informal",
          region: "General Colombian",
          whenToUse: "When you want to soften a picky request with the imperfect."
        },
        {
          form: "Estoy mirando, gracias.",
          register: "friendly neutral",
          region: "General Colombian",
          whenToUse: "When you are browsing and do not want help yet."
        }
      ],
      prompt: "Alex says “Busco un sombrero sencillo.” What is the key grammar point?",
      choices: [
        "Buscar takes the thing directly, with no por after the verb.",
        "Buscar means the hat has already been found and chosen.",
        "Buscar needs a reflexive pronoun before every object."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Marta opens with “¿qué buscaba?” What should Alex hear?",
          choices: [
            "A warning that browsing without buying is considered impolite.",
            "A normal shop greeting that invites him to name the errand.",
            "A complaint that he has touched something too soon."
          ],
          answer: 1,
          tests: "Colombian shop use of “¿qué buscaba?”"
        },
        {
          prompt: "Which Spanish sentence avoids the English calque correctly?",
          choices: [
            "Busco un hotel cerca del centro.",
            "Busco por un hotel cerca del centro.",
            "Miro por un hotel cerca del centro."
          ],
          answer: 0,
          tests: "buscar as transitive with no preposition"
        },
        {
          prompt: "Marta says “si le sirve, ya lo encontró.” What changed?",
          choices: [
            "The search became a successful finding.",
            "The price became much too high.",
            "The greeting became more formal."
          ],
          answer: 0,
          tests: "buscar versus encontrar"
        },
        {
          prompt: "Alex says he wants “algo fresco.” In Cartagena, what is he prioritising?",
          choices: [
            "Something airy enough for walking in heat.",
            "Something fashionable enough for a party.",
            "Something new enough to give as a gift."
          ],
          answer: 0,
          tests: "fresco as cool or airy, not trendy"
        }
      ]
    },
    en: {
      title: "Buscar un sombrero en el Centro Histórico",
      situation:
        "Alejandra camina por una calle del Centro Histórico de Cartagena antes del sol fuerte de la tarde. Quiere un sombrero sencillo, no un recuerdo caro. Entra a una tienda pequeña y tiene que decir qué busca en inglés sin confundir buscar con encontrar.",
      setting: {
        who: "Marta atiende una tienda estrecha cerca de la muralla, y Alejandra es una visitante que sabe que necesita sombra más que un recuerdo.",
        what: "Un intercambio rápido sobre buscar un sombrero sencillo, de esos que una viajera sí puede usar todo el día.",
        when: "Al final de la mañana, justo antes de que el calor vuelva cualquier vuelta dos veces más larga.",
        where: "Cartagena, dentro del Centro Histórico, a unas cuadras de los puestos de recuerdos más llenos.",
        why: "Porque la frase útil no es sólo el sustantivo. Alejandra necesita “look for” cuando todavía busca, y “find” cuando ya apareció lo que quería."
      },
      address: {
        form: "mixed",
        who: "Marta y Alejandra usan el mismo “you”; el registro se marca con saludos, tono y frases completas.",
        why: "El inglés no cambia el pronombre entre usted y tú. Para sonar cortés, usted usa “Hi there”, “I'm looking for” y “please” cuando hace falta, no otro pronombre.",
        ifYouSwitch:
          "No hay un cambio de pronombre disponible. Lo que sí puede cambiar es el tono: “Got hats?” suena seco; “I'm looking for a simple hat” suena normal."
      },
      dialogue: [
        {
          speaker: "Marta",
          target: "Hi there, what were you looking for?",
          translation: "Buenas, ¿qué buscaba?",
          pronunciation: "jai DER, uat uer yu LU-kin for",
          literal: "Hola ahí, ¿qué estaba usted mirando para?",
          why: "“Looking for” es la pareja completa. En inglés no basta con “looking a hat”; la preposición “for” sí es obligatoria aquí, aunque en español no lo sea."
        },
        {
          speaker: "Alejandra",
          target: "I'm looking for a simple hat for walking around.",
          translation: "Busco un sombrero sencillo para caminar.",
          pronunciation: "aim LU-kin for a SIM-pol jat for UO-kin a-RAUND",
          literal: "Estoy buscando por un sombrero sencillo para caminar alrededor.",
          why: "El inglés usa la forma continua porque la búsqueda está pasando ahora. “I look for” existe, pero aquí sonaría como costumbre, no como una compra de este momento."
        },
        {
          speaker: "Marta",
          target: "Sure. Are you looking for something cool or something dressier?",
          translation: "Claro. ¿Busca algo fresco o algo más elegante?",
          pronunciation: "shur. ar yu LU-kin for SOM-zing kul or SOM-zing DRE-sier",
          literal: "Seguro. ¿Está usted buscando por algo fresco o algo más elegante?",
          why: "La dependienta mantiene “looking for” porque todavía están eligiendo. No use “finding” hasta que el objeto aparezca o quede escogido."
        },
        {
          speaker: "Alejandra",
          target: "I'm looking for something cool, not too touristy.",
          translation: "Busco algo fresco, no tan de turista.",
          pronunciation: "aim LU-kin for SOM-zing kul, not tu TU-ris-ti",
          literal: "Estoy buscando por algo fresco, no demasiado turístico.",
          why: "“Not too touristy” suaviza la crítica. Sirve para pedir algo sencillo sin burlarse de lo que la tienda vende."
        },
        {
          speaker: "Marta",
          target: "Then try this one. If it works, you've found it.",
          translation: "Entonces mire este. Si le sirve, ya lo encontró.",
          pronunciation: "den trai dis uan. if it uorks, yuv faund it",
          literal: "Entonces pruebe este. Si funciona, usted lo ha encontrado.",
          why: "Aquí por fin aparece “found.” La búsqueda puede terminar, así que el inglés cambia de “look for” a “find.”"
        },
        {
          speaker: "Alejandra",
          target: "Yes, that's what I was looking for. How much is it?",
          translation: "Sí, eso buscaba. ¿Cuánto cuesta?",
          pronunciation: "yes, dats uat ai uoz LU-kin for. jau mach is it",
          literal: "Sí, eso es lo que yo estaba buscando por. ¿Cuánto es?",
          why: "“What I was looking for” cierra la búsqueda con naturalidad. Decir sólo “what I looked” queda incompleto porque falta “for.”"
        }
      ],
      vocabulary: [
        {
          term: "look for",
          explanation:
            "El verbo compuesto para buscar algo que todavía no tiene. En inglés la preposición “for” hace parte de la expresión.",
          literal: "mirar para",
          useWhen:
            "No tiene la cosa todavía y está tratando de ubicarla, escogerla o preguntar si la tienda la tiene.",
          avoidWhen:
            "Quiere decir que la búsqueda tuvo éxito. Ahí necesita “find”, no “look for”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["find", "search for", "try on", "choose"],
          example: {
            target: "I'm looking for a simple hat.",
            translation: "Busco un sombrero sencillo."
          }
        },
        {
          term: "what were you looking for?",
          explanation:
            "Una forma amable de abrir una conversación de tienda: pregunta qué está buscando usted, no qué ya encontró.",
          literal: "¿qué estaba usted mirando para?",
          useWhen:
            "Un empleado quiere invitar al cliente a decir qué necesita sin hacer una presentación larga.",
          avoidWhen:
            "Quiere sonar muy formal. Entonces “How can I help you?” puede servir mejor.",
          register: "friendly neutral",
          region: "Inglés universal; muy común en tiendas.",
          related: ["Can I help you?", "What can I help you find?", "What are you after?", "Need a hand?"],
          example: {
            target: "What were you looking for?",
            translation: "¿Qué buscaba?"
          }
        },
        {
          term: "for",
          explanation:
            "La palabra que no puede faltar después de “look” cuando significa buscar. En español sobra; en inglés es obligatoria.",
          literal: "por / para",
          useWhen:
            "Dice “look for” más el objeto que quiere encontrar.",
          avoidWhen:
            "Usa “look at” para mirar algo visible, o “look around” para curiosear sin objeto concreto.",
          register: "grammar note",
          region: "Inglés universal.",
          related: ["look for a hotel", "look for work", "look for the exit", "look for my keys"],
          example: {
            target: "I'm looking for a hat.",
            translation: "Busco un sombrero."
          }
        },
        {
          term: "something cool",
          explanation:
            "Algo fresco o cómodo para el calor. En esta compra habla más de temperatura y uso que de moda.",
          literal: "algo fresco",
          useWhen:
            "Compra ropa, un sombrero, una bebida o busca un lugar para sentarse en una ciudad caliente.",
          avoidWhen:
            "Quiere decir que algo está de moda. “Cool” puede significar eso, pero aquí el contexto manda.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["light", "comfortable", "for the heat", "not too hot"],
          example: {
            target: "I'm looking for something cool.",
            translation: "Busco algo fresco."
          }
        },
        {
          term: "not too touristy",
          explanation:
            "Una manera suave de decir que no quiere la versión más obvia para turistas.",
          literal: "no demasiado turístico",
          useWhen:
            "Quiere algo más sencillo o menos de recuerdo sin insultar la tienda.",
          avoidWhen:
            "Habla del gusto de otra persona. Ahí puede sonar presumido.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["simpler", "less flashy", "more everyday", "without the logo"],
          example: {
            target: "Not too touristy.",
            translation: "No tan de turista."
          }
        },
        {
          term: "if it works",
          explanation:
            "Si le sirve, si resuelve la necesidad o si queda aceptable. No siempre habla de una máquina que funciona.",
          literal: "si funciona",
          useWhen:
            "Alguien ofrece una opción y quiere saber si le soluciona el problema a usted.",
          avoidWhen:
            "Sólo quiere hablar de gusto emocional. Entonces “if you like it” puede ser más claro.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["if it fits", "if you like it", "if that's okay", "if that helps"],
          example: {
            target: "If it works, you've found it.",
            translation: "Si le sirve, ya lo encontró."
          }
        },
        {
          term: "you've found it",
          explanation:
            "Ya lo encontró. La búsqueda tuvo éxito, así que el verbo cambia de “look for” a “find.”",
          literal: "usted lo ha encontrado",
          useWhen:
            "La cosa apareció o quedó escogida después de una búsqueda.",
          avoidWhen:
            "La persona todavía está buscando. Entonces siga con “look for.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I found it", "there it is", "that's the one", "here it is"],
          example: {
            target: "You've found it.",
            translation: "Ya lo encontró."
          }
        }
      ],
      note:
        "“Look for” no es “find.” Usted puede “look for” algo durante diez minutos y no “find” nada. La trampa para hispanohablantes es doble: en inglés sí necesita “for”, y cuando la búsqueda termina necesita otro verbo.",
      culture: [
        {
          label: "La pregunta de tienda suena menos directa en contexto",
          body:
            "“What were you looking for?” puede parecer brusca traducida palabra por palabra, pero en una tienda es una invitación normal a decir la vuelta. El tono y la sonrisa hacen el trabajo que en español hace mucho la forma “buscaba”."
        },
        {
          label: "El calor de Cartagena cambia la compra",
          body:
            "Un visitante piensa primero en color o precio; la dependienta puede pensar primero en si el sombrero es fresco. En el Centro Histórico, sombra y ventilación no son lujos. Son la razón de comprarlo."
        },
        {
          label: "Buscar no es lo mismo que mirar",
          body:
            "“I'm just looking” mantiene a distancia a quien atiende. “I'm looking for a simple hat” pide ayuda. La diferencia no está en la cortesía sino en si usted quiere que la otra persona participe."
        },
        {
          label: "Los objetos turísticos también pueden ser prácticos",
          body:
            "Una tienda cerca de la muralla vende recuerdos, pero también vende cosas útiles. Pedir algo simple o “not too touristy” es mejor que burlarse de lo que hay en el mostrador."
        }
      ],
      pitfalls: [
        {
          mistake: "“I'm looking a hotel.”",
          whyItFails:
            "En inglés “look” no significa buscar por sí solo. Necesita “for” antes del objeto, aunque el español diga buscar sin preposición.",
          sayInstead: "I'm looking for a hotel."
        },
        {
          mistake: "“I find a hat” cuando todavía lo está buscando",
          whyItFails:
            "“Find” significa que la búsqueda tuvo éxito. Si usted todavía está preguntando en la tienda, necesita “look for.”",
          sayInstead: "I'm looking for a hat."
        },
        {
          mistake: "Oír “what were you looking for?” como regaño",
          whyItFails:
            "En una tienda es una pregunta de servicio. No le están reclamando; le están pidiendo que nombre la vuelta.",
          sayInstead: "Answer with the object: “I'm looking for a hat.”"
        },
        {
          mistake: "“I'm watching for a hat.”",
          whyItFails:
            "“Watch” es mirar algo durante un tiempo, como un partido o una puerta. Para buscar un objeto que no tiene, el inglés usa “look for.”",
          sayInstead: "I'm looking for my keys."
        }
      ],
      variations: [
        {
          form: "I'm looking for a simple hat.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "La petición por defecto: “look for” más el objeto."
        },
        {
          form: "I'm looking for a hat for the sun.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Cuando quiere explicar para qué lo necesita."
        },
        {
          form: "Do you have a cooler hat?",
          register: "friendly neutral",
          region: "Inglés universal",
          whenToUse: "Cuando ya está mirando opciones y pregunta por inventario."
        },
        {
          form: "I was looking for something less touristy.",
          register: "careful informal",
          region: "Inglés universal",
          whenToUse: "Cuando quiere suavizar una petición exigente."
        },
        {
          form: "I'm just looking, thanks.",
          register: "friendly neutral",
          region: "Inglés universal",
          whenToUse: "Cuando sólo está mirando y todavía no quiere ayuda."
        }
      ],
      prompt: "Alejandra dice “I'm looking for a simple hat.” ¿Cuál es el punto clave?",
      choices: [
        "En inglés “look for” lleva “for” antes del objeto.",
        "En inglés “look for” significa que ya encontró el sombrero.",
        "En inglés “look for” exige un pronombre reflexivo."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Marta abre con “what were you looking for?” ¿Qué debe entender Alejandra?",
          choices: [
            "Una advertencia de que mirar sin comprar es mala educación.",
            "Una pregunta normal de tienda para nombrar la vuelta.",
            "Un reclamo porque tocó algo demasiado pronto."
          ],
          answer: 1,
          tests: "“what were you looking for?” como pregunta de servicio"
        },
        {
          prompt: "¿Cuál frase inglesa traduce buscar sin perder la preposición necesaria?",
          choices: [
            "I'm looking for a hotel downtown.",
            "I'm looking a hotel downtown.",
            "I'm watching for a hotel downtown."
          ],
          answer: 0,
          tests: "“look for” con “for” obligatorio"
        },
        {
          prompt: "Marta dice “you've found it.” ¿Qué cambió?",
          choices: [
            "La búsqueda se convirtió en hallazgo exitoso.",
            "El precio se volvió demasiado alto.",
            "El saludo se volvió más formal."
          ],
          answer: 0,
          tests: "“look for” frente a “find”"
        },
        {
          prompt: "Alejandra pide “something cool.” En Cartagena, ¿qué prioriza?",
          choices: [
            "Algo ventilado para caminar bajo el calor.",
            "Algo moderno para usar en una fiesta.",
            "Algo nuevo para llevar como regalo."
          ],
          answer: 0,
          tests: "“cool” como fresco por contexto"
        }
      ]
    }
  },
  {
    id: "trying-the-kayak-at-taganaga",
    level: "Starter · Sorting things out",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "everyday-life",
    register: "familiar",
    pathways: ["foundation"],
    verb: "intentar",
    review: "pending",
    es: {
      title: "Intentar remar en Taganga",
      situation:
        "Sam está en la playa de Taganga, cerca de Santa Marta, y mira un kayak con más ganas que seguridad. Un instructor joven le explica cómo entrar al agua. Sam quiere decir que va a intentarlo, aunque todavía le dé nervios.",
      setting: {
        who: "Julián rents kayaks on the beach, and Sam is a careful beginner who can swim but has never paddled on open water.",
        what: "A first attempt at taking a kayak past the calm edge of the bay.",
        when: "Early morning, before the wind picks up and the beach fills.",
        where: "Taganga, a fishing village by Santa Marta, with dry hills behind the bay and small boats pulled up on the sand.",
        why: "Because trying, testing, and tasting are not one verb in Spanish. Sam needs intentar for a deliberate attempt, and probar only when actually testing the kayak or tasting food."
      },
      address: {
        form: "tú",
        who: "Julián uses tú with Sam, and Sam uses tú back.",
        why: "They are close in age, standing barefoot on a beach, and the exchange is coaching rather than official service. For you in this setting, tú sounds relaxed and normal.",
        ifYouSwitch:
          "Usted would still be polite, but it would make the lesson feel more like paperwork than a beach activity. Vos is heard in parts of Colombia, but it is not the safest neutral choice here."
      },
      dialogue: [
        {
          speaker: "Julián",
          target: "¿Listo? Si quieres, intentamos despacio.",
          translation: "Ready? If you want, we'll try slowly.",
          pronunciation: "LEES-toh. see KYEH-res, een-ten-TAH-mos des-PAH-syoh",
          literal: "Ready? If you want, we-try slowly.",
          why: "Intentar frames the action as an attempt, not a promise of success. The shared “intentamos” also makes the instructor part of the effort."
        },
        {
          speaker: "Sam",
          target: "Quiero intentar, pero me da nervios.",
          translation: "I want to try, but it makes me nervous.",
          pronunciation: "KYEH-roh een-ten-TAR, PEH-roh meh dah NER-byos",
          literal: "I-want to-try, but it gives me nerves.",
          why: "This is exactly intentar territory: Sam is choosing to make an effort despite uncertainty. Probar would make it sound more like testing the kayak."
        },
        {
          speaker: "Julián",
          target: "Hágale, yo voy al lado tuyo.",
          translation: "Go for it, I'll go beside you.",
          pronunciation: "AH-gah-leh, yoh boy al LAH-doh TOO-yoh",
          literal: "Do-it, I go to-the side yours.",
          why: "“Hágale” is Colombian encouragement: go ahead, give it a try, keep going. It is pushy only if the tone is pushy."
        },
        {
          speaker: "Sam",
          target: "Entonces intento una vuelta corta.",
          translation: "Then I'll try one short lap.",
          pronunciation: "en-TON-ses een-TEN-toh OO-nah BWEHL-tah KOR-tah",
          literal: "Then I-try a turn short.",
          why: "The small object makes the attempt manageable. Intento una vuelta corta is not heroic; it is a realistic first try."
        },
        {
          speaker: "Julián",
          target: "Primero prueba el remo aquí, sin salir.",
          translation: "First test the paddle here, without heading out.",
          pronunciation: "pree-MEH-roh PRWEH-bah el REH-moh ah-KEE, seen sah-LEER",
          literal: "First test the paddle here, without leaving.",
          why: "Now probar is right: he is testing the paddle, not attempting the whole trip. English says “try” for both, but Spanish switches verbs."
        },
        {
          speaker: "Sam",
          target: "Listo, lo pruebo aquí y después intento salir.",
          translation: "Okay, I'll test it here and then try to head out.",
          pronunciation: "LEES-toh, loh PRWEH-boh ah-KEE ee des-PWES een-TEN-toh sah-LEER",
          literal: "Ready, it I-test here and after I-try to-leave.",
          why: "The final line puts the split in one sentence: pruebo for a test, intento for the deliberate attempt."
        }
      ],
      vocabulary: [
        {
          term: "intentar",
          explanation:
            "To try in the sense of making an attempt. It carries intention, effort, and uncertainty about the result.",
          literal: "to attempt",
          useWhen:
            "You are deciding to do something that may or may not work: speak, enter, call, start, go out.",
          avoidWhen:
            "You are tasting food or testing an object. That is usually probar.",
          register: "neutral",
          region: "Universal Spanish; tratar de is often more conversational.",
          related: ["tratar de", "probar", "ensayar", "atreverse"],
          example: {
            target: "Quiero intentar.",
            translation: "I want to try."
          }
        },
        {
          term: "tratar de",
          explanation:
            "The most common spoken way to say try to do something, especially in casual conversation.",
          literal: "to treat of",
          useWhen:
            "You want everyday, unmarked speech: voy a tratar de llegar temprano, trata de llamar.",
          avoidWhen:
            "You need the cleaner noun-like idea of an attempt. Intentar can sound more deliberate.",
          register: "neutral informal",
          region: "General Colombian and widely used across Latin America.",
          related: ["intentar", "hacer el intento", "procurar", "ensayar"],
          example: {
            target: "Voy a tratar de remar derecho.",
            translation: "I'm going to try to paddle straight."
          }
        },
        {
          term: "probar",
          explanation:
            "To try by tasting, trying on, or testing something concrete.",
          literal: "to prove / test",
          useWhen:
            "Food, clothes, equipment, a chair, a route, or a small test before the real action.",
          avoidWhen:
            "The focus is the effort to do a full action. Then intentar or tratar de fits better.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["saborear", "medir", "testear", "ensayar"],
          example: {
            target: "Prueba el remo aquí.",
            translation: "Test the paddle here."
          }
        },
        {
          term: "hágale",
          explanation:
            "Colombian encouragement meaning go ahead, do it, keep going, or give it a try.",
          literal: "do it to it",
          useWhen:
            "Someone hesitates and you want to encourage action without giving a long speech.",
          avoidWhen:
            "The person has already said no. Then it becomes pressure instead of support.",
          register: "friendly informal",
          region: "Very Colombian; heard in many regions, not tied to one city.",
          related: ["dale", "anímate", "vamos", "sin miedo"],
          example: {
            target: "Hágale, yo voy al lado tuyo.",
            translation: "Go for it, I'll go beside you."
          }
        },
        {
          term: "me da nervios",
          explanation:
            "“It makes me nervous.” Spanish often says the situation gives you nerves.",
          literal: "it gives me nerves",
          useWhen:
            "Admitting mild fear or anxiety without turning it into a dramatic confession.",
          avoidWhen:
            "You are talking about a medical condition or sustained anxiety. Then be more specific.",
          register: "neutral",
          region: "General Colombian; “me da miedo” is stronger.",
          related: ["me da miedo", "me asusta", "me preocupa", "me siento nervioso"],
          example: {
            target: "Me da nervios salir solo.",
            translation: "Heading out alone makes me nervous."
          }
        },
        {
          term: "una vuelta corta",
          explanation:
            "A short lap, loop, or little outing. It makes an attempt feel bounded.",
          literal: "a turn short",
          useWhen:
            "You want to try an activity without committing to the full plan.",
          avoidWhen:
            "You mean a street corner turn. Context decides, and here it is an outing.",
          register: "neutral",
          region: "General Colombian.",
          related: ["un ratico", "un tramo corto", "una salida corta", "hasta allá no más"],
          example: {
            target: "Intento una vuelta corta.",
            translation: "I'll try one short lap."
          }
        },
        {
          term: "sin salir",
          explanation:
            "Without heading out. A practical safety phrase when the test stays near shore.",
          literal: "without leaving",
          useWhen:
            "You test a movement or object before committing to the larger action.",
          avoidWhen:
            "You mean without leaving a building; then the same words work, but the context changes.",
          register: "neutral",
          region: "General Colombian.",
          related: ["aquí mismo", "cerca", "sin alejarse", "primero en la orilla"],
          example: {
            target: "Prueba el remo aquí, sin salir.",
            translation: "Test the paddle here, without heading out."
          }
        }
      ],
      note:
        "English “try” is too broad for Spanish. Use intentar or tratar de for an attempted action; use probar for food, clothes, equipment, or a test. The Colombian “hágale” is the social push that often launches the attempt.",
      culture: [
        {
          label: "Encouragement can be very short",
          body:
            "“Hágale” may be the whole pep talk. It can mean “go ahead,” “keep going,” or “try it now,” depending on timing and tone. The word is not magic; the friendliness comes from the situation."
        },
        {
          label: "Taganga mornings matter",
          body:
            "The bay is calmer early, and people who work on the beach know the rhythm of wind and crowds. A cautious first attempt before the day gets loud is not overthinking. It is local practical knowledge."
        },
        {
          label: "A small attempt is still an attempt",
          body:
            "Sam does not have to declare bravery. “Intento una vuelta corta” is a very Colombian kind of reasonable courage: do a little, see how it goes, and let someone nearby keep an eye on you."
        },
        {
          label: "Trying equipment is not trying courage",
          body:
            "A paddle can be probado; the outing is intentado. Keeping that split helps you sound precise when English would reuse “try” and leave the listener to infer the difference."
        }
      ],
      pitfalls: [
        {
          mistake: "Using probar for every English “try”",
          whyItFails:
            "Probar is for tasting, trying on, or testing. If you are trying to do an action, intentar or tratar de is usually the better verb.",
          sayInstead: "Intento salir despacio."
        },
        {
          mistake: "Using intentar where tratar de would sound more natural",
          whyItFails:
            "Intentar is correct, but it can sound a little deliberate. In very casual speech, Colombians often reach for tratar de.",
          sayInstead: "Voy a tratar de remar derecho."
        },
        {
          mistake: "Hearing “hágale” as an order every time",
          whyItFails:
            "Tone decides. On the beach, said by an instructor who is helping you, it is encouragement to go on and try.",
          sayInstead: "Hear it as “go for it” when the tone is friendly."
        },
        {
          mistake: "Saying “intento el remo” for testing the paddle",
          whyItFails:
            "A paddle is an object you test, not an action you attempt. Spanish wants probar for that concrete trial.",
          sayInstead: "Pruebo el remo."
        }
      ],
      variations: [
        {
          form: "Quiero intentar.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The plainest way to say you want to make the attempt."
        },
        {
          form: "Voy a tratar de hacerlo despacio.",
          register: "neutral informal",
          region: "General Colombian",
          whenToUse: "The common spoken version for trying to do an action."
        },
        {
          form: "Primero pruebo el remo.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Testing a concrete thing before the attempt."
        },
        {
          form: "Hágale, intentemos una vuelta corta.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Encouraging someone into a small shared attempt."
        },
        {
          form: "Me da nervios, pero lo intento.",
          register: "honest informal",
          region: "General Colombian",
          whenToUse: "Admitting fear while still choosing to try."
        }
      ],
      prompt: "Sam says “Quiero intentar, pero me da nervios.” What does intentar mean here?",
      choices: [
        "He wants to make an attempt even though he feels nervous.",
        "He wants to taste the kayak before deciding anything.",
        "He wants to prove the instructor is completely wrong."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Julián says “primero prueba el remo.” Why is probar right here?",
          choices: [
            "Because the paddle is a concrete thing being tested.",
            "Because the whole kayak trip has already succeeded.",
            "Because probar always replaces intentar in Colombia."
          ],
          answer: 0,
          tests: "probar for testing objects"
        },
        {
          prompt: "Which sentence best fits a deliberate attempt at an action?",
          choices: [
            "Pruebo salir despacio en el kayak.",
            "Intento salir despacio en el kayak.",
            "Saboreo salir despacio en el kayak."
          ],
          answer: 1,
          tests: "intentar for trying to do something"
        },
        {
          prompt: "What does Julián's “hágale” do in this scene?",
          choices: [
            "It encourages Sam to go ahead and try.",
            "It orders Sam to buy the kayak immediately.",
            "It warns Sam that the beach is closed."
          ],
          answer: 0,
          tests: "hágale as Colombian encouragement"
        },
        {
          prompt: "Why might “voy a tratar de remar derecho” sound very natural?",
          choices: [
            "Because tratar de is very common for trying in speech.",
            "Because tratar de means tasting the paddle first.",
            "Because tratar de is only used in formal writing."
          ],
          answer: 0,
          tests: "tratar de as common spoken try"
        }
      ]
    },
    en: {
      title: "Intentar remar en Taganga",
      situation:
        "Samantha está en la playa de Taganga, cerca de Santa Marta, y mira un kayak con más ganas que seguridad. Un instructor joven le explica cómo entrar al agua. Samantha quiere decir en inglés que va a intentarlo, aunque todavía le dé nervios.",
      setting: {
        who: "Julián alquila kayaks en la playa, y Samantha es una principiante cuidadosa que sabe nadar pero nunca ha remado en mar abierto.",
        what: "Un primer intento de llevar un kayak más allá del borde tranquilo de la bahía.",
        when: "Temprano en la mañana, antes de que suba el viento y se llene la playa.",
        where: "Taganga, un pueblo de pescadores junto a Santa Marta, con cerros secos detrás de la bahía y lanchas pequeñas en la arena.",
        why: "Porque el inglés “try” cubre intentar, tratar de y probar. Samantha necesita oír cuándo “try” habla de un intento y cuándo habla de una prueba."
      },
      address: {
        form: "mixed",
        who: "Julián y Samantha usan el mismo “you”; la cercanía se entiende por el contexto relajado y las frases cortas.",
        why: "El inglés no tiene una decisión de tú, vos o usted. En esta escena, la naturalidad viene de “Ready?”, “go for it” y “I'll stay beside you.”",
        ifYouSwitch:
          "No puede cambiar de pronombre para subir o bajar el registro. Puede sonar más formal diciendo “Would you like to try?” o más casual diciendo “Want to try?”"
      },
      dialogue: [
        {
          speaker: "Julián",
          target: "Ready? If you want, we can try slowly.",
          translation: "¿Lista? Si quiere, intentamos despacio.",
          pronunciation: "RE-di. if yu uant, ui can trai SLOU-li",
          literal: "Lista. Si usted quiere, podemos intentar lentamente.",
          why: "“Try” sirve para el intento completo. El inglés no obliga a escoger entre intentar y tratar de en esta frase."
        },
        {
          speaker: "Samantha",
          target: "I want to try, but I'm nervous.",
          translation: "Quiero intentar, pero me da nervios.",
          pronunciation: "ai uant tu trai, bat aim NER-vos",
          literal: "Yo quiero intentar, pero estoy nerviosa.",
          why: "“I want to try” suena directo y natural. No necesita “to prove” ni “to test” porque aquí la acción es atreverse a hacer algo."
        },
        {
          speaker: "Julián",
          target: "Go for it. I'll stay beside you.",
          translation: "Hágale, yo voy al lado suyo.",
          pronunciation: "gou for it. ail stei bi-SAID yu",
          literal: "Vaya por ello. Me quedaré al lado de usted.",
          why: "“Go for it” hace el trabajo de “hágale” en esta escena: ánimo breve para que la otra persona se lance."
        },
        {
          speaker: "Samantha",
          target: "Then I'll try one short lap.",
          translation: "Entonces intento una vuelta corta.",
          pronunciation: "den ail trai uan short lap",
          literal: "Entonces intentaré una vuelta corta.",
          why: "“I'll try” apunta al intento futuro. La vuelta corta limita el riesgo y hace que la frase suene razonable."
        },
        {
          speaker: "Julián",
          target: "First, try the paddle here without heading out.",
          translation: "Primero prueba el remo aquí, sin salir.",
          pronunciation: "ferst, trai da PA-dol jir ui-DAUT JE-ding aut",
          literal: "Primero, pruebe el remo aquí sin salir.",
          why: "El mismo “try” ahora significa probar un objeto. El inglés usa una sola palabra donde el español cambia a probar."
        },
        {
          speaker: "Samantha",
          target: "Okay, I'll try it here and then try to head out.",
          translation: "Listo, lo pruebo aquí y después intento salir.",
          pronunciation: "ou-KEI, ail trai it jir and den trai tu jed aut",
          literal: "Listo, lo intentaré aquí y luego intentaré salir.",
          why: "Esta línea muestra la ambigüedad útil de “try”: “try it” es probarlo; “try to head out” es intentar salir."
        }
      ],
      vocabulary: [
        {
          term: "try",
          explanation:
            "El verbo inglés que cubre intentar, tratar de y probar. El contexto decide si habla de esfuerzo, prueba o comida.",
          literal: "intentar / probar",
          useWhen:
            "Quiere hacer un intento, probar un objeto, probarse ropa o probar comida.",
          avoidWhen:
            "Necesita ser muy preciso en un contexto técnico. Entonces “test,” “attempt,” o “taste” pueden evitar ambigüedad.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["attempt", "test", "taste", "try on"],
          example: {
            target: "I want to try.",
            translation: "Quiero intentar."
          }
        },
        {
          term: "try to",
          explanation:
            "La estructura para intentar hacer una acción. Después viene el verbo base: try to paddle, try to call, try to leave.",
          literal: "intentar a",
          useWhen:
            "El foco está en hacer una acción que quizá salga o quizá no.",
          avoidWhen:
            "El objeto concreto va directo después de try: try the paddle, try the soup.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["try to leave", "try to speak", "try to start", "try to sleep"],
          example: {
            target: "I'll try to head out.",
            translation: "Intento salir."
          }
        },
        {
          term: "try it",
          explanation:
            "Probarlo. Puede ser equipo, ropa, comida o un método, según el contexto.",
          literal: "intentarlo / probarlo",
          useWhen:
            "Usted prueba una cosa concreta o una manera concreta antes de decidir.",
          avoidWhen:
            "Quiere nombrar la acción completa. Entonces use “try to” más verbo.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["test it", "taste it", "try it on", "give it a try"],
          example: {
            target: "I'll try it here.",
            translation: "Lo pruebo aquí."
          }
        },
        {
          term: "go for it",
          explanation:
            "Ánimo breve para que alguien se lance: hágale, dele, inténtelo.",
          literal: "vaya por ello",
          useWhen:
            "Alguien duda y usted quiere animarlo sin discurso largo.",
          avoidWhen:
            "La persona ya dijo que no. Entonces puede sonar a presión.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["give it a try", "go ahead", "you can do it", "have a go"],
          example: {
            target: "Go for it. I'll stay beside you.",
            translation: "Hágale, yo voy al lado suyo."
          }
        },
        {
          term: "I'm nervous",
          explanation:
            "Estoy nervioso o nerviosa. Es más directo que la construcción española “me da nervios.”",
          literal: "estoy nerviosa",
          useWhen:
            "Admite miedo leve o ansiedad antes de hacer algo.",
          avoidWhen:
            "Habla de una condición médica o ansiedad permanente. Ahí necesita una frase más específica.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I'm scared", "I'm worried", "I'm anxious", "I'm not sure"],
          example: {
            target: "I want to try, but I'm nervous.",
            translation: "Quiero intentar, pero me da nervios."
          }
        },
        {
          term: "one short lap",
          explanation:
            "Una vuelta corta. Limita el intento y lo vuelve manejable.",
          literal: "una vuelta corta",
          useWhen:
            "Quiere probar una actividad sin comprometerse con el plan completo.",
          avoidWhen:
            "Habla de doblar en una esquina. “Lap” aquí es recorrido, no giro.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["a short ride", "a quick loop", "just a little way", "a short run"],
          example: {
            target: "I'll try one short lap.",
            translation: "Intento una vuelta corta."
          }
        },
        {
          term: "without heading out",
          explanation:
            "Sin salir hacia afuera o sin alejarse. En deportes acuáticos marca que la prueba se queda cerca.",
          literal: "sin dirigirse afuera",
          useWhen:
            "Prueba un movimiento o un objeto antes de comprometerse con la acción grande.",
          avoidWhen:
            "El contexto no tiene movimiento hacia afuera. Entonces “without leaving” puede ser más claro.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["near shore", "right here", "without leaving", "before going out"],
          example: {
            target: "Try the paddle here without heading out.",
            translation: "Prueba el remo aquí, sin salir."
          }
        }
      ],
      note:
        "El inglés “try” es más ancho que intentar. Puede ser hacer un intento, probar un remo, probarse una camisa o probar una sopa. Para entenderlo, mire lo que viene después: “try to” más verbo suele ser intentar; “try” más cosa suele ser probar.",
      culture: [
        {
          label: "El ánimo puede ser cortico",
          body:
            "“Go for it” puede ser todo el discurso de ánimo. Como “hágale,” depende del tono y del momento. Dicho por alguien que lo acompaña, empuja con amabilidad; dicho después de un no claro, presiona."
        },
        {
          label: "Las mañanas de Taganga importan",
          body:
            "La bahía suele estar más calmada temprano, y la gente que trabaja en la playa conoce el ritmo del viento y los grupos. Intentar antes de que el día se alborote no es miedo: es sentido práctico."
        },
        {
          label: "Un intento pequeño sigue siendo intento",
          body:
            "Samantha no promete valentía. “I'll try one short lap” suena razonable: haga un tramo corto, vea cómo le va y deje que alguien vaya cerca. El inglés también puede hacer que el intento suene medido."
        },
        {
          label: "El equipo se prueba; la salida se intenta",
          body:
            "El español obliga a separar probar e intentar. El inglés no. Por eso “try it” y “try to head out” pueden vivir en la misma oración y significar cosas distintas."
        }
      ],
      pitfalls: [
        {
          mistake: "“I want prove.”",
          whyItFails:
            "“Prove” no es probar en el sentido de intentar. Significa demostrar que algo es cierto. Para una acción nueva necesita “try.”",
          sayInstead: "I want to try."
        },
        {
          mistake: "“I try to the paddle.”",
          whyItFails:
            "“Try to” necesita un verbo después. Si lo que viene es una cosa, diga “try the paddle” o “try it.”",
          sayInstead: "I'll try the paddle."
        },
        {
          mistake: "Oír “go for it” como una orden dura siempre",
          whyItFails:
            "En una escena de apoyo, “go for it” es ánimo. El tono decide si es invitación o presión.",
          sayInstead: "Hear it as “hágale” when the tone is friendly."
        },
        {
          mistake: "“I am nervousness.”",
          whyItFails:
            "El inglés usa el adjetivo “nervous” con be. “Nervousness” es el sustantivo y no describe directamente a la persona así.",
          sayInstead: "I'm nervous."
        }
      ],
      variations: [
        {
          form: "I want to try.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "La manera más simple de decir que quiere hacer el intento."
        },
        {
          form: "I'll try to do it slowly.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Cuando el intento lleva otra acción después de “try to.”"
        },
        {
          form: "First, I'll try the paddle.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Probar una cosa concreta antes del intento grande."
        },
        {
          form: "Go for it. Let's try one short lap.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Animar a alguien a un intento pequeño y compartido."
        },
        {
          form: "I'm nervous, but I'll try.",
          register: "honest informal",
          region: "Inglés universal",
          whenToUse: "Admitir miedo y aun así decidir hacer el intento."
        }
      ],
      prompt: "Samantha dice “I want to try, but I'm nervous.” ¿Qué significa “try” aquí?",
      choices: [
        "Quiere hacer el intento aunque se sienta nerviosa.",
        "Quiere saborear el kayak antes de decidir.",
        "Quiere demostrar que el instructor está equivocado."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Julián dice “try the paddle.” ¿Por qué “try” funciona aquí?",
          choices: [
            "Porque el remo es una cosa concreta que se prueba.",
            "Porque toda la salida en kayak ya salió perfecta.",
            "Porque “try” nunca significa intentar en inglés."
          ],
          answer: 0,
          tests: "“try” más objeto como probar"
        },
        {
          prompt: "¿Cuál frase inglesa marca mejor un intento de hacer una acción?",
          choices: [
            "I'll try the head out slowly.",
            "I'll try to head out slowly.",
            "I'll taste to head out slowly."
          ],
          answer: 1,
          tests: "“try to” más verbo para intentar"
        },
        {
          prompt: "¿Qué hace “go for it” en esta escena?",
          choices: [
            "Anima a Samantha a seguir y probar.",
            "Le ordena comprar el kayak inmediatamente.",
            "Le avisa que la playa ya está cerrada."
          ],
          answer: 0,
          tests: "“go for it” como ánimo"
        },
        {
          prompt: "¿Por qué “try” puede confundir a un hispanohablante?",
          choices: [
            "Porque cubre intentar, tratar de y probar.",
            "Porque sólo aparece en inglés muy formal.",
            "Porque siempre significa demostrar una verdad."
          ],
          answer: 0,
          tests: "amplitud de “try” frente al español"
        }
      ]
    }
  },
  {
    id: "changing-a-bill-in-san-antonio",
    level: "Starter · Sorting things out",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "familiar",
    pathways: ["foundation"],
    verb: "cambiar",
    review: "pending",
    es: {
      title: "Cambiar un billete en San Antonio",
      situation:
        "Nico está en una panadería de San Antonio, en Cali, antes de tomar un bus. Sólo tiene un billete grande y necesita monedas. La panadera le habla con vos y él tiene que pedir cambio sin pedir comprar nada todavía.",
      setting: {
        who: "Lina works the counter at a neighborhood bakery, and Nico is carrying a large bill that will not help on the bus.",
        what: "A small money errand: changing a bill, asking about small change, and not confusing that with changing clothes or changing one's mind.",
        when: "Mid-afternoon, after lunch and before the bakery fills again for coffee and bread.",
        where: "Cali, in San Antonio, a hilly old neighborhood of cafés, bakeries, and people stopping for one quick thing.",
        why: "Because cambiar is a basic verb with several practical branches: change a thing, change clothes with cambiarse, change topic or opinion, and change money."
      },
      address: {
        form: "vos",
        who: "Lina uses vos with Nico, and Nico uses vos back after hearing it.",
        why: "Cali is one of the Colombian places where vos is alive in everyday speech. For you, copying it after someone uses it can sound friendly and local, as long as you keep the sentence simple.",
        ifYouSwitch:
          "Usted would be safe and polite, but less warm in this exact exchange. Tú would be understood, though it would miss the caleño rhythm of the conversation."
      },
      dialogue: [
        {
          speaker: "Lina",
          target: "Buenas, ¿qué necesitás?",
          translation: "Hi, what do you need?",
          pronunciation: "BWEH-nas, keh neh-seh-see-TAS",
          literal: "Good ones, what need-you?",
          why: "The stressed final syllable in necesitás is voseo. It tells you this is Cali warmth, not a grammar mistake."
        },
        {
          speaker: "Nico",
          target: "¿Me cambiás este billete, por favor?",
          translation: "Can you change this bill for me, please?",
          pronunciation: "meh kahm-BYAS ES-teh bee-YEH-teh, por fah-BOR",
          literal: "Me change-you this bill, please?",
          why: "This is the money sense of cambiar. Nico is not changing the bill into a different object; he wants smaller money for the same value."
        },
        {
          speaker: "Lina",
          target: "Uy, no tengo cambio para uno de cincuenta.",
          translation: "Oof, I don't have change for a fifty.",
          pronunciation: "uy, noh TEN-goh KAHM-byoh PAH-rah OO-noh deh seen-KWEN-tah",
          literal: "Oof, I don't-have change for one of fifty.",
          why: "Cambio is the noun: change, small money. It is one of the most useful everyday words in Colombia."
        },
        {
          speaker: "Nico",
          target: "¿Y tenés sencillo para el bus?",
          translation: "And do you have small change for the bus?",
          pronunciation: "ee teh-NES sen-SEE-yoh PAH-rah el boos",
          literal: "And have-you simple for the bus?",
          why: "Sencillo is a very Colombian way to ask for small change or smaller bills. Literally it means simple, but here it means usable small money."
        },
        {
          speaker: "Lina",
          target: "Te puedo cambiar veinte y el resto en monedas.",
          translation: "I can change twenty for you and the rest in coins.",
          pronunciation: "teh PWEH-doh kahm-BYAR BEN-teh ee el RES-toh en moh-NEH-das",
          literal: "You I-can change twenty and the rest in coins.",
          why: "Cambiar takes the amount or bill directly. The sentence stays practical and compact because everyone understands the money frame."
        },
        {
          speaker: "Nico",
          target: "Perfecto. Después me cambio la camiseta, pero primero cambio el billete.",
          translation: "Perfect. Later I'll change my shirt, but first I change the bill.",
          pronunciation: "per-FEK-toh. des-PWES meh KAHM-byoh lah kah-mee-SEH-tah, PEH-roh pree-MEH-roh KAHM-byoh el bee-YEH-teh",
          literal: "Perfect. Later myself I-change the shirt, but first I-change the bill.",
          why: "One line shows the split: cambiarse for changing clothes, cambiar el billete for changing money."
        }
      ],
      vocabulary: [
        {
          term: "cambiar",
          explanation:
            "To change, swap, exchange, or break money into smaller amounts. The object tells you which sense is active.",
          literal: "to change",
          useWhen:
            "Changing a bill, changing a plan, changing a topic, changing an item, or making something different.",
          avoidWhen:
            "You mean changing your clothes as a whole routine. Then cambiarse is usually the natural verb.",
          register: "neutral",
          region: "Universal Spanish; the money use is especially important for visitors.",
          related: ["cambiarse", "cambio", "sencillo", "monedas"],
          example: {
            target: "¿Me cambiás este billete?",
            translation: "Can you change this bill for me?"
          }
        },
        {
          term: "cambiarse",
          explanation:
            "To change clothes. The reflexive form points the action back to the person getting changed.",
          literal: "to change oneself",
          useWhen:
            "You are changing outfits, shirts, shoes, or getting changed before another activity.",
          avoidWhen:
            "You are changing money or changing a plan. Those usually use cambiar without se.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["me cambio", "cámbiate", "ropa limpia", "quitarse"],
          example: {
            target: "Después me cambio la camiseta.",
            translation: "Later I'll change my shirt."
          }
        },
        {
          term: "cambio",
          explanation:
            "Change, as a noun: the small money returned or available after a payment or exchange.",
          literal: "change",
          useWhen:
            "Asking whether someone can break a bill, give coins, or return the difference.",
          avoidWhen:
            "You mean a change in personality or weather. Then the same word can work, but the context is not money.",
          register: "neutral",
          region: "General Colombian.",
          related: ["vueltas", "monedas", "billetes pequeños", "sencillo"],
          example: {
            target: "No tengo cambio.",
            translation: "I don't have change."
          }
        },
        {
          term: "sencillo",
          explanation:
            "Small change or smaller bills. This money sense is very Colombian and extremely useful.",
          literal: "simple",
          useWhen:
            "You need money that works for a bus, taxi, bakery, or small purchase.",
          avoidWhen:
            "You are outside a money context. Then sencillo just means simple or plain.",
          register: "friendly neutral",
          region: "Very Colombian in the money sense.",
          related: ["menudo", "monedas", "billetes pequeños", "cambio"],
          example: {
            target: "¿Tenés sencillo para el bus?",
            translation: "Do you have small change for the bus?"
          }
        },
        {
          term: "billete",
          explanation:
            "A banknote or bill. In this scene the size of the bill is the problem.",
          literal: "ticket / bill",
          useWhen:
            "Talking about paper money, especially when asking someone to break it.",
          avoidWhen:
            "You mean a bus or event ticket in Colombia. Then boleta or pasaje may be clearer, depending on the situation.",
          register: "neutral",
          region: "General Colombian.",
          related: ["moneda", "efectivo", "uno de cincuenta", "plata"],
          example: {
            target: "Este billete es muy grande.",
            translation: "This bill is too large."
          }
        },
        {
          term: "monedas",
          explanation:
            "Coins. Often the exact thing you need for transport, tips, or very small purchases.",
          literal: "coins",
          useWhen:
            "You need small, spendable money instead of a large note.",
          avoidWhen:
            "The place only accepts cards or electronic payments. Then coins will not solve the problem.",
          register: "neutral",
          region: "General Colombian.",
          related: ["sencillo", "cambio", "efectivo", "vueltas"],
          example: {
            target: "El resto en monedas.",
            translation: "The rest in coins."
          }
        },
        {
          term: "cambiar de opinión",
          explanation:
            "To change your mind. Spanish uses cambiar de before opinión and tema.",
          literal: "to change of opinion",
          useWhen:
            "Your decision changes, or the conversation moves to a different subject.",
          avoidWhen:
            "You are changing an object directly. Then do not add de: cambiar el billete.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["cambiar de tema", "decidir otra cosa", "repensar", "echarse para atrás"],
          example: {
            target: "Cambié de opinión.",
            translation: "I changed my mind."
          }
        }
      ],
      note:
        "Cambiar is useful because the object does so much work. Cambiar un billete is money; cambiarse is clothes; cambiar de opinión or de tema uses de. In Colombia, sencillo is the word that makes the money branch come alive.",
      culture: [
        {
          label: "Small change is a real errand",
          body:
            "Visitors often treat breaking a bill as a minor detail until a bus, taxi, bakery, or street stall cannot use a large note. Asking for cambio or sencillo is not awkward; it is a normal practical request."
        },
        {
          label: "Caleño vos is everyday warmth",
          body:
            "In Cali, vos can be ordinary and friendly in shops, cafés, and neighborhood conversations. You do not have to use it first, but hearing “tenés” or “necesitás” should not surprise you."
        },
        {
          label: "Sencillo is not just simple",
          body:
            "Outside money talk, sencillo can mean simple, plain, or unpretentious. At a counter, “¿tiene sencillo?” almost always means smaller money. The context does the work."
        },
        {
          label: "Changing money is not necessarily buying",
          body:
            "Nico has not ordered bread yet. He has asked for help with cash. In a neighborhood bakery, that can be fine if the tone is polite and the amount is reasonable."
        }
      ],
      pitfalls: [
        {
          mistake: "Using cambiarse for changing a bill",
          whyItFails:
            "Cambiarse points to changing clothes or getting changed. Money takes cambiar without the reflexive pronoun.",
          sayInstead: "¿Me cambia este billete?"
        },
        {
          mistake: "Saying “no tengo sencillo” only means “I'm not simple”",
          whyItFails:
            "In a money context, sencillo means small change or smaller bills. The literal adjective is not the meaning that matters here.",
          sayInstead: "No tengo sencillo para el bus."
        },
        {
          mistake: "Saying “cambiar opinión” without de",
          whyItFails:
            "For mind and topic, Spanish uses cambiar de opinión and cambiar de tema. The de is part of the pattern.",
          sayInstead: "Cambié de opinión."
        },
        {
          mistake: "Using tú endings after choosing vos in Cali",
          whyItFails:
            "If you answer with vos, the verb ending changes too: tenés, necesitás, cambiás. Mixing forms can sound hesitant or learned from two textbooks at once.",
          sayInstead: "¿Tenés sencillo?"
        }
      ],
      variations: [
        {
          form: "¿Me cambiás este billete?",
          register: "friendly informal",
          region: "Cali and voseo areas",
          whenToUse: "After the other person has used vos and the tone is relaxed."
        },
        {
          form: "¿Me cambia este billete, por favor?",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "The safest visitor version with usted in any shop."
        },
        {
          form: "No tengo cambio.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Explaining that you cannot break a bill or return small money."
        },
        {
          form: "¿Tiene sencillo para el bus?",
          register: "friendly formal",
          region: "Very Colombian",
          whenToUse: "Asking for small spendable money, especially for transport."
        },
        {
          form: "Me cambio la camiseta y salgo.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Changing clothes, not money."
        }
      ],
      prompt: "Nico asks “¿Me cambiás este billete?” What is he asking for?",
      choices: [
        "He wants the large bill broken into smaller money.",
        "He wants to change clothes before leaving.",
        "He wants to change the conversation topic."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Lina says “no tengo cambio.” What does cambio mean here?",
          choices: [
            "Small money available for a bill.",
            "A different shirt for the afternoon.",
            "A new opinion about the customer."
          ],
          answer: 0,
          tests: "cambio as money change"
        },
        {
          prompt: "Which sentence is the safe usted version for a visitor?",
          choices: [
            "¿Me cambia este billete, por favor?",
            "¿Me cambiás este billete, por favor?",
            "¿Me cambio este billete, por favor?"
          ],
          answer: 0,
          tests: "usted form for changing a bill"
        },
        {
          prompt: "Why does “¿tenés sencillo?” make sense in Cali?",
          choices: [
            "Vos is common there, and sencillo means small change.",
            "Tú is forbidden there, and sencillo means expensive bread.",
            "Usted is impossible there, and sencillo means a bus ticket."
          ],
          answer: 0,
          tests: "Cali voseo plus Colombian sencillo"
        },
        {
          prompt: "Which sentence is about changing clothes, not money?",
          choices: [
            "Cambio este billete ahora.",
            "Cambio de opinión mañana.",
            "Me cambio la camiseta después."
          ],
          answer: 2,
          tests: "cambiarse for clothes"
        }
      ]
    },
    en: {
      title: "Cambiar un billete en San Antonio",
      situation:
        "Natalia está en una panadería de San Antonio, en Cali, antes de tomar un bus. Sólo tiene un billete grande y necesita monedas. La panadera le habla con confianza y ella tiene que pedir cambio en inglés sin confundir dinero, ropa y opinión.",
      setting: {
        who: "Lina atiende el mostrador de una panadería de barrio, y Natalia carga un billete grande que no le sirve para el bus.",
        what: "Una vuelta pequeña de plata: cambiar un billete, preguntar por sencillo y no confundir eso con cambiarse de ropa o cambiar de opinión.",
        when: "A media tarde, después del almuerzo y antes de que la panadería vuelva a llenarse para café y pan.",
        where: "Cali, en San Antonio, un barrio viejo de lomas, cafés, panaderías y gente que para por una sola cosa rápida.",
        why: "Porque “change” es tan amplio como cambiar: puede hablar de dinero, ropa, opinión, tema o cualquier cosa que se vuelve distinta."
      },
      address: {
        form: "mixed",
        who: "Lina y Natalia usan el mismo “you”; la confianza aparece en “can you” y en el tono, no en otro pronombre.",
        why: "El inglés no tiene vos. Para sonar amable en una tienda, usted maneja el registro con “please,” una pregunta completa y una sonrisa audible.",
        ifYouSwitch:
          "No hay cambio de pronombre. “Can you change this bill for me?” suena normal; “Change this bill” suena a orden."
      },
      dialogue: [
        {
          speaker: "Lina",
          target: "Hi, what do you need?",
          translation: "Buenas, ¿qué necesitás?",
          pronunciation: "jai, uat du yu nid",
          literal: "Hola, ¿qué necesita usted?",
          why: "“What do you need?” puede sonar directo, pero en una tienda pequeña funciona como apertura normal si el tono es amable."
        },
        {
          speaker: "Natalia",
          target: "Can you change this bill for me, please?",
          translation: "¿Me cambiás este billete, por favor?",
          pronunciation: "can yu cheinch dis bil for mi, plis",
          literal: "¿Puede usted cambiar este billete para mí, por favor?",
          why: "Este es el uso de dinero de “change.” La frase no habla de ropa ni de opinión; el objeto “bill” activa la idea de sencillo."
        },
        {
          speaker: "Lina",
          target: "Oof, I don't have change for a fifty.",
          translation: "Uy, no tengo cambio para uno de cincuenta.",
          pronunciation: "uf, ai dont jav cheinch for a FIF-ti",
          literal: "Uy, no tengo cambio para un cincuenta.",
          why: "“Change” como sustantivo es sencillo o vueltas. La misma palabra puede ser verbo y sustantivo, así que el lugar en la frase importa."
        },
        {
          speaker: "Natalia",
          target: "Do you have small change for the bus?",
          translation: "¿Y tenés sencillo para el bus?",
          pronunciation: "du yu jav smol cheinch for da bos",
          literal: "¿Tiene usted cambio pequeño para el bus?",
          why: "“Small change” traduce muy bien sencillo en este contexto. “Simple money” sería traducción literal y no suena natural."
        },
        {
          speaker: "Lina",
          target: "I can change twenty and give you the rest in coins.",
          translation: "Te puedo cambiar veinte y el resto en monedas.",
          pronunciation: "ai can cheinch TUEN-ti and guiv yu da rest in coins",
          literal: "Puedo cambiar veinte y darle el resto en monedas.",
          why: "El objeto mantiene claro el sentido. “Change twenty” es convertir ese valor en dinero más pequeño."
        },
        {
          speaker: "Natalia",
          target: "Perfect. Later I'll change my shirt, but first I'll change the bill.",
          translation: "Perfecto. Después me cambio la camiseta, pero primero cambio el billete.",
          pronunciation: "PER-fekt. LEI-ter ail cheinch mai shert, bat ferst ail cheinch da bil",
          literal: "Perfecto. Después cambiaré mi camiseta, pero primero cambiaré el billete.",
          why: "El inglés usa “change” en los dos lados y deja que los objetos expliquen: shirt es ropa, bill es dinero."
        }
      ],
      vocabulary: [
        {
          term: "change",
          explanation:
            "Cambiar, cambiarse o cambio, según la frase. El inglés usa la misma palabra para verbo y sustantivo.",
          literal: "cambiar / cambio",
          useWhen:
            "Habla de dinero, ropa, planes, opinión, tema o cualquier cosa que se vuelve distinta.",
          avoidWhen:
            "Quiere decir intercambiar turnos o mensajes de manera más específica. Entonces “swap” o “exchange” pueden ser mejores.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["exchange", "swap", "coins", "small change"],
          example: {
            target: "Can you change this bill?",
            translation: "¿Me cambia este billete?"
          }
        },
        {
          term: "change my shirt",
          explanation:
            "Cambiarme la camiseta. En inglés no se usa reflexivo para esta idea cotidiana.",
          literal: "cambiar mi camisa",
          useWhen:
            "Habla de cambiarse una prenda o ponerse ropa distinta.",
          avoidWhen:
            "Habla de dinero. Ahí el objeto será “bill,” “money,” o “coins.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["change clothes", "get changed", "put on a clean shirt", "switch shirts"],
          example: {
            target: "I'll change my shirt later.",
            translation: "Después me cambio la camiseta."
          }
        },
        {
          term: "change",
          explanation:
            "Cambio como sustantivo: monedas o billetes pequeños disponibles después de pagar o cambiar un billete.",
          literal: "cambio",
          useWhen:
            "Pregunta si alguien puede devolver vueltas, dar monedas o romper un billete.",
          avoidWhen:
            "El contexto no es dinero. Entonces “change” puede significar modificación, no monedas.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["small change", "coins", "cash", "the rest"],
          example: {
            target: "I don't have change.",
            translation: "No tengo cambio."
          }
        },
        {
          term: "small change",
          explanation:
            "Sencillo: monedas o billetes pequeños que sí sirven para una compra o un bus.",
          literal: "cambio pequeño",
          useWhen:
            "Necesita plata fácil de usar para transporte, propinas o compras pequeñas.",
          avoidWhen:
            "Habla de una modificación pequeña en un plan. Ahí “a small change” significa otra cosa.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["coins", "singles", "smaller bills", "cash"],
          example: {
            target: "Do you have small change?",
            translation: "¿Tiene sencillo?"
          }
        },
        {
          term: "bill",
          explanation:
            "Billete en inglés norteamericano. También puede significar cuenta, así que el contexto de dinero en efectivo importa.",
          literal: "billete / cuenta",
          useWhen:
            "Habla de papel moneda, especialmente al pedir que lo cambien por valores más pequeños.",
          avoidWhen:
            "Está en un restaurante hablando de la cuenta; ahí “bill” no es un billete físico.",
          register: "neutral",
          region: "Inglés norteamericano; en inglés británico suele decirse “note.”",
          related: ["note", "cash", "a fifty", "paper money"],
          example: {
            target: "This bill is too large.",
            translation: "Este billete es muy grande."
          }
        },
        {
          term: "coins",
          explanation:
            "Monedas. En una vuelta pequeña pueden ser más útiles que un billete grande.",
          literal: "monedas",
          useWhen:
            "Necesita plata menuda para transporte, propina o una compra muy pequeña.",
          avoidWhen:
            "El lugar sólo acepta tarjeta o pagos digitales. Las monedas no arreglan ese problema.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["small change", "cash", "the rest", "quarters"],
          example: {
            target: "The rest in coins.",
            translation: "El resto en monedas."
          }
        },
        {
          term: "change my mind",
          explanation:
            "Cambiar de opinión. El inglés usa posesivo: my mind, your mind, her mind.",
          literal: "cambiar mi mente",
          useWhen:
            "Su decisión cambia o decide otra cosa.",
          avoidWhen:
            "Sólo cambia de tema. Entonces diga “change the subject.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["change the subject", "decide differently", "think again", "back out"],
          example: {
            target: "I changed my mind.",
            translation: "Cambié de opinión."
          }
        }
      ],
      note:
        "“Change” se entiende por sus vecinos. “Change this bill” es dinero; “change my shirt” es ropa; “change my mind” es opinión; “change the subject” es tema. Para traducirlo bien, no mire sólo la palabra: mire el objeto.",
      culture: [
        {
          label: "El sencillo es una vuelta real",
          body:
            "Un visitante a veces cree que cambiar un billete es un detalle menor hasta que el bus, el taxi, la panadería o un puesto no puede recibir uno grande. Pedir “small change” es una necesidad práctica, no una vergüenza."
        },
        {
          label: "El inglés no tiene vos caleño",
          body:
            "La calidez que en Cali puede ir en “tenés” no aparece en el pronombre inglés. Sale por otro lado: una pregunta completa, “please,” tono amable y no dar órdenes secas."
        },
        {
          label: "“Small change” no siempre es plata",
          body:
            "En una panadería, “small change” casi seguro es sencillo. En una reunión, “a small change” puede ser una modificación menor del plan. El artículo y el contexto separan los sentidos."
        },
        {
          label: "Cambiar dinero no siempre es comprar",
          body:
            "Natalia todavía no ha pedido pan. Pidió ayuda con efectivo. En una panadería de barrio eso puede sonar normal si la frase es cortés y el monto no le vacía la caja a quien atiende."
        }
      ],
      pitfalls: [
        {
          mistake: "“Can you change me this bill?”",
          whyItFails:
            "Se entiende a veces, pero el orden natural pone “this bill” justo después de “change,” y “for me” al final.",
          sayInstead: "Can you change this bill for me?"
        },
        {
          mistake: "“I don't have simple.”",
          whyItFails:
            "Sencillo como dinero no se traduce con “simple.” En inglés necesita “change” o “small change.”",
          sayInstead: "I don't have small change."
        },
        {
          mistake: "“I change of opinion.”",
          whyItFails:
            "El inglés no copia el “de” de cambiar de opinión. Usa “change my mind,” con posesivo.",
          sayInstead: "I changed my mind."
        },
        {
          mistake: "“I'll change me the shirt.”",
          whyItFails:
            "El inglés no usa reflexivo para cambiarse de ropa en una frase normal. El posesivo marca la prenda.",
          sayInstead: "I'll change my shirt."
        }
      ],
      variations: [
        {
          form: "Can you change this bill for me?",
          register: "friendly neutral",
          region: "Inglés universal",
          whenToUse: "La petición normal para cambiar un billete por plata más pequeña."
        },
        {
          form: "Could you change this bill, please?",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Una versión más cortés para cualquier tienda."
        },
        {
          form: "I don't have change.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Explicar que no tiene monedas o billetes pequeños."
        },
        {
          form: "Do you have small change for the bus?",
          register: "friendly neutral",
          region: "Inglés universal",
          whenToUse: "Pedir sencillo útil para transporte."
        },
        {
          form: "I'll change my shirt and go out.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Cambiarse de ropa, no cambiar dinero."
        }
      ],
      prompt: "Natalia asks “Can you change this bill for me?” ¿Qué está pidiendo?",
      choices: [
        "Quiere convertir el billete grande en plata más pequeña.",
        "Quiere cambiarse de ropa antes de salir.",
        "Quiere cambiar el tema de conversación."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Lina says “I don't have change.” ¿Qué significa “change” aquí?",
          choices: [
            "Plata pequeña disponible para un billete.",
            "Una camisa distinta para la tarde.",
            "Una nueva opinión sobre la cliente."
          ],
          answer: 0,
          tests: "“change” como sencillo o vueltas"
        },
        {
          prompt: "¿Cuál frase inglesa pide cambiar un billete con orden natural?",
          choices: [
            "Can you change this bill for me?",
            "Can you change me this bill?",
            "Can you change myself this bill?"
          ],
          answer: 0,
          tests: "orden natural con “change this bill”"
        },
        {
          prompt: "¿Por qué “small change” traduce bien “sencillo” en la panadería?",
          choices: [
            "Porque significa monedas o billetes pequeños.",
            "Porque significa una cuenta muy sencilla.",
            "Porque significa una opinión fácil."
          ],
          answer: 0,
          tests: "“small change” como dinero pequeño"
        },
        {
          prompt: "¿Cuál frase habla de ropa, no de dinero?",
          choices: [
            "I'll change this bill now.",
            "I'll change my mind tomorrow.",
            "I'll change my shirt later."
          ],
          answer: 2,
          tests: "“change my shirt” para cambiarse"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/23-foundation-sorting-things-out.js");
