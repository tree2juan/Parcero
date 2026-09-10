/*
 * Lesson block: independent / reporting and perspective.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first.
 *
 * These three lessons are GRAMMAR lessons, not verb lessons: each spines on one
 * entry from data/structures.js, named in its `structure` field, and carries no
 * `verb`. test/shape.test.js and scripts/check-lesson-block.js demand that the
 * structure exists, is used once, and that the taught pattern is actually spoken
 * in the es dialogue (each structure carries a `probe` regex it must match).
 *
 * The three structures — reported-speech, hypothetical-present and
 * passive-and-impersonal — were all chosen from a measurement of the finished
 * corpus, not a syllabus: 20 reported clauses never taught, 9 formulaic
 * si-clauses, and 3 true passives against 263 se-passives with the difference
 * never explained.
 *
 * The settings step well outside Bogotá and Medellín: Cali in the Valle del
 * Cauca (salsa and valluno voseo), Buenaventura on the Pacific (the country's
 * main Pacific port, its Afro-Colombian community and its extraordinary rain),
 * and Quibdó in Chocó (a river city famous for its distinct speech, its music
 * and its isolation). The dialect on show is kept general; regional color is
 * flagged in the `region` fields rather than invented to decorate a scene.
 */
lessons.push(
  {
    id: "relaying-the-message-at-a-cali-salsa-academy",
    level: "Developing · Reporting and perspective",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "home-and-neighborhood",
    register: "neutral",
    pathways: ["independent", "year-12"],
    structure: "reported-speech",
    review: "pending",
    es: {
      title: "Lo que dijo la profe",
      situation:
        "Andrés y Marcela atienden la recepción de una academia de salsa en el barrio San Fernando, en Cali. La profe Yolanda no va a llegar y toca reorganizar las clases del día. Entre alumnos que preguntan y razones que dejar, los dos se ponen al día repitiendo lo que dijo cada quien: quién no viene, qué pidió y qué hay que avisar.",
      setting: {
        who: "Andrés and Marcela run the front desk of a salsa academy in Cali; Yolanda is the instructor whose message they are passing around.",
        what: "The instructor has called in sick, so the two of them reorganise the day's classes by relaying what everyone said, asked and requested.",
        when: "A weekday morning, just before the first classes, the phones already ringing.",
        where: "Cali, Valle del Cauca, the reception desk of a salsa academy in the San Fernando neighborhood.",
        why: "Reported speech is the everyday glue of a busy front desk: almost nothing said here is first-hand, so you live in dijo que, preguntó si and me pidió que."
      },
      address: {
        form: "mixed",
        who: "Andrés and Marcela are workmates and friends, so they slide between the caleño vos (¿vos supiste?, mirá) and a warm usted, the way Cali really talks.",
        why: "In the Valle, vos among friends is completely normal and sounds close rather than rough, while usted still turns up as an affectionate default. Neither is disrespectful between peers.",
        ifYouSwitch:
          "Go all-usted and you sound a touch more careful; reach for tú and you sound slightly foreign in Cali, where vos and usted are the real pair. Match whichever your workmate uses."
      },
      dialogue: [
        {
          speaker: "Andrés",
          target: "Marce, ¿vos supiste? La profe Yolanda me dijo que hoy no venía a la academia.",
          translation: "Marce, did you hear? Yolanda told me she wasn't coming to the academy today.",
          pronunciation: "MAR-se, vos su-PIS-te? la PRO-fe yo-LAN-da me DEE-ho ke oi no ve-NEE-a a la a-ka-DE-mya",
          literal: "Marce, you knew? The teacher Yolanda to-me she-said that today not she-was-coming to the academy.",
          why: "“Me dijo que” opens a reported statement, and the tense steps back: her live words “hoy no vengo” become dijo que hoy no venía. “¿Vos supiste?” is caleño voseo for “did you hear/find out?”."
        },
        {
          speaker: "Marcela",
          target: "Sí, me llamó tempranito. Dijo que estaba con gripa y me pidió que la reemplazara en la clase de las seis.",
          translation: "Yeah, she called me early. She said she had a cold and asked me to cover her six o'clock class.",
          pronunciation: "see, me ya-MO tem-pra-NEE-to. DEE-ho ke es-TA-ba kon GREE-pa i me pi-DYO ke la re-em-pla-SA-ra en la KLA-se de las seis",
          literal: "Yes, me she-called early. She-said that she-was with flu and me she-asked that her I-replace in the class of the six.",
          why: "Two patterns in one line: dijo que + estaba (backshift of “estoy con gripa”), and pedir que + the imperfect subjunctive reemplazara for a relayed request — never reemplazo, the indicative."
        },
        {
          speaker: "Andrés",
          target: "Uf. ¿Y dejó alguna razón para los alumnos? Ayer doña Rosa preguntó si había clase el sábado.",
          translation: "Ugh. And did she leave any message for the students? Yesterday doña Rosa asked if there was a class on Saturday.",
          pronunciation: "oof. i de-HO al-GU-na ra-SON PA-ra los a-LUM-nos? a-YER DO-nya RO-sa pre-gun-TO see a-BEE-a KLA-se el SA-ba-do",
          literal: "Ugh. And she-left any message for the students? Yesterday doña Rosa she-asked if there-was class the Saturday.",
          why: "A reported yes/no question uses preguntar si, and the verb backshifts too: her “¿hay clase?” becomes preguntó si había clase. “Razón” here is a spoken message, the Colombian sense of the word."
        },
        {
          speaker: "Marcela",
          target: "Sí. Me pidió que les avisara que la clase del sábado se pasaba para el domingo, y que no dijéramos nada en redes todavía.",
          translation: "Yes. She asked me to let them know that Saturday's class was moving to Sunday, and that we shouldn't post anything on social media yet.",
          pronunciation: "see. me pi-DYO ke les a-vi-SA-ra ke la KLA-se del SA-ba-do se pa-SA-ba PA-ra el do-MIN-go, i ke no di-HE-ra-mos NA-da en RE-des to-da-VEE-a",
          literal: "Yes. Me she-asked that to-them I-notify that the class of-the Saturday itself it-moved to the Sunday, and that not we-say nothing in networks yet.",
          why: "Requests chain through the subjunctive: pidió que avisara, que no dijéramos. Inside sits a reported statement with its own backshift — “se pasa” becomes se pasaba."
        },
        {
          speaker: "Andrés",
          target: "Listo. Ah, y el DJ comentó que ya tenía lista la playlist para la coreografía.",
          translation: "Got it. Oh, and the DJ mentioned he already had the playlist ready for the choreography.",
          pronunciation: "LIS-to. ah, i el DEE-yei ko-men-TO ke ya te-NEE-a LEES-ta la PLEI-list PA-ra la ko-re-o-gra-FEE-a",
          literal: "Ready. Ah, and the DJ he-mentioned that already he-had ready the playlist for the choreography.",
          why: "Comentar que is a lighter decir que for passing along an aside; the backshift is the same, so his “ya tengo” becomes comentó que ya tenía."
        },
        {
          speaker: "Marcela",
          target: "Bien pensado. Y Yolanda dijo que al día siguiente llegaba a primera hora; me pidió que abriéramos a las ocho, no acá sino allá, en la sede nueva.",
          translation: "Good thinking. And Yolanda said that the next day she'd get in first thing; she asked us to open at eight, not here but there, at the new branch.",
          pronunciation: "byen pen-SA-do. i yo-LAN-da DEE-ho ke al DEE-a si-GYEN-te ye-GA-ba a pri-ME-ra O-ra; me pi-DYO ke a-BRYE-ra-mos a las O-cho, no a-KA SEE-no a-YA, en la SE-de NWE-va",
          literal: "Well thought. And Yolanda she-said that on-the day following she-arrived at first hour; me she-asked that we-open at the eight, not here but there, in the branch new.",
          why: "The time and place words move with the report: her “mañana” becomes al día siguiente, and “acá” becomes allá because you are relaying it from somewhere else. Again pedir que + subjunctive: abriéramos."
        }
      ],
      vocabulary: [
        {
          term: "decir que",
          explanation:
            "The workhorse for reporting a statement: decir + que + a clause whose tense usually steps back from the words originally spoken.",
          literal: "to say that",
          useWhen:
            "Passing on what someone stated: “dijo que venía”, “dicen que llueve por la tarde”.",
          avoidWhen:
            "You are quoting word for word — then use direct speech with the exact words, not decir que.",
          register: "neutral",
          region: "Universal Spanish; the everyday reporting verb across Colombia.",
          related: ["contar que", "comentar que", "avisar que", "según"],
          example: {
            target: "Dijo que llegaba tarde.",
            translation: "He said he was arriving late."
          }
        },
        {
          term: "preguntar si",
          explanation:
            "How you report a yes/no question: preguntar + si (no accent), with the verb backshifted just as a statement would be.",
          literal: "to ask if / whether",
          useWhen:
            "Relaying a closed question: “preguntó si había clase”, “me preguntó si podía entrar”.",
          avoidWhen:
            "It was an open question with qué, cuándo or dónde — keep that word: “preguntó cuándo empezaba”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["preguntar qué", "preguntar cuándo", "querer saber si", "si"],
          example: {
            target: "Me preguntó si venías.",
            translation: "She asked me if you were coming."
          }
        },
        {
          term: "pedir que",
          explanation:
            "Reporting a request or an order: pedir + que + a verb in the imperfect subjunctive (esperara, abriéramos).",
          literal: "to ask that / to ask someone to",
          useWhen:
            "Relaying what someone wanted done: “me pidió que esperara”, “nos pidió que llegáramos temprano”.",
          avoidWhen:
            "You are reporting a plain fact, not a request — that is decir que with the indicative.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["pedir el favor de", "rogar que", "exigir que", "el subjuntivo"],
          example: {
            target: "Nos pidió que abriéramos temprano.",
            translation: "She asked us to open early."
          }
        },
        {
          term: "comentar que",
          explanation:
            "A softer decir que for passing along news or an aside — “to mention that”, without the weight of an official statement.",
          literal: "to comment that",
          useWhen:
            "Relaying casual news: “comentó que traía la música”, “me comentaron que se mudó”.",
          avoidWhen:
            "You need a firm, on-the-record statement — decir que carries more authority.",
          register: "friendly informal",
          region: "Universal Spanish; very common in Colombian chat.",
          related: ["contar que", "mencionar que", "decir que", "soltar que"],
          example: {
            target: "Comentó que ya venía en camino.",
            translation: "He mentioned he was already on his way."
          }
        },
        {
          term: "avisar",
          explanation:
            "To let someone know or give a heads-up; it is often the content of a relayed request, as in pidió que avisara.",
          literal: "to notify / to warn",
          useWhen:
            "Passing on a heads-up: “me pidió que avisara”, “avísame si cambia algo”.",
          avoidWhen:
            "For a heavy, formal warning use advertir; avisar is the everyday heads-up.",
          register: "neutral",
          region: "Universal Spanish; heavily used in Colombia.",
          related: ["advertir", "informar", "dar aviso", "la razón"],
          example: {
            target: "Avisó que no alcanzaba a llegar.",
            translation: "He let us know he wouldn't make it in time."
          }
        },
        {
          term: "la razón",
          explanation:
            "In Colombia, a spoken message you leave with someone to pass on — “dejar razón”, not a mathematical reason.",
          literal: "the message (lit. the reason)",
          useWhen:
            "Talking about a passed-on message: “¿dejó razón?”, “mándale razón con Ana”.",
          avoidWhen:
            "You mean a written text — for that it is un mensaje; razón is the message carried by a person.",
          register: "friendly informal",
          region: "Colombia and much of Latin America; strongly idiomatic.",
          related: ["dejar razón", "mandar razón", "el recado", "el mensaje"],
          example: {
            target: "Me dejó razón con la portera.",
            translation: "She left a message for me with the caretaker."
          }
        },
        {
          term: "al día siguiente",
          explanation:
            "The reported-speech stand-in for mañana: when you relay yesterday's words today, tomorrow becomes “the next day”.",
          literal: "on the following day",
          useWhen:
            "Shifting time words in a report: “dijo que al día siguiente llegaba”.",
          avoidWhen:
            "You are speaking in the present about a real tomorrow — then it is simply mañana.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["ese día", "el día anterior", "esa semana", "mañana"],
          example: {
            target: "Prometió que volvía al día siguiente.",
            translation: "He promised he'd come back the next day."
          }
        }
      ],
      note:
        "Reported speech in Spanish shifts twice. The tense steps back — “vengo” becomes dijo que venía, “llegaré” becomes llegaría — and the small words move too: mañana turns into al día siguiente, aquí into allá, hoy into ese día. Statements go through decir, comentar or avisar que; yes/no questions through preguntar si; requests through pedir que with the imperfect subjunctive — she pidió que la esperara, not que la espero.",
      culture: [
        {
          label: "Cali lives and breathes salsa",
          body:
            "Cali calls itself the world capital of salsa, and earns it: salsa caleña has its own blistering footwork, and academias de baile sit on ordinary street corners the way gyms do elsewhere. A busy front desk like this runs on relayed messages all day — the exact habitat where reported speech becomes second nature."
        },
        {
          label: "Leaving a razón",
          body:
            "Long before voicemail, Colombians ran on the razón: a spoken message handed to whoever you could find. You “dejas razón” with the caretaker or “mandas razón con” a friend, and it travels word of mouth until it lands. It is a small engine of reported speech — a razón is, by definition, something you pass on as what someone else said."
        },
        {
          label: "Dizque: news you won't vouch for",
          body:
            "Colombian Spanish has a built-in hearsay marker: dizque, worn down from “dice que”. Put it before a claim and you flag it as rumor you are relaying, not asserting — “dizque no viene hoy”. You will also hear a bare que open a relayed line (“que llames a la profe”). Both keep the speaker at arm's length from the claim."
        },
        {
          label: "Cali habla con vos",
          body:
            "The Valle is voseante: caleños say vos tenés, vos sabés, mirá, contá, in a warm register among friends. It coexists with usted, which turns up as an affectionate default, so one conversation can move between the two. This is not Argentine voseo, though the endings rhyme; mistaking it for careless tú is the outsider's first slip."
        }
      ],
      pitfalls: [
        {
          mistake: "“Me pidió que la espero.”",
          whyItFails:
            "After pedir que, the relayed request needs the imperfect subjunctive, not the present indicative. “Espero” turns it into a statement about yourself rather than the request she made; the verb has to move to esperara.",
          sayInstead: "Me pidió que la esperara."
        },
        {
          mistake: "“Me preguntó si estaba viniendo.”",
          whyItFails:
            "This calques the English progressive “was coming”. Spanish reports the yes/no question with a plain imperfect — preguntó si venía — and the estar + gerund sounds heavier and more translated than the language wants here.",
          sayInstead: "Me preguntó si venía."
        },
        {
          mistake: "“Dijo que mañana llegaba” (contándolo días después).",
          whyItFails:
            "If the “tomorrow” was said last week, relaying it today with mañana points at the wrong day. Reported speech shifts the time word: mañana becomes al día siguiente, hoy becomes ese día, ayer becomes el día anterior.",
          sayInstead: "Dijo que al día siguiente llegaba."
        },
        {
          mistake: "“Dijo de que venía.”",
          whyItFails:
            "That extra de is dequeísmo, and it does not belong after decir. Decir, pedir and preguntar take que with no preposition; the de creeps in from verbs like acordarse de and hangs on where it shouldn't.",
          sayInstead: "Dijo que venía."
        }
      ],
      variations: [
        {
          form: "Dijo que no venía hoy.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A plain, backshifted report of a statement."
        },
        {
          form: "Dizque no viene.",
          register: "friendly informal",
          region: "Colombia; very common",
          whenToUse: "Flagging it as hearsay you won't personally vouch for."
        },
        {
          form: "Me pidió el favor de esperarla.",
          register: "polite",
          region: "Colombia",
          whenToUse: "A softer, very Colombian way to relay a request."
        },
        {
          form: "Preguntó que si había clase.",
          register: "friendly informal",
          region: "Colombia, colloquial",
          whenToUse: "Everyday spoken reporting of a yes/no question, with an extra que."
        }
      ],
      prompt: "Marcela says “me pidió que la reemplazara en la clase.” Why reemplazara and not reemplazo?",
      choices: [
        "Because a relayed request after pedir que takes the imperfect subjunctive, so the verb shifts to reemplazara here.",
        "Because the class already happened last week, which forces every reported verb into a past-tense ending.",
        "Because reemplazara is just the polite form of the verb that Colombians prefer when talking to a boss."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence correctly reports the yes/no question “¿Hay clase el sábado?”",
          choices: [
            "Doña Rosa preguntó que hay clase el sábado en la academia de salsa.",
            "Doña Rosa preguntó si había clase el sábado en la academia de salsa.",
            "Doña Rosa dijo si hubo clase el sábado en la academia de salsa."
          ],
          answer: 1,
          tests: "reported yes/no = preguntar si + backshift (había)"
        },
        {
          prompt: "Yolanda spoke on Friday about “mañana.” Relaying it now, on Sunday, which is right?",
          choices: [
            "Dijo que mañana llegaba a primera hora a la sede nueva.",
            "Dijo que ayer llegaba a primera hora a la sede nueva.",
            "Dijo que al día siguiente llegaba a primera hora a la sede nueva."
          ],
          answer: 2,
          tests: "mañana → al día siguiente once the reference day has passed"
        },
        {
          prompt: "How would you relay the order “Espérala, por favor” as a request Marcela received?",
          choices: [
            "Me pidió que la esperara.",
            "Me pidió que la espero.",
            "Me pidió de esperarla."
          ],
          answer: 0,
          tests: "pedir que + imperfect subjunctive (esperara), not indicative or pedir de"
        }
      ]
    },
    en: {
      title: "Lo que dijo la instructora",
      situation:
        "En un estudio de baile en Houston, Kevin y Daniela abren la recepción. La instructora Yolanda no va a llegar y hay que reorganizar el día. Daniela, que es colombiana y está afinando su inglés, tiene que repetir en inglés lo que dijo, preguntó y pidió cada persona: quién no viene, qué clase se mueve y qué hay que avisar.",
      setting: {
        who: "Kevin es el encargado del estudio; Daniela, colombiana recién llegada, atiende la recepción y practica su inglés relatando los mensajes.",
        what: "La instructora avisó que no viene, así que entre los dos reorganizan las clases repitiendo en inglés lo que cada quien dijo, preguntó y pidió.",
        when: "Una mañana entre semana, antes de la primera clase, con el teléfono sonando.",
        where: "Houston, Texas, la recepción de un estudio de baile.",
        why: "El estilo indirecto es el pan de cada día en una recepción: casi nada es de primera mano, así que se vive en “she said that”, “he asked if” y “she asked me to”."
      },
      address: {
        form: "mixed",
        who: "Kevin y Daniela se tratan por el nombre y con confianza, como es normal entre compañeros jóvenes en Estados Unidos.",
        why: "El inglés no distingue tú de usted: la cercanía se marca con el tono, el nombre de pila y frases sueltas, no con el pronombre. “You” sirve para todos.",
        ifYouSwitch:
          "Si Daniela quisiera sonar más formal con un cliente, no cambia el “you”: usa frases más completas y corteses, como “Could you…” o “Would you mind…”, no otro pronombre."
      },
      dialogue: [
        {
          speaker: "Kevin",
          target: "Hey Dani, did you hear? Yolanda told me she wasn't coming in today.",
          translation: "Oye Dani, ¿supiste? Yolanda me dijo que hoy no venía.",
          pronunciation: "jei DA-ni, did yu jir? yo-LAN-da told mi shi UOS-ent KA-ming in tu-DEI",
          literal: "Oye Dani, ¿oíste? Yolanda dijo-a-mí que ella no estaba viniendo hoy.",
          why: "“Told me” lleva la persona pegada, cosa que “said” no hace. Y el tiempo retrocede: su “I'm not coming” se vuelve she wasn't coming. Ese backshift es casi automático en inglés."
        },
        {
          speaker: "Daniela",
          target: "Yeah, she called me early. She said she had a cold and asked me to cover her six o'clock class.",
          translation: "Sí, me llamó tempranito. Dijo que estaba con gripa y me pidió que la reemplazara en la clase de las seis.",
          pronunciation: "yea, shi kold mi ER-li. shi sed shi jad a kold and askt mi tu KA-ver jer siks o-KLOK klas",
          literal: "Sí, ella llamó-me temprano. Ella dijo ella tenía un resfriado y pidió-me a cubrir su seis en-punto clase.",
          why: "Dos moldes: “she said she had” (backshift de “I have”), y la petición relatada “asked me to cover”, con “ask + persona + to + verbo”. No es “asked me that I cover”."
        },
        {
          speaker: "Kevin",
          target: "Ugh. Did she leave a message for the students? Yesterday someone asked if there was a class on Saturday.",
          translation: "Uf. ¿Dejó alguna razón para los alumnos? Ayer alguien preguntó si había clase el sábado.",
          pronunciation: "ag. did shi liv a ME-sich for de STU-dents? YES-ter-dei SAM-uan askt if der uos a klas on SA-ter-dei",
          literal: "Uf. ¿Dejó ella un mensaje para los estudiantes? Ayer alguien preguntó si allí había una clase en sábado.",
          why: "La pregunta cerrada relatada usa “asked if”, sin invertir el sujeto: “asked if there was”, jamás “asked was there”. Y en inglés se “leaves a message”, no se “leaves a reason”."
        },
        {
          speaker: "Daniela",
          target: "She did. She asked me to let everyone know the Saturday class was moving to Sunday, and asked us not to post anything online yet.",
          translation: "Sí. Me pidió que les avisara que la clase del sábado se pasaba para el domingo, y que no publicáramos nada en redes todavía.",
          pronunciation: "shi did. shi askt mi tu let EV-ri-uan nou de SA-ter-dei klas uos MU-ving tu SAN-dei, and askt as not tu poust E-ni-zing on-LAIN yet",
          literal: "Ella lo-hizo. Ella pidió-me a dejar todos saber la sábado clase estaba moviendo a domingo, y pidió-nos no a publicar nada en-línea todavía.",
          why: "Peticiones encadenadas con “ask... to”: asked me to let everyone know, asked us not to post. Y dentro va otra afirmación reportada con backshift: “is moving” se vuelve was moving."
        },
        {
          speaker: "Kevin",
          target: "Got it. Oh, and the DJ mentioned he already had the playlist ready for the routine.",
          translation: "Listo. Ah, y el DJ comentó que ya tenía lista la playlist para la coreografía.",
          pronunciation: "got it. ou, and de DEE-yei MEN-shond hi ol-RE-di jad de PLEI-list RE-di for de ru-TIN",
          literal: "Entendí-lo. Oh, y el DJ mencionó él ya tenía la lista lista para la rutina.",
          why: "“Mentioned that” es un “decir” más suave, como comentar que. El backshift sigue igual: su “I already have” se vuelve he already had."
        },
        {
          speaker: "Daniela",
          target: "Nice. And Yolanda said she'd be in first thing the next day; she asked us to open at eight, not here but over at the new location.",
          translation: "Bien. Y Yolanda dijo que al día siguiente llegaba a primera hora; nos pidió que abriéramos a las ocho, no acá sino allá, en la sede nueva.",
          pronunciation: "nais. and yo-LAN-da sed shid bi in ferst zing de nekst dei; shi askt as tu OU-pen at eit, not jir bat OU-ver at de nu lo-KEI-shon",
          literal: "Bien. Y Yolanda dijo ella-estaría adentro primera cosa el próximo día; ella pidió-nos a abrir a ocho, no aquí sino allá en la nueva ubicación.",
          why: "Las palabras de tiempo y lugar se mueven: “tomorrow” se vuelve the next day, y “here” pasa a there/over at… al relatarlo desde otro lugar. Y “she'd” es la contracción de she would, el backshift de will."
        }
      ],
      vocabulary: [
        {
          term: "to say (that)",
          explanation:
            "El verbo básico para reportar una afirmación. Ojo: “say” no lleva a la persona directamente; se dice “say to me”, nunca “say me”.",
          literal: "decir (que)",
          useWhen:
            "Reportando lo que alguien afirmó: “She said (that) she was coming.”",
          avoidWhen:
            "Cuando nombras a quién le hablan; ahí toca “tell”: “She told me…”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["to tell", "to mention", "to claim", "according to"],
          example: {
            target: "She said she was running late.",
            translation: "Dijo que iba retrasada."
          }
        },
        {
          term: "to ask if / whether",
          explanation:
            "Para reportar una pregunta de sí o no. No se invierte el orden: “asked if there was”, jamás “asked was there”.",
          literal: "preguntar si",
          useWhen:
            "Pregunta cerrada relatada: “He asked if I was coming.”",
          avoidWhen:
            "Si la pregunta era abierta (what, when), conservas esa palabra: “asked when it started”.",
          register: "neutral",
          region: "Inglés general; “whether” es un punto más formal.",
          related: ["whether", "to wonder if", "to want to know if", "if"],
          example: {
            target: "She asked whether the class was on.",
            translation: "Preguntó si había clase."
          }
        },
        {
          term: "to ask someone to (do)",
          explanation:
            "Petición relatada: “ask + persona + to + verbo”. No es “ask that” ni “ask for + -ing”.",
          literal: "pedirle a alguien que",
          useWhen:
            "Relatando lo que pidieron: “She asked me to wait.”",
          avoidWhen:
            "Si pides una cosa u objeto, es “ask for”: “ask for the key”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["to tell someone to", "to ask for", "to request", "to get someone to"],
          example: {
            target: "She asked us to open early.",
            translation: "Nos pidió que abriéramos temprano."
          }
        },
        {
          term: "to mention that",
          explanation:
            "Un “decir” más suave, para soltar una noticia de paso, como comentar que.",
          literal: "mencionar / comentar que",
          useWhen:
            "Noticia casual: “He mentioned he had the playlist.”",
          avoidWhen:
            "Si es una declaración firme y oficial, “say” o “state” pesan más.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["to bring up", "to note", "to say", "to point out"],
          example: {
            target: "He mentioned he was on his way.",
            translation: "Comentó que ya venía en camino."
          }
        },
        {
          term: "to let someone know",
          explanation:
            "Avisar, dar el dato. Es más natural en el día a día que “to notify”.",
          literal: "dejar saber / avisar",
          useWhen:
            "Un aviso: “She asked me to let everyone know.”",
          avoidWhen:
            "Para una advertencia formal y grave, va “to warn”.",
          register: "neutral",
          region: "Inglés general; muy coloquial y cortés.",
          related: ["to notify", "to fill someone in", "to give a heads-up", "to warn"],
          example: {
            target: "Let me know if anything changes.",
            translation: "Avísame si algo cambia."
          }
        },
        {
          term: "to leave a message",
          explanation:
            "El equivalente de dejar razón. En inglés no se “deja una razón”, se “leaves a message”.",
          literal: "dejar un mensaje / una razón",
          useWhen:
            "Cuando la persona no está: “Did she leave a message?”",
          avoidWhen:
            "“Reason” en inglés es la causa, no el recado; no lo uses para el mensaje.",
          register: "neutral",
          region: "Inglés general; también “leave word”.",
          related: ["to leave word", "to pass on a message", "a voicemail", "a note"],
          example: {
            target: "She left a message with the front desk.",
            translation: "Dejó razón en la recepción."
          }
        },
        {
          term: "the next day",
          explanation:
            "Al reportar, “tomorrow” se vuelve “the next day” cuando el día ya pasó, igual que mañana → al día siguiente.",
          literal: "al día siguiente",
          useWhen:
            "Reporte diferido: “She said she'd come the next day.”",
          avoidWhen:
            "Si de verdad hablas del mañana real, sí va “tomorrow”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["that day", "the day before", "that week", "tomorrow"],
          example: {
            target: "He promised he'd be back the next day.",
            translation: "Prometió que volvía al día siguiente."
          }
        }
      ],
      note:
        "El estilo indirecto en inglés retrocede el tiempo: “I'm coming” se vuelve she said she was coming, y “I'll open” se vuelve she said she would open. Cambian también las palabras de tiempo y lugar: tomorrow pasa a the next day, here a there, today a that day. Y ojo con tres trampas: “asked me if”, no “asked me was I”; “tell me”, no “say me”; y “ask someone to + verbo”, no “ask that”.",
      culture: [
        {
          label: "El backshift es casi automático",
          body:
            "En inglés, cuando el verbo de reportar está en pasado (said, told, asked), el verbo reportado suele retroceder un paso: “I am” pasa a she was, “I have” a she had, “I will” a she would, “I can” a she could. Los hispanohablantes tienden a dejarlo en presente porque en español a veces se puede; en inglés el oído espera el retroceso, y no hacerlo suena a traducción cruda. Cuando la información sigue siendo verdad, a veces se deja en presente, pero al empezar conviene practicar el backshift."
        },
        {
          label: "“Say” y “tell” no se reparten igual",
          body:
            "Son el error número uno de los hispanohablantes en estilo indirecto. “Tell” exige a quién le dicen algo: tell me, tell her, tell the students. “Say” no lleva esa persona directamente: se dice say that…, o si necesitas la persona, say to me. Por eso “she said me” está mal y “she told me” está bien. Regla práctica: si va a aparecer la persona justo después del verbo, usa tell; si no, usa say."
        },
        {
          label: "Preguntas reportadas, sin inversión",
          body:
            "Una pregunta directa invierte el sujeto y usa do/does/did: “Is there a class?”, “Did you call?”. Al reportarla, el inglés vuelve al orden normal de una afirmación y quita el do: she asked if there was a class, she asked whether I had called. El calco “she asked me was there a class” arrastra la pregunta directa entera y suena mal. Para sí/no se usa if o whether; para preguntas abiertas se conserva what, when, where."
        },
        {
          label: "De la razón al voicemail",
          body:
            "Donde un colombiano deja razón con alguien, en un estudio o una oficina de Houston se “leaves a message” en la recepción o en el buzón de voz (voicemail). La fórmula fija es leave a message, y también existe leave word. Cuidado con “reason”: en inglés es la causa o el motivo, nunca el recado, así que “leave a reason” no significa lo que uno quiere. Para el mensaje escrito de un chat se usa message o text."
        }
      ],
      pitfalls: [
        {
          mistake: "“He asked me was I coming.”",
          whyItFails:
            "El inglés reportado no invierte el sujeto ni repite la pregunta directa. Se dice “asked me if I was coming”, con “if” y orden normal. Mantener la inversión suena a una pregunta directa mal pegada.",
          sayInstead: "He asked me if I was coming."
        },
        {
          mistake: "“She said me she wasn't coming.”",
          whyItFails:
            "“Say” no lleva la persona directamente; el verbo que sí la lleva es “tell”. O “told me”, o “said to me”, pero nunca “said me”.",
          sayInstead: "She told me she wasn't coming."
        },
        {
          mistake: "“She asked me that I wait for her.”",
          whyItFails:
            "La petición relatada en inglés usa “ask someone to + verbo”, no una cláusula con “that”. “Asked me that I wait” es un calco directo del que del español.",
          sayInstead: "She asked me to wait for her."
        },
        {
          mistake: "“She said she will arrive the next day.”",
          whyItFails:
            "Al reportar desde un marco pasado, “will” pasa a “would”. Dejar “will” mezcla el presente con el relato en pasado; el backshift pide “would”.",
          sayInstead: "She said she would arrive the next day."
        }
      ],
      variations: [
        {
          form: "She said she wasn't coming in today.",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Reporte llano y con backshift de una afirmación."
        },
        {
          form: "Word is she's not coming.",
          register: "friendly informal",
          region: "Inglés general, coloquial",
          whenToUse: "Para marcar que es rumor, como el dizque colombiano."
        },
        {
          form: "She asked me to wait for her.",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Una petición relatada con “ask… to”."
        },
        {
          form: "She asked if there was a class.",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Pregunta de sí o no reportada, sin inversión."
        }
      ],
      prompt: "Kevin dice “Yolanda told me she wasn't coming in today.” ¿Por qué “told me” y no “said me”?",
      choices: [
        "Porque “said” solo se usa en preguntas y nunca en frases afirmativas normales del día a día.",
        "Porque “tell” siempre pide a quién se le dice algo, y por eso lleva “me” pegado al lado.",
        "Porque “told” es más formal y por eso se prefiere cuando uno le habla a la jefa del estudio."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál reporta bien la pregunta cerrada “Is there a class on Saturday?”",
          choices: [
            "She asked me was there a class on Saturday.",
            "She asked me if there is a class on Saturday.",
            "She asked me if there was a class on Saturday."
          ],
          answer: 2,
          tests: "En estilo indirecto no se invierte: “asked if there was”, no “asked was there”."
        },
        {
          prompt: "Relatando lo que pidió la instructora, ¿cuál suena natural en inglés?",
          choices: [
            "She asked me to cover her six o'clock class.",
            "She asked me that I cover her six o'clock class.",
            "She asked me covering her six o'clock class."
          ],
          answer: 0,
          tests: "Petición relatada = “ask someone to + verbo”, no “ask that” ni “-ing”."
        },
        {
          prompt: "La profe habló el viernes de “tomorrow.” Contándolo el domingo, ¿cuál sirve?",
          choices: [
            "She said she would arrive first thing tomorrow morning.",
            "She said she would arrive first thing the next day.",
            "She said she will arrive first thing on that day."
          ],
          answer: 1,
          tests: "“tomorrow” → “the next day” al reportar días después; y “will” → “would”."
        }
      ]
    }
  },
  {
    id: "the-boat-we-would-buy-in-buenaventura",
    level: "Developing · Reporting and perspective",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "transport-and-travel",
    register: "courteous",
    pathways: ["independent", "year-12"],
    structure: "hypothetical-present",
    review: "pending",
    es: {
      title: "Si tuviéramos la lancha",
      situation:
        "Yeison y Marta crecieron en Buenaventura, frente al Pacífico. Sentados en un mirador sobre la bahía, con el puerto lleno de barcos a un lado y la lluvia amenazando al otro, sueñan con montar paseos en lancha a Juanchaco para la temporada de ballenas. Todo el rato hablan en condicional: lo que harían si tuvieran plata, si no lloviera tanto, si de verdad se decidieran.",
      setting: {
        who: "Yeison and Marta are childhood friends from Buenaventura, both weighing whether to start a small boat-tour business.",
        what: "Over a view of the bay they daydream out loud, trading everything they would do if the money, the weather and the paperwork all lined up.",
        when: "Late afternoon in October, the whale season winding down and the sky about to open.",
        where: "Buenaventura, Valle del Cauca, a lookout above the Pacific port.",
        why: "Plans and decisions are where the unreal conditional lives: si tuviera…, iría… is how you talk about a future you can picture but haven't got yet."
      },
      address: {
        form: "usted",
        who: "Yeison and Marta are close friends, and like many on the Pacific coast they use a warm usted with each other rather than tú.",
        why: "In much of Colombia, and notably on the Pacific, usted is the register of affection and trust between friends, not only of distance. It sounds close here, not stiff.",
        ifYouSwitch:
          "Switching to tú isn't wrong, but between these two it would sound a touch less local; the usted de confianza is what the coast reaches for. Keep it and you match the room."
      },
      dialogue: [
        {
          speaker: "Yeison",
          target: "Marta, si tuviera con qué, me compraría una lancha y llevaría turistas a Juanchaco en temporada de ballenas.",
          translation: "Marta, if I had the means, I'd buy a boat and take tourists out to Juanchaco in whale season.",
          pronunciation: "MAR-ta, see tu-BYE-ra kon ke, me kom-pra-REE-a u-na LAN-cha i ye-va-REE-a tu-REES-tas a hwan-CHA-ko",
          literal: "Marta, if I-had with what, me I-would-buy a boat and I-would-take tourists to Juanchaco in season of whales.",
          why: "The unreal conditional in one line: the si-clause takes the imperfect subjunctive (tuviera) and both results take the conditional (compraría, llevaría). “Tener con qué” is a very Colombian way to say “to have the means”."
        },
        {
          speaker: "Marta",
          target: "Uy, sí. Y si lloviera menos de octubre a diciembre, esto se llenaría de gente.",
          translation: "Oh, yeah. And if it rained less from October to December, this place would fill up with people.",
          pronunciation: "ooy, see. i see yo-BYE-ra ME-nos de ok-TU-bre a di-SYEM-bre, ES-to se ye-na-REE-a de HEN-te",
          literal: "Ooh, yes. And if it-rained less from October to December, this itself it-would-fill of people.",
          why: "Same pattern, si-clause first: si lloviera (imperfect subjunctive) plus se llenaría (conditional). The rain is no exaggeration — this is one of the wettest coasts anywhere."
        },
        {
          speaker: "Yeison",
          target: "Yo que usted, hablaría con don Aristóbulo; él prestaría la lancha si le diéramos un porcentaje.",
          translation: "If I were you, I'd talk to don Aristóbulo; he'd lend the boat if we gave him a cut.",
          pronunciation: "yo ke us-TED, a-bla-REE-a kon don a-ris-TO-bu-lo; el pres-ta-REE-a la LAN-cha see le DYE-ra-mos un por-sen-TA-he",
          literal: "I that you, I-would-talk with don Aristóbulo; he he-would-lend the boat if to-him we-gave a percentage.",
          why: "Two things here. “Yo que usted” is the everyday “if I were you”, and the second half puts the result first — prestaría… si diéramos — so the si-clause can follow the conditional just as easily as lead it."
        },
        {
          speaker: "Marta",
          target: "Claro. Y si fuera por mí, arrancaríamos ya, pero eso no se hace sin permisos.",
          translation: "Sure. And if it were up to me, we'd start right now, but you don't do that without permits.",
          pronunciation: "KLA-ro. i see FWE-ra por mee, a-rran-ka-REE-a-mos ya, PE-ro E-so no se A-se sin per-MEE-sos",
          literal: "Clear. And if it-were for me, we-would-start already, but that not itself it-does without permits.",
          why: "“Si fuera por mí” — if it were up to me — is a fixed unreal conditional; fuera is the imperfect subjunctive of ser. Note arrancaríamos, the conditional, in the result."
        },
        {
          speaker: "Yeison",
          target: "Vea la diferencia: si sale el contrato del puerto, ahí sí tengo con qué. Eso no es sueño.",
          translation: "See the difference: if the port contract comes through, then I really do have the means. That's not a daydream.",
          pronunciation: "BE-a la di-fe-REN-sya: see SA-le el kon-TRA-to del PWER-to, a-EE see TEN-go kon ke. E-so no es SWE-nyo",
          literal: "See the difference: if it-comes-out the contract of-the port, there yes I-have with what. That not is dream.",
          why: "Now a REAL condition: something that may genuinely happen takes si + present indicative (si sale) and a present result (tengo), not the subjunctive. That contrast, real against unreal, is the whole lesson."
        },
        {
          speaker: "Marta",
          target: "Exacto. Si fuera usted, guardaría para los permisos; si tuviéramos eso resuelto, el resto vendría solo.",
          translation: "Exactly. If I were you, I'd save for the permits; if we had that sorted, the rest would come on its own.",
          pronunciation: "ek-SAK-to. see FWE-ra us-TED, gwar-da-REE-a PA-ra los per-MEE-sos; see tu-BYE-ra-mos E-so re-SWEL-to, el RES-to ven-DREE-a SO-lo",
          literal: "Exact. If it-were you, I-would-save for the permits; if we-had that resolved, the rest it-would-come alone.",
          why: "Two unreal conditionals back to back: si fuera usted, guardaría and si tuviéramos…, vendría — imperfect subjunctive in the si, conditional in the result, every time."
        }
      ],
      vocabulary: [
        {
          term: "si + imperfecto de subjuntivo",
          explanation:
            "The si-clause of an unreal conditional: si + the -ra imperfect subjunctive (tuviera, pudiera, fuera). It sets up a situation that isn't true now.",
          literal: "if + past subjunctive",
          useWhen:
            "Imagining something contrary to fact: “si tuviera tiempo…”, “si pudiera…”.",
          avoidWhen:
            "The condition might really happen — then use si + present indicative, not the subjunctive.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["si tuviera", "si pudiera", "si fuera", "el subjuntivo"],
          example: {
            target: "Si pudiera, me iría hoy mismo.",
            translation: "If I could, I'd leave this very day."
          }
        },
        {
          term: "el condicional",
          explanation:
            "The result half of the conditional: the -ría forms (iría, compraría, sería). It says what would happen if the si-clause were true.",
          literal: "the 'would' form",
          useWhen:
            "Stating the imagined outcome: “iría con usted”, “sería perfecto”.",
          avoidWhen:
            "Inside the si-clause — si never takes the conditional (never “si tendría”).",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["iría", "compraría", "gustaría", "el imperfecto de subjuntivo"],
          example: {
            target: "Con más plata, viajaría más.",
            translation: "With more money, I'd travel more."
          }
        },
        {
          term: "yo que usted",
          explanation:
            "The colloquial “if I were you”: yo que usted (or yo que tú), followed by advice in the conditional.",
          literal: "I, in your place",
          useWhen:
            "Giving advice softly: “yo que usted, esperaría”.",
          avoidWhen:
            "Very formal writing, where “en su lugar” or a full “si yo fuera usted” reads better.",
          register: "friendly informal",
          region: "Colombia and much of Latin America.",
          related: ["si yo fuera usted", "en su lugar", "yo que tú", "de ser usted"],
          example: {
            target: "Yo que usted, lo pensaría bien.",
            translation: "If I were you, I'd think it over."
          }
        },
        {
          term: "si fuera por mí",
          explanation:
            "A set unreal conditional meaning “if it were up to me”; fuera is the imperfect subjunctive of ser.",
          literal: "if it were for me",
          useWhen:
            "Flagging a wish that isn't yours to decide: “si fuera por mí, no lo pensaría”.",
          avoidWhen:
            "The decision really is yours — then just say plainly what you'll do.",
          register: "friendly informal",
          region: "Universal Spanish.",
          related: ["si dependiera de mí", "por mí", "si fuera por usted", "de ser por mí"],
          example: {
            target: "Si fuera por mí, ya habríamos empezado.",
            translation: "If it were up to me, we'd have started already."
          }
        },
        {
          term: "si + presente (condición real)",
          explanation:
            "The REAL conditional: si + present indicative + a present or future result, for something that may actually happen.",
          literal: "if + present",
          useWhen:
            "A live, possible condition: “si sale el contrato, arrancamos”, “si llueve, no vamos”.",
          avoidWhen:
            "The situation is contrary to fact — then move to si + imperfect subjunctive + conditional.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["si tengo", "si puedo", "si sale", "el presente"],
          example: {
            target: "Si tengo tiempo, paso por allá.",
            translation: "If I have time, I'll drop by."
          }
        },
        {
          term: "como si",
          explanation:
            "“As if” always pulls the imperfect subjunctive, even about the present: como si fuera, como si supiera.",
          literal: "as if",
          useWhen:
            "Comparing to something untrue: “habla como si fuera de aquí”.",
          avoidWhen:
            "You mean a plain, real comparison — then use como on its own.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["como si fuera", "como si nada", "ni que", "el subjuntivo"],
          example: {
            target: "Gasta como si fuera millonario.",
            translation: "He spends as if he were a millionaire."
          }
        },
        {
          term: "la temporada de ballenas",
          explanation:
            "Whale season: from about July to October, humpback whales come to the Colombian Pacific to breed, and towns near Buenaventura run boat trips to see them.",
          literal: "the whale season",
          useWhen:
            "Talking about the Pacific's big yearly draw: “en temporada de ballenas hay más turistas”.",
          avoidWhen:
            "Off-season; the whales aren't there year-round, so the phrase is seasonal.",
          register: "neutral",
          region: "Colombian Pacific coast.",
          related: ["las ballenas jorobadas", "el avistamiento", "Juanchaco", "la lancha"],
          example: {
            target: "En temporada de ballenas, la lancha se llena.",
            translation: "In whale season, the boat fills right up."
          }
        }
      ],
      note:
        "An unreal conditional has two halves and each has its own mood. The si-clause takes the imperfect subjunctive — si tuviera, si pudiera, si fuera — and the result takes the conditional — iría, compraría. The rule to burn in: si never takes the present subjunctive (never si tenga) and never the conditional (never si tendría). Compare the real condition si tengo tiempo, voy, which uses the plain present because it might actually happen.",
      culture: [
        {
          label: "Colombia's Pacific gateway",
          body:
            "Buenaventura handles the great majority of Colombia's trade across the Pacific — the container ships in the bay are bound for half the world. It is a mostly Afro-Colombian city with deep roots and a culture all its own, and the everyday distance between the port's traffic and the neighborhoods around it is part of what people here organize around."
        },
        {
          label: "The rain runs the calendar",
          body:
            "This is one of the rainiest inhabited places on earth; downpours are a daily fact, not an event. Life is planned around water — the tides, the rivers, the season — which is exactly why so much talk here is conditional: what you'd do si no lloviera tanto, si subiera la marea, si aguantara el tiempo. The weather is a full character in any plan."
        },
        {
          label: "Whales off the coast",
          body:
            "From about July to October, humpback whales come to the warm Pacific to calve, and towns like Juanchaco and Ladrilleros, a boat ride from Buenaventura, fill with visitors who come to watch them breach. It is one of the coast's real economic hopes, and the daydream in this lesson — a small boat-tour business — is one plenty of bonaverenses have had."
        },
        {
          label: "Marimba and the Pacific sound",
          body:
            "The southern Pacific is the home of the marimba de chonta and currulao, the marimba-and-drum music that UNESCO lists as heritage of humanity. It carries Afro-Colombian history in its rhythm and is inseparable from the region's festivals. To picture Buenaventura without that sound coming from somewhere is to picture the wrong city."
        }
      ],
      pitfalls: [
        {
          mistake: "“Si tengo tiempo, iría con usted.”",
          whyItFails:
            "This mixes the two conditionals: a real si-clause (si tengo, present) with an unreal result (iría). Pick one lane — real throughout (si tengo…, voy) or unreal throughout (si tuviera…, iría).",
          sayInstead: "Si tuviera tiempo, iría con usted."
        },
        {
          mistake: "“Si tuviera tiempo, voy con usted.”",
          whyItFails:
            "The reverse mismatch: an unreal si-clause with a present result. Once the si-clause is imperfect subjunctive, the result has to be the conditional.",
          sayInstead: "Si tuviera tiempo, iría con usted."
        },
        {
          mistake: "“Si tenga tiempo, iría.”",
          whyItFails:
            "This is the big one: si never takes the present subjunctive. There is no “si tenga”. For a real condition it is si tengo; for an unreal one, si tuviera.",
          sayInstead: "Si tuviera tiempo, iría."
        },
        {
          mistake: "“Si tendría plata, compraría la lancha.”",
          whyItFails:
            "The conditional has slipped into the si-clause, where it never goes. Spanish keeps the -ría for the result only; the si-clause takes the imperfect subjunctive, tuviera.",
          sayInstead: "Si tuviera plata, compraría la lancha."
        }
      ],
      variations: [
        {
          form: "Si tuviera plata, compraría la lancha.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The core unreal conditional, si-clause first."
        },
        {
          form: "Compraría la lancha si tuviera plata.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The same idea, result first — and no comma."
        },
        {
          form: "Yo que usted, no lo pensaría tanto.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Softened advice: if I were you…"
        },
        {
          form: "Si fuera por mí, ya estaríamos allá.",
          register: "friendly informal",
          region: "Universal Spanish",
          whenToUse: "Distancing yourself from a decision that isn't yours."
        }
      ],
      prompt: "Yeison hasn't got the money now — he's only imagining it. Which sentence fits an unreal, hypothetical wish?",
      choices: [
        "Si tengo con qué, compro la lancha y llevo turistas a Juanchaco.",
        "Si tenga con qué, compraría la lancha y llevaría turistas a Juanchaco.",
        "Si tuviera con qué, compraría la lancha y llevaría turistas a Juanchaco."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "The same idea with the result clause first — which is right?",
          choices: [
            "Compraría la lancha si tuviera con qué para arrancar el negocio.",
            "Compraría la lancha si tendría con qué para arrancar el negocio.",
            "Compro la lancha si tuviera con qué para arrancar el negocio."
          ],
          answer: 0,
          tests: "si takes the imperfect subjunctive (tuviera), never the conditional (tendría)"
        },
        {
          prompt: "How do you say “If I were you, I wouldn't rush it”?",
          choices: [
            "Si soy usted, no me apuraría tanto con el negocio de las lanchas.",
            "Yo que usted, no me apuraría tanto con el negocio de las lanchas.",
            "Si fuera de usted, no me apuraría tanto con el negocio de las lanchas."
          ],
          answer: 1,
          tests: "“yo que usted” or “si fuera usted” — not “si soy usted”"
        },
        {
          prompt: "Which one is a REAL condition, something that may actually happen?",
          choices: [
            "Si tuviera el contrato del puerto, tendría con qué invertir en todo.",
            "Si tuviera el contrato del puerto, tuviera con qué invertir en todo.",
            "Si sale el contrato del puerto, tengo con qué invertir en todo."
          ],
          answer: 2,
          tests: "real condition = si + present indicative + present/future (si sale…, tengo…)"
        }
      ]
    },
    en: {
      title: "Si tuviéramos el bote",
      situation:
        "En un muelle de Port Aransas, en Texas, Camila —colombiana— y su amigo Ryan miran los barcos de avistamiento de delfines y fantasean con montar su propio negocio. Camila practica su inglés soltando un condicional tras otro: lo que haría si tuviera el bote, si no fuera tan caro el permiso, si se decidieran de una vez.",
      setting: {
        who: "Camila, colombiana que afina su inglés, y Ryan, su amigo local, sopesan si montar un pequeño negocio de paseos en bote.",
        what: "Frente al muelle sueñan en voz alta y repasan todo lo que harían si el dinero, el clima y los permisos cuadraran.",
        when: "Una tarde de otoño, al final de la temporada alta de turismo.",
        where: "Port Aransas, Texas, un muelle sobre el Golfo.",
        why: "Los planes son el terreno del segundo condicional: “if I had the boat, I would…” es como se habla de un futuro que uno imagina pero aún no tiene."
      },
      address: {
        form: "mixed",
        who: "Camila y Ryan son amigos y se hablan con confianza; el inglés no marca eso con el pronombre.",
        why: "El inglés usa “you” para todos: la cercanía está en el tono y en frases como “come on” o “no way”, no en tú o usted.",
        ifYouSwitch:
          "Si Camila quisiera sonar más formal ante un cliente, no cambia el “you”; usa fórmulas más corteses como “I'd love to…” o “Would it be possible…”."
      },
      dialogue: [
        {
          speaker: "Camila",
          target: "If I had the cash, I'd buy a boat and run dolphin-watching trips out to the bay.",
          translation: "Si tuviera la plata, compraría un bote y montaría paseos de avistamiento hasta la bahía.",
          pronunciation: "if ai jad de kash, aid bai a bout and ran DOL-fin-uo-ching trips aut tu de bei",
          literal: "Si yo tuviera el efectivo, yo-compraría un bote y correría viajes de mirar-delfines afuera a la bahía.",
          why: "El condicional irreal en una frase: el “if” lleva pasado (had) y el resultado lleva “would”, aquí contraído en “I'd”. Es el mismo molde de “si tuviera…, compraría…”."
        },
        {
          speaker: "Ryan",
          target: "For sure. And if the season were longer, this dock would be packed.",
          translation: "Claro. Y si la temporada fuera más larga, este muelle estaría repleto.",
          pronunciation: "for shur. and if de SI-son uer LON-guer, dis dok wud bi pakt",
          literal: "Por seguro. Y si la temporada fuera más larga, este muelle estaría empacado.",
          why: "Con “to be”, el condicional irreal usa “were”: if the season were longer. Y el resultado, “would be packed”. Fíjate en “were” aunque el sujeto sea singular."
        },
        {
          speaker: "Camila",
          target: "If I were you, I'd talk to Dave — he'd lend us his boat if we gave him a cut.",
          translation: "Yo que usted, hablaría con Dave; él nos prestaría el bote si le diéramos un porcentaje.",
          pronunciation: "if ai uer yu, aid tok tu deiv — jid lend as jis bout if ui gueiv jim a kat",
          literal: "Si yo fuera tú, yo-hablaría a Dave — él-prestaría a-nosotros su bote si nosotros diéramos a-él un corte.",
          why: "“If I were you” es el “yo que usted”. Y la segunda mitad pone el resultado primero: he'd lend… if we gave…, así que el “if” puede ir detrás igual que delante."
        },
        {
          speaker: "Ryan",
          target: "Honestly, if it were up to me, we'd start tomorrow. But not without permits and insurance.",
          translation: "La verdad, si fuera por mí, empezaríamos mañana. Pero no sin permisos y seguro.",
          pronunciation: "ON-est-li, if it uer ap tu mi, uid start tu-MO-rou. bat not ui-DAUT PER-mits and in-SHUR-ans",
          literal: "Honestamente, si ello fuera arriba a mí, nosotros-empezaríamos mañana. Pero no sin permisos y seguro.",
          why: "“If it were up to me” es “si fuera por mí”, otra vez con “were”. El resultado, “we'd start”, es “we would start” contraído."
        },
        {
          speaker: "Camila",
          target: "See the difference, though: if the grant comes through, I actually have the money. That part's real.",
          translation: "Pero vea la diferencia: si sale la beca, ahí sí tengo la plata. Esa parte es real.",
          pronunciation: "si de DI-fer-ens, dou: if de grant kams zru, ai AK-chu-a-li jav de MA-ni. dat parts ril",
          literal: "Ve la diferencia, sin embargo: si la subvención viene a-través, yo de-hecho tengo el dinero. Esa parte-es real.",
          why: "Ahora una condición REAL: algo que sí puede pasar va con “if + presente” (if it comes) y un resultado en presente (I have), sin “would”. Ese contraste, real contra irreal, es toda la lección."
        },
        {
          speaker: "Ryan",
          target: "Exactly. If I were you, I wouldn't just dream — I'd save for the permits. If we had that sorted, the rest would follow.",
          translation: "Exacto. Yo que usted, no soñaría no más; ahorraría para los permisos. Si tuviéramos eso resuelto, lo demás vendría solo.",
          pronunciation: "eg-ZAKT-li. if ai uer yu, ai WUD-ent yast drim — aid seiv for de PER-mits. if ui jad dat SOR-ted, de rest wud FO-lou",
          literal: "Exactamente. Si yo fuera tú, yo no-querría solo soñar — yo-ahorraría para los permisos. Si nosotros tuviéramos eso ordenado, el resto seguiría.",
          why: "Dos condicionales irreales seguidos: if I were you, I'd save y if we had…, the rest would follow. Pasado en el “if”, “would” en el resultado, siempre."
        }
      ],
      vocabulary: [
        {
          term: "if + past (second conditional)",
          explanation:
            "La cláusula “if” de un condicional irreal: “if + pasado” (if I had, if I were). Plantea algo que no es cierto ahora.",
          literal: "si + pasado",
          useWhen:
            "Imaginando algo contrario a los hechos: “if I had time…”.",
          avoidWhen:
            "Si de verdad puede pasar; ahí va el primer condicional (if + presente).",
          register: "neutral",
          region: "Inglés general.",
          related: ["if I had", "if I were", "if I could", "second conditional"],
          example: {
            target: "If I had the boat, I would take you out.",
            translation: "Si tuviera el bote, lo llevaría a pasear."
          }
        },
        {
          term: "would + verb",
          explanation:
            "La otra mitad: el resultado imaginado lleva “would + verbo” (I would go, it would fill up).",
          literal: "el condicional inglés",
          useWhen:
            "Diciendo qué pasaría: “I would buy a boat.”",
          avoidWhen:
            "Dentro del “if”: el “if” no lleva “would” (jamás “if I would have”).",
          register: "neutral",
          region: "Inglés general; se contrae a “'d”.",
          related: ["I'd", "would go", "wouldn't", "'d rather"],
          example: {
            target: "I would buy a boat if I could.",
            translation: "Compraría un bote si pudiera."
          }
        },
        {
          term: "if I were you",
          explanation:
            "El “yo que usted” inglés. Con “to be” irreal se usa “were” para todos: if I were you.",
          literal: "si yo fuera usted",
          useWhen:
            "Dando un consejo: “If I were you, I'd wait.”",
          avoidWhen:
            "En el habla muy suelta se oye “if I was you”, pero “were” es lo cuidado.",
          register: "neutral",
          region: "Inglés general.",
          related: ["if I were", "in your shoes", "were you to", "if I was (coloquial)"],
          example: {
            target: "If I were you, I'd talk to Dave.",
            translation: "Yo que usted, hablaría con Dave."
          }
        },
        {
          term: "if it were up to me",
          explanation:
            "Equivale a “si fuera por mí”: la decisión no es del todo tuya.",
          literal: "si dependiera de mí",
          useWhen:
            "Marcando una preferencia que no decides tú: “If it were up to me, we'd start now.”",
          avoidWhen:
            "Si la decisión sí es tuya, di directo qué harás.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["up to me", "if it were up to you", "my call", "if I had my way"],
          example: {
            target: "If it were up to me, we'd start today.",
            translation: "Si fuera por mí, empezaríamos hoy."
          }
        },
        {
          term: "if + present (first conditional)",
          explanation:
            "El condicional REAL: “if + presente” más un resultado en futuro (will/'ll), para algo que sí puede pasar.",
          literal: "si + presente",
          useWhen:
            "Condición viva y posible: “If the grant comes through, we'll start.”",
          avoidWhen:
            "Si es contrario a los hechos, pasa al segundo condicional (if + pasado, would).",
          register: "neutral",
          region: "Inglés general.",
          related: ["if it comes", "we'll", "as long as", "first conditional"],
          example: {
            target: "If I have time, I'll drop by.",
            translation: "Si tengo tiempo, paso."
          }
        },
        {
          term: "as if / like",
          explanation:
            "“As if” más pasado, para comparar con algo que no es cierto: “as if it were free”. En habla suelta, “like”.",
          literal: "como si",
          useWhen:
            "Comparación irreal: “He spends as if he were rich.”",
          avoidWhen:
            "Comparación real y directa; ahí “like” a secas.",
          register: "neutral",
          region: "Inglés general; “like” es más coloquial.",
          related: ["as if", "as though", "like", "were"],
          example: {
            target: "He talks as if he were the boss.",
            translation: "Habla como si fuera el jefe."
          }
        },
        {
          term: "dolphin-watching season",
          explanation:
            "La temporada de avistamiento de delfines; en la costa del Golfo también es el gran atractivo, como el de ballenas en Buenaventura.",
          literal: "temporada de avistamiento",
          useWhen:
            "Hablando del atractivo del año: “In dolphin-watching season the dock fills up.”",
          avoidWhen:
            "Fuera de temporada alta; los paseos no salen todo el año.",
          register: "neutral",
          region: "Inglés general (turismo).",
          related: ["bottlenose dolphins", "dolphin-watching", "the bay", "peak season"],
          example: {
            target: "In dolphin-watching season, the boat fills up.",
            translation: "En temporada de delfines, el bote se llena."
          }
        }
      ],
      note:
        "El segundo condicional imagina algo irreal o poco probable: “if + pasado, would + verbo”. El “if” lleva pasado (had, were), no “would”: se dice if I had time, jamás if I would have time. El resultado lleva would: I would go. Y con el verbo “to be” lo cuidado es “were” para todos — if I were you — aunque en el habla suelta se oiga “was”. Compáralo con el condicional real: if I have time, I'll go, para algo que sí puede pasar.",
      culture: [
        {
          label: "El segundo condicional, pieza por pieza",
          body:
            "El condicional irreal inglés tiene dos mitades: “if + pasado” y “would + verbo”. “If I had a boat, I would take you out.” Los hispanohablantes ya manejan la idea (si tuviera…, llevaría…); lo nuevo es la forma inglesa. El pasado del “if” no habla del ayer: marca que la situación es imaginaria, no real."
        },
        {
          label: "Nada de “would” en el “if”",
          body:
            "Es el error estrella. En español el si nunca lleva condicional, y en inglés el “if” nunca lleva “would”. Se dice “if I had time”, no “if I would have time”. El “would” vive solo en la otra mitad: “I would go.” Si te sale un “would” pegado al “if”, cámbialo por un pasado simple."
        },
        {
          label: "“Were” para todas las personas",
          body:
            "Con el verbo “to be” en condicional irreal, el inglés cuidado usa “were” para todos: I were, he were, she were. Por eso “if I were you” y no “if I was you”. En la conversación diaria se oye muchísimo “was”, y nadie te corrige en la calle, pero en un examen o por escrito “were” es lo esperado."
        },
        {
          label: "Los dos órdenes y la coma",
          body:
            "Las dos mitades se pueden invertir. Si el “if” va primero, se separa con coma: “If I had time, I would go.” Si va el resultado primero, no lleva coma: “I would go if I had time.” El significado es idéntico; cambia solo el énfasis y la puntuación, igual que en español."
        }
      ],
      pitfalls: [
        {
          mistake: "“If I would have time, I would go.”",
          whyItFails:
            "El “if” irreal lleva pasado simple, no “would have”: “if I had time”. El “would” pertenece solo a la otra mitad. Es el calco más común del español al inglés.",
          sayInstead: "If I had time, I would go."
        },
        {
          mistake: "“If I was you, I would sell the boat.”",
          whyItFails:
            "En el condicional irreal cuidado, “to be” usa “were” para todas las personas: “if I were you”. “Was” se oye, pero no es lo esperado por escrito.",
          sayInstead: "If I were you, I would sell the boat."
        },
        {
          mistake: "“If I had time, I will go with you.”",
          whyItFails:
            "Si la mitad del “if” es irreal (had), el resultado va con “would”, no con “will”. “Will” es para condiciones reales (if + presente).",
          sayInstead: "If I had time, I would go with you."
        },
        {
          mistake: "“If it rained less, this place will fill up.”",
          whyItFails:
            "Otra mezcla: “if + pasado” (irreal) con “will” (real). Empareja las mitades: irreal con “would”, real con “will”.",
          sayInstead: "If it rained less, this place would fill up."
        }
      ],
      variations: [
        {
          form: "If I had the money, I'd buy the boat.",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "El condicional irreal básico, con el “if” primero."
        },
        {
          form: "I'd buy the boat if I had the money.",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Lo mismo, con el resultado primero y sin coma."
        },
        {
          form: "If I were you, I wouldn't rush it.",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Consejo suavizado: yo que usted…"
        },
        {
          form: "If it were up to me, we'd start today.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "Para marcar que la decisión no es tuya."
        }
      ],
      prompt: "Camila no tiene el bote ahora; solo lo sueña. ¿Cuál es el segundo condicional correcto?",
      choices: [
        "If I had the cash, I would buy a boat and run dolphin-watching trips.",
        "If I would have the cash, I would buy a boat and run dolphin-watching trips.",
        "If I have the cash, I will buy a boat and run dolphin-watching trips."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "El mismo sueño, con el resultado primero. ¿Cuál suena natural?",
          choices: [
            "I would buy the boat if I would have the money for it.",
            "I would buy the boat if I had the money for it.",
            "I will buy the boat if I had the money for it."
          ],
          answer: 1,
          tests: "El “if” lleva pasado (had), nunca “would have”: “if I had”, no “if I would have”."
        },
        {
          prompt: "¿Cómo se dice “Si yo fuera usted, no me apuraría”?",
          choices: [
            "If I am you, I wouldn't rush it at all right now.",
            "If I was you, I wouldn't rush it at all right now.",
            "If I were you, I wouldn't rush it at all right now."
          ],
          answer: 2,
          tests: "Con “to be” irreal se usa “were” para todos: “if I were you”."
        },
        {
          prompt: "¿Cuál es una condición REAL, no una hipótesis?",
          choices: [
            "If the grant comes through, I have the money to start.",
            "If the grant came through, I would have the money to start.",
            "If the grant would come through, I would have the money to start."
          ],
          answer: 0,
          tests: "Condición real = “if + presente” (if it comes…, I have…), sin “would”."
        }
      ]
    }
  },
  {
    id: "what-got-built-in-quibdo",
    level: "Developing · Reporting and perspective",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "home-and-neighborhood",
    register: "courteous",
    pathways: ["independent", "collegiate-academic"],
    structure: "passive-and-impersonal",
    review: "pending",
    es: {
      title: "Lo que se hizo en Quibdó",
      situation:
        "Nilson nunca se ha ido de Quibdó; Yeimy volvió después de años en Estados Unidos. Se encuentran cerca del río Atrato y se ponen al día sobre las obras: la vía que por fin arreglaron, el puente nuevo, las casas del barrio. Todo el rato hablan en pasiva y en impersonal: lo que se anuncia, lo que fue construido, lo que uno ve y lo que no.",
      setting: {
        who: "Nilson has never left Quibdó; Yeimy has just come back after years in the United States. They're old friends catching up.",
        what: "They trade news about local public works — a road, a new bridge, the neighborhood's wooden houses — and who did or didn't do them.",
        when: "A bright break in the rain, mid-morning by the river.",
        where: "Quibdó, Chocó, on the bank of the Atrato river.",
        why: "Public life is where Spanish leans hardest on the passive and the impersonal: what gets announced, what was built, what one sees and what one doesn't."
      },
      address: {
        form: "usted",
        who: "Nilson and Yeimy are old friends, and on the Chocó coast a warm usted is the normal register between them.",
        why: "As across much of Colombia, and strongly on the Pacific, usted carries closeness and respect at once; it doesn't sound cold between friends here.",
        ifYouSwitch:
          "Tú isn't wrong, but it would sound a little less chocoano between these two. The usted de confianza is what fits the place, so keep it."
      },
      dialogue: [
        {
          speaker: "Nilson",
          target: "Yeimy, ¿ya vio? Por fin el tramo de la vía a Medellín fue arreglado; uno ya cruza sin quedar embarrado.",
          translation: "Yeimy, did you see? The stretch of the road to Medellín was finally fixed; you can get across now without ending up covered in mud.",
          pronunciation: "YEIM-ee, ya byo? por fin el TRA-mo de la BEE-a a me-de-YIN fwe a-rre-GLA-do; U-no ya KRU-sa sin ke-DAR",
          literal: "Yeimy, already you-saw? For end the stretch of the road to Medellín was fixed; one already crosses without staying muddy.",
          why: "Two things at once: fue arreglado is a true ser + participle passive (was fixed), and uno cruza is the impersonal “uno” standing in for the English generic “you”. Both talk about public life without naming who did it."
        },
        {
          speaker: "Yeimy",
          target: "¡Al fin! Y me dijeron que el puente nuevo sobre el Atrato fue construido por la gobernación.",
          translation: "Finally! And they told me the new bridge over the Atrato was built by the departmental government.",
          pronunciation: "al fin! i me di-HE-ron ke el PWEN-te NWE-vo SO-bre el a-TRA-to fwe kons-tru-EE-do por la go-ber-na-SYON",
          literal: "At-the end! And to-me they-said that the bridge new over the Atrato was built by the government.",
          why: "The true passive shows its full shape here: fue construido por la gobernación — was built by the… The por-phrase names the agent. In real speech Colombians reach for this far less than se, but for official acts it fits."
        },
        {
          speaker: "Nilson",
          target: "Sí, aunque aquí casi todo se dice distinto: se anuncia una obra, se saben los costos, pero la plata no se ve.",
          translation: "Yeah, though here almost everything's put differently: a project gets announced, the costs are known, but the money never shows up.",
          pronunciation: "see, aun-ke a-KEE KA-si TO-do se DEE-se dis-TIN-to: se a-NUN-sya u-na O-bra, se SA-ben los KOS-tos, pe-ro la PLA-ta no se ve",
          literal: "Yes, although here almost all itself it-says different: itself it-announces a project, themselves they-know the costs, but the money not itself it-sees.",
          why: "The se-passive, which Spanish actually prefers: se anuncia una obra, se saben los costos. The verb agrees with the thing (una obra → anuncia; los costos → saben). No agent, no fuss — this is the everyday passive."
        },
        {
          speaker: "Yeimy",
          target: "En Estados Unidos se hablaba mucho de Quibdó por el San Pacho; la gente allá no se imagina cómo se baila aquí.",
          translation: "In the States people talked a lot about Quibdó because of San Pacho; folks over there can't imagine how people dance here.",
          pronunciation: "en es-TA-dos u-NEE-dos se a-BLA-ba MU-cho de kib-DO por el san PA-cho; la HEN-te a-YA no se i-ma-HEE-na KO-mo se BAI-la a-KEE",
          literal: "In United States itself it-talked much of Quibdó by the San Pacho; the people there not itself imagines how itself it-dances here.",
          why: "Three impersonals in one line: se hablaba and se baila (people talked / people dance, no subject named) and la gente, the singular “people”. This is how Spanish covers the English generic “you/they/people”."
        },
        {
          speaker: "Nilson",
          target: "Cierto. Y ojo: la casa de mi abuela ya está pintada, pero fue pintada por mi tío, no por la alcaldía.",
          translation: "True. And note: my grandmother's house is painted now, but it was painted by my uncle, not by the city.",
          pronunciation: "SYER-to. i O-ho: la KA-sa de mi a-BWE-la ya es-TA pin-TA-da, pe-ro fwe pin-TA-da por mi TEE-o, no por la al-kal-DEE-a",
          literal: "True. And eye: the house of my grandmother already is painted, but was painted by my uncle, not by the mayor's-office.",
          why: "The key contrast: está pintada (estar + participle) is the resulting state — it's painted now — while fue pintada (ser + participle) is the action — it got painted, by someone. Same participle, different verb, different meaning."
        },
        {
          speaker: "Yeimy",
          target: "Qué bueno. Aquí las casas del barrio están hechas de madera, y eso no se toca: es la herencia del Chocó.",
          translation: "How nice. Here the neighborhood's houses are made of wood, and that's untouchable: it's the Chocó's heritage.",
          pronunciation: "ke BWE-no. a-KEE las KA-sas del BA-rryo es-TAN E-chas de ma-DE-ra, i E-so no se TO-ka: es la e-REN-sya del CHO-ko",
          literal: "How good. Here the houses of-the neighborhood are made of wood, and that not itself it-touches: is the heritage of-the Chocó.",
          why: "están hechas is another estar + participle state (are made), and no se toca is the impersonal se again — one doesn't touch it. Note how rarely a real agent appears; Spanish keeps public life agentless by default."
        }
      ],
      vocabulary: [
        {
          term: "la pasiva refleja (se)",
          explanation:
            "The se-passive: se + a verb that agrees with the thing affected (se vendió la casa, se hablan varios idiomas). Spanish's default passive, with no agent named.",
          literal: "reflexive passive",
          useWhen:
            "Saying something was or gets done without saying by whom: “se anuncia la obra”, “se venden lanchas”.",
          avoidWhen:
            "You truly need to name the doer with por — then the ser-passive fits better.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["se vende", "se hablan", "se anuncia", "la pasiva"],
          example: {
            target: "Se vendió la casa en una semana.",
            translation: "The house was sold in a week."
          }
        },
        {
          term: "el se impersonal",
          explanation:
            "Impersonal se + a singular verb, for what people in general do: se dice, se vive bien, se come rico. No subject at all.",
          literal: "impersonal one/you",
          useWhen:
            "Generalising about people: “aquí se camina con paraguas”, “se trabaja duro”.",
          avoidWhen:
            "There's a specific subject you could name — then just name it.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["se dice", "se vive", "se come", "uno"],
          example: {
            target: "Aquí se vive tranquilo.",
            translation: "Life here is easy-going."
          }
        },
        {
          term: "uno",
          explanation:
            "“Uno” (or una) for the generic “you/one”, often warmer and more personal than se: uno nunca sabe, uno se acostumbra.",
          literal: "one",
          useWhen:
            "Talking about people in general but including yourself: “uno se cansa”.",
          avoidWhen:
            "Formal writing may prefer the plain se; uno is more conversational.",
          register: "friendly informal",
          region: "Very common in Colombia.",
          related: ["una", "se", "la gente", "cualquiera"],
          example: {
            target: "Uno se acostumbra a la lluvia.",
            translation: "You get used to the rain."
          }
        },
        {
          term: "la gente (verbo en singular)",
          explanation:
            "“La gente” means people but is grammatically singular, so the verb is singular: la gente dice, la gente viene. A classic trap.",
          literal: "the people (singular)",
          useWhen:
            "Talking about people as a group: “la gente de aquí es cálida”.",
          avoidWhen:
            "You mean specific, countable persons — then use las personas (plural).",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["la gente dice", "las personas", "todo el mundo", "uno"],
          example: {
            target: "La gente de aquí saluda a todos.",
            translation: "People here greet everyone."
          }
        },
        {
          term: "ser + participio (pasiva verdadera)",
          explanation:
            "The true passive: ser + participle, the participle agreeing in gender and number (fue construido, fueron vendidas). Mostly writing, news and official acts.",
          literal: "to be + participle",
          useWhen:
            "Formal or written report of a completed act, often with por: “la ley fue aprobada”.",
          avoidWhen:
            "Everyday speech, where the se-passive sounds far more natural.",
          register: "formal",
          region: "Universal, but literary or journalistic.",
          related: ["fue construido", "fueron aprobadas", "por + agente", "la pasiva refleja"],
          example: {
            target: "El puente fue construido por la gobernación.",
            translation: "The bridge was built by the departmental government."
          }
        },
        {
          term: "por + agente",
          explanation:
            "In a true passive, the doer is introduced with por: fue pintada por mi tío. It answers “by whom”.",
          literal: "by + doer",
          useWhen:
            "You need to name who did it inside a ser-passive: “fue escrito por ella”.",
          avoidWhen:
            "A se-passive, which normally names no agent at all.",
          register: "formal",
          region: "Universal Spanish.",
          related: ["fue hecho por", "por la alcaldía", "de + agente", "ser + participio"],
          example: {
            target: "La obra fue inaugurada por el alcalde.",
            translation: "The project was opened by the mayor."
          }
        },
        {
          term: "estar + participio (estado)",
          explanation:
            "estar + participle describes the resulting state, not the action: la puerta está cerrada (it's closed now) versus fue cerrada (it got closed).",
          literal: "to be (state) + participle",
          useWhen:
            "Describing how something is now: “la vía está pavimentada”, “está hecho”.",
          avoidWhen:
            "You mean the action of doing it — then ser + participle or the se-passive.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["está cerrada", "está hecho", "estar listo", "ser + participio"],
          example: {
            target: "La casa ya está pintada.",
            translation: "The house is already painted."
          }
        }
      ],
      note:
        "Spanish avoids naming a doer far more than English. Its default is the se-passive — se vendió la casa, se hablan varios idiomas — where the verb agrees with the thing. For people in general it uses impersonal se, uno or the singular la gente. The true ser + participle passive (fue construido por…) exists but lives mostly in writing and news. And don't confuse fue cerrada, the action, with está cerrada, the resulting state.",
      culture: [
        {
          label: "Chocó, apart by geography and neglect",
          body:
            "Quibdó is the capital of Chocó, one of Colombia's most African and most rained-on departments, long cut off by poor roads from the rest of the country. That isolation shapes daily life and politics alike, and it is why so much public-works talk here — a bridge, a paved stretch — carries real weight. When a road se arregla, it changes what's possible."
        },
        {
          label: "The Atrato, a river with rights",
          body:
            "The Atrato river is Quibdó's artery, its highway and its livelihood. In a landmark ruling Colombia's courts recognized the Atrato itself as a subject of rights, to be protected from mining and pollution. For chocoanos the river is not scenery but kin, and much of public life is organized around its health and its moods."
        },
        {
          label: "San Pacho, heritage of humanity",
          body:
            "Each September and October Quibdó throws the Fiestas de San Pacho, weeks of processions, verbena and chirimía that UNESCO lists as intangible cultural heritage. It is Afro-Colombian devotion and street party at once, neighborhood against neighborhood, and it is the image of Quibdó that people who've left, like Yeimy, carry with them."
        },
        {
          label: "Chirimía, the sound of the Chocó",
          body:
            "The chirimía chocoana — clarinet, drums and cymbals — is the brass-and-percussion sound of the region's festivals, distinct from the marimba of the southern Pacific. Like the local Spanish, quick and musical with its own turns of phrase, it marks Chocó as its own cultural world, not a copy of anywhere else in Colombia."
        }
      ],
      pitfalls: [
        {
          mistake: "“Se vendió muchas casas este año.”",
          whyItFails:
            "In the se-passive the verb agrees with the thing, and muchas casas is plural, so the verb must be plural too: se vendieron. This agreement is the step learners most often skip.",
          sayInstead: "Se vendieron muchas casas este año."
        },
        {
          mistake: "“La gente son muy amables aquí.”",
          whyItFails:
            "La gente is grammatically singular, so the verb and adjective stay singular: la gente es muy amable. The plural son and amables is a direct calque from English “people are”.",
          sayInstead: "La gente es muy amable aquí."
        },
        {
          mistake: "“La casa está construida por la gobernación.”",
          whyItFails:
            "For the action of building, with an agent, you need ser, not estar: fue construida por la gobernación. Estar + participle describes a state and doesn't take a por-agent.",
          sayInstead: "La casa fue construida por la gobernación."
        },
        {
          mistake: "“El inglés es hablado aquí.”",
          whyItFails:
            "Grammatically fine but unnatural: for this Spanish overwhelmingly prefers the se-passive, se habla inglés. The ser-passive here sounds like a word-for-word translation from English.",
          sayInstead: "Aquí se habla inglés."
        }
      ],
      variations: [
        {
          form: "Se vendió la casa en una semana.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The everyday se-passive; no agent named."
        },
        {
          form: "La casa fue vendida por la constructora.",
          register: "formal",
          region: "Universal Spanish",
          whenToUse: "The true passive when you must name the doer."
        },
        {
          form: "Aquí se vive muy tranquilo.",
          register: "neutral",
          region: "Colombia",
          whenToUse: "Impersonal se for what people in general do."
        },
        {
          form: "La casa ya está vendida.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "estar + participle for the resulting state."
        }
      ],
      prompt: "Which sentence is the natural se-passive Spanish prefers for “Many houses were sold this year”?",
      choices: [
        "Muchas casas fueron vendidas este año por las constructoras.",
        "Se vendieron muchas casas este año en toda la ciudad.",
        "Se vendió muchas casas este año en toda la ciudad."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "The road is finished now — describe the resulting STATE, not the action.",
          choices: [
            "La vía se pavimenta cada verano por cuenta de la alcaldía.",
            "La vía fue pavimentada por la alcaldía el año pasado.",
            "La vía ya está pavimentada y por fin se puede pasar."
          ],
          answer: 2,
          tests: "estar + participle = resulting state (está pavimentada); ser + participle = the action"
        },
        {
          prompt: "Which sentence has correct “la gente” agreement?",
          choices: [
            "La gente de aquí es muy cálida y saluda a todo el mundo.",
            "La gente de aquí son muy cálidas y saludan a todo el mundo.",
            "Las gente de aquí es muy cálida y saluda a todo el mundo."
          ],
          answer: 0,
          tests: "la gente takes a singular verb and adjective: la gente es cálida"
        },
        {
          prompt: "Which names the doer correctly in a true passive?",
          choices: [
            "El puente fue construido para la gobernación en dos años.",
            "El puente fue construido por la gobernación en dos años.",
            "El puente está construido por la gobernación en dos años."
          ],
          answer: 1,
          tests: "the agent of a ser-passive takes por, not para; and the action uses ser, not estar"
        }
      ]
    },
    en: {
      title: "Se hace, se dice, se construye",
      situation:
        "En Portland, Marisol —chocoana que lleva años en Estados Unidos— pone al día a su colega Greg sobre las obras públicas de su ciudad y las de Quibdó. Practicando su inglés, Marisol se topa con algo: el inglés usa la voz pasiva a cada paso —was built, is published, gets announced— justo donde ella, en español, diría simplemente “se”.",
      setting: {
        who: "Marisol, chocoana radicada en Estados Unidos, y Greg, su colega local, hablan de obras públicas.",
        what: "Comparan cómo se hacen las cosas en su ciudad y en Quibdó, y sin querer repasan toda la voz pasiva inglesa.",
        when: "Un descanso al mediodía, entre semana.",
        where: "Portland, Estados Unidos, la cocina de una oficina.",
        why: "La vida pública es el terreno de la pasiva: el inglés dice “was built”, “is spoken”, “gets done” donde el español prefiere “se”."
      },
      address: {
        form: "mixed",
        who: "Marisol y Greg son colegas con confianza; el inglés no marca la cercanía con el pronombre.",
        why: "El inglés usa “you” para todos; el registro se ajusta con el tono y con fórmulas, no con tú o usted.",
        ifYouSwitch:
          "Ante un jefe, Marisol no cambia el “you”; suaviza con “could you” o “would it be possible”, y evita el “you” genérico en textos formales, donde queda mejor “one”."
      },
      dialogue: [
        {
          speaker: "Marisol",
          target: "Greg, did you hear? The road to the coast was finally repaved — you can actually drive it now.",
          translation: "Greg, ¿supiste? Por fin repavimentaron la vía a la costa; ya se puede manejar de verdad.",
          pronunciation: "greg, did yu jir? de roud tu de coust uas FAI-na-li ri-PEIVD — yu kan AK-chu-a-li draiv it nau",
          literal: "Greg, ¿escuchaste? El camino a la costa fue repavimentado — tú de-hecho puedes manejarlo ahora.",
          why: "Dos rasgos ingleses: “was repaved” es pasiva verdadera (fue repavimentada), y “you can drive it” usa el “you” genérico, no a Greg en persona. Así cubre el inglés lo que el español dice con “se” y con “uno”."
        },
        {
          speaker: "Greg",
          target: "Nice. And I heard the new bridge downtown was built by the city, not the state.",
          translation: "Qué bien. Y oí que el puente nuevo del centro fue construido por la ciudad, no por el estado.",
          pronunciation: "nais. and ai jerd de niu brich DAUN-taun uas bilt bai de SI-ti, not de steit",
          literal: "Bien. Y yo-oí que el puente nuevo del-centro fue construido por la ciudad, no el estado.",
          why: "La pasiva muestra su forma completa: “was built by the city” — fue construido por la ciudad. El autor entra con “by”. En inglés esto es de lo más normal, no suena formal como la pasiva con “por” en español."
        },
        {
          speaker: "Marisol",
          target: "Right. Here everything gets announced, the budget is published, but the money never shows up.",
          translation: "Claro. Aquí todo se anuncia, el presupuesto se publica, pero la plata nunca aparece.",
          pronunciation: "rait. jir EV-ri-zing guets a-NAUNST, de BA-yet is PA-blisht, bat de MA-ni NE-ver shous ap",
          literal: "Correcto. Aquí todo resulta anunciado, el presupuesto es publicado, pero el dinero nunca se-muestra.",
          why: "Tres pasivas seguidas: “gets announced” (la get-passive, más coloquial) e “is published” (be + participio). El inglés no tiene “se”, así que la pasiva hace todo ese trabajo."
        },
        {
          speaker: "Greg",
          target: "People here talked a lot about San Pacho after your video; they can't imagine how you dance down there.",
          translation: "La gente de aquí habló un montón del San Pacho después de tu video; no se imaginan cómo se baila allá.",
          pronunciation: "PI-pol jir tokt a lot a-BAUT san PA-cho AF-ter yor VI-di-o; dei kant i-MA-yin jau yu dans daun der",
          literal: "Gente aquí habló mucho acerca-de San Pacho después de tu video; ellos no-pueden imaginar cómo tú bailas allá abajo.",
          why: "Lo genérico en inglés: “people talked”, “they can't imagine” y el “you” de “how you dance” no señalan a nadie en concreto. Son los equivalentes de “se”, “la gente” y “uno”."
        },
        {
          speaker: "Marisol",
          target: "True. And look: my mural is finished now, but it was painted by my cousin, not by the city.",
          translation: "Cierto. Y mira: mi mural ya está terminado, pero fue pintado por mi primo, no por la ciudad.",
          pronunciation: "tru. and luk: mai MYU-ral is FI-nisht nau, bat it uas PEIN-ted bai mai KA-zin, not bai de SI-ti",
          literal: "Cierto. Y mira: mi mural está terminado ahora, pero ello fue pintado por mi primo, no por la ciudad.",
          why: "El contraste clave: “is finished” (be + participio, el estado: ya está listo) frente a “was painted” (la acción: alguien lo pintó). Mismo participio, distinto verbo, distinto significado — como está pintado frente a fue pintado."
        },
        {
          speaker: "Greg",
          target: "Makes sense. Around here the old houses are made of wood, and that can't be touched — it's protected.",
          translation: "Tiene sentido. Por aquí las casas viejas están hechas de madera, y eso no se puede tocar: está protegido.",
          pronunciation: "meiks sens. a-RAUND jir de ould JAU-ses ar meid of wud, and dat kant bi tacht — its pro-TEK-ted",
          literal: "Hace sentido. Alrededor aquí las casas viejas están hechas de madera, y eso no-puede ser tocado — está protegido.",
          why: "“are made of wood” es otro estado con “be” (están hechas), y “can't be touched” es pasiva otra vez (no se puede tocar). Fíjate cuán poco aparece un autor: el inglés, como el español, deja lo público sin agente casi siempre."
        }
      ],
      vocabulary: [
        {
          term: "the passive (be + past participle)",
          explanation:
            "La pasiva inglesa: “be + participio pasado” (is spoken, was sold). El inglés la usa a cada rato donde el español prefiere “se”.",
          literal: "ser/estar + participio",
          useWhen:
            "Diciendo qué se hace sin decir quién: “English is spoken here.”",
          avoidWhen:
            "Si nombras al que actúa y quieres naturalidad, a veces la voz activa va mejor.",
          register: "neutral",
          region: "Inglés general.",
          related: ["is spoken", "was sold", "be built", "past participle"],
          example: {
            target: "The house was sold in a week.",
            translation: "La casa se vendió en una semana."
          }
        },
        {
          term: "impersonal you / they",
          explanation:
            "El “you” o “they” genérico, para la gente en general: “you can't park here”, “they say it rains a lot”. Equivale al se impersonal.",
          literal: "tú/ellos genéricos",
          useWhen:
            "Generalizando: “You get used to the rain.”",
          avoidWhen:
            "Si hablas de una persona concreta; ahí “you/they” apunta a alguien real.",
          register: "friendly informal",
          region: "Inglés general.",
          related: ["you never know", "they say", "people say", "one"],
          example: {
            target: "You get used to the rain here.",
            translation: "Uno se acostumbra a la lluvia aquí."
          }
        },
        {
          term: "one (formal generic)",
          explanation:
            "“One” es el genérico culto, como “uno”: “one never knows”. Suena formal; en el día a día se prefiere “you”.",
          literal: "uno",
          useWhen:
            "Registro formal o escrito: “One must apply in advance.”",
          avoidWhen:
            "Conversación normal, donde “you” suena más natural que “one”.",
          register: "formal",
          region: "Inglés general, más británico.",
          related: ["one never knows", "you", "oneself", "a person"],
          example: {
            target: "One never knows what will happen.",
            translation: "Uno nunca sabe qué va a pasar."
          }
        },
        {
          term: "the get-passive",
          explanation:
            "La pasiva con “get” en vez de “be”: “the house got sold”, “he got fired”. Más coloquial, con matiz de algo que le pasa a alguien.",
          literal: "resultar/quedar + participio",
          useWhen:
            "Habla informal: “The road got fixed at last.”",
          avoidWhen:
            "Textos formales o de noticias, donde se prefiere “was + participio”.",
          register: "friendly informal",
          region: "Inglés general, muy de EE. UU.",
          related: ["got sold", "got fired", "get done", "be + participio"],
          example: {
            target: "The road finally got fixed.",
            translation: "Por fin arreglaron la vía."
          }
        },
        {
          term: "by + agent",
          explanation:
            "En la pasiva verdadera, quién actúa entra con “by”: “built by the government”. Es el “por + agente” del español.",
          literal: "por + agente",
          useWhen:
            "Cuando sí importa nombrar al autor: “written by her”.",
          avoidWhen:
            "Si el autor no importa; entonces se omite el “by”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["built by", "written by", "made by", "the passive"],
          example: {
            target: "The bridge was built by the government.",
            translation: "El puente fue construido por el gobierno."
          }
        },
        {
          term: "is/are made of (state)",
          explanation:
            "El estado resultante con “be”: “the houses are made of wood”, “the door is closed”. Como el “estar + participio”.",
          literal: "estar + participio",
          useWhen:
            "Describiendo cómo está algo ahora: “The road is paved now.”",
          avoidWhen:
            "Si describes la acción de hacerlo; ahí “was made” o “got made”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["is made of", "is closed", "are built", "be + participio"],
          example: {
            target: "The houses are made of wood.",
            translation: "Las casas están hechas de madera."
          }
        },
        {
          term: "past participle (irregulars)",
          explanation:
            "La pasiva depende del participio, y muchos son irregulares: sell → sold, build → built, speak → spoken. El error típico es regularizarlos.",
          literal: "participio pasado",
          useWhen:
            "Formando cualquier pasiva: “was sold”, “was built”, “is spoken”.",
          avoidWhen:
            "No inventes “-ed” en los irregulares: es “sold”, no “selled”.",
          register: "neutral",
          region: "Inglés general.",
          related: ["sold", "built", "spoken", "written"],
          example: {
            target: "It was sold, not “selled”.",
            translation: "Se vendió: “sold”, no “selled”."
          }
        }
      ],
      note:
        "El inglés usa la voz pasiva constantemente donde el español echa mano del “se”: “English is spoken here”, “the house was sold”. Se forma con “be + participio”, y el autor, si aparece, entra con “by”. Para lo genérico usa “you”, “they” o el culto “one”. Ojo con los participios irregulares (sold, built, spoken), y con “estar”: “the door is closed” es estado; “was closed”, la acción.",
      culture: [
        {
          label: "El inglés ama la pasiva",
          body:
            "Donde el español dice “se habla inglés” o “se vendió la casa”, el inglés tira de pasiva verdadera: “English is spoken here”, “the house was sold”. No es rebuscado ni formal; es lo normal. Para el hispanohablante el reto no es entenderla, sino atreverse a usarla tanto como la usa un nativo."
        },
        {
          label: "El autor entra con “by”",
          body:
            "Cuando sí importa quién actúa, el inglés lo mete con “by”: “built by the government”, “written by her”. Es el “por + agente” del español. Pero muchas veces el autor no aparece —“the road was fixed”— porque lo importante es el hecho, no quién lo hizo. Omitir el “by” es del todo correcto."
        },
        {
          label: "“You”, “they”, “one” para lo genérico",
          body:
            "El español reparte lo impersonal entre “se”, “uno” y “la gente”. El inglés usa “you” (“you can't smoke here”), “they” (“they say it's cheaper”) o el culto “one” (“one never knows”). El “you” genérico no señala a tu interlocutor; habla de cualquiera. Es lo más cercano al “uno” colombiano."
        },
        {
          label: "Participios que no siguen la regla",
          body:
            "La pasiva vive de los participios, y en inglés muchos son irregulares: sell → sold, build → built, speak → spoken, write → written. El calco “selled” o “builded” delata al principiante. Vale la pena aprenderlos de memoria en pares, porque aparecen en toda pasiva y en todo tiempo perfecto."
        }
      ],
      pitfalls: [
        {
          mistake: "“The house was selled in a week.”",
          whyItFails:
            "“Sell” es irregular: el participio es “sold”, no “selled”. La pasiva necesita el participio correcto: “was sold”. Regularizar los irregulares es el desliz más común.",
          sayInstead: "The house was sold in a week."
        },
        {
          mistake: "“Here speaks English.”",
          whyItFails:
            "Calco de “aquí se habla inglés”. El inglés no tiene “se”: usa la pasiva, “English is spoken here”, con el idioma como sujeto.",
          sayInstead: "English is spoken here."
        },
        {
          mistake: "“The bridge was built for the government.”",
          whyItFails:
            "El agente de la pasiva entra con “by”, no con “for”. “For” cambia el sentido a “para el gobierno”. Es “built by the government”.",
          sayInstead: "The bridge was built by the government."
        },
        {
          mistake: "“The old houses are make of wood.”",
          whyItFails:
            "Tras el verbo “be” va el participio “made”, no el infinitivo “make”: “are made of wood”. El estado resultante también usa participio.",
          sayInstead: "The old houses are made of wood."
        }
      ],
      variations: [
        {
          form: "The house was sold in a week.",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "La pasiva normal, sin nombrar al autor."
        },
        {
          form: "The house was sold by the developer.",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "La pasiva con “by” cuando importa quién."
        },
        {
          form: "The house got sold really fast.",
          register: "friendly informal",
          region: "Inglés general",
          whenToUse: "La get-passive, más coloquial."
        },
        {
          form: "The house is already sold.",
          register: "neutral",
          region: "Inglés general",
          whenToUse: "Estado resultante con “be”, como estar + participio."
        }
      ],
      prompt: "¿Cuál es la pasiva inglesa natural para “Aquí se habla inglés”?",
      choices: [
        "English speaks here because of all the tourists.",
        "Here is spoken English because of all the tourists.",
        "English is spoken here because of all the tourists."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "El estado resultante: “Las casas están hechas de madera.” ¿Cuál es correcto?",
          choices: [
            "The old houses are made of wood, like most of them here.",
            "The old houses are make of wood, like most of them here.",
            "The old houses are making of wood, like most of them here."
          ],
          answer: 0,
          tests: "Tras “be” va el participio “made”, no “make” ni “making”."
        },
        {
          prompt: "¿Cuál nombra bien al autor en la pasiva?",
          choices: [
            "The new bridge was built for the departmental government.",
            "The new bridge was built by the departmental government.",
            "The new bridge was build by the departmental government."
          ],
          answer: 1,
          tests: "El agente va con “by”, y el participio de “build” es “built”."
        },
        {
          prompt: "El pasado de “sell” en pasiva. ¿Cuál es correcto?",
          choices: [
            "The old house was selling in just one week flat.",
            "The old house was selled in just one week flat.",
            "The old house was sold in just one week flat."
          ],
          answer: 2,
          tests: "“sell” es irregular: participio “sold”, no “selled” ni “selling”."
        }
      ]
    }
  }

);

markSource(lessons, "data/lessons/72-reporting-and-perspective.js");
