/*
 * Lesson block: independent / trying things and getting ready.
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
 * The three verbs here — probar, preparar and organizar — cover trying things
 * out, getting yourself ready, and setting plans in order. The two directions
 * are mirrors: same number of dialogue turns, vocabulary entries, culture
 * notes, pitfalls, variations and practice questions, and the same optional
 * slots filled on the same rows. That is enforced by test/shape.test.js, not by
 * good intentions.
 */
lessons.push(
  {
    id: "trying-sancocho-and-a-shirt-in-sincelejo",
    level: "Developing · Getting ready",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "intimate",
    pathways: ["independent"],
    verb: "probar",
    review: "pending",
    es: {
      title: "Probar la comida y probarse la camisa",
      situation:
        "You are in Sincelejo before a family baptism. First they offer you a taste of chicken sancocho in the kitchen, and later you need to try on a light-colored shirt for the ceremony. You have to distinguish probar food, probarse clothing, and intentar a difficult action.",
      setting: {
        who: "Nora is helping her cousin's foreign guest, Alex, get ready for a family baptism. Alex wants to be polite in the kitchen and practical in the clothing shop.",
        what: "A morning split between tasting the food at home and checking whether a shirt fits before the family leaves.",
        when: "Late Saturday morning, close enough to the ceremony that every small decision feels urgent.",
        where: "Sincelejo, first in a family kitchen and then in a small clothing shop near the plaza.",
        why: "Because probar covers tasting, trying on, and testing, while English splits those meanings. The reflexive probarse is the shop phrase learners actually need."
      },
      address: {
        form: "tú",
        who: "Nora and Alex use tú because they are close in age and the family has pulled Alex into the day as a guest, not a client.",
        why: "On the Caribbean side of Colombia, tú is a comfortable informal choice among peers. It keeps the morning warm while still letting Nora correct him.",
        ifYouSwitch:
          "Usted would sound possible with the shop assistant, but stiff with Nora. Vos would not fit this setting unless the family already used it."
      },
      dialogue: [
        {
          speaker: "Nora",
          target: "Alex, prueba el sancocho antes de que le pongan más sal.",
          translation: "Alex, taste the sancocho before they add more salt.",
          pronunciation: "AH-leks, PRWEH-bah el san-KOH-cho AN-tes deh keh leh PON-gan mas sal",
          literal: "Alex, try the sancocho before they put more salt on it.",
          why: "Prueba is the stem-changing tú command from probar. With food, probar means taste or try a bite to see how it is."
        },
        {
          speaker: "Alex",
          target: "Lo pruebo y te digo. Huele buenísimo.",
          translation: "I'll taste it and tell you. It smells amazing.",
          pronunciation: "loh PRWEH-boh ee teh DEE-goh. WEH-leh bweh-NEE-see-moh",
          literal: "It I-try and to-you I-tell. It-smells very-good.",
          why: "Pruebo is the yo form: o becomes ue. This is the form you need when you volunteer to taste something."
        },
        {
          speaker: "Nora",
          target: "Después vamos a la tienda; tienes que probarte la camisa.",
          translation: "Afterward we'll go to the shop; you have to try the shirt on.",
          pronunciation: "des-PWES BAH-mos ah lah TYEN-dah; TYEH-nes keh proh-BAR-teh lah kah-MEE-sah",
          literal: "Afterward we-go to the shop; you-have to try-yourself the shirt.",
          why: "Clothes use probarse. The pronoun is not decoration: it says the clothing goes on your body for checking fit."
        },
        {
          speaker: "Alex",
          target: "¿Me la puedo probar en el vestier?",
          translation: "Can I try it on in the fitting room?",
          pronunciation: "meh lah PWEH-doh proh-BAR en el bes-TYER",
          literal: "Myself it I-can try in the fitting-room?",
          why: "This is the survival sentence in a shop. Me la puedo probar means can I try it on, with me for the person and la for the shirt."
        },
        {
          speaker: "Nora",
          target: "Sí, pero no digas “intento la camisa”; eso es otra cosa.",
          translation: "Yes, but don't say “I attempt the shirt”; that is something else.",
          pronunciation: "see, PEH-roh noh DEE-gahs in-TEN-toh lah kah-MEE-sah; EH-soh es OH-trah KOH-sah",
          literal: "Yes, but do-not say I-attempt the shirt; that is another thing.",
          why: "Intentar means to attempt an action you might fail at. Probar means to try something out and see how it feels, tastes, or works."
        },
        {
          speaker: "Alex",
          target: "Listo: pruebo el sancocho y me pruebo la camisa.",
          translation: "Got it: I taste the sancocho and I try the shirt on.",
          pronunciation: "LEES-toh: PRWEH-boh el san-KOH-cho ee meh PRWEH-boh lah kah-MEE-sah",
          literal: "Ready: I try the sancocho and myself try the shirt.",
          why: "One sentence holds both high-value uses: probar food, probarse clothes. The same root survives, but English needs two different verbs."
        }
      ],
      vocabulary: [
        {
          term: "probar",
          explanation:
            "To try, taste, test, or prove, depending on context. Food, clothing, machines, and arguments all pull the verb in different directions.",
          literal: "to try / to taste / to test",
          useWhen:
            "Use it when you try something out to see what it is like, taste food, test whether something works, or prove a point.",
          avoidWhen:
            "Avoid using it for attempting an action you might fail to complete. That is intentar, as in intentar llamar.",
          register: "neutral",
          region: "Universal Spanish; the food and clothing uses are everyday in Colombia.",
          related: ["pruebo", "prueba", "probarse", "intentar"],
          example: {
            target: "Prueba el sancocho.",
            translation: "Taste the sancocho."
          }
        },
        {
          term: "pruebo",
          explanation:
            "The present yo form of probar. The o changes to ue: pruebo, not probo.",
          literal: "I try / I taste",
          useWhen:
            "Use it when you say you will taste a dish, try an option, or test something yourself.",
          avoidWhen:
            "Avoid the regular-looking probo in present tense. Probo exists only in other contexts as a different form pattern, not here.",
          register: "neutral",
          region: "Universal Spanish grammar.",
          related: ["prueba", "pruebas", "probamos", "probar"],
          example: {
            target: "Lo pruebo y te digo.",
            translation: "I'll taste it and tell you."
          }
        },
        {
          term: "probar comida",
          explanation:
            "To taste food or try a dish. This can mean one spoonful, not a whole meal.",
          literal: "to try food",
          useWhen:
            "Use it when someone offers you soup, fruit, sauce, coffee, or a bite so you can judge the flavor.",
          avoidWhen:
            "Avoid translating every try as intentar. “Intento el sancocho” sounds as if the soup is a difficult task.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["probar el sancocho", "probar la salsa", "saber a", "estar rico"],
          example: {
            target: "Prueba el sancocho antes de más sal.",
            translation: "Taste the sancocho before more salt."
          }
        },
        {
          term: "probarse",
          explanation:
            "To try on clothing, shoes, glasses, or anything you put on your body to check fit.",
          literal: "to try oneself",
          useWhen:
            "Use it in shops, fitting rooms, borrowed clothes, shoes, hats, and wedding or baptism outfits.",
          avoidWhen:
            "Avoid plain probar when the point is putting the item on your body. Probar la camisa can mean test the shirt; probarse la camisa means try it on.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["me pruebo", "probarse ropa", "vestier", "talla"],
          example: {
            target: "Tengo que probarme la camisa.",
            translation: "I have to try the shirt on."
          }
        },
        {
          term: "¿Me lo puedo probar?",
          explanation:
            "Can I try it on? The essential fitting-room sentence when the item is masculine, like un pantalón or un saco.",
          literal: "Can I try it on myself?",
          useWhen:
            "Use it with a shop assistant before taking an item to the fitting room.",
          avoidWhen:
            "Avoid forgetting lo or la. Spanish tracks the item you are trying on, not just the action.",
          register: "polite neutral",
          region: "General Colombian.",
          related: ["¿me la puedo probar?", "vestier", "talla", "me queda"],
          example: {
            target: "¿Me la puedo probar en el vestier?",
            translation: "Can I try it on in the fitting room?"
          }
        },
        {
          term: "probar que funciona",
          explanation:
            "To test that something works, or prove that it works, depending on the evidence and context.",
          literal: "to test that it functions",
          useWhen:
            "Use it for a phone charger, sound system, recipe method, plan, or claim that needs checking.",
          avoidWhen:
            "Avoid confusing this with probarse. Machines are tested; clothes are tried on.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["funcionar", "comprobar", "ensayar", "probar el sonido"],
          example: {
            target: "Hay que probar que el micrófono funciona.",
            translation: "We need to test that the microphone works."
          }
        },
        {
          term: "intentar",
          explanation:
            "To attempt an action, especially one that might fail. It is not the verb for tasting soup or trying on a shirt.",
          literal: "to attempt",
          useWhen:
            "Use it with actions such as trying to call, trying to open a file, or trying to arrive on time.",
          avoidWhen:
            "Avoid it for sampling or checking an object. “Voy a intentar esta camisa” sounds wrong unless the shirt is a challenge.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["tratar de", "probar", "ensayar", "hacer el intento"],
          example: {
            target: "Intento llamar después.",
            translation: "I'll try to call later."
          }
        }
      ],
      note:
        "English says try for many things, but Spanish asks what kind of trying you mean. If you taste soup, prueba el sancocho. If you put on a shirt, me la pruebo. If you attempt to call someone, intento llamar. Keep the stem change too: pruebo and prueba, not probo and proba in the present.",
      culture: [
        {
          label: "A taste can be a duty",
          body:
            "In a family kitchen, being asked to taste is often a tiny honor and a tiny responsibility. You are being folded into the cooking, not just fed. A polite answer can be short, but it should notice the care behind the spoon."
        },
        {
          label: "The fitting-room sentence matters",
          body:
            "A learner can survive many shop conversations with one sentence: “¿me lo puedo probar?” or “¿me la puedo probar?” It is practical, polite, and much more useful than memorizing a dozen clothing nouns without the action."
        },
        {
          label: "Try is not one Spanish verb",
          body:
            "English hides several ideas under try. Spanish separates tasting, trying on, testing, and attempting. That split is not fussy grammar; it prevents odd sentences like attempting a soup or tasting a phone charger."
        },
        {
          label: "Vestier is common enough",
          body:
            "In Colombian shops you may hear vestier for fitting room, alongside probador. Both are understood. The safer sentence is still built around probarse, because the verb makes the purpose clear."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “intento el sancocho” for “I'll try the soup”",
          whyItFails:
            "Intentar is for attempting an action. A soup is something you taste or try out, so probar is the natural verb.",
          sayInstead: "Pruebo el sancocho."
        },
        {
          mistake: "Saying “probo la camisa” in the present",
          whyItFails:
            "Probar changes o to ue in the present forms outside nosotros. The yo form is pruebo.",
          sayInstead: "Me pruebo la camisa."
        },
        {
          mistake: "Asking “¿puedo intentar esto?” in a clothing shop",
          whyItFails:
            "The assistant will understand you are translating try too broadly. For clothes, the useful verb is probarse.",
          sayInstead: "¿Me lo puedo probar?"
        },
        {
          mistake: "Forgetting the pronoun with clothing",
          whyItFails:
            "The reflexive pronoun shows the item goes on your body. Without it, the sentence can sound like testing the object, not trying it on.",
          sayInstead: "¿Me la puedo probar?"
        }
      ],
      variations: [
        {
          form: "Prueba el sancocho.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Offering someone a taste of food."
        },
        {
          form: "Lo pruebo y te digo.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Volunteering to taste or test something yourself."
        },
        {
          form: "¿Me lo puedo probar?",
          register: "polite neutral",
          region: "General Colombian",
          whenToUse: "Asking to try on a masculine clothing item."
        },
        {
          form: "Me pruebo la camisa en el vestier.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Saying you are trying on the shirt in the fitting room."
        },
        {
          form: "Hay que probar que funciona.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Testing whether a device, plan, or setup works."
        }
      ],
      prompt: "Nora says “prueba el sancocho” and later “probarte la camisa.” What changes?",
      choices: [
        "Food is tasted with probar, while clothing is tried on with probarse.",
        "Food requires intentar, while clothing requires no verb at all.",
        "Both phrases mean attempting a difficult action with no object."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence naturally means “I'll try the soup”?",
          choices: [
            "Intento el sancocho ahora.",
            "Pruebo el sancocho ahora.",
            "Me pruebo el sancocho ahora."
          ],
          answer: 1,
          tests: "probar for tasting food, not intentar"
        },
        {
          prompt: "Which sentence belongs in a fitting room?",
          choices: [
            "¿Me lo puedo probar aquí?",
            "¿Me lo puedo nacer aquí?",
            "¿Me lo puedo organizar aquí?"
          ],
          answer: 0,
          tests: "probarse as the try-on verb"
        },
        {
          prompt: "Which present-tense form is correct for yo?",
          choices: [
            "Yo probo la camisa.",
            "Yo probé la camisa.",
            "Yo pruebo la camisa."
          ],
          answer: 2,
          tests: "o to ue stem change in pruebo"
        },
        {
          prompt: "When should you use intentar instead of probar?",
          choices: [
            "When tasting soup at a family table.",
            "When trying on a shirt in a shop.",
            "When trying to call someone later."
          ],
          answer: 2,
          tests: "intentar for attempting an action"
        }
      ]
    },
    en: {
      title: "Probar comida y medirse una camisa",
      situation:
        "Usted está en Miami antes de un bautizo familiar colombiano. Primero le ofrecen probar un sancocho en la cocina y después necesita medirse una camisa clara para la ceremonia. Tiene que separar taste, try on, test y try to.",
      setting: {
        who: "Nora ayuda a Alex, invitado de la familia, a alistarse para un bautizo. Alex quiere ser amable en la cocina y claro en la tienda.",
        what: "Una mañana dividida entre probar la comida en casa y revisar si una camisa sirve antes de salir.",
        when: "Sábado al final de la mañana, tan cerca de la ceremonia que cada decisión pequeña parece urgente.",
        where: "Miami, primero en una cocina familiar colombiana y luego en una tienda pequeña de ropa.",
        why: "Porque probar se reparte en inglés entre taste, try on, test y prove. La frase de vestier más útil es try it on."
      },
      address: {
        form: "mixed",
        who: "Nora y Alex se tratan por el nombre de pila; el inglés usa el mismo you para la familia y la tienda.",
        why: "La cercanía se marca con tono y frases cortas, no con un pronombre distinto. En la tienda, please suaviza más que cambiar you.",
        ifYouSwitch:
          "Usar sir o ma'am con Nora sonaría distante. Con el vendedor puede ser cortés, pero la frase central sigue siendo can I try it on."
      },
      dialogue: [
        {
          speaker: "Nora",
          target: "Alex, taste the sancocho before they add more salt.",
          translation: "Alex, prueba el sancocho antes de que le pongan más sal.",
          pronunciation: "AH-leks, teist de san-KO-cho bi-FOR dei ad mor solt",
          literal: "Alex, pruebe el sancocho antes de que añadan más sal.",
          why: "Taste es el verbo para probar comida. Try también puede funcionar, pero taste deja claro que se trata del sabor."
        },
        {
          speaker: "Alex",
          target: "I'll taste it and tell you. It smells amazing.",
          translation: "Lo pruebo y te digo. Huele buenísimo.",
          pronunciation: "ail teist it and tel yu. it smelz a-MEI-zing",
          literal: "Lo probaré y le diré. Huele increíble.",
          why: "I'll taste it traduce lo pruebo cuando el objeto es comida. No diga I'll prove it si sólo va a probar el sabor."
        },
        {
          speaker: "Nora",
          target: "Afterward we'll go to the shop; you have to try the shirt on.",
          translation: "Después vamos a la tienda; tienes que probarte la camisa.",
          pronunciation: "AF-ter-werd uil gou tu de shop; yu jav tu trai de shert on",
          literal: "Después iremos a la tienda; usted tiene que probar la camisa encima.",
          why: "Try on es el verbo compuesto para ropa. La partícula on hace el mismo trabajo práctico que el pronombre en probarse."
        },
        {
          speaker: "Alex",
          target: "Can I try it on in the fitting room?",
          translation: "¿Me la puedo probar en el vestier?",
          pronunciation: "can ai trai it on in de FI-ting rum",
          literal: "¿Puedo probarlo puesto en el cuarto de prueba?",
          why: "Can I try it on? es la frase esencial en una tienda. It evita repetir shirt y on marca que la ropa va puesta."
        },
        {
          speaker: "Nora",
          target: "Yes, but don't say “I attempt the shirt”; that's something else.",
          translation: "Sí, pero no digas “intento la camisa”; eso es otra cosa.",
          pronunciation: "yes, bot dount sei ai a-TEMPT de shert; dats SOM-zing els",
          literal: "Sí, pero no diga intento la camisa; eso es otra cosa.",
          why: "Attempt sirve para acciones difíciles, no para ropa. Inglés también distingue try something on de try to do something."
        },
        {
          speaker: "Alex",
          target: "Got it: I taste the sancocho and I try the shirt on.",
          translation: "Listo: pruebo el sancocho y me pruebo la camisa.",
          pronunciation: "got it: ai teist de san-KO-cho and ai trai de shert on",
          literal: "Listo: pruebo el sancocho y pruebo la camisa puesta.",
          why: "La frase junta los dos usos que más importan: taste para comida y try on para ropa. Un solo probar español no obliga a un solo try inglés."
        }
      ],
      vocabulary: [
        {
          term: "try",
          explanation:
            "Un verbo amplio, pero no cubre todo con precisión. Puede significar probar algo o intentar una acción, según la estructura.",
          literal: "probar / intentar",
          useWhen:
            "Úselo para try this, try an option, or try to call, pero revise si taste o try on serían más claros.",
          avoidWhen:
            "No lo deje solo si la ropa debe ir puesta. Para eso necesita try on.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["taste", "try on", "test", "attempt"],
          example: {
            target: "Try the sancocho.",
            translation: "Prueba el sancocho."
          }
        },
        {
          term: "I'll taste it",
          explanation:
            "La forma clara de decir lo pruebo cuando habla de comida o bebida.",
          literal: "lo probaré de sabor",
          useWhen:
            "Úsela cuando alguien le ofrece sopa, salsa, café, fruta o un bocado para revisar el sabor.",
          avoidWhen:
            "No diga I'll prove it para comida. Prove significa demostrar, no probar de sabor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["taste", "flavor", "try it", "sample"],
          example: {
            target: "I'll taste it and tell you.",
            translation: "Lo pruebo y te digo."
          }
        },
        {
          term: "taste food",
          explanation:
            "Probar comida. Puede ser una cucharada, no necesariamente comer el plato entero.",
          literal: "saborear / probar comida",
          useWhen:
            "Úselo cuando el punto es el sabor de una sopa, salsa, fruta, bebida o plato.",
          avoidWhen:
            "No use taste para ropa, planes o aparatos. Ahí necesita try on, try, or test.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["try a bite", "sample", "flavor", "smell"],
          example: {
            target: "Taste the sancocho before more salt.",
            translation: "Prueba el sancocho antes de más sal."
          }
        },
        {
          term: "try on",
          explanation:
            "Probarse ropa, zapatos, gafas o algo que uno se pone para ver si queda bien.",
          literal: "probar encima",
          useWhen:
            "Úselo en tiendas, vestieres, ropa prestada, zapatos, sombreros y trajes para eventos.",
          avoidWhen:
            "No lo use para comida. La expresión “try on” siempre indica que el objeto va puesto en el cuerpo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["fitting room", "size", "fit", "wear"],
          example: {
            target: "You have to try the shirt on.",
            translation: "Tienes que probarte la camisa."
          }
        },
        {
          term: "Can I try it on?",
          explanation:
            "La pregunta esencial del vestier. Sirve para una camisa, un pantalón, unos zapatos o un saco.",
          literal: "¿puedo probarlo puesto?",
          useWhen:
            "Úsela con el vendedor antes de llevar la prenda al fitting room.",
          avoidWhen:
            "No diga can I prove it on. Prove no tiene ese uso con ropa.",
          register: "cortés neutro",
          region: "Inglés universal.",
          related: ["try this on", "fitting room", "does it fit", "size"],
          example: {
            target: "Can I try it on in the fitting room?",
            translation: "¿Me la puedo probar en el vestier?"
          }
        },
        {
          term: "test that it works",
          explanation:
            "Probar que funciona. Test es el verbo más claro para aparatos, sonido, planes o sistemas.",
          literal: "probar que funciona",
          useWhen:
            "Úselo para un cargador, micrófono, receta, plan, conexión o sistema que necesita verificación.",
          avoidWhen:
            "No lo use para ropa en un vestier. La ropa se tries on.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["check", "prove", "works", "try it"],
          example: {
            target: "We need to test that the microphone works.",
            translation: "Hay que probar que el micrófono funciona."
          }
        },
        {
          term: "try to",
          explanation:
            "La estructura para intentar una acción: try to call, try to arrive, try to fix it.",
          literal: "intentar",
          useWhen:
            "Úsela cuando la acción puede fallar o requiere esfuerzo.",
          avoidWhen:
            "No la use para objetos solos. Try to the shirt no existe; try the shirt on sí.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["attempt", "manage to", "try doing", "try on"],
          example: {
            target: "I'll try to call later.",
            translation: "Intento llamar después."
          }
        }
      ],
      note:
        "Probar obliga a escoger en inglés. Para comida, taste suele ser más claro. Para ropa, use try on. Para aparatos o planes, test that it works. Para acciones que pueden fallar, use try to: “I'll try to call.” El error típico es traducir todos esos casos con un solo try sin mirar la estructura.",
      culture: [
        {
          label: "Taste puede ser más educado",
          body:
            "Cuando alguien cocina y le ofrece una cucharada, “I'll taste it” muestra que usted entendió el gesto. “I'll try it” también sirve, pero taste pone el foco en el sabor y no en el riesgo."
        },
        {
          label: "Try on salva la tienda",
          body:
            "En una tienda de ropa, “Can I try it on?” hace mucho trabajo. No necesita saber todos los nombres de prendas si puede señalar con respeto y pedir el vestier correctamente."
        },
        {
          label: "Attempt es más estrecho",
          body:
            "Attempt existe, pero suena más formal o más esforzado que try. En esta lección sirve sobre todo para entender por qué “I attempt the shirt” no funciona."
        },
        {
          label: "El objeto decide el verbo",
          body:
            "Comida, ropa, aparatos y acciones no se comportan igual. El inglés natural nace de mirar qué está probando usted y cómo lo está probando."
        }
      ],
      pitfalls: [
        {
          mistake: "“I attempt the soup.”",
          whyItFails:
            "Attempt es para acciones que requieren esfuerzo, no para probar el sabor de una sopa.",
          sayInstead: "I'll taste the soup."
        },
        {
          mistake: "“Can I prove it on?”",
          whyItFails:
            "Prove significa demostrar. Para ropa, el verbo compuesto correcto es try on.",
          sayInstead: "Can I try it on?"
        },
        {
          mistake: "“I try to the shirt.”",
          whyItFails:
            "Try to necesita un verbo después, como call or arrive. Con una prenda, use try on.",
          sayInstead: "I try the shirt on."
        },
        {
          mistake: "“I'll taste the microphone.”",
          whyItFails:
            "Taste es para sabor. Un micrófono se testea para saber si funciona.",
          sayInstead: "I'll test the microphone."
        }
      ],
      variations: [
        {
          form: "Taste the sancocho.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Ofrecer a alguien probar comida."
        },
        {
          form: "I'll taste it and tell you.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Responder que va a probar el sabor."
        },
        {
          form: "Can I try it on?",
          register: "cortés neutro",
          region: "Inglés universal",
          whenToUse: "Pedir permiso para medirse una prenda."
        },
        {
          form: "I try the shirt on in the fitting room.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Decir que se prueba ropa en el vestier."
        },
        {
          form: "We need to test that it works.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Revisar un aparato, plan o sistema."
        }
      ],
      prompt: "Nora says “taste the sancocho” and later “try the shirt on.” ¿Qué cambia?",
      choices: [
        "Food takes taste, while clothing takes try on.",
        "Food takes attempt, while clothing takes no verb.",
        "Both phrases mean proving a difficult action."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase dice naturalmente que va a probar la sopa?",
          choices: [
            "I attempt the soup now.",
            "I'll taste the soup now.",
            "I try on the soup now."
          ],
          answer: 1,
          tests: "taste for trying food"
        },
        {
          prompt: "¿Cuál frase pertenece a un vestier?",
          choices: [
            "Can I try it on here?",
            "Can I taste it on here?",
            "Can I prove it on here?"
          ],
          answer: 0,
          tests: "try on as the clothing verb"
        },
        {
          prompt: "¿Cuál frase sirve para revisar un aparato?",
          choices: [
            "I'll taste the charger today.",
            "I'll wear the charger today.",
            "I'll test the charger today."
          ],
          answer: 2,
          tests: "test for checking whether something works"
        },
        {
          prompt: "¿Cuándo usa try to en vez de try on?",
          choices: [
            "When tasting soup at a table.",
            "When trying on a shirt.",
            "When trying to call later."
          ],
          answer: 2,
          tests: "try to for attempting an action"
        }
      ]
    }
  },
  {
    id: "preparing-coffee-and-getting-ready-in-san-andres",
    level: "Developing · Getting ready",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "courteous",
    pathways: ["independent"],
    verb: "preparar",
    review: "pending",
    es: {
      title: "Preparar café y prepararte para salir",
      situation:
        "You are in San Andrés and are leaving early for a boat errand with a local family. There is coffee, sunscreen, caps, and a backpack to get ready. You have to distinguish preparar something, prepararte yourself, and the more home-style use of hacer café.",
      setting: {
        who: "Ruth is coordinating a family boat outing, and Sam is the guest who wants to help without slowing everyone down.",
        what: "Getting coffee, sunscreen, hats, water, and a small bag ready before everyone walks to the dock.",
        when: "Early morning, while the light is already bright and the boat will not wait.",
        where: "San Andrés, in an apartment kitchen a few blocks from the water.",
        why: "Because preparar is useful for getting things ready, but Colombians often say hacer coffee or food in casual speech. Prepararse adds the person who is getting ready."
      },
      address: {
        form: "usted",
        who: "Ruth uses usted with Sam as a guest in her home, and Sam uses usted back while helping.",
        why: "The scene is warm but coordinated by an older host. Usted lets Sam be useful without sounding over-familiar.",
        ifYouSwitch:
          "Tú would not shock anyone once the day relaxes, but at the morning kitchen counter usted keeps the guest role respectful. Vos would not fit the island setting."
      },
      dialogue: [
        {
          speaker: "Ruth",
          target: "Sam, ¿usted puede preparar la mochila mientras hago el café?",
          translation: "Sam, can you get the bag ready while I make the coffee?",
          pronunciation: "sam, oos-TED PWEH-deh preh-pah-RAR lah moh-CHEE-lah MYEN-tras AH-goh el kah-FEH",
          literal: "Sam, you can prepare the backpack while I make the coffee?",
          why: "Preparar la mochila means getting it ready with the needed things. For coffee, Ruth naturally says hago el café, not preparo el café."
        },
        {
          speaker: "Sam",
          target: "Sí. ¿Qué necesita estar preparado antes de salir?",
          translation: "Yes. What needs to be ready before leaving?",
          pronunciation: "see. keh neh-seh-SEE-tah es-TAR preh-pah-RAH-doh AN-tes deh sah-LEER",
          literal: "Yes. What needs to be prepared before leaving?",
          why: "Preparado works as an adjective: ready, prepared, set up. It is useful for checking the state of things."
        },
        {
          speaker: "Ruth",
          target: "Agua, bloqueador y los documentos. Yo me estoy preparando también.",
          translation: "Water, sunscreen, and the documents. I'm getting ready too.",
          pronunciation: "AH-gwah, bloh-keh-ah-DOR ee los doh-koo-MEN-tos. yo meh es-TOY preh-pah-RAN-doh tam-BYEN",
          literal: "Water, sunscreen and the documents. I myself am preparing also.",
          why: "Me estoy preparando is the reflexive form: the person is getting herself ready, not preparing an object."
        },
        {
          speaker: "Sam",
          target: "Entonces preparo las botellas y reviso las gorras.",
          translation: "Then I'll get the bottles ready and check the caps.",
          pronunciation: "en-TON-ses preh-PAH-roh las boh-TEH-yahs ee rreh-BEE-soh las GOR-rahs",
          literal: "Then I prepare the bottles and check the caps.",
          why: "Preparo is regular in the present. It fits objects you assemble, fill, pack, or set out for use."
        },
        {
          speaker: "Ruth",
          target: "Perfecto. El tinto está recién hecho; sírvase antes de prepararse.",
          translation: "Perfect. The black coffee is freshly made; help yourself before you get ready.",
          pronunciation: "pehr-FEK-toh. el TEEN-toh es-TAH rreh-SYEN EH-choh; SEER-bah-seh AN-tes deh preh-pah-RAR-seh",
          literal: "Perfect. The black coffee is recently made; serve yourself before preparing yourself.",
          why: "Tinto recién hecho is very natural Colombian Spanish. Preparado would be understood, but hecho sounds more like coffee at home."
        },
        {
          speaker: "Sam",
          target: "Gracias. Tomo tinto, me preparo y salimos con todo listo.",
          translation: "Thanks. I'll have coffee, get ready, and we leave with everything set.",
          pronunciation: "GRAH-syahs. TOH-moh TEEN-toh, meh preh-PAH-roh ee sah-LEE-mos kon TOH-doh LEES-toh",
          literal: "Thanks. I take black-coffee, I prepare myself and we leave with everything ready.",
          why: "Me preparo closes the loop: Sam prepares objects first, then prepares himself. Spanish marks that difference with the pronoun."
        }
      ],
      vocabulary: [
        {
          term: "preparar",
          explanation:
            "To prepare, get ready, or set something up. It can be practical and ordinary, but sometimes sounds more formal than hacer with food or coffee.",
          literal: "to prepare",
          useWhen:
            "Use it for bags, documents, clothing, ingredients, meetings, a class, or anything that needs to be ready for use.",
          avoidWhen:
            "Avoid assuming it is always the most natural food verb. At home, Colombians often say hacer café or hacer almuerzo.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["prepararse", "preparado", "hacer", "alistarse"],
          example: {
            target: "¿Puede preparar la mochila?",
            translation: "Can you get the bag ready?"
          }
        },
        {
          term: "prepararse",
          explanation:
            "To get yourself ready. The reflexive pronoun shows that the person is the one being prepared.",
          literal: "to prepare oneself",
          useWhen:
            "Use it before going out, a trip, a meeting, a class, a ceremony, or any moment where you get yourself ready.",
          avoidWhen:
            "Avoid using the reflexive for an object. You prepare the bag, but you prepare yourself.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["me preparo", "me estoy preparando", "alistarse", "estar listo"],
          example: {
            target: "Yo me estoy preparando también.",
            translation: "I'm getting ready too."
          }
        },
        {
          term: "preparado",
          explanation:
            "Prepared or ready. It can describe a person, bag, document, dish, or plan.",
          literal: "prepared",
          useWhen:
            "Use it to check whether something is ready: ya está preparado, todo está preparado, estoy preparado.",
          avoidWhen:
            "Avoid it where listo sounds more natural and lighter. Preparado can feel more deliberate.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["listo", "preparada", "preparados", "ya está"],
          example: {
            target: "Todo está preparado antes de salir.",
            translation: "Everything is ready before leaving."
          }
        },
        {
          term: "me estoy preparando",
          explanation:
            "I am getting ready. It is the ongoing reflexive form, useful when someone asks why you are not out the door yet.",
          literal: "I am preparing myself",
          useWhen:
            "Use it while changing clothes, packing, showering, finding documents, or mentally getting ready.",
          avoidWhen:
            "Avoid using it for making coffee or packing a bag unless you are the thing being prepared.",
          register: "neutral",
          region: "General Colombian.",
          related: ["me preparo", "estoy listo", "alistándome", "preparar"],
          example: {
            target: "Me estoy preparando para salir.",
            translation: "I'm getting ready to leave."
          }
        },
        {
          term: "hacer café",
          explanation:
            "The ordinary home phrase for making coffee. Preparar café is correct, but hacer café often sounds more domestic.",
          literal: "to make coffee",
          useWhen:
            "Use it in kitchens, offices, family mornings, and casual offers of coffee.",
          avoidWhen:
            "Avoid overcorrecting to preparar every time. With coffee, hecho and hacer are extremely natural.",
          register: "neutral",
          region: "General Colombian.",
          related: ["tinto", "recién hecho", "preparar café", "colarlo"],
          example: {
            target: "Hago el café mientras usted prepara la mochila.",
            translation: "I'll make the coffee while you get the bag ready."
          }
        },
        {
          term: "recién hecho",
          explanation:
            "Freshly made. With coffee and food, Colombians often reach for hecho instead of preparado.",
          literal: "recently made",
          useWhen:
            "Use it for coffee, bread, juice, lunch, or food that has just been made.",
          avoidWhen:
            "Avoid recién preparado as your only phrase. It is correct, but may sound a bit more formal.",
          register: "neutral",
          region: "General Colombian.",
          related: ["hecho", "caliente", "fresco", "preparado"],
          example: {
            target: "El tinto está recién hecho.",
            translation: "The black coffee is freshly made."
          }
        },
        {
          term: "alistarse",
          explanation:
            "A very common alternative to prepararse: to get ready. It often sounds more everyday for leaving the house.",
          literal: "to ready oneself",
          useWhen:
            "Use it for getting dressed, getting ready to leave, or preparing yourself quickly.",
          avoidWhen:
            "Avoid replacing preparar entirely. You alist yourself, but you usually prepare objects and plans.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["prepararse", "estar listo", "arreglarse", "salir"],
          example: {
            target: "Voy a alistarme antes de salir.",
            translation: "I'm going to get ready before leaving."
          }
        }
      ],
      note:
        "Preparar is useful and regular, but the pronoun changes the job. Preparo la mochila means I get the bag ready; me preparo means I get myself ready. With coffee and home food, be honest about Colombian speech: preparar café is correct, but hago café and tinto recién hecho often sound more natural at the kitchen counter.",
      culture: [
        {
          label: "Getting ready is shared work",
          body:
            "Before a family outing, one person may be getting themselves ready while another prepares the bag, coffee, documents, water, or sunscreen. Spanish makes that division visible with preparar and prepararse."
        },
        {
          label: "Coffee is usually made",
          body:
            "Preparar café is perfectly correct, especially in careful speech. But at home, Colombians often say hacer café, hacer tinto, or tinto recién hecho. That does not make preparar wrong; it makes hacer the homier verb."
        },
        {
          label: "Listo is lighter than preparado",
          body:
            "Both listo and preparado can mean ready. Preparado can sound more planned or deliberate, while listo is the everyday check before leaving: “¿ya está listo?” A learner should understand both."
        },
        {
          label: "Usted can coordinate without bossing",
          body:
            "An older host can give practical instructions with usted and still sound warm. The respect is part of keeping a rushed morning calm, especially when guests are helping in someone else's home."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “me preparo la mochila” when you mean you prepare the bag",
          whyItFails:
            "The reflexive makes yourself the thing being prepared. If the bag is the object, use preparar without me.",
          sayInstead: "Preparo la mochila."
        },
        {
          mistake: "Using “preparar café” as the only home phrase",
          whyItFails:
            "It is correct, but in a Colombian kitchen hacer café or tinto recién hecho often sounds more natural.",
          sayInstead: "Voy a hacer café."
        },
        {
          mistake: "Saying “estoy preparado la mochila”",
          whyItFails:
            "Preparado is an adjective or participle. For an action in progress, use estoy preparando.",
          sayInstead: "Estoy preparando la mochila."
        },
        {
          mistake: "Forgetting that prepararse needs the person",
          whyItFails:
            "Getting ready in Spanish usually marks who is getting ready: me preparo, se prepara, nos preparamos.",
          sayInstead: "Me estoy preparando para salir."
        }
      ],
      variations: [
        {
          form: "Preparo la mochila.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Getting an object ready with the things it needs."
        },
        {
          form: "Me estoy preparando para salir.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Saying you are getting yourself ready."
        },
        {
          form: "Todo está preparado.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Checking that everything has been made ready."
        },
        {
          form: "Voy a hacer café.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The homier way to say you are making coffee."
        },
        {
          form: "El tinto está recién hecho.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Offering or describing fresh black coffee."
        }
      ],
      prompt: "Ruth says “preparar la mochila” but “hago el café.” What is she showing?",
      choices: [
        "Preparar gets the bag ready, while hacer sounds natural for coffee.",
        "Preparar can never be used for objects that go inside bags.",
        "Hacer is formal written Spanish and preparar is only coastal slang."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence means “I'm getting ready to leave”?",
          choices: [
            "Preparo la mochila para salir.",
            "Me estoy preparando para salir.",
            "El tinto está preparado para salir."
          ],
          answer: 1,
          tests: "prepararse for getting oneself ready"
        },
        {
          prompt: "Which phrase sounds especially natural for coffee at home?",
          choices: [
            "Voy a hacer café.",
            "Voy a nacer café.",
            "Voy a probarme café."
          ],
          answer: 0,
          tests: "hacer café as home speech"
        },
        {
          prompt: "Which sentence uses preparado correctly as an adjective?",
          choices: [
            "Estoy preparado la mochila.",
            "Me preparado antes de salir.",
            "Todo está preparado."
          ],
          answer: 2,
          tests: "preparado as ready/prepared"
        },
        {
          prompt: "Which sentence prepares an object, not a person?",
          choices: [
            "Me preparo para el paseo.",
            "Preparo las botellas de agua.",
            "Me estoy preparando ahora."
          ],
          answer: 1,
          tests: "preparar without reflexive for objects"
        }
      ]
    },
    en: {
      title: "Preparar café y alistarse para salir",
      situation:
        "Usted está en Sydney y va a salir temprano en lancha con una familia colombiana. Hay café, bloqueador, gorras y una mochila por armar. Tiene que decir prepare, get ready, ready y make coffee sin sonar demasiado formal.",
      setting: {
        who: "Ruth coordina una salida familiar en lancha, y Sam es el invitado que quiere ayudar sin retrasar a nadie.",
        what: "Dejar listos café, bloqueador, gorras, agua y una mochila pequeña antes de caminar hacia el muelle.",
        when: "Temprano por la mañana, con luz fuerte y una lancha que no va a esperar.",
        where: "Sydney, en la cocina de un apartamento de una familia colombiana cerca del agua.",
        why: "Porque prepare sirve para objetos y planes, pero get ready sirve para la persona. Para café, make coffee suena más casero."
      },
      address: {
        form: "mixed",
        who: "Ruth y Sam usan nombres de pila; el inglés tiene el mismo you para una anfitriona mayor y para un invitado.",
        why: "El respeto se marca con tono, please y ayuda concreta. No hay un pronombre especial que traduzca usted.",
        ifYouSwitch:
          "Usar ma'am en cada frase puede sonar distante. En esta cocina, “can I help?” y “I'll get the bag ready” hacen mejor el trabajo."
      },
      dialogue: [
        {
          speaker: "Ruth",
          target: "Sam, can you get the bag ready while I make the coffee?",
          translation: "Sam, ¿usted puede preparar la mochila mientras hago el café?",
          pronunciation: "sam, can yu get de bag RE-di wail ai meik de KO-fi",
          literal: "Sam, ¿puede poner lista la mochila mientras hago el café?",
          why: "Get the bag ready suena más natural que prepare the backpack en una cocina familiar. Make the coffee es la frase casera."
        },
        {
          speaker: "Sam",
          target: "Yes. What needs to be ready before we leave?",
          translation: "Sí. ¿Qué necesita estar preparado antes de salir?",
          pronunciation: "yes. uat nids tu bi RE-di bi-FOR ui liv",
          literal: "Sí. ¿Qué necesita estar listo antes de que salgamos?",
          why: "Ready es la palabra ligera y cotidiana. Prepared también existe, pero puede sonar más formal o más planeado."
        },
        {
          speaker: "Ruth",
          target: "Water, sunscreen, and the documents. I'm getting ready too.",
          translation: "Agua, bloqueador y los documentos. Yo me estoy preparando también.",
          pronunciation: "UO-ter, SON-skrin, and de DO-kiu-ments. aim GE-ting RE-di tu",
          literal: "Agua, bloqueador y los documentos. Estoy poniéndome lista también.",
          why: "I'm getting ready traduce me estoy preparando. Prepare myself existe, pero en una mañana común suena demasiado formal."
        },
        {
          speaker: "Sam",
          target: "Then I'll get the bottles ready and check the caps.",
          translation: "Entonces preparo las botellas y reviso las gorras.",
          pronunciation: "den ail get de BO-tols RE-di and chek de caps",
          literal: "Entonces pondré listas las botellas y revisaré las gorras.",
          why: "Get ready can take an object: get the bottles ready. No siempre necesita prepare."
        },
        {
          speaker: "Ruth",
          target: "Perfect. The coffee is freshly made; help yourself before you get ready.",
          translation: "Perfecto. El tinto está recién hecho; sírvase antes de prepararse.",
          pronunciation: "PER-fekt. de KO-fi iz FRESH-li meid; jelp yor-SELF bi-FOR yu get RE-di",
          literal: "Perfecto. El café está recién hecho; sírvase antes de ponerse listo.",
          why: "Freshly made funciona muy bien para recién hecho. Help yourself es sírvase cuando la bebida ya está ahí."
        },
        {
          speaker: "Sam",
          target: "Thanks. I'll have coffee, get ready, and we'll leave with everything set.",
          translation: "Gracias. Tomo tinto, me preparo y salimos con todo listo.",
          pronunciation: "zanks. ail jav KO-fi, get RE-di, and uil liv uid EV-ri-zing set",
          literal: "Gracias. Tomaré café, me alistaré y saldremos con todo puesto.",
          why: "“Get ready” habla de Sam; “everything set” habla del plan y los objetos. El inglés separa la persona del alistamiento."
        }
      ],
      vocabulary: [
        {
          term: "prepare",
          explanation:
            "Preparar. Sirve para objetos, planes, clases, reuniones y comidas, pero no siempre es la opción más natural en conversación casera.",
          literal: "preparar",
          useWhen:
            "Úselo para documentos, ingredientes, una presentación, una clase, una reunión o algo que requiere alistamiento deliberado.",
          avoidWhen:
            "No lo use automáticamente para todo. En una cocina, make coffee o get the bag ready puede sonar más natural.",
          register: "neutro a algo formal",
          region: "Inglés universal.",
          related: ["get ready", "ready", "prepared", "make"],
          example: {
            target: "Can you prepare the documents?",
            translation: "¿Puede preparar los documentos?"
          }
        },
        {
          term: "get ready",
          explanation:
            "Alistarse o prepararse. Es la forma cotidiana para una persona que se prepara para salir.",
          literal: "ponerse listo",
          useWhen:
            "Úselo antes de salir, cambiarse, empacar, arreglarse o prepararse mentalmente.",
          avoidWhen:
            "No lo confunda con prepare an object. Una persona gets ready; una mochila can be gotten ready or prepared.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["prepare", "be ready", "get dressed", "leave"],
          example: {
            target: "I'm getting ready too.",
            translation: "Me estoy preparando también."
          }
        },
        {
          term: "ready",
          explanation:
            "Listo o preparado. Es más ligero y cotidiano que prepared.",
          literal: "listo",
          useWhen:
            "Úselo para preguntar si una persona, cosa o plan ya está listo.",
          avoidWhen:
            "Si necesita sonar más formal o técnico, prepared puede servir mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["prepared", "set", "done", "all ready"],
          example: {
            target: "What needs to be ready before we leave?",
            translation: "¿Qué necesita estar preparado antes de salir?"
          }
        },
        {
          term: "I'm getting ready",
          explanation:
            "Me estoy preparando. La frase normal mientras usted se viste, empaca o termina de alistarse.",
          literal: "me estoy poniendo listo",
          useWhen:
            "Úsela cuando alguien pregunta por qué aún no está listo para salir.",
          avoidWhen:
            "No diga I am preparing myself en una mañana común; suena rígido o demasiado literal.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I'm almost ready", "getting dressed", "packing", "leaving"],
          example: {
            target: "I'm getting ready to leave.",
            translation: "Me estoy preparando para salir."
          }
        },
        {
          term: "make coffee",
          explanation:
            "Hacer café. Es la frase casera y natural para preparar café.",
          literal: "hacer café",
          useWhen:
            "Úsela en cocinas, oficinas, mañanas familiares y ofertas sencillas de café.",
          avoidWhen:
            "Prepare coffee es correcto, pero puede sonar más formal que make coffee en casa.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["coffee", "freshly made", "brew coffee", "have coffee"],
          example: {
            target: "I'll make the coffee.",
            translation: "Voy a hacer el café."
          }
        },
        {
          term: "freshly made",
          explanation:
            "Recién hecho. Funciona para café, pan, jugo, comida y cosas preparadas hace poco.",
          literal: "frescamente hecho",
          useWhen:
            "Úselo cuando quiere decir que algo acaba de hacerse y está fresco.",
          avoidWhen:
            "No diga recently done para café. Freshly made es la frase natural.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["made", "fresh", "hot", "just made"],
          example: {
            target: "The coffee is freshly made.",
            translation: "El tinto está recién hecho."
          }
        },
        {
          term: "get set",
          explanation:
            "Quedar listo o prepararse para arrancar. Es útil para planes y salidas.",
          literal: "ponerse listo / quedar armado",
          useWhen:
            "Úselo para una salida, plan, equipo o grupo que está quedando listo.",
          avoidWhen:
            "No lo use como traducción automática de alistarse en toda frase. Get ready es más general.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["all set", "ready", "set up", "prepared"],
          example: {
            target: "We're all set to leave.",
            translation: "Estamos listos para salir."
          }
        }
      ],
      note:
        "Prepare existe y es útil, pero para sonar natural use get ready con personas, ready para el estado, make coffee para café y freshly made para recién hecho. “I am preparing myself” se entiende, pero una persona en una mañana normal diría “I'm getting ready.”",
      culture: [
        {
          label: "Get ready es cotidiano",
          body:
            "Los hispanohablantes a veces confían demasiado en prepare porque se parece a preparar. En inglés familiar, get ready suele ser más natural para salir de casa."
        },
        {
          label: "Coffee se makes",
          body:
            "Prepare coffee es correcto, pero make coffee suena más de cocina y menos de manual. La diferencia se parece a hacer café frente a preparar café en español colombiano."
        },
        {
          label: "Ready pregunta rápido",
          body:
            "“Are you ready?” es la pregunta de la puerta, del carro y del muelle. “Are you prepared?” puede sonar como examen, emergencia o discurso motivacional."
        },
        {
          label: "All set cierra el plan",
          body:
            "All set es una frase útil cuando ya están las cosas listas y el grupo puede salir. No traduce una sola palabra española, pero encaja muy bien en planes prácticos."
        }
      ],
      pitfalls: [
        {
          mistake: "“I am preparing myself to leave.”",
          whyItFails:
            "Se entiende, pero en conversación diaria suena rígido. La frase natural es get ready.",
          sayInstead: "I'm getting ready to leave."
        },
        {
          mistake: "“I will prepare coffee” en una cocina familiar",
          whyItFails:
            "Es correcto, pero puede sonar más formal de lo necesario. Make coffee suena más casero.",
          sayInstead: "I'll make coffee."
        },
        {
          mistake: "“The coffee is recently done.”",
          whyItFails:
            "Es una traducción literal de recién hecho. En inglés natural se dice freshly made.",
          sayInstead: "The coffee is freshly made."
        },
        {
          mistake: "“What needs prepared?”",
          whyItFails:
            "La frase necesita to be antes del adjetivo o participio. Sin eso suena incompleta.",
          sayInstead: "What needs to be ready?"
        }
      ],
      variations: [
        {
          form: "I'll get the bag ready.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Alistar un objeto con lo que necesita."
        },
        {
          form: "I'm getting ready to leave.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Decir que usted se está alistando."
        },
        {
          form: "Everything is ready.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Confirmar que todo quedó preparado."
        },
        {
          form: "I'll make coffee.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "La forma casera de decir que va a preparar café."
        },
        {
          form: "The coffee is freshly made.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Ofrecer o describir café recién hecho."
        }
      ],
      prompt: "Ruth says “get the bag ready” but “make the coffee.” ¿Qué está mostrando?",
      choices: [
        "Get ready suits the bag, while make sounds natural for coffee.",
        "Prepare can never be used with documents or equipment.",
        "Make is formal written English and ready is only island slang."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase significa que usted se está alistando para salir?",
          choices: [
            "I get the bag ready to leave.",
            "I'm getting ready to leave.",
            "The coffee is ready to leave."
          ],
          answer: 1,
          tests: "get ready for a person"
        },
        {
          prompt: "¿Cuál frase suena más casera para café?",
          choices: [
            "I'll make coffee.",
            "I'll born coffee.",
            "I'll try on coffee."
          ],
          answer: 0,
          tests: "make coffee as the home phrase"
        },
        {
          prompt: "¿Cuál frase traduce recién hecho con naturalidad?",
          choices: [
            "The coffee is recently done.",
            "The coffee is newly acted.",
            "The coffee is freshly made."
          ],
          answer: 2,
          tests: "freshly made for recién hecho"
        },
        {
          prompt: "¿Cuál pregunta está completa en inglés?",
          choices: [
            "What needs prepared now?",
            "What needs to be ready?",
            "What needs making readying?"
          ],
          answer: 1,
          tests: "needs to be ready as a complete phrase"
        }
      ]
    }
  },
  {
    id: "organizing-a-weekend-plan-in-girardot",
    level: "Developing · Getting ready",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "familiar",
    pathways: ["independent"],
    verb: "organizar",
    review: "pending",
    es: {
      title: "Organizar el plan del fin de semana",
      situation:
        "You are in Girardot with friends who want to take a short trip to the river. Schedules, food, transportation, and money all need to be clarified. You have to organize the plan, understand when people would say cuadrar algo, and remember that organicé changes z to c.",
      setting: {
        who: "Paula is the friend who keeps the plan from becoming pure talk. Jamie is willing to help but needs the organizing verbs and the casual alternative.",
        what: "A practical planning conversation: who brings food, who confirms transport, what time everyone meets, and what still needs arranging.",
        when: "Friday evening, early enough to fix the plan but late enough that people are already sending voice notes.",
        where: "Girardot, at a friend's dining table with phones open and a weekend river plan still taking shape.",
        why: "Because organizar is the clear verb for putting plans in order, while Colombians often say cuadrar algo more casually. The preterite yo form organicé needs spelling care."
      },
      address: {
        form: "tú",
        who: "Paula and Jamie use tú as friends planning a weekend together.",
        why: "The conversation is practical but not formal. Tú keeps the planning direct and friendly.",
        ifYouSwitch:
          "Usted would sound like a meeting or a favor asked at a distance. Vos would not be impossible among some friends, but it is not needed for this setting."
      },
      dialogue: [
        {
          speaker: "Paula",
          target: "Jamie, tenemos que organizar el paseo antes de que todos opinen.",
          translation: "Jamie, we need to organize the trip before everyone gives an opinion.",
          pronunciation: "JAY-mee, teh-NEH-mos keh or-gah-nee-SAR el pah-SEH-oh AN-tes deh keh TOH-dos oh-PEE-nyen",
          literal: "Jamie, we-have to organize the outing before everyone opines.",
          why: "Organizar is the clean verb for putting a plan in order: times, people, food, money, and transport."
        },
        {
          speaker: "Jamie",
          target: "Yo organicé la lista de comida, pero no el transporte.",
          translation: "I organized the food list, but not the transport.",
          pronunciation: "yo or-gah-nee-SEH lah LEES-tah deh koh-MEE-dah, PEH-roh noh el trans-POR-teh",
          literal: "I organized the list of food, but not the transport.",
          why: "Organicé is the preterite yo form. The z changes to c before é so the sound stays the same."
        },
        {
          speaker: "Paula",
          target: "Bien. Yo organizo la hora de salida y tú confirmas quién va.",
          translation: "Good. I'll organize the departure time and you confirm who's going.",
          pronunciation: "byen. yo or-gah-NEE-soh lah OH-rah deh sah-LEE-dah ee too kon-FEER-mahs kyen bah",
          literal: "Good. I organize the hour of departure and you confirm who goes.",
          why: "Organizo is regular in the present yo form. The spelling change only appears before e, as in organicé."
        },
        {
          speaker: "Jamie",
          target: "¿Y si decimos “cuadramos algo” en el grupo?",
          translation: "And what if we say “we'll arrange something” in the group?",
          pronunciation: "ee see deh-SEE-mos kwah-DRAH-mos AL-goh en el GHRU-poh",
          literal: "And if we say we-square something in the group?",
          why: "Cuadrar algo is extremely common for arranging plans casually. It is worth knowing, but this lesson keeps organizar as the clear spine."
        },
        {
          speaker: "Paula",
          target: "Sí, pero después hay que organizar los detalles de verdad.",
          translation: "Yes, but afterward we have to organize the details for real.",
          pronunciation: "see, PEH-roh des-PWES eye keh or-gah-nee-SAR los deh-TAH-yes deh behr-DAHD",
          literal: "Yes, but afterward one must organize the details of truth.",
          why: "Cuadrar can open the plan; organizar makes it real. The distinction is register and precision, not correctness."
        },
        {
          speaker: "Jamie",
          target: "Listo: yo organizo la comida y cuadramos la salida hoy.",
          translation: "Done: I'll organize the food and we'll arrange the departure today.",
          pronunciation: "LEES-toh: yo or-gah-NEE-soh lah koh-MEE-dah ee kwah-DRAH-mos lah sah-LEE-dah oy",
          literal: "Ready: I organize the food and we-square the departure today.",
          why: "This is a natural division: organizar for the concrete list, cuadrar for arranging the plan with people."
        }
      ],
      vocabulary: [
        {
          term: "organizar",
          explanation:
            "To organize, arrange, or put things in order. It works for plans, lists, rooms, events, documents, and people.",
          literal: "to organize",
          useWhen:
            "Use it when you are giving structure to a plan, list, event, trip, schedule, or shared task.",
          avoidWhen:
            "Avoid assuming it is always the most casual Colombian choice. For plans, cuadrar algo often sounds more relaxed.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["organicé", "organizo", "organizado", "cuadrar"],
          example: {
            target: "Tenemos que organizar el paseo.",
            translation: "We need to organize the trip."
          }
        },
        {
          term: "organicé",
          explanation:
            "The preterite yo form of organizar. The spelling changes z to c before é: organicé.",
          literal: "I organized",
          useWhen:
            "Use it when you say what you personally organized yesterday, last week, or earlier today.",
          avoidWhen:
            "Avoid organizé. Spanish changes the spelling to preserve the soft sound before e.",
          register: "neutral",
          region: "Universal Spanish spelling.",
          related: ["organicé la lista", "organizó", "organizamos", "organizar"],
          example: {
            target: "Yo organicé la lista de comida.",
            translation: "I organized the food list."
          }
        },
        {
          term: "organizo",
          explanation:
            "The present yo form: I organize. It keeps the z because the next vowel is o.",
          literal: "I organize",
          useWhen:
            "Use it for what you usually organize or what you are taking responsibility for now.",
          avoidWhen:
            "Avoid changing it to organico. The spelling change is only needed before e.",
          register: "neutral",
          region: "Universal Spanish grammar.",
          related: ["organizar", "organizas", "organiza", "organicé"],
          example: {
            target: "Yo organizo la hora de salida.",
            translation: "I'll organize the departure time."
          }
        },
        {
          term: "organizado",
          explanation:
            "Organized or arranged. It can describe a person, plan, list, room, or event.",
          literal: "organized",
          useWhen:
            "Use it when a plan has order, a person keeps things clear, or the details are already arranged.",
          avoidWhen:
            "Avoid using it as the action by itself. If you did the arranging, use organicé or organicé todo.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["listo", "preparado", "en orden", "planeado"],
          example: {
            target: "El paseo ya está organizado.",
            translation: "The trip is already organized."
          }
        },
        {
          term: "cuadrar algo",
          explanation:
            "The more casual Colombian way to arrange or sort out a plan. Literally it means to square something.",
          literal: "to square something",
          useWhen:
            "Use it with friends for plans, times, rides, money, or details that need to be agreed.",
          avoidWhen:
            "Avoid it in a formal document or when you need the clearer, more standard organizar.",
          register: "friendly informal",
          region: "Very common Colombian Spanish.",
          related: ["cuadramos", "arreglar", "organizar", "ponernos de acuerdo"],
          example: {
            target: "Cuadramos la salida hoy.",
            translation: "We'll arrange the departure today."
          }
        },
        {
          term: "la hora de salida",
          explanation:
            "The departure time. It is one of the first details people organize or cuadrar for a trip.",
          literal: "the leaving hour",
          useWhen:
            "Use it for trips, rides, family outings, airport runs, and weekend plans.",
          avoidWhen:
            "Avoid leaving it vague if other people depend on you. Colombian plans may be flexible, but transport needs a time.",
          register: "neutral",
          region: "General Colombian.",
          related: ["salida", "punto de encuentro", "transporte", "horario"],
          example: {
            target: "Organizo la hora de salida.",
            translation: "I'll organize the departure time."
          }
        },
        {
          term: "de verdad",
          explanation:
            "For real. It adds pressure when a vague plan needs to become an actual plan.",
          literal: "of truth",
          useWhen:
            "Use it when you contrast talk with action, or a loose idea with real details.",
          avoidWhen:
            "Avoid overusing it in formal planning. It is conversational emphasis.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["en serio", "ahora sí", "concretar", "detalles"],
          example: {
            target: "Hay que organizar los detalles de verdad.",
            translation: "We need to organize the details for real."
          }
        }
      ],
      note:
        "Organizar is the clear, neutral verb for putting plans, lists and events in order. Colombian speech also leans heavily on cuadrar for plans: “cuadramos algo,” “cuadremos la hora,” “ya quedó cuadrado.” Use organizar when you want clarity and structure; use cuadrar with friends when the point is arranging the practical details. In writing, remember the spelling: yo organicé, not organizé.",
      culture: [
        {
          label: "Cuadrar is the plan verb you will hear",
          body:
            "A Colombian group chat may not say “organicemos una salida” first. It may say “cuadremos algo.” That does not make organizar useless; it tells you which verb belongs to casual negotiation and which one belongs to structure."
        },
        {
          label: "A plan becomes real in details",
          body:
            "Food, money, transport, meeting point, and time are the difference between a nice idea and an outing that happens. Organizar is the verb for turning talk into a list people can follow."
        },
        {
          label: "Spelling protects sound",
          body:
            "Organicé changes z to c for spelling, not because the verb has a new stem. Spanish is preserving the same sound before e. The same pattern appears in other -zar verbs."
        },
        {
          label: "Friendly planning can still be direct",
          body:
            "Colombian planning among friends may include jokes, voice notes and delays, but someone still has to ask who brings what. Directness about details is not bossiness when the group needs the plan to work."
        }
      ],
      pitfalls: [
        {
          mistake: "Writing “yo organizé” in the preterite",
          whyItFails:
            "The yo preterite of -zar verbs changes z to c before é. The sound stays; the spelling changes.",
          sayInstead: "Yo organicé la lista."
        },
        {
          mistake: "Using “organico” for “I organize”",
          whyItFails:
            "The present yo form does not need the spelling change because the next vowel is o. The correct form is organizo.",
          sayInstead: "Yo organizo el paseo."
        },
        {
          mistake: "Missing “cuadrar” in casual plans",
          whyItFails:
            "Organizar is correct, but Colombians often say cuadrar when arranging times, rides, money, or plans with friends.",
          sayInstead: "Cuadramos la salida."
        },
        {
          mistake: "Calling a vague idea “organizado” too early",
          whyItFails:
            "Organizado suggests the details are in order. If nobody knows time, food, or transport, the plan is not organized yet.",
          sayInstead: "Todavía falta organizar los detalles."
        }
      ],
      variations: [
        {
          form: "Tenemos que organizar el paseo.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Putting a shared trip or outing in order."
        },
        {
          form: "Yo organicé la lista.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Saying what you personally organized in the past."
        },
        {
          form: "Yo organizo la hora de salida.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Taking responsibility for a specific detail."
        },
        {
          form: "Cuadramos algo en el grupo.",
          register: "friendly informal",
          region: "Colombian",
          whenToUse: "Casually arranging plans by chat or with friends."
        },
        {
          form: "El paseo ya está organizado.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Confirming the plan already has its details."
        }
      ],
      prompt: "Jamie says “organicé la lista” but Paula says “organizo la hora.” What should you notice?",
      choices: [
        "The past yo form changes spelling, but the present yo form does not.",
        "Both forms are wrong because organizar cannot be used with plans.",
        "The verb must always be replaced by cuadrar in every sentence."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which spelling is correct for “I organized”?",
          choices: [
            "Yo organicé la lista.",
            "Yo organizé la lista.",
            "Yo organiqué la lista."
          ],
          answer: 0,
          tests: "z to c in organicé"
        },
        {
          prompt: "Which sentence uses the present yo form correctly?",
          choices: [
            "Yo organico la salida.",
            "Yo organicé la salida.",
            "Yo organizo la salida."
          ],
          answer: 2,
          tests: "organizo as the present yo form"
        },
        {
          prompt: "Which phrase is the casual Colombian alternative for arranging plans?",
          choices: [
            "Cuadramos algo en el grupo.",
            "Nacemos algo en el grupo.",
            "Probamos ropa en el grupo."
          ],
          answer: 0,
          tests: "cuadrar algo for casual plans"
        },
        {
          prompt: "When is a plan truly organizado?",
          choices: [
            "When the details are already in order.",
            "When nobody knows the departure time.",
            "When the group only sends jokes."
          ],
          answer: 0,
          tests: "organizado as details in order"
        }
      ]
    },
    en: {
      title: "Organizar el plan del fin de semana",
      situation:
        "Usted está en San Antonio con amigos colombianos que quieren hacer una salida corta al río. Hay horarios, comida, transporte y plata por aclarar. Necesita usar organize, arrange, set up y sort out sin traducir cuadrar palabra por palabra.",
      setting: {
        who: "Paula es la amiga que evita que el plan se quede en pura charla. Jamie quiere ayudar, pero necesita los verbos de organización en inglés.",
        what: "Una conversación práctica: quién lleva comida, quién confirma transporte, a qué hora se encuentran y qué falta por arreglar.",
        when: "Viernes por la noche, con tiempo para arreglar el plan pero con todos mandando mensajes de voz.",
        where: "San Antonio, en la mesa de un apartamento, con teléfonos abiertos y un plan de fin de semana todavía a medias.",
        why: "Porque organizar no siempre es organize en inglés. Para planes casuales, arrange, set up y sort out pueden sonar más naturales."
      },
      address: {
        form: "mixed",
        who: "Paula y Jamie son amigos; el inglés usa el mismo you para todo el plan.",
        why: "La confianza se marca con frases directas como “we need to” y “I'll handle,” no con otro pronombre.",
        ifYouSwitch:
          "Volverlo demasiado formal haría sonar el paseo como una reunión de trabajo. Entre amigos, claridad no exige rigidez."
      },
      dialogue: [
        {
          speaker: "Paula",
          target: "Jamie, we need to organize the trip before everyone weighs in.",
          translation: "Jamie, tenemos que organizar el paseo antes de que todos opinen.",
          pronunciation: "JAY-mi, ui nid tu OR-ga-naiz de trip bi-FOR EV-ri-uan ueiz in",
          literal: "Jamie, necesitamos organizar el paseo antes de que todos pesen adentro.",
          why: "Organize funciona cuando se habla de poner estructura al plan. Weighs in significa que todo el mundo empieza a opinar."
        },
        {
          speaker: "Jamie",
          target: "I organized the food list, but not the transport.",
          translation: "Yo organicé la lista de comida, pero no el transporte.",
          pronunciation: "ai OR-ga-naizd de fud list, bot not de TRANS-port",
          literal: "Yo organicé la lista de comida, pero no el transporte.",
          why: "Organized es el pasado regular. A diferencia de organicé, el inglés no cambia la ortografía para proteger un sonido."
        },
        {
          speaker: "Paula",
          target: "Good. I'll arrange the departure time and you confirm who's going.",
          translation: "Bien. Yo organizo la hora de salida y tú confirmas quién va.",
          pronunciation: "gud. ail a-REINJ de di-PAR-cher taim and yu kon-FERM huz GO-ing",
          literal: "Bien. Arreglaré la hora de salida y usted confirma quién va.",
          why: "Arrange es muy natural para horas, citas y detalles de planes. No todo organizar tiene que ser organize."
        },
        {
          speaker: "Jamie",
          target: "What if we say “we'll sort something out” in the group?",
          translation: "¿Y si decimos “cuadramos algo” en el grupo?",
          pronunciation: "uat if ui sei uil sort SOM-zing aut in de grup",
          literal: "¿Y si decimos ordenaremos algo afuera en el grupo?",
          why: "Sort something out traduce bien la idea casual de cuadrar algo: resolverlo, arreglarlo, dejarlo andando."
        },
        {
          speaker: "Paula",
          target: "Yes, but then we have to organize the real details.",
          translation: "Sí, pero después hay que organizar los detalles de verdad.",
          pronunciation: "yes, bot den ui jav tu OR-ga-naiz de ril DEI-teils",
          literal: "Sí, pero después tenemos que organizar los detalles reales.",
          why: "Aquí organize vuelve a servir porque habla de estructura concreta: comida, hora, transporte y responsabilidades."
        },
        {
          speaker: "Jamie",
          target: "Done: I'll handle the food, and we'll set up the ride today.",
          translation: "Listo: yo organizo la comida y cuadramos la salida hoy.",
          pronunciation: "don: ail JAN-dol de fud, and uil set op de raid tu-DEI",
          literal: "Listo: manejaré la comida y armaremos el transporte hoy.",
          why: "Handle the food suena natural para encargarse de esa parte. Set up the ride arregla el transporte sin traducir cuadrar literalmente."
        }
      ],
      vocabulary: [
        {
          term: "organize",
          explanation:
            "Organizar: poner estructura, orden o sistema. Funciona bien para listas, eventos, documentos y algunos planes.",
          literal: "organizar",
          useWhen:
            "Úselo cuando habla de ordenar información, crear una estructura o coordinar un evento con detalles claros.",
          avoidWhen:
            "No lo use automáticamente para todo cuadrar. En planes casuales, arrange, set up or sort out puede sonar mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["organized", "arrange", "set up", "sort out"],
          example: {
            target: "We need to organize the trip.",
            translation: "Tenemos que organizar el paseo."
          }
        },
        {
          term: "I organized",
          explanation:
            "Organicé. Es pasado regular en inglés: organized, sin cambio ortográfico comparable a z por c.",
          literal: "yo organicé",
          useWhen:
            "Úselo para decir qué lista, evento, documento o parte del plan organizó usted.",
          avoidWhen:
            "No diga I organiced. El pasado se escribe organized.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["organized", "planned", "arranged", "handled"],
          example: {
            target: "I organized the food list.",
            translation: "Yo organicé la lista de comida."
          }
        },
        {
          term: "arrange",
          explanation:
            "Organizar o arreglar detalles como horas, citas, transporte y encuentros.",
          literal: "arreglar / organizar",
          useWhen:
            "Úselo para horarios, citas, reuniones, transporte o detalles que deben acordarse.",
          avoidWhen:
            "No lo confunda con ordenar una habitación. Para eso organize or tidy puede ser mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["set up", "schedule", "organize", "plan"],
          example: {
            target: "I'll arrange the departure time.",
            translation: "Yo organizo la hora de salida."
          }
        },
        {
          term: "organized",
          explanation:
            "Organizado. Describe algo que ya tiene orden o una persona que maneja bien los detalles.",
          literal: "organizado",
          useWhen:
            "Úselo para una lista clara, un evento armado, un plan con detalles o una persona ordenada.",
          avoidWhen:
            "No lo use si el plan todavía es sólo una idea vaga. Organized promete detalles.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["ready", "planned", "in order", "prepared"],
          example: {
            target: "The trip is already organized.",
            translation: "El paseo ya está organizado."
          }
        },
        {
          term: "sort something out",
          explanation:
            "Una buena traducción casual de cuadrar algo: resolver, arreglar o dejar listo un asunto.",
          literal: "ordenar algo afuera",
          useWhen:
            "Úselo con amigos para planes, problemas prácticos, pagos, transporte o detalles pendientes.",
          avoidWhen:
            "No lo use en escritura muy formal si arrange or organize sería más claro.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["figure it out", "arrange", "set up", "handle"],
          example: {
            target: "We'll sort something out in the group.",
            translation: "Cuadramos algo en el grupo."
          }
        },
        {
          term: "departure time",
          explanation:
            "Hora de salida. Es un detalle básico que se arranges or sets para que el plan funcione.",
          literal: "hora de salida",
          useWhen:
            "Úselo para viajes, paseos, vuelos, buses, carros compartidos y encuentros.",
          avoidWhen:
            "No diga leaving hour como traducción literal. Departure time es la frase natural.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["meeting point", "ride", "schedule", "arrival time"],
          example: {
            target: "I'll arrange the departure time.",
            translation: "Organizo la hora de salida."
          }
        },
        {
          term: "for real",
          explanation:
            "De verdad. Añade presión cuando un plan vago necesita detalles reales.",
          literal: "por real",
          useWhen:
            "Úselo para contrastar hablar de un plan con resolverlo realmente.",
          avoidWhen:
            "No lo use en un correo formal si seriously or actually sería más apropiado.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["actually", "seriously", "really", "details"],
          example: {
            target: "We have to organize the details for real.",
            translation: "Hay que organizar los detalles de verdad."
          }
        }
      ],
      note:
        "Organize es útil, pero no traduzca cuadrar siempre como organize. Para una hora puede usar arrange, para transporte set up, para encargarse de comida handle, y para resolver un asunto entre amigos sort something out. En inglés natural, el detalle que usted organiza suele decidir el verbo.",
      culture: [
        {
          label: "Organize suena estructurado",
          body:
            "Organize es bueno cuando hay listas, documentos o una estructura clara. Si sólo están arreglando una salida por chat, arrange or sort out puede sentirse más cercano a cuadrar."
        },
        {
          label: "Handle reparte responsabilidades",
          body:
            "“I'll handle the food” no significa manipular la comida con las manos. Significa encargarse de esa parte. Es una frase muy útil para dividir tareas."
        },
        {
          label: "Set up arma el plan",
          body:
            "Set up sirve para transporte, reuniones, llamadas, equipos y planes. Es flexible, pero siempre sugiere dejar algo funcionando o listo."
        },
        {
          label: "La claridad no es rigidez",
          body:
            "Entre amigos, decir quién lleva comida y quién confirma transporte no vuelve el plan corporativo. En inglés, como en español, la amistad agradece los detalles claros."
        }
      ],
      pitfalls: [
        {
          mistake: "“I organiced the list.”",
          whyItFails:
            "El pasado regular se escribe organized. No copie el cambio ortográfico de organicé al inglés.",
          sayInstead: "I organized the list."
        },
        {
          mistake: "“We will square something in the group.”",
          whyItFails:
            "Es una traducción literal de cuadrar algo. En inglés natural, diga sort something out or arrange something.",
          sayInstead: "We'll sort something out in the group."
        },
        {
          mistake: "“I organize the ride today” en tono casual",
          whyItFails:
            "Se entiende, pero set up the ride suena más natural para arreglar transporte entre amigos.",
          sayInstead: "I'll set up the ride today."
        },
        {
          mistake: "“The plan is organized” cuando no hay hora ni transporte",
          whyItFails:
            "Organized promete detalles resueltos. Si todavía faltan hora y transporte, el plan is not organized yet.",
          sayInstead: "We still need to sort out the details."
        }
      ],
      variations: [
        {
          form: "We need to organize the trip.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Poner estructura a una salida compartida."
        },
        {
          form: "I organized the list.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Decir qué organizó usted en el pasado."
        },
        {
          form: "I'll arrange the departure time.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Encargarse de una hora o cita específica."
        },
        {
          form: "We'll sort something out in the group.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Traducir cuadramos algo con amigos."
        },
        {
          form: "The trip is already organized.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Confirmar que el plan ya tiene detalles."
        }
      ],
      prompt: "Jamie says “I organized the list,” but Paula says “I'll arrange the departure time.” ¿Qué debe notar?",
      choices: [
        "Different details can choose different English verbs.",
        "Both phrases are wrong because plans cannot be organized.",
        "Arrange only works for clothing inside a fitting room."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál pasado está escrito correctamente?",
          choices: [
            "I organized the list.",
            "I organiced the list.",
            "I organicé the list."
          ],
          answer: 0,
          tests: "organized as the English past form"
        },
        {
          prompt: "¿Cuál frase traduce cuadramos algo sin calcarla?",
          choices: [
            "We will square something.",
            "We'll sort something out.",
            "We will born something."
          ],
          answer: 1,
          tests: "sort something out for casual arranging"
        },
        {
          prompt: "¿Cuál frase funciona para arreglar transporte?",
          choices: [
            "I'll taste the ride today.",
            "I'll wear the ride today.",
            "I'll set up the ride today."
          ],
          answer: 2,
          tests: "set up the ride for transport"
        },
        {
          prompt: "¿Cuándo puede decir que el plan is organized?",
          choices: [
            "When the details are already in order.",
            "When nobody knows the departure time.",
            "When the group only sends jokes."
          ],
          answer: 0,
          tests: "organized as having details in order"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/45-developing-getting-ready.js");
