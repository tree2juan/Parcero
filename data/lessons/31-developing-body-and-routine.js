/*
 * Lesson block: developing / body and routine.
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
 * The three verbs here — levantar, sentar and vestir — are body-and-routine
 * verbs whose pronominal forms carry much of the everyday load: levantarse,
 * sentarse and vestirse. The two directions are mirrors: same number of
 * dialogue turns, vocabulary entries, culture notes, pitfalls, variations and
 * practice questions, and the same optional slots filled on the same rows. That
 * is enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "getting-up-for-the-morning-bus-in-neiva",
    level: "Developing · Body and routine",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "familiar",
    pathways: ["independent"],
    verb: "levantar",
    review: "pending",
    es: {
      title: "Levantarse para el bus de la mañana",
      situation:
        "Alex está en Neiva, alojado en la casa de una amiga, y tiene que salir temprano hacia el desierto de la Tatacoa. Hace calor desde la mañana y el bus no espera. Tú necesitas entender cuándo levantar es alzar algo y cuándo levantarse es salir de la cama.",
      setting: {
        who: "María José is hosting Alex for one night, and her father already checked the bus time before leaving for work.",
        what: "A sleepy kitchen exchange about getting up, raising a hand to stop the bus, and lifting a backpack without mixing those actions.",
        when: "Just after dawn, before the heat of Neiva turns the sidewalk bright and slow.",
        where: "Neiva, in a family kitchen near the bus route that heads toward Villavieja and the Tatacoa road.",
        why: "Because levantar is a physical verb, but daily Spanish leans heavily on levantarse for getting out of bed. If you only learn levantar la mano, you miss the morning routine."
      },
      address: {
        form: "tú",
        who: "María José and Alex use tú because they are friends of the same age staying in a family home.",
        why: "In this relaxed kitchen, tú keeps the advice friendly. For you as a guest, copying tú after your friend uses it is natural and not disrespectful.",
        ifYouSwitch:
          "Usted would be polite with the father or an older neighbor, but between these two it would add distance. Vos is not the neutral choice for this scene."
      },
      dialogue: [
        {
          speaker: "María José",
          target: "Alex, levántate ya, que el bus pasa temprano.",
          translation: "Alex, get up now, because the bus comes early.",
          pronunciation: "AH-leks, leh-BAN-tah-teh yah, keh el boos PAH-sah tem-PRAH-noh",
          literal: "Alex, lift-yourself now, because the bus passes early.",
          why: "Levántate is levantarse: getting yourself out of bed. The pronoun is not decorative; without it, levanta means lift or raise something."
        },
        {
          speaker: "Alex",
          target: "Ya me levanté, pero todavía estoy medio dormido.",
          translation: "I'm already up, but I'm still half asleep.",
          pronunciation: "yah meh leh-ban-TEH, PEH-roh toh-dah-BEE-ah es-TOY MEH-dyoh dor-MEE-doh",
          literal: "Already myself I-got-up, but still I-am half asleep.",
          why: "“Me levanté” says the getting-up happened. It does not say Alex lifted an object; it says he moved from bed into the day."
        },
        {
          speaker: "María José",
          target: "Entonces levanta la mochila, pero sin afán.",
          translation: "Then lift the backpack, but don't rush.",
          pronunciation: "en-TON-ses leh-BAN-tah lah moh-CHEE-lah, PEH-roh seen ah-FAN",
          literal: "Then lift the backpack, but without hurry.",
          why: "Now the verb is plain levantar because there is a real object: la mochila. This is lifting, not getting up."
        },
        {
          speaker: "Alex",
          target: "Está pesada. ¿La levanto entre los dos?",
          translation: "It's heavy. Should we lift it between the two of us?",
          pronunciation: "es-TAH peh-SAH-dah. lah leh-BAN-toh EN-treh los dos",
          literal: "It-is heavy. It I-lift between the two?",
          why: "The object pronoun la points back to mochila. Spanish can keep the object light once the noun is known."
        },
        {
          speaker: "María José",
          target: "Sí, y en la esquina levanta la mano para parar el bus.",
          translation: "Yes, and at the corner raise your hand to stop the bus.",
          pronunciation: "see, ee en lah es-KEE-nah leh-BAN-tah lah MAH-noh PAH-rah pah-RAR el boos",
          literal: "Yes, and on the corner raise the hand to stop the bus.",
          why: "Levantar la mano is the other everyday body use: raising a hand so the driver sees you. It is still plain levantar because the hand is the object."
        },
        {
          speaker: "Alex",
          target: "Listo: me levanto temprano y levanto la mano en la esquina.",
          translation: "Got it: I get up early and raise my hand at the corner.",
          pronunciation: "LEES-toh: meh leh-BAN-toh tem-PRAH-noh ee leh-BAN-toh lah MAH-noh en lah es-KEE-nah",
          literal: "Ready: myself I-get-up early and I-raise the hand on the corner.",
          why: "This line keeps both meanings side by side: me levanto for the body getting up, levanto la mano for raising a part of the body."
        }
      ],
      vocabulary: [
        {
          term: "levantar",
          explanation:
            "To lift, raise, or pick something up. The object is the thing that moves upward.",
          literal: "to lift / raise",
          useWhen:
            "Raising a hand, lifting a bag, picking something off the floor, or putting something upright.",
          avoidWhen:
            "You mean getting out of bed. Daily Spanish normally uses levantarse for that.",
          register: "neutral",
          region: "Universal Spanish; the physical sense is understood everywhere in Colombia.",
          related: ["subir", "alzar", "recoger", "cargar"],
          example: {
            target: "Levanta la mochila.",
            translation: "Lift the backpack."
          }
        },
        {
          term: "levantarse",
          explanation:
            "To get up, especially from bed or from a lying or seated position. The person is the one who rises.",
          literal: "to lift oneself",
          useWhen:
            "Morning routines, standing up from a chair, or saying someone is already up.",
          avoidWhen:
            "You are lifting an object. Then plain levantar is enough.",
          register: "neutral",
          region: "Universal Spanish and essential in everyday Colombian routine talk.",
          related: ["pararse", "madrugar", "estar despierto", "salir de la cama"],
          example: {
            target: "Me levanté temprano.",
            translation: "I got up early."
          }
        },
        {
          term: "levanta la mano",
          explanation:
            "Raise your hand. It can mean asking to speak, voting, or flagging down transport.",
          literal: "raise the hand",
          useWhen:
            "You need to be seen: in class, at a meeting, or at a bus stop.",
          avoidWhen:
            "You are saying you got out of bed. The hand is the object here, not the whole person.",
          register: "neutral",
          region: "General Colombian.",
          related: ["hacer la señal", "parar el bus", "alzar la mano", "llamar la atención"],
          example: {
            target: "Levanta la mano en la esquina.",
            translation: "Raise your hand at the corner."
          }
        },
        {
          term: "ya me levanté",
          explanation:
            "I'm already up. A useful answer when someone thinks you are still in bed.",
          literal: "already myself I-got-up",
          useWhen:
            "Defending your morning progress, even if you still look sleepy.",
          avoidWhen:
            "You have only woken up but are still lying down. Then you are awake, not levantado.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["ya estoy arriba", "ya salí de la cama", "estoy despierto", "madrugué"],
          example: {
            target: "Ya me levanté.",
            translation: "I'm already up."
          }
        },
        {
          term: "sin afán",
          explanation:
            "Without rushing. A Colombian way to slow the moment down and keep it calm.",
          literal: "without hurry",
          useWhen:
            "Someone is hurrying, apologizing, or about to lift something awkward.",
          avoidWhen:
            "The deadline is truly strict. Then it can sound careless rather than reassuring.",
          register: "friendly neutral",
          region: "Very common in Colombia.",
          related: ["despacio", "con calma", "tranquilo", "sin correr"],
          example: {
            target: "Levanta la mochila, pero sin afán.",
            translation: "Lift the backpack, but don't rush."
          }
        },
        {
          term: "medio dormido",
          explanation:
            "Half asleep. It describes the body after getting up before the mind has caught up.",
          literal: "half slept",
          useWhen:
            "You are technically out of bed but still slow, quiet, or foggy.",
          avoidWhen:
            "You mean fully asleep. Medio dormido is the messy middle.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["con sueño", "despistado", "lento", "sin arrancar"],
          example: {
            target: "Todavía estoy medio dormido.",
            translation: "I'm still half asleep."
          }
        },
        {
          term: "parar el bus",
          explanation:
            "To stop the bus so it picks you up. In many places the hand signal matters.",
          literal: "to stop the bus",
          useWhen:
            "You are waiting on a route where the driver expects a visible signal.",
          avoidWhen:
            "You are talking about getting off. That is a different action and a different phrase.",
          register: "neutral",
          region: "General Colombian urban usage.",
          related: ["hacer la parada", "la esquina", "la ruta", "la señal"],
          example: {
            target: "Levanta la mano para parar el bus.",
            translation: "Raise your hand to stop the bus."
          }
        }
      ],
      note:
        "Levantar is the upward movement; levantarse is what your own body does when the day starts. The pronoun matters because it changes the event. Levanto la mochila means I lift the backpack; me levanto means I get up. Daily speech needs both, often before breakfast.",
      culture: [
        {
          label: "Neiva mornings start practical",
          body:
            "In a hot city, early errands are not just discipline; they are strategy. Getting up before the heat lets you catch transport, walk without suffering, and arrive with some patience left. That makes levantarse a real daily verb, not a textbook reflexive."
        },
        {
          label: "The hand signal is part of the route",
          body:
            "Depending on the route and the stop, a bus may not behave like a train with fixed doors and announcements. Raising a hand at the corner is a normal way to make yourself visible. It is not dramatic; it is a small piece of street choreography."
        },
        {
          label: "“Sin afán” softens hurry",
          body:
            "Colombians use “sin afán” to take pressure out of a moment. It can mean don't rush, no hurry, or take it easy. Said while someone lifts a heavy backpack, it is both practical and kind."
        },
        {
          label: "Getting up is not the same as waking up",
          body:
            "You can be awake and still not levantado. Spanish keeps that physical difference clear. If someone calls from the kitchen, “¿ya te levantaste?” they usually mean whether your body is out of bed and moving."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “levanto temprano” for “I get up early”",
          whyItFails:
            "Plain levantar needs an object: what are you lifting? For getting yourself out of bed, Spanish uses the pronominal levantarse.",
          sayInstead: "Me levanto temprano."
        },
        {
          mistake: "Using levantarse for lifting a bag",
          whyItFails:
            "A backpack does not get itself up as a routine. When you lift an object, the verb is plain levantar and the object follows.",
          sayInstead: "Levanto la mochila."
        },
        {
          mistake: "Thinking “ya me levanté” means only “I woke up”",
          whyItFails:
            "It says more than waking. It says you got out of bed or rose from where you were. You can be awake and still not levantado.",
          sayInstead: "Ya me levanté, pero sigo medio dormido."
        },
        {
          mistake: "Dropping the object in “levanta la mano”",
          whyItFails:
            "The phrase is about raising a specific body part. Without the object, levanta sounds unfinished unless the object is already obvious.",
          sayInstead: "Levanta la mano para parar el bus."
        }
      ],
      variations: [
        {
          form: "Me levanto a las cinco.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "A normal morning routine: the person gets out of bed."
        },
        {
          form: "Levanta la maleta entre los dos.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Lifting a heavy object together."
        },
        {
          form: "Levantá la mano cuando pase el bus.",
          register: "friendly informal",
          region: "Voseo areas",
          whenToUse: "A vos command where voseo is already in use."
        },
        {
          form: "Ya me levanté, tranquilo.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Reassuring someone who thinks you are still in bed."
        },
        {
          form: "Levántese despacio.",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "Speaking to someone with usted, often when they should rise carefully."
        }
      ],
      prompt: "Alex says “me levanto temprano y levanto la mano.” What is the contrast?",
      choices: [
        "The pronoun marks getting up; the object marks raising the hand.",
        "Both phrases mean waking from sleep without moving the body.",
        "Both phrases mean lifting a bag from the kitchen floor."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence says “I get up early” naturally?",
          choices: [
            "Levanto temprano todos los días.",
            "Me levanto temprano todos los días.",
            "Levanto la temprano todos los días."
          ],
          answer: 1,
          tests: "levantarse for getting out of bed"
        },
        {
          prompt: "María José says “levanta la mochila.” What is plain levantar doing?",
          choices: [
            "It means Alex is already awake.",
            "It means the bag lifts itself.",
            "It means lifting a real object."
          ],
          answer: 2,
          tests: "plain levantar with a direct object"
        },
        {
          prompt: "At the corner, which sentence helps the driver see you?",
          choices: [
            "Levanta la mano para parar el bus.",
            "Me levanto la mano para parar el bus.",
            "Levanta temprano para parar el bus."
          ],
          answer: 0,
          tests: "levantar la mano as raising a hand"
        }
      ]
    },
    en: {
      title: "Levantarse para el bus de la mañana",
      situation:
        "Alejandra está en Houston, alojada en la casa de una amiga, y tiene que salir temprano para tomar un bus hacia un parque. Hace frío, no calor, pero el horario tampoco espera. Usted necesita distinguir “get up”, “lift” y “raise” en inglés.",
      setting: {
        who: "Maya hospeda a Alejandra por una noche, y su papá ya revisó el horario del bus antes de irse a trabajar.",
        what: "Una charla somnolienta en la cocina sobre levantarse, levantar una maleta y alzar la mano para que el conductor la vea.",
        when: "Muy temprano, con la casa todavía en silencio y la calle fría.",
        where: "Houston, en una cocina de barrio residencial antes de caminar a la parada.",
        why: "Porque el español usa levantar y levantarse, pero el inglés reparte la idea entre “get up,” “lift” y “raise.” El objeto decide mucho."
      },
      address: {
        form: "mixed",
        who: "Maya y Alejandra usan el mismo “you”; la amistad se marca con nombres de pila y frases cortas.",
        why: "El inglés no tiene tú ni usted para esta decisión. La naturalidad viene de “you up yet?”, “don't rush” y el tono de cocina, no de cambiar pronombres.",
        ifYouSwitch:
          "No hay otro pronombre que escoger. Si quiere sonar más cortés, alarga la frase: “Could you lift this?” en vez de “Lift this.”"
      },
      dialogue: [
        {
          speaker: "Maya",
          target: "Alejandra, get up now. The bus comes early.",
          translation: "Alejandra, levántese ya. El bus pasa temprano.",
          pronunciation: "a-le-JAN-dra, guet ap nau. da bos coms ER-li",
          literal: "Alejandra, consiga arriba ahora. El bus viene temprano.",
          why: "“Get up” es levantarse: pasar de la cama al día. No use “lift yourself” para esta rutina; suena literal y raro."
        },
        {
          speaker: "Alejandra",
          target: "I'm up, but I'm still half asleep.",
          translation: "Ya me levanté, pero todavía estoy medio dormida.",
          pronunciation: "aim ap, bat aim stil jaf a-SLIP",
          literal: "Estoy arriba, pero todavía estoy medio dormida.",
          why: "“I'm up” significa que ya se levantó, no sólo que abrió los ojos. Es corto y muy común en la mañana."
        },
        {
          speaker: "Maya",
          target: "Then lift the suitcase, but don't rush.",
          translation: "Entonces levante la maleta, pero sin afán.",
          pronunciation: "den lift da SUT-keis, bat dont rosh",
          literal: "Entonces levante la maleta, pero no corra.",
          why: "“Lift” necesita una cosa física que sube: suitcase, box, chair. Para una persona saliendo de la cama, vuelva a “get up.”"
        },
        {
          speaker: "Alejandra",
          target: "It's heavy. Should we lift it together?",
          translation: "Está pesada. ¿La levantamos entre las dos?",
          pronunciation: "its JE-vi. shud ui lift it tu-GUE-der",
          literal: "Es pesada. ¿Deberíamos levantarla juntas?",
          why: "“It” reemplaza a “the suitcase.” El inglés, como el español, evita repetir el objeto cuando ya está claro."
        },
        {
          speaker: "Maya",
          target: "Yes, and at the stop, raise your hand for the bus.",
          translation: "Sí, y en la parada, levante la mano para el bus.",
          pronunciation: "yes, and at da stap, reiz yor jand for da bos",
          literal: "Sí, y en la parada, eleve su mano para el bus.",
          why: "Para la mano, el verbo natural es “raise.” “Lift your hand” se entiende, pero “raise your hand” es la frase fija."
        },
        {
          speaker: "Alejandra",
          target: "Got it: I get up early and raise my hand at the stop.",
          translation: "Listo: me levanto temprano y levanto la mano en la parada.",
          pronunciation: "gat it: ai guet ap ER-li and reiz mai jand at da stap",
          literal: "Lo tengo: me pongo arriba temprano y elevo mi mano en la parada.",
          why: "La línea final separa las tres piezas: “get up” para levantarse, “lift” para objetos pesados y “raise” para la mano."
        }
      ],
      vocabulary: [
        {
          term: "lift",
          explanation:
            "Levantar una cosa física. El objeto es lo que sube: una maleta, una caja, una silla.",
          literal: "levantar / alzar",
          useWhen:
            "Una persona mueve algo hacia arriba o lo recoge del piso.",
          avoidWhen:
            "Habla de levantarse de la cama. Para eso el inglés usa “get up.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["raise", "pick up", "carry", "move"],
          example: {
            target: "Lift the suitcase.",
            translation: "Levante la maleta."
          }
        },
        {
          term: "get up",
          explanation:
            "Levantarse de la cama o ponerse de pie. No se traduce palabra por palabra como “lift yourself.”",
          literal: "conseguir arriba",
          useWhen:
            "Rutinas de mañana, levantarse de una silla o decir que alguien ya está de pie.",
          avoidWhen:
            "Hay una cosa física que usted levanta con las manos. Ahí diga “lift.”",
          register: "neutral",
          region: "Inglés universal y básico en rutinas diarias.",
          related: ["stand up", "be up", "wake up", "get out of bed"],
          example: {
            target: "I get up early.",
            translation: "Me levanto temprano."
          }
        },
        {
          term: "raise your hand",
          explanation:
            "Levantar la mano. Es la frase fija para pedir la palabra, votar o llamar la atención.",
          literal: "elevar su mano",
          useWhen:
            "Necesita que alguien lo vea en clase, en una reunión o en una parada.",
          avoidWhen:
            "Habla de una maleta pesada. Para objetos de ese tipo, “lift” suele sonar mejor.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["put your hand up", "signal", "wave", "get attention"],
          example: {
            target: "Raise your hand at the stop.",
            translation: "Levante la mano en la parada."
          }
        },
        {
          term: "I'm up",
          explanation:
            "Ya me levanté. Responde a alguien que cree que usted sigue en la cama.",
          literal: "estoy arriba",
          useWhen:
            "Quiere decir que ya salió de la cama, aunque todavía tenga sueño.",
          avoidWhen:
            "Sólo abrió los ojos pero sigue acostado. Ahí puede decir “I'm awake.”",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["I'm awake", "I'm out of bed", "I'm ready", "I'm moving"],
          example: {
            target: "I'm up already.",
            translation: "Ya me levanté."
          }
        },
        {
          term: "don't rush",
          explanation:
            "No se afane, no corra, hágalo con calma. Es una orden suave si el tono ayuda.",
          literal: "no corra",
          useWhen:
            "Alguien se apura, se disculpa o va a levantar algo incómodo.",
          avoidWhen:
            "El horario sí es urgente. Entonces puede sonar como si no entendiera el problema.",
          register: "friendly neutral",
          region: "Inglés universal.",
          related: ["take your time", "slowly", "no hurry", "careful"],
          example: {
            target: "Lift the suitcase, but don't rush.",
            translation: "Levante la maleta, pero sin afán."
          }
        },
        {
          term: "half asleep",
          explanation:
            "Medio dormido. Describe el estado después de levantarse cuando la cabeza aún no arranca.",
          literal: "medio dormido",
          useWhen:
            "Usted ya está en pie, pero sigue lento, callado o confundido.",
          avoidWhen:
            "Está completamente dormido. “Half asleep” es el punto intermedio.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["sleepy", "groggy", "not awake yet", "still waking up"],
          example: {
            target: "I'm still half asleep.",
            translation: "Todavía estoy medio dormida."
          }
        },
        {
          term: "at the stop",
          explanation:
            "En la parada. La frase ubica dónde se hace la señal para el bus.",
          literal: "en la parada",
          useWhen:
            "Habla del punto donde espera transporte público.",
          avoidWhen:
            "Habla de una esquina sin parada marcada; ahí “on the corner” puede ser más claro.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["bus stop", "on the corner", "the route", "signal"],
          example: {
            target: "Raise your hand at the stop.",
            translation: "Levante la mano en la parada."
          }
        }
      ],
      note:
        "El inglés separa lo que el español agrupa alrededor de levantar. “Get up” es levantarse; “lift” es levantar una cosa pesada o física; “raise your hand” es la frase fija para la mano. Si usted dice “I lift early,” nadie entiende la rutina de mañana.",
      culture: [
        {
          label: "Levantarse no se traduce con reflejo",
          body:
            "El inglés no dice “lift myself” para salir de la cama. Dice “get up” o, si sólo abrió los ojos, “wake up.” La diferencia entre estar despierto y estar levantado también existe, pero se arma con otras palabras."
        },
        {
          label: "La mano tiene verbo propio",
          body:
            "En clase, reuniones y transporte, “raise your hand” es la frase normal. “Lift your hand” se entiende, pero suena más físico, como mover una parte del cuerpo por instrucción médica o mecánica."
        },
        {
          label: "La mañana fría cambia el tono",
          body:
            "En Houston, levantarse temprano puede sentirse menos como ganarle al calor y más como pelear con la oscuridad o el frío. La rutina es distinta, pero la necesidad de decir “I'm up” desde la cocina es igual de cotidiana."
        },
        {
          label: "“Don't rush” no siempre es permiso",
          body:
            "Puede ser una frase amable mientras alguien carga una maleta, pero no borra el horario del bus. Como “sin afán,” depende del contexto: calma el movimiento, no necesariamente cambia el plan."
        }
      ],
      pitfalls: [
        {
          mistake: "“I lift early.”",
          whyItFails:
            "“Lift” necesita un objeto físico. Para la rutina de salir de la cama, el inglés usa “get up.”",
          sayInstead: "I get up early."
        },
        {
          mistake: "“Lift yourself now.”",
          whyItFails:
            "Es una traducción literal de levantarse y suena extraña. En una mañana normal, diga “get up.”",
          sayInstead: "Get up now."
        },
        {
          mistake: "“Wake up the suitcase.”",
          whyItFails:
            "“Wake up” es despertar a alguien o despertarse. Una maleta no despierta; se levanta con “lift.”",
          sayInstead: "Lift the suitcase."
        },
        {
          mistake: "“Get up your hand.”",
          whyItFails:
            "La frase fija para la mano es “raise your hand.” “Get up” habla de una persona que se levanta.",
          sayInstead: "Raise your hand."
        }
      ],
      variations: [
        {
          form: "I get up at five.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Una rutina de mañana: la persona sale de la cama."
        },
        {
          form: "Lift the suitcase together.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Levantar un objeto pesado entre dos personas."
        },
        {
          form: "Raise your hand when the bus comes.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Hacer una señal visible con la mano."
        },
        {
          form: "I'm up already, don't worry.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Responder a alguien que cree que usted sigue en la cama."
        },
        {
          form: "Please stand up slowly.",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Pedirle a alguien que se ponga de pie con cuidado."
        }
      ],
      prompt: "Alejandra says “I get up early and raise my hand.” ¿Cuál es el contraste?",
      choices: [
        "“Lift” siempre significa levantarse temprano.",
        "“Get up” es levantarse; “raise” funciona para la mano.",
        "“Raise” sólo se usa para cargar maletas pesadas."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase dice “me levanto temprano” naturalmente?",
          choices: [
            "I lift early every day.",
            "I wake the early every day.",
            "I get up early every day."
          ],
          answer: 2,
          tests: "“get up” para levantarse"
        },
        {
          prompt: "Maya says “lift the suitcase.” ¿Qué hace “lift”?",
          choices: [
            "Levanta una cosa física.",
            "Dice que Alejandra ya despertó.",
            "Pide levantar la mano en clase."
          ],
          answer: 0,
          tests: "“lift” con objeto físico"
        },
        {
          prompt: "En la parada, ¿qué frase ayuda a que el conductor la vea?",
          choices: [
            "Get up your hand for the bus.",
            "Raise your hand for the bus.",
            "Wake up your hand for the bus."
          ],
          answer: 1,
          tests: "“raise your hand” como frase fija"
        }
      ]
    }
  },
  {
    id: "finding-a-seat-at-the-workshop-in-pasto",
    level: "Developing · Body and routine",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "courteous",
    pathways: ["independent"],
    verb: "sentar",
    review: "pending",
    es: {
      title: "Sentarse en un taller en Pasto",
      situation:
        "Priya llega tarde a un taller de tejido en Pasto. Hay pocas sillas libres y una señora mayor acaba de entrar detrás de ella. Tú necesitas distinguir sentar a alguien, sentarse uno mismo y sentir, que no pertenece a esta escena.",
      setting: {
        who: "Doña Elvira is helping organize the workshop, and Priya is a new participant who wants to be polite about the last chairs.",
        what: "A small seating negotiation: who sits where, who is seated first, and how to offer a place without sounding bossy.",
        when: "A cool afternoon, just as the workshop begins and people are still taking out yarn and notebooks.",
        where: "Pasto, in a community room near the center, with rain threatening outside and chairs being moved inside.",
        why: "Because sentar is not sentir. It is about seating someone or putting something in a seated position, while sentarse is the ordinary way to sit down."
      },
      address: {
        form: "usted",
        who: "Priya and Doña Elvira use usted, and everyone uses it with the older participant.",
        why: "In a workshop with older adults and first meetings, usted gives warmth with respect. For you, it is the safest and most natural starting point here.",
        ifYouSwitch:
          "Tú would sound too quick with Doña Elvira and the older woman. Vos is present in the wider region, but it is not what this respectful first exchange needs."
      },
      dialogue: [
        {
          speaker: "Doña Elvira",
          target: "Buenas tardes. Siéntese aquí, que todavía hay puesto.",
          translation: "Good afternoon. Sit here; there is still a spot.",
          pronunciation: "BWEH-nas TAR-des. SYEN-teh-seh ah-KEE, keh toh-dah-BEE-ah ai PWES-toh",
          literal: "Good afternoons. Seat-yourself here, because still there-is place.",
          why: "Siéntese is sentarse in the usted command. This is the everyday verb for sitting down; it is not sentir, to feel."
        },
        {
          speaker: "Priya",
          target: "Gracias. ¿Puedo sentar primero a la señora?",
          translation: "Thank you. May I seat the lady first?",
          pronunciation: "GRAH-syas. PWEH-doh sen-TAR pree-MEH-roh ah lah seh-NYOH-rah",
          literal: "Thanks. Can I seat first the lady?",
          why: "Plain sentar can take another person as its object: you seat someone. The personal a marks that the object is a person."
        },
        {
          speaker: "Señora",
          target: "No se preocupe, mija. Yo me siento al lado suyo.",
          translation: "Don't worry, dear. I'll sit beside you.",
          pronunciation: "noh seh preh-OH-koo-peh, MEE-hah. yoh meh SYEN-toh al LAH-doh SOO-yoh",
          literal: "Do not worry, my daughter. I myself sit to-the side yours.",
          why: "Me siento is “I sit down.” It looks close to siento from sentir, but the context and the reflexive pronoun point to sitting."
        },
        {
          speaker: "Doña Elvira",
          target: "Perfecto. Sentamos la silla más cerca de la mesa.",
          translation: "Perfect. We'll set the chair closer to the table.",
          pronunciation: "per-FEK-toh. sen-TAH-mos lah SEE-yah mas SER-kah deh lah MEH-sah",
          literal: "Perfect. We-seat the chair more near of the table.",
          why: "Sentar can also mean to set something down in a stable seated position, though with people sentarse is far more common."
        },
        {
          speaker: "Priya",
          target: "Entonces me siento aquí y dejo libre la esquina.",
          translation: "Then I'll sit here and leave the corner free.",
          pronunciation: "en-TON-ses meh SYEN-toh ah-KEE ee DEH-hoh LEE-breh lah es-KEE-nah",
          literal: "Then myself I-sit here and leave free the corner.",
          why: "Again the pronoun me marks Priya as the one sitting down. That makes the sentence polite and clear."
        },
        {
          speaker: "Doña Elvira",
          target: "Muy bien. Cuando todos se sienten, empezamos.",
          translation: "Very good. When everyone sits down, we'll begin.",
          pronunciation: "mwee byen. KWAN-doh TOH-dos seh SYEN-ten, em-peh-SAH-mos",
          literal: "Very well. When all themselves sit, we-begin.",
          why: "Se sienten is from sentarse, not sentir. The plural command of the room is about bodies finding chairs, not emotions."
        }
      ],
      vocabulary: [
        {
          term: "sentar",
          explanation:
            "To seat someone or set something into a seated or settled position. It usually needs an object.",
          literal: "to seat",
          useWhen:
            "You seat a child, a guest, or a person who needs help, or you set a chair close to a table.",
          avoidWhen:
            "You mean you yourself sit down. Then use sentarse.",
          register: "neutral",
          region: "Universal Spanish; the plain form is less common than sentarse in daily speech.",
          related: ["sentarse", "ubicar", "acomodar", "poner"],
          example: {
            target: "Puedo sentar primero a la señora.",
            translation: "I can seat the lady first."
          }
        },
        {
          term: "sentarse",
          explanation:
            "To sit down. This is the routine form you will hear constantly around chairs, buses, tables, and waiting rooms.",
          literal: "to seat oneself",
          useWhen:
            "You or someone else takes a seat: me siento, siéntese, se sentaron.",
          avoidWhen:
            "You are seating another person directly. Then plain sentar can work.",
          register: "neutral",
          region: "Universal Spanish and everyday Colombian speech.",
          related: ["tomar asiento", "ocupar una silla", "acomodarse", "pararse"],
          example: {
            target: "Siéntese aquí.",
            translation: "Sit here."
          }
        },
        {
          term: "siéntese",
          explanation:
            "The usted command for sit down. It is polite, normal, and useful in clinics, workshops, homes, and offices.",
          literal: "seat yourself",
          useWhen:
            "Inviting someone you address as usted to take a seat.",
          avoidWhen:
            "You are speaking to a close friend with tú. Then it is siéntate.",
          register: "polite neutral",
          region: "General Colombian.",
          related: ["siéntate", "tome asiento", "siga", "por aquí"],
          example: {
            target: "Siéntese aquí, por favor.",
            translation: "Sit here, please."
          }
        },
        {
          term: "me siento",
          explanation:
            "I sit down. It is from sentarse, even though the form looks exactly like “I feel” from sentir.",
          literal: "myself I-seat",
          useWhen:
            "The sentence is about your body taking a seat.",
          avoidWhen:
            "You are talking about an emotion or physical sensation. Then siento belongs to sentir and needs a different frame.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["me ubico", "me acomodo", "tomo asiento", "me quedo aquí"],
          example: {
            target: "Me siento al lado suyo.",
            translation: "I'll sit beside you."
          }
        },
        {
          term: "tomar asiento",
          explanation:
            "A more formal way to say take a seat. It is useful but not as everyday as sentarse.",
          literal: "to take seat",
          useWhen:
            "Announcements, formal rooms, or someone managing a group politely.",
          avoidWhen:
            "A casual table with friends, where it can sound too official.",
          register: "polite formal",
          region: "General Colombian.",
          related: ["sentarse", "siéntese", "acomodarse", "pasar"],
          example: {
            target: "Puede tomar asiento.",
            translation: "You may take a seat."
          }
        },
        {
          term: "al lado suyo",
          explanation:
            "Beside you. With usted, suyo keeps the address form consistent.",
          literal: "to the side yours",
          useWhen:
            "Choosing a seat next to someone you are addressing politely.",
          avoidWhen:
            "The relationship is tú. Then al lado tuyo fits better.",
          register: "polite neutral",
          region: "General Colombian.",
          related: ["junto a usted", "aquí al lado", "cerca de usted", "en esta silla"],
          example: {
            target: "Me siento al lado suyo.",
            translation: "I'll sit beside you."
          }
        },
        {
          term: "no se preocupe",
          explanation:
            "Don't worry. A soft way to refuse special treatment or calm someone who is trying to help.",
          literal: "do not worry yourself",
          useWhen:
            "Someone is fussing over you, apologizing, or rearranging a small problem.",
          avoidWhen:
            "There is a serious problem that needs action. Then reassurance alone can feel dismissive.",
          register: "polite friendly",
          region: "General Colombian.",
          related: ["tranquilo", "no hay problema", "descuide", "está bien"],
          example: {
            target: "No se preocupe, mija.",
            translation: "Don't worry, dear."
          }
        }
      ],
      note:
        "Sentar is not sentir. The lesson is about chairs and bodies, not feelings. In daily speech, the form you need most is sentarse: me siento, siéntese, se sienten. Plain sentar appears when you seat someone else or set something into place.",
      culture: [
        {
          label: "A seat can be a courtesy",
          body:
            "Offering a chair to an older person is not theatrical politeness; it is everyday courtesy in many Colombian rooms. The language around the chair needs to be gentle because the social move is gentle."
        },
        {
          label: "Pasto keeps formality warm",
          body:
            "Usted can be warm in a workshop, especially with older adults and people you just met. It does not mean the room is cold. It means the respect is built into the first exchange."
        },
        {
          label: "Do not let sentir steal the lesson",
          body:
            "Me siento can mean “I sit down” or “I feel,” but the scene tells you which one. If there are chairs, spots, and people arranging themselves, it belongs to sentarse."
        },
        {
          label: "“Mija” softens the refusal",
          body:
            "An older woman saying “mija” to a younger one can be affectionate, not belittling. It helps her refuse fuss without sounding annoyed. The tone matters more than the literal family word."
        }
      ],
      pitfalls: [
        {
          mistake: "Confusing sentar with sentir",
          whyItFails:
            "They are different verbs. Sentar and sentarse are about seating and sitting; sentir is about feeling. The chair context keeps them apart.",
          sayInstead: "Me siento aquí."
        },
        {
          mistake: "Saying “siento aquí” for “I sit here”",
          whyItFails:
            "Without the reflexive pronoun, siento is likely heard as “I feel.” To say you sit down, use me siento.",
          sayInstead: "Me siento aquí."
        },
        {
          mistake: "Using siéntate with an older stranger addressed as usted",
          whyItFails:
            "Siéntate is the tú command. In this respectful workshop scene, usted calls for siéntese.",
          sayInstead: "Siéntese aquí, por favor."
        },
        {
          mistake: "Using sentarse to seat another person directly",
          whyItFails:
            "If you are seating someone else, that other person is the object. Plain sentar can do that job.",
          sayInstead: "Voy a sentar primero a la señora."
        }
      ],
      variations: [
        {
          form: "Siéntese aquí, por favor.",
          register: "polite neutral",
          region: "General Colombian",
          whenToUse: "Inviting someone addressed as usted to sit."
        },
        {
          form: "Me siento al lado suyo.",
          register: "polite neutral",
          region: "General Colombian",
          whenToUse: "Choosing a seat beside someone in an usted exchange."
        },
        {
          form: "¿Puedo sentar primero a la señora?",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "Offering to seat someone else first."
        },
        {
          form: "Cuando todos se sienten, empezamos.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Waiting for the whole group to sit down."
        },
        {
          form: "Puede tomar asiento.",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "A more formal invitation to take a seat."
        }
      ],
      prompt: "Doña Elvira says “siéntese aquí.” Which verb is doing the work?",
      choices: [
        "Sentir, because she is asking what Priya feels.",
        "Sentar, because she is asking Priya to sit down.",
        "Vestir, because she is talking about clothing."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence clearly means “I sit here”?",
          choices: [
            "Siento aquí con mucha calma.",
            "Siento una silla aquí cerca.",
            "Me siento aquí junto a usted."
          ],
          answer: 2,
          tests: "me siento from sentarse, not sentir"
        },
        {
          prompt: "Priya wants to seat the older woman first. Which sentence fits?",
          choices: [
            "Puedo sentar primero a la señora.",
            "Puedo sentir primero a la señora.",
            "Puedo sentarme primero a la señora."
          ],
          answer: 0,
          tests: "plain sentar with a person as object"
        },
        {
          prompt: "Which invitation best matches usted in this scene?",
          choices: [
            "Siéntate aquí, por favor.",
            "Siéntese aquí, por favor.",
            "Sentís aquí, por favor."
          ],
          answer: 1,
          tests: "usted command siéntese"
        }
      ]
    },
    en: {
      title: "Sentarse en un taller en Manchester",
      situation:
        "Paola llega tarde a un taller de cerámica en Manchester. Hay pocas sillas libres y una mujer mayor acaba de entrar detrás de ella. Usted necesita distinguir “sit,” “sit down,” “seat,” y no dejar que sentir se meta donde no va.",
      setting: {
        who: "Eleanor ayuda a organizar el taller, y Paola es una participante nueva que quiere manejar con cortesía las últimas sillas.",
        what: "Una negociación pequeña de asientos: quién se sienta dónde, a quién se sienta primero y cómo ofrecer un lugar sin sonar mandona.",
        when: "Una tarde fría, justo cuando empieza el taller y la gente saca arcilla, delantales y cuadernos.",
        where: "Manchester, en un centro comunitario de barrio, con lluvia contra las ventanas y sillas plegables alrededor de las mesas.",
        why: "Porque el inglés separa “sit down” para sentarse y “seat” para sentar a otra persona. “Feel” pertenece a sentir, no a esta escena de sillas."
      },
      address: {
        form: "mixed",
        who: "Eleanor y Paola usan el mismo “you”; la cortesía se marca con “please,” “would you like,” y el tono.",
        why: "El inglés no cambia de pronombre para mostrar respeto. En una sala con adultos mayores, la formalidad vive en la frase completa, no en otro “you.”",
        ifYouSwitch:
          "No hay un usted inglés que activar. “Please sit here” puede ser amable; “Sit there” puede sonar seco aunque use el mismo pronombre invisible."
      },
      dialogue: [
        {
          speaker: "Eleanor",
          target: "Good afternoon. Please sit here; there's still a seat.",
          translation: "Buenas tardes. Siéntese aquí; todavía hay puesto.",
          pronunciation: "gud af-ter-NUN. plis sit jir; ders stil a sit",
          literal: "Buenas tardes. Por favor siente aquí; todavía hay un asiento.",
          why: "“Sit” o “sit down” es sentarse. No necesita objeto cuando la persona toma su propio asiento."
        },
        {
          speaker: "Paola",
          target: "Thank you. Can I seat the older lady first?",
          translation: "Gracias. ¿Puedo sentar primero a la señora mayor?",
          pronunciation: "zank yu. can ai sit di OL-der LEI-di ferst",
          literal: "Gracias. ¿Puedo asentar a la señora mayor primero?",
          why: "“Seat” como verbo sí toma objeto: seat the lady, seat the children, seat the guests. Es más formal que “sit.”"
        },
        {
          speaker: "Older woman",
          target: "Don't worry, love. I'll sit beside you.",
          translation: "No se preocupe, mija. Me siento al lado suyo.",
          pronunciation: "dont UO-ri, lov. ail sit bi-SAID yu",
          literal: "No se preocupe, amor. Me sentaré al lado de usted.",
          why: "“I'll sit” es “me siento / me sentaré.” No diga “I'll feel” sólo porque el español tiene “siento”; eso cambia de verbo."
        },
        {
          speaker: "Eleanor",
          target: "Perfect. We'll move the chair closer to the table.",
          translation: "Perfecto. Sentamos la silla más cerca de la mesa.",
          pronunciation: "PER-fekt. uil muv da cher KLOU-ser tu da TEI-bol",
          literal: "Perfecto. Moveremos la silla más cerca de la mesa.",
          why: "Para una silla física, el inglés prefiere “move the chair” sobre “seat the chair.” “Seat” se reserva más para personas o cupos."
        },
        {
          speaker: "Paola",
          target: "Then I'll sit here and keep the corner free.",
          translation: "Entonces me siento aquí y dejo libre la esquina.",
          pronunciation: "den ail sit jir and kip da KOR-ner fri",
          literal: "Entonces me sentaré aquí y mantendré libre la esquina.",
          why: "“I'll sit here” es directo y suficiente. El inglés no marca reflexivo para la persona que se sienta."
        },
        {
          speaker: "Eleanor",
          target: "Great. Once everyone is seated, we'll begin.",
          translation: "Muy bien. Cuando todos estén sentados, empezamos.",
          pronunciation: "greit. uans EV-ri-uan is SI-ted, uil bi-GUIN",
          literal: "Genial. Una vez todos estén sentados, comenzaremos.",
          why: "“Seated” describe el estado formal de estar sentado. Es más de organizador de sala que de charla entre amigos."
        }
      ],
      vocabulary: [
        {
          term: "seat",
          explanation:
            "Sentar a alguien o asignarle un asiento. Como verbo, suele sonar más formal que “sit.”",
          literal: "sentar / asiento",
          useWhen:
            "Un anfitrión, organizador o empleado ubica a una persona en una silla o mesa.",
          avoidWhen:
            "Usted mismo se sienta. Ahí use “sit” o “sit down.”",
          register: "polite formal",
          region: "Inglés universal.",
          related: ["sit", "sit down", "seated", "show someone to a seat"],
          example: {
            target: "Can I seat the older lady first?",
            translation: "¿Puedo sentar primero a la señora mayor?"
          }
        },
        {
          term: "sit down",
          explanation:
            "Sentarse. Es la forma normal cuando una persona toma asiento.",
          literal: "sentarse abajo",
          useWhen:
            "Alguien pasa de estar de pie a estar sentado.",
          avoidWhen:
            "Usted ubica a otra persona como anfitrión. Ahí “seat” puede servir.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["sit", "take a seat", "be seated", "stand up"],
          example: {
            target: "Please sit here.",
            translation: "Siéntese aquí, por favor."
          }
        },
        {
          term: "please sit here",
          explanation:
            "Siéntese aquí, por favor. Una invitación clara que puede sonar amable con tono normal.",
          literal: "por favor siente aquí",
          useWhen:
            "Invita a alguien a usar una silla específica.",
          avoidWhen:
            "Necesita muchísima formalidad. Entonces “please take a seat” puede sonar más pulido.",
          register: "polite neutral",
          region: "Inglés universal.",
          related: ["take a seat", "have a seat", "sit over here", "this seat is free"],
          example: {
            target: "Please sit here.",
            translation: "Siéntese aquí."
          }
        },
        {
          term: "I'll sit",
          explanation:
            "Me siento o me sentaré. No se parece a “I feel,” aunque “siento” en español pueda confundir.",
          literal: "yo me sentaré",
          useWhen:
            "Usted decide dónde poner su propio cuerpo.",
          avoidWhen:
            "Habla de emociones o sensaciones. Eso es “I feel.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I'll take this seat", "I'll sit down", "I'll be here", "I'll stay here"],
          example: {
            target: "I'll sit beside you.",
            translation: "Me siento al lado suyo."
          }
        },
        {
          term: "take a seat",
          explanation:
            "Tomar asiento. Es un poco más formal o más de anfitrión que “sit down.”",
          literal: "tomar un asiento",
          useWhen:
            "Alguien recibe a un grupo, atiende a una persona o maneja una sala.",
          avoidWhen:
            "Una charla muy casual donde “sit here” suena más natural.",
          register: "polite formal",
          region: "Inglés universal.",
          related: ["have a seat", "be seated", "please sit", "find a seat"],
          example: {
            target: "Please take a seat.",
            translation: "Puede tomar asiento."
          }
        },
        {
          term: "beside you",
          explanation:
            "Al lado suyo o junto a usted. No cambia por tú o usted porque el inglés sólo tiene “you.”",
          literal: "al lado de usted",
          useWhen:
            "Escoge una silla junto a otra persona.",
          avoidWhen:
            "Quiere decir al otro lado de la sala. Entonces “near you” o “over there” puede servir.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["next to you", "by you", "near you", "at your side"],
          example: {
            target: "I'll sit beside you.",
            translation: "Me siento al lado suyo."
          }
        },
        {
          term: "don't worry",
          explanation:
            "No se preocupe. Calma una situación pequeña o rechaza una ayuda sin sonar duro.",
          literal: "no se preocupe",
          useWhen:
            "Alguien se disculpa, se afana o trata de arreglar algo menor por usted.",
          avoidWhen:
            "El problema es serio y requiere acción. Ahí la frase sola puede sonar evasiva.",
          register: "friendly neutral",
          region: "Inglés universal.",
          related: ["no problem", "it's okay", "that's fine", "never mind"],
          example: {
            target: "Don't worry, love.",
            translation: "No se preocupe, mija."
          }
        }
      ],
      note:
        "No deje que “sentir” se cuele por la forma “siento.” En inglés, “I sit” y “I feel” son verbos completamente distintos. Para sentarse use “sit” o “sit down”; para sentar a otra persona use “seat”; para un estado más formal use “be seated.”",
      culture: [
        {
          label: "El asiento también comunica cortesía",
          body:
            "Ofrecer una silla a una persona mayor no es sólo logística. En inglés la cortesía aparece en “please,” “would you like,” y en no sonar como si uno estuviera dando órdenes. La silla es pequeña; el gesto no."
        },
        {
          label: "“Love” no siempre es romance",
          body:
            "En partes del Reino Unido, “love” puede funcionar como trato amable de una persona mayor o de alguien que atiende. No significa amor romántico. Aun así, conviene oírlo más que copiarlo de inmediato."
        },
        {
          label: "“Seat” suena organizado",
          body:
            "Restaurantes, teatros, talleres y vuelos “seat” people. Entre amigos, uno simplemente “sits.” Por eso “Can I seat the older lady first?” suena como una ayuda formal y no como una charla de sofá."
        },
        {
          label: "La silla no se “sienta” igual",
          body:
            "El español puede estirar sentar hacia acomodar una silla, pero el inglés prefiere “move the chair” o “put the chair closer.” Forzar “seat the chair” confunde porque “seat” espera una persona."
        }
      ],
      pitfalls: [
        {
          mistake: "“I feel here.”",
          whyItFails:
            "Eso traduce sentir, no sentarse. Para decir que usted se sienta en un lugar, use “sit.”",
          sayInstead: "I'll sit here."
        },
        {
          mistake: "“Please seat here.”",
          whyItFails:
            "“Seat” como verbo necesita objeto: seat the guests. Para invitar a alguien a sentarse, diga “sit.”",
          sayInstead: "Please sit here."
        },
        {
          mistake: "“Can I sit the older lady first?”",
          whyItFails:
            "Cuando usted ubica a otra persona en una silla, el verbo formal es “seat,” no “sit.”",
          sayInstead: "Can I seat the older lady first?"
        },
        {
          mistake: "“I will be feel beside you.”",
          whyItFails:
            "Mezcla sentir con sentarse y además arma mal el futuro. La idea de silla necesita “sit.”",
          sayInstead: "I'll sit beside you."
        }
      ],
      variations: [
        {
          form: "Please sit here.",
          register: "polite neutral",
          region: "Inglés universal",
          whenToUse: "Invitar a alguien a sentarse en una silla específica."
        },
        {
          form: "I'll sit beside you.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Elegir una silla junto a otra persona."
        },
        {
          form: "Can I seat the older lady first?",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Ofrecer sentar o ubicar a otra persona primero."
        },
        {
          form: "Once everyone is seated, we'll begin.",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Un organizador espera a que todo el grupo esté sentado."
        },
        {
          form: "Please take a seat.",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Una invitación más pulida a tomar asiento."
        }
      ],
      prompt: "Eleanor says “please sit here.” ¿Qué verbo inglés hace el trabajo?",
      choices: [
        "“Feel,” porque pregunta qué siente Paola.",
        "“Dress,” porque habla de la ropa del taller.",
        "“Sit,” porque le pide a Paola sentarse."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál frase dice claramente “me siento aquí”?",
          choices: [
            "I'll sit here beside you.",
            "I'll feel here beside you.",
            "I'll dress here beside you."
          ],
          answer: 0,
          tests: "“sit” frente a “feel”"
        },
        {
          prompt: "Paola quiere sentar primero a la señora mayor. ¿Cuál frase encaja?",
          choices: [
            "Can I feel the older lady first?",
            "Can I seat the older lady first?",
            "Can I dress the older lady first?"
          ],
          answer: 1,
          tests: "“seat” para sentar a otra persona"
        },
        {
          prompt: "¿Cuál invitación suena natural en inglés?",
          choices: [
            "Please feel here for a moment.",
            "Please seat here for a moment.",
            "Please sit here for a moment."
          ],
          answer: 2,
          tests: "“please sit here,” not “seat here”"
        }
      ]
    }
  },
  {
    id: "getting-dressed-for-the-festival-in-yopal",
    level: "Developing · Body and routine",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "familiar",
    pathways: ["independent"],
    verb: "vestir",
    review: "pending",
    es: {
      title: "Vestirse para un festival en Yopal",
      situation:
        "Maya está en Yopal para un festival llanero y no sabe qué ponerse para salir sin sufrir el calor ni llegar demasiado informal. Su prima le presta una camisa liviana. Tú necesitas ver la diferencia entre vestir a alguien, vestirse y llevar ropa puesta.",
      setting: {
        who: "Carolina grew up in Yopal and is lending clothes; Maya is visiting family and wants to look appropriate without pretending to be local.",
        what: "A getting-dressed conversation before leaving for music and food outdoors.",
        when: "Late afternoon, when the sun is lower but the air is still warm.",
        where: "Yopal, in a family bedroom with the window open and the sound of motorcycles on the street.",
        why: "Because vestir is often taught as “to dress,” but the form learners need is vestirse. Plain vestir also exists when someone dresses another person or a garment dresses well."
      },
      address: {
        form: "tú",
        who: "Carolina and Maya use tú as cousins talking in a bedroom before going out.",
        why: "Family closeness makes tú natural here. For you, the relaxed pronoun fits the practical intimacy of borrowing a shirt.",
        ifYouSwitch:
          "Usted would sound like a joke or a sudden distance between cousins. Vos is heard in some regions, but this scene does not need it."
      },
      dialogue: [
        {
          speaker: "Carolina",
          target: "¿Ya te vestiste para salir?",
          translation: "Are you dressed yet to go out?",
          pronunciation: "yah teh bes-TEES-teh PAH-rah sah-LEER",
          literal: "Already yourself you-dressed for going out?",
          why: "Vestirse is the daily routine verb: getting dressed. The pronoun tells us Maya is dressing herself."
        },
        {
          speaker: "Maya",
          target: "Todavía no. No sé si esta blusa me viste bien.",
          translation: "Not yet. I don't know if this blouse suits me well.",
          pronunciation: "toh-dah-BEE-ah noh. noh seh see ES-tah BLOO-sah meh BEES-teh byen",
          literal: "Still not. I do not know if this blouse dresses me well.",
          why: "A garment can “vestir bien,” meaning it looks good or presents well. English would not say the blouse dresses me, but Spanish can."
        },
        {
          speaker: "Carolina",
          target: "Te viste bien, pero esa tela da mucho calor.",
          translation: "It looks good on you, but that fabric is very hot.",
          pronunciation: "teh BEES-teh byen, PEH-roh EH-sah TEH-lah dah MOO-choh kah-LOR",
          literal: "You it-dresses well, but that fabric gives much heat.",
          why: "The same viste here is plain vestir with the garment as subject. It is about appearance, not Maya putting clothes on."
        },
        {
          speaker: "Maya",
          target: "Entonces me visto con la camisa liviana.",
          translation: "Then I'll get dressed in the light shirt.",
          pronunciation: "en-TON-ses meh BEES-toh kon lah kah-MEE-sah lee-BYAH-nah",
          literal: "Then myself I-dress with the shirt light.",
          why: "Me visto brings the routine back to the person. Con names what she puts on."
        },
        {
          speaker: "Carolina",
          target: "Buena idea. Yo visto al niño y salimos juntas.",
          translation: "Good idea. I'll dress the child and we'll leave together.",
          pronunciation: "BWEH-nah ee-DEH-ah. yoh BEES-toh al NEE-nyoh ee sah-LEE-mos HOON-tas",
          literal: "Good idea. I dress the child and we leave together.",
          why: "Plain vestir takes another person as object when someone dresses a child, patient, or performer."
        },
        {
          speaker: "Maya",
          target: "Listo, me visto rápido y llevo zapatos cómodos.",
          translation: "Okay, I'll get dressed quickly and wear comfortable shoes.",
          pronunciation: "LEES-toh, meh BEES-toh RRAH-pee-doh ee YEH-boh sah-PAH-tos KOH-moh-dos",
          literal: "Ready, myself I-dress fast and I-carry shoes comfortable.",
          why: "Spanish often uses llevar for wearing clothes. Vestirse is the act of getting dressed; llevar can describe what you have on when you leave."
        }
      ],
      vocabulary: [
        {
          term: "vestir",
          explanation:
            "To dress someone, or for clothing to dress or suit someone in a certain way.",
          literal: "to dress",
          useWhen:
            "A parent dresses a child, a costume dresses a performer, or a garment looks good or formal.",
          avoidWhen:
            "You mean getting yourself dressed. Then use vestirse.",
          register: "neutral",
          region: "Universal Spanish; daily speech often uses the pronominal form.",
          related: ["vestirse", "llevar puesto", "ponerse", "quedar"],
          example: {
            target: "Yo visto al niño.",
            translation: "I dress the child."
          }
        },
        {
          term: "vestirse",
          explanation:
            "To get dressed. This is the routine verb for putting clothes on yourself.",
          literal: "to dress oneself",
          useWhen:
            "Morning routines, getting ready to go out, changing from one outfit into another.",
          avoidWhen:
            "You are describing what someone is already wearing. Then llevar or tener puesto may fit better.",
          register: "neutral",
          region: "Universal Spanish and very common in Colombian homes.",
          related: ["ponerse ropa", "cambiarse", "alistarse", "arreglarse"],
          example: {
            target: "Me visto rápido.",
            translation: "I get dressed quickly."
          }
        },
        {
          term: "vestir bien",
          explanation:
            "To dress well or, about a garment, to look good on someone.",
          literal: "to dress well",
          useWhen:
            "Talking about whether clothes make someone look polished, formal, or put together.",
          avoidWhen:
            "You only mean the size fits. Then quedar may be more precise.",
          register: "neutral",
          region: "General Colombian.",
          related: ["verse bien", "quedar bien", "elegante", "presentable"],
          example: {
            target: "Esta blusa me viste bien.",
            translation: "This blouse suits me well."
          }
        },
        {
          term: "llevar zapatos",
          explanation:
            "To wear shoes. Spanish often uses llevar for clothing you have on.",
          literal: "to carry shoes",
          useWhen:
            "Describing what someone is wearing as they go out or arrive somewhere.",
          avoidWhen:
            "You are focusing on the act of putting the shoes on. Then ponerse may fit better.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["tener puesto", "usar", "ponerse", "calzar"],
          example: {
            target: "Llevo zapatos cómodos.",
            translation: "I'm wearing comfortable shoes."
          }
        },
        {
          term: "camisa liviana",
          explanation:
            "A light shirt, useful in heat. Liviana describes weight and feel, not importance.",
          literal: "light shirt",
          useWhen:
            "Choosing clothes for warm weather, walking, dancing, or an outdoor event.",
          avoidWhen:
            "You mean pale in color. Then clara may be the word.",
          register: "neutral",
          region: "General Colombian.",
          related: ["tela fresca", "manga corta", "ropa cómoda", "algodón"],
          example: {
            target: "Me visto con la camisa liviana.",
            translation: "I'll get dressed in the light shirt."
          }
        },
        {
          term: "tela",
          explanation:
            "Fabric. In hot places, the fabric can matter more than the style.",
          literal: "cloth",
          useWhen:
            "Talking about whether clothes are cool, heavy, itchy, formal, or practical.",
          avoidWhen:
            "You mean a single item of clothing. Then name the item: camisa, blusa, pantalón.",
          register: "neutral",
          region: "General Colombian.",
          related: ["algodón", "lino", "material", "ropa"],
          example: {
            target: "Esa tela da mucho calor.",
            translation: "That fabric is very hot."
          }
        },
        {
          term: "zapatos cómodos",
          explanation:
            "Comfortable shoes. For an outdoor festival, comfort is not a detail.",
          literal: "comfortable shoes",
          useWhen:
            "You will walk, stand, dance, or spend hours outside.",
          avoidWhen:
            "The event demands formal footwear. Then comfortable may not be enough information.",
          register: "neutral",
          region: "General Colombian.",
          related: ["tenis", "sandalias", "caminar", "estar de pie"],
          example: {
            target: "Llevo zapatos cómodos.",
            translation: "I'm wearing comfortable shoes."
          }
        }
      ],
      note:
        "Vestir has three useful faces. Vestirse is getting dressed yourself. Vestir a alguien is dressing another person. A garment can vestir bien when it makes someone look put together. Once the clothes are on, Spanish often describes them with llevar or tener puesto.",
      culture: [
        {
          label: "Dressing for heat is practical, not vain",
          body:
            "In Yopal, an outdoor plan can turn uncomfortable quickly if the fabric is heavy. Asking about tela, comfort, and shoes is not fussing. It is how people avoid letting clothes ruin the evening."
        },
        {
          label: "Borrowed clothes create trust",
          body:
            "A cousin lending a shirt is a small family intimacy. The grammar follows that intimacy: te vestiste, me visto, te queda. It is practical talk inside a relationship."
        },
        {
          label: "Llanero detail without costume",
          body:
            "A visitor does not need to dress like a performer to attend a festival. Looking presentable, cool, and comfortable is usually wiser than turning regional culture into a costume."
        },
        {
          label: "Children make plain vestir normal",
          body:
            "Adults usually se visten. Children, patients, and performers are often vestidos by someone else. That is where plain vestir sounds most natural in daily life."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “visto rápido” when you mean “I get dressed quickly”",
          whyItFails:
            "Plain visto can mean I dress someone else or I see, depending on context. For getting dressed yourself, the reflexive pronoun is the safe signal.",
          sayInstead: "Me visto rápido."
        },
        {
          mistake: "Using vestir for what someone is already wearing",
          whyItFails:
            "Vestirse is the act of getting dressed. To describe clothes already on the body, Spanish often uses llevar or tener puesto.",
          sayInstead: "Llevo zapatos cómodos."
        },
        {
          mistake: "Thinking “esta blusa me viste bien” means the blouse dresses itself",
          whyItFails:
            "Here vestir bien means the garment looks good on you or makes you look presentable. It is not about the blouse performing an action.",
          sayInstead: "Esta blusa me queda bien."
        },
        {
          mistake: "Using cambiarse and vestirse as perfect twins",
          whyItFails:
            "They overlap, but cambiarse stresses switching clothes, while vestirse stresses getting dressed or ready. The scene decides which one is sharper.",
          sayInstead: "Me visto para salir."
        }
      ],
      variations: [
        {
          form: "Me visto rápido y salgo.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Getting yourself dressed before leaving."
        },
        {
          form: "Voy a vestir al niño.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Dressing another person, especially a child."
        },
        {
          form: "Esta camisa viste bien.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "A garment makes someone look polished or presentable."
        },
        {
          form: "Llevo zapatos cómodos.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Describing what you are wearing once dressed."
        },
        {
          form: "¿Ya te vestiste?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Asking a close person whether they are dressed and ready."
        }
      ],
      prompt: "Maya says “me visto rápido y llevo zapatos cómodos.” What is the split?",
      choices: [
        "Vestirse is getting dressed; llevar describes clothing already worn.",
        "Vestir always means carrying clothes in a backpack.",
        "Llevar always means dressing another person."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence means “I get dressed quickly”?",
          choices: [
            "Visto rápido antes de salir.",
            "Me visto rápido antes de salir.",
            "La visto rápido antes de salir."
          ],
          answer: 1,
          tests: "vestirse for getting dressed yourself"
        },
        {
          prompt: "Carolina is dressing the child. Which sentence fits?",
          choices: [
            "Yo me visto al niño.",
            "Yo llevo al niño de camisa.",
            "Yo visto al niño."
          ],
          answer: 2,
          tests: "plain vestir for dressing someone else"
        },
        {
          prompt: "Which sentence describes clothes already on the body?",
          choices: [
            "Llevo zapatos cómodos.",
            "Me visto zapatos cómodos.",
            "Visto de zapatos cómodos."
          ],
          answer: 0,
          tests: "llevar for wearing"
        }
      ]
    },
    en: {
      title: "Vestirse para un festival en Miami",
      situation:
        "Mariana está en Miami para un festival al aire libre y no sabe qué ponerse sin pasar calor ni llegar demasiado arreglada. Su prima le presta una camisa liviana. Usted necesita separar “get dressed,” “dress someone,” “wear,” y “look good on.”",
      setting: {
        who: "Carolina vive en Miami y presta ropa; Mariana visita a la familia y quiere verse apropiada sin disfrazarse.",
        what: "Una conversación de vestirse antes de salir a música y comida al aire libre.",
        when: "Al final de la tarde, cuando baja el sol pero la humedad sigue encima.",
        where: "Miami, en un cuarto familiar con el ventilador prendido y tráfico sonando afuera.",
        why: "Porque “dress” no cubre todo lo que el español reparte entre vestirse, vestir a alguien, llevar puesto y quedar bien."
      },
      address: {
        form: "mixed",
        who: "Carolina y Mariana usan el mismo “you”; la confianza viene de ser primas, no del pronombre.",
        why: "El inglés no tiene una forma especial para hablar con familia cercana. La cercanía se oye en “Are you dressed yet?” y en prestar ropa sin ceremonia.",
        ifYouSwitch:
          "No puede cambiar a tú o usted. Sí puede cambiar el registro: “Are you dressed yet?” suena familiar; “Are you ready to leave?” suena más neutro."
      },
      dialogue: [
        {
          speaker: "Carolina",
          target: "Are you dressed yet?",
          translation: "¿Ya se vistió?",
          pronunciation: "ar yu drest yet",
          literal: "¿Está usted vestida ya?",
          why: "“Dressed” describe el estado de estar vestido. Para la rutina también puede decir “get dressed.”"
        },
        {
          speaker: "Mariana",
          target: "Not yet. I don't know if this blouse looks good on me.",
          translation: "Todavía no. No sé si esta blusa me queda bien.",
          pronunciation: "not yet. ai dont nou if dis blaus luks gud on mi",
          literal: "Todavía no. No sé si esta blusa mira bien sobre mí.",
          why: "El inglés no dice que la blusa “dresses me” en este sentido. Dice “looks good on me” o “fits me well,” según la idea."
        },
        {
          speaker: "Carolina",
          target: "It looks good on you, but that fabric is too warm.",
          translation: "Te queda bien, pero esa tela da mucho calor.",
          pronunciation: "it luks gud on yu, bat dat FA-brik is tu uorm",
          literal: "Se ve bien en usted, pero esa tela es demasiado caliente.",
          why: "“Looks good on you” habla de apariencia. “Too warm” habla de cómo se siente la tela en el clima."
        },
        {
          speaker: "Mariana",
          target: "Then I'll get dressed in the light shirt.",
          translation: "Entonces me visto con la camisa liviana.",
          pronunciation: "den ail guet drest in da lait shert",
          literal: "Entonces conseguiré vestida en la camisa liviana.",
          why: "“Get dressed” es vestirse, el proceso de ponerse ropa. No necesita reflexivo en inglés."
        },
        {
          speaker: "Carolina",
          target: "Good idea. I'll dress the baby and we'll leave together.",
          translation: "Buena idea. Visto al bebé y salimos juntas.",
          pronunciation: "gud ai-DI-a. ail dres da BEI-bi and uil liv tu-GUE-der",
          literal: "Buena idea. Vestiré al bebé y saldremos juntas.",
          why: "“Dress the baby” sí usa “dress” con objeto, porque una persona viste a otra."
        },
        {
          speaker: "Mariana",
          target: "Great, I'll get dressed fast and wear comfortable shoes.",
          translation: "Listo, me visto rápido y llevo zapatos cómodos.",
          pronunciation: "greit, ail guet drest fast and uer COMF-ta-bol shuz",
          literal: "Genial, conseguiré vestida rápido y llevaré puestos zapatos cómodos.",
          why: "La línea muestra la división: “get dressed” es la acción de vestirse; “wear” describe la ropa que lleva puesta."
        }
      ],
      vocabulary: [
        {
          term: "dress",
          explanation:
            "Vestir a otra persona, o vestirse en un registro más general. Con objeto, suele ser “dress someone.”",
          literal: "vestir",
          useWhen:
            "Una persona viste a un bebé, a un paciente, a un actor o a alguien que necesita ayuda.",
          avoidWhen:
            "Usted habla de la ropa que ya tiene puesta. Ahí use “wear.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["get dressed", "wear", "put on", "look good on"],
          example: {
            target: "I'll dress the baby.",
            translation: "Voy a vestir al bebé."
          }
        },
        {
          term: "get dressed",
          explanation:
            "Vestirse. Es la forma normal para el proceso de ponerse ropa.",
          literal: "conseguir vestido",
          useWhen:
            "Rutinas de mañana, alistarse para salir o ponerse ropa después de cambiarse.",
          avoidWhen:
            "Sólo describe lo que lleva puesto. Entonces diga “wear.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["put clothes on", "get ready", "change clothes", "dress yourself"],
          example: {
            target: "I'll get dressed fast.",
            translation: "Me visto rápido."
          }
        },
        {
          term: "look good on me",
          explanation:
            "Quedarme bien o verme bien con algo. La prenda se ve bien sobre la persona.",
          literal: "verse bien en mí",
          useWhen:
            "Pregunta si una camisa, color o chaqueta le favorece.",
          avoidWhen:
            "Sólo pregunta por la talla. Entonces “fit me” puede ser más preciso.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["fit me", "suit me", "flatter me", "look right"],
          example: {
            target: "This blouse looks good on me.",
            translation: "Esta blusa me queda bien."
          }
        },
        {
          term: "wear shoes",
          explanation:
            "Llevar zapatos puestos. “Wear” describe lo que está en el cuerpo.",
          literal: "usar / llevar puesto",
          useWhen:
            "Habla de ropa, zapatos, gafas, perfume o accesorios que alguien tiene puestos.",
          avoidWhen:
            "Se enfoca en ponérselos. Para la acción inicial, “put on” puede ser mejor.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["have on", "put on", "be wearing", "dress in"],
          example: {
            target: "I wear comfortable shoes.",
            translation: "Llevo zapatos cómodos."
          }
        },
        {
          term: "light shirt",
          explanation:
            "Camisa liviana. “Light” aquí habla de peso y frescura, no de color necesariamente.",
          literal: "camisa ligera",
          useWhen:
            "Escoge ropa para calor, caminar, bailar o un evento al aire libre.",
          avoidWhen:
            "Quiere decir de color claro. Entonces diga “light-colored.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["light fabric", "short sleeves", "cotton shirt", "summer clothes"],
          example: {
            target: "I'll get dressed in the light shirt.",
            translation: "Me visto con la camisa liviana."
          }
        },
        {
          term: "fabric",
          explanation:
            "Tela. En clima caliente, la tela puede importar más que el corte.",
          literal: "tela",
          useWhen:
            "Habla de si una prenda es fresca, pesada, suave, formal o práctica.",
          avoidWhen:
            "Quiere nombrar la prenda. Entonces diga shirt, blouse, pants, dress.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["cotton", "linen", "material", "cloth"],
          example: {
            target: "That fabric is too warm.",
            translation: "Esa tela da mucho calor."
          }
        },
        {
          term: "comfortable shoes",
          explanation:
            "Zapatos cómodos. Para un festival al aire libre, no es un detalle menor.",
          literal: "zapatos cómodos",
          useWhen:
            "Va a caminar, hacer fila, bailar o estar de pie bastante tiempo.",
          avoidWhen:
            "El evento exige zapatos formales. Entonces cómodo puede no bastar.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["sneakers", "sandals", "walking shoes", "stand all night"],
          example: {
            target: "Wear comfortable shoes.",
            translation: "Lleve zapatos cómodos."
          }
        }
      ],
      note:
        "El inglés reparte la ropa entre varias piezas. “Get dressed” es vestirse. “Dress the baby” es vestir a otra persona. “Wear” describe lo que lleva puesto. “Looks good on me” dice que una prenda le queda o le favorece. Traducir todo como “dress” borra esas diferencias.",
      culture: [
        {
          label: "Vestirse para humedad también es estrategia",
          body:
            "En Miami, como en muchas ciudades calientes, la ropa se decide por tela, aire y zapatos tanto como por estilo. Una camisa bonita puede ser mala idea si la tela guarda demasiado calor."
        },
        {
          label: "Prestar ropa es confianza familiar",
          body:
            "Una prima que presta una camisa entra en una zona íntima sin volverla solemne. El inglés lo mantiene simple: “try this,” “wear these,” “that looks good on you.”"
        },
        {
          label: "No disfrazarse de cultura",
          body:
            "Para un festival, verse cómodo y respetuoso suele ser mejor que copiar ropa tradicional sin saber usarla. La frase útil no es exótica; es preguntar qué sirve para el clima y el plan."
        },
        {
          label: "Los bebés hacen claro el verbo",
          body:
            "Un adulto “gets dressed.” Un bebé “is dressed” by someone. Esa diferencia ayuda a recordar cuándo “dress” lleva objeto y cuándo conviene otra estructura."
        }
      ],
      pitfalls: [
        {
          mistake: "“I dress fast.”",
          whyItFails:
            "Puede entenderse, pero para la rutina normal de vestirse el inglés cotidiano prefiere “get dressed.”",
          sayInstead: "I get dressed fast."
        },
        {
          mistake: "“I dress comfortable shoes.”",
          whyItFails:
            "Los zapatos que ya tiene puestos se describen con “wear.” “Dress” no funciona con zapatos como objeto en esa idea.",
          sayInstead: "I wear comfortable shoes."
        },
        {
          mistake: "“This blouse dresses me well.”",
          whyItFails:
            "Es un calco de “me viste bien.” En inglés la prenda “looks good on me” o “fits me well.”",
          sayInstead: "This blouse looks good on me."
        },
        {
          mistake: "“I wear dressed quickly.”",
          whyItFails:
            "Mezcla “wear” con “get dressed.” Para el proceso de ponerse ropa, use una sola estructura.",
          sayInstead: "I get dressed quickly."
        }
      ],
      variations: [
        {
          form: "I'll get dressed fast and leave.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Vestirse uno mismo antes de salir."
        },
        {
          form: "I'll dress the baby.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Vestir a otra persona, especialmente un bebé."
        },
        {
          form: "This shirt looks good on you.",
          register: "friendly neutral",
          region: "Inglés universal",
          whenToUse: "Decir que una prenda le favorece a alguien."
        },
        {
          form: "Wear comfortable shoes.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Recomendar qué llevar puesto."
        },
        {
          form: "Are you dressed yet?",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Preguntar si alguien ya está vestido y listo."
        }
      ],
      prompt: "Mariana says “I'll get dressed fast and wear comfortable shoes.” ¿Cuál es la división?",
      choices: [
        "“Wear” siempre significa vestir a otra persona.",
        "“Dress” siempre significa cargar ropa.",
        "“Get dressed” es vestirse; “wear” describe la ropa puesta."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál frase significa “me visto rápido”?",
          choices: [
            "I dress comfortable shoes.",
            "I get dressed quickly.",
            "I wear dressed quickly."
          ],
          answer: 1,
          tests: "“get dressed” para vestirse"
        },
        {
          prompt: "Carolina va a vestir al bebé. ¿Cuál frase encaja?",
          choices: [
            "I'll dress the baby.",
            "I'll wear the baby.",
            "I'll look good the baby."
          ],
          answer: 0,
          tests: "“dress someone” con objeto persona"
        },
        {
          prompt: "¿Cuál frase describe ropa ya puesta?",
          choices: [
            "I get dressed comfortable shoes.",
            "I dress comfortable shoes.",
            "I wear comfortable shoes."
          ],
          answer: 2,
          tests: "“wear” para llevar puesto"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/31-developing-body-and-routine.js");
