/*
 * Lesson block: developing / two remainder verbs, not one shared topic.
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
 * These two lessons share a file because the curriculum remainder has two verbs:
 * amar and sobrar. They are not forced into a fake theme; each gets its own
 * honest scene and its own social problem.
 */
lessons.push(
  {
    id: "saying-love-with-the-right-weight-in-barichara",
    level: "Developing · Social life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "intimate",
    pathways: ["independent"],
    verb: "amar",
    review: "pending",
    es: {
      title: "Decir “te quiero” sin correr a “te amo”",
      situation:
        "En Barichara, Alex se despide de Camila después de pasar varias semanas ayudando en un taller de cerámica. Ella le dice “te quiero mucho” con cariño de amiga, y Alex, creyendo que querer es apenas “like”, contesta “yo también te amo”. El momento se pone raro. Camila le explica que en Colombia querer es la palabra cotidiana para el amor entre pareja, familia y amigos cercanos; amar existe, pero “te amo” pesa más, suele sonar romántico o muy solemne, aunque “amo este pueblo” o “amo esa idea” sí sale sin drama.",
      setting: {
        who: "Camila is a close Colombian friend who speaks warmly but not romantically; Alex is the learner who knows querer from textbooks and thinks amar must be the only real verb for love.",
        what: "A goodbye after several weeks of friendship, where the emotional weight of te quiero, te quiero mucho and te amo has to be sorted out without embarrassing either person.",
        when: "Late afternoon, just before Alex takes the bus out and the plaza starts cooling down.",
        where: "Barichara, Santander, on a quiet street near the main square.",
        why: "Because love vocabulary is not only grammar. Saying too little can wound someone, and saying too much can make a friendship awkward. Colombian Spanish relies on querer for a lot of real love, while amar carries a heavier charge in direct address."
      },
      address: {
        form: "tú",
        who: "Camila and Alex use tú because they are close friends of similar age, speaking privately and warmly.",
        why: "The register needs intimacy without ceremony. Tú lets Camila say “te quiero mucho” naturally and lets Alex ask about the emotional mistake without making the scene formal.",
        ifYouSwitch: "Switching to usted would put distance back into a conversation that is about affection. In some Colombian families usted can be loving, but in this friendship the pronoun would blur the lesson by making the goodbye sound less close."
      },
      dialogue: [
        {
          speaker: "Camila",
          target: "Alex, gracias por todo. Te quiero mucho, de verdad.",
          translation: "Alex, thank you for everything. I love you a lot, truly.",
          pronunciation: "AH-leks, GRA-syas por TOH-doh. te KYEH-roh MOO-choh, de ber-DAD",
          literal: "Alex, thanks for everything. You I-want much, of truth.",
          why: "This is real affection, not a weak “I like you.” In Colombia, “te quiero mucho” is a normal way to express love to a close friend, relative or partner, depending on the relationship."
        },
        {
          speaker: "Alex",
          target: "Yo también te amo, Camila. Digo, ¿así se dice cuando uno quiere mucho?",
          translation: "I love you too, Camila. I mean, is that what you say when you love someone a lot?",
          pronunciation: "yoh tam-BYEN te AH-moh, kah-MEE-lah. DEE-goh, ah-SEE se DEE-seh KWAN-doh OO-noh KYEH-reh MOO-choh",
          literal: "I also you love, Camila. I-say, thus itself says when one wants much?",
          why: "Alex overcorrects into “te amo.” The grammar is fine, but the social reading jumps toward romance or solemn family love, which is more than Camila meant."
        },
        {
          speaker: "Camila",
          target: "Ay, no, espera. Te quiero mucho no es poquito; pero te amo suena más fuerte.",
          translation: "Oh, no, wait. Te quiero mucho is not little; but te amo sounds stronger.",
          pronunciation: "ai, noh, es-PEH-rah. te KYEH-roh MOO-choh noh es poh-KEE-toh; PEH-ro te AH-moh SWEH-nah mas FWER-teh",
          literal: "Oh, no, wait. You I-want much is not little; but you I-love sounds more strong.",
          why: "This is the central distinction. “Te quiero mucho” is warm, not lukewarm. “Te amo” can be beautiful, but it raises the emotional stakes."
        },
        {
          speaker: "Alex",
          target: "Entonces a una amiga le digo “te quiero”, y a mi pareja quizá “te amo”.",
          translation: "So to a friend I say “te quiero,” and to my partner maybe “te amo.”",
          pronunciation: "en-TON-ses a OO-nah ah-MEE-gah le DEE-goh te KYEH-roh, ee a mee pah-REH-hah kee-SAH te AH-moh",
          literal: "Then to a friend to-her I-say you I-want, and to my partner maybe you I-love.",
          why: "That is a useful starting map, not a universal law. Some couples use “te quiero” all their lives; some families say “te amo” freely; generation, region and personal style matter."
        },
        {
          speaker: "Camila",
          target: "Exacto. Y puedes decir “amo Barichara” sin que nadie piense que te vas a casar con el pueblo.",
          translation: "Exactly. And you can say “I love Barichara” without anyone thinking you're going to marry the town.",
          pronunciation: "eg-SAK-toh. ee PWEH-des deh-SEER AH-moh bah-ree-CHAH-rah sin keh NAH-dye PYEHN-seh keh te bas a kah-SAR kon el PWEH-bloh",
          literal: "Exactly. And you-can say I-love Barichara without that nobody thinks that yourself you-go to marry with the town.",
          why: "Amar is entirely normal for things, places and ideas: “amo esta ciudad,” “amo esa canción,” “amo la tranquilidad.” The heaviness is strongest in “te amo” addressed to a person."
        },
        {
          speaker: "Alex",
          target: "Entendido: te quiero mucho, y amo este pueblo. Ahí sí no meto la pata.",
          translation: "Got it: I love you a lot, and I love this town. That way I don't put my foot in it.",
          pronunciation: "en-ten-DEE-doh: te KYEH-roh MOO-choh, ee AH-moh ES-teh PWEH-bloh. ah-EE see noh MEH-toh lah PAH-tah",
          literal: "Understood: you I-want much, and I-love this town. There yes not I-put the paw.",
          why: "Alex lands the contrast: querer for the friend, amar for the place. “Meter la pata” is the idiom for saying or doing the awkward wrong thing."
        }
      ],
      vocabulary: [
        {
          term: "amar",
          explanation: "To love, with real emotional force. Direct “te amo” is heavier than everyday Colombian “te quiero,” but amar is normal for places, things and ideals.",
          literal: "to love",
          useWhen: "Strong romantic or family declarations, and enthusiastic affection for things: “amo esta ciudad”, “amo esa canción”.",
          avoidWhen: "You are speaking to a new friend or casual date; “te amo” may sound too intense too soon.",
          register: "neutral to intimate",
          region: "Universal Spanish; its social weight varies by family, generation and relationship.",
          related: ["te amo", "amor", "amar algo", "querer"],
          example: {
            target: "Amo esta ciudad, pero a mis amigos les digo te quiero.",
            translation: "I love this city, but I say te quiero to my friends."
          }
        },
        {
          term: "te quiero",
          explanation: "The everyday Colombian way to say “I love you” across partners, family and close friends. It is not merely “I like you.”",
          literal: "I want you",
          useWhen: "Real affection without the heavy solemnity of “te amo”: friends, parents, siblings, partners.",
          avoidWhen: "You translate it as weak liking; in the right relationship it carries deep love.",
          register: "intimate friendly",
          region: "Very common across Colombia.",
          related: ["te quiero mucho", "querer", "cariño", "afecto"],
          example: {
            target: "Te quiero mucho, parce.",
            translation: "I love you a lot, buddy."
          }
        },
        {
          term: "te amo",
          explanation: "A heavier “I love you,” often romantic, solemn or reserved for a spouse, child or very intimate family bond.",
          literal: "I love you",
          useWhen: "Serious romantic declarations or families that use the phrase openly.",
          avoidWhen: "A friendship is new or the feeling has not been framed that way; it can make the moment awkward.",
          register: "intimate solemn",
          region: "Universal Spanish; frequency varies strongly by household and generation.",
          related: ["amar", "mi amor", "declararse", "pareja"],
          example: {
            target: "Le dije te amo cuando ya éramos pareja.",
            translation: "I said te amo once we were already a couple."
          }
        },
        {
          term: "te quiero mucho",
          explanation: "Warm, full affection. The “mucho” does not make it childish or lukewarm; it often makes the love easier to say.",
          literal: "I want you a lot",
          useWhen: "Goodbyes, family messages, close friendships and affectionate thanks.",
          avoidWhen: "You need a purely romantic declaration; depending on the couple, “te amo” may carry that role.",
          register: "intimate friendly",
          region: "Common across Colombia.",
          related: ["mucho", "con cariño", "un abrazo", "te aprecio"],
          example: {
            target: "Gracias por venir; te quiero mucho.",
            translation: "Thanks for coming; I love you a lot."
          }
        },
        {
          term: "querer vs amar",
          explanation: "Querer is the everyday workhorse for personal love; amar is stronger in direct address but free and natural for things and ideas.",
          literal: "to want/love vs to love",
          useWhen: "Choosing emotional weight: “quiero a mi mamá”, “amo la música”, “te amo” in a serious bond.",
          avoidWhen: "You map querer to “like” and amar to every real love; Colombian usage is not that simple.",
          register: "neutral",
          region: "General Spanish, with Colombian everyday preference for querer in many personal relationships.",
          related: ["te quiero", "te amo", "me gusta", "apreciar"],
          example: {
            target: "La quiero muchísimo, aunque casi nunca le digo te amo.",
            translation: "I love her deeply, though I almost never say te amo."
          }
        },
        {
          term: "amo esta ciudad",
          explanation: "A normal enthusiastic way to say you love a place. Amar is not always solemn when the object is not a person.",
          literal: "I love this city",
          useWhen: "Expressing delight in places, food, music, routines or ideas: “amo este clima”, “amo esa idea”.",
          avoidWhen: "You assume amar must always be a grand romantic confession.",
          register: "friendly informal",
          region: "Universal Spanish; common in younger and urban speech too.",
          related: ["me encanta", "amo eso", "me fascina", "adorar"],
          example: {
            target: "Amo esta ciudad cuando llueve.",
            translation: "I love this city when it rains."
          }
        },
        {
          term: "meter la pata",
          explanation: "To put your foot in it — say or do the socially wrong thing by mistake.",
          literal: "to put the paw",
          useWhen: "Owning an awkward error: “metí la pata con ese comentario”.",
          avoidWhen: "A serious harm or deliberate insult; this idiom is usually for mistakes and embarrassment.",
          register: "friendly informal",
          region: "Universal Spanish; common in Colombia.",
          related: ["equivocarse", "hacer el oso", "pena", "comentario incómodo"],
          example: {
            target: "Metí la pata diciéndole te amo tan rápido.",
            translation: "I put my foot in it by saying te amo so fast."
          }
        }
      ],
      note:
        "Do not build your Spanish love map as “querer = like” and “amar = love.” In Colombia, “te quiero” and “te quiero mucho” are everyday ways to express real love to partners, family and close friends. “Te amo” is heavier: romantic, solemn, or reserved in some families for a spouse or child. That is not a law for every person; younger speakers, media habits and family culture vary. Amar is also perfectly ordinary for things and ideas — “amo esta ciudad,” “amo esa canción” — because the social weight changes when you are not saying it directly to a person.",
      culture: [
        {
          label: "Querer carries real love",
          body: "English speakers often panic when they hear that querer literally means want, and then they under-translate “te quiero” as “I like you.” In Colombia that can badly miss the force. Parents say it to children, friends say it at goodbyes, partners say it tenderly. The phrase can be light or deep depending on the relationship, but it is not automatically weaker than love. The safer habit is to read the bond, not the dictionary gloss."
        },
        {
          label: "The weight of te amo",
          body: "“Te amo” is not forbidden; it is powerful. Some couples use it freely, some families say it every day, and some people reserve it for rare, serious moments. That variation is exactly why learners should not spray it around as the default translation of “I love you.” If a Colombian friend says “te quiero mucho,” answering “yo también te quiero” is warm; answering “te amo” may suddenly make the room romantic."
        },
        {
          label: "Loving things is easy",
          body: "The heavy social charge softens when amar points at things rather than people. “Amo esta ciudad,” “amo esa canción,” “amo la tranquilidad de Barichara” all sound natural, especially in enthusiastic everyday speech. If you want a slightly less intense option, “me encanta” does the job too. The key is that “te amo” to a person is not the same social act as “amo este lugar.”"
        }
      ],
      pitfalls: [
        {
          mistake: "Answering a friend's “te quiero mucho” with “te amo” after two weeks",
          whyItFails: "The grammar is correct, but the emotional weight may jump from warm friendship to a romantic or solemn declaration. That can make an affectionate goodbye suddenly awkward.",
          sayInstead: "Yo también te quiero mucho."
        },
        {
          mistake: "Thinking “te quiero” only means “I like you”",
          whyItFails: "In Colombia, querer is the everyday verb for real love in many relationships. Translating it as mere liking can make you miss the seriousness of what someone has said.",
          sayInstead: "Te quiero mucho can mean I love you a lot."
        },
        {
          mistake: "Avoiding amar for places or ideas",
          whyItFails: "Amar is not always a marriage-level declaration. With cities, songs, food or ideas, it can be an ordinary enthusiastic “I love...”.",
          sayInstead: "Amo esta ciudad."
        }
      ],
      variations: [
        {
          form: "Te quiero mucho.",
          register: "intimate friendly",
          region: "Colombia",
          whenToUse: "Warm love for close friends, family or a partner."
        },
        {
          form: "Yo también te quiero.",
          register: "intimate friendly",
          region: "Universal Spanish",
          whenToUse: "Returning affection without jumping to the heavier te amo."
        },
        {
          form: "Te amo.",
          register: "intimate solemn",
          region: "Universal Spanish",
          whenToUse: "A serious romantic or deeply intimate family declaration."
        },
        {
          form: "Amo esta ciudad.",
          register: "friendly informal",
          region: "Universal Spanish",
          whenToUse: "Saying you love a place with enthusiasm."
        }
      ],
      prompt: "Camila says “te quiero mucho” to Alex as a close friend. What should he understand?",
      choices: [
        "She is expressing real affection, not just saying she likes him a little.",
        "She is making the strongest possible romantic confession in Spanish.",
        "She is saying she wants him to buy something before he leaves."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which response keeps the same friendly register after “te quiero mucho”?",
          choices: [
            "Yo también te quiero mucho.",
            "Yo también te soporto mucho.",
            "Yo también te amo intensamente."
          ],
          answer: 0,
          tests: "return te quiero without over-intensifying"
        },
        {
          prompt: "Which sentence uses “amar” naturally for a thing or place?",
          choices: [
            "Amo esta ciudad cuando llueve.",
            "Quiero esta ciudad como trámite.",
            "Me sobra esta ciudad entera."
          ],
          answer: 0,
          tests: "amar is normal for places and things"
        },
        {
          prompt: "Why can “te amo” be risky with a new friend?",
          choices: [
            "Because it can sound romantic or very solemn.",
            "Because the verb amar is never used in Colombia.",
            "Because it only means liking someone casually."
          ],
          answer: 0,
          tests: "te amo carries heavier social weight"
        }
      ]
    },
    en: {
      title: "Decir “I love you” sin traducir todo igual",
      situation:
        "En Vancouver, Alejandra se despide de Maya, una amiga cercana que hizo con ella un proyecto de voluntariado. Maya dice “I love you” con naturalidad de amiga, y Alejandra se queda pensando si eso equivale a “te amo” y si debe responder con una declaración solemne. Maya le explica que en inglés “I love you” puede ser familiar, amistoso o romántico según la relación y el tono; para cosas se usa sin peso raro, pero “I like you” no traduce bien un “te quiero mucho” colombiano.",
      setting: {
        who: "Maya es una amiga canadiense cercana y expresiva; Alejandra es colombiana y está intentando no traducir automáticamente entre te quiero, te amo, I like you and I love you.",
        what: "Una despedida entre amigas, donde Alejandra aprende que “I love you” no siempre corresponde al peso de “te amo”, y que “I like you” puede quedarse corto.",
        when: "Una tarde al final de un proyecto comunitario, antes de que cada una vuelva a su barrio.",
        where: "Vancouver, Canadá, frente a un centro comunitario.",
        why: "Porque el inglés reparte el afecto de otra manera. Una colombiana puede oír “I love you” como demasiado solemne, o traducir “te quiero mucho” como “I like you a lot” y bajar demasiado la temperatura emocional."
      },
      address: {
        form: "mixed",
        who: "El inglés usa “you” entre Maya y Alejandra; la intimidad está en las palabras de afecto y en el tono.",
        why: "No hay tú ni usted que ayuden a calibrar la relación. La diferencia entre amistad, familia y romance se lee por contexto, no por pronombre.",
        ifYouSwitch: "Alejandra no puede cambiar de tratamiento para suavizar la frase. Tiene que escoger entre “I love you”, “love you”, “I care about you” and “I like you” según el vínculo."
      },
      dialogue: [
        {
          speaker: "Maya",
          target: "I'm going to miss you. Love you, Alejandra.",
          translation: "Te voy a extrañar. Te quiero mucho, Alejandra.",
          pronunciation: "aim GOU-ing tu mis yu. lov yu, a-le-JAN-dra",
          literal: "Voy a extrañarte. Amor tú, Alejandra.",
          why: "“Love you” puede ser una despedida cálida entre amigos en inglés. No equivale automáticamente a un “te amo” romántico y dramático, sobre todo con este tono casual."
        },
        {
          speaker: "Alejandra",
          target: "Wait, is that “te amo”? Should I say something serious back?",
          translation: "Espera, ¿eso es “te amo”? ¿Debo responder algo solemne?",
          pronunciation: "weit, iz dat te AH-moh? shud ai sei SOM-zing SI-ri-us bak",
          literal: "Espera, ¿es eso te amo? ¿Debería decir algo serio de vuelta?",
          why: "Alejandra oye la palabra inglesa “love” y la lleva de inmediato al español más pesado. Así puede leer como solemne una costumbre amistosa del inglés."
        },
        {
          speaker: "Maya",
          target: "Not necessarily. With friends, “love you” can be like “te quiero mucho.”",
          translation: "No necesariamente. Entre amigos, “love you” puede ser como “te quiero mucho”.",
          pronunciation: "not NE-se-se-ri-li. with frends, lov yu kan bi laik te KYEH-roh MOO-choh",
          literal: "No necesariamente. Con amigos, amor tú puede ser como te quiero mucho.",
          why: "Esta es la equivalencia útil: muchas veces “te quiero mucho” no es “I like you a lot,” sino “love you” or “I love you” in the right relationship."
        },
        {
          speaker: "Alejandra",
          target: "So if I say “I like you a lot,” it may sound too weak?",
          translation: "Entonces si digo “I like you a lot”, ¿puede sonar demasiado flojo?",
          pronunciation: "so if ai sei ai laik yu a lat, it mei saund tu wik",
          literal: "Entonces si digo yo gusto tú mucho, puede sonar demasiado débil?",
          why: "Sí: “I like you” suele apuntar a agrado o interés romántico inicial, no al afecto profundo entre amigos cercanos o familia. Puede quedarse corto frente al querer colombiano."
        },
        {
          speaker: "Maya",
          target: "Exactly. And “I love this city” is easy; nobody thinks you're proposing to Vancouver.",
          translation: "Exacto. Y “I love this city” es fácil; nadie cree que le está proponiendo matrimonio a Vancouver.",
          pronunciation: "eg-ZAKT-li. and ai lov dis SI-ti iz I-zi; NOU-ba-di thinks yor pro-POU-zing tu van-KU-ver",
          literal: "Exactamente. Y yo amo esta ciudad es fácil; nadie piensa que usted está proponiendo a Vancouver.",
          why: "El inglés, como el español, usa “love” con libertad para cosas y lugares. El riesgo social aparece sobre todo al decírselo directamente a una persona."
        },
        {
          speaker: "Alejandra",
          target: "Got it. Love you too, and I love this city.",
          translation: "Entendido. Yo también te quiero mucho, y amo esta ciudad.",
          pronunciation: "gat it. lov yu tu, and ai lov dis SI-ti",
          literal: "Captado. Amor tú también, y yo amo esta ciudad.",
          why: "Alejandra escoge la respuesta natural entre amigas y también usa “love” para la ciudad. No enfría la frase con un “I like you a lot”."
        }
      ],
      vocabulary: [
        {
          term: "love",
          explanation: "Amar o querer, según el contexto. En inglés sirve para personas, cosas, lugares e ideas.",
          literal: "amar / querer",
          useWhen: "Afecto fuerte o entusiasmo: “I love my family”, “I love this song”, “love you”.",
          avoidWhen: "Quiere sonar apenas interesado; “love” puede ser intenso si la relación no lo permite.",
          register: "neutral to intimate",
          region: "Inglés universal; el uso con amigos y familia varía por persona y cultura.",
          related: ["I love you", "love you", "I love this", "care about"],
          example: {
            target: "I love this city, and I love my friends.",
            translation: "Amo esta ciudad y quiero mucho a mis amigos."
          }
        },
        {
          term: "I love you",
          explanation: "Puede ser romántico, familiar o amistoso; el contexto decide más que la frase sola.",
          literal: "te amo / te quiero",
          useWhen: "Pareja, familia o amistad cercana donde esa forma ya cabe.",
          avoidWhen: "Una relación nueva o ambigua; puede sonar demasiado intensa.",
          register: "intimate",
          region: "Inglés universal; el peso varía mucho por familia y generación.",
          related: ["love you", "I care about you", "I adore you", "affection"],
          example: {
            target: "I love you, Mom.",
            translation: "Te quiero mucho, mamá. / Te amo, mamá."
          }
        },
        {
          term: "Love you",
          explanation: "Versión más casual de “I love you,” muy común en despedidas con familia o amistades cercanas.",
          literal: "te quiero / te quiero mucho",
          useWhen: "Cerrar una llamada o despedida cálida: “bye, love you”.",
          avoidWhen: "Quiere una declaración romántica solemne; entonces la forma completa y el contexto pesan más.",
          register: "friendly intimate",
          region: "Común en muchas familias y grupos de amigos anglófonos, pero no universal.",
          related: ["I love you", "bye", "miss you", "take care"],
          example: {
            target: "Bye, love you. Text me later.",
            translation: "Chao, te quiero. Escríbeme después."
          }
        },
        {
          term: "I like you",
          explanation: "Me gustas o me caes bien, but often weaker or more romantically tentative than Colombian te quiero.",
          literal: "me gustas / me caes bien",
          useWhen: "Early dating interest or simple liking: “I like you, but...”.",
          avoidWhen: "Traduce un “te quiero mucho” profundo a familiares o amigos cercanos; puede sonar demasiado débil.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["like", "have feelings for", "care about", "love"],
          example: {
            target: "I like you, but I don't know you well yet.",
            translation: "Me gustas, pero todavía no te conozco bien."
          }
        },
        {
          term: "I care about you",
          explanation: "Una forma clara de decir que alguien le importa, menos romántica que “I love you” en relaciones ambiguas.",
          literal: "me importas / me preocupo por ti",
          useWhen: "Afecto serio sin declarar amor romántico: “I care about you a lot”.",
          avoidWhen: "Quiere devolver un “I love you” ya establecido; puede sonar como bajar la intensidad.",
          register: "polite intimate",
          region: "Inglés universal.",
          related: ["care", "mean a lot to me", "friendship", "affection"],
          example: {
            target: "I care about you a lot.",
            translation: "Me importas mucho."
          }
        },
        {
          term: "I love this city",
          explanation: "Uso normal de love para una cosa o lugar; no suena romántico ni solemne.",
          literal: "amo esta ciudad",
          useWhen: "Entusiasmo por lugares, comida, música o planes: “I love this place”.",
          avoidWhen: "Quiere ser moderado; “I really like this city” baja la intensidad.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["love this", "really like", "favourite", "enjoy"],
          example: {
            target: "I love this city in the rain.",
            translation: "Amo esta ciudad cuando llueve."
          }
        },
        {
          term: "put your foot in it",
          explanation: "Meter la pata: decir algo torpe o socialmente incómodo sin querer.",
          literal: "poner el pie en eso",
          useWhen: "Reconocer una embarrada social: “I really put my foot in it”.",
          avoidWhen: "Un daño grave o intencional; suele ser torpeza más que maldad.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["awkward", "say the wrong thing", "embarrassing", "mistake"],
          example: {
            target: "I put my foot in it by saying I love you too soon.",
            translation: "Metí la pata diciendo I love you demasiado rápido."
          }
        }
      ],
      note:
        "No traduzca automáticamente “te quiero” como “I like you” ni “te amo” como el único “I love you”. En inglés, “I love you” y “love you” pueden ser románticos, familiares o amistosos según la relación, el tono y la costumbre del grupo. “I like you” suele sonar más débil, o como interés de una cita inicial. Para cosas y lugares, “love” sale fácil: “I love this city”, “I love this song”. Si la relación es ambigua, “I care about you” expresa afecto sin forzar una lectura romántica.",
      culture: [
        {
          label: "Love es más amplio de lo que parece",
          body: "Muchos colombianos oyen “I love you” y piensan primero en “te amo”, con todo su peso solemne o romántico. En familias y grupos de amigos anglófonos puede ser más cotidiano, sobre todo como “love you” al final de una llamada. Eso no lo vuelve vacío: quiere decir que la frase toma su peso exacto de la relación y el tono, no de una sola categoría colombiana fija."
        },
        {
          label: "Do not undersell te quiero",
          body: "Cuando un colombiano dice “te quiero mucho”, traducirlo como “I like you a lot” puede sonar raro y frío. “Like” puede servir para conocidos o una atracción inicial, pero el afecto de amistad cercana o familia suele necesitar “love” u otra frase más cálida. La persona angloparlante no oirá la distinción colombiana si usted escoge una frase que no lleva suficiente cariño."
        },
        {
          label: "Love for things is normal",
          body: "El inglés usa “love” con libertad para ciudades, ropa, canciones, comida, clima e ideas. “I love Vancouver” es entusiasmo común, no una propuesta de matrimonio. Si quiere bajar la intensidad, “I really like...” funciona, pero no hace falta evitar “love” con objetos. La zona delicada es decirlo de persona a persona, donde la historia de la relación decide si suena amistoso, familiar o romántico."
        }
      ],
      pitfalls: [
        {
          mistake: "“I like you a lot, Mom.”",
          whyItFails: "Si está traduciendo “te quiero mucho, mamá,” esta frase puede sonar fría o rara. “Like” no suele cargar el amor familiar profundo que quiere expresar.",
          sayInstead: "I love you, Mom."
        },
        {
          mistake: "Assuming every “love you” is romantic",
          whyItFails: "Entre amigos o familia, “love you” puede ser una despedida cálida y normal. Leerla siempre como romance puede crear una tensión que no estaba ahí.",
          sayInstead: "Love you too."
        },
        {
          mistake: "Avoiding “love” for places and things",
          whyItFails: "En inglés es normal decir “I love this city” or “I love this song.” No suena como una declaración solemne a una persona.",
          sayInstead: "I love this city."
        }
      ],
      variations: [
        {
          form: "Love you.",
          register: "friendly intimate",
          region: "Inglés universal; depende del grupo",
          whenToUse: "Una despedida cálida con familia o amigos cercanos."
        },
        {
          form: "I love you too.",
          register: "intimate",
          region: "Inglés universal",
          whenToUse: "Responder cuando el vínculo ya permite esa frase."
        },
        {
          form: "I care about you a lot.",
          register: "polite intimate",
          region: "Inglés universal",
          whenToUse: "Expresar afecto serio sin forzar una lectura romántica."
        },
        {
          form: "I love this city.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Decir que ama o le encanta un lugar."
        }
      ],
      prompt: "Maya says “Love you” to a close friend as she leaves. What should Alejandra understand?",
      choices: [
        "It may be warm friend affection, not automatically a romantic confession.",
        "It always means the same solemn thing as “te amo” in every family.",
        "It only means Maya likes Alejandra a little and nothing more."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál traduce mejor “te quiero mucho, mamá” en inglés cálido?",
          choices: [
            "I like you a lot, Mom.",
            "I love you, Mom.",
            "I enjoy you, Mom."
          ],
          answer: 1,
          tests: "te quiero mucho may need I love you"
        },
        {
          prompt: "¿Cuál frase evita una lectura romántica en una relación ambigua?",
          choices: [
            "I care about you a lot.",
            "I adore you as my destiny.",
            "I love you forever."
          ],
          answer: 0,
          tests: "I care about you softens ambiguity"
        },
        {
          prompt: "¿Cuál suena natural para amar una ciudad?",
          choices: [
            "I am in love contract with this city.",
            "I marry this city every weekend.",
            "I love this city in the rain."
          ],
          answer: 2,
          tests: "love is normal for places"
        }
      ]
    }
  },
  {
    id: "leftovers-after-lunch-in-florencia",
    level: "Developing · Home and family",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "intimate",
    pathways: ["independent"],
    verb: "sobrar",
    review: "pending",
    es: {
      title: "Cuando sobra comida después del almuerzo",
      situation:
        "En Florencia, Alex almuerza en casa de la familia de Juliana después de una mañana de lluvia. Prepararon demasiada comida y, al recoger la mesa, todos hablan de lo que sobró: arroz, ensalada, tiempo para tomar café y hasta una silla que está de sobra en la cocina. Alex aprende que sobrar funciona como gustar: la cosa que sobra es el sujeto. “Me sobra tiempo” no significa que yo haga sobrar el tiempo, sino que tengo tiempo de más. También aprende que “estás de sobra” dicho a una persona puede sonar cruel, porque la vuelve innecesaria o estorbosa.",
      setting: {
        who: "Juliana's family has just fed Alex generously; Juliana is clearing plates, and Alex is trying to describe leftovers without turning the grammar inside out.",
        what: "A family lunch cleanup, where food, time, chairs and phrases like “sobra decir que” show how sobrar works as the mirror image of faltar.",
        when: "Early afternoon after a rainy lunch, with coffee still possible before anyone returns to work.",
        where: "Florencia, Caquetá, in a family kitchen with the back door open to the damp garden.",
        why: "Because sobrar is common and grammatically easy to mishandle. The thing left over is the subject, just as the missing thing is the subject with faltar, and one idiom — estar de sobra — can be genuinely hurtful if aimed at a person."
      },
      address: {
        form: "tú",
        who: "Juliana and Alex use tú because they are friends clearing the table together after a family meal.",
        why: "The grammar point is practical and domestic, not formal. Tú keeps the correction gentle while Juliana explains a pattern that would feel heavy if delivered like a class.",
        ifYouSwitch: "Usted would sound oddly distant between these friends in the kitchen. With Juliana's parents Alex might use usted, but the lesson's working conversation is between peers."
      },
      dialogue: [
        {
          speaker: "Juliana",
          target: "Sobró arroz, sobró ensalada y, por suerte, también sobró café.",
          translation: "There was rice left over, salad left over and, luckily, coffee left over too.",
          pronunciation: "soh-BROH ah-RROHS, soh-BROH en-sah-LAH-dah ee, por SWER-teh, tam-BYEN soh-BROH kah-FEH",
          literal: "Left-over rice, left-over salad and, by luck, also left-over coffee.",
          why: "The leftover thing is the subject: rice, salad, coffee. That is why the verb is singular with each singular item: “sobró arroz,” not “sobré arroz.”"
        },
        {
          speaker: "Alex",
          target: "Entonces yo sobro arroz para mañana, ¿no?",
          translation: "So I leftover rice for tomorrow, right?",
          pronunciation: "en-TON-ses yoh SOH-broh ah-RROHS PA-rah mah-NYAH-nah, noh",
          literal: "Then I leftover rice for tomorrow, no?",
          why: "Alex makes the classic subject error. He is not the subject causing the rice to be extra; the rice is what remains. Sobrar patterns like gustar and faltar, not like guardar."
        },
        {
          speaker: "Juliana",
          target: "No: me sobra arroz para mañana. El arroz es el que sobra.",
          translation: "No: I have rice left over for tomorrow. The rice is the thing that is left over.",
          pronunciation: "noh: meh SOH-brah ah-RROHS PA-rah mah-NYAH-nah. el ah-RROHS es el keh SOH-brah",
          literal: "No: to-me rice is-left-over for tomorrow. The rice is the one that is-left-over.",
          why: "“Me sobra arroz” literally puts the surplus rice “to me.” The grammar mirrors “me falta arroz” but with the opposite meaning: too much rather than not enough."
        },
        {
          speaker: "Alex",
          target: "Ah, como me falta sal, pero me sobra ají.",
          translation: "Ah, like I'm short on salt, but I have chili sauce to spare.",
          pronunciation: "ah, KO-moh meh FAL-tah sal, PEH-ro meh SOH-brah ah-HEE",
          literal: "Ah, like to-me lacks salt, but to-me is-left-over chili-sauce.",
          why: "Now he has the mirror pair: faltar for what is missing, sobrar for what is extra. The person affected is indirect; the item is the subject."
        },
        {
          speaker: "Juliana",
          target: "Exacto. Y sobra decir que te empacamos comida para la noche.",
          translation: "Exactly. And it goes without saying that we'll pack you food for tonight.",
          pronunciation: "eg-SAK-toh. ee SOH-brah deh-SEER keh te em-pah-KAH-mos koh-MEE-dah PA-rah lah NOH-cheh",
          literal: "Exactly. And it is-left-over to-say that you we-pack food for the night.",
          why: "“Sobra decir que...” is the idiom “it goes without saying.” It does not mean there are extra words lying around; it means the statement is so obvious it is unnecessary."
        },
        {
          speaker: "Alex",
          target: "Gracias. Y no digo que alguien está de sobra, porque eso sí suena horrible.",
          translation: "Thanks. And I won't say someone is “de sobra,” because that really sounds horrible.",
          pronunciation: "GRA-syas. ee noh DEE-goh keh AL-gyen es-TAH de SOH-brah, POR-keh EH-soh see SWEH-nah oh-RREE-bleh",
          literal: "Thanks. And not I-say that someone is of left-over, because that yes sounds horrible.",
          why: "“Está de sobra” can mean something is unnecessary, but said of a person it can mean they are in the way or not wanted. Alex correctly treats it as dangerous."
        }
      ],
      vocabulary: [
        {
          term: "sobrar",
          explanation: "To be left over, to be more than needed. The thing left over is the subject, like gustar and faltar.",
          literal: "to be extra / left over",
          useWhen: "Food, money, time, seats: “sobró comida”, “me sobra tiempo”, “nos sobran sillas”.",
          avoidWhen: "You make the person the subject as in English “I have extra”; in Spanish the extra thing does the verb.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["sobra", "sobró", "me sobra", "faltar"],
          example: {
            target: "Sobró comida para mañana.",
            translation: "There was food left over for tomorrow."
          }
        },
        {
          term: "me sobra tiempo",
          explanation: "I have time to spare. Tiempo is the subject; me marks the person who has the surplus.",
          literal: "to me time is extra",
          useWhen: "Saying you have more time than needed: “me sobran diez minutos”, “nos sobra una hora”.",
          avoidWhen: "You say “yo sobro tiempo”; that makes you the extra person, not the person with spare time.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["me falta tiempo", "tener tiempo", "de sobra", "minutos"],
          example: {
            target: "Me sobra tiempo antes de la reunión.",
            translation: "I have time to spare before the meeting."
          }
        },
        {
          term: "sobró comida",
          explanation: "There was food left over. A natural phrase after a meal or event.",
          literal: "food was extra",
          useWhen: "Leftovers after lunch, parties or cooking: “sobró arroz”, “sobraron empanadas”.",
          avoidWhen: "You mean someone saved food intentionally; that is guardar, not necessarily sobrar.",
          register: "neutral",
          region: "Universal Spanish; everyday after Colombian family meals.",
          related: ["sobras", "guardar", "calentar", "recalentado"],
          example: {
            target: "Sobró comida, así que le empacaron.",
            translation: "There was food left over, so they packed some for him."
          }
        },
        {
          term: "las sobras",
          explanation: "The leftovers, especially food kept after a meal.",
          literal: "the extras",
          useWhen: "Packing or reheating food: “guarde las sobras”, “almorzamos sobras”.",
          avoidWhen: "You are talking about emotional leftovers or abstract surplus; use a clearer noun.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["sobró comida", "recalentado", "táper", "guardar"],
          example: {
            target: "Mañana calentamos las sobras.",
            translation: "Tomorrow we'll heat up the leftovers."
          }
        },
        {
          term: "sobra decir que",
          explanation: "It goes without saying that... A formal-ish idiom for something obvious.",
          literal: "it is extra to say that",
          useWhen: "Introducing an obvious point: “sobra decir que estamos agradecidos”.",
          avoidWhen: "You interpret it as leftover speech; it means saying it is unnecessary.",
          register: "polite formal",
          region: "Universal Spanish.",
          related: ["ni que decir", "por supuesto", "es obvio", "no hace falta decir"],
          example: {
            target: "Sobra decir que la invitación sigue en pie.",
            translation: "It goes without saying that the invitation still stands."
          }
        },
        {
          term: "estar de sobra",
          explanation: "To be unnecessary; of a person, to be in the way or not wanted. Handle it carefully.",
          literal: "to be extra",
          useWhen: "Objects or comments: “esa silla está de sobra”, “el comentario está de sobra”.",
          avoidWhen: "Saying it to or about a person unless you mean to hurt them; “estás de sobra” is cruel.",
          register: "neutral but risky",
          region: "Universal Spanish.",
          related: ["innecesario", "estorbar", "sobrante", "de más"],
          example: {
            target: "Ese comentario está de sobra.",
            translation: "That comment is unnecessary."
          }
        },
        {
          term: "faltar vs sobrar",
          explanation: "The mirror pair: faltar is what is missing; sobrar is what is extra. Both make the thing the subject.",
          literal: "to be missing vs to be extra",
          useWhen: "Balancing amounts: “me falta plata”, “me sobra comida”, “nos faltan sillas”.",
          avoidWhen: "You switch the grammar back to English and make the person the subject.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["me falta", "me sobra", "gustar", "indirect object"],
          example: {
            target: "Nos faltan platos, pero nos sobran vasos.",
            translation: "We're short on plates, but we have glasses to spare."
          }
        }
      ],
      note:
        "Sobrar is the mirror of faltar and patterns like gustar: the thing is the subject. “Me sobra tiempo” means time is extra for me; “sobró comida” means food was left over; “nos sobran sillas” means we have chairs to spare. It also forms useful idioms: “sobra decir que...” means “it goes without saying,” while “está de sobra” means unnecessary. Be careful with people: “estás de sobra” can sound like “you are unwanted / in the way,” which is genuinely hurtful.",
      culture: [
        {
          label: "Leftovers are part of hospitality",
          body: "After a Colombian family meal, having food left over is not automatically failure; it can mean the host made sure nobody felt measured. Packing a guest a little container for later is common affection. The grammar follows the food, not the guest: “sobró arroz,” “nos sobró almuerzo,” “le empacamos sobras.” Those phrases often come with the quiet pride of having fed people well."
        },
        {
          label: "The faltar mirror",
          body: "Learners often meet faltar first because it explains what they do not have: me falta plata, nos faltan sillas. Sobrar completes the pair. The same grammar now points to abundance: me sobra plata, nos sobran sillas. Once that pattern clicks, it becomes a powerful way to talk about quantities without translating English “I have enough / I have extra” word for word."
        },
        {
          label: "A phrase that can wound",
          body: "“Está de sobra” is harmless for an extra chair or an unnecessary comment. A person is different. “Estás de sobra aquí” tells someone they are not needed or not wanted, and it can cut sharply. If you simply mean there are too many people for a car or table, say that directly: “somos muchos” or “no cabemos todos.” Do not make the person the surplus."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “yo sobro tiempo” for “I have time to spare”",
          whyItFails: "That makes yo the subject and can sound like “I am extra.” With sobrar, the extra thing is the subject: tiempo. The person gets the indirect pronoun.",
          sayInstead: "Me sobra tiempo."
        },
        {
          mistake: "Using “estás de sobra” for a seating problem",
          whyItFails: "Said to a person, it can mean they are unwanted or in the way. That is far harsher than saying there are not enough seats.",
          sayInstead: "No cabemos todos en la mesa."
        },
        {
          mistake: "Reading “sobra decir que” as literal leftovers",
          whyItFails: "The phrase is idiomatic: it means saying the thing is unnecessary because it is obvious. It is not about extra words physically left over.",
          sayInstead: "Sobra decir que estamos agradecidos."
        }
      ],
      variations: [
        {
          form: "Sobró comida para mañana.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Saying there was food left over."
        },
        {
          form: "Me sobra tiempo.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Saying you have time to spare."
        },
        {
          form: "Sobra decir que gracias.",
          register: "polite informal",
          region: "Universal Spanish",
          whenToUse: "Saying thanks are obvious, often with warmth."
        },
        {
          form: "Ese comentario está de sobra.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Calling a comment unnecessary."
        }
      ],
      prompt: "Why is “me sobra tiempo” built with “tiempo” as the subject?",
      choices: [
        "Because sobrar patterns like gustar and faltar: the extra thing does the verb.",
        "Because sobrar always means the person is unwanted in the room.",
        "Because sobrar is only used for food after a family lunch."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence means “there was food left over”?",
          choices: [
            "Sobró comida.",
            "Faltó comida.",
            "Amó comida."
          ],
          answer: 0,
          tests: "sobró comida = food left over"
        },
        {
          prompt: "Which sentence means “I have ten minutes to spare”?",
          choices: [
            "Me faltan diez minutos.",
            "Me sobran diez minutos.",
            "Yo sobro diez minutos."
          ],
          answer: 1,
          tests: "me sobran + plural subject"
        },
        {
          prompt: "Why should you avoid saying “estás de sobra” to a person?",
          choices: [
            "Because it can mean they are unwanted or in the way.",
            "Because it means they cooked too much rice.",
            "Because it politely asks them for more coffee."
          ],
          answer: 0,
          tests: "estás de sobra is hurtful"
        }
      ]
    },
    en: {
      title: "Hablar de sobras sin decir “the food sobrated”",
      situation:
        "En Halifax, Alejandra ayuda a recoger la mesa después de un almuerzo familiar. Quedó demasiada comida y ella quiere traducir “sobró arroz” con un verbo inventado, pero Ben le enseña que en inglés se dice “there's rice left over” o “we have rice left over”. También aprende “I have time to spare”, “it goes without saying” y “that's unnecessary”. La frase peligrosa es “you're in the way”: puede doler tanto como decirle a alguien “estás de sobra”.",
      setting: {
        who: "Ben recoge la mesa con Alejandra después del almuerzo familiar; Alejandra entiende el patrón colombiano con sobrar, pero necesita las frases inglesas para sobras y tiempo de más.",
        what: "Una recogida de mesa después de almuerzo, donde food left over, time to spare and unnecessary comments replace one compact Spanish verb.",
        when: "Una tarde fría después de un almuerzo grande, with containers lined up on the counter.",
        where: "Halifax, Canadá, in Ben's family kitchen after Sunday lunch.",
        why: "Porque el inglés no tiene un verbo único que funcione como sobrar. Hay que repartir la idea entre left over, to spare, goes without saying and unnecessary."
      },
      address: {
        form: "mixed",
        who: "El inglés usa “you” entre Ben y Alejandra; la cercanía viene de estar recogiendo juntos después de comer.",
        why: "No hay pronombre especial para la familia anfitriona. El tono se mantiene amable con frases prácticas y con cuidado al corregir una palabra potencialmente hiriente.",
        ifYouSwitch: "Alejandra no puede cambiar a usted para suavizar. Si una frase puede herir, debe cambiar la frase completa, no el pronombre."
      },
      dialogue: [
        {
          speaker: "Ben",
          target: "There's rice left over, salad left over and, luckily, coffee left over too.",
          translation: "Sobró arroz, sobró ensalada y, por suerte, también sobró café.",
          pronunciation: "ders rais left OU-ver, SA-lad left OU-ver and, LAK-i-li, KO-fi left OU-ver tu",
          literal: "Hay arroz dejado encima, ensalada dejada encima y, por suerte, café dejado encima también.",
          why: "“Left over” es la frase central para sobras de comida. El inglés suele usar “there is/are” o “we have,” no un verbo único como sobrar."
        },
        {
          speaker: "Alejandra",
          target: "So I leftover rice for tomorrow, right?",
          translation: "Entonces yo sobro arroz para mañana, ¿cierto?",
          pronunciation: "so ai LEFT-ou-ver rais for tu-MO-rou, rait",
          literal: "Entonces yo sobro arroz para mañana, ¿cierto?",
          why: "El error muestra que “leftover” no funciona como verbo transitivo cotidiano. Como adjetivo o frase verbal, necesita otra estructura."
        },
        {
          speaker: "Ben",
          target: "Not quite: we have rice left over for tomorrow.",
          translation: "No exactamente: nos sobra arroz para mañana.",
          pronunciation: "not kwait: wi jav rais left OU-ver for tu-MO-rou",
          literal: "No del todo: tenemos arroz dejado de sobra para mañana.",
          why: "“Have ... left over” traduce muy bien “sobrarle algo a alguien.” El sujeto inglés puede ser we, but the surplus still appears as the thing left over."
        },
        {
          speaker: "Alejandra",
          target: "Ah, like I'm short on salt, but I have chili sauce to spare.",
          translation: "Ah, como me falta sal, pero me sobra ají.",
          pronunciation: "ah, laik aim short on solt, bat ai jav CHI-li sos tu sper",
          literal: "Ah, como estoy corta de sal, pero tengo salsa de ají para sobrar.",
          why: "Para tiempo, dinero o cantidad extra disponible, “to spare” is often better than “left over”: “time to spare,” “money to spare,” “room to spare.”"
        },
        {
          speaker: "Ben",
          target: "Exactly. And it goes without saying that we're packing food for you.",
          translation: "Exacto. Y sobra decir que le vamos a empacar comida.",
          pronunciation: "eg-ZAKT-li. and it gouz wi-DAUT SEI-ing dat wir PA-king fud for yu",
          literal: "Exactamente. Y eso va sin decir que estamos empacando comida para usted.",
          why: "“It goes without saying” es el modismo para “sobra decir que”. No tiene nada que ver con comida ni sobras; quiere decir que el punto es obvio."
        },
        {
          speaker: "Alejandra",
          target: "Thanks. And I won't tell someone they're in the way unless I want to hurt them.",
          translation: "Gracias. Y no le voy a decir a alguien que estorba salvo que quiera herirlo.",
          pronunciation: "thanks. and ai wont tel SOM-wan deir in de wei un-LES ai want tu hert dem",
          literal: "Gracias. Y no diré a alguien que está en el camino a menos que quiera herirlo.",
          why: "Dicho sobre una persona, “you're in the way” puede doler como “estás de sobra”. Para un objeto o comentario, “that's unnecessary” es más seguro y menos personal."
        }
      ],
      vocabulary: [
        {
          term: "left over",
          explanation: "Lo que sobra, especialmente comida o cantidad después de usar lo necesario.",
          literal: "dejado de sobra",
          useWhen: "Comida y cantidades: “there's food left over”, “we have rice left over”.",
          avoidWhen: "Inventar un verbo como “to sobr”; el inglés arma la idea con be/have + left over.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["leftovers", "have left over", "remaining", "extra"],
          example: {
            target: "There's food left over for tomorrow.",
            translation: "Sobró comida para mañana."
          }
        },
        {
          term: "I have time to spare",
          explanation: "Me sobra tiempo. “To spare” expresa tiempo, dinero o espacio disponible de más.",
          literal: "tengo tiempo para sobrar",
          useWhen: "Cantidad extra útil: “time to spare”, “money to spare”, “room to spare”.",
          avoidWhen: "Sobras de comida; ahí “left over” suele sonar más natural.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["to spare", "extra time", "plenty of time", "room to spare"],
          example: {
            target: "I have ten minutes to spare.",
            translation: "Me sobran diez minutos."
          }
        },
        {
          term: "There is food left over",
          explanation: "La forma impersonal para “sobró comida”; no necesita sujeto personal.",
          literal: "hay comida dejada de sobra",
          useWhen: "Anunciar sobras después de una comida: “there are leftovers”, “there's rice left over”.",
          avoidWhen: "Quiere decir que una persona guardó comida deliberadamente; entonces use “saved”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["there is", "leftovers", "saved food", "remaining"],
          example: {
            target: "There are empanadas left over.",
            translation: "Sobraron empanadas."
          }
        },
        {
          term: "leftovers",
          explanation: "Las sobras, sobre todo comida que queda para guardar o recalentar.",
          literal: "sobras",
          useWhen: "Comida guardada: “eat leftovers”, “pack up the leftovers”.",
          avoidWhen: "Una persona que sobra; para personas esta palabra suena deshumanizante y rara.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["left over", "pack up", "reheat", "containers"],
          example: {
            target: "Let's pack up the leftovers.",
            translation: "Guardemos las sobras."
          }
        },
        {
          term: "It goes without saying",
          explanation: "Sobra decir que...; algo es tan obvio que no hace falta decirlo.",
          literal: "va sin decir",
          useWhen: "Puntos obvios: “it goes without saying that we're grateful”.",
          avoidWhen: "Traducirlo con leftovers; no tiene relación con comida.",
          register: "polite formal",
          region: "Inglés universal.",
          related: ["obviously", "needless to say", "of course", "no need to say"],
          example: {
            target: "It goes without saying that you're welcome here.",
            translation: "Sobra decir que usted es bienvenida aquí."
          }
        },
        {
          term: "unnecessary / in the way",
          explanation: "“Unnecessary” sirve para cosas o comentarios; “in the way” dicho a una persona puede doler.",
          literal: "innecesario / en el camino",
          useWhen: "Objetos o comentarios: “that's unnecessary”; espacio físico: “the chair is in the way”.",
          avoidWhen: "Decir “you're in the way” a una persona si no quiere sonar hiriente.",
          register: "neutral but sensitive",
          region: "Inglés universal.",
          related: ["unneeded", "extra", "in the way", "not needed"],
          example: {
            target: "That comment was unnecessary.",
            translation: "Ese comentario estuvo de sobra."
          }
        },
        {
          term: "short on / to spare",
          explanation: "La pareja que traduce faltar y sobrar en muchas cantidades: short on for missing, to spare for extra.",
          literal: "corto de / para sobrar",
          useWhen: "Contrastar escasez y abundancia: “we're short on plates but have glasses to spare”.",
          avoidWhen: "Tratarla como una estructura fija para todo; comida sobrante suele preferir “left over”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["short on", "spare", "enough", "extra"],
          example: {
            target: "We're short on plates, but we have glasses to spare.",
            translation: "Nos faltan platos, pero nos sobran vasos."
          }
        }
      ],
      note:
        "El inglés reparte sobrar entre varias estructuras. Para comida: “there's food left over” or “we have rice left over.” Para tiempo, dinero o espacio disponible: “I have time to spare,” “money to spare,” “room to spare.” Para “sobra decir que,” diga “it goes without saying.” Para “está de sobra,” use “unnecessary” with comments or objects; be careful with people, because “you're in the way” or “you're not needed” can sound as hiriente as “estás de sobra.”",
      culture: [
        {
          label: "Leftovers are normal, not failure",
          body: "En casas anglófonas también se guardan sobras, se empacan en containers and se recalientan al día siguiente. La diferencia para el hispanohablante es lingüística: no hay un verbo central como sobrar. Se dice “there's food left over,” “we have leftovers,” “pack up the leftovers.” La comida puede sobrar; el inglés simplemente lo expresa con otra arquitectura."
        },
        {
          label: "Spare is useful beyond food",
          body: "“Spare” es una de las palabras que vuelve naturales las cantidades en inglés. “Time to spare” significa que llegó con tiempo de más; “room to spare” dice que hay espacio extra; “money to spare” sugiere que el presupuesto alcanza con holgura. Cubre muchos casos de sobrar, pero no todos. El arroz que quedó después del almuerzo es “left over”, no normalmente “rice to spare”."
        },
        {
          label: "Do not make a person the leftover",
          body: "Los dos idiomas pueden herir cuando hacen sonar innecesaria a una persona. “You're in the way” puede ser práctico si alguien bloquea físicamente una puerta, pero en un contexto social puede sonar a “no te queremos aquí”. Si el problema es logístico, nombre la logística: “there isn't enough room”, “we don't all fit”, “we need one more chair”. No convierta a la persona en la sobra."
        }
      ],
      pitfalls: [
        {
          mistake: "“I leftover ten minutes.”",
          whyItFails: "“Leftover” no es el verbo normal para tener tiempo de más. El inglés usa “have ... to spare” para el tiempo disponible.",
          sayInstead: "I have ten minutes to spare."
        },
        {
          mistake: "“The food sobrated.”",
          whyItFails: "El inglés no tiene el verbo “sobrate”. Para comida después de una comida, use “left over” o “leftovers”.",
          sayInstead: "There was food left over."
        },
        {
          mistake: "“You are unnecessary here.”",
          whyItFails: "Puede ser gramaticalmente claro, pero dicho a una persona es muy hiriente. Si el problema es el espacio, hable del espacio, no del valor de la persona.",
          sayInstead: "There isn't enough room for everyone."
        }
      ],
      variations: [
        {
          form: "There's food left over.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Decir que sobró comida."
        },
        {
          form: "I have time to spare.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Decir que le sobra tiempo."
        },
        {
          form: "It goes without saying.",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Traducir “sobra decir que”."
        },
        {
          form: "That comment was unnecessary.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Decir que un comentario estuvo de sobra."
        }
      ],
      prompt: "Después del almuerzo, sobró arroz. ¿Cuál frase inglesa es natural?",
      choices: [
        "There's rice left over.",
        "The rice sobrated today.",
        "I leftover the rice."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cómo dice “me sobran diez minutos”?",
          choices: [
            "I leftover ten minutes.",
            "I have ten minutes to spare.",
            "I am extra ten minutes."
          ],
          answer: 1,
          tests: "time to spare"
        },
        {
          prompt: "¿Cuál traduce “sobra decir que estamos agradecidos”?",
          choices: [
            "It leftovers saying we're grateful.",
            "It is extra food that we're grateful.",
            "It goes without saying that we're grateful."
          ],
          answer: 2,
          tests: "it goes without saying"
        },
        {
          prompt: "Si el problema es que no caben todos, ¿cuál frase evita herir a una persona?",
          choices: [
            "There isn't enough room for everyone.",
            "You are unnecessary here.",
            "You are the leftover person."
          ],
          answer: 0,
          tests: "avoid making a person the surplus"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/56-developing-love-and-plenty.js");
