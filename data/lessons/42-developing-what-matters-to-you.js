/*
 * Lesson block: developing / what matters to you.
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
 *
 * This block now also adds the grammar structure subjunctive-volition, closing
 * the measured gap of 27 volition triggers followed by que with no stated rule.
 */
lessons.push(
  {
    id: "interesarse-por-un-curso-en-sincelejo",
    level: "Developing · What matters",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "interesar",
    review: "pending",
    es: {
      title: "Asking about a course in Sincelejo",
      situation:
        "You are in Sincelejo looking at a short audio-editing course at a cultural center. The subject interests you, but you do not know whether the schedule, the cost, and the final project really catch your attention.",
      setting: {
        who: "Marta coordinates short courses at a cultural center. Jamie records family stories and is considering an audio-editing course but needs to sound interested without promising enrollment too early.",
        what: "A desk conversation about what genuinely interests Jamie, what parts do not grab attention, and how the course subject becomes the grammatical subject.",
        when: "Early evening, just before the information session begins and people are still arriving from work.",
        where: "Sincelejo, in a modest cultural center with plastic chairs, a poster board and a fan turning above the registration table.",
        why: "Because interesar belongs to the gustar family: the thing interests the person. Spanish says the course interests me, not I interest the course."
      },
      address: {
        form: "usted",
        who: "Marta uses usted with a potential student at the desk, and Jamie uses usted back.",
        why: "The exchange is warm but institutional. Usted lets Jamie ask direct questions about cost and schedule without sounding overly familiar.",
        ifYouSwitch:
          "Tú would be possible if Marta invited it after the session began, but opening with it at the registration table would feel a little quick. Vos would not fit this setting."
      },
      dialogue: [
        {
          speaker: "Jamie",
          target: "Buenas, me interesa el curso de edición de audio.",
          translation: "Hi, I'm interested in the audio-editing course.",
          pronunciation: "BWEH-nas, meh een-teh-REH-sah el KOOR-soh deh eh-dee-SYON deh OW-dyoh",
          literal: "Greetings, to-me interests the course of editing of audio.",
          why: "The course is the subject, so the verb is interesa because el curso is singular. Jamie is the indirect object: me."
        },
        {
          speaker: "Marta",
          target: "Perfecto. ¿Le interesan más las entrevistas o la parte técnica?",
          translation: "Perfect. Are you more interested in the interviews or the technical part?",
          pronunciation: "per-FEK-toh. leh een-teh-REH-san mas las en-treh-BEES-tas o la PAR-teh TEK-nee-kah",
          literal: "Perfect. To-you interest more the interviews or the part technical?",
          why: "Now the subject is plural, las entrevistas, so the verb becomes interesan. This is the agreement English speakers often miss."
        },
        {
          speaker: "Jamie",
          target: "Me interesan las entrevistas, pero el software no me llama mucho la atención.",
          translation: "I'm interested in the interviews, but the software doesn't really grab me.",
          pronunciation: "meh een-teh-REH-san las en-treh-BEES-tas, PEH-roh el SOF-twer no meh YAH-ma MOO-choh la ah-ten-SYON",
          literal: "To-me interest the interviews, but the software does not call my attention much.",
          why: "No me llama la atención is a natural everyday way to say something does not interest you. It sounds less stiff than forcing no me interesa every time."
        },
        {
          speaker: "Marta",
          target: "Eso es normal; mucha gente se interesa por las historias primero.",
          translation: "That's normal; many people take an interest in the stories first.",
          pronunciation: "EH-soh es nor-MAL; MOO-cha HEN-teh seh een-teh-REH-sah por las ees-TOH-ryas pree-MEH-roh",
          literal: "That is normal; much people interests itself in the stories first.",
          why: "Interesarse por shifts the structure: the person becomes the subject and takes an active interest in something. It is related, but not the same pattern as me interesa."
        },
        {
          speaker: "Jamie",
          target: "También me interesa saber si el proyecto final cuenta para la hoja de vida.",
          translation: "I'm also interested in knowing whether the final project counts for a résumé.",
          pronunciation: "tam-BYEN meh een-teh-REH-sah sah-BER see el pro-YEK-toh fee-NAL KWEN-tah PAH-ra la OH-ha deh BEE-dah",
          literal: "Also to-me interests to-know if the project final counts for the sheet of life.",
          why: "Saber is an infinitive phrase, so the verb stays singular: me interesa saber. The whole idea of knowing is the subject."
        },
        {
          speaker: "Marta",
          target: "Claro. Si le interesan los certificados, también entregamos uno al final.",
          translation: "Of course. If certificates matter to you, we also give one at the end.",
          pronunciation: "KLAH-roh. see leh een-teh-REH-san los ser-tee-fee-KAH-dos, tam-BYEN en-treh-GAH-mos OO-noh al fee-NAL",
          literal: "Of course. If to-you interest the certificates, also we deliver one at the end.",
          why: "Los certificados is plural, so interesan returns. The person changes from me to le, but the agreement still follows the thing."
        }
      ],
      vocabulary: [
        {
          term: "interesar",
          explanation:
            "To interest someone, with the interesting thing as the subject and the person as an indirect object.",
          literal: "to interest",
          useWhen:
            "A course, topic, plan, offer or question genuinely catches someone's attention.",
          avoidWhen:
            "You make the person the subject as in English. Spanish normally says “me interesa el curso”, not “yo intereso el curso”.",
          register: "neutral",
          region: "General Spanish and ordinary in Colombian education, work and culture settings.",
          related: ["gustar", "importar", "llamar la atención", "interesarse"],
          example: { target: "Me interesa el curso.", translation: "I'm interested in the course." }
        },
        {
          term: "me interesa",
          explanation:
            "It interests me, or I'm interested in it. The verb is singular because the thing that interests you is singular.",
          literal: "to-me it-interests",
          useWhen:
            "The subject is one course, topic, job, idea or question.",
          avoidWhen:
            "The interesting things are plural. Then Spanish needs me interesan.",
          register: "neutral",
          region: "General Spanish.",
          related: ["me gusta", "me importa", "me llama la atención", "me sirve"],
          example: { target: "Me interesa el curso de audio.", translation: "I'm interested in the audio course." }
        },
        {
          term: "me interesan",
          explanation:
            "They interest me. The plural verb agrees with the plural things, not with the person.",
          literal: "to-me they-interest",
          useWhen:
            "The subject is plural: interviews, certificates, topics, dates or options.",
          avoidWhen:
            "You are tempted to keep interesa because the person is singular. The person is not the subject.",
          register: "neutral",
          region: "General Spanish.",
          related: ["me gustan", "me importan", "me faltan", "le interesan"],
          example: { target: "Me interesan las entrevistas.", translation: "I'm interested in the interviews." }
        },
        {
          term: "interesarse por",
          explanation:
            "To take an interest in something. Here the person is the subject, so the grammar is not backwards.",
          literal: "to interest oneself in",
          useWhen:
            "You want to describe someone's active curiosity or growing involvement in a topic.",
          avoidWhen:
            "You simply mean that a course or offer interests you. Then me interesa is cleaner.",
          register: "neutral",
          region: "General Spanish.",
          related: ["me interesa", "tener interés", "preguntar por", "meterse en"],
          example: { target: "Mucha gente se interesa por las historias.", translation: "Many people take an interest in the stories." }
        },
        {
          term: "no me llama la atención",
          explanation:
            "It doesn't grab my attention, a natural way to say something does not interest you.",
          literal: "it does not call my attention",
          useWhen:
            "You want to decline interest politely or mildly, without sounding hostile.",
          avoidWhen:
            "You need a strong rejection. This phrase is softer than saying you hate the topic.",
          register: "neutral conversational",
          region: "Very common in Colombia.",
          related: ["no me interesa", "me da igual", "no me convence", "no es lo mío"],
          example: { target: "El software no me llama la atención.", translation: "The software doesn't really interest me." }
        },
        {
          term: "la hoja de vida",
          explanation:
            "A résumé or CV, literally a life sheet.",
          literal: "the sheet of life",
          useWhen:
            "Talking about studies, certificates, jobs and experience that can support an application.",
          avoidWhen:
            "You mean a life story as narrative. Hoja de vida is the work or study document.",
          register: "neutral",
          region: "The ordinary Colombian term for a résumé or CV.",
          related: ["currículum", "experiencia", "certificado", "perfil"],
          example: { target: "Cuenta para la hoja de vida.", translation: "It counts for the résumé." }
        },
        {
          term: "el certificado",
          explanation:
            "A certificate, often the practical reason a course matters beyond personal interest.",
          literal: "the certificate",
          useWhen:
            "You need proof that you completed a course, workshop or training.",
          avoidWhen:
            "You only attended informally and no document will be issued.",
          register: "neutral",
          region: "General Spanish.",
          related: ["diploma", "constancia", "curso", "hoja de vida"],
          example: { target: "Me interesan los certificados.", translation: "I'm interested in the certificates." }
        }
      ],
      note:
        "Interesar is the simplest of these backwards verbs, so it is the best place to see the pattern clearly. The thing is the subject: el curso me interesa, las entrevistas me interesan. The person sits in me, te or le. When you switch to interesarse por, the person becomes the subject again: me intereso por las historias means I take an interest in them. For lack of interest, Colombians often say no me llama la atención, which is warmer and more conversational than repeating no me interesa.",
      culture: [
        {
          label: "Interest can be practical, not romantic",
          body:
            "Me interesa does not have to sound passionate. At a course desk, it can mean the topic is relevant, the certificate may help, or the schedule is worth checking. Colombian Spanish lets interest be practical without pretending it is a life-changing enthusiasm."
        },
        {
          label: "A polite no can be indirect",
          body:
            "No me llama la atención is useful because it softens refusal. It says the thing does not catch you, not that it is bad. In a small cultural center where people may know each other later, that difference keeps the conversation comfortable."
        },
        {
          label: "The grammar makes you listen for the thing",
          body:
            "With these verbs, the thing after the verb controls agreement. A learner who listens only for the person will say me interesa las entrevistas. Colombian listeners understand it, but the agreement mistake is very audible."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “me interesa las entrevistas”",
          whyItFails:
            "The interviews are the subject, and they are plural. The verb must agree with them, not with the singular person me.",
          sayInstead: "Me interesan las entrevistas."
        },
        {
          mistake: "Saying “yo intereso el curso”",
          whyItFails:
            "That makes you the subject and the course the object. In normal Spanish, the course interests you: the thing comes first grammatically.",
          sayInstead: "Me interesa el curso."
        },
        {
          mistake: "Using “me intereso por” as an exact replacement for “me interesa”",
          whyItFails:
            "Me intereso por means I take an active interest in something. Me interesa means the thing interests me. The grammar and emphasis are different.",
          sayInstead: "Me interesa el curso."
        }
      ],
      variations: [
        {
          form: "Me interesa el curso.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "One course, offer or topic catches your attention."
        },
        {
          form: "Me interesan los certificados.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "The things that interest you are plural, so the verb must be plural too."
        },
        {
          form: "Eso no me llama la atención.",
          register: "neutral conversational",
          region: "Very common in Colombia",
          whenToUse: "You want to say something does not interest you without sounding harsh."
        }
      ],
      prompt: "Jamie says “me interesa el curso” but “me interesan las entrevistas.” What controls the verb?",
      choices: [
        "The speaker's age and register.",
        "The thing that causes interest.",
        "The city where the course meets."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence agrees with a plural subject?",
          choices: [
            "Me interesa las entrevistas.",
            "Me intereso las entrevistas.",
            "Me interesan las entrevistas."
          ],
          answer: 2,
          tests: "plural agreement with the thing"
        },
        {
          prompt: "Which sentence says a single course interests you?",
          choices: [
            "Me interesa el curso.",
            "Me interesan el curso.",
            "Yo intereso el curso."
          ],
          answer: 0,
          tests: "singular agreement in me interesa"
        },
        {
          prompt: "Which phrase naturally says something does not grab you?",
          choices: [
            "No me falta la atención.",
            "No me llama la atención.",
            "No me importa la atención."
          ],
          answer: 1,
          tests: "no me llama la atención for lack of interest"
        },
        {
          prompt: "Which sentence uses the active reflexive structure?",
          choices: [
            "Me intereso por las historias.",
            "Me interesan por las historias.",
            "Me interesa por las historias."
          ],
          answer: 0,
          tests: "interesarse por with the person as subject"
        }
      ]
    },
    en: {
      title: "Interesarse por un curso en Austin",
      situation:
        "Usted está en Austin mirando un curso corto de edición de audio. Le interesa el tema, pero necesita explicar en inglés qué le interesa y qué no le llama la atención sin copiar la estructura española.",
      setting: {
        who: "Marta coordina cursos cortos en un centro comunitario. Jaime graba historias familiares y está pensando en tomar edición de audio, pero no quiere prometer matrícula demasiado pronto.",
        what: "Una conversación de información sobre qué le interesa de verdad a Jaime, qué no le llama la atención y cómo el inglés vuelve sujeto a la persona.",
        when: "Al comienzo de la noche, justo antes de la charla informativa, mientras la gente llega después del trabajo.",
        where: "Austin, en un centro comunitario con sillas plegables, afiches de cursos y una mesa de inscripción junto a la entrada.",
        why: "Porque el inglés no usa la estructura de me interesa como opción principal. Normalmente dice I'm interested in, con la persona como sujeto."
      },
      address: {
        form: "mixed",
        who: "Marta y Jaime usan you y nombres de pila; la cortesía vive en las preguntas completas y el tono.",
        why: "El inglés no tiene usted. En una mesa de inscripción, I'm interested in y could you tell me mantienen respeto sin cambiar el pronombre.",
        ifYouSwitch:
          "No hay un pronombre que cambiar. Si usted intenta compensar con sir o madam, la escena se vuelve más rígida de lo necesario para un centro comunitario."
      },
      dialogue: [
        {
          speaker: "Jaime",
          target: "Hi, I'm interested in the audio-editing course.",
          translation: "Buenas, me interesa el curso de edición de audio.",
          pronunciation: "jai, aim IN-tres-ted in di OW-di-ou EH-di-ting kors",
          literal: "Hola, estoy interesado en el curso de edición de audio.",
          why: "El inglés vuelve sujeto a la persona: I am interested. No diga the course interests me como primera opción en una mesa común, aunque sea gramatical."
        },
        {
          speaker: "Marta",
          target: "Great. Are you more interested in interviews or the technical part?",
          translation: "Perfecto. ¿Le interesan más las entrevistas o la parte técnica?",
          pronunciation: "greit. ar yu mor IN-tres-ted in IN-ter-viuz or da TEK-ni-kal part",
          literal: "Genial. ¿Está más interesado en entrevistas o en la parte técnica?",
          why: "More interested in mantiene la misma estructura aunque las entrevistas sean plural. El inglés no cambia el verbo por ese plural como hace interesan."
        },
        {
          speaker: "Jaime",
          target: "I'm interested in the interviews, but the software doesn't really grab me.",
          translation: "Me interesan las entrevistas, pero el software no me llama mucho la atención.",
          pronunciation: "aim IN-tres-ted in di IN-ter-viuz, bat da SOFT-wer DA-zent RI-li grab mi",
          literal: "Estoy interesado en las entrevistas, pero el software no me agarra mucho.",
          why: "Doesn't really grab me es una forma conversacional de decir que algo no le llama la atención. Es más natural que it does not call my attention."
        },
        {
          speaker: "Marta",
          target: "That's normal; many people take an interest in the stories first.",
          translation: "Eso es normal; mucha gente se interesa por las historias primero.",
          pronunciation: "dats NOR-mal; ME-ni PI-pol teik an IN-trest in da STO-riz ferst",
          literal: "Eso es normal; mucha gente toma un interés en las historias primero.",
          why: "Take an interest in se parece a interesarse por: la persona hace el movimiento activo hacia el tema."
        },
        {
          speaker: "Jaime",
          target: "I'm also interested in whether the final project helps my résumé.",
          translation: "También me interesa saber si el proyecto final sirve para mi hoja de vida.",
          pronunciation: "aim OL-sou IN-tres-ted in UE-der da FAI-nal PRO-yekt jelps mai RE-zu-mei",
          literal: "También estoy interesado en si el proyecto final ayuda mi hoja de vida.",
          why: "Interested in whether funciona para una pregunta indirecta. En inglés no hace falta poner to know después de interested."
        },
        {
          speaker: "Marta",
          target: "Of course. If certificates matter to you, we give one at the end.",
          translation: "Claro. Si le interesan los certificados, entregamos uno al final.",
          pronunciation: "ov kors. if ser-TI-fi-kets MA-ter tu yu, ui giv uan at di end",
          literal: "Por supuesto. Si los certificados le importan, damos uno al final.",
          why: "Matter to you traduce aquí la importancia práctica. El inglés alterna entre interest y matter donde el español puede seguir con interesar."
        }
      ],
      vocabulary: [
        {
          term: "be interested in",
          explanation:
            "La forma principal para decir que algo le interesa a usted. La persona es el sujeto.",
          literal: "estar interesado en",
          useWhen:
            "Un curso, tema, trabajo, plan u oferta capta su atención.",
          avoidWhen:
            "Traducir me interesa como the course interests me en cada caso. Es gramatical, pero menos normal en habla cotidiana.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["interest", "matter", "grab me", "take an interest"],
          example: { target: "I'm interested in the course.", translation: "Me interesa el curso." }
        },
        {
          term: "I'm interested in",
          explanation:
            "Me interesa o estoy interesado en. No cambia por el número de la cosa que interesa.",
          literal: "estoy interesado en",
          useWhen:
            "Usted habla de su propio interés en una cosa o varias cosas.",
          avoidWhen:
            "Olvidar in. I'm interested the course suena incompleto.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I'm curious about", "I care about", "I like", "I want to know"],
          example: { target: "I'm interested in the interviews.", translation: "Me interesan las entrevistas." }
        },
        {
          term: "more interested in",
          explanation:
            "Más interesado en. Sirve para comparar dos temas que podrían atraerle.",
          literal: "más interesado en",
          useWhen:
            "Quiere preguntar o decir cuál de dos partes le llama más la atención.",
          avoidWhen:
            "Comparar importancia moral. Ahí matter may be more natural.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["less interested in", "prefer", "rather", "care more about"],
          example: { target: "Are you more interested in interviews?", translation: "¿Le interesan más las entrevistas?" }
        },
        {
          term: "take an interest in",
          explanation:
            "Interesarse por algo, con la persona como sujeto activo.",
          literal: "tomar un interés en",
          useWhen:
            "Describe curiosidad activa o participación creciente en un tema.",
          avoidWhen:
            "Sólo está diciendo que algo le interesa de forma sencilla. I'm interested in es más común.",
          register: "neutro algo formal",
          region: "Inglés universal.",
          related: ["be interested in", "get into", "care about", "look into"],
          example: { target: "Many people take an interest in the stories.", translation: "Mucha gente se interesa por las historias." }
        },
        {
          term: "doesn't really grab me",
          explanation:
            "No me llama mucho la atención. Es conversacional y suave.",
          literal: "no me agarra realmente",
          useWhen:
            "Quiere decir que algo no le atrae sin insultarlo.",
          avoidWhen:
            "Una carta formal o una evaluación profesional. Ahí not relevant to me puede sonar mejor.",
          register: "amistoso conversacional",
          region: "Inglés universal.",
          related: ["doesn't interest me", "not my thing", "doesn't appeal to me", "not for me"],
          example: { target: "The software doesn't really grab me.", translation: "El software no me llama mucho la atención." }
        },
        {
          term: "résumé",
          explanation:
            "Hoja de vida. En Norteamérica se usa mucho résumé; CV aparece más en contextos académicos o internacionales.",
          literal: "resumen",
          useWhen:
            "Habla de trabajo, experiencia, cursos y certificados para una solicitud.",
          avoidWhen:
            "Quiere contar la historia de su vida. Résumé es el documento laboral.",
          register: "neutro",
          region: "Common in North American English.",
          related: ["CV", "experience", "certificate", "profile"],
          example: { target: "It helps my résumé.", translation: "Sirve para mi hoja de vida." }
        },
        {
          term: "certificates matter",
          explanation:
            "Los certificados importan. La frase cambia de interés a importancia práctica.",
          literal: "los certificados importan",
          useWhen:
            "El documento pesa para trabajo, estudio o una decisión concreta.",
          avoidWhen:
            "Sólo quiere decir que el tema le da curiosidad. Ahí interested in sigue siendo más directo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["matter to me", "count", "help", "be important"],
          example: { target: "Certificates matter to me.", translation: "Me interesan los certificados." }
        }
      ],
      note:
        "El inglés no usa una familia de verbos al estilo de gustar para interest en la conversación normal. La frase base es I'm interested in, con la persona como sujeto y sin acuerdo plural con lo que interesa. Para falta de interés, doesn't really grab me o doesn't appeal to me suenan mucho más naturales que una traducción literal de llamar la atención.",
      culture: [
        {
          label: "Interested no promete matrícula",
          body:
            "I'm interested in a course no significa que usted ya se inscribió. En una mesa de información, es una manera segura de abrir preguntas sobre costo, horario y utilidad sin comprometerse. Esa ambigüedad práctica se parece mucho a me interesa."
        },
        {
          label: "Grab me es conversacional",
          body:
            "The software doesn't really grab me suena honesto y suave. No insulta el curso; sólo dice que esa parte no lo atrae. En inglés cotidiano, este tipo de imagen física reemplaza muy bien no me llama la atención."
        },
        {
          label: "Résumé es norteamericano",
          body:
            "En Estados Unidos, résumé es la palabra normal para la hoja de vida laboral. CV existe, pero suele sonar académico, internacional o más formal. En un curso comunitario en Austin, résumé encaja perfectamente."
        }
      ],
      pitfalls: [
        {
          mistake: "“The course interests to me.”",
          whyItFails:
            "Es una mezcla de español e inglés. Si usa interest como verbo, no lleva to; pero la frase cotidiana es I'm interested in the course.",
          sayInstead: "I'm interested in the course."
        },
        {
          mistake: "“I'm interested the interviews.”",
          whyItFails:
            "Interested necesita in antes del tema. Sin in, la frase queda incompleta.",
          sayInstead: "I'm interested in the interviews."
        },
        {
          mistake: "“The software doesn't call my attention.”",
          whyItFails:
            "Es una traducción literal de no me llama la atención. Se entiende, pero no suena natural en inglés conversacional.",
          sayInstead: "The software doesn't really grab me."
        }
      ],
      variations: [
        {
          form: "I'm interested in the course.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un curso, oferta o tema le llama la atención."
        },
        {
          form: "The software doesn't really grab me.",
          register: "amistoso conversacional",
          region: "Inglés universal",
          whenToUse: "Quiere decir que algo no le interesa sin sonar brusco."
        },
        {
          form: "I'm interested in whether it helps my résumé.",
          register: "neutro práctico",
          region: "Inglés norteamericano",
          whenToUse: "La pregunta es práctica: si el curso sirve para trabajo o estudio."
        }
      ],
      prompt: "Jaime says “I'm interested in the course.” ¿Qué cambió frente a “me interesa el curso”?",
      choices: [
        "El inglés hace sujeto a la persona.",
        "El inglés exige plural con course.",
        "El inglés evita hablar del curso."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase suena natural para decir que le interesan las entrevistas?",
          choices: [
            "I'm interested the interviews.",
            "I'm interesting in the interviews.",
            "I'm interested in the interviews."
          ],
          answer: 2,
          tests: "interested in with the preposition"
        },
        {
          prompt: "¿Cuál frase traduce bien “no me llama la atención”?",
          choices: [
            "It doesn't really grab me.",
            "It doesn't call my attention.",
            "It doesn't take my attention."
          ],
          answer: 0,
          tests: "doesn't really grab me as natural English"
        },
        {
          prompt: "¿Cuál frase describe interés activo en un tema?",
          choices: [
            "She takes an interest in stories.",
            "She takes a matter in stories.",
            "She takes a missing in stories."
          ],
          answer: 0,
          tests: "take an interest in as interesarse por"
        },
        {
          prompt: "¿Cuál frase pregunta por utilidad práctica?",
          choices: [
            "Will it break my résumé?",
            "Will it help my résumé?",
            "Will it lack my résumé?"
          ],
          answer: 1,
          tests: "help my résumé for practical value"
        }
      ]
    }
  },
  {
    id: "pedir-permiso-sin-molestar-en-riohacha",
    level: "Developing · What matters",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "importar",
    review: "pending",
    es: {
      title: "Asking permission without being a bother in Riohacha",
      situation:
        "You are in Riohacha sharing a long table at a hostel. You want to move a chair, make space for your suitcase, and ask whether the others mind without answering in the opposite direction.",
      setting: {
        who: "Claudia is organizing breakfast space at a small guesthouse. Sam needs to shift a chair and a bag without making the shared table feel like his private office.",
        what: "A polite negotiation about whether a small action matters, how to say never mind, and how to answer do you mind without reversing the meaning.",
        when: "Morning, while people are eating slowly before the sun gets too hard outside.",
        where: "Riohacha, in a guesthouse courtyard with one long table, hammocks nearby and luggage tucked wherever it fits.",
        why: "Because importar is another backwards verb: the thing matters to the person. Its everyday permission forms are essential and easy to misunderstand."
      },
      address: {
        form: "tú",
        who: "Claudia and Sam are travelers of similar age at the same breakfast table, so they use tú after the first friendly exchange.",
        why: "Tú keeps the request light. The politeness comes from ¿te importa si...? and gracias, not from distance.",
        ifYouSwitch:
          "Usted would also be safe with an older guest or the owner, but among young travelers it would make the table feel more formal than it is. Vos would sound misplaced here."
      },
      dialogue: [
        {
          speaker: "Sam",
          target: "¿Te importa si muevo esta silla para sacar la maleta?",
          translation: "Do you mind if I move this chair to get my suitcase out?",
          pronunciation: "teh eem-POR-tah see MWEH-boh ES-tah SEE-yah PAH-rah sah-KAR la mah-LEH-tah",
          literal: "To-you matters if I-move this chair to take-out the suitcase?",
          why: "¿Te importa si...? is the natural permission shape. The action is the subject idea, and te marks the person who might mind."
        },
        {
          speaker: "Claudia",
          target: "No, no me importa. Muévela con confianza.",
          translation: "No, I don't mind. Move it, no problem.",
          pronunciation: "no, no meh eem-POR-tah. MWEH-beh-lah kon kon-FYAN-sah",
          literal: "No, to-me it-does-not-matter. Move-it with confidence.",
          why: "Answering no means no, it does not matter to me. This is where English speakers must resist answering yes when they mean permission."
        },
        {
          speaker: "Sam",
          target: "Gracias. Me importan los pasaportes; por eso no dejo la maleta lejos.",
          translation: "Thanks. The passports matter to me; that's why I don't leave the suitcase far away.",
          pronunciation: "GRAH-syas. meh eem-POR-tan los pah-sah-POR-tes; por EH-soh no DEH-hoh la mah-LEH-tah LEH-hos",
          literal: "Thanks. To-me matter the passports; for that not I-leave the suitcase far.",
          why: "Los pasaportes is plural, so the verb is importan. The person is still me, but the agreement follows the things that matter."
        },
        {
          speaker: "Claudia",
          target: "Claro, eso sí importa; la silla, en cambio, no importa.",
          translation: "Of course, that does matter; the chair, on the other hand, doesn't matter.",
          pronunciation: "KLAH-roh, EH-soh see eem-POR-tah; la SEE-yah, en KAM-byoh, no eem-POR-tah",
          literal: "Of course, that yes matters; the chair, in change, does not matter.",
          why: "No importa is one of the most useful phrases in Spanish: never mind, it doesn't matter, don't worry about it. Importa stays singular with eso and la silla."
        },
        {
          speaker: "Sam",
          target: "¿Y te importa que deje el cargador aquí mientras desayuno?",
          translation: "And do you mind if I leave the charger here while I eat breakfast?",
          pronunciation: "ee teh eem-POR-tah keh DEH-heh el kar-gah-DOR ah-KEE MYEN-tras deh-sah-YOO-noh",
          literal: "And to-you matters that I-leave the charger here while I-breakfast?",
          why: "¿Te importa que...? takes a full clause after que. It is excellent for asking permission without sounding demanding."
        },
        {
          speaker: "Claudia",
          target: "No, de verdad no me importa; si estorba, te aviso.",
          translation: "No, really, I don't mind; if it's in the way, I'll let you know.",
          pronunciation: "no, deh ber-DAD no meh eem-POR-tah; see es-TOR-bah, teh ah-BEE-soh",
          literal: "No, of truth to-me it-does-not-matter; if it-gets-in-the-way, you I-inform.",
          why: "The repeated no me importa confirms permission. If Claudia said sí, she would be saying yes, I do mind, which is the opposite social move."
        }
      ],
      vocabulary: [
        {
          term: "importar",
          explanation:
            "To matter to someone. Like gustar, the thing is the subject and the person is an indirect object.",
          literal: "to matter",
          useWhen:
            "Something has importance, weight or inconvenience for someone.",
          avoidWhen:
            "You make the person the subject as in English. Spanish normally says “me importa eso”, not “yo importo eso”.",
          register: "neutral",
          region: "General Spanish and central to Colombian politeness.",
          related: ["interesar", "faltar", "valer", "preocupar"],
          example: { target: "Me importan los pasaportes.", translation: "The passports matter to me." }
        },
        {
          term: "no importa",
          explanation:
            "It doesn't matter, never mind or no problem, depending on the moment.",
          literal: "it does not matter",
          useWhen:
            "You want to release a worry, forgive a small issue or say the detail is not important.",
          avoidWhen:
            "Something genuinely does matter. Using no importa too quickly can sound dismissive.",
          register: "neutral conversational",
          region: "Extremely common in Colombia and everywhere in Spanish.",
          related: ["tranquilo", "no hay problema", "da igual", "no pasa nada"],
          example: { target: "La silla no importa.", translation: "The chair doesn't matter." }
        },
        {
          term: "¿te importa si...?",
          explanation:
            "Do you mind if...? A polite way to ask whether your action would bother someone.",
          literal: "to-you matters if...?",
          useWhen:
            "You want permission for a small action: moving a chair, opening a window, leaving a bag.",
          avoidWhen:
            "You are asking an older stranger or a formal contact. Then ¿le importa si...? is safer.",
          register: "friendly polite",
          region: "General Spanish.",
          related: ["¿le importa si...?", "¿puedo...?", "¿te molesta si...?", "con permiso"],
          example: { target: "¿Te importa si muevo esta silla?", translation: "Do you mind if I move this chair?" }
        },
        {
          term: "¿te importa que...?",
          explanation:
            "Do you mind that or if...? It introduces a full clause with que.",
          literal: "to-you matters that...?",
          useWhen:
            "The request has its own subject and verb: that I leave, that we sit, that someone waits.",
          avoidWhen:
            "The request is just an infinitive after poder. Then ¿puedo...? may be simpler.",
          register: "friendly polite",
          region: "General Spanish.",
          related: ["¿le importa que...?", "¿te molesta que...?", "¿está bien si...?", "¿puedo dejar...?"],
          example: { target: "¿Te importa que deje el cargador aquí?", translation: "Do you mind if I leave the charger here?" }
        },
        {
          term: "sí me importa",
          explanation:
            "Yes, I do mind or yes, it matters to me. The yes confirms the caring or objection.",
          literal: "yes to-me it-matters",
          useWhen:
            "You need to say the issue actually matters and permission is not automatic.",
          avoidWhen:
            "You mean no problem. To give permission, answer no, no me importa.",
          register: "neutral direct",
          region: "General Spanish.",
          related: ["no me importa", "me molesta", "sí me afecta", "prefiero que no"],
          example: { target: "Sí me importa que dejen eso ahí.", translation: "I do mind if they leave that there." }
        },
        {
          term: "me importan",
          explanation:
            "They matter to me. The verb is plural because the things that matter are plural.",
          literal: "to-me they-matter",
          useWhen:
            "Friends, documents, details, dates or rules are plural and matter to someone.",
          avoidWhen:
            "The thing is singular. Then use me importa.",
          register: "neutral",
          region: "General Spanish.",
          related: ["me interesa", "me interesan", "me faltan", "me preocupan"],
          example: { target: "Me importan los pasaportes.", translation: "The passports matter to me." }
        },
        {
          term: "con confianza",
          explanation:
            "Go ahead, feel free, with trust. A warm permission phrase.",
          literal: "with confidence",
          useWhen:
            "You want someone to act without feeling awkward about a small favor or movement.",
          avoidWhen:
            "The situation needs firm limits. Con confianza can invite more liberty than you meant.",
          register: "friendly informal",
          region: "Very common in Colombia.",
          related: ["dale", "sin pena", "tranquilo", "adelante"],
          example: { target: "Muévela con confianza.", translation: "Move it, no problem." }
        }
      ],
      note:
        "Importar follows the same backwards agreement as interesar: me importa la silla, me importan los pasaportes. But its social value is bigger. No importa is daily survival Spanish, and ¿te importa si...? or ¿le importa que...? is one of the cleanest ways to ask permission. The dangerous part is the answer: if someone asks ¿te importa?, no gives permission, while sí means yes, I do mind.",
      culture: [
        {
          label: "Permission can be indirect and still clear",
          body:
            "Colombian politeness often avoids a bare puedo when the action affects someone else's space. ¿Te importa si muevo esta silla? asks about the other person's comfort first. It is not weak; it is a way to keep shared space from becoming a small fight."
        },
        {
          label: "No importa is generous, but not infinite",
          body:
            "No importa can forgive a bump, a delay or a chair in the way. It should not erase a real problem. If something matters, Colombians can say sí me importa or prefiero que no, usually with a reason to keep the refusal from sounding abrupt."
        },
        {
          label: "Shared tables need small grammar",
          body:
            "In a guesthouse, nobody owns the whole table. Tiny permission phrases do real work: moving a chair, charging a phone, keeping a passport bag nearby. This is where backwards verbs stop being textbook grammar and become social tools."
        }
      ],
      pitfalls: [
        {
          mistake: "Answering “sí” to mean “sure, go ahead”",
          whyItFails:
            "After ¿te importa?, sí means yes, it matters or yes, I do mind. To give permission, answer no, no me importa.",
          sayInstead: "No, no me importa."
        },
        {
          mistake: "Saying “me importa los pasaportes”",
          whyItFails:
            "Los pasaportes is plural and controls the verb. The person me does not make the verb singular.",
          sayInstead: "Me importan los pasaportes."
        },
        {
          mistake: "Using “¿puedo?” when the real issue is whether it bothers someone",
          whyItFails:
            "¿Puedo? asks if you are allowed. ¿Te importa si...? asks whether your action inconveniences the other person, which is often more polite.",
          sayInstead: "¿Te importa si muevo esta silla?"
        }
      ],
      variations: [
        {
          form: "No importa, déjalo ahí.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "A small detail really does not matter and you want to release the worry."
        },
        {
          form: "¿Le importa si me siento aquí?",
          register: "polite",
          region: "General Spanish",
          whenToUse: "You are asking permission from a stranger or older person."
        },
        {
          form: "Sí me importa; prefiero que no.",
          register: "polite direct",
          region: "General Spanish",
          whenToUse: "You do mind and need to refuse without sounding aggressive."
        }
      ],
      prompt: "If someone asks “¿te importa si muevo esta silla?”, what does “sí” mean?",
      choices: [
        "Yes, I do mind.",
        "Yes, move it freely.",
        "Yes, I moved it."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which answer gives permission after “¿te importa?”",
          choices: [
            "Sí, me importa.",
            "No, no me importa.",
            "Sí, prefiero que no."
          ],
          answer: 1,
          tests: "no as permission after do you mind"
        },
        {
          prompt: "Which sentence agrees with a plural subject?",
          choices: [
            "Me importa los documentos.",
            "Me importan los documentos.",
            "Yo importo los documentos."
          ],
          answer: 1,
          tests: "plural agreement in me importan"
        },
        {
          prompt: "Which phrase politely asks if an action bothers someone?",
          choices: [
            "¿Te falta si muevo esto?",
            "¿Te interesa si muevo esto?",
            "¿Te importa si muevo esto?"
          ],
          answer: 2,
          tests: "¿te importa si...? as do you mind if"
        },
        {
          prompt: "Which phrase means never mind or it doesn't matter?",
          choices: [
            "No importa, tranquilo.",
            "No interesa, tranquilo.",
            "No falta, tranquilo."
          ],
          answer: 0,
          tests: "no importa as everyday never mind"
        }
      ]
    },
    en: {
      title: "Pedir permiso sin molestar en Londres",
      situation:
        "Usted está en Londres compartiendo una mesa larga en un hostal. Quiere mover una silla, dejar un cargador y preguntar en inglés si a la otra persona le importa sin contestar al revés.",
      setting: {
        who: "Claudia organiza espacio durante el desayuno de un hostal. Sam necesita mover una silla y una maleta sin convertir la mesa compartida en su escritorio privado.",
        what: "Una negociación pequeña sobre si una acción molesta, cómo decir no importa y cómo responder a do you mind sin invertir el sentido.",
        when: "Por la mañana, mientras la gente desayuna lento antes de salir a la ciudad.",
        where: "Londres, en el comedor de un hostal con una mesa comunal, maletas debajo de las sillas y cargadores buscando enchufes.",
        why: "Porque do you mind funciona al revés de lo que muchos hispanohablantes esperan: yes puede ser objeción y no puede dar permiso."
      },
      address: {
        form: "mixed",
        who: "Claudia y Sam usan you; la cortesía está en do you mind, is it okay if y thanks.",
        why: "El inglés no cambia el pronombre. Para no sonar brusco en una mesa compartida, usted escoge una pregunta cuidadosa.",
        ifYouSwitch:
          "No hay usted inglés. Si agrega sir o madam, la escena suena más a hotel formal que a hostal de viajeros."
      },
      dialogue: [
        {
          speaker: "Sam",
          target: "Do you mind if I move this chair to get my suitcase out?",
          translation: "¿Te importa si muevo esta silla para sacar la maleta?",
          pronunciation: "du yu maind if ai muv dis cher tu get mai SUT-keis aut",
          literal: "¿Le importa si muevo esta silla para sacar mi maleta?",
          why: "Do you mind if...? pregunta si la acción molesta. No es lo mismo que can I, porque pone primero la comodidad de la otra persona."
        },
        {
          speaker: "Claudia",
          target: "No, I don't mind. Go ahead and move it.",
          translation: "No, no me importa. Muévela con confianza.",
          pronunciation: "nou, ai dont maind. gou a-JED and muv it",
          literal: "No, no me molesta. Siga y muévala.",
          why: "No, I don't mind da permiso. Esta respuesta negativa confunde porque en español también hay que contestar no si no le importa."
        },
        {
          speaker: "Sam",
          target: "Thanks. My passports matter to me, so I keep the suitcase close.",
          translation: "Gracias. Me importan los pasaportes, por eso dejo la maleta cerca.",
          pronunciation: "thanks. mai PAS-ports MA-ter tu mi, sou ai kip da SUT-keis klous",
          literal: "Gracias. Mis pasaportes importan para mí, entonces mantengo la maleta cerca.",
          why: "Matter to me expresa importancia práctica. El inglés hace sujeto a passports, pero no usa el pronombre indirecto de me importan."
        },
        {
          speaker: "Claudia",
          target: "Of course, that matters; the chair doesn't matter.",
          translation: "Claro, eso sí importa; la silla no importa.",
          pronunciation: "ov kors, dat MA-terz; da cher DA-zent MA-ter",
          literal: "Por supuesto, eso importa; la silla no importa.",
          why: "Doesn't matter es no importa. Es una de las frases más útiles para quitarle peso a un detalle pequeño."
        },
        {
          speaker: "Sam",
          target: "Do you mind if I leave my charger here while I eat?",
          translation: "¿Te importa que deje el cargador aquí mientras desayuno?",
          pronunciation: "du yu maind if ai liv mai CHAR-yer jir wail ai it",
          literal: "¿Le importa si dejo mi cargador aquí mientras como?",
          why: "El inglés repite do you mind if para una acción con sujeto y verbo. No necesita una estructura distinta con that en esta conversación."
        },
        {
          speaker: "Claudia",
          target: "No, not at all; if it's in the way, I'll tell you.",
          translation: "No, de verdad no me importa; si estorba, te aviso.",
          pronunciation: "nou, not at ol; if its in da wei, ail tel yu",
          literal: "No, para nada; si está en el camino, le diré.",
          why: "Not at all refuerza que no hay molestia. Si Claudia dijera yes, I do, estaría diciendo que sí le molesta."
        }
      ],
      vocabulary: [
        {
          term: "matter",
          explanation:
            "Importar o tener importancia. La cosa es el sujeto en inglés: passports matter to me.",
          literal: "importar",
          useWhen:
            "Algo pesa en una decisión, una emoción o una molestia práctica.",
          avoidWhen:
            "Quiere pedir permiso con cortesía. Para eso do you mind if...? suele ser la forma viva.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["mind", "care", "be important", "count"],
          example: { target: "My passports matter to me.", translation: "Me importan los pasaportes." }
        },
        {
          term: "it doesn't matter",
          explanation:
            "No importa. Sirve para decir que un detalle no pesa.",
          literal: "eso no importa",
          useWhen:
            "Quiere tranquilizar a alguien por una demora, error pequeño o cambio sin importancia.",
          avoidWhen:
            "El asunto sí importa. Entonces la frase puede sonar como si estuviera minimizando a la otra persona.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["never mind", "no problem", "that's okay", "it's fine"],
          example: { target: "The chair doesn't matter.", translation: "La silla no importa." }
        },
        {
          term: "Do you mind if...?",
          explanation:
            "¿Le importa si...? o ¿te importa si...? Pregunta si una acción molesta.",
          literal: "¿le molesta si...?",
          useWhen:
            "Quiere mover algo, sentarse, abrir una ventana o dejar un objeto en espacio compartido.",
          avoidWhen:
            "Va a responder yes para dar permiso. Yes, I do significa que sí le molesta.",
          register: "cortés conversacional",
          region: "Inglés universal.",
          related: ["Is it okay if...?", "Would you mind if...?", "Can I...?", "go ahead"],
          example: { target: "Do you mind if I move this chair?", translation: "¿Te importa si muevo esta silla?" }
        },
        {
          term: "I don't mind",
          explanation:
            "No me importa o no me molesta. Da permiso o indica que no hay problema.",
          literal: "no me molesta",
          useWhen:
            "Alguien pregunta si una acción le molesta y usted quiere permitirla.",
          avoidWhen:
            "Sí le molesta. Entonces diga I do mind o I'd rather you didn't.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["not at all", "go ahead", "that's fine", "no problem"],
          example: { target: "No, I don't mind.", translation: "No, no me importa." }
        },
        {
          term: "Yes, I do mind",
          explanation:
            "Sí me importa o sí me molesta. Es una objeción, no permiso.",
          literal: "sí me molesta",
          useWhen:
            "Necesita decir que la acción propuesta sí le incomoda.",
          avoidWhen:
            "Quiere decir hágale. Entonces diga no, I don't mind o go ahead.",
          register: "directo",
          region: "Inglés universal.",
          related: ["I'd rather you didn't", "please don't", "that bothers me", "I care"],
          example: { target: "Yes, I do mind.", translation: "Sí me importa." }
        },
        {
          term: "matter to me",
          explanation:
            "Me importa o me importan. El inglés usa to me para marcar a la persona.",
          literal: "importar a mí",
          useWhen:
            "Quiere decir que algo tiene peso personal o práctico para usted.",
          avoidWhen:
            "Está hablando de gusto o curiosidad. Interested in puede ser más preciso.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["important to me", "care about", "count for me", "mean a lot"],
          example: { target: "Those documents matter to me.", translation: "Me importan esos documentos." }
        },
        {
          term: "go ahead",
          explanation:
            "Adelante, hágale o con confianza. Da permiso para actuar.",
          literal: "siga adelante",
          useWhen:
            "Quiere autorizar una acción pequeña sin una explicación larga.",
          avoidWhen:
            "Quiere poner límites. Go ahead abre la puerta a que la persona actúe.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["feel free", "sure", "that's fine", "no problem"],
          example: { target: "Go ahead and move it.", translation: "Muévala con confianza." }
        }
      ],
      note:
        "Do you mind es una trampa social porque la respuesta lógica para un hispanohablante puede salir invertida. Si no le molesta, diga no, I don't mind o not at all. Si dice yes, I do, está diciendo que sí le molesta. Para importar como valor personal, matter to me es claro: my friends matter to me, those documents matter to me.",
      culture: [
        {
          label: "Mind pregunta por molestia",
          body:
            "Do you mind if I move this chair? no pregunta sólo por permiso legal. Pregunta si la acción incomoda. Por eso funciona tan bien en espacios compartidos: mesa de hostal, tren, oficina, sala de espera."
        },
        {
          label: "No es la respuesta amable",
          body:
            "En esta estructura, no puede ser la respuesta que abre la puerta. No, I don't mind equivale a claro, hágale. A muchos hispanohablantes les cuesta porque están respondiendo a la intención social, no a la gramática de mind."
        },
        {
          label: "Doesn't matter puede sonar frío",
          body:
            "It doesn't matter es útil, pero dicho seco puede minimizar el problema de otro. That's okay o no problem a veces suenan más cálidos. Como con no importa, la entonación decide si usted tranquiliza o despacha."
        }
      ],
      pitfalls: [
        {
          mistake: "“Yes, I don't mind.”",
          whyItFails:
            "Mezcla una respuesta afirmativa con una negación. Después de do you mind, la forma clara para permitir es no, I don't mind.",
          sayInstead: "No, I don't mind."
        },
        {
          mistake: "“Do you import if I move this?”",
          whyItFails:
            "Importar no se traduce como import en este sentido. Para molestia o permiso, el verbo inglés es mind.",
          sayInstead: "Do you mind if I move this?"
        },
        {
          mistake: "“The passports import me.”",
          whyItFails:
            "Import en inglés es traer productos de otro país. Para importancia personal, diga matter to me.",
          sayInstead: "The passports matter to me."
        }
      ],
      variations: [
        {
          form: "It doesn't matter; leave it there.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Un detalle pequeño no importa y quiere tranquilizar a alguien."
        },
        {
          form: "Do you mind if I sit here?",
          register: "cortés conversacional",
          region: "Inglés universal",
          whenToUse: "Pide permiso para ocupar espacio cerca de otra persona."
        },
        {
          form: "Yes, I do mind; please don't.",
          register: "directo cortés",
          region: "Inglés universal",
          whenToUse: "Sí le molesta y necesita decir que no claramente."
        }
      ],
      prompt: "If someone asks “Do you mind if I move this chair?”, what does “yes” mean?",
      choices: [
        "Yes, I moved it.",
        "Yes, I do mind.",
        "Yes, go ahead."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál respuesta da permiso después de “Do you mind?”",
          choices: [
            "Yes, I do mind.",
            "No, I don't mind.",
            "Yes, please don't."
          ],
          answer: 1,
          tests: "no como permiso después de do you mind"
        },
        {
          prompt: "¿Cuál frase expresa importancia personal?",
          choices: [
            "The documents import me.",
            "The documents lack me.",
            "The documents matter to me."
          ],
          answer: 2,
          tests: "matter to me for importar"
        },
        {
          prompt: "¿Cuál frase pregunta si una acción molesta?",
          choices: [
            "Do you miss if I move this?",
            "Do you interest if I move this?",
            "Do you mind if I move this?"
          ],
          answer: 2,
          tests: "do you mind if as ¿le importa si"
        },
        {
          prompt: "¿Cuál frase significa no importa?",
          choices: [
            "It doesn't matter.",
            "It doesn't missing.",
            "It doesn't interest."
          ],
          answer: 0,
          tests: "it doesn't matter as no importa"
        }
      ]
    }
  },
  {
    id: "faltar-cinco-minutos-en-florencia",
    level: "Developing · What matters",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "faltar",
    review: "pending",
    es: {
      title: "Five minutes short in Florencia",
      situation:
        "You are in Florencia waiting for a tourist boat on the river. The group is missing signatures, one person is missing, and there are five minutes left before departure, so you need to talk about what still is not ready.",
      setting: {
        who: "Yuri coordinates a small river outing. Dana is helping check the group list and needs to report what is missing without turning every sentence into I need.",
        what: "A pre-departure check: missing signatures, one absent passenger, two life jackets still needed and five minutes left before departure.",
        when: "A humid morning, just before the group is supposed to walk down to the river.",
        where: "Florencia, Caquetá, at a tour office with clipboards, life jackets and rain ponchos piled near the door.",
        why: "Because faltar says what is missing, still needed or left to go. Like gustar, the missing thing controls the verb: falta una firma, faltan dos chalecos."
      },
      address: {
        form: "tú",
        who: "Yuri and Dana are working side by side as peers, so they use tú while checking the list quickly.",
        why: "The register is practical and cooperative. Tú keeps the pace moving without turning the checklist into a formal inspection.",
        ifYouSwitch:
          "Usted would work with a client or older organizer, but here it would slow the peer-to-peer rhythm. Vos would not be the safest choice for a neutral Florencia scene."
      },
      dialogue: [
        {
          speaker: "Yuri",
          target: "¿Cómo va la lista? Nos falta una firma y faltan dos chalecos.",
          translation: "How's the list going? We're missing one signature and two life jackets.",
          pronunciation: "KOH-moh bah la LEES-tah. nos FAL-tah OO-nah FEER-mah ee FAL-tan dos chah-LEH-kos",
          literal: "How goes the list? To-us lacks one signature and lack two vests.",
          why: "The agreement follows what is missing: una firma is singular, dos chalecos is plural. Nos marks who is short of them."
        },
        {
          speaker: "Dana",
          target: "También falta Camilo; dijo que llegaba temprano, pero no aparece.",
          translation: "Camilo is missing too; he said he would arrive early, but he hasn't shown up.",
          pronunciation: "tam-BYEN FAL-tah kah-MEE-loh; DEE-hoh keh yeh-GAH-bah tem-PRAH-noh, PEH-roh no ah-PAH-reh-seh",
          literal: "Also lacks Camilo; he-said that he-arrived early, but he does-not appear.",
          why: "Falta Camilo means Camilo is missing or not here yet. Spanish does not need he is missing from the group as a long phrase."
        },
        {
          speaker: "Yuri",
          target: "Bueno, faltan cinco minutos; si no llega, salimos sin él.",
          translation: "Well, five minutes to go; if he doesn't arrive, we leave without him.",
          pronunciation: "BWEH-noh, FAL-tan SEEN-koh mee-NOO-tos; see no YEH-gah, sah-LEE-mos seen el",
          literal: "Well, lack five minutes; if not he-arrives, we-leave without him.",
          why: "Faltan cinco minutos is the normal countdown structure: five minutes are missing until the event. The plural verb follows minutos."
        },
        {
          speaker: "Dana",
          target: "A mí me falta revisar los permisos de los niños.",
          translation: "I still need to check the children's permission forms.",
          pronunciation: "ah mee meh FAL-tah rreh-bee-SAR los per-MEE-sos deh los NEE-nyos",
          literal: "To me to-me lacks to-check the permissions of the children.",
          why: "Me falta revisar uses a singular infinitive idea: checking is still missing from Dana's tasks. This is more natural than translating I lack directly."
        },
        {
          speaker: "Yuri",
          target: "Hace falta que todos firmen antes de bajar al muelle.",
          translation: "Everyone needs to sign before we go down to the dock.",
          pronunciation: "AH-seh FAL-tah keh TOH-dos FEER-men AN-tes deh bah-HAR al MWEH-yeh",
          literal: "It-makes lack that all sign before going-down to-the dock.",
          why: "Hace falta means it is needed. It is impersonal and useful when the need matters more than who feels it."
        },
        {
          speaker: "Dana",
          target: "Listo. Si me presta un lapicero, no falta más.",
          translation: "Done. If you lend me a pen, that's all we need.",
          pronunciation: "LEES-toh. see meh PRES-tah oon lah-pee-SEH-roh, no FAL-tah mas",
          literal: "Ready. If to-me you-lend a pen, not lacks more.",
          why: "No falta más means nothing else is missing. It also echoes the Colombian courtesy phrase ¡no faltaba más!, meaning not at all or of course."
        }
      ],
      vocabulary: [
        {
          term: "faltar",
          explanation:
            "To be missing, be still needed, be absent or be left to go, with the missing thing as the subject.",
          literal: "to lack / be missing",
          useWhen:
            "A signature, person, document, minute, ingredient or step is not there yet.",
          avoidWhen:
            "You translate I need word for word. Often Spanish prefers me falta over yo necesito when tracking what is still missing.",
          register: "neutral",
          region: "General Spanish and very common in Colombian practical talk.",
          related: ["necesitar", "hacer falta", "quedar", "sobrar"],
          example: { target: "Nos falta una firma.", translation: "We're missing one signature." }
        },
        {
          term: "me falta",
          explanation:
            "I am missing, I still need, or I am short of one thing or one action.",
          literal: "to-me lacks",
          useWhen:
            "One item or one infinitive task is still not complete: me falta una firma, me falta revisar.",
          avoidWhen:
            "Several things are missing. Then use me faltan.",
          register: "neutral",
          region: "General Spanish.",
          related: ["me faltan", "necesito", "me queda", "tengo pendiente"],
          example: { target: "Me falta revisar los permisos.", translation: "I still need to check the permission forms." }
        },
        {
          term: "me faltan",
          explanation:
            "I am missing or still need several things. The verb is plural because the missing things are plural.",
          literal: "to-me they-lack",
          useWhen:
            "Two signatures, five minutes, three people or several documents are missing.",
          avoidWhen:
            "Only one thing is missing. Then use me falta.",
          register: "neutral",
          region: "General Spanish.",
          related: ["me falta", "nos faltan", "faltan", "quedan"],
          example: { target: "Me faltan dos chalecos.", translation: "I'm missing two life jackets." }
        },
        {
          term: "hace falta",
          explanation:
            "It is needed or missing. An impersonal way to state a need.",
          literal: "it makes lack",
          useWhen:
            "You want to say a step, object or condition is necessary without centering one person.",
          avoidWhen:
            "You are simply counting how many items are left. Then faltan dos may be sharper.",
          register: "neutral",
          region: "General Spanish.",
          related: ["se necesita", "toca", "hay que", "es necesario"],
          example: { target: "Hace falta que todos firmen.", translation: "Everyone needs to sign." }
        },
        {
          term: "faltan cinco minutos",
          explanation:
            "Five minutes to go. The minutes are the subject, so the verb is plural.",
          literal: "five minutes are missing",
          useWhen:
            "Counting down to a departure, meeting, closing time or appointment.",
          avoidWhen:
            "You mean you personally lost five minutes. This phrase is about time remaining.",
          register: "neutral",
          region: "General Spanish.",
          related: ["quedan cinco minutos", "en cinco minutos", "ya casi", "a tiempo"],
          example: { target: "Faltan cinco minutos para salir.", translation: "Five minutes to go before leaving." }
        },
        {
          term: "faltar al trabajo",
          explanation:
            "To miss work or be absent from work.",
          literal: "to be absent to work",
          useWhen:
            "Someone did not attend work, school, class or an appointment.",
          avoidWhen:
            "You mean something is missing from your work bag. That is a different faltar structure.",
          register: "neutral",
          region: "General Spanish.",
          related: ["ausentarse", "no asistir", "faltar a clase", "llegar tarde"],
          example: { target: "Camilo faltó al trabajo ayer.", translation: "Camilo missed work yesterday." }
        },
        {
          term: "¡no faltaba más!",
          explanation:
            "Not at all, of course, don't mention it. A Colombian courtesy phrase that sounds stronger than its literal meaning.",
          literal: "nothing more was missing",
          useWhen:
            "Responding warmly to thanks or accepting a small request as obvious courtesy.",
          avoidWhen:
            "You mean literally that nothing is missing. Then no falta nada or no falta más is clearer.",
          register: "polite warm",
          region: "Very Colombian and widely understood.",
          related: ["con gusto", "claro", "por supuesto", "a la orden"],
          example: { target: "¡No faltaba más, con mucho gusto!", translation: "Not at all, happy to!" }
        }
      ],
      note:
        "Faltar is the busiest verb in this block. It still follows the backwards pattern: me falta una firma, me faltan dos firmas. From there it stretches into time, absence and need: faltan cinco minutos, Camilo faltó al trabajo, hace falta firmar. The Colombian courtesy phrase ¡no faltaba más! is not a literal inventory report; it means of course, not at all, happy to help.",
      culture: [
        {
          label: "Checklists love faltar",
          body:
            "Before a trip, a class or an event, Colombians often talk through what falta rather than saying I need again and again. It keeps attention on the missing item: the signature, the poncho, the person, the minutes. That is exactly why agreement matters."
        },
        {
          label: "Time remaining is plural when minutes are plural",
          body:
            "Faltan cinco minutos feels backwards to English speakers because English says there are five minutes left. Spanish is doing the same thing with faltar: the five minutes are the subject that remain missing before the departure."
        },
        {
          label: "No faltaba más is courtesy, not logic",
          body:
            "A Colombian saying ¡no faltaba más! after thanks is not analyzing what was missing. It is a warm formula meaning of course or don't mention it. The phrase belongs with con gusto and a la orden more than with arithmetic."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “me falta dos firmas”",
          whyItFails:
            "Dos firmas is plural, so the verb must be faltan. The person me does not control agreement.",
          sayInstead: "Me faltan dos firmas."
        },
        {
          mistake: "Using “falto cinco minutos” for a countdown",
          whyItFails:
            "Falto means I am absent. For time remaining, the minutes are the subject: faltan cinco minutos.",
          sayInstead: "Faltan cinco minutos."
        },
        {
          mistake: "Taking “¡no faltaba más!” literally",
          whyItFails:
            "In Colombian courtesy, the phrase usually means not at all or of course. It is not mainly about an item missing from a list.",
          sayInstead: "¡No faltaba más, con gusto!"
        }
      ],
      variations: [
        {
          form: "Nos falta una firma.",
          register: "neutral practical",
          region: "General Spanish",
          whenToUse: "One required item or step is still missing from the group."
        },
        {
          form: "Faltan cinco minutos para salir.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You are counting down to a departure, meeting or closing time."
        },
        {
          form: "¡No faltaba más, con gusto!",
          register: "polite warm",
          region: "Very Colombian",
          whenToUse: "You respond warmly to thanks or a small courtesy request."
        }
      ],
      prompt: "Yuri says “nos falta una firma” but “faltan dos chalecos.” What controls faltar?",
      choices: [
        "The missing thing or things.",
        "The person who checks the list.",
        "The city where they are waiting."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence agrees with two missing signatures?",
          choices: [
            "Me falta dos firmas.",
            "Yo falto dos firmas.",
            "Me faltan dos firmas."
          ],
          answer: 2,
          tests: "plural agreement with missing things"
        },
        {
          prompt: "Which phrase means five minutes to go?",
          choices: [
            "Faltan cinco minutos.",
            "Falto cinco minutos.",
            "Falta cinco minutos."
          ],
          answer: 0,
          tests: "faltan with plural minutes"
        },
        {
          prompt: "Which sentence means a step is needed?",
          choices: [
            "Hace falta firmar.",
            "Hace importa firmar.",
            "Hace interesa firmar."
          ],
          answer: 0,
          tests: "hace falta as it is needed"
        },
        {
          prompt: "Which phrase is a warm Colombian response to thanks?",
          choices: [
            "No importaba más.",
            "No interesaba más.",
            "¡No faltaba más!"
          ],
          answer: 2,
          tests: "no faltaba más as courtesy"
        }
      ]
    },
    en: {
      title: "Decir qué falta antes de salir en Sídney",
      situation:
        "Usted está en Sídney ayudando a revisar una lista antes de una salida por la bahía. Faltan firmas, chalecos y minutos, y necesita decir en inglés qué falta sin traducir faltar de una sola manera.",
      setting: {
        who: "Yuri coordina una salida corta por la bahía. Dana ayuda a revisar la lista del grupo y debe decir qué falta sin repetir I need para todo.",
        what: "Una revisión antes de salir: firmas que faltan, una persona ausente, chalecos todavía necesarios y cinco minutos antes de la partida.",
        when: "Una mañana húmeda, justo antes de que el grupo baje caminando al muelle.",
        where: "Sídney, en una oficina de excursiones cerca del puerto, con planillas, chalecos salvavidas y ponchos junto a la puerta.",
        why: "Porque faltar se reparte en inglés entre be missing, still need, need, be absent y left to go. No hay un solo verbo que haga todo."
      },
      address: {
        form: "mixed",
        who: "Yuri y Dana usan you y frases directas de trabajo en equipo.",
        why: "El inglés no cambia de pronombre entre colegas. La cooperación aparece en how's the list going, we still need y we're missing.",
        ifYouSwitch:
          "No existe una forma de usted para esta escena. Si usted vuelve todo demasiado formal, la revisión de lista suena como auditoría."
      },
      dialogue: [
        {
          speaker: "Yuri",
          target: "How's the list going? We're missing one signature and two life jackets.",
          translation: "¿Cómo va la lista? Nos falta una firma y faltan dos chalecos.",
          pronunciation: "jaus da list GOU-ing. uir MI-sing uan SIG-na-chur and tu LAIF ya-kets",
          literal: "¿Cómo va la lista? Estamos faltando una firma y dos chalecos salvavidas.",
          why: "We're missing pone a we como sujeto, pero el sentido sigue siendo nos falta. Para objetos de lista, missing es más natural que lacking."
        },
        {
          speaker: "Dana",
          target: "Camilo is missing too; he said he'd be here early.",
          translation: "También falta Camilo; dijo que llegaba temprano.",
          pronunciation: "ka-MI-lou iz MI-sing tu; ji sed jid bi jir ER-li",
          literal: "Camilo está faltando también; dijo que estaría aquí temprano.",
          why: "Is missing puede describir una persona que no aparece. No significa necesariamente peligro; aquí es una ausencia en la lista."
        },
        {
          speaker: "Yuri",
          target: "Well, five minutes to go; if he doesn't come, we leave without him.",
          translation: "Bueno, faltan cinco minutos; si no llega, salimos sin él.",
          pronunciation: "uel, faiv MI-nits tu gou; if ji DA-zent kam, ui liv ui-DAUT jim",
          literal: "Bueno, cinco minutos para ir; si él no viene, salimos sin él.",
          why: "Five minutes to go es la forma viva para faltan cinco minutos. No diga five minutes are missing unless something truly disappeared."
        },
        {
          speaker: "Dana",
          target: "I still need to check the children's permission forms.",
          translation: "A mí me falta revisar los permisos de los niños.",
          pronunciation: "ai stil nid tu chek da CHIL-drens per-MI-shon formz",
          literal: "Todavía necesito revisar los permisos de los niños.",
          why: "Still need to traduce me falta más naturalmente cuando lo pendiente es una acción completa."
        },
        {
          speaker: "Yuri",
          target: "Everyone needs to sign before we go down to the dock.",
          translation: "Hace falta que todos firmen antes de bajar al muelle.",
          pronunciation: "EV-ri-uan nidz tu sain bi-FOR ui gou daun tu da dok",
          literal: "Todos necesitan firmar antes de bajar al muelle.",
          why: "Everyone needs to sign es más directo que it makes lack that everyone sign. El inglés reparte hace falta en need."
        },
        {
          speaker: "Dana",
          target: "Done. If you give me a pen, that's all we're missing.",
          translation: "Listo. Si me presta un lapicero, no falta más.",
          pronunciation: "dan. if yu giv mi a pen, dats ol uir MI-sing",
          literal: "Listo. Si me da un lapicero, eso es todo lo que nos falta.",
          why: "“That's all we're missing” conserva el sentido de lista. No es lo mismo que la cortesía “no faltaba más”, que necesita otra respuesta en inglés."
        }
      ],
      vocabulary: [
        {
          term: "be missing",
          explanation:
            "Faltar o estar ausente cuando un objeto o persona no aparece en una lista o lugar.",
          literal: "estar faltando",
          useWhen:
            "Falta una firma, una persona, un documento o una pieza.",
          avoidWhen:
            "Habla de tiempo restante. Para eso use to go, no missing.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["lack", "need", "be absent", "be short of"],
          example: { target: "We're missing one signature.", translation: "Nos falta una firma." }
        },
        {
          term: "still need",
          explanation:
            "Todavía necesitar o faltar por hacer. Muy natural cuando falta una acción.",
          literal: "todavía necesitar",
          useWhen:
            "Queda pendiente revisar, firmar, pagar, llamar o terminar algo.",
          avoidWhen:
            "Sólo cuenta objetos que no están. We're missing may be shorter there.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["need", "have left", "must still", "be missing"],
          example: { target: "I still need to check the forms.", translation: "Me falta revisar los permisos." }
        },
        {
          term: "we're missing",
          explanation:
            "Nos falta o nos faltan. El grupo es sujeto en inglés.",
          literal: "estamos faltando",
          useWhen:
            "El equipo o grupo no tiene todavía un objeto requerido.",
          avoidWhen:
            "Quiere decir que ustedes están perdidos. Missing puede tener varios sentidos, así que el objeto aclara.",
          register: "neutro práctico",
          region: "Inglés universal.",
          related: ["we still need", "we lack", "we don't have", "we're short"],
          example: { target: "We're missing two life jackets.", translation: "Nos faltan dos chalecos." }
        },
        {
          term: "need to",
          explanation:
            "Necesitar o hacer falta que alguien haga algo.",
          literal: "necesitar hacer",
          useWhen:
            "Una persona o grupo debe completar una acción antes de seguir.",
          avoidWhen:
            "Quiere conservar el foco en el objeto que falta. Entonces missing puede sonar más concreto.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["have to", "must", "be required to", "still need"],
          example: { target: "Everyone needs to sign.", translation: "Hace falta que todos firmen." }
        },
        {
          term: "five minutes to go",
          explanation:
            "Faltan cinco minutos. Es cuenta regresiva, no minutos perdidos.",
          literal: "cinco minutos para ir",
          useWhen:
            "Cuenta el tiempo que queda antes de salir, cerrar, empezar o terminar.",
          avoidWhen:
            "De verdad perdió cinco minutos por una demora. Entonces explique the delay cost us five minutes.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["five minutes left", "almost time", "not long now", "until departure"],
          example: { target: "Five minutes to go.", translation: "Faltan cinco minutos." }
        },
        {
          term: "miss work",
          explanation:
            "Faltar al trabajo. Miss también sirve para clase, cita o evento.",
          literal: "perder trabajo",
          useWhen:
            "Una persona no asistió a trabajo, clase, reunión o cita.",
          avoidWhen:
            "Habla de extrañar a alguien. Miss también significa extrañar; el contexto decide.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["miss class", "be absent", "skip", "not show up"],
          example: { target: "Camilo missed work yesterday.", translation: "Camilo faltó al trabajo ayer." }
        },
        {
          term: "not at all",
          explanation:
            "No faltaba más, de nada o para nada, según la situación.",
          literal: "no en absoluto",
          useWhen:
            "Responde a gracias o a una disculpa pequeña de forma cálida.",
          avoidWhen:
            "Está haciendo un conteo literal de cosas faltantes. Ahí use nothing else is missing.",
          register: "cortés cálido",
          region: "Inglés universal.",
          related: ["of course", "you're welcome", "my pleasure", "no problem"],
          example: { target: "Not at all, happy to help.", translation: "¡No faltaba más, con gusto!" }
        }
      ],
      note:
        "Faltar no tiene una sola traducción limpia al inglés. Si falta un objeto, we're missing works. Si falta una acción, I still need to works. Si falta tiempo, five minutes to go works. Si alguien faltó al trabajo, missed work works. Y si alguien dice ¡no faltaba más!, the answer is not a missing phrase at all: not at all, of course or happy to help.",
      culture: [
        {
          label: "Missing no siempre es peligro",
          body:
            "Camilo is missing puede sonar alarmante en otro contexto, pero en una lista antes de salir sólo significa que no aparece todavía. El inglés depende mucho del marco: missing person en noticias no pesa igual que missing from the list."
        },
        {
          label: "To go es la cuenta regresiva",
          body:
            "Five minutes to go es una fórmula pequeña y muy útil. Evita traducciones raras como five minutes are missing. El inglés no imagina que los minutos faltan como objetos; imagina que quedan antes del punto de salida."
        },
        {
          label: "Not at all responde a la cortesía",
          body:
            "No faltaba más no se traduce literalmente. En inglés, not at all, of course o my pleasure cumplen la función social. Traducir la forma en vez de la función deja una frase que nadie diría después de gracias."
        }
      ],
      pitfalls: [
        {
          mistake: "“We lack two life jackets.”",
          whyItFails:
            "Lack es gramatical, pero suena más formal y menos de lista práctica. En una salida cotidiana, we're missing suena más natural.",
          sayInstead: "We're missing two life jackets."
        },
        {
          mistake: "“Five minutes are missing.”",
          whyItFails:
            "Esa traducción trata los minutos como objetos perdidos. Para cuenta regresiva, el inglés dice five minutes to go o five minutes left.",
          sayInstead: "Five minutes to go."
        },
        {
          mistake: "“Nothing was missing more.”",
          whyItFails:
            "Es traducción literal de no faltaba más, pero no cumple la cortesía. Después de gracias, use not at all o happy to help.",
          sayInstead: "Not at all, happy to help."
        }
      ],
      variations: [
        {
          form: "We're missing one signature.",
          register: "neutro práctico",
          region: "Inglés universal",
          whenToUse: "Un objeto o dato requerido todavía falta en la lista."
        },
        {
          form: "Five minutes to go.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Cuenta el tiempo que queda antes de salir o empezar."
        },
        {
          form: "Not at all, happy to help.",
          register: "cortés cálido",
          region: "Inglés universal",
          whenToUse: "Responde a gracias con la función de no faltaba más."
        }
      ],
      prompt: "Yuri says “we're missing one signature” but “five minutes to go.” ¿Qué muestra sobre faltar?",
      choices: [
        "Que se traduce según lo que falta.",
        "Que siempre se traduce como lack.",
        "Que sólo sirve para personas ausentes."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase suena natural para dos chalecos que faltan?",
          choices: [
            "We lack two life jackets.",
            "We're missing two life jackets.",
            "We interest two life jackets."
          ],
          answer: 1,
          tests: "we're missing for checklist items"
        },
        {
          prompt: "¿Cuál frase expresa una cuenta regresiva?",
          choices: [
            "Five minutes to go.",
            "Five minutes are missing.",
            "Five minutes are absent."
          ],
          answer: 0,
          tests: "to go for time remaining"
        },
        {
          prompt: "¿Cuál frase traduce mejor “me falta revisar”?",
          choices: [
            "I still need to check.",
            "I still matter to check.",
            "I still interest to check."
          ],
          answer: 0,
          tests: "still need to for a pending action"
        },
        {
          prompt: "¿Cuál respuesta cumple la función de “¡no faltaba más!”?",
          choices: [
            "Nothing missing more.",
            "Missing was no more.",
            "Not at all, happy to help."
          ],
          answer: 2,
          tests: "not at all as courtesy response"
        }
      ]
    }
  },
  {
    id: "wanting-support-for-a-move-in-girardot",
    level: "Developing · What matters",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "family-and-relationships",
    register: "familiar",
    pathways: ["independent", "year-12", "collegiate-academic"],
    structure: "subjunctive-volition",
    review: "pending",
    es: {
      title: "Wanting support for a move in Girardot",
      situation:
        "You are in Girardot telling your dad that you want to move into a small apartment closer to work. He wants you to be careful, you want him to trust you, and both of you need the grammar for wanting someone else to do something without turning the subjunctive into a mystery.",
      setting: {
        who: "Mateo is an adult son with a new job and a signed budget. Lucía is his father, loving but worried, and he needs to keep the disagreement warm while they talk about rent, safety, timing and trust.",
        what: "A kitchen-table negotiation about a move: one person wants to leave, another wants him to wait, and each sentence shows whether the subject stays the same or changes after que.",
        when: "A hot Sunday afternoon, after lunch, while a fan moves warm air and the family calendar is open on the table.",
        where: "Girardot, Cundinamarca, in a lowland apartment kitchen near the Magdalena River, with a fan running beside the table.",
        why: "Because what matters to you is exactly where this structure lives: wanting, hoping, advising, objecting and caring what another person does. The grammar is mechanical, not mystical."
      },
      address: {
        form: "tú",
        who: "Mateo and Lucía use tú because they are close family members having a serious but affectionate conversation.",
        why: "Tú lets them disagree without sounding distant. The respect comes from listening, reasons and softening phrases, not from usted.",
        ifYouSwitch:
          "Usted would add distance and might sound wounded or formal between parent and adult child in this kitchen. Vos is heard in parts of Colombia, but tú is the safest neutral choice for this lesson."
      },
      dialogue: [
        {
          speaker: "Mateo",
          target: "Quiero mudarme cerca del trabajo, pero también quiero que confíes en mí.",
          translation: "I want to move close to work, but I also want you to trust me.",
          pronunciation: "KYEH-roh moo-DAR-meh SER-kah del trah-BAH-hoh, PEH-roh tahm-BYEN KYEH-roh keh kon-FYEH-es en mee",
          literal: "I-want to-move-myself close to-the work, but also I-want that you trust in me.",
          why: "This is the spine of the lesson. Same subject, quiero mudarme, takes an infinitive. Different subject, quiero que confíes, takes que plus subjunctive. The shape is trigger verb plus que plus different subject plus subjunctive."
        },
        {
          speaker: "Lucía",
          target: "Yo quiero ayudarte, pero necesito que me muestres el presupuesto completo.",
          translation: "I want to help you, but I need you to show me the full budget.",
          pronunciation: "yoh KYEH-roh ah-yoo-DAR-teh, PEH-roh neh-seh-SEE-toh keh meh MWEHS-trehs el preh-soo-PWES-toh kom-PLEH-toh",
          literal: "I want to-help-you, but I-need that you show me the budget complete.",
          why: "The contrast repeats. Lucía does the helping, so ayudar stays infinitive. Mateo does the showing, so necesito que me muestres uses the subjunctive form muestres."
        },
        {
          speaker: "Mateo",
          target: "Te lo muestro; espero que veas que no estoy improvisando.",
          translation: "I'll show it to you. I hope you see that I'm not making this up as I go.",
          pronunciation: "teh loh MWEHS-troh; ehs-PEH-roh keh VEH-ahs keh noh ehs-TOY eem-proh-vee-SAN-doh",
          literal: "To-you it I-show; I-hope that you see that not I-am improvising.",
          why: "Espero que veas is another trigger plus que plus different subject. Veas comes from the present yo form veo, drop the -o and add the opposite vowel ending."
        },
        {
          speaker: "Lucía",
          target: "Tu tía dice que el barrio es tranquilo, pero dice que vayas de día a mirar la ruta.",
          translation: "Your aunt says the neighborhood is calm, but she says you should go during the day to check the route.",
          pronunciation: "too TEE-ah DEE-seh keh el BAR-ryoh ehs trahn-KEE-loh, PEH-roh DEE-seh keh VAH-yahs deh DEE-ah ah mee-RAR lah ROO-tah",
          literal: "Your aunt says that the neighborhood is calm, but says that you go by day to look at the route.",
          why: "Here is the trap. Dice que el barrio es tranquilo reports a fact, so it uses indicative es. Dice que vayas gives an instruction, so it uses subjunctive vayas. Same words, two moods, two meanings."
        },
        {
          speaker: "Mateo",
          target: "Me parece justo. Prefiero visitar el edificio contigo y prefiero que hablemos con el portero.",
          translation: "That seems fair. I prefer to visit the building with you, and I prefer that we talk with the doorman.",
          pronunciation: "meh pah-REH-seh HOOS-toh. preh-FYEH-roh bee-see-TAR el eh-dee-FEE-syoh kon-TEE-goh ee preh-FYEH-roh keh ah-BLEH-mohs kon el por-TEH-roh",
          literal: "To-me it-seems fair. I-prefer to-visit the building with-you and I-prefer that we talk with the doorman.",
          why: "Visitar has the same subject as prefiero, so it is an infinitive. Hablemos has a different shared action after que, so it is subjunctive from hablo to hable, hablemos."
        },
        {
          speaker: "Lucía",
          target: "Te recomiendo que revises el contrato y que no firmes nada con afán.",
          translation: "I recommend that you review the lease and not sign anything in a rush.",
          pronunciation: "teh rreh-koh-MYEN-doh keh rreh-BEE-sehs el kon-TRAH-toh ee keh noh FEER-mehs NAH-dah kon ah-FAHN",
          literal: "To-you I-recommend that you review the contract and that not you sign anything with rush.",
          why: "Recomendar que is in the advising family. Revises and firmes are regular present subjunctives built from reviso and firmo, drop -o and add the opposite vowel."
        },
        {
          speaker: "Mateo",
          target: "Ojalá que me acompañes el sábado; me alegra que quieras mirar esto conmigo.",
          translation: "I hope you come with me on Saturday. I'm glad you want to look at this with me.",
          pronunciation: "oh-hah-LAH keh meh ah-kom-PAH-nyehs el SAH-bah-doh; meh ah-LEH-grah keh KYEH-rahs mee-RAR EHS-toh kon-MEE-goh",
          literal: "Hopefully that you accompany me Saturday; to-me gladdens that you want to look at this with me.",
          why: "Ojalá is one of the most common triggers in Colombian speech and needs no other verb before it. Me alegra que also triggers the subjunctive because it comments emotionally on another person's action."
        },
        {
          speaker: "Lucía",
          target: "Bueno, es importante que seas cuidadoso y que sepas pedir ayuda. Que te vaya bien, hijo.",
          translation: "All right, it's important that you be careful and know how to ask for help. May things go well for you, son.",
          pronunciation: "BWEH-noh, ehs eem-por-TAHN-teh keh SEH-ahs kwee-dah-DOH-soh ee keh SEH-pahs peh-DEER ah-YOO-dah. keh teh VAH-yah byen, EE-hoh",
          literal: "Good, it-is important that you be careful and that you know to-ask for help. That to-you it-go well, son.",
          why: "Es importante que adds an impersonal judgment trigger, and seas and sepas are two of the genuine irregular subjunctives. Que te vaya bien is an everyday Colombian softened wish, and it is subjunctive too."
        }
      ],
      vocabulary: [
        {
          term: "[trigger] + que + different subject + subjunctive",
          explanation:
            "The mechanical shape for this lesson. A verb or phrase expresses wanting, asking, advising, emotion or judgment. Que opens a new clause. A different subject does the second action, so the second verb goes into the subjunctive.",
          literal: "trigger + that + new subject + subjunctive",
          useWhen:
            "One person wants, needs, asks, recommends, hopes or cares that another person do something: quiero que salgas, necesito que vengas, es mejor que esperes.",
          avoidWhen:
            "The subject stays the same. Then Spanish normally uses an infinitive: quiero salir, necesito llamar, prefiero esperar.",
          register: "neutral",
          region: "Universal Spanish and completely alive in everyday Colombian speech.",
          related: ["que", "infinitivo", "presente de subjuntivo", "sujeto distinto"],
          example: { target: "Quiero que confíes en mí.", translation: "I want you to trust me." }
        },
        {
          term: "quiero salir / quiero que salgas",
          explanation:
            "The decisive contrast. Quiero salir has one subject, I want and I leave, so salir is an infinitive. Quiero que salgas has two subjects, I want and you leave, so salgas is subjunctive.",
          literal: "I-want to-leave / I-want that you leave",
          useWhen:
            "You need to decide whether a sentence takes an infinitive or que plus subjunctive. Ask who does the second action.",
          avoidWhen:
            "Do not choose the subjunctive because the sentence feels emotional. Choose it because the trigger, que and subject change are all present.",
          register: "neutral",
          region: "General Spanish.",
          related: ["querer", "salir", "salga", "sujeto"],
          example: { target: "Quiero mudarme, pero quiero que me apoyes.", translation: "I want to move, but I want you to support me." }
        },
        {
          term: "yo form, drop -o, opposite vowel",
          explanation:
            "Build most present subjunctives from the present indicative yo form. Take hablo, como, tengo, salgo, digo, conozco. Drop the final -o and add the opposite vowel endings: hable, coma, tenga, salga, diga, conozca.",
          literal: "yo form minus -o plus the other vowel",
          useWhen:
            "You need a regular-looking subjunctive, including many forms that textbooks call irregular. The yo-form origin explains tenga, salga, diga and conozca.",
          avoidWhen:
            "A small handful is truly irregular and must be memorized: sea, vaya, dé, esté, sepa, haya.",
          register: "grammar explanation",
          region: "Universal Spanish.",
          related: ["hable", "coma", "tenga", "conozca"],
          example: { target: "Necesito que tengas paciencia.", translation: "I need you to have patience." }
        },
        {
          term: "querer que, necesitar que, pedir que",
          explanation:
            "The wanting and asking family. Querer que, necesitar que and pedir que all set up another person's action, so they naturally take the subjunctive when the subject changes.",
          literal: "to want that, to need that, to ask that",
          useWhen:
            "You want someone else to call, wait, bring something, sign something or explain a decision.",
          avoidWhen:
            "You are reporting a fact rather than asking for action. The subjunctive belongs to the request, not to every que after these verbs.",
          register: "neutral",
          region: "General Spanish, very common in Colombian family and work talk.",
          related: ["esperar que", "preferir que", "decir que", "solicitar que"],
          example: { target: "Te pido que revises el contrato.", translation: "I'm asking you to review the lease." }
        },
        {
          term: "recomendar que, sugerir que, permitir que",
          explanation:
            "The advising and allowing family. Recommending, suggesting, allowing and prohibiting all try to shape what another person does, so recomendar que, sugerir que, aconsejar que, dejar que, permitir que and prohibir que take the subjunctive.",
          literal: "to recommend that, suggest that, allow that",
          useWhen:
            "You give advice, set a boundary, allow a plan or forbid a risky action.",
          avoidWhen:
            "The advice has the same subject and can be cleaner as an infinitive, especially after querer, necesitar or preferir.",
          register: "neutral to courteous",
          region: "General Spanish.",
          related: ["aconsejar que", "dejar que", "prohibir que", "recomendar"],
          example: { target: "Te recomiendo que revises todo.", translation: "I recommend that you review everything." }
        },
        {
          term: "me alegra que, me molesta que, qué pena que",
          explanation:
            "The emotion family. The first clause reacts to another person's action or situation, so the action after que appears in the subjunctive: me alegra que vengas, me molesta que cancelen, qué pena que no puedas.",
          literal: "it gladdens me that, it bothers me that, what a pity that",
          useWhen:
            "You are glad, bothered, sorry or relieved about what someone else does or what happens.",
          avoidWhen:
            "You are simply reporting information with no trigger of reaction or influence. Then the indicative often appears.",
          register: "neutral conversational",
          region: "Very common in Colombia, especially for softening disagreement.",
          related: ["me encanta que", "siento que", "qué bueno que", "me preocupa que"],
          example: { target: "Me alegra que quieras hablar.", translation: "I'm glad you want to talk." }
        },
        {
          term: "es importante que, es mejor que, es raro que",
          explanation:
            "The impersonal judgment family. Spanish often judges an action first, then puts the action after que in the subjunctive: es importante que seas cuidadoso, es mejor que esperes, es raro que no llamen.",
          literal: "it is important that, it is better that, it is strange that",
          useWhen:
            "You say an action is important, better, necessary, strange, good or bad before naming who does it.",
          avoidWhen:
            "The phrase only reports certainty, like es verdad que or es claro que. Those usually take the indicative because they present facts.",
          register: "neutral",
          region: "General Spanish.",
          related: ["es necesario que", "qué bueno que", "es malo que", "es urgente que"],
          example: { target: "Es importante que sepas pedir ayuda.", translation: "It's important that you know how to ask for help." }
        },
        {
          term: "dice que viene / dice que venga",
          explanation:
            "The famous trap. Decir que takes the indicative when it reports a fact: dice que viene, he says he is coming. It takes the subjunctive when it means tell someone to: dice que venga, he says for him or her to come.",
          literal: "says that he comes / says that he come",
          useWhen:
            "You must separate a report from an instruction. Same decir que, different meaning, different mood.",
          avoidWhen:
            "Do not memorize decir que as always subjunctive or always indicative. Decide what decir is doing in that sentence.",
          register: "neutral",
          region: "Universal Spanish and essential in Colombian everyday messages.",
          related: ["indicativo", "mandato indirecto", "venir", "venga"],
          example: { target: "Mi tía dice que vayas de día.", translation: "My aunt says you should go during the day." }
        },
        {
          term: "ojalá que",
          explanation:
            "A very common hope trigger in real Colombian speech. Ojalá means I hope or hopefully, and it does not need another verb before it. Ojalá que me acompañes is already a full trigger for the subjunctive.",
          literal: "hopefully that",
          useWhen:
            "You hope something happens, especially when you cannot control it fully: ojalá que llueva, ojalá que salga bien, ojalá que puedas venir.",
          avoidWhen:
            "Do not add quiero before it because you think every subjunctive needs a first verb. Ojalá alone can do the triggering.",
          register: "neutral conversational",
          region: "Extremely common in Colombia.",
          related: ["esperar que", "quiera Dios", "ojalá", "que te vaya bien"],
          example: { target: "Ojalá que me acompañes.", translation: "I hope you come with me." }
        }
      ],
      note:
        "Do not learn the present subjunctive as a cloud of doubt and emotion. For this lesson, use a visible three-part test: a trigger verb or phrase, que, and a different subject. All three are required. Quiero salir has one subject, so Spanish uses the infinitive. Quiero que salgas has a new subject after que, so Spanish uses the subjunctive. Build most forms from the present indicative yo form: hablo to hable, como to coma, tengo to tenga, salgo to salga, digo to diga, conozco to conozca. That means many so-called irregulars are just yo-form logic. The true handful to memorize is sea, vaya, dé, esté, sepa and haya. The mood is fully alive in everyday Colombian speech. Que le vaya bien and que esté muy bien are not literary flourishes; they are ordinary softened wishes.",
      culture: [
        {
          label: "The subjunctive is everyday, not fancy",
          body:
            "Colombians use the subjunctive at home, at work, in voice notes and in quick goodbyes. A parent saying quiero que me avises, a coworker saying es mejor que llamemos, and a cashier saying que le vaya bien are all using the same living grammar. It is not a formal decoration and it is not a mood you save for essays. The more you hear it as a mechanical response to a trigger, the less mysterious it becomes."
        },
        {
          label: "Ojalá carries hope by itself",
          body:
            "Ojalá is one of the most frequent hope words in Colombian speech. It does not need quiero, espero or any other verb in front of it. Ojalá que puedas venir, ojalá salga bien, ojalá no llueva all go straight into the subjunctive because ojalá itself is the trigger. Learners often look for a verb before que and miss the easiest trigger in the room."
        },
        {
          label: "Soft wishes are real subjunctives",
          body:
            "Goodbyes like que te vaya bien, que descanses and que esté muy bien are small acts of care. Grammatically, they are subjunctive clauses with the first part left unsaid, something like I hope that things go well for you. They sound warm because they avoid commanding reality. The speaker is wishing a good result for another person, exactly the semantic home of this structure."
        }
      ],
      pitfalls: [
        {
          mistake: "Using que plus subjunctive when the subject does not change",
          whyItFails:
            "Spanish does not normally say quiero que yo salga for the basic meaning I want to leave. If the same person wants and leaves, the second verb is an infinitive.",
          sayInstead: "Quiero salir temprano."
        },
        {
          mistake: "Building forms from the infinitive instead of the yo form",
          whyItFails:
            "The present subjunctive usually comes from the present yo form, not the infinitive stem. That is why tener gives tenga, salir gives salga, decir gives diga and conocer gives conozca.",
          sayInstead: "Necesito que tengas paciencia."
        },
        {
          mistake: "Treating decir que as one fixed mood",
          whyItFails:
            "Decir que reports facts with the indicative and gives instructions with the subjunctive. Dice que viene and dice que venga are not interchangeable; they mean different things.",
          sayInstead: "Dice que viene. / Dice que venga."
        }
      ],
      variations: [
        {
          form: "Quiero salir temprano.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "The same subject wants and leaves, so the second verb is an infinitive."
        },
        {
          form: "Quiero que salgas temprano.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "One subject wants and a different subject leaves, so que plus subjunctive appears."
        },
        {
          form: "Dice que viene.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Decir reports a fact, so the reported verb stays indicative."
        },
        {
          form: "Dice que venga.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Decir gives an instruction, so the instructed action is subjunctive."
        },
        {
          form: "Ojalá que te vaya bien.",
          register: "warm conversational",
          region: "Very common in Colombia",
          whenToUse: "You make a soft wish for another person's good outcome."
        }
      ],
      prompt: "Mateo says “quiero mudarme” but “quiero que confíes.” What decides the change?",
      choices: [
        "The second action has a new subject after que.",
        "The sentence happens in a family conversation.",
        "The verb querer always avoids infinitives."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence keeps the same subject and uses the infinitive?",
          choices: [
            "Quiero salir temprano para revisar todo.",
            "Quiero que salgas temprano a revisar.",
            "Quiero que salga temprano mi hermano."
          ],
          answer: 0,
          tests: "same subject after quiero takes an infinitive"
        },
        {
          prompt: "Which sentence correctly asks another person to wait?",
          choices: [
            "Necesito esperar diez minutos más.",
            "Necesito que esperes diez minutos.",
            "Necesito que esperas diez minutos."
          ],
          answer: 1,
          tests: "different subject after necesito que takes subjunctive"
        },
        {
          prompt: "Which sentence reports a fact instead of giving an order?",
          choices: [
            "Dice que venga temprano mañana.",
            "Dice que vengas temprano mañana.",
            "Dice que viene temprano mañana."
          ],
          answer: 2,
          tests: "decir que with a factual report uses indicative"
        },
        {
          prompt: "Which phrase is a natural Colombian soft wish?",
          choices: [
            "Que le vaya bien en el viaje.",
            "Que le va bien en el viaje.",
            "Que le ir bien en el viaje."
          ],
          answer: 0,
          tests: "que le vaya bien uses subjunctive as a soft wish"
        }
      ]
    },
    en: {
      title: "Pedir apoyo para mudarse en Austin",
      situation:
        "Usted está en Austin, Texas, hablando con su papá por videollamada sobre mudarse a un apartamento más cerca del trabajo. En español saldría quiero que confíes, pero en inglés el arreglo más útil no es want that you trust. Es want you to trust me, con objeto más infinitivo.",
      setting: {
        who: "Mateo es un colombiano adulto con trabajo nuevo y presupuesto listo. Lucía, su papá, está en Colombia y quiere cuidarlo sin cerrarle la puerta. La conversación exige afecto, límites y frases claras en inglés.",
        what: "Una negociación familiar sobre una mudanza en otro país: una persona quiere irse, otra quiere que espere, y el inglés resuelve casi todo con want someone to do something.",
        when: "Una tarde de domingo en Austin, con calor en la ventana y una videollamada abierta después del almuerzo en Colombia.",
        where: "Austin, Texas, en un cuarto alquilado cerca de una ruta de bus, con avisos de apartamentos abiertos en el portátil.",
        why: "Porque el inglés casi no conserva el subjuntivo común. Para querer, pedir, aconsejar y recomendar, usted necesita patrones ingleses propios, no una copia de que."
      },
      address: {
        form: "mixed",
        who: "Mateo y Lucía usan you en inglés; la cercanía familiar va en dad, please, I know y el tono, no en un pronombre distinto.",
        why: "El inglés no diferencia tú y usted. En una conversación familiar seria, la cortesía se marca con frases completas y modales suaves, no con cambiar you.",
        ifYouSwitch:
          "No hay otro you para cambiar. Si Mateo agrega sir o father en medio de esta escena, sonaría rígido o dramático, no más respetuoso."
      },
      dialogue: [
        {
          speaker: "Mateo",
          target: "I want to move closer to work, but I also want you to trust me.",
          translation: "Quiero mudarme más cerca del trabajo, pero también quiero que confíes en mí.",
          pronunciation: "ai want tu muv KLOU-ser tu werk, bat ai OL-sou want yu tu trost mi",
          literal: "Yo quiero moverme más cerca del trabajo, pero también quiero tú confiar en mí.",
          why: "Este es el arreglo central: same subject, I want to move, usa to plus verbo. Different subject, I want you to trust me, usa objeto más to-infinitive. No diga I want that you trust me."
        },
        {
          speaker: "Lucía",
          target: "I want to help you, but I need you to show me the full budget.",
          translation: "Quiero ayudarte, pero necesito que me muestres el presupuesto completo.",
          pronunciation: "ai want tu jelp yu, bat ai nid yu tu shou mi da ful BUD-yet",
          literal: "Yo quiero ayudar tú, pero necesito tú mostrarme el presupuesto completo.",
          why: "I want to help you mantiene el mismo sujeto para want y help. I need you to show me cambia de persona: yo necesito, usted muestra. El inglés no pone that; pone you to show."
        },
        {
          speaker: "Mateo",
          target: "I'll show you. I hope you see that I'm not making this up as I go.",
          translation: "Te lo muestro. Espero que veas que no estoy improvisando.",
          pronunciation: "ail shou yu. ai joup yu si dat aim not MEI-king dis op az ai gou",
          literal: "Te mostraré. Espero tú ver que no estoy inventando esto mientras voy.",
          why: "Hope sí puede ir con una cláusula normal: I hope you see. No necesita should ni subjuntivo visible. El inglés común prefiere esa sencillez donde el español usa espero que veas."
        },
        {
          speaker: "Lucía",
          target: "Your aunt says the neighborhood is calm, but she says you should go during the day.",
          translation: "Tu tía dice que el barrio es tranquilo, pero dice que vayas de día.",
          pronunciation: "yor ant sez da NEI-ber-jud iz kam, bat shi sez yu shud gou DUR-ing da dei",
          literal: "Tu tía dice que el barrio es calmado, pero ella dice tú deberías ir durante el día.",
          why: "El inglés separa el reporte y el consejo por sentido, no por un subjuntivo común. Says the neighborhood is calm reporta un hecho. Says you should go da una instrucción suave."
        },
        {
          speaker: "Mateo",
          target: "That sounds fair. I'd prefer to visit the building with you, and I'd prefer us to talk to the doorman.",
          translation: "Me parece justo. Prefiero visitar el edificio contigo y prefiero que hablemos con el portero.",
          pronunciation: "dat saundz fer. aid pri-FER tu VIZ-it da BIL-ding with yu, and aid pri-FER os tu tok tu da DOR-man",
          literal: "Eso suena justo. Preferiría visitar el edificio contigo, y preferiría nosotros hablar con el portero.",
          why: "Prefer sigue el mismo arreglo. Mismo sujeto: I'd prefer to visit. Otro sujeto con acción compartida: I'd prefer us to talk. En conversación, us to talk suele sonar más claro que that we talk."
        },
        {
          speaker: "Lucía",
          target: "I recommend that you check the lease, and I suggest that you not sign anything in a rush.",
          translation: "Te recomiendo que revises el contrato y sugiero que no firmes nada con afán.",
          pronunciation: "ai reh-kuh-MEND dat yu chek da lis, and ai sug-YEST dat yu not sain EN-i-thing in a rush",
          literal: "Recomiendo que tú revises el contrato, y sugiero que tú no firmar nada de afán.",
          why: "Después de recommend y suggest, el inglés cuidadoso usa that más verbo base: that you check, that you not sign. En habla diaria también se oye should: I suggest you should not sign."
        },
        {
          speaker: "Mateo",
          target: "I hope you can come with me on Saturday. I'm glad you want to look at this with me.",
          translation: "Ojalá puedas acompañarme el sábado. Me alegra que quieras mirar esto conmigo.",
          pronunciation: "ai joup yu kan kom with mi on SA-ter-dei. aim glad yu want tu luk at dis with mi",
          literal: "Espero tú puedes venir conmigo el sábado. Estoy contento tú quieres mirar esto conmigo.",
          why: "El inglés usa I hope you can para ojalá puedas, con can en vez de un subjuntivo visible. I'm glad you want to es el patrón emocional común, no I'm glad that you want that."
        },
        {
          speaker: "Lucía",
          target: "All right. It's important for you to be careful and to know how to ask for help. We ask that Mateo be present at the lease meeting.",
          translation: "Bueno. Es importante que seas cuidadoso y que sepas pedir ayuda. Pedimos que Mateo esté presente en la cita del contrato.",
          pronunciation: "ol rait. its im-POR-tant for yu tu bi KER-ful and tu nou jau tu ask for jelp. wi ask dat mah-TEI-oh bi PRE-zent at da lis MI-ting",
          literal: "Está bien. Es importante para ti ser cuidadoso y saber cómo pedir ayuda. Pedimos que Mateo esté presente en la reunión del contrato.",
          why: "Para consejo cotidiano, el inglés dice it's important for you to be careful. El viejo subjuntivo mandativo sobrevive en frases formales como we ask that Mateo be present, con be, no is."
        }
      ],
      vocabulary: [
        {
          term: "want someone to do something",
          explanation:
            "El patrón más importante para reparar el calco quiero que. En inglés cotidiano se dice want plus objeto plus to-infinitive: I want you to leave, I want her to call, I want them to wait.",
          literal: "querer a alguien hacer algo",
          useWhen:
            "Una persona quiere que otra haga algo. Es la traducción normal de quiero que salgas, queremos que llamen, ella quiere que esperes.",
          avoidWhen:
            "No copie I want that you leave. Esa frase viene del español y suena incorrecta o muy extranjera en inglés normal.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["need someone to", "ask someone to", "would like someone to", "tell someone to"],
          example: { target: "I want you to trust me.", translation: "Quiero que confíes en mí." }
        },
        {
          term: "I want to leave / I want you to leave",
          explanation:
            "El contraste que más vale dominar. I want to leave tiene un solo sujeto: yo quiero y yo me voy. I want you to leave tiene dos participantes: yo quiero, usted se va. El objeto you marca el cambio.",
          literal: "quiero irme / quiero que usted se vaya",
          useWhen:
            "Necesita decidir entre to plus verbo para su propia acción y objeto plus to plus verbo para la acción de otra persona.",
          avoidWhen:
            "No agregue that para imitar que. El puente inglés después de want no es that, es someone to.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["same subject", "object", "to-infinitive", "leave"],
          example: { target: "I want to move, but I want you to help me.", translation: "Quiero mudarme, pero quiero que me ayudes." }
        },
        {
          term: "need someone to do something",
          explanation:
            "Need sigue el mismo camino que want. I need you to show me the budget traduce necesito que me muestres el presupuesto. El objeto you va antes de to show.",
          literal: "necesitar a alguien hacer algo",
          useWhen:
            "Usted necesita que otra persona mande, firme, espere, traiga o explique algo.",
          avoidWhen:
            "No diga I need that you show me en conversación normal. Puede entenderse, pero no es el patrón vivo para esta idea.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["want someone to", "ask someone to", "expect someone to", "need to"],
          example: { target: "I need you to show me the budget.", translation: "Necesito que me muestres el presupuesto." }
        },
        {
          term: "ask / tell someone to",
          explanation:
            "Para pedir o mandar, el inglés usa ask someone to y tell someone to. She asked me to wait, he told us to come early. Es una forma muy común de traducir pedir que y decir que cuando decir significa ordenar.",
          literal: "pedir / decir a alguien hacer algo",
          useWhen:
            "Alguien solicita o instruye a otra persona para que haga una acción concreta.",
          avoidWhen:
            "No confunda tell con reportar información. He says he is coming reporta un hecho; he told me to come da una instrucción.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["request", "order", "say", "instruction"],
          example: { target: "She told me to go during the day.", translation: "Ella me dijo que fuera de día." }
        },
        {
          term: "suggest / recommend that someone should",
          explanation:
            "Con suggest y recommend, el inglés conversacional usa mucho should: I suggest that you should wait, I recommend that he should call. En inglés estadounidense también es natural quitar should y dejar el verbo base.",
          literal: "sugerir / recomendar que alguien debería",
          useWhen:
            "Usted aconseja sin mandar directamente, especialmente en trabajo, estudio o decisiones delicadas.",
          avoidWhen:
            "No use suggest someone to en inglés estándar. Diga suggest that someone should, suggest that someone do, o suggest doing si el sujeto queda claro.",
          register: "neutro a cuidadoso",
          region: "Inglés universal, con should muy común fuera de Estados Unidos y el verbo base frecuente en inglés formal estadounidense.",
          related: ["should", "recommend", "suggest doing", "advice"],
          example: { target: "I suggest that you should wait.", translation: "Sugiero que esperes." }
        },
        {
          term: "formal mandative subjunctive",
          explanation:
            "El inglés conserva un subjuntivo formal en frases como we ask that he be present, the rules require that she sign, I recommend that he wait. El verbo va en forma base: be, sign, wait.",
          literal: "subjuntivo formal de mandato",
          useWhen:
            "Escribe correos formales, reglas, actas, solicitudes o instrucciones institucionales.",
          avoidWhen:
            "No lo fuerce en toda conversación. I want you to be present suena normal; I want that you be present suena raro para el mismo sentido cotidiano.",
          register: "formal",
          region: "Más visible en inglés estadounidense formal, entendido en todo el inglés.",
          related: ["bare verb", "be present", "require that", "ask that"],
          example: { target: "We ask that he be present.", translation: "Pedimos que él esté presente." }
        },
        {
          term: "hope and be glad",
          explanation:
            "Hope y be glad no suelen necesitar un patrón especial con subjuntivo visible. I hope you can come, I'm glad you want to help, I'm sorry you can't join. El sentido coincide con ojalá y me alegra que, pero la forma inglesa es más simple.",
          literal: "esperar y alegrarse",
          useWhen:
            "Usted expresa esperanza, alegría, pena o molestia sobre lo que otra persona hace.",
          avoidWhen:
            "No traduzca palabra por palabra como I am glad that you want that you help. Quite el segundo that y use want to o can.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["I hope", "I'm glad", "I'm sorry", "can"],
          example: { target: "I'm glad you want to help.", translation: "Me alegra que quieras ayudar." }
        },
        {
          term: "say reports, tell instructs",
          explanation:
            "Para la trampa de decir que, el inglés ayuda separando verbos. Say suele reportar palabras o hechos: she says he is coming. Tell someone to da una instrucción: she told him to come.",
          literal: "say reporta, tell instruye",
          useWhen:
            "Necesita distinguir entre informar algo y ordenar o pedir una acción.",
          avoidWhen:
            "No traduzca dice que venga como she says that he comes. Si es instrucción, use she says he should come o she told him to come.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["say", "tell", "should", "come"],
          example: { target: "She says he is coming, but she told him to come early.", translation: "Ella dice que él viene, pero le dijo que viniera temprano." }
        },
        {
          term: "It's important for someone to",
          explanation:
            "Para juicios impersonales cotidianos, el inglés prefiere el molde con for someone to: it is important for someone to, it is better for someone to, it is strange for someone to. Ese molde reemplaza muchas frases con es importante que.",
          literal: "es importante para alguien hacer",
          useWhen:
            "Usted juzga una acción de otra persona como importante, mejor, raro, útil o necesario.",
          avoidWhen:
            "No copie it is important that you are careful si quiere sonar más natural en conversación. It's important for you to be careful es más directo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["for you to", "better for", "necessary for", "important that"],
          example: { target: "It's important for you to be careful.", translation: "Es importante que seas cuidadoso." }
        }
      ],
      note:
        "El inglés moderno casi no usa un subjuntivo visible en la conversación diaria. Para los significados de querer, pedir, necesitar y preferir, el arreglo de más valor es objeto más to-infinitive: I want you to leave, I need her to call, we'd prefer them to wait. No hay paralelo directo en español, y por eso el error I want that you leave aparece tanto. Con suggest y recommend, use should o una cláusula formal con verbo base: I suggest that you should wait, I recommend that he wait. En registros formales queda el subjuntivo mandativo: we ask that he be present, not he is present. Para esperanza y emoción, el inglés suele ser más llano: I hope you can come, I'm glad you want to help.",
      culture: [
        {
          label: "El gran arreglo: objeto más to",
          body:
            "Para un hispanohablante, want someone to do something se siente extraño porque parece faltar que. En realidad, ese es el puente inglés normal. I want you to call, I need you to wait, I'd like them to come. Aprenderlo como bloque evita el calco I want that you call, que delata de inmediato que usted está traduciendo desde quiero que llames."
        },
        {
          label: "Should suaviza consejos",
          body:
            "Suggest y recommend no se comportan como want. En inglés estándar no diga I suggest you to wait. Diga I suggest that you should wait, I recommend that she should call, o en un registro más formal, I suggest that you wait. Should suena natural porque presenta el consejo sin convertirlo en orden."
        },
        {
          label: "El subjuntivo inglés sobrevivió en oficinas",
          body:
            "El subjuntivo inglés no desapareció del todo. Vive en frases institucionales como we ask that he be present, the policy requires that she sign, the judge ordered that the file remain sealed. La señal es el verbo base, be, sign, remain, incluso con he o she. Pero para la vida diaria, I want him to be present es mucho más común."
        }
      ],
      pitfalls: [
        {
          mistake: "I want that you leave.",
          whyItFails:
            "Es el calco directo de quiero que salgas. El inglés normal no usa that después de want para esta idea. Usa objeto más to-infinitive.",
          sayInstead: "I want you to leave."
        },
        {
          mistake: "I suggest you to wait.",
          whyItFails:
            "Suggest no toma objeto más to como want. Para consejo, use that plus should, o that plus verbo base en un registro más formal.",
          sayInstead: "I suggest that you should wait."
        },
        {
          mistake: "We ask that he is present.",
          whyItFails:
            "En el mandative subjunctive formal, el verbo va en forma base. Con he no es is, sino be.",
          sayInstead: "We ask that he be present."
        }
      ],
      variations: [
        {
          form: "I want to leave early.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La misma persona quiere y se va, así que usa want to más verbo."
        },
        {
          form: "I want you to leave early.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una persona quiere que otra haga la acción, con objeto más to-infinitive."
        },
        {
          form: "She says he is coming.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Say reporta un hecho o unas palabras, sin instrucción."
        },
        {
          form: "She told him to come.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Tell someone to da una instrucción o pedido indirecto."
        },
        {
          form: "We ask that he be present.",
          register: "formal",
          region: "Inglés formal universal",
          whenToUse: "Una solicitud institucional usa el subjuntivo mandativo con verbo base."
        }
      ],
      prompt: "Mateo says “I want you to trust me.” ¿Qué corrige frente al calco español?",
      choices: [
        "Uses object plus to, not want that you.",
        "Uses a plural verb after the word trust.",
        "Uses should after every form of want."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase traduce bien “quiero que salgas”?",
          choices: [
            "I want you to leave before noon.",
            "I want that you leave before noon.",
            "I want you leaving before noon."
          ],
          answer: 0,
          tests: "want plus object plus to-infinitive"
        },
        {
          prompt: "¿Cuál frase usa bien need con otra persona?",
          choices: [
            "I need to show you the budget.",
            "I need you to show me the budget.",
            "I need that you show me the budget."
          ],
          answer: 1,
          tests: "need someone to do something"
        },
        {
          prompt: "¿Cuál frase reporta un hecho, no una instrucción?",
          choices: [
            "She told him to come early.",
            "She says he should come early.",
            "She says he is coming early."
          ],
          answer: 2,
          tests: "say plus indicative-style content reports a fact"
        },
        {
          prompt: "¿Cuál frase muestra el subjuntivo formal inglés?",
          choices: [
            "We ask that he be present.",
            "We ask that he is present.",
            "We ask him is present."
          ],
          answer: 0,
          tests: "mandative subjunctive uses the bare verb be"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/42-developing-what-matters-to-you.js");
