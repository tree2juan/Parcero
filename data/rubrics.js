/*
 * Rubrics: how a human marks the work a machine cannot.
 *
 * The course can mark 2,288 multiple-choice questions and tell a learner they
 * got 7 of 10. It cannot mark a paragraph or a conversation, and those are the
 * two things a school actually reports on. Without a rubric a teacher marking
 * thirty essays is marking thirty different exams, and a self-studier marking
 * their own is marking nothing at all — they have no way to be harder on
 * themselves than they feel like being that day.
 *
 * So this file holds the marking scheme. Four criteria per skill, four levels
 * each, written so that the difference between two adjacent levels is a thing
 * you can point at in the work rather than a feeling about it.
 *
 *
 * Why the levels are 0-3 and not percentages.
 *
 * A percentage invites arithmetic that the underlying judgment cannot support.
 * Nobody can tell 71% writing from 74% writing, and a scheme that asks them to
 * produces numbers that look precise and are noise. Four levels is about the
 * resolution a human can hold consistently across a stack of papers, and the
 * total out of 12 converts to a grade when a school needs one.
 *
 *   0  not yet      - the thing is absent or so unclear it cannot be judged
 *   1  approaching  - present, and gets in the reader's way
 *   2  meets        - does the job at this band. This is the target, not 3.
 *   3  exceeds      - does the job of the band above
 *
 * Level 2 being the target is deliberate and is stated in the interface. A
 * rubric where everyone chases the top box teaches learners to overreach, and
 * at A1 "exceeds" means writing A2, which is not what the week was for.
 *
 *
 * A note on language, because this repo has been bitten by it.
 *
 * Everywhere else in the course, an `en`/`es` pair is usually two *different*
 * things: the English text plans the Spanish class and the Spanish text plans
 * the English class. Rubrics are the exception. A criterion like "answers
 * every part of the task" is the same criterion whichever language is being
 * assessed, so here `en` and `es` genuinely are a translation pair, and that is
 * correct rather than a mistake. The band standards below carry the only
 * direction-sensitive content, and they are the same numbers either way: an
 * A2 writing task is 80 words of Spanish or 80 words of English.
 */
const RUBRIC_LEVELS = [
  { score: 0, id: "notYet", label: { en: "Not yet", es: "Todavía no" } },
  { score: 1, id: "approaching", label: { en: "Approaching", es: "Se acerca" } },
  { score: 2, id: "meets", label: { en: "Meets the band", es: "Cumple el nivel" } },
  { score: 3, id: "exceeds", label: { en: "Exceeds the band", es: "Supera el nivel" } }
];

