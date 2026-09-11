/*
 * Lesson block: developing / looking after people.
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
 * The three verbs here — cuidar, proteger and apoyar — cover sustained care:
 * minding children or a home, keeping someone safe, and standing by someone.
 * The two directions are mirrors: same number of dialogue turns, vocabulary
 * entries, culture notes, pitfalls, variations and practice questions, and the
 * same optional slots filled on the same rows. That is enforced by
 * test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "looking-after-a-niece-in-neiva",
    level: "Developing · Looking after people",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    pathways: ["year-12-local-mastery"],
    verb: "cuidar",
    review: "pending",
    es: {
      title: "Cuidar a una sobrina en Neiva",
      situation:
        "You are in Neiva taking care of your niece while your sister works overnight. You also look after the house, give a warning with care, and end the call with a cuídate that sounds natural among family.",
      setting: {
        who: "Mariana is leaving for a night shift, and her brother Andrés is staying with her seven-year-old daughter, Lucía.",
        what: "They agree on bedtime, the locked gate, medicine, snacks, and the words that turn care into a normal family handoff.",
        when: "Early evening, just before Mariana catches transport to work and Lucía starts negotiating for more television.",
        where: "Neiva, in a family house on a hot weekday night, away from the course's usual big-city settings.",
        why: "Because cuidar is warmer and more sustained than one-off help: you can care for a child, look after a house, tell someone to take care, and warn cuidado."
      },
      address: {
        form: "tú",
        who: "Mariana and Andrés are siblings, and Lucía is a child, so tú is the natural family form here.",
        why: "The closeness matters. Cuidar is most believable when the relationship already carries trust, habit, and small instructions.",
        ifYouSwitch:
          "Usted would not be impossible in some Colombian families, but here it would make the handoff sound colder and less sibling-like. Vos would pull the scene toward a different regional flavor."
      },
      dialogue: [
        {
          speaker: "Mariana",
          target: "Gracias por cuidar a Lucía esta noche; salgo tarde del hospital.",
          translation: "Thanks for looking after Lucía tonight; I get out late from the hospital.",
          pronunciation: "GRAH-syahs por kwee-DAR ah loo-SEE-ah ES-tah NOH-che; SAL-goh TAR-deh del os-pee-TAL",
          literal: "Thanks for caring-for Lucía this night; I leave late from-the hospital.",
          why: "Cuidar a una persona takes personal a. This is not a quick favor like carrying a bag; it is responsibility for a child over several hours."
        },
        {
          speaker: "Andrés",
          target: "Tranquila, yo la cuido y también cuido la casa.",
          translation: "Don't worry, I'll look after her and I'll also look after the house.",
          pronunciation: "tran-KEE-lah, yo lah KWEE-doh ee tam-BYEN KWEE-doh lah KAH-sah",
          literal: "Calm, I her care-for and also I care-for the house.",
          why: "Spanish marks the child with la cuido, but the house is just cuido la casa. The same verb stretches from people to places without losing the idea of responsibility."
        },
        {
          speaker: "Mariana",
          target: "Ojo con la puerta del patio. Cuidado se sale el perro.",
          translation: "Watch the patio door. Careful or the dog will get out.",
          pronunciation: "OH-hoh kon lah PWER-tah del PAH-tyoh. kwee-DAH-doh seh SAH-leh el PEH-rroh",
          literal: "Eye with the door of-the patio. Careful itself leaves the dog.",
          why: "Cuidado is the warning noun built from the same family. It can stand alone or introduce the thing that might happen if nobody pays attention."
        },
        {
          speaker: "Andrés",
          target: "Listo. Le caliento la sopa y la cuido sin ponerla a trasnochar.",
          translation: "Done. I'll heat up her soup and look after her without keeping her up late.",
          pronunciation: "LEES-toh. leh kah-LYEN-toh lah SOH-pah ee lah KWEE-doh seen poh-NER-lah ah tras-noh-CHAR",
          literal: "Ready. To-her I-heat the soup and her I-care-for without putting-her to stay-up-late.",
          why: "La cuido returns to Lucía. The point is sustained supervision: feeding, bedtime, and not turning care into chaos."
        },
        {
          speaker: "Mariana",
          target: "Y cuídate tú también; no te vayas a dormir con el ventilador dañado.",
          translation: "And you take care too; don't go to sleep with the broken fan.",
          pronunciation: "ee KWEE-dah-teh too tam-BYEN; noh teh VAI-yahs ah dor-MEER kon el ben-tee-lah-DOR dah-NYAH-doh",
          literal: "And care-for-yourself you also; not yourself go to sleep with the fan damaged.",
          why: "Cuídate is one of the most common Colombian sign-offs among friends and family. It is affectionate, ordinary, and much more natural than a textbook farewell in this setting."
        },
        {
          speaker: "Andrés",
          target: "Dale, hermana. Tú trabaja tranquila; yo me encargo y te escribo.",
          translation: "Okay, sis. You work without worrying; I'll handle it and text you.",
          pronunciation: "DAH-leh, er-MAH-nah. too trah-BAH-hah tran-KEE-lah; yo meh en-KAR-goh ee teh es-KREE-boh",
          literal: "Go-ahead, sister. You work calm; I myself take-charge and to-you I-write.",
          why: "He does not repeat cuidar because the responsibility is already established. Me encargo is the natural partner: I have it covered."
        }
      ],
      vocabulary: [
        {
          term: "cuidar",
          explanation:
            "To look after, care for, or mind someone or something over time. It carries responsibility, not just a quick helpful action.",
          literal: "to care / guard",
          useWhen:
            "A child, an older relative, a pet, a house, a bag, or a responsibility needs ongoing attention.",
          avoidWhen:
            "You mean a one-time favor. That may be ayudar, but this lesson is about sustained care and keeping watch.",
          register: "neutral warm",
          region: "General Spanish and very common in Colombian family speech.",
          related: ["encargarse", "vigilar", "atender", "proteger"],
          example: {
            target: "Yo cuido a Lucía esta noche.",
            translation: "I'm looking after Lucía tonight."
          }
        },
        {
          term: "cuidar a",
          explanation:
            "The form for looking after a person. The personal a is not optional when the cared-for person is specific.",
          literal: "to care for to",
          useWhen:
            "The object is a named child, a parent, a neighbor, or any specific person.",
          avoidWhen:
            "The object is a thing or place. You say cuido la casa, not cuido a la casa.",
          register: "neutral",
          region: "General Spanish.",
          related: ["cuidar de", "estar pendiente de", "acompañar", "vigilar"],
          example: {
            target: "Gracias por cuidar a Lucía.",
            translation: "Thanks for looking after Lucía."
          }
        },
        {
          term: "cuídate",
          explanation:
            "Take care. In Colombia this is an extremely common warm sign-off, especially among friends and family.",
          literal: "care for yourself",
          useWhen:
            "Ending a call, saying goodbye at night, or sending someone off with affection rather than ceremony.",
          avoidWhen:
            "You want a very formal closing in writing. There, cuídese or a neutral despedida may fit better.",
          register: "warm informal",
          region: "General Colombian Spanish; one of the most ordinary affectionate goodbyes.",
          related: ["cuídese", "nos hablamos", "me avisas", "que estés bien"],
          example: {
            target: "Bueno, cuídate mucho.",
            translation: "Okay, take good care."
          }
        },
        {
          term: "cuidado",
          explanation:
            "Careful, or watch out. It works as a warning before something goes wrong.",
          literal: "care",
          useWhen:
            "A door, step, dog, hot pot, street crossing, or risky move needs immediate attention.",
          avoidWhen:
            "You are saying a warm goodbye. That is cuídate, not cuidado.",
          register: "neutral",
          region: "General Spanish.",
          related: ["ojo", "pilas", "atento", "alerta"],
          example: {
            target: "Cuidado se sale el perro.",
            translation: "Careful or the dog will get out."
          }
        },
        {
          term: "cuidar la casa",
          explanation:
            "To look after the house while someone is away: doors, lights, pets, food, and ordinary order.",
          literal: "to care for the house",
          useWhen:
            "Someone travels, works late, or leaves you responsible for a home.",
          avoidWhen:
            "You mean cleaning the house. Cuidar la casa may include cleaning, but it mainly means keeping it safe and running.",
          register: "neutral",
          region: "General Spanish.",
          related: ["estar pendiente", "cerrar bien", "vigilar", "encargarse"],
          example: {
            target: "También cuido la casa.",
            translation: "I'll also look after the house."
          }
        },
        {
          term: "estar pendiente",
          explanation:
            "To keep an eye on something or someone. It is less formal than supervise and fits family care well.",
          literal: "to be pending",
          useWhen:
            "You are watching for needs, messages, medicine times, or small problems before they grow.",
          avoidWhen:
            "You want to promise full responsibility alone. Then me encargo or yo lo cuido is stronger.",
          register: "neutral conversational",
          region: "Very common Colombian Spanish.",
          related: ["cuidar", "mirar", "vigilar", "revisar"],
          example: {
            target: "Estoy pendiente de Lucía.",
            translation: "I'm keeping an eye on Lucía."
          }
        },
        {
          term: "me encargo",
          explanation:
            "I've got it; I'll take charge. It often follows cuidar when the other person needs reassurance.",
          literal: "I put myself in charge",
          useWhen:
            "You accept responsibility for the child, house, errand, or situation.",
          avoidWhen:
            "You are only offering a tiny assist. Me encargo promises more ownership than that.",
          register: "neutral",
          region: "General Spanish.",
          related: ["yo respondo", "queda en mis manos", "lo manejo", "cuenta conmigo"],
          example: {
            target: "Yo me encargo y te escribo.",
            translation: "I'll handle it and text you."
          }
        }
      ],
      note:
        "Cuidar is the warm everyday verb of responsibility. It covers a child, a house, a pet, a sick relative, and yourself at goodbye. For a learner, the useful split is cuidar a una persona, cuidar una cosa, cuidado as a warning, and cuídate as the sign-off Colombians actually use all the time.",
      culture: [
        {
          label: "Cuídate is not dramatic",
          body:
            "English speakers sometimes hear take care as unusually serious, as if danger were expected. In Colombia, cuídate is ordinary affection. Friends and siblings use it at the end of calls, voice notes, and late-night goodbyes."
        },
        {
          label: "Care is a handoff",
          body:
            "Family care is often a practical handoff: medicine, food, keys, bedtime, doors, and messages. Cuidar sounds natural because the task lasts and because trust is already part of the relationship."
        },
        {
          label: "Cuidado and ojo are warnings",
          body:
            "Cuidado is not just the abstract noun care. In speech it can be a sharp warning: cuidado con el escalón, cuidado se cae. Ojo does similar work in Colombian Spanish, but cuidado is the safest general form."
        },
        {
          label: "Neiva can be plain Spanish",
          body:
            "Nothing in this scene needs invented local slang. A normal Colombian family conversation in Neiva broadens the course better than a fake regional catchphrase would."
        }
      ],
      pitfalls: [
        {
          mistake: "Forgetting personal a in cuidar a Lucía",
          whyItFails:
            "When the person is specific, Spanish normally marks the person with a. Cuidar Lucía sounds clipped and learner-like, even though the meaning is recoverable.",
          sayInstead: "Voy a cuidar a Lucía."
        },
        {
          mistake: "Using cuidado as a goodbye",
          whyItFails:
            "Cuidado is a warning, not the warm sign-off. If you say only cuidado while leaving, it sounds as if there is immediate danger.",
          sayInstead: "Cuídate mucho."
        },
        {
          mistake: "Using cuidar when you mean one quick favor",
          whyItFails:
            "Cuidar implies attention over time. If someone only opens a door or carries one bag, cuidar can exaggerate the responsibility.",
          sayInstead: "Use cuidar for sustained responsibility."
        },
        {
          mistake: "Saying cuido a la casa",
          whyItFails:
            "The personal a belongs with people and some person-like animals, not with an ordinary house. With places and things, Spanish uses the direct object without a.",
          sayInstead: "Cuido la casa."
        }
      ],
      variations: [
        {
          form: "Yo cuido a Lucía esta noche.",
          register: "neutral warm",
          region: "General Colombian",
          whenToUse: "You are taking responsibility for a child."
        },
        {
          form: "También cuido la casa.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You are watching the home while someone is away."
        },
        {
          form: "Cuidado se sale el perro.",
          register: "neutral warning",
          region: "General Spanish",
          whenToUse: "Something could go wrong right now."
        },
        {
          form: "Bueno, cuídate mucho.",
          register: "warm informal",
          region: "General Colombian",
          whenToUse: "A natural goodbye among friends or family."
        },
        {
          form: "Yo me encargo, tranquila.",
          register: "neutral warm",
          region: "General Spanish",
          whenToUse: "You want to reassure someone that the care is covered."
        }
      ],
      prompt: "Mariana says “cuídate tú también.” What makes cuídate important here?",
      choices: [
        "It is a common warm Colombian goodbye, not a dramatic warning.",
        "It means Andrés must hire a nurse before Mariana goes to work.",
        "It tells Andrés to clean the house before Lucía watches television."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence correctly uses cuidar with a person?",
          choices: [
            "Voy a cuidar a Lucía hasta que vuelva Mariana.",
            "Voy a cuidar la Lucía hasta que vuelva Mariana.",
            "Voy a cuidar con Lucía hasta que vuelva Mariana."
          ],
          answer: 0,
          tests: "personal a with a specific person"
        },
        {
          prompt: "Which line is a warning rather than a goodbye?",
          choices: [
            "Bueno, cuídate mucho cuando llegues.",
            "Cuidado se sale el perro por el patio.",
            "Nos hablamos mañana después del turno."
          ],
          answer: 1,
          tests: "cuidado as a warning"
        },
        {
          prompt: "Which sentence uses cuidar for a house correctly?",
          choices: [
            "Cuido a la casa mientras sales.",
            "Cuido con la casa mientras sales.",
            "Cuido la casa mientras sales."
          ],
          answer: 2,
          tests: "no personal a with ordinary things"
        },
        {
          prompt: "Why does Andrés say “me encargo” after agreeing to care for Lucía?",
          choices: [
            "He is promising to take charge of the responsibility.",
            "He is refusing to stay because he has another errand.",
            "He is asking Mariana to repeat every instruction again."
          ],
          answer: 0,
          tests: "me encargo as taking responsibility"
        }
      ]
    },
    en: {
      title: "Cuidar a una niña en Miami",
      situation:
        "Usted está en Miami cuidando a su sobrina mientras su hermana trabaja de noche. Necesita distinguir look after, take care, watch out y be careful sin traducir cuidar siempre de la misma manera.",
      setting: {
        who: "Mariana sale a un turno nocturno y su hermano Andrés se queda con Lucía, su hija de siete años.",
        what: "Acuerdan la hora de dormir, la puerta cerrada, la medicina, la comida y cómo sonar responsable en inglés.",
        when: "Al comienzo de la noche, justo antes de que Mariana salga y Lucía empiece a negociar más televisión.",
        where: "Miami, en una casa familiar donde el inglés se necesita para hablar con vecinos, escuela y trabajo.",
        why: "Porque cuidar en español se reparte en inglés entre look after, take care of, watch, watch out y be careful. Cada uno cambia el tipo de cuidado."
      },
      address: {
        form: "mixed",
        who: "Mariana y Andrés hablan como hermanos; el inglés usa el mismo you para confianza y para instrucciones.",
        why: "La cercanía está en sis, don't worry y frases directas. No existe un cambio de pronombre que reemplace tú.",
        ifYouSwitch:
          "Meter sir o ma'am entre hermanos sonaría como broma. Si hace falta más cuidado, el inglés alarga la frase, no cambia you."
      },
      dialogue: [
        {
          speaker: "Mariana",
          target: "Thanks for looking after Lucía tonight; I get off late.",
          translation: "Gracias por cuidar a Lucía esta noche; salgo tarde.",
          pronunciation: "zanks for LUK-ing AF-ter loo-SEE-ah tu-NAIT; ai get of leit",
          literal: "Gracias por mirar después de Lucía esta noche; salgo tarde.",
          why: "Look after es la frase más natural para cuidar a una persona durante un rato. No suena a emergencia; suena a responsabilidad familiar."
        },
        {
          speaker: "Andrés",
          target: "Don't worry, I'll take care of her and keep an eye on the house.",
          translation: "Tranquila, yo la cuido y también estoy pendiente de la casa.",
          pronunciation: "dont WOR-i, ail teik ker ov jer and kip an ai on da jaus",
          literal: "No se preocupe, tomaré cuidado de ella y mantendré un ojo en la casa.",
          why: "Take care of her también traduce cuidar, pero keep an eye on the house suena más natural que take care of the house cuando se trata de vigilar puertas, luces y detalles."
        },
        {
          speaker: "Mariana",
          target: "Watch out for the patio door. The dog might get out.",
          translation: "Ojo con la puerta del patio. Cuidado se sale el perro.",
          pronunciation: "uach aut for da PA-ti-ou dor. da dog mait get aut",
          literal: "Mire afuera por la puerta del patio. El perro podría salir.",
          why: "Watch out for es advertencia. No es mirar con calma, sino prestar atención porque algo puede salir mal."
        },
        {
          speaker: "Andrés",
          target: "Got it. I'll warm up her soup and make sure she doesn't stay up.",
          translation: "Listo. Le caliento la sopa y me aseguro de que no trasnoche.",
          pronunciation: "got it. ail worm op jer sup and meik shur shi DA-zent stei op",
          literal: "Lo tengo. Calentaré su sopa y haré seguro que ella no se quede despierta.",
          why: "“Make sure” suele expresar en inglés la parte activa de cuidar: revisar y confirmar. No dice sólo que usted está presente, sino que verá que lo importante pase."
        },
        {
          speaker: "Mariana",
          target: "And you take care too; don't sleep with that broken fan.",
          translation: "Y cuídate tú también; no duermas con ese ventilador dañado.",
          pronunciation: "and yu teik ker tu; dont slip uid dat BRO-ken fan",
          literal: "Y usted tome cuidado también; no duerma con ese ventilador roto.",
          why: "“Take care” puede ser despedida, igual que cuídate. En inglés es común, pero en el español colombiano cuídate sale todavía más automático entre personas cercanas."
        },
        {
          speaker: "Andrés",
          target: "Okay, sis. Go to work easy; I've got it and I'll text you.",
          translation: "Dale, hermana. Trabaja tranquila; yo me encargo y te escribo.",
          pronunciation: "ou-KEI, sis. gou tu work I-zi; aiv got it and ail tekst yu",
          literal: "Bueno, hermana. Vaya a trabajar fácil; lo tengo y le escribiré.",
          why: "“I've got it” es la tranquilidad. No usa el verbo cuidar, pero hace el mismo trabajo social: la otra persona puede irse porque la responsabilidad quedó cubierta."
        }
      ],
      vocabulary: [
        {
          term: "look after",
          explanation:
            "La frase más natural para cuidar a una persona, mascota o lugar durante un periodo de responsabilidad.",
          literal: "mirar después",
          useWhen:
            "Usted cuida a una niña, una persona mayor, una mascota o una casa mientras alguien no está.",
          avoidWhen:
            "Sólo quiere decir mirar algo con los ojos. Look after no es mirar físicamente; es hacerse cargo.",
          register: "neutro cálido",
          region: "Inglés británico y también muy entendido en Norteamérica.",
          related: ["take care of", "watch", "keep an eye on", "babysit"],
          example: {
            target: "I'm looking after Lucía tonight.",
            translation: "Estoy cuidando a Lucía esta noche."
          }
        },
        {
          term: "take care of",
          explanation:
            "Cuidar o encargarse de alguien o algo. Es amplio y sirve tanto para personas como para responsabilidades.",
          literal: "tomar cuidado de",
          useWhen:
            "Quiere decir que se hará cargo de una persona, un asunto, una cuenta o un problema.",
          avoidWhen:
            "Sólo está dando una advertencia inmediata. Para eso use be careful o watch out.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["look after", "handle", "deal with", "care for"],
          example: {
            target: "I'll take care of her.",
            translation: "Yo la cuido."
          }
        },
        {
          term: "take care",
          explanation:
            "Cuídate. Puede cerrar una conversación con afecto o pedir cuidado general.",
          literal: "tome cuidado",
          useWhen:
            "Al despedirse de familia, amigos o alguien a quien quiere desearle bien.",
          avoidWhen:
            "Necesita una advertencia concreta e inmediata. Watch out or be careful sería más claro.",
          register: "cálido informal",
          region: "Inglés universal.",
          related: ["be well", "stay safe", "see you", "look after yourself"],
          example: {
            target: "Take care, okay?",
            translation: "Cuídate, ¿sí?"
          }
        },
        {
          term: "watch out",
          explanation:
            "Cuidado u ojo. Es una advertencia porque algo puede pasar ya.",
          literal: "mire afuera",
          useWhen:
            "Hay una puerta abierta, un carro, un escalón, un perro o un riesgo inmediato.",
          avoidWhen:
            "La despedida es afectuosa y general. Watch out al final puede sonar alarmista.",
          register: "neutro de advertencia",
          region: "Inglés universal.",
          related: ["be careful", "look out", "careful", "mind"],
          example: {
            target: "Watch out for the patio door.",
            translation: "Ojo con la puerta del patio."
          }
        },
        {
          term: "keep an eye on",
          explanation:
            "Estar pendiente de alguien o algo sin sonar como policía o supervisor formal.",
          literal: "mantener un ojo en",
          useWhen:
            "Usted vigila una casa, una olla, un niño que juega o un mensaje que puede llegar.",
          avoidWhen:
            "Promete responsabilidad completa. Entonces “take care of” o “I've got it” puede sonar más fuerte.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["watch", "monitor", "check on", "look after"],
          example: {
            target: "Keep an eye on the house.",
            translation: "Está pendiente de la casa."
          }
        },
        {
          term: "make sure",
          explanation:
            "Asegurarse de que algo pase. Traduce la parte activa de cuidar: revisar, confirmar y no confiarse.",
          literal: "hacer seguro",
          useWhen:
            "La medicina, la puerta, la hora de dormir o una instrucción importante debe cumplirse.",
          avoidWhen:
            "Sólo quiere observar sin intervenir. Keep an eye on is lighter.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["check", "confirm", "see that", "ensure"],
          example: {
            target: "Make sure she doesn't stay up.",
            translation: "Asegúrese de que no trasnoche."
          }
        },
        {
          term: "I've got it",
          explanation:
            "Yo me encargo. Frase breve para tranquilizar a alguien que acaba de entregar una responsabilidad.",
          literal: "lo tengo",
          useWhen:
            "Quiere decir que la situación queda en sus manos y la otra persona puede irse tranquila.",
          avoidWhen:
            "No entendió la instrucción. Decir I've got it sin entender puede crear un problema real.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["I'll handle it", "leave it with me", "no worries", "consider it done"],
          example: {
            target: "I've got it and I'll text you.",
            translation: "Yo me encargo y le escribo."
          }
        }
      ],
      note:
        "El español junta mucho en cuidar. El inglés lo reparte: look after para cuidar durante un rato, take care of para encargarse, take care como despedida, watch out o be careful para advertir, keep an eye on para estar pendiente y make sure para comprobar. La pregunta no es sólo cuál significa cuidar, sino qué tipo de cuidado está ocurriendo.",
      culture: [
        {
          label: "Take care no siempre pesa igual",
          body:
            "En inglés take care puede ser una despedida amable, pero no siempre suena tan automático como cuídate en Colombia. Entre colombianos, cuídate aparece al final de llamadas y mensajes con una naturalidad enorme."
        },
        {
          label: "Look after suena sostenido",
          body:
            "Look after no es una ayuda de cinco segundos. Implica que durante un rato usted tiene a alguien o algo bajo su responsabilidad. Por eso combina bien con niños, mascotas, casas y personas mayores."
        },
        {
          label: "Watch out es alarma",
          body:
            "Watch out no es una despedida suave. Es la voz que aparece cuando hay una puerta abierta, un carro cerca o un escalón peligroso. Si lo usa donde va take care, la frase suena demasiado alarmada."
        },
        {
          label: "La casa también se cuida",
          body:
            "En español cuidar la casa puede sonar muy amplio. En inglés, según el detalle, puede ser look after the house, keep an eye on the house, lock up, feed the dog or water the plants."
        }
      ],
      pitfalls: [
        {
          mistake: "“I care Lucía tonight.”",
          whyItFails:
            "Care solo no toma el objeto de esa manera. Para cuidar a una persona durante unas horas, el inglés necesita look after or take care of.",
          sayInstead: "I'm looking after Lucía tonight."
        },
        {
          mistake: "“Careful yourself.”",
          whyItFails:
            "Es un calco de cuídate. Para despedirse, el inglés dice take care o look after yourself, no careful yourself.",
          sayInstead: "Take care."
        },
        {
          mistake: "“Take care the house.”",
          whyItFails:
            "Take care necesita of antes del objeto. Sin of, la frase queda rota; para una casa también puede sonar mejor keep an eye on.",
          sayInstead: "Keep an eye on the house."
        },
        {
          mistake: "“Watch out” como despedida cariñosa",
          whyItFails:
            "Watch out anuncia peligro concreto. Si usted sólo quiere cerrar con afecto, suena demasiado alarmado.",
          sayInstead: "Take care, okay?"
        }
      ],
      variations: [
        {
          form: "I'm looking after Lucía tonight.",
          register: "neutro cálido",
          region: "Inglés universal",
          whenToUse: "Usted cuida a una niña durante unas horas."
        },
        {
          form: "I'll take care of her.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Acepta responsabilidad por una persona o asunto."
        },
        {
          form: "Watch out for the patio door.",
          register: "neutro de advertencia",
          region: "Inglés universal",
          whenToUse: "Hay un riesgo concreto en este momento."
        },
        {
          form: "Take care, okay?",
          register: "cálido informal",
          region: "Inglés universal",
          whenToUse: "Una despedida amable entre gente cercana."
        },
        {
          form: "I've got it and I'll text you.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Quiere tranquilizar a quien le entregó la responsabilidad."
        }
      ],
      prompt: "Mariana says “thanks for looking after Lucía.” ¿Qué expresa looking after?",
      choices: [
        "Responsabilidad sostenida por Lucía durante la noche.",
        "Una mirada rápida para comprobar si Lucía llegó.",
        "Una advertencia urgente de que Lucía está en peligro."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase sirve como despedida parecida a cuídate?",
          choices: [
            "Take care, okay?",
            "Watch out the house.",
            "Careful yourself now."
          ],
          answer: 0,
          tests: "take care as a goodbye"
        },
        {
          prompt: "¿Cuál frase advierte de un riesgo inmediato?",
          choices: [
            "Take care after Lucía.",
            "Watch out for the dog.",
            "Look after your goodbye."
          ],
          answer: 1,
          tests: "watch out as warning"
        },
        {
          prompt: "¿Cuál frase corrige “take care the house”?",
          choices: [
            "Keep an eye on the house.",
            "Take care house tonight.",
            "Care the house warmly."
          ],
          answer: 0,
          tests: "take care of or keep an eye on"
        },
        {
          prompt: "¿Cuál frase promete que usted se encarga?",
          choices: [
            "I've got it and I'll text you.",
            "I watched out and left early.",
            "I cared quickly and forgot it."
          ],
          answer: 0,
          tests: "I've got it as reassurance"
        }
      ]
    }
  },
  {
    id: "keeping-neighbors-safe-in-quibdo",
    level: "Developing · Keeping people safe",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    pathways: ["year-12-local-mastery"],
    verb: "proteger",
    review: "pending",
    es: {
      title: "Proteger a los vecinos en Quibdó",
      situation:
        "You are in Quibdó during a heavy downpour and organize with neighbors how to protect children and older adults without creating panic. You also practice protejo and proteja, where the g changes to j.",
      setting: {
        who: "Diana coordinates a neighborhood response, and Óscar helps move children and older neighbors away from a flooded corner.",
        what: "They decide who watches the doorway, who walks with the children, and how to speak about protection without sounding theatrical.",
        when: "A rainy afternoon, after water has started gathering near the lower end of the street.",
        where: "Quibdó, in a neighborhood street during a heavy downpour, using a city almost absent from the catalogue.",
        why: "Because proteger is stronger than cuidar: it names risk, safety, and prevention. It also forces the protejo and proteja spelling change."
      },
      address: {
        form: "usted",
        who: "Diana and Óscar are neighbors working together, so usted keeps the coordination respectful and clear.",
        why: "In a practical safety moment, usted can sound calm rather than distant. The priority is clarity, not intimacy.",
        ifYouSwitch:
          "Tú would not destroy the exchange, but it would make the coordination feel more personal. Vos would distract from the general Colombian register this scene needs."
      },
      dialogue: [
        {
          speaker: "Diana",
          target: "Óscar, protejamos a los niños mientras baja el agua.",
          translation: "Óscar, let's protect the children while the water goes down.",
          pronunciation: "OS-kar, proh-teh-HAH-mos ah los NEE-nyos MYEN-tras BAH-hah el AH-gwah",
          literal: "Óscar, let-us-protect the children while lowers the water.",
          why: "Proteger takes personal a with people. The verb is stronger than cuidar because the children are not just being minded; they are being kept safe from a real risk."
        },
        {
          speaker: "Óscar",
          target: "Yo protejo la entrada, pero necesito que usted proteja la escalera.",
          translation: "I'll protect the entrance, but I need you to protect the stairs.",
          pronunciation: "yo proh-TEH-hoh lah en-TRAH-dah, PEH-roh neh-seh-SEE-toh keh oos-TED proh-TEH-hah lah es-kah-LEH-rah",
          literal: "I protect the entrance, but I need that you protect the stairway.",
          why: "Here is the spelling trap: proteger becomes protejo before o and proteja before a. The sound stays soft, so Spanish writes j to keep it."
        },
        {
          speaker: "Diana",
          target: "Listo. La idea es proteger, no asustar a todo el mundo.",
          translation: "Done. The idea is to protect people, not scare everyone.",
          pronunciation: "LEES-toh. lah ee-DEH-ah es proh-teh-HER, noh ah-soos-TAR ah TOH-doh el MOON-doh",
          literal: "Ready. The idea is protect, not scare all the world.",
          why: "Proteger can sound serious, but Diana keeps it practical. In emergencies, calm wording is part of the protection."
        },
        {
          speaker: "Óscar",
          target: "A doña Marta la protegemos del agua y de los empujones.",
          translation: "We protect Doña Marta from the water and from the pushing.",
          pronunciation: "ah DOH-nyah MAR-tah lah proh-teh-HEH-mos del AH-gwah ee deh los em-poo-HOH-nes",
          literal: "To Doña Marta her we-protect from-the water and from the pushes.",
          why: "Proteger de names the danger. The pronoun la and the personal a both point to Doña Marta as the person being protected."
        },
        {
          speaker: "Diana",
          target: "Y que nadie se haga el héroe; primero se protege la vida.",
          translation: "And nobody should play hero; life is protected first.",
          pronunciation: "ee keh NAH-dyeh seh AH-gah el EH-roh-eh; pree-MEH-roh seh proh-TEH-heh lah BEE-dah",
          literal: "And that nobody makes himself the hero; first is protected the life.",
          why: "Se protege la vida makes the rule general. It sounds like a shared principle, not an order aimed at one careless person."
        },
        {
          speaker: "Óscar",
          target: "Cuando pase el aguacero, revisamos qué más toca proteger.",
          translation: "When the downpour passes, we'll check what else needs protecting.",
          pronunciation: "KWAN-doh PAH-seh el ah-gwah-SEH-roh, rreh-bee-SAH-mos keh mas TOH-kah proh-teh-HER",
          literal: "When passes the downpour, we-check what more falls-to protect.",
          why: "Toca proteger is Colombian practical language: this is what has to be protected next. It keeps the verb tied to action rather than panic."
        }
      ],
      vocabulary: [
        {
          term: "proteger",
          explanation:
            "To protect or keep safe from a danger. It is stronger and more risk-focused than cuidar.",
          literal: "to protect",
          useWhen:
            "People, documents, homes, rights, animals, or fragile things face a real or possible threat.",
          avoidWhen:
            "You only mean ordinary looking after with no danger. Cuidar may sound warmer and more natural there.",
          register: "neutral",
          region: "General Spanish.",
          related: ["cuidar", "defender", "resguardar", "cubrir"],
          example: {
            target: "Hay que proteger a los niños.",
            translation: "We need to protect the children."
          }
        },
        {
          term: "protejo",
          explanation:
            "The yo form of proteger. The g changes to j before o to keep the same soft sound.",
          literal: "I protect",
          useWhen:
            "You are saying what you personally protect or are taking responsibility for protecting.",
          avoidWhen:
            "Writing protego. That spelling would change the sound and is not the Spanish form.",
          register: "neutral",
          region: "General Spanish spelling rule.",
          related: ["proteja", "protegemos", "protegí", "protegido"],
          example: {
            target: "Yo protejo la entrada.",
            translation: "I protect the entrance."
          }
        },
        {
          term: "proteja",
          explanation:
            "The usted command or subjunctive form. It also uses j before a: que usted proteja, proteja la escalera.",
          literal: "protect / may protect",
          useWhen:
            "Giving a respectful instruction or saying that someone needs to protect something.",
          avoidWhen:
            "Writing protega. The g cannot keep the soft sound before a, so Spanish writes j.",
          register: "neutral to formal",
          region: "General Spanish spelling rule.",
          related: ["protejo", "protejas", "protejamos", "proteger"],
          example: {
            target: "Necesito que usted proteja la escalera.",
            translation: "I need you to protect the stairs."
          }
        },
        {
          term: "proteger a",
          explanation:
            "The form for protecting a person or specific living being, with personal a.",
          literal: "to protect to",
          useWhen:
            "Children, older neighbors, a named person, or a pet is the one being protected.",
          avoidWhen:
            "The object is a thing: proteger la entrada, proteger los documentos, proteger la comida.",
          register: "neutral",
          region: "General Spanish.",
          related: ["cuidar a", "defender a", "acompañar a", "resguardar a"],
          example: {
            target: "Protejamos a los niños.",
            translation: "Let's protect the children."
          }
        },
        {
          term: "proteger de",
          explanation:
            "To protect from a danger. De names what the person or thing is being protected from.",
          literal: "to protect from",
          useWhen:
            "The risk is water, sun, cold, violence, fraud, pressure, or any specific threat.",
          avoidWhen:
            "The sentence only names the person protected and the threat is obvious. Then de may be unnecessary.",
          register: "neutral",
          region: "General Spanish.",
          related: ["cuidar de", "alejar de", "cubrir de", "resguardar de"],
          example: {
            target: "La protegemos del agua.",
            translation: "We protect her from the water."
          }
        },
        {
          term: "hacerse el héroe",
          explanation:
            "To play hero, usually by taking unnecessary risks to look brave.",
          literal: "to make oneself the hero",
          useWhen:
            "Someone may turn a safety task into a personal performance.",
          avoidWhen:
            "Someone is genuinely risking themselves because there is no safer option. Then the phrase can sound unfair.",
          register: "neutral conversational",
          region: "General Spanish.",
          related: ["arriesgarse", "lucirse", "imprudente", "valiente"],
          example: {
            target: "Que nadie se haga el héroe.",
            translation: "Nobody should play hero."
          }
        },
        {
          term: "toca proteger",
          explanation:
            "A practical Colombian way to say something has to be protected. Toca frames it as the task at hand.",
          literal: "it falls to protect",
          useWhen:
            "A situation leaves no fancy choice: this is what needs doing next.",
          avoidWhen:
            "You are writing very formally. Conviene proteger or se debe proteger may sound more official.",
          register: "neutral conversational",
          region: "Very common Colombian structure with toca.",
          related: ["hay que proteger", "se debe proteger", "conviene proteger", "queda proteger"],
          example: {
            target: "Revisamos qué más toca proteger.",
            translation: "We'll check what else needs protecting."
          }
        }
      ],
      note:
        "Proteger is care under risk. You can cuidar a child on an ordinary night, but you proteger a child from water, traffic, cold, gossip, or danger. The spelling also matters: yo protejo and que usted proteja use j because g before o or a would no longer keep the sound of proteger.",
      culture: [
        {
          label: "Protection does not need panic",
          body:
            "In a neighborhood emergency, calm language matters. Proteger can be serious without being theatrical. Diana's line, proteger no asustar, captures a useful Colombian public tone: practical, direct, and face-saving."
        },
        {
          label: "Quibdó deserves ordinary scenes too",
          body:
            "The scene uses heavy rain because it is credible, but the language stays general. The point is not to decorate Quibdó with invented words; it is to let a real Colombian place hold ordinary useful Spanish."
        },
        {
          label: "People take personal a",
          body:
            "Proteger follows the same person-marking pattern learners have seen elsewhere: proteger a los niños, proteger a doña Marta. Things do not take that a unless they are treated like specific living beings."
        },
        {
          label: "Toca is practical, not fatalistic",
          body:
            "Toca proteger means that protecting is the task the situation demands. It does not mean people have no agency; it means the next responsible action is clear."
        }
      ],
      pitfalls: [
        {
          mistake: "Writing yo protego",
          whyItFails:
            "The form changes g to j before o: proteger becomes protejo. Without that change, the sound would shift and the form is simply wrong.",
          sayInstead: "Yo protejo la entrada."
        },
        {
          mistake: "Writing que usted protega",
          whyItFails:
            "Before a, the same spelling rule applies. Spanish writes proteja to keep the soft sound from proteger.",
          sayInstead: "Necesito que usted proteja la escalera."
        },
        {
          mistake: "Using proteger for ordinary babysitting with no risk",
          whyItFails:
            "It can sound heavier than intended. If the job is ordinary care, cuidar is warmer and more natural.",
          sayInstead: "Cuido a los niños esta noche."
        },
        {
          mistake: "Forgetting de when naming the danger",
          whyItFails:
            "Spanish usually protects someone de something: del agua, del frío, de los empujones. Without de, the threat may be unclear.",
          sayInstead: "La protegemos del agua."
        }
      ],
      variations: [
        {
          form: "Protejamos a los niños.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "A group needs to keep children safe."
        },
        {
          form: "Yo protejo la entrada.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You personally take the protective position."
        },
        {
          form: "Necesito que usted proteja la escalera.",
          register: "polite practical",
          region: "General Spanish",
          whenToUse: "Giving a respectful instruction with proteja."
        },
        {
          form: "La protegemos del agua.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Naming both the person protected and the danger."
        },
        {
          form: "Primero se protege la vida.",
          register: "serious practical",
          region: "General Spanish",
          whenToUse: "Stating a general safety principle."
        }
      ],
      prompt: "Óscar says “yo protejo” and “usted proteja.” What is the spelling lesson?",
      choices: [
        "Proteger changes g to j before o or a to keep the soft sound.",
        "Proteger drops the final r whenever a neighbor gives an order.",
        "Proteger becomes cuidar whenever the object is a child or elder."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which form is correct for “I protect the entrance”?",
          choices: [
            "Yo protego la entrada.",
            "Yo protejo la entrada.",
            "Yo protegí la entrada."
          ],
          answer: 1,
          tests: "protejo as the yo present form"
        },
        {
          prompt: "Which line correctly gives a respectful instruction?",
          choices: [
            "Protega la escalera, por favor.",
            "Protege la escalera, por favor.",
            "Proteja la escalera, por favor."
          ],
          answer: 2,
          tests: "proteja with j before a"
        },
        {
          prompt: "Which phrase names the danger clearly?",
          choices: [
            "La protegemos del agua.",
            "La protegemos el agua.",
            "La protegemos al agua."
          ],
          answer: 0,
          tests: "proteger de for the threat"
        },
        {
          prompt: "Why is proteger stronger than cuidar in this scene?",
          choices: [
            "It names safety against a real risk.",
            "It means watching television calmly.",
            "It describes a one-time friendly favor."
          ],
          answer: 0,
          tests: "proteger as risk-focused care"
        }
      ]
    },
    en: {
      title: "Proteger a vecinos en Manchester",
      situation:
        "Usted está en Manchester durante una lluvia fuerte y ayuda a coordinar cómo mantener seguros a niños y vecinos mayores. En inglés debe separar protect, keep safe y shield sin olvidar que proteger es más fuerte que cuidar.",
      setting: {
        who: "Diana coordina a los vecinos y Oscar ayuda a mover niños y adultos mayores lejos de una esquina inundada.",
        what: "Deciden quién vigila la entrada, quién acompaña a los niños y cómo hablar de seguridad sin sonar teatral.",
        when: "Una tarde lluviosa, cuando el agua ya se acumula cerca del extremo bajo de la calle.",
        where: "Manchester, en una calle residencial donde la lluvia vuelve práctica la conversación en inglés.",
        why: "Porque proteger no siempre se traduce sólo con protect. Keep safe, shield y protect from reparten matices de seguridad, cuidado y barrera."
      },
      address: {
        form: "mixed",
        who: "Diana y Oscar hablan como vecinos que cooperan; el inglés mantiene you para instrucciones y colaboración.",
        why: "El respeto se marca con tono claro, please cuando hace falta y órdenes prácticas. No hay usted gramatical.",
        ifYouSwitch:
          "Usar sir o ma'am entre vecinos en medio de la lluvia sonaría rígido. La claridad en inglés viene de frases directas y calmadas."
      },
      dialogue: [
        {
          speaker: "Diana",
          target: "Oscar, let's keep the children safe while the water goes down.",
          translation: "Óscar, protejamos a los niños mientras baja el agua.",
          pronunciation: "OS-kar, lets kip da CHIL-dren seif wail da UO-ter gouz daun",
          literal: "Óscar, mantengamos seguros a los niños mientras baja el agua.",
          why: "Keep safe suena natural cuando el centro es el bienestar de las personas. Protect también sirve, pero keep safe es más cálido y menos oficial."
        },
        {
          speaker: "Oscar",
          target: "I'll protect the entrance, but I need you to cover the stairs.",
          translation: "Yo protejo la entrada, pero necesito que usted cubra la escalera.",
          pronunciation: "ail pro-TEKT di EN-trans, bat ai nid yu tu KO-ver da sterz",
          literal: "Protegeré la entrada, pero necesito que usted cubra las escaleras.",
          why: "Protect the entrance funciona porque habla de una barrera. Cover the stairs es más idiomático que protect the stairs si la tarea es vigilar ese punto."
        },
        {
          speaker: "Diana",
          target: "Good. The point is to protect people, not scare everyone.",
          translation: "Bien. La idea es proteger a la gente, no asustar a todo el mundo.",
          pronunciation: "gud. da point iz tu pro-TEKT PI-pol, not sker EV-ri-uan",
          literal: "Bien. El punto es proteger personas, no asustar a todos.",
          why: "Protect people es directo y claro. En inglés, como en español, el verbo puede sonar serio, así que la segunda parte baja el pánico."
        },
        {
          speaker: "Oscar",
          target: "We'll shield Mrs. Martin from the water and the pushing.",
          translation: "A doña Marta la protegemos del agua y de los empujones.",
          pronunciation: "uil shild MI-siz MAR-tin from da UO-ter and da PU-shing",
          literal: "Escudaremos a la señora Martin del agua y los empujones.",
          why: "Shield from añade la imagen de ponerse como barrera. Es más físico que protect from y encaja cuando alguien vulnerable cruza un espacio difícil."
        },
        {
          speaker: "Diana",
          target: "And nobody plays hero; life comes first.",
          translation: "Y que nadie se haga el héroe; primero va la vida.",
          pronunciation: "and NO-bod-i pleiz JIR-ou; laif komz ferst",
          literal: "Y nadie juega héroe; la vida viene primero.",
          why: "Plays hero traduce hacerse el héroe. Life comes first dice primero se protege la vida sin sonar como traducción literal."
        },
        {
          speaker: "Oscar",
          target: "When the rain lets up, we'll check what else needs protecting.",
          translation: "Cuando baje el aguacero, revisamos qué más toca proteger.",
          pronunciation: "wen da rein lets op, uil chek uat els nidz pro-TEK-ting",
          literal: "Cuando la lluvia afloje, revisaremos qué más necesita protegerse.",
          why: "Needs protecting es una estructura muy natural en inglés. Evita repetir must be protected y mantiene la frase práctica."
        }
      ],
      vocabulary: [
        {
          term: "protect",
          explanation:
            "El verbo directo para proteger a personas, lugares, derechos o cosas contra un riesgo.",
          literal: "proteger",
          useWhen:
            "Hay peligro, daño posible, una barrera o una responsabilidad seria de seguridad.",
          avoidWhen:
            "Sólo habla de cuidar de forma cotidiana. Look after or take care of puede sonar más cálido.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["keep safe", "shield", "guard", "defend"],
          example: {
            target: "The point is to protect people.",
            translation: "La idea es proteger a la gente."
          }
        },
        {
          term: "keep safe",
          explanation:
            "Mantener seguro. Suena humano y práctico cuando la prioridad es que alguien no sufra daño.",
          literal: "mantener seguro",
          useWhen:
            "Niños, vecinos, pacientes o familiares necesitan seguridad y calma.",
          avoidWhen:
            "Necesita nombrar una barrera formal, militar o legal. Protect puede ser más preciso.",
          register: "neutro cálido",
          region: "Inglés universal.",
          related: ["protect", "look after", "watch over", "keep out of danger"],
          example: {
            target: "Let's keep the children safe.",
            translation: "Protejamos a los niños."
          }
        },
        {
          term: "protect from",
          explanation:
            "Proteger de algo. From introduce el peligro: agua, frío, fraude, presión o violencia.",
          literal: "proteger de",
          useWhen:
            "Quiere decir exactamente de qué riesgo se protege a alguien o algo.",
          avoidWhen:
            "El peligro ya está claro y la frase suena pesada. A veces protect alone is enough.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["shield from", "guard against", "keep away from", "defend against"],
          example: {
            target: "Protect her from the water.",
            translation: "Protéjala del agua."
          }
        },
        {
          term: "shield",
          explanation:
            "Proteger como una barrera o escudo, física o socialmente.",
          literal: "escudar",
          useWhen:
            "Alguien bloquea agua, sol, golpes, presión, prensa o críticas para que no lleguen a otra persona.",
          avoidWhen:
            "La protección es general y no hay imagen de barrera. Protect puede sonar más simple.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["protect", "cover", "block", "screen"],
          example: {
            target: "We'll shield her from the pushing.",
            translation: "La protegemos de los empujones."
          }
        },
        {
          term: "cover",
          explanation:
            "Cubrir o vigilar un punto para que no quede sin protección.",
          literal: "cubrir",
          useWhen:
            "Una puerta, escalera, salida o zona necesita que alguien esté pendiente.",
          avoidWhen:
            "Quiere hablar de una persona vulnerable. Cover the child puede sonar raro si no hay contexto físico.",
          register: "neutro práctico",
          region: "Inglés universal.",
          related: ["watch", "guard", "keep an eye on", "protect"],
          example: {
            target: "Cover the stairs, please.",
            translation: "Proteja la escalera, por favor."
          }
        },
        {
          term: "play hero",
          explanation:
            "Hacerse el héroe: tomar riesgos innecesarios para parecer valiente.",
          literal: "jugar al héroe",
          useWhen:
            "Alguien quiere lucirse en vez de seguir el plan seguro.",
          avoidWhen:
            "La persona tuvo que actuar porque no había alternativa. Ahí puede sonar injusto.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["show off", "take risks", "be reckless", "act brave"],
          example: {
            target: "Nobody plays hero.",
            translation: "Que nadie se haga el héroe."
          }
        },
        {
          term: "needs protecting",
          explanation:
            "Estructura natural para decir que algo toca protegerse o necesita protección.",
          literal: "necesita protegiendo",
          useWhen:
            "Quiere sonar práctico y menos pesado que must be protected.",
          avoidWhen:
            "Es un documento muy formal donde needs to be protected puede ser más transparente.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["needs to be protected", "must be protected", "requires protection", "has to be covered"],
          example: {
            target: "What else needs protecting?",
            translation: "¿Qué más toca proteger?"
          }
        }
      ],
      note:
        "Proteger en inglés se reparte por situación. Protect es el verbo directo; keep safe suena humano y calmado; shield imagina una barrera; cover sirve para una entrada o escalera; needs protecting vuelve práctica la obligación. En español además debe recordar protejo y proteja, aunque en inglés esa trampa de ortografía no existe.",
      culture: [
        {
          label: "Keep safe baja el tono",
          body:
            "En una emergencia pequeña, keep safe puede sonar menos oficial que protect y más cercano a la gente. No minimiza el riesgo; lo vuelve manejable."
        },
        {
          label: "Shield tiene cuerpo",
          body:
            "Shield sugiere una barrera. Puede ser una persona que tapa a otra de empujones, una sombrilla contra la lluvia o una institución que protege a alguien de presión pública."
        },
        {
          label: "Cover no siempre es tapar",
          body:
            "Cover the stairs no significa poner una manta sobre la escalera. En coordinación práctica, significa vigilar o hacerse cargo de ese punto."
        },
        {
          label: "Life comes first suena natural",
          body:
            "Primero se protege la vida no se traduce palabra por palabra. Life comes first comunica la prioridad de seguridad con una frase inglesa breve y reconocible."
        }
      ],
      pitfalls: [
        {
          mistake: "“I protect the children of the water.”",
          whyItFails:
            "Para nombrar el peligro, el inglés usa from, no of. Of haría sonar la frase como posesión o relación, no como protección.",
          sayInstead: "I protect the children from the water."
        },
        {
          mistake: "“Nobody makes himself the hero.”",
          whyItFails:
            "Es un calco de hacerse el héroe. La frase inglesa natural es play hero, con play como actuar un papel.",
          sayInstead: "Nobody plays hero."
        },
        {
          mistake: "“The stairs need protect.”",
          whyItFails:
            "Después de need, el inglés requiere protecting o to be protected. La forma base sola no completa la estructura.",
          sayInstead: "The stairs need protecting."
        },
        {
          mistake: "“Keep the entrance safe” para asignar una puerta",
          whyItFails:
            "Se entiende, pero si la tarea es vigilar el punto, cover the entrance or watch the entrance suena más natural.",
          sayInstead: "Cover the entrance, please."
        }
      ],
      variations: [
        {
          form: "Let's keep the children safe.",
          register: "neutro cálido",
          region: "Inglés universal",
          whenToUse: "El foco está en el bienestar de los niños."
        },
        {
          form: "I'll protect the entrance.",
          register: "neutro práctico",
          region: "Inglés universal",
          whenToUse: "Usted se encarga de una barrera o punto vulnerable."
        },
        {
          form: "Protect her from the water.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Nombra la persona y el peligro."
        },
        {
          form: "Nobody plays hero.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Quiere evitar riesgos innecesarios."
        },
        {
          form: "What else needs protecting?",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Revisa la siguiente tarea de seguridad."
        }
      ],
      prompt: "Diana says “let's keep the children safe.” ¿Por qué no usa sólo protect?",
      choices: [
        "Keep safe suena más humano y calmado para el bienestar de los niños.",
        "Protect sólo sirve para documentos legales y nunca para personas.",
        "Keep safe significa dejar a los niños solos hasta que baje el agua."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase nombra correctamente el peligro?",
          choices: [
            "Protect her of the water.",
            "Protect her from the water.",
            "Protect her to the water."
          ],
          answer: 1,
          tests: "protect from for the danger"
        },
        {
          prompt: "¿Cuál frase traduce hacerse el héroe?",
          choices: [
            "Nobody plays hero.",
            "Nobody makes hero.",
            "Nobody heroes himself."
          ],
          answer: 0,
          tests: "play hero as the idiom"
        },
        {
          prompt: "¿Cuál frase suena natural para una escalera que requiere cuidado?",
          choices: [
            "The stairs need protect.",
            "The stairs need protects.",
            "The stairs need protecting."
          ],
          answer: 2,
          tests: "needs protecting structure"
        },
        {
          prompt: "¿Cuál frase asigna a alguien a vigilar una entrada?",
          choices: [
            "Cover the entrance, please.",
            "Protect from the entrance.",
            "Keep safe of the entrance."
          ],
          answer: 0,
          tests: "cover for guarding a point"
        }
      ]
    }
  },
  {
    id: "standing-by-a-friend-in-pasto",
    level: "Developing · Standing by someone",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "neutral",
    pathways: ["year-12-local-mastery"],
    verb: "apoyar",
    review: "pending",
    es: {
      title: "Apoyar a una amiga en Pasto",
      situation:
        "You are in Pasto with a friend who is going to report a problem at the neighborhood board meeting. You want to support her without promising to pay her expenses, and you also distinguish moral support from the physical support of a wall or a table.",
      setting: {
        who: "Sofía is nervous before speaking at a neighborhood meeting, and Julián is a close friend who knows the story.",
        what: "They talk through moral support, public backing, expenses, and the literal meaning of leaning something against a wall.",
        when: "Late afternoon, before a community meeting where Sofía will speak in front of neighbors.",
        where: "Pasto, near a small community hall, bringing Nariño into the lesson without inventing local slang.",
        why: "Because apoyar is a false friend. It can mean moral or political support, but paying someone's rent is mantener or ayudar con los gastos."
      },
      address: {
        form: "mixed",
        who: "Sofía and Julián are friends; they mostly use tú, but the public meeting around them pulls in more careful wording.",
        why: "Mixed address lets the lesson show closeness and seriousness at once. Apoyar often appears when friendship enters public pressure.",
        ifYouSwitch:
          "A fully formal usted exchange would make them sound less close. Purely casual slang would undercut the seriousness of standing by someone in public."
      },
      dialogue: [
        {
          speaker: "Sofía",
          target: "Me da pena hablar sola en la junta. ¿Tú sí me apoyas?",
          translation: "I feel embarrassed speaking alone at the meeting. Will you really support me?",
          pronunciation: "meh dah PEH-nah ah-BLAR SOH-lah en lah HOON-tah. too see meh ah-POH-yahs",
          literal: "To-me gives shame to-speak alone in the board. You yes me support?",
          why: "Apoyar is emotional and public backing here. Sofía is not asking Julián to pay bills; she is asking whether he will stand with her."
        },
        {
          speaker: "Julián",
          target: "Claro que te apoyo. Si toca hablar, hablo contigo.",
          translation: "Of course I support you. If we have to speak, I'll speak with you.",
          pronunciation: "KLAH-roh keh teh ah-POH-yoh. see TOH-kah ah-BLAR, AH-bloh kon-TEE-goh",
          literal: "Clear that you I-support. If it-falls to speak, I-speak with-you.",
          why: "Te apoyo is the central phrase: moral backing shown through presence and words. It is sustained solidarity, not a one-off errand."
        },
        {
          speaker: "Sofía",
          target: "Pero no quiero que crean que me estás manteniendo.",
          translation: "But I don't want them to think you're supporting me financially.",
          pronunciation: "PEH-roh noh KYEH-roh keh KREH-ahn keh meh es-TAHS man-teh-NYEN-doh",
          literal: "But I not want that they-believe that me you-are maintaining.",
          why: "Mantener is the financial-support verb. This is the false-friend split: mi papá me apoya means he backs me emotionally or politically, not automatically that he pays my rent."
        },
        {
          speaker: "Julián",
          target: "Eso es distinto: yo te apoyo, no te mantengo.",
          translation: "That's different: I support you, I don't support you financially.",
          pronunciation: "EH-soh es dees-TEEN-toh: yo teh ah-POH-yoh, noh teh man-TEN-goh",
          literal: "That is different: I you support, not you maintain.",
          why: "The contrast is blunt on purpose. Apoyar and mantener may both map to English support, but Spanish keeps the moral and financial meanings apart."
        },
        {
          speaker: "Sofía",
          target: "También necesito apoyar el cartel contra la pared.",
          translation: "I also need to prop the poster against the wall.",
          pronunciation: "tam-BYEN neh-seh-SEE-toh ah-poh-YAR el kar-TEL KON-trah lah par-ED",
          literal: "Also I-need to support the poster against the wall.",
          why: "Apoyar can be literal: to rest or prop something on a surface. Context keeps it separate from backing a person."
        },
        {
          speaker: "Julián",
          target: "Listo. Apoyamos el cartel y después te apoyamos a ti.",
          translation: "Done. We'll prop up the poster and then we'll support you.",
          pronunciation: "LEES-toh. ah-poh-YAH-mos el kar-TEL ee des-PWES teh ah-poh-YAH-mos ah tee",
          literal: "Ready. We support the poster and later we support you to you.",
          why: "The repetition makes the double meaning visible: apoyar an object physically, apoyar a person socially. A ti adds emphasis because she is the one who matters."
        }
      ],
      vocabulary: [
        {
          term: "apoyar",
          explanation:
            "To support, back, or stand by someone, and also to rest or prop something physically.",
          literal: "to support / prop",
          useWhen:
            "You back a friend, candidate, cause, decision, or person under pressure, or place an object against something.",
          avoidWhen:
            "You mean paying someone's living costs. That is mantener or ayudar con los gastos, not automatically apoyar.",
          register: "neutral",
          region: "General Spanish.",
          related: ["respaldar", "acompañar", "defender", "mantener"],
          example: {
            target: "Claro que te apoyo.",
            translation: "Of course I support you."
          }
        },
        {
          term: "apoyar a",
          explanation:
            "The form for supporting a person, group, campaign, or cause. With specific people, personal a appears.",
          literal: "to support to",
          useWhen:
            "A friend, neighbor, candidate, team, or movement needs backing.",
          avoidWhen:
            "The support is purely financial and ongoing. Then the better verb may be mantener.",
          register: "neutral",
          region: "General Spanish.",
          related: ["respaldar a", "estar con", "acompañar a", "defender a"],
          example: {
            target: "Te apoyamos a ti.",
            translation: "We support you."
          }
        },
        {
          term: "mantener",
          explanation:
            "To financially support or maintain someone, especially by paying living costs.",
          literal: "to maintain",
          useWhen:
            "Rent, food, bills, tuition, or daily expenses are being paid by someone else.",
          avoidWhen:
            "You only mean emotional backing. Mi papá me mantiene and mi papá me apoya are not the same sentence.",
          register: "neutral",
          region: "General Spanish.",
          related: ["pagar gastos", "sostener económicamente", "ayudar con gastos", "financiar"],
          example: {
            target: "Yo te apoyo, no te mantengo.",
            translation: "I support you morally; I don't support you financially."
          }
        },
        {
          term: "ayudar con los gastos",
          explanation:
            "A clearer way to say someone helps with expenses without claiming they fully maintain another person.",
          literal: "to help with the expenses",
          useWhen:
            "Money support is partial, practical, or temporary rather than full financial dependence.",
          avoidWhen:
            "You want moral support. Then apoyar is the word, not a money phrase.",
          register: "neutral",
          region: "General Spanish.",
          related: ["mantener", "poner plata", "cubrir gastos", "colaborar con"],
          example: {
            target: "Mi hermano ayuda con los gastos.",
            translation: "My brother helps with the expenses."
          }
        },
        {
          term: "respaldar",
          explanation:
            "To back someone or something, often with a slightly more formal or public tone than apoyar.",
          literal: "to back with a back",
          useWhen:
            "A proposal, complaint, candidate, or public position needs visible backing.",
          avoidWhen:
            "The tone is intimate and emotional. Te apoyo may sound warmer than te respaldo.",
          register: "neutral to formal",
          region: "General Spanish.",
          related: ["apoyar", "defender", "avalar", "estar detrás de"],
          example: {
            target: "La comunidad respalda la denuncia.",
            translation: "The community backs the complaint."
          }
        },
        {
          term: "apoyar contra",
          explanation:
            "To rest or prop something against a surface, like a poster against a wall.",
          literal: "to support against",
          useWhen:
            "A ladder, sign, bicycle, board, or poster leans on a wall, table, chair, or door.",
          avoidWhen:
            "A person needs emotional support. The literal surface meaning can create accidental comedy.",
          register: "neutral",
          region: "General Spanish.",
          related: ["recostar", "poner contra", "arrimar", "sostener"],
          example: {
            target: "Apoya el cartel contra la pared.",
            translation: "Prop the poster against the wall."
          }
        },
        {
          term: "estar con alguien",
          explanation:
            "To be with someone in the sense of standing by them. It is simpler and warmer than a formal declaration.",
          literal: "to be with someone",
          useWhen:
            "A friend is anxious, criticized, grieving, or about to speak publicly.",
          avoidWhen:
            "You need to state official endorsement. Apoyar or respaldar may be clearer.",
          register: "warm informal",
          region: "General Spanish.",
          related: ["apoyar", "acompañar", "no dejar solo", "hacer barra"],
          example: {
            target: "Estoy contigo en la junta.",
            translation: "I'm with you at the meeting."
          }
        }
      ],
      note:
        "Apoyar is a false friend because English support is too broad. In Spanish, apoyar usually means moral, social, or political backing. Paying rent is mantener or ayudar con los gastos. Holding an object up may be apoyar in the literal sense, but context has to make the wall, table, or surface clear.",
      culture: [
        {
          label: "Support is not always money",
          body:
            "If someone says mi papá me apoya in Colombian Spanish, the first reading is emotional, moral, or practical backing. It does not automatically mean he pays the rent. Money needs more explicit language."
        },
        {
          label: "Public backing matters",
          body:
            "Apoyar often becomes important when a private problem enters a public room: a meeting, a complaint, a vote, a school decision. Standing next to someone can be part of the meaning."
        },
        {
          label: "Literal apoyar is real",
          body:
            "A ladder, bicycle, sign, or poster can apoyarse or be apoyado against a wall. This is not a different verb; it is the physical support meaning that English also has."
        },
        {
          label: "Pasto without a costume",
          body:
            "The lesson places the scene in Pasto to widen the course, but keeps the Spanish general. Real regional representation does not require a risky localism in every sentence."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying mi papá me apoya when you mean he pays your rent",
          whyItFails:
            "Apoya first sounds like moral or practical backing. If rent and bills are the point, the listener needs a money verb or expense phrase.",
          sayInstead: "Mi papá me ayuda con los gastos."
        },
        {
          mistake: "Using mantener for moral support",
          whyItFails:
            "Mantener points to financial maintenance or keeping something in a state. It does not carry the warmth of standing by a friend.",
          sayInstead: "Mi amiga me apoya."
        },
        {
          mistake: "Forgetting personal a with a supported person",
          whyItFails:
            "With a specific person or group, Spanish marks the human object: apoyar a Sofía, apoyar a la candidata.",
          sayInstead: "Voy a apoyar a Sofía."
        },
        {
          mistake: "Missing the literal surface meaning",
          whyItFails:
            "Apoyar can also mean to prop or rest something against a surface. If a cartel meets a wall, the verb is physical, not emotional.",
          sayInstead: "Apoya el cartel contra la pared."
        }
      ],
      variations: [
        {
          form: "Claro que te apoyo.",
          register: "warm informal",
          region: "General Spanish",
          whenToUse: "A friend asks if you will stand by them."
        },
        {
          form: "Voy a apoyar a Sofía en la junta.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You will back a specific person publicly."
        },
        {
          form: "Mi papá me ayuda con los gastos.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You mean financial help, not moral support."
        },
        {
          form: "La comunidad respalda la denuncia.",
          register: "formal civic",
          region: "General Spanish",
          whenToUse: "A group publicly backs a complaint or proposal."
        },
        {
          form: "Apoya el cartel contra la pared.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You literally prop an object against a surface."
        }
      ],
      prompt: "Sofía asks “¿Tú sí me apoyas?” What kind of support is she asking for?",
      choices: [
        "Moral and public backing while she speaks at the meeting.",
        "A promise that Julián will pay her rent every month.",
        "A request to lean a chair against the nearest wall."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence makes financial support clear?",
          choices: [
            "Mi papá me apoya en todo.",
            "Mi papá me ayuda con los gastos.",
            "Mi papá apoya el cartel."
          ],
          answer: 1,
          tests: "financial support as ayudar con los gastos"
        },
        {
          prompt: "Which line supports a specific person correctly?",
          choices: [
            "Voy a apoyar a Sofía en la junta.",
            "Voy a apoyar con Sofía en la junta.",
            "Voy a apoyar la Sofía en la junta."
          ],
          answer: 0,
          tests: "personal a with apoyar a a person"
        },
        {
          prompt: "Which phrase is literal physical support?",
          choices: [
            "Apoya el cartel contra la pared.",
            "Apoya a Sofía en la junta.",
            "Apoya la denuncia del barrio."
          ],
          answer: 0,
          tests: "apoyar as propping against a surface"
        },
        {
          prompt: "Which verb sounds more formal for public backing?",
          choices: [
            "Recostar la denuncia del barrio.",
            "Mantener la denuncia del barrio.",
            "Respaldar la denuncia del barrio."
          ],
          answer: 2,
          tests: "respaldar as formal public backing"
        }
      ]
    },
    en: {
      title: "Apoyar a una amiga en Sydney",
      situation:
        "Usted está en Sydney con una amiga que va a hablar en una reunión comunitaria. En inglés support parece fácil, pero debe distinguir moral support, financial support, back y prop up para no prometer plata sin querer.",
      setting: {
        who: "Sofía está nerviosa antes de hablar en una reunión comunitaria y Julian es un amigo cercano que conoce la historia.",
        what: "Aclaran apoyo moral, respaldo público, gastos y el sentido literal de apoyar algo contra una pared.",
        when: "Al final de la tarde, antes de una reunión donde Sofía hablará frente a vecinos.",
        where: "Sydney, en un centro comunitario donde el inglés es necesario para intervenir con claridad.",
        why: "Porque support en inglés junta sentidos que el español separa. En español apoyar no significa automáticamente mantener económicamente."
      },
      address: {
        form: "mixed",
        who: "Sofía y Julian hablan como amigos; el inglés mantiene you aunque el tema sea serio.",
        why: "La cercanía se oye en of course, I'm with you y frases de ánimo. El respeto sale del tono, no del pronombre.",
        ifYouSwitch:
          "Agregar formalidad con ma'am o sir dañaría la amistad. Para sonar serio, el inglés usa frases completas y promesas claras."
      },
      dialogue: [
        {
          speaker: "Sofía",
          target: "I don't want to speak alone at the meeting. Will you support me?",
          translation: "No quiero hablar sola en la reunión. ¿Tú sí me apoyas?",
          pronunciation: "ai dont uant tu spik a-LON at da MI-ting. wil yu su-PORT mi",
          literal: "No quiero hablar sola en la reunión. ¿Me apoyará usted?",
          why: "Support me aquí es apoyo moral y público. La reunión da el contexto; no está pidiendo que Julian pague sus cuentas."
        },
        {
          speaker: "Julian",
          target: "Of course I'll support you. If we need to speak, I'll stand with you.",
          translation: "Claro que te apoyo. Si toca hablar, hablo contigo.",
          pronunciation: "ov kors ail su-PORT yu. if ui nid tu spik, ail stand uid yu",
          literal: "Por supuesto la apoyaré. Si necesitamos hablar, estaré de pie con usted.",
          why: "Stand with you vuelve físico y social el apoyo: estar al lado de alguien cuando hay presión. Es más fuerte que una frase amable desde lejos."
        },
        {
          speaker: "Sofía",
          target: "But I don't want them to think you're supporting me financially.",
          translation: "Pero no quiero que crean que me estás manteniendo.",
          pronunciation: "bat ai dont uant dem tu zink yor su-POR-ting mi fai-NAN-sha-li",
          literal: "Pero no quiero que piensen que usted me apoya financieramente.",
          why: "Financially cambia todo. En inglés support puede ser moral o económico, así que el adverbio aclara la lectura que en español suele pedir mantener o ayudar con los gastos."
        },
        {
          speaker: "Julian",
          target: "That's different: I back you, but I don't pay your bills.",
          translation: "Eso es distinto: te respaldo, pero no pago tus cuentas.",
          pronunciation: "dats DIF-rent: ai bak yu, bat ai dont pei yor bilz",
          literal: "Eso es diferente: la respaldo, pero no pago sus cuentas.",
          why: "“Back you” es una manera clara de decir apoyar o respaldar moralmente. “Pay your bills” nombra la plata sin esconderse detrás de support."
        },
        {
          speaker: "Sofía",
          target: "I also need to prop the sign up against the wall.",
          translation: "También necesito apoyar el cartel contra la pared.",
          pronunciation: "ai OL-so nid tu prop da sain op a-GENST da wol",
          literal: "También necesito apuntalar el letrero arriba contra la pared.",
          why: "“Prop up” es el sentido físico de apoyar. El inglés lo separa del apoyo a una persona, por eso la pared importa."
        },
        {
          speaker: "Julian",
          target: "Done. We'll prop up the sign, and then we'll back you up.",
          translation: "Listo. Apoyamos el cartel y después te apoyamos a ti.",
          pronunciation: "don. uil prop op da sain, and den uil bak yu op",
          literal: "Hecho. Apuntalaremos el letrero y después la respaldaremos arriba.",
          why: "“Back you up” es apoyo en acción: confirmar su versión, hablar si hace falta y estar al lado. No es pagar arriendo ni sostener un cartel."
        }
      ],
      vocabulary: [
        {
          term: "support",
          explanation:
            "Verbo amplio: apoyar moral o políticamente, sostener económicamente, o soportar físicamente según el contexto.",
          literal: "apoyar / sostener",
          useWhen:
            "El contexto deja claro si habla de una persona, causa, dinero, estructura u objeto.",
          avoidWhen:
            "Puede sonar ambiguo. Añada morally, financially, politically or physically if the meaning matters.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["back", "stand with", "pay for", "prop up"],
          example: {
            target: "Will you support me?",
            translation: "¿Tú sí me apoyas?"
          }
        },
        {
          term: "moral support",
          explanation:
            "Apoyo emocional o moral: estar presente, animar y no dejar sola a la persona.",
          literal: "apoyo moral",
          useWhen:
            "Alguien enfrenta una reunión, duelo, examen, denuncia o conversación difícil.",
          avoidWhen:
            "La ayuda es plata. Para eso diga financial support, pay the bills or help with expenses.",
          register: "neutro cálido",
          region: "Inglés universal.",
          related: ["encouragement", "stand with", "be there", "back up"],
          example: {
            target: "I need moral support.",
            translation: "Necesito apoyo moral."
          }
        },
        {
          term: "financial support",
          explanation:
            "Apoyo económico. El adjetivo financial evita la ambigüedad de support.",
          literal: "apoyo financiero",
          useWhen:
            "Alguien paga arriendo, cuentas, comida, estudios o gastos constantes.",
          avoidWhen:
            "Sólo habla de respaldo emocional. Financial support agrega dinero aunque usted no lo quería.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["pay bills", "help with expenses", "provide for", "fund"],
          example: {
            target: "He supports me financially.",
            translation: "Él me mantiene económicamente."
          }
        },
        {
          term: "back someone",
          explanation:
            "Respaldar o apoyar a alguien, especialmente en una decisión, conflicto o postura pública.",
          literal: "dar espalda a alguien",
          useWhen:
            "Quiere decir que está del lado de una persona o propuesta.",
          avoidWhen:
            "El apoyo es cuidar físicamente a un niño o pagar gastos. Back no cubre todo eso bien.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["support", "stand with", "endorse", "back up"],
          example: {
            target: "I back you.",
            translation: "Te respaldo."
          }
        },
        {
          term: "stand with",
          explanation:
            "Estar con alguien, especialmente cuando hay presión pública o emocional.",
          literal: "estar de pie con",
          useWhen:
            "La presencia misma muestra solidaridad: una reunión, protesta, denuncia o duelo.",
          avoidWhen:
            "Sólo quiere decir estar físicamente al lado sin apoyo moral. Then stand next to is more literal.",
          register: "neutro cálido",
          region: "Inglés universal.",
          related: ["support", "stand by", "be there for", "back"],
          example: {
            target: "I'll stand with you.",
            translation: "Estoy contigo."
          }
        },
        {
          term: "prop up",
          explanation:
            "Apoyar físicamente un objeto para que quede sostenido contra algo.",
          literal: "apuntalar arriba",
          useWhen:
            "Un letrero, cartel, tabla, bicicleta o escalera necesita sostenerse contra una pared.",
          avoidWhen:
            "Habla de apoyar a una persona moralmente. Prop up a person puede sonar como sostenerla físicamente o salvarla artificialmente.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["lean against", "support physically", "hold up", "rest against"],
          example: {
            target: "Prop the sign up against the wall.",
            translation: "Apoya el cartel contra la pared."
          }
        },
        {
          term: "back someone up",
          explanation:
            "Apoyar a alguien confirmando, acompañando o interviniendo si hace falta.",
          literal: "respaldar a alguien arriba",
          useWhen:
            "La persona contará algo, discutirá un punto o necesitará que usted confirme su versión.",
          avoidWhen:
            "Sólo promete simpatía silenciosa. Back someone up usually means action if needed.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["support", "confirm", "stand with", "defend"],
          example: {
            target: "We'll back you up.",
            translation: "Te vamos a apoyar."
          }
        }
      ],
      note:
        "Support parece resolver apoyar, pero precisamente por eso es peligroso. Puede ser moral, político, financiero o físico. Si la plata importa, diga financial support, pay the bills o help with expenses. Si la persona necesita respaldo público, back, stand with y back up suelen ser más claros. Si el objeto toca la pared, prop up or lean against.",
      culture: [
        {
          label: "Support necesita contexto",
          body:
            "En inglés support es más ancho que apoyar. La palabra sola puede dejar dudas sobre si habla de ánimo, política, dinero o estructura física. Los buenos hablantes agregan una palabra cuando la ambigüedad importa."
        },
        {
          label: "Back suena a respaldo",
          body:
            "I back you es directo y fuerte. No promete pagar cuentas; promete estar de su lado. En reuniones o conflictos, puede sonar más claro que a vague I support you."
        },
        {
          label: "Financial support sí es plata",
          body:
            "Cuando aparece financially, ya no hay misterio. La frase entra en arriendo, cuentas, comida, estudios o mantenimiento. Es el equivalente de mantener or ayudar con los gastos, no de te apoyo moralmente."
        },
        {
          label: "Prop up vuelve físico el apoyo",
          body:
            "“Prop up” pertenece a letreros, escaleras, tablas y objetos. Si lo usa con una persona, el oyente puede imaginar apoyo físico o un rescate artificial, no amistad."
        }
      ],
      pitfalls: [
        {
          mistake: "“My dad supports me.”",
          whyItFails:
            "La frase puede significar que lo apoya moralmente o que lo mantiene económicamente. Si habla de arriendo, necesita aclararlo.",
          sayInstead: "My dad helps with my expenses."
        },
        {
          mistake: "“I support the sign against the wall.”",
          whyItFails:
            "Se entiende, pero para un objeto contra una pared el verbo natural es prop up o lean against.",
          sayInstead: "I prop the sign up against the wall."
        },
        {
          mistake: "“I stay with you” para apoyo público",
          whyItFails:
            "Stay with you puede sonar a quedarse físicamente en el mismo lugar. Para solidaridad, stand with you or back you es más claro.",
          sayInstead: "I'll stand with you."
        },
        {
          mistake: "“I back up you.”",
          whyItFails:
            "Back up es separable, pero con pronombre el pronombre va en medio: back you up, no back up you.",
          sayInstead: "I'll back you up."
        }
      ],
      variations: [
        {
          form: "Will you support me?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "El contexto aclara que pide respaldo moral."
        },
        {
          form: "I need moral support.",
          register: "neutro cálido",
          region: "Inglés universal",
          whenToUse: "Quiere apoyo emocional, no plata."
        },
        {
          form: "My dad helps with my expenses.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Quiere hablar de ayuda económica sin ambigüedad."
        },
        {
          form: "I'll stand with you.",
          register: "neutro cálido",
          region: "Inglés universal",
          whenToUse: "Promete presencia y solidaridad en un momento difícil."
        },
        {
          form: "Prop the sign up against the wall.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "El apoyo es físico y el objeto toca una superficie."
        }
      ],
      prompt: "Sofía says “will you support me?” ¿Por qué el contexto importa?",
      choices: [
        "Porque support puede ser moral, financiero, político o físico.",
        "Porque support sólo significa pagar arriendo y comida.",
        "Porque support nunca se usa con personas en inglés."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase aclara ayuda económica?",
          choices: [
            "My dad backs me in meetings.",
            "My dad helps with my expenses.",
            "My dad stands with me outside."
          ],
          answer: 1,
          tests: "financial support made explicit"
        },
        {
          prompt: "¿Cuál frase sirve para respaldo público?",
          choices: [
            "I'll stand with you.",
            "I'll prop you on the wall.",
            "I'll expense you monthly."
          ],
          answer: 0,
          tests: "stand with for solidarity"
        },
        {
          prompt: "¿Cuál frase apoya un objeto físicamente?",
          choices: [
            "Back the sign emotionally.",
            "Fund the sign every month.",
            "Prop the sign up against the wall."
          ],
          answer: 2,
          tests: "prop up for physical support"
        },
        {
          prompt: "¿Cuál orden de palabras corrige “back up you”?",
          choices: [
            "I'll back you up.",
            "I'll back up you.",
            "I'll you back up."
          ],
          answer: 0,
          tests: "pronoun placement in back you up"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/36-developing-looking-after-people.js");
