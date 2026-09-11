/*
 * Lesson block: developing / what happened and how it turned out.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Every lesson spines on exactly one verb from data/curriculum.js, named in its
 * `verb` field so the coverage report can prove the curriculum is actually
 * taught rather than merely listed.
 *
 * The two directions are mirrors: same number of dialogue turns, same number of
 * vocabulary entries, same number of culture notes, pitfalls, variations and
 * practice questions, and the same optional slots filled on the same rows.
 */
lessons.push(
  {
    id: "ocurrirse-una-salida-en-ibague",
    level: "Developing · What happened",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "civic-and-services",
    register: "familiar",
    verb: "ocurrir",
    review: "pending",
    es: {
      title: "Telling what happened in Ibagué",
      situation:
        "You are in Ibagué after the plan to go up to the lookout was ruined by heavy rain. You have to explain what happened without sounding like a police report, admit that on the street everyone would ask “qué pasó”, and use the verb’s most useful phrase: “se me ocurrió una salida”.",
      setting: {
        who: "Carolina organized a small afternoon outing and is trying to keep the group calm. Alex noticed the problem first and came up with an alternate plan.",
        what: "A careful retelling of a small mishap: what happened, what idea occurred to Alex, and what option might still work.",
        when: "Late afternoon, after a sudden downpour changed the plan but before the group gives up on the day.",
        where: "Ibagué, near a bus stop on the way to a lookout, with wet streets and a group chat filling with questions.",
        why: "Because pasar is the everyday verb for happen — “¿qué pasó?” — while ocurrir sounds more careful, narrative or written. The real prize is “se me ocurrió,” which means an idea came to me, not that I happened."
      },
      address: {
        form: "tú",
        who: "Carolina and Alex use tú because they are friends coordinating a plan with the same group.",
        why: "The register is careful because the story is being reconstructed, not because the relationship is formal. Tú keeps the conversation natural.",
        ifYouSwitch:
          "Usted would make the exchange sound like a report to an official. Vos would not be impossible in Colombia, but it is not needed for a general Ibagué scene."
      },
      dialogue: [
        {
          speaker: "Carolina",
          target: "Alex, ¿qué fue lo que ocurrió con el mirador?",
          translation: "Alex, what exactly happened with the lookout?",
          pronunciation: "AH-leks, keh fue loh keh oh-koo-RRYOH kon el mee-rah-DOR",
          literal: "Alex, what was what occurred with the lookout?",
          why: "Carolina could simply ask “¿qué pasó?” In choosing “lo que ocurrió,” she makes the question more careful, as if the group needs the sequence, not just the headline."
        },
        {
          speaker: "Alex",
          target: "Ocurrió que cerraron la subida por la lluvia y nadie avisó a tiempo.",
          translation: "What happened is that they closed the climb because of the rain and nobody warned us in time.",
          pronunciation: "oh-koo-RRYOH keh seh-RRAH-ron lah soo-BEE-dah por lah YOO-byah ee NAH-dyeh ah-bee-SOH ah TYEM-poh",
          literal: "It-occurred that they-closed the climb because-of the rain and nobody warned in time.",
          why: "“Ocurrió que...” is a narrative frame. It belongs in a careful account; in fast speech, most Colombians would reach for “pasó que...” instead."
        },
        {
          speaker: "Carolina",
          target: "Entonces no fue culpa de nadie. ¿Se te ocurre otra salida?",
          translation: "So it wasn't anyone's fault. Can you think of another way out?",
          pronunciation: "en-TON-ses no fue KOOL-pah deh NAH-dyeh. seh teh oh-KOO-rreh OH-trah sah-LEE-dah",
          literal: "Then not was fault of nobody. To-you occurs another exit?",
          why: "Now ocurrir stops meaning happen. “¿Se te ocurre...?” asks whether an idea comes to mind, with te marking the person who gets the idea."
        },
        {
          speaker: "Alex",
          target: "Se me ocurrió ir al conservatorio; queda bajo techo y está cerca.",
          translation: "It occurred to me to go to the conservatory; it's indoors and nearby.",
          pronunciation: "seh meh oh-koo-RRYOH eer al kon-ser-bah-TOH-ryoh; KEH-dah BAH-hoh TEH-choh ee es-TAH SER-kah",
          literal: "To-me occurred to-go to-the conservatory; it-stays under roof and is near.",
          why: "“Se me ocurrió” is the highest-value pattern here. Spanish treats the idea as something that occurred to Alex, not as something Alex actively manufactured."
        },
        {
          speaker: "Carolina",
          target: "Buena idea. En el mensaje, contemos primero lo que ocurrió y luego la nueva ruta.",
          translation: "Good idea. In the message, let's first tell what happened and then the new route.",
          pronunciation: "BWEH-nah ee-DEH-ah. en el men-SAH-heh, kon-TEH-mos pree-MEH-roh loh keh oh-koo-RRYOH ee LWEH-goh lah NWEH-bah ROO-tah",
          literal: "Good idea. In the message, let's-tell first what occurred and later the new route.",
          why: "“Lo que ocurrió” is useful in written updates because it packages the event as a thing the message can explain before moving to the solution."
        },
        {
          speaker: "Alex",
          target: "Listo: no digamos que ocurrió un desastre; sólo cambió el plan.",
          translation: "Done: let's not say a disaster occurred; the plan just changed.",
          pronunciation: "LEES-toh: no dee-GAH-mos keh oh-koo-RRYOH oon deh-SAS-treh; SOH-loh kam-BYOH el plan",
          literal: "Ready: not let's-say that occurred a disaster; only changed the plan.",
          why: "Ocurrir can make a small problem sound bigger than it is. Alex keeps the register from turning a wet afternoon into an incident report."
        }
      ],
      vocabulary: [
        {
          term: "ocurrir",
          explanation:
            "To occur or happen, usually in a more careful, written or narrative register than everyday pasar.",
          literal: "to occur",
          useWhen:
            "You are recounting an event carefully, writing an update, or asking about the sequence of what happened.",
          avoidWhen:
            "You just want the ordinary Colombian “what happened?” The natural question is “¿qué pasó?” not “¿qué ocurrió?” in most casual moments.",
          register: "careful neutral",
          region: "General Spanish; in Colombia it is understood but more formal than pasar.",
          related: ["pasar", "suceder", "presentarse", "darse"],
          example: {
            target: "¿Qué fue lo que ocurrió?",
            translation: "What exactly happened?"
          }
        },
        {
          term: "se me ocurrió",
          explanation:
            "It occurred to me; I had an idea. This is not the happen meaning at all.",
          literal: "to-me it occurred",
          useWhen:
            "An idea comes to mind, especially a possible solution, excuse, plan or question.",
          avoidWhen:
            "Translating it as “I occurred.” The idea is the grammatical subject, and you are the person it came to.",
          register: "neutral conversational",
          region: "General Colombian and broader Spanish.",
          related: ["se te ocurre", "se le ocurrió", "tener una idea", "pensar en algo"],
          example: {
            target: "Se me ocurrió ir al conservatorio.",
            translation: "It occurred to me to go to the conservatory."
          }
        },
        {
          term: "¿se te ocurre algo?",
          explanation:
            "Can you think of anything? Does anything occur to you?",
          literal: "to-you occurs something?",
          useWhen:
            "You want ideas from a friend without demanding a perfect answer.",
          avoidWhen:
            "Using it with usted. Then it becomes “¿se le ocurre algo?”",
          register: "friendly neutral",
          region: "General Spanish.",
          related: ["¿qué propones?", "¿alguna idea?", "¿qué hacemos?", "¿se le ocurre algo?"],
          example: {
            target: "¿Se te ocurre otra salida?",
            translation: "Can you think of another way out?"
          }
        },
        {
          term: "lo que ocurrió",
          explanation:
            "What happened, packaged as the thing you are going to explain or recount.",
          literal: "that which occurred",
          useWhen:
            "Writing a message, giving an account, or separating the event from what you will do next.",
          avoidWhen:
            "Overusing it in casual chat. “Lo que pasó” is often the more normal everyday version.",
          register: "careful conversational",
          region: "General Spanish.",
          related: ["lo que pasó", "el hecho", "la situación", "el incidente"],
          example: {
            target: "Contemos primero lo que ocurrió.",
            translation: "Let's first tell what happened."
          }
        },
        {
          term: "ocurrió que",
          explanation:
            "A narrative frame meaning “what happened is that...”",
          literal: "it occurred that",
          useWhen:
            "You need to give the reason or sequence behind a plan change in a careful way.",
          avoidWhen:
            "Beginning every story with it. In conversation, “pasó que...” is usually lighter.",
          register: "narrative careful",
          region: "General Spanish.",
          related: ["pasó que", "resulta que", "la cosa fue que", "sucede que"],
          example: {
            target: "Ocurrió que cerraron la subida.",
            translation: "What happened is that they closed the climb."
          }
        },
        {
          term: "otra salida",
          explanation:
            "Another way out, another solution or another option when a plan fails.",
          literal: "another exit",
          useWhen:
            "A practical problem needs an alternate plan, not a philosophical answer.",
          avoidWhen:
            "Thinking it only means a physical door. In planning talk, salida often means solution.",
          register: "neutral",
          region: "General Colombian.",
          related: ["alternativa", "plan B", "solución", "opción"],
          example: {
            target: "¿Se te ocurre otra salida?",
            translation: "Can you think of another way out?"
          }
        },
        {
          term: "nadie avisó a tiempo",
          explanation:
            "Nobody warned us in time. It gives the missing piece without making the whole story dramatic.",
          literal: "nobody warned at time",
          useWhen:
            "Explaining why a group arrived with old information or changed plans too late.",
          avoidWhen:
            "Turning a small communication failure into blame unless that is really the point.",
          register: "neutral conversational",
          region: "General Spanish.",
          related: ["avisar tarde", "a última hora", "sin aviso", "malentendido"],
          example: {
            target: "Nadie avisó a tiempo.",
            translation: "Nobody warned us in time."
          }
        }
      ],
      note:
        "The Colombian everyday question is “¿qué pasó?” Ocurrir is not wrong; it is simply heavier, better for a careful account, a written message, or a more formal question. The pattern that deserves real space is “se me ocurrió”: an idea occurred to me. That construction works like gustar in spirit — the idea is the thing doing the verb, and me, te or le marks the person who receives it.",
      culture: [
        {
          label: "Do not sound like an incident report",
          body:
            "A learner who uses ocurrir for every “happen” will be understood, but may sound like they are narrating for a form. Colombians say “¿qué pasó?” constantly. Use ocurrir when the account is more careful, not because it is the only correct verb."
        },
        {
          label: "Ideas arrive in Spanish",
          body:
            "“Se me ocurrió” pictures an idea as something that comes to you. That is why the person appears as me, te or le. The grammar feels indirect because the idea, not the thinker, is center stage."
        },
        {
          label: "Ibagué as an ordinary stage",
          body:
            "A changed plan, a rainstorm and a group message could happen anywhere. Setting it in Ibagué widens the map without inventing local expressions. The useful Colombian detail is the register choice between pasar and ocurrir."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “¿qué ocurrió?” for every casual “what happened?”",
          whyItFails:
            "It is grammatical, but often sounds too formal for ordinary Colombian speech. The everyday reflex is “¿qué pasó?”",
          sayInstead: "Use “¿qué pasó?” casually and “¿qué ocurrió?” for a careful account."
        },
        {
          mistake: "Translating “se me ocurrió” as “I occurred”",
          whyItFails:
            "The Spanish subject is the idea, not the person. Me marks the person the idea came to.",
          sayInstead: "Se me ocurrió una salida."
        },
        {
          mistake: "Practicing “yo ocurro” as if it were useful",
          whyItFails:
            "Ocurrir is overwhelmingly third-person in real life: ocurrió, ocurre, ocurren, se me ocurrió.",
          sayInstead: "Spend your energy on “ocurrió,” “lo que ocurrió,” and “se me ocurrió.”"
        }
      ],
      variations: [
        {
          form: "¿Qué fue lo que ocurrió?",
          register: "careful conversational",
          region: "General Spanish",
          whenToUse: "Asking for a more ordered account than casual “¿qué pasó?”"
        },
        {
          form: "Se me ocurrió una salida.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "Saying an idea or solution came to mind."
        },
        {
          form: "¿Se te ocurre algo?",
          register: "friendly neutral",
          region: "General Spanish",
          whenToUse: "Inviting ideas from someone you address with tú."
        },
        {
          form: "Contemos primero lo que ocurrió.",
          register: "careful written",
          region: "General Spanish",
          whenToUse: "Writing an update that explains the event before the new plan."
        }
      ],
      prompt: "Alex says “se me ocurrió ir al conservatorio.” What does that mean?",
      choices: [
        "An alternate idea came to him for the group plan.",
        "A formal incident happened at the conservatory.",
        "Alex personally happened to the whole group."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which line is the everyday Colombian way to ask “what happened?”",
          choices: [
            "¿Qué pasó con el plan?",
            "¿Qué ocurrió jurídicamente?",
            "¿Qué sucedió oficialmente?"
          ],
          answer: 0,
          tests: "pasar as the everyday happen verb"
        },
        {
          prompt: "Which sentence correctly asks if a friend has an idea?",
          choices: [
            "¿Tú ocurres una idea?",
            "¿Se te ocurre algo?",
            "¿Te ocurres de algo?"
          ],
          answer: 1,
          tests: "se te ocurre with indirect object"
        },
        {
          prompt: "Which phrase best fits a careful written update?",
          choices: [
            "Lo que ocurrió con la ruta.",
            "Yo ocurro con mucha frecuencia.",
            "Me ocurrió yo mismo ayer."
          ],
          answer: 0,
          tests: "lo que ocurrió as a careful account frame"
        },
        {
          prompt: "Which form should you practice most for ocurrir?",
          choices: [
            "Yo ocurro en el grupo.",
            "Tú ocurres la respuesta.",
            "Se me ocurrió una idea."
          ],
          answer: 2,
          tests: "third-person and idea patterns over yo ocurro"
        }
      ]
    },
    en: {
      title: "Contar lo que ocurrió en Ibagué",
      situation:
        "Usted está en Liverpool después de que una lluvia cambió un plan de salida. Necesita contar en inglés what happened sin sonar demasiado formal, y también decir it occurred to me cuando se le ocurre una solución.",
      setting: {
        who: "Carolina organizó una salida pequeña y está tratando de mantener tranquilo al grupo. Alex notó el problema primero y pensó en un plan alterno.",
        what: "Un recuento cuidadoso de un contratiempo: qué pasó, qué idea se le ocurrió a Alex y qué opción todavía sirve.",
        when: "Al final de la tarde, después de un aguacero repentino y antes de que el grupo dé el día por perdido.",
        where: "Liverpool, cerca de una parada de bus camino a un mirador urbano, porque esta dirección enseña inglés y ocurre fuera de Colombia.",
        why: "Porque happen es el verbo normal para pasar. Occur existe, pero suena más formal; la estructura valiosa es it occurred to me, que equivale a se me ocurrió."
      },
      address: {
        form: "mixed",
        who: "Carolina y Alex usan nombres de pila y el mismo “you”; la cercanía está en el ritmo y no en el pronombre.",
        why: "El inglés no distingue tú y usted. Lo importante aquí es elegir entre what happened y what occurred según el registro.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Lo que sí cambiaría el tono sería usar occur para cada frase cotidiana y sonar como un informe."
      },
      dialogue: [
        {
          speaker: "Carolina",
          target: "Alex, what exactly happened with the lookout?",
          translation: "Alex, ¿qué fue exactamente lo que pasó con el mirador?",
          pronunciation: "A-leks, wat eg-ZAKT-li JA-pend uid da LUK-aut",
          literal: "Alex, ¿qué exactamente pasó con el mirador?",
          why: "What happened es la pregunta normal. What occurred sería posible, pero más formal de lo que pide una salida entre amigos."
        },
        {
          speaker: "Alex",
          target: "What happened is that they closed the path because of the rain.",
          translation: "Lo que pasó es que cerraron el camino por la lluvia.",
          pronunciation: "wat JA-pend iz dat dei klouzd da path bi-KOZ ov da rein",
          literal: "Lo que pasó es que ellos cerraron el camino por la lluvia.",
          why: "What happened is that... organiza el relato sin volverlo burocrático. Es el equivalente cotidiano de ocurrió que."
        },
        {
          speaker: "Carolina",
          target: "So it wasn't anyone's fault. Can you think of another option?",
          translation: "Entonces no fue culpa de nadie. ¿Se te ocurre otra opción?",
          pronunciation: "so it WA-zent E-ni-wans folt. kan yu think ov a-NA-der OP-shon",
          literal: "Entonces no era culpa de nadie. ¿Puede pensar en otra opción?",
          why: "Can you think of...? es muchas veces más natural que does something occur to you? para pedir ideas en conversación normal."
        },
        {
          speaker: "Alex",
          target: "It occurred to me that we could go to the music hall instead.",
          translation: "Se me ocurrió que podríamos ir mejor al salón de música.",
          pronunciation: "it a-KERD tu mi dat ui kud gou tu da MIU-zik jol in-STED",
          literal: "Ocurrió a mí que podríamos ir al salón de música en cambio.",
          why: "It occurred to me es la traducción directa y natural de se me ocurrió. Aquí occur no significa happen, sino que una idea llegó a la mente."
        },
        {
          speaker: "Carolina",
          target: "Good idea. In the message, explain what happened first, then the new plan.",
          translation: "Buena idea. En el mensaje, explica primero qué pasó y luego el plan nuevo.",
          pronunciation: "gud ai-DI-a. in da ME-sech, eks-PLEIN wat JA-pend ferst, den da niu plan",
          literal: "Buena idea. En el mensaje, explique lo que pasó primero, luego el nuevo plan.",
          why: "La frase “what happened” también sirve por escrito. El inglés no exige “occur” sólo porque la oración esté ordenada."
        },
        {
          speaker: "Alex",
          target: "Right. We shouldn't make it sound like an incident occurred.",
          translation: "Claro. No deberíamos hacerlo sonar como si hubiera ocurrido un incidente.",
          pronunciation: "rait. ui SHU-dent meik it saund laik an IN-si-dent a-KERD",
          literal: "Correcto. No deberíamos hacerlo sonar como un incidente ocurrió.",
          why: "La frase “an incident occurred” es inglés real, pero suena oficial. Alex sabe que ese registro volvería demasiado pesado el problema pequeño."
        }
      ],
      vocabulary: [
        {
          term: "happen",
          explanation:
            "Pasar u ocurrir en el sentido cotidiano: lo que pasó.",
          literal: "pasar / ocurrir",
          useWhen:
            "Pregunta o cuenta un hecho normal con frases como “what happened,” “something happened,” o “here's what happened.”",
          avoidWhen:
            "Necesita un registro muy formal o técnico. Allí occur puede encajar mejor.",
          register: "neutro cotidiano",
          region: "Inglés universal.",
          related: ["occur", "take place", "go on", "come about"],
          example: {
            target: "What happened with the lookout?",
            translation: "¿Qué pasó con el mirador?"
          }
        },
        {
          term: "it occurred to me",
          explanation:
            "Se me ocurrió. No significa que algo pasó, sino que una idea llegó a la mente.",
          literal: "ocurrió a mí",
          useWhen:
            "Una idea, solución, duda o posibilidad aparece de pronto.",
          avoidWhen:
            "Decir “I occurred.” En inglés, igual que en español, la idea es el sujeto.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["I thought of", "it came to me", "I had an idea", "it struck me"],
          example: {
            target: "It occurred to me that we could go inside.",
            translation: "Se me ocurrió que podríamos entrar."
          }
        },
        {
          term: "Can you think of anything?",
          explanation:
            "¿Se le ocurre algo? Una forma muy natural de pedir ideas.",
          literal: "¿puede pensar en algo?",
          useWhen:
            "Quiere abrir espacio a sugerencias sin exigir una respuesta perfecta.",
          avoidWhen:
            "Traducir siempre con occur. Does anything occur to you? existe, pero suena más formal.",
          register: "amistoso neutro",
          region: "Inglés universal.",
          related: ["any ideas?", "what do you suggest?", "what can we do?", "does anything occur to you?"],
          example: {
            target: "Can you think of another option?",
            translation: "¿Se te ocurre otra opción?"
          }
        },
        {
          term: "what happened",
          explanation:
            "Lo que pasó o lo que ocurrió, empaquetado como el hecho que se va a explicar.",
          literal: "qué pasó",
          useWhen:
            "Va a contar la secuencia antes de dar la solución o el plan nuevo.",
          avoidWhen:
            "Pensar que what occurred siempre es más correcto. A menudo sólo es más pesado.",
          register: "neutro cotidiano",
          region: "Inglés universal.",
          related: ["what went wrong", "the situation", "the issue", "the incident"],
          example: {
            target: "Explain what happened first.",
            translation: "Explica primero lo que pasó."
          }
        },
        {
          term: "what happened is that",
          explanation:
            "Lo que pasó es que... Una forma clara de abrir un relato.",
          literal: "lo que pasó es que",
          useWhen:
            "Necesita explicar la causa principal de un cambio de plan.",
          avoidWhen:
            "Usarla como muletilla para todo. A veces basta con the path closed.",
          register: "narrativo conversacional",
          region: "Inglés universal.",
          related: ["the thing is", "it turns out", "the problem was", "here's what happened"],
          example: {
            target: "What happened is that they closed the path.",
            translation: "Lo que pasó es que cerraron el camino."
          }
        },
        {
          term: "another option",
          explanation:
            "Otra salida, otra opción o alternativa cuando el plan cambia.",
          literal: "otra opción",
          useWhen:
            "Un problema práctico necesita plan B, no una explicación larga.",
          avoidWhen:
            "Traducir salida como exit si está hablando de solución. Exit es puerta o salida física.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["alternative", "way out", "plan B", "solution"],
          example: {
            target: "Can you think of another option?",
            translation: "¿Se te ocurre otra salida?"
          }
        },
        {
          term: "nobody warned us in time",
          explanation:
            "Nadie nos avisó a tiempo. Explica la falla de información sin exagerarla.",
          literal: "nadie nos advirtió a tiempo",
          useWhen:
            "El grupo llegó con información vieja o recibió tarde el cambio.",
          avoidWhen:
            "Quiere una frase más suave. “We didn't hear in time” reparte menos culpa.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["too late", "no notice", "miscommunication", "last minute"],
          example: {
            target: "Nobody warned us in time.",
            translation: "Nadie nos avisó a tiempo."
          }
        }
      ],
      note:
        "Para pasar en inglés, happen es el verbo normal. Occur existe, pero pesa más: an incident occurred, the error occurred, the event occurred. La frase que sí vale memorizar es it occurred to me, porque traduce se me ocurrió y funciona con ideas: it occurred to me that..., did it occur to you?, nothing occurred to me. No diga “I occurred.”",
      culture: [
        {
          label: "Occur suena más oficial",
          body:
            "Un angloparlante entiende “what occurred?”, pero entre amigos puede sonar como informe. What happened? es la pregunta humana y cotidiana. Occur se reserva más para reportes, sistemas, noticias o relatos cuidados."
        },
        {
          label: "Las ideas también ocurren",
          body:
            "It occurred to me mantiene la imagen de una idea que llega. No es exactamente “I thought” porque sugiere aparición, no esfuerzo. Por eso sirve tan bien para soluciones repentinas."
        },
        {
          label: "Think of compite con occur",
          body:
            "Para pedir ideas, Can you think of anything? suele sonar más natural que Does anything occur to you? La segunda existe, pero tiene un tono más formal o literario."
        }
      ],
      pitfalls: [
        {
          mistake: "“What occurred with the plan?”",
          whyItFails:
            "Se entiende, pero suena demasiado formal para preguntar entre amigos qué pasó.",
          sayInstead: "What happened with the plan?"
        },
        {
          mistake: "“I occurred an idea.”",
          whyItFails:
            "En it occurred to me, la idea o la posibilidad es el sujeto; la persona va con to me.",
          sayInstead: "It occurred to me that we could go inside."
        },
        {
          mistake: "“Can you occur something?”",
          whyItFails:
            "Occur no funciona como acción directa de la persona. Para pedir ideas, use think of.",
          sayInstead: "Can you think of anything?"
        }
      ],
      variations: [
        {
          form: "What exactly happened?",
          register: "neutro cotidiano",
          region: "Inglés universal",
          whenToUse: "La pregunta normal para saber qué pasó."
        },
        {
          form: "It occurred to me that we could go inside.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Cuando una idea o solución se le ocurre."
        },
        {
          form: "Can you think of anything?",
          register: "amistoso neutro",
          region: "Inglés universal",
          whenToUse: "Para pedir ideas de manera natural."
        },
        {
          form: "Explain what happened first.",
          register: "cuidadoso written",
          region: "Inglés universal",
          whenToUse: "En un mensaje donde primero se cuenta el hecho."
        }
      ],
      prompt: "Alex says “It occurred to me that we could go to the music hall instead.” ¿Qué quiere decir?",
      choices: [
        "An alternate idea came to him for the group plan.",
        "A formal incident happened at the music hall.",
        "Alex personally happened to the whole group."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál es la pregunta cotidiana para “qué pasó”?",
          choices: [
            "What happened with the plan?",
            "What occurred officially?",
            "What incident took place?"
          ],
          answer: 0,
          tests: "happen as the everyday verb"
        },
        {
          prompt: "¿Cuál frase traduce mejor “se me ocurrió”?",
          choices: [
            "I occurred a new plan.",
            "It occurred to me.",
            "I happened myself."
          ],
          answer: 1,
          tests: "it occurred to me for an idea"
        },
        {
          prompt: "¿Cuál frase suena más natural para pedir ideas?",
          choices: [
            "Can you think of anything?",
            "Can you occur any idea?",
            "Can you happen a plan?"
          ],
          answer: 0,
          tests: "think of as the natural idea question"
        },
        {
          prompt: "¿Cuál frase suena más oficial o pesada?",
          choices: [
            "What happened with lunch?",
            "What went wrong today?",
            "An incident occurred."
          ],
          answer: 2,
          tests: "occur as the heavier formal register"
        }
      ]
    }
  },
  {
    id: "suceder-en-una-cronica-de-monteria",
    level: "Developing · What happened",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    verb: "suceder",
    review: "pending",
    es: {
      title: "Telling what took place in Montería",
      situation:
        "You are in Montería helping write a short account for the neighborhood group after a raffle ended in confusion. No one wants to sound alarmist: you have to tell what happened, admit that in normal conversation everyone asked “qué pasó”, and put the story in order without overblaming anyone.",
      setting: {
        who: "Lucía keeps the neighborhood group's notes and wants the account to be fair. Jordan saw the raffle confusion from the back of the room and can separate rumor from sequence.",
        what: "A careful retelling of a small public mix-up: what happened first, what happened later, and why the written account chooses suceder.",
        when: "Sunday evening, after a community raffle and before the WhatsApp version hardens into gossip.",
        where: "Montería, in a neighborhood community room near the Sinú river, after chairs have been stacked and people are still comparing stories.",
        why: "Because suceder is another happen verb, but not the one Colombians use for every ordinary “what happened?” It suits written accounts, careful narration, and frames like “sucede que...”"
      },
      address: {
        form: "usted",
        who: "Lucía and Jordan use usted because they know each other through community work, not close friendship.",
        why: "The situation is cooperative but public. Usted helps both people keep the account fair and not too familiar.",
        ifYouSwitch:
          "Tú would soften the tone but might make the written task feel less serious. The point is not distance; it is careful public speech."
      },
      dialogue: [
        {
          speaker: "Lucía",
          target: "Jordan, necesito escribir claro lo que sucedió con la rifa.",
          translation: "Jordan, I need to write clearly what happened with the raffle.",
          pronunciation: "YOR-dan, neh-seh-SEE-toh es-kree-BEER KLAH-roh loh keh soo-seh-DYOH kon lah RREE-fah",
          literal: "Jordan, I-need to-write clear what happened with the raffle.",
          why: "“Lo que sucedió” fits the written account. In the room, people probably asked “¿qué pasó?”; on the note, suceder gives the story a calmer frame."
        },
        {
          speaker: "Jordan",
          target: "Lo que sucedió fue sencillo: dos boletas tenían el mismo número.",
          translation: "What happened was simple: two tickets had the same number.",
          pronunciation: "loh keh soo-seh-DYOH fue sen-SEE-yoh: dos boh-LEH-tas te-NEE-an el MEES-moh NOO-meh-roh",
          literal: "What happened was simple: two tickets had the same number.",
          why: "The preterite sucedió anchors a completed event. The imperfect tenían gives the background condition that caused the confusion."
        },
        {
          speaker: "Lucía",
          target: "Entonces primero sucedió el empate y después empezó el reclamo.",
          translation: "So first the tie happened and then the complaint started.",
          pronunciation: "en-TON-ses pree-MEH-roh soo-seh-DYOH el em-PAH-teh ee des-PWES em-peh-SOH el rreh-KLAH-moh",
          literal: "Then first happened the tie and afterward started the complaint.",
          why: "Sucedió is useful when ordering events. It is not the most casual verb, but a written sequence benefits from that careful tone."
        },
        {
          speaker: "Jordan",
          target: "Sí. Y sucede que la lista vieja todavía estaba pegada en la puerta.",
          translation: "Yes. And the thing is, the old list was still taped to the door.",
          pronunciation: "see. ee soo-SEH-deh keh lah LEES-tah BYEH-hah toh-dah-BEE-ah es-TAH-bah peh-GAH-dah en lah PWER-tah",
          literal: "Yes. And it-happens that the list old still was stuck on the door.",
          why: "“Sucede que...” often means “the thing is...” It introduces the circumstance that explains the problem, not a new dramatic event."
        },
        {
          speaker: "Lucía",
          target: "Me sirve. No escribo “sucedió un fraude” si no sabemos eso.",
          translation: "That helps. I won't write “fraud happened” if we don't know that.",
          pronunciation: "meh SEER-beh. no es-KREE-boh soo-seh-DYOH oon FROW-deh see no sah-BEH-mos EH-soh",
          literal: "It serves me. I not-write happened a fraud if not we-know that.",
          why: "Sucedió can make an accusation sound official. Lucía avoids turning confusion into a claim the group cannot prove."
        },
        {
          speaker: "Jordan",
          target: "Exacto. Digamos: “esto fue lo que sucedió” y dejamos abierta la revisión.",
          translation: "Exactly. Let's say: “this is what happened” and leave the review open.",
          pronunciation: "eg-SAK-toh. dee-GAH-mos: ES-toh fue loh keh soo-seh-DYOH ee deh-HAH-mos ah-BYER-tah lah rreh-bee-SYON",
          literal: "Exact. Let's-say: this was what happened and we-leave open the review.",
          why: "The phrase “esto fue lo que sucedió” promises an account, not a verdict. That is the right weight for this verb."
        }
      ],
      vocabulary: [
        {
          term: "suceder",
          explanation:
            "To happen, occur or take place, usually in a careful, narrative or written register.",
          literal: "to happen",
          useWhen:
            "You are giving an account, writing a report, arranging a sequence of events or explaining circumstances.",
          avoidWhen:
            "Casual Colombian “what happened?” The usual spoken question is “¿qué pasó?”",
          register: "narrative careful",
          region: "General Spanish; in Colombia it sounds more formal than pasar.",
          related: ["pasar", "ocurrir", "darse", "presentarse"],
          example: {
            target: "Necesito escribir lo que sucedió.",
            translation: "I need to write what happened."
          }
        },
        {
          term: "lo que sucedió",
          explanation:
            "What happened, in a form suited to a written or careful account.",
          literal: "that which happened",
          useWhen:
            "You need to package the event so it can be explained, reviewed or recorded.",
          avoidWhen:
            "Everyday surprise or gossip. “Lo que pasó” often sounds more natural there.",
          register: "careful written",
          region: "General Spanish.",
          related: ["lo que pasó", "lo que ocurrió", "los hechos", "la versión"],
          example: {
            target: "Esto fue lo que sucedió.",
            translation: "This is what happened."
          }
        },
        {
          term: "sucedió",
          explanation:
            "The preterite third-person form: it happened. This is the form learners actually need.",
          literal: "it happened",
          useWhen:
            "A completed event happened at a specific point in a story.",
          avoidWhen:
            "Practicing “yo sucedo” as if you will say it often. The happen meaning is overwhelmingly third-person.",
          register: "neutral narrative",
          region: "General Spanish grammar.",
          related: ["sucede", "sucedió", "ha sucedido", "sucedieron"],
          example: {
            target: "Primero sucedió el empate.",
            translation: "First the tie happened."
          }
        },
        {
          term: "sucede que",
          explanation:
            "The thing is that; it happens that. A frame for the circumstance that explains the story.",
          literal: "it happens that",
          useWhen:
            "You need to introduce the detail that changes how the listener understands the event.",
          avoidWhen:
            "Using it to sound elegant in every conversation. “Lo que pasa es que...” is lighter and more common.",
          register: "careful conversational",
          region: "General Spanish.",
          related: ["lo que pasa es que", "resulta que", "la cosa es que", "ocurre que"],
          example: {
            target: "Sucede que la lista vieja estaba en la puerta.",
            translation: "The thing is, the old list was on the door."
          }
        },
        {
          term: "los hechos",
          explanation:
            "The facts or events, especially when the account must avoid exaggeration.",
          literal: "the facts",
          useWhen:
            "Separating what can be stated from what people suspect or repeat.",
          avoidWhen:
            "A warm personal story. Los hechos sounds deliberately factual.",
          register: "formal neutral",
          region: "General Spanish.",
          related: ["la versión", "el relato", "la revisión", "la evidencia"],
          example: {
            target: "Contemos los hechos con calma.",
            translation: "Let's tell the facts calmly."
          }
        },
        {
          term: "reclamo",
          explanation:
            "A complaint, claim or objection after someone thinks something was handled badly.",
          literal: "claim",
          useWhen:
            "A public process, purchase, raffle or service creates disagreement.",
          avoidWhen:
            "Assuming it is always aggressive. A reclamo can be formal, calm or justified.",
          register: "neutral",
          region: "General Colombian.",
          related: ["queja", "inconformidad", "revisión", "aclaración"],
          example: {
            target: "Después empezó el reclamo.",
            translation: "Then the complaint started."
          }
        },
        {
          term: "dejamos abierta la revisión",
          explanation:
            "We leave the review open, meaning the account is not pretending to be the final verdict.",
          literal: "we leave open the review",
          useWhen:
            "You need to state what happened while acknowledging that more checking may follow.",
          avoidWhen:
            "Using it for a simple finished story. It belongs when the facts still need review.",
          register: "careful formal",
          region: "General Spanish.",
          related: ["revisar", "verificar", "aclarar", "dejar constancia"],
          example: {
            target: "Dejamos abierta la revisión.",
            translation: "We leave the review open."
          }
        }
      ],
      note:
        "Suceder and ocurrir overlap, and both sit above everyday pasar. The point is not to replace “¿qué pasó?” with “¿qué sucedió?” in ordinary speech. The point is to have a careful verb for a written account: “lo que sucedió,” “sucedió que,” “sucede que.” Like ocurrir, suceder is mostly third-person in this meaning. You need sucedió and sucede far more than yo sucedo.",
      culture: [
        {
          label: "A careful verb can cool down gossip",
          body:
            "In a community group, the first WhatsApp version can become the official memory if nobody slows it down. “Lo que sucedió” signals that Lucía is writing an account, not repeating the loudest complaint."
        },
        {
          label: "Pasar is still the street verb",
          body:
            "People leaving the room would ask “¿qué pasó?” That does not make suceder wrong; it just places it in a more careful register. Learning register keeps you from sounding either too casual or too official."
        },
        {
          label: "Montería without caricature",
          body:
            "The scene uses Montería because a course should not keep returning to the same few cities. The Spanish stays general: a community room, a raffle and a careful note are enough to make the situation real."
        }
      ],
      pitfalls: [
        {
          mistake: "Replacing every “¿qué pasó?” with “¿qué sucedió?”",
          whyItFails:
            "“¿Qué sucedió?” is correct but heavier. In most casual Colombian moments, it sounds too official.",
          sayInstead: "Use “¿qué pasó?” in everyday speech and “lo que sucedió” in careful accounts."
        },
        {
          mistake: "Using “sucedió un fraude” before the facts are clear",
          whyItFails:
            "The verb can make an accusation sound recorded and formal. If you do not know, do not write the verdict.",
          sayInstead: "Sucedió una confusión con las boletas."
        },
        {
          mistake: "Spending time on “yo sucedo”",
          whyItFails:
            "For the happen meaning, suceder is normally third-person: sucede, sucedió, suceden, sucedieron.",
          sayInstead: "Practice “lo que sucedió” and “sucede que...”"
        }
      ],
      variations: [
        {
          form: "Esto fue lo que sucedió.",
          register: "careful written",
          region: "General Spanish",
          whenToUse: "Opening or closing a fair account of events."
        },
        {
          form: "Sucede que la lista vieja seguía pegada.",
          register: "careful conversational",
          region: "General Spanish",
          whenToUse: "Introducing the circumstance that explains the problem."
        },
        {
          form: "¿Qué pasó con la rifa?",
          register: "everyday",
          region: "General Colombian",
          whenToUse: "The ordinary spoken way to ask what happened."
        },
        {
          form: "Primero sucedió el empate y después el reclamo.",
          register: "narrative careful",
          region: "General Spanish",
          whenToUse: "Ordering events in a written or careful story."
        }
      ],
      prompt: "Lucía says “necesito escribir claro lo que sucedió.” Why does suceder fit here?",
      choices: [
        "She is writing a careful account, not just asking casually what happened.",
        "She is using the most informal street verb for gossip after the raffle.",
        "She is describing a personal idea that suddenly came into her mind."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which line belongs in everyday speech after the raffle?",
          choices: [
            "¿Qué pasó con la rifa?",
            "¿Qué sucedió formalmente?",
            "¿Qué ocurrió jurídicamente?"
          ],
          answer: 0,
          tests: "pasar as the casual happen verb"
        },
        {
          prompt: "Which line best introduces the circumstance behind the problem?",
          choices: [
            "Yo sucedo cada domingo.",
            "Sucede que la lista vieja estaba pegada.",
            "Sucedemos una rifa en el barrio."
          ],
          answer: 1,
          tests: "sucede que as the thing is"
        },
        {
          prompt: "Which sentence avoids accusing too much?",
          choices: [
            "Sucedió un fraude confirmado.",
            "Sucedió una traición segura.",
            "Sucedió una confusión con boletas."
          ],
          answer: 2,
          tests: "careful wording without unsupported accusation"
        },
        {
          prompt: "Which form is most useful for this verb?",
          choices: [
            "Sucedió en la reunión.",
            "Yo sucedo la reunión.",
            "Tú sucedes el reclamo."
          ],
          answer: 0,
          tests: "third-person forms for the happen meaning"
        }
      ]
    },
    en: {
      title: "Contar lo que sucedió en Montería",
      situation:
        "Usted está en Dallas ayudando a redactar un mensaje después de una rifa comunitaria confusa. Necesita usar what happened para hablar normal, what took place o occurred para sonar más formal, y the thing is para introducir el detalle que explica todo.",
      setting: {
        who: "Lucía toma notas del grupo comunitario y quiere que el mensaje sea justo. Jordan vio la confusión desde el fondo del salón y puede separar rumor de secuencia.",
        what: "Un recuento cuidadoso de una confusión pública pequeña: qué pasó primero, qué pasó después y qué registro conviene en el mensaje.",
        when: "Un domingo por la tarde, después de una rifa comunitaria y antes de que la versión del chat se vuelva chisme fijo.",
        where: "Dallas, en un salón comunitario de barrio, porque esta dirección enseña inglés y ocurre fuera de Colombia.",
        why: "Porque happen es el verbo cotidiano, mientras occur y take place son más escritos o formales. El inglés también usa the thing is para el valor de sucede que."
      },
      address: {
        form: "mixed",
        who: "Lucía y Jordan usan el mismo “you”; el tono público aparece en clear, fair, account y review.",
        why: "El inglés no tiene usted. Para sonar cuidadoso, la frase escoge vocabulario más formal y evita acusaciones fuertes.",
        ifYouSwitch:
          "No hay pronombre que cambiar. El salto real sería pasar de “what happened” a “what occurred” o “what took place.”"
      },
      dialogue: [
        {
          speaker: "Lucía",
          target: "Jordan, I need to write clearly what happened with the raffle.",
          translation: "Jordan, necesito escribir claramente lo que pasó con la rifa.",
          pronunciation: "YOR-dan, ai nid tu rait KLIR-li wat JA-pend uid da RA-fel",
          literal: "Jordan, necesito escribir claramente qué pasó con la rifa.",
          why: "What happened sirve incluso en un mensaje escrito. No hay obligación de subir a occurred si el tono todavía es comunitario y claro."
        },
        {
          speaker: "Jordan",
          target: "What happened was simple: two tickets had the same number.",
          translation: "Lo que pasó fue sencillo: dos boletas tenían el mismo número.",
          pronunciation: "wat JA-pend waz SIM-pel: tu TI-kets jad da seim NAM-ber",
          literal: "Lo que pasó fue simple: dos tiquetes tenían el mismo número.",
          why: "What happened was... organiza la historia. Had da el trasfondo, como tenían en español."
        },
        {
          speaker: "Lucía",
          target: "So first there was a tie, and then the complaint started.",
          translation: "Entonces primero hubo un empate y después empezó el reclamo.",
          pronunciation: "so ferst der waz a tai, and den da kom-PLEINT STAR-ted",
          literal: "Entonces primero había un empate y después la queja empezó.",
          why: "El inglés no necesita say “the tie happened” aquí. There was a tie suena más natural para introducir el evento."
        },
        {
          speaker: "Jordan",
          target: "Yes. The thing is, the old list was still taped to the door.",
          translation: "Sí. Sucede que la lista vieja todavía estaba pegada en la puerta.",
          pronunciation: "yes. da thing iz, di ould list waz stil teipt tu da dor",
          literal: "Sí. La cosa es, la lista vieja todavía estaba pegada a la puerta.",
          why: "The thing is traduce muy bien sucede que en una explicación conversacional. Introduce el dato que cambia cómo se entiende todo."
        },
        {
          speaker: "Lucía",
          target: "That helps. I won't write that fraud occurred if we don't know that.",
          translation: "Eso ayuda. No escribiré que ocurrió fraude si no sabemos eso.",
          pronunciation: "dat jelps. ai wont rait dat frod a-KERD if ui dount nou dat",
          literal: "Eso ayuda. No escribiré que fraude ocurrió si no sabemos eso.",
          why: "Fraud occurred suena oficial y fuerte. Precisamente por eso no debe usarse si los hechos no sostienen la acusación."
        },
        {
          speaker: "Jordan",
          target: "Exactly. Say “this is what happened” and leave the review open.",
          translation: "Exacto. Diga “esto fue lo que pasó” y deje abierta la revisión.",
          pronunciation: "eg-ZAKT-li. sei dis iz wat JA-pend and liv da ri-VIU OU-pen",
          literal: "Exactamente. Diga esto es lo que pasó y deje la revisión abierta.",
          why: "This is what happened promete un recuento, no un veredicto final. Es claro sin sonar judicial."
        }
      ],
      vocabulary: [
        {
          term: "happen",
          explanation:
            "Pasar o suceder en el registro cotidiano.",
          literal: "pasar / suceder",
          useWhen:
            "Cuenta o pregunta por un hecho normal: what happened, something happened, here's what happened.",
          avoidWhen:
            "Quiere un registro de informe, noticia o sistema. Allí occurred o took place pueden servir.",
          register: "neutro cotidiano",
          region: "Inglés universal.",
          related: ["occur", "take place", "come up", "go on"],
          example: {
            target: "Write clearly what happened.",
            translation: "Escriba claramente lo que pasó."
          }
        },
        {
          term: "what happened",
          explanation:
            "Lo que pasó, incluso cuando se va a redactar una explicación clara.",
          literal: "qué pasó",
          useWhen:
            "Necesita contar una secuencia sin sonar demasiado oficial.",
          avoidWhen:
            "Creer que what occurred siempre es más educado. A veces sólo suena más pesado.",
          register: "cuidadoso cotidiano",
          region: "Inglés universal.",
          related: ["what took place", "what occurred", "the facts", "the story"],
          example: {
            target: "This is what happened.",
            translation: "Esto fue lo que pasó."
          }
        },
        {
          term: "there was",
          explanation:
            "Hubo. Muchas veces suena más natural que decir que algo happened.",
          literal: "había / hubo",
          useWhen:
            "Introduce eventos o condiciones con frases como “there was a tie,” “there was a problem,” o “there was confusion.”",
          avoidWhen:
            "Traducir todo con happened. English often prefers there was for the existence of an event.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["there were", "happened", "started", "came up"],
          example: {
            target: "First there was a tie.",
            translation: "Primero hubo un empate."
          }
        },
        {
          term: "the thing is",
          explanation:
            "La cosa es que o sucede que. Introduce el detalle que explica el problema.",
          literal: "la cosa es",
          useWhen:
            "Va a dar el dato que cambia la interpretación de lo ocurrido.",
          avoidWhen:
            "Un documento formal. Allí the issue is o the reason is puede sonar más cuidado.",
          register: "cuidadoso conversacional",
          region: "Inglés universal.",
          related: ["the issue is", "the problem is", "it turns out", "what happened is"],
          example: {
            target: "The thing is, the old list was still there.",
            translation: "Sucede que la lista vieja todavía estaba ahí."
          }
        },
        {
          term: "the facts",
          explanation:
            "Los hechos, especialmente cuando quiere separar lo comprobado del rumor.",
          literal: "los hechos",
          useWhen:
            "Redacta un recuento justo y quiere evitar exageración.",
          avoidWhen:
            "Una historia personal cálida. The facts suena deliberadamente objetivo.",
          register: "formal neutro",
          region: "Inglés universal.",
          related: ["the account", "the record", "the review", "the evidence"],
          example: {
            target: "Let's stick to the facts.",
            translation: "Quedémonos en los hechos."
          }
        },
        {
          term: "complaint",
          explanation:
            "Reclamo, queja u objeción cuando alguien siente que algo se manejó mal.",
          literal: "queja / reclamo",
          useWhen:
            "Un sorteo, compra, servicio o proceso público genera inconformidad.",
          avoidWhen:
            "Pensar que siempre es agresivo. A complaint puede ser formal, tranquilo o justificado.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["claim", "objection", "concern", "review"],
          example: {
            target: "Then the complaint started.",
            translation: "Después empezó el reclamo."
          }
        },
        {
          term: "leave the review open",
          explanation:
            "Dejar abierta la revisión: no presentar el recuento como veredicto final.",
          literal: "dejar la revisión abierta",
          useWhen:
            "Quiere contar lo ocurrido y aceptar que falta verificar más.",
          avoidWhen:
            "Una historia ya cerrada. La frase implica que todavía hay revisión pendiente.",
          register: "cuidadoso formal",
          region: "Inglés universal.",
          related: ["review it", "keep checking", "verify it", "leave it open"],
          example: {
            target: "Leave the review open.",
            translation: "Deje abierta la revisión."
          }
        }
      ],
      note:
        "Para suceder en inglés, happen cubre la vida diaria: what happened, here's what happened, something happened. Occur y take place suenan más formales o escritos. Además, el inglés muchas veces evita happened con there was: “there was a tie,” no necesariamente “a tie happened.” Para sucede que, the thing is suele sonar natural y humano.",
      culture: [
        {
          label: "What happened no es demasiado casual",
          body:
            "Un colombiano puede sentir que un mensaje escrito necesita occurred para sonar serio. Muchas veces no. What happened puede ser claro, respetuoso y mucho menos judicial."
        },
        {
          label: "Occurred pesa como acusación",
          body:
            "Fraud occurred suena como una frase de reporte. Ese peso sirve si el hecho está probado, pero puede ser peligroso si todavía se está revisando."
        },
        {
          label: "The thing is organiza sin endurecer",
          body:
            "The thing is introduce el dato clave sin sonar a documento legal. Es una herramienta conversacional para hacer justicia a una historia complicada."
        }
      ],
      pitfalls: [
        {
          mistake: "“What succeeded with the raffle?”",
          whyItFails:
            "Succeed no traduce suceder cuando significa pasar. Succeed es tener éxito.",
          sayInstead: "What happened with the raffle?"
        },
        {
          mistake: "“A tie happened first.”",
          whyItFails:
            "Se entiende, pero there was a tie suena mucho más natural para introducir ese evento.",
          sayInstead: "First there was a tie."
        },
        {
          mistake: "“Fraud occurred” before the facts are clear.",
          whyItFails:
            "La frase suena oficial y acusatoria. Si no está probado, el inglés debe bajar el peso.",
          sayInstead: "There was confusion with the tickets."
        }
      ],
      variations: [
        {
          form: "This is what happened.",
          register: "cuidadoso cotidiano",
          region: "Inglés universal",
          whenToUse: "Abrir o cerrar un recuento claro de los hechos."
        },
        {
          form: "The thing is, the old list was still there.",
          register: "cuidadoso conversacional",
          region: "Inglés universal",
          whenToUse: "Introducir el dato que explica el problema."
        },
        {
          form: "What happened with the raffle?",
          register: "cotidiano",
          region: "Inglés universal",
          whenToUse: "La pregunta hablada normal para saber qué pasó."
        },
        {
          form: "First there was a tie, and then the complaint started.",
          register: "narrativo cuidadoso",
          region: "Inglés universal",
          whenToUse: "Ordenar eventos en un relato cuidadoso."
        }
      ],
      prompt: "Lucía says “I need to write clearly what happened.” ¿Por qué happen funciona aquí?",
      choices: [
        "She can write a clear account without making it sound official.",
        "She needs the most formal legal verb for every written message.",
        "She is describing a sudden idea that came into her mind."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál pregunta traduce mejor “qué pasó con la rifa”?",
          choices: [
            "What happened with the raffle?",
            "What succeeded with the raffle?",
            "What resulted with the raffle?"
          ],
          answer: 0,
          tests: "happen, not succeed, for suceder/pasar"
        },
        {
          prompt: "¿Cuál frase introduce mejor el dato clave?",
          choices: [
            "I succeed that the list was old.",
            "The thing is, the list was old.",
            "I happen the list was old."
          ],
          answer: 1,
          tests: "the thing is for sucede que"
        },
        {
          prompt: "¿Cuál frase evita acusar demasiado?",
          choices: [
            "Confirmed fraud occurred here.",
            "A sure betrayal occurred here.",
            "There was confusion with the tickets."
          ],
          answer: 2,
          tests: "careful wording without unsupported accusation"
        },
        {
          prompt: "¿Cuál frase suena más natural para “hubo un empate”?",
          choices: [
            "There was a tie.",
            "A tie succeeded.",
            "We happened a tie."
          ],
          answer: 0,
          tests: "there was para la existencia de un evento"
        }
      ]
    }
  },
  {
    id: "resultar-distinto-en-arauca",
    level: "Developing · What happened",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "familiar",
    verb: "resultar",
    review: "pending",
    es: {
      title: "Telling how the plan turned out in Arauca",
      situation:
        "You are in Arauca after an errand that looked easy and turned out differently: the appointment did not exist, the process turned out longer than expected, and it seems strange to your friend that no one warned him. You have to explain how everything went and how the experience turned out for you.",
      setting: {
        who: "Mateo lives in Arauca and helped Alex plan a document errand. Alex has returned from the office with a story that changed shape halfway through.",
        what: "A conversation about how a plan turned out: the appointment did not exist, the process was harder than expected, and the ending surprised both people.",
        when: "Early afternoon, after Alex has spent the morning at a government office and finally found shade.",
        where: "Arauca, outside a small office near the river, with the conversation focused on the errand rather than local color.",
        why: "Because resultar means to turn out, and it also builds personal reactions like “me resulta raro” or “me resulta difícil.” That second pattern behaves like gustar: the thing is strange or difficult to me."
      },
      address: {
        form: "vos",
        who: "Mateo and Alex use vos as close friends joking through a frustrating errand.",
        why: "The register is familiar and reflective. Vos gives Mateo room to tease Alex without sounding harsh, while the grammar of resultar carries the serious part.",
        ifYouSwitch:
          "Tú would be completely understood and more neutral. Usted would make the teasing sound distant or sarcastic in this friendship."
      },
      dialogue: [
        {
          speaker: "Mateo",
          target: "Bueno, ¿y al final cómo resultó la vuelta?",
          translation: "So, in the end, how did the errand turn out?",
          pronunciation: "BWEH-noh, ee al fee-NAL KO-moh rreh-sool-TOH lah BWEL-tah",
          literal: "Good, and at-the end how turned-out the errand?",
          why: "“¿Cómo resultó?” asks for the outcome, not just the event. Mateo wants the ending after all the morning's uncertainty."
        },
        {
          speaker: "Alex",
          target: "Resultó que no había cita registrada, aunque yo tenía el correo.",
          translation: "It turned out there was no appointment registered, even though I had the email.",
          pronunciation: "rreh-sool-TOH keh no ah-BEE-ah SEE-tah rreh-hees-TRAH-dah, OWN-keh yoh teh-NEE-ah el koh-RREH-oh",
          literal: "It-turned-out that not there-was appointment registered, although I had the email.",
          why: "“Resultó que...” is the classic surprise frame: the situation revealed itself differently from what Alex expected."
        },
        {
          speaker: "Mateo",
          target: "Qué tal. Eso resulta raro si el correo tenía confirmación.",
          translation: "Unbelievable. That seems strange if the email had confirmation.",
          pronunciation: "keh tal. EH-soh rreh-SOOL-tah RRAH-roh see el koh-RREH-oh teh-NEE-ah kon-feer-mah-SYON",
          literal: "What such. That turns-out strange if the email had confirmation.",
          why: "Here resultar is closer to “seem” or “come across as.” The situation is strange to Mateo because the evidence points the other way."
        },
        {
          speaker: "Alex",
          target: "A mí me resultó difícil reclamar sin sonar bravo.",
          translation: "For me, it was difficult to complain without sounding angry.",
          pronunciation: "ah mee meh rreh-sool-TOH dee-FEE-seel rreh-klah-MAR seen soh-NAR BRAH-boh",
          literal: "To me to-me turned-out difficult to complain without sounding angry.",
          why: "“Me resultó difícil” patterns like gustar: the difficulty is presented as something that resulted difficult to me."
        },
        {
          speaker: "Mateo",
          target: "Pero resultaste con el papel, ¿sí o no?",
          translation: "But you ended up with the document, yes or no?",
          pronunciation: "PEH-roh rreh-sool-TAS-teh kon el pah-PEL, see oh no",
          literal: "But you turned-out with the paper, yes or no?",
          why: "“Resultar con” is colloquial: ending up with something. It is not the main meaning, but it is useful in exactly this kind of after-action story."
        },
        {
          speaker: "Alex",
          target: "Sí, resultó bien al final: me dieron copia y aprendí a llevar paciencia.",
          translation: "Yes, it turned out well in the end: they gave me a copy and I learned to carry patience.",
          pronunciation: "see, rreh-sool-TOH byen al fee-NAL: meh DYEH-ron KOH-pyah ee ah-pren-DEE ah yeh-BAR pah-SYEN-syah",
          literal: "Yes, it-turned-out well at-the end: to-me they-gave copy and I-learned to carry patience.",
          why: "“Resultó bien” gives the final evaluation. The story was messy, but the outcome was usable."
        }
      ],
      vocabulary: [
        {
          term: "resultar",
          explanation:
            "To turn out, end up being, or prove to be a certain way after the facts are known.",
          literal: "to result",
          useWhen:
            "A plan, person, errand or situation reveals its real outcome or character.",
          avoidWhen:
            "You simply mean “happen.” Resultar is about the outcome or evaluation, not the event itself.",
          register: "neutral",
          region: "General Spanish; common in Colombian storytelling.",
          related: ["salir", "terminar", "acabar", "parecer"],
          example: {
            target: "¿Cómo resultó la vuelta?",
            translation: "How did the errand turn out?"
          }
        },
        {
          term: "resultó que",
          explanation:
            "It turned out that... The frame for a fact that changes the story.",
          literal: "it resulted that",
          useWhen:
            "The ending or discovered fact was not what people expected.",
          avoidWhen:
            "You are only giving a normal reason with no surprise. Then “porque” or “la cosa es que” may be enough.",
          register: "neutral conversational",
          region: "General Spanish.",
          related: ["resulta que", "ocurrió que", "pasó que", "al final"],
          example: {
            target: "Resultó que no había cita.",
            translation: "It turned out there was no appointment."
          }
        },
        {
          term: "resultó ser",
          explanation:
            "Turned out to be. Useful when someone's identity or the nature of something changes the story.",
          literal: "turned out to be",
          useWhen:
            "A person, place, object or problem is revealed to be something unexpected.",
          avoidWhen:
            "Adding another ser after it in English order. Spanish already has the full frame: resultó ser.",
          register: "neutral",
          region: "General Spanish.",
          related: ["era", "terminó siendo", "salió ser", "se descubrió que era"],
          example: {
            target: "El error resultó ser del sistema.",
            translation: "The error turned out to be in the system."
          }
        },
        {
          term: "me resulta difícil",
          explanation:
            "I find it difficult; it is difficult for me. The thing is difficult to me, much like gustar patterns.",
          literal: "to-me it turns-out difficult",
          useWhen:
            "Something feels difficult, strange, easy, useful or uncomfortable from your point of view.",
          avoidWhen:
            "Forcing a literal “I result difficult.” The subject is the task or situation, not you.",
          register: "neutral reflective",
          region: "General Spanish.",
          related: ["me parece difícil", "se me hace difícil", "me cuesta", "me resulta raro"],
          example: {
            target: "Me resultó difícil reclamar.",
            translation: "I found it difficult to complain."
          }
        },
        {
          term: "me resulta raro",
          explanation:
            "I find it strange, or it seems strange to me.",
          literal: "to-me it turns-out strange",
          useWhen:
            "A situation does not fit the facts you have, but you are not accusing anyone yet.",
          avoidWhen:
            "Using it as a direct insult to a person. It usually comments on a situation or detail.",
          register: "neutral conversational",
          region: "General Spanish.",
          related: ["me parece raro", "no me cuadra", "me suena raro", "me extraña"],
          example: {
            target: "Eso me resulta raro.",
            translation: "That seems strange to me."
          }
        },
        {
          term: "resultar con",
          explanation:
            "To end up with something, often after a messy process.",
          literal: "to turn out with",
          useWhen:
            "After errands, paperwork, arguments or surprises, someone ends up with a result or object.",
          avoidWhen:
            "Formal writing. It is more conversational than “obtener” or “quedar con.”",
          register: "conversational",
          region: "Common in Colombian speech.",
          related: ["quedar con", "terminar con", "salir con", "obtener"],
          example: {
            target: "Resultaste con el papel.",
            translation: "You ended up with the document."
          }
        },
        {
          term: "la vuelta",
          explanation:
            "The errand, piece of business or practical runaround someone had to handle.",
          literal: "the turn",
          useWhen:
            "Talking about a document errand, payment, visit to an office or small mission.",
          avoidWhen:
            "Formal paperwork. In a written complaint, name the trámite or solicitud instead.",
          register: "everyday Colombian",
          region: "Very common in Colombia.",
          related: ["diligencia", "trámite", "mandado", "gestión"],
          example: {
            target: "¿Cómo resultó la vuelta?",
            translation: "How did the errand turn out?"
          }
        }
      ],
      note:
        "Resultar is the outcome verb. “Resultó que no había cita” reveals the surprise; “resultó ser del sistema” identifies what the problem really was; “resultó bien” evaluates the ending. The personal-feeling pattern is especially useful: “me resulta difícil,” “me resulta raro,” “me resultó útil.” It behaves like gustar because the thing or situation is the subject, and me marks the person experiencing the difficulty or strangeness.",
      culture: [
        {
          label: "The ending matters in Colombian errands",
          body:
            "A trámite can be chaotic and still “resultar bien” if you leave with the paper. Colombian after-action stories often care less about the official process than about whether the errand produced the needed result."
        },
        {
          label: "Raro can be careful, not rude",
          body:
            "“Me resulta raro” lets you say a fact does not fit without accusing someone directly. It is a useful middle ground between silence and “eso es mentira.”"
        },
        {
          label: "Arauca as normal adult life",
          body:
            "The scene belongs in Arauca to keep the course map wide. The Spanish is general because the lesson is about outcome language, not a localism."
        }
      ],
      pitfalls: [
        {
          mistake: "Using resultar as a plain synonym of pasar",
          whyItFails:
            "Resultar is about how something turned out, not simply that it happened. It needs an outcome, identity or evaluation.",
          sayInstead: "Use “resultó bien,” “resultó que...,” or “resultó ser...”"
        },
        {
          mistake: "Saying “yo resulto difícil” for “I find it difficult”",
          whyItFails:
            "That sounds like you are the difficult person. The Spanish pattern is indirect: the task is difficult to you.",
          sayInstead: "Me resulta difícil."
        },
        {
          mistake: "Forgetting the surprise in “resultó que”",
          whyItFails:
            "The phrase usually reveals something that changes the story. If there is no turn in the information, another connector may be better.",
          sayInstead: "Resultó que no había cita registrada."
        }
      ],
      variations: [
        {
          form: "¿Cómo resultó la vuelta?",
          register: "reflective conversational",
          region: "General Colombian",
          whenToUse: "Asking how an errand or plan turned out."
        },
        {
          form: "Resultó que no había cita.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "Revealing the fact that changed the story."
        },
        {
          form: "Me resulta difícil reclamar.",
          register: "neutral reflective",
          region: "General Spanish",
          whenToUse: "Saying you find something difficult."
        },
        {
          form: "El error resultó ser del sistema.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Naming what the problem turned out to be."
        }
      ],
      prompt: "Alex says “Resultó que no había cita registrada.” What is resultar doing?",
      choices: [
        "It reveals the surprising fact that changed the story.",
        "It asks casually what happened at the office today.",
        "It says Alex personally became a difficult person."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which line asks about the outcome of the errand?",
          choices: [
            "¿Cómo resultó la vuelta?",
            "¿Qué pasó en la puerta?",
            "¿Se te ocurrió algo?"
          ],
          answer: 0,
          tests: "resultar as the outcome verb"
        },
        {
          prompt: "Which sentence means “I find it difficult”?",
          choices: [
            "Yo resulto difícil.",
            "Me resulta difícil.",
            "Resulté una dificultad."
          ],
          answer: 1,
          tests: "me resulta difícil as a gustar-like pattern"
        },
        {
          prompt: "Which line identifies what the problem turned out to be?",
          choices: [
            "El problema pasó ayer en la oficina.",
            "El problema se ocurrió en la fila.",
            "El problema resultó ser del sistema."
          ],
          answer: 2,
          tests: "resultó ser as turned out to be"
        },
        {
          prompt: "Which use of resultar is too vague by itself?",
          choices: [
            "Resultó bien al final.",
            "Resultó que no había cita.",
            "Resultó y nada más."
          ],
          answer: 2,
          tests: "resultar needing an outcome or complement"
        }
      ]
    },
    en: {
      title: "Contar cómo resultó el plan en Arauca",
      situation:
        "Usted está en Perth después de una diligencia que parecía fácil y terminó distinta. Necesita decir how it turned out, it turned out that, turned out to be, y I find it difficult sin calcar me resulta difícil como “it results me difficult.”",
      setting: {
        who: "Mateo vive en Perth y ayudó a Alex a planear una diligencia. Alex volvió de la oficina con una historia que cambió a mitad de camino.",
        what: "Una conversación sobre cómo salió el plan: la cita no existía, el trámite fue más difícil de lo esperado y el final sorprendió a ambos.",
        when: "Al comienzo de la tarde, después de que Alex pasó la mañana en una oficina y por fin encontró sombra.",
        where: "Perth, afuera de una oficina pequeña, porque esta dirección enseña inglés y por eso no se sitúa en Colombia.",
        why: "Porque turn out es el equivalente principal de resultar, pero me resulta difícil suele traducirse mejor con I find it difficult."
      },
      address: {
        form: "mixed",
        who: "Mateo y Alex usan nombres de pila y el mismo “you”; la confianza está en las preguntas directas y el tono de amigo.",
        why: "El inglés no tiene vos. La cercanía se expresa con frases cortas como “so, how did it turn out?” y no con una forma verbal especial.",
        ifYouSwitch:
          "No hay pronombre que cambiar. El peligro real es traducir resultar como result cada vez, que suena torpe en inglés."
      },
      dialogue: [
        {
          speaker: "Mateo",
          target: "So, how did the errand turn out in the end?",
          translation: "Bueno, ¿cómo resultó la vuelta al final?",
          pronunciation: "so, jau did di ER-rand tern aut in di end",
          literal: "Entonces, ¿cómo giró afuera la diligencia al final?",
          why: "Turn out pregunta por el resultado. No es sólo what happened; quiere saber en qué terminó todo."
        },
        {
          speaker: "Alex",
          target: "It turned out that there was no appointment registered.",
          translation: "Resultó que no había ninguna cita registrada.",
          pronunciation: "it ternd aut dat der waz nou a-POINT-ment RE-yi-sterd",
          literal: "Giró afuera que no había cita registrada.",
          why: "It turned out that... revela el dato inesperado. Es la traducción central de resultó que."
        },
        {
          speaker: "Mateo",
          target: "That's strange if the email had a confirmation.",
          translation: "Eso resulta raro si el correo tenía confirmación.",
          pronunciation: "dats streinch if di I-meil jad a kon-fer-MEI-shon",
          literal: "Eso es extraño si el correo tenía una confirmación.",
          why: "That's strange suele ser más natural que it results strange. Para me resulta raro, el inglés no necesita result."
        },
        {
          speaker: "Alex",
          target: "I found it difficult to complain without sounding angry.",
          translation: "Me resultó difícil reclamar sin sonar bravo.",
          pronunciation: "ai faund it DI-fi-kult tu kom-PLEIN uid-AUT SAUN-ding ANG-gri",
          literal: "Encontré eso difícil para quejarme sin sonar bravo.",
          why: "I found it difficult traduce me resultó difícil de forma idiomática. El sujeto gramatical ya no tiene que copiar el español."
        },
        {
          speaker: "Mateo",
          target: "But did you end up with the document or not?",
          translation: "Pero ¿resultaste con el papel o no?",
          pronunciation: "bat did yu end ap uid da DO-kiu-ment or not",
          literal: "Pero ¿terminó usted arriba con el documento o no?",
          why: "End up with cubre el resultar con colombiano. Suena conversacional y pregunta por el resultado práctico."
        },
        {
          speaker: "Alex",
          target: "Yes, it turned out well in the end; I got a copy.",
          translation: "Sí, resultó bien al final; me dieron una copia.",
          pronunciation: "yes, it ternd aut wel in di end; ai gat a KO-pi",
          literal: "Sí, giró afuera bien al final; conseguí una copia.",
          why: "It turned out well evalúa el desenlace. Aunque el proceso fue raro, el resultado fue útil."
        }
      ],
      vocabulary: [
        {
          term: "turn out",
          explanation:
            "Resultar: terminar de cierta manera o revelarse de cierta manera.",
          literal: "girar hacia afuera",
          useWhen:
            "Un plan, persona, diligencia o situación revela su resultado real.",
          avoidWhen:
            "Sólo quiere decir happen. Turn out mira el desenlace, no el evento desnudo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["end up", "prove to be", "work out", "come out"],
          example: {
            target: "How did the errand turn out?",
            translation: "¿Cómo resultó la vuelta?"
          }
        },
        {
          term: "it turned out that",
          explanation:
            "Resultó que. Introduce el dato inesperado que cambia la historia.",
          literal: "resultó que",
          useWhen:
            "El final o la información descubierta no era lo que se esperaba.",
          avoidWhen:
            "No hay sorpresa ni giro. Entonces puede usar because, the thing is, o simplemente decir el dato.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["as it turned out", "the thing is", "what happened was", "it happened that"],
          example: {
            target: "It turned out that there was no appointment.",
            translation: "Resultó que no había cita."
          }
        },
        {
          term: "turned out to be",
          explanation:
            "Resultó ser. Revela la identidad o naturaleza real de algo.",
          literal: "resultó ser",
          useWhen:
            "Una persona, problema, objeto o lugar termina siendo algo inesperado.",
          avoidWhen:
            "Duplicar be por traducir ser dos veces. “Turned out to be” ya trae toda la estructura.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["proved to be", "ended up being", "was actually", "came out as"],
          example: {
            target: "The error turned out to be in the system.",
            translation: "El error resultó ser del sistema."
          }
        },
        {
          term: "I find it difficult",
          explanation:
            "Me resulta difícil. La traducción idiomática usa find, no result.",
          literal: "lo encuentro difícil",
          useWhen:
            "Algo le parece difícil, raro, útil o incómodo desde su punto de vista.",
          avoidWhen:
            "Decir “it results me difficult.” Ese calco no funciona en inglés.",
          register: "neutro reflexivo",
          region: "Inglés universal.",
          related: ["I found it difficult", "it's hard for me", "I struggle with it", "I find it strange"],
          example: {
            target: "I found it difficult to complain.",
            translation: "Me resultó difícil reclamar."
          }
        },
        {
          term: "that's strange",
          explanation:
            "Eso resulta raro o eso me parece raro.",
          literal: "eso es extraño",
          useWhen:
            "Un dato no cuadra con lo que usted sabe, pero no quiere acusar todavía.",
          avoidWhen:
            "Traducir como “that results strange.” No es una frase natural.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["that's odd", "that seems strange", "that doesn't add up", "that's weird"],
          example: {
            target: "That's strange if the email had confirmation.",
            translation: "Eso resulta raro si el correo tenía confirmación."
          }
        },
        {
          term: "end up with",
          explanation:
            "Resultar con o terminar con algo después de un proceso.",
          literal: "terminar arriba con",
          useWhen:
            "Después de una diligencia, problema o sorpresa, alguien queda con un resultado u objeto.",
          avoidWhen:
            "Un documento formal. It resulted in puede ser más formal si habla de consecuencias.",
          register: "conversacional",
          region: "Inglés universal.",
          related: ["get", "come away with", "walk away with", "result in"],
          example: {
            target: "Did you end up with the document?",
            translation: "¿Resultaste con el papel?"
          }
        },
        {
          term: "errand",
          explanation:
            "Vuelta, diligencia o trámite pequeño que uno tiene que hacer.",
          literal: "diligencia",
          useWhen:
            "Habla de ir a una oficina, comprar algo, recoger un papel o resolver una gestión.",
          avoidWhen:
            "Trámite muy formal y largo. Procedure o paperwork pueden servir mejor.",
          register: "cotidiano",
          region: "Inglés universal.",
          related: ["paperwork", "task", "appointment", "runaround"],
          example: {
            target: "How did the errand turn out?",
            translation: "¿Cómo resultó la vuelta?"
          }
        }
      ],
      note:
        "Resultar casi nunca se traduce como result in everyday speech. Para desenlaces, use turn out: it turned out well, it turned out that..., turned out to be. Para “me resulta difícil,” use I find it difficult o it's hard for me. Para “resultaste con el papel,” use end up with. El hilo común es el desenlace, no la palabra result.",
      culture: [
        {
          label: "Result no siempre es verbo",
          body:
            "Los colombianos ven resultar y quieren usar result. En inglés cotidiano, result aparece mucho como sustantivo: the result. Como verbo, suele sonar más formal que turn out."
        },
        {
          label: "Find no significa sólo encontrar",
          body:
            "I find it difficult no habla de buscar un objeto. Find aquí significa percibir o considerar. Esa ampliación resuelve muchas frases con me resulta."
        },
        {
          label: "End up pregunta por lo práctico",
          body:
            "Después de una diligencia, lo importante muchas veces es si usted “ended up with the paper.” La frase “end up with” captura el camino desordenado hacia un resultado práctico."
        }
      ],
      pitfalls: [
        {
          mistake: "“How did the errand result?”",
          whyItFails:
            "Result como verbo suena torpe aquí. Para preguntar por el desenlace, el inglés usa turn out.",
          sayInstead: "How did the errand turn out?"
        },
        {
          mistake: "“It results me difficult.”",
          whyItFails:
            "Es un calco de me resulta difícil. El inglés usa find o hard for me.",
          sayInstead: "I find it difficult."
        },
        {
          mistake: "“The error resulted to be in the system.”",
          whyItFails:
            "El patrón correcto es turned out to be. Resulted to be no es inglés natural.",
          sayInstead: "The error turned out to be in the system."
        }
      ],
      variations: [
        {
          form: "How did the errand turn out?",
          register: "reflexivo conversacional",
          region: "Inglés universal",
          whenToUse: "Preguntar cómo terminó una diligencia o plan."
        },
        {
          form: "It turned out that there was no appointment.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Revelar el dato que cambió la historia."
        },
        {
          form: "I found it difficult to complain.",
          register: "neutro reflexivo",
          region: "Inglés universal",
          whenToUse: "Traducir me resultó difícil sin calco."
        },
        {
          form: "The error turned out to be in the system.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Decir qué resultó ser el problema."
        }
      ],
      prompt: "Alex says “It turned out that there was no appointment registered.” ¿Qué hace turn out?",
      choices: [
        "It reveals the surprising fact that changed the story.",
        "It asks casually what happened at the office today.",
        "It says Alex personally became a difficult person."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál pregunta pide el desenlace de la diligencia?",
          choices: [
            "How did the errand turn out?",
            "What happened at the door?",
            "Did an idea occur to you?"
          ],
          answer: 0,
          tests: "turn out as the outcome verb"
        },
        {
          prompt: "¿Cuál frase traduce mejor “me resulta difícil”?",
          choices: [
            "It results me difficult.",
            "I find it difficult.",
            "I turn out difficult."
          ],
          answer: 1,
          tests: "I find it difficult for me resulta difícil"
        },
        {
          prompt: "¿Cuál frase dice qué resultó ser el problema?",
          choices: [
            "The problem happened yesterday.",
            "The problem occurred itself.",
            "The problem turned out to be in the system."
          ],
          answer: 2,
          tests: "turned out to be for resultó ser"
        },
        {
          prompt: "¿Cuál frase suena torpe para preguntar por el resultado?",
          choices: [
            "How did the errand turn out?",
            "How did everything work out?",
            "How did the errand result?"
          ],
          answer: 2,
          tests: "avoid result as a casual verb"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/52-developing-what-happened.js");
