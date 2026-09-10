// Lesson block: foundation / meeting and arriving.
//
// Each object below is pushed onto the shared `lessons` array that the
// loader has already created. Do not declare `lessons` here; just push.
//
// One curriculum verb per lesson, named in `verb` and actually spoken in
// the `es` dialogue:
//   1. conocer — to know a person or place, to meet
//   2. querer  — to want, to love
//   3. llegar  — to arrive
//
// Every lesson is the same situation told twice. The `es` direction follows
// Alex, an English speaker learning Colombian Spanish in Colombia. The `en`
// direction follows Alejandra, a Colombian Spanish speaker learning English
// in Texas. The two directions mirror each other beat for beat: same number
// of turns, same speaker alternation, same counts in every list.

lessons.push(
  {
    id: "meeting-a-friend-of-a-friend",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "work-and-employment",
    register: "familiar",
    pathways: ["foundation"],
    verb: "conocer",
    review: "pending",
    es: {
      title: "Conocer a la amiga de un amigo",
      situation: "Es viernes por la noche en una terraza de Chapinero, en Bogotá. Alex llegó con Santi, un amigo del intercambio, y Santi lo presenta con Laura, una compañera de la universidad. Es la primera vez que Alex y Laura se ven, así que toca saludar, decir “mucho gusto” y explicar de dónde se conocen todos. Todo pasa en un tono relajado, de tú, entre gente joven.",
      setting: {
        who: "Alex, an English speaker new to Bogotá, meets Laura, a university friend of Santi, the person who brought Alex along tonight.",
        what: "A first introduction at a party: names, a handshake or a single cheek kiss, and the small ritual of explaining how everyone knows each other.",
        when: "Friday night around nine, when the rooftop is filling up but the music is still low enough to actually talk.",
        where: "A rooftop terrace in Chapinero, a lively, young part of central Bogotá full of bars and apartments.",
        why: "Alex wants to stop being Santi's tag-along and become someone Laura actually knows, which is how a social circle slowly opens up."
      },
      address: {
        form: "tú",
        who: "Everyone here is young and the mood is casual, so tú is the default among them from the very first hello.",
        why: "Using tú signals that Alex reads the room as friendly and informal rather than a place that calls for the distance of usted.",
        ifYouSwitch: "Jumping to usted with people your own age at a party can sound cold or oddly stiff, as if you are keeping them at arm's length."
      },
      dialogue: [
        {
          speaker: "Santi",
          target: "Alex, te presento a Laura. Todavía no se conocen, ¿cierto?",
          translation: "Alex, let me introduce you to Laura. You two haven't met yet, right?",
          pronunciation: "AH-lex, te preh-SEN-to a LAU-ra. to-da-VEE-a no se ko-NO-sen, see-EHR-to",
          literal: "Alex, I-you present to Laura. Still not each-other know, right?",
          why: "Introductions here usually come from a third person. “Te presento a” frames it as a small gift, and the reflexive “se conocen” means know one another. The tag “¿cierto?” checks a shared assumption, much like tacking right? onto a sentence in English."
        },
        {
          speaker: "Alex",
          target: "Mucho gusto, Laura. Un placer conocerte.",
          translation: "Nice to meet you, Laura. A real pleasure to meet you.",
          pronunciation: "MOO-cho GOOS-to, LAU-ra. oon plah-SEHR ko-no-SEHR-te",
          literal: "Much pleasure, Laura. A pleasure to-know-you.",
          why: "“Mucho gusto” is the default first-meeting phrase, and “conocer” — never “saber” — is the verb for meeting a person. The infinitive “conocerte” already carries the you inside it, so you do not add a separate pronoun."
        },
        {
          speaker: "Laura",
          target: "Igualmente. ¿Y tú de dónde conoces a Santi?",
          translation: "Likewise. And how do you know Santi?",
          pronunciation: "ee-gwal-MEN-te. ee too de DON-de ko-NO-ses a SAN-tee",
          literal: "Equally. And you from where know to Santi?",
          why: "“Igualmente” returns the greeting in a single word. Notice the personal “a” before Santi: Spanish marks a specific person as a direct object, so it is “conoces a Santi,” never “conoces Santi.”"
        },
        {
          speaker: "Alex",
          target: "Lo conocí en un intercambio de idiomas, hace como un año.",
          translation: "I met him at a language exchange, about a year ago.",
          pronunciation: "lo ko-no-SEE en oon in-ter-KAM-byo de ee-DYO-mas, AH-se KO-mo oon AH-nyo",
          literal: "Him I-met in an exchange of languages, makes like a year.",
          why: "In the preterite, “conocer” changes meaning: “lo conocí” is I met him, the first moment we met, not I knew him. “Hace como un año” softens the time with como, the Colombian way of saying roughly."
        },
        {
          speaker: "Laura",
          target: "¡Ah, claro! Yo te conocía de nombre; Santi habla mucho de ti.",
          translation: "Oh, of course! I knew of you by name; Santi talks about you a lot.",
          pronunciation: "ah, KLA-ro! yo te ko-no-SEE-a de NOM-bre; SAN-tee AH-bla MOO-cho de tee",
          literal: "Ah, clear! I you knew of name; Santi talks much of you.",
          why: "The imperfect “te conocía de nombre” is the ongoing background state of already knowing of someone, set against the one-off preterite “conocí.” That imperfect-versus-preterite pair is exactly how “conocer” splits into knew versus met."
        },
        {
          speaker: "Alex",
          target: "Qué bueno por fin conocer a alguien del grupo; Santi es el único que conozco.",
          translation: "It's great to finally meet someone from the group; Santi's the only one I know.",
          pronunciation: "ke BWEH-no por feen ko-no-SEHR a al-GYEN del GROO-po; SAN-tee es el OO-nee-ko ke ko-NOS-ko",
          literal: "What good for end to-know to someone of-the group; Santi is the only that I-know.",
          why: "The infinitive “conocer” follows “por fin” cleanly. Then the present “conozco” is irregular — it hides a c-to-zc change (conozco, not conoco) that appears only in the yo form, so it rewards memorising."
        }
      ],
      vocabulary: [
        {
          term: "conocer",
          explanation: "To know a person or place through experience, or to meet someone for the first time; it is about acquaintance, not facts.",
          literal: "to know / to be acquainted with",
          useWhen: "You are talking about people, cities, restaurants, songs — anything you know because you have encountered it.",
          avoidWhen: "You mean knowing a fact or knowing how to do something; that is saber, a completely separate verb.",
          register: "neutral",
          region: "Universal across the Spanish-speaking world, including all of Colombia.",
          related: ["saber", "conocido", "reconocer", "desconocido"],
          example: {
            target: "¿Ya conoces a mi hermana?",
            translation: "Have you met my sister yet?"
          }
        },
        {
          term: "mucho gusto",
          explanation: "The standard thing you say when you meet someone: nice to meet you, literally much pleasure.",
          literal: "much pleasure",
          useWhen: "The moment you are introduced to someone, at any level of formality.",
          avoidWhen: "You are greeting someone you already know; then it is just hola or buenas.",
          register: "neutral",
          region: "Universal; in Colombia often warmed up with a smile and a handshake or a single cheek kiss.",
          related: ["encantado", "un placer", "igualmente", "buenas"],
          example: {
            target: "Mucho gusto, soy Alex.",
            translation: "Nice to meet you, I'm Alex."
          }
        },
        {
          term: "un placer",
          explanation: "A slightly warmer, more elegant alternative to mucho gusto: a pleasure.",
          literal: "a pleasure",
          useWhen: "You want to sound a touch more gracious or sincere as you meet someone.",
          avoidWhen: "The setting is very casual and a simple mucho gusto already fits; un placer can feel a little formal.",
          register: "polite",
          region: "Understood everywhere; common in Bogotá's more formal social settings.",
          related: ["mucho gusto", "encantado", "conocerte", "gusto"],
          example: {
            target: "Un placer conocerte.",
            translation: "A pleasure to meet you."
          }
        },
        {
          term: "igualmente",
          explanation: "A one-word way to return a greeting or a good wish: likewise, same to you.",
          literal: "equally",
          useWhen: "Someone says mucho gusto or que estés bien and you want to bounce it right back.",
          avoidWhen: "A fuller reply is expected, such as answering an actual question; igualmente only mirrors.",
          register: "neutral",
          region: "Universal; extremely frequent in Colombian small talk.",
          related: ["mucho gusto", "a ti", "lo mismo", "igual"],
          example: {
            target: "—Mucho gusto. —Igualmente.",
            translation: "—Nice to meet you. —Likewise."
          }
        },
        {
          term: "¿de dónde conoces a…?",
          explanation: "The natural way to ask how two people know each other: from where do you know…?",
          literal: "from where do you know to…?",
          useWhen: "You just learned that two people are already acquainted and you want the backstory.",
          avoidWhen: "You want to ask whether they know each other at all; that is ¿ustedes se conocen?",
          register: "neutral",
          region: "Universal phrasing; the friendly curiosity behind it is very Colombian.",
          related: ["conocerse", "¿se conocen?", "de toda la vida", "del trabajo"],
          example: {
            target: "¿De dónde conoces a Laura?",
            translation: "How do you know Laura?"
          }
        },
        {
          term: "de nombre",
          explanation: "Knowing of someone by name only, without ever having actually met them.",
          literal: "of name",
          useWhen: "You have heard about a person but never been face to face with them.",
          avoidWhen: "You have actually met the person; then you would not downgrade it to de nombre.",
          register: "neutral",
          region: "Universal; pairs naturally with the imperfect conocía in Colombia.",
          related: ["conocía", "de vista", "de oídas", "de fama"],
          example: {
            target: "Te conocía de nombre, no más.",
            translation: "I only knew of you by name."
          }
        },
        {
          term: "saber",
          explanation: "To know a fact, or to know how to do something; the counterpart to conocer that trips learners up.",
          literal: "to know (a fact / how to)",
          useWhen: "You know information or you can do something: sé nadar, sé la respuesta.",
          avoidWhen: "You are talking about being acquainted with a person or place; that always takes conocer.",
          register: "neutral",
          region: "Universal across Colombia and beyond.",
          related: ["conocer", "saber de", "no sé", "sabelotodo"],
          example: {
            target: "Sé quién es, pero no la conozco.",
            translation: "I know who she is, but I haven't met her."
          }
        }
      ],
      note: "The single most useful habit here: use “conocer” for people and places and “saber” for facts and skills, and remember that in the preterite “conocí” flips from knew to met. When you are introduced, a “mucho gusto” answered with “igualmente” carries you through almost any first meeting in Colombia.",
      culture: [
        {
          label: "You are introduced, you don't introduce yourself",
          body: "At a Colombian gathering the person who brought you does the honours, walking you around and saying “te presento a…” for each new face. Marching up to a stranger and announcing your own name can read as slightly abrupt. The unspoken deal is that your friend vouches for you, so the fastest way into a circle is to arrive with someone who already belongs to it and let them pass you along from person to person."
        },
        {
          label: "The many sizes of mucho gusto",
          body: "“Mucho gusto” is the default, but Colombians quietly scale it. A quick nod plus mucho gusto suits a crowded room; “un placer” or “encantado” adds warmth for someone you are genuinely glad to meet; echoing the person's name back — mucho gusto, Laura — is a small touch that people notice and remember. The reply is almost always “igualmente,” and skipping any part of this ritual can make you seem cold even when you never meant to be."
        },
        {
          label: "The friend-of-a-friend chain is everything",
          body: "Colombians call a tight web of contacts la rosca, and social life runs on it. Being introduced as amigo de Santi instantly gives you standing, because you inherit a sliver of Santi's trust. This is why people spend real time spelling out exactly how they know each other; the chain of connections is social currency, and knowing where you sit in it tells everyone in the room how to treat you and whom you can call on later."
        },
        {
          label: "Knowing a place is a badge of belonging",
          body: "The question “¿ya conoces…?” — have you been to, have you experienced it — comes up constantly, about neighborhoods, dishes, and towns. Saying you already conoces Monserrate or the coffee region signals that you are settling in, not just passing through. Colombians take real pride in their regions and love walking a newcomer through everything they still have to conocer, so treat the question as a warm invitation rather than a quiz you might fail."
        }
      ],
      pitfalls: [
        {
          mistake: "¿Sabes a Laura?",
          whyItFails: "Saber is for facts and skills, so this sounds like asking whether someone knows the fact of Laura. Meeting or being acquainted with a person always takes conocer.",
          sayInstead: "¿Conoces a Laura?"
        },
        {
          mistake: "Lo conozco el año pasado.",
          whyItFails: "The present tense can't pin an event to a finished past. To say when you first met someone you need the preterite, which also shifts the meaning to met.",
          sayInstead: "Lo conocí el año pasado."
        },
        {
          mistake: "Conocí Laura en la fiesta.",
          whyItFails: "A specific person acting as a direct object needs the personal a. Dropping it leaves the sentence feeling unfinished to a Colombian ear, like a missing preposition.",
          sayInstead: "Conocí a Laura en la fiesta."
        },
        {
          mistake: "Quiero conocer contigo a las ocho.",
          whyItFails: "Conocer is meeting for the very first time, not arranging to see someone you already know. For a planned meet-up you want a completely different verb.",
          sayInstead: "¿Nos vemos a las ocho?"
        }
      ],
      variations: [
        {
          form: "Mucho gusto.",
          register: "neutral",
          region: "Universal",
          whenToUse: "The safe default for almost any first meeting, formal or casual."
        },
        {
          form: "Un placer conocerte.",
          register: "polite",
          region: "Bogotá",
          whenToUse: "When you want to sound a little warmer and more gracious with a peer."
        },
        {
          form: "Encantado, Alex.",
          register: "polite",
          region: "Universal",
          whenToUse: "A slightly formal, old-school flourish; switch to encantada if you are a woman."
        },
        {
          form: "¡Quiubo! Soy Alex, amigo de Santi.",
          register: "casual",
          region: "Bogotá",
          whenToUse: "Among young people, when you are comfortable introducing yourself directly."
        },
        {
          form: "Hola, ¿cómo vas? Yo soy Alex.",
          register: "casual",
          region: "Universal",
          whenToUse: "A relaxed self-introduction when there is no one around to do it for you."
        }
      ],
      prompt: "You've just been introduced to Laura and want to tell her when you first met Santi. Which sentence does that?",
      choices: [
        "Lo conocí en un intercambio hace un año.",
        "Lo conozco muy bien desde el colegio.",
        "Sé que Santi es tu amigo del alma."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Laura asks how you know Santi. Which reply hands her the shared backstory?",
          choices: [
            "Sí, lo conozco bastante bien ya.",
            "Lo conocí en un intercambio de idiomas.",
            "No, todavía no lo conozco a él."
          ],
          answer: 1,
          tests: "conocer preterite for how you met"
        },
        {
          prompt: "Which sentence keeps the personal a that a specific person requires?",
          choices: [
            "Ayer conocí Bogotá por primera vez.",
            "Quiero conocer un buen restaurante.",
            "Anoche conocí a la novia de Santi."
          ],
          answer: 2,
          tests: "personal a before a person"
        },
        {
          prompt: "Someone says “mucho gusto” to you. What's the natural one-word return?",
          choices: [
            "Igualmente, un placer.",
            "Con mucho gusto, señora.",
            "Muchas gracias a usted."
          ],
          answer: 0,
          tests: "returning a greeting with igualmente"
        },
        {
          prompt: "Which question uses conocer to ask whether Alex has experienced Bogotá?",
          choices: [
            "¿Sabes dónde queda Bogotá?",
            "¿Sabes llegar a Bogotá?",
            "¿Ya conoces Bogotá?"
          ],
          answer: 2,
          tests: "conocer for knowing a place"
        }
      ]
    },
    en: {
      title: "Conocer a la amiga de un amigo",
      situation: "Es viernes por la noche en una terraza en Houston. Alejandra llegó con Sam, un amigo del trabajo, y él le presenta a Lauren, una compañera de la universidad. Es la primera vez que Alejandra y Lauren se ven, así que hay que saludar en inglés, decir “nice to meet you” y contar de dónde se conocen. En inglés no hay tú ni usted, así que todo el peso del registro lo llevan las palabras.",
      setting: {
        who: "Alejandra, que acaba de llegar a Houston, conoce a Lauren, una amiga de la universidad de Sam, quien la llevó a la fiesta.",
        what: "Una primera presentación: nombres, un apretón de manos y el pequeño ritual de explicar cómo se conoce cada quien.",
        when: "Un viernes por la noche, hacia las nueve, cuando la terraza se va llenando y todavía se puede conversar tranquilo.",
        where: "Una terraza en un edificio del centro de Houston, en una zona joven llena de bares y apartamentos.",
        why: "Alejandra quiere dejar de ser la acompañante de Sam y volverse alguien que Lauren de verdad conoce, que es como se abre un círculo social."
      },
      address: {
        form: "mixed",
        who: "En inglés no existe la diferencia entre tú y usted: todos usan you, sin importar la edad ni la confianza.",
        why: "El inglés no marca el respeto con el pronombre sino con las palabras: un por favor, un could you, un saludo más o menos formal. Aquí Alejandra suena cercana sin cambiar de pronombre.",
        ifYouSwitch: "Como no hay usted, si quieres sonar más formal cambias el vocabulario y el tono, no el pronombre: dices nice to meet you en vez de un simple hey."
      },
      dialogue: [
        {
          speaker: "Sam",
          target: "Alejandra, this is Lauren. You two haven't met yet, right?",
          translation: "Alejandra, te presento a Lauren. Todavía no se conocen, ¿cierto?",
          pronunciation: "a-le-JÁN-dra, dis is LÓ-ren. yu tu JÁ-vent met yet, rait",
          literal: "Alejandra, esto es Lauren. Ustedes dos no se han conocido todavía, ¿cierto?",
          why: "En inglés no se traduce “te presento a”; se usa “this is…,” que suena natural y nada formal. “You two” señala a las dos personas a la vez, y el remate “right?” pide confirmación igual que un “¿cierto?” en español."
        },
        {
          speaker: "Alejandra",
          target: "Nice to meet you, Lauren. It's a real pleasure.",
          translation: "Mucho gusto, Lauren. Es un verdadero placer.",
          pronunciation: "nais tu mit yu, LÓ-ren. its a ril PLÉ-shur",
          literal: "Agradable conocerte, Lauren. Es un verdadero placer.",
          why: "“Nice to meet you” es la fórmula fija del primer encuentro; el verbo es “meet,” no “know.” Añadir “it's a real pleasure” sube la calidez sin volverse formal, parecido a decir “un placer” en español."
        },
        {
          speaker: "Lauren",
          target: "Likewise. So, how do you two know each other?",
          translation: "Igualmente. Entonces, ¿de dónde se conocen ustedes dos?",
          pronunciation: "LAIK-uais. so, jau du yu tu nou ich-ÓD-er",
          literal: "Igualmente. Entonces, ¿cómo se conocen ustedes dos?",
          why: "“Likewise” devuelve el saludo en una sola palabra, como “igualmente.” Para preguntar de qué se conocen, el inglés usa “know each other,” donde “each other” hace el papel del reflexivo “se.”"
        },
        {
          speaker: "Alejandra",
          target: "I met him at a language exchange, about a year ago.",
          translation: "Lo conocí en un intercambio de idiomas, hace como un año.",
          pronunciation: "ai met jim at a LÁN-güich eks-CHÉINCH, a-BÁUT a yír a-GÓU",
          literal: "Yo conocí a él en un intercambio de idiomas, hace como un año.",
          why: "Aquí “met” es el pasado de “meet” y equivale a “conocí”: el momento en que se conocieron. El inglés no cambia de verbo como el español entre saber y conocer; usa “meet” para el encuentro y “know” para ya conocer."
        },
        {
          speaker: "Lauren",
          target: "Oh, right! I knew your name — Sam talks about you a lot.",
          translation: "¡Ah, claro! Te conocía de nombre; Sam habla mucho de ti.",
          pronunciation: "ou, rait! ai niú yor neim — sam toks a-BÁUT yu a lot",
          literal: "Oh, correcto. Yo sabía tu nombre — Sam habla acerca de ti mucho.",
          why: "El inglés no separa “conocía” de “conocí” con la forma del verbo: dice “I knew your name” y deja que el contexto marque que es un estado previo. El presente “talks” describe una costumbre, no algo que ocurre en este instante."
        },
        {
          speaker: "Alejandra",
          target: "It's great to finally meet someone from the group. Sam's the only one I know.",
          translation: "Qué bueno por fin conocer a alguien del grupo. Sam es el único que conozco.",
          pronunciation: "its greit tu FÁI-na-li mit SÁM-uan from da grup. sams da ÓN-li uan ai nou",
          literal: "Es genial por fin conocer a alguien del grupo. Sam es el único que yo conozco.",
          why: "“To finally meet” usa el infinitivo con “to,” sin conjugar, donde el español pondría “conocer.” Y “the only one I know” muestra que el inglés repite “know” para el presente, sin el cambio irregular de “conozco.”"
        }
      ],
      vocabulary: [
        {
          term: "to meet",
          explanation: "Conocer a alguien por primera vez, o encontrarse con alguien; en pasado, “met” es justo ese primer encuentro.",
          literal: "conocer / encontrarse",
          useWhen: "Hablas de la primera vez que ves a una persona, o de quedar con alguien.",
          avoidWhen: "Quieres decir que ya conoces bien a alguien; eso es “to know,” no “to meet.”",
          register: "neutral",
          region: "Inglés general; igual en Canadá, Estados Unidos y el Reino Unido.",
          related: ["to know", "to meet up", "to get to know", "nice to meet you"],
          example: {
            target: "I'd love to meet your family.",
            translation: "Me encantaría conocer a tu familia."
          }
        },
        {
          term: "nice to meet you",
          explanation: "La frase fija para cuando te presentan a alguien; literalmente algo así como agradable conocerte.",
          literal: "agradable conocerte",
          useWhen: "Justo cuando te presentan a alguien, en cualquier nivel de formalidad.",
          avoidWhen: "Saludas a alguien que ya conoces; ahí basta con “hi” o “hey.”",
          register: "neutral",
          region: "Universal en inglés; muy usada en Canadá con un apretón de manos.",
          related: ["pleased to meet you", "nice meeting you", "likewise", "hello"],
          example: {
            target: "Nice to meet you, I'm Alejandra.",
            translation: "Mucho gusto, soy Alejandra."
          }
        },
        {
          term: "this is…",
          explanation: "La manera normal de presentar a alguien en inglés: en vez de “te presento a,” se dice “this is.”",
          literal: "esto es…",
          useWhen: "Presentas a una persona a otra en una reunión o fiesta.",
          avoidWhen: "Quieres presentarte a ti mismo; ahí dices “I'm…” o “my name is….”",
          register: "neutral",
          region: "Universal en inglés.",
          related: ["I'd like you to meet", "meet my friend", "have you met", "this is my friend"],
          example: {
            target: "Karen, this is my friend Alejandra.",
            translation: "Karen, te presento a mi amiga Alejandra."
          }
        },
        {
          term: "likewise",
          explanation: "Una palabra para devolver un saludo o un buen deseo: igualmente, lo mismo digo.",
          literal: "igualmente",
          useWhen: "Alguien dice “nice to meet you” y quieres devolvérselo en una sola palabra.",
          avoidWhen: "Se espera una respuesta más larga o la respuesta a una pregunta concreta; “likewise” solo refleja.",
          register: "polite",
          region: "Universal; suena un poco más pulido que “you too.”",
          related: ["you too", "same here", "nice to meet you too", "the pleasure's mine"],
          example: {
            target: "—Nice to meet you. —Likewise.",
            translation: "—Mucho gusto. —Igualmente."
          }
        },
        {
          term: "how do you know…?",
          explanation: "La forma natural de preguntar de qué se conocen dos personas: ¿de dónde se conocen?",
          literal: "¿cómo conoces a…?",
          useWhen: "Acabas de enterarte de que dos personas ya se conocen y quieres la historia.",
          avoidWhen: "Quieres preguntar si se conocen o no; eso es “do you two know each other?”",
          register: "neutral",
          region: "Universal en inglés.",
          related: ["how do you two know each other", "where do you know it from", "do you know", "we go way back"],
          example: {
            target: "So how do you know Sam?",
            translation: "¿Y de dónde conoces a Sam?"
          }
        },
        {
          term: "to know",
          explanation: "Conocer a una persona o lugar, o saber un dato; el inglés usa un mismo verbo para lo que el español parte en saber y conocer.",
          literal: "saber / conocer",
          useWhen: "Ya conoces a alguien, o sabes un hecho: I know her, I know the answer.",
          avoidWhen: "Es la primera vez que ves a la persona; ese primer encuentro es “to meet.”",
          register: "neutral",
          region: "Universal en inglés.",
          related: ["to meet", "to know of", "I know", "well-known"],
          example: {
            target: "I've known Sam for years.",
            translation: "Conozco a Sam desde hace años."
          }
        },
        {
          term: "to know of / by name",
          explanation: "Conocer a alguien solo de nombre o de oídas, sin haberlo visto nunca en persona.",
          literal: "conocer de / por el nombre",
          useWhen: "Has oído hablar de una persona pero jamás la has tratado.",
          avoidWhen: "Ya trataste a la persona cara a cara; entonces no lo rebajas a “of name.”",
          register: "neutral",
          region: "Universal en inglés.",
          related: ["to know of", "by name", "I've heard of", "by reputation"],
          example: {
            target: "I knew you by name only.",
            translation: "Te conocía solo de nombre."
          }
        }
      ],
      note: "El truco más útil: el inglés usa “meet” para el primer encuentro y “know” para cuando ya conoces a alguien o algo, sin partirlo en saber y conocer como el español. Cuando te presenten, un “nice to meet you” y un “likewise” de vuelta te sacan de casi cualquier primer saludo en Canadá.",
      culture: [
        {
          label: "A ti también te presentan, no te presentas solo",
          body: "En una reunión en Canadá también es común que quien te llevó te vaya presentando: “this is Alejandra,” cara por cara. Aun así, presentarte tú mismo con un “hi, I'm Alejandra” se ve mucho más normal que en Colombia y no resulta atrevido. Si nadie te presenta, acércate, di tu nombre y da la mano: en ambientes estadounidenses eso se lee como seguridad y no como falta de modales."
        },
        {
          label: "El tamaño de nice to meet you",
          body: "El inglés también gradúa el saludo. Un “nice to meet you” es el estándar; “it's a pleasure” o “pleased to meet you” suenan más cálidos o formales; repetir el nombre de la persona — nice to meet you, Lauren — cae muy bien. La respuesta suele ser “likewise” o “you too.” A diferencia del español, nada de esto cambia el pronombre, porque el inglés solo tiene you; todo el registro vive en las palabras que eliges."
        },
        {
          label: "La cadena de amigos también cuenta",
          body: "En Canadá presentarte como “a friend of Sam's” también te da entrada, aunque la red social suele sentirse un poco menos apretada que la rosca colombiana. Explicar cómo se conocen sigue siendo parte del ritual: how do you two know each other es de las primeras preguntas. Llegar con alguien conocido facilita todo, pero la gente también hace amistades más rápido con desconocidos que en muchos ambientes colombianos, sobre todo entre jóvenes."
        },
        {
          label: "Conocer un lugar también se presume",
          body: "La pregunta “have you been to…?” aparece todo el tiempo: barrios, restaurantes, pueblos cercanos. Responder que ya conoces el mercado de St. Lawrence o el Álamo muestra que te estás integrando. A los estadounidenses les gusta llevar a un recién llegado a conocer su ciudad, así que conviene tomar la pregunta como una invitación y no como un examen; muchas veces termina en un plan concreto para el fin de semana."
        }
      ],
      pitfalls: [
        {
          mistake: "I know Sam since last year.",
          whyItFails: "En inglés, para una acción que empezó en el pasado y sigue hasta hoy se usa el presente perfecto, no el presente simple. “I know … since” suena incompleto para un oído anglófono.",
          sayInstead: "I've known Sam since last year."
        },
        {
          mistake: "Lauren, I present you my friend.",
          whyItFails: "“I present you” es un calco de “te presento.” En inglés natural se presenta a alguien con “this is” o “I'd like you to meet,” no con el verbo present, que suena a acto de ceremonia.",
          sayInstead: "Lauren, this is my friend."
        },
        {
          mistake: "Are you knowing Lauren?",
          whyItFails: "“Know” es un verbo de estado y no suele ir en presente continuo. El calco del gerundio español (“¿estás conociendo?”) produce “are you knowing,” que a un anglófono le suena raro.",
          sayInstead: "Do you know Lauren?"
        },
        {
          mistake: "How do you know to Sam?",
          whyItFails: "El inglés no usa la a personal del español. Poner “to” antes de la persona (“know to Sam”) es trasladar la a de “conoces a Sam,” y en inglés sobra por completo.",
          sayInstead: "How do you know Sam?"
        }
      ],
      variations: [
        {
          form: "Nice to meet you.",
          register: "neutral",
          region: "Universal",
          whenToUse: "El saludo por defecto para casi cualquier primer encuentro."
        },
        {
          form: "It's a pleasure to meet you.",
          register: "polite",
          region: "Universal",
          whenToUse: "Cuando quieres sonar más cálido o un poco más formal con alguien."
        },
        {
          form: "Pleased to meet you.",
          register: "polite",
          region: "Universal",
          whenToUse: "Un saludo algo más formal y clásico, común al conocer a alguien mayor."
        },
        {
          form: "Hey, I'm Alejandra — a friend of Sam's.",
          register: "casual",
          region: "Universal",
          whenToUse: "Entre gente joven, cuando te presentas tú mismo con confianza."
        },
        {
          form: "Hi, how's it going? I'm Alejandra.",
          register: "casual",
          region: "Universal",
          whenToUse: "Una presentación relajada cuando no hay quien te presente."
        }
      ],
      prompt: "Alejandra le dice a Lauren “I met him at a language exchange about a year ago.” ¿Qué quiere decir con “met”?",
      choices: [
        "Que conoció a Sam por primera vez en un intercambio de idiomas.",
        "Que ve a Sam cada semana en el intercambio de idiomas del barrio.",
        "Que va a presentarle a Sam en el próximo intercambio de idiomas."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Lauren dice “I knew your name — Sam talks about you.” ¿Qué te está diciendo?",
          choices: [
            "Que ya te conocía en persona de una fiesta anterior.",
            "Que te conocía solo de nombre porque Sam te menciona.",
            "Que quiere que le repitas tu nombre porque no lo oyó."
          ],
          answer: 1,
          tests: "knew como conocía de nombre"
        },
        {
          prompt: "En una presentación, ¿qué transmite “Nice to meet you”?",
          choices: [
            "Que es la primera vez que se ven y se saludan con gusto.",
            "Que ya se conocían de antes y se saludan de nuevo hoy.",
            "Que quiere despedirse rápido porque tiene afán de irse."
          ],
          answer: 0,
          tests: "nice to meet you al conocerse"
        },
        {
          prompt: "Alguien te dice “Nice to meet you” y respondes “Likewise.” ¿Qué expresas?",
          choices: [
            "Que a ti también te da gusto conocerlo, igualmente.",
            "Que prefieres que te hablen en español desde ahora.",
            "Que ya lo conocías y no hacía falta presentártelo."
          ],
          answer: 0,
          tests: "likewise como igualmente"
        },
        {
          prompt: "¿Cuál frase en inglés dice bien que conoces a Sam desde el año pasado?",
          choices: [
            "I know Sam since the last year already.",
            "I am knowing Sam since one year ago.",
            "I've known Sam since last year."
          ],
          answer: 2,
          tests: "presente perfecto con since"
        }
      ]
    }
  },
  {
    id: "offering-coffee-at-the-panaderia",
    level: "Starter · Food and drink",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "familiar",
    pathways: ["foundation"],
    verb: "querer",
    review: "pending",
    es: {
      title: "Un tinto en la panadería",
      situation: "Es media mañana en una panadería de Medellín. Alex entra con Manu, un amigo paisa, a tomarse un tinto. Manu le pregunta qué va a querer, insiste en invitar y todo pasa en voseo, con parce y quiubo por todas partes. Es una charla corta y cálida sobre pedir, ofrecer y esa forma paisa de querer a los amigos sin que suene romántico.",
      setting: {
        who: "Alex, learning Colombian Spanish, is out with Manu, an easy-going paisa friend from Medellín who insists on paying.",
        what: "A quick coffee run: ordering a tinto and a snack, turning down and then accepting a treat, and the warm tussle over who pays.",
        when: "Mid-morning, the classic paisa coffee break, when a panadería is busy with people grabbing a tinto standing up.",
        where: "A neighborhood panadería in Medellín, part bakery, part café, part meeting point for the whole block.",
        why: "Alex wants to order naturally in a paisa setting and understand why Manu keeps saying te quiero to a friend without it being romantic."
      },
      address: {
        form: "vos",
        who: "Manu is a close paisa friend, and in Medellín vos is the everyday pronoun between friends of any age.",
        why: "Voseo (querés, insistís, hacés) is the warm default in Medellín; using it back marks Alex as one of the gang rather than a stiff outsider.",
        ifYouSwitch: "Switching to usted with a close paisa friend can sound distant or even annoyed, as if you are suddenly putting up a wall."
      },
      dialogue: [
        {
          speaker: "Manu",
          target: "¡Quiubo, parce! ¿Qué vas a querer?",
          translation: "Hey, man! What are you going to have?",
          pronunciation: "KYOO-bo, PAR-se! ke vas a keh-REHR",
          literal: "What-was, mate! What you-go to want?",
          why: "“Quiubo” is a paisa hello worn down from “¿qué hubo?,” and “parce” is the classic Medellín word for mate. “¿Qué vas a querer?” uses querer to mean what will you order, the normal way to take an order among friends."
        },
        {
          speaker: "Alex",
          target: "Quiero un tinto y un pandebono, por favor.",
          translation: "I'd like a black coffee and a pandebono, please.",
          pronunciation: "KYEH-ro oon TEEN-to ee oon pan-de-BO-no, por fa-VOR",
          literal: "I-want a black-coffee and a pandebono, for favour.",
          why: "“Quiero” is the plainest way to order and it is not rude here, especially softened with por favor. A “tinto” in Colombia is a small black coffee, never wine, and a “pandebono” is a cheese-bread staple."
        },
        {
          speaker: "Manu",
          target: "¿Querés algo más? Yo invito, tranquilo.",
          translation: "Do you want anything else? It's on me, don't worry.",
          pronunciation: "keh-RES AL-go mas? yo een-VEE-to, tran-KEE-lo",
          literal: "Want-you something more? I invite, calm.",
          why: "“Querés” is the voseo form of quieres — same meaning, paisa shape. “Yo invito” does not mean I invite you somewhere; it means I'm paying, the standard way to offer to cover the bill."
        },
        {
          speaker: "Alex",
          target: "No, así está bien. Gracias, parce, te quiero.",
          translation: "No, that's plenty. Thanks, man, love you.",
          pronunciation: "no, a-SEE es-TA byen. GRA-syas, PAR-se, te KYEH-ro",
          literal: "No, like-this is well. Thanks, mate, you I-want.",
          why: "“Te quiero” between friends means love you in a warm, platonic way — nothing romantic. Colombians say it to close friends and family easily, where an English speaker might just say thanks, man."
        },
        {
          speaker: "Manu",
          target: "Jaja, yo también te quiero, hermano. ¿Seguro no querés un quesito?",
          translation: "Haha, love you too, brother. You sure you don't want a quesito?",
          pronunciation: "HA-ha, yo tam-BYEN te KYEH-ro, er-MA-no. se-GOO-ro no keh-RES oon ke-SEE-to",
          literal: "Haha, I also you I-want, brother. Sure not want-you a little-cheese?",
          why: "Returning “te quiero” is automatic and unremarkable between friends. “Hermano” (brother) reinforces the bond, and “quesito” shows the Colombian love of diminutives — a little cheese pastry, made cosier by the -ito ending."
        },
        {
          speaker: "Alex",
          target: "Bueno, si insistís… quiero probar el quesito con el tinto.",
          translation: "Alright, if you insist… I want to try the quesito with the coffee.",
          pronunciation: "BWEH-no, see een-sis-TEES… KYEH-ro pro-BAR el ke-SEE-to kon el TEEN-to",
          literal: "Good, if insist-you… I-want to-try the little-cheese with the black-coffee.",
          why: "“Si insistís” is voseo again (insistes becomes insistís), a playful way to give in. “Quiero probar” shows querer plus an infinitive to mean want to do something, one of the verb's most useful patterns."
        }
      ],
      vocabulary: [
        {
          term: "querer",
          explanation: "To want, and also to love in a warm, non-romantic way; context and the object tell you which one is meant.",
          literal: "to want / to love",
          useWhen: "You are ordering, expressing a wish, or telling a friend you care: quiero, te quiero.",
          avoidWhen: "You mean the deep romantic love of a partner; that is amar, a stronger and more serious verb.",
          register: "neutral",
          region: "Universal; the te quiero-for-friends warmth is especially strong in Colombia.",
          related: ["amar", "querido", "quisiera", "te quiero"],
          example: {
            target: "¿Qué querés tomar?",
            translation: "What do you want to drink?"
          }
        },
        {
          term: "quiubo",
          explanation: "A very Colombian, very paisa hello: what's up, worn down from ¿qué hubo?",
          literal: "what was (there)",
          useWhen: "Greeting friends informally, especially in and around Medellín.",
          avoidWhen: "A formal or first-time meeting; it is far too casual for that.",
          register: "casual",
          region: "Strongly paisa (Medellín and the coffee region), understood countrywide.",
          related: ["quiubo pues", "¿qué más?", "parce", "¿bien o qué?"],
          example: {
            target: "¡Quiubo, parce! ¿Bien o qué?",
            translation: "Hey, man! How's it going?"
          }
        },
        {
          term: "parce",
          explanation: "Mate, buddy, dude — the all-purpose Colombian word for a friend, short for parcero.",
          literal: "buddy (from parcero)",
          useWhen: "Talking to friends your own age in casual settings.",
          avoidWhen: "Addressing someone older, a boss, or anyone who expects respect; use usted and a name.",
          register: "casual",
          region: "Nationwide, with especially deep roots in Medellín.",
          related: ["parcero", "llave", "hermano", "mano"],
          example: {
            target: "Tranquilo, parce, yo invito.",
            translation: "No worries, man, it's on me."
          }
        },
        {
          term: "yo invito",
          explanation: "The set phrase for I'm paying, I'll treat you — not I invite you somewhere.",
          literal: "I invite",
          useWhen: "You want to pay for a friend's coffee or meal.",
          avoidWhen: "You literally mean inviting someone to an event; then you would name the event.",
          register: "neutral",
          region: "Universal across Colombia.",
          related: ["te invito", "yo pago", "la próxima pagás vos", "es mi turno"],
          example: {
            target: "Guardá la plata, yo invito.",
            translation: "Put your money away, it's on me."
          }
        },
        {
          term: "te quiero",
          explanation: "Love you, in the warm platonic sense used with friends and family; softer than te amo.",
          literal: "you I-want",
          useWhen: "Showing affection to friends, family, and close people you care about.",
          avoidWhen: "You want to declare romantic love for the first time; that weight belongs to te amo.",
          register: "neutral",
          region: "Universal; used generously among Colombian friends.",
          related: ["te amo", "te quiero mucho", "un abrazo", "te aprecio"],
          example: {
            target: "Gracias por todo, te quiero.",
            translation: "Thanks for everything, love you."
          }
        },
        {
          term: "querés",
          explanation: "The voseo form of quieres (you want), standard in Medellín and much of Colombia.",
          literal: "you want (voseo)",
          useWhen: "Speaking informally with people who use vos, especially paisas.",
          avoidWhen: "You are in a tú or usted region or setting; match the local pronoun instead.",
          register: "casual",
          region: "Paisa (Medellín), Valle del Cauca, and beyond.",
          related: ["quieres", "vos", "insistís", "hacés"],
          example: {
            target: "¿Vos qué querés pedir?",
            translation: "What do you want to order?"
          }
        },
        {
          term: "quiero probar",
          explanation: "Querer plus an infinitive: I want to try. This is the pattern for wanting to do something.",
          literal: "I-want to-try",
          useWhen: "You want to do an action: quiero probar, quiero ir, quiero ver.",
          avoidWhen: "You want a thing rather than an action; then querer takes a noun, like quiero un tinto.",
          register: "neutral",
          region: "Universal.",
          related: ["quiero ir", "quiero ver", "me gustaría probar", "voy a probar"],
          example: {
            target: "Quiero probar el quesito.",
            translation: "I want to try the quesito."
          }
        }
      ],
      note: "The one thing to carry away: “querer” covers both wanting and a warm kind of loving, so “te quiero” to a friend is affection, not a confession — save “te amo” for romance. To order, a plain “quiero…” plus por favor is perfectly polite, and in Medellín expect the voseo “querés” and a friendly fight over who gets to pay.",
      culture: [
        {
          label: "The panadería is the neighborhood living room",
          body: "In Colombia a panadería is far more than a bakery. People drop in all day for a tinto and a bite, standing at the counter to chat with neighbors and the owner, who often knows them by name. Deals get made, gossip gets traded, kids get sent to buy bread. Suggesting a friend meet you at the corner panadería is as natural as suggesting a coffee, and it quietly anchors the whole block's social life."
        },
        {
          label: "Te quiero is not a confession",
          body: "English speakers often freeze at hearing love you from a friend, but Colombian “te quiero” lives in a warmer, wider space than the English phrase. Friends, cousins, and close workmates say it easily when parting or thanking each other. It signals genuine affection with no romantic charge; that heavier meaning is saved for “te amo.” Refusing to say it back can come across as strangely cold, so a relaxed te quiero too fits right in and keeps the warmth flowing."
        },
        {
          label: "The fight for the bill",
          body: "Offering to pay is a small social sport in Colombia. “Yo invito” is often met with protests, and friends may genuinely tussle over the receipt, each insisting it is their turn. Letting someone always pay can feel like taking advantage, so the graceful move is to lose this round and claim the next one with la próxima pago yo. The generosity is real, but so is the quiet expectation that it will even out between you over time."
        },
        {
          label: "Vos in Medellín is warmth, not slang",
          body: "Paisa voseo — querés, vení, hacés, insistís — is not sloppy or uneducated speech; it is the region's everyday register of closeness. Grandparents, professionals, and children all use it. For a learner, echoing vos with paisa friends signals that you have tuned into how Medellín actually talks, while sticking rigidly to tú can sound faintly foreign or bookish. Usted still exists for distance and respect, but among friends vos clearly rules the day."
        }
      ],
      pitfalls: [
        {
          mistake: "Te amo, parce.",
          whyItFails: "To a friend, te amo lands like a romantic declaration and will earn you a startled look. The friendly, everyday way to show affection is te quiero.",
          sayInstead: "Te quiero, parce."
        },
        {
          mistake: "Estoy queriendo un tinto.",
          whyItFails: "Querer describes a state, so Spanish keeps it in the simple present rather than the progressive. The English I am wanting habit does not transfer over.",
          sayInstead: "Quiero un tinto."
        },
        {
          mistake: "Amo el tinto de aquí.",
          whyItFails: "Using amar for coffee sounds overwrought to Colombian ears. For strong liking of a thing, me encanta is the natural, idiomatic choice instead.",
          sayInstead: "Me encanta el tinto de aquí."
        },
        {
          mistake: "Waiting to hear where yo invito leads.",
          whyItFails: "Hearing yo invito and expecting to learn where you are going misses the point: it simply means the bill is covered. Just accept graciously.",
          sayInstead: "Gracias, parce; la próxima pago yo."
        }
      ],
      variations: [
        {
          form: "Quiero un tinto.",
          register: "neutral",
          region: "Universal",
          whenToUse: "The plain, clear way to order; polite enough with a por favor."
        },
        {
          form: "¿Me regalas un tinto?",
          register: "casual",
          region: "Colombia",
          whenToUse: "A very Colombian softener — literally will you gift me — for ordering warmly."
        },
        {
          form: "¿Me das un tinto, por fa?",
          register: "casual",
          region: "Universal",
          whenToUse: "Relaxed and friendly, with por fa clipping por favor among friends."
        },
        {
          form: "Quisiera un tinto, por favor.",
          register: "polite",
          region: "Universal",
          whenToUse: "The most courteous option, softening the want into I would like."
        },
        {
          form: "Regáleme un tinto, hágame el favor.",
          register: "polite",
          region: "Paisa",
          whenToUse: "A paisa-flavoured polite request using usted and regalar."
        }
      ],
      prompt: "Manu just told you te quiero. What does he actually mean by it?",
      choices: [
        "He's showing warm, friendly affection, nothing romantic.",
        "He is confessing that he has fallen in love with you.",
        "He is inviting you to come along to a party later."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence would make a Colombian friend think you're confessing romantic love?",
          choices: [
            "Te quiero un montón, parce.",
            "Te amo con toda mi alma.",
            "Te aprecio mucho, de verdad."
          ],
          answer: 1,
          tests: "te amo vs te quiero"
        },
        {
          prompt: "Manu says “yo invito.” What is he telling you?",
          choices: [
            "That he wants you to invite him.",
            "That he is inviting you out tonight.",
            "That the coffee is his treat today."
          ],
          answer: 2,
          tests: "yo invito means I'm paying"
        },
        {
          prompt: "In Medellín, which reply turns down the extra pastry in a friendly, paisa way?",
          choices: [
            "No, parce, así estoy bien; gracias.",
            "No quiero nada, déjame en paz.",
            "No, señor, no deseo nada más."
          ],
          answer: 0,
          tests: "casual paisa register"
        },
        {
          prompt: "You want to order a coffee more softly than a flat quiero. Which fits best?",
          choices: [
            "Deme ya mismo un tinto grande.",
            "¿Me regalas un tinto, por fa?",
            "Tiene que darme un tinto ahora."
          ],
          answer: 1,
          tests: "softening a request with regalar"
        }
      ]
    },
    en: {
      title: "Pedir y ofrecer en la cafetería",
      situation: "Es media mañana en una cafetería de Houston. Alejandra entra con Manny, un amigo, a tomarse un café. Manny le pregunta qué quiere, insiste en invitar y ella aprende a pedir y a ofrecer en inglés. Como el inglés no tiene tú ni usted, la cercanía se nota en el tono y en frases como it's on me. Es una charla corta y cálida sobre querer, pedir y el cariño entre amigos.",
      setting: {
        who: "Alejandra, que aprende inglés, sale con Manny, un amigo relajado que insiste en pagar el café.",
        what: "Una salida rápida por café: pedir una bebida y un pan, rechazar y luego aceptar un antojo, y el ir y venir sobre quién paga.",
        when: "Media mañana, la clásica pausa del café, cuando la cafetería está llena de gente pidiendo para llevar.",
        where: "Una cafetería de barrio en Houston, mitad panadería, mitad café, punto de encuentro de la cuadra.",
        why: "Alejandra quiere pedir con naturalidad en inglés y entender cómo se ofrece y se acepta un antojo sin sonar brusca."
      },
      address: {
        form: "mixed",
        who: "En inglés todos son you; no hay que elegir entre tú y usted con Manny ni con la persona del mostrador.",
        why: "El inglés no cambia el pronombre para marcar confianza; la cercanía se nota en el tono, en un thanks, man o en un it's on me relajado.",
        ifYouSwitch: "Si quieres sonar más formal al pedir, no cambias el pronombre sino las palabras: could I get… en vez de un give me directo."
      },
      dialogue: [
        {
          speaker: "Manny",
          target: "Hey! What do you feel like getting?",
          translation: "¡Ey! ¿Qué se te antoja pedir?",
          pronunciation: "jei! uat du yu fil laik GUE-ring",
          literal: "¡Ey! ¿Qué tú sientes como conseguir?",
          why: "“What do you feel like getting?” es la forma coloquial de preguntar qué se te antoja. “Feel like” pide un gerundio detrás (getting), y “get” aquí significa pedir o conseguir algo de comer o beber."
        },
        {
          speaker: "Alejandra",
          target: "I'd like a coffee and a croissant, please.",
          translation: "Quiero un café y un cruasán, por favor.",
          pronunciation: "aid laik a KO-fi and a krua-SÁN, plis",
          literal: "Yo querría un café y un cruasán, por favor.",
          why: "“I'd like” (I would like) es más suave y cortés que “I want,” ideal para pedir. Es el equivalente natural de un quiero o quisiera educado, y encaja perfecto con la persona del mostrador."
        },
        {
          speaker: "Manny",
          target: "Do you want anything else? It's on me.",
          translation: "¿Quieres algo más? Yo invito.",
          pronunciation: "du yu uant É-ni-zing els? its on mi",
          literal: "¿Tú quieres cualquier cosa más? Está sobre mí.",
          why: "“Do you want anything else?” es la pregunta directa y normal para ofrecer más. “It's on me” es la frase hecha para “yo invito, yo pago,” nada que ver con estar encima de alguien."
        },
        {
          speaker: "Alejandra",
          target: "No, I'm good. Thanks — love you, man.",
          translation: "No, así estoy bien. Gracias, te quiero.",
          pronunciation: "nou, aim gud. zenks — lav yu, man",
          literal: "No, yo estoy bien. Gracias — te quiero, hombre.",
          why: "“I'm good” es la manera coloquial de decir así estoy bien, para rechazar sin sonar cortante. “Love you, man” entre amigos es cariño, no romance; equivale al “te quiero” de confianza."
        },
        {
          speaker: "Manny",
          target: "Haha, love you too. You sure you don't want a pastry?",
          translation: "Jaja, yo también te quiero. ¿Seguro que no quieres un pan dulce?",
          pronunciation: "ha-ha, lav yu tu. yu shur yu dont uant a PÉIS-tri",
          literal: "Jaja, te quiero también. ¿Tú seguro tú no quieres un pastelito?",
          why: "Devolver “love you too” entre amigos es normal en inglés informal, sobre todo con “man” al final. “You sure…?” recorta “are you sure…?,” muy típico del habla relajada del día a día."
        },
        {
          speaker: "Alejandra",
          target: "Alright, if you insist — I want to try that one with the coffee.",
          translation: "Bueno, si insistes… quiero probar ese con el café.",
          pronunciation: "ol-RÁIT, if yu in-SÍST — ai uant tu trai dat uan uiz da KO-fi",
          literal: "Está bien, si tú insistes — yo quiero probar ese uno con el café.",
          why: "“If you insist” es el guiño juguetón para aceptar, igual que “si insistís.” “I want to + verbo” (want to try) es querer más infinitivo, el patrón para querer hacer algo."
        }
      ],
      vocabulary: [
        {
          term: "to want",
          explanation: "Querer en el sentido de desear algo; directo y claro, pero un poco fuerte para pedirle a un desconocido.",
          literal: "querer",
          useWhen: "Expresas un deseo o hablas de lo que alguien quiere: I want, do you want.",
          avoidWhen: "Pides algo a la persona del mostrador y quieres sonar cortés; ahí es mejor “I'd like.”",
          register: "neutral",
          region: "Universal en inglés.",
          related: ["I'd like", "would like", "to feel like", "to wish"],
          example: {
            target: "Do you want anything else?",
            translation: "¿Quieres algo más?"
          }
        },
        {
          term: "I'd like",
          explanation: "Forma cortés de pedir: quisiera, me gustaría. Es I would like abreviado.",
          literal: "me gustaría / quisiera",
          useWhen: "Pides algo en una tienda, café o restaurante con educación.",
          avoidWhen: "Hablas muy informalmente con un amigo; ahí “I want” o “can I get” suenan más naturales.",
          register: "polite",
          region: "Universal en inglés.",
          related: ["I would like", "can I get", "could I have", "I'll have"],
          example: {
            target: "I'd like a coffee, please.",
            translation: "Quiero un café, por favor."
          }
        },
        {
          term: "can I get…?",
          explanation: "Fórmula muy común y relajada para pedir en un café: ¿me das…?, ¿me pones…?",
          literal: "¿puedo obtener…?",
          useWhen: "Pides comida o bebida de forma informal pero educada.",
          avoidWhen: "Un contexto muy formal donde “could I have…?” suena mejor.",
          register: "casual",
          region: "Muy usada en Norteamérica.",
          related: ["could I get", "can I have", "I'll have", "I'd like"],
          example: {
            target: "Can I get a black coffee?",
            translation: "¿Me das un café negro?"
          }
        },
        {
          term: "it's on me",
          explanation: "Frase hecha para yo invito, yo pago; nada que ver con estar sobre algo.",
          literal: "está sobre mí",
          useWhen: "Te ofreces a pagar la cuenta de un amigo.",
          avoidWhen: "Quieres invitar a alguien a un lugar o evento; eso es “I'll take you” o “come with me.”",
          register: "casual",
          region: "Universal en inglés.",
          related: ["my treat", "I've got this", "I'll get it", "this one's on me"],
          example: {
            target: "Put your wallet away, it's on me.",
            translation: "Guarda la billetera, yo invito."
          }
        },
        {
          term: "love you",
          explanation: "Cariño entre amigos o familia; en inglés informal se dice sin que sea romántico, como te quiero.",
          literal: "te quiero / te amo",
          useWhen: "Muestras afecto a amigos cercanos o familia, a menudo al despedirte.",
          avoidWhen: "Con un desconocido o en algo formal; ahí resulta demasiado íntimo.",
          register: "casual",
          region: "Universal, muy común en Norteamérica entre amigos y familia.",
          related: ["love you too", "love ya", "I love you", "miss you"],
          example: {
            target: "Thanks for everything, love you.",
            translation: "Gracias por todo, te quiero."
          }
        },
        {
          term: "to feel like (-ing)",
          explanation: "Tener ganas de, antojarse. Pide un gerundio detrás: feel like getting, feel like eating.",
          literal: "sentir como (-ando)",
          useWhen: "Hablas de un antojo o de lo que te apetece en el momento.",
          avoidWhen: "Quieres hablar de emociones (sentirte triste); ahí “feel” va con adjetivo, no con -ing.",
          register: "casual",
          region: "Universal en inglés.",
          related: ["feel like getting", "be up for", "fancy", "be in the mood for"],
          example: {
            target: "I feel like getting a coffee.",
            translation: "Se me antoja un café."
          }
        },
        {
          term: "want to (+verb)",
          explanation: "Querer hacer algo: want más un verbo en infinitivo. Es el patrón de querer más infinitivo.",
          literal: "querer (hacer)",
          useWhen: "Quieres hacer una acción: I want to try, I want to go.",
          avoidWhen: "Quieres una cosa, no una acción; ahí want lleva un sustantivo: I want a coffee.",
          register: "neutral",
          region: "Universal en inglés.",
          related: ["want to try", "would like to", "I want you to", "feel like -ing"],
          example: {
            target: "I want to try that one.",
            translation: "Quiero probar ese."
          }
        }
      ],
      note: "Lo más útil: para pedir con educación en inglés, “I'd like” o “can I get” suenan mejor que un “I want” a secas, aunque want no es grosero. “Love you” entre amigos es cariño, como el te quiero, no una declaración. Y para ofrecer o invitar, la frase es “it's on me,” no una invitación a ningún lado.",
      culture: [
        {
          label: "La cafetería como sala de barrio",
          body: "En Norteamérica la cafetería cumple algo del papel de la panadería colombiana: la gente entra a toda hora por un café, se saluda y se queda un rato. Aun así, muchos piden para llevar y el trato con la persona del mostrador es más rápido y con menos charla que en un barrio de Medellín. Proponer vernos en el café de la esquina es tan normal como en Colombia, y sirve igual para reuniones de trabajo o para ver a un amigo."
        },
        {
          label: "Love you no siempre es romántico",
          body: "A un hispanohablante puede chocarle oír “love you” de un amigo, pero en inglés informal cabe un cariño parecido al del te quiero. Amigos cercanos y familia lo dicen al despedirse o al agradecer, muchas veces con “man” o el nombre al final. No lleva carga romántica en ese tono; la versión seria y explícita es “I love you” dicho con intención. Devolver un love you too relajado encaja sin problema y no compromete a nada."
        },
        {
          label: "La pelea por la cuenta",
          body: "Ofrecerse a pagar también existe en Canadá, aunque suele ser menos insistente que en Colombia. Se oye “it's on me,” “my treat” o “I've got this,” y lo común es turnarse: hoy pago yo, la próxima pagas tú. Pelear a fondo por la cuenta puede verse un poco exagerado; basta con ofrecer una vez y aceptar con gracia. Aun así, dejar que el otro pague siempre sin ofrecer nunca también se nota, así que conviene proponer la próxima ronda."
        },
        {
          label: "El inglés no tiene vos ni usted",
          body: "Donde el español elige entre tú, usted y vos, el inglés usa un solo you para todos. La cercanía o la distancia no viven en el pronombre sino en las palabras y el tono: un “hey, man” es cercano, un “could I have…, please” es más formal. Para un paisa acostumbrado al voseo, el ajuste no es aprender otro pronombre sino aprender a graduar el registro con el vocabulario, los saludos y hasta la sonrisa."
        }
      ],
      pitfalls: [
        {
          mistake: "Give me a coffee.",
          whyItFails: "Traducido de un “deme un café,” en inglés suena brusco, casi una orden. Para pedir con cortesía se usa “could I get” o “I'd like,” que suavizan el pedido.",
          sayInstead: "Could I get a coffee, please?"
        },
        {
          mistake: "I love you, man.",
          whyItFails: "Dicho así, con “I love you” completo, puede sonar más fuerte o íntimo de lo que quieres entre amigos. La versión ligera y cotidiana recorta el pronombre.",
          sayInstead: "Love you, man."
        },
        {
          mistake: "I have desire of a coffee.",
          whyItFails: "“Tener ganas de” no se traduce palabra por palabra; “have desire of” no existe en inglés natural. Para un antojo se usa “feel like” más gerundio.",
          sayInstead: "I feel like having a coffee."
        },
        {
          mistake: "I want that you wait for me.",
          whyItFails: "El español mete un “que” (quiero que esperes), pero el inglés no: usa want más objeto más infinitivo con to, sin ningún that.",
          sayInstead: "I want you to wait for me."
        }
      ],
      variations: [
        {
          form: "I'd like a coffee, please.",
          register: "polite",
          region: "Universal",
          whenToUse: "La forma cortés y segura para pedir en cualquier café."
        },
        {
          form: "Can I get a coffee?",
          register: "casual",
          region: "Norteamérica",
          whenToUse: "Relajada y natural para pedir entre amigos o en un café con prisa."
        },
        {
          form: "Could I have a coffee, please?",
          register: "polite",
          region: "Universal",
          whenToUse: "Un punto más formal, útil con desconocidos o en sitios elegantes."
        },
        {
          form: "I'll have a coffee.",
          register: "neutral",
          region: "Universal",
          whenToUse: "Directa y práctica al pedir de un menú o en la barra."
        },
        {
          form: "I feel like a coffee.",
          register: "casual",
          region: "Universal",
          whenToUse: "Para expresar el antojo más que hacer el pedido formal."
        }
      ],
      prompt: "Alejandra pide con “I'd like a coffee and a croissant, please.” ¿Qué tono tiene “I'd like”?",
      choices: [
        "Es una manera de preguntar si al empleado le gustan.",
        "Es una forma cortés y suave de decir lo que uno quiere.",
        "Es un modo de avisar que ya pagó todo por adelantado."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Manny dice “Don't worry, it's on me.” cuando llega la cuenta. ¿Qué significa?",
          choices: [
            "Que él va a pagar, que invita esta vez.",
            "Que la cuenta le llegó a él por error.",
            "Que quiere dividir la cuenta entre los dos."
          ],
          answer: 0,
          tests: "it's on me como invitar"
        },
        {
          prompt: "¿Cuál frase en inglés dice bien “quiero que me esperes aquí” sin el that del español?",
          choices: [
            "I want that you wait for me here today.",
            "I want you to wait for me here, please.",
            "I want you wait for me here right now."
          ],
          answer: 1,
          tests: "want objeto to sin that"
        },
        {
          prompt: "Manny se despide de un amigo con “Love you!” ¿Qué matiz tiene?",
          choices: [
            "Es una declaración romántica formal y seria.",
            "Es una forma de pedir un favor grande de despedida.",
            "Es cariño de amigos o familia, sin nada romántico."
          ],
          answer: 2,
          tests: "love you como cariño"
        },
        {
          prompt: "Alejandra dice “I feel like a coffee.” ¿Qué está expresando?",
          choices: [
            "Que se le antoja un café en este momento.",
            "Que se siente como si fuera un café, en broma.",
            "Que ya se tomó un café hace un rato largo."
          ],
          answer: 0,
          tests: "feel like como antojo"
        }
      ]
    }
  },
  {
    id: "running-late-to-sunday-lunch",
    level: "Starter · Getting around",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "courteous",
    pathways: ["foundation"],
    verb: "llegar",
    review: "pending",
    es: {
      title: "Ya casi llego al almuerzo",
      situation: "Es domingo al mediodía en Cali. Alex va tarde al almuerzo de Doña Marta, la mamá de su amigo Andrés, que preparó sancocho. El MÍO, el bus de la ciudad, se demoró, y Alex la llama para avisar que ya casi llega. Todo es por teléfono, en usted, con el respeto cariñoso que se le tiene a la mamá de un amigo. Es una charla sobre llegar, la hora colombiana y el arte de decir “ya casi.”",
      setting: {
        who: "Alex, running late, calls Doña Marta, the mother of a friend, Andrés, who has cooked a big Sunday sancocho for everyone.",
        what: "A phone call to warn the host you're late, promise you're close, and blame the delay on the city bus.",
        when: "Sunday around noon, the sacred hour of family lunch, when the whole household is waiting to serve.",
        where: "On the phone between a MÍO station and Doña Marta's apartment in Cali, Colombia's warm salsa capital.",
        why: "Alex wants to be late politely — reassuring the host, sounding respectful in usted, and not letting the sancocho go cold."
      },
      address: {
        form: "usted",
        who: "Doña Marta is an older woman and the mother of a friend, so usted is the natural, respectful choice throughout.",
        why: "Using usted shows deference and warmth to an elder; in Cali and much of Colombia it is the default with anyone older than you.",
        ifYouSwitch: "Dropping into tú with a friend's mother can sound overly familiar or even cheeky, unless she invites you to tutearla first."
      },
      dialogue: [
        {
          speaker: "Doña Marta",
          target: "Aló, Alex, ¿usted a qué horas llega? Ya casi servimos.",
          translation: "Hello, Alex, what time are you getting here? We're about to serve.",
          pronunciation: "a-LO, AH-lex, oos-TED a ke O-ras YE-ga? ya KA-si ser-VEE-mos",
          literal: "Hello, Alex, you at what hours arrive? Already almost we-serve.",
          why: "“Aló” is how Colombians answer the phone. Notice “llega” in the present used for a near-future arrival, and the respectful “usted” from an elder to a younger guest — warmth and respect at once."
        },
        {
          speaker: "Alex",
          target: "Doña Marta, ya casi llego. Voy llegando, se lo prometo.",
          translation: "Doña Marta, I'm almost there. I'm on my way, I promise.",
          pronunciation: "DO-nya MAR-ta, ya KA-si YE-go. voy ye-GAN-do, se lo pro-ME-to",
          literal: "Lady Marta, already almost I-arrive. I-go arriving, it to-you I-promise.",
          why: "“Ya casi llego” (I almost arrive) is the set phrase for I'm nearly there. “Voy llegando,” literally I go arriving, softens it further into I'm in the middle of getting there — a very Colombian reassurance."
        },
        {
          speaker: "Doña Marta",
          target: "Tranquilo, mijo, pero no se demore que se enfría.",
          translation: "Don't worry, dear, but don't dawdle or it'll get cold.",
          pronunciation: "tran-KEE-lo, MEE-ho, PE-ro no se de-MO-re ke se en-FREE-a",
          literal: "Calm, my-son, but not you delay that it cools.",
          why: "“Mijo” (from mi hijo, my son) is an affectionate address to someone younger. “No se demore” uses demorarse, to take too long — a different idea from llegar — and the usted command form softens the nudge."
        },
        {
          speaker: "Alex",
          target: "Es que el MÍO se demoró un montón; llegué tarde a la estación.",
          translation: "It's just that the MÍO took forever; I got to the station late.",
          pronunciation: "es ke el MEE-o se de-mo-RO oon mon-TON; ye-GE TAR-de a la es-ta-SYON",
          literal: "Is that the MÍO itself delayed a lot; I-arrived late to the station.",
          why: "“Se demoró” is the preterite of demorarse for a finished delay. “Llegué tarde a la estación” shows llegar with a — you always arrive a un lugar, and that a is not optional the way English to can feel."
        },
        {
          speaker: "Doña Marta",
          target: "Ah, bueno. Cuando llegue, timbre y le abro; ¿ya está cerquita?",
          translation: "Ah, okay. When you get here, buzz and I'll let you in; are you close now?",
          pronunciation: "ah, BWEH-no. KWAN-do YE-ge, TEEM-bre ee le A-bro; ya es-TA ser-KEE-ta",
          literal: "Ah, good. When arrive(subj), ring and to-you I-open; already is little-close?",
          why: "“Cuando llegue” needs the subjunctive because the arrival hasn't happened yet — a key rule after cuando for future events. “Cerquita,” the diminutive of cerca, makes close sound cosier and more Colombian."
        },
        {
          speaker: "Alex",
          target: "Sí, ya casi. Apenas llegue, le caigo con las empanadas.",
          translation: "Yes, almost. The second I get there, I'll show up with the empanadas.",
          pronunciation: "see, ya KA-si. a-PE-nas YE-ge, le KAI-go kon las em-pa-NA-das",
          literal: "Yes, already almost. As-soon-as arrive(subj), to-you I-fall with the empanadas.",
          why: "“Apenas llegue” again takes the subjunctive for an as-soon-as future. “Le caigo,” literally I fall on you, is Colombian slang for I'll drop by — a warm, informal way to say you'll arrive bearing food."
        }
      ],
      vocabulary: [
        {
          term: "llegar",
          explanation: "To arrive, to get somewhere; the basic verb for reaching a place or a point in time.",
          literal: "to arrive",
          useWhen: "You talk about reaching a destination or getting somewhere: llego a las dos.",
          avoidWhen: "You mean to be somewhere already; that is estar, not the act of arriving.",
          register: "neutral",
          region: "Universal across Colombia.",
          related: ["llegar a", "llegar tarde", "la llegada", "llegar lejos"],
          example: {
            target: "Llego a la estación en cinco minutos.",
            translation: "I get to the station in five minutes."
          }
        },
        {
          term: "ya casi llego",
          explanation: "The everyday reassurance that you're nearly there — even when you're not quite.",
          literal: "already almost I-arrive",
          useWhen: "Someone is waiting and you want to say you're close.",
          avoidWhen: "You need to give a precise time; this phrase is famously elastic.",
          register: "casual",
          region: "Universal; a staple of Colombian time-keeping.",
          related: ["voy llegando", "ya voy", "estoy cerca", "ya casi"],
          example: {
            target: "Ya casi llego, espérame.",
            translation: "I'm almost there, wait for me."
          }
        },
        {
          term: "ahorita",
          explanation: "A soft, stretchy now: in a little while, soon-ish, sometimes much later.",
          literal: "little now",
          useWhen: "You mean soon but not this exact second, in a relaxed way.",
          avoidWhen: "You need something to happen right now; ahorita can mean anything but immediate.",
          register: "casual",
          region: "Very Colombian; the vagueness is cultural.",
          related: ["ya", "al rato", "más tarde", "en un momentico"],
          example: {
            target: "Ahorita llego, no se preocupe.",
            translation: "I'll be there soon, don't worry."
          }
        },
        {
          term: "demorarse",
          explanation: "To take a long time, to be delayed; about duration, not the moment of arrival.",
          literal: "to delay oneself",
          useWhen: "Something or someone is slow: el bus se demoró.",
          avoidWhen: "You simply mean to arrive late; that is llegar tarde, a different idea.",
          register: "neutral",
          region: "Universal across Colombia.",
          related: ["demorado", "la demora", "tardar", "no se demore"],
          example: {
            target: "No se demore, que ya vamos a comer.",
            translation: "Don't be long, we're about to eat."
          }
        },
        {
          term: "llegar tarde",
          explanation: "To arrive late; the plain way to say you showed up after the agreed time.",
          literal: "to arrive late",
          useWhen: "You reached somewhere after the agreed hour.",
          avoidWhen: "You want to say you are running late right now; then use voy tarde or se me hizo tarde.",
          register: "neutral",
          region: "Universal.",
          related: ["llegar temprano", "llegar a tiempo", "voy tarde", "tarde"],
          example: {
            target: "Llegué tarde por el tráfico.",
            translation: "I arrived late because of the traffic."
          }
        },
        {
          term: "aló",
          explanation: "The standard Colombian way to answer the phone: hello?",
          literal: "hello (on the phone)",
          useWhen: "You pick up a call.",
          avoidWhen: "Greeting someone in person; there you'd say hola or buenas.",
          register: "neutral",
          region: "Colombia and much of Latin America.",
          related: ["¿bueno?", "¿sí?", "hola", "¿aló?"],
          example: {
            target: "Aló, ¿con quién hablo?",
            translation: "Hello, who am I speaking with?"
          }
        },
        {
          term: "mijo / mija",
          explanation: "An affectionate address from mi hijo / mi hija, used for younger or dear people.",
          literal: "my son / my daughter",
          useWhen: "An older person warmly addresses someone younger, or between close people.",
          avoidWhen: "A formal or distant setting; it is too intimate for strangers or superiors.",
          register: "casual",
          region: "Universal in Colombia, very common from elders.",
          related: ["mijito", "m'hijo", "mi amor", "mijo lindo"],
          example: {
            target: "Coma bien, mijo.",
            translation: "Eat well, dear."
          }
        }
      ],
      note: "The key idea: “llegar” is the moment of arriving and always takes a before the place (llego a la estación), while “demorarse” is about taking too long — two ideas English blurs into late. Wrap it in Colombia's elastic sense of time, where “ya casi llego” and “ahorita” buy you a few forgiving minutes, and remember the subjunctive after cuando for an arrival still to come.",
      culture: [
        {
          label: "La hora colombiana is real",
          body: "Social events in Colombia often start well after the stated time. Invited for lunch at one, you may find the family still cooking at half past. Arriving exactly on time to a casual gathering can even catch hosts off guard. Business meetings and flights run on the clock, but among friends and family a loose half-hour cushion is normal, and phrases like ya casi llego are the accepted soundtrack to everyone easing in a little late."
        },
        {
          label: "Ahorita can mean almost anything",
          body: "For learners, ahorita is a trap. Its little -ita ending sounds like right now, but in practice it floats between soon, in a bit, and eventually. Ahorita voy might mean two minutes or forty. Colombians read the real timing from context and tone, not from the word itself. If you truly need something immediately, say ya mismo or en este momento; leaning on ahorita will leave you waiting far longer than you expected."
        },
        {
          label: "El sancocho del domingo",
          body: "Sunday lunch is a cornerstone of Colombian family life, and sancocho — a hearty soup of plantain, yuca, and meat — is its centrepiece, especially in Cali and the Pacific region. It simmers for hours and is made to be shared by a full table. Being invited signals real closeness, so showing up matters; arriving late is forgiven, but skipping it or letting the food go cold touches something people take to heart."
        },
        {
          label: "Getting around Cali on the MÍO",
          body: "Cali's MÍO is the city's mass-transit bus system, running long articulated buses along dedicated lanes. Like Bogotá's TransMilenio, it can get packed and unpredictable at peak times, so locals routinely blame a late arrival on el MÍO. Knowing the network — which troncal to take, where to transfer — is part of daily life, and a delayed bus is such a common excuse that hosts usually accept it with a knowing smile."
        }
      ],
      pitfalls: [
        {
          mistake: "Llego en la estación.",
          whyItFails: "Llegar takes a, not en, before the destination. En points to being inside something, but arrival needs the directional a: llego a la estación.",
          sayInstead: "Llego a la estación."
        },
        {
          mistake: "Estoy tarde.",
          whyItFails: "Spanish doesn't use estar for running late. Being late is expressed with ir or with llegar, so voy tarde or llego tarde, never estoy tarde.",
          sayInstead: "Voy tarde."
        },
        {
          mistake: "Cuando llego, la llamo.",
          whyItFails: "For an arrival that hasn't happened yet, cuando needs the subjunctive. The plain present llego sounds like a habit, not the future plan you're announcing.",
          sayInstead: "Cuando llegue, la llamo."
        },
        {
          mistake: "Llegué en tiempo.",
          whyItFails: "The set phrase for on time is a tiempo, not en tiempo. En tiempo is a word-for-word import from English that Colombian ears simply don't use.",
          sayInstead: "Llegué a tiempo."
        }
      ],
      variations: [
        {
          form: "Ya casi llego.",
          register: "casual",
          region: "Universal",
          whenToUse: "The default reassurance when someone's waiting and you're close-ish."
        },
        {
          form: "Voy en camino.",
          register: "neutral",
          region: "Universal",
          whenToUse: "Simple and clear: I'm on my way, already traveling."
        },
        {
          form: "Estoy a cinco minutos.",
          register: "neutral",
          region: "Universal",
          whenToUse: "When you want to sound more precise and reassuring than ya casi."
        },
        {
          form: "Ya voy llegando.",
          register: "casual",
          region: "Colombia",
          whenToUse: "A softer I'm just about there, very common on the phone."
        },
        {
          form: "Deme cinco minuticos y llego.",
          register: "polite",
          region: "Colombia",
          whenToUse: "A warm, diminutive-softened way to ask for a little more time."
        }
      ],
      prompt: "Doña Marta asks what time you'll arrive. Which reply says you're close without promising an exact minute?",
      choices: [
        "Llego exactamente a la una y diez.",
        "Ya casi llego, voy en camino.",
        "No sé si pueda llegar hoy."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Doña Marta says “no se demore.” What is she asking you to do?",
          choices: [
            "To arrive exactly on the dot.",
            "To call her the moment you leave.",
            "To not take too long on the way."
          ],
          answer: 2,
          tests: "demorarse means to take long"
        },
        {
          prompt: "Which sentence correctly pairs llegar with the preposition a place needs?",
          choices: [
            "Llegué a la estación un poco tarde.",
            "Llegué en la estación un poco tarde.",
            "Llegué la estación un poco tarde."
          ],
          answer: 0,
          tests: "llegar a before a place"
        },
        {
          prompt: "You want to say you'll call her when you arrive, an arrival still to come. Which is right?",
          choices: [
            "Cuando llego a tu casa, te llamo.",
            "Cuando llegue a su casa, la llamo.",
            "Cuando llegaba a su casa, la llamo."
          ],
          answer: 1,
          tests: "subjunctive after cuando for future"
        },
        {
          prompt: "A Colombian says “ahorita llego.” What does that realistically tell you?",
          choices: [
            "That she is arriving right this second.",
            "That she has already left her house.",
            "That she'll come soon, but the timing is loose."
          ],
          answer: 2,
          tests: "ahorita is elastic"
        }
      ]
    },
    en: {
      title: "Llegar tarde a la cena",
      situation: "Es sábado por la noche en Houston. Alejandra va tarde a la cena de Karen, una amiga, y la llama para avisar. El metro se retrasó y ella no sabe bien cómo decir en inglés que ya casi llega sin sonar grosera. Como el inglés no tiene usted, el respeto y la cercanía dependen del tono y de las palabras. Es una charla sobre llegar, disculparse por la tardanza y prometer que falta poco.",
      setting: {
        who: "Alejandra, que va tarde, llama a Karen, una amiga que la invitó a cenar en su casa con más gente.",
        what: "Una llamada para avisar que llega tarde, prometer que ya casi está y echarle la culpa al metro.",
        when: "Un sábado por la noche, cuando la cena estaba pactada para las siete y ya son y cuarto.",
        where: "Por teléfono, entre una estación del metro y el apartamento de Karen, en Houston.",
        why: "Alejandra quiere avisar con educación que va tarde, sin sonar irresponsable ni dejar a Karen esperando a ciegas."
      },
      address: {
        form: "mixed",
        who: "En inglés no hay usted ni tú: Alejandra trata a Karen de you igual que a cualquiera.",
        why: "El respeto y la cercanía no van en el pronombre sino en el tono y en fórmulas como I'm so sorry o I'm on my way, que suavizan el mensaje.",
        ifYouSwitch: "Para sonar más considerada no cambia de pronombre, sino que añade disculpas y explicaciones: sorry I'm late, the subway was a mess."
      },
      dialogue: [
        {
          speaker: "Karen",
          target: "Hey, Alejandra, are you close? People are starting to arrive.",
          translation: "Hola, Alejandra, ¿ya estás cerca? La gente ya está llegando.",
          pronunciation: "jei, a-le-JÁN-dra, ar yu klous? PÍ-pol ar STÁR-ting tu a-RÁIV",
          literal: "Oye, Alejandra, ¿estás tú cerca? Gente está empezando a llegar.",
          why: "“Are you close?” es la forma normal de preguntar si ya casi llegas, sin el verbo llegar. “People are starting to arrive” usa el presente continuo para algo en marcha ahora mismo, donde el español diría ya está llegando."
        },
        {
          speaker: "Alejandra",
          target: "Hi, Karen, I'm almost there. I'm on my way, I promise.",
          translation: "Hola, Karen, ya casi llego. Voy en camino, te lo prometo.",
          pronunciation: "jai, KÉ-ren, aim ÓL-most der. aim on mai uei, ai PRÓ-mis",
          literal: "Hola, Karen, yo estoy casi allí. Yo estoy en mi camino, yo prometo.",
          why: "“I'm almost there” es el equivalente exacto de “ya casi llego,” con there en vez del verbo. “I'm on my way” es la frase hecha para “voy en camino,” y no lleva el verbo arrive."
        },
        {
          speaker: "Karen",
          target: "No rush, but don't be too long — dinner's at seven sharp.",
          translation: "Tranquila, pero no te demores — la cena es a las siete en punto.",
          pronunciation: "nou rash, bat dont bi tu long — DÍ-ners at SÉ-ven sharp",
          literal: "No prisa, pero no estés demasiado largo — cena es a siete en punto.",
          why: "“Don't be too long” equivale a “no se demore”: habla de tardar, no de llegar. “Sharp” después de una hora significa en punto, así que “seven sharp” son las siete exactas."
        },
        {
          speaker: "Alejandra",
          target: "The subway was delayed; I got to the station late.",
          translation: "El metro se retrasó; llegué tarde a la estación.",
          pronunciation: "da SÓB-uei uas di-LÉID; ai got tu da STÉI-shon leit",
          literal: "El metro estuvo retrasado; yo llegué a la estación tarde.",
          why: "“Was delayed” es el pasado para “se demoró/se retrasó.” Y ojo: en inglés es “got to the station,” no “arrived to”; “get to” es la forma más natural de decir llegar a un sitio."
        },
        {
          speaker: "Karen",
          target: "Okay, just text me when you get here and I'll come down.",
          translation: "Bueno, solo escríbeme cuando llegues y bajo.",
          pronunciation: "o-KÉI, yost tekst mi uen yu get jir and ail kam daun",
          literal: "Okay, solo textéame cuando tú llegas aquí y yo bajaré.",
          why: "“When you get here” usa el presente (get), no el futuro, aunque la llegada aún no pasa; el inglés no mete subjuntivo como el español en “cuando llegues.” “Text me” es pedir un mensaje."
        },
        {
          speaker: "Alejandra",
          target: "Will do — the second I get there, I'll buzz you. Thanks, Karen.",
          translation: "Hecho — apenas llegue, te timbro. Gracias, Karen.",
          pronunciation: "uil du — da SÉ-cond ai get der, ail baz yu. zenks, KÉ-ren",
          literal: "Haré — el segundo yo llego allí, yo te timbraré. Gracias, Karen.",
          why: "“The second I get there” es “apenas llegue”: otra vez presente donde el español usa subjuntivo. “I'll buzz you” es tocar el timbre del portero, muy de edificio de apartamentos."
        }
      ],
      vocabulary: [
        {
          term: "to arrive / to get here",
          explanation: "Llegar. En el habla diaria, “get here/there” es más común que “arrive,” que suena algo formal.",
          literal: "llegar",
          useWhen: "Hablas de alcanzar un lugar: I'll get there soon, when I arrive.",
          avoidWhen: "Quieres decir que ya estás en un sitio; eso es “to be here,” no llegar.",
          register: "neutral",
          region: "Universal en inglés.",
          related: ["to get here", "to get there", "to show up", "arrival"],
          example: {
            target: "I'll get there in five minutes.",
            translation: "Llego en cinco minutos."
          }
        },
        {
          term: "on my way",
          explanation: "Voy en camino, ya salí y voy para allá. Frase hecha muy usada al teléfono.",
          literal: "en mi camino",
          useWhen: "Avisas que ya vas hacia el lugar.",
          avoidWhen: "Todavía no has salido; decirlo sin haber salido es la clásica mentirilla piadosa.",
          register: "casual",
          region: "Universal en inglés.",
          related: ["I'm coming", "almost there", "heading over", "be right there"],
          example: {
            target: "I'm on my way, see you soon.",
            translation: "Voy en camino, nos vemos."
          }
        },
        {
          term: "almost there",
          explanation: "Ya casi llego, falta poquito. Es el equivalente directo de ya casi.",
          literal: "casi allí",
          useWhen: "Estás cerca del destino y quieres tranquilizar a quien espera.",
          avoidWhen: "Necesitas dar una hora exacta; como “ya casi,” es elástico.",
          register: "casual",
          region: "Universal en inglés.",
          related: ["nearly there", "so close", "just around the corner", "five minutes away"],
          example: {
            target: "Almost there, hang on.",
            translation: "Ya casi llego, espera."
          }
        },
        {
          term: "to be late / running late",
          explanation: "Llegar tarde o ir tarde. “Running late” es justo lo de ir con retraso ahora mismo.",
          literal: "estar tarde / yendo tarde",
          useWhen: "Avisas que vas o llegarás después de la hora.",
          avoidWhen: "Nada: es la forma natural, y a diferencia del español el inglés sí usa el verbo be aquí.",
          register: "neutral",
          region: "Universal en inglés.",
          related: ["I'm late", "running behind", "late", "behind schedule"],
          example: {
            target: "Sorry, I'm running late.",
            translation: "Perdón, voy tarde."
          }
        },
        {
          term: "delayed",
          explanation: "Retrasado, demorado; se usa mucho para transporte: the subway was delayed.",
          literal: "retrasado / demorado",
          useWhen: "Un bus, tren o vuelo se atrasa.",
          avoidWhen: "Quieres decir que tú tardaste por gusto; “delayed” suele ser algo que te pasó, no que hiciste.",
          register: "neutral",
          region: "Universal en inglés.",
          related: ["held up", "running behind", "late", "stuck"],
          example: {
            target: "The train was delayed again.",
            translation: "El tren se retrasó otra vez."
          }
        },
        {
          term: "when you get here",
          explanation: "Cuando llegues. Ojo: el inglés usa el presente (get), sin subjuntivo.",
          literal: "cuando llegas aquí",
          useWhen: "Hablas de algo que pasará al momento de llegar.",
          avoidWhen: "Quieres usar futuro tras when; el inglés lo rechaza y pide presente.",
          register: "neutral",
          region: "Universal en inglés.",
          related: ["when you arrive", "once you're here", "as soon as you get in", "when you're here"],
          example: {
            target: "Call me when you get here.",
            translation: "Llámame cuando llegues."
          }
        },
        {
          term: "sharp / on time",
          explanation: "En punto y a tiempo. “Seven sharp” son las siete exactas; “on time” es a tiempo.",
          literal: "en punto / a tiempo",
          useWhen: "Das una hora exacta o hablas de puntualidad.",
          avoidWhen: "Quieres decir a tiempo con la estructura del español “en tiempo,” que en inglés no existe.",
          register: "neutral",
          region: "Universal en inglés.",
          related: ["on the dot", "punctual", "at seven sharp", "right on time"],
          example: {
            target: "Dinner is at seven sharp.",
            translation: "La cena es a las siete en punto."
          }
        }
      ],
      note: "Lo clave: en inglés cotidiano se dice más “get here/there” que “arrive,” y para ir con retraso se usa el verbo be (I'm late, running late), no ir como en español. Después de “when” la llegada futura va en presente (when you get here), sin el subjuntivo del “cuando llegues.” Y a tiempo se dice “on time,” no “in time,” que en inglés significa algo distinto.",
      culture: [
        {
          label: "La hora estadounidense es más estricta",
          body: "En Canadá la puntualidad pesa más que en Colombia. Si te invitan a cenar a las siete, se espera que llegues muy cerca de esa hora, quizá cinco o diez minutos después, no media hora. Llegar tarde sin avisar puede leerse como descuido o falta de respeto. Por eso un mensaje de “running late, so sorry” es casi obligatorio: avisar reconoce que el tiempo del otro importa, algo que en ambientes estadounidenses se valora mucho."
        },
        {
          label: "Avisar siempre que llegues tarde",
          body: "En Colombia la hora es elástica y un retraso corto se perdona sin más. En Canadá, en cambio, lo cortés es avisar: un texto rápido diciendo que el metro se retrasó y que ya casi llegas. No hace falta un discurso; basta con “I'm running about ten minutes late.” Ese aviso corto mantiene la confianza y evita que el anfitrión se quede adivinando. Callar y aparecer tarde sin explicación es lo que de verdad molesta."
        },
        {
          label: "El metro y el METRO de Houston",
          body: "Moverse por Houston suele implicar el METRO: metro, tranvías y buses. En horas pico o con mal clima puede haber retrasos, y “the subway was delayed” es una excusa tan común como el MÍO en Cali. Conocer las líneas, dónde hacer transbordo y cuánto tarda cada tramo es parte del día a día. Un retraso del transporte se entiende, pero se espera igual que avises, porque la app muestra el retraso casi en tiempo real."
        },
        {
          label: "La cena en casa estadounidense",
          body: "Que te inviten a cenar a una casa en Canadá es un gesto de cercanía, y conviene cuidarlo. Se agradece llegar puntual, llevar algo pequeño — vino, postre, algo para compartir — y avisar si te retrasas. A diferencia del largo almuerzo dominical colombiano, la cena puede tener una hora de inicio bastante marcada. Cumplir esos detalles dice que valoras la invitación tanto como quien te abrió la puerta de su casa."
        }
      ],
      pitfalls: [
        {
          mistake: "I arrive to the station at seven.",
          whyItFails: "En inglés natural se dice “get to” o “arrive at,” nunca “arrive to.” La a de “llegar a” no se traduce como to aquí; suena a calco del español.",
          sayInstead: "I get to the station at seven."
        },
        {
          mistake: "I have twenty minutes of delay.",
          whyItFails: "“Tener minutos de retraso” no se dice así en inglés. Lo natural es usar el verbo be: “I'm twenty minutes late,” con late como estado.",
          sayInstead: "I'm twenty minutes late."
        },
        {
          mistake: "I call you when I will arrive.",
          whyItFails: "Después de “when” para el futuro, el inglés usa presente, no “will.” El calco del futuro español (“cuando llegaré”) produce un “when I will” que suena mal.",
          sayInstead: "I'll call you when I get there."
        },
        {
          mistake: "I will assist to the dinner tonight.",
          whyItFails: "“Asistir a” no es “assist”; “assist” significa ayudar. Para ir o presentarse a un evento se usa “go to” o “come to,” sin ninguna a personal.",
          sayInstead: "I'm going to the dinner tonight."
        }
      ],
      variations: [
        {
          form: "I'm on my way.",
          register: "casual",
          region: "Universal",
          whenToUse: "El aviso por defecto de que ya vas hacia allá."
        },
        {
          form: "I'm almost there.",
          register: "casual",
          region: "Universal",
          whenToUse: "Cuando estás cerca y quieres tranquilizar a quien espera."
        },
        {
          form: "I'm running a bit late.",
          register: "neutral",
          region: "Universal",
          whenToUse: "Para avisar con cortesía que llegarás algo tarde."
        },
        {
          form: "I'll be there in five.",
          register: "casual",
          region: "Universal",
          whenToUse: "Más preciso: llegas en unos cinco minutos."
        },
        {
          form: "I'm on my way now, sorry to keep you.",
          register: "polite",
          region: "Universal",
          whenToUse: "Un aviso más considerado, con disculpa incluida."
        }
      ],
      prompt: "Alejandra le dice a Karen por teléfono “I'm on my way — almost there.” ¿Qué le está diciendo?",
      choices: [
        "Que se le hizo tarde y ya no va a poder llegar hoy.",
        "Que se quedó varada y necesita que la vayan a recoger.",
        "Que ya salió y está a punto de llegar a la casa."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál frase en inglés evita el calco “arrive to” para llegar a la estación a las siete?",
          choices: [
            "I arrive to the station at about seven.",
            "I arrive in to the station by seven.",
            "I'll get to the station around seven."
          ],
          answer: 2,
          tests: "get to en vez de arrive to"
        },
        {
          prompt: "Alejandra dice “I'm running late.” ¿Qué quiere decir?",
          choices: [
            "Que va con retraso y llegará tarde.",
            "Que va corriendo para hacer deporte.",
            "Que va a cancelar el plan de la cena."
          ],
          answer: 0,
          tests: "running late como ir tarde"
        },
        {
          prompt: "Karen oye “I'll be there in ten.” ¿Qué debe entender?",
          choices: [
            "Que Alejandra llega en unos diez minutos.",
            "Que Alejandra llega a las diez en punto.",
            "Que Alejandra llegó hace diez minutos ya."
          ],
          answer: 0,
          tests: "in ten como en diez minutos"
        },
        {
          prompt: "Al entrar tarde, Alejandra dice “Sorry I'm late.” ¿Qué función cumple?",
          choices: [
            "Es una manera de echarle la culpa al tráfico pesado.",
            "Es una disculpa breve y normal por llegar tarde.",
            "Es una forma de avisar que se tiene que ir temprano."
          ],
          answer: 1,
          tests: "sorry I'm late como disculpa"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/05-foundation-meeting.js");
