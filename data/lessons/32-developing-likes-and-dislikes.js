/*
 * Lesson block: developing / likes and dislikes.
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
 * The three verbs here — gustar, preferir and odiar — are the everyday tools of
 * taste and preference: what pleases you, what you choose over another option,
 * and what you strongly cannot stand. The two directions are mirrors: same
 * number of dialogue turns, vocabulary entries, culture notes, pitfalls,
 * variations and practice questions, and the same optional slots filled on the
 * same rows. That is enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "liking-the-pasto-carnival-floats",
    level: "Developing · Likes and dislikes",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "gustar",
    review: "pending",
    es: {
      title: "Lo que te gusta del carnaval en Pasto",
      situation:
        "You are in Pasto with Natalia during Carnaval de Negros y Blancos. There are floats, music, helado de paila, and a friend who mischievously asks whether you only like the floats or whether you also like someone in the group.",
      setting: {
        who: "Natalia is from Pasto and is proud without turning the afternoon into a lecture. Jordan is visiting the carnival and can follow more than survival Spanish now.",
        what: "A conversation about what the visitor likes: one singular thing, several plural things, an emphatic “me encanta,” and the delicate difference between liking a person generally and liking someone romantically.",
        when: "A bright carnival afternoon, after the parade has passed and people are still lingering near the square.",
        where: "Pasto, Nariño, around a side street off the carnival route, away from the loudest crowd.",
        why: "Because gustar is the famous backwards verb: the thing liked is the subject, and the person who likes it is the indirect object. The plural is where the grammar proves whether you understood it."
      },
      address: {
        form: "vos",
        who: "Natalia uses vos with Jordan, and Jordan answers with the same relaxed friendship.",
        why: "Voseo is heard in Nariño and much of southwestern Colombia, and the object pronoun with gustar stays te: “¿a vos te gusta?”. That lets the lesson show local warmth without inventing special slang.",
        ifYouSwitch:
          "Tú would be understood and would not damage the friendship, but it would flatten the local flavor. Usted would make Natalia sound suddenly distant for a teasing carnival conversation."
      },
      dialogue: [
        {
          speaker: "Natalia",
          target: "¿A vos qué te gusta más del carnaval: la música o las carrozas?",
          translation: "What do you like most about the carnival: the music or the floats?",
          pronunciation: "ah bos keh teh GOOS-tah mahs del kar-nah-BAHL: lah MOO-see-kah oh las kah-RROH-sas",
          literal: "To you what pleases you more of-the carnival: the music or the floats?",
          why: "The “a vos” names the person who feels the preference, but the subject is still the thing liked. That is why the verb will change when the thing becomes plural."
        },
        {
          speaker: "Jordan",
          target: "Me gusta la música, pero me gustan más las carrozas.",
          translation: "I like the music, but I like the floats more.",
          pronunciation: "meh GOOS-tah lah MOO-see-kah, PEH-roh meh GOOS-tahn mahs las kah-RROH-sas",
          literal: "To-me pleases the music, but to-me please more the floats.",
          why: "This is the core contrast: “me gusta la música” because música is singular, but “me gustan las carrozas” because carrozas is plural. The liked thing controls the verb."
        },
        {
          speaker: "Natalia",
          target: "Eso sí lo dijiste bien: una cosa te gusta, varias cosas te gustan.",
          translation: "You did say that right: one thing pleases you, several things please you.",
          pronunciation: "EH-soh see lo dee-HEES-teh byen: OO-nah KOH-sah teh GOOS-tah, BAH-ryas KOH-sas teh GOOS-tahn",
          literal: "That yes you-said it well: one thing to-you pleases, several things to-you please.",
          why: "Natalia says the rule out loud because it is the mistake English speakers keep making. “Me gustan el carnaval” sounds wrong because carnaval is one thing."
        },
        {
          speaker: "Jordan",
          target: "Y me encanta el helado de paila; no sabía que era tan cremoso.",
          translation: "And I love the helado de paila; I didn't know it was so creamy.",
          pronunciation: "ee meh en-KAHN-tah el eh-LAH-doh deh PAH-ee-yah; no sah-BEE-ah keh EH-rah tan kreh-MOH-soh",
          literal: "And to-me enchants the paila ice cream; not I-knew that it was so creamy.",
          why: "“Me encanta” is stronger and warmer than “me gusta mucho,” and Colombians reach for it constantly. It follows the same backwards grammar as gustar."
        },
        {
          speaker: "Natalia",
          target: "¿Y Daniel? ¿Él te gusta, o sólo te cae bien?",
          translation: "And Daniel? Do you like him like that, or do you just get along with him?",
          pronunciation: "ee dah-NYEL. el teh GOOS-tah, oh SOH-loh teh kah-eh byen",
          literal: "And Daniel? He to-you pleases, or only to-you falls well?",
          why: "“Él te gusta” often points toward attraction. For ordinary friendly approval of a person, Colombians are more likely to say “te cae bien.”"
        },
        {
          speaker: "Jordan",
          target: "Me cae muy bien, pero no me gusta así. Me gustan sus historias del carnaval.",
          translation: "I really like him as a person, but I don't like him that way. I like his carnival stories.",
          pronunciation: "meh KAH-eh mwee byen, PEH-roh no meh GOOS-tah ah-SEE. meh GOOS-tahn soos ees-TOH-ryas del kar-nah-BAHL",
          literal: "To-me he-falls very well, but not to-me pleases like-that. To-me please his stories of-the carnival.",
          why: "Jordan separates personal warmth from romantic interest, then lands the plural again: “me gustan sus historias.” That is exactly the precision gustar demands."
        }
      ],
      vocabulary: [
        {
          term: "gustar",
          explanation:
            "To like, but grammatically closer to “to please.” The thing liked is the subject, and the person is the indirect object.",
          literal: "to please / to be pleasing",
          useWhen:
            "Talking about tastes, preferences and attraction: “me gusta”, “te gustan”, “a Natalia le gusta”.",
          avoidWhen:
            "You try to build it like English, with the person as subject. “Yo gusto las carrozas” is not how Colombian Spanish says “I like the floats.”",
          register: "neutral",
          region: "Universal Spanish; the grammar is the same in Colombia.",
          related: ["encantar", "caer bien", "gustarle a alguien", "me gusta"],
          example: {
            target: "Me gustan las carrozas.",
            translation: "I like the floats."
          }
        },
        {
          term: "me gusta / me gustan",
          explanation:
            "The singular and plural pair that proves who the subject is: one liked thing takes gusta, several liked things take gustan.",
          literal: "it pleases me / they please me",
          useWhen:
            "Switching between one thing and many things: “me gusta el color”, “me gustan los colores”.",
          avoidWhen:
            "You are tempted to keep “gusta” fixed because English keeps “I like” fixed. Spanish does not.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["te gusta", "le gustan", "nos gusta", "me encantan"],
          example: {
            target: "Me gusta la música, pero me gustan las carrozas.",
            translation: "I like the music, but I like the floats."
          }
        },
        {
          term: "a vos te gusta",
          explanation:
            "The emphatic full frame: “as for you, it pleases you.” With vos, the indirect object is still te.",
          literal: "to you it pleases you",
          useWhen:
            "Asking or clarifying whose taste you mean, especially when comparing people in a group.",
          avoidWhen:
            "You do not need emphasis. A simple “¿te gusta?” is enough once the person is clear.",
          register: "friendly informal",
          region: "Voseo areas of Colombia, including much of the southwest.",
          related: ["a mí me gusta", "a usted le gusta", "te gusta", "vos"],
          example: {
            target: "¿A vos te gusta esta carroza?",
            translation: "Do you like this float?"
          }
        },
        {
          term: "encantar",
          explanation:
            "To love or really like. It follows the same backwards grammar as gustar and is extremely common in Colombian enthusiasm.",
          literal: "to enchant",
          useWhen:
            "You want more warmth than “me gusta”: food, places, songs, plans, colors, small discoveries.",
          avoidWhen:
            "The feeling is mild or you need to sound restrained. “Me encanta” is genuine enthusiasm, not a neutral rating.",
          register: "friendly informal",
          region: "Universal Spanish; very frequent in Colombian conversation.",
          related: ["me encanta", "me encantan", "gustar mucho", "fascinar"],
          example: {
            target: "Me encanta el helado de paila.",
            translation: "I love the helado de paila."
          }
        },
        {
          term: "caer bien",
          explanation:
            "To like someone as a person, or to find them pleasant. It avoids the romantic charge gustar can carry with people.",
          literal: "to fall well",
          useWhen:
            "Saying you get a good feeling from someone: “me cae bien”, “nos cae bien la profe”.",
          avoidWhen:
            "You mean attraction. “Me gusta Daniel” and “Daniel me gusta” point much more easily toward a crush.",
          register: "neutral",
          region: "Universal Spanish; everyday in Colombia.",
          related: ["caer mal", "me gusta", "llevarse bien", "ser buena gente"],
          example: {
            target: "Daniel me cae muy bien.",
            translation: "I really like Daniel as a person."
          }
        },
        {
          term: "él me gusta",
          explanation:
            "“I like him,” often with a romantic or attractive edge. Word order can shift emphasis, but the grammar stays indirect.",
          literal: "he pleases me",
          useWhen:
            "You are willing to suggest attraction, or you are answering a direct question about liking someone that way.",
          avoidWhen:
            "You only mean he is nice or easy to be around. Then “me cae bien” is safer and clearer.",
          register: "friendly informal",
          region: "Universal Spanish.",
          related: ["me gusta él", "me cae bien", "me parece lindo", "gustarle a alguien"],
          example: {
            target: "Él me gusta, pero me da pena decirlo.",
            translation: "I like him, but I'm embarrassed to say it."
          }
        },
        {
          term: "no me gusta así",
          explanation:
            "I don't like them that way. The así quietly closes the romantic reading without rejecting the person as a person.",
          literal: "it does not please me like that",
          useWhen:
            "Correcting a tease or misunderstanding about attraction while keeping the tone kind.",
          avoidWhen:
            "You need to say you dislike someone. This phrase only denies romantic interest; it does not say they bother you.",
          register: "friendly informal",
          region: "General Spanish.",
          related: ["me cae bien", "sólo como amigo", "no es mi tipo", "así no"],
          example: {
            target: "Me cae bien, pero no me gusta así.",
            translation: "I like him as a person, but not that way."
          }
        }
      ],
      note:
        "Gustar is not difficult because it means something exotic; it is difficult because English makes the liker the subject and Spanish makes the liked thing the subject. Once you hear “me gusta la música” as “the music pleases me,” the plural “me gustan las carrozas” stops being an exception and becomes the point.",
      culture: [
        {
          label: "Enthusiasm often uses encantar",
          body:
            "Colombians do say “me gusta mucho,” but “me encanta” is everywhere in warm everyday speech: a song, a place, a dish, a color, a plan. It sounds natural when the feeling is genuine and a bit bright. Learners who only use gustar can sound accurate but emotionally flat."
        },
        {
          label: "People are delicate with gustar",
          body:
            "When the object is a person, gustar can lean toward attraction. “Me gusta Daniel” is not the same social move as “Daniel me cae bien.” That difference matters because Colombian teasing can be quick, and a learner may accidentally confess more than intended."
        },
        {
          label: "Pasto gives the grammar real nouns",
          body:
            "A carnival scene is useful because it supplies singular and plural liked things naturally: la música, el helado, las carrozas, los colores. The grammar is not an exercise sheet; it is a way to talk about an afternoon that keeps changing in front of you."
        },
        {
          label: "Voseo does not change the object pronoun",
          body:
            "A useful surprise with “a vos te gusta” is that the object pronoun is still te. The address form changes the social flavor, but the gustar pattern remains stable: a mí me, a vos te, a usted le."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “yo gusto las carrozas”",
          whyItFails:
            "That copies English word order and makes the person the subject. Spanish puts the liked thing in charge of the verb and marks the person with me, te or le.",
          sayInstead: "Me gustan las carrozas."
        },
        {
          mistake: "Saying “me gusta los tamales”",
          whyItFails:
            "Los tamales is plural, so the verb must be plural too. The person has not changed; the subject has.",
          sayInstead: "Me gustan los tamales."
        },
        {
          mistake: "Using “me gusta él” when you only mean he seems nice",
          whyItFails:
            "With a person, gustar can suggest attraction. If the meaning is friendly approval, Colombians usually reach for caer bien.",
          sayInstead: "Él me cae bien."
        },
        {
          mistake: "Treating “me encanta” as poetic or rare",
          whyItFails:
            "It looks dramatic in literal translation, but in Colombian conversation it is a normal way to say you really like something.",
          sayInstead: "Me encanta este helado."
        }
      ],
      variations: [
        {
          form: "Me gusta la música.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "One singular thing pleases you."
        },
        {
          form: "Me gustan las carrozas.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Several liked things control the plural verb."
        },
        {
          form: "A vos te gusta el carnaval.",
          register: "friendly informal",
          region: "Southwestern Colombia",
          whenToUse: "Clarifying or teasing about someone's taste with vos."
        },
        {
          form: "Me encanta el helado de paila.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Showing real enthusiasm, stronger than plain gustar."
        },
        {
          form: "Me cae bien, pero no me gusta así.",
          register: "friendly informal",
          region: "General Spanish",
          whenToUse: "Separating friendly liking from romantic interest."
        }
      ],
      prompt: "Jordan says “Me gusta la música, pero me gustan más las carrozas.” What grammar is he using correctly?",
      choices: [
        "He keeps gusta for everything because the person liking the carnival has not changed.",
        "He lets the liked thing control the verb: singular música, plural carrozas.",
        "He uses gustan only because the sentence is warmer and more enthusiastic."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence says “I like the tamales” with correct agreement?",
          choices: [
            "Me gustan los tamales.",
            "Yo gusto los tamales.",
            "Me gusta los tamales."
          ],
          answer: 0,
          tests: "plural agreement with gustar"
        },
        {
          prompt: "Natalia asks “¿Él te gusta, o sólo te cae bien?” What distinction is she making?",
          choices: [
            "Whether Jordan knows Daniel's full name or only recognizes his face.",
            "Whether Jordan likes Daniel romantically or just likes him as a person.",
            "Whether Daniel likes the carnival floats or only likes the music."
          ],
          answer: 1,
          tests: "gustar with a person versus caer bien"
        },
        {
          prompt: "Which sentence gives warm Colombian-style enthusiasm?",
          choices: [
            "Me parece apenas soportable este helado.",
            "Me resulta completamente indiferente este helado.",
            "Me encanta este helado de paila."
          ],
          answer: 2,
          tests: "encantar as common enthusiastic liking"
        },
        {
          prompt: "What does “a vos te gusta” add to a plain “te gusta”?",
          choices: [
            "It names or contrasts the person whose taste is being discussed.",
            "It changes gustar into a regular verb with the person as subject.",
            "It makes the liked thing plural even when the noun is singular."
          ],
          answer: 0,
          tests: "emphatic a + pronoun with gustar"
        }
      ]
    },
    en: {
      title: "Lo que le gusta en un festival de invierno",
      situation:
        "Usted está en Galveston con Natalie en un festival de invierno. Hay esculturas de hielo, música, chocolate caliente y una pregunta con doble sentido: si sólo le gustan las esculturas o si también le gusta alguien del grupo.",
      setting: {
        who: "Natalie vive en Galveston y sabe moverse entre el gentío sin volverlo una hazaña. Juliana está de visita y ya puede conversar más allá de lo básico.",
        what: "Una conversación sobre gustos: una cosa singular, varias cosas plurales, un “love” enfático y la diferencia delicada entre que alguien le caiga bien y que le guste románticamente.",
        when: "Una tarde de sábado, cuando el festival ya está lleno y la luz empieza a ponerse azul.",
        where: "Galveston, Texas, en un pabellón de esculturas de hielo junto a la bahía.",
        why: "Porque el inglés no tiene el verbo “gustar” al revés: la persona que siente el gusto es el sujeto. Eso simplifica una parte y crea otras trampas, especialmente con personas."
      },
      address: {
        form: "mixed",
        who: "Natalie y Juliana usan el mismo “you” de todo el inglés, con cercanía marcada por el nombre y el tono.",
        why: "El inglés no distingue tú, vos y usted. La confianza aparece en frases como “do you like…?” y en la broma, no en cambiar el pronombre.",
        ifYouSwitch:
          "No hay un pronombre para cambiar. Si Juliana intenta sonar respetuosa alargando todo, la conversación pierde naturalidad; el inglés cotidiano prefiere claridad breve."
      },
      dialogue: [
        {
          speaker: "Natalie",
          target: "What do you like most about the festival: the music or the ice sculptures?",
          translation: "¿Qué le gusta más del festival: la música o las esculturas de hielo?",
          pronunciation: "uat du yu laik moust a-BAUT da FES-ti-val: da MIU-zik or da ais SKOLP-chers",
          literal: "¿Qué hace usted gustar más sobre el festival: la música o las esculturas de hielo?",
          why: "“Do you like” pone a la persona como sujeto. Para un hispanohablante, la buena noticia es que no hay acuerdo con la cosa gustada: “you like the music” y “you like the sculptures.”"
        },
        {
          speaker: "Juliana",
          target: "I like the music, but I like the sculptures more.",
          translation: "Me gusta la música, pero me gustan más las esculturas.",
          pronunciation: "ai laik da MIU-zik, bot ai laik da SKOLP-chers mor",
          literal: "Yo gusto la música, pero yo gusto las esculturas más.",
          why: "El inglés mantiene “I like” igual con singular y plural. No existe el salto de “me gusta” a “me gustan,” porque el sujeto es “I.”"
        },
        {
          speaker: "Natalie",
          target: "Good — one thing, many things, same verb in English.",
          translation: "Bien: una cosa, muchas cosas, el mismo verbo en inglés.",
          pronunciation: "gud — uan thing, ME-ni things, seim verb in ING-lish",
          literal: "Bueno: una cosa, muchas cosas, mismo verbo en inglés.",
          why: "La regla se dice de frente porque el aprendiz viene de un idioma donde la cosa gustada manda. En inglés manda la persona: I like, you like, they like."
        },
        {
          speaker: "Juliana",
          target: "And I love the hot chocolate; I didn't know it could taste this rich.",
          translation: "Y me encanta el chocolate caliente; no sabía que podía saber tan intenso.",
          pronunciation: "and ai lov da jot CHA-ko-let; ai DID-ent nou it kud teist dis rich",
          literal: "Y yo amo el chocolate caliente; yo no sabía que podía saber así de rico.",
          why: "“I love” es el equivalente natural de muchos “me encanta.” No siempre es amor dramático; en inglés cotidiano también expresa entusiasmo por comida, planes y lugares."
        },
        {
          speaker: "Natalie",
          target: "And Mateo? Do you like him, or do you just think he's nice?",
          translation: "¿Y Mateo? ¿Le gusta, o sólo le parece buena gente?",
          pronunciation: "and ma-TEI-ou. du yu laik jim, or du yu yost think jis nais",
          literal: "¿Y Mateo? ¿Usted gusta él, o sólo piensa que él es amable?",
          why: "Con personas, “like him” también puede sugerir atracción según el contexto. “I think he's nice” baja la frase a simpatía normal."
        },
        {
          speaker: "Juliana",
          target: "I think he's really nice, but I don't like him that way. I like his festival stories.",
          translation: "Me cae muy bien, pero no me gusta así. Me gustan sus historias del festival.",
          pronunciation: "ai think jis RI-li nais, bot ai dount laik jim dat wei. ai laik jis FES-ti-val STO-riz",
          literal: "Yo pienso que él es muy amable, pero no me gusta él de esa manera. Yo gusto sus historias del festival.",
          why: "“That way” cumple el mismo trabajo que “así”: cierra la lectura romántica sin decir que la persona cae mal."
        }
      ],
      vocabulary: [
        {
          term: "like",
          explanation:
            "El verbo básico para gustar. En inglés la persona que siente el gusto es el sujeto: I like, you like, she likes.",
          literal: "gustar",
          useWhen:
            "Habla de gustos, preferencias suaves y atracción: “I like it,” “do you like her?”, “she likes winter.”",
          avoidWhen:
            "Calcar el español y poner la cosa como sujeto: “the music likes me” significa que la música siente gusto por mí.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["love", "be into", "think someone is nice", "dislike"],
          example: {
            target: "I like the ice sculptures.",
            translation: "Me gustan las esculturas de hielo."
          }
        },
        {
          term: "I like it / I like them",
          explanation:
            "El verbo no cambia por singular o plural de la cosa gustada. Cambia el pronombre: it para una cosa, them para varias.",
          literal: "me gusta / me gustan",
          useWhen:
            "Responde sobre una cosa o varias: “I like it,” “I like them,” “I like both.”",
          avoidWhen:
            "Intentar crear un plural en el verbo. “I likes them” sólo existe si el sujeto fuera he, she o it, y aun así no con I.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["you like it", "she likes them", "I love them", "I prefer them"],
          example: {
            target: "I like the music, but I like the sculptures more.",
            translation: "Me gusta la música, pero me gustan más las esculturas."
          }
        },
        {
          term: "Do you like…?",
          explanation:
            "La pregunta normal por gustos. El auxiliar “do” carga la pregunta; el verbo principal queda como “like.”",
          literal: "¿le gusta…?",
          useWhen:
            "Pregunta por comida, música, planes, lugares o personas: “do you like this?”, “do you like him?”.",
          avoidWhen:
            "Olvidar el auxiliar. “You like the music?” existe con tono de sorpresa, pero como pregunta neutra conviene “Do you like…?”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["what do you like", "do you love", "are you into", "would you rather"],
          example: {
            target: "Do you like this festival?",
            translation: "¿Le gusta este festival?"
          }
        },
        {
          term: "love",
          explanation:
            "El equivalente cotidiano de muchos “me encanta.” Puede ser entusiasmo fuerte sin ser amor solemne.",
          literal: "encantar / amar",
          useWhen:
            "Quiere expresar gusto fuerte por comida, planes, ropa, ciudades o pequeñas sorpresas.",
          avoidWhen:
            "Quiere sonar tibio o reservado. “Love” sube la temperatura emocional de la frase.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["really like", "be crazy about", "enjoy", "adore"],
          example: {
            target: "I love the hot chocolate.",
            translation: "Me encanta el chocolate caliente."
          }
        },
        {
          term: "think someone is nice",
          explanation:
            "Una forma segura de decir que alguien le cae bien sin abrir la puerta romántica de “I like him.”",
          literal: "pensar que alguien es amable",
          useWhen:
            "Quiere expresar simpatía por una persona, no atracción.",
          avoidWhen:
            "Sí quiere confesar atracción. En ese caso “I like him” o “I have a crush on him” son más claros.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["like him", "get along with him", "he seems nice", "have a crush"],
          example: {
            target: "I think Mateo is really nice.",
            translation: "Mateo me cae muy bien."
          }
        },
        {
          term: "I like him",
          explanation:
            "Puede significar que alguien le cae bien o que le atrae. La situación y el tono deciden.",
          literal: "él me gusta / me cae bien",
          useWhen:
            "El contexto ya deja claro si habla de simpatía general o de interés romántico.",
          avoidWhen:
            "Necesita evitar el doble sentido. Para simpatía, diga “I think he's nice”; para atracción, diga “I like him that way.”",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["I like her", "I have a crush", "he's nice", "that way"],
          example: {
            target: "I like him, but I'm shy about it.",
            translation: "Él me gusta, pero me da pena decirlo."
          }
        },
        {
          term: "not that way",
          explanation:
            "La frase que niega la lectura romántica sin sonar cruel: “me cae bien, pero no así.”",
          literal: "no de esa manera",
          useWhen:
            "Alguien interpreta un “like” como atracción y usted quiere corregir con suavidad.",
          avoidWhen:
            "Quiere decir que alguien le cae mal. Esta frase sólo niega el interés romántico.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["just as a friend", "not romantically", "he's nice", "no crush"],
          example: {
            target: "I don't like him that way.",
            translation: "No me gusta así."
          }
        }
      ],
      note:
        "Para un hispanohablante, like parece demasiado fácil y por eso mismo engaña. En inglés no se dice “the music pleases me” en la conversación normal; se dice “I like the music.” El verbo no cambia porque haya una escultura o muchas. Lo que sí exige cuidado es la gente: “I like him” puede sonar romántico si la escena lo sugiere.",
      culture: [
        {
          label: "Love no siempre es dramático",
          body:
            "En inglés cotidiano, “I love this coffee,” “I love that song” o “I love this place” pueden ser entusiasmo normal, no una declaración solemne. Para traducir “me encanta,” casi siempre suena mejor “I love” que una frase pesada como “it enchants me.”"
        },
        {
          label: "Like con personas depende del contexto",
          body:
            "“I like him” puede ser inocente o romántico. Si alguien acaba de preguntar por una posible atracción, la frase se inclina hacia ese lado. Para simpatía común, “I think he's nice” o “I get along with him” evita el malentendido."
        },
        {
          label: "La gramática inglesa no mira la cosa gustada",
          body:
            "El español obliga a mirar si lo gustado es singular o plural. El inglés no: I like the sculpture, I like the sculptures. El ajuste mental es dejar de buscar el sujeto en la cosa y ponerlo en la persona que siente el gusto."
        },
        {
          label: "Los festivales de invierno también tienen gustos",
          body:
            "El escenario cambia, pero la conversación es familiar: música, comida caliente, decoraciones, gente del grupo. Hablar de gustos no requiere vocabulario exótico; requiere no calcar la estructura de gustar cuando se pasa al inglés."
        }
      ],
      pitfalls: [
        {
          mistake: "“The music likes me.”",
          whyItFails:
            "Eso no traduce “me gusta la música”; significa que la música siente gusto por usted. En inglés la persona que siente el gusto va como sujeto.",
          sayInstead: "I like the music."
        },
        {
          mistake: "“I likes the sculptures.”",
          whyItFails:
            "Con “I” el verbo es “like,” sin -s. La pluralidad de “sculptures” no cambia el verbo porque no es el sujeto.",
          sayInstead: "I like the sculptures."
        },
        {
          mistake: "“It enchants me.”",
          whyItFails:
            "Aunque suene cercano a “me encanta,” en inglés cotidiano resulta teatral o raro. Para entusiasmo normal se usa “I love it.”",
          sayInstead: "I love it."
        },
        {
          mistake: "“I like him” cuando sólo quiere decir que le cae bien",
          whyItFails:
            "Puede entenderse como atracción si el contexto ya está jugando con esa posibilidad. Para simpatía simple, conviene una frase menos ambigua.",
          sayInstead: "I think he's really nice."
        }
      ],
      variations: [
        {
          form: "I like the music.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una cosa o categoría singular le gusta."
        },
        {
          form: "I like the ice sculptures.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Varias cosas le gustan; el verbo no cambia por eso."
        },
        {
          form: "Do you like this festival?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Pregunta directa y normal por gusto."
        },
        {
          form: "I love the hot chocolate.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Entusiasmo natural, como “me encanta.”"
        },
        {
          form: "I think he's nice, but not that way.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Separar simpatía de interés romántico."
        }
      ],
      prompt: "Juliana says “I like the music, but I like the sculptures more.” ¿Qué diferencia hay frente a gustar?",
      choices: [
        "El inglés mantiene “I like” porque la persona, no la cosa gustada, es el sujeto.",
        "El inglés cambia a “I likes” cuando la cosa gustada está en plural.",
        "El inglés evita por completo hablar de gustos con comida, música o personas."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase traduce “me gustan las esculturas” sin calcar el español?",
          choices: [
            "The sculptures like me.",
            "I like the sculptures.",
            "I likes the sculptures."
          ],
          answer: 1,
          tests: "like with the liker as subject"
        },
        {
          prompt: "Natalie asks “Do you like him, or do you just think he's nice?” ¿Qué distingue?",
          choices: [
            "Si Juliana sabe el nombre completo de Mateo o sólo reconoce su cara.",
            "Si Mateo prefiere las esculturas de hielo o sólo prefiere la música.",
            "Si hay atracción romántica o sólo simpatía normal por la persona."
          ],
          answer: 2,
          tests: "like someone versus think someone is nice"
        },
        {
          prompt: "¿Cuál frase suena natural para “me encanta este chocolate”?",
          choices: [
            "I love this hot chocolate.",
            "It enchants me this chocolate.",
            "This chocolate makes liking to me."
          ],
          answer: 0,
          tests: "love as natural equivalent of encantar"
        },
        {
          prompt: "¿Qué hace “not that way” en “I don't like him that way”?",
          choices: [
            "Aclara que no habla de atracción romántica.",
            "Convierte la frase en una invitación formal.",
            "Hace plural el objeto de la oración inglesa."
          ],
          answer: 0,
          tests: "not that way to deny romantic meaning"
        }
      ]
    }
  },
  {
    id: "preferring-the-shady-seats-in-neiva",
    level: "Developing · Likes and dislikes",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "preferir",
    review: "pending",
    es: {
      title: "Preferir la sombra en Neiva",
      situation:
        "You are in Neiva with Camila during the San Pedro celebrations. There is music, strong sun, and two places to sit. You have to say what you prefer without sounding demanding, and understand why everyone preferred to move when the heat got intense.",
      setting: {
        who: "Camila knows the San Pedro celebrations and is trying to keep the group cheerful in serious heat. Taylor wants to say a preference clearly without sounding demanding.",
        what: "Choosing between seats in the sun and seats in the shade, then revising the plan when an older aunt already chose the wiser option.",
        when: "Early afternoon, when the performance is about to start and the shade has become precious.",
        where: "Neiva, Huila, near an outdoor stage during the San Pedro festivities.",
        why: "Because preferir is the normal verb for choosing one option over another, and its stem changes matter: prefiero, prefiere, and prefirió in the preterite."
      },
      address: {
        form: "tú",
        who: "Camila and Taylor use tú as friends of similar age in a relaxed public celebration.",
        why: "The scene is friendly but not intimate enough for teasing voseo, and it is not a service encounter. Tú keeps the preference clear and light.",
        ifYouSwitch:
          "Usted would make Taylor sound as if he were negotiating with a stranger. The grammar would still work, but the warmth of the group decision would cool down."
      },
      dialogue: [
        {
          speaker: "Camila",
          target: "Tenemos dos opciones: cerca del escenario o más atrás, debajo del árbol.",
          translation: "We have two options: close to the stage or farther back, under the tree.",
          pronunciation: "teh-NEH-mos dos op-SYOH-nes: SER-kah del es-seh-NAH-ryoh oh mahs ah-TRAHS, deh-BAH-hoh del AHR-bol",
          literal: "We-have two options: close of-the stage or more behind, under the tree.",
          why: "A preference needs real alternatives. Camila sets them up before anyone uses preferir, which keeps the verb from floating in the air."
        },
        {
          speaker: "Taylor",
          target: "Yo prefiero la sombra; el sol de Neiva no perdona.",
          translation: "I prefer the shade; the Neiva sun doesn't forgive.",
          pronunciation: "yo pree-FYEH-roh lah SOM-brah; el sol deh NAY-bah no per-DOH-nah",
          literal: "I prefer the shade; the sun of Neiva does not forgive.",
          why: "The present yo form is “prefiero,” not “prefero.” The e becomes ie, and the sentence still sounds conversational rather than fussy."
        },
        {
          speaker: "Camila",
          target: "Yo también prefiero atrás, pero mi tía prefiere verles la cara a los bailarines.",
          translation: "I also prefer the back, but my aunt prefers to see the dancers' faces.",
          pronunciation: "yo tam-BYEN pree-FYEH-roh ah-TRAHS, PEH-roh mee TEE-ah pree-FYEH-reh ver-les lah KAH-rah ah los bai-lah-REE-nes",
          literal: "I also prefer behind, but my aunt prefers to see to-them the face to the dancers.",
          why: "“Prefiere” has the same e-to-ie change. Preferir often takes a direct infinitive after it: “prefiere ver,” with no preposition between the verbs."
        },
        {
          speaker: "Taylor",
          target: "Si ella prefiere adelante, yo no peleo; sólo prefiero no derretirme.",
          translation: "If she prefers the front, I won't argue; I just prefer not to melt.",
          pronunciation: "see EH-yah pree-FYEH-reh ah-deh-LAHN-teh, yo no peh-LEH-oh; SOH-loh pree-FYEH-roh no deh-rreh-TEER-meh",
          literal: "If she prefers ahead, I don't fight; only I prefer not to melt myself.",
          why: "The second half is a tactful preference, not a demand. “Prefiero no…” is a useful way to set a limit without making the other person wrong."
        },
        {
          speaker: "Camila",
          target: "Tranquilo, ella ya prefirió la sombra cuando sintió el calor.",
          translation: "Relax, she already preferred the shade once she felt the heat.",
          pronunciation: "tran-KEE-loh, EH-yah ya pree-fee-RYOH lah SOM-brah KWAN-doh seen-TYOH el kah-LOR",
          literal: "Calm, she already preferred the shade when she felt the heat.",
          why: "In the preterite, preferir shifts differently: “prefirió,” with e to i. That form reports the choice she made once reality arrived."
        },
        {
          speaker: "Taylor",
          target: "Entonces prefiramos el árbol y después buscamos algo frío.",
          translation: "Then let's prefer the tree and later look for something cold.",
          pronunciation: "en-TON-ses pree-fee-RAH-mos el AHR-bol ee des-PWES boos-KAH-mos AHL-goh FREE-oh",
          literal: "Then let's-prefer the tree and afterward we-look-for something cold.",
          why: "“Prefiramos” is a possible let's-form, but in natural speech it sounds a bit deliberate. That is useful here because Taylor is jokingly making the shade the official group decision."
        }
      ],
      vocabulary: [
        {
          term: "preferir",
          explanation:
            "To prefer: choosing one option over another because it suits you better.",
          literal: "to prefer",
          useWhen:
            "You are comparing options: shade or sun, early or late, quiet seats or close seats.",
          avoidWhen:
            "You only mean liking something in general. Preferir needs an alternative, stated or implied.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["prefiero", "prefiere", "preferiría", "escoger"],
          example: {
            target: "Yo prefiero la sombra.",
            translation: "I prefer the shade."
          }
        },
        {
          term: "prefiero",
          explanation:
            "The yo form: I prefer. The stem changes from e to ie, so it is not “prefero.”",
          literal: "I prefer",
          useWhen:
            "Stating your own preference clearly: “prefiero aquí,” “prefiero esperar,” “prefiero no.”",
          avoidWhen:
            "You are afraid of sounding direct. With a reason or a softener, prefiero is perfectly polite.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["prefieres", "prefiere", "preferimos", "preferiría"],
          example: {
            target: "Prefiero quedarme en la sombra.",
            translation: "I prefer to stay in the shade."
          }
        },
        {
          term: "prefiere",
          explanation:
            "He, she or usted prefers. It keeps the e-to-ie stem change.",
          literal: "prefers / you prefer",
          useWhen:
            "Talking about another person's choice, or addressing someone with usted.",
          avoidWhen:
            "You are talking about nosotros: “preferimos” does not have the ie in the present.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["ella prefiere", "usted prefiere", "prefiero", "preferimos"],
          example: {
            target: "Mi tía prefiere ver el escenario.",
            translation: "My aunt prefers to see the stage."
          }
        },
        {
          term: "prefirió",
          explanation:
            "The preterite: he, she or usted preferred. In the preterite, the stem shift is e to i.",
          literal: "preferred",
          useWhen:
            "Reporting a choice already made: “ella prefirió la sombra,” “usted prefirió esperar.”",
          avoidWhen:
            "You are speaking in the present. “Prefirió” is a completed past choice, not a current preference.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["preferí", "prefirieron", "prefiere", "eligió"],
          example: {
            target: "Ella prefirió la sombra.",
            translation: "She preferred the shade."
          }
        },
        {
          term: "preferir + infinitivo",
          explanation:
            "Prefer to do something. Spanish links preferir straight to the infinitive with no preposition.",
          literal: "to prefer to do",
          useWhen:
            "Choosing an action: “prefiero esperar,” “prefiere ver,” “preferimos sentarnos atrás.”",
          avoidWhen:
            "Adding “a” because English has “to.” “Prefiero a esperar” is the wrong structure.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["prefiero no", "prefiere ver", "preferimos ir", "infinitivo"],
          example: {
            target: "Prefiero no derretirme.",
            translation: "I prefer not to melt."
          }
        },
        {
          term: "preferiría",
          explanation:
            "I would prefer. Softer and more diplomatic than a bare prefiero.",
          literal: "I would prefer",
          useWhen:
            "You want to express a preference while leaving room for the group or the host.",
          avoidWhen:
            "A quick casual choice is enough. Overusing preferiría can make a simple decision sound overly managed.",
          register: "polite neutral",
          region: "Universal Spanish.",
          related: ["prefiero", "mejor", "si se puede", "me gustaría más"],
          example: {
            target: "Preferiría sentarme en la sombra.",
            translation: "I'd prefer to sit in the shade."
          }
        },
        {
          term: "prefiero no",
          explanation:
            "I prefer not to. A useful boundary that stays calmer than a blunt refusal.",
          literal: "I prefer not",
          useWhen:
            "Declining an option without attacking it: heat, noise, a seat, a plan, a timing.",
          avoidWhen:
            "You need to state a hard impossibility. “No puedo” is clearer if something truly cannot happen.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["mejor no", "no me provoca", "preferiría no", "paso"],
          example: {
            target: "Prefiero no sentarme al sol.",
            translation: "I prefer not to sit in the sun."
          }
        }
      ],
      note:
        "Preferir is less strange than gustar, but its forms are less forgiving. In the present you hear prefiero and prefiere; in the preterite, prefirió. The other skill is social: a preference is not a command. A reason, a soft “si se puede,” or “preferiría” can keep the choice from sounding like a complaint.",
      culture: [
        {
          label: "Heat makes preferences practical",
          body:
            "In Neiva, choosing shade is not delicate fussiness. Heat shapes where people stand, sit and wait. A sentence like “prefiero la sombra” sounds practical, especially if you say it before everyone is already uncomfortable."
        },
        {
          label: "Preferir needs another option",
          body:
            "Unlike gustar, preferir points across a comparison. The other option can be spoken or obvious, but it has to exist. “Prefiero la sombra” means shade over sun, not merely that shade is pleasant in the abstract."
        },
        {
          label: "Politeness lives in the framing",
          body:
            "A direct “prefiero” is not rude by itself. Colombian Spanish softens it with reasons, tone and small frames: “si se puede,” “la verdad,” “preferiría.” Those pieces turn a personal preference into a group-friendly suggestion."
        },
        {
          label: "San Pedro is public and shared",
          body:
            "At an outdoor celebration, your preference affects other bodies: where the group sits, who sees, who gets shade. The language has to make room for the aunt, the friend and the heat, not just your private taste."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “yo prefero”",
          whyItFails:
            "The present yo form stem-changes: e becomes ie. “Prefero” is a regularized guess, not the form Colombians use.",
          sayInstead: "Yo prefiero la sombra."
        },
        {
          mistake: "Saying “ella preferió” in the preterite",
          whyItFails:
            "Preferir changes e to i in the preterite third person. The past choice is “prefirió,” not “preferió.”",
          sayInstead: "Ella prefirió la sombra."
        },
        {
          mistake: "Adding “a” before an infinitive",
          whyItFails:
            "English says “prefer to sit,” but Spanish does not put a preposition there. Preferir connects directly to the infinitive.",
          sayInstead: "Prefiero sentarme atrás."
        },
        {
          mistake: "Using “prefiero” when there is no comparison",
          whyItFails:
            "Preferir implies one option over another. If you simply enjoy something, gustar or encantar may be the verb you need.",
          sayInstead: "Me gusta la sombra en la tarde."
        }
      ],
      variations: [
        {
          form: "Yo prefiero la sombra.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Stating your own choice between two places or plans."
        },
        {
          form: "¿Tú qué prefieres?",
          register: "friendly informal",
          region: "Universal Spanish",
          whenToUse: "Inviting the other person to weigh the options."
        },
        {
          form: "Ella prefirió sentarse atrás.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Reporting a completed past choice."
        },
        {
          form: "Preferiría quedarme aquí, si se puede.",
          register: "polite neutral",
          region: "Universal Spanish",
          whenToUse: "Giving a preference softly when the group decides."
        },
        {
          form: "Prefiero no sentarme al sol.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Setting a calm boundary around an option."
        }
      ],
      prompt: "Taylor says “Yo prefiero la sombra.” What is the key verb form?",
      choices: [
        "Prefero, because preferir stays regular in the present yo form.",
        "Preferí, because any personal preference must be put in the past.",
        "Prefiero, because the present yo form changes e to ie."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Which sentence correctly reports a past choice?",
          choices: [
            "Ella prefiere la sombra ayer.",
            "Ella prefirió la sombra ayer.",
            "Ella preferió la sombra ayer."
          ],
          answer: 1,
          tests: "preterite stem change e to i in prefirió"
        },
        {
          prompt: "Which sentence uses preferir before an infinitive correctly?",
          choices: [
            "Prefiero sentarme en la sombra.",
            "Prefiero a sentarme en la sombra.",
            "Prefiero de sentarme en la sombra."
          ],
          answer: 0,
          tests: "preferir + infinitive without a preposition"
        },
        {
          prompt: "What does “preferiría” do socially?",
          choices: [
            "It makes the sentence more demanding and less open to the group.",
            "It softens the preference while still saying what the speaker would choose.",
            "It changes the verb into a statement about liking with no comparison."
          ],
          answer: 1,
          tests: "conditional preferiría as a softer preference"
        },
        {
          prompt: "Why is “prefiero la sombra” natural in Neiva?",
          choices: [
            "Because shade is a practical choice when the heat shapes the outing.",
            "Because preferir means the same thing as hating the sunny seats.",
            "Because Colombian Spanish forbids sitting near outdoor stages."
          ],
          answer: 0,
          tests: "preference as practical comparison in context"
        }
      ]
    },
    en: {
      title: "Preferir la sombra en un festival de Sídney",
      situation:
        "Usted está en Sídney con Camille en un festival al aire libre. Hay música, sol fuerte y dos sitios para sentarse. Tiene que decir en inglés qué prefiere sin sonar exigente, y entender cómo suavizar una preferencia para el grupo.",
      setting: {
        who: "Camille conoce el festival y está tratando de mantener al grupo cómodo bajo un sol serio. Andrés quiere expresar una preferencia clara sin sonar como si estuviera dando órdenes.",
        what: "Escoger entre asientos al sol y asientos con sombra, y ajustar el plan cuando una tía del grupo ya escogió la opción sensata.",
        when: "Primera hora de la tarde, justo antes de que empiece la presentación.",
        where: "Sídney, Australia, en un festival al aire libre cerca del puerto.",
        why: "Porque prefer en inglés es regular en sus formas, pero exige otras decisiones: prefer to, prefer not to, would prefer y would rather no funcionan igual."
      },
      address: {
        form: "mixed",
        who: "Camille y Andrés usan el mismo “you” de siempre; el registro se marca con “I'd prefer,” “if that's okay,” y el tono.",
        why: "El inglés no tiene tú ni usted. Para sonar considerado, Andrés no cambia de pronombre; cambia de estructura y suaviza la preferencia.",
        ifYouSwitch:
          "No hay cambio de pronombre disponible. Decir “your honor” o volverse ceremonial sólo haría rara una decisión sencilla sobre sillas."
      },
      dialogue: [
        {
          speaker: "Camille",
          target: "We have two options: close to the stage or farther back under the tree.",
          translation: "Tenemos dos opciones: cerca del escenario o más atrás, debajo del árbol.",
          pronunciation: "wi jav tu OP-shons: klous tu da steich or FAR-der bak ON-der da tri",
          literal: "Tenemos dos opciones: cerca del escenario o más atrás bajo el árbol.",
          why: "Una preferencia necesita alternativas reales. Camille las pone sobre la mesa antes de que aparezca “prefer.”"
        },
        {
          speaker: "Andrés",
          target: "I prefer the shade; this Sydney sun is no joke.",
          translation: "Prefiero la sombra; este sol de Sídney no perdona.",
          pronunciation: "ai pri-FER da sheid; dis SID-ni son is nou youk",
          literal: "Yo prefiero la sombra; este sol de Sídney no es chiste.",
          why: "“I prefer” no cambia de raíz como prefiero. El reto no es la forma sino el tono: con una razón clara, la preferencia suena práctica."
        },
        {
          speaker: "Camille",
          target: "I prefer the back too, but my aunt prefers to see the dancers' faces.",
          translation: "Yo también prefiero atrás, pero mi tía prefiere verles la cara a los bailarines.",
          pronunciation: "ai pri-FER da bak tu, bot mai ant pri-FERS tu si da DAN-sers FEI-siz",
          literal: "Yo prefiero el atrás también, pero mi tía prefiere ver las caras de los bailarines.",
          why: "En tercera persona singular aparece la -s: “my aunt prefers.” Y antes de otro verbo, el inglés usa “to”: prefers to see."
        },
        {
          speaker: "Andrés",
          target: "If she prefers the front, I won't argue; I'd just prefer not to melt.",
          translation: "Si ella prefiere adelante, no peleo; sólo preferiría no derretirme.",
          pronunciation: "if shi pri-FERS da front, ai uont AR-giu; aid yost pri-FER not tu melt",
          literal: "Si ella prefiere el frente, no discutiré; yo sólo preferiría no derretirme.",
          why: "“I'd prefer not to” es suave y claro. No ataca la opción de la tía; sólo marca el límite propio."
        },
        {
          speaker: "Camille",
          target: "Relax, she already preferred the shade once she felt the heat.",
          translation: "Tranquilo, ella ya prefirió la sombra cuando sintió el calor.",
          pronunciation: "ri-LAX, shi ol-RE-di pri-FERD da sheid wons shi felt da jit",
          literal: "Relájese, ella ya prefirió la sombra una vez sintió el calor.",
          why: "El pasado de prefer es regular: “preferred.” No hay cambio como prefirió, pero sí se duplica la r antes de -ed en la escritura."
        },
        {
          speaker: "Andrés",
          target: "Then I'd rather sit under the tree and get something cold later.",
          translation: "Entonces prefiero sentarme bajo el árbol y después buscar algo frío.",
          pronunciation: "den aid RA-der sit ON-der da tri and get SOM-thing kould LEI-ter",
          literal: "Entonces yo más bien sentaría bajo el árbol y conseguiría algo frío después.",
          why: "“I'd rather” compite con “I'd prefer,” pero no lleva “to”: “I'd rather sit,” not “I'd rather to sit.”"
        }
      ],
      vocabulary: [
        {
          term: "prefer",
          explanation:
            "Preferir: escoger una opción sobre otra porque le conviene o le gusta más.",
          literal: "preferir",
          useWhen:
            "Compara opciones: shade or sun, early or late, close seats or quiet seats.",
          avoidWhen:
            "Sólo quiere decir que algo le gusta. Prefer implica una alternativa, dicha o entendida.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["would prefer", "would rather", "like better", "choose"],
          example: {
            target: "I prefer the shade.",
            translation: "Prefiero la sombra."
          }
        },
        {
          term: "I prefer",
          explanation:
            "La forma de primera persona. No cambia de raíz como prefiero; se mantiene regular.",
          literal: "yo prefiero",
          useWhen:
            "Dice su propia preferencia con claridad: “I prefer this,” “I prefer to wait,” “I prefer not to.”",
          avoidWhen:
            "Quiere sonar especialmente suave. Ahí “I'd prefer” puede cuidar más el tono.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["you prefer", "she prefers", "we prefer", "I'd prefer"],
          example: {
            target: "I prefer to sit in the shade.",
            translation: "Prefiero sentarme en la sombra."
          }
        },
        {
          term: "prefers",
          explanation:
            "La forma con -s para he, she o it: “she prefers,” “my aunt prefers.”",
          literal: "prefiere",
          useWhen:
            "Habla de la preferencia de otra persona en presente.",
          avoidWhen:
            "El sujeto es I, you, we o they. Ahí no va la -s: “they prefer.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["she prefers", "he prefers", "I prefer", "they prefer"],
          example: {
            target: "My aunt prefers to see the stage.",
            translation: "Mi tía prefiere ver el escenario."
          }
        },
        {
          term: "preferred",
          explanation:
            "El pasado de prefer. Es regular en pronunciación y función, aunque la escritura duplica la r.",
          literal: "prefirió / prefería",
          useWhen:
            "Reporta una preferencia pasada o una elección que alguien ya hizo.",
          avoidWhen:
            "Habla de una preferencia actual. Ahí use prefer o prefers.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I preferred", "she preferred", "has preferred", "chose"],
          example: {
            target: "She preferred the shade.",
            translation: "Ella prefirió la sombra."
          }
        },
        {
          term: "prefer to + verb",
          explanation:
            "Preferir hacer algo. A diferencia del español, el inglés normalmente pone “to” antes del segundo verbo.",
          literal: "preferir hacer",
          useWhen:
            "Escoge una acción: “prefer to wait,” “prefers to see,” “prefer to sit.”",
          avoidWhen:
            "Lo combina con would rather. Ahí no va “to”: “I'd rather sit.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["prefer not to", "would prefer to", "rather", "infinitive"],
          example: {
            target: "I prefer to sit in the back.",
            translation: "Prefiero sentarme atrás."
          }
        },
        {
          term: "I'd prefer",
          explanation:
            "Preferiría. Suena más suave y diplomático que “I prefer.”",
          literal: "yo preferiría",
          useWhen:
            "Expresa una preferencia dejando espacio para el grupo, el anfitrión o las circunstancias.",
          avoidWhen:
            "Una decisión rápida y casual basta. Si todo es simple, “I prefer” funciona.",
          register: "cortés neutro",
          region: "Inglés universal.",
          related: ["I prefer", "if that's okay", "would rather", "I'd like"],
          example: {
            target: "I'd prefer to stay here, if that's okay.",
            translation: "Preferiría quedarme aquí, si se puede."
          }
        },
        {
          term: "I'd rather",
          explanation:
            "Más bien preferiría. Es muy común para preferencias, pero va seguido del verbo base sin “to.”",
          literal: "yo preferiría / más bien",
          useWhen:
            "Compara acciones de manera natural: “I'd rather sit,” “I'd rather wait,” “I'd rather not.”",
          avoidWhen:
            "Meter “to” después. “I'd rather to sit” es el calco que hay que evitar.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["would prefer", "rather not", "prefer to", "instead"],
          example: {
            target: "I'd rather sit under the tree.",
            translation: "Prefiero sentarme bajo el árbol."
          }
        }
      ],
      note:
        "Prefer es formalmente más fácil que preferir: I prefer, she prefers, preferred. La dificultad está en lo que sigue. “Prefer to sit” lleva to; “would rather sit” no. Y para sonar menos tajante, “I'd prefer” o “I'd rather” suelen funcionar mejor que un “I prefer” pelado.",
      culture: [
        {
          label: "La preferencia necesita alternativa",
          body:
            "Igual que preferir, prefer mira dos opciones aunque una quede implícita. “I prefer the shade” significa shade over sun. Si sólo quiere decir que algo le gusta, like o love pueden ser suficientes."
        },
        {
          label: "Would suaviza sin alargar demasiado",
          body:
            "En inglés, “I'd prefer…” es una forma corta de sonar considerado. No necesita una ceremonia completa. Un “I'd prefer to sit here, if that's okay” puede ser más natural que una frase larguísima buscando respeto."
        },
        {
          label: "Rather compite con prefer",
          body:
            "“I'd rather” aparece muchísimo en conversación. Para un hispanohablante, la trampa es ponerle “to” porque viene de “prefer to.” La estructura correcta es “I'd rather sit,” “I'd rather wait,” “I'd rather not.”"
        },
        {
          label: "El sol también decide en Sídney",
          body:
            "Un festival australiano al aire libre hace entendible la preferencia por la sombra. La frase no suena caprichosa cuando el contexto físico la justifica. Dar una razón breve vuelve la preferencia socialmente cómoda."
        }
      ],
      pitfalls: [
        {
          mistake: "“I prefers the shade.”",
          whyItFails:
            "La -s sólo va con he, she o it. Con I, el verbo queda “prefer,” sin -s.",
          sayInstead: "I prefer the shade."
        },
        {
          mistake: "“She prefer the front.”",
          whyItFails:
            "Con she en presente, el inglés exige la -s: prefers. Es una marca pequeña pero obligatoria.",
          sayInstead: "She prefers the front."
        },
        {
          mistake: "“I prefer sit in the back.”",
          whyItFails:
            "Después de prefer, el segundo verbo normalmente necesita “to.” El español no tiene esa pieza, pero el inglés sí.",
          sayInstead: "I prefer to sit in the back."
        },
        {
          mistake: "“I'd rather to sit under the tree.”",
          whyItFails:
            "Would rather no funciona como prefer. Después de rather viene el verbo base, sin “to.”",
          sayInstead: "I'd rather sit under the tree."
        }
      ],
      variations: [
        {
          form: "I prefer the shade.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Decir su elección entre dos sitios o planes."
        },
        {
          form: "What do you prefer?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Invitar a la otra persona a comparar opciones."
        },
        {
          form: "She preferred to sit in the back.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Reportar una elección pasada ya tomada."
        },
        {
          form: "I'd prefer to stay here, if that's okay.",
          register: "cortés neutro",
          region: "Inglés universal",
          whenToUse: "Dar una preferencia suave cuando decide el grupo."
        },
        {
          form: "I'd rather not sit in the sun.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Poner un límite calmado alrededor de una opción."
        }
      ],
      prompt: "Andrés says “I'd rather sit under the tree.” ¿Qué estructura debe recordar?",
      choices: [
        "Would rather exige “to” antes de cualquier segundo verbo.",
        "Would rather sólo funciona para gustos de comida y música.",
        "Would rather va seguido del verbo base, sin “to.”"
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa bien la tercera persona en presente?",
          choices: [
            "My aunt prefer the front.",
            "My aunt prefers the front.",
            "My aunt preferring the front."
          ],
          answer: 1,
          tests: "third-person -s in prefers"
        },
        {
          prompt: "¿Cuál frase usa bien prefer antes de otro verbo?",
          choices: [
            "I prefer to sit in the shade.",
            "I prefer sit in the shade.",
            "I prefer for sit in the shade."
          ],
          answer: 0,
          tests: "prefer to + verb"
        },
        {
          prompt: "¿Qué efecto tiene “I'd prefer” frente a “I prefer”?",
          choices: [
            "Hace que la preferencia suene más rígida y cerrada.",
            "Suaviza la preferencia sin dejar de expresar la elección.",
            "Convierte la frase en un gusto sin ninguna comparación."
          ],
          answer: 1,
          tests: "I'd prefer as softened preference"
        },
        {
          prompt: "¿Cuál frase traduce correctamente “ella prefirió la sombra”?",
          choices: [
            "She preferred the shade.",
            "She prefers yesterday shade.",
            "She did prefered the shade."
          ],
          answer: 0,
          tests: "regular past preferred"
        }
      ]
    }
  },
  {
    id: "softening-hate-at-the-quibdo-sound-check",
    level: "Developing · Likes and dislikes",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "odiar",
    review: "pending",
    es: {
      title: "Suavizar lo que no soportas en Quibdó",
      situation:
        "You go with Marcela to a community rehearsal in Quibdó. The sound is very loud, one neighbor rubs people the wrong way, and someone asks whether you hate the music. You need to express dislike without sounding cruel or exaggerated.",
      setting: {
        who: "Marcela helps organize a community rehearsal and knows everyone enough to be careful with names. Chris is a guest who dislikes the volume but does not want to insult the room.",
        what: "A conversation about strong dislike: when odiar is honest, when it is too heavy, and which softer Colombian phrases keep the peace.",
        when: "Late afternoon, during a sound check before a small neighborhood performance.",
        where: "Quibdó, Chocó, in a community hall with rain starting outside and speakers being tested inside.",
        why: "Because odiar exists, but it is strong. Colombian Spanish often reaches first for softer forms: no me gusta nada, no me llama la atención, no soy muy de, and me cae mal for people."
      },
      address: {
        form: "usted",
        who: "Marcela and Chris use usted because he is a guest in a community space and she is guiding him carefully.",
        why: "Usted lets the correction stay kind. The scene is friendly, but the topic is sensitive: dislike can hurt people if it lands too directly.",
        ifYouSwitch:
          "Tú would make the exchange warmer but also more casual than the setting needs. With usted, Marcela can teach him how to soften without sounding like she is scolding."
      },
      dialogue: [
        {
          speaker: "Chris",
          target: "No odio la música, pero este volumen no me gusta nada.",
          translation: "I don't hate the music, but I really don't like this volume.",
          pronunciation: "no OH-dyoh lah MOO-see-kah, PEH-roh ES-teh boh-LOO-men no meh GOOS-tah NAH-dah",
          literal: "I don't hate the music, but this volume does not please me at all.",
          why: "Chris avoids the heavy verb for the whole event and places the dislike on the volume. “No me gusta nada” is strong but less aggressive than “odio esto.”"
        },
        {
          speaker: "Marcela",
          target: "Así está mejor. Decir “odio esta música” suena durísimo.",
          translation: "That's better. Saying “I hate this music” sounds really harsh.",
          pronunciation: "ah-SEE es-TAH meh-HOR. deh-SEER OH-dyoh ES-tah MOO-see-kah SWEH-nah doo-REE-see-moh",
          literal: "Like-that it-is better. To-say I-hate this music sounds very hard.",
          why: "Odiar is not forbidden; it is just sharp. Marcela hears the difference between rejecting the volume and insulting what the room cares about."
        },
        {
          speaker: "Chris",
          target: "Entonces digo que no soy muy de ensayos con parlantes tan cerca.",
          translation: "Then I'll say I'm not really into rehearsals with speakers that close.",
          pronunciation: "en-TON-ses DEE-goh keh no soy mwee deh en-SAH-yos kon par-LAHN-tes tan SER-kah",
          literal: "Then I say that I am not very of rehearsals with speakers so close.",
          why: "“No soy muy de…” is a soft self-description. It makes the limit about your taste, not about other people's judgment."
        },
        {
          speaker: "Marcela",
          target: "Exacto. Y si alguien le cae mal, tampoco diga que lo odia de una.",
          translation: "Exactly. And if someone rubs you the wrong way, don't say you hate him right away either.",
          pronunciation: "eg-SAK-toh. ee see AHL-gyen leh kah-eh mal, tam-POH-koh DEE-gah keh lo OH-dyah deh OO-nah",
          literal: "Exactly. And if someone falls badly to-you, neither say that you hate him at once.",
          why: "For people, “me cae mal” is the everyday dislike phrase. “Lo odio” is much heavier, especially if the person is part of the community."
        },
        {
          speaker: "Chris",
          target: "El vecino de la puerta no me llama la atención, pero no lo odio.",
          translation: "The neighbor by the door doesn't really appeal to me, but I don't hate him.",
          pronunciation: "el beh-SEE-noh deh lah PWER-tah no meh YAH-ma lah ah-ten-SYON, PEH-roh no lo OH-dyoh",
          literal: "The neighbor of the door does not call my attention, but I don't hate him.",
          why: "“No me llama la atención” is useful when the reaction is mild or uninterested. It lowers the temperature before anyone gets hurt."
        },
        {
          speaker: "Marcela",
          target: "Eso. Reserve “odio” para algo fuerte de verdad, no para cualquier molestia.",
          translation: "Exactly. Save “I hate” for something truly strong, not for every annoyance.",
          pronunciation: "EH-soh. rreh-SER-beh OH-dyoh PAH-rah AHL-goh FWER-teh deh ber-DAHD, no PAH-rah kwal-KYER moh-LES-tyah",
          literal: "That. Reserve I-hate for something strong of truth, not for any annoyance.",
          why: "The final advice is register, not grammar. A learner who can soften dislike sounds more adult than one who can only say the strongest word."
        }
      ],
      vocabulary: [
        {
          term: "odiar",
          explanation:
            "To hate. It is a real verb, but it is strong and can sound harsher in Colombian conversation than learners expect.",
          literal: "to hate",
          useWhen:
            "The rejection is intense and you are willing to sound intense: cruelty, serious harm, a thing you truly cannot stand.",
          avoidWhen:
            "You mean mild dislike, lack of interest, or a person who simply bothers you. Softer phrases usually fit better.",
          register: "strong",
          region: "Universal Spanish; use carefully in Colombian social settings.",
          related: ["no me gusta nada", "me cae mal", "detestar", "no soportar"],
          example: {
            target: "No odio la música.",
            translation: "I don't hate the music."
          }
        },
        {
          term: "no me gusta nada",
          explanation:
            "I don't like it at all. Strong dislike without the full force of hate.",
          literal: "it does not please me at all",
          useWhen:
            "You need to be clear that something bothers you: a volume, smell, habit, plan or flavor.",
          avoidWhen:
            "You are talking about a person and want to stay diplomatic. Then “me cae mal” or a more specific reason may be better.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["no me gusta", "no soporto", "me molesta", "odio"],
          example: {
            target: "Este volumen no me gusta nada.",
            translation: "I don't like this volume at all."
          }
        },
        {
          term: "no soy muy de…",
          explanation:
            "I'm not really into… A soft way to make dislike about your own taste rather than condemning the thing.",
          literal: "I am not very of…",
          useWhen:
            "Declining or distancing yourself from plans, styles, crowds, noise or activities.",
          avoidWhen:
            "The issue is serious harm or a firm boundary. This phrase can sound too gentle for real danger.",
          register: "friendly informal",
          region: "General Spanish; common in Colombia.",
          related: ["no me llama la atención", "no es lo mío", "prefiero otra cosa", "paso"],
          example: {
            target: "No soy muy de fiestas con tanto ruido.",
            translation: "I'm not really into parties with that much noise."
          }
        },
        {
          term: "me cae mal",
          explanation:
            "I dislike them as a person, or they rub me the wrong way. It is the usual alternative to hating a person.",
          literal: "they fall badly to me",
          useWhen:
            "Someone's manner, behavior or presence bothers you, and you want a normal social phrase.",
          avoidWhen:
            "You only disagree with one action. “Me cae mal” judges the person more broadly.",
          register: "neutral",
          region: "Universal Spanish; everyday in Colombia.",
          related: ["me cae bien", "no lo soporto", "me molesta", "odiar"],
          example: {
            target: "Ese vecino me cae mal.",
            translation: "That neighbor rubs me the wrong way."
          }
        },
        {
          term: "no me llama la atención",
          explanation:
            "It doesn't appeal to me; it doesn't catch my interest. A very useful soft negative.",
          literal: "it does not call my attention",
          useWhen:
            "Your reaction is mild disinterest rather than active dislike.",
          avoidWhen:
            "You are furious or deeply opposed. This phrase deliberately lowers the temperature.",
          register: "neutral",
          region: "Universal Spanish; common in Colombia.",
          related: ["no me interesa", "no soy muy de", "me da igual", "no me convence"],
          example: {
            target: "Ese plan no me llama la atención.",
            translation: "That plan doesn't really appeal to me."
          }
        },
        {
          term: "no soporto",
          explanation:
            "I can't stand. Strong, but often more idiomatic than odiar for repeated irritations.",
          literal: "I do not support / bear",
          useWhen:
            "A sound, habit, heat, smell or behavior repeatedly gets under your skin.",
          avoidWhen:
            "You need to stay very diplomatic. It is still a strong complaint.",
          register: "strong informal",
          region: "Universal Spanish.",
          related: ["me molesta", "no aguanto", "odio", "me fastidia"],
          example: {
            target: "No soporto ese ruido tan cerca.",
            translation: "I can't stand that noise so close."
          }
        },
        {
          term: "de una",
          explanation:
            "Right away, immediately, without much delay. Here it warns against jumping straight to a harsh word.",
          literal: "of one",
          useWhen:
            "Something happens immediately: saying a thing, accepting a plan, reacting too fast.",
          avoidWhen:
            "Formal writing. It is conversational and very Colombian-sounding in this use.",
          register: "friendly informal",
          region: "Very common in Colombia.",
          related: ["enseguida", "de inmediato", "ya mismo", "sin pensarlo"],
          example: {
            target: "No diga que lo odia de una.",
            translation: "Don't say you hate him right away."
          }
        }
      ],
      note:
        "Odiar is honest Spanish, but it is not the neutral way to dislike everything. In Colombian conversation, a softer phrase often says the truth better: “no me gusta nada” for a thing that bothers you, “me cae mal” for a person, “no me llama la atención” for mild disinterest, and “no soy muy de…” when you want the dislike to sound like your taste rather than a verdict.",
      culture: [
        {
          label: "Strong words travel fast",
          body:
            "In a community space, saying you hate the music can land as saying you hate the people who made it. Colombian politeness often protects relationships by naming the specific problem: the volume, the timing, the crowd, the heat."
        },
        {
          label: "No soy muy de is social cushioning",
          body:
            "“No soy muy de…” lets you decline without declaring the thing bad. It is useful for noise, crowds, genres, plans and habits. The phrase keeps the judgment inside your own taste, which is why it works so well."
        },
        {
          label: "People take different verbs",
          body:
            "For people, “me cae mal” is usually safer and more accurate than “lo odio.” It can still be negative, but it does not sound like a feud. That matters in places where everyone may know everyone else."
        },
        {
          label: "Quibdó is not just a sound",
          body:
            "Chocó has deep musical traditions, but a lesson should not reduce a place to volume. The scene is about being a respectful guest: you can dislike a practical detail while still respecting the people and the culture around it."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “odio” as the default for every dislike",
          whyItFails:
            "Odiar is strong. If the feeling is irritation, boredom or mild dislike, the strongest verb can make you sound childish or insulting.",
          sayInstead: "No me gusta nada este volumen."
        },
        {
          mistake: "Saying “odio a ese vecino” casually",
          whyItFails:
            "About a person, hate is heavy. Unless you mean something serious, “me cae mal” is the ordinary social phrase.",
          sayInstead: "Ese vecino me cae mal."
        },
        {
          mistake: "Using “no me llama la atención” for a serious boundary",
          whyItFails:
            "That phrase is mild and almost detached. If the problem is serious or unsafe, it softens too much.",
          sayInstead: "No soporto ese comportamiento."
        },
        {
          mistake: "Attacking the whole event when only one detail bothers you",
          whyItFails:
            "Saying “odio esto” can insult the room. Naming the exact problem is more precise and more respectful.",
          sayInstead: "La música me gusta, pero el volumen no."
        }
      ],
      variations: [
        {
          form: "No odio la música.",
          register: "strong careful",
          region: "Universal Spanish",
          whenToUse: "Denying that your dislike reaches the level of hate."
        },
        {
          form: "Este volumen no me gusta nada.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Strongly disliking a thing without using hate."
        },
        {
          form: "No soy muy de ensayos ruidosos.",
          register: "friendly informal",
          region: "General Spanish",
          whenToUse: "Making a dislike sound like personal taste."
        },
        {
          form: "Ese vecino me cae mal.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Saying a person rubs you the wrong way."
        },
        {
          form: "Ese plan no me llama la atención.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Expressing mild disinterest rather than strong dislike."
        }
      ],
      prompt: "Why does Marcela warn Chris about saying “odio esta música”?",
      choices: [
        "Because odiar is a strong word and can sound like an insult to the room.",
        "Because odiar is never used in Colombian Spanish under any circumstances.",
        "Because odiar can only describe food and never music, people or plans."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence strongly dislikes the volume without using hate?",
          choices: [
            "Este volumen no me gusta nada.",
            "Este volumen me llama mucho la atención.",
            "Este volumen me cae muy bien."
          ],
          answer: 0,
          tests: "no me gusta nada as strong dislike"
        },
        {
          prompt: "Which phrase is best for a person who rubs you the wrong way?",
          choices: [
            "Ese vecino no me llama la atención.",
            "Ese vecino me cae mal.",
            "Ese vecino no soy muy de."
          ],
          answer: 1,
          tests: "me cae mal for disliking a person"
        },
        {
          prompt: "What does “no soy muy de ensayos ruidosos” do?",
          choices: [
            "It makes the dislike a softer statement about personal taste.",
            "It accuses everyone at the rehearsal of behaving cruelly.",
            "It says the speaker hates every kind of music equally."
          ],
          answer: 0,
          tests: "no soy muy de as soft self-framing"
        },
        {
          prompt: "When is “no me llama la atención” a good choice?",
          choices: [
            "When the reaction is mild disinterest rather than serious anger.",
            "When a person has done serious harm and must be confronted.",
            "When the speaker wants the harshest possible rejection."
          ],
          answer: 0,
          tests: "no me llama la atención for mild disinterest"
        }
      ]
    },
    en: {
      title: "Suavizar lo que no soporta en Manchester",
      situation:
        "Usted acompaña a Marcy a un ensayo comunitario en Manchester. El sonido está muy alto, un vecino cae pesado y alguien pregunta si usted hates la música. Necesita expresar rechazo en inglés sin sonar cruel ni exagerado.",
      setting: {
        who: "Marcy ayuda a organizar un ensayo comunitario y conoce a todos lo suficiente para cuidar los nombres. Cristina es invitada y no le gusta el volumen, pero no quiere insultar a nadie.",
        what: "Una conversación sobre rechazo fuerte: cuándo hate es honesto, cuándo pesa demasiado, y qué frases inglesas suavizan mejor la incomodidad.",
        when: "Al final de la tarde, durante una prueba de sonido antes de una presentación pequeña del barrio.",
        where: "Manchester, Inglaterra, en un salón comunitario mientras empieza a llover afuera.",
        why: "Porque hate existe, pero en inglés también puede sonar fuerte con personas y gustos ajenos. Frases como “I don't really like,” “I'm not really into,” y “he rubs me the wrong way” ayudan a medir el golpe."
      },
      address: {
        form: "mixed",
        who: "Marcy y Cristina usan el mismo “you”; la delicadeza está en las frases de rechazo, no en el pronombre.",
        why: "El inglés no tiene un usted que suavice la crítica. Si Cristina quiere cuidar la relación, debe escoger verbos y marcos menos duros.",
        ifYouSwitch:
          "No hay otro “you” al cual cambiar. La salida no es sonar formal, sino decir con precisión qué le molesta y cuánto."
      },
      dialogue: [
        {
          speaker: "Cristina",
          target: "I don't hate the music, but I really don't like this volume.",
          translation: "No odio la música, pero este volumen no me gusta nada.",
          pronunciation: "ai dount jeit da MIU-zik, bot ai RI-li dount laik dis VOL-ium",
          literal: "Yo no odio la música, pero realmente no gusto este volumen.",
          why: "Cristina evita poner hate sobre toda la música y ubica el rechazo en el volumen. “Really don't like” es fuerte sin llegar a “hate.”"
        },
        {
          speaker: "Marcy",
          target: "That's better. Saying “I hate this music” sounds really harsh.",
          translation: "Así está mejor. Decir “odio esta música” suena durísimo.",
          pronunciation: "dats BE-ter. SEI-ing ai jeit dis MIU-zik saunds RI-li jarsh",
          literal: "Eso está mejor. Decir “yo odio esta música” suena realmente áspero.",
          why: "Hate no está prohibido; simplemente pega duro. Marcy oye la diferencia entre rechazar un detalle técnico e insultar algo que el grupo valora."
        },
        {
          speaker: "Cristina",
          target: "Then I'll say I'm not really into rehearsals with speakers that close.",
          translation: "Entonces digo que no soy muy de ensayos con parlantes tan cerca.",
          pronunciation: "den ail sei aim not RI-li IN-tu ri-JER-sals uid SPI-kers dat klous",
          literal: "Entonces diré que no estoy realmente dentro de ensayos con parlantes tan cerca.",
          why: "“I'm not really into…” hace lo mismo que “no soy muy de…”: presenta el límite como gusto personal, no como sentencia contra los demás."
        },
        {
          speaker: "Marcy",
          target: "Exactly. And if someone rubs you the wrong way, don't say you hate him right away.",
          translation: "Exacto. Y si alguien le cae mal, tampoco diga que lo odia de una.",
          pronunciation: "eg-ZAKT-li. and if SOM-uan robs yu da rong wei, dount sei yu jeit jim rait a-WEI",
          literal: "Exactamente. Y si alguien lo frota de la manera equivocada, no diga que usted lo odia enseguida.",
          why: "Para personas, “rubs you the wrong way” suele ser menos pesado que “you hate him.” Describe una mala reacción sin declarar guerra."
        },
        {
          speaker: "Cristina",
          target: "The neighbor by the door doesn't really appeal to me, but I don't hate him.",
          translation: "El vecino de la puerta no me llama la atención, pero no lo odio.",
          pronunciation: "da NEI-bor bai da dor DA-sent RI-li a-PIL tu mi, bot ai dount jeit jim",
          literal: "El vecino por la puerta no apela realmente a mí, pero no lo odio.",
          why: "“Doesn't appeal to me” baja la temperatura. Puede sonar algo más distante que “isn't my kind of person,” pero aquí sirve porque Cristina evita una acusación personal fuerte."
        },
        {
          speaker: "Marcy",
          target: "That's it. Save “hate” for something truly strong, not every annoyance.",
          translation: "Eso. Reserve “odio” para algo fuerte de verdad, no para cualquier molestia.",
          pronunciation: "dats it. seiv jeit for SOM-thing TRU-li strong, not EV-ri a-NOI-ans",
          literal: "Eso es. Guarde “odio” para algo verdaderamente fuerte, no cada molestia.",
          why: "La lección final es de registro. Quien sabe graduar el rechazo suena más adulto que quien traduce todo con la palabra más intensa."
        }
      ],
      vocabulary: [
        {
          term: "hate",
          explanation:
            "Odiar. Es una palabra real y común, pero puede sonar fuerte, sobre todo con personas o cosas que otros valoran.",
          literal: "odiar",
          useWhen:
            "El rechazo es intenso y usted está dispuesto a sonar intenso: daño serio, crueldad, algo que de verdad no soporta.",
          avoidWhen:
            "Quiere expresar molestia leve, falta de interés o una persona que simplemente le cae mal.",
          register: "fuerte",
          region: "Inglés universal.",
          related: ["really don't like", "can't stand", "dislike", "rub the wrong way"],
          example: {
            target: "I don't hate the music.",
            translation: "No odio la música."
          }
        },
        {
          term: "really don't like",
          explanation:
            "No gustar nada. Marca rechazo claro sin llegar a la fuerza completa de hate.",
          literal: "realmente no gustar",
          useWhen:
            "Algo le molesta bastante: volumen, olor, hábito, plan o sabor.",
          avoidWhen:
            "Necesita nombrar odio real o un límite muy duro. Ahí puede hacer falta una frase más fuerte.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["don't like", "can't stand", "hate", "it bothers me"],
          example: {
            target: "I really don't like this volume.",
            translation: "Este volumen no me gusta nada."
          }
        },
        {
          term: "I'm not really into…",
          explanation:
            "No soy muy de… Una manera suave de decir que algo no va mucho con usted.",
          literal: "no estoy realmente dentro de…",
          useWhen:
            "Toma distancia de planes, estilos, multitudes, ruido o actividades sin condenarlas.",
          avoidWhen:
            "El problema es serio o peligroso. Esta frase puede sonar demasiado suave.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["not my thing", "doesn't appeal to me", "I'd rather not", "I'm not a fan"],
          example: {
            target: "I'm not really into loud rehearsals.",
            translation: "No soy muy de ensayos ruidosos."
          }
        },
        {
          term: "rub someone the wrong way",
          explanation:
            "Caerle mal a alguien o producirle mala reacción. Es menos definitivo que odiar a una persona.",
          literal: "frotar a alguien de la manera equivocada",
          useWhen:
            "La manera de ser, el comportamiento o la presencia de alguien le molesta.",
          avoidWhen:
            "Sólo está en desacuerdo con una acción aislada. La frase sugiere una reacción más general a la persona.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["don't like him", "get on my nerves", "he bothers me", "hate him"],
          example: {
            target: "That neighbor rubs me the wrong way.",
            translation: "Ese vecino me cae mal."
          }
        },
        {
          term: "doesn't appeal to me",
          explanation:
            "No me llama la atención. Expresa falta de interés o atracción sin sonar agresivo.",
          literal: "no apela a mí",
          useWhen:
            "La reacción es desinterés moderado, no enojo ni rechazo fuerte.",
          avoidWhen:
            "Está furioso o necesita marcar un límite serio. Esta frase baja deliberadamente la temperatura.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["not interested", "not really into", "not my thing", "doesn't grab me"],
          example: {
            target: "That plan doesn't appeal to me.",
            translation: "Ese plan no me llama la atención."
          }
        },
        {
          term: "can't stand",
          explanation:
            "No soportar. Fuerte, pero muy idiomático para molestias repetidas.",
          literal: "no poder pararse",
          useWhen:
            "Un sonido, hábito, calor, olor o comportamiento le saca la paciencia una y otra vez.",
          avoidWhen:
            "Quiere ser muy diplomático. Aunque no sea hate, sigue siendo una queja fuerte.",
          register: "fuerte informal",
          region: "Inglés universal.",
          related: ["really don't like", "hate", "get on my nerves", "can't bear"],
          example: {
            target: "I can't stand that noise so close.",
            translation: "No soporto ese ruido tan cerca."
          }
        },
        {
          term: "right away",
          explanation:
            "De una, enseguida, inmediatamente. Aquí advierte contra saltar directo a una palabra dura.",
          literal: "enseguida",
          useWhen:
            "Algo sucede de inmediato: decir algo, aceptar un plan, reaccionar sin pausa.",
          avoidWhen:
            "Necesita un registro más formal. “Immediately” o “at once” pueden sonar más cuidados.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["immediately", "at once", "straight away", "without thinking"],
          example: {
            target: "Don't say you hate him right away.",
            translation: "No diga que lo odia de una."
          }
        }
      ],
      note:
        "Hate es útil, pero no debe cargar todos los rechazos. En inglés adulto, “I really don't like…” sirve para una cosa que molesta, “he rubs me the wrong way” para una persona, “it doesn't appeal to me” para desinterés, y “I'm not really into…” para volver la negativa una cuestión de gusto propio. Esa escala evita sonar cruel sin volverse falso.",
      culture: [
        {
          label: "Hate puede pegar demasiado",
          body:
            "En inglés se oye “I hate waiting” o “I hate this weather” de forma casual, pero con personas o con algo que alguien acaba de crear puede sonar duro. El contexto decide si es desahogo normal o insulto."
        },
        {
          label: "Not really into suaviza mucho",
          body:
            "“I'm not really into…” es una herramienta social muy útil. No dice que el plan sea malo; dice que no va mucho con usted. Por eso funciona con música, multitudes, deportes, fiestas y estilos."
        },
        {
          label: "Las personas necesitan cuidado",
          body:
            "“I hate him” es pesado. Si alguien simplemente le cae mal, “he rubs me the wrong way” o “I don't really get along with him” suele ser más exacto y menos incendiario."
        },
        {
          label: "La precisión reemplaza el usted",
          body:
            "Como el inglés no tiene usted, no puede suavizar una crítica cambiando de pronombre. La cortesía aparece en el grado de la frase: don't really like, can't stand, hate. Escoger el nivel correcto es parte del respeto."
        }
      ],
      pitfalls: [
        {
          mistake: "“I hate it” for every dislike.",
          whyItFails:
            "Hate es fuerte. Si el sentimiento es molestia, aburrimiento o desinterés, la palabra más intensa puede sonar infantil o hiriente.",
          sayInstead: "I really don't like this volume."
        },
        {
          mistake: "“I hate that neighbor” casually.",
          whyItFails:
            "Con una persona, hate pesa mucho. Si sólo le cae mal, el inglés tiene frases menos definitivas.",
          sayInstead: "That neighbor rubs me the wrong way."
        },
        {
          mistake: "“It doesn't appeal to me” for a serious boundary.",
          whyItFails:
            "La frase es suave y casi distante. Si el problema es serio o inseguro, baja demasiado la fuerza del mensaje.",
          sayInstead: "I can't stand that behavior."
        },
        {
          mistake: "“I hate this whole thing” when one detail bothers you.",
          whyItFails:
            "Ataca el evento entero aunque el problema sea el volumen. En inglés, igual que en español, nombrar el detalle evita insultar a todos.",
          sayInstead: "I like the music, but not the volume."
        }
      ],
      variations: [
        {
          form: "I don't hate the music.",
          register: "fuerte cuidadoso",
          region: "Inglés universal",
          whenToUse: "Negar que el rechazo llegue al nivel de odio."
        },
        {
          form: "I really don't like this volume.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Rechazar una cosa con claridad sin usar hate."
        },
        {
          form: "I'm not really into loud rehearsals.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Hacer que el rechazo suene a gusto personal."
        },
        {
          form: "That neighbor rubs me the wrong way.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Decir que una persona le cae mal sin declarar odio."
        },
        {
          form: "That plan doesn't appeal to me.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Expresar desinterés moderado, no rechazo fuerte."
        }
      ],
      prompt: "Why does Marcy warn Cristina about saying “I hate this music”?",
      choices: [
        "Porque hate es fuerte y puede sonar como un insulto al grupo.",
        "Porque hate nunca se usa en inglés bajo ninguna circunstancia.",
        "Porque hate sólo puede describir comida, nunca música o personas."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase rechaza el volumen con fuerza pero sin usar hate?",
          choices: [
            "I really don't like this volume.",
            "This volume really appeals to me.",
            "This volume rubs me the right way."
          ],
          answer: 0,
          tests: "really don't like as strong dislike"
        },
        {
          prompt: "¿Cuál frase sirve para alguien que le cae mal?",
          choices: [
            "That neighbor doesn't appeal the volume.",
            "That neighbor rubs me the wrong way.",
            "That neighbor isn't really into me."
          ],
          answer: 1,
          tests: "rub someone the wrong way para una persona"
        },
        {
          prompt: "¿Qué hace “I'm not really into loud rehearsals”?",
          choices: [
            "Vuelve el rechazo una frase más suave sobre gusto personal.",
            "Acusa a todos en el ensayo de actuar con crueldad.",
            "Dice que la persona odia todos los géneros musicales."
          ],
          answer: 0,
          tests: "not really into as soft self-framing"
        },
        {
          prompt: "¿Cuándo sirve “doesn't appeal to me”?",
          choices: [
            "Cuando la reacción es desinterés moderado y no enojo serio.",
            "Cuando alguien hizo daño grave y hay que confrontarlo.",
            "Cuando quiere expresar el rechazo más duro posible."
          ],
          answer: 0,
          tests: "doesn't appeal to me for mild disinterest"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/32-developing-likes-and-dislikes.js");
