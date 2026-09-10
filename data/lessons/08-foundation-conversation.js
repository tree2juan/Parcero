/*
 * Lesson block: foundation / everyday conversation.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Every lesson spines on exactly one verb from data/curriculum.js, named in its
 * `verb` field so the coverage report can prove the curriculum is actually
 * taught rather than merely listed. This block takes the three verbs a beginner
 * reaches for to hold an actual conversation — hablar (to speak), seguir (to
 * follow / carry on) and pensar (to think) — and builds one situation around
 * each: a phone call, a welcome into a shop, and talking a friend out of a
 * risky plan.
 *
 * The two directions are mirrors: same number of dialogue turns, same number of
 * vocabulary entries, same number of culture notes, pitfalls, variations and
 * practice questions, and the same optional slots filled on the same rows. That
 * is enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "phoning-a-friend-to-set-up-a-meetup",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "familiar",
    pathways: ["foundation"],
    verb: "hablar",
    review: "pending",
    es: {
      title: "Llamar a una amiga para cuadrar un encuentro",
      situation:
        "Alex está en Cali y quiere organizar un intercambio de idiomas con Valentina, una amiga que conoció en la clase de salsa. En vez de escribirle, la llama por teléfono. Tiene que saludar, decir quién es, proponer el plan y despedirse — todo por una línea en la que no se ven las caras y donde las fórmulas telefónicas importan.",
      setting: {
        who: "Valentina is a caleña friend Alex met at a salsa class. They have chatted a few times but never made a real plan, and this is the first time Alex has actually phoned her.",
        what: "A short phone call to fix a day and a place for a language-exchange coffee.",
        when: "A Wednesday evening after work, when calling someone is normal and welcome.",
        where: "Cali, where the pace is warm, the phone manner is chatty, and a call is friendlier than a text.",
        why: "Because the call is the test of whether a class acquaintance becomes a real friend. Getting the phone words right — how you answer, announce yourself and sign off — is most of what makes it land."
      },
      address: {
        form: "tú",
        who: "Valentina and Alex use tú with each other, as two young people who already clicked in class.",
        why: "In Cali and much of the Valle, tú is the ordinary friendly form between people of a similar age. Usted would sound like Alex was keeping a polite distance he does not actually feel.",
        ifYouSwitch:
          "Usted here would make Valentina wonder what she did to earn the formality. Vos is heard in the Valle too, but between these two friends tú is the natural, unmarked pick."
      },
      dialogue: [
        {
          speaker: "Valentina",
          target: "¿Aló? ¿Con quién hablo?",
          translation: "Hello? Who's this?",
          pronunciation: "a-LO? kon KYEN AH-blo",
          literal: "Hello? With whom I-speak?",
          why: "Colombians answer the phone with “¿aló?”, and “¿con quién hablo?” — literally “with whom do I speak?” — is the set way to ask who is calling. Note that hablar takes “con” for the person, not a direct object."
        },
        {
          speaker: "Alex",
          target: "¡Hola, Vale! Habla Alex, el del curso de salsa.",
          translation: "Hi, Vale! It's Alex, from the salsa class.",
          pronunciation: "OH-la, BA-le! AH-bla AH-leks, el del KOOR-so de SAL-sa",
          literal: "Hi, Vale! Speaks Alex, the-one of-the course of salsa.",
          why: "On the phone you announce yourself with “habla + your name”, the very “speaks” that English drops. “El del curso de salsa” places him the way an apartment number would, by association rather than by surname."
        },
        {
          speaker: "Valentina",
          target: "¡Uy, Alex! Qué chévere que llamas. ¿Bien o qué?",
          translation: "Oh, Alex! How nice that you're calling. All good?",
          pronunciation: "ooy, AH-leks! ke CHEH-be-re ke YA-mas. byen o KE",
          literal: "Oh, Alex! What cool that you-call. Good or what?",
          why: "“¿Bien o qué?” is a warm Colombian “how's it going?”, not a real either/or. Note the tú ending on “llamas”; a paisa would say “llamás”, but in Cali tú is the friendly default."
        },
        {
          speaker: "Alex",
          target: "Todo bien. Vale, quiero hablar contigo para hacer un intercambio: tú me hablas en español y yo te hablo en inglés.",
          translation: "All good. Listen, Vale, I want to talk with you about doing an exchange: you speak to me in Spanish and I speak to you in English.",
          pronunciation: "TO-do byen. BA-le, KYEH-ro a-BLAR kon-TEE-go PA-ra a-SER oon in-ter-KAM-byo",
          literal: "All good. Vale, I-want to-speak with-you for to-do an exchange: you to-me you-speak in Spanish and I to-you I-speak in English.",
          why: "The heart of the verb: “hablar con” for talking with someone as equals, and “hablar + a alguien en un idioma” for the language used. It is always “hablar contigo”, never “hablar a ti”, for a two-way conversation."
        },
        {
          speaker: "Valentina",
          target: "¡De una! Espérame un momentico… El jueves puedo. ¿Hablamos en el café de la 6?",
          translation: "Absolutely! Give me one sec… I can do Thursday. Shall we meet at the café on 6th?",
          pronunciation: "de OO-na! es-PEH-ra-me oon mo-men-TEE-ko… el HWEH-bes PWEH-do. a-BLA-mos en el ka-FE de la SEIS",
          literal: "Of one! Wait-me a little-moment… The Thursday I-can. We-speak in the café of the 6th?",
          why: "“De una” is Colombian for “sure, right away”. “Un momentico”, with the -ico diminutive, softens the wait. Here “¿hablamos?” means “shall we meet up and talk?”, the present tense standing in for a plan."
        },
        {
          speaker: "Alex",
          target: "Listo, hablamos el jueves entonces. ¡Un abrazo!",
          translation: "Great, talk to you Thursday then. Take care!",
          pronunciation: "LEES-to, a-BLA-mos el HWEH-bes en-TON-ses. oon a-BRA-so",
          literal: "Ready, we-speak the Thursday then. A hug!",
          why: "The Colombian sign-off “hablamos” closes a call like English “talk soon”, even though it is present tense. It is a promise to stay in contact, and answering a goodbye with it is completely idiomatic."
        }
      ],
      vocabulary: [
        {
          term: "¿Con quién hablo?",
          explanation:
            "“Who am I speaking with?” — the standard phone question for who is on the line or who has just called.",
          literal: "with whom I-speak?",
          useWhen:
            "Answering a call from an unknown number, or picking up when you are not sure who dialled.",
          avoidWhen:
            "Face to face, where it would sound like a comedy routine. It belongs to the phone and the intercom only.",
          register: "neutral",
          region: "General Colombian; “¿aló?” is the near-universal way to answer a call across the country.",
          related: ["¿aló?", "¿quién habla?", "¿de parte de quién?", "¿con quién tengo el gusto?"],
          example: {
            target: "¿Aló? ¿Con quién hablo?",
            translation: "Hello? Who's this?"
          }
        },
        {
          term: "hablar con / hablar a",
          explanation:
            "“To talk with” versus “to talk to.” Colombian Spanish strongly prefers “hablar con alguien” for a real conversation; “hablar a” sounds one-directional, like addressing a crowd.",
          literal: "to-speak with / to-speak to",
          useWhen:
            "Any ordinary exchange between people — “tengo que hablar con mi jefe”, “hablé con ella ayer”.",
          avoidWhen:
            "When you truly mean speaking at someone who is not answering; even then “hablarle a” with the pronoun beats a bare “hablar a”.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic; the “con” pattern is universal.",
          related: ["hablar contigo", "hablarle a alguien", "conversar con", "charlar con"],
          example: {
            target: "Quiero hablar contigo, no hablarte como en una conferencia.",
            translation: "I want to talk with you, not talk at you like in a lecture."
          }
        },
        {
          term: "hablamos",
          explanation:
            "Literally “we speak,” used as a warm sign-off meaning “we'll be in touch / talk soon,” even though it is present tense.",
          literal: "we-speak",
          useWhen:
            "Ending a call or a chat with someone you expect to see or message again — friends, colleagues you get on with.",
          avoidWhen:
            "A formal close with someone you may never contact again; there “que esté muy bien” or “hasta luego” fits better.",
          register: "friendly informal",
          region: "Very Colombian; foreigners often mistake it for a specific plan being made rather than a goodbye.",
          related: ["nos hablamos", "cualquier cosa hablamos", "hablamos luego", "nos vemos"],
          example: {
            target: "Listo, hablamos el jueves.",
            translation: "Great, we'll talk Thursday."
          }
        },
        {
          term: "¿hablás inglés?",
          explanation:
            "The vos form of “do you speak English?” — “hablás” instead of tú “hablas,” with the stress jumping to the final syllable.",
          literal: "you(vos)-speak English?",
          useWhen:
            "In Medellín, Cali or anywhere vos is local, asking someone informally whether they speak a language.",
          avoidWhen:
            "In Bogotá, where vos sounds out of place and “¿hablas inglés?” or the polite “¿habla inglés?” is expected.",
          register: "friendly informal",
          region: "Paisa (Medellín) and Valle (Cali) especially; Bogotá stays with tú and usted.",
          related: ["¿hablas inglés?", "¿habla inglés?", "¿vos sabés inglés?", "¿me hablás en inglés?"],
          example: {
            target: "¿Vos hablás inglés o te hablo despacio?",
            translation: "Do you speak English, or shall I speak slowly to you?"
          }
        },
        {
          term: "hablando de",
          explanation:
            "“Speaking of…” — a connector that hooks a new remark onto what was just said.",
          literal: "speaking of",
          useWhen:
            "Jumping to a related topic naturally — “hablando de comida, ¿ya almorzaste?”.",
          avoidWhen:
            "When there is no real link to what came before; used cold it sounds like a non sequitur.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["hablando de eso", "a propósito", "por cierto", "ya que hablamos de"],
          example: {
            target: "Hablando de salsa, ¿vas el viernes?",
            translation: "Speaking of salsa, are you going Friday?"
          }
        },
        {
          term: "de una",
          explanation:
            "“Right away” or “sure thing” — an enthusiastic yes to a suggestion, said without hesitation.",
          literal: "of one",
          useWhen:
            "Agreeing quickly and happily to a plan someone has just floated.",
          avoidWhen:
            "A formal reply, where “con mucho gusto” or “claro que sí” carries more weight.",
          register: "friendly informal",
          region: "Very Colombian; heard constantly in Bogotá and beyond.",
          related: ["listo", "de una vez", "claro que sí", "hágale"],
          example: {
            target: "¿Un café el jueves? ¡De una!",
            translation: "Coffee Thursday? Absolutely!"
          }
        },
        {
          term: "un momentico",
          explanation:
            "“Just a moment” with the -ico diminutive, which softens the wait and sounds friendlier than the bare “un momento.”",
          literal: "a little-moment",
          useWhen:
            "Asking someone to hold on briefly, on the phone or in person.",
          avoidWhen:
            "Very formal writing, where you would use “un momento, por favor” instead.",
          register: "friendly informal",
          region: "The -ico diminutive on words ending in -to (momentico, ratico) is a Bogotá and paisa hallmark.",
          related: ["un momentito", "un ratico", "espérame", "ya voy"],
          example: {
            target: "Espérame un momentico que ya te llamo.",
            translation: "Hold on a sec, I'll call you right back."
          }
        }
      ],
      note:
        "The most useful habit here is the sign-off. Colombians end calls with “hablamos” — present tense, but it means “we'll talk again”, a small promise to stay in touch. Pair it with the phone-answer “¿con quién hablo?” and the topic-jump “hablando de…”, and you have the three moments where hablar does the social work English spreads across “speak”, “talk”, “call” and “be in touch”.",
      culture: [
        {
          label: "The phone opens with “¿aló?”",
          body:
            "Colombians answer the phone with “¿aló?”, not “hola” or “diga”. It is so fixed that answering any other way marks you as foreign or as a call center. The follow-up “¿con quién hablo?” is not rudeness; it is the normal way to find out who dialled, since numbers are not always saved. Learn the pair and you will sound at home on the line from the very first second."
        },
        {
          label: "“Hablamos” is a goodbye, not a plan",
          body:
            "Foreigners hear “hablamos” and reach for their calendars, sure a specific call has just been scheduled. It has not. “Hablamos” is a warm way to end almost any exchange, closer to English “talk soon” than to a firm arrangement. Treating it as a binding appointment leads to confusion; treating it as a friendly full stop, sometimes softened to “cualquier cosa hablamos”, is exactly right."
        },
        {
          label: "Diminutives do emotional work",
          body:
            "“Un momentico”, “un ratico”, “ya voy ahí”. Colombian speech, especially in Bogotá and Antioquia, sprinkles diminutives not to shrink things but to soften them. A “momentico” feels kinder than a “momento”; asking for a “favorcito” lowers the imposition. Skipping them is not wrong, but leaning into them makes your Spanish sound warmer and less abrupt, which is half of sounding local on the phone."
        },
        {
          label: "Cali runs on tú, Medellín on vos",
          body:
            "Colombia has no single informal “you”. In Cali and much of the Valle, tú is the friendly default; in Medellín and Antioquia, vos rules, so “¿hablás?” replaces “¿hablas?”. Bogotá leans on usted even between friends. None is more correct — they are regional. Matching the local form is a quick way to stop sounding like a textbook and start sounding like someone who lives where they live."
        }
      ],
      pitfalls: [
        {
          mistake: "Announcing yourself on the phone with “Hola, soy Alex”",
          whyItFails:
            "On the phone Colombians use “habla Alex” or “con Alex”, not “soy Alex”, which sounds like you are stating your identity in person rather than on a call. It is understood, but it flags you as translating straight from English.",
          sayInstead: "Habla Alex. / Con Alex."
        },
        {
          mistake: "Using “hablar a alguien” for a normal conversation",
          whyItFails:
            "“Hablar a” frames it as one-directional, like lecturing. For a two-way chat Colombians say “hablar con alguien”. Using “a” makes it sound as if the other person is not allowed to answer back.",
          sayInstead: "Necesito hablar con ella."
        },
        {
          mistake: "Saying “te llamo para atrás” for “I'll call you back”",
          whyItFails:
            "“Llamar para atrás” is a calque of “call back” heard among some US-based speakers, but in Colombia it sounds off. The idiomatic phrase is “te devuelvo la llamada” or simply “yo te llamo”.",
          sayInstead: "Yo te llamo más tarde. / Te devuelvo la llamada."
        },
        {
          mistake: "Reading “hablamos” as a firm appointment",
          whyItFails:
            "“Hablamos” at the end of a call is a goodbye, not a scheduled event. Writing it into your calendar and expecting a call at a set hour misreads a friendly sign-off as a commitment nobody made.",
          sayInstead: "Treat it like “talk soon”; if you want a real time, ask “¿a qué hora hablamos?”"
        }
      ],
      variations: [
        {
          form: "Listo, hablamos el jueves.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The default friendly close once a day has been set."
        },
        {
          form: "Cualquier cosa hablamos, ¿bueno?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Leaving it open — talk if anything comes up, no fixed time."
        },
        {
          form: "¿Entonces nos hablamos el jueves?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Confirming the plan as a gentle question before hanging up."
        },
        {
          form: "Nos vemos el jueves, hablamos.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "When you will actually meet in person, not only call."
        },
        {
          form: "Que esté bien, hablamos luego.",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "A warmer-but-polite close with someone you are not close to yet."
        }
      ],
      prompt: "Valentina ends the call with “Listo, hablamos el jueves entonces.” What is she doing with “hablamos”?",
      choices: [
        "Scheduling a formal phone appointment for one specific hour on that coming Thursday.",
        "Asking Alex whether he would rather talk on Thursday or pick some other day instead.",
        "Closing the call warmly and promising to be in touch again, like English “talk soon”."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Alex says “quiero hablar contigo”. Why not “hablar a ti”?",
          choices: [
            "Because “hablar con” is the two-way conversation; “hablar a” sounds one-directional, like lecturing at someone.",
            "Because “hablar a ti” is grammatically impossible and no Spanish speaker anywhere would ever understand it.",
            "Because “contigo” is only ever used in writing, while “a ti” is the form reserved for the spoken language."
          ],
          answer: 0,
          tests: "hablar con versus hablar a"
        },
        {
          prompt: "On the phone Valentina asks “¿con quién hablo?”. What does it mean?",
          choices: [
            "She is asking Alex to speak up because the phone line has started breaking up badly.",
            "She is asking who is on the line — the standard Colombian way to find out who called.",
            "She is asking which of the two languages Alex would prefer to use for the whole call."
          ],
          answer: 1,
          tests: "“¿con quién hablo?” as a phone question"
        },
        {
          prompt: "In Medellín you hear “¿vos hablás inglés?”. What is “hablás”?",
          choices: [
            "A careless mistake for “hablas” that educated speakers in Medellín studiously avoid in speech.",
            "The polite usted form, chosen here to show extra respect toward an older stranger in the street.",
            "The vos form of “hablar”, normal in Medellín, with the stress landing on the final syllable."
          ],
          answer: 2,
          tests: "vos conjugation hablás versus tú hablas"
        }
      ]
    },
    en: {
      title: "Llamar a una amiga para cuadrar un encuentro",
      situation:
        "Alejandra está en Houston y quiere organizar un intercambio de idiomas con Megan, una amiga que conoció en la clase de salsa. En vez de escribirle, la llama por teléfono. Tiene que saludar, decir quién es, proponer el plan y despedirse — todo por una línea en la que no se ven las caras y donde las fórmulas telefónicas del inglés son distintas de las del español.",
      setting: {
        who: "Megan es una amiga estadounidense que Alejandra conoció en la clase de salsa. Han hablado un par de veces pero nunca han hecho un plan de verdad, y esta es la primera vez que Alejandra la llama.",
        what: "Una llamada corta para fijar un día y un lugar para un café de intercambio de idiomas.",
        when: "Un miércoles por la tarde después del trabajo, cuando llamar a alguien es normal y bienvenido.",
        where: "Houston, donde un mensaje de texto es lo habitual y una llamada se siente un poco más personal.",
        why: "Porque la llamada es la prueba de si una conocida de la clase se vuelve una amiga de verdad. Acertar con las fórmulas del teléfono — cómo se contesta, cómo se anuncia uno y cómo se despide — es casi todo."
      },
      address: {
        form: "mixed",
        who: "Megan y Alejandra se tratan por el nombre de pila y usan el mismo “you” desde la primera línea.",
        why: "El inglés tiene una sola forma de segunda persona, así que el registro lo carga todo lo demás: el nombre de pila en vez del apellido, “hey” en vez de “good evening”, y frases cortas. La cercanía está en las palabras, no en el pronombre.",
        ifYouSwitch:
          "Decirle “ma'am” a Megan no ofendería, pero la haría sentir mayor y pondría un mostrador entre las dos. Resérvelo para alguien que la atiende en calidad oficial."
      },
      dialogue: [
        {
          speaker: "Megan",
          target: "Hello? Who's calling?",
          translation: "¿Aló? ¿Con quién hablo?",
          pronunciation: "je-LOU? ju iz KO-ling",
          literal: "¿Hola? ¿Quién está llamando?",
          why: "En inglés el teléfono se contesta con “hello?”, y “who's calling?” es la fórmula para preguntar quién llama. Fíjese en que el inglés usa el gerundio “calling” donde el español usa el presente simple “hablo”."
        },
        {
          speaker: "Alejandra",
          target: "Hi, Megan! It's Alejandra, from the salsa class.",
          translation: "¡Hola, Megan! Habla Alejandra, la del curso de salsa.",
          pronunciation: "jai, ME-gan! its a-le-JAN-dra, from da SAL-sa clas",
          literal: "Hola, Megan, es Alejandra, la del curso de salsa.",
          why: "En inglés uno se anuncia con “it's + su nombre”, no con un verbo de hablar. Decir “speaks Alejandra”, calcado de “habla Alejandra”, no existe en inglés y delata al hispanohablante de inmediato."
        },
        {
          speaker: "Megan",
          target: "Oh, hey Alejandra! Good to hear from you. What's up?",
          translation: "¡Uy, hola, Alejandra! Qué bueno saber de ti. ¿Todo bien?",
          pronunciation: "ou, jei a-le-JAN-dra! gud tu jir from yu. UATS ap",
          literal: "Oh, hola Alejandra. Bueno oír de ti. ¿Qué hay?",
          why: "“Good to hear from you” es la frase hecha para cuando alguien lo contacta. “What's up?” es un saludo, no una pregunta literal; contestarlo con un parte médico sería tomarlo demasiado en serio."
        },
        {
          speaker: "Alejandra",
          target: "I'm good. So, I want to talk with you about doing an exchange: you speak to me in English and I speak to you in Spanish.",
          translation: "Todo bien. Oye, quiero hablar contigo para hacer un intercambio: tú me hablas en inglés y yo te hablo en español.",
          pronunciation: "aim gud. so, ai uont tu tok uid yu a-BAUT DU-ing an eks-CHEINCH",
          literal: "Estoy bien. Así que quiero hablar contigo sobre hacer un intercambio: tú me hablas en inglés y yo te hablo en español.",
          why: "El inglés distingue “talk with you” (conversar de igual a igual) de “talk at you” (hablarle sin dejarlo responder). Para un intercambio entre iguales, “talk with you” es lo más claro y neutral."
        },
        {
          speaker: "Megan",
          target: "Definitely! Hold on a sec… Thursday works. Want to meet at the café on 6th?",
          translation: "¡Claro que sí! Espera un momentico… El jueves me sirve. ¿Nos vemos en el café de la 6?",
          pronunciation: "DE-fi-nit-li! jould on a sek… ZERS-dei uorks. uont tu mit at da ka-FEI on siksz",
          literal: "¡Definitivamente! Espera un segundo… El jueves funciona. ¿Quieres encontrarte en el café de la 6?",
          why: "“Works” para una fecha significa “me viene bien”, no que la fecha trabaje. Y “hold on a sec” es el equivalente natural del “espérame un momentico” del español."
        },
        {
          speaker: "Alejandra",
          target: "Perfect, talk to you Thursday then. Take care!",
          translation: "Listo, hablamos el jueves entonces. ¡Un abrazo!",
          pronunciation: "PER-fekt, tok tu yu ZERS-dei den. teik KER",
          literal: "Perfecto, hablo contigo el jueves entonces. ¡Cuídate!",
          why: "El inglés cierra con “talk to you (later/Thursday)”, su versión del “hablamos” colombiano. Ojo: se dice “talk to you”, no “talk you”; comerse el “to” es un error clásico del hispanohablante."
        }
      ],
      vocabulary: [
        {
          term: "who's calling?",
          explanation:
            "“¿Quién llama?” La pregunta estándar por teléfono para saber quién está al otro lado de la línea.",
          literal: "¿quién está llamando?",
          useWhen:
            "Al contestar una llamada de un número desconocido, o cuando alguien pregunta por otra persona.",
          avoidWhen:
            "Cara a cara no tiene sentido; pertenece solo al teléfono y al citófono.",
          register: "neutral",
          region: "Inglés universal; “may I ask who's calling?” es la versión más formal, típica de una oficina.",
          related: ["who's this?", "may I ask who's calling?", "who am I speaking to?", "who's speaking?"],
          example: {
            target: "Hello? Who's calling?",
            translation: "¿Aló? ¿Con quién hablo?"
          }
        },
        {
          term: "it's [name]",
          explanation:
            "En inglés uno se identifica por teléfono con “it's + nombre”, nunca con un verbo de hablar. El calco “speaks Alejandra” no existe.",
          literal: "es [nombre]",
          useWhen:
            "Al anunciarse en una llamada o al tocar la puerta: “Hi, it's Alejandra.”",
          avoidWhen:
            "En un registro muy formal de oficina, donde se dice “this is Alejandra speaking.”",
          register: "neutral",
          region: "Inglés universal; “this is [nombre]” es intercambiable y un punto más formal.",
          related: ["this is Alejandra", "it's me", "this is she", "Alejandra speaking"],
          example: {
            target: "Hi, Megan! It's Alejandra.",
            translation: "¡Hola, Megan! Habla Alejandra."
          }
        },
        {
          term: "talk with / talk to",
          explanation:
            "“Hablar con” frente a “hablar a”. En una conversación entre iguales sirven “talk with you” y “talk to you”; pero “talk at you”, con la otra preposición, suena a regaño.",
          literal: "hablar con / hablar a",
          useWhen:
            "Para cualquier conversación normal: “I need to talk to my boss”, “I talked with her yesterday.”",
          avoidWhen:
            "Cuidado con “talk at someone”, que significa hablarle sin dejarlo responder; casi siempre es una crítica.",
          register: "neutral",
          region: "Inglés universal; “talk with” es un poco más frecuente en Norteamérica.",
          related: ["speak to", "speak with", "have a word with", "talk at (someone)"],
          example: {
            target: "I want to talk with you about an exchange.",
            translation: "Quiero hablar contigo sobre un intercambio."
          }
        },
        {
          term: "talk to you later",
          explanation:
            "El cierre “talk to you (later/Thursday)” es la versión inglesa del “hablamos” colombiano. Ojo con el “to”: se dice “talk to you”, no “talk you”.",
          literal: "hablo contigo luego",
          useWhen:
            "Para despedirse de alguien con quien va a seguir en contacto.",
          avoidWhen:
            "En una despedida muy formal, donde encaja mejor “I look forward to speaking with you.”",
          register: "friendly informal",
          region: "Inglés universal; “talk soon” y “catch you later” son variantes.",
          related: ["talk soon", "catch you later", "talk to you Thursday", "we'll be in touch"],
          example: {
            target: "Perfect, talk to you Thursday!",
            translation: "Listo, ¡hablamos el jueves!"
          }
        },
        {
          term: "do you speak English?",
          explanation:
            "La forma de preguntar por un idioma. El inglés usa el auxiliar “do”, que el español no tiene; olvidarlo produce “you speak English?”, entendible pero marcado.",
          literal: "¿hablas inglés?",
          useWhen:
            "Al preguntarle a alguien, de manera informal, si maneja un idioma.",
          avoidWhen:
            "Si quiere sonar más suave, use “do you happen to speak Spanish?”, que resulta menos directo.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["do you speak Spanish?", "can you speak English?", "any English?", "do you happen to speak…?"],
          example: {
            target: "Do you speak English, or should I speak slowly?",
            translation: "¿Hablás inglés, o te hablo despacio?"
          }
        },
        {
          term: "speaking of",
          explanation:
            "“Hablando de…”. Un conector que engancha un comentario nuevo con lo que se acaba de decir.",
          literal: "hablando de",
          useWhen:
            "Para pasar a un tema relacionado: “speaking of food, did you eat?”.",
          avoidWhen:
            "Cuando no hay ninguna relación con lo anterior; en frío suena a salto raro.",
          register: "neutral",
          region: "Inglés universal; “speaking of which” es una variante muy común.",
          related: ["speaking of which", "that reminds me", "by the way", "on that note"],
          example: {
            target: "Speaking of salsa, are you going Friday?",
            translation: "Hablando de salsa, ¿vas el viernes?"
          }
        },
        {
          term: "hold on a sec",
          explanation:
            "“Espérame un momentico.” La forma coloquial de pedir que alguien espere un instante.",
          literal: "espera un segundo",
          useWhen:
            "Al pedir una pausa breve, por teléfono o en persona.",
          avoidWhen:
            "En un registro formal, donde se dice “one moment, please.”",
          register: "friendly informal",
          region: "Inglés universal; “hang on” y “give me a second” son equivalentes.",
          related: ["hang on", "give me a sec", "just a moment", "one second"],
          example: {
            target: "Hold on a sec, I'll call you right back.",
            translation: "Espérame un momentico, ya te llamo."
          }
        }
      ],
      note:
        "Lo más útil de esta lección es la despedida. En inglés uno cierra con “talk to you later”, que equivale al “hablamos”, pero exige el “to”: “talk you later” es el error clásico. Súmele el auxiliar “do” de “do you speak…?” y la costumbre de anunciarse con “it's”, no con un verbo, y tendrá los tres momentos donde el inglés reparte entre “speak”, “talk” y “call” lo que el español resuelve con hablar.",
      culture: [
        {
          label: "El teléfono se abre con “hello?”",
          body:
            "En inglés el teléfono se contesta con “hello?”, nunca con “tell me” ni soltando el propio nombre de entrada. Y “who's calling?” no es grosería: es la forma normal de averiguar quién marca, sobre todo desde un número desconocido. En una oficina se suaviza a “may I ask who's calling?”. Aprender ese par lo hace sonar natural desde el primer segundo de la llamada, en vez de traducir el “¿aló?” palabra por palabra."
        },
        {
          label: "“Talk to you later” pide el “to”",
          body:
            "El cierre “talk to you later” es el “hablamos” del inglés, pero el hispanohablante tiende a comerse la preposición y decir “talk you later”, que suena mal de inmediato. El inglés amarra “talk”, “speak” y “listen” a preposiciones — “talk to”, “speak with”, “listen to” — donde el español pega el pronombre al verbo. Vigilar esas preposiciones es de lo que más corrige el acento gramatical."
        },
        {
          label: "El inglés marca cercanía con el nombre",
          body:
            "Como el inglés no tiene tú ni usted, la cercanía se marca de otra forma: usar el nombre de pila, decir “hey” en vez de “good evening”, acortar las frases. Por eso Megan dice “hey Alejandra” y no un saludo ceremonioso. Buscar un equivalente de usted y no hallarlo lleva a muchos a creer que el inglés es siempre informal; en realidad el registro vive en las palabras, no en el pronombre."
        },
        {
          label: "“What's up?” es un saludo, no una pregunta",
          body:
            "“What's up?”, “how's it going?” y “how are you?” funcionan como el “¿bien o qué?” colombiano: son saludos, y la respuesta esperada es breve — “good, you?”. Contestarlos con un informe detallado del día desconcierta a la otra persona. No es que no le importe; es que la pregunta es una fórmula de cortesía, igual que “¿quihubo?” no pide de verdad un recuento de lo que hubo."
        }
      ],
      pitfalls: [
        {
          mistake: "“Speaks Alejandra.” (on the phone)",
          whyItFails:
            "Es el calco de “habla Alejandra”. En inglés uno se anuncia con “it's Alejandra” o “this is Alejandra”, nunca con el verbo “speak” al frente. El calco se entiende, pero delata de inmediato al hispanohablante.",
          sayInstead: "It's Alejandra. / This is Alejandra."
        },
        {
          mistake: "“I'll talk you later.”",
          whyItFails:
            "Al español le sobra la preposición porque pega el pronombre al verbo (“te hablo”), pero el inglés la exige: “talk to you”. “Talk you later” suena incompleto y es uno de los errores más frecuentes en la despedida.",
          sayInstead: "I'll talk to you later."
        },
        {
          mistake: "“You speak English?” sin el auxiliar “do”",
          whyItFails:
            "El español pregunta solo con la entonación, así que el hispanohablante omite el “do”. “You speak English?” se entiende, pero suena a duda o a sorpresa; la pregunta neutral es “do you speak English?”.",
          sayInstead: "Do you speak English?"
        },
        {
          mistake: "Contestar “What's up?” con un informe largo",
          whyItFails:
            "“What's up?” es un saludo, no una pregunta literal por el estado de las cosas. Responder con un recuento detallado desconcierta; se espera un “good, you?”. Es el mismo malentendido que tomar “¿bien o qué?” al pie de la letra.",
          sayInstead: "Not much, you? / Good, how are you?"
        }
      ],
      variations: [
        {
          form: "Alright, talk to you Thursday.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "El cierre amistoso por defecto cuando ya hay un día fijo."
        },
        {
          form: "We'll talk if anything comes up, okay?",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Cuando lo deja abierto, sin una hora fija."
        },
        {
          form: "So we're on for Thursday?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para confirmar el plan como pregunta antes de colgar."
        },
        {
          form: "See you Thursday — talk soon.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Cuando de verdad se van a ver en persona, no solo llamar."
        },
        {
          form: "Take care, we'll be in touch.",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Un cierre cálido pero cortés con alguien con quien aún no hay confianza."
        }
      ],
      prompt: "Megan cierra con “Perfect, talk to you Thursday then.” ¿Qué hace con “talk to you Thursday”?",
      choices: [
        "Programa una cita telefónica formal para una hora exacta de ese jueves que viene.",
        "Le pregunta a Alejandra si prefiere hablar el jueves o mejor dejarlo para otro día.",
        "Cierra la llamada con calidez y promete seguir en contacto, como el “hablamos”."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Alejandra dice “I want to talk with you”. ¿Por qué no “talk at you”?",
          choices: [
            "Porque “talk with” es la conversación entre iguales; “talk at” suena a hablarle a alguien sin dejarlo responder.",
            "Porque “talk at you” es gramaticalmente imposible y ningún angloparlante llegaría jamás a entenderlo.",
            "Porque “talk with” solo se usa por escrito, mientras que “talk at” queda reservado para la lengua hablada."
          ],
          answer: 0,
          tests: "“talk with” frente a “talk at”"
        },
        {
          prompt: "Megan contesta y pregunta “Who's calling?”. ¿Qué significa?",
          choices: [
            "Le pide a Alejandra que hable más duro porque la línea se está cortando demasiado.",
            "Pregunta quién está en la línea — la forma normal en inglés de saber quién llama.",
            "Pregunta en cuál de los dos idiomas quiere Alejandra tener el resto de la conversación."
          ],
          answer: 1,
          tests: "“who's calling?” como pregunta telefónica"
        },
        {
          prompt: "¿Por qué se dice “Do you speak English?” y no “You speak English?”?",
          choices: [
            "Porque “you speak English?” es un error que ningún hablante nativo llegaría nunca a entender.",
            "Porque sin “do” la frase solo sirve por escrito, jamás en una conversación hablada normal.",
            "Porque el inglés arma la pregunta con el auxiliar “do”, que el español simplemente no tiene."
          ],
          answer: 2,
          tests: "el auxiliar “do” en las preguntas"
        }
      ]
    }
  },
  {
    id: "being-waved-into-a-paisa-corner-shop",
    level: "Starter · Getting around",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "familiar",
    pathways: ["foundation"],
    verb: "seguir",
    review: "pending",
    es: {
      title: "Que lo inviten a entrar a una tienda de barrio paisa",
      situation:
        "Alex anda perdido en un barrio de Medellín buscando el metro y para en una tienda de esquina a comprar agua y pedir indicaciones. Don Fabio, el tendero, lo recibe con el “¡siga!” que a todo extranjero confunde: parece “follow me”, pero significa “entre”. Alex tiene que entender la invitación, comprar, pedir la dirección y despedirse, todo en pleno vos paisa.",
      setting: {
        who: "Don Fabio is the paisa shopkeeper of a tiny corner store, the kind who calls every customer mijo and knows the block by heart.",
        what: "A quick stop to buy water and ask the way to the nearest metro station.",
        when: "Late morning, when the shop is quiet and the owner has time to chat.",
        where: "A residential barrio in Medellín, where the corner tienda is a social hub, not just a shop.",
        why: "Because the encounter turns on one false friend. If Alex hears “siga” as “follow me” he will walk out the door; if he hears it as “come in”, he gets his water, his directions and a small dose of paisa warmth."
      },
      address: {
        form: "vos",
        who: "Don Fabio uses vos with Alex, as paisas do with almost everyone, and softens it with “mijo”.",
        why: "In Medellín and Antioquia, vos is the everyday informal form — “seguí”, “vos sabés”, “hágale pues”. It is not rude or overly familiar; it is simply how the region speaks, warm and close by default.",
        ifYouSwitch:
          "Answering Don Fabio with a stiff usted would not offend him, but it would sound distant in a place where vos is the friendly norm. Tú would mark you as from Bogotá or the coast rather than local."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Buenas… ¿Está abierto?",
          translation: "Afternoon… Are you open?",
          pronunciation: "BWEH-nas… es-TA a-byer-TO",
          literal: "Goods… Is open?",
          why: "“Buenas” is a time-neutral greeting, short for “buenas tardes/días”, and the standard way to walk into a shop. Colombians drop the noun and keep the warmth."
        },
        {
          speaker: "Don Fabio",
          target: "¡Claro, mijo, siga! Siga, que está en su casa.",
          translation: "Of course, come on in! Come in, make yourself at home.",
          pronunciation: "KLA-ro, MEE-ho, SEE-ga! SEE-ga, ke es-TA en su KA-sa",
          literal: "Clear, my-son, follow! Follow, that you-are in your house.",
          why: "Here is the false friend: “siga” from seguir literally is “follow/continue”, but as a greeting it means “come in, go ahead”. “Está en su casa” is the fixed welcome, not a statement about where he lives."
        },
        {
          speaker: "Alex",
          target: "Gracias. ¿Me regala una botella de agua?",
          translation: "Thanks. Could I get a bottle of water?",
          pronunciation: "GRA-syas. me re-GA-la OO-na bo-TE-ya de A-gwa",
          literal: "Thanks. To-me you-gift a bottle of water?",
          why: "“¿Me regala…?” is the ultra-common Colombian way to ask for something in a shop. It literally says “will you gift me”, but nobody expects it free; it is just a soft, polite request."
        },
        {
          speaker: "Don Fabio",
          target: "Con mucho gusto. Mire, para el metro siga derecho dos cuadras y ahí lo ve.",
          translation: "My pleasure. Look, for the metro keep straight two blocks and you'll see it there.",
          pronunciation: "kon MOO-cho GOOS-to. MEE-re, PA-ra el ME-tro SEE-ga de-RE-cho dos KWA-dras",
          literal: "With much pleasure. Look, for the metro follow straight two blocks and there him you-see.",
          why: "Now “siga” means “keep going”: “siga derecho” is “carry straight on”. Watch the trap — “derecho” is “straight ahead”, while “derecha” is “right”. Directions come as commands here."
        },
        {
          speaker: "Alex",
          target: "Ah, listo. Es que sigo aprendiendo español y quiero seguir practicando aquí en el barrio.",
          translation: "Ah, got it. The thing is I'm still learning Spanish and I want to keep practicing here in the neighborhood.",
          pronunciation: "ah, LEES-to. es ke SEE-go a-pren-DYEN-do es-pa-NYOL",
          literal: "Ah, ready. Is that I-follow learning Spanish and I-want to-follow practicing here in the neighborhood.",
          why: "Two more uses in one line: “sigo aprendiendo” (I'm still learning) and “seguir practicando” (to keep practicing). Seguir + gerund means to carry on doing something — the everyday backbone of the verb."
        },
        {
          speaker: "Don Fabio",
          target: "¡Hágale pues, mijo! Aquí seguimos. Que le vaya muy bien.",
          translation: "Go for it then, son! We're always here. Take care now.",
          pronunciation: "A-ga-le pwes, MEE-ho! a-KEE se-GEE-mos. ke le BA-ya mooy byen",
          literal: "Do-it then, my-son! Here we-follow. That to-you it-go very well.",
          why: "“Hágale pues” is pure paisa encouragement. “Aquí seguimos” uses seguir as “we're still here / still going”, an open invitation to come back. “Que le vaya bien” is the warm standard farewell."
        }
      ],
      vocabulary: [
        {
          term: "¡Siga!",
          explanation:
            "As a greeting, “come in / go ahead” — the Colombian invitation to enter or to proceed. It comes from seguir but has nothing to do with following the speaker.",
          literal: "follow! / continue!",
          useWhen:
            "Someone opens a door, waves you into a shop or office, or lets you go first: “siga, siga.”",
          avoidWhen:
            "Hearing it as a command to walk behind the person; that misreading sends learners straight back out the door.",
          register: "polite friendly",
          region: "General Colombian; especially warm and frequent in Antioquia and the coffee region.",
          related: ["siga, por favor", "siga y sígase", "adelante", "está en su casa"],
          example: {
            target: "¡Siga, mijo, está en su casa!",
            translation: "Come on in, make yourself at home!"
          }
        },
        {
          term: "siga derecho",
          explanation:
            "“Keep straight on.” Here seguir means “continue”, and “derecho” means “straight ahead” — not to be confused with “derecha”, which is “right.”",
          literal: "follow straight",
          useWhen:
            "Giving or following walking directions along a street.",
          avoidWhen:
            "When you actually mean turn right; that is “gire a la derecha”, a different word.",
          register: "neutral",
          region: "General Colombian; directions are typically phrased as commands.",
          related: ["siga recto", "derecho / derecha", "gire a la derecha", "hasta el fondo"],
          example: {
            target: "Siga derecho dos cuadras y ahí está.",
            translation: "Keep straight for two blocks and there it is."
          }
        },
        {
          term: "seguir + gerundio",
          explanation:
            "“To keep / still be doing” something. “Sigo estudiando” = I'm still studying; “seguí caminando” = I kept walking.",
          literal: "to-follow + -ing",
          useWhen:
            "Saying an action continues without a break — study, work, waiting, learning.",
          avoidWhen:
            "To start an action; seguir is for continuing one already underway, not beginning a new one.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["sigo aprendiendo", "seguir adelante", "continuar + gerundio", "seguir en las mismas"],
          example: {
            target: "Quiero seguir practicando en el barrio.",
            translation: "I want to keep practicing in the neighborhood."
          }
        },
        {
          term: "aquí seguimos",
          explanation:
            "“We're still here / still going.” A friendly way to say the shop, the team or the person carries on as ever — often an open invitation to return.",
          literal: "here we-follow",
          useWhen:
            "Signing off warmly, implying continuity and that you are welcome back.",
          avoidWhen:
            "As a literal statement of location; it is about carrying on, not about coordinates.",
          register: "friendly informal",
          region: "General Colombian; the tienda-owner's classic goodbye.",
          related: ["aquí estamos", "seguimos en las mismas", "vuelva cuando quiera", "por acá seguimos"],
          example: {
            target: "Cuando quiera, aquí seguimos.",
            translation: "Whenever you like, we're still here."
          }
        },
        {
          term: "mijo / mija",
          explanation:
            "A contraction of “mi hijo/hija”, used affectionately for people who are not your children — customers, friends, strangers.",
          literal: "my-son / my-daughter",
          useWhen:
            "Warm, slightly protective address, common from older people to younger ones.",
          avoidWhen:
            "A formal or professional setting with someone you must show distance to.",
          register: "friendly informal",
          region: "Very Colombian, especially paisa; heard nationwide.",
          related: ["mijito", "m'hija", "parcero", "vecino"],
          example: {
            target: "Siga, mijo, ¿qué se le ofrece?",
            translation: "Come in, son, what can I get you?"
          }
        },
        {
          term: "¡hágale pues!",
          explanation:
            "Paisa encouragement: “go for it / go ahead then.” “Pues” is the Antioquian filler that colors half of Medellín's speech.",
          literal: "do-it then!",
          useWhen:
            "Cheering someone on, agreeing to a plan, or closing a chat with energy.",
          avoidWhen:
            "Formal writing; it is spoken, regional and very casual.",
          register: "friendly informal",
          region: "Paisa (Medellín / Antioquia) signature phrase.",
          related: ["hágale", "de una pues", "eso pues", "listo pues"],
          example: {
            target: "¿Nos vemos mañana? ¡Hágale pues!",
            translation: "See you tomorrow? Go for it!"
          }
        },
        {
          term: "¿me regala…?",
          explanation:
            "“Could I get…?” Literally “will you gift me”, but it is simply the polite Colombian way to ask for something you are buying.",
          literal: "to-me you-gift?",
          useWhen:
            "Requesting an item in a shop, a favor, or a moment of someone's time.",
          avoidWhen:
            "Expecting it to imply the thing is free — it never does; it is just courtesy.",
          register: "polite friendly",
          region: "Very Colombian; can puzzle speakers from other countries.",
          related: ["¿me da…?", "¿me vende…?", "¿me colabora con…?", "¿me hace el favor de…?"],
          example: {
            target: "¿Me regala una bolsa, por favor?",
            translation: "Could I get a bag, please?"
          }
        }
      ],
      note:
        "The one thing to carry out of this shop is that “siga” is not “follow me”. From seguir, it is the Colombian “come in / go ahead”, and it also powers “siga derecho” (keep straight) and “sigo/seguí + gerund” (still doing, kept doing). Hear it as an invitation and a continuation, never as an order to walk behind someone, and a whole layer of everyday Colombian warmth opens up — doorways, directions and goodbyes all lean on this one verb.",
      culture: [
        {
          label: "The tienda is a social institution",
          body:
            "The corner tienda is far more than a shop. It sells single cigarettes and eggs by the unit, extends credit on a handshake, and doubles as the block's news exchange. The owner knows who moved in, which street the metro is on, and whose dog got loose. Stopping to ask directions is not an interruption; it is what the tienda is for. That is why Don Fabio has time to wave Alex in and chat."
        },
        {
          label: "“Siga” is the great false friend",
          body:
            "No word trips up learners like “siga”. It looks like “follow”, so newcomers step back and wait to be led. In fact, at a threshold it means “come in”; when someone lets you pass, it means “go ahead”; in directions it means “carry on”. All three flow from seguir as “continue” rather than “pursue”. Once you stop translating it as “follow me”, doorways across Colombia suddenly make sense."
        },
        {
          label: "Directions come as commands",
          body:
            "Colombians give directions in the imperative — “siga derecho”, “coja por esta calle”, “voltee en la esquina”. It is not brusque; the command form is simply how routes are described. The classic trap is “derecho” versus “derecha”: “siga derecho” means keep straight on, while “a la derecha” means to the right. Mishearing one for the other is how visitors end up a block off, confidently walking the wrong way."
        },
        {
          label: "Paisa warmth runs on “pues”",
          body:
            "Antioquian speech is stitched together with “pues” — “hágale pues”, “eso pues”, “¿bien o qué pues?”. It rarely translates; it is a rhythm and a warmth more than a meaning. Add vos and diminutives, and the paisa register feels instantly familiar and kind, even to a stranger buying a bottle of water. Copying the melody, not just the words, is what makes you sound like you belong in the barrio."
        }
      ],
      pitfalls: [
        {
          mistake: "Hearing “¡siga!” and stepping back to follow the person",
          whyItFails:
            "“Siga” at a door means “come in”, not “follow me”. Waiting to be led leaves you standing awkwardly on the threshold while the host wonders why you will not enter their shop or home.",
          sayInstead: "Step in and answer “gracias, con permiso.”"
        },
        {
          mistake: "Turning right when told “siga derecho”",
          whyItFails:
            "“Derecho” means straight ahead; “derecha” means right. Treating them as the same word sends you around the wrong corner, one block off from where you meant to be.",
          sayInstead: "Siga derecho = keep straight; gire a la derecha = turn right."
        },
        {
          mistake: "Using “seguir” to start an action",
          whyItFails:
            "Seguir is for continuing something already begun. Saying “sigo a estudiar” to mean “I'm going to start studying” does not work; seguir needs an action already in progress, and takes a gerund, not “a + infinitive”.",
          sayInstead: "Voy a empezar a estudiar. / Sigo estudiando."
        },
        {
          mistake: "Taking “aquí seguimos” as a statement of location",
          whyItFails:
            "“Aquí seguimos” means “we're still going / still here for you”, a warm sign-off, not a literal note about where the shop sits. Reading it flatly misses the invitation to come back that it carries.",
          sayInstead: "Hear it as “we're always here — come back anytime.”"
        }
      ],
      variations: [
        {
          form: "Siga, siga, está en su casa.",
          register: "polite friendly",
          region: "General Colombian",
          whenToUse: "Welcoming someone warmly through a door."
        },
        {
          form: "Siga derecho hasta el semáforo.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Giving straightforward walking directions."
        },
        {
          form: "Sigamos que se hace tarde.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Urging a group to keep moving."
        },
        {
          form: "Sigo en las mismas, sin cambio.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Saying your situation carries on unchanged."
        },
        {
          form: "Cuando guste, por acá seguimos.",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "A courteous open invitation to return."
        }
      ],
      prompt: "Don Fabio opens the door with “¡Claro, mijo, siga!” What is he telling Alex to do?",
      choices: [
        "To walk in behind him single file so he can lead the way toward the back of the little shop.",
        "To come inside and make himself at home — “siga” here is the welcome, not an order to follow.",
        "To carry straight on down the street because the shop he wants is actually the next one along."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Don Fabio says “siga derecho dos cuadras.” Which way should Alex go?",
          choices: [
            "Straight ahead for two blocks, because “derecho” means straight on, not the right-hand side.",
            "To the right at the second block, because “derecho” is just the everyday word for “right”.",
            "Back the way he came for two blocks, because “siga” tells him to retrace and follow the road."
          ],
          answer: 0,
          tests: "siga derecho versus a la derecha"
        },
        {
          prompt: "Alex says “sigo aprendiendo español.” What does “sigo aprendiendo” mean?",
          choices: [
            "That he has just this week decided to begin studying Spanish seriously for the very first time.",
            "That he already gave up on Spanish once and is now, after a long pause, starting over again.",
            "That he is still learning Spanish — seguir plus the gerund means to keep on doing something."
          ],
          answer: 2,
          tests: "seguir + gerundio as continuation"
        },
        {
          prompt: "Don Fabio signs off with “aquí seguimos.” What is he really saying?",
          choices: [
            "That he is telling Alex the exact street the shop sits on so he can find it on a map later.",
            "That the shop is always here and Alex is welcome back — a warm, continuing invitation.",
            "That he and Alex should now leave together and keep walking on toward the metro station."
          ],
          answer: 1,
          tests: "aquí seguimos as a warm sign-off"
        }
      ]
    },
    en: {
      title: "Que lo inviten a entrar a una tienda de barrio paisa",
      situation:
        "Alejandra anda perdida en un barrio de Houston buscando el subway y para en una tienda de esquina a comprar agua y pedir indicaciones. Frank, el dueño, la recibe con un “come on in” y le da la dirección con puros imperativos suaves. Alejandra tiene que entender la bienvenida, comprar, pedir la dirección y despedirse — y de paso no calcar el “siga” del español al inglés.",
      setting: {
        who: "Frank es el dueño estadounidense de una pequeña tienda de esquina, de esos que saludan a todo el mundo y se saben el barrio de memoria.",
        what: "Una parada rápida para comprar agua y preguntar cómo llegar a la estación de subway más cercana.",
        when: "Media mañana, cuando la tienda está tranquila y el dueño tiene tiempo de conversar.",
        where: "Un barrio residencial de Houston, donde la corner store también funciona como pequeño punto de encuentro.",
        why: "Porque el encuentro pone a prueba un calco. Si Alejandra traduce “siga” como “follow”, va a decir algo raro; si usa “come in” y “keep straight”, consigue su agua, su dirección y algo de calidez de barrio."
      },
      address: {
        form: "mixed",
        who: "Frank y Alejandra se tratan con el mismo “you”, y él lo suaviza con “hon” y el nombre de pila.",
        why: "El inglés no tiene vos ni usted, así que la cercanía la marcan otras cosas: “hon” o “dear”, el tono, las frases cortas. La calidez del vos paisa se traslada al inglés por el trato, no por el pronombre, que es uno solo.",
        ifYouSwitch:
          "Contestarle a Frank con un “sir” muy tieso no lo ofendería, pero pondría distancia donde él busca cercanía. En una tienda de barrio, el nombre de pila y un tono relajado encajan mejor que la formalidad."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Hi there… Are you open?",
          translation: "Buenas… ¿Está abierto?",
          pronunciation: "jai der… ar yu OU-pen",
          literal: "Hola ahí… ¿Estás abierto?",
          why: "“Hi there” es un saludo suelto y neutro para entrar a un local. El inglés no tiene un “buenas” que omita la hora, así que se apoya en “hi” o “hello” a secas."
        },
        {
          speaker: "Frank",
          target: "Sure thing, come on in! Come in, make yourself at home.",
          translation: "¡Claro, mijo, siga! Siga, que está en su casa.",
          pronunciation: "shur zing, kam on IN! kam in, meik yor-SELF at joum",
          literal: "Seguro, ven adentro. Ven adentro, ponte cómodo.",
          why: "Aquí está el calco a evitar: el inglés dice “come in”, no “follow”, para invitar a entrar. “Make yourself at home” es la fórmula fija que equivale a “está en su casa”."
        },
        {
          speaker: "Alejandra",
          target: "Thanks. Could I get a bottle of water?",
          translation: "Gracias. ¿Me regala una botella de agua?",
          pronunciation: "zanks. kud ai get a BO-tel of UO-ter",
          literal: "Gracias. ¿Podría conseguir una botella de agua?",
          why: "“Could I get…?” es la forma natural de pedir algo en una tienda, el equivalente del “¿me regala…?”. Ojo: “regalar” aquí no es “gift”; pedir un “gift” de agua sonaría a que la quiere gratis."
        },
        {
          speaker: "Frank",
          target: "You bet. Look, for the subway, keep going straight for two blocks and you'll see it.",
          translation: "Con mucho gusto. Mire, para el metro, siga derecho dos cuadras y ahí lo ve.",
          pronunciation: "yu bet. luk, for da SAB-uei, kip GOU-ing streit for tu bloks",
          literal: "Tú apuestas. Mira, para el subway, sigue yendo recto por dos cuadras y lo verás.",
          why: "“Keep going straight” es el “siga derecho”. El inglés parte “keep + gerundio” para la continuidad, y usa “straight” para recto; no lo confunda con “right”, que es derecha."
        },
        {
          speaker: "Alejandra",
          target: "Ah, got it. The thing is, I'm still learning English and I want to keep practicing here.",
          translation: "Ah, listo. Es que sigo aprendiendo inglés y quiero seguir practicando aquí.",
          pronunciation: "ah, GOT it. da zing iz, aim stil LER-ning ING-lish",
          literal: "Ah, entendido. La cosa es, todavía estoy aprendiendo inglés y quiero seguir practicando aquí.",
          why: "El inglés reparte el seguir del español en dos: “still + verbo” para “sigo aprendiendo”, y “keep + gerundio” para “seguir practicando”. Son dos estructuras distintas donde el español usa una sola."
        },
        {
          speaker: "Frank",
          target: "You got it! Come by anytime, we're always here. Take care now.",
          translation: "¡Hágale pues! Venga cuando quiera, aquí seguimos. Que le vaya muy bien.",
          pronunciation: "yu GOT it! kam bai E-ni-taim, uir OL-ueiz jir. teik ker nau",
          literal: "¡Lo tienes! Ven en cualquier momento, siempre estamos aquí. Cuídate ahora.",
          why: "“We're always here” traslada el “aquí seguimos”; el inglés lo dice con “always”, no con un verbo de seguir. “Take care now” es la despedida cálida equivalente a “que le vaya bien”."
        }
      ],
      vocabulary: [
        {
          term: "come on in",
          explanation:
            "“Siga / adelante.” La invitación en inglés para que alguien entre. Nada que ver con “follow”: el calco de “siga” como “follow me” es justo lo que hay que evitar.",
          literal: "ven adentro",
          useWhen:
            "Al abrirle la puerta a alguien, hacerlo pasar a una tienda o una casa.",
          avoidWhen:
            "Traducirlo como “follow me”, que mandaría a la persona a caminar detrás de usted en vez de entrar.",
          register: "friendly informal",
          region: "Inglés universal; “come on in” es más cálido que el simple “come in”.",
          related: ["come in", "step inside", "make yourself at home", "have a seat"],
          example: {
            target: "Come on in, make yourself at home!",
            translation: "¡Siga, está en su casa!"
          }
        },
        {
          term: "keep going straight",
          explanation:
            "“Siga derecho.” El inglés usa “keep + gerundio” para la continuidad y “straight” para recto — que no se confunda con “right”, que es derecha.",
          literal: "sigue yendo recto",
          useWhen:
            "Al dar o seguir indicaciones a pie por una calle.",
          avoidWhen:
            "Cuando de verdad quiere decir gire a la derecha; eso es “turn right”, otra palabra.",
          register: "neutral",
          region: "Inglés universal; “go straight” y “head straight” son variantes.",
          related: ["go straight", "straight ahead", "turn right", "head down this street"],
          example: {
            target: "Keep going straight for two blocks.",
            translation: "Siga derecho dos cuadras."
          }
        },
        {
          term: "keep + -ing / still",
          explanation:
            "El inglés parte el “seguir + gerundio” del español en dos: “keep practicing” para continuar por voluntad, y “still learning” para algo que sigue en curso.",
          literal: "seguir + -ndo / todavía",
          useWhen:
            "Para decir que una acción continúa: “I keep trying”, “I'm still waiting.”",
          avoidWhen:
            "Para empezar una acción; “keep” y “still” sirven para continuarla, no para iniciarla.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["keep on -ing", "carry on -ing", "still + -ing", "go on -ing"],
          example: {
            target: "I'm still learning, so I want to keep practicing.",
            translation: "Todavía estoy aprendiendo, así que quiero seguir practicando."
          }
        },
        {
          term: "we're always here",
          explanation:
            "“Aquí seguimos.” El inglés expresa la continuidad con “always”, no con un verbo de seguir; es una invitación abierta a volver.",
          literal: "siempre estamos aquí",
          useWhen:
            "Al despedirse con calidez, dando a entender que la persona es bienvenida de vuelta.",
          avoidWhen:
            "Como dato literal de ubicación; se trata de continuidad, no de coordenadas.",
          register: "friendly informal",
          region: "Inglés universal; la despedida clásica del tendero.",
          related: ["we're not going anywhere", "come back anytime", "stop by whenever", "we're here for you"],
          example: {
            target: "Come by anytime, we're always here.",
            translation: "Venga cuando quiera, aquí seguimos."
          }
        },
        {
          term: "hon / dear",
          explanation:
            "Tratamientos cariñosos, como “mijo/mija”, que la gente mayor o del servicio usa para acortar la distancia con un desconocido.",
          literal: "cariño / querido",
          useWhen:
            "Un trato cálido, un poco protector, típico de tiendas, cafeterías y vecinos.",
          avoidWhen:
            "Un entorno formal o profesional, donde puede sonar condescendiente.",
          register: "friendly informal",
          region: "Inglés informal; “hon” es más de Norteamérica, “love” y “dear” del Reino Unido.",
          related: ["honey", "sweetie", "love", "pal"],
          example: {
            target: "What can I get you, hon?",
            translation: "¿Qué le sirvo, mijo?"
          }
        },
        {
          term: "you got it",
          explanation:
            "“Hágale / listo.” Una confirmación animada: “de una, ya está”. También responde a un agradecimiento con soltura.",
          literal: "lo tienes",
          useWhen:
            "Al aceptar un pedido o un plan con energía y buena disposición.",
          avoidWhen:
            "Un registro muy formal, donde encaja mejor “certainly” o “of course.”",
          register: "friendly informal",
          region: "Inglés universal, muy norteamericano.",
          related: ["you bet", "sure thing", "no problem", "coming right up"],
          example: {
            target: "Two waters? You got it.",
            translation: "¿Dos aguas? Hágale."
          }
        },
        {
          term: "could I get…?",
          explanation:
            "“¿Me regala…?” La forma cortés y natural de pedir algo que uno compra. Ojo: no se usa “gift” ni “regalar”, que sonaría a pedirlo gratis.",
          literal: "¿podría conseguir…?",
          useWhen:
            "Al pedir un producto en una tienda o un café.",
          avoidWhen:
            "Con “can I get” en un contexto muy formal, donde “may I have” es más pulido.",
          register: "polite friendly",
          region: "Inglés universal; “can I get” es más informal, “may I have” más formal.",
          related: ["can I get…?", "may I have…?", "I'll take…", "could I have…?"],
          example: {
            target: "Could I get a bag, please?",
            translation: "¿Me regala una bolsa, por favor?"
          }
        }
      ],
      note:
        "Lo que hay que llevarse de esta tienda es que “siga” no se calca al inglés. Donde el español usa un solo verbo, el inglés reparte: “come in” para invitar a entrar, “keep going straight” para las indicaciones, y “still + verbo” o “keep + gerundio” para la continuidad. Traducir “siga” como “follow me” manda a la persona a caminar detrás de uno. Piense en entrar y en continuar, y las puertas, las direcciones y las despedidas encajan.",
      culture: [
        {
          label: "La corner store no es la tienda de barrio",
          body:
            "La corner store estadounidense vende de todo un poco, pero rara vez fía, no vende cigarrillos sueltos ni es el centro de chismes del barrio como la tienda colombiana. Aun así, en barrios residenciales el dueño suele conocer a la clientela y tener tiempo de indicar el camino. Entender esa diferencia evita esperar la misma calidez automática, y a la vez sorprende gratamente cuando alguien como Frank sí se toma el tiempo de conversar."
        },
        {
          label: "“Come in”, no “follow me”",
          body:
            "El error más típico del hispanohablante es calcar “siga” como “follow”. En inglés, para invitar a entrar se dice “come in” o “come on in”; “follow me” manda literalmente a caminar detrás de uno, hacia otro lugar. Son situaciones distintas. Cuando alguien le abre la puerta y le dice “come on in”, basta con entrar y decir “thanks”. Reservar “follow me” para cuando de verdad lo van a llevar a otra sala."
        },
        {
          label: "El inglés suaviza las indicaciones",
          body:
            "El español da direcciones en imperativo — “siga derecho”, “voltee” — y suena de lo más normal. El inglés tiende a envolverlas: “you'll want to keep straight”, “just head down this street”, “you can turn left at the light”. El imperativo pelado (“go straight, turn left”) se entiende, pero añadir “you'll want to” o “just” lo hace sonar más amable. Es el mismo mensaje con más acolchado, y conviene reconocerlo para no oírlo como frialdad."
        },
        {
          label: "La calidez de barrio existe, con otras palabras",
          body:
            "Aunque el inglés no tenga vos ni diminutivos, la cercanía de barrio existe: “hon”, “dear”, “sweetie”, “take care now”, “you have a good one”. Frank cierra con “take care now”, que hace el trabajo del “que le vaya bien”. Buscar un equivalente exacto del calor paisa y no hallarlo lleva a creer que el inglés es seco; en realidad la calidez está repartida en esas fórmulas fijas de despedida y trato."
        }
      ],
      pitfalls: [
        {
          mistake: "“Follow, please.” to invite someone in",
          whyItFails:
            "Es el calco de “siga”. En inglés “follow” manda a caminar detrás de uno hacia otro sitio; para invitar a entrar se dice “come in”. La persona se quedaría esperando a que la lleven a otra parte.",
          sayInstead: "Come in, please. / Come on in."
        },
        {
          mistake: "“Keep right” to mean “go straight”",
          whyItFails:
            "“Straight” es derecho y “right” es derecha; el parecido con “derecho” hace que el hispanohablante diga “right” cuando quiere decir recto. El resultado manda a la otra persona a doblar en la esquina equivocada.",
          sayInstead: "Keep going straight. / Go straight ahead."
        },
        {
          mistake: "“I keep learning English.” to mean “sigo aprendiendo”",
          whyItFails:
            "“I keep learning” suena a que uno se empeña una y otra vez, casi con fastidio. Para “todavía estoy aprendiendo” el inglés prefiere “I'm still learning”. Elegir mal entre “keep” y “still” cambia el sentido.",
          sayInstead: "I'm still learning English."
        },
        {
          mistake: "“I still not finished.” (dropping the auxiliary)",
          whyItFails:
            "El español dice “todavía no termino” sin auxiliar, y el hispanohablante lo calca. El inglés exige el verbo “to be” o “have”: “I'm still not finished” o “I haven't finished yet”. Sin él, la frase queda coja.",
          sayInstead: "I'm still not finished. / I haven't finished yet."
        }
      ],
      variations: [
        {
          form: "Come on in, make yourself at home.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Al recibir a alguien con calidez en una puerta."
        },
        {
          form: "Keep straight until the lights.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Al dar indicaciones sencillas a pie."
        },
        {
          form: "Let's keep moving, it's getting late.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Al apurar a un grupo para seguir andando."
        },
        {
          form: "Same as always, nothing's changed.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Al decir que la situación sigue igual."
        },
        {
          form: "Do stop by again whenever you like.",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Una invitación cortés y abierta a volver."
        }
      ],
      prompt: "Frank abre la puerta con “Sure thing, come on in!” ¿Qué le está diciendo a Alejandra que haga?",
      choices: [
        "Que camine detrás de él en fila para que la guíe hasta el fondo de la pequeña tienda.",
        "Que entre y se ponga cómoda — aquí “come on in” es la bienvenida, no una orden de seguirlo.",
        "Que siga derecho por la calle porque la tienda que busca es en realidad la de más allá."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Frank dice “keep going straight for two blocks.” ¿Hacia dónde va Alejandra?",
          choices: [
            "Recto durante dos cuadras, porque “straight” es derecho, no el lado derecho de la calle.",
            "A la derecha en la segunda cuadra, porque “straight” es la palabra corriente para “derecha”.",
            "De vuelta por donde vino durante dos cuadras, porque “keep” le dice que devuelva el camino."
          ],
          answer: 0,
          tests: "straight frente a right"
        },
        {
          prompt: "Alejandra dice “I'm still learning English.” ¿Por qué “still” y no “keep”?",
          choices: [
            "Porque “I keep learning” daría a entender que insiste una y otra vez, casi con fastidio.",
            "Porque “keep” solo se puede usar por escrito y jamás en una conversación hablada normal.",
            "Porque “still” está mal dicho aquí y ningún hablante nativo aceptaría esa frase como correcta."
          ],
          answer: 0,
          tests: "still frente a keep para la continuidad"
        },
        {
          prompt: "Frank se despide con “we're always here.” ¿Qué quiere decir de verdad?",
          choices: [
            "Que le está dando la calle exacta donde queda la tienda para que la ubique después en un mapa.",
            "Que la tienda siempre está y Alejandra es bienvenida a volver — una invitación cálida y abierta.",
            "Que él y Alejandra deberían salir juntos ahora y seguir caminando hacia la estación de subway."
          ],
          answer: 1,
          tests: "“we're always here” como despedida cálida"
        }
      ]
    }
  },
  {
    id: "talking-yourself-out-of-a-risky-plan",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "courteous",
    pathways: ["foundation"],
    verb: "pensar",
    review: "pending",
    es: {
      title: "Convencerse de no seguir un plan arriesgado",
      situation:
        "En un café de Bogotá, Camilo, un amigo cercano, le propone a Alex irse ya mismo, a medianoche, a manejar hasta Villavicencio “por la aventura”. Alex tiene que pensarlo en voz alta, sopesar el riesgo de esa carretera de noche y decir que no sin romper la amistad. Todo gira en torno a pensar: pensar en, pensar de, pensar que, y el rotundo “ni de riesgos”.",
      setting: {
        who: "Camilo is a close bogotano friend who mixes an affectionate usted with “parce”, and who loves an impulsive plan.",
        what: "A late-night pitch to drive to Villavicencio on the spot, and Alex's careful refusal.",
        when: "Around midnight in a café, when the idea sounds thrilling and the road sounds worse the more you think about it.",
        where: "Bogotá, with the winding mountain road down to the Llanos looming as the real subject.",
        why: "Because saying no to a friend takes more than one word here. Alex has to think out loud, weigh the plan and decline twice, and pensar is the verb that carries every step of that reasoning."
      },
      address: {
        form: "usted",
        who: "Camilo uses an affectionate usted with Alex, the warm “usted de confianza” heard among close friends and family in the interior.",
        why: "In Bogotá and much of the Andean interior, usted is not only formal; between close friends it can be intimate, an “usted de confianza”. Paired with “parce”, it signals closeness, not distance — a nuance that surprises learners taught usted means keeping people at arm's length.",
        ifYouSwitch:
          "Switching to tú with Camilo would not offend, but it might sound oddly neutral where the affectionate usted already does the warmth. Vos would sound paisa, out of place on a bogotano's tongue."
      },
      dialogue: [
        {
          speaker: "Camilo",
          target: "Parce, ¿y si nos vamos ya para Villavicencio? ¿Usted qué piensa?",
          translation: "Parce, what if we take off for Villavicencio right now? What do you think?",
          pronunciation: "PAR-se, i si nos BA-mos ya PA-ra bi-ya-bi-SEN-syo",
          literal: "Buddy, and if we go already to Villavicencio? You what you-think?",
          why: "“¿Qué piensa?” asks for an opinion on the plan. Note the affectionate usted (“piensa”, not “piensas”) sitting right next to the slangy “parce” — closeness and the usted form together, very bogotano."
        },
        {
          speaker: "Alex",
          target: "Uy, déjeme pensarlo. Estoy pensando en esa carretera de noche.",
          translation: "Whoa, let me think about it. I'm thinking about that road at night.",
          pronunciation: "ooy, DE-he-me pen-SAR-lo. es-TOY pen-SAN-do en E-sa ka-rre-TE-ra",
          literal: "Whoa, let-me to-think-it. I-am thinking in that road of night.",
          why: "Two key patterns: “pensarlo” (to think it over) and “pensar EN algo” (to have something on your mind). It is always “pensar en”, never “pensar sobre” for what occupies your thoughts."
        },
        {
          speaker: "Camilo",
          target: "¿Y qué piensa de mi carro? Aguanta el viaje, ¿o no?",
          translation: "And what do you think of my car? It can handle the trip, right?",
          pronunciation: "i ke PYEN-sa de mi KA-rro? a-GWAN-ta el BYA-he",
          literal: "And what you-think of my car? It-withstands the trip, or no?",
          why: "Here it is “pensar DE” — to hold an opinion about something. “Pensar de” asks for a judgment, while “pensar en” is about what fills your mind. The preposition flips the meaning entirely."
        },
        {
          speaker: "Alex",
          target: "Pienso que es muy peligroso. Ya lo pensé bien y no me le mido a esa vía de noche.",
          translation: "I think it's really dangerous. I've thought it over and I'm not up for that road at night.",
          pronunciation: "PYEN-so ke es mooy pe-li-GRO-so. ya lo pen-SE byen",
          literal: "I-think that is very dangerous. Already it I-thought well and not to-me to-it I-measure.",
          why: "“Pensar QUE” introduces a full opinion clause — “pienso que + statement”. “Ya lo pensé” means the decision is made, not still open. “No me le mido” is Colombian for “I'm not up for it”."
        },
        {
          speaker: "Camilo",
          target: "Piénselo bien, parce. No sea tan miedoso, que es una aventura.",
          translation: "Think it over, man. Don't be such a scaredy-cat, it's an adventure.",
          pronunciation: "PYEN-se-lo byen, PAR-se. no SE-a tan mye-DO-so",
          literal: "Think-it well, buddy. Not be so fearful, that is an adventure.",
          why: "“Piénselo” is the usted command of “pensarlo” — think it over. The affectionate usted persists even while pushing back. “No sea miedoso” teases without real offense between friends."
        },
        {
          speaker: "Alex",
          target: "No, parce, ni de riesgos. Le agradezco, pero hoy no lo pienso hacer.",
          translation: "No, man, no way. I appreciate it, but I'm not going to do it today.",
          pronunciation: "no, PAR-se, ni de RYES-gos. le a-gra-DES-ko",
          literal: "No, buddy, not of risks. To-you I-thank, but today not it I-think to-do.",
          why: "“Ni de riesgos” is an emphatic Bogotá “no way, not a chance”, a play on “riesgo”. “No lo pienso hacer” uses “pensar + infinitive” for intention — “I don't intend to do it” — a third distinct pattern."
        }
      ],
      vocabulary: [
        {
          term: "pensar en",
          explanation:
            "“To think about / have on your mind.” Used for whatever occupies your thoughts — a person, a plan, a worry.",
          literal: "to-think in",
          useWhen:
            "Saying what you are dwelling on: “pienso en ti”, “estoy pensando en el viaje.”",
          avoidWhen:
            "Giving a verdict on something; that is “pensar de”. And never “pensar sobre” for what is on your mind.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["pensar en ti", "estar pensando en", "tener en mente", "darle vueltas a algo"],
          example: {
            target: "Estoy pensando en esa carretera.",
            translation: "I'm thinking about that road."
          }
        },
        {
          term: "pensar de",
          explanation:
            "“To think of / have an opinion about.” Asks for a judgment or verdict, not for what is on your mind.",
          literal: "to-think of",
          useWhen:
            "Requesting or giving an opinion: “¿qué piensas de la película?”",
          avoidWhen:
            "For what merely occupies you; that flips to “pensar en”. Mixing them up reverses your meaning.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["¿qué piensas de…?", "opinar de", "¿qué te parece?", "pensar acerca de"],
          example: {
            target: "¿Qué piensas de mi carro?",
            translation: "What do you think of my car?"
          }
        },
        {
          term: "pensar que",
          explanation:
            "“To think that…” Introduces a full clause stating your view or belief.",
          literal: "to-think that",
          useWhen:
            "Stating an opinion in a sentence: “pienso que es peligroso.”",
          avoidWhen:
            "When you need a preposition + noun; there you want “pensar en” or “pensar de” instead.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["creer que", "me parece que", "considero que", "opino que"],
          example: {
            target: "Pienso que es muy peligroso.",
            translation: "I think it's very dangerous."
          }
        },
        {
          term: "piénselo / pensarlo",
          explanation:
            "“Think it over.” The pronoun “lo” stands in for the matter at hand; “piénselo” is the usted command form.",
          literal: "think-it / to-think-it",
          useWhen:
            "Urging someone to reflect, or buying yourself time: “déjeme pensarlo.”",
          avoidWhen:
            "When a firm decision is already made; then “ya lo pensé” fits better.",
          register: "neutral",
          region: "General Colombian; the usted command “piénselo” is common in the interior.",
          related: ["déjeme pensarlo", "lo pienso", "ya lo pensé", "piénsalo bien"],
          example: {
            target: "Piénselo bien antes de decidir.",
            translation: "Think it over carefully before deciding."
          }
        },
        {
          term: "ni de riesgos",
          explanation:
            "An emphatic “no way, not a chance” — a Bogotá play on “riesgo” (risk), close in force to “ni loco”.",
          literal: "not of risks",
          useWhen:
            "Refusing something flatly but playfully among friends.",
          avoidWhen:
            "A formal refusal, where “no, gracias” or “prefiero no” is more appropriate.",
          register: "friendly informal",
          region: "Bogotá / interior slang; “ni loco” and “ni riesgos” are close cousins.",
          related: ["ni loco", "ni de vainas", "ni por el chiras", "para nada"],
          example: {
            target: "¿Manejar de noche? Ni de riesgos.",
            translation: "Drive at night? No way."
          }
        },
        {
          term: "parce",
          explanation:
            "“Mate / buddy.” Short for “parcero”, the all-purpose Colombian word for a friend, now heard nationwide.",
          literal: "buddy",
          useWhen:
            "Addressing a friend or peer warmly and informally.",
          avoidWhen:
            "Speaking to a boss, an elder or a stranger you must show respect to.",
          register: "friendly informal",
          region: "Originally paisa, now general Colombian, especially among the young.",
          related: ["parcero", "llave", "mano", "socio"],
          example: {
            target: "Tranquilo, parce, yo le ayudo.",
            translation: "Don't worry, mate, I'll help you."
          }
        },
        {
          term: "usted de confianza",
          explanation:
            "The affectionate usted used with close friends and family in the interior — intimacy expressed through the formal pronoun.",
          literal: "you(formal) of trust",
          useWhen:
            "Understanding why a close friend or a parent addresses you as usted with warmth.",
          avoidWhen:
            "Assuming usted always means distance; here it signals closeness.",
          register: "friendly informal",
          region: "Andean interior — Bogotá, Boyacá, the coffee region — and Antioquia.",
          related: ["usted cariñoso", "tuteo", "voseo", "usted de respeto"],
          example: {
            target: "Venga, mijo, ¿usted cómo está?",
            translation: "Come here, love, how are you?"
          }
        }
      ],
      note:
        "The whole lesson turns on one rule: the preposition after pensar changes the meaning. “Pensar en” is what is on your mind, “pensar de” asks for a verdict, “pensar que” introduces an opinion, and “pensar + infinitive” states intention. Get the little word wrong and you ask the wrong question. Wrap the reasoning with “ya lo pensé” for a settled decision and the flat, friendly “ni de riesgos”, and you can decline a bad idea without bruising a friendship.",
      culture: [
        {
          label: "Usted can be the intimate form",
          body:
            "Textbooks teach usted as the distant, formal pronoun, so learners are baffled when a bogotana mother says “mijo, ¿usted ya comió?” to her own child. In the Andean interior and Antioquia, usted is often the affectionate default within families and between close friends — the “usted de confianza”. Tú can even sound cooler or more foreign. Register in Colombia is not a simple ladder from usted up to tú; it is regional and emotional at once."
        },
        {
          label: "Saying no takes two rounds",
          body:
            "A single “no” can feel abrupt among friends, so refusals come in stages: hedge, give a reason, then decline outright. Alex thinks out loud, explains the road is dangerous, and only then lands on “ni de riesgos”. Camilo pushes back once — “no sea miedoso” — as a friendly test, not real pressure. Understanding this choreography keeps you from either caving too fast or sounding harsh; the second, firmer no is the one that counts."
        },
        {
          label: "The road to Villavicencio is no joke",
          body:
            "To a visitor, “let's drive to Villavicencio” sounds like a casual road trip. Locals hear the mountain highway down to the Llanos — fog, trucks, landslides and a serious descent, especially at night. Part of Alex's reasoning is geographic knowledge a newcomer lacks. It is a reminder that “thinking a plan through” in Colombia often means knowing which roads, neighborhoods or hours carry real risk, not just weighing the fun of it."
        },
        {
          label: "“Parce” conquered the country",
          body:
            "“Parce” and “parcero” began as Medellín slang but now blanket Colombia, especially among the young, and have become a national identity marker abroad. Using it signals you are relaxed and friendly, one of the crew. It crosses the usted/tú divide freely — you can say “parce” while conjugating in usted, as Camilo does. Sprinkling it in is an easy way to sound current, though it stays firmly informal and out of place at work."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “pienso de ti” to mean “I'm thinking about you”",
          whyItFails:
            "“Pensar de” asks for an opinion, so “pienso de ti” sounds like you are about to judge the person. For having someone on your mind it must be “pienso en ti”. The preposition, not the verb, carries the meaning.",
          sayInstead: "Pienso en ti."
        },
        {
          mistake: "Using “pienso en” to ask for an opinion",
          whyItFails:
            "“¿Qué piensas en la película?” is wrong; “pensar en” is about what occupies you, not a verdict. To ask what someone reckons, you need “¿qué piensas de la película?” with “de”.",
          sayInstead: "¿Qué piensas de la película?"
        },
        {
          mistake: "Saying “pienso de ir” for “I plan to go”",
          whyItFails:
            "For intention, pensar takes a bare infinitive, no preposition: “pienso ir”. Slipping in “de” (“pienso de ir”) breaks the pattern and marks you as translating from another structure.",
          sayInstead: "Pienso ir mañana."
        },
        {
          mistake: "Over-hedging a refusal into vagueness",
          whyItFails:
            "Endlessly softening — “no sé, tal vez, puede ser” — reads as a yes that never arrives, and a friend may keep pushing. After hedging once, a clear “ya lo pensé y no” closes the matter kindly but firmly.",
          sayInstead: "Ya lo pensé y no, pero gracias."
        }
      ],
      variations: [
        {
          form: "Déjeme pensarlo.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Buying time before you commit either way."
        },
        {
          form: "Lo voy a pensar, ¿listo?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Softly deferring the decision to later."
        },
        {
          form: "Ya lo pensé y no.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Closing a settled decision firmly but kindly."
        },
        {
          form: "No, parce, ni de riesgos.",
          register: "friendly informal",
          region: "Bogotá / interior",
          whenToUse: "A flat, playful refusal among friends."
        },
        {
          form: "Prefiero pensarlo con calma, mejor otro día.",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "Declining politely while leaving the door open."
        }
      ],
      prompt: "Alex says “estoy pensando en esa carretera”, then later “pienso que es peligroso.” What does the switch from “pensar en” to “pensar que” do?",
      choices: [
        "Nothing changes at all; “pensar en” and “pensar que” are interchangeable and Colombians pick whichever sounds nicer.",
        "It moves from what's on his mind (“pensar en” + the road) to stating an opinion (“pensar que” + a full clause).",
        "It turns a firm, settled decision back into an open question he is still actively weighing up in his head."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Alex ends with “hoy no lo pienso hacer.” What does “pensar + infinitive” express here?",
          choices: [
            "Intention — “I don't intend to do it today” — since pensar plus a bare infinitive states a plan.",
            "Opinion — “I don't think it's doable today” — since pensar always introduces a personal judgment.",
            "Doubt — “I'm not sure I can do it today” — since pensar with an infinitive softens a firm claim."
          ],
          answer: 0,
          tests: "pensar + infinitive for intention"
        },
        {
          prompt: "Camilo asks “¿qué piensa de mi carro?” Why “de” and not “en”?",
          choices: [
            "Because “pensar en” is only ever correct in the written language, while speech always prefers “pensar de”.",
            "Because after the affectionate usted the verb pensar must always be followed by the preposition “de”.",
            "Because he wants a verdict on the car, and “pensar de” asks for an opinion while “pensar en” does not."
          ],
          answer: 2,
          tests: "pensar de versus pensar en"
        },
        {
          prompt: "Camilo says “¿usted qué piensa?” while also calling Alex “parce.” What does that combination show?",
          choices: [
            "That Camilo cannot decide how close they are and keeps nervously flip-flopping between formal and casual.",
            "That in Bogotá usted can be the affectionate form, so usted plus “parce” signals closeness, not cold distance.",
            "That Camilo is quietly correcting Alex for being too informal by modeling the more respectful usted form."
          ],
          answer: 1,
          tests: "affectionate usted de confianza"
        }
      ]
    },
    en: {
      title: "Convencerse de no seguir un plan arriesgado",
      situation:
        "En un café de Houston, Chris, un amigo cercano, le propone a Alejandra irse ya mismo, a medianoche, a manejar hasta un lago lejano por la autopista “por la aventura”. Alejandra tiene que pensarlo en voz alta, sopesar el riesgo de esa vía de noche y decir que no sin dañar la amistad. Todo gira en torno a “think”: think about, think of, think that, y el rotundo “no way”.",
      setting: {
        who: "Chris es un amigo estadounidense cercano, de los que se emocionan con un plan impulsivo y se tratan de tú a tú con toda confianza.",
        what: "Una propuesta de medianoche de manejar ya mismo hasta un lago lejano, y la negativa cuidadosa de Alejandra.",
        when: "Cerca de la medianoche en un café, cuando la idea suena emocionante y la autopista suena peor cuanto más uno lo piensa.",
        where: "Houston, con la autopista larga y oscura hacia las afueras como el verdadero tema de fondo.",
        why: "Porque decirle que no a un amigo pide más de una palabra. Alejandra tiene que pensar en voz alta, sopesar el plan y negarse dos veces, y en inglés “think” cambia de preposición en cada paso del razonamiento."
      },
      address: {
        form: "mixed",
        who: "Chris y Alejandra se tratan con el mismo “you” y el nombre de pila, como dos amigos cercanos.",
        why: "El inglés no distingue un usted cariñoso de un tú; la confianza la marcan el nombre, el “buddy”, las bromas y el tono, no el pronombre. Ese “usted de confianza” del español se traslada al inglés por el trato relajado, no por una forma verbal distinta.",
        ifYouSwitch:
          "Ponerse muy formal con Chris — “would you be so kind” — sonaría irónico o distante entre amigos. La confianza en inglés se muestra bajando el registro léxico, no cambiando de pronombre, porque solo hay uno."
      },
      dialogue: [
        {
          speaker: "Chris",
          target: "Hey, what if we just drive up to the lake right now? What do you think?",
          translation: "Oye, ¿y si nos vamos ya en carro hasta el lago? ¿Qué piensas?",
          pronunciation: "jei, uat if ui yast draiv ap tu da leik rait nau",
          literal: "Oye, ¿qué si nosotros solo manejamos arriba al lago ahora mismo? ¿Qué piensas?",
          why: "“What do you think?” pide una opinión sobre el plan, igual que “¿qué piensa?”. El “just” aquí no es “solo/justo”: suaviza la propuesta, como diciendo “sencillamente hagámoslo”."
        },
        {
          speaker: "Alejandra",
          target: "Whoa, let me think about it. I'm thinking about that highway at night.",
          translation: "Uy, déjame pensarlo. Estoy pensando en esa autopista de noche.",
          pronunciation: "uou, let mi zink a-BAUT it. aim ZIN-king a-BAUT dat JAI-uei",
          literal: "Uy, déjame pensar sobre ello. Estoy pensando sobre esa autopista de noche.",
          why: "El inglés dice “think about” para lo que ronda la mente, donde el español usa “pensar en”. El calco “think in” no existe; la preposición correcta para esto es siempre “about”."
        },
        {
          speaker: "Chris",
          target: "And what do you think of my car? It can handle the trip, right?",
          translation: "¿Y qué piensas de mi carro? Aguanta el viaje, ¿o no?",
          pronunciation: "and uat du yu zink ov mai kar? it kan JAN-del da trip, rait",
          literal: "¿Y qué piensas de mi carro? Puede manejar el viaje, ¿cierto?",
          why: "Para pedir un juicio, el inglés usa “think of” (o “think about”), como el “pensar de” del español. “Think of” pregunta por una valoración, no por lo que a uno le da vueltas en la cabeza."
        },
        {
          speaker: "Alejandra",
          target: "I think it's really dangerous. I've thought it over, and I'm not up for that road at night.",
          translation: "Pienso que es muy peligroso. Ya lo pensé bien y no me le mido a esa vía de noche.",
          pronunciation: "ai zink its RI-li DEIN-ye-res. aiv zot it OU-ver",
          literal: "Pienso que es muy peligroso. He pensado sobre ello, y no estoy con ánimo para esa vía de noche.",
          why: "“Think that” introduce una opinión completa, como “pensar que”. “I've thought it over” marca decisión tomada, igual que “ya lo pensé”; el pretérito perfecto del inglés hace ese trabajo."
        },
        {
          speaker: "Chris",
          target: "Think it over, come on. Don't be such a scaredy-cat, it's an adventure.",
          translation: "Piénsalo bien, dale. No seas tan miedoso, que es una aventura.",
          pronunciation: "zink it OU-ver, kam on. dount bi sach a SKE-ri-kat",
          literal: "Piénsalo bien, vamos. No seas tan gato-asustado, es una aventura.",
          why: "“Think it over” es “piénsalo”. “Come on” empuja con cariño, como “dale/parce”. “Scaredy-cat” es una burla afectuosa, sin ofensa real entre amigos, como “miedoso”."
        },
        {
          speaker: "Alejandra",
          target: "No, no way. I appreciate it, but I'm not going to do it today.",
          translation: "No, ni de riesgos. Te lo agradezco, pero hoy no lo pienso hacer.",
          pronunciation: "nou, nou UEI. ai a-PRI-shi-eit it, bat aim not GOU-ing tu du it tu-DEI",
          literal: "No, ninguna manera. Lo aprecio, pero no voy a hacerlo hoy.",
          why: "“No way” es el rotundo “ni de riesgos”. Para la intención, el inglés usa “be going to” (“I'm not going to do it”), donde el español puede usar “pensar + infinitivo” (“no lo pienso hacer”)."
        }
      ],
      vocabulary: [
        {
          term: "think about",
          explanation:
            "“Pensar en.” Para lo que ronda la mente — una persona, un plan, una preocupación. El calco “think in” no existe.",
          literal: "pensar sobre/acerca de",
          useWhen:
            "Al decir en qué anda uno pensando: “I'm thinking about the trip.”",
          avoidWhen:
            "Como calco de “pensar en” con “in”; en inglés es siempre “about”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["think of", "have on your mind", "mull over", "dwell on"],
          example: {
            target: "I'm thinking about that highway.",
            translation: "Estoy pensando en esa autopista."
          }
        },
        {
          term: "think of",
          explanation:
            "“Pensar de.” Pide un juicio o una valoración sobre algo, no lo que a uno le da vueltas en la cabeza.",
          literal: "pensar de",
          useWhen:
            "Al pedir o dar una opinión: “what do you think of the movie?”",
          avoidWhen:
            "Para lo que meramente ocupa la mente; eso es “think about”.",
          register: "neutral",
          region: "Inglés universal; “think about” también sirve para pedir opinión.",
          related: ["think about", "what's your take on", "how do you feel about", "your opinion of"],
          example: {
            target: "What do you think of my car?",
            translation: "¿Qué piensas de mi carro?"
          }
        },
        {
          term: "think that",
          explanation:
            "“Pensar que.” Introduce una cláusula completa con la opinión o creencia de uno.",
          literal: "pensar que",
          useWhen:
            "Al enunciar una opinión en una frase: “I think that it's dangerous.”",
          avoidWhen:
            "Cuando hace falta preposición + sustantivo; ahí van “think about” o “think of”.",
          register: "neutral",
          region: "Inglés universal; el “that” a menudo se omite: “I think it's dangerous.”",
          related: ["believe that", "feel that", "reckon", "I'd say"],
          example: {
            target: "I think it's really dangerous.",
            translation: "Pienso que es muy peligroso."
          }
        },
        {
          term: "think it over",
          explanation:
            "“Piénsalo / pensarlo.” Reflexionar con calma sobre un asunto antes de decidir.",
          literal: "pensarlo bien",
          useWhen:
            "Al pedir que alguien reflexione, o al ganar tiempo: “let me think it over.”",
          avoidWhen:
            "Cuando la decisión ya está tomada; ahí encaja “I've thought it over.”",
          register: "neutral",
          region: "Inglés universal; “think it through” resalta el razonamiento completo.",
          related: ["think it through", "sleep on it", "mull it over", "give it some thought"],
          example: {
            target: "Think it over before you decide.",
            translation: "Piénsalo bien antes de decidir."
          }
        },
        {
          term: "no way",
          explanation:
            "“Ni de riesgos / ni loco.” Una negativa rotunda pero coloquial, con energía y algo de humor.",
          literal: "ninguna manera",
          useWhen:
            "Al rechazar algo de plano entre amigos.",
          avoidWhen:
            "Una negativa formal, donde va “no, thank you” o “I'd rather not.”",
          register: "friendly informal",
          region: "Inglés universal; “no chance” y “not a chance” son primos cercanos.",
          related: ["no chance", "not a chance", "forget it", "absolutely not"],
          example: {
            target: "Drive at night? No way.",
            translation: "¿Manejar de noche? Ni de riesgos."
          }
        },
        {
          term: "buddy / mate",
          explanation:
            "“Parce / parcero.” El término genérico para un amigo; “buddy” en Norteamérica, “mate” en el Reino Unido y Australia.",
          literal: "amigo",
          useWhen:
            "Al dirigirse a un amigo o par con confianza.",
          avoidWhen:
            "Con un jefe, un mayor o un desconocido a quien se debe respeto.",
          register: "friendly informal",
          region: "“Buddy” y “man” en Norteamérica; “mate” en el Reino Unido y Australia.",
          related: ["man", "dude", "pal", "bro"],
          example: {
            target: "Don't worry, buddy, I'll help you.",
            translation: "Tranquilo, parce, yo te ayudo."
          }
        },
        {
          term: "up for it",
          explanation:
            "“Estar con ánimo de / medírsele a algo.” Tener ganas o disposición para un plan.",
          literal: "arriba para ello",
          useWhen:
            "Al decir si uno se anima o no: “I'm not up for that.”",
          avoidWhen:
            "En registro muy formal, donde va “I'd rather not” o “I'm not inclined to.”",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["in the mood for", "keen on", "down for it", "not feeling it"],
          example: {
            target: "I'm not up for that road at night.",
            translation: "No me le mido a esa vía de noche."
          }
        }
      ],
      note:
        "Toda la lección gira sobre una regla: en inglés la preposición después de “think” cambia el sentido. “Think about” es lo que ronda la mente (pensar en), “think of” pide una valoración (pensar de), “think that” introduce una opinión (pensar que), y para la intención el inglés cambia de verbo a “be going to”. El calco “think in” no existe. Cierre el razonamiento con “I've thought it over” para una decisión tomada y el rotundo “no way”, y podrá negarse sin dañar la amistad.",
      culture: [
        {
          label: "El inglés no tiene usted, pero marca la distancia",
          body:
            "El hispanohablante busca en inglés un equivalente del usted cariñoso y no lo encuentra: solo hay “you”. Pero eso no significa que el inglés no tenga registro. La distancia y la cercanía se marcan con las palabras — “buddy” frente a “sir”, “hey” frente a “good evening”, el nombre de pila frente al apellido. Entender que la formalidad vive en el léxico, y no en el pronombre, evita sonar siempre igual de neutro con el jefe y con un amigo del alma."
        },
        {
          label: "Negarse también toma dos rondas",
          body:
            "Igual que en español, en inglés un “no” pelado entre amigos puede sonar seco, así que la negativa se escalona: se duda, se da una razón y recién se cierra. Alejandra piensa en voz alta, explica que la vía es peligrosa y solo entonces suelta “no way”. Chris insiste una vez — “don't be such a scaredy-cat” — como prueba amistosa, no como presión real. Reconocer esa coreografía evita ceder demasiado rápido o sonar cortante."
        },
        {
          label: "La autopista de noche no es un paseo",
          body:
            "Para el amigo la idea suena a aventura; para quien conoce la vía, es una autopista larga y oscura, con camiones, niebla y cansancio, sobre todo de madrugada. Parte del razonamiento de Alejandra es un saber local que un recién llegado no tiene. Es un recordatorio de que “pensar bien un plan” muchas veces significa conocer qué rutas, barrios u horas cargan un riesgo real, y no solo sopesar lo divertido que suena en el momento."
        },
        {
          label: "El “no” tiene tamaños",
          body:
            "El inglés gradúa el rechazo con precisión: “I'd rather not” es suave, “I'm not up for it” es tibio, “no way” y “absolutely not” son rotundos. Elegir el tamaño correcto importa: soltar “absolutely not” ante una invitación inocente suena agresivo, y un “I'd rather not” ante algo peligroso suena tibio. El hispanohablante, acostumbrado a matizar con la entonación, gana claridad aprendiendo a escoger la frase según la fuerza que quiere darle al no."
        }
      ],
      pitfalls: [
        {
          mistake: "“I'm thinking in you.” to mean “I'm thinking about you”",
          whyItFails:
            "Es el calco directo de “pensar en” con “in”. El inglés no usa “think in”; para lo que ronda la mente es “think about” o “think of”. “Thinking in you” no significa nada para el oído nativo.",
          sayInstead: "I'm thinking about you. / I'm thinking of you."
        },
        {
          mistake: "“Actually” to mean “right now / currently”",
          whyItFails:
            "El hispanohablante calca “actualmente” como “actually”, pero “actually” significa “en realidad / de hecho”, no “en este momento”. Para lo actual el inglés usa “currently” o “right now”. El falso amigo cambia el sentido de la frase.",
          sayInstead: "I'm currently learning English. / Right now I'm studying."
        },
        {
          mistake: "“I have 30 years.” to give your age",
          whyItFails:
            "El español usa “tener” para la edad (“tengo 30 años”), y el hispanohablante lo calca con “have”. El inglés usa “to be”: “I'm 30 years old.” “I have 30 years” suena a una condena o a una antigüedad laboral.",
          sayInstead: "I'm 30 (years old)."
        },
        {
          mistake: "“I'm not agree.” to mean “I don't agree”",
          whyItFails:
            "El español dice “estoy de acuerdo” con el verbo “estar”, así que el hispanohablante calca “I'm agree”. Pero “agree” ya es el verbo: se dice “I agree” / “I don't agree”, sin el “to be” delante.",
          sayInstead: "I don't agree. / I disagree."
        }
      ],
      variations: [
        {
          form: "Let me think about it.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Al ganar tiempo antes de comprometerse."
        },
        {
          form: "I'll think it over, okay?",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Al aplazar la decisión con suavidad."
        },
        {
          form: "I've thought about it, and no.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Al cerrar una decisión tomada, con firmeza y amabilidad."
        },
        {
          form: "No, buddy, no way.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Una negativa rotunda y juguetona entre amigos."
        },
        {
          form: "I'd rather think it through, maybe another day.",
          register: "polite formal",
          region: "Inglés universal",
          whenToUse: "Al declinar con cortesía dejando la puerta abierta."
        }
      ],
      prompt: "Alejandra dice “I'm thinking about that highway” y luego “I think it's dangerous.” ¿Qué hace el cambio de “think about” a “think that”?",
      choices: [
        "Nada cambia; “think about” y “think that” son intercambiables y uno elige el que suene mejor en la frase.",
        "Pasa de lo que ronda su mente (“think about” + la autopista) a enunciar una opinión (“think that” + una cláusula).",
        "Convierte una decisión firme y ya tomada de nuevo en una pregunta abierta que ella todavía está sopesando."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Alejandra dice “I'm not going to do it today.” En español eso se puede decir con “pensar”. ¿Cómo?",
          choices: [
            "Con “hoy no lo pienso hacer”, porque “pensar + infinitivo” expresa la intención de hacer algo.",
            "Con “hoy no pienso en hacerlo”, porque “pensar en” es la forma fija de negar cualquier intención.",
            "Con “hoy no pienso de hacerlo”, porque “pensar de” es lo que se usa para hablar de planes futuros."
          ],
          answer: 0,
          tests: "pensar + infinitivo para la intención"
        },
        {
          prompt: "Chris pregunta “what do you think of my car?” ¿Por qué “of” y no “about”?",
          choices: [
            "Porque “think about” solo es correcto por escrito, mientras que al hablar siempre se prefiere “think of”.",
            "Porque después de un amigo cercano el verbo “think” tiene que ir siempre seguido de la preposición “of”.",
            "Porque pide una valoración del carro, y “think of” pregunta por una opinión, no por lo que le ronda la mente."
          ],
          answer: 2,
          tests: "think of frente a think about"
        },
        {
          prompt: "¿Por qué se dice “I'm 30 years old” y no “I have 30 years”?",
          choices: [
            "Porque “I have 30 years” es un error que ningún hablante nativo llegaría jamás a entender del todo.",
            "Porque el inglés marca la edad con el verbo “to be”, mientras que el español la marca con “tener”.",
            "Porque “years old” solo se puede usar por escrito y en el habla se dice simplemente “I have 30”."
          ],
          answer: 1,
          tests: "to be frente a tener para la edad"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/08-foundation-conversation.js");
