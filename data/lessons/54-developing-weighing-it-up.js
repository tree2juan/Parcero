/*
 * Lesson block: independent / weighing options and talking them through.
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
 * The three verbs here — discutir, comparar and depender — teach the difference
 * between calm discussion and a row, how to weigh options, and how to answer
 * with "it depends". The two directions are mirrors: same number of dialogue
 * turns, vocabulary entries, culture notes, pitfalls, variations and practice
 * questions, and the same optional slots filled on the same rows. That is
 * enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "talking-through-a-project-without-a-row",
    level: "Developing · Weighing it up",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "work-and-employment",
    register: "courteous",
    pathways: ["independent"],
    verb: "discutir",
    review: "pending",
    es: {
      title: "Hablar de un proyecto sin discutir",
      situation:
        "Estás en Ibagué ayudando a una fundación con un afiche para una feria de barrio. Quieres pedir una reunión tranquila para revisar el diseño, pero alguien dice discutir y la sala oye pelea. Tienes que aprender la diferencia antes de sonar agresivo.",
      setting: {
        who: "Carolina coordinates a small neighborhood foundation, and Ben is the foreign volunteer helping with a poster. Both want the poster improved, not a fight.",
        what: "A design check that starts calmly, almost tips into a row over a phrase, and then gets pulled back into a normal review.",
        when: "Thursday afternoon, after the first printed draft has come back with two obvious problems.",
        where: "Ibagué, in a community foundation room with plastic chairs, a printer, and a poster taped to the wall.",
        why: "Because discutir is a dangerous false friend. In Colombia it usually means arguing or quarrelling, while calm project talk needs hablar de, conversar sobre, revisar, or tratar un tema."
      },
      address: {
        form: "usted",
        who: "Ben uses usted with Carolina because she is coordinating the project, and Carolina uses usted back in a professional but friendly way.",
        why: "Usted lets Ben ask for a correction without sounding entitled. The register matters even more because the wrong verb could make the request sound hostile.",
        ifYouSwitch:
          "Tú would not be shocking after they know each other better, but here it would soften the professional boundary. Vos would not fit the room or the relationship."
      },
      dialogue: [
        {
          speaker: "Ben",
          target: "Carolina, ¿podemos discutir el afiche esta tarde?",
          translation: "Carolina, can we argue about the poster this afternoon?",
          pronunciation: "kah-roh-LEE-nah, poh-DEH-mos dees-koo-TEER el ah-FEE-cheh ES-tah TAR-deh",
          literal: "Carolina, can-we discuss/argue the poster this afternoon?",
          why: "This is the false friend. Ben means discuss calmly, but in Colombia “discutir el afiche” can sound like he expects a quarrel about it."
        },
        {
          speaker: "Carolina",
          target: "¿Discutir? Mejor digamos revisar el afiche.",
          translation: "Argue? Better let's say review the poster.",
          pronunciation: "dees-koo-TEER. meh-HOR dee-GAH-mos rreh-bee-SAR el ah-FEE-cheh",
          literal: "Discuss/argue? Better let-us-say review the poster.",
          why: "Revisar is the safer neutral verb for checking a document, design, plan, or draft. It does not bring fight energy into the room."
        },
        {
          speaker: "Ben",
          target: "Gracias. Quiero hablar del título, no pelear por el título.",
          translation: "Thanks. I want to talk about the title, not fight over the title.",
          pronunciation: "GRAH-syahs. KYEH-roh ah-BLAR del TEE-too-loh, noh peh-LEH-ar por el TEE-too-loh",
          literal: "Thanks. I-want to-talk of-the title, not fight for the title.",
          why: "Hablar de is the plain option Ben needed from the start. It says conversation without suggesting conflict."
        },
        {
          speaker: "Carolina",
          target: "Exacto. Ayer sí discutimos, porque nadie cedía.",
          translation: "Exactly. Yesterday we did argue, because nobody would give way.",
          pronunciation: "eg-SAK-toh. ah-YEHR see dees-koo-TEE-mos, POR-keh NAH-dyeh seh-DEE-ah",
          literal: "Exactly. Yesterday yes we-argued, because nobody gave-way.",
          why: "Here discutir is correct because it was a real argument. The word is not forbidden; it just means something stronger than English “discuss.”"
        },
        {
          speaker: "Ben",
          target: "Entonces hoy tratamos el tema con calma.",
          translation: "Then today we'll address the topic calmly.",
          pronunciation: "en-TON-ses oy trah-TAH-mos el TEH-mah kon KAL-mah",
          literal: "Then today we-treat the topic with calm.",
          why: "Tratar un tema is another neutral way to handle a subject in a meeting. It sounds organized rather than combative."
        },
        {
          speaker: "Carolina",
          target: "Sí. Conversamos sobre el título y después decidimos.",
          translation: "Yes. We'll talk about the title and then decide.",
          pronunciation: "see. kon-behr-SAH-mos SOH-breh el TEE-too-loh ee des-PWES deh-see-DEE-mos",
          literal: "Yes. We-converse about the title and afterward decide.",
          why: "Conversar sobre is calm and collaborative. It is the verb family learners need when English “discuss” is tempting them toward discutir."
        }
      ],
      vocabulary: [
        {
          term: "discutir",
          explanation:
            "In Colombia, usually to argue or quarrel, not simply to discuss calmly. It is one of the most useful false friends to unlearn early.",
          literal: "to argue / to quarrel",
          useWhen:
            "Use it when there is disagreement, tension, raised voices, stubbornness, or a real argument.",
          avoidWhen:
            "Avoid it for a calm meeting, project review, or polite request to talk something through. Use hablar de, conversar sobre, revisar, or tratar un tema.",
          register: "neutral but conflict-marked",
          region: "General Colombian; other dialects may allow a calmer sense more easily, but Colombian ears often hear conflict.",
          related: ["pelear", "hablar de", "conversar sobre", "revisar"],
          example: {
            target: "Ayer sí discutimos, porque nadie cedía.",
            translation: "Yesterday we did argue, because nobody would give way."
          }
        },
        {
          term: "hablar de",
          explanation:
            "The safest neutral way to say talk about. It carries no built-in conflict.",
          literal: "to talk of/about",
          useWhen:
            "Use it for topics, plans, problems, feelings, work, or anything you simply want to bring into conversation.",
          avoidWhen:
            "Avoid replacing it with discutir just because English says discuss. That changes the social temperature.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["hablar sobre", "conversar", "tratar", "charlar"],
          example: {
            target: "Quiero hablar del título.",
            translation: "I want to talk about the title."
          }
        },
        {
          term: "conversar sobre",
          explanation:
            "To have a conversation about something. It sounds calm, collaborative, and human.",
          literal: "to converse about",
          useWhen:
            "Use it for a planned but friendly conversation about a topic that needs attention.",
          avoidWhen:
            "Avoid it if there really was a fight. Then discutir may be the honest verb.",
          register: "neutral warm",
          region: "General Colombian.",
          related: ["hablar de", "charlar sobre", "revisar", "comentar"],
          example: {
            target: "Conversamos sobre el título.",
            translation: "We'll talk about the title."
          }
        },
        {
          term: "revisar",
          explanation:
            "To review, check, or look over. It is ideal for documents, drafts, plans, designs, and details.",
          literal: "to review / to check",
          useWhen:
            "Use it when the task is to examine something and improve or confirm it.",
          avoidWhen:
            "Avoid using discutir for this neutral action unless the review has truly become an argument.",
          register: "neutral",
          region: "General Colombian.",
          related: ["mirar", "corregir", "repasar", "verificar"],
          example: {
            target: "Mejor revisamos el afiche.",
            translation: "Better we review the poster."
          }
        },
        {
          term: "tratar un tema",
          explanation:
            "To address or deal with a topic. It is useful in meetings because it sounds orderly rather than emotional.",
          literal: "to treat a topic",
          useWhen:
            "Use it for agenda items, difficult subjects, work issues, or a topic that needs deliberate attention.",
          avoidWhen:
            "Avoid hearing it as medical treatment. With tema or asunto, tratar means address or deal with.",
          register: "neutral to formal",
          region: "General Colombian and universal Spanish.",
          related: ["tema", "asunto", "revisar", "hablar de"],
          example: {
            target: "Tratamos el tema con calma.",
            translation: "We'll address the topic calmly."
          }
        },
        {
          term: "pelear por",
          explanation:
            "To fight over something. It is more openly conflictive than discutir.",
          literal: "to fight for/over",
          useWhen:
            "Use it when people are openly fighting about a topic, decision, object, or responsibility.",
          avoidWhen:
            "Avoid it for ordinary disagreement if nobody is actually fighting.",
          register: "direct informal",
          region: "General Colombian.",
          related: ["discutir", "pelea", "problema", "ceder"],
          example: {
            target: "No quiero pelear por el título.",
            translation: "I don't want to fight over the title."
          }
        },
        {
          term: "ceder",
          explanation:
            "To give way or yield in a disagreement. It often explains why a discussion turned into an argument.",
          literal: "to yield",
          useWhen:
            "Use it when someone softens, compromises, gives ground, or stops holding one position so tightly.",
          avoidWhen:
            "Avoid using it for physically handing over an object in everyday speech; it is more about position, space, or rights.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["acuerdo", "posición", "negociar", "discutir"],
          example: {
            target: "Nadie cedía en la reunión.",
            translation: "Nobody would give way in the meeting."
          }
        }
      ],
      note:
        "Do not trust English “discuss.” In Colombian Spanish, “quiero discutir el proyecto con usted” can sound like “I want to argue about the project with you.” If you want a calm conversation, say “quiero hablar del proyecto,” “conversemos sobre el tema,” “revisemos el afiche,” or “tratemos ese punto.” Save discutir for a real argument, or for formal contexts where the meaning is unmistakably debate.",
      culture: [
        {
          label: "The false friend changes the room",
          body:
            "The problem with discutir is not grammar; it is atmosphere. A polite learner may think they are proposing a discussion and accidentally announce a fight. That one verb can make a meeting start defensively."
        },
        {
          label: "Neutral verbs keep work calm",
          body:
            "Colombian work and volunteer settings often use revisar, mirar, hablar de, conversar sobre, and tratar for normal project talk. These verbs let people disagree without naming the exchange as a quarrel."
        },
        {
          label: "Discutir is still useful",
          body:
            "You need discutir when there really was a row: “discutimos anoche,” “están discutiendo,” “no quiero discutir.” The goal is not avoiding the word forever; it is using it only when the conflict is real."
        },
        {
          label: "Usted does not cancel the mistake",
          body:
            "Adding usted to a bad verb choice does not automatically make it polite. “Quiero discutir con usted” can still sound tense. Register is the whole sentence, not just the pronoun."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “quiero discutir el proyecto con usted” for a calm meeting",
          whyItFails:
            "In Colombia, that can sound like you want to argue about the project. English discuss is pulling you toward the wrong Spanish verb.",
          sayInstead: "Quiero hablar del proyecto con usted."
        },
        {
          mistake: "Using discutir for every work review",
          whyItFails:
            "A review can be calm, technical, and cooperative. Discutir adds conflict that may not be there.",
          sayInstead: "Podemos revisar el documento."
        },
        {
          mistake: "Avoiding discutir when people really argued",
          whyItFails:
            "If there was tension and nobody gave way, discutir is the honest verb. A softer verb can hide what happened.",
          sayInstead: "Ayer discutimos por el horario."
        },
        {
          mistake: "Translating “discuss” automatically as discutir",
          whyItFails:
            "English uses discuss for calm talk. Colombian Spanish usually hears discutir as an argument unless the context is formal debate.",
          sayInstead: "Use hablar de, conversar sobre, revisar, or tratar."
        }
      ],
      variations: [
        {
          form: "Quiero hablar del proyecto.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The safest replacement for calm English discuss."
        },
        {
          form: "Podemos revisar el afiche.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Checking a draft, design, document, or plan."
        },
        {
          form: "Conversemos sobre el tema.",
          register: "warm neutral",
          region: "General Colombian",
          whenToUse: "Inviting a calm conversation about a topic."
        },
        {
          form: "Ayer discutimos por el horario.",
          register: "neutral conflict",
          region: "General Colombian",
          whenToUse: "Reporting a real argument."
        },
        {
          form: "Tratemos ese punto con calma.",
          register: "neutral formal",
          region: "General Colombian",
          whenToUse: "Addressing an agenda item without sounding combative."
        }
      ],
      prompt: "Ben says “¿podemos discutir el afiche?” but wants a calm review. What is the problem?",
      choices: [
        "Discutir can sound like arguing, not calmly reviewing the poster.",
        "Discutir is only used for tasting food before adding salt.",
        "Discutir is a clothing verb for trying on a shirt."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence safely asks for a calm project conversation?",
          choices: [
            "Quiero discutir duro el proyecto.",
            "Quiero hablar del proyecto.",
            "Quiero pelear por el proyecto."
          ],
          answer: 1,
          tests: "hablar de as the neutral replacement for discuss"
        },
        {
          prompt: "Which sentence honestly reports a real argument?",
          choices: [
            "Ayer discutimos por el horario.",
            "Ayer revisamos sin problema.",
            "Ayer conversamos con calma."
          ],
          answer: 0,
          tests: "discutir for a genuine row"
        },
        {
          prompt: "Which verb best fits checking a draft poster?",
          choices: [
            "Revisar el afiche.",
            "Discutir el afiche.",
            "Pelear el afiche."
          ],
          answer: 0,
          tests: "revisar for neutral checking"
        },
        {
          prompt: "Which phrase fits an agenda item without adding conflict?",
          choices: [
            "Pelear ese punto.",
            "Gritar ese punto.",
            "Tratar ese punto."
          ],
          answer: 2,
          tests: "tratar un tema as neutral meeting language"
        }
      ]
    },
    en: {
      title: "Hablar de un proyecto sin pelear",
      situation:
        "Usted está en Houston ayudando a una fundación colombiana con un afiche para una feria. Quiere pedir una reunión tranquila para revisar el diseño, y necesita decir discuss, argue, review y talk about sin llevar al inglés el miedo colombiano a discutir.",
      setting: {
        who: "Carolina coordina una fundación de barrio, y Ben es el voluntario que ayuda con un afiche. Los dos quieren mejorar el diseño, no pelear.",
        what: "Una revisión de diseño que empieza tranquila, casi se enreda por una frase, y vuelve a convertirse en una conversación normal.",
        when: "Jueves por la tarde, después de que el primer borrador impreso salió con dos problemas obvios.",
        where: "Houston, en una sala comunitaria de una organización colombiana con sillas plásticas y un afiche pegado en la pared.",
        why: "Porque discuss en inglés normalmente es neutral. El falso amigo funciona al revés: no hay que oír argue cada vez que aparece discuss."
      },
      address: {
        form: "mixed",
        who: "Ben y Carolina usan nombres de pila; el inglés no cambia you para marcar el respeto profesional.",
        why: "La cortesía está en la pregunta completa, el tono y palabras como could. El pronombre no cambia.",
        ifYouSwitch:
          "Poner ma'am en cada frase sonaría distante. En esta escena, una pregunta clara y amable hace mejor trabajo que un título repetido."
      },
      dialogue: [
        {
          speaker: "Ben",
          target: "Carolina, can we discuss the poster this afternoon?",
          translation: "Carolina, ¿podemos hablar del afiche esta tarde?",
          pronunciation: "kah-ro-LI-na, can ui dis-KOS de POS-ter dis af-ter-NUN",
          literal: "Carolina, ¿podemos discutir el afiche esta tarde?",
          why: "Discuss es neutral en inglés. No significa pelear por defecto; normalmente quiere decir hablar de un tema con atención."
        },
        {
          speaker: "Carolina",
          target: "Discuss, yes. Not argue — just review the poster.",
          translation: "Hablar, sí. No discutir: sólo revisar el afiche.",
          pronunciation: "dis-KOS, yes. not AR-giu — yost ri-VIU de POS-ter",
          literal: "Discutir, sí. No argumentar: sólo revisar el afiche.",
          why: "Argue es la palabra inglesa para discutir como pelea. Review es revisar un borrador, diseño o documento."
        },
        {
          speaker: "Ben",
          target: "Thanks. I want to talk about the title, not fight over it.",
          translation: "Gracias. Quiero hablar del título, no pelear por el título.",
          pronunciation: "zanks. ai uant tu tok a-BAUT de TAI-tol, not fait OU-ver it",
          literal: "Gracias. Quiero hablar acerca del título, no pelear sobre eso.",
          why: "Talk about es la opción sencilla y segura. Fight over marca conflicto, como pelear por algo."
        },
        {
          speaker: "Carolina",
          target: "Exactly. Yesterday we did argue, because nobody would give way.",
          translation: "Exacto. Ayer sí discutimos, porque nadie cedía.",
          pronunciation: "eg-ZAKT-li. YES-ter-dei ui did AR-giu, bi-KOZ NO-bo-di wud giv uei",
          literal: "Exactamente. Ayer sí argumentamos, porque nadie cedía.",
          why: "Did argue enfatiza que esta vez sí hubo pelea. Give way traduce ceder en una discusión."
        },
        {
          speaker: "Ben",
          target: "Then today we'll address the topic calmly.",
          translation: "Entonces hoy tratamos el tema con calma.",
          pronunciation: "den tu-DEI uil a-DRES de TO-pik KAM-li",
          literal: "Entonces hoy dirigiremos el tema calmadamente.",
          why: "Address the topic suena ordenado y profesional. No significa poner una dirección postal; significa tratar el tema."
        },
        {
          speaker: "Carolina",
          target: "Yes. We'll discuss the title and then decide.",
          translation: "Sí. Conversamos sobre el título y después decidimos.",
          pronunciation: "yes. uil dis-KOS de TAI-tol and den di-SAID",
          literal: "Sí. Discutiremos el título y después decidiremos.",
          why: "Aquí discuss es exactamente la palabra correcta en inglés: una conversación calmada para tomar una decisión."
        }
      ],
      vocabulary: [
        {
          term: "discuss",
          explanation:
            "Hablar de un tema con atención. En inglés suele ser neutral y no implica pelea.",
          literal: "discutir / hablar de",
          useWhen:
            "Úselo para proyectos, ideas, documentos, decisiones, problemas y temas que se van a conversar.",
          avoidWhen:
            "No lo traduzca automáticamente como pelear. Si hay conflicto real, use argue.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["talk about", "review", "address", "argue"],
          example: {
            target: "Can we discuss the poster?",
            translation: "¿Podemos hablar del afiche?"
          }
        },
        {
          term: "argue",
          explanation:
            "Discutir en el sentido colombiano de pelear verbalmente o tener una discusión tensa.",
          literal: "discutir / pelear",
          useWhen:
            "Úselo cuando hay tensión, desacuerdo fuerte, voces subidas o gente que no cede.",
          avoidWhen:
            "No lo use para una revisión tranquila. Ahí discuss, talk about or review son mejores.",
          register: "neutral conflict",
          region: "Inglés universal.",
          related: ["fight", "row", "disagreement", "give way"],
          example: {
            target: "Yesterday we did argue.",
            translation: "Ayer sí discutimos."
          }
        },
        {
          term: "talk about",
          explanation:
            "Hablar de. Es la opción más sencilla para una conversación normal sobre un tema.",
          literal: "hablar acerca de",
          useWhen:
            "Úselo cuando no necesita sonar formal y sólo quiere nombrar el tema de la conversación.",
          avoidWhen:
            "Si necesita sonar más profesional, discuss or address may fit better.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["discuss", "speak about", "bring up", "conversation"],
          example: {
            target: "I want to talk about the title.",
            translation: "Quiero hablar del título."
          }
        },
        {
          term: "review",
          explanation:
            "Revisar un documento, diseño, plan o borrador. No trae conflicto por sí solo.",
          literal: "revisar",
          useWhen:
            "Úselo cuando va a leer, mirar o comprobar algo para corregirlo o aprobarlo.",
          avoidWhen:
            "No lo confunda con review como reseña pública si el contexto es de trabajo interno.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["check", "look over", "revise", "draft"],
          example: {
            target: "Let's review the poster.",
            translation: "Revisemos el afiche."
          }
        },
        {
          term: "address the topic",
          explanation:
            "Tratar el tema. Es una forma ordenada de decir que un asunto se va a atender.",
          literal: "dirigir el tema",
          useWhen:
            "Úselo para reuniones, agenda, problemas delicados o puntos que necesitan atención clara.",
          avoidWhen:
            "No lo entienda como escribir una dirección. Address también significa ocuparse de un asunto.",
          register: "neutral to formal",
          region: "Inglés universal.",
          related: ["deal with", "cover", "discuss", "topic"],
          example: {
            target: "We'll address the topic calmly.",
            translation: "Tratamos el tema con calma."
          }
        },
        {
          term: "fight over",
          explanation:
            "Pelear por algo. Es más fuerte que argue y marca conflicto abierto por un tema.",
          literal: "pelear sobre",
          useWhen:
            "Úselo cuando personas se enfrentan por una decisión, objeto, responsabilidad o idea.",
          avoidWhen:
            "No lo use para desacuerdos suaves o revisiones normales.",
          register: "direct informal",
          region: "Inglés universal.",
          related: ["argue about", "fight about", "dispute", "conflict"],
          example: {
            target: "I don't want to fight over the title.",
            translation: "No quiero pelear por el título."
          }
        },
        {
          term: "give way",
          explanation:
            "Ceder en una discusión o negociación. Alguien baja la rigidez de su posición.",
          literal: "dar camino",
          useWhen:
            "Úselo cuando alguien acepta moverse, negociar, ceder espacio o abandonar una posición dura.",
          avoidWhen:
            "No lo confunda con give away, que significa regalar o revelar.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["yield", "compromise", "back down", "position"],
          example: {
            target: "Nobody would give way.",
            translation: "Nadie cedía."
          }
        }
      ],
      note:
        "En inglés, discuss normalmente es seguro: “Can we discuss the project?” no suena como pelea. Para la pelea use argue, have an argument, or fight over. Para revisar un documento use review, y para tratar un punto use address the topic. El peligro para el hispanohablante es evitar discuss cuando sí es la palabra neutral que necesita.",
      culture: [
        {
          label: "Discuss no empieza una pelea",
          body:
            "Un colombiano puede oír discuss y pensar en discutir, pero en inglés la palabra vive mucho más cerca de conversar o tratar. El tono puede ser serio sin ser conflictivo."
        },
        {
          label: "Argue nombra el conflicto",
          body:
            "Si hubo una pelea verbal, argue es claro. “We argued yesterday” no dice que revisaron un tema; dice que hubo tensión."
        },
        {
          label: "Review suena práctico",
          body:
            "Para borradores, afiches, contratos o documentos, review es una palabra de trabajo tranquila. Invita a mirar y corregir, no a pelear."
        },
        {
          label: "Could suaviza la petición",
          body:
            "Como el inglés no tiene usted, una forma como “could we discuss...?” ayuda a mantener respeto. La cortesía vive en la estructura completa."
        }
      ],
      pitfalls: [
        {
          mistake: "“I want to argue the project with you.”",
          whyItFails:
            "Argue suena a discutir o pelear. Para una reunión tranquila, necesita discuss or talk about.",
          sayInstead: "I want to discuss the project with you."
        },
        {
          mistake: "“Can we fight over the poster?”",
          whyItFails:
            "Fight over anuncia conflicto abierto. Si sólo quiere revisar el afiche, la frase es demasiado fuerte.",
          sayInstead: "Can we review the poster?"
        },
        {
          mistake: "“We discussed yesterday” cuando hubo gritos",
          whyItFails:
            "Discuss puede sonar demasiado neutral si realmente hubo pelea. Argue cuenta mejor lo que pasó.",
          sayInstead: "We argued yesterday."
        },
        {
          mistake: "“Address the poster on the envelope.”",
          whyItFails:
            "Address puede ser poner una dirección, pero address a topic significa tratar un tema. Mezclar los objetos cambia el sentido.",
          sayInstead: "Let's address the topic."
        }
      ],
      variations: [
        {
          form: "I want to discuss the project.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Pedir una conversación tranquila sobre un proyecto."
        },
        {
          form: "Can we review the poster?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Revisar un borrador, diseño o documento."
        },
        {
          form: "Let's talk about the topic.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "La opción sencilla para hablar de algo."
        },
        {
          form: "Yesterday we argued about the time.",
          register: "neutral conflict",
          region: "Inglés universal",
          whenToUse: "Contar que sí hubo una discusión fuerte."
        },
        {
          form: "Let's address that point calmly.",
          register: "neutral formal",
          region: "Inglés universal",
          whenToUse: "Tratar un punto de agenda sin sonar combativo."
        }
      ],
      prompt: "Ben says “can we discuss the poster?” in English. ¿Qué debe entender usted?",
      choices: [
        "He is asking to talk calmly about the poster.",
        "He is asking to taste the poster first.",
        "He is asking to fight physically today."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase pide una conversación tranquila?",
          choices: [
            "I want to argue the project.",
            "I want to discuss the project.",
            "I want to fight the project."
          ],
          answer: 1,
          tests: "discuss as neutral English"
        },
        {
          prompt: "¿Cuál frase cuenta que sí hubo pelea?",
          choices: [
            "We argued about the time.",
            "We reviewed without issue.",
            "We talked calmly today."
          ],
          answer: 0,
          tests: "argue for a real argument"
        },
        {
          prompt: "¿Cuál verbo sirve para revisar un borrador?",
          choices: [
            "Review the poster.",
            "Fight the poster.",
            "Taste the poster."
          ],
          answer: 0,
          tests: "review for checking a draft"
        },
        {
          prompt: "¿Cuál frase trata un punto sin añadir pelea?",
          choices: [
            "Let's fight that point.",
            "Let's shout that point.",
            "Let's address that point."
          ],
          answer: 2,
          tests: "address a topic as neutral meeting language"
        }
      ]
    }
  },
  {
    id: "comparing-phone-plans-before-choosing",
    level: "Developing · Weighing it up",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "familiar",
    pathways: ["independent"],
    verb: "comparar",
    review: "pending",
    es: {
      title: "Comparar dos planes de celular",
      situation:
        "Estás en Florencia ayudando a una amiga a escoger entre dos planes de celular antes de un viaje por carretera. Hay datos, cobertura y precio sobre la mesa. Tienes que comparar con, usar comparado con y decir no hay comparación cuando una opción gana claramente.",
      setting: {
        who: "Natalia is choosing a phone plan before traveling outside the city. Chris is helping her read the small print without pretending the cheapest plan is always best.",
        what: "A comparison of two phone plans: monthly price, data, coverage on the road, and whether the contract is flexible.",
        when: "A weekday evening, before the trip, with both plans open on a laptop and a notebook beside them.",
        where: "Florencia, in a quiet kitchen where the family Wi-Fi is good enough to compare the plans carefully.",
        why: "Because comparar is regular but picky about its preposition: Colombian Spanish compares one option con another, not a another. Comparado con and no hay comparación are the phrases that do real work."
      },
      address: {
        form: "tú",
        who: "Natalia and Chris use tú because they are friends doing a practical favor at a kitchen table.",
        why: "The decision involves money, but not formal distance. Tú keeps the advice direct and friendly.",
        ifYouSwitch:
          "Usted would make the help sound like customer service. Vos would not be needed in this setting."
      },
      dialogue: [
        {
          speaker: "Natalia",
          target: "Chris, ayúdame a comparar este plan con el otro.",
          translation: "Chris, help me compare this plan with the other one.",
          pronunciation: "kris, ah-YOO-dah-meh ah kom-pah-RAR ES-teh plan kon el OH-troh",
          literal: "Chris, help-me to compare this plan with the other.",
          why: "Comparar takes con for the thing you compare against. English can say compare with or compare to; Spanish wants comparar con here."
        },
        {
          speaker: "Chris",
          target: "Listo. Comparo precio, datos y cobertura.",
          translation: "Okay. I'll compare price, data, and coverage.",
          pronunciation: "LEES-toh. kom-PAH-roh PREH-syoh, DAH-tos ee koh-behr-TOO-rah",
          literal: "Ready. I compare price, data and coverage.",
          why: "Comparar is regular: comparo, comparas, compara. The hard part is not the form; it is knowing what counts as a fair comparison."
        },
        {
          speaker: "Natalia",
          target: "Comparado con el barato, este trae más datos.",
          translation: "Compared with the cheap one, this one includes more data.",
          pronunciation: "kom-pah-RAH-doh kon el bah-RAH-toh, ES-teh TRAH-eh mas DAH-tos",
          literal: "Compared with the cheap one, this brings more data.",
          why: "Comparado con is a compact way to frame the comparison before giving the result."
        },
        {
          speaker: "Chris",
          target: "Sí, pero el barato sirve si sólo usas mapas y mensajes.",
          translation: "Yes, but the cheap one works if you only use maps and messages.",
          pronunciation: "see, PEH-roh el bah-RAH-toh SEER-beh see SOH-loh OO-sahs MAH-pahs ee men-SAH-hes",
          literal: "Yes, but the cheap one serves if only you-use maps and messages.",
          why: "A fair comparison depends on use. Bigger is not automatically better if the actual need is small."
        },
        {
          speaker: "Natalia",
          target: "Para la carretera no hay comparación: necesito cobertura.",
          translation: "For the road there is no comparison: I need coverage.",
          pronunciation: "PAH-rah lah kah-rreh-TEH-rah noh eye kom-pah-rah-SYON: neh-seh-SEE-toh koh-behr-TOO-rah",
          literal: "For the road there-is no comparison: I-need coverage.",
          why: "No hay comparación means one option clearly wins on the point that matters. It is stronger than “I prefer this one.”"
        },
        {
          speaker: "Chris",
          target: "Entonces compara el total del mes con la señal que te da.",
          translation: "Then compare the monthly total with the signal it gives you.",
          pronunciation: "en-TON-ses kom-PAH-rah el toh-TAL del mes kon lah seh-NYAL keh teh dah",
          literal: "Then compare the total of-the month with the signal that it gives you.",
          why: "The sentence keeps con after comparar and compares value, not just price. That is the practical skill."
        }
      ],
      vocabulary: [
        {
          term: "comparar",
          explanation:
            "To compare. It is regular, but it normally uses con for the option you compare against.",
          literal: "to compare",
          useWhen:
            "Use it for plans, prices, routes, schools, apartments, phones, services, and any decision with two or more options.",
          avoidWhen:
            "Avoid comparar a for ordinary comparisons. In this use, comparar con is the safe Colombian Spanish pattern.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["comparar con", "comparo", "comparado con", "comparación"],
          example: {
            target: "Compara este plan con el otro.",
            translation: "Compare this plan with the other one."
          }
        },
        {
          term: "comparar con",
          explanation:
            "The pattern you need: compare one thing with another. The con is not optional in the phrase.",
          literal: "to compare with",
          useWhen:
            "Use it when naming both sides of the comparison: this route with that route, this plan with the other.",
          avoidWhen:
            "Avoid importing English compare to as comparar a in this practical sense.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["comparado con", "frente a", "contra", "en comparación con"],
          example: {
            target: "Comparo este plan con el barato.",
            translation: "I compare this plan with the cheap one."
          }
        },
        {
          term: "comparo",
          explanation:
            "The present yo form: I compare. Comparar is regular, so the form is straightforward.",
          literal: "I compare",
          useWhen:
            "Use it when you personally are weighing features, prices, times, or options.",
          avoidWhen:
            "Avoid inventing a stem change. It is comparo, not compuero or anything irregular.",
          register: "neutral",
          region: "Universal Spanish grammar.",
          related: ["comparar", "comparas", "compara", "comparamos"],
          example: {
            target: "Comparo precio, datos y cobertura.",
            translation: "I'll compare price, data, and coverage."
          }
        },
        {
          term: "comparado con",
          explanation:
            "Compared with. A useful opening phrase when you want to set one option beside another before judging it.",
          literal: "compared with",
          useWhen:
            "Use it at the start of a sentence: compared with the cheap one, compared with the old route, compared with last month.",
          avoidWhen:
            "Avoid leaving off con when you name the comparison point.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["en comparación con", "frente a", "comparar con", "mejor que"],
          example: {
            target: "Comparado con el barato, este trae más datos.",
            translation: "Compared with the cheap one, this one includes more data."
          }
        },
        {
          term: "no hay comparación",
          explanation:
            "There is no comparison. One option is clearly better on the thing that matters.",
          literal: "there is no comparison",
          useWhen:
            "Use it when the difference is obvious: coverage, safety, quality, time, comfort, or value.",
          avoidWhen:
            "Avoid it when the options are close. It is a strong phrase, not a mild preference.",
          register: "neutral emphatic",
          region: "General Colombian and universal Spanish.",
          related: ["mucho mejor", "gana fácil", "sin duda", "comparación"],
          example: {
            target: "Para la carretera no hay comparación.",
            translation: "For the road there is no comparison."
          }
        },
        {
          term: "cobertura",
          explanation:
            "Coverage, especially phone signal coverage or service reach. In travel decisions, it may matter more than price.",
          literal: "coverage",
          useWhen:
            "Use it for phone plans, insurance, media, service areas, or anything that covers a region or risk.",
          avoidWhen:
            "Avoid comparing only the monthly price when coverage is the real need.",
          register: "neutral",
          region: "General Colombian.",
          related: ["señal", "datos", "plan", "carretera"],
          example: {
            target: "Necesito cobertura en la carretera.",
            translation: "I need coverage on the road."
          }
        },
        {
          term: "el barato",
          explanation:
            "The cheap one. It is a normal shorthand once the options are already clear.",
          literal: "the cheap one",
          useWhen:
            "Use it after everyone knows which plan, route, or object you are referring to.",
          avoidWhen:
            "Avoid using it before the comparison is clear. Then it can sound dismissive or vague.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["el caro", "el económico", "el otro", "la opción"],
          example: {
            target: "El barato sirve si sólo usas mapas.",
            translation: "The cheap one works if you only use maps."
          }
        }
      ],
      note:
        "Comparar is not hard to conjugate; it is hard to use honestly. Compare this plan con the other one, not a the other one. Use comparado con to frame the result, and no hay comparación only when one option clearly wins on the important point. A good comparison does not ask which is bigger or cheaper in the abstract; it asks what you actually need.",
      culture: [
        {
          label: "Cheap is not always the point",
          body:
            "In a Colombian travel conversation, coverage can matter more than a few thousand pesos saved. Comparing plans means asking where the phone must work, not just which bill is smaller."
        },
        {
          label: "No hay comparación is strong",
          body:
            "People say “no hay comparación” when the choice feels obvious on the value that matters. Use it when the road, service, time, or quality makes one option clearly win."
        },
        {
          label: "Con keeps the comparison balanced",
          body:
            "The small preposition con forces the sentence to show both sides. Learners who say comparar a are often translating English instead of using the Spanish pattern."
        },
        {
          label: "Real comparisons include use",
          body:
            "A phone plan that looks best on paper may be wrong for the person. Data, signal, contract length, travel, and budget all matter differently. The language should leave room for that."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “comparar este plan a ese”",
          whyItFails:
            "For ordinary practical comparisons, Spanish uses comparar con. The English pattern compare to is pulling you toward the wrong preposition.",
          sayInstead: "Comparar este plan con ese."
        },
        {
          mistake: "Using “no hay comparación” for a tiny difference",
          whyItFails:
            "The phrase is strong. If the plans are close, it sounds like you are exaggerating the result.",
          sayInstead: "Este plan es un poco mejor."
        },
        {
          mistake: "Comparing only the price",
          whyItFails:
            "A real plan comparison may depend on coverage, data, contract length, and travel needs, not just cost.",
          sayInstead: "Compare precio, datos y cobertura."
        },
        {
          mistake: "Inventing an irregular form for comparar",
          whyItFails:
            "Comparar is regular. The present yo form is comparo, not a stem-changing form.",
          sayInstead: "Yo comparo las opciones."
        }
      ],
      variations: [
        {
          form: "Compara este plan con el otro.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Putting two clear options side by side."
        },
        {
          form: "Comparo precio, datos y cobertura.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Listing the criteria you are weighing."
        },
        {
          form: "Comparado con el barato, este trae más datos.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Framing a result against another option."
        },
        {
          form: "Para la carretera no hay comparación.",
          register: "neutral emphatic",
          region: "General Colombian",
          whenToUse: "One option clearly wins for the relevant need."
        },
        {
          form: "Compare la señal con el precio.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Weighing value rather than price alone."
        }
      ],
      prompt: "Natalia says “comparar este plan con el otro.” What should you learn from con?",
      choices: [
        "Spanish uses comparar con for the option compared against.",
        "Spanish uses comparar a for every practical comparison.",
        "Spanish never names the second side of a comparison."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses the right preposition?",
          choices: [
            "Comparo este plan a el otro.",
            "Comparo este plan con el otro.",
            "Comparo este plan por el otro."
          ],
          answer: 1,
          tests: "comparar con, not comparar a"
        },
        {
          prompt: "Which sentence means one option clearly wins?",
          choices: [
            "No hay comparación.",
            "No hay conversación.",
            "No hay preparación."
          ],
          answer: 0,
          tests: "no hay comparación as a strong preference"
        },
        {
          prompt: "Which form is the regular present yo form?",
          choices: [
            "Yo compuero los planes.",
            "Yo comparé los planes.",
            "Yo comparo los planes."
          ],
          answer: 2,
          tests: "comparo as regular present"
        },
        {
          prompt: "Which phrase frames one option against another?",
          choices: [
            "Comparado con el barato.",
            "Dependido por el barato.",
            "Discutido a el barato."
          ],
          answer: 0,
          tests: "comparado con as compared with"
        }
      ]
    },
    en: {
      title: "Comparar dos planes de celular",
      situation:
        "Usted está en Auckland ayudando a una amiga colombiana a escoger entre dos planes de celular antes de un viaje por carretera. Hay datos, cobertura y precio sobre la mesa. Necesita usar compare with, compared with y no comparison sin calcar cada preposición del español.",
      setting: {
        who: "Natalia está escogiendo un plan de celular antes de viajar fuera de la ciudad. Chris la ayuda a leer la letra pequeña sin fingir que lo más barato siempre gana.",
        what: "Una comparación de dos planes: precio mensual, datos, cobertura en carretera y flexibilidad del contrato.",
        when: "Una noche entre semana, antes del viaje, con los dos planes abiertos en un portátil y una libreta al lado.",
        where: "Auckland, en una cocina tranquila donde el internet alcanza para revisar los planes con cuidado.",
        why: "Porque comparar con suele volverse compare with, pero el inglés también usa compared with, no comparison y value for money para pesar opciones."
      },
      address: {
        form: "mixed",
        who: "Natalia y Chris son amigos; el inglés usa el mismo you mientras revisan los planes.",
        why: "La conversación es práctica y de confianza. La claridad viene de las frases, no de un pronombre formal.",
        ifYouSwitch:
          "Volverlo demasiado formal sonaría como atención al cliente. En la cocina, “let's compare” basta."
      },
      dialogue: [
        {
          speaker: "Natalia",
          target: "Chris, help me compare this plan with the other one.",
          translation: "Chris, ayúdame a comparar este plan con el otro.",
          pronunciation: "kris, jelp mi kom-PEIR dis plan uid de O-der uan",
          literal: "Chris, ayúdeme a comparar este plan con el otro.",
          why: "Compare with es la estructura transparente para poner dos opciones lado a lado. Compare to también existe, pero with es seguro aquí."
        },
        {
          speaker: "Chris",
          target: "Okay. I'll compare price, data, and coverage.",
          translation: "Listo. Comparo precio, datos y cobertura.",
          pronunciation: "ou-KEI. ail kom-PEIR prais, DEI-ta, and KO-ve-rij",
          literal: "Listo. Compararé precio, datos y cobertura.",
          why: "Compare no cambia por la persona en futuro con will. Lo importante es nombrar criterios reales, no sólo precio."
        },
        {
          speaker: "Natalia",
          target: "Compared with the cheap one, this plan has more data.",
          translation: "Comparado con el barato, este plan trae más datos.",
          pronunciation: "kom-PEIRD uid de chip uan, dis plan jaz mor DEI-ta",
          literal: "Comparado con el barato, este plan tiene más datos.",
          why: "Compared with abre la comparación antes del resultado. Es muy útil para presentar una diferencia con orden."
        },
        {
          speaker: "Chris",
          target: "Yes, but the cheap one works if you only use maps and messages.",
          translation: "Sí, pero el barato sirve si sólo usas mapas y mensajes.",
          pronunciation: "yes, bot de chip uan werks if yu ON-li yuz maps and ME-se-jiz",
          literal: "Sí, pero el barato funciona si usted sólo usa mapas y mensajes.",
          why: "Works mantiene la comparación pegada a la necesidad real. Un plan barato puede servir si el uso es limitado."
        },
        {
          speaker: "Natalia",
          target: "For the road, there is no comparison: I need coverage.",
          translation: "Para la carretera no hay comparación: necesito cobertura.",
          pronunciation: "for de roud, der iz nou kom-PE-ri-son: ai nid KO-ve-rij",
          literal: "Para la carretera no hay comparación: necesito cobertura.",
          why: "There is no comparison es enfático. La cobertura vuelve obvia la decisión para ese viaje."
        },
        {
          speaker: "Chris",
          target: "Then compare the monthly total with the signal it gives you.",
          translation: "Entonces compara el total del mes con la señal que te da.",
          pronunciation: "den kom-PEIR de MON-thli TO-tal uid de SIG-nal it givz yu",
          literal: "Entonces compare el total mensual con la señal que le da.",
          why: "Compare with vuelve a unir dos criterios. La frase enseña valor, no sólo precio."
        }
      ],
      vocabulary: [
        {
          term: "compare",
          explanation:
            "Comparar. Sirve para poner opciones lado a lado y mirar diferencias reales.",
          literal: "comparar",
          useWhen:
            "Úselo para planes, precios, rutas, colegios, apartamentos, celulares, servicios y decisiones con opciones.",
          avoidWhen:
            "No lo use si sólo está eligiendo sin mirar criterios. Compare implica poner elementos lado a lado.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["compare with", "compared with", "comparison", "value"],
          example: {
            target: "Compare this plan with the other one.",
            translation: "Compara este plan con el otro."
          }
        },
        {
          term: "compare with",
          explanation:
            "Comparar con. Es una forma segura cuando nombra las dos opciones de manera práctica.",
          literal: "comparar con",
          useWhen:
            "Úselo para este plan con el otro, esta ruta con esa, o un precio con otro.",
          avoidWhen:
            "No se preocupe demasiado por compare to aquí; with suena natural para esta comparación práctica.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["compare to", "against", "next to", "comparison"],
          example: {
            target: "Compare this plan with the cheap one.",
            translation: "Compara este plan con el barato."
          }
        },
        {
          term: "I'll compare",
          explanation:
            "Compararé o voy a comparar. Will mantiene el verbo base compare igual.",
          literal: "compararé",
          useWhen:
            "Úselo cuando usted se ofrece a pesar criterios o revisar opciones.",
          avoidWhen:
            "No añada una s después de will. La forma es will compare, no will compares.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["compare", "check", "look at", "weigh"],
          example: {
            target: "I'll compare price and coverage.",
            translation: "Comparo precio y cobertura."
          }
        },
        {
          term: "compared with",
          explanation:
            "Comparado con. Sirve para empezar una frase con el punto de comparación.",
          literal: "comparado con",
          useWhen:
            "Úselo antes de decir una diferencia: compared with the cheap one, compared with last month.",
          avoidWhen:
            "No diga compared against en cada caso; puede sonar más competitivo de lo necesario.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["compared to", "in comparison with", "next to", "than"],
          example: {
            target: "Compared with the cheap one, this has more data.",
            translation: "Comparado con el barato, este trae más datos."
          }
        },
        {
          term: "there is no comparison",
          explanation:
            "No hay comparación. Una opción gana claramente en el criterio importante.",
          literal: "no hay comparación",
          useWhen:
            "Úselo cuando la diferencia es obvia por cobertura, calidad, tiempo, comodidad o valor.",
          avoidWhen:
            "No lo use para una diferencia pequeña. La frase es fuerte.",
          register: "neutral emphatic",
          region: "Inglés universal.",
          related: ["no contest", "clearly better", "much better", "comparison"],
          example: {
            target: "For the road, there is no comparison.",
            translation: "Para la carretera no hay comparación."
          }
        },
        {
          term: "coverage",
          explanation:
            "Cobertura, especialmente señal o alcance de un servicio. En un viaje puede pesar más que el precio.",
          literal: "cobertura",
          useWhen:
            "Úselo para planes de celular, seguros, servicios, medios o zonas donde algo debe funcionar.",
          avoidWhen:
            "No compare sólo el monthly price si coverage es la verdadera necesidad.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["signal", "data", "phone plan", "service area"],
          example: {
            target: "I need coverage on the road.",
            translation: "Necesito cobertura en la carretera."
          }
        },
        {
          term: "the cheap one",
          explanation:
            "El barato. Es una forma normal de referirse a una opción ya conocida.",
          literal: "el barato",
          useWhen:
            "Úselo después de que todos saben cuál opción cuesta menos.",
          avoidWhen:
            "No lo use antes de presentar las opciones; puede sonar vago o despectivo.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["the expensive one", "the other one", "option", "plan"],
          example: {
            target: "The cheap one works for maps.",
            translation: "El barato sirve para mapas."
          }
        }
      ],
      note:
        "Compare es sencillo, pero una buena comparación necesita criterios. Diga compare this plan with the other one, use compared with para abrir el contraste, y reserve there is no comparison para diferencias claras. Si habla de viajes, coverage puede importar más que price; el inglés natural deja ver ese criterio.",
      culture: [
        {
          label: "With es una apuesta segura",
          body:
            "El inglés permite compare with y compare to en muchos casos, pero compare with funciona muy bien cuando pone dos opciones prácticas una al lado de la otra."
        },
        {
          label: "No comparison es fuerte",
          body:
            "“There is no comparison” no es una preferencia tímida. Dice que, para el criterio importante, una opción gana claramente."
        },
        {
          label: "Coverage no es detalle menor",
          body:
            "En un viaje, el plan barato puede dejar de ser barato si no hay señal. Por eso coverage es una palabra clave al comparar servicios."
        },
        {
          label: "Value no es sólo price",
          body:
            "El inglés suele hablar de value cuando quiere pesar lo que recibe contra lo que paga. Esa idea ayuda a no quedarse sólo en cheap or expensive."
        }
      ],
      pitfalls: [
        {
          mistake: "“Compare this plan against the other” en todo contexto",
          whyItFails:
            "Against se entiende, pero puede sonar más competitivo. Compare with es más neutral para planes cotidianos.",
          sayInstead: "Compare this plan with the other one."
        },
        {
          mistake: "“There is no conversation” para no hay comparación",
          whyItFails:
            "Comparison y conversation son palabras distintas. La primera habla de comparar; la segunda de conversar.",
          sayInstead: "There is no comparison."
        },
        {
          mistake: "“I will compares the prices.”",
          whyItFails:
            "Después de will, el verbo queda en forma base. No lleva s.",
          sayInstead: "I will compare the prices."
        },
        {
          mistake: "“The plan has cover” para cobertura de celular",
          whyItFails:
            "En este contexto, el sustantivo natural es coverage. Cover puede sonar a tapa o seguro según la frase.",
          sayInstead: "The plan has good coverage."
        }
      ],
      variations: [
        {
          form: "Compare this plan with the other one.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Poner dos opciones claras lado a lado."
        },
        {
          form: "I'll compare price, data, and coverage.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Nombrar los criterios que va a pesar."
        },
        {
          form: "Compared with the cheap one, this has more data.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Presentar una diferencia frente a otra opción."
        },
        {
          form: "For the road, there is no comparison.",
          register: "neutral emphatic",
          region: "Inglés universal",
          whenToUse: "Una opción gana claramente para esa necesidad."
        },
        {
          form: "Compare the signal with the price.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Pesar valor y no sólo costo."
        }
      ],
      prompt: "Natalia says “compare this plan with the other one.” ¿Qué función tiene with?",
      choices: [
        "It introduces the option being compared against.",
        "It means the plan is impossible to compare.",
        "It changes compare into a clothing verb."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase compara dos opciones con naturalidad?",
          choices: [
            "Compare this plan at the other one.",
            "Compare this plan with the other one.",
            "Compare this plan born the other one."
          ],
          answer: 1,
          tests: "compare with for two options"
        },
        {
          prompt: "¿Cuál frase dice que una opción gana claramente?",
          choices: [
            "There is no comparison.",
            "There is no conversation.",
            "There is no preparation."
          ],
          answer: 0,
          tests: "there is no comparison as emphatic choice"
        },
        {
          prompt: "¿Cuál frase usa bien el futuro con will?",
          choices: [
            "I will compares the prices.",
            "I will compared the prices.",
            "I will compare the prices."
          ],
          answer: 2,
          tests: "will plus base verb"
        },
        {
          prompt: "¿Cuál palabra necesita para señal de celular?",
          choices: [
            "Coverage on the road.",
            "Conversation on the road.",
            "Clothing on the road."
          ],
          answer: 0,
          tests: "coverage for phone signal reach"
        }
      ]
    }
  },
  {
    id: "answering-it-depends-about-routes",
    level: "Developing · Weighing it up",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "courteous",
    pathways: ["independent"],
    verb: "depender",
    review: "pending",
    es: {
      title: "Responder depende antes de escoger la ruta",
      situation:
        "Estás en Arauca planeando cómo llegar a una finca al día siguiente. Hay dos rutas, clima cambiante y un carro prestado. Cuando te preguntan cuál es mejor, la respuesta honesta es depende. Tienes que usar depender de y no olvidar la preposición.",
      setting: {
        who: "Maribel knows the roads outside town, and Owen is the guest trying to understand why nobody gives a simple yes-or-no answer.",
        what: "A route decision with weather, road condition, time, luggage, and a borrowed car all affecting the answer.",
        when: "The night before leaving, while rain is starting and everyone is checking messages from relatives.",
        where: "Arauca, at a kitchen table with a paper map, phones, and keys to a borrowed car.",
        why: "Because depende is a complete Colombian answer, and depender de needs its de. The lesson is about honest uncertainty, not avoiding a decision."
      },
      address: {
        form: "usted",
        who: "Maribel uses usted with Owen as a guest she is advising, and Owen mirrors it out of respect.",
        why: "The advice is friendly but practical, and usted keeps the tone careful while they discuss road conditions and family logistics.",
        ifYouSwitch:
          "Tú could work after more closeness, but usted makes the help feel responsible. Vos would not be the safe choice for a visitor here."
      },
      dialogue: [
        {
          speaker: "Owen",
          target: "Maribel, ¿cuál ruta es mejor para salir mañana?",
          translation: "Maribel, which route is better for leaving tomorrow?",
          pronunciation: "mah-ree-BEL, kwal RROO-tah es meh-HOR PAH-rah sah-LEER mah-NYAH-nah",
          literal: "Maribel, which route is better to leave tomorrow?",
          why: "The question asks for a clean answer, but real travel decisions often refuse to be that simple."
        },
        {
          speaker: "Maribel",
          target: "Depende.",
          translation: "It depends.",
          pronunciation: "deh-PEN-deh",
          literal: "It depends.",
          why: "Depende can stand alone as a complete answer. Colombians use it constantly when the honest answer needs conditions."
        },
        {
          speaker: "Owen",
          target: "¿Depende de qué?",
          translation: "Depends on what?",
          pronunciation: "deh-PEN-deh deh keh",
          literal: "Depends of what?",
          why: "The preposition de is not optional. Spanish says depender de algo, just as English says depend on something."
        },
        {
          speaker: "Maribel",
          target: "Depende de la lluvia, del carro y de cuánto afán tengamos.",
          translation: "It depends on the rain, the car, and how much of a hurry we are in.",
          pronunciation: "deh-PEN-deh deh lah YOO-byah, del KAR-roh ee deh KWAN-toh ah-FAN ten-GAH-mos",
          literal: "It depends of the rain, of-the car and of how-much hurry we-have.",
          why: "Once the conditions appear, the preposition can repeat with each factor. That repetition keeps the logic of the route decision clear."
        },
        {
          speaker: "Owen",
          target: "Pues depende de cómo se mire, ¿no?",
          translation: "Well, it depends on how you look at it, right?",
          pronunciation: "pwes deh-PEN-deh deh KOH-moh seh MEE-reh, noh",
          literal: "Well depends of how it is looked, no?",
          why: "Depende de cómo se mire is a classic weighing-it-up phrase. It admits that the answer changes with the criterion."
        },
        {
          speaker: "Maribel",
          target: "Exacto. Si llueve, dependemos de la ruta pavimentada.",
          translation: "Exactly. If it rains, we depend on the paved route.",
          pronunciation: "eg-SAK-toh. see YWEH-beh, deh-pen-DEH-mos deh lah RROO-tah pah-bee-men-TAH-dah",
          literal: "Exactly. If it rains, we-depend of the paved route.",
          why: "Dependemos de is the full verb with a subject. Depende answers; depender de explains what the decision rests on."
        }
      ],
      vocabulary: [
        {
          term: "depender",
          explanation:
            "To depend. It needs de before the thing that controls the answer or outcome.",
          literal: "to depend",
          useWhen:
            "Use it when a decision, result, route, price, plan, or answer rests on a condition.",
          avoidWhen:
            "Avoid dropping de. Spanish depends de something, even though English uses on.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["depende", "depender de", "dependemos de", "según"],
          example: {
            target: "Dependemos de la ruta pavimentada.",
            translation: "We depend on the paved route."
          }
        },
        {
          term: "depende",
          explanation:
            "It depends. In Colombia this is an extremely common complete answer, often with a pause after it.",
          literal: "it depends",
          useWhen:
            "Use it when the honest answer is conditional and you need to hear or name the factor first.",
          avoidWhen:
            "Avoid treating it as evasive every time. Often it is the most accurate answer.",
          register: "neutral",
          region: "Very common Colombian and universal Spanish.",
          related: ["pues depende", "depende de", "según", "a veces"],
          example: {
            target: "Depende.",
            translation: "It depends."
          }
        },
        {
          term: "depender de",
          explanation:
            "To depend on. The de is part of the pattern and must appear before the condition.",
          literal: "to depend of",
          useWhen:
            "Use it with the thing that decides the answer: de la lluvia, del precio, de la hora, de usted.",
          avoidWhen:
            "Avoid “depende la lluvia.” That sounds like the condition is missing its preposition.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["depende de qué", "depende del", "depende de si", "depende de cómo"],
          example: {
            target: "Depende de la lluvia.",
            translation: "It depends on the rain."
          }
        },
        {
          term: "pues depende",
          explanation:
            "Well, it depends. Pues softens the answer and gives the speaker time to name the condition.",
          literal: "well depends",
          useWhen:
            "Use it when someone asks for a simple answer and you need to slow the decision down.",
          avoidWhen:
            "Avoid overusing it to dodge responsibility. Follow it with the condition when clarity matters.",
          register: "friendly informal",
          region: "Very common Colombian Spanish.",
          related: ["depende", "pues sí", "pues no", "depende de"],
          example: {
            target: "Pues depende de la hora.",
            translation: "Well, it depends on the time."
          }
        },
        {
          term: "depende de cómo se mire",
          explanation:
            "It depends on how you look at it. A useful phrase when different criteria produce different answers.",
          literal: "it depends on how it is looked",
          useWhen:
            "Use it when price, speed, comfort, safety, or convenience could each change the answer.",
          avoidWhen:
            "Avoid it when there is a clear fact and no real angle to weigh. Then it may sound evasive.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["según", "por un lado", "por otro lado", "criterio"],
          example: {
            target: "Depende de cómo se mire.",
            translation: "It depends on how you look at it."
          }
        },
        {
          term: "dependemos de",
          explanation:
            "We depend on. This is the nosotros form when the group relies on a condition or resource.",
          literal: "we depend of",
          useWhen:
            "Use it for group plans that rely on weather, transport, money, time, or another person.",
          avoidWhen:
            "Avoid forgetting de after the verb. Dependemos la ruta is incomplete.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["dependo de", "depende de", "dependen de", "contar con"],
          example: {
            target: "Dependemos de la ruta pavimentada.",
            translation: "We depend on the paved route."
          }
        },
        {
          term: "afán",
          explanation:
            "Hurry or urgency. In Colombia, tener afán means being in a hurry.",
          literal: "urgency",
          useWhen:
            "Use it when time pressure changes the best option, route, answer, or tone.",
          avoidWhen:
            "Avoid translating it as eagerness in this travel context. It is about hurry, not enthusiasm.",
          register: "neutral",
          region: "Very common Colombian Spanish.",
          related: ["tener afán", "de afán", "sin afán", "prisa"],
          example: {
            target: "Depende de cuánto afán tengamos.",
            translation: "It depends on how much of a hurry we are in."
          }
        }
      ],
      note:
        "Depende is one of the most useful complete answers in Colombian Spanish. It is not automatically evasive; it often means the speaker is refusing a fake yes-or-no. When you name the condition, keep de: depende de la lluvia, depende del precio, depende de cómo se mire. Without de, the sentence sounds unfinished.",
      culture: [
        {
          label: "Depende can be honest",
          body:
            "Colombians use depende constantly because many practical decisions really are conditional: weather, transport, money, time, family, and who is coming. A quick depende may be the beginning of precision, not the end of responsibility."
        },
        {
          label: "Pues buys thinking time",
          body:
            "Pues depende gives the speaker a second to weigh the conditions. It softens the answer and signals that a simple yes-or-no would be too quick."
        },
        {
          label: "The de carries the logic",
          body:
            "Depender de is a pattern worth memorizing whole. The preposition points to the thing controlling the answer. Dropping it makes the sentence feel as if the hinge is missing."
        },
        {
          label: "Routes are conditional decisions",
          body:
            "A route can be best in dry weather and wrong in rain, good in daylight and bad at night, cheap with one car and expensive with another. Depende is the grammar of those conditions."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “depende la lluvia”",
          whyItFails:
            "Depender needs de before the condition. Without it, the sentence sounds clipped or wrong.",
          sayInstead: "Depende de la lluvia."
        },
        {
          mistake: "Treating “depende” as incomplete every time",
          whyItFails:
            "Depende alone is a normal complete answer when the condition is obvious or about to be explained.",
          sayInstead: "Depende. / Pues depende."
        },
        {
          mistake: "Translating “depend on” as “depender en”",
          whyItFails:
            "English uses on, but Spanish uses de. The preposition must follow the Spanish verb, not the English one.",
          sayInstead: "Depender de."
        },
        {
          mistake: "Using depende to avoid giving any criteria",
          whyItFails:
            "Depende is useful when it leads to conditions. If you never say what it depends on, people may hear evasion.",
          sayInstead: "Depende del precio y de la hora."
        }
      ],
      variations: [
        {
          form: "Depende.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The complete it-depends answer when the conditions matter."
        },
        {
          form: "Pues depende.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Softening the answer while you think or prepare the condition."
        },
        {
          form: "Depende de la lluvia.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Naming the condition that controls the decision."
        },
        {
          form: "Depende de cómo se mire.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Different criteria would produce different answers."
        },
        {
          form: "Dependemos de la ruta pavimentada.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The group relies on one condition or resource."
        },
        {
          form: "Depende de si ya abrieron la variante.",
          register: "courteous",
          region: "General Colombian",
          whenToUse: "Naming the one fact the answer hangs on. It turns a vague depende into something useful."
        }
      ],
      prompt: "Maribel answers only “depende.” Why is that enough?",
      choices: [
        "Because depende can be a complete it-depends answer.",
        "Because depender never allows a condition after it.",
        "Because depende means the route is already chosen."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence keeps the required preposition?",
          choices: [
            "Depende la lluvia.",
            "Depende en la lluvia.",
            "Depende de la lluvia."
          ],
          answer: 2,
          tests: "depender de with de"
        },
        {
          prompt: "Which answer sounds natural while weighing options?",
          choices: [
            "Pues depende.",
            "Pues compara.",
            "Pues discute."
          ],
          answer: 0,
          tests: "pues depende as a common complete answer"
        },
        {
          prompt: "Which phrase means the answer changes with the angle?",
          choices: [
            "Depende de cómo se mire.",
            "Depende de cómo se grite.",
            "Depende de cómo se pruebe."
          ],
          answer: 0,
          tests: "depende de cómo se mire"
        },
        {
          prompt: "Which sentence says the group relies on a route?",
          choices: [
            "Discutimos de la ruta pavimentada.",
            "Dependemos de la ruta pavimentada.",
            "Comparamos de la ruta pavimentada."
          ],
          answer: 1,
          tests: "dependemos de for group reliance"
        }
      ]
    },
    en: {
      title: "Responder depende antes de escoger la ruta",
      situation:
        "Usted está en Chicago planeando cómo llegar a una finca con una familia colombiana al día siguiente. Hay dos rutas, clima cambiante y un carro prestado. Necesita decir it depends, depends on y it depends how you look at it sin olvidar on en inglés.",
      setting: {
        who: "Maribel conoce las carreteras fuera de la ciudad, y Owen intenta entender por qué nadie da una respuesta simple de sí o no.",
        what: "Una decisión de ruta donde clima, estado de la vía, tiempo, equipaje y carro prestado afectan la respuesta.",
        when: "La noche antes de salir, mientras empieza a llover y todos revisan mensajes de familiares.",
        where: "Chicago, en la mesa de una cocina con mapa de papel, teléfonos y llaves de un carro prestado.",
        why: "Porque depende suele traducirse como it depends, y depender de como depend on. La preposición inglesa on también es obligatoria."
      },
      address: {
        form: "mixed",
        who: "Maribel y Owen usan nombres de pila; el inglés no cambia you aunque el consejo sea cuidadoso.",
        why: "La prudencia se oye en “it depends” y en nombrar condiciones, no en otro pronombre.",
        ifYouSwitch:
          "Volverlo demasiado formal haría sonar el consejo como contrato. En una cocina, la claridad práctica basta."
      },
      dialogue: [
        {
          speaker: "Owen",
          target: "Maribel, which route is better for leaving tomorrow?",
          translation: "Maribel, ¿cuál ruta es mejor para salir mañana?",
          pronunciation: "mah-ri-BEL, uich rut iz BE-ter for LI-ving tu-MO-rou",
          literal: "Maribel, ¿cuál ruta es mejor para salir mañana?",
          why: "La pregunta pide una respuesta limpia, pero las decisiones reales de viaje suelen depender de condiciones."
        },
        {
          speaker: "Maribel",
          target: "It depends.",
          translation: "Depende.",
          pronunciation: "it di-PENDZ",
          literal: "Eso depende.",
          why: "It depends es una respuesta completa en inglés. No necesita añadir on si todavía no nombra la condición."
        },
        {
          speaker: "Owen",
          target: "Depends on what?",
          translation: "¿Depende de qué?",
          pronunciation: "di-PENDZ on uat",
          literal: "¿Depende en qué?",
          why: "Cuando aparece la condición, el inglés usa on. La preposición no se omite: depends on what."
        },
        {
          speaker: "Maribel",
          target: "It depends on the rain, the car, and how much of a hurry we're in.",
          translation: "Depende de la lluvia, del carro y de cuánto afán tengamos.",
          pronunciation: "it di-PENDZ on de rein, de car, and jau moch ov a JE-ri uir in",
          literal: "Depende en la lluvia, el carro y cuánta prisa tenemos dentro.",
          why: "Depends on introduce las condiciones. Rain, car and hurry son los factores que controlan la decisión."
        },
        {
          speaker: "Owen",
          target: "So it depends how you look at it, right?",
          translation: "Entonces depende de cómo se mire, ¿no?",
          pronunciation: "sou it di-PENDZ jau yu luk at it, rait",
          literal: "Entonces depende cómo usted lo mira, ¿cierto?",
          why: "It depends how you look at it es una frase común. También puede decir it depends on how you look at it; ambas se oyen."
        },
        {
          speaker: "Maribel",
          target: "Exactly. If it rains, we depend on the paved route.",
          translation: "Exacto. Si llueve, dependemos de la ruta pavimentada.",
          pronunciation: "eg-ZAKT-li. if it reinz, ui di-PEND on de peivd rut",
          literal: "Exacto. Si llueve, dependemos en la ruta pavimentada.",
          why: "We depend on es el verbo completo con sujeto. It depends responde; depend on explica en qué se apoya el plan."
        }
      ],
      vocabulary: [
        {
          term: "depend",
          explanation:
            "Depender. Necesita on cuando nombra la condición o el apoyo.",
          literal: "depender",
          useWhen:
            "Úselo cuando una decisión, resultado, precio, ruta o plan se apoya en una condición.",
          avoidWhen:
            "No olvide on antes de la condición. En inglés no se dice depend the rain.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["depends", "depend on", "it depends", "condition"],
          example: {
            target: "We depend on the paved route.",
            translation: "Dependemos de la ruta pavimentada."
          }
        },
        {
          term: "it depends",
          explanation:
            "Depende. Es una respuesta completa cuando todavía no ha nombrado la condición.",
          literal: "eso depende",
          useWhen:
            "Úselo cuando la respuesta honesta necesita condiciones antes de decidir.",
          avoidWhen:
            "No añada on si la frase termina ahí. It depends on necesita un objeto después.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["depends", "it depends on", "maybe", "not always"],
          example: {
            target: "It depends.",
            translation: "Depende."
          }
        },
        {
          term: "depend on",
          explanation:
            "Depender de. On es la preposición inglesa que introduce la condición.",
          literal: "depender en",
          useWhen:
            "Úselo con lluvia, precio, tiempo, persona, ruta, dinero o cualquier factor que controla el resultado.",
          avoidWhen:
            "No diga depend of por calco de depender de. En inglés es depend on.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["depends on what", "depend on whether", "depend on how", "depends"],
          example: {
            target: "It depends on the rain.",
            translation: "Depende de la lluvia."
          }
        },
        {
          term: "well, it depends",
          explanation:
            "Pues depende. Well suaviza la respuesta y da tiempo para explicar la condición.",
          literal: "bueno, eso depende",
          useWhen:
            "Úselo cuando alguien pide una respuesta simple y usted necesita matizar.",
          avoidWhen:
            "No lo use para esquivar todas las decisiones. Añada el factor cuando importa.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["it depends", "well", "maybe", "on the one hand"],
          example: {
            target: "Well, it depends on the time.",
            translation: "Pues depende de la hora."
          }
        },
        {
          term: "it depends how you look at it",
          explanation:
            "Depende de cómo se mire. La respuesta cambia según el criterio.",
          literal: "depende cómo usted lo mira",
          useWhen:
            "Úselo cuando precio, rapidez, comodidad o seguridad pueden cambiar la respuesta.",
          avoidWhen:
            "No lo use cuando hay un dato claro y ninguna perspectiva real que comparar.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["depends on how", "point of view", "criteria", "perspective"],
          example: {
            target: "It depends how you look at it.",
            translation: "Depende de cómo se mire."
          }
        },
        {
          term: "we depend on",
          explanation:
            "Dependemos de. La frase nombra aquello que sostiene o condiciona al grupo.",
          literal: "dependemos en",
          useWhen:
            "Úselo para planes de grupo que dependen del clima, transporte, dinero, tiempo o una persona.",
          avoidWhen:
            "No lo deje sin objeto si quiere explicar la condición. We depend on necesita algo después.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I depend on", "they depend on", "rely on", "count on"],
          example: {
            target: "We depend on the paved route.",
            translation: "Dependemos de la ruta pavimentada."
          }
        },
        {
          term: "hurry",
          explanation:
            "Afán o prisa. La frase be in a hurry significa tener afán.",
          literal: "prisa",
          useWhen:
            "Úselo cuando la presión de tiempo cambia la ruta, el plan o la respuesta.",
          avoidWhen:
            "No lo traduzca como eagerness en esta escena. Aquí no es entusiasmo, es falta de tiempo.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["in a hurry", "rush", "time pressure", "urgent"],
          example: {
            target: "It depends how much of a hurry we're in.",
            translation: "Depende de cuánto afán tengamos."
          }
        }
      ],
      note:
        "It depends puede ser una frase completa. Si añade la condición, use on: it depends on the rain, on the price, on how much time we have. No diga depend of por traducir depender de. Para matizar, well, it depends suena natural; para explicar perspectivas, it depends how you look at it funciona muy bien.",
      culture: [
        {
          label: "It depends no siempre evade",
          body:
            "En inglés, como en español, it depends puede ser una respuesta honesta. Muchas decisiones prácticas no merecen sí o no hasta que se nombren los factores."
        },
        {
          label: "On sostiene la frase",
          body:
            "El calco depend of es común para hispanohablantes, pero el inglés exige on. Memorice depend on como bloque, no como dos decisiones separadas."
        },
        {
          label: "Well suaviza",
          body:
            "Well, it depends baja la brusquedad de negar una respuesta simple. Le da al hablante espacio para pensar y explicar."
        },
        {
          label: "Hurry cambia la mejor opción",
          body:
            "Una ruta puede ser mejor con tiempo y peor con afán. Por eso in a hurry es una frase práctica: mete la presión de tiempo dentro de la comparación."
        }
      ],
      pitfalls: [
        {
          mistake: "“It depends of the rain.”",
          whyItFails:
            "Es un calco de depender de. En inglés la preposición correcta es on.",
          sayInstead: "It depends on the rain."
        },
        {
          mistake: "“It depends on.” como respuesta completa",
          whyItFails:
            "Si usa on, necesita decir on what. Sin condición, la frase completa es it depends.",
          sayInstead: "It depends."
        },
        {
          mistake: "“Depends the price.”",
          whyItFails:
            "Falta on antes de la condición. Depend necesita esa preposición en inglés.",
          sayInstead: "It depends on the price."
        },
        {
          mistake: "“I have hurry.”",
          whyItFails:
            "El inglés no usa have con hurry como el español tener afán. La frase es be in a hurry.",
          sayInstead: "I'm in a hurry."
        }
      ],
      variations: [
        {
          form: "It depends.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "La respuesta completa cuando la decisión tiene condiciones."
        },
        {
          form: "Well, it depends.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Suavizar la respuesta mientras piensa."
        },
        {
          form: "It depends on the rain.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Nombrar la condición que controla el plan."
        },
        {
          form: "It depends how you look at it.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "La respuesta cambia según el criterio."
        },
        {
          form: "We depend on the paved route.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "El grupo se apoya en una condición o recurso."
        },
        {
          form: "They must have closed the shortcut, didn't they?",
          register: "courteous",
          region: "Inglés universal",
          whenToUse: "Para deducir algo y pedir confirmación a la vez. “Must have closed” es la deducción; la coletilla invita al otro a corregirla."
        }
      ],
      prompt: "Maribel answers “it depends.” ¿Por qué la frase está completa?",
      choices: [
        "Because it depends can stand alone before naming conditions.",
        "Because depend never allows any condition after it.",
        "Because it means the route is already chosen."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa la preposición correcta?",
          choices: [
            "It depends the rain.",
            "It depends of the rain.",
            "It depends on the rain."
          ],
          answer: 2,
          tests: "depend on, not depend of"
        },
        {
          prompt: "¿Cuál respuesta suena natural mientras sopesa opciones?",
          choices: [
            "Well, it depends.",
            "Well, it compares.",
            "Well, it argues."
          ],
          answer: 0,
          tests: "well, it depends as a complete answer"
        },
        {
          prompt: "¿Cuál frase habla del punto de vista?",
          choices: [
            "It depends how you look at it.",
            "It depends how you shout at it.",
            "It depends how you wear it."
          ],
          answer: 0,
          tests: "it depends how you look at it"
        },
        {
          prompt: "¿Cuál frase dice que el grupo depende de una ruta?",
          choices: [
            "We argue on the paved route.",
            "We depend on the paved route.",
            "We taste on the paved route."
          ],
          answer: 1,
          tests: "we depend on for group reliance"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/54-developing-weighing-it-up.js");
