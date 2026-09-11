/*
 * Lesson block: foundation / kitchen and morning.
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
    id: "drinking-agua-de-panela-after-the-sun",
    level: "Starter · Kitchen and morning",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "familiar",
    pathways: ["foundation"],
    verb: "beber",
    review: "pending",
    es: {
      title: "Beber agua de panela después del sol",
      situation:
        "You are in Santa Marta, at the home of a friend, after walking under a strong sun. They offer you cold agua de panela and then coffee. You have to sound natural and learn when beber works, even though people usually say tomar.",
      setting: {
        who: "Maritza is hosting a friend's visitor, Daniel, who has arrived hot, thirsty, and nervous about sounding too much like a textbook.",
        what: "A kitchen welcome: one cold drink now, coffee later, and a small correction before the phrase becomes a habit.",
        when: "A bright coastal afternoon, just after everyone has escaped the street and stepped into the shade.",
        where: "Santa Marta, in a family kitchen with cold agua de panela in the fridge and coffee ready for later.",
        why: "Because Colombians usually say tomar for drinks in conversation, while beber sounds formal, written, or emphatic unless the physical act really matters."
      },
      address: {
        form: "tú",
        who: "Maritza uses tú with Daniel because he is a young guest in a relaxed home, and Daniel follows her lead.",
        why: "On the Caribbean coast, tú is a natural warm choice in a family kitchen. It makes the offer feel welcoming rather than ceremonial.",
        ifYouSwitch:
          "Usted would be polite with an older host, but here it would add distance that Maritza is trying to remove. Vos would sound out of place in this scene."
      },
      dialogue: [
        {
          speaker: "Maritza",
          target: "Daniel, estás rojo del sol. ¿Quieres tomar algo frío?",
          translation: "Daniel, you're red from the sun. Do you want something cold to drink?",
          pronunciation: "dah-NYEL, es-TAS RROH-hoh del sol. KYEH-res toh-MAR AL-goh FREE-oh",
          literal: "Daniel, you-are red from-the sun. You-want to-take something cold?",
          why: "This is the Colombian offer you will actually hear: tomar algo, not beber algo. It works for water, juice, soda, and coffee."
        },
        {
          speaker: "Daniel",
          target: "Sí, gracias. Necesito beber agua de verdad.",
          translation: "Yes, thanks. I really need to drink water.",
          pronunciation: "see, GRAH-syahs. neh-seh-SEE-toh beh-BER AH-gwah deh behr-DAHD",
          literal: "Yes, thanks. I-need to-drink water of truth.",
          why: "Beber works here because Daniel is stressing the physical act. He is not making a social invitation; he is genuinely thirsty."
        },
        {
          speaker: "Maritza",
          target: "Te sirvo agua de panela con limón; eso revive a cualquiera.",
          translation: "I'll pour you agua de panela with lime; that revives anybody.",
          pronunciation: "teh SEER-boh AH-gwah deh pah-NEH-lah kon lee-MON; EH-soh rreh-BEE-beh ah kwal-KYEH-rah",
          literal: "To-you I-serve panela water with lime; that revives anyone.",
          why: "Agua de panela is a normal home drink made from unrefined cane sugar. Cold with lime, it belongs naturally in this kitchen."
        },
        {
          speaker: "Daniel",
          target: "Perfecto. Pero si digo “beber tinto”, ¿suena raro?",
          translation: "Perfect. But if I say “drink tinto,” does it sound odd?",
          pronunciation: "pehr-FEK-toh. PEH-roh see DEE-goh beh-BER TEEN-toh, SWEH-nah RRAH-roh",
          literal: "Perfect. But if I say drink black-coffee, it-sounds strange?",
          why: "In Colombia, un tinto is black coffee, not red wine. The ordinary phrase is tomar tinto, so his doubt is useful."
        },
        {
          speaker: "Maritza",
          target: "Un poquito. Decimos “tomar tinto”. Beber suena como de letrero.",
          translation: "A little. We say “have black coffee.” Beber sounds like something from a sign.",
          pronunciation: "oom poh-KEE-toh. deh-SEE-mos toh-MAR TEEN-toh. beh-BER SWEH-nah KOH-moh deh leh-TREH-roh",
          literal: "A little. We-say take black-coffee. Drink sounds like of sign.",
          why: "Signs and rules can say beber, especially about alcohol. People in kitchens normally say tomar, and that is the rhythm to copy."
        },
        {
          speaker: "Daniel",
          target: "Entonces tomo agua de panela ahora, y después tomamos tinto.",
          translation: "Then I'll have agua de panela now, and later we'll have black coffee.",
          pronunciation: "en-TON-ses TOH-moh AH-gwah deh pah-NEH-lah ah-OH-rah, ee des-PWES toh-MAH-mos TEEN-toh",
          literal: "Then I-take panela water now, and later we-take black-coffee.",
          why: "He lands on the useful split: beber for literal emphasis, tomar for the ordinary Colombian way of sharing a drink."
        }
      ],
      vocabulary: [
        {
          term: "beber",
          explanation:
            "The formal or emphatic verb for drinking. It is correct Spanish, but in Colombia it is not the usual word for a casual drink offer.",
          literal: "to drink",
          useWhen:
            "Use it when the physical act matters, when the tone is written, or when a rule is being precise about alcohol or liquids.",
          avoidWhen:
            "Avoid it for ordinary offers of coffee, juice, water, or soda. In those moments, tomar sounds far more Colombian.",
          register: "neutral to formal",
          region: "General Colombian; understood everywhere, but less conversational than tomar in drink scenes.",
          related: ["tomar", "servir", "trago", "tinto"],
          example: {
            target: "Necesito beber agua de verdad.",
            translation: "I really need to drink water."
          }
        },
        {
          term: "tomar algo",
          explanation:
            "The normal Colombian phrase for having something to drink, from water at home to a casual invitation after work.",
          literal: "to take something",
          useWhen:
            "Use it when offering or accepting a drink socially, especially before you have named the exact drink.",
          avoidWhen:
            "Avoid assuming it always means alcohol. The context decides whether tomar algo is innocent or a plan for drinks.",
          register: "neutral",
          region: "General Colombian and widely Latin American.",
          related: ["tomar agua", "tomar café", "tomar jugo", "tomar tinto"],
          example: {
            target: "¿Quieres tomar algo frío?",
            translation: "Do you want something cold to drink?"
          }
        },
        {
          term: "agua de panela",
          explanation:
            "A drink made with panela, unrefined cane sugar. It may be hot or cold, and lime is common when it is served cold.",
          literal: "panela water",
          useWhen:
            "Use it for the real Colombian drink in homes, road stops, thermoses, sick days, and hot afternoons.",
          avoidWhen:
            "Avoid treating it as a colorful tourist prop. For many families, it is an ordinary practical drink.",
          register: "neutral",
          region: "Common across Colombia, with different habits by family and climate.",
          related: ["panela", "limón", "aguapanela", "bebida fría"],
          example: {
            target: "Te sirvo agua de panela con limón.",
            translation: "I'll pour you agua de panela with lime."
          }
        },
        {
          term: "un tinto",
          explanation:
            "In Colombia, a black coffee. This is a classic trap for Spanish speakers from places where tinto points first to red wine.",
          literal: "a dark one",
          useWhen:
            "Use it in Colombia for a small black coffee, especially in homes, offices, cafés, and street stands.",
          avoidWhen:
            "Avoid using it for wine unless you say vino tinto. Without vino, Colombians hear coffee.",
          register: "neutral",
          region: "Colombian usage.",
          related: ["café negro", "tomar tinto", "vino tinto", "perico"],
          example: {
            target: "Después tomamos tinto.",
            translation: "Later we'll have black coffee."
          }
        },
        {
          term: "tomar trago",
          explanation:
            "The ordinary Colombian phrase for drinking alcohol socially, not for any liquid at all.",
          literal: "to take drink",
          useWhen:
            "Use it for beer, aguardiente, rum, or a night where alcohol is clearly the topic.",
          avoidWhen:
            "Avoid it for water or coffee unless you want people to think the topic has changed to alcohol.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["trago", "cerveza", "aguardiente", "salir a tomar"],
          example: {
            target: "Hoy no voy a tomar trago.",
            translation: "I'm not drinking alcohol today."
          }
        },
        {
          term: "servir",
          explanation:
            "The verb for pouring or serving someone a drink or food. It is the host's action, not the drinker's action.",
          literal: "to serve",
          useWhen:
            "Use it when someone puts a drink in a glass or food on a plate for another person.",
          avoidWhen:
            "Avoid using it to mean the person drank the liquid. Serving and drinking are different actions.",
          register: "neutral",
          region: "General Colombian.",
          related: ["te sirvo", "me sirve", "echar", "poner"],
          example: {
            target: "Te sirvo agua de panela.",
            translation: "I'll pour you agua de panela."
          }
        },
        {
          term: "de verdad",
          explanation:
            "A conversational way to add really or for real, often to show that a need is sincere rather than polite.",
          literal: "of truth",
          useWhen:
            "Use it when you genuinely need water, rest, help, or food and want the sentence to carry that weight.",
          avoidWhen:
            "Avoid it in stiff writing where realmente would fit better.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["en serio", "realmente", "sí, claro", "de una"],
          example: {
            target: "Necesito beber agua de verdad.",
            translation: "I really need to drink water."
          }
        }
      ],
      note:
        "Learn beber, but do not let it replace tomar in every drink sentence. Colombians say “¿quieres tomar algo?”, “vamos a tomar tinto” and “tomamos agua”. Beber is still valuable when the act of drinking is the point, when the tone is formal, or when alcohol is being discussed explicitly.",
      culture: [
        {
          label: "Tomar is the living verb",
          body:
            "A learner who says beber for every drink will be understood, but will sound over-taught. Tomar covers coffee at home, juice with lunch, water after walking, and drinks with friends. Beber survives best when the sentence wants precision, emphasis, or a written tone."
        },
        {
          label: "Tinto is not wine here",
          body:
            "In Colombia, un tinto is a small black coffee. Wine needs the noun vino: vino tinto. That matters because “¿quiere un tinto?” at ten in the morning is a coffee offer, not an invitation to start the day with wine."
        },
        {
          label: "A drink receives the guest",
          body:
            "In a hot coastal home, offering something cold is part of receiving someone properly. Refusing is allowed, but refusing without warmth can sound as if you are rejecting the welcome, not just the glass."
        },
        {
          label: "Agua de panela is everyday comfort",
          body:
            "Agua de panela belongs in real kitchens, thermoses, road stops, and sick days. It can be humble, cheap, practical, and comforting at the same time. Treating it as exotic misses why people keep it around."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “Quiero beber un tinto” for a normal coffee offer",
          whyItFails:
            "It is grammatical, but it sounds stiff in the scene. Colombians usually say tomar tinto, and that phrase places you inside the conversation.",
          sayInstead: "Quiero tomar un tinto."
        },
        {
          mistake: "Assuming “un tinto” means red wine",
          whyItFails:
            "In Colombia the default meaning is black coffee. Red wine needs the full phrase vino tinto, especially outside a wine context.",
          sayInstead: "Un tinto is black coffee; red wine is vino tinto."
        },
        {
          mistake: "Using “beber” for every invitation",
          whyItFails:
            "The sentence stays understandable but loses Colombian rhythm. The casual invitation is tomar algo, not beber algo.",
          sayInstead: "¿Quieres tomar algo?"
        },
        {
          mistake: "Treating “tomar trago” as any drink",
          whyItFails:
            "Trago points to alcohol. If you use it for water, people will either laugh or think you changed the subject.",
          sayInstead: "For water or coffee, say tomar agua or tomar tinto."
        }
      ],
      variations: [
        {
          form: "¿Quieres tomar algo frío?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The natural home offer when someone comes in hot or tired."
        },
        {
          form: "Necesito beber agua de verdad.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "When the physical need to drink water is the point."
        },
        {
          form: "Vamos a tomar tinto.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "A normal invitation to have black coffee together."
        },
        {
          form: "Prohibido beber licor en esta zona.",
          register: "formal written",
          region: "General Colombian",
          whenToUse: "A sign, rule, or official notice where beber sounds natural."
        },
        {
          form: "Hoy no voy a tomar trago.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Talking plainly about not drinking alcohol today."
        }
      ],
      prompt: "Maritza says “¿Quieres tomar algo frío?” instead of “¿Quieres beber algo frío?” What does that teach you?",
      choices: [
        "That tomar is the ordinary Colombian verb for casual drink offers.",
        "That beber is forbidden whenever the drink is cold or sweet.",
        "That tomar only works when the speaker means alcoholic drinks."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Daniel says “Necesito beber agua de verdad.” Why does beber work here?",
          choices: [
            "Because he is emphasizing the physical act of drinking water.",
            "Because Colombian Spanish never uses tomar with plain water.",
            "Because agua de panela must always take formal verbs."
          ],
          answer: 0,
          tests: "beber as emphatic physical action rather than casual invitation"
        },
        {
          prompt: "In Colombia, what is “un tinto” in this kitchen scene?",
          choices: [
            "A glass of red wine offered before the afternoon meal.",
            "A small black coffee served without milk in the cup.",
            "A cold panela drink mixed with lime and ice."
          ],
          answer: 1,
          tests: "Colombian tinto as black coffee, not wine"
        },
        {
          prompt: "Which sentence sounds most natural when accepting coffee later?",
          choices: [
            "Después bebemos tinto con todos.",
            "Después servimos tinto con todos.",
            "Después tomamos tinto con todos."
          ],
          answer: 2,
          tests: "tomar tinto as the ordinary Colombian phrase"
        },
        {
          prompt: "What does “tomar trago” usually mean?",
          choices: [
            "Drinking water after walking outside.",
            "Drinking alcohol in a social setting.",
            "Serving coffee to a house guest."
          ],
          answer: 1,
          tests: "trago as alcohol, not any drink"
        }
      ]
    },
    en: {
      title: "Tomar algo después del sol",
      situation:
        "Usted está en Santa Marta, en la casa de una amiga, después de caminar bajo un sol fuerte. Le ofrecen agua de panela fría y luego café. Tiene que decir drink, have coffee y drink alcohol sin traducir todo tomar como take.",
      setting: {
        who: "Maritza recibe a Daniel, un visitante acalorado que tiene sed y quiere aprender a decir las bebidas en inglés sin calcar el español.",
        what: "Una bienvenida de cocina: una bebida fría ahora, café más tarde y una corrección útil antes de que la traducción literal se vuelva costumbre.",
        when: "Una tarde costeña clara, justo después de que todos escaparon de la calle y entraron a la sombra.",
        where: "Santa Marta, en una cocina familiar con agua de panela fría en la nevera y café listo para más tarde.",
        why: "Porque el inglés usa drink para el acto físico y have para muchas bebidas sociales. Take no traduce el tomar colombiano en estas invitaciones."
      },
      address: {
        form: "mixed",
        who: "Maritza y Daniel se tratan por el nombre de pila; el inglés usa el mismo “you” para toda la escena.",
        why: "El inglés no distingue tú y usted en el pronombre. La calidez viene de nombres, contracciones y frases sencillas como “do you want”.",
        ifYouSwitch:
          "Añadir “sir” o “ma'am” volvería la cocina demasiado distante. En esta escena, el nombre de pila hace el trabajo que en español haría el tuteo."
      },
      dialogue: [
        {
          speaker: "Maritza",
          target: "Daniel, you're red from the sun. Do you want something cold to drink?",
          translation: "Daniel, estás rojo del sol. ¿Quieres tomar algo frío?",
          pronunciation: "DAN-yel, yur red from de son. du yu uant SOM-zing kold tu drink",
          literal: "Daniel, usted está rojo del sol. ¿Quiere algo frío para beber?",
          why: "“Something cold to drink” es la oferta natural. “Take something cold” no funciona como invitación a una bebida."
        },
        {
          speaker: "Daniel",
          target: "Yes, thanks. I really need to drink water.",
          translation: "Sí, gracias. Necesito beber agua de verdad.",
          pronunciation: "yes, zanks. ai RI-li nid tu drink UO-ter",
          literal: "Sí, gracias. Yo realmente necesito beber agua.",
          why: "Aquí drink sí es el verbo físico. El inglés no tiene tomar frente a beber, pero sí distingue drink water de have coffee."
        },
        {
          speaker: "Maritza",
          target: "I'll pour you agua de panela with lime; that brings anybody back.",
          translation: "Te sirvo agua de panela con limón; eso revive a cualquiera.",
          pronunciation: "ail por yu A-gua de pa-NE-la uid laim; dat brings E-ni-bo-di bak",
          literal: "Le verteré agua de panela con lima; eso devuelve a cualquiera.",
          why: "Pour you muestra que ella sirve la bebida en el vaso. Serve you se entiende, pero suena más a restaurante."
        },
        {
          speaker: "Daniel",
          target: "Perfect. But if I say “drink a tinto,” does it sound odd?",
          translation: "Perfecto. Pero si digo “beber un tinto”, ¿suena raro?",
          pronunciation: "PER-fekt. bot if ai sei drink a TIN-to, doz it saund od",
          literal: "Perfecto. Pero si digo beber un tinto, ¿suena extraño?",
          why: "En inglés, tinto no significa café para un oyente común. Si deja la palabra colombiana, necesita explicar que es black coffee."
        },
        {
          speaker: "Maritza",
          target: "A little. In English, say “have coffee.” “Drink coffee” is correct, but flatter.",
          translation: "Un poquito. En inglés, diga “tomar café”. “Beber café” es correcto, pero más plano.",
          pronunciation: "a LI-tol. in ING-glish, sei jav KO-fi. drink KO-fi iz ko-REKT, bot FLA-ter",
          literal: "Un poco. En inglés, diga tener café. Beber café es correcto, pero más plano.",
          why: "Para una invitación social, have coffee suena más natural que drink coffee. Drink coffee describe mejor el acto o el hábito."
        },
        {
          speaker: "Daniel",
          target: "Then I'll have agua de panela now, and later we'll have coffee.",
          translation: "Entonces tomo agua de panela ahora, y después tomamos tinto.",
          pronunciation: "den ail jav A-gua de pa-NE-la nau, and LEI-ter uil jav KO-fi",
          literal: "Entonces tendré agua de panela ahora, y después tendremos café.",
          why: "Have cubre el momento social de aceptar o compartir una bebida. Es la solución inglesa más cercana al tomar colombiano aquí."
        }
      ],
      vocabulary: [
        {
          term: "drink",
          explanation:
            "El verbo físico para beber y el verbo general para consumir líquidos. No cubre todos los usos sociales de tomar con igual naturalidad.",
          literal: "beber / tomar",
          useWhen:
            "Úselo cuando el acto importa: agua, alcohol, medicina líquida, hábitos, reglas o sed verdadera.",
          avoidWhen:
            "Evítelo como única traducción de tomar café con alguien. En un plan social, have suele sonar mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["have", "pour", "sip", "drink alcohol"],
          example: {
            target: "I really need to drink water.",
            translation: "Necesito beber agua de verdad."
          }
        },
        {
          term: "something cold to drink",
          explanation:
            "La fórmula natural para ofrecer una bebida fría sin nombrarla todavía.",
          literal: "algo frío para beber",
          useWhen:
            "Úsela cuando alguien llega con calor, cansancio o sed y usted quiere ofrecer una bebida.",
          avoidWhen:
            "No diga “take something cold”. Esa traducción literal de tomar no funciona como invitación corriente.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["something to drink", "a cold drink", "some water", "anything to drink"],
          example: {
            target: "Do you want something cold to drink?",
            translation: "¿Quieres tomar algo frío?"
          }
        },
        {
          term: "agua de panela",
          explanation:
            "Si conserva el nombre colombiano en inglés, trátelo como nombre de la bebida y explíquelo cuando haga falta.",
          literal: "agua de panela",
          useWhen:
            "Úselo con gente que conoce Colombia, o cuando la bebida exacta importa más que una traducción aproximada.",
          avoidWhen:
            "No espere que cualquier angloparlante entienda panela sin contexto.",
          register: "neutro",
          region: "Préstamo colombiano dentro de una conversación en inglés.",
          related: ["panela drink", "lime", "sugar cane", "cold drink"],
          example: {
            target: "I'll have agua de panela now.",
            translation: "Tomo agua de panela ahora."
          }
        },
        {
          term: "coffee",
          explanation:
            "La palabra que necesita para traducir tinto cuando habla con alguien que no conoce el uso colombiano.",
          literal: "café",
          useWhen:
            "Úsela cuando en Colombia diría tinto, pero su oyente necesita saber que se trata de café negro.",
          avoidWhen:
            "No diga “a tinto” sin explicar. En inglés no es una palabra normal para café.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["black coffee", "have coffee", "a cup of coffee", "wine"],
          example: {
            target: "Later we'll have coffee.",
            translation: "Después tomamos tinto."
          }
        },
        {
          term: "drink alcohol",
          explanation:
            "La manera clara de decir tomar trago cuando necesita que el alcohol quede explícito.",
          literal: "beber alcohol",
          useWhen:
            "Úselo para una regla, una decisión personal, una pregunta médica o una noche de tragos.",
          avoidWhen:
            "No lo confunda con have something to drink, que puede ser agua o jugo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["have a drink", "go out drinking", "beer", "liquor"],
          example: {
            target: "I'm not drinking alcohol today.",
            translation: "No voy a tomar trago hoy."
          }
        },
        {
          term: "pour you",
          explanation:
            "La forma de decir que alguien le sirve una bebida en el vaso.",
          literal: "servirle / verterle",
          useWhen:
            "Úselo en una casa, cocina o mesa cuando una persona llena el vaso de otra.",
          avoidWhen:
            "No lo use para el acto de beber. Pour y drink son acciones distintas.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["serve", "bring", "get you", "fill your glass"],
          example: {
            target: "I'll pour you agua de panela.",
            translation: "Te sirvo agua de panela."
          }
        },
        {
          term: "really need to",
          explanation:
            "Una forma sencilla de enfatizar una necesidad real y no sólo una preferencia educada.",
          literal: "realmente necesito",
          useWhen:
            "Úsela cuando la sed, el descanso, la comida o la ayuda son necesidades sinceras.",
          avoidWhen:
            "Evítela en una frase muy formal donde el énfasis emocional sobra.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["need to", "badly need to", "could use", "for real"],
          example: {
            target: "I really need to drink water.",
            translation: "Necesito beber agua de verdad."
          }
        }
      ],
      note:
        "No traduzca tomar siempre como take. Para bebidas, el inglés usa drink cuando importa el acto físico y have cuando importa el plan social: have coffee, have something to drink, have a beer. Esa diferencia produce inglés natural y evita frases calcadas.",
      culture: [
        {
          label: "Have es el tomar social",
          body:
            "Cuando alguien propone café, una cerveza o algo de tomar, el inglés suele preferir have. “Let's have coffee” no significa poseer café; significa compartirlo. Ese have social es clave para no sonar traducido."
        },
        {
          label: "Tinto necesita traducción",
          body:
            "Un colombiano oye tinto y piensa en café negro. Un angloparlante no tiene esa asociación. Si dice “a tinto” en inglés, conviértalo en black coffee o coffee, salvo que el contexto colombiano ya esté claro."
        },
        {
          label: "Una bebida también hospeda",
          body:
            "La escena cultural no desaparece al cambiar de idioma. Ofrecer “something cold to drink” sigue siendo una forma de recibir a alguien, no sólo una pregunta logística sobre líquidos."
        },
        {
          label: "Alcohol exige contexto",
          body:
            "“Have a drink” muchas veces sugiere alcohol, mientras “have something to drink” puede ser agua, gaseosa o jugo. Esa palabra something cambia mucho la expectativa."
        }
      ],
      pitfalls: [
        {
          mistake: "“Do you want to take something cold?”",
          whyItFails:
            "Es una traducción literal de tomar, pero en inglés no funciona como invitación natural a beber algo. Take necesita otro contexto.",
          sayInstead: "Do you want something cold to drink?"
        },
        {
          mistake: "“Let's take coffee later.”",
          whyItFails:
            "Coffee no se take en una invitación social. El inglés usa have para planes compartidos con café.",
          sayInstead: "Let's have coffee later."
        },
        {
          mistake: "“A tinto, please.”",
          whyItFails:
            "Un angloparlante común no entiende tinto como café colombiano. Si el contexto no es colombiano, la palabra necesita traducción.",
          sayInstead: "A black coffee, please."
        },
        {
          mistake: "“I served the water” cuando quiere decir que se la tomó",
          whyItFails:
            "Serve o pour describen poner la bebida en el vaso; drink describe tomarla. En inglés esas acciones no se intercambian.",
          sayInstead: "I drank the water."
        }
      ],
      variations: [
        {
          form: "Do you want something cold to drink?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "La oferta natural cuando alguien llega con calor o sed."
        },
        {
          form: "I really need to drink water.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Cuando importa la necesidad física de beber agua."
        },
        {
          form: "Let's have coffee later.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Una invitación corriente para tomar café juntos."
        },
        {
          form: "No drinking alcohol in this area.",
          register: "formal written",
          region: "Inglés universal",
          whenToUse: "Un aviso o regla donde drink suena natural."
        },
        {
          form: "I'm not drinking alcohol today.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Para decir claramente que hoy no va a tomar trago."
        }
      ],
      prompt: "Maritza says “Do you want something cold to drink?” What should you avoid translating literally?",
      choices: [
        "Avoid turning Colombian tomar into English take in this offer.",
        "Avoid using drink for water because water needs another verb.",
        "Avoid saying cold because temperature is not mentioned in English."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Daniel says “I really need to drink water.” Why is drink right here?",
          choices: [
            "Because have can never appear with any kind of water.",
            "Because the physical act of drinking water is the point.",
            "Because English requires drink for every social beverage."
          ],
          answer: 1,
          tests: "drink como verbo físico y no como invitación social"
        },
        {
          prompt: "¿Cómo debería traducir normalmente el “tinto” colombiano para un oyente en inglés?",
          choices: [
            "As red wine, because the color word is the same.",
            "As tinto only, because English already uses it for coffee.",
            "As black coffee or coffee, depending on the needed detail."
          ],
          answer: 2,
          tests: "tinto translated for non-Colombian English listeners"
        },
        {
          prompt: "¿Cuál frase suena más natural para invitar a alguien a tomar café más tarde?",
          choices: [
            "Let's have coffee later.",
            "Let's take coffee later.",
            "Let's pour coffee later."
          ],
          answer: 0,
          tests: "have coffee as the social invitation"
        },
        {
          prompt: "What does “I'm not drinking alcohol today” make explicit?",
          choices: [
            "That the speaker refuses all liquids for the day.",
            "That the speaker is avoiding alcoholic drinks today.",
            "That the speaker is serving drinks to other people."
          ],
          answer: 1,
          tests: "drink alcohol as the clear version of tomar trago"
        }
      ]
    }
  },
  {
    id: "cooking-sancocho-before-the-family-arrives",
    level: "Starter · Kitchen and morning",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "courteous",
    pathways: ["foundation"],
    verb: "cocinar",
    review: "pending",
    es: {
      title: "Cocinar sancocho antes de que llegue la familia",
      situation:
        "You are on a finca near Armenia on a Sunday morning. The family arrives at noon, and someone puts you to work helping with the sancocho. You have to say what you know how to cook and understand why everyone also says hacer almuerzo.",
      setting: {
        who: "Luz Marina is running the kitchen before the family arrives. Mateo is a visitor who wants to help without pretending he knows more than he does.",
        what: "Preparing sancocho in a finca kitchen, with several people doing small jobs around one big pot.",
        when: "Sunday morning, early enough that lunch can be ready by noon.",
        where: "Armenia, in the Eje Cafetero, in a kitchen that opens toward the patio of a finca.",
        why: "Because cocinar is the safe general verb, but Colombian kitchens also use hacer almuerzo, poner a hacer, sofreír, guisar, and cocer."
      },
      address: {
        form: "usted",
        who: "Luz Marina uses usted with Mateo, and Mateo uses usted back, even though the scene is warm.",
        why: "In the Coffee Region, usted can be affectionate and domestic. In this kitchen it respects the person directing the work.",
        ifYouSwitch:
          "Tú would be possible from a younger cousin, but not as safe for a guest helping an older host. Vos exists nearby, but a visitor should not force it."
      },
      dialogue: [
        {
          speaker: "Luz Marina",
          target: "Mateo, ¿usted sí sabe cocinar o sólo sabe mirar?",
          translation: "Mateo, do you actually know how to cook or do you only know how to watch?",
          pronunciation: "mah-TEH-oh, oos-TED see SAH-beh koh-see-NAR oh SOH-loh SAH-beh mee-RAR",
          literal: "Mateo, you yes know to-cook or only know to-watch?",
          why: "Saber cocinar means having the skill, not merely helping today. The tease is affectionate, but the question is real."
        },
        {
          speaker: "Mateo",
          target: "Sé cocinar arroz, pero nunca he hecho sancocho.",
          translation: "I know how to cook rice, but I've never made sancocho.",
          pronunciation: "seh koh-see-NAR ah-RROHS, PEH-roh NOON-kah eh EH-choh san-KOH-choh",
          literal: "I-know to-cook rice, but never I-have made sancocho.",
          why: "He uses cocinar for the skill and hacer for making the dish. Colombians often say hacer arroz, hacer almuerzo, and hacer sancocho."
        },
        {
          speaker: "Luz Marina",
          target: "Entonces pique la cebolla y yo sofrío el guiso.",
          translation: "Then chop the onion and I'll sauté the seasoning base.",
          pronunciation: "en-TON-ses PEE-keh lah seh-BOH-yah ee yo soh-FREE-oh el GHEE-soh",
          literal: "Then chop the onion and I sauté the stew-base.",
          why: "Sofreír is a kitchen verb you will hear often: onion, tomato, garlic, or spices cooking gently in oil."
        },
        {
          speaker: "Mateo",
          target: "¿El almuerzo es el sancocho? Pensé que almuerzo era algo rápido.",
          translation: "Is lunch the sancocho? I thought lunch was something quick.",
          pronunciation: "el al-MWEHR-soh es el san-KOH-choh. pen-SEH keh al-MWEHR-soh EH-rah AL-goh RRAH-pee-doh",
          literal: "The lunch is the sancocho? I-thought lunch was something quick.",
          why: "In Colombia, el almuerzo is often the main meal of the day. It is not automatically a light desk lunch."
        },
        {
          speaker: "Luz Marina",
          target: "No, mijo. Aquí hacemos almuerzo grande y comemos temprano.",
          translation: "No, dear. Here we make a big lunch and eat early.",
          pronunciation: "noh, MEE-hoh. ah-KEE ah-SEH-mos al-MWEHR-soh GRAN-deh ee koh-MEH-mos tem-PRAH-noh",
          literal: "No, my-son. Here we-make lunch big and eat early.",
          why: "Hacer almuerzo is not vague or careless. It is the everyday home phrase for preparing the midday meal."
        },
        {
          speaker: "Mateo",
          target: "Listo, yo cocino el arroz y usted me dice cuándo poner la yuca.",
          translation: "Okay, I'll cook the rice and you tell me when to put in the cassava.",
          pronunciation: "LEES-toh, yo koh-SEE-noh el ah-RROHS ee oos-TED meh DEE-seh KWAN-doh poh-NEHR lah YOO-kah",
          literal: "Ready, I cook the rice and you tell me when to put the cassava.",
          why: "This beginner sentence keeps the kitchen verbs separate: cocinar the rice, poner the yuca, and follow the host's timing."
        }
      ],
      vocabulary: [
        {
          term: "cocinar",
          explanation:
            "The general verb for cooking, both as a skill and as an action in the kitchen.",
          literal: "to cook",
          useWhen:
            "Use it for knowing how to cook, cooking rice, cooking for someone, or cooking as a regular activity.",
          avoidWhen:
            "Avoid assuming it is the only kitchen verb. Colombians very often say hacer almuerzo or hacer arroz.",
          register: "neutral",
          region: "General Colombian.",
          related: ["hacer", "preparar", "guisar", "sofreír"],
          example: {
            target: "¿Usted sí sabe cocinar?",
            translation: "Do you actually know how to cook?"
          }
        },
        {
          term: "hacer almuerzo",
          explanation:
            "A very common way to say make lunch. It often sounds more domestic and natural than cocinar almuerzo.",
          literal: "to make lunch",
          useWhen:
            "Use it for preparing the midday meal at home, especially when the whole meal is the project.",
          avoidWhen:
            "Avoid it as a formal recipe title. Preparar or cocinar may sound cleaner in written instructions.",
          register: "neutral",
          region: "General Colombian.",
          related: ["hacer comida", "hacer arroz", "preparar almuerzo", "cocinar"],
          example: {
            target: "Aquí hacemos almuerzo grande.",
            translation: "Here we make a big lunch."
          }
        },
        {
          term: "sancocho",
          explanation:
            "A hearty soup or stew built around meat or chicken, starchy vegetables, corn, herbs, and time.",
          literal: "sancocho",
          useWhen:
            "Use it for family meals, fincas, Sundays, gatherings, or anywhere one big pot can feed many people.",
          avoidWhen:
            "Avoid treating it as one fixed recipe. It changes by region, family, budget, and occasion.",
          register: "neutral",
          region: "National dish family with many regional versions.",
          related: ["yuca", "plátano", "mazorca", "cilantro"],
          example: {
            target: "Nunca he hecho sancocho.",
            translation: "I've never made sancocho."
          }
        },
        {
          term: "sofreír",
          explanation:
            "To fry gently in oil at the start of a dish, often onion, tomato, garlic, or seasoning.",
          literal: "to lightly fry",
          useWhen:
            "Use it when building a flavor base before adding rice, beans, soup ingredients, or sauce.",
          avoidWhen:
            "Avoid it for deep-frying food. That is freír, not sofreír.",
          register: "neutral",
          region: "General Colombian and wider Spanish.",
          related: ["freír", "guiso", "hogao", "aceite"],
          example: {
            target: "Yo sofrío el guiso.",
            translation: "I'll sauté the seasoning base."
          }
        },
        {
          term: "guiso",
          explanation:
            "A cooked seasoning base or stew-like mixture. In many Colombian kitchens it starts with onion and tomato.",
          literal: "stew / seasoning base",
          useWhen:
            "Use it for the flavor base that goes into rice, beans, meat, or soup.",
          avoidWhen:
            "Avoid assuming it always means a complete stew. In a kitchen command, it may mean the base only.",
          register: "neutral",
          region: "General Colombian; hogao is a related tomato-onion sauce.",
          related: ["hogao", "sofrito", "cebolla", "tomate"],
          example: {
            target: "Yo sofrío el guiso.",
            translation: "I'll sauté the seasoning base."
          }
        },
        {
          term: "poner a hacer",
          explanation:
            "A home kitchen phrase for putting food on to cook, especially when time and heat will do the work.",
          literal: "to put to make",
          useWhen:
            "Use it for starting rice, beans, meat, yuca, or a pot that needs time on the stove.",
          avoidWhen:
            "Avoid it in precise recipes for outsiders, where poner a cocinar may be clearer.",
          register: "friendly informal",
          region: "Common Colombian home speech.",
          related: ["poner la yuca", "poner el arroz", "dejar cocinando", "montar la olla"],
          example: {
            target: "Dígame cuándo poner la yuca.",
            translation: "Tell me when to put in the cassava."
          }
        },
        {
          term: "cocer",
          explanation:
            "A more technical verb meaning to cook something through by heat. It is not the everyday replacement for cocinar.",
          literal: "to cook through / to boil",
          useWhen:
            "Use it in recipes or food talk when yuca, potato, or meat must become properly cooked inside.",
          avoidWhen:
            "Avoid it for general cooking skill. “Sé cocer” sounds narrow or incomplete; say “sé cocinar.”",
          register: "formal or technical",
          region: "Understood across Colombia, less everyday than cocinar or hacer.",
          related: ["cocinar", "hervir", "ablandar", "estar cocido"],
          example: {
            target: "La yuca tiene que cocer bien.",
            translation: "The cassava has to cook through properly."
          }
        }
      ],
      note:
        "Cocinar is the safe general verb, but real kitchens are full of smaller verbs. Colombians make lunch, put rice on, sauté the guiso, and cook yuca through. Learning cocinar together with hacer, sofreír, poner and cocer makes the lesson sound like a kitchen, not a dictionary.",
      culture: [
        {
          label: "Almuerzo is the main event",
          body:
            "For many Colombian families, especially on weekends, el almuerzo is the meal that gathers people and effort. Calling it lunch in English can make it sound smaller than it feels. A Sunday sancocho is not a sandwich break."
        },
        {
          label: "Helping starts small",
          body:
            "A guest who offers to help may be given onion, cilantro, plates, or a pot to watch. That is not an insult. It lets the person in charge include you without handing you the whole meal."
        },
        {
          label: "Hacer is not careless Spanish",
          body:
            "Foreign learners often overcorrect toward cocinar because it feels more exact. But “hacer almuerzo” is normal, warm, and domestic. In many kitchens, it is the phrase you will hear first."
        },
        {
          label: "Every sancocho has a house accent",
          body:
            "Sancocho varies by region and family: chicken, beef, fish, three meats, different herbs, different starches. The goal here is not one recipe, but the verbs that move around the pot."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “sé cocer” when you mean “I know how to cook”",
          whyItFails:
            "Cocer is technical and narrow. For general skill, Colombians say cocinar, and “sé cocer” sounds like boiling something through.",
          sayInstead: "Sé cocinar."
        },
        {
          mistake: "Avoiding “hacer almuerzo” because it seems vague",
          whyItFails:
            "It is not vague to Colombians in a home kitchen. It means preparing the midday meal, often the main meal of the day.",
          sayInstead: "Voy a hacer almuerzo."
        },
        {
          mistake: "Using “freír” for the guiso when the heat is gentle",
          whyItFails:
            "Freír suggests stronger frying. Sofreír is the gentler kitchen action for onion, tomato, garlic, or spices in a little oil.",
          sayInstead: "Voy a sofreír el guiso."
        },
        {
          mistake: "Assuming almuerzo means a light quick lunch",
          whyItFails:
            "In Colombia, almuerzo is often the central meal and can be big, cooked, and shared. English lunch can hide that difference.",
          sayInstead: "El almuerzo puede ser la comida principal."
        }
      ],
      variations: [
        {
          form: "¿Usted sí sabe cocinar?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "A teasing but useful way to ask whether someone actually cooks."
        },
        {
          form: "Sé cocinar arroz.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "A simple statement about a cooking skill you really have."
        },
        {
          form: "Voy a hacer almuerzo.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The ordinary home phrase for preparing the midday meal."
        },
        {
          form: "Ponga la yuca a hacer.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "A kitchen instruction to start cooking the cassava."
        },
        {
          form: "La yuca tiene que cocer bien.",
          register: "technical neutral",
          region: "General Colombian",
          whenToUse: "When you care that the food cooks through properly."
        }
      ],
      prompt: "Mateo says “Sé cocinar arroz, pero nunca he hecho sancocho.” Why do both verbs fit?",
      choices: [
        "Cocinar names the skill, while hacer names making the dish.",
        "Cocinar is only for rice, while hacer is only for soup.",
        "Hacer is restaurant Spanish, while cocinar is home Spanish."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Why is “hacer almuerzo” a good phrase in this kitchen?",
          choices: [
            "Because cocinar cannot be used with midday meals in Colombia.",
            "Because it is a normal Colombian way to prepare lunch.",
            "Because almuerzo always means a cold meal without cooking."
          ],
          answer: 1,
          tests: "hacer almuerzo as normal domestic Colombian Spanish"
        },
        {
          prompt: "What is Luz Marina doing when she says “yo sofrío el guiso”?",
          choices: [
            "Cooking the seasoning base gently in oil.",
            "Deep-frying the whole finished sancocho.",
            "Serving the cooked lunch onto plates."
          ],
          answer: 0,
          tests: "sofreír as gentle frying for a flavor base"
        },
        {
          prompt: "Which sentence best says you know how to cook in general?",
          choices: [
            "Sé poner comida completa.",
            "Sé cocer comida completa.",
            "Sé cocinar comida completa."
          ],
          answer: 2,
          tests: "cocinar for general cooking skill"
        },
        {
          prompt: "What should you remember about Colombian almuerzo?",
          choices: [
            "It always means a small snack between meals.",
            "It is only eaten late at night after work.",
            "It can be the main cooked meal of the day."
          ],
          answer: 2,
          tests: "almuerzo as main meal, not automatically light lunch"
        }
      ]
    },
    en: {
      title: "Preparar sancocho antes de que llegue la familia",
      situation:
        "Usted está en una finca cerca de Armenia una mañana de domingo. La familia llega al mediodía y alguien le pide ayudar con el sancocho. Tiene que decir cook, make y put on sin traducir todos los verbos de cocina como cocinar.",
      setting: {
        who: "Luz Marina dirige la cocina antes de que llegue la familia. Mateo es un invitado que quiere ayudar sin fingir que sabe más de lo que sabe.",
        what: "Preparar sancocho en una cocina de finca, con varias personas haciendo oficios pequeños alrededor de una olla grande.",
        when: "Domingo por la mañana, con tiempo suficiente para que el almuerzo esté listo al mediodía.",
        where: "Armenia, en el Eje Cafetero, en una cocina abierta hacia el patio de una finca.",
        why: "Porque cook sirve para la habilidad general, pero el inglés también usa make lunch, put the rice on y sauté para escenas de cocina."
      },
      address: {
        form: "mixed",
        who: "Luz Marina y Mateo usan nombres de pila en inglés, y el mismo “you” cubre todo el trato.",
        why: "Como el inglés no tiene usted visible, el respeto se marca con tono, ayuda concreta y frases completas.",
        ifYouSwitch:
          "Poner “ma'am” en cada respuesta volvería la cocina demasiado distante. En esta escena, colaborar bien comunica más respeto que escoger un pronombre inexistente."
      },
      dialogue: [
        {
          speaker: "Luz Marina",
          target: "Mateo, do you actually know how to cook, or just how to watch?",
          translation: "Mateo, ¿usted sí sabe cocinar o sólo sabe mirar?",
          pronunciation: "ma-TE-o, du yu AK-chu-a-li nou jau tu kuk, or yost jau tu uach",
          literal: "Mateo, ¿usted realmente sabe cómo cocinar, o sólo cómo mirar?",
          why: "Know how to cook expresa la habilidad. No diga know to cook; el inglés necesita how cuando habla de saber hacer algo."
        },
        {
          speaker: "Mateo",
          target: "I know how to cook rice, but I've never made sancocho.",
          translation: "Sé cocinar arroz, pero nunca he hecho sancocho.",
          pronunciation: "ai nou jau tu kuk rais, bot aiv NE-ver meid san-KO-cho",
          literal: "Sé cómo cocinar arroz, pero nunca he hecho sancocho.",
          why: "Cook nombra la habilidad o la acción con arroz; make nombra producir el plato completo. El inglés necesita ambos."
        },
        {
          speaker: "Luz Marina",
          target: "Then chop the onion and I'll sauté the seasoning base.",
          translation: "Entonces pique la cebolla y yo sofrío el guiso.",
          pronunciation: "den chop di O-nion and ail sou-TEI de SI-son-ing beis",
          literal: "Entonces pique la cebolla y yo sofreiré la base de condimentos.",
          why: "Sauté es cocinar algo en poca grasa. Traduce sofreír mucho mejor que deep-fry, que sería fritura profunda."
        },
        {
          speaker: "Mateo",
          target: "Is lunch the sancocho? I thought lunch was something quick.",
          translation: "¿El almuerzo es el sancocho? Pensé que almuerzo era algo rápido.",
          pronunciation: "iz lonch de san-KO-cho. ai zot lonch uoz SOM-zing kuik",
          literal: "¿El almuerzo es el sancocho? Pensé que almuerzo era algo rápido.",
          why: "Lunch puede sonar pequeño para un colombiano, pero en inglés la palabra no garantiza tamaño. La escena aclara que es the main meal."
        },
        {
          speaker: "Luz Marina",
          target: "No, dear. Here we make a big lunch and eat early.",
          translation: "No, mijo. Aquí hacemos almuerzo grande y comemos temprano.",
          pronunciation: "nou, dir. jir ui meik a big lonch and it ER-li",
          literal: "No, querido. Aquí hacemos un almuerzo grande y comemos temprano.",
          why: "Make lunch es natural porque cubre toda la preparación. Cook lunch existe, pero mira más hacia el calor y menos hacia el proyecto."
        },
        {
          speaker: "Mateo",
          target: "Okay, I'll cook the rice and you tell me when to put the cassava in.",
          translation: "Listo, yo cocino el arroz y usted me dice cuándo poner la yuca.",
          pronunciation: "ou-KEI, ail kuk de rais and yu tel mi uen tu put de ka-SA-va in",
          literal: "Listo, cocinaré el arroz y usted me dice cuándo poner la yuca adentro.",
          why: "Put the cassava in es la instrucción cotidiana para agregarla a la olla. No hace falta un verbo especial cada vez."
        }
      ],
      vocabulary: [
        {
          term: "cook",
          explanation:
            "El verbo general para cocinar y también para saber cocinar como habilidad.",
          literal: "cocinar",
          useWhen:
            "Úselo para cocinar arroz, cocinar para alguien, saber cocinar o trabajar con calor en la cocina.",
          avoidWhen:
            "Evítelo como única solución cuando make, put on o sauté son más naturales.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["make", "prepare", "sauté", "boil"],
          example: {
            target: "Do you actually know how to cook?",
            translation: "¿Usted sí sabe cocinar?"
          }
        },
        {
          term: "make lunch",
          explanation:
            "La forma corriente de decir preparar el almuerzo. Incluye cocinar, organizar y sacar la comida adelante.",
          literal: "hacer almuerzo",
          useWhen:
            "Úselo cuando habla de preparar la comida del mediodía en casa.",
          avoidWhen:
            "No traduzca todo como cook lunch si quiere una frase amplia y natural.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["make dinner", "prepare lunch", "cook lunch", "fix lunch"],
          example: {
            target: "Here we make a big lunch.",
            translation: "Aquí hacemos almuerzo grande."
          }
        },
        {
          term: "sancocho",
          explanation:
            "Puede dejarse como nombre del plato en inglés, pero conviene dar contexto si el oyente no lo conoce.",
          literal: "sancocho",
          useWhen:
            "Úselo cuando quiere nombrar el plato colombiano exacto y no reducirlo a soup or stew.",
          avoidWhen:
            "No espere que todos sepan qué lleva o qué tan importante puede ser en una comida familiar.",
          register: "neutro",
          region: "Préstamo colombiano dentro del inglés de la conversación.",
          related: ["stew", "soup", "cassava", "plantain"],
          example: {
            target: "I've never made sancocho.",
            translation: "Nunca he hecho sancocho."
          }
        },
        {
          term: "sauté",
          explanation:
            "Cocinar en poca grasa, normalmente antes de añadir otros ingredientes. Es una buena traducción de sofreír.",
          literal: "sofreír",
          useWhen:
            "Úselo con cebolla, tomate, ajo, condimentos o una base de sabor en poco aceite.",
          avoidWhen:
            "No lo use para fritura profunda. Eso es deep-fry.",
          register: "neutro",
          region: "Inglés universal de cocina.",
          related: ["fry", "deep-fry", "seasoning base", "oil"],
          example: {
            target: "I'll sauté the seasoning base.",
            translation: "Yo sofrío el guiso."
          }
        },
        {
          term: "seasoning base",
          explanation:
            "Una forma clara de explicar guiso cuando significa la base de cebolla, tomate, ajo o condimentos.",
          literal: "base de condimentos",
          useWhen:
            "Úselo cuando el guiso no es el plato entero, sino el sabor que se prepara al comienzo.",
          avoidWhen:
            "No traduzca siempre guiso como stew; aquí confundiría la parte con el plato completo.",
          register: "neutro",
          region: "Inglés universal, aunque cada cocina nombra sus bases de otra manera.",
          related: ["sofrito", "sauce base", "onion", "tomato"],
          example: {
            target: "I'll sauté the seasoning base.",
            translation: "Yo sofrío el guiso."
          }
        },
        {
          term: "put the rice on",
          explanation:
            "La frase casera para poner arroz a cocinar, porque después el fuego y el tiempo trabajan.",
          literal: "poner el arroz a hacer",
          useWhen:
            "Úselo al iniciar arroz, agua, sopa o algo que queda en la estufa un rato.",
          avoidWhen:
            "Si quiere agregar un ingrediente a una olla ya empezada, use put it in.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["put the pot on", "put it in", "start the rice", "leave it cooking"],
          example: {
            target: "I'll put the rice on now.",
            translation: "Pongo el arroz a hacer ahora."
          }
        },
        {
          term: "cook through",
          explanation:
            "Cocinarse completamente por dentro. Sirve para yuca, pollo, papa o cualquier alimento que no puede quedar crudo.",
          literal: "cocer bien",
          useWhen:
            "Úselo cuando importa que el alimento quede totalmente cocido, no sólo caliente por fuera.",
          avoidWhen:
            "No lo use para decir que usted sabe cocinar en general. Ahí diga know how to cook.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["boil", "soften", "done", "undercooked"],
          example: {
            target: "The cassava has to cook through.",
            translation: "La yuca tiene que cocer bien."
          }
        }
      ],
      note:
        "Cook es indispensable, pero no lo use para todo. El inglés dice know how to cook para la habilidad, make lunch para preparar la comida, sauté para sofreír y put the rice on para poner algo a hacer. Esa variedad suena más natural que repetir cook en cada frase.",
      culture: [
        {
          label: "Lunch puede quedarse corto",
          body:
            "Para un colombiano, almuerzo puede ser la comida central del día. En inglés, lunch no siempre trae esa idea; a veces hay que añadir big, main meal o Sunday lunch para que el oyente imagine el peso real."
        },
        {
          label: "Ayudar empieza con tareas pequeñas",
          body:
            "En una cocina familiar, que le den cebolla para picar no significa que usted sea inútil. Significa que entró al sistema sin quitarle el mando a quien sabe los tiempos de la olla."
        },
        {
          label: "Make no es menos preciso",
          body:
            "Los hispanohablantes a veces quieren usar cook porque parece más cercano a cocinar. Pero make lunch es natural y cubre la preparación completa, igual que hacer almuerzo en Colombia."
        },
        {
          label: "El nombre del plato puede quedarse",
          body:
            "Sancocho puede decirse sancocho en inglés si la identidad del plato importa. Lo importante es no dejar solo al oyente: añada Colombian stew or soup si necesita contexto."
        }
      ],
      pitfalls: [
        {
          mistake: "“I know to cook.”",
          whyItFails:
            "Después de know, el inglés necesita how to cuando habla de una habilidad. Sin how, la frase suena incompleta y traducida.",
          sayInstead: "I know how to cook."
        },
        {
          mistake: "“I will cook lunch” en todos los contextos",
          whyItFails:
            "Es correcto, pero puede sonar más estrecho que make lunch. Make cubre preparar, organizar y sacar la comida completa.",
          sayInstead: "I'll make lunch."
        },
        {
          mistake: "“I'll fry the seasoning base” para sofreír suave",
          whyItFails:
            "Fry puede sonar más fuerte o grasoso. Para la acción suave con poca grasa, sauté es más exacto.",
          sayInstead: "I'll sauté the seasoning base."
        },
        {
          mistake: "“The cassava has to sew well.”",
          whyItFails:
            "Cocer y sew son falsos amigos por sonido, no por significado. Sew es coser con hilo; la yuca needs to cook through.",
          sayInstead: "The cassava has to cook through."
        }
      ],
      variations: [
        {
          form: "Do you actually know how to cook?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Una pregunta juguetona sobre si alguien de verdad cocina."
        },
        {
          form: "I know how to cook rice.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una frase sencilla sobre una habilidad concreta."
        },
        {
          form: "I'm going to make lunch.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La forma casera de decir que va a preparar el almuerzo."
        },
        {
          form: "Put the cassava in.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Una instrucción directa para agregar la yuca a la olla."
        },
        {
          form: "The cassava has to cook through.",
          register: "técnico neutro",
          region: "Inglés universal",
          whenToUse: "Cuando importa que la yuca quede totalmente cocida."
        }
      ],
      prompt: "Mateo says “I know how to cook rice, but I've never made sancocho.” Why do both verbs fit?",
      choices: [
        "Cook names the skill, while make names producing the dish.",
        "Cook only works with rice, while make only works with soup.",
        "Make is restaurant English, while cook is home English."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Why is “make lunch” useful in this kitchen scene?",
          choices: [
            "Because cook cannot appear with meals in English at all.",
            "Because it naturally covers preparing the whole midday meal.",
            "Because lunch always means uncooked food in English."
          ],
          answer: 1,
          tests: "make lunch as the natural broad phrase"
        },
        {
          prompt: "What does “sauté the seasoning base” mean here?",
          choices: [
            "Deep-fry the entire finished pot of sancocho.",
            "Serve the cooked lunch onto everyone’s plates.",
            "Cook the flavor base gently in a little oil."
          ],
          answer: 2,
          tests: "sauté as the English match for sofreír"
        },
        {
          prompt: "Which sentence best states a general cooking skill?",
          choices: [
            "I know how to cook.",
            "I know to cook.",
            "I know for cook."
          ],
          answer: 0,
          tests: "know how to for abilities"
        },
        {
          prompt: "What does “the cassava has to cook through” stress?",
          choices: [
            "That the cassava should be sewn together well.",
            "That the cassava is only being served cold.",
            "That the cassava must be fully cooked inside."
          ],
          answer: 2,
          tests: "cook through as fully cooked, not sewn"
        }
      ]
    }
  },
  {
    id: "waking-up-early-for-the-bus",
    level: "Starter · Kitchen and morning",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "familiar",
    pathways: ["foundation"],
    verb: "despertar",
    review: "pending",
    es: {
      title: "Despertarse temprano para alcanzar el bus",
      situation:
        "You are going to leave Bucaramanga for a finca in Santander before the day heats up. You are staying at the home of a friend and have to talk about the alarm, waking up early, and that inevitable Colombian word: madrugar.",
      setting: {
        who: "Nicolás is hosting Sam before an early ride to a family finca. Sam is worried about missing the bus and waking the whole house.",
        what: "Planning the morning before a pre-dawn departure, with alarms, coffee, and quiet movement through the apartment.",
        when: "Very early on a Saturday, before the sun has made the road hot.",
        where: "Bucaramanga, in an apartment near the bus terminal, with a family that still plans carefully.",
        why: "Because despertar and despertarse are only part of the morning. Colombians constantly use madrugar for getting up early and trasnochar for staying up too late."
      },
      address: {
        form: "vos",
        who: "Nicolás uses vos with Sam as a close friend, and Sam mirrors it as best he can.",
        why: "Vos is heard in parts of Santander and among friends in several Colombian regions. Here it marks trust, not decoration.",
        ifYouSwitch:
          "Tú would also be understood and sound neutral. Usted would make the friendship suddenly more formal unless the household already used it affectionately."
      },
      dialogue: [
        {
          speaker: "Nicolás",
          target: "Sam, mañana toca madrugar; el bus sale a las cinco.",
          translation: "Sam, tomorrow we have to get up early; the bus leaves at five.",
          pronunciation: "sam, mah-NYAH-nah TOH-kah mah-droo-GAR; el boos SAH-leh ah las SEEN-koh",
          literal: "Sam, tomorrow it-touches to-rise-early; the bus leaves at the five.",
          why: "Toca madrugar is an essential Colombian morning sentence. It means the early start is not really optional."
        },
        {
          speaker: "Sam",
          target: "¿A qué hora me tengo que despertar?",
          translation: "What time do I have to wake up?",
          pronunciation: "ah keh OH-rah meh TEN-goh keh des-pehr-TAR",
          literal: "At what hour myself I-have to wake?",
          why: "Because Sam is waking himself up, the reflexive form despertarse is natural: me tengo que despertar."
        },
        {
          speaker: "Nicolás",
          target: "Poné el despertador a las cuatro y media, por si acaso.",
          translation: "Set the alarm for four-thirty, just in case.",
          pronunciation: "poh-NEH el des-pehr-tah-DOR ah las KWAH-troh ee MEH-dyah, por see ah-KAH-soh",
          literal: "Put the waker at the four and half, in case.",
          why: "El despertador is the alarm, including a phone alarm. With vos, poné is the natural command in this friendly exchange."
        },
        {
          speaker: "Sam",
          target: "¿Y si el despertador despierta a todos?",
          translation: "And what if the alarm wakes everyone up?",
          pronunciation: "ee see el des-pehr-tah-DOR des-PYEHR-tah ah TOH-dos",
          literal: "And if the alarm wakes all?",
          why: "Here despertar is not reflexive because the alarm wakes other people. Something wakes someone else up."
        },
        {
          speaker: "Nicolás",
          target: "Tranquilo, mi papá también madruga y mi hermano trasnocha.",
          translation: "Don't worry, my dad gets up early too and my brother stays up late.",
          pronunciation: "tran-KEE-loh, mee pah-PAH tam-BYEN mah-DROO-gah ee mee er-MAH-noh tras-NOH-chah",
          literal: "Calm, my dad also rises-early and my brother stays-up-late.",
          why: "Madrugar and trasnochar are a pair you will hear constantly: one pays the morning price, the other pays the night price."
        },
        {
          speaker: "Sam",
          target: "Listo, madrugo con ustedes y no trasnocho hoy.",
          translation: "Okay, I'll get up early with you all and I won't stay up late tonight.",
          pronunciation: "LEES-toh, mah-DROO-goh kon oos-TEH-des ee noh tras-NOH-choh oy",
          literal: "Ready, I-rise-early with you-all and not I-stay-up-late today.",
          why: "This is the practical morning sentence: madrugar for the early start, trasnochar for the late-night risk, and despertar only where it belongs."
        }
      ],
      vocabulary: [
        {
          term: "despertar",
          explanation:
            "To wake someone or something up. Without the reflexive pronoun, the subject usually causes the waking.",
          literal: "to wake",
          useWhen:
            "Use it when an alarm wakes people, a noise wakes a baby, or you wake someone else.",
          avoidWhen:
            "Avoid it alone when you mean you wake up yourself. Then use despertarse: me despierto.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["despertarse", "madrugar", "trasnochar", "levantarse"],
          example: {
            target: "El despertador despierta a todos.",
            translation: "The alarm wakes everyone up."
          }
        },
        {
          term: "despertarse",
          explanation:
            "To wake up oneself. This is the form you need for your own morning.",
          literal: "to wake oneself",
          useWhen:
            "Use it for what time you wake up, what time you have to wake up, or whether you woke up late.",
          avoidWhen:
            "Avoid it when something wakes another person. Then use despertar with that person as the object.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["me despierto", "levantarse", "dormirse", "desvelarse"],
          example: {
            target: "¿A qué hora me tengo que despertar?",
            translation: "What time do I have to wake up?"
          }
        },
        {
          term: "madrugar",
          explanation:
            "To get up very early, usually because life requires it. English has no clean single-word equivalent.",
          literal: "to early-morning",
          useWhen:
            "Use it for work, travel, school, errands, farm days, or any plan that starts painfully early.",
          avoidWhen:
            "Avoid it for simply waking up at a normal time. Madrugar carries the feeling of early effort.",
          register: "neutral",
          region: "Very common Colombian and wider Latin American Spanish.",
          related: ["toca madrugar", "madrugué", "levantarse temprano", "trasnochar"],
          example: {
            target: "Mañana toca madrugar.",
            translation: "Tomorrow we have to get up early."
          }
        },
        {
          term: "trasnochar",
          explanation:
            "To stay up very late, especially late enough that the next morning suffers.",
          literal: "to through-night",
          useWhen:
            "Use it for studying, partying, working, scrolling, or talking so late that sleep gets cut short.",
          avoidWhen:
            "Avoid it for going to bed only a little later than usual. Trasnochar is stronger than that.",
          register: "neutral",
          region: "Very common Colombian Spanish.",
          related: ["desvelarse", "acostarse tarde", "madrugar", "tener sueño"],
          example: {
            target: "No trasnocho hoy.",
            translation: "I won't stay up late tonight."
          }
        },
        {
          term: "el despertador",
          explanation:
            "The alarm: a phone alarm, alarm clock, or anything set to wake you up.",
          literal: "the waker",
          useWhen:
            "Use it for setting, hearing, missing, or blaming the alarm in the morning.",
          avoidWhen:
            "Avoid calling a person a despertador unless you are joking.",
          register: "neutral",
          region: "General Colombian.",
          related: ["poner el despertador", "alarma", "sonar", "apagar"],
          example: {
            target: "Poné el despertador a las cuatro y media.",
            translation: "Set the alarm for four-thirty."
          }
        },
        {
          term: "toca",
          explanation:
            "A very Colombian way to say something has to be done, whether anyone likes it or not.",
          literal: "it touches",
          useWhen:
            "Use it for obligations, chores, errands, early starts, or unavoidable plans.",
          avoidWhen:
            "Avoid it in formal written instructions, where hay que or se debe may fit better.",
          register: "friendly informal",
          region: "Extremely common in Colombia.",
          related: ["hay que", "me toca", "nos toca", "toca madrugar"],
          example: {
            target: "Mañana toca madrugar.",
            translation: "Tomorrow we have to get up early."
          }
        },
        {
          term: "por si acaso",
          explanation:
            "Just in case. A small phrase that explains why you are adding a margin of safety.",
          literal: "for if perhaps",
          useWhen:
            "Use it for setting an earlier alarm, carrying cash, leaving sooner, or making a backup plan.",
          avoidWhen:
            "Avoid it as the main reason. It is for extra caution, not the central cause.",
          register: "neutral",
          region: "General Colombian.",
          related: ["por si las moscas", "de pronto", "mejor", "con tiempo"],
          example: {
            target: "Poné el despertador por si acaso.",
            translation: "Set the alarm just in case."
          }
        }
      ],
      note:
        "Despertar teaches the mechanics, but madrugar teaches the Colombian morning. Use despertarse for waking yourself, despertar for waking someone else, and madrugar when the point is the early effort. Add trasnochar and you can explain most bad mornings honestly.",
      culture: [
        {
          label: "Madrugar is a whole mood",
          body:
            "Madrugar does not merely report a time. It carries duty, discipline, annoyance, pride, or resignation depending on the voice. “Toca madrugar” can explain a bus, a job, a farm day, a medical appointment, or life itself."
        },
        {
          label: "The alarm belongs to the house",
          body:
            "In a family apartment, one alarm can become everybody's alarm if walls are thin and people leave early. Asking whether the alarm will wake the house is not nervous; it is considerate."
        },
        {
          label: "Early travel is practical",
          body:
            "Leaving Bucaramanga early for a finca can mean cooler roads, more daylight, and more room for delays. Madrugar often comes attached to that practical Colombian planning."
        },
        {
          label: "Trasnochar explains tomorrow",
          body:
            "Trasnochar is useful because it explains the next day's face, mood, and lateness. If someone says they trasnocharon, they are not just reporting bedtime; they are warning you about the consequences."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “despierto a las cinco” when you mean you wake yourself up",
          whyItFails:
            "Without context, despertar can sound like you wake someone else. For your own morning, the reflexive form is safer.",
          sayInstead: "Me despierto a las cinco."
        },
        {
          mistake: "Translating madrugar as only “wake up”",
          whyItFails:
            "Madrugar includes the early, effortful part. Wake up loses the meaning of having to start the day painfully early.",
          sayInstead: "Mañana toca madrugar."
        },
        {
          mistake: "Calling the alarm “la alarma” in every sentence",
          whyItFails:
            "La alarma is understood, but el despertador is the everyday word for the thing you set to wake up.",
          sayInstead: "Poné el despertador."
        },
        {
          mistake: "Using trasnochar for any slightly late bedtime",
          whyItFails:
            "Trasnochar suggests staying up very late, often with consequences. If you only went to bed a little late, it exaggerates.",
          sayInstead: "Me acosté un poco tarde."
        }
      ],
      variations: [
        {
          form: "Mañana toca madrugar.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The classic line when tomorrow requires an early start."
        },
        {
          form: "¿A qué hora me tengo que despertar?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Asking what time you personally need to wake up."
        },
        {
          form: "El despertador despierta a todos.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "When the alarm wakes other people, not just you."
        },
        {
          form: "No trasnocho hoy.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Promising not to stay up late because tomorrow starts early."
        },
        {
          form: "Poné el despertador por si acaso.",
          register: "neutral",
          region: "Santander and other voseo areas",
          whenToUse: "Setting a backup alarm with vos in a friendly scene."
        }
      ],
      prompt: "Sam asks “¿A qué hora me tengo que despertar?” Why is despertar reflexive here?",
      choices: [
        "Because the alarm is waking every person in the house.",
        "Because Sam is talking about waking himself up in the morning.",
        "Because madrugar can never appear with early travel plans."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "What does “mañana toca madrugar” add beyond a plain time?",
          choices: [
            "It says everyone will stay up late the night before.",
            "It says the alarm clock belongs to another person.",
            "It says the early start is an unavoidable obligation."
          ],
          answer: 2,
          tests: "madrugar as effortful early obligation"
        },
        {
          prompt: "Which sentence means the alarm wakes other people?",
          choices: [
            "Me despierto a las cinco.",
            "El despertador despierta a todos.",
            "Mañana me levanto temprano."
          ],
          answer: 1,
          tests: "despertar without reflexive pronoun for waking others"
        },
        {
          prompt: "What is the opposite habit paired with madrugar in the dialogue?",
          choices: [
            "Almorzar, eating the main meal.",
            "Sofreír, cooking in a little oil.",
            "Trasnochar, staying up very late."
          ],
          answer: 2,
          tests: "trasnochar as the night-side pair to madrugar"
        },
        {
          prompt: "Which phrase names the alarm you set for morning?",
          choices: [
            "El despertador del teléfono.",
            "El sancocho de domingo.",
            "El guiso de cebolla."
          ],
          answer: 0,
          tests: "despertador as alarm, not a dish"
        }
      ]
    },
    en: {
      title: "Levantarse temprano para alcanzar el bus",
      situation:
        "Usted va a salir de Bucaramanga hacia una finca en Santander antes de que caliente el día. Se queda en casa de un amigo y tiene que hablar de wake up, get up early, stay up late y set the alarm sin perder el sentido de madrugar.",
      setting: {
        who: "Nicolás hospeda a Sam antes de un viaje temprano a la finca familiar. Sam teme perder el bus y despertar a toda la casa.",
        what: "Planear la mañana antes de salir de madrugada, con alarmas, café y movimientos silenciosos por el apartamento.",
        when: "Muy temprano un sábado, antes de que el sol caliente la carretera.",
        where: "Bucaramanga, en un apartamento cerca del terminal de buses, con una familia que igual planea con cuidado.",
        why: "Porque wake up traduce despertarse, pero madrugar necesita get up early or be up early, y trasnochar necesita stay up late."
      },
      address: {
        form: "mixed",
        who: "Nicolás y Sam se tratan como amigos; el inglés usa el mismo “you” aunque la confianza sea clara.",
        why: "La cercanía no está en el pronombre sino en la frase directa: “we have to get up early.” No hace falta inventar un equivalente de vos.",
        ifYouSwitch:
          "Usar fórmulas demasiado formales como “sir” dañaría la naturalidad entre amigos. Para marcar confianza, el inglés usa nombres, tono y contracciones."
      },
      dialogue: [
        {
          speaker: "Nicolás",
          target: "Sam, tomorrow we have to get up early; the bus leaves at five.",
          translation: "Sam, mañana toca madrugar; el bus sale a las cinco.",
          pronunciation: "sam, tu-MO-rou ui jav tu get op ER-li; de bos livz at faiv",
          literal: "Sam, mañana tenemos que levantarnos temprano; el bus sale a las cinco.",
          why: "Get up early es la forma más útil de traducir madrugar. Wake up early sólo habla de abrir los ojos."
        },
        {
          speaker: "Sam",
          target: "What time do I have to wake up?",
          translation: "¿A qué hora me tengo que despertar?",
          pronunciation: "uat taim du ai jav tu ueik op",
          literal: "¿Qué hora tengo que despertar arriba?",
          why: "Wake up es el verbo para despertarse. No use wake me up cuando usted mismo se despierta."
        },
        {
          speaker: "Nicolás",
          target: "Set the alarm for four-thirty, just in case.",
          translation: "Poné el despertador a las cuatro y media, por si acaso.",
          pronunciation: "set di a-LARM for for-ZER-di, yost in keis",
          literal: "Ponga la alarma para cuatro treinta, sólo en caso.",
          why: "El inglés dice set the alarm. Put the alarm puede sonar a colocar físicamente el aparato en algún lugar."
        },
        {
          speaker: "Sam",
          target: "And what if the alarm wakes everyone up?",
          translation: "¿Y si el despertador despierta a todos?",
          pronunciation: "and uat if di a-LARM ueiks EV-ri-uan op",
          literal: "¿Y qué si la alarma despierta a todos arriba?",
          why: "Wake someone up necesita objeto cuando otra cosa causa el despertar. The alarm wakes everyone up es claro."
        },
        {
          speaker: "Nicolás",
          target: "Don't worry, my dad gets up early too and my brother stays up late.",
          translation: "Tranquilo, mi papá también madruga y mi hermano trasnocha.",
          pronunciation: "dount UO-ri, mai dad gets op ER-li tu and mai BRO-der steiz op leit",
          literal: "No se preocupe, mi papá se levanta temprano también y mi hermano se queda arriba tarde.",
          why: "Gets up early traduce madruga; stays up late traduce trasnocha. El inglés necesita varias palabras donde el español tiene verbos compactos."
        },
        {
          speaker: "Sam",
          target: "Okay, I'll get up early with you and I won't stay up late tonight.",
          translation: "Listo, madrugo con ustedes y no trasnocho hoy.",
          pronunciation: "ou-KEI, ail get op ER-li uid yu and ai uount stei op leit tu-NAIT",
          literal: "Listo, me levantaré temprano con ustedes y no me quedaré arriba tarde esta noche.",
          why: "La frase evita traducir madrugar sólo como wake up. El compromiso real es levantarse temprano y no trasnochar."
        }
      ],
      vocabulary: [
        {
          term: "wake up",
          explanation:
            "Despertarse: pasar de dormir a estar despierto. Puede ser sólo abrir los ojos, no necesariamente levantarse de la cama.",
          literal: "despertarse",
          useWhen:
            "Úselo al preguntar a qué hora alguien se despierta o cuando una alarma despierta a una persona.",
          avoidWhen:
            "Evítelo para madrugar con esfuerzo y empezar el día temprano. Ahí suele servir mejor get up early.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["get up", "wake someone up", "oversleep", "alarm"],
          example: {
            target: "What time do I have to wake up?",
            translation: "¿A qué hora me tengo que despertar?"
          }
        },
        {
          term: "wake someone up",
          explanation:
            "Despertar a alguien. El objeto es obligatorio si otra persona o cosa causa el despertar.",
          literal: "despertar a alguien",
          useWhen:
            "Úselo cuando una alarma, un ruido, un niño o una persona despierta a otra.",
          avoidWhen:
            "Evítelo si usted habla de despertarse solo. Diga I wake up, no I wake me up.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["wake up", "alarm", "get up", "sleep through"],
          example: {
            target: "The alarm wakes everyone up.",
            translation: "El despertador despierta a todos."
          }
        },
        {
          term: "get up early",
          explanation:
            "La mejor traducción práctica de madrugar: levantarse temprano y empezar el día.",
          literal: "levantarse temprano",
          useWhen:
            "Úselo para trabajo, viajes, estudio, diligencias o cualquier plan que obliga a arrancar temprano.",
          avoidWhen:
            "Evítelo si sólo quiere decir que abrió los ojos temprano pero siguió en la cama. Eso es wake up early.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["be up early", "wake up early", "early start", "stay up late"],
          example: {
            target: "Tomorrow we have to get up early.",
            translation: "Mañana toca madrugar."
          }
        },
        {
          term: "stay up late",
          explanation:
            "Trasnochar: quedarse despierto hasta muy tarde, casi siempre con efecto al día siguiente.",
          literal: "quedarse arriba tarde",
          useWhen:
            "Úselo para trabajo, fiesta, estudio, celular o conversación que le roba sueño.",
          avoidWhen:
            "Evítelo para acostarse sólo un poco más tarde. Stay up late suele sonar intencional o notorio.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["pull an all-nighter", "go to bed late", "be tired", "get up early"],
          example: {
            target: "I won't stay up late tonight.",
            translation: "No trasnocho hoy."
          }
        },
        {
          term: "the alarm",
          explanation:
            "La alarma o el despertador del celular. En inglés alarm basta en la mayoría de escenas modernas.",
          literal: "la alarma / el despertador",
          useWhen:
            "Úselo para programarla, oírla, apagarla, ignorarla o culparla por levantarse tarde.",
          avoidWhen:
            "No diga the wake-up-er. Esa traducción literal de despertador no existe como palabra normal.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["set the alarm", "alarm clock", "phone alarm", "snooze"],
          example: {
            target: "Set the alarm for four-thirty.",
            translation: "Poné el despertador a las cuatro y media."
          }
        },
        {
          term: "have to",
          explanation:
            "La forma básica de obligación que aquí traduce toca: no es gusto, es necesidad.",
          literal: "tener que",
          useWhen:
            "Úselo para obligaciones diarias, planes inevitables, horarios y cosas que no dependen de las ganas.",
          avoidWhen:
            "Evítelo si quiere sonar muy formal; must puede aparecer, pero have to es más común en conversación.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["need to", "must", "got to", "be supposed to"],
          example: {
            target: "We have to get up early.",
            translation: "Toca madrugar."
          }
        },
        {
          term: "just in case",
          explanation:
            "Por si acaso. Explica una precaución adicional, como poner una alarma más temprano.",
          literal: "sólo en caso",
          useWhen:
            "Úselo al salir con tiempo, cargar efectivo, poner otra alarma o hacer un plan B.",
          avoidWhen:
            "Evítelo como razón principal. Just in case es margen de seguridad, no causa central.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["in case", "to be safe", "as a backup", "just to be sure"],
          example: {
            target: "Set the alarm just in case.",
            translation: "Poné el despertador por si acaso."
          }
        }
      ],
      note:
        "Wake up no basta para madrugar. Use wake up para despertarse, wake someone up para despertar a otra persona, get up early para madrugar, stay up late para trasnochar y set the alarm para poner el despertador. Así conserva diferencias que el español marca con verbos compactos.",
      culture: [
        {
          label: "Madrugar no cabe en una palabra",
          body:
            "Get up early traduce la acción, pero no siempre toda la resignación de “toca madrugar”. Si quiere ese matiz, añada have to, early start, o el tono de obligación."
        },
        {
          label: "La alarma puede despertar a todos",
          body:
            "En una casa o apartamento familiar, preocuparse por el volumen de la alarma es educación básica. En inglés, “will it wake everyone up?” suena considerado, no exagerado."
        },
        {
          label: "Viajar temprano es estrategia",
          body:
            "Salir temprano hacia una finca puede evitar calor, tráfico y retrasos. La frase inglesa early start comunica parte de esa planeación práctica."
        },
        {
          label: "Stay up late explica el cansancio",
          body:
            "Stay up late no es sólo una hora de acostarse; suele explicar por qué alguien está lento, tarde o de mal genio al día siguiente. Por eso se parece a trasnochar."
        }
      ],
      pitfalls: [
        {
          mistake: "“At what time do I have to wake me up?”",
          whyItFails:
            "Wake me up significa que otra persona lo despierta a usted. Para despertarse solo, el inglés no usa me.",
          sayInstead: "What time do I have to wake up?"
        },
        {
          mistake: "“Tomorrow we have to wake up early” para todo madrugar",
          whyItFails:
            "Puede ser correcto, pero a veces se queda corto. Madrugar normalmente implica levantarse y empezar el día.",
          sayInstead: "Tomorrow we have to get up early."
        },
        {
          mistake: "“Put the alarm at four-thirty.”",
          whyItFails:
            "Put suena a poner físicamente el aparato en un lugar. Para programar la hora, el verbo natural es set.",
          sayInstead: "Set the alarm for four-thirty."
        },
        {
          mistake: "“I won't trasnochar tonight.”",
          whyItFails:
            "Trasnochar no es una palabra inglesa corriente. Si habla en inglés, traduzca la idea completa con stay up late.",
          sayInstead: "I won't stay up late tonight."
        }
      ],
      variations: [
        {
          form: "Tomorrow we have to get up early.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "La traducción práctica de toca madrugar."
        },
        {
          form: "What time do I have to wake up?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Preguntar a qué hora usted se despierta."
        },
        {
          form: "The alarm wakes everyone up.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Cuando la alarma despierta a otras personas."
        },
        {
          form: "I won't stay up late tonight.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Prometer que no va a trasnochar antes de una salida temprana."
        },
        {
          form: "Set the alarm just in case.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Programar una alarma como margen de seguridad."
        }
      ],
      prompt: "Sam asks “What time do I have to wake up?” What does wake up mean here?",
      choices: [
        "It means Sam makes another person stop sleeping.",
        "It means Sam stays awake until very late tonight.",
        "It means Sam personally stops sleeping in the morning."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Por qué “get up early” suele ser mejor que sólo “wake up early” para madrugar?",
          choices: [
            "Because wake up only works when another person helps you.",
            "Because it includes leaving bed and starting the early day.",
            "Because get up early always means staying out all night."
          ],
          answer: 1,
          tests: "get up early as practical translation of madrugar"
        },
        {
          prompt: "¿Cuál frase significa que la alarma despierta a otras personas?",
          choices: [
            "I wake up at five.",
            "I stay up late tonight.",
            "The alarm wakes everyone up."
          ],
          answer: 2,
          tests: "wake someone up with an object"
        },
        {
          prompt: "¿Cuál frase traduce mejor trasnochar en esta escena?",
          choices: [
            "Stay up late tonight.",
            "Make lunch tomorrow.",
            "Drink coffee later."
          ],
          answer: 0,
          tests: "stay up late as translation of trasnochar"
        },
        {
          prompt: "Which phrase means poner el despertador?",
          choices: [
            "Cook the alarm early.",
            "Set the alarm early.",
            "Pour the alarm early."
          ],
          answer: 1,
          tests: "set the alarm as the natural English phrase"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/26-foundation-kitchen-and-morning.js");
