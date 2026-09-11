/*
 * Lesson block: foundation / at the table.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Three foundation verbs, one lesson each: pedir (ask for / order), servir
 * (serve / be useful) and comer (eat). Each spines on its verb, named in the
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
    id: "ordering-the-set-lunch-downtown",
    level: "Starter · Food and drink",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "courteous",
    pathways: ["foundation"],
    verb: "pedir",
    review: "pending",
    es: {
      title: "Ordering the corrientazo at lunchtime",
      situation:
        "It is noon, and you walk into a menú del día restaurant near the offices in Bogotá. You order the corrientazo - soup, the seco, and the juice of the day - and learn that in Colombia you do not phrase ordering as “quiero”: you wrap it in “¿me regala?” or “¿me hace el favor?”. With the waitress, you use usted.",
      setting: {
        who: "Alex, a foreigner on a lunch break, and Patricia, a busy waitress at a set-menu lunch place who has maybe forty minutes to turn every table.",
        what: "Ordering the corrientazo — the fixed lunch of soup, a main with rice, and a fresh juice — and learning to phrase the request the Colombian way.",
        when: "A weekday, twelve-thirty, the deadest-serious hour of the Colombian day: lunch.",
        where: "Downtown Bogotá, a no-frills set-lunch spot packed with office workers on their break.",
        why: "Because ordering food is the request you'll make more than any other, and Colombians almost never say “I want” — they soften it, and knowing how is the difference between sounding blunt and sounding local."
      },
      address: {
        form: "usted",
        who: "Alex and Patricia use usted with each other, the default between a customer and a server who are strangers in Bogotá.",
        why: "In Bogotá, usted is the neutral setting even in casual service; it isn't cold, it's simply the unmarked way to speak to someone you don't know.",
        ifYouSwitch:
          "Switching to tú with the waitress would sound forward, even a little flirtatious; usted keeps the exchange easy and professional on both sides."
      },
      dialogue: [
        {
          speaker: "Patricia",
          target: "Siga, ¿ya sabe qué va a pedir?",
          translation: "Come in, do you know what you're going to order yet?",
          pronunciation: "SEE-gah, ya SAH-beh ke va a peh-DEER",
          literal: "Continue, already you-know what goes to order?",
          why: "“Siga” literally means “continue” but is the standard Colombian “come in / go ahead”. Note that “pedir” is the verb for ordering food, not “ordenar”."
        },
        {
          speaker: "Alex",
          target: "Todavía no. ¿Qué trae el corrientazo hoy?",
          translation: "Not yet. What comes with the set lunch today?",
          pronunciation: "toh-da-VEE-ah no. ke TRAH-eh el ko-rryen-TAH-so oi",
          literal: "Still not. What brings the set-lunch today?",
          why: "“Traer” (to bring) is how Colombians ask what a dish “comes with”. “Corrientazo” is the cheap daily set lunch — a word you won't find in a textbook."
        },
        {
          speaker: "Patricia",
          target: "Sancocho, pollo con arroz y jugo. ¿Le provoca?",
          translation: "Sancocho, chicken with rice, and juice. Fancy it?",
          pronunciation: "san-KO-cho, PO-yo kon a-RROS i HOO-go. le pro-VO-ka",
          literal: "Sancocho, chicken with rice and juice. To-you it-provokes?",
          why: "“¿Le provoca?” — “do you fancy it?” — is deeply Colombian; elsewhere “provocar” doesn't mean “to feel like”. The usted “le” keeps it polite."
        },
        {
          speaker: "Alex",
          target: "Sí, señora. ¿Me regala un corrientazo, por favor?",
          translation: "Yes, ma'am. Could I have a set lunch, please?",
          pronunciation: "see, se-NYO-ra. me re-GAH-la un ko-rryen-TAH-so por fa-VOR",
          literal: "Yes, madam. Me you-gift a set-lunch, please?",
          why: "“¿Me regala?” literally says “will you gift me?”, but it's the everyday Colombian way to ask for something you'll pay for. This is the lesson's core move."
        },
        {
          speaker: "Patricia",
          target: "Claro que sí. ¿El jugo en agua o en leche?",
          translation: "Of course. Juice with water or with milk?",
          pronunciation: "KLA-ro ke see. el HOO-go en AH-gwa o en LE-che",
          literal: "Clear that yes. The juice in water or in milk?",
          why: "Colombian juice is blended fresh “en agua” or “en leche” — a real choice you'll be asked. There's no ordering fruit juice without answering it."
        },
        {
          speaker: "Alex",
          target: "En agua, gracias. Y después le pido la cuenta.",
          translation: "With water, thanks. And afterwards I'll ask you for the bill.",
          pronunciation: "en AH-gwa, GRA-syas. i des-PWES le PEE-do la KWEN-ta",
          literal: "In water, thanks. And after to-you I-ask the bill.",
          why: "“Pedir la cuenta” — to ask for the bill — uses pedir again. Notice “le pido”: pedir takes the person as an indirect object and the thing asked for as the direct one."
        }
      ],
      vocabulary: [
        {
          term: "pedir",
          explanation:
            "To ask for or to order — the everyday verb for requesting a thing, a dish, or a favor.",
          literal: "to ask for / to order",
          useWhen: "Ordering food, requesting an object, asking someone for something concrete.",
          avoidWhen: "Asking a question for information — that's “preguntar”, a different verb.",
          register: "neutral",
          region: "Universal Spanish; the food sense is constant across Colombia.",
          related: ["ordenar", "solicitar", "encargar", "rogar"],
          example: {
            target: "Voy a pedir un tinto.",
            translation: "I'm going to order a black coffee."
          }
        },
        {
          term: "¿me regala...?",
          explanation:
            "The everyday Colombian request formula: literally “will you gift me...?”, used even when you're paying.",
          literal: "will you gift me...?",
          useWhen: "Ordering or asking for almost anything in a shop, stall, or restaurant.",
          avoidWhen: "Very formal writing, where it would look too colloquial.",
          register: "friendly informal",
          region: "Strongly Colombian, heard nationwide; it startles other Spanish speakers.",
          related: ["¿me da...?", "¿me vende...?", "¿me colabora con...?", "¿me facilita...?"],
          example: {
            target: "¿Me regala una empanada?",
            translation: "Could I have an empanada?"
          }
        },
        {
          term: "¿me hace el favor y...?",
          explanation:
            "“Would you do me the favor and...?” — a warm, slightly more emphatic softener for a request.",
          literal: "will you do me the favor and...?",
          useWhen: "Asking someone to do a small task, politely and warmly.",
          avoidWhen: "A brusque, hurried context where a plain “¿me regala?” is faster.",
          register: "polite",
          region: "General Colombian.",
          related: ["¿me haría el favor...?", "hágame el favor", "¿sería tan amable...?", "¿me colabora...?"],
          example: {
            target: "¿Me hace el favor y me trae servilletas?",
            translation: "Would you mind bringing me some napkins?"
          }
        },
        {
          term: "corrientazo",
          explanation:
            "The cheap set lunch of the day — soup, a main with rice, and juice — the backbone of the Colombian workday.",
          literal: "the set lunch of the day",
          useWhen: "Ordering the daily fixed lunch at a working-class restaurant.",
          avoidWhen: "A fancy restaurant, where there's no corrientazo and the word would clash.",
          register: "casual",
          region: "Colombian; called “menú del día” or “ejecutivo” in smarter places.",
          related: ["menú del día", "almuerzo ejecutivo", "el seco", "la bandeja"],
          example: {
            target: "El corrientazo cuesta doce mil.",
            translation: "The set lunch costs twelve thousand pesos."
          }
        },
        {
          term: "provocar",
          explanation:
            "In Colombia, “to feel like” or “to fancy” something — a meaning it has nowhere else.",
          literal: "to provoke",
          useWhen: "Talking about craving or fancying food or drink.",
          avoidWhen: "Meaning “to provoke / annoy”, its sense in the rest of the Spanish-speaking world.",
          register: "friendly informal",
          region: "Very Colombian.",
          related: ["antojarse", "apetecer", "tener ganas de", "dar ganas"],
          example: {
            target: "¿Le provoca un jugo?",
            translation: "Do you fancy a juice?"
          }
        },
        {
          term: "pedir prestado",
          explanation:
            "To borrow — literally “to ask for lent”; Spanish has no single verb, so pedir carries it.",
          literal: "to ask for lent",
          useWhen: "Borrowing an object from someone.",
          avoidWhen: "Borrowing money from a bank, which is more “un préstamo / prestar”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["prestar", "un préstamo", "fiar", "devolver"],
          example: {
            target: "Le pedí prestado el paraguas a Ana.",
            translation: "I borrowed the umbrella from Ana."
          }
        },
        {
          term: "la cuenta",
          explanation:
            "The bill or check — what you ask for at the end with “pedir la cuenta” or “¿me regala la cuenta?”.",
          literal: "the account / bill",
          useWhen: "Asking to pay at a restaurant or bar.",
          avoidWhen: "A shop where you pay up front; there you just pay at “la caja”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["la caja", "el recibo", "la factura", "la propina"],
          example: {
            target: "¿Me regala la cuenta, por favor?",
            translation: "Could I have the bill, please?"
          }
        }
      ],
      note:
        "Colombians almost never bark “quiero” (“I want”) when ordering. They wrap the request in a softener — “¿me regala...?”, literally “will you gift me...?”, or the warmer “¿me hace el favor y...?”. Both sound normal even though you're paying. And keep “pedir” (to ask for / order) apart from “preguntar” (to ask a question): you “pides” a coffee, but you “preguntas” where the bathroom is.",
      culture: [
        {
          label: "“Gift me” is just how you order",
          body:
            "The first time you hear “¿me regala un café?” it sounds like you're begging a favor — “regalar” is “to give as a gift”. But in Colombia it's simply the polite, everyday way to request something you fully intend to pay for. Refusing to use it and saying “quiero un café” instead marks you instantly as a foreigner, and a slightly brusque one. Treat “¿me regala...?” as the default and only drop it in the most formal writing."
        },
        {
          label: "Lunch is the serious meal",
          body:
            "In Colombia the midday almuerzo, not dinner, is the anchor of the day. The corrientazo — soup, a main over rice, a fresh juice, sometimes a little dessert — is designed to be eaten fast and cheap by people on a work break. Skipping it or grabbing a sandwich instead reads as slightly sad to Colombians; lunch is when the working day pauses properly, and the set menu is the institution that makes it affordable every single day."
        },
        {
          label: "Juice: water or milk",
          body:
            "Fresh fruit juice is blended to order, and you'll always be asked “¿en agua o en leche?” — with water or with milk. Lulo, maracuyá, mora, and guanábana each lean one way or the other, and Colombians hold firm opinions. It's not a trick question or an upsell; it's a genuine fork in the road you must answer to get your drink. Answer confidently and you've cleared one of the small hurdles that mark out an insider."
        },
        {
          label: "“¿Le provoca?” means do you fancy it",
          body:
            "Elsewhere in the Spanish-speaking world “provocar” means to provoke or to trigger. In Colombia it quietly took on a second life meaning “to feel like” or “to fancy”: “¿le provoca un postre?” is a waiter asking whether dessert tempts you. It's one of the most reliable tells that you're talking to a Colombian, and picking it up will make your own speech sound markedly more native than any textbook synonym like “apetecer”."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “quiero un café” to order",
          whyItFails:
            "It's grammatically fine but sounds blunt and demanding to a Colombian ear; ordering here is softened, not stated as a want.",
          sayInstead: "¿Me regala un café, por favor?"
        },
        {
          mistake: "Using “pedir” to ask a question",
          whyItFails:
            "“Pedir” is to ask FOR a thing; asking a question is “preguntar”. “Te pido dónde queda” is wrong for “I ask you where it is”.",
          sayInstead: "Te pregunto dónde queda el baño."
        },
        {
          mistake: "Reading “¿me regala?” as literally free",
          whyItFails:
            "Learners hear “regalar” (to gift) and think they're being offered something free; it's simply the request formula, and you still pay.",
          sayInstead: "“¿Me regala?” means “could I have?”, and yes, you pay."
        },
        {
          mistake: "Ordering with “ordenar” like in English",
          whyItFails:
            "“Ordenar” exists but leans on “to put in order / to command”; for food most Colombians say “pedir”, so “ordenar” can sound stiff or translated.",
          sayInstead: "¿Qué vas a pedir?"
        }
      ],
      variations: [
        {
          form: "¿Me regala un jugo?",
          register: "friendly informal",
          region: "Colombian, nationwide",
          whenToUse: "The everyday default for ordering almost anything."
        },
        {
          form: "¿Me da un jugo, por favor?",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A plainer, slightly more neutral request, understood everywhere."
        },
        {
          form: "¿Me hace el favor y me trae un jugo?",
          register: "polite",
          region: "General Colombian",
          whenToUse: "A warmer, more explicit ask, good for a small extra task."
        },
        {
          form: "Quiero un jugo.",
          register: "blunt",
          region: "Universal Spanish",
          whenToUse: "Direct and a bit brusque; fine among close friends or in a rush."
        },
        {
          form: "¿Sería tan amable de traerme un jugo?",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "Very formal or deliberately deferential situations."
        }
      ],
      prompt: "Why does Alex say “¿me regala un corrientazo?” instead of “quiero un corrientazo”?",
      choices: [
        "Because “regalar” means the food will be free, and he is hoping the waitress simply gives it to him.",
        "Because “quiero” is grammatically incorrect in Colombia and no native speaker there would ever use it.",
        "Because wrapping the order in “¿me regala?” is the normal, polite Colombian way to ask for it."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "You want to ask the waiter a question — where the bathroom is. Which verb do you need?",
          choices: [
            "“Preguntar”, because you're asking for information, not requesting a thing to be handed over.",
            "“Pedir”, because any kind of asking at all in Spanish uses this one single all-purpose verb.",
            "“Provocar”, because in Colombia it politely covers asking questions in a restaurant setting."
          ],
          answer: 0,
          tests: "pedir vs preguntar: requesting a thing vs asking a question"
        },
        {
          prompt: "The waitress asks “¿el jugo en agua o en leche?”. What is she actually asking?",
          choices: [
            "Whether you want to pay for the juice now at the counter or add it later onto the final bill.",
            "Whether your fresh juice should be blended with water or with milk — a real choice you must make.",
            "Whether you would prefer bottled water or a tall glass of milk served alongside your lunch today."
          ],
          answer: 1,
          tests: "en agua o en leche as a real juice choice"
        },
        {
          prompt: "Which sentence correctly uses “pedir prestado”?",
          choices: [
            "Le pedí prestado el paraguas a mi vecino porque estaba lloviendo durísimo.",
            "Le pregunté prestado el paraguas a mi vecino porque estaba lloviendo durísimo.",
            "Le regalé prestado el paraguas a mi vecino porque estaba lloviendo durísimo."
          ],
          answer: 0,
          tests: "pedir prestado as the borrowing construction"
        },
        {
          prompt: "Your friend says a dessert “le provoca”. What does that mean?",
          choices: [
            "It irritates or provokes them, so they would honestly rather skip dessert entirely tonight.",
            "It is being offered to them completely free of charge as a small gift from the kitchen staff.",
            "They fancy it — in Colombia “provocar” means to feel like or be tempted by something."
          ],
          answer: 2,
          tests: "provocar meaning to fancy in Colombia"
        }
      ]
    },
    en: {
      title: "Pedir el almuerzo del día en un diner",
      situation:
        "Es mediodía y usted entra a un diner cerca del trabajo en Estados Unidos. Pide el especial del almuerzo — sopa o ensalada y un plato principal — y descubre que el inglés no tiene un “¿me regala?”: la cortesía va en el verbo, en “could I get...?” y en “please”. Aquí no se dice “I want” a secas, se suaviza.",
      setting: {
        who: "Alejandra, colombiana en su hora de almuerzo, y Marcus, un mesero atareado en un diner que tiene que rotar rápido cada mesa.",
        what: "Pedir el especial del almuerzo — sopa o ensalada y un plato principal — y aprender a suavizar el pedido a la manera inglesa.",
        when: "Un día entre semana, doce y media, la hora pico del almuerzo.",
        where: "En una ciudad de Estados Unidos, un diner sencillo lleno de oficinistas.",
        why: "Porque pedir comida es el pedido que más va a hacer, y en inglés casi nunca se dice “I want” a secas: se envuelve en “could I” y “please”, y saber hacerlo es la diferencia entre sonar brusca y sonar natural."
      },
      address: {
        form: "mixed",
        who: "Alejandra y Marcus se hablan con cortesía, pero el inglés no marca la distancia con un pronombre: siempre es “you”.",
        why: "El inglés no tiene usted ni tú: la formalidad se lleva en el verbo y en los suavizadores — “could I get”, “would you mind”, “please” — no en el pronombre.",
        ifYouSwitch:
          "Si quiere sonar más formal, no cambie el “you” (no hay otro); cambie las palabras: “give me a coffee” es brusco, “could I get a coffee, please?” es lo natural."
      },
      dialogue: [
        {
          speaker: "Marcus",
          target: "Hi there! Do you know what you'd like?",
          translation: "¡Hola! ¿Ya sabe qué le gustaría?",
          pronunciation: "jai der! du yu nou wot yud laik",
          literal: "Hola ahí. ¿Sabe usted qué le gustaría?",
          why: "“What you'd like” (would like) es la fórmula suave para “qué quiere”. El inglés pide con el condicional “would”, no con el presente “want”."
        },
        {
          speaker: "Alejandra",
          target: "Not yet. What comes with the lunch special?",
          translation: "Todavía no. ¿Qué trae el especial del almuerzo?",
          pronunciation: "not yet. wot koms wid da lonch SPE-shal",
          literal: "No todavía. ¿Qué viene con el especial del almuerzo?",
          why: "“What comes with...?” es justo “¿qué trae...?”. “Comes with” es la colocación fija para lo que acompaña a un plato."
        },
        {
          speaker: "Marcus",
          target: "Soup or salad, and a main. Sound good?",
          translation: "Sopa o ensalada, y un plato fuerte. ¿Le suena bien?",
          pronunciation: "sup or SA-lad, and a mein. saund gud",
          literal: "Sopa o ensalada, y un principal. ¿Suena bien?",
          why: "“Sound good?” hace el papel de “¿le provoca? / ¿le suena?”. En inglés se confirma con “sound good”, no con una pregunta más larga."
        },
        {
          speaker: "Alejandra",
          target: "Yes, please. Could I get the lunch special?",
          translation: "Sí, por favor. ¿Me da el especial del almuerzo?",
          pronunciation: "yes, plis. kud ai get da lonch SPE-shal",
          literal: "Sí, por favor. ¿Podría yo obtener el especial del almuerzo?",
          why: "“Could I get...?” es el “¿me regala?” del inglés: el pasado “could” no es tiempo, es cortesía. Esta es la movida central de la lección."
        },
        {
          speaker: "Marcus",
          target: "Sure. Soup or salad with that?",
          translation: "Claro. ¿Sopa o ensalada con eso?",
          pronunciation: "shur. sup or SA-lad wid dat",
          literal: "Seguro. ¿Sopa o ensalada con eso?",
          why: "El equivalente inglés del “¿en agua o en leche?”: una bifurcación real que hay que contestar. “With that” es “con eso / con el plato”."
        },
        {
          speaker: "Alejandra",
          target: "Soup, thanks. And could I get the check after?",
          translation: "Sopa, gracias. ¿Y me trae la cuenta después?",
          pronunciation: "sup, zenks. and kud ai get da chek AF-ter",
          literal: "Sopa, gracias. ¿Y podría obtener la cuenta después?",
          why: "“The check” es la cuenta en Norteamérica (“the bill” en el Reino Unido). Otra vez “could I get” para pedir con cortesía."
        }
      ],
      vocabulary: [
        {
          term: "to ask for",
          explanation:
            "Pedir algo concreto: una cosa, un plato, un favor. Ojo: “ask for”, con “for”, es pedir; “ask” a secas es preguntar.",
          literal: "pedir",
          useWhen: "Pedir un objeto, un plato o la cuenta.",
          avoidWhen: "Hacer una pregunta de información; eso es “to ask”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["to order", "to request", "to ask (a question)", "to get"],
          example: {
            target: "I'd like to ask for the bill.",
            translation: "Quisiera pedir la cuenta."
          }
        },
        {
          term: "could I get...?",
          explanation:
            "La fórmula suave y cotidiana para pedir, sobre todo en Norteamérica; el “¿me regala?” del inglés.",
          literal: "¿podría yo obtener...?",
          useWhen: "Pedir comida, bebida o casi cualquier cosa en un mostrador o restaurante.",
          avoidWhen: "Escritura muy formal, donde va mejor “I would like”.",
          register: "amistoso informal",
          region: "Inglés norteamericano; “could I have...?” es más común en el Reino Unido.",
          related: ["can I get...?", "could I have...?", "I'll have...", "I'd like..."],
          example: {
            target: "Could I get a black coffee, please?",
            translation: "¿Me regala un café, por favor?"
          }
        },
        {
          term: "would you mind...?",
          explanation:
            "“¿Le importaría...?” — un suavizador más marcado para pedirle a alguien que haga algo.",
          literal: "¿le importaría...?",
          useWhen: "Pedir un favor pequeño con cortesía extra.",
          avoidWhen: "Un pedido rápido y directo, donde “could I get” basta.",
          register: "cortés",
          region: "Inglés universal.",
          related: ["could you...?", "would you be able to...?", "do you mind...?", "if you don't mind"],
          example: {
            target: "Would you mind bringing some napkins?",
            translation: "¿Le importaría traer unas servilletas?"
          }
        },
        {
          term: "the lunch special",
          explanation:
            "El almuerzo del día a precio fijo: el corrientazo del diner norteamericano.",
          literal: "el especial del almuerzo",
          useWhen: "Pedir el menú del día en un restaurante sencillo.",
          avoidWhen: "Un restaurante elegante, donde no hay “special” de este tipo.",
          register: "casual",
          region: "Inglés norteamericano; “set lunch” o “meal deal” en el Reino Unido.",
          related: ["the daily special", "the set lunch", "the combo", "the special"],
          example: {
            target: "I'll have the lunch special.",
            translation: "Me da el almuerzo del día."
          }
        },
        {
          term: "to feel like",
          explanation:
            "Tener ganas de algo, provocarle a uno: “I feel like a coffee” es “me provoca un café”.",
          literal: "tener ganas de",
          useWhen: "Hablar de un antojo o de qué le apetece.",
          avoidWhen: "Cuidado: “feel like” también es “sentirse como”; el contexto decide.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["to be in the mood for", "to fancy", "to crave", "to want"],
          example: {
            target: "I feel like something sweet.",
            translation: "Me provoca algo dulce."
          }
        },
        {
          term: "to borrow",
          explanation:
            "Pedir prestado: el inglés sí tiene un solo verbo. Ojo: “borrow” es recibir prestado; “lend” es prestar.",
          literal: "pedir prestado",
          useWhen: "Recibir algo prestado de alguien.",
          avoidWhen: "Cuando usted es quien presta; ahí es “to lend”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["to lend", "to loan", "to give back", "to return"],
          example: {
            target: "Can I borrow your pen?",
            translation: "¿Me presta su esfero?"
          }
        },
        {
          term: "the check",
          explanation:
            "La cuenta del restaurante en Norteamérica; en el Reino Unido, “the bill”.",
          literal: "la cuenta",
          useWhen: "Pedir para pagar al final de la comida.",
          avoidWhen: "Una tienda donde se paga por adelantado en la caja.",
          register: "neutro",
          region: "Inglés norteamericano; “the bill” en el Reino Unido.",
          related: ["the bill", "the tab", "the receipt", "the tip"],
          example: {
            target: "Could I get the check, please?",
            translation: "¿Me regala la cuenta, por favor?"
          }
        }
      ],
      note:
        "En inglés casi nunca se pide con “I want” a secas: suena brusco. Se envuelve en “could I get...?” o “could I have...?”, donde el pasado “could” no es tiempo sino cortesía. Y cuidado con “ask”: “ask for” (con “for”) es pedir una cosa, pero “ask” a secas es preguntar. Se pide (“ask for”) un café; se pregunta (“ask”) dónde está el baño. La cortesía inglesa vive en el verbo, no en el pronombre.",
      culture: [
        {
          label: "El inglés no tiene “¿me regala?”",
          body:
            "En Colombia la cortesía del pedido vive en una fórmula — “¿me regala un café?” —, pero el inglés no tiene equivalente literal. Su suavizador está en el verbo: “could I get a coffee?”, con el pasado “could” que no marca tiempo sino distancia cortés. Traducir “quiero” como “I want” suena tan brusco como pedir en Colombia con un “deme” seco. La regla práctica es sencilla: arranque casi cualquier pedido con “could I get” o “could I have” y añada “please”."
        },
        {
          label: "El almuerzo importa, pero distinto",
          body:
            "En Norteamérica el almuerzo suele ser más rápido y ligero que el colombiano: muchos comen en media hora en el escritorio, y el “lunch special” del diner cumple el papel del corrientazo pero sin la sopa obligatoria ni el jugo natural. La comida fuerte tiende a ser la cena. No espere que todo el trabajo se detenga a mediodía como en Colombia; el ritmo es otro y conviene ajustarse a él sin sorprenderse demasiado."
        },
        {
          label: "La propina no es opcional",
          body:
            "En Colombia la propina suele ser un 10% sugerido que aparece en la cuenta y uno puede quitar. En Estados Unidos la propina es prácticamente obligatoria y va del 15 al 20%, y no dejarla se lee como un insulto al mesero, cuyo salario depende de ella. No aparece incluida: usted la calcula y la suma. Es uno de los choques culturales más caros de no entender a tiempo."
        },
        {
          label: "“For here or to go”",
          body:
            "Al pedir, le van a preguntar “for here or to go?” — “¿para acá o para llevar?”. Es el equivalente funcional del “¿en agua o en leche?”: una bifurcación fija que hay que contestar para que avance el pedido. En el Reino Unido dicen “eat in or takeaway?”. Contestar rápido y con naturalidad — “to go, please” — es una de esas pequeñas señales de que usted ya se mueve con soltura en el idioma."
        }
      ],
      pitfalls: [
        {
          mistake: "“Give me a coffee.”",
          whyItFails:
            "Gramaticalmente está bien, pero suena a orden y resulta brusco; en inglés el pedido se suaviza con “could I”.",
          sayInstead: "Could I get a coffee, please?"
        },
        {
          mistake: "“I want the lunch special.”",
          whyItFails:
            "“I want” a secas suena exigente y algo infantil al pedir; los adultos suavizan con el condicional.",
          sayInstead: "I'd like the lunch special, please."
        },
        {
          mistake: "“Can I ask a coffee?”",
          whyItFails:
            "Aquí “ask” necesita “for”: “ask for a coffee”. Sin “for”, “ask” es preguntar, no pedir.",
          sayInstead: "Can I get a coffee?"
        },
        {
          mistake: "“Can you borrow me your pen?”",
          whyItFails:
            "Se confunde “borrow” (recibir prestado) con “lend” (prestar); quien presta hace “lend”.",
          sayInstead: "Can I borrow your pen?"
        }
      ],
      variations: [
        {
          form: "Could I get a coffee, please?",
          register: "amistoso informal",
          region: "Inglés norteamericano",
          whenToUse: "La opción por defecto para pedir casi cualquier cosa."
        },
        {
          form: "Could I have a coffee, please?",
          register: "cortés",
          region: "Inglés británico y universal",
          whenToUse: "Igual de segura, algo más común en el Reino Unido."
        },
        {
          form: "I'll have the coffee.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al decidir del menú, firme y natural."
        },
        {
          form: "I want a coffee.",
          register: "blunt",
          region: "Inglés universal",
          whenToUse: "Directo y algo brusco; entre amigos o con afán."
        },
        {
          form: "Would you mind bringing a coffee?",
          register: "cortés formal",
          region: "Inglés universal",
          whenToUse: "Un favor pedido con cortesía extra."
        }
      ],
      prompt: "¿Por qué Alejandra dice “could I get the lunch special?” y no “I want the lunch special”?",
      choices: [
        "Porque “get” significa que el plato saldrá gratis y ella espera que el mesero se lo regale sin cobrar.",
        "Porque “I want” es gramaticalmente incorrecto en inglés y ningún hablante nativo lo usaría jamás así.",
        "Porque envolver el pedido en “could I get” es la forma normal y cortés de pedir en inglés."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Usted quiere preguntarle al mesero dónde está el baño. ¿Qué verbo necesita?",
          choices: [
            "“To ask”, porque está pidiendo información con una pregunta, no una cosa que le entreguen.",
            "“To ask for”, porque en inglés cualquier tipo de pregunta usa esta misma forma con la “for”.",
            "“To borrow”, porque en inglés cubre de forma cortés las preguntas dentro de un restaurante."
          ],
          answer: 0,
          tests: "ask vs ask for: preguntar frente a pedir una cosa"
        },
        {
          prompt: "El mesero pregunta “soup or salad with that?”. ¿Qué le está preguntando en realidad?",
          choices: [
            "Si prefiere pagar el plato ahora en la caja o más tarde junto con el resto de la cuenta.",
            "Si quiere sopa o ensalada como acompañamiento del plato — una elección real que debe hacer.",
            "Si desea una botella de agua o un vaso grande de leche servidos aparte junto con su almuerzo."
          ],
          answer: 1,
          tests: "soup or salad como bifurcación real del pedido"
        },
        {
          prompt: "¿Cuál oración usa correctamente “to borrow”?",
          choices: [
            "Can I borrow your umbrella? It's really pouring outside right now.",
            "Can I lend your umbrella? It's really pouring outside right now, sorry.",
            "Can I ask your umbrella? It's really pouring outside right now, please."
          ],
          answer: 0,
          tests: "borrow frente a lend al pedir prestado"
        },
        {
          prompt: "Un amigo dice que “feels like” un postre. ¿Qué quiere decir?",
          choices: [
            "Que el postre lo hace sentir raro o incómodo, así que prefiere no pedir nada dulce hoy.",
            "Que le están ofreciendo el postre totalmente gratis como un detalle de la casa esta noche.",
            "Que le provoca — “to feel like” es tener ganas de algo o que a uno le apetezca."
          ],
          answer: 2,
          tests: "feel like como tener ganas o provocar"
        }
      ]
    }
  },
  {
    id: "second-helpings-at-a-paisa-sunday-lunch",
    level: "Starter · Home and neighborhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "intimate",
    pathways: ["foundation"],
    verb: "servir",
    review: "pending",
    es: {
      title: "Seconds at a paisa Sunday lunch",
      situation:
        "It is Sunday, and you are having lunch at the family home of a friend in Medellín. Doña Miriam serves sancocho, and as soon as you can see the bottom of the bowl, she asks whether you want her to serve you more. Here you will see the two lives of servir: serving food and “servir” as being useful, along with the affectionate pressure to have seconds.",
      setting: {
        who: "Alex, a guest at a friend's family lunch, and Doña Miriam, the paisa matriarch who measures affection in ladlefuls.",
        what: "A Sunday sancocho where refusing a second helping is the real test, and where “servir” turns out to mean two different things.",
        when: "Sunday, early afternoon, the long family lunch that anchors the paisa week.",
        where: "A home in Medellín, Antioquia, at a crowded family table.",
        why: "Because being served — and pressed to take seconds — is a core hospitality ritual, and because “servir” quietly doubles as the verb for whether something “works”, a trap worth seeing coming."
      },
      address: {
        form: "vos",
        who: "The family uses vos with Alex almost at once, the warm paisa default that folds a guest in as one of their own.",
        why: "In Medellín and across Antioquia, vos is the everyday intimate form; hearing it from the family is a sign of acceptance, not disrespect.",
        ifYouSwitch:
          "Answering in stiff usted at a family table can read as keeping your distance; matching their vos, even clumsily, signals you're happy to be adopted for the afternoon."
      },
      dialogue: [
        {
          speaker: "Doña Miriam",
          target: "¡Siga, mijo, siéntese! Ya le sirvo el sancocho.",
          translation: "Come in, dear, sit down! I'll serve you the sancocho now.",
          pronunciation: "SEE-ga, MEE-ho, syen-TE-se! ya le SEER-vo el san-KO-cho",
          literal: "Continue, my-son, sit-yourself! Already to-you I-serve the sancocho.",
          why: "Here vos and usted mix warmly: “siéntese” (usted imperative) with the affectionate “mijo”. “Servir” in its literal sense — to dish out food."
        },
        {
          speaker: "Alex",
          target: "Gracias, doña Miriam. Huele delicioso.",
          translation: "Thank you, Doña Miriam. It smells delicious.",
          pronunciation: "GRA-syas, DO-nya mee-RYAM. WE-le de-lee-SYO-so",
          literal: "Thanks, madam Miriam. It-smells delicious.",
          why: "“Doña” + first name is the respectful-but-warm way to address an older woman. “Oler” (to smell) is stem-changing: huele, not “ole”."
        },
        {
          speaker: "Doña Miriam",
          target: "¿Querés más? Te sirvo otro poquito, que estás muy flaco.",
          translation: "Do you want more? I'll serve you a little more, you're too thin.",
          pronunciation: "ke-RES mas? te SEER-vo O-tro po-KEE-to, ke es-TAS mwi FLA-ko",
          literal: "You-want more? To-you I-serve another little-bit, that you-are very thin.",
          why: "“Querés” is the vos form of “quieres”. Serving seconds “porque estás flaco” is classic paisa care — the pressure is affection, not judgment."
        },
        {
          speaker: "Alex",
          target: "Ya quedé lleno, en serio. ¿Ese cucharón no sirve?",
          translation: "I'm already full, honestly. Doesn't that ladle work?",
          pronunciation: "ya ke-DE YE-no, en SE-ryo. E-se koo-cha-RON no SEER-ve",
          literal: "Already I-stayed full, in serious. That ladle not serves?",
          why: "Here's the second sense: “no sirve” = “doesn't work / is no use”. Same verb, wholly different meaning, and Alex noticing a bent ladle points it up."
        },
        {
          speaker: "Doña Miriam",
          target: "No, está torcido, no sirve. Pero comé, que no comés nada.",
          translation: "No, it's bent, it's useless. But eat, you don't eat a thing.",
          pronunciation: "no, es-TA tor-SEE-do, no SEER-ve. PE-ro ko-ME, ke no ko-MES na-da",
          literal: "No, it-is bent, not serves. But eat, that not you-eat nothing.",
          why: "“No sirve” again for the ladle; then vos imperatives “comé” and “comés”. The double negative “no comés nada” is normal Spanish, not an error."
        },
        {
          speaker: "Alex",
          target: "Bueno, un poquito más, pero usted me consiente mucho.",
          translation: "Alright, a little more, but you spoil me a lot.",
          pronunciation: "BWE-no, un po-KEE-to mas, PE-ro us-TED me kon-SYEN-te MU-cho",
          literal: "Good, a little more, but you me spoil much.",
          why: "Alex yields — the expected outcome; refusing twice then accepting is the ritual. Note he slips to usted for a beat of extra warmth and respect."
        }
      ],
      vocabulary: [
        {
          term: "servir",
          explanation:
            "Two jobs in one verb: to serve (food, a person) and to be useful or to work.",
          literal: "to serve / to be useful",
          useWhen: "Dishing out food, or asking whether something works or is any use.",
          avoidWhen: "Never, really; just keep the two senses straight by context.",
          register: "neutral",
          region: "Universal Spanish; both senses active across Colombia.",
          related: ["atender", "funcionar", "valer", "servirse"],
          example: {
            target: "Este esfero no sirve.",
            translation: "This pen doesn't work."
          }
        },
        {
          term: "¿le sirvo más?",
          explanation:
            "“Shall I serve you more?” — the ritual offer of seconds at a Colombian table.",
          literal: "shall I serve you more?",
          useWhen: "Offering another helping to a guest, warmly and a little insistently.",
          avoidWhen: "A restaurant, where the server won't press seconds on you.",
          register: "friendly informal",
          region: "General Colombian; vos version “¿te sirvo más?” in Antioquia.",
          related: ["¿querés más?", "¿repite?", "¿un poquito más?", "sírvase"],
          example: {
            target: "¿Le sirvo más arroz?",
            translation: "Shall I serve you more rice?"
          }
        },
        {
          term: "no sirve",
          explanation:
            "“It doesn't work / it's no use” — the second life of servir, nothing to do with food.",
          literal: "it doesn't serve",
          useWhen: "Saying a gadget, tool, or plan is broken or useless.",
          avoidWhen: "Meaning someone isn't serving food — context keeps them apart.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["no funciona", "está dañado", "no vale", "está malo"],
          example: {
            target: "El control no sirve, cambiale las pilas.",
            translation: "The remote doesn't work, change its batteries."
          }
        },
        {
          term: "servirse",
          explanation:
            "To serve oneself / help yourself — the reflexive, and the polite “sírvase” inviting you to dig in.",
          literal: "to serve oneself",
          useWhen: "Inviting someone to help themselves, or doing so yourself.",
          avoidWhen: "A context needing the plain “to work” sense; the reflexive is only about serving.",
          register: "polite",
          region: "Universal Spanish.",
          related: ["sírvase", "coma", "atiéndase", "tome"],
          example: {
            target: "Sírvase, que hay bastante.",
            translation: "Help yourself, there's plenty."
          }
        },
        {
          term: "sancocho",
          explanation:
            "A hearty soup-stew of tubers, plantain, and meat — Sunday food and a paisa institution.",
          literal: "sancocho (stew)",
          useWhen: "Talking about the big weekend soup shared by the family.",
          avoidWhen: "A light or quick meal; sancocho is neither.",
          register: "casual",
          region: "Colombian, with regional versions (gallina, costilla, pescado).",
          related: ["ajiaco", "mondongo", "la sopa", "el caldo"],
          example: {
            target: "El domingo hacemos sancocho.",
            translation: "On Sunday we make sancocho."
          }
        },
        {
          term: "quedar lleno",
          explanation:
            "To end up full — how you signal, gently, that you truly cannot take any more.",
          literal: "to remain full",
          useWhen: "Declining seconds without offending the host.",
          avoidWhen: "A formal dinner where “quedé satisfecho” sounds a touch more polished.",
          register: "friendly informal",
          region: "Universal Spanish.",
          related: ["estar lleno", "quedar satisfecho", "no poder más", "estar a reventar"],
          example: {
            target: "Quedé lleno, muchas gracias.",
            translation: "I'm full, thank you so much."
          }
        },
        {
          term: "consentir",
          explanation:
            "To spoil or indulge someone — what a host does by overfeeding you with love.",
          literal: "to consent / to pamper",
          useWhen: "Naming the affectionate spoiling of a guest or a child.",
          avoidWhen: "Meaning “to consent / agree”, its other, more formal sense.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["mimar", "alcahuetear", "engreír", "malcriar"],
          example: {
            target: "La abuela nos consiente con postre.",
            translation: "Grandma spoils us with dessert."
          }
        }
      ],
      note:
        "“Servir” leads a double life: it's “to serve” (food or a person) and also “to work / be useful” — “este cucharón no sirve” means the ladle is useless, not that it isn't serving lunch. Context keeps them apart. At a Colombian table, expect “¿le sirvo más?” and expect it to be insistent: pressing seconds is affection. The graceful move is to refuse a couple of times, plead “quedé lleno”, then give in to a little more.",
      culture: [
        {
          label: "Seconds are a love language",
          body:
            "At a Colombian family table, and above all a paisa one, feeding you past the point of fullness is how affection is shown. “¿Le sirvo más?” isn't really a question so much as an act of care, and “no, gracias” the first time is heard as politeness, not a real refusal. The expected choreography is to decline once or twice, protest that you're full, and then accept a little more. Clean-plate diplomacy here means letting yourself be fed."
        },
        {
          label: "Vos folds you in",
          body:
            "Antioquia runs on vos, and hearing the family switch to it with you is a small ceremony of acceptance. It can feel jarringly informal to a learner drilled on tú and usted, but answering in cold usted at a Sunday lunch keeps a distance nobody wants. You don't have to conjugate vos perfectly; making the attempt — “¿querés?”, “comé” — tells the family you're glad to be treated as one of them for the afternoon."
        },
        {
          label: "One verb, two lives",
          body:
            "“Servir” means both “to serve” and “to be useful”, and Colombians slide between them without a flicker. “Sírvame más” asks for food; “esto no sirve” condemns a broken charger. The overlap almost never causes confusion because context does all the work, but for a learner the first time you hear “no sirve” about an object it can land oddly. Hold both meanings in your head at once and the verb stops tripping you up."
        },
        {
          label: "Doña plus a name",
          body:
            "Addressing an older woman as “doña” followed by her first name — Doña Miriam — is the Colombian sweet spot between formal and warm. It carries respect without the stiffness of “señora” alone, and it's how you'd speak to a friend's mother, a neighbor, or the lady who runs the corner shop. The masculine “don” works the same way. Using it well is one of the quickest ways to sound courteous and at home."
        }
      ],
      pitfalls: [
        {
          mistake: "Taking the first “no, gracias” as final",
          whyItFails:
            "To a host, one refusal reads as mere politeness; not pressing again would feel cold to them, and giving up too fast can even seem sulky.",
          sayInstead: "Play the ritual: “Ya quedé lleno, pero bueno, un poquito.”"
        },
        {
          mistake: "Hearing “no sirve” as “isn't serving food”",
          whyItFails:
            "“No sirve” almost always means “doesn't work / is useless”; misreading it as being about food leaves you baffled by half the sentences it appears in.",
          sayInstead: "Understand “no sirve” as “it's broken / no good”."
        },
        {
          mistake: "Refusing seconds flatly to be polite",
          whyItFails:
            "A hard “no” can deflate a host who feeds people to show love; bluntness where warmth is expected reads as a rejection of the hospitality.",
          sayInstead: "Suaviza: “Está delicioso, pero de verdad no puedo más.”"
        },
        {
          mistake: "Using stiff usted with the whole paisa family",
          whyItFails:
            "When they've offered you vos, clinging to formal usted holds them at arm's length and can seem standoffish at an intimate table.",
          sayInstead: "Devuélveles el vos: “¿Vos hiciste el sancocho?”"
        }
      ],
      variations: [
        {
          form: "¿Le sirvo más?",
          register: "polite",
          region: "General Colombian",
          whenToUse: "Offering seconds politely, usted-style."
        },
        {
          form: "¿Te sirvo más?",
          register: "friendly informal",
          region: "Colombian, tú regions",
          whenToUse: "The same offer, warm and informal."
        },
        {
          form: "¿Querés más?",
          register: "casual",
          region: "Antioquia / paisa, vos",
          whenToUse: "Offering more, paisa vos, very familiar."
        },
        {
          form: "Sírvase, que hay bastante.",
          register: "polite",
          region: "Universal Spanish",
          whenToUse: "Inviting a guest to help themselves."
        },
        {
          form: "¿Repite?",
          register: "casual",
          region: "Colombian informal",
          whenToUse: "A quick, casual “want a refill / second round?”."
        }
      ],
      prompt: "Doña Miriam says the bent ladle “no sirve”. What does she mean?",
      choices: [
        "That the ladle is not currently being used to serve the sancocho at this precise moment.",
        "That the ladle is useless — “no sirve” is the “doesn't work” sense of servir.",
        "That she flatly refuses to serve Alex any more food using that one particular ladle."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "The first time you're offered seconds you're genuinely full. What's the socially expected move?",
          choices: [
            "Snap “no” firmly and push the plate away so the host clearly sees that you are completely done.",
            "Silently accept the second helping every single time so that you never once risk offending the host.",
            "Decline gently once or twice, say you're full, then give in to a little more."
          ],
          answer: 2,
          tests: "the ritual refusal-then-accept of seconds"
        },
        {
          prompt: "Why does the family use “vos” with Alex almost immediately?",
          choices: [
            "Because in paisa Antioquia vos is the warm, everyday form, and using it folds a guest in.",
            "Because they consider Alex a small child and vos is the form reserved strictly for children.",
            "Because vos is a rude, distancing form and they want to keep the foreigner at arm's length."
          ],
          answer: 0,
          tests: "vos as paisa warmth, not disrespect"
        },
        {
          prompt: "Which sentence uses “servir” in its “to be useful / to work” sense?",
          choices: [
            "¿Le sirvo un poquito más de ese sancocho tan rico que hizo hoy?",
            "Este cargador ya no sirve, toca comprar otro de una vez.",
            "Sírvase usted mismo, que en esta casa hay comida de sobra."
          ],
          answer: 1,
          tests: "servir in its 'to work / be useful' sense"
        },
        {
          prompt: "A Colombian host keeps pressing food on you. The pressure mostly signals…",
          choices: [
            "Affection and hospitality — overfeeding a guest is a recognized way of showing care.",
            "Impatience that you are eating far too slowly and really should hurry up and finish now.",
            "A subtle hint that food is scarce and that they need you to leave the table quite quickly."
          ],
          answer: 0,
          tests: "pressed seconds as affection"
        }
      ]
    },
    en: {
      title: "Repetir en una cena familiar del domingo",
      situation:
        "Es domingo y usted está en la cena familiar de una amiga en Norteamérica. La tía Carol le sirve pavo y, apenas ve el plato medio vacío, le ofrece más. Aquí descubre que el inglés parte en dos lo que el español junta en “servir”: “serve” para la comida y “work” para si algo funciona. Y la presión cariñosa de repetir también existe, pero se nota distinta.",
      setting: {
        who: "Alejandra, invitada a la cena dominical de una amiga, y la tía Carol, la anfitriona que mide el cariño en porciones.",
        what: "Una cena de domingo con pavo donde rechazar la segunda porción es la verdadera prueba, y donde “servir” se dice de dos maneras distintas.",
        when: "Domingo, temprano en la noche, la cena larga que reúne a la familia.",
        where: "En una casa de Norteamérica, alrededor de una mesa familiar.",
        why: "Porque la van a servir y a presionar para que repita, un ritual de hospitalidad, y porque el inglés no tiene un solo “servir”: usa “serve” para la comida y “work” para lo que funciona, y confundirlos delata al que aprende."
      },
      address: {
        form: "mixed",
        who: "Alejandra y la tía Carol se hablan con confianza, pero el inglés no marca la cercanía con el pronombre: siempre es “you”.",
        why: "El inglés no tiene tú ni usted: la cercanía se lleva en el tono, en el nombre de pila y en apodos cariñosos como “honey”, no en el pronombre.",
        ifYouSwitch:
          "No puede subir la formalidad cambiando el pronombre; lo que cambia es el registro léxico: “gimme more” es muy campechano, “could I have a bit more?” es cortés."
      },
      dialogue: [
        {
          speaker: "Aunt Carol",
          target: "Come on in, honey, have a seat! I'll serve you some turkey.",
          translation: "¡Entra, mi amor, siéntate! Ya te sirvo pavo.",
          pronunciation: "kam on in, JA-ni, jav a sit! ail serv yu som TER-ki",
          literal: "Ven adentro, cariño, ten un asiento. Yo te serviré algo de pavo.",
          why: "“Serve” aquí es la comida, el sentido literal. “Honey” es un apodo cariñoso normal de una mujer mayor hacia alguien más joven; no tiene nada de romántico."
        },
        {
          speaker: "Alejandra",
          target: "Thank you, Carol. It smells amazing.",
          translation: "Gracias, Carol. Huele delicioso.",
          pronunciation: "zenk yu, KA-rol. it smels a-MEI-sing",
          literal: "Gracias, Carol. Huele asombroso.",
          why: "En inglés a una tía política o a la mamá de una amiga se le suele decir por el nombre de pila, sin “doña” ni “señora”; el nombre solo no es una falta de respeto."
        },
        {
          speaker: "Aunt Carol",
          target: "Want some more? Let me give you a bit — you barely ate.",
          translation: "¿Quieres más? Déjame darte un poquito, casi no comiste.",
          pronunciation: "want som mor? let mi guiv yu a bit — yu BER-li eit",
          literal: "¿Quieres algo más? Déjame darte un poquito, apenas comiste.",
          why: "“Want some more?” es la oferta típica de repetir. Fíjese que aquí no dice “serve you more”: para ofrecer otra porción el inglés prefiere “give you” o “get you”."
        },
        {
          speaker: "Alejandra",
          target: "I'm really full, thanks. Does that carving knife not work?",
          translation: "Estoy bien llena, gracias. ¿Ese cuchillo de trinchar no sirve?",
          pronunciation: "aim RI-li ful, zenks. dos dat KAR-ving naif not werk",
          literal: "Estoy muy llena, gracias. ¿Ese cuchillo de trinchar no funciona?",
          why: "Aquí está el punto: el “no sirve” del español se dice “not work”, no “not serve”. El inglés usa “work” para lo que funciona; “serve” jamás cubre ese sentido."
        },
        {
          speaker: "Aunt Carol",
          target: "No, it's too dull, it doesn't work. But eat, you're all skin and bones!",
          translation: "No, está muy desafilado, no sirve. ¡Pero come, estás en los huesos!",
          pronunciation: "nou, its tu dol, it DA-sent werk. bat it, yur ol skin and bouns",
          literal: "No, está muy romo, no funciona. Pero come, eres toda piel y huesos.",
          why: "“Doesn't work” otra vez para el cuchillo. “All skin and bones” es el equivalente hecho de “estar muy flaco”; el inglés lo dice con una frase fija, no con una palabra."
        },
        {
          speaker: "Alejandra",
          target: "Alright, just a little, but you're spoiling me.",
          translation: "Bueno, solo un poquito, pero me estás consintiendo.",
          pronunciation: "ol-RAIT, yost a LI-tel, bat yur SPOI-ling mi",
          literal: "Está bien, solo un poco, pero me estás malcriando.",
          why: "Alejandra cede, el desenlace esperado. “To spoil someone” es “consentir / malcriar”; el mismo verbo también significa “dañarse” una comida, según el contexto."
        }
      ],
      vocabulary: [
        {
          term: "to serve",
          explanation:
            "Servir comida o atender a alguien. Ojo: en inglés “serve” es SOLO este sentido; nunca significa “funcionar”.",
          literal: "servir (comida)",
          useWhen: "Repartir comida o atender a un cliente o invitado.",
          avoidWhen: "Querer decir que algo funciona o es útil; eso es “to work”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["to dish out", "to serve up", "to help (someone) to", "to wait on"],
          example: {
            target: "Let me serve you some rice.",
            translation: "Deja que te sirva un poco de arroz."
          }
        },
        {
          term: "to work",
          explanation:
            "Funcionar, servir para algo. Este es el “servir” de “esto no sirve”, que en inglés es otro verbo.",
          literal: "funcionar / servir (ser útil)",
          useWhen: "Decir que un aparato, plan o herramienta funciona o no.",
          avoidWhen: "Hablar de servir comida; ahí es “to serve”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["to function", "to run", "to be any good", "to do the trick"],
          example: {
            target: "This charger doesn't work.",
            translation: "Este cargador no sirve."
          }
        },
        {
          term: "want some more?",
          explanation:
            "La oferta cotidiana de repetir en una mesa; el equivalente de “¿le sirvo más?”.",
          literal: "¿quieres un poco más?",
          useWhen: "Ofrecer otra porción a un invitado con confianza.",
          avoidWhen: "Un contexto muy formal, donde va mejor “would you like some more?”.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["would you like some more?", "seconds?", "a bit more?", "help yourself"],
          example: {
            target: "Want some more mashed potatoes?",
            translation: "¿Quieres más puré?"
          }
        },
        {
          term: "to help yourself",
          explanation:
            "Servirse uno mismo; “help yourself” es la invitación a que tome lo que quiera.",
          literal: "servirse (uno mismo)",
          useWhen: "Invitar a alguien a que se sirva a su gusto.",
          avoidWhen: "Pedirle a alguien que le sirva a usted; ahí no encaja.",
          register: "cortés",
          region: "Inglés universal.",
          related: ["help yourself", "dig in", "go ahead", "take as much as you like"],
          example: {
            target: "Help yourself, there's plenty.",
            translation: "Sírvete, que hay bastante."
          }
        },
        {
          term: "to spoil (someone)",
          explanation:
            "Consentir o malcriar a alguien. El mismo verbo significa también “dañarse” la comida, según el contexto.",
          literal: "consentir / malcriar",
          useWhen: "Nombrar el consentir cariñoso de un anfitrión o a un niño.",
          avoidWhen: "Con comida, “spoil” pasa a ser “echarse a perder”; cuidado con el contexto.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["to pamper", "to indulge", "to treat", "to go easy on"],
          example: {
            target: "Grandma spoils us with dessert.",
            translation: "La abuela nos consiente con postre."
          }
        },
        {
          term: "to be full",
          explanation:
            "Estar lleno; la forma amable de rechazar más comida sin ofender.",
          literal: "estar lleno",
          useWhen: "Declinar otra porción con cortesía.",
          avoidWhen: "Nada; “I'm full” es seguro. “I'm stuffed” es más coloquial.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["I'm stuffed", "I've had plenty", "I couldn't eat another bite", "I'm good"],
          example: {
            target: "No thanks, I'm full.",
            translation: "No gracias, estoy lleno."
          }
        },
        {
          term: "turkey",
          explanation:
            "El pavo, el plato central de muchas cenas familiares de fin de semana o de fiesta.",
          literal: "pavo",
          useWhen: "Hablar del plato principal de una cena grande.",
          avoidWhen: "Un almuerzo ligero o rápido; el pavo es comida de reunión.",
          register: "neutro",
          region: "Inglés universal; central en Thanksgiving en EE. UU..",
          related: ["roast", "stuffing", "gravy", "ham"],
          example: {
            target: "We're having turkey on Sunday.",
            translation: "El domingo comemos pavo."
          }
        }
      ],
      note:
        "El inglés parte en dos lo que el español junta en “servir”: “serve” es solo servir comida o atender, y “work” es funcionar o ser útil. Su “el cucharón no sirve” es “the ladle doesn't work”, nunca “doesn't serve”. Y otra sutileza: para ofrecer repetir, el inglés prefiere “want some more?” o “can I get you more?” antes que “serve you more”. En la mesa la insistencia existe, pero es más suave que la colombiana; un “I'm full, thanks” sincero se respeta.",
      culture: [
        {
          label: "Repetir sin tanta insistencia",
          body:
            "En una mesa norteamericana ofrecer más comida es cariñoso, pero la insistencia suele parar antes que en Colombia. Un “I'm full, thanks” dicho en serio se acepta casi siempre a la primera, sin el forcejeo ritual de rechazar dos o tres veces. Para quien viene de la costumbre colombiana esto puede sentirse casi frío, pero no lo es: es otra manera de respetar al invitado. Si de verdad quiere más, conviene decirlo, porque quizá no se lo vuelvan a ofrecer."
        },
        {
          label: "El inglés parte “servir” en dos",
          body:
            "Donde el español usa un solo “servir”, el inglés obliga a elegir: “serve” para la comida y “work” para lo que funciona. “Sírveme más” es “serve me more”, pero “esto no sirve” es “this doesn't work”, jamás “this doesn't serve”. Es uno de los errores más delatores del hispanohablante, porque “serve” se parece tanto a “servir” que la mano lo escribe sola. Vale la pena fijar la pareja: comida es “serve”, funcionar es “work”."
        },
        {
          label: "La calidez no está en el pronombre",
          body:
            "El inglés no tiene tú ni usted, así que la cercanía de la tía Carol no se ve en un pronombre sino en el nombre de pila, en apodos como “honey” o “sweetie” y en el tono. Un hispanohablante puede echar de menos esa marca y sonar distante sin querer. La solución no es buscar un “tú” inexistente, sino soltarse con el nombre y con las fórmulas cálidas — “come on in”, “have a seat” — que hacen el mismo trabajo que el tuteo."
        },
        {
          label: "“Doña” no se traduce",
          body:
            "En Colombia diría “doña Carol”, pero en inglés ese puente entre respeto y cariño no existe. A la mamá de una amiga o a una tía política se les dice por el nombre de pila a secas, y eso no es una falta de respeto sino lo normal. Los títulos “Mr.” y “Mrs.” con apellido suenan formales y hasta escolares en una cena familiar. Acostumbrarse a llamar “Carol” a una señora mayor es parte de sonar natural en inglés."
        }
      ],
      pitfalls: [
        {
          mistake: "“This charger doesn't serve.”",
          whyItFails:
            "Calca “no sirve” con “serve”, pero en inglés “serve” es solo servir comida; para “funcionar” se dice “work”.",
          sayInstead: "This charger doesn't work."
        },
        {
          mistake: "“Do you want that I serve you more?”",
          whyItFails:
            "Traduce literal “¿quieres que te sirva más?” con una subordinada que el inglés no arma así; suena forzado.",
          sayInstead: "Can I get you some more?"
        },
        {
          mistake: "“No, I am satisfied.”",
          whyItFails:
            "“Satisfied” para rechazar comida suena raro y hasta pomposo; el inglés dice “full”.",
          sayInstead: "No thanks, I'm full."
        },
        {
          mistake: "“Serve yourself, please.”",
          whyItFails:
            "Para invitar a servirse, el inglés usa la frase hecha “help yourself”; “serve yourself” no es lo natural.",
          sayInstead: "Help yourself, please."
        }
      ],
      variations: [
        {
          form: "Want some more?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Ofrecer repetir con confianza."
        },
        {
          form: "Would you like some more?",
          register: "cortés",
          region: "Inglés universal",
          whenToUse: "La misma oferta, más cortés."
        },
        {
          form: "Help yourself.",
          register: "cortés",
          region: "Inglés universal",
          whenToUse: "Invitar a alguien a servirse a su gusto."
        },
        {
          form: "It doesn't work.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Decir que algo no sirve o no funciona."
        },
        {
          form: "I'm stuffed.",
          register: "casual",
          region: "Inglés universal informal",
          whenToUse: "Decir que ya no puede más, muy coloquial."
        }
      ],
      prompt: "Alejandra quiere decir que el cuchillo “no sirve”. ¿Cuál es la forma correcta en inglés?",
      choices: [
        "The knife doesn't serve, porque “serve” es el equivalente directo del verbo español “servir”.",
        "The knife doesn't work, porque en inglés “work” es el verbo para lo que funciona o es útil.",
        "The knife isn't serving, porque el presente continuo expresa que el cuchillo no está en uso."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "En una cena norteamericana usted dice en serio “I'm full, thanks”. ¿Qué suele pasar?",
          choices: [
            "El anfitrión insiste tres o cuatro veces más, esperando el forcejeo ritual típico de una mesa colombiana.",
            "El anfitrión se ofende profundamente y retira su plato de inmediato sin volver a dirigirle la palabra.",
            "El anfitrión suele aceptarlo a la primera; la insistencia es más suave que en Colombia."
          ],
          answer: 2,
          tests: "la insistencia norteamericana para en el primer no"
        },
        {
          prompt: "¿Cuál oración usa bien el reparto inglés entre “serve” y “work”?",
          choices: [
            "Let me serve you some turkey, and don't worry, the oven works perfectly now.",
            "Let me work you some turkey, and don't worry, the oven serves perfectly now.",
            "Let me serve you some turkey, and don't worry, the oven serves perfectly now."
          ],
          answer: 0,
          tests: "serve para comida, work para funcionar"
        },
        {
          prompt: "La tía Carol le dice “honey” a Alejandra. ¿Cómo debe interpretarlo?",
          choices: [
            "Como un apodo cariñoso normal de una mujer mayor; no tiene ninguna carga romántica.",
            "Como una falta de respeto, porque en inglés no se debe usar apodos con los invitados.",
            "Como una señal de que la tía la confunde con otra persona y no recuerda bien su nombre."
          ],
          answer: 0,
          tests: "“honey” como apodo cariñoso, no romántico"
        },
        {
          prompt: "Un anfitrión insiste con cariño en que usted repita. En Norteamérica eso significa…",
          choices: [
            "Afecto y hospitalidad, aunque expresado con menos insistencia que en una mesa colombiana.",
            "Que está molesto porque usted come demasiado despacio y quiere que termine pronto de una vez.",
            "Una indirecta de que la comida escasea y de que preferirían que usted se fuera rápido."
          ],
          answer: 0,
          tests: "repetir ofrecido como afecto, más suave"
        }
      ]
    }
  },
  {
    id: "dropping-in-on-a-costeno-aunt",
    level: "Starter · Home and neighborhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "familiar",
    pathways: ["foundation"],
    verb: "comer",
    review: "pending",
    es: {
      title: "Dropping in on an aunt on the coast",
      situation:
        "You are visiting Barranquilla and drop by the home of a coastal aunt without warning. Before any long greeting, the first thing she does is ask whether you have eaten - which on the Coast is pure affection, not a literal question. You will see comer in its element: “¿ya comiste?” as a way to show care, eating something with real appetite, and one meaning of comer worth recognizing.",
      setting: {
        who: "Alex, dropping in on a friend's aunt, and Tía Nubia, a warm coastal aunt for whom feeding you is greeting you.",
        what: "An unannounced visit that turns, within seconds, into being fed an arepa de huevo whether you're hungry or not.",
        when: "A weekday afternoon on the Caribbean coast, in the heat.",
        where: "A home in Barranquilla, Atlántico, on Colombia's Costa Caribe.",
        why: "Because “¿ya comiste?” is one of the first things you'll hear in any Colombian home, and reading it as care rather than a yes/no question is the whole lesson — plus the useful reflexive “comerse”."
      },
      address: {
        form: "tú",
        who: "Tía Nubia uses tú with Alex from the first breath, the easy coastal default that skips formality entirely.",
        why: "On the Caribbean coast people tutean almost everyone, warmly and fast; usted can even sound cold or distancing in casual family talk here.",
        ifYouSwitch:
          "Answering Tía Nubia in careful usted would feel oddly stiff on the coast; matching her tú, and her energy, is what marks you as at home rather than a formal guest."
      },
      dialogue: [
        {
          speaker: "Tía Nubia",
          target: "¡Ajá, mi amor, llegaste! ¿Ya comiste?",
          translation: "Hey, sweetheart, you made it! Have you eaten?",
          pronunciation: "a-HA, mi a-MOR, ye-GAS-te! ya ko-MEES-te",
          literal: "Aha, my love, you-arrived! Already you-ate?",
          why: "“Ajá” is the quintessential coastal opener, warm not rude. “¿Ya comiste?” lands before any real greeting — on the coast, feeding you is the greeting."
        },
        {
          speaker: "Alex",
          target: "Hola, tía. Comí algo por ahí, pero no mucho.",
          translation: "Hi, auntie. I ate something out, but not much.",
          pronunciation: "O-la, TEE-a. ko-MEE AL-go por ai, PE-ro no MU-cho",
          literal: "Hello, aunt. I-ate something around there, but not much.",
          why: "Calling a friend's aunt “tía” even without blood ties is normal Colombian warmth. “Comí” is plain preterite — a finished action, ate."
        },
        {
          speaker: "Tía Nubia",
          target: "¡Nada que ver! Te vas a comer una arepa de huevo.",
          translation: "No way! You're going to eat an arepa de huevo.",
          pronunciation: "NA-da ke ver! te vas a ko-MER U-na a-RE-pa de WE-vo",
          literal: "Nothing to see! You go to eat-yourself an arepa of egg.",
          why: "“Nada que ver” = “no way / not a chance”. Here comes “comerse”: “te vas a comer” — the reflexive adds relish, eating it right up."
        },
        {
          speaker: "Alex",
          target: "De una, tía. Eso sí me lo como con gusto.",
          translation: "Absolutely, auntie. That I'll gladly eat.",
          pronunciation: "de U-na, TEE-a. E-so si me lo KO-mo kon GUS-to",
          literal: "Of one, aunt. That yes to-me it I-eat with pleasure.",
          why: "“De una” is very Colombian for “right away / for sure”. “Me lo como” is “comerse” again — the reflexive makes eating it sound eager and complete."
        },
        {
          speaker: "Tía Nubia",
          target: "Así me gusta. Come, mijo, que estás en tu casa.",
          translation: "That's how I like it. Eat, dear, you're at home.",
          pronunciation: "a-SEE me GUS-ta. KO-me, MEE-ho, ke es-TAS en tu KA-sa",
          literal: "So to-me it-pleases. Eat, my-son, that you-are in your house.",
          why: "“Come” is the plain tú imperative. “Estás en tu casa” is the standard warm formula that makes a guest family — make yourself at home."
        },
        {
          speaker: "Alex",
          target: "Gracias, tía. Aquí uno come sabroso de verdad.",
          translation: "Thanks, auntie. You really eat well here.",
          pronunciation: "GRA-syas, TEE-a. a-KEE U-no KO-me sa-BRO-so de ver-DAD",
          literal: "Thanks, aunt. Here one eats tasty of truth.",
          why: "Impersonal “uno” (“one / you”) generalises the experience. “Sabroso” on the coast means tasty but also good, pleasurable — a whole way of living."
        }
      ],
      vocabulary: [
        {
          term: "comer",
          explanation:
            "The everyday verb “to eat”. Regular and constant; the backbone of every food conversation.",
          literal: "to eat",
          useWhen: "Any talk of eating, meals, or being fed.",
          avoidWhen: "In some contexts it carries a vulgar slang sense; keep it on food and you're safe.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["almorzar", "cenar", "desayunar", "comerse"],
          example: {
            target: "¿A qué horas comemos?",
            translation: "What time do we eat?"
          }
        },
        {
          term: "¿ya comiste?",
          explanation:
            "“Have you eaten yet?” — but really a greeting and an act of care, not a literal question.",
          literal: "did you already eat?",
          useWhen: "Greeting someone warmly, especially at home; expect food to follow.",
          avoidWhen: "Taking it as a plain yes/no; the honest answer often gets you fed anyway.",
          register: "friendly informal",
          region: "General Colombian; especially warm on the Costa.",
          related: ["¿ya almorzaste?", "¿tienes hambre?", "¿comiste algo?", "¿ya cenaste?"],
          example: {
            target: "Mija, ¿ya comiste?",
            translation: "Sweetie, have you eaten?"
          }
        },
        {
          term: "comerse",
          explanation:
            "Reflexive “to eat up”. The “se” adds relish and completion — eating the whole thing with gusto.",
          literal: "to eat oneself (up)",
          useWhen: "Eating something specific, eagerly and entirely.",
          avoidWhen: "General, unfocused eating; plain “comer” fits that better.",
          register: "friendly informal",
          region: "Universal Spanish.",
          related: ["comer", "tragarse", "devorar", "acabarse"],
          example: {
            target: "Se comió toda la bandeja.",
            translation: "He ate the whole platter."
          }
        },
        {
          term: "arepa de huevo",
          explanation:
            "A coastal arepa fried with a whole egg inside — a Barranquilla street-food icon.",
          literal: "arepa of egg",
          useWhen: "Talking about coastal breakfast or street snacks.",
          avoidWhen: "Assuming it's like a highland arepa; the costeña is its own thing.",
          register: "casual",
          region: "Costa Caribe (Atlántico, Bolívar, Córdoba, Sucre).",
          related: ["arepa", "carimañola", "buñuelo", "empanada"],
          example: {
            target: "En la esquina venden arepa de huevo.",
            translation: "They sell arepa de huevo on the corner."
          }
        },
        {
          term: "sabroso",
          explanation:
            "Tasty — but on the coast also pleasurable, easy, good; a whole attitude to life.",
          literal: "tasty / pleasant",
          useWhen: "Praising food, or more broadly anything enjoyable and relaxed.",
          avoidWhen: "Formal writing, where it sounds too colloquial.",
          register: "friendly informal",
          region: "General Colombian; extra-loaded on the Costa.",
          related: ["rico", "delicioso", "bueno", "chévere"],
          example: {
            target: "Se vive sabroso en la Costa.",
            translation: "Life is good on the coast."
          }
        },
        {
          term: "mijo / mija",
          explanation:
            "Contraction of “mi hijo / mi hija”; a warm term of address to almost anyone younger.",
          literal: "my son / my daughter",
          useWhen: "Speaking affectionately to someone younger or dear.",
          avoidWhen: "A formal or professional setting with someone you don't know.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["mi amor", "mijito", "papi", "corazón"],
          example: {
            target: "Coma, mija, que hay bastante.",
            translation: "Eat, dear, there's plenty."
          }
        },
        {
          term: "estar en tu casa",
          explanation:
            "“To be at home” — the fixed formula that turns a guest into family, told to make you relax.",
          literal: "to be in your house",
          useWhen: "Making a visitor feel welcome and free to relax.",
          avoidWhen: "Literally describing where someone lives; this is the hospitality sense.",
          register: "friendly informal",
          region: "Universal Spanish.",
          related: ["siéntete en casa", "estás en tu casa", "ponte cómodo", "como en casa"],
          example: {
            target: "Estás en tu casa, sírvete lo que quieras.",
            translation: "Make yourself at home, help yourself to anything."
          }
        }
      ],
      note:
        "“¿Ya comiste?” is rarely a real question — it's a greeting and a way of caring, and honesty (“comí poquito”) often just gets you fed. Two moves matter here: “comerse” (with “se”) means to eat something up with relish and completion, richer than plain “comer”; and “sabroso” on the coast stretches from tasty food to a whole easy way of living. One caution: “comer” can carry a vulgar slang sense in some contexts, so keep it anchored to food and you'll never stumble.",
      culture: [
        {
          label: "“Have you eaten?” means “I care”",
          body:
            "In Colombian homes “¿ya comiste?” works less as a question than as a greeting, a way of saying “I want to look after you”. Answering “no” all but guarantees a plate; answering “yes” often gets you fed anyway. Reading it literally — and declining flatly — misses the warmth entirely. The graceful response is to receive the care: accept a little something, or at least acknowledge the gesture. On the coast especially, feeding a visitor is how affection is spoken."
        },
        {
          label: "The coast tutea everyone",
          body:
            "On the Caribbean coast people reach for tú fast and warmly, with almost anyone, and hearing it from an aunt you've just met is not forwardness but friendliness. This surprises learners who've been drilled to default to usted for respect. Here, over-formal usted in casual family talk can even feel cold and distancing. Matching the coastal tú — and the loud, affectionate energy that comes with it — is what marks you as at ease rather than a stiff, formal guest."
        },
        {
          label: "“Sabroso” is a way of life",
          body:
            "“Sabroso” starts as “tasty” but on the coast it swells to cover anything pleasurable, easy, and good: a breeze can be sabroso, a lazy afternoon, a life well lived — “se vive sabroso”. It captures a costeño ideal of enjoyment and ease that a single English word can't hold. When Alex says food is sabroso, he's brushing against a whole outlook, not just praising the arepa. Learning to feel that stretch of meaning is learning the coast itself."
        },
        {
          label: "A word to recognize, not use",
          body:
            "“Comer” is innocent on food, but in some slang registers it takes on a crude sexual sense, much as English verbs sometimes do. This isn't a reason to fear the word — “¿ya comiste?” is wholesome and constant — but a learner should recognize that a snigger over “comerse a alguien” has nothing to do with dinner. Keep “comer” anchored to food and you'll never trip; just don't be baffled if it raises an eyebrow in the wrong company."
        }
      ],
      pitfalls: [
        {
          mistake: "Answering “¿ya comiste?” with a flat yes or no",
          whyItFails:
            "It's a warm greeting, not a survey; a curt yes/no can miss the care being offered and cut the warmth short.",
          sayInstead: "Comí poquito, pero me provoca algo tuyo, tía."
        },
        {
          mistake: "Using “comer” where “comerse” fits",
          whyItFails:
            "For eating a specific thing up with relish, dropping the reflexive flattens the sense; “me como la arepa” has gusto “como la arepa” lacks.",
          sayInstead: "Me voy a comer toda la arepa."
        },
        {
          mistake: "Defaulting to formal usted on the coast",
          whyItFails:
            "In casual costeño family talk, stiff usted reads as cold; the coast tutea warmly and expects the same back.",
          sayInstead: "Tía, ¿tú hiciste esta arepa? ¡Está buenísima!"
        },
        {
          mistake: "Assuming “sabroso” only describes food",
          whyItFails:
            "On the coast it stretches to weather, rest, and life itself; hearing it only as “tasty” misses half of what people mean.",
          sayInstead: "Aquí se vive sabroso, tía."
        }
      ],
      variations: [
        {
          form: "¿Ya comiste?",
          register: "friendly informal",
          region: "General Colombian, tú",
          whenToUse: "The warm everyday greeting-question."
        },
        {
          form: "¿Ya comió?",
          register: "polite",
          region: "Andean Colombia, usted",
          whenToUse: "The same care, in respectful usted."
        },
        {
          form: "¿Ya almorzaste?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Specifically about lunch, midday."
        },
        {
          form: "Come, que se enfría.",
          register: "casual",
          region: "Universal Spanish",
          whenToUse: "Nudging someone to eat before it gets cold."
        },
        {
          form: "Comé, mijo.",
          register: "casual",
          region: "Paisa / vos regions",
          whenToUse: "The same nudge in vos, elsewhere in Colombia."
        }
      ],
      prompt: "When Tía Nubia opens with “¿ya comiste?”, what is she really doing?",
      choices: [
        "Warmly greeting Alex and offering care — feeding a visitor is how she says hello and shows affection.",
        "Running strictly through a literal yes-or-no checklist before she decides whether to let Alex come inside.",
        "Complaining, in a roundabout and indirect way, that Alex has arrived at an inconvenient hour to visit her."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses “comerse” to mean eating something up with relish?",
          choices: [
            "Nosotros comemos a las doce en punto todos los días de la semana sin falta.",
            "En esa región de Colombia se come muchísimo pescado fresco durante todo el año.",
            "Se comió toda la bandeja paisa él solo y todavía quedó con ganas de postre."
          ],
          answer: 2,
          tests: "comerse for eating something up with gusto"
        },
        {
          prompt: "Tía Nubia uses tú the moment Alex arrives. On the coast, that signals…",
          choices: [
            "Disrespect, because on the Caribbean coast tú is reserved strictly for scolding misbehaving children.",
            "Warmth and closeness — the coast tutea almost everyone, and it folds a visitor in as family.",
            "That she has mistaken Alex for a very old and close friend she has not managed to see in years."
          ],
          answer: 1,
          tests: "coastal tú as warmth, not disrespect"
        },
        {
          prompt: "On the coast, someone says “se vive sabroso aquí”. What does “sabroso” cover here?",
          choices: [
            "Only that the local food is tasty; the phrase can't stretch beyond describing meals and flavors.",
            "That the area is dangerously spicy, so “sabroso” is really warning you about the heat of the food.",
            "A whole easy, pleasurable way of living — on the coast “sabroso” reaches well beyond food."
          ],
          answer: 2,
          tests: "sabroso stretching beyond food on the coast"
        },
        {
          prompt: "Why should a learner recognize “comer” has a vulgar slang sense in some contexts?",
          choices: [
            "So they stop using “comer” for food entirely and only ever say “almorzar” or “cenar” instead.",
            "So they aren't thrown when it raises an eyebrow, while keeping “comer” safely anchored to food.",
            "Because the vulgar sense is actually the most common everyday meaning of the verb across Colombia."
          ],
          answer: 1,
          tests: "recognizing comer's slang sense without avoiding the verb"
        }
      ]
    },
    en: {
      title: "Caer donde una amiga a la hora de la cena",
      situation:
        "Usted llega sin avisar a la casa de una amiga en Estados Unidos, justo a la hora de la cena. Lo primero que ella hace es preguntarle si ya comió — pero en inglés “did you eat?” pesa menos que el “¿ya comiste?” colombiano: es más literal y menos ritual. Aquí verá comer en inglés: “did you eat?” como gesto de cariño más sobrio, el útil “eat up”, y un aviso sobre un sentido de “eat” que conviene reconocer.",
      setting: {
        who: "Alejandra, que cae sin avisar donde una amiga, y Emily, una amiga estadounidense que la recibe con cariño.",
        what: "Una visita sin anunciar que, en cuestión de segundos, se convierte en quedarse a comer algo de verdad.",
        when: "Una tarde entre semana, a la hora de la cena, en el frío.",
        where: "En una casa de Estados Unidos, en la cocina.",
        why: "Porque “did you eat?” es de las primeras cosas que oirá en una casa, y entender que en inglés pesa menos y es más literal que el “¿ya comiste?” colombiano es media lección; la otra media es el reflexivo inglés “eat up”."
      },
      address: {
        form: "mixed",
        who: "Alejandra y Emily se hablan con confianza, pero el inglés no marca la cercanía con el pronombre: siempre es “you”.",
        why: "El inglés no tiene tú ni usted: la cercanía se lleva en el nombre, en el tono y en frases cálidas — “come on in”, “make yourself at home” —, no en el pronombre.",
        ifYouSwitch:
          "No hay un “tú” inglés que soltar para sonar más cercana; lo que cambia es el registro léxico y el tono: “make yourself at home” hace el trabajo que en español haría el tuteo."
      },
      dialogue: [
        {
          speaker: "Emily",
          target: "Hey, you made it! Did you eat?",
          translation: "¡Hola, llegaste! ¿Ya comiste?",
          pronunciation: "jei, yu meid it! did yu it",
          literal: "Hola, lo lograste. ¿Comiste?",
          why: "“You made it” es “llegaste / lo lograste”, un saludo cálido. “Did you eat?” es afectuoso, pero más literal que el “¿ya comiste?” colombiano: espera de verdad una respuesta."
        },
        {
          speaker: "Alejandra",
          target: "Hi! I grabbed something, but not much.",
          translation: "¡Hola! Piqué algo, pero no mucho.",
          pronunciation: "jai! ai grabd SOM-zing, bat not moch",
          literal: "Hola. Agarré algo, pero no mucho.",
          why: "“To grab something” es comer algo rápido, picar. El inglés usa mucho “grab” para comidas informales — “grab a bite”, “grab a coffee”."
        },
        {
          speaker: "Emily",
          target: "No way — come on, you're going to eat something real.",
          translation: "¡Nada que ver! Ven, te vas a comer algo de verdad.",
          pronunciation: "nou wei — kam on, yur GO-ing tu it SOM-zing ril",
          literal: "De ninguna manera, ven, vas a comer algo real.",
          why: "“No way” es “¡nada que ver! / ¡ni de riesgo!”. “Something real” = comida de verdad, no un picoteo; “come on” aquí anima, no reprocha."
        },
        {
          speaker: "Alejandra",
          target: "Alright! I'll happily eat that up.",
          translation: "¡Listo! Eso me lo como con gusto.",
          pronunciation: "ol-RAIT! ail JA-pi-li it dat ap",
          literal: "Está bien. Con gusto me comeré eso.",
          why: "Aquí está el punto: el inglés SÍ tiene un equivalente de “comerse”. “Eat up” — con “up” — añade la idea de acabárselo, igual que el “se” de “me lo como”."
        },
        {
          speaker: "Emily",
          target: "That's the spirit. Eat, make yourself at home.",
          translation: "Así se habla. Come, siéntete como en casa.",
          pronunciation: "dats de SPI-rit. it, meik yor-SELF at joum",
          literal: "Ese es el espíritu. Come, haz a ti misma en casa.",
          why: "“Make yourself at home” es el calco funcional de “estás en tu casa”. Fíjese que es “at home”, con “at”; “in home” es un error típico."
        },
        {
          speaker: "Alejandra",
          target: "Thanks, Emily. You really eat well here.",
          translation: "Gracias, Emily. Aquí de verdad se come bien.",
          pronunciation: "zenks, E-mi-li. yu RI-li it wel jir",
          literal: "Gracias, Emily. Tú realmente comes bien aquí.",
          why: "Ese “you” es impersonal, como el “uno / se” del español: “you eat well here” = “aquí se come bien”, no le habla solo a Emily."
        }
      ],
      vocabulary: [
        {
          term: "to eat",
          explanation:
            "El verbo cotidiano “comer”. Irregular en pasado: eat / ate / eaten. La base de toda charla sobre comida.",
          literal: "comer",
          useWhen: "Cualquier conversación sobre comidas o alimentarse.",
          avoidWhen: "En cierta jerga “eat” tiene un sentido vulgar; sobre comida es totalmente inocente.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["to have dinner", "to have lunch", "to eat up", "to grab a bite"],
          example: {
            target: "What time do we eat?",
            translation: "¿A qué horas comemos?"
          }
        },
        {
          term: "did you eat?",
          explanation:
            "“¿Ya comiste?”, pero más literal y menos ritual que en español: de verdad pregunta.",
          literal: "¿comiste?",
          useWhen: "Saludar con cariño y averiguar de paso si la persona ha comido.",
          avoidWhen: "Esperar la misma insistencia colombiana; en inglés se acepta el “sí” a la primera.",
          register: "amistoso informal",
          region: "Inglés universal; “did you eat yet?” en EE. UU.",
          related: ["have you eaten?", "did you eat yet?", "are you hungry?", "have you had dinner?"],
          example: {
            target: "Hey, did you eat yet?",
            translation: "Oye, ¿ya comiste?"
          }
        },
        {
          term: "to eat up",
          explanation:
            "“Comerse (algo)” del todo, con ganas. El “up” aporta el remate que en español da el “se”.",
          literal: "comerse (del todo)",
          useWhen: "Comerse algo entero y con gusto, o animar a alguien a que acabe.",
          avoidWhen: "Comer en general, sin la idea de acabárselo; ahí basta “eat”.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["to finish", "to polish off", "to wolf down", "to gobble up"],
          example: {
            target: "Come on, eat up before it gets cold.",
            translation: "Dale, cómete todo antes de que se enfríe."
          }
        },
        {
          term: "to grab (a bite)",
          explanation:
            "Comer algo rápido e informal; picar. El inglés usa “grab” para comidas y bebidas al paso.",
          literal: "agarrar (un bocado)",
          useWhen: "Hablar de comer algo rápido o informal.",
          avoidWhen: "Una comida formal y sentada; “grab” suena demasiado casual.",
          register: "casual",
          region: "Inglés universal.",
          related: ["grab a bite", "grab lunch", "have a snack", "pick at something"],
          example: {
            target: "Let's grab something to eat.",
            translation: "Vamos a picar algo."
          }
        },
        {
          term: "leftovers",
          explanation:
            "Las sobras, la comida que queda de antes; a menudo lo que le ofrecen sin avisar.",
          literal: "sobras",
          useWhen: "Hablar de comida que quedó de una comida anterior.",
          avoidWhen: "Comida recién hecha; eso no son “leftovers”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["leftovers", "seconds", "a plate", "food to go"],
          example: {
            target: "There are leftovers if you're hungry.",
            translation: "Hay sobras si tienes hambre."
          }
        },
        {
          term: "make yourself at home",
          explanation:
            "El equivalente funcional de “estás en tu casa”; la fórmula fija que hace sentir a gusto al invitado.",
          literal: "haz a ti mismo en casa",
          useWhen: "Recibir a alguien y decirle que se relaje y esté cómodo.",
          avoidWhen: "Describir literalmente dónde vive alguien; esto es el sentido hospitalario.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["make yourself comfortable", "have a seat", "help yourself", "come on in"],
          example: {
            target: "Make yourself at home, I'll get plates.",
            translation: "Siéntete como en casa, yo traigo los platos."
          }
        },
        {
          term: "to eat well",
          explanation:
            "Comer bien, en abundancia o con calidad; el elogio que se le hace a una buena cocina.",
          literal: "comer bien",
          useWhen: "Elogiar la comida de una casa o de un lugar.",
          avoidWhen: "Hablar solo de dieta sana; el sentido aquí es de disfrute y abundancia.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["to eat well", "to eat like a king", "good home cooking", "a good spread"],
          example: {
            target: "You really eat well at their place.",
            translation: "En su casa de verdad se come bien."
          }
        }
      ],
      note:
        "“Did you eat?” en inglés es cariñoso pero más literal que el “¿ya comiste?” colombiano: pregunta de verdad y se conforma con la respuesta, sin el forcejeo ritual. Dos cosas útiles: el inglés SÍ tiene un “comerse” — “eat up”, donde el “up” da la idea de acabárselo — y “make yourself at home” calca “estás en tu casa” (ojo: “at home”, no “in home”). Un aviso: “eat” también tiene un sentido vulgar en cierta jerga, igual que en español; sobre comida es inocente.",
      culture: [
        {
          label: "“Did you eat?” pesa menos",
          body:
            "En inglés “did you eat?” es afectuoso, pero funciona más como una pregunta real que como el saludo-ritual que es “¿ya comiste?” en Colombia. Si contesta que sí, es muy probable que le crean y no la sienten a comer a la fuerza; la insistencia colombiana de ofrecer tres veces no está. Para un colombiano esto puede sentirse casi seco, pero no es frialdad: es otra manera de preguntar. Si de verdad quiere comer, conviene decirlo, porque tal vez no se lo insistan."
        },
        {
          label: "El inglés sí tiene “comerse”",
          body:
            "Muchos aprendices creen que el matiz del reflexivo “comerse” se pierde en inglés, pero no: “eat up” lo recupera. Ese “up” aporta justo lo que el “se” de “me lo comí” — la idea de acabárselo, de rematar el plato con ganas. “Eat your vegetables” es neutro; “eat up your vegetables” empuja a terminárselos. Los verbos ingleses con partícula (“eat up”, “drink up”, “finish up”) son la herramienta que el inglés usa donde el español pone un pronombre reflexivo."
        },
        {
          label: "La cercanía no está en el pronombre",
          body:
            "El inglés no tiene tú ni usted, así que la calidez de Emily no vive en un pronombre sino en el nombre de pila, en el tono y en frases hechas como “come on in” o “make yourself at home”. Un hispanohablante puede sentir que le falta el tuteo para sonar cercana y quedar sin querer distante. La salida no es buscar un “tú” que no existe, sino apoyarse en esas fórmulas cálidas, que hacen el mismo trabajo afectivo que el tuteo colombiano."
        },
        {
          label: "Un uso que conviene reconocer",
          body:
            "Igual que “comer” en español, el verbo inglés “eat” tiene en cierta jerga un sentido sexual vulgar. No es motivo para evitarlo — “did you eat?” es de lo más sano y corriente —, pero sí para no desconcertarse si en cierto contexto provoca una risita. Reconocer ese doble sentido, sin tropezar con él, es parte de manejar el idioma real. Mantenga “eat” anclado a la comida y nunca tendrá problema; solo no se extrañe si alguna vez levanta una ceja."
        }
      ],
      pitfalls: [
        {
          mistake: "“You ate?”",
          whyItFails:
            "Esperando el saludo-ritual colombiano, se queda corto y suena a interrogatorio abrupto; falta el marcador de pregunta natural.",
          sayInstead: "Did you eat yet?"
        },
        {
          mistake: "“I eat all the arepa.”",
          whyItFails:
            "Quiere decir “me comí toda la arepa”, pero usa presente y pierde el matiz de acabárselo; el inglés remata con “ate ... up”.",
          sayInstead: "I ate the whole arepa up."
        },
        {
          mistake: "“I ate very good here.”",
          whyItFails:
            "Calca “comí muy bueno”; en inglés se necesita el adverbio “well”, no el adjetivo “good”, con el verbo.",
          sayInstead: "You eat really well here."
        },
        {
          mistake: "“Make yourself in home.”",
          whyItFails:
            "La fórmula fija lleva “at home”, no “in home”; la preposición equivocada delata la traducción literal.",
          sayInstead: "Make yourself at home."
        }
      ],
      variations: [
        {
          form: "Did you eat?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "El saludo-pregunta cálido y cotidiano."
        },
        {
          form: "Have you eaten?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La misma pregunta, un punto más pulida."
        },
        {
          form: "Are you hungry?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Ir directo al grano de ofrecer comida."
        },
        {
          form: "Eat up!",
          register: "casual",
          region: "Inglés universal",
          whenToUse: "Animar a alguien a comerse todo."
        },
        {
          form: "Help yourself.",
          register: "cortés",
          region: "Inglés universal",
          whenToUse: "Invitar a servirse a gusto."
        }
      ],
      prompt: "Cuando Emily saluda con “did you eat?”, ¿en qué se diferencia del “¿ya comiste?” colombiano?",
      choices: [
        "En que es un insulto velado, porque en inglés preguntar por la comida a un invitado se considera de mala educación.",
        "En que es más literal y menos ritual: pregunta de verdad y se conforma con la respuesta, sin tanta insistencia.",
        "En que obliga a la persona a quedarse a comer sí o sí, con una presión aún mayor que la de una casa colombiana."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál oración usa bien “eat up” con el matiz de comerse algo del todo?",
          choices: [
            "We usually eat up at noon every single day of the week without any exception at all.",
            "In that part of the country people eat up a lot of fresh fish throughout the whole year.",
            "Come on, eat up your dinner — there's warm apple pie waiting for you right afterward."
          ],
          answer: 2,
          tests: "eat up como equivalente de comerse algo"
        },
        {
          prompt: "Emily y Alejandra se hablan con cariño, pero el inglés no tiene tú ni usted. ¿Dónde va entonces la cercanía?",
          choices: [
            "En el nombre de pila, el tono y frases como “come on in” o “make yourself at home”, no en el pronombre.",
            "En un pronombre especial y más íntimo que el inglés reserva únicamente para la familia y los amigos cercanos.",
            "En conjugar el verbo de una forma distinta y más antigua cuando se le habla a alguien de mucha confianza."
          ],
          answer: 0,
          tests: "la cercanía inglesa va en el léxico y el tono"
        },
        {
          prompt: "Alejandra dice “you really eat well here”, pero no le habla solo a Emily. ¿Qué es ese “you”?",
          choices: [
            "Un error de Alejandra, porque debería haber usado “I” para hablar únicamente de su propia experiencia.",
            "Una forma de tratar a Emily con especial respeto, parecida al usted que se usaría en español formal.",
            "Un “you” impersonal, como el “se” o el “uno” del español: “aquí se come bien”, en general."
          ],
          answer: 2,
          tests: "you impersonal como se/uno del español"
        },
        {
          prompt: "¿Por qué conviene que un aprendiz reconozca que “eat” tiene un sentido vulgar en cierta jerga?",
          choices: [
            "Para dejar de usar “eat” del todo y decir siempre “have lunch” o “have dinner” en su lugar por seguridad.",
            "Para no desconcertarse si en algún contexto provoca risa, manteniendo “eat” anclado con tranquilidad a la comida.",
            "Porque ese sentido vulgar es en realidad el significado más común y cotidiano del verbo en todo el mundo anglosajón."
          ],
          answer: 1,
          tests: "reconocer el sentido jergal de eat sin evitar el verbo"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/21-foundation-at-the-table.js");