const RUBRICS = {
  writing: {
    id: "writing",
    label: { en: "Writing", es: "Escritura" },
    lead: {
      en: "Mark the whole piece once against each row. Read it through before you score anything — a first sentence tells you less than you think.",
      es: "Califica el texto completo una vez por cada fila. Léelo entero antes de puntuar: la primera frase dice menos de lo que parece."
    },
    criteria: [
      {
        id: "task",
        label: { en: "Task", es: "Tarea" },
        question: {
          en: "Did they do what was asked, all of it?",
          es: "¿Hicieron lo que se pidió, todo?"
        },
        levels: {
          notYet: {
            en: "Answers something other than the question, or stops so early that most of the task is untouched.",
            es: "Responde a otra cosa distinta de lo que se pidió, o se detiene tan pronto que casi toda la tarea queda sin tocar."
          },
          approaching: {
            en: "Covers part of the task and leaves a required point out, or drifts off into something easier to write about.",
            es: "Cubre parte de la tarea y deja fuera un punto exigido, o se desvía hacia algo más fácil de escribir."
          },
          meets: {
            en: "Covers every required point, at roughly the length asked for, and a reader who did not see the prompt could tell what it was.",
            es: "Cubre todos los puntos exigidos, con más o menos la extensión pedida, y un lector que no vio la consigna sabría cuál era."
          },
          exceeds: {
            en: "Covers every point and develops one of them with a detail, a reason or an example that was not required.",
            es: "Cubre todos los puntos y desarrolla uno con un detalle, una razón o un ejemplo que no se exigía."
          }
        }
      },
      {
        id: "range",
        label: { en: "Range", es: "Recursos" },
        question: {
          en: "How much of the language did they reach for?",
          es: "¿Cuánta lengua se atrevieron a usar?"
        },
        levels: {
          notYet: {
            en: "A handful of memorized phrases, repeated. The same verb carries almost every sentence.",
            es: "Un puñado de frases memorizadas, repetidas. El mismo verbo sostiene casi todas las oraciones."
          },
          approaching: {
            en: "Safe throughout. Nothing is wrong because nothing was attempted beyond what was certain.",
            es: "Seguro de principio a fin. Nada está mal porque no se intentó nada más allá de lo seguro."
          },
          meets: {
            en: "Uses the structures and vocabulary this band teaches, including some met in the last few modules rather than only the oldest ones.",
            es: "Usa las estructuras y el vocabulario de este nivel, incluidos algunos de los últimos módulos y no solo los más antiguos."
          },
          exceeds: {
            en: "Reaches past the band and mostly lands it — a structure from the next level used because the meaning needed it, not to show off.",
            es: "Va más allá del nivel y casi siempre acierta: una estructura del nivel siguiente usada porque el sentido la pedía, no por lucirse."
          }
        }
      },
      {
        id: "accuracy",
        label: { en: "Accuracy", es: "Corrección" },
        question: {
          en: "Do the mistakes stop a reader?",
          es: "¿Los errores detienen al lector?"
        },
        levels: {
          notYet: {
            en: "A reader has to guess at the meaning, or reconstruct sentences to get through them.",
            es: "El lector tiene que adivinar el sentido o reconstruir las oraciones para poder avanzar."
          },
          approaching: {
            en: "Understandable, but errors in the basics of this band are frequent enough to slow a reader down.",
            es: "Se entiende, pero los errores en lo básico de este nivel son tan frecuentes que frenan al lector."
          },
          meets: {
            en: "Errors are there and do not obstruct. What this band has taught is mostly right; what it has not taught yet is not counted here.",
            es: "Hay errores y no estorban. Lo que este nivel ya enseñó está bien casi siempre; lo que aún no enseñó no se cuenta aquí."
          },
          exceeds: {
            en: "Controlled, including in the sentences where they took a risk. Slips are the kind a fluent speaker makes in a hurry.",
            es: "Controlado, incluso en las oraciones donde se arriesgaron. Los descuidos son los de alguien fluido con prisa."
          }
        }
      },
      {
        id: "shape",
        label: { en: "Shape", es: "Organización" },
        question: {
          en: "Does it hold together as a piece of writing?",
          es: "¿Se sostiene como texto?"
        },
        levels: {
          notYet: {
            en: "A list of sentences in no particular order. Moving any one of them would change nothing.",
            es: "Una lista de oraciones sin orden. Cambiar cualquiera de lugar no alteraría nada."
          },
          approaching: {
            en: "Sentences are joined, almost all with the same connector, and the order is the order things occurred to the writer.",
            es: "Las oraciones se unen, casi todas con el mismo conector, y el orden es el orden en que se le ocurrieron al que escribe."
          },
          meets: {
            en: "Has a beginning and an end that are doing different jobs, and the connectors vary with what they connect.",
            es: "Tiene un principio y un final que hacen cosas distintas, y los conectores varían según lo que unen."
          },
          exceeds: {
            en: "Paragraphed or sequenced on purpose, with the strongest point placed where it does the most work.",
            es: "Con párrafos o una secuencia deliberada, y el punto más fuerte colocado donde más rinde."
          }
        }
      }
    ]
  },

  speaking: {
    id: "speaking",
    label: { en: "Speaking", es: "Expresión oral" },
    lead: {
      en: "Mark from one unrehearsed exchange of the length below. Do not mark a performance the student has practiced at home — that measures preparation, not speaking.",
      es: "Califica a partir de un intercambio no ensayado de la duración indicada. No califiques una actuación practicada en casa: eso mide la preparación, no el habla."
    },
    criteria: [
      {
        id: "task",
        label: { en: "Task", es: "Tarea" },
        question: {
          en: "Did the exchange achieve what it was for?",
          es: "¿El intercambio logró aquello para lo que era?"
        },
        levels: {
          notYet: {
            en: "The other person does not end up with what they needed, and the conversation stops rather than finishes.",
            es: "La otra persona no termina con lo que necesitaba, y la conversación se corta en vez de terminar."
          },
          approaching: {
            en: "Gets there, but only because the partner did the work — supplying words, guessing, and asking again.",
            es: "Llega, pero porque el interlocutor hizo el trabajo: dando palabras, adivinando y volviendo a preguntar."
          },
          meets: {
            en: "Does the thing: the coffee is ordered, the appointment is made, the complaint is understood. Ends cleanly.",
            es: "Hace la cosa: se pide el café, se agenda la cita, se entiende el reclamo. Termina limpiamente."
          },
          exceeds: {
            en: "Does the thing and handles a turn that was not in the script — a counter-offer, a refusal, an unexpected question.",
            es: "Hace la cosa y maneja un turno que no estaba en el guion: una contraoferta, una negativa, una pregunta inesperada."
          }
        }
      },
      {
        id: "flow",
        label: { en: "Flow", es: "Fluidez" },
        question: {
          en: "Can a listener stay with them?",
          es: "¿Puede el que escucha seguirles el ritmo?"
        },
        levels: {
          notYet: {
            en: "Pauses long enough that the listener starts filling them in. Most sentences are abandoned partway.",
            es: "Pausas tan largas que quien escucha empieza a completarlas. Casi todas las oraciones quedan a medias."
          },
          approaching: {
            en: "Audible searching before most sentences, and the search usually ends in the first language.",
            es: "Se nota la búsqueda antes de casi cada oración, y la búsqueda suele terminar en la lengua materna."
          },
          meets: {
            en: "Keeps going at a pace the listener can follow. Hesitations fall between sentences rather than inside them.",
            es: "Mantiene un ritmo que el oyente puede seguir. Las dudas caen entre oraciones y no dentro de ellas."
          },
          exceeds: {
            en: "Repairs without stopping — rephrases around a missing word and carries on rather than handing the problem to the listener.",
            es: "Se corrige sin detenerse: rodea la palabra que falta y sigue, en vez de pasarle el problema a quien escucha."
          }
        }
      },
      {
        id: "sound",
        label: { en: "Sound", es: "Pronunciación" },
        question: {
          en: "Is it understood by somebody not being kind?",
          es: "¿Lo entendería alguien que no está siendo amable?"
        },
        levels: {
          notYet: {
            en: "Has to repeat most utterances, and repeating does not help because the repeat sounds the same.",
            es: "Tiene que repetir casi todo, y repetir no ayuda porque la repetición suena igual."
          },
          approaching: {
            en: "Understood by a listener used to learners, and probably not by a stranger in a noisy room.",
            es: "Lo entiende alguien acostumbrado a estudiantes, y probablemente no un desconocido en un lugar ruidoso."
          },
          meets: {
            en: "Understood first time by somebody who is not a teacher. An accent is not a deduction here; only being hard to follow is.",
            es: "Se entiende a la primera por alguien que no es profesor. El acento no resta aquí; solo resta costar trabajo seguirle."
          },
          exceeds: {
            en: "Stress and rhythm carry the meaning, so a question sounds like a question and emphasis lands where it was aimed.",
            es: "El acento y el ritmo llevan el sentido: una pregunta suena a pregunta y el énfasis cae donde se apuntaba."
          }
        }
      },
      {
        id: "exchange",
        label: { en: "Exchange", es: "Interacción" },
        question: {
          en: "Are they in a conversation or delivering a speech?",
          es: "¿Están en una conversación o dando un discurso?"
        },
        levels: {
          notYet: {
            en: "Says a prepared piece regardless of what the other person said, and does not respond to being interrupted.",
            es: "Dice lo que traía preparado sin importar lo que dijo el otro, y no reacciona si lo interrumpen."
          },
          approaching: {
            en: "Answers questions and asks none. The conversation lives or dies on the partner's effort.",
            es: "Responde preguntas y no hace ninguna. La conversación vive o muere por el esfuerzo del otro."
          },
          meets: {
            en: "Takes turns: answers, asks back, and signals when they have not understood instead of nodding through it.",
            es: "Toma turnos: responde, pregunta de vuelta y avisa cuando no entendió en vez de asentir y seguir."
          },
          exceeds: {
            en: "Shapes the exchange — changes the subject, comes back to something said earlier, or closes the conversation deliberately.",
            es: "Da forma al intercambio: cambia de tema, retoma algo dicho antes o cierra la conversación a propósito."
          }
        }
      }
    ]
  }
};

