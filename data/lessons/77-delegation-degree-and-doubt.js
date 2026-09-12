/*
 * Lesson block: work you arrange, results you cause, and a past you cannot confirm.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules -- `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first.
 *
 * All three lessons here are extension-tier grammar lessons, and all three exist
 * because cefr.coverage() found a B2 feature the corpus never taught. The
 * English causative ("have something done") appeared in exactly zero lessons,
 * because it has no Spanish trigger to be a translation of. The so/such ... that
 * result appeared twice. And the Spanish perfect subjunctive -- haya llegado --
 * appeared once in two hundred and thirty lessons, even though it is the normal
 * way to doubt something that has already happened.
 * This block now also teaches negated opinion, because the corpus had 34 uses
 * of no creo que and relatives with no lesson explaining the mood flip.
 */

lessons.push(
  {
    id: "getting-it-done-in-medellin",
    level: "Extending · Home and neighborhood",
    skills: ["grammar", "speaking", "listening", "context"],
    domain: "home-and-neighborhood",
    register: "familiar",
    structure: "causative-delegation",
    review: "pending",
    es: {
      title: "Having it fixed: the work you do not do yourself",
      situation: "Two neighbors compare the list of repairs each one had done before the rainy season started.",
      setting: {
        who: "Marcela and Hernán live on the same block in Laureles, Medellín, and have known each other long enough to compare bills without embarrassment.",
        what: "A five-minute comparison of household jobs: a roof, a car, a set of keys, a haircut. Not one of these was done by the person talking about it, and that is the whole grammatical point.",
        when: "Late March, just before the rainy season, which is when everyone on the block suddenly remembers the roof.",
        where: "The front step of Marcela's building, paisa Spanish, unhurried, with the door propped open.",
        why: "Marcela is trying to work out whether she overpaid. Hernán wants the name of a good roofer and is willing to trade information to get it."
      },
      address: {
        form: "vos",
        who: "Marcela and Hernán use vos with each other, which is the ordinary paisa form between neighbors on friendly terms.",
        why: "In Medellín vos is the default among people who know each other, and it carries warmth rather than disrespect. Tú sounds slightly imported here, and usted between neighbors this close would mark distance.",
        ifYouSwitch: "Usted would not be rude, but it would suggest a formality neither of them intends — the kind of thing you use with a neighbor you are annoyed at. Tú is understood everywhere but marks you as not from Medellín."
      },
      dialogue: [
        {
          speaker: "Marcela",
          target: "Vos, ¿ya mandaste a arreglar el techo o todavía no?",
          translation: "Hey, have you had the roof fixed yet, or not yet?",
          pronunciation: "bos, ya man-DÁS-te a a-rre-GLÁR el TÉ-cho o to-da-BÍ-a no",
          literal: "You, already you-sent to to-fix the roof or still not?",
          why: "“Mandar a + infinitive” is the everyday Colombian way to say you arranged for work to be done. The subject is the person who paid, not the person who climbed the ladder."
        },
        {
          speaker: "Hernán",
          target: "Sí, lo mandé a arreglar la semana pasada. También hice revisar las canales.",
          translation: "Yes, I had it fixed last week. I also had the gutters checked.",
          pronunciation: "sí, lo man-DÉ a a-rre-GLÁR la se-MÁ-na pa-SÁ-da. tam-BIÉN Í-se rre-bi-SÁR las ka-NÁ-les",
          literal: "Yes, it I-sent to to-fix the week past. Also I-made to-check the gutters.",
          why: "Two structures side by side. “Mandar a + infinitive” emphasizes the arranging; “hacer + infinitive” emphasizes causing it to happen. In practice paisas use both for the same kind of job."
        },
        {
          speaker: "Marcela",
          target: "¿Y cuánto te cobraron? Yo mandé a hacer unas llaves y me cobraron una fortuna.",
          translation: "And how much did they charge you? I had some keys made and they charged me a fortune.",
          pronunciation: "i KUÁN-to te ko-BRÁ-ron. yo man-DÉ a a-SÉR Ú-nas YÁ-bes i me ko-BRÁ-ron Ú-na for-TÚ-na",
          literal: "And how-much to-you they-charged? I I-sent to to-make some keys and to-me they-charged a fortune.",
          why: "“Me cobraron” with no stated subject is how Spanish talks about the anonymous people who did the work. Naming them would be odd; the third person plural covers it."
        },
        {
          speaker: "Hernán",
          target: "Ochenta mil. Ah, y también me hice cortar el pelo, aprovechando el sábado.",
          translation: "Eighty thousand. Oh, and I got my hair cut too, while I was at it on Saturday.",
          pronunciation: "o-CHÉN-ta mil. a, i tam-BIÉN me Í-se kor-TÁR el PÉ-lo, a-pro-be-CHÁN-do el SÁ-ba-do",
          literal: "Eighty thousand. Ah, and also to-me I-made to-cut the hair, taking-advantage the Saturday.",
          why: "“Hacerse + infinitive” adds the reflexive when the work is done to your own body. “Me hice cortar el pelo” is the standard way; “corté mi pelo” would mean you did it yourself."
        },
        {
          speaker: "Marcela",
          target: "Uy, entonces me salió carísimo. Voy a poner a mirar eso a otro señor.",
          translation: "Ugh, then I got badly overcharged. I'm going to get another guy to take a look at that.",
          pronunciation: "ui, en-TÓN-ses me sa-LIÓ ka-RÍ-si-mo. boi a po-NÉR a mi-RÁR É-so a Ó-tro se-ÑÓR",
          literal: "Ugh, then to-me it-came-out very-expensive. I-go to to-put to to-look that to another mister.",
          why: "“Poner a + infinitive” is a third option, slightly more casual, and it always names or implies the person you are putting to work."
        },
        {
          speaker: "Hernán",
          target: "Yo te paso el número. Pero mandalo a revisar antes de que llueva, ¿oíste?",
          translation: "I'll pass you the number. But have him check it before it rains, all right?",
          pronunciation: "yo te PÁ-so el NÚ-me-ro. PÉ-ro man-DÁ-lo a rre-bi-SÁR AN-tes de ke YUÉ-ba, oÍS-te",
          literal: "I to-you I-pass the number. But send-it to to-check before of that it-rains, you-heard?",
          why: "The vos imperative “mandá” stresses the last syllable and drops the -r of the infinitive. “Antes de que” always takes the subjunctive, hence “llueva”."
        }
      ],
      vocabulary: [
        {
          term: "mandar a + infinitivo",
          explanation: "The core structure: you arranged for something to be done by someone else. The person who pays is the grammatical subject, and the person who does the work often goes unmentioned.",
          literal: "to send to + verb",
          useWhen: "Any job you commissioned rather than performed: “Mandé a arreglar el carro”.",
          avoidWhen: "You actually did the work yourself — then use the plain verb: “Arreglé el carro”.",
          register: "neutral",
          region: "Colombia-wide and common across Latin America.",
          related: ["hacer + infinitivo", "poner a + infinitivo", "encargar", "contratar"],
          example: {
            target: "Mandé a arreglar el techo.",
            translation: "I had the roof fixed."
          }
        },
        {
          term: "hacer + infinitivo",
          explanation: "The other causative. It leans slightly more toward causing an outcome than toward hiring someone, but in everyday Colombian speech the two overlap almost completely.",
          literal: "to make + verb",
          useWhen: "Causing work to happen: “Hice revisar las canales”.",
          avoidWhen: "You want to stress that you contracted and paid a specific person; “mandar a” is a touch clearer there.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["mandar a + infinitivo", "hacerse + infinitivo", "dejar + infinitivo", "lograr"],
          example: {
            target: "Hice revisar las canales.",
            translation: "I had the gutters checked."
          }
        },
        {
          term: "hacerse + infinitivo",
          explanation: "The reflexive causative, used when the work is done to your own body or your own possessions. It is the normal way to talk about haircuts, tattoos, dental work and medical tests.",
          literal: "to make oneself + verb",
          useWhen: "Personal services: “Me hice cortar el pelo”, “Me hice sacar una muela”.",
          avoidWhen: "The job is on a house or a car; those take plain “mandar a” or “hacer”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["hacer + infinitivo", "mandar a + infinitivo", "sacarse", "operarse"],
          example: {
            target: "Me hice cortar el pelo.",
            translation: "I got my hair cut."
          }
        },
        {
          term: "poner a + infinitivo",
          explanation: "A more casual causative that always implies a specific person being set to work. It carries a faint sense of directing someone rather than commissioning them.",
          literal: "to put to + verb",
          useWhen: "Assigning a job to a known person: “Voy a poner a mirar eso a otro señor”.",
          avoidWhen: "Formal or written contexts, where “encargar” or “contratar” fits better.",
          register: "familiar",
          region: "Colombia-wide.",
          related: ["mandar a + infinitivo", "encargar", "dejar + infinitivo", "poner a hacer"],
          example: {
            target: "Puse a mirar el carro a un mecánico.",
            translation: "I got a mechanic to look at the car."
          }
        },
        {
          term: "me cobraron",
          explanation: "The bare third person plural with no stated subject, which is how Spanish refers to whoever did the charging. English usually has to say “they charged me” and leave “they” hanging.",
          literal: "to-me they-charged",
          useWhen: "Reporting a price without naming the business: “Me cobraron ochenta mil”.",
          avoidWhen: "You want to hold a specific person responsible; then name them.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["me salió", "me tocó pagar", "me hicieron", "me dijeron"],
          example: {
            target: "Me cobraron una fortuna.",
            translation: "They charged me a fortune."
          }
        },
        {
          term: "las canales",
          explanation: "Roof gutters. Note the gender: “las canales” are the gutters on a building, while “los canales” are television channels or waterways.",
          literal: "the gutters",
          useWhen: "Anything about rainwater on a roof: “Hice revisar las canales”.",
          avoidWhen: "You mean a TV channel or a canal, which are masculine.",
          register: "neutral",
          region: "Colombia and much of Latin America.",
          related: ["el techo", "la gotera", "el tejado", "el desagüe"],
          example: {
            target: "Hay que limpiar las canales.",
            translation: "The gutters need cleaning."
          }
        },
        {
          term: "me salió carísimo",
          explanation: "It ended up costing me a lot. “Salir” for what something ended up costing is extremely common, and the -ísimo ending intensifies without needing “muy”.",
          literal: "to-me it-came-out very-expensive",
          useWhen: "Complaining about a final price: “Me salió carísimo”.",
          avoidWhen: "Quoting a price before the fact; “salir” describes the outcome, not the quote.",
          register: "familiar",
          region: "Colombia-wide.",
          related: ["me costó", "una fortuna", "carito", "me tumbaron"],
          example: {
            target: "Entonces me salió carísimo.",
            translation: "Then I got badly overcharged."
          }
        }
      ],
      note: "Spanish gives you three ways to say that somebody else did the work, and they are not quite interchangeable. “Mandar a + infinitive” is the workhorse: it means you commissioned the job, and it is what most Colombians reach for first. “Hacer + infinitive” leans a little more toward causing the outcome than toward hiring anybody, which is why it fits things like “hice revisar las canales”. “Poner a + infinitive” is the most casual, and it always implies a specific person you set to work. There is a fourth form worth recognizing: “dejar + infinitive”, which means permitting rather than causing — “dejé entrar al técnico” is letting the technician in, not sending for him. The one rule that catches learners is the reflexive. When the work is done to your own body you need “hacerse”: “me hice cortar el pelo”, “me hice sacar una muela”. Without the reflexive pronoun, “corté el pelo” says you picked up the scissors yourself. English handles all of this with a single pattern — have or get, plus the object, plus a past participle — which is why English speakers rarely notice the distinction until they are asked to make it in Spanish.",
      culture: [
        {
          label: "Rainy season is a deadline everyone shares",
          body: "Medellín has two wet seasons, and the weeks before each one produce a quiet rush of roof work, gutter cleaning and drain clearing across the whole city. Neighbors compare contractors openly, and a good roofer's phone number circulates on a block the way a restaurant recommendation does elsewhere. Asking a neighbor “¿ya mandaste a arreglar el techo?” in late March is small talk, not nosiness, and admitting you have not is a reliable way to get three phone numbers you did not ask for."
        },
        {
          label: "Prices are compared out loud",
          body: "Colombians discuss what they paid for household work with a frankness that surprises many North Americans and Europeans. It is not competitive; it is protective. Informal tradespeople quote by judgment rather than by rate card, and comparing figures across a block is how a neighborhood works out what a fair price actually is. If someone tells you what they paid, they are usually inviting you to tell them what you paid, and answering vaguely reads as slightly unfriendly."
        },
        {
          label: "The unnamed “they” who did the work",
          body: "Spanish is comfortable leaving the worker unnamed. “Me cobraron”, “me lo arreglaron”, “me lo dejaron listo” — the third person plural does the job without anyone asking who exactly. This is not evasive; it simply reflects that the identity of the person who came is rarely the point of the sentence. English speakers often over-specify here, producing “the man who fixed my roof charged me”, where a Colombian would say four words and move on."
        }
      ],
      pitfalls: [
        {
          mistake: "Arreglé el techo la semana pasada.",
          whyItFails: "This says you personally repaired the roof. If you hired someone, the causative is not optional — it is the difference between paying a bill and climbing a ladder.",
          sayInstead: "Mandé a arreglar el techo la semana pasada."
        },
        {
          mistake: "Corté mi pelo el sábado.",
          whyItFails: "Two problems: it says you cut your own hair, and Spanish uses the definite article for body parts, not the possessive.",
          sayInstead: "Me hice cortar el pelo el sábado."
        },
        {
          mistake: "Mandé arreglar el carro.",
          whyItFails: "“Mandar” needs the preposition “a” before the infinitive in this structure. Dropping it is one of the most common learner slips.",
          sayInstead: "Mandé a arreglar el carro."
        },
        {
          mistake: "Tuve el techo arreglado.",
          whyItFails: "This is the English “have something done” translated word for word, and in Spanish it means you possessed a roof that was in a repaired state. It does not report that you commissioned work.",
          sayInstead: "Mandé a arreglar el techo."
        }
      ],
      variations: [
        {
          form: "Mandé a arreglar el techo.",
          register: "neutral",
          region: "Colombia-wide",
          whenToUse: "The default. Safe in any register and instantly understood."
        },
        {
          form: "Hice arreglar el techo.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "When the point is that the work got done, rather than that you hired someone."
        },
        {
          form: "Puse a un señor a arreglar el techo.",
          register: "familiar",
          region: "Colombia-wide",
          whenToUse: "Casual speech, when you want to mention the person you set to work."
        },
        {
          form: "Encargué la reparación del techo.",
          register: "formal",
          region: "Universal Spanish",
          whenToUse: "Writing, insurance claims, or any context where you need to sound businesslike."
        },
        {
          form: "Me lo arreglaron la semana pasada.",
          register: "familiar",
          region: "Universal Spanish",
          whenToUse: "When the fact that it is now fixed matters more than who you hired."
        }
      ],
      prompt: "Hernán paid a barber on Saturday. Which sentence reports that correctly?",
      choices: [
        "Me hice cortar el pelo el sábado.",
        "Corté mi pelo el sábado.",
        "Tuve mi pelo cortado el sábado."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "What is the difference between “hice entrar al técnico” and “dejé entrar al técnico”?",
          choices: [
            "There is no difference; both are causatives with the same meaning.",
            "The first is about the past and the second is about the future.",
            "The first means you caused him to come in, the second means you allowed it."
          ],
          answer: 2,
          tests: "hacer as causing against dejar as permitting"
        },
        {
          prompt: "Marcela says “me cobraron una fortuna” without naming anyone. Why is that normal?",
          choices: [
            "Because Spanish forbids naming a business in a complaint.",
            "Because the bare third person plural is how Spanish refers to unnamed workers.",
            "Because she does not actually know who did the work."
          ],
          answer: 1,
          tests: "the unstated third person plural subject"
        },
        {
          prompt: "Which sentence would tell a Colombian that you climbed onto the roof yourself?",
          choices: [
            "Mandé a arreglar el techo.",
            "Hice arreglar el techo.",
            "Arreglé el techo."
          ],
          answer: 2,
          tests: "plain verb against causative"
        }
      ]
    },
    en: {
      title: "Have it done: el causativo que el español no tiene",
      situation: "Dos vecinos comparan la lista de arreglos que cada uno mandó a hacer antes de que empezara el invierno.",
      setting: {
        who: "Marcy y Hernán viven en la misma cuadra de un barrio de Houston y se conocen lo suficiente como para comparar facturas sin pena.",
        what: "Cinco minutos comparando arreglos de la casa: un techo, un carro, unas llaves, un corte de pelo. Ninguno lo hizo la persona que lo cuenta, y ese es justamente el punto gramatical.",
        when: "Finales de marzo, justo antes de la temporada de tormentas, que es cuando toda la cuadra se acuerda del techo.",
        where: "El porche de la casa de Marcy, en Houston, Texas. Inglés estadounidense relajado, sin prisa.",
        why: "Marcy quiere saber si pagó de más. Hernán quiere el número de un buen techador y está dispuesto a intercambiar información para conseguirlo."
      },
      address: {
        form: "mixed",
        who: "Marcy y Hernán se tratan por el nombre y sin ninguna marca de formalidad, como vecinos de confianza.",
        why: "El inglés no distingue tú de usted. La cercanía se oye en el nombre corto, en las contracciones y en preguntar directamente cuánto costó algo, que entre vecinos en Texas es normal.",
        ifYouSwitch: "Usar apellido y “sir” aquí sonaría a que algo va mal entre ellos, o a que uno le está vendiendo algo al otro. La formalidad en inglés se marca con el tratamiento y con frases completas, no con el pronombre."
      },
      dialogue: [
        {
          speaker: "Marcy",
          target: "Hey, did you get the roof fixed yet, or not yet?",
          translation: "Vos, ¿ya mandaste a arreglar el techo o todavía no?",
          pronunciation: "jei, did yu get da ruf fikst yet, or nat yet",
          literal: "Oye, hiciste tú obtener el techo arreglado ya, o no todavía?",
          why: "Aquí está toda la estructura: get + el objeto + el participio. El sujeto es quien pagó, no quien subió al tejado. El español lo dice con “mandar a arreglar”."
        },
        {
          speaker: "Hernán",
          target: "Yeah, I had the roof repaired last week. I also had the gutters checked.",
          translation: "Sí, lo mandé a arreglar la semana pasada. También hice revisar las canales.",
          pronunciation: "yea, ai jad da ruf ri-PÉRD last uik. ai ÓL-sou jad da GÁ-ters chekt",
          literal: "Sí, yo tuve el techo reparado semana pasada. Yo también tuve las canales revisadas.",
          why: "“Have” y “get” son intercambiables aquí; “have” suena un poco más neutro y “get” un poco más coloquial. El orden nunca cambia: verbo, objeto, participio."
        },
        {
          speaker: "Marcy",
          target: "How much did they charge you? I had some keys made and they charged me a fortune.",
          translation: "¿Y cuánto te cobraron? Yo mandé a hacer unas llaves y me cobraron una fortuna.",
          pronunciation: "jau mach did dei charch yu. ai jad sam kis meid and dei charcht mi a FÓR-chun",
          literal: "Cuánto hicieron ellos cobrarte? Yo tuve algunas llaves hechas y ellos cobraron a-mí una fortuna.",
          why: "“They” sin antecedente hace exactamente lo que el español hace con “me cobraron”: se refiere a quien haya hecho el trabajo, sin nombrarlo."
        },
        {
          speaker: "Hernán",
          target: "Eighty bucks. Oh, and I got my hair cut on Saturday while I was out.",
          translation: "Ochenta mil. Ah, y también me hice cortar el pelo, aprovechando el sábado.",
          pronunciation: "ÉI-ti baks. ou, and ai gat mai jer kat on SÁ-tur-dei uail ai uas aut",
          literal: "Ochenta dólares. Oh, y yo obtuve mi pelo cortado en sábado mientras yo estaba fuera.",
          why: "Con el cuerpo, el inglés usa el posesivo — “my hair” — donde el español usa el reflexivo y el artículo: “me hice cortar el pelo”. Es el punto exacto donde se cruzan las dos lenguas."
        },
        {
          speaker: "Marcy",
          target: "Ugh, then I overpaid. I'm going to have another guy look at that.",
          translation: "Uy, entonces me salió carísimo. Voy a poner a mirar eso a otro señor.",
          pronunciation: "ag, den ai ou-ver-PÉID. aim GÓU-ing tu jav a-NÁ-der gai luk at dat",
          literal: "Uf, entonces yo sobrepagué. Yo voy a tener otro tipo mirar a eso.",
          why: "Cuando se nombra a la persona, el participio desaparece y queda el infinitivo sin “to”: “have someone look”. Es una construcción distinta de “have something looked at”."
        },
        {
          speaker: "Hernán",
          target: "I'll text you his number. But have him check it before it rains, all right?",
          translation: "Yo te paso el número. Pero mandalo a revisar antes de que llueva, ¿oíste?",
          pronunciation: "ail tekst yu jis NÚM-ber. bat jav jim chek it bi-FÓR it reins, ol rait",
          literal: "Yo te enviaré-texto su número. Pero ten él revisar eso antes ello llueve, todo correcto?",
          why: "“Have him check” con persona nombrada e infinitivo sin “to”. Note que el inglés usa presente (“it rains”) después de “before”, donde el español exige subjuntivo."
        }
      ],
      vocabulary: [
        {
          term: "have something done",
          explanation: "La estructura causativa central del inglés: have + objeto + participio pasado. Significa que usted mandó a hacer el trabajo, no que lo hizo. El orden es fijo y no admite variación.",
          literal: "tener algo hecho",
          useWhen: "Cualquier trabajo que usted encargó: “I had the roof repaired”.",
          avoidWhen: "Usted mismo hizo el trabajo; ahí va el verbo normal: “I repaired the roof”.",
          register: "neutro",
          region: "Universal.",
          related: ["get something done", "have someone do it", "get someone to do it", "hire"],
          example: {
            target: "I had the roof repaired last week.",
            translation: "Mandé a arreglar el techo la semana pasada."
          }
        },
        {
          term: "get something done",
          explanation: "Idéntico en significado a “have something done” y un poco más coloquial. En el inglés estadounidense hablado es probablemente el más frecuente de los dos.",
          literal: "obtener algo hecho",
          useWhen: "Conversación corriente: “Did you get the roof fixed?”",
          avoidWhen: "Escritura muy formal, donde “have” resulta algo más pulido.",
          register: "familiar",
          region: "Muy frecuente en Estados Unidos.",
          related: ["have something done", "get around to", "take it in", "drop it off"],
          example: {
            target: "Did you get the roof fixed yet?",
            translation: "¿Ya mandaste a arreglar el techo?"
          }
        },
        {
          term: "have someone do something",
          explanation: "La variante con persona nombrada. Cuando se dice quién hace el trabajo, el participio se sustituye por el infinitivo sin “to”: have him check, not have him to check.",
          literal: "tener a alguien hacer algo",
          useWhen: "Se menciona al trabajador: “Have him check it before it rains”.",
          avoidWhen: "No importa quién lo haga; entonces se usa el participio: “have it checked”.",
          register: "neutro",
          region: "Universal.",
          related: ["get someone to do something", "have something done", "make someone do it", "let someone do it"],
          example: {
            target: "I'm going to have another guy look at that.",
            translation: "Voy a poner a mirar eso a otro señor."
          }
        },
        {
          term: "get someone to do something",
          explanation: "Igual que la anterior pero con “get”, y aquí sí lleva “to” antes del infinitivo. Es la asimetría que más confunde: have him check, pero get him to check.",
          literal: "conseguir que alguien haga algo",
          useWhen: "Conversación informal: “I got my brother to fix it”.",
          avoidWhen: "Está usando “have”, que nunca lleva “to” en esta construcción.",
          register: "familiar",
          region: "Universal.",
          related: ["have someone do something", "talk someone into", "ask someone to", "persuade"],
          example: {
            target: "I got my brother to look at the car.",
            translation: "Puse a mirar el carro a mi hermano."
          }
        },
        {
          term: "they charged me",
          explanation: "El “they” sin antecedente, que se refiere a quien haya hecho el trabajo. Cumple la misma función que el “me cobraron” español, aunque el inglés está obligado a poner el pronombre.",
          literal: "ellos me cobraron",
          useWhen: "Contar un precio sin nombrar el negocio: “They charged me a fortune”.",
          avoidWhen: "Quiere responsabilizar a alguien concreto; ahí conviene nombrarlo.",
          register: "neutro",
          region: "Universal.",
          related: ["it cost me", "I got charged", "they wanted", "they quoted me"],
          example: {
            target: "They charged me a fortune.",
            translation: "Me cobraron una fortuna."
          }
        },
        {
          term: "the gutters",
          explanation: "Las canales del techo. En Texas se limpian antes de la temporada de tormentas, exactamente como en Medellín antes del invierno.",
          literal: "las canales",
          useWhen: "Todo lo relacionado con el agua de lluvia en un techo: “I had the gutters checked”.",
          avoidWhen: "Se refiere a un canal de televisión o a un canal de agua; esos son “channel” y “canal”.",
          register: "neutro",
          region: "Universal.",
          related: ["the roof", "downspout", "leak", "shingles"],
          example: {
            target: "I had the gutters checked.",
            translation: "Hice revisar las canales."
          }
        },
        {
          term: "I overpaid",
          explanation: "Pagué de más. El prefijo “over-” se pega a muchos verbos en inglés para decir que algo se hizo en exceso, y es una manera muy económica de decirlo.",
          literal: "yo sobrepagué",
          useWhen: "Reconocer que el precio fue excesivo: “Ugh, then I overpaid”.",
          avoidWhen: "Todavía no ha pagado; “overpaid” describe un hecho consumado.",
          register: "neutro",
          region: "Universal.",
          related: ["got ripped off", "it cost a fortune", "pricey", "a rip-off"],
          example: {
            target: "Ugh, then I overpaid.",
            translation: "Uy, entonces me salió carísimo."
          }
        }
      ],
      note: "Esta estructura no existe en español, y por eso los hispanohablantes casi nunca la producen aunque la entiendan al oírla. El inglés dice “I had the roof repaired”, literalmente “tuve el techo reparado”, y eso no significa que usted poseyera un techo en estado reparado: significa que mandó a arreglarlo. El orden es siempre el mismo — have o get, luego el objeto, luego el participio pasado — y no se puede alterar. “I had repaired the roof” es otra cosa completamente distinta: es un pluscuamperfecto que dice que usted lo había reparado con sus manos. Hay una segunda versión que se usa cuando se nombra a la persona, y ahí aparece la asimetría que más cuesta. Con “have” el verbo va en infinitivo sin “to”: “have him check it”. Con “get”, el mismo significado exige “to”: “get him to check it”. Ambas son correctas; mezclarlas no. Y una nota de cuerpo: el inglés usa el posesivo donde el español usa el artículo. “I got my hair cut”, nunca “I got the hair cut”. Como el corte de pelo, la muela sacada y la radiografía son justo los ejemplos más frecuentes de esta estructura, vale la pena fijar el posesivo desde el principio.",
      culture: [
        {
          label: "La temporada de tormentas también es una fecha límite",
          body: "En la costa de Texas, los meses previos a la temporada de huracanes producen una oleada de trabajo en techos, canales y desagües, igual que el invierno paisa. Los vecinos se pasan el número de un buen techador como quien recomienda un restaurante. Preguntarle a un vecino en marzo si ya mandó a revisar el techo es conversación normal de porche, no entrometimiento, y admitir que no lo ha hecho suele producir tres teléfonos que nadie pidió."
        },
        {
          label: "Hablar de precios: parecido, pero no igual",
          body: "En Estados Unidos se comparan precios de arreglos domésticos con bastante libertad entre vecinos, aunque menos que en Colombia y casi nunca cuando se trata del salario propio. Un hispanohablante recién llegado puede preguntar sin problema cuánto costó un techo o un carro; preguntar cuánto gana alguien, en cambio, se considera invasivo. La línea está en la diferencia entre un servicio contratado y el ingreso personal."
        },
        {
          label: "Do it yourself no es solo una moda",
          body: "Hay una cultura fuerte de hacer uno mismo los arreglos de la casa, con cadenas enormes de ferretería dedicadas a eso, y por lo mismo la distinción entre “I fixed the roof” y “I had the roof fixed” carga información social real. La primera frase invita a que le pregunten cómo lo hizo. Para un hispanohablante que dice “I fixed the roof” queriendo decir que lo mandó a arreglar, la conversación puede tomar un rumbo incómodo bastante rápido."
        }
      ],
      pitfalls: [
        {
          mistake: "I fixed the roof last week.",
          whyItFails: "Dice que usted mismo reparó el techo. Si contrató a alguien, el causativo no es opcional: es la diferencia entre pagar una factura y subirse al tejado.",
          sayInstead: "I had the roof fixed last week."
        },
        {
          mistake: "I had repaired the roof last week.",
          whyItFails: "Ese es el pluscuamperfecto, no el causativo. El participio tiene que ir después del objeto, no antes.",
          sayInstead: "I had the roof repaired last week."
        },
        {
          mistake: "I got my brother fix the car.",
          whyItFails: "Con “get” y una persona nombrada hace falta “to”. Es la asimetría con “have”, que no lo lleva.",
          sayInstead: "I got my brother to fix the car."
        },
        {
          mistake: "I got the hair cut on Saturday.",
          whyItFails: "El inglés usa el posesivo con las partes del cuerpo, al revés que el español. “The hair” suena a un pelo ajeno o a una peluca.",
          sayInstead: "I got my hair cut on Saturday."
        }
      ],
      variations: [
        {
          form: "I had the roof repaired.",
          register: "neutro",
          region: "Universal",
          whenToUse: "La forma estándar, buena tanto hablada como escrita."
        },
        {
          form: "I got the roof fixed.",
          register: "familiar",
          region: "Inglés estadounidense hablado",
          whenToUse: "Conversación corriente; es la más frecuente entre vecinos."
        },
        {
          form: "I had someone come out and fix the roof.",
          register: "familiar",
          region: "Inglés estadounidense hablado",
          whenToUse: "Cuando quiere mencionar que vino una persona, sin nombrarla."
        },
        {
          form: "I arranged for the roof to be repaired.",
          register: "formal",
          region: "Universal",
          whenToUse: "Correos, seguros y cualquier contexto donde necesite sonar formal."
        },
        {
          form: "The roof got fixed last week.",
          register: "familiar",
          region: "Universal",
          whenToUse: "Cuando lo importante es que ya está arreglado y no quién lo pagó."
        }
      ],
      prompt: "Hernán le pagó a un peluquero el sábado. ¿Cuál frase lo dice bien?",
      choices: [
        "I cut my hair on Saturday.",
        "I had cut my hair on Saturday.",
        "I got my hair cut on Saturday."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál de estas dos frases lleva “to” antes del verbo?",
          choices: [
            "get him ___ check it",
            "have him ___ check it",
            "Ninguna de las dos lleva “to”."
          ],
          answer: 0,
          tests: "la diferencia entre get someone to do y have someone do"
        },
        {
          prompt: "¿Qué significa “I had repaired the roof” frente a “I had the roof repaired”?",
          choices: [
            "Significan lo mismo; el orden de las palabras es libre.",
            "La primera dice que usted lo había reparado; la segunda, que lo mandó a arreglar.",
            "La primera es más formal que la segunda, pero significan lo mismo."
          ],
          answer: 1,
          tests: "pluscuamperfecto frente a causativo por el orden de palabras"
        },
        {
          prompt: "En español se dice “me hice cortar el pelo”. ¿Qué cambia en inglés?",
          choices: [
            "El inglés usa el artículo igual que el español: “the hair”.",
            "El inglés no marca de ninguna manera que el trabajo lo hizo otra persona.",
            "El inglés usa el posesivo: “my hair”, no “the hair”."
          ],
          answer: 2,
          tests: "posesivo inglés frente a artículo español con partes del cuerpo"
        }
      ]
    }
  },
  {
    id: "so-crowded-that-in-cartagena",
    level: "Extending · Social life",
    skills: ["grammar", "speaking", "listening", "reading"],
    domain: "social-life",
    register: "familiar",
    structure: "degree-result",
    review: "pending",
    es: {
      title: "So full we did not fit: cause and consequence",
      situation: "Two friends explain why their weekend plan fell apart, and every explanation is a cause with its consequence.",
      setting: {
        who: "Tatiana and Juliana are cousins in their late twenties who went to Cartagena for a long weekend and came back with a story rather than a good time.",
        what: "A five-minute account of everything that went wrong: a bar too full to get into, heat that stopped them walking, a hotel far enough out that they gave up on taxis.",
        when: "Monday, back home, the first chance they have had to compare notes properly.",
        where: "A kitchen table in Bucaramanga, coffee, no hurry. Santander Spanish, direct and a little blunt.",
        why: "Tatiana is explaining rather than complaining — she wants Juliana to understand that the weekend failed for reasons, not because they planned it badly."
      },
      address: {
        form: "tú",
        who: "The cousins use tú, the ordinary form between women of the same age in this family.",
        why: "Santander is mixed territory where usted is common even among relatives, but between cousins of the same generation tú carries the closeness they actually have.",
        ifYouSwitch: "Usted between these two would not be wrong — plenty of Santander families use it with everyone — but it would sound like the older generation talking. Vos is not used here."
      },
      dialogue: [
        {
          speaker: "Tatiana",
          target: "El bar estaba tan lleno que no pudimos ni entrar.",
          translation: "The bar was so full that we couldn't even get in.",
          pronunciation: "el bar es-TÁ-ba tan YÉ-no ke no pu-DÍ-mos ni en-TRÁR",
          literal: "The bar was so full that not we-could even to-enter.",
          why: "“Tan + adjective + que” is the core pattern: a degree, then the result it caused. The “que” is obligatory and never becomes “de que”."
        },
        {
          speaker: "Juliana",
          target: "¿Y no había otro? Había tanta gente que ni valía la pena buscar.",
          translation: "Wasn't there another one? There were so many people that it wasn't even worth looking.",
          pronunciation: "i no a-BÍ-a Ó-tro. a-BÍ-a TÁN-ta JÉN-te ke ni ba-LÍ-a la PÉ-na bus-KÁR",
          literal: "And not there-was other? There-was so-much people that not-even it-was-worth the trouble to-look.",
          why: "With a noun the word is “tanto”, and it agrees: tanta gente, tantos carros, tantas filas. This is the split English makes with “so” against “such”."
        },
        {
          speaker: "Tatiana",
          target: "Hacía tanto calor que nos devolvimos al hotel a las ocho.",
          translation: "It was so hot that we went back to the hotel at eight.",
          pronunciation: "a-SÍ-a TÁN-to ka-LÓR ke nos de-bol-BÍ-mos al o-TÉL a las Ó-cho",
          literal: "It-made so-much heat that us we-returned to-the hotel at the eight.",
          why: "Spanish treats heat as a quantity, not a quality: “hacía tanto calor”, never “tan caliente”. That is why it takes tanto rather than tan."
        },
        {
          speaker: "Juliana",
          target: "Ay, no. ¿Y el hotel quedaba muy lejos para irse caminando?",
          translation: "Oh no. And was the hotel too far to walk back to?",
          pronunciation: "ai, no. i el o-TÉL ke-DÁ-ba mui LÉ-jos PÁ-ra ÍR-se ka-mi-NÁN-do",
          literal: "Oh, no. And the hotel it-stayed very far for to-go-oneself walking?",
          why: "“Demasiado … para” or “muy … para” covers what English does with “too … to”. Spanish has no separate word for the excessive degree."
        },
        {
          speaker: "Tatiana",
          target: "Quedaba tan lejos que gastamos más en taxis que en el hotel.",
          translation: "It was so far that we spent more on taxis than on the hotel.",
          pronunciation: "ke-DÁ-ba tan LÉ-jos ke gas-TÁ-mos mas en TÁK-sis ke en el o-TÉL",
          literal: "It-stayed so far that we-spent more in taxis than in the hotel.",
          why: "Two different “que” in one sentence: the first introduces the result, the second is comparative. Spanish reuses the word and lets the structure disambiguate."
        },
        {
          speaker: "Juliana",
          target: "De lo caro que salió, mejor se hubieran quedado acá.",
          translation: "Given how expensive it turned out, you'd have been better off staying here.",
          pronunciation: "de lo KÁ-ro ke sa-LIÓ, me-JÓR se u-BIÉ-ran ke-DÁ-do a-KÁ",
          literal: "Of the expensive that it-came-out, better yourselves you-had stayed here.",
          why: "“De lo + adjective + que” is a fourth pattern that fronts the degree for emphasis. It is very common in speech and rarely taught."
        }
      ],
      vocabulary: [
        {
          term: "tan + adjetivo + que",
          explanation: "The main degree-result pattern with adjectives and adverbs. The degree comes first, the consequence follows the obligatory “que”.",
          literal: "so + adjective + that",
          useWhen: "The quality caused something: “Estaba tan lleno que no cupimos”.",
          avoidWhen: "You are counting a noun rather than describing a quality — then it is “tanto”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["tanto que", "tan ... como", "de lo ... que", "demasiado ... para"],
          example: {
            target: "El bar estaba tan lleno que no pudimos entrar.",
            translation: "The bar was so full that we couldn't get in."
          }
        },
        {
          term: "tanto/tanta/tantos/tantas + sustantivo + que",
          explanation: "The same structure for nouns, and it agrees in gender and number with the noun it counts. This is the form learners forget to make agree.",
          literal: "so much/many + noun + that",
          useWhen: "A quantity caused something: “Había tanta gente que no valía la pena”.",
          avoidWhen: "You are describing a quality; adjectives take “tan”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["tan ... que", "tanto que", "un montón de", "demasiado"],
          example: {
            target: "Había tanta gente que ni valía la pena buscar.",
            translation: "There were so many people that it wasn't even worth looking."
          }
        },
        {
          term: "tanto calor",
          explanation: "Spanish treats heat, cold, hunger and thirst as quantities you have or that the weather makes, so they take “tanto”, not “tan”. It is a fixed habit worth memorizing as a block.",
          literal: "so much heat",
          useWhen: "Weather and bodily states: “Hacía tanto calor que nos devolvimos”.",
          avoidWhen: "Describing an object's temperature — a cup of coffee is “tan caliente”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["hacer calor", "tener frío", "tanta hambre", "tanta sed"],
          example: {
            target: "Hacía tanto calor que nos devolvimos.",
            translation: "It was so hot that we went back."
          }
        },
        {
          term: "demasiado ... para",
          explanation: "The excessive degree, where the result is that something did not happen. Spanish also uses plain “muy … para” in speech, which English cannot do.",
          literal: "too ... for",
          useWhen: "An excess prevented something: “Quedaba demasiado lejos para irse caminando”.",
          avoidWhen: "The result actually happened; then you want “tan … que”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["muy ... para", "tan ... que", "no tan ... como", "lo suficiente para"],
          example: {
            target: "Quedaba demasiado lejos para irse caminando.",
            translation: "It was too far to walk back."
          }
        },
        {
          term: "de lo + adjetivo + que",
          explanation: "Fronts the degree for emphasis, roughly “given how expensive it was”. Extremely common in speech and almost never taught in courses.",
          literal: "of the + adjective + that",
          useWhen: "Leading with the degree as a reason: “De lo caro que salió, mejor no vamos”.",
          avoidWhen: "Formal writing, where a plain “dado que era tan caro” reads better.",
          register: "familiar",
          region: "Universal Spanish, very common in Colombia.",
          related: ["tan ... que", "con lo ... que", "lo que es", "de tanto"],
          example: {
            target: "De lo caro que salió, mejor nos hubiéramos quedado.",
            translation: "Given how expensive it was, we'd have been better off staying."
          }
        },
        {
          term: "no valía la pena",
          explanation: "It wasn't worth the trouble. “Valer la pena” is the standard way to weigh whether an effort pays off, and it appears constantly as the result half of these sentences.",
          literal: "not it-was-worth the sorrow",
          useWhen: "Judging an effort: “Había tanta gente que ni valía la pena buscar”.",
          avoidWhen: "You mean something is cheap or expensive; “valer” alone does price.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["vale la pena", "no da", "para qué", "ni modo"],
          example: {
            target: "Ni valía la pena buscar.",
            translation: "It wasn't even worth looking."
          }
        },
        {
          term: "nos devolvimos",
          explanation: "We turned back or headed home. Colombians use the reflexive “devolverse” for going back where you came from, where Spain would say “volver”.",
          literal: "ourselves we-returned",
          useWhen: "Turning back mid-outing: “Nos devolvimos al hotel a las ocho”.",
          avoidWhen: "Returning an object; that is “devolver” without the reflexive.",
          register: "neutral",
          region: "Strongly Colombian in this reflexive use.",
          related: ["volver", "regresar", "irse", "arrancar"],
          example: {
            target: "Nos devolvimos al hotel a las ocho.",
            translation: "We went back to the hotel at eight."
          }
        }
      ],
      note: "This is the rare structure where English is fussier than Spanish, so an English speaker learning Spanish gets a small refund. Spanish has one decision to make: “tan” before an adjective or adverb, “tanto” before a noun, with “tanto” agreeing in gender and number. English has three or four. Before an adjective it uses “so” — so full that. Before a noun it must switch to “such”, and then decide whether the noun needs an article — such a crowd that, such heat that. It also has a dedicated word for the excessive degree, “too”, which Spanish covers with plain “demasiado” or even “muy”. And it has a positive counterpart, “enough to”, which Spanish renders with “lo suficiente para”. Two habits are worth building deliberately. First, the fixed quantity expressions: heat, cold, hunger, thirst and sleep are all quantities in Spanish, so it is always “tanto calor”, never “tan caliente”, when you are talking about the weather. Second, the “que” after a degree is obligatory and is never “de que”. “Tan lleno de que no cupimos” is a very common learner error and it never sounds like a small one.",
      culture: [
        {
          label: "Cartagena in high season is a genuine crush",
          body: "Between December and January, and again around Easter, the walled city of Cartagena fills to a degree that surprises even Colombians from other cities. Bars stop letting people in, restaurant waits stretch past two hours, and the heat sits in the low thirties with humidity to match. Locals plan around it by going out very late or not at all, and the standard advice from friends is to stay outside the walls, where prices and crowds are both roughly half."
        },
        {
          label: "Telling the story is its own social form",
          body: "A weekend that went badly gets retold in Colombia as a structured story with causes and consequences, not as a list of complaints. The degree-result pattern is the engine of that retelling — each thing that went wrong is presented as so extreme that a specific outcome followed. Delivered well, it is entertainment rather than grievance, and the listener's job is to react at each step. Simply saying “it was bad” gives your listener nothing to work with."
        },
        {
          label: "Santander Spanish is famously direct",
          body: "Speakers from Bucaramanga and the surrounding region have a national reputation for bluntness, and they generally enjoy it. Sentences are shorter, softening phrases are fewer, and a direct “no” arrives without the cushioning a paisa or a rolo would add. Visitors sometimes read this as rudeness; it is not. Someone from Santander who is being warm sounds much the same as someone from Santander who is annoyed, and the difference is carried by context rather than by vocabulary."
        }
      ],
      pitfalls: [
        {
          mistake: "Estaba tan lleno de que no pudimos entrar.",
          whyItFails: "The degree pattern takes a bare “que”. Adding “de” is a hypercorrection borrowed from other structures and it stands out immediately.",
          sayInstead: "Estaba tan lleno que no pudimos entrar."
        },
        {
          mistake: "Hacía tan caliente que nos devolvimos.",
          whyItFails: "Spanish makes heat a quantity, so it takes “tanto calor”. “Caliente” describes an object's temperature, not the weather.",
          sayInstead: "Hacía tanto calor que nos devolvimos."
        },
        {
          mistake: "Había tanto gente que no valía la pena.",
          whyItFails: "“Tanto” agrees with the noun it counts, and “gente” is feminine singular.",
          sayInstead: "Había tanta gente que no valía la pena."
        },
        {
          mistake: "Quedaba tan lejos para irse caminando.",
          whyItFails: "“Tan” needs a result clause with “que”. When the result is that something did not happen, the pattern is “demasiado … para”.",
          sayInstead: "Quedaba demasiado lejos para irse caminando."
        }
      ],
      variations: [
        {
          form: "Estaba tan lleno que no pudimos entrar.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The default, correct in speech and writing alike."
        },
        {
          form: "Estaba llenísimo, no pudimos ni entrar.",
          register: "familiar",
          region: "Colombia-wide",
          whenToUse: "Casual speech, where the -ísimo ending replaces the whole structure."
        },
        {
          form: "De lo lleno que estaba, no pudimos entrar.",
          register: "familiar",
          region: "Universal Spanish",
          whenToUse: "When you want to lead with the degree as the reason."
        },
        {
          form: "Había tal cantidad de gente que fue imposible entrar.",
          register: "formal",
          region: "Universal Spanish",
          whenToUse: "Writing, reports, or any context that calls for a measured tone."
        },
        {
          form: "Estaba a reventar, imposible entrar.",
          register: "familiar",
          region: "Colombia-wide",
          whenToUse: "Very casual, among friends. “A reventar” means packed to bursting."
        }
      ],
      prompt: "Tatiana wants to say the heat was extreme enough that they went back. Which is right?",
      choices: [
        "Hacía tan caliente que nos devolvimos.",
        "Hacía tanto calor que nos devolvimos.",
        "Hacía tanto caliente que nos devolvimos."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Why is it “tanta gente” but “tan lleno”?",
          choices: [
            "Because “tanto” goes before nouns and agrees, while “tan” goes before adjectives.",
            "Because “tanta” is used in the past and “tan” in the present.",
            "Because “gente” is plural and “lleno” is singular."
          ],
          answer: 0,
          tests: "tanto with nouns against tan with adjectives"
        },
        {
          prompt: "Which sentence says the result did NOT happen?",
          choices: [
            "Quedaba tan lejos que gastamos una fortuna en taxis.",
            "Quedaba tan lejos que tuvimos que tomar taxi.",
            "Quedaba demasiado lejos para irse caminando."
          ],
          answer: 2,
          tests: "demasiado ... para as the blocked-result pattern"
        },
        {
          prompt: "What does “de lo caro que salió” do that “fue muy caro” does not?",
          choices: [
            "It states the price precisely instead of leaving it vague.",
            "It moves the statement into the future rather than the past.",
            "It fronts the degree for emphasis, as a reason for what follows."
          ],
          answer: 2,
          tests: "de lo + adjective + que as an emphatic fronting"
        }
      ]
    },
    en: {
      title: "‘So full that, such a crowd that’: el grado y su consecuencia",
      situation: "Dos amigas cuentan por qué el plan del fin de semana se les dañó, y cada explicación es una causa con su consecuencia.",
      setting: {
        who: "Tatiana y Julie son primas de casi treinta años que se fueron un fin de semana largo a Galveston y volvieron con una anécdota en vez de con buenos recuerdos.",
        what: "Cinco minutos contando todo lo que salió mal: un bar demasiado lleno para entrar, un calor que las obligó a volver, un hotel tan lejos que se les fue la plata en taxis.",
        when: "Lunes, ya de vuelta, la primera oportunidad de contarlo con calma.",
        where: "La mesa de la cocina de una casa en Houston, café, sin prisa. Inglés estadounidense corriente.",
        why: "Tatiana no se está quejando: está explicando. Quiere que Julie entienda que el fin de semana falló por razones concretas, no porque lo hubieran planeado mal."
      },
      address: {
        form: "mixed",
        who: "Las primas se hablan por el nombre, sin ninguna marca de formalidad.",
        why: "El inglés no distingue tú de usted. Entre primas de la misma edad, la confianza se oye en las contracciones, en las interrupciones y en lo directo de las preguntas.",
        ifYouSwitch: "No hay pronombre que cambiar. Si quisiera sonar formal tendría que alargar las frases y quitar las contracciones, y entre primas eso sonaría a burla."
      },
      dialogue: [
        {
          speaker: "Tatiana",
          target: "The bar was so packed that we couldn't even get in.",
          translation: "El bar estaba tan lleno que no pudimos ni entrar.",
          pronunciation: "da bar uas sou pakt dat ui KÚ-dent Í-ven get in",
          literal: "El bar estaba tan empacado que nosotras no-podíamos ni obtener adentro.",
          why: "“So + adjetivo + that” es el patrón central y el que más se parece al español. El “that” puede omitirse al hablar, pero conviene decirlo mientras aprende."
        },
        {
          speaker: "Julie",
          target: "Wasn't there another one? There was such a crowd that it wasn't worth looking.",
          translation: "¿Y no había otro? Había tanta gente que ni valía la pena buscar.",
          pronunciation: "UÁ-sent der a-NÁ-der uan. der uas sach a kraud dat it UÁ-sent uorz LÚ-king",
          literal: "No-estaba allí otro uno? Allí estaba tal una multitud que ello no-estaba valiendo mirar.",
          why: "Aquí está la diferencia clave con el español: delante de un sustantivo el inglés cambia “so” por “such”, y si el sustantivo es contable singular añade “a”."
        },
        {
          speaker: "Tatiana",
          target: "It was so hot that we went back to the hotel at eight.",
          translation: "Hacía tanto calor que nos devolvimos al hotel a las ocho.",
          pronunciation: "it uas sou jat dat ui uent bak tu da jo-TÉL at eit",
          literal: "Ello estaba tan caliente que nosotras fuimos atrás al hotel a ocho.",
          why: "El inglés trata el calor como una cualidad — “it was hot” — y por eso usa “so”. El español lo trata como cantidad y usa “tanto calor”. Es el error inverso más frecuente."
        },
        {
          speaker: "Julie",
          target: "Oh no. Was the hotel too far to walk back to?",
          translation: "Ay, no. ¿Y el hotel quedaba muy lejos para irse caminando?",
          pronunciation: "ou nou. uas da jo-TÉL tu far tu uok bak tu",
          literal: "Oh no. Estaba el hotel demasiado lejos para caminar atrás a?",
          why: "“Too + adjetivo + to + verbo” dice que el exceso impidió algo. El inglés tiene una palabra dedicada para esto; el español usa “demasiado” o incluso “muy”."
        },
        {
          speaker: "Tatiana",
          target: "It was so far that we spent more on cabs than on the hotel.",
          translation: "Quedaba tan lejos que gastamos más en taxis que en el hotel.",
          pronunciation: "it uas sou far dat ui spent mor on kabs dan on da jo-TÉL",
          literal: "Ello estaba tan lejos que nosotras gastamos más en taxis que en el hotel.",
          why: "Dos comparaciones distintas en una frase: “that” abre el resultado y “than” hace la comparación. El español usa “que” para las dos, y por eso los hispanohablantes dicen “more that” por error."
        },
        {
          speaker: "Julie",
          target: "For what you paid, you'd have been better off staying home.",
          translation: "De lo caro que salió, mejor se hubieran quedado acá.",
          pronunciation: "for uat yu peid, yud jav bin BÉ-ter of STÉI-ing joum",
          literal: "Por lo que tú pagaste, tú habrías estado mejor fuera quedándote casa.",
          why: "“For what you paid” es el equivalente natural del “de lo caro que salió”. El inglés no tiene esa construcción y la reemplaza con una frase preposicional."
        }
      ],
      vocabulary: [
        {
          term: "so + adjetivo + that",
          explanation: "El patrón básico del grado y su resultado, con adjetivos y adverbios. Es el que más se parece al español y el que menos problemas da.",
          literal: "tan + adjetivo + que",
          useWhen: "Una cualidad causó algo: “The bar was so packed that we couldn't get in”.",
          avoidWhen: "Lo que sigue es un sustantivo; ahí hace falta “such”.",
          register: "neutro",
          region: "Universal.",
          related: ["such ... that", "too ... to", "enough to", "so much that"],
          example: {
            target: "The bar was so packed that we couldn't get in.",
            translation: "El bar estaba tan lleno que no pudimos entrar."
          }
        },
        {
          term: "such (a/an) + sustantivo + that",
          explanation: "La forma obligatoria delante de un sustantivo. Si el sustantivo es contable y singular, además lleva artículo: such a crowd, such a mess. Si es incontable o plural, no: such heat, such long lines.",
          literal: "tal (un) + sustantivo + que",
          useWhen: "Una cantidad o un tipo causó algo: “There was such a crowd that it wasn't worth looking”.",
          avoidWhen: "Lo que sigue es un adjetivo solo; ahí va “so”.",
          register: "neutro",
          region: "Universal.",
          related: ["so ... that", "so many ... that", "so much ... that", "quite a"],
          example: {
            target: "There was such a crowd that it wasn't worth looking.",
            translation: "Había tanta gente que ni valía la pena buscar."
          }
        },
        {
          term: "so many / so much + sustantivo + that",
          explanation: "La alternativa a “such” cuando lo que cuenta es la cantidad y no el tipo. “So many” para contables, “so much” para incontables.",
          literal: "tantos / tanto + sustantivo + que",
          useWhen: "Contar: “There were so many people that we left”.",
          avoidWhen: "Quiere describir el carácter de la cosa y no cuántas hay; ahí “such” funciona mejor.",
          register: "neutro",
          region: "Universal.",
          related: ["such ... that", "so ... that", "a lot of", "too many"],
          example: {
            target: "There were so many people that we left.",
            translation: "Había tanta gente que nos fuimos."
          }
        },
        {
          term: "too + adjetivo + to + verbo",
          explanation: "El grado excesivo, donde el resultado es que algo no ocurrió. El inglés tiene una palabra dedicada para esto, y confundirla con “very” cambia el sentido por completo.",
          literal: "demasiado + adjetivo + para + verbo",
          useWhen: "Un exceso impidió algo: “Too far to walk”.",
          avoidWhen: "El resultado sí ocurrió; entonces va “so … that”.",
          register: "neutro",
          region: "Universal.",
          related: ["so ... that", "enough to", "not ... enough", "way too"],
          example: {
            target: "Was the hotel too far to walk back to?",
            translation: "¿El hotel quedaba muy lejos para irse caminando?"
          }
        },
        {
          term: "adjetivo + enough to + verbo",
          explanation: "La contraparte positiva de “too”: el grado alcanzó para que algo fuera posible. Note el orden, que sorprende a los hispanohablantes: el adjetivo va antes de “enough”.",
          literal: "suficientemente + adjetivo + para",
          useWhen: "El grado bastó: “The hotel was close enough to walk”.",
          avoidWhen: "Va delante de un sustantivo; ahí “enough” se antepone: “enough money”.",
          register: "neutro",
          region: "Universal.",
          related: ["too ... to", "so ... that", "sufficient", "barely"],
          example: {
            target: "It was close enough to walk.",
            translation: "Quedaba lo suficientemente cerca para ir a pie."
          }
        },
        {
          term: "packed",
          explanation: "Lleno hasta reventar, dicho de un bar, un bus o una playa. Es la palabra que un estadounidense usa antes que “full” para hablar de gente.",
          literal: "empacado",
          useWhen: "Un lugar con demasiada gente: “The bar was packed”.",
          avoidWhen: "Un recipiente lleno de líquido; eso es “full”.",
          register: "familiar",
          region: "Universal.",
          related: ["crowded", "jammed", "slammed", "standing room only"],
          example: {
            target: "The bar was packed.",
            translation: "El bar estaba a reventar."
          }
        },
        {
          term: "you'd have been better off",
          explanation: "Habría sido mejor para usted. “Better off” compara situaciones enteras, no cosas, y es muy frecuente al juzgar una decisión ya tomada.",
          literal: "tú habrías estado mejor fuera",
          useWhen: "Evaluar una decisión pasada: “You'd have been better off staying home”.",
          avoidWhen: "Compara dos objetos; ahí basta “better”.",
          register: "neutro",
          region: "Universal.",
          related: ["worse off", "should have", "might as well", "it would have been better"],
          example: {
            target: "You'd have been better off staying home.",
            translation: "Mejor se hubieran quedado en la casa."
          }
        }
      ],
      note: "Aquí el inglés es más quisquilloso que el español, y conviene saberlo de entrada. El español decide una sola cosa: “tan” delante de adjetivo y “tanto” delante de sustantivo, con concordancia. El inglés decide tres. Primero, si lo que sigue es un adjetivo o un sustantivo: “so full that”, pero “such a crowd that”. Segundo, si el sustantivo es contable y singular, porque entonces “such” arrastra artículo — “such a mess”, pero “such heat” y “such long lines” sin artículo. Y tercero, si prefiere contar en vez de describir, porque entonces reemplaza “such” por “so many” o “so much”: “so many people that we left”. A eso se suman dos patrones que el español resuelve con preposiciones. “Too … to” dice que el exceso impidió algo — “too far to walk” — y no significa lo mismo que “very far”, un error que cambia la frase entera. Y “enough to” dice que el grado alcanzó, con un orden que sorprende: el adjetivo va antes, “close enough to walk”, nunca “enough close”. Un aviso final: en “so far that we spent more on cabs than on the hotel” hay dos palabras distintas donde el español repite “que”. El resultado lleva “that”; la comparación lleva “than”.",
      culture: [
        {
          label: "Galveston en verano se llena de verdad",
          body: "La costa de Texas recibe en los fines de semana largos de verano a medio Houston, y la isla de Galveston pasa de tranquila a intransitable en cuestión de horas. El tráfico para entrar puede tardar dos horas, los restaurantes ponen listas de espera y el calor con humedad ronda los treinta y cinco grados. Los locales lo planean saliendo muy temprano o quedándose entre semana, y el consejo habitual entre amigos es hospedarse tierra adentro, donde todo cuesta la mitad."
        },
        {
          label: "Contar el fin de semana malo es un género",
          body: "En Estados Unidos, como en Colombia, un plan que salió mal se cuenta con estructura: cada cosa que falló se presenta como tan extrema que produjo una consecuencia. Ese es exactamente el patrón de esta lección, y por eso vale la pena dominarlo. Contado bien, el desastre entretiene; contado como una lista de quejas, incomoda. El oyente tiene un papel activo y reacciona en cada paso, y decir simplemente “it was bad” no le deja nada con qué trabajar."
        },
        {
          label: "Quejarse en inglés se disfraza de humor",
          body: "Hay una preferencia cultural marcada por envolver la queja en broma o en autocrítica. “We spent more on cabs than on the hotel” funciona porque la exageración es divertida y porque quien la dice se está riendo de su propia planeación. La misma información dicha en tono plano — “the hotel was badly located and it was expensive” — suena a reclamo. Para un hispanohablante acostumbrado a la franqueza directa, este envoltorio se aprende escuchando más que estudiando."
        }
      ],
      pitfalls: [
        {
          mistake: "There was so crowd that we left.",
          whyItFails: "Delante de un sustantivo el inglés exige “such”, y además “crowd” es contable singular, así que lleva artículo.",
          sayInstead: "There was such a crowd that we left."
        },
        {
          mistake: "It was such hot that we went back.",
          whyItFails: "“Hot” es un adjetivo, y los adjetivos llevan “so”. “Such” solo aparece delante de sustantivos.",
          sayInstead: "It was so hot that we went back."
        },
        {
          mistake: "The hotel was very far to walk.",
          whyItFails: "“Very” describe un grado pero no dice que impidiera nada. Para el resultado bloqueado hace falta “too”.",
          sayInstead: "The hotel was too far to walk."
        },
        {
          mistake: "We spent more on cabs that on the hotel.",
          whyItFails: "La comparación lleva “than”, no “that”. Es un error casi universal entre hispanohablantes porque el español usa “que” para ambas cosas.",
          sayInstead: "We spent more on cabs than on the hotel."
        }
      ],
      variations: [
        {
          form: "The bar was so packed that we couldn't get in.",
          register: "neutro",
          region: "Universal",
          whenToUse: "La forma estándar, buena hablada y escrita."
        },
        {
          form: "The bar was so packed we couldn't get in.",
          register: "familiar",
          region: "Inglés estadounidense hablado",
          whenToUse: "Conversación corriente; al hablar se omite el “that” constantemente."
        },
        {
          form: "There was such a crowd that we gave up.",
          register: "neutro",
          region: "Universal",
          whenToUse: "Cuando lo que causó el resultado es un sustantivo y no un adjetivo."
        },
        {
          form: "The venue was so crowded that entry proved impossible.",
          register: "formal",
          region: "Universal",
          whenToUse: "Escritura formal, informes, reclamaciones."
        },
        {
          form: "It was way too packed, so we bailed.",
          register: "familiar",
          region: "Inglés estadounidense hablado",
          whenToUse: "Muy informal, entre amigos. “Way too” intensifica y “bail” es marcharse."
        }
      ],
      prompt: "Julie quiere decir que había demasiada gente. El sustantivo es “crowd”. ¿Cuál va?",
      choices: [
        "There was such a crowd that it wasn't worth looking.",
        "There was so crowd that it wasn't worth looking.",
        "There was so much crowd that it wasn't worth looking."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuándo se usa “such” en vez de “so”?",
          choices: [
            "Cuando la frase está en pasado y no en presente.",
            "Cuando lo que sigue es un sustantivo y no un adjetivo.",
            "Cuando el resultado es negativo en vez de positivo."
          ],
          answer: 1,
          tests: "such delante de sustantivo frente a so delante de adjetivo"
        },
        {
          prompt: "¿Qué diferencia hay entre “too far to walk” y “very far”?",
          choices: [
            "“Too far to walk” dice que el exceso impidió caminar; “very far” solo describe.",
            "Ninguna: “too” y “very” son intercambiables delante de un adjetivo.",
            "“Very far” es más formal, pero significan exactamente lo mismo."
          ],
          answer: 0,
          tests: "too ... to como resultado bloqueado frente a very como simple grado"
        },
        {
          prompt: "En “more on cabs ___ on the hotel”, ¿qué palabra va?",
          choices: [
            "that, igual que en el resultado de la primera parte.",
            "as, porque se están comparando dos gastos.",
            "than, porque es una comparación y no un resultado."
          ],
          answer: 2,
          tests: "than en la comparación frente a that en el resultado"
        }
      ]
    }
  },
  {
    id: "hoping-it-already-arrived-in-bogota",
    level: "Extending · Work and employment",
    skills: ["grammar", "speaking", "register", "context"],
    domain: "work-and-employment",
    register: "courteous",
    structure: "perfect-subjunctive",
    review: "pending",
    es: {
      title: "I hope it arrived: doubting what already happened",
      situation: "A coordinator and her supplier review an order by phone that was supposed to arrive Friday and that no one has confirmed.",
      setting: {
        who: "Paola coordinates supplies for a clinic in Bogotá. Ramiro runs the small distributor that serves her. They have worked together for three years and are on good terms without being friends.",
        what: "A five-minute call about a delivery that may or may not have arrived on Friday. Neither of them can confirm anything, which is precisely why almost every sentence is in the subjunctive.",
        when: "Monday morning, before the clinic opens, with a week's schedule depending on the answer.",
        where: "A phone call between an office in Chapinero and a warehouse in Fontibón. Rolo Spanish, courteous, businesslike.",
        why: "Paola needs to know whether to reorder. Ramiro needs to avoid promising something he cannot verify, so he hedges every claim about the past."
      },
      address: {
        form: "usted",
        who: "Paola and Ramiro use usted with each other, as almost all Bogotá working relationships do.",
        why: "In Bogotá usted is the default at work regardless of how long two people have known each other, and switching away from it is rare even after years. It signals professionalism rather than distance.",
        ifYouSwitch: "Tú here would sound like an attempt at familiarity that neither has invited, and in a supplier relationship it could read as pressure. Vos is not used in Bogotá."
      },
      dialogue: [
        {
          speaker: "Paola",
          target: "Buenos días, Ramiro. Espero que ya haya llegado el pedido del viernes.",
          translation: "Good morning, Ramiro. I hope the Friday order has already arrived.",
          pronunciation: "BUÉ-nos DÍ-as, rra-MÍ-ro. es-PÉ-ro ke ya Á-ya ye-GÁ-do el pe-DÍ-do del BIÉR-nes",
          literal: "Good days, Ramiro. I-hope that already there-has arrived the order of-the Friday.",
          why: "“Espero que haya llegado” is about a past she cannot confirm. “Espero que llegue” would be about the future — a completely different statement."
        },
        {
          speaker: "Ramiro",
          target: "Buenos días. No creo que haya salido el viernes, para serle sincero.",
          translation: "Good morning. I don't think it went out on Friday, to be honest with you.",
          pronunciation: "BUÉ-nos DÍ-as. no KRÉ-o ke Á-ya sa-LÍ-do el BIÉR-nes, PÁ-ra SÉR-le sin-SÉ-ro",
          literal: "Good days. Not I-believe that it-has left the Friday, for to-be-to-you sincere.",
          why: "Negated “creer” forces the subjunctive, and because the event is finished it has to be the perfect subjunctive rather than the present."
        },
        {
          speaker: "Paola",
          target: "¿Y es posible que se haya quedado en la bodega todo el fin de semana?",
          translation: "And is it possible it sat in the warehouse all weekend?",
          pronunciation: "i es po-SÍ-ble ke se Á-ya ke-DÁ-do en la bo-DÉ-ga TÓ-do el fin de se-MÁ-na",
          literal: "And is-it possible that itself it-has stayed in the warehouse all the end of week?",
          why: "“Es posible que” is a classic trigger. The perfect form makes clear she is asking about something already over, not about a risk ahead."
        },
        {
          speaker: "Ramiro",
          target: "Puede ser. Ojalá lo hayan despachado el sábado, pero no le prometo nada.",
          translation: "Could be. Hopefully they shipped it on Saturday, but I'm not promising anything.",
          pronunciation: "PUÉ-de ser. o-JÁ-la lo Á-yan des-pa-CHÁ-do el SÁ-ba-do, PÉ-ro no le pro-MÉ-to NÁ-da",
          literal: "It-can to-be. Hopefully it they-have dispatched the Saturday, but not to-you I-promise nothing.",
          why: "“Ojalá” always takes the subjunctive, and the plural “hayan” agrees with the unnamed people in the warehouse."
        },
        {
          speaker: "Paola",
          target: "Me alegra que me lo haya dicho ahora y no el miércoles.",
          translation: "I'm glad you've told me now and not on Wednesday.",
          pronunciation: "me a-LÉ-gra ke me lo Á-ya DÍ-cho a-Ó-ra i no el MIÉR-ko-les",
          literal: "To-me it-gladdens that to-me it you-have said now and not the Wednesday.",
          why: "Emotion verbs take the subjunctive even when the fact is certain. She knows he told her — the subjunctive here marks her reaction, not any doubt."
        },
        {
          speaker: "Ramiro",
          target: "Apenas confirme, le aviso. Aunque haya salido tarde, llega el martes.",
          translation: "As soon as I confirm, I'll let you know. Even if it went out late, it'll arrive Tuesday.",
          pronunciation: "a-PÉ-nas kon-FÍR-me, le a-BÍ-so. aun-KE Á-ya sa-LÍ-do TÁR-de, YÉ-ga el MÁR-tes",
          literal: "Barely I-confirm, to-you I-notify. Although it-has left late, it-arrives the Tuesday.",
          why: "“Aunque” takes the subjunctive when the speaker will not commit to the fact. With the indicative — “aunque salió tarde” — he would be confirming that it did."
        }
      ],
      vocabulary: [
        {
          term: "haya + participio",
          explanation: "The perfect subjunctive: the subjunctive pointed at a finished event. It combines a trigger that demands the subjunctive with a past you are not confirming.",
          literal: "there-has + participle",
          useWhen: "Doubting, hoping about or reacting to something already over: “Espero que haya llegado”.",
          avoidWhen: "You are talking about the future; that is the plain present subjunctive, “espero que llegue”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["espero que", "ojalá", "no creo que", "es posible que"],
          example: {
            target: "Espero que ya haya llegado el pedido.",
            translation: "I hope the order has already arrived."
          }
        },
        {
          term: "no creo que",
          explanation: "Negating a verb of belief forces the subjunctive. In the affirmative it takes the indicative — “creo que llegó” — so the negation alone flips the mood.",
          literal: "not I-believe that",
          useWhen: "Expressing doubt about something finished: “No creo que haya salido el viernes”.",
          avoidWhen: "You do believe it; “creo que salió el viernes” with the indicative.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["dudo que", "no me parece que", "es posible que", "no estoy seguro de que"],
          example: {
            target: "No creo que haya salido el viernes.",
            translation: "I don't think it went out on Friday."
          }
        },
        {
          term: "es posible que",
          explanation: "One of the most reliable subjunctive triggers. Note that “es probable que” also takes it, while “seguramente” and “es verdad que” do not.",
          literal: "it-is possible that",
          useWhen: "Floating a possibility about the past: “¿Es posible que se haya quedado en la bodega?”",
          avoidWhen: "You are asserting a fact; certainty takes the indicative.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["puede ser que", "es probable que", "quizás", "a lo mejor"],
          example: {
            target: "Es posible que se haya quedado en la bodega.",
            translation: "It's possible it sat in the warehouse."
          }
        },
        {
          term: "ojalá",
          explanation: "From the Arabic for “God willing”, and always followed by the subjunctive. With the perfect it hopes about something already decided but unknown.",
          literal: "hopefully",
          useWhen: "Hoping about a finished event: “Ojalá lo hayan despachado el sábado”.",
          avoidWhen: "Reporting what actually happened; “ojalá” never introduces a fact.",
          register: "neutral",
          region: "Universal Spanish, very frequent in Colombia.",
          related: ["espero que", "que Dios quiera", "a ver si", "ojalá que"],
          example: {
            target: "Ojalá lo hayan despachado el sábado.",
            translation: "Hopefully they shipped it on Saturday."
          }
        },
        {
          term: "me alegra que",
          explanation: "Emotion verbs take the subjunctive even about facts you are certain of. The mood marks that you are reacting to the event, not asserting it.",
          literal: "to-me it-gladdens that",
          useWhen: "Reacting to something that already happened: “Me alegra que me lo haya dicho ahora”.",
          avoidWhen: "You are simply reporting the event rather than reacting to it.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["me sorprende que", "qué bueno que", "lamento que", "me da rabia que"],
          example: {
            target: "Me alegra que me lo haya dicho ahora.",
            translation: "I'm glad you've told me now."
          }
        },
        {
          term: "despachar",
          explanation: "To ship or send out an order. It is the standard word in Colombian commerce and logistics, and much more common than “enviar” in that setting.",
          literal: "to dispatch",
          useWhen: "Goods leaving a warehouse: “Lo despacharon el sábado”.",
          avoidWhen: "Sending a message or an email; that is “mandar” or “enviar”.",
          register: "neutral",
          region: "Colombia-wide in the commercial sense.",
          related: ["el despacho", "la bodega", "el pedido", "la guía"],
          example: {
            target: "Ojalá lo hayan despachado.",
            translation: "Hopefully they shipped it."
          }
        },
        {
          term: "apenas + subjuntivo",
          explanation: "As soon as. Like other time expressions pointing at the future, it takes the subjunctive: “apenas confirme”, not “apenas confirmo”.",
          literal: "barely + subjunctive",
          useWhen: "Promising to act the moment something happens: “Apenas confirme, le aviso”.",
          avoidWhen: "Describing a past event; then it takes the indicative: “apenas confirmé, le avisé”.",
          register: "neutral",
          region: "Very common in Colombia.",
          related: ["en cuanto", "tan pronto como", "cuando", "ni bien"],
          example: {
            target: "Apenas confirme, le aviso.",
            translation: "As soon as I confirm, I'll let you know."
          }
        }
      ],
      note: "The perfect subjunctive is the last piece of the subjunctive system, and it is much simpler than it looks: take any trigger you already know and point it at a finished event. “Espero que llegue” hopes about the future. “Espero que haya llegado” hopes about a past you cannot verify. The forms are haya, hayas, haya, hayamos, hayan, plus the past participle, and only “haya” changes — the participle never agrees. The reason this matters practically is that a great deal of adult conversation is about a past nobody can confirm. Deliveries, messages, decisions taken in a meeting you missed, whether somebody arrived safely: all of it needs this tense. Three notes. First, the trigger rules are exactly the ones you already know, so nothing new has to be memorized about which verbs take the subjunctive. Second, emotion verbs take it even when the fact is certain — “me alegra que haya venido” does not doubt that he came, it reacts to it. And third, “aunque” switches meaning with mood: “aunque salió tarde” confirms that it went out late, while “aunque haya salido tarde” refuses to confirm it.",
      culture: [
        {
          label: "Hedging is professional courtesy, not evasion",
          body: "A Colombian supplier who says “no creo que haya salido” rather than “no salió” is not dodging. Committing to a fact you have not personally verified is considered careless in a business relationship, because the person you tell will act on it. The subjunctive is the grammatical tool for saying what you believe while marking it as unverified, and using the indicative too confidently can damage trust more than admitting uncertainty would."
        },
        {
          label: "Monday morning is when the week gets rebuilt",
          body: "A great deal of Colombian business runs on Monday morning phone calls that reconstruct what did or did not happen on Friday. Warehouses close early, dispatch confirmations arrive late, and the weekend swallows the paper trail. This is exactly the environment the perfect subjunctive was built for, and a learner who works in Colombia will meet it in the first week, not in some advanced classroom."
        },
        {
          label: "Usted at work does not soften with time",
          body: "In Bogotá, two people can work together for a decade and still use usted every single day. Foreigners often expect the relationship to migrate to tú as it warms, and it usually does not. Continuing with usted after years is not coldness; it is the normal register of professional life in the interior of Colombia. The warmth shows up in other places — in the greeting, the small talk before the business, and the willingness to be honest about a delivery nobody can find."
        }
      ],
      pitfalls: [
        {
          mistake: "Espero que ya llegó el pedido.",
          whyItFails: "“Espero que” always takes the subjunctive. The indicative here is one of the most audible learner errors in Spanish.",
          sayInstead: "Espero que ya haya llegado el pedido."
        },
        {
          mistake: "No creo que haya salida el viernes.",
          whyItFails: "The participle never agrees with anything in this structure. It is always “salido”, whatever the subject's gender.",
          sayInstead: "No creo que haya salido el viernes."
        },
        {
          mistake: "Espero que llegue el pedido del viernes pasado.",
          whyItFails: "The present subjunctive points at the future, so this says you hope a past order will arrive at some point, which is not what you mean.",
          sayInstead: "Espero que haya llegado el pedido del viernes pasado."
        },
        {
          mistake: "Me alegra que me lo dijo ahora.",
          whyItFails: "Emotion verbs take the subjunctive even when the event is certain. Certainty is not what decides the mood here.",
          sayInstead: "Me alegra que me lo haya dicho ahora."
        }
      ],
      variations: [
        {
          form: "Espero que ya haya llegado el pedido.",
          register: "courteous",
          region: "Universal Spanish",
          whenToUse: "The default at work: polite, hedged, and grammatically exact."
        },
        {
          form: "Ojalá ya haya llegado el pedido.",
          register: "familiar",
          region: "Universal Spanish",
          whenToUse: "Slightly warmer and more personal, fine with a supplier you know well."
        },
        {
          form: "¿Sabe si ya llegó el pedido?",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "When you want plain information rather than to express a hope."
        },
        {
          form: "Quedo atenta a la confirmación del despacho.",
          register: "formal",
          region: "Universal Spanish",
          whenToUse: "Written follow-up by email, where the subjunctive gives way to a set formula."
        },
        {
          form: "A ver si ya llegó eso.",
          register: "familiar",
          region: "Colombia-wide",
          whenToUse: "Very casual, with a colleague rather than a supplier."
        }
      ],
      prompt: "Paola is talking about an order that was due last Friday and may already have arrived. Which is right?",
      choices: [
        "Espero que ya llegó el pedido.",
        "Espero que llegue el pedido del viernes.",
        "Espero que ya haya llegado el pedido."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "What is the difference between “aunque salió tarde” and “aunque haya salido tarde”?",
          choices: [
            "The first confirms it went out late; the second refuses to confirm it.",
            "The first is polite and the second is blunt, but they mean the same.",
            "The first is about a truck and the second about a person."
          ],
          answer: 0,
          tests: "aunque switching meaning between indicative and subjunctive"
        },
        {
          prompt: "Why is “me alegra que me lo haya dicho” subjunctive when she knows he told her?",
          choices: [
            "Because Colombians use the subjunctive after any past-tense verb.",
            "Because emotion verbs take the subjunctive regardless of certainty.",
            "Because she is not sure whether he really told her or not."
          ],
          answer: 1,
          tests: "emotion triggers taking the subjunctive despite certainty"
        },
        {
          prompt: "Which form goes with “ellos” in “Ojalá lo ___ despachado”?",
          choices: [
            "haya",
            "hayamos",
            "hayan"
          ],
          answer: 2,
          tests: "the haya/hayan conjugation of the auxiliary"
        }
      ]
    },
    en: {
      title: "May have arrived: la duda inglesa sobre lo ya pasado",
      situation: "Una coordinadora y su proveedor revisan por teléfono un pedido que debió llegar el viernes y del que nadie tiene confirmación.",
      setting: {
        who: "Paula coordina insumos para una clínica en Dallas. Ray dirige el pequeño distribuidor que la atiende. Llevan tres años trabajando juntos, en buenos términos sin ser amigos.",
        what: "Cinco minutos de llamada sobre una entrega que pudo o no haber llegado el viernes. Ninguno de los dos puede confirmar nada, y por eso cada frase viene envuelta en una cobertura.",
        when: "Lunes por la mañana, antes de que abra la clínica, con la programación de la semana dependiendo de la respuesta.",
        where: "Una llamada entre una oficina en Dallas y una bodega a las afueras. Inglés estadounidense de trabajo, cortés y práctico.",
        why: "Paula necesita saber si vuelve a pedir. Ray necesita no prometer nada que no pueda verificar, así que cubre cada afirmación sobre el pasado."
      },
      address: {
        form: "mixed",
        who: "Paula y Ray se tratan por el nombre de pila, que es lo normal en una relación comercial estadounidense de tres años.",
        why: "El inglés no tiene usted, así que la formalidad se construye con otras piezas: el saludo completo, frases enteras en vez de fragmentos, y fórmulas como “to be honest with you” o “I'll let you know”.",
        ifYouSwitch: "Pasar a “Mr.” y apellido en esta llamada sonaría a que hay un problema serio o a que va a llegar un abogado. En el trabajo estadounidense, el nombre de pila es lo neutro."
      },
      dialogue: [
        {
          speaker: "Paula",
          target: "Good morning, Ray. I'm hoping the Friday order has already arrived.",
          translation: "Buenos días, Ramiro. Espero que ya haya llegado el pedido del viernes.",
          pronunciation: "gud MÓR-ning, rei. aim JÓU-ping da FRÁI-dei ÓR-der jas ol-RÉ-di a-RÁIVD",
          literal: "Buena mañana, Ray. Yo-estoy esperando la orden del viernes ha ya llegado.",
          why: "El inglés no tiene subjuntivo aquí: usa el presente perfecto normal, “has arrived”. Toda la duda la carga el verbo “hoping”, no la forma del segundo verbo."
        },
        {
          speaker: "Ray",
          target: "Morning. I don't think it went out Friday, to be honest with you.",
          translation: "Buenos días. No creo que haya salido el viernes, para serle sincero.",
          pronunciation: "MÓR-ning. ai dount zink it uent aut FRÁI-dei, tu bi Á-nest uid yu",
          literal: "Mañana. Yo no pienso ello fue afuera viernes, para ser honesto contigo.",
          why: "Donde el español obliga al subjuntivo tras “no creo que”, el inglés usa el pasado simple sin más. La negación va en “don't think”, no en el segundo verbo."
        },
        {
          speaker: "Paula",
          target: "Is it possible it may have sat in the warehouse all weekend?",
          translation: "¿Y es posible que se haya quedado en la bodega todo el fin de semana?",
          pronunciation: "is it PÁ-si-bul it mei jav sat in da UÉR-jaus ol UÍK-end",
          literal: "Es ello posible ello puede haber sentado en la bodega todo fin-de-semana?",
          why: "“May have + participio” es lo más cerca que el inglés llega al “haya + participio”: duda sobre algo ya terminado. También sirven “might have” y “could have”."
        },
        {
          speaker: "Ray",
          target: "Could be. Hopefully they shipped it Saturday, but I can't promise anything.",
          translation: "Puede ser. Ojalá lo hayan despachado el sábado, pero no le prometo nada.",
          pronunciation: "kud bi. JÓUP-fu-li dei shipt it SÁ-tur-dei, bat ai kant PRÁ-mis É-ni-zing",
          literal: "Podría ser. Esperanzadamente ellos enviaron ello sábado, pero yo no-puedo prometer cualquier-cosa.",
          why: "“Hopefully” traduce “ojalá” pero no arrastra ningún cambio de forma: el verbo va en pasado simple, “shipped”."
        },
        {
          speaker: "Paula",
          target: "I'm glad you've told me now and not on Wednesday.",
          translation: "Me alegra que me lo haya dicho ahora y no el miércoles.",
          pronunciation: "aim glad yuv tould mi nau and nat on UÉNS-dei",
          literal: "Yo-estoy contenta tú-has dicho a-mí ahora y no en miércoles.",
          why: "El español exige subjuntivo tras un verbo de emoción aunque el hecho sea seguro. El inglés simplemente usa el presente perfecto, “you've told me”."
        },
        {
          speaker: "Ray",
          target: "As soon as I confirm, I'll let you know. Even if it went out late, it'll get there Tuesday.",
          translation: "Apenas confirme, le aviso. Aunque haya salido tarde, llega el martes.",
          pronunciation: "as sun as ai kon-FÉRM, ail let yu nou. Í-ven if it uent aut leit, i-tul get der TIÚS-dei",
          literal: "Tan pronto como yo confirmo, yo-te dejaré saber. Aun si ello fue afuera tarde, ello llegará allí martes.",
          why: "Dos trampas juntas: tras “as soon as” el inglés usa presente para el futuro, nunca “will”; y “even if” cubre lo que el español reparte entre “aunque” con indicativo y con subjuntivo."
        }
      ],
      vocabulary: [
        {
          term: "may have / might have + participio",
          explanation: "La manera inglesa de dudar de algo ya terminado. Es lo más parecido al “haya + participio”, aunque la duda la carga el modal y no un modo verbal.",
          literal: "puede haber + participio",
          useWhen: "Especular sobre el pasado: “It may have sat in the warehouse”.",
          avoidWhen: "Está seguro de lo que pasó; ahí va el pasado simple.",
          register: "neutro",
          region: "Universal.",
          related: ["could have", "must have", "probably", "I doubt"],
          example: {
            target: "It may have sat in the warehouse all weekend.",
            translation: "Es posible que se haya quedado en la bodega."
          }
        },
        {
          term: "I don't think + pasado simple",
          explanation: "Donde el español dice “no creo que haya salido”, el inglés dice “I don't think it went out”. No hay cambio de modo: la negación se queda en el primer verbo.",
          literal: "yo no pienso + pasado",
          useWhen: "Expresar duda sobre algo terminado: “I don't think it went out Friday”.",
          avoidWhen: "Quiere sonar tajante; entonces “it didn't go out” sin cobertura.",
          register: "neutro",
          region: "Universal.",
          related: ["I doubt", "I'm not sure", "as far as I know", "I don't believe"],
          example: {
            target: "I don't think it went out Friday.",
            translation: "No creo que haya salido el viernes."
          }
        },
        {
          term: "presente perfecto (has arrived)",
          explanation: "Have o has más participio, para un pasado que sigue teniendo efecto ahora. Es la forma que el inglés usa donde el español pondría el perfecto de subjuntivo tras un disparador.",
          literal: "ha llegado",
          useWhen: "Algo terminado cuyo resultado importa hoy: “The order has already arrived”.",
          avoidWhen: "Hay una hora o fecha concreta; entonces el inglés exige pasado simple: “it arrived on Friday”.",
          register: "neutro",
          region: "Universal.",
          related: ["already", "yet", "just", "since"],
          example: {
            target: "The Friday order has already arrived.",
            translation: "El pedido del viernes ya llegó."
          }
        },
        {
          term: "to be honest with you",
          explanation: "Fórmula que anuncia que lo que viene puede no gustar. Suaviza una mala noticia sin quitarle claridad, igual que el “para serle sincero” colombiano.",
          literal: "para ser honesto contigo",
          useWhen: "Antes de una respuesta incómoda: “I don't think it went out, to be honest with you”.",
          avoidWhen: "La noticia es buena o neutra; ahí sobra y suena a que oculta algo.",
          register: "neutro",
          region: "Universal.",
          related: ["frankly", "I'll be straight with you", "honestly", "look"],
          example: {
            target: "To be honest with you, I don't think it shipped.",
            translation: "Para serle sincero, no creo que lo hayan despachado."
          }
        },
        {
          term: "as soon as + presente",
          explanation: "Tras “as soon as”, “when”, “after” y “before”, el inglés usa presente para hablar del futuro, nunca “will”. Es una de las reglas que más cuesta automatizar.",
          literal: "tan pronto como + presente",
          useWhen: "Prometer una acción futura: “As soon as I confirm, I'll let you know”.",
          avoidWhen: "Está tentado a poner “will” después de “as soon as”; nunca va.",
          register: "neutro",
          region: "Universal.",
          related: ["once", "when", "the minute", "the moment"],
          example: {
            target: "As soon as I confirm, I'll let you know.",
            translation: "Apenas confirme, le aviso."
          }
        },
        {
          term: "even if",
          explanation: "Cubre lo que el español reparte entre “aunque” con indicativo y con subjuntivo. “Even if” plantea una hipótesis; “even though” admite un hecho.",
          literal: "aun si",
          useWhen: "El caso no está confirmado: “Even if it went out late, it'll get there Tuesday”.",
          avoidWhen: "El hecho es seguro; ahí va “even though it went out late”.",
          register: "neutro",
          region: "Universal.",
          related: ["even though", "although", "regardless", "whether or not"],
          example: {
            target: "Even if it went out late, it'll get there Tuesday.",
            translation: "Aunque haya salido tarde, llega el martes."
          }
        },
        {
          term: "ship (verbo)",
          explanation: "Despachar o enviar mercancía, sin que tenga que ir en barco. Es el verbo estándar del comercio estadounidense y aparece en cualquier confirmación de pedido.",
          literal: "despachar",
          useWhen: "Mercancía que sale de una bodega: “They shipped it Saturday”.",
          avoidWhen: "Se refiere a un mensaje o un correo; eso es “send”.",
          register: "neutro",
          region: "Universal.",
          related: ["dispatch", "the warehouse", "tracking number", "the order"],
          example: {
            target: "Hopefully they shipped it Saturday.",
            translation: "Ojalá lo hayan despachado el sábado."
          }
        }
      ],
      note: "Esta lección es una buena noticia disfrazada de gramática difícil. El inglés no tiene subjuntivo perfecto: donde el español obliga a decir “espero que haya llegado”, “no creo que haya salido”, “me alegra que me lo haya dicho”, el inglés usa formas que usted ya conoce. Después de “hope” va el presente perfecto o el pasado simple. Después de “I don't think” va el pasado simple, sin ningún cambio de forma. Y después de un verbo de emoción como “I'm glad” va el presente perfecto normal. La duda, cuando hay que marcarla, se carga en un modal: “may have”, “might have”, “could have” más participio. Eso es lo más cerca que llega el inglés al “haya + participio”, y note que el peso recae en el modal y no en el verbo principal. Quedan dos trampas que sí cuestan. La primera: después de “as soon as”, “when”, “after” y “before”, el inglés usa presente para hablar del futuro — “as soon as I confirm”, jamás “as soon as I will confirm”. La segunda: “even if” plantea una hipótesis y “even though” admite un hecho, una distinción que el español resuelve cambiando el modo detrás de “aunque”.",
      culture: [
        {
          label: "Cubrirse es cortesía profesional, no evasión",
          body: "Un proveedor estadounidense que dice “I don't think it shipped” en vez de “it didn't ship” no está esquivando la pregunta. Afirmar como un hecho algo que no ha verificado personalmente se considera descuidado en una relación comercial, porque quien lo escucha va a actuar en consecuencia. Los modales — may, might, could — son la herramienta para decir lo que uno cree marcándolo como no confirmado, y usarlos bien construye más confianza que sonar seguro y equivocarse."
        },
        {
          label: "El lunes por la mañana se reconstruye la semana",
          body: "Buena parte del trabajo administrativo estadounidense se apoya en llamadas de lunes temprano que reconstruyen lo que pasó o no pasó el viernes. Las bodegas cierran temprano, las confirmaciones de despacho llegan tarde y el fin de semana se traga el rastro documental. Es exactamente el escenario para el que existen “may have” y “I don't think”, y quien trabaje en Estados Unidos se los encontrará en la primera semana, no en un curso avanzado."
        },
        {
          label: "El nombre de pila no significa amistad",
          body: "Que Paula llame a su proveedor “Ray” desde el primer día no quiere decir que sean cercanos. En el trabajo estadounidense el nombre de pila es simplemente el registro neutro, y pasar a “Mr.” con el apellido señala distancia, formalidad legal o molestia. Para un colombiano acostumbrado a que el usted marque el respeto, esto puede parecer excesiva confianza; en realidad la formalidad está ahí, solo que la llevan las fórmulas y las frases completas en lugar del pronombre."
        }
      ],
      pitfalls: [
        {
          mistake: "I hope that the order have arrived.",
          whyItFails: "“The order” es singular, así que le corresponde “has”. El inglés no tiene aquí ninguna forma especial de subjuntivo que justifique “have”.",
          sayInstead: "I hope the order has arrived."
        },
        {
          mistake: "I don't think that it has gone out on Friday.",
          whyItFails: "Con una fecha concreta el inglés exige pasado simple. El presente perfecto no admite “on Friday”.",
          sayInstead: "I don't think it went out on Friday."
        },
        {
          mistake: "As soon as I will confirm, I'll let you know.",
          whyItFails: "Después de “as soon as” el inglés usa presente para el futuro. Poner “will” en las dos mitades es uno de los errores más audibles del hispanohablante.",
          sayInstead: "As soon as I confirm, I'll let you know."
        },
        {
          mistake: "It may sat in the warehouse all weekend.",
          whyItFails: "Los modales van seguidos de infinitivo, así que para el pasado hace falta “have” más participio.",
          sayInstead: "It may have sat in the warehouse all weekend."
        }
      ],
      variations: [
        {
          form: "I'm hoping the order has already arrived.",
          register: "cortés",
          region: "Universal",
          whenToUse: "El registro estándar de trabajo: cortés, cubierto y natural por teléfono."
        },
        {
          form: "Hopefully the order got there Friday.",
          register: "familiar",
          region: "Inglés estadounidense hablado",
          whenToUse: "Un poco más cercano, apropiado con un proveedor de confianza."
        },
        {
          form: "Do you know if the order arrived?",
          register: "neutro",
          region: "Universal",
          whenToUse: "Cuando quiere información directa en vez de expresar una esperanza."
        },
        {
          form: "Please confirm receipt of the Friday shipment at your earliest convenience.",
          register: "formal",
          region: "Universal",
          whenToUse: "Correo escrito, sobre todo si el asunto ya se está escalando."
        },
        {
          form: "Any word on Friday's order?",
          register: "familiar",
          region: "Inglés estadounidense hablado",
          whenToUse: "Mensaje de texto o chat interno, muy breve."
        }
      ],
      prompt: "Paula especula sobre algo ya terminado: que el pedido se quedó en la bodega. ¿Cuál va?",
      choices: [
        "It may sat in the warehouse all weekend.",
        "It may have sat in the warehouse all weekend.",
        "It may has sat in the warehouse all weekend."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "El español dice “no creo que haya salido”. ¿Qué hace el inglés?",
          choices: [
            "Usa el pasado simple sin cambiar nada: “I don't think it went out”.",
            "Usa un subjuntivo especial: “I don't think it have gone out”.",
            "Usa el futuro: “I don't think it will go out”."
          ],
          answer: 0,
          tests: "ausencia de subjuntivo tras I don't think"
        },
        {
          prompt: "¿Cuál es correcta después de “as soon as”?",
          choices: [
            "As soon as I will confirm, I'll let you know.",
            "As soon as I confirm, I'll let you know.",
            "As soon as I am confirming, I'll let you know."
          ],
          answer: 1,
          tests: "presente con valor de futuro tras as soon as"
        },
        {
          prompt: "¿Qué diferencia hay entre “even if it went out late” y “even though it went out late”?",
          choices: [
            "La primera es más formal, pero significan lo mismo.",
            "La primera habla del futuro y la segunda del pasado.",
            "La primera plantea una hipótesis; la segunda admite un hecho."
          ],
          answer: 2,
          tests: "even if hipotético frente a even though factual"
        }
      ]
    }
  },
  {
    id: "disagreeing-about-the-road-to-tunja",
    level: "Extending · Courteous disagreement",
    skills: ["grammar", "speaking", "listening", "register", "context"],
    domain: "transport-and-travel",
    register: "courteous",
    structure: "negated-opinion",
    review: "pending",
    es: {
      title: "I do not think it is serious: the mood changes when the opinion is denied",
      situation: "Two cousins have to decide whether to keep a medical trip after a landslide warning on the road out of town. One wants to cancel the shared taxi, the other disagrees without sounding careless or rude.",
      setting: {
        who: "Laura lives in Chiquinquirá and has arranged a shared taxi for her mother's appointment in Tunja. Mateo is her cousin, careful with money and with family obligations, and he knows that canceling today could mean waiting another month.",
        what: "A real disagreement about risk, money and responsibility. They are not debating grammar; they are deciding whether the road is safe enough, whether the warning is exaggerated, and whether the appointment matters more than the rumor.",
        when: "Early on a wet weekday morning, with the driver waiting for an answer and the clinic phone already hard to reach.",
        where: "Chiquinquirá, Boyacá, outside a small bus office near the basilica.",
        why: "The grammar matters because disagreement needs softness. In Colombian Spanish, saying “no creo que sea” lets Mateo push back while leaving room for Laura's worry, which is exactly the kind of tact a B2 speaker is expected to control."
      },
      address: {
        form: "tú",
        who: "Laura and Mateo use tú as cousins of the same generation who are close enough to disagree openly but still careful because the decision affects Laura's mother.",
        why: "Tú keeps the exchange familiar and warm. The politeness is not carried by usted here; it is carried by softened disagreement, phrases like “no creo que” and “no me parece que”, and by giving reasons instead of just saying no.",
        ifYouSwitch: "Usted would add distance and could make the disagreement sound heavier, almost like a formal warning. Vos would not fit this Boyacá family scene. The useful switch is not the pronoun but the mood after the negated opinion."
      },
      dialogue: [
        {
          speaker: "Laura",
          target: "Mateo, creo que la vía está muy peligrosa; mejor cancelamos el viaje.",
          translation: "Mateo, I think the road is very dangerous; we had better cancel the trip.",
          pronunciation: "ma-TE-o, KRE-o ke la BI-a es-TA mui pe-li-GRO-sa; me-HOR kan-se-LA-mos el BIA-he",
          literal: "Mateo, I-believe that the road is very dangerous; better we-cancel the trip.",
          why: "This is the affirmative side of the contrast. “Creo que” asserts Laura's view, so the verb after “que” stays indicative: “está”. She is presenting the danger as real enough to act on."
        },
        {
          speaker: "Mateo",
          target: "Yo no creo que sea tan grave como dicen, pero sí tenemos que llamar al conductor.",
          translation: "I don't think it is as serious as they say, but we do need to call the driver.",
          pronunciation: "yo no KRE-o ke SE-a tan GRA-be KO-mo DI-sen, PE-ro si te-NE-mos ke ya-MAR al kon-duk-TOR",
          literal: "I not believe that it-be so serious as they-say, but yes we-have to call the driver.",
          why: "Here is the mood flip: “no creo que” denies the opinion, so Spanish no longer presents “sea tan grave” as a vouched-for fact. English keeps “is”; Spanish moves to the subjunctive “sea”."
        },
        {
          speaker: "Laura",
          target: "Pero la señora de la tienda dice que cayó piedra en la curva.",
          translation: "But the woman at the shop says rocks fell on the curve.",
          pronunciation: "PE-ro la se-ÑO-ra de la TYEN-da DI-se ke ka-YO PYE-dra en la KUR-ba",
          literal: "But the lady of the shop says that fell rock on the curve.",
          why: "“Dice que” reports a claim as information, so the verb is indicative: “cayó”. The subjunctive is not about bad news or doubt in general; it is triggered by how the speaker frames the claim."
        },
        {
          speaker: "Mateo",
          target: "No me parece que esté cerrada la vía; si estuviera cerrada, ya habría aviso oficial.",
          translation: "It doesn't seem to me that the road is closed; if it were closed, there would already be an official notice.",
          pronunciation: "no me pa-RE-se ke es-TE se-RRA-da la BI-a; si es-tu-BYE-ra se-RRA-da, ya a-BRI-a a-BI-so o-fi-SYAL",
          literal: "Not to-me it-seems that it-be closed the road; if it-were closed, already there-would-be notice official.",
          why: "“No me parece que” belongs to the same family as “no creo que”. Mateo is not vouching for “está cerrada”, so he says “esté cerrada”. The negative opinion creates the subjunctive."
        },
        {
          speaker: "Laura",
          target: "¿Crees que mi mamá puede aguantar otra semana sin cita?",
          translation: "Do you think my mom can hold out another week without the appointment?",
          pronunciation: "KRE-es ke mi ma-MA PWE-de a-guan-TAR O-tra se-MA-na sin SI-ta",
          literal: "You-believe that my mom can endure another week without appointment?",
          why: "A genuine question with “¿crees que...?” often keeps the indicative: “puede”. Laura is asking for Mateo's belief, not denying one. That is why this line is not “pueda”."
        },
        {
          speaker: "Mateo",
          target: "No pienso que sea buena idea perder la cita; vamos despacio y paramos si llueve más.",
          translation: "I don't think losing the appointment is a good idea; let's go slowly and stop if it rains harder.",
          pronunciation: "no PYEN-so ke SE-a BWE-na i-DE-a per-DER la SI-ta; BA-mos des-PA-syo i pa-RA-mos si YWE-be mas",
          literal: "Not I-think that it-be good idea to-lose the appointment; we-go slowly and we-stop if it-rains more.",
          why: "“No pienso que” again denies the opinion, so the complement takes “sea”. This is also the register lesson: Mateo disagrees without saying “estás equivocada”. The grammar itself helps him be firm and gentle."
        }
      ],
      vocabulary: [
        {
          term: "creo que + indicativo",
          explanation: "The affirmative opinion frame. When you say “creo que”, “pienso que” or “me parece que” without negation, you are vouching for the idea after “que”, so Spanish presents it as a fact with the indicative.",
          literal: "I believe that + indicative",
          useWhen: "You are asserting your view: “Creo que la vía está peligrosa”, “Me parece que está cerrado”.",
          avoidWhen: "You are denying the opinion. The moment “no” negates the opinion verb, the complement normally flips to the subjunctive.",
          register: "neutral",
          region: "Universal Spanish; very common in Colombia for giving an opinion without sounding harsh.",
          related: ["pienso que", "me parece que", "considero que", "estoy seguro de que"],
          example: {
            target: "Creo que la vía está peligrosa.",
            translation: "I think the road is dangerous."
          }
        },
        {
          term: "no creo que + subjuntivo",
          explanation: "The negative opinion frame. The no does not simply translate English word for word; it changes the status of the second verb. You no longer present the idea as a fact you stand behind, so Spanish uses the subjunctive.",
          literal: "I do not believe that + subjunctive",
          useWhen: "Disagreeing or doubting tactfully: “No creo que sea tan grave”, “No creo que alcance el tiempo”.",
          avoidWhen: "You actually assert the idea. “Creo que es grave” stays indicative because you are putting your weight behind it.",
          register: "neutral to courteous",
          region: "Universal Spanish; one of the safest ways to disagree in Colombia.",
          related: ["no pienso que", "no me parece que", "dudo que", "no considero que"],
          example: {
            target: "No creo que sea tan grave.",
            translation: "I don't think it is that serious."
          }
        },
        {
          term: "no me parece que + subjuntivo",
          explanation: "A slightly softer cousin of “no creo que”. It sounds like “it doesn't seem to me that...”, which gives the other person room to disagree back. The grammar is the same: negative opinion, then subjunctive.",
          literal: "not to-me it-seems that + subjunctive",
          useWhen: "Softening disagreement: “No me parece que esté cerrado”, “No me parece que sea justo”.",
          avoidWhen: "You want to state a clear perception in the affirmative: “Me parece que está cerrado” uses indicative.",
          register: "courteous",
          region: "Very natural in Colombian Spanish, especially when you want to avoid sounding blunt.",
          related: ["me parece que", "no creo que", "no veo que", "no diría que"],
          example: {
            target: "No me parece que esté cerrada la vía.",
            translation: "It doesn't seem to me that the road is closed."
          }
        },
        {
          term: "no es cierto que / no es verdad que",
          explanation: "Impersonal ways to deny a claim. Because the sentence says the claim is not true, Spanish does not present the claim itself as real, and the verb after “que” becomes subjunctive.",
          literal: "it is not certain/true that + subjunctive",
          useWhen: "Correcting a rumor or claim: “No es cierto que hayan cerrado”, “No es verdad que toque pagar hoy”.",
          avoidWhen: "You affirm the truth of the claim. “Es cierto que cerraron” and “Es verdad que toca pagar” take the indicative.",
          register: "neutral to formal",
          region: "Universal Spanish; useful in offices, schools and service counters.",
          related: ["es cierto que", "es verdad que", "no parece que", "no es evidente que"],
          example: {
            target: "No es cierto que la vía esté cerrada.",
            translation: "It is not true that the road is closed."
          }
        },
        {
          term: "no parece que + subjuntivo",
          explanation: "An impersonal version of “no me parece que”. It avoids putting the whole disagreement on yourself and can sound measured, especially when you are reading a situation from signs rather than from certainty.",
          literal: "it does not seem that + subjunctive",
          useWhen: "Judging from evidence: “No parece que vaya a llover”, “No parece que haya trancón”.",
          avoidWhen: "The evidence points clearly the other way and you want the affirmative: “Parece que va a llover” uses indicative.",
          register: "neutral",
          region: "Universal Spanish, common in reports and careful speech.",
          related: ["parece que", "no me parece que", "al parecer", "según veo"],
          example: {
            target: "No parece que vaya a llover más.",
            translation: "It doesn't look like it is going to rain more."
          }
        },
        {
          term: "¿Crees que...? / ¿No crees que...?",
          explanation: "Questions are the slippery case. A plain information question, “¿Crees que es grave?”, usually keeps the indicative because you are asking what the other person thinks. A negative question, “¿No crees que sea grave?”, often leans subjunctive because it is closer to challenging or inviting agreement, but real usage varies and both moods are heard.",
          literal: "do you believe that? / don't you believe that?",
          useWhen: "Use the indicative in a genuine question: “¿Crees que está abierto?”. Use the subjunctive when the negative question carries doubt or pressure: “¿No crees que sea tarde?”.",
          avoidWhen: "Do not turn every question into subjunctive automatically. The flip belongs most reliably to negated assertions, not to every sentence with a question mark.",
          register: "neutral",
          region: "Universal Spanish with real variation by speaker, region and exact intention.",
          related: ["¿piensas que...?", "¿no te parece que...?", "preguntar", "insinuar"],
          example: {
            target: "¿No crees que sea mejor esperar?",
            translation: "Don't you think it might be better to wait?"
          }
        },
        {
          term: "discrepar sin sonar brusco",
          explanation: "Negated opinion is more than a grammar trigger. In Colombian politeness it lets you disagree while making your statement less frontal. You say “no creo que sea buena idea” instead of “eso es mala idea”.",
          literal: "to disagree without sounding abrupt",
          useWhen: "B2 speaking exams, family decisions, work meetings and service conversations where you need to push back with reasons.",
          avoidWhen: "An urgent safety command where clarity matters more than tact. Then a direct “No sigamos” may be better than a softened opinion.",
          register: "courteous",
          region: "Especially valuable in Colombia, where softened disagreement often protects the relationship.",
          related: ["con respeto", "yo diría que", "de pronto", "mejor"],
          example: {
            target: "No pienso que sea buena idea perder la cita.",
            translation: "I don't think losing the appointment is a good idea."
          }
        }
      ],
      note: "The rule is simple, but it feels backwards if English is your first language. Affirming an opinion takes the indicative: “Creo que es grave”, “Me parece que está cerrado”. You are presenting the idea as something you stand behind. Denying the opinion takes the subjunctive: “No creo que sea grave”, “No me parece que esté cerrado”. You are no longer vouching for the idea as real, so Spanish stops presenting it as a fact. That is why the affirmative and the negative do not use the same mood. English says “I think it is serious” and “I don't think it is serious”; the verb “is” never moves. Spanish does move it, and the word-for-word map “No creo que es grave” is exactly the learner trap this lesson exists to prevent. The family is broad: no creo que, no pienso que, no considero que, no me parece que, no es cierto que, no es verdad que and no parece que all point toward the subjunctive. Questions need a separate note. A genuine question like “¿Crees que es grave?” commonly keeps the indicative because you are simply asking what the other person believes. A negative question like “¿No crees que sea grave?” often takes the subjunctive because it sounds more like doubt, pressure or an invitation to agree, but both moods are heard depending on speaker and intention. For an exam answer, make the safest contrast clear: “Creo que es” against “No creo que sea”.",
      culture: [
        {
          label: "Disagreeing without slamming the door",
          body: "Colombian disagreement often arrives padded with care. “No creo que sea buena idea” leaves room for the other person to keep talking; “eso es mala idea” can feel like a judgment. The subjunctive is not politeness by itself, but this construction is one of the most practical polite tools a learner can acquire. It lets you push back in a family decision, a work meeting or a B2 speaking exam while sounding thoughtful rather than combative."
        },
        {
          label: "Boyacá, rain and travel decisions",
          body: "Chiquinquirá sits in the highlands of Boyacá, where rain, curves and rural roads make travel decisions feel less theoretical than they do on a city map. People rely on drivers, shopkeepers, radio warnings and official notices, and those sources do not always agree. That is exactly where “no creo que” earns its keep: it lets a speaker weigh a rumor without either dismissing it rudely or treating it as confirmed fact."
        },
        {
          label: "Why the exam cares",
          body: "B2 exam tasks often reward the ability to nuance disagreement. You may have to reject a proposal, question a claim or negotiate a plan without sounding aggressive. Negated opinion with the subjunctive is a compact way to do that. It proves more than conjugation; it proves that you can present a claim as unconfirmed, soften your stance and still make a decision. That is why this small mood flip belongs in a speaking syllabus."
        }
      ],
      pitfalls: [
        {
          mistake: "No creo que es grave.",
          whyItFails: "This is the English sentence “I don't think it is serious” copied word for word. Spanish hears the negated opinion and expects the subjunctive, because you are not presenting “it is serious” as a fact you vouch for.",
          sayInstead: "No creo que sea grave."
        },
        {
          mistake: "Creo que sea grave.",
          whyItFails: "The subjunctive has been carried over from the negative pattern into the affirmative. But “creo que” asserts the opinion, so the complement is presented as real and takes the indicative.",
          sayInstead: "Creo que es grave."
        },
        {
          mistake: "No me parece que está cerrado.",
          whyItFails: "“No me parece que” is a negated opinion expression, not a plain report. Because the speaker is not vouching for the closure, Spanish uses “esté”, not “está”.",
          sayInstead: "No me parece que esté cerrado."
        },
        {
          mistake: "Treating every question as subjunctive",
          whyItFails: "A genuine “¿Crees que...?” question commonly keeps the indicative: “¿Crees que está abierto?”. The subjunctive is most reliable after negated assertions, and negative questions vary by intention.",
          sayInstead: "¿Crees que está abierto?"
        }
      ],
      variations: [
        {
          form: "Creo que es grave.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Affirming an opinion and presenting the idea as real, so the verb is indicative."
        },
        {
          form: "No creo que sea grave.",
          register: "courteous",
          region: "Universal Spanish",
          whenToUse: "Denying the opinion, disagreeing or doubting, so the verb flips to subjunctive."
        },
        {
          form: "No me parece que esté cerrado.",
          register: "courteous",
          region: "Colombia-wide",
          whenToUse: "A softer disagreement, useful when you want to push back without sounding blunt."
        },
        {
          form: "¿No crees que sea mejor esperar?",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A negative question that leans toward doubt or persuasion. Usage varies, and indicative is also heard."
        }
      ],
      prompt: "Mateo wants to disagree with “it is serious” after “no creo que”. Which sentence is correct?",
      choices: [
        "No creo que es tan grave como dicen.",
        "No creo que sea tan grave como dicen.",
        "Creo que sea tan grave como dicen."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which minimal pair shows the mood flip correctly?",
          choices: [
            "Creo que es grave; no creo que sea grave.",
            "Creo que sea grave; no creo que es grave.",
            "Creo que está grave; no creo que está grave."
          ],
          answer: 0,
          tests: "affirmative opinion with indicative against negated opinion with subjunctive"
        },
        {
          prompt: "Laura says “Me parece que está cerrado.” Now make it negative.",
          choices: [
            "No me parece que está cerrado.",
            "No me parece que estará cerrado.",
            "No me parece que esté cerrado."
          ],
          answer: 2,
          tests: "no me parece que as a negated opinion trigger"
        },
        {
          prompt: "Why is “¿Crees que está abierto?” not automatically subjunctive?",
          choices: [
            "Because all questions in Spanish keep the indicative after que.",
            "Because a genuine question can ask for belief without denying it.",
            "Because abrir is an irregular verb and has no subjunctive here."
          ],
          answer: 1,
          tests: "question form versus negated assertion"
        }
      ]
    },
    en: {
      title: "No creo que sea: por qué el inglés no cambia el segundo verbo",
      situation: "Dos primos en Waco tienen que decidir si mantienen un viaje médico por la I-35 después de una alerta de tormenta. Una quiere cancelar, el otro no está de acuerdo, pero necesita sonar cuidadoso y no imprudente.",
      setting: {
        who: "Lina vive en Waco y organizó el viaje de su mamá a una cita en Temple. Mateo, su primo, es cuidadoso con la plata y con las obligaciones familiares, y sabe que cancelar hoy puede significar esperar semanas.",
        what: "Un desacuerdo real sobre riesgo, plata y responsabilidad. No discuten gramática; deciden si la carretera está segura, si la alerta está exagerada y si la cita médica pesa más que el miedo.",
        when: "Una mañana húmeda entre semana, con el conductor esperando respuesta y el teléfono de la clínica ocupado.",
        where: "Waco, Texas, afuera de una pequeña farmacia cerca de Waco Drive, con los reportes de tráfico de la I-35 sonando en el teléfono. Inglés estadounidense corriente.",
        why: "La construcción importa porque el inglés discrepa de otra manera. Donde el español cambia “es” a “sea” después de “no creo que”, el inglés mantiene “is” y pone toda la negación en “I don't think”."
      },
      address: {
        form: "mixed",
        who: "Lina y Mateo se tratan por el nombre, como primos de la misma generación que pueden contradecirse sin formalidad.",
        why: "El inglés no tiene tú ni usted. La cortesía se construye con el tono y con frases suaves como “I don't think” o “it doesn't look like”, no con un pronombre distinto ni con un subjuntivo visible.",
        ifYouSwitch: "No hay pronombre que cambiar. Si Mateo quisiera sonar más formal, alargaría la frase, bajaría la seguridad y daría razones; no cambiaría “you”, porque “you” sirve para todo."
      },
      dialogue: [
        {
          speaker: "Lina",
          target: "Mateo, I think the highway is too dangerous; we should cancel the trip.",
          translation: "Mateo, creo que la carretera está muy peligrosa; mejor cancelamos el viaje.",
          pronunciation: "ma-TÉ-o, ai zink de JÁI-uei is tu DÉIN-yer-es; ui shud KÁN-sel de trip",
          literal: "Mateo, yo pienso la autopista es demasiado peligrosa; deberíamos cancelar el viaje.",
          why: "El inglés afirma la opinión con “I think + oración”. El segundo verbo va normal: “is”. En español también hay indicativo en la afirmativa: “creo que está”."
        },
        {
          speaker: "Mateo",
          target: "I don't think it's that serious, but we do need to call the driver.",
          translation: "No creo que sea tan grave, pero sí tenemos que llamar al conductor.",
          pronunciation: "ai dount zink its dat SÍ-ri-es, bat ui du nid tu kol de DRÁI-ver",
          literal: "Yo no pienso ello-es tan serio, pero sí necesitamos llamar al conductor.",
          why: "Aquí está la diferencia central. El español cambia a subjuntivo: “no creo que sea”. El inglés no cambia “is”; simplemente niega “think”: “I don't think it's”."
        },
        {
          speaker: "Lina",
          target: "But the cashier says debris fell near the exit to Temple.",
          translation: "Pero la cajera dice que cayó escombro cerca de la salida hacia Temple.",
          pronunciation: "bat de ka-SHÍR sez de-BRÍ fol nir di ÉG-zit tu TÉM-pel",
          literal: "Pero la cajera dice escombro cayó cerca de la salida a Temple.",
          why: "“Says” introduce una información reportada y el verbo sigue normal: “fell”. Igual que en español, reportar una afirmación no basta por sí solo para crear subjuntivo."
        },
        {
          speaker: "Mateo",
          target: "It doesn't look like the road is closed; if it were closed, there would be an official alert.",
          translation: "No parece que la carretera esté cerrada; si estuviera cerrada, habría una alerta oficial.",
          pronunciation: "it DÁ-zent luk laik de roud is klouzd; if it uer klouzd, der wud bi an o-FÍ-shal a-LERT",
          literal: "No parece como la carretera está cerrada; si ella estuviera cerrada, habría una alerta oficial.",
          why: "“It doesn't look like” traduce bien “no parece que”, pero el inglés mantiene “is closed”. No diga “be closed” aquí por imitar el subjuntivo español."
        },
        {
          speaker: "Lina",
          target: "Do you think my mom can wait another week without the appointment?",
          translation: "¿Crees que mi mamá puede esperar otra semana sin la cita?",
          pronunciation: "du yu zink mai mom kan weit a-NÁ-der uik ui-DÁUT di a-PÓINT-ment",
          literal: "Piensas tú mi mamá puede esperar otra semana sin la cita?",
          why: "La pregunta normal en inglés es “Do you think...?” y el segundo verbo sigue normal: “can wait”. Esto se parece al español afirmativo de pregunta, “¿crees que puede?”."
        },
        {
          speaker: "Mateo",
          target: "I don't think missing the appointment is a good idea; let's drive slowly and stop if the rain gets worse.",
          translation: "No pienso que perder la cita sea buena idea; vamos despacio y paramos si la lluvia empeora.",
          pronunciation: "ai dount zink MÍ-sing di a-PÓINT-ment is a gud ai-DÍ-a; lets draiv SLÓU-li and stap if de rein gets uers",
          literal: "Yo no pienso perder la cita es una buena idea; manejemos despacio y paremos si la lluvia se pone peor.",
          why: "Otra vez, el inglés no muestra el cambio que exige el español. “No pienso que sea” se vuelve “I don't think ... is”. La cortesía está en el marco “I don't think”, no en una forma especial del verbo."
        }
      ],
      vocabulary: [
        {
          term: "I think + statement",
          explanation: "La afirmación de opinión en inglés. Después de “I think” va una oración normal: “the road is dangerous”, “the office is closed”. No aparece ningún modo especial.",
          literal: "yo pienso + afirmación",
          useWhen: "Usted presenta una opinión como su lectura de la realidad: “I think the highway is dangerous”.",
          avoidWhen: "Quiere discrepar o negar la opinión; entonces la negación va en “don't think”, no en el segundo verbo.",
          register: "neutro",
          region: "Inglés estadounidense general; natural en Texas y en todo Estados Unidos.",
          related: ["I believe", "it seems", "I'm sure", "in my opinion"],
          example: {
            target: "I think the highway is dangerous.",
            translation: "Creo que la carretera está peligrosa."
          }
        },
        {
          term: "I don't think + statement",
          explanation: "La forma inglesa de “no creo que”. La negación se queda en “don't think” y el segundo verbo no cambia: “I don't think it is serious”, no una forma especial como si fuera español.",
          literal: "yo no pienso + afirmación",
          useWhen: "Discrepar con suavidad: “I don't think it's that serious”, “I don't think we should cancel”.",
          avoidWhen: "Quiere negar el hecho de manera directa y tajante. “It isn't serious” suena más frontal que “I don't think it's serious”.",
          register: "neutro a cortés",
          region: "Inglés estadounidense general; muy útil para sonar diplomático.",
          related: ["I don't believe", "I doubt", "I'm not sure", "I wouldn't say"],
          example: {
            target: "I don't think it's that serious.",
            translation: "No creo que sea tan grave."
          }
        },
        {
          term: "it doesn't look like + statement",
          explanation: "Equivale a “no parece que” o “no se ve que”. Aunque en español aparezca subjuntivo, en inglés la oración sigue normal: “the road is closed”.",
          literal: "no parece como + afirmación",
          useWhen: "Usted juzga por evidencia visible o por reportes: “It doesn't look like the road is closed”.",
          avoidWhen: "Quiere afirmar lo que sí parece cierto. Entonces diga “It looks like the road is closed”.",
          register: "neutro",
          region: "Inglés estadounidense general; frecuente en conversación diaria.",
          related: ["it seems like", "apparently", "from what I see", "it looks as if"],
          example: {
            target: "It doesn't look like the road is closed.",
            translation: "No parece que la carretera esté cerrada."
          }
        },
        {
          term: "it isn't true that + statement",
          explanation: "La negación impersonal de una afirmación. En español sería “no es cierto que” con subjuntivo; en inglés se mantiene una oración normal después de “that”.",
          literal: "no es verdad que + afirmación",
          useWhen: "Corregir un rumor: “It isn't true that the clinic is closed”, “It isn't true that we have to pay today”.",
          avoidWhen: "Está afirmando que algo sí es cierto. Entonces diga “It's true that...” y mantenga la oración normal.",
          register: "neutro a formal",
          region: "Inglés general; útil en oficinas, clínicas y reclamos.",
          related: ["that's not true", "it isn't accurate", "it doesn't seem", "I don't think"],
          example: {
            target: "It isn't true that the clinic is closed.",
            translation: "No es cierto que la clínica esté cerrada."
          }
        },
        {
          term: "don't you think...?",
          explanation: "La pregunta negativa que suele buscar acuerdo o presionar con suavidad. En inglés tampoco cambia el segundo verbo: “Don't you think it is safer to wait?” En español esa misma intención puede llevar subjuntivo: “¿No crees que sea más seguro esperar?”",
          literal: "no piensas tú...?",
          useWhen: "Invitar a la otra persona a ver su punto: “Don't you think we should call first?”",
          avoidWhen: "Quiere una pregunta completamente abierta. “Do you think...?” suena menos cargada que “Don't you think...?”",
          register: "neutro",
          region: "Inglés general; el tono decide si suena amable o insistente.",
          related: ["do you think", "wouldn't you say", "isn't it", "shouldn't we"],
          example: {
            target: "Don't you think it is safer to wait?",
            translation: "¿No crees que sea más seguro esperar?"
          }
        },
        {
          term: "that serious / that bad",
          explanation: "“That” antes de un adjetivo significa “tan” en frases como “that serious”, “that bad”, “that late”. Es muy común después de “I don't think”.",
          literal: "tan serio / tan malo",
          useWhen: "Bajar la intensidad de una preocupación: “I don't think it's that bad”.",
          avoidWhen: "Está señalando una cosa concreta. “That road” sí significa “esa carretera”; “that serious” significa “tan grave”.",
          register: "familiar a neutro",
          region: "Inglés estadounidense general.",
          related: ["so serious", "as serious", "too serious", "not that late"],
          example: {
            target: "I don't think it's that serious.",
            translation: "No creo que sea tan grave."
          }
        },
        {
          term: "soft disagreement",
          explanation: "El inglés suaviza el desacuerdo con marcos como “I don't think”, “I'm not sure” y “it doesn't look like”. No necesita cambiar el modo del segundo verbo para sonar cortés.",
          literal: "desacuerdo suave",
          useWhen: "Reuniones, familia, servicios y exámenes orales donde usted necesita contradecir sin sonar agresivo.",
          avoidWhen: "Hay peligro inmediato y necesita una orden clara. En ese caso, “Stop” o “Don't go” vale más que una frase diplomática.",
          register: "cortés",
          region: "Muy frecuente en Estados Unidos, incluso cuando la relación es cercana.",
          related: ["I'm not sure", "maybe", "I see your point", "let's check"],
          example: {
            target: "I don't think missing the appointment is a good idea.",
            translation: "No pienso que perder la cita sea buena idea."
          }
        }
      ],
      note: "La buena noticia para el colombiano que aprende inglés es que el inglés no hace el cambio de modo que hace el español. En español la diferencia es obligatoria: “creo que es grave” afirma la opinión y usa indicativo, pero “no creo que sea grave” niega la opinión y usa subjuntivo. En inglés las dos frases mantienen el segundo verbo igual: “I think it is serious” y “I don't think it is serious”. El movimiento ocurre en el primer verbo, con “don't”, no en “is”. Por eso no debe inventar un subjuntivo inglés como “I don't think it be serious” ni traducir demasiado literalmente el español como “I don't think that it be”. La forma natural es “I don't think it's that serious”. La familia inglesa es práctica: I don't think, I don't believe, it doesn't seem like, it doesn't look like, it isn't true that. Todas permiten discrepar con suavidad, pero ninguna obliga a cambiar el verbo que sigue. La pregunta también tiene matiz. “Do you think it is serious?” es una pregunta abierta. “Don't you think it is serious?” suele empujar un poco hacia el acuerdo, como “¿no crees que...?”, pero en inglés el verbo sigue “is”. Para sonar cortés, baje la seguridad, dé una razón y use un marco suave; no busque una conjugación especial que el inglés moderno no usa aquí.",
      culture: [
        {
          label: "Discrepar en inglés sin sonar tajante",
          body: "En Estados Unidos, “I don't think...” es una herramienta diaria para contradecir sin cerrar la conversación. “That road isn't dangerous” suena más frontal; “I don't think it's that dangerous” deja espacio para revisar el reporte, llamar al conductor o aceptar que la otra persona tiene miedo. La cortesía se oye en el marco, en el tono y en la razón que sigue, no en un cambio de modo."
        },
        {
          label: "Waco y la I-35",
          body: "Waco está sobre la I-35 entre Austin y Dallas, y viajar hacia Temple o hacia Dallas depende mucho del tráfico, las obras y el clima fuerte del centro de Texas. Después de tormentas, la gente revisa alertas, cierres y reportes locales antes de salir. Una conversación sobre si cancelar un viaje médico no es dramática de más; es exactamente el tipo de decisión cotidiana donde hace falta discrepar con cuidado."
        },
        {
          label: "La trampa inversa del subjuntivo",
          body: "El hispanohablante avanzado puede cometer el error contrario al angloparlante. Como sabe que el español exige “no creo que sea”, intenta mostrar esa duda en inglés con “be” o con una estructura rara. Pero el inglés moderno casi nunca marca subjuntivo en este contexto. Decir “I don't think it is” es correcto, natural y suficientemente cortés."
        }
      ],
      pitfalls: [
        {
          mistake: "I don't think it be serious.",
          whyItFails: "Está importando el subjuntivo español a un contexto donde el inglés no lo usa. Después de “I don't think”, el verbo sigue normal: “it is”, o en contracción, “it's”.",
          sayInstead: "I don't think it's serious."
        },
        {
          mistake: "I think it be serious.",
          whyItFails: "La afirmación de opinión tampoco lleva forma especial. “I think” va seguido de una oración normal con sujeto y verbo conjugado: “it is serious”.",
          sayInstead: "I think it is serious."
        },
        {
          mistake: "It doesn't look like the road be closed.",
          whyItFails: "Aunque el español tenga “no parece que esté cerrada”, el inglés no cambia el verbo después de “it doesn't look like”. La forma natural es “is closed”.",
          sayInstead: "It doesn't look like the road is closed."
        },
        {
          mistake: "Using “Don't you think...?” as a neutral question every time",
          whyItFails: "La pregunta negativa puede sonar como una invitación a estar de acuerdo, no como una pregunta abierta. Si de verdad solo quiere preguntar, “Do you think...?” pesa menos.",
          sayInstead: "Do you think the road is safe?"
        }
      ],
      variations: [
        {
          form: "I think it is serious.",
          register: "neutro",
          region: "Inglés general",
          whenToUse: "Afirmar una opinión. El segundo verbo va normal, igual que en cualquier afirmación."
        },
        {
          form: "I don't think it's serious.",
          register: "cortés",
          region: "Inglés estadounidense general",
          whenToUse: "Discrepar con suavidad. La negación está en “don't think”; “is” no cambia."
        },
        {
          form: "It doesn't look like the road is closed.",
          register: "neutro",
          region: "Inglés estadounidense general",
          whenToUse: "Juzgar por señales o reportes, equivalente a “no parece que”."
        },
        {
          form: "Don't you think it is safer to wait?",
          register: "neutro",
          region: "Inglés general",
          whenToUse: "Pregunta negativa que puede invitar al acuerdo. No es tan abierta como “Do you think...?”"
        }
      ],
      prompt: "En español cambia “es” a “sea” en “no creo que sea”. ¿Qué hace el inglés?",
      choices: [
        "It keeps the normal verb: I don't think it's serious.",
        "It changes the verb: I don't think it be serious.",
        "It drops the verb: I don't think it serious."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase afirma una opinión correctamente en inglés?",
          choices: [
            "I think it be serious before the appointment.",
            "I think it is serious before the appointment.",
            "I think that serious before the appointment."
          ],
          answer: 1,
          tests: "I think seguido de una oración normal"
        },
        {
          prompt: "¿Cuál traduce mejor “No parece que la carretera esté cerrada”?",
          choices: [
            "It doesn't look like the road is closed.",
            "It doesn't look like the road be closed.",
            "It doesn't look the road is closed."
          ],
          answer: 0,
          tests: "it doesn't look like seguido de verbo normal"
        },
        {
          prompt: "Si quiere una pregunta abierta, sin empujar al acuerdo, ¿cuál conviene?",
          choices: [
            "Don't you think the road is safe?",
            "You don't think the road is safe?",
            "Do you think the road is safe?"
          ],
          answer: 2,
          tests: "pregunta abierta frente a pregunta negativa sugerente"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/77-delegation-degree-and-doubt.js");
