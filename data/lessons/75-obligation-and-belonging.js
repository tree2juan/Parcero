/*
 * Lesson block: obligation and belonging (grammar, not verbs).
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules -- `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * These lessons are GRAMMAR lessons. Each spines on exactly one entry from
 * data/structures.js, named in its `structure` field, and carries no `verb`.
 *
 * The two structures here were chosen from a coverage measurement, not from a
 * syllabus. Running cefr.coverage() over the corpus found English obligation
 * with "must" in a single lesson and the standalone possessives -- mine, yours,
 * hers -- in four, with no Spanish counterpart taught anywhere. Both are
 * everyday grammar that the corpus had been stepping around: the English side
 * of the course was written as translations of Spanish lessons, so an English
 * structure with no Spanish trigger never got written down.
 */

lessons.push(
  {
    id: "what-has-to-be-done-in-medellin",
    level: "Starter · Everyday life",
    skills: ["grammar", "speaking", "listening", "context", "register"],
    domain: "work-and-employment",
    register: "familiar",
    pathways: ["foundation", "professional-office"],
    structure: "obligation-impersonal",
    review: "pending",
    es: {
      title: "Toca madrugar: la obligación sin dueño",
      situation: "A coworker tells you what has to be ready before the Monday inspection, without saying whose task it is.",
      setting: {
        who: "Paola has worked in this small import office in Medellín for six years and knows the inspection routine by heart. Andrés joined four months ago and has never seen one. Neither manages the other, and the six-year gap in experience is doing more work here than any difference in rank.",
        what: "A five-minute handover at the end of a Friday: a list of things that must be ready by Monday morning, delivered as a run of impersonal obligations rather than as instructions to a named person.",
        when: "Late Friday afternoon, when the office is emptying and nobody wants to open a long conversation. The shortness is the point — this is a checklist, not a meeting.",
        where: "A two-room office off a busy street in El Poblado, Medellín. Paisa Spanish, direct and fast, with tú between colleagues who are not friends but are not strangers either.",
        why: "Paola needs the work done and does not want to sound like she is assigning it, because Andrés does not report to her. Andrés wants to know which items are actually his without asking a question that would force her to say so."
      },
      address: {
        form: "tú",
        who: "Paola and Andrés use tú throughout, and neither switches.",
        why: "Between colleagues of similar standing in a Medellín office, tú is the ordinary register. Paisas use vos widely among friends, but at work with someone recent, tú is the safer middle.",
        ifYouSwitch: "Usted would not be rude, and plenty of paisas use it by default with everyone, but it would make a short checklist sound like a formal directive. Vos would sound friendlier than four months of acquaintance has earned."
      },
      dialogue: [
        {
          speaker: "Paola",
          target: "Ojo, que el lunes hay que tener todo listo antes de las ocho.",
          translation: "Heads up — on Monday everything has to be ready before eight.",
          pronunciation: "Ó-jo, ke el LÚ-nes ai ke te-NÉR TÓ-do LÍS-to AN-tes de las Ó-cho",
          literal: "Eye, that the Monday there-is that to-have everything ready before the eight.",
          why: "“Hay que” states a requirement with no owner. Paola is not telling Andrés to do it, and she is not saying she will — the obligation simply exists, and that is exactly the distance she wants."
        },
        {
          speaker: "Andrés",
          target: "¿Y eso qué implica? Porque a mí nadie me ha dicho nada.",
          translation: "And what does that involve? Because nobody's told me anything.",
          pronunciation: "i É-so ké im-PLÍ-ka, POR-ke a MÍ NÁ-die me a DÍ-cho NÁ-da",
          literal: "And that what implies? Because to me nobody to-me has said nothing.",
          why: "Andrés is fishing for the owner Paola deliberately left out. The double negative “nadie… nada” is standard Spanish, not an error."
        },
        {
          speaker: "Paola",
          target: "Toca revisar las facturas del trimestre y toca imprimirlas por duplicado.",
          translation: "You've got to go through the quarter's invoices and print them in duplicate.",
          pronunciation: "TÓ-ka rre-bi-SÁR las fak-TÚ-ras del tri-MÉS-tre i TÓ-ka im-pri-MÍR-las por du-PLÍ-ka-do",
          literal: "It-touches to-review the invoices of-the quarter and it-touches to-print-them by duplicate.",
          why: "“Tocar” here is the Colombian workhorse for obligation: literally “it falls to (someone)”. Used bare like this it still names nobody, but it carries a resigned, no-choice tone that “hay que” does not."
        },
        {
          speaker: "Andrés",
          target: "¿Y a mí me toca algo de eso, o lo estás haciendo tú?",
          translation: "And is any of that on me, or are you doing it?",
          pronunciation: "i a MÍ me TÓ-ka ÁL-go de É-so, o lo es-TÁS a-SIÉN-do TÚ",
          literal: "And to me to-me it-touches something of that, or it you-are doing you?",
          why: "Adding the pronoun turns the impersonal into a personal one: “me toca” = it falls to me. This is the move that forces the question Paola was avoiding."
        },
        {
          speaker: "Paola",
          target: "A ti te toca lo de las facturas; yo tengo que entregar el informe.",
          translation: "The invoice part's on you; I have to hand in the report.",
          pronunciation: "a TÍ te TÓ-ka lo de las fak-TÚ-ras, YO TÉN-go ke en-tre-GÁR el in-FÓR-me",
          literal: "To you to-you it-touches the of the invoices; I have that to-deliver the report.",
          why: "The contrast is the lesson in one line. “Te toca” assigns by circumstance — it landed on you. “Tengo que” is Paola naming herself as the one under the obligation."
        },
        {
          speaker: "Andrés",
          target: "Listo. Entonces me toca madrugar el lunes, porque eso no se hace en una hora.",
          translation: "Got it. So I've got to be up early Monday, because that doesn't get done in an hour.",
          pronunciation: "LÍS-to. en-TÓN-ses me TÓ-ka ma-dru-GÁR el LÚ-nes, POR-ke É-so no se Á-se en Ú-na Ó-ra",
          literal: "Ready. Then to-me it-touches to-rise-early the Monday, because that not itself does in one hour.",
          why: "“Madrugar” is a single verb for getting up early, and it carries mild complaint. Pairing it with “me toca” is one of the most Colombian sentences in this lesson."
        }
      ],
      vocabulary: [
        {
          term: "hay que + infinitivo",
          explanation: "States that something must be done without saying by whom. It is the impersonal obligation: a rule, a requirement, a fact about the situation rather than an instruction to a person.",
          literal: "there is that (to) ...",
          useWhen: "Announcing a requirement you do not want to pin on anyone — rules, procedures, general truths: “Hay que llevar la cédula”, “Hay que llegar temprano”.",
          avoidWhen: "You mean a specific person. “Hay que llamarlo” tells nobody to call; if you need Andrés to call, say “tienes que llamarlo”.",
          register: "neutral",
          region: "Universal Spanish, used constantly across Colombia.",
          related: ["tener que", "tocar", "deber", "es necesario"],
          example: {
            target: "Hay que llevar la cédula para entrar.",
            translation: "You have to bring your ID to get in."
          }
        },
        {
          term: "tocar + infinitivo",
          explanation: "The Colombian obligation of circumstance: the thing has fallen to you and there is no arguing with it. Grammatically it behaves like gustar — the person is an indirect object, not a subject.",
          literal: "to touch (someone) to ...",
          useWhen: "Something unavoidable, often unwelcome: “Toca madrugar”, “Me tocó pagar a mí”, “Nos toca esperar”.",
          avoidWhen: "A duty someone chose or a formal rule. For an official requirement, “hay que” or “se debe” sounds less resigned.",
          register: "familiar",
          region: "Extremely Colombian. Understood everywhere but used far more here than in Spain or Argentina.",
          related: ["hay que", "tener que", "me toca", "no queda de otra"],
          example: {
            target: "Toca esperar a que abran.",
            translation: "We'll just have to wait for them to open."
          }
        },
        {
          term: "me toca / te toca / le toca",
          explanation: "The same verb with the person restored. Adding the indirect pronoun turns an ownerless obligation into an assigned one, which is why it is the natural way to ask whose job something is.",
          literal: "to-me it-touches",
          useWhen: "Working out or announcing whose turn or responsibility something is: “¿A quién le toca?”, “Hoy me toca a mí”.",
          avoidWhen: "You want to sound like you are choosing rather than being landed with it. “Me toca ir” suggests obligation; “voy a ir” suggests intention.",
          register: "familiar",
          region: "Colombia-wide, and the standard way to talk about turns in a queue or a rota.",
          related: ["tocar", "turno", "a mí me toca", "tener que"],
          example: {
            target: "¿A quién le toca cerrar hoy?",
            translation: "Whose turn is it to lock up today?"
          }
        },
        {
          term: "tener que + infinitivo",
          explanation: "The obligation with a named subject. Where “hay que” hides the person and “tocar” says circumstance put them there, “tener que” simply states that this person is under this obligation.",
          literal: "to have that (to) ...",
          useWhen: "Any obligation attached to somebody in particular, including yourself: “Tengo que entregar el informe”, “Tienes que firmar aquí”.",
          avoidWhen: "You are stating a general rule. “Tienes que llevar la cédula” aimed at a room of people sounds like you are singling someone out.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["hay que", "deber", "tocar", "necesitar"],
          example: {
            target: "Tengo que entregar el informe hoy.",
            translation: "I have to hand in the report today."
          }
        },
        {
          term: "deber + infinitivo",
          explanation: "A softer, more moral obligation — what ought to be done rather than what circumstances force. In writing it is the register of rules and notices; in speech it sounds like advice.",
          literal: "to owe (to) ...",
          useWhen: "Advice, duty or written regulation: “Debes descansar”, “Los pasajeros deben presentar el documento”.",
          avoidWhen: "Something genuinely unavoidable. “Debo madrugar” sounds like a resolution; “me toca madrugar” sounds like Monday.",
          register: "courteous",
          region: "Universal Spanish; the usual register of signs and official notices in Colombia.",
          related: ["deber de", "tener que", "hay que", "convenir"],
          example: {
            target: "Debes descansar antes del viaje.",
            translation: "You ought to rest before the trip."
          }
        },
        {
          term: "madrugar",
          explanation: "One verb meaning to get up very early. Spanish packs the whole idea into a single word, and Colombians use it constantly, usually with a note of complaint or of virtue.",
          literal: "to early-rise",
          useWhen: "Any early start, and in the proverb “Al que madruga, Dios le ayuda”: “Mañana toca madrugar”.",
          avoidWhen: "Simply waking up at a normal hour — that is “levantarse”. Madrugar implies the hour was painful.",
          register: "familiar",
          region: "Universal Spanish; heavily used in Colombia, where early starts are the norm.",
          related: ["levantarse", "trasnochar", "la madrugada", "amanecer"],
          example: {
            target: "Mañana toca madrugar para el aeropuerto.",
            translation: "Tomorrow we have to be up early for the airport."
          }
        },
        {
          term: "ojo",
          explanation: "Literally “eye”, used alone as a warning marker: pay attention to what comes next. It is the spoken equivalent of underlining something.",
          literal: "eye",
          useWhen: "Flagging something important or risky before you say it: “Ojo, que eso cierra a las cinco”.",
          avoidWhen: "Formal writing or with someone senior you do not know. It is friendly and a little blunt.",
          register: "familiar",
          region: "Colombia-wide and across Latin America.",
          related: ["pilas", "cuidado", "atento", "abrir el ojo"],
          example: {
            target: "Ojo, que el lunes cierran temprano.",
            translation: "Careful — they close early on Monday."
          }
        }
      ],
      note: "Spanish has four ways to say something must happen, and they differ by who is on the hook. “Hay que” names nobody: it states a requirement as a fact about the world, which makes it the polite way to raise work without assigning it. “Tener que” names the person outright. “Deber” softens the whole thing into what ought to be done. And “tocar” — the one an English speaker will not predict — says circumstance has landed it on someone, whether they like it or not. Tocar behaves grammatically like gustar: the person is an indirect object, so it is “me toca”, never “yo toco”, and the verb stays in the third person no matter who is on the hook. That is why “nos toca esperar” and “les toca pagar” both keep “toca”. In Colombia this verb does an enormous amount of daily work, from queues (“¿a quién le toca?”) to weather (“toca llevar sombrilla”) to resignation (“no queda de otra, toca”). Learning only “tener que” leaves you able to state obligations but unable to hear the difference between a rule, an assignment and a piece of bad luck.",
      culture: [
        {
          label: "Not assigning the work is doing something",
          body: "Paola opens with “hay que” rather than “tienes que” even though she plainly means Andrés. In a Colombian workplace, stating an obligation impersonally is a courtesy: it puts the requirement in the room and lets the other person pick it up, instead of handing it to them. Andrés understands this perfectly, which is why his reply is a question about who it lands on rather than an objection. Reading “hay que” as vagueness misses the maneuver. It is precise about the work and deliberately silent about the person, and that silence is negotiable in a way an instruction would not be."
        },
        {
          label: "Madrugar is a national habit and a moral position",
          body: "Colombian workdays start early, and the language reflects it. “Madrugar” has its own noun (“la madrugada”, the small hours), its own proverb (“al que madruga, Dios le ayuda”) and its own opposite (“trasnochar”, to stay up late). Saying “toca madrugar” is both a complaint and a small claim to seriousness. A foreigner who says it with the right weary shrug is signaling something about their working life, not just their alarm clock."
        },
        {
          label: "Tocar is everywhere once you hear it",
          body: "Outside the office, “tocar” runs through ordinary Colombian life. In a queue it settles order: “¿a quién le toca?”. On a cold Bogotá morning it decides your clothes: “toca llevar sombrilla”. At the end of an argument it closes the matter: “no queda de otra, toca”. Because the verb frames obligation as something that landed on you rather than something you chose, it lets a speaker accept a job while making clear they did not volunteer — a distinction Colombians draw constantly and politely. Learners who only ever say “tengo que” are understood, but they sound like they are reading from a form."
        }
      ],
      pitfalls: [
        {
          mistake: "Yo toco trabajar el sábado.",
          whyItFails: "Tocar in this sense never takes a subject pronoun the way English does. Like gustar, the person is an indirect object and the verb stays in the third person, so “yo toco” reads as “I touch” — physically.",
          sayInstead: "Me toca trabajar el sábado."
        },
        {
          mistake: "Hay que llamarlo, Andrés.",
          whyItFails: "Naming Andrés while using the impersonal “hay que” sends two opposite signals at once: the form says nobody in particular, the name says you. It lands as passive-aggressive rather than polite.",
          sayInstead: "Andrés, tienes que llamarlo."
        },
        {
          mistake: "Tengo que madrugar porque me toca que entregar el informe.",
          whyItFails: "“Tocar” takes a bare infinitive, not “que”. The “que” belongs to “tener que” and has been copied across by analogy.",
          sayInstead: "Tengo que madrugar porque me toca entregar el informe."
        },
        {
          mistake: "Hay que que revisar las facturas.",
          whyItFails: "Only one “que” is needed. The doubling comes from hearing “hay que” as a unit and then adding the “que” of “tener que” on top of it.",
          sayInstead: "Hay que revisar las facturas."
        }
      ],
      variations: [
        {
          form: "Hay que tener todo listo antes de las ocho.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The default for stating a requirement without assigning it. Safe with anyone, at any level of formality."
        },
        {
          form: "Toca tener todo listo antes de las ocho.",
          register: "familiar",
          region: "Strongly Colombian",
          whenToUse: "Same requirement, with a shrug attached: there is no way around it. Among colleagues and friends."
        },
        {
          form: "Tienes que tener todo listo antes de las ocho.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "When you do mean this person and there is no reason to be indirect about it."
        },
        {
          form: "Debemos tener todo listo antes de las ocho.",
          register: "courteous",
          region: "Universal Spanish",
          whenToUse: "In a meeting or an email, where “debemos” includes you in the obligation and sounds measured."
        },
        {
          form: "Se debe tener todo listo antes de las ocho.",
          register: "formal",
          region: "Universal Spanish",
          whenToUse: "Written notices, procedures and regulations, where no person should appear at all."
        }
      ],
      prompt: "Paola wants Andrés to understand that Monday's deadline is a requirement, without making it sound like she is assigning him the job. Which opening does that?",
      choices: [
        "El lunes tienes que tener todo listo antes de las ocho de la mañana.",
        "El lunes hay que tener todo listo antes de las ocho de la mañana.",
        "El lunes yo toco tener todo listo antes de las ocho de la mañana."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Andrés says “me toca madrugar”. What is he conveying beyond the early start?",
          choices: [
            "That circumstances have landed it on him and he has no real choice.",
            "That he has volunteered for the early shift and is pleased about it.",
            "That he is physically touching something early in the morning."
          ],
          answer: 0,
          tests: "tocar as obligation of circumstance rather than choice"
        },
        {
          prompt: "Which sentence uses “tocar” correctly?",
          choices: [
            "Nosotros tocamos pagar la cuenta entre todos.",
            "Yo toco pagar la cuenta hoy en la tarde.",
            "Nos toca pagar la cuenta entre todos."
          ],
          answer: 2,
          tests: "tocar patterning like gustar: indirect object, third-person verb"
        },
        {
          prompt: "A sign at a government office reads “Se debe presentar el documento original.” Why not “Toca presentar el documento original”?",
          choices: [
            "Because “tocar” cannot be used with documents or paperwork of any kind.",
            "Because a written official notice avoids the resigned, familiar tone that “toca” carries.",
            "Because “tocar” is incorrect Spanish and only appears in casual speech by mistake."
          ],
          answer: 1,
          tests: "register: impersonal deber in official writing against familiar tocar"
        }
      ]
    },
    en: {
      title: "Have to, must y got to: la obligación en inglés",
      situation: "Una compañera le cuenta lo que hay que dejar listo antes de una inspección, sin decir de quién es la tarea.",
      setting: {
        who: "Dana lleva seis años en una pequeña oficina de importaciones en Houston y se sabe la rutina de memoria. Paola llegó hace cuatro meses desde Medellín y nunca ha visto una inspección. Ninguna manda sobre la otra: lo que pesa aquí es la diferencia de experiencia, no el cargo.",
        what: "Un traspaso de cinco minutos un viernes: una lista de cosas que deben estar listas el lunes, dicha como obligaciones generales y no como órdenes a una persona concreta.",
        when: "Viernes al final de la tarde, cuando la oficina se vacía y nadie quiere abrir una conversación larga. Que sea breve es parte del asunto: es una lista, no una reunión.",
        where: "Una oficina de dos salas en Houston, Texas. Inglés estadounidense de trabajo, rápido y sin rodeos, entre colegas que se tratan bien pero no son amigas.",
        why: "Dana necesita que el trabajo se haga y no quiere sonar como si lo estuviera asignando, porque Paola no es su subordinada. Paola quiere saber qué le corresponde sin obligar a Dana a decirlo."
      },
      address: {
        form: "mixed",
        who: "Dana y Paola se tratan por el nombre, sin ninguna marca de formalidad.",
        why: "El inglés no distingue tú de usted, así que la cercanía se construye con el nombre de pila, el tono y las formas contraídas (“you've got to”, “I'll”). Entre colegas de rango parecido eso es lo normal en una oficina estadounidense.",
        ifYouSwitch: "Si usted usa formas completas y evita contracciones (“you must complete this”), el inglés no suena más respetuoso sino más rígido, como un reglamento. Con una compañera puede leerse como molestia."
      },
      dialogue: [
        {
          speaker: "Dana",
          target: "Heads up — on Monday everything has to be ready before eight.",
          translation: "Ojo: el lunes hay que tener todo listo antes de las ocho.",
          pronunciation: "jeds ap — on MÁN-dei ÉV-ri-zing jas tu bi RÉ-di bi-FÓR eit",
          literal: "Cabezas arriba — en lunes todo tiene a ser listo antes ocho.",
          why: "“Everything has to be ready” pone la obligación sobre la cosa, no sobre una persona. Es el recurso más cercano al “hay que” del español: el inglés no tiene una forma impersonal, así que usa un sujeto inanimado."
        },
        {
          speaker: "Paola",
          target: "What does that involve? Because nobody's told me anything.",
          translation: "¿Y eso qué implica? Porque a mí nadie me ha dicho nada.",
          pronunciation: "uót das dat in-VÓLV? bi-KÓS NÓU-ba-dis tould mi É-ni-zing",
          literal: "Qué hace eso implicar? Porque nadie-ha dicho me nada.",
          why: "Fíjese en la negación simple: “nobody's told me anything”, no “nobody's told me nothing”. Donde el español encadena negativos, el inglés estándar solo admite uno."
        },
        {
          speaker: "Dana",
          target: "You've got to go through the quarter's invoices, and they must be printed in duplicate.",
          translation: "Toca revisar las facturas del trimestre, y toca imprimirlas por duplicado.",
          pronunciation: "yuv gat tu gou zru da KUÓR-ters ÍN-voi-ses, and dei mast bi PRÍN-ted in DÚ-pli-keit",
          literal: "Tú-has conseguido a ir a-través las factura del trimestre, y ellas deben ser impresas en duplicado.",
          why: "“Have got to” es el equivalente hablado de “toca”: obligación sin discusión y en registro familiar. “Must” en cambio suena a norma escrita, que es justo lo que Dana quiere para el requisito del duplicado."
        },
        {
          speaker: "Paola",
          target: "Is any of that on me, or are you doing it?",
          translation: "¿Y a mí me toca algo de eso, o lo estás haciendo tú?",
          pronunciation: "is É-ni av dat on mi, or ar yu DÚ-ing it",
          literal: "Es algo de eso sobre mí, o estás tú haciéndolo?",
          why: "“On me” es la manera coloquial de decir “me toca”. El inglés no tiene un verbo como tocar, así que reparte la idea entre una preposición y el contexto."
        },
        {
          speaker: "Dana",
          target: "The invoices are on you. I have to hand in the report myself.",
          translation: "A ti te toca lo de las facturas; yo tengo que entregar el informe.",
          pronunciation: "di ÍN-voi-ses ar on yu. ai jav tu jand in da ri-PÓRT mai-SÉLF",
          literal: "Las facturas están sobre ti. Yo tengo a entregar el informe mí-misma.",
          why: "Aquí aparece el contraste central: “are on you” asigna por circunstancia y “I have to” nombra a la persona obligada. Es el mismo par que en español forman “te toca” y “tengo que”."
        },
        {
          speaker: "Paola",
          target: "Got it. So I must get up early on Monday, because that doesn't get done in an hour.",
          translation: "Listo. Entonces me toca madrugar el lunes, porque eso no se hace en una hora.",
          pronunciation: "gat it. sou ai mast get ap ÉR-li on MÁN-dei, bi-KÓS dat DÁ-sent get dan in an ÁUR",
          literal: "Conseguido eso. Así yo debo conseguir arriba temprano en lunes, porque eso no consigue hecho en una hora.",
          why: "“I must get up early” es una obligación que Paola se impone a sí misma tras sacar la conclusión. Note además que el inglés necesita tres palabras — “get up early” — donde el español tiene una: madrugar."
        }
      ],
      vocabulary: [
        {
          term: "have to / has to",
          explanation: "La obligación corriente del inglés hablado. Nombra a quien está obligado y sirve tanto para reglas externas como para necesidades prácticas. Es la traducción por defecto de “tener que”.",
          literal: "tener a",
          useWhen: "Casi siempre: “I have to work tomorrow”, “She has to sign it”. En pasado y futuro es la única opción natural: “I had to wait”, “You'll have to wait”.",
          avoidWhen: "Quiere sonar a norma escrita o a prohibición; ahí “must” es más fuerte.",
          register: "neutro",
          region: "Todo el mundo angloparlante.",
          related: ["must", "have got to", "need to", "be supposed to"],
          example: {
            target: "I have to hand in the report today.",
            translation: "Tengo que entregar el informe hoy."
          }
        },
        {
          term: "must",
          explanation: "Obligación con peso de norma. En inglés estadounidense hablado es bastante menos frecuente que “have to”, y aparece sobre todo en reglamentos, avisos y decisiones que uno se impone a sí mismo.",
          literal: "deber",
          useWhen: "Reglas y avisos — “Passengers must show ID” — o una resolución propia: “I must call her back”.",
          avoidWhen: "Una obligación cotidiana entre iguales. “You must come to the meeting” suena a orden; “you have to come” es lo normal.",
          register: "cortés",
          region: "Universal; más frecuente en textos que en conversación estadounidense.",
          related: ["have to", "should", "be required to", "shall"],
          example: {
            target: "Passengers must show a valid ID.",
            translation: "Los pasajeros deben presentar un documento vigente."
          }
        },
        {
          term: "have got to / gotta",
          explanation: "La versión hablada e informal de “have to”, con un matiz de urgencia o de no queda de otra. En habla rápida se contrae a “gotta”, que no se escribe en textos formales.",
          literal: "tener conseguido a",
          useWhen: "Conversación relajada: “I've got to run”, “You've got to try this”. Es lo más cercano al “toca” colombiano.",
          avoidWhen: "Escritura formal o un correo de trabajo. Ahí se usa “have to” o “must”.",
          register: "familiar",
          region: "Muy frecuente en Estados Unidos; “gotta” solo se escribe imitando el habla.",
          related: ["have to", "must", "need to", "gotta"],
          example: {
            target: "I've got to go through these invoices.",
            translation: "Me toca revisar estas facturas."
          }
        },
        {
          term: "be on someone",
          explanation: "Expresión coloquial para decir que una tarea le corresponde a alguien. Es el equivalente funcional de “me toca”, aunque el inglés lo resuelve con una preposición y no con un verbo.",
          literal: "estar sobre alguien",
          useWhen: "Repartir tareas de manera informal: “The invoices are on you”, “Dinner's on me”.",
          avoidWhen: "Contextos formales; en un correo se diría “you're responsible for the invoices”.",
          register: "familiar",
          region: "Inglés estadounidense corriente.",
          related: ["be up to someone", "be someone's turn", "be responsible for", "on me"],
          example: {
            target: "The invoices are on you this quarter.",
            translation: "Este trimestre a ti te tocan las facturas."
          }
        },
        {
          term: "be supposed to",
          explanation: "Obligación que viene de una expectativa o un acuerdo, no de una ley. Implica a menudo que puede no cumplirse, lo que la vuelve muy útil para quejarse con suavidad.",
          literal: "estar supuesto a",
          useWhen: "Lo acordado o lo esperado: “We're supposed to be there at eight”, “You were supposed to call me”.",
          avoidWhen: "Una obligación firme e ineludible; ahí suena demasiado flojo.",
          register: "neutro",
          region: "Universal en inglés estadounidense.",
          related: ["should", "have to", "be meant to", "ought to"],
          example: {
            target: "We're supposed to be there before eight.",
            translation: "Se supone que debemos estar allá antes de las ocho."
          }
        },
        {
          term: "get up early",
          explanation: "Tres palabras para lo que el español dice con una: madrugar. El inglés no tiene un verbo único, así que la idea se arma con verbo, partícula y adverbio.",
          literal: "conseguir arriba temprano",
          useWhen: "Cualquier madrugada: “I have to get up early tomorrow”.",
          avoidWhen: "Quiere decir trasnochar o quedarse despierto; eso es “stay up late”, que no es lo mismo.",
          register: "neutro",
          region: "Universal.",
          related: ["wake up", "stay up late", "early riser", "sleep in"],
          example: {
            target: "I must get up early on Monday.",
            translation: "Me toca madrugar el lunes."
          }
        },
        {
          term: "heads up",
          explanation: "Aviso breve de que viene información importante. Funciona igual que el “ojo” colombiano: subraya lo que sigue sin alarmar.",
          literal: "cabezas arriba",
          useWhen: "Avisar de algo con antelación: “Heads up — the office closes early Friday”.",
          avoidWhen: "Documentos formales. Es de oficina y de conversación, no de reglamento.",
          register: "familiar",
          region: "Inglés estadounidense de trabajo.",
          related: ["just so you know", "FYI", "watch out", "a quick note"],
          example: {
            target: "Heads up — they close early on Monday.",
            translation: "Ojo, que el lunes cierran temprano."
          }
        }
      ],
      note: "El inglés reparte entre varias expresiones lo que el español organiza con “hay que”, “tener que”, “deber” y “tocar”. La primera dificultad es que el inglés no tiene una obligación impersonal de verdad: para no señalar a nadie, empuja la obligación hacia la cosa (“everything has to be ready”) o hacia el pasivo (“the invoices must be printed”). No existe un “hay que” con sujeto vacío. La segunda es de frecuencia y no de gramática: los manuales presentan “must” como la traducción de “deber”, pero en el inglés estadounidense hablado “must” es poco frecuente y suena a aviso oficial o a resolución personal, mientras que “have to” hace casi todo el trabajo diario. Un hispanohablante que diga “You must send me the file” a un compañero suena mandón sin darse cuenta. La tercera es que “must” tiene un segundo oficio: con “be” y con “have” expresa deducción, no obligación — “She must be tired” no manda nada, sino que conjetura. Y para “tocar” no hay verbo: se dice “it's on you”, “it's your turn” o “it's up to you”, según el matiz.",
      culture: [
        {
          label: "En una oficina estadounidense, “must” suena a letrero",
          body: "Dana dice “you've got to” cuando habla de trabajo compartido y “must be printed” cuando habla del requisito formal del duplicado. Ese cambio no es casual. En el inglés estadounidense de oficina, “must” pertenece a los avisos, los contratos y los formularios; usarlo con una compañera para una tarea corriente suena a que uno se está poniendo por encima. La obligación cotidiana se dice con “have to” o “have got to”, y la suavizada con “I'd need you to” o “could you”. Un hispanohablante que traduzca “debe” por “must” de manera automática acabará sonando severo en conversaciones que no lo requerían."
        },
        {
          label: "Avisar antes de pedir",
          body: "“Heads up” cumple en inglés estadounidense la función del “ojo” colombiano: marca que lo que viene importa, y de paso suaviza la petición al presentarla como información. En una cultura de oficina que evita las órdenes directas entre iguales, este tipo de marcador hace mucho trabajo social. Quien lo omite y va directo al imperativo no resulta grosero, pero sí más seco de lo que probablemente pretende."
        },
        {
          label: "El inglés no tiene un “toca”, y eso se nota",
          body: "Cuando un colombiano quiere decir que algo le cayó encima sin haberlo elegido, tiene un verbo entero para hacerlo. El inglés tiene que rodearlo: “it's on me”, “it's my turn”, “I got stuck with it”, “I guess I'm doing it”. Ninguna de esas expresiones es tan breve ni tan neutra como “me toca”, y todas dicen algo de más — resignación, queja o humor. Por eso un hispanohablante suele sentir que en inglés le falta una pieza: no le falta vocabulario, le falta una construcción. La solución práctica es elegir según el matiz que quiera dejar, y aceptar que el inglés le obliga a ser más explícito sobre su actitud de lo que el español le exigía."
        }
      ],
      pitfalls: [
        {
          mistake: "You must send me the invoices before Monday, please.",
          whyItFails: "Dicho a una compañera de rango parecido, “must” traslada la obligación como si viniera de una norma que usted impone. El “please” no lo compensa: suena a aviso, no a petición.",
          sayInstead: "Could you send me the invoices before Monday?"
        },
        {
          mistake: "There has to bring the ID card to get in.",
          whyItFails: "Es un calco de “hay que llevar la cédula”. El inglés no tiene sujeto impersonal para esto: necesita una persona (“you”) o un sujeto inanimado con pasiva.",
          sayInstead: "You have to bring your ID to get in."
        },
        {
          mistake: "Yesterday I must work until eight.",
          whyItFails: "“Must” no tiene forma de pasado con sentido de obligación. Para el pasado, el inglés solo dispone de “had to”.",
          sayInstead: "Yesterday I had to work until eight."
        },
        {
          mistake: "It touches me to print the invoices in duplicate.",
          whyItFails: "Traducción literal de “me toca”. “Touch” en inglés es solo el contacto físico, así que la frase resulta incomprensible o cómica.",
          sayInstead: "It's on me to print the invoices in duplicate."
        }
      ],
      variations: [
        {
          form: "Everything has to be ready before eight.",
          register: "neutro",
          region: "Universal",
          whenToUse: "La opción por defecto para enunciar un requisito sin señalar a nadie. Sirve en cualquier registro."
        },
        {
          form: "Everything's got to be ready before eight.",
          register: "familiar",
          region: "Inglés estadounidense hablado",
          whenToUse: "El mismo requisito con tono de no queda de otra, entre colegas o amigos."
        },
        {
          form: "You have to have everything ready before eight.",
          register: "neutro",
          region: "Universal",
          whenToUse: "Cuando sí quiere decir que le corresponde a esa persona y no hay razón para ser indirecto."
        },
        {
          form: "Everything must be ready before eight.",
          register: "formal",
          region: "Universal",
          whenToUse: "Avisos, contratos y procedimientos, donde no debe aparecer ninguna persona."
        },
        {
          form: "We're supposed to have everything ready before eight.",
          register: "neutro",
          region: "Inglés estadounidense corriente",
          whenToUse: "Cuando la obligación viene de un acuerdo previo y usted deja abierta la posibilidad de que no se cumpla."
        }
      ],
      prompt: "Dana quiere decirle a Paola que el lunes todo tiene que estar listo, sin que suene a que le está asignando la tarea. ¿Cuál lo consigue?",
      choices: [
        "On Monday you must have everything ready before eight in the morning.",
        "On Monday there has to have everything ready before eight in the morning.",
        "On Monday everything has to be ready before eight in the morning."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Una compañera le escribe “She must be stuck in traffic.” ¿Qué está haciendo?",
          choices: [
            "Conjeturando por qué la otra persona no ha llegado todavía.",
            "Ordenándole a la otra persona que se quede en el tráfico.",
            "Diciendo que la otra persona tiene la obligación de manejar."
          ],
          answer: 0,
          tests: "must de deducción frente a must de obligación"
        },
        {
          prompt: "¿Cómo se dice en pasado “Ayer me tocó trabajar hasta las ocho”?",
          choices: [
            "Yesterday I must work until eight.",
            "Yesterday I had to work until eight.",
            "Yesterday I have to work until eight."
          ],
          answer: 1,
          tests: "must carece de pasado; had to es la única opción"
        },
        {
          prompt: "En una oficina estadounidense, ¿cuál suena mejor para pedirle a un colega que revise un archivo?",
          choices: [
            "You must review this file before the meeting this afternoon.",
            "There has to review this file before the meeting this afternoon.",
            "Could you review this file before the meeting this afternoon?"
          ],
          answer: 2,
          tests: "registro: must resulta impositivo entre iguales"
        }
      ]
    }
  },
  {
    id: "whose-is-whose-in-cali",
    level: "Starter · Everyday life",
    skills: ["grammar", "speaking", "vocabulary", "listening", "context"],
    domain: "family-and-relationships",
    register: "familiar",
    pathways: ["foundation", "professional-customer-service"],
    structure: "possessive-standalone",
    review: "pending",
    es: {
      title: "El mío, el tuyo, el de ella",
      situation: "After a family lunch in Cali, two cousins separate the plates and the things that ended up mixed together.",
      setting: {
        who: "Valentina and her cousin Sara grew up in the same house and now live twenty minutes apart. They see each other most weekends, so nothing here is being negotiated politely — they are cousins sorting out clutter.",
        what: "Untangling belongings after a family lunch: containers, a charger, an umbrella and a set of keys, all of which look like several other people's. The nouns are already known, so nobody repeats them.",
        when: "Mid-afternoon on a Sunday, once the table has been cleared and people are starting to leave. Everyone is relaxed and slightly slow.",
        where: "A family kitchen in Cali. Caleño Spanish, warm and quick, with the vos that is ordinary between young relatives in the Valle del Cauca.",
        why: "Valentina wants her own container back without accusing anyone of taking it. Sara wants to leave with the right charger, because the wrong one will not fit her phone."
      },
      address: {
        form: "vos",
        who: "Valentina and Sara use vos with each other, as caleño cousins of the same generation normally do.",
        why: "In Cali and across the Valle del Cauca, vos is the everyday form between friends and young relatives. It is not rustic or old-fashioned here; it is simply what closeness sounds like.",
        ifYouSwitch: "Tú would not offend, but between these two it would sound oddly neutral, like using someone's full name. Usted is used in Cali too, sometimes affectionately between family, so hearing it would not signal distance the way it might in Bogotá."
      },
      dialogue: [
        {
          speaker: "Valentina",
          target: "Ese táper no es el mío, el mío tiene la tapa roja.",
          translation: "That container isn't mine — mine has the red lid.",
          pronunciation: "É-se TÁ-per no es el MÍ-o, el MÍ-o TIÉ-ne la TÁ-pa RRÓ-ja",
          literal: "That container not is the mine, the mine has the lid red.",
          why: "The noun “táper” is said once and then dropped. “El mío” carries both the possession and the noun's gender, which is why it is “el” mío and not “la” mía."
        },
        {
          speaker: "Sara",
          target: "¿Y este cargador es tuyo o es de Andrés?",
          translation: "And is this charger yours, or is it Andrés's?",
          pronunciation: "i És-te kar-ga-DÓR es TÚ-yo o es de an-DRÉS",
          literal: "And this charger is yours or is of Andrés?",
          why: "After “ser”, the possessive usually appears bare: “es tuyo”, not “es el tuyo”. Adding the article would single one out from a known set."
        },
        {
          speaker: "Valentina",
          target: "No es mío. El mío se quedó cargando en la sala, al lado del de ella.",
          translation: "It's not mine. Mine's still charging in the living room, next to hers.",
          pronunciation: "no es MÍ-o. el MÍ-o se ke-DÓ kar-GÁN-do en la SÁ-la, al LÁ-do del de É-ya",
          literal: "Not is mine. The mine itself stayed charging in the living-room, to-the side of-the of her.",
          why: "Two forms in one line. “El mío” picks one out of several; “el de ella” is how Spanish says “hers” when “el suyo” would be ambiguous."
        },
        {
          speaker: "Sara",
          target: "Entonces este debe ser el suyo. ¿O el de tu mamá?",
          translation: "Then this must be his. Or your mom's?",
          pronunciation: "en-TÓN-ses És-te DÉ-be ser el SÚ-yo, o el de tu ma-MÁ",
          literal: "Then this must to-be the his. Or the of your mom?",
          why: "“El suyo” can mean his, hers, theirs or yours-formal, and Sara immediately feels the problem — which is why she offers a clarifying alternative in the same breath."
        },
        {
          speaker: "Valentina",
          target: "Las llaves sí son de ella; las nuestras están colgadas en la puerta.",
          translation: "The keys are definitely hers — ours are hanging on the door.",
          pronunciation: "las YÁ-bes SÍ son de É-ya, las nu-ÉS-tras es-TÁN kol-GÁ-das en la PUÉR-ta",
          literal: "The keys yes are of her; the ours are hung on the door.",
          why: "“Las nuestras” agrees with “llaves” — feminine and plural — even though the owners are a mixed group. The possessive agrees with the thing owned, never with the owner."
        },
        {
          speaker: "Sara",
          target: "Listo, entonces me llevo el mío y dejo el de ella acá.",
          translation: "All right, so I'll take mine and leave hers here.",
          pronunciation: "LÍS-to, en-TÓN-ses me YÉ-bo el MÍ-o i DÉ-jo el de É-ya a-KÁ",
          literal: "Ready, then to-me I-take the mine and I-leave the of her here.",
          why: "The whole exchange ends without the word “cargador” being repeated once since the second line. That economy is the point of the structure."
        }
      ],
      vocabulary: [
        {
          term: "el mío / la mía / los míos / las mías",
          explanation: "The stressed possessive for “mine”. It replaces a noun already known and agrees with that noun in gender and number — never with you, the owner.",
          literal: "the mine",
          useWhen: "Picking your one out of several: “El mío tiene la tapa roja”, “Las mías están arriba”.",
          avoidWhen: "The noun has not been mentioned yet. Then you need “mi táper”, because “el mío” would leave the listener guessing what.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["mi", "el tuyo", "el nuestro", "es mío"],
          example: {
            target: "El mío tiene la tapa roja.",
            translation: "Mine has the red lid."
          }
        },
        {
          term: "es mío (sin artículo)",
          explanation: "After “ser”, the possessive normally drops the article. “Es mío” simply states ownership; “es el mío” identifies which one out of a known group.",
          literal: "is mine",
          useWhen: "Claiming or denying ownership outright: “No es mío”, “¿Es tuyo este paraguas?”",
          avoidWhen: "You are distinguishing between several items in front of you — then the article does real work: “el mío es este”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["el mío", "de quién", "pertenecer", "ser de"],
          example: {
            target: "Ese cargador no es mío.",
            translation: "That charger isn't mine."
          }
        },
        {
          term: "el tuyo / la tuya",
          explanation: "The same form for “yours” with tú or vos. Colombians who use vos still say “tuyo”; there is no separate vos possessive in ordinary speech.",
          literal: "the yours",
          useWhen: "Talking to someone you address as tú or vos: “El tuyo está allá”, “¿Este es el tuyo?”",
          avoidWhen: "You are using usted with the person. Then it is “el suyo”, or more clearly “el de usted”.",
          register: "familiar",
          region: "Universal Spanish; unchanged in voseo regions like Cali and Medellín.",
          related: ["el mío", "el suyo", "el de usted", "tu"],
          example: {
            target: "¿Este cargador es tuyo?",
            translation: "Is this charger yours?"
          }
        },
        {
          term: "el suyo / la suya",
          explanation: "Structurally “his, hers, theirs or yours-formal” all at once. Because it cannot say which, Colombians very often replace it with “el de él”, “el de ella” or “el de usted”.",
          literal: "the his/hers/theirs",
          useWhen: "The owner is already obvious from context, or in writing where precision is carried by the surrounding sentence.",
          avoidWhen: "More than one possible owner is in the room. Then “el suyo” is genuinely ambiguous and the “de + pronoun” form is safer.",
          register: "neutral",
          region: "Universal Spanish; the “de él / de ella” workaround is especially common in Colombia.",
          related: ["el de él", "el de ella", "el de usted", "su"],
          example: {
            target: "Entonces este debe ser el suyo.",
            translation: "Then this must be his."
          }
        },
        {
          term: "el de ella / el de él / el de usted",
          explanation: "The unambiguous way to say “hers”, “his” or “yours-formal”. Spanish builds it from the article, “de”, and a pronoun, and it is far more common in speech than “el suyo”.",
          literal: "the of her",
          useWhen: "Whenever “el suyo” could point at more than one person: “El de ella está en la sala”.",
          avoidWhen: "Nothing is ambiguous and the repetition would be heavy. Then “el suyo” is lighter.",
          register: "neutral",
          region: "Colombia-wide and across Latin America.",
          related: ["el suyo", "de quién", "el mío", "su"],
          example: {
            target: "Dejo el de ella acá.",
            translation: "I'll leave hers here."
          }
        },
        {
          term: "el nuestro / las nuestras",
          explanation: "“Ours”, agreeing with the thing owned. The owners can be any mix of people; only the noun's gender and number matter.",
          literal: "the ours",
          useWhen: "Distinguishing your group's things from another's: “Las nuestras están colgadas en la puerta”.",
          avoidWhen: "You have not established who “we” are — the form says nothing about the group's makeup.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["nuestro", "el mío", "el de nosotros", "los suyos"],
          example: {
            target: "Las nuestras están colgadas en la puerta.",
            translation: "Ours are hanging on the door."
          }
        },
        {
          term: "el táper",
          explanation: "A food container, from the brand name Tupperware, fully naturalized into Colombian Spanish with a Spanish plural. Family lunches run on them.",
          literal: "the tupper",
          useWhen: "Any lidded plastic container for leftovers: “Llévate el táper”.",
          avoidWhen: "Formal writing, where “recipiente” or “envase” is the neutral word.",
          register: "familiar",
          region: "Colombia and much of Latin America; spelled “táper” or “tupper”.",
          related: ["el recipiente", "el envase", "la tapa", "las sobras"],
          example: {
            target: "Ese táper no es el mío.",
            translation: "That container isn't mine."
          }
        }
      ],
      note: "Spanish has two possessive systems, and this lesson is about the second one. The short forms — mi, tu, su, nuestro — sit in front of a noun: “mi táper”. The stressed forms — mío, tuyo, suyo, nuestro — stand where the noun would have been, usually with an article: “el mío”. English collapses both into one pair of words, so “my container” and “mine” feel like the same idea; in Spanish they are different words in different positions. The rule that trips up every English speaker is agreement. The possessive agrees with the thing owned, not the person who owns it. A woman talking about her keys says “las mías”; a man talking about the same keys also says “las mías”. Nothing in the form tells you anything about the owner's gender. The second difficulty is “su” and “suyo”, which cover his, hers, theirs and yours-formal simultaneously. Spanish tolerates this because context usually settles it, but Colombians in particular reach for “el de él”, “el de ella” or “el de usted” the moment there is any doubt — which in a room full of relatives is most of the time.",
      culture: [
        {
          label: "Vos in Cali is closeness, not roughness",
          body: "Valentina and Sara use vos throughout, which in the Valle del Cauca is the ordinary register between young relatives and friends. Foreign learners often arrive believing vos is Argentine, or rural, or archaic. In Cali it is none of those things: it is simply the form that says you are not strangers. A visitor who insists on tú will be perfectly understood and will sound slightly formal, in the way that using someone's full name does. Notably, the possessives do not change — a caleño who says “vos” still says “tuyo”, so this lesson's forms work identically in voseo and tuteo."
        },
        {
          label: "The container economy of a Colombian family lunch",
          body: "Sunday lunch in a Colombian household usually ends with leftovers being distributed into containers that belong to whoever brought food, and those containers circulate for weeks. This is precisely the situation the stressed possessives were built for: everyone knows what the objects are, so naming them again would be redundant, and the only live question is whose is whose. It is also why “el de ella” gets so much use. In a kitchen with a mother, two cousins and an aunt, “el suyo” resolves nothing."
        },
        {
          label: "Naming the owner is a way of not accusing anyone",
          body: "Valentina never says anyone took her container. She describes her own — “el mío tiene la tapa roja” — and lets the identification happen on its own. Sorting belongings in a family is mildly delicate, and Colombian Spanish leans on description rather than attribution to keep it light. The same instinct shows up in “¿O el de tu mamá?”: offering an alternative owner rather than insisting on one. Learners who translate directly from English often produce something blunter than they mean, because English is comfortable with “that's mine, you took it” in a way this exchange deliberately is not."
        }
      ],
      pitfalls: [
        {
          mistake: "Ese táper no es el mia.",
          whyItFails: "The possessive agrees with “táper”, which is masculine, so the article and the possessive must both be masculine. The speaker's own gender has nothing to do with it.",
          sayInstead: "Ese táper no es el mío."
        },
        {
          mistake: "¿Este cargador es el tuyo o el de Andrés? No, no es el mío.",
          whyItFails: "After “ser”, the bare form is the natural one for simply claiming or denying ownership. The articles here make it sound like you are picking items out of a lineup.",
          sayInstead: "¿Este cargador es tuyo o de Andrés? No, no es mío."
        },
        {
          mistake: "Las llaves son de ella; las nuestros están en la puerta.",
          whyItFails: "“Nuestras” must agree with “llaves”, which is feminine plural. The masculine “nuestros” is a common slip because the group of owners is mixed, but the owners are irrelevant to the ending.",
          sayInstead: "Las llaves son de ella; las nuestras están en la puerta."
        },
        {
          mistake: "El mío cargador se quedó en la sala.",
          whyItFails: "The stressed possessive replaces the noun; it cannot sit in front of one. With the noun present you need the short form.",
          sayInstead: "Mi cargador se quedó en la sala."
        }
      ],
      variations: [
        {
          form: "Ese no es el mío.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The default when several similar things are in front of you and you are ruling one out."
        },
        {
          form: "Ese no es mío.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Simply denying ownership, with no comparison implied. Slightly lighter than the version with the article."
        },
        {
          form: "Ese no me pertenece.",
          register: "formal",
          region: "Universal Spanish",
          whenToUse: "Official or written contexts — a police report, a lost-property form. In a kitchen it would sound absurd."
        },
        {
          form: "Ese es el de ella, no el mío.",
          register: "neutral",
          region: "Colombia-wide",
          whenToUse: "When you need to name the actual owner and “el suyo” would be ambiguous."
        },
        {
          form: "Ese táper es de mi mamá, no mío.",
          register: "familiar",
          region: "Universal Spanish",
          whenToUse: "When naming the person outright is clearer or friendlier than any pronoun would be."
        }
      ],
      prompt: "Valentina is holding up a charger — “el cargador” is masculine — and telling Sara it does not belong to her. Which is right?",
      choices: [
        "Ese cargador no es el mía, porque el mía se quedó cargando en la sala.",
        "Ese cargador no es mío, porque el mío se quedó cargando en la sala.",
        "Ese cargador no es mía, porque la mía se quedó cargando en la sala."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Sara says “las nuestras están colgadas en la puerta”, talking about keys. Why “nuestras” and not “nuestros”?",
          choices: [
            "Because the group of owners is mostly women in this family.",
            "Because “nuestras” is the only form that exists in Colombian Spanish.",
            "Because it agrees with “llaves”, which is feminine plural, not with the owners."
          ],
          answer: 2,
          tests: "agreement with the thing owned rather than the owner"
        },
        {
          prompt: "In a kitchen with a mother, an aunt and two cousins, why does Valentina say “el de ella” instead of “el suyo”?",
          choices: [
            "Because “el suyo” could mean his, hers, theirs or yours, and nobody would know which.",
            "Because “el suyo” is incorrect Spanish and is never used by Colombians.",
            "Because “el de ella” is the formal version and the situation calls for formality."
          ],
          answer: 0,
          tests: "the ambiguity of suyo and the de + pronoun workaround"
        },
        {
          prompt: "Which sentence correctly mentions the noun and the possessive together?",
          choices: [
            "El mío cargador se quedó cargando en la sala toda la tarde.",
            "Mi cargador se quedó cargando en la sala toda la tarde.",
            "El cargador mío suyo se quedó cargando en la sala toda la tarde."
          ],
          answer: 1,
          tests: "short possessive before a noun, stressed possessive instead of one"
        }
      ]
    },
    en: {
      title: "Mine, yours, hers: el posesivo que va solo",
      situation: "Después de una comida compartida en Texas, dos primas separan los recipientes y las cosas que quedaron revueltas.",
      setting: {
        who: "Val y su prima Sarah crecieron en la misma casa y hoy viven a veinte minutos la una de la otra. Se ven casi todos los fines de semana, así que aquí nadie está negociando con cuidado: son primas ordenando un reguero.",
        what: "Separar cosas después de una comida familiar: recipientes, un cargador, un paraguas y unas llaves, todos parecidos a los de otras tres personas. Los sustantivos ya se saben, así que nadie los repite.",
        when: "Un domingo a media tarde, cuando ya se recogió la mesa y la gente empieza a irse. Todos están relajados y un poco lentos.",
        where: "La cocina de una casa familiar en San Antonio, Texas. Inglés estadounidense de familia, rápido y con muchas contracciones.",
        why: "Val quiere recuperar su recipiente sin acusar a nadie de habérselo llevado. Sarah quiere salir con el cargador correcto, porque el otro no le sirve al teléfono."
      },
      address: {
        form: "mixed",
        who: "Val y Sarah se hablan por el nombre corto, sin ninguna marca de cortesía.",
        why: "El inglés no tiene vos ni usted, así que la confianza se oye en los apodos, las contracciones (“it's”, “that's”) y la rapidez del intercambio. Entre primas de la misma edad eso es lo esperable.",
        ifYouSwitch: "Si usted usa frases completas y sin contracciones (“That is not mine”), no suena más educado sino más tenso, como si estuviera molesta. En inglés la formalidad excesiva entre familiares se lee como distancia o enojo."
      },
      dialogue: [
        {
          speaker: "Val",
          target: "That container isn't mine — mine has the red lid.",
          translation: "Ese táper no es el mío; el mío tiene la tapa roja.",
          pronunciation: "dat kon-TÉI-ner Í-sent main — main jas da red lid",
          literal: "Ese recipiente no-es mío — mío tiene la tapa roja.",
          why: "“Mine” es una sola palabra que reemplaza “my container”. A diferencia del español, no lleva artículo ni cambia de forma: no existe “the mine” ni “mines”."
        },
        {
          speaker: "Sarah",
          target: "And is this charger yours, or is it Andrew's?",
          translation: "¿Y este cargador es tuyo o es de Andrés?",
          pronunciation: "and is dis CHÁR-yer yors, or is it ÁN-drus",
          literal: "Y es este cargador tuyo, o es de Andrés?",
          why: "“Yours” funciona igual para tú, usted, vos y ustedes: el inglés no distingue. Para una persona con nombre, el inglés usa el apóstrofo — “Andrew's” — donde el español usa “de”."
        },
        {
          speaker: "Val",
          target: "It's not mine. Mine's still charging in the living room, next to hers.",
          translation: "No es mío. El mío se quedó cargando en la sala, al lado del de ella.",
          pronunciation: "its nat main. mains stil CHÁR-ying in da LÍ-ving rum, nekst tu jers",
          literal: "No-es mío. Mío-está todavía cargando en la sala, al lado de ella-posesivo.",
          why: "“Hers” resuelve en una palabra lo que el español dice con tres: “el de ella”. Fíjese en que el inglés sí marca el género del dueño aquí, justo donde el español no lo hace."
        },
        {
          speaker: "Sarah",
          target: "Then this must be his. Or your mom's?",
          translation: "Entonces este debe ser el suyo. ¿O el de tu mamá?",
          pronunciation: "den dis mast bi jis. or yor mams",
          literal: "Entonces este debe ser de-él. O de tu mamá?",
          why: "“His” y “hers” son inequívocos: cada uno señala un solo género. Donde el español necesita aclarar “el de él” para escapar de “el suyo”, el inglés ya venía aclarado."
        },
        {
          speaker: "Val",
          target: "The keys are definitely hers. Ours are hanging on the door.",
          translation: "Las llaves sí son de ella; las nuestras están colgadas en la puerta.",
          pronunciation: "da kis ar DÉ-fi-nit-li jers. áurs ar JÁN-ging on da dor",
          literal: "Las llaves están definitivamente de-ella. Nuestro-posesivo están colgando en la puerta.",
          why: "“Ours” no cambia aunque “keys” sea plural. El posesivo inglés es invariable: no concuerda ni con el objeto ni con el dueño, y por eso “ours” sirve para una llave o para veinte."
        },
        {
          speaker: "Sarah",
          target: "All right, so I'll take mine and leave hers here.",
          translation: "Listo, entonces me llevo el mío y dejo el de ella acá.",
          pronunciation: "ol rait, sou ail teik main and liv jers jir",
          literal: "Todo bien, así yo-tomaré mío y dejaré de-ella aquí.",
          why: "Toda la conversación termina sin repetir “charger” desde la segunda línea. Esa economía es exactamente para lo que sirve la forma."
        }
      ],
      vocabulary: [
        {
          term: "mine",
          explanation: "Reemplaza por completo a “my + sustantivo”. Es invariable: no tiene plural, no lleva artículo y no cambia según el objeto poseído.",
          literal: "el mío / la mía / los míos",
          useWhen: "El sustantivo ya se mencionó: “Mine has the red lid”, “That one's mine”.",
          avoidWhen: "El sustantivo aparece en la frase. Con sustantivo se usa “my”: “my container”, nunca “mine container”.",
          register: "neutro",
          region: "Universal.",
          related: ["my", "yours", "ours", "belong to me"],
          example: {
            target: "Mine has the red lid.",
            translation: "El mío tiene la tapa roja."
          }
        },
        {
          term: "yours",
          explanation: "Vale para tú, usted, vos y ustedes por igual, en singular y en plural. El inglés perdió esa distinción hace siglos y no la ha recuperado.",
          literal: "el tuyo / el suyo / el de ustedes",
          useWhen: "Preguntar o afirmar pertenencia: “Is this yours?”, “That seat is yours”.",
          avoidWhen: "Quiere marcar respeto o distancia. El inglés no puede hacerlo con el posesivo; hay que cambiar el tono o la frase entera.",
          register: "neutro",
          region: "Universal.",
          related: ["your", "mine", "y'all's", "belong to you"],
          example: {
            target: "Is this charger yours?",
            translation: "¿Este cargador es tuyo?"
          }
        },
        {
          term: "his / hers",
          explanation: "El inglés separa lo que el español junta en “suyo”: “his” es de él y “hers” es de ella, sin ambigüedad posible. Ojo con la ortografía: “hers” nunca lleva apóstrofo.",
          literal: "el de él / el de ella",
          useWhen: "Cuando el dueño es una sola persona conocida: “The keys are hers”, “That desk is his”.",
          avoidWhen: "No sabe el género de la persona; entonces se usa “theirs”, que en inglés estadounidense actual sirve también para el singular.",
          register: "neutro",
          region: "Universal.",
          related: ["theirs", "his", "her", "hers"],
          example: {
            target: "The keys are hers.",
            translation: "Las llaves son de ella."
          }
        },
        {
          term: "ours / theirs",
          explanation: "Los plurales del sistema. Como todos los demás, son invariables: no concuerdan con el objeto ni indican de cuántas personas se trata.",
          literal: "el nuestro / el de ellos",
          useWhen: "Distinguir lo del grupo propio de lo del ajeno: “Ours are hanging on the door”.",
          avoidWhen: "Todavía no ha quedado claro quiénes son “we” o “they”; la forma no lo dice.",
          register: "neutro",
          region: "Universal.",
          related: ["our", "their", "mine", "yours"],
          example: {
            target: "Ours are hanging on the door.",
            translation: "Las nuestras están colgadas en la puerta."
          }
        },
        {
          term: "Andrew's / my mom's",
          explanation: "Con un nombre o un sustantivo, el inglés marca la posesión con apóstrofo y ese, y puede dejar el sustantivo poseído sin decir. “My mom's” equivale a “el de mi mamá”.",
          literal: "de Andrés / de mi mamá",
          useWhen: "El dueño tiene nombre: “Is it Andrew's?”, “That's my mom's”.",
          avoidWhen: "Se trata de un objeto y no de una persona; ahí el inglés prefiere “of”: “the lid of the container”.",
          register: "neutro",
          region: "Universal.",
          related: ["of", "his", "belong to", "possessive s"],
          example: {
            target: "Or your mom's?",
            translation: "¿O el de tu mamá?"
          }
        },
        {
          term: "belong to",
          explanation: "La forma explícita y algo más formal de decir a quién pertenece algo. Aparece en avisos, formularios y en cualquier situación en la que convenga ser inequívoco.",
          literal: "pertenecer a",
          useWhen: "Contextos oficiales o énfasis: “This bag belongs to my sister”, “Who does this belong to?”.",
          avoidWhen: "Una conversación familiar rápida; ahí suena rebuscado frente a un simple “that's hers”.",
          register: "cortés",
          region: "Universal.",
          related: ["mine", "own", "possess", "whose"],
          example: {
            target: "Who does this charger belong to?",
            translation: "¿De quién es este cargador?"
          }
        },
        {
          term: "the container / the lid",
          explanation: "“Container” es la palabra general para el táper; muchos estadounidenses dicen “Tupperware” aunque no sea de esa marca, igual que en Colombia se dice “táper”.",
          literal: "el recipiente / la tapa",
          useWhen: "Sobras y comida guardada: “Bring the container back”.",
          avoidWhen: "Se refiere a un vaso o a una botella; esos tienen sus propias palabras.",
          register: "neutro",
          region: "Estados Unidos; “Tupperware” como nombre genérico es muy común.",
          related: ["Tupperware", "lid", "leftovers", "dish"],
          example: {
            target: "That container isn't mine.",
            translation: "Ese táper no es el mío."
          }
        }
      ],
      note: "El inglés tiene un solo juego de posesivos independientes — mine, yours, his, hers, ours, theirs — y son invariables. No concuerdan con el objeto poseído, no llevan artículo y no tienen plural. Donde el español dice “las mías” porque las llaves son femeninas y plurales, el inglés dice “mine” y ya. Esa simplicidad esconde tres trampas para un hispanohablante. La primera es el artículo: “the mine” no existe, y sin embargo es el error más frecuente, porque el español casi siempre pone “el” o “la” delante. La segunda es el plural: “mines” tampoco existe, aunque “mine” traduzca “los míos”. La tercera es la ortografía de “hers”, “yours”, “ours” y “theirs”, que nunca llevan apóstrofo — el apóstrofo está reservado para los nombres (“Andrew's”) y para la contracción “it's” (= it is), que no tiene nada que ver con el posesivo “its”. A cambio, el inglés le regala una precisión que el español no tiene: “his” y “hers” distinguen el género del dueño, así que no hace falta el rodeo de “el de él” o “el de ella”.",
      culture: [
        {
          label: "Las contracciones son el registro",
          body: "Val y Sarah dicen “isn't”, “it's”, “mine's” y “I'll” en casi todas las líneas. En inglés estadounidense hablado, contraer no es descuido: es la marca por defecto de la conversación entre iguales. Un hispanohablante que pronuncie cada palabra completa — “That is not mine. I will take mine.” — no suena más correcto ni más educado, sino tenso, y en una cocina familiar puede leerse como enojo contenido. Aprender a contraer es aprender el registro, no un atajo."
        },
        {
          label: "La comida compartida y sus recipientes",
          body: "El “potluck”, la comida a la que cada quien lleva un plato, es una institución en Estados Unidos, y funciona igual que el almuerzo dominical colombiano en un punto concreto: los recipientes vuelven a casa con quien los trajo, y muchas veces no vuelven. De ahí que exista la costumbre de escribir el nombre en la tapa con marcador. Es exactamente la situación para la que sirven estos posesivos: todos saben de qué objeto se habla y lo único que está en discusión es de quién es."
        },
        {
          label: "El inglés distingue el dueño y el español distingue la cosa",
          body: "Este es el intercambio exacto entre los dos idiomas. El español le obliga a saber si el objeto es masculino o femenino, singular o plural, y no le pide nada sobre el dueño: “las mías” lo dice igual un hombre que una mujer. El inglés hace lo contrario: no le pide nada sobre el objeto, pero le obliga a elegir entre “his” y “hers”, es decir, a saber el género de quien posee. Un hispanohablante que evita “his/hers” por costumbre acaba diciendo “theirs” todo el tiempo, lo cual es aceptable hoy pero a veces vago; y un angloparlante que aprende español pone la marca de género en el lugar equivocado. Saber dónde cae la exigencia en cada idioma evita los dos errores."
        }
      ],
      pitfalls: [
        {
          mistake: "That container is not the mine, the mine has the red lid.",
          whyItFails: "Es un calco de “el mío”. Los posesivos independientes del inglés nunca llevan artículo: “the mine” no existe como posesivo, y de hecho “a mine” es una mina.",
          sayInstead: "That container isn't mine — mine has the red lid."
        },
        {
          mistake: "The keys are her's and the chargers are our's.",
          whyItFails: "“Hers”, “ours”, “yours” y “theirs” jamás llevan apóstrofo. El apóstrofo marca posesión solo con nombres y sustantivos, como en “Andrew's”.",
          sayInstead: "The keys are hers and the chargers are ours."
        },
        {
          mistake: "These containers are mines, not yours.",
          whyItFails: "“Mine” es invariable y no tiene plural, aunque traduzca “los míos”. Añadir la ese es uno de los errores más reconocibles de un hispanohablante.",
          sayInstead: "These containers are mine, not yours."
        },
        {
          mistake: "Is this charger the your one or the Andrew one?",
          whyItFails: "El inglés no construye la posesión con artículo más posesivo, y con un nombre propio usa el apóstrofo, no un sustantivo suelto.",
          sayInstead: "Is this charger yours, or is it Andrew's?"
        }
      ],
      variations: [
        {
          form: "That one's not mine.",
          register: "familiar",
          region: "Inglés estadounidense hablado",
          whenToUse: "Lo más natural cuando hay varios objetos parecidos delante y usted descarta uno."
        },
        {
          form: "That's not mine.",
          register: "neutro",
          region: "Universal",
          whenToUse: "Negar la pertenencia sin comparar con nada. Es la forma más corta y sirve en cualquier registro."
        },
        {
          form: "That doesn't belong to me.",
          register: "cortés",
          region: "Universal",
          whenToUse: "Contextos oficiales o cuando quiere dejarlo por escrito: un formulario, un reclamo, una oficina."
        },
        {
          form: "That's hers, not mine.",
          register: "neutro",
          region: "Universal",
          whenToUse: "Cuando necesita nombrar a la dueña real y no basta con descartarse a usted misma."
        },
        {
          form: "That one's my mom's, I think.",
          register: "familiar",
          region: "Inglés estadounidense hablado",
          whenToUse: "Cuando nombrar a la persona es más claro que cualquier pronombre, con un “I think” que suaviza la afirmación."
        }
      ],
      prompt: "Val tiene un cargador en la mano y le dice a Sarah que no es de ella, y que el suyo está en la sala. ¿Cuál es correcta?",
      choices: [
        "This charger isn't the mine, because the mine is still charging in the living room.",
        "This charger isn't mines, because mines is still charging in the living room.",
        "This charger isn't mine, because mine is still charging in the living room."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Sarah dice “Ours are hanging on the door”, hablando de llaves. ¿Por qué no “Ours are” cambia a plural?",
          choices: [
            "Porque los posesivos independientes del inglés son invariables y no tienen plural.",
            "Porque las llaves se cuentan como un objeto único en inglés estadounidense.",
            "Porque “ours” ya es plural y por eso no puede referirse a un solo objeto."
          ],
          answer: 0,
          tests: "invariabilidad del posesivo independiente frente a la concordancia española"
        },
        {
          prompt: "¿Cuál está bien escrita?",
          choices: [
            "The keys are her's and the chargers are their's.",
            "The keys are hers and the chargers are theirs.",
            "The keys are hers' and the chargers are theirs'."
          ],
          answer: 1,
          tests: "ortografía: los posesivos independientes no llevan apóstrofo"
        },
        {
          prompt: "En español “el suyo” puede ser de él, de ella o de usted. ¿Qué hace el inglés en ese punto?",
          choices: [
            "Usa “yours” para los tres casos y deja que el contexto lo resuelva.",
            "Usa una sola palabra ambigua igual que el español, que es “theirs”.",
            "Separa “his” y “hers”, así que el género del dueño queda marcado."
          ],
          answer: 2,
          tests: "el inglés marca el género del poseedor donde el español no lo hace"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/75-obligation-and-belonging.js");
