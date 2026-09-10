/*
 * Lesson block: foundation / identity and state.
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
    id: "who-you-are-at-the-building-meeting",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "context"],
    domain: "everyday life",
    register: "friendly informal",
    pathways: ["foundation"],
    verb: "ser",
    review: "pending",
    es: {
      title: "Saying who you are at the building meeting",
      situation:
        "Alex has just moved into a Medellín apartment block and turns up to the monthly residents' meeting. Nobody knows him yet. He has to say who he is, where he lives in the building, and what he does — in about four sentences, to a room that is only half listening.",
      setting: {
        who: "Doña Ruth has chaired the residents' meeting for nine years and knows every apartment by number. Alex is the newest resident and has spoken to nobody in the building except the porter.",
        what: "A short round of introductions at the start of the meeting, before the agenda about the water tank.",
        when: "A Tuesday evening, seven o'clock, in the ground-floor common room.",
        where: "Medellín, a six-storey block in Laureles where most residents have lived for a decade or more.",
        why: "Because Alex will be asking these people for favours — a signature, a parcel taken in, patience about noise — for as long as he lives here. The introduction is the whole relationship in miniature."
      },
      address: {
        form: "usted",
        who: "Doña Ruth uses usted with Alex, and Alex uses usted back.",
        why: "Paisa Spanish leans on usted far more than Bogotá does, and a first meeting with an older woman who chairs the meeting is exactly where it belongs. Usted here is warmth with a little formality, not coldness.",
        ifYouSwitch:
          "Tú would not offend, but it would sound like Alex had decided the friendship was already settled. Vos is common in Medellín between people who know each other; using it on night one would land as over-familiar."
      },
      dialogue: [
        {
          speaker: "Doña Ruth",
          target: "Bueno, tenemos vecino nuevo. ¿Usted quién es?",
          translation: "Right, we have a new neighbour. Who are you?",
          pronunciation: "BWEH-noh, teh-NEH-mos beh-SEE-noh NWEH-boh. oos-TED KYEN es",
          literal: "Good, we-have neighbour new. You who are?",
          why: "“¿Usted quién es?” is blunt on paper and perfectly warm in the room. Colombian Spanish often puts the pronoun first for emphasis, and dropping it would make the question sound more clinical, not more polite."
        },
        {
          speaker: "Alex",
          target: "Soy Alex, del 502. Soy canadiense.",
          translation: "I'm Alex, from 502. I'm Canadian.",
          pronunciation: "soy AH-leks, del SEEN-koh-DOS. soy ka-na-DYEN-seh",
          literal: "I-am Alex, of-the 502. I-am Canadian.",
          why: "Three uses of ser in one breath: name, address, nationality. All three are the kind of fact that does not change by Thursday, which is exactly ser's territory."
        },
        {
          speaker: "Doña Ruth",
          target: "¡Ah, del 502! Entonces usted es el del perro.",
          translation: "Ah, 502! So you're the one with the dog.",
          pronunciation: "ah, del SEEN-koh-DOS. en-TON-ses oos-TED es el del PEH-rroh",
          literal: "Ah, of-the 502! Then you are the-one of-the dog.",
          why: "“El del perro” — literally “the one of the dog” — is how Spanish builds an identity out of a possession without a relative clause. English needs “the one who has the dog”; Spanish just needs two little words."
        },
        {
          speaker: "Alex",
          target: "Sí, ese soy yo. Es un perro viejo, no ladra mucho.",
          translation: "Yes, that's me. He's an old dog, he doesn't bark much.",
          pronunciation: "see, EH-seh soy yo. es oon PEH-rroh BYEH-hoh, no LAH-dra MOO-choh",
          literal: "Yes, that am I. He-is a dog old, not he-barks much.",
          why: "“Ese soy yo” inverts the English order and is the standard way to claim an identity someone else has just handed you. Saying “yo soy ese” is grammatical but sounds like a correction."
        },
        {
          speaker: "Doña Ruth",
          target: "Tranquilo. ¿Y usted a qué se dedica?",
          translation: "No worries. And what do you do?",
          pronunciation: "tran-KEE-loh. ee oos-TED a ke se deh-DEE-ka",
          literal: "Calm. And you to what yourself dedicate?",
          why: "“¿A qué se dedica?” is the polite form of the job question. “¿Cuál es su trabajo?” is understood but sounds like a form; this one sounds like a person asking."
        },
        {
          speaker: "Alex",
          target: "Soy profesor, pero ahora estoy sin trabajo fijo.",
          translation: "I'm a teacher, but right now I'm without steady work.",
          pronunciation: "soy pro-feh-SOR, PEH-roh a-OH-ra es-TOY seen tra-BA-ho FEE-ho",
          literal: "I-am teacher, but now I-am without work fixed.",
          why: "The pivot the whole lesson turns on: ser for the profession that defines him, estar for the situation that happens to be true this month. Swapping them would say something quite different about how he sees himself."
        }
      ],
      vocabulary: [
        {
          term: "ser",
          explanation:
            "The “be” of identity — who or what something fundamentally is: name, origin, profession, material, the hour, the owner.",
          literal: "to be (essentially)",
          useWhen:
            "Naming yourself, saying where you are from, giving your job, saying who something belongs to, or telling the time and date.",
          avoidWhen:
            "Describing a mood, a location, or anything that could reasonably be different next week. That is estar's job, and using ser there sounds like you are making a permanent claim.",
          register: "neutral",
          region: "Universal Spanish. The ser/estar split works the same across every dialect; only the examples change.",
          related: ["estar", "haber", "parecer", "quedar"],
          example: {
            target: "Soy Alex, del 502.",
            translation: "I'm Alex, from 502."
          }
        },
        {
          term: "¿A qué se dedica?",
          explanation:
            "The everyday polite way to ask what someone does for a living, in the usted form.",
          literal: "To what does one dedicate oneself?",
          useWhen:
            "Meeting an adult you are being formal with — a neighbour, a client, a friend's parent.",
          avoidWhen:
            "Talking to someone you are already using tú or vos with. Then it stiffens the conversation; “¿y vos qué hacés?” fits far better.",
          register: "polite formal",
          region: "General Colombian and widely understood across Latin America.",
          related: ["¿Qué haces?", "¿En qué trabaja?", "¿Cuál es su profesión?", "¿Y vos qué hacés?"],
          example: {
            target: "¿Y usted a qué se dedica?",
            translation: "And what do you do?"
          }
        },
        {
          term: "el del perro",
          explanation:
            "“The one with the dog.” A compact way to identify someone by a thing associated with them.",
          literal: "the [one] of the dog",
          useWhen:
            "Pinning down which person you mean when the group already half-knows them — the one with the red car, the one from the fifth floor.",
          avoidWhen:
            "Introducing someone properly. It identifies but does not dignify; using it to someone's face about a sore subject can sting.",
          register: "friendly informal",
          region: "General Colombian; the construction is universal Spanish.",
          related: ["la del quinto", "el de la moto", "la de la tienda", "el del carro rojo"],
          example: {
            target: "Entonces usted es el del perro.",
            translation: "So you're the one with the dog."
          }
        },
        {
          term: "ese soy yo",
          explanation:
            "“That's me.” Used to confirm an identity someone else has just described.",
          literal: "that am I",
          useWhen:
            "Someone has guessed who you are and you are agreeing, usually with a bit of humour.",
          avoidWhen:
            "Introducing yourself cold. It only works as an answer, never as an opener.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["yo soy", "ese mismo", "el mismo", "así es"],
          example: {
            target: "Sí, ese soy yo.",
            translation: "Yes, that's me."
          }
        },
        {
          term: "tranquilo",
          explanation:
            "“No worries” — reassurance that whatever you just apologised for or explained is not a problem.",
          literal: "calm",
          useWhen:
            "Waving off someone's worry, or being waved off yourself. Extremely frequent in Colombia.",
          avoidWhen:
            "Someone is genuinely upset about something you did. Then it reads as dismissive rather than kind.",
          register: "friendly informal",
          region: "General Colombian; “tranquilo/a” agrees with the person you are reassuring.",
          related: ["tranquila", "no hay lío", "fresco", "no pasa nada"],
          example: {
            target: "Tranquilo, el perro no molesta.",
            translation: "No worries, the dog isn't a bother."
          }
        },
        {
          term: "sin trabajo fijo",
          explanation:
            "“Without steady work.” The usual way to say you are freelancing or between jobs without claiming to be unemployed.",
          literal: "without work fixed",
          useWhen:
            "Being honest about an unsettled situation in a way that keeps its dignity.",
          avoidWhen:
            "A formal application. There you would say “trabajo independiente” or name the contract.",
          register: "neutral",
          region: "General Colombian.",
          related: ["trabajo independiente", "por contrato", "en la informalidad", "buscando trabajo"],
          example: {
            target: "Ahora estoy sin trabajo fijo.",
            translation: "Right now I'm without steady work."
          }
        },
        {
          term: "del 502",
          explanation:
            "“From 502.” In a Colombian apartment block, your flat number is a normal way to identify yourself.",
          literal: "of-the 502",
          useWhen:
            "Any building context — the meeting, the porter's desk, a parcel, a complaint.",
          avoidWhen:
            "Outside the building, where the number means nothing and you would give the neighbourhood instead.",
          register: "neutral",
          region: "General Colombian urban usage.",
          related: ["del quinto piso", "de la 502", "el apartamento 502", "de la torre dos"],
          example: {
            target: "Soy Alex, del 502.",
            translation: "I'm Alex, from 502."
          }
        }
      ],
      note:
        "The single most useful thing in this lesson is the last line of dialogue. “Soy profesor” and “estoy sin trabajo” sit side by side because Spanish makes you choose, every time, between what you are and how things currently stand. English lets you blur it. Spanish does not.",
      culture: [
        {
          label: "Your flat number is your name",
          body:
            "In Colombian apartment blocks, residents are routinely known by number long before they are known by name — “el 502”, “la señora del 301”. It is not impersonal; it is how a building of eighty strangers stays navigable. Offering your number when you introduce yourself is genuinely helpful, and leaving it out makes you harder to place."
        },
        {
          label: "Usted is warmer in Medellín than the textbook suggests",
          body:
            "Textbooks teach usted as the distant form. In Antioquia it is often the default with everyone, including close family and small children. A paisa saying usted to you is not keeping you at arm's length — they may simply have never used anything else. Reading it as coldness is one of the most common mistakes foreigners make in Medellín."
        },
        {
          label: "The introduction is short on purpose",
          body:
            "Alex gives his name, his flat and his nationality in one line and stops. Colombian introductions in a group setting stay brief; the detail comes later, one-to-one, over coffee. Delivering a paragraph about yourself to the room reads as taking up more than your share of a meeting that has an agenda."
        },
        {
          label: "Being asked about the dog is being accepted",
          body:
            "Doña Ruth's “usted es el del perro” means the building has already noticed him and discussed him. That sounds like surveillance and is closer to welcome — it means he registers as a neighbour rather than a stranger. Bristling at it would be reading a Colombian building the way you would read an anonymous one."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “Estoy profesor” for “I'm a teacher”",
          whyItFails:
            "Professions take ser, because Spanish treats them as identity rather than circumstance. Estar there sounds like you are temporarily occupying the role of a teacher, which is not what you mean.",
          sayInstead: "Soy profesor."
        },
        {
          mistake: "Saying “Soy sin trabajo” for “I'm out of work”",
          whyItFails:
            "That makes joblessness part of who you are rather than where you currently stand. Colombians hear the difference clearly, and the ser version sounds bleaker than intended.",
          sayInstead: "Estoy sin trabajo fijo."
        },
        {
          mistake: "Answering “¿Usted quién es?” with only a first name",
          whyItFails:
            "The question in a building meeting is asking where you fit, not what you are called. A bare name leaves everyone still wondering which apartment you are.",
          sayInstead: "Soy Alex, del 502."
        },
        {
          mistake: "Switching to tú because Doña Ruth seems friendly",
          whyItFails:
            "Warmth and usted are not opposites in Antioquia. Reading her friendliness as an invitation to drop usted moves faster than she did, and the room notices.",
          sayInstead: "Keep usted until she uses tú or vos with you first."
        }
      ],
      variations: [
        {
          form: "Soy Alex, del 502.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The default. Name plus flat number, nothing else."
        },
        {
          form: "Mucho gusto, Alex, apartamento 502.",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "A more formal room — a board meeting, or introducing yourself to the administrator."
        },
        {
          form: "Qué más, soy Alex, el nuevo del quinto.",
          register: "friendly informal",
          region: "Medellín and Antioquia",
          whenToUse: "A relaxed gathering where “qué más” is already flying around the room."
        },
        {
          form: "Buenas, mi nombre es Alex y vivo en el 502.",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "Writing it, or saying it to someone taking notes. Fuller and slightly stiffer."
        },
        {
          form: "Yo soy el del 502, el del perro.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Once you know the building already has a shorthand for you, and you are leaning into it."
        }
      ],
      prompt: "Alex says “Soy profesor, pero ahora estoy sin trabajo fijo.” What is he telling the room?",
      choices: [
        "That teaching is what he is, and the lack of steady work is where he happens to be right now.",
        "That he used to be a teacher some years ago and has since changed careers entirely.",
        "That he is temporarily working as a teacher while he looks for something permanent."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Doña Ruth says “Entonces usted es el del perro.” What has just happened?",
          choices: [
            "She is asking him to confirm whether he owns a dog at all.",
            "She has placed him — the building already knows who he is.",
            "She is warning him that dogs are not allowed in the building."
          ],
          answer: 1,
          tests: "“el del …” as an identifying shorthand rather than a question"
        },
        {
          prompt: "Why does Alex answer with “del 502” rather than just his name?",
          choices: [
            "Because Colombians consider first names too informal at a first meeting.",
            "Because the flat number is required by law at residents' meetings.",
            "Because in a building the flat number is how people place each other."
          ],
          answer: 2,
          tests: "the apartment number as ordinary self-identification"
        },
        {
          prompt: "Doña Ruth uses usted with Alex all evening. What should he read into it?",
          choices: [
            "Nothing cold — in Antioquia usted is the ordinary form, even between close people.",
            "That she considers him an outsider and wants to keep her distance from him.",
            "That she is much older and expects to be addressed as a superior would be."
          ],
          answer: 0,
          tests: "paisa usted as default rather than distance"
        },
        {
          prompt: "Which of these would sound wrong in Alex's introduction?",
          choices: [
            "Soy canadiense.",
            "Estoy canadiense.",
            "Soy profesor."
          ],
          answer: 1,
          tests: "nationality as ser territory"
        }
      ]
    },
    en: {
      title: "Decir quién es usted en la reunión del edificio",
      situation:
        "Alejandra acaba de mudarse a un edificio en Toronto y va a la reunión mensual de residentes. Todavía nadie la conoce. Tiene que decir quién es, en qué apartamento vive y a qué se dedica — en unas cuatro frases, ante una sala que sólo está medio escuchando.",
      setting: {
        who: "Ruth preside la reunión de residentes desde hace nueve años y conoce cada apartamento por su número. Alejandra es la residente más nueva y no ha hablado con nadie del edificio salvo con el portero.",
        what: "Una ronda breve de presentaciones al comienzo de la reunión, antes del punto sobre el tanque de agua.",
        when: "Un martes por la noche, a las siete, en el salón comunal de la planta baja.",
        where: "Toronto, un edificio de seis pisos donde la mayoría de los residentes lleva una década o más.",
        why: "Porque Alejandra le va a pedir favores a esta gente — una firma, que le reciban un paquete, paciencia con el ruido — durante todo el tiempo que viva ahí. La presentación es la relación entera en miniatura."
      },
      address: {
        form: "mixed",
        who: "Ruth y Alejandra se tratan por el nombre de pila y usan el mismo “you” desde la primera línea.",
        why: "El inglés tiene una sola forma de segunda persona, así que el registro lo carga todo lo demás: nombres de pila en vez de títulos, “hi” en vez de “good evening”, y frases cortas. La cercanía está en la elección de palabras, no en el pronombre.",
        ifYouSwitch:
          "Decirle “ma'am” a Ruth no ofendería, pero la haría sentir mayor y pondría un mostrador entre las dos. Resérvelo para alguien que la atiende en calidad oficial."
      },
      dialogue: [
        {
          speaker: "Ruth",
          target: "Okay, we've got a new neighbour. And you are?",
          translation: "Bueno, tenemos vecina nueva. ¿Usted quién es?",
          pronunciation: "o-KEI, uiv got a niu NEI-bor. and yu AR",
          literal: "Bueno, tenemos una vecina nueva. ¿Y usted es?",
          why: "“And you are?” es una pregunta a la que le quitaron la palabra interrogativa. Escrita se ve brusca y hablada es completamente amable, porque la entonación ascendente hace el trabajo que haría “who”."
        },
        {
          speaker: "Alejandra",
          target: "I'm Alejandra, unit 502. I'm from Colombia.",
          translation: "Soy Alejandra, del 502. Soy de Colombia.",
          pronunciation: "aim a-le-JAN-dra, YU-nit faiv-ou-TU. aim from ko-LOM-bia",
          literal: "Soy Alejandra, unidad 502. Soy de Colombia.",
          why: "El inglés usa un solo verbo, “be”, donde el español escogería entre ser y estar. La decisión que a usted le cuesta trabajo aquí simplemente no existe — y eso trae su propia trampa al volver al español."
        },
        {
          speaker: "Ruth",
          target: "Oh, 502! So you're the one with the dog.",
          translation: "¡Ah, el 502! Entonces usted es la del perro.",
          pronunciation: "ou, faiv-ou-TU! so yur da UAN uid da dog",
          literal: "¡Oh, 502! Así que usted es la una con el perro.",
          why: "El inglés necesita la estructura completa “the one with” donde el español se arregla con “la del”. Quitar “one” — “you're the with the dog” — es imposible, y es un error muy común de los hispanohablantes."
        },
        {
          speaker: "Alejandra",
          target: "Yes, that's me. He's an old dog, he doesn't bark much.",
          translation: "Sí, esa soy yo. Es un perro viejo, no ladra mucho.",
          pronunciation: "yes, dats MI. jis an OULD dog, ji DA-sent bark mach",
          literal: "Sí, eso es mí. Él es un perro viejo, él no ladra mucho.",
          why: "“That's me” usa el pronombre de objeto donde el español usa el de sujeto. “That's I” es defendible en teoría y sonaría rarísimo; nadie lo dice."
        },
        {
          speaker: "Ruth",
          target: "No worries. And what do you do?",
          translation: "Tranquila. ¿Y usted a qué se dedica?",
          pronunciation: "nou UO-ris. and UAT du yu DU",
          literal: "No preocupaciones. ¿Y qué hace usted?",
          why: "“What do you do?” sin complemento es la pregunta estándar por el oficio. Añadir “for a living” es posible pero un poco más formal; añadir “for work” suena a encuesta."
        },
        {
          speaker: "Alejandra",
          target: "I'm a teacher, but right now I'm between jobs.",
          translation: "Soy profesora, pero ahora estoy sin trabajo fijo.",
          pronunciation: "aim a TI-cher, bat rait nau aim bi-TUIN yobs",
          literal: "Soy una profesora, pero justo ahora estoy entre trabajos.",
          why: "El inglés marca con “right now” la diferencia que el español lleva en ser frente a estar. Sin ese “right now” las dos frases quedarían al mismo nivel y la oración sonaría contradictoria."
        }
      ],
      vocabulary: [
        {
          term: "be",
          explanation:
            "El único verbo del inglés que cubre todo lo que el español reparte entre ser y estar: identidad, origen, oficio, ánimo, ubicación y estado.",
          literal: "ser / estar",
          useWhen:
            "Siempre. No hay que elegir, y esa es la buena noticia; la mala es que la distinción tiene que cargarla otra palabra.",
          avoidWhen:
            "Al describir una acción en curso sin la forma -ing. “I am work” es el error clásico del hispanohablante cuando quiere decir “I am working” o “I work”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["become", "seem", "feel", "get"],
          example: {
            target: "I'm Alejandra, unit 502.",
            translation: "Soy Alejandra, del 502."
          }
        },
        {
          term: "What do you do?",
          explanation:
            "La manera corriente de preguntar por el oficio de alguien. Es corta, y se entiende como una pregunta por el trabajo y no por esta tarde.",
          literal: "¿Qué hace usted?",
          useWhen:
            "Al conocer a cualquiera en una situación social. Funciona en casi todos los registros del inglés.",
          avoidWhen:
            "Cuando quiere saber qué está haciendo alguien en este momento. Ahí tiene que ser “what are you doing?”, y la diferencia entre las dos es total.",
          register: "neutral",
          region: "Inglés universal; “what do you do for a living?” es un poco más completo.",
          related: ["What's your job?", "What line of work are you in?", "Where do you work?", "What do you do for a living?"],
          example: {
            target: "And what do you do?",
            translation: "¿Y usted a qué se dedica?"
          }
        },
        {
          term: "the one with the dog",
          explanation:
            "Una forma de identificar a alguien por algo que se le asocia, usando “the one” como persona comodín.",
          literal: "el/la del perro",
          useWhen:
            "Para precisar de quién habla cuando el grupo ya lo ubica a medias — el del carro rojo, la del quinto piso.",
          avoidWhen:
            "Al presentar a alguien formalmente. Identifica pero no dignifica, y dicho en la cara sobre un tema sensible puede doler.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["the one on the fifth floor", "the one with the bike", "the guy from 502", "the woman with the stroller"],
          example: {
            target: "So you're the one with the dog.",
            translation: "Entonces usted es la del perro."
          }
        },
        {
          term: "that's me",
          explanation:
            "“Esa soy yo.” Sirve para confirmar una identidad que otra persona acaba de describir.",
          literal: "eso es mí",
          useWhen:
            "Cuando alguien adivinó quién es usted y usted se lo confirma, casi siempre con algo de humor.",
          avoidWhen:
            "Al presentarse en frío. Sólo funciona como respuesta, nunca para abrir.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["that would be me", "guilty", "yep, that's me", "the very same"],
          example: {
            target: "Yes, that's me.",
            translation: "Sí, esa soy yo."
          }
        },
        {
          term: "no worries",
          explanation:
            "Una manera de decir que aquello por lo que el otro se disculpó o que acaba de explicar no es ningún problema.",
          literal: "no preocupaciones",
          useWhen:
            "Para quitarle peso a la preocupación del otro, o cuando se lo quitan a usted. Muy frecuente en Canadá y Australia.",
          avoidWhen:
            "Cuando la otra persona está genuinamente molesta por algo que usted hizo. Ahí suena a que la está despachando, no a amabilidad.",
          register: "friendly informal",
          region: "Inglés universal; “no worries” abunda en Canadá y Australia, y “no problem” en Estados Unidos.",
          related: ["no problem", "don't worry about it", "it's fine", "all good"],
          example: {
            target: "No worries, the dog isn't a bother.",
            translation: "Tranquila, el perro no molesta."
          }
        },
        {
          term: "between jobs",
          explanation:
            "“Entre trabajos.” La manera habitual de decir que uno no tiene empleo en este momento sin decir “unemployed”.",
          literal: "entre trabajos",
          useWhen:
            "Para ser honesto sobre una situación inestable sin perder la dignidad.",
          avoidWhen:
            "En una solicitud formal. Ahí escribiría “seeking employment” o nombraría el contrato que tiene.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["freelancing", "in between things", "looking for work", "self-employed"],
          example: {
            target: "Right now I'm between jobs.",
            translation: "Ahora estoy sin trabajo fijo."
          }
        },
        {
          term: "unit 502",
          explanation:
            "“Unidad 502.” En un edificio norteamericano, el número del apartamento es una forma normal de identificarse.",
          literal: "unidad 502",
          useWhen:
            "En cualquier asunto del edificio — la reunión, la recepción, un paquete, un reclamo.",
          avoidWhen:
            "Fuera del edificio, donde el número no significa nada y uno diría el barrio.",
          register: "neutral",
          region: "Inglés norteamericano; en el inglés británico se dice “flat 502”.",
          related: ["apartment 502", "flat 502", "the fifth floor", "502"],
          example: {
            target: "I'm Alejandra, unit 502.",
            translation: "Soy Alejandra, del 502."
          }
        }
      ],
      note:
        "Lo más útil de esta lección es la última línea del diálogo. El inglés dice “I'm a teacher” y “I'm between jobs” con el mismo verbo, y se apoya en “right now” para separarlas. Un hispanohablante que se coma ese “right now” será entendido como si las dos cosas pesaran igual.",
      culture: [
        {
          label: "El número del apartamento es su nombre",
          body:
            "En los edificios norteamericanos a los residentes se los conoce por número mucho antes que por nombre — “502”, “la señora del 301”. No es frialdad; es como un edificio de ochenta desconocidos sigue siendo navegable. Dar su número al presentarse ayuda de verdad, y omitirlo lo vuelve a usted más difícil de ubicar."
        },
        {
          label: "El inglés marca el registro sin cambiar el pronombre",
          body:
            "Los hispanohablantes suelen buscar el usted del inglés y, al no encontrarlo, concluyen que el inglés es uniformemente informal. No lo es. La formalidad vive en el vocabulario y en el largo de la frase: “Could I possibly ask you to…” frente a “Can you…”. Aprender a oír esa escala reemplaza el aprender un pronombre."
        },
        {
          label: "La presentación es corta a propósito",
          body:
            "Alejandra da su nombre, su apartamento y su procedencia en una línea y se detiene. Las presentaciones en grupo se mantienen breves; el detalle viene después, uno a uno, sobre un café. Soltarle un párrafo sobre uno mismo a una sala que tiene agenda se lee como ocupar más de lo que a uno le toca."
        },
        {
          label: "Que le pregunten por el perro es ser aceptada",
          body:
            "El “you're the one with the dog” de Ruth significa que el edificio ya la notó y ya habló de ella. Eso suena a vigilancia y se parece más a una bienvenida — quiere decir que ya figura como vecina y no como desconocida. Molestarse sería leer mal la sala."
        }
      ],
      pitfalls: [
        {
          mistake: "“I am teacher.”",
          whyItFails:
            "El inglés exige un artículo antes de una profesión en singular, justo donde el español lo prohíbe. “Soy profesora” no lleva artículo, y arrastrar esa costumbre produce el error de hispanohablante más reconocible que existe en inglés.",
          sayInstead: "I'm a teacher."
        },
        {
          mistake: "“I have 30 years.”",
          whyItFails:
            "El español usa tener para la edad; el inglés usa be. La traducción literal es inglés gramatical que significa otra cosa por completo — suena a que uno posee tres décadas de algo.",
          sayInstead: "I'm 30."
        },
        {
          mistake: "Contestar “And you are?” sólo con el nombre de pila",
          whyItFails:
            "La pregunta en una reunión de edificio no es cómo se llama usted, sino dónde encaja. Un nombre a secas deja a toda la sala preguntándose de qué apartamento es.",
          sayInstead: "I'm Alejandra, unit 502."
        },
        {
          mistake: "“What are you doing?” cuando se quiere decir “What do you do?”",
          whyItFails:
            "La forma continua pregunta por este preciso instante. Dicha en una presentación suena a que uno acaba de sorprender al otro haciendo algo.",
          sayInstead: "What do you do?"
        }
      ],
      variations: [
        {
          form: "I'm Alejandra, unit 502.",
          register: "neutral",
          region: "Inglés norteamericano",
          whenToUse: "La opción por defecto. Nombre y número de apartamento, nada más."
        },
        {
          form: "Hi, I'm Alejandra — I'm in 502.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Una sala relajada donde la gente se pisa las frases de todos modos."
        },
        {
          form: "Good evening, my name is Alejandra and I live in unit 502.",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Una reunión de junta, o presentarse ante el administrador del edificio."
        },
        {
          form: "Alejandra, 502. Just moved in.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Cuando la ronda de presentaciones va rápido y nadie quiere una frase entera."
        },
        {
          form: "I'm the one in 502 — the one with the dog.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Cuando ya sabe que el edificio tiene un apodo para usted y decide aprovecharlo."
        }
      ],
      prompt: "Alejandra dice “I'm a teacher, but right now I'm between jobs.” ¿Qué le está diciendo a la sala?",
      choices: [
        "Que enseñar es lo que ella es, y que la falta de trabajo estable es donde está en este momento.",
        "Que fue profesora hace algunos años y que desde entonces cambió de carrera por completo.",
        "Que está trabajando de profesora temporalmente mientras busca algo más permanente."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Ruth dice “So you're the one with the dog.” ¿Qué acaba de pasar?",
          choices: [
            "Le está preguntando si de verdad tiene un perro o si se confundieron.",
            "Ya la ubicó — el edificio sabe perfectamente quién es ella.",
            "Le está advirtiendo que en el edificio no se permiten perros."
          ],
          answer: 1,
          tests: "“the one with …” como identificación y no como pregunta"
        },
        {
          prompt: "¿Por qué Alejandra responde con “unit 502” y no sólo con su nombre?",
          choices: [
            "Porque aquí los nombres de pila se consideran demasiado informales al conocerse.",
            "Porque el número de apartamento es obligatorio por ley en estas reuniones.",
            "Porque en un edificio el número es como la gente ubica a los demás."
          ],
          answer: 2,
          tests: "el número del apartamento como identificación corriente"
        },
        {
          prompt: "El inglés no tiene usted. ¿Cómo se marca entonces la formalidad de una sala?",
          choices: [
            "Con la elección de palabras y el largo de la frase, no con el pronombre.",
            "Con el pronombre “thou”, que todavía se usa hoy en contextos formales.",
            "No se marca de ninguna manera: el inglés tiene un solo registro plano."
          ],
          answer: 0,
          tests: "el registro marcado por el léxico y no por el pronombre"
        },
        {
          prompt: "¿Cuál de estas sonaría mal en la presentación de Alejandra?",
          choices: [
            "I'm a teacher.",
            "I am teacher.",
            "I'm from Colombia."
          ],
          answer: 1,
          tests: "el artículo antes de una profesión en singular"
        }
      ]
    }
  }
);
