/*
 * Lesson block: extending / forms, keeping things safe and favors.
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
 * The verbs here — rellenar, guardar and prestar — sit in ordinary Colombian
 * errands and favors: a counter where forms must be filled in honestly, a
 * public place where someone saves a seat and puts belongings away, and a
 * neighborly loan where prestar points in the opposite direction English
 * speakers often expect.
 */
lessons.push(
  {
    id: "filling-the-right-thing-at-a-girardot-counter",
    level: "Extending · Everyday errands",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "courteous",
    pathways: ["extension"],
    verb: "rellenar",
    review: "pending",
    es: {
      title: "Rellenar no siempre es llenar un formulario",
      situation:
        "In Girardot, Alex arrives at a counter to update some membership information. The clerk tells him “llene este formulario”, not “rellénelo”, and then offers him water because it is hot. When Alex asks whether he should “rellenar” every space, she uses the chance to correct him carefully: in Colombia, llenar is the normal verb for forms; rellenar is understood, but it sounds more natural for filling a glass again, filling a hole, or talking about an arepa rellena.",
      setting: {
        who: "A patient but busy clerk is managing a line of people with forms; Alex has enough Spanish to ask a precise question but still trusts the dictionary too much.",
        what: "A paperwork exchange at a counter, plus a small cup of water that makes the contrast between llenar and rellenar concrete.",
        when: "A hot weekday morning, just before the office closes for lunch and everyone is trying to finish one last errand.",
        where: "Girardot, Cundinamarca, at a public-service counter near the river.",
        why: "Because teaching rellenar as the default for forms would mislead the learner in Colombia. The useful skill is hearing “llene este formulario” while still knowing when rellenar is the right verb."
      },
      address: {
        form: "usted",
        who: "The clerk and Alex use usted because they are strangers in a formal counter interaction.",
        why: "The exchange is practical and courteous. Usted fits the office setting, especially when instructions include forms, signatures and personal data.",
        ifYouSwitch: "Switching to tú would make Alex sound too familiar with the clerk. In a line at a public counter, usted keeps the request respectful and efficient."
      },
      dialogue: [
        {
          speaker: "Funcionaria",
          target: "Buenos días. Llene este formulario con sus datos actuales y firme al final.",
          translation: "Good morning. Fill in this form with your current details and sign at the end.",
          pronunciation: "BWEH-nos DEE-as. YEH-neh ES-teh for-moo-LAH-ryoh kon sus DAH-tos ak-TWA-les ee FEER-meh al fee-NAL",
          literal: "Good days. Fill this form with your current data and sign at-the end.",
          why: "This is the honest Colombian phrase: “llenar un formulario.” Rellenar is understood, but a clerk is much more likely to say “llene” at a counter."
        },
        {
          speaker: "Alex",
          target: "Gracias. ¿Tengo que rellenar también las casillas que no cambiaron?",
          translation: "Thanks. Do I also have to fill in the boxes that did not change?",
          pronunciation: "GRA-syas. TEN-goh keh rreh-yeh-NAR tam-BYEN las kah-SEE-yas keh noh kam-BYAH-ron",
          literal: "Thanks. I-have to refill also the boxes that not changed?",
          why: "Alex uses rellenar because English “fill in” points him there. It is not incomprehensible, but in Colombian paperwork it sounds less natural than llenar."
        },
        {
          speaker: "Funcionaria",
          target: "Sí, complete todas las casillas, pero aquí decimos más “llenar el formulario”.",
          translation: "Yes, complete every box, but here we say “llenar el formulario” more.",
          pronunciation: "see, kom-PLEH-teh TOH-das las kah-SEE-yas, PEH-roh ah-KEE deh-SEE-mos mas yeh-NAR el for-moo-LAH-ryoh",
          literal: "Yes, complete all the boxes, but here we say more fill the form.",
          why: "The clerk gives a polite register correction. “Completar” also works for forms, but the everyday counter instruction remains “llenar”."
        },
        {
          speaker: "Alex",
          target: "Entonces, ¿cuándo uso rellenar sin sonar raro?",
          translation: "So when do I use rellenar without sounding strange?",
          pronunciation: "en-TON-ses, KWAN-doh OO-soh rreh-yeh-NAR sin soh-NAR RRAH-roh",
          literal: "Then, when I-use refill without sounding strange?",
          why: "This direct question lets the lesson keep rellenar as the owned verb without pretending it is the default paperwork verb."
        },
        {
          speaker: "Funcionaria",
          target: "Por ejemplo, puede rellenar el vaso si quiere más agua, o pedir una arepa rellena.",
          translation: "For example, you can refill the cup if you want more water, or order a stuffed arepa.",
          pronunciation: "por eg-SEM-ploh, PWEH-deh rreh-yeh-NAR el BAH-soh see KYEH-reh mas AH-gwah, oh peh-DEER OO-nah ah-REH-pah rreh-YEH-nah",
          literal: "For example, you can refill the glass if you want more water, or ask-for a stuffed arepa.",
          why: "Now rellenar has its strongest territory: putting more into something, filling a hollow space or describing food with a filling."
        },
        {
          speaker: "Alex",
          target: "Perfecto: lleno el formulario y, si me da sed, relleno el vaso.",
          translation: "Perfect: I fill in the form and, if I get thirsty, I refill the cup.",
          pronunciation: "per-FEK-toh: YEH-noh el for-moo-LAH-ryoh ee see meh dah sed, rreh-YEH-noh el BAH-soh",
          literal: "Perfect: I fill the form and, if to-me gives thirst, I refill the glass.",
          why: "Alex lands the contrast. For Colombian errands, “lleno el formulario” is the phrase to remember, while “relleno el vaso” keeps rellenar useful and truthful."
        }
      ],
      vocabulary: [
        {
          term: "rellenar",
          explanation: "To refill, fill up again, fill a hollow space or stuff food. It is understood for forms but not the everyday Colombian default there.",
          literal: "to refill / fill in",
          useWhen: "Refilling a cup, stuffing food or filling a gap: “rellenar el vaso”, “arepa rellena”, “rellenar un hueco”.",
          avoidWhen: "A Colombian clerk tells you to fill in a form; the usual verb is “llenar” or sometimes “completar”.",
          register: "neutral",
          region: "Universal Spanish, with llenar strongly preferred for forms in Colombia.",
          related: ["llenar", "completar", "el relleno", "arepa rellena"],
          example: {
            target: "Voy a rellenar el vaso antes de salir.",
            translation: "I'm going to refill the cup before leaving."
          }
        },
        {
          term: "llenar el formulario",
          explanation: "The normal Colombian phrase for filling in a form. This is what you are likely to hear at a counter.",
          literal: "to fill the form",
          useWhen: "Forms, applications and paperwork: “llene este formulario”, “ya llené la solicitud”.",
          avoidWhen: "You mean putting a filling inside food or refilling a container; there rellenar may be better.",
          register: "polite service",
          region: "Very common in Colombia.",
          related: ["formulario", "solicitud", "casilla", "completar"],
          example: {
            target: "Llene el formulario con letra clara.",
            translation: "Fill in the form clearly."
          }
        },
        {
          term: "completar",
          explanation: "To complete. A clear alternative for forms, especially when the emphasis is not leaving blanks.",
          literal: "to complete",
          useWhen: "Formal instructions: “complete todos los campos”, “complete la solicitud en línea”.",
          avoidWhen: "You want the most everyday spoken verb at a Colombian counter; llenar is more common.",
          register: "neutral to formal",
          region: "Universal Spanish.",
          related: ["llenar", "campos", "casillas", "solicitud"],
          example: {
            target: "Complete todas las casillas obligatorias.",
            translation: "Complete all required boxes."
          }
        },
        {
          term: "el relleno",
          explanation: "The filling inside food, a gap or a padded object.",
          literal: "the filling",
          useWhen: "Food and materials: “relleno de pollo”, “relleno de queso”, “material de relleno”.",
          avoidWhen: "You mean the information written on a form; that is not usually el relleno.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["rellenar", "rellena", "masa", "hueco"],
          example: {
            target: "La arepa tiene relleno de queso.",
            translation: "The arepa has a cheese filling."
          }
        },
        {
          term: "arepa rellena",
          explanation: "A stuffed arepa. Rellena describes what has been filled with something inside.",
          literal: "stuffed arepa",
          useWhen: "Ordering food with a filling: “arepa rellena de carne”, “empanada rellena”.",
          avoidWhen: "You are talking about a form; a formulario is lleno or completado, not normally relleno in Colombia.",
          register: "neutral",
          region: "Common food vocabulary across Colombia.",
          related: ["relleno", "rellenar", "de queso", "de carne"],
          example: {
            target: "Pidió una arepa rellena de pollo.",
            translation: "He ordered an arepa stuffed with chicken."
          }
        },
        {
          term: "las casillas",
          explanation: "The boxes or fields on a form where you write information.",
          literal: "the little boxes",
          useWhen: "Paperwork: “marque la casilla”, “complete las casillas obligatorias”.",
          avoidWhen: "You mean a whole form; casillas are the individual boxes, not the document itself.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["campo", "formulario", "marcar", "datos"],
          example: {
            target: "No deje casillas obligatorias en blanco.",
            translation: "Do not leave required boxes blank."
          }
        },
        {
          term: "en blanco",
          explanation: "Blank, with nothing written in it.",
          literal: "in white",
          useWhen: "Forms and documents: “dejar en blanco”, “firma en blanco”, “espacio en blanco”.",
          avoidWhen: "You are talking about the color white rather than missing information.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["vacío", "sin llenar", "casilla", "formulario"],
          example: {
            target: "No firme una hoja en blanco.",
            translation: "Do not sign a blank sheet."
          }
        }
      ],
      note:
        "The useful lesson is not “rellenar = fill in a form.” In Colombia, the everyday counter verb is llenar: “llene este formulario”, “llené la solicitud”, “faltan dos casillas por llenar.” Rellenar is still a real verb, but it feels more at home with refilling a container, filling a hole, padding something or stuffing food: “rellenar el vaso”, “rellenar un hueco”, “arepa rellena.” If someone says rellenar un formulario, people will understand; if you want to sound local at the counter, say llenar.",
      culture: [
        {
          label: "The counter phrase is llenar",
          body: "A Colombian learner of Spanish paperwork should expect “llene este formulario” from a clerk, receptionist or guard. That instruction can arrive fast, with extra details about cédula, firma, fecha and teléfono. Rellenar is not a disaster, but it is not the phrase people normally reach for. The practical win is recognizing the actual instruction you will hear under pressure."
        },
        {
          label: "Rellenar has a physical feel",
          body: "Rellenar often feels like putting material into a space that already exists: more water into a glass, cheese into an arepa, cement into a crack, padding into a cushion. That physical image explains why it can sound slightly off with a form at a Colombian counter. The boxes need information, but the office habit is still llenar or completar."
        },
        {
          label: "Do not over-correct the learner",
          body: "Because rellenar is understood for forms in many places, the point is not to shame it as wrong. The point is register and expectation. If a learner hears “llene” and waits for a word that sounds like “rellenar,” the line moves without them. Honest teaching says both: rellenar exists, and llenar is what Colombian paperwork most often uses."
        }
      ],
      pitfalls: [
        {
          mistake: "Presenting “rellenar un formulario” as the Colombian default",
          whyItFails: "It is understandable, but it hides the phrase learners will actually hear at counters: “llenar un formulario” or “llene este formulario”.",
          sayInstead: "Llene este formulario, por favor."
        },
        {
          mistake: "Using llenar for stuffed food",
          whyItFails: "Food with a filling normally uses relleno or rellena. “Arepa llena” sounds like the arepa is full, not like it has a named filling.",
          sayInstead: "Quiero una arepa rellena de queso."
        },
        {
          mistake: "Leaving “casillas obligatorias” empty",
          whyItFails: "The language problem becomes a paperwork problem. If a box is obligatoria, the form may be rejected until that field is filled in.",
          sayInstead: "Complete todas las casillas obligatorias."
        }
      ],
      variations: [
        {
          form: "Llene este formulario.",
          register: "polite service",
          region: "Colombia",
          whenToUse: "The normal counter instruction for filling in a form."
        },
        {
          form: "Rellené el vaso con agua.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Saying you refilled a container."
        },
        {
          form: "Una arepa rellena de queso.",
          register: "neutral",
          region: "Colombia",
          whenToUse: "Ordering or describing food with a filling."
        },
        {
          form: "No deje casillas en blanco.",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "Warning someone not to leave form fields empty."
        },
        {
          form: "Los formularios los revisan en ventanilla el mismo día.",
          register: "courteous",
          region: "General Colombian",
          whenToUse: "Saying who handles a form without naming a person. Fronting los formularios is the spoken alternative to a passive."
        }
      ],
      prompt: "At the Girardot counter, which instruction is the most natural Colombian way to ask Alex to fill in the form?",
      choices: [
        "Rellene la fila con paciencia.",
        "Llene este formulario, por favor.",
        "Guarde este formulario, por favor."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence uses “rellenar” in its strongest everyday sense?",
          choices: [
            "Voy a prestar el vaso.",
            "Voy a rellenar el vaso.",
            "Voy a firmar el vaso."
          ],
          answer: 1,
          tests: "rellenar for refilling"
        },
        {
          prompt: "Which phrase would you expect for stuffed food?",
          choices: [
            "Arepa rellena de queso.",
            "Arepa guardada con queso.",
            "Arepa prestada de queso."
          ],
          answer: 0,
          tests: "rellena for food with filling"
        },
        {
          prompt: "Which warning fits a form with required boxes?",
          choices: [
            "No rellene el barrio.",
            "No preste la firma.",
            "No deje casillas en blanco."
          ],
          answer: 2,
          tests: "casillas en blanco"
        }
      ]
    },
    en: {
      title: "Llenar un formulario sin decir “refill the form”",
      situation:
        "En El Paso, Marisol está en una oficina municipal llenando un formulario para una tarjeta de residente. En español colombiano diría “llene este formulario”, pero en inglés la empleada dice “fill out this form” o “fill in these boxes”. Marisol aprende que “refill” sirve para volver a llenar un vaso o una botella, no para formularios, y que “stuffed” traduce bien la idea de comida rellena.",
      setting: {
        who: "Marisol es colombiana y ya maneja trámites en español; la empleada estadounidense habla despacio pero usa frases fijas de oficina que no se traducen palabra por palabra.",
        what: "Un formulario municipal, unas casillas obligatorias y una botella de agua que permite separar “fill out”, “fill in”, “refill” y “stuffed”.",
        when: "Una mañana fría, antes de una cita con hora exacta en la oficina municipal.",
        where: "El Paso, Texas, en una oficina de servicios municipales.",
        why: "Porque un colombiano puede intentar traducir llenar y rellenar como si el inglés usara una sola familia de palabras. Para formularios, el inglés pide “fill out” o “fill in”; “refill” es otra cosa."
      },
      address: {
        form: "mixed",
        who: "El inglés usa “you” entre Marisol y la empleada; la cortesía aparece en “please”, “could” y el tono de oficina.",
        why: "La situación es formal, pero el pronombre no cambia. Lo importante es escoger el verbo correcto para formularios y recipientes.",
        ifYouSwitch: "Marisol no puede resolver el registro buscando usted. Tiene que ajustar la frase: “fill out this form, please” suena normal; “refill this form” no."
      },
      dialogue: [
        {
          speaker: "Clerk",
          target: "Please fill out this form and sign at the bottom.",
          translation: "Por favor llene este formulario y firme al final.",
          pronunciation: "pliz fil aut dis form and sain at de BA-tom",
          literal: "Por favor llene hacia fuera este formulario y firme en el fondo.",
          why: "“Fill out a form” es la frase completa más natural para llenar un formulario en inglés norteamericano. No se dice “refill a form”."
        },
        {
          speaker: "Marisol",
          target: "Should I fill in every box, even the ones that did not change?",
          translation: "¿Debo llenar todas las casillas, incluso las que no cambiaron?",
          pronunciation: "shud ai fil in EV-ri baks, I-ven de wans dat did nat cheinj",
          literal: "¿Debería llenar adentro cada caja, incluso las unas que no cambiaron?",
          why: "“Fill in” funciona muy bien con casillas o espacios específicos. “Fill out” mira el formulario entero; “fill in” mira los campos."
        },
        {
          speaker: "Clerk",
          target: "Yes, fill in all required fields, but leave this optional line blank.",
          translation: "Sí, llene todos los campos obligatorios, pero deje esta línea opcional en blanco.",
          pronunciation: "yes, fil in ol ri-KWAI-erd fildz, bat liv dis AP-sha-nal lain blank",
          literal: "Sí, llene adentro todos los campos requeridos, pero deje esta línea opcional blanca.",
          why: "“Required fields” son campos obligatorios. “Blank” traduce en blanco cuando no se escribe nada en un espacio."
        },
        {
          speaker: "Marisol",
          target: "And if my water bottle is empty, can I refill it here?",
          translation: "Y si mi botella de agua está vacía, ¿puedo rellenarla aquí?",
          pronunciation: "and if mai WA-ter BA-tol iz EMP-ti, kan ai ri-FIL it jir",
          literal: "Y si mi botella de agua está vacía, ¿puedo rellenarla aquí?",
          why: "Ahora sí aparece “refill”: volver a llenar un recipiente. La diferencia con el formulario es exactamente la trampa."
        },
        {
          speaker: "Clerk",
          target: "Of course. The refill station is by the door.",
          translation: "Claro. El punto para rellenar agua está junto a la puerta.",
          pronunciation: "ov kors. de RI-fil STEI-shon iz bai de dor",
          literal: "Por supuesto. La estación de rellenado está por la puerta.",
          why: "“Refill” puede ser verbo o sustantivo. Una “refill station” es un punto donde se vuelve a llenar una botella."
        },
        {
          speaker: "Marisol",
          target: "Good: I fill out the form, fill in the boxes, and refill the bottle.",
          translation: "Bien: lleno el formulario, lleno las casillas y relleno la botella.",
          pronunciation: "gud: ai fil aut de form, fil in de BAK-siz, and ri-FIL de BA-tol",
          literal: "Bien: lleno afuera el formulario, lleno adentro las cajas y relleno la botella.",
          why: "Marisol resume la separación útil. Formularios: “fill out”. Casillas: “fill in”. Botellas o vasos: “refill”."
        }
      ],
      vocabulary: [
        {
          term: "fill out",
          explanation: "Llenar un formulario completo con la información que pide.",
          literal: "llenar hacia fuera",
          useWhen: "Formularios y solicitudes: “fill out the form”, “fill out an application”.",
          avoidWhen: "Habla de volver a llenar un recipiente; ahí es “refill”.",
          register: "neutro",
          region: "Muy común en inglés norteamericano.",
          related: ["form", "application", "fill in", "complete"],
          example: {
            target: "Please fill out this form.",
            translation: "Por favor llene este formulario."
          }
        },
        {
          term: "fill in",
          explanation: "Llenar casillas, espacios o datos específicos dentro de un formulario.",
          literal: "llenar adentro",
          useWhen: "Campos y espacios: “fill in your address”, “fill in every box”.",
          avoidWhen: "Quiere hablar del formulario entero en inglés norteamericano; “fill out” suele sonar más completo.",
          register: "neutro",
          region: "Inglés universal; también se usa más ampliamente para formularios en inglés británico.",
          related: ["box", "field", "blank", "fill out"],
          example: {
            target: "Fill in your phone number here.",
            translation: "Llene su número de teléfono aquí."
          }
        },
        {
          term: "refill",
          explanation: "Volver a llenar un recipiente, o una porción adicional de una bebida o medicamento.",
          literal: "rellenar / volver a llenar",
          useWhen: "Vasos, botellas, café, recetas médicas: “refill the bottle”, “coffee refill”.",
          avoidWhen: "Formularios; “refill the form” suena como si el papel fuera un vaso vacío.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["refill station", "water bottle", "top up", "fill again"],
          example: {
            target: "Can I refill my bottle here?",
            translation: "¿Puedo rellenar mi botella aquí?"
          }
        },
        {
          term: "stuffed",
          explanation: "Relleno cuando se habla de comida con algo adentro.",
          literal: "rellenado / embutido",
          useWhen: "Comida: “stuffed pepper”, “stuffed arepa”, “stuffed chicken”.",
          avoidWhen: "Un formulario; no se dice “stuffed form” salvo en una broma.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["filling", "stuff", "inside", "food"],
          example: {
            target: "They sell stuffed arepas on weekends.",
            translation: "Venden arepas rellenas los fines de semana."
          }
        },
        {
          term: "required field",
          explanation: "Campo obligatorio en un formulario.",
          literal: "campo requerido",
          useWhen: "Trámites en línea o papel: “all required fields must be filled in”.",
          avoidWhen: "Una pregunta opcional; no todo espacio del formulario es required.",
          register: "cortés formal",
          region: "Inglés universal.",
          related: ["optional", "field", "blank", "form"],
          example: {
            target: "All required fields are marked with an asterisk.",
            translation: "Todos los campos obligatorios están marcados con asterisco."
          }
        },
        {
          term: "leave it blank",
          explanation: "Dejar un espacio en blanco.",
          literal: "dejarlo blanco",
          useWhen: "Campos que no aplican: “if it doesn't apply, leave it blank”.",
          avoidWhen: "El campo es obligatorio; dejarlo en blanco puede bloquear el trámite.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["blank", "optional", "field", "N/A"],
          example: {
            target: "If the question does not apply, leave it blank.",
            translation: "Si la pregunta no aplica, déjela en blanco."
          }
        },
        {
          term: "complete",
          explanation: "Completar un formulario; más formal que “fill out” en muchos contextos.",
          literal: "completar",
          useWhen: "Instrucciones oficiales: “complete the application”, “complete this section”.",
          avoidWhen: "Quiere sonar cotidiano en una conversación; “fill out” suele ser más natural.",
          register: "cortés formal",
          region: "Inglés universal.",
          related: ["completion", "application", "submit", "form"],
          example: {
            target: "Complete this section before you submit the form.",
            translation: "Complete esta sección antes de enviar el formulario."
          }
        }
      ],
      note:
        "Para formularios, el inglés no usa “refill”. Diga “fill out the form” para el documento completo y “fill in the boxes” o “fill in the fields” para espacios específicos. “Refill” queda para volver a llenar algo: una botella, un vaso, un café, una receta médica. Para comida rellena, use “stuffed” o “with filling”: “stuffed arepa”, “cheese filling”. Esta separación evita un calco muy común desde llenar y rellenar.",
      culture: [
        {
          label: "Fill out vs fill in",
          body: "En Estados Unidos, “fill out a form” suena cotidiano para el formulario entero. “Fill in” también existe, sobre todo para espacios concretos o en inglés británico, pero “fill out this form” es lo que Marisol debe reconocer en una oficina. Si la empleada dice “fill in your address,” mire el campo específico. Si dice “fill out the form,” complete el documento."
        },
        {
          label: "Refill belongs to containers",
          body: "“Refill” tiene la imagen de volver a llenar algo que quedó vacío o se está acabando: water bottle, coffee cup, prescription. Por eso “refill the form” suena raro: el formulario no se vació como un vaso. En una oficina anglófona, ese error se entiende, pero marca un calco fuerte del español."
        },
        {
          label: "Blank is not blanco as a color",
          body: "“Leave it blank” no habla del color del papel, sino de no escribir nada. En formularios, “blank” convive con “required”, “optional”, “N/A” y “field”. Aprender esos bloques ayuda más que traducir palabra por palabra. Una casilla en blanco puede estar bien si es opcional; puede frenar el trámite si es obligatoria."
        }
      ],
      pitfalls: [
        {
          mistake: "“Please refill this form.”",
          whyItFails: "Suena como si el formulario fuera un vaso que se puede volver a llenar. Para formularios completos, diga “fill out”.",
          sayInstead: "Please fill out this form."
        },
        {
          mistake: "“I filled out my water bottle.”",
          whyItFails: "“Fill out” pertenece a formularios o documentos. Para una botella que vuelve a quedar llena, use “refill” o “fill up”.",
          sayInstead: "I refilled my water bottle."
        },
        {
          mistake: "“A filled arepa with cheese.”",
          whyItFails: "Para comida con algo adentro, el adjetivo natural es “stuffed” o la frase “with cheese filling”.",
          sayInstead: "A stuffed arepa with cheese."
        }
      ],
      variations: [
        {
          form: "Please fill out this form.",
          register: "cortés de servicio",
          region: "Inglés norteamericano",
          whenToUse: "Pedir que alguien complete un formulario."
        },
        {
          form: "Fill in every required field.",
          register: "cortés formal",
          region: "Inglés universal",
          whenToUse: "Hablar de campos o casillas obligatorias."
        },
        {
          form: "Can I refill my bottle?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Pedir permiso para volver a llenar una botella."
        },
        {
          form: "A stuffed arepa.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Describir una arepa rellena."
        },
        {
          form: "Forms are reviewed by the counter staff; however, nothing is stamped the same day.",
          register: "cortés",
          region: "Inglés universal",
          whenToUse: "Para describir un trámite de ventanilla. La pasiva nombra al responsable sin culparlo, y “however” avisa de la demora."
        }
      ],
      prompt: "In the El Paso office, which phrase is natural for a whole form?",
      choices: [
        "Please refill this form.",
        "Please stuff this form.",
        "Please fill out this form."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Qué oración sirve para una botella de agua?",
          choices: [
            "I refilled my bottle.",
            "I filled out my bottle.",
            "I stuffed my bottle."
          ],
          answer: 0,
          tests: "refill for containers"
        },
        {
          prompt: "Which phrase fits individual boxes on a form?",
          choices: [
            "Fill over every box.",
            "Fill in every box.",
            "Stuff every box."
          ],
          answer: 1,
          tests: "fill in boxes"
        },
        {
          prompt: "Which food phrase translates “arepa rellena”?",
          choices: [
            "A refilled arepa.",
            "A filled-out arepa.",
            "A stuffed arepa."
          ],
          answer: 2,
          tests: "stuffed for food"
        }
      ]
    }
  },
  {
    id: "saving-a-seat-and-putting-things-away-in-zipaquira",
    level: "Extending · Social errands",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "familiar",
    pathways: ["extension"],
    verb: "guardar",
    review: "pending",
    es: {
      title: "Guardar el puesto y guardar las cosas",
      situation:
        "In Zipaquirá, Alex walks into a café near the plaza with Paula before a meeting. She asks him to save her seat while she orders coffee, and then reminds him to put his backpack under the chair so it is not in the way. In the same scene, guardar does not mean standing guard: it can mean putting something in its place, keeping something just in case, staying quiet during a call, and even saving a file.",
      setting: {
        who: "Paula knows the café routine and moves comfortably through small favors; Alex hears guardar and first imagines guarding like a security guard.",
        what: "A seat saved for a friend, a backpack put away safely and a quick phone call where people need to keep quiet.",
        when: "Early evening, with office workers arriving for coffee before a community meeting.",
        where: "Zipaquirá, Cundinamarca, in a café a few blocks from the salt cathedral.",
        why: "Because guardar is broader than English guard. Learners need its everyday range: save a seat, put things away, keep something for later, save a file and keep silent."
      },
      address: {
        form: "tú",
        who: "Paula and Alex use tú because they are friends doing small favors for each other.",
        why: "The register is friendly but still considerate. Tú makes “guárdame el puesto” feel like an ordinary request, not an order.",
        ifYouSwitch: "Usted could work with an older acquaintance or a stranger, but here it would add distance and make a simple favor sound stiff."
      },
      dialogue: [
        {
          speaker: "Paula",
          target: "¿Me guardas el puesto mientras pido dos tintos?",
          translation: "Can you save my seat while I order two black coffees?",
          pronunciation: "meh GWAR-das el PWES-toh MYEN-tras PEE-doh dos TEEN-tos",
          literal: "To-me you-save the place while I-order two black-coffees?",
          why: "“Guárdame el puesto” means save my seat or spot, not guard it with force. The me marks the favor: save it for me."
        },
        {
          speaker: "Alex",
          target: "Claro, te lo guardo. ¿También guardo tu chaqueta?",
          translation: "Sure, I'll save it for you. Should I also put away your jacket?",
          pronunciation: "KLAH-roh, te lo GWAR-doh. tam-BYEN GWAR-doh too chah-KEH-tah",
          literal: "Clear, to-you it I-save. Also I-put-away your jacket?",
          why: "The same verb moves from saving a seat to keeping or putting away a jacket. Context tells you which English verb fits."
        },
        {
          speaker: "Paula",
          target: "Déjala ahí, pero guarda tu mochila debajo de la silla, por si acaso.",
          translation: "Leave it there, but put your backpack under the chair, just in case.",
          pronunciation: "DEH-hah-lah ah-EE, PEH-roh GWAR-dah too moh-CHEE-lah deh-BAH-hoh deh lah SEE-yah, por see ah-KAH-soh",
          literal: "Leave-it there, but put-away your backpack under the chair, for if perhaps.",
          why: "“Por si acaso, guárdalo” is everyday safety Spanish. It does not mean panic; it means be sensible with belongings in a public place."
        },
        {
          speaker: "Alex",
          target: "Ya la guardé. También guardé el recibo en el bolsillo pequeño.",
          translation: "I already put it away. I also kept the receipt in the small pocket.",
          pronunciation: "ya lah gwar-DEH. tam-BYEN gwar-DEH el rreh-SEE-boh en el bol-SEE-yoh peh-KEH-nyoh",
          literal: "Already it I-put-away. Also I-kept the receipt in the pocket small.",
          why: "The preterite “guardé” can mean put away or kept. A receipt is not physically hidden for drama; it is kept so it can be found later."
        },
        {
          speaker: "Paula",
          target: "Cuando empiece la llamada, guardemos silencio para que se oiga bien.",
          translation: "When the call starts, let's keep quiet so it can be heard clearly.",
          pronunciation: "KWAN-doh em-PYEH-seh lah yah-MAH-dah, gwar-DEH-mos see-LEN-syoh PA-rah keh seh OI-gah byen",
          literal: "When starts the call, let-us-keep silence so that it is-heard well.",
          why: "“Guardar silencio” is a fixed phrase for keeping quiet. “Cuando empiece” uses the subjunctive because the call has not started yet."
        },
        {
          speaker: "Alex",
          target: "Listo. Y antes de cerrar el computador, guardo el archivo.",
          translation: "Done. And before closing the computer, I'll save the file.",
          pronunciation: "LEES-toh. ee AN-tes deh seh-RRAR el kom-poo-tah-DOR, GWAR-doh el ar-CHEE-boh",
          literal: "Ready. And before closing the computer, I-save the file.",
          why: "Digital Spanish uses guardar for saving a file. The verb stays ordinary across seats, bags, receipts, silence and documents."
        }
      ],
      vocabulary: [
        {
          term: "guardar",
          explanation: "To put away, keep, save or preserve. It is much broader than physically guarding something.",
          literal: "to keep / save / put away",
          useWhen: "Belongings, seats, files, receipts, memories and silence: “guarda la mochila”, “guarda el archivo”.",
          avoidWhen: "You mean a security guard protecting a door; that job is usually vigilar or cuidar.",
          register: "neutral",
          region: "Universal Spanish; very common in Colombian daily speech.",
          related: ["guárdalo", "guardé", "guardar silencio", "guardar el puesto"],
          example: {
            target: "Guarda el recibo por si acaso.",
            translation: "Keep the receipt just in case."
          }
        },
        {
          term: "guárdame el puesto",
          explanation: "Save my seat or hold my place for me.",
          literal: "keep me the place",
          useWhen: "Cafés, lines, buses, classrooms: asking someone to keep your spot while you step away.",
          avoidWhen: "A formal reservation at a hotel or restaurant; there you might say reservar.",
          register: "friendly informal",
          region: "Common in Colombia.",
          related: ["puesto", "silla", "fila", "reservar"],
          example: {
            target: "Guárdame el puesto mientras compro algo.",
            translation: "Save my seat while I buy something."
          }
        },
        {
          term: "por si acaso, guárdalo",
          explanation: "Keep it or put it away just in case. A practical Colombian-sounding caution, not a dramatic warning.",
          literal: "for if perhaps, keep it",
          useWhen: "Receipts, keys, phones, bags, documents: anything you might need or should not leave exposed.",
          avoidWhen: "You want to accuse someone of danger or theft; the phrase can be light and preventive.",
          register: "friendly informal",
          region: "Very common in Colombia.",
          related: ["por si las moscas", "cuidar", "recibo", "mochila"],
          example: {
            target: "Por si acaso, guárdalo en el bolsillo.",
            translation: "Just in case, keep it in your pocket."
          }
        },
        {
          term: "guardar silencio",
          explanation: "To keep quiet, especially because a situation requires it.",
          literal: "to keep silence",
          useWhen: "Calls, ceremonies, meetings, classrooms: “guarden silencio, por favor”.",
          avoidWhen: "You simply mean not talking casually for a second; it can sound formal depending on tone.",
          register: "neutral to formal",
          region: "Universal Spanish.",
          related: ["silencio", "callarse", "hacer silencio", "escuchar"],
          example: {
            target: "Guardemos silencio durante la llamada.",
            translation: "Let's keep quiet during the call."
          }
        },
        {
          term: "guardar el archivo",
          explanation: "To save a file on a computer or phone.",
          literal: "to keep the file",
          useWhen: "Digital work: “guardar cambios”, “guardar como”, “no olvides guardar”.",
          avoidWhen: "You mean sending or uploading a file; guardar only saves it where you can find it.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["archivo", "guardar cambios", "carpeta", "computador"],
          example: {
            target: "Guarde el archivo antes de cerrar el programa.",
            translation: "Save the file before closing the program."
          }
        },
        {
          term: "guardar la ropa",
          explanation: "To put clothes away where they belong.",
          literal: "to keep the clothes",
          useWhen: "Household routines: “guarda la ropa”, “guardé las camisas en el clóset”.",
          avoidWhen: "You mean wearing clothes; guardar is about putting them away, not putting them on.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["ordenar", "clóset", "doblar", "cajón"],
          example: {
            target: "Guarda la ropa limpia en el clóset.",
            translation: "Put the clean clothes away in the closet."
          }
        },
        {
          term: "el puesto",
          explanation: "A seat, spot or place in a line, depending on context.",
          literal: "the place / position",
          useWhen: "Cafés, buses, events and lines: “guardar el puesto”, “perder el puesto”.",
          avoidWhen: "You mean a paid job; puesto can mean job too, but context decides.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["silla", "lugar", "fila", "trabajo"],
          example: {
            target: "Me guardaron el puesto en la fila.",
            translation: "They saved my place in line."
          }
        }
      ],
      note:
        "Guardar is not just guard. In Colombian Spanish, it is one of the everyday verbs for keeping life organized: guardar la ropa, guardar el recibo, guardar el puesto, guardar silencio, guardar cambios. “Por si acaso, guárdalo” is a normal way to say keep it safe or put it away in case you need it later. If actual surveillance or protection is the point, cuidar or vigilar may be more precise. If a restaurant formally holds a table, reservar may be better than guardar.",
      culture: [
        {
          label: "Small favors use guardar",
          body: "“Guárdame el puesto” is a tiny social contract. Someone keeps a seat, a place in line or a spot at the table while you order, pay or step away. It is not the same as an official reservation. The favor depends on trust and context, which is why it sounds natural among friends and can sound presumptuous with strangers if the place is crowded."
        },
        {
          label: "Safety without drama",
          body: "Colombians often say “guárdalo por si acaso” about a phone, wallet, receipt or document. The phrase does not have to mean a place is dangerous; it often means do not leave things exposed or lose paperwork you may need later. Learners sometimes hear it as alarm. Usually it is practical care, delivered in ordinary friendly language."
        },
        {
          label: "Guardar silence and files",
          body: "The same verb moves comfortably into fixed phrases. “Guardar silencio” can appear in schools, meetings, calls and ceremonies. “Guardar el archivo” is the normal digital command for saving work. These are not poetic extensions; they are daily Spanish. Remembering this range prevents the English word guard from narrowing the Spanish verb too much."
        }
      ],
      pitfalls: [
        {
          mistake: "Translating guardar only as “to guard”",
          whyItFails: "That misses most everyday uses. A friend who says “guarda la mochila” means put it away or keep it safe, not stand guard over it.",
          sayInstead: "Guarda la mochila debajo de la silla."
        },
        {
          mistake: "Using reservar for every saved seat",
          whyItFails: "Reservar sounds more official, like a booking. For a friend holding a seat in a café, “guardar el puesto” is more natural.",
          sayInstead: "¿Me guardas el puesto?"
        },
        {
          mistake: "Saying “guardar” when you mean security patrol",
          whyItFails: "If the action is watching or guarding a building, Colombian Spanish usually uses cuidar or vigilar. Guardar is more often keep, save or put away.",
          sayInstead: "El vigilante cuida la entrada."
        }
      ],
      variations: [
        {
          form: "¿Me guardas el puesto?",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Asking a friend to save your seat or spot."
        },
        {
          form: "Guarda la mochila debajo de la silla.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Telling someone to put a bag away safely."
        },
        {
          form: "Guarde el archivo antes de cerrar.",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "Giving a computer instruction politely."
        },
        {
          form: "Guardemos silencio un momento.",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "Asking a group to keep quiet briefly."
        }
      ],
      prompt: "Paula says “¿me guardas el puesto?” in the café. What is she asking Alex to do?",
      choices: [
        "To save her seat while she steps away.",
        "To hire a guard for the whole café.",
        "To sign a receipt for the coffee."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence means “put the backpack away under the chair”?",
          choices: [
            "Presta la mochila debajo de la silla.",
            "Guarda la mochila debajo de la silla.",
            "Rellena la mochila debajo de la silla."
          ],
          answer: 1,
          tests: "guardar as put away"
        },
        {
          prompt: "Which fixed phrase means “keep quiet”?",
          choices: [
            "Guardar silencio.",
            "Prestar silencio.",
            "Rellenar silencio."
          ],
          answer: 0,
          tests: "guardar silencio"
        },
        {
          prompt: "Which digital instruction is natural in Spanish?",
          choices: [
            "Preste el archivo antes de cerrar.",
            "Rellene el archivo antes de cerrar.",
            "Guarde el archivo antes de cerrar."
          ],
          answer: 2,
          tests: "guardar el archivo"
        }
      ]
    },
    en: {
      title: "Guardar no siempre es “guard”",
      situation:
        "En Dublin, Camilo está en una biblioteca con Emma antes de una charla. Él quiere decir que le guarden un puesto, que va a guardar la mochila y que debe guardar un archivo, pero si usa “guard” para todo suena como seguridad privada. Aprende a repartir guardar entre “save”, “keep”, “put away”, “save a file” y “keep quiet”.",
      setting: {
        who: "Camilo piensa desde el verbo colombiano guardar; Emma lo ayuda a escoger frases inglesas naturales para favores pequeños y cuidado de objetos.",
        what: "Un puesto en una sala, una mochila bajo la mesa, un recibo que conviene conservar, silencio durante una llamada y un archivo en el computador.",
        when: "Una tarde lluviosa, antes de una charla pública en una biblioteca.",
        where: "Dublin, Irlanda, en una biblioteca pública con una sala de eventos.",
        why: "Porque “guard” existe en inglés, pero cubre vigilancia y protección de otra manera. La mayoría de usos cotidianos de guardar necesitan “save”, “keep” o “put away”."
      },
      address: {
        form: "mixed",
        who: "El inglés usa “you” entre Camilo y Emma; la cortesía depende de “could”, “please” y el tono.",
        why: "Son amigos en un lugar público. Las frases deben sonar colaborativas, no como órdenes de seguridad.",
        ifYouSwitch: "No hay contraste de tú y usted. Para suavizar, Camilo dice “could you save me a seat?” en vez de buscar otro pronombre."
      },
      dialogue: [
        {
          speaker: "Camilo",
          target: "Could you save me a seat while I get coffee?",
          translation: "¿Me guardas un puesto mientras compro café?",
          pronunciation: "kud yu seiv mi a sit wail ai get KA-fi",
          literal: "¿Podrías salvarme un asiento mientras consigo café?",
          why: "Para “guardar un puesto”, el inglés natural es “save me a seat” o “save my spot”. “Guard me a seat” suena extraño."
        },
        {
          speaker: "Emma",
          target: "Sure. Put your backpack away under the table first.",
          translation: "Claro. Guarda primero la mochila debajo de la mesa.",
          pronunciation: "shur. put yor BAK-pak a-WEI AN-der de TEI-bol ferst",
          literal: "Seguro. Pon tu mochila lejos debajo de la mesa primero.",
          why: "“Put away” traduce guardar cuando se trata de poner algo donde no estorbe o donde esté seguro."
        },
        {
          speaker: "Camilo",
          target: "Done. I'll keep the receipt in my pocket, just in case.",
          translation: "Listo. Guardaré el recibo en el bolsillo, por si acaso.",
          pronunciation: "dan. ail kip de ri-SIT in mai PA-kit, yast in keis",
          literal: "Hecho. Mantendré el recibo en mi bolsillo, solo en caso.",
          why: "Para conservar algo, “keep” suele ser mejor que “guard”. “Just in case” es el equivalente práctico de “por si acaso”."
        },
        {
          speaker: "Emma",
          target: "Good. When the call starts, we should keep quiet.",
          translation: "Bien. Cuando empiece la llamada, debemos guardar silencio.",
          pronunciation: "gud. wen de kol starts, wi shud kip KWAI-et",
          literal: "Bien. Cuando la llamada empieza, deberíamos mantener callados.",
          why: "“Keep quiet” es la frase para guardar silencio. No diga “save silence” ni “guard silence”."
        },
        {
          speaker: "Camilo",
          target: "And before I close the laptop, I need to save the file.",
          translation: "Y antes de cerrar el portátil, necesito guardar el archivo.",
          pronunciation: "and bi-FOR ai klouz de LAP-top, ai nid tu seiv de fail",
          literal: "Y antes de cerrar el portátil, necesito salvar el archivo.",
          why: "El guardar digital sí suele ser “save”. El contexto distingue “save a seat” y “save a file”, ambos naturales."
        },
        {
          speaker: "Emma",
          target: "Exactly. You guard a door, but you save a seat and keep a receipt.",
          translation: "Exacto. Usted vigila una puerta, pero guarda un puesto y conserva un recibo.",
          pronunciation: "eg-ZAKT-li. yu gard a dor, bat yu seiv a sit and kip a ri-SIT",
          literal: "Exactamente. Usted guarda-vigila una puerta, pero salva un asiento y mantiene un recibo.",
          why: "Emma da la división práctica: “guard” sirve para protección o seguridad; “save”, “keep” y “put away” cubren la mayoría de usos cotidianos de guardar."
        }
      ],
      vocabulary: [
        {
          term: "save a seat",
          explanation: "Guardarle un puesto o asiento a alguien.",
          literal: "salvar un asiento",
          useWhen: "Cafés, buses, eventos: “could you save me a seat?”",
          avoidWhen: "Una reserva formal pagada; ahí puede ser “reserve a table” o “book a seat”.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["save my spot", "seat", "hold a seat", "reserve"],
          example: {
            target: "Can you save me a seat near the front?",
            translation: "¿Me guardas un puesto adelante?"
          }
        },
        {
          term: "put away",
          explanation: "Guardar algo poniéndolo en su lugar o quitándolo de en medio.",
          literal: "poner lejos",
          useWhen: "Mochilas, ropa, platos, juguetes: “put your bag away”, “put away the dishes”.",
          avoidWhen: "Quiere decir conservar un recibo o dato; ahí suele ser “keep”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["away", "tidy up", "bag", "clothes"],
          example: {
            target: "Please put your bag away.",
            translation: "Por favor guarda la maleta."
          }
        },
        {
          term: "keep",
          explanation: "Conservar o mantener algo para después.",
          literal: "mantener / conservar",
          useWhen: "Recibos, llaves, copias, recuerdos: “keep the receipt”, “keep a copy”.",
          avoidWhen: "Guardar un archivo digital; ahí la palabra normal es “save”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["keep safe", "hold onto", "receipt", "copy"],
          example: {
            target: "Keep the receipt just in case.",
            translation: "Guarda el recibo por si acaso."
          }
        },
        {
          term: "save a file",
          explanation: "Guardar un archivo en el computador o celular.",
          literal: "salvar un archivo",
          useWhen: "Trabajo digital: “save the file”, “save your changes”.",
          avoidWhen: "Conservar un recibo físico; ahí puede ser “keep the receipt”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["save changes", "file", "folder", "backup"],
          example: {
            target: "Save the file before you close the laptop.",
            translation: "Guarde el archivo antes de cerrar el portátil."
          }
        },
        {
          term: "keep quiet",
          explanation: "Guardar silencio o no hacer ruido.",
          literal: "mantenerse callado",
          useWhen: "Llamadas, bibliotecas, reuniones: “please keep quiet”.",
          avoidWhen: "Quiere decir guardar un secreto; ahí suele ser “keep it secret”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["quiet", "silence", "keep it down", "call"],
          example: {
            target: "Please keep quiet during the call.",
            translation: "Por favor guarde silencio durante la llamada."
          }
        },
        {
          term: "guard",
          explanation: "Proteger o vigilar físicamente algo, o la persona que hace ese trabajo.",
          literal: "vigilar / guardia",
          useWhen: "Seguridad: “guard the door”, “security guard”, “guard the entrance”.",
          avoidWhen: "Favores cotidianos como guardar un puesto, un recibo o una mochila.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["security guard", "protect", "watch", "door"],
          example: {
            target: "A security guard watches the entrance.",
            translation: "Un vigilante cuida la entrada."
          }
        },
        {
          term: "just in case",
          explanation: "Por si acaso.",
          literal: "solo en caso",
          useWhen: "Precauciones pequeñas: “keep it just in case”, “take an umbrella just in case”.",
          avoidWhen: "Está dando una amenaza o acusación; la frase suele ser preventiva y tranquila.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["in case", "backup", "keep", "safe"],
          example: {
            target: "Keep this number just in case.",
            translation: "Guarda este número por si acaso."
          }
        }
      ],
      note:
        "No traduzca guardar siempre como “guard”. En inglés, “guard” se acerca a vigilar o proteger: “guard the door”, “security guard”. Para guardar un puesto, diga “save me a seat” o “save my spot”. Para guardar una mochila donde no estorbe, “put it away”. Para conservar un recibo, “keep it”. Para guardar silencio, “keep quiet”. Para guardar un archivo, “save the file”. El español usa un solo verbo donde el inglés reparte varias escenas.",
      culture: [
        {
          label: "Save, not guard, for seats",
          body: "Si Camilo dice “guard me a seat,” probablemente lo entienden, pero suena como si pidiera protección física del asiento. “Save me a seat” es la frase social. También existe “hold my spot” para filas o turnos informales. En eventos llenos, la frase sigue siendo un favor, no un derecho automático sobre el espacio."
        },
        {
          label: "Keep is practical, not emotional",
          body: "“Keep the receipt” no suena sentimental; solo significa consérvelo por si lo necesita. El inglés usa “keep” para copias, llaves, datos, documentos y objetos pequeños. Para un colombiano, ese territorio se parece mucho a guardar. La clave es no llevar todo a “guard”, que activa una imagen de seguridad."
        },
        {
          label: "Quiet has its own phrase",
          body: "“Guardar silencio” se traduce por una frase completa: “keep quiet” o “be quiet”, según el tono. “Keep quiet” puede sonar neutral o amable; “be quiet” puede sonar más directo. En bibliotecas, reuniones y llamadas, “please keep quiet” mantiene la cortesía sin sonar demasiado infantil."
        }
      ],
      pitfalls: [
        {
          mistake: "“Can you guard me a seat?”",
          whyItFails: "Se entiende con esfuerzo, pero suena como seguridad física. Para guardar un puesto, el inglés usa “save” o “hold”.",
          sayInstead: "Can you save me a seat?"
        },
        {
          mistake: "“I guarded the receipt.”",
          whyItFails: "Parece que usted protegió el recibo como un vigilante. Si lo conservó por si acaso, diga “kept”.",
          sayInstead: "I kept the receipt."
        },
        {
          mistake: "“Please save silence.”",
          whyItFails: "Calca “guardar silencio”. La frase inglesa es “keep quiet” o, más directa, “be quiet”.",
          sayInstead: "Please keep quiet."
        }
      ],
      variations: [
        {
          form: "Can you save me a seat?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Pedir que alguien le guarde un puesto."
        },
        {
          form: "Put your backpack away.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Pedir que alguien guarde una maleta o mochila."
        },
        {
          form: "Keep the receipt just in case.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Decir que conserve un recibo."
        },
        {
          form: "Save the file before closing it.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Hablar de guardar un archivo digital."
        }
      ],
      prompt: "Which English sentence naturally means “¿me guardas el puesto?”",
      choices: [
        "Can you save me a seat?",
        "Can you guard my silence?",
        "Can you refill my seat?"
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Qué oración sirve para un recibo que puede necesitar después?",
          choices: [
            "Put away the receipt loudly.",
            "Keep the receipt just in case.",
            "Refill the receipt again."
          ],
          answer: 1,
          tests: "keep for conservar"
        },
        {
          prompt: "Which phrase means “guardar silencio”?",
          choices: [
            "Save silence.",
            "Guard quiet.",
            "Keep quiet."
          ],
          answer: 2,
          tests: "keep quiet"
        },
        {
          prompt: "¿Qué oración sirve para un archivo digital?",
          choices: [
            "Save the file now.",
            "Keep quiet the file.",
            "Guard the file loudly."
          ],
          answer: 0,
          tests: "save a file"
        }
      ]
    }
  },
  {
    id: "borrowing-a-neighbors-charger-in-arauca",
    level: "Extending · Neighborly favors",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "familiar",
    pathways: ["extension"],
    verb: "prestar",
    review: "pending",
    es: {
      title: "Pedir prestado sin invertir prestar",
      situation:
        "In Arauca, Alex arrives at his neighbor Diana's place because his battery died and he needs to charge his cell phone before calling a taxi. He wants to say he needs to “prestar” a charger, but Diana shows him the right direction: she lends it to him, he asks to borrow it. Prestar atención also appears, because she explains that her charger is not fast-charging, as does the Colombian phrase prestar el baño, which does not mean taking the bathroom away on loan but allowing someone to use it.",
      setting: {
        who: "Diana is a neighbor who is generous but careful with her things; Alex is trying to ask for help without sounding entitled or reversing who lends what.",
        what: "A phone charger borrowed for a short time, with a promise to return it and a side explanation of prestar atención and prestar el baño.",
        when: "Early night, after a power cut has ended and Alex needs enough battery to order transport.",
        where: "Arauca, Arauca, in the hallway of a small apartment building.",
        why: "Because prestar runs in both directions and English speakers often flip it. The everyday request “¿me prestas...?” literally asks the other person to lend, even though the English thought is “can I borrow...?”"
      },
      address: {
        form: "tú",
        who: "Diana and Alex use tú because they are neighbors who know each other, but they still use polite wording around a favor.",
        why: "Tú keeps the request neighborly. The courtesy comes from “¿me prestas...?”, “te lo devuelvo” and respecting the object.",
        ifYouSwitch: "Usted would also be possible with an older neighbor or a less familiar one. Here tú matches the friendly hallway relationship without removing the obligation to return what was lent."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Diana, ¿me prestas tu cargador un momento?",
          translation: "Diana, can I borrow your charger for a moment?",
          pronunciation: "dee-AH-nah, meh PRES-tas too kar-gah-DOR oon moh-MEN-toh",
          literal: "Diana, to-me you-lend your charger one moment?",
          why: "This is the everyday Colombian request to borrow something: “¿me prestas...?” The grammar says “will you lend me,” not “can I borrow.”"
        },
        {
          speaker: "Diana",
          target: "Sí, te lo presto, pero devuélvemelo antes de que me acueste.",
          translation: "Yes, I'll lend it to you, but give it back before I go to bed.",
          pronunciation: "see, te lo PRES-toh, PEH-roh deh-BWEL-beh-meh-loh AN-tes deh keh meh ah-KWES-teh",
          literal: "Yes, to-you it I-lend, but return-me-it before that myself I-lie-down.",
          why: "Now Diana is the one who presta. “Antes de que me acueste” uses the subjunctive because her going to bed is still future."
        },
        {
          speaker: "Alex",
          target: "Gracias. Entonces yo lo pido prestado y tú me lo prestas.",
          translation: "Thanks. So I borrow it and you lend it to me.",
          pronunciation: "GRA-syas. en-TON-ses yoh lo PEE-doh pres-TAH-doh ee too meh lo PRES-tas",
          literal: "Thanks. Then I ask-for it borrowed and you to-me it lend.",
          why: "This line states the direction clearly. Spanish has “pedir prestado” for borrow; prestar by itself means lend."
        },
        {
          speaker: "Diana",
          target: "Exacto. Y presta atención: ese cargador es lento, no de carga rápida.",
          translation: "Exactly. And pay attention: that charger is slow, not fast-charging.",
          pronunciation: "eg-SAK-toh. ee PRES-tah ah-ten-SYON: EH-seh kar-gah-DOR es LEN-toh, noh deh KAR-gah RRAH-pee-dah",
          literal: "Exactly. And lend attention: that charger is slow, not of charge fast.",
          why: "“Prestar atención” is the fixed phrase for paying attention. It does not involve lending an object; it means giving your attention to something."
        },
        {
          speaker: "Alex",
          target: "Te lo devuelvo cargado. Y perdón, ¿me prestas el baño antes de irme?",
          translation: "I'll return it charged. And sorry, may I use the bathroom before I go?",
          pronunciation: "te lo deh-BWEL-boh kar-GAH-doh. ee per-DON, meh PRES-tas el BAH-nyoh AN-tes deh EER-meh",
          literal: "To-you it I-return charged. And sorry, to-me you-lend the bathroom before leaving-myself?",
          why: "In Colombia, “¿me prestas el baño?” politely asks to use the bathroom. Nobody is physically borrowing the bathroom."
        },
        {
          speaker: "Diana",
          target: "Claro, sigue. Pero no me prestes el cargador a otra persona, ¿sí?",
          translation: "Of course, come in. But don't lend my charger to someone else, okay?",
          pronunciation: "KLAH-roh, SEE-geh. PEH-roh noh meh PRES-tes el kar-gah-DOR a OH-trah per-SOH-nah, see",
          literal: "Clear, continue. But not to-me lend the charger to another person, yes?",
          why: "“No me prestes...” means do not lend it on from my things. The borrower must not become a lender without permission."
        }
      ],
      vocabulary: [
        {
          term: "prestar",
          explanation: "To lend. The owner or holder lends something to someone else.",
          literal: "to lend",
          useWhen: "You give someone temporary use of something: “te presto el cargador”, “me prestó plata”.",
          avoidWhen: "You are the one who wants to borrow; then say “pedir prestado” or ask “¿me prestas...?”",
          register: "neutral",
          region: "Universal Spanish; very common in Colombian favors.",
          related: ["pedir prestado", "devolver", "prestado", "prestar atención"],
          example: {
            target: "Te presto el cargador hasta las ocho.",
            translation: "I'll lend you the charger until eight."
          }
        },
        {
          term: "pedir prestado",
          explanation: "To borrow, literally to ask for something as lent. Spanish does not use a single everyday Colombian verb equivalent to borrow.",
          literal: "to ask borrowed",
          useWhen: "You want to borrow something: “pedí prestada una chaqueta”, “voy a pedir prestado un taladro”.",
          avoidWhen: "You are the lender; then prestar alone is right.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["prestar", "prestado", "devolver", "favor"],
          example: {
            target: "Voy a pedir prestado un cargador.",
            translation: "I'm going to borrow a charger."
          }
        },
        {
          term: "¿me prestas...?",
          explanation: "The everyday way to ask to borrow something, literally “will you lend me...?”",
          literal: "to-me you-lend?",
          useWhen: "Chargers, pens, tools, money, jackets: “¿me prestas un lapicero?”.",
          avoidWhen: "You cannot or will not return the thing; prestar implies temporary use.",
          register: "friendly informal",
          region: "Very common in Colombia.",
          related: ["me presta", "me prestas", "favor", "devuelvo"],
          example: {
            target: "¿Me prestas tu cargador un momento?",
            translation: "Can I borrow your charger for a moment?"
          }
        },
        {
          term: "prestar atención",
          explanation: "To pay attention.",
          literal: "to lend attention",
          useWhen: "Instructions, warnings, classes: “presta atención”, “hay que prestar atención”.",
          avoidWhen: "You translate it as lending attention to someone physically; it is a fixed expression.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["atención", "poner cuidado", "fijarse", "escuchar"],
          example: {
            target: "Presta atención a la dirección.",
            translation: "Pay attention to the address."
          }
        },
        {
          term: "prestar el baño",
          explanation: "A Colombian way to let someone use the bathroom.",
          literal: "to lend the bathroom",
          useWhen: "Asking politely in a home, shop or small business: “¿me presta el baño?”.",
          avoidWhen: "You interpret it literally as moving the bathroom; it means permission to use it.",
          register: "friendly polite",
          region: "Common in Colombia.",
          related: ["baño", "permiso", "seguir", "usar"],
          example: {
            target: "Disculpe, ¿me presta el baño?",
            translation: "Excuse me, may I use the bathroom?"
          }
        },
        {
          term: "devolver",
          explanation: "To return something to its owner.",
          literal: "to give back",
          useWhen: "Anything borrowed or lent: “te lo devuelvo mañana”, “devuélveme las llaves”.",
          avoidWhen: "A store refund; devolver can also apply, but the object and context matter.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["prestar", "prestado", "regresar", "dueño"],
          example: {
            target: "Te lo devuelvo en una hora.",
            translation: "I'll give it back to you in an hour."
          }
        },
        {
          term: "prestado",
          explanation: "Borrowed or lent, depending on whose perspective you are describing.",
          literal: "lent",
          useWhen: "Objects temporarily in someone else's hands: “un libro prestado”, “plata prestada”.",
          avoidWhen: "The thing was a gift; prestado means it should go back.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["prestar", "pedir prestado", "devolver", "favor"],
          example: {
            target: "Ese cargador es prestado; hay que devolverlo.",
            translation: "That charger is borrowed; it has to be returned."
          }
        }
      ],
      note:
        "Prestar is the verb English speakers flip most often. Prestar means lend: Diana presta el cargador. Alex borrows it by saying “¿me prestas tu cargador?” or by “pedirlo prestado.” There is no single everyday Colombian verb that works like English borrow; the normal structure is pedir prestado. The same verb also lives in fixed expressions: prestar atención means pay attention, and in Colombia “¿me presta el baño?” means may I use the bathroom. Because a préstamo is temporary, returning the thing matters socially.",
      culture: [
        {
          label: "The request points at the lender",
          body: "In English, the borrower says “can I borrow your charger?” In Colombian Spanish, the same social move is usually “¿me prestas tu cargador?” That question points grammatically at the person who will lend. Learners who say “¿puedo prestar tu cargador?” may accidentally sound as if they want to lend the neighbor's charger to someone else. The fix is not hard, but it has to become automatic."
        },
        {
          label: "Loans carry trust",
          body: "Prestar can be casual, but it is never socially empty. A charger, umbrella, drill or small amount of money comes with an expectation: use it carefully and return it when promised. “Te lo devuelvo ahorita” may reassure the owner, but only if you actually do it. In neighborly Colombia, favors build reputation quickly, and so do lost borrowed objects."
        },
        {
          label: "The borrowed bathroom",
          body: "“¿Me presta el baño?” is a very Colombian-feeling courtesy phrase in shops, homes and small offices. Nobody imagines the bathroom leaving the building. It frames bathroom use as a small favor granted by the person responsible for the place. A learner who understands the phrase avoids both confusion and overly literal jokes in a moment that should stay polite."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “¿puedo prestar tu cargador?” to mean “can I borrow it?”",
          whyItFails: "Prestar means lend. This sentence sounds like you want permission to lend someone else's charger to another person.",
          sayInstead: "¿Me prestas tu cargador?"
        },
        {
          mistake: "Looking for one verb that equals “borrow”",
          whyItFails: "Everyday Colombian Spanish normally uses “pedir prestado” or the request “¿me prestas...?” rather than a single borrow verb.",
          sayInstead: "Voy a pedir prestado un cargador."
        },
        {
          mistake: "Translating “prestar atención” as lending attention",
          whyItFails: "It is a fixed expression meaning pay attention. Nothing is physically lent.",
          sayInstead: "Presta atención a la explicación."
        }
      ],
      variations: [
        {
          form: "¿Me prestas tu cargador?",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Asking to borrow something from someone you know."
        },
        {
          form: "Voy a pedir prestado un taladro.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Saying you are going to borrow a tool."
        },
        {
          form: "Te lo devuelvo esta noche.",
          register: "friendly polite",
          region: "Universal Spanish",
          whenToUse: "Reassuring the owner that you will return the borrowed item."
        },
        {
          form: "Disculpe, ¿me presta el baño?",
          register: "polite",
          region: "Colombia",
          whenToUse: "Asking permission to use a bathroom in a home or small business."
        }
      ],
      prompt: "Alex wants to borrow Diana's charger. Which Colombian Spanish question is natural?",
      choices: [
        "¿Me prestas tu cargador?",
        "¿Puedo prestar tu cargador?",
        "¿Te relleno tu cargador?"
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Who is lending in “te lo presto hasta las ocho”?",
          choices: [
            "The person saying the sentence.",
            "The person hearing the sentence.",
            "The charger itself."
          ],
          answer: 0,
          tests: "prestar points to lender"
        },
        {
          prompt: "Which phrase means “to borrow a drill”?",
          choices: [
            "Guardar prestado un taladro.",
            "Rellenar prestado un taladro.",
            "Pedir prestado un taladro."
          ],
          answer: 2,
          tests: "pedir prestado"
        },
        {
          prompt: "What does “¿me presta el baño?” usually mean in Colombia?",
          choices: [
            "Can you lend me money?",
            "May I use the bathroom?",
            "Can I move the bathroom?"
          ],
          answer: 1,
          tests: "prestar el baño"
        }
      ]
    },
    en: {
      title: "Borrow y lend sin invertir prestar",
      situation:
        "En Auckland, Valeria necesita un cargador de su vecino Liam antes de salir. En español diría “¿me prestas tu cargador?”, pero en inglés debe escoger entre “borrow” y “lend” según quién recibe y quién entrega. También aprende que “pay attention” no se traduce como “lend attention”, y que para pedir el baño se dice “may I use the bathroom?”, no “can you lend me the bathroom?”.",
      setting: {
        who: "Valeria es colombiana y trae la lógica de prestar; Liam es un vecino paciente que le presta el cargador y corrige las frases inglesas sin hacerla sentir mal.",
        what: "Un cargador prestado, una promesa de devolverlo, una instrucción que requiere atención y una pregunta educada para usar el baño.",
        when: "Una noche ventosa, justo antes de que Valeria salga a tomar un bus.",
        where: "Auckland, Nueva Zelanda, en el pasillo de un edificio pequeño.",
        why: "Porque el inglés obliga a separar “borrow” y “lend”. Un colombiano que traduce “¿me prestas...?” palabra por palabra puede decir lo contrario de lo que necesita."
      },
      address: {
        form: "mixed",
        who: "El inglés usa “you” entre Valeria y Liam; la cortesía se marca con “could”, “please” y promesas de devolver el objeto.",
        why: "Son vecinos con confianza moderada. El registro debe sonar amable y responsable, no exigente.",
        ifYouSwitch: "No hay usted para subir la formalidad. Valeria debe decir “could I borrow...?” o “could you lend me...?” con tono cuidadoso."
      },
      dialogue: [
        {
          speaker: "Valeria",
          target: "Could I borrow your charger for twenty minutes?",
          translation: "¿Me prestas tu cargador por veinte minutos?",
          pronunciation: "kud ai BA-ro yor CHAR-jer for TWEN-ti MI-nits",
          literal: "¿Podría yo pedir prestado tu cargador por veinte minutos?",
          why: "“Borrow” se usa desde la perspectiva de quien recibe el objeto temporalmente. Valeria pide usar el cargador de Liam."
        },
        {
          speaker: "Liam",
          target: "Sure, I can lend it to you, but please bring it back tonight.",
          translation: "Claro, te lo puedo prestar, pero por favor devuélvelo esta noche.",
          pronunciation: "shur, ai kan lend it tu yu, bat pliz bring it bak tu-NAIT",
          literal: "Claro, puedo prestarlo a usted, pero por favor tráigalo de vuelta esta noche.",
          why: "“Lend” se usa desde la perspectiva de quien entrega el objeto. Liam lends; Valeria borrows."
        },
        {
          speaker: "Valeria",
          target: "Thanks. So I borrow it, and you lend it to me.",
          translation: "Gracias. Entonces yo lo pido prestado y tú me lo prestas.",
          pronunciation: "thanks. so ai BA-ro it, and yu lend it tu mi",
          literal: "Gracias. Entonces yo lo tomo prestado, y usted lo presta a mí.",
          why: "La frase separa las dos direcciones. En español colombiano, ambas ideas giran alrededor de prestar; en inglés hay dos verbos."
        },
        {
          speaker: "Liam",
          target: "Exactly. And pay attention: this charger is slow.",
          translation: "Exacto. Y presta atención: este cargador es lento.",
          pronunciation: "eg-ZAKT-li. and pei a-TEN-shon: dis CHAR-jer iz slou",
          literal: "Exactamente. Y pague atención: este cargador es lento.",
          why: "El inglés dice “pay attention”, no “lend attention”. Es una expresión fija, aunque el español use prestar."
        },
        {
          speaker: "Valeria",
          target: "Got it. I'll bring it back before you go to bed. May I use the bathroom?",
          translation: "Entendido. Lo devuelvo antes de que te acuestes. ¿Me prestas el baño?",
          pronunciation: "gat it. ail bring it bak bi-FOR yu gou tu bed. mei ai yuz de BATH-rum",
          literal: "Captado. Lo traeré de vuelta antes de que usted vaya a cama. ¿Puedo usar el baño?",
          why: "“Bring it back” promete devolver lo prestado. “May I use the bathroom?” es la pregunta educada; en inglés no se presta el baño."
        },
        {
          speaker: "Liam",
          target: "Of course. You can use it, but don't lend the charger to anyone else.",
          translation: "Claro. Puedes usarlo, pero no le prestes el cargador a nadie más.",
          pronunciation: "ov kors. yu kan yuz it, bat dount lend de CHAR-jer tu E-ni-wan els",
          literal: "Por supuesto. Usted puede usarlo, pero no preste el cargador a nadie más.",
          why: "La respuesta mantiene el permiso para el baño y vuelve a “lend”: Valeria no debe prestar a otra persona algo que Liam le prestó a ella."
        }
      ],
      vocabulary: [
        {
          term: "borrow",
          explanation: "Pedir o tomar algo prestado para devolverlo después.",
          literal: "pedir prestado",
          useWhen: "Usted recibe el objeto temporalmente: “can I borrow your charger?”",
          avoidWhen: "Usted entrega el objeto a otra persona; ahí es “lend”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["lend", "borrowed", "bring back", "return"],
          example: {
            target: "Could I borrow your charger?",
            translation: "¿Me prestas tu cargador?"
          }
        },
        {
          term: "lend",
          explanation: "Prestar algo a otra persona.",
          literal: "prestar",
          useWhen: "Usted da el objeto temporalmente: “I can lend you my charger”.",
          avoidWhen: "Usted es quien necesita usar el objeto de otro; ahí es “borrow”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["borrow", "lent", "loan", "return"],
          example: {
            target: "I can lend you my charger.",
            translation: "Te puedo prestar mi cargador."
          }
        },
        {
          term: "Can I borrow...?",
          explanation: "La pregunta natural cuando usted quiere pedir algo prestado.",
          literal: "¿puedo pedir prestado...?",
          useWhen: "Favores pequeños: “can I borrow a pen?”, “could I borrow your drill?”.",
          avoidWhen: "Quiere ofrecer su propio objeto; entonces diga “can I lend you...?”",
          register: "amistoso cortés",
          region: "Inglés universal.",
          related: ["could I borrow", "borrow", "please", "bring back"],
          example: {
            target: "Can I borrow a pen for a minute?",
            translation: "¿Me prestas un lapicero un minuto?"
          }
        },
        {
          term: "Can you lend me...?",
          explanation: "Otra forma natural de pedir prestado, enfocada en la acción de la otra persona.",
          literal: "¿puede prestarme...?",
          useWhen: "Quiere que la otra persona le preste algo: “can you lend me ten dollars?”.",
          avoidWhen: "El objeto no se devolverá; lend implica préstamo temporal.",
          register: "amistoso cortés",
          region: "Inglés universal.",
          related: ["lend", "borrow", "loan", "favor"],
          example: {
            target: "Can you lend me your umbrella?",
            translation: "¿Me prestas tu sombrilla?"
          }
        },
        {
          term: "bring it back",
          explanation: "Devolver algo llevándolo otra vez a quien lo prestó.",
          literal: "traerlo de vuelta",
          useWhen: "Promesas sobre objetos prestados: “I'll bring it back tonight”.",
          avoidWhen: "Una devolución formal de dinero o una mercancía; “return it” puede sonar más preciso.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["return", "give back", "borrow", "lend"],
          example: {
            target: "I'll bring it back before eight.",
            translation: "Te lo devuelvo antes de las ocho."
          }
        },
        {
          term: "pay attention",
          explanation: "Prestar atención.",
          literal: "pagar atención",
          useWhen: "Instrucciones y advertencias: “pay attention to the address”.",
          avoidWhen: "Traducir palabra por palabra como “lend attention”; esa frase no es natural.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["attention", "notice", "listen", "focus"],
          example: {
            target: "Pay attention to the charger cable.",
            translation: "Presta atención al cable del cargador."
          }
        },
        {
          term: "May I use the bathroom?",
          explanation: "Pregunta educada para pedir permiso de usar el baño.",
          literal: "¿puedo usar el baño?",
          useWhen: "Casas, oficinas, tiendas o restaurantes donde necesita permiso.",
          avoidWhen: "Traducir “¿me presta el baño?” como “lend me the bathroom”; en inglés suena absurdo.",
          register: "cortés",
          region: "Inglés universal.",
          related: ["bathroom", "restroom", "could I use", "permission"],
          example: {
            target: "May I use the bathroom before I leave?",
            translation: "¿Me presta el baño antes de irme?"
          }
        }
      ],
      note:
        "El inglés separa lo que el español colombiano maneja con prestar. Si usted recibe temporalmente algo, “borrow”: “could I borrow your charger?” Si usted entrega su objeto a otra persona, “lend”: “I can lend it to you.” También puede pedir desde la otra perspectiva: “can you lend me your charger?” Para devolver, “bring it back”, “give it back” o “return it”. No calque las expresiones fijas: “prestar atención” es “pay attention”, y “¿me presta el baño?” es “may I use the bathroom?”",
      culture: [
        {
          label: "Borrow faces the receiver",
          body: "En inglés, “borrow” mira a la persona que recibe el objeto y lo usará por un rato. Por eso “Can I borrow your charger?” corresponde al colombiano “¿me prestas tu cargador?” La traducción literal puede confundir porque el español formula la petición desde la acción del dueño. Aprenda el eje social: quien recibe borrows, quien entrega lends."
        },
        {
          label: "Lend still needs boundaries",
          body: "Aunque “lend” puede sonar cotidiano, el favor sigue teniendo límites. “I can lend it to you, but bring it back tonight” no es desconfianza agresiva; es una condición clara. En comunidades pequeñas, decir cuándo devuelve algo prestado cuida la relación. Un “thanks, I'll bring it back by eight” puede ser tan importante como la gramática."
        },
        {
          label: "Bathrooms are used, not lent",
          body: "La fórmula colombiana “¿me presta el baño?” no viaja literal al inglés. “Can you lend me the bathroom?” suena cómico porque el baño no se mueve ni cambia de dueño. En una casa o negocio diga “May I use the bathroom?” o “Could I use the restroom?” La cortesía está en pedir permiso, no en usar lend."
        }
      ],
      pitfalls: [
        {
          mistake: "“Can I lend your charger?”",
          whyItFails: "Dice que usted quiere prestar el cargador de otra persona, quizá a alguien más. Si usted lo necesita, use “borrow”.",
          sayInstead: "Can I borrow your charger?"
        },
        {
          mistake: "“Please lend attention.”",
          whyItFails: "Calca “prestar atención”. En inglés la expresión fija es “pay attention”.",
          sayInstead: "Please pay attention."
        },
        {
          mistake: "“Can you lend me the bathroom?”",
          whyItFails: "Calca “¿me presta el baño?” demasiado literalmente. En inglés se pide permiso para usarlo.",
          sayInstead: "May I use the bathroom?"
        }
      ],
      variations: [
        {
          form: "Can I borrow your charger?",
          register: "amistoso cortés",
          region: "Inglés universal",
          whenToUse: "Pedir prestado algo que usted va a usar."
        },
        {
          form: "I can lend you mine.",
          register: "amistoso cortés",
          region: "Inglés universal",
          whenToUse: "Ofrecer prestar su propio objeto."
        },
        {
          form: "I'll bring it back tonight.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Prometer devolver algo prestado."
        },
        {
          form: "Please pay attention.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Pedir que alguien preste atención."
        }
      ],
      prompt: "Valeria needs Liam's charger for a few minutes. Which English question is right?",
      choices: [
        "Can I lend your charger?",
        "Can I borrow your charger?",
        "Can I refill your charger?"
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Qué oración significa que Liam es quien presta?",
          choices: [
            "I can borrow your charger.",
            "I can refill your charger.",
            "I can lend you my charger."
          ],
          answer: 2,
          tests: "lend from owner's side"
        },
        {
          prompt: "Which phrase translates “prestar atención”?",
          choices: [
            "Pay attention.",
            "Lend attention.",
            "Borrow attention."
          ],
          answer: 0,
          tests: "pay attention"
        },
        {
          prompt: "Which bathroom request is natural in English?",
          choices: [
            "Can you borrow me the bathroom?",
            "May I use the bathroom?",
            "Can you lend me the bathroom?"
          ],
          answer: 1,
          tests: "use the bathroom"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/64-extending-forms-and-favors.js");
