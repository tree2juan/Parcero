/*
 * Lesson block: foundation / comparing and degree (grammar, not verbs).
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules -- `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * These three lessons are GRAMMAR lessons. Each spines on exactly one entry
 * from data/structures.js, named in its `structure` field, and carries no
 * `verb`. That is how the coverage report proves the structure curriculum is
 * actually taught rather than merely listed, exactly as test/shape.test.js and
 * scripts/check-lesson-block.js require.
 *
 * The three structures here -- comparison-inequality, comparison-equality and
 * superlatives -- close a measured hole in the corpus: 7 comparatives, no
 * "tan ... como" at all, and superlatives left unexplained. The settings sit
 * squarely on the Caribbean coast (Barranquilla, Santa Marta, Valledupar) so
 * the dialect on show is costeño -- dropped -s, "erda", "ajá", "¿oíste?" --
 * rather than the usual Bogotá and Medellín. The two directions mirror: same
 * number of dialogue turns, vocabulary entries, culture notes, pitfalls,
 * variations and practice questions, with the taught pattern actually spoken.
 */
lessons.push(
  {
    id: "comparing-two-fans-at-a-barranquilla-stall",
    level: "Starter · Shopping",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "shopping-and-money",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    structure: "comparison-inequality",
    review: "pending",
    es: {
      title: "¿Cuál ventilador es más barato?",
      situation:
        "Emma is shopping in a San Andresito in Barranquilla, in a relentless midday heat. She wants a fan, and Dani, the young man running the stall, shows her two: a name-brand one and a basic one. Over the noise of the market, they compare price, quality, and size so she can decide which one to take.",
      setting: {
        who: "Dani runs an appliance stall and knows his stock cold; he sells with the fast, teasing warmth of the coast. Emma is a US student a few weeks into living in Barranquilla, buying her first fan and her first real dose of costeño Spanish.",
        what: "A buying decision built entirely on comparisons: which of two fans is cheaper, which is better made, which is smaller, and whether the price is really more than twenty thousand pesos.",
        when: "A punishing mid-afternoon heat, the hour when a fan stops being a luxury and becomes survival.",
        where: "Barranquilla, on the Caribbean coast, at a stall in a San Andresito market.",
        why: "Comparing two things -- cheaper, better, worse, older, more than -- is the everyday grammar of any market, and the corpus barely teaches it. Get the comparative right and you can shop, haggle and choose anywhere."
      },
      address: {
        form: "tú",
        who: "Dani and Emma use tú. On the coast a vendor and a young customer slip into tú almost at once, and Dani sprinkles in warm tags like mi amor and ¿oíste?.",
        why: "The Caribbean coast leans to tú where the Andean interior would reach for usted. Between a stall-holder and a young buyer it sounds friendly and normal, not forward; usted here would feel oddly stiff.",
        ifYouSwitch:
          "If Emma answered in careful usted, Dani would still understand her perfectly, but it would put a small counter of distance between them -- polite, a bit formal, the opposite of the easy market banter that tú invites."
      },
      dialogue: [
        {
          speaker: "Dani",
          target: "Ajá, mi amor, mira: este ventilador es más barato que aquel, ¿oíste?",
          translation: "So, love, look: this fan is cheaper than that one, all right?",
          pronunciation: "a-HÁ, mi a-MOR, MI-ra: EH-te ven-ti-la-DOR eh MÁ ba-RA-to ke a-KEL, oy-TE",
          literal: "Aha, my love, look: this fan is more cheap than that-one, you-heard?",
          why: "The core pattern is “más + adjective + que”: “más barato que” = cheaper than. There is no separate word for “-er”; Spanish just puts “más” before the plain adjective. “Ajá” and “¿oíste?” are pure coastal fillers, and dropped -s turns “más” into “má” and “este” into “eh-te” in speech."
        },
        {
          speaker: "Emma",
          target: "¿Y por qué este es más corriente que el otro? Se ven igualitos.",
          translation: "And why is this one more basic than the other? They look identical.",
          pronunciation: "i por KE EH-te eh MÁ ko-RYEN-te ke el O-tro? se ven i-gwa-LI-toh",
          literal: "And why this is more basic than the other? Themselves they-look identical-little.",
          why: "Emma reuses the same frame with a new adjective: “más corriente que” = more basic than. In Colombia “corriente” means cheap-and-basic, not “current”. “Igualito”, the diminutive of “igual”, softens “identical” into “they look just the same”."
        },
        {
          speaker: "Dani",
          target: "Erda, no. El de marca es mejor que el corriente, y sale menos caro que mandarlo a arreglar.",
          translation: "Come on, no. The brand-name one is better than the basic one, and it works out less expensive than getting it repaired.",
          pronunciation: "ER-da, no. el de MAR-ka eh me-HOR ke el ko-RYEN-te, i SA-le ME-noh KA-ro ke man-DAR-lo a a-rre-GLAR",
          literal: "Wow, no. The of brand is better than the basic, and it-comes-out less expensive than to-send-it to fix.",
          why: "Two comparatives at once. “Mejor que” is the irregular comparative of “bueno” -- better than -- and you must never say “más bueno que”. Then “menos caro que” = less expensive than, the mirror frame with “menos”. “Erda” is the coast's soft exclamation of surprise."
        },
        {
          speaker: "Emma",
          target: "Pero cuesta más de veinte mil. ¿No hay uno menor que ese precio?",
          translation: "But it costs more than twenty thousand. Isn't there one under that price?",
          pronunciation: "PE-ro KWEH-ta MÁ de VEIN-te mil. no ai U-no me-NOR ke E-se PRE-syo",
          literal: "But it-costs more of twenty thousand. Not there-is one smaller than that price?",
          why: "Before a number you switch from “que” to “de”: “más de veinte mil”, more than twenty thousand -- saying “más que veinte mil” is the classic slip. “Menor que” is the irregular comparative for a lower amount or a younger age, here “lower than that price”."
        },
        {
          speaker: "Dani",
          target: "Ajá, este chiquito es menor que el grande en tamaño, pero mueve más aire que muchos.",
          translation: "Right, this little one is smaller than the big one in size, but it moves more air than plenty of them.",
          pronunciation: "a-HÁ, EH-te chi-KI-to eh me-NOR ke el GRAN-de en ta-MA-ño, PE-ro MWE-ve MÁ AI-re ke MU-choh",
          literal: "Aha, this little is smaller than the big in size, but it-moves more air than many.",
          why: "“Menor que” again, now for physical size -- smaller than. Then back to the regular frame, “más aire que”, more air than. Colombians happily stack these frames in one sentence; the trick is keeping “más/menos … que” together around the right word."
        },
        {
          speaker: "Emma",
          target: "Entonces el corriente es peor que el de marca. Me llevo el mejor, pues.",
          translation: "So the basic one is worse than the brand-name one. I'll take the better one, then.",
          pronunciation: "en-TON-ses el ko-RYEN-te eh PEOR ke el de MAR-ka. me YE-vo el me-HOR, pweh",
          literal: "So the basic is worse than the of brand. Myself I-take the best, then.",
          why: "“Peor que” is the irregular comparative of “malo” -- worse than -- the twin of “mejor” and never “más malo que”. “El mejor” drifts into the superlative (“the best one”), which the next block picks up. The tag “pues” is a soft Colombian rounding-off."
        }
      ],
      vocabulary: [
        {
          term: "más … que",
          explanation:
            "The all-purpose comparative of superiority: more … than. You put “más” before a plain adjective and “que” after it, with nothing standing in for the English “-er”.",
          literal: "more … than",
          useWhen:
            "Comparing two things where one has more of a quality: “más caro que”, “más rápido que”, “más grande que”.",
          avoidWhen:
            "The adjective is bueno, malo or an age -- those take the irregulars mejor, peor, mayor, menor instead.",
          register: "neutral",
          region: "Universal Spanish; the everyday comparative everywhere in Colombia.",
          related: ["menos … que", "mejor", "tan … como", "el más …"],
          example: {
            target: "Este ventilador es más barato que aquel.",
            translation: "This fan is cheaper than that one."
          }
        },
        {
          term: "menos … que",
          explanation:
            "The mirror of “más … que”: less … than, for the thing that has less of a quality. The adjective stays plain between the two words.",
          literal: "less … than",
          useWhen:
            "Downgrading in a comparison: “menos caro que”, “menos ruidoso que”, “menos potente que”.",
          avoidWhen:
            "You mean two things are equal -- that is “tan … como”, not “menos … que”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["más … que", "peor", "tan … como", "igual de"],
          example: {
            target: "Sale menos caro que arreglar el viejo.",
            translation: "It works out cheaper than fixing the old one."
          }
        },
        {
          term: "mejor",
          explanation:
            "The one-word comparative of “bueno”: better. There is no “más bueno” in normal speech; the comparison lives inside the word itself.",
          literal: "better",
          useWhen:
            "Saying one thing is better: “mejor que el otro”, “mucho mejor”, “el mejor de todos”.",
          avoidWhen:
            "You are simply calling someone kind -- “es muy bueno” stays, but any comparison of it is still “mejor”.",
          register: "neutral",
          region: "Universal Spanish; “más bueno” marks a beginner everywhere.",
          related: ["peor", "bueno", "mucho mejor", "el mejor"],
          example: {
            target: "El de marca es mejor que el corriente.",
            translation: "The brand-name one is better than the basic one."
          }
        },
        {
          term: "peor",
          explanation:
            "The one-word comparative of “malo”: worse. Like “mejor”, it swallows the “más” -- never “más malo” for quality.",
          literal: "worse",
          useWhen:
            "Saying one thing is worse: “peor que el otro”, “cada vez peor”, “el peor del montón”.",
          avoidWhen:
            "You mean naughty or morally bad about a person, where “más malo” can appear; for quality it is “peor”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["mejor", "malo", "cada vez peor", "el peor"],
          example: {
            target: "El corriente es peor que el de marca.",
            translation: "The basic one is worse than the brand-name one."
          }
        },
        {
          term: "mayor / menor",
          explanation:
            "The irregular pair for older/younger and, more broadly, a greater or lesser amount. “Mayor” is older or greater, “menor” younger or lesser.",
          literal: "older/greater — younger/lesser",
          useWhen:
            "Ages of people (mi hermano mayor) and amounts (menor que ese precio).",
          avoidWhen:
            "Plain physical bigness of an object, where “más grande / más pequeño” is more natural than mayor/menor.",
          register: "neutral",
          region: "Universal Spanish; for a sibling's age mayor/menor is the standard.",
          related: ["más grande", "más pequeño", "el mayor", "el menor"],
          example: {
            target: "¿No hay uno menor que ese precio?",
            translation: "Isn't there one under that price?"
          }
        },
        {
          term: "más de + número",
          explanation:
            "Before a number the comparative switches from “que” to “de”: más de veinte, more than twenty. It counts a quantity rather than comparing two things.",
          literal: "more than + number",
          useWhen:
            "Any amount with a figure: “más de mil pesos”, “menos de diez minutos”, “más de la mitad”.",
          avoidWhen:
            "You are comparing two nouns rather than counting -- then it is “que”: más caro que ese.",
          register: "neutral",
          region: "Universal Spanish; “más que veinte” for a number is a very common learner slip.",
          related: ["menos de", "más … que", "casi", "alrededor de"],
          example: {
            target: "Cuesta más de veinte mil.",
            translation: "It costs more than twenty thousand."
          }
        },
        {
          term: "corriente",
          explanation:
            "In Colombia “corriente” describes something cheap and basic -- ordinary, unbranded, low-end -- not the English “current”. A menú corriente is the plain set lunch.",
          literal: "ordinary / basic",
          useWhen:
            "Marking the no-frills option: “un ventilador corriente”, “una tela corriente”, “el almuerzo corriente”.",
          avoidWhen:
            "You mean electrical current or a water current -- that is “la corriente”, the noun, a different sense.",
          register: "friendly informal",
          region: "Colombia and much of Latin America; very common on the coast for the cheap version.",
          related: ["barato", "sencillo", "de marca", "genérico"],
          example: {
            target: "Este es el corriente, no el de marca.",
            translation: "This is the basic one, not the brand-name one."
          }
        }
      ],
      note:
        "Spanish builds nearly all its comparisons with two little frames: “más … que” (more … than) and “menos … que” (less … than), wrapped around a plain adjective. Four everyday words break the pattern and must be learned whole: “mejor” (better) and “peor” (worse) instead of “más bueno/malo”, and “mayor/menor” for older/younger or a greater/lesser amount. One more trap: the moment a number appears, “que” becomes “de” -- “más de veinte mil”, not “más que veinte mil”. Get those three things right and you can compare almost anything in a Colombian market.",
      culture: [
        {
          label: "How the coast eats its -s",
          body:
            "Costeño Spanish, the accent of Barranquilla, softens or drops the -s at the end and even the middle of words. “Más” comes out “má”, “los dos” sounds like “loh do”, and “este” becomes “eh-te”. The comparative is still built exactly the same way -- “más barato que” -- you just hear the “más” lightly, almost swallowed. Learners panic that the grammar changed; it did not, only the sound did."
        },
        {
          label: "Ajá, erda and the music of the market",
          body:
            "A Barranquilla stall runs on warm little words. “Ajá” means right, go on, exactly, and keeps a conversation moving; “erda” (a soft cousin of a stronger word) is surprise or emphasis; “¿oíste?” tags the end of a sentence like “you hear?”. None of it is rude -- it is the friendly, fast texture of coastal talk, and answering in the same spirit marks you as someone at ease there."
        },
        {
          label: "Corriente is not an insult",
          body:
            "Calling the cheap fan “el corriente” is not run-down or broken; it just means ordinary, unbranded, no-frills. Colombia uses “corriente” all over the place this way -- the almuerzo corriente is the honest set lunch every worker eats. Reaching for the corriente version is normal and canny, not a confession of poverty, and a vendor will happily explain why the de marca costs more."
        },
        {
          label: "Bargaining without a fight",
          body:
            "At a San Andresito or a street stall, comparing out loud -- this one is cheaper, that one is better made -- is itself the opening move of a friendly negotiation. You are not haggling by demanding a discount; you are reasoning about value, and the vendor answers in kind. A smile, a little back-and-forth and a “¿me hace un descuentico?” gets you further than hard bargaining ever will."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “más bueno que” or “más malo que”",
          whyItFails:
            "Bueno and malo have irregular comparatives that swallow the “más”: mejor and peor. “Más bueno que” and “más malo que” are understood but instantly mark a beginner, and to a Colombian ear they sound as odd as “more better” does in English.",
          sayInstead: "El de marca es mejor que el corriente."
        },
        {
          mistake: "Using “más que” before a number",
          whyItFails:
            "Comparisons of two things use “que”, but the moment you put a figure in, Spanish wants “de”: más de veinte mil. “Más que veinte mil” sounds like a half-finished comparison and is one of the most common learner slips there is.",
          sayInstead: "Cuesta más de veinte mil pesos."
        },
        {
          mistake: "Stacking “más mejor” for emphasis",
          whyItFails:
            "“Mejor” already contains the “more”, so “más mejor” doubles it, exactly like “more better” in English. To intensify, reach for “mucho mejor” or “muchísimo mejor”, which pile on the degree without breaking the grammar.",
          sayInstead: "Este es mucho mejor que el otro."
        },
        {
          mistake: "Using “más viejo que” for a person's age",
          whyItFails:
            "For how old a person is, Colombians use “mayor” and “menor”, not “más viejo/joven”. “Más viejo que yo” about your brother sounds blunt, almost like calling him worn out; “mayor que yo” is the neutral, normal way to say he is older.",
          sayInstead: "Mi hermano es mayor que yo."
        }
      ],
      variations: [
        {
          form: "Este es más barato que aquel.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The plain comparison of price between two things."
        },
        {
          form: "El de marca es mejor que el corriente.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Quality, using the irregular “mejor” rather than “más bueno”."
        },
        {
          form: "Cuesta más de veinte mil.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "An amount with a number, where “que” becomes “de”."
        },
        {
          form: "Mi hermano es mayor que yo.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A person's age, with the irregular “mayor/menor”."
        }
      ],
      prompt: "Dani says the branded fan “es mejor que el corriente.” Why mejor and not “más bueno”?",
      choices: [
        "Because Spanish treats bueno as a regular adjective, so “más bueno que” is the ordinary way to say better than.",
        "Because “mejor” talks about the price only, while “más bueno” would be the right choice for the fan's quality.",
        "Because bueno has an irregular comparative, “mejor”, so better than is “mejor que” and never “más bueno que”."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Which sentence correctly says the fan costs more than twenty thousand pesos?",
          choices: [
            "Este ventilador cuesta más de veinte mil pesos, así que está un poco caro.",
            "Este ventilador cuesta más que veinte mil pesos, así que está un poco caro.",
            "Este ventilador cuesta mayor de veinte mil pesos, así que está un poco caro."
          ],
          answer: 0,
          tests: "Before a number use “más de”, not “más que” or “mayor de”."
        },
        {
          prompt: "Emma wants to say the basic fan is worse than the branded one. Which is right?",
          choices: [
            "El ventilador corriente es más malo que el de marca, por eso cuesta menos.",
            "El ventilador corriente es peor que el de marca, por eso cuesta menos.",
            "El ventilador corriente es más peor que el de marca, por eso cuesta menos."
          ],
          answer: 1,
          tests: "“Peor”, never “más malo” or the doubled “más peor”."
        },
        {
          prompt: "How would a Colombian say her brother is older than her?",
          choices: [
            "Mi hermano está mayor que yo y por eso decide todo en la casa.",
            "Mi hermano es más viejo que yo y por eso decide todo en la casa.",
            "Mi hermano es mayor que yo y por eso decide todo en la casa."
          ],
          answer: 2,
          tests: "Age is “ser mayor que”, not “estar mayor” or “más viejo”."
        }
      ]
    },
    en: {
      title: "Comprando un ventilador en Miami",
      situation:
        "Tatiana llegó hace poco a Miami y el calor de la Florida la tiene buscando un ventilador. En una venta de garaje, Marcus, un amigo estadounidense, la ayuda a comparar dos: uno de marca y uno corriente. Entre los dos van midiendo precio, calidad y tamaño en inglés para que ella escoja el mejor.",
      setting: {
        who: "Marcus es un amigo estadounidense que sabe de aparatos y habla rápido y relajado. Tatiana es colombiana, llegó hace unas semanas a Miami y compra su primer ventilador mientras practica el inglés de todos los días.",
        what: "Una decisión de compra hecha toda de comparaciones: cuál ventilador es más barato, cuál está mejor hecho, cuál es más pequeño y si el precio pasa de veinte dólares.",
        when: "Una tarde pesada de calor en Florida, cuando un ventilador deja de ser un lujo.",
        where: "Miami, en la Florida, en una venta de garaje de un vecindario.",
        why: "Comparar dos cosas -- más barato, mejor, peor, mayor, más de -- es la gramática diaria de cualquier compra, y en inglés se arma distinto que en español. Dominar el comparativo te deja comprar y regatear en cualquier parte."
      },
      address: {
        form: "mixed",
        who: "Marcus y Tatiana se tratan por el nombre, con confianza, como es normal entre amigos jóvenes en Estados Unidos.",
        why: "El inglés no distingue tú de usted: toda la cercanía va en el tono, el nombre de pila y frases sueltas como “no worries” o “hey”. No hay un pronombre que marque respeto o confianza.",
        ifYouSwitch:
          "Si Tatiana quisiera sonar más formal, no le serviría cambiar el “you”, porque no existe otra forma. La cortesía se marca con frases más largas y suaves -- “could you…”, “would you mind…” -- no con otro pronombre."
      },
      dialogue: [
        {
          speaker: "Marcus",
          target: "Okay, look: this fan is cheaper than that one.",
          translation: "Bueno, mira: este ventilador es más barato que aquel.",
          pronunciation: "o-KÉI, luk: dis fan is CHÍ-per dan dat uán",
          literal: "Okay, mira: este ventilador es más-barato que aquel uno.",
          why: "El molde base del comparativo en inglés es “adjetivo + -er + than”: “cheaper than” = más barato que. A los adjetivos cortos se les pega “-er”; no se usa “more” con ellos. “Than” es el “que” de la comparación, no lo confundas con “that”."
        },
        {
          speaker: "Tatiana",
          target: "And why is this one more basic than the other? They look the same.",
          translation: "¿Y por qué este es más corriente que el otro? Se ven igualitos.",
          pronunciation: "and uái is dis uán mor BÉI-sik dan di A-der? dei luk de séim",
          literal: "Y por-qué es este uno más básico que el otro? Ellos lucen el mismo.",
          why: "Con adjetivos largos el inglés no pega “-er” sino que antepone “more”: “more basic than” = más corriente que. La regla de oro: cortos con “-er”, largos con “more”, y nunca los dos juntos. “The same” es igual, lo mismo."
        },
        {
          speaker: "Marcus",
          target: "Nah, the brand-name one is better than the cheap one, and it lasts longer.",
          translation: "No, el de marca es mejor que el corriente, y dura más.",
          pronunciation: "na, de BRAND-neim uán is BE-ter dan de chíp uán, and it lasts LON-guer",
          literal: "No, el de-marca uno es mejor que el barato uno, y ello dura más-largo.",
          why: "“Better” es el comparativo irregular de “good”: nunca se dice “more good”, igual que en español “mejor” reemplaza a “más bueno”. “Longer” es “-er” sobre “long”, dura más tiempo. Dos irregulares de memoria: good→better, bad→worse."
        },
        {
          speaker: "Tatiana",
          target: "But it costs more than twenty bucks. Isn't there a smaller one?",
          translation: "Pero cuesta más de veinte dólares. ¿No hay uno más pequeño?",
          pronunciation: "bat it costs mor dan TUEN-ti baks. I-sent der a SMÓ-ler uán?",
          literal: "Pero ello cuesta más que veinte billetes. No-hay ahí un más-pequeño uno?",
          why: "Ojo con la trampa mayor para el hispanohablante: en inglés se dice “more than” también antes de un número -- “more than twenty” -- nunca “more of twenty”. “Bucks” es plata coloquial, dólares. “Smaller” es “-er” sobre “small”."
        },
        {
          speaker: "Marcus",
          target: "This little one is smaller than the big one, but it moves more air than most.",
          translation: "Este chiquito es más pequeño que el grande, pero mueve más aire que muchos.",
          pronunciation: "dis LI-tel uán is SMÓ-ler dan de big uán, bat it muvs mor er dan móust",
          literal: "Este pequeño uno es más-pequeño que el grande uno, pero ello mueve más aire que la-mayoría.",
          why: "Otra vez “smaller than”. Y con un sustantivo el inglés usa “more … than”: “more air than” = más aire que. “Most” aquí es la mayoría, muchos. Fíjate en que “than” se repite igual en cada comparación."
        },
        {
          speaker: "Tatiana",
          target: "So the cheap one is worse than the brand. I'll take the better one.",
          translation: "Entonces el corriente es peor que el de marca. Me llevo el mejor.",
          pronunciation: "so de chíp uán is uers dan de brand. ail teik de BE-ter uán",
          literal: "Así el barato uno es peor que la marca. Yo-voy tomar el mejor uno.",
          why: "“Worse” es el irregular de “bad”: nunca “more bad” ni “worser”. “I'll” es la contracción de “I will”, el futuro. “The better one” usa el comparativo con artículo para “el mejor de los dos”; con tres o más sería el superlativo “the best”."
        }
      ],
      vocabulary: [
        {
          term: "-er than / more … than",
          explanation:
            "El comparativo de superioridad en inglés. Los adjetivos cortos toman “-er” (cheaper, bigger); los largos llevan “more” delante (more basic, more expensive). Nunca los dos a la vez.",
          literal: "más … que",
          useWhen:
            "Al comparar dos cosas donde una tiene más de una cualidad: cheaper than, more expensive than.",
          avoidWhen:
            "El adjetivo es good, bad o far -- esos son irregulares: better, worse, further.",
          register: "neutro",
          region: "Inglés universal; la base del comparativo en todas partes.",
          related: ["less … than", "better", "as … as", "the most …"],
          example: {
            target: "This fan is cheaper than that one.",
            translation: "Este ventilador es más barato que aquel."
          }
        },
        {
          term: "less … than",
          explanation:
            "El espejo de “more … than”: menos … que, para la cosa que tiene menos de una cualidad. El adjetivo va tal cual, sin “-er”.",
          literal: "menos … que",
          useWhen:
            "Para bajar en una comparación: less expensive than, less noisy than.",
          avoidWhen:
            "Quieres decir que dos cosas son iguales -- eso es “as … as”, no “less … than”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["more … than", "worse", "as … as", "not as … as"],
          example: {
            target: "It's less expensive than fixing the old one.",
            translation: "Es menos caro que arreglar el viejo."
          }
        },
        {
          term: "better",
          explanation:
            "El comparativo irregular de “good”: mejor. No existe “more good”; la comparación va metida en la palabra, igual que “mejor” en español.",
          literal: "mejor",
          useWhen:
            "Decir que algo es mejor: better than the other, much better, the best of all.",
          avoidWhen:
            "Nunca lo combines con “more”: “more better” es un error clásico, como “más mejor”.",
          register: "neutro",
          region: "Inglés universal; “more good” delata a un principiante.",
          related: ["worse", "good", "much better", "the best"],
          example: {
            target: "The brand one is better than the cheap one.",
            translation: "El de marca es mejor que el corriente."
          }
        },
        {
          term: "worse",
          explanation:
            "El comparativo irregular de “bad”: peor. Ni “more bad” ni “worser”; es una sola palabra que ya carga el “más”.",
          literal: "peor",
          useWhen:
            "Decir que algo es peor: worse than the other, worse and worse, the worst.",
          avoidWhen:
            "No inventes “worser”; no existe, aunque suene lógico por la regla del “-er”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["better", "bad", "worse and worse", "the worst"],
          example: {
            target: "The cheap one is worse than the brand.",
            translation: "El corriente es peor que el de marca."
          }
        },
        {
          term: "older / younger",
          explanation:
            "El par para la edad: “older” (mayor) y “younger” (menor). Son adjetivos con “-er” normales, pero cubren lo que en español hacen los irregulares mayor/menor.",
          literal: "mayor / menor",
          useWhen:
            "Edad de personas: my older brother, she's younger than me.",
          avoidWhen:
            "Para “el mayor / el menor” de un grupo usa el superlativo: the oldest, the youngest.",
          register: "neutro",
          region: "Inglés universal; “elder” existe pero es formal y limitado.",
          related: ["elder", "younger", "the oldest", "the youngest"],
          example: {
            target: "My brother is older than me.",
            translation: "Mi hermano es mayor que yo."
          }
        },
        {
          term: "more than + number",
          explanation:
            "Antes de un número el inglés mantiene “more than”: more than twenty. No cambia a “more of” -- ese es justo el error que arrastra el hispanohablante desde “más de”.",
          literal: "más de + número",
          useWhen:
            "Cualquier cantidad con cifra: more than twenty dollars, less than ten minutes.",
          avoidWhen:
            "No digas “more of twenty” ni “more that twenty”; siempre “more than”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["less than", "over", "almost", "about"],
          example: {
            target: "It costs more than twenty bucks.",
            translation: "Cuesta más de veinte dólares."
          }
        },
        {
          term: "basic / cheaply made",
          explanation:
            "El equivalente del “corriente” colombiano: “basic” o “cheaply made”, algo sencillo y de baja gama. “Cheap” solo puede sonar a barato-y-malo, así que “basic” suele ser más neutro.",
          literal: "corriente / sencillo",
          useWhen:
            "Marcar la opción sin lujos: the basic model, a cheaply made fan.",
          avoidWhen:
            "Quieres decir “de marca” -- eso es brand-name o name brand, lo contrario de basic.",
          register: "amistoso informal",
          region: "Inglés universal; “basic” también es jerga para algo poco original.",
          related: ["cheap", "brand-name", "low-end", "generic"],
          example: {
            target: "This is the basic one, not the brand.",
            translation: "Este es el corriente, no el de marca."
          }
        }
      ],
      note:
        "El inglés arma casi todas sus comparaciones con dos moldes: adjetivos cortos con “-er than” (cheaper than) y adjetivos largos con “more … than” (more expensive than), y jamás los dos juntos. Tres palabras rompen la regla y se aprenden de memoria: “better” (mejor) y “worse” (peor) en vez de “more good/bad”, y “older/younger” para la edad. Una última trampa muy nuestra: antes de un número se dice “more than twenty”, nunca “more of twenty”, aunque en español sea “más de veinte”. Con eso ya comparas casi cualquier cosa.",
      culture: [
        {
          label: "Cortos con -er, largos con more",
          body:
            "La gran regla del comparativo inglés es de sílabas, no de significado. Los adjetivos de una sílaba (cheap, big, small, old) toman “-er”: cheaper, bigger. Los de tres o más (expensive, comfortable, interesting) llevan “more” delante: more expensive. Los de dos sílabas dependen: los terminados en -y hacen “-ier” (happy → happier), y varios admiten cualquiera. Cuando dudes con uno largo, “more” casi nunca falla."
        },
        {
          label: "“Than” no es “that”",
          body:
            "El “que” comparativo en inglés es “than”, y se parece peligrosamente a “that” (que, eso). Se escriben casi igual y suenan parecido, pero “than” solo aparece en comparaciones: cheaper than, more than. Decir o escribir “cheaper that” es de los errores más comunes del hispanohablante. Vale la pena fijar la imagen: comparación va con than, con ene."
        },
        {
          label: "Ni “more better” ni “worser”",
          body:
            "Como “better” y “worse” ya son comparativos, ponerles “more” encima (more better) o inventar “worser” dobla la marca, igual que “más mejor” en español. En inglés muy informal se oye “more better” en chistes o canciones, pero en la vida real marca error. Aprende los tres irregulares clave de una vez: good → better, bad → worse, far → further."
        },
        {
          label: "El regateo suave, también afuera",
          body:
            "En una venta de garaje o un mercadillo en Estados Unidos, comparar en voz alta -- este es más barato, aquel está mejor hecho -- es una forma cortés de negociar sin pelear. No se regatea tan duro como en un San Andresito, pero un “would you take fifteen?” dicho con una sonrisa suele funcionar. La comparación es tu mejor herramienta para pedir un mejor precio."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “more cheap” instead of “cheaper”",
          whyItFails:
            "“Cheap” es un adjetivo corto de una sílaba, así que forma el comparativo con “-er”: cheaper. Anteponerle “more” (more cheap) rompe la regla de los adjetivos cortos y suena claramente a error de principiante.",
          sayInstead: "This one is cheaper than that one."
        },
        {
          mistake: "Doubling it up as “more cheaper”",
          whyItFails:
            "“Cheaper” ya es comparativo; agregar “more” lo duplica, como decir “más más barato”. En inglés eso es doble marca y siempre está mal, por muy enfático que uno quiera sonar. Para intensificar se usa “much cheaper”.",
          sayInstead: "This one is much cheaper than that."
        },
        {
          mistake: "Writing “cheaper that” for “cheaper than”",
          whyItFails:
            "El “que” de la comparación es “than”, con ene, no “that”. Se confunden por lo parecidas, pero “that” significa que o eso en otros usos, no en comparaciones. “Cheaper that” deja la frase coja y es un desliz muy típico.",
          sayInstead: "This one is cheaper than that one."
        },
        {
          mistake: "Using “more good” for “better”",
          whyItFails:
            "“Good” tiene comparativo irregular, “better”, así que “more good” no existe, igual que “más bueno” suena mal en español. Es de memorizar: good → better, bad → worse. No hay regla que salve al que arma “more good”.",
          sayInstead: "The brand one is better than the cheap one."
        }
      ],
      variations: [
        {
          form: "It's cheaper than that one.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La comparación simple de precio entre dos cosas."
        },
        {
          form: "It's better than the other one.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Calidad, con el irregular “better” en vez de “more good”."
        },
        {
          form: "It costs more than twenty dollars.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una cantidad con número, donde se mantiene “more than”."
        },
        {
          form: "My brother is older than me.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La edad de una persona, con “older/younger”."
        }
      ],
      prompt: "Marcus dice “this fan is cheaper than that one.” ¿Por qué “cheaper” y no “more cheap”?",
      choices: [
        "Porque “cheap” es un adjetivo largo, así que forma el comparativo con “more” delante, como “more cheap”.",
        "Porque “cheap” es un adjetivo corto y forma el comparativo con “-er”: “cheaper than”, nunca “more cheap”.",
        "Porque “cheaper” sirve solo para el precio, mientras que “more cheap” describe la calidad del ventilador."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál dice correctamente que el ventilador cuesta más de veinte dólares?",
          choices: [
            "This fan costs more than twenty dollars at a little garage sale.",
            "This fan costs more of twenty dollars at a little garage sale.",
            "This fan costs more that twenty dollars at a little garage sale."
          ],
          answer: 0,
          tests: "Antes de un número: “more than”, no “more of” ni “more that”."
        },
        {
          prompt: "Tatiana quiere decir que el ventilador corriente es peor que el de marca. ¿Cuál está bien?",
          choices: [
            "The basic fan is more bad than the brand one, so it costs less.",
            "The basic fan is worser than the brand one, so it costs less.",
            "The basic fan is worse than the brand one, so it costs less."
          ],
          answer: 2,
          tests: "El irregular es “worse”: ni “more bad” ni “worser”."
        },
        {
          prompt: "¿Cómo se dice en inglés que tu hermano es mayor que tú?",
          choices: [
            "My brother is more old than me and bosses everyone around.",
            "My brother is older than me and bosses everyone around.",
            "My brother is more older than me and bosses everyone around."
          ],
          answer: 1,
          tests: "“Older than”, no “more old” ni el doble “more older”."
        }
      ]
    }
  },
  {
    id: "two-lunch-spots-in-santa-marta",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "food-and-drink",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    structure: "comparison-equality",
    review: "pending",
    es: {
      title: "¿Cuál comedor es tan bueno como el otro?",
      situation:
        "Hannah has been in Santa Marta only a few days, and at lunchtime she does not know where to eat. Marlon, a samario friend, takes her to the market and shows her two comedores side by side. In the midday bustle, they compare which one is just as good, which serves as much food as the other, and which serves people faster, so she can choose where to sit.",
      setting: {
        who: "Marlon is a santamarteño who knows every comedor in the market and talks with the quick, teasing warmth of the coast. Hannah is an American on her first week in Santa Marta, learning her lunchtime Spanish one plate at a time.",
        what: "A lunch decision built on equality: which comedor is as good as the other, which serves as much food, which sits just as close to the beach and just as cheap.",
        when: "High noon, the hour when the market fills and everyone is deciding where to eat.",
        where: "Santa Marta, on the Caribbean coast, at two side-by-side comedores in the market.",
        why: "Saying two things are equal -- as good, as much, just as close -- is everyday market grammar, and the corpus has not a single “tan … como”. Master equality and you can weigh any two options out loud."
      },
      address: {
        form: "tú",
        who: "Marlon and Hannah use tú. On the coast a friend guiding a newcomer drops into tú at once, with warm tags like “ajá” and “¿oíste?”.",
        why: "The Caribbean coast leans to tú where the Andean interior might reach for usted. Between friends of about the same age it is the natural, friendly choice; usted here would sound oddly stiff.",
        ifYouSwitch:
          "If Hannah answered in careful usted, Marlon would understand her fine, but it would add a small note of distance -- polite, a little formal -- against the easy back-and-forth that tú invites."
      },
      dialogue: [
        {
          speaker: "Marlon",
          target: "Ajá, mira: este comedor es tan bueno como aquel, ¿oíste?",
          translation: "So, look: this lunch spot is as good as that one, you hear?",
          pronunciation: "a-HÁ, MI-ra: EH-te ko-me-DOR eh tan BWE-no KO-mo a-KEL, oy-TE",
          literal: "Aha, look: this eatery is as good as that-one, you-heard?",
          why: "The equality frame is “tan + adjective + como”: “tan bueno como” = as good as. You never swap in “que” here -- equality always closes with “como”. “Ajá” and “¿oíste?” are pure coastal seasoning, and dropped -s softens “este” to “eh-te”."
        },
        {
          speaker: "Hannah",
          target: "¿En serio? Y queda igual de cerca que la playa, ¿verdad?",
          translation: "Really? And it's just as close as the beach, right?",
          pronunciation: "en SE-ryo? i KE-da i-GWAL de SER-ka ke la PLA-ya, ver-DÁ",
          literal: "In serious? And it-stays just as close as the beach, true?",
          why: "“Igual de + adjective” is the everyday spoken equality: “igual de cerca” = just as close. It closes with “que” (“igual de cerca que la playa”), which is normal for “igual de”, unlike “tan … como”. Coastal “¿verdad?” drops to “¿verdá?”."
        },
        {
          speaker: "Marlon",
          target: "Erda, sí. Y aquí te sirven tanta comida como en el otro, igual de barato.",
          translation: "Come on, yes. And here they serve you as much food as at the other one, just as cheap.",
          pronunciation: "ER-da, si. i a-KI te SIR-ven TAN-ta ko-MI-da KO-mo en el O-tro, i-GWAL de ba-RA-to",
          literal: "Wow, yes. And here you they-serve as-much food as in the other, just as cheap.",
          why: "For an amount of a noun you use “tanto/tanta … como”, agreeing with the noun: “tanta comida como”, as much food as. Then “igual de barato”, just as cheap, stacks a second equality. Note “tanta” is feminine to match “comida”."
        },
        {
          speaker: "Hannah",
          target: "Ajá. Pero no quiero comer tanto como ayer, quedé toda llena.",
          translation: "Right. But I don't want to eat as much as yesterday, I got completely full.",
          pronunciation: "a-HÁ. PE-ro no KYE-ro ko-MER TAN-to KO-mo a-YER, ke-DE TO-da YE-na",
          literal: "Aha. But not I-want to-eat as-much as yesterday, I-stayed all full.",
          why: "After a verb with no noun in between, equality is “tanto como” on its own -- “comer tanto como”, eat as much as. Here “tanto” never changes form, because there is nothing to agree with. “Quedé llena” means I ended up full."
        },
        {
          speaker: "Marlon",
          target: "Tranquila. Este es tan grande como el otro, pero atiende más rápido.",
          translation: "Relax. This one is as big as the other, but it serves faster.",
          pronunciation: "tran-KI-la. EH-te eh tan GRAN-de KO-mo el O-tro, PE-ro a-TYEN-de MÁ RA-pi-do",
          literal: "Calm. This is as big as the other, but it-serves more fast.",
          why: "“Tan grande como” is equality of size -- as big as. Notice it sits right next to a “más … que” idea (“atiende más rápido”), so equality and inequality can share one breath. Costeño clips “más” down to “má”."
        },
        {
          speaker: "Hannah",
          target: "Bueno, tengo tanta hambre como un león. Entremos a este, pues.",
          translation: "Okay, I'm as hungry as a lion. Let's go into this one, then.",
          pronunciation: "BWE-no, TEN-go TAN-ta AM-bre KO-mo un le-ON. en-TRE-moh a EH-te, pweh",
          literal: "Good, I-have as-much hunger as a lion. Let's-enter to this, then.",
          why: "Spanish “has” hunger rather than “is” hungry, so an amount of it takes “tanta … como”: “tanta hambre como”, as much hunger as. “Tanta” agrees with the feminine “hambre”. The tag “pues” rounds the sentence off, very Colombian."
        }
      ],
      vocabulary: [
        {
          term: "tan … como",
          explanation:
            "The equality frame for a shared quality: as … as. You wrap “tan” and “como” around a plain adjective, with no change for degree -- “tan bueno como” is as good as.",
          literal: "as … as",
          useWhen:
            "Comparing two things that share a quality: “tan grande como”, “tan caro como”, “tan rápido como”.",
          avoidWhen:
            "You are comparing amounts of a noun -- that needs “tanto/tanta … como”, not “tan … como”.",
          register: "neutral",
          region: "Universal Spanish; the everyday equality frame across Colombia.",
          related: ["tanto … como", "igual de", "más … que", "menos … que"],
          example: {
            target: "Este comedor es tan bueno como aquel.",
            translation: "This lunch spot is as good as that one."
          }
        },
        {
          term: "tanto/tanta … como",
          explanation:
            "The equality frame for a shared amount: as much or as many … as. The “tanto” word agrees with its noun in gender and number -- tanta comida, tanto arroz, tantas sillas.",
          literal: "as much/many … as",
          useWhen:
            "Comparing quantities of a noun: “tanta comida como”, “tantos platos como”, “tanto ruido como”.",
          avoidWhen:
            "The word you are leveling is an adjective, not a noun -- then it is “tan … como”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["tan … como", "tanto como", "igual de", "más … que"],
          example: {
            target: "Aquí sirven tanta comida como en el otro.",
            translation: "Here they serve as much food as at the other one."
          }
        },
        {
          term: "tanto como",
          explanation:
            "On its own after a verb, “tanto como” means as much as -- “come tanto como yo”, he eats as much as I do. Here “tanto” never changes, because there is no noun to agree with.",
          literal: "as much as",
          useWhen:
            "Leveling how much an action happens: “trabaja tanto como”, “come tanto como”, “cuesta tanto como”.",
          avoidWhen:
            "There is a noun in the middle -- then “tanto” must agree: “tanta comida como”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["tanto … como", "tan … como", "igual", "lo mismo"],
          example: {
            target: "No quiero comer tanto como ayer.",
            translation: "I don't want to eat as much as yesterday."
          }
        },
        {
          term: "igual de",
          explanation:
            "The colloquial equality shortcut: “igual de + adjective” = just as … . “Igual de barato” is just as cheap. It is the everyday spoken twin of “tan … como”, very common in Colombia.",
          literal: "just as …",
          useWhen:
            "Casual equality of a quality: “igual de bueno”, “igual de cerca”, “igual de caro”.",
          avoidWhen:
            "A formal or written register, where “tan … como” reads better than the chatty “igual de”.",
          register: "friendly informal",
          region: "Colombia and much of Latin America; extremely common in everyday coastal speech.",
          related: ["tan … como", "igualito", "lo mismo", "parejo"],
          example: {
            target: "Este queda igual de cerca que la playa.",
            translation: "This one is just as close as the beach."
          }
        },
        {
          term: "igualito / igualita",
          explanation:
            "The diminutive of “igual”, meaning exactly the same, identical. Colombians add “-ito” to warm it up: “se ven igualitos”, they look just the same.",
          literal: "just the same (little)",
          useWhen:
            "Saying two things look or seem identical: “quedaron igualitos”, “es igualita a la mamá”.",
          avoidWhen:
            "You need a measured comparison of degree -- that is “tan … como”, not the impressionistic “igualito”.",
          register: "friendly informal",
          region: "Colombia; the diminutive is a hallmark of warm, everyday speech.",
          related: ["igual de", "igual", "parecido", "lo mismo"],
          example: {
            target: "Los dos comedores se ven igualitos.",
            translation: "The two lunch spots look just the same."
          }
        },
        {
          term: "me da lo mismo",
          explanation:
            "A set phrase for it's all the same to me, I don't mind. It signals two options are equal in your eyes, so you have no preference. “Me da igual” is the same idea.",
          literal: "it gives me the same",
          useWhen:
            "Waving off a choice because both are equal to you: “ir a uno u otro me da lo mismo”.",
          avoidWhen:
            "You actually do have a preference -- then say which you want, not “me da lo mismo”.",
          register: "friendly informal",
          region: "Universal Spanish; “me da igual” is equally common.",
          related: ["me da igual", "igual", "cualquiera", "como quieras"],
          example: {
            target: "Uno u otro, me da lo mismo.",
            translation: "One or the other, it's all the same to me."
          }
        },
        {
          term: "parejo",
          explanation:
            "Coast-friendly for even, level, balanced. Two things that are “parejos” are matched or equal. “Todo parejo” means everything's even, fair shares all round.",
          literal: "even / level",
          useWhen:
            "Saying amounts or chances are equal: “quedamos parejos”, “sirvan parejo para todos”.",
          avoidWhen:
            "You mean a formal grammatical equality of quality -- that is “tan … como”, while “parejo” is looser and chattier.",
          register: "friendly informal",
          region: "Colombia, very common on the coast; also used as an adverb, fairly or evenly.",
          related: ["igual", "equitativo", "balanceado", "a la par"],
          example: {
            target: "Sirvan parejo, que todos tenemos hambre.",
            translation: "Serve even portions, we're all hungry."
          }
        }
      ],
      note:
        "Spanish says two things are equal with two frames: “tan + adjective + como” for a shared quality (tan bueno como, as good as) and “tanto/tanta/tantos/tantas + noun + como” for a shared amount (tanta comida como, as much food as). The quantity word agrees with its noun, so it is tanta comida but tanto arroz. On its own after a verb it is just “tanto como” (comer tanto como, eat as much as). And in everyday Colombian speech “igual de” does the same job -- igual de barato, just as cheap. Two traps to avoid: keep “como” (not “que”) for “tan … como”, and never drop “tan” straight in front of a noun.",
      culture: [
        {
          label: "Equality without a special word",
          body:
            "Spanish has no single word for as…as; it brackets the idea with two words, “tan … como” for qualities and “tanto … como” for amounts. English does the very same trick with as…as, so the shape transfers cleanly once you remember that the amount version has to agree with its noun. Hear it once at a lunch counter -- “tan bueno como”, “tanta comida como” -- and it sticks."
        },
        {
          label: "“Igual de”, the shortcut everyone uses",
          body:
            "In real Colombian speech people reach for “igual de” far more than the textbook “tan … como”. “Igual de bueno”, “igual de caro”, “igual de lejos” -- it is quick, warm and everywhere, and it closes with “que” when you name the second thing: “igual de cerca que la playa”. Textbooks lead with “tan … como”, but your ear on the street will fill up with “igual de”."
        },
        {
          label: "How the coast clips its words",
          body:
            "Santa Marta shares Barranquilla's costeño music: the -s at the end of syllables softens or vanishes, so “más” becomes “má”, “los dos” sounds like “loh do”, and “¿verdad?” lands as “¿verdá?”. The equality frames are still built exactly as written -- “tan grande como” -- you simply hear them lighter and faster. The grammar never changed; only the sound relaxed."
        },
        {
          label: "The comedor and the almuerzo",
          body:
            "A comedor is a small, honest eatery, and the midday “almuerzo” or “corrientazo” -- soup, a plate of rice, meat, salad, a juice -- is the heart of the Colombian day. On the coast they are cheap, generous and social; strangers share long tables. Comparing two comedores out loud, weighing which gives “tanta comida como” the other, is exactly how locals decide where to sit down."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “tan … que” instead of “tan … como”",
          whyItFails:
            "Equality closes with “como”, never “que”. “Tan bueno que” borrows the “que” from inequality (“más bueno que”) and leaves the equality half-built; to a Colombian ear it sounds broken. The pair is fixed: “tan … como”.",
          sayInstead: "Este comedor es tan bueno como aquel."
        },
        {
          mistake: "Putting “tan” straight before a noun",
          whyItFails:
            "“Tan” only modifies adjectives and adverbs, not nouns. For an amount of a noun you need “tanto/tanta … como”: “tanta hambre”, not “tan hambre”. Reaching for “tan” before a noun is one of the most common equality slips there is.",
          sayInstead: "Tengo tanta hambre como un león."
        },
        {
          mistake: "Not agreeing “tanto” with the noun",
          whyItFails:
            "The quantity word has to match its noun in gender and number: “tanta comida” (feminine), “tanto arroz” (masculine), “tantas sillas” (plural). Saying “tanto comida” freezes it in the default masculine and instantly marks a learner.",
          sayInstead: "Aquí sirven tanta comida como en el otro."
        },
        {
          mistake: "Saying “tanto como” with a noun jammed in",
          whyItFails:
            "When a noun sits in the middle you cannot leave “tanto” unchanged -- it must agree and frame the noun: “tanto arroz como”. “Tanto comida como” mixes the bare-verb pattern with a noun and lands wrong. Match the word to what follows it.",
          sayInstead: "Te sirven tanto arroz como quieras."
        }
      ],
      variations: [
        {
          form: "Este es tan bueno como aquel.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Equality of a quality between two things, with “tan … como”."
        },
        {
          form: "Tiene tanta comida como el otro.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Equality of an amount of a noun, with “tanta … como” agreeing."
        },
        {
          form: "Queda igual de cerca que la playa.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "The everyday spoken shortcut “igual de”, closing with “que”."
        },
        {
          form: "No como tanto como ayer.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Equality of how much an action happens, with bare “tanto como”."
        }
      ],
      prompt: "Marlon says the two comedores are “tan bueno como” each other. What does “tan … como” express?",
      choices: [
        "That the two lunch spots are equal in quality, the way English uses “as good as” to level two things.",
        "That the first lunch spot is clearly better than the other, the way “más bueno que” would rank them.",
        "That the first lunch spot is slightly worse than the other, so “tan” quietly softens the comparison down."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence correctly says this spot serves as much food as the other?",
          choices: [
            "Este comedor sirve tanto comida como el otro, por eso siempre lo escojo.",
            "Este comedor sirve tan comida como el otro, por eso siempre lo escojo.",
            "Este comedor sirve tanta comida como el otro, por eso siempre lo escojo."
          ],
          answer: 2,
          tests: "With a noun the quantity word agrees: feminine “comida” takes “tanta comida como”, not “tanto” or “tan”."
        },
        {
          prompt: "How do you say this lunch spot is as good as that one?",
          choices: [
            "Este comedor es tan bueno que aquel, así que comemos aquí siempre.",
            "Este comedor es tan bueno como aquel, así que comemos aquí siempre.",
            "Este comedor es tanto bueno como aquel, así que comemos aquí siempre."
          ],
          answer: 1,
          tests: "Quality equality is “tan + adjective + como”: not “tan … que” and not “tanto” before an adjective."
        },
        {
          prompt: "Which sentence says she doesn't want to eat as much as yesterday?",
          choices: [
            "Hoy no quiero comer tanto como ayer porque quedé bien llena.",
            "Hoy no quiero comer tan como ayer porque quedé bien llena.",
            "Hoy no quiero comer tanto que ayer porque quedé bien llena."
          ],
          answer: 0,
          tests: "After a verb “tanto como” stands alone for as much as: never “tan como” or “tanto que”."
        }
      ]
    },
    en: {
      title: "Dos cafés para almorzar en Mánchester",
      situation:
        "Carolina se mudó hace poco a Mánchester y todavía se pierde a la hora del almuerzo. Liam, un amigo inglés, la lleva a una calle con dos cafés pegados y la ayuda a comparar cuál es igual de bueno, cuál da tanta comida como el otro y cuál atiende más rápido. Todo en inglés, para que ella practique la igualdad -- “as … as” -- mientras deciden dónde sentarse.",
      setting: {
        who: "Liam es un manchesteriano que conoce cada café de su barrio y habla rápido, con humor seco. Carolina es colombiana, llegó hace unas semanas a Mánchester y practica su inglés de todos los días a la hora del almuerzo.",
        what: "Una decisión de almuerzo hecha de igualdades: cuál café es tan bueno como el otro, cuál da tanta comida, cuál queda igual de cerca y cuál no está tan lleno.",
        when: "El mediodía, cuando las oficinas salen a comer y hay que decidir rápido.",
        where: "Mánchester, en el norte de Inglaterra, en dos cafés pegados de una misma calle.",
        why: "Decir que dos cosas son iguales -- tan bueno, tanta comida, igual de cerca -- es gramática diaria en cualquier almuerzo, y en inglés se arma con “as … as”. Dominarlo te deja pesar dos opciones en voz alta en cualquier parte."
      },
      address: {
        form: "mixed",
        who: "Liam y Carolina se tratan por el nombre, con confianza, como es normal entre amigos jóvenes en Inglaterra.",
        why: "El inglés no distingue tú de usted: toda la cercanía va en el tono, el nombre de pila y frases sueltas como “cheers” o “mate”. No hay un pronombre que marque respeto o distancia.",
        ifYouSwitch:
          "Si Carolina quisiera sonar más formal, no le serviría cambiar el “you”, porque no existe otro. La cortesía se marca con frases más largas y suaves -- “would you mind…”, “could we…” -- no con otro pronombre."
      },
      dialogue: [
        {
          speaker: "Liam",
          target: "Look, this café is as good as that one, honestly.",
          translation: "Mira, este café es tan bueno como aquel, en serio.",
          pronunciation: "luk, dis ka-FÉI is as gud as dat uán, ON-est-li",
          literal: "Mira, este café es tan bueno como ese uno, honestamente.",
          why: "El molde de igualdad en inglés es “as + adjetivo + as”: “as good as” = tan bueno como. El adjetivo va sin cambios entre las dos “as”. Ojo: se abre y se cierra con “as”, nunca con “than” ni con “like”."
        },
        {
          speaker: "Carolina",
          target: "Really? And it's just as close as the station, right?",
          translation: "¿En serio? Y queda igual de cerca que la estación, ¿cierto?",
          pronunciation: "RÍ-li? and its yast as clóus as de STÉI-shon, rait?",
          literal: "¿Realmente? Y ello-es igual de cerca como la estación, ¿cierto?",
          why: "“Just as + adjetivo + as” es la igualdad enfática: “just as close as” = igual de cerca que. El “just” refuerza que son idénticos en eso. Fíjate en que el inglés repite “as” al final, donde el español pondría “que”."
        },
        {
          speaker: "Liam",
          target: "Yeah, and they give you as much food as the other place, just as cheap.",
          translation: "Sí, y te dan tanta comida como el otro sitio, igual de barato.",
          pronunciation: "yea, and dei guiv yu as moch fud as di A-der pléis, yast as chíp",
          literal: "Sí, y ellos dan-te tanta comida como el otro lugar, igual de barato.",
          why: "Con un incontable como “food” se usa “as much … as”: “as much food as” = tanta comida como. “Much” es para lo que no se cuenta; con un plural contable sería “as many”. Y “just as cheap” remata con otra igualdad."
        },
        {
          speaker: "Carolina",
          target: "But I don't want to eat as much as yesterday, I was stuffed.",
          translation: "Pero no quiero comer tanto como ayer, quedé bien llena.",
          pronunciation: "bat ai dont uont tu it as moch as YES-ter-dei, ai uós stoft",
          literal: "Pero yo no quiero comer tanto como ayer, yo estaba rellena.",
          why: "Solo, tras el verbo, “as much as” es tanto como: “eat as much as yesterday”, comer tanto como ayer. No hay sustantivo en medio, así que “much” no cambia. “Stuffed” es un coloquial para muy lleno, repleto."
        },
        {
          speaker: "Liam",
          target: "Relax, this place isn't as busy as the other, so it's quicker.",
          translation: "Tranquila, este sitio no está tan lleno como el otro, así que es más rápido.",
          pronunciation: "ri-LAX, dis pléis I-sent as BI-si as di A-der, so its KUÍ-ker",
          literal: "Relájate, este lugar no-es tan ocupado como el otro, así que es más-rápido.",
          why: "La igualdad en negativo es “not as … as”: “not as busy as” = no tan lleno como. Basta anteponer “not” al molde “as … as”. “Busy” aquí es lleno de gente, concurrido; “quicker” es más rápido."
        },
        {
          speaker: "Carolina",
          target: "Either way, I'm as hungry as a wolf. Let's go in.",
          translation: "Igual, tengo tanta hambre como un lobo. Entremos.",
          pronunciation: "Í-der uéi, aim as JON-gri as a uúlf. lets góu in",
          literal: "De-cualquier manera, yo-estoy tan hambriento como un lobo. Vamos a-entrar.",
          why: "“As hungry as” vuelve al molde “as + adjetivo + as”, aquí con una comparación hecha (“as hungry as a wolf”, muerto de hambre). “Either way” cierra la duda: de todas formas, igual, elijas lo que elijas."
        }
      ],
      vocabulary: [
        {
          term: "as … as",
          explanation:
            "El molde de igualdad en inglés para una cualidad: “as + adjetivo + as” = tan … como. El adjetivo va tal cual entre las dos “as”: “as good as”, tan bueno como.",
          literal: "tan … como",
          useWhen:
            "Para decir que dos cosas comparten una cualidad: “as big as”, “as cheap as”, “as fast as”.",
          avoidWhen:
            "Estás comparando cantidades de un sustantivo -- eso es “as much/many … as”, no “as … as”.",
          register: "neutro",
          region: "Inglés universal; el molde básico de igualdad.",
          related: ["as much as", "just as", "not as … as", "the same as"],
          example: {
            target: "This café is as good as that one.",
            translation: "Este café es tan bueno como aquel."
          }
        },
        {
          term: "as much / as many … as",
          explanation:
            "La igualdad de cantidad. Con incontables se usa “as much” (as much food as); con contables en plural, “as many” (as many chairs as). Es lo que en español hace “tanto/tanta/tantos/tantas”.",
          literal: "tanto/tanta … como",
          useWhen:
            "Comparar cantidades: “as much food as”, “as many people as”, “as much noise as”.",
          avoidWhen:
            "Lo que igualas es un adjetivo, no un sustantivo -- entonces es “as … as”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["as … as", "as much as", "just as", "the same amount"],
          example: {
            target: "They give you as much food as the other place.",
            translation: "Te dan tanta comida como el otro sitio."
          }
        },
        {
          term: "just as …",
          explanation:
            "“Just as + adjetivo” refuerza la igualdad: igual de … . “Just as cheap” es igual de barato. Es el equivalente coloquial y enfático de “as … as”.",
          literal: "igual de …",
          useWhen:
            "Igualdad enfática y coloquial: “just as good”, “just as close”, “just as expensive”.",
          avoidWhen:
            "En un registro muy formal, donde “as … as” a secas suena más neutro que “just as”.",
          register: "amistoso informal",
          region: "Inglés universal; muy usado en el habla diaria.",
          related: ["as … as", "equally", "every bit as", "the same"],
          example: {
            target: "It's just as close as the station.",
            translation: "Queda igual de cerca que la estación."
          }
        },
        {
          term: "not as … as",
          explanation:
            "La igualdad en negativo: “not as … as” = no tan … como. Dice que algo tiene menos de una cualidad que otra cosa: “not as busy as”, no tan lleno como.",
          literal: "no tan … como",
          useWhen:
            "Negar que dos cosas sean iguales: “not as big as”, “not as good as”.",
          avoidWhen:
            "Quieres afirmar la igualdad -- entonces quita el “not”: “as big as”.",
          register: "neutro",
          region: "Inglés universal; “not so … as” existe pero es más formal y antiguo.",
          related: ["as … as", "less … than", "not so … as", "nowhere near as"],
          example: {
            target: "This place isn't as busy as the other.",
            translation: "Este sitio no está tan lleno como el otro."
          }
        },
        {
          term: "as much as",
          explanation:
            "Solo, después de un verbo, “as much as” es tanto como: “I don't eat as much as you”, no como tanto como tú. No cambia de forma porque no hay sustantivo al que acompañar.",
          literal: "tanto como",
          useWhen:
            "Igualar cuánto ocurre una acción: “work as much as”, “eat as much as”, “cost as much as”.",
          avoidWhen:
            "Hay un sustantivo contable en medio -- entonces es “as many … as”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["as many as", "as … as", "as much … as", "the same"],
          example: {
            target: "I don't want to eat as much as yesterday.",
            translation: "No quiero comer tanto como ayer."
          }
        },
        {
          term: "either way",
          explanation:
            "“Either way” cierra una duda entre dos opciones iguales: de todas formas, igual. Dice que el resultado no cambia elijas lo que elijas.",
          literal: "de todas formas / igual",
          useWhen:
            "Zanjar entre dos opciones equivalentes: “either way, we win”, “either way is fine”.",
          avoidWhen:
            "Hay tres o más opciones -- ahí encaja mejor “any way” o “whichever”.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["whichever", "anyway", "regardless", "both work"],
          example: {
            target: "Either way, I'm starving.",
            translation: "Igual, me estoy muriendo del hambre."
          }
        },
        {
          term: "I don't mind",
          explanation:
            "“I don't mind” y “it's all the same to me” son las frases hechas para me da igual, me da lo mismo: las dos opciones te parecen iguales y no tienes preferencia.",
          literal: "me da igual",
          useWhen:
            "Dejar que el otro elija porque te da lo mismo: “I don't mind either”, “it's all the same to me”.",
          avoidWhen:
            "Sí tienes preferencia -- entonces dila, no uses “I don't mind”.",
          register: "amistoso informal",
          region: "Inglés universal; “I don't mind” es muy británico y encaja perfecto en Mánchester.",
          related: ["it's all the same", "whatever works", "up to you", "either is fine"],
          example: {
            target: "One or the other, I don't mind.",
            translation: "Uno u otro, me da igual."
          }
        }
      ],
      note:
        "El inglés arma la igualdad con “as … as”: “as good as” (tan bueno como) para cualidades, y “as much/many … as” para cantidades -- “as much” con incontables (as much food) y “as many” con contables (as many chairs). Suelto tras un verbo es “as much as” (tanto como). Para reforzar se dice “just as” (igual de) y, en negativo, “not as … as” (no tan … como). Dos trampas del hispanohablante: no digas “as good like” ni “so good as”, y nunca mezcles “as … than”; la igualdad siempre va “as … as”.",
      culture: [
        {
          label: "“as … as”, el molde de igualdad",
          body:
            "El inglés no tiene una sola palabra para tan…como: enmarca la idea con dos “as”, una a cada lado del adjetivo. “As good as”, “as fast as”, “as close as”. La forma calca justo al español “tan … como”, así que se aprende rápido; lo único que hay que grabarse es que en inglés se repite “as”, mientras el español cambia a “como” al cerrar."
        },
        {
          label: "“much” para incontables, “many” para contables",
          body:
            "Cuando igualas cantidades, el inglés te obliga a escoger: “much” con lo que no se cuenta (food, water, money, time) y “many” con lo que sí y va en plural (friends, plates, people). “As much food as” pero “as many friends as”. El español resuelve lo mismo con tanta/tantos, pero en inglés la palabra cambia entera, y confundirlas es un desliz clásico."
        },
        {
          label: "Ni “as good like” ni “so good as”",
          body:
            "Dos errores muy del hispanohablante: cerrar la igualdad con “like” en vez de la segunda “as” (“as good like”), o abrirla con “so” en afirmativo (“so good as”). Hoy la forma viva es “as … as” en los dos extremos. “So … as” apenas sobrevive en frases negativas y formales, y “like” pertenece a otra construcción; mézclalas y suena roto."
        },
        {
          label: "Mánchester y el “I don't mind”",
          body:
            "El inglés británico adora la moderación cortés. “I don't mind”, “either's fine”, “whatever works” son la manera educada de decir que dos opciones te dan igual sin sonar desinteresado. En Mánchester lo oirás a cada rato para zanjar una elección pequeña. Aprender esas frases de igualdad te hace sonar natural y relajado, no indeciso."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “as good like” instead of “as good as”",
          whyItFails:
            "La igualdad en inglés se cierra con la segunda “as”, no con “like”. “As good like” mezcla dos formas de comparar y suena roto; el molde fijo es “as … as”, con “as” a los dos lados del adjetivo.",
          sayInstead: "This café is as good as that one."
        },
        {
          mistake: "Using “as big than” for “as big as”",
          whyItFails:
            "“Than” es para el comparativo de desigualdad (“bigger than”), no para la igualdad. La igualdad siempre va con “as”: “as big as”, nunca “as big than”. Es la mezcla más común entre los dos moldes.",
          sayInstead: "This place is as big as the other one."
        },
        {
          mistake: "Saying “as much friends” instead of “as many friends”",
          whyItFails:
            "Con sustantivos contables en plural se usa “as many”, no “as much”: “as many friends as”. “As much” queda solo para incontables (as much food). Es el reflejo exacto de tantos/tantas frente a tanta.",
          sayInstead: "I have as many friends as you do."
        },
        {
          mistake: "Using “so good as” for “as good as”",
          whyItFails:
            "En afirmativo la igualdad abre con “as”, no con “so”: “as good as”. “So good as” suena anticuado o incorrecto hoy; “so … as” apenas sobrevive en frases negativas muy formales, no en el habla normal.",
          sayInstead: "It's as good as the other place."
        }
      ],
      variations: [
        {
          form: "This café is as good as that one.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La igualdad simple de una cualidad, con “as … as”."
        },
        {
          form: "They give you as much food as the other.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Igualdad de cantidad con un incontable, “as much … as”."
        },
        {
          form: "It's just as close as the station.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "La versión enfática y coloquial, “just as”."
        },
        {
          form: "This one isn't as busy as the other.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "La igualdad en negativo, “not as … as”."
        }
      ],
      prompt: "Liam dice que los dos cafés son “as good as” el uno del otro. ¿Qué expresa “as … as”?",
      choices: [
        "That the first café is clearly better than the other, the way “better than” would rank them.",
        "That the first café is a bit worse than the other, so “as” tones the comparison down.",
        "That the two cafés are equal in quality, the way Spanish uses “tan bueno como” to level them."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál dice correctamente que tienes tantos amigos como ella?",
          choices: [
            "I have as much friends as she does, so we always go out together.",
            "I have as many friends as she does, so we always go out together.",
            "I have so many friends as she does, so we always go out together."
          ],
          answer: 1,
          tests: "Con contables en plural se usa “as many … as”, no “as much” ni “so many … as”."
        },
        {
          prompt: "¿Cómo se dice que este café es tan bueno como aquel?",
          choices: [
            "This café is as good as that one, so we eat here all the time.",
            "This café is as good than that one, so we eat here all the time.",
            "This café is as good like that one, so we eat here all the time."
          ],
          answer: 0,
          tests: "La igualdad va “as … as”: ni “as good than” ni “as good like”."
        },
        {
          prompt: "¿Cuál dice que este sitio no está tan lleno como el otro?",
          choices: [
            "This place is not as busy than the other, so it's quicker to sit down.",
            "This place is not so busy as the other, so it's quicker to sit down.",
            "This place is not as busy as the other, so it's quicker to sit down."
          ],
          answer: 2,
          tests: "El negativo también va “not as … as”, no “not as … than”, y hoy “not so … as” suena anticuado."
        }
      ]
    },
  },
  {
    id: "the-best-sancocho-in-valledupar",
    level: "Starter · Food and drink",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "food-and-drink",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    structure: "superlatives",
    review: "pending",
    es: {
      title: "El mejor sancocho de Valledupar",
      situation:
        "Kate is wandering through Valledupar in the middle of the Festival Vallenato, and hunger leads her to a food stall. Beto, a born-and-raised cesarense, swears that they serve the best sancocho in the city there. Between accordions and heat, they compare which plate is the tastiest, which is absolutely delicious, and which comes out cheaper, until Kate works up the nerve to order the biggest one of all.",
      setting: {
        who: "Beto is a vallenato-loving cesarense who treats his city's food as a point of pride and talks at full coastal speed. Kate is an Australian passing through Valledupar for the festival, hungry and ready to learn her superlatives at a food stall.",
        what: "A food-stall decision made of superlatives: which sancocho is the tastiest in Valledupar, which is absolutely delicious, which is the cheapest, and which plate is the biggest of all.",
        when: "The heat of the Festival Vallenato, accordions everywhere and the smell of sancocho in the air.",
        where: "Valledupar, capital of Cesar on the Caribbean plain, at a food stall during the vallenato festival.",
        why: "Naming the best, the tastiest, the cheapest -- the superlative -- is how anyone brags about food, and the corpus never explains it. Learn “el más … de” and “-ísimo” and you can crown a favorite anywhere."
      },
      address: {
        form: "tú",
        who: "Beto and Kate use tú. On the coast a proud local and a curious visitor slide into tú almost immediately, with warm tags like “ajá” and “¿oíste?”.",
        why: "The Caribbean coast prefers tú where the Andean interior might use usted. Between a friendly vendor and a young traveler it sounds warm and normal; usted would feel stiff here.",
        ifYouSwitch:
          "If Kate replied in careful usted, Beto would follow her fine, but it would cool the banter a touch -- more polite, more distant than the easy tú of a festival food stall."
      },
      dialogue: [
        {
          speaker: "Beto",
          target: "Erda, Kate, este sancocho es el más sabroso de Valledupar, ¿oíste?",
          translation: "Wow, Kate, this sancocho is the tastiest in Valledupar, you hear?",
          pronunciation: "ER-da, keit, EH-te san-KO-cho eh el MÁ sa-BRO-so de va-lle-du-PAR, oy-TE",
          literal: "Wow, Kate, this stew is the most tasty of Valledupar, you-heard?",
          why: "The relative superlative is “el más + adjective + de”: “el más sabroso de Valledupar”, the tastiest in Valledupar. English says “in”, but Spanish marks the group with “de”. “Erda” and “¿oíste?” are pure coast."
        },
        {
          speaker: "Kate",
          target: "¿En serio? Pues huele riquísimo, casi tan rico como el de mi abuela.",
          translation: "Really? Well it smells absolutely delicious, almost as good as my grandma's.",
          pronunciation: "en SE-ryo? pweh WE-le ri-KI-si-mo, KA-si tan RI-ko KO-mo el de mi a-BWE-la",
          literal: "In serious? Well it-smells very-tasty, almost as tasty as the of my grandmother.",
          why: "“Riquísimo” is the absolute superlative of “rico” -- extremely tasty, with no group to compare. Watch the spelling: “rico” shifts c→qu to keep the hard k sound, giving “riquísimo”, never “ricísimo”."
        },
        {
          speaker: "Beto",
          target: "Ajá, y está buenísimo. Aquí hacen el mejor sancocho de todo el Cesar.",
          translation: "Right, and it's really good. Here they make the best sancocho in all of Cesar.",
          pronunciation: "a-HÁ, i eh-TA bwe-NI-si-mo. a-KI A-sen el me-HOR san-KO-cho de TO-do el SE-sar",
          literal: "Aha, and it-is very-good. Here they-make the best stew of all the Cesar.",
          why: "Two superlatives at once: “buenísimo” (absolute, extremely good) and “el mejor … de” (relative, the best in Cesar). “El mejor” is irregular -- from “bueno” -- and is never “el más bueno”."
        },
        {
          speaker: "Kate",
          target: "Pero el pescado se ve carísimo. ¿No hay uno más barato, o el más barato de todos?",
          translation: "But the fish looks super expensive. Isn't there a cheaper one, or the cheapest of all?",
          pronunciation: "PE-ro el peh-KA-do se ve ka-RI-si-mo. no ai U-no MÁ ba-RA-to, o el MÁ ba-RA-to de TO-doh",
          literal: "But the fish itself looks very-expensive. Not there-is one more cheap, or the most cheap of all?",
          why: "“Carísimo” is absolute (extremely expensive). Then Kate lines up a comparative, “más barato” (cheaper), against a relative superlative, “el más barato de todos” (the cheapest of all) -- the two degrees side by side."
        },
        {
          speaker: "Beto",
          target: "Tranquila, este es baratísimo y rebueno. Es la mejor comida de la costa, de una.",
          translation: "Relax, this one is dirt cheap and really good. It's the best food on the coast, hands down.",
          pronunciation: "tran-KI-la, EH-te eh ba-ra-TI-si-mo i re-BWE-no. eh la me-HOR ko-MI-da de la KOH-ta, de U-na",
          literal: "Calm, this is very-cheap and re-good. It-is the best food of the coast, of one.",
          why: "“Baratísimo” is the -ísimo superlative again. Then the coastal habit takes over: “rebueno” stacks the prefix “re-” for intensity, and “de una” crowns “la mejor … de” with total, no-doubt agreement."
        },
        {
          speaker: "Kate",
          target: "Erda, entonces pido el más grande de todos. ¡Qué sancocho tan bueno!",
          translation: "Wow, then I'll order the biggest of all. What a great sancocho!",
          pronunciation: "ER-da, en-TON-ses PI-do el MÁ GRAN-de de TO-doh. ke san-KO-cho tan BWE-no",
          literal: "Wow, then I-ask the most big of all. What stew so good!",
          why: "“El más grande de todos” is the relative superlative once more -- the biggest of the whole set. The closing “¡Qué … tan bueno!” is an exclamation of degree, a warm way to round off the praise."
        }
      ],
      vocabulary: [
        {
          term: "el/la más … de",
          explanation:
            "The relative superlative: the most … in a group. You use “el/la/los/las más + adjective + de”. The trap is that the group takes “de”, not “en”: “el más sabroso de Valledupar”, the tastiest in Valledupar.",
          literal: "the most … in/of",
          useWhen:
            "Singling out the top of a set: “el más grande de todos”, “la más rica de la costa”.",
          avoidWhen:
            "You are only comparing two things -- that is the comparative “más … que”, not a superlative.",
          register: "neutral",
          region: "Universal Spanish; the “de” where English says “in” is the classic slip.",
          related: ["el mejor", "-ísimo", "más … que", "el menos … de"],
          example: {
            target: "Es el sancocho más sabroso de Valledupar.",
            translation: "It's the tastiest sancocho in Valledupar."
          }
        },
        {
          term: "-ísimo / -ísima",
          explanation:
            "The absolute superlative ending: it means extremely, with no group to compare against. “Rico” (tasty) becomes “riquísimo” (absolutely delicious), and it agrees like any adjective: riquísima, riquísimos.",
          literal: "extremely / very very",
          useWhen:
            "Piling intensity onto an adjective: “buenísimo”, “carísimo”, “lindísimo”.",
          avoidWhen:
            "You mean the top of a named group -- that is “el más … de”, the relative superlative.",
          register: "friendly informal",
          region: "Universal Spanish; everywhere in speech, and a favorite on the coast.",
          related: ["el más … de", "muy", "re-", "súper-"],
          example: {
            target: "Este sancocho está riquísimo.",
            translation: "This sancocho is absolutely delicious."
          }
        },
        {
          term: "riquísimo, larguísimo, felicísimo",
          explanation:
            "Adding “-ísimo” often forces a spelling change to keep the sound: “rico” → “riquísimo” (c→qu), “largo” → “larguísimo” (g→gu), “feliz” → “felicísimo” (z→c). The change guards the hard k and g and softens the z.",
          literal: "spelling shifts before -ísimo",
          useWhen:
            "Any adjective ending in -co, -go or -z: rico, largo, feliz, loco, poco.",
          avoidWhen:
            "The adjective has no such ending -- then just add “-ísimo” plainly: “grande” → “grandísimo”.",
          register: "neutral",
          region: "Universal Spanish spelling rule.",
          related: ["-ísimo", "rico", "largo", "feliz"],
          example: {
            target: "Quedó larguísimo y riquísimo.",
            translation: "It came out really long and really tasty."
          }
        },
        {
          term: "el mejor / el peor",
          explanation:
            "The irregular superlatives: “el mejor” (the best) and “el peor” (the worst), from bueno and malo. Like their comparatives mejor/peor, they never take “más”: never “el más bueno”.",
          literal: "the best / the worst",
          useWhen:
            "Top or bottom of a group for quality: “el mejor de todos”, “el peor del año”.",
          avoidWhen:
            "A neutral quality with no ranking -- there “bueno/malo” stay as they are.",
          register: "neutral",
          region: "Universal Spanish; “el más bueno” marks a beginner.",
          related: ["mejor", "peor", "el más … de", "el máximo"],
          example: {
            target: "Aquí hacen el mejor sancocho del Cesar.",
            translation: "Here they make the best sancocho in Cesar."
          }
        },
        {
          term: "re-",
          explanation:
            "A colloquial prefix that cranks an adjective up: “rebueno” (really good), “rebarato” (dirt cheap). It stacks intensity fast in casual speech and is a very Colombian habit, strong on the coast.",
          literal: "really / super (prefix)",
          useWhen:
            "Casual, spoken emphasis: “rebueno”, “rerico”, “refácil”.",
          avoidWhen:
            "Formal or written Spanish, where “muy” or “-ísimo” reads better than the chatty “re-”.",
          register: "friendly informal",
          region: "Colombia and the Southern Cone; everyday and playful.",
          related: ["-ísimo", "súper-", "muy", "de una"],
          example: {
            target: "Este sancocho es rebueno.",
            translation: "This sancocho is really good."
          }
        },
        {
          term: "súper-",
          explanation:
            "Another intensifier, borrowed and everywhere: “súper barato” (super cheap), “súper rico”. It can sit as one word or two, and among younger Colombians it is even more common than “re-”.",
          literal: "super",
          useWhen:
            "Casual emphasis on almost anything: “súper bueno”, “súper lejos”, “súper fácil”.",
          avoidWhen:
            "Very formal writing, where it looks slangy -- reach for “sumamente” or “-ísimo”.",
          register: "friendly informal",
          region: "Universal in spoken Spanish; huge among young Colombians.",
          related: ["re-", "-ísimo", "muy", "bien"],
          example: {
            target: "Quedó súper barato.",
            translation: "It turned out super cheap."
          }
        },
        {
          term: "de una",
          explanation:
            "A coastal favorite meaning right away, for sure, or hands down. It signals total, no-hesitation agreement, and often crowns a superlative: “la mejor, de una”, the best, hands down.",
          literal: "at once / for sure",
          useWhen:
            "Snappy, wholehearted agreement: “¿Vamos? De una.”, “La mejor, de una.”.",
          avoidWhen:
            "You are hedging or unsure -- “de una” means zero doubt, so it clashes with a maybe.",
          register: "friendly informal",
          region: "Colombia, very common on the coast and among the young.",
          related: ["claro", "obvio", "listo", "sin duda"],
          example: {
            target: "La mejor comida de la costa, de una.",
            translation: "The best food on the coast, hands down."
          }
        }
      ],
      note:
        "Spanish has two superlatives. The relative one picks the top of a group: “el/la más + adjective + de” -- and note it is “de”, not “en”: “el más sabroso de Valledupar”. The absolute one just means extremely, with no group: the ending “-ísimo”, as in “riquísimo”, “carísimo”. Adding “-ísimo” often shifts the spelling to keep the sound -- rico→riquísimo (c→qu), largo→larguísimo (g→gu), feliz→felicísimo (z→c). Two adjectives go irregular: “el mejor” and “el peor”, never “el más bueno/malo”. And in casual Colombian speech people pile on intensity with “re-”, “súper-” and “de una” instead -- rebueno, súper barato, la mejor de una.",
      culture: [
        {
          label: "Two ways to say “the most”",
          body:
            "Spanish splits the superlative in two. The relative one ranks within a group -- “el más sabroso de Valledupar”, the tastiest in town -- and always marks the group with “de”. The absolute one, the “-ísimo” ending, means simply extremely, with nobody to beat: “riquísimo” is just wildly delicious. English blurs these into one “-est/most”, so it helps to hear them as two separate tools."
        },
        {
          label: "The -ísimo habit and its spelling tricks",
          body:
            "Colombians love “-ísimo”, but the ending bends the spelling to protect the sound. A hard c becomes qu (rico → riquísimo), a hard g becomes gu (largo → larguísimo), and a final z softens to c (feliz → felicísimo). Skip the change and you get the tell-tale learner forms “ricísimo” or “largísimo”. Say the word aloud: if the k or g would go soft, that is your cue to add the u."
        },
        {
          label: "re-, súper- and “de una”: coastal intensity",
          body:
            "In everyday coastal speech, people often skip the textbook superlative and just stack intensity. “Rebueno”, “rebarato”, “súper rico”, “súper lejos” pile a prefix on the adjective, and “de una” slams the door on any doubt -- la mejor, de una. It is faster and warmer than “el más … de”, and it is exactly how a Valledupar food stall really talks."
        },
        {
          label: "Valledupar, sancocho and vallenato",
          body:
            "Valledupar, capital of Cesar, is the cradle of vallenato, and every April its Festival de la Leyenda Vallenata fills the city with accordions. The food to match is sancocho -- a hearty stew of meat, yuca, plantain and corn, often the “trifásico” with three meats. Bragging that a stall serves “el mejor sancocho de Valledupar” is a local sport, and superlatives are the language of that pride."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “el más bueno” for “el mejor”",
          whyItFails:
            "Bueno has an irregular superlative, “el mejor”, so “el más bueno” is understood but instantly marks a beginner, exactly like “the most good” in English. Its twin is “el peor” from malo. Learn the pair whole.",
          sayInstead: "Aquí hacen el mejor sancocho del Cesar."
        },
        {
          mistake: "Doubling it as “el más mejor”",
          whyItFails:
            "“Mejor” already carries the “more/most”, so “el más mejor” stacks it twice, like “the most best”. To intensify instead use “mucho mejor” or crown it with “de todos”: “el mejor de todos”.",
          sayInstead: "Es el mejor de todos, sin discusión."
        },
        {
          mistake: "Writing “ricísimo” or “largísimo”",
          whyItFails:
            "The “-ísimo” ending forces a spelling change to hold the sound: rico → riquísimo (c→qu), largo → larguísimo (g→gu). “Ricísimo” and “largísimo” drop that change and read as clear learner errors.",
          sayInstead: "El sancocho quedó riquísimo."
        },
        {
          mistake: "Using “en” for the group instead of “de”",
          whyItFails:
            "A superlative marks the group it wins with “de”, not “en”: “el más sabroso de Valledupar”. Saying “el más sabroso en Valledupar” copies the English “in” and is one of the most common superlative slips.",
          sayInstead: "Es el más sabroso de Valledupar."
        }
      ],
      variations: [
        {
          form: "Es el más sabroso de Valledupar.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The relative superlative, ranking within a group with “de”."
        },
        {
          form: "Este sancocho está riquísimo.",
          register: "friendly informal",
          region: "Universal Spanish",
          whenToUse: "The absolute superlative, extreme degree with “-ísimo”."
        },
        {
          form: "Aquí hacen el mejor sancocho.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The irregular superlative “el mejor”, never “el más bueno”."
        },
        {
          form: "Este es rebueno y súper barato.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "The coastal habit of stacking “re-” and “súper-” for intensity."
        }
      ],
      prompt: "Beto calls the stew “el más sabroso de Valledupar.” Why “de” and not “en”?",
      choices: [
        "Because Spanish uses “en” for places, so “el más sabroso en Valledupar” is the standard superlative.",
        "Because the group a superlative ranks within is marked with “de”: “el más … de Valledupar”, the most … in Valledupar.",
        "Because “de” here means “from”, telling you the stew was cooked somewhere outside Valledupar."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence correctly says they make the best sancocho in Cesar?",
          choices: [
            "Aquí hacen el mejor sancocho del Cesar, por eso siempre hay fila.",
            "Aquí hacen el más bueno sancocho del Cesar, por eso siempre hay fila.",
            "Aquí hacen el más mejor sancocho del Cesar, por eso siempre hay fila."
          ],
          answer: 0,
          tests: "The superlative of bueno is “el mejor”, never “el más bueno” or the doubled “el más mejor”."
        },
        {
          prompt: "Kate wants to say the sancocho is extremely tasty. Which is right?",
          choices: [
            "Este sancocho está ricísimo, con harta yuca y carne.",
            "Este sancocho está riqísimo, con harta yuca y carne.",
            "Este sancocho está riquísimo, con harta yuca y carne."
          ],
          answer: 2,
          tests: "“Rico” shifts c→qu before “-ísimo”: “riquísimo”, not “ricísimo” or “riqísimo”."
        },
        {
          prompt: "How do you say it's the tastiest sancocho in Valledupar?",
          choices: [
            "Es el sancocho más sabroso en Valledupar, la gente viene de todas partes.",
            "Es el sancocho más sabroso de Valledupar, la gente viene de todas partes.",
            "Es el sancocho tan sabroso de Valledupar, la gente viene de todas partes."
          ],
          answer: 1,
          tests: "A superlative marks its group with “de”, not “en”, and needs “más”, not “tan”."
        }
      ]
    },
    en: {
      title: "El mejor puesto de comida en Sídney",
      situation:
        "Valentina llegó hace poco a Sídney y un sábado se mete a un mercado de comida lleno de puestos. Josh, un amigo australiano, la lleva entre olores y le va señalando cuál puesto tiene la comida más sabrosa, cuál es el más popular y cuál sale más barato. Todo en inglés, para que Valentina practique los superlativos -- “the …-est”, “the most …” -- antes de escoger su almuerzo.",
      setting: {
        who: "Josh es un australiano de Sídney que se sabe todos los puestos del mercado y habla rápido y relajado. Valentina es colombiana, llegó hace unas semanas y practica su inglés de fin de semana entre puestos de comida.",
        what: "Una decisión de almuerzo hecha de superlativos: cuál puesto tiene la comida más sabrosa, cuál es el más popular, cuál es el más barato y cuál sirve el bol más grande.",
        when: "Un sábado de mercado, con puestos humeando y gente comparando dónde comer.",
        where: "Sídney, en Australia, en un mercado de comida lleno de puestos un sábado.",
        why: "Nombrar lo mejor, lo más sabroso, lo más barato -- el superlativo -- es como cualquiera presume de comida, y en inglés se arma distinto que en español. Dominar “the …-est” y “the most” te deja coronar un favorito donde sea."
      },
      address: {
        form: "mixed",
        who: "Josh y Valentina se tratan por el nombre, con confianza, como es normal entre amigos jóvenes en Australia.",
        why: "El inglés no distingue tú de usted: la cercanía va en el tono, el nombre de pila y muletillas como “mate” o “no worries”. No hay un pronombre que marque respeto o distancia.",
        ifYouSwitch:
          "Si Valentina quisiera sonar más formal, no le serviría cambiar el “you”, porque no existe otro. La cortesía se marca con frases más largas y suaves -- “would you mind…”, “could I…” -- no con otro pronombre."
      },
      dialogue: [
        {
          speaker: "Josh",
          target: "Trust me, this stall has the tastiest food in the market.",
          translation: "Créeme, este puesto tiene la comida más sabrosa del mercado.",
          pronunciation: "trost mi, dis stol jas de TÉIS-ti-est fud in de MAR-ket",
          literal: "Confía-en-mí, este puesto tiene la comida más sabrosa en el mercado.",
          why: "El superlativo relativo con adjetivos cortos es “the + adjetivo + -est”, y cierra el grupo con “in”: “the tastiest food in the market” = la comida más sabrosa del mercado. Ojo: el inglés usa “in”, no “of”, para el lugar. “Tasty” termina en -y, así que hace “tastiest”."
        },
        {
          speaker: "Valentina",
          target: "Really? It smells amazing. Is it the most popular one here?",
          translation: "¿En serio? Huele increíble. ¿Es el más popular de aquí?",
          pronunciation: "RÍ-li? it smels a-MÉI-sing. is it de móust PO-piu-lar uán jíar?",
          literal: "¿Realmente? Ello huele increíble. ¿Es el más popular uno aquí?",
          why: "Con adjetivos largos el inglés no usa “-est” sino “the most”: “the most popular” = el más popular. La regla de oro: cortos con “-est”, largos con “the most”, y nunca los dos juntos."
        },
        {
          speaker: "Josh",
          target: "Yeah, it's the biggest and the best. The nicest owner too.",
          translation: "Sí, es el más grande y el mejor. Y el dueño más amable también.",
          pronunciation: "yea, its de BI-guest and de best. de NÁI-sest ÓU-ner tu",
          literal: "Sí, ello-es el más-grande y el mejor. El más-amable dueño también.",
          why: "Tres superlativos cortos: “biggest” (big dobla la g → biggest), “best” (irregular de good, nunca “goodest”) y “nicest” (nice pierde la e → nicest). Los adjetivos cortos forman el superlativo con “-est”."
        },
        {
          speaker: "Valentina",
          target: "But that pie looks like the most expensive thing here. What's the cheapest?",
          translation: "Pero ese pastel parece lo más caro de aquí. ¿Cuál es el más barato?",
          pronunciation: "bat dat pai luks laik de móust eks-PEN-siv zing jíar. uóts de CHÍ-pest?",
          literal: "Pero ese pastel luce como la más-cara cosa aquí. ¿Qué-es el más-barato?",
          why: "“The most expensive” (adjetivo largo, con “the most”) frente a “the cheapest” (corto, con “-est”). La elección entre “-est” y “the most” depende del largo del adjetivo, no de su significado."
        },
        {
          speaker: "Josh",
          target: "The laksa's the cheapest by far, and way better than the fancy stalls.",
          translation: "El laksa es de lejos el más barato, y muchísimo mejor que los puestos elegantes.",
          pronunciation: "de LAK-sas de CHÍ-pest bai far, and uéi BE-ter dan de FAN-si stols",
          literal: "El laksa-es el más-barato por lejos, y muchísimo mejor que los elegantes puestos.",
          why: "Para reforzar, el inglés usa “by far” (de lejos) y “way” (muchísimo): “the cheapest by far”, “way better”. Son el equivalente del “de una” o el “muchísimo” colombiano, y suben el grado sin romper la forma."
        },
        {
          speaker: "Valentina",
          target: "Then I'll get the biggest bowl for sure. Best lunch ever!",
          translation: "Entonces pido el bol más grande, de una. ¡El mejor almuerzo de la vida!",
          pronunciation: "den ail guet de BI-guest bóul for shúar. best lonch E-ver",
          literal: "Entonces yo-voy tomar el más-grande bol de-seguro. ¡Mejor almuerzo nunca!",
          why: "“The biggest bowl” repite el superlativo corto. “For sure” es “de una”, sin dudarlo, y “best … ever” (“best lunch ever”) es la forma coloquial de decir el mejor de todos los tiempos."
        }
      ],
      vocabulary: [
        {
          term: "the …-est",
          explanation:
            "El superlativo relativo con adjetivos cortos: “the + adjetivo + -est” = el más … . “The tallest”, el más alto; “the cheapest”, el más barato. Los de una sílaba, y muchos de dos en -y, toman “-est”.",
          literal: "el más …",
          useWhen:
            "Cima de un grupo con adjetivos cortos: “the biggest”, “the fastest”, “the tastiest”.",
          avoidWhen:
            "El adjetivo es largo, de tres o más sílabas -- ahí es “the most”, no “-est”.",
          register: "neutro",
          region: "Inglés universal; el molde del superlativo corto.",
          related: ["the most …", "the best", "-er than", "the least"],
          example: {
            target: "This is the cheapest stall in the market.",
            translation: "Este es el puesto más barato del mercado."
          }
        },
        {
          term: "the most …",
          explanation:
            "El superlativo con adjetivos largos: “the most + adjetivo” = el más … . “The most expensive”, el más caro; “the most popular”, el más popular. Nunca se combina con “-est”.",
          literal: "el más …",
          useWhen:
            "Cima de un grupo con adjetivos largos: “the most beautiful”, “the most difficult”.",
          avoidWhen:
            "El adjetivo es corto -- entonces “-est”: “the biggest”, no “the most big”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["the …-est", "the least", "more … than", "the best"],
          example: {
            target: "Is it the most popular one here?",
            translation: "¿Es el más popular de aquí?"
          }
        },
        {
          term: "biggest, happiest, nicest",
          explanation:
            "Al añadir “-est”, muchos adjetivos cambian de ortografía: “big” dobla la consonante → “biggest”; “happy” cambia y→i → “happiest”; “nice” pierde la e → “nicest”. Igual que el español ajusta la escritura en “-ísimo”.",
          literal: "cambios de ortografía con -est",
          useWhen:
            "Adjetivos cortos que doblan consonante, terminan en -y o en -e: big, hot, happy, easy, nice, large.",
          avoidWhen:
            "El adjetivo no tiene esas terminaciones -- entonces solo añades “-est”: “tall” → “tallest”.",
          register: "neutro",
          region: "Regla de ortografía del inglés.",
          related: ["the …-est", "big", "happy", "nice"],
          example: {
            target: "It's the biggest bowl here.",
            translation: "Es el bol más grande de aquí."
          }
        },
        {
          term: "the best / the worst",
          explanation:
            "Los superlativos irregulares: “the best” (el mejor) y “the worst” (el peor), de good y bad. Nunca “the goodest” ni “the most good”; son formas que se memorizan enteras, como “el mejor” en español.",
          literal: "el mejor / el peor",
          useWhen:
            "Cima o fondo de un grupo por calidad: “the best of all”, “the worst day”.",
          avoidWhen:
            "Una cualidad neutra sin ranking -- ahí “good/bad” se quedan como están.",
          register: "neutro",
          region: "Inglés universal; “the goodest” delata a un principiante.",
          related: ["good", "bad", "the …-est", "better"],
          example: {
            target: "It's the biggest and the best.",
            translation: "Es el más grande y el mejor."
          }
        },
        {
          term: "super / really / so",
          explanation:
            "Intensificadores del superlativo absoluto: “super good”, “really good”, “so good” dicen “buenísimo” sin comparar con un grupo. Son el equivalente coloquial de “-ísimo”, “súper-” o “re-” en español.",
          literal: "súper / muy / tan",
          useWhen:
            "Énfasis casual sin grupo: “super cheap”, “really tasty”, “so big”.",
          avoidWhen:
            "Quieres marcar la cima de un grupo -- ahí es el superlativo relativo, “the …-est … in”.",
          register: "amistoso informal",
          region: "Inglés universal; “super” es muy común en el habla joven.",
          related: ["very", "so", "totally", "extremely"],
          example: {
            target: "This one is super cheap.",
            translation: "Este es súper barato."
          }
        },
        {
          term: "by far / way",
          explanation:
            "Refuerzos del superlativo y del comparativo: “by far” (de lejos) y “way” (muchísimo). “The cheapest by far”, el más barato de lejos; “way better”, muchísimo mejor. Suben el grado sin romper la forma.",
          literal: "de lejos / muchísimo",
          useWhen:
            "Enfatizar una cima clara: “by far the best”, “way cheaper”, “way more fun”.",
          avoidWhen:
            "En registro muy formal, donde “by far” encaja pero “way” suena demasiado coloquial.",
          register: "amistoso informal",
          region: "Inglés universal; “way” es más informal que “by far”.",
          related: ["by a mile", "easily", "much", "far and away"],
          example: {
            target: "The laksa is the cheapest by far.",
            translation: "El laksa es de lejos el más barato."
          }
        },
        {
          term: "for sure",
          explanation:
            "“For sure” es “de una”, “seguro”, sin dudarlo: remata una elección con cero titubeo, y suele coronar un superlativo: “the best, for sure”, el mejor, de una.",
          literal: "de una / seguro",
          useWhen:
            "Acuerdo rotundo: “for sure”, “definitely”, “no doubt”.",
          avoidWhen:
            "Estás dudando -- “for sure” no admite titubeos.",
          register: "amistoso informal",
          region: "Inglés universal; “for sure” es cotidiano en Australia y en todas partes.",
          related: ["definitely", "no doubt", "absolutely", "hands down"],
          example: {
            target: "I'll get the biggest bowl for sure.",
            translation: "Pido el bol más grande, de una."
          }
        }
      ],
      note:
        "El inglés arma el superlativo relativo de dos formas: adjetivos cortos con “the + adjetivo + -est” (the tallest, the cheapest) y largos con “the most + adjetivo” (the most expensive), nunca los dos juntos. El grupo se marca con “in”, no “of”: “the best in the market”. Muchos cortos cambian de ortografía: big → biggest, happy → happiest, nice → nicest. Dos van irregulares: “the best” y “the worst”. Y para el superlativo absoluto (buenísimo, sin grupo) se usan “super”, “really”, “so”, y para reforzar, “by far” o “way”. Trampas: no digas “the most tasty” ni “the most best”, y usa “in”, no “of”, para el lugar.",
      culture: [
        {
          label: "Cortos con -est, largos con the most",
          body:
            "La gran regla del superlativo inglés es de sílabas. Los adjetivos de una sílaba (big, small, cheap) y muchos de dos en -y (tasty, happy) toman “-est”: biggest, tastiest. Los de tres o más (expensive, popular, beautiful) llevan “the most” delante: the most expensive. Cuando dudes con uno largo, “the most” casi nunca falla, y jamás se combinan “-est” y “the most”."
        },
        {
          label: "El grupo va con “in”, no “of”",
          body:
            "Al decir la cima de un grupo, el inglés marca el conjunto con “in”, sobre todo con lugares: “the best restaurant in the city”, “the tastiest food in the market”. El hispanohablante arrastra el “de” del español y dice “the best of the city”, que suena raro. Regla práctica: con sitios y grupos concretos, superlativo + “in”."
        },
        {
          label: "Cambios de ortografía: biggest, happiest, nicest",
          body:
            "Como el “-ísimo” español, el “-est” inglés retoca la escritura. Los cortos con una vocal y una consonante final doblan la consonante: big → biggest, hot → hottest. Los terminados en -y cambian a -i: happy → happiest, easy → easiest. Los que acaban en -e solo suman -st: nice → nicest, large → largest. Saltarse el cambio produce “bigest” o “happyest”, errores clásicos."
        },
        {
          label: "“Super”, “really”, “so” y el “best ever”",
          body:
            "Para el superlativo absoluto -- ese “buenísimo” sin grupo con quien competir -- el inglés casual usa “super”, “really” y “so”: super cheap, really good, so big. Y remata elogios con “best ever” (best lunch ever, el mejor almuerzo de la vida) o “by far”. En Australia lo oirás a cada paso; son la versión hablada de “-ísimo”, “re-” y “súper-”."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “the most tasty” instead of “the tastiest”",
          whyItFails:
            "“Tasty” es corto y termina en -y, así que forma el superlativo con “-est”: “the tastiest”. Anteponerle “the most” rompe la regla de los adjetivos cortos y suena a principiante.",
          sayInstead: "This is the tastiest food in the market."
        },
        {
          mistake: "Doubling it as “the most best”",
          whyItFails:
            "“Best” ya es superlativo, así que “the most best” lo duplica, como “el más mejor” en español. Es doble marca y siempre está mal; para reforzar se dice “by far the best”.",
          sayInstead: "It's the best stall by far."
        },
        {
          mistake: "Writing “the bigest” for “the biggest”",
          whyItFails:
            "“Big” dobla la consonante final antes de “-est”: “biggest”. “Bigest”, con una sola g, deja mal la ortografía, igual que olvidar el cambio de “rico” a “riquísimo” en español.",
          sayInstead: "I'll get the biggest bowl."
        },
        {
          mistake: "Saying “the best of the market” for “in the market”",
          whyItFails:
            "El superlativo marca su grupo con “in”, no con “of”: “the best in the market”. “The best of the market” calca el “de” español y suena raro; con lugares el inglés pide “in”.",
          sayInstead: "It's the best food in the market."
        }
      ],
      variations: [
        {
          form: "This is the tastiest food in the market.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "El superlativo corto con “-est” y el grupo con “in”."
        },
        {
          form: "It's the most popular stall here.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "El superlativo largo con “the most”."
        },
        {
          form: "It's the biggest and the best.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un corto irregular, “best”, junto a uno con “-est”."
        },
        {
          form: "It's the cheapest by far.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Reforzar el superlativo con “by far”."
        }
      ],
      prompt: "Josh dice que este puesto tiene “the tastiest food.” ¿Por qué “tastiest” y no “the most tasty”?",
      choices: [
        "Because “tasty” is a short adjective in -y, so its superlative is “the tastiest”, formed with “-est”.",
        "Because “tasty” is a long adjective, so “the most tasty” is the correct superlative in careful English.",
        "Because “tastiest” is only for drinks, while “the most tasty” is the proper form to describe any food."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál dice correctamente que este es el bol más grande del mercado?",
          choices: [
            "This is the most big bowl in the whole market, so I'm getting it.",
            "This is the bigest bowl in the whole market, so I'm getting it.",
            "This is the biggest bowl in the whole market, so I'm getting it."
          ],
          answer: 2,
          tests: "“Big” es corto y dobla la g: “the biggest”, no “the most big” ni “the bigest”."
        },
        {
          prompt: "¿Cómo se dice que es la mejor comida del mercado?",
          choices: [
            "It's the best food of the market, everyone lines up for it.",
            "It's the best food in the market, everyone lines up for it.",
            "It's the most best food in the market, everyone lines up for it."
          ],
          answer: 1,
          tests: "El grupo va con “in”, no “of”, y “best” no admite “the most”: “the best food in the market”."
        },
        {
          prompt: "¿Cuál dice que ese pastel es lo más caro de aquí?",
          choices: [
            "That pie is the most expensive thing here, way pricier than the rest.",
            "That pie is the expensivest thing here, way pricier than the rest.",
            "That pie is the most expensivest thing here, way pricier than the rest."
          ],
          answer: 0,
          tests: "“Expensive” es largo: “the most expensive”, nunca “expensivest” ni el doble “most expensivest”."
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/69-comparing-and-degree.js");
