/*
 * Lesson block: foundation / everyday obligation and daily doings.
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
    id: "running-into-a-neighbour-before-the-long-weekend",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighbourhood",
    register: "familiar",
    pathways: ["foundation"],
    verb: "pasar",
    review: "pending",
    es: {
      title: "Saludar a un vecino antes del puente",
      situation:
        "Es viernes por la tarde y viene un puente. Alex se cruza en la escalera con Andrés, un vecino paisa de toda la vida que va de salida. Tiene treinta segundos para saludar bien, entender que le preguntan por sus planes y aceptar — o no — una invitación a sancocho, sin sonar a extranjero recién bajado del avión.",
      setting: {
        who: "Andrés has lived on the same floor for twenty years, greets everyone, and treats the stairwell as a social club. Alex is the foreigner from down the hall who is still learning that a thirty-second chat is not optional here.",
        what: "A quick stairwell encounter as both head out, the Friday before a long-weekend Monday holiday.",
        when: "Friday, just before six, with the whole building already talking about the puente.",
        where: "Medellín, a working apartment block in Envigado where neighbours actually know each other.",
        why: "Because in Medellín these tiny doorway exchanges are the relationship. Getting the greeting and the invitation right is the difference between being a neighbour and being the foreigner in 402."
      },
      address: {
        form: "vos",
        who: "Andrés uses vos with Alex for the pronoun but flips to usted-form commands like “pásese” and “traiga”.",
        why: "Paisa Spanish runs on vos between neighbours and friends, yet its commands very often borrow the usted ending. That vos-plus-usted-imperative mix is completely normal in Antioquia and baffles learners taught a tidy two-form system.",
        ifYouSwitch:
          "Using tú would not offend, but among paisa neighbours it can sound a little bookish or foreign rather than warmer. Staying on usted the whole time is safe but keeps a touch more distance than an old neighbour is offering you."
      },
      dialogue: [
        {
          speaker: "Andrés",
          target: "¡Ey! ¿Qué pasó, pues? ¿Bien o qué?",
          translation: "Hey! What's up? All good?",
          pronunciation: "ey! ke pa-SO, pwes? BYEN o KE",
          literal: "Hey! What happened, then? Well or what?",
          why: "In Medellín “¿qué pasó?” is a greeting, not a question about a problem. Meeting it with an account of your week misreads the move — it simply means “hey”, and it wants the same quick warmth thrown back."
        },
        {
          speaker: "Alex",
          target: "¡Quiubo, Andrés! Todo bien, ¿y vos?",
          translation: "Hey, Andrés! All good, and you?",
          pronunciation: "KYOO-bo, an-DRES! TO-do byen, ee bos",
          literal: "What-was, Andrés! All well, and you(vos)?",
          why: "“Vos” is the everyday second person in Medellín. “Tú” here would not be wrong, but “vos” signals Alex is settling in rather than reciting a textbook, and it matches how Andrés will speak to him."
        },
        {
          speaker: "Andrés",
          target: "Bien, bien. ¿Y vos qué? ¿Dónde vas a pasar el puente?",
          translation: "Good, good. And you? Where are you spending the long weekend?",
          pronunciation: "byen, byen. ee bos KE? DON-de bas a pa-SAR el PWEN-te",
          literal: "Well, well. And you what? Where go-you to pass the bridge?",
          why: "Here “pasar” means to spend time, and “el puente” is the Monday holiday that bridges the weekend into three days. Asking about puente plans is standard Friday small talk, not nosiness."
        },
        {
          speaker: "Alex",
          target: "Nada, me quedo por aquí. La voy a pasar suave, descansando.",
          translation: "Nothing much, I'm staying around here. I'll take it easy, just resting.",
          pronunciation: "NA-da, me KE-do por a-KEE. la boy a pa-SAR SWA-be, des-kan-SAN-do",
          literal: "Nothing, myself I-stay around here. It(fem.) I-go to pass smooth, resting.",
          why: "“Pasarla suave” carries a fixed feminine “la” with no noun behind it — “to have an easy time of it”. Drop the “la” and “pasar suave” stops being idiomatic and lands as half a sentence."
        },
        {
          speaker: "Andrés",
          target: "¡De una! Pues pásese el domingo por la casa, hacemos sancocho. No pasa nada, traiga al perro.",
          translation: "For sure! Well, swing by the house on Sunday, we'll make sancocho. It's no trouble, bring the dog.",
          pronunciation: "de OO-na! pwes PA-se-se el do-MIN-go por la KA-sa, a-SE-mos san-KO-cho. no PA-sa NA-da, TRAI-ga al PE-rro",
          literal: "Of one! Then pass-yourself the Sunday by the house, we-make sancocho. Not passes nothing, bring the dog.",
          why: "Two more senses of pasar in one breath: “pasar por la casa” is to drop by, and “no pasa nada” is “it's no bother”. Notice the paisa jump to usted commands (“pásese”, “traiga”) even while he says vos elsewhere."
        },
        {
          speaker: "Alex",
          target: "¡Listo, pues! Ahí me paso el domingo. Gracias, Andrés.",
          translation: "Sounds good! I'll drop by on Sunday then. Thanks, Andrés.",
          pronunciation: "LEES-to, pwes! ai me PA-so el do-MIN-go. GRA-syas, an-DRES",
          literal: "Ready, then! There myself I-pass the Sunday. Thanks, Andrés.",
          why: "Reflexive “me paso” is the neighbourly “I'll pop over”. Without the reflexive, “paso el domingo” drifts toward “I spend Sunday”, a subtly different promise about a whole day rather than a visit."
        }
      ],
      vocabulary: [
        {
          term: "¿qué pasó?",
          explanation:
            "In Medellín, a standard hello — roughly “what's up?” — rather than a question expecting news of an event.",
          literal: "what happened?",
          useWhen:
            "Greeting a friend or neighbour casually, especially anywhere in Antioquia, often stacked with “pues” and “¿bien o qué?”.",
          avoidWhen:
            "Someone has genuinely just had an accident or bad news; there it snaps back to its literal meaning and sounds strange as a greeting.",
          register: "friendly informal",
          region: "Iconically Medellín and Antioquia (paisa); understood as a greeting nationwide.",
          related: ["quiubo", "¿bien o qué?", "¿qué más?", "¿qué hubo?"],
          example: {
            target: "¿Qué pasó, pues? ¿Bien o qué?",
            translation: "What's up? All good?"
          }
        },
        {
          term: "pasar el puente",
          explanation:
            "To spend the long holiday weekend somewhere. “El puente” is the Monday holiday that bridges the weekend into three days.",
          literal: "to pass the bridge",
          useWhen:
            "Talking about plans for a three-day holiday weekend — where you'll go, who you'll see, whether you'll travel.",
          avoidWhen:
            "An ordinary weekend with no Monday holiday attached; that is just “el fin de semana”, with no puente involved.",
          register: "neutral",
          region: "General Colombian; Colombia has an unusual number of Monday holidays, so puentes are frequent.",
          related: ["el puente", "el festivo", "fin de semana largo", "hacer puente"],
          example: {
            target: "¿Dónde vas a pasar el puente?",
            translation: "Where are you spending the long weekend?"
          }
        },
        {
          term: "pasarla suave",
          explanation:
            "To take it easy, to have a relaxed time of it. The “la” is a fixed feminine object with no noun behind it.",
          literal: "to pass it(fem.) smooth",
          useWhen:
            "Describing a low-key plan — resting, no rush — or wishing someone a chilled weekend: “pásala suave”.",
          avoidWhen:
            "You actually mean you'll be busy or hard at work; then the whole image of “suave” contradicts you.",
          register: "friendly informal",
          region: "General Colombian; the “suave” for “easy/chill” is widespread across the country.",
          related: ["pasarla bueno", "pasarla rico", "pasarla chévere", "descansar"],
          example: {
            target: "La voy a pasar suave, descansando.",
            translation: "I'll take it easy, just resting."
          }
        },
        {
          term: "pásese por la casa",
          explanation:
            "A warm, open invitation to drop by someone's home. Reflexive “pasarse” is the everyday “to pop over”.",
          literal: "pass-yourself by the house",
          useWhen:
            "Inviting a friend or neighbour over informally, usually without pinning down an exact hour.",
          avoidWhen:
            "A formal or scheduled invitation; there you would give a time and reach for “venir” or “invitar” instead.",
          register: "friendly informal",
          region: "General Colombian; the usted-form command “pásese” alongside vos is especially paisa.",
          related: ["pásese", "caiga por la casa", "dese una vuelta", "venga"],
          example: {
            target: "Pásese el domingo por la casa.",
            translation: "Swing by the house on Sunday."
          }
        },
        {
          term: "no pasa nada",
          explanation:
            "“It's no problem / don't worry about it.” A set phrase reassuring someone that nothing bad follows.",
          literal: "nothing passes/happens",
          useWhen:
            "Waving off a worry, an apology, or someone's hesitation about imposing on you.",
          avoidWhen:
            "Something genuinely serious has happened; used there it lands as dismissive rather than kind.",
          register: "friendly informal",
          region: "General Colombian and widely pan-Hispanic.",
          related: ["tranquilo", "no hay lío", "fresco", "no hay problema"],
          example: {
            target: "No pasa nada, traiga al perro.",
            translation: "It's no trouble, bring the dog."
          }
        },
        {
          term: "pues",
          explanation:
            "The paisa discourse particle — it softens, fills and warms almost any sentence, and is nearly untranslatable.",
          literal: "well / then",
          useWhen:
            "Sprinkled through casual paisa speech: “¿qué pasó, pues?”, “listo, pues”, “pues sí”.",
          avoidWhen:
            "Formal writing or moments when you want to sound crisp and professional; there it just adds noise.",
          register: "friendly informal",
          region: "Iconically paisa (Medellín and Antioquia), though heard across the country.",
          related: ["pues sí", "listo pues", "entonces", "¡pues!"],
          example: {
            target: "¡Listo, pues!",
            translation: "Sounds good, then!"
          }
        },
        {
          term: "sancocho",
          explanation:
            "A hearty soup-stew of meat with plantain, yuca and potato — the classic dish of a weekend family gathering.",
          literal: "sancocho (stew)",
          useWhen:
            "Talking about a weekend get-together or a Sunday lunch; it signals an occasion, not a quick bite.",
          avoidWhen:
            "A fast weekday meal; sancocho takes hours and implies people gathering, so it fits a plan, not a snack.",
          register: "neutral",
          region: "General Colombian, with regional versions — de gallina, de pescado, the paisa “trifásico”.",
          related: ["sancocho de gallina", "el almuerzo", "el hervido", "la olla"],
          example: {
            target: "Hacemos sancocho.",
            translation: "We'll make sancocho."
          }
        }
      ],
      note:
        "The takeaway is that pasar bends across half this conversation: to happen (“¿qué pasó?” as hello), to spend (“pasar el puente”), to have a time of it (“pasarla suave”), to drop by (“pásese”, “me paso”) and to matter (“no pasa nada”). One verb, five jobs. The meaning lives in the little words around it, so listen for those, not for pasar alone.",
      culture: [
        {
          label: "“¿Qué pasó?” is hello, not alarm",
          body:
            "To an outsider, being greeted with “what happened?” sounds like someone assumes you've had an accident. In Medellín it is simply “hey”. Paisas stack greetings — “¿quiubo, qué más, bien o qué?” — and none of them wants a literal answer; they want the same quick volley thrown back. Replying with a real account of your week is the surest giveaway of a newcomer. The right response is another greeting, warm and fast."
        },
        {
          label: "The puente rules the calendar",
          body:
            "Colombia has around eighteen public holidays, many shifted to Monday under the Ley Emiliani to manufacture “puentes” — three-day weekends. They shape the whole country: intercity roads clog, small towns fill up, cabin prices jump, and “¿qué vas a hacer en el puente?” becomes the standard Friday question. Knowing which Mondays are festivos is genuinely practical, because banks, offices and many shops simply close, and asking about someone's puente plans is ordinary small talk, not prying."
        },
        {
          label: "Vos, tú and usted in one paisa breath",
          body:
            "Antioquia is famous for mixing all three second-person forms, sometimes inside a single sentence. A neighbour may address you as vos for the pronoun — “¿y vos?” — yet hand you commands in the usted form: “pásese”, “lleve”, “traiga”. This is not indecision or error; it is the paisa system working normally. Learners taught a neat tú/usted split find it disorienting, but copying it — vos among friends, usted-shaped imperatives — is exactly how you stop sounding studied and start sounding local."
        },
        {
          label: "Dropping by is real, not polite noise",
          body:
            "“Pásese por la casa” is usually a genuine invitation, not the hollow “we should catch up” of some cultures. In neighbourly Colombia, especially outside the very biggest cities, actually turning up is welcomed and half-expected; food will appear, and declining too often reads as cold. If someone invites you for Sunday sancocho, they generally mean it — bring something small, arrive hungry, and do not over-apologise for the intrusion, because there isn't one."
        }
      ],
      pitfalls: [
        {
          mistake: "Answering “¿Qué pasó?” with a detailed account of your week",
          whyItFails:
            "In Medellín it is a greeting, not a real question. A long, literal answer misreads the social move and instantly marks you as newly arrived.",
          sayInstead: "¡Quiubo! Todo bien, ¿y vos?"
        },
        {
          mistake: "Saying “pasar suave” without the “la”",
          whyItFails:
            "“Pasarla suave/rico/bueno” needs its fixed feminine “la”; dropping it leaves the idiom ungrammatical and the meaning half-finished.",
          sayInstead: "La voy a pasar suave."
        },
        {
          mistake: "Reaching for “tú” with a paisa neighbour to sound friendly",
          whyItFails:
            "Among Medellín neighbours the warm default is vos; tú can come across as bookish or foreign rather than closer, which is the opposite of what you intended.",
          sayInstead: "¿Y vos qué vas a hacer?"
        },
        {
          mistake: "Hearing “no pasa nada” as “nothing is happening”",
          whyItFails:
            "It is a set phrase meaning “no worries / it's no trouble”, not a literal report on events. Taking it literally makes the reply sound oddly flat.",
          sayInstead: "Read it as “don't worry about it — it's fine.”"
        }
      ],
      variations: [
        {
          form: "¿Qué pasó, pues?",
          register: "friendly informal",
          region: "Medellín / paisa",
          whenToUse: "The iconic paisa greeting between friends; it expects the same back, not any news."
        },
        {
          form: "¿Qué más?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "A nationwide casual hello, interchangeable with “¿qué pasó?” across most of the country."
        },
        {
          form: "¿Quiubo?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Very casual “what's up”, worn down from “¿qué hubo?”; pairs naturally with “¿qué más?”."
        },
        {
          form: "¿Cómo vas?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "A gentler check-in you can use with people you don't yet joke around with."
        },
        {
          form: "¿Bien o qué?",
          register: "friendly informal",
          region: "Medellín / paisa",
          whenToUse: "Tacked onto a greeting to nudge for the upbeat “all good” reply; very paisa."
        }
      ],
      prompt: "In Medellín, Andrés greets Alex with “¿Qué pasó, pues?” What is he actually doing?",
      choices: [
        "Asking Alex to explain, in some detail, what event or accident has just taken place nearby.",
        "Simply saying hello — in paisa Spanish this is a casual greeting, not a question about a problem.",
        "Checking whether something has gone wrong with the building, the lift, or the water supply again."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Andrés asks “¿Dónde vas a pasar el puente?” What does he want to know?",
          choices: [
            "Where Alex plans to spend the upcoming three-day holiday weekend and what he'll do.",
            "Which bridge Alex normally crosses to get over to the other side of the city.",
            "Whether Alex intends to pass by the neighbour's own apartment later that same evening."
          ],
          answer: 0,
          tests: "pasar el puente as spending the holiday weekend"
        },
        {
          prompt: "Why does Alex say “la voy a pasar suave” instead of “voy a pasar suave”?",
          choices: [
            "Because the “la” refers back to the long weekend he was asked about a moment earlier.",
            "Because the “la” politely softens the plan, the way “please” would soften it in English.",
            "Because “pasarla” is a fixed idiom whose “la” has no noun and simply cannot be dropped."
          ],
          answer: 2,
          tests: "the fixed “la” in pasarla suave"
        },
        {
          prompt: "Andrés mixes “¿y vos?” with the command “pásese”. What does that show?",
          choices: [
            "That he cannot decide whether to treat Alex as a friend or as a distant stranger.",
            "That paisa speech normally pairs vos with usted-form commands such as “pásese”.",
            "That he switched to usted because Alex had just said something that offended him."
          ],
          answer: 1,
          tests: "paisa mixing of vos with usted imperatives"
        },
        {
          prompt: "When Andrés says “no pasa nada, traiga al perro”, what does “no pasa nada” mean?",
          choices: [
            "That nothing much ever seems to happen in their otherwise very quiet building.",
            "That the dog will not cause anything bad to happen if it comes along on Sunday.",
            "That it is no trouble at all — a set phrase reassuring Alex that he needn't worry."
          ],
          answer: 2,
          tests: "no pasa nada as reassurance, not a literal statement"
        }
      ]
    },
    en: {
      title: "Saludar a un vecino antes del fin de semana largo",
      situation:
        "Es viernes por la tarde y viene un fin de semana largo. Alejandra se cruza en la escalera con Dave, un vecino canadiense conversador que va de salida. Tiene treinta segundos para saludar bien, entender que le preguntan por sus planes y aceptar — o no — una invitación a un asado, sin sonar tan formal ni tan literal como suena un hispanohablante recién llegado.",
      setting: {
        who: "Dave lleva veinte años en el mismo piso, saluda a todo el mundo y usa la escalera como club social. Alejandra es la recién llegada del fondo del pasillo, que apenas está aprendiendo que la charla de treinta segundos no es opcional.",
        what: "Un encuentro rápido en la escalera mientras los dos salen, el viernes antes de un lunes festivo.",
        when: "Viernes, casi las seis, con todo el edificio ya hablando del fin de semana largo.",
        where: "Toronto, un edificio de apartamentos donde los vecinos de verdad se conocen.",
        why: "Porque estos intercambios diminutos en la puerta son la relación. Saludar bien y responder bien a la invitación es la diferencia entre ser una vecina y ser “la del 402 que no habla”."
      },
      address: {
        form: "mixed",
        who: "Dave y Alejandra se tratan por el nombre de pila y usan el mismo “you” desde la primera línea.",
        why: "El inglés tiene una sola segunda persona, así que el registro lo carga todo lo demás: “hey” en vez de “good evening”, nombres de pila en vez de títulos, y frases cortas en vez de fórmulas completas. La cercanía está en el léxico, no en el pronombre.",
        ifYouSwitch:
          "Decirle “sir” a Dave no ofendería, pero sonaría a tienda o a oficina y pondría un mostrador entre los dos. Resérvelo para alguien que la atiende en calidad oficial, no para un vecino que la saluda en la escalera."
      },
      dialogue: [
        {
          speaker: "Dave",
          target: "Hey! What's up? You good?",
          translation: "¡Ey! ¿Qué más? ¿Bien?",
          pronunciation: "jei! UATS ap? yu GUD",
          literal: "¡Hey! ¿Qué arriba? ¿Tú bien?",
          why: "“What's up?” es un saludo, no una pregunta literal sobre qué está “arriba”. Contestarlo con un informe de tu semana es el error clásico del hispanohablante; la respuesta esperada es otro saludo corto."
        },
        {
          speaker: "Alejandra",
          target: "Hey, Dave! I'm good, and you?",
          translation: "¡Quiubo, Dave! Bien, ¿y vos?",
          pronunciation: "jei, deiv! aim GUD, and YU",
          literal: "¡Hey, Dave! Estoy bien, ¿y tú?",
          why: "En inglés se responde “I'm good”, no la fórmula completa “I am fine, thank you, and you?”, que suena a manual escolar. La versión corta es la natural entre vecinos que se cruzan."
        },
        {
          speaker: "Dave",
          target: "Good, good. So what are you up to? Any plans for the long weekend?",
          translation: "Bien, bien. ¿Y vos qué? ¿Planes para el puente?",
          pronunciation: "gud, gud. so UAT ar yu ap TU? E-ni plans for da long UI-kend",
          literal: "Bien, bien. ¿Así que qué estás tú a? ¿Algún plan para el largo fin de semana?",
          why: "“Long weekend” es el equivalente exacto del “puente”: tres días por un lunes festivo. No hay “bridge” para esto en inglés, y traducirlo literal como “bridge” no se entiende."
        },
        {
          speaker: "Alejandra",
          target: "Nothing much, I'm staying around here. I'll take it easy and rest.",
          translation: "Nada, me quedo por aquí. La voy a pasar suave y a descansar.",
          pronunciation: "NA-zing mach, aim STEI-ing a-RAUND jir. ail teik it I-zi and REST",
          literal: "Nada mucho, estoy quedándome alrededor aquí. Tomaré esto fácil y descansaré.",
          why: "“Take it easy” lleva un “it” obligatorio, igual que el español lleva “la” en “pasarla”. Decir “take easy” sin el “it” es el error espejo de “pasar suave” sin “la”."
        },
        {
          speaker: "Dave",
          target: "Nice! Well, come by on Sunday, we're doing a barbecue. It's no trouble — bring the dog.",
          translation: "¡Bacano! Pues pásese el domingo, hacemos un asado. No pasa nada, traiga al perro.",
          pronunciation: "nais! uel, kam BAI on SAN-dei, uir DU-ing a BAR-be-kyu. its no TRA-bol — bring da DOG",
          literal: "¡Lindo! Bueno, ven por el domingo, estamos haciendo una barbacoa. Es ningún problema — trae el perro.",
          why: "“Come by” es “pásese por la casa”: una invitación real a dejarse caer. “It's no trouble” es el “no pasa nada”. Las dos son fórmulas de calidez, no descripciones literales de esfuerzo."
        },
        {
          speaker: "Alejandra",
          target: "Sounds good! I'll drop by on Sunday then. Thanks, Dave.",
          translation: "¡Listo! Ahí me paso el domingo. Gracias, Dave.",
          pronunciation: "saunds GUD! ail drop BAI on SAN-dei den. zanks, deiv",
          literal: "Suena bien! Yo dejaré caer por el domingo entonces. Gracias, Dave.",
          why: "“Drop by” y “come by” son casi intercambiables para “pasar por”; “drop” aquí no significa dejar caer nada. Traducirlo pieza por pieza es la trampa típica del hispanohablante."
        }
      ],
      vocabulary: [
        {
          term: "what's up?",
          explanation:
            "Un saludo casual, el equivalente de “¿qué más?/¿qué pasó?” — no espera un informe literal de lo que está pasando.",
          literal: "¿qué hay arriba?",
          useWhen:
            "Al saludar a un amigo o vecino de manera informal; muchas veces encadenado, como en “hey, what's up, you good?”.",
          avoidWhen:
            "En un contexto formal, o al conocer a alguien en un trámite oficial; ahí un simple “hello/hi” resulta más seguro.",
          register: "friendly informal",
          region: "Inglés norteamericano general.",
          related: ["what's going on?", "how's it going?", "you good?", "how are you?"],
          example: {
            target: "Hey! What's up?",
            translation: "¡Ey! ¿Qué más?"
          }
        },
        {
          term: "the long weekend",
          explanation:
            "Un fin de semana de tres días creado por un lunes (o viernes) festivo — exactamente el “puente” colombiano.",
          literal: "el fin de semana largo",
          useWhen:
            "Al hablar de planes para un festivo que cae pegado al fin de semana — viajar, ver familia, una escapada.",
          avoidWhen:
            "Un fin de semana normal sin festivo; eso es solo “the weekend”, sin nada de largo de por medio.",
          register: "neutral",
          region: "Inglés general; en EE. UU. se asocia a feriados como Labor Day o Thanksgiving.",
          related: ["long weekend", "public holiday", "the holiday Monday", "a three-day weekend"],
          example: {
            target: "Any plans for the long weekend?",
            translation: "¿Planes para el puente?"
          }
        },
        {
          term: "take it easy",
          explanation:
            "Descansar, ir despacio, pasarla relajado. El “it” es obligatorio, igual que la “la” de “pasarla”.",
          literal: "tómalo fácil",
          useWhen:
            "Al describir un plan tranquilo, o como despedida amistosa deseándole calma a alguien.",
          avoidWhen:
            "Cuando en realidad vas a estar ocupado o productivo; la frase pinta justo la imagen contraria.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["relax", "chill out", "kick back", "rest up"],
          example: {
            target: "I'll take it easy and rest.",
            translation: "La voy a pasar suave y a descansar."
          }
        },
        {
          term: "come by / drop by",
          explanation:
            "Pasar por casa de alguien de manera informal, sin cita fija — el inglés de “pasar por la casa”.",
          literal: "venir cerca / dejarse caer",
          useWhen:
            "Al invitar a un amigo o vecino sin fijar una hora exacta de llegada.",
          avoidWhen:
            "Una invitación formal con hora; ahí se dice “come over at seven” o “join us for dinner”.",
          register: "friendly informal",
          region: "Inglés general; “come by”, “drop by” y “swing by” son intercambiables.",
          related: ["swing by", "stop by", "pop over", "come round"],
          example: {
            target: "Come by on Sunday.",
            translation: "Pásese el domingo."
          }
        },
        {
          term: "it's no trouble",
          explanation:
            "“No pasa nada / no es molestia.” Tranquiliza a alguien de que un favor o una visita no cuesta nada.",
          literal: "no es problema",
          useWhen:
            "Al quitarle importancia a un favor, a una duda, o al ver que alguien teme molestar.",
          avoidWhen:
            "Cuando algo de verdad grave salió mal; ahí suena a que lo estás minimizando.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["no worries", "no problem", "don't mention it", "it's all good"],
          example: {
            target: "It's no trouble — bring the dog.",
            translation: "No pasa nada, traiga al perro."
          }
        },
        {
          term: "so / well",
          explanation:
            "Muletillas que suavizan y enlazan las frases, muy parecidas al “pues” paisa.",
          literal: "entonces / pues",
          useWhen:
            "Al abrir una frase casual o cambiar de tema en una conversación relajada.",
          avoidWhen:
            "En escritura formal, donde recargan la frase y no aportan nada.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["so", "well", "anyway", "you know"],
          example: {
            target: "So what are you up to?",
            translation: "¿Y vos qué vas a hacer?"
          }
        },
        {
          term: "barbecue / potluck",
          explanation:
            "Una reunión informal alrededor de la comida — el equivalente social del sancocho del domingo.",
          literal: "asado / comida compartida",
          useWhen:
            "Al hablar de un encuentro relajado donde se asa carne o cada quien lleva un plato.",
          avoidWhen:
            "Una cena formal con menú fijo; eso es un “dinner party”, no un barbecue de patio.",
          register: "neutral",
          region: "Inglés norteamericano general; “BBQ” en verano, “potluck” cuando cada quien lleva algo.",
          related: ["BBQ", "cookout", "potluck", "get-together"],
          example: {
            target: "We're doing a barbecue.",
            translation: "Hacemos un asado."
          }
        }
      ],
      note:
        "El punto clave es que “what's up?” es un saludo, no una pregunta, y que “take it easy”, “come by” y “it's no trouble” son frases fijas donde la palabra literal — up, easy, drop, trouble — nunca viaja sola al español. Escucha el bloque entero, no la palabra suelta, y dejarás de traducir esto pieza por pieza en cosas que no terminan de significar nada.",
      culture: [
        {
          label: "“What's up?” es un saludo, no una pregunta",
          body:
            "Para un hispanohablante recién llegado, que lo reciban con “what's up?” puede sonar a una pregunta de verdad sobre qué está pasando. No lo es: es simplemente “hola”. Los norteamericanos encadenan “hey, how's it going, you good?” sin esperar respuesta literal a ninguna; quieren la misma devolución rápida. Contestar con el relato de tu semana te delata como recién llegado. Lo natural es “good, and you?” y seguir caminando."
        },
        {
          label: "El fin de semana largo organiza el calendario",
          body:
            "En Canadá y en Estados Unidos varios lunes festivos crean “long weekends” — Victoria Day, Labour Day, Thanksgiving. Como los puentes colombianos, mueven a la gente: las autopistas se llenan, las cabañas se reservan, las ciudades se vacían. “Any plans for the long weekend?” es charla estándar de viernes. Saber cuáles lunes son festivos es práctico, porque los bancos y las oficinas cierran, y preguntar por los planes de alguien es cortesía normal, no meterse en lo ajeno."
        },
        {
          label: "El inglés marca el registro con palabras, no con pronombres",
          body:
            "El español elige entre vos, tú y usted; el inglés tiene un solo “you”. Toda la formalidad la cargan otras piezas: “hi” frente a “good evening”, el nombre de pila frente a “sir/ma'am”, frases cortas frente a fórmulas completas. Un hispanohablante que busca el “usted” del inglés no lo encuentra, y a veces suena rígido por abusar de “sir”. La calidez o la distancia viven por completo en la elección de palabras, y eso cuesta oír y producir."
        },
        {
          label: "Dejarse caer también es real allá",
          body:
            "“Come by on Sunday” puede ser una invitación de verdad, aunque en algunos círculos anglófonos “we should hang out” se evapore en nada. Con los vecinos, un “come by” concreto y con día suele ir en serio: aparece comida, se agradece que lleves algo, y declinar demasiado se lee como frialdad. Si te invitan a un barbecue, ve, lleva algo pequeño y no te disculpes de más por “molestar”, porque no estás molestando."
        }
      ],
      pitfalls: [
        {
          mistake: "Answering “What's up?” with a long report on your week",
          whyItFails:
            "Es un saludo, no una pregunta literal. Una respuesta larga malinterpreta la fórmula y, sin querer, te marca como recién llegado.",
          sayInstead: "Hey! I'm good, and you?"
        },
        {
          mistake: "Saying “take easy” without the “it”",
          whyItFails:
            "El modismo lleva un “it” obligatorio — “take it easy” — igual que “pasarla” lleva su “la”. Sin él, la frase queda mal formada.",
          sayInstead: "I'll take it easy."
        },
        {
          mistake: "Calling the long weekend a “bridge”",
          whyItFails:
            "“Bridge” es solo la estructura física; para el festivo se dice “long weekend”, y “bridge” no se entiende de esa manera.",
          sayInstead: "Any plans for the long weekend?"
        },
        {
          mistake: "Using “actually” to mean “right now”",
          whyItFails:
            "“Actually” significa “en realidad”, no “ahora”; el falso amigo con “actualmente” cambia sin querer lo que querías decir.",
          sayInstead: "Right now I'm staying here this weekend."
        }
      ],
      variations: [
        {
          form: "What's up?",
          register: "friendly informal",
          region: "Inglés norteamericano general",
          whenToUse: "Un saludo casual entre amigos; espera lo mismo de vuelta, no un informe real."
        },
        {
          form: "How's it going?",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Saludo casual intercambiable, un punto más suave que “what's up?”."
        },
        {
          form: "How are you?",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Seguro en casi cualquier registro; con desconocidos es un saludo ligero de verdad."
        },
        {
          form: "You good?",
          register: "friendly informal",
          region: "Inglés norteamericano",
          whenToUse: "Muy casual, casi siempre añadido — “hey, you good?” — buscando un rápido “yeah, you?”."
        },
        {
          form: "How've you been?",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Para alguien que no ves hace rato; invita a una actualización corta y no literal."
        }
      ],
      prompt: "Dave saluda a Alejandra con “What's up?” ¿Cómo debería tomarlo ella?",
      choices: [
        "Como un saludo casual — es un saludo, no una pregunta real sobre lo que está pasando ahora.",
        "Como una petición de que describa con cierto detalle lo que ha estado haciendo en los últimos días.",
        "Como una pregunta sobre si algo salió mal arriba o en alguna otra parte del edificio hoy."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿A qué se refiere “long weekend”?",
          choices: [
            "A un fin de semana que se siente largo porque no hay casi nada que hacer en él.",
            "A las horas extra que la gente trabaja el sábado para terminar la semana más temprano.",
            "A un fin de semana de tres días por un lunes o viernes festivo — el “puente”."
          ],
          answer: 2,
          tests: "long weekend como equivalente inglés del “puente”"
        },
        {
          prompt: "¿Por qué “take it easy” necesita la palabra “it”?",
          choices: [
            "Porque el “it” remite al fin de semana largo que Dave había mencionado justo antes.",
            "Porque es un modismo fijo cuyo “it” no remite a nada y no se puede dejar por fuera.",
            "Porque el “it” vuelve la sugerencia más cortés, como el “please” suaviza una petición inglesa."
          ],
          answer: 1,
          tests: "el “it” obligatorio de take it easy, espejo de “pasarla”"
        },
        {
          prompt: "Dave dice “come by on Sunday.” ¿Qué está haciendo?",
          choices: [
            "Invita de verdad a Alejandra a dejarse caer por su casa — una invitación informal y abierta.",
            "Le pide que le lleve algo específico hasta su apartamento el domingo bien temprano en la mañana.",
            "Le avisa que él mismo va a pasar por la puerta de ella en algún momento del domingo."
          ],
          answer: 0,
          tests: "come by como una invitación real a pasar por la casa"
        },
        {
          prompt: "Un hispanohablante dice “Actually I stay here this weekend.” ¿Qué salió mal?",
          choices: [
            "Nada — “actually” es la manera natural de decir “ahora mismo” en inglés casual.",
            "“Stay” debería ser “stay in”, la única forma correcta que puede ir después de “actually”.",
            "“Actually” significa “en realidad”, no “ahora”; el falso amigo distorsiona el sentido."
          ],
          answer: 2,
          tests: "el falso amigo actually ≠ actualmente"
        }
      ]
    }
  },
  {
    id: "settling-the-tab-at-the-corner-shop",
    level: "Starter · Home and neighbourhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["foundation"],
    verb: "deber",
    review: "pending",
    es: {
      title: "Pagar el fiado en la tienda",
      situation:
        "Es fin de mes y Alex va a la tienda de la esquina a pagar el fiado — lo que le fue anotando Don Fabio durante el mes en un cuaderno. Tiene que preguntar cuánto debe, entender la diferencia entre lo que debe pagar y lo que la cuenta debe de ser, y agradecer el fiado sin que la plata enfríe una relación de barrio que le conviene mantener caliente.",
      setting: {
        who: "Don Fabio has run the corner shop for decades and has let Alex buy on credit for a month. Alex is the foreign renter from the building across the street, still learning how a barrio tab works.",
        what: "Paying off a month's fiado — a running credit tab — at the shop counter.",
        when: "The last morning of the month, when regulars come to settle up.",
        where: "Bogotá, a neighbourhood tienda where people pay when they can and the owner knows them all.",
        why: "Because the fiado is built entirely on trust. Paying it well, and talking about the money the Colombian way, is what keeps the shop's door — and its credit — open to him."
      },
      address: {
        form: "usted",
        who: "Don Fabio and Alex both use usted, the Bogotá default even between friendly regulars.",
        why: "In Bogotá, usted is the neutral, unmarked form for almost everyone — neighbours, shopkeepers, even family. It carries no coldness; it is simply how rolos speak to nearly anybody, and tú at a counter can sound flirtatious or presumptuous.",
        ifYouSwitch:
          "Tú with Don Fabio might read as too familiar, even a little forward, across a shop counter. Vos isn't used in Bogotá at all, so it would sound imported from Medellín or Cali rather than local."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Don Fabio, buenos días. Vengo a pagarle lo que le debo.",
          translation: "Don Fabio, good morning. I've come to pay you what I owe you.",
          pronunciation: "don FA-byo, BWE-nos DEE-as. BENG-go a pa-GAR-le lo ke le DE-bo",
          literal: "Don Fabio, good days. I-come to pay-you the that you I-owe.",
          why: "“Le debo” carries the indirect-object “le” even without saying “a usted” — Spanish doubles the clitic. The same “le” rides on “pagarle”: both owing and paying point straight back to Don Fabio."
        },
        {
          speaker: "Don Fabio",
          target: "Ah, tranquilo, mijo. No hay afán. ¿Cuánto cree que era?",
          translation: "Ah, don't worry, son. There's no rush. How much do you reckon it was?",
          pronunciation: "ah, tran-KEE-lo, MEE-ho. no ai a-FAN. KWAN-to KRE-e ke E-ra",
          literal: "Ah, calm, my-son. Not there-is rush. How-much you-believe that it-was?",
          why: "“No hay afán” (no rush) is how Colombians defuse money pressure; naming the debt bluntly would feel harsh. “Mijo”, worn down from “mi hijo”, is warm address, not literal fatherhood."
        },
        {
          speaker: "Alex",
          target: "Debe de ser como cuarenta mil, pero no estoy seguro.",
          translation: "It must be around forty thousand, but I'm not sure.",
          pronunciation: "DE-be de ser KO-mo kwa-REN-ta mil, PE-ro no es-TOY se-GU-ro",
          literal: "It-must of be like forty thousand, but not I-am sure.",
          why: "Here “debe de ser” is supposition — a guess, not a duty. That little “de” flips deber from obligation to probability. Colombians often drop it (“debe ser”), but keeping it makes the guess explicit."
        },
        {
          speaker: "Don Fabio",
          target: "Déjeme ver el cuaderno. Usted debe pagar hasta el martes pasado... son treinta y ocho.",
          translation: "Let me check the notebook. You owe up to last Tuesday... it comes to thirty-eight.",
          pronunciation: "DE-he-me ber el kwa-DER-no. oos-TED DE-be pa-GAR AS-ta el MAR-tes pa-SA-do... son TREN-ta i O-cho",
          literal: "Let-me see the notebook. You must pay until the Tuesday past... they-are thirty and eight.",
          why: "“Debe pagar” — deber plus an infinitive with no “de” — is the obligation sense: what he owes. Same verb as Alex's guess a line earlier, but without the “de” it means duty, not probability. The tab lives in a paper cuaderno, not an app."
        },
        {
          speaker: "Alex",
          target: "Listo. Entonces le debo treinta y ocho. Aquí están, y gracias por fiarme.",
          translation: "Great. So I owe you thirty-eight. Here you go, and thanks for the credit.",
          pronunciation: "LEES-to. en-TON-ses le DE-bo TREN-ta i O-cho. a-KEE es-TAN, i GRA-syas por fyar-me",
          literal: "Ready. Then you I-owe thirty and eight. Here they-are, and thanks for to-credit-me.",
          why: "“Fiar” is to sell on trust; “fiarme” is to extend me credit. Thanking for the fiado honours the trust behind it, which matters more than the sum. Note “le debo” doubling the clitic once again."
        },
        {
          speaker: "Don Fabio",
          target: "A usted. Cuando necesite, me dice y le fío, no hay problema. Y ya.",
          translation: "Thank you. Whenever you need it, tell me and I'll extend you credit, no problem. And that's that.",
          pronunciation: "a oos-TED. KWAN-do ne-se-SI-te, me DI-se i le FI-o, no ai pro-BLE-ma. i ya",
          literal: "To you. When you-need, to-me you-tell and to-you I-credit, not there-is problem. And already.",
          why: "“A usted” — not another “gracias” — is the standard reply to thanks at a counter. “Le fío” is present-tense fiar again, and “y ya” snaps the matter shut: a very Colombian full stop."
        }
      ],
      vocabulary: [
        {
          term: "deber (le debo)",
          explanation:
            "The “owe” sense of deber — to owe money or a favour. The indirect object doubles with “le”.",
          literal: "to owe",
          useWhen:
            "Naming a debt of money or of gratitude: “le debo”, “te debo una”, “¿cuánto le debo?”.",
          avoidWhen:
            "You mean an obligation to do something; that is deber plus an infinitive, a different frame entirely.",
          register: "neutral",
          region: "Universal Spanish; the clitic-doubling “le debo” is standard in Colombia.",
          related: ["le debo", "deber plata", "quedar debiendo", "te debo una"],
          example: {
            target: "Vengo a pagarle lo que le debo.",
            translation: "I've come to pay you what I owe you."
          }
        },
        {
          term: "deber + infinitivo",
          explanation:
            "Deber followed straight by an infinitive means obligation or duty — “must”, “have to”.",
          literal: "must / to have to (do)",
          useWhen:
            "Stating what someone is obliged to do: “debe pagar”, “debemos salir”, “debo estudiar”.",
          avoidWhen:
            "You are guessing rather than obliging; then you want the “de” (deber de), or “tener que” for plain necessity.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["tener que", "hay que", "debería", "toca"],
          example: {
            target: "Usted debe pagar hasta el martes.",
            translation: "You owe up to Tuesday."
          }
        },
        {
          term: "deber de + infinitivo",
          explanation:
            "With “de”, deber marks a guess or probability — “must be”, in the deduction sense, not the duty sense.",
          literal: "must (probably) be",
          useWhen:
            "Making an educated guess: “debe de ser tarde”, “debe de estar cansado”, “debe de costar caro”.",
          avoidWhen:
            "You mean a genuine obligation; the “de” turns a duty into a conjecture and changes the meaning.",
          register: "neutral",
          region: "Universal Spanish in theory; in Colombia the “de” is often dropped even for supposition.",
          related: ["debe ser", "ha de ser", "seguramente", "probablemente"],
          example: {
            target: "Debe de ser como cuarenta mil.",
            translation: "It must be around forty thousand."
          }
        },
        {
          term: "el fiado",
          explanation:
            "Goods taken on trust from a shop and paid for later — the running tab of a barrio tienda.",
          literal: "the trusted / credited",
          useWhen:
            "At a corner shop where the owner knows you and lets you settle up at the end of the month.",
          avoidWhen:
            "A supermarket or anywhere with card terminals; fiado is a neighbourhood-trust arrangement, not a formal one.",
          register: "friendly informal",
          region: "General Colombian, deeply rooted in barrio tienda culture.",
          related: ["fiar", "el cuaderno", "quedar debiendo", "la cuenta"],
          example: {
            target: "Gracias por fiarme.",
            translation: "Thanks for the credit."
          }
        },
        {
          term: "no hay afán",
          explanation:
            "“There's no rush.” A very Colombian way to take the pressure out of a request or a debt.",
          literal: "there is no rush/urgency",
          useWhen:
            "Reassuring someone that they needn't hurry — over paying, arriving, or deciding something.",
          avoidWhen:
            "Something genuinely is urgent; there it misleads and buys a delay you can't actually afford.",
          register: "friendly informal",
          region: "General Colombian; “afán” for hurry is especially Colombian.",
          related: ["sin afán", "no hay prisa", "tranquilo", "con calma"],
          example: {
            target: "No hay afán.",
            translation: "There's no rush."
          }
        },
        {
          term: "mijo / mija",
          explanation:
            "Worn down from “mi hijo/hija”. A warm address to someone younger or familiar, not literal parenthood.",
          literal: "my son / my daughter",
          useWhen:
            "An older person addressing a younger one warmly — shopkeepers, aunts, neighbours, taxi drivers.",
          avoidWhen:
            "Addressing someone clearly older, or in a formal setting; there it turns over-familiar or patronising.",
          register: "friendly informal",
          region: "General Colombian and pan-Latin American.",
          related: ["mijito", "m'hija", "mi amor", "vecino"],
          example: {
            target: "Tranquilo, mijo.",
            translation: "Don't worry, son."
          }
        },
        {
          term: "y ya",
          explanation:
            "“And that's it.” Closes a matter cleanly, signalling that nothing more needs to be said.",
          literal: "and already",
          useWhen:
            "Wrapping up an arrangement or a list — you pay, it's done, “y ya”.",
          avoidWhen:
            "You actually want to keep the conversation going; it firmly shuts the topic.",
          register: "friendly informal",
          region: "General Colombian and widespread across the region.",
          related: ["y listo", "y ya está", "nada más", "de una"],
          example: {
            target: "No hay problema. Y ya.",
            translation: "No problem. And that's that."
          }
        }
      ],
      note:
        "The whole lesson turns on one small “de”. Deber plus an infinitive is obligation — “debe pagar”, you must pay. Deber de plus an infinitive is supposition — “debe de ser”, it must be, a guess. Colombians blur the two by dropping the “de”, so lean on context to tell duty from deduction. And remember that “le debo” always doubles the clitic.",
      culture: [
        {
          label: "The fiado runs on a paper cuaderno",
          body:
            "In barrio tiendas across Colombia, regulars buy on “fiado” — credit tracked in a handwritten notebook, never an app. The tendero jots down what you take and you settle when you can, usually at month's end or on payday. It works because the shopkeeper knows you and knows the block. Honouring it promptly is a matter of reputation; skipping out doesn't only cost money, it closes a door the whole neighbourhood will quietly remember."
        },
        {
          label: "Colombians cushion money talk",
          body:
            "Blunt demands for payment feel harsh in Colombia, so the language softens them. A shopkeeper says “no hay afán” — no rush — even as he notes your debt, and you thank him for “fiarme” rather than treating credit as your right. The money still changes hands, but the wrapping matters: brusqueness about a debt can sour a relationship that both sides would rather keep warm, easy and long-running."
        },
        {
          label: "That extra “de” quietly changes everything",
          body:
            "Textbooks separate “deber” (obligation) from “deber de” (probability) with a clean line, but Colombian speech smudges it. You'll hear “debe ser tarde” for “it must be late”, a guess, with no “de” at all, and “debe pagar” for a real obligation. Because the marker is unreliable, Colombians lean on context and tone to tell duty from deduction — and so should you, rather than trusting the little word to do the work alone."
        },
        {
          label: "Usted is the Bogotá default, warmth included",
          body:
            "Rolos — Bogotanos — use usted with almost everyone: spouses, children, old friends, even the dog, far more than the textbook “formal you” suggests. At a shop counter it is simply neutral and carries no distance. Switching to tú with Don Fabio wouldn't sound friendlier; it might sound forward. Unlike Medellín, Bogotá doesn't use vos at all, so the real choice here is usted, and it is almost always the safe one."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “debo de pagar” for “I must pay” (an obligation)",
          whyItFails:
            "Adding “de” flips it to supposition — “I must probably pay” — which isn't what an obligation means. Duty is deber plus an infinitive, with no “de”.",
          sayInstead: "Debo pagar."
        },
        {
          mistake: "Saying “debo dinero a usted”, dropping the clitic",
          whyItFails:
            "Spanish doubles the indirect object; the “le” isn't optional even when “a usted” is spelled out. Leaving it off marks the sentence as foreign.",
          sayInstead: "Le debo dinero."
        },
        {
          mistake: "Taking “mijo” as literally calling someone your son",
          whyItFails:
            "It is a warm term of address, from “mi hijo”, used with anyone younger or familiar. Reading it literally makes you miss the affection and sound startled.",
          sayInstead: "Take “mijo” as a friendly “son/mate”, not a family claim."
        },
        {
          mistake: "Answering “gracias” with “bienvenido”, calqued from “you're welcome”",
          whyItFails:
            "“Bienvenido” means “welcome” as in arriving at a place. At a counter the natural reply to thanks is “a usted” or “con gusto”, never “bienvenido”.",
          sayInstead: "A usted. / Con gusto."
        }
      ],
      variations: [
        {
          form: "¿Cuánto le debo?",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "The standard way to ask your total at a shop, a taxi or a market stall."
        },
        {
          form: "¿Qué le debo?",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "A slightly warmer variant, common once you already half-know the tendero."
        },
        {
          form: "Le quedé debiendo.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "When you can't cover it all now and are flagging that a remainder is still owed."
        },
        {
          form: "¿Cuánto es?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Blunter and quicker; fine at a fast counter, though less warm than “¿cuánto le debo?”."
        },
        {
          form: "¿Cuánto sería?",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "The conditional softens it further; very polite, and common in careful service settings."
        }
      ],
      prompt: "Alex says “Debe de ser como cuarenta mil.” What is the “de” in “debe de” doing here?",
      choices: [
        "Marking a firm obligation to pay exactly forty thousand pesos before the end of the day.",
        "Turning the verb into a polite request, much the way “would” softens a sentence in English.",
        "Shifting deber from obligation to a guess — “it must be around forty thousand or so”."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Why does Alex say “le debo” rather than just “debo”?",
          choices: [
            "Because “le” quietly turns the verb into the obligation sense of deber, not owing.",
            "Because Spanish doubles the indirect object; the “le” points straight back to Don Fabio.",
            "Because without “le” the sentence would mean he owes the money to himself instead."
          ],
          answer: 1,
          tests: "clitic doubling in le debo"
        },
        {
          prompt: "Don Fabio says “no hay afán.” What is he doing?",
          choices: [
            "Taking the pressure right off — telling Alex there is no rush to pay the tab today.",
            "Warning Alex that the shop is about to close and that he must be quick about paying.",
            "Complaining, gently, that Alex has left the debt unpaid for far too many weeks now."
          ],
          answer: 0,
          tests: "no hay afán as softening the debt"
        },
        {
          prompt: "Don Fabio says “usted debe pagar hasta el martes.” Which sense of deber is this?",
          choices: [
            "Supposition — he is guessing that Alex probably paid off something last Tuesday.",
            "A polite invitation, roughly “you might pay whenever it happens to suit you best”.",
            "Obligation — deber plus an infinitive, with no “de”, stating plainly what Alex owes."
          ],
          answer: 2,
          tests: "deber + infinitive as obligation, no de"
        },
        {
          prompt: "What does Don Fabio mean by closing with “y ya”?",
          choices: [
            "That Alex still owes a little bit more and really should come back again quite soon.",
            "That the matter is settled and closed — a very Colombian “and that's that”, full stop.",
            "That Don Fabio is now in a hurry and needs Alex to leave the shop right this minute."
          ],
          answer: 1,
          tests: "y ya as closing a matter"
        }
      ]
    },
    en: {
      title: "Pagarle a una compañera el almuerzo",
      situation:
        "Alejandra trabaja en una oficina en Canadá y ayer una compañera, Karen, le prestó plata para el almuerzo. Hoy va a pagarle. Tiene que decir cuánto le debe, entender la diferencia entre “I owe you” (te debo) y “I have to pay” (tengo que pagar), y no calcar del español el clásico “I must to pay”. En inglés estas ideas se reparten entre varios verbos, y ahí es donde a un hispanohablante se le enredan.",
      setting: {
        who: "Karen es una compañera de oficina canadiense que ayer le cubrió el almuerzo a Alejandra. Alejandra es la recién llegada de Colombia, todavía afinando el inglés cotidiano.",
        what: "Devolverle a una compañera la plata que le prestó para el almuerzo.",
        when: "A media mañana, junto a la cafetera de la oficina, antes de la reunión.",
        where: "Una oficina en Canadá, donde las deudas pequeñas entre colegas se pagan rápido y sin drama.",
        why: "Porque en un ambiente laboral anglo lo esperado es saldar enseguida y con soltura; demorarse o enredar los verbos hace que Alejandra suene torpe justo donde quiere sonar profesional."
      },
      address: {
        form: "mixed",
        who: "Karen y Alejandra son compañeras de trabajo con trato cercano y cotidiano.",
        why: "El inglés tiene un solo “you”, así que no marca el respeto cambiando de pronombre como el español entre usted y tú. La cortesía va por otro lado: en el léxico y el tono — “would you mind”, “thanks so much”, “no worries” —, no en el pronombre. Alejandra debe trasladar ese respeto a las palabras, no buscar un “usted” que en inglés no existe.",
        ifYouSwitch:
          "No hay pronombre que cambiar, pero si Alejandra habla demasiado seco (“give me the change”) suena brusca; si adorna de más suena tiesa. El punto medio anglo es liviano y directo: “here you go”, “thanks a lot”."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Hey Karen, I owe you for lunch yesterday. How much was it?",
          translation: "Hola Karen, te debo por el almuerzo de ayer. ¿Cuánto fue?",
          pronunciation: "jei KE-ren, ai OU yu for lonch YES-ter-dei. jau moch uós it",
          literal: "Oye Karen, yo debo te por almuerzo ayer. ¿Cuánto fue ello?",
          why: "En inglés “owe” no lleva la duplicación del español: es “I owe you”, sin ningún “le/te” extra. El orden es sujeto + owe + persona, seco y directo, sin el clítico al que uno está acostumbrado."
        },
        {
          speaker: "Karen",
          target: "Oh, don't worry about it! It was twelve fifty, but there's no rush.",
          translation: "Ah, ¡no te preocupes! Fueron doce con cincuenta, pero no hay afán.",
          pronunciation: "ou, dont UÓ-ri a-BÁUT it! it uós tuélv FIF-ti, bot ders nou rosh",
          literal: "Oh, no preocúpate acerca de ello. Ello fue doce cincuenta, pero ahí-es no prisa.",
          why: "“There's no rush” es el equivalente natural de “no hay afán”. Fíjate que “worry” pide “about” (“worry about it”): el inglés amarra el verbo a una preposición donde el español no la necesita."
        },
        {
          speaker: "Alejandra",
          target: "It must be more than that. I have to pay you for the coffee too.",
          translation: "Debe de ser más que eso. También tengo que pagarte el café.",
          pronunciation: "it most bi mor dan dat. ai jav tu pei yu for de KO-fi tu",
          literal: "Ello debe ser más que eso. Yo tengo a pagar te por el café también.",
          why: "Dos trampas en una línea. “It must be” es la suposición (el “deber de” del español), sin “to”. “I have to pay” es la obligación: se dice “have to pay”, nunca “I must to pay” — must jamás lleva “to” detrás."
        },
        {
          speaker: "Karen",
          target: "Right, the coffee. Okay, so fourteen even. Whenever works for you.",
          translation: "Cierto, el café. Bueno, entonces catorce justos. Cuando puedas.",
          pronunciation: "rait, de KO-fi. o-KEI, sou FOR-tin I-ven. uén-E-ver uorks for yu",
          literal: "Correcto, el café. Bien, así catorce parejo. Cuando-quiera funcione para ti.",
          why: "“Whenever works for you” es un “cuando puedas” muy anglo: liviano y sin presión, el modo en que un canadiense quita hierro a una deuda pequeña. “Even” aquí es “justo, sin decimales”."
        },
        {
          speaker: "Alejandra",
          target: "Here you go, fourteen. Thanks so much for covering me yesterday.",
          translation: "Toma, catorce. Muchas gracias por cubrirme ayer.",
          pronunciation: "jir yu gou, FOR-tin. zenks sou moch for KO-ver-ing mi YES-ter-dei",
          literal: "Aquí tú vas, catorce. Gracias tan mucho por cubriendo me ayer.",
          why: "“Here you go” es la fórmula fija al entregar algo — no se traduce literal. “Thanks for covering me” usa “-ing” tras la preposición “for”: en inglés, después de preposición el verbo va en gerundio, no en infinitivo."
        },
        {
          speaker: "Karen",
          target: "Anytime! Seriously, don't even mention it. We'll get lunch again soon.",
          translation: "¡Cuando quieras! En serio, ni lo menciones. Almorzamos juntas pronto otra vez.",
          pronunciation: "E-ni-taim! SI-ri-os-li, dont I-ven MEN-shon it. uil get lonch a-GUÉN sun",
          literal: "Cualquier-hora. Seriamente, no incluso menciones ello. Nosotras conseguiremos almuerzo otra-vez pronto.",
          why: "“Anytime” y “don't mention it” son respuestas hechas a un agradecimiento, equivalentes a “con gusto”. “We'll get lunch” usa “will” para un plan futuro; el español lo diría en presente (“almorzamos”), pero el inglés marca el futuro."
        }
      ],
      vocabulary: [
        {
          term: "to owe",
          explanation:
            "El verbo para “deber” en el sentido de dinero o favores. No lleva clítico duplicado como el español.",
          literal: "deber (dinero/favor)",
          useWhen:
            "Al reconocer una deuda: “I owe you”, “I owe you one”, “how much do I owe you?”.",
          avoidWhen:
            "Quieres decir una obligación de hacer algo; eso es “have to” o “must”, otro verbo distinto.",
          register: "neutral",
          region: "Inglés general.",
          related: ["I owe you", "owe you one", "pay back", "debt"],
          example: {
            target: "I owe you for lunch.",
            translation: "Te debo por el almuerzo."
          }
        },
        {
          term: "have to",
          explanation:
            "La forma corriente de la obligación en inglés hablado — “tener que”. Se conjuga con do/does/did.",
          literal: "tener que",
          useWhen:
            "Para casi toda obligación cotidiana: “I have to pay”, “I have to go”, “do I have to?”.",
          avoidWhen:
            "Estás suponiendo, no obligando; ahí va “must be”. Y ojo: nunca “must to”.",
          register: "neutral",
          region: "Inglés general; más frecuente que “must” en el habla.",
          related: ["must", "need to", "got to", "gotta"],
          example: {
            target: "I have to pay you for the coffee.",
            translation: "Tengo que pagarte el café."
          }
        },
        {
          term: "must be (suposición)",
          explanation:
            "“Must” de deducción — el “deber de” del español. Expresa una conjetura, no una obligación.",
          literal: "debe de ser",
          useWhen:
            "Al deducir algo por lógica: “it must be late”, “you must be tired”, “that must be expensive”.",
          avoidWhen:
            "Quieres una obligación; entonces “have to”. Y jamás le pongas “to” a must.",
          register: "neutral",
          region: "Inglés general.",
          related: ["must be", "has to be", "probably", "I bet"],
          example: {
            target: "It must be more than that.",
            translation: "Debe de ser más que eso."
          }
        },
        {
          term: "to pay back",
          explanation:
            "Devolver una deuda a alguien. El “back” marca la devolución, y suele partirse: “pay you back”.",
          literal: "pagar de vuelta",
          useWhen:
            "Al saldar plata prestada: “I'll pay you back”, “let me pay you back for lunch”.",
          avoidWhen:
            "Es una compra normal a un vendedor; ahí es solo “pay”, sin “back”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["pay you back", "owe", "settle up", "reimburse"],
          example: {
            target: "Let me pay you back for lunch.",
            translation: "Déjame pagarte el almuerzo."
          }
        },
        {
          term: "there's no rush",
          explanation:
            "El equivalente natural de “no hay afán”: quitarle presión a una deuda o a un plazo.",
          literal: "no hay prisa",
          useWhen:
            "Para tranquilizar a alguien: “there's no rush”, “no worries”, “whenever works”.",
          avoidWhen:
            "Algo es urgente de verdad; entonces engaña y regala una demora que no puedes dar.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["no worries", "no hurry", "take your time", "whenever"],
          example: {
            target: "There's no rush.",
            translation: "No hay afán."
          }
        },
        {
          term: "here you go",
          explanation:
            "Fórmula fija al entregarle algo a alguien. No se traduce literal; equivale a “toma” o “aquí tiene”.",
          literal: "aquí vas",
          useWhen:
            "Al pasar dinero, un plato, un objeto: “here you go”, “here you are”.",
          avoidWhen:
            "Intentas traducirla palabra por palabra; pierde el sentido y suena raro.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["here you are", "there you go", "take it", "all yours"],
          example: {
            target: "Here you go, fourteen.",
            translation: "Toma, catorce."
          }
        },
        {
          term: "anytime",
          explanation:
            "Respuesta hecha a un agradecimiento — “cuando quieras”, equivalente a “con gusto”.",
          literal: "en cualquier momento",
          useWhen:
            "Al restar importancia a un favor tras un “thank you”: “anytime”, “don't mention it”.",
          avoidWhen:
            "En un registro muy formal; ahí “you're welcome” encaja mejor que “anytime”.",
          register: "friendly informal",
          region: "Inglés general, muy común en Norteamérica.",
          related: ["don't mention it", "no problem", "you're welcome", "no worries"],
          example: {
            target: "Anytime! Don't even mention it.",
            translation: "¡Cuando quieras! Ni lo menciones."
          }
        }
      ],
      note:
        "El español reparte “deber” en varios verbos del inglés. Para deuda, “owe”: I owe you, sin clítico. Para obligación, “have to” o “must” — pero must nunca lleva “to” detrás: es “I must pay” o “I have to pay”, jamás “I must to pay”. Y para la suposición (el “deber de”), “must be”: it must be late. Elige según sea deuda, deber o deducción.",
      culture: [
        {
          label: "Las deudas chiquitas se saldan ya",
          body:
            "En oficinas canadienses y estadounidenses lo normal es devolver enseguida la plata que un colega te prestó — el almuerzo, el café, la entrada al parqueadero. No se ve como frialdad sino como respeto por el bolsillo ajeno. Alejandra hace bien en pagar al día siguiente: dejar correr una deuda pequeña, aunque en Colombia entre amigos sea normal, en un ambiente laboral anglo puede leerse como descuido o, peor, como que uno se está aprovechando."
        },
        {
          label: "El respeto no va en el pronombre",
          body:
            "El español marca respeto cambiando de usted a tú; el inglés no puede, porque solo tiene “you”. Toda la cortesía se traslada al léxico y al tono: “would you mind”, “thanks so much”, “no worries”, “whenever works for you”. Para un hispanohablante esto se siente resbaloso al principio, porque no hay una palabra fija que marque el respeto. La clave es cargar la amabilidad en las fórmulas y en la suavidad, no en buscar un pronombre que en inglés no existe."
        },
        {
          label: "Must, have to y el fantasma del “to”",
          body:
            "El error estrella del hispanohablante es “I must to pay”, calcado de “tengo que pagar”. Pero “must” es un verbo modal y nunca lleva “to” detrás: se dice “I must pay”. Como “must” suena algo fuerte o formal, en el día a día los angloparlantes prefieren “have to”: “I have to pay”. Alejandra queda mejor con “have to” para las obligaciones normales y reservando “must” para lo enfático o las reglas escritas."
        },
        {
          label: "“Owe” no duplica como “deber”",
          body:
            "En español decimos “te debo” y hasta “te lo debo a ti”, repitiendo la persona con un clítico. El inglés no hace eso: es “I owe you”, punto, sin ninguna partícula extra antes del verbo. Al hispanohablante le nace meter un pronombre de más o reordenar la frase, pero el inglés quiere sujeto + owe + persona, seco y en ese orden. Cuanto antes suelte Alejandra la duplicación, más natural sonará al hablar de plata."
        }
      ],
      pitfalls: [
        {
          mistake: "“I must to pay you.”",
          whyItFails:
            "“Must” es modal y nunca va seguido de “to”. El calco del infinitivo español con “to” delata al hispanohablante de inmediato.",
          sayInstead: "I have to pay you. / I must pay you."
        },
        {
          mistake: "“Can you borrow me money?”",
          whyItFails:
            "“Borrow” es pedir prestado y “lend” es prestar; el español usa un mismo marco y los revuelve. Aquí Karen “lent” y Alejandra “borrowed”.",
          sayInstead: "Can you lend me money? / Thanks for lending me."
        },
        {
          mistake: "“I'm agree with you.”",
          whyItFails:
            "“Agree” ya es un verbo; no necesita “be”. El calco viene de “estoy de acuerdo”, pero en inglés no se dice “I am agree”.",
          sayInstead: "I agree. / That works for me."
        },
        {
          mistake: "Saying “I pay you tomorrow” for a future promise",
          whyItFails:
            "El español usa el presente para el futuro cercano, pero el inglés marca el futuro con “will” o “going to”. El presente pelado suena a costumbre, no a promesa.",
          sayInstead: "I'll pay you tomorrow."
        }
      ],
      variations: [
        {
          form: "How much do I owe you?",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "La forma estándar de preguntar cuánto debes, a un colega o en una tienda."
        },
        {
          form: "What do I owe you?",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Un poco más ligera y cercana; común cuando ya hay confianza."
        },
        {
          form: "Let me pay you back.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Al ofrecer devolver plata que alguien te prestó o adelantó."
        },
        {
          form: "I still owe you for that.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Para reconocer una deuda pendiente que todavía no has saldado."
        },
        {
          form: "What's the damage?",
          register: "friendly informal",
          region: "Inglés general, tono jocoso",
          whenToUse: "Manera coloquial y bromista de preguntar el total; entre amigos, no en lo formal."
        }
      ],
      prompt: "Alejandra quiere decir “tengo que pagarte el café”. ¿Cuál oración es correcta en inglés?",
      choices: [
        "I must to pay you for the coffee, because yesterday you covered my whole lunch as well.",
        "I have to pay you for the coffee too, since you also covered that when we went out.",
        "I am agree to pay you the coffee, and I will borrow you the money back this afternoon."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Por qué está mal “I must to pay you”?",
          choices: [
            "Porque “must” es modal y nunca lleva “to” detrás; se dice “I must pay” o “I have to pay”.",
            "Porque “must” no existe en inglés hablado y siempre hay que reemplazarlo por “need”.",
            "Porque el verbo “pay” exige la preposición “to” antes del objeto en cualquier oración."
          ],
          answer: 0,
          tests: "must no lleva to"
        },
        {
          prompt: "“It must be more than that.” ¿Qué expresa aquí “must be”?",
          choices: [
            "Una obligación estricta de pagar exactamente esa suma antes de que termine el día.",
            "Una orden de Karen para que Alejandra pague ya mismo el café y también el almuerzo.",
            "Una suposición — el “deber de” del español: calcula que la cuenta ha de ser más alta."
          ],
          answer: 2,
          tests: "must be como suposición"
        },
        {
          prompt: "Karen prestó la plata ayer. ¿Qué verbo describe lo que hizo Karen?",
          choices: [
            "Karen borrowed the money, porque fue ella quien puso el almuerzo en su momento.",
            "Karen lent the money — “lend” es prestar; Alejandra fue la que “borrowed”, pidió prestado.",
            "Karen owed the money, ya que en inglés “owe” cubre tanto prestar como pedir prestado."
          ],
          answer: 1,
          tests: "lend vs borrow"
        },
        {
          prompt: "¿Cómo dice Alejandra correctamente que pagará mañana?",
          choices: [
            "I'll pay you tomorrow, marcando el futuro con “will” como pide el inglés para un plan.",
            "I pay you tomorrow, usando el presente igual que haríamos en español para el futuro.",
            "I am paying you tomorrow for sure, that is the only correct way to promise it in English."
          ],
          answer: 0,
          tests: "futuro con will, no presente"
        }
      ]
    }
  },
  {
    id: "getting-the-house-ready-for-sunday-lunch",
    level: "Starter · Home and neighbourhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "intimate",
    pathways: ["foundation"],
    verb: "poner",
    review: "pending",
    es: {
      title: "Alistar la casa para el almuerzo del domingo",
      situation:
        "Es domingo en Barranquilla y en casa de la Tía Nubia se prepara el almuerzo familiar. Alex, que se hospeda con ellos, quiere ayudar. La tía lo pone a alistar todo: que se ponga una camisa limpia, que ponga el vallenato, que se ponga pilas con los platos. En seis líneas Alex oye el verbo poner estirarse por media docena de sentidos — vestirse, poner música, animarse, volverse — que en inglés serían verbos distintos.",
      setting: {
        who: "Tía Nubia is the warm costeña aunt hosting Sunday lunch; Alex is the foreign lodger she treats like another nephew. The rest of the family is about to arrive.",
        what: "Getting the house ready for the big Sunday family lunch — clothes, music and the table.",
        when: "Late Sunday morning, the hour before relatives pour in.",
        where: "Barranquilla, on the Caribbean coast, in a lively family home where the radio is never off for long.",
        why: "Because Sunday lunch is the week's social centre of gravity on the coast, and pitching in — dressed right, music on, sleeves up — is how Alex shows he belongs rather than just boards there."
      },
      address: {
        form: "tú",
        who: "Tía Nubia uses tú with Alex, the easy default between a costeña aunt and a younger housemate.",
        why: "On the Caribbean coast, tú is the everyday form even across generations; usted can sound stiff or distancing at home. Costeños also clip their /s/ — “lo' plato'”, “má' o meno'” — and speak fast and warm, so tú fits the relaxed, affectionate register of a family kitchen.",
        ifYouSwitch:
          "Usted with Tía Nubia at home would feel oddly formal, as if Alex were keeping her at arm's length. Vos isn't a costeño form — it belongs to Medellín or Cali — so on the coast the natural, homely choice is tú."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Tía, ¿en qué te ayudo? Dime qué hago.",
          translation: "Auntie, how can I help? Tell me what to do.",
          pronunciation: "TEE-a, en ke te a-YU-do? DEE-me ke A-go",
          literal: "Auntie, in what you I-help? Tell-me what I-do.",
          why: "“¿En qué te ayudo?” — literally “in what do I help you?” — is the natural offer of help; Spanish frames it with “en qué”, not “cómo”. The clitic “te” is tú, marking the coast's easy informality even with an aunt."
        },
        {
          speaker: "Tía Nubia",
          target: "Ay, mijo, ponte una camisa limpia que ya va a llegar la familia.",
          translation: "Oh, sweetie, put on a clean shirt — the family's about to arrive.",
          pronunciation: "ai, MEE-ho, PON-te U-na ka-MEE-sa LEEM-pya ke ya ba a lye-GAR la fa-MEE-lya",
          literal: "Oh, my-son, put-yourself a shirt clean that already goes to arrive the family.",
          why: "“Ponerse” plus clothing is how Spanish says “put on”: “ponte” is put-yourself-into. English splits wear (state) from put on (action); Spanish uses reflexive poner for the action of dressing. Note the dropped /s/ you'd hear: “lo' plato'”."
        },
        {
          speaker: "Alex",
          target: "Listo. ¿Y pongo música? ¿Te pongo el vallenato que te gusta?",
          translation: "Done. And shall I put on music? Shall I put on the vallenato you like?",
          pronunciation: "LEES-to. i PON-go MOO-see-ka? te PON-go el ba-lye-NA-to ke te GOOS-ta",
          literal: "Ready. And I-put music? To-you I-put the vallenato that to-you pleases?",
          why: "Here poner is non-reflexive — “poner música”, to put music on, the same verb without the “-se”. Vallenato, accordion-driven and born on the Caribbean coast, is the soundtrack of a costeño gathering, so offering it is offering to set the mood."
        },
        {
          speaker: "Tía Nubia",
          target: "¡Dale! Ponle volumen. Y no te pongas nervioso, que aquí todos somos familia.",
          translation: "Go for it! Turn it up. And don't get nervous — we're all family here.",
          pronunciation: "DA-le! PON-le bo-LOO-men. i no te PON-gas ner-BYO-so, ke a-KEE TO-dos SO-mos fa-MEE-lya",
          literal: "Give-it! Put-to-it volume. And not yourself you-put nervous, that here all we-are family.",
          why: "Two more poners: “ponle” (put-to-it) means add or give it volume, and “no te pongas nervioso” uses ponerse plus an adjective for becoming — get nervous. “Dale”, literally give-it, is the coast's all-purpose go-ahead."
        },
        {
          speaker: "Alex",
          target: "Bueno, me pongo pilas entonces. ¿Saco los platos y los cubiertos?",
          translation: "Okay, I'll get my act together then. Shall I get out the plates and cutlery?",
          pronunciation: "BWE-no, me PON-go PEE-las en-TON-ses. SA-ko los PLA-tos i los koo-BYER-tos",
          literal: "Good, myself I-put batteries then. I-take-out the plates and the cutlery?",
          why: "“Ponerse pilas” — put batteries on yourself — means to get sharp, get moving, look alive. It's everywhere in Colombia. “Me pongo pilas” is Alex volunteering energy, exactly the willingness a costeño host hopes a guest will show."
        },
        {
          speaker: "Tía Nubia",
          target: "¡Eso! Cuando llega toda la familia, esto se pone bueno de verdad.",
          translation: "That's it! When the whole family gets here, this really turns lively.",
          pronunciation: "E-so! KWAN-do LYE-ga TO-da la fa-MEE-lya, ES-to se PO-ne BWE-no de ber-DAD",
          literal: "That! When arrives all the family, this itself puts good of truth.",
          why: "“Se pone bueno” is ponerse plus an adjective again, but of a situation — it gets good, turns lively. Same construction as “no te pongas nervioso”, applied to the party rather than a person. “¡Eso!” is warm approval, roughly “there you go!”."
        }
      ],
      vocabulary: [
        {
          term: "ponerse (ropa)",
          explanation:
            "The reflexive poner used for putting clothes on — the action of dressing, not the state of wearing.",
          literal: "to put on oneself",
          useWhen:
            "Telling someone to put a garment on: “ponte una camisa”, “me pongo los zapatos”.",
          avoidWhen:
            "You mean the ongoing state of wearing something; that is “llevar” or “tener puesto”, not ponerse.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["llevar puesto", "quitarse", "vestirse", "tener puesto"],
          example: {
            target: "Ponte una camisa limpia.",
            translation: "Put on a clean shirt."
          }
        },
        {
          term: "poner música",
          explanation:
            "Non-reflexive poner meaning to put music on, play a track, switch on the sound.",
          literal: "to put music",
          useWhen:
            "Setting the sound going: “pon música”, “pon el vallenato”, “pon esa canción”.",
          avoidWhen:
            "You mean to perform music yourself on an instrument; that is “tocar”, not poner.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["poner una canción", "tocar", "sonar", "el equipo"],
          example: {
            target: "¿Te pongo el vallenato?",
            translation: "Shall I put on the vallenato?"
          }
        },
        {
          term: "ponerse + adjetivo",
          explanation:
            "Ponerse plus an adjective marks becoming — a change of state or mood, often sudden.",
          literal: "to put oneself (some way)",
          useWhen:
            "Describing a shift: “se pone nervioso”, “se puso rojo”, “esto se pone bueno”.",
          avoidWhen:
            "The change is permanent or gradual (“become a doctor”); there you want “volverse”, “hacerse” or “llegar a ser”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["volverse", "quedarse", "hacerse", "ponerse bravo"],
          example: {
            target: "No te pongas nervioso.",
            translation: "Don't get nervous."
          }
        },
        {
          term: "ponle / póngale",
          explanation:
            "The imperative of poner with a clitic — “add it”, “give it”, or figuratively “reckon it at”.",
          literal: "put to it",
          useWhen:
            "Telling someone to add something: “ponle volumen”, “ponle sal”, “ponle ganas”; póngale is the usted form.",
          avoidWhen:
            "A formal register calls for usted and you still use the tú “ponle”; then switch to “póngale”.",
          register: "friendly informal",
          region: "General Colombian; “ponle ganas” is pan-Colombian encouragement.",
          related: ["ponle ganas", "póngale", "échale", "agrégale"],
          example: {
            target: "Ponle volumen.",
            translation: "Turn it up."
          }
        },
        {
          term: "ponerse pilas",
          explanation:
            "To get sharp, get moving, look alive — literally to put batteries on yourself.",
          literal: "to put batteries on oneself",
          useWhen:
            "Urging effort or alertness: “ponte pilas”, “hay que ponerse pilas”, “pilas con eso”.",
          avoidWhen:
            "A formal or written register; it's colloquial and would clash with anything official.",
          register: "friendly informal",
          region: "General Colombian, very common.",
          related: ["pilas", "estar pilas", "avisparse", "ponerse las pilas"],
          example: {
            target: "Me pongo pilas entonces.",
            translation: "I'll get my act together then."
          }
        },
        {
          term: "el vallenato",
          explanation:
            "Accordion-driven folk music born on Colombia's Caribbean coast — the soundtrack of costeño gatherings.",
          literal: "the vallenato",
          useWhen:
            "Talking about the music of the coast: “pon un vallenato”, “me gusta el vallenato”.",
          avoidWhen:
            "You mean salsa, cumbia or champeta; those are distinct genres, so don't lump them together.",
          register: "neutral",
          region: "Caribbean coast (Valledupar heartland), loved nationwide.",
          related: ["el acordeón", "la cumbia", "la champeta", "el paseo"],
          example: {
            target: "Pon el vallenato que te gusta.",
            translation: "Put on the vallenato you like."
          }
        },
        {
          term: "dale",
          explanation:
            "An all-purpose green light — “go ahead”, “go for it”, “okay” — extremely common on the coast.",
          literal: "give it",
          useWhen:
            "Encouraging or agreeing: “¿vamos? — ¡dale!”, “dale, ponle volumen”.",
          avoidWhen:
            "A stiff, formal exchange; “dale” is casual and would feel too breezy there.",
          register: "friendly informal",
          region: "General Colombian, heard constantly on the Caribbean coast.",
          related: ["listo", "de una", "hágale", "eso"],
          example: {
            target: "¡Dale! Ponle volumen.",
            translation: "Go for it! Turn it up."
          }
        }
      ],
      note:
        "Poner is a shape-shifter. On its own it means to put or place, and “poner música” is to play it. Add “-se” and it turns reflexive: “ponerse” plus clothing is to put on, and “ponerse” plus an adjective is to become — “se pone nervioso”, he gets nervous. Keep the reflexive change of state (ponerse) apart from “volverse” or “hacerse”, which mark deeper or more permanent transformations.",
      culture: [
        {
          label: "Sunday lunch is the coast's main event",
          body:
            "On the Caribbean coast, Sunday lunch pulls the whole extended family into one house — grandparents, cousins, neighbours who might as well be relatives. It runs for hours over sancocho or fried fish, with the radio on and children underfoot. Pitching in to get ready isn't a chore but a way of belonging, so when Tía Nubia hands Alex jobs she is folding him into the family rather than treating him as a guest to be waited on."
        },
        {
          label: "Vallenato is coastal identity, not just music",
          body:
            "Vallenato, built around the accordion and born in the Valledupar region, is to the Caribbean coast what tango is to Buenos Aires — a whole identity in a genre. At a family gathering, putting on a vallenato sets the emotional register: nostalgic, romantic, celebratory. Knowing to reach for it, rather than salsa or reggaeton, signals that Alex has read the room correctly, and costeños notice and warm to a foreigner who gets their music right."
        },
        {
          label: "Costeños clip their consonants",
          body:
            "Caribbean Spanish is fast, musical and famously economical with consonants: the /s/ at the end of syllables softens to a breath or vanishes, so “los platos” becomes “lo' plato'” and “más o menos” sounds like “má' o meno'”. Words run together and the rhythm is looser than in the Andean interior. For a learner it's harder to catch at first, but tuning your ear to the coast's dropped /s/ unlocks a huge, warm chunk of the country."
        },
        {
          label: "Ponerse pilas: the battery metaphor",
          body:
            "“Ponerse pilas” — to put batteries on yourself — is one of the most useful colloquialisms in Colombia. It means to sharpen up, get moving, pay attention, be enterprising. A parent says it to a dawdling child, a boss to a team, a friend to someone about to be short-changed (“pilas con el vuelto”). Bare “¡pilas!” works as a standalone warning: heads up. Using it naturally makes a foreigner sound switched-on and local."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “llevar” for the action of putting clothes on",
          whyItFails:
            "“Llevar puesto” is the state of wearing; the action of dressing is “ponerse”. Saying “llevo una camisa” to mean “I'm putting a shirt on” confuses state with action.",
          sayInstead: "Me pongo una camisa."
        },
        {
          mistake: "Saying “toco música” to mean “I'll put music on”",
          whyItFails:
            "“Tocar” is to play an instrument yourself. Switching on recorded music is “poner música”, so “toco música” claims you're performing, not pressing play.",
          sayInstead: "Pongo música."
        },
        {
          mistake: "Using “volverse” for a passing mood, e.g. “me vuelvo nervioso”",
          whyItFails:
            "“Volverse” marks a deep or lasting change; a momentary mood swing is “ponerse”. “Me vuelvo nervioso” sounds like a permanent personality shift, not a flutter of nerves.",
          sayInstead: "Me pongo nervioso."
        },
        {
          mistake: "Reading “ponte pilas” as literally about batteries",
          whyItFails:
            "It's an idiom for getting sharp and alert. Taking it literally makes you miss a very common nudge to look alive or pay attention.",
          sayInstead: "Take “ponte pilas” as “get sharp / look alive”."
        }
      ],
      variations: [
        {
          form: "Ponte pilas.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Nudging someone to get sharp, hurry up or pay attention; very common and warm."
        },
        {
          form: "Póngase pilas.",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "The usted version, for someone you'd address formally or in the Andean interior."
        },
        {
          form: "¡Pilas!",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Standalone warning — “heads up”, “watch out” — often about not being cheated."
        },
        {
          form: "Ponle ganas.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Encouraging effort — “put some effort in”, “give it your all”."
        },
        {
          form: "Ponte las pilas.",
          register: "friendly informal",
          region: "General Colombian and pan-Latin American",
          whenToUse: "A fuller variant of ponte pilas, with the article; identical meaning, slightly emphatic."
        }
      ],
      prompt: "Tía Nubia says “ponte una camisa limpia.” What does “ponte” mean here?",
      choices: [
        "Put on — the action of getting dressed, telling Alex to slip into a clean shirt right now.",
        "Take off — she is asking Alex to remove the shirt he has on because it has got dirty.",
        "Wear — describing the ongoing state of having a clean shirt on throughout the whole lunch."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Alex asks “¿pongo música?” Why poner and not tocar?",
          choices: [
            "Because “tocar” would mean the music is sad, while “poner” keeps the mood upbeat and bright.",
            "Because “tocar” and “poner” are exact synonyms here and Colombians simply prefer poner on the coast.",
            "Because “tocar” means to play an instrument yourself; switching on recorded music is “poner música”."
          ],
          answer: 2,
          tests: "poner música vs tocar"
        },
        {
          prompt: "“No te pongas nervioso.” What is ponerse doing with the adjective?",
          choices: [
            "It marks the action of physically putting a nervous expression onto your own face on purpose.",
            "It marks becoming — a change of state, here “don't get nervous”, a shift into a nervous mood.",
            "It marks a permanent transformation, as if Alex were turning into a nervous person for good."
          ],
          answer: 1,
          tests: "ponerse + adjective = become"
        },
        {
          prompt: "Alex says “me pongo pilas.” What is he signalling?",
          choices: [
            "That he'll get sharp and get moving — put his energy in and look alive to help out.",
            "That he is going to go and buy some batteries from the shop before the family arrives.",
            "That he is feeling tired and would rather sit down than help set the table for lunch."
          ],
          answer: 0,
          tests: "ponerse pilas meaning"
        },
        {
          prompt: "Tía Nubia says “esto se pone bueno.” What does she mean?",
          choices: [
            "That the food on the table has finally finished cooking and is now ready to be served.",
            "That things are turning lively — the gathering gets good once the whole family arrives.",
            "That Alex has done something wrong and the situation is about to get tense and awkward."
          ],
          answer: 1,
          tests: "ponerse bueno = turns lively"
        }
      ]
    },
    en: {
      title: "Alistar el apartamento para una cena con amigos",
      situation:
        "Es fin de semana en Canadá y Alejandra ayuda a su compañera de apartamento, Chloe, a alistar todo para una cena con amigos. Chloe le va diciendo qué hacer: que se ponga algo cómodo, que ponga música, que saque los platos. Lo que en español es siempre “poner/ponerse”, en inglés se reparte entre “put on”, “wear”, “play” y “get”. Ahí es donde Alejandra tiende a calcar y a decir cosas como “I put nervous” o “I put music”.",
      setting: {
        who: "Chloe es la compañera de apartamento canadiense de Alejandra; esta noche reciben a unos amigos. Alejandra es la colombiana recién llegada, afinando el inglés del día a día.",
        what: "Dejar el apartamento listo para una cena informal con amigos.",
        when: "El sábado por la tarde, un rato antes de que lleguen los invitados.",
        where: "Un apartamento en Canadá, donde una cena entre amigos es relajada y de poca etiqueta.",
        why: "Porque ayudar a recibir es la forma en que Alejandra se integra, y hacerlo mientras habla un inglés natural — sin calcar “poner” en cada frase — la hace sentir parte y no invitada."
      },
      address: {
        form: "mixed",
        who: "Chloe y Alejandra son compañeras de apartamento con plena confianza.",
        why: "El inglés tiene un solo “you”, así que no separa la confianza del respeto con el pronombre como el español entre tú y usted. Todo el matiz va en el tono y en las fórmulas — “could you”, “do you mind”, “no worries” —, no en la forma de tratamiento. Alejandra no debe buscar un equivalente de “tú” o “usted”: en inglés esa distinción sencillamente no se marca en el pronombre.",
        ifYouSwitch:
          "No hay pronombre que alternar. Si Alejandra habla demasiado cortante suena seca; si adorna en exceso suena rígida. Entre amigas el registro anglo es liviano y directo: “sure”, “go for it”, “sounds good”."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Chloe, what can I do to help? Just tell me.",
          translation: "Chloe, ¿en qué ayudo? Solo dime.",
          pronunciation: "clou, uót kan ai du tu jelp? yost tel mi",
          literal: "Chloe, ¿qué puedo yo hacer para ayudar? Justo dime.",
          why: "El inglés dice “what can I do to help”, no “in what do I help” — el calco de “¿en qué te ayudo?” no funciona. Fíjate que no lleva pronombre extra: es “help”, sin el “te” del español."
        },
        {
          speaker: "Chloe",
          target: "Put on something comfy — people are about to show up.",
          translation: "Ponte algo cómodo, que ya van a llegar.",
          pronunciation: "put on SOM-zin KOM-fi — PI-pol ar a-BÁUT tu shou op",
          literal: "Pon en algo cómodo — gente está a-punto de mostrar arriba.",
          why: "“Put on” es la acción de vestirse — lleva “on” obligatorio. Sin “on”, “put something” es solo colocar algo en un lugar. El español no separa esto; el inglés sí: “put on” (acción) frente a “wear” (estado)."
        },
        {
          speaker: "Alejandra",
          target: "And should I put on some music? Want me to play that playlist you like?",
          translation: "¿Y pongo música? ¿Quieres que ponga esa lista que te gusta?",
          pronunciation: "and shud ai put on som MIU-sik? uónt mi tu plei dat PLEI-list yu laik",
          literal: "¿Y debería yo poner en algo música? ¿Quieres a mí tocar esa lista tú gustas?",
          why: "Para música hay dos opciones: “put on music” (con “on”) o “play music”. Ojo: “play” aquí es reproducir, no “tocar un instrumento”. El error típico es decir “put music” sin “on”, calcando el español."
        },
        {
          speaker: "Chloe",
          target: "Yeah! Turn it up. And don't get nervous — it's just friends.",
          translation: "¡Sí! Súbele. Y no te pongas nervioso, que son solo amigos.",
          pronunciation: "yea! tern it op. and dont get NER-vos — its yost frends",
          literal: "¡Sí! Gira ello arriba. Y no consigas nervioso — ello-es justo amigos.",
          why: "Aquí está la trampa grande: “ponerse nervioso” es “get nervous”, no “put nervous”. Para volverse algo, el inglés usa “get” + adjetivo. Y “turn it up” es “súbele el volumen”, un phrasal fijo."
        },
        {
          speaker: "Alejandra",
          target: "Okay, I'll get on it then. Should I get the plates out?",
          translation: "Bueno, me pongo pilas entonces. ¿Saco los platos?",
          pronunciation: "o-KEI, ail get on it den. shud ai get de pleits aut",
          literal: "Bien, yo conseguiré en ello entonces. ¿Debería yo conseguir los platos afuera?",
          why: "“Get on it” es el equivalente natural de “ponerse pilas” — ponerse manos a la obra. Y “get the plates out” usa “get... out” (sacar); el inglés parte el phrasal y mete el objeto en medio."
        },
        {
          speaker: "Chloe",
          target: "Perfect. Once everyone's here, it gets really fun.",
          translation: "Perfecto. Cuando estén todos, esto se pone superbueno.",
          pronunciation: "PER-fekt. uáns EV-ri-uáns jir, it gets RI-li fon",
          literal: "Perfecto. Una-vez todos-están aquí, ello consigue realmente divertido.",
          why: "“It gets fun” vuelve a usar “get” + adjetivo para el cambio de estado — el “se pone bueno” del español. Mismo verbo “get” que en “get nervous”: para volverse algo, el inglés casi siempre echa mano de “get”."
        }
      ],
      vocabulary: [
        {
          term: "to put on (clothes)",
          explanation:
            "La acción de vestirse — el “ponerse” del español. Lleva “on” obligatorio; sin él, cambia de sentido.",
          literal: "poner sobre (uno)",
          useWhen:
            "Al vestirse en el momento: “put on a jacket”, “I put on my shoes”.",
          avoidWhen:
            "Quieres el estado de llevar puesto algo; eso es “wear”, no “put on”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["put on", "take off", "get dressed", "throw on"],
          example: {
            target: "Put on something comfy.",
            translation: "Ponte algo cómodo."
          }
        },
        {
          term: "to wear",
          explanation:
            "El estado de llevar puesto — no la acción. El español lo mete todo en “ponerse/llevar”; el inglés lo separa.",
          literal: "llevar puesto",
          useWhen:
            "Al describir lo que alguien lleva: “she's wearing a red dress”, “I always wear black”.",
          avoidWhen:
            "Hablas de la acción de ponérselo en el momento; ahí es “put on”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["have on", "put on", "dressed in", "in (black)"],
          example: {
            target: "She's wearing a red dress.",
            translation: "Lleva un vestido rojo."
          }
        },
        {
          term: "to play music",
          explanation:
            "Reproducir música — el “poner música” del español. “Play” aquí no es tocar un instrumento.",
          literal: "poner/reproducir música",
          useWhen:
            "Al poner música grabada: “play some music”, “play a song”, “put on music”.",
          avoidWhen:
            "Quieres decir tocar un instrumento; eso también es “play”, pero con el instrumento (“play the guitar”).",
          register: "neutral",
          region: "Inglés general.",
          related: ["put on music", "play a song", "turn on", "stream"],
          example: {
            target: "Should I put on some music?",
            translation: "¿Pongo música?"
          }
        },
        {
          term: "to get + adjetivo",
          explanation:
            "La forma corriente de “volverse/ponerse” — un cambio de estado o de ánimo: “get nervous”, “get tired”.",
          literal: "conseguir / volverse",
          useWhen:
            "Al marcar un cambio: “get nervous”, “it gets fun”, “I get tired”.",
          avoidWhen:
            "Calcas “ponerse” como “put”; “put nervous” no existe en inglés, es “get nervous”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["become", "turn", "go", "get tired"],
          example: {
            target: "Don't get nervous.",
            translation: "No te pongas nervioso."
          }
        },
        {
          term: "to get on it",
          explanation:
            "Ponerse manos a la obra, arrancar con la tarea — muy cercano a “ponerse pilas”.",
          literal: "ponerse sobre ello",
          useWhen:
            "Al comprometerte a empezar ya: “I'll get on it”, “let's get on it”.",
          avoidWhen:
            "Un registro muy formal; ahí encaja mejor “I'll take care of it”.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["get to it", "get going", "get cracking", "get started"],
          example: {
            target: "I'll get on it then.",
            translation: "Me pongo pilas entonces."
          }
        },
        {
          term: "to turn up",
          explanation:
            "Subir el volumen — un phrasal fijo. Su opuesto es “turn down” (bajarlo).",
          literal: "girar arriba",
          useWhen:
            "Al pedir más volumen: “turn it up”, “can you turn the music up?”.",
          avoidWhen:
            "Quieres apagarlo o bajarlo; eso es “turn off” o “turn down”.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["turn down", "turn off", "crank it up", "volume"],
          example: {
            target: "Turn it up.",
            translation: "Súbele."
          }
        },
        {
          term: "to show up",
          explanation:
            "Aparecer, llegar a un sitio — el “llegar/asomarse” del español, en registro coloquial.",
          literal: "mostrarse arriba",
          useWhen:
            "Al hablar de gente que llega: “people are about to show up”, “nobody showed up”.",
          avoidWhen:
            "Un contexto formal de asistencia; ahí “attend” o “arrive” suenan mejor.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["turn up", "arrive", "come over", "get here"],
          example: {
            target: "People are about to show up.",
            translation: "Ya van a llegar."
          }
        }
      ],
      note:
        "Donde el español usa “poner/ponerse” para todo, el inglés reparte el trabajo. Vestirse en el momento es “put on” (con “on”); llevar puesto es “wear”. Poner música es “play” o “put on”. Y volverse algo — nervioso, cansado, divertido — es “get” + adjetivo, nunca “put”. El error estrella del hispanohablante es calcar “ponerse nervioso” como “put nervous”: en inglés siempre es “get nervous”.",
      culture: [
        {
          label: "La cena entre amigos es informal",
          body:
            "En Canadá y Estados Unidos, una cena entre amigos en casa suele ser relajada y de poca etiqueta: la gente llega en ropa cómoda, trae algo de beber y ayuda en la cocina sin que se lo pidan dos veces. Alejandra encaja bien ofreciéndose a colaborar, pero conviene que baje el nivel de formalidad que traería de una reunión colombiana más arreglada: aquí lo esperado es soltura, no protocolo, y sentirse en casa se valora más que impresionar."
        },
        {
          label: "El inglés separa lo que el español junta",
          body:
            "El español resuelve con “poner/ponerse” un abanico de ideas que el inglés distribuye entre verbos distintos: “put on” para vestirse, “wear” para llevar puesto, “play” para la música, “get” para volverse algo. Para el hispanohablante esto obliga a frenar y elegir, porque el reflejo es traducir siempre “poner” por “put”. Interiorizar que cada sentido tiene su verbo propio es uno de los saltos que más naturaliza el inglés de alguien que viene del español."
        },
        {
          label: "“Get” es el gran comodín del cambio",
          body:
            "En inglés cotidiano, “get” + adjetivo es la manera normal de decir que algo cambia de estado: get tired, get angry, get dark, get better. Cubre buena parte de lo que el español reparte entre “ponerse”, “volverse” y “quedarse”. Es coloquial y muy frecuente; en registro escrito o formal se prefiere “become”. Para Alejandra, adueñarse de “get” + adjetivo resuelve de golpe decenas de frases que de otro modo sonarían calcadas o rebuscadas."
        },
        {
          label: "Los phrasal verbs se parten",
          body:
            "Una peculiaridad que descoloca al hispanohablante es que muchos phrasal verbs se separan y el objeto va en medio: “turn it up”, “get the plates out”, “put your jacket on”. No se dice “turn up it”. Cuando el objeto es un pronombre (it, them), casi siempre va en el medio; cuando es un sustantivo, puede ir en medio o al final. Acostumbrarse a partir el phrasal es clave para que el inglés hablado suene natural y no rígido."
        }
      ],
      pitfalls: [
        {
          mistake: "“Don't put nervous.”",
          whyItFails:
            "“Put nervous” no existe en inglés. Para volverse algo se usa “get” + adjetivo, así que es “don't get nervous”.",
          sayInstead: "Don't get nervous."
        },
        {
          mistake: "Saying “I put music” without the “on”",
          whyItFails:
            "Sin “on”, “put music” queda incompleto y raro. Para reproducir música es “put on music” o “play music”.",
          sayInstead: "I'll put on some music. / I'll play some music."
        },
        {
          mistake: "“I'm wearing my coat” for the act of putting it on",
          whyItFails:
            "“Wear” es el estado de llevarlo puesto; la acción de ponértelo en ese momento es “put on”. Se dice “I'm putting my coat on”.",
          sayInstead: "I'm putting my coat on."
        },
        {
          mistake: "“Turn up it” instead of “turn it up”",
          whyItFails:
            "Con pronombre, el phrasal verb se parte y el pronombre va en medio. “Turn up it” suena claramente incorrecto.",
          sayInstead: "Turn it up."
        }
      ],
      variations: [
        {
          form: "Get on it.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Al comprometerte a empezar una tarea de inmediato — “me pongo con eso ya”."
        },
        {
          form: "Get to it.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Muy parecido, con un matiz de por fin ponerse a hacer algo pendiente."
        },
        {
          form: "Let's get going.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Para arrancar entre varios — “pongámonos pilas”, “arranquemos”."
        },
        {
          form: "Get cracking.",
          register: "friendly informal",
          region: "Inglés general, algo más británico",
          whenToUse: "Coloquial y enérgico, para empezar con ganas una tarea."
        },
        {
          form: "I'm on it.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Para decir que ya te encargas de algo — “yo me encargo”, “ya voy”."
        }
      ],
      prompt: "Alejandra quiere decir “no te pongas nervioso”. ¿Cuál es la forma correcta en inglés?",
      choices: [
        "Don't put nervous, we are all just friends here and there is really nothing to worry about tonight.",
        "Don't wear nervous tonight, because the people who are coming over are only some close friends of ours.",
        "Don't get nervous — it's just friends coming over, so there's honestly nothing at all to worry about."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Para la acción de vestirse en el momento, ¿qué verbo usa el inglés?",
          choices: [
            "“Wear”, que sirve igual para la acción de vestirse y para el estado de llevarlo puesto.",
            "“Put on”, con “on” obligatorio; “wear” es solo el estado de llevarlo ya puesto encima.",
            "“Dress up”, que es la única forma correcta de decir tanto ponerse como llevar puesto algo."
          ],
          answer: 1,
          tests: "put on vs wear"
        },
        {
          prompt: "¿Por qué “I put music” suena mal?",
          choices: [
            "Porque a “put” le falta “on”: para reproducir música es “put on music” o “play music”.",
            "Porque “music” siempre exige el artículo “the” delante en cualquier oración en inglés.",
            "Porque “put” jamás puede ir con “music” y hay que decir obligatoriamente “touch music”."
          ],
          answer: 0,
          tests: "put on music vs put music"
        },
        {
          prompt: "“It gets fun once everyone's here.” ¿Qué hace “get” con el adjetivo?",
          choices: [
            "Marca la acción física de colocar algo divertido en medio de la sala antes de la cena.",
            "Marca una obligación de divertirse en cuanto lleguen todos los amigos al apartamento.",
            "Marca un cambio de estado — “se pone divertido”: para volverse algo, el inglés usa “get”."
          ],
          answer: 2,
          tests: "get + adjetivo = cambio de estado"
        },
        {
          prompt: "Alejandra dice “I'll get on it.” ¿Qué está diciendo?",
          choices: [
            "Que se pone pilas y arranca ya con la tarea — se pone manos a la obra de una vez.",
            "Que se va a sentar encima de algo porque no encuentra dónde más acomodarse en la sala.",
            "Que prefiere no ayudar esta vez y que Chloe se encargue sola de dejar todo listo."
          ],
          answer: 0,
          tests: "get on it = ponerse pilas"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/06-foundation-obligation.js");
