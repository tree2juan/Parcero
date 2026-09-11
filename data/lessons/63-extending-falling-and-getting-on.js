/*
 * Lesson block: extending / falling and getting on.
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
 * The three verbs here — caer, llevarse and contar — cover first impressions,
 * getting along, and telling or counting. The two directions are mirrors: same
 * number of dialogue turns, vocabulary entries, culture notes, pitfalls,
 * variations and practice questions, and the same optional slots filled on the
 * same rows. That is enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "saying-someone-strikes-you-well-in-tumaco",
    level: "Extending · Social impressions",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    verb: "caer",
    review: "pending",
    es: {
      title: "Saying that you like someone",
      situation:
        "Alex is in Tumaco, on the terrace of a house facing the sea, after meeting a friend's brother. The conversation is not romantic; they are only comparing first impressions. You need to say that a person strikes you well without using a phrase that sounds like attraction.",
      setting: {
        who: "Luisa is Alex's friend and has just introduced him to her brother Andrés. Alex wants to say the meeting felt easy without sounding like he is flirting.",
        what: "A relaxed first-impression conversation: who strikes whom well, who rubs someone the wrong way, and why gustar with a person is dangerous here.",
        when: "Early evening, after a shared snack and before everyone moves inside because the breeze is getting stronger.",
        where: "Tumaco, on a family terrace near the water, with chairs pulled into a loose circle after visitors have left.",
        why: "Because “caer bien” and “caer mal” are some of the most useful social phrases in Colombian Spanish. They let you express like or dislike as an impression, not attraction."
      },
      address: {
        form: "tú",
        who: "Luisa and Alex use tú as friends of the same age talking after a casual visit.",
        why: "The point is personal but not formal. For you, tú keeps the conversation warm while the grammar does the careful work of avoiding a romantic reading.",
        ifYouSwitch:
          "Usted would add distance between friends here. Vos is not needed for this scene, and inventing local flavor would distract from the phrase you actually need."
      },
      dialogue: [
        {
          speaker: "Luisa",
          target: "Bueno, dime la verdad: ¿cómo te cayó mi hermano?",
          translation: "Okay, tell me the truth: how did my brother strike you?",
          pronunciation: "BWEH-noh, DEE-meh lah ber-DAD: KOH-moh teh kah-YOH mee er-MAH-noh",
          literal: "Good, tell-me the truth: how to-you fell my brother?",
          why: "“¿Cómo te cayó?” asks for an impression of a person. It is not about literal falling; it is the social use that matters."
        },
        {
          speaker: "Alex",
          target: "Me cayó muy bien. Es tranquilo y pregunta sin juzgar.",
          translation: "I liked him. He's calm and asks without judging.",
          pronunciation: "meh kah-YOH mwee byen. es tran-KEE-loh ee preh-GOON-tah seen hoos-GAR",
          literal: "To-me he-fell very well. He-is calm and asks without judging.",
          why: "This is the safe Colombian way to say you like someone as a person. “Me gusta tu hermano” could sound like attraction."
        },
        {
          speaker: "Luisa",
          target: "Menos mal. A veces a la gente le cae mal de entrada.",
          translation: "Good thing. Sometimes people dislike him at first.",
          pronunciation: "MEH-nos mal. ah BEH-ses ah lah HEN-teh leh kah-eh mal deh en-TRAH-dah",
          literal: "Less bad. Sometimes to the people he-falls badly from entrance.",
          why: "“Le cae mal” is the negative version: he gives people a bad impression. The person liked or disliked is the grammatical subject."
        },
        {
          speaker: "Alex",
          target: "No, para nada. Me cae bien porque escucha.",
          translation: "No, not at all. I like him because he listens.",
          pronunciation: "noh, PAH-rah NAH-dah. meh KAH-eh byen POR-keh es-KOO-chah",
          literal: "No, for nothing. To-me he-falls well because he-listens.",
          why: "The pattern works like gustar: the liked person controls the verb form. One person “me cae”; several people “me caen.”"
        },
        {
          speaker: "Luisa",
          target: "Yo caí en cuenta tarde de eso.",
          translation: "I realized that late.",
          pronunciation: "yoh kah-EE en KWEN-tah TAR-deh deh EH-soh",
          literal: "I fell into account late of that.",
          why: "“Caer en cuenta” means to realize. The accent in caí marks the past tense and keeps it from being confused on the page."
        },
        {
          speaker: "Alex",
          target: "Y yo casi me caí bajando la escalera, pero eso sí fue literal.",
          translation: "And I almost fell going down the stairs, but that one was literal.",
          pronunciation: "ee yoh KAH-see meh kah-EE bah-HAN-doh lah es-kah-LEH-rah, PEH-roh EH-soh see fue lee-teh-RAL",
          literal: "And I almost myself fell going-down the stairs, but that yes was literal.",
          why: "“Me caí” is the literal fall. The same verb family moves from social impression to real falling to realizing; context decides."
        }
      ],
      vocabulary: [
        {
          term: "caer bien",
          explanation:
            "To like someone as a person, or for someone to make a good impression on you. It patterns like gustar.",
          literal: "to fall well",
          useWhen:
            "You mean a person strikes you well: friendly, easy to talk to, trustworthy, pleasant.",
          avoidWhen:
            "You mean romantic or physical attraction. Then gustar may be right, but it says more than social liking.",
          register: "neutral spoken",
          region: "General Colombian and essential in everyday speech.",
          related: ["caer mal", "gustar", "agradar", "simpatizar"],
          example: {
            target: "Me cayó muy bien tu hermano.",
            translation: "I really liked your brother."
          }
        },
        {
          term: "caer mal",
          explanation:
            "To dislike someone as an impression, or for someone to rub you the wrong way.",
          literal: "to fall badly",
          useWhen:
            "A person feels unpleasant, arrogant, false, intense, or simply not your kind of person.",
          avoidWhen:
            "You need a serious moral judgment. Caer mal can be just chemistry, not a full accusation.",
          register: "neutral spoken",
          region: "General Colombian.",
          related: ["no caer bien", "chocar", "parecer pesado", "dar mala espina"],
          example: {
            target: "Ese man me cae mal.",
            translation: "I don't like that guy."
          }
        },
        {
          term: "me cae / me caen",
          explanation:
            "The verb agrees with the person or people making the impression, not with the person who feels it.",
          literal: "he falls to me / they fall to me",
          useWhen:
            "You need the gustar-like grammar: one person “me cae”, two people “me caen.”",
          avoidWhen:
            "You are tempted to say “yo caigo bien a él” for “I like him.” That reverses the direction.",
          register: "grammar pattern",
          region: "Universal Spanish.",
          related: ["me gusta", "me parece", "me interesa", "me importa"],
          example: {
            target: "Tus amigos me caen bien.",
            translation: "I like your friends."
          }
        },
        {
          term: "gustar + persona",
          explanation:
            "With a person, gustar can imply attraction. That is why caer bien is safer for ordinary social liking.",
          literal: "to please + person",
          useWhen:
            "You intentionally mean attraction, a crush, or romantic interest.",
          avoidWhen:
            "You only mean that someone seems nice, easy, or pleasant. Then use caer bien.",
          register: "social warning",
          region: "General Colombian.",
          related: ["me gusta", "me atrae", "me cae bien", "me parece querido"],
          example: {
            target: "Me cae bien mi jefe.",
            translation: "I like my boss as a person."
          }
        },
        {
          term: "caerse",
          explanation:
            "To fall down physically. The reflexive pronoun is normal when a person falls.",
          literal: "to fall oneself",
          useWhen:
            "Someone trips, slips, falls from a chair, or nearly falls on stairs.",
          avoidWhen:
            "You are talking about liking someone. Then use caer bien or caer mal.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["tropezarse", "resbalarse", "caída", "golpearse"],
          example: {
            target: "Casi me caí en la escalera.",
            translation: "I almost fell on the stairs."
          }
        },
        {
          term: "caer en cuenta",
          explanation:
            "To realize. Literally you fall into account, but the meaning is noticing something clearly.",
          literal: "to fall into account",
          useWhen:
            "You suddenly understand, notice, or connect something you had missed.",
          avoidWhen:
            "You mean counting numbers. That is contar, not cuenta here.",
          register: "neutral",
          region: "Very common in Colombia.",
          related: ["darse cuenta", "notar", "entender", "captar"],
          example: {
            target: "Caí en cuenta tarde.",
            translation: "I realized late."
          }
        },
        {
          term: "de entrada",
          explanation:
            "At first, from the start. Useful when a first impression changes later.",
          literal: "from entrance",
          useWhen:
            "You are talking about the first reaction before knowing someone well.",
          avoidWhen:
            "The impression came after months. Then use con el tiempo or después.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["al principio", "de una", "primero", "apenas llegó"],
          example: {
            target: "Me cayó bien de entrada.",
            translation: "I liked him right away."
          }
        }
      ],
      note:
        "The social prize here is caer bien and caer mal. Colombian Spanish does not normally use gustar for ordinary liking of people, because “me gusta tu hermano” can sound like attraction. Say “me cae bien tu hermano” for social liking. Keep the other meanings separate: “me caí” is a literal fall, and “caí en cuenta” is realizing something.",
      culture: [
        {
          label: "Social liking is not attraction",
          body:
            "English uses “like” for friends, bosses, cousins and crushes. Spanish makes you be more careful. “Me cae bien” protects you from accidentally turning a harmless impression into romantic interest."
        },
        {
          label: "First impressions are fair conversation",
          body:
            "Colombians may ask “¿cómo te cayó?” after introducing you to someone. It is not a demand for a deep judgment. It asks whether the social chemistry felt easy, awkward, heavy or pleasant."
        },
        {
          label: "Tumaco is setting, not decoration",
          body:
            "The terrace, breeze and family visit place the scene without inventing local slang. The phrase “caer bien” is general Colombian Spanish and does not need regional costume."
        },
        {
          label: "The grammar points away from English",
          body:
            "If Andrés made a good impression on Alex, Spanish says Andrés “fell well” to Alex. The person you like controls the verb, just as the thing you like controls gustar."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “me gusta mi jefe” when you mean you like your boss as a person",
          whyItFails:
            "With a person, gustar can imply attraction. If you only mean the person is pleasant or easy to work with, caer bien is the safer Colombian phrasing.",
          sayInstead: "Me cae bien mi jefe."
        },
        {
          mistake: "Saying “yo caigo bien tu hermano” for “I like your brother”",
          whyItFails:
            "The direction is reversed. In this pattern, the brother makes the impression and the feeling lands on you.",
          sayInstead: "Tu hermano me cae bien."
        },
        {
          mistake: "Writing “me cai” without the accent in the past tense",
          whyItFails:
            "The preterite is “caí.” The accent marks the stress and makes the form readable as the literal fall or realisation.",
          sayInstead: "Me caí en la escalera."
        },
        {
          mistake: "Hearing “caí en cuenta” as a physical fall",
          whyItFails:
            "The phrase is idiomatic: it means you realized something. Cuenta here is account or awareness, not the floor.",
          sayInstead: "Caí en cuenta tarde."
        }
      ],
      variations: [
        {
          form: "Me cae bien tu hermano.",
          register: "neutral spoken",
          region: "General Colombian",
          whenToUse: "Saying you like someone socially, without attraction."
        },
        {
          form: "Ese man me cae mal.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "A blunt informal dislike of someone's vibe."
        },
        {
          form: "Tus amigos me caen bien.",
          register: "neutral spoken",
          region: "General Colombian",
          whenToUse: "Several people made a good impression."
        },
        {
          form: "Casi me caí en la escalera.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "A literal fall or near-fall."
        },
        {
          form: "Caí en cuenta muy tarde.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "You realized something after the moment passed."
        }
      ],
      prompt: "Alex says “me cayó muy bien tu hermano.” What is he saying?",
      choices: [
        "He found the brother pleasant as a person, without implying attraction.",
        "He fell physically onto the brother during the family visit.",
        "He is saying the brother taught him how to count numbers."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence avoids implying attraction to a boss?",
          choices: [
            "Me gusta mi jefe en el trabajo.",
            "Me cae bien mi jefe en el trabajo.",
            "Me caí con mi jefe en el trabajo."
          ],
          answer: 1,
          tests: "caer bien for social liking, not gustar"
        },
        {
          prompt: "Which sentence marks a literal fall in the past?",
          choices: [
            "Me caí bajando la escalera.",
            "Me cae bien la escalera.",
            "Caí en cuenta la escalera."
          ],
          answer: 0,
          tests: "me caí with accent for literal falling"
        },
        {
          prompt: "Which sentence means “I realized late”?",
          choices: [
            "Me cayó mal muy tarde.",
            "Me caí al piso tarde.",
            "Caí en cuenta muy tarde."
          ],
          answer: 2,
          tests: "caer en cuenta as realize"
        }
      ]
    },
    en: {
      title: "Decir que alguien te cae bien",
      situation:
        "Alejandra está en Miami, en el balcón de una casa, después de conocer al hermano de una amiga. La conversación no es romántica: sólo están comparando primeras impresiones. Usted necesita distinguir “like,” “get a good impression,” y “fall.”",
      setting: {
        who: "Luisa es amiga de Alejandra y acaba de presentarle a su hermano Andrés. Alejandra quiere decir que la reunión se sintió fácil sin sonar coqueta.",
        what: "Una conversación relajada sobre primeras impresiones: quién le cae bien a quién, quién cae mal, y por qué “like” puede necesitar contexto.",
        when: "Al comienzo de la noche, después de comer algo y antes de que todos entren porque sube la brisa.",
        where: "Miami, en un balcón familiar cerca del agua, con sillas agrupadas después de la visita.",
        why: "Porque el inglés usa “like” para amigos, jefes y atracción. Usted tiene que añadir contexto cuando en español diría “me cae bien.”"
      },
      address: {
        form: "mixed",
        who: "Luisa y Alejandra usan el mismo “you”; la amistad aparece en el tono y en hablarse por el nombre.",
        why: "El inglés no tiene tú ni usted para resolver este matiz. La diferencia social está en escoger “I liked him,” “he seems nice,” o una frase más romántica.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Si la frase puede sonar romántica, agregue contexto: “as a person” o “he seems nice.”"
      },
      dialogue: [
        {
          speaker: "Luisa",
          target: "Okay, tell me the truth: how did my brother strike you?",
          translation: "Bueno, dígame la verdad: ¿cómo le cayó mi hermano?",
          pronunciation: "ou-KEI, tel mi da truth: jau did mai BRA-der straik yu",
          literal: "Bueno, dígame la verdad: ¿cómo la golpeó mi hermano?",
          why: "“How did he strike you?” pregunta por impresión, no por golpe físico. Es una forma un poco más elaborada de preguntar cómo le cayó alguien."
        },
        {
          speaker: "Alejandra",
          target: "I liked him. He seems calm and easy to talk to.",
          translation: "Me cayó bien. Parece tranquilo y fácil para hablar.",
          pronunciation: "ai laikt jim. ji sims kam and I-zi tu tok tu",
          literal: "Me gustó él. Parece calmado y fácil de hablarle.",
          why: "“I liked him” puede ser social o romántico según contexto. Para evitar duda, “he seems nice” o “as a person” ayuda mucho."
        },
        {
          speaker: "Luisa",
          target: "Good. Sometimes he gives people a bad first impression.",
          translation: "Menos mal. A veces le cae mal a la gente de entrada.",
          pronunciation: "gud. SOM-taims ji guivs PI-pol a bad ferst im-PRE-shon",
          literal: "Bien. A veces él da a la gente una mala primera impresión.",
          why: "El inglés no tiene un verbo exacto tan frecuente como “caer mal.” Dice que alguien “gives a bad impression” o “rubs people the wrong way.”"
        },
        {
          speaker: "Alejandra",
          target: "Not at all. I like him as a person because he listens.",
          translation: "Para nada. Me cae bien como persona porque escucha.",
          pronunciation: "not at ol. ai laik jim az a PER-son bi-KOZ ji LI-sens",
          literal: "No en absoluto. Me gusta él como persona porque escucha.",
          why: "“As a person” cierra la lectura romántica. Es una reparación muy útil cuando “like” queda ambiguo."
        },
        {
          speaker: "Luisa",
          target: "I realized that late.",
          translation: "Caí en cuenta tarde de eso.",
          pronunciation: "ai RI-a-laizd dat leit",
          literal: "Me di cuenta de eso tarde.",
          why: "Para “caer en cuenta,” el inglés normal usa “realize.” No hay caída física ni cuenta numérica."
        },
        {
          speaker: "Alejandra",
          target: "And I almost fell on the stairs, but that one was literal.",
          translation: "Y casi me caí en la escalera, pero eso sí fue literal.",
          pronunciation: "and ai OL-moust fel on da sters, bat dat uan uaz LI-te-ral",
          literal: "Y casi caí en las escaleras, pero esa sí fue literal.",
          why: "“Fell” es la caída física. El inglés separa claramente “fall,” “realize,” y “like someone as a person.”"
        }
      ],
      vocabulary: [
        {
          term: "like someone as a person",
          explanation:
            "Caerle bien alguien. La frase aclara que habla de impresión social, no de atracción.",
          literal: "gustarle alguien como persona",
          useWhen:
            "Quiere decir que una persona le parece agradable, fácil, honesta o buena gente.",
          avoidWhen:
            "Quiere declarar atracción romántica. Ahí “I like him” sin aclaración puede servir.",
          register: "neutro hablado",
          region: "Inglés universal.",
          related: ["he seems nice", "get a good impression", "like him", "as a person"],
          example: {
            target: "I like him as a person.",
            translation: "Me cae bien."
          }
        },
        {
          term: "give a bad first impression",
          explanation:
            "Caer mal de entrada o dar mala impresión al principio.",
          literal: "dar una mala primera impresión",
          useWhen:
            "Alguien no parece agradable al comienzo, aunque quizá cambie después.",
          avoidWhen:
            "Quiere decir que odia a la persona. Esta frase puede ser más suave que eso.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["rub people the wrong way", "seem off", "come across badly", "bad vibe"],
          example: {
            target: "He gives people a bad first impression.",
            translation: "Le cae mal a la gente de entrada."
          }
        },
        {
          term: "he seems nice",
          explanation:
            "Parece querido o me cae bien. Es una forma segura de hablar de impresión sin romance.",
          literal: "él parece agradable",
          useWhen:
            "Acaba de conocer a alguien y quiere dar una opinión social cuidadosa.",
          avoidWhen:
            "Ya conoce profundamente a la persona y necesita una afirmación más fuerte.",
          register: "neutro hablado",
          region: "Inglés universal.",
          related: ["he seems calm", "she seems friendly", "nice guy", "good impression"],
          example: {
            target: "He seems nice.",
            translation: "Me cae bien."
          }
        },
        {
          term: "I like him",
          explanation:
            "Puede ser “me cae bien” o “me gusta,” según contexto. El inglés no obliga a escoger.",
          literal: "me gusta él",
          useWhen:
            "El contexto deja claro si habla de amistad, respeto, gusto social o atracción.",
          avoidWhen:
            "Hay riesgo de malentendido romántico. Entonces añada “as a person” o use “he seems nice.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I like her", "I liked them", "as a person", "have a crush"],
          example: {
            target: "I liked him as a person.",
            translation: "Me cayó bien."
          }
        },
        {
          term: "fall / fell",
          explanation:
            "Caer físicamente. “Fell” es el pasado de “fall.”",
          literal: "caer / cayó",
          useWhen:
            "Alguien se tropieza, resbala, cae de una silla o casi cae en una escalera.",
          avoidWhen:
            "Habla de darse cuenta o de que alguien le cae bien. Esas ideas usan otras frases en inglés.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["trip", "slip", "fall down", "fall over"],
          example: {
            target: "I almost fell on the stairs.",
            translation: "Casi me caí en la escalera."
          }
        },
        {
          term: "realize",
          explanation:
            "Darse cuenta o caer en cuenta. Es entender algo que no había visto.",
          literal: "darse cuenta",
          useWhen:
            "De pronto entiende, nota o conecta algo que se le había pasado.",
          avoidWhen:
            "Está contando números. Eso es “count,” no “realize.”",
          register: "neutro",
          region: "Inglés británico; en inglés americano se escribe “realize.”",
          related: ["notice", "figure out", "understand", "see"],
          example: {
            target: "I realized that late.",
            translation: "Caí en cuenta tarde."
          }
        },
        {
          term: "at first",
          explanation:
            "De entrada o al principio. Ubica una impresión inicial que puede cambiar.",
          literal: "al comienzo",
          useWhen:
            "Habla de la primera reacción antes de conocer bien a alguien.",
          avoidWhen:
            "La impresión llegó después de meses. Entonces “over time” encaja mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["right away", "initially", "first impression", "from the start"],
          example: {
            target: "I liked him at first.",
            translation: "Me cayó bien de entrada."
          }
        }
      ],
      note:
        "El inglés “like” cubre dos zonas que el español separa. “I like my boss” puede ser totalmente profesional, pero en español “me gusta mi jefe” puede sonar a atracción. Para traducir “caer bien,” use contexto: “he seems nice,” “I liked him as a person,” o “we got a good impression.” Para la caída física use “fall/fell,” y para “caer en cuenta” use “realize/realize.”",
      culture: [
        {
          label: "El contexto salva a “like”",
          body:
            "El inglés permite que “I like him” sea social o romántico. Si hay riesgo de doble lectura, un hablante agrega “as a person,” “he seems nice,” o cambia la frase. La aclaración no suena torpe; suena precisa."
        },
        {
          label: "Las primeras impresiones se comentan",
          body:
            "Después de presentar a alguien, preguntar “how did he strike you?” puede sonar natural. No exige un juicio definitivo. Sólo abre espacio para decir si la energía social fue fácil o incómoda."
        },
        {
          label: "Una frase inglesa no cubre toda la colombiana",
          body:
            "“Me cae bien” no tiene una traducción única perfecta. A veces será “I like him,” a veces “he seems nice,” y a veces “we get along.” La escena decide."
        },
        {
          label: "No confunda “realize” con contar",
          body:
            "“Caer en cuenta” no tiene cuenta numérica en inglés. Es “realize” o “realize.” Si usted dice “I fell in account,” nadie llega al significado social."
        }
      ],
      pitfalls: [
        {
          mistake: "“My boss likes me”",
          whyItFails:
            "Eso invierte la dirección si usted quería decir que su jefe le cae bien. Además no aclara la diferencia entre impresión social y gusto romántico.",
          sayInstead: "I like my boss as a person."
        },
        {
          mistake: "“I fell well your brother.”",
          whyItFails:
            "Es un calco de “me cayó bien.” El inglés no usa “fall well” para impresiones sociales.",
          sayInstead: "I liked your brother as a person."
        },
        {
          mistake: "“I fell in account late.”",
          whyItFails:
            "Calca “caí en cuenta.” En inglés la idea es darse cuenta, no caer ni hacer una cuenta.",
          sayInstead: "I realized that late."
        },
        {
          mistake: "“I liked with the stairs.”",
          whyItFails:
            "Para una caída física necesita “fell.” “Like” no pertenece a la escena de tropezarse.",
          sayInstead: "I almost fell on the stairs."
        }
      ],
      variations: [
        {
          form: "I liked your brother as a person.",
          register: "neutro hablado",
          region: "Inglés universal",
          whenToUse: "Decir que alguien le cayó bien sin implicar atracción."
        },
        {
          form: "That guy rubs me the wrong way.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Una manera informal de decir que alguien le cae mal."
        },
        {
          form: "Your friends seem nice.",
          register: "neutro hablado",
          region: "Inglés universal",
          whenToUse: "Varias personas dieron buena impresión."
        },
        {
          form: "I almost fell on the stairs.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una caída literal o casi caída."
        },
        {
          form: "I realized it too late.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Darse cuenta después de que pasó el momento."
        }
      ],
      prompt: "Alejandra says “I liked him as a person.” ¿Qué está diciendo?",
      choices: [
        "Que el hermano le dio buena impresión sin implicar atracción.",
        "Que se cayó físicamente encima del hermano en la visita.",
        "Que el hermano le enseñó a contar números en inglés."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase evita una lectura romántica sobre el jefe?",
          choices: [
            "I have a crush on my boss.",
            "I like my boss as a person.",
            "My boss falls well to me."
          ],
          answer: 1,
          tests: "as a person for social liking"
        },
        {
          prompt: "¿Cuál frase marca una caída literal en pasado?",
          choices: [
            "I almost fell on the stairs.",
            "I liked the stairs as a person.",
            "I realized the stairs too late."
          ],
          answer: 0,
          tests: "fell for literal falling"
        },
        {
          prompt: "¿Cuál frase significa “caí en cuenta tarde”?",
          choices: [
            "I disliked him at first.",
            "I fell down too late.",
            "I realized it too late."
          ],
          answer: 2,
          tests: "realize for caer en cuenta"
        }
      ]
    }
  },
  {
    id: "getting-on-with-in-laws-in-barichara",
    level: "Extending · Social impressions",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "courteous",
    verb: "llevarse",
    review: "pending",
    es: {
      title: "Getting along with the in-laws",
      situation:
        "Maya spends a weekend in Barichara with her partner's family. After lunch, an aunt asks how things have gone with the in-laws. You need to distinguish getting along with someone, carrying a suitcase, and having spent time living in a place.",
      setting: {
        who: "Tía Mercedes is friendly but direct, and Maya is the visiting partner who wants to answer warmly without pretending everything is perfect.",
        what: "A family patio conversation about getting on with in-laws, carrying things to the room, and how long someone has been in the relationship.",
        when: "After lunch, when chairs are still around the patio and everyone is deciding whether to rest or walk.",
        where: "Barichara, in a stone patio of a family house, with the afternoon slow enough for delicate questions.",
        why: "Because llevarse bien is a social relationship verb, not the same as plain llevar for carrying or llevar plus time for how long something has been true."
      },
      address: {
        form: "usted",
        who: "Maya and Tía Mercedes use usted because they are affectionate but not yet intimate.",
        why: "This is family, but it is new family. For you, usted lets Maya be warm without assuming closeness with her partner's aunt.",
        ifYouSwitch:
          "Tú might come later if the aunt invites it. Starting there could sound rushed. Vos does not fit the careful family politeness of this scene."
      },
      dialogue: [
        {
          speaker: "Tía Mercedes",
          target: "Mija, ¿usted se lleva bien con sus suegros?",
          translation: "Dear, do you get along well with your in-laws?",
          pronunciation: "MEE-hah, oos-TED seh YEH-bah byen kon soos SWEH-gros",
          literal: "My daughter, you carry-yourself well with your in-laws?",
          why: "“Llevarse bien con” means to get on with someone. The pronoun and con are part of the social pattern."
        },
        {
          speaker: "Maya",
          target: "Sí, me llevo bien con ellos, aunque todavía me da pena.",
          translation: "Yes, I get along with them, although I still feel shy.",
          pronunciation: "see, meh YEH-boh byen kon EH-yos, AUN-keh toh-dah-BEE-ah meh dah PEH-nah",
          literal: "Yes, myself I-carry well with them, although still it gives me embarrassment.",
          why: "Me llevo bien is first person. It says the relationship works, not that Maya is carrying her in-laws anywhere."
        },
        {
          speaker: "Tía Mercedes",
          target: "Eso se nota. Usted lleva dos años con Daniel, ¿cierto?",
          translation: "It shows. You've been with Daniel for two years, right?",
          pronunciation: "EH-soh seh NOH-tah. oos-TED YEH-bah dos AH-nyos kon dah-NYEL, SYER-toh",
          literal: "That itself notices. You carry two years with Daniel, true?",
          why: "Llevar plus time is a different structure: it tells how long something has been true. Do not replace it automatically with estar."
        },
        {
          speaker: "Maya",
          target: "Sí, y llevo seis meses viniendo a la casa.",
          translation: "Yes, and I've been coming to the house for six months.",
          pronunciation: "see, ee YEH-boh seis MEH-ses bee-NYEN-doh ah lah KAH-sah",
          literal: "Yes, and I-carry six months coming to the house.",
          why: "“Llevo seis meses viniendo” is the Colombian learner's prize: how long the ongoing situation has lasted."
        },
        {
          speaker: "Tía Mercedes",
          target: "Entonces lleve esa mochila al cuarto y descanse.",
          translation: "Then take that backpack to the room and rest.",
          pronunciation: "en-TON-ses YEH-beh EH-sah moh-CHEE-lah al KWAR-toh ee des-KAN-seh",
          literal: "Then carry that backpack to-the room and rest.",
          why: "Plain llevar returns to the physical meaning: take or carry the backpack. It is not the relationship verb."
        },
        {
          speaker: "Maya",
          target: "Gracias. Me llevo bien con la familia y llevo la mochila ahora.",
          translation: "Thanks. I get along with the family, and I'll take the backpack now.",
          pronunciation: "GRAH-syas. meh YEH-boh byen kon lah fah-MEE-lyah ee YEH-boh lah moh-CHEE-lah ah-OH-rah",
          literal: "Thanks. Myself I-carry well with the family and I-carry the backpack now.",
          why: "The final line contrasts llevarse bien with plain llevar. Same root, different structure, different meaning."
        }
      ],
      vocabulary: [
        {
          term: "llevarse bien con",
          explanation:
            "To get along with someone. It describes the quality of a relationship, not movement or carrying.",
          literal: "to carry oneself well with",
          useWhen:
            "Talking about in-laws, roommates, coworkers, neighbors, classmates, or a partner's family.",
          avoidWhen:
            "You mean physically carrying or taking something. Then use plain llevar.",
          register: "neutral spoken",
          region: "General Colombian and universal Spanish.",
          related: ["llevarse mal", "caer bien", "tratarse", "convivir"],
          example: {
            target: "Me llevo bien con mis suegros.",
            translation: "I get along well with my in-laws."
          }
        },
        {
          term: "llevarse mal con",
          explanation:
            "To get along badly with someone. It names a relationship that has friction.",
          literal: "to carry oneself badly with",
          useWhen:
            "There are repeated clashes, discomfort, or poor chemistry between people.",
          avoidWhen:
            "You only disliked a first impression. Caer mal may be more precise for that first reaction.",
          register: "neutral spoken",
          region: "General Colombian.",
          related: ["pelear", "chocar", "no entenderse", "caer mal"],
          example: {
            target: "No me llevo mal con nadie.",
            translation: "I don't get along badly with anyone."
          }
        },
        {
          term: "con alguien",
          explanation:
            "With someone. The con is required in the relationship pattern: llevarse bien con.",
          literal: "with someone",
          useWhen:
            "Naming the person or group the relationship is with.",
          avoidWhen:
            "You are using plain llevar with an object like a suitcase or document.",
          register: "grammar pattern",
          region: "Universal Spanish.",
          related: ["con mis suegros", "con ellos", "con mi jefe", "con los vecinos"],
          example: {
            target: "Me llevo bien con ellos.",
            translation: "I get along well with them."
          }
        },
        {
          term: "llevar + tiempo",
          explanation:
            "A structure for how long something has been going on: llevo dos años, lleva seis meses.",
          literal: "to carry time",
          useWhen:
            "You say how long you have lived, worked, studied, waited, or been in a relationship.",
          avoidWhen:
            "You are simply saying where you are right now. This structure measures duration up to now.",
          register: "neutral",
          region: "General Colombian and very frequent.",
          related: ["desde hace", "hace dos años", "llevo viviendo", "lleva esperando"],
          example: {
            target: "Llevo dos años con Daniel.",
            translation: "I've been with Daniel for two years."
          }
        },
        {
          term: "llevar",
          explanation:
            "To carry, take, or wear, depending on context. It is the plain verb, not the relationship phrase.",
          literal: "to carry / take",
          useWhen:
            "Taking a backpack to a room, carrying a bag, wearing clothes, or bringing something along.",
          avoidWhen:
            "You mean getting along with someone. Then use llevarse bien con.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["traer", "cargar", "tener puesto", "transportar"],
          example: {
            target: "Lleve la mochila al cuarto.",
            translation: "Take the backpack to the room."
          }
        },
        {
          term: "suegros",
          explanation:
            "In-laws, usually your partner's parents. The word can carry nerves before it carries conflict.",
          literal: "parents-in-law",
          useWhen:
            "Talking about your partner's mother and father as a pair.",
          avoidWhen:
            "You mean all relatives by marriage. Familia política may be broader.",
          register: "neutral",
          region: "General Colombian.",
          related: ["suegra", "suegro", "familia política", "cuñados"],
          example: {
            target: "Me llevo bien con mis suegros.",
            translation: "I get along with my in-laws."
          }
        },
        {
          term: "me da pena",
          explanation:
            "I feel embarrassed or shy. It often explains why a good relationship still feels careful.",
          literal: "it gives me shame",
          useWhen:
            "You feel shy asking, entering, speaking, or taking up space.",
          avoidWhen:
            "You mean pity for someone else. Pena can mean that too, but the frame changes.",
          register: "neutral",
          region: "Very common in Colombia.",
          related: ["me da vergüenza", "me da cosa", "soy tímido", "me apena"],
          example: {
            target: "Todavía me da pena.",
            translation: "I still feel shy."
          }
        }
      ],
      note:
        "Do not flatten every llevar into carry. “Me llevo bien con mis suegros” is relationship chemistry. “Llevo la mochila” is carrying or taking. “Llevo dos años acá” is duration up to now, and it is often more idiomatic than translating from English with estar. The pronoun and the preposition con are what make llevarse bien work.",
      culture: [
        {
          label: "In-laws can be a careful topic",
          body:
            "A Colombian family may ask directly how you are getting on with everyone, but that does not mean they expect a dramatic answer. A modest “me llevo bien” is warm without overpromising intimacy."
        },
        {
          label: "Barichara slows the scene down",
          body:
            "A patio after lunch gives people time to ask delicate questions gently. The setting is local without needing invented regional speech; the family dynamic does the work."
        },
        {
          label: "Duration is not just past time",
          body:
            "“Llevo dos años con Daniel” means the relationship began two years ago and continues now. That current relevance is why the structure is so useful."
        },
        {
          label: "Good manners can coexist with honesty",
          body:
            "Maya can say she gets along well and still admit she feels shy. Colombian politeness often leaves room for that kind of careful truth."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “llevo bien mis suegros” without se or con",
          whyItFails:
            "The relationship phrase needs both the pronoun and con. Without them, it sounds like you are carrying your in-laws well.",
          sayInstead: "Me llevo bien con mis suegros."
        },
        {
          mistake: "Using llevarse bien for carrying a suitcase",
          whyItFails:
            "A suitcase is not a relationship. For physical taking or carrying, use plain llevar.",
          sayInstead: "Llevo la maleta al cuarto."
        },
        {
          mistake: "Saying “he estado dos años acá” as the only way to express duration",
          whyItFails:
            "It can be understood, but Colombian Spanish very often uses llevar plus time for a situation continuing until now.",
          sayInstead: "Llevo dos años acá."
        },
        {
          mistake: "Confusing caer bien with llevarse bien",
          whyItFails:
            "Caer bien is an impression someone makes on you. Llevarse bien is how the relationship works over time.",
          sayInstead: "Me llevo bien con ellos."
        }
      ],
      variations: [
        {
          form: "Me llevo bien con mis suegros.",
          register: "neutral spoken",
          region: "General Colombian",
          whenToUse: "A relationship with in-laws works well."
        },
        {
          form: "No me llevo mal con nadie.",
          register: "neutral spoken",
          region: "General Colombian",
          whenToUse: "Softening the idea that there is no serious conflict."
        },
        {
          form: "Llevo dos años viviendo acá.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "A duration that began in the past and continues now."
        },
        {
          form: "Lleve la mochila al cuarto.",
          register: "polite neutral",
          region: "General Colombian",
          whenToUse: "Plain llevar: take or carry a physical object."
        },
        {
          form: "Nos llevamos bien desde el primer almuerzo.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "A relationship has worked well since the beginning."
        }
      ],
      prompt: "Maya says “me llevo bien con mis suegros.” What does she mean?",
      choices: [
        "She gets along well with her in-laws.",
        "She carries her in-laws to the room.",
        "She has been in town for two years."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence has the full relationship pattern?",
          choices: [
            "Llevo bien mis suegros.",
            "Me llevo bien con mis suegros.",
            "Me llevan bien mis suegros."
          ],
          answer: 1,
          tests: "llevarse bien con + person"
        },
        {
          prompt: "Which sentence uses llevar for duration?",
          choices: [
            "Llevo la mochila al cuarto.",
            "Me llevo bien con la tía.",
            "Llevo dos años viviendo acá."
          ],
          answer: 2,
          tests: "llevar + time for duration"
        },
        {
          prompt: "Which sentence is plain carrying, not a relationship?",
          choices: [
            "Llevo la maleta al cuarto.",
            "Me llevo bien con Daniel.",
            "Nos llevamos mal con ellos."
          ],
          answer: 0,
          tests: "plain llevar for carry or take"
        }
      ]
    },
    en: {
      title: "Llevarse bien con los suegros",
      situation:
        "Mariana pasa un fin de semana en Houston con la familia de su pareja. Después del almuerzo, una tía le pregunta cómo le ha ido con los suegros. Usted necesita distinguir “get along with,” “carry,” y “have been here for.”",
      setting: {
        who: "Aunt Mercedes es amable pero directa, y Mariana es la pareja visitante que quiere responder con calidez sin fingir confianza total.",
        what: "Una conversación de patio familiar sobre llevarse bien con los suegros, llevar cosas al cuarto y cuánto tiempo lleva en la relación.",
        when: "Después del almuerzo, cuando las sillas siguen alrededor de la mesa y todos deciden si descansan o salen.",
        where: "Houston, en el comedor de una casa familiar, con la sobremesa larga de un fin de semana.",
        why: "Porque el inglés separa “get along with” para relaciones, “carry/take” para objetos y “have been” para duración."
      },
      address: {
        form: "mixed",
        who: "Mariana y Aunt Mercedes usan el mismo “you”; la cortesía aparece en la pregunta completa y en el tono.",
        why: "El inglés no tiene usted para una tía política recién conocida. La distancia amable se logra con frases suaves, no con otro pronombre.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Puede sonar más cálida con “we get along” y más seca con respuestas demasiado cortas."
      },
      dialogue: [
        {
          speaker: "Aunt Mercedes",
          target: "Dear, do you get along with your in-laws?",
          translation: "Mija, ¿usted se lleva bien con sus suegros?",
          pronunciation: "dir, du yu guet a-LONG uid yor IN-loz",
          literal: "Querida, ¿usted consigue junto con sus suegros?",
          why: "“Get along with” es llevarse bien con alguien. El “with” es obligatorio para nombrar a la persona."
        },
        {
          speaker: "Mariana",
          target: "Yes, I get along with them, though I'm still shy.",
          translation: "Sí, me llevo bien con ellos, aunque todavía me da pena.",
          pronunciation: "yes, ai guet a-LONG uid dem, dou aim stil shai",
          literal: "Sí, consigo junto con ellos, aunque todavía estoy tímida.",
          why: "La frase describe la relación, no transporte. “Carry them well” sería un calco raro."
        },
        {
          speaker: "Aunt Mercedes",
          target: "It shows. You've been with Daniel for two years, right?",
          translation: "Eso se nota. Usted lleva dos años con Daniel, ¿cierto?",
          pronunciation: "it shouz. yuv bin uid DAN-yel for tu yirs, rait",
          literal: "Se nota. Usted ha estado con Daniel por dos años, ¿cierto?",
          why: "Para duración, el inglés usa presente perfecto: “you've been with Daniel for two years.” No usa “carry time.”"
        },
        {
          speaker: "Mariana",
          target: "Yes, and I've been coming to the house for six months.",
          translation: "Sí, y llevo seis meses viniendo a la casa.",
          pronunciation: "yes, and aiv bin CO-ming tu da jaus for siks months",
          literal: "Sí, y he estado viniendo a la casa por seis meses.",
          why: "“I've been coming” marca una actividad que empezó antes y sigue conectada con ahora. Traduce muy bien la estructura con llevar y tiempo."
        },
        {
          speaker: "Aunt Mercedes",
          target: "Then take that backpack to the room and rest.",
          translation: "Entonces lleve esa mochila al cuarto y descanse.",
          pronunciation: "den teik dat BAK-pak tu da rum and rest",
          literal: "Entonces tome esa mochila al cuarto y descanse.",
          why: "Para un objeto físico, el inglés usa “take” o “carry,” no “get along.” La mochila decide el verbo."
        },
        {
          speaker: "Mariana",
          target: "Thanks. I get along with the family, and I'll take the backpack now.",
          translation: "Gracias. Me llevo bien con la familia y llevo la mochila ahora.",
          pronunciation: "zanks. ai guet a-LONG uid da FA-mi-li, and ail teik da BAK-pak nau",
          literal: "Gracias. Me llevo con la familia y tomaré la mochila ahora.",
          why: "La línea contrasta “get along with” para relación y “take” para llevar un objeto."
        }
      ],
      vocabulary: [
        {
          term: "get along with",
          explanation:
            "Llevarse bien con alguien. Describe cómo funciona una relación.",
          literal: "conseguir junto con",
          useWhen:
            "Habla de suegros, compañeros de apartamento, colegas, vecinos, compañeros de clase o familia política.",
          avoidWhen:
            "Habla de cargar o llevar un objeto. Ahí use “carry” o “take.”",
          register: "neutro hablado",
          region: "Inglés universal.",
          related: ["get on with", "be on good terms with", "like each other", "relationship"],
          example: {
            target: "I get along with my in-laws.",
            translation: "Me llevo bien con mis suegros."
          }
        },
        {
          term: "not get along with",
          explanation:
            "Llevarse mal con alguien o no llevarse bien. Nombra una relación con fricción.",
          literal: "no conseguir junto con",
          useWhen:
            "Hay choques repetidos, incomodidad o mala convivencia.",
          avoidWhen:
            "Sólo habla de una primera impresión. Ahí “he rubbed me the wrong way” puede ser más preciso.",
          register: "neutro hablado",
          region: "Inglés universal; “get on with” es muy británico.",
          related: ["not get on with", "clash with", "have issues with", "rub the wrong way"],
          example: {
            target: "I don't get along badly with anyone.",
            translation: "No me llevo mal con nadie."
          }
        },
        {
          term: "with someone",
          explanation:
            "Con alguien. El “with” es obligatorio en “get along with.”",
          literal: "con alguien",
          useWhen:
            "Nombra la persona o grupo con quien funciona la relación.",
          avoidWhen:
            "Usa “take” con un objeto. No diga “take with my in-laws” para esta idea.",
          register: "de gramática patrón",
          region: "Inglés universal.",
          related: ["with my in-laws", "with them", "with my boss", "with the neighbors"],
          example: {
            target: "I get along with them.",
            translation: "Me llevo bien con ellos."
          }
        },
        {
          term: "have been + time",
          explanation:
            "Llevar más tiempo en una situación. El inglés usa presente perfecto con “for” o “since.”",
          literal: "haber estado + tiempo",
          useWhen:
            "Dice cuánto lleva viviendo, trabajando, esperando, estudiando o en una relación.",
          avoidWhen:
            "Sólo habla de dónde está ahora. Esta estructura mide duración hasta el presente.",
          register: "de gramática patrón",
          region: "Inglés universal.",
          related: ["for two years", "since March", "I've been living", "I've been waiting"],
          example: {
            target: "I've been here for two years.",
            translation: "Llevo dos años acá."
          }
        },
        {
          term: "take / carry",
          explanation:
            "Llevar un objeto. “Take” enfoca el destino; “carry” enfoca cargarlo físicamente.",
          literal: "llevar / cargar",
          useWhen:
            "Mueve una mochila, bolsa, documento o cosa de un lugar a otro.",
          avoidWhen:
            "Habla de la relación con una persona. Ahí use “get along with.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["bring", "carry", "take upstairs", "move"],
          example: {
            target: "Take the backpack to the room.",
            translation: "Lleve la mochila al cuarto."
          }
        },
        {
          term: "in-laws",
          explanation:
            "Suegros o familia política, según el contexto. Muchas veces se refiere a los padres de la pareja.",
          literal: "familia por ley",
          useWhen:
            "Habla de los padres o familiares de su pareja o cónyuge.",
          avoidWhen:
            "Quiere nombrar sólo a la suegra o sólo al suegro. Use mother-in-law o father-in-law.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["mother-in-law", "father-in-law", "partner's family", "relatives"],
          example: {
            target: "I get along with my in-laws.",
            translation: "Me llevo bien con mis suegros."
          }
        },
        {
          term: "I'm still shy",
          explanation:
            "Todavía me da pena o sigo tímida. Sirve para admitir distancia sin negar buena relación.",
          literal: "todavía estoy tímida",
          useWhen:
            "Usted se siente nueva, cohibida o cuidadosa en una familia o grupo.",
          avoidWhen:
            "Quiere decir que siente lástima. “Pena” no se traduce aquí como pity.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I feel awkward", "I'm nervous", "I'm still getting used to it", "I'm quiet"],
          example: {
            target: "I'm still shy with them.",
            translation: "Todavía me da pena con ellos."
          }
        }
      ],
      note:
        "No traduzca cada llevar como “carry.” “Me llevo bien con mis suegros” es “I get along with my in-laws.” “Llevo la mochila” es “I take/carry the backpack.” “Llevo dos años acá” suele ser “I've been here for two years.” El inglés separa relación, objeto y duración con estructuras distintas.",
      culture: [
        {
          label: "Los suegros pueden ser tema delicado",
          body:
            "Una familia puede preguntar cómo se lleva usted con todos sin buscar drama. Una respuesta como “I get along with them” es cálida y prudente a la vez."
        },
        {
          label: "La duración pide presente perfecto",
          body:
            "Para “llevo seis meses viniendo,” el inglés no carga tiempo. Usa “I've been coming for six months.” Ese presente perfecto mantiene vivo el vínculo con el presente."
        },
        {
          label: "“Get along” no es primera impresión solamente",
          body:
            "Una persona puede parecerle simpática de entrada y aun así no convivir bien con usted. “Get along” mira más a la relación sostenida que al primer golpe social."
        },
        {
          label: "La cortesía familiar vive en frases suaves",
          body:
            "Sin usted ni tú, el inglés suaviza con “dear,” preguntas completas y tono. La relación política nueva no necesita pronombre formal para sentirse cuidadosa."
        }
      ],
      pitfalls: [
        {
          mistake: "“I carry well with my in-laws.”",
          whyItFails:
            "Calca “me llevo bien con.” En inglés las relaciones usan “get along with,” no “carry well with.”",
          sayInstead: "I get along well with my in-laws."
        },
        {
          mistake: "“I get along the backpack to the room.”",
          whyItFails:
            "Una mochila no es una relación. Para objetos use “take” o “carry.”",
          sayInstead: "I'll take the backpack to the room."
        },
        {
          mistake: "“I carry two years here.”",
          whyItFails:
            "Calca “llevo dos años acá.” En inglés la duración hasta ahora usa “I've been here for two years.”",
          sayInstead: "I've been here for two years."
        },
        {
          mistake: "“I fall well with my in-laws.”",
          whyItFails:
            "Mezcla caer bien con llevarse bien. Para una relación sostenida, use “get along with.”",
          sayInstead: "I get along with my in-laws."
        }
      ],
      variations: [
        {
          form: "I get along with my in-laws.",
          register: "neutro hablado",
          region: "Inglés universal",
          whenToUse: "La relación con los suegros funciona bien."
        },
        {
          form: "I don't get along badly with anyone.",
          register: "neutro hablado",
          region: "Inglés universal",
          whenToUse: "Suavizar que no hay conflicto serio."
        },
        {
          form: "I've been living here for two years.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una duración que empezó antes y sigue vigente."
        },
        {
          form: "Take the backpack to the room.",
          register: "cortés neutro",
          region: "Inglés universal",
          whenToUse: "Llevar o cargar un objeto físico."
        },
        {
          form: "We've got along since the first lunch.",
          register: "amistoso informal",
          region: "Inglés británico",
          whenToUse: "La relación ha funcionado desde el principio."
        }
      ],
      prompt: "Mariana says “I get along with my in-laws.” ¿Qué quiere decir?",
      choices: [
        "Que lleva físicamente a sus suegros al cuarto.",
        "Que lleva dos años viviendo en Houston.",
        "Que se lleva bien con sus suegros."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál frase tiene el patrón completo para relaciones?",
          choices: [
            "I carry well my in-laws.",
            "I get along with my in-laws.",
            "I take well to my in-laws."
          ],
          answer: 1,
          tests: "get along with + person"
        },
        {
          prompt: "¿Cuál frase expresa duración hasta ahora?",
          choices: [
            "I take the backpack upstairs.",
            "I get along with the aunt.",
            "I've been here for two years."
          ],
          answer: 2,
          tests: "have been + time for llevar tiempo"
        },
        {
          prompt: "¿Cuál frase habla de llevar un objeto?",
          choices: [
            "I'll take the suitcase upstairs.",
            "I get along with Daniel.",
            "We've got along for years."
          ],
          answer: 0,
          tests: "take/carry for objects"
        }
      ]
    }
  },
  {
    id: "catching-up-at-the-river-in-girardot",
    level: "Extending · Social impressions",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "courteous",
    verb: "contar",
    review: "pending",
    es: {
      title: "Telling what happened in Girardot",
      situation:
        "Sam meets an old friend in Girardot after several months without seeing each other. She opens with a “cuénteme” that is not asking for numbers; it is asking for the story. You need to distinguish telling a story, counting to ten, and counting on someone.",
      setting: {
        who: "Patricia is an old friend who likes direct catch-ups, and Sam has arrived with a story from the road and too much to summarize.",
        what: "A warm catch-up: tell me what happened, count people for a table, and say who can be counted on.",
        when: "Sunday afternoon, after the strongest heat has dropped and people are walking near the river.",
        where: "Girardot, near the Magdalena river, at an outdoor table with cold drinks and several friends expected later.",
        why: "Because contar has three high-value uses: telling, counting, and counting on someone. Colombian “cuénteme” can be a whole invitation to talk."
      },
      address: {
        form: "usted",
        who: "Patricia uses affectionate usted with Sam, and Sam uses it back as part of their joking friendship.",
        why: "In Colombia, usted can be close, not just formal. For you, this friendly usted makes “cuénteme” sound warm rather than bureaucratic.",
        ifYouSwitch:
          "Tú would also be possible between friends, but it would change the flavor. Vos is not needed for this Girardot catch-up."
      },
      dialogue: [
        {
          speaker: "Patricia",
          target: "¡Bien o qué, Sam! Cuénteme todo.",
          translation: "You good or what, Sam? Tell me everything.",
          pronunciation: "byen oh keh, sam! KWEN-teh-meh TOH-doh",
          literal: "Well or what, Sam! Tell-me everything.",
          why: "“Cuénteme” is a Colombian catch-up opener. It means tell me the story, not count numbers for me."
        },
        {
          speaker: "Sam",
          target: "Le cuento rápido: casi pierdo el bus.",
          translation: "I'll tell you quickly: I almost missed the bus.",
          pronunciation: "leh KWEN-toh RRAH-pee-doh: KAH-see PYER-doh el boos",
          literal: "To-you I-tell quickly: almost I-lose the bus.",
          why: "Cuento shows the o-to-ue stem change. Contar as “tell” takes the listener as an indirect object: le cuento."
        },
        {
          speaker: "Patricia",
          target: "Espere, primero contamos cuántos vienen a la mesa.",
          translation: "Wait, first let's count how many are coming to the table.",
          pronunciation: "es-PEH-reh, pree-MEH-roh kon-TAH-mos KWAN-tos BYEH-nen ah lah MEH-sah",
          literal: "Wait, first we-count how-many come to the table.",
          why: "Contamos is the counting use. The nosotros form does not stem-change, so it stays contamos, not cuentamos."
        },
        {
          speaker: "Sam",
          target: "Listo: cuento hasta diez si toca.",
          translation: "Okay: I'll count to ten if I have to.",
          pronunciation: "LEES-toh: KWEN-toh AHS-tah dyes see TOH-kah",
          literal: "Ready: I-count until ten if it-falls-to-us.",
          why: "Contar hasta diez is literal counting. Same verb, different object, and the stem change returns in cuento."
        },
        {
          speaker: "Patricia",
          target: "Y para reservar, cuento con usted.",
          translation: "And for booking, I'm counting on you.",
          pronunciation: "ee PAH-rah rreh-ser-BAR, KWEN-toh kon oos-TED",
          literal: "And for reserving, I-count with you.",
          why: "Contar con means to count on or rely on someone. It can also mean a place has something, like parking or air conditioning."
        },
        {
          speaker: "Sam",
          target: "Cuente conmigo; después le cuento la historia completa.",
          translation: "Count on me; afterward I'll tell you the whole story.",
          pronunciation: "KWEN-teh kon-MEE-goh; des-PWES leh KWEN-toh lah ees-TOH-ryah kom-PLEH-tah",
          literal: "Count with me; after to-you I-tell the story complete.",
          why: "The last line puts two uses together: contar con for relying, and contar una historia for telling."
        }
      ],
      vocabulary: [
        {
          term: "contar",
          explanation:
            "To count or to tell, depending on what follows. It is one of Spanish's most flexible everyday verbs.",
          literal: "to count / tell",
          useWhen:
            "Telling a story, counting people, counting money, or asking someone to fill you in.",
          avoidWhen:
            "You mean speaking in general. Contar usually has a story, fact, number, or reliance frame.",
          register: "neutral",
          region: "Universal Spanish and very common in Colombian social speech.",
          related: ["decir", "narrar", "calcular", "relatar"],
          example: {
            target: "Le cuento rápido.",
            translation: "I'll tell you quickly."
          }
        },
        {
          term: "cuénteme",
          explanation:
            "Tell me. In Colombia it can be a whole greeting or catch-up invitation: go on, give me the story.",
          literal: "tell me",
          useWhen:
            "Opening a friendly conversation after time apart, or inviting someone to explain what happened.",
          avoidWhen:
            "You literally need numbers counted. Then ask for contar hasta or contar cuántos.",
          register: "friendly informal",
          region: "Very Colombian in greetings like “¿bien o qué? cuénteme.”",
          related: ["cuéntame", "qué hubo", "qué más", "hablemos"],
          example: {
            target: "Cuénteme todo.",
            translation: "Tell me everything."
          }
        },
        {
          term: "cuento / cuenta",
          explanation:
            "The o-to-ue stem change: I tell or count is cuento; he, she, or a place cuenta.",
          literal: "I count / it counts",
          useWhen:
            "Using present-tense forms outside nosotros and vosotros: cuento, cuentas, cuenta, cuentan.",
          avoidWhen:
            "The nosotros form. It stays contamos, not cuentamos.",
          register: "grammar pattern",
          region: "Universal Spanish.",
          related: ["cuentas", "cuenta", "cuentan", "contamos"],
          example: {
            target: "Yo cuento hasta diez.",
            translation: "I count to ten."
          }
        },
        {
          term: "contar hasta diez",
          explanation:
            "To count to ten. This is the literal number sense of contar.",
          literal: "to count until ten",
          useWhen:
            "Numbers, people, money, turns, seconds, or anything that can be counted.",
          avoidWhen:
            "Someone says “cuénteme” in a catch-up. They probably want the story, not arithmetic.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["números", "calcular", "sumar", "contamos cuántos"],
          example: {
            target: "Cuento hasta diez.",
            translation: "I count to ten."
          }
        },
        {
          term: "contar una historia",
          explanation:
            "To tell a story. The listener usually appears as an indirect object: le cuento, te cuento.",
          literal: "to count a story",
          useWhen:
            "Reporting what happened, catching someone up, telling a joke, or explaining a trip.",
          avoidWhen:
            "You are just chatting with no specific content. Hablar may be broader.",
          register: "neutral",
          region: "General Colombian.",
          related: ["contar un cuento", "echar el cuento", "relatar", "explicar"],
          example: {
            target: "Le cuento la historia completa.",
            translation: "I'll tell you the whole story."
          }
        },
        {
          term: "contar con",
          explanation:
            "To count on or rely on someone; also to have or include a feature.",
          literal: "to count with",
          useWhen:
            "You rely on a person, or a place has parking, air conditioning, rooms, or support.",
          avoidWhen:
            "You only mean adding numbers. Then con is not part of the counting phrase.",
          register: "neutral",
          region: "General Colombian.",
          related: ["confiar en", "tener", "disponer de", "apoyarse en"],
          example: {
            target: "Cuento con usted.",
            translation: "I'm counting on you."
          }
        },
        {
          term: "cuente conmigo",
          explanation:
            "Count on me. A warm promise of help or support.",
          literal: "count with me",
          useWhen:
            "You want someone to know they can rely on you for a plan, favor, or difficult moment.",
          avoidWhen:
            "You cannot actually help. It is a promise, not just a nice sound.",
          register: "friendly polite",
          region: "General Colombian.",
          related: ["a la orden", "yo le ayudo", "estoy pendiente", "no hay problema"],
          example: {
            target: "Cuente conmigo para reservar.",
            translation: "Count on me for booking."
          }
        }
      ],
      note:
        "Contar does three jobs you will hear constantly. “Cuénteme” means tell me, and can open a whole catch-up. “Contar hasta diez” is literal counting. “Contar con” means count on or have: “cuento contigo,” “el apartamento cuenta con parqueadero.” Remember the stem change: cuento, cuentas, cuenta, contamos, cuentan.",
      culture: [
        {
          label: "“Cuénteme” can be a greeting",
          body:
            "A Colombian friend may say “¿bien o qué? cuénteme” before there is any specific question. It means the floor is yours: tell me what has happened, what is new, what I missed."
        },
        {
          label: "Counting people is social logistics",
          body:
            "At a table, counting is not abstract arithmetic. It decides chairs, drinks, food and whether to reserve. The number sense of contar lives right beside the storytelling sense."
        },
        {
          label: "Counting on someone is a promise",
          body:
            "“Cuente conmigo” is warm because it offers reliability. It should not be thrown around if you will disappear. The phrase creates a small social obligation."
        },
        {
          label: "Girardot gives the catch-up time",
          body:
            "A slow table near the river is a believable place for a long story. The setting does not need regional slang; the Colombian social rhythm is in the invitation to tell it."
        }
      ],
      pitfalls: [
        {
          mistake: "Hearing “cuénteme” as “count for me” in a greeting",
          whyItFails:
            "In a catch-up, it almost always means tell me what happened. The social frame beats the literal number meaning.",
          sayInstead: "Cuénteme qué pasó."
        },
        {
          mistake: "Saying “yo conto” in the present tense",
          whyItFails:
            "Contar changes o to ue in the present: cuento, cuentas, cuenta, cuentan. Nosotros is the exception: contamos.",
          sayInstead: "Yo cuento hasta diez."
        },
        {
          mistake: "Dropping con in “cuento contigo”",
          whyItFails:
            "The reliance meaning is contar con. Without con, it sounds like counting the person as a number.",
          sayInstead: "Cuento contigo."
        },
        {
          mistake: "Using contar con only for people",
          whyItFails:
            "It also means a place has or includes something: an apartment can count with parking in Spanish, meaning it has it.",
          sayInstead: "El apartamento cuenta con parqueadero."
        }
      ],
      variations: [
        {
          form: "Cuénteme todo.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Inviting someone to tell the full story."
        },
        {
          form: "Le cuento rápido qué pasó.",
          register: "friendly neutral",
          region: "General Colombian",
          whenToUse: "You are about to summarize an event."
        },
        {
          form: "Contamos cuántos vienen.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Literal counting of people, items or numbers."
        },
        {
          form: "Cuento con usted para reservar.",
          register: "friendly polite",
          region: "General Colombian",
          whenToUse: "Relying on someone for a task."
        },
        {
          form: "El apartamento cuenta con parqueadero.",
          register: "formal neutral",
          region: "General Colombian",
          whenToUse: "A place has or includes a feature."
        },
        {
          form: "Le cuento que antes veníamos todos los domingos.",
          register: "courteous",
          region: "General Colombian",
          whenToUse: "Opening a memory inside a catch-up. Le cuento que softens the start of a story the way English uses so, anyway."
        }
      ],
      prompt: "Patricia says “cuénteme todo.” What does she want?",
      choices: [
        "She wants Sam to tell the story.",
        "She wants Sam to count to ten.",
        "She wants Sam to carry the table."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which present-tense form shows the stem change?",
          choices: [
            "Yo conto hasta diez.",
            "Yo cuento hasta diez.",
            "Nosotros cuentamos diez."
          ],
          answer: 1,
          tests: "contar o-to-ue stem change"
        },
        {
          prompt: "Which sentence means “count on me”?",
          choices: [
            "Cuente conmigo para eso.",
            "Cuente hasta mí para eso.",
            "Cuénteme números para eso."
          ],
          answer: 0,
          tests: "contar con as rely on"
        },
        {
          prompt: "Which sentence means the apartment has parking?",
          choices: [
            "El apartamento cuenta hasta parqueadero.",
            "El apartamento cuenta el parqueadero.",
            "El apartamento cuenta con parqueadero."
          ],
          answer: 2,
          tests: "contar con as have/include"
        }
      ]
    },
    en: {
      title: "Contar lo que pasó en Girardot",
      situation:
        "Santiago se encuentra con una amiga en Manchester después de varios meses sin verse. Ella abre con una frase que no pide números: pide la historia. Usted necesita distinguir “tell,” “count,” y “count on.”",
      setting: {
        who: "Patricia es una vieja amiga a la que le gustan las puestas al día directas, y Santiago llega con una historia del camino y demasiado para resumir.",
        what: "Una puesta al día cálida: contar lo que pasó, contar personas para una mesa y decir con quién se puede contar.",
        when: "Un domingo por la tarde, cuando baja el ruido de la hora de almuerzo y todavía queda tiempo para conversar.",
        where: "Manchester, en una mesa afuera de un café junto a un canal, con bebidas frías y varios amigos por llegar.",
        why: "Porque el inglés separa “tell” para historias, “count” para números y “count on” para confiar en alguien."
      },
      address: {
        form: "mixed",
        who: "Patricia y Santiago usan el mismo “you”; la confianza está en la amistad y en la frase “tell me everything.”",
        why: "El inglés no tiene usted amistoso. El tono de puesta al día aparece con “how are you?” y “tell me everything,” no con pronombre distinto.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Puede sonar más cálido con “tell me everything” y más puntual con “what happened?”"
      },
      dialogue: [
        {
          speaker: "Patricia",
          target: "You good? Tell me everything.",
          translation: "¿Bien o qué? Cuénteme todo.",
          pronunciation: "yu gud? tel mi EV-ri-zing",
          literal: "¿Usted bien? Dígame todo.",
          why: "“Tell me everything” es la invitación a contar la historia. No tiene nada que ver con contar números."
        },
        {
          speaker: "Santiago",
          target: "I'll tell you quickly: I almost missed the bus.",
          translation: "Le cuento rápido: casi pierdo el bus.",
          pronunciation: "ail tel yu KWIK-li: ai OL-moust mist da bos",
          literal: "Le diré rápidamente: casi perdí el bus.",
          why: "“Tell” lleva la persona que escucha y luego la historia o el dato: tell you what happened, tell her the story."
        },
        {
          speaker: "Patricia",
          target: "Wait, first let's count how many are coming to the table.",
          translation: "Espere, primero contamos cuántos vienen a la mesa.",
          pronunciation: "ueit, ferst lets kaunt jau ME-ni ar CO-ming tu da TEI-bol",
          literal: "Espere, primero contemos cuántos vienen a la mesa.",
          why: "“Count” es el uso de números. Aquí cuentan personas para saber cuántas sillas hacen falta."
        },
        {
          speaker: "Santiago",
          target: "Fine: I'll count to ten if I have to.",
          translation: "Listo: cuento hasta diez si toca.",
          pronunciation: "fain: ail kaunt tu ten if ai jav tu",
          literal: "Bien: contaré a diez si tengo que hacerlo.",
          why: "“Count to ten” es la frase fija para contar números en orden. No use “tell to ten.”"
        },
        {
          speaker: "Patricia",
          target: "And for booking, I'm counting on you.",
          translation: "Y para reservar, cuento con usted.",
          pronunciation: "and for BU-king, aim KAUN-ting on yu",
          literal: "Y para reservar, estoy contando sobre usted.",
          why: "“Count on” significa confiar o depender de alguien. La preposición on es parte de la frase."
        },
        {
          speaker: "Santiago",
          target: "You can count on me; then I'll tell you the whole story.",
          translation: "Cuente conmigo; después le cuento la historia completa.",
          pronunciation: "yu can kaunt on mi; den ail tel yu da joul STO-ri",
          literal: "Usted puede contar sobre mí; luego le diré la historia completa.",
          why: "La última línea separa dos usos: “count on me” para confiar, y “tell you the story” para contar una historia."
        }
      ],
      vocabulary: [
        {
          term: "tell",
          explanation:
            "Contar o decir una historia, dato, secreto o explicación a alguien.",
          literal: "decir / contar",
          useWhen:
            "Relata qué pasó, pone al día a alguien, cuenta un chiste o da información.",
          avoidWhen:
            "Está contando números. Ahí use “count.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["say", "explain", "describe", "tell a story"],
          example: {
            target: "I'll tell you quickly.",
            translation: "Le cuento rápido."
          }
        },
        {
          term: "tell me everything",
          explanation:
            "Cuénteme todo. Es una invitación social a soltar la historia completa.",
          literal: "dígame todo",
          useWhen:
            "Se pone al día con alguien después de tiempo sin hablar o invita a explicar lo ocurrido.",
          avoidWhen:
            "Necesita números. Entonces pida “count them” o “count how many.”",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["tell me what happened", "catch me up", "what's new", "go on"],
          example: {
            target: "Tell me everything.",
            translation: "Cuénteme todo."
          }
        },
        {
          term: "count / counts",
          explanation:
            "Contar números. “Count” también cambia a “counts” con he, she o it.",
          literal: "contar / cuenta",
          useWhen:
            "Cuenta personas, plata, turnos, segundos o cualquier cosa numerable.",
          avoidWhen:
            "Relata una historia. Ahí “tell” es el verbo.",
          register: "de gramática patrón",
          region: "Inglés universal.",
          related: ["counted", "counting", "counts", "count them"],
          example: {
            target: "I count to ten.",
            translation: "Cuento hasta diez."
          }
        },
        {
          term: "count to ten",
          explanation:
            "Contar hasta diez. Es la forma literal con números en orden.",
          literal: "contar a diez",
          useWhen:
            "Números, calma, juegos, turnos o instrucciones.",
          avoidWhen:
            "Alguien dice “tell me everything.” Esa frase pide historia, no números.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["count down", "count how many", "numbers", "add up"],
          example: {
            target: "Count to ten slowly.",
            translation: "Cuente hasta diez despacio."
          }
        },
        {
          term: "tell a story",
          explanation:
            "Contar una historia. El inglés no dice “count a story.”",
          literal: "decir una historia",
          useWhen:
            "Relata un viaje, un chisme, un accidente, un cuento o lo que pasó.",
          avoidWhen:
            "Suma números o personas. Entonces “count” es correcto.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["tell a joke", "tell the truth", "tell me why", "explain"],
          example: {
            target: "Tell me the whole story.",
            translation: "Cuénteme la historia completa."
          }
        },
        {
          term: "count on",
          explanation:
            "Contar con alguien o confiar en alguien. La preposición on no se omite.",
          literal: "contar sobre",
          useWhen:
            "Usted depende de una persona para una tarea, apoyo o promesa.",
          avoidWhen:
            "Sólo cuenta números. Ahí no necesita on.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["rely on", "depend on", "trust", "have support"],
          example: {
            target: "I'm counting on you.",
            translation: "Cuento con usted."
          }
        },
        {
          term: "you can count on me",
          explanation:
            "Cuente conmigo. Es una promesa cálida de apoyo.",
          literal: "usted puede contar sobre mí",
          useWhen:
            "Quiere que alguien sepa que puede confiar en usted para un plan o favor.",
          avoidWhen:
            "No puede cumplir. En inglés también suena como compromiso.",
          register: "amistoso cortés",
          region: "Inglés universal.",
          related: ["I've got you", "I'll help", "rely on me", "I'm here"],
          example: {
            target: "You can count on me for booking.",
            translation: "Cuente conmigo para reservar."
          }
        }
      ],
      note:
        "El inglés reparte contar en tres familias. Para historias, use “tell”: tell me everything, tell you what happened. Para números, use “count”: count to ten. Para confiar, use “count on”: you can count on me. El error típico es llevar “contar” a “count” incluso cuando la escena pide una historia.",
      culture: [
        {
          label: "“Tell me everything” abre la puerta",
          body:
            "Como “cuénteme,” la frase puede ser una invitación amplia a ponerse al día. No exige literalmente todo; significa que la otra persona tiene permiso social para empezar por donde quiera."
        },
        {
          label: "Contar gente es logística social",
          body:
            "Antes de reservar, pedir sillas o decidir mesa, contar personas importa. Ahí “count” es literal y práctico, no escolar."
        },
        {
          label: "“Count on me” crea compromiso",
          body:
            "La frase suena cálida porque promete fiabilidad. No es sólo decoración amable. Si usted dice “you can count on me,” la otra persona puede esperar que cumpla."
        },
        {
          label: "Una mesa da tiempo para la historia",
          body:
            "Un café junto a un canal permite una conversación larga sin prisa. El inglés social hace lo mismo con frases sencillas: “tell me,” “go on,” “what happened?”"
        }
      ],
      pitfalls: [
        {
          mistake: "“Count me everything.”",
          whyItFails:
            "Calca “cuénteme todo.” Para historias el inglés usa “tell,” no “count.”",
          sayInstead: "Tell me everything."
        },
        {
          mistake: "“Tell to ten.”",
          whyItFails:
            "Para números, el verbo correcto es “count.” “Tell” pertenece a historias o información.",
          sayInstead: "Count to ten."
        },
        {
          mistake: "“I count with you.”",
          whyItFails:
            "Calca “cuento con usted.” En inglés la preposición de confiar es “on.”",
          sayInstead: "I'm counting on you."
        },
        {
          mistake: "“The apartment counts with parking.”",
          whyItFails:
            "Ese uso de “contar con” no se traduce literal. Para una característica de un lugar, diga “has.”",
          sayInstead: "The apartment has parking."
        }
      ],
      variations: [
        {
          form: "Tell me everything.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Invitar a alguien a contar toda la historia."
        },
        {
          form: "I'll tell you quickly what happened.",
          register: "amistoso neutro",
          region: "Inglés universal",
          whenToUse: "Va a resumir un evento."
        },
        {
          form: "Let's count how many are coming.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Contar personas, cosas o números literalmente."
        },
        {
          form: "I'm counting on you for booking.",
          register: "amistoso cortés",
          region: "Inglés universal",
          whenToUse: "Depender de alguien para una tarea."
        },
        {
          form: "The apartment has parking.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Traducir “cuenta con” como tener una característica."
        },
        {
          form: "He told me he would meet us here, and we used to swim at this bend.",
          register: "cortés",
          region: "Inglés universal",
          whenToUse: "Para juntar un recado con un recuerdo. “Told me he would” es estilo indirecto; “used to swim” es la costumbre de antes."
        }
      ],
      prompt: "Patricia says “tell me everything.” ¿Qué quiere?",
      choices: [
        "Quiere que Santiago cuente la historia.",
        "Quiere que Santiago cuente hasta diez.",
        "Quiere que Santiago cargue la mesa."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase sirve para números?",
          choices: [
            "Tell to ten slowly.",
            "Count to ten slowly.",
            "Count on ten slowly."
          ],
          answer: 1,
          tests: "count for numbers"
        },
        {
          prompt: "¿Cuál frase significa “cuento con usted”?",
          choices: [
            "I'm counting on you.",
            "I'm telling on you.",
            "I'm counting with you."
          ],
          answer: 0,
          tests: "count on as rely on"
        },
        {
          prompt: "¿Cuál frase traduce “el apartamento cuenta con parqueadero”?",
          choices: [
            "The apartment tells parking.",
            "The apartment counts with parking.",
            "The apartment has parking."
          ],
          answer: 2,
          tests: "has for contar con features"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/63-extending-falling-and-getting-on.js");
