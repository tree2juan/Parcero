/*
 * Lesson block: extension / getting it done.
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
 * The three verbs here — lograr, reunir and tratar — cover managing to get
 * something done, gathering people or documents, and dealing with people,
 * attempts and topics. The two directions are mirrors: same number of dialogue
 * turns, vocabulary entries, culture notes, pitfalls, variations and practice
 * questions, and the same optional slots filled on the same rows. That is
 * enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "managing-to-get-an-appointment-in-monteria",
    level: "Extending · Getting it done",
    skills: ["speaking", "listening", "context"],
    domain: "civic life",
    register: "practical polite",
    pathways: ["extension"],
    verb: "lograr",
    review: "pending",
    es: {
      title: "Lograr que te atiendan en una oficina",
      situation:
        "Estás en Montería acompañando a una amiga a sacar una cita para un trámite familiar. La página se cae, el teléfono no contesta y por fin alguien en la ventanilla ayuda. Tienes que contar qué lograste hacer y qué no lograste entender.",
      setting: {
        who: "Adriana is trying to get an appointment for a family document, and Owen is helping her keep track of what finally worked.",
        what: "A small bureaucracy story: failed calls, a confusing website, one useful clerk, and the relief of leaving with an appointment.",
        when: "Mid-morning on a weekday, after an hour of trying online and by phone.",
        where: "Montería, in a departmental service office with numbered turns and a slow website on everyone's phones.",
        why: "Because lograr is the verb for managing to do something after effort. It says more than simple ability; it says the obstacle was real."
      },
      address: {
        form: "usted",
        who: "Owen and Adriana use usted with the clerk, and Adriana keeps usted with Owen while they are inside the office.",
        why: "The setting is practical and official. Usted keeps the request calm, especially when the morning has already been frustrating.",
        ifYouSwitch:
          "Tú would sound too casual at the counter. Vos would not fit the office register, even if friends might use it outside."
      },
      dialogue: [
        {
          speaker: "Adriana",
          target: "Por fin logré conseguir cita para el viernes.",
          translation: "I finally managed to get an appointment for Friday.",
          pronunciation: "por feen loh-GREH kon-seh-GEER SEE-tah PAH-rah el BYEHR-nes",
          literal: "At last I-managed to-get appointment for Friday.",
          why: "Logré adds the effort. She did not merely get an appointment; she managed to get one after the system made it hard."
        },
        {
          speaker: "Owen",
          target: "Yo no logré entenderle al señor de la ventanilla.",
          translation: "I couldn't manage to understand the man at the window.",
          pronunciation: "yo noh loh-GREH en-ten-DEHR-leh al seh-NYOR deh lah ben-tah-NEE-yah",
          literal: "I not managed to-understand-him to-the man of the window.",
          why: "No logré is softer and more specific than simply “I couldn't.” It points to a real attempt that failed."
        },
        {
          speaker: "Adriana",
          target: "Tranquilo, yo logré que nos atendieran sin volver mañana.",
          translation: "Don't worry, I managed to get them to help us without coming back tomorrow.",
          pronunciation: "tran-KEE-loh, yo loh-GREH keh nos ah-ten-DYEH-rahn seen bol-BEHR mah-NYAH-nah",
          literal: "Calm, I managed that they attended us without returning tomorrow.",
          why: "This is the extension-tier structure: lograr que plus subjunctive. The success is causing someone else to do the needed action."
        },
        {
          speaker: "Owen",
          target: "¿Entonces sí logramos salir con el papel radicado?",
          translation: "So did we manage to leave with the paper filed?",
          pronunciation: "en-TON-ses see loh-GRAH-mos sah-LEER kon el pah-PEL rah-dee-KAH-doh",
          literal: "Then yes we-managed to-leave with the paper filed?",
          why: "Logramos makes the success shared. It fits the relief after a practical task that almost failed."
        },
        {
          speaker: "Adriana",
          target: "Sí, pero no logré que corrigieran el apellido hoy.",
          translation: "Yes, but I didn't manage to get them to correct the surname today.",
          pronunciation: "see, PEH-roh noh loh-GREH keh koh-rree-HYEH-rahn el ah-peh-YEE-doh oy",
          literal: "Yes, but not I-managed that they corrected the surname today.",
          why: "Again, lograr que takes the subjunctive. Corrigieran names the action she wanted someone else to perform."
        },
        {
          speaker: "Owen",
          target: "Bueno, logramos lo urgente y mañana seguimos con lo demás.",
          translation: "Well, we managed the urgent part and tomorrow we continue with the rest.",
          pronunciation: "BWEH-noh, loh-GRAH-mos loh oor-HEN-teh ee mah-NYAH-nah seh-GHEE-mos kon loh deh-MAHS",
          literal: "Good, we-managed the urgent thing and tomorrow we-continue with the rest.",
          why: "Lograr can take a noun too: the urgent thing. The verb still carries effort and a partial victory."
        }
      ],
      vocabulary: [
        {
          term: "lograr",
          explanation:
            "To manage to do something, achieve it, or pull it off. It carries a sense of effort that plain can often lacks.",
          literal: "to achieve / to manage",
          useWhen:
            "Use it when a call, appointment, explanation, repair, or errand took effort and finally worked.",
          avoidWhen:
            "Avoid using it for simple ability with no obstacle. If there was no difficulty, poder may be enough.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["logré", "logramos", "lograr que", "alcanzar"],
          example: {
            target: "Logré conseguir cita para el viernes.",
            translation: "I managed to get an appointment for Friday."
          }
        },
        {
          term: "logré",
          explanation:
            "The first-person past form: I managed. It is one of the most useful ways to report a hard-won result.",
          literal: "I managed",
          useWhen:
            "Use it when you personally got through, understood, found, booked, fixed, or finished something after trying.",
          avoidWhen:
            "Avoid flattening every success into pude. Logré tells the listener there was effort behind the result.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["no logré", "logré hacer", "logré conseguir", "logré entender"],
          example: {
            target: "Por fin logré conseguir cita.",
            translation: "I finally managed to get an appointment."
          }
        },
        {
          term: "no logré",
          explanation:
            "I did not manage to. It reports a failed attempt without sounding like you never tried.",
          literal: "I did not achieve",
          useWhen:
            "Use it when the attempt was real but the result did not happen: understanding, reaching someone, fixing a problem.",
          avoidWhen:
            "Avoid using it to dodge responsibility. It implies an effort you can usually explain.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["no pude", "intenté", "se me dificultó", "falló"],
          example: {
            target: "No logré entenderle al señor.",
            translation: "I couldn't manage to understand the man."
          }
        },
        {
          term: "lograr que",
          explanation:
            "To manage to get someone or something to do something. It is followed by a subjunctive verb.",
          literal: "to achieve that",
          useWhen:
            "Use it when your effort causes another person, office, system, or situation to change.",
          avoidWhen:
            "Avoid putting a plain infinitive after que. The structure needs a new subject and a subjunctive form.",
          register: "neutral advanced",
          region: "General Colombian and universal Spanish.",
          related: ["logré que", "logramos que", "atendieran", "corrigieran"],
          example: {
            target: "Logré que nos atendieran.",
            translation: "I managed to get them to help us."
          }
        },
        {
          term: "atendieran",
          explanation:
            "The imperfect subjunctive of atender for they or ustedes. It appears after logré que in this story.",
          literal: "they would attend/help",
          useWhen:
            "Use it after a past trigger like logré que, quería que, or necesitaba que when the subject changes.",
          avoidWhen:
            "Avoid atendieron after logré que. That reports a fact, but the grammar here needs subjunctive.",
          register: "formal grammar, everyday situation",
          region: "Universal Spanish grammar.",
          related: ["atender", "me atendieron", "que me atendieran", "subjuntivo"],
          example: {
            target: "Logré que me atendieran en la ventanilla.",
            translation: "I managed to get them to help me at the window."
          }
        },
        {
          term: "radicado",
          explanation:
            "Filed or officially received, often with a reference number. It is common in Colombian paperwork.",
          literal: "rooted / filed",
          useWhen:
            "Use it when a document has been received into an official system and can be tracked.",
          avoidWhen:
            "Avoid assuming it means solved. A filed paper may still need review.",
          register: "official practical",
          region: "Very common Colombian bureaucracy.",
          related: ["radicar", "número de radicado", "trámite", "ventanilla"],
          example: {
            target: "Salimos con el papel radicado.",
            translation: "We left with the paper filed."
          }
        },
        {
          term: "lo urgente",
          explanation:
            "The urgent part. Lo turns an adjective into a thing or category.",
          literal: "the urgent thing",
          useWhen:
            "Use it when separating what must be handled now from what can wait.",
          avoidWhen:
            "Avoid translating lo as a normal article before a noun. It creates an abstract category.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["lo demás", "lo importante", "lo difícil", "prioridad"],
          example: {
            target: "Logramos lo urgente.",
            translation: "We managed the urgent part."
          }
        }
      ],
      note:
        "Lograr is the verb for effort that reaches a result. “Pude conseguir cita” says I could get an appointment; “logré conseguir cita” says I managed it after obstacles. The advanced structure is “lograr que” plus subjunctive: “logré que me atendieran,” “no logré que corrigieran el apellido.” That is how you say you managed to get someone else or a system to do something.",
      culture: [
        {
          label: "Small victories count",
          body:
            "A Colombian paperwork morning can end with partial success: one appointment made, one paper filed, one correction still pending. Lograr is useful because it names the victory without pretending the whole problem disappeared."
        },
        {
          label: "The effort is part of the story",
          body:
            "People often recount how many calls, turns, windows, and attempts it took. Logré tells the listener that the outcome was not automatic. It is a social cue as much as a verb."
        },
        {
          label: "Usted protects the counter",
          body:
            "Even when everyone is tired, usted at a service window keeps the exchange from sounding like a personal fight. Calm register can help when the system already feels hard."
        },
        {
          label: "Filed is not finished",
          body:
            "A radicado is progress, not a solution. Knowing that difference helps you celebrate what happened and still ask what remains."
        }
      ],
      pitfalls: [
        {
          mistake: "Using poder when you want the effort to be heard",
          whyItFails:
            "Poder only says the result was possible. Lograr tells the listener there was difficulty and you managed it anyway.",
          sayInstead: "Logré conseguir la cita."
        },
        {
          mistake: "Saying “logré que me atendieron”",
          whyItFails:
            "After lograr que, Spanish needs a subjunctive form because you caused another action to happen.",
          sayInstead: "Logré que me atendieran."
        },
        {
          mistake: "Using “no logré” when you never tried",
          whyItFails:
            "No logré implies a real attempt that failed. If you never tried, the verb overstates your effort.",
          sayInstead: "No alcancé a llamar."
        },
        {
          mistake: "Thinking a radicado means the whole trámite is solved",
          whyItFails:
            "Filed paperwork may still be pending. It means the office received it, not that the decision is done.",
          sayInstead: "El papel quedó radicado."
        }
      ],
      variations: [
        {
          form: "Logré conseguir cita.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Reporting that you managed to book something after effort."
        },
        {
          form: "No logré entenderle.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Saying you tried but could not understand someone."
        },
        {
          form: "Logré que me atendieran.",
          register: "neutral advanced",
          region: "General Colombian",
          whenToUse: "You managed to get someone in an office to help you."
        },
        {
          form: "No logré que corrigieran el apellido.",
          register: "neutral advanced",
          region: "General Colombian",
          whenToUse: "You failed to get someone else to make a correction."
        },
        {
          form: "Logramos lo urgente.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The group got the essential part done, even if work remains."
        }
      ],
      prompt: "Adriana says “logré conseguir cita.” What does lograr add?",
      choices: [
        "It shows she managed the result after real effort.",
        "It means the appointment happened without any obstacle.",
        "It says she only wanted the appointment someday."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses “lograr que” correctly?",
          choices: [
            "Logré que me atendieran.",
            "Logré que me atendieron.",
            "Logré que me atender."
          ],
          answer: 0,
          tests: "lograr que plus subjunctive"
        },
        {
          prompt: "Which sentence reports a failed real attempt?",
          choices: [
            "No logré entenderle al señor.",
            "No nací entenderle al señor.",
            "No reuní entenderle al señor."
          ],
          answer: 0,
          tests: "no logré for an attempt that failed"
        },
        {
          prompt: "Which phrase best names partial success?",
          choices: [
            "Logramos lo urgente.",
            "Discutimos lo urgente.",
            "Probamos lo urgente."
          ],
          answer: 0,
          tests: "lograr with a noun result"
        },
        {
          prompt: "What does “radicado” mean in this office scene?",
          choices: [
            "The paper was officially received.",
            "The paper was completely forgotten.",
            "The paper was tasted for quality."
          ],
          answer: 0,
          tests: "radicado as filed, not fully solved"
        }
      ]
    },
    en: {
      title: "Lograr una cita en una oficina",
      situation:
        "Usted está en Toronto acompañando a una amiga colombiana a sacar una cita para un trámite familiar. La página se cae, el teléfono no contesta y por fin alguien ayuda. Necesita decir managed to, couldn't manage to y got them to sin perder la idea de esfuerzo.",
      setting: {
        who: "Adriana intenta conseguir una cita para un documento familiar, y Owen la ayuda a seguir qué funcionó por fin.",
        what: "Una historia pequeña de burocracia: llamadas fallidas, una página confusa, una funcionaria útil y el alivio de salir con una cita.",
        when: "Media mañana entre semana, después de una hora intentando por internet y por teléfono.",
        where: "Toronto, en una oficina de servicios con turnos numerados y una página lenta en los celulares de todos.",
        why: "Porque managed to expresa logro con esfuerzo. Could pudo hacerlo, pero managed to deja oír el obstáculo."
      },
      address: {
        form: "mixed",
        who: "Owen, Adriana y la funcionaria usan el mismo you; la cortesía depende de tono y frases completas.",
        why: "El inglés no tiene usted visible. En una oficina, please, could y una voz tranquila hacen el trabajo.",
        ifYouSwitch:
          "Repetir sir or ma'am puede sonar distante o demasiado rígido. Una petición clara y amable suele bastar."
      },
      dialogue: [
        {
          speaker: "Adriana",
          target: "I finally managed to get an appointment for Friday.",
          translation: "Por fin logré conseguir cita para el viernes.",
          pronunciation: "ai FAI-na-li MA-nijd tu get an a-POINT-ment for FRAI-dei",
          literal: "Finalmente manejé conseguir una cita para el viernes.",
          why: "Managed to muestra esfuerzo y resultado. No es sólo que pudo; es que lo sacó adelante a pesar de obstáculos."
        },
        {
          speaker: "Owen",
          target: "I couldn't manage to understand the clerk at the window.",
          translation: "No logré entenderle al señor de la ventanilla.",
          pronunciation: "ai KU-dent MA-nij tu on-der-STAND de clerk at de WIN-dou",
          literal: "No pude manejar entender al funcionario de la ventanilla.",
          why: "Couldn't manage to dice que hubo intento. Suena más específico que simplemente I couldn't understand."
        },
        {
          speaker: "Adriana",
          target: "Don't worry, I got them to help us without coming back tomorrow.",
          translation: "Tranquilo, logré que nos atendieran sin volver mañana.",
          pronunciation: "dount UO-ri, ai got dem tu jelp os uid-AUT COM-ing bak tu-MO-rou",
          literal: "No se preocupe, los conseguí para ayudarnos sin volver mañana.",
          why: "Got them to traduce muy bien lograr que con otra persona como sujeto. Es menos formal que managed to get them to."
        },
        {
          speaker: "Owen",
          target: "So did we manage to leave with the paper filed?",
          translation: "¿Entonces sí logramos salir con el papel radicado?",
          pronunciation: "sou did ui MA-nij tu liv uid de PEI-per faild",
          literal: "¿Entonces manejamos salir con el papel archivado?",
          why: "Did we manage to...? pregunta si el resultado difícil sí se consiguió. Filed aquí es radicado."
        },
        {
          speaker: "Adriana",
          target: "Yes, but I couldn't get them to correct the surname today.",
          translation: "Sí, pero no logré que corrigieran el apellido hoy.",
          pronunciation: "yes, bot ai KU-dent get dem tu ko-REKT de SER-neim tu-DEI",
          literal: "Sí, pero no pude conseguirlos para corregir el apellido hoy.",
          why: "Couldn't get them to marca que el obstáculo era lograr la acción de otra persona o de una oficina."
        },
        {
          speaker: "Owen",
          target: "Well, we handled the urgent part and tomorrow we'll do the rest.",
          translation: "Bueno, logramos lo urgente y mañana seguimos con lo demás.",
          pronunciation: "uel, ui JAN-dold de ER-yent part and tu-MO-rou uil du de rest",
          literal: "Bueno, manejamos la parte urgente y mañana haremos el resto.",
          why: "Handled the urgent part traduce el logro parcial de manera natural. No todo managed se traduce con la misma frase."
        }
      ],
      vocabulary: [
        {
          term: "manage to",
          explanation:
            "Lograr hacer algo. La frase incluye la idea de dificultad superada.",
          literal: "manejar a",
          useWhen:
            "Úsela cuando consiguió una cita, entendió algo difícil, terminó un trámite o resolvió algo con esfuerzo.",
          avoidWhen:
            "No la use para una habilidad general sin obstáculo. Can puede bastar si no hubo dificultad.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["managed to", "couldn't manage to", "get something done", "pull off"],
          example: {
            target: "I managed to get an appointment.",
            translation: "Logré conseguir cita."
          }
        },
        {
          term: "I managed to",
          explanation:
            "Logré. Es la forma de contar que usted sacó adelante un resultado después de intentar.",
          literal: "yo manejé a",
          useWhen:
            "Úsela para logros prácticos: llamadas, citas, arreglos, explicaciones o tareas terminadas.",
          avoidWhen:
            "No la traduzca como I achieved to. En inglés la estructura natural es managed to.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I got to", "I was able to", "I pulled off", "I handled"],
          example: {
            target: "I finally managed to get an appointment.",
            translation: "Por fin logré conseguir cita."
          }
        },
        {
          term: "couldn't manage to",
          explanation:
            "No logré. Señala que hubo intento, pero el resultado no salió.",
          literal: "no pude manejar a",
          useWhen:
            "Úsela cuando no consiguió entender, llamar, arreglar o terminar algo pese al esfuerzo.",
          avoidWhen:
            "No la use si nunca intentó. La frase presupone un intento real.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["couldn't", "failed to", "tried to", "wasn't able to"],
          example: {
            target: "I couldn't manage to understand him.",
            translation: "No logré entenderle."
          }
        },
        {
          term: "get them to",
          explanation:
            "Lograr que ellos hagan algo. Es una estructura común cuando la meta depende de otra persona.",
          literal: "conseguirlos a",
          useWhen:
            "Úsela cuando logra que una oficina, persona o grupo haga la acción necesaria.",
          avoidWhen:
            "No omita el objeto them, him, her or someone. Get to do no cuenta quién hace la acción.",
          register: "neutral conversational",
          region: "Inglés universal.",
          related: ["managed to get them to", "got her to", "got him to", "helped us"],
          example: {
            target: "I got them to help us.",
            translation: "Logré que nos atendieran."
          }
        },
        {
          term: "help us",
          explanation:
            "Atendernos o ayudarnos según la escena. En una oficina, help us puede sonar más natural que attend us.",
          literal: "ayudarnos",
          useWhen:
            "Úsela para atención práctica en una ventanilla, mostrador, llamada o servicio.",
          avoidWhen:
            "No diga attend us en esta escena. Attend suele significar asistir a un evento o atender formalmente otra cosa.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["clerk", "service desk", "helped me", "assistance"],
          example: {
            target: "They helped us at the window.",
            translation: "Nos atendieron en la ventanilla."
          }
        },
        {
          term: "filed",
          explanation:
            "Radicado o presentado oficialmente. El documento entró al sistema.",
          literal: "archivado / presentado",
          useWhen:
            "Úsela cuando un documento fue recibido oficialmente y queda registro.",
          avoidWhen:
            "No suponga que filed significa aprobado. Sólo dice que fue presentado o recibido.",
          register: "official practical",
          region: "Inglés universal.",
          related: ["submitted", "received", "reference number", "paperwork"],
          example: {
            target: "We left with the paper filed.",
            translation: "Salimos con el papel radicado."
          }
        },
        {
          term: "the urgent part",
          explanation:
            "Lo urgente. Una forma práctica de separar lo que tocaba resolver hoy de lo que puede esperar.",
          literal: "la parte urgente",
          useWhen:
            "Úsela cuando un trámite o tarea tuvo éxito parcial, pero todavía queda algo pendiente.",
          avoidWhen:
            "No la use si todo quedó resuelto; entonces puede decir everything is done.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["the rest", "priority", "urgent", "handled"],
          example: {
            target: "We handled the urgent part.",
            translation: "Logramos lo urgente."
          }
        }
      ],
      note:
        "Managed to es la forma inglesa que deja oír el esfuerzo de lograr. “I managed to get an appointment” pesa más que “I could get an appointment.” Para lograr que alguien haga algo, use get them to: “I got them to help us.” Para el fracaso después de intentar, use couldn't manage to. La estructura exacta depende de quién hace la acción final.",
      culture: [
        {
          label: "Managed to cuenta el esfuerzo",
          body:
            "En inglés, managed to no sólo informa el resultado. También sugiere que hubo fila, confusión, insistencia o suerte. Por eso encaja tan bien con historias de trámites."
        },
        {
          label: "Help us vence a attend us",
          body:
            "Los hispanohablantes a veces quieren decir attend us por atendernos. En una oficina común, help us suena más natural y menos traducido."
        },
        {
          label: "Filed no promete aprobación",
          body:
            "A filed paper entró al sistema, pero puede seguir pendiente. Igual que radicado, es avance administrativo, no final feliz automático."
        },
        {
          label: "El logro puede ser parcial",
          body:
            "“We handled the urgent part” permite celebrar lo que sí se resolvió sin negar lo que queda para mañana. Es una frase útil para días incompletos."
        }
      ],
      pitfalls: [
        {
          mistake: "“I achieved to get an appointment.”",
          whyItFails:
            "Achieve no toma to de esa manera. Para lograr hacer algo, la frase natural es manage to.",
          sayInstead: "I managed to get an appointment."
        },
        {
          mistake: "“I couldn't understand” cuando quiere destacar el intento",
          whyItFails:
            "Es correcto, pero pierde la idea de esfuerzo fallido que trae no logré. Couldn't manage to la conserva mejor.",
          sayInstead: "I couldn't manage to understand him."
        },
        {
          mistake: "“I got to help us” para lograr que ellos ayudaran",
          whyItFails:
            "Falta el objeto que hace la acción. Get them to dice que usted logró que ellos ayudaran.",
          sayInstead: "I got them to help us."
        },
        {
          mistake: "“The paper is filed, so it is approved.”",
          whyItFails:
            "Filed sólo significa presentado o recibido. La aprobación puede venir después.",
          sayInstead: "The paper has been filed."
        }
      ],
      variations: [
        {
          form: "I managed to get an appointment.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Contar que consiguió una cita después de esfuerzo."
        },
        {
          form: "I couldn't manage to understand him.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Decir que intentó entender y no pudo."
        },
        {
          form: "I got them to help us.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Usted logró que otra persona o una oficina ayudara."
        },
        {
          form: "I couldn't get them to correct it.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "No logró que otra persona hiciera la corrección."
        },
        {
          form: "We handled the urgent part.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "El grupo resolvió lo esencial, aunque falte trabajo."
        }
      ],
      prompt: "Adriana says “I finally managed to get an appointment.” ¿Qué aporta managed to?",
      choices: [
        "Muestra que consiguió el resultado después de esfuerzo.",
        "Dice que la cita apareció sin ningún obstáculo.",
        "Dice que sólo imaginó llamar algún día."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase traduce logré conseguir cita?",
          choices: [
            "I managed to get an appointment.",
            "I achieved to get an appointment.",
            "I treated to get an appointment."
          ],
          answer: 0,
          tests: "managed to for lograr"
        },
        {
          prompt: "¿Cuál frase conserva la idea de intento fallido?",
          choices: [
            "I couldn't manage to understand him.",
            "I couldn't born to understand him.",
            "I couldn't gather to understand him."
          ],
          answer: 0,
          tests: "couldn't manage to for no logré"
        },
        {
          prompt: "¿Cuál frase significa que logró que ellos ayudaran?",
          choices: [
            "I got to help us.",
            "I got them to help us.",
            "I got us to them help."
          ],
          answer: 1,
          tests: "get them to for lograr que"
        },
        {
          prompt: "¿Qué significa filed en este trámite?",
          choices: [
            "The paper was officially received.",
            "The paper was completely approved.",
            "The paper was thrown away."
          ],
          answer: 0,
          tests: "filed as received, not approved"
        }
      ]
    }
  },
  {
    id: "gathering-people-and-documents-in-buenaventura",
    level: "Extending · Getting it done",
    skills: ["speaking", "listening", "context"],
    domain: "civic life",
    register: "friendly practical",
    pathways: ["extension"],
    verb: "reunir",
    review: "pending",
    es: {
      title: "Reunir gente y papeles para una reunión",
      situation:
        "Estás en Buenaventura ayudando a preparar una reunión de vecinos sobre un proyecto cultural. Hay que reunir firmas, reunir a las personas indicadas y reunirse con la coordinadora. También aparece la frase reunir los requisitos.",
      setting: {
        who: "Diana is coordinating neighbours for a cultural project, and Lina is helping gather names, signatures, and the right people for a short meeting.",
        what: "A practical afternoon of gathering documents, confirming attendance, and setting a meeting with the person who can approve the space.",
        when: "Tuesday afternoon, before the community room closes and before people scatter for the evening.",
        where: "Buenaventura, in a neighbourhood cultural house near the port, with chairs stacked against the wall.",
        why: "Because reunir can gather people or things, reunirse con is the everyday meeting form, and reunir los requisitos is essential for official approvals."
      },
      address: {
        form: "vos",
        who: "Diana and Lina use vos as close friends working quickly together.",
        why: "Voseo is heard in Valle del Cauca, including the Pacific side. Here it marks friendship and momentum, not a special performance.",
        ifYouSwitch:
          "Tú would be understood and neutral. Usted would make the teamwork sound more distant unless they were speaking to an older neighbour or official."
      },
      dialogue: [
        {
          speaker: "Diana",
          target: "Lina, ¿vos reunís las firmas mientras yo llamo a los vecinos?",
          translation: "Lina, will you gather the signatures while I call the neighbours?",
          pronunciation: "LEE-nah, bos rreh-oo-NEES las FEER-mahs MYEN-tras yo YAH-moh ah los beh-SEE-nos",
          literal: "Lina, you gather the signatures while I call the neighbours?",
          why: "Reunís is the vos form here. The accent in the spelling and the stress in speech keep the two vowels clear."
        },
        {
          speaker: "Lina",
          target: "Sí, reúno las firmas y los documentos en una carpeta.",
          translation: "Yes, I'll gather the signatures and the documents in one folder.",
          pronunciation: "see, rreh-OO-noh las FEER-mahs ee los doh-koo-MEN-tos en OO-nah kar-PEH-tah",
          literal: "Yes, I gather the signatures and the documents in a folder.",
          why: "Reúno is the yo form, with an accent to mark the stress. Reunir is not hard, but the written accents matter."
        },
        {
          speaker: "Diana",
          target: "También necesitamos reunir a los líderes del barrio.",
          translation: "We also need to gather the neighbourhood leaders.",
          pronunciation: "tam-BYEN neh-seh-see-TAH-mos rreh-oo-NEER ah los LEE-deh-res del BAR-ryoh",
          literal: "Also we-need to gather personal-a the leaders of-the neighbourhood.",
          why: "When reunir gathers people as direct objects, the personal marker appears. The people are being gathered, not met with."
        },
        {
          speaker: "Lina",
          target: "¿Nos reunimos con la coordinadora a las cinco?",
          translation: "Are we meeting with the coordinator at five?",
          pronunciation: "nos rreh-oo-NEE-mos kon lah koh-or-dee-nah-DOH-rah ah las SEEN-koh",
          literal: "Ourselves we-meet with the coordinator at five?",
          why: "Reunirse con is the everyday form for meeting with someone. The group gathers itself with another person."
        },
        {
          speaker: "Diana",
          target: "Sí, pero antes revisemos si reunimos los requisitos.",
          translation: "Yes, but first let's check whether we meet the requirements.",
          pronunciation: "see, PEH-roh AN-tes rreh-bee-SEH-mos see rreh-oo-NEE-mos los rreh-kee-SEE-tos",
          literal: "Yes, but first let-us-check if we gather the requirements.",
          why: "Reunir los requisitos means meet the requirements. It is a key official phrase, not a literal pile of requirements."
        },
        {
          speaker: "Lina",
          target: "Listo: reunimos papeles, reunimos gente y nos reunimos con ella.",
          translation: "Done: we gather papers, gather people, and meet with her.",
          pronunciation: "LEES-toh: rreh-oo-NEE-mos pah-PEH-les, rreh-oo-NEE-mos HEN-teh ee nos rreh-oo-NEE-mos kon EH-yah",
          literal: "Ready: we gather papers, gather people and ourselves meet with her.",
          why: "This line makes the whole contrast visible: plain reunir for gathering, reflexive reunirse con for meeting."
        }
      ],
      vocabulary: [
        {
          term: "reunir",
          explanation:
            "To gather, collect, or bring together people or things. It is practical and often official.",
          literal: "to gather",
          useWhen:
            "Use it for signatures, documents, money, evidence, people, or requirements that need to come together.",
          avoidWhen:
            "Avoid using plain reunir when you mean meet with someone. For that everyday meeting, use reunirse con.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["reúno", "reúnes", "reúne", "reunirse con"],
          example: {
            target: "Necesitamos reunir las firmas.",
            translation: "We need to gather the signatures."
          }
        },
        {
          term: "reúno",
          explanation:
            "The present yo form: I gather. The written accent marks the stress over the u.",
          literal: "I gather",
          useWhen:
            "Use it when you personally gather documents, signatures, names, or people.",
          avoidWhen:
            "Avoid writing reuno without the accent in careful Spanish. The accent shows how the vowels are pronounced.",
          register: "neutral",
          region: "Universal Spanish spelling.",
          related: ["reúnes", "reúne", "reunimos", "reúnen"],
          example: {
            target: "Reúno las firmas en una carpeta.",
            translation: "I'll gather the signatures in one folder."
          }
        },
        {
          term: "reunir a",
          explanation:
            "To gather people. The personal marker appears before the people being gathered.",
          literal: "to gather personal-a",
          useWhen:
            "Use it when the direct object is a person or group of people: leaders, neighbours, parents, volunteers.",
          avoidWhen:
            "Avoid dropping the personal marker with people. It may sound as if you are treating them like objects.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["reunir gente", "reunir a todos", "convocar", "invitar"],
          example: {
            target: "Necesitamos reunir a los líderes.",
            translation: "We need to gather the leaders."
          }
        },
        {
          term: "reunirse con",
          explanation:
            "To meet with someone. This is the everyday pronominal form for appointments and planned conversations.",
          literal: "to gather oneself with",
          useWhen:
            "Use it for meeting with a coordinator, friend, teacher, team, client, or neighbour.",
          avoidWhen:
            "Avoid plain reunir con for a normal meeting. The reflexive form is the natural one.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["nos reunimos", "me reúno", "reunión", "cita"],
          example: {
            target: "Nos reunimos con la coordinadora.",
            translation: "We're meeting with the coordinator."
          }
        },
        {
          term: "reunir los requisitos",
          explanation:
            "To meet the requirements. It is common in official, school, grant, and paperwork contexts.",
          literal: "to gather the requirements",
          useWhen:
            "Use it when a person or project has the documents, conditions, signatures, or qualifications required.",
          avoidWhen:
            "Avoid translating it as physically gathering requirements. It means satisfying them.",
          register: "official neutral",
          region: "General Colombian and universal Spanish.",
          related: ["requisitos", "cumplir", "documentos", "aprobación"],
          example: {
            target: "Reunimos los requisitos para la sala.",
            translation: "We meet the requirements for the room."
          }
        },
        {
          term: "la reunión",
          explanation:
            "The meeting. It is the noun related to reunirse, not always to reunir objects.",
          literal: "the gathering",
          useWhen:
            "Use it for a planned meeting, community gathering, work session, or appointment with a group.",
          avoidWhen:
            "Avoid assuming every reunión is formal. A neighbourhood meeting may be practical and informal.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["reunirse", "cita", "encuentro", "grupo"],
          example: {
            target: "La reunión es a las cinco.",
            translation: "The meeting is at five."
          }
        },
        {
          term: "la carpeta",
          explanation:
            "A folder, physical or digital. It is where gathered papers become organized enough to show someone.",
          literal: "the folder",
          useWhen:
            "Use it for paperwork, files, screenshots, certificates, and forms grouped together.",
          avoidWhen:
            "Avoid handing loose papers if someone asked for a carpeta. The folder itself often signals readiness.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["documentos", "archivo", "papeles", "requisitos"],
          example: {
            target: "Reúno los documentos en una carpeta.",
            translation: "I'll gather the documents in one folder."
          }
        }
      ],
      note:
        "Reunir gathers things or people: “reúno documentos,” “reunimos a los líderes.” Reunirse con is the meeting phrase: “nos reunimos con la coordinadora.” Keep the accents in the present forms — reúno, reúnes, reúne, reúnen — and learn the official phrase “reunir los requisitos,” which means to meet the requirements, not to pile them up.",
      culture: [
        {
          label: "Community work is gathering work",
          body:
            "Small projects often depend on someone gathering signatures, documents, neighbours, and a person with authority to approve the next step. Reunir is useful because it covers that practical social labour."
        },
        {
          label: "The meeting form is reflexive",
          body:
            "Learners often expect one verb to do everything. Spanish separates gathering people from meeting with people: reunir a los vecinos, but reunirse con la coordinadora."
        },
        {
          label: "Requirements are met, not collected",
          body:
            "In paperwork, reunir los requisitos means the project satisfies the conditions. Some requirements are documents, but others are signatures, ages, dates, or permissions."
        },
        {
          label: "A folder shows seriousness",
          body:
            "In many Colombian offices and community settings, arriving with papers in order changes how the conversation feels. A carpeta is not just storage; it signals that the group did its part."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “reunimos con la coordinadora”",
          whyItFails:
            "For meeting with someone, Spanish normally uses the reflexive form. Without nos, it sounds incomplete or like the wrong structure.",
          sayInstead: "Nos reunimos con la coordinadora."
        },
        {
          mistake: "Writing “yo reuno” without the accent",
          whyItFails:
            "Careful spelling marks the stress: reúno. The accent is part of the present-tense pattern.",
          sayInstead: "Yo reúno los documentos."
        },
        {
          mistake: "Dropping the personal marker in “reunir los líderes”",
          whyItFails:
            "When people are the direct object, Spanish uses the personal marker. The leaders are people, not papers.",
          sayInstead: "Reunir a los líderes."
        },
        {
          mistake: "Reading “reunir los requisitos” literally",
          whyItFails:
            "The phrase means to meet the requirements. You may gather documents, but requirements are satisfied.",
          sayInstead: "El proyecto reúne los requisitos."
        }
      ],
      variations: [
        {
          form: "Reúno las firmas.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "You personally gather signatures or documents."
        },
        {
          form: "Necesitamos reunir a los vecinos.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Gathering people for a meeting or shared action."
        },
        {
          form: "Nos reunimos con la coordinadora.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Meeting with a specific person."
        },
        {
          form: "El proyecto reúne los requisitos.",
          register: "official neutral",
          region: "General Colombian",
          whenToUse: "Saying a project meets the formal conditions."
        },
        {
          form: "La reunión es a las cinco.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Naming the meeting time plainly."
        }
      ],
      prompt: "Lina says “reunimos papeles” but “nos reunimos con ella.” What changes?",
      choices: [
        "Plain reunir gathers things; reunirse con means meet with someone.",
        "Plain reunir is only for clothing; reunirse con is only for food.",
        "Both phrases mean meeting requirements in official paperwork."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence is the everyday meeting form?",
          choices: [
            "Reunimos con la coordinadora.",
            "Nos reunimos con la coordinadora.",
            "Reúno a la carpeta coordinadora."
          ],
          answer: 1,
          tests: "reunirse con for meeting with someone"
        },
        {
          prompt: "Which present yo form is spelled correctly?",
          choices: [
            "Yo reúno los documentos.",
            "Yo reuno los documentos.",
            "Yo reunio los documentos."
          ],
          answer: 0,
          tests: "accent in reúno"
        },
        {
          prompt: "Which sentence gathers people with the personal marker?",
          choices: [
            "Reunimos los líderes del barrio.",
            "Reunimos a los líderes del barrio.",
            "Reunimos de los líderes del barrio."
          ],
          answer: 1,
          tests: "personal a with people"
        },
        {
          prompt: "What does “reunir los requisitos” mean?",
          choices: [
            "To meet the required conditions.",
            "To argue with every condition.",
            "To taste the required papers."
          ],
          answer: 0,
          tests: "reunir los requisitos as meet requirements"
        }
      ]
    },
    en: {
      title: "Reunir gente y papeles para una reunión",
      situation:
        "Usted está en Manchester ayudando a preparar una reunión de vecinos colombianos sobre un proyecto cultural. Hay que reunir firmas, juntar personas y reunirse con la coordinadora. Necesita decir gather, meet with y meet the requirements sin mezclar las estructuras.",
      setting: {
        who: "Diana coordina vecinos para un proyecto cultural, y Lina ayuda a reunir nombres, firmas y personas para una reunión corta.",
        what: "Una tarde práctica de juntar documentos, confirmar asistencia y reunirse con la persona que puede aprobar el espacio.",
        when: "Martes por la tarde, antes de que cierre el salón comunitario y antes de que la gente se disperse.",
        where: "Manchester, en una casa cultural de una comunidad colombiana, con sillas apiladas contra la pared.",
        why: "Porque reunir puede ser gather, reunirse con es meet with, y reunir los requisitos se traduce como meet the requirements."
      },
      address: {
        form: "mixed",
        who: "Diana y Lina son amigas; el inglés usa el mismo you mientras trabajan rápido.",
        why: "La confianza se oye en frases directas como “can you gather” y “we're meeting,” no en otro pronombre.",
        ifYouSwitch:
          "Volver la escena demasiado formal haría lento el trabajo. La claridad práctica vale más que títulos repetidos."
      },
      dialogue: [
        {
          speaker: "Diana",
          target: "Lina, can you gather the signatures while I call the neighbours?",
          translation: "Lina, ¿vos reunís las firmas mientras yo llamo a los vecinos?",
          pronunciation: "LI-na, can yu GA-der de SIG-na-chers wail ai kol de NEI-bors",
          literal: "Lina, ¿puede juntar las firmas mientras llamo a los vecinos?",
          why: "Gather funciona para firmas, documentos, nombres y personas. Es el verbo práctico para juntar elementos dispersos."
        },
        {
          speaker: "Lina",
          target: "Yes, I'll gather the signatures and documents in one folder.",
          translation: "Sí, reúno las firmas y los documentos en una carpeta.",
          pronunciation: "yes, ail GA-der de SIG-na-chers and DO-kiu-ments in uan FOL-der",
          literal: "Sí, reuniré las firmas y documentos en una carpeta.",
          why: "I'll gather mantiene la acción en futuro. Folder traduce carpeta en esta escena de papeles."
        },
        {
          speaker: "Diana",
          target: "We also need to bring the neighbourhood leaders together.",
          translation: "También necesitamos reunir a los líderes del barrio.",
          pronunciation: "ui OL-so nid tu bring de NEI-bor-jud LI-ders tu-GE-der",
          literal: "También necesitamos traer juntos a los líderes del barrio.",
          why: "Bring people together traduce reunir a personas de manera natural. Gather the leaders también sirve, pero suena un poco más organizativo."
        },
        {
          speaker: "Lina",
          target: "Are we meeting with the coordinator at five?",
          translation: "¿Nos reunimos con la coordinadora a las cinco?",
          pronunciation: "ar ui MI-ting uid de kou-OR-di-nei-tor at faiv",
          literal: "¿Estamos reuniéndonos con la coordinadora a las cinco?",
          why: "Meeting with es la frase para reunirse con alguien. No diga gather with for a normal appointment."
        },
        {
          speaker: "Diana",
          target: "Yes, but first let's check whether we meet the requirements.",
          translation: "Sí, pero antes revisemos si reunimos los requisitos.",
          pronunciation: "yes, bot ferst lets chek WE-der ui mit de ri-KWAIR-ments",
          literal: "Sí, pero primero revisemos si conocemos los requisitos.",
          why: "Meet the requirements es una fórmula fija. Aquí meet no significa conocer personas; significa cumplir condiciones."
        },
        {
          speaker: "Lina",
          target: "Done: we gather papers, bring people together, and meet with her.",
          translation: "Listo: reunimos papeles, reunimos gente y nos reunimos con ella.",
          pronunciation: "don: ui GA-der PEI-pers, bring PI-pol tu-GE-der, and mit uid jer",
          literal: "Listo: juntamos papeles, traemos gente junta y nos reunimos con ella.",
          why: "El inglés reparte la raíz española en tres frases: “gather”, “bring together” y “meet with”."
        }
      ],
      vocabulary: [
        {
          term: "gather",
          explanation:
            "Reunir o juntar. Sirve para firmas, documentos, nombres, datos y también personas.",
          literal: "reunir",
          useWhen:
            "Úselo cuando elementos dispersos deben quedar juntos en una carpeta, lista, grupo o sala.",
          avoidWhen:
            "No lo use para una cita normal con alguien. Para eso diga meet with.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["collect", "bring together", "meet with", "requirements"],
          example: {
            target: "We need to gather the signatures.",
            translation: "Necesitamos reunir las firmas."
          }
        },
        {
          term: "I'll gather",
          explanation:
            "Reúno o voy a reunir. Es la forma de ofrecerse a juntar documentos o datos.",
          literal: "reuniré",
          useWhen:
            "Úsela cuando usted se encarga de firmas, documentos, nombres o evidencia.",
          avoidWhen:
            "No la confunda con I'll meet. Gather junta cosas; meet es reunirse o conocer.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["collect", "put together", "folder", "documents"],
          example: {
            target: "I'll gather the documents in one folder.",
            translation: "Reúno los documentos en una carpeta."
          }
        },
        {
          term: "bring people together",
          explanation:
            "Reunir a personas. La frase enfatiza lograr que el grupo esté junto.",
          literal: "traer gente junta",
          useWhen:
            "Úsela para líderes, vecinos, familias, voluntarios o equipos que deben encontrarse.",
          avoidWhen:
            "No la use para documentos. Los papeles se gather or collect.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["gather people", "invite", "group", "community"],
          example: {
            target: "We need to bring the leaders together.",
            translation: "Necesitamos reunir a los líderes."
          }
        },
        {
          term: "meet with",
          explanation:
            "Reunirse con alguien. Es la estructura cotidiana para una cita o reunión con una persona.",
          literal: "reunirse con",
          useWhen:
            "Úsela para coordinadores, clientes, amigos, profesores, vecinos o equipos.",
          avoidWhen:
            "No diga gather with para una reunión normal. Suena raro o demasiado literal.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["meeting", "appointment", "talk with", "see"],
          example: {
            target: "We're meeting with the coordinator.",
            translation: "Nos reunimos con la coordinadora."
          }
        },
        {
          term: "meet the requirements",
          explanation:
            "Reunir o cumplir los requisitos. Es una fórmula fija para condiciones oficiales.",
          literal: "conocer los requisitos",
          useWhen:
            "Úsela cuando una persona, solicitud o proyecto cumple las condiciones exigidas.",
          avoidWhen:
            "No la traduzca como gather the requirements si habla de cumplir condiciones, no de recoger papeles.",
          register: "official neutral",
          region: "Inglés universal.",
          related: ["qualify", "requirements", "conditions", "eligible"],
          example: {
            target: "We meet the requirements for the room.",
            translation: "Reunimos los requisitos para la sala."
          }
        },
        {
          term: "meeting",
          explanation:
            "Reunión. Puede ser formal o informal, comunitaria, laboral, familiar o práctica.",
          literal: "reunión",
          useWhen:
            "Úsela para una cita grupal con hora, tema o persona que coordina.",
          avoidWhen:
            "No la confunda con meet como verbo. The meeting is the event; meet is the action.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["meet with", "appointment", "gathering", "session"],
          example: {
            target: "The meeting is at five.",
            translation: "La reunión es a las cinco."
          }
        },
        {
          term: "folder",
          explanation:
            "Carpeta física o digital. Es donde los documentos reunidos quedan presentables.",
          literal: "carpeta",
          useWhen:
            "Úsela para papeles, archivos, certificados, formularios o imágenes organizadas.",
          avoidWhen:
            "No diga carpet para carpeta de documentos; carpet es alfombra.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["file", "documents", "paperwork", "forms"],
          example: {
            target: "Put the documents in one folder.",
            translation: "Ponga los documentos en una carpeta."
          }
        }
      ],
      note:
        "El inglés separa varios usos de reunir. Para papeles, use gather or collect. Para personas, gather people or bring people together. Para reunirse con alguien, use meet with. Para reunir los requisitos, use meet the requirements. La trampa es que meet puede significar reunirse con personas o cumplir condiciones, según el objeto.",
      culture: [
        {
          label: "Gather suena práctico",
          body:
            "Gather no es sólo una palabra bonita para reuniones grandes. También sirve para firmas, documentos y datos, que son el trabajo invisible de muchos proyectos comunitarios."
        },
        {
          label: "Meet with es la cita",
          body:
            "Los hispanohablantes pueden querer traducir reunirse con como reunite with, pero eso suena a reencuentro después de separación. Para una cita normal, meet with es la frase."
        },
        {
          label: "Requirements se meet",
          body:
            "Meet the requirements es una fórmula importante en inglés oficial. No significa conocer a los requisitos; significa cumplirlos."
        },
        {
          label: "Folder no es carpet",
          body:
            "Carpeta parece carpet, pero carpet es alfombra. Para documentos, la palabra es folder. En trámites, esa diferencia evita una confusión muy visible."
        }
      ],
      pitfalls: [
        {
          mistake: "“We gather with the coordinator at five.”",
          whyItFails:
            "Gather with no es la frase normal para una cita. Para reunirse con alguien, use meet with.",
          sayInstead: "We meet with the coordinator at five."
        },
        {
          mistake: "“We gather the requirements” cuando quiere decir cumplirlos",
          whyItFails:
            "Puede sonar como recoger papeles llamados requisitos. La fórmula inglesa para cumplir condiciones es meet the requirements.",
          sayInstead: "We meet the requirements."
        },
        {
          mistake: "“I put the papers in a carpet.”",
          whyItFails:
            "Carpet significa alfombra. Para carpeta de documentos, la palabra correcta es folder.",
          sayInstead: "I put the papers in a folder."
        },
        {
          mistake: "“We reunite with the coordinator” para una cita normal",
          whyItFails:
            "Reunite sugiere reencontrarse después de separación. Una reunión normal es meet with.",
          sayInstead: "We meet with the coordinator."
        }
      ],
      variations: [
        {
          form: "I'll gather the signatures.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Usted junta firmas o documentos."
        },
        {
          form: "We need to bring the neighbours together.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Reunir personas para una acción compartida."
        },
        {
          form: "We're meeting with the coordinator.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Reunirse con una persona específica."
        },
        {
          form: "The project meets the requirements.",
          register: "official neutral",
          region: "Inglés universal",
          whenToUse: "Decir que una solicitud cumple condiciones."
        },
        {
          form: "The meeting is at five.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Dar la hora de la reunión."
        }
      ],
      prompt: "Lina says “gather papers” but “meet with her.” ¿Qué cambia?",
      choices: [
        "Gather collects things; meet with is for meeting a person.",
        "Gather is only for food; meet with is only for clothing.",
        "Both phrases mean satisfying official requirements."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase sirve para reunirse con una coordinadora?",
          choices: [
            "We gather with the coordinator.",
            "We meet with the coordinator.",
            "We folder with the coordinator."
          ],
          answer: 1,
          tests: "meet with for reunirse con"
        },
        {
          prompt: "¿Cuál frase sirve para cumplir requisitos?",
          choices: [
            "We meet the requirements.",
            "We gather the requirements.",
            "We taste the requirements."
          ],
          answer: 0,
          tests: "meet the requirements"
        },
        {
          prompt: "¿Cuál palabra nombra una carpeta de documentos?",
          choices: [
            "A carpet for documents.",
            "A folder for documents.",
            "A flavour for documents."
          ],
          answer: 1,
          tests: "folder, not carpet"
        },
        {
          prompt: "¿Cuál frase junta personas para una acción?",
          choices: [
            "Bring the neighbours together.",
            "Taste the neighbours together.",
            "File the neighbours together."
          ],
          answer: 0,
          tests: "bring people together"
        }
      ]
    }
  },
  {
    id: "asking-what-the-workshop-is-about",
    level: "Extending · Getting it done",
    skills: ["speaking", "listening", "context"],
    domain: "everyday life",
    register: "polite practical",
    pathways: ["extension"],
    verb: "tratar",
    review: "pending",
    es: {
      title: "Preguntar de qué se trata y cómo te trataron",
      situation:
        "Estás en Barichara mirando un taller de oficios para visitantes. No sabes de qué se trata, intentaste llamar antes y una señora de la entrada te trató muy bien. Tienes que separar tratar de, tratar a y tratarse de sin mezclarlos.",
      setting: {
        who: "Mercedes welcomes visitors to a craft workshop, and Noah is trying to understand the activity, explain his failed call, and comment on the welcome.",
        what: "A check-in at a workshop entrance: what the activity is about, whether Noah tried to call, and how the staff treated him.",
        when: "Saturday morning, just before the workshop starts and the last visitors are arriving.",
        where: "Barichara, in the entrance patio of a craft workshop with signs, benches, and a registration table.",
        why: "Because tratar splits three ways: try to do something, treat a person a certain way, and be about a topic. Mixing them changes the meaning sharply."
      },
      address: {
        form: "usted",
        who: "Noah and Mercedes use usted because he is a visitor asking for information and she is receiving people at the workshop.",
        why: "The exchange is warm but service-like. Usted lets Noah ask several questions without sounding pushy.",
        ifYouSwitch:
          "Tú would be possible if Mercedes invited it later, but at the entrance it would sound too familiar. Vos would not fit the register."
      },
      dialogue: [
        {
          speaker: "Noah",
          target: "Buenos días. ¿De qué se trata el taller?",
          translation: "Good morning. What is the workshop about?",
          pronunciation: "BWEH-nos DEE-ahs. deh keh seh TRAH-tah el tah-YEHR",
          literal: "Good days. Of what itself treats the workshop?",
          why: "Tratarse de means to be about. The fixed question is “¿de qué se trata?”, not a question about how someone was treated."
        },
        {
          speaker: "Mercedes",
          target: "Se trata de aprender a reparar una pieza sencilla.",
          translation: "It is about learning to repair a simple piece.",
          pronunciation: "seh TRAH-tah deh ah-pren-DEHR ah rreh-pah-RAR OO-nah PYEH-sah sen-SEE-yah",
          literal: "It itself treats of learning to repair a piece simple.",
          why: "The topic follows de. “Se trata de...” is the shape for explaining what an event, message, or problem is about."
        },
        {
          speaker: "Noah",
          target: "Yo traté de llamar ayer, pero no entró la llamada.",
          translation: "I tried to call yesterday, but the call didn't go through.",
          pronunciation: "yo trah-TEH deh yah-MAR ah-YEHR, PEH-roh noh en-TROH lah yah-MAH-dah",
          literal: "I tried of to-call yesterday, but not entered the call.",
          why: "Tratar de plus infinitive means to try to do something. It is close to intentar, but tratar de is very common in speech."
        },
        {
          speaker: "Mercedes",
          target: "No se preocupe. ¿Lo trataron bien en la entrada?",
          translation: "Don't worry. Did they treat you well at the entrance?",
          pronunciation: "noh seh preh-oh-KOO-peh. loh trah-TAH-ron byen en lah en-TRAH-dah",
          literal: "Do-not worry. You they-treated well at the entrance?",
          why: "Tratar a someone means treat someone a certain way. The personal marker is part of the pattern when the person is named."
        },
        {
          speaker: "Noah",
          target: "Sí, a mí me trataron muy bien.",
          translation: "Yes, they treated me very well.",
          pronunciation: "see, ah mee meh trah-TAH-ron muy byen",
          literal: "Yes, to me they treated me very well.",
          why: "A mí me gives emphasis to the person treated. The meaning is about treatment, not an attempt and not a topic."
        },
        {
          speaker: "Mercedes",
          target: "Perfecto: trató de llamar, lo trataron bien y ya sabe de qué se trata.",
          translation: "Perfect: you tried to call, they treated you well, and now you know what it is about.",
          pronunciation: "pehr-FEK-toh: trah-TOH deh yah-MAR, loh trah-TAH-ron byen ee yah SAH-beh deh keh seh TRAH-tah",
          literal: "Perfect: you tried of to-call, they treated you well and already know of what itself treats.",
          why: "The summary lines up the three meanings so they do not collapse into one: attempt, treatment, and subject matter."
        }
      ],
      vocabulary: [
        {
          term: "tratar",
          explanation:
            "A split verb: try to do something, treat someone a certain way, or be about a topic when used as tratarse de.",
          literal: "to treat / to try / to be about",
          useWhen:
            "Use the right pattern: tratar de plus infinitive, tratar a plus person, or tratarse de for subject matter.",
          avoidWhen:
            "Avoid moving the prepositions around. The pattern decides the meaning.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["tratar de", "tratar a", "tratarse de", "trato"],
          example: {
            target: "¿De qué se trata el taller?",
            translation: "What is the workshop about?"
          }
        },
        {
          term: "tratar de",
          explanation:
            "To try to do something. It is followed by an infinitive and overlaps with intentar.",
          literal: "to try of",
          useWhen:
            "Use it for attempts: trying to call, explain, arrive, fix, or understand.",
          avoidWhen:
            "Avoid using it for treating a person. “Traté de Laura” does not mean I treated Laura.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["intenté", "procurar", "hacer el intento", "tratar"],
          example: {
            target: "Traté de llamar ayer.",
            translation: "I tried to call yesterday."
          }
        },
        {
          term: "tratar a",
          explanation:
            "To treat a person in a certain way. The personal marker appears before a named person.",
          literal: "to treat personal-a",
          useWhen:
            "Use it when saying someone treated a guest, child, customer, patient, or neighbour well or badly.",
          avoidWhen:
            "Avoid confusing it with tratar de. “Tratar de llamar” is an attempt; “tratar a Laura bien” is treatment.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["tratar bien", "tratar mal", "me trataron", "personal a"],
          example: {
            target: "Trataron muy bien a Noah.",
            translation: "They treated Noah very well."
          }
        },
        {
          term: "tratarse de",
          explanation:
            "To be about. The common question is “¿de qué se trata?” for an event, book, workshop, message, or problem.",
          literal: "to treat itself of",
          useWhen:
            "Use it when asking or explaining the subject matter of something.",
          avoidWhen:
            "Avoid using it for how someone was treated. That is tratar a someone, not tratarse de someone.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["¿de qué se trata?", "se trata de", "tema", "asunto"],
          example: {
            target: "Se trata de un taller sencillo.",
            translation: "It is about a simple workshop."
          }
        },
        {
          term: "¿de qué se trata?",
          explanation:
            "What is it about? A compact, natural question for a class, meeting, film, message, problem, or event.",
          literal: "of what is it about?",
          useWhen:
            "Use it before joining something or responding to a message whose purpose is not clear.",
          avoidWhen:
            "Avoid asking it about a person when you mean how they were treated.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["tema", "asunto", "explicar", "se trata de"],
          example: {
            target: "¿De qué se trata el taller?",
            translation: "What is the workshop about?"
          }
        },
        {
          term: "me trataron bien",
          explanation:
            "They treated me well. This is about the welcome, service, respect, or care someone received.",
          literal: "they treated me well",
          useWhen:
            "Use it after a visit, office, clinic, shop, workshop, or family invitation where treatment matters.",
          avoidWhen:
            "Avoid using it to mean you tried hard. The person receiving treatment is the object.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["me trataron mal", "trato", "atención", "amabilidad"],
          example: {
            target: "A mí me trataron muy bien.",
            translation: "They treated me very well."
          }
        },
        {
          term: "el trato",
          explanation:
            "The treatment someone receives: courteous, cold, rough, warm, fair, or unfair.",
          literal: "the treatment",
          useWhen:
            "Use it when evaluating how a person or institution dealt with someone.",
          avoidWhen:
            "Avoid confusing it with a business deal in every context. In service scenes, trato often means treatment.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["buen trato", "mal trato", "tratar", "atención"],
          example: {
            target: "El trato fue muy amable.",
            translation: "The treatment was very kind."
          }
        }
      ],
      note:
        "Tratar is all about the pattern. “Traté de llamar” means I tried to call. “Traté a Laura bien” means I treated Laura well, with the personal marker before the person. “¿De qué se trata?” means what is it about. Change de to a, or drop se, and you have not made a small mistake; you have changed the meaning.",
      culture: [
        {
          label: "The pattern carries the meaning",
          body:
            "Some verbs change meaning mostly through the words around them. Tratar is one of them. Colombians will not just hear a wrong preposition; they will hear a different relationship between people, actions, and topics."
        },
        {
          label: "Good treatment is worth naming",
          body:
            "After a workshop, office, clinic, or family visit, “me trataron muy bien” is a normal and important evaluation. It says more than the task was done; it says the person was received with care."
        },
        {
          label: "The question is useful everywhere",
          body:
            "“¿De qué se trata?” works for workshops, films, meetings, voice notes, problems, and rumours. It is one of the cleanest ways to ask for the point before committing attention."
        },
        {
          label: "Try to is not treat",
          body:
            "English makes the confusion worse because try and treat are separate words. Spanish keeps the same root and changes the structure. Learners need the whole pattern, not just the dictionary entry."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “traté a llamar” for “I tried to call”",
          whyItFails:
            "The attempt pattern is tratar de plus infinitive. Tratar a points toward a person being treated.",
          sayInstead: "Traté de llamar."
        },
        {
          mistake: "Saying “traté de Laura muy bien”",
          whyItFails:
            "That sounds like you tried to do something involving Laura, not that you treated Laura well. Treatment needs tratar a.",
          sayInstead: "Traté a Laura muy bien."
        },
        {
          mistake: "Asking “¿qué trata el taller?” in conversation",
          whyItFails:
            "People may understand, but the natural question for subject matter is pronominal: “¿de qué se trata?”",
          sayInstead: "¿De qué se trata el taller?"
        },
        {
          mistake: "Forgetting the personal marker with a named person",
          whyItFails:
            "When the treated object is a person, Spanish marks that person. It is tratar a Laura, not tratar Laura.",
          sayInstead: "Trataron muy bien a Noah."
        }
      ],
      variations: [
        {
          form: "Traté de llamarte.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "You tried to call someone."
        },
        {
          form: "Me trataron muy bien.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Reporting good service, welcome, or care."
        },
        {
          form: "Trataron muy bien a mi mamá.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Naming the person who received the treatment."
        },
        {
          form: "¿De qué se trata?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Asking what an event, message, or problem is about."
        },
        {
          form: "Se trata de un taller para visitantes.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Explaining the subject or purpose of something."
        }
      ],
      prompt: "Mercedes says “trató de llamar,” “lo trataron bien,” and “de qué se trata.” What is the lesson?",
      choices: [
        "Tratar changes meaning with de, a, and tratarse de.",
        "Tratar always means the same thing in every sentence.",
        "Tratar only works for official forms and requirements."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence means “I tried to call you”?",
          choices: [
            "Traté a llamarte.",
            "Traté de llamarte.",
            "Me traté llamarte."
          ],
          answer: 1,
          tests: "tratar de plus infinitive"
        },
        {
          prompt: "Which sentence means someone treated Laura well?",
          choices: [
            "Trataron muy bien a Laura.",
            "Trataron de Laura muy bien.",
            "Se trató de Laura muy bien."
          ],
          answer: 0,
          tests: "tratar a plus person"
        },
        {
          prompt: "Which question asks what something is about?",
          choices: [
            "¿De qué se trata?",
            "¿A quién se trata?",
            "¿Quién trata de?"
          ],
          answer: 0,
          tests: "tratarse de for subject matter"
        },
        {
          prompt: "Which sentence includes the personal marker?",
          choices: [
            "Trataron bien Laura.",
            "Trataron bien de Laura.",
            "Trataron bien a Laura."
          ],
          answer: 2,
          tests: "personal a with tratar a"
        }
      ]
    },
    en: {
      title: "Preguntar de qué se trata y cómo lo trataron",
      situation:
        "Usted está en Boston entrando a un taller para visitantes de una comunidad colombiana. No sabe de qué se trata, intentó llamar antes y quiere decir que lo trataron bien. Necesita separar try to, treat someone y be about.",
      setting: {
        who: "Mercedes recibe visitantes en un taller de oficios, y Noah intenta entender la actividad, explicar una llamada fallida y comentar el buen trato.",
        what: "Una llegada al taller: de qué se trata la actividad, si Noah trató de llamar y cómo lo trataron en la entrada.",
        when: "Sábado por la mañana, justo antes de que empiece el taller y mientras llegan los últimos visitantes.",
        where: "Boston, en el patio de entrada de un taller comunitario con letreros, bancas y mesa de registro.",
        why: "Porque tratar se divide en inglés en tres piezas: try to do something, treat someone a certain way, and be about a topic."
      },
      address: {
        form: "mixed",
        who: "Noah y Mercedes usan nombres y el mismo you; la cortesía viene de good morning, please y preguntas completas.",
        why: "El inglés no cambia el pronombre entre visitante y anfitriona. El tono y la estructura sostienen el respeto.",
        ifYouSwitch:
          "Volver todo demasiado formal puede sonar menos natural en una bienvenida comunitaria. Una frase clara y amable funciona mejor."
      },
      dialogue: [
        {
          speaker: "Noah",
          target: "Good morning. What is the workshop about?",
          translation: "Buenos días. ¿De qué se trata el taller?",
          pronunciation: "gud MOR-ning. uat iz de WERK-shop a-BAUT",
          literal: "Buenos días. ¿Acerca de qué es el taller?",
          why: "La expresión “be about” traduce tratarse de. La pregunta natural es “what is it about?”, no “what does it treat of?”"
        },
        {
          speaker: "Mercedes",
          target: "It's about learning to repair a simple piece.",
          translation: "Se trata de aprender a reparar una pieza sencilla.",
          pronunciation: "its a-BAUT LER-ning tu ri-PEIR a SIM-pol pis",
          literal: "Es acerca de aprender a reparar una pieza sencilla.",
          why: "It's about introduce el tema o propósito. About hace el trabajo que en español hace de en se trata de."
        },
        {
          speaker: "Noah",
          target: "I tried to call yesterday, but the call didn't go through.",
          translation: "Yo traté de llamar ayer, pero no entró la llamada.",
          pronunciation: "ai traid tu kol YES-ter-dei, bot de kol DI-dent gou thru",
          literal: "Intenté llamar ayer, pero la llamada no pasó por dentro.",
          why: "Try to traduce tratar de antes de un infinitivo. La estructura necesita un verbo después: call, explain, arrive."
        },
        {
          speaker: "Mercedes",
          target: "Don't worry. Did they treat you well at the entrance?",
          translation: "No se preocupe. ¿Lo trataron bien en la entrada?",
          pronunciation: "dount UO-ri. did dei trit yu wel at di EN-trans",
          literal: "No se preocupe. ¿Lo trataron bien en la entrada?",
          why: "Treat someone well habla del trato que recibió una persona. No es un intento y no es el tema de un taller."
        },
        {
          speaker: "Noah",
          target: "Yes, they treated me very well.",
          translation: "Sí, a mí me trataron muy bien.",
          pronunciation: "yes, dei TRI-ted mi VE-ri wel",
          literal: "Sí, ellos me trataron muy bien.",
          why: "Treated me very well es la evaluación del servicio o bienvenida. El objeto me dice quién recibió el trato."
        },
        {
          speaker: "Mercedes",
          target: "Perfect: you tried to call, they treated you well, and now you know what it's about.",
          translation: "Perfecto: trató de llamar, lo trataron bien y ya sabe de qué se trata.",
          pronunciation: "PER-fekt: yu traid tu kol, dei TRI-ted yu wel, and nau yu nou uat its a-BAUT",
          literal: "Perfecto: intentó llamar, lo trataron bien y ahora sabe acerca de qué es.",
          why: "La línea separa los tres verbos ingleses que un solo tratar español puede esconder: try, treat y be about."
        }
      ],
      vocabulary: [
        {
          term: "try to",
          explanation:
            "Tratar de o intentar. Necesita otro verbo después.",
          literal: "intentar a",
          useWhen:
            "Úselo para acciones que usted intenta: call, explain, arrive, fix, understand.",
          avoidWhen:
            "No lo use para tratar a una persona. That is treat someone.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["attempt to", "tried to", "manage to", "try"],
          example: {
            target: "I tried to call yesterday.",
            translation: "Traté de llamar ayer."
          }
        },
        {
          term: "treat someone",
          explanation:
            "Tratar a alguien de cierta manera. El objeto nombra a la persona que recibe el trato.",
          literal: "tratar a alguien",
          useWhen:
            "Úselo para decir que alguien fue tratado well, badly, fairly, kindly, or rudely.",
          avoidWhen:
            "No lo confunda con try to. “I treated to call” no existe.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["treated me", "treatment", "well", "badly"],
          example: {
            target: "They treated Noah very well.",
            translation: "Trataron muy bien a Noah."
          }
        },
        {
          term: "be about",
          explanation:
            "Tratarse de. Sirve para el tema de un taller, mensaje, película, reunión o problema.",
          literal: "ser acerca de",
          useWhen:
            "Úselo cuando pregunta o explica el tema central de algo.",
          avoidWhen:
            "No diga treat of en conversación normal. Suena raro o demasiado antiguo.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["about", "topic", "subject", "purpose"],
          example: {
            target: "What is the workshop about?",
            translation: "¿De qué se trata el taller?"
          }
        },
        {
          term: "what is it about?",
          explanation:
            "¿De qué se trata? Es la pregunta básica para pedir el tema o propósito.",
          literal: "¿acerca de qué es?",
          useWhen:
            "Úsela con talleres, películas, mensajes, reuniones, problemas o historias.",
          avoidWhen:
            "No la use para preguntar cómo trataron a una persona. Ahí necesita how did they treat you?",
          register: "neutral",
          region: "Inglés universal.",
          related: ["what's the topic", "what's the point", "about", "purpose"],
          example: {
            target: "What is it about?",
            translation: "¿De qué se trata?"
          }
        },
        {
          term: "treated me well",
          explanation:
            "Me trataron bien. Habla de atención, bienvenida, cuidado o respeto.",
          literal: "me trataron bien",
          useWhen:
            "Úselo después de una visita, oficina, taller, cita, tienda o invitación.",
          avoidWhen:
            "No lo use para decir que intentó algo. Treated needs a person receiving treatment.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["treated me badly", "treatment", "service", "kindly"],
          example: {
            target: "They treated me very well.",
            translation: "Me trataron muy bien."
          }
        },
        {
          term: "treatment",
          explanation:
            "El trato que recibe una persona. Puede ser amable, frío, justo, injusto o profesional.",
          literal: "tratamiento / trato",
          useWhen:
            "Úselo para evaluar servicio, atención médica, bienvenida o manera de tratar a alguien.",
          avoidWhen:
            "En medicina también significa tratamiento. El contexto decide si es trato o terapia.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["service", "care", "treated", "respect"],
          example: {
            target: "The treatment was very kind.",
            translation: "El trato fue muy amable."
          }
        },
        {
          term: "go through",
          explanation:
            "Entrar o pasar correctamente, especialmente una llamada, pago o trámite digital.",
          literal: "pasar a través",
          useWhen:
            "Úselo cuando una llamada conecta, un pago entra o una solicitud se procesa.",
          avoidWhen:
            "No lo traduzca palabra por palabra en todos los contextos. Aquí describe que la llamada sí pasó.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["call", "connect", "process", "work"],
          example: {
            target: "The call didn't go through.",
            translation: "No entró la llamada."
          }
        }
      ],
      note:
        "Tratar se divide en inglés en tres verbos corrientes. “Traté de llamar” is “I tried to call.” “Me trataron bien” is “they treated me well.” “¿De qué se trata?” is “what is it about?” No intente conservar una sola palabra inglesa para los tres casos; la estructura manda.",
      culture: [
        {
          label: "About es la pregunta del tema",
          body:
            "What is it about? sirve para entrar a una conversación sin fingir que ya entiende. Es directa, normal y mucho más natural que una traducción literal de tratarse de."
        },
        {
          label: "Treatment puede ser trato",
          body:
            "Treatment no siempre es tratamiento médico. En servicio o bienvenida, puede hablar del trato que recibió una persona: kind treatment, fair treatment, bad treatment."
        },
        {
          label: "Try to necesita acción",
          body:
            "Try to queda incompleto sin otro verbo. Esa estructura ayuda a no confundir intento con trato: tried to call, tried to explain, tried to arrive."
        },
        {
          label: "The call didn't go through",
          body:
            "Para una llamada que no entra, didn't go through es una frase natural. No describe caminar por un lugar; describe que la conexión o proceso falló."
        }
      ],
      pitfalls: [
        {
          mistake: "“I treated to call you.”",
          whyItFails:
            "Treat no sirve para intentar una acción. Para tratar de llamar, use try to call.",
          sayInstead: "I tried to call you."
        },
        {
          mistake: "“They tried me very well.”",
          whyItFails:
            "Try no habla del trato que recibe una persona. Para eso necesita treat.",
          sayInstead: "They treated me very well."
        },
        {
          mistake: "“What does the workshop treat of?”",
          whyItFails:
            "Es una traducción literal y suena anticuada o rara. La pregunta natural es be about.",
          sayInstead: "What is the workshop about?"
        },
        {
          mistake: "“The call didn't enter.”",
          whyItFails:
            "Enter no es la frase natural para una llamada que no conecta. Use go through.",
          sayInstead: "The call didn't go through."
        }
      ],
      variations: [
        {
          form: "I tried to call you.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Usted intentó llamar a alguien."
        },
        {
          form: "They treated me very well.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Contar que recibió buen trato."
        },
        {
          form: "They treated my mother very well.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Nombrar a la persona que recibió el trato."
        },
        {
          form: "What is it about?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Preguntar de qué se trata algo."
        },
        {
          form: "It's about a workshop for visitors.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Explicar el tema o propósito de algo."
        }
      ],
      prompt: "Mercedes says “try to call,” “treated you well,” and “what it's about.” ¿Qué debe notar?",
      choices: [
        "One Spanish tratar becomes different English structures.",
        "English uses treat for every one of these meanings.",
        "English has no way to ask what something is about."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase significa traté de llamarte?",
          choices: [
            "I treated to call you.",
            "I tried to call you.",
            "I about to call you."
          ],
          answer: 1,
          tests: "try to for tratar de"
        },
        {
          prompt: "¿Cuál frase significa que lo trataron bien?",
          choices: [
            "They treated me very well.",
            "They tried me very well.",
            "They about me very well."
          ],
          answer: 0,
          tests: "treat someone for tratar a"
        },
        {
          prompt: "¿Cuál pregunta pide el tema del taller?",
          choices: [
            "What is it about?",
            "What does it treat?",
            "Who did it try?"
          ],
          answer: 0,
          tests: "be about for tratarse de"
        },
        {
          prompt: "¿Cuál frase explica que la llamada falló?",
          choices: [
            "The call didn't enter.",
            "The call didn't treat.",
            "The call didn't go through."
          ],
          answer: 2,
          tests: "go through for a call connecting"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/61-extending-getting-it-done.js");
