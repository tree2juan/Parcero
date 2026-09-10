/*
 * Lesson block: developing / meaning and growth.
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
 * The three verbs here — significar, desarrollar and alcanzar — handle meaning,
 * growth and sufficiency: what a word means, how a project or skill develops,
 * and whether money, time or effort is enough. The two directions are mirrors:
 * same number of dialogue turns, vocabulary entries, culture notes, pitfalls,
 * variations and practice questions, and the same optional slots filled on the
 * same rows. That is enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "asking-what-guabina-means-in-ibague",
    level: "Developing · Meaning and growth",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    pathways: ["foundation", "year-12"],
    verb: "significar",
    review: "pending",
    es: {
      title: "Preguntar qué significa una palabra en Ibagué",
      situation:
        "Tú estás en Ibagué con Paula durante una muestra de música andina. Oyes la palabra “guabina” en un anuncio y necesitas preguntar qué significa, aclarar lo que quieres decir y no caer en el falso amigo de decir “yo significo”.",
      setting: {
        who: "Paula studies music in Ibagué and likes explaining local references without showing off. Ben is no longer a beginner, but still stops when a word carries more culture than the dictionary gives.",
        what: "A learner asks what an unfamiliar word means, then corrects himself when he tries to translate English “I mean” too literally.",
        when: "A Saturday afternoon, between two short performances, while people are moving around the plaza.",
        where: "Ibagué, Tolima, near a small outdoor stage during a music event.",
        why: "Because “¿qué significa…?” is essential learner language. It lets you keep a conversation alive when a word, sign or joke goes past you."
      },
      address: {
        form: "tú",
        who: "Paula and Ben use tú because they are friends of similar age and the explanation is casual.",
        why: "Tú keeps the exchange relaxed while Ben asks a genuinely useful learner question. Nothing in the scene needs regional slang or extra formality.",
        ifYouSwitch:
          "Usted would not be wrong with a stranger at the event, but between these two friends it would make the question sound more distant than curious."
      },
      dialogue: [
        {
          speaker: "Ben",
          target: "Paula, ¿qué significa “guabina” en el anuncio?",
          translation: "Paula, what does “guabina” mean in the announcement?",
          pronunciation: "PAW-lah, keh seeg-nee-fee-kah gwah-BEE-nah en el ah-NOON-syoh",
          literal: "Paula, what means guabina in the announcement?",
          why: "This is the essential pattern: “¿qué significa…?” The word you do not understand becomes the subject of significar."
        },
        {
          speaker: "Paula",
          target: "Significa un ritmo andino y también un tipo de canción tradicional.",
          translation: "It means an Andean rhythm and also a kind of traditional song.",
          pronunciation: "seeg-nee-FEE-kah oon RREET-moh ahn-DEE-noh ee tam-BYEN oon TEE-poh deh kan-SYON trah-dee-syo-NAHL",
          literal: "It-means a rhythm Andean and also a type of song traditional.",
          why: "“Significa” explains the meaning of a word or label. Paula is not saying what she intends; she is defining the term Ben heard."
        },
        {
          speaker: "Ben",
          target: "Ah, o sea, no significa una banda específica, sino el estilo.",
          translation: "Ah, so, it doesn't mean one specific band, but the style.",
          pronunciation: "ah, oh SEH-ah, no seeg-nee-FEE-kah OO-nah BAHN-dah es-peh-SEE-fee-kah, SEE-noh el es-TEE-loh",
          literal: "Ah, that is, it does not mean a band specific, but the style.",
          why: "“O sea” is the Colombian workhorse for “I mean / that is / so.” It is exactly what Ben needs instead of trying to make significar carry English “mean.”"
        },
        {
          speaker: "Paula",
          target: "Exacto. Y si vas a aclarar algo tuyo, no digas “yo significo”.",
          translation: "Exactly. And if you're going to clarify something of your own, don't say “yo significo.”",
          pronunciation: "eg-SAK-toh. ee see bas ah ah-klah-RAR AHL-goh TOO-yoh, no DEE-gahs yo seeg-nee-FEE-koh",
          literal: "Exactly. And if you go to clarify something yours, don't say I mean.",
          why: "This is the trap. English “I mean” for clarification is “quiero decir” or “o sea,” not “yo significo.”"
        },
        {
          speaker: "Ben",
          target: "Entonces digo: “quiero decir que la palabra significa el estilo”.",
          translation: "Then I say: “I mean that the word means the style.”",
          pronunciation: "en-TON-ses DEE-goh: KYEH-roh deh-SEER keh lah pah-LAH-brah seeg-nee-FEE-kah el es-TEE-loh",
          literal: "Then I-say: I-want to say that the word means the style.",
          why: "Now both meanings are separated cleanly: “quiero decir” for the speaker's intention, “significa” for the word's meaning."
        },
        {
          speaker: "Paula",
          target: "Eso. También puede significar algo distinto según la región o el contexto.",
          translation: "That's it. It can also mean something different depending on the region or context.",
          pronunciation: "EH-soh. tam-BYEN PWEH-deh seeg-nee-fee-KAR AHL-goh dees-TEEN-toh seh-GOON lah rreh-HYON oh el kon-TEKS-toh",
          literal: "That. Also it-can mean something different according-to the region or the context.",
          why: "The infinitive after puede keeps the idea flexible: meanings shift with context, especially in music, food and local speech."
        }
      ],
      vocabulary: [
        {
          term: "significar",
          explanation:
            "To mean, in the sense of a word, gesture, sign or event carrying a meaning.",
          literal: "to signify / mean",
          useWhen:
            "You are asking or explaining what a word, phrase, sign, silence or action means.",
          avoidWhen:
            "You mean English “I mean…” to clarify your own words. Spanish does not use “yo significo” for that.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["querer decir", "o sea", "el significado", "interpretar"],
          example: {
            target: "¿Qué significa esa palabra?",
            translation: "What does that word mean?"
          }
        },
        {
          term: "¿qué significa…?",
          explanation:
            "What does … mean? One of the most useful questions a learner can ask without stopping the whole conversation.",
          literal: "what means…?",
          useWhen:
            "A word, sign, abbreviation, joke or phrase is new to you and you need the meaning.",
          avoidWhen:
            "You are asking someone what they personally intend to say. Then ask “¿qué quieres decir?” instead.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["¿qué quiere decir?", "¿cómo así?", "¿eso qué es?", "el significado"],
          example: {
            target: "¿Qué significa “guabina”?",
            translation: "What does “guabina” mean?"
          }
        },
        {
          term: "significa que…",
          explanation:
            "It means that… A way to explain the implication of a word, action or situation.",
          literal: "it means that",
          useWhen:
            "You are moving from a sign or fact to its consequence: “eso significa que tenemos tiempo.”",
          avoidWhen:
            "You are simply restating your own sentence. Then “o sea” or “quiero decir” sounds more natural.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["quiere decir que", "implica que", "por eso", "entonces"],
          example: {
            target: "Eso significa que empieza más tarde.",
            translation: "That means it starts later."
          }
        },
        {
          term: "querer decir",
          explanation:
            "To mean in the sense of intending to say. It is the normal repair phrase for “what I mean is…”.",
          literal: "to want to say",
          useWhen:
            "Clarifying your own message: “quiero decir que…”, “¿qué quieres decir?”.",
          avoidWhen:
            "You are defining a word in a dictionary sense. Then “significar” is more direct.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["o sea", "aclarar", "significar", "explicar"],
          example: {
            target: "Quiero decir que no entendí la palabra.",
            translation: "I mean that I didn't understand the word."
          }
        },
        {
          term: "o sea",
          explanation:
            "A filler and clarifier meaning “I mean,” “that is,” or “so.” Colombians use it constantly in speech.",
          literal: "or it is",
          useWhen:
            "You are reformulating, softening, or buying a second to make the sentence clearer.",
          avoidWhen:
            "Formal writing or moments where you need crisp, edited prose. It is conversational by nature.",
          register: "friendly informal",
          region: "Very common in Colombia and across Latin America.",
          related: ["quiero decir", "es decir", "mejor dicho", "digamos"],
          example: {
            target: "O sea, la palabra significa el estilo.",
            translation: "I mean, the word means the style."
          }
        },
        {
          term: "el significado",
          explanation:
            "The meaning. The noun you use when discussing what a word, name or action carries.",
          literal: "the meaning",
          useWhen:
            "Talking about meaning itself: “el significado cambia,” “no conozco el significado.”",
          avoidWhen:
            "You need the verb. Do not force a noun phrase when “significa” answers the question cleanly.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["significar", "sentido", "definición", "contexto"],
          example: {
            target: "No conozco el significado de esa palabra.",
            translation: "I don't know the meaning of that word."
          }
        },
        {
          term: "según el contexto",
          explanation:
            "Depending on the context. A useful phrase when a word does not have one fixed translation.",
          literal: "according to the context",
          useWhen:
            "A word's meaning shifts by region, situation, tone or who is speaking.",
          avoidWhen:
            "The meaning is genuinely fixed and simple. Then the phrase can sound like unnecessary hedging.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["depende", "la región", "el tono", "el uso"],
          example: {
            target: "Puede significar otra cosa según el contexto.",
            translation: "It can mean something else depending on the context."
          }
        }
      ],
      note:
        "The crucial split is “¿qué significa…?” for the meaning of a word or sign, versus “quiero decir” or “o sea” for English “I mean.” If you say “yo significo,” Colombians will not hear a normal clarification; they will hear a broken sentence or a claim that you yourself signify something.",
      culture: [
        {
          label: "Asking keeps you inside the conversation",
          body:
            "A learner who can ask “¿qué significa…?” does not have to disappear when a local word appears. The question is normal, adult and efficient. It invites explanation without pretending you already understood."
        },
        {
          label: "Ibagué makes the word concrete",
          body:
            "A music event in Ibagué gives “significar” a real job: a word like “guabina” carries genre, place and tradition. You do not need to master the whole history to ask what the word means in the moment."
        },
        {
          label: "O sea is not laziness",
          body:
            "In conversation, “o sea” lets speakers reframe, clarify or soften what they just said. Overusing it can sound messy, but using it naturally is part of following real Colombian speech."
        },
        {
          label: "Context matters without becoming mystical",
          body:
            "Some words do change by region or scene, but not every word is a mystery. “Según el contexto” is useful when the meaning genuinely shifts; it should not become a way to avoid giving a clear answer."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “yo significo” for English “I mean”",
          whyItFails:
            "Spanish does not use significar for the speaker's intention in that repair phrase. Colombians will not understand it as a normal “I mean.”",
          sayInstead: "Quiero decir que… / O sea…"
        },
        {
          mistake: "Asking “¿qué significa tú?”",
          whyItFails:
            "The word or phrase being defined is the subject of significar. If you ask a person what they mean, use querer decir.",
          sayInstead: "¿Qué quieres decir?"
        },
        {
          mistake: "Using “significa” for every filler",
          whyItFails:
            "English mean covers definitions and clarifications. Spanish splits them: significa for meaning, o sea or quiero decir for clarification.",
          sayInstead: "O sea, no entendí la última parte."
        },
        {
          mistake: "Ignoring context when a word has local weight",
          whyItFails:
            "A dictionary gloss may miss why the word matters in a place or event. Asking for context gets you closer to the real use.",
          sayInstead: "¿Qué significa aquí esa palabra?"
        }
      ],
      variations: [
        {
          form: "¿Qué significa esa palabra?",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The essential learner question when a word is new."
        },
        {
          form: "Eso significa que empieza más tarde.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Explaining the implication of a fact or sign."
        },
        {
          form: "Quiero decir que no entendí.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Clarifying your own intended meaning."
        },
        {
          form: "O sea, no es una banda sino un ritmo.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Reformulating a thought in conversation."
        },
        {
          form: "Depende del contexto.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A meaning shifts with situation, tone or region."
        }
      ],
      prompt: "Ben asks “¿qué significa ‘guabina’?” What is he asking?",
      choices: [
        "He wants the meaning of a word he just heard.",
        "He wants to say that he personally signifies music.",
        "He wants someone to rewrite the event announcement."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "How should Ben say “I mean that the word is a style”?",
          choices: [
            "Yo significo que la palabra es un estilo.",
            "Quiero decir que la palabra es un estilo.",
            "Me alcanzo que la palabra es un estilo."
          ],
          answer: 1,
          tests: "English “I mean” as quiero decir, not significar"
        },
        {
          prompt: "Which sentence correctly asks what a word means?",
          choices: [
            "¿Qué significa esa palabra?",
            "¿Qué significo esa palabra?",
            "¿Qué quieres esa palabra?"
          ],
          answer: 0,
          tests: "¿qué significa...? as the learner question"
        },
        {
          prompt: "What does “o sea” do in Ben's sentence?",
          choices: [
            "It helps reformulate or clarify what he understood.",
            "It turns the word into a formal written definition.",
            "It says the event has already run out of money."
          ],
          answer: 0,
          tests: "o sea as a conversational clarifier"
        },
        {
          prompt: "Which sentence handles shifting meaning naturally?",
          choices: [
            "Puede desarrollar la plata antes del almuerzo.",
            "Puede alcanzar el significado con tijeras.",
            "Puede significar otra cosa según el contexto."
          ],
          answer: 2,
          tests: "según el contexto with significar"
        }
      ]
    },
    en: {
      title: "Preguntar qué significa una palabra en Houston",
      situation:
        "Usted está en Houston con Paula durante una muestra de música. Oye una palabra nueva en un anuncio y necesita preguntar en inglés what it means, aclarar con I mean, y no sonar demasiado formal con signify.",
      setting: {
        who: "Paula estudia música en Houston y explica referencias sin convertirlas en clase. Bernardo ya conversa con soltura, pero todavía se detiene cuando una palabra tiene más cultura que diccionario.",
        what: "Un estudiante pregunta qué significa una palabra desconocida y aprende a separar “mean” para definiciones de “I mean” para aclararse.",
        when: "Una tarde de sábado, entre dos presentaciones breves, mientras la gente se mueve por la plaza.",
        where: "Houston, Texas, cerca de un escenario pequeño al aire libre.",
        why: "Porque “What does … mean?” es una pregunta esencial, y porque “signify” no reemplaza a “mean” en la mayoría de conversaciones."
      },
      address: {
        form: "mixed",
        who: "Paula y Bernardo usan el mismo “you”; la cercanía se marca con el tono y con preguntas directas.",
        why: "El inglés no distingue tú y usted. Para sonar natural, Bernardo necesita la estructura correcta, no un pronombre distinto.",
        ifYouSwitch:
          "No hay cambio de pronombre disponible. Volverse demasiado formal con “what does this signify?” puede sonar más raro que respetuoso."
      },
      dialogue: [
        {
          speaker: "Bernardo",
          target: "Paula, what does “fiddle” mean in the announcement?",
          translation: "Paula, ¿qué significa “fiddle” en el anuncio?",
          pronunciation: "PAW-la, uat doz FI-dol min in di a-NAUNS-ment",
          literal: "Paula, ¿qué hace “fiddle” significar en el anuncio?",
          why: "La pregunta esencial es “What does … mean?” El auxiliar does carga la pregunta y el verbo principal queda en base: mean."
        },
        {
          speaker: "Paula",
          target: "It means a violin, usually in folk or traditional music.",
          translation: "Significa un violín, normalmente en música folclórica o tradicional.",
          pronunciation: "it mins a vai-o-LIN, YU-zhu-a-li in fouk or tra-DI-sho-nal MIU-zik",
          literal: "Significa un violín, usualmente en música folclórica o tradicional.",
          why: "“It means” define una palabra. No hace falta “signifies,” que sonaría más escrito o simbólico para esta conversación."
        },
        {
          speaker: "Bernardo",
          target: "Ah, I mean, it doesn't mean a band; it means the instrument.",
          translation: "Ah, o sea, no significa una banda; significa el instrumento.",
          pronunciation: "ah, ai min, it DA-zent min a band; it mins di IN-stru-ment",
          literal: "Ah, quiero decir, no significa una banda; significa el instrumento.",
          why: "Aquí aparecen dos “mean.” “I mean” aclara lo que Bernardo quiere decir; “it means” define la palabra."
        },
        {
          speaker: "Paula",
          target: "Exactly. Don't say “I signify” when you're just clarifying.",
          translation: "Exacto. No diga “yo significo” cuando sólo está aclarando.",
          pronunciation: "eg-ZAKT-li. dount sei ai SIG-ni-fai uen yor yost KLA-ri-fai-ing",
          literal: "Exactamente. No diga “yo significo” cuando sólo está aclarando.",
          why: "“I signify” existe en inglés, pero no significa “quiero decir” en una conversación normal. Para aclarar, diga “I mean.”"
        },
        {
          speaker: "Bernardo",
          target: "So I say: “I mean the word means the instrument.”",
          translation: "Entonces digo: “quiero decir que la palabra significa el instrumento”.",
          pronunciation: "so ai sei: ai min da werd mins di IN-stru-ment",
          literal: "Entonces digo: yo quiero decir la palabra significa el instrumento.",
          why: "La frase separa las dos funciones sin drama: “I mean” para la intención del hablante, “the word means” para la definición."
        },
        {
          speaker: "Paula",
          target: "That's right. It can mean something different depending on the context.",
          translation: "Eso. Puede significar algo distinto según el contexto.",
          pronunciation: "dats rait. it kan min SOM-thing DI-freent di-PEN-ding on da KON-tekst",
          literal: "Eso es correcto. Puede significar algo diferente dependiendo del contexto.",
          why: "“Depending on the context” es la frase útil cuando una palabra cambia por región, situación o género musical."
        }
      ],
      vocabulary: [
        {
          term: "mean",
          explanation:
            "Significar, y también querer decir. En inglés una sola palabra cubre definición e intención.",
          literal: "significar / querer decir",
          useWhen:
            "Pregunta o explica el sentido de una palabra, señal, gesto o frase: “what does it mean?”, “it means…”.",
          avoidWhen:
            "Quiere sonar técnico o simbólico; “signify” existe, pero en conversación diaria “mean” casi siempre gana.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["signify", "meaning", "I mean", "context"],
          example: {
            target: "What does that word mean?",
            translation: "¿Qué significa esa palabra?"
          }
        },
        {
          term: "What does … mean?",
          explanation:
            "¿Qué significa…? La pregunta esencial para una palabra o frase nueva.",
          literal: "¿qué hace … significar?",
          useWhen:
            "Una palabra, abreviatura, señal o chiste se le escapa y necesita el sentido.",
          avoidWhen:
            "Olvidar el auxiliar. “What means this word?” suena a calco del español.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["what do you mean", "meaning", "does it mean", "context"],
          example: {
            target: "What does “fiddle” mean?",
            translation: "¿Qué significa “fiddle”?"
          }
        },
        {
          term: "it means that…",
          explanation:
            "Significa que… Sirve para explicar la consecuencia o implicación de algo.",
          literal: "significa que",
          useWhen:
            "Pasa de una señal o dato a lo que implica: “it means that we have time.”",
          avoidWhen:
            "Está corrigiendo lo que usted mismo quiso decir. Entonces use “I mean.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["that means", "so", "implies", "therefore"],
          example: {
            target: "It means that the show starts later.",
            translation: "Eso significa que el show empieza más tarde."
          }
        },
        {
          term: "I mean",
          explanation:
            "Quiero decir u o sea. Es la reparación normal cuando usted aclara su propia frase.",
          literal: "yo quiero decir",
          useWhen:
            "Reformula, se corrige o suaviza algo: “I mean, not the band, the instrument.”",
          avoidWhen:
            "Está definiendo una palabra ajena. Ahí “it means” es la estructura.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["what I mean is", "that is", "so", "let me rephrase"],
          example: {
            target: "I mean, the word means the instrument.",
            translation: "O sea, la palabra significa el instrumento."
          }
        },
        {
          term: "signify",
          explanation:
            "Significar en un registro más formal, simbólico o escrito. No es el reemplazo cotidiano de mean.",
          literal: "significar",
          useWhen:
            "Habla de símbolos, importancia cultural o lenguaje más académico: “the color signifies mourning.”",
          avoidWhen:
            "Una pregunta normal de aprendiz. “What does it mean?” suena mucho más natural que “what does it signify?”.",
          register: "formal",
          region: "Inglés universal.",
          related: ["mean", "symbolize", "represent", "stand for"],
          example: {
            target: "The color signifies mourning in that context.",
            translation: "El color significa duelo en ese contexto."
          }
        },
        {
          term: "meaning",
          explanation:
            "Significado. El sustantivo para hablar del sentido de una palabra, nombre o gesto.",
          literal: "significado",
          useWhen:
            "Habla del significado como cosa: “I don't know the meaning,” “the meaning changes.”",
          avoidWhen:
            "La frase pide verbo. “What is the meaning of…?” es correcto, pero más pesado que “what does … mean?”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["mean", "definition", "sense", "context"],
          example: {
            target: "I don't know the meaning of that word.",
            translation: "No conozco el significado de esa palabra."
          }
        },
        {
          term: "depending on the context",
          explanation:
            "Según el contexto. Una frase útil cuando una palabra no tiene una sola traducción fija.",
          literal: "dependiendo del contexto",
          useWhen:
            "El sentido cambia por región, situación, tono o persona que habla.",
          avoidWhen:
            "El significado es fijo y simple. Añadir contexto puede sonar evasivo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["context", "it depends", "situation", "usage"],
          example: {
            target: "It can mean something else depending on the context.",
            translation: "Puede significar otra cosa según el contexto."
          }
        }
      ],
      note:
        "La división que el español hace entre “significar” y “querer decir” se junta en inglés con mean. Por eso “I mean” sí es correcto en inglés, pero “I signify” no sirve para aclararse. Para una palabra nueva, la pregunta segura es “What does that word mean?”, no “What means that word?”",
      culture: [
        {
          label: "What does it mean mantiene la conversación",
          body:
            "Una persona que pregunta bien por significado no queda fuera de la conversación. En inglés, “what does that mean?” es directo, adulto y normal. No hace falta disculparse demasiado."
        },
        {
          label: "Signify suena más pesado",
          body:
            "“Signify” existe, pero suele vivir en textos, símbolos y análisis. En una plaza, frente a un anuncio, “mean” es casi siempre la palabra natural."
        },
        {
          label: "I mean es una muletilla legítima",
          body:
            "Como “o sea,” “I mean” puede aclarar, corregir o comprar un segundo. Demasiado puede sonar desordenado, pero bien usado hace que el inglés conversacional respire."
        },
        {
          label: "Context no es una excusa",
          body:
            "Decir “depending on the context” es útil cuando de verdad cambia el sentido. Si la palabra tiene una definición sencilla, conviene darla y seguir, no esconderse en la ambigüedad."
        }
      ],
      pitfalls: [
        {
          mistake: "“What means this word?”",
          whyItFails:
            "Es el orden del español. En inglés la pregunta necesita do/does: what does this word mean?",
          sayInstead: "What does this word mean?"
        },
        {
          mistake: "“I signify the word is a style.”",
          whyItFails:
            "“I signify” no funciona como “I mean.” Para aclarar lo que usted quiere decir, use “I mean.”",
          sayInstead: "I mean the word is a style."
        },
        {
          mistake: "“It signifies a violin” in casual talk.",
          whyItFails:
            "Se entiende, pero suena demasiado formal para una explicación cotidiana de vocabulario.",
          sayInstead: "It means a violin."
        },
        {
          mistake: "“What is the meaning?” for every quick question.",
          whyItFails:
            "Es correcto, pero más pesado. La pregunta conversacional normal es “what does it mean?”.",
          sayInstead: "What does it mean?"
        }
      ],
      variations: [
        {
          form: "What does that word mean?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La pregunta esencial cuando una palabra es nueva."
        },
        {
          form: "That means the show starts later.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Explicar la implicación de un dato o señal."
        },
        {
          form: "I mean, I didn't understand.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Aclarar lo que usted quiso decir."
        },
        {
          form: "It means the instrument, not the band.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Definir una palabra y descartar una lectura incorrecta."
        },
        {
          form: "It depends on the context.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "El sentido cambia según la situación."
        }
      ],
      prompt: "Bernardo asks “What does ‘fiddle’ mean?” ¿Qué está preguntando?",
      choices: [
        "Quiere saber el significado de una palabra que oyó.",
        "Quiere decir que él personalmente simboliza música.",
        "Quiere que alguien reescriba el anuncio del evento."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cómo se dice “quiero decir que la palabra es un estilo”?",
          choices: [
            "I signify the word is a style.",
            "I mean the word is a style.",
            "I reach the word is a style."
          ],
          answer: 1,
          tests: "I mean para aclarar, no signify"
        },
        {
          prompt: "¿Cuál pregunta pide correctamente el significado de una palabra?",
          choices: [
            "What does that word mean?",
            "What means that word?",
            "What wants that word?"
          ],
          answer: 0,
          tests: "What does ... mean?"
        },
        {
          prompt: "¿Qué hace “I mean” en la frase de Bernardo?",
          choices: [
            "Ayuda a reformular o aclarar lo que entendió.",
            "Convierte la palabra en una definición académica.",
            "Dice que el evento ya se quedó sin dinero."
          ],
          answer: 0,
          tests: "I mean as conversational clarifier"
        },
        {
          prompt: "¿Cuál frase maneja naturalmente el contexto?",
          choices: [
            "It can develop the money before lunch.",
            "It can reach the meaning with scissors.",
            "It can mean something different depending on the context."
          ],
          answer: 2,
          tests: "depending on the context with mean"
        }
      ]
    }
  },
  {
    id: "developing-a-workshop-in-buenaventura",
    level: "Developing · Meaning and growth",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "desarrollar",
    review: "pending",
    es: {
      title: "Desarrollar un taller en Buenaventura",
      situation:
        "Vos estás en Buenaventura con Lina, que ayuda a montar un taller de fotografía para jóvenes. El proyecto todavía está verde: hay que desarrollar materiales, desarrollar habilidades y hablar con cuidado de cómo se desarrolla el plan sin usar el verbo para decir que alguien creció.",
      setting: {
        who: "Lina coordinates a small youth photography workshop with a community group. Maya is helping for the week and wants to talk about growth without sounding like a grant application.",
        what: "Planning a workshop that is not ready yet: materials, skills, timeline and the difference between developing a project and growing up as a person.",
        when: "A windy afternoon, two days before the first group of students arrives.",
        where: "Buenaventura, Valle del Cauca, in a community room near the waterfront.",
        why: "Because desarrollar is useful but leans formal. It belongs with projects, skills, ideas and towns; for a child or person growing up, Colombians normally use crecer or criarse."
      },
      address: {
        form: "vos",
        who: "Lina and Maya use vos as friends working side by side, not as strangers in an office.",
        why: "Voseo is natural in parts of Valle del Cauca, and the scene needs warmth because the verb itself can sound formal. The address form keeps the planning human.",
        ifYouSwitch:
          "Usted would make the workshop meeting sound bureaucratic. Tú would be understood, but vos gives the local friendship a natural shape without inventing regional vocabulary."
      },
      dialogue: [
        {
          speaker: "Lina",
          target: "Tenemos la idea, pero todavía falta desarrollar el taller paso a paso.",
          translation: "We have the idea, but we still need to develop the workshop step by step.",
          pronunciation: "teh-NEH-mos lah ee-DEH-ah, PEH-roh toh-dah-BEE-ah FAHL-tah deh-sah-rroh-YAR el tah-YER PAH-soh ah PAH-soh",
          literal: "We-have the idea, but still lacks to develop the workshop step to step.",
          why: "This is the natural territory of desarrollar: a project is not finished, so you build it out in stages."
        },
        {
          speaker: "Maya",
          target: "¿Desarrollar significa escribir las guías, o también preparar las actividades?",
          translation: "Does developing mean writing the guides, or also preparing the activities?",
          pronunciation: "deh-sah-rroh-YAR seeg-nee-FEE-kah es-kree-BEER las GHEE-ahs, oh tam-BYEN preh-pah-RAR las ak-tee-bee-DAH-des",
          literal: "To develop means writing the guides, or also preparing the activities?",
          why: "Maya asks for the scope of the verb, not the dictionary definition. Desarrollar can cover the whole process of turning an idea into a usable plan."
        },
        {
          speaker: "Lina",
          target: "Las dos cosas. Y queremos que los pelados desarrollen criterio, no sólo técnica.",
          translation: "Both things. And we want the kids to develop judgment, not just technique.",
          pronunciation: "las dos KOH-sas. ee keh-REH-mos keh los peh-LAH-dos deh-sah-RROH-yen kree-TEH-ryoh, no SOH-loh TEK-nee-kah",
          literal: "The two things. And we-want that the kids develop judgment, not only technique.",
          why: "“Desarrollen” appears after “queremos que,” a common subjunctive frame for hopes and goals. The verb works well with skills and judgment."
        },
        {
          speaker: "Maya",
          target: "Entonces el taller se desarrolla en tres momentos: mirar, tomar fotos y conversar.",
          translation: "Then the workshop unfolds in three stages: looking, taking photos and talking.",
          pronunciation: "en-TON-ses el tah-YER seh deh-sah-RROH-yah en tres moh-MEN-tos: mee-RAR, toh-MAR FOH-tos ee kon-ber-SAR",
          literal: "Then the workshop develops itself in three moments: looking, taking photos and conversing.",
          why: "The reflexive “se desarrolla” means the plan unfolds or develops. It is not that the workshop grows taller; it takes shape over time."
        },
        {
          speaker: "Lina",
          target: "Exacto. Pero no digás que un niño “se desarrolló” en Buenaventura si sólo querés decir que se crió aquí.",
          translation: "Exactly. But don't say a child “developed himself” in Buenaventura if you only mean he grew up here.",
          pronunciation: "eg-SAK-toh. PEH-roh no dee-GAHS keh oon NEE-nyoh seh deh-sah-rroh-YOH en bweh-nah-ben-TOO-rah see SOH-loh keh-REHS deh-SEER keh seh kree-OH ah-KEE",
          literal: "Exactly. But don't say that a child developed himself in Buenaventura if only you-want to say that he was raised here.",
          why: "This is the limit. For people growing up in a place, Colombians normally say “se crió” or “creció,” not “se desarrolló.”"
        },
        {
          speaker: "Maya",
          target: "Listo: desarrollamos el proyecto, desarrollamos habilidades, y la gente se cría en un lugar.",
          translation: "Got it: we develop the project, we develop skills, and people grow up in a place.",
          pronunciation: "LEES-toh: deh-sah-rroh-YAH-mos el proh-YEK-toh, deh-sah-rroh-YAH-mos ah-bee-lee-DAH-des, ee lah HEN-teh seh KREE-ah en oon loo-GAR",
          literal: "Ready: we-develop the project, we-develop skills, and people are-raised in a place.",
          why: "Maya lands the honest split: desarrollar for structured growth, criarse for personal upbringing. That distinction keeps the formal verb useful instead of overextended."
        }
      ],
      vocabulary: [
        {
          term: "desarrollar",
          explanation:
            "To develop: build out a project, skill, idea, plan or capacity over time.",
          literal: "to unroll / develop",
          useWhen:
            "A project needs structure, a skill improves through practice, or an idea becomes fuller and more usable.",
          avoidWhen:
            "You simply mean a person grew up somewhere. For that, Colombians normally say crecer or criarse.",
          register: "neutral to formal",
          region: "Universal Spanish; common in work, education and planning.",
          related: ["desarrollarse", "crecer", "criarse", "fortalecer"],
          example: {
            target: "Tenemos que desarrollar el taller.",
            translation: "We have to develop the workshop."
          }
        },
        {
          term: "desarrollar un proyecto",
          explanation:
            "To develop a project: turn an idea into materials, steps, roles and results.",
          literal: "to develop a project",
          useWhen:
            "Planning community work, school projects, business ideas, workshops or programs.",
          avoidWhen:
            "The task is only a quick fix. Desarrollar suggests a process with stages.",
          register: "neutral to formal",
          region: "Universal Spanish.",
          related: ["planear", "organizar", "ejecutar", "el proceso"],
          example: {
            target: "Estamos desarrollando un proyecto comunitario.",
            translation: "We are developing a community project."
          }
        },
        {
          term: "desarrollar habilidades",
          explanation:
            "To develop skills. The verb fits training, practice and gradual improvement.",
          literal: "to develop abilities",
          useWhen:
            "Someone builds judgment, technique, confidence, language ability or professional capacity.",
          avoidWhen:
            "The change is just physical growth. A child grows; a skill develops.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["practicar", "fortalecer", "mejorar", "la capacidad"],
          example: {
            target: "Los jóvenes desarrollan criterio con la práctica.",
            translation: "The young people develop judgment through practice."
          }
        },
        {
          term: "desarrollarse",
          explanation:
            "To develop or unfold. The reflexive form often describes how a process, event or situation plays out.",
          literal: "to develop itself",
          useWhen:
            "A plan, story, event, town or situation evolves over time: “el taller se desarrolla en tres momentos.”",
          avoidWhen:
            "You mean a person was raised in a place. Use criarse or crecer instead.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["evolucionar", "darse", "transcurrir", "tomar forma"],
          example: {
            target: "El taller se desarrolla en tres partes.",
            translation: "The workshop unfolds in three parts."
          }
        },
        {
          term: "crecer",
          explanation:
            "To grow. The plain verb for a child, plant, town, number or problem getting bigger.",
          literal: "to grow",
          useWhen:
            "Physical or general growth: children, cities, sales, plants, noise, concern.",
          avoidWhen:
            "You mean building a formal project or skill with deliberate structure. Then desarrollar may fit better.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["desarrollar", "aumentar", "madurar", "hacerse grande"],
          example: {
            target: "El barrio creció rápido.",
            translation: "The neighborhood grew quickly."
          }
        },
        {
          term: "criarse",
          explanation:
            "To grow up or be raised in a place or family. This is the human upbringing verb.",
          literal: "to raise oneself",
          useWhen:
            "Saying where someone grew up: “me crié en Cali,” “se crió con la abuela.”",
          avoidWhen:
            "Talking about a project or skill. Projects do not criarse; they develop.",
          register: "neutral",
          region: "Universal Spanish; very natural in Colombia.",
          related: ["crecer", "la crianza", "nacer", "la familia"],
          example: {
            target: "Ella se crió en Buenaventura.",
            translation: "She grew up in Buenaventura."
          }
        },
        {
          term: "tomar forma",
          explanation:
            "To take shape. A natural alternative when a plan is becoming clearer.",
          literal: "to take form",
          useWhen:
            "An idea, workshop, route or agreement is starting to look real but is not finished.",
          avoidWhen:
            "You need the more formal process word. Desarrollar may be clearer in reports or planning.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["desarrollarse", "armarse", "concretarse", "avanzar"],
          example: {
            target: "El plan ya está tomando forma.",
            translation: "The plan is already taking shape."
          }
        }
      ],
      note:
        "Desarrollar is useful, but it leans toward planned or structured growth: projects, skills, towns, ideas, capacity. The reflexive “desarrollarse” is excellent for how a process unfolds. But for a person growing up in a place, the honest Colombian verbs are “criarse” and “crecer,” not “desarrollarse.”",
      culture: [
        {
          label: "Formal does not mean fake",
          body:
            "Desarrollar can sound like work, school or institutions, but real people use it when a plan genuinely needs structure. The trick is not to avoid the verb; it is to use it where the process is real."
        },
        {
          label: "A project grows by being built",
          body:
            "A community workshop does not simply appear. Materials, roles, sequence and trust have to be developed. That makes desarrollar a practical verb, not just a bureaucratic one."
        },
        {
          label: "People grow up differently from projects",
          body:
            "Saying someone “se desarrolló en Buenaventura” can sound clinical or odd if you mean childhood. “Se crió en Buenaventura” carries family, place and upbringing in a much more natural way."
        },
        {
          label: "Buenaventura can hold ordinary planning",
          body:
            "The setting matters without requiring invented local color. A normal community room, a practical workshop and a careful plan can show Colombian Spanish beyond the same few cities."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “me desarrollé en Buenaventura” for “I grew up there”",
          whyItFails:
            "Desarrollarse about a person can sound clinical or formal. For upbringing, Colombians normally say criarse or crecer.",
          sayInstead: "Me crié en Buenaventura."
        },
        {
          mistake: "Using desarrollar for a quick repair",
          whyItFails:
            "Desarrollar suggests a process with stages. A small practical fix usually needs arreglar, solucionar or ajustar.",
          sayInstead: "Hay que ajustar el horario."
        },
        {
          mistake: "Forgetting the reflexive in “el taller se desarrolla”",
          whyItFails:
            "When you mean a process unfolds, Spanish often uses the reflexive form. Without se, the sentence may sound like the workshop develops something else.",
          sayInstead: "El taller se desarrolla en tres partes."
        },
        {
          mistake: "Making desarrollar sound grander than the plan",
          whyItFails:
            "The verb can be formal. If the idea is simply taking shape in conversation, a softer phrase may fit.",
          sayInstead: "El plan está tomando forma."
        }
      ],
      variations: [
        {
          form: "Tenemos que desarrollar el taller.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A project needs materials, sequence and structure."
        },
        {
          form: "Los jóvenes desarrollan habilidades.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Training or practice builds capacity over time."
        },
        {
          form: "El plan se desarrolla en tres momentos.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A process unfolds in stages."
        },
        {
          form: "Ella se crió en Buenaventura.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "A person grew up or was raised in a place."
        },
        {
          form: "El plan ya está tomando forma.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A softer way to say an idea is becoming clearer."
        }
      ],
      prompt: "Lina says they need to “desarrollar el taller.” What does she mean?",
      choices: [
        "They need to build the workshop out with materials and steps.",
        "They need to say that a child grew up in the workshop.",
        "They need to ask what the word workshop means in English."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence sounds natural for “she grew up in Buenaventura”?",
          choices: [
            "Ella se desarrolló en Buenaventura.",
            "Ella se crió en Buenaventura.",
            "Ella se significó en Buenaventura."
          ],
          answer: 1,
          tests: "criarse for growing up as a person"
        },
        {
          prompt: "Which sentence uses desarrollarse for a process?",
          choices: [
            "El taller se desarrolla en tres momentos.",
            "La plata se desarrolla hasta fin de mes.",
            "La palabra se desarrolla como dinero."
          ],
          answer: 0,
          tests: "desarrollarse as unfolding"
        },
        {
          prompt: "What does “desarrollar habilidades” focus on?",
          choices: [
            "Building capacity through practice over time.",
            "Running out of money before payday.",
            "Clarifying a word with o sea."
          ],
          answer: 0,
          tests: "desarrollar habilidades as skill growth"
        },
        {
          prompt: "Which phrase is softer than formal “desarrollar el plan”?",
          choices: [
            "El plan ya no alcanza nada.",
            "El plan ya significa gasolina.",
            "El plan ya está tomando forma."
          ],
          answer: 2,
          tests: "tomar forma as softer alternative"
        }
      ]
    },
    en: {
      title: "Desarrollar un taller en Manchester",
      situation:
        "Usted está en Manchester con Lina, que ayuda a montar un taller de fotografía para jóvenes. El proyecto todavía está verde: hay que say develop the materials, develop skills y explicar cómo the workshop develops sin usar develop para todo lo que en español sería crecer o criarse.",
      setting: {
        who: "Lina coordina un pequeño taller de fotografía juvenil con un grupo comunitario. Marisol ayuda por una semana y quiere hablar de crecimiento sin sonar como un formulario de subvención.",
        what: "Planear un taller que aún no está listo: materiales, habilidades, calendario y la diferencia entre desarrollar un proyecto y crecer como persona.",
        when: "Una tarde ventosa, dos días antes de que llegue el primer grupo de estudiantes.",
        where: "Manchester, Inglaterra, en un salón comunitario cerca de una biblioteca pública.",
        why: "Porque develop funciona para proyectos, habilidades e ideas, pero no traduce todos los crecer, criarse o desarrollarse del español."
      },
      address: {
        form: "mixed",
        who: "Lina y Marisol usan el mismo “you”; la colaboración se marca por tono, no por pronombre.",
        why: "El inglés no tiene tú ni usted. Para sonar natural, Marisol necesita escoger entre develop, grow up, unfold y take shape.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Si Marisol usa “develop” para todo, el problema no será de respeto sino de precisión."
      },
      dialogue: [
        {
          speaker: "Lina",
          target: "We have the idea, but we still need to develop the workshop step by step.",
          translation: "Tenemos la idea, pero todavía falta desarrollar el taller paso a paso.",
          pronunciation: "wi jav di ai-DI-a, bot wi stil nid tu di-VE-lop da WERK-shop step bai step",
          literal: "Tenemos la idea, pero todavía necesitamos desarrollar el taller paso por paso.",
          why: "Develop encaja con proyectos que necesitan estructura. No suena artificial porque el taller todavía debe volverse usable."
        },
        {
          speaker: "Marisol",
          target: "Does develop mean writing the guides, or also preparing the activities?",
          translation: "¿Desarrollar significa escribir las guías, o también preparar las actividades?",
          pronunciation: "doz di-VE-lop min RAI-ting da gaidz, or OL-so pri-PE-ring di ak-TI-vi-tiz",
          literal: "¿Desarrollar significa escribir las guías, o también preparar las actividades?",
          why: "La pregunta busca el alcance del verbo. En inglés, develop puede cubrir todo el proceso de convertir una idea en plan."
        },
        {
          speaker: "Lina",
          target: "Both. And we want the students to develop judgment, not just technique.",
          translation: "Las dos cosas. Y queremos que los estudiantes desarrollen criterio, no sólo técnica.",
          pronunciation: "bouth. and wi uant da STU-dents tu di-VE-lop YODCH-ment, not yost tek-NIK",
          literal: "Ambas. Y queremos que los estudiantes desarrollen juicio, no sólo técnica.",
          why: "“Develop skills,” “develop judgment” y “develop confidence” son combinaciones naturales en inglés. El verbo funciona cuando el crecimiento llega por práctica."
        },
        {
          speaker: "Marisol",
          target: "So the workshop develops in three stages: looking, taking pictures and talking.",
          translation: "Entonces el taller se desarrolla en tres momentos: mirar, tomar fotos y conversar.",
          pronunciation: "so da WERK-shop di-VE-lops in thri STEI-yiz: LU-king, TEI-king PIK-chers and TO-king",
          literal: "Entonces el taller se desarrolla en tres etapas: mirar, tomar fotos y hablar.",
          why: "“Develops in three stages” es posible, pero “unfolds” puede sonar más elegante cuando el foco es cómo transcurre un evento."
        },
        {
          speaker: "Lina",
          target: "Exactly. But don't say a child “developed in Manchester” if you mean she grew up here.",
          translation: "Exacto. Pero no diga que una niña “se desarrolló” en Manchester si quiere decir que se crió aquí.",
          pronunciation: "eg-ZAKT-li. bot dount sei a chaild di-VE-lopt in MAN-ches-ter if yu min shi gru op jir",
          literal: "Exactamente. Pero no diga que una niña desarrolló en Manchester si quiere decir que creció aquí.",
          why: "Para personas y crianza, el inglés dice “grew up.” “Developed in Manchester” suena biológico, profesional o extraño, no como infancia."
        },
        {
          speaker: "Marisol",
          target: "Got it: we develop the project, develop skills, and people grow up in a place.",
          translation: "Listo: desarrollamos el proyecto, desarrollamos habilidades, y la gente se cría en un lugar.",
          pronunciation: "got it: wi di-VE-lop da PRO-yekt, di-VE-lop skils, and PI-pol grou op in a pleis",
          literal: "Entendido: desarrollamos el proyecto, desarrollamos habilidades, y la gente crece arriba en un lugar.",
          why: "Marisol separa el mapa: develop para estructura y capacidad; grow up para crianza. Esa frontera evita calcos raros."
        }
      ],
      vocabulary: [
        {
          term: "develop",
          explanation:
            "Desarrollar: construir o hacer crecer un proyecto, habilidad, idea o capacidad con el tiempo.",
          literal: "desarrollar",
          useWhen:
            "Un proyecto necesita estructura, una habilidad mejora con práctica o una idea se vuelve más completa.",
          avoidWhen:
            "Quiere decir que una persona se crió en un lugar. Para eso el inglés usa “grow up.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["grow", "grow up", "unfold", "take shape"],
          example: {
            target: "We need to develop the workshop.",
            translation: "Tenemos que desarrollar el taller."
          }
        },
        {
          term: "develop a project",
          explanation:
            "Desarrollar un proyecto: convertir una idea en pasos, materiales, roles y resultados.",
          literal: "desarrollar un proyecto",
          useWhen:
            "Planea trabajo comunitario, proyectos escolares, ideas de negocio, talleres o programas.",
          avoidWhen:
            "Sólo habla de un arreglo rápido. Develop sugiere un proceso con etapas.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["plan", "build out", "organize", "process"],
          example: {
            target: "We're developing a community project.",
            translation: "Estamos desarrollando un proyecto comunitario."
          }
        },
        {
          term: "develop skills",
          explanation:
            "Desarrollar habilidades. El verbo funciona para entrenamiento, práctica y mejora gradual.",
          literal: "desarrollar habilidades",
          useWhen:
            "Alguien construye criterio, técnica, confianza, idioma o capacidad profesional.",
          avoidWhen:
            "El cambio es crecimiento físico o crianza. Ahí “grow” o “grow up” suele ser mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["practice", "build skills", "improve", "capacity"],
          example: {
            target: "The students develop judgment through practice.",
            translation: "Los estudiantes desarrollan criterio con la práctica."
          }
        },
        {
          term: "unfold",
          explanation:
            "Desarrollarse en el sentido de transcurrir o irse desplegando.",
          literal: "desplegarse",
          useWhen:
            "Un evento, historia, plan o situación avanza por etapas.",
          avoidWhen:
            "Está hablando de desarrollar habilidades o materiales. Ahí develop es más directo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["develop", "play out", "take shape", "progress"],
          example: {
            target: "The workshop unfolds in three parts.",
            translation: "El taller se desarrolla en tres partes."
          }
        },
        {
          term: "grow",
          explanation:
            "Crecer. El verbo amplio para hacerse más grande o aumentar.",
          literal: "crecer",
          useWhen:
            "Niños, plantas, ciudades, cifras, problemas o preocupaciones aumentan.",
          avoidWhen:
            "Necesita el sentido de preparar un proyecto con estructura. Ahí develop suena mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["develop", "increase", "mature", "expand"],
          example: {
            target: "The neighborhood grew quickly.",
            translation: "El barrio creció rápido."
          }
        },
        {
          term: "grow up",
          explanation:
            "Criarse o crecer en un lugar. Es la frase humana de infancia y crianza.",
          literal: "crecer arriba",
          useWhen:
            "Dice dónde o con quién alguien pasó la niñez: “I grew up in Manchester.”",
          avoidWhen:
            "Habla de un proyecto o habilidad. Projects develop; people grow up.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["be raised", "childhood", "develop", "grow"],
          example: {
            target: "She grew up in Manchester.",
            translation: "Ella se crió en Manchester."
          }
        },
        {
          term: "take shape",
          explanation:
            "Tomar forma. Una alternativa natural cuando una idea empieza a verse real.",
          literal: "tomar forma",
          useWhen:
            "Una idea, taller, ruta o acuerdo se aclara pero todavía no está terminado.",
          avoidWhen:
            "Necesita el verbo formal de proceso. Develop puede ser más preciso en planes o informes.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["develop", "come together", "unfold", "progress"],
          example: {
            target: "The plan is already taking shape.",
            translation: "El plan ya está tomando forma."
          }
        }
      ],
      note:
        "Develop es útil, pero no reemplaza todos los crecer, criarse o desarrollarse. Use develop para proyectos, habilidades, ideas y capacidades; unfold para cómo transcurre un evento; grow up para una persona que se crió en un lugar; take shape para un plan que empieza a verse claro.",
      culture: [
        {
          label: "Develop no siempre suena burocrático",
          body:
            "En inglés, develop puede sonar perfectamente humano si el proceso es real: develop a workshop, develop trust, develop skills. El problema aparece cuando se usa para infancia o para cualquier cambio sin estructura."
        },
        {
          label: "Grow up es crianza",
          body:
            "“I grew up in…” es una frase básica de identidad. Un hispanohablante que dice “I developed in…” para su ciudad de infancia suena clínico o extraño. La infancia no se dice así."
        },
        {
          label: "Unfold ayuda con procesos",
          body:
            "Cuando el español dice “el evento se desarrolla,” el inglés muchas veces prefiere “the event unfolds” o “takes place.” Es menos mecánico y más natural para contar cómo ocurrió algo."
        },
        {
          label: "Take shape suena conversacional",
          body:
            "Para un plan que todavía está verde, “it's taking shape” puede sonar más ligero que “we are developing the plan.” Las dos sirven, pero no tienen el mismo peso."
        }
      ],
      pitfalls: [
        {
          mistake: "“I developed in Manchester.”",
          whyItFails:
            "Para crianza, el inglés usa “grew up.” Developed suena biológico, profesional o raro como historia de infancia.",
          sayInstead: "I grew up in Manchester."
        },
        {
          mistake: "“The meeting developed in three parts.”",
          whyItFails:
            "Se entiende, pero para cómo transcurre un evento, “unfolded” o “took place” suele sonar más natural.",
          sayInstead: "The meeting unfolded in three parts."
        },
        {
          mistake: "“We need to grow the workshop materials.”",
          whyItFails:
            "Con materiales y estructura de un proyecto, develop es el verbo normal. Grow suena más físico o comercial.",
          sayInstead: "We need to develop the workshop materials."
        },
        {
          mistake: "“The plan is developing shape.”",
          whyItFails:
            "La expresión fija es “take shape.” Develop no se combina así con shape.",
          sayInstead: "The plan is taking shape."
        }
      ],
      variations: [
        {
          form: "We need to develop the workshop.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un proyecto necesita materiales, secuencia y estructura."
        },
        {
          form: "The students develop skills.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La práctica construye capacidad con el tiempo."
        },
        {
          form: "The plan unfolds in three stages.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un proceso transcurre por etapas."
        },
        {
          form: "She grew up in Manchester.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una persona se crió en un lugar."
        },
        {
          form: "The plan is taking shape.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una idea se está volviendo más clara."
        }
      ],
      prompt: "Lina says they need to “develop the workshop.” ¿Qué quiere decir?",
      choices: [
        "Deben construir el taller con materiales y pasos.",
        "Deben decir que una niña se crió en el taller.",
        "Deben preguntar qué significa workshop en español."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase dice naturalmente “me crié en Manchester”?",
          choices: [
            "I developed in Manchester.",
            "I grew up in Manchester.",
            "I signified in Manchester."
          ],
          answer: 1,
          tests: "grow up for personal upbringing"
        },
        {
          prompt: "¿Cuál frase sirve para un proceso que transcurre?",
          choices: [
            "The workshop unfolds in three stages.",
            "The money develops until payday.",
            "The word reaches with scissors."
          ],
          answer: 0,
          tests: "unfold for how a process develops"
        },
        {
          prompt: "¿Qué enfoca “develop skills”?",
          choices: [
            "Build capacity through practice over time.",
            "Run out of money before payday.",
            "Clarify a word with I mean."
          ],
          answer: 0,
          tests: "develop skills as skill growth"
        },
        {
          prompt: "¿Cuál frase es más ligera que “develop the plan”?",
          choices: [
            "The plan is reaching money.",
            "The plan is meaning gas.",
            "The plan is taking shape."
          ],
          answer: 2,
          tests: "take shape as softer alternative"
        }
      ]
    }
  },
  {
    id: "making-the-money-last-in-arauca",
    level: "Developing · Meaning and growth",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "alcanzar",
    review: "pending",
    es: {
      title: "Que alcance la plata en Arauca",
      situation:
        "Usted está en Arauca con Diego al final de mes. Hay que comprar mercado, pagar una carrera corta y llegar a tiempo a una llamada. La palabra clave es alcanzar: la plata no alcanza, el tiempo no alcanzó y usted no alcanzó a llamar.",
      setting: {
        who: "Diego knows the household numbers and is trying to avoid turning a tight week into a crisis. Claire is visiting family and learning the money-and-time meanings that dictionaries hide under “reach.”",
        what: "A practical end-of-month conversation about whether money is enough, whether time was enough, and whether someone managed to do something before the chance passed.",
        when: "The last Thursday of the month, after work, when small decisions suddenly matter.",
        where: "Arauca, Arauca, in a small grocery shop before heading home.",
        why: "Because alcanzar is one of the least guessable everyday verbs: it can mean reach, be enough, last until, or manage to do something in time."
      },
      address: {
        form: "usted",
        who: "Diego uses usted with Claire, and she uses usted back, a warm but respectful family-friend register.",
        why: "The topic is practical and a little sensitive because it involves money. Usted lets the conversation stay careful without becoming cold.",
        ifYouSwitch:
          "Tú would be understandable, but it would make the money talk feel more casual than Diego chooses. Usted keeps the advice gentle."
      },
      dialogue: [
        {
          speaker: "Claire",
          target: "¿Nos alcanza la plata para todo el mercado?",
          translation: "Do we have enough money for all the groceries?",
          pronunciation: "nos ahl-KAHN-sah lah PLAH-tah PAH-rah TOH-doh el mer-KAH-doh",
          literal: "To-us reaches the money for all the groceries?",
          why: "This is the high-value phrase. “Alcanzar” does not mean physically reach here; it means the money is enough for what you need."
        },
        {
          speaker: "Diego",
          target: "No nos alcanza para todo; toca escoger lo urgente y dejar lo demás.",
          translation: "We don't have enough for everything; we have to choose what's urgent and leave the rest.",
          pronunciation: "no nos ahl-KAHN-sah PAH-rah TOH-doh; TOH-kah es-koh-HER lo oor-HEN-teh ee deh-HAR lo deh-MAHS",
          literal: "To-us does-not reach for everything; it-is-necessary to choose the urgent and leave the rest.",
          why: "“No nos alcanza” is ordinary, adult money Spanish. It names the limit without dramatizing it."
        },
        {
          speaker: "Claire",
          target: "Ayer tampoco me alcanzó el tiempo para llamarlo antes de que cerraran.",
          translation: "Yesterday I also didn't have enough time to call him before they closed.",
          pronunciation: "ah-YER tam-POH-koh meh ahl-kahn-SOH el TYEM-poh PAH-rah yah-MAR-loh AHN-tes deh keh se-RRAH-rahn",
          literal: "Yesterday neither to-me reached the time for to-call-him before they closed.",
          why: "Time can also “not reach.” The preterite is “alcanzó” for time being enough, while the yo form “alcancé” appears when I managed to do something."
        },
        {
          speaker: "Diego",
          target: "Yo sí alcancé a mandar el mensaje, pero no me respondieron.",
          translation: "I did manage to send the message, but they didn't answer me.",
          pronunciation: "yo see ahl-kahn-SEH ah mahn-DAR el men-SAH-heh, PEH-roh no meh rres-pon-DYEH-ron",
          literal: "I yes reached to send the message, but not to-me they-answered.",
          why: "“Alcancé a + infinitive” means I managed to do it in time. The spelling changes c to qu only before e: alcancé."
        },
        {
          speaker: "Claire",
          target: "Entonces, si no alcanzo a retirar, ¿usted me presta para el taxi?",
          translation: "So if I don't manage to withdraw cash, could you lend me money for the taxi?",
          pronunciation: "en-TON-ses, see no ahl-KAHN-soh ah rreh-tee-RAR, oos-TED meh PRES-tah PAH-rah el TAK-see",
          literal: "Then, if not I-reach to withdraw, you lend me for the taxi?",
          why: "Again, “no alcanzo a retirar” is not about arms reaching an ATM. It means the timing may fail before the next thing needs to happen."
        },
        {
          speaker: "Diego",
          target: "Claro, pero hagamos cuentas para que alcance hasta el lunes.",
          translation: "Of course, but let's do the numbers so it lasts until Monday.",
          pronunciation: "KLAH-roh, PEH-roh ah-GAH-mos KWEN-tas PAH-rah keh ahl-KAHN-seh AHS-tah el LOO-nes",
          literal: "Clear, but let's-do accounts so that it reaches until Monday.",
          why: "After “para que,” the subjunctive “alcance” says the goal: make the money stretch until Monday. This is everyday survival grammar, not textbook decoration."
        }
      ],
      vocabulary: [
        {
          term: "alcanzar",
          explanation:
            "To reach, be enough, last until, or manage to do something in time. Context decides which meaning is active.",
          literal: "to reach",
          useWhen:
            "Money is enough, time is enough, supplies last, a person catches up, or someone manages to do an action before it is too late.",
          avoidWhen:
            "You assume the dictionary “reach” is physical. In Colombian Spanish the money and time meanings are extremely common.",
          register: "neutral",
          region: "Universal Spanish; very common in Colombian everyday speech.",
          related: ["alcanzar a", "no alcanzar", "alcancé", "ser suficiente"],
          example: {
            target: "No me alcanza la plata.",
            translation: "I don't have enough money."
          }
        },
        {
          term: "no me alcanza la plata",
          explanation:
            "I don't have enough money. Literally the money does not reach for me.",
          literal: "the money does not reach me",
          useWhen:
            "Your budget will not cover the purchase, month, fare, bill or plan.",
          avoidWhen:
            "You mean you cannot physically reach money with your hand. That would need a different sentence.",
          register: "neutral",
          region: "General Spanish; everyday in Colombia.",
          related: ["no nos alcanza", "me falta plata", "el presupuesto", "hasta fin de mes"],
          example: {
            target: "No me alcanza la plata para el mercado.",
            translation: "I don't have enough money for groceries."
          }
        },
        {
          term: "no me alcanzó el tiempo",
          explanation:
            "I didn't have enough time. The time available was not enough for the task.",
          literal: "the time did not reach me",
          useWhen:
            "You planned to do something, but the window closed before you could finish or even start.",
          avoidWhen:
            "You simply forgot. This phrase says time was insufficient, not that memory failed.",
          register: "neutral",
          region: "General Spanish.",
          related: ["se me fue el tiempo", "no tuve tiempo", "alcanzar a", "antes de que"],
          example: {
            target: "No me alcanzó el tiempo para llamar.",
            translation: "I didn't have enough time to call."
          }
        },
        {
          term: "alcanzar a + infinitivo",
          explanation:
            "To manage to do something in time. This is one of the most useful non-obvious patterns.",
          literal: "to reach to do",
          useWhen:
            "You caught the chance before it passed: “alcancé a llamar,” “no alcanzamos a entrar.”",
          avoidWhen:
            "You mean ability in general. This pattern is about timing and opportunity, not skill.",
          register: "neutral",
          region: "Universal Spanish; very common in Colombia.",
          related: ["lograr", "a tiempo", "no alcanzar a", "alcancé"],
          example: {
            target: "No alcancé a llamarte.",
            translation: "I didn't manage to call you in time."
          }
        },
        {
          term: "alcancé",
          explanation:
            "The preterite yo form: I reached or managed. The spelling changes c to qu before e.",
          literal: "I reached / managed",
          useWhen:
            "Reporting that you managed something in time: “alcancé a llegar,” “alcancé a mandar el mensaje.”",
          avoidWhen:
            "Writing “alcanzé.” The sound stays the same, but Spanish spelling protects it with c to qu.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["alcanzó", "alcancé a", "no alcancé", "llegué a tiempo"],
          example: {
            target: "Alcancé a mandar el mensaje.",
            translation: "I managed to send the message in time."
          }
        },
        {
          term: "hacer cuentas",
          explanation:
            "To do the numbers or work out the budget. Often appears with making money stretch.",
          literal: "to make accounts",
          useWhen:
            "You are calculating whether money, time or quantities are enough.",
          avoidWhen:
            "You need formal accounting. This is everyday budgeting, not professional bookkeeping.",
          register: "friendly informal",
          region: "Universal Spanish; common in Colombia.",
          related: ["calcular", "el presupuesto", "la cuenta", "cuadrar"],
          example: {
            target: "Hagamos cuentas para que alcance.",
            translation: "Let's do the numbers so it is enough."
          }
        },
        {
          term: "para que alcance",
          explanation:
            "So that it is enough or lasts. The subjunctive appears after para que because it states a goal.",
          literal: "so that it reaches",
          useWhen:
            "You are stretching money, food, time or fuel toward a deadline or need.",
          avoidWhen:
            "You are stating a fact about what already happened. Then use the indicative: “alcanzó” or “no alcanzó.”",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["hasta el lunes", "rendir", "estirar", "no gastar"],
          example: {
            target: "Guardemos algo para que alcance hasta mañana.",
            translation: "Let's save some so it lasts until tomorrow."
          }
        }
      ],
      note:
        "Alcanzar deserves the most space because English “reach” barely prepares you for it. “No me alcanza la plata” means I do not have enough money; “no me alcanzó el tiempo” means time ran short; “no alcancé a llamarte” means I did not manage to call you in time. Protect the spelling too: alcancé, not alcanzé.",
      culture: [
        {
          label: "Money reaches or it does not",
          body:
            "“No me alcanza” is one of the clearest ways to talk about a tight budget without a speech about poverty. It is practical, direct and common: the money simply does not stretch as far as the need."
        },
        {
          label: "Time can fail you too",
          body:
            "Spanish lets time behave like a resource that reaches or falls short. “No me alcanzó el tiempo” is not an excuse for forgetting; it says the available window was too small."
        },
        {
          label: "Managing in time is the hidden pattern",
          body:
            "“Alcanzar a + infinitivo” is everywhere once you hear it: no alcancé a salir, alcanzamos a comprar, ¿sí alcanzó a llamar? It is about catching the chance before it closes."
        },
        {
          label: "Doing the numbers is social",
          body:
            "Hacer cuentas is not only arithmetic. In a household or family plan, it is a way to make limits visible so nobody has to pretend the money or time is endless."
        }
      ],
      pitfalls: [
        {
          mistake: "Translating “no me alcanza la plata” as physical reach",
          whyItFails:
            "The phrase is about sufficiency, not arm length. The money does not cover the need.",
          sayInstead: "No me alcanza la plata para el mercado."
        },
        {
          mistake: "Saying “no tengo suficiente tiempo” every time",
          whyItFails:
            "It is correct, but “no me alcanzó el tiempo” is the natural phrase when a window closed before you managed the task.",
          sayInstead: "No me alcanzó el tiempo para llamar."
        },
        {
          mistake: "Writing “alcanzé”",
          whyItFails:
            "The preterite yo form changes spelling to keep the sound: c becomes qu before e.",
          sayInstead: "Alcancé a mandarte el mensaje."
        },
        {
          mistake: "Using “alcanzar a” for general ability",
          whyItFails:
            "The pattern means manage in time, not know how or be able in general. It carries a deadline or closing chance.",
          sayInstead: "No alcancé a llamarte antes de que cerraran."
        }
      ],
      variations: [
        {
          form: "No me alcanza la plata.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Your money is not enough for the need."
        },
        {
          form: "No nos alcanza para todo.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "The group budget cannot cover every item."
        },
        {
          form: "No me alcanzó el tiempo.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "The available time was not enough."
        },
        {
          form: "No alcancé a llamarte.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "You did not manage to call before the chance passed."
        },
        {
          form: "Hagamos cuentas para que alcance.",
          register: "friendly informal",
          region: "General Spanish",
          whenToUse: "Budgeting so money, food or time lasts."
        }
      ],
      prompt: "Diego says “no nos alcanza para todo.” What does he mean?",
      choices: [
        "They cannot physically reach the groceries on the shelf.",
        "Their money is not enough to cover every item.",
        "They do not understand what the word market means."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence means “I didn't manage to call you in time”?",
          choices: [
            "No alcancé a llamarte.",
            "No desarrollé a llamarte.",
            "No signifiqué llamarte."
          ],
          answer: 0,
          tests: "alcanzar a + infinitive as manage in time"
        },
        {
          prompt: "Which spelling is correct for the preterite yo form?",
          choices: [
            "Alcanzé a mandar el mensaje.",
            "Alcancé a mandar el mensaje.",
            "Alcanse a mandar el mensaje."
          ],
          answer: 1,
          tests: "c to qu spelling in alcancé"
        },
        {
          prompt: "What does “no me alcanzó el tiempo” mean?",
          choices: [
            "The time available was not enough for the task.",
            "The clock was too high on the wall to touch.",
            "The word time changed meaning by region."
          ],
          answer: 0,
          tests: "time as insufficient resource"
        },
        {
          prompt: "Why does Diego say “para que alcance”?",
          choices: [
            "He wants the word money to mean something else.",
            "He wants the project to develop a workshop.",
            "He wants the money to last until the next need."
          ],
          answer: 2,
          tests: "para que alcance as goal of sufficiency"
        }
      ]
    },
    en: {
      title: "Que alcance la plata en Miami",
      situation:
        "Usted está en Miami con Diego al final de mes. Hay que comprar mercado, pagar un viaje corto y llegar a tiempo a una llamada. En inglés necesita decir not enough money, not enough time y managed to call sin calcar reach.",
      setting: {
        who: "Diego conoce las cuentas de la casa y trata de evitar que una semana apretada se vuelva una crisis. Clara visita a la familia y aprende que alcanzar casi nunca se traduce como reach cuando se habla de plata.",
        what: "Una conversación práctica de fin de mes sobre si la plata alcanza, si el tiempo alcanzó y si alguien alcanzó a hacer algo antes de que pasara la oportunidad.",
        when: "El último jueves del mes, después del trabajo, cuando las decisiones pequeñas de repente pesan.",
        where: "Miami, Florida, en un supermercado pequeño antes de volver a casa.",
        why: "Porque reach no traduce naturalmente “no me alcanza la plata” ni “no alcancé a llamarte.” El inglés reparte esas ideas entre enough, run out of time y manage to."
      },
      address: {
        form: "mixed",
        who: "Diego y Clara usan el mismo “you”; el cuidado de la conversación viene del tono y de hablar claro sobre dinero.",
        why: "El inglés no tiene usted para suavizar este tema. La precisión ayuda más que una formalidad artificial.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Si Clara traduce reach palabra por palabra, el problema será de sentido, no de cortesía."
      },
      dialogue: [
        {
          speaker: "Clara",
          target: "Do we have enough money for all the groceries?",
          translation: "¿Nos alcanza la plata para todo el mercado?",
          pronunciation: "du wi jav i-NOF MO-ni for ol da GRO-se-riz",
          literal: "¿Tenemos suficiente dinero para todos los víveres?",
          why: "Para plata que alcanza, el inglés natural usa “have enough money.” “Does the money reach us?” suena literal y raro."
        },
        {
          speaker: "Diego",
          target: "We don't have enough for everything; we need to choose what's urgent.",
          translation: "No nos alcanza para todo; toca escoger lo urgente.",
          pronunciation: "wi dount jav i-NOF for EV-ri-thing; wi nid tu chuz uats ER-yent",
          literal: "No tenemos suficiente para todo; necesitamos escoger lo urgente.",
          why: "“Don't have enough” hace el trabajo de “no nos alcanza.” Es directo, cotidiano y no dramatiza la situación."
        },
        {
          speaker: "Clara",
          target: "Yesterday I didn't have enough time to call before they closed.",
          translation: "Ayer no me alcanzó el tiempo para llamar antes de que cerraran.",
          pronunciation: "YES-ter-dei ai DID-ent jav i-NOF taim tu kol bi-FOR dei klouzd",
          literal: "Ayer no tuve suficiente tiempo para llamar antes de que cerraran.",
          why: "Para tiempo que no alcanzó, el inglés vuelve a enough. También puede decir “I ran out of time,” si quiere marcar que el tiempo se acabó."
        },
        {
          speaker: "Diego",
          target: "I did manage to send the message, but they didn't answer.",
          translation: "Yo sí alcancé a mandar el mensaje, pero no me respondieron.",
          pronunciation: "ai did MA-nich tu send da ME-sich, bot dei DID-ent AN-ser",
          literal: "Sí logré mandar el mensaje, pero no respondieron.",
          why: "“Manage to” traduce “alcanzar a + infinitivo”: lograr hacerlo antes de que se cerrara la oportunidad."
        },
        {
          speaker: "Clara",
          target: "So if I don't manage to get cash, can you lend me money for the ride?",
          translation: "Entonces, si no alcanzo a retirar, ¿me presta para la carrera?",
          pronunciation: "so if ai dount MA-nich tu get kash, kan yu lend mi MO-ni for da raid",
          literal: "Entonces si no logro conseguir efectivo, ¿puede prestarme dinero para el viaje?",
          why: "Otra vez, “don't manage to” marca timing, no capacidad general. El problema es si alcanza a hacerlo antes de necesitar pagar."
        },
        {
          speaker: "Diego",
          target: "Sure, but let's do the numbers so it lasts until Monday.",
          translation: "Claro, pero hagamos cuentas para que alcance hasta el lunes.",
          pronunciation: "shur, bot lets du da NOM-bers so it lasts on-TIL MON-dei",
          literal: "Claro, pero hagamos los números para que dure hasta el lunes.",
          why: "Cuando la plata debe alcanzar hasta una fecha, el inglés puede usar “last”: make it last until Monday."
        }
      ],
      vocabulary: [
        {
          term: "reach",
          explanation:
            "Alcanzar físicamente. Pero para plata, tiempo y oportunidades, el inglés suele escoger otras frases.",
          literal: "alcanzar",
          useWhen:
            "Algo llega físicamente a un lugar o una persona toca algo: reach the door, reach the shelf.",
          avoidWhen:
            "Traduce “no me alcanza la plata” o “no alcancé a llamar.” Ahí use enough o manage to.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["enough", "manage to", "last", "run out"],
          example: {
            target: "I can't reach the top shelf.",
            translation: "No alcanzo el estante de arriba."
          }
        },
        {
          term: "I don't have enough money",
          explanation:
            "No me alcanza la plata. La frase directa para un presupuesto que no cubre la necesidad.",
          literal: "no tengo suficiente dinero",
          useWhen:
            "La plata no alcanza para la compra, el mes, el pasaje, la factura o el plan.",
          avoidWhen:
            "Está hablando de tocar algo físicamente. Ahí sí puede ser reach.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["not enough", "short on money", "budget", "until payday"],
          example: {
            target: "I don't have enough money for groceries.",
            translation: "No me alcanza la plata para el mercado."
          }
        },
        {
          term: "I didn't have enough time",
          explanation:
            "No me alcanzó el tiempo. El tiempo disponible no bastó para hacer la tarea.",
          literal: "no tuve suficiente tiempo",
          useWhen:
            "La ventana de tiempo se cerró antes de que pudiera terminar o empezar.",
          avoidWhen:
            "Simplemente se le olvidó. Esta frase habla de tiempo insuficiente, no de memoria.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["ran out of time", "not enough time", "before they closed", "too late"],
          example: {
            target: "I didn't have enough time to call.",
            translation: "No me alcanzó el tiempo para llamar."
          }
        },
        {
          term: "manage to + verb",
          explanation:
            "Alcanzar a + infinitivo: lograr hacer algo a tiempo.",
          literal: "lograr hacer",
          useWhen:
            "La oportunidad se podía cerrar y usted alcanzó o no alcanzó a hacer la acción.",
          avoidWhen:
            "Habla de capacidad general. “I can swim” no es lo mismo que “I managed to swim across before dark.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["managed to", "didn't manage to", "in time", "get to"],
          example: {
            target: "I didn't manage to call you.",
            translation: "No alcancé a llamarte."
          }
        },
        {
          term: "managed",
          explanation:
            "Logró o alcanzó a hacer algo. El pasado de manage es regular.",
          literal: "logró",
          useWhen:
            "Reporta que alguien alcanzó a hacer algo antes de que fuera tarde.",
          avoidWhen:
            "Quiere decir administrar un negocio. Manage también significa manejar o gestionar, pero no es esta escena.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["did manage", "didn't manage", "got to", "in time"],
          example: {
            target: "I managed to send the message.",
            translation: "Alcancé a mandar el mensaje."
          }
        },
        {
          term: "do the numbers",
          explanation:
            "Hacer cuentas. Calcular si la plata, el tiempo o las cantidades alcanzan.",
          literal: "hacer los números",
          useWhen:
            "Está calculando un presupuesto o plan de manera práctica.",
          avoidWhen:
            "Necesita contabilidad formal. Esto es cálculo cotidiano.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["work out the budget", "calculate", "budget", "make it last"],
          example: {
            target: "Let's do the numbers so it lasts.",
            translation: "Hagamos cuentas para que alcance."
          }
        },
        {
          term: "make it last",
          explanation:
            "Hacer que alcance o que dure. Muy útil para plata, comida, gasolina o tiempo.",
          literal: "hacerlo durar",
          useWhen:
            "Quiere estirar un recurso hasta una fecha o necesidad.",
          avoidWhen:
            "Se trata de llegar físicamente a un lugar. Ahí use reach or get to.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["last until", "stretch", "budget", "enough"],
          example: {
            target: "Let's make it last until Monday.",
            translation: "Hagamos que alcance hasta el lunes."
          }
        }
      ],
      note:
        "Reach casi nunca es la traducción correcta de los usos más útiles de alcanzar. Para plata: “I don't have enough money.” Para tiempo: “I didn't have enough time” o “I ran out of time.” Para “alcancé a llamar”: “I managed to call.” Para que algo alcance hasta una fecha: “make it last until…”.",
      culture: [
        {
          label: "Enough hace el trabajo de alcanzar",
          body:
            "Cuando el español dice que la plata o el tiempo no alcanza, el inglés suele preguntar si hay enough. Es menos visual que reach, pero mucho más natural."
        },
        {
          label: "Manage to lleva una oportunidad cerrándose",
          body:
            "“I managed to…” sugiere que había dificultad, presión o poco tiempo. Por eso traduce tan bien “alcancé a…”. No habla sólo de habilidad, sino de lograrlo antes de perder la oportunidad."
        },
        {
          label: "Last es duración útil",
          body:
            "Para recursos que deben durar hasta una fecha, “last” es clave: make the money last, make the food last, will the gas last? Es el alcanzar de supervivencia práctica."
        },
        {
          label: "Hacer cuentas no necesita drama",
          body:
            "“Let's do the numbers” suena práctico, no vergonzoso. En conversaciones de dinero, una frase clara puede quitar tensión porque convierte la preocupación en cálculo."
        }
      ],
      pitfalls: [
        {
          mistake: "“The money doesn't reach me.”",
          whyItFails:
            "Es un calco de “no me alcanza la plata.” En inglés suena físico o confuso, no como falta de presupuesto.",
          sayInstead: "I don't have enough money."
        },
        {
          mistake: "“The time didn't reach me.”",
          whyItFails:
            "Para tiempo insuficiente, el inglés usa “didn't have enough time” o “ran out of time.”",
          sayInstead: "I didn't have enough time to call."
        },
        {
          mistake: "“I didn't reach to call you.”",
          whyItFails:
            "“Alcanzar a + infinitivo” no se traduce con reach to. La frase inglesa es manage to.",
          sayInstead: "I didn't manage to call you."
        },
        {
          mistake: "“Let's make accounts so the money reaches.”",
          whyItFails:
            "“Hacer cuentas” y “para que alcance” necesitan frases idiomáticas en inglés: do the numbers and make it last.",
          sayInstead: "Let's do the numbers so it lasts."
        }
      ],
      variations: [
        {
          form: "I don't have enough money.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La plata no alcanza para la necesidad."
        },
        {
          form: "We don't have enough for everything.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "El presupuesto del grupo no cubre todo."
        },
        {
          form: "I didn't have enough time.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "El tiempo disponible no bastó."
        },
        {
          form: "I didn't manage to call you.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "No alcanzó a llamar antes de que pasara la oportunidad."
        },
        {
          form: "Let's do the numbers so it lasts.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Calcular para que un recurso alcance."
        }
      ],
      prompt: "Diego says “we don't have enough for everything.” ¿Qué quiere decir?",
      choices: [
        "No pueden alcanzar físicamente los productos del estante.",
        "La plata no alcanza para cubrir todos los productos.",
        "No entienden qué significa la palabra supermercado."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase traduce “no alcancé a llamarte”?",
          choices: [
            "I didn't manage to call you.",
            "I didn't develop to call you.",
            "I didn't signify calling you."
          ],
          answer: 0,
          tests: "manage to for alcanzar a + infinitive"
        },
        {
          prompt: "¿Cuál frase traduce “no me alcanza la plata”?",
          choices: [
            "The money doesn't reach me.",
            "I don't have enough money.",
            "The money develops badly."
          ],
          answer: 1,
          tests: "enough money, not physical reach"
        },
        {
          prompt: "¿Qué significa “I didn't have enough time”?",
          choices: [
            "El tiempo disponible no bastó para la tarea.",
            "El reloj estaba demasiado alto para tocarlo.",
            "La palabra time cambió de sentido regional."
          ],
          answer: 0,
          tests: "enough time for no me alcanzó el tiempo"
        },
        {
          prompt: "¿Por qué Diego dice “so it lasts until Monday”?",
          choices: [
            "Quiere que money signifique otra cosa en inglés.",
            "Quiere desarrollar un taller con la plata.",
            "Quiere que la plata dure hasta la próxima necesidad."
          ],
          answer: 2,
          tests: "last until for para que alcance"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/55-developing-meaning-and-growth.js");
