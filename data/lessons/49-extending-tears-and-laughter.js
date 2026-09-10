/*
 * Lesson block: extending / tears and laughter.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 */
lessons.push(
  {
    id: "calming-a-crying-child-in-sincelejo",
    level: "Extending · Tears and laughter",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "courteous",
    pathways: ["extension"],
    verb: "llorar",
    review: "pending",
    es: {
      title: "Calmar a un niño que llora en Sincelejo",
      situation:
        "Estás en un cumpleaños familiar en Sincelejo cuando un niño pequeño empieza a llorar porque se le cayó el helado. Quieres consolarlo sin regañarlo, y después bromear cuando todos terminan llorando de la risa.",
      setting: {
        who: "Marta is the aunt who has seen every birthday disaster. Alex is a guest helping with the children and trying not to make the crying louder.",
        what: "A small emotional emergency: a dropped ice cream, a tired toddler, adults negotiating comfort, and a joke that turns tears into laughter.",
        when: "Late Sunday afternoon, after cake, when the children are sticky, overstimulated and one small loss feels enormous.",
        where: "Sincelejo, Sucre, in the patio of a family house during a birthday party with plastic chairs and a rented sound system.",
        why: "Because llorar is most everyday with children, not only with tragedy. Colombian Spanish also uses “me dio por llorar” for a sudden urge and “llorar de la risa” when laughter gets physical."
      },
      address: {
        form: "usted",
        who: "Marta uses usted with the child in the affectionate adult-to-child way common in many Colombian families, while she keeps Alex in the same warm register.",
        why: "Usted here is not distance. It can be tender, coaxing and slightly theatrical when an adult is calming a small child.",
        ifYouSwitch:
          "Tú would also be understood, but it would lose the family flavor of “no llore” said softly to a toddler. Vos would not fit this Sincelejo scene."
      },
      dialogue: [
        {
          speaker: "Marta",
          target: "Ay, mi amor, no llore. Fue sólo el helado, no el cumpleaños.",
          translation: "Oh, sweetheart, don't cry. It was only the ice cream, not the birthday.",
          pronunciation: "ai, mee ah-MOR, no YOH-reh. fweh SOH-loh el eh-LAH-doh, no el koom-pleh-AH-nyos",
          literal: "Oh, my love, do-not cry. It-was only the ice-cream, not the birthday.",
          why: "“No llore” is the usted command, but with “mi amor” it lands as comfort, not scolding. The line reduces the disaster without denying the feeling."
        },
        {
          speaker: "Niño",
          target: "¡Pero yo quería ese helado! Me dio por llorar.",
          translation: "But I wanted that ice cream! I suddenly felt like crying.",
          pronunciation: "PEH-roh yo keh-REE-ah EH-seh eh-LAH-doh. meh DYOH por yoh-RAR",
          literal: "But I wanted that ice-cream. To-me gave for to-cry.",
          why: "“Me dio por llorar” means the crying came over him. It is useful for sudden emotions that arrive before anyone has chosen them."
        },
        {
          speaker: "Alex",
          target: "Te entiendo; a veces uno llora por cansancio, no por el helado.",
          translation: "I get you; sometimes people cry from tiredness, not because of the ice cream.",
          pronunciation: "te en-TYEN-doh; ah BEH-ses OO-noh YOH-rah por kan-SAN-syoh, no por el eh-LAH-doh",
          literal: "You I-understand; sometimes one cries because-of tiredness, not because-of the ice-cream.",
          why: "“Uno llora por cansancio” lets Alex generalize gently. The cause takes por: you cry from tiredness, anger, laughter or frustration."
        },
        {
          speaker: "Marta",
          target: "Venga, respire conmigo antes de que lloremos todos.",
          translation: "Come here, breathe with me before we all start crying.",
          pronunciation: "BEN-gah, rres-PEE-reh kon-MEE-goh AN-tes deh keh yoh-REH-mos TOH-dos",
          literal: "Come, breathe with-me before that we-cry all.",
          why: "“Antes de que lloremos” uses the subjunctive because the group crying has not happened. Extending-level Spanish should let these small subordinate clauses breathe."
        },
        {
          speaker: "Alex",
          target: "Si le traigo otro, prometo no llorar yo también.",
          translation: "If I bring you another one, I promise not to cry too.",
          pronunciation: "see leh TRAI-goh OH-troh, proh-MEH-toh no yoh-RAR yo tam-BYEN",
          literal: "If to-you I-bring another, I-promise not to-cry I too.",
          why: "The joke shares the emotion instead of mocking the child. It makes the adult smaller and safer."
        },
        {
          speaker: "Marta",
          target: "Mírelo: ya no llora. Ahora nos va a hacer llorar de la risa.",
          translation: "Look at him: he's not crying anymore. Now he's going to make us cry laughing.",
          pronunciation: "MEE-reh-loh: ya no YOH-rah. ah-OH-rah nos bah ah ah-SER yoh-RAR deh lah RREE-sah",
          literal: "Look-at-him: already not he-cries. Now us goes to make cry from the laughter.",
          why: "“Llorar de la risa” bridges this block: the tears are real, but the cause is laughter. Spanish uses the same verb without making the feeling heavy."
        }
      ],
      vocabulary: [
        {
          term: "llorar",
          explanation:
            "To cry. It covers babies, tired children, frustration, tenderness, laughter and serious sadness, so the scene decides the weight.",
          literal: "to cry",
          useWhen:
            "Someone has tears or is audibly crying, from a dropped ice cream to a moving song or a joke that becomes uncontrollable.",
          avoidWhen:
            "You only mean complaining. Colombian Spanish can say “llorar” jokingly for whining, but use that carefully because it can belittle someone.",
          register: "neutral",
          region: "Universal Spanish; everyday Colombian use is very broad.",
          related: ["el llanto", "las lágrimas", "sollozar", "lloriquear"],
          example: {
            target: "El niño empezó a llorar por el helado.",
            translation: "The child started crying over the ice cream."
          }
        },
        {
          term: "no llore",
          explanation:
            "The usted command for “don't cry.” It can be tender or patronizing depending on tone, relationship and what comes after it.",
          literal: "do not cry",
          useWhen:
            "Comforting a child, an older relative or someone you are treating gently with usted.",
          avoidWhen:
            "Someone is seriously hurt or grieving. Then “no llore” may sound like you are shutting down the feeling.",
          register: "warm informal",
          region: "General Colombian.",
          related: ["no llores", "tranquilo", "respire", "venga"],
          example: {
            target: "Ay, mi amor, no llore.",
            translation: "Oh, sweetheart, don't cry."
          }
        },
        {
          term: "me dio por llorar",
          explanation:
            "A sudden urge to cry came over me. “Dar por” frames the impulse as something that arrived, not as a planned decision.",
          literal: "it gave me for crying",
          useWhen:
            "An emotion, whim or impulse appears suddenly: crying, laughing, cleaning, calling someone, walking home.",
          avoidWhen:
            "You want to sound fully deliberate. Then say “decidí llorar” only if the choice itself matters.",
          register: "neutral conversational",
          region: "General Colombian and widely understood.",
          related: ["me dieron ganas", "se me salió el llanto", "me puse a llorar", "me dio nostalgia"],
          example: {
            target: "Me dio por llorar.",
            translation: "I suddenly felt like crying."
          }
        },
        {
          term: "llorar por cansancio",
          explanation:
            "To cry from tiredness. Por introduces the cause or pressure that makes the tears come out.",
          literal: "to cry because of tiredness",
          useWhen:
            "The stated cause is fatigue, anger, frustration, tenderness or pain.",
          avoidWhen:
            "You mean crying for someone in the sense of mourning them; that is a different emotional frame and not this light everyday scene.",
          register: "neutral",
          region: "General Spanish.",
          related: ["llorar por rabia", "llorar de sueño", "llorar de emoción", "llorar por nada"],
          example: {
            target: "A veces uno llora por cansancio.",
            translation: "Sometimes people cry from tiredness."
          }
        },
        {
          term: "antes de que lloremos",
          explanation:
            "Before we cry. The subjunctive appears because the crying is only a possibility being headed off.",
          literal: "before that we cry",
          useWhen:
            "A future event has not happened yet and depends on what people do next.",
          avoidWhen:
            "You are talking about something that already happened. Then use indicative: “antes de que lloramos” is not the natural form here.",
          register: "neutral",
          region: "General Spanish.",
          related: ["antes de que pase", "para que no llore", "cuando llore", "si llora"],
          example: {
            target: "Respire conmigo antes de que lloremos todos.",
            translation: "Breathe with me before we all start crying."
          }
        },
        {
          term: "llorar de la risa",
          explanation:
            "To cry laughing. The tears are physical, but the cause is laughter rather than sorrow.",
          literal: "to cry from the laughter",
          useWhen:
            "A joke, memory or ridiculous moment makes people laugh until their eyes water.",
          avoidWhen:
            "The tears come from pain or sadness. Then the phrase sounds as if you missed the seriousness.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["morirse de la risa", "muerto de risa", "qué risa", "me hizo reír"],
          example: {
            target: "Nos va a hacer llorar de la risa.",
            translation: "He's going to make us cry laughing."
          }
        },
        {
          term: "el llanto",
          explanation:
            "The crying itself, as a noun. It is useful when you talk about calming, hearing or understanding the crying rather than the person doing it.",
          literal: "the crying",
          useWhen:
            "Talking about the sound or state: a baby's crying, a child's crying, crying that starts or stops.",
          avoidWhen:
            "You simply need the verb. “El niño llora” is more direct than building everything around the noun.",
          register: "neutral",
          region: "General Spanish.",
          related: ["llorar", "las lágrimas", "calmarse", "sollozo"],
          example: {
            target: "Ya se le pasó el llanto.",
            translation: "The crying has passed now."
          }
        }
      ],
      note:
        "The useful thing about llorar is not only the verb but the frame around it. “No llore” can be tender, “me dio por llorar” makes the feeling sudden, “llorar por cansancio” names a cause, and “llorar de la risa” keeps the tears while changing the emotional color completely.",
      culture: [
        {
          label: "Comfort is not silence",
          body:
            "In a family party, adults often talk a child through crying rather than pretending nothing happened. “No llore” works when it comes with attention, a solution and a soft voice; alone, it can sound like an order to stop feeling."
        },
        {
          label: "Usted can be affectionate",
          body:
            "Colombian adults may use usted with children as a warm, coaxing form. A foreign learner who hears it as distance misses the tenderness in “mi amor, no llore.”"
        },
        {
          label: "Small causes are still real",
          body:
            "A dropped ice cream is not a tragedy, but for a tired child it is enough. The language lets the adult shrink the event without mocking the emotion."
        },
        {
          label: "Tears and laughter meet easily",
          body:
            "“Llorar de la risa” is common because Colombian joking often becomes physical: watery eyes, bent posture, someone leaving the table to recover. It is laughter, not grief."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “no llore” as if it always comforts",
          whyItFails:
            "The words can comfort a child in a light scene, but they can also dismiss real pain. Tone and situation carry the difference.",
          sayInstead: "No llore, mi amor, venga respiramos."
        },
        {
          mistake: "Translating “me dio por llorar” as a planned choice",
          whyItFails:
            "The phrase says the feeling came over you. It is not the same as deciding to cry for effect.",
          sayInstead: "Me dieron ganas de llorar, or me puse a llorar."
        },
        {
          mistake: "Using “llorar de la risa” for sad tears",
          whyItFails:
            "The phrase specifically means laughter caused the tears. If the feeling is sadness, “de la risa” contradicts the scene.",
          sayInstead: "Lloré de tristeza, or lloré por la noticia."
        },
        {
          mistake: "Forgetting that babies simply “lloran”",
          whyItFails:
            "English learners sometimes hunt for a special baby verb. In everyday Spanish, a baby cries: “el bebé llora.”",
          sayInstead: "El bebé está llorando."
        }
      ],
      variations: [
        {
          form: "No llore, mi amor.",
          register: "warm informal",
          region: "General Colombian",
          whenToUse: "Comforting a child gently with usted."
        },
        {
          form: "Me dio por llorar.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "A sudden urge to cry arrived before you could explain it."
        },
        {
          form: "Está llorando por cansancio.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Explaining that tiredness, not the surface problem, is causing the tears."
        },
        {
          form: "Antes de que lloremos todos, respiremos.",
          register: "warm practical",
          region: "General Spanish",
          whenToUse: "Heading off a possible emotional escalation with subjunctive after antes de que."
        },
        {
          form: "Terminamos llorando de la risa.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The laughter became so strong that people had tears in their eyes."
        }
      ],
      prompt: "Marta says “no llore” to a toddler while calling him “mi amor.” What makes the command gentle here?",
      choices: [
        "It belongs to a light comforting scene with affectionate wording.",
        "It forbids the child from having any feeling in public.",
        "It announces that the birthday party has already ended."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "What does “me dio por llorar” suggest?",
          choices: [
            "A sudden feeling came over the speaker.",
            "A formal decision was signed in writing.",
            "A joke was repeated without emotion."
          ],
          answer: 0,
          tests: "dar por plus infinitive for sudden impulse"
        },
        {
          prompt: "Which sentence means the tears came from laughter?",
          choices: [
            "Terminamos llorando de la risa.",
            "Terminamos firmando la tarjeta.",
            "Terminamos guardando el helado."
          ],
          answer: 0,
          tests: "llorar de la risa as laughing until tears come"
        },
        {
          prompt: "Why is “antes de que lloremos” subjunctive?",
          choices: [
            "Because the group crying is still only possible.",
            "Because everyone already cried before the cake.",
            "Because children never cry at family parties."
          ],
          answer: 0,
          tests: "subjunctive after antes de que for unreal future"
        },
        {
          prompt: "Which sentence is the everyday baby use?",
          choices: [
            "El bebé está llorando porque tiene sueño.",
            "El bebé está reservando porque tiene sueño.",
            "El bebé está planificando porque tiene sueño."
          ],
          answer: 0,
          tests: "babies cry with ordinary llorar"
        }
      ]
    },
    en: {
      title: "Calmar a un niño que llora en Austin",
      situation:
        "Usted está en un cumpleaños familiar en Austin cuando un niño empieza a llorar porque se le cayó el helado. Necesita consolarlo en inglés sin sonar seco, y luego contar que todos terminaron llorando de la risa.",
      setting: {
        who: "Marta es la tía que ya ha visto todos los desastres de cumpleaños. Alejandro ayuda con los niños y trata de no empeorar el llanto.",
        what: "Una emergencia emocional pequeña: helado en el piso, un niño cansado, adultos buscando consolar y un chiste que cambia las lágrimas por risa.",
        when: "Domingo al final de la tarde, después de la torta, cuando los niños están pegajosos, cansados y sensibles.",
        where: "Austin, en el patio de una casa familiar donde el cumpleaños se hace en inglés aunque parte de la familia hable español.",
        why: "Porque “cry” cubre el llanto cotidiano de niños, bebés y adultos, pero el inglés separa muy bien “cry,” “feel like crying” y “cry with laughter.”"
      },
      address: {
        form: "mixed",
        who: "Marta y Alejandro usan el mismo “you” con el niño y entre adultos. La ternura se marca con “sweetheart,” tono suave y frases completas.",
        why: "El inglés no tiene usted afectuoso para niños. Si usted quiere sonar cálido, necesita vocabulario y ritmo, no otro pronombre.",
        ifYouSwitch:
          "No hay cambio de pronombre disponible. “Don't cry, sir” sonaría absurdo con un niño; “sweetheart” o el nombre propio hacen el trabajo."
      },
      dialogue: [
        {
          speaker: "Marta",
          target: "Oh, sweetheart, don't cry. It was only the ice cream, not the birthday.",
          translation: "Ay, mi amor, no llore. Fue sólo el helado, no el cumpleaños.",
          pronunciation: "ou, SUIT-jart, dont krai. it uaz ON-li di AIS krim, not da BERZ-dei",
          literal: "Ay, corazón dulce, no llore. Fue sólo el helado, no el cumpleaños.",
          why: "“Don't cry” puede sonar seco, pero “sweetheart” y la explicación pequeña lo vuelven consuelo. El inglés pone la ternura alrededor de la orden."
        },
        {
          speaker: "Child",
          target: "But I wanted that ice cream! I felt like crying.",
          translation: "¡Pero yo quería ese helado! Me dio por llorar.",
          pronunciation: "bot ai UAN-ted dat AIS krim. ai felt laik KRAI-ing",
          literal: "Pero quería ese helado. Me sentí como llorando.",
          why: "“I felt like crying” traduce el impulso de “me dio por llorar.” No dice que decidió llorar; dice que las ganas llegaron."
        },
        {
          speaker: "Alejandro",
          target: "I get it; sometimes people cry because they're tired, not because of the ice cream.",
          translation: "Te entiendo; a veces uno llora por cansancio, no por el helado.",
          pronunciation: "ai get it; SOM-taims PI-pol krai bi-KOZ der TAI-erd, not bi-KOZ ov di AIS krim",
          literal: "Lo entiendo; a veces la gente llora porque está cansada, no por el helado.",
          why: "“Cry because they're tired” explica la causa sin burlarse. El inglés prefiere una cláusula con “because” donde el español usó “por cansancio.”"
        },
        {
          speaker: "Marta",
          target: "Come here, breathe with me before we all start crying.",
          translation: "Venga, respire conmigo antes de que lloremos todos.",
          pronunciation: "kom jir, bridz uid mi bi-FOR ui ol start KRAI-ing",
          literal: "Venga aquí, respire conmigo antes de que todos empecemos a llorar.",
          why: "“Before we all start crying” arma con “start” la posibilidad futura. No hay subjuntivo visible, pero sí la misma idea de algo que todavía no ocurre."
        },
        {
          speaker: "Alejandro",
          target: "If I bring you another one, I promise I won't cry too.",
          translation: "Si le traigo otro, prometo no llorar yo también.",
          pronunciation: "if ai bring yu a-NA-der uan, ai PRO-mis ai uont krai tu",
          literal: "Si le traigo otro, prometo que no lloraré también.",
          why: "La broma comparte la emoción. El adulto no se ríe del niño; se mete suavemente en la escena para bajarle presión."
        },
        {
          speaker: "Marta",
          target: "Look at him: he's not crying anymore. Now he'll make us cry with laughter.",
          translation: "Mírelo: ya no llora. Ahora nos va a hacer llorar de la risa.",
          pronunciation: "luk at jim: jiz not KRAI-ing e-ni-MOR. nau jil meik as krai uid LAF-ter",
          literal: "Mírelo: ya no está llorando. Ahora nos hará llorar con risa.",
          why: "“Cry with laughter” es la frase natural para “llorar de la risa.” Las lágrimas siguen, pero la causa cambia por completo."
        }
      ],
      vocabulary: [
        {
          term: "cry",
          explanation:
            "Llorar. Sirve para bebés, niños cansados, frustración, emoción y tristeza seria; el peso lo da la escena.",
          literal: "llorar",
          useWhen:
            "Hay lágrimas, sollozos o llanto audible, desde un helado caído hasta una canción que conmueve.",
          avoidWhen:
            "Quiere decir quejarse sin lágrimas. “Cry” puede usarse de forma burlona para quejarse, pero puede sonar cruel.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["tears", "sob", "weep", "crying"],
          example: {
            target: "The child started to cry.",
            translation: "El niño empezó a llorar."
          }
        },
        {
          term: "don't cry",
          explanation:
            "No llore / no llores. Puede consolar o sonar brusco, según lo que lo rodee.",
          literal: "no llores",
          useWhen:
            "Usted acompaña la frase con ternura, explicación y una solución pequeña.",
          avoidWhen:
            "Alguien vive dolor serio. Sin cuidado, “don't cry” parece pedirle que apague la emoción.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["it's okay", "come here", "take a breath", "sweetheart"],
          example: {
            target: "Don't cry, sweetheart.",
            translation: "No llore, mi amor."
          }
        },
        {
          term: "feel like crying",
          explanation:
            "Sentir ganas de llorar o que le dé a uno por llorar. La emoción aparece antes de que uno la explique.",
          literal: "sentirse como llorando",
          useWhen:
            "Quiere expresar impulso o ganas, no una decisión formal.",
          avoidWhen:
            "Ya está llorando con lágrimas visibles; entonces “I'm crying” es más directo.",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["want to cry", "tear up", "get emotional", "break down"],
          example: {
            target: "I felt like crying.",
            translation: "Me dio por llorar."
          }
        },
        {
          term: "cry because",
          explanation:
            "Llorar porque. El inglés suele explicar causas con cláusulas en vez de una frase como “por cansancio.”",
          literal: "llorar porque",
          useWhen:
            "Usted nombra la causa de las lágrimas: cansancio, rabia, dolor, emoción o risa.",
          avoidWhen:
            "La causa ya es obvia y repetirla suena a interrogatorio.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["cry from", "cry over", "because of", "tears from"],
          example: {
            target: "People cry because they're tired.",
            translation: "La gente llora por cansancio."
          }
        },
        {
          term: "start crying",
          explanation:
            "Empezar a llorar o ponerse a llorar. Marca el momento en que el llanto arranca.",
          literal: "empezar llorando",
          useWhen:
            "La emoción pasa de posibilidad a acción visible.",
          avoidWhen:
            "Habla de un llanto que ya lleva rato. Entonces “keep crying” o “is crying” puede ser mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["begin crying", "burst into tears", "break down", "tear up"],
          example: {
            target: "Before we all start crying.",
            translation: "Antes de que lloremos todos."
          }
        },
        {
          term: "cry with laughter",
          explanation:
            "Llorar de la risa. Las lágrimas son reales, pero salen por risa, no por tristeza.",
          literal: "llorar con risa",
          useWhen:
            "Un chiste, recuerdo o absurdo hace que la risa se vuelva física.",
          avoidWhen:
            "Las lágrimas vienen de tristeza o dolor. Ahí esta frase cambia demasiado el sentido.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["laugh until you cry", "tears of laughter", "crack up", "laugh hard"],
          example: {
            target: "He'll make us cry with laughter.",
            translation: "Nos va a hacer llorar de la risa."
          }
        },
        {
          term: "tears",
          explanation:
            "Lágrimas. A veces el inglés habla de las lágrimas cuando el español habla del llanto.",
          literal: "lágrimas",
          useWhen:
            "Quiere describir ojos aguados, lágrimas de risa o emoción visible sin insistir en el verbo.",
          avoidWhen:
            "Necesita decir que alguien está llorando. “Tears” no siempre significa llanto completo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["crying", "eyes watering", "tear up", "wipe tears"],
          example: {
            target: "There were tears of laughter.",
            translation: "Había lágrimas de risa."
          }
        }
      ],
      note:
        "“Cry” es sencillo, pero las frases alrededor importan. “Don't cry” necesita ternura para no sonar orden; “I felt like crying” traduce el impulso; “cry because they're tired” da causa; y “cry with laughter” cambia las lágrimas de tristeza a risa.",
      culture: [
        {
          label: "El consuelo rodea la orden",
          body:
            "En inglés, “don't cry” puede ser demasiado seco si va solo. Con “sweetheart,” una explicación y una solución, se vuelve cuidado."
        },
        {
          label: "No hay usted afectuoso",
          body:
            "El inglés no puede poner ternura en un pronombre como a veces hace el español con “no llore.” La ternura vive en el tono y en las palabras alrededor."
        },
        {
          label: "La causa se explica con because",
          body:
            "Donde el español dice “por cansancio,” el inglés muchas veces usa “because they're tired.” Esa cláusula evita que la causa quede demasiado telegráfica."
        },
        {
          label: "Las lágrimas también pueden ser risa",
          body:
            "“Cry with laughter” es cotidiano y ligero. No pertenece a un funeral; pertenece al chiste que deja a todos limpiándose los ojos."
        }
      ],
      pitfalls: [
        {
          mistake: "“No cry.”",
          whyItFails:
            "Es una orden incompleta y suena brusca. El inglés necesita el auxiliar para el imperativo negativo.",
          sayInstead: "Don't cry, sweetheart."
        },
        {
          mistake: "“It gave me for crying.”",
          whyItFails:
            "Calca “me dio por llorar,” pero no comunica impulso en inglés.",
          sayInstead: "I felt like crying."
        },
        {
          mistake: "“Cry of the laugh.”",
          whyItFails:
            "Traduce palabra por palabra “llorar de la risa.” La frase idiomática usa “with laughter” o “until you cry.”",
          sayInstead: "Cry with laughter, or laugh until you cry."
        },
        {
          mistake: "“The baby is weeping” for everyday baby crying.",
          whyItFails:
            "“Weep” existe, pero suena más literario o solemne. Para un bebé en una fiesta, “cry” basta.",
          sayInstead: "The baby is crying."
        }
      ],
      variations: [
        {
          form: "Don't cry, sweetheart.",
          register: "cálido informal",
          region: "Inglés universal",
          whenToUse: "Consolar a un niño con una frase breve y suave."
        },
        {
          form: "I felt like crying.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Contar que llegaron ganas de llorar sin decidirlo."
        },
        {
          form: "He's crying because he's tired.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Explicar la causa real detrás del llanto."
        },
        {
          form: "Before we all start crying, take a breath.",
          register: "cálido práctico",
          region: "Inglés universal",
          whenToUse: "Bajar la emoción antes de que escale."
        },
        {
          form: "We ended up crying with laughter.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "La risa fue tan fuerte que hubo lágrimas."
        }
      ],
      prompt: "Marta says “don't cry, sweetheart.” ¿Qué evita que suene seco?",
      choices: [
        "La palabra afectuosa y la situación de consuelo.",
        "La promesa formal de cancelar el cumpleaños.",
        "La orden de que nadie vuelva a sentir nada."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál traduce mejor “me dio por llorar”?",
          choices: [
            "I felt like crying.",
            "I signed the tears.",
            "I booked the crying."
          ],
          answer: 0,
          tests: "feel like crying for sudden impulse"
        },
        {
          prompt: "¿Cuál frase habla de llorar de la risa?",
          choices: [
            "We ended up crying with laughter.",
            "We ended up holding the room.",
            "We ended up planning the bridge."
          ],
          answer: 0,
          tests: "cry with laughter"
        },
        {
          prompt: "¿Cuál frase es natural para un bebé en una fiesta?",
          choices: [
            "The baby is crying because he's tired.",
            "The baby is weeping ceremonially today.",
            "The baby is reserving because he's tired."
          ],
          answer: 0,
          tests: "cry as everyday baby verb"
        },
        {
          prompt: "¿Cuál corrige “no cry”?",
          choices: [
            "Don't cry, sweetheart.",
            "No crying book now.",
            "Never tears table."
          ],
          answer: 0,
          tests: "negative imperative with don't"
        }
      ]
    }
  },
  {
    id: "laughing-with-not-at-a-friend-in-ibague",
    level: "Extending · Tears and laughter",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "familiar",
    pathways: ["extension"],
    verb: "reír",
    review: "pending",
    es: {
      title: "Reírse con un amigo, no de él, en Ibagué",
      situation:
        "Estás en Ibagué después de una función de teatro aficionado. Un amigo contó un chiste sobre su propio olvido y todos se rieron; ahora necesitas distinguir reírse con alguien de reírse de alguien.",
      setting: {
        who: "Paula acted in the amateur performance and is comfortable laughing at her own mistake. Alex is learning how to join the laughter without sounding cruel.",
        what: "A post-show conversation about a joke that landed, the difference between laughing with and laughing at, and the more natural Colombian phrase “me da risa.”",
        when: "Friday night, outside the theater, while the group is still repeating the funniest line from the performance.",
        where: "Ibagué, Tolima, on the sidewalk outside a small cultural venue after a neighborhood theater night.",
        why: "Because reír is irregular enough to deserve attention, but the social preposition matters more: “reírse de” can mock, while “reírse con” shares the joke."
      },
      address: {
        form: "tú",
        who: "Paula and Alex use tú because they are friends decompressing after the show.",
        why: "The conversation is warm and careful. Tú lets Alex ask about the social risk without turning the moment into a formal apology.",
        ifYouSwitch:
          "Usted would make the repair sound larger than the offense. Vos could fit some friendships, but tú keeps the lesson general."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Paula, me dio mucha risa tu frase, pero no quería reírme de ti.",
          translation: "Paula, your line really made me laugh, but I didn't want to laugh at you.",
          pronunciation: "PAU-lah, meh DYOH MOO-chah RREE-sah too FRAH-seh, PEH-roh no keh-REE-ah rreh-EER-meh deh tee",
          literal: "Paula, to-me gave much laughter your phrase, but not I-wanted to-laugh-myself of you.",
          why: "“Me dio risa” is often more natural than “me reí.” The danger is the preposition: “reírme de ti” sounds like mocking."
        },
        {
          speaker: "Paula",
          target: "Tranquilo, yo también me estaba riendo. Nos reímos con el personaje.",
          translation: "Relax, I was laughing too. We laughed along with the character.",
          pronunciation: "tran-KEE-loh, yo tam-BYEN meh es-TAH-bah rree-YEN-doh. nos rreh-EE-mos kon el per-soh-NAH-heh",
          literal: "Calm, I also myself was laughing. We ourselves laughed with the character.",
          why: "“Riendo” drops the written vowel you might expect from reír. “Reírse con” keeps the laughter shared rather than aimed like an arrow."
        },
        {
          speaker: "Alex",
          target: "Es que cuando todos ríen al mismo tiempo, uno no sabe si se pasó.",
          translation: "It's just that when everyone laughs at the same time, you don't know whether you went too far.",
          pronunciation: "es keh KWAN-doh TOH-dos RREE-en al MEES-moh TYEM-poh, OO-noh no SAH-beh see seh pah-SOH",
          literal: "It is that when all laugh at-the same time, one not knows if oneself passed.",
          why: "The present keeps the accent: “ríen.” Written accents in reír are not decoration; they preserve the hiatus and tell you how to pronounce the form."
        },
        {
          speaker: "Paula",
          target: "Si me hubiera dolido, no me habría reído contigo.",
          translation: "If it had hurt me, I wouldn't have laughed with you.",
          pronunciation: "see meh oo-BYEH-rah doh-LEE-doh, no meh ah-BREE-ah rreh-EE-doh kon-TEE-goh",
          literal: "If to-me had hurt, not myself would-have laughed with-you.",
          why: "This extension-tier sentence uses past subjunctive and conditional perfect. The emotional point is simple: shared laughter proves the joke landed safely."
        },
        {
          speaker: "Alex",
          target: "Entonces sí puedo decir que quedé muerto de risa.",
          translation: "Then I can say I was dying laughing.",
          pronunciation: "en-TON-ses see PWEH-doh deh-SEER keh keh-DEH MWER-toh deh RREE-sah",
          literal: "Then yes I-can say that I-ended-up dead from laughter.",
          why: "“Muerto de risa” is idiomatic and common. It sounds more Colombian and conversational than announcing, stiffly, “me reí mucho.”"
        },
        {
          speaker: "Paula",
          target: "Dígalo, pero si se ríe de mí en serio, ahí sí le cobro.",
          translation: "Say it, but if you laugh at me for real, then I will charge you for it.",
          pronunciation: "DEE-gah-loh, PEH-roh see seh RREE-eh deh mee en SEH-ryoh, ah-EE see leh KOH-broh",
          literal: "Say-it, but if yourself laugh of me seriously, there yes to-you I-charge.",
          why: "“Se ríe de mí” is the line not to cross. The joke at the end keeps the warning friendly, but the grammar is serious."
        }
      ],
      vocabulary: [
        {
          term: "reír",
          explanation:
            "To laugh. In real conversation, you often meet the pronominal “reírse” and the phrase “me da risa” more than a plain conjugation.",
          literal: "to laugh",
          useWhen:
            "Talking about laughter itself, what made someone laugh, or whether people laughed with or at someone.",
          avoidWhen:
            "You want the most natural Colombian reaction to a funny thing. Often “me da risa” beats “me río.”",
          register: "neutral",
          region: "Universal Spanish; the phrasing around it is very Colombian.",
          related: ["reírse", "la risa", "me da risa", "carcajearse"],
          example: {
            target: "No quería reírme de ti.",
            translation: "I didn't want to laugh at you."
          }
        },
        {
          term: "me da risa",
          explanation:
            "It makes me laugh. This is often the natural Colombian way to react to something funny, more common than carefully saying “me río.”",
          literal: "it gives me laughter",
          useWhen:
            "A story, face, phrase or memory strikes you as funny and you are naming your reaction.",
          avoidWhen:
            "You need to describe actual laughter happening at that second. Then “me estoy riendo” may be clearer.",
          register: "friendly informal",
          region: "Very common Colombian Spanish.",
          related: ["qué risa", "me hizo reír", "me causa risa", "me dio risa"],
          example: {
            target: "Me dio mucha risa tu frase.",
            translation: "Your line really made me laugh."
          }
        },
        {
          term: "reírse de alguien",
          explanation:
            "To laugh at someone, often to mock them. The preposition de can turn a warm laugh into a social injury.",
          literal: "to laugh oneself of someone",
          useWhen:
            "You truly mean ridicule, or you are carefully saying that you did not ridicule someone.",
          avoidWhen:
            "You mean laughing together. Use “reírse con” so the joke stays shared.",
          register: "neutral",
          region: "General Spanish.",
          related: ["burlarse de", "hacer burla", "ridiculizar", "montársela"],
          example: {
            target: "No quería reírme de ti.",
            translation: "I didn't want to laugh at you."
          }
        },
        {
          term: "reírse con alguien",
          explanation:
            "To laugh with someone. The person is your companion in the joke, not the target of it.",
          literal: "to laugh oneself with someone",
          useWhen:
            "The laughter is shared, especially when someone has joked about their own mistake and invited the group in.",
          avoidWhen:
            "The person is not laughing or did not consent to the joke. Then “con” may be a polite fiction.",
          register: "neutral",
          region: "General Spanish.",
          related: ["compartir la risa", "seguir el chiste", "celebrar el chiste", "reír juntos"],
          example: {
            target: "Nos reímos con el personaje.",
            translation: "We laughed along with the character."
          }
        },
        {
          term: "riendo",
          explanation:
            "The gerund of reír. It drops the extra vowel you might expect: not “reíendo,” but “riendo.”",
          literal: "laughing",
          useWhen:
            "Describing laughter in progress: “me estoy riendo,” “salió riendo,” “seguimos riendo.”",
          avoidWhen:
            "You are writing the infinitive or a present form; those carry accents in different places.",
          register: "neutral",
          region: "General Spanish.",
          related: ["me estoy riendo", "seguimos riendo", "reímos", "ríen"],
          example: {
            target: "Yo también me estaba riendo.",
            translation: "I was laughing too."
          }
        },
        {
          term: "río, ríes, ríe, reímos, ríen",
          explanation:
            "Present-tense forms of reír. Most keep the written accent because Spanish is showing that the vowels stay in separate syllables.",
          literal: "I laugh, you laugh, he laughs, we laugh, they laugh",
          useWhen:
            "You need the present rather than a reaction phrase: who laughs, when people laugh, whether someone laughs at another person.",
          avoidWhen:
            "You are writing the third-person preterite. RAE now writes “rio” without an accent, though “rió” remains very common in print.",
          register: "neutral",
          region: "General Spanish spelling.",
          related: ["rio", "rió", "reí", "reíste"],
          example: {
            target: "Cuando todos ríen al mismo tiempo.",
            translation: "When everyone laughs at the same time."
          }
        },
        {
          term: "muerto de risa",
          explanation:
            "Dying laughing. A vivid, common way to say something was extremely funny without sounding like a grammar exercise.",
          literal: "dead from laughter",
          useWhen:
            "A joke, memory or scene left you laughing hard and telling the story afterward.",
          avoidWhen:
            "You are describing real danger or death. Keep it for light, obvious exaggeration.",
          register: "friendly informal",
          region: "General Colombian and widely understood.",
          related: ["qué risa", "llorar de la risa", "no poder parar de reír", "carcajada"],
          example: {
            target: "Quedé muerto de risa.",
            translation: "I was dying laughing."
          }
        }
      ],
      note:
        "Reír carries two lessons at once. Spelling matters — río, ríes, ríe, ríen, riendo, and preterite rio according to current RAE spelling — but the social grammar matters more. “Reírse con” includes someone; “reírse de” can wound them. For everyday reaction, “me da risa” will often sound more Colombian than a bare conjugation.",
      culture: [
        {
          label: "The preposition decides the ethics",
          body:
            "A group laugh can be affectionate or cruel. Spanish makes you choose: con shares the joke, de points the joke at someone. That tiny preposition can repair the moment or damage it."
        },
        {
          label: "Me da risa is the real reaction",
          body:
            "Learners practice “me río,” but Colombians constantly say “me da risa,” “qué risa,” “me dio risa.” The grammar is less symmetrical and much more alive."
        },
        {
          label: "Accents are not optional decoration",
          body:
            "In reír, the accent tells you to pronounce two vowels separately. The spelling carries pronunciation, not prestige. Ignore it and the word starts to look like a different rhythm."
        },
        {
          label: "Self-mockery gives permission",
          body:
            "When Paula laughs at her own mistake first, the group can laugh with her. If she had gone quiet, the same laughter would need a quick repair."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “reírse de” when you mean shared laughter",
          whyItFails:
            "“De” makes the person the target. If you meant warmth, you may accidentally say you were mocking them.",
          sayInstead: "Nos reímos contigo, not nos reímos de ti."
        },
        {
          mistake: "Saying only “me río” for every funny reaction",
          whyItFails:
            "It is grammatical, but Colombians often reach for “me da risa” or “qué risa” when reacting to a funny thing.",
          sayInstead: "Me da mucha risa esa frase."
        },
        {
          mistake: "Writing “reiendo” or “reíendo”",
          whyItFails:
            "The gerund is “riendo.” It drops the written vowel sequence that learners expect from the infinitive.",
          sayInstead: "Me estaba riendo."
        },
        {
          mistake: "Putting an accent on modern RAE preterite “rio”",
          whyItFails:
            "RAE now writes the third-person preterite as “rio” without an accent, though you will see “rió” everywhere. Know both, but do not be surprised by the unaccented form.",
          sayInstead: "Ayer se rio mucho; older print often has se rió."
        }
      ],
      variations: [
        {
          form: "Me da mucha risa.",
          register: "friendly informal",
          region: "Very common Colombian",
          whenToUse: "Reacting naturally to a funny story, face or line."
        },
        {
          form: "No quería reírme de ti.",
          register: "careful friendly",
          region: "General Spanish",
          whenToUse: "Repairing the risk that your laughter sounded like mockery."
        },
        {
          form: "Nos reímos contigo, no de ti.",
          register: "warm corrective",
          region: "General Spanish",
          whenToUse: "Making clear that the person is included in the joke."
        },
        {
          form: "Me estaba riendo desde la primera frase.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "Describing laughter already in progress."
        },
        {
          form: "Quedé muerto de risa.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "A joke landed so hard that plain “me reí” feels too small."
        }
      ],
      prompt: "Alex says “no quería reírme de ti.” What is he trying to avoid?",
      choices: [
        "Sounding as if he was mocking Paula.",
        "Admitting that the show was funny.",
        "Explaining the spelling of the verb."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence keeps the laughter shared?",
          choices: [
            "Nos reímos contigo, no de ti.",
            "Nos reímos contra ti, no lejos.",
            "Nos reímos sin nadie presente."
          ],
          answer: 0,
          tests: "reírse con versus reírse de"
        },
        {
          prompt: "Which reaction sounds especially Colombian and natural?",
          choices: [
            "La frase me da mucha risa.",
            "La frase me produce una operación.",
            "La frase me reserva una silla."
          ],
          answer: 0,
          tests: "me da risa as common reaction"
        },
        {
          prompt: "Which gerund is correct?",
          choices: [
            "Me estaba reíendo con Paula.",
            "Me estaba riendo con Paula.",
            "Me estaba reiendo con Paula."
          ],
          answer: 1,
          tests: "riendo as gerund of reír"
        },
        {
          prompt: "What should you know about “rio” and “rió”?",
          choices: [
            "Modern RAE writes rio, though rió is widespread.",
            "Both forms are present tense and always plural.",
            "Neither form belongs to the verb reír."
          ],
          answer: 0,
          tests: "third-person preterite spelling"
        }
      ]
    },
    en: {
      title: "Reírse con un amigo, no de él, en Chicago",
      situation:
        "Usted sale de una función de teatro aficionado en Chicago. Un amigo contó un chiste sobre su propio error y todos se rieron; ahora necesita distinguir laugh with de laugh at para que la risa no suene cruel.",
      setting: {
        who: "Paula actuó en la función y puede reírse de su propio error. Alejandro aprende a sumarse a la risa sin sonar como si se burlara.",
        what: "Una conversación después de la función sobre un chiste que funcionó, la diferencia entre reírse con y reírse de alguien, y frases naturales como “it made me laugh.”",
        when: "Viernes por la noche, afuera del teatro, mientras el grupo todavía repite la frase más graciosa.",
        where: "Chicago, en la acera frente a un teatro comunitario después de una función de barrio en inglés.",
        why: "Porque “laugh” es fácil de traducir, pero “laugh at” y “laugh with” tienen consecuencias sociales muy distintas."
      },
      address: {
        form: "mixed",
        who: "Paula y Alejandro son amigos. En inglés ambos usan “you”; el cuidado está en las preposiciones, no en el pronombre.",
        why: "El inglés no distingue tú y usted. Para reparar una risa ambigua, lo importante es decir “with you” y no “at you.”",
        ifYouSwitch:
          "No hay pronombre que cambiar. Para sonar más cuidadoso, cambie la frase: “I was laughing with you,” no un supuesto usted inglés."
      },
      dialogue: [
        {
          speaker: "Alejandro",
          target: "Paula, your line really made me laugh, but I didn't want to laugh at you.",
          translation: "Paula, me dio mucha risa tu frase, pero no quería reírme de ti.",
          pronunciation: "PAU-la, yor lain RI-li meid mi laf, bot ai DI-dent uant tu laf at yu",
          literal: "Paula, tu frase de verdad me hizo reír, pero no quería reírme a ti.",
          why: "“Made me laugh” traduce muy bien “me dio risa.” La parte delicada es “laugh at you,” que puede sonar a burla."
        },
        {
          speaker: "Paula",
          target: "Relax, I was laughing too. We were laughing with the character.",
          translation: "Tranquilo, yo también me estaba riendo. Nos reímos con el personaje.",
          pronunciation: "ri-LAKS, ai uaz LAF-ing tu. ui wer LAF-ing uid da KE-rak-ter",
          literal: "Relájese, yo estaba riendo también. Estábamos riendo con el personaje.",
          why: "“Laughing with” incluye al personaje o a la persona en la risa. No lo vuelve blanco del chiste."
        },
        {
          speaker: "Alejandro",
          target: "When everyone laughs at once, you don't know if you've gone too far.",
          translation: "Cuando todos ríen al mismo tiempo, uno no sabe si se pasó.",
          pronunciation: "uen EV-ri-uan lafs at uans, yu dont nou if yuv gon tu far",
          literal: "Cuando todos ríen a una vez, usted no sabe si ha ido demasiado lejos.",
          why: "“Laughs at once” significa reír al mismo tiempo. No lo confunda con “laughs at someone,” donde “at” apunta a una persona."
        },
        {
          speaker: "Paula",
          target: "If it had hurt, I wouldn't have laughed with you.",
          translation: "Si me hubiera dolido, no me habría reído contigo.",
          pronunciation: "if it jad jert, ai WU-dent jav laft uid yu",
          literal: "Si hubiera dolido, no habría reído con usted.",
          why: "Esta frase usa una condición pasada: “if it had hurt” más “wouldn't have laughed.” El punto emocional es que ella sí compartió la risa."
        },
        {
          speaker: "Alejandro",
          target: "Then I can say I was dying laughing.",
          translation: "Entonces sí puedo decir que quedé muerto de risa.",
          pronunciation: "den ai kan sei ai uaz DAI-ing LAF-ing",
          literal: "Entonces puedo decir que estaba muriendo riendo.",
          why: "“Dying laughing” es una exageración cotidiana. No habla de muerte real; dice que el chiste pegó durísimo."
        },
        {
          speaker: "Paula",
          target: "Say it, but if you laugh at me for real, I'll charge you.",
          translation: "Dígalo, pero si se ríe de mí en serio, ahí sí le cobro.",
          pronunciation: "sei it, bot if yu laf at mi for RI-al, ail charch yu",
          literal: "Dígalo, pero si se ríe a mí de verdad, le cobro.",
          why: "“Laugh at me” es la frontera. La broma de cobrar suaviza la advertencia, pero la preposición sigue importando."
        }
      ],
      vocabulary: [
        {
          term: "laugh",
          explanation:
            "Reír. El verbo base es sencillo; las preposiciones “at” y “with” cambian la relación social.",
          literal: "reír",
          useWhen:
            "Habla de risa, de lo que hizo reír a alguien o de si la risa fue compartida o burlona.",
          avoidWhen:
            "Quiere decir sonreír sin sonido. Para eso use “smile,” no “laugh.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["laugh at", "laugh with", "laughter", "crack up"],
          example: {
            target: "Your line really made me laugh.",
            translation: "Tu frase me dio mucha risa."
          }
        },
        {
          term: "make me laugh",
          explanation:
            "Hacerme reír o darme risa. Es una forma natural de decir que algo provocó la risa.",
          literal: "hacerme reír",
          useWhen:
            "Una frase, historia, gesto o recuerdo causa la reacción.",
          avoidWhen:
            "Usted se ríe de alguien como burla. Ahí la estructura es “laugh at,” no “make me laugh.”",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["it made me laugh", "funny", "crack me up", "make us laugh"],
          example: {
            target: "It made me laugh.",
            translation: "Me dio risa."
          }
        },
        {
          term: "laugh at someone",
          explanation:
            "Reírse de alguien. Puede significar burla, así que hay que usarlo con cuidado.",
          literal: "reír a alguien",
          useWhen:
            "Realmente habla de burlarse, o de aclarar que no quería burlarse.",
          avoidWhen:
            "La risa fue compartida. Entonces use “laugh with.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["mock", "make fun of", "ridicule", "tease"],
          example: {
            target: "I didn't want to laugh at you.",
            translation: "No quería reírme de ti."
          }
        },
        {
          term: "laugh with someone",
          explanation:
            "Reírse con alguien. La persona participa en el chiste en vez de quedar como blanco.",
          literal: "reír con alguien",
          useWhen:
            "La otra persona también se ríe o invitó al grupo a compartir el chiste.",
          avoidWhen:
            "La persona está incómoda o callada. Decir “with” no arregla una burla real.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["share the joke", "laugh together", "join in", "be in on it"],
          example: {
            target: "I laughed with you.",
            translation: "Me reí contigo."
          }
        },
        {
          term: "laughing",
          explanation:
            "Riendo. La forma -ing sirve para la risa en progreso: “I was laughing,” “we were laughing.”",
          literal: "riendo",
          useWhen:
            "Describe lo que pasaba en ese momento o durante una escena.",
          avoidWhen:
            "Habla de una reacción puntual ya terminada; ahí puede bastar “laughed.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["was laughing", "kept laughing", "started laughing", "laughing hard"],
          example: {
            target: "I was laughing too.",
            translation: "Yo también me estaba riendo."
          }
        },
        {
          term: "laughed",
          explanation:
            "Rio / se rio. Es el pasado simple; no tiene una marca visible como las tildes españolas de reír.",
          literal: "rio / se rio",
          useWhen:
            "Cuenta una risa terminada: “she laughed,” “they laughed,” “we laughed.”",
          avoidWhen:
            "La risa seguía en progreso. Entonces “was laughing” pinta mejor la escena.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["laugh", "was laughing", "had laughed", "laughed with"],
          example: {
            target: "She laughed with us.",
            translation: "Ella se rio con nosotros."
          }
        },
        {
          term: "dying laughing",
          explanation:
            "Muerto de risa. Es exageración cotidiana para una risa muy fuerte.",
          literal: "muriendo riendo",
          useWhen:
            "Un chiste o escena lo hizo reír muchísimo y quiere contarlo con energía.",
          avoidWhen:
            "Hay muerte o peligro real en la conversación. Entonces la exageración puede sonar insensible.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["cracking up", "laughing so hard", "in stitches", "burst out laughing"],
          example: {
            target: "I was dying laughing.",
            translation: "Quedé muerto de risa."
          }
        }
      ],
      note:
        "En inglés, “laugh” no lleva las tildes difíciles de reír, pero sí exige cuidar las preposiciones. “Laugh at you” puede ser burla; “laugh with you” comparte el chiste. Para “me da risa,” la frase más natural suele ser “it made me laugh.”",
      culture: [
        {
          label: "At apunta, with acompaña",
          body:
            "La diferencia social es enorme. “Laugh at” señala a alguien como blanco; “laugh with” lo incluye como compañero de la risa."
        },
        {
          label: "Make me laugh suena natural",
          body:
            "Para traducir “me da risa,” no fuerce “it gives me laughter.” “It made me laugh” suena simple, vivo y correcto."
        },
        {
          label: "Dying laughing es exageración segura",
          body:
            "En un contexto ligero, nadie entiende “dying laughing” como muerte real. Es el equivalente cotidiano de quedar muerto de risa."
        },
        {
          label: "La reparación debe ser rápida",
          body:
            "Si no sabe si su risa hirió a alguien, diga rápido que se reía con la persona, no de ella. La preposición puede reparar el momento."
        }
      ],
      pitfalls: [
        {
          mistake: "“I laughed of you.”",
          whyItFails:
            "Calca “me reí de ti,” pero el inglés usa “at” para la burla. Además, puede sonar hiriente si no era su intención.",
          sayInstead: "I laughed with you, not at you."
        },
        {
          mistake: "“It gave me laughter.”",
          whyItFails:
            "Traduce “me dio risa” literalmente, pero no es la reacción idiomática normal.",
          sayInstead: "It made me laugh."
        },
        {
          mistake: "“I was laughing of the character.”",
          whyItFails:
            "Para risa compartida necesita “with.” “Of” no cumple ese papel en inglés.",
          sayInstead: "I was laughing with the character."
        },
        {
          mistake: "“I dead of laugh.”",
          whyItFails:
            "Calca “muerto de risa.” El inglés necesita la forma progresiva de la exageración.",
          sayInstead: "I was dying laughing."
        }
      ],
      variations: [
        {
          form: "It made me laugh.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Reaccionar naturalmente a algo que da risa."
        },
        {
          form: "I didn't want to laugh at you.",
          register: "cuidadoso amistoso",
          region: "Inglés universal",
          whenToUse: "Aclarar que no quería burlarse."
        },
        {
          form: "We were laughing with you.",
          register: "cálido correctivo",
          region: "Inglés universal",
          whenToUse: "Incluir a la persona en el chiste, no señalarla."
        },
        {
          form: "I was laughing from the first line.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "Describir una risa que ya estaba en progreso."
        },
        {
          form: "I was dying laughing.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "El chiste fue mucho más fuerte que un simple “it was funny.”"
        }
      ],
      prompt: "Alejandro says “I didn't want to laugh at you.” ¿Qué quiere evitar?",
      choices: [
        "Sonar como si se estuviera burlando de Paula.",
        "Admitir que la función tuvo una parte graciosa.",
        "Explicar la ortografía española de reír."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase mantiene la risa compartida?",
          choices: [
            "We were laughing with you.",
            "We were laughing against you.",
            "We were laughing without people."
          ],
          answer: 0,
          tests: "laugh with for shared laughter"
        },
        {
          prompt: "¿Cuál traduce mejor “me dio risa”?",
          choices: [
            "It gave me a reservation.",
            "It made me laugh.",
            "It opened the theater."
          ],
          answer: 1,
          tests: "make me laugh for me dio risa"
        },
        {
          prompt: "¿Cuál frase puede sonar a burla?",
          choices: [
            "I laughed with Paula.",
            "I laughed beside Paula.",
            "I laughed at Paula."
          ],
          answer: 2,
          tests: "laugh at as mockery risk"
        },
        {
          prompt: "¿Cuál corrige “I dead of laugh”?",
          choices: [
            "I was dying laughing.",
            "I deaded the joke.",
            "I death of funny."
          ],
          answer: 0,
          tests: "dying laughing as idiom"
        }
      ]
    }
  },
  {
    id: "smiling-for-a-photo-in-san-andres",
    level: "Extending · Tears and laughter",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "neutral",
    pathways: ["extension"],
    verb: "sonreír",
    review: "pending",
    es: {
      title: "Sonreír para una foto en San Andrés",
      situation:
        "Estás en San Andrés con unos amigos y una fotógrafa les toma una foto antes de que se vaya la luz. Ella necesita decir sonría sin sonar mecánica, y tú quieres comentar quién salió sonriendo y quién sonrió tarde.",
      setting: {
        who: "Claudia is a photographer used to guiding nervous groups quickly. Alex is in the group and notices every awkward smile once the photo appears.",
        what: "A short photo session: the photographer gives directions, people adjust their faces, someone laughs, and the final picture catches one late smile.",
        when: "Early evening, just before sunset, when the light is beautiful but disappearing fast.",
        where: "San Andrés, on a small beachfront walkway, with friends trying to get one decent group photo before dinner.",
        why: "Because “sonría” is what photographers actually say, and sonreír carries the same accent pattern as reír while adding its own everyday photo vocabulary."
      },
      address: {
        form: "mixed",
        who: "Claudia uses ustedes with the group and usted-like commands to keep the instruction polite; the friends use tú among themselves.",
        why: "A photo session is both friendly and directive. Mixed address lets the photographer guide strangers while the friends comment naturally afterward.",
        ifYouSwitch:
          "Pure tú from the photographer could sound too intimate with strangers. Pure usted among the friends would make the after-photo teasing stiff."
      },
      dialogue: [
        {
          speaker: "Claudia",
          target: "Listo, miren hacia acá y sonrían sin cerrar los ojos.",
          translation: "Ready, look this way and smile without closing your eyes.",
          pronunciation: "LEES-toh, MEE-ren AH-syah ah-KAH ee son-RREE-an seen seh-RRAR los OH-hos",
          literal: "Ready, look toward here and smile without closing the eyes.",
          why: "“Sonrían” is the ustedes command. The accent marks the stress and keeps the same vowel separation family as reír."
        },
        {
          speaker: "Alex",
          target: "Yo sonrío raro cuando me dicen que sonría.",
          translation: "I smile weirdly when they tell me to smile.",
          pronunciation: "yo son-RREE-oh RRAH-roh KWAN-doh meh DEE-sen keh son-RREE-ah",
          literal: "I smile weird when to-me they-say that I-smile.",
          why: "Both “sonrío” and “sonría” carry accents. The spelling is doing grammar work, not making the word fancy."
        },
        {
          speaker: "Claudia",
          target: "No posen tanto; piensen en algo que les dé risa y sonrían suave.",
          translation: "Don't pose so much; think of something that makes you laugh and smile softly.",
          pronunciation: "no POH-sen TAN-toh; PYEN-sen en AL-goh keh les deh RREE-sah ee son-RREE-an SWAH-beh",
          literal: "Do-not pose so-much; think in something that to-you gives laughter and smile soft.",
          why: "The best photo instruction is not just the verb; it creates a real expression. “Sonrían suave” sounds less frozen than a hard command."
        },
        {
          speaker: "Amiga",
          target: "Si Alex sigue sonriendo así, parecemos foto de documento.",
          translation: "If Alex keeps smiling like that, we look like an ID photo.",
          pronunciation: "see AH-leks SEE-geh son-RRYEN-doh ah-SEE, pah-reh-SEH-mos FOH-toh deh doh-koo-MEN-toh",
          literal: "If Alex continues smiling like that, we-seem photo of document.",
          why: "“Sonriendo” is the gerund: like riendo, it drops the extra written vowel. It describes the smile in progress."
        },
        {
          speaker: "Claudia",
          target: "Ahora sí: uno, dos, tres. Alex sonrió tarde, pero quedó natural.",
          translation: "Now yes: one, two, three. Alex smiled late, but it came out natural.",
          pronunciation: "ah-OH-rah see: OO-noh, dos, tres. AH-leks son-RRYOH TAR-deh, PEH-roh keh-DOH nah-too-RAL",
          literal: "Now yes: one, two, three. Alex smiled late, but it-stayed natural.",
          why: "You will still see “sonrió” everywhere. Current RAE spelling treats the parallel simple preterite “rio” without accent, but “sonrió” remains accented because the longer word needs it."
        },
        {
          speaker: "Alex",
          target: "Menos mal. Si no hubiera sonreído, mi mamá pedía repetirla.",
          translation: "Good thing. If I hadn't smiled, my mom would ask to take it again.",
          pronunciation: "MEH-nos mal. see no oo-BYEH-rah son-rreh-EE-doh, mee mah-MAH peh-DEE-ah rreh-peh-TEER-lah",
          literal: "Less bad. If not I-had smiled, my mom asked to repeat-it.",
          why: "The past perfect subjunctive “hubiera sonreído” is not rare in real joking: it lets Alex imagine the photo that almost failed."
        }
      ],
      vocabulary: [
        {
          term: "sonreír",
          explanation:
            "To smile. It shares the accent behavior of reír in much of the present and in the participle sonreído, while the gerund becomes sonriendo.",
          literal: "to smile",
          useWhen:
            "Talking about photos, greeting someone, reacting quietly, or softening a tense moment without laughing out loud.",
          avoidWhen:
            "There is audible laughter. Then use reír or reírse; a smile can be silent and small.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["sonrisa", "reír", "sonriendo", "sonreído"],
          example: {
            target: "Yo sonrío raro en las fotos.",
            translation: "I smile weirdly in photos."
          }
        },
        {
          term: "sonría / sonrían",
          explanation:
            "Smile, in commands. “Sonría” addresses one person politely; “sonrían” addresses a group, exactly what a photographer says.",
          literal: "smile",
          useWhen:
            "Taking photos or gently prompting an expression without saying a whole sentence.",
          avoidWhen:
            "Someone is upset and you are telling them to perform happiness. Then it can sound dismissive.",
          register: "polite practical",
          region: "General Spanish.",
          related: ["mire acá", "sonrisa", "una más", "quietos"],
          example: {
            target: "Miren hacia acá y sonrían.",
            translation: "Look this way and smile."
          }
        },
        {
          term: "sonrío, sonríes, sonríe, sonreímos, sonríen",
          explanation:
            "Present forms of sonreír. The accents keep the vowels apart: sonrío, sonríes, sonríe, sonríen.",
          literal: "I smile, you smile, she smiles, we smile, they smile",
          useWhen:
            "You need a present-tense form rather than a command or noun.",
          avoidWhen:
            "You are writing the gerund. It is “sonriendo,” not “sonreíendo.”",
          register: "neutral",
          region: "General Spanish spelling.",
          related: ["sonrió", "sonreí", "sonriendo", "sonreído"],
          example: {
            target: "Yo sonrío raro cuando me dicen que sonría.",
            translation: "I smile weirdly when they tell me to smile."
          }
        },
        {
          term: "sonriendo",
          explanation:
            "Smiling. Like riendo, the gerund loses the extra vowel you might expect from the infinitive.",
          literal: "smiling",
          useWhen:
            "Describing the expression while it is happening: someone appears smiling, leaves smiling or keeps smiling.",
          avoidWhen:
            "You need the past participle after haber. That is “sonreído,” with the accent.",
          register: "neutral",
          region: "General Spanish.",
          related: ["riendo", "sonreído", "sonrisa", "seguir sonriendo"],
          example: {
            target: "Sigue sonriendo así.",
            translation: "He keeps smiling like that."
          }
        },
        {
          term: "sonrió / sonreído",
          explanation:
            "The third-person preterite and the participle. “Sonrió” keeps its accent; “sonreído” keeps one too. The shorter parallel reír form is now “rio” by RAE, though “rió” is common in print.",
          literal: "smiled / smiled",
          useWhen:
            "You are narrating a completed smile or building a perfect tense: “sonrió tarde,” “había sonreído.”",
          avoidWhen:
            "Confusing it with the present “sonrío.” The accent and ending tell different stories.",
          register: "neutral",
          region: "General Spanish spelling.",
          related: ["rio", "rió", "sonrío", "sonriendo"],
          example: {
            target: "Alex sonrió tarde.",
            translation: "Alex smiled late."
          }
        },
        {
          term: "foto de documento",
          explanation:
            "An ID-style photo: stiff, frontal and usually not flattering. It is a useful everyday complaint about forced smiles.",
          literal: "document photo",
          useWhen:
            "Someone's smile looks frozen, official or too serious for a casual group photo.",
          avoidWhen:
            "You are actually taking a legal ID photo. Then the stiffness is the point, not a joke.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["foto seria", "sonrisa fingida", "posar", "salir raro"],
          example: {
            target: "Parecemos foto de documento.",
            translation: "We look like an ID photo."
          }
        },
        {
          term: "quedar natural",
          explanation:
            "To come out looking natural. With photos, quedar tells how the image ended up, not where it is located.",
          literal: "to remain natural",
          useWhen:
            "Judging the result of a photo: natural, blurry, dark, pretty, awkward, serious.",
          avoidWhen:
            "You are talking about a person's stable personality. This is about the result in the image.",
          register: "neutral",
          region: "General Colombian.",
          related: ["salir bien", "quedar borroso", "quedar serio", "salir sonriendo"],
          example: {
            target: "Quedó natural.",
            translation: "It came out natural."
          }
        }
      ],
      note:
        "Sonreír is small but spelling-heavy. Present forms like “sonrío” and “sonríen” keep the accent, the gerund is “sonriendo,” and the participle is “sonreído.” The photographer's command “sonría / sonrían” is not textbook theater; it is exactly what you hear before a photo.",
      culture: [
        {
          label: "Photographers really say sonría",
          body:
            "The command may look formal on the page, but it is ordinary in a photo setting. The register comes from the role: someone is guiding faces quickly before the light changes."
        },
        {
          label: "A natural smile is coached indirectly",
          body:
            "Telling people simply to smile often freezes them. “Piensen en algo que les dé risa” is better because it produces an expression instead of ordering one."
        },
        {
          label: "Photo talk uses quedar and salir",
          body:
            "Colombians talk about how they came out in a photo: salí raro, quedé serio, quedó natural. The verbs judge the result, not the person forever."
        },
        {
          label: "The accent keeps the face of the verb",
          body:
            "Because sonreír contains reír, the written accent carries the same pronunciation work. Learning the accents is learning the verb, not memorizing decoration."
        }
      ],
      pitfalls: [
        {
          mistake: "Writing “sonrio” for the present “I smile”",
          whyItFails:
            "The present form needs the accent: “sonrío.” Without it, the spelling hides the vowel separation and fails the standard form.",
          sayInstead: "Yo sonrío raro en las fotos."
        },
        {
          mistake: "Writing “sonreíendo” for the gerund",
          whyItFails:
            "The gerund drops the extra written vowel, just like riendo. The correct form is “sonriendo.”",
          sayInstead: "Sigue sonriendo."
        },
        {
          mistake: "Assuming every preterite in this family lost its accent",
          whyItFails:
            "RAE writes the short reír form as “rio,” but “sonrió” still carries an accent because of its stress pattern.",
          sayInstead: "Ella rio, but ella sonrió."
        },
        {
          mistake: "Using “sonría” when someone is actually upset",
          whyItFails:
            "In a photo it is practical. In an emotional moment, it can sound like you are asking the person to perform happiness.",
          sayInstead: "Use “¿estás bien?” before asking for a smile."
        }
      ],
      variations: [
        {
          form: "Sonría, por favor.",
          register: "polite practical",
          region: "General Spanish",
          whenToUse: "A photographer addressing one person."
        },
        {
          form: "Miren hacia acá y sonrían.",
          register: "friendly practical",
          region: "General Spanish",
          whenToUse: "Directing a group for a photo."
        },
        {
          form: "Yo sonrío raro en las fotos.",
          register: "friendly informal",
          region: "General Spanish",
          whenToUse: "Joking about your own forced photo face."
        },
        {
          form: "Salió sonriendo sin darse cuenta.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "The photo caught a natural smile in progress."
        },
        {
          form: "Alex sonrió tarde, pero quedó natural.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "A completed late smile still worked in the picture."
        }
      ],
      prompt: "Claudia says “sonrían” to the group. What kind of form is it?",
      choices: [
        "A group command a photographer would naturally use.",
        "A past-tense report that everyone smiled yesterday.",
        "A noun naming the printed photograph itself."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which present-tense form is spelled correctly?",
          choices: [
            "Yo sonrio raro en las fotos.",
            "Yo sonrío raro en las fotos.",
            "Yo sonreio raro en las fotos."
          ],
          answer: 1,
          tests: "accent in present sonrío"
        },
        {
          prompt: "Which gerund is correct?",
          choices: [
            "Sigue sonreíendo para la foto.",
            "Sigue sonriendo para la foto.",
            "Sigue sonríendo para la foto."
          ],
          answer: 1,
          tests: "sonriendo as gerund"
        },
        {
          prompt: "Which sentence respects the RAE note accurately?",
          choices: [
            "The short reír preterite is rio, but sonrió keeps its accent.",
            "All forms of sonreír now lose every accent in writing.",
            "The gerund sonriendo must carry two written accents."
          ],
          answer: 0,
          tests: "rio versus sonrió spelling"
        },
        {
          prompt: "What does “quedó natural” mean about the photo?",
          choices: [
            "The result looked natural in the image.",
            "The person became natural forever after.",
            "The camera was left outside overnight."
          ],
          answer: 0,
          tests: "quedar as photo result"
        }
      ]
    },
    en: {
      title: "Sonreír para una foto en Auckland",
      situation:
        "Usted está en Auckland con unos amigos y una fotógrafa les toma una foto antes de que se vaya la luz. Necesita entender smile, smiling y smiled, y cómo un fotógrafo dice smile sin sonar raro.",
      setting: {
        who: "Claudia es fotógrafa y guía grupos nerviosos con rapidez. Alejandro está en el grupo y nota cada sonrisa rara cuando aparece la foto.",
        what: "Una sesión breve: la fotógrafa da instrucciones, todos ajustan la cara, alguien se ríe y la foto final captura una sonrisa tarde.",
        when: "Al comienzo de la noche, justo antes del atardecer, cuando la luz está bonita pero se acaba rápido.",
        where: "Auckland, en un muelle peatonal cerca del agua, con amigos intentando sacar una foto decente antes de cenar.",
        why: "Porque “smile” cubre sonreír, sonría y sonrisa según la frase, y el inglés marca progreso con “smiling” y pasado con “smiled.”"
      },
      address: {
        form: "mixed",
        who: "Claudia habla con el grupo y los amigos se hablan entre sí; en inglés todos reciben el mismo “you.”",
        why: "La instrucción de foto no necesita otro pronombre. “Look this way and smile” basta para sonar práctico y amable.",
        ifYouSwitch:
          "No hay usted que activar. Si la fotógrafa dice “please” y mantiene buen tono, la instrucción ya suena cortés."
      },
      dialogue: [
        {
          speaker: "Claudia",
          target: "Ready, look this way and smile without closing your eyes.",
          translation: "Listo, miren hacia acá y sonrían sin cerrar los ojos.",
          pronunciation: "RE-di, luk dis uei and smail wi-DAUT KLOU-zing yor ais",
          literal: "Listo, miren hacia este lado y sonrían sin cerrar sus ojos.",
          why: "“Smile” funciona como imperativo para una o varias personas. El inglés no cambia la forma para el grupo."
        },
        {
          speaker: "Alejandro",
          target: "I smile weirdly when people tell me to smile.",
          translation: "Yo sonrío raro cuando me dicen que sonría.",
          pronunciation: "ai smail WIRD-li uen PI-pol tel mi tu smail",
          literal: "Yo sonrío raramente cuando la gente me dice sonreír.",
          why: "El inglés usa la misma forma base “smile” después de “I” en presente y después de “to” en “tell me to smile.”"
        },
        {
          speaker: "Claudia",
          target: "Don't pose so much; think of something funny and smile softly.",
          translation: "No posen tanto; piensen en algo que les dé risa y sonrían suave.",
          pronunciation: "dont pouz sou mach; zink ov SOM-zing FA-ni and smail SOFT-li",
          literal: "No posen tanto; piensen en algo gracioso y sonrían suavemente.",
          why: "“Smile softly” no significa una sonrisa débil; significa bajar la rigidez para que la expresión se vea natural."
        },
        {
          speaker: "Friend",
          target: "If Alejandro keeps smiling like that, we look like an ID photo.",
          translation: "Si Alejandro sigue sonriendo así, parecemos foto de documento.",
          pronunciation: "if a-le-JAN-dro kips SMAIL-ing laik dat, ui luk laik an ai-DI FOU-tou",
          literal: "Si Alejandro sigue sonriendo así, parecemos una foto de identificación.",
          why: "“Smiling” es la forma en progreso. Después de “keeps,” el inglés usa -ing: “keeps smiling.”"
        },
        {
          speaker: "Claudia",
          target: "Now: one, two, three. Alejandro smiled late, but it came out natural.",
          translation: "Ahora: uno, dos, tres. Alejandro sonrió tarde, pero quedó natural.",
          pronunciation: "nau: uan, tu, zri. a-le-JAN-dro smaild leit, bot it keim aut NA-chu-rol",
          literal: "Ahora: uno, dos, tres. Alejandro sonrió tarde, pero salió natural.",
          why: "“Smiled” es pasado simple. “It came out natural” traduce el quedar de resultado en una foto."
        },
        {
          speaker: "Alejandro",
          target: "Good thing. If I hadn't smiled, my mom would ask us to take it again.",
          translation: "Menos mal. Si no hubiera sonreído, mi mamá pedía repetirla.",
          pronunciation: "gud zing. if ai JA-dent smaild, mai mam wud ask as tu teik it a-GEN",
          literal: "Buena cosa. Si no hubiera sonreído, mi mamá nos pediría tomarla otra vez.",
          why: "“Hadn't smiled” arma el pasado hipotético. Es la versión inglesa de imaginar la foto que casi salió mal."
        }
      ],
      vocabulary: [
        {
          term: "smile",
          explanation:
            "Sonreír, sonría o sonrisa, según la estructura. Como verbo puede ser acción o instrucción.",
          literal: "sonreír / sonrisa",
          useWhen:
            "Habla de fotos, saludos, gestos amables o reacciones silenciosas que no llegan a risa.",
          avoidWhen:
            "Hay carcajada o sonido. Entonces use “laugh,” no “smile.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["smiling", "smiled", "smile for the camera", "grin"],
          example: {
            target: "Look this way and smile.",
            translation: "Miren hacia acá y sonrían."
          }
        },
        {
          term: "smile!",
          explanation:
            "¡Sonría! o ¡sonrían! El imperativo inglés no cambia entre una persona y un grupo.",
          literal: "sonría / sonrían",
          useWhen:
            "Un fotógrafo o amigo pide la expresión para una foto.",
          avoidWhen:
            "La persona está triste o incómoda. Pedir “smile” puede sonar como ordenar felicidad.",
          register: "amistoso práctico",
          region: "Inglés universal.",
          related: ["say cheese", "look here", "one more", "hold still"],
          example: {
            target: "Smile without closing your eyes.",
            translation: "Sonrían sin cerrar los ojos."
          }
        },
        {
          term: "I smile / you smile / they smile",
          explanation:
            "Presente simple de “smile.” A diferencia de sonreír, no hay tildes ni cambios visibles salvo “he smiles.”",
          literal: "sonrío / sonríes / sonríen",
          useWhen:
            "Habla de hábito, reacción normal o verdad general.",
          avoidWhen:
            "La sonrisa está ocurriendo ahora mismo en una foto. Entonces “is smiling” pinta mejor el momento.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["he smiles", "smile back", "usually smile", "never smile"],
          example: {
            target: "I smile weirdly in photos.",
            translation: "Yo sonrío raro en las fotos."
          }
        },
        {
          term: "smiling",
          explanation:
            "Sonriendo. La forma -ing muestra la expresión en progreso.",
          literal: "sonriendo",
          useWhen:
            "Alguien sigue sonriendo, sale sonriendo o aparece sonriendo en una foto.",
          avoidWhen:
            "La sonrisa fue un hecho puntual ya terminado. Entonces use “smiled.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["keeps smiling", "is smiling", "was smiling", "smiling softly"],
          example: {
            target: "He keeps smiling like that.",
            translation: "Sigue sonriendo así."
          }
        },
        {
          term: "smiled",
          explanation:
            "Sonrió o sonreí. Es pasado simple y no cambia de forma por persona.",
          literal: "sonrió / sonreí",
          useWhen:
            "Narra una sonrisa terminada: “she smiled,” “they smiled,” “I smiled late.”",
          avoidWhen:
            "Necesita un pasado hipotético con “had.” Entonces use “had smiled.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["had smiled", "smiled back", "smiled late", "came out smiling"],
          example: {
            target: "Alejandro smiled late.",
            translation: "Alejandro sonrió tarde."
          }
        },
        {
          term: "ID photo",
          explanation:
            "Foto de documento. Sirve para bromear sobre una sonrisa tiesa, frontal y poco natural.",
          literal: "foto de identificación",
          useWhen:
            "La foto casual quedó seria, rígida o con cara de trámite.",
          avoidWhen:
            "Realmente necesita una foto oficial. Ahí no es insulto; es el formato esperado.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["passport photo", "stiff smile", "forced smile", "photo ID"],
          example: {
            target: "We look like an ID photo.",
            translation: "Parecemos foto de documento."
          }
        },
        {
          term: "come out natural",
          explanation:
            "Quedar natural o salir natural en una foto. “Come out” habla del resultado de la imagen.",
          literal: "salir natural",
          useWhen:
            "Evalúa cómo quedó una foto: natural, blurry, dark, awkward, beautiful.",
          avoidWhen:
            "Habla de salir físicamente de un lugar. Ese es otro uso de “come out.”",
          register: "neutro conversacional",
          region: "Inglés universal.",
          related: ["come out blurry", "look natural", "turn out well", "look good"],
          example: {
            target: "It came out natural.",
            translation: "Quedó natural."
          }
        }
      ],
      note:
        "“Smile” parece más fácil que “sonreír” porque no tiene tildes: smile, smiling, smiled. Pero la frase decide si es verbo, orden o sustantivo. En fotos, “smile” es una instrucción normal; fuera de contexto puede sonar como pedirle a alguien que finja alegría.",
      culture: [
        {
          label: "Smile no cambia para el grupo",
          body:
            "El fotógrafo dice “smile” a una persona o a diez. La cortesía no está en una conjugación distinta sino en “please,” el tono y las instrucciones alrededor."
        },
        {
          label: "Say cheese es cultural, no obligatorio",
          body:
            "“Say cheese” existe, pero muchos fotógrafos prefieren instrucciones más naturales: look here, relax, think of something funny. La meta es una cara real."
        },
        {
          label: "Come out juzga el resultado",
          body:
            "En inglés de fotos, “come out” funciona como “salir” o “quedar.” La foto came out blurry, came out natural, came out great."
        },
        {
          label: "Una sonrisa no es una risa",
          body:
            "“Smile” puede ser silencioso y mínimo. Si hay carcajada o sonido, el verbo cambia a “laugh.”"
        }
      ],
      pitfalls: [
        {
          mistake: "“I am smile weird in photos.”",
          whyItFails:
            "El inglés necesita el verbo “smile” conjugado o la forma -ing con “am.” No mezcle las dos estructuras.",
          sayInstead: "I smile weirdly in photos."
        },
        {
          mistake: "“He keeps smile like that.”",
          whyItFails:
            "Después de “keeps,” el verbo va en -ing cuando la acción continúa.",
          sayInstead: "He keeps smiling like that."
        },
        {
          mistake: "“Alejandro smile late.”",
          whyItFails:
            "Para una sonrisa terminada en pasado necesita “smiled.” El verbo no queda en forma base.",
          sayInstead: "Alejandro smiled late."
        },
        {
          mistake: "“The photo stayed natural.”",
          whyItFails:
            "Calca “quedó natural.” En inglés de fotos, “came out natural” o “looked natural” suena mejor.",
          sayInstead: "The photo came out natural."
        }
      ],
      variations: [
        {
          form: "Smile, please.",
          register: "cortés práctico",
          region: "Inglés universal",
          whenToUse: "Un fotógrafo o amigo pide la expresión para una foto."
        },
        {
          form: "Look this way and smile.",
          register: "amistoso práctico",
          region: "Inglés universal",
          whenToUse: "Dirigir a un grupo sin una frase larga."
        },
        {
          form: "I smile weirdly in photos.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Bromear sobre su propia cara forzada."
        },
        {
          form: "He came out smiling without noticing.",
          register: "neutro conversacional",
          region: "Inglés universal",
          whenToUse: "La foto capturó una sonrisa natural."
        },
        {
          form: "Alejandro smiled late, but it came out natural.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Una sonrisa tarde todavía funcionó en la foto."
        }
      ],
      prompt: "Claudia says “look this way and smile” to the group. ¿Qué pasa con el imperativo?",
      choices: [
        "No cambia para singular o plural en inglés.",
        "Se vuelve pasado porque hay una cámara.",
        "Necesita una tilde como en español."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa bien el presente simple?",
          choices: [
            "I smile weirdly in photos.",
            "I am smile weird in photos.",
            "I smiling weird in photos."
          ],
          answer: 0,
          tests: "simple present smile"
        },
        {
          prompt: "¿Cuál frase usa bien la forma en progreso?",
          choices: [
            "He keeps smile like that.",
            "He keeps smiling like that.",
            "He kept smiled like that."
          ],
          answer: 1,
          tests: "keeps plus -ing"
        },
        {
          prompt: "¿Cuál frase pone la sonrisa en pasado?",
          choices: [
            "Alejandro smile late.",
            "Alejandro smiling late.",
            "Alejandro smiled late."
          ],
          answer: 2,
          tests: "smiled as past simple"
        },
        {
          prompt: "¿Cuál traduce mejor “quedó natural” en una foto?",
          choices: [
            "It came out natural.",
            "It stayed nature now.",
            "It smiled the camera."
          ],
          answer: 0,
          tests: "come out for photo result"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/49-extending-tears-and-laughter.js");
