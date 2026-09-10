/*
 * Lesson block: foundation / reading and writing.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Three foundation verbs, one lesson each: escribir (write / message), leer
 * (read) and comprender (understand). Each spines on its verb, named in the
 * `verb` field and spoken in the dialogue, so the coverage report can prove the
 * curriculum is taught rather than merely listed.
 *
 * The two directions are mirrors: same number of dialogue turns, vocabulary
 * entries, culture notes, pitfalls, variations and practice questions, and the
 * same optional slots filled on the same rows. title and situation are Spanish
 * in both directions; every other explanatory field is written in the language
 * the reader already has — English in the es direction, Spanish in the en one.
 */
lessons.push(
  {
    id: "trading-numbers-to-message-later",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "familiar",
    pathways: ["foundation"],
    verb: "escribir",
    review: "pending",
    es: {
      title: "Pasar el número para escribirse después",
      situation:
        "Acabas de conocer a alguien buena gente en Barranquilla y quieres seguir en contacto. En la Costa la gente dice “escríbeme” y quiere decir un mensajito de WhatsApp, no una carta. Vas a intercambiar números y a quedar en escribirte luego, con el calor costeño y la confianza del tú.",
      setting: {
        who: "Nélida is a warm barranquillera in her forties who has just spent an afternoon chatting with Alex, a foreigner she has taken a liking to.",
        what: "Swapping phone numbers so they can keep in touch on WhatsApp — the way almost every new friendship in Colombia gets sealed.",
        when: "Late afternoon, as the gathering winds down and people start drifting toward the door to say their goodbyes.",
        where: "A shady backyard in Barranquilla, on the Caribbean coast, where speech is fast, warm and dotted with “escríbeme”.",
        why: "Because a number with no first message is a dead end; the promise to write is what actually keeps two new friends connected."
      },
      address: {
        form: "tú",
        who: "Nélida and Alex settle into tú quickly, the friendly default once two people on the coast have shared a good afternoon.",
        why: "On the Caribbean coast tú comes out fast and warm between people who have hit it off; usted would feel oddly stiff after such a friendly chat.",
        ifYouSwitch:
          "Sliding into usted here would put distance back between them and read as a small step backward, as if Alex had suddenly turned formal on a new friend."
      },
      dialogue: [
        {
          speaker: "Nélida",
          target: "Alex, pásame tu número y nos escribimos, ¿oíste?",
          translation: "Alex, give me your number and we'll message each other, okay?",
          pronunciation: "AH-lex, PAH-sa-me tu NOO-me-ro i nos es-kree-BEE-mos, oh-EES-te",
          literal: "Alex, pass-me your number and ourselves we-write, you-heard?",
          why: "“Nos escribimos” — reciprocal “we'll write each other” — is the standard way to seal keeping in touch. “¿Oíste?” is a warm coastal tag like “okay?”, not a real question."
        },
        {
          speaker: "Alex",
          target: "Claro que sí. Dime tu número y yo te escribo ahora mismo.",
          translation: "Of course. Tell me your number and I'll message you right now.",
          pronunciation: "KLA-ro ke SEE. DEE-me tu NOO-me-ro i yo te es-KREE-bo a-O-ra MEES-mo",
          literal: "Clear that yes. Tell-me your number and I to-you I-write now same.",
          why: "Present-tense “te escribo” carries an immediate future — Spanish routinely uses the present for something you're about to do. “Ahora mismo” means right now."
        },
        {
          speaker: "Nélida",
          target: "Escríbeme por WhatsApp, mejor. Casi no contesto llamadas.",
          translation: "Message me on WhatsApp, better. I hardly ever answer calls.",
          pronunciation: "es-KREE-be-me por wat-SAP, me-HOR. KA-si no kon-TES-to ya-MA-das",
          literal: "Write-me by WhatsApp, better. Almost not I-answer calls.",
          why: "“Escríbeme” is the tú command, and here it means “text me”, not “write me a letter” — for a Colombian “escribir” defaults to a WhatsApp message."
        },
        {
          speaker: "Alex",
          target: "Listo. Te escribo esta noche para que tengas mi número.",
          translation: "Done. I'll message you tonight so you have my number.",
          pronunciation: "LEES-to. te es-KREE-bo es-ta NO-che pa-ra ke TEN-gas mi NOO-me-ro",
          literal: "Ready. To-you I-write this night so that you-have my number.",
          why: "Again present “te escribo” for a plan tonight. “Para que tengas” forces the subjunctive “tengas” after “para que” — a purpose clause always triggers it."
        },
        {
          speaker: "Nélida",
          target: "¡Eso! Y le escribes también a Marta, que te quiere saludar.",
          translation: "That's it! And message Marta too, she wants to say hi to you.",
          pronunciation: "EH-so! i le es-KREE-bes tam-BYEN a MAR-ta, ke te KYE-re sa-lu-DAR",
          literal: "That! And to-her you-write also to Marta, that you she-wants to-greet.",
          why: "“Escribirle a alguien” keeps the indirect-object “le” even when the person is named (“le escribes… a Marta”) — Spanish doubles the pronoun and the noun."
        },
        {
          speaker: "Alex",
          target: "De una. No te me pierdas, Nélida.",
          translation: "For sure. Don't be a stranger, Nélida.",
          pronunciation: "de OO-na. no te me PYER-das, ne-LEE-da",
          literal: "Of one. Not yourself to-me you-lose, Nélida.",
          why: "“De una” is a quick “sure, right away”. “No te me pierdas” is a warm set phrase — literally “don't get lost on me”, meaning “keep in touch”."
        }
      ],
      vocabulary: [
        {
          term: "escribir",
          explanation:
            "To write — and, crucially, to message. In Colombia “escribir” is the everyday verb for texting someone on WhatsApp.",
          literal: "to write",
          useWhen:
            "Any written contact at all: a text, a note, an email, a letter.",
          avoidWhen:
            "When you specifically mean a phone call — that's “llamar”, “timbrar” or “marcar”.",
          register: "neutral",
          region: "Universal Spanish; the “text me” sense is everyday across Colombia.",
          related: ["escribirle", "mandar un mensaje", "textear", "chatear"],
          example: {
            target: "Te escribo cuando llegue.",
            translation: "I'll message you when I get there."
          }
        },
        {
          term: "escríbeme",
          explanation:
            "“Message me” — the tú command of escribir. Everywhere in Colombia it means send a WhatsApp, not post a letter.",
          literal: "write me",
          useWhen:
            "Asking a friend you address as tú to text you.",
          avoidWhen:
            "A formal request, where you'd use the usted form “escríbame”.",
          register: "friendly informal",
          region: "General Colombian; especially common on the Caribbean coast.",
          related: ["escríbame", "mándame algo", "me escribes", "tírame un mensaje"],
          example: {
            target: "Escríbeme cuando salgas.",
            translation: "Text me when you leave."
          }
        },
        {
          term: "me escribes",
          explanation:
            "Literally “you write me”, used as a soft request — “drop me a message”. The present tense stands in for a gentle command.",
          literal: "you write me",
          useWhen:
            "A polite, low-pressure “text me” among friends.",
          avoidWhen:
            "When you need a crisp order; the plain command “escríbeme” is firmer.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["me escribís", "me marcas", "me avisas", "me cuentas"],
          example: {
            target: "¿Me escribes cuando llegues?",
            translation: "Will you text me when you get there?"
          }
        },
        {
          term: "escribirle a alguien",
          explanation:
            "To write to / message someone — note the indirect-object “le”, which stays even when you also name the person.",
          literal: "to write to someone",
          useWhen:
            "Saying you'll message a specific person.",
          avoidWhen:
            "Never really — dropping the “le” is the error, not keeping it.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["escribirle", "mandarle", "decirle", "avisarle"],
          example: {
            target: "Le escribo a mi mamá todos los días.",
            translation: "I message my mom every day."
          }
        },
        {
          term: "nos escribimos",
          explanation:
            "“We'll message each other” — the reciprocal little formula that seals an agreement to keep in touch.",
          literal: "we write ourselves",
          useWhen:
            "Agreeing to stay in contact with someone you've just met.",
          avoidWhen:
            "A one-way message; this one implies both people will write.",
          register: "friendly informal",
          region: "Universal Spanish.",
          related: ["nos hablamos", "nos vemos", "seguimos en contacto", "nos leemos"],
          example: {
            target: "Nos escribimos y cuadramos algo.",
            translation: "We'll message and sort something out."
          }
        },
        {
          term: "no te me pierdas",
          explanation:
            "A warm goodbye, “don't be a stranger” — literally “don't get lost on me”. The extra “me” adds affection.",
          literal: "don't get lost on me",
          useWhen:
            "Fondly parting from a friend you want to keep hearing from.",
          avoidWhen:
            "A formal setting, where it's far too intimate.",
          register: "friendly informal",
          region: "General Colombian, very common on the coast.",
          related: ["no te pierdas", "escríbeme", "cuídate", "nos hablamos"],
          example: {
            target: "Chao, no te me pierdas.",
            translation: "Bye, don't be a stranger."
          }
        },
        {
          term: "¿oíste?",
          explanation:
            "A coastal tag tacked onto the end of a sentence, like “okay?” or “you hear?”. It softens a request into a warm one.",
          literal: "did you hear?",
          useWhen:
            "Adding coastal warmth to a request or a goodbye.",
          avoidWhen:
            "Formal or written Spanish, where it's too colloquial.",
          register: "casual",
          region: "Caribbean coast (Barranquilla, Cartagena, Santa Marta).",
          related: ["¿oís?", "¿sí?", "¿ya?", "¿me copiaste?"],
          example: {
            target: "Escríbeme, ¿oíste?",
            translation: "Text me, okay?"
          }
        }
      ],
      note:
        "In Colombia “escribir” is the default verb for messaging — “escríbeme” almost always means “text me on WhatsApp”, not “write me a letter”. Keep the indirect object: you “le escribes a alguien”, holding the “le” even when you name the person. And the present tense (“te escribo esta noche”) routinely stands in for the future when you're promising to message.",
      culture: [
        {
          label: "Escribir means texting now",
          body:
            "Ask a Colombian to “escribirte” and you'll get a WhatsApp message, not an envelope. The verb has quietly absorbed texting as its main everyday sense, to the point that “te escribo” almost never conjures pen and paper. WhatsApp is the country's default channel for everything from family logistics to arranging a plumber, so “escríbeme” is less a request to correspond than the ordinary way of saying you'll keep in touch through the app like everyone else does."
        },
        {
          label: "The coast writes as it speaks",
          body:
            "Barranquilla, Cartagena and Santa Marta share a fast, affectionate Caribbean Spanish, and it spills into how people text: clipped words, dropped final “s” sounds, and warm tags like “¿oíste?”. Messages read the way the coast talks — direct, playful, a little musical. A learner who matches that energy, rather than typing stiff textbook Spanish, will sound far more at home, and costeños notice and warm to the effort almost immediately."
        },
        {
          label: "The present tense as a promise",
          body:
            "Spanish leans on the present tense for things you're about to do: “te escribo esta noche” is a promise to message tonight, even though the verb form is present. Learners coming from English often reach for a heavier future construction and end up sounding oddly formal. Using the plain present for near-future plans is one of the quickest ways to sound natural when you're arranging to stay in touch with someone."
        },
        {
          label: "Keeping in touch is a ritual",
          body:
            "Exchanging numbers in Colombia comes wrapped in set phrases — “nos escribimos”, “no te me pierdas”, “seguimos en contacto”. They do social work well beyond their literal meaning, signaling that a pleasant afternoon should turn into an ongoing friendship. Skipping them can make a goodbye feel abrupt or cold. Learning to close with one of these little formulas matters as much as knowing how to say hello in the first place."
        }
      ],
      pitfalls: [
        {
          mistake: "Reading “escríbeme” as “write me a letter”",
          whyItFails:
            "In Colombia the verb defaults to WhatsApp; taking it literally makes you miss that someone just asked for a text and is expecting a quick reply.",
          sayInstead: "Claro, ya te escribo por WhatsApp."
        },
        {
          mistake: "Dropping the “le” in “escribirle a alguien”",
          whyItFails:
            "Spanish doubles the indirect object: you say “le escribo a Marta”, not “escribo a Marta”. Leaving out the “le” sounds incomplete to a native ear.",
          sayInstead: "Le escribo a Marta ahora mismo."
        },
        {
          mistake: "Using the future “te escribiré esta noche” for a casual plan",
          whyItFails:
            "It isn't wrong, but the plain future sounds formal and bookish for something so ordinary; Colombians just use the present “te escribo”.",
          sayInstead: "Te escribo esta noche, tranquila."
        },
        {
          mistake: "Answering “escríbeme” by planning to call instead",
          whyItFails:
            "Many Colombians barely answer calls and run everything by message; phoning when someone said “escríbeme” can feel intrusive or simply go unanswered.",
          sayInstead: "Listo, te escribo y cuadramos por ahí."
        }
      ],
      variations: [
        {
          form: "Escríbeme.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The everyday “text me” to a friend you address as tú."
        },
        {
          form: "Escríbame.",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "Asking someone you address as usted to message you."
        },
        {
          form: "Me escribís.",
          register: "friendly informal",
          region: "Paisa and Andean voseo regions",
          whenToUse: "The voseo version, common in Medellín and the interior."
        },
        {
          form: "Mándame un mensaje.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A clear, unambiguous “send me a message”."
        },
        {
          form: "Tírame un WhatsApp.",
          register: "casual",
          region: "Colombian informal, urban youth",
          whenToUse: "A very relaxed “shoot me a WhatsApp” among friends."
        }
      ],
      prompt: "On the coast, Nélida says “escríbeme por WhatsApp”. What is she actually asking for?",
      choices: [
        "That Alex post her a handwritten letter through the mail sometime this coming week.",
        "That Alex send her a message on WhatsApp rather than trying to phone her up.",
        "That Alex write his own number down on a scrap of paper and hand it over to her."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Nélida says “le escribes también a Marta.” Why the “le” when Marta is already named?",
          choices: [
            "Spanish doubles the indirect object, so “le” stays even beside the named person.",
            "Because “le” here is a direct object that stands in for the thing being written down.",
            "Because “le” is what turns the verb into a command, the only way to form an order."
          ],
          answer: 0,
          tests: "the doubled indirect object le with a named person"
        },
        {
          prompt: "Alex says “te escribo esta noche.” Why the present tense for something happening later?",
          choices: [
            "Because escribir has no future tense at all and must always borrow the present form.",
            "Because he already messaged her earlier and is now describing that finished action.",
            "Because Spanish routinely uses the present for a near-future plan you're promising."
          ],
          answer: 2,
          tests: "the present tense standing in for a near-future promise"
        },
        {
          prompt: "Alex wants to reply warmly, coast-style, that he'll text soon. Which sounds most natural?",
          choices: [
            "Le enviaré una comunicación escrita, señora.",
            "Yo te escribo ahora mismo y cuadramos, ¿oíste?",
            "Procederé a redactarte un mensaje hoy mismo."
          ],
          answer: 1,
          tests: "choosing warm coastal register over stiff formality"
        },
        {
          prompt: "Nélida parts with “no te me pierdas.” What does this warm phrase mean?",
          choices: [
            "It's an affectionate “don't be a stranger” — a request to stay in touch.",
            "It's a worried warning that Alex might physically get lost on his way back home.",
            "It's a firm instruction that Alex must not lose the paper with her number on it."
          ],
          answer: 0,
          tests: "no te me pierdas as keep in touch, not literal loss"
        }
      ]
    },
    en: {
      title: "Cambiar números para no perder el contacto",
      situation:
        "Usted acaba de conocer a alguien con quien se sintió a gusto y quiere seguir en contacto. En inglés “message me” o “text me” es lo normal para pedir un mensaje; ojo, que “write me a letter” sí es una carta de papel. Va a intercambiar números y a quedar en escribirse por mensaje, aprendiendo cómo suena natural en inglés.",
      setting: {
        who: "Dylan es un compañero estadounidense, cordial y relajado, que pasó la tarde conversando con Alejandra y le cayó muy bien.",
        what: "Intercambiar números para seguir en contacto por mensaje, el gesto con el que suele arrancar una amistad nueva.",
        when: "Al final de la tarde, cuando la reunión se va acabando y la gente empieza a despedirse.",
        where: "Houston, en el patio de una casa, en un inglés relajado y cotidiano entre gente joven.",
        why: "Porque un número sin un primer mensaje no sirve de nada; la promesa de escribir es lo que de verdad mantiene el contacto."
      },
      address: {
        form: "mixed",
        who: "Dylan y Alejandra se tratan por el nombre y comparten el mismo “you”; no hay un pronombre aparte para marcar cercanía o distancia.",
        why: "El inglés tiene un solo “you”, así que la cercanía se nota en el vocabulario y el tono — apodos, “hey”, “for sure” — no en el pronombre. La confianza se oye en las palabras, no en la gramática.",
        ifYouSwitch:
          "Para sonar más cercano no se cambia el pronombre, sino el registro: se suelta “text me” en lugar de “please contact me”, y el trato se afloja solo con las palabras."
      },
      dialogue: [
        {
          speaker: "Dylan",
          target: "Alejandra, give me your number and we'll text, okay?",
          translation: "Alejandra, dame tu número y nos escribimos, ¿bueno?",
          pronunciation: "a-le-JAN-dra, guiv mi yor NAM-ber and uil TEKST, o-KEI",
          literal: "Alejandra, dame tu número y (nosotros) escribiremos, ¿bueno?",
          why: "“We'll text” usa “text” como verbo: mandarse mensajes. Es el equivalente natural de “nos escribimos”. “Okay?” cierra como una coletilla amable, no como una pregunta real."
        },
        {
          speaker: "Alejandra",
          target: "Of course. Tell me your number and I'll text you right now.",
          translation: "Claro que sí. Dime tu número y te escribo ahora mismo.",
          pronunciation: "of KORS. tel mi yor NAM-ber and ail TEKST yu rait NAU",
          literal: "Claro. Dime tu número y (yo) te escribiré ahora mismo.",
          why: "El inglés sí marca el futuro con “I'll” (I will); no usa el presente como el español “te escribo”. “Right now” es “ahora mismo”."
        },
        {
          speaker: "Dylan",
          target: "Just message me on WhatsApp — I barely pick up calls.",
          translation: "Mejor escríbeme por WhatsApp; casi no contesto llamadas.",
          pronunciation: "yast MES-ich mi on wat-SAP — ai BER-li pik ap kols",
          literal: "Solo mensajéame en WhatsApp — yo apenas levanto llamadas.",
          why: "“Message me” es “escríbeme” y no lleva “to”. Ojo: “write me a letter” sí sería una carta. “Pick up” es contestar el teléfono."
        },
        {
          speaker: "Alejandra",
          target: "Done. I'll message you tonight so you have my number.",
          translation: "Listo. Te escribo esta noche para que tengas mi número.",
          pronunciation: "dan. ail MES-ich yu tu-NAIT so yu jav mai NAM-ber",
          literal: "Hecho. (Yo) te mensajearé esta noche para que tú tengas mi número.",
          why: "Otra vez “I'll” para el futuro. “So you have” expresa la finalidad — el inglés no cambia el verbo a subjuntivo como el español “tengas”."
        },
        {
          speaker: "Dylan",
          target: "Nice. And write to Sarah too — she wants to say hi.",
          translation: "¡Bien! Y escríbele también a Sarah, que te quiere saludar.",
          pronunciation: "nais. and rait tu SE-ra tu — shi uonts tu sei jai",
          literal: "Bien. Y escribe a Sarah también — ella quiere decir hola.",
          why: "Cuando “write” lleva a una persona, el inglés cuidado pone “to”: “write to Sarah”. En Estados Unidos a veces se oye sin “to”, pero “write to” es lo seguro."
        },
        {
          speaker: "Alejandra",
          target: "For sure. Don't be a stranger, Dylan.",
          translation: "De una. No te me pierdas, Dylan.",
          pronunciation: "for shur. dont bi a STREIN-yer, DI-lan",
          literal: "Seguro. No seas un desconocido, Dylan.",
          why: "“Don't be a stranger” es la fórmula cálida equivalente a “no te me pierdas”: literalmente “no seas un extraño”, es decir, sigamos en contacto."
        }
      ],
      vocabulary: [
        {
          term: "to text",
          explanation:
            "Mandar un mensaje de texto o de chat. En inglés “text” es verbo: “I'll text you” equivale a “te escribo”.",
          literal: "textear / escribir un mensaje",
          useWhen:
            "Cualquier mensaje rápido por teléfono o por una app.",
          avoidWhen:
            "Cuando de verdad hablas de una carta escrita a mano en papel.",
          register: "neutral",
          region: "Inglés general; universal entre gente joven.",
          related: ["to message", "to DM", "to WhatsApp", "to write"],
          example: {
            target: "I'll text you when I get there.",
            translation: "Te escribo cuando llegue."
          }
        },
        {
          term: "message me",
          explanation:
            "“Escríbeme”, la forma de pedir un mensaje. No lleva “to”: es “message me”, nunca “message to me”.",
          literal: "escríbeme / mándame un mensaje",
          useWhen:
            "Pedirle a alguien de confianza que te escriba.",
          avoidWhen:
            "En algo muy formal, donde dirías “please contact me”.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["text me", "hit me up", "DM me", "drop me a line"],
          example: {
            target: "Message me when you leave.",
            translation: "Escríbeme cuando salgas."
          }
        },
        {
          term: "drop me a line",
          explanation:
            "Un “escríbeme” suave y amistoso: “mándame unas líneas”. Suena cálido y sin presión.",
          literal: "déjame una línea",
          useWhen:
            "Pedir contacto de forma relajada y amable.",
          avoidWhen:
            "Cuando necesitas una orden clara y directa.",
          register: "friendly informal",
          region: "Inglés general; un punto anticuado pero cariñoso.",
          related: ["message me", "text me", "shoot me a message", "keep in touch"],
          example: {
            target: "Drop me a line when you land.",
            translation: "Escríbeme cuando aterrices."
          }
        },
        {
          term: "to write to someone",
          explanation:
            "Escribirle a alguien. Cuando el verbo lleva a una persona, el inglés cuidado pone “to”: “write to Sarah”.",
          literal: "escribirle a alguien",
          useWhen:
            "Decir que le escribirás a una persona concreta.",
          avoidWhen:
            "No lo evites; omitir el “to” es justo el error frecuente.",
          register: "neutral",
          region: "Inglés británico cuidado; en EE. UU. a veces se omite el “to”.",
          related: ["to write to", "to email", "to message", "to reach out to"],
          example: {
            target: "I write to my mom every day.",
            translation: "Le escribo a mi mamá todos los días."
          }
        },
        {
          term: "we'll text",
          explanation:
            "“Nos escribimos”: la promesa recíproca de seguir en contacto por mensaje.",
          literal: "(nosotros) nos escribiremos",
          useWhen:
            "Quedar en mantener el contacto con alguien recién conocido.",
          avoidWhen:
            "Un mensaje de una sola vía; esto implica que ambos escriben.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["we'll message", "we'll be in touch", "let's keep in touch", "we'll chat"],
          example: {
            target: "We'll text and figure something out.",
            translation: "Nos escribimos y cuadramos algo."
          }
        },
        {
          term: "don't be a stranger",
          explanation:
            "La despedida cálida equivalente a “no te me pierdas”: literalmente “no seas un extraño”.",
          literal: "no seas un desconocido",
          useWhen:
            "Despedirte con cariño de alguien a quien quieres seguir viendo.",
          avoidWhen:
            "Un contexto formal, donde resulta demasiado íntimo.",
          register: "friendly informal",
          region: "Inglés general, muy común en Norteamérica.",
          related: ["keep in touch", "stay in touch", "text me", "let's not lose touch"],
          example: {
            target: "Bye, don't be a stranger!",
            translation: "Chao, ¡no te me pierdas!"
          }
        },
        {
          term: "okay? (tag)",
          explanation:
            "Una coletilla al final de la frase para suavizar un pedido, como el “¿oíste?” costeño.",
          literal: "¿bueno? / ¿sí?",
          useWhen:
            "Darle calidez a un pedido o a una despedida.",
          avoidWhen:
            "Inglés escrito formal, donde queda demasiado coloquial.",
          register: "casual",
          region: "Inglés general hablado.",
          related: ["right?", "yeah?", "cool?", "you know?"],
          example: {
            target: "Text me, okay?",
            translation: "Escríbeme, ¿oíste?"
          }
        }
      ],
      note:
        "En inglés “text” y “message” son verbos: “I'll text you” es “te escribo”, y no llevan “to” (“message me”, no “message to me”). Pero cuando “write” lleva a una persona, el inglés cuidado sí pone “to”: “write to Sarah”. Y ojo con el futuro: donde el español usa el presente (“te escribo esta noche”), el inglés dice “I'll text you tonight”, siempre con “I'll”.",
      culture: [
        {
          label: "“Text” es un verbo",
          body:
            "En español “escribir” se tragó el sentido de mensajear; en inglés pasó algo parecido con “text”, que dejó de ser solo un sustantivo y se volvió verbo de uso diario: “I'll text you”, “she texted me”. “Message” funciona igual. Para un hispanohablante lo raro es que estos verbos no llevan “to”: se dice “text me”, “message me”, nunca “text to me”. Calcar la preposición del español es el desliz más típico de todos."
        },
        {
          label: "“Write me a letter” sí es carta",
          body:
            "Aquí hay una trampa fina: mientras “message me” o “text me” piden un mensaje digital, “write me a letter” sí evoca papel y sobre. El inglés separa lo que el español junta bajo “escríbeme”. Si quieres un WhatsApp, di “text me” o “message me”; reserva “write” para lo más formal o literal. Confundirlos puede hacer que suenes anticuado o, peor, que te malinterpreten del todo."
        },
        {
          label: "El futuro va con “I'll”",
          body:
            "El español promete en presente — “te escribo esta noche” —, pero el inglés marca ese futuro cercano con “I'll”: “I'll text you tonight”. Para el hispanohablante es tentador decir “I text you tonight”, que suena a costumbre, no a promesa. Acostumbrarse a soltar “I'll” para los planes inmediatos es uno de los ajustes que más rápido te hacen sonar natural al quedar en algo con alguien."
        },
        {
          label: "La despedida también es un ritual",
          body:
            "El inglés norteamericano tiene sus propias fórmulas para cerrar con calidez: “don't be a stranger”, “keep in touch”, “we'll text”. Cumplen la misma función social que “no te me pierdas” o “nos escribimos”: convertir una tarde agradable en un contacto que sigue vivo. Despedirse en seco, sin una de estas frases, puede sonar frío. Aprender a cerrar con una de ellas importa tanto como saber saludar bien."
        }
      ],
      pitfalls: [
        {
          mistake: "“Message to me on WhatsApp.”",
          whyItFails:
            "En inglés “message” y “text” no llevan “to” cuando la persona es el objeto directo; se dice “message me”. El “to” es un calco del español.",
          sayInstead: "Message me on WhatsApp."
        },
        {
          mistake: "“I write you tonight.”",
          whyItFails:
            "El presente simple en inglés suena a hábito, no a promesa; para un plan de esta noche hace falta “I'll”. Sin él parece que hablas de tu rutina.",
          sayInstead: "I'll text you tonight."
        },
        {
          mistake: "“Write me a letter” cuando quieres un WhatsApp",
          whyItFails:
            "“Write me a letter” evoca papel y sobre; para un mensaje digital el inglés usa “text” o “message”. Pedir “a letter” confunde a quien te escucha.",
          sayInstead: "Just text me."
        },
        {
          mistake: "“Write Sarah” en inglés cuidado",
          whyItFails:
            "Cuando “write” lleva a una persona, el inglés británico cuidado pide “to”: “write to Sarah”. Omitirlo suena descuidado fuera del inglés estadounidense informal.",
          sayInstead: "Write to Sarah too."
        }
      ],
      variations: [
        {
          form: "Text me.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "El “escríbeme” de todos los días a un amigo."
        },
        {
          form: "Please message me.",
          register: "polite formal",
          region: "Inglés general",
          whenToUse: "Un pedido más cortés, por ejemplo en el trabajo."
        },
        {
          form: "Hit me up.",
          register: "casual",
          region: "Inglés norteamericano, habla joven",
          whenToUse: "Un “escríbeme” muy relajado entre amigos."
        },
        {
          form: "Send me a message.",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Un “mándame un mensaje” claro e inequívoco."
        },
        {
          form: "Shoot me a text.",
          register: "casual",
          region: "Inglés estadounidense informal",
          whenToUse: "Un “tírame un mensaje” desenfadado entre cercanos."
        }
      ],
      prompt: "Dylan dice “just message me on WhatsApp”. ¿Qué le está pidiendo en realidad a Alejandra?",
      choices: [
        "Que le mande por correo una carta escrita a mano en algún momento de la semana.",
        "Que le escriba un mensaje por WhatsApp en vez de tratar de llamarlo.",
        "Que apunte su propio número en un papelito y se lo entregue en la mano."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "En inglés se dice “message me”, no “message to me”. ¿Por qué?",
          choices: [
            "Porque “message” y “text” no llevan “to” cuando la persona es el objeto directo.",
            "Porque en inglés el “to” solo puede ir pegado justo al comienzo de la oración.",
            "Porque “message” en realidad es un sustantivo que nunca puede funcionar como verbo."
          ],
          answer: 0,
          tests: "message me sin to, frente al calco con preposicion"
        },
        {
          prompt: "Alejandra dice “I'll text you tonight”. ¿Por qué “I'll” y no “I text you tonight”?",
          choices: [
            "Porque el verbo “text” no existe en presente y siempre exige la forma con “will”.",
            "Porque ya le escribió antes y ahora describe esa acción que quedó terminada.",
            "Porque el inglés marca el futuro cercano con “I'll”; el presente sonaría a hábito."
          ],
          answer: 2,
          tests: "I'll para el futuro cercano, no el presente simple"
        },
        {
          prompt: "Alejandra quiere pedir, con calidez y sin rodeos, que le escriban. ¿Cuál suena más natural?",
          choices: [
            "I hereby request a written communication.",
            "Just text me whenever, okay?",
            "Kindly dispatch a message to me today."
          ],
          answer: 1,
          tests: "elegir el ingles natural sobre el calco rigido y formal"
        },
        {
          prompt: "Dylan se despide con “don't be a stranger”. ¿Qué quiere decir esa frase cálida?",
          choices: [
            "Es un cariñoso “no te me pierdas”, una invitación a seguir en contacto.",
            "Es una advertencia preocupada de que Alejandra podría perderse camino a casa.",
            "Es una orden tajante de no perder el papel donde anotó el número de él."
          ],
          answer: 0,
          tests: "don't be a stranger como sigamos en contacto, no literal"
        }
      ]
    }
  },
  {
    id: "swapping-book-tips-at-the-used-stall",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "everyday-life",
    register: "familiar",
    pathways: ["foundation"],
    verb: "leer",
    review: "pending",
    es: {
      title: "Escoger un libro en el puesto de usados",
      situation:
        "Estás en un puesto de libros usados en el centro de Medellín, y el que atiende es un lector de esos que recomiendan con el alma. Vas a contar qué leíste, a hablar de leerte un libro entero de una sentada y de leer entre líneas, todo con el voseo paisa: “vos leés”, “¿vos qué contás?”.",
      setting: {
        who: "Don Aníbal runs a second-hand book stall and is the kind of vendor who has read everything he sells. Alex is a regular now, back for another recommendation.",
        what: "Trading impressions of a book and picking up the next one — the easy literary chat of a used-book stall.",
        when: "A slow weekday morning, the perfect time for the vendor to actually stop and talk books.",
        where: "A sidewalk book stall in downtown Medellín, paisa country, where the vendor addresses everyone with vos.",
        why: "Because a good stall is half about the books and half about the vendor's take; the conversation is where the real recommendation happens."
      },
      address: {
        form: "vos",
        who: "Don Aníbal uses vos with Alex, the warm default second person of Medellín and the surrounding paisa region.",
        why: "In Medellín vos is the everyday familiar form, not tú; it's friendly and completely normal, even with someone you've only met a couple of times.",
        ifYouSwitch:
          "Answering with tú isn't wrong, but vos will make you sound local; sliding to usted would add a formal distance the friendly stall just doesn't call for."
      },
      dialogue: [
        {
          speaker: "Aníbal",
          target: "¿Vos leíste el que te recomendé la semana pasada?",
          translation: "Did you read the one I recommended last week?",
          pronunciation: "vos le-EES-te el ke te re-ko-men-DE la se-MA-na pa-SA-da",
          literal: "You read the that to-you I-recommended the week past?",
          why: "In the preterite vos uses the same form as tú (“leíste”); the voseo really shows up in the present. “El que” means “the one that”."
        },
        {
          speaker: "Alex",
          target: "Sí, me lo leí completo en dos días. Me encantó.",
          translation: "Yes, I read the whole thing in two days. I loved it.",
          pronunciation: "SEE, me lo le-EE kom-PLE-to en dos DEE-as. me en-kan-TO",
          literal: "Yes, myself it I-read complete in two days. Me it-delighted.",
          why: "“Me lo leí” — the reflexive “leerse” — stresses reading the whole thing right through, more than plain “lo leí”. It's a completive nuance."
        },
        {
          speaker: "Aníbal",
          target: "Ese autor hay que leerlo entre líneas, no te confiés.",
          translation: "That author you have to read between the lines, don't be too sure.",
          pronunciation: "E-se au-TOR ai ke le-ER-lo EN-tre LEE-ne-as, no te kon-fee-ES",
          literal: "That author has that to-read-him between lines, not yourself you-trust.",
          why: "“Leer entre líneas” is the same idiom as English. “No te confiés” is voseo — the vos negative command of confiarse, stressed on the last syllable."
        },
        {
          speaker: "Alex",
          target: "Uy, es que yo no le leo la mente tan fácil al escritor.",
          translation: "Oof, it's just that I can't read the writer's mind that easily.",
          pronunciation: "OO-i, es ke yo no le LE-o la MEN-te tan FA-sil al es-kri-TOR",
          literal: "Oof, is that I not to-him I-read the mind so easy to-the writer.",
          why: "“Leerle la mente a alguien” — to read someone's mind — takes the indirect “le”. “Uy” is a very paisa little cry of surprise or effort."
        },
        {
          speaker: "Aníbal",
          target: "Llevate este, vos lo leés de una sentada, te lo juro.",
          translation: "Take this one, you'll read it in one sitting, I swear.",
          pronunciation: "ye-VA-te ES-te, vos lo le-ES de OO-na sen-TA-da, te lo HOO-ro",
          literal: "Take-yourself this, you it you-read of one sitting, to-you it I-swear.",
          why: "Here's the voseo present: “leés”, not “lees”, with the stress on the end. “Llevate” is the vos command of llevarse. “De una sentada” is in one sitting."
        },
        {
          speaker: "Alex",
          target: "De once. Me lo llevo y te cuento qué tal.",
          translation: "Alright then. I'll take it and let you know how it goes.",
          pronunciation: "de ON-se. me lo YE-vo i te KWEN-to ke TAL",
          literal: "Of eleven. Myself it I-take and to-you I-tell what such.",
          why: "“De once” is a very paisa “okay, deal”. “Te cuento” — present for a near future — promises a follow-up report, just like “te escribo”."
        }
      ],
      vocabulary: [
        {
          term: "leer",
          explanation:
            "To read — the plain, everyday verb, from a text message to a fat novel.",
          literal: "to read",
          useWhen:
            "Any kind of reading at all.",
          avoidWhen:
            "When you want to stress finishing the whole thing — then reach for the reflexive “leerse”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["leerse", "releer", "hojear", "repasar"],
          example: {
            target: "Me gusta leer de noche.",
            translation: "I like to read at night."
          }
        },
        {
          term: "leerse (algo)",
          explanation:
            "The reflexive of leer, used to stress reading something all the way through: “me leí el libro”.",
          literal: "to read oneself (something)",
          useWhen:
            "Emphasizing that you finished the whole thing.",
          avoidWhen:
            "A quick skim; that lighter idea is “hojear”.",
          register: "friendly informal",
          region: "Universal Spanish; very common in Colombia.",
          related: ["leer", "terminarse", "devorarse", "acabarse"],
          example: {
            target: "Me leí toda la saga.",
            translation: "I read the whole saga."
          }
        },
        {
          term: "vos leés",
          explanation:
            "The paisa voseo present of leer — “you read” — with the stress on the final syllable, not “lees”.",
          literal: "you read (voseo)",
          useWhen:
            "Speaking the everyday familiar form in Medellín and paisa areas.",
          avoidWhen:
            "Formal writing, or regions that don't use vos.",
          register: "friendly informal",
          region: "Medellín and the paisa region (Antioquia, Eje Cafetero).",
          related: ["vos leías", "tú lees", "vos contás", "vos tenés"],
          example: {
            target: "¿Vos leés en inglés o en español?",
            translation: "Do you read in English or in Spanish?"
          }
        },
        {
          term: "leer entre líneas",
          explanation:
            "To read between the lines — to catch what's implied but not stated. Same image as English.",
          literal: "to read between lines",
          useWhen:
            "Talking about implied or hidden meaning.",
          avoidWhen:
            "A literal instruction about the page; this one is figurative only.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["sobreentender", "captar la indirecta", "leer el subtexto", "intuir"],
          example: {
            target: "A ese poeta hay que leerlo entre líneas.",
            translation: "That poet you have to read between the lines."
          }
        },
        {
          term: "leerle la mente a alguien",
          explanation:
            "To read someone's mind — note the indirect “le”, and the idiom's use for guessing a thought.",
          literal: "to read the mind to someone",
          useWhen:
            "Guessing what someone thinks or wants.",
          avoidWhen:
            "Never literally; it's an idiom, not mind-reading claims.",
          register: "friendly informal",
          region: "Universal Spanish.",
          related: ["adivinar el pensamiento", "leer la mente", "adivinarle", "intuir"],
          example: {
            target: "No te leo la mente, decime qué querés.",
            translation: "I can't read your mind, tell me what you want."
          }
        },
        {
          term: "de una sentada",
          explanation:
            "In one sitting — reading or doing something straight through without stopping.",
          literal: "of one sitting",
          useWhen:
            "Describing finishing something in a single go.",
          avoidWhen:
            "Something you did in bits over time; this means all at once.",
          register: "friendly informal",
          region: "Universal Spanish.",
          related: ["del tirón", "de corrido", "sin parar", "de una"],
          example: {
            target: "Me lo leí de una sentada.",
            translation: "I read it in one sitting."
          }
        },
        {
          term: "de once",
          explanation:
            "A very paisa “okay, deal / sounds good” — an enthusiastic agreement heard all around Medellín.",
          literal: "of eleven",
          useWhen:
            "Agreeing to something, paisa style.",
          avoidWhen:
            "Outside the paisa region, where it may just puzzle people.",
          register: "casual",
          region: "Medellín and the paisa region.",
          related: ["de una", "listo", "hecho", "dale pues"],
          example: {
            target: "¿Vamos? — De once, pues.",
            translation: "Shall we go? — Sounds good, then."
          }
        }
      ],
      note:
        "“Leer” is the plain verb, but Colombians love the reflexive “leerse” to mean reading something all the way through — “me leí el libro” says you finished it. In Medellín you'll hear the voseo present “vos leés”, stressed on the end, not “lees”. And two idioms travel straight from English: “leer entre líneas” (read between the lines) and “leerle la mente a alguien” (read someone's mind), the latter with an indirect “le”.",
      culture: [
        {
          label: "Leerse: reading, completed",
          body:
            "Spanish can add a reflexive pronoun to leer that English has no tidy match for. “Leí el libro” simply says you read it; “me leí el libro” adds a sense of consuming the whole thing, cover to cover, often with relish. The same trick works with other verbs — “me vi la película”, “me comí todo”. It's never required, but dropping it in makes you sound both more natural and more emphatic about actually having finished."
        },
        {
          label: "Vos is Medellín's normal",
          body:
            "Paisa Spanish runs on vos, not tú, and it is neither rustic nor rude — it's simply the friendly default in Medellín and across Antioquia. The present tense shifts the stress to the end: “vos leés”, “vos tenés”, “vos querés”. Foreigners who pick it up delight locals, because it signals you learned your Spanish right there rather than from a generic textbook. Answering with tú is understood, but vos is what truly belongs."
        },
        {
          label: "The stall is a reading community",
          body:
            "Second-hand book stalls in downtown Medellín are more than shops; the good vendors are fierce readers who press books on you and argue about them. A recommendation comes with a verdict — read this one between the lines, skip that one — and buying becomes a small conversation. Treating the vendor as a fellow reader, not just a cashier, opens up the best tips and the warmest welcome the next time you come back."
        },
        {
          label: "Idioms that cross over",
          body:
            "Some Spanish reading idioms map perfectly onto English: “leer entre líneas” is exactly “read between the lines”, and “leerle la mente a alguien” is “read someone's mind”. It's a rare gift for the learner, since so many idioms don't translate at all. Just remember the little grammatical hooks — the indirect “le” in the mind-reading one — and you can lift these straight across without a second thought."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “lees” to a paisa instead of “leés”",
          whyItFails:
            "In Medellín the everyday present is the voseo “vos leés”, stressed on the end; “tú lees” isn't wrong but instantly marks you as an outsider.",
          sayInstead: "¿Vos qué leés ahora?"
        },
        {
          mistake: "Skipping the reflexive in “me leí el libro”",
          whyItFails:
            "Plain “leí el libro” is fine, but Colombians add the “me” to stress finishing the whole thing; without it you lose that completive flavor.",
          sayInstead: "Me leí el libro completo."
        },
        {
          mistake: "Translating “leer la mente” without the “le”",
          whyItFails:
            "The idiom hooks onto a person with an indirect object: “leerle la mente a alguien”. Dropping the “le” leaves the phrase grammatically dangling.",
          sayInstead: "No te leo la mente."
        },
        {
          mistake: "Taking “leer entre líneas” literally",
          whyItFails:
            "It's an idiom for implied meaning, not an instruction about the physical gaps between rows of text; reading it literally misses the point entirely.",
          sayInstead: "Hay que leer entre líneas."
        }
      ],
      variations: [
        {
          form: "Vos leés.",
          register: "friendly informal",
          region: "Medellín and paisa region",
          whenToUse: "The everyday present “you read” in Antioquia."
        },
        {
          form: "Tú lees.",
          register: "neutral",
          region: "Bogotá and most of Colombia",
          whenToUse: "The standard tuteo present, safe almost anywhere."
        },
        {
          form: "Usted lee.",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "Addressing someone formally, or a stranger in Bogotá."
        },
        {
          form: "Me lo leí.",
          register: "friendly informal",
          region: "Universal Spanish",
          whenToUse: "Stressing you read the whole thing through."
        },
        {
          form: "¿Lo leíste?",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Simply asking whether someone read something."
        }
      ],
      prompt: "Alex says “me lo leí completo.” What does the reflexive “me” add here?",
      choices: [
        "It turns the whole sentence into a question about whether he managed to read the book.",
        "It stresses that he read the whole thing right through, from cover to cover.",
        "It means he read the book aloud to somebody else rather than to himself."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Don Aníbal says that author “hay que leerlo entre líneas.” What is he advising?",
          choices: [
            "To catch the meaning the author implies but never states outright on the page.",
            "To read only the lines printed exactly down the middle of every single page.",
            "To read the book strictly in order, one single line straight after another one."
          ],
          answer: 0,
          tests: "leer entre lineas as implied, unstated meaning"
        },
        {
          prompt: "In Medellín, how would the vendor most naturally ask “what are you reading now”?",
          choices: [
            "¿Usted qué lee hoy, señor?",
            "¿Vos qué leés ahora?",
            "¿Tú qué estás leyendo, che?"
          ],
          answer: 1,
          tests: "the paisa voseo present vos lees"
        },
        {
          prompt: "Alex says “no le leo la mente al escritor.” What does he mean?",
          choices: [
            "That he physically cannot see inside the writer's head to inspect the thoughts there.",
            "That he refuses to read any of the extra notes the writer left out in the margins.",
            "That he can't just guess what the writer secretly meant that easily."
          ],
          answer: 2,
          tests: "leerle la mente as guessing a thought"
        },
        {
          prompt: "Alex wants to say he devoured the whole novel in one go. Which is most natural?",
          choices: [
            "Procedí a la lectura íntegra del volumen.",
            "Fui leído por la novela entera una tarde.",
            "Me leí la novela entera de una sentada."
          ],
          answer: 2,
          tests: "the reflexive leerse for reading it all through"
        }
      ]
    },
    en: {
      title: "Escoger un libro en una librería de usados",
      situation:
        "Usted está en una librería de libros usados y el que atiende es un lector apasionado que recomienda con el alma. Va a contar qué ha leído, a hablar de leerse un libro entero (que en inglés se dice “read the whole thing”, porque no hay reflexivo) y de “read between the lines”. Ojo: el pasado “read” se pronuncia “red”.",
      setting: {
        who: "Marcus atiende una librería de usados y es de esos que se han leído todo lo que venden. Alejandra ya es clienta habitual y vuelve por otra recomendación.",
        what: "Intercambiar impresiones sobre un libro y llevarse el siguiente — la charla literaria fácil de una librería de usados.",
        when: "Una mañana tranquila entre semana, el momento ideal para que el librero se ponga a hablar de libros.",
        where: "Houston, una librería de usados, en un inglés cotidiano y relajado entre lectores.",
        why: "Porque una buena librería es mitad libros y mitad el criterio del librero; la conversación es donde ocurre la verdadera recomendación."
      },
      address: {
        form: "mixed",
        who: "Marcus y Alejandra se tratan por el nombre y comparten el mismo “you”; el inglés no tiene un vos ni un usted aparte.",
        why: "El inglés tiene un solo “you”, así que la cercanía no está en el pronombre sino en el tono y las palabras — “oh nice”, “trust me”, el nombre de pila. Donde el paisa elegiría vos, el inglés simplemente suena relajado.",
        ifYouSwitch:
          "No hay un pronombre que cambiar; para sonar más formal se ajusta el vocabulario (“I'd recommend” en vez de “grab this one”), no la gramática del pronombre."
      },
      dialogue: [
        {
          speaker: "Marcus",
          target: "Did you read the one I recommended last week?",
          translation: "¿Leíste el que te recomendé la semana pasada?",
          pronunciation: "did yu red da uan ai re-ko-MEN-did last uik?",
          literal: "¿(Tú) leíste el que (yo) recomendé la semana pasada?",
          why: "Ojo con la pronunciación: en pasado, “read” se dice “red”, aunque se escriba igual que el presente “read” (“riid”). El auxiliar “did” marca el pasado."
        },
        {
          speaker: "Alejandra",
          target: "Yes, I read the whole thing in two days. I loved it.",
          translation: "Sí, me lo leí completo en dos días. Me encantó.",
          pronunciation: "yes, ai red da jol zing in tu deis. ai lavd it",
          literal: "Sí, (yo) leí la cosa entera en dos días. (Yo) lo amé.",
          why: "El inglés no tiene el reflexivo “leerse”. Para “me lo leí completo” se agrega “the whole thing”: “I read the whole thing”. Aquí “read” es pasado, se dice “red”."
        },
        {
          speaker: "Marcus",
          target: "That author you have to read between the lines. Don't be too sure.",
          translation: "A ese autor hay que leerlo entre líneas. No te confíes.",
          pronunciation: "dat OZ-or yu jav tu red bi-TUIN da lains. dont bi tu shur",
          literal: "Ese autor (tú) tienes que leer entre las líneas. No estés demasiado seguro.",
          why: "“Read between the lines” es idéntico al español “leer entre líneas”: captar lo insinuado. Aquí “read” es presente, se dice “riid”."
        },
        {
          speaker: "Alejandra",
          target: "Oof, I can't read the writer's mind that easily.",
          translation: "Uy, es que no le leo la mente al escritor tan fácil.",
          pronunciation: "uf, ai kant red da RAI-ters maind dat II-si-li",
          literal: "Uf, (yo) no puedo leer la mente del escritor tan fácil.",
          why: "“Read someone's mind” es “leerle la mente a alguien”. En inglés no hace falta el “le”: la persona va con posesivo, “the writer's mind”."
        },
        {
          speaker: "Marcus",
          target: "Grab this one — you'll read it in one sitting, trust me.",
          translation: "Llevate este; te lo leés de una sentada, te lo juro.",
          pronunciation: "grab dis uan — yul red it in uan SIT-ing, trast mi",
          literal: "Agarra este — (tú) lo leerás en una sentada, confía en mí.",
          why: "“You'll read” usa “you'll” para el futuro. “In one sitting” es “de una sentada”. “Trust me” cierra como “te lo juro”."
        },
        {
          speaker: "Alejandra",
          target: "Alright. I'll take it and let you know how it goes.",
          translation: "De once. Me lo llevo y te cuento qué tal.",
          pronunciation: "ol-RAIT. ail teik it and let yu nou jau it gous",
          literal: "Bien. (Yo) lo tomaré y te dejaré saber cómo va.",
          why: "“Let you know” es “te cuento / te aviso”. El inglés usa “I'll” para el futuro, donde el español dice el presente “te cuento”."
        }
      ],
      vocabulary: [
        {
          term: "to read",
          explanation:
            "Leer — el verbo llano, de un mensaje a una novela. Ojo: el pasado se escribe igual, “read”, pero se pronuncia “red”.",
          literal: "leer",
          useWhen:
            "Cualquier tipo de lectura.",
          avoidWhen:
            "Cuando quieres marcar que terminaste todo; ahí se agrega “the whole thing”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["to read through", "to go through", "to skim", "to reread"],
          example: {
            target: "I like to read at night.",
            translation: "Me gusta leer de noche."
          }
        },
        {
          term: "read the whole thing",
          explanation:
            "El inglés no tiene el reflexivo “leerse”, así que para “me lo leí” agrega “the whole thing” o “all of it”.",
          literal: "leer la cosa entera",
          useWhen:
            "Recalcar que leíste algo completo, de principio a fin.",
          avoidWhen:
            "Una lectura por encima; eso es “to skim”.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["read all of it", "read it cover to cover", "finish it", "get through it"],
          example: {
            target: "I read the whole thing in two days.",
            translation: "Me lo leí completo en dos días."
          }
        },
        {
          term: "have you read…?",
          explanation:
            "El presente perfecto para preguntar si alguien leyó algo, sin decir cuándo — como “¿has leído…?”.",
          literal: "¿has leído…?",
          useWhen:
            "Preguntar por una experiencia de lectura sin fecha concreta.",
          avoidWhen:
            "Cuando das un momento exacto; ahí va el pasado “did you read…?”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["did you read…?", "have you finished…?", "have you gotten to…?", "did you get through…?"],
          example: {
            target: "Have you read this one yet?",
            translation: "¿Ya leíste este?"
          }
        },
        {
          term: "read between the lines",
          explanation:
            "Leer entre líneas: captar lo que se insinúa pero no se dice. La imagen es idéntica en los dos idiomas.",
          literal: "leer entre las líneas",
          useWhen:
            "Hablar del sentido implícito u oculto.",
          avoidWhen:
            "En sentido literal sobre la página; el modismo es solo figurado.",
          register: "neutral",
          region: "Inglés general.",
          related: ["read the subtext", "pick up on hints", "read into it", "get the hidden meaning"],
          example: {
            target: "With that poet you have to read between the lines.",
            translation: "A ese poeta hay que leerlo entre líneas."
          }
        },
        {
          term: "read someone's mind",
          explanation:
            "Leerle la mente a alguien: adivinar lo que piensa. En inglés la persona va con posesivo, sin el “le”.",
          literal: "leer la mente de alguien",
          useWhen:
            "Hablar de adivinar un pensamiento o un deseo.",
          avoidWhen:
            "En sentido literal; es un modismo, no una afirmación real.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["guess your thoughts", "you read my mind", "know what you're thinking", "figure you out"],
          example: {
            target: "I can't read your mind — just tell me.",
            translation: "No te leo la mente, decime nomás."
          }
        },
        {
          term: "in one sitting",
          explanation:
            "De una sentada: leer o hacer algo de corrido, sin parar.",
          literal: "en una sentada",
          useWhen:
            "Describir que terminaste algo de un solo tirón.",
          avoidWhen:
            "Algo que hiciste por partes; esto es todo de una vez.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["in one go", "all at once", "cover to cover", "without stopping"],
          example: {
            target: "I read it in one sitting.",
            translation: "Me lo leí de una sentada."
          }
        },
        {
          term: "trust me",
          explanation:
            "“Te lo juro / créeme”: se suelta para reforzar una recomendación con convicción.",
          literal: "confía en mí",
          useWhen:
            "Reforzar un consejo o una promesa con énfasis.",
          avoidWhen:
            "Un registro muy formal, donde suena demasiado campechano.",
          register: "casual",
          region: "Inglés general.",
          related: ["believe me", "I promise", "honestly", "no joke"],
          example: {
            target: "You'll love it, trust me.",
            translation: "Te va a encantar, te lo juro."
          }
        }
      ],
      note:
        "El inglés no tiene el reflexivo “leerse”: para “me lo leí completo” se dice “I read the whole thing”. Cuidado con “read”: en pasado se escribe igual pero se pronuncia “red”. Para preguntar sin fecha se usa el presente perfecto, “have you read…?”. Y dos modismos cruzan tal cual: “read between the lines” (leer entre líneas) y “read someone's mind” (leerle la mente), este último con posesivo en vez de “le”.",
      culture: [
        {
          label: "El inglés no tiene “leerse”",
          body:
            "El español puede añadir un pronombre reflexivo a leer — “me leí el libro” — para dar la idea de haberlo consumido entero. El inglés no tiene ese recurso: dice “I read the book” y, si quiere recalcar que lo terminó, agrega “the whole thing”, “all of it” o “cover to cover”. Para el hispanohablante la tentación es calcar el reflexivo con “I read myself the book”, que en inglés no significa nada. Mejor apoyarse en esas coletillas."
        },
        {
          label: "El pasado “read” suena “red”",
          body:
            "“Read” es de esos verbos traicioneros: se escribe igual en presente y en pasado, pero cambia de sonido. El presente rima con “need” (“riid”); el pasado suena idéntico al color “red”. Nadie lo nota al escribir, pero al hablar delata al que aprende. “I read it yesterday” se dice “red”, y “I read every day” se dice “riid”. El contexto y los auxiliares (“did”, “have”) ayudan a saber cuál toca."
        },
        {
          label: "La librería como comunidad",
          body:
            "Las librerías de usados atraen a libreros que son lectores voraces y opinan sin filtro sobre lo que venden. Una recomendación viene con criterio — este léelo entre líneas, ese sáltatelo — y comprar se vuelve una pequeña conversación. Tratar al librero como a otro lector, y no como a un cajero, abre las mejores pistas y la bienvenida más cálida la próxima vez que vuelvas por la tienda."
        },
        {
          label: "Modismos que cruzan igual",
          body:
            "Algunos modismos de lectura calzan perfecto entre los dos idiomas: “leer entre líneas” es exactamente “read between the lines”, y “leerle la mente a alguien” es “read someone's mind”. Es un regalo para quien aprende, porque muchos modismos no se traducen. Solo hay que ajustar el enganche gramatical — el inglés usa posesivo, “your mind”, donde el español mete el “le” — y se pasan tal cual de un idioma al otro."
        }
      ],
      pitfalls: [
        {
          mistake: "“I read myself the book.”",
          whyItFails:
            "El inglés no tiene el reflexivo “leerse”; “read myself” no significa terminarlo. Para esa idea se agrega “the whole thing” o “all of it”.",
          sayInstead: "I read the whole book."
        },
        {
          mistake: "Saying past “read” as “reed”",
          whyItFails:
            "En pasado, “read” se pronuncia “red”; decirlo “riid” confunde el tiempo verbal y delata de inmediato al que aprende.",
          sayInstead: "I read it yesterday."
        },
        {
          mistake: "“Did you read this already?” para una experiencia sin fecha",
          whyItFails:
            "Sin un momento concreto, el inglés prefiere el presente perfecto: “have you read…?”. El pasado con “did” pide un cuándo explícito.",
          sayInstead: "Have you read this yet?"
        },
        {
          mistake: "“Read the mind to the writer.”",
          whyItFails:
            "El inglés no calca el “le” del español; la persona va con posesivo: “the writer's mind”. La versión con “to” suena a traducción literal.",
          sayInstead: "Read the writer's mind."
        }
      ],
      variations: [
        {
          form: "Have you read it?",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Preguntar sin fecha si alguien ya lo leyó."
        },
        {
          form: "Did you read it?",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Cuando hay un momento concreto en mente."
        },
        {
          form: "I read the whole thing.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Recalcar que lo leíste todo, de corrido."
        },
        {
          form: "Give it a read.",
          register: "casual",
          region: "Inglés general; habla relajada",
          whenToUse: "Un “échale un ojo / léelo” desenfadado."
        },
        {
          form: "Have a read of this.",
          register: "casual",
          region: "Inglés británico informal",
          whenToUse: "Ofrecer algo para leer, muy coloquial."
        }
      ],
      prompt: "Como el inglés no tiene un reflexivo como “leerse”, ¿cómo se dice “me lo leí completo”?",
      choices: [
        "Se le mete un reflexivo y se dice “I read myself the book”, igual que en español.",
        "Se le agrega “the whole thing” o “all of it”: “I read the whole thing”.",
        "Se cambia el verbo y se usa “I studied the book” para dar esa idea de algo completo."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Qué quiere decir Marcus con “you have to read between the lines”?",
          choices: [
            "Que hay que captar el sentido que el autor insinúa pero nunca dice de frente.",
            "Que solo se deben leer las líneas impresas justo en el centro de la página.",
            "Que el libro debe leerse en estricto orden, una sola línea tras otra sin saltar."
          ],
          answer: 0,
          tests: "read between the lines como sentido implicito"
        },
        {
          prompt: "¿Cuál pregunta correctamente si alguien ya leyó un libro, sin decir cuándo?",
          choices: [
            "Did you read this book already?",
            "Have you read this book yet?",
            "Are you reading this book yet?"
          ],
          answer: 1,
          tests: "have you read en presente perfecto, no pasado"
        },
        {
          prompt: "Alejandra dice “you read my mind.” ¿Qué le está diciendo a Marcus?",
          choices: [
            "Que Marcus literalmente le miró por dentro de la cabeza para examinar sus ideas.",
            "Que Marcus leyó una nota que ella había dejado escrita sobre el mostrador.",
            "Que Marcus adivinó justo lo que ella andaba buscando."
          ],
          answer: 2,
          tests: "read your mind como adivinar el pensamiento"
        },
        {
          prompt: "Alejandra quiere decir que se leyó toda la novela. ¿Cuál es el inglés más natural?",
          choices: [
            "I read in the novel for the whole entire week without ever once stopping.",
            "I was read by the novel across the whole of this past long week.",
            "I read the whole novel this week — couldn't put it down."
          ],
          answer: 2,
          tests: "read the whole thing porque no hay reflexivo"
        }
      ]
    }
  },
  {
    id: "sorting-out-a-billing-mix-up",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "work-and-employment",
    register: "courteous",
    pathways: ["foundation"],
    verb: "comprender",
    review: "pending",
    es: {
      title: "Aclarar un cobro raro en la factura",
      situation:
        "Te llegó una factura con un cobro que no reconoces y vas a la oficina de servicios en Bogotá a reclamar. La asesora es amable pero formal: te dice que comprende tu situación y que va a revisarla. Aquí vas a oír “comprender”, el primo formal de “entender” — el de las oficinas, los trámites y la empatía.",
      setting: {
        who: "Marcela is a customer-service agent in her thirties, courteous and careful with her words. Alex is a foreigner disputing a charge he doesn't recognize on his bill.",
        what: "Sorting out a billing error at a service counter, in the measured, formal register that officialdom runs on.",
        when: "Mid-morning on a weekday, the office quiet enough to actually talk it through.",
        where: "Bogotá, the customer-service desk of a utility company, where usted and formal courtesy are simply the norm.",
        why: "Because getting the charge reversed depends on being understood clearly, and the encounter is formal enough that word choice — comprender over entender — genuinely shifts the tone."
      },
      address: {
        form: "usted",
        who: "Marcela and Alex address each other as usted throughout, as service encounters in Bogotá almost always require.",
        why: "In Bogotá, and in officialdom everywhere in Colombia, usted is the default with strangers regardless of age; it signals respect and a professional distance.",
        ifYouSwitch:
          "Dropping into tú here would sound over-familiar, even a little cheeky, and could undercut Alex's complaint by making him seem not to take the matter seriously."
      },
      dialogue: [
        {
          speaker: "Marcela",
          target: "Buenos días, ¿en qué le puedo colaborar?",
          translation: "Good morning, how can I help you?",
          pronunciation: "BWEH-nos DEE-as, en ke le PWEH-do ko-la-bo-RAR",
          literal: "Good days, in what to-you I-can collaborate?",
          why: "“Colaborar” is the warm Colombian service verb for “help”. The usted form (“le puedo”) sets the formal register from the very first word."
        },
        {
          speaker: "Alex",
          target: "Buenos días. Hay un cobro que no comprendo en mi factura.",
          translation: "Good morning. There's a charge I don't understand on my bill.",
          pronunciation: "BWEH-nos DEE-as. ai un KO-bro ke no kom-PREN-do en mi fak-TU-ra",
          literal: "Good days. There-is a charge that not I-understand in my bill.",
          why: "“No comprendo” works, but in everyday speech “no entiendo” is far more common; here comprender sets a careful, formal tone that suits a complaint."
        },
        {
          speaker: "Marcela",
          target: "Comprendo su situación. Permítame revisar la cuenta.",
          translation: "I understand your situation. Let me review the account.",
          pronunciation: "kom-PREN-do su si-twa-SYON. per-MEE-ta-me re-vi-SAR la KWEN-ta",
          literal: "I-understand your situation. Permit-me to-review the account.",
          why: "“Comprendo su situación” is a set empathetic formula — the one place comprender clearly beats entender, softening officialdom with a show of understanding."
        },
        {
          speaker: "Alex",
          target: "Se lo agradezco. ¿Usted entiende de dónde salió el cobro?",
          translation: "I appreciate it. Do you understand where the charge came from?",
          pronunciation: "se lo a-gra-DES-ko. us-TED en-TYEN-de de DON-de sa-LYO el KO-bro",
          literal: "To-you it I-thank. You understand of where came-out the charge?",
          why: "Alex switches to everyday “entiende” for a plain factual question — showing the natural split: comprender for empathy, entender for ordinary understanding."
        },
        {
          speaker: "Marcela",
          target: "Ya entiendo qué pasó: fue un cobro doble. ¿Me hago entender?",
          translation: "Now I understand what happened: it was a double charge. Am I making myself clear?",
          pronunciation: "ya en-TYEN-do ke pa-SO: fue un KO-bro DO-ble. me A-go en-ten-DER",
          literal: "Already I-understand what happened: was a charge double. Me I-make to-understand?",
          why: "“Ya entiendo” for the plain realisation. “Hacerse entender” — to make oneself understood — always keeps entender, never comprender, in this fixed phrase."
        },
        {
          speaker: "Alex",
          target: "Perfecto, ya comprendo. Muchas gracias por su ayuda.",
          translation: "Perfect, now I understand. Thank you very much for your help.",
          pronunciation: "per-FEK-to, ya kom-PREN-do. MU-chas GRA-syas por su a-YU-da",
          literal: "Perfect, already I-understand. Many thanks for your help.",
          why: "Alex closes with the formal “comprendo” to match her register and sound courteous — a fitting note on which to thank an official."
        }
      ],
      vocabulary: [
        {
          term: "comprender",
          explanation:
            "To understand — the formal, slightly literary partner of “entender”. Same core meaning, higher register.",
          literal: "to comprehend / to understand",
          useWhen:
            "Formal writing, officialdom, or showing empathy — “comprendo su situación”.",
          avoidWhen:
            "Everyday chat, where “entender” is what people actually say.",
          register: "polite formal",
          region: "Universal Spanish; the register contrast holds across Colombia.",
          related: ["entender", "captar", "asimilar", "abarcar"],
          example: {
            target: "Comprendo su situación.",
            translation: "I understand your situation."
          }
        },
        {
          term: "entender",
          explanation:
            "The everyday “to understand” — what Colombians actually say the vast majority of the time.",
          literal: "to understand",
          useWhen:
            "Almost always: conversation, questions, explanations.",
          avoidWhen:
            "Very formal empathy, where “comprender” sounds more considered.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["comprender", "captar", "pillar", "cachar"],
          example: {
            target: "No entiendo la pregunta.",
            translation: "I don't understand the question."
          }
        },
        {
          term: "comprendo su situación",
          explanation:
            "A set empathetic formula, “I understand your situation” — the clearest home for comprender over entender.",
          literal: "I understand your situation",
          useWhen:
            "Showing sympathy in a formal or service setting.",
          avoidWhen:
            "With a close friend, where it sounds distant or scripted.",
          register: "polite formal",
          region: "General Colombian, standard in customer service.",
          related: ["entiendo su punto", "lo comprendo", "me hago cargo", "lo lamento"],
          example: {
            target: "Comprendo su situación, permítame ayudarle.",
            translation: "I understand your situation, let me help you."
          }
        },
        {
          term: "¿me hago entender?",
          explanation:
            "“Am I making myself understood?” — a fixed phrase that always uses entender, not comprender.",
          literal: "do I make myself understand?",
          useWhen:
            "Checking the other person has followed a formal explanation.",
          avoidWhen:
            "Very casual chat, where “¿me explico?” feels lighter.",
          register: "polite formal",
          region: "General Colombian.",
          related: ["¿me explico?", "¿queda claro?", "¿me sigue?", "¿se entiende?"],
          example: {
            target: "Es así de sencillo, ¿me hago entender?",
            translation: "It's that simple, am I making myself clear?"
          }
        },
        {
          term: "no entiendo",
          explanation:
            "“I don't understand” — the everyday admission of confusion; far more common than “no comprendo”.",
          literal: "I don't understand",
          useWhen:
            "Any time you're lost in normal conversation.",
          avoidWhen:
            "A very formal complaint, where “no comprendo” sounds more measured.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["no comprendo", "no capto", "no cacho", "me perdí"],
          example: {
            target: "Perdón, no entiendo bien.",
            translation: "Sorry, I don't quite understand."
          }
        },
        {
          term: "colaborar",
          explanation:
            "The Colombian service verb for “to help” — warmer and less transactional than “ayudar”.",
          literal: "to collaborate",
          useWhen:
            "Offering or asking for help in a shop, bank or office.",
          avoidWhen:
            "Talking about literal joint work on a project.",
          register: "polite",
          region: "General Colombian.",
          related: ["ayudar", "servir", "apoyar", "echar una mano"],
          example: {
            target: "¿En qué le puedo colaborar?",
            translation: "How can I help you?"
          }
        },
        {
          term: "revisar",
          explanation:
            "To check or review — what an agent does with your account or your bill.",
          literal: "to review",
          useWhen:
            "Checking documents, accounts, or details.",
          avoidWhen:
            "A quick glance in passing; that's more “echar un ojo”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["chequear", "mirar", "verificar", "repasar"],
          example: {
            target: "Permítame revisar la cuenta.",
            translation: "Let me review the account."
          }
        }
      ],
      note:
        "“Comprender” and “entender” mean the same thing, but the register differs: “entender” is what Colombians say all day, while “comprender” belongs to formal writing, officialdom, and empathy — above all in “comprendo su situación”. Don't reach for “comprender” in casual chat; and note that the fixed phrase “hacerse entender” always keeps “entender”, never “comprender”.",
      culture: [
        {
          label: "Comprender is register, not meaning",
          body:
            "Spanish has two verbs for understanding that mean almost exactly the same thing, and the choice between them is about register, not sense. “Entender” is the everyday word; “comprender” is its dressed-up cousin, at home in formal writing, legal language, and officialdom. Reaching for “comprender” in casual chat can sound bookish or overly earnest. But in a complaint or a show of sympathy, it lends a measured, respectful weight that “entender” does not quite carry on its own."
        },
        {
          label: "Empathy has a formula",
          body:
            "“Comprendo su situación” is almost a fixed phrase in Colombian customer service — the verbal equivalent of a sympathetic nod. It signals that the agent has registered your problem as a human one, not just a ticket in a line. Learners who can deploy it at the right moment sound markedly more fluent and more courteous. It's one of those set pieces that quietly does more social work than its literal meaning ever suggests."
        },
        {
          label: "Usted is the office default",
          body:
            "In Bogotá and in officialdom nationwide, service encounters run on usted regardless of anyone's age. It is not cold; it's the expected frame of professional respect. Slipping into tú with a stranger behind a counter can read as presumptuous. The formality is itself a kind of courtesy, giving both people a clear, unfamiliar-but-polite footing from which to sort out whatever problem has brought them together."
        },
        {
          label: "Colaborar softens the transaction",
          body:
            "Where other Spanishes ask “¿en qué puedo ayudarle?”, Colombians often say “¿en qué le puedo colaborar?”. “Colaborar” frames help as a shared effort rather than a favor handed down, and it's one of the small verbal warmths that make Colombian service feel personable even inside a formal usted register. Hearing it is a reliable little sign that you're talking to a Colombian rather than anyone else."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “comprender” for an everyday “I don't get it”",
          whyItFails:
            "It's not wrong, but in casual conversation “no comprendo” sounds stiff and bookish; Colombians overwhelmingly just say “no entiendo”.",
          sayInstead: "No entiendo, ¿me explicas?"
        },
        {
          mistake: "Saying “comprendo su situación” to a close friend",
          whyItFails:
            "The formula is a formal, service-register set piece; aimed at a friend it sounds distant or faintly sarcastic, like reading from a script.",
          sayInstead: "Tranquilo, te entiendo perfectamente."
        },
        {
          mistake: "Turning “hacerse entender” into “hacerse comprender”",
          whyItFails:
            "The fixed phrase is “¿me hago entender?”; swapping in comprender breaks the collocation and sounds off to a native ear.",
          sayInstead: "¿Me hago entender?"
        },
        {
          mistake: "Assuming “comprender” always sounds more polite",
          whyItFails:
            "Register mismatch cuts both ways: “comprender” in a relaxed chat can seem pretentious, not polite — the courteous choice depends entirely on the setting.",
          sayInstead: "Con amigos, mejor “te entiendo”."
        }
      ],
      variations: [
        {
          form: "No entiendo.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The everyday “I don't understand”, good almost anywhere."
        },
        {
          form: "No comprendo.",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "A more formal or measured admission, fit for officialdom."
        },
        {
          form: "Comprendo su situación.",
          register: "polite formal",
          region: "General Colombian, standard in service",
          whenToUse: "Showing empathy formally, to a customer or petitioner."
        },
        {
          form: "¿Me hago entender?",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "Checking, courteously, that a formal explanation landed."
        },
        {
          form: "¿Sí me captas?",
          register: "casual",
          region: "Colombian informal, urban",
          whenToUse: "A very casual “you get me?” among friends."
        }
      ],
      prompt: "Why does Marcela choose “comprendo su situación” rather than “entiendo”?",
      choices: [
        "Because “comprender” and “entender” mean opposite things, and only one of them fits a complaint.",
        "Because the formal “comprender” lends an empathetic, courteous weight suited to a service desk.",
        "Because “entender” would somehow be grammatically incorrect in a sentence about a situation."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "In ordinary conversation, which is far more common for “I don't understand”?",
          choices: [
            "“No entiendo”, the everyday verb Colombians reach for almost all of the time.",
            "“No comprendo”, which is what people use in the vast majority of casual chats.",
            "“No abarco”, a common everyday way of admitting that you're confused about it."
          ],
          answer: 0,
          tests: "entender as the everyday default over comprender"
        },
        {
          prompt: "Marcela asks “¿me hago entender?” Why “entender” and not “comprender” here?",
          choices: [
            "Because “comprender” can never take a reflexive pronoun anywhere at all in Spanish.",
            "Because the setting is casual, and comprender is banned from casual speech entirely.",
            "Because “hacerse entender” is a fixed phrase that always keeps “entender”."
          ],
          answer: 2,
          tests: "hacerse entender as a fixed phrase keeping entender"
        },
        {
          prompt: "An agent wants to show a customer formal sympathy. Which is the natural set phrase?",
          choices: [
            "Comprendo su situación y la voy a revisar enseguida.",
            "Comprendo tu vaina y ya te la miro, no te preocupés.",
            "Yo abarco enteramente el problema que usted me plantea hoy."
          ],
          answer: 0,
          tests: "comprendo su situacion as the formal empathy formula"
        },
        {
          prompt: "Alex says “no comprendo” to a friend at a bar. How does it come across?",
          choices: [
            "Perfectly natural and casual, exactly what a friend would expect to hear in a bar.",
            "A little stiff and bookish; friends would normally just say “no entiendo”.",
            "Rude and dismissive, as though he were insulting his friend's intelligence outright."
          ],
          answer: 1,
          tests: "register mismatch: comprender sounds stiff with friends"
        }
      ]
    },
    en: {
      title: "Resolver un cobro que no cuadra",
      situation:
        "A usted le llega una factura con un cobro que no reconoce y va al mostrador de servicio al cliente a reclamar. La asesora es amable pero formal. En inglés, el verbo de todos los días es “understand”; “comprehend” casi no se habla. Aquí va a ver dónde encaja de verdad y cómo se muestra empatía: “I understand your situation”.",
      setting: {
        who: "Karen es una asesora de servicio al cliente, cortés y cuidadosa con sus palabras. Alejandra es colombiana y está reclamando un cobro que no reconoce en su factura.",
        what: "Aclarar un error de facturación en un mostrador de servicio, en el registro formal y medido de las oficinas.",
        when: "A media mañana entre semana, con la oficina lo bastante tranquila para hablarlo con calma.",
        where: "En Estados Unidos, el mostrador de servicio al cliente de una empresa de servicios públicos.",
        why: "Porque revertir el cobro depende de que todo se entienda con claridad, y el momento es formal: en inglés la cortesía no está en un pronombre, sino en las palabras que se eligen."
      },
      address: {
        form: "mixed",
        who: "Karen y Alejandra se tratan con cortesía formal, pero el inglés no marca esa distancia con un pronombre aparte.",
        why: "El inglés no tiene usted: la formalidad se lleva en el léxico y en los suavizadores — “I understand your situation”, “would you mind”, “let me check” — no en el “you”.",
        ifYouSwitch:
          "Si quiere sonar más formal, no cambie el pronombre (siempre es “you”); cambie las palabras: “I don't get it” es casual, “I'm not sure I follow” es formal."
      },
      dialogue: [
        {
          speaker: "Karen",
          target: "Good morning. How can I help you today?",
          translation: "Buenos días. ¿En qué le puedo colaborar hoy?",
          pronunciation: "gud MOR-nin. jau kan ai jelp yu tu-DEI",
          literal: "Buenos días. ¿Cómo puedo ayudarle hoy?",
          why: "“How can I help you?” es la fórmula estándar del servicio en inglés. La cortesía va en toda la frase, no en el “you”."
        },
        {
          speaker: "Alejandra",
          target: "Good morning. There's a charge here I don't understand.",
          translation: "Buenos días. Hay un cobro aquí que no entiendo.",
          pronunciation: "gud MOR-nin. ders a chardch jir ai dont an-der-STAND",
          literal: "Buenos días. Hay un cobro aquí que yo no entiendo.",
          why: "“I don't understand” es lo normal y lo cotidiano. Un colombiano podría querer decir “comprehend”, pero en inglés eso suena raro aquí."
        },
        {
          speaker: "Karen",
          target: "I understand your situation. Let me review the account.",
          translation: "Comprendo su situación. Permítame revisar la cuenta.",
          pronunciation: "ai an-der-STAND yor si-chu-EI-shon. let mi ri-VYU di a-KAUNT",
          literal: "Yo entiendo su situación. Déjeme revisar la cuenta.",
          why: "“I understand your situation” es la fórmula de empatía. El inglés la arma con “understand”, nunca con “comprehend”."
        },
        {
          speaker: "Alejandra",
          target: "I appreciate that. Do you understand where it came from?",
          translation: "Se lo agradezco. ¿Entiende usted de dónde salió?",
          pronunciation: "ai a-PRI-shieit dat. du yu an-der-STAND wer it keim from",
          literal: "Yo aprecio eso. ¿Entiende usted de dónde vino?",
          why: "“I appreciate that” es un agradecimiento formal muy útil. Note que otra vez el verbo es “understand”, el de siempre."
        },
        {
          speaker: "Karen",
          target: "I see what happened: it was a double charge. Does that make sense?",
          translation: "Ya veo qué pasó: fue un cobro doble. ¿Me hago entender?",
          pronunciation: "ai si wot JA-pend: it wos a DA-bol chardch. dos dat meik sens",
          literal: "Yo veo qué pasó: fue un cobro doble. ¿Eso hace sentido?",
          why: "“I see” es “ya entiendo”. Y para “¿me hago entender?” el inglés dice “does that make sense?”, no una frase reflexiva."
        },
        {
          speaker: "Alejandra",
          target: "Perfect, now I understand. Thank you so much for your help.",
          translation: "Perfecto, ya entiendo. Muchas gracias por su ayuda.",
          pronunciation: "PER-fekt, nau ai an-der-STAND. zenk yu so moch for yor jelp",
          literal: "Perfecto, ahora yo entiendo. Gracias tanto por su ayuda.",
          why: "Cierra con “now I understand” — natural y cortés. En inglés no hace falta subir a “comprehend” para sonar educada."
        }
      ],
      vocabulary: [
        {
          term: "to understand",
          explanation:
            "El verbo de todos los días para “entender” o “comprender”: en inglés cotidiano sirve para las dos cosas.",
          literal: "entender / comprender",
          useWhen:
            "Casi siempre: conversación, preguntas, explicaciones, empatía.",
          avoidWhen:
            "Casi nunca hay que evitarlo; es la opción segura.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["to get", "to follow", "to see", "to grasp"],
          example: {
            target: "I don't understand the question.",
            translation: "No entiendo la pregunta."
          }
        },
        {
          term: "to comprehend",
          explanation:
            "El primo formal y raro de “understand”. Suena académico o legal; casi no se dice al hablar.",
          literal: "comprender (formal)",
          useWhen:
            "Textos formales, exámenes, frases hechas como “beyond comprehension”.",
          avoidWhen:
            "Conversación normal, donde suena rígido o pedante.",
          register: "polite formal",
          region: "Inglés universal; muy poco frecuente en el habla.",
          related: ["to grasp", "to fathom", "to apprehend", "to digest"],
          example: {
            target: "The report is hard to comprehend.",
            translation: "El informe es difícil de comprender."
          }
        },
        {
          term: "I understand your situation",
          explanation:
            "La fórmula de empatía en servicio al cliente: reconoce el problema del otro como algo humano.",
          literal: "comprendo su situación",
          useWhen:
            "Mostrar solidaridad en un contexto formal o de servicio.",
          avoidWhen:
            "Con un amigo cercano, donde suena distante o de libreto.",
          register: "polite formal",
          region: "Inglés universal, estándar en atención al cliente.",
          related: ["I understand", "I hear you", "I know how you feel", "I get it"],
          example: {
            target: "I understand your situation, let me help.",
            translation: "Comprendo su situación, permítame ayudar."
          }
        },
        {
          term: "does that make sense?",
          explanation:
            "El equivalente de “¿me hago entender?”. El inglés no usa una frase reflexiva; pregunta si la idea tiene sentido.",
          literal: "¿eso hace sentido?",
          useWhen:
            "Confirmar, con cortesía, que una explicación quedó clara.",
          avoidWhen:
            "Si puede sonar a que dudas del otro; ahí mejor “let me know if that's clear”.",
          register: "polite",
          region: "Inglés universal.",
          related: ["is that clear?", "are you with me?", "do you follow?", "did I explain that well?"],
          example: {
            target: "It's that simple — does that make sense?",
            translation: "Es así de sencillo, ¿me hago entender?"
          }
        },
        {
          term: "I appreciate that",
          explanation:
            "Un agradecimiento formal y cálido, más elegante que un simple “thanks”.",
          literal: "se lo agradezco / aprecio eso",
          useWhen:
            "Reconocer con cortesía un gesto o una ayuda.",
          avoidWhen:
            "Entre amigos por algo mínimo, donde “thanks” basta.",
          register: "polite",
          region: "Inglés universal.",
          related: ["thank you", "that's very kind", "I'm grateful", "much appreciated"],
          example: {
            target: "I appreciate that, thank you.",
            translation: "Se lo agradezco, gracias."
          }
        },
        {
          term: "to see",
          explanation:
            "En sentido figurado, “to see” es “ya entiendo”: “I see” quiere decir “ah, ya veo, ya caigo”.",
          literal: "ver → entender",
          useWhen:
            "Reaccionar a una explicación: “Oh, I see.”",
          avoidWhen:
            "Cuando de verdad hablas de ver con los ojos y puede confundir.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I get it", "I understand", "got it", "makes sense"],
          example: {
            target: "Oh, I see what you mean.",
            translation: "Ah, ya veo lo que dices."
          }
        },
        {
          term: "to review (an account)",
          explanation:
            "Revisar o chequear: lo que hace la asesora con tu cuenta o tu factura.",
          literal: "revisar",
          useWhen:
            "Chequear documentos, cuentas o detalles.",
          avoidWhen:
            "Cuidado: “review” también es “reseñar”; el contexto lo aclara.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["to check", "to look over", "to go through", "to verify"],
          example: {
            target: "Let me review the account.",
            translation: "Permítame revisar la cuenta."
          }
        }
      ],
      note:
        "En inglés cotidiano, “understand” hace el trabajo de “entender” y de “comprender” a la vez; “comprehend” existe, pero es formal, académico y casi no se habla — decir “I don't comprehend” suena raro. Para la empatía, la fórmula es “I understand your situation”, y para “¿me hago entender?” el inglés dice “does that make sense?”, no una frase reflexiva. La cortesía no está en el pronombre, sino en las palabras.",
      culture: [
        {
          label: "“Comprehend” casi no se habla",
          body:
            "El español separa “entender” y “comprender” por registro, pero el inglés carga casi todo sobre una sola palabra: “understand”. “Comprehend” existe, sí, pero vive en los exámenes de lectura, los textos legales y frases hechas como “beyond comprehension”. Decir “I don't comprehend” en una conversación normal suena tan raro como leer en voz alta un manual. La regla práctica para un hispanohablante es sencilla: si dudas, di “understand”, y guarda “comprehend” para lo muy formal o escrito."
        },
        {
          label: "La empatía va con “understand”",
          body:
            "Cuando un colombiano quiere el efecto de “comprendo su situación”, el inglés no sube a “comprehend”: dice “I understand your situation”, o más suave, “I hear you”. Es una fórmula de servicio al cliente que reconoce el problema del otro como algo humano y no como un trámite. Usarla en el momento justo hace que suenes notablemente más fluido y más cortés, aunque el verbo sea el mismo de todos los días."
        },
        {
          label: "La cortesía va en las palabras",
          body:
            "El inglés no tiene usted, así que la formalidad no se marca con un pronombre: siempre es “you”. Se lleva en el léxico y en los suavizadores — “I understand your situation”, “would you mind”, “let me check that for you”. Un hispanohablante que busca el pronombre formal no lo va a encontrar; el ajuste está en elegir palabras más medidas. “I don't get it” es casual; “I'm not sure I follow” dice lo mismo con saco y corbata."
        },
        {
          label: "“Make sense” en vez del reflexivo",
          body:
            "El español revisa la comprensión con una frase reflexiva: “¿me hago entender?”. El inglés no piensa así; pregunta si la idea tiene sentido: “does that make sense?”. Traducir el reflexivo palabra por palabra produce el rarísimo “do I make myself understand?”, que ningún nativo dice. Vale la pena memorizar “does that make sense?” como un bloque, porque es la forma natural y cortés de confirmar que una explicación llegó bien."
        }
      ],
      pitfalls: [
        {
          mistake: "“I don't comprehend.”",
          whyItFails:
            "Gramaticalmente está bien, pero “comprehend” es formal y libresco; en una conversación normal suena rarísimo. La palabra de todos los días es “understand”.",
          sayInstead: "I don't understand."
        },
        {
          mistake: "“I comprehend your situation.”",
          whyItFails:
            "La fórmula de empatía usa “understand”, no “comprehend”; con “comprehend” suena a robot leyendo un manual, no a alguien solidario.",
          sayInstead: "I understand your situation."
        },
        {
          mistake: "“Do I make myself understand?”",
          whyItFails:
            "Es una traducción literal de “¿me hago entender?”. El inglés no usa esa estructura reflexiva; la pregunta natural es otra.",
          sayInstead: "Does that make sense?"
        },
        {
          mistake: "“You understand me?”",
          whyItFails:
            "Como muletilla al final suena a interrogatorio o a reproche, casi amenazante. Para confirmar con cortesía, el inglés usa otra fórmula.",
          sayInstead: "Does that make sense?"
        }
      ],
      variations: [
        {
          form: "I don't understand.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "El “no entiendo” de todos los días, sirve casi en cualquier parte."
        },
        {
          form: "I don't quite follow.",
          register: "polite",
          region: "Inglés universal",
          whenToUse: "Una forma más suave y formal de admitir que te perdiste."
        },
        {
          form: "I understand your situation.",
          register: "polite formal",
          region: "Inglés universal, estándar en servicio",
          whenToUse: "Mostrar empatía de manera formal, a un cliente o solicitante."
        },
        {
          form: "Does that make sense?",
          register: "polite",
          region: "Inglés universal",
          whenToUse: "Confirmar con cortesía que una explicación quedó clara."
        },
        {
          form: "You get me?",
          register: "casual",
          region: "Inglés informal, urbano",
          whenToUse: "Un “¿me captas?” muy casual entre amigos."
        }
      ],
      prompt: "¿Por qué Karen dice “I understand your situation” y no “I comprehend your situation”?",
      choices: [
        "Porque “comprehend” y “understand” significan cosas opuestas y solo una sirve para un reclamo.",
        "Porque la empatía en inglés se arma con “understand”; “comprehend” suena formal y de manual.",
        "Porque “understand” sería gramaticalmente incorrecto en una frase sobre la situación de alguien."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "En una conversación normal, ¿cuál es la forma natural de decir “no entiendo”?",
          choices: [
            "“I don't understand”, el verbo de todos los días que se usa casi siempre.",
            "“I don't comprehend”, que es lo que la gente usa en la gran mayoría de las charlas.",
            "“I don't apprehend”, una manera común y cotidiana de admitir que uno está perdido."
          ],
          answer: 0,
          tests: "understand como opcion cotidiana frente a comprehend"
        },
        {
          prompt: "Karen pregunta “does that make sense?”. ¿Por qué no dice “do I make myself understand?”?",
          choices: [
            "Porque “comprehend” nunca puede llevar un pronombre reflexivo en ningún caso en inglés.",
            "Porque el contexto es casual y esa frase está prohibida en el habla formal del inglés.",
            "Porque el inglés no usa el reflexivo; pregunta si la idea tiene sentido."
          ],
          answer: 2,
          tests: "make sense en vez del reflexivo del espanol"
        },
        {
          prompt: "Una asesora quiere mostrarle empatía formal a un cliente. ¿Cuál es la fórmula natural?",
          choices: [
            "I understand your situation, and I'll look into it right away.",
            "I totally comprehend your whole vibe, so don't even worry about it.",
            "I fully apprehend the entire problem that you are presenting to me now."
          ],
          answer: 0,
          tests: "I understand your situation como formula de empatia"
        },
        {
          prompt: "Alejandra le dice “I don't comprehend” a una amiga en un bar. ¿Cómo suena?",
          choices: [
            "Perfectamente natural y casual, justo lo que una amiga esperaría oír en un bar.",
            "Un poco rígido y libresco; entre amigas lo normal sería decir “I don't get it”.",
            "Grosero y despectivo, como si estuviera insultando la inteligencia de su amiga."
          ],
          answer: 1,
          tests: "desajuste de registro: comprehend suena rigido con amigos"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/11-foundation-reading-writing.js");
