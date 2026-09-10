/*
 * Lesson block: developing / more, less and better.
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
    id: "mejorarse-en-riohacha",
    level: "Developing · More, less and better",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "health-and-body",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "mejorar",
    review: "pending",
    es: {
      title: "Mejorarse en Riohacha",
      situation:
        "Estás en Riohacha recuperándote de una fiebre que te dañó dos días del viaje. Una amiga pasa a dejarte suero y sopa, te pregunta si ya estás mejor y se despide con la frase que de verdad necesitas cuando alguien está enfermo: que te mejores.",
      setting: {
        who: "Daniela is a friend from Riohacha who has checked on Alex since the fever started. Alex is better than yesterday but still weak and embarrassed about needing care.",
        what: "A caring visit about recovery: how Alex feels, what has improved, and how to wish someone well without sounding like a translation.",
        when: "Late morning, after the worst night has passed and the heat outside is already heavy.",
        where: "Riohacha, in a guesthouse room near the waterfront, with a friend bringing practical help rather than dramatic sympathy.",
        why: "Because mejorar is useful, but mejorarse is the human phrase learners need when illness enters the room. “Que te mejores” is ordinary Colombian kindness, and “¿ya estás mejor?” is the question people actually ask."
      },
      address: {
        form: "tú",
        who: "Daniela and Alex use tú because they are friends close enough for soup, teasing and concern.",
        why: "This is not a clinic or a form. Tú lets Daniela be warm without sounding parental, and it lets Alex answer honestly.",
        ifYouSwitch:
          "Usted would fit a doctor or an older neighbour, especially in “que se mejore.” Here it would add distance to a friendship that is clearly personal."
      },
      dialogue: [
        {
          speaker: "Daniela",
          target: "¿Ya estás mejor, o todavía amaneciste vuelto nada?",
          translation: "Are you better now, or did you still wake up completely wiped out?",
          pronunciation: "yah es-TAS meh-HOR, oh toh-dah-BEE-ah ah-mah-neh-SEE-steh BWEHL-toh NAH-dah",
          literal: "Already you-are better, or still you-woke-up turned nothing?",
          why: "“¿Ya estás mejor?” is the natural health check. It uses estar because this is Alex's current condition, not his permanent identity."
        },
        {
          speaker: "Alex",
          target: "Estoy mejor que ayer, pero todavía me falta fuerza.",
          translation: "I'm better than yesterday, but I still don't have my strength back.",
          pronunciation: "es-TOY meh-HOR keh ah-YER, PEH-roh toh-dah-BEE-ah meh FAL-tah FWER-sah",
          literal: "I-am better than yesterday, but still to-me lacks strength.",
          why: "Plain mejorar can sit behind “estoy mejor,” the most common way to report recovery in conversation. It is more useful than announcing “mi salud ha mejorado.”"
        },
        {
          speaker: "Daniela",
          target: "Bueno, vas mejorando. Tómate esto despacio, que no es carrera.",
          translation: "Good, you're improving. Take this slowly; it's not a race.",
          pronunciation: "BWEH-noh, bas meh-hoh-RAN-doh. TOH-mah-teh ES-toh des-PAH-syoh, keh no es kah-RREH-rah",
          literal: "Good, you-go improving. Take-yourself this slowly, that not is race.",
          why: "“Vas mejorando” makes recovery gradual. It sounds more lived-in than a yes/no “you are cured.”"
        },
        {
          speaker: "Alex",
          target: "Gracias. Si sigo así, mañana ya me mejoro del todo.",
          translation: "Thanks. If I keep going like this, tomorrow I'll be fully better.",
          pronunciation: "GRAH-syahs. see SEE-goh ah-SEE, mah-NYAH-nah yah meh meh-HOH-roh del TOH-doh",
          literal: "Thanks. If I continue like this, tomorrow already myself I-improve completely.",
          why: "The reflexive “me mejoro” is the recovery version: I get better. It is not about improving a project; it is about a person coming out of illness."
        },
        {
          speaker: "Daniela",
          target: "Eso, pero no te confíes. Que te mejores bien antes de salir al sol.",
          translation: "Exactly, but don't get overconfident. Get properly better before going out in the sun.",
          pronunciation: "EH-soh, PEH-roh no teh kon-FYEH-es. keh teh meh-HOH-res byen AN-tes deh sah-LEER al sol",
          literal: "That, but not yourself trust. That you improve well before going-out to-the sun.",
          why: "“Que te mejores” is the key phrase: a wish, a blessing, and practical concern in one short Colombian sentence."
        },
        {
          speaker: "Alex",
          target: "Le voy a escribir a doña Marta: que se mejore también, porque ella sigue enferma.",
          translation: "I'm going to write to Doña Marta: hope she gets better too, because she's still sick.",
          pronunciation: "leh boy ah es-kree-BEER ah DOH-nyah MAR-tah: keh seh meh-HOH-reh tam-BYEN, POR-keh EH-yah SEE-geh en-FER-mah",
          literal: "To-her I-go to write to Doña Marta: that herself improves also, because she continues sick.",
          why: "The usted or third-person version is “que se mejore.” It is what you say to an older neighbour, a patient, or anyone you address more formally."
        }
      ],
      vocabulary: [
        {
          term: "mejorar",
          explanation:
            "To improve, get better, or make something better, depending on the subject and context.",
          literal: "to better",
          useWhen:
            "Health, weather, work, grades, service or a situation moves in a better direction.",
          avoidWhen:
            "Someone is ill and you need the human farewell. Then use the reflexive wish: “que te mejores” or “que se mejore.”",
          register: "neutral",
          region: "General Spanish; the health phrases here are natural in Colombia.",
          related: ["mejorarse", "estar mejor", "recuperarse", "aliviarse"],
          example: {
            target: "Vas mejorando poco a poco.",
            translation: "You're getting better little by little."
          }
        },
        {
          term: "mejorarse",
          explanation:
            "To recover or get better from illness. The person improves, rather than improving an object.",
          literal: "to improve oneself",
          useWhen:
            "Talking about someone coming out of a fever, flu, stomach bug or general illness.",
          avoidWhen:
            "Improving a plan, grade or service. Those usually use plain mejorar, not mejorarse.",
          register: "warm neutral",
          region: "General Colombian and broader Spanish.",
          related: ["recuperarse", "aliviarse", "sanarse", "sentirse mejor"],
          example: {
            target: "Mañana ya me mejoro del todo.",
            translation: "Tomorrow I'll be fully better."
          }
        },
        {
          term: "que te mejores",
          explanation:
            "The everyday Colombian wish to someone who is sick: hope you get better.",
          literal: "that you improve yourself",
          useWhen:
            "Leaving a sick friend, ending a message, or responding when someone says they feel awful.",
          avoidWhen:
            "Addressing someone with usted. Then the phrase changes to “que se mejore.”",
          register: "warm familiar",
          region: "General Colombian.",
          related: ["que se mejore", "recupérate", "cuídate", "ojalá mejores"],
          example: {
            target: "Que te mejores bien.",
            translation: "Hope you get properly better."
          }
        },
        {
          term: "¿ya estás mejor?",
          explanation:
            "The natural check-in question: are you better now?",
          literal: "already you are better?",
          useWhen:
            "Asking about someone's current state after illness, pain, sadness or a rough night.",
          avoidWhen:
            "Turning it into “¿ya eres mejor?” That would ask whether someone became a better person or performer.",
          register: "warm neutral",
          region: "General Spanish.",
          related: ["¿cómo sigues?", "¿cómo amaneciste?", "¿te sientes mejor?", "¿ya pasó?"],
          example: {
            target: "¿Ya estás mejor que ayer?",
            translation: "Are you better than yesterday?"
          }
        },
        {
          term: "que se mejore",
          explanation:
            "The usted or third-person version of the get-well wish.",
          literal: "that you/he/she improve yourself/himself/herself",
          useWhen:
            "Speaking to an older person, a patient, a neighbour you address with usted, or about someone else.",
          avoidWhen:
            "Using it with a close friend you call tú unless you want a more formal or distant tone.",
          register: "polite warm",
          region: "General Colombian.",
          related: ["que te mejores", "cuídese", "que siga mejor", "pronta recuperación"],
          example: {
            target: "Doña Marta, que se mejore.",
            translation: "Doña Marta, hope you get better."
          }
        },
        {
          term: "vas mejorando",
          explanation:
            "You're gradually improving. Ir plus the gerund makes the change feel progressive.",
          literal: "you go improving",
          useWhen:
            "Recovery is happening by degrees, not in one clean jump from sick to healthy.",
          avoidWhen:
            "You need a finished result. Then “ya mejoraste” or “ya estás bien” may be clearer.",
          register: "neutral conversational",
          region: "General Spanish.",
          related: ["va mejorando", "poco a poco", "cada día mejor", "sigue mejor"],
          example: {
            target: "Bueno, vas mejorando.",
            translation: "Good, you're improving."
          }
        },
        {
          term: "vuelto nada",
          explanation:
            "Completely wiped out, wrecked or in bad shape.",
          literal: "turned nothing",
          useWhen:
            "Describing how someone looks or feels after fever, work, heat, travel or a rough night.",
          avoidWhen:
            "Formal medical contexts. A doctor may understand it, but it belongs to everyday speech.",
          register: "friendly informal",
          region: "General Colombian colloquial speech.",
          related: ["acabado", "sin fuerzas", "molido", "hecho nada"],
          example: {
            target: "Amanecí vuelto nada.",
            translation: "I woke up completely wiped out."
          }
        }
      ],
      note:
        "The phrase to keep is “que te mejores.” It is small, common and emotionally important. Plain mejorar talks about improvement in general; mejorarse is what a sick person does. In a formal register, the same kindness becomes “que se mejore,” and the check-in is often “¿ya está mejor?” with usted. That is the difference between knowing a verb and being able to be kind at the right moment.",
      culture: [
        {
          label: "Get-well Spanish is social glue",
          body:
            "Colombians do not need a dramatic illness to say “que te mejores.” A fever, stomach trouble, migraine or bad cold is enough. The phrase is short because the care is assumed; adding too much can sound heavier than the moment requires."
        },
        {
          label: "Recovery is not a switch",
          body:
            "“Vas mejorando” leaves room for a person to be better and still weak. That matters in real conversation, where asking “¿ya estás bien?” can feel like pressure to declare the problem over."
        },
        {
          label: "Riohacha without fake color",
          body:
            "The setting widens the course map, but the Spanish stays general. A guesthouse, heat, a friend bringing soup and a get-well wish are enough; inventing local vocabulary would make the scene less useful, not more Colombian."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying only “mejora” to a sick friend",
          whyItFails:
            "It sounds more like an instruction than a caring wish. Colombian Spanish usually wraps the wish with que and the reflexive pronoun.",
          sayInstead: "Que te mejores."
        },
        {
          mistake: "Using “que te mejores” with someone you address as usted",
          whyItFails:
            "The warmth is right, but the address form clashes. With usted or when speaking about someone else, the pronoun changes.",
          sayInstead: "Que se mejore."
        },
        {
          mistake: "Asking “¿ya eres mejor?” about health",
          whyItFails:
            "Ser would ask whether the person is better in identity or ability. Health is a current state, so Colombian Spanish uses estar.",
          sayInstead: "¿Ya estás mejor?"
        }
      ],
      variations: [
        {
          form: "Que te mejores.",
          register: "warm familiar",
          region: "General Colombian",
          whenToUse: "A get-well wish to a friend, relative or anyone you address with tú."
        },
        {
          form: "Que se mejore, doña Marta.",
          register: "polite warm",
          region: "General Colombian",
          whenToUse: "The usted version for an older person, neighbour or patient."
        },
        {
          form: "¿Ya estás mejor que ayer?",
          register: "warm neutral",
          region: "General Spanish",
          whenToUse: "Checking whether someone's health has improved."
        },
        {
          form: "Vas mejorando poco a poco.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "Describing gradual recovery without rushing the person."
        }
      ],
      prompt: "Daniela says “Que te mejores bien antes de salir al sol.” What is she doing?",
      choices: [
        "She is wishing Alex a real recovery before he goes back outside.",
        "She is asking Alex to improve a travel plan before tomorrow.",
        "She is saying Alex became a better person during the fever."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which line is the natural get-well wish to a friend?",
          choices: [
            "Que te mejores pronto.",
            "Mejora ahora mismo.",
            "Eres mejor mañana."
          ],
          answer: 0,
          tests: "que te mejores as the familiar get-well wish"
        },
        {
          prompt: "How would you say the same wish to Doña Marta with usted?",
          choices: [
            "Que te mejoras, doña Marta.",
            "Que se mejore, doña Marta.",
            "Que eres mejor, doña Marta."
          ],
          answer: 1,
          tests: "que se mejore for usted or third person"
        },
        {
          prompt: "Which question checks someone's current health?",
          choices: [
            "¿Ya eres mejor que ayer?",
            "¿Ya mejoras la sopa?",
            "¿Ya estás mejor que ayer?"
          ],
          answer: 2,
          tests: "estar mejor for a current health state"
        },
        {
          prompt: "What does “vas mejorando” suggest?",
          choices: [
            "Recovery is happening gradually.",
            "The fever is getting much worse.",
            "A price is rising every day."
          ],
          answer: 0,
          tests: "ir plus gerund for gradual improvement"
        }
      ]
    },
    en: {
      title: "Mejorarse en Riohacha",
      situation:
        "Usted está en Brighton recuperándose de fiebre y una amiga pasa a verlo. Necesita hablar de sentirse mejor, de ir mejorando y de desearle a alguien que se mejore sin traducir literalmente “que te mejores” como “that you improve yourself.”",
      setting: {
        who: "Dani es una amiga que ha estado pendiente desde que Alex empezó con fiebre. Alex está mejor que ayer, pero todavía débil.",
        what: "Una visita de cuidado: cómo se siente Alex, qué ha mejorado, y cómo se desea recuperación en inglés natural.",
        when: "Al final de la mañana, después de que pasó la peor noche y afuera ya hace calor.",
        where: "Brighton, en una habitación de pensión cerca del mar, porque esta dirección enseña inglés a colombianos y ocurre fuera de Colombia.",
        why: "Porque get better traduce mejorarse en salud, y feel better traduce estar mejor. Improve existe, pero para una persona enferma puede sonar técnico o moral, no afectuoso."
      },
      address: {
        form: "mixed",
        who: "Dani y Alex usan nombres de pila y el mismo “you”; la cercanía sale de frases como “are you feeling better?” y “take it easy.”",
        why: "El inglés no distingue tú y usted. La calidez aparece en el verbo escogido, el tono y los pequeños cuidados, no en una forma pronominal.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Si Dani dijera “may you improve yourself,” el problema no sería formalidad sino traducción literal."
      },
      dialogue: [
        {
          speaker: "Dani",
          target: "Are you feeling better, or did you wake up completely wiped out again?",
          translation: "¿Ya estás mejor, o amaneciste vuelto nada otra vez?",
          pronunciation: "ar yu FI-ling BE-ter, or did yu weik ap kom-PLIT-li waipt aut a-GEN",
          literal: "¿Está sintiéndose mejor, o despertó completamente acabado otra vez?",
          why: "Are you feeling better? es la pregunta natural por salud. “Are you better?” también existe, pero feeling better suena más cuidadoso."
        },
        {
          speaker: "Alex",
          target: "I'm better than yesterday, but I still don't have my strength back.",
          translation: "Estoy mejor que ayer, pero todavía no recupero la fuerza.",
          pronunciation: "aim BE-ter dan YES-ter-dei, bat ai stil dount jav mai strength bak",
          literal: "Estoy mejor que ayer, pero todavía no tengo mi fuerza de vuelta.",
          why: "Better than yesterday funciona igual que mejor que ayer. La segunda parte evita decir “I lack strength,” que sería correcto pero poco conversacional."
        },
        {
          speaker: "Dani",
          target: "Good, you're getting better. Take it slowly; it's not a race.",
          translation: "Bueno, vas mejorando. Tómalo despacio; no es una carrera.",
          pronunciation: "gud, yur GE-ting BE-ter. teik it SLOU-li; its not a reis",
          literal: "Bueno, estás consiguiendo mejor. Tómalo despacio; no es una carrera.",
          why: "Getting better es el equivalente natural de mejorarse o ir mejorando. Improve no está mal, pero aquí suena menos humano."
        },
        {
          speaker: "Alex",
          target: "Thanks. If this keeps up, I'll be fully better tomorrow.",
          translation: "Gracias. Si sigo así, mañana ya estaré del todo mejor.",
          pronunciation: "thanks. if dis kips ap, ail bi FUL-li BE-ter tu-MO-rou",
          literal: "Gracias. Si esto sigue arriba, estaré completamente mejor mañana.",
          why: "I'll be better habla del estado de salud. “I'll improve myself” sonaría como superación personal, no como salir de una fiebre."
        },
        {
          speaker: "Dani",
          target: "Exactly, but don't overdo it. Get well before you go back out.",
          translation: "Eso, pero no exageres. Mejórate antes de volver a salir.",
          pronunciation: "eg-ZAKT-li, bat dount ou-ver-DU it. get wel bi-FOR yu gou bak aut",
          literal: "Exactamente, pero no lo hagas de más. Ponte bien antes de volver afuera.",
          why: "Get well es la frase de recuperación. Sirve en deseos como get well soon y en instrucciones suaves como get well before..."
        },
        {
          speaker: "Alex",
          target: "I'll text Mrs. Martin: hope you get well soon, because she's still sick too.",
          translation: "Le escribiré a la señora Martin: que se mejore pronto, porque ella también sigue enferma.",
          pronunciation: "ail tekst MI-sis MAR-tin: joup yu get wel sun, bi-KOZ shiz stil sik tu",
          literal: "Mandaré texto a la señora Martin: espero que usted se ponga bien pronto, porque ella sigue enferma también.",
          why: "Hope you get well soon es el equivalente funcional de que se mejore. No necesita that, ni improve, ni un pronombre reflexivo."
        }
      ],
      vocabulary: [
        {
          term: "improve",
          explanation:
            "Mejorar en sentido amplio: un servicio, una nota, un plan, una situación o una habilidad.",
          literal: "mejorar",
          useWhen:
            "Habla de resultados, procesos, calidad o desempeño que suben de nivel.",
          avoidWhen:
            "Una persona está enferma y usted quiere sonar humano. Use get better, feel better o get well.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["get better", "feel better", "recover", "make progress"],
          example: {
            target: "The service has improved.",
            translation: "El servicio ha mejorado."
          }
        },
        {
          term: "get better",
          explanation:
            "Mejorarse o mejorar de salud, y también mejorar de manera general en habla cotidiana.",
          literal: "ponerse mejor",
          useWhen:
            "Alguien se recupera, una situación empieza a mejorar o una habilidad progresa.",
          avoidWhen:
            "Necesita sonar técnico o estadístico. Ahí improve puede ser más preciso.",
          register: "warm neutral",
          region: "Inglés universal.",
          related: ["feel better", "get well", "recover", "be better"],
          example: {
            target: "You're getting better little by little.",
            translation: "Vas mejorando poco a poco."
          }
        },
        {
          term: "get well soon",
          explanation:
            "La fórmula afectuosa para que te mejores o que se mejore.",
          literal: "ponte bien pronto",
          useWhen:
            "Al despedirse de alguien enfermo o escribirle un mensaje de recuperación.",
          avoidWhen:
            "Traducir palabra por palabra “that you improve yourself.” Eso no es inglés natural.",
          register: "warm familiar",
          region: "Inglés universal.",
          related: ["feel better soon", "hope you recover soon", "take care", "rest up"],
          example: {
            target: "Hope you get well soon.",
            translation: "Que te mejores pronto."
          }
        },
        {
          term: "Are you feeling better?",
          explanation:
            "La pregunta natural para ¿ya estás mejor? cuando se habla de salud.",
          literal: "¿se está sintiendo mejor?",
          useWhen:
            "Pregunta por el estado actual de alguien después de enfermedad, dolor o una mala noche.",
          avoidWhen:
            "Usarla para mejorar moral o rendimiento. Ahí puede necesitar “are you getting better at it?”",
          register: "warm neutral",
          region: "Inglés universal.",
          related: ["Are you better?", "How are you feeling?", "Do you feel better?", "How are you now?"],
          example: {
            target: "Are you feeling better than yesterday?",
            translation: "¿Ya estás mejor que ayer?"
          }
        },
        {
          term: "hope you get well",
          explanation:
            "La estructura que reemplaza que se mejore en mensajes de recuperación.",
          literal: "espero que se ponga bien",
          useWhen:
            "Quiere sonar amable con alguien enfermo, sin importar si en español usaría tú o usted.",
          avoidWhen:
            "Meter may o that si no sabe manejarlos. La frase corta ya suena natural.",
          register: "polite warm",
          region: "Inglés universal.",
          related: ["get well soon", "hope you feel better", "wishing you a quick recovery", "take care"],
          example: {
            target: "Hope you get well soon, Mrs. Martin.",
            translation: "Que se mejore pronto, señora Martin."
          }
        },
        {
          term: "you're getting better",
          explanation:
            "Vas mejorando. Presenta la recuperación como un proceso en marcha.",
          literal: "te estás poniendo mejor",
          useWhen:
            "La persona todavía no está bien del todo, pero ya hay progreso.",
          avoidWhen:
            "Quiere decir que alguien mejoró una cosa específica. Entonces diga “you improved the plan” o “the plan improved.”",
          register: "neutral conversational",
          region: "Inglés universal.",
          related: ["making progress", "improving", "recovering", "doing better"],
          example: {
            target: "Good, you're getting better.",
            translation: "Bueno, vas mejorando."
          }
        },
        {
          term: "wiped out",
          explanation:
            "Vuelto nada, sin fuerzas, acabado por fiebre, trabajo, viaje o cansancio.",
          literal: "borrado / arrasado",
          useWhen:
            "Describe cansancio fuerte de manera conversacional.",
          avoidWhen:
            "En documentos médicos o situaciones formales. Allí diga exhausted o very weak.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["exhausted", "drained", "weak", "worn out"],
          example: {
            target: "I woke up completely wiped out.",
            translation: "Amanecí vuelto nada."
          }
        }
      ],
      note:
        "Para salud, get better y get well son más importantes que improve. Improve es buen verbo para calidad, cifras o rendimiento; una persona enferma usually gets better, feels better, or gets well. Por eso “que te mejores” no se traduce como “that you improve yourself,” sino como get well soon, feel better soon, o hope you get well soon.",
      culture: [
        {
          label: "Get well soon es fórmula, no drama",
          body:
            "En inglés, get well soon puede ir en una tarjeta, un mensaje corto o una despedida. No requiere una enfermedad grave. Funciona como “que te mejores”: una frase pequeña para no dejar sola a la persona."
        },
        {
          label: "Improve suena menos íntimo",
          body:
            "Decir “I hope you improve” no es imposible, pero puede sonar como evaluación, no como cuidado. Para salud cotidiana, get better y feel better llegan más cerca del tono humano."
        },
        {
          label: "Feeling better deja espacio",
          body:
            "Are you feeling better? permite que alguien diga “a bit” o “not really.” Es menos definitivo que “are you well?”, y por eso sirve cuando la recuperación todavía va a medias."
        }
      ],
      pitfalls: [
        {
          mistake: "“That you improve yourself.”",
          whyItFails:
            "Es un calco de que te mejores. En inglés no suena como deseo de recuperación.",
          sayInstead: "Hope you get well soon."
        },
        {
          mistake: "“Are you already better?”",
          whyItFails:
            "Se entiende, pero already aquí suena traducido. Para salud, la pregunta natural es más suave.",
          sayInstead: "Are you feeling better?"
        },
        {
          mistake: "“I will improve myself tomorrow.”",
          whyItFails:
            "Suena a superación personal o disciplina, no a recuperarse de una fiebre.",
          sayInstead: "I'll be better tomorrow."
        }
      ],
      variations: [
        {
          form: "Hope you get well soon.",
          register: "warm familiar",
          region: "Inglés universal",
          whenToUse: "Para desear recuperación en un mensaje o despedida."
        },
        {
          form: "Hope you feel better soon, Mrs. Martin.",
          register: "polite warm",
          region: "Inglés universal",
          whenToUse: "Una versión amable que sirve aunque en español usaría usted."
        },
        {
          form: "Are you feeling better than yesterday?",
          register: "warm neutral",
          region: "Inglés universal",
          whenToUse: "Para preguntar por el estado actual de salud."
        },
        {
          form: "You're getting better little by little.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Para hablar de recuperación gradual."
        }
      ],
      prompt: "Dani says “Hope you get well soon.” ¿Qué está expresando?",
      choices: [
        "She is wishing Alex a real recovery from being sick.",
        "She is asking Alex to improve the travel plan.",
        "She is saying Alex became morally better."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase traduce mejor “que te mejores”?",
          choices: [
            "Hope you get well soon.",
            "That you improve yourself.",
            "Be more better tomorrow."
          ],
          answer: 0,
          tests: "get well soon as the get-well wish"
        },
        {
          prompt: "¿Cuál pregunta suena natural para “ya estás mejor”?",
          choices: [
            "Are you already superior?",
            "Are you feeling better?",
            "Do you improve yourself?"
          ],
          answer: 1,
          tests: "feeling better for health"
        },
        {
          prompt: "¿Cuál frase evita sonar a superación personal?",
          choices: [
            "I will improve myself tomorrow.",
            "I will upgrade my body tomorrow.",
            "I'll be better tomorrow."
          ],
          answer: 2,
          tests: "be better for health recovery"
        },
        {
          prompt: "¿Qué sugiere “you're getting better”?",
          choices: [
            "Recovery is happening gradually.",
            "The fever is getting worse.",
            "The price is rising daily."
          ],
          answer: 0,
          tests: "getting better as gradual recovery"
        }
      ]
    }
  },
  {
    id: "aumentar-el-arriendo-en-manizales",
    level: "Developing · More, less and better",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighbourhood",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "aumentar",
    review: "pending",
    es: {
      title: "Aumentar el arriendo en Manizales",
      situation:
        "Vives en Manizales y la administradora te avisa que el arriendo va a aumentar el próximo mes. En la calle mucha gente diría que el arriendo sube, pero en el aviso y en la conversación formal aparece aumentar: precios, arriendo, salario, porcentajes.",
      setting: {
        who: "Patricia manages a small apartment building and needs to explain the rent increase without making it sound arbitrary. Alex rents one of the units and wants the amount, the date and the reason.",
        what: "A practical conversation about a rent increase, the percentage, and the difference between aumentar and everyday subir.",
        when: "The last week of the month, just before tenants plan next month's budget.",
        where: "Manizales, in the building office of a mid-rise apartment block, with rain tapping the windows and paperwork on the desk.",
        why: "Because aumentar is regular but register-heavy. Colombians often say prices suben in casual speech, but notices, landlords, statistics and salaries naturally use aumentar."
      },
      address: {
        form: "usted",
        who: "Patricia and Alex use usted because this is a housing and money conversation.",
        why: "Even if they know each other by sight, rent belongs to a more formal register. Usted keeps the disagreement possible without making it personal.",
        ifYouSwitch:
          "Tú would make the conversation oddly casual. Vos could fit some friendships in the region, but not a tenant asking for a clear explanation from the administrator."
      },
      dialogue: [
        {
          speaker: "Patricia",
          target: "Don Alex, le aviso que el arriendo va a aumentar desde el próximo mes.",
          translation: "Mr. Alex, I'm letting you know that the rent is going to increase starting next month.",
          pronunciation: "don AH-leks, leh ah-BEE-soh keh el ah-RRYEN-doh bah ah ow-men-TAR DES-deh el PROK-see-moh mes",
          literal: "Mr. Alex, to-you I-notify that the rent goes to increase from the next month.",
          why: "This is where aumentar belongs: a formal notice about rent. In the hallway someone might say “sube el arriendo,” but Patricia is using the documented register."
        },
        {
          speaker: "Alex",
          target: "¿Cuánto aumenta exactamente? Necesito ajustar el presupuesto.",
          translation: "How much exactly does it increase? I need to adjust the budget.",
          pronunciation: "KWAN-toh ow-MEN-tah eg-sak-tah-MEN-teh. neh-seh-SEE-toh ah-hoos-TAR el preh-soo-PWES-toh",
          literal: "How much increases exactly? I-need adjust the budget.",
          why: "Aumenta is regular, and the subject is the rent. The verb handles percentages and amounts cleanly."
        },
        {
          speaker: "Patricia",
          target: "Aumenta el ocho por ciento, según el ajuste autorizado.",
          translation: "It increases by eight percent, according to the authorized adjustment.",
          pronunciation: "ow-MEN-tah el OH-choh por SYEN-toh, seh-GOON el ah-HOOS-teh ow-toh-ree-SAH-doh",
          literal: "It-increases the eight per hundred, according-to the adjustment authorized.",
          why: "“Aumenta el ocho por ciento” sounds like paperwork because it is paperwork. That is not a flaw; it is the register."
        },
        {
          speaker: "Alex",
          target: "En la tienda me dicen que todo subió. ¿Aquí es mejor decir aumentó?",
          translation: "At the shop they tell me everything went up. Here is it better to say increased?",
          pronunciation: "en lah TYEN-dah meh DEE-sen keh TOH-doh soo-BYOH. ah-KEE es meh-HOR deh-SEER ow-men-TOH",
          literal: "In the shop to-me they-say that everything went-up. Here is better to say increased?",
          why: "Alex names the honest split. Subir is the everyday verb people reach for about prices; aumentar is more formal, measured and written."
        },
        {
          speaker: "Patricia",
          target: "Exacto. La papa sube en la plaza; el arriendo aumenta en el contrato.",
          translation: "Exactly. Potatoes go up in the market; rent increases in the contract.",
          pronunciation: "eg-SAK-toh. lah PAH-pah SOO-beh en lah PLAH-sah; el ah-RRYEN-doh ow-MEN-tah en el kon-TRAH-toh",
          literal: "Exact. The potato goes-up in the market; the rent increases in the contract.",
          why: "The contrast is memorable without pretending one verb is wrong. Everyday speech and formal documents choose different tools."
        },
        {
          speaker: "Alex",
          target: "Listo. Si el salario no aumenta, me toca reducir otros gastos.",
          translation: "Okay. If my salary doesn't increase, I'll have to reduce other expenses.",
          pronunciation: "LEES-toh. see el sah-LAH-ryoh no ow-MEN-tah, meh TOH-kah reh-doo-SEER OH-tros GAS-tos",
          literal: "Ready. If the salary not increases, to-me must reduce other expenses.",
          why: "Aumentar pairs naturally with salary too. The line also prepares the next lesson's downward movement without making reducir the spine here."
        }
      ],
      vocabulary: [
        {
          term: "aumentar",
          explanation:
            "To increase, especially in measured, formal or written contexts: rent, prices, salaries, rates, numbers.",
          literal: "to increase",
          useWhen:
            "You are discussing percentages, official notices, statistics, salaries, rent or planned changes.",
          avoidWhen:
            "Casual street talk about everyday prices. Colombians often say subir: “subió la papa,” “subió el bus.”",
          register: "formal neutral",
          region: "General Spanish; common in Colombian written and official speech.",
          related: ["subir", "incrementar", "crecer", "elevar"],
          example: {
            target: "El arriendo va a aumentar.",
            translation: "The rent is going to increase."
          }
        },
        {
          term: "aumenta",
          explanation:
            "The regular present form: it increases or he/she increases.",
          literal: "increases",
          useWhen:
            "Naming the amount or percentage of a current increase.",
          avoidWhen:
            "Adding an unnecessary stem change. Aumentar is regular: aumenta, aumentó, aumentado.",
          register: "neutral",
          region: "General Spanish grammar.",
          related: ["aumentó", "aumentado", "aumentando", "aumento"],
          example: {
            target: "Aumenta el ocho por ciento.",
            translation: "It increases by eight percent."
          }
        },
        {
          term: "subir",
          explanation:
            "The everyday verb Colombians often use for prices going up.",
          literal: "to go up",
          useWhen:
            "Talking casually about market prices, fares, bills or the cost of daily things.",
          avoidWhen:
            "Writing a formal notice or reporting a statistic. There aumentar may sound more precise.",
          register: "everyday",
          region: "General Colombian.",
          related: ["aumentar", "encarecerse", "costar más", "alza"],
          example: {
            target: "Todo subió en la tienda.",
            translation: "Everything went up at the shop."
          }
        },
        {
          term: "arriendo",
          explanation:
            "Rent, especially the monthly payment for a place to live.",
          literal: "rental",
          useWhen:
            "Talking about housing costs, tenants, leases and monthly payments.",
          avoidWhen:
            "Confusing it with renta in every context. Renta exists, but arriendo is very common for housing in Colombia.",
          register: "neutral",
          region: "Very common in Colombia.",
          related: ["alquiler", "canon", "contrato", "arrendatario"],
          example: {
            target: "El arriendo aumenta el próximo mes.",
            translation: "The rent increases next month."
          }
        },
        {
          term: "ocho por ciento",
          explanation:
            "Eight percent. Aumentar often travels with percentages and exact figures.",
          literal: "eight per hundred",
          useWhen:
            "You need to discuss the size of a rent, salary, price or fee increase.",
          avoidWhen:
            "Leaving the number vague in a money conversation. “Un poquito” is not enough for a budget.",
          register: "neutral",
          region: "General Spanish.",
          related: ["porcentaje", "incremento", "ajuste", "valor"],
          example: {
            target: "Aumenta el ocho por ciento.",
            translation: "It increases by eight percent."
          }
        },
        {
          term: "ajuste autorizado",
          explanation:
            "An authorized adjustment, the kind of phrase that belongs to paperwork more than casual speech.",
          literal: "authorized adjustment",
          useWhen:
            "Explaining that a change follows a rule, contract, policy or legal limit.",
          avoidWhen:
            "Chatting with friends about the market. The phrase is useful but bureaucratic.",
          register: "formal",
          region: "General Spanish.",
          related: ["contrato", "aviso", "incremento", "norma"],
          example: {
            target: "Según el ajuste autorizado.",
            translation: "According to the authorized adjustment."
          }
        },
        {
          term: "presupuesto",
          explanation:
            "A budget: the plan that turns an increase into a practical problem.",
          literal: "pre-supposition / budget",
          useWhen:
            "Rent, food, transport or bills need to fit into a monthly plan.",
          avoidWhen:
            "Treating it as only government language. Families and students have presupuestos too.",
          register: "neutral",
          region: "General Spanish.",
          related: ["gastos", "ingresos", "ahorro", "cuentas"],
          example: {
            target: "Necesito ajustar el presupuesto.",
            translation: "I need to adjust the budget."
          }
        }
      ],
      note:
        "Aumentar is not hard because of its forms; it is hard because of its register. The everyday Colombian sentence is often “subió la papa” or “subió el arriendo.” Aumentar belongs when the change is measured, written, official or professional: the rent increases by eight percent, the salary increases, the number of cases increases. Use subir in the market and aumentar in the notice.",
      culture: [
        {
          label: "Prices usually suben in conversation",
          body:
            "If a neighbour in Colombia complains about food, bus fare or bills, the verb you will hear most is subir. “Todo subió” is ordinary speech. Aumentar is not wrong, but it sounds more like a report, receipt or policy."
        },
        {
          label: "Rent needs exact language",
          body:
            "A tenant cannot budget with “más o menos.” Rent increases require dates, percentages and written notice. That is why the more formal verb fits: it keeps the conversation anchored in numbers rather than feelings."
        },
        {
          label: "Manizales is paperwork, not postcard",
          body:
            "The scene is set in Manizales because normal adult errands happen all over Colombia. Nothing here depends on a local saying. The Colombian detail is the practical register split, not decorative vocabulary."
        }
      ],
      pitfalls: [
        {
          mistake: "Using aumentar as the default for every price complaint",
          whyItFails:
            "It is correct but often too formal for everyday Colombian speech. People usually say prices suben.",
          sayInstead: "In casual speech, say “subió la papa” or “todo subió.”"
        },
        {
          mistake: "Adding an irregular form to aumentar",
          whyItFails:
            "Aumentar is regular. There is no stem change and no spelling surprise in normal forms.",
          sayInstead: "Aumenta, aumentó, ha aumentado."
        },
        {
          mistake: "Saying only “aumenta” without the amount in a budget conversation",
          whyItFails:
            "Money conversations need the size of the change. Without the amount, the listener cannot plan.",
          sayInstead: "Aumenta el ocho por ciento desde el próximo mes."
        }
      ],
      variations: [
        {
          form: "El arriendo va a aumentar.",
          register: "formal practical",
          region: "General Colombian",
          whenToUse: "In a notice or conversation about rent."
        },
        {
          form: "Aumenta el ocho por ciento.",
          register: "formal neutral",
          region: "General Spanish",
          whenToUse: "When the size of the increase is measured."
        },
        {
          form: "Todo subió en la tienda.",
          register: "everyday",
          region: "General Colombian",
          whenToUse: "Casual speech about daily prices going up."
        },
        {
          form: "Si el salario no aumenta, ajusto el presupuesto.",
          register: "neutral practical",
          region: "General Spanish",
          whenToUse: "Talking about income and budgeting."
        }
      ],
      prompt: "Patricia says “La papa sube en la plaza; el arriendo aumenta en el contrato.” What split is she teaching?",
      choices: [
        "Subir fits casual price talk; aumentar fits measured formal notices.",
        "Aumentar is slang for food prices; subir is only legal contract language.",
        "Subir is never used for money; aumentar is never used with percentages."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence best fits a formal rent notice?",
          choices: [
            "El arriendo va a aumentar desde junio.",
            "La papa subió mucho en la plaza.",
            "Todo está carísimo esta semana."
          ],
          answer: 0,
          tests: "aumentar for a formal rent increase"
        },
        {
          prompt: "Which sentence sounds most natural in casual market talk?",
          choices: [
            "El contrato aumenta según norma.",
            "La papa subió otra vez.",
            "El porcentaje aumentó oficialmente."
          ],
          answer: 1,
          tests: "subir as everyday price speech"
        },
        {
          prompt: "Which form keeps aumentar regular?",
          choices: [
            "El arriendo aumenta mañana.",
            "El arriendo aumienta mañana.",
            "El arriendo aumenteó mañana."
          ],
          answer: 0,
          tests: "aumentar has no stem change"
        },
        {
          prompt: "What does “aumenta el ocho por ciento” add?",
          choices: [
            "A vague complaint about prices.",
            "A reason to stop paying rent.",
            "The exact size of the increase."
          ],
          answer: 2,
          tests: "percentages with aumentar"
        }
      ]
    },
    en: {
      title: "Aumentar el arriendo en Manizales",
      situation:
        "Usted vive en Halifax y la administradora le avisa que el arriendo va a subir el próximo mes. En inglés necesita manejar increase para avisos, porcentajes y presupuestos, pero también entender que go up es la frase cotidiana para quejarse de precios.",
      setting: {
        who: "Patricia administra un edificio pequeño y necesita explicar el aumento sin sonar arbitraria. Alex arrienda un apartamento y necesita fecha, monto y razón.",
        what: "Una conversación práctica sobre un aumento de arriendo, el porcentaje y la diferencia entre increase y go up.",
        when: "La última semana del mes, justo antes de que los inquilinos organicen el presupuesto siguiente.",
        where: "Halifax, en la oficina del edificio, con lluvia en las ventanas y papeles sobre el escritorio.",
        why: "Porque increase es el verbo formal y medido para rent, salaries, rates y statistics. En quejas cotidianas, go up suena más natural."
      },
      address: {
        form: "mixed",
        who: "Patricia y Alex usan el mismo “you”; la formalidad se sostiene con Mr., clear numbers and complete sentences.",
        why: "El inglés no cambia el pronombre en conversaciones de dinero. El registro vive en palabras como notice, increase, percentage y effective next month.",
        ifYouSwitch:
          "No hay tú ni usted que cambiar. Lo que haría raro el tono sería hablar demasiado casual de una obligación escrita."
      },
      dialogue: [
        {
          speaker: "Patricia",
          target: "Mr. Alex, I'm letting you know that the rent will increase next month.",
          translation: "Don Alex, le aviso que el arriendo va a aumentar el próximo mes.",
          pronunciation: "MIS-ter A-leks, aim LE-ting yu nou dat da rent wil in-KRIS nekst manth",
          literal: "Señor Alex, le estoy dejando saber que la renta aumentará próximo mes.",
          why: "Rent will increase es lenguaje de aviso. Suena más formal que rent is going up, y por eso encaja en una conversación documentada."
        },
        {
          speaker: "Alex",
          target: "How much is it increasing exactly? I need to adjust my budget.",
          translation: "¿Cuánto aumenta exactamente? Necesito ajustar mi presupuesto.",
          pronunciation: "jau mach iz it in-KRI-sing eg-ZAKT-li. ai nid tu a-YAST mai BA-yet",
          literal: "¿Cuánto está aumentando exactamente? Necesito ajustar mi presupuesto.",
          why: "Is increasing permite preguntar por el cambio en proceso. Exactly obliga a salir de la vaguedad y entrar al número."
        },
        {
          speaker: "Patricia",
          target: "It's increasing by eight percent, according to the authorized adjustment.",
          translation: "Aumenta el ocho por ciento, según el ajuste autorizado.",
          pronunciation: "its in-KRI-sing bai eit per-SENT, a-KOR-ding tu di O-thor-aizd a-YAST-ment",
          literal: "Está aumentando por ocho por ciento, según el ajuste autorizado.",
          why: "By eight percent es el patrón que acompaña increase cuando se da la magnitud del cambio."
        },
        {
          speaker: "Alex",
          target: "At the store, people say everything went up. Is increase better here?",
          translation: "En la tienda la gente dice que todo subió. ¿Aquí es mejor increase?",
          pronunciation: "at da stor, PI-pol sei EV-ri-thing went ap. iz IN-kris BE-ter jir",
          literal: "En la tienda, la gente dice que todo fue arriba. ¿Increase es mejor aquí?",
          why: "Went up es el equivalente cotidiano de subió. Increase no es falso; simplemente suena más medido y formal."
        },
        {
          speaker: "Patricia",
          target: "Exactly. Groceries go up in conversation; rent increases in the notice.",
          translation: "Exacto. El mercado sube en la conversación; el arriendo aumenta en el aviso.",
          pronunciation: "eg-ZAKT-li. GROU-se-riz gou ap in kan-ver-SEI-shon; rent in-KRI-siz in da NOU-tis",
          literal: "Exactamente. Los víveres van arriba en conversación; la renta aumenta en el aviso.",
          why: "La oposición go up / increase da el mismo contraste de registro que subir / aumentar."
        },
        {
          speaker: "Alex",
          target: "Okay. If my salary doesn't increase, I'll have to cut back elsewhere.",
          translation: "Listo. Si mi salario no aumenta, tendré que reducir gastos en otra parte.",
          pronunciation: "ou-KEI. if mai SA-la-ri DA-zent in-KRIS, ail jav tu kat bak ELS-wer",
          literal: "Bien. Si mi salario no aumenta, tendré que cortar hacia atrás en otra parte.",
          why: "Salary increase es una combinación muy común. Cut back prepares the downward movement in ordinary budget English."
        }
      ],
      vocabulary: [
        {
          term: "increase",
          explanation:
            "Aumentar: subir una cantidad, precio, salario, tasa o cifra de manera medible.",
          literal: "aumentar",
          useWhen:
            "Habla de porcentajes, avisos formales, estadísticas, arriendos, salarios o cambios oficiales.",
          avoidWhen:
            "Se está quejando de precios en conversación normal. Everything went up suena más natural.",
          register: "formal neutral",
          region: "Inglés universal.",
          related: ["go up", "rise", "raise", "grow"],
          example: {
            target: "The rent will increase next month.",
            translation: "El arriendo va a aumentar el próximo mes."
          }
        },
        {
          term: "is increasing",
          explanation:
            "Está aumentando o aumenta, con énfasis en el cambio que ya está en marcha.",
          literal: "está aumentando",
          useWhen:
            "Pregunta o explica un cambio actual: rent is increasing, costs are increasing.",
          avoidWhen:
            "Quiere una verdad general sin proceso visible. Entonces use increases o goes up.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["increases", "increased", "has increased", "keeps increasing"],
          example: {
            target: "How much is it increasing?",
            translation: "¿Cuánto aumenta?"
          }
        },
        {
          term: "go up",
          explanation:
            "Subir, especialmente en habla cotidiana sobre precios, costos o cantidades.",
          literal: "ir arriba",
          useWhen:
            "Se queja o comenta que food, rent, gas or bills are more expensive.",
          avoidWhen:
            "Necesita sonar formal en un aviso, informe o contrato. Increase puede encajar mejor.",
          register: "everyday",
          region: "Inglés universal.",
          related: ["increase", "rise", "cost more", "get higher"],
          example: {
            target: "Everything went up at the store.",
            translation: "Todo subió en la tienda."
          }
        },
        {
          term: "rent",
          explanation:
            "El arriendo o alquiler que se paga por vivir en un lugar.",
          literal: "arriendo",
          useWhen:
            "Habla de vivienda, contratos, inquilinos y pagos mensuales.",
          avoidWhen:
            "Confundirlo con income. Rent es lo que paga el inquilino, no el ingreso en general.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["lease", "tenant", "landlord", "monthly payment"],
          example: {
            target: "The rent will increase next month.",
            translation: "El arriendo va a aumentar el próximo mes."
          }
        },
        {
          term: "by eight percent",
          explanation:
            "En ocho por ciento o por ocho por ciento, el patrón para medir el aumento.",
          literal: "por ocho por ciento",
          useWhen:
            "Da la magnitud exacta de un increase: by five dollars, by ten percent, by a little.",
          avoidWhen:
            "Decir “in eight percent.” Con increase, el tamaño del cambio va con by.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["percentage", "amount", "rate", "adjustment"],
          example: {
            target: "It's increasing by eight percent.",
            translation: "Aumenta el ocho por ciento."
          }
        },
        {
          term: "authorized adjustment",
          explanation:
            "Ajuste autorizado, frase de contrato, política o aviso formal.",
          literal: "ajuste autorizado",
          useWhen:
            "Explica que el cambio sigue una regla o autorización, no un capricho.",
          avoidWhen:
            "Conversación casual sobre compras. Suena burocrático a propósito.",
          register: "formal",
          region: "Inglés universal.",
          related: ["notice", "policy", "contract", "rate change"],
          example: {
            target: "According to the authorized adjustment.",
            translation: "Según el ajuste autorizado."
          }
        },
        {
          term: "budget",
          explanation:
            "Presupuesto: el plan de gastos e ingresos que se afecta cuando algo aumenta.",
          literal: "presupuesto",
          useWhen:
            "Habla de arriendo, mercado, transporte, cuentas o ahorro mensual.",
          avoidWhen:
            "Pronunciarlo como “bu-yet” a la española. En inglés suena más como budget.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["expenses", "income", "savings", "bills"],
          example: {
            target: "I need to adjust my budget.",
            translation: "Necesito ajustar mi presupuesto."
          }
        }
      ],
      note:
        "Increase es regular y útil, pero tiene peso de cifra. Úselo para rent, salaries, rates, statistics y notices. Para quejas normales, go up suele sonar más humano: groceries went up, gas went up, everything went up. La diferencia se parece a aumentar frente a subir: no es que uno sea correcto y el otro incorrecto, sino que cada uno pertenece a un registro distinto.",
      culture: [
        {
          label: "Go up es la queja cotidiana",
          body:
            "Cuando alguien habla de comida, gasolina o cuentas en inglés, “everything went up” suena natural. “Everything increased” se entiende, pero puede sonar como titular o informe."
        },
        {
          label: "Increase pide números",
          body:
            "Si usted dice increase en una conversación de arriendo, el oyente espera cuánto, desde cuándo y según qué regla. El verbo invita a porcentajes y fechas."
        },
        {
          label: "Rent no es renta en todos los sentidos",
          body:
            "Para colombianos, renta puede mezclar ingreso, declaración o alquiler según contexto. En inglés rent es mucho más concreto: el pago por usar una vivienda, local o cosa."
        }
      ],
      pitfalls: [
        {
          mistake: "“Everything increased at the store.”",
          whyItFails:
            "Se entiende, pero suena demasiado formal para una queja cotidiana de precios.",
          sayInstead: "Everything went up at the store."
        },
        {
          mistake: "“The rent increased in eight percent.”",
          whyItFails:
            "Para la magnitud del cambio, inglés usa by, no in.",
          sayInstead: "The rent increased by eight percent."
        },
        {
          mistake: "“My salary augmented.”",
          whyItFails:
            "Augment existe, pero no es el verbo normal para salario en conversación.",
          sayInstead: "My salary increased."
        }
      ],
      variations: [
        {
          form: "The rent will increase next month.",
          register: "formal practical",
          region: "Inglés universal",
          whenToUse: "En un aviso o conversación formal sobre arriendo."
        },
        {
          form: "It's increasing by eight percent.",
          register: "formal neutral",
          region: "Inglés universal",
          whenToUse: "Cuando la magnitud del aumento está medida."
        },
        {
          form: "Everything went up at the store.",
          register: "everyday",
          region: "Inglés universal",
          whenToUse: "Queja cotidiana sobre precios."
        },
        {
          form: "If my salary doesn't increase, I'll adjust my budget.",
          register: "neutral practical",
          region: "Inglés universal",
          whenToUse: "Para conectar ingresos y presupuesto."
        }
      ],
      prompt: "Patricia says “Groceries go up in conversation; rent increases in the notice.” ¿Qué contraste enseña?",
      choices: [
        "Go up fits casual price talk; increase fits measured formal notices.",
        "Increase is slang for groceries; go up is only contract language.",
        "Go up never works for money; increase never works with percentages."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase encaja mejor en un aviso formal de arriendo?",
          choices: [
            "The rent will increase next month.",
            "Groceries went up again today.",
            "Everything costs a lot now."
          ],
          answer: 0,
          tests: "increase for a formal rent notice"
        },
        {
          prompt: "¿Cuál frase suena más cotidiana para quejarse de precios?",
          choices: [
            "The contract increased by rule.",
            "Groceries went up again.",
            "The percentage increased formally."
          ],
          answer: 1,
          tests: "go up for everyday price complaints"
        },
        {
          prompt: "¿Cuál usa bien el patrón con porcentaje?",
          choices: [
            "The rent increased by eight percent.",
            "The rent increased in eight percent.",
            "The rent increased at eight percent."
          ],
          answer: 0,
          tests: "by plus amount with increase"
        },
        {
          prompt: "¿Cuál frase sirve para salario?",
          choices: [
            "My salary went groceries.",
            "My salary augmented me.",
            "My salary increased."
          ],
          answer: 2,
          tests: "salary increased as a natural collocation"
        }
      ]
    }
  },
  {
    id: "reducir-el-azucar-en-san-andres",
    level: "Developing · More, less and better",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "health-and-body",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "reducir",
    review: "pending",
    es: {
      title: "Reducir el azúcar en San Andrés",
      situation:
        "Estás en San Andrés hablando con una nutricionista después de unos exámenes. Ella no te dice simplemente que bajes el azúcar: te propone reducirlo poco a poco, reducir las bebidas dulces y revisar cuánto redujiste en dos semanas.",
      setting: {
        who: "Natalia is a nutritionist giving practical advice after routine lab results. Alex is not in an emergency, but the numbers are high enough to require changes.",
        what: "A grounded conversation about cutting back on sugar, tracking drinks, and using reducir in deliberate health advice.",
        when: "Mid-morning, after lab results are printed and before Alex goes back to work.",
        where: "San Andrés, in a nutrition office near the center, with the island setting present but the Spanish kept general.",
        why: "Because reducir is the deliberate counterpart to everyday bajar. Colombians may say “bájale al azúcar,” but a professional plan naturally says reducir: sugar, spending, hours, risk."
      },
      address: {
        form: "usted",
        who: "Natalia uses usted with Alex as a patient, and Alex uses usted back.",
        why: "Health advice can be warm and still professional. Usted lets Natalia be direct about habits without sounding like a scolding friend.",
        ifYouSwitch:
          "Tú would soften the hierarchy too much for a first appointment. A friend might say “bájale al azúcar,” but this is a professional setting."
      },
      dialogue: [
        {
          speaker: "Natalia",
          target: "Sus exámenes salieron mejor, pero todavía conviene reducir el azúcar.",
          translation: "Your tests came back better, but it's still advisable to reduce sugar.",
          pronunciation: "soos eg-SAH-meh-nes sah-LYEH-ron meh-HOR, PEH-roh toh-dah-BEE-ah kom-BYEH-neh reh-doo-SEER el ah-SOO-kar",
          literal: "Your exams came-out better, but still it-is-advisable to-reduce the sugar.",
          why: "Reducir sounds measured and planned. Natalia is not just saying “less sugar”; she is naming a deliberate change."
        },
        {
          speaker: "Alex",
          target: "¿Reducir cuánto? Yo ya bajé las gaseosas entre semana.",
          translation: "Reduce it by how much? I already cut down on sodas during the week.",
          pronunciation: "reh-doo-SEER KWAN-toh. yoh yah bah-HEH las gah-seh-OH-sas EN-treh seh-MAH-nah",
          literal: "Reduce how much? I already lowered the sodas between week.",
          why: "Alex uses bajar for the everyday version. That is honest Colombian speech; the lesson's job is to add reducir for the more considered register."
        },
        {
          speaker: "Natalia",
          target: "Bien. Ahora reduzca los jugos con azúcar a dos por semana.",
          translation: "Good. Now reduce sugary juices to two per week.",
          pronunciation: "byen. ah-OH-rah reh-DOOS-kah los HOO-gos kon ah-SOO-kar ah dos por seh-MAH-nah",
          literal: "Good. Now reduce the juices with sugar to two per week.",
          why: "“Reduzca” is the usted command with zc. The -zc- also appears in “yo reduzco,” so this family behaves like conducir, which learners may already know."
        },
        {
          speaker: "Alex",
          target: "Entonces reduzco gaseosa, jugos y postres, pero no elimino todo.",
          translation: "So I reduce soda, juices and desserts, but I don't eliminate everything.",
          pronunciation: "en-TON-ses reh-DOOS-koh gah-seh-OH-sah, HOO-gos ee POS-tres, PEH-roh no eh-lee-MEE-noh TOH-doh",
          literal: "Then I-reduce soda, juices and desserts, but not I-eliminate everything.",
          why: "“Reduzco” is the high-value yo form. It means cutting back, not necessarily cutting out."
        },
        {
          speaker: "Natalia",
          target: "Exacto. Si reduce demasiado de golpe, después abandona el plan.",
          translation: "Exactly. If you reduce too much all at once, later you abandon the plan.",
          pronunciation: "eg-SAK-toh. see reh-DOO-seh deh-mah-SYAH-doh deh golpe, des-PWES ah-ban-DOH-nah el plan",
          literal: "Exact. If you-reduce too-much at once, afterward you-abandon the plan.",
          why: "Reducir can describe a smart limit or an overcorrection. Natalia keeps the advice sustainable."
        },
        {
          speaker: "Alex",
          target: "Hace un año reduje gastos así; poquito a poquito sí pude.",
          translation: "A year ago I reduced expenses that way; little by little I actually managed it.",
          pronunciation: "AH-seh oon AH-nyoh reh-DOO-heh GAS-tos ah-SEE; poh-KEE-toh ah poh-KEE-toh see POO-deh",
          literal: "It-makes one year I-reduced expenses like-that; little by little yes I-could.",
          why: "“Reduje” shows the c to j preterite, the same irregular family as conducir. The lesson now has the present yo and the past."
        }
      ],
      vocabulary: [
        {
          term: "reducir",
          explanation:
            "To reduce, cut down or make less, usually as a deliberate plan rather than a casual drop.",
          literal: "to reduce",
          useWhen:
            "Health advice, budgets, work hours, risk, sugar, waste or anything you decide to make smaller.",
          avoidWhen:
            "Everyday quick speech where bajar is enough: “bájale al azúcar,” “bajaron los precios.”",
          register: "formal practical",
          region: "General Spanish; common in Colombian professional advice.",
          related: ["bajar", "disminuir", "recortar", "limitar"],
          example: {
            target: "Conviene reducir el azúcar.",
            translation: "It's advisable to reduce sugar."
          }
        },
        {
          term: "reduzco",
          explanation:
            "The present yo form: I reduce. Reducir adds -zc- in the yo form.",
          literal: "I reduce",
          useWhen:
            "Saying what you cut back on as a personal plan: reduzco azúcar, gastos, horas.",
          avoidWhen:
            "Saying “reducio” or “reduco.” The form is reduzco, like conduzco from conducir.",
          register: "neutral",
          region: "General Spanish grammar.",
          related: ["reduzca", "conduzco", "produzco", "traduzco"],
          example: {
            target: "Entonces reduzco las gaseosas.",
            translation: "So I cut down on sodas."
          }
        },
        {
          term: "reduje",
          explanation:
            "The preterite yo form: I reduced. The c becomes j in this past-tense family.",
          literal: "I reduced",
          useWhen:
            "Reporting a completed cutback: expenses, sugar, hours or portions were reduced in the past.",
          avoidWhen:
            "Writing reducí for the preterite. That would treat reducir as regular, and it is not in this tense.",
          register: "neutral",
          region: "General Spanish grammar.",
          related: ["redujo", "conduje", "produje", "traduje"],
          example: {
            target: "Reduje gastos el año pasado.",
            translation: "I reduced expenses last year."
          }
        },
        {
          term: "bajar",
          explanation:
            "The everyday counterpart: to lower, go down or cut back in casual speech.",
          literal: "to lower / go down",
          useWhen:
            "Friends or family talk about cutting down sugar, lowering volume, or prices going down.",
          avoidWhen:
            "You need a professional, measured plan. There reducir often sounds clearer.",
          register: "everyday",
          region: "General Colombian.",
          related: ["reducir", "bájale", "disminuir", "menos"],
          example: {
            target: "Ya bajé las gaseosas.",
            translation: "I already cut down on sodas."
          }
        },
        {
          term: "de golpe",
          explanation:
            "All at once or suddenly, often more abruptly than is sustainable.",
          literal: "by blow",
          useWhen:
            "Warning that a change is too sudden: reducing too much at once, stopping all sugar overnight.",
          avoidWhen:
            "You mean a planned gradual change. Then poco a poco fits better.",
          register: "neutral conversational",
          region: "General Colombian.",
          related: ["de una", "de repente", "poco a poco", "gradualmente"],
          example: {
            target: "No reduzca demasiado de golpe.",
            translation: "Don't reduce too much all at once."
          }
        },
        {
          term: "poquito a poquito",
          explanation:
            "Little by little, with a softer and more encouraging feel than the plain phrase.",
          literal: "little by little",
          useWhen:
            "Talking about sustainable changes in health, money or habits.",
          avoidWhen:
            "A formal report. Use gradualmente if you need a more technical word.",
          register: "warm conversational",
          region: "General Colombian.",
          related: ["poco a poco", "gradualmente", "paso a paso", "sin afán"],
          example: {
            target: "Poquito a poquito sí pude.",
            translation: "Little by little I managed it."
          }
        },
        {
          term: "conviene",
          explanation:
            "It is advisable or it makes sense. A gentle way to recommend without barking an order.",
          literal: "it is convenient",
          useWhen:
            "A professional or careful friend suggests a practical course of action.",
          avoidWhen:
            "Translating it as “it is convenient” every time. In advice, “it's advisable” is often closer.",
          register: "neutral practical",
          region: "General Spanish.",
          related: ["es mejor", "vale la pena", "recomiendo", "sería bueno"],
          example: {
            target: "Conviene reducir el azúcar.",
            translation: "It's advisable to reduce sugar."
          }
        }
      ],
      note:
        "Reducir is the deliberate verb: reduce sugar, expenses, hours, risk. Bajar is the everyday cousin, and Colombians absolutely say “bájale al azúcar” in ordinary speech. In a professional plan, reducir sounds considered and measurable. Store the forms early: yo reduzco, usted reduzca, yo reduje, ella redujo. They follow the same family as conducir: conduzco, conduje.",
      culture: [
        {
          label: "Cutting back is not cutting out",
          body:
            "A nutritionist who says reducir is often asking for a sustainable reduction, not total elimination. That distinction matters because a plan that feels possible is more likely to survive the week."
        },
        {
          label: "Bájale is the friend version",
          body:
            "A friend may say “bájale al azúcar” or “bájale a los gastos.” That is normal Colombian speech. Reducir gives the same idea more structure, especially with numbers, dates and follow-up."
        },
        {
          label: "San Andrés without stereotype",
          body:
            "The lesson uses San Andrés to keep the map wide, but the advice is general Colombian Spanish. No invented island expression is needed; the useful detail is the professional register around health."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “yo reduco” for “I reduce”",
          whyItFails:
            "Reducir adds -zc- in the present yo form, like conducir gives conduzco.",
          sayInstead: "Yo reduzco el azúcar."
        },
        {
          mistake: "Saying “yo reducí” for “I reduced”",
          whyItFails:
            "The preterite changes c to j in this verb family. Reducí is the tempting regular form, but not the standard one.",
          sayInstead: "Yo reduje los gastos."
        },
        {
          mistake: "Using reducir for every casual “bájale”",
          whyItFails:
            "It can sound too formal between friends. In ordinary speech, bajar may be the more natural verb.",
          sayInstead: "Use bajar casually, and reducir for deliberate plans."
        }
      ],
      variations: [
        {
          form: "Conviene reducir el azúcar.",
          register: "professional practical",
          region: "General Colombian",
          whenToUse: "Health advice framed as a deliberate plan."
        },
        {
          form: "Yo reduzco las gaseosas entre semana.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Stating your own cutback plan with the -zc- yo form."
        },
        {
          form: "Reduje gastos poquito a poquito.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "Reporting a completed reduction in the past."
        },
        {
          form: "Bájale al azúcar esta semana.",
          register: "everyday",
          region: "General Colombian",
          whenToUse: "A friend or family version of the advice."
        }
      ],
      prompt: "Natalia says “conviene reducir el azúcar.” What kind of verb is reducir here?",
      choices: [
        "A deliberate plan to cut back in a measured way.",
        "A casual complaint that prices are going down.",
        "A wish that someone recover from illness."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses the correct yo form?",
          choices: [
            "Yo reduco el azúcar esta semana.",
            "Yo reduzco el azúcar esta semana.",
            "Yo reduczo el azúcar esta semana."
          ],
          answer: 1,
          tests: "reduzco as the -zc- yo form"
        },
        {
          prompt: "Which sentence uses the correct preterite?",
          choices: [
            "Ayer reduje los jugos dulces.",
            "Ayer reducí los jugos dulces.",
            "Ayer reduzqué los jugos dulces."
          ],
          answer: 0,
          tests: "reduje as c to j preterite"
        },
        {
          prompt: "Which line sounds more like a friend than a nutritionist?",
          choices: [
            "Conviene reducir el consumo.",
            "Reduzca el azúcar a dos por semana.",
            "Bájale al azúcar esta semana."
          ],
          answer: 2,
          tests: "bajar as the everyday counterpart"
        },
        {
          prompt: "What does “no reduzca demasiado de golpe” warn against?",
          choices: [
            "Changing too much all at once.",
            "Improving gradually after fever.",
            "Increasing rent by percent."
          ],
          answer: 0,
          tests: "de golpe as all at once"
        }
      ]
    },
    en: {
      title: "Reducir el azúcar en San Andrés",
      situation:
        "Usted está en Auckland hablando con una nutricionista después de unos exámenes. Necesita decir reduce en un plan de salud, cut back en conversación normal, y reconocer que “I reduced” no tiene las irregularidades de reduje.",
      setting: {
        who: "Natalia es nutricionista y da recomendaciones prácticas después de exámenes rutinarios. Alex no está en una urgencia, pero sus números requieren cambios.",
        what: "Una conversación concreta sobre reducir azúcar, contar bebidas dulces y revisar el avance en dos semanas.",
        when: "A media mañana, después de imprimir los resultados y antes de que Alex vuelva al trabajo.",
        where: "Auckland, en un consultorio de nutrición, porque esta dirección enseña inglés y por eso la escena ocurre fuera de Colombia.",
        why: "Porque reduce sirve para planes deliberados, mientras cut back suena más cotidiano para azúcar, gastos u horas. El inglés regulariza lo que en español exige reduzco y reduje."
      },
      address: {
        form: "mixed",
        who: "Natalia y Alex usan el mismo “you”; la relación profesional se marca con advisable, try to, and follow-up.",
        why: "El inglés no tiene usted. En consejos de salud, el registro depende de no sonar mandón: it would be good to, try to, let's review.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Lo que cambiaría el tono sería pasar de advice a órdenes secas como “stop sugar now.”"
      },
      dialogue: [
        {
          speaker: "Natalia",
          target: "Your results are better, but it's still a good idea to reduce sugar.",
          translation: "Sus resultados están mejor, pero todavía conviene reducir el azúcar.",
          pronunciation: "yor ri-ZALTS ar BE-ter, bat its stil a gud ai-DI-a tu ri-DUS SHU-gar",
          literal: "Sus resultados son mejores, pero todavía es buena idea reducir azúcar.",
          why: "Reduce sugar suena medido y profesional. No es una prohibición total; es una reducción planteada con calma."
        },
        {
          speaker: "Alex",
          target: "Reduce it by how much? I've already cut back on soda during the week.",
          translation: "¿Reducir cuánto? Ya bajé las gaseosas entre semana.",
          pronunciation: "ri-DUS it bai jau mach. aiv ol-RE-di kat bak on SOU-da DUR-ing da wik",
          literal: "¿Reducirlo por cuánto? Ya he cortado hacia atrás en gaseosa durante la semana.",
          why: "Cut back on es la frase cotidiana para bajarle a algo. Reduce queda bien para el plan; cut back suena más humano al contar el hábito."
        },
        {
          speaker: "Natalia",
          target: "Good. Now reduce sugary drinks to two a week.",
          translation: "Bien. Ahora reduzca las bebidas azucaradas a dos por semana.",
          pronunciation: "gud. nau ri-DUS SHU-ga-ri drinks tu tu a wik",
          literal: "Bien. Ahora reduzca bebidas azucaradas a dos por semana.",
          why: "Reduce to two a week da el límite nuevo. El to marca el punto al que debe bajar la cantidad."
        },
        {
          speaker: "Alex",
          target: "So I reduce soda, juice and desserts, but I don't cut everything out.",
          translation: "Entonces reduzco gaseosa, jugos y postres, pero no elimino todo.",
          pronunciation: "so ai ri-DUS SOU-da, yus and di-ZERTS, bat ai dount kat EV-ri-thing aut",
          literal: "Entonces reduzco gaseosa, jugo y postres, pero no corto todo afuera.",
          why: "Cut out significa eliminar por completo. Alex entiende que reduce no siempre quiere decir eliminar."
        },
        {
          speaker: "Natalia",
          target: "Exactly. If you reduce too much at once, you'll drop the plan later.",
          translation: "Exacto. Si reduce demasiado de una vez, abandonará el plan después.",
          pronunciation: "eg-ZAKT-li. if yu ri-DUS tu mach at wans, yul drap da plan LEI-ter",
          literal: "Exactamente. Si reduce demasiado a una vez, dejará caer el plan después.",
          why: "At once traduce de golpe o de una vez en esta advertencia. Too much at once suena a plan imposible de sostener."
        },
        {
          speaker: "Alex",
          target: "A year ago I reduced spending like that; little by little, it worked.",
          translation: "Hace un año reduje gastos así; poquito a poquito funcionó.",
          pronunciation: "a yir a-GOU ai ri-DUST SPEN-ding laik dat; LI-tel bai LI-tel, it werkt",
          literal: "Un año atrás reduje gasto así; poquito por poquito, funcionó.",
          why: "Reduced es regular en inglés. No hay equivalente de reduje; la dificultad está en escoger entre reduce, cut back y cut out."
        }
      ],
      vocabulary: [
        {
          term: "reduce",
          explanation:
            "Reducir: hacer menor una cantidad, riesgo, consumo, gasto u horario.",
          literal: "reducir",
          useWhen:
            "Habla de un plan deliberado de salud, presupuesto, trabajo, riesgo o desperdicio.",
          avoidWhen:
            "Conversación muy casual. Cut back on suele sonar más natural para hábitos cotidianos.",
          register: "formal practical",
          region: "Inglés universal.",
          related: ["cut back", "lower", "decrease", "limit"],
          example: {
            target: "It's a good idea to reduce sugar.",
            translation: "Conviene reducir el azúcar."
          }
        },
        {
          term: "I reduce",
          explanation:
            "Yo reduzco. En inglés no aparece -zc-; el verbo se mantiene regular.",
          literal: "yo reduzco",
          useWhen:
            "Usted describe su propio plan: I reduce sugar, I reduce expenses, I reduce hours.",
          avoidWhen:
            "Agregar formas españolas como “I reduzco.” En inglés reduce no cambia así.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I cut back", "I lower", "I decrease", "I limit"],
          example: {
            target: "I reduce soda during the week.",
            translation: "Reduzco gaseosa entre semana."
          }
        },
        {
          term: "I reduced",
          explanation:
            "Yo reduje. El pasado inglés es regular, con -ed.",
          literal: "yo reduje",
          useWhen:
            "Cuenta una reducción terminada en el pasado: gastos, azúcar, horas o porciones.",
          avoidWhen:
            "Buscar una irregularidad como reduje. En inglés no hay cambio de c a j.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["cut back", "lowered", "decreased", "limited"],
          example: {
            target: "I reduced spending last year.",
            translation: "Reduje gastos el año pasado."
          }
        },
        {
          term: "cut back on",
          explanation:
            "Bajarle a algo o reducir el consumo en habla cotidiana.",
          literal: "cortar hacia atrás en",
          useWhen:
            "Habla de azúcar, café, gastos, horas, pantalla o cualquier hábito que quiere hacer menos frecuente.",
          avoidWhen:
            "Necesita una frase formal para informe o plan médico escrito. Reduce puede sonar más profesional.",
          register: "everyday",
          region: "Inglés universal.",
          related: ["reduce", "have less", "limit", "scale back"],
          example: {
            target: "I've cut back on soda.",
            translation: "Ya bajé las gaseosas."
          }
        },
        {
          term: "at once",
          explanation:
            "De golpe o de una vez, todo al mismo tiempo.",
          literal: "a una vez",
          useWhen:
            "Advierte que un cambio demasiado rápido puede fracasar.",
          avoidWhen:
            "Quiere hablar de progreso gradual. Entonces little by little encaja mejor.",
          register: "neutral conversational",
          region: "Inglés universal.",
          related: ["all at once", "suddenly", "little by little", "gradually"],
          example: {
            target: "Don't reduce too much at once.",
            translation: "No reduzca demasiado de golpe."
          }
        },
        {
          term: "little by little",
          explanation:
            "Poquito a poquito o poco a poco.",
          literal: "poco por poco",
          useWhen:
            "Describe cambios sostenibles de salud, dinero o hábitos.",
          avoidWhen:
            "Un informe técnico que necesita gradually. Little by little es más conversacional.",
          register: "warm conversational",
          region: "Inglés universal.",
          related: ["gradually", "step by step", "slowly", "over time"],
          example: {
            target: "Little by little, it worked.",
            translation: "Poquito a poquito funcionó."
          }
        },
        {
          term: "a good idea to",
          explanation:
            "Conviene o sería buena idea. Recomienda sin sonar como orden seca.",
          literal: "una buena idea para",
          useWhen:
            "Un profesional o amigo cuidadoso sugiere una acción práctica.",
          avoidWhen:
            "Necesita una obligación fuerte. Entonces use have to o need to.",
          register: "neutral practical",
          region: "Inglés universal.",
          related: ["advisable to", "worth trying", "it would help to", "you may want to"],
          example: {
            target: "It's a good idea to reduce sugar.",
            translation: "Conviene reducir el azúcar."
          }
        }
      ],
      note:
        "Reduce es el verbo deliberado: reduce sugar, reduce spending, reduce hours, reduce risk. Cut back on es el primo conversacional: I've cut back on soda, I need to cut back on expenses. Cut out va más lejos y significa eliminar. En español usted debe recordar reduzco y reduje; en inglés, reduce y reduced son regulares, pero escoger el registro correcto sigue siendo la dificultad.",
      culture: [
        {
          label: "Cut back suena posible",
          body:
            "En consejos de salud, cut back on puede sonar menos intimidante que stop. Sugiere una reducción real sin exigir perfección inmediata. Por eso aparece tanto con sugar, coffee, drinking, spending y screen time."
        },
        {
          label: "Reduce pertenece al plan",
          body:
            "Un profesional puede decir reduce porque está hablando de resultados medibles. La palabra no es fría por sí sola; simplemente pide un marco claro: cuánto, durante cuánto tiempo y con qué seguimiento."
        },
        {
          label: "Cut out es otro nivel",
          body:
            "Si alguien dice cut out sugar, está hablando de eliminarlo, no sólo bajarle. Confundir cut back con cut out puede convertir un consejo razonable en una prohibición imposible."
        }
      ],
      pitfalls: [
        {
          mistake: "“I reduzco sugar.”",
          whyItFails:
            "Mezcla la forma española con el verbo inglés. Reduce no toma -zc- en inglés.",
          sayInstead: "I reduce sugar during the week."
        },
        {
          mistake: "“I reduced sugar of golpe.”",
          whyItFails:
            "De golpe no se incrusta en inglés. La frase natural es at once o all at once.",
          sayInstead: "I reduced sugar too much at once."
        },
        {
          mistake: "“I cut out soda a little.”",
          whyItFails:
            "Cut out sugiere eliminar. Si todavía toma algo, necesita cut back on.",
          sayInstead: "I cut back on soda."
        }
      ],
      variations: [
        {
          form: "It's a good idea to reduce sugar.",
          register: "professional practical",
          region: "Inglés universal",
          whenToUse: "Consejo de salud planteado como plan deliberado."
        },
        {
          form: "I reduce soda during the week.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Describir su propio plan de reducción."
        },
        {
          form: "I reduced spending little by little.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Contar una reducción terminada en el pasado."
        },
        {
          form: "I've cut back on sugar this week.",
          register: "everyday",
          region: "Inglés universal",
          whenToUse: "La versión conversacional de bajarle al azúcar."
        }
      ],
      prompt: "Natalia says “it's still a good idea to reduce sugar.” ¿Qué tipo de cambio propone?",
      choices: [
        "A deliberate plan to cut back in a measured way.",
        "A casual complaint that prices are falling.",
        "A wish that someone recover from fever."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa reduce sin mezclar español?",
          choices: [
            "I reduzco sugar this week.",
            "I reduce sugar this week.",
            "I reducí sugar this week."
          ],
          answer: 1,
          tests: "reduce has no -zc- form in English"
        },
        {
          prompt: "¿Cuál frase usa bien el pasado?",
          choices: [
            "I reduced sugary drinks last month.",
            "I redujed sugary drinks last month.",
            "I reducí sugary drinks last month."
          ],
          answer: 0,
          tests: "reduced as regular English past"
        },
        {
          prompt: "¿Cuál frase es más conversacional para bajarle al azúcar?",
          choices: [
            "I formally reduced consumption.",
            "I eliminated every sweet thing.",
            "I've cut back on sugar."
          ],
          answer: 2,
          tests: "cut back on as everyday counterpart"
        },
        {
          prompt: "¿Qué evita “don't reduce too much at once”?",
          choices: [
            "Changing too much all at once.",
            "Improving after a fever.",
            "Increasing rent next month."
          ],
          answer: 0,
          tests: "at once as de golpe"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/43-developing-more-less-better.js");
