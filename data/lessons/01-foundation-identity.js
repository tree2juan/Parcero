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
 * This block now also includes one GRAMMAR lesson on ser-vs-estar, because ser
 * and estar appear on nearly every page while no lesson contrasts them. It
 * teaches the decision as identity versus state, with the adjective pairs that
 * change meaning.
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
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    verb: "ser",
    review: "pending",
    es: {
      title: "Introducing yourself at the building meeting",
      situation:
        "Alex has just moved into a building in Medellín and arrives at the monthly residents meeting. Nobody knows him yet. He has to say who he is, which apartment he lives in, and what he does — in about four sentences, in front of a room that is only half listening.",
      setting: {
        who: "Doña Ruth has chaired the residents' meeting for nine years and knows every apartment by number. Alex is the newest resident and has spoken to nobody in the building except the porter.",
        what: "A short round of introductions at the start of the meeting, before the agenda about the water tank.",
        when: "A Tuesday evening, seven o'clock, in the ground-floor common room.",
        where: "Medellín, a six-story block in Laureles where most residents have lived for a decade or more.",
        why: "Because Alex will be asking these people for favors — a signature, a parcel taken in, patience about noise — for as long as he lives here. The introduction is the whole relationship in miniature."
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
          translation: "Right, we have a new neighbor. Who are you?",
          pronunciation: "BWEH-noh, teh-NEH-mos beh-SEE-noh NWEH-boh. oos-TED KYEN es",
          literal: "Good, we-have neighbor new. You who are?",
          why: "“¿Usted quién es?” is blunt on paper and perfectly warm in the room. Colombian Spanish often puts the pronoun first for emphasis, and dropping it would make the question sound more clinical, not more polite."
        },
        {
          speaker: "Alex",
          target: "Soy Alex, del 502. Soy estadounidense.",
          translation: "I'm Alex, from 502. I'm American.",
          pronunciation: "soy AH-leks, del SEEN-koh-DOS. soy ka-na-DYEN-seh",
          literal: "I-am Alex, of-the 502. I-am American.",
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
            "Meeting an adult you are being formal with — a neighbor, a client, a friend's parent.",
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
            "Someone has guessed who you are and you are agreeing, usually with a bit of humor.",
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
            "“No worries” — reassurance that whatever you just apologized for or explained is not a problem.",
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
            "“From 502.” In a Colombian apartment block, your apartment number is a normal way to identify yourself.",
          literal: "of-the 502",
          useWhen:
            "Any building context — the meeting, the porter's desk, a parcel, a complaint.",
          avoidWhen:
            "Outside the building, where the number means nothing and you would give the neighborhood instead.",
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
          label: "Your apartment number is your name",
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
            "Alex gives his name, his apartment and his nationality in one line and stops. Colombian introductions in a group setting stay brief; the detail comes later, one-to-one, over coffee. Delivering a paragraph about yourself to the room reads as taking up more than your share of a meeting that has an agenda."
        },
        {
          label: "Being asked about the dog is being accepted",
          body:
            "Doña Ruth's “usted es el del perro” means the building has already noticed him and discussed him. That sounds like surveillance and is closer to welcome — it means he registers as a neighbor rather than a stranger. Bristling at it would be reading a Colombian building the way you would read an anonymous one."
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
          whenToUse: "The default. Name plus apartment number, nothing else."
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
            "Because the apartment number is required by law at residents' meetings.",
            "Because in a building the apartment number is how people place each other."
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
            "Soy estadounidense.",
            "Estoy estadounidense.",
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
        "Alejandra acaba de mudarse a un edificio en Houston y va a la reunión mensual de residentes. Todavía nadie la conoce. Tiene que decir quién es, en qué apartamento vive y a qué se dedica — en unas cuatro frases, ante una sala que sólo está medio escuchando.",
      setting: {
        who: "Ruth preside la reunión de residentes desde hace nueve años y conoce cada apartamento por su número. Alejandra es la residente más nueva y no ha hablado con nadie del edificio salvo con el portero.",
        what: "Una ronda breve de presentaciones al comienzo de la reunión, antes del punto sobre el tanque de agua.",
        when: "Un martes por la noche, a las siete, en el salón comunal de la planta baja.",
        where: "Houston, un edificio de seis pisos donde la mayoría de los residentes lleva una década o más.",
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
          target: "Okay, we've got a new neighbor. And you are?",
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
          register: "neutro",
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
          register: "neutro",
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
          register: "amistoso informal",
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
          register: "amistoso informal",
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
            "Para quitarle peso a la preocupación del otro, o cuando se lo quitan a usted. Muy frecuente en Estados Unidos y Australia.",
          avoidWhen:
            "Cuando la otra persona está genuinamente molesta por algo que usted hizo. Ahí suena a que la está despachando, no a amabilidad.",
          register: "amistoso informal",
          region: "Inglés universal; “no worries” abunda en Estados Unidos y Australia, y “no problem” en Estados Unidos.",
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
          register: "neutro",
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
          register: "neutro",
          region: "Inglés norteamericano; en el inglés británico se dice “flat 502”.",
          related: ["apartment 502", "apartment number", "the fifth floor", "502"],
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
          register: "neutro",
          region: "Inglés norteamericano",
          whenToUse: "La opción por defecto. Nombre y número de apartamento, nada más."
        },
        {
          form: "Hi, I'm Alejandra — I'm in 502.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Una sala relajada donde la gente se pisa las frases de todos modos."
        },
        {
          form: "Good evening, my name is Alejandra and I live in unit 502.",
          register: "cortés formal",
          region: "Inglés universal",
          whenToUse: "Una reunión de junta, o presentarse ante el administrador del edificio."
        },
        {
          form: "Alejandra, 502. Just moved in.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Cuando la ronda de presentaciones va rápido y nadie quiere una frase entera."
        },
        {
          form: "I'm the one in 502 — the one with the dog.",
          register: "amistoso informal",
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
  },
  {
    id: "choosing-ser-and-estar-at-the-juice-counter",
    level: "Starter · Who you are",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "everyday-life",
    register: "familiar",
    structure: "ser-vs-estar",
    review: "pending",
    es: {
      title: "Choosing between ser and estar",
      situation:
        "Jamie is helping at a neighborhood juice counter in Montería, Córdoba, during a fundraiser for a school trip. The fruit is ripe, the volunteers are tired in the hot morning, and the printed sign has two embarrassing mistakes: 'Estoy americano' and 'Soy cansado'. Luz, the organizer, fixes the sign with him before customers arrive, because the whole morning depends on people sounding clear and welcoming.",
      setting: {
        who: "Luz is a parent volunteer who knows the menu, the children, and the rhythm of the fundraiser. Jamie is an English-speaking exchange student who can already say simple Spanish sentences but still treats every English 'am' as the same Spanish verb.",
        what: "A fast correction at a juice counter: identity, origin, material, job, location, condition, changed result, and the adjective pairs that flip meaning with ser or estar.",
        when: "Saturday morning before the first rush, while the blenders are clean and the mangoes are being cut.",
        where: "Montería, Córdoba, at a school fundraiser set up beside a small neighborhood park.",
        why: "The signs and spoken offers have to be right before real customers arrive. If Jamie says the wrong verb, he may still be understood, but he will say that someone is boring instead of bored, clever instead of ready, or American as a temporary condition instead of an identity."
      },
      address: {
        form: "tú",
        who: "Luz uses tú with Jamie, and Jamie uses tú with her.",
        why: "They are working side by side as volunteers, close in age to the students around them, and Luz is coaching rather than interviewing him. Tú keeps the correction friendly and quick.",
        ifYouSwitch:
          "Usted would still be polite, but it would slow the scene down and make the coaching feel like a formal class. Vos would be understood in parts of Colombia, but it is not needed here; the grammar lesson is hard enough without adding a local second-person form."
      },
      dialogue: [
        {
          speaker: "Luz",
          target: "Antes de abrir, mira el letrero: tú eres americano, no estás americano.",
          translation: "Before we open, look at the sign: you are American, you are not temporarily American.",
          pronunciation: "AN-tes deh a-BREER, MEE-ra el leh-TREH-roh: too EH-res a-meh-ree-KAH-noh, no es-TAS a-meh-ree-KAH-noh",
          literal: "Before of opening, look the sign: you are American, not you-are American.",
          why: "Nationality is identity, so it takes ser. English uses 'are' for both identity and state, but Spanish does not. 'Estoy americano' sounds as if American were a condition you woke up with today."
        },
        {
          speaker: "Jamie",
          target: "Entonces digo: soy americano y estoy cansado; no soy cansado.",
          translation: "So I say: I'm American and I'm tired; I'm not a tiring person.",
          pronunciation: "en-TON-ses DEE-goh: soy a-meh-ree-KAH-noh ee es-TOY kan-SAH-doh; no soy kan-SAH-doh",
          literal: "Then I-say: I-am American and I-am tired; not I-am tired/tiring.",
          why: "This is the English-speaker trap in one line. 'Soy americano' is right because origin and nationality are identity. 'Estoy cansado' is right because tiredness is a condition. 'Soy cansado' says you are tiresome."
        },
        {
          speaker: "Luz",
          target: "Exacto. ¿Cómo eres? pregunta por tu carácter; ¿cómo estás? pregunta por hoy.",
          translation: "Exactly. What are you like? asks about your character; how are you? asks about today.",
          pronunciation: "eg-SAK-toh. KOH-moh EH-res preh-GOON-ta por too ka-RAK-ter; KOH-moh es-TAS preh-GOON-ta por oy",
          literal: "Exact. How are you? asks for your character; how are you? asks for today.",
          why: "The two questions are not interchangeable. '¿Cómo eres?' wants an inherent description: serious, funny, shy. '¿Cómo estás?' wants a state the speaker could notice today and not tomorrow."
        },
        {
          speaker: "Jamie",
          target: "Mi primo es aburrido, pero hoy está aburrido esperando la buseta.",
          translation: "My cousin is boring, but today he is bored waiting for the bus.",
          pronunciation: "mee PREE-moh es a-boo-RREE-doh, PEH-roh oy es-TAH a-boo-RREE-doh es-peh-RAN-doh la boo-SEH-ta",
          literal: "My cousin is boring, but today he-is bored waiting the little bus.",
          why: "The same adjective flips meaning. With ser, 'aburrido' is a characteristic you assign to the person. With estar, it is the state he is in right now. The line also uses estar plus a gerund: 'está esperando', the everyday progressive."
        },
        {
          speaker: "Luz",
          target: "Y Carlos es listo, pero todavía no está listo para cobrar.",
          translation: "And Carlos is clever, but he is still not ready to take payments.",
          pronunciation: "ee KAR-los es LEES-toh, PEH-roh toh-dah-BEE-ah no es-TAH LEES-toh PA-ra koh-BRAR",
          literal: "And Carlos is clever, but still not he-is ready for charging.",
          why: "'Ser listo' praises intelligence. 'Estar listo' means ready. That pair is one of the exam favorites because English says 'is' both times and gives you no warning."
        },
        {
          speaker: "Jamie",
          target: "El dueño es rico, pero el jugo está rico; el mango es verde y este mango está verde.",
          translation: "The owner is wealthy, but the juice is delicious; the mango is green and this mango is unripe.",
          pronunciation: "el DWEH-nyoh es RREE-koh, PEH-roh el HOO-goh es-TAH RREE-koh; el MAN-goh es BER-deh ee ES-teh MAN-goh es-TAH BER-deh",
          literal: "The owner is rich, but the juice is tasty; the mango is green and this mango is green/unripe.",
          why: "Two more meaning flips sit back to back. 'Ser rico' usually means wealthy for a person; 'estar rico' means tasty. 'Ser verde' names the color; 'estar verde' says fruit is not ripe yet."
        },
        {
          speaker: "Luz",
          target: "Si Andrés es malo, no lo invitemos; si está malo, le damos agua. Y ojo: Juan es vivo, pero el pez está vivo.",
          translation: "If Andrés is bad, let's not invite him; if he is sick, we give him water. And careful: Juan is sharp, but the fish is alive.",
          pronunciation: "see an-DRES es MAH-loh, no lo een-bee-TEH-mos; see es-TAH MAH-loh, leh DAH-mos AH-gwah. ee OH-hoh: hwan es BEE-boh, PEH-roh el pes es-TAH BEE-boh",
          literal: "If Andrés is bad, not him let's-invite; if he-is bad/sick, to-him we-give water. And eye: Juan is alive/sharp, but the fish is alive.",
          why: "'Ser malo' is bad in character or quality. 'Estar malo' usually means sick or in bad condition. 'Ser vivo' can mean sharp, clever, or street-smart; 'estar vivo' means alive."
        },
        {
          speaker: "Jamie",
          target: "Entonces: Luz es buena organizadora, el salpicón está bueno, la reunión es en el salón y el salón está al lado.",
          translation: "So: Luz is a good organizer, the fruit salad is tasty, the meeting is in the room, and the room is next door.",
          pronunciation: "en-TON-ses: loos es BWEH-nah or-gah-nee-sah-DOH-rah, el sal-pee-KON es-TAH BWEH-noh, la rreh-oo-NYON es en el sah-LON ee el sah-LON es-TAH al LAH-doh",
          literal: "Then: Luz is good organizer, the fruit salad is good/tasty, the meeting is in the room and the room is to-the side.",
          why: "This final line adds the genuine exception English speakers never guess. The location of an event uses ser: 'la reunión es en el salón'. The location of a thing uses estar: 'el salón está al lado'. 'Ser bueno' is good by character or quality; 'estar bueno' is tasty or attractive."
        }
      ],
      vocabulary: [
        {
          term: "ser",
          explanation:
            "Ser is the verb for identity and definition. Use it for who or what something is, where someone is from, what something is made of, whose it is, what time or date it is, a profession, and characteristics the speaker presents as inherent. The word 'permanent' is a shortcut, not the rule: a job can change, but Spanish still treats the profession as identity when you say 'soy profesor'.",
          literal: "to be, as identity",
          useWhen:
            "Naming a person, classifying an object, giving origin, material, possession, profession, time, date, or a quality you are presenting as part of what the person or thing is.",
          avoidWhen:
            "The idea is location, health, mood, readiness, taste today, or a result of a change. Those are states, and states normally take estar.",
          register: "neutral",
          region: "Universal Spanish. In Colombia, 'ser de' is the ordinary way to give origin, as in 'soy de Montería', and also material, as in 'la mesa es de madera'.",
          related: ["estar", "ser de", "ser para", "es de madera"],
          example: {
            target: "Soy americano y la mesa es de madera.",
            translation: "I'm American and the table is made of wood."
          }
        },
        {
          term: "estar",
          explanation:
            "Estar is the verb for location and state. It covers where a thing is, how someone feels, health, readiness, condition, and the result of a change. It is also the obligatory helper for the progressive: estar plus a gerund, as in 'está esperando' or 'estoy trabajando'. If you can honestly add 'today' or 'right now', estar is probably nearby.",
          literal: "to be, as state",
          useWhen:
            "Saying where a person or thing is, how someone feels, whether food tastes good today, whether fruit is ripe, or what action is in progress.",
          avoidWhen:
            "Giving nationality, origin, profession, material, ownership, time, date, or a definition. Those belong to ser even if English uses the same 'is'.",
          register: "neutral",
          region: "Universal Spanish. Colombian everyday speech uses estar plus a gerund constantly: 'estoy llegando', 'estamos mirando', 'está lloviendo'.",
          related: ["estoy", "está", "estar de", "estar + gerundio"],
          example: {
            target: "Estoy cansado y Carlos está cobrando.",
            translation: "I'm tired and Carlos is taking payments."
          }
        },
        {
          term: "ser de",
          explanation:
            "A compact structure for origin and material. With a place, it means someone or something is from there. With a substance, it means something is made of that material. In both uses, Spanish chooses ser because it is classifying the thing, not describing where it happens to be at the moment.",
          literal: "to be from / to be made of",
          useWhen:
            "Saying 'soy de Estados Unidos', 'el jugo es de mango', or 'la mesa es de madera'. It answers what identity or material label belongs to the person or thing.",
          avoidWhen:
            "You mean physical location. 'Estoy en Montería' means I am in Montería right now; 'soy de Montería' means Montería is my origin.",
          register: "neutral",
          region: "Very common in Colombia for both origin and material, and safer than trying to translate 'from' with a location verb.",
          related: ["de madera", "de mango", "de Montería", "hecho de"],
          example: {
            target: "El vaso es de vidrio, pero está en la mesa.",
            translation: "The glass is made of glass, but it is on the table."
          }
        },
        {
          term: "estar de",
          explanation:
            "A Colombian-friendly way to name a temporary role: 'está de profesor', 'estoy de cajero', 'ella está de guía'. The person may not be defined by that job, but is filling that role for the moment. It is not the same as 'soy profesor', which presents teaching as a profession or identity.",
          literal: "to be as / to be serving as",
          useWhen:
            "Someone is temporarily acting as cashier, teacher, driver, guide, or organizer. It is especially useful in events, shifts, and family favors.",
          avoidWhen:
            "The role is the person's profession or stable identity. Then use ser: 'es profesora', 'soy médico', 'somos estudiantes'.",
          register: "neutral informal",
          region: "Natural in Colombian Spanish and widely understood. It sounds practical rather than textbook-like.",
          related: ["hacer de", "trabajar como", "ser profesor", "estar encargado"],
          example: {
            target: "Hoy Carlos está de cajero, pero es estudiante.",
            translation: "Today Carlos is acting as cashier, but he is a student."
          }
        },
        {
          term: "estar + gerundio",
          explanation:
            "The progressive: a form of estar plus a gerund ending in -ando or -iendo. It is obligatory when you mean an action in progress, not just a habit. 'Estoy esperando' is 'I am waiting'; 'espero' can mean 'I wait', 'I hope', or 'I expect'. The helper is always estar, never ser.",
          literal: "to be + doing",
          useWhen:
            "Describing what is happening now, what someone is in the middle of doing, or what the weather is doing right now.",
          avoidWhen:
            "You mean a general routine. 'Trabajo los sábados' is a habit; 'estoy trabajando' is what is happening at this moment.",
          register: "neutral",
          region: "Extremely common in everyday Colombian speech, sometimes more common than English speakers expect from textbook Spanish.",
          related: ["estoy trabajando", "está esperando", "estamos vendiendo", "gerundio"],
          example: {
            target: "Mi primo está esperando la buseta.",
            translation: "My cousin is waiting for the bus."
          }
        },
        {
          term: "adjectives that change",
          explanation:
            "Some adjectives do not merely move from permanent to temporary; they change meaning. 'Aburrido' is boring with ser and bored with estar. 'Listo' is clever with ser and ready with estar. 'Rico' is wealthy with ser and delicious with estar. These pairs are the heart of the lesson because English gives you one verb and hides the contrast.",
          literal: "adjectives that change",
          useWhen:
            "You want to decide whether the adjective is a trait or a state before you speak. Ask whether you mean what the person or thing is like, or how it is today.",
          avoidWhen:
            "Memorizing the pairs as random vocabulary without asking the identity-versus-state question. That works for a quiz and fails in conversation.",
          register: "neutral",
          region: "Universal Spanish, with Colombian examples like 'el jugo está rico' heard everywhere a drink is being offered.",
          related: ["aburrido", "listo", "rico", "verde"],
          example: {
            target: "Carlos es listo, pero no está listo.",
            translation: "Carlos is clever, but he is not ready."
          }
        },
        {
          term: "event with ser, thing with estar",
          explanation:
            "Spanish makes one exception that surprises English speakers: the location of an event uses ser, while the location of a thing uses estar. A meeting, class, party, concert, or appointment is treated as scheduled, so 'la reunión es en el salón'. The room itself is a thing, so 'el salón está al lado'.",
          literal: "event with ser, thing with estar",
          useWhen:
            "Giving the place of a scheduled event, then describing where a physical object or room is. This contrast appears constantly in plans.",
          avoidWhen:
            "Using estar for every location because you learned 'location equals estar'. That shortcut fails exactly when the located item is an event.",
          register: "neutral",
          region: "Universal Spanish and very relevant in Colombian schools, offices, clinics, and apartment buildings where people are always asking where the meeting is.",
          related: ["la reunión es", "la clase es", "el salón está", "la fiesta es"],
          example: {
            target: "La reunión es en el salón y el salón está al lado.",
            translation: "The meeting is in the room and the room is next door."
          }
        }
      ],
      note:
        "A usable rule beats a memorized list. Use ser for identity, definition, origin, material, possession, profession, time, date, and characteristics the speaker presents as inherent. Use estar for location, condition, health, readiness, the result of a change, and anything framed as a state you could notice today and not tomorrow. Then add three high-value details. First, estar is the helper for the progressive: 'estoy trabajando', never 'soy trabajando'. Second, Colombian Spanish uses 'estar de' for a temporary role, such as 'Carlos está de cajero hoy', while 'ser de' gives origin or material. Third, events break the simple location rule: 'la reunión es en el salón', but 'el salón está al lado'.",
      culture: [
        {
          label: "The English trap is real",
          body:
            "English gives you one verb, 'to be', then asks context to carry everything. Spanish forces the choice into the verb. That is why 'Estoy americano' and 'Soy cansado' are both wrong for opposite reasons. The first turns identity into a temporary condition. The second turns a temporary condition into a personality trait. Colombians usually understand the intended meaning, but they also hear the wrong frame immediately."
        },
        {
          label: "Food makes estar visible",
          body:
            "A juice counter is a perfect place to hear estar because taste, ripeness, and readiness change quickly. 'El jugo está rico' means it tastes good now. 'El mango está verde' means it is not ripe yet. The same words with ser classify: 'es rico' can mean wealthy, and 'es verde' names the color. Food gives learners a daily reason to practice the decision."
        },
        {
          label: "Progressives are everyday speech",
          body:
            "Some textbooks make the Spanish progressive sound limited, as if Colombians avoid it unless an action is happening this exact second. Real everyday speech uses it constantly: 'estoy llegando', 'estamos mirando', 'está lloviendo', 'están vendiendo jugo'. Do not replace it with ser. The helper for an action in progress is always estar."
        },
        {
          label: "Temporary roles need their own frame",
          body:
            "In a fundraiser, people fill roles that are not their identities. A student can be 'de cajero' for the morning, a parent can be 'de profesora' for one activity, and a neighbor can be 'de conductor' for the trip. 'Estar de' lets you say that cleanly. If you say 'es cajero', you are more likely naming the person's job."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying 'Estoy americano.'",
          whyItFails:
            "Nationality and origin are identity, not a condition. Estar makes it sound as if being American is a temporary state, like being tired or ready.",
          sayInstead: "Soy americano."
        },
        {
          mistake: "Saying 'Soy cansado.'",
          whyItFails:
            "Tiredness is a condition, not identity. With ser, 'cansado' points toward being tiresome, the kind of person who wears others out.",
          sayInstead: "Estoy cansado."
        },
        {
          mistake: "Treating '¿Cómo eres?' and '¿Cómo estás?' as the same question",
          whyItFails:
            "One asks what you are like as a person; the other asks how you are today. Answering 'soy bien' or 'estoy simpático' misses the question being asked.",
          sayInstead: "Soy tranquilo. Estoy bien."
        },
        {
          mistake: "Saying 'La reunión está en el salón.'",
          whyItFails:
            "Physical things use estar for location, but scheduled events use ser. This is the exception to the beginner shortcut 'location equals estar'.",
          sayInstead: "La reunión es en el salón."
        }
      ],
      variations: [
        {
          form: "Soy de Montería, pero hoy estoy en el colegio.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Contrasting origin with current location. This is the cleanest way to feel 'ser de' versus 'estar en'."
        },
        {
          form: "Carlos está de cajero hoy, pero es estudiante.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Explaining a temporary role at an event without turning it into the person's identity."
        },
        {
          form: "La clase es en el salón grande; el salón está al fondo.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Giving the location of an event and then the location of the room itself."
        },
        {
          form: "Ese muchacho es vivo, y el pescado todavía está vivo.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Showing how one adjective can praise a sharp person or describe a living animal, depending on the verb."
        }
      ],
      prompt: "Which sentence correctly separates identity from condition?",
      choices: [
        "Soy americano y estoy cansado.",
        "Estoy americano y soy cansado.",
        "Estoy cansado y soy listo para salir."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "You want to say Carlos is clever, but he is not ready. Which Spanish sentence fits?",
          choices: [
            "Carlos está listo, pero no es listo.",
            "Carlos es listo, pero no está listo.",
            "Carlos es listo, pero no está verde."
          ],
          answer: 1,
          tests: "ser listo as clever, estar listo as ready"
        },
        {
          prompt: "Which sentence gives an event location and a thing location correctly?",
          choices: [
            "La reunión está en el salón y el salón es al lado.",
            "El salón es en la reunión y la reunión está al lado.",
            "La reunión es en el salón y el salón está al lado."
          ],
          answer: 2,
          tests: "events use ser for location, things use estar"
        },
        {
          prompt: "What does 'El jugo está rico' mean at the counter?",
          choices: [
            "The juice tastes good right now.",
            "The juice owns a lot of money.",
            "The juice comes from a rich owner."
          ],
          answer: 0,
          tests: "estar rico as tasty rather than wealthy"
        }
      ]
    },
    en: {
      title: "Un solo verbo no resuelve todo",
      situation:
        "Mariana está en Houston, Texas, ayudando en una feria universitaria de comida colombiana. Va a hablar con visitantes en inglés y se da cuenta de que 'ser' y 'estar' se vuelven un solo 'be'. Theo, un voluntario local, le muestra la otra mitad del problema: el inglés junta lo que el español separa, pero separa hambre, edad y clima donde el español usa tener o hacer.",
      setting: {
        who: "Theo es un voluntario local que organiza la mesa de bebidas. Mariana es una estudiante colombiana que habla buen inglés, pero todavía traduce desde ser, estar, tener y hacer como si cada verbo tuviera una pareja fija.",
        what: "Una preparación antes de atender visitantes: cómo el inglés colapsa ser y estar en 'be', y cómo luego obliga a decir 'I am hungry', 'I am 30' y 'it is cold' donde el español no usa ser ni estar.",
        when: "Un sábado por la mañana, antes de que lleguen los primeros visitantes a la feria.",
        where: "Houston, Texas, en el vestíbulo de una universidad durante una feria multicultural.",
        why: "Mariana necesita sonar natural al describirse, describir la comida y contestar preguntas básicas. El error no es sólo escoger mal 'be'; es creer que todos los usos españoles de tener y hacer se traducen con have y make."
      },
      address: {
        form: "mixed",
        who: "Theo y Mariana usan 'you' para todo, sin cambiar de pronombre aunque pasen de una corrección amistosa a una instrucción más seria.",
        why: "El inglés no tiene contraste productivo entre tú y usted. La cercanía o la formalidad se marca con tono, nombres de pila, 'please', frases completas y modales como 'could', no con otro pronombre.",
        ifYouSwitch:
          "No hay un cambio de pronombre que haga el trabajo de usted. Si Mariana quiere sonar más formal, debe alargar la frase: 'Could you help me, please?' en vez de 'Help me'."
      },
      dialogue: [
        {
          speaker: "Theo",
          target: "Before we open, remember: you are Colombian, and you are not temporarily Colombian.",
          translation: "Antes de abrir, recuerde: usted es colombiana, y no está colombiana temporalmente.",
          pronunciation: "bi-FOR ui OU-pen, ri-MEM-ber: yu ar ko-LOM-bi-an, and yu ar not tem-po-RE-ri-li ko-LOM-bi-an",
          literal: "Antes de abrir, recuerde: usted es colombiana, y usted no es temporalmente colombiana.",
          why: "El inglés usa el mismo 'are' para lo que en español sería ser y estar. No hay una forma distinta para identidad; el adjetivo y el contexto hacen el trabajo."
        },
        {
          speaker: "Mariana",
          target: "So I say: I am Colombian and I am tired, with the same verb.",
          translation: "Entonces digo: soy colombiana y estoy cansada, con el mismo verbo.",
          pronunciation: "sou ai sei: ai am ko-LOM-bi-an and ai am TAI-erd, uid da seim verb",
          literal: "Entonces digo: yo soy colombiana y yo soy cansada, con el mismo verbo.",
          why: "Aquí el problema se invierte. En español son dos decisiones opuestas; en inglés ambas salen con 'am'. La diferencia la ponen las palabras 'Colombian' y 'tired', no el verbo."
        },
        {
          speaker: "Theo",
          target: "Exactly. 'What are you like?' and 'How are you?' are different questions.",
          translation: "Exacto. '¿Cómo es usted?' y '¿Cómo está usted?' son preguntas distintas.",
          pronunciation: "eg-ZAKT-li. uat ar yu laik? and jau ar yu? ar DIF-rent KUES-chons",
          literal: "Exactamente. ¿Qué es usted como? y ¿cómo es usted? son preguntas diferentes.",
          why: "El inglés tampoco deja todo al verbo. 'What are you like?' pregunta por carácter o descripción. 'How are you?' pregunta por estado, saludo o salud."
        },
        {
          speaker: "Mariana",
          target: "My cousin is boring, but today he is bored waiting for the bus.",
          translation: "Mi primo es aburrido, pero hoy está aburrido esperando el bus.",
          pronunciation: "mai KO-sin iz BOR-ing, bat tu-DEI ji iz bord WEI-ting for da bas",
          literal: "Mi primo es aburridor, pero hoy él es aburrido esperando por el bus.",
          why: "El inglés no cambia el verbo, pero sí cambia el adjetivo. 'Boring' describe lo que alguien causa en otros; 'bored' describe cómo se siente. Ese par reemplaza una parte de la diferencia ser/estar."
        },
        {
          speaker: "Theo",
          target: "And Carlos is clever, but he is not ready to take payments yet.",
          translation: "Y Carlos es listo, pero todavía no está listo para cobrar.",
          pronunciation: "and KAR-los iz KLE-ver, bat ji iz not RE-di tu teik PEI-ments yet",
          literal: "Y Carlos es inteligente, pero él no es listo para tomar pagos todavía.",
          why: "Para 'listo', el inglés prefiere dos palabras distintas: 'clever' para inteligencia y 'ready' para preparación. Otra vez, el verbo 'is' no cambia."
        },
        {
          speaker: "Mariana",
          target: "The owner is wealthy, but the juice is delicious; the mango is green and this mango is unripe.",
          translation: "El dueño es rico, pero el jugo está rico; el mango es verde y este mango está verde.",
          pronunciation: "da OU-ner iz WEL-thi, bat da yus iz di-LI-shos; da MAN-gou iz grin and dis MAN-gou iz an-RAIP",
          literal: "El dueño es rico, pero el jugo es delicioso; el mango es verde y este mango es inmaduro.",
          why: "El inglés separa varios sentidos que el español puede expresar con el mismo adjetivo y distinto verbo. 'Wealthy' no sirve para comida, 'delicious' no sirve para una cuenta bancaria, y 'unripe' no es simplemente el color green."
        },
        {
          speaker: "Theo",
          target: "If Andre is bad, do not invite him; if he is sick, give him water. Juan is sharp, but the fish is alive.",
          translation: "Si Andrés es malo, no lo invite; si está malo, dele agua. Juan es vivo, pero el pez está vivo.",
          pronunciation: "if AN-drei iz bad, du not in-VAIT jim; if ji iz sik, giv jim WA-ter. juan iz sharp, bat da fish iz a-LAIV",
          literal: "Si Andre es malo, no invítelo; si él es enfermo, dele agua. Juan es agudo, pero el pez es vivo.",
          why: "El inglés conserva el mismo 'is', pero muchas veces escoge vocabulario diferente: 'bad' para malo, 'sick' para enfermo, 'sharp' para vivo como astuto, 'alive' para vivo como con vida."
        },
        {
          speaker: "Mariana",
          target: "So Luz is a good organizer, the fruit salad is good, the meeting is in the room, and the room is next door.",
          translation: "Entonces Luz es buena organizadora, el salpicón está bueno, la reunión es en el salón y el salón está al lado.",
          pronunciation: "sou luz iz a gud OR-ga-nai-zer, da frut SA-lad iz gud, da MI-ting iz in da rum, and da rum iz nekst dor",
          literal: "Entonces Luz es una buena organizadora, la ensalada de fruta es buena, la reunión es en el salón, y el salón es puerta siguiente.",
          why: "El inglés usa 'is' tanto para el evento como para el salón. No marca la excepción española con otro verbo. Lo que sí debe aprender Mariana es la expresión fija 'next door' para 'al lado'."
        }
      ],
      vocabulary: [
        {
          term: "be",
          explanation:
            "El verbo 'be' cubre lo que el español reparte entre ser y estar. Sirve para identidad, origen, profesión, estado, ubicación, descripción, hora y clima. Por eso no conviene buscar dos verbos ingleses para traducir ser y estar. La pregunta útil es qué palabra alrededor de 'be' carga el sentido: 'Colombian', 'tired', 'ready', 'in Houston'.",
          literal: "ser / estar",
          useWhen:
            "Casi siempre que en español pensaría en ser o estar: 'I am Colombian', 'I am tired', 'the room is next door', 'the meeting is in the room'.",
          avoidWhen:
            "No lo use solo para acciones. Necesita un complemento o una forma -ing: 'I am working', no 'I am work'.",
          register: "neutro",
          region: "Inglés universal. Cambia la contracción, como 'I'm' o 'you're', pero no la regla central.",
          related: ["am", "is", "are", "was"],
          example: {
            target: "I am Colombian and I am tired.",
            translation: "Soy colombiana y estoy cansada."
          }
        },
        {
          term: "be from / be made of",
          explanation:
            "El inglés usa 'be from' para origen y 'be made of' para material. Las dos ideas caben en el 'ser de' español, pero en inglés no se resuelven con una sola palabra 'of'. Decir 'I am of Colombia' suena antiguo o raro; decir 'the table is of wood' suena literario.",
          literal: "ser de / estar hecho de",
          useWhen:
            "Diga 'I'm from Colombia' para origen y 'the table is made of wood' para material. En conversaciones rápidas, 'it's mango juice' también puede nombrar de qué es el jugo.",
          avoidWhen:
            "No traduzca 'de' automáticamente como 'of'. Muchas veces el inglés pide 'from', 'made of', o directamente un sustantivo usado como adjetivo.",
          register: "neutro",
          region: "Inglés universal. En Norteamérica se oye mucho 'made of' para material visible y 'made from' cuando el material se transformó.",
          related: ["from", "made of", "made from", "mango juice"],
          example: {
            target: "I'm from Colombia, and the cup is made of paper.",
            translation: "Soy de Colombia, y el vaso es de papel."
          }
        },
        {
          term: "ready",
          explanation:
            "'Ready' cubre el estar listo de preparación, no el ser listo de inteligencia. Para inteligencia use 'clever', 'smart' o 'sharp', según el matiz. Este es un caso donde el inglés no necesita cambiar el verbo porque cambia el adjetivo.",
          literal: "listo / preparada",
          useWhen:
            "Cuando alguien o algo ya puede empezar: 'I'm ready', 'the food is ready', 'Carlos is ready to take payments'.",
          avoidWhen:
            "No lo use para decir que alguien es inteligente. 'He is ready' no significa 'él es listo' como rasgo mental.",
          register: "neutro",
          region: "Inglés universal. 'Smart' es más común que 'clever' en Estados Unidos para inteligencia general.",
          related: ["clever", "smart", "prepared", "all set"],
          example: {
            target: "Carlos is clever, but he is not ready.",
            translation: "Carlos es listo, pero no está listo."
          }
        },
        {
          term: "hungry / thirty / cold",
          explanation:
            "Aquí está la asimetría que sorprende a los colombianos. El inglés dice 'I am hungry', no 'I have hunger'; 'I am 30', no 'I have 30 years'; 'it is cold', no 'it makes cold'. El inglés colapsa ser y estar en 'be', pero también usa 'be' donde el español usa tener y hacer.",
          literal: "tengo hambre / tengo treinta / hace frío",
          useWhen:
            "Para hambre, sed en muchas variedades, edad y clima básico: 'I am hungry', 'I am 30', 'it is cold today'.",
          avoidWhen:
            "No traduzca tener y hacer palabra por palabra. 'I have hunger', 'I have 30 years' y 'it makes cold' se entienden como errores de traducción.",
          register: "neutro",
          region: "Inglés universal, aunque en inglés conversacional también se oye 'I'm thirsty' para tengo sed y 'it's hot' para hace calor.",
          related: ["I'm hungry", "I'm 30", "it's cold", "it's hot"],
          example: {
            target: "I'm hungry, I'm 30, and it's cold.",
            translation: "Tengo hambre, tengo 30 años y hace frío."
          }
        },
        {
          term: "be + -ing",
          explanation:
            "El progresivo inglés se forma con 'be' más una forma terminada en -ing: 'I am working', 'she is waiting', 'we are selling juice'. En esto se parece a estar más gerundio, pero no lo confunda con una traducción palabra por palabra de cada presente español.",
          literal: "estar + gerundio",
          useWhen:
            "Para una acción en curso ahora, una acción temporal alrededor de estos días, o planes ya organizados: 'I'm working today', 'we're selling juice', 'I'm meeting Ana at six'.",
          avoidWhen:
            "No diga 'I am work' ni use -ing para todos los hábitos. 'I work on Saturdays' es hábito; 'I'm working now' es acción en progreso.",
          register: "neutro",
          region: "Inglés universal. Las contracciones 'I'm', 'you're', 'we're' son normales en conversación.",
          related: ["working", "waiting", "selling", "meeting"],
          example: {
            target: "We are selling juice today.",
            translation: "Estamos vendiendo jugo hoy."
          }
        },
        {
          term: "boring / bored",
          explanation:
            "El inglés suele separar causa y experiencia con terminaciones. 'Boring' describe algo o alguien que aburre. 'Bored' describe a la persona que siente aburrimiento. Ese contraste hace parte del trabajo que en español puede hacer ser frente a estar con 'aburrido'.",
          literal: "aburrido como rasgo / aburrido como estado",
          useWhen:
            "Diga 'the class is boring' si la clase aburre, y 'I am bored' si usted siente aburrimiento. Lo mismo pasa con 'interesting/interested' y 'exciting/excited'.",
          avoidWhen:
            "No diga 'I am boring' si quiere decir que está aburrido. Eso confiesa que usted aburre a los demás.",
          register: "neutro",
          region: "Inglés universal. Es una de las correcciones más frecuentes para hispanohablantes.",
          related: ["interesting", "interested", "exciting", "excited"],
          example: {
            target: "The class is boring, so I am bored.",
            translation: "La clase es aburrida, así que estoy aburrida."
          }
        },
        {
          term: "next door",
          explanation:
            "'Next door' significa al lado, especialmente para un salón, oficina, casa o negocio vecino. No traduce puerta por puerta; es una expresión fija. En la frase de la reunión, el inglés usa 'is' para el evento y también 'is' para la ubicación del salón, así que la diferencia española desaparece.",
          literal: "al lado / en la puerta siguiente",
          useWhen:
            "Indicando que un lugar queda junto a otro: 'the room is next door', 'the cafe is next door', 'she lives next door'.",
          avoidWhen:
            "No diga 'the room is at the side' para esta ubicación normal. Se entiende, pero no suena idiomático.",
          register: "neutro",
          region: "Inglés universal. También se puede decir 'beside it' o 'next to it', pero 'next door' suena más natural para locales y salones.",
          related: ["next to", "beside", "nearby", "across the hall"],
          example: {
            target: "The meeting is in the room, and the room is next door.",
            translation: "La reunión es en el salón, y el salón está al lado."
          }
        }
      ],
      note:
        "Para un colombiano, el reto no es aprender dos verbos ingleses para ser y estar. El reto es aceptar que el inglés juntó esos dos verbos en 'be' y luego repartió otras ideas de manera distinta. Usted dice 'I am Colombian' y 'I am tired' con el mismo verbo. Pero también dice 'I am hungry', 'I am 30' y 'it is cold', aunque en español diga 'tengo hambre', 'tengo 30 años' y 'hace frío'. No busque una pareja fija por verbo español. Busque la frase inglesa completa.",
      culture: [
        {
          label: "El inglés no se siente impreciso para sus hablantes",
          body:
            "A un hispanohablante le puede parecer extraño que 'is' cubra ser y estar. Para un angloparlante no hay pérdida, porque el adjetivo, la preposición y el contexto cargan la diferencia. 'She is Colombian' y 'she is tired' no se sienten ambiguas. Lo que sí suena extraño es intentar marcar la diferencia con verbos inventados o traducciones literales."
        },
        {
          label: "La edad y el hambre no se poseen",
          body:
            "En español uno tiene años, hambre, sed, sueño y frío. En inglés, muchas de esas experiencias se dicen con 'be': 'I am 30', 'I am hungry', 'I am sleepy', 'I am cold'. Decir 'I have 30 years' o 'I have hunger' revela traducción directa. El oyente entiende, pero oye la estructura española detrás de la frase."
        },
        {
          label: "El clima usa it como sujeto vacío",
          body:
            "'It is cold' no significa que una cosa llamada 'it' esté fría. Ese 'it' es un sujeto gramatical vacío que el inglés necesita para hablar del clima, la hora y la distancia: 'it's raining', 'it's late', 'it's far'. El español puede decir 'hace frío' sin sujeto, pero el inglés casi siempre exige uno."
        },
        {
          label: "Las terminaciones también enseñan",
          body:
            "Pares como 'boring/bored' ayudan a compensar lo que el verbo 'be' no marca. El español pregunta si va ser o estar; el inglés muchas veces pregunta si la palabra describe la causa o la experiencia. Por eso 'I am bored' y 'I am boring' son tan distintos como 'estoy aburrido' y 'soy aburrido'."
        }
      ],
      pitfalls: [
        {
          mistake: "'I have hunger.'",
          whyItFails:
            "Es una traducción directa de 'tengo hambre'. En inglés natural, el hambre se expresa como estado con 'be' y el adjetivo 'hungry'.",
          sayInstead: "I am hungry."
        },
        {
          mistake: "'I have 30 years.'",
          whyItFails:
            "La edad no se posee en inglés corriente. 'I have 30 years' suena incompleto, como si faltara decir 30 años de experiencia.",
          sayInstead: "I am 30."
        },
        {
          mistake: "'It makes cold.'",
          whyItFails:
            "Es la traducción palabra por palabra de 'hace frío'. El inglés usa 'it' como sujeto vacío y 'be' para el clima básico.",
          sayInstead: "It is cold."
        },
        {
          mistake: "'I am boring' para decir que usted está aburrido",
          whyItFails:
            "'Boring' describe a quien causa aburrimiento. Si usted siente aburrimiento, necesita 'bored'. La diferencia está en el adjetivo, no en el verbo.",
          sayInstead: "I am bored."
        }
      ],
      variations: [
        {
          form: "I'm from Colombia, but I'm in Houston now.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para contrastar origen con ubicación actual sin buscar dos verbos diferentes."
        },
        {
          form: "Carlos is acting as cashier today, but he is a student.",
          register: "neutro amistoso",
          region: "Inglés universal",
          whenToUse: "Para traducir la idea de 'está de cajero' sin hacer creer que ese es su oficio permanente."
        },
        {
          form: "The class is in the big room; the room is at the end of the hall.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para ubicar un evento y luego ubicar el lugar físico con el mismo verbo inglés."
        },
        {
          form: "That guy is sharp, and the fish is still alive.",
          register: "informal amistoso",
          region: "Inglés universal",
          whenToUse: "Para separar dos sentidos de 'vivo' con vocabulario inglés distinto."
        }
      ],
      prompt: "¿Cuál frase traduce naturalmente 'tengo hambre' al inglés?",
      choices: [
        "I have hunger.",
        "I am hungry.",
        "It makes hunger."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase expresa la edad de manera natural en inglés?",
          choices: [
            "I am 30 years old.",
            "I have 30 years.",
            "I make 30 years."
          ],
          answer: 0,
          tests: "la edad en inglés con be, no con have"
        },
        {
          prompt: "¿Cuál frase distingue bien estar aburrido de ser aburrido?",
          choices: [
            "I am bored, not boring.",
            "I am boring, not bored.",
            "I have bored, not boring."
          ],
          answer: 0,
          tests: "bored para la experiencia, boring para la causa"
        },
        {
          prompt: "¿Cuál frase dice 'hace frío' en inglés natural?",
          choices: [
            "It has cold.",
            "It makes cold.",
            "It is cold."
          ],
          answer: 2,
          tests: "clima básico con it + be"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/01-foundation-identity.js");
