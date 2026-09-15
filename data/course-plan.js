/*
 * The course as an institution sees it.
 *
 * Everything else in this repo is the course. This file is the paperwork
 * around it: what the course claims to do, how long it takes, how it is
 * assessed, and what it does not cover. None of that is discoverable from the
 * lessons, and all of it is the first thing a department head asks for.
 *
 * It is authored rather than derived because most of it is judgment. The
 * numbers that *can* be derived — how many modules, how many lessons, how many
 * taught minutes — are derived at render time from data/modules.js and
 * data/teaching.js rather than copied here, so this file cannot drift out of
 * step with the course the way a written prospectus always does.
 *
 * Both languages are a translation pair here. A course handbook is read by the
 * teacher or the administrator in whichever language they work in, and it says
 * the same thing either way. That is unlike the teaching notes, where the two
 * sides plan two different classes.
 */
const COURSE_PLAN = {
  /* ------------------------------------------------------------- what it is */
  about: {
    title: {
      en: "Parcero: a two-way course in Colombian Spanish and American English",
      es: "Parcero: un curso de doble vía en español colombiano e inglés americano"
    },
    summary: {
      en: "A complete A1-to-B2 course that runs in a browser with nothing installed and no account. It teaches Colombian Spanish to English speakers and American English to Colombian Spanish speakers from the same corpus, so a bilingual classroom can run both halves at once.",
      es: "Un curso completo de A1 a B2 que funciona en un navegador sin instalar nada y sin cuenta. Enseña español colombiano a angloparlantes e inglés americano a hispanohablantes colombianos desde el mismo corpus, así que un aula bilingüe puede llevar las dos mitades a la vez."
    },
    audience: {
      en: "Written for two readers at once: a teacher running a class who needs a plan, a checkpoint and a mark, and an adult studying alone who needs to know what to do next and whether it worked.",
      es: "Escrito para dos lectores a la vez: un profesor que dirige una clase y necesita un plan, una prueba y una nota, y un adulto que estudia solo y necesita saber qué hacer después y si funcionó."
    },
    approach: {
      en: "Every lesson is one real situation rather than one grammar point. The grammar is in it, and is explained, but the unit of learning is a thing you might actually have to do — a coffee ordered, a complaint made, a form argued about.",
      es: "Cada lección es una situación real y no un punto de gramática. La gramática está ahí y se explica, pero la unidad de aprendizaje es algo que de verdad podrías tener que hacer: pedir un café, poner una queja, discutir un formulario."
    }
  },

  /* ------------------------------------------------------------- the shape */
  /*
   * Contact hours are the one number a registrar always wants and the one most
   * often invented. This states the basis of the estimate instead of a single
   * figure, because a 50-minute plan run in a 90-minute period is not the same
   * course and pretending otherwise helps nobody.
   */
  hours: {
    basis: {
      en: "One module is one taught session plus homework. The session length is authored per module in the teaching notes and runs from 35 to 90 minutes; the figures below add those up and assume one hour of independent work per session.",
      es: "Un módulo es una sesión de clase más tarea. La duración está indicada por módulo en las notas de enseñanza y va de 35 a 90 minutos; las cifras de abajo las suman y asumen una hora de trabajo autónomo por sesión."
    },
    assessment: {
      en: "Add one period per module for the checkpoint and two per band for the exam. A checkpoint fits in the last ten minutes of a session if you would rather not spend a whole one.",
      es: "Añade un periodo por módulo para la prueba de control y dos por nivel para el examen. La prueba cabe en los últimos diez minutos de una sesión si prefieres no dedicarle una entera."
    },
    pacing: {
      en: "At two sessions a week a band takes about a term and the whole course about two years. At four a week the course fits a single intensive year. Neither pace changes the order: the bands are sequential and the modules within a band are too.",
      es: "A dos sesiones por semana un nivel toma un periodo y el curso completo unos dos años. A cuatro por semana el curso cabe en un año intensivo. Ninguno de los dos ritmos cambia el orden: los niveles son secuenciales y los módulos dentro de un nivel también."
    }
  },

  /* ------------------------------------------------------- how it is marked */
  assessment: {
    lead: {
      en: "Three kinds of mark, and they measure different things. A report that quotes only one of them is describing a third of the student.",
      es: "Tres tipos de nota, y miden cosas distintas. Un informe que cita solo una de ellas describe un tercio del estudiante."
    },
    pieces: [
      {
        id: "practice",
        weight: 0,
        label: { en: "Practice", es: "Práctica" },
        what: {
          en: "The questions inside each lesson. Graded instantly, scheduled for return when missed, and recorded on the device.",
          es: "Las preguntas dentro de cada lección. Se califican al instante, vuelven a aparecer si se fallan y quedan registradas en el dispositivo."
        },
        use: {
          en: "Formative only. Carries no weight in a grade, and should not: it is where a student is supposed to be wrong.",
          es: "Solo formativa. No pesa en la nota, y no debe: es donde el estudiante tiene permiso de equivocarse."
        }
      },
      {
        id: "checkpoint",
        weight: 40,
        label: { en: "Module checkpoints", es: "Pruebas de módulo" },
        what: {
          en: "A short paper at the end of each module, drawn from that module's own material, re-ordered and scored in one go with no feedback until the end.",
          es: "Una prueba corta al final de cada módulo, tomada del material de ese módulo, reordenada y calificada de una vez sin retroalimentación hasta el final."
        },
        use: {
          en: "Summative, and openly a test of taught material. Three forms exist per module so a retake is a different paper.",
          es: "Sumativa, y abiertamente una prueba de material ya enseñado. Hay tres formas por módulo para que una repetición sea otra prueba."
        }
      },
      {
        id: "exam",
        weight: 60,
        label: { en: "Band exams", es: "Exámenes de nivel" },
        what: {
          en: "One paper at the end of each band: a use-of-language section sampled from the whole band, a reading section on stories the student has not been examined on before, and a writing task marked by a person against the rubric.",
          es: "Un examen al final de cada nivel: una sección de uso de la lengua tomada de todo el nivel, una sección de lectura sobre relatos en los que no se ha examinado antes, y una tarea escrita que califica una persona con la rúbrica."
        },
        use: {
          en: "The claim that the band is finished. Pass mark is 65%, above the checkpoints', because part of it is unseen.",
          es: "La afirmación de que el nivel está terminado. Se aprueba con 65%, por encima de las pruebas de módulo, porque una parte no se ha visto antes."
        }
      }
    ],
    speaking: {
      en: "Speaking is not scored by the app and cannot be. Mark it from the rubric, from one unrehearsed exchange, at whatever interval your department requires — once a band is the minimum that means anything.",
      es: "El habla no la califica la aplicación ni puede hacerlo. Califícala con la rúbrica, a partir de un intercambio no ensayado, con la frecuencia que exija tu departamento: una vez por nivel es el mínimo que significa algo."
    },
    honesty: {
      en: "The checkpoints draw on material the student has already met. That is what an end-of-unit test is, and the interface says so rather than implying otherwise. If you need a mark that cannot have been rehearsed, use the exam's reading section or set the writing task under supervision.",
      es: "Las pruebas de módulo usan material que el estudiante ya vio. Eso es una prueba de unidad, y la interfaz lo dice en vez de insinuar lo contrario. Si necesitas una nota que no se pueda ensayar, usa la sección de lectura del examen o aplica la tarea escrita bajo supervisión."
    }
  },

  /* ------------------------------------------------------ running the thing */
  running: {
    classroom: [
      {
        id: "before",
        label: { en: "Before the session", es: "Antes de la sesión" },
        text: {
          en: "Read the module's plan and its two predicted errors. Print the workbook pages for the module if your students write on paper; the answer key prints at the back and can be withheld.",
          es: "Lee el plan del módulo y sus dos errores previstos. Imprime las páginas del cuaderno si tus estudiantes escriben en papel; las respuestas van al final y se pueden retener."
        }
      },
      {
        id: "during",
        label: { en: "In the session", es: "En la sesión" },
        text: {
          en: "The plan runs warm-up, presentation, practice, production, exit ticket. The support and stretch notes are for the two students who are not where the rest of the class is, and both are written to be given without singling anyone out.",
          es: "El plan va de calentamiento, presentación, práctica, producción y salida. Las notas de apoyo y de ampliación son para los dos estudiantes que no están donde el resto, y ambas están escritas para darse sin señalar a nadie."
        }
      },
      {
        id: "after",
        label: { en: "After the module", es: "Después del módulo" },
        text: {
          en: "Set the checkpoint. The mark comes back with the lessons the misses landed in, so reteaching is a decision rather than a guess. Students who fail sit form B rather than the same paper.",
          es: "Aplica la prueba de control. La nota vuelve con las lecciones donde cayeron los fallos, así que repetir un tema es una decisión y no una corazonada. Quien reprueba presenta la forma B y no la misma prueba."
        }
      },
      {
        id: "records",
        label: { en: "Records", es: "Registros" },
        text: {
          en: "Progress is stored in the browser on the student's own device and goes nowhere else. Export the report at the end of a term and keep it yourself, because clearing site data clears the record.",
          es: "El progreso se guarda en el navegador del propio estudiante y no va a ningún otro lado. Exporta el informe al final del periodo y guárdalo tú, porque borrar los datos del sitio borra el registro."
        }
      }
    ],
    alone: [
      {
        id: "order",
        label: { en: "Follow the order", es: "Sigue el orden" },
        text: {
          en: "The course is sequential and the sequence is doing work. Modules assume what the earlier ones taught, and skipping into the middle produces the specific experience of understanding every word and none of the sentences.",
          es: "El curso es secuencial y la secuencia sirve para algo. Los módulos dan por sabido lo anterior, y saltar a la mitad produce esa sensación concreta de entender todas las palabras y ninguna oración."
        }
      },
      {
        id: "week",
        label: { en: "Use the study cycle", es: "Usa el ciclo de estudio" },
        text: {
          en: "The workbook's cycle — meet, work, mark, speak, prove, return — is ninety minutes and is the difference between studying and reading about studying. The minutes on each step are part of the instruction.",
          es: "El ciclo del cuaderno (conocer, trabajar, corregir, hablar, demostrar, volver) son noventa minutos y es la diferencia entre estudiar y leer sobre estudiar. Los minutos de cada paso son parte de la instrucción."
        }
      },
      {
        id: "prove",
        label: { en: "Sit the checkpoints honestly", es: "Haz las pruebas con honestidad" },
        text: {
          en: "Nobody is watching, which is exactly why it counts. Sit the checkpoint without the lesson open, accept the mark, and reteach yourself what it points at. A checkpoint you looked things up for measures nothing.",
          es: "Nadie está mirando, y por eso mismo cuenta. Haz la prueba sin la lección abierta, acepta la nota y vuelve a enseñarte lo que señala. Una prueba consultando apuntes no mide nada."
        }
      },
      {
        id: "speak",
        label: { en: "Find a person", es: "Consigue una persona" },
        text: {
          en: "The one thing this course cannot give you is somebody to talk to. Mark your own speaking against the rubric if you must, but a real exchange with a real stranger is the assessment that counts, and it is the one nobody can fake for you.",
          es: "Lo único que este curso no puede darte es alguien con quien hablar. Califica tu habla con la rúbrica si no hay más remedio, pero un intercambio real con un desconocido real es la evaluación que cuenta, y es la que nadie puede falsear por ti."
        }
      }
    ]
  },

  /* ------------------------------------------------------------- the limits */
  /*
   * Stated here because every one of these has been asked, and because a
   * course that does not say what it leaves out is making a claim it cannot
   * support.
   */
  limits: [
    {
      id: "ceiling",
      label: { en: "It stops at B2", es: "Termina en B2" },
      text: {
        en: "There is no C1 or C2 here and nothing in the interface pretends there is. B2 is the level at which a speaker can hold a position under pressure, and that is where this course leaves you.",
        es: "Aquí no hay C1 ni C2 y nada en la interfaz finge que los haya. B2 es el nivel en que alguien sostiene una postura bajo presión, y ahí es donde este curso te deja."
      }
    },
    {
      id: "audio",
      label: { en: "There is no audio", es: "No hay audio" },
      text: {
        en: "Pronunciation is taught in writing, through respelling and explanation, and every plan assumes a human voice in the room rather than a recording. Listening comprehension from recorded speech is not assessed and should not be claimed.",
        es: "La pronunciación se enseña por escrito, con transcripción y explicación, y todo plan asume una voz humana en el salón y no una grabación. La comprensión auditiva de habla grabada no se evalúa ni debe declararse."
      }
    },
    {
      id: "variety",
      label: { en: "It is Colombian, not general", es: "Es colombiano, no general" },
      text: {
        en: "The Spanish is Colombian and often specifically paisa or bogotano, and says which. A student will be understood anywhere Spanish is spoken and will sound like they learned it somewhere in particular, because they did.",
        es: "El español es colombiano y a menudo específicamente paisa o bogotano, y lo dice. El estudiante será entendido en cualquier país hispanohablante y sonará como si lo hubiera aprendido en un lugar concreto, porque así fue."
      }
    },
    {
      id: "mature",
      label: { en: "One section is for adults", es: "Una sección es para adultos" },
      text: {
        en: "After Dark collects insults and strong language so a learner can understand what is being said to them. It is reference, not practice, and a school should decide deliberately whether to leave it reachable.",
        es: "After Dark reúne insultos y lenguaje fuerte para que el estudiante entienda lo que le están diciendo. Es referencia, no práctica, y un colegio debe decidir a propósito si lo deja accesible."
      }
    },
    {
      id: "privacy",
      label: { en: "Nothing leaves the device", es: "Nada sale del dispositivo" },
      text: {
        en: "There is no account, no server and no analytics. That is a privacy guarantee and an administrative constraint at the same time: a student's record exists in one browser, and you get it by exporting it.",
        es: "No hay cuenta, ni servidor, ni analítica. Eso es una garantía de privacidad y a la vez una limitación administrativa: el registro del estudiante existe en un navegador, y lo obtienes exportándolo."
      }
    }
  ]
};

if (typeof module === "object" && module.exports) {
  module.exports = { COURSE_PLAN };
}