/*
 * What "meets the band" is measured against.
 *
 * The rubric rows are the same at every band; the standard they are applied to
 * is not. Without this table "accuracy: meets" is a Rorschach test, and two
 * teachers reading the same paragraph disagree by a whole level.
 *
 * There is deliberately no word count or writing time here. Those belong to
 * the writing task, they are published by the exam boards rather than chosen
 * by us, and they are *not* the same in both directions — DELE A1 asks for
 * 20-30 words where Cambridge A2 Key asks for 25 minimum. An earlier draft of
 * this file carried its own figures and they disagreed with the real ones
 * within a single afternoon, which is the whole argument for not restating
 * them. Read them from EXAM_TASKS[band][direction] instead; a test pins the
 * two files together so this comment cannot quietly become false.
 *
 * Speaking time is here because nothing else owns it: there is no speaking
 * task in the corpus, so this is the only place the length of an oral is
 * stated. It is the same in both directions, because unlike a word count it is
 * a measure of how long a learner can keep going rather than of how much a
 * particular language needs to say a thing.
 */
const RUBRIC_BANDS = {
  A1: {
    speaking: { minutes: 3 },
    standard: {
      en: "Short, separate sentences about the immediate and the concrete. Present tense, with a past or a future only as a set phrase. A reader supplies the joins.",
      es: "Oraciones cortas e independientes sobre lo inmediato y lo concreto. Presente, con pasado o futuro solo como frase hecha. El lector pone las uniones."
    }
  },
  A2: {
    speaking: { minutes: 4 },
    standard: {
      en: "Linked sentences about routine, plans and what happened. Past and future are used on purpose. A sequence a reader can follow without guessing the order.",
      es: "Oraciones enlazadas sobre la rutina, los planes y lo que pasó. El pasado y el futuro se usan a propósito. Una secuencia que se sigue sin adivinar el orden."
    }
  },
  B1: {
    speaking: { minutes: 6 },
    standard: {
      en: "A connected account or a reasoned opinion. Holds a position for a paragraph, gives a reason for it, and handles a hypothetical without collapsing into the present.",
      es: "Un relato conectado o una opinión razonada. Sostiene una postura durante un párrafo, la justifica y maneja una hipótesis sin caer en el presente."
    }
  },
  B2: {
    speaking: { minutes: 8 },
    standard: {
      en: "An argument with a shape: a position, a concession, and an answer to the objection. Register is chosen rather than defaulted to, and abstraction does not derail the grammar.",
      es: "Un argumento con forma: una postura, una concesión y una respuesta a la objeción. El registro se elige en vez de salir por defecto, y la abstracción no descarrila la gramática."
    }
  }
};

/*
 * How a 0-12 total is reported.
 *
 * Schools want a grade, and the honest conversion is coarse. This maps the
 * rubric total onto the same language the checkpoints use, so a report does
 * not switch vocabulary halfway down the page.
 */
const RUBRIC_GRADES = [
  { min: 11, id: "distinction", label: { en: "Distinction", es: "Sobresaliente" } },
  { min: 8, id: "pass", label: { en: "Pass", es: "Aprobado" } },
  { min: 5, id: "borderline", label: { en: "Borderline — reassess", es: "En el límite: reevaluar" } },
  { min: 0, id: "notYet", label: { en: "Not yet", es: "Todavía no" } }
];

if (typeof module === "object" && module.exports) {
  module.exports = { RUBRICS, RUBRIC_LEVELS, RUBRIC_BANDS, RUBRIC_GRADES };
}
