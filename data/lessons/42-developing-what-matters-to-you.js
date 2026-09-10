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
      title: "Interesarse por un curso en Sincelejo",
      situation:
        "Estás en Sincelejo mirando un curso corto de edición de audio en una casa cultural. Te interesa el tema, pero no sabes si el horario, el costo y el proyecto final realmente te llaman la atención.",
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
          register: "neutral",
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
          register: "neutral",
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
          register: "neutral",
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
          register: "neutral slightly formal",
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
          register: "friendly conversational",
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
          register: "neutral",
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
          register: "neutral",
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
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Un curso, oferta o tema le llama la atención."
        },
        {
          form: "The software doesn't really grab me.",
          register: "friendly conversational",
          region: "Inglés universal",
          whenToUse: "Quiere decir que algo no le interesa sin sonar brusco."
        },
        {
          form: "I'm interested in whether it helps my résumé.",
          register: "neutral practical",
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
      title: "Pedir permiso sin molestar en Riohacha",
      situation:
        "Estás en Riohacha compartiendo una mesa larga en un hostal. Quieres mover una silla, abrir espacio para tu maleta y preguntar si a los demás les importa sin contestar al revés.",
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
          register: "neutral",
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
          register: "neutral conversational",
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
          register: "polite conversational",
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
          register: "neutral",
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
          register: "direct",
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
          register: "neutral",
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
          register: "neutral conversational",
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
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Un detalle pequeño no importa y quiere tranquilizar a alguien."
        },
        {
          form: "Do you mind if I sit here?",
          register: "polite conversational",
          region: "Inglés universal",
          whenToUse: "Pide permiso para ocupar espacio cerca de otra persona."
        },
        {
          form: "Yes, I do mind; please don't.",
          register: "direct polite",
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
      title: "Faltar cinco minutos en Florencia",
      situation:
        "Estás en Florencia esperando una lancha turística por el río. Al grupo le faltan firmas, falta una persona y faltan cinco minutos para salir, así que necesitas hablar de lo que todavía no está listo.",
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
          register: "neutral",
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
          register: "neutral",
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
          register: "neutral practical",
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
          register: "neutral",
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
          register: "neutral",
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
          register: "neutral",
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
          register: "polite warm",
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
          register: "neutral practical",
          region: "Inglés universal",
          whenToUse: "Un objeto o dato requerido todavía falta en la lista."
        },
        {
          form: "Five minutes to go.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Cuenta el tiempo que queda antes de salir o empezar."
        },
        {
          form: "Not at all, happy to help.",
          register: "polite warm",
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
  }
);

markSource(lessons, "data/lessons/42-developing-what-matters-to-you.js");
