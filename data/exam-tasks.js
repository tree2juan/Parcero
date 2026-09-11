/*
 * Exam writing tasks, one per band, with calibrated answers.
 *
 * Why this file exists.
 *
 * The course teaches the language an exam tests, and by B2 it covers every
 * grammar point on the Instituto Cervantes B1/B2 inventory. What it did not
 * teach was the exam itself: how long the task is, how many words it wants,
 * what a rater is actually rewarding, and — the part nobody can supply for
 * themselves — what the difference between a failing answer and a passing one
 * looks like when both are grammatical.
 *
 * That gap is the specific thing that sinks self-study candidates. A learner
 * working alone can drill vocabulary honestly and still walk in never having
 * written to a word count under a clock, and still have no idea that a B2
 * essay which answers only two of the three required points is capped no
 * matter how clean the Spanish is. Neither fact is discoverable from inside a
 * lesson.
 *
 * So each band carries one real task, and two answers to it. The weak answer
 * is not a strawman full of errors — it is deliberately *almost right*,
 * because that is the answer a diligent self-studier actually produces. The
 * notes on each say why a rater moved it, which is the thing a published
 * sample answer gives you and a textbook does not.
 *
 * Which language each field is in.
 *
 * This follows the same asymmetry as `sounds` in study-guide.js, for the same
 * reason. `weak.text` and `strong.text` are the thing being produced, so they
 * are in the language being studied. Everything around them — the brief, the
 * criteria, the rater's notes, the checklist — is explanation, so it is in the
 * language the learner already has. A learner on direction "es" is sitting a
 * Spanish exam and reading English about it; a learner on direction "en" is
 * sitting an English exam and reading Spanish about it.
 *
 * The exams named are the ones these learners actually sit. For Spanish that
 * is DELE and SIELE, whose writing papers share a shape. For English, learners
 * in Colombia overwhelmingly sit Cambridge or TOEFL, so the task shapes are
 * Cambridge's, which are the stricter and more prescriptive of the two.
 *
 * Word counts and timings are the published ones. They are stated as a range
 * where the board publishes a range, and a minimum where the board publishes a
 * minimum, because those two are marked very differently: going under a
 * minimum is an automatic penalty, while going over a range is usually not.
 */
