/*
 * Lesson block: foundation / daily life.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Every lesson spines on exactly one verb from data/curriculum.js, named in its
 * `verb` field so the coverage report can prove the curriculum is actually
 * taught rather than merely listed. This block takes the three verbs that run
 * through an ordinary Colombian day — tomar (to take, and to drink), sentir
 * (to feel) and vivir (to live) — and builds one situation around each: making
 * a plan to go out for a drink, telling a friend you feel unwell, and meeting a
 * neighbor and explaining where you live.
 *
 * The two directions are mirrors: same number of dialogue turns, same number of
 * vocabulary entries, same number of culture notes, pitfalls, variations and
 * practice questions, and the same optional slots filled on the same rows. That
 * is enforced by test/shape.test.js, not by good intentions.
 *
 * Which language each field is written in is the rule most easily got wrong.
 * The reader does not yet speak what is being taught, so explanation is always
 * in the language the reader already has: English in the `es` direction,
 * Spanish in the `en` direction. Only `title` and `situation` are Spanish in
 * both, because they name the lesson in the picker.
 */
lessons.push(
  {
    id: "making-a-plan-to-go-out-for-drinks",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "familiar",
    pathways: ["foundation"],
    verb: "tomar",
    review: "pending",
    es: {
      title: "Making a plan to go out for drinks",
      situation:
        "It is Friday afternoon, and Daniela, a bogotana friend, invites Alex to go out for a drink after work. In a few minutes they have to decide how to get there, whether they are drinking alcohol or not, and which way to take. The whole plan is built around the verb tomar, which in Colombia works for the taxi, the drink, the decisions, and even the avenue they take.",
      setting: {
        who: "Daniela is a bogotana friend from Alex's office, close enough to make weekend plans but not an old friend.",
        what: "A quick back-and-forth to agree on going out for a drink: how to get there, whether there will be alcohol, and which way to go.",
        when: "Friday evening, just as work wraps up and the after-work plan is taking shape.",
        where: "Bogotá, where nights out start with a taxi or an app and 'tomar' almost always implies alcohol.",
        why: "Because one verb, tomar, carries the whole plan. Alex has to hear when it means a drink, when it means transport, when it means a decision and when it means a road, and answer each one right without missing a beat."
      },
      address: {
        form: "tú",
        who: "Daniela and Alex use tú, as two younger colleagues who get along and are making a social plan.",
        why: "Among younger friends and colleagues in Bogotá, tú is a comfortable middle ground — warmer than the city's habitual usted, less regional than vos. It fits two peers arranging a night out.",
        ifYouSwitch:
          "Usted between these two would sound oddly stiff for a Friday-night plan, almost like Alex was keeping Daniela at a distance. Vos would ring paisa or caleño, out of place on two bogotanos."
      },
      dialogue: [
        {
          speaker: "Daniela",
          target: "Alex, ¿vamos a tomar algo esta noche? Yo invito.",
          translation: "Alex, shall we go out for a drink tonight? My treat.",
          pronunciation: "AH-leks, BA-mos a to-MAR AL-go ES-ta NO-che? yo een-BEE-to",
          literal: "Alex, we-go to to-drink something this night? I invite.",
          why: "“Tomar algo” means to go out for a drink, and on its own it usually implies alcohol, not water. “Yo invito” is “my treat” — the verb “invitar” here means to pay, not to send an invitation."
        },
        {
          speaker: "Alex",
          target: "¡De una! ¿Y cómo llegamos? ¿Tomamos un taxi o el bus?",
          translation: "Absolutely! And how do we get there? Shall we take a taxi or the bus?",
          pronunciation: "de OO-na! ee KO-mo ye-GA-mos? to-MA-mos oon TAK-see o el boos",
          literal: "Of one! And how we-arrive? We-take a taxi or the bus?",
          why: "Here tomar means to take transport, exactly like English “take a taxi / take the bus”. This is the one sense that maps cleanly onto English, which is why learners over-trust it elsewhere."
        },
        {
          speaker: "Daniela",
          target: "Tomemos un taxi, que es más seguro de noche. Yo pido la app.",
          translation: "Let's take a taxi, it's safer at night. I'll order it on the app.",
          pronunciation: "to-ME-mos oon TAK-see, ke es mas se-GOO-ro de NO-che. yo PEE-do la ap",
          literal: "Let-us-take a taxi, that is more safe of night. I ask the app.",
          why: "“Tomemos” is the let's-form (nosotros command) of tomar. Note “pido la app”, not “tomo la app”: for booking through an app Colombians say pedir, so tomar is not infinitely elastic."
        },
        {
          speaker: "Alex",
          target: "Bueno. Oye, ¿tú tomas trago o solo gaseosa?",
          translation: "Alright. Hey, do you drink alcohol, or just soda?",
          pronunciation: "BWEH-no. O-ye, too TO-mas TRA-go o SO-lo ga-se-O-sa",
          literal: "Good. Hey, you take liquor or only soda?",
          why: "“Tomar trago” is specifically to drink alcohol; “trago” is a drink or spirits. Asking “¿tú tomas?” with no object is understood as asking about alcohol, so add “gaseosa” to make the soft-drink option explicit."
        },
        {
          speaker: "Daniela",
          target: "Yo tomo poquito, una o dos y ya. Mañana tengo que tomar una decisión importante.",
          translation: "I drink a little, one or two and that's it. Tomorrow I have to make an important decision.",
          pronunciation: "yo TO-mo po-KEE-to, OO-na o dos ee ya. ma-NYA-na TEN-go ke to-MAR OO-na de-see-SYON",
          literal: "I take little, one or two and already. Tomorrow I-have that to-take a decision important.",
          why: "Two senses in one line: “tomo poquito” (I drink a little) and “tomar una decisión” (to make a decision). Spanish TAKES decisions where English MAKES them — never “hacer una decisión”."
        },
        {
          speaker: "Alex",
          target: "Bacano. Tomamos la Séptima derecho hasta el bar y ya, ¿te parece?",
          translation: "Cool. We'll take Seventh straight up to the bar and that's it, sound good?",
          pronunciation: "ba-KA-no. to-MA-mos la SEP-tee-ma de-RE-cho AS-ta el bar",
          literal: "Cool. We-take the Seventh straight until the bar and already, to-you it-seems?",
          why: "A fourth sense: “tomar” a street or route, like “take Seventh Avenue”. “La Séptima” is Bogotá's Carrera Séptima; naming a road by its number with the feminine article is completely standard."
        }
      ],
      vocabulary: [
        {
          term: "¿vamos a tomar?",
          explanation:
            "“Shall we go out for a drink?” On its own, tomar implies alcohol, so this is an invitation to drink, not to have water.",
          literal: "we-go to to-drink?",
          useWhen:
            "Proposing a night out or an after-work drink with friends or colleagues.",
          avoidWhen:
            "You literally mean water or coffee; then name it — “tomar agua”, “tomar un tinto” — or you will be handed a beer.",
          register: "friendly informal",
          region: "General Colombian; the alcohol reading of a bare “tomar” is strong nationwide.",
          related: ["tomar algo", "salir a tomar", "irse de rumba", "tomar unas frías"],
          example: {
            target: "¿Vamos a tomar algo el viernes?",
            translation: "Shall we go for a drink on Friday?"
          }
        },
        {
          term: "tomar trago",
          explanation:
            "To drink alcohol. “Trago” is a drink or spirits; “estar tomado” means to be drunk.",
          literal: "to-take liquor",
          useWhen:
            "Talking about whether and how much alcohol someone drinks.",
          avoidWhen:
            "Referring to a soft drink or juice; “trago” is alcoholic, so use “gaseosa” or “jugo” instead.",
          register: "friendly informal",
          region: "General Colombian; “trago” for a spirit or a night's drinking is universal.",
          related: ["estar tomado", "un guaro", "unas polas", "prender la rumba"],
          example: {
            target: "Yo casi no tomo trago entre semana.",
            translation: "I hardly drink during the week."
          }
        },
        {
          term: "tomar un taxi / el bus",
          explanation:
            "To take transport. This is the sense that lines up with English “take” one-to-one.",
          literal: "to-take a taxi / the bus",
          useWhen:
            "Saying how you will get somewhere by taxi, bus or the TransMilenio.",
          avoidWhen:
            "Booking through an app, where Colombians say “pedir un taxi”, not “tomar”.",
          register: "neutral",
          region: "General Colombian; in Bogotá “coger un taxi” is just as common and not rude.",
          related: ["coger un taxi", "pedir un taxi", "tomar el Transmi", "montarse en el bus"],
          example: {
            target: "Mejor tomamos un taxi, que llueve.",
            translation: "Let's take a taxi, it's raining."
          }
        },
        {
          term: "tomar una decisión",
          explanation:
            "To make a decision. Spanish “takes” decisions; the English calque with “hacer” is wrong.",
          literal: "to-take a decision",
          useWhen:
            "Talking about deciding something of weight — a job, a move, a plan.",
          avoidWhen:
            "Never with “hacer”; “hacer una decisión” is a classic English-speaker error.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["decidir", "tomar la decisión", "estar decidido", "pensarlo bien"],
          example: {
            target: "Tengo que tomar una decisión hoy.",
            translation: "I have to make a decision today."
          }
        },
        {
          term: "tomar la Séptima",
          explanation:
            "To take a street or route. “La Séptima” is Bogotá's Carrera Séptima; roads are named by number with the feminine article.",
          literal: "to-take the Seventh",
          useWhen:
            "Giving or agreeing on a route by naming the avenue to follow.",
          avoidWhen:
            "For a person — you don't “take” someone somewhere with tomar; that is “llevar”.",
          register: "neutral",
          region: "Bogotá especially, where major roads are “la Séptima”, “la Treinta”, “la Caracas”.",
          related: ["coger la Séptima", "seguir por la Caracas", "agarrar la autopista", "meterse por la Treinta"],
          example: {
            target: "Tome la Décima y luego la Séptima.",
            translation: "Take Tenth and then Seventh."
          }
        },
        {
          term: "yo invito",
          explanation:
            "“My treat / it's on me.” Here “invitar” means to pay for someone, not to send an invitation.",
          literal: "I invite",
          useWhen:
            "Offering to pay for a friend's drink, meal or coffee.",
          avoidWhen:
            "Meaning you will formally invite someone to an event; that context needs “invitar a” plus the event.",
          register: "friendly informal",
          region: "General Colombian and pan-Hispanic.",
          related: ["yo pago", "la mía", "le caigo con algo", "esta va por mi cuenta"],
          example: {
            target: "Guarda la plata, yo invito.",
            translation: "Put your money away, it's my treat."
          }
        },
        {
          term: "tómate un tinto",
          explanation:
            "The reflexive “tomarse” for having or finishing a drink; “un tinto” is a small black coffee, not wine.",
          literal: "take-yourself a black-coffee",
          useWhen:
            "Offering someone a coffee or urging them to have their drink.",
          avoidWhen:
            "Assuming “tinto” means red wine as it does in Spain; in Colombia it is black coffee.",
          register: "friendly informal",
          region: "Colombian; “tinto” for black coffee is a national trademark.",
          related: ["un tinto", "tomarse algo", "un perico", "una aromática"],
          example: {
            target: "Tómate un tintico antes de salir.",
            translation: "Have a little black coffee before you head out."
          }
        }
      ],
      note:
        "Tomar is a chameleon. The same verb takes a taxi, takes a drink (and, unmarked, an alcoholic one), takes a decision and takes a road. The trap is trusting the one clean overlap with English — “take a taxi” — and then stretching it: you do not tomar a person (that's llevar), you do not tomar an app (that's pedir), and you never “hacer” a decision. Listen for the object, and let it tell you which of tomar's four lives is in play.",
      culture: [
        {
          label: "A bare “tomar” means alcohol",
          body:
            "Ask a Colombian “¿tú tomas?” and you are asking about alcohol, not liquids in general. “Salir a tomar” is a night out with drinks, and “no tomo” usually means “I don't drink”. Water and coffee need to be named — “tomar agua”, “tomar tinto” — precisely because the unmarked verb has drifted to alcohol. Miss this and you may agree to a heavy night thinking you signed up for lemonade, or decline a coffee you actually wanted."
        },
        {
          label: "The rumba runs on trago",
          body:
            "Colombian nightlife, the rumba, is built around trago — aguardiente, rum and beer above all. “Guaro” is aguardiente, “una pola” or “una fría” is a beer, and a bottle is often shared at the table rather than bought by the glass. “Estar prendido” is pleasantly tipsy; “estar tomado” is drunk; the next day's “guayabo” is the hangover. Knowing these words is less about drinking more and more about following what everyone at the table is saying."
        },
        {
          label: "Taxis, apps and night safety",
          body:
            "In Bogotá you “tomas un taxi” or, increasingly, order one through an app, which many prefer at night because the driver and route are logged. Flagging a cab on the street after dark is done, but locals often steer newcomers toward an app instead. That safety instinct is why Daniela's plan defaults to a taxi rather than the bus once it is dark. It is practical advice folded into a casual line, and worth taking at face value."
        },
        {
          label: "Spanish takes decisions, English makes them",
          body:
            "“Tomar una decisión” is fixed: Spanish uses tomar, the verb of taking, where English reaches for “make”. The literal calque “hacer una decisión” is one of the most reliable tells of an English speaker translating in their head. The same logic runs through “tomar medidas” (to take measures) and “tomar en cuenta” (to take into account). Once you hear decisions as things you take, not make, a whole family of set phrases falls into place."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “hacer una decisión” for “to make a decision”",
          whyItFails:
            "It is a word-for-word calque of English “make a decision”. Spanish fixes this expression with tomar, so “hacer una decisión” instantly sounds translated, even though every word is understood.",
          sayInstead: "Tomar una decisión."
        },
        {
          mistake: "Using “tomar” to take a person somewhere",
          whyItFails:
            "“Te tomo a la casa” tries to use tomar for moving a person, but that job belongs to llevar. Tomar is for transport you board, drinks, decisions and roads — not for carrying someone somewhere.",
          sayInstead: "Yo te llevo a la casa."
        },
        {
          mistake: "Asking “¿este puesto está tomado?” for “is this seat taken?”",
          whyItFails:
            "“Tomado” means drunk, so asking if a seat “está tomado” is unintentionally funny. For an occupied seat Colombians say “ocupado”. The English “taken” does not map onto tomar here.",
          sayInstead: "¿Está ocupado este puesto?"
        },
        {
          mistake: "Saying “tomar un examen” for “to take an exam”",
          whyItFails:
            "In Colombia the student “presenta” an exam and the teacher “toma” or applies it, so “tomar un examen” from the student's side is off. English “take an exam” does not translate straight across.",
          sayInstead: "Presentar un examen."
        }
      ],
      variations: [
        {
          form: "¿Vamos a tomar algo?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The neutral, all-purpose invitation to go for a drink."
        },
        {
          form: "¿Nos echamos unas frías?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Casually proposing a few cold beers among friends."
        },
        {
          form: "¿Se provoca un traguito?",
          register: "neutral",
          region: "Colombian (“provocarse” = to feel like)",
          whenToUse: "A softer, coyer offer of a drink, very Colombian."
        },
        {
          form: "Tomémonos algo rápido y ya.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Suggesting a quick one before heading off."
        },
        {
          form: "¿Un tinto y hablamos?",
          register: "neutral",
          region: "Colombian",
          whenToUse: "Proposing a coffee, not alcohol — tomar in a work register."
        }
      ],
      prompt: "Daniela asks “¿vamos a tomar algo esta noche?” In Colombia, what is she most likely inviting Alex to do?",
      choices: [
        "Go out for drinks — a bare “tomar” in Colombia usually implies alcohol rather than water or coffee.",
        "Grab a quick bite to eat together nearby, since “tomar algo” most often refers to going for food.",
        "Take some form of public transport with her across the city to sort out an errand later tonight."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "How do you say “to make a decision” in Colombian Spanish?",
          choices: [
            "“Hacer una decisión”, using hacer exactly the way English pairs the verb “make” with decisions.",
            "“Tomar una decisión”, because Spanish takes a decision where English makes one — hacer is wrong here.",
            "“Poner una decisión”, treating the decision as something you set down on the table for everyone."
          ],
          answer: 1,
          tests: "tomar una decisión, not hacer"
        },
        {
          prompt: "Alex wants to say “I'll take you home.” Which is correct in Colombia?",
          choices: [
            "“Yo te tomo a la casa”, since tomar covers taking a taxi, so it should cover taking a person too.",
            "“Yo te cojo a la casa”, using coger as the all-purpose Colombian verb for taking things and people.",
            "“Yo te llevo a la casa”, because llevar is the verb for taking or carrying a person somewhere."
          ],
          answer: 2,
          tests: "llevar for people versus tomar"
        },
        {
          prompt: "A friend says “quedó bien tomado anoche.” What does “tomado” mean here?",
          choices: [
            "Drunk — since “tomar trago” is to drink alcohol, “tomado” describes someone who got drunk.",
            "Taken or reserved, the way a seat at the bar might already be spoken for by someone else.",
            "Busy or tied up, meaning he had far too much on his plate and never managed to come out."
          ],
          answer: 0,
          tests: "estar tomado = drunk"
        }
      ]
    },
    en: {
      title: "Hacer un plan para salir a tomar algo",
      situation:
        "Es viernes por la tarde y Megan, una amiga estadounidense, invita a Alejandra a salir a tomar algo después del trabajo. En pocos minutos tienen que decidir cómo llegar, si van a tomar trago o no, y por dónde coger. En inglés, ese único verbo “tomar” se reparte entre varios: take para el taxi y la avenida, have o grab para el trago, y make para las decisiones.",
      setting: {
        who: "Megan es una amiga estadounidense de la oficina de Alejandra, con la confianza suficiente para hacer planes de fin de semana, pero no una amiga de toda la vida.",
        what: "Un intercambio rápido para ponerse de acuerdo en salir a tomar algo: cómo llegar, si habrá alcohol y por dónde irse.",
        when: "Un viernes por la tarde, justo cuando termina la jornada y el plan después del trabajo empieza a tomar forma.",
        where: "Houston, donde una salida arranca con un taxi o una app y el inglés reparte el verbo “tomar” en varios distintos.",
        why: "Porque donde el español usa un solo verbo, el inglés usa cuatro. Alejandra tiene que oír cuándo es take, cuándo have o grab, y cuándo make, y responder cada uno bien sin trabarse."
      },
      address: {
        form: "mixed",
        who: "Megan y Alejandra se tratan con el mismo “you” y el nombre de pila, como dos colegas jóvenes que se llevan bien.",
        why: "El inglés no distingue tú de usted; la cercanía la marcan el nombre de pila, el tono relajado y frases como “my treat”. Ese matiz del tú entre colegas se traslada al inglés por el trato, no por el pronombre, que es uno solo.",
        ifYouSwitch:
          "Ponerse muy formal con Megan — “would you care to join me” — sonaría irónico para un plan de viernes. El inglés baja el registro con el léxico, no cambiando de pronombre, porque solo hay uno."
      },
      dialogue: [
        {
          speaker: "Megan",
          target: "Alejandra, want to go out for a drink tonight? My treat.",
          translation: "Alejandra, ¿vamos a tomar algo esta noche? Yo invito.",
          pronunciation: "a-le-JAN-dra, uont tu gou aut for a drink tu-NAIT? mai trit",
          literal: "Alejandra, ¿quieres salir por una bebida esta noche? Mi invitación.",
          why: "“Go out for a drink” es el equivalente de “salir a tomar algo”, y también sobreentiende alcohol. “My treat” es “yo invito”; ojo, no se dice “I invite you” para pagar — eso significaría mandar una invitación."
        },
        {
          speaker: "Alejandra",
          target: "Definitely! How do we get there? Should we take a cab or the bus?",
          translation: "¡De una! ¿Y cómo llegamos? ¿Tomamos un taxi o el bus?",
          pronunciation: "DE-fi-nit-li! jau du ui get der? shud ui teik a kab or da bas",
          literal: "¡Definitivamente! ¿Cómo llegamos allá? ¿Deberíamos tomar un taxi o el bus?",
          why: "Aquí “take a cab / the bus” calca perfecto el “tomar un taxi / el bus”: es el único sentido de tomar que pasa idéntico al inglés. Por eso da falsa confianza en los demás sentidos."
        },
        {
          speaker: "Megan",
          target: "Let's take a cab, it's safer at night. I'll grab it on the app.",
          translation: "Tomemos un taxi, que es más seguro de noche. Yo lo pido en la app.",
          pronunciation: "lets teik a kab, its SEIF-er at nait. ail grab it on di ap",
          literal: "Tomemos un taxi, es más seguro de noche. Yo lo agarro en la app.",
          why: "“Let's take” es el “tomemos”. Para la app el inglés usa “grab” o “book”, no “take the app”; igual que el español dice “pedir la app”, no “tomar la app”. Cada idioma limita su verbo de otra forma."
        },
        {
          speaker: "Alejandra",
          target: "Alright. Hey, do you drink, or just have a soda?",
          translation: "Bueno. Oye, ¿tú tomas trago o solo gaseosa?",
          pronunciation: "ol-RAIT. jei, du yu drink, or yast jav a SOU-da",
          literal: "Bien. Oye, ¿tú bebes, o solo tomas una gaseosa?",
          why: "“Do you drink?” sin objeto se entiende como preguntar por el alcohol, igual que “¿tú tomas?”. Y ojo: para la gaseosa el inglés dice “have a soda”, no “take a soda”; “tomar” con bebidas es have o grab, no take."
        },
        {
          speaker: "Megan",
          target: "I have one or two and that's it. Tomorrow I need to make an important decision.",
          translation: "Yo tomo poquito, una o dos y ya. Mañana tengo que tomar una decisión importante.",
          pronunciation: "ai jav uan or tu and dats it. tu-MO-rou ai nid tu meik an im-POR-tant de-SI-shen",
          literal: "Yo tomo una o dos y eso es todo. Mañana necesito hacer una decisión importante.",
          why: "Dos sentidos: “have one or two” para el trago, y “make a decision” para la decisión. Aquí se invierte el calco: el inglés MAKES una decisión donde el español la TOMA. Decir “take a decision” suena a español traducido."
        },
        {
          speaker: "Alejandra",
          target: "Cool. We take 7th straight up to the bar and that's it, sound good?",
          translation: "Bacano. Tomamos la Séptima derecho hasta el bar y ya, ¿te parece?",
          pronunciation: "kul. ui teik sev-enz streit ap tu da bar and dats it, saund gud",
          literal: "Bien. Tomamos la 7.ª derecho hasta el bar y ya, ¿suena bien?",
          why: "El inglés también “takes” una vía: “take 7th”, “take the highway”. Este sentido sí coincide con el “tomar la Séptima” del español. “Sound good?” es un “¿te parece?” para cerrar el plan."
        }
      ],
      vocabulary: [
        {
          term: "go out for a drink",
          explanation:
            "“Salir a tomar algo.” Igual que en español, sobreentiende alcohol; para agua o café hay que nombrarlos.",
          literal: "salir por una bebida",
          useWhen:
            "Al proponer una salida nocturna o un trago después del trabajo.",
          avoidWhen:
            "Si de verdad quiere decir agua o café; entonces dígalo: “grab a coffee”, “get some water”.",
          register: "amistoso informal",
          region: "Inglés universal; “go for a drink” y “grab a drink” son variantes.",
          related: ["grab a drink", "go for a pint", "get a round in", "go out drinking"],
          example: {
            target: "Want to go out for a drink on Friday?",
            translation: "¿Vamos a tomar algo el viernes?"
          }
        },
        {
          term: "do you drink?",
          explanation:
            "“¿Tomas trago?” Sin objeto, la pregunta se refiere al alcohol, no a los líquidos en general.",
          literal: "¿bebes?",
          useWhen:
            "Al preguntar si alguien consume alcohol y cuánto.",
          avoidWhen:
            "Para una gaseosa o un jugo; ahí se dice “have a soda”, no “drink”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["do you drink alcohol?", "are you a big drinker?", "I don't drink", "I'm the designated driver"],
          example: {
            target: "Do you drink, or should I get you a soda?",
            translation: "¿Tomas trago, o te pido una gaseosa?"
          }
        },
        {
          term: "take a cab / the bus",
          explanation:
            "“Tomar un taxi / el bus.” El único sentido de tomar que pasa idéntico al inglés con “take”.",
          literal: "tomar un taxi / el bus",
          useWhen:
            "Al decir cómo va a llegar a algún lado en taxi o bus.",
          avoidWhen:
            "Para reservar por app; ahí el inglés dice “grab” o “book”, no “take the app”.",
          register: "neutro",
          region: "Inglés universal; “cab” y “taxi” son intercambiables.",
          related: ["grab a cab", "catch the bus", "hop on the bus", "book a ride"],
          example: {
            target: "Let's take a cab, it's raining.",
            translation: "Tomemos un taxi, que llueve."
          }
        },
        {
          term: "make a decision",
          explanation:
            "“Tomar una decisión.” El inglés usa make donde el español usa tomar; “take a decision” suena a calco.",
          literal: "hacer una decisión",
          useWhen:
            "Al hablar de decidir algo de peso — un trabajo, una mudanza, un plan.",
          avoidWhen:
            "Con “take” en inglés norteamericano, donde “make a decision” es lo natural.",
          register: "neutro",
          region: "Inglés universal; “take a decision” existe en el británico formal, pero “make” es lo seguro.",
          related: ["decide", "reach a decision", "make up your mind", "come to a decision"],
          example: {
            target: "I have to make a decision today.",
            translation: "Tengo que tomar una decisión hoy."
          }
        },
        {
          term: "take 7th / take the highway",
          explanation:
            "“Tomar la Séptima.” El inglés sí “takes” una vía, así que este sentido coincide con el español.",
          literal: "tomar la 7.ª / la autopista",
          useWhen:
            "Al dar o acordar una ruta nombrando la calle o avenida que hay que seguir.",
          avoidWhen:
            "Para una persona; a alguien se le “takes home”, pero una vía se “takes” en el sentido de recorrer.",
          register: "neutro",
          region: "Inglés universal; en Norteamérica las vías se nombran así: “take the 401”.",
          related: ["take Main Street", "get on the highway", "head down 7th", "take a left on 7th"],
          example: {
            target: "Take 10th and then 7th.",
            translation: "Tome la Décima y luego la Séptima."
          }
        },
        {
          term: "my treat / it's on me",
          explanation:
            "“Yo invito.” Ofrecer pagar. Ojo: “I'll invite you” significa mandar una invitación, no pagar.",
          literal: "mi invitación / va por mí",
          useWhen:
            "Al ofrecerse a pagar el trago, la comida o el café de alguien.",
          avoidWhen:
            "Cuando de verdad va a invitar a alguien a un evento; ahí sí es “invite you to”.",
          register: "amistoso informal",
          region: "Inglés universal; “it's on me” y “my treat” son intercambiables.",
          related: ["it's on me", "I've got this", "this one's on me", "let me get this"],
          example: {
            target: "Put your wallet away, it's my treat.",
            translation: "Guarda la billetera, yo invito."
          }
        },
        {
          term: "grab a coffee",
          explanation:
            "“Tomarse un café.” Con bebidas, el inglés usa “have” o “grab”, no “take”; “take a coffee” es un calco.",
          literal: "agarrar un café",
          useWhen:
            "Al proponer o tomarse un café, con o sin trabajo de por medio.",
          avoidWhen:
            "Con “take a coffee”, que suena a español traducido; se dice “have” o “grab”.",
          register: "amistoso informal",
          region: "Inglés universal; “grab” resalta lo rápido e informal.",
          related: ["have a coffee", "get a coffee", "go for a coffee", "grab a bite"],
          example: {
            target: "Let's grab a coffee before we head out.",
            translation: "Tomémonos un café antes de salir."
          }
        }
      ],
      note:
        "Donde el español estira un solo verbo, tomar, el inglés reparte el trabajo en cuatro. “Take” sirve para el taxi y la avenida (take a cab, take 7th), pero el trago es “have” o “grab” (have a beer, grab a coffee), y una decisión se “makes”, no se “takes”. El calco más delator es “take a decision”; el segundo, “take a coffee”. Oiga el objeto y deje que él elija el verbo inglés correcto.",
      culture: [
        {
          label: "“Take” no sirve para las bebidas",
          body:
            "El hispanohablante calca “tomar un café” como “take a coffee”, pero en inglés las bebidas se “have” o se “grab”: “have a beer”, “grab a coffee”, “get a water”. “Take” con una bebida solo funciona en sentidos raros, como tomar una medicina (“take a pill”). Es un desliz pequeño y constante que delata al que traduce en la cabeza. Reservar “take” para el transporte y las vías, y usar “have/grab” para lo que se bebe, corrige casi todos los casos."
        },
        {
          label: "El inglés MAKES las decisiones",
          body:
            "“Tomar una decisión” se vuelve “make a decision” en inglés: el verbo cambia de tomar a make. El calco “take a decision” existe en el inglés británico más formal, pero en Norteamérica suena raro, y para un hispanohablante es un tell clarísimo de traducción. La misma lógica aplica a “make a choice” y “make plans”. Pensar las decisiones como algo que uno “makes”, no que “takes”, ordena toda una familia de expresiones fijas."
        },
        {
          label: "Beber, con o sin artículo",
          body:
            "“Do you drink?” sin objeto pregunta por el alcohol, igual que en español. Pero el inglés es estricto con el artículo: se dice “go for a drink” y “have a beer”, con “a”, donde el hispanohablante tiende a comérselo (“go for drink”, “have beer”). Ese artículo pequeño es de lo que más se olvida y de lo que más se nota. Beber en general va sin artículo (“I don't drink”), pero un trago concreto siempre lo lleva."
        },
        {
          label: "Taxis, apps y seguridad de noche",
          body:
            "En Houston uno “takes a cab” o, cada vez más, pide un carro por app, que muchos prefieren de noche porque quedan registrados el conductor y la ruta. Parar un taxi en la calle de madrugada se hace, pero es común que a los recién llegados se les recomiende la app. Por eso el plan de Megan se va por el taxi apenas oscurece, en vez del bus. Es un consejo práctico metido en una frase casual, y conviene tomarlo tal cual."
        }
      ],
      pitfalls: [
        {
          mistake: "“I have to take a decision.”",
          whyItFails:
            "Es el calco de “tomar una decisión”. En inglés norteamericano las decisiones se “make”, no se “take”; el calco delata de inmediato al hispanohablante, aunque se entienda.",
          sayInstead: "I have to make a decision."
        },
        {
          mistake: "“Let's take a coffee.”",
          whyItFails:
            "Traduce “tomar un café” con “take”, pero en inglés las bebidas se “have” o se “grab”. “Take a coffee” suena raro; “take” con bebidas casi solo sirve para medicinas.",
          sayInstead: "Let's grab a coffee. / Let's have a coffee."
        },
        {
          mistake: "“We go for drink tonight.”",
          whyItFails:
            "Al español le sobra el artículo, así que el hispanohablante se come el “a”. El inglés exige “a drink”: “go for a drink”. Sin el artículo, la frase suena incompleta.",
          sayInstead: "We're going for a drink tonight."
        },
        {
          mistake: "“I'll invite you.” para decir que uno paga",
          whyItFails:
            "“Yo invito” significa pagar, pero “I'll invite you” en inglés es mandar una invitación a un evento, no pagar la cuenta. El falso amigo cambia por completo el sentido.",
          sayInstead: "It's on me. / My treat."
        }
      ],
      variations: [
        {
          form: "Want to go out for a drink?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "La invitación neutra y de siempre para ir a tomar algo."
        },
        {
          form: "Fancy grabbing a few beers?",
          register: "amistoso informal",
          region: "Británico / general",
          whenToUse: "Al proponer casualmente unas cervezas entre amigos."
        },
        {
          form: "Could I tempt you with a drink?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una oferta más coqueta y suave de un trago."
        },
        {
          form: "Let's grab a quick one and head off.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al sugerir un trago rápido antes de irse."
        },
        {
          form: "Coffee and a catch-up?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al proponer un café, no alcohol — tomar en registro de trabajo."
        }
      ],
      prompt: "Megan pregunta “want to go out for a drink tonight?” ¿A qué está invitando a Alejandra, muy probablemente?",
      choices: [
        "A salir a tomar algo — en inglés, un “drink” a secas suele sobreentender alcohol, no agua ni café.",
        "A comer algo rápido juntas cerca de la oficina, porque “drink” a menudo se refiere a acompañar la comida.",
        "A tomar juntas algún transporte público para cruzar la ciudad y resolver una diligencia esa misma noche."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cómo se dice “tomar una decisión” en inglés norteamericano?",
          choices: [
            "“Take a decision”, usando take igual que el español usa tomar, porque los verbos se calcan uno a uno.",
            "“Make a decision”, porque el inglés hace (make) una decisión donde el español la toma; take suena a calco.",
            "“Do a decision”, tratando la decisión como una tarea cualquiera que uno simplemente lleva a cabo y ya."
          ],
          answer: 1,
          tests: "make a decision, no take"
        },
        {
          prompt: "Alejandra quiere ofrecer “tomar un café”. ¿Cuál sería lo natural en inglés?",
          choices: [
            "“Let's take a coffee”, calcando el “tomar” del español con take, que es el verbo de las bebidas.",
            "“Let's drink a coffee”, porque para cualquier bebida el inglés siempre prefiere el verbo drink.",
            "“Let's grab a coffee”, porque con bebidas el inglés usa have o grab, no take, para lo que se toma."
          ],
          answer: 2,
          tests: "have/grab para bebidas, no take"
        },
        {
          prompt: "Un amigo dice “he got wasted last night.” ¿Qué quiere decir “wasted”?",
          choices: [
            "Borracho — “to drink” es tomar trago, y “wasted” describe a alguien que quedó muy tomado.",
            "Ocupado o reservado, como cuando un puesto en la barra ya está apartado para otra persona.",
            "Agotado por el trabajo, en el sentido de que tenía tanto encima que no pudo salir para nada."
          ],
          answer: 0,
          tests: "vocabulario de estar borracho"
        }
      ]
    }
  },
  {
    id: "telling-a-paisa-friend-you-feel-unwell",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "health-and-body",
    register: "familiar",
    pathways: ["foundation"],
    verb: "sentir",
    review: "pending",
    es: {
      title: "Telling a paisa friend you feel off",
      situation:
        "Alex wakes up feeling maluco in Medellín, and his paisa friend Sebastián notices and asks how he is. Alex has to explain what he feels, since when, and how bad it is, while Sebastián offers help. The whole conversation turns around sentir: sentirse mal, sentir un dolor, sentir que something is going to happen, and the “lo siento” that does not mean what an English speaker thinks.",
      setting: {
        who: "Sebastián is a paisa friend from Alex's building, the kind who checks on you and switches into caretaker mode fast.",
        what: "A short, worried exchange about Alex feeling ill: what hurts, since when, and whether to go to the pharmacy.",
        when: "A weekday morning, when Alex clearly looks off and Sebastián notices right away.",
        where: "Medellín, where the local vos and warm diminutives color every caring question.",
        why: "Because feeling states are where sentir splits three ways — sentirse for how you are, sentir for a sensation, and lo siento for regret. Alex has to keep them apart while also not confusing sentir with sentar, which share the form 'me siento'."
      },
      address: {
        form: "vos",
        who: "Sebastián uses vos with Alex, as paisas do among friends, softened by “parce” and diminutives.",
        why: "In Medellín and Antioquia, vos is the everyday informal form: “¿cómo te sentís?”, “sentate”, “¿querés?”. It is warm and close, the natural register between two friends, and it carries the region's caretaking tone.",
        ifYouSwitch:
          "Answering Sebastián with a careful usted would put distance into a moment that calls for closeness. Tú would not offend, but it would mark Alex as from Bogotá or the coast rather than settled into paisa speech."
      },
      dialogue: [
        {
          speaker: "Sebastián",
          target: "¿Quihubo, parce? Te veo maluco. ¿Cómo te sentís?",
          translation: "Hey, man. You look off. How are you feeling?",
          pronunciation: "kyoo-BO, PAR-se? te BE-o ma-LOO-ko. KO-mo te sen-TEES",
          literal: "What-there, buddy? You I-see unwell. How you feel?",
          why: "“¿Cómo te sentís?” is the vos form of “¿cómo te sientes?”, with the stress on the last syllable. “Maluco” is Colombian for unwell or off, used for both people and things that feel bad."
        },
        {
          speaker: "Alex",
          target: "No me siento nada bien. Siento un dolor de cabeza horrible.",
          translation: "I don't feel well at all. I've got a horrible headache.",
          pronunciation: "no me SYEN-to NA-da byen. SYEN-to oon do-LOR de ka-BE-sa o-RREE-ble",
          literal: "Not myself I-feel nothing well. I-feel a pain of head horrible.",
          why: "Two forms of the verb: reflexive “me siento” (how I am) and plain “siento un dolor” (I feel a sensation). Sentirse describes your overall state; sentir takes a direct object like a pain."
        },
        {
          speaker: "Sebastián",
          target: "Uy, lo siento, parce. ¿Desde cuándo te sentís así?",
          translation: "Oh, I'm sorry, man. How long have you felt like this?",
          pronunciation: "ooy, lo SYEN-to, PAR-se. DES-de KWAN-do te sen-TEES a-SEE",
          literal: "Oh, it I-feel, buddy. Since when you feel so?",
          why: "“Lo siento” is “I'm sorry” — sympathy here, not a literal feeling. It shares the verb sentir but works as a fixed apology. Note it is short and sincere, not the heavy phrase English learners often imagine."
        },
        {
          speaker: "Alex",
          target: "Desde anoche. Y siento que me va a dar gripa.",
          translation: "Since last night. And I feel like I'm coming down with a cold.",
          pronunciation: "DES-de a-NO-che. ee SYEN-to ke me ba a dar GREE-pa",
          literal: "Since last-night. And I-feel that to-me goes to give flu.",
          why: "“Sentir que” expresses a hunch or sensation that something is happening — “I feel that / I have a feeling”. “Dar gripa” is the Colombian way to say catching a cold; “gripa”, not “gripe”, is the local word."
        },
        {
          speaker: "Sebastián",
          target: "Sentate un momento, ¿querés? Si te sentís peor, vamos a la droguería.",
          translation: "Sit down a moment, would you? If you feel worse, we'll go to the pharmacy.",
          pronunciation: "sen-TA-te oon mo-MEN-to, ke-RES? see te sen-TEES peor, BA-mos a la dro-ge-REE-a",
          literal: "Sit-yourself a moment, you-want? If yourself you-feel worse, we-go to the pharmacy.",
          why: "Careful: “sentate” is “sit down” (from sentarse), not from sentir, even though “me siento” can mean both “I feel” and “I sit”. “Querés” and “sentate” are vos forms; “droguería” is the Colombian word for pharmacy."
        },
        {
          speaker: "Alex",
          target: "Bueno. Y perdoná, siento darte tanta lidia.",
          translation: "Alright. And sorry, I feel bad giving you so much trouble.",
          pronunciation: "BWE-no. ee per-do-NA, SYEN-to DAR-te TAN-ta LEE-da",
          literal: "Good. And forgive, I-feel to-give-you so-much bother.",
          why: "“Siento + infinitive” means “I'm sorry to / I feel bad about” doing something. “Dar lidia” is Colombian for being a bother; “perdoná” is the vos command, the affectionate paisa way to say sorry."
        }
      ],
      vocabulary: [
        {
          term: "sentirse (bien / mal)",
          explanation:
            "The reflexive verb for your overall state — health or mood. It needs the pronoun: “me siento”, not “siento”.",
          literal: "to-feel-oneself (well / badly)",
          useWhen:
            "Saying how you are in general: “me siento mejor”, “¿cómo te sentís?”",
          avoidWhen:
            "For a specific sensation with an object; there you drop the pronoun and use plain sentir.",
          register: "neutral",
          region: "General Colombian; the vos form “te sentís” is standard in Antioquia.",
          related: ["¿cómo te sentís?", "sentirse mejor", "sentirse maluco", "sentirse en las nubes"],
          example: {
            target: "Hoy me siento mucho mejor.",
            translation: "Today I feel much better."
          }
        },
        {
          term: "sentir un dolor",
          explanation:
            "Plain sentir plus a direct object: to feel a sensation such as pain, cold or fear.",
          literal: "to-feel a pain",
          useWhen:
            "Naming a specific physical sensation you feel — a pain, a chill, a pang.",
          avoidWhen:
            "For your general condition; that needs the reflexive “sentirse”.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["sentir frío", "sentir miedo", "sentir un pinchazo", "sentir mariposas"],
          example: {
            target: "Siento un dolor aquí en el pecho.",
            translation: "I feel a pain here in my chest."
          }
        },
        {
          term: "sentir que",
          explanation:
            "“To have a feeling / sense that” something is the case or about to happen.",
          literal: "to-feel that",
          useWhen:
            "Voicing a hunch or intuition: “siento que va a llover”.",
          avoidWhen:
            "As an apology; “sentir que” is a sensation, while “sentir” alone plus a noun is regret.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["tengo la sensación de que", "me da que", "presiento que", "me late que"],
          example: {
            target: "Siento que algo no está bien.",
            translation: "I feel that something is off."
          }
        },
        {
          term: "lo siento",
          explanation:
            "“I'm sorry” — an apology or condolence, not a literal statement about feeling something.",
          literal: "it I-feel",
          useWhen:
            "Offering sympathy or apologizing for something that genuinely matters.",
          avoidWhen:
            "Small bumps and interruptions, where Colombians say “perdón” or “qué pena”, not the weightier “lo siento”.",
          register: "neutral",
          region: "General Colombian; for minor slips “qué pena” is the local reflex.",
          related: ["qué pena", "perdón", "mis condolencias", "cuánto lo siento"],
          example: {
            target: "Lo siento mucho, de verdad.",
            translation: "I'm really sorry, truly."
          }
        },
        {
          term: "siento + infinitivo",
          explanation:
            "“I'm sorry to / I feel bad about” doing something — regret attached to an action.",
          literal: "I-feel + to-do",
          useWhen:
            "Apologizing for the thing you are doing: “siento molestarte”, “siento llegar tarde”.",
          avoidWhen:
            "For a physical feeling; this pattern is regret, not sensation.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["siento molestarte", "siento interrumpir", "perdona que", "disculpa por"],
          example: {
            target: "Siento molestarte a esta hora.",
            translation: "I'm sorry to bother you at this hour."
          }
        },
        {
          term: "maluco / maluca",
          explanation:
            "Colombian for feeling unwell or off; it also describes something unpleasant, like a bad taste.",
          literal: "unwell / off",
          useWhen:
            "Describing a vague sense of being ill, or something that feels or tastes bad.",
          avoidWhen:
            "Formal medical settings, where “indispuesto” or naming the symptom is clearer.",
          register: "friendly informal",
          region: "Very Colombian; heard constantly, strongly paisa and Caribbean.",
          related: ["maluquera", "estar indispuesto", "guayabo", "sentirse mal"],
          example: {
            target: "Amanecí todo maluco.",
            translation: "I woke up feeling really off."
          }
        },
        {
          term: "sentate / sentarse",
          explanation:
            "“Sit down” — from sentarse, not sentir, though both share the form “me siento” in the present.",
          literal: "sit-yourself / to-sit-oneself",
          useWhen:
            "Telling someone to take a seat: “sentate”, “siéntese”, “siéntate”.",
          avoidWhen:
            "Confusing it with sentir; “me siento aquí” can mean “I sit here”, not “I feel here”.",
          register: "friendly informal",
          region: "The vos command “sentate” is paisa and general in vos regions.",
          related: ["siéntese", "siéntate", "tome asiento", "acomódese"],
          example: {
            target: "Sentate, que te ves cansado.",
            translation: "Sit down, you look tired."
          }
        }
      ],
      note:
        "Sentir splits three ways. Reflexive sentirse is your overall state (“me siento mal”); plain sentir plus an object is a specific sensation (“siento un dolor”); and “lo siento” is an apology, not a feeling at all. Keep them apart, save “lo siento” for things that genuinely matter, and reach for “perdón” or “qué pena” for small slips. And remember the trap: “me siento” belongs to two verbs — feel and sit — so let the rest of the sentence tell you which.",
      culture: [
        {
          label: "Sentirse for you, sentir for the sensation",
          body:
            "Spanish draws a line English blurs. “Me siento mal” is about your whole condition — sick, sad, off. “Siento un dolor” is one specific sensation you can point to. The reflexive turns the feeling inward onto yourself; dropping it aims the verb at an object. English uses “feel” for both, so learners forget the pronoun and say “siento bien”, which lands wrong. Hearing whether a Colombian means their state or a sensation is most of using sentir well."
        },
        {
          label: "“Lo siento” is heavier than “sorry”",
          body:
            "English “sorry” does everything, from bumping a stranger to grief. Spanish splits the load: “lo siento” carries real regret or condolence, while a small collision gets “¡uy, perdón!” or the very Colombian “qué pena”. Say “lo siento” when someone steps on your foot and it sounds oddly dramatic; say it at a funeral and it is exactly right. Matching the weight of the apology to the moment is a subtlety that makes your Spanish sound calibrated rather than translated."
        },
        {
          label: "Colombian words for feeling ill",
          body:
            "Colombia has its own health vocabulary. “Maluco” is that vague unwell feeling; “maluquera” is the noun for it. A cold is “gripa”, not the Spain-standard “gripe”. A hangover is a “guayabo”, and “estoy enguayabado” means hungover. Diminutives soften the whole register — “un dolorcito”, “una fiebrecita” — making complaints sound less alarming and more sympathetic. Guidebooks rarely teach these, yet they are the words a friend actually uses when they ask how you slept."
        },
        {
          label: "One form, two verbs: feel and sit",
          body:
            "“Me siento” is a genuine crossroads: it is the yo form of both sentirse (to feel) and sentarse (to sit down). “Me siento mal” is “I feel bad”; “me siento aquí” is “I sit here”. Context always resolves it, and no Colombian is confused, but learners hearing “sentate” for the first time often assume it is a form of sentir. It is not — it is sit down. The two verbs simply overlap in the present, a small coincidence worth filing away."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “siento bien” for “I feel well”",
          whyItFails:
            "It drops the reflexive pronoun that sentirse needs. “Siento bien” sounds like an unfinished “I feel [something] well”; your overall state requires “me siento”.",
          sayInstead: "Me siento bien."
        },
        {
          mistake: "Saying “me siento caliente” for “I feel hot”",
          whyItFails:
            "“Caliente” for a person usually means aroused, not warm, so this line is unintentionally suggestive. Temperature of the body uses tener: “tengo calor”, not a form of sentir.",
          sayInstead: "Tengo calor."
        },
        {
          mistake: "Using “lo siento” for every small apology",
          whyItFails:
            "For a tiny bump or interruption, “lo siento” is too heavy and sounds dramatic. Colombians reach for “perdón” or “qué pena” in those moments and save “lo siento” for real regret.",
          sayInstead: "¡Uy, perdón! / Qué pena."
        },
        {
          mistake: "Assuming “me siento” always means “I feel”",
          whyItFails:
            "“Me siento” is also the present of sentarse, to sit. So “me siento aquí” can mean “I sit here”, not “I feel here”. Reading it only as sentir leads you to misunderstand invitations to sit.",
          sayInstead: "Let context decide: “me siento mal” = I feel bad; “me siento aquí” = I sit here."
        }
      ],
      variations: [
        {
          form: "¿Cómo te sentís?",
          register: "friendly informal",
          region: "Antioquia / vos regions",
          whenToUse: "Asking a friend how they feel, in vos."
        },
        {
          form: "¿Cómo se siente?",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "Asking with usted — a stranger, an elder, a patient."
        },
        {
          form: "Me siento maluco.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Reporting a vague, off feeling."
        },
        {
          form: "No me siento nada bien.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Stating plainly that you feel quite unwell."
        },
        {
          form: "Ya me siento mucho mejor.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Saying you are on the mend."
        }
      ],
      prompt: "Sebastián asks “¿cómo te sentís?” What is he asking Alex?",
      choices: [
        "Where he is going to sit down, using a form he built from the verb sentarse rather than from sentir.",
        "How he feels — sentirse is the verb for health and mood, and “te sentís” is simply its paisa vos form.",
        "What he is thinking about doing today, since “sentís” is being used loosely here to mean plans or ideas."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Sebastián says “uy, lo siento, parce.” What does “lo siento” mean here?",
          choices: [
            "That he can physically feel Alex's pain himself, taking “sentir” in its most literal bodily sense.",
            "That he is sitting down next to Alex, reading “siento” as a form of the verb sentarse instead.",
            "That he is sorry to hear it — “lo siento” is a fixed expression of sympathy, not a literal feeling."
          ],
          answer: 2,
          tests: "lo siento as sympathy, not sensation"
        },
        {
          prompt: "Which sentence correctly says “I feel fine” in Spanish?",
          choices: [
            "“Me siento bien”, because sentirse needs its reflexive pronoun when you describe your own state.",
            "“Siento bien”, dropping the pronoun the way English drops it, since “feel” takes nothing before it.",
            "“Me siento bueno”, using the adjective bueno to describe the good way that you happen to feel."
          ],
          answer: 0,
          tests: "sentirse needs the reflexive pronoun"
        },
        {
          prompt: "You want to say “I feel hot” (temperature). What should you avoid, and say instead?",
          choices: [
            "Avoid “siento calor” and say “estoy caliente”, which is the neutral way to report your temperature.",
            "Avoid “me siento caliente” and say “tengo calor”, since “caliente” for a person suggests arousal.",
            "Avoid “tengo calor” and say “me siento caliente”, because feelings of temperature always use sentir."
          ],
          answer: 1,
          tests: "tener calor versus the caliente trap"
        }
      ]
    },
    en: {
      title: "Decirle a un amigo paisa que uno se siente mal",
      situation:
        "Alejandra amaneció maluca en Houston y su amigo Jordan se da cuenta y le pregunta cómo está. Alejandra tiene que explicar qué siente, desde cuándo y qué tan mal, y Jordan le ofrece ayuda. Toda la conversación gira en torno a “sentir”, que en inglés es “feel” — pero sin el reflexivo del español, y sin confundir “I'm sorry” con un “lo siento” calcado.",
      setting: {
        who: "Jordan es un amigo estadounidense del edificio de Alejandra, de los que se dan cuenta cuando uno está mal y se ponen en modo cuidador enseguida.",
        what: "Un intercambio corto y preocupado sobre Alejandra sintiéndose mal: qué le duele, desde cuándo y si conviene ir a la farmacia.",
        when: "Una mañana entre semana, cuando Alejandra claramente se ve maluca y Jordan lo nota de una.",
        where: "Houston, donde el inglés dice “feel” sin el reflexivo y marca la simpatía con “I'm sorry”.",
        why: "Porque el inglés dice “feel” sin el “se” del español, y porque “I'm sorry” hace el trabajo de “lo siento” pero también el de “perdón”. Alejandra tiene que no calcar el reflexivo ni traducir “lo siento” palabra por palabra."
      },
      address: {
        form: "mixed",
        who: "Jordan y Alejandra se tratan con el mismo “you” y el nombre de pila, como dos amigos cercanos del edificio.",
        why: "El inglés no tiene un vos cariñoso; la cercanía la marcan el nombre, el tono y frases como “you look rough”. Ese calor del vos paisa se traslada al inglés por el trato relajado, no por una forma verbal distinta, porque el “you” es uno solo.",
        ifYouSwitch:
          "Ponerse formal con Jordan — “I regret to inform you” — sonaría absurdo cuando uno está enfermo entre amigos. El inglés muestra confianza bajando el registro léxico, no cambiando de pronombre."
      },
      dialogue: [
        {
          speaker: "Jordan",
          target: "Hey, you look rough. How are you feeling?",
          translation: "¿Quihubo? Te veo maluco. ¿Cómo te sentís?",
          pronunciation: "jei, yu luk raf. jau ar yu FII-ling",
          literal: "Oye, te ves áspero. ¿Cómo estás sintiendo?",
          why: "“How are you feeling?” es el “¿cómo te sentís?”. Fíjese en que “feel” en inglés no lleva reflexivo: no se dice “how are you feeling yourself”. “You look rough” es un “te veo maluco” coloquial."
        },
        {
          speaker: "Alejandra",
          target: "I don't feel well at all. I've got a terrible headache.",
          translation: "No me siento nada bien. Siento un dolor de cabeza horrible.",
          pronunciation: "ai dount fil uel at ol. aiv got a TE-ri-bol JED-eik",
          literal: "No me siento bien para nada. Tengo un terrible dolor de cabeza.",
          why: "“I don't feel well” traduce “no me siento bien”, pero sin el “me”: el inglés “feel” no lleva pronombre reflexivo. Y para el dolor el inglés usa “have” (“I've got a headache”), no “feel a pain”, que suena forzado."
        },
        {
          speaker: "Jordan",
          target: "Oh, I'm sorry. How long have you felt like this?",
          translation: "Uy, lo siento. ¿Desde cuándo te sentís así?",
          pronunciation: "ou, aim SO-ri. jau long jav yu felt laik dis",
          literal: "Oh, lo siento. ¿Cuánto tiempo has sentido así?",
          why: "“I'm sorry” es el “lo siento” de simpatía. Ojo: no se dice “I feel it”, que sería el calco literal. “How long have you felt like this?” usa el presente perfecto para una situación que sigue vigente."
        },
        {
          speaker: "Alejandra",
          target: "Since last night. I feel like I'm coming down with something.",
          translation: "Desde anoche. Siento que me va a dar algo.",
          pronunciation: "sins last nait. ai fil laik aim KA-ming daun uid SAM-zing",
          literal: "Desde anoche. Siento como que me estoy enfermando de algo.",
          why: "“I feel like” es el “siento que” de las corazonadas. “Come down with something” es la expresión hecha para estar incubando una gripa. El inglés prefiere “like” + oración donde el español usa “que”."
        },
        {
          speaker: "Jordan",
          target: "Sit down for a sec. If you feel worse, we'll go to the pharmacy.",
          translation: "Sentate un momento. Si te sentís peor, vamos a la droguería.",
          pronunciation: "sit daun for a sek. if yu fil uers, uil gou tu da FAR-ma-si",
          literal: "Siéntate por un segundo. Si te sientes peor, iremos a la farmacia.",
          why: "“Sit down” es “sentate”, un verbo distinto de “feel”: el inglés no los confunde como el español confunde “me siento”. “Feel worse” es “sentirse peor”; “pharmacy” es la droguería."
        },
        {
          speaker: "Alejandra",
          target: "Thanks. And sorry to be such a bother.",
          translation: "Gracias. Y perdoná, siento darte tanta lidia.",
          pronunciation: "zanks. and SO-ri tu bi sach a BO-der",
          literal: "Gracias. Y perdón por ser tanta molestia.",
          why: "“Sorry to + verbo” es el “siento + infinitivo” (“siento molestarte”). El inglés usa “sorry”, no “I feel”, para la disculpa. “Such a bother” traduce el “tanta lidia” colombiano."
        }
      ],
      vocabulary: [
        {
          term: "how are you feeling?",
          explanation:
            "“¿Cómo te sentís?” El inglés “feel” no lleva reflexivo: nunca “feel yourself” para hablar de salud.",
          literal: "¿cómo estás sintiendo?",
          useWhen:
            "Al preguntarle a alguien por su estado de salud o de ánimo.",
          avoidWhen:
            "Con “feel yourself”, que suena raro o ambiguo; “feel” va solo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["how do you feel?", "you feeling okay?", "how are you doing?", "you alright?"],
          example: {
            target: "How are you feeling today?",
            translation: "¿Cómo te sentís hoy?"
          }
        },
        {
          term: "feel + adjective",
          explanation:
            "“Sentirse + adjetivo”, pero sin pronombre: “I feel sick”, “I feel better”. El inglés no calca el “me”.",
          literal: "sentir + adjetivo",
          useWhen:
            "Al describir tu estado: “I feel tired”, “I feel great”.",
          avoidWhen:
            "Agregando un reflexivo: “I feel me sick” es un calco incorrecto del español.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["feel sick", "feel better", "feel dizzy", "feel off"],
          example: {
            target: "I feel much better today.",
            translation: "Hoy me siento mucho mejor."
          }
        },
        {
          term: "feel like",
          explanation:
            "“Sentir que / tener la sensación de que.” Una corazonada o intuición sobre algo.",
          literal: "sentir como",
          useWhen:
            "Al expresar un presentimiento: “I feel like it's going to rain”.",
          avoidWhen:
            "Ojo: “feel like” + sustantivo también significa “tener ganas de” (“I feel like a coffee”).",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I feel like", "I have a feeling", "something tells me", "I sense that"],
          example: {
            target: "I feel like something's wrong.",
            translation: "Siento que algo anda mal."
          }
        },
        {
          term: "I'm sorry",
          explanation:
            "“Lo siento.” Sirve para disculpa y para condolencia. No se dice “I feel it”, que sería el calco.",
          literal: "lo lamento",
          useWhen:
            "Al dar el pésame o disculparse por algo que de verdad importa.",
          avoidWhen:
            "Para un roce mínimo; ahí basta un “sorry” suelto, sin el “I'm” enfático.",
          register: "neutro",
          region: "Inglés universal; “sorry” a secas es más ligero que “I'm sorry”.",
          related: ["sorry", "I'm so sorry", "my condolences", "I do apologize"],
          example: {
            target: "I'm sorry, that's terrible news.",
            translation: "Lo siento, es una noticia terrible."
          }
        },
        {
          term: "sorry to + verb",
          explanation:
            "“Siento + infinitivo.” Disculparse por lo que uno hace: “sorry to bother you”.",
          literal: "perdón por + verbo",
          useWhen:
            "Al pedir disculpas por la acción que estás haciendo.",
          avoidWhen:
            "Con “I feel to bother you”, que no existe; el inglés usa “sorry to”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["sorry to bother you", "sorry to interrupt", "sorry to trouble you", "apologies for"],
          example: {
            target: "Sorry to call so late.",
            translation: "Siento llamar tan tarde."
          }
        },
        {
          term: "under the weather",
          explanation:
            "“Maluco”, medio enfermo. Una forma suave e idiomática de decir que uno no está del todo bien.",
          literal: "bajo el clima",
          useWhen:
            "Al decir que te sientes algo enfermo, sin ser grave.",
          avoidWhen:
            "En un parte médico formal, donde conviene nombrar el síntoma.",
          register: "amistoso informal",
          region: "Inglés universal; muy común y coloquial.",
          related: ["feeling off", "a bit rough", "not myself", "run down"],
          example: {
            target: "I'm a bit under the weather today.",
            translation: "Hoy amanecí medio maluco."
          }
        },
        {
          term: "sit down",
          explanation:
            "“Sentarse.” Un verbo aparte de “feel”; el inglés no los cruza como el español cruza “me siento”.",
          literal: "sentarse",
          useWhen:
            "Al pedirle a alguien que tome asiento: “sit down”, “have a seat”.",
          avoidWhen:
            "Confundiéndolo con “feel”; en inglés son dos verbos sin forma compartida.",
          register: "neutro",
          region: "Inglés universal; “have a seat” es un poco más cortés.",
          related: ["have a seat", "take a seat", "sit tight", "grab a seat"],
          example: {
            target: "Sit down, you look tired.",
            translation: "Sentate, que te ves cansado."
          }
        }
      ],
      note:
        "El inglés dice “feel” sin el reflexivo del español: “I feel sick”, nunca “I feel me sick”. Para un dolor concreto prefiere “have” (“I have a headache”) antes que “feel a pain”. Y “lo siento” es “I'm sorry”, no “I feel it”: el mismo verbo sentir se reparte entre “feel” y “sorry”. Guarde “I'm sorry” para lo que de verdad importa y use un “sorry” suelto para los roces pequeños, igual que el español elige entre “lo siento” y “perdón”.",
      culture: [
        {
          label: "“Feel” no lleva reflexivo",
          body:
            "El español dice “me siento”, con pronombre, así que el hispanohablante lo calca como “I feel me sick” o “I feel myself bad”. El inglés no lleva nada: “I feel sick”, “I feel better”, a secas. El “feel yourself” existe, pero significa palparse o sentirse uno mismo en otro sentido, y suena raro para la salud. Soltar el reflexivo es de los ajustes más rápidos que hacen sonar natural, porque el error aparece en cada frase sobre cómo uno está."
        },
        {
          label: "“I'm sorry” pesa más que “sorry”",
          body:
            "El inglés gradúa la disculpa. “Sorry” a secas sirve para un roce, una interrupción, un pequeño tropiezo; “I'm sorry”, con el verbo entero, carga más y vale para el pésame o una disculpa de verdad. El hispanohablante que calca “lo siento” como “I feel it” no se hace entender: la expresión hecha es “I'm sorry”. Ajustar el peso de la disculpa al momento — “sorry” para lo leve, “I'm so sorry” para lo grave — hace que el inglés suene calibrado."
        },
        {
          label: "Para el dolor, el inglés usa “have”",
          body:
            "“Siento un dolor de cabeza” se vuelve “I have a headache”, no “I feel a pain of head”. El inglés trata los males comunes como algo que uno “tiene”: “I have a cold”, “I have a sore throat”, “I have a fever”. “Feel” se reserva para sensaciones más difusas: “I feel dizzy”, “I feel a sharp pain”. Elegir “have” para el síntoma con nombre y “feel” para la sensación vaga ordena casi todo el vocabulario de estar enfermo."
        },
        {
          label: "El inglés separa feel y sit",
          body:
            "En español “me siento” es a la vez “feel” y “sit”, y el contexto decide. El inglés no tiene esa coincidencia: “feel” y “sit down” son dos verbos sin forma compartida, así que el cruce que confunde al aprendiz de español simplemente no existe. Para el hispanohablante esto es una buena noticia: no hay que desambiguar. Pero conviene recordarlo al traducir, para no buscar en inglés una ambigüedad que allí no está y que en español era natural."
        }
      ],
      pitfalls: [
        {
          mistake: "“I feel me sick.”",
          whyItFails:
            "Calca el reflexivo de “me siento”. El inglés “feel” no lleva pronombre: se dice “I feel sick”. Agregar “me” o “myself” suena a traducción directa del español.",
          sayInstead: "I feel sick. / I don't feel well."
        },
        {
          mistake: "“I have cold.” para decir que uno tiene frío",
          whyItFails:
            "Mezcla dos cosas: para la temperatura el inglés usa “to be” (“I'm cold”), y “I have a cold” con artículo significa tener gripa. Sin artículo y con “have”, la frase queda mal.",
          sayInstead: "I'm cold. (temperatura) / I have a cold. (gripa)"
        },
        {
          mistake: "“I feel it.” para dar el pésame",
          whyItFails:
            "Es el calco literal de “lo siento”. En inglés la expresión de simpatía es “I'm sorry”; “I feel it” no se entiende como disculpa ni como pésame.",
          sayInstead: "I'm sorry. / I'm so sorry."
        },
        {
          mistake: "“How you feel?” sin el auxiliar",
          whyItFails:
            "El español pregunta solo con la entonación, así que el hispanohablante omite el “do” o el “are”. El inglés los exige: “How do you feel?” o “How are you feeling?”.",
          sayInstead: "How do you feel? / How are you feeling?"
        }
      ],
      variations: [
        {
          form: "How are you feeling?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al preguntarle a alguien cómo se siente, en general."
        },
        {
          form: "How do you feel?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una variante casi igual, un punto más puntual."
        },
        {
          form: "I feel awful.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al reportar que uno se siente bastante mal."
        },
        {
          form: "I'm not feeling great.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una forma suave de decir que uno está maluco."
        },
        {
          form: "I feel much better now.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al decir que uno ya va mejorando."
        }
      ],
      prompt: "Jordan pregunta “how are you feeling?” ¿Qué le está preguntando a Alejandra?",
      choices: [
        "Dónde se va a sentar, tomando “feeling” como si viniera del verbo “sit down” en lugar de “feel”.",
        "Cómo se siente — “feel” es el verbo de la salud y el ánimo, y aquí va sin ningún pronombre reflexivo.",
        "Qué está pensando hacer hoy, usando “feeling” de forma libre para referirse a planes o a ideas sueltas."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Jordan dice “oh, I'm sorry.” ¿Qué significa aquí “I'm sorry”?",
          choices: [
            "Que puede sentir físicamente el dolor de Alejandra, tomando “sorry” en su sentido más corporal y literal.",
            "Que se está sentando al lado de Alejandra, leyendo “sorry” como si viniera del verbo “sit down”.",
            "Que lamenta oírlo — “I'm sorry” es la expresión hecha de simpatía, no una sensación física literal."
          ],
          answer: 2,
          tests: "I'm sorry como simpatía"
        },
        {
          prompt: "¿Cuál dice correctamente “me siento bien” en inglés?",
          choices: [
            "“I feel fine”, porque el inglés “feel” va sin pronombre reflexivo cuando describes tu propio estado.",
            "“I feel me fine”, calcando el “me” del español, ya que “feel” necesitaría un reflexivo como en español.",
            "“I feel myself fine”, agregando “myself” para dejar claro que hablas de cómo te sientes tú mismo."
          ],
          answer: 0,
          tests: "feel sin reflexivo"
        },
        {
          prompt: "Quieres decir “tengo frío”. ¿Qué debes evitar y qué decir?",
          choices: [
            "Evita “I have cold” y di “I'm cold”, porque la temperatura del cuerpo en inglés se marca con “to be”.",
            "Evita “I'm cold” y di “I have cold”, porque el inglés calca el “tener” del español para el frío y el calor.",
            "Evita “I feel cold” y di “I have the cold”, porque el frío siempre pide artículo cuando se usa el verbo have."
          ],
          answer: 0,
          tests: "to be para la temperatura, no have"
        }
      ]
    }
  },
  {
    id: "explaining-to-a-new-neighbor-where-you-live",
    level: "Starter · Home and neighborhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    pathways: ["foundation"],
    verb: "vivir",
    review: "pending",
    es: {
      title: "Telling a new neighbor where you live",
      situation:
        "Alex has just moved into a building in Bogotá and meets Doña Rosa, the administradora, in the portería; she also lives there. She greets him with usted and asks whether he lives in the building or is visiting. Alex has to say where he lives, where he moved from, and since when, while Doña Rosa explains that she lives off renting apartments. Everything turns around vivir: vivir en, vivir sobre, vivir hace, vivir de, and vivir para.",
      setting: {
        who: "Doña Rosa is the building's administradora — part manager, part unofficial mayor — who lives on the ground floor and knows everyone.",
        what: "A first-meeting chat in the lobby about where Alex lives, where he came from, and how long Rosa has been there.",
        when: "The afternoon Alex moves in, boxes still in the hall, running into Rosa at the portería.",
        where: "Bogotá, in an apartment building where usted is the default and neighbors address each other as “vecino”.",
        why: "Because vivir carries prepositions English speakers get wrong: “vivir en el 402”, “vivir sobre la Quinta”, “vivir hace dos años”, plus “vivir de” for making a living and “vivir para” for devotion."
      },
      address: {
        form: "usted",
        who: "Doña Rosa and Alex use usted with each other, the standard between neighbors who have just met in Bogotá.",
        why: "In Bogotá usted is the safe, respectful default with strangers, elders and figures of some authority like an administradora. It signals courtesy without coldness, and switching to tú too soon with someone like Doña Rosa could read as overfamiliar.",
        ifYouSwitch:
          "If Alex slid into tú right away, Doña Rosa might find it forward, though she would not say so. Over months of daily hellos the usted may soften, but a new neighbor holds it, and “vecino” does the warming that a pronoun change would."
      },
      dialogue: [
        {
          speaker: "Doña Rosa",
          target: "Buenas, vecino. ¿Usted vive aquí en el edificio o está de visita?",
          translation: "Hello, neighbor. Do you live here in the building, or are you visiting?",
          pronunciation: "BWE-nas, be-SEE-no. oo-STED BEE-be a-KEE en el e-dee-FEE-syo o es-TA de bee-SEE-ta",
          literal: "Good, neighbor. You lives here in the building or is of visit?",
          why: "“Vive” is the usted form, matching the polite register. “Vivir en” covers living in a place, from a country to a building. “Vecino” as a term of address is standard between neighbors, and “buenas” is the all-purpose Colombian greeting."
        },
        {
          speaker: "Alex",
          target: "Vivo aquí, en el 402. Me acabo de mudar de Cali.",
          translation: "I live here, in 402. I just moved from Cali.",
          pronunciation: "BEE-bo a-KEE, en el KWA-tro-SYEN-tos dos. me a-KA-bo de moo-DAR de KA-lee",
          literal: "I-live here, in the 402. Myself I-finish of to-move from Cali.",
          why: "“Vivir en el 402” — Spanish uses “en” for the apartment number where English says “in 402”. “Acabar de + infinitive” is “to have just done” something, and “mudarse de” is to move away from a place."
        },
        {
          speaker: "Doña Rosa",
          target: "¡Bienvenido! ¿Y en qué parte de Cali vivía?",
          translation: "Welcome! And what part of Cali did you live in?",
          pronunciation: "byen-be-NEE-do! ee en ke PAR-te de KA-lee bee-BEE-a",
          literal: "Welcome! And in what part of Cali lived?",
          why: "“Vivía” is the imperfect — the tense for describing where you used to live over a stretch of time. English marks this with “did you live / used to live”; Spanish just uses the imperfect, no auxiliary needed."
        },
        {
          speaker: "Alex",
          target: "Vivía en el sur, sobre la Quinta. ¿Usted vive hace mucho aquí?",
          translation: "I lived in the south, on Fifth. Have you lived here long?",
          pronunciation: "bee-BEE-a en el soor, SO-bre la KEEN-ta. oo-STED BEE-be A-se MOO-cho a-KEE",
          literal: "I-lived in the south, over the Fifth. You lives makes much here?",
          why: "For a street, Colombians say “sobre la Quinta” (or “por la Quinta”), not a direct “en”. “Vivir hace mucho” expresses duration — “to have lived for a long time” — using “hace” where English uses the present perfect."
        },
        {
          speaker: "Doña Rosa",
          target: "Toda la vida. Yo vivo de arrendar apartamentos, así que conozco a todo el mundo.",
          translation: "All my life. I make a living renting out apartments, so I know everyone.",
          pronunciation: "TO-da la BEE-da. yo BEE-bo de a-rren-DAR a-par-ta-MEN-tos, a-SEE ke ko-NOS-ko a TO-do el MOON-do",
          literal: "All the life. I live of to-rent apartments, so that I-know to all the world.",
          why: "“Vivir de” means to make a living from something — “vivo de arrendar” is “I live off renting”. It is a completely normal thing to say; asking “¿de qué vive?” is not rude in Colombia the way “how do you earn money?” can feel in English."
        },
        {
          speaker: "Alex",
          target: "Qué bueno. La verdad, uno vive para el trabajo, pero se agradece un buen vecindario.",
          translation: "That's great. Honestly, you live for your work, but a good neighborhood is welcome.",
          pronunciation: "ke BWE-no. la ber-DAD, OO-no BEE-be PA-ra el tra-BA-jo, PE-ro se a-gra-DE-se oon bwen be-seen-DA-ryo",
          literal: "What good. The truth, one lives for the work, but oneself appreciates a good neighborhood.",
          why: "“Vivir para” is to live *for* something — devotion or purpose — as opposed to “vivir de”, to live *from* it (income). Impersonal “uno vive” is “one lives / you live” in general, a common way to generalise about life without naming yourself."
        }
      ],
      vocabulary: [
        {
          term: "¿Usted dónde vive?",
          explanation:
            "The polite, usted way to ask where someone lives — the everyday opener with a new neighbor.",
          literal: "You where lives?",
          useWhen:
            "Asking a stranger or someone you address with usted where they live.",
          avoidWhen:
            "With a close friend, where the vos “¿dónde vivís?” or tú “¿dónde vives?” fits better.",
          register: "polite formal",
          region: "Bogotá and general Colombian; usted is the Bogotá default.",
          related: ["¿dónde vive?", "¿dónde vivís?", "¿dónde vives?", "¿por dónde vive?"],
          example: {
            target: "¿Usted dónde vive, vecino?",
            translation: "Where do you live, neighbor?"
          }
        },
        {
          term: "vivir en",
          explanation:
            "The default preposition for living somewhere — a country, city, neighborhood, building or apartment number.",
          literal: "to-live in",
          useWhen:
            "Almost anywhere you live: “vivo en Bogotá”, “vivo en el 402”, “vivo en el norte”.",
          avoidWhen:
            "For a street name, where “sobre” or “por” is more natural than “en”.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["vivir en el norte", "vivir en las afueras", "vivir en el campo", "vivir en el 402"],
          example: {
            target: "Vivo en un edificio cerca del parque.",
            translation: "I live in a building near the park."
          }
        },
        {
          term: "vivir sobre / por (la Quinta)",
          explanation:
            "For a street, Colombians say you live “sobre” or “por” it, not “en” it.",
          literal: "to-live over / around (Fifth)",
          useWhen:
            "Giving your location by street: “vivo sobre la Séptima”, “vivo por la 80”.",
          avoidWhen:
            "Calquing English “on”; “sobre” is right, but a bare “en la Quinta” for a street sounds off.",
          register: "neutral",
          region: "General Colombian; “por” adds a sense of “around/near”.",
          related: ["sobre la Séptima", "por la 80", "sobre la Autopista", "por el centro"],
          example: {
            target: "Vivo sobre la Quinta, cerca del río.",
            translation: "I live on Fifth, near the river."
          }
        },
        {
          term: "vivir hace / desde",
          explanation:
            "Duration of living somewhere: “hace dos años” for the span, “desde 2020” for the start point.",
          literal: "to-live makes / since",
          useWhen:
            "Saying how long you have lived somewhere: “vivo aquí hace dos años”.",
          avoidWhen:
            "Calquing “por dos años” from English “for two years”, which sounds wrong for ongoing duration.",
          register: "neutral",
          region: "General Colombian; “llevo dos años viviendo” is an equally common phrasing.",
          related: ["hace dos años", "desde 2020", "llevo dos años", "desde hace tiempo"],
          example: {
            target: "Vivo en Bogotá hace tres años.",
            translation: "I've lived in Bogotá for three years."
          }
        },
        {
          term: "vivir de",
          explanation:
            "To make a living from something — your source of income. “Vivo de la música” = I live off music.",
          literal: "to-live of",
          useWhen:
            "Naming what you earn your living from: “vive de arrendar”, “vive del arte”.",
          avoidWhen:
            "Confusing it with “vivir para”, which is devotion, not income.",
          register: "neutral",
          region: "General Colombian; “¿de qué vive?” is a normal, non-rude question.",
          related: ["vivir del arte", "vivir de arrendar", "¿de qué vive?", "vivir del cuento"],
          example: {
            target: "Ella vive de vender flores.",
            translation: "She makes a living selling flowers."
          }
        },
        {
          term: "vivir para",
          explanation:
            "To live *for* something — devotion, purpose, what you organize your life around.",
          literal: "to-live for",
          useWhen:
            "Expressing what someone is devoted to: “vive para sus hijos”, “vive para el trabajo”.",
          avoidWhen:
            "When you mean income; that is “vivir de”, and mixing them changes the meaning entirely.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["vivir para trabajar", "vivir para los hijos", "vivir para contarlo", "vivir para servir"],
          example: {
            target: "Vive para sus nietos.",
            translation: "She lives for her grandchildren."
          }
        },
        {
          term: "mudarse (de / a)",
          explanation:
            "To move house — “mudarse de” from a place, “mudarse a” to a new one.",
          literal: "to-move-oneself (from / to)",
          useWhen:
            "Talking about changing where you live: “me mudé de Cali”, “me mudo a Bogotá”.",
          avoidWhen:
            "For moving an object; that is “mover”, while “mudarse” is specifically changing residence.",
          register: "neutral",
          region: "General Colombian; “trastearse” is a very Colombian synonym for moving house.",
          related: ["trastearse", "mudarse a", "mudarse de", "cambiar de casa"],
          example: {
            target: "Me acabo de mudar a este barrio.",
            translation: "I just moved to this neighborhood."
          }
        }
      ],
      note:
        "Vivir is easy until the prepositions arrive. Use “en” for almost every place — city, neighborhood, even the apartment number (“en el 402”) — but switch to “sobre” or “por” for a street. For duration say “hace dos años” or “llevo dos años viviendo”, never the calqued “por dos años”. And keep “vivir de” (your income) apart from “vivir para” (your devotion): “vivo de la música” pays the rent, “vivo para la música” is a calling. Asking someone “¿de qué vive?” is ordinary and polite in Colombia.",
      culture: [
        {
          label: "“En” for places, “sobre” for streets",
          body:
            "Spanish leans on “en” for living almost anywhere: “vivo en Colombia”, “en el norte”, “en el 402”. But a street breaks the pattern — you live “sobre la Séptima” or “por la 80”, never a plain “en la Séptima”. English speakers, trained on “on Fifth Avenue”, reach for a literal “en” and it sounds off. “Sobre” literally means “over/on”, and “por” adds a vaguer “around there”. Getting this one preposition right instantly places you as someone who has actually lived on a Colombian street."
        },
        {
          label: "The administradora knows everything",
          body:
            "Colombian apartment buildings run on a small ecosystem: the portería (front desk), the portero or celador who watches the door, and the administrador or administradora who manages the building and its cuotas. Rosa living off renting apartments and knowing everyone is completely typical — the administradora is the neighborhood's memory. Buildings are also ranked by estrato, a socioeconomic tier from one to six that affects utility rates. Mentioning your estrato is normal and unloaded; it is logistics, not bragging, though outsiders often misread it."
        },
        {
          label: "“¿De qué vive?” is not rude",
          body:
            "Asking directly what someone lives off — “¿de qué vive?”, “¿en qué trabaja?” — is normal small talk in Colombia, not the money taboo it can be in English-speaking cultures. “Vivir de” frames work as how you sustain yourself, matter-of-factly. There is even the wry “vivir del cuento”, to get by on charm or scams rather than honest work. So when Rosa volunteers that she lives off renting, she is making ordinary conversation, and a similar question back to her would be perfectly polite."
        },
        {
          label: "Usted and “vecino” between neighbors",
          body:
            "In Bogotá, neighbors who have just met default to usted and to the address “vecino” or “vecina”, which works like a friendly title — you can greet someone for years as “vecino” without ever using their name. It is warm and a little formal at once, the register of shared hallways and the portería. The usted may relax into tú over time, but the safe opening move with a new neighbor, especially the administradora, is usted plus “buenas, vecino”."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “vivo a la Quinta” for “I live on Fifth”",
          whyItFails:
            "It calques English “on / at” with “a”, which is not how Spanish locates a residence on a street. Colombians say “sobre la Quinta” or “en la Quinta”, not “a la”.",
          sayInstead: "Vivo sobre la Quinta. / Vivo en la Quinta."
        },
        {
          mistake: "Saying “vivo aquí por dos años”",
          whyItFails:
            "“Por dos años” calques “for two years” but implies a finished or planned stretch. For ongoing duration Colombians use “hace dos años” or “llevo dos años viviendo”.",
          sayInstead: "Vivo aquí hace dos años. / Llevo dos años viviendo aquí."
        },
        {
          mistake: "Mixing up “vivo de la música” and “vivo para la música”",
          whyItFails:
            "“De” means your income comes from it; “para” means you are devoted to it. Swap them and you say your hobby pays your rent, or that you worship your day job.",
          sayInstead: "Vivo de la música (income) / Vivo para la música (devotion)."
        },
        {
          mistake: "Overusing “estoy viviendo aquí” for a permanent home",
          whyItFails:
            "The present continuous suggests something temporary — a stint, a stay. For where you simply live, Spanish prefers the simple present “vivo aquí”, reserving the gerund for the provisional.",
          sayInstead: "Vivo aquí. (permanent) / Estoy viviendo aquí por ahora. (temporary)"
        }
      ],
      variations: [
        {
          form: "¿Usted dónde vive?",
          register: "polite formal",
          region: "Bogotá / general Colombian",
          whenToUse: "Asking with usted — a stranger, a neighbor, an elder."
        },
        {
          form: "¿Vos dónde vivís?",
          register: "friendly informal",
          region: "Antioquia / vos regions",
          whenToUse: "Asking a friend in vos, paisa style."
        },
        {
          form: "¿Tú dónde vives?",
          register: "friendly informal",
          region: "Caribbean coast / general",
          whenToUse: "Asking with tú, common on the coast and among friends."
        },
        {
          form: "Vivo aquí cerca, sobre la Séptima.",
          register: "neutral",
          region: "Bogotá",
          whenToUse: "Placing yourself by a nearby street."
        },
        {
          form: "Llevo dos años viviendo en Bogotá.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Giving how long you have lived somewhere."
        }
      ],
      prompt: "Doña Rosa says “yo vivo de arrendar apartamentos.” What does this tell Alex?",
      choices: [
        "That renting apartments is what she makes her living from — “vivir de” names the source of someone's income.",
        "That she lives inside one of the apartments she rents, taking “de” to mark the place where she resides.",
        "That she is devoted to renting apartments above all else, reading “vivo de” as living *for* the work she loves."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "How does Alex correctly say he lives “on Fifth” (a street) in Colombian Spanish?",
          choices: [
            "“Vivo sobre la Quinta”, because for a street Colombians use “sobre” (or “por”) rather than a bare “en”.",
            "“Vivo a la Quinta”, matching the English preposition “on / at” with the Spanish “a” before the street.",
            "“Vivo en la Quinta número”, adding “número” so the street name works the way a house number would."
          ],
          answer: 0,
          tests: "vivir sobre for streets, not a la"
        },
        {
          prompt: "Which correctly says “I've lived here for two years”?",
          choices: [
            "“Vivo aquí por dos años”, using “por” to translate the English “for” across the whole two-year span.",
            "“Vivo aquí hace dos años” or “llevo dos años viviendo aquí”, the Colombian ways to mark ongoing duration.",
            "“Vivo aquí desde dos años”, taking “desde” to count the two years back from now up to the present day."
          ],
          answer: 1,
          tests: "hace / llevo for duration, not por"
        },
        {
          prompt: "What is the difference between “vivo de la música” and “vivo para la música”?",
          choices: [
            "“De” means near the music scene and “para” means far from it; both describe where a musician chooses to live.",
            "They mean the same thing, since both “de” and “para” simply link the verb vivir to the thing you enjoy most.",
            "“De” means music is your income; “para” means music is your devotion — the preposition flips the whole meaning."
          ],
          answer: 2,
          tests: "vivir de (income) versus vivir para (devotion)"
        }
      ]
    },
    en: {
      title: "Contarle a una vecina nueva dónde vive uno",
      situation:
        "Alejandra se acaba de mudar a un edificio en Houston y se encuentra en el lobby con Mrs. Klein, una vecina mayor que vive ahí hace años. Ella la saluda y le pregunta si vive en el edificio o está de visita. Alejandra tiene que decir dónde vive, de dónde se mudó y desde cuándo, mientras hablan de barrios. Todo gira en torno a “live”, con sus preposiciones traicioneras — in, on, at — y con “make a living” y “live for”.",
      setting: {
        who: "Mrs. Klein es una vecina estadounidense mayor que vive en el edificio hace años y conoce a todo el mundo del piso.",
        what: "Una charla de primer encuentro en el lobby sobre dónde vive Alejandra, de dónde llegó y cuánto lleva ahí Mrs. Klein.",
        when: "La tarde en que Alejandra se muda, con cajas todavía en el pasillo, cuando se cruza con Mrs. Klein.",
        where: "Houston, en un edificio de apartamentos donde el inglés marca la ubicación con in, on y at según el caso.",
        why: "Porque “live” arrastra preposiciones que el hispanohablante confunde: “live in” la ciudad, “live on” la calle, “live at” la dirección, más “make a living” para vivir de algo y “live for” para vivir para algo."
      },
      address: {
        form: "mixed",
        who: "Mrs. Klein y Alejandra se tratan con el mismo “you”, aunque el respeto por la edad se nota en el tono y en el “Mrs. Klein”.",
        why: "El inglés no distingue usted de tú: hay un solo “you”. El respeto que en Bogotá pondría el usted aquí lo llevan el apellido con “Mrs.”, el tono cuidado y fórmulas como “nice to meet you”. El registro no cambia el pronombre, cambia las palabras.",
        ifYouSwitch:
          "Si Alejandra tratara a Mrs. Klein por el nombre de pila desde el primer minuto, podría sonar demasiado confianzudo; el inglés marca la distancia con el apellido y el “Mrs.”, no con un pronombre distinto."
      },
      dialogue: [
        {
          speaker: "Mrs. Klein",
          target: "Hi there, neighbor. Do you live here in the building, or are you visiting?",
          translation: "Buenas, vecina. ¿Vive aquí en el edificio o está de visita?",
          pronunciation: "jai der, NEI-bor. du yu liv jir in da BIL-ding, or ar yu VI-zi-ting",
          literal: "Hola ahí, vecina. ¿Vives aquí en el edificio, o estás visitando?",
          why: "“Do you live...?” arma la pregunta con el auxiliar “do”, que el español omite. “Live in the building” usa “in” para un espacio cerrado. “Neighbor” funciona como saludo, igual que “vecina” en Bogotá."
        },
        {
          speaker: "Alejandra",
          target: "I live here, in 402. I just moved from Austin.",
          translation: "Vivo aquí, en el 402. Me acabo de mudar de Austin.",
          pronunciation: "ai liv jir, in for-ou-TU. ai yast muvd from van-KU-ver",
          literal: "Vivo aquí, en 402. Yo justo me mudé de Austin.",
          why: "Para un número de apartamento el inglés dice “in 402”, sin artículo — nada de “in the 402”. “I just moved” con “just” + pasado simple es el “me acabo de mudar”. “Move from” es mudarse de un lugar."
        },
        {
          speaker: "Mrs. Klein",
          target: "Welcome! And where did you live in Austin?",
          translation: "¡Bienvenida! ¿Y en qué parte de Austin vivía?",
          pronunciation: "UEL-kam! and uer did yu liv in van-KU-ver",
          literal: "¡Bienvenida! ¿Y dónde viviste en Austin?",
          why: "“Where did you live?” usa “did” + infinitivo para el pasado; el inglés no tiene un imperfecto aparte como “vivía”. La preposición “in” vuelve para la ciudad. El auxiliar “did” es obligatorio en la pregunta."
        },
        {
          speaker: "Alejandra",
          target: "I lived downtown, on Fifth. Have you lived here long?",
          translation: "Vivía en el centro, sobre la Quinta. ¿Usted vive hace mucho aquí?",
          pronunciation: "ai livd DAUN-taun, on fifz. jav yu livd jir long",
          literal: "Viví en el centro, sobre la Quinta. ¿Has vivido aquí mucho?",
          why: "Para una calle el inglés usa “on Fifth”, no “in”. Y para la duración usa el presente perfecto “have you lived here long?”, donde el español usa “vive hace mucho”. “Downtown” va sin preposición: “I live downtown”."
        },
        {
          speaker: "Mrs. Klein",
          target: "All my life. I make a living renting out apartments, so I know everyone.",
          translation: "Toda la vida. Vivo de arrendar apartamentos, así que conozco a todos.",
          pronunciation: "ol mai laif. ai meik a LI-ving REN-ting aut a-PART-ments, sou ai nou EV-ri-uan",
          literal: "Toda mi vida. Yo hago un vivir arrendando apartamentos, así que conozco a todos.",
          why: "Ojo: “vivir de” NO es “live from”, sino “make a living from” o “live off”. “Make a living” es la fórmula fija. “Rent out” es arrendar algo tuyo a otros; sin “out” sería tomar algo en arriendo."
        },
        {
          speaker: "Alejandra",
          target: "That's great. Honestly, you live for your work, but a good neighborhood helps.",
          translation: "Qué bueno. La verdad, uno vive para el trabajo, pero un buen vecindario ayuda.",
          pronunciation: "dats greit. ON-est-li, yu liv for yor uerk, bat a gud NEI-bor-jud jelps",
          literal: "Eso es genial. Honestamente, tú vives para tu trabajo, pero un buen vecindario ayuda.",
          why: "“Live for” es “vivir para” — devoción, no ingreso. Contrasta con “make a living / live off”, que es de dónde sale la plata. El “you” impersonal traduce el “uno vive” general del español."
        }
      ],
      vocabulary: [
        {
          term: "where do you live?",
          explanation:
            "La pregunta básica por el domicilio. Necesita el auxiliar “do”, que el español no usa.",
          literal: "¿dónde vives?",
          useWhen:
            "Al preguntarle a alguien dónde vive, en cualquier registro.",
          avoidWhen:
            "Omitiendo el “do”: “where you live?” suena a inglés incompleto.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["whereabouts do you live?", "where are you based?", "where's home?", "which area do you live in?"],
          example: {
            target: "Where do you live these days?",
            translation: "¿Dónde vives ahora?"
          }
        },
        {
          term: "live in",
          explanation:
            "La preposición por defecto para un lugar cerrado o amplio: una ciudad, un barrio, un edificio.",
          literal: "vivir en",
          useWhen:
            "Para ciudades, países, barrios y edificios: “I live in Houston”, “in the building”.",
          avoidWhen:
            "Para una calle, donde el inglés usa “on”, no “in”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["live in the city", "live in the suburbs", "live in an apartment", "live in the country"],
          example: {
            target: "I live in a small apartment.",
            translation: "Vivo en un apartamento pequeño."
          }
        },
        {
          term: "live on (a street)",
          explanation:
            "Para una calle, el inglés dice “on”: “on Fifth Avenue”, “on King Street”.",
          literal: "vivir sobre (una calle)",
          useWhen:
            "Al ubicarte por el nombre de la calle: “I live on Fifth”.",
          avoidWhen:
            "Con “in Fifth Avenue”, un calco del “en” español que suena mal.",
          register: "neutro",
          region: "Inglés universal; en EE. UU. muy frecuente.",
          related: ["on Fifth Avenue", "on King Street", "just off Main", "around the corner"],
          example: {
            target: "We live on King Street.",
            translation: "Vivimos sobre la King."
          }
        },
        {
          term: "live at (an address)",
          explanation:
            "Para la dirección exacta con número, el inglés usa “at”: “at 402”, “at 15 King Street”.",
          literal: "vivir en (una dirección)",
          useWhen:
            "Al dar la dirección puntual con número de puerta.",
          avoidWhen:
            "Para una ciudad o barrio, donde va “in”, no “at”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["at number 402", "at 15 King Street", "at this address", "at my place"],
          example: {
            target: "I live at 402.",
            translation: "Vivo en el 402."
          }
        },
        {
          term: "make a living (from)",
          explanation:
            "“Vivir de” algo — de dónde sacas el ingreso. No es “live from”, que es un calco.",
          literal: "hacer un vivir (de)",
          useWhen:
            "Al decir de qué vive alguien: “she makes a living from art”.",
          avoidWhen:
            "Diciendo “live from”, que no es idiomático; usa “make a living” o “live off”.",
          register: "neutro",
          region: "Inglés universal; “live off” es una alternativa más informal.",
          related: ["make a living from", "live off", "earn a living", "make ends meet"],
          example: {
            target: "He makes a living selling coffee.",
            translation: "Vive de vender café."
          }
        },
        {
          term: "live for",
          explanation:
            "“Vivir para” — aquello a lo que uno se dedica en cuerpo y alma, no de lo que gana.",
          literal: "vivir para",
          useWhen:
            "Al expresar devoción: “she lives for her kids”, “I live for the weekend”.",
          avoidWhen:
            "Cuando hablas de ingresos; eso es “make a living”, no “live for”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["live for the weekend", "live for her kids", "live for music", "live and breathe"],
          example: {
            target: "She lives for her grandchildren.",
            translation: "Vive para sus nietos."
          }
        },
        {
          term: "move (house)",
          explanation:
            "“Mudarse”: “move from” de un lugar, “move to” a otro, “move in / out” entrar o salir.",
          literal: "moverse (de casa)",
          useWhen:
            "Al hablar de cambiar de domicilio: “I just moved from Austin”.",
          avoidWhen:
            "Para mover un objeto; ahí basta “move”, sin el sentido de cambiar de casa.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["move in", "move out", "move to", "relocate"],
          example: {
            target: "We're moving to a bigger place.",
            translation: "Nos vamos a mudar a un lugar más grande."
          }
        }
      ],
      note:
        "“Live” cambia de preposición según el lugar: “in” para una ciudad, un barrio o un edificio; “on” para una calle (“on Fifth”, no “in Fifth”); y “at” para la dirección exacta con número. Para la duración usa el presente perfecto (“I've lived here for two years”), no “since two years”. Y “vivir de” es “make a living from” o “live off”, nunca “live from”; guárdalo aparte de “live for”, que es vivir para algo por devoción. Y no olvides el “do” en la pregunta: “where do you live?”.",
      culture: [
        {
          label: "In, on, at: tres preposiciones para vivir",
          body:
            "Donde el español estira “en” para casi todo, el inglés reparte tres preposiciones. “In” es el contenedor: una ciudad, un barrio, un edificio (“I live in Houston”, “in the building”). “On” es para la calle (“on Fifth Avenue”). “At” es para la dirección puntual con número (“at 402”). El hispanohablante calca “en” y dice “in Fifth Avenue”, que suena raro. Memorizar la escala — in ciudad, on calle, at número — ordena de una vez casi todo lo que uno necesita decir sobre dónde vive."
        },
        {
          label: "“Make a living”, no “live from”",
          body:
            "“Vivir de algo” tienta al calco “live from”, que en inglés no funciona. La fórmula es “make a living from” o, más coloquial, “live off”: “she makes a living from art”, “he lives off renting”. “Make a living” es una expresión fija — literalmente “hacer un sustento” — y “earn a living” es su variante. También existe “make ends meet”, llegar a fin de mes. Cambiar el “live from” por “make a living” es de esos ajustes que delatan de inmediato si uno maneja el inglés real o lo está traduciendo."
        },
        {
          label: "Duración: present perfect, no “since”",
          body:
            "Para cuánto llevas viviendo en un lugar, el inglés usa el presente perfecto con “for” + un lapso: “I've lived here for two years”. El hispanohablante suele decir “I live here since two years”, mezclando el presente simple con “since” y un lapso, y las dos cosas fallan: “since” quiere un punto de inicio (“since 2020”), y la duración quiere “for”. El presente perfecto marca algo que empezó antes y sigue vigente, justo lo que expresa el “vivo aquí hace dos años”."
        },
        {
          label: "El “do” que el español no tiene",
          body:
            "La pregunta “where do you live?” necesita el auxiliar “do”, invisible para quien piensa en español, porque el español pregunta solo con la entonación: “¿dónde vives?”. Por eso es tan común oír “where you live?”, que suena incompleto al oído nativo. El “do” no traduce nada; es andamiaje gramatical. Interiorizarlo en las preguntas de rutina — “do you live”, “did you live”, “does she live” — evita uno de los errores más frecuentes y más fáciles de corregir del hispanohablante."
        }
      ],
      pitfalls: [
        {
          mistake: "“I live in Fifth Avenue.”",
          whyItFails:
            "Calca el “en” español para una calle. El inglés usa “on” para las calles: “on Fifth Avenue”. “In” queda reservado para ciudades, barrios y espacios cerrados.",
          sayInstead: "I live on Fifth Avenue."
        },
        {
          mistake: "“I live here since two years.”",
          whyItFails:
            "Mezcla presente simple con “since” y un lapso. La duración pide presente perfecto con “for”: “I've lived here for two years”. “Since” solo va con un punto de inicio.",
          sayInstead: "I've lived here for two years."
        },
        {
          mistake: "“I live from renting.”",
          whyItFails:
            "Es el calco literal de “vivo de arrendar”. El inglés no dice “live from” para el ingreso; usa “make a living from” o “live off”.",
          sayInstead: "I make a living from renting. / I live off renting."
        },
        {
          mistake: "“Where you live?” sin el auxiliar",
          whyItFails:
            "El español pregunta con la pura entonación, así que el hispanohablante omite el “do”. El inglés lo exige en la pregunta: “where do you live?”.",
          sayInstead: "Where do you live?"
        }
      ],
      variations: [
        {
          form: "Where do you live?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La forma estándar de preguntar dónde vive alguien."
        },
        {
          form: "Do you live around here?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al preguntar si alguien vive por la zona."
        },
        {
          form: "I live just off Fifth.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al ubicarte cerca de una calle conocida."
        },
        {
          form: "I've lived in Houston for two years.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al decir cuánto llevas viviendo en un lugar."
        },
        {
          form: "I live over on the east side.",
          register: "amistoso informal",
          region: "Norteamérica",
          whenToUse: "Al señalar tu zona de la ciudad de forma relajada."
        }
      ],
      prompt: "Mrs. Klein dice “I make a living renting out apartments.” ¿Qué le está contando a Alejandra?",
      choices: [
        "Que arrendar apartamentos es de lo que vive — “make a living” es la fórmula inglesa para nombrar tu fuente de ingreso.",
        "Que vive dentro de uno de los apartamentos que arrienda, tomando la frase como si dijera dónde queda su casa.",
        "Que está dedicada por entero a arrendar apartamentos, leyendo “make a living” como un “vivir para” lleno de vocación."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cómo dice Alejandra correctamente que vive “sobre la Quinta” (una calle) en inglés?",
          choices: [
            "“I live on Fifth”, porque para una calle el inglés usa “on”, no el “in” que uno calca del español.",
            "“I live in Fifth”, igualando el “en” español con “in”, ya que el inglés trataría la calle como un lugar cerrado.",
            "“I live at Fifth”, usando “at” como si el nombre de la calle funcionara igual que una dirección con número."
          ],
          answer: 0,
          tests: "live on para calles"
        },
        {
          prompt: "¿Cuál dice correctamente “vivo aquí hace dos años” en inglés?",
          choices: [
            "“I live here since two years”, mezclando el presente simple con “since” para contar los dos años corridos.",
            "“I've lived here for two years”, con presente perfecto y “for”, la forma inglesa de marcar la duración.",
            "“I am living here for two years”, con presente continuo y “for”, como si la estadía fuera algo pasajero."
          ],
          answer: 1,
          tests: "present perfect con for para duración"
        },
        {
          prompt: "¿Cuál es la diferencia entre “make a living from music” y “live for music”?",
          choices: [
            "“Make a living from” significa vivir cerca de la escena musical y “live for” significa alejarse de ella por completo.",
            "Significan lo mismo, porque tanto “make a living” como “live for” conectan el verbo vivir con lo que a uno le gusta.",
            "“Make a living from” es que la música es tu ingreso; “live for” es que es tu devoción — el sentido cambia por completo."
          ],
          answer: 2,
          tests: "make a living (ingreso) versus live for (devoción)"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/10-foundation-daily-life.js");
