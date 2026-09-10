/*
 * Lesson block: foundation / asking — questions, answers and needs.
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
 * The two directions are mirrors: same number of dialogue turns, same number of
 * vocabulary entries, same number of culture notes, pitfalls, variations and
 * practice questions, and the same optional slots filled on the same rows. That
 * is enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "stopping-a-passerby-to-ask-the-way",
    level: "Starter · Getting around",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "health-and-body",
    register: "courteous",
    pathways: ["foundation"],
    verb: "preguntar",
    review: "pending",
    es: {
      title: "Preguntarle el camino a un desconocido",
      situation:
        "Alex está perdido en Bogotá buscando el centro de salud y para a una señora en la calle para preguntarle cómo llegar. Tiene que pedir permiso para preguntar, hacer la pregunta con claridad y agradecer — todo en un par de minutos, sin sonar brusco. En el camino aprende que “preguntar” no es lo mismo que “pedir”.",
      setting: {
        who: "The passerby is Doña Luz, a woman in her sixties who lives nearby and is in no hurry. Alex has been walking in circles for ten minutes with a dying phone battery.",
        what: "A quick street exchange in which Alex asks the way to the health center and gets both directions and a small lesson in courtesy.",
        when: "Mid-morning on a weekday, when the sidewalks are busy enough that stopping a stranger feels normal.",
        where: "Bogotá, a residential stretch of Teusaquillo where the numbered streets confuse newcomers and locals are used to being asked.",
        why: "Because Alex has an appointment and no signal, and because how he opens the question decides whether the stranger warms to him or just points vaguely and walks on."
      },
      address: {
        form: "usted",
        who: "Alex uses usted with Doña Luz, and she uses usted back — the normal footing between two strangers on the street, especially with someone older.",
        why: "In Bogotá usted is the safe default with anyone you don't know, and with an older person it is close to obligatory. It is respectful without being stiff, and it keeps a courteous distance while you ask a favour of a stranger's time.",
        ifYouSwitch:
          "Jumping to tú with an older stranger would sound presumptuous, as if Alex had decided they were already friends. Vos is not a Bogotá form and would just sound out of place here rather than familiar."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Disculpe, señora. ¿Le puedo preguntar una cosa?",
          translation: "Excuse me, ma'am. May I ask you something?",
          pronunciation: "dees-KOOL-peh, seh-NYO-ra. le PWEH-doh preh-goon-TAR OO-na KO-sa",
          literal: "Excuse(usted), lady. To-you I-can to-ask a thing?",
          why: "“¿Le puedo preguntar?” is the polite runway Colombians lay down before the actual question. The “le” is the usted object pronoun, matching the respectful register you use with a stranger. Opening with permission softens the intrusion and almost guarantees a warm answer."
        },
        {
          speaker: "Doña Luz",
          target: "Claro que sí, con mucho gusto. Dígame.",
          translation: "Of course, gladly. Tell me.",
          pronunciation: "KLA-roh ke see, kon MOO-cho GOOS-toh. DEE-ga-me",
          literal: "Clear that yes, with much taste. Tell-me(usted).",
          why: "“Dígame” — literally “tell me” — is the standard, warm Colombian invitation to go ahead. It is the usted imperative of decir, and it signals she is listening and glad to help, not that she is impatient to be rid of you."
        },
        {
          speaker: "Alex",
          target: "¿Sabe cómo llego al centro de salud? Estoy un poco perdido.",
          translation: "Do you know how I get to the health center? I'm a bit lost.",
          pronunciation: "SA-be KO-mo YEH-go al SEN-tro de sa-LOOD? es-TOY oon PO-ko per-DEE-do",
          literal: "You-know(usted) how I-arrive to-the center of health? I-am a little lost.",
          why: "Notice Alex is asking for information — a question — so the verb underneath is “preguntar”, even though the sentence itself leans on “saber”. If he wanted a thing or a favour he would switch to “pedir”. That split between asking and asking-for is the heart of this lesson."
        },
        {
          speaker: "Doña Luz",
          target: "Sí. Siga derecho dos cuadras y, al entrar, pregunte por la recepción.",
          translation: "Yes. Go straight two blocks and, once inside, ask for reception.",
          pronunciation: "see. SEE-ga deh-REH-cho dos KWA-dras i, al en-TRAR, preh-GOON-te por la reh-sep-SYON",
          literal: "Yes. Continue(usted) straight two blocks and, on entering, ask(usted) for the reception.",
          why: "“Pregunte por la recepción” shows a third sense: “preguntar por” means to ask for or after — a place or a person you want to locate. She is not requesting reception, she is telling him to inquire where it is. English blurs all three senses into one flat “ask”."
        },
        {
          speaker: "Alex",
          target: "Perfecto. ¿Le puedo preguntar una última cosa? ¿Queda lejos?",
          translation: "Perfect. May I ask you one last thing? Is it far?",
          pronunciation: "per-FEK-toh. le PWEH-doh preh-goon-TAR OO-na OOL-tee-ma KO-sa? KEH-da LEH-hos",
          literal: "Perfect. To-you I-can to-ask a last thing? It-stays far?",
          why: "Alex reuses the permission frame to stack a second question politely. Colombians rarely fire off questions bare; wrapping each one in “¿le puedo preguntar?” keeps the whole exchange courteous, and in usted it signals he is not taking her patience for granted."
        },
        {
          speaker: "Doña Luz",
          target: "No, para nada. Pregunte tranquilo, que para eso estamos.",
          translation: "No, not at all. Ask away — that's what we're here for.",
          pronunciation: "no, PA-ra NA-da. preh-GOON-te tran-KEE-lo, ke PA-ra E-so es-TA-mos",
          literal: "No, for nothing. Ask(usted) calm, that for that we-are.",
          why: "“Pregunte tranquilo” — ask calmly, ask freely — is a gentle Colombian reassurance built on the usted imperative of preguntar. “Para eso estamos” (that's what we're here for) is a warm formula that makes helping a lost stranger feel like the most normal thing in the world."
        }
      ],
      vocabulary: [
        {
          term: "preguntar",
          explanation:
            "To ask in the sense of seeking information — to put a question. It pairs with the thing you want to know, not the thing you want to get, which is the whole distinction English hides.",
          literal: "to ask (a question)",
          useWhen:
            "Any time you want facts, directions, a name or the time: “¿puedo preguntar…?”, “pregúntale la hora”, “le pregunté cuánto costaba”.",
          avoidWhen:
            "When you want someone to give or do something for you — that is “pedir”, not “preguntar”. A favour is asked for, so it takes “pedir”.",
          register: "neutral",
          region: "Universal Spanish; the split with “pedir” is one of the first things a learner has to internalise.",
          related: ["pedir", "preguntar por", "cuestionar", "hacer una pregunta"],
          example: {
            target: "¿Le puedo preguntar una cosa?",
            translation: "May I ask you something?"
          }
        },
        {
          term: "pedir",
          explanation:
            "To ask FOR — to request a thing, a favour or an action. This is the verb English buries inside “ask” whenever a request, and not a question, is meant.",
          literal: "to ask for / to request",
          useWhen:
            "Ordering food, requesting a favour, asking for the bill: “pedir un café”, “pedir ayuda”, “te quiero pedir un favor”.",
          avoidWhen:
            "When you only want information; asking a question back is “preguntar”. If nothing changes hands, you are not pedir-ing.",
          register: "neutral",
          region: "Universal Spanish; in Colombia the softened “¿me regala…?” often stands in for a blunt “pedir”.",
          related: ["preguntar", "solicitar", "rogar", "encargar"],
          example: {
            target: "Voy a pedir un café.",
            translation: "I'm going to ask for a coffee."
          }
        },
        {
          term: "preguntar por",
          explanation:
            "To ask after or ask for — to inquire about a person or a place. “Preguntar por Ana” means asking how she is or where she is, not putting a question to Ana herself.",
          literal: "to ask for / about",
          useWhen:
            "Inquiring about someone's health or whereabouts, or asking for a desk or person at a building: “preguntó por ti”, “pregunte por la recepción”.",
          avoidWhen:
            "When you mean to summon the person physically; that leans more on “llamar” or “buscar” than on “preguntar por”.",
          register: "neutral",
          region: "Universal Spanish; asking after each other's families is a staple of Colombian courtesy.",
          related: ["preguntar", "buscar", "interesarse por", "saludar"],
          example: {
            target: "Pregunte por la recepción.",
            translation: "Ask for reception."
          }
        },
        {
          term: "¿le puedo preguntar?",
          explanation:
            "The polite frame that asks permission before the real question. Extremely common in Colombia, where firing a bare question at a stranger can feel abrupt.",
          literal: "may I ask you?",
          useWhen:
            "Opening a question to a stranger or anyone you address as usted: “¿le puedo preguntar una cosa?”.",
          avoidWhen:
            "Among close friends, where it can sound overly formal; a plain “oye, ¿…?” fits a peer far better.",
          register: "polite formal",
          region: "Universal Spanish; the usted “le” marks the careful, courteous Bogotá style.",
          related: ["¿puedo preguntarle?", "¿me permite una pregunta?", "¿le molesto con algo?", "disculpe"],
          example: {
            target: "¿Le puedo preguntar una cosa?",
            translation: "May I ask you something?"
          }
        },
        {
          term: "¿me puede decir…?",
          explanation:
            "A softened way to ask for information using “decir” — “can you tell me…?”. It sidesteps a blunt question and sounds courteous and warm.",
          literal: "can you tell me…?",
          useWhen:
            "Asking directions or facts politely: “¿me puede decir dónde queda…?”, “¿me puede decir la hora?”.",
          avoidWhen:
            "For requesting objects or favours; a thing you want handed over stays “pedir”, not “decir”.",
          register: "polite formal",
          region: "Universal Spanish; pairs naturally with the Bogotá usted.",
          related: ["¿me puede indicar?", "¿sabe usted…?", "¿me colabora con…?", "¿me ayuda?"],
          example: {
            target: "¿Me puede decir dónde queda el baño?",
            translation: "Can you tell me where the bathroom is?"
          }
        },
        {
          term: "hacer una pregunta",
          explanation:
            "To ask a question, built on the noun “pregunta”. A handy alternative when you want to flag that a question is coming before you launch it.",
          literal: "to make a question",
          useWhen:
            "Announcing a question formally: “tengo una pregunta”, “¿puedo hacerle una pregunta?”.",
          avoidWhen:
            "In fast, casual talk, where it is slightly heavier than a plain “preguntar” and can sound stiff.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["preguntar", "tener una duda", "consultar", "plantear"],
          example: {
            target: "¿Puedo hacerle una pregunta?",
            translation: "May I ask you a question?"
          }
        },
        {
          term: "a la orden",
          explanation:
            "The all-purpose Colombian courtesy — “at your service”, “you're welcome” or “can I help you?” depending on tone. Vendors and helpers use it constantly.",
          literal: "at the order",
          useWhen:
            "As a warm reply to thanks, or as a shop greeting that invites your question: “—Gracias. —A la orden.”.",
          avoidWhen:
            "In very formal writing, where it is too colloquial and a plain “con gusto” reads better.",
          register: "friendly informal",
          region: "Strongly Colombian, heard nationwide from shop counters to building desks.",
          related: ["con gusto", "para servirle", "siga", "dígame"],
          example: {
            target: "—Muchas gracias. —A la orden.",
            translation: "—Thank you very much. —At your service."
          }
        }
      ],
      note:
        "The trap: English “ask” is two Spanish verbs. “Preguntar” asks a question — you want information back. “Pedir” asks FOR something — you want a thing or a favour. A third sense, “preguntar por”, means to ask after a person or for a place. Get the pair wrong and “te quiero preguntar un favor” sounds off, because favours are always “pedir”. When in doubt: a question is preguntar, a request is pedir.",
      culture: [
        {
          label: "Ask permission before you ask",
          body:
            "Colombians, and Bogotanos especially, tend to cushion a question with a little permission first: “¿le puedo preguntar?”, “¿me regala un segundo?”, “disculpe la molestia”. Firing a bare question at a stranger — “where's the bank?” — can feel abrupt, even a touch rude. The frame costs two seconds and instantly reads as respectful. Master one opener and you will sound far more local than a grammatically perfect but blunt question ever could."
        },
        {
          label: "Preguntar, pedir and the favour trap",
          body:
            "The single most common slip is using “preguntar” for a request. You do not “preguntar un favor” — a favour is something you ask FOR, so it is “pedir un favor”. “Preguntar” is only for questions, for information you want back. If a thing or an action changes hands, you reach for “pedir”. Keep that line clear and half of your “ask” mistakes simply vanish, because English never once made you choose between the two."
        },
        {
          label: "“Preguntar por” means asking after you",
          body:
            "When a Colombian says “preguntó por ti”, nobody quizzed you — someone asked how you are or where you had got to. “Preguntar por alguien” is a small kindness woven into daily talk: at a building you “pregunta por” the person or desk you need, and among friends asking after each other's mothers is expected courtesy. Skipping it can read as cold, so a quick “¿y su mamá, cómo sigue?” goes a surprisingly long way."
        },
        {
          label: "Directions are a social act",
          body:
            "Ask the way in a Colombian city and you may get far more than an answer: a walk to the corner, a phone checked, a “dígame” and a “para eso estamos”. Being lost is treated as a normal, fixable thing, and helping is part of the courtesy code. Do not be surprised if the person walks you half the way there. The right move is warmth back — “muy amable”, “que Dios le pague” — not a rushed thanks and a quick escape."
        }
      ],
      pitfalls: [
        {
          mistake: "Te quiero preguntar un favor.",
          whyItFails:
            "A favour is something you ask FOR, not a question you put, so Spanish uses “pedir”. “Preguntar un favor” collapses the very distinction Spanish keeps carefully separate, and it sounds distinctly learner-ish to any Colombian ear.",
          sayInstead: "Te quiero pedir un favor."
        },
        {
          mistake: "¿Puedo preguntar un café?",
          whyItFails:
            "Ordering a coffee is a request for a thing — pure “pedir”. “Preguntar un café” would mean interrogating the coffee itself. It is the same ask/ask-for split, now playing out at the café counter.",
          sayInstead: "¿Puedo pedir un café?"
        },
        {
          mistake: "Pregunté a María. (meaning: I asked after María)",
          whyItFails:
            "Without “por”, “pregunté a María” means you put a question TO María. To ask AFTER her — about her health or her whereabouts — you need “preguntar por María”. The little preposition flips the meaning completely.",
          sayInstead: "Pregunté por María."
        },
        {
          mistake: "Quiero hacer una pregunta para ti.",
          whyItFails:
            "“Para ti” reads as “a question for you to keep”. A question is put TO someone with an indirect object: “hacerte una pregunta”. The calqued English “for you” lands in the wrong place and misfires.",
          sayInstead: "Quiero hacerte una pregunta."
        }
      ],
      variations: [
        {
          form: "¿Le puedo preguntar una cosa?",
          register: "polite formal",
          region: "Bogotá and the Andean interior",
          whenToUse: "The safe, respectful opener for a stranger you address as usted."
        },
        {
          form: "¿Te puedo preguntar algo?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The same move with tú, for a peer or someone younger than you."
        },
        {
          form: "¿Me regala una preguntica?",
          register: "friendly informal",
          region: "General Colombian (diminutive)",
          whenToUse: "Warm and disarming; the diminutive “-ica” softens the imposition to almost nothing."
        },
        {
          form: "¿Me puede indicar cómo llego?",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "Specifically for directions; “indicar” is crisp, clear and courteous."
        },
        {
          form: "Disculpe, ¿sabe usted dónde queda…?",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "Opening with “disculpe” plus “sabe usted” for maximum politeness with a passerby."
        }
      ],
      prompt: "Alex wants to order a coffee at the counter. Which verb does he actually need?",
      choices: [
        "“Pedir”, because ordering a coffee is asking FOR a thing — it is a request, not a question at all.",
        "“Preguntar”, because any time you open your mouth to ask for something, Spanish reaches for this one verb.",
        "“Preguntar por”, because he is really asking about where the coffee comes from and how it gets made."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Doña Luz tells Alex “pregunte por la recepción”. What is she telling him to do?",
          choices: [
            "Put his question directly to a member of staff who happens to be named Recepción at the door.",
            "Insist on being taken to the reception desk at once, since he is clearly running late for care.",
            "Go and ask for the reception desk — inquire where it is — rather than request anything from anyone."
          ],
          answer: 2,
          tests: "“preguntar por” as ask for / after a place"
        },
        {
          prompt: "Alex wants to say “I want to ask you (tú) a favour.” Which sentence is correct?",
          choices: [
            "Te quiero preguntar un favor.",
            "Te quiero pedir un favor.",
            "Te quiero preguntar por un favor."
          ],
          answer: 1,
          tests: "favours take pedir, never preguntar"
        },
        {
          prompt: "What is the difference between “pregunté a Marta” and “pregunté por Marta”?",
          choices: [
            "The first puts a question to Marta; the second asks after Marta — her health or her whereabouts.",
            "They mean exactly the same thing; “por” is just a filler Colombians add on for a little extra warmth.",
            "The first is present tense and the second is past tense, so the only real difference is the timing."
          ],
          answer: 0,
          tests: "preguntar a (put a question to) vs preguntar por (ask after)"
        },
        {
          prompt: "You want to open a question to a stranger you address as usted. Which fits best?",
          choices: [
            "Oye, ¿dónde queda el banco?",
            "Disculpe, ¿le puedo preguntar una cosa?",
            "¿Me pregunta usted dónde queda el banco?"
          ],
          answer: 1,
          tests: "the polite usted permission frame for a question"
        }
      ]
    },
    en: {
      title: "Preguntarle el camino a un desconocido",
      situation:
        "Alejandra está perdida en Houston buscando el centro de salud y para a una persona en la calle para preguntarle cómo llegar. Usted tiene que pedir permiso para preguntar, hacer la pregunta con claridad y agradecer — todo en un par de minutos, sin sonar brusca. En el camino aprende que el inglés mete todo en un solo “ask”.",
      setting: {
        who: "La persona en la calle es un señor de unos cincuenta años que no lleva prisa. Alejandra lleva diez minutos dando vueltas con el celular casi sin batería.",
        what: "Un intercambio rápido en la calle en el que Alejandra pregunta por el centro de salud y recibe indicaciones y, de paso, una lección de cortesía.",
        when: "Media mañana entre semana, cuando hay suficiente gente en la acera como para que parar a un desconocido se sienta normal.",
        where: "Houston, una zona residencial donde las calles numeradas confunden a los recién llegados y la gente está acostumbrada a que le pregunten.",
        why: "Porque Alejandra tiene una cita y se quedó sin señal, y porque la forma en que abre la pregunta decide si el desconocido se muestra cálido o simplemente señala con vaguedad y sigue su camino."
      },
      address: {
        form: "mixed",
        who: "El inglés no distingue tú de usted: “you” sirve para todos. Alejandra y el desconocido usan el mismo “you”, y el respeto se nota en otra parte.",
        why: "La cortesía en inglés no vive en el pronombre sino en el verbo y en los suavizadores: “could I”, “would you mind”, “excuse me”, “please”. Por eso “you” vale igual para un desconocido mayor que para un amigo.",
        ifYouSwitch:
          "No hay un pronombre más formal al que “subir”: se sube de registro cambiando el modal y añadiendo “please” o “sorry to bother you”, no cambiando el “you”."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Excuse me, could I ask you something?",
          translation: "Disculpe, ¿le puedo preguntar algo?",
          pronunciation: "eks-KIÚS mi, kud ai ask iú SÓM-zin",
          literal: "Disculpe, ¿podría yo preguntarle algo?",
          why: "“Could I ask you something?” es el equivalente cortés de “¿le puedo preguntar?”. En inglés la cortesía vive en el modal “could”, no en el pronombre. “Ask” aquí es preguntar —buscar información—, no pedir una cosa."
        },
        {
          speaker: "Passerby",
          target: "Sure, go ahead!",
          translation: "Claro, dígame.",
          pronunciation: "shúr, góu a-JED",
          literal: "Claro, siga adelante.",
          why: "“Go ahead” es “dígame / siga”: la invitación a proceder. “Sure” confirma sin ceremonia; el inglés informal norteamericano suele acortar la cortesía a una sola palabra sin sonar seco."
        },
        {
          speaker: "Alejandra",
          target: "Do you know how I get to the health center? I'm a little lost.",
          translation: "¿Sabe cómo llego al centro de salud? Estoy un poco perdida.",
          pronunciation: "du iú nóu jáo ai get tu de JELZ SÉN-ter? aim a LÍ-rel lost",
          literal: "¿Sabe usted cómo yo llego al centro de salud? Estoy un poco perdida.",
          why: "Fíjate que “ask” no aparece aquí: la pregunta va con “do you know how…?”. Aun así, el acto es preguntar. Cuando quieras un objeto o un favor, cambia a “ask for”, no a “ask” a secas."
        },
        {
          speaker: "Passerby",
          target: "Yeah, go straight two blocks, then ask for the front desk inside.",
          translation: "Sí, siga derecho dos cuadras y, al entrar, pregunte por la recepción.",
          pronunciation: "iea, góu stréit tchu bloks, den ask for de front desk in-SÁID",
          literal: "Sí, vaya derecho dos cuadras, luego pregunte por el mostrador de adelante adentro.",
          why: "“Ask for the front desk” es “preguntar por la recepción”: en inglés, inquirir por un lugar o una persona lleva “for” (o “about”). Sin “for”, “ask the front desk” significaría hacerle una pregunta al mostrador."
        },
        {
          speaker: "Alejandra",
          target: "Perfect. Could I ask one more thing? Is it far?",
          translation: "Perfecto. ¿Le puedo preguntar una cosa más? ¿Queda lejos?",
          pronunciation: "PÉR-fekt. kud ai ask uán mor zing? is it far",
          literal: "Perfecto. ¿Podría preguntar una cosa más? ¿Está lejos?",
          why: "Alejandra repite el marco “could I ask…?” para encadenar otra pregunta con cortesía. En inglés, repetir el modal cortés es lo que mantiene el tono amable, igual que el “¿le puedo…?” hace en español."
        },
        {
          speaker: "Passerby",
          target: "Not at all — ask away. Happy to help.",
          translation: "Para nada, pregunte tranquila. Con gusto.",
          pronunciation: "not at ol — ask a-UÉI. JÁ-pi tu jelp",
          literal: "Para nada — pregunte sin parar. Feliz de ayudar.",
          why: "“Ask away” es “pregunte con confianza / sin pena”: una invitación cálida a seguir preguntando. “Happy to help” cierra como nuestro “con gusto” o “para eso estamos”."
        }
      ],
      vocabulary: [
        {
          term: "ask a question",
          explanation:
            "Preguntar, buscar información. En inglés la pregunta se “ask”, nunca se “make”: “make a question” es un calco de “hacer una pregunta” y suena mal.",
          literal: "hacer una pregunta",
          useWhen:
            "Cuando buscas información: “Can I ask a question?”, “She asked me the time”, “ask me anything”.",
          avoidWhen:
            "Cuando pides una cosa o un favor; eso es “ask for”, no “ask” a secas.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["ask", "have a question", "wonder", "question"],
          example: {
            target: "Can I ask you a question?",
            translation: "¿Le puedo hacer una pregunta?"
          }
        },
        {
          term: "ask for",
          explanation:
            "Pedir: solicitar una cosa, un favor o una acción. Es el “ask” que lleva “for” cuando algo cambia de manos.",
          literal: "pedir (algo)",
          useWhen:
            "Al pedir el menú, la cuenta o ayuda: “ask for the bill”, “ask for help”, “he asked for a refund”.",
          avoidWhen:
            "Cuando sólo buscas información; ahí va “ask a question”, sin “for”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["ask", "request", "order", "ask for help"],
          example: {
            target: "She asked for the bill.",
            translation: "Ella pidió la cuenta."
          }
        },
        {
          term: "ask about / after",
          explanation:
            "Preguntar por: interesarse por un tema o una persona. “Ask about” es por un tema; “ask after” es por la salud o el bienestar de alguien.",
          literal: "preguntar por / acerca de",
          useWhen:
            "“He asked about the job”, “she asked after your mom”, “they asked about the price”.",
          avoidWhen:
            "Para pedir la presencia de alguien en una recepción; eso es “ask for someone”.",
          register: "neutral",
          region: "Inglés universal; “ask after” es algo más británico, pero se entiende en todas partes.",
          related: ["ask about", "ask after", "inquire", "check on"],
          example: {
            target: "She asked after your mother.",
            translation: "Preguntó por tu mamá."
          }
        },
        {
          term: "ask for someone",
          explanation:
            "Preguntar por alguien en el sentido de solicitar hablar con esa persona — en una recepción o por teléfono.",
          literal: "preguntar por (alguien)",
          useWhen:
            "Al llegar a un edificio o llamar: “Ask for Maria at the desk”, “I'm here to see Dr. Lee — who do I ask for?”.",
          avoidWhen:
            "Si sólo te interesa su salud o su vida; eso es “ask after someone”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["ask for", "at the desk", "ask to speak to", "request"],
          example: {
            target: "Ask for reception inside.",
            translation: "Adentro, pregunte por la recepción."
          }
        },
        {
          term: "Could I ask…?",
          explanation:
            "El marco cortés para abrir una pregunta, como “¿le puedo preguntar?”. Toda la cortesía está cargada en el modal “could”.",
          literal: "¿podría preguntar…?",
          useWhen:
            "Con desconocidos o en trato formal: “Could I ask you something?”, “Could I ask a quick question?”.",
          avoidWhen:
            "Entre amigos, donde suena algo rígido; mejor un “hey, can I ask you…?”.",
          register: "polite",
          region: "Inglés universal.",
          related: ["can I ask", "may I ask", "do you mind if I ask", "quick question"],
          example: {
            target: "Could I ask you something?",
            translation: "¿Le puedo preguntar algo?"
          }
        },
        {
          term: "I have a question",
          explanation:
            "“Tengo una pregunta.” La forma natural de anunciar una duda. Ojo: en inglés es “question”, no “doubt”, para una pregunta normal.",
          literal: "tengo una pregunta",
          useWhen:
            "Para señalar que viene una pregunta: “Quick question — where's the exit?”, “I have one question”.",
          avoidWhen:
            "“I have a doubt” suena a que desconfías de algo o de alguien, no a que quieres preguntar algo.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["quick question", "I was wondering", "one question", "I'd like to ask"],
          example: {
            target: "I have a quick question.",
            translation: "Tengo una preguntica."
          }
        },
        {
          term: "go ahead / ask away",
          explanation:
            "Invitaciones a proceder: “dígame”, “pregunte con confianza”. “Ask away” anima a seguir preguntando sin pena.",
          literal: "adelante / pregunte sin parar",
          useWhen:
            "Para invitar a alguien a preguntar: “Sure, ask away!”, “Go ahead, I'm listening”.",
          avoidWhen:
            "En registros muy formales por escrito, donde resultan demasiado coloquiales.",
          register: "friendly informal",
          region: "Inglés norteamericano; se entiende en todas partes.",
          related: ["go ahead", "ask away", "shoot", "fire away"],
          example: {
            target: "Sure, ask away!",
            translation: "Claro, pregunte con confianza."
          }
        }
      ],
      note:
        "El inglés mete todo en “ask”, pero las piezas importan. “Ask a question” es preguntar (¡nunca “make a question”!). “Ask for” es pedir una cosa o un favor. “Ask about/after” es preguntar por un tema o por la salud de alguien, y “ask for someone” es preguntar por alguien en una recepción. Y una pregunta normal es “a question”, no “a doubt”. Elige la pieza correcta y tu “ask” suena nativo.",
      culture: [
        {
          label: "En inglés se “ask” una pregunta, no se “make”",
          body:
            "El error más audible del hispanohablante es “make a question”, calco directo de “hacer una pregunta”. En inglés la pregunta se “ask”: “ask a question”, “ask me anything”. “Make a question” no existe como colocación natural y delata al aprendiz al instante. Cámbialo por “ask a question” o simplemente “ask”, y de paso recuerda que una duda cotidiana es “a question”, no “a doubt”, que suena a desconfianza y no a curiosidad."
        },
        {
          label: "“For” convierte preguntar en pedir",
          body:
            "En español cambias de verbo (preguntar → pedir); en inglés cambias de preposición. “Ask” a secas es preguntar; “ask for” es pedir. “Ask a coffee” suena raro: se dice “ask for a coffee” o, mejor aún, “order a coffee”. Esa pequeña palabra “for” carga todo el peso que en español lleva un verbo distinto. Interiorízala y evitarás el desliz más común a la hora de pedir cosas en inglés, que es olvidarla."
        },
        {
          label: "“Ask after” alguien: la cortesía de preguntar por",
          body:
            "Cuando un anglohablante dice “she asked after your mom”, está preguntando por su salud, igual que nuestro “preguntó por tu mamá”. “Ask after” es una cortesía cálida y algo tradicional; “ask about” sirve para temas (“he asked about the job”). Colombia teje estas preguntas por la familia en cada saludo; en inglés existen las mismas fórmulas, sólo que con “after” y “about” en lugar de “por”. Usarlas te hace sonar considerado y cercano."
        },
        {
          label: "Pedir direcciones, con permiso primero",
          body:
            "Como en Colombia, en inglés conviene abrir con un “excuse me” y un “could I ask…?” antes de soltar la pregunta. La diferencia es dónde vive la cortesía: no en un “usted”, sino en el modal (“could”, “would”) y en el “please”. Un “Where's the bank?” a secas no es grosero, pero suena seco; “Excuse me, could you tell me where the bank is?” abre puertas. La gente suele responder con gusto e incluso caminar contigo un trecho."
        }
      ],
      pitfalls: [
        {
          mistake: "“Can I make a question?”",
          whyItFails:
            "Es un calco de “hacer una pregunta”. En inglés la pregunta se “ask”, no se “make”. “Make a question” no es una colocación natural y suena a traducción literal palabra por palabra.",
          sayInstead: "Can I ask a question?"
        },
        {
          mistake: "“I want to ask a coffee.”",
          whyItFails:
            "Aquí “ask” sin “for” intenta traducir “pedir un café”. Para pedir una cosa hace falta “ask for” — o mejor “order”. Sin “for”, la frase queda incompleta al oído inglés.",
          sayInstead: "I want to ask for a coffee."
        },
        {
          mistake: "“I asked to my friend where it was.”",
          whyItFails:
            "El “to” sobra: “ask” lleva la persona directa, sin preposición. Es el calco de “preguntar a alguien”. Se dice “ask my friend”, nunca “ask to my friend”.",
          sayInstead: "I asked my friend where it was."
        },
        {
          mistake: "“I have a doubt about the schedule.”",
          whyItFails:
            "“Doubt” es duda en el sentido de desconfianza o incertidumbre, no una pregunta. Para una consulta normal el inglés usa “question”. “I have a doubt” suena a que dudas de algo.",
          sayInstead: "I have a question about the schedule."
        }
      ],
      variations: [
        {
          form: "Could I ask you something?",
          register: "polite",
          region: "Inglés universal",
          whenToUse: "El abridor seguro y cortés con un desconocido."
        },
        {
          form: "Can I ask you something?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Versión un punto más relajada, sirve para casi cualquiera."
        },
        {
          form: "Quick question —",
          register: "friendly informal",
          region: "Inglés norteamericano",
          whenToUse: "Para lanzar una pregunta corta sin rodeos, en tono casual."
        },
        {
          form: "Do you mind if I ask you something?",
          register: "polite",
          region: "Inglés universal",
          whenToUse: "Extra cuidadoso, cuando la pregunta puede ser algo delicada."
        },
        {
          form: "Sorry to bother you, could you tell me…?",
          register: "polite",
          region: "Inglés universal",
          whenToUse: "Al abordar a alguien ocupado o en plena calle, pidiendo información."
        }
      ],
      prompt: "Alejandra quiere pedir un café en una cafetería. ¿Cuál es la forma correcta en inglés?",
      choices: [
        "I want to ask for a coffee, please.",
        "I want to ask a coffee, please.",
        "I want to make a question for a coffee, please."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "En inglés, ¿por qué está mal decir “make a question”?",
          choices: [
            "Porque la pregunta en inglés se “ask”, no se “make”; “make a question” es un calco de “hacer una pregunta”.",
            "Porque “question” siempre exige el artículo “the” delante, y sin él la frase queda gramaticalmente incompleta.",
            "Porque “make” sólo se usa en pasado, y para el presente el inglés siempre prefiere el verbo “do” en su lugar."
          ],
          answer: 0,
          tests: "ask a question, nunca make a question"
        },
        {
          prompt: "Un amigo dice “She asked after your mom.” ¿Qué quiere decir?",
          choices: [
            "Que le hizo una pregunta directa a tu mamá, cara a cara, la última vez que las dos se vieron.",
            "Que buscó a tu mamá por toda la casa porque necesitaba pedirle un favor bastante urgente esa tarde.",
            "Que preguntó por tu mamá — se interesó por cómo está, igual que nuestro “preguntó por tu mamá”."
          ],
          answer: 2,
          tests: "“ask after” = preguntar por la salud de alguien"
        },
        {
          prompt: "¿Cuál dice correctamente “le pregunté a mi amigo dónde quedaba”?",
          choices: [
            "I asked to my friend where it was.",
            "I asked my friend where it was.",
            "I made a question to my friend about where it was."
          ],
          answer: 1,
          tests: "ask + persona, sin “to”"
        },
        {
          prompt: "¿Cuándo usas “ask for” en vez de “ask” a secas?",
          choices: [
            "Cuando pides una cosa, un favor o una acción — algo que cambia de manos, como en “ask for the bill”.",
            "Cuando la pregunta es muy formal y va dirigida a un desconocido al que tratas con especial respeto.",
            "Cuando quieres que la pregunta suene más suave, ya que “for” funciona como un simple atenuante cortés."
          ],
          answer: 0,
          tests: "ask for = pedir, algo que cambia de manos"
        }
      ]
    }
  },
  {
    id: "answering-the-phone-for-a-roommate",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "familiar",
    pathways: ["foundation"],
    verb: "responder",
    review: "pending",
    es: {
      title: "Contestar el teléfono por la compañera",
      situation:
        "Alex está en el apartamento que comparte con Caro, en Bogotá, cuando suenan a la vez el teléfono de ella y el timbre. Caro le pide que conteste mientras ella termina algo. Alex tiene que atender la llamada, responder lo que sabe y dejar claro que hay cosas que no puede decidir por ella — todo sin meter la pata.",
      setting: {
        who: "Caro and Alex have shared the apartment for a year and split chores easily. Caro is in the middle of something with her hands full when everything starts ringing at once.",
        what: "A quick domestic scramble in which Alex answers Caro's phone and the door, fields a couple of questions, and works out what he can and can't decide for her.",
        when: "Early evening, the busy stretch after work when calls and visitors pile up.",
        where: "Bogotá, a shared apartment where the landline still rings and neighbors still knock rather than text.",
        why: "Because taking someone's call well is a small act of trust, and because knowing which verb answers a phone and which answers a question keeps Alex from sounding odd at exactly the wrong moment."
      },
      address: {
        form: "tú",
        who: "Caro and Alex use tú with each other — the natural footing between roommates and friends of the same age who live together.",
        why: "Between peers who share a home, tú is warm and unremarkable. Usted would suddenly sound stiff or sarcastic, as if Alex were mock-formal or annoyed, so tú keeps the everyday closeness intact.",
        ifYouSwitch:
          "Switching to usted mid-favour would read as passive-aggressive, a little jab of distance. Vos is not a Bogotá default, so with Caro it would sound like Alex was putting on an accent that isn't his."
      },
      dialogue: [
        {
          speaker: "Caro",
          target: "Alex, están tocando y mi celular no para de sonar. ¿Me contestas el teléfono?",
          translation: "Alex, someone's knocking and my phone won't stop ringing. Can you answer the phone for me?",
          pronunciation: "A-leks, es-TAN to-KAN-do i mee se-lu-LAR no PA-ra de so-NAR. me kon-TES-tas el te-LE-fo-no",
          literal: "Alex, they-are knocking and my cellphone not stops of to-ring. Me you-answer the telephone?",
          why: "“Contestar” is the go-to verb for answering a phone or a door — a summons that reaches you. Caro says “¿me contestas?” to hand off the ringing phone. Spanish tends to reserve “contestar” for these calls, where English just says “answer”."
        },
        {
          speaker: "Alex",
          target: "Yo te lo contesto. Pero si preguntan algo tuyo, mejor respondes tú.",
          translation: "I'll answer it for you. But if they ask something about you, better you answer.",
          pronunciation: "yo te lo kon-TES-to. PE-ro see preh-GOON-tan AL-go TU-yo, me-HOR res-PON-des tu",
          literal: "I to-you it I-answer. But if they-ask something yours, better you-answer you.",
          why: "Alex splits the labor: he'll “contestar” the phone but says Caro should “responder” anything about her. “Responder” leans toward answering a question or replying with content, which is exactly the distinction this lesson pulls apart."
        },
        {
          speaker: "Caro",
          target: "Tranquilo, responde lo que sepas y lo demás me lo pasas.",
          translation: "Relax, answer what you know and pass the rest to me.",
          pronunciation: "tran-KEE-lo, res-PON-de lo ke SE-pas i lo de-MAS me lo PA-sas",
          literal: "Calm, answer what that you-know and the rest to-me it you-pass.",
          why: "“Responde lo que sepas” uses the tú imperative of responder plus a subjunctive (“sepas”). It's a relaxed instruction: answer what you know. Notice “responder” takes the thing answered as its object, with no preposition in between."
        },
        {
          speaker: "Alex",
          target: "Listo. Ah, en la puerta hay una encuesta; ya les respondí un par de preguntas.",
          translation: "Okay. Oh, there's a survey at the door; I already answered a couple of questions for them.",
          pronunciation: "LEES-to. a, en la PWER-ta ai OO-na en-KWES-ta; ya les res-pon-DEE oon par de preh-GOON-tas",
          literal: "Ready. Ah, in the door there-is a survey; already to-them I-answered a pair of questions.",
          why: "“Ya les respondí un par de preguntas” is the preterite of responder. Answering survey questions is squarely “responder”, not “contestar”; the questions want content back, not a picked-up receiver, so the verb shifts."
        },
        {
          speaker: "Caro",
          target: "Perfecto. Pero no respondas por mí en lo de la firma, que eso lo decido yo.",
          translation: "Perfect. But don't answer for me on the signature thing — I decide that.",
          pronunciation: "per-FEK-to. PE-ro no res-PON-das por mee en lo de la FEER-ma, ke E-so lo de-SEE-do yo",
          literal: "Perfect. But not you-answer for me in the of the signature, that that it I-decide I.",
          why: "“No respondas por mí” is the key third sense: “responder por” means to answer FOR — to vouch for or take responsibility on someone's behalf. Caro won't let Alex be answerable for her signature; the preposition “por” flips the meaning."
        },
        {
          speaker: "Alex",
          target: "Claro, eso no lo respondo yo. Solo digo que ya vienes.",
          translation: "Of course, I won't answer that one. I'll just say you're coming.",
          pronunciation: "KLA-ro, E-so no lo res-PON-do yo. SO-lo DEE-go ke ya VYE-nes",
          literal: "Clear, that not it I-answer I. Only I-say that already you-come.",
          why: "“Eso no lo respondo yo” fronts the object for emphasis — a very Colombian rhythm. Alex confirms he won't take responsibility, only relay that Caro is on her way. “Responder” here keeps the answer-for sense from Caro's line."
        }
      ],
      vocabulary: [
        {
          term: "responder",
          explanation:
            "To answer or reply — to give content back to a question, a message or a request. It is the general “answer with something” verb.",
          literal: "to answer / to reply",
          useWhen:
            "Answering questions, emails, messages: “responder la pregunta”, “te respondo mañana”, “respóndeme cuando puedas”.",
          avoidWhen:
            "For a ringing phone or a knocking door, where Colombians strongly prefer “contestar”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["contestar", "replicar", "reaccionar", "responder a"],
          example: {
            target: "Respóndeme cuando puedas.",
            translation: "Answer me when you can."
          }
        },
        {
          term: "contestar",
          explanation:
            "To answer — the default for a phone or a door, and fine for questions too. It is the verb for responding to a summons that reaches you.",
          literal: "to answer",
          useWhen:
            "Picking up a call, opening to a knock, or answering in class: “contestar el teléfono”, “nadie contesta”.",
          avoidWhen:
            "For “answering for” someone; that accountability sense belongs to “responder por”, not “contestar”.",
          register: "neutral",
          region: "Universal Spanish; “contestar el teléfono” is the standard collocation everywhere.",
          related: ["responder", "atender", "coger", "descolgar"],
          example: {
            target: "¿Me contestas el teléfono?",
            translation: "Can you answer the phone for me?"
          }
        },
        {
          term: "responder por",
          explanation:
            "To answer FOR — to vouch for someone, or to take responsibility on their behalf. The “por” turns plain answering into accountability.",
          literal: "to answer for",
          useWhen:
            "Vouching or accepting responsibility: “yo respondo por él”, “no respondo por eso”, “alguien tiene que responder por esto”.",
          avoidWhen:
            "When you simply mean to reply; drop the “por” and it is plain “responder”.",
          register: "neutral",
          region: "Universal Spanish; carries real social weight in Colombia.",
          related: ["responsabilizarse", "dar la cara", "garantizar", "hacerse cargo"],
          example: {
            target: "Yo respondo por él.",
            translation: "I'll vouch for him."
          }
        },
        {
          term: "contestar el teléfono",
          explanation:
            "The fixed phrase for answering the phone. English “answer the phone” maps to “contestar”, not “responder”, which would sound distinctly odd here.",
          literal: "to answer the telephone",
          useWhen:
            "Any ringing phone: “¿puedes contestar el teléfono?”, “nadie contesta el teléfono”.",
          avoidWhen:
            "For replying to a text, where it is “responder” or “contestar el mensaje” rather than “el teléfono”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["coger el teléfono", "atender la llamada", "contestar la llamada", "descolgar"],
          example: {
            target: "Nadie contesta el teléfono.",
            translation: "Nobody's answering the phone."
          }
        },
        {
          term: "la respuesta",
          explanation:
            "The answer or reply, as a noun. Handy when you talk about the answer itself rather than the act of answering it.",
          literal: "the answer / response",
          useWhen:
            "Referring to an answer: “no tengo la respuesta”, “espero tu respuesta”, “esa no es la respuesta”.",
          avoidWhen:
            "Where you actually need the verb; it is a noun, so it cannot stand in for “responder” or “contestar”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["contestación", "réplica", "reacción", "solución"],
          example: {
            target: "Espero tu respuesta.",
            translation: "I await your answer."
          }
        },
        {
          term: "responder a",
          explanation:
            "To respond TO something — a message, an email, a comment. The “a” marks what you are replying to.",
          literal: "to respond to",
          useWhen:
            "Replying to messages or emails: “responder al correo”, “responder a tu mensaje”, “respondió a todos”.",
          avoidWhen:
            "When the object is a person you are vouching for; that is “responder por”, not “responder a”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["contestar a", "reaccionar a", "replicar a", "atender"],
          example: {
            target: "Voy a responder al correo.",
            translation: "I'm going to answer the email."
          }
        },
        {
          term: "¿de parte de quién?",
          explanation:
            "The standard phone courtesy for “who's calling?” — literally “on whose behalf?”. Essential when you answer a call for someone else.",
          literal: "on behalf of whom?",
          useWhen:
            "Taking a call for another person: after “¿aló?”, ask “¿de parte de quién?” before passing it on.",
          avoidWhen:
            "In casual calls to your own friends, where it is far too formal and stiff.",
          register: "polite formal",
          region: "Universal Spanish; everyday Colombian phone manners.",
          related: ["¿quién lo busca?", "¿con quién desea hablar?", "un momento", "ya le paso"],
          example: {
            target: "¿De parte de quién?",
            translation: "Who may I say is calling?"
          }
        }
      ],
      note:
        "Two verbs for “answer”. “Contestar” picks up a phone or a door — a summons reaching you — and can answer questions too. “Responder” answers a question or replies with content, and pairs with messages via “responder a”. The trap sense is “responder por”: to answer FOR someone, to vouch or be responsible. Quick map: phone → contestar, reply → responder, vouch → responder por.",
      culture: [
        {
          label: "The phone is “contestado”, the question “respondida”",
          body:
            "Spanish quietly sorts answering by what is being answered. A ringing phone or a knock at the door is “contestar” — you are responding to a summons that came to you. A question, an email or a survey wants content back, so it is “responder”. The two can bleed into each other, and “contestar” a question is perfectly fine, but you will rarely hear “responder el teléfono”. Match the verb to the trigger and you will sound natural on both fronts."
        },
        {
          label: "“Responder por” is putting your name on the line",
          body:
            "When a Colombian says “yo respondo por él”, they are vouching — staking their own credibility on that person. “Responder por” carries real social weight: a landlord may want someone to “responder por” a new tenant, a boss to “responder por” a hire. It is not a light phrase. Offering to “responder por” a friend is a genuine act of trust, and refusing — “yo por eso no respondo” — draws a firm line around exactly what you will and will not be accountable for."
        },
        {
          label: "Phone manners: ¿aló?, ¿de parte de quién?",
          body:
            "Colombian calls open with “¿aló?”, not “hello”, and when you answer for someone else the courteous next move is “¿de parte de quién?” — who's calling. You might also hear “¿quién lo busca?” or “ya le paso”. Answering another person's phone is common and comes with a small script: greet, find out who it is, offer to take a message. Knowing that script keeps you from freezing the moment the phone unexpectedly lands in your hand."
        },
        {
          label: "“Dar razón”: the art of the relayed message",
          body:
            "If someone can't come to the phone or the door, Colombians “dan razón” — they pass word along. “Yo le doy razón” means “I'll let them know”. It is the neighborly infrastructure of a place where messages still travel by mouth: a portero, a shopkeeper, a roommate all “dan razón”. Offering to “dar razón” when you answer for someone is thoughtful, and asking “¿le doy razón?” is the polite way to close a call you took on their behalf."
        }
      ],
      pitfalls: [
        {
          mistake: "¿Puedes responder el teléfono?",
          whyItFails:
            "For a ringing phone, Colombians say “contestar”, not “responder”. “Responder el teléfono” sounds off — you answer a question, but you pick up (contestar) a call.",
          sayInstead: "¿Puedes contestar el teléfono?"
        },
        {
          mistake: "Yo contesto por él.",
          whyItFails:
            "To vouch or be responsible for someone is “responder por”, not “contestar por”. “Contestar por él” suggests answering questions in his place, missing the whole accountability sense.",
          sayInstead: "Yo respondo por él."
        },
        {
          mistake: "¿Me puedes responder la puerta?",
          whyItFails:
            "A door, like a phone, is “contestar” — or better “abrir” or “atender” — never “responder”. “Responder la puerta” is a direct calque of English “answer the door” and does not work in Spanish.",
          sayInstead: "¿Me puedes abrir la puerta?"
        },
        {
          mistake: "Voy a responder por tu mensaje.",
          whyItFails:
            "“Responder por” means to vouch, so this sounds like vouching for the message. To reply to a message it is “responder a tu mensaje” or just “responder tu mensaje”. Wrong preposition, wrong meaning.",
          sayInstead: "Voy a responder tu mensaje."
        }
      ],
      variations: [
        {
          form: "¿Me contestas el teléfono?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Handing off a ringing phone to someone standing nearby."
        },
        {
          form: "¿Me respondes una pregunta?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Asking someone to answer a quick question for you."
        },
        {
          form: "¿Sería tan amable de responder unas preguntas?",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "Formally requesting answers — a survey, an interview, an official form."
        },
        {
          form: "Yo respondo por vos.",
          register: "friendly informal",
          region: "Medellín and Antioquia (voseo)",
          whenToUse: "Vouching for someone in paisa vos, staking your name on them."
        },
        {
          form: "Contéstame el WhatsApp cuando puedas.",
          register: "friendly informal",
          region: "General Colombian (digital)",
          whenToUse: "Nudging a friend to reply to your message when they get a chance."
        }
      ],
      prompt: "The phone is ringing and Alex wants to ask Caro to pick it up. Which verb is right?",
      choices: [
        "“Contestar”, because a ringing phone is a summons you pick up — Spanish reserves this verb for exactly that.",
        "“Responder”, because you are giving something back to the caller, and that is always this verb every time.",
        "“Responder por”, because you are taking charge of the whole call on behalf of the phone's actual owner."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Caro says “no respondas por mí en lo de la firma.” What is she asking Alex to do?",
          choices: [
            "To not vouch for her or take any responsibility for the decision about her signature.",
            "To not reply to any phone calls that mention the signature until she gets back to it.",
            "To not read her signature aloud to whoever happens to be asking at the door now."
          ],
          answer: 0,
          tests: "“responder por” = answer for / vouch"
        },
        {
          prompt: "Say “Can you answer the phone for me?” the natural Colombian way.",
          choices: [
            "¿Me respondes el teléfono?",
            "¿Me contestas el teléfono?",
            "¿Me respondes por el teléfono?"
          ],
          answer: 1,
          tests: "the phone takes contestar, not responder"
        },
        {
          prompt: "When does Spanish prefer “responder” over “contestar”?",
          choices: [
            "When answering a question, message or survey — content going back, not a phone being picked up.",
            "When the answer is a negative one; “responder” is the verb Colombians use specifically to say no politely.",
            "When you are speaking formally; “responder” is simply the usted version of the everyday verb “contestar”."
          ],
          answer: 0,
          tests: "responder for content vs contestar for a summons"
        },
        {
          prompt: "Alex wants to vouch for his brother. Which sentence is correct?",
          choices: [
            "Yo contesto por mi hermano.",
            "Yo respondo mi hermano.",
            "Yo respondo por mi hermano."
          ],
          answer: 2,
          tests: "vouching for someone is responder por"
        }
      ]
    },
    en: {
      title: "Contestar el teléfono por la compañera",
      situation:
        "Alejandra está en el apartamento que comparte con Jen, en Houston, cuando suenan a la vez el teléfono de ella y el timbre. Jen le pide que conteste mientras termina algo. Usted tiene que atender la llamada, responder lo que sabe y dejar claro que hay cosas que no puede decidir por ella — todo sin meter la pata. En inglés, además, todo se “answer”.",
      setting: {
        who: "Jen y Alejandra comparten el apartamento desde hace un año y se reparten las tareas sin problema. Jen está ocupada con las manos llenas cuando todo empieza a sonar a la vez.",
        what: "Un pequeño alboroto doméstico en el que Alejandra contesta el teléfono y la puerta, responde un par de preguntas y descubre qué puede y qué no puede decidir por Jen.",
        when: "Temprano en la noche, esa franja ajetreada después del trabajo en la que se acumulan llamadas y visitas.",
        where: "Houston, un apartamento compartido donde el teléfono todavía suena y los vecinos todavía tocan en vez de escribir.",
        why: "Porque atender bien la llamada de alguien es un pequeño acto de confianza, y porque saber cuándo el inglés dice “answer” y cuándo “reply” evita que Alejandra suene rara justo en el peor momento."
      },
      address: {
        form: "mixed",
        who: "El inglés no separa tú de usted: “you” vale para Jen, para el vecino y para quien llama. La cercanía se nota en el tono, no en el pronombre.",
        why: "En inglés la confianza y el respeto no viven en el pronombre sino en las palabras que eliges: un “hey, can you…?” suena cercano y un “would you mind…?” suena formal, aunque ambos usen “you”.",
        ifYouSwitch:
          "No hay a qué “subir” ni “bajar”: para sonar más formal cambias el modal y añades “please”; para sonar más cercano usas el nombre o un “hey”, pero el “you” no se mueve."
      },
      dialogue: [
        {
          speaker: "Jen",
          target: "Alejandra, someone's at the door and my phone keeps ringing. Can you answer it?",
          translation: "Alejandra, hay alguien en la puerta y mi teléfono no para de sonar. ¿Lo puedes contestar?",
          pronunciation: "a-le-JÁN-dra, SÓM-uan is at de dor and mai fóun kips RÍN-guin. can iú ÁN-ser it",
          literal: "Alejandra, alguien está en la puerta y mi teléfono sigue sonando. ¿Puedes contestarlo?",
          why: "“Answer it” sirve para el teléfono, la puerta y las preguntas: el inglés usa un solo “answer” donde el español reparte entre “contestar” y “responder”. Aquí “it” es el teléfono que suena."
        },
        {
          speaker: "Alejandra",
          target: "Sure, I'll get it. But if they ask about you, you should answer.",
          translation: "Claro, yo contesto. Pero si preguntan por ti, mejor respondes tú.",
          pronunciation: "shúr, ail get it. bot if déi ask a-BÁUT iú, iú shud ÁN-ser",
          literal: "Claro, yo lo agarro. Pero si ellos preguntan acerca de ti, tú deberías responder.",
          why: "“I'll get it” es el modismo para “yo contesto / yo abro”: “get” cubre atender la llamada o la puerta. Luego “answer” reaparece para las preguntas sobre Jen, sin cambiar de verbo."
        },
        {
          speaker: "Jen",
          target: "That's fine — just answer what you know and pass the rest to me.",
          translation: "Está bien, responde lo que sepas y lo demás me lo pasas.",
          pronunciation: "dats fáin — llost ÁN-ser uót iú nóu and pas de rest tu mi",
          literal: "Eso está bien — sólo responde lo que tú sabes y pasa el resto a mí.",
          why: "“Answer what you know” — “answer” lleva el objeto directo sin preposición: se contesta la pregunta, no “se contesta A la pregunta”. Ese “to” de más sería un calco de “responder a”."
        },
        {
          speaker: "Alejandra",
          target: "Okay. Oh, there's a survey at the door; I already answered a couple of questions.",
          translation: "Bueno. Ah, en la puerta hay una encuesta; ya respondí un par de preguntas.",
          pronunciation: "o-KÉI. óu, ders a SÉR-vei at de dor; ai ol-RÉ-di ÁN-serd a KÓ-pel of KUÉS-chons",
          literal: "Bueno. Oh, hay una encuesta en la puerta; yo ya respondí un par de preguntas.",
          why: "“I answered a couple of questions” usa “answer” para una encuesta, igual que para el teléfono. Ojo: es “answer”, no “contest”, que en inglés significa disputar, no contestar."
        },
        {
          speaker: "Jen",
          target: "Great. But don't answer for me on the signature — that's my call.",
          translation: "Perfecto. Pero no respondas por mí en lo de la firma; eso lo decido yo.",
          pronunciation: "gréit. bot dont ÁN-ser for mi on de SÍG-na-cher — dats mai col",
          literal: "Genial. Pero no respondas por mí en la firma — esa es mi decisión.",
          why: "“Don't answer for me” es “no respondas por mí”: “answer for” en inglés sí lleva “for” y significa responsabilizarse por alguien. Es el eco exacto de “responder por”."
        },
        {
          speaker: "Alejandra",
          target: "Of course, I won't. I'll just reply that you're on your way.",
          translation: "Claro que no. Solo respondo que ya vienes.",
          pronunciation: "of kors, ai uónt. ail llost ri-PLÁI dat iúr on iór uéi",
          literal: "Por supuesto, no lo haré. Sólo responderé que tú estás en tu camino.",
          why: "“I'll reply that…” usa “reply” para transmitir un mensaje. “Reply” tira más hacia mensajes y respuestas; “answer” es más general. Aquí Alejandra sólo pasa el recado."
        }
      ],
      vocabulary: [
        {
          term: "answer",
          explanation:
            "El verbo comodín para responder en inglés: sirve para preguntas, el teléfono y la puerta. Donde el español elige entre “responder” y “contestar”, el inglés dice “answer”.",
          literal: "responder / contestar",
          useWhen:
            "Casi siempre: “answer the phone”, “answer the question”, “answer the door”.",
          avoidWhen:
            "Para responder a un mensaje escrito, donde suele quedar mejor “reply”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["reply", "respond", "pick up", "get the door"],
          example: {
            target: "Can you answer the phone?",
            translation: "¿Puedes contestar el teléfono?"
          }
        },
        {
          term: "answer the question",
          explanation:
            "“Responder / contestar la pregunta.” Clave: “answer” lleva el objeto directo, sin “to”. “Answer to the question” es un calco de “responder a”.",
          literal: "responder la pregunta",
          useWhen:
            "Al responder cualquier pregunta: “answer my question”, “please answer honestly”.",
          avoidWhen:
            "No metas “to”: “answer to the question” está mal para el sentido de responder.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["answer", "address", "respond to", "reply to"],
          example: {
            target: "Please answer the question.",
            translation: "Por favor responde la pregunta."
          }
        },
        {
          term: "reply (to)",
          explanation:
            "Responder, sobre todo a mensajes, correos o comentarios. Como verbo lleva “to”: “reply to the email”.",
          literal: "responder (a)",
          useWhen:
            "Para mensajes y correos: “reply to my text”, “she hasn't replied yet”.",
          avoidWhen:
            "Para el teléfono o la puerta, donde va “answer” o el coloquial “get”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["answer", "respond", "write back", "get back to"],
          example: {
            target: "I'll reply to your email tonight.",
            translation: "Respondo tu correo esta noche."
          }
        },
        {
          term: "answer for",
          explanation:
            "Responder por: responsabilizarse o dar la cara por alguien o algo. Lleva “for”, igual que el “por” del español.",
          literal: "responder por",
          useWhen:
            "Al asumir responsabilidad: “I'll answer for him”, “you'll answer for this”.",
          avoidWhen:
            "No lo confundas con “answer to”, que es rendir cuentas ANTE alguien.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["vouch for", "be responsible for", "account for", "stand up for"],
          example: {
            target: "I'll answer for my brother.",
            translation: "Yo respondo por mi hermano."
          }
        },
        {
          term: "answer the door / phone",
          explanation:
            "Atender la puerta o el teléfono. En inglés ambos se “answer” o, coloquialmente, se “get”: “get the door”, “get the phone”.",
          literal: "atender la puerta / el teléfono",
          useWhen:
            "Cuando suena o tocan: “Can you get the door?”, “nobody answered the phone”.",
          avoidWhen:
            "Con mensajes escritos, donde va “reply” en lugar de “answer”.",
          register: "friendly informal",
          region: "Inglés universal; el uso de “get” es más coloquial.",
          related: ["get the door", "pick up", "buzz in", "answer"],
          example: {
            target: "Can you get the door?",
            translation: "¿Puedes abrir la puerta?"
          }
        },
        {
          term: "respond",
          explanation:
            "Responder, una versión un poco más formal de “answer/reply”. Común en contextos serios o escritos: “respond to the request”.",
          literal: "responder",
          useWhen:
            "En tono formal: “please respond by Friday”, “respond to the complaint”.",
          avoidWhen:
            "En charla muy casual, donde suena algo formal y basta con “answer” o “reply”.",
          register: "polite",
          region: "Inglés universal.",
          related: ["answer", "reply", "get back to", "address"],
          example: {
            target: "Please respond by Friday.",
            translation: "Por favor responda antes del viernes."
          }
        },
        {
          term: "Who's calling?",
          explanation:
            "“¿De parte de quién?” La fórmula para preguntar quién llama cuando contestas por otra persona.",
          literal: "¿quién llama?",
          useWhen:
            "Al contestar una llamada para alguien más: “May I ask who's calling?”.",
          avoidWhen:
            "En llamadas casuales entre amigos, donde sobra la fórmula.",
          register: "polite",
          region: "Inglés universal.",
          related: ["May I ask who's calling?", "Who's this?", "Can I take a message?", "Hold on"],
          example: {
            target: "May I ask who's calling?",
            translation: "¿De parte de quién, por favor?"
          }
        }
      ],
      note:
        "Buenas noticias: el inglés usa un solo “answer” para el teléfono, la puerta y las preguntas, donde el español separa “contestar” y “responder”. Cuida tres cosas: “answer” no lleva “to” (“answer the question”, no “answer to”); “contest” NO significa contestar (es disputar); y responder por alguien es “answer for” (o “vouch for”), con “for”, nunca con “by”. Para mensajes escritos, “reply”.",
      culture: [
        {
          label: "Un solo “answer” para todo",
          body:
            "El inglés simplifica lo que el español divide: “answer” cubre el teléfono (“answer the phone”), la puerta (“answer the door”) y las preguntas (“answer the question”). No hay que elegir entre “contestar” y “responder”. Coloquialmente incluso se dice “get it” — “I'll get the door”. La única sutileza es que para mensajes escritos suele preferirse “reply”. Así que relájate: donde dudabas entre dos verbos, el inglés te deja uno solo y te ahorra la decisión."
        },
        {
          label: "“Contest” no es contestar: el falso amigo",
          body:
            "Uno de los falsos amigos más traicioneros. “Contestar” es “answer”, pero el inglés “contest” significa disputar, impugnar o competir por algo: “she contested the will”, “a hard-contested match”. Si dices “I contested the phone”, un angloparlante entiende que peleaste con el aparato. Para responder, di siempre “answer” o “reply”. Guarda “contest” para concursos y disputas legales, y evitarás una de las confusiones más llamativas al pasar del español al inglés."
        },
        {
          label: "“For” y “to”: responder por vs rendir cuentas",
          body:
            "Dos frases parecidas, sentidos distintos. “Answer for” es responder por, hacerse responsable: “I'll answer for the mistake”. “Answer to” es rendir cuentas ante alguien: “I answer to my manager”. El español “responder por” cae en la primera; cuidado con calcar el “por” como “by”, porque “answer by him” no existe. Y para responder una pregunta, ni “for” ni “to”: “answer the question”, con el objeto pegado y sin preposición de por medio."
        },
        {
          label: "Contestar el teléfono ajeno, con guion",
          body:
            "Como en Colombia, contestar el teléfono de otra persona en una oficina trae su pequeño guion en inglés: “Hello, Jen's desk”, y luego “May I ask who's calling?” (¿de parte de quién?) y “Can I take a message?” (¿le doy razón?). Tomar el recado es cortesía normal. La diferencia cultural es mínima; lo que cambia son las fórmulas fijas. Aprenderte tres o cuatro te salva de quedarte en blanco cuando el teléfono cae de repente en tus manos."
        }
      ],
      pitfalls: [
        {
          mistake: "“Please answer to the question.”",
          whyItFails:
            "El “to” sobra: “answer” lleva el objeto directo. Es un calco de “responder a la pregunta”. Se dice “answer the question”, sin preposición de por medio.",
          sayInstead: "Please answer the question."
        },
        {
          mistake: "“I contested the phone.”",
          whyItFails:
            "“Contest” es disputar o impugnar, no contestar; es un falso amigo de “contestar”. Para atender una llamada se usa “answer” o “pick up”.",
          sayInstead: "I answered the phone."
        },
        {
          mistake: "“I'll respond by my brother.”",
          whyItFails:
            "Responder por alguien es “answer for” o “vouch for”, con “for”. El “by” es un calco del “por” español y aquí no significa nada útil.",
          sayInstead: "I'll answer for my brother."
        },
        {
          mistake: "“Response me when you can.”",
          whyItFails:
            "“Response” es el sustantivo (la respuesta); el verbo es “answer”, “reply” o “respond”. “Response me” usa el sustantivo como verbo, y además con “reply” faltaría la preposición “to”.",
          sayInstead: "Reply to me when you can."
        }
      ],
      variations: [
        {
          form: "Can you answer the phone?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Pedir que alguien atienda una llamada."
        },
        {
          form: "Can you get the door?",
          register: "friendly informal",
          region: "Inglés norteamericano",
          whenToUse: "Pedir de manera coloquial que alguien atienda la puerta."
        },
        {
          form: "Could you reply to my email?",
          register: "polite",
          region: "Inglés universal",
          whenToUse: "Pedir cortésmente una respuesta a un correo."
        },
        {
          form: "Please respond by Friday.",
          register: "polite",
          region: "Inglés universal",
          whenToUse: "En tono formal o escrito, marcando una fecha límite."
        },
        {
          form: "I'll answer for it.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Asumir la responsabilidad de algo — responder por ello."
        }
      ],
      prompt: "El teléfono suena y Jen le pide a Alejandra que lo atienda. ¿Cuál es la forma natural en inglés?",
      choices: [
        "Can you answer the phone?",
        "Can you contest the phone?",
        "Can you respond the phone to me, please?"
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Por qué está mal decir “answer to the question”?",
          choices: [
            "Porque “answer” lleva el objeto directo sin preposición; el “to” es un calco de “responder a la pregunta”.",
            "Porque “question” necesita el artículo “a” delante, y sin él la frase queda incompleta para el oído inglés.",
            "Porque “answer” sólo funciona con el teléfono y la puerta, nunca con preguntas, que siempre piden “reply”."
          ],
          answer: 0,
          tests: "answer + objeto directo, sin “to”"
        },
        {
          prompt: "Un compañero dice “I contested the phone.” ¿Qué problema hay?",
          choices: [
            "Ninguno; “contest” es la forma culta y correcta de decir que atendió el teléfono en una oficina.",
            "Que “contest” significa disputar o impugnar, no contestar; es un falso amigo de “contestar”.",
            "Que faltó decir “to”: lo correcto sería “I contested to the phone” para que suene del todo natural."
          ],
          answer: 1,
          tests: "“contest” como falso amigo de contestar"
        },
        {
          prompt: "¿Cuál dice correctamente “yo respondo por mi hermano”?",
          choices: [
            "I respond by my brother.",
            "I answer to my brother for it.",
            "I answer for my brother."
          ],
          answer: 2,
          tests: "responder por = answer for"
        },
        {
          prompt: "¿Cuándo conviene “reply” en vez de “answer”?",
          choices: [
            "Sobre todo para responder mensajes, correos o comentarios escritos: “reply to my email”.",
            "Sólo cuando la respuesta es larga y detallada; para las cortas siempre se usa “answer”.",
            "Únicamente en inglés británico, ya que en Norteamérica “reply” casi no se utiliza nunca."
          ],
          answer: 0,
          tests: "“reply” para mensajes escritos"
        }
      ]
    }
  },
  {
    id: "borrowing-a-drill-from-the-paisa-neighbor",
    level: "Starter · Home and neighborhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "familiar",
    pathways: ["foundation"],
    verb: "necesitar",
    review: "pending",
    es: {
      title: "Pedirle prestado el taladro al vecino",
      situation:
        "Alex vive en Medellín y necesita colgar una repisa, pero no tiene taladro. Toca la puerta de Norbey, el vecino paisa del frente, para pedírselo prestado y, de paso, una mano con la pared. Tiene que plantear la necesidad sin sonar mandón, pedir prestado bien y aceptar la ayuda — todo en vos, como se habla en el barrio.",
      setting: {
        who: "Norbey has lived across the hall for years, keeps a full toolbox and enjoys a chat. Alex moved to Medellín recently and is still finding his feet with the paisa way of speaking.",
        what: "A short doorway exchange in which Alex asks to borrow a drill and ends up with an offer of hands-on help too.",
        when: "A Saturday afternoon, the classic time for small home jobs and for neighbors to be around and willing.",
        where: "Medellín, a friendly apartment block in a paisa neighborhood where vos is the default and toolboxes get shared.",
        why: "Because a borrowed drill and a bit of help are how neighbors become allies, and because stating a need too bluntly can sour a first favour before it's even granted."
      },
      address: {
        form: "vos",
        who: "Norbey and Alex use vos with each other — the everyday paisa footing between neighbors in Medellín, warm and completely normal.",
        why: "In Antioquia vos is the default among peers and neighbors, not a rude or overly familiar form. It carries the local music, pairs with “pues” and “de una”, and mixes freely with usted even inside one conversation.",
        ifYouSwitch:
          "Using strict tú here would sound bookish, like someone who learned Spanish elsewhere and hasn't tuned into the city. Sliding into usted is fine and common in Medellín, but dropping vos entirely would cost Alex the local warmth."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "¡Vecino, buenas! ¿Me colaborás con un favorcito? Es que necesito un taladro.",
          translation: "Neighbor, hi! Can you help me out with a little favour? The thing is I need a drill.",
          pronunciation: "beh-SEE-no, BWEH-nas. me ko-la-bo-RAS kon oon fa-vor-SEE-to? es ke ne-se-SEE-to oon ta-LA-dro",
          literal: "Neighbor, good-ones! Me you-help(vos) with a little-favour? Is that I-need a drill.",
          why: "Alex wraps his need in “¿me colaborás con un favorcito?” before landing “necesito”. A flat “necesito un taladro” can sound like a demand; Colombians cushion it with a favour frame and the diminutive “favorcito”. “Colaborar” is the local euphemism for helping out."
        },
        {
          speaker: "Norbey",
          target: "¡Claro, pues! ¿Qué necesitás?",
          translation: "Of course! What do you need?",
          pronunciation: "KLA-ro, pwes. ke ne-se-SEE-tas",
          literal: "Clear, well! What you-need(vos)?",
          why: "“¿Qué necesitás?” is the paisa vos form of necesitar, stressed on the last syllable. Norbey answers warmth with warmth. Vos endings — necesitás, prestás, colaborés — are the Medellín default between neighbors, and “pues” is the region's signature filler."
        },
        {
          speaker: "Alex",
          target: "Necesito colgar una repisa y no tengo con qué. ¿Me lo prestás un ratico?",
          translation: "I need to hang a shelf and I've nothing to do it with. Could you lend it to me for a bit?",
          pronunciation: "ne-se-SEE-to kol-GAR OO-na reh-PEE-sa i no TEN-go kon ke. me lo pres-TAS oon ra-TEE-ko",
          literal: "I-need to-hang a shelf and not I-have with what. Me it you-lend(vos) a little-while?",
          why: "“No tengo con qué” softens the ask by explaining the need. Then “¿me lo prestás?” uses “prestar” (to lend): what Alex wants is to borrow, but Spanish has no everyday “borrow” verb, so he flips it and asks Norbey to lend."
        },
        {
          speaker: "Norbey",
          target: "De una. Y si necesitás que te eche una mano, yo subo.",
          translation: "Absolutely. And if you need me to give you a hand, I'll come up.",
          pronunciation: "de OO-na. i see ne-se-SEE-tas ke te E-che OO-na MA-no, yo SOO-bo",
          literal: "Of one. And if you-need(vos) that to-you I-throw a hand, I I-go-up.",
          why: "“Si necesitás que te eche una mano” pairs necesitar with a subjunctive clause: “necesitar que + subjuntivo”. “Echar una mano” is to give a hand — the same metaphor as English — and “de una” is the paisa yes, meaning right away, for sure."
        },
        {
          speaker: "Alex",
          target: "¡Uy, de una! La verdad sí necesito que me colaborés, que eso de la pared es complicado.",
          translation: "Oh, yes please! Honestly I do need you to help me, because that wall business is tricky.",
          pronunciation: "ooy, de OO-na. la ver-DAD see ne-se-SEE-to ke me ko-la-bo-RES, ke E-so de la pa-RED es kom-pli-KA-do",
          literal: "Oof, of one! The truth yes I-need that me you-help(vos), that that of the wall is complicated.",
          why: "“Necesito que me colaborés” is the softened way to ask for real help: not a blunt “ayudame” but “colaborar”, which frames it as teamwork. The subjunctive “colaborés” follows “necesito que”. This is the politeness engine of the whole lesson."
        },
        {
          speaker: "Norbey",
          target: "¡Listo pues! Esperá que cojo las cosas y ya subo, que para eso somos los vecinos.",
          translation: "Alright then! Hold on while I grab my things and I'll be up — that's what neighbors are for.",
          pronunciation: "LEES-to pwes. es-pe-RA ke KO-ho las KO-sas i ya SOO-bo, ke PA-ra E-so SO-mos los beh-SEE-nos",
          literal: "Ready well! Wait(vos) that I-grab the things and already I-go-up, that for that we-are the neighbors.",
          why: "“Esperá” is the paisa vos imperative of esperar. “Para eso somos los vecinos” — that's what neighbors are for — frames the favour as ordinary and mutual, the spoken glue of a building where tools and cups of sugar circulate freely."
        }
      ],
      vocabulary: [
        {
          term: "necesitar",
          explanation:
            "To need — the direct verb for a requirement. Straightforward to conjugate, but Colombians often soften it, because a bare “necesito…” aimed at a person can sound like a command.",
          literal: "to need",
          useWhen:
            "Stating a genuine requirement: “necesito ayuda”, “necesito un taladro”, “¿qué necesitás?”.",
          avoidWhen:
            "As a blunt demand to a person; cushion it with a favour frame or a diminutive so it doesn't come across as bossy.",
          register: "neutral",
          region: "Universal Spanish; the softening habit is especially Colombian.",
          related: ["hacer falta", "requerir", "necesitar que", "ocupar"],
          example: {
            target: "¿Qué necesitás, vecino?",
            translation: "What do you need, neighbor?"
          }
        },
        {
          term: "necesitar que + subjuntivo",
          explanation:
            "To need someone else to do something. “Necesitar que” forces the subjunctive in the clause that follows: “necesito que me colaborés”.",
          literal: "to need that + (subjunctive)",
          useWhen:
            "When the need involves another person's action: “necesito que vengas”, “necesito que me ayudés”.",
          avoidWhen:
            "For your own action, where you just use an infinitive: “necesito colgar la repisa”, with no “que”.",
          register: "neutral",
          region: "Universal Spanish; the subjunctive here is obligatory, not optional.",
          related: ["necesito que", "quiero que", "requiero que", "hace falta que"],
          example: {
            target: "Necesito que me colaborés con esto.",
            translation: "I need you to help me with this."
          }
        },
        {
          term: "¿me regalás…?",
          explanation:
            "The paisa vos form of the iconic Colombian “¿me regala…?” — a need or request dressed up as a small gift, though you'll usually pay for it or give it back.",
          literal: "will you gift me…? (vos)",
          useWhen:
            "Asking for a small thing or favour warmly, Medellín-style: “¿me regalás un minuto?”, “¿me regalás el taladro?”.",
          avoidWhen:
            "Outside Colombia, where “regalar” is taken literally and sounds like you are begging for freebies.",
          register: "friendly informal",
          region: "Paisa voseo (Medellín, Antioquia, Coffee Region); the usted “¿me regala?” is nationwide.",
          related: ["¿me regala…?", "¿me das…?", "¿me pasás…?", "¿me colaborás con…?"],
          example: {
            target: "¿Me regalás el taladro un ratico?",
            translation: "Could you lend me the drill for a bit?"
          }
        },
        {
          term: "prestar",
          explanation:
            "To lend. The trap: to borrow, Spanish makes the OTHER person lend — “¿me prestás?”, will you lend me? — because there is no everyday single verb for “borrow”.",
          literal: "to lend",
          useWhen:
            "Asking to borrow by flipping it around: “¿me prestás el taladro?”, “te lo presto con gusto”.",
          avoidWhen:
            "Don't hunt for a verb meaning “to borrow”; reframe from the lender's side with “prestar”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["prestado", "¿me prestás?", "devolver", "fiar"],
          example: {
            target: "¿Me prestás el taladro?",
            translation: "Will you lend me the drill?"
          }
        },
        {
          term: "hacer(le) un favor",
          explanation:
            "To do someone a favour. “¿Me hacés un favor?” is a warm, direct way to open a need without the bluntness of a bare “necesito”.",
          literal: "to do (someone) a favour",
          useWhen:
            "Opening a request warmly: “¿me hacés un favorcito?”, “hágame el favor”.",
          avoidWhen:
            "For big or formal asks, where “¿sería tan amable?” carries the weight better.",
          register: "friendly informal",
          region: "Universal Spanish; the diminutive “favorcito” is very Colombian.",
          related: ["¿me colaborás?", "¿me regalás?", "¿me ayudás?", "hágame el favor"],
          example: {
            target: "¿Me hacés un favorcito?",
            translation: "Could you do me a little favour?"
          }
        },
        {
          term: "tocar (me toca)",
          explanation:
            "An impersonal “have to”: “me toca” means it falls to me, I'm the one obliged. Colombians reach for it constantly where English says “I have to / I've got to”.",
          literal: "to touch (it touches me)",
          useWhen:
            "Expressing obligation: “me toca madrugar”, “te toca a vos”, “hoy me toca cocinar”.",
          avoidWhen:
            "For a thing you need — a noun — where the verb is “necesitar”, not “tocar”.",
          register: "friendly informal",
          region: "Very common across Colombia and the Andes.",
          related: ["me toca", "tener que", "deber", "es mi turno"],
          example: {
            target: "Me toca colgar la repisa hoy.",
            translation: "I've got to hang the shelf today."
          }
        },
        {
          term: "de una / listo pues",
          explanation:
            "Paisa affirmations. “De una” is “right away / for sure”; “listo pues” is a warm “alright then” that seals a deal or closes a chat.",
          literal: "of one / ready then",
          useWhen:
            "Agreeing enthusiastically, Medellín-style: “—¿Subimos? —¡De una!”, “listo pues, nos vemos”.",
          avoidWhen:
            "In formal settings, where both are too colloquial and a plain “de acuerdo” fits better.",
          register: "friendly informal",
          region: "Paisa (Medellín, Antioquia); “de una” is nationwide, while “pues” is a paisa signature.",
          related: ["de una", "listo pues", "hágale", "eso"],
          example: {
            target: "—¿Te ayudo? —¡De una, pues!",
            translation: "—Shall I help you? —For sure!"
          }
        }
      ],
      note:
        "“Necesitar” is easy to conjugate and easy to overuse. A bare “necesito que me ayudes” aimed at a neighbor can land like an order, so Colombians soften need into a favour: “¿me colaborás?”, “¿me regalás…?”, “¿me hacés un favorcito?”. Two grammar notes travel with it: “necesitar que” takes the subjunctive, and to “borrow” you flip to “prestar” — you ask the other person to lend, because Spanish has no everyday verb for borrowing.",
      culture: [
        {
          label: "Need, wrapped as a favour",
          body:
            "Colombians rarely fire a naked “necesito” at another person. A flat “necesito que me ayudes” can sound like an order barked across a counter, so the need gets dressed up: “¿me colaborás?”, “¿me regalás un momentico?”, “¿me hacés un favorcito?”. The requirement underneath is the same; the packaging is what makes it neighborly. Learners who state needs bluntly aren't rude on purpose, but they can come across that way. Softening here is not weakness — it is the ordinary social lubricant."
        },
        {
          label: "Paisa voseo: vos, pues, de una",
          body:
            "In Medellín and across Antioquia, neighbors use vos, not tú: “¿vos qué necesitás?”, “prestámelo”, “vení”. It travels with a handful of regional tics — “pues” sprinkled through sentences, “de una” for an enthusiastic yes, “¡hágale!” for go-ahead. Vos here is warm and everyday, not rude, and it mixes freely with usted even inside a single conversation. Copying the paisa music — vos plus “pues” — instantly signals you've spent real time in the city, not just studied the grammar."
        },
        {
          label: "Borrow doesn't exist — you make them lend",
          body:
            "English lets you borrow directly; Spanish makes you flip the transaction. There is no everyday single verb for “to borrow”, so you ask the other person to lend: “¿me prestás el taladro?” — will you lend me the drill? Learners often grope for a “borrow” verb and stall halfway through the sentence. Train yourself to reach for “prestar” from the lender's side, add the “me”, and the whole exchange falls into place. Return it later with “aquí te devuelvo lo que me prestaste”."
        },
        {
          label: "“Para eso estamos los vecinos”",
          body:
            "Neighborliness in Colombia is spoken aloud. Lend a drill or a cup of sugar and you'll hear “para eso estamos los vecinos” — that's what neighbors are for — or simply “para eso somos”. It frames the favour as ordinary, expected and mutual. Accepting help graciously matters as much as giving it; the right reply is warmth, not over-apology. In a paisa building this small economy of borrowed tools and returned pots is real social glue, and joining in marks you as part of the place."
        }
      ],
      pitfalls: [
        {
          mistake: "Necesito que me ayudas.",
          whyItFails:
            "“Necesitar que” demands the subjunctive, so it is “ayudes”, not the indicative “ayudas”. The indicative here is one of the most audible learner slips — the grammar screams foreigner even though the words are understood.",
          sayInstead: "Necesito que me ayudes."
        },
        {
          mistake: "Necesito borrar tu taladro.",
          whyItFails:
            "“Borrar” means to erase, not to borrow — a false friend for English “borrow”. There is no single “borrow” verb; you flip it to “prestar” and ask the owner to lend it.",
          sayInstead: "¿Me prestás el taladro?"
        },
        {
          mistake: "Necesito que subás ya.",
          whyItFails:
            "Grammatically fine, but a bare, command-like “necesito que subás ya” lands as bossy with a neighbor. Colombians cushion it into a favour; the problem here is register, not grammar.",
          sayInstead: "¿Me colaborás subiendo un momentico?"
        },
        {
          mistake: "Necesito para que me ayudés.",
          whyItFails:
            "The “para” is a calque of English “I need for you to…”. Spanish uses “necesito que + subjuntivo” with no “para”: “necesito que me ayudés”. The extra word breaks the structure.",
          sayInstead: "Necesito que me ayudés."
        }
      ],
      variations: [
        {
          form: "¿Me regalás el taladro un ratico?",
          register: "friendly informal",
          region: "Medellín and Antioquia (paisa)",
          whenToUse: "Warmly borrowing something small from a neighbor, in vos."
        },
        {
          form: "¿Me hacés el favor y me prestás el taladro?",
          register: "friendly informal",
          region: "Medellín and Antioquia (paisa)",
          whenToUse: "Adding “¿me hacés el favor?” when the ask feels a touch bigger."
        },
        {
          form: "¿Me puede prestar el taladro, don Norbey?",
          register: "polite formal",
          region: "General Colombian (usted)",
          whenToUse: "The same request in usted, for an older neighbor or a first contact."
        },
        {
          form: "Necesito que me colaborés con la pared.",
          register: "friendly informal",
          region: "Medellín and Antioquia (paisa)",
          whenToUse: "Stating a need that requires the other person's action, softened with “colaborar”."
        },
        {
          form: "¿Será que me prestás el taladro?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "“¿Será que…?” hedges the request, making it feel tentative and polite."
        }
      ],
      prompt: "Alex wants to borrow Norbey's drill. Since Spanish has no everyday verb for “borrow”, what does he actually say?",
      choices: [
        "He flips it around and asks Norbey to lend: “¿me prestás el taladro?” — will you lend it to me for a bit?",
        "He uses the false friend and says “¿me borrás el taladro?”, which really asks Norbey to erase the drill.",
        "He states the need flatly with “necesito el taladro ya”, which comes across as a demand to a neighbor."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Why do Colombians often avoid a flat “necesito que me ayudes” with a neighbor?",
          choices: [
            "Because a bare need can sound like an order, so they soften it into a favour: “¿me colaborás?”.",
            "Because “necesitar” is considered rude in Colombia and has been quietly replaced everywhere by “colaborar”.",
            "Because neighbors only ever respond to usted, so the tú or vos form of “ayudar” would just be ignored."
          ],
          answer: 0,
          tests: "softening a need into a favour"
        },
        {
          prompt: "Which sentence correctly says “I need you (vos) to help me”?",
          choices: [
            "Necesito que me ayudás.",
            "Necesito que me ayudés.",
            "Necesito para que me ayudés."
          ],
          answer: 1,
          tests: "necesitar que + subjunctive (vos form)"
        },
        {
          prompt: "A learner says “necesito borrar tu taladro.” What did they accidentally say?",
          choices: [
            "That they need to borrow the drill, phrased a little informally but still perfectly understandable.",
            "That they need to ERASE the drill — “borrar” is to erase, a false friend of the English “borrow”.",
            "That they need to give the drill back, since “borrar” carries the sense of returning something lent."
          ],
          answer: 1,
          tests: "“borrar” (erase) as a false friend of borrow"
        },
        {
          prompt: "Soften “I need you to come up now” for a paisa neighbor. Which fits best?",
          choices: [
            "Necesito que subás ya mismo.",
            "Subí ya, que te necesito arriba.",
            "¿Me colaborás subiendo un momentico?"
          ],
          answer: 2,
          tests: "softening a need with colaborar plus a diminutive"
        }
      ]
    },
    en: {
      title: "Pedirle prestado el taladro al vecino",
      situation:
        "Alejandra vive en Houston y necesita colgar una repisa, pero no tiene taladro. Toca la puerta de Mike, el vecino del frente, para pedírselo prestado y, de paso, una mano con la pared. Usted tiene que plantear la necesidad sin sonar mandona, pedir prestado bien y aceptar la ayuda. En inglés, además, hay que separar “borrow” de “lend”.",
      setting: {
        who: "Mike vive al frente desde hace años, tiene una caja de herramientas completa y es conversador. Alejandra llegó a Houston hace poco y todavía se está acostumbrando a pedir las cosas en inglés.",
        what: "Un intercambio corto en la puerta en el que Alejandra pide prestado un taladro y termina con una oferta de ayuda con las manos también.",
        when: "Un sábado por la tarde, la hora clásica para los arreglos pequeños de la casa y para encontrar a los vecinos disponibles.",
        where: "Houston, un edificio de apartamentos amable donde los vecinos se prestan herramientas y se saludan en el pasillo.",
        why: "Porque un taladro prestado y una mano son la manera en que los vecinos se vuelven aliados, y porque plantear una necesidad demasiado en seco puede agriar un primer favor antes de que te lo concedan."
      },
      address: {
        form: "mixed",
        who: "El inglés no separa tú de usted: “you” vale para Mike y para cualquiera. La confianza se nota en el tono y en las palabras, no en el pronombre.",
        why: "En inglés la cortesía no cambia el pronombre sino el envoltorio: “Could you…?” suena cuidadoso y “Can I…?” suena cercano, pero ambos usan el mismo “you” para todo el mundo.",
        ifYouSwitch:
          "No hay un pronombre más respetuoso al que pasar: para suavizar cambias el modal (“could”, “would”) y añades “please”; el “you” se queda igual con el vecino y con un desconocido."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Hi Mike! Could you do me a small favour? I need a drill.",
          translation: "¡Hola, Mike! ¿Me hacés un favorcito? Necesito un taladro.",
          pronunciation: "jai maik! kud iú du mi a smol FÉI-vor? ai nid a dril",
          literal: "¡Hola, Mike! ¿Podrías hacerme un pequeño favor? Necesito un taladro.",
          why: "“I need a drill” es directo, pero “Could you do me a small favour?” lo suaviza antes. En inglés la cortesía no cambia el verbo “need”; se apoya en el marco “could you…?”."
        },
        {
          speaker: "Mike",
          target: "Sure! What do you need?",
          translation: "¡Claro! ¿Qué necesitás?",
          pronunciation: "shúr! uót du iú nid",
          literal: "¡Claro! ¿Qué necesitas tú?",
          why: "“What do you need?” — el inglés usa “need” tal cual, sin las variantes de vos o tú. Un solo verbo, sin las formas “necesitás / necesitas” que cambian según la región."
        },
        {
          speaker: "Alejandra",
          target: "I need to hang a shelf and I've got nothing to do it with. Could I borrow yours?",
          translation: "Necesito colgar una repisa y no tengo con qué. ¿Me lo prestás?",
          pronunciation: "ai nid tu jang a shelf and aiv got NÓ-zin tu du it uíz. kud ai BÓ-rou iórs",
          literal: "Necesito colgar una repisa y tengo nada para hacerlo con. ¿Podría yo tomar prestado el tuyo?",
          why: "“Could I borrow yours?” es la clave: el inglés SÍ tiene un verbo para “tomar prestado”, que es “borrow”. Ojo: “borrow” es pedir prestado; “lend” es prestar. No los inviertas."
        },
        {
          speaker: "Mike",
          target: "Of course. And if you need a hand, I can come up.",
          translation: "Claro. Y si necesitás que te eche una mano, yo subo.",
          pronunciation: "of kors. and if iú nid a jand, ai can kom op",
          literal: "Por supuesto. Y si necesitas una mano, yo puedo subir.",
          why: "“If you need a hand” usa “need + sustantivo” sin “that”. Para “necesito que te eche una mano” el inglés dice “if you need me to give you a hand” — con “me to”, nunca con “that”."
        },
        {
          speaker: "Alejandra",
          target: "Oh, yes please! I really do need your help — that wall is tricky.",
          translation: "¡Uy, de una! De verdad necesito que me colaborés, que esa pared es complicada.",
          pronunciation: "óu, ies plis! ai RÍ-li du nid iór jelp — dat uol is TRÍ-ki",
          literal: "¡Oh, sí por favor! Yo realmente sí necesito tu ayuda — esa pared es complicada.",
          why: "El “do” enfático refuerza “need”. Fíjate que la acción de otra persona se pide con “I need you to help me” (con infinitivo), nunca con “I need that you help me”; aquí Alejandra usa “need” con el sustantivo “your help”."
        },
        {
          speaker: "Mike",
          target: "No problem. Let me grab my stuff and I'll be right up — that's what neighbors are for.",
          translation: "Listo pues. Deme un momentico que cojo las cosas y ya subo, que para eso somos los vecinos.",
          pronunciation: "nou PRÓ-blem. let mi grab mai stof and ail bi rait op — dats uót NÉI-bors ar for",
          literal: "No problema. Déjame agarrar mis cosas y estaré justo arriba — eso es para lo que están los vecinos.",
          why: "“That's what neighbors are for” es el calco exacto de “para eso somos / estamos los vecinos”. “Let me grab my stuff” — “grab” es coger o agarrar de manera informal."
        }
      ],
      vocabulary: [
        {
          term: "need",
          explanation:
            "Necesitar. Un solo verbo, sin conjugación de tú o vos: “I need”, “you need”, “she needs”. Directo, aunque en inglés se suaviza con el marco cortés, no con el verbo.",
          literal: "necesitar",
          useWhen:
            "Para expresar una necesidad: “I need help”, “what do you need?”.",
          avoidWhen:
            "Como orden pelada a una persona; suávizalo con un “could you…?” por delante.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["require", "could use", "have to", "want"],
          example: {
            target: "What do you need?",
            translation: "¿Qué necesitás?"
          }
        },
        {
          term: "need to (+ verb)",
          explanation:
            "Necesitar hacer algo, cuando la acción es tuya: “I need to hang a shelf”. Lleva “to” más el verbo, sin un sujeto nuevo.",
          literal: "necesitar (+ infinitivo)",
          useWhen:
            "Para tus propias acciones: “I need to leave”, “I need to buy a drill”.",
          avoidWhen:
            "Cuando la acción es de OTRA persona; ahí va “I need you to…”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["have to", "got to", "need to go", "must"],
          example: {
            target: "I need to hang a shelf.",
            translation: "Necesito colgar una repisa."
          }
        },
        {
          term: "need someone to (+ verb)",
          explanation:
            "“Necesito que alguien haga algo.” El inglés NO usa “that”: dice “I need you to help me”, con “you” más “to” más el verbo. Es el equivalente de “necesitar que + subjuntivo”.",
          literal: "necesitar que (alguien haga)",
          useWhen:
            "Cuando la acción depende de otra persona: “I need you to come”, “she needs him to sign”.",
          avoidWhen:
            "No digas “I need that you help”; ese “that” es un calco directo del español.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I need you to", "I'd like you to", "can you", "I want you to"],
          example: {
            target: "I need you to help me.",
            translation: "Necesito que me colaborés."
          }
        },
        {
          term: "borrow",
          explanation:
            "Pedir prestado o tomar prestado: recibir algo que después devolverás. Es lo que el español dice con “¿me prestás?” pero desde el otro lado.",
          literal: "tomar prestado",
          useWhen:
            "Cuando TÚ recibes lo prestado: “Can I borrow your drill?”, “I borrowed a pen”.",
          avoidWhen:
            "No es prestar (dar): eso es “lend”. Y no digas “borrow me”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["lend", "can I borrow", "give back", "return"],
          example: {
            target: "Can I borrow your drill?",
            translation: "¿Me prestás el taladro?"
          }
        },
        {
          term: "lend",
          explanation:
            "Prestar: dar algo que te devolverán. Es la otra cara de “borrow”. “Can you lend me…?” equivale a “¿me prestás…?”.",
          literal: "prestar",
          useWhen:
            "Cuando TÚ das lo prestado, o pides que te presten: “Can you lend me your drill?”.",
          avoidWhen:
            "No lo confundas con “borrow”; “borrow me your drill” está mal.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["borrow", "lend me", "loan", "give back"],
          example: {
            target: "Can you lend me your drill?",
            translation: "¿Me prestás el taladro?"
          }
        },
        {
          term: "do me a favour",
          explanation:
            "Hacer(me) un favor. El abridor cálido para una petición, igual que “¿me hacés un favorcito?”.",
          literal: "hacerme un favor",
          useWhen:
            "Para abrir un pedido: “Could you do me a favour?”.",
          avoidWhen:
            "En peticiones muy formales, donde va un “Would you be so kind as to…?”.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["could you help me out", "give me a hand", "would you mind", "a quick favour"],
          example: {
            target: "Could you do me a small favour?",
            translation: "¿Me hacés un favorcito?"
          }
        },
        {
          term: "that's what neighbors are for",
          explanation:
            "“Para eso somos / estamos los vecinos.” La fórmula que enmarca el favor como algo normal y mutuo.",
          literal: "para eso están los vecinos",
          useWhen:
            "Al restarle importancia a un favor entre vecinos: “Anytime — that's what neighbors are for.”.",
          avoidWhen:
            "En contextos formales o de negocios, donde suena demasiado casero.",
          register: "friendly informal",
          region: "Inglés universal; el sentimiento es idéntico al colombiano.",
          related: ["anytime", "happy to help", "no problem", "don't mention it"],
          example: {
            target: "That's what neighbors are for.",
            translation: "Para eso somos los vecinos."
          }
        }
      ],
      note:
        "El inglés usa un solo “need”, sin conjugación de tú o vos, pero cuida tres cosas. Para la acción de otra persona es “I need you to help me” (con “to”), nunca “I need that you help me”. El inglés separa “borrow” (pedir prestado) de “lend” (prestar): no digas “borrow me your drill”. Y como el verbo no cambia para ser cortés, la suavidad va en “could you…?”, “would you mind…?”.",
      culture: [
        {
          label: "La cortesía vive en el modal, no en el verbo",
          body:
            "En español suavizas una necesidad cambiando la fórmula: “¿me colaborás?”, “¿me regalás?”. En inglés, “need” no cambia; la cortesía se monta encima con un modal: “Could you…?”, “Would you mind…?”, “I was wondering if…”. “I need you to lend me the drill” es correcto pero suena a orden; “Could I borrow your drill?” abre la puerta. La lección es la misma que en Colombia —no pidas en seco— pero la herramienta es distinta: modales y “please”, no un verbo más amable."
        },
        {
          label: "Borrow y lend: dos verbos donde el español tiene uno",
          body:
            "El español lo resuelve todo con “prestar” y volteando la frase (“¿me prestás?”). El inglés separa las dos direcciones: “borrow” es recibir prestado, “lend” es dar prestado. “Can I borrow your drill?” (yo recibo) frente a “Can you lend me your drill?” (tú das). El error estrella del hispanohablante es “Can you borrow me your drill?”, que mezcla las dos. Regla rápida: si el objeto viene HACIA ti, “borrow”; si sale DE ti, “lend”. Practícalo hasta que salga solo."
        },
        {
          label: "“I need you to”, no “I need that you”",
          body:
            "Cuando la acción depende de otra persona, el español usa “necesito que + subjuntivo”. El inglés jamás dice “I need that you help me”: usa el infinitivo con “to” — “I need you to help me”, “she needs him to sign”. Es una de las estructuras que más delatan la traducción literal. Cámbiala por el molde “need + persona + to + verbo” y sonará natural. El mismo patrón sirve con “want” y “would like”: “I want you to…”, “I'd like you to…”."
        },
        {
          label: "Pedir prestado entre vecinos",
          body:
            "La economía de tazas de azúcar y taladros prestados existe igual en Canadá, sólo que con otras palabras. Se abre con “Could you do me a favour?” o “Do you happen to have…?”, se pide con “Could I borrow…?”, y se cierra con “That's what neighbors are for” o “Anytime”. Devolver a tiempo y con un “thanks so much for lending me this” mantiene la buena vecindad. La calidez es la misma; lo que cambia son las fórmulas fijas, y aprenderte tres o cuatro te integra rápido."
        }
      ],
      pitfalls: [
        {
          mistake: "“Can you borrow me your drill?”",
          whyItFails:
            "Mezcla “borrow” (recibir prestado) con “lend” (dar prestado). Si pides que te presten, es “lend”: “Can you lend me…?”, o si no “Can I borrow…?”. “Borrow me” no funciona.",
          sayInstead: "Can you lend me your drill?"
        },
        {
          mistake: "“I need that you help me.”",
          whyItFails:
            "Es un calco de “necesito que me ayudes”. El inglés no usa “that” aquí: dice “I need you to help me”, con “you” más “to” más el verbo.",
          sayInstead: "I need you to help me."
        },
        {
          mistake: "“I have need of a hand.”",
          whyItFails:
            "Suena arcaico y calcado de “tengo necesidad de”. El inglés natural es simplemente “I need a hand”. Usa el verbo “need”, no el rodeo con “have need of”.",
          sayInstead: "I need a hand."
        },
        {
          mistake: "“I need you to lend me the drill now.”",
          whyItFails:
            "Correcto en gramática, pero sin suavizar suena a orden. La cortesía inglesa va en el modal: “Could you lend me…?”. Entre vecinos, un “need… now” cae brusco.",
          sayInstead: "Could you lend me the drill for a bit?"
        }
      ],
      variations: [
        {
          form: "Could I borrow your drill?",
          register: "polite",
          region: "Inglés universal",
          whenToUse: "La forma segura y cortés de pedir algo prestado."
        },
        {
          form: "Could you lend me your drill?",
          register: "polite",
          region: "Inglés universal",
          whenToUse: "Lo mismo desde el lado de quien presta; igual de cortés."
        },
        {
          form: "Do you happen to have a drill I could borrow?",
          register: "polite",
          region: "Inglés universal",
          whenToUse: "Extra suave cuando no sabes si el otro tiene la cosa."
        },
        {
          form: "Any chance I could borrow your drill?",
          register: "friendly informal",
          region: "Inglés norteamericano",
          whenToUse: "Relajado y cercano, entre vecinos que ya se conocen."
        },
        {
          form: "I need you to give me a hand with this.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Cuando la acción depende del otro; directo pero claro."
        }
      ],
      prompt: "Alejandra quiere pedirle prestado el taladro a Mike. ¿Cuál es la forma correcta en inglés?",
      choices: [
        "Can I borrow your drill?",
        "Can you borrow me your drill?",
        "Can I lend your drill from you, please?"
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál es la diferencia entre “borrow” y “lend”?",
          choices: [
            "Son sinónimos exactos; “borrow” es británico y “lend” es la forma que se usa en Norteamérica.",
            "“Borrow” es para objetos y “lend” es sólo para dinero, nunca para herramientas u otras cosas.",
            "“Borrow” es pedir o recibir prestado (viene hacia ti); “lend” es prestar (sale de ti hacia otro)."
          ],
          answer: 2,
          tests: "borrow (recibir) vs lend (dar)"
        },
        {
          prompt: "¿Por qué está mal “I need that you help me”?",
          choices: [
            "Porque en inglés “need” con acción ajena va “I need you to help me”, con infinitivo; el “that” es un calco.",
            "Porque “help” siempre necesita un objeto directo, y sin “with something” al final la frase queda incompleta.",
            "Porque “need” no puede llevar a otra persona; habría que decir “I want that you help me” en su lugar."
          ],
          answer: 0,
          tests: "need + persona + to, no “that”"
        },
        {
          prompt: "¿Cuál dice correctamente “necesito colgar una repisa”?",
          choices: [
            "I need that I hang a shelf.",
            "I need to hang a shelf.",
            "I have need of hanging a shelf."
          ],
          answer: 1,
          tests: "need to + verbo para una acción propia"
        },
        {
          prompt: "En inglés, ¿cómo se suaviza una petición si el verbo “need” no cambia?",
          choices: [
            "Con un modal cortés por delante: “Could you…?”, “Would you mind…?”, en vez de un “I need… now”.",
            "Conjugando “need” en su forma de usted, que en inglés reemplaza al “you” informal de siempre.",
            "Repitiendo “please” tres veces al final, que es la única manera de sonar cortés en inglés."
          ],
          answer: 0,
          tests: "la cortesía va en el modal, no en el verbo"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/13-foundation-asking.js");