const EXAM_TASKS = {
  A1: {
    es: {
      exam: "DELE A1 · Escrita, Tarea 2",
      task: "A short personal message",
      minutes: 15,
      words: "20–30 words",
      countRule: "minimum",
      brief:
        "A Colombian friend has written asking how you are and what you do. Reply to the message. You must say who you are, where you live, and one thing you do every day.",
      criteria: [
        "Every point in the brief is answered. Three were asked for; three must appear.",
        "The message opens and closes like a message, not like a list of sentences.",
        "Verbs agree with their subject. At A1 nobody expects range, they expect control of ser, estar, vivir and the present tense.",
        "It is legible and it is long enough. Under the minimum is penalized before anything else is even read."
      ],
      weak: {
        text:
          "Hola. Me llamo Ana. Soy de Bogotá. Vivo en Bogotá. Trabajo. Soy profesora. Todos los días trabajo. Gracias.",
        notes: [
          "Every sentence is correct, and the answer still scores low. That is the lesson.",
          "It is 18 words — under the 20-word minimum. That alone caps the mark before the rater judges the Spanish.",
          "There is no greeting to a person and no close. \"Gracias\" is not how you end a message to a friend, and the rater is marking whether this reads as a message at all.",
          "\"Trabajo. Soy profesora. Todos los días trabajo.\" says the same thing three times because the writer is padding to reach a length. Repetition is visible to a rater and reads as having nothing to say."
        ]
      },
      strong: {
        text:
          "¡Hola, Camila! ¿Cómo vas? Yo estoy muy bien, gracias. Me llamo Ana y vivo en Bogotá, en el barrio Chapinero. Soy profesora y todos los días tomo un tinto antes de ir al colegio. ¿Y tú cómo vas? Un abrazo, Ana.",
        notes: [
          "41 words, comfortably clear of the minimum, and not one of them is padding.",
          "It opens by naming the friend and asking after her, and closes with \"Un abrazo\" and a signature. The rater can see a message, not an exercise.",
          "All three required points are there and each is answered once: who (Ana, profesora), where (Bogotá, Chapinero), what every day (un tinto antes del colegio).",
          "\"¿Cómo vas?\" and \"un tinto\" are Colombian and entirely safe. DELE accepts any standard variety in production — what it will not accept is a point left unanswered."
        ]
      },
      checklist: [
        "Count the words before you stop writing.",
        "Underline each thing the brief asked for, then find it in your answer.",
        "Check there is a greeting at the top and a sign-off at the bottom.",
        "Read it once for subject-verb agreement only. Nothing else."
      ]
    },
    en: {
      exam: "Cambridge A2 Key · Writing, Parte 6",
      task: "Un mensaje corto a un amigo",
      minutes: 15,
      words: "25 palabras como mínimo",
      countRule: "minimum",
      brief:
        "Un amigo estadounidense te escribió preguntando cómo estás y qué haces. Contesta el mensaje. Tienes que decir quién eres, dónde vives y una cosa que haces todos los días.",
      criteria: [
        "Los tres puntos del enunciado aparecen. Si falta uno, la nota baja aunque el inglés sea correcto.",
        "El mensaje se abre y se cierra como un mensaje, no como una lista de frases sueltas.",
        "El verbo concuerda con el sujeto. En A2 nadie espera variedad, esperan control del presente y de la tercera persona con -s.",
        "Llega al mínimo de palabras. Quedarse corto se penaliza antes de leer el contenido."
      ],
      weak: {
        text:
          "Hi. My name is Ana. I am from Colombia. I live in Houston. I work. I am a teacher. Every day I work. Thank you.",
        notes: [
          "Cada frase está bien y la respuesta igual saca poca nota. Esa es la lección.",
          "Son 25 palabras: justo el mínimo, así que no queda margen para ningún error.",
          "No hay saludo a una persona ni despedida. \"Thank you\" no es como se cierra un mensaje a un amigo, y el examinador está calificando si esto se lee como un mensaje.",
          "\"I work. I am a teacher. Every day I work.\" dice lo mismo tres veces para rellenar. El examinador lo nota y lo lee como que no hay nada que contar."
        ]
      },
      strong: {
        text:
          "Hey Jessica! How are you doing? I'm doing great, thanks. My name is Ana and I live in Houston now, over by the Heights. I teach third grade, and every morning I grab a coffee before class. How about you? Talk soon, Ana",
        notes: [
          "43 palabras, bien por encima del mínimo, y ninguna es relleno.",
          "Abre nombrando a la amiga y preguntando por ella, y cierra con \"Talk soon\" y la firma. El examinador ve un mensaje de verdad.",
          "Los tres puntos están y cada uno se contesta una sola vez: quién (Ana, teacher), dónde (Houston, the Heights), qué todos los días (un café antes de clase).",
          "\"How are you doing?\" y \"grab a coffee\" son el registro informal que pide la tarea. No hace falta inglés rebuscado: hace falta inglés que suene a persona."
        ]
      },
      checklist: [
        "Cuenta las palabras antes de parar de escribir.",
        "Subraya cada cosa que pide el enunciado y búscala en tu respuesta.",
        "Comprueba que hay saludo arriba y despedida abajo.",
        "Lee una vez buscando sólo la -s de la tercera persona. Nada más."
      ]
    }
  },

  A2: {
    es: {
      exam: "DELE A2 · Escrita, Tarea 2",
      task: "An email giving news and making an arrangement",
      minutes: 20,
      words: "60–70 words",
      countRule: "range",
      brief:
        "You are going to visit a friend in Medellín next month. Write an email: thank her for the invitation, say when you arrive, ask two questions about the visit, and suggest one thing you would like to do together.",
      criteria: [
        "Four things were asked for. All four have to be findable, and the two questions have to be two questions, not one question asked twice.",
        "It holds together as an email: greeting, a reason for writing, the content, a close.",
        "Past and future are used where the task forces them. At A2 the rater wants to see you leave the present tense.",
        "Connectors do some work. \"Y\" repeated six times is A1 writing wearing an A2 word count."
      ],
      weak: {
        text:
          "Hola Sofía. Gracias por la invitación. Llego el 12 de marzo. ¿Cómo está el clima? ¿Cómo está el clima en marzo? Quiero conocer la ciudad. Y quiero comer. Y quiero ver el metro. Y quiero caminar. Hasta pronto.",
        notes: [
          "The brief asked for two questions. This asks the same question twice with different wording, and a rater will count it as one.",
          "Four sentences start with \"Y quiero\". The word count is reached by listing rather than by saying more, which is the commonest way an A2 answer stalls.",
          "It never leaves the present tense. Nothing here shows the rater you can handle time, and at A2 that is a band the answer simply does not reach.",
          "\"Hola Sofía\" with no comma and \"Hasta pronto\" with no name is thin, but it is the least of the problems."
        ]
      },
      strong: {
        text:
          "Hola, Sofía: ¡Mil gracias por la invitación! Me hizo mucha ilusión cuando me escribiste. Llego a Medellín el 12 de marzo por la tarde, así que estaré una semana entera. ¿Me recomiendas llevar ropa de lluvia? ¿Tu hermana viene también con nosotros? Si tenemos tiempo, me encantaría subir a la Comuna 13 y después comernos una bandeja paisa donde tu tía. Un abrazo grande, Camilo.",
        notes: [
          "65 words — inside the 60–70 range, which matters here because A2 publishes a range and a rater does check it.",
          "Two genuinely different questions, about two different things. That is what \"ask two questions\" means and it is the point candidates most often drop.",
          "It moves through time: \"me hizo ilusión\" (past), \"llego / estaré\" (future), \"si tenemos tiempo\" (condition). The rater can see tense control without the writer announcing it.",
          "\"Así que\", \"si… ,\" and \"y después\" are doing the joining. Compare the four \"Y quiero\" sentences above — same length, visibly different level.",
          "\"Me hizo ilusión\", \"Comuna 13\" and \"bandeja paisa\" are Colombian and specific. Specificity is free marks: it is what makes an answer read as written by a person."
        ]
      },
      checklist: [
        "Number the things the brief asked for. Write the number in the margin next to each one in your answer.",
        "If you asked two questions, check they are about two different things.",
        "Find one sentence that is not in the present tense. If there is not one, add one.",
        "Count your \"y\"s. More than three in sixty words is a warning."
      ]
    },
    en: {
      exam: "Cambridge A2 Key · Writing, Parte 7",
      task: "Un correo con noticias y un plan",
      minutes: 20,
      words: "60–70 palabras",
      countRule: "range",
      brief:
        "Vas a visitar a una amiga en Texas el mes que viene. Escribe un correo: agradécele la invitación, dile cuándo llegas, hazle dos preguntas sobre la visita y propón una cosa para hacer juntas.",
      criteria: [
        "El enunciado pide cuatro cosas. Las cuatro tienen que poder encontrarse, y las dos preguntas tienen que ser dos, no la misma preguntada dos veces.",
        "Se sostiene como correo: saludo, motivo, contenido, despedida.",
        "Aparecen pasado y futuro donde la tarea los obliga. En A2 el examinador quiere ver que sales del presente.",
        "Los conectores trabajan. Seis \"and\" seguidos son escritura de A1 con el número de palabras de A2."
      ],
      weak: {
        text:
          "Hi Sarah. Thank you for the invitation. I arrive on March 12. How is the weather? How is the weather in March? I want to see the city. And I want to eat. And I want to see the museum. And I want to walk. See you.",
        notes: [
          "El enunciado pedía dos preguntas. Aquí se hace la misma dos veces con otras palabras, y el examinador la cuenta como una.",
          "Cuatro frases empiezan por \"And I want\". Se llega a las palabras enumerando en vez de diciendo más, que es la forma más común de atascarse en A2.",
          "No sale nunca del presente. Nada aquí le demuestra al examinador que manejas el tiempo, y en A2 eso deja la respuesta por debajo de la banda.",
          "\"See you.\" sin nombre es flojo, pero es el menor de los problemas."
        ]
      },
      strong: {
        text:
          "Hi Sarah, Thanks so much for inviting me! I was thrilled when I got your message. I land in Austin on March 12th in the afternoon, so I'll be there a whole week. Should I pack a jacket for the evenings? Is your brother coming too? If we have time, I'd love to see a show downtown and then grab some real barbecue. Big hug, Camila",
        notes: [
          "66 palabras: dentro del rango 60–70, que en A2 sí se comprueba.",
          "Dos preguntas de verdad distintas, sobre dos cosas distintas. Eso es lo que significa \"hazle dos preguntas\" y es justo lo que más se cae.",
          "Se mueve por el tiempo: \"I was thrilled\" (pasado), \"I land / I'll be\" (futuro), \"if we have time\" (condición). El examinador ve control sin que haya que anunciarlo.",
          "\"So\", \"if… ,\" y \"and then\" hacen de unión. Compáralo con los cuatro \"And I want\" de arriba: misma longitud, nivel visiblemente distinto.",
          "\"Grab some real barbecue\" y \"a show downtown\" son concretos y suenan a Texas. Lo concreto sale gratis y es lo que hace que la respuesta parezca escrita por una persona."
        ]
      },
      checklist: [
        "Numera lo que pide el enunciado y escribe el número al margen junto a cada parte de tu respuesta.",
        "Si hiciste dos preguntas, comprueba que son sobre dos cosas distintas.",
        "Busca una frase que no esté en presente. Si no hay ninguna, añádela.",
        "Cuenta tus \"and\". Más de tres en sesenta palabras es una señal de alarma."
      ]
    }
  },

  B1: {
    es: {
      exam: "DELE B1 · Escrita, Tarea 1",
      task: "A letter responding to something you read or heard",
      minutes: 30,
      words: "100–120 words",
      countRule: "range",
      brief:
        "You read a post from a neighborhood group in Bogotá complaining that the park is always dirty and proposing a Saturday clean-up. Write to the group: say whether you agree, explain one reason, describe a problem you have seen yourself, and offer to help with something specific.",
      criteria: [
        "It responds to the input. A B1 Tarea 1 answer that could have been written without reading the post scores badly however good the Spanish is.",
        "An opinion is stated and then supported. \"Estoy de acuerdo\" on its own is not a reason.",
        "There is narration in the past — you saw something, and you say what.",
        "Register is consistent. This is a group of neighbors you do not all know: usted or a neutral plural, held to the end.",
        "Paragraphs exist. One 110-word block is marked down for organization even when the content is right."
      ],
      weak: {
        text:
          "Estoy de acuerdo con el mensaje. El parque está sucio. Es un problema grande para todos los vecinos y creo que hay que hacer algo pronto porque así no podemos seguir. La basura es mala para los niños y para los animales. También es feo. Yo pienso que la limpieza es importante y que todos debemos ayudar porque el parque es de todos. Estoy de acuerdo con la propuesta del sábado. Muchas gracias por su atención. Atentamente.",
        notes: [
          "Correct, on topic, the right length — and it would not pass. Worth sitting with that.",
          "It agrees twice and never gives a reason. \"Porque así no podemos seguir\" and \"porque el parque es de todos\" restate the opinion instead of supporting it.",
          "The brief asked for something the writer had seen. Nothing here is narrated and nothing is in the past. Two required points are simply missing.",
          "It offers no help. \"Todos debemos ayudar\" is a sentiment, not the specific offer that was asked for.",
          "One unbroken block, and it closes with \"Atentamente\" after addressing neighbors — a formal register bolted onto an otherwise neutral letter."
        ]
      },
      strong: {
        text:
          "Estimados vecinos:\n\nLeí la publicación sobre el parque y estoy completamente de acuerdo, sobre todo porque el problema ya no es sólo estético: es de salud. Los tarros se llenan el viernes y nadie los recoge hasta el lunes.\n\nEl sábado pasado llevé a mi sobrina a los columpios y encontramos vidrio roto debajo de la resbaladilla. Tuve que sacarla de ahí. Desde entonces no hemos vuelto, y sé de dos familias que tampoco.\n\nCuenten conmigo para la jornada. Puedo llevar guantes y bolsas para diez personas, y me ofrezco a hablar con la administración para que pongan un tarro más.\n\nUn saludo cordial,\nDaniela Restrepo",
        notes: [
          "106 words, in the range, and every one of the four required points is somewhere a rater can point at.",
          "The reason is a real reason: bins fill Friday, nobody empties them until Monday. That is support, not a second helping of the opinion.",
          "The past narration does the heavy lifting — \"llevé\", \"encontramos\", \"tuve que sacarla\", then \"no hemos vuelto\" to link it to now. That contrast between preterite and present perfect is exactly what B1 is looking for.",
          "The offer is specific and countable: gloves and bags for ten, plus talking to the administration. \"I will help\" would not have scored.",
          "Four short paragraphs, a proper opening and a proper close, and one register held throughout.",
          "\"Resbaladilla\" and \"tarros\" are regional. They cost nothing in production and they make the answer concrete."
        ]
      },
      checklist: [
        "Before writing, list the things the brief asks for in the margin. Tick them off as you go.",
        "Find your opinion sentence. Then find the sentence that supports it. If they are the same sentence, you have not supported it.",
        "Find at least one verb in the preterite. B1 Tarea 1 almost always wants a story.",
        "Make your offer countable: how many, what, when.",
        "Break it into paragraphs before you count the words, not after."
      ]
    },
    en: {
      exam: "Cambridge B1 Preliminary · Writing, Parte 1",
      task: "Un correo que responde a algo que leíste",
      minutes: 30,
      words: "100 palabras aproximadamente",
      countRule: "approximate",
      brief:
        "Leíste un mensaje del grupo de vecinos de tu barrio en Houston quejándose de que el parque está siempre sucio y proponiendo una limpieza el sábado. Escríbele al grupo: di si estás de acuerdo, explica una razón, cuenta un problema que hayas visto tú y ofrece ayuda con algo concreto.",
      criteria: [
        "Responde al texto de entrada. Una respuesta que se podría haber escrito sin leer el mensaje saca mala nota por bueno que sea el inglés.",
        "Se da una opinión y después se apoya. \"I agree\" solo no es una razón.",
        "Hay narración en pasado: viste algo y cuentas qué.",
        "El registro es constante. Son vecinos a los que no conoces del todo: ni muy formal ni de confianza, y sostenido hasta el final.",
        "Hay párrafos. Un bloque de 100 palabras baja la nota de organización aunque el contenido esté."
      ],
      weak: {
        text:
          "I agree with the message. The park is dirty. It is a big problem for all the neighbors and I think we have to do something soon because we cannot continue like this. The garbage is bad for the children and for the animals. It is also ugly. I think that cleaning is important and that everybody must help because the park belongs to everybody. I agree with the proposal of Saturday. Thank you for your attention. Sincerely.",
        notes: [
          "Correcto, sobre el tema, con la longitud justa, y no aprobaría. Vale la pena detenerse en eso.",
          "Está de acuerdo dos veces y no da ninguna razón. \"Because we cannot continue like this\" y \"because the park belongs to everybody\" repiten la opinión en vez de apoyarla.",
          "El enunciado pedía algo que hubieras visto tú. Aquí no se narra nada ni hay pasado. Faltan dos de los puntos obligatorios.",
          "No ofrece ayuda. \"Everybody must help\" es un sentimiento, no el ofrecimiento concreto que se pedía.",
          "Un solo bloque, y cierra con \"Sincerely\" después de dirigirse a los vecinos: un registro formal pegado a una carta que no lo es."
        ]
      },
      strong: {
        text:
          "Hi everyone,\n\nI read the post about the park and I completely agree — mostly because this isn't just about how it looks anymore, it's about safety. The cans fill up on Friday and nobody empties them until Monday.\n\nLast Saturday I took my niece to the swings and we found broken glass under the slide. I had to pull her out of there. We haven't been back since, and I know two other families who haven't either.\n\nCount me in for Saturday. I can bring gloves and trash bags for ten people, and I'm happy to call the city about adding another can.\n\nThanks,\nDaniela",
        notes: [
          "105 palabras y los cuatro puntos obligatorios están donde el examinador puede señalarlos.",
          "La razón es una razón de verdad: los botes se llenan el viernes y nadie los vacía hasta el lunes. Eso es apoyo, no la opinión servida otra vez.",
          "La narración en pasado carga con el peso: \"took\", \"found\", \"had to pull\", y después \"we haven't been back\" para enlazarlo con el presente. Ese contraste entre pasado simple y present perfect es justo lo que mira B1.",
          "El ofrecimiento es concreto y contable: guantes y bolsas para diez, y llamar a la ciudad. \"I will help\" no habría puntuado.",
          "Cuatro párrafos cortos, apertura y cierre de verdad, y un solo registro sostenido.",
          "\"Trash bags\", \"the city\" y \"count me in\" son el inglés americano que se usa de verdad en ese contexto."
        ]
      },
      checklist: [
        "Antes de escribir, apunta al margen lo que pide el enunciado. Ve tachándolo.",
        "Busca tu frase de opinión. Después busca la que la apoya. Si son la misma, no la has apoyado.",
        "Busca al menos un verbo en pasado simple. B1 Parte 1 casi siempre quiere una historia.",
        "Haz que tu ofrecimiento sea contable: cuántos, qué, cuándo.",
        "Separa en párrafos antes de contar las palabras, no después."
      ]
    }
  },

  B2: {
    es: {
      exam: "DELE B2 · Escrita, Tarea 2",
      task: "An opinion piece arguing a position",
      minutes: 40,
      words: "150–180 words",
      countRule: "range",
      brief:
        "A Colombian magazine has invited readers to respond to the claim that remote work has emptied city centers and damaged small businesses. Write your piece: state your position, give two arguments for it, acknowledge one argument against it and answer that objection, and close with a recommendation.",
      criteria: [
        "The concession is not optional. An answer that never acknowledges the other side is capped at B2, and this is the single most common reason a strong candidate fails this task.",
        "Two arguments means two different arguments, developed, not two phrasings of one.",
        "Register is consistently formal-neutral: no tú, no colloquialisms, no exclamation marks.",
        "The grammar B2 is looking for appears because the content forces it — subjunctive after expressions of doubt and value, concessive aunque, conditionals, passive or impersonal se.",
        "It is organized: position, development, concession, recommendation. A rater is reading for that skeleton."
      ],
      weak: {
        text:
          "En mi opinión el trabajo remoto es muy malo para las ciudades. Creo que es un problema grave. Los centros están vacíos y los negocios pequeños están cerrando. Muchos restaurantes que dependían de los oficinistas ya no tienen clientes y han tenido que cerrar. Además, los negocios pequeños pierden dinero porque no hay gente en la calle. Los dueños de los restaurantes están muy preocupados. Yo pienso que esto es terrible y que el gobierno tiene que hacer algo urgente. Creo que las empresas deben obligar a sus empleados a volver a la oficina porque si no las ciudades se van a morir. Es muy importante actuar ahora.",
        notes: [
          "Fluent, confident, 108 words, and it would come back No apto. Every problem here is structural, not linguistic.",
          "There is no concession. The task named one and the answer never acknowledges that anyone could think otherwise — on its own, enough to cap the mark.",
          "The two arguments are one argument: restaurants lose office workers, and small businesses lose street traffic. Same mechanism, said twice.",
          "It is short. 108 against a 150–180 range is a penalty applied before content is judged.",
          "\"Creo que\", \"yo pienso que\", \"en mi opinión\" four times. All take the indicative, so the answer never once needs the subjunctive, and the rater sees no evidence of B2 grammar.",
          "\"Muy malo\", \"terrible\", \"se van a morir\" is the register of a conversation, not of a magazine."
        ]
      },
      strong: {
        text:
          "El vaciamiento de los centros urbanos es real, pero atribuirlo sin más al trabajo remoto me parece un diagnóstico apresurado.\n\nEn primer lugar, conviene recordar que muchos centros ya se estaban despoblando antes de 2020, empujados por unos alquileres que ningún negocio de barrio podía sostener. El teletrabajo no creó esa tendencia: la hizo visible.\n\nEn segundo lugar, el gasto no ha desaparecido, se ha desplazado. Las panaderías y peluquerías de los barrios residenciales facturan hoy lo que antes se quedaba junto a las oficinas.\n\nNo niego que el perjuicio para los locales del centro haya sido severo; sería deshonesto sostener lo contrario cuando uno de cada tres ha cerrado. Ahora bien, aunque el daño sea innegable, obligar a la gente a volver a la oficina trataría el síntoma y no la causa.\n\nSería más sensato que los municipios revisaran los alquileres comerciales y permitieran convertir oficinas vacías en vivienda. Si el centro vuelve a ser un lugar donde se vive, los negocios volverán solos.",
        notes: [
          "165 words, inside the range, and the skeleton the task asked for is visible at a glance.",
          "The concession is a real one and it is placed where it belongs: \"No niego que… haya sido severo\", conceded with a figure, then answered with \"Ahora bien, aunque el daño sea innegable…\". That paragraph is the difference between Apto and No apto on this task.",
          "Two genuinely separate arguments: rents were already emptying centers before 2020, and spending moved rather than vanished. Different mechanisms, each developed.",
          "The B2 grammar is forced by the content rather than decorated on: \"no niego que haya sido\" and \"sería más sensato que revisaran\" need the subjunctive; \"aunque el daño sea\" is concessive; \"si el centro vuelve…, volverán\" is a conditional; \"se ha desplazado\" is impersonal.",
          "Register holds: no first-person opinion formulas, no exclamations, no colloquialism. \"Me parece\" appears once, in the opening, which is where a piece is allowed to place itself.",
          "It ends on a recommendation that follows from the arguments instead of on a slogan."
        ]
      },
      checklist: [
        "Write the skeleton first: position / argument 1 / argument 2 / concession + answer / recommendation. Five lines before any prose.",
        "Find your concession. If you cannot point at it, you have not written one and the task is capped.",
        "Check your two arguments are two mechanisms, not one mechanism twice.",
        "Count the words. Under the range costs marks you cannot earn back.",
        "Delete every \"yo creo que\". Then see which sentences now need a subjunctive."
      ]
    },
    en: {
      exam: "Cambridge B2 First · Writing, Parte 1 (ensayo)",
      task: "Un ensayo defendiendo una postura",
      minutes: 40,
      words: "140–190 palabras",
      countRule: "range",
      brief:
        "En tu clase han discutido si el trabajo remoto ha vaciado los centros de las ciudades y perjudicado a los negocios pequeños. Escribe un ensayo: fija tu postura, da dos argumentos, reconoce un argumento en contra y respóndelo, y cierra con una recomendación.",
      criteria: [
        "La concesión no es opcional. Una respuesta que nunca reconoce la otra postura se queda con el techo puesto, y es la razón más común por la que un buen candidato suspende esta tarea.",
        "Dos argumentos significa dos argumentos distintos, desarrollados, no el mismo dicho de dos maneras.",
        "El registro es formal y neutro: nada de contracciones informales de más, ni exclamaciones, ni coloquialismos.",
        "La gramática de B2 aparece porque el contenido la obliga: condicionales, concesivas con although, pasiva, verbos modales de matiz.",
        "Está organizado: postura, desarrollo, concesión, recomendación. El examinador lee buscando ese esqueleto."
      ],
      weak: {
        text:
          "In my opinion remote work is very bad for cities. I think it is a serious problem. The centers are empty and small businesses are closing. Many restaurants that depended on office workers do not have clients anymore and they had to close. Also, small businesses lose money because there are no people in the street. The owners of the restaurants are very worried. I think this is terrible and the government has to do something urgent. I think companies must force their employees to come back to the office because if not the cities are going to die. It is very important to act now.",
        notes: [
          "Suelto, seguro, 106 palabras, y volvería suspendido. Todos los problemas son de estructura, no de lengua.",
          "No hay concesión. La tarea pedía una y la respuesta nunca reconoce que alguien pueda pensar lo contrario. Eso solo ya pone techo a la nota.",
          "Los dos argumentos son uno: los restaurantes pierden oficinistas, y los negocios pierden gente en la calle. El mismo mecanismo dicho dos veces.",
          "Se queda corto. 106 frente a un rango de 140–190 es una penalización que se aplica antes de valorar el contenido.",
          "\"In my opinion\", \"I think\" cuatro veces. El ensayo nunca necesita una estructura compleja y el examinador no ve pruebas de gramática de B2.",
          "\"Very bad\", \"terrible\", \"are going to die\" es registro de conversación, no de ensayo."
        ]
      },
      strong: {
        text:
          "City centers are undeniably emptier than they were five years ago, but blaming remote work alone strikes me as a hasty diagnosis.\n\nIn the first place, it is worth remembering that many downtowns were already losing residents well before 2020, driven out by commercial rents no neighborhood business could absorb. Remote work did not create that trend; it merely made it visible.\n\nSecondly, the spending has not disappeared so much as moved. Bakeries and barber shops in residential neighborhoods now take the money that used to be spent beside the offices.\n\nAdmittedly, the damage to downtown businesses has been severe, and it would be dishonest to pretend otherwise when roughly one in three has closed. Even so, although the harm is real, forcing people back into offices would treat the symptom rather than the cause.\n\nIt would make far more sense for cities to review commercial rents and allow empty offices to be converted into housing. If downtown becomes a place where people live again, the businesses will follow.",
        notes: [
          "169 palabras, dentro del rango, y el esqueleto que pedía la tarea se ve de un vistazo.",
          "La concesión es de verdad y está donde debe: \"Admittedly, the damage… has been severe\", concedida con un dato, y respondida con \"Even so, although the harm is real…\". Ese párrafo es la diferencia entre aprobar y no.",
          "Dos argumentos realmente distintos: los alquileres ya vaciaban los centros antes de 2020, y el gasto se desplazó en vez de desaparecer. Mecanismos distintos, cada uno desarrollado.",
          "La gramática de B2 la obliga el contenido, no está de adorno: \"it would be dishonest to pretend\", \"although the harm is real\", \"if downtown becomes…, the businesses will follow\", y la pasiva \"to be converted\".",
          "El registro se sostiene: sin exclamaciones, sin coloquialismos, y \"strikes me as\" aparece una sola vez, en la apertura, que es donde un ensayo puede situarse.",
          "Cierra con una recomendación que se sigue de los argumentos, no con un eslogan."
        ]
      },
      checklist: [
        "Escribe primero el esqueleto: postura / argumento 1 / argumento 2 / concesión + respuesta / recomendación. Cinco líneas antes de redactar.",
        "Busca tu concesión. Si no puedes señalarla, no la has escrito y la tarea se queda con techo.",
        "Comprueba que tus dos argumentos son dos mecanismos, no uno repetido.",
        "Cuenta las palabras. Quedarte por debajo del rango cuesta puntos que ya no recuperas.",
        "Borra todos los \"I think\". Después mira qué frases necesitan ahora una estructura más compleja."
      ]
    }
  }
};

if (typeof module !== "undefined" && module.exports) module.exports = { EXAM_TASKS };
