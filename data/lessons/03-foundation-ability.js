/*
 * Lesson block: foundation / ability, requests and reported speech.
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
    id: "asking-the-portero-for-a-hand",
    level: "Starter · Home and neighbourhood",
    skills: ["speaking", "listening", "context"],
    domain: "home",
    register: "polite service",
    pathways: ["foundation"],
    verb: "poder",
    review: "pending",
    es: {
      title: "Pedirle una mano al portero",
      situation:
        "Alex acaba de mudarse a un apartamento en Bogotá y no logra conectar la pipeta del gas para cocinar. Baja a la portería a pedirle ayuda a Don Jairo, el portero, que lleva años en el edificio. Tiene que pedir el favor con cortesía, explicar qué no puede hacer y agradecer — todo en un par de minutos, sin sonar mandón.",
      setting: {
        who: "Don Jairo has been the daytime portero for eleven years and knows every pipe and valve in the building. Alex moved in four days ago and has barely unpacked.",
        what: "A quick request for help connecting the gas cylinder, made at the porter's desk on the way past.",
        when: "A weekday morning, just before Alex wants to make lunch and discovers the stove is dead.",
        where: "Bogotá, a mid-rise block in Chapinero where most flats cook on a refillable gas cylinder rather than piped gas.",
        why: "Because the portero is the person Alex will rely on for parcels, keys, leaks and small emergencies for years. How he asks for this first favour sets the tone for all of them."
      },
      address: {
        form: "usted",
        who: "Don Jairo uses usted with Alex, and Alex uses usted back — the normal footing between a resident and the portero.",
        why: "In Bogotá usted is the safe default with anyone in a service role, and with someone older it is close to obligatory. It is respectful without being cold, and it keeps a comfortable distance while the relationship is still new.",
        ifYouSwitch:
          "Jumping to tú because Don Jairo is warm would sound like Alex had promoted himself to old friend on day four. Vos is not really a Bogotá form; using it here would just sound odd rather than familiar."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Don Jairo, ¿me puede colaborar con una cosita?",
          translation: "Don Jairo, could you give me a hand with something?",
          pronunciation: "don HAI-roh, me PWEH-deh ko-la-bo-RAR kon OO-na ko-SEE-ta",
          literal: "Don Jairo, me you-can collaborate with a little-thing?",
          why: "“¿Me puede colaborar?” is the Colombian workhorse for asking a favour. Literally it says “can you collaborate with me”, but it functions as “would you help me” — softer and warmer than a bare “¿me ayuda?”, which can sound like an instruction rather than a request."
        },
        {
          speaker: "Don Jairo",
          target: "Claro que sí, vecino. ¿En qué le colaboro?",
          translation: "Of course, neighbour. What can I help you with?",
          pronunciation: "KLA-roh ke see, beh-SEE-noh. en ke le ko-la-BO-roh",
          literal: "Clear that yes, neighbour. In what you I-collaborate?",
          why: "He answers the favour-frame with the same verb, colaborar, now in the yo form. Notice he keeps usted — “le colaboro”, not “te colaboro” — because the portero and a resident almost always hold usted in both directions, however friendly the tone."
        },
        {
          speaker: "Alex",
          target: "No puedo conectar la pipeta del gas. No sé cómo se hace.",
          translation: "I can't connect the gas cylinder. I don't know how it's done.",
          pronunciation: "no PWEH-doh ko-nek-TAR la pee-PEH-ta del gas. no se KO-moh se AH-seh",
          literal: "Not I-can connect the cylinder of-the gas. Not I-know how itself does.",
          why: "Two different “can'ts” hide in one breath. “No puedo” is being unable in the moment; “no sé cómo” is never having learnt the skill. Spanish keeps poder and saber apart exactly where English collapses both into a single “I can't”."
        },
        {
          speaker: "Don Jairo",
          target: "Tranquilo. Yo sí puedo, eso es facilito. Subo en un momentico.",
          translation: "No worries. I can do it, that's dead easy. I'll come up in a minute.",
          pronunciation: "tran-KEE-loh. yo see PWEH-doh, EH-soh es fa-see-LEE-toh. SOO-boh en oon mo-men-TEE-koh",
          literal: "Calm. I yes I-can, that is easy-little. I-go-up in a moment-little.",
          why: "“Yo sí puedo” sets his ability against Alex's inability, and the “sí” carries the stress English would put on the verb. “Momentico”, the diminutive of momento, promises soon without committing to now — a very Colombian softening of time."
        },
        {
          speaker: "Alex",
          target: "Muchas gracias. ¿Y me regala el número de la administración?",
          translation: "Thank you so much. And could you give me the building office's number?",
          pronunciation: "MOO-chas GRA-syas. ee me re-GA-la el NOO-me-ro de la ad-mi-nis-tra-SYON",
          literal: "Many thanks. And me you-gift the number of the administration?",
          why: "“¿Me regala…?” literally offers a gift, yet nobody expects a present — it is the gentlest way to ask for something small. A phone number, a bag in a shop, a minute of someone's time: all of them are requested with this same verb, regalar."
        },
        {
          speaker: "Don Jairo",
          target: "Con mucho gusto. Deme un segundo y ya se lo paso.",
          translation: "Happily. Give me a second and I'll pass it to you.",
          pronunciation: "kon MOO-choh GOOS-toh. DEH-meh oon se-GOON-doh ee ya se lo PA-so",
          literal: "With much pleasure. Give-me a second and already it to-you I-pass.",
          why: "“Con mucho gusto” is the standard Colombian “you're welcome / with pleasure”, far more common than “de nada” in a service exchange. “Ya se lo paso” uses “ya” to mean right now — a near-future promise Colombians make constantly."
        }
      ],
      vocabulary: [
        {
          term: "poder",
          explanation:
            "The verb of ability and permission — being able to do something, or being allowed to. It also softens instructions: “¿puede…?” turns an order into a question.",
          literal: "to be able to / can",
          useWhen:
            "Saying you are or aren't capable of something right now, asking whether something is possible, or making a polite request out of a bare command.",
          avoidWhen:
            "Talking about a learned skill you have in general — driving, swimming, cooking. That is saber's job, and using poder there sounds like you mean you are physically able at this exact instant.",
          register: "neutral",
          region: "Universal Spanish; the ability-versus-skill split with saber works the same in every dialect.",
          related: ["saber", "lograr", "ser capaz de", "alcanzar a"],
          example: {
            target: "No puedo conectar la pipeta.",
            translation: "I can't connect the gas cylinder."
          }
        },
        {
          term: "¿me puede colaborar?",
          explanation:
            "The most Colombian way to ask for help or a small favour. “Colaborar” stands in for “ayudar” so the request feels like teamwork instead of a demand on someone's time.",
          literal: "can you collaborate with me?",
          useWhen:
            "Asking anyone in a service or neighbourly role for a hand — the portero, a shop assistant, a stranger with directions, a clerk behind a counter.",
          avoidWhen:
            "A genuine emergency, where the softness wastes time. Then “¡ayúdeme!” is right and “¿me colabora?” would sound absurdly casual.",
          register: "polite service",
          region: "Strongly Colombian; heard nationwide but especially at Bogotá's counters, offices and building desks. Elsewhere “¿me ayudas?” is the norm.",
          related: ["¿me ayuda?", "¿me hace un favor?", "¿me colabora?", "¿sería tan amable?"],
          example: {
            target: "¿Me puede colaborar con una cosita?",
            translation: "Could you give me a hand with something?"
          }
        },
        {
          term: "¿me regala…?",
          explanation:
            "A request dressed as a gift. Although “regalar” means “to give as a present”, this asks for something small and expects payment, or nothing, in return — a bag, a number, a minute.",
          literal: "will you gift me…?",
          useWhen:
            "Asking for a small item or favour in a shop, an office or on the street. It is the polite default right across Colombian service life.",
          avoidWhen:
            "Anywhere outside Colombia, where a listener may take “regalar” literally and think you want a freebie. Say “¿me da…?” or “¿me pasa…?” instead.",
          register: "polite service",
          region: "Iconic Colombian usage — few phrases mark the accent faster. Common from Bogotá to the coast, and puzzling to many other Spanish speakers.",
          related: ["¿me da…?", "¿me pasa…?", "¿me colabora con…?", "¿me hace el favor de…?"],
          example: {
            target: "¿Me regala el número de la administración?",
            translation: "Could you give me the building office's number?"
          }
        },
        {
          term: "saber (hacer algo)",
          explanation:
            "To know how to do something — a skill you have learnt and kept. Paired with an infinitive, “saber nadar”, “saber manejar”, it is the ability English buries inside “can”.",
          literal: "to know (how to do something)",
          useWhen:
            "Talking about competencies you have acquired: cooking, driving, swimming, fixing things, speaking a language.",
          avoidWhen:
            "Talking about a one-off possibility or a permission. “¿Sabes venir mañana?” is wrong for “can you come tomorrow?” — that is poder, not saber.",
          register: "neutral",
          region: "Universal Spanish; the contrast with poder is one of the first things a Spanish learner has to internalise.",
          related: ["poder", "conocer", "aprender a", "tener idea de"],
          example: {
            target: "No sé cómo se hace.",
            translation: "I don't know how it's done."
          }
        },
        {
          term: "no puedo con…",
          explanation:
            "“I can't manage / cope with…”. Used for something too heavy, too hard or simply too much — a load, a task, or a person who is wearing you out.",
          literal: "not I-can with…",
          useWhen:
            "Admitting that a physical load or a situation is beyond you right now — the boxes, the heat, the paperwork, a difficult child.",
          avoidWhen:
            "Saying you lack a skill; that is “no sé”. “No puedo con” is about being overwhelmed by something, not about never having learnt it.",
          register: "friendly informal",
          region: "General Colombian and pan-Hispanic; the phrasing works the same across Latin America.",
          related: ["no doy más", "no me da", "me queda grande", "estoy que no puedo"],
          example: {
            target: "No puedo con esta pipeta yo solo.",
            translation: "I can't manage this cylinder on my own."
          }
        },
        {
          term: "la pipeta (de gas)",
          explanation:
            "The refillable cylinder of cooking gas that many Colombian homes use instead of piped gas. Also called “el cilindro”; delivered by truck and swapped when empty.",
          literal: "the cylinder (of gas)",
          useWhen:
            "Anything to do with domestic cooking gas — ordering a refill, connecting it, reporting a leak, asking a neighbour for help with it.",
          avoidWhen:
            "Homes on piped natural gas (“gas natural”, “gas por tubería”), where there is no cylinder at all and the word would only confuse.",
          register: "neutral",
          region: "“Pipeta” is widespread in Colombia; “cilindro” competes with it, while “pipa” is the term in Spain and Mexico.",
          related: ["el cilindro", "el gas", "la estufa", "la válvula"],
          example: {
            target: "No puedo conectar la pipeta del gas.",
            translation: "I can't connect the gas cylinder."
          }
        },
        {
          term: "un momentico",
          explanation:
            "“Just a moment”, with a diminutive that makes the wait sound short and friendly. The -ico ending, rather than -ito, is a much-loved Colombian flourish.",
          literal: "a little-moment",
          useWhen:
            "Softening any short delay — asking someone to wait, or promising you'll be quick. It runs through everyday Colombian speech.",
          avoidWhen:
            "A formal written register, where “un momento” or “en breve” fits better and the diminutive would look too chatty.",
          register: "friendly informal",
          region: "The -ico diminutive after t or d is a Colombian signature — “ratico”, “momentico”, “gatico” — heard strongly in Bogotá, Antioquia and the coast.",
          related: ["un momentito", "un ratico", "ya mismo", "espere un segundo"],
          example: {
            target: "Subo en un momentico.",
            translation: "I'll come up in just a minute."
          }
        }
      ],
      note:
        "The lesson turns on two verbs English collapses into one. “Can” is poder when it means possibility or permission, but saber when it means a skill you have learnt. “No puedo conectarla” says the cylinder is beating you today; “no sé conectarla” says you never learnt how. Colombians hear the difference at once, so the wrong choice quietly rewrites your story.",
      culture: [
        {
          label: "Colaborar is how Colombia asks",
          body:
            "Across Colombia, favours are framed as collaboration. A traffic officer, a receptionist and your next-door neighbour will all offer to “colaborarle”, and asking “¿me puede colaborar?” signals that you see the other person as a partner doing you a kindness, not a servant obeying an order. The word carries a quiet equality that “ayudar” lacks. Foreigners who master this one verb sound noticeably more polite almost overnight."
        },
        {
          label: "The regalar that costs money",
          body:
            "Nothing baffles visitors faster than being asked to “regalar” something they are about to pay for. In a bakery you will hear “¿me regala un pan?” and then hand over coins; a cashier may ask you to “regalarle” your ID card. It is pure politeness, draining the transaction of any hint of a demand. Take it literally and you will think the entire country is begging for gifts."
        },
        {
          label: "Gas arrives by truck",
          body:
            "In much of Colombia cooking gas is not piped in but delivered as a “pipeta”, a steel cylinder swapped over when it runs dry. You soon learn the rhythm of the gas truck's recorded jingle crawling through the neighbourhood, and you learn to keep the portero's goodwill — because connecting, bleeding and leak-checking a cylinder is exactly the kind of thing a helpful portero does and a nervous newcomer cannot."
        },
        {
          label: "The portero holds the building together",
          body:
            "A Colombian portero is far more than a doorman. He signs for parcels, waters the plants, knows which flats are feuding, buzzes in the plumber, and quietly decides how smoothly your life in the building runs. Treating him with usted and a warm “vecino” or “don” is not merely good manners; it is the single best investment a new resident can make. He remembers, for years, who was kind to him."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “No puedo cocinar” to mean you never learnt to cook",
          whyItFails:
            "“No puedo cocinar” means you are unable to cook right now — the kitchen is closed, your arm is in a cast. The skill you lack is “no sé cocinar”. Swapping them tells Colombians the opposite of what you meant about your own abilities.",
          sayInstead: "No sé cocinar."
        },
        {
          mistake: "Reaching for “¿me ayudas?” at every counter, English-style",
          whyItFails:
            "It is not wrong, but it skips the warmer, more local frame. Colombians reach for “¿me puede colaborar?” first, and defaulting to the bare “ayudar” makes you sound a shade more demanding and less woven into how favours are asked here.",
          sayInstead: "¿Me puede colaborar?"
        },
        {
          mistake: "Taking “¿me regala…?” literally and refusing to pay",
          whyItFails:
            "The verb says “gift”, but the exchange is an ordinary purchase. Hearing it as a request for something free, and protesting, marks you instantly as new and misreads a phrase that is only softening the ask.",
          sayInstead: "Just answer the request and pay as normal."
        },
        {
          mistake: "Dropping usted with the portero because he is friendly",
          whyItFails:
            "Warmth and usted sit together easily in Colombia, especially in a service relationship. Switching to tú because he smiled can read as talking down rather than getting closer, and the portero will clock the slip even if he says nothing.",
          sayInstead: "Keep usted: “¿me puede colaborar, don Jairo?”"
        }
      ],
      variations: [
        {
          form: "¿Me puede colaborar con una cosita?",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "The everyday default with a portero, clerk or neighbour. Warm, soft and unmistakably local."
        },
        {
          form: "¿Sería tan amable de ayudarme con esto?",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "A more formal counter, or an older stranger, where you want to lay on extra deference."
        },
        {
          form: "Vecino, ¿me da una manito con la pipeta?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "A relaxed, neighbourly ask once you already know the person a little. “Una manito” is a small hand."
        },
        {
          form: "¿Me hace el favor y me ayuda a subir esto?",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "Adding “¿me hace el favor?” when the ask is a touch bigger and you want to acknowledge it."
        },
        {
          form: "¿Usté me colabora con estas cajas, parce?",
          register: "friendly informal",
          region: "Medellín and the Coffee Region (paisa)",
          whenToUse: "Among peers in Antioquia, where “usté” and “parce” mix familiarity with the usual paisa usted."
        }
      ],
      prompt: "Alex says “No puedo conectar la pipeta, no sé cómo se hace.” What two different problems is he naming?",
      choices: [
        "That he is unable to connect it at this moment, and separately that he never learnt how the connection is done.",
        "That the cylinder is faulty and dangerous, and that the building has not yet shown him where the valve lives.",
        "That he refuses to connect it himself, and that he would rather the portero take care of it from now on."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "In the bakery you hear “¿me regala un pan?” and the customer then pays for it. What is “regalar” doing here?",
          choices: [
            "It is asking the baker to hand a loaf over for free, as a small daily gift to loyal regular customers.",
            "It is softening an ordinary purchase into a polite request; the customer pays for the bread exactly as usual.",
            "It is a slip the customer is making, because “regalar” can only ever mean to give a genuine present."
          ],
          answer: 1,
          tests: "“regalar” as a politeness frame, not a literal gift"
        },
        {
          prompt: "Why might “¿me puede colaborar?” land better than “¿me ayuda?” when you ask the portero for help?",
          choices: [
            "Because “ayudar” is grammatically wrong in Colombia and would not be understood at a building desk at all.",
            "Because “colaborar” is the usted form of “ayudar”, and porteros expect the formal conjugation at all times.",
            "Because “colaborar” frames the favour as teamwork, sounding warmer and more local than the blunter “ayudar”."
          ],
          answer: 2,
          tests: "“colaborar” as the warmer Colombian favour-frame"
        },
        {
          prompt: "Don Jairo says “Subo en un momentico” and “ya se lo paso.” What is he promising?",
          choices: [
            "That he will come up and hand it over very soon — “momentico” and “ya” both signal it is coming shortly.",
            "That he will get to it next week, once he has finished the more urgent jobs elsewhere in the building.",
            "That he cannot help at all now and is politely telling Alex to sort the whole thing out on his own."
          ],
          answer: 0,
          tests: "“ya” and the diminutive as near-future promises"
        },
        {
          prompt: "Alex wants to say he never learnt to connect a cylinder. Which sentence says exactly that?",
          choices: [
            "No puedo conectar la pipeta.",
            "No sé conectar la pipeta.",
            "No quiero conectar la pipeta."
          ],
          answer: 1,
          tests: "saber for a learned skill against poder"
        }
      ]
    },
    en: {
      title: "Pedirle una mano al superintendente",
      situation:
        "Alejandra acaba de mudarse a un apartamento en Toronto y no logra conectar el tanque de propano de la parrilla del balcón. Baja donde Dave, el superintendente del edificio, a pedirle ayuda. Tiene que pedir el favor con cortesía, explicar qué no puede hacer y agradecer — todo en un par de minutos, sin sonar mandona.",
      setting: {
        who: "Dave es el superintendente del edificio desde hace once años y conoce cada tubo y cada válvula. Alejandra se mudó hace cuatro días y apenas ha desempacado.",
        what: "Un pedido rápido de ayuda para conectar el tanque de gas, hecho en la oficina del super al pasar.",
        when: "Una mañana entre semana, justo cuando Alejandra quiere estrenar la parrilla y descubre que no prende.",
        where: "Toronto, un edificio de mediana altura donde las parrillas de balcón funcionan con un tanque de propano recargable.",
        why: "Porque el super es la persona de la que Alejandra dependerá para paquetes, llaves, fugas y pequeñas emergencias durante años. Cómo pide este primer favor marca el tono de todos los siguientes."
      },
      address: {
        form: "mixed",
        who: "Dave y Alejandra se tratan por el nombre de pila y usan el mismo “you” desde la primera línea.",
        why: "El inglés tiene una sola forma de segunda persona, así que el registro lo carga todo lo demás: el nombre de pila en vez de un título, un “hi” en vez de “good morning”, y frases cortas. La cercanía está en la elección de palabras, no en el pronombre.",
        ifYouSwitch:
          "Decirle “sir” a Dave no ofendería, pero lo haría sentir mayor y pondría un mostrador entre los dos. Resérvelo para alguien que la atiende en calidad estrictamente oficial."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Hi Dave, could you give me a hand with something?",
          translation: "Hola Dave, ¿me puede colaborar con una cosita?",
          pronunciation: "jai deiv, kud yu giv mi a JAND uid SAM-zing",
          literal: "Hola Dave, ¿podrías darme una mano con algo?",
          why: "“Give me a hand” es el equivalente natural de “¿me colabora?”. El inglés no tiene un verbo de cortesía como “colaborar” para los favores chiquitos, así que usa la mano como imagen; “help me with something” también sirve, un poco más neutro."
        },
        {
          speaker: "Dave",
          target: "Sure thing. What do you need?",
          translation: "Claro que sí. ¿En qué le colaboro?",
          pronunciation: "shur zing. uat du yu NID",
          literal: "Seguro. ¿Qué necesitas?",
          why: "“Sure thing” es un sí caluroso y muy frecuente en Norteamérica. Fíjese en que el inglés no cambia el “you” para marcar respeto: la cercanía va en el tono y en lo corto de la frase, no en un pronombre como el usted del español."
        },
        {
          speaker: "Alejandra",
          target: "I can't connect the propane tank. I don't know how.",
          translation: "No puedo conectar el tanque de propano. No sé cómo.",
          pronunciation: "ai kant ko-NEKT da PROU-pein tank. ai dont nou JAU",
          literal: "No puedo conectar el tanque de propano. No sé cómo.",
          why: "El inglés mete en “can't” dos ideas que el español separa. “I can't” es no poder ahora; el no tener la destreza va aparte, en “I don't know how”. El hispanohablante tiende a decir “I don't can”, imposible, por calcar “no puedo”."
        },
        {
          speaker: "Dave",
          target: "No problem, that's easy. I'll come up in a sec.",
          translation: "Tranquila, eso es facilito. Subo en un momentico.",
          pronunciation: "nou PRO-blem, dats I-zi. ail kam ap in a SEK",
          literal: "No problema, eso es fácil. Subiré en un segundo.",
          why: "“In a sec” es la promesa vaga de “ya”: pronto, sin decir cuándo exactamente. El inglés norteamericano recorta “second” a “sec” en el habla informal, igual que el español acorta con el diminutivo “momentico”."
        },
        {
          speaker: "Alejandra",
          target: "Thanks so much. Could you also give me the office number?",
          translation: "Muchas gracias. ¿Y me regala el número de la administración?",
          pronunciation: "zanks so mach. kud yu OL-so giv mi da O-fis NAM-ber",
          literal: "Muchas gracias. ¿Y también me darías el número de la oficina?",
          why: "Aquí “¿me regala…?” se vuelve “could you give me…?”. El inglés no usa un verbo de regalar para esto — un “gift me the number” sonaría absurdo. Toda la cortesía la carga “could”, el condicional que suaviza el pedido."
        },
        {
          speaker: "Dave",
          target: "You bet. Give me a second and I'll text it to you.",
          translation: "Con mucho gusto. Deme un segundo y ya se lo paso.",
          pronunciation: "yu BET. giv mi a SE-kond and ail tekst it tu yu",
          literal: "Claro que sí. Dame un segundo y te lo mando por mensaje.",
          why: "“You bet” es un “con mucho gusto” muy norteamericano para responder a las gracias. “Text it to you” convierte “pasar el número” en enviarlo por mensaje: “text” es a la vez sustantivo y verbo, algo muy común en inglés."
        }
      ],
      vocabulary: [
        {
          term: "can / could",
          explanation:
            "El verbo modal que reúne lo que el español reparte entre poder y, en parte, saber: capacidad, permiso y posibilidad. “Could” es su forma más cortés y más suave para pedir.",
          literal: "poder",
          useWhen:
            "Para decir que uno es o no es capaz de algo, para pedir permiso, o para hacer una petición cortés con “could you…?”.",
          avoidWhen:
            "Para una destreza aprendida en general, donde el inglés a menudo prefiere “know how to”: “I know how to drive”, y no sólo “I can drive”, cuando se quiere subrayar que se aprendió.",
          register: "neutral",
          region: "Inglés universal; “could you…?” es la petición cortés por defecto en Canadá y en Estados Unidos.",
          related: ["could", "be able to", "know how to", "manage to"],
          example: {
            target: "I can't connect the propane tank.",
            translation: "No puedo conectar el tanque de propano."
          }
        },
        {
          term: "give someone a hand",
          explanation:
            "Echar una mano: el modismo con el que el inglés pide o describe una ayuda pequeña, justo el lugar donde el colombiano pondría “¿me colabora?”.",
          literal: "dar a alguien una mano",
          useWhen:
            "Al pedirle a cualquiera un favor concreto y breve — el super, un compañero, un vecino con una caja pesada.",
          avoidWhen:
            "En una emergencia real, donde se dice “help!” directo. El modismo suena demasiado tranquilo para algo urgente.",
          register: "friendly informal",
          region: "Inglés universal; muy frecuente en el habla cotidiana de Canadá y de Estados Unidos.",
          related: ["help me out", "lend a hand", "help with", "pitch in"],
          example: {
            target: "Could you give me a hand with something?",
            translation: "¿Me puede colaborar con una cosita?"
          }
        },
        {
          term: "could you give me…?",
          explanation:
            "La fórmula cortés para pedir algo pequeño, que hace el trabajo del colombiano “¿me regala…?”. El condicional “could” es lo que suaviza; sin él, “give me” suena a orden.",
          literal: "¿podrías darme…?",
          useWhen:
            "Al pedir un objeto o un dato menor en una tienda, una oficina o la calle: un número, una bolsa, un minuto.",
          avoidWhen:
            "Con “gift”, que en inglés sólo es un regalo de verdad. “Gift me the number” no existe como cortesía y sonaría rarísimo.",
          register: "polite service",
          region: "Inglés universal; “can I get…?” es la variante más informal y muy norteamericana.",
          related: ["can I get…?", "would you mind giving me…?", "may I have…?", "could I get…?"],
          example: {
            target: "Could you also give me the office number?",
            translation: "¿Y me regala el número de la administración?"
          }
        },
        {
          term: "know how to",
          explanation:
            "Saber hacer algo: la destreza aprendida que el inglés a veces deja dentro de “can”, pero que “know how to” vuelve explícita cuando importa subrayar que se aprendió.",
          literal: "saber (cómo) hacer algo",
          useWhen:
            "Para hablar de habilidades adquiridas: cocinar, manejar, nadar, arreglar cosas.",
          avoidWhen:
            "Para una posibilidad puntual o un permiso; eso es “can”. “Do you know how to come tomorrow?” es un error: se dice “can you come tomorrow?”.",
          register: "neutral",
          region: "Inglés universal; el matiz frente a “can” es de los primeros que un hispanohablante debe afinar.",
          related: ["can", "be able to", "learn how to", "have a knack for"],
          example: {
            target: "I don't know how.",
            translation: "No sé cómo."
          }
        },
        {
          term: "I can't manage (it)",
          explanation:
            "No poder con algo: reconocer que una carga o una situación lo supera a uno — demasiado pesado, demasiado difícil, demasiado y punto.",
          literal: "no puedo con (ello)",
          useWhen:
            "Al admitir que un peso físico o un lío lo desborda ahora mismo — las cajas, el calor, el papeleo.",
          avoidWhen:
            "Para decir que falta una destreza; eso es “I don't know how”. “Manage” es sobre poder con la carga, no sobre haberla aprendido.",
          register: "friendly informal",
          region: "Inglés universal; “I can't handle it” es un primo muy cercano y de uso diario.",
          related: ["I can't handle it", "it's too much for me", "I'm swamped", "I can't cope"],
          example: {
            target: "I can't manage this tank on my own.",
            translation: "No puedo con este tanque yo sola."
          }
        },
        {
          term: "propane tank",
          explanation:
            "El cilindro de gas propano que en Norteamérica alimenta sobre todo la parrilla del balcón o del patio, y no la estufa. Es el pariente del “pipeta” colombiano.",
          literal: "tanque de propano",
          useWhen:
            "Para todo lo relacionado con el gas de la parrilla — rellenarlo, conectarlo, cambiarlo, revisar si hay una fuga.",
          avoidWhen:
            "Para la estufa de la cocina, que en la mayoría de los edificios va por gas natural entubado o es eléctrica, sin tanque alguno.",
          register: "neutral",
          region: "Inglés norteamericano; cambiar el tanque vacío por uno lleno en la tienda o la gasolinera es lo normal para la barbacoa.",
          related: ["propane", "gas cylinder", "BBQ", "refill"],
          example: {
            target: "I can't connect the propane tank.",
            translation: "No puedo conectar el tanque de propano."
          }
        },
        {
          term: "in a sec",
          explanation:
            "En un momentico: la promesa cálida de que algo llega pronto, sin fijar la hora. “Sec” es “second” recortado, propio del habla informal.",
          literal: "en un segundo",
          useWhen:
            "Para suavizar cualquier demora corta — pedir que esperen, o prometer que uno será rápido.",
          avoidWhen:
            "En un registro escrito o formal, donde “in a moment” o “shortly” encajan mejor y “sec” se vería demasiado coloquial.",
          register: "friendly informal",
          region: "Inglés universal en el habla; “sec”, “a minute” y “a bit” compiten según la persona y la región.",
          related: ["in a second", "in a minute", "hang on", "one moment"],
          example: {
            target: "I'll come up in a sec.",
            translation: "Subo en un momentico."
          }
        }
      ],
      note:
        "Lo más útil aquí es que el inglés esconde en “can” dos cosas que el español separa. Cuando “can” significa una destreza aprendida, muchas veces conviene “know how to”; cuando significa poder ahora, es “can”. Y cuidado con calcar “no puedo” como “I don't can”: en inglés el modal ya lleva su propia negación, así que es “I can't”.",
      culture: [
        {
          label: "Pedir ayuda sin un verbo como “colaborar”",
          body:
            "El inglés no tiene un “colaborar” de cortesía para los favores chiquitos. En su lugar echa mano de modismos con “hand” — “give me a hand”, “lend a hand” — o del sencillo “help me out”. Suenan informales y cálidos a la vez. El hispanohablante que traduce “¿me colabora?” como “collaborate with me?” suena raro; el super entendería, pero la frase natural es otra por completo."
        },
        {
          label: "El “could” hace lo que en Colombia hace “regalar”",
          body:
            "Donde el colombiano suaviza con “¿me regala…?”, el inglés suaviza con el condicional: “could you…?”, “would you mind…?”. No hay ningún verbo de regalar en el pedido; toda la cortesía vive en el modal. Por eso “give me the number”, dicho seco, suena a orden, y “could you give me the number?” suena a favor. Aprender a estirar el “could” reemplaza a todo el mundo del “regálame”."
        },
        {
          label: "El gas aquí no llega en camión",
          body:
            "En la mayoría de los edificios norteamericanos la estufa va por gas natural entubado o es eléctrica, así que no hay pipeta que cambiar ni camión con jingle. El tanque de propano aparece sobre todo para la parrilla del balcón, y se intercambia lleno por vacío en la gasolinera o la ferretería. La destreza de conectarlo y revisar fugas sigue siendo la misma, pero el ritmo doméstico es distinto."
        },
        {
          label: "El “super” no es exactamente un portero",
          body:
            "El “superintendent”, o “super”, de un edificio norteamericano se parece al portero, pero no vela la entrada todo el día; aparece para arreglar, firmar por paquetes y resolver. La relación es más de servicio y menos de presencia constante. Aun así, tratarlo con calidez y aprenderse su nombre rinde lo mismo que en Colombia: el super se acuerda de quién fue amable cuando hay una fuga a medianoche."
        }
      ],
      pitfalls: [
        {
          mistake: "“I don't can connect it.”",
          whyItFails:
            "Es el calco directo de “no puedo”. En inglés el modal “can” ya lleva su propia negación — “can't” — y nunca se combina con el auxiliar “do”. El resultado es una frase que ningún angloparlante produce y que delata al instante el molde del español.",
          sayInstead: "I can't connect it."
        },
        {
          mistake: "“Do you know to connect it?”",
          whyItFails:
            "Al español “saber conectar” le basta el infinitivo, pero el inglés exige “how” entre “know” y el verbo. Sin ese “how” la pregunta queda incompleta y suena a error de aprendiz; con él, “know how to”, ya nombra la destreza que uno quiere señalar.",
          sayInstead: "Do you know how to connect it?"
        },
        {
          mistake: "“Can you gift me the number?”",
          whyItFails:
            "Es “¿me regala el número?” traducido palabra por palabra. En inglés “gift” sólo es un regalo de verdad, así que “gift me the number” suena rarísimo. La cortesía del pedido pequeño la lleva “could”, no un verbo de regalar.",
          sayInstead: "Could you give me the number?"
        },
        {
          mistake: "“I can't with these boxes.”",
          whyItFails:
            "“No puedo con estas cajas” no se puede calcar: en inglés “can't” necesita un verbo detrás. Sin él, la frase queda coja. La idea de que algo lo supera a uno se dice con “manage” o “handle”, que sí completan el sentido.",
          sayInstead: "I can't manage these boxes."
        }
      ],
      variations: [
        {
          form: "Could you give me a hand with something?",
          register: "polite service",
          region: "Inglés universal",
          whenToUse: "La opción por defecto con el super, un empleado o un vecino. Cálida y suave a la vez."
        },
        {
          form: "Would you mind helping me with this?",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Un mostrador más formal o un desconocido mayor, cuando se busca algo más de deferencia."
        },
        {
          form: "Hey, can you help me out with the tank?",
          register: "friendly informal",
          region: "Inglés norteamericano",
          whenToUse: "Un pedido relajado y vecinal cuando ya se conoce un poco a la persona."
        },
        {
          form: "Do you think you could help me carry this up?",
          register: "polite service",
          region: "Inglés universal",
          whenToUse: "Cuando el favor es un poco más grande y se quiere reconocer la molestia."
        },
        {
          form: "Gimme a hand with these boxes, would ya?",
          register: "friendly informal",
          region: "Inglés norteamericano coloquial",
          whenToUse: "Entre pares y con mucha confianza, donde “gimme” y “would ya” marcan cercanía."
        }
      ],
      prompt: "Alejandra dice “I can't connect the propane tank. I don't know how.” ¿Qué dos problemas distintos está nombrando?",
      choices: [
        "Que en este momento no logra conectarlo, y que además nunca aprendió cómo se hace la conexión.",
        "Que el tanque está dañado y resulta peligroso, y que el edificio no le ha mostrado dónde está la válvula.",
        "Que se niega a conectarlo él mismo, y que preferiría que el super se encargue de todo eso de ahora en adelante."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "En inglés no existe un verbo como “colaborar” para los favores pequeños. ¿Cómo se pide entonces una mano?",
          choices: [
            "Con modismos como “give me a hand” o con un simple “help me out”, que suenan informales y cálidos a la vez.",
            "Con el verbo “collaborate”, que es la traducción exacta y la forma más natural de pedirlo en el inglés diario.",
            "No se pide de ninguna manera especial, porque en inglés pedir favores pequeños se considera de mala educación."
          ],
          answer: 0,
          tests: "los modismos con “hand” como equivalente de “colaborar”"
        },
        {
          prompt: "El colombiano suaviza con “¿me regala…?”. ¿Con qué suaviza el inglés ese mismo pedido pequeño?",
          choices: [
            "Con el verbo “gift”, diciendo “gift me the number”, que es la cortesía equivalente y de uso muy corriente.",
            "Con el condicional “could”, diciendo “could you give me…?”; toda la cortesía vive en ese único modal.",
            "Con un tono de voz más agudo, ya que el inglés no tiene ninguna palabra especial para suavizar los pedidos."
          ],
          answer: 1,
          tests: "el condicional “could” como portador de la cortesía"
        },
        {
          prompt: "Un hispanohablante quiere decir “no puedo conectarlo”. ¿Cuál es la forma correcta en inglés?",
          choices: [
            "I don't can connect it.",
            "I no can connect it.",
            "I can't connect it."
          ],
          answer: 2,
          tests: "la negación del modal “can” sin el auxiliar “do”"
        },
        {
          prompt: "Alejandra quiere decir que sabe conectar el tanque, subrayando que lo aprendió. ¿Qué frase lo dice mejor?",
          choices: [
            "I know how to connect the tank.",
            "I know to connect the tank.",
            "I can connect to the tank."
          ],
          answer: 0,
          tests: "“know how to” para una destreza aprendida"
        }
      ]
    }
  },
  {
    id: "passing-on-what-the-neighbours-said",
    level: "Starter · Everyday life",
    skills: ["listening", "speaking", "context"],
    domain: "everyday life",
    register: "friendly informal",
    pathways: ["foundation"],
    verb: "decir",
    review: "pending",
    es: {
      title: "Pasar el chisme del corte de agua",
      situation:
        "Alex está en el pasillo de su edificio en Cali cuando Marcela, una vecina, le cuenta un rumor: dizque van a cortar el agua mañana. Alex tiene que entender de dónde viene la noticia, sacar la conclusión práctica y ofrecer avisarles a otros vecinos — todo relatando lo que unos y otros dijeron.",
      setting: {
        who: "Marcela has lived on Alex's floor for six years and hears everything first. Alex is still new and depends on neighbours like her to know what is going on.",
        what: "A quick corridor exchange in which Marcela passes on a rumour about the water being cut, and Alex works out what to do about it.",
        when: "Late afternoon, as people come home and stop to talk by the lifts.",
        where: "Cali, a warm city where corridor chat is constant and the corner shop is the real news source.",
        why: "Because a water cut means filling bottles tonight, and because relaying the warning accurately — who said what, and how sure they are — is how a building looks after itself."
      },
      address: {
        form: "tú",
        who: "Marcela and Alex use tú with each other, the usual footing between neighbours of a similar age in Cali.",
        why: "In the Valle, tú is the everyday register among peers, warmer and less formal than Bogotá's usted but not as marked as the paisa vos. Between two neighbours who chat in the corridor, tú fits naturally.",
        ifYouSwitch:
          "Usted here would put a sudden distance between them, as if Alex were addressing an official. Vos is not a Cali default; using it would sound borrowed from Medellín and slightly performative."
      },
      dialogue: [
        {
          speaker: "Marcela",
          target: "Vecino, dizque van a cortar el agua mañana.",
          translation: "Neighbour, apparently they're going to cut the water off tomorrow.",
          pronunciation: "beh-SEE-noh, DEES-keh ban a kor-TAR el AH-gwa ma-NYA-na",
          literal: "Neighbour, apparently they-go to cut the water tomorrow.",
          why: "“Dizque” is one word doing the work of “apparently / supposedly”. It comes from “dice que” (“it says that”) and quietly flags this as hearsay — Marcela is passing on a rumour, not swearing to it."
        },
        {
          speaker: "Alex",
          target: "¿En serio? ¿Y quién te dijo eso?",
          translation: "Seriously? And who told you that?",
          pronunciation: "en SEH-ryo? ee kyen te DEE-ho EH-so",
          literal: "In serious? And who to-you told that?",
          why: "“Te dijo” is decir with an indirect-object pronoun: told to-you. Spanish nearly always marks who was told, so a bare “¿quién dijo?” would sound oddly incomplete; the little “te” is carrying essential information."
        },
        {
          speaker: "Marcela",
          target: "Me dijeron en la tienda que están arreglando un tubo.",
          translation: "They told me at the shop that they're fixing a pipe.",
          pronunciation: "me di-HEH-ron en la TYEN-da ke es-TAN a-rre-GLAN-do oon TOO-bo",
          literal: "To-me they-told in the shop that they-are fixing a pipe.",
          why: "“Me dijeron” — “they told me” — is the standard way to source a rumour without naming anyone; the impersonal “they” carries no blame. It pairs with “que” plus a full clause, the reported-speech pattern this whole lesson turns on."
        },
        {
          speaker: "Alex",
          target: "O sea que toca guardar agua por si acaso.",
          translation: "So we'd better store some water just in case.",
          pronunciation: "o SEH-a ke TO-ka gwar-DAR AH-gwa por see a-KA-so",
          literal: "Or be that one-must store water for if perhaps.",
          why: "“O sea” means “I mean / in other words” and here draws the conclusion from her news. “Toca”, from tocar, is the very Colombian “one has to / it falls to us”, softer and more resigned than the flat “tenemos que”."
        },
        {
          speaker: "Marcela",
          target: "Sí, ve. Yo ya llené unas botellas por si las moscas.",
          translation: "Yeah. I've already filled some bottles just to be safe.",
          pronunciation: "see, be. yo ya ye-NEH OO-nas bo-TE-yas por see las MOS-kas",
          literal: "Yes, look. I already filled some bottles for if the flies.",
          why: "“Ve” is a Caleño tag, roughly “look / you see”, sprinkled through Valle speech. “Por si las moscas” — literally “in case of the flies” — is a playful and extremely common way to say “just in case”, swappable with “por si acaso”."
        },
        {
          speaker: "Alex",
          target: "Listo, yo les digo a los del tercero.",
          translation: "Got it, I'll tell the people on the third floor.",
          pronunciation: "LEES-to, yo les DEE-go a los del ter-SEH-ro",
          literal: "Ready, I to-them I-say to the of-the third.",
          why: "“Les digo a los del tercero” doubles the indirect object — “les” and “a los del tercero” both appear — which sounds redundant to English ears but is normal, even required, in Spanish. “Digo” is the yo present of decir."
        }
      ],
      vocabulary: [
        {
          term: "decir",
          explanation:
            "The verb for saying and telling. It almost always travels with an indirect-object pronoun — “me dijo”, “le digo” — marking who the words are aimed at.",
          literal: "to say / to tell",
          useWhen:
            "Reporting what someone said, telling a person something, or passing a message along: “dice que…”, “dile que…”.",
          avoidWhen:
            "For speaking as an activity (that is hablar) or for chatting (conversar, charlar). “Decir” needs actual content — the thing that was said.",
          register: "neutral",
          region: "Universal Spanish; the indirect-object habit is shared across every dialect.",
          related: ["hablar", "contar", "avisar", "comentar"],
          example: {
            target: "Yo les digo a los del tercero.",
            translation: "I'll tell the people on the third floor."
          }
        },
        {
          term: "dizque",
          explanation:
            "“Apparently / supposedly.” A compression of “dice que” that flags the next thing as hearsay, and sometimes as doubtful or faintly ironic.",
          literal: "says that",
          useWhen:
            "Passing on a rumour you don't fully vouch for, or hinting you find a claim dubious: “dizque está enfermo” can gently mean you doubt it.",
          avoidWhen:
            "Formal writing, or any time you want to sound certain. It is chatty and carries a whiff of scepticism that can undercut you.",
          register: "friendly informal",
          region: "Pan-Latin American but especially alive in Colombia; heard constantly in everyday speech across every region.",
          related: ["supuestamente", "al parecer", "según dicen", "parece que"],
          example: {
            target: "Dizque van a cortar el agua.",
            translation: "Apparently they're going to cut the water off."
          }
        },
        {
          term: "me dijeron que",
          explanation:
            "“They told me that…”. The impersonal “they” sources a piece of news without naming — or blaming — anyone in particular.",
          literal: "to-me they-told that",
          useWhen:
            "Reporting something you heard when the source is vague, unimportant, or someone you'd rather not name outright.",
          avoidWhen:
            "When you ought to be specific and accountable — reporting a fact at work, for instance. There a vague “they told me” sounds evasive.",
          register: "neutral",
          region: "Universal Spanish; the vague-“they” move is shared right across the language.",
          related: ["me contaron", "escuché que", "supe que", "me comentaron"],
          example: {
            target: "Me dijeron en la tienda que están arreglando un tubo.",
            translation: "They told me at the shop that they're fixing a pipe."
          }
        },
        {
          term: "dijo que / dice que",
          explanation:
            "The reported-speech engine: “he said that / she says that” plus a clause. Colombian Spanish reports the message, not the exact words, and rarely bothers with quotation marks.",
          literal: "said that / says that",
          useWhen:
            "Relaying what someone communicated: “dice que ya viene”, “dijo que no podía”.",
          avoidWhen:
            "Quoting someone word for word for effect; then people often just voice the line, sometimes with “y me dice:…”.",
          register: "neutral",
          region: "Universal Spanish; note the shift between “dice” (still true now) and “dijo” (reported afterwards).",
          related: ["dijo que sí", "dice que no", "me dijo que", "según él"],
          example: {
            target: "Dice que están arreglando un tubo.",
            translation: "He says they're fixing a pipe."
          }
        },
        {
          term: "o sea",
          explanation:
            "“I mean / that is / so.” A connector that reframes or draws a conclusion from what was just said, and one of the most frequent words in Colombian speech.",
          literal: "or [it] be",
          useWhen:
            "Restating something more clearly, or spelling out a consequence: “o sea que no vienes”, “o sea, más o menos”.",
          avoidWhen:
            "Overusing it, where it becomes a verbal tic; and formal writing, where “es decir” is the tidy equivalent.",
          register: "friendly informal",
          region: "Pan-Hispanic; used heavily by younger Colombians, at times almost as spoken punctuation.",
          related: ["es decir", "digamos", "o sea que", "más bien"],
          example: {
            target: "O sea que toca guardar agua.",
            translation: "So we'd better store some water."
          }
        },
        {
          term: "decirle a alguien",
          explanation:
            "“To tell someone.” Spanish doubles the marker — the pronoun “le/les” and the named person both appear — which feels redundant in English but is the norm here.",
          literal: "to-tell to-them to someone",
          useWhen:
            "Any time you tell a specific person something: “dile a tu mamá”, “les digo a los vecinos”.",
          avoidWhen:
            "Dropping the pronoun. “Digo a los vecinos” without “les” sounds wrong to a Colombian ear, even with the person named.",
          register: "neutral",
          region: "Universal Spanish; the clitic doubling is grammatical, not optional, across most of the language.",
          related: ["decirle", "contarle", "avisarle", "comentarle"],
          example: {
            target: "Yo les digo a los del tercero.",
            translation: "I'll tell the people on the third floor."
          }
        },
        {
          term: "por si acaso",
          explanation:
            "“Just in case.” A hedge that justifies a precaution. Its jokier twin, “por si las moscas”, means exactly the same thing.",
          literal: "for if perhaps",
          useWhen:
            "Explaining a precaution: filling bottles, taking an umbrella, saving a copy. It runs through daily Colombian life.",
          avoidWhen:
            "Little to avoid — it is neutral. Just note “por si las moscas” is informal and would look odd in an official notice.",
          register: "neutral",
          region: "Universal Spanish; “por si las moscas” is pan-Hispanic slang and very common in Colombia.",
          related: ["por si las moscas", "por las dudas", "no vaya a ser", "por prevención"],
          example: {
            target: "Toca guardar agua por si acaso.",
            translation: "We'd better store water just in case."
          }
        }
      ],
      note:
        "The heart of this lesson is that Spanish tells you who was told. Decir drags an indirect-object pronoun along almost everywhere — “me dijeron”, “le digo”, “dile” — and dropping it sounds broken even when you name the person separately. Add the very Colombian “dizque” for rumour and “o sea” for drawing conclusions, and you can relay neighbourhood news exactly the way locals do.",
      culture: [
        {
          label: "Dizque: the rumour word",
          body:
            "“Dizque” is one of the most Colombian words there is, and it does delicate work. It marks the next statement as secondhand — “dizque se casó” is “word is she got married” — and often adds a raised eyebrow. Politicians and gossips alike get “dizque'd”. Foreigners who pick it up sound instantly more fluent, but should notice the scepticism it can carry, because pinning it to someone's sincere claim can sound like you doubt them."
        },
        {
          label: "The corner shop is the news wire",
          body:
            "In a Colombian barrio the “tienda” on the corner is an information exchange as much as a shop. The tendero knows whose water is out, which street is dug up, and when the gas truck comes around. “Me dijeron en la tienda” is a genuine, trusted source, not idle chatter. A newcomer who befriends the shopkeeper plugs straight into the neighbourhood's real-time news, its warnings and its mild gossip."
        },
        {
          label: "O sea is basically punctuation now",
          body:
            "Among younger Colombians “o sea” has drifted from “that is” toward a spoken comma — a way to pause, reframe or add emphasis. “O sea, ¿en serio?” is closer to “like, seriously?” than to any textbook gloss. It can signal mild exasperation or simply buy a second's thought. In moderation it sounds natural and current; wall to wall, it becomes the tic parents tease their teenagers about."
        },
        {
          label: "Everyone stores water",
          body:
            "Planned water cuts — “cortes de agua” — are a routine part of Colombian city life, announced by the utility, the tienda, or a neighbour like Marcela. Households keep bottles, buckets and often a rooftop tank precisely for these days. Filling containers the night before is not paranoia; it is basic competence, and a neighbour who warns you is doing a real favour. Passing the warning upstairs, as Alex does, is simply how a building looks after its own."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “Él me habló que viene tarde” for “he told me he's coming late”",
          whyItFails:
            "“Hablar” is to speak or talk; it can't take a “que” clause of content like that. Reporting a message needs decir: “me dijo que viene tarde”. Using hablar here is a slip that instantly sounds like a learner.",
          sayInstead: "Me dijo que viene tarde."
        },
        {
          mistake: "Saying “Digo a mi mamá” instead of “le digo a mi mamá”",
          whyItFails:
            "Spanish doubles the indirect object; the “le” is not optional even though “a mi mamá” already names her. Without it the sentence sounds truncated and foreign to Colombian ears.",
          sayInstead: "Le digo a mi mamá."
        },
        {
          mistake: "Using “dizque” for something you're completely sure about",
          whyItFails:
            "“Dizque” flags hearsay and often doubt. Attaching it to something you witnessed yourself — “dizque llegué tarde” — is contradictory, because you can't hedge your own certain knowledge with a rumour marker.",
          sayInstead: "Llegué tarde. (Sin “dizque”.)"
        },
        {
          mistake: "Saying “Ayer me dice que no podía” for something reported yesterday",
          whyItFails:
            "Mixing the present “dice” with a clearly past report jars the ear. For something said yesterday, use “me dijo”. The historical present exists in storytelling, but dropped in casually it just reads as a tense error.",
          sayInstead: "Ayer me dijo que no podía."
        }
      ],
      variations: [
        {
          form: "Dizque van a cortar el agua.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Passing on a rumour you don't fully back. The default neighbourly hedge."
        },
        {
          form: "Me dijeron que van a cortar el agua.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Sourcing the news to a vague “they” without staking your own certainty on it."
        },
        {
          form: "Al parecer van a cortar el agua.",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "A tidier, more formal hedge — for a notice, a message to the administrator, or writing."
        },
        {
          form: "Ve, parce, que van a cortar el agua.",
          register: "friendly informal",
          region: "Cali and the Valle (with paisa “parce”)",
          whenToUse: "A very casual heads-up among friends, opening with the Caleño tag “ve”."
        },
        {
          form: "Dicen que hoy no hay agua, por si acaso.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Relaying with the impersonal “dicen” and tacking the precaution onto the end."
        }
      ],
      prompt: "Marcela says “dizque van a cortar el agua mañana.” What does “dizque” tell you about her statement?",
      choices: [
        "That she is passing on something she heard — it's a rumour she is not personally guaranteeing to be true.",
        "That she has official confirmation from the water company and is completely certain the cut happens tomorrow.",
        "That she strongly disapproves of the water being cut and is really complaining to Alex about the decision."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Why does Marcela say “me dijeron en la tienda” rather than naming a specific person?",
          choices: [
            "Because Colombian grammar actually forbids naming your source when you report a rumour to a neighbour.",
            "Because she is deliberately hiding who told her, since the information is meant to stay a secret for now.",
            "Because the vague “they told me” is the normal way to source neighbourhood news without naming anyone."
          ],
          answer: 2,
          tests: "the impersonal “me dijeron” as an unnamed source"
        },
        {
          prompt: "Which sentence is how a Colombian would naturally say “I'll tell the people on the third floor”?",
          choices: [
            "Digo a los del tercero, sin más.",
            "Yo les digo a los del tercero.",
            "Yo digo los del tercero directamente."
          ],
          answer: 1,
          tests: "clitic doubling with “les … a los del tercero”"
        },
        {
          prompt: "Alex says “o sea que toca guardar agua.” What is “o sea” doing in that sentence?",
          choices: [
            "It is quoting the shopkeeper's exact words back to Marcela so that she can confirm or deny them.",
            "It is drawing the conclusion — “so, that means” — that follows from the news she has just given him.",
            "It is expressing his surprise that the water could ever be cut off in a modern neighbourhood at all."
          ],
          answer: 1,
          tests: "“o sea” as a conclusion-drawing connector"
        },
        {
          prompt: "Which sentence correctly reports “he told me he's coming late”?",
          choices: [
            "Él me habló que viene tarde.",
            "Él me dijo que viene tarde.",
            "Él me contó de que viene tarde."
          ],
          answer: 1,
          tests: "decir for reported speech, not hablar"
        }
      ]
    },
    en: {
      title: "Pasar el chisme del corte de agua",
      situation:
        "Alejandra está en el pasillo de su edificio en Toronto cuando Karen, una vecina, le cuenta un rumor: dizque van a cortar el agua mañana. Alejandra tiene que entender de dónde viene la noticia, sacar la conclusión práctica y ofrecer avisarles a otros vecinos — todo relatando lo que unos y otros dijeron.",
      setting: {
        who: "Karen lleva seis años en el piso de Alejandra y se entera de todo primero. Alejandra todavía es nueva y depende de vecinas como ella para saber qué pasa.",
        what: "Un cruce rápido en el pasillo en el que Karen pasa un rumor sobre el corte de agua, y Alejandra decide qué hacer al respecto.",
        when: "El final de la tarde, cuando la gente llega a casa y se detiene a hablar junto a los ascensores.",
        where: "Toronto, un edificio donde las noticias corren por el grupo de chat y por el tablón del vestíbulo.",
        why: "Porque un corte de agua significa llenar botellas esta noche, y porque pasar el aviso con precisión — quién dijo qué, y con cuánta seguridad — es como un edificio se cuida a sí mismo."
      },
      address: {
        form: "mixed",
        who: "Karen y Alejandra se tratan por el nombre de pila y usan el mismo “you” desde la primera palabra.",
        why: "El inglés tiene una sola segunda persona, así que la cercanía la marca todo lo demás: el nombre de pila, el “hey” de entrada, y las frases cortas y directas. No hay que elegir entre tú y usted; lo carga el tono.",
        ifYouSwitch:
          "Ponerse muy formal — “Excuse me, ma'am” — con una vecina que te habla de tú a tú sonaría distante y raro, como si le hablaras a una funcionaria y no a la del piso."
      },
      dialogue: [
        {
          speaker: "Karen",
          target: "Hey, apparently they're shutting the water off tomorrow.",
          translation: "Oye, dizque van a cortar el agua mañana.",
          pronunciation: "jei, a-PA-rent-li deir SHA-ting da UO-ter of tu-MO-rou",
          literal: "Oye, aparentemente ellos están apagando el agua mañana.",
          why: "“Apparently” hace el trabajo del colombiano “dizque”: marca lo que sigue como algo que se oyó, no como un hecho confirmado. La diferencia es de posición: “apparently” abre la frase, mientras que “dizque” se pega justo antes del verbo."
        },
        {
          speaker: "Alejandra",
          target: "Really? Who told you that?",
          translation: "¿En serio? ¿Quién te dijo eso?",
          pronunciation: "RI-li? ju tould yu dat",
          literal: "¿De verdad? ¿Quién te dijo eso?",
          why: "“Told you” usa “tell”, que en inglés siempre lleva a la persona: se le dice algo a alguien. Aquí está la trampa central de la lección: “say” y “tell” no son intercambiables, y “who said you?” es un error clásico del hispanohablante."
        },
        {
          speaker: "Karen",
          target: "They told me downstairs that they're fixing a pipe.",
          translation: "Me dijeron abajo que están arreglando un tubo.",
          pronunciation: "dei tould mi DAUN-steirs dat deir FIK-sing a paip",
          literal: "Ellos me dijeron abajo que están arreglando un tubo.",
          why: "“They told me” es el “me dijeron” impersonal: un “ellos” vago que da la fuente sin nombrar a nadie. Fíjese en la estructura “tell someone that…”: “tell” admite el complemento de persona y después la cláusula con “that”."
        },
        {
          speaker: "Alejandra",
          target: "So I mean, we should store some water just in case.",
          translation: "O sea que deberíamos guardar agua por si acaso.",
          pronunciation: "so ai min, ui shud stor sam UO-ter yast in KEIS",
          literal: "Así que quiero decir, deberíamos almacenar algo de agua por si acaso.",
          why: "“I mean” es el “o sea”: reformula o saca la conclusión de lo dicho. “Just in case” traduce “por si acaso” casi exacto. Note que “should” carga el consejo suave que en español llevan el “deberíamos” o el “toca”."
        },
        {
          speaker: "Karen",
          target: "Yeah, I already filled a couple of bottles, just to be safe.",
          translation: "Sí, ya llené un par de botellas, por si las moscas.",
          pronunciation: "ye, ai ol-RE-di fild a KA-pol of BO-tols, yast tu bi SEIF",
          literal: "Sí, ya llené un par de botellas, sólo para estar segura.",
          why: "“Just to be safe” es la variante casual de “just in case”, tal como el español alterna “por si acaso” y “por si las moscas”. Y “a couple of” quiere decir dos o unos pocos, no exactamente una pareja."
        },
        {
          speaker: "Alejandra",
          target: "Got it. I'll tell the folks upstairs.",
          translation: "Listo. Yo les digo a los de arriba.",
          pronunciation: "got it. ail tel da fouks ap-STEIRS",
          literal: "Entendido. Les diré a la gente de arriba.",
          why: "“Tell the folks upstairs” vuelve a usar “tell” con su persona pegada al lado. En español el “les… a los de arriba” duplica el complemento; el inglés lo dice una sola vez, sin pronombre extra, y por eso suena más escueto."
        }
      ],
      vocabulary: [
        {
          term: "say vs tell",
          explanation:
            "El inglés parte “decir” en dos. “Tell” lleva siempre a la persona (“tell me”), y “say” lleva las palabras (“say something”), casi nunca la persona directa.",
          literal: "decir (a alguien) / decir (algo)",
          useWhen:
            "“Tell” cuando nombras a quien recibe el mensaje: “tell her”, “tell the neighbours”. “Say” cuando reportas las palabras: “she said no”.",
          avoidWhen:
            "No los mezcles: “say me” y “tell that to nobody” fallan. “He said me” es el error de hispanohablante más típico con estos dos verbos.",
          register: "neutral",
          region: "Inglés universal; la distinción no cambia de un dialecto a otro.",
          related: ["say", "tell", "speak", "talk"],
          example: {
            target: "Who told you that?",
            translation: "¿Quién te dijo eso?"
          }
        },
        {
          term: "apparently",
          explanation:
            "“Dizque / al parecer.” Marca lo que sigue como algo oído o supuesto, no confirmado, y a veces con una pizca de duda.",
          literal: "aparentemente",
          useWhen:
            "Al pasar un rumor que no respaldas del todo: “apparently they're moving out”.",
          avoidWhen:
            "En un informe formal donde debes sonar seguro; ahí resta certeza igual que “dizque”.",
          register: "neutral",
          region: "Inglés universal; va al inicio de la frase, no pegado al verbo como “dizque”.",
          related: ["supposedly", "I heard", "it seems", "reportedly"],
          example: {
            target: "Apparently they're shutting the water off.",
            translation: "Dizque van a cortar el agua."
          }
        },
        {
          term: "they told me",
          explanation:
            "El “me dijeron” impersonal: un “they” vago que da la fuente de una noticia sin nombrar ni culpar a nadie.",
          literal: "ellos me dijeron",
          useWhen:
            "Al reportar algo oído cuando la fuente es vaga o no importa: “they told me it's closed”.",
          avoidWhen:
            "Cuando deberías ser concreto y responsable; ahí un “they told me” suena evasivo.",
          register: "neutral",
          region: "Inglés universal; el “they” impersonal funciona igual que en español.",
          related: ["I heard", "someone said", "word is", "I was told"],
          example: {
            target: "They told me downstairs that they're fixing a pipe.",
            translation: "Me dijeron abajo que están arreglando un tubo."
          }
        },
        {
          term: "I mean",
          explanation:
            "El “o sea” del inglés: reformula, aclara o saca una conclusión de lo que se acaba de decir. También llena el silencio mientras uno piensa.",
          literal: "quiero decir",
          useWhen:
            "Al reencuadrar o precisar: “I mean, it's fine, but…”; o al concluir: “so I mean, we should go”.",
          avoidWhen:
            "Repetido sin parar, donde se vuelve una muletilla, igual que el “o sea” abusado.",
          register: "friendly informal",
          region: "Inglés universal; muy frecuente en el habla, casi como una coma hablada.",
          related: ["you know", "like", "that is", "in other words"],
          example: {
            target: "So I mean, we should store some water.",
            translation: "O sea que deberíamos guardar agua."
          }
        },
        {
          term: "who told you?",
          explanation:
            "“¿Quién te dijo?” Con “tell” la persona es obligatoria; por eso no se dice “who said you?”, que es un calco del español muy frecuente.",
          literal: "¿quién te dijo?",
          useWhen:
            "Al preguntar por la fuente de algo que alguien acaba de reportar.",
          avoidWhen:
            "Con “say”: “who said you?” está mal. Si usas “say”, la persona va con “to”: “who said that to you?”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["who said that?", "where did you hear that?", "says who?", "who let you know?"],
          example: {
            target: "Really? Who told you that?",
            translation: "¿En serio? ¿Quién te dijo eso?"
          }
        },
        {
          term: "shut off / cut off",
          explanation:
            "Cortar un suministro. “Shut off” y “cut off” valen para el agua, el gas o la luz; el inglés usa la partícula “off” donde el español usa el verbo “cortar”.",
          literal: "apagar / cortar",
          useWhen:
            "Al hablar de servicios que se interrumpen: “the water's shut off”, “they cut off the power”.",
          avoidWhen:
            "Para cortar cosas físicas con cuchillo (“cut”), donde quitar la partícula “off” cambia el sentido.",
          register: "neutral",
          region: "Inglés universal; “shut off” abunda en Norteamérica, y “cut off” se oye en todas partes.",
          related: ["turn off", "shut down", "disconnect", "outage"],
          example: {
            target: "They're shutting the water off tomorrow.",
            translation: "Van a cortar el agua mañana."
          }
        },
        {
          term: "just in case",
          explanation:
            "“Por si acaso.” Justifica una precaución. Su prima más casual es “just to be safe”, como el español alterna con “por si las moscas”.",
          literal: "sólo en caso",
          useWhen:
            "Al explicar una precaución: llenar botellas, llevar paraguas, guardar una copia.",
          avoidWhen:
            "Nada especial que evitar; es neutro. Sólo que “just to be safe” es un pelín más coloquial.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["just to be safe", "to be on the safe side", "in case", "better safe than sorry"],
          example: {
            target: "We should store some water just in case.",
            translation: "Deberíamos guardar agua por si acaso."
          }
        }
      ],
      note:
        "Lo más útil aquí es que el inglés parte “decir” en dos verbos. “Tell” exige a la persona — “tell me”, “tell the neighbours” — y “say” exige las palabras — “say no”, “she said that…”. El error estrella del hispanohablante es “he said me”. Súmale “apparently” para el rumor y “I mean” para concluir, y ya relatas las noticias del edificio como un local.",
      culture: [
        {
          label: "“Say” y “tell”: la división que el español no hace",
          body:
            "El español se arregla con un solo “decir”, pero el inglés obliga a elegir. “Tell” siempre apunta a una persona — “tell me”, “tell the kids” — y “say” apunta a las palabras — “say sorry”, “she said yes”. La regla práctica: si nombras a quien recibe el mensaje, casi siempre es “tell”. Interiorizar esto de una vez borra el error más audible del hispanohablante, el famoso “he said me”."
        },
        {
          label: "El inglés también tiene su “dizque”",
          body:
            "El rumor no vive sólo en español. El inglés lo marca con “apparently”, “supposedly” o “I heard”, y con ellos avisa que la noticia es de segunda mano. La diferencia es de posición: “dizque” se pega al verbo, mientras que “apparently” abre la frase. Quien aprende a colocar estos avisos suena matizado y prudente, en vez de afirmar como un hecho algo que apenas oyó en el ascensor."
        },
        {
          label: "Aquí las noticias corren por el chat del edificio",
          body:
            "Donde el barrio colombiano tiene la tienda de la esquina, muchos edificios norteamericanos tienen un grupo de chat o un tablón en el vestíbulo. Ahí se avisan los cortes de agua, la nieve que viene y el paquete que llegó. “They told me downstairs” o “I saw it in the group chat” son fuentes tan válidas como el tendero. El recién llegado que se suma al chat se entera de todo."
        },
        {
          label: "Cortes de agua, con o sin aviso",
          body:
            "En Norteamérica los cortes de agua programados existen, sobre todo por reparaciones, y suelen anunciarse con un volante en la puerta o un correo del edificio. No siempre hay tanque en la azotea como en Colombia, así que llenar unas botellas la noche anterior sigue siendo buena idea. Avisarle al vecino, como hace Alejandra con los de arriba, es la misma cortesía de siempre: el edificio se cuida solo."
        }
      ],
      pitfalls: [
        {
          mistake: "“He said me that he's coming late.”",
          whyItFails:
            "El español usa un solo “decir”, y de ahí sale el error: “say” no admite la persona como objeto directo. Se dice “he told me” o, con “say”, “he said to me”. “He said me” es la marca más audible del hispanohablante en inglés.",
          sayInstead: "He told me he's coming late."
        },
        {
          mistake: "“Who said you that?”",
          whyItFails:
            "Otra vez la persona pegada a “say”. Para preguntar por la fuente se usa “tell”: “who told you?”. Si insistes en “say”, la persona va con “to”: “who said that to you?”. Sin eso, la pregunta suena mal.",
          sayInstead: "Who told you that?"
        },
        {
          mistake: "“Can you explain me what they said?”",
          whyItFails:
            "El español dice “explícame”, con la persona pegada, pero “explain” en inglés no lleva objeto de persona directo: es “explain to me”. El mismo patrón afecta a “suggest”, “describe” y “mention”. Es un calco muy frecuente.",
          sayInstead: "Can you explain to me what they said?"
        },
        {
          mistake: "“I'm going to tell to my neighbours.”",
          whyItFails:
            "Con “tell” la persona va directa, sin “to”: “tell my neighbours”. El “to” se cuela por analogía con “say to” y con el “decirles a” del español. Sobra, y el oído nativo lo nota enseguida.",
          sayInstead: "I'm going to tell my neighbours."
        }
      ],
      variations: [
        {
          form: "Apparently they're shutting the water off.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Pasar un rumor sin respaldarlo del todo. El aviso vecinal por defecto."
        },
        {
          form: "They told me they're shutting the water off.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Dar la fuente con un “they” vago, sin apostar tu propia certeza."
        },
        {
          form: "I heard the water's getting shut off tomorrow.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Un aviso casual entre vecinos, con “I heard” como abreboca."
        },
        {
          form: "Just so you know, the water's off tomorrow.",
          register: "friendly informal",
          region: "Inglés norteamericano",
          whenToUse: "Avisar de frente y rápido, sin rodeos, a alguien de confianza."
        },
        {
          form: "The building notice says the water will be off.",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Citar una fuente escrita y oficial, más formal para un mensaje o un correo."
        }
      ],
      prompt: "Alejandra pregunta “Who told you that?”. ¿Por qué usa “told” y no “said”?",
      choices: [
        "Porque “tell” siempre lleva a la persona que recibe el mensaje, y aquí esa persona es justamente “you”.",
        "Porque “said” sólo puede usarse en pasado y esta pregunta está claramente hecha en tiempo presente.",
        "Porque “tell” es más formal que “say”, y con un desconocido siempre se prefiere la forma más formal."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Karen abre con “Apparently they're shutting the water off.” ¿Qué señala ese “apparently”?",
          choices: [
            "Que Karen tiene confirmación oficial de la empresa de agua y está segura del corte de mañana.",
            "Que Karen repite algo que oyó — es un rumor que no está garantizando como si fuera un hecho seguro.",
            "Que a Karen le molesta muchísimo el corte y en realidad se está quejando del asunto con Alejandra."
          ],
          answer: 1,
          tests: "“apparently” como marca de rumor, no de certeza"
        },
        {
          prompt: "Un hispanohablante quiere decir “él me dijo que llega tarde”. ¿Cuál es la forma correcta en inglés?",
          choices: [
            "He said me he's coming late.",
            "He said me that he comes late.",
            "He told me he's coming late."
          ],
          answer: 2,
          tests: "“tell” con la persona frente al error “say me”"
        },
        {
          prompt: "Alejandra dice “So I mean, we should store some water.” ¿Qué hace ahí “I mean”?",
          choices: [
            "Saca la conclusión — “o sea, entonces” — de la noticia que Karen le acaba de dar sobre el agua.",
            "Cita las palabras exactas de Karen para que ella misma las confirme o las niegue en el acto.",
            "Expresa su sorpresa de que el agua pueda cortarse siquiera en un barrio tan moderno como ese."
          ],
          answer: 0,
          tests: "“I mean” como conector que concluye"
        },
        {
          prompt: "¿Cuál de estas frases dice correctamente “les voy a avisar a mis vecinos”?",
          choices: [
            "I'm going to tell to my neighbours.",
            "I'm going to tell my neighbours.",
            "I'm going to say my neighbours."
          ],
          answer: 1,
          tests: "“tell” sin “to” antes de la persona"
        }
      ]
    }
  },
  {
    id: "getting-invited-to-a-paisa-sancocho",
    level: "Starter · Food and drink",
    skills: ["speaking", "listening", "pronunciation"],
    domain: "food and drink",
    register: "friendly informal",
    pathways: ["foundation"],
    verb: "venir",
    review: "pending",
    es: {
      title: "Un sancocho paisa el sábado",
      situation:
        "Alex lleva unas semanas en Medellín y su amigo Memo lo invita a un sancocho el sábado en la casa de la familia. Entre el ¡venga! paisa, el voseo y la pregunta de qué llevar, Alex tiene que aceptar, entender a qué hora caer y no confundir venir con ir cuando hable de moverse hacia la casa de Memo.",
      setting: {
        who: "Memo is a paisa friend Alex met through work — warm, funny, and quick to invite. Alex is the newcomer, still tuning his ear to the Medellín accent and the voseo.",
        what: "A quick, happy invitation to a Saturday sancocho, the all-afternoon pot stew that anchors a paisa weekend.",
        when: "A weekday afternoon, the two of them catching each other on the way out, setting the plan for Saturday around noon.",
        where: "Medellín, where friends default to vos and an invitation to eat is really an invitation to stay for hours.",
        why: "Because accepting an invitation well — knowing when to arrive, what to bring, and how to say you're on your way — is how a newcomer turns a coworker into a real friend."
      },
      address: {
        form: "vos",
        who: "Memo and Alex use vos with each other, the everyday informal of Medellín and the surrounding coffee region.",
        why: "In paisa land vos is the warm default among friends — softer and friendlier here than tú, which can even sound a touch distant or bookish between close buddies. The verb endings shift (vení, venís, véngase) but the closeness is the whole point.",
        ifYouSwitch:
          "Sliding into usted with a paisa friend your own age can read as cold or even annoyed, as if you were suddenly keeping your distance. Save usted for elders, strangers, and service encounters."
      },
      dialogue: [
        {
          speaker: "Memo",
          target: "¡Venga, Alex! El sábado hacemos sancocho en la casa. ¿Se viene?",
          translation: "Hey, Alex! Saturday we're making sancocho at the house. You coming?",
          pronunciation: "BEN-ga, A-lex! el SA-ba-do a-SE-mos san-KO-cho en la KA-sa. se BYE-ne?",
          literal: "Come, Alex! On Saturday we make sancocho at the house. Do you come yourself?",
          why: "Paisa “¡venga!” opens the sentence as a warm attention-getter, not a literal order to walk over. “¿Se viene?” pairs venir with a reflexive “se” that adds a friendly, personal “are you joining us?” colour that is very common in Colombia."
        },
        {
          speaker: "Alex",
          target: "¡Uy, claro que sí! ¿Y a qué horas vengo?",
          translation: "Oh, of course! And what time should I come?",
          pronunciation: "ui, KLA-ro ke si! i a ke O-ras BEN-go?",
          literal: "Oh, clear that yes! And at what hours do I come?",
          why: "Alex leans on venir toward Memo's house, natural because they are already treating the house as the shared destination. Note that Colombians often say “a qué horas” in the plural where English keeps “what time” singular."
        },
        {
          speaker: "Memo",
          target: "Véngase desde el mediodía, que eso arranca temprano.",
          translation: "Come from noon on — the thing gets going early.",
          pronunciation: "BEN-ga-se DES-de el me-dyo-DI-a, ke E-so a-RAN-ka tem-PRA-no.",
          literal: "Come yourself from midday, that that starts early.",
          why: "“Véngase” is the vos and usted imperative of venir with a cosy reflexive “se” that makes the invitation homier. “Eso arranca” uses arrancar, literally to yank or start, for “it kicks off” — a very Colombian way to say an event begins."
        },
        {
          speaker: "Alex",
          target: "Listo pues. ¿Y llevo algo? ¿Una gaseosa?",
          translation: "Alright then. And should I bring something? A soda?",
          pronunciation: "LIS-to pues. i YE-vo AL-go? U-na ga-SE-o-sa?",
          literal: "Ready then. And do I take something? A soda?",
          why: "From Alex's home the drink travels away from him toward the party, so Spanish uses llevar (to take away from here), not traer (to bring toward here). “Listo pues” is the paisa seal-the-deal tag, and “gaseosa” is the standard Colombian word for a soft drink."
        },
        {
          speaker: "Memo",
          target: "Traiga lo que quiera, pero de una lo importante es que venga con hambre.",
          translation: "Bring whatever you want, but honestly the main thing is to come hungry.",
          pronunciation: "TRAI-ga lo ke KYE-ra, PE-ro de U-na lo im-por-TAN-te es ke BEN-ga con AM-bre.",
          literal: "Bring what you want, but of one the important is that you come with hunger.",
          why: "From Memo's side, at the house, things move toward him, so he says traer (traiga). Same object, opposite verb from Alex's llevar — that is the deixis. “De una” is the paisa “right away / for sure”, and “venga con hambre” reuses venir in the subjunctive after “que”."
        },
        {
          speaker: "Alex",
          target: "De una, ahí estaré. ¡Nos vemos el sábado, parce!",
          translation: "For sure, I'll be there. See you Saturday, buddy!",
          pronunciation: "de U-na, ai es-ta-RE. nos BE-mos el SA-ba-do, PAR-se!",
          literal: "Of one, there I-will-be. We see each other on Saturday, buddy!",
          why: "Alex signs off with “de una”, echoing Memo and showing he is picking up the local rhythm. “Parce” is the Medellín word for mate or buddy, clipped from “parcero” — a small badge of easy paisa friendship."
        }
      ],
      vocabulary: [
        {
          term: "venir",
          explanation:
            "To come — motion toward where the speaker is, or toward a place both speakers are treating as the reference point. It does not cover movement toward some third place; that job belongs to “ir”.",
          literal: "to come",
          useWhen:
            "When someone or something moves toward you or your shared “here”: “¿Venís?”, “Vení temprano”, “¿A qué horas vengo?”.",
          avoidWhen:
            "When you move toward the listener's place instead — Spanish uses “ir” there (“voy a tu casa”), never “vengo”.",
          register: "neutral",
          region: "Universal Spanish; the vos forms vení and venís are the paisa default in Medellín.",
          related: ["ir", "llegar", "volver", "traer"],
          example: {
            target: "¿A qué horas vengo?",
            translation: "What time should I come?"
          }
        },
        {
          term: "¡venga!",
          explanation:
            "A paisa all-purpose opener that grabs attention or signals agreement — much closer to “hey” or “come on” than a literal command to walk over.",
          literal: "come (imperative)",
          useWhen:
            "To start a sentence warmly, urge someone along, or agree: “¡Venga, le cuento!”, “¡Venga pues!”.",
          avoidWhen:
            "When you truly mean “walk toward me now” — context usually makes the literal reading clear, so leaning on it too hard sounds off.",
          register: "friendly informal",
          region: "Strongest in Medellín and the coffee region; understood across Colombia.",
          related: ["venga pues", "venga le cuento", "hágale", "eso"],
          example: {
            target: "¡Venga, le cuento una cosa!",
            translation: "Hey, let me tell you something!"
          }
        },
        {
          term: "véngase / vení",
          explanation:
            "The friendly imperatives of venir: “véngase” with a cosy reflexive “se”, and the vos form “vení”, both meaning “come” wrapped in paisa warmth.",
          literal: "come (yourself) / come (vos)",
          useWhen:
            "Inviting a friend over in Medellín: “Véngase el sábado”, “Vení temprano”.",
          avoidWhen:
            "In formal or written invitations, where a neutral “Ven” (tú) or “Venga usted” fits the register better.",
          register: "friendly informal",
          region: "Voseo imperative typical of Medellín, Cali, and the coffee region.",
          related: ["vení", "venite", "véngase", "arrímese"],
          example: {
            target: "Véngase desde el mediodía.",
            translation: "Come from noon on."
          }
        },
        {
          term: "voy vs vengo",
          explanation:
            "The deixis pair. “Voy” is motion away from where I am now — including toward you; “vengo” is motion toward where I am. Answering a call, Spanish shouts “¡Voy!”, never “¡Vengo!”.",
          literal: "I go vs I come",
          useWhen:
            "“Voy” when heading toward the listener or a third place; “vengo” only when something moves toward your own spot.",
          avoidWhen:
            "Don't answer a summons with “¡Vengo!” — “¡Ya vengo!” actually means “I'll be right back”.",
          register: "neutral",
          region: "Universal Spanish; the logic is identical across Colombia.",
          related: ["ir", "venir", "ya voy", "ya vengo"],
          example: {
            target: "¡Ya voy!",
            translation: "Coming! (I'm on my way)"
          }
        },
        {
          term: "llevar vs traer",
          explanation:
            "The object-motion pair. “Llevar” carries something away from here toward there; “traer” brings something toward here. English “bring” collapses both, which is exactly what trips learners up.",
          literal: "to take vs to bring",
          useWhen:
            "From home planning the party you “llevás” a dish; once at the party the host says “traé”.",
          avoidWhen:
            "Don't use “traer” for something you carry away from your current spot — that is “llevar”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["traer", "llevar", "cargar", "aportar"],
          example: {
            target: "¿Y llevo algo? ¿Una gaseosa?",
            translation: "And should I bring something? A soda?"
          }
        },
        {
          term: "de una",
          explanation:
            "A paisa staple meaning “right away”, “for sure”, or “let's do it” — instant agreement with zero hesitation.",
          literal: "of one",
          useWhen:
            "Accepting fast or urging action: “¿Vamos?” “¡De una!”.",
          avoidWhen:
            "In formal settings, where “claro que sí” or “por supuesto” reads better.",
          register: "friendly informal",
          region: "Very strong in Medellín; widespread across Colombia.",
          related: ["hágale", "listo", "de once", "eso"],
          example: {
            target: "De una, ahí estaré.",
            translation: "For sure, I'll be there."
          }
        },
        {
          term: "listo pues",
          explanation:
            "The paisa deal-sealer: “listo” (okay, ready) plus the little tag “pues” that softens and closes the point, wrapping up a plan warmly.",
          literal: "ready then",
          useWhen:
            "Confirming a plan: “Listo pues, nos vemos el sábado”.",
          avoidWhen:
            "In formal writing, where a plain “De acuerdo” or “Perfecto” fits better.",
          register: "friendly informal",
          region: "The paisa “pues” is iconic of Medellín; understood countrywide.",
          related: ["listo", "bueno pues", "hágale pues", "vale pues"],
          example: {
            target: "Listo pues. ¿Y llevo algo?",
            translation: "Alright then. And should I bring something?"
          }
        }
      ],
      note:
        "The one thing to lock in: venir points toward where the speaker stands, so heading to someone else's place is “voy a tu casa”, never “vengo”. And when a paisa calls you over, answer “¡Ya voy!” — “¡Ya vengo!” actually promises you'll be right back. Add the local “¡venga!” as a friendly opener and the vos forms vení and véngase, and a Medellín invitation starts to feel like home.",
      culture: [
        {
          label: "¡Venga! — the paisa Swiss-army word",
          body:
            "In Medellín “¡venga!” does far more than tell you to come. It opens a story (“venga le cuento”), urges a friend along (“venga pues”), softens a request, and even signals cheerful agreement. Tone and context decide whether any real motion is involved — usually none is. Treat it like “hey” or “come on”, a warm little runway before the real sentence, and you'll stop taking it literally and glancing around for where to walk."
        },
        {
          label: "Voy or vengo? Spanish stands where the speaker stands",
          body:
            "Spanish anchors motion to the speaker. “Venir” means moving toward me, here; heading anywhere else — even toward the very person I'm talking to — is “ir”. That is why “I'm coming to your house” becomes “voy a tu casa”, and why a shout of “¡Ya voy!” answers a call while “¡Ya vengo!” quietly means “I'll be right back”. English lets “come” drift toward the listener; Spanish keeps it firmly planted on the speaker's own spot."
        },
        {
          label: "Sancocho is an afternoon, not a dish",
          body:
            "A paisa sancocho is a whole Saturday: a big pot of chicken, beef, or fish simmered with plantain, yuca, potato, and corn, often over a wood fire at the finca. People drift in from midday, drinks appear, someone tends the pot for hours, and lunch stretches lazily into the afternoon. Being invited to sancocho is being invited to belong for the day — so clear your calendar and, exactly as Memo says, come hungry."
        },
        {
          label: "Vos in Medellín: friendship's default setting",
          body:
            "In much of Colombia tú is the informal norm, but in Medellín and the coffee region friends reach for vos: “vení”, “venís”, “¿vos qué?”. It sounds warm and local, never rough. Tú can even feel a little bookish among close paisa friends, and usted marks either respect or, between buddies, a sudden coolness. Match your friend's vos and you quietly signal that you're settling into the paisa way of talking."
        }
      ],
      pitfalls: [
        {
          mistake: "Vengo a tu casa el sábado.",
          whyItFails:
            "This calques English “I'm coming to your house”. Spanish “venir” only covers motion toward the speaker's own spot, so moving toward the listener's place takes “ir”. To Colombian ears “vengo a tu casa” sounds backwards, as if the house were already where you are.",
          sayInstead: "Voy a tu casa el sábado."
        },
        {
          mistake: "Traigo una gaseosa a la fiesta.",
          whyItFails:
            "From your home the soda travels away from you toward the party, which is “llevar”, not “traer”. “Traer” would mean carrying it toward your current spot. English “bring” hides this split, so learners reach for “traer” far too often.",
          sayInstead: "Llevo una gaseosa a la fiesta."
        },
        {
          mistake: "¡Ya vengo! (shouted when Memo calls you to the table)",
          whyItFails:
            "In Colombia “¡ya vengo!” announces that you're stepping away and will return shortly — the opposite of what you mean when someone calls you over. To say you're heading toward them right now, Spanish uses “voy”.",
          sayInstead: "¡Ya voy!"
        },
        {
          mistake: "¿Tú te vienes el sábado? (to a paisa buddy)",
          whyItFails:
            "It's perfectly grammatical, but in Medellín close friends default to vos, so tú can sound faintly distant or textbookish. Matching the local voseo signals that you're part of the group rather than reciting a phrasebook.",
          sayInstead: "¿Vos te venís el sábado?"
        }
      ],
      variations: [
        {
          form: "¿Se viene el sábado?",
          register: "friendly informal",
          region: "Medellín / paisa",
          whenToUse: "The easy, warm invite among friends, with the friendly reflexive “se”."
        },
        {
          form: "¿Vas a venir el sábado?",
          register: "neutral",
          region: "Colombia, general",
          whenToUse: "A plain, direct invitation that works anywhere in the country."
        },
        {
          form: "¿Te animás a venir el sábado?",
          register: "friendly informal",
          region: "Medellín / voseo",
          whenToUse: "Nudging a hesitant friend with vos — “are you up for coming?”."
        },
        {
          form: "¿Le provoca venir el sábado?",
          register: "friendly",
          region: "Colombia (Andean / Bogotá)",
          whenToUse: "Colombian “provocar” for “do you feel like it” — polite but still warm."
        },
        {
          form: "¿Sería tan amable de venir el sábado?",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "A formal, respectful invitation for someone you address as usted."
        }
      ],
      prompt:
        "Alex is at home and wants to tell Memo he'll head over to Memo's place on Saturday. Which sentence is right?",
      choices: [
        "Voy a tu casa el sábado.",
        "Vengo a tu casa el sábado.",
        "Ya vengo a tu casa el sábado."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt:
            "Memo shouts “¡El sancocho ya está!” from across the yard and you want to say you're on your way. What do you call back?",
          choices: ["¡Ya voy!", "¡Ya vengo!", "¡Ya venís!"],
          answer: 0,
          tests: "voy vs vengo when answering a summons"
        },
        {
          prompt:
            "You're at home deciding what to carry to the sancocho. How do you say you'll take a bottle of soda?",
          choices: [
            "Traigo una gaseosa para el sancocho.",
            "Vengo con una gaseosa para el sancocho.",
            "Llevo una gaseosa para el sancocho."
          ],
          answer: 2,
          tests: "llevar vs traer from the guest's home"
        },
        {
          prompt:
            "In Medellín, Memo says “¡Venga, le cuento una cosa!” What is he most likely doing?",
          choices: [
            "Ordering you to physically walk all the way over to where he's standing before he will say a single word.",
            "Getting your attention to share some news — here “¡venga!” is a friendly opener, not a literal command to move.",
            "Scolding you because last weekend you took far too long to come over to his house for lunch with the family."
          ],
          answer: 1,
          tests: "paisa “¡venga!” as an attention-getter"
        },
        {
          prompt:
            "Memo is a paisa friend your own age. Which invitation sounds most natural in Medellín?",
          choices: [
            "¿Tú quieres venir el sábado a la casa?",
            "¿Vos te venís el sábado para la casa?",
            "¿Usted desea venir el sábado a la casa?"
          ],
          answer: 1,
          tests: "paisa voseo as the default among friends"
        }
      ]
    },
    en: {
      title: "Una invitación a cenar el sábado",
      situation:
        "Alejandra lleva poco en Toronto y su amiga Jenny la invita a cenar el sábado en su casa. Es tipo potluck, así que Alejandra tiene que aceptar, entender que en inglés se responde “I'm coming” y no “I'm going” cuando la llaman, ofrecer llevar algo con “bring” y no “take”, y reconocer “come over” como la invitación casual del día a día.",
      setting: {
        who: "Jenny es una amiga canadiense que Alejandra conoció en el trabajo: cálida y de invitar rápido. Alejandra es la recién llegada, todavía afinando el oído al inglés del día a día.",
        what: "Una invitación sencilla y alegre a cenar el sábado, estilo potluck, donde cada quien lleva un plato para compartir.",
        when: "Una tarde entre semana, las dos cruzándose de salida, dejando el plan listo para el sábado.",
        where: "Toronto, donde “come over” es la invitación informal de siempre y llevar algo a la mesa es casi una regla no escrita.",
        why: "Porque aceptar bien una invitación —saber cuándo llegar, qué llevar y cómo decir que ya vas— es como una recién llegada convierte a una compañera de trabajo en una amiga de verdad."
      },
      address: {
        form: "mixed",
        who: "Jenny y Alejandra se tratan por el nombre de pila y usan el mismo “you” desde la primera palabra.",
        why: "El inglés tiene una sola segunda persona, así que la cercanía no se marca con el pronombre sino con todo lo demás: el nombre de pila, el “hey” de entrada y las frases cortas y relajadas. No hay que elegir entre tú y usted; lo carga el tono.",
        ifYouSwitch:
          "Ponerse de repente muy formal —“Would you be so kind…”— con una amiga que te habla de tú a tú sonaría tieso y distante, como si le hablaras a una funcionaria y no a una amiga."
      },
      dialogue: [
        {
          speaker: "Jenny",
          target: "Hey, Ale! Come over for dinner on Saturday — it's a potluck.",
          translation: "¡Hola, Ale! Vení a cenar el sábado — es un potluck.",
          pronunciation: "jei, A-li! kam OU-ver for DI-ner on SA-tur-dei — its a POT-lok",
          literal: "¡Oye, Ale! Vení para cenar el sábado — es un potluck.",
          why: "“Come over” es la invitación informal por excelencia: “pasate por mi casa”. Fijate que el inglés usa “come” hacia la persona que habla; más adelante verás que responderle bien también pide “come”, no “go”."
        },
        {
          speaker: "Alejandra",
          target: "Oh, I'd love to! What time should I come?",
          translation: "¡Ay, me encantaría! ¿A qué horas voy?",
          pronunciation: "ou, aid lov tu! uot taim shud ai kam?",
          literal: "¡Oh, me encantaría! ¿A qué hora debería venir?",
          why: "En inglés, hacia la casa de Jenny se dice “come”, porque el “come” inglés apunta también hacia el oyente. En español dirías “voy”, y ese cruce es justo el que hay que domar."
        },
        {
          speaker: "Jenny",
          target: "Come over around six — but no rush, it's casual.",
          translation: "Llegá tipo seis — pero sin afán, es sencillo.",
          pronunciation: "kam OU-ver a-RAUND siks — bat nou rash, its KA-shu-al",
          literal: "Vení como a las seis — pero sin prisa, es informal.",
          why: "Otra vez “come over” para la invitación. “No rush” y “casual” avisan que la hora es flexible; aun así, en Canadá “around six” suele significar seis y pico, no las siete y media."
        },
        {
          speaker: "Alejandra",
          target: "Should I bring something? Maybe a dessert?",
          translation: "¿Llevo algo? ¿Tal vez un postre?",
          pronunciation: "shud ai bring SAM-thing? MEI-bi a di-ZERT?",
          literal: "¿Debería traer algo? ¿Tal vez un postre?",
          why: "Aquí el inglés usa “bring” porque la comida va hacia donde estará el oyente. En español dirías “llevo”. Ese “bring/take” es el espejo de nuestro “traer/llevar”, pero repartido distinto."
        },
        {
          speaker: "Jenny",
          target: "Bring whatever you like — honestly, just come hungry.",
          translation: "Traé lo que quieras — de verdad, sólo vení con hambre.",
          pronunciation: "bring uat-E-ver yu laik — ON-est-li, yast kam JAN-gri",
          literal: "Traé lo que te guste — honestamente, sólo vení con hambre.",
          why: "Desde la casa de Jenny, la comida se mueve hacia ella, así que también dice “bring”. Y “come hungry” vuelve a usar “come” hacia la anfitriona: en inglés casi todo el evento se piensa hacia quien invita."
        },
        {
          speaker: "Alejandra",
          target: "Perfect, I'll be there. See you Saturday!",
          translation: "Perfecto, ahí estaré. ¡Nos vemos el sábado!",
          pronunciation: "PER-fekt, ail bi der. si yu SA-tur-dei!",
          literal: "Perfecto, estaré ahí. ¡Nos vemos el sábado!",
          why: "“I'll be there” —con “there”, no “here”— confirma la asistencia mirando hacia la casa de Jenny. “See you Saturday” es la despedida estándar para cerrar un plan: corta y cálida."
        }
      ],
      vocabulary: [
        {
          term: "come vs go",
          explanation:
            "El par de deixis del inglés. “Come” apunta hacia quien habla o hacia el oyente; “go” apunta lejos de ambos. Por eso, cuando te llaman, respondés “I'm coming”, no “I'm going”.",
          literal: "venir vs ir",
          useWhen:
            "“Come” hacia la persona con quien hablás o hacia su lugar; “go” hacia un tercer sitio distinto.",
          avoidWhen:
            "No respondas a un llamado con “I'm going” — suena a que te vas, no a que ya vas hacia quien te llama.",
          register: "neutral",
          region: "Inglés universal; la lógica difiere del español, que usa “ir” donde el inglés usa “come”.",
          related: ["come", "go", "come over", "head over"],
          example: {
            target: "Yes, I'm coming!",
            translation: "¡Ya voy!"
          }
        },
        {
          term: "come over",
          explanation:
            "La invitación informal por excelencia: “pasate por mi casa”. Implica ir a la casa de quien invita para quedarse un rato.",
          literal: "venir (a mi lado)",
          useWhen:
            "Al invitar a alguien a tu casa de manera relajada: “Come over for dinner”.",
          avoidWhen:
            "En invitaciones formales por escrito, donde encaja mejor “join us” o “we'd like to invite you”.",
          register: "friendly informal",
          region: "Inglés norteamericano cotidiano; entendido en todas partes.",
          related: ["come by", "stop by", "swing by", "head over"],
          example: {
            target: "Come over for dinner on Saturday.",
            translation: "Vení a cenar el sábado."
          }
        },
        {
          term: "come here",
          explanation:
            "Es “vení acá”: algo inmediato y cercano. No sirve para invitar a un evento futuro; para eso va “come over”.",
          literal: "vení acá",
          useWhen:
            "Para pedir que alguien se acerque ya mismo: “Come here, look at this”.",
          avoidWhen:
            "Para una invitación a cenar el sábado — ahí “come here” suena a orden, no a invitación.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["come over", "over here", "come closer", "get over here"],
          example: {
            target: "Come here, look at this!",
            translation: "¡Vení acá, mirá esto!"
          }
        },
        {
          term: "bring vs take",
          explanation:
            "El par de objeto en movimiento. “Bring” es hacia donde está o estará el oyente; “take” es lejos de ese punto. Es el espejo de “traer/llevar”, pero repartido distinto.",
          literal: "traer vs llevar",
          useWhen:
            "Al ofrecer llevar algo a casa de alguien: “I'll bring wine”.",
          avoidWhen:
            "No uses “take” hacia el lugar del oyente: “I'll take wine to your place” suena al revés.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["bring", "take", "bring along", "pick up"],
          example: {
            target: "Should I bring something?",
            translation: "¿Llevo algo?"
          }
        },
        {
          term: "for sure",
          explanation:
            "El “de una” del inglés: aceptación entusiasta y sin dudarlo. Sirve para confirmar un plan con energía.",
          literal: "por seguro",
          useWhen:
            "Al aceptar con ganas: “Are you coming?” “For sure!”.",
          avoidWhen:
            "En contextos muy formales, donde “certainly” o “of course” quedan mejor.",
          register: "friendly informal",
          region: "Inglés norteamericano; muy común en el habla diaria.",
          related: ["definitely", "absolutely", "of course", "for real"],
          example: {
            target: "For sure, I'll be there!",
            translation: "De una, ahí estaré."
          }
        },
        {
          term: "potluck",
          explanation:
            "Una comida donde cada invitado lleva un plato para compartir. Muy común en Canadá y Estados Unidos para reuniones informales.",
          literal: "olla de la suerte",
          useWhen:
            "Al organizar o aceptar una comida colectiva: “It's a potluck, bring a dish”.",
          avoidWhen:
            "Si el anfitrión pone toda la comida — entonces no es potluck y no hace falta llevar plato.",
          register: "neutral",
          region: "Norteamérica; el concepto existe en Colombia como “traído” o “cada uno lleva algo”.",
          related: ["bring a dish", "potluck dinner", "share a meal", "host"],
          example: {
            target: "It's a potluck on Saturday.",
            translation: "El sábado es potluck."
          }
        },
        {
          term: "I'm on my way",
          explanation:
            "“Voy en camino”: ya saliste o estás a punto de llegar. Sirve para avisar que vas hacia la persona.",
          literal: "estoy en mi camino",
          useWhen:
            "Para avisar que ya vas: “I'm on my way, five minutes”.",
          avoidWhen:
            "Si todavía no salís; decirlo sin moverte suena a excusa.",
          register: "friendly informal",
          region: "Inglés universal; al escribir se abrevia mucho como “omw”.",
          related: ["on my way", "almost there", "I'm coming", "be right there"],
          example: {
            target: "I'm on my way!",
            translation: "¡Voy en camino!"
          }
        }
      ],
      note:
        "Lo clave: el “come” inglés apunta hacia vos o hacia tu oyente, así que cuando te llaman respondés “I'm coming”, no “I'm going” —que suena a que te vas—. Para invitar se usa “come over”; para ofrecer llevar algo hacia donde está el otro, “bring”, no “take”. Y en un potluck cada quien lleva un plato. Con eso, una cena del sábado en Toronto fluye sin tropiezos.",
      culture: [
        {
          label: "«Come» y «go»: hacia vos, no sólo hacia mí",
          body:
            "El inglés reparte el movimiento distinto al español. “Come” vale para acercarse a quien habla y también a la persona con quien hablás; “go” es alejarse de ambos. Por eso “voy a tu casa” se dice “I'm coming to your place”, y cuando alguien te llama a la mesa respondés “I'm coming!”. Contestar “I'm going!” suena a que te estás yendo del lugar, justo lo contrario de lo que querés decir."
        },
        {
          label: "El potluck: aquí cada quien lleva un plato",
          body:
            "En Canadá y Estados Unidos, muchas reuniones informales son potluck: el anfitrión pone la casa y quizá el plato principal, y cada invitado lleva algo para compartir —una ensalada, un postre, una bebida—. Preguntar “What should I bring?” no es indiscreto; es lo esperado. En Colombia el anfitrión suele poner todo, así que la costumbre puede sorprender. Llevar algo, aunque sea pequeño, siempre cae bien."
        },
        {
          label: "«Come over»: la invitación de todos los días",
          body:
            "“Come over” es el corazón de la hospitalidad informal norteamericana: “pasate por la casa”. No exige etiqueta ni fecha ceremoniosa; puede ser esta tarde o el sábado. Es más suelta que un “te invito formalmente” y más cálida que un “vení” a secas. Cuando alguien te dice “come over anytime”, lo dice en serio dentro de lo razonable: es una puerta abierta, no una simple cortesía vacía."
        },
        {
          label: "Llegar a la hora… o casi",
          body:
            "En Canadá, si te dicen “around six”, se espera que llegues cerca de las seis: seis y diez está bien, las siete no. La “hora colombiana” —llegar cómodamente tarde— puede leerse como descuido. Para una cena, apuntá a la hora dicha o cinco a diez minutos después; si vas a demorarte, un mensaje de “running late” se agradece. Puntualidad sin rigidez es la norma más segura."
        }
      ],
      pitfalls: [
        {
          mistake: "Jenny calls “Dinner's ready!” and you answer “I'm going!”",
          whyItFails:
            "El español usa “voy” hacia el oyente, pero en inglés eso se dice “I'm coming”. “I'm going” apunta lejos de la persona que te llama, así que suena a que te estás yendo, no a que ya vas hacia ella.",
          sayInstead: "Coming! / I'm coming!"
        },
        {
          mistake: "I'll take some wine to your place.",
          whyItFails:
            "Hacia el lugar del oyente, el inglés usa “bring”, no “take”. “Take” apunta lejos de ese punto, así que la frase suena al revés. Es el mismo cruce de “traer/llevar”, sólo que repartido distinto.",
          sayInstead: "I'll bring some wine to your place."
        },
        {
          mistake: "Come here on Saturday for dinner.",
          whyItFails:
            "“Come here” es “vení acá”, algo inmediato y cercano, no una invitación a un evento futuro. Para invitar a cenar el sábado, la fórmula natural es “come over”.",
          sayInstead: "Come over on Saturday for dinner."
        },
        {
          mistake: "Every Saturday we're coming to Jenny's for dinner.",
          whyItFails:
            "Para un hábito, el inglés usa el presente simple, no el continuo. “We're coming” describe algo en curso o un plan puntual; la costumbre semanal pide “we come”.",
          sayInstead: "Every Saturday we come to Jenny's for dinner."
        }
      ],
      variations: [
        {
          form: "Wanna come over Saturday?",
          register: "friendly informal",
          region: "Inglés norteamericano informal",
          whenToUse: "Invitación súper casual entre amigos; “wanna” es “want to” hablado."
        },
        {
          form: "Do you want to come on Saturday?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "La invitación estándar, clara y sin adornos, para casi cualquier persona."
        },
        {
          form: "You should come by on Saturday.",
          register: "friendly",
          region: "Inglés norteamericano",
          whenToUse: "Una sugerencia relajada; “come by” es “darse una vuelta” sin compromiso."
        },
        {
          form: "Feel free to come over whenever.",
          register: "friendly",
          region: "Inglés universal",
          whenToUse: "Una invitación abierta y flexible, sin una hora fija."
        },
        {
          form: "We'd love to have you over on Saturday.",
          register: "polite",
          region: "Inglés universal",
          whenToUse: "Cálida y un punto más formal; buena para parejas o gente que conocés menos."
        }
      ],
      prompt:
        "Jenny grita desde la cocina: “Dinner's ready!”. Alejandra está en la sala y quiere decir que ya va. ¿Qué responde en inglés?",
      choices: ["Yes, I'm coming!", "Yes, I'm going!", "Yes, I go now!"],
      answer: 0,
      practiceExtra: [
        {
          prompt:
            "Alejandra ofrece “Should I bring something?” y usa “bring”, no “take”. ¿Por qué “bring”?",
          choices: [
            "Porque “bring” es más formal que “take”, y con una anfitriona siempre se prefiere lo más formal.",
            "Porque la comida va hacia donde estará la anfitriona, y hacia ese punto el inglés usa “bring”.",
            "Porque “take” sólo sirve para objetos pequeños, mientras que “bring” se reserva para la comida."
          ],
          answer: 1,
          tests: "bring vs take según hacia dónde va la cosa"
        },
        {
          prompt:
            "Jenny invita diciendo “Come over on Saturday”, no “Come here”. ¿Qué diferencia hay entre las dos?",
          choices: [
            "“Come here” es más cortés que “come over”, pero las dos sirven para invitar a una cena el sábado.",
            "“Come over” es venir en carro y “come here” venir a pie; sólo cambia el medio de transporte usado.",
            "“Come over” es una invitación a pasar por su casa; “come here” es “vení acá”, algo inmediato y cercano."
          ],
          answer: 2,
          tests: "«come over» como invitación frente a «come here»"
        },
        {
          prompt:
            "Alejandra va a las cenas de Jenny todos los sábados, como costumbre. ¿Cuál es correcta?",
          choices: [
            "Every Saturday I'm coming to Jenny's for dinner.",
            "Every Saturday I was coming to Jenny's for dinner.",
            "Every Saturday I come to Jenny's for dinner."
          ],
          answer: 2,
          tests: "presente simple para hábitos, no el continuo"
        },
        {
          prompt:
            "Alejandra confirma “For sure, I'll be there!”. ¿Por qué dice “there” y no “here”?",
          choices: [
            "Porque habla del lugar de Jenny, que está lejos de ella: “there” apunta hacia allá, no hacia acá.",
            "Porque “here” sólo se usa para objetos cercanos, mientras que “there” se usa para lugares y eventos.",
            "Porque “there” es la forma cortés y “here” sonaría demasiado directa al confirmar la invitación."
          ],
          answer: 0,
          tests: "«there» por deixis al hablar del lugar del otro"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/03-foundation-ability.js");
