/*
 * Lesson block: developing / invitations, acceptance and refusal.
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
 * These three lessons handle invitations as a social act: when invitar means
 * paying, how aceptar sounds gracious, and why rechazar is usually too blunt
 * for spoken refusals. The two directions are mirrors: same number of dialogue
 * turns, vocabulary entries, culture notes, pitfalls, variations and practice
 * questions, and the same optional slots filled on the same rows.
 */
lessons.push(
  {
    id: "being-invited-to-a-tinto-in-sincelejo",
    level: "Developing · Social life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "familiar",
    pathways: ["independent"],
    verb: "invitar",
    review: "pending",
    es: {
      title: "Cuando “yo invito” quiere decir que paga la otra persona",
      situation:
        "En Sincelejo, Alex sale de una tarde de diligencias con Carolina, una amiga sucreña. Ella le dice “te invito a un tinto” y Alex entiende que solo lo está llamando a acompañarla, no que ella va a pagar. En la mesa aprende que en Colombia invitar casi siempre toca el bolsillo: “yo invito” quiere decir “esto va por mi cuenta”, y pelear la cuenta puede sonar menos agradecido de lo que uno cree.",
      setting: {
        who: "Carolina is a relaxed friend from Sincelejo who likes treating visitors to small things. Alex is the foreign friend who knows the dictionary meaning of invitar but not the social weight it carries around a bill.",
        what: "A coffee stop after errands, where a simple “te invito a un tinto” becomes a lesson in who is expected to pay and how to accept without turning the moment awkward.",
        when: "Late afternoon, when the heat has eased and people drift toward a small café near the plaza.",
        where: "Sincelejo, Sucre, at a modest café off the main square.",
        why: "Because in Colombia an invitation is often also an offer to pay. Missing that can make a learner accidentally freeload, or just as easily insult a friend by fighting a generous gesture that was meant to feel warm and ordinary."
      },
      address: {
        form: "tú",
        who: "Carolina and Alex are friends of the same age, and on the Caribbean side tú feels natural between them.",
        why: "The exchange is friendly and low-stakes, not ceremonial. Tú lets Carolina offer the coffee warmly and lets Alex ask about the bill without sounding like he is negotiating at a counter.",
        ifYouSwitch: "Using usted here would make the little treat feel more distant and formal. It would not be rude, but it would cool a scene that depends on easy friendship and on accepting generosity without making a performance of it."
      },
      dialogue: [
        {
          speaker: "Carolina",
          target: "Ven, te invito a un tinto antes de irnos.",
          translation: "Come on, I'll get you a black coffee before we go.",
          pronunciation: "ben, te een-BEE-toh a oon TEEN-toh AN-tes de eer-nos",
          literal: "Come, you I-invite to a black-coffee before of going-ourselves.",
          why: "Here “te invito a un tinto” is not just “I invite you to come along.” In Colombian Spanish it normally means “I'll buy you a coffee.” The tiny word “a” introduces what she is treating him to."
        },
        {
          speaker: "Alex",
          target: "De una. ¿Cada uno paga lo suyo o cómo es?",
          translation: "Sure. Does each person pay for their own, or how does it work?",
          pronunciation: "de OO-na. ka-da OO-no PA-ga lo SOO-yoh oh KO-mo es",
          literal: "At one. Each one pays its-own or how is?",
          why: "Alex asks because he has missed the social meaning. “De una” is a Colombian yes, like “sure / right away.” The awkward part is not the question itself, but that Carolina already said she was treating."
        },
        {
          speaker: "Carolina",
          target: "No, hombre, yo invito. Este tinto va por mi cuenta.",
          translation: "No, come on, this is on me. This coffee is on my tab.",
          pronunciation: "noh, OM-breh, yoh een-BEE-toh. ES-te TEEN-toh ba por mee KWEN-ta",
          literal: "No, man, I invite. This black-coffee goes by my account.",
          why: "“Yo invito” is the key phrase: in Colombia it usually means “I'm paying.” “Va por mi cuenta” says the same thing more explicitly. “Hombre” softens the correction; she is not offended, just clarifying."
        },
        {
          speaker: "Alex",
          target: "Ah, pensé que invitar era solo decir “ven conmigo”.",
          translation: "Ah, I thought invitar only meant saying “come with me.”",
          pronunciation: "ah, pen-SEH keh een-bee-TAR EH-ra SO-lo deh-SEER ben kon-MEE-goh",
          literal: "Ah, I-thought that to-invite was only to-say come with-me.",
          why: "This is the learner trap stated out loud. Invitar can mean inviting someone to an event, but with food, drink or a bill it very often means treating. Context decides which sense is alive."
        },
        {
          speaker: "Carolina",
          target: "También, pero si te invito a algo, normalmente es porque lo pago yo.",
          translation: "That too, but if I invite you to something, normally it is because I pay for it.",
          pronunciation: "tam-BYEN, PE-ro see te een-BEE-toh a AL-goh, nor-mal-MEN-te es POR-keh lo PA-goh yoh",
          literal: "Also, but if you I-invite to something, normally is because it I-pay I.",
          why: "Carolina gives the honest rule. “Invitar a alguien a algo” can be social or financial, but in Colombian everyday speech the financial sense is strong enough that the other person should not reach for the wallet first."
        },
        {
          speaker: "Alex",
          target: "Listo, acepto la invitación. La próxima invito yo.",
          translation: "Alright, I accept the invitation. Next time it is on me.",
          pronunciation: "LEES-toh, ak-SEP-toh la een-bee-ta-SYON. la PROK-see-ma een-BEE-toh yoh",
          literal: "Ready, I-accept the invitation. The next one I-invite I.",
          why: "This is the graceful response: accept, say thanks, and offer the next round. “La próxima invito yo” balances the generosity without turning this bill into a contest."
        }
      ],
      vocabulary: [
        {
          term: "invitar",
          explanation: "To invite, and in Colombia very often to treat or pay for someone. The bill sense is not secondary in everyday life.",
          literal: "to invite",
          useWhen: "Inviting someone to a place or offering to buy something: “te invito a cine”, “yo invito el café”.",
          avoidWhen: "You assume it only means accompanying. With food, drink or a round, it usually means the inviter is paying.",
          register: "neutral",
          region: "Universal Spanish, but the pay-for-you meaning is especially strong in Colombia.",
          related: ["la invitación", "yo invito", "te invito a", "por mi cuenta"],
          example: {
            target: "Te invito a un tinto.",
            translation: "I'll buy you a black coffee."
          }
        },
        {
          term: "yo invito",
          explanation: "The compact Colombian way to say “this is on me.” It settles the bill before anyone has to argue about it.",
          literal: "I invite",
          useWhen: "Offering to cover a coffee, snack, taxi or round: “tranquilo, yo invito”.",
          avoidWhen: "You mean only “I invite people to attend”; without context, Colombians hear money in the phrase.",
          register: "friendly informal",
          region: "Common across Colombia.",
          related: ["invito yo", "va por mi cuenta", "yo pago", "esta la pongo yo"],
          example: {
            target: "Hoy yo invito.",
            translation: "Today it is on me."
          }
        },
        {
          term: "invitar a alguien a algo",
          explanation: "The full frame: invite someone to something, or treat someone to it. The second “a” introduces the thing offered.",
          literal: "to invite someone to something",
          useWhen: "Naming the treat or event: “la invité a almorzar”, “nos invitaron a una fiesta”.",
          avoidWhen: "You drop the “a” before the thing: “te invito un café” is heard, but “te invito a un café” is the clean form.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["invitar", "la invité a", "nos invitaron a", "invitado"],
          example: {
            target: "Mi prima nos invitó a almorzar.",
            translation: "My cousin invited us to lunch / treated us to lunch."
          }
        },
        {
          term: "estar invitado",
          explanation: "To be invited, but in a bill context also to be covered. It can mean you are not expected to pay.",
          literal: "to be invited",
          useWhen: "Clarifying status: “¿estoy invitado?”, “tranquilo, estás invitado”.",
          avoidWhen: "You translate it mechanically as only “invited to attend”; in cafés and bars it may be about who pays.",
          register: "neutral",
          region: "Universal Spanish with a Colombian everyday billing sense.",
          related: ["invitado", "la invitación", "no paga", "por cuenta de"],
          example: {
            target: "Tranquilo, usted está invitado.",
            translation: "Don't worry, you are covered."
          }
        },
        {
          term: "va por mi cuenta",
          explanation: "A clear way to say you are covering the cost. Cuenta is the bill or tab here.",
          literal: "it goes on my account",
          useWhen: "Making the money side explicit: “esta ronda va por mi cuenta”.",
          avoidWhen: "You want the warmer, shorter phrase among friends; “yo invito” often sounds more natural.",
          register: "neutral",
          region: "Universal Spanish; very clear in Colombia.",
          related: ["la cuenta", "yo invito", "yo pago", "corre por mi cuenta"],
          example: {
            target: "El postre va por mi cuenta.",
            translation: "Dessert is on me."
          }
        },
        {
          term: "pelear la cuenta",
          explanation: "To fight over the bill. A little insistence can be polite, but too much can reject the gesture.",
          literal: "to fight the bill",
          useWhen: "Describing the back-and-forth after someone offers to pay: “no pelees la cuenta”.",
          avoidWhen: "Someone has clearly said “yo invito”; then gratitude is usually better than a long struggle.",
          register: "friendly informal",
          region: "Universal Spanish; the social dance is very familiar in Colombia.",
          related: ["la cuenta", "dejarse invitar", "gracias", "la próxima"],
          example: {
            target: "No pelees la cuenta; ella invitó.",
            translation: "Don't fight over the bill; she said it was on her."
          }
        },
        {
          term: "la próxima invito yo",
          explanation: "The graceful way to accept a treat and promise reciprocity without refusing the present one.",
          literal: "the next one I invite",
          useWhen: "After someone pays for coffee or food: “gracias, la próxima invito yo”.",
          avoidWhen: "You use it as an excuse not to thank them now; the thanks still matter.",
          register: "friendly informal",
          region: "Common Colombian courtesy.",
          related: ["gracias", "aceptar", "dejarse invitar", "te debo una"],
          example: {
            target: "Gracias, la próxima invito yo.",
            translation: "Thanks, next time it is on me."
          }
        }
      ],
      note:
        "The safest Colombian reading of “yo invito” is “this is on me.” Invitar still means inviting someone to an event, but with coffee, food, drinks or a taxi, it strongly suggests the speaker is paying. “Te invito a un tinto” is an offer to buy you a coffee, not merely a suggestion that you accompany them to get one. A brief “gracias, la próxima invito yo” accepts the generosity and keeps the relationship balanced; a long fight over the bill can sound like you distrust the gesture.",
      culture: [
        {
          label: "Inviting is often paying",
          body: "Colombian hospitality turns small purchases into gestures of affection. A tinto, an empanada, a taxi after a late visit — any of these can come with “yo invito”. The phrase is not grand; it can be casual and inexpensive. That is exactly why refusing too hard can feel odd. The friend is not trying to dominate the bill, just making a warm move. Accepting with thanks and offering “la próxima” keeps the warmth intact."
        },
        {
          label: "The bill dance",
          body: "People do sometimes push back once: “no, tranquilo, yo pago lo mío.” But once the inviter repeats “de verdad, yo invito,” the polite move is usually to let them. Continuing to fight can turn a generous moment into a negotiation. The Colombian solution is reciprocity across time rather than arithmetic at the table: today Carolina buys the coffee, next week Alex buys the arepas. The relationship, not the receipt, carries the balance."
        },
        {
          label: "Small treats matter",
          body: "A small invitation is often how people fold a visitor into ordinary life. It says “you are with me” more than “you owe me.” That is why “te invito a un tinto” can feel bigger than the price of the coffee. In a country where cafés, tiendas and street snacks are social spaces, buying the little thing can be a low-cost way to create closeness without a speech."
        }
      ],
      pitfalls: [
        {
          mistake: "Hearing “te invito a un tinto” as only “come with me for coffee”",
          whyItFails: "In Colombia, the phrase normally means the speaker is buying the coffee. If you miss that, you may either fail to thank the person properly or create awkwardness by treating the bill as undecided.",
          sayInstead: "Gracias, acepto. La próxima invito yo."
        },
        {
          mistake: "Fighting too hard after someone says “yo invito”",
          whyItFails: "A small pushback is normal, but a long argument can sound as if you reject their generosity or suspect a hidden obligation. Once they clearly repeat it, accept warmly and return the gesture another day.",
          sayInstead: "Bueno, gracias. La próxima va por mi cuenta."
        },
        {
          mistake: "Using “invitar” with no “a” before the thing offered",
          whyItFails: "The clean construction is “invitar a alguien a algo”: “te invito a un café”, “nos invitaron a cenar”. Dropping the second “a” is common enough to be understood, but it is not the form to learn first.",
          sayInstead: "Te invito a un café."
        }
      ],
      variations: [
        {
          form: "Yo invito.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Offering to pay for the coffee, snack or round."
        },
        {
          form: "Te invito a un tinto.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Offering to buy someone a small black coffee."
        },
        {
          form: "Esta va por mi cuenta.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Making clear that this one is on you."
        },
        {
          form: "Gracias, la próxima invito yo.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Accepting a treat while promising reciprocity."
        }
      ],
      prompt: "Carolina says “te invito a un tinto.” What should Alex understand?",
      choices: [
        "She is offering to buy him a black coffee.",
        "She is asking him to bring coffee from home.",
        "She is refusing to drink coffee with him."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which line naturally means “this round is on me” in Colombia?",
          choices: [
            "Esta ronda la rechazo yo.",
            "Esta ronda la acepto yo.",
            "Esta ronda la invito yo."
          ],
          answer: 2,
          tests: "yo invito = I am paying"
        },
        {
          prompt: "Someone insists “de verdad, yo invito.” What is the warm response?",
          choices: [
            "Bueno, gracias. La próxima invito yo.",
            "No, jamás acepto invitaciones de nadie.",
            "Entonces me voy antes de que llegue la cuenta."
          ],
          answer: 0,
          tests: "accept the treat and offer next time"
        },
        {
          prompt: "Which sentence uses the clean “invitar a alguien a algo” frame?",
          choices: [
            "Te invito un tinto antes de irnos.",
            "Te invito por un tinto antes de irnos.",
            "Te invito a un tinto antes de irnos."
          ],
          answer: 2,
          tests: "invitar a alguien a algo"
        }
      ]
    },
    en: {
      title: "Cuando “invitar” no se traduce como “invite”",
      situation:
        "En Miami, Alejandra sale de una tienda colombiana con Jordan, un compañero de clase. Ella quiere decirle que le compra un café y suelta “I invite you a coffee”. Jordan entiende la intención, pero le explica que en inglés “invite” es convocar a alguien a un lugar o evento; para pagar se dice “I'll buy you a coffee”, “it's on me” o “let me treat you”.",
      setting: {
        who: "Jordan es un compañero de clase de Miami que ya conoce varios colombianismos. Alejandra quiere ser amable en inglés, pero trae pegado el sentido colombiano de “invitar”.",
        what: "Una salida por café en la que Alejandra aprende que “invite” no paga la cuenta en inglés y que la frase natural para cubrir algo es “it's on me”.",
        when: "Una tarde húmeda después de clase, con tiempo para un café antes de volver a casa.",
        where: "Miami, cerca de una tienda colombiana en Doral.",
        why: "Porque un colombiano puede traducir “yo invito” como “I invite” y sonar raro justo cuando intenta ser generoso. El inglés separa convocar a alguien de pagarle algo, y esa separación evita malentendidos."
      },
      address: {
        form: "mixed",
        who: "El inglés usa “you” para Jordan y Alejandra sin marcar tú ni usted; la cercanía está en el tono de compañeros.",
        why: "No hay pronombre formal que escoger. La naturalidad sale de frases simples como “want a coffee?” y de suavizadores como “let me”, no de cambiar la forma de tratar al otro.",
        ifYouSwitch: "Si Alejandra intenta sonar formal alargando demasiado la oferta, pierde naturalidad. En inglés una oferta breve como “I'll get this” puede ser perfectamente amable."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Do you want a coffee? I invite you a coffee.",
          translation: "¿Quieres un café? Yo te invito a un café.",
          pronunciation: "du yu want a KO-fi? ai in-VAIT yu a KO-fi",
          literal: "¿Quieres un café? Yo invito tú un café.",
          why: "La intención es colombiana y amable, pero la frase no es natural. En inglés “invite” no significa pagarle algo a alguien; para eso se necesita “buy”, “treat” o “on me”."
        },
        {
          speaker: "Jordan",
          target: "You mean you'll buy me a coffee? Then say, “It's on me.”",
          translation: "¿Quieres decir que me compras un café? Entonces di: “yo invito / va por mi cuenta”.",
          pronunciation: "yu min yul bai mi a KO-fi? den sei, its on mi",
          literal: "¿Quieres decir tú comprarás me un café? Entonces di, eso está sobre mí.",
          why: "“I'll buy you a coffee” y “it's on me” son las dos salidas naturales. “It's on me” no se traduce palabra por palabra; significa que usted cubre la cuenta."
        },
        {
          speaker: "Alejandra",
          target: "So “invite” is only for a party or an event?",
          translation: "Entonces “invite” es solo para una fiesta o un evento?",
          pronunciation: "so in-VAIT is ON-li for a PAR-ti or an i-VENT",
          literal: "Entonces invitar es solo para una fiesta o un evento?",
          why: "La pregunta separa los dos usos. “Invite” sirve para convocar a alguien: “invite you to a party”, “invite them to dinner”. No dice quién paga."
        },
        {
          speaker: "Jordan",
          target: "Right. You invite someone to dinner, but you treat someone to dinner.",
          translation: "Exacto. Invitas a alguien a cenar, pero le pagas la cena a alguien.",
          pronunciation: "rait. yu in-VAIT som-wan tu DIN-er, bat yu trit som-wan tu DIN-er",
          literal: "Correcto. Tú invitas alguien a cena, pero tú tratas alguien a cena.",
          why: "Aquí está el contraste completo: “invite someone to dinner” es convocarlo; “treat someone to dinner” es pagarle la comida. La preposición “to” aparece en ambos, pero el verbo cambia el dinero."
        },
        {
          speaker: "Alejandra",
          target: "Got it. Coffee's on me today, and next time you can get it.",
          translation: "Entendido. El café va por mi cuenta hoy, y la próxima tú invitas.",
          pronunciation: "gat it. KO-fiz on mi tu-DEI, and nekst taim yu kan get it",
          literal: "Captado. Café está sobre mí hoy, y próxima vez tú puedes conseguirlo.",
          why: "“Coffee's on me” es corto y natural. “You can get it” aquí no es “puedes conseguirlo”, sino “puedes pagarlo”. En inglés de cuentas, “get” puede significar cubrir."
        },
        {
          speaker: "Jordan",
          target: "Perfect. Thanks — and yes, I'll invite you to my birthday, not buy the whole party.",
          translation: "Perfecto. Gracias — y sí, te voy a invitar a mi cumpleaños, no a pagar toda la fiesta.",
          pronunciation: "PER-fekt. thanks — and yes, ail in-VAIT yu tu mai BERTH-dei, not bai de hol PAR-ti",
          literal: "Perfecto. Gracias — y sí, yo invitaré tú a mi cumpleaños, no comprar toda la fiesta.",
          why: "El remate fija la diferencia con humor. “Invite you to my birthday” convoca a Alejandra al evento; no promete que Jordan pagará todo lo que pase en la fiesta."
        }
      ],
      vocabulary: [
        {
          term: "invite",
          explanation: "Invitar a alguien a un evento, una casa o una actividad; no significa pagarle algo.",
          literal: "invitar / convocar",
          useWhen: "Para eventos: “invite her to the party”, “we invited them over”.",
          avoidWhen: "Quiere decir “yo pago”; ahí van “it's on me”, “I'll buy you...” o “treat”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["invitation", "invite someone to", "invite over", "guest"],
          example: {
            target: "I'll invite you to my birthday party.",
            translation: "Te voy a invitar a mi cumpleaños."
          }
        },
        {
          term: "It's on me",
          explanation: "La forma más natural de decir “yo invito / va por mi cuenta”.",
          literal: "está sobre mí",
          useWhen: "Cubrir una cuenta pequeña o una ronda: “don't worry, it's on me”.",
          avoidWhen: "Está invitando a un evento; ahí sí es “invite”.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["on me", "my treat", "I'll get this", "my round"],
          example: {
            target: "Don't worry, coffee's on me.",
            translation: "Tranquilo, yo invito el café."
          }
        },
        {
          term: "I'll buy you a coffee",
          explanation: "Una oferta directa de comprarle algo a alguien; amable sin ser ceremoniosa.",
          literal: "te compraré un café",
          useWhen: "Ofrecer una bebida o comida concreta: “I'll buy you lunch”, “can I buy you a drink?”.",
          avoidWhen: "Habla de una invitación a asistir a un evento, porque “buy” pone el foco en pagar.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["buy you", "get you", "a coffee", "lunch is on me"],
          example: {
            target: "Let me buy you a coffee.",
            translation: "Déjame invitarte a un café."
          }
        },
        {
          term: "treat someone to something",
          explanation: "Invitar en el sentido de pagarle algo a alguien, un poco más explícito que “it's on me”.",
          literal: "darle un gusto a alguien con algo",
          useWhen: "Pagar una comida, postre o salida como gesto: “she treated us to dinner”.",
          avoidWhen: "Quiere sonar muy casual; “I'll get this” suele ser más cotidiano.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["my treat", "treat you to", "buy you", "on me"],
          example: {
            target: "She treated us to dinner.",
            translation: "Ella nos invitó a cenar."
          }
        },
        {
          term: "I'll get this",
          explanation: "Otra forma corta de decir que usted paga esta cuenta.",
          literal: "yo consigo esto",
          useWhen: "Al llegar la cuenta: “I'll get this”, “you get the next one”.",
          avoidWhen: "Fuera de contexto de cuentas, “get” vuelve a significar conseguir o entender.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["get the bill", "you get next time", "on me", "cover it"],
          example: {
            target: "I'll get this; you can get the next one.",
            translation: "Yo invito esta; tú invitas la próxima."
          }
        },
        {
          term: "my treat",
          explanation: "Una frase cálida para insistir en que la invitación económica corre por cuenta suya.",
          literal: "mi regalo / mi gusto",
          useWhen: "Después de una duda o una negativa suave: “no, really, my treat”.",
          avoidWhen: "Necesita un registro muy formal; en una factura de empresa sería mejor “I'll cover it”.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["treat", "it's on me", "don't worry", "my pleasure"],
          example: {
            target: "No, really, my treat.",
            translation: "No, de verdad, yo invito."
          }
        },
        {
          term: "invite someone over",
          explanation: "Invitar a alguien a pasar a la casa o al lugar donde usted está.",
          literal: "invitar a alguien hacia acá",
          useWhen: "Hablar de recibir a alguien en casa: “we invited them over for coffee”.",
          avoidWhen: "Quiere decir que paga el café; “invite over” solo habla de venir.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["come over", "invite to", "have guests", "host"],
          example: {
            target: "We invited Jordan over for dinner.",
            translation: "Invitamos a Jordan a comer en la casa."
          }
        }
      ],
      note:
        "En inglés “invite” convoca; no paga. “I invite you a coffee” suena a calco de “te invito a un café”. Si usted quiere cubrir la cuenta, diga “it's on me”, “I'll buy you a coffee”, “I'll get this” o “my treat”. Si quiere convocar a alguien a una fiesta, cena o reunión, ahí sí va “invite”: “I invited her to my birthday.” La diferencia es socialmente importante porque una frase mal traducida puede dejar incierto quién paga.",
      culture: [
        {
          label: "La cuenta se dice con “on me”",
          body: "En cafés y bares anglófonos, “it's on me” es rápido, cálido y suficiente. No suena a gran gesto; puede cubrir un café de dos dólares o una ronda. “My treat” añade un tono un poco más afectuoso, como “déjeme invitarlo”. Lo que no funciona es “I invite you a coffee”, porque “invite” abre una puerta o convoca a un evento, pero no abre la billetera."
        },
        {
          label: "Invitar a cenar no siempre es pagar",
          body: "“I invited them to dinner” puede significar que los invité a mi casa, o que los invité a un restaurante, pero no aclara automáticamente quién paga. Si el dinero importa, el inglés lo dice aparte: “dinner is on me”, “I'm treating them”, “we're splitting the bill”. Para un colombiano, acostumbrado a que invitar cargue ese doble sentido, conviene preguntar o escuchar la frase de la cuenta."
        },
        {
          label: "Rondas y reciprocidad",
          body: "En muchos bares de Estados Unidos y el Reino Unido, la reciprocidad se maneja por rondas: “I'll get this one, you get the next.” No se divide cada centavo en el momento, pero tampoco se supone que una sola persona paga siempre. Esa lógica se parece al colombiano “la próxima invito yo”, aunque las palabras sean distintas."
        }
      ],
      pitfalls: [
        {
          mistake: "“I invite you a coffee.”",
          whyItFails: "Es un calco de “te invito a un café”. En inglés “invite” no significa pagar una bebida; la frase deja al otro entendiendo la intención, pero oyendo una estructura rara.",
          sayInstead: "I'll buy you a coffee."
        },
        {
          mistake: "“This coffee is by my account.”",
          whyItFails: "Calca “va por mi cuenta”. La imagen inglesa no usa “account”; usa “on me” o “my treat”. “By my account” suena contable, no social.",
          sayInstead: "This coffee is on me."
        },
        {
          mistake: "“I will pay you a coffee.”",
          whyItFails: "En inglés “pay someone” es darle dinero a esa persona. Para comprarle un café se dice “buy you a coffee” o “get you a coffee”.",
          sayInstead: "I'll get you a coffee."
        }
      ],
      variations: [
        {
          form: "It's on me.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Decir “yo invito” al cubrir una cuenta."
        },
        {
          form: "Let me buy you a coffee.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Ofrecer comprarle un café a alguien."
        },
        {
          form: "My treat.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Insistir con calidez en que usted paga."
        },
        {
          form: "I invited her to dinner.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Convocar a alguien a cenar, sin aclarar quién paga."
        }
      ],
      prompt: "Alejandra quiere decir “yo invito el café”. ¿Cuál suena natural en inglés?",
      choices: [
        "Coffee's on me.",
        "I invite the coffee.",
        "Coffee is by my account."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase sirve para convocar a alguien a una fiesta?",
          choices: [
            "I'll treat you to my party.",
            "I'll invite you to my party.",
            "My party is on me."
          ],
          answer: 1,
          tests: "invite = convocar a un evento"
        },
        {
          prompt: "¿Cómo ofrece pagarle un café a alguien en inglés natural?",
          choices: [
            "Let me buy you a coffee.",
            "Let me invite you a coffee.",
            "Let me pay you a coffee."
          ],
          answer: 0,
          tests: "buy you a coffee, not invite"
        },
        {
          prompt: "Jordan dice “I'll get this; you get the next one.” ¿Qué significa?",
          choices: [
            "Que él consigue mesa ahora y usted busca otra después.",
            "Que él paga esta cuenta y usted paga la próxima.",
            "Que él invita a un evento y usted rechaza el siguiente."
          ],
          answer: 1,
          tests: "get this = cover this bill"
        }
      ]
    }
  },
  {
    id: "accepting-an-offer-in-popayan",
    level: "Developing · Social life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "courteous",
    pathways: ["independent"],
    verb: "aceptar",
    review: "pending",
    es: {
      title: "Aceptar sin sonar tragón en una casa de Popayán",
      situation:
        "En Popayán, Alex visita a la familia de Natalia después de caminar por el centro histórico. Doña Marta le ofrece champús y empanaditas de pipián. Alex dice que no por educación y se queda confundido cuando todos insisten. Aprende a aceptar con gracia: un primer “no, gracias” puede ser cortesía, pero si sí quiere algo, tiene que dejarlo claro con “bueno, acepto”, “con mucho gusto” o “sí, gracias”.",
      setting: {
        who: "Doña Marta is Natalia's aunt, proud of feeding guests well. Alex is a visitor trying not to impose, and Natalia is the friend who explains the ritual before he accidentally refuses what he wants.",
        what: "A visit at a family table, focused on accepting food or drink without sounding greedy and without making the host guess forever.",
        when: "Early evening after a slow walk through Popayán's whitewashed center.",
        where: "Popayán, Cauca, in a family living room near the historic center.",
        why: "Because accepting is not just saying yes. In Colombia, hospitality often includes a first offer, a polite hesitation, a second offer, and then a grateful acceptance. A learner has to know when “no, gracias” is real and when it is only the first step of the dance."
      },
      address: {
        form: "usted",
        who: "Alex uses usted with Doña Marta because she is older and hosting him in her home. Natalia can use tú with Alex, but the scene's key exchange is with the aunt.",
        why: "Usted keeps the visit respectful without making it cold. In a family home, especially with an older host, it lets Alex accept food warmly while still sounding well brought up.",
        ifYouSwitch: "Using tú with Doña Marta too soon would feel overfamiliar. The food may be abundant and affectionate, but the address form still recognizes age, hosting and the courtesy expected from a guest."
      },
      dialogue: [
        {
          speaker: "Doña Marta",
          target: "Alex, ¿acepta un champús y unas empanaditas?",
          translation: "Alex, would you like some champús and a few little empanadas?",
          pronunciation: "AH-leks, ak-SEP-ta oon cham-POOS ee OO-nas em-pa-na-DEE-tas",
          literal: "Alex, you-accept a champús and some little-empanadas?",
          why: "“¿Acepta...?” is a courteous host's offer. Champús is a traditional drink in southwestern Colombia, and empanaditas de pipián are a Popayán classic. The usted form fits the older host."
        },
        {
          speaker: "Alex",
          target: "Ay, no, muchas gracias. No quiero molestar.",
          translation: "Oh, no, thank you very much. I don't want to be a bother.",
          pronunciation: "ai, noh, MOO-chas GRA-syas. noh KYE-ro mo-les-TAR",
          literal: "Oh, no, many thanks. I don't want to bother.",
          why: "This first refusal can be pure politeness. English speakers may mean it literally; Colombian hosts may hear it as modesty and offer again. “No quiero molestar” is courteous, but it does not always close the door."
        },
        {
          speaker: "Natalia",
          target: "Si quieres, acepta. Mi tía ofrece dos veces por pura educación.",
          translation: "If you want some, accept. My aunt offers twice out of sheer politeness.",
          pronunciation: "see KYE-res, ak-SEP-ta. mee TEE-a oh-FRE-se dos BE-ses por POO-ra eh-doo-ka-SYON",
          literal: "If you-want, accept. My aunt offers two times for pure education.",
          why: "Natalia names the ritual: the first no protects the guest from seeming greedy; the second offer lets them accept without shame. “Por educación” means out of good manners."
        },
        {
          speaker: "Doña Marta",
          target: "Mijo, acepte sin pena. Aquí nadie se va con hambre.",
          translation: "Dear, accept without embarrassment. Nobody leaves here hungry.",
          pronunciation: "MEE-ho, ak-SEP-te seen PEH-na. ah-KEE NA-dye se ba kon AM-breh",
          literal: "My-son, accept without shame. Here nobody leaves with hunger.",
          why: "“Acepte sin pena” is warm permission to say yes. “Pena” here is embarrassment, not pity. “Mijo” can be affectionate from an older person even when the guest is not family."
        },
        {
          speaker: "Alex",
          target: "Bueno, acepto con mucho gusto. Se ve delicioso.",
          translation: "Alright, I gladly accept. It looks delicious.",
          pronunciation: "BWEH-noh, ak-SEP-toh kon MOO-cho GOOS-to. se beh deh-lee-SYOH-so",
          literal: "Good, I-accept with much pleasure. It sees itself delicious.",
          why: "This is the graceful acceptance: clear yes, gratitude, and a compliment. “Con mucho gusto” can accept an offer, not only answer thanks. It sounds pleased rather than greedy."
        },
        {
          speaker: "Doña Marta",
          target: "Así sí. Y si quiere repetir, también se acepta.",
          translation: "That's more like it. And if you want seconds, that is accepted too.",
          pronunciation: "ah-SEE see. ee see KYE-re rreh-peh-TEER, tam-BYEN se ak-SEP-ta",
          literal: "Thus yes. And if you want to-repeat, also itself accepts.",
          why: "“Repetir” at the table means having seconds. “Se acepta” is playful: in this house, accepting more food is welcome. The line reinforces that warmth, not hunger, is the point."
        }
      ],
      vocabulary: [
        {
          term: "aceptar",
          explanation: "To accept an offer, invitation, apology or condition. It is clear and useful, but often softened with thanks.",
          literal: "to accept",
          useWhen: "Saying yes to something offered: “acepto la invitación”, “acepto con gusto”.",
          avoidWhen: "A simple spoken “yes” is enough; “acepto” alone can sound formal if the moment is tiny.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["acepto", "acepte", "la aceptación", "con gusto"],
          example: {
            target: "Acepto la invitación con mucho gusto.",
            translation: "I gladly accept the invitation."
          }
        },
        {
          term: "aceptar con gusto",
          explanation: "A warm way to accept that puts gratitude and pleasure inside the yes.",
          literal: "to accept with pleasure",
          useWhen: "Accepting an invitation, help or food: “acepto con gusto”, “con mucho gusto”.",
          avoidWhen: "You are accepting a rule or penalty reluctantly; then “con gusto” is too cheerful.",
          register: "polite neutral",
          region: "Universal Spanish; very natural in Colombian courtesy.",
          related: ["con mucho gusto", "encantado", "gracias", "acepto"],
          example: {
            target: "Claro, acepto con gusto.",
            translation: "Of course, I gladly accept."
          }
        },
        {
          term: "sin pena",
          explanation: "Without embarrassment, go ahead. It reassures a guest that accepting is not imposing.",
          literal: "without shame / embarrassment",
          useWhen: "Encouraging someone to accept food, help or a seat: “sin pena, siéntese”.",
          avoidWhen: "You translate pena as “pity”; in this context it is social embarrassment.",
          register: "friendly informal",
          region: "Common in Colombia.",
          related: ["no le dé pena", "tranquilo", "con confianza", "acepte"],
          example: {
            target: "Acepte sin pena.",
            translation: "Go ahead and accept."
          }
        },
        {
          term: "no quiero molestar",
          explanation: "A polite hesitation meaning “I don't want to impose.” It may be a real no or just courtesy.",
          literal: "I don't want to bother",
          useWhen: "Softening a first refusal or showing you are mindful of the host's effort.",
          avoidWhen: "You truly want to refuse; then be clearer after the second offer.",
          register: "polite neutral",
          region: "Universal Spanish, very familiar in Colombian homes.",
          related: ["no se moleste", "no quiero incomodar", "gracias", "pena"],
          example: {
            target: "No quiero molestar, de verdad.",
            translation: "I really don't want to impose."
          }
        },
        {
          term: "bueno, acepto",
          explanation: "A clean turn from polite hesitation to yes. It lets the host know the answer is now real.",
          literal: "okay, I accept",
          useWhen: "After an offer is repeated and you do want it: “bueno, acepto”.",
          avoidWhen: "You have already said yes clearly; repeating it too much can sound theatrical.",
          register: "friendly informal",
          region: "Universal Spanish.",
          related: ["acepto", "sí, gracias", "con gusto", "bueno"],
          example: {
            target: "Bueno, acepto un poquito.",
            translation: "Alright, I'll have a little."
          }
        },
        {
          term: "rechazar de verdad",
          explanation: "To truly refuse after the ritual, not merely hesitate. The clarity matters if you cannot or do not want to accept.",
          literal: "to really reject",
          useWhen: "You need to close the offer kindly: “gracias, pero de verdad no puedo”.",
          avoidWhen: "You use the hard verb “rechazar” at the table; the spoken refusal is usually softer.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["no puedo", "de verdad", "gracias", "otra vez será"],
          example: {
            target: "Gracias, pero de verdad no puedo aceptar.",
            translation: "Thank you, but I really can't accept."
          }
        },
        {
          term: "repetir",
          explanation: "At the table, to have seconds. It is not only “repeat words”; it can mean another serving.",
          literal: "to repeat",
          useWhen: "Food and drink: “¿quiere repetir?”, “repetí arroz”.",
          avoidWhen: "You assume it always means saying something again; meals give it a serving sense.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["otra porción", "servir más", "segundo plato", "la repetición"],
          example: {
            target: "¿Puedo repetir ensalada?",
            translation: "May I have seconds of salad?"
          }
        }
      ],
      note:
        "Aceptar is simple in grammar and delicate in timing. In a Colombian home, especially with food or drink, the first “no, gracias” may be a modest reflex rather than a firm refusal. Hosts often offer again so the guest can accept without looking greedy. If you want the thing, be clear on the second pass: “bueno, acepto”, “sí, gracias”, “con mucho gusto”. If you truly cannot, refuse kindly but clearly: “gracias, pero de verdad no puedo”.",
      culture: [
        {
          label: "The first no",
          body: "Many Colombian families recognize a small ritual around hospitality: offer, polite no, insist, grateful yes. Not everyone performs it the same way, and younger friends may skip it entirely, but with older hosts it is common enough that a literal-minded learner can go hungry. The first no says “I am not demanding”; the later yes says “I receive your kindness.”"
        },
        {
          label: "Popayán feeds guests proudly",
          body: "Popayán is famous for white colonial streets and for a strong food identity: empanadas de pipián, ají de maní, champús, carantanta. A host offering these is not just filling a plate; she is showing the city. Complimenting the food is part of accepting the place. “Se ve delicioso” or “qué rico” matters because it receives the culture as well as the snack."
        },
        {
          label: "Accepting without greed",
          body: "The anxiety behind the ritual is simple: nobody wants to look greedy, and no host wants a guest to feel abandoned. Colombian courtesy solves it by giving both people lines to say. The guest hesitates, the host reassures, the guest accepts with thanks. The important part for a learner is not to play the scene mechanically forever. Once you mean yes, say yes."
        }
      ],
      pitfalls: [
        {
          mistake: "Treating the first “no, gracias” as always final",
          whyItFails: "In many Colombian homes, a first refusal can be modesty, not a real no. If you want the food, waiting silently after that may make the host guess instead of letting you accept gracefully.",
          sayInstead: "Bueno, acepto con mucho gusto."
        },
        {
          mistake: "Saying only “acepto” with no warmth at the table",
          whyItFails: "The verb is correct, but bare “acepto” can sound like you are signing a contract. Food offers need thanks, pleasure or a compliment so the yes feels human.",
          sayInstead: "Sí, gracias, acepto un poquito."
        },
        {
          mistake: "Accepting when you truly cannot eat or drink it",
          whyItFails: "Courtesy should not override a real limit. Allergies, health rules or strong dislikes need a clear refusal after thanks, not a vague dance that leaves the host pushing.",
          sayInstead: "Gracias, pero de verdad no puedo."
        }
      ],
      variations: [
        {
          form: "Acepto con mucho gusto.",
          register: "polite neutral",
          region: "Universal Spanish",
          whenToUse: "Graciously accepting an invitation or offer."
        },
        {
          form: "Bueno, acepto un poquito.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Accepting food after a polite first hesitation."
        },
        {
          form: "Sí, gracias, se ve delicioso.",
          register: "friendly informal",
          region: "Universal Spanish",
          whenToUse: "Accepting food with gratitude and a compliment."
        },
        {
          form: "Gracias, pero de verdad no puedo.",
          register: "polite neutral",
          region: "Universal Spanish",
          whenToUse: "Refusing clearly after thanks when the no is real."
        }
      ],
      prompt: "Doña Marta offers food a second time and says “acepte sin pena.” What is the best response if Alex wants some?",
      choices: [
        "No, rechazo toda comida de esta casa.",
        "Bueno, acepto con mucho gusto.",
        "No respondo hasta que insista cinco veces."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence accepts an invitation warmly?",
          choices: [
            "Acepto con mucho gusto la invitación.",
            "Acepto sin ninguna emoción la invitación.",
            "Acepto porque no tengo otra salida."
          ],
          answer: 0,
          tests: "aceptar con gusto"
        },
        {
          prompt: "At a Colombian table, “¿quiere repetir?” means—",
          choices: [
            "Do you want to repeat every word again?",
            "Do you want to reject the whole meal?",
            "Do you want to have another serving?"
          ],
          answer: 2,
          tests: "repetir = have seconds at the table"
        },
        {
          prompt: "If Alex truly cannot drink champús, which answer is clear and polite?",
          choices: [
            "Gracias, pero de verdad no puedo.",
            "Bueno, acepto aunque me haga daño.",
            "Ahí te cuento si me lo tomo algún día."
          ],
          answer: 0,
          tests: "a real no should be kind but clear"
        }
      ]
    },
    en: {
      title: "Aceptar una oferta sin esperar que insistan",
      situation:
        "En Houston, Alejandra visita a la familia de Emily. Le ofrecen té y galletas, y ella dice “no, thank you” por educación, esperando que le insistan como en muchas casas colombianas. Nadie insiste. Emily le explica que en inglés un “no, thanks” suele tomarse como no real, y que si usted quiere aceptar debe decir desde el principio “yes, please”, “I'd love some” o “that would be lovely”.",
      setting: {
        who: "Emily es una amiga estadounidense que invita a Alejandra a conocer a su familia. Alejandra quiere ser educada, pero trae el ritual colombiano de negar una vez antes de aceptar.",
        what: "Una merienda en casa, donde aceptar una taza de té requiere decir sí con claridad en vez de esperar una segunda o tercera oferta.",
        when: "Una tarde fría de domingo, después de entrar de la calle con las manos heladas.",
        where: "Houston, Texas, en la sala de la casa de la familia de Emily.",
        why: "Porque en inglés la cortesía no siempre incluye insistir. Si usted dice “no, thank you”, muchas personas creen que ya cuidaron su comodidad respetando ese no."
      },
      address: {
        form: "mixed",
        who: "El inglés usa “you” para Emily, sus padres y Alejandra; el respeto se marca con tono, “please” y “thank you”.",
        why: "No existe un pronombre formal que avise cercanía o distancia. En una casa ajena, la cortesía está en respuestas completas y agradecidas, no en cambiar el tratamiento.",
        ifYouSwitch: "Si Alejandra intenta compensar con frases demasiado ceremoniosas, puede sonar rígida. Un “yes, please” con sonrisa es más natural que una explicación larga."
      },
      dialogue: [
        {
          speaker: "Emily's mother",
          target: "Would you like some tea and cookies?",
          translation: "¿Le gustaría un poco de té y galletas?",
          pronunciation: "wud yu laik som ti and KU-kis",
          literal: "¿Querría usted algo de té y galletas?",
          why: "“Would you like...?” es la oferta cortés estándar. No necesita una fórmula larga; el modal “would” ya suaviza la pregunta."
        },
        {
          speaker: "Alejandra",
          target: "No, thank you. I don't want to be a bother.",
          translation: "No, gracias. No quiero molestar.",
          pronunciation: "nou, zank yu. ai dont want tu bi a BO-der",
          literal: "No, gracias. Yo no quiero ser una molestia.",
          why: "La frase es educada, pero en inglés normalmente cuenta como un no real. Si Alejandra sí quería té, acaba de rechazarlo sin querer."
        },
        {
          speaker: "Emily",
          target: "If you want some, say yes. Mom won't push after “no, thanks.”",
          translation: "Si quiere, diga que sí. Mi mamá no va a insistir después de “no, gracias”.",
          pronunciation: "if yu want som, sei yes. mam wont push AF-ter nou zanks",
          literal: "Si usted quiere algo, diga sí. Mamá no empujará después de no gracias.",
          why: "“Push” aquí es insistir. Emily explica la diferencia cultural: respetar el no puede ser la forma de ser amable."
        },
        {
          speaker: "Emily's mother",
          target: "Are you sure? There's plenty.",
          translation: "¿Está segura? Hay bastante.",
          pronunciation: "ar yu shur? ders PLEN-ti",
          literal: "¿Está usted segura? Hay abundante.",
          why: "Sí puede haber una segunda oportunidad, pero no conviene depender de ella. “There's plenty” tranquiliza: aceptar no deja a nadie sin comida."
        },
        {
          speaker: "Alejandra",
          target: "Actually, yes, please. I'd love some tea.",
          translation: "Ahora que lo dice, sí, por favor. Me encantaría un poco de té.",
          pronunciation: "AK-chu-a-li, yes, pliz. aid lov som ti",
          literal: "En realidad, sí, por favor. Yo amaría algo de té.",
          why: "“Actually” corrige suavemente la respuesta anterior. “Yes, please” es la aceptación clara; “I'd love some” añade entusiasmo sin sonar tragona."
        },
        {
          speaker: "Emily's mother",
          target: "That's better. And if you want a second cup, just say so.",
          translation: "Así está mejor. Y si quiere una segunda taza, solo dígalo.",
          pronunciation: "dats BE-ter. and if yu want a SE-kond kop, yost sei so",
          literal: "Eso está mejor. Y si usted quiere una segunda taza, solo dígalo.",
          why: "La anfitriona cierra el ofrecimiento, igual que en español. Fíjese en lo que Alejandra NO dijo: “I accept” existe como verbo, pero para té, galletas o una ayuda pequeña suena a contrato. Las fórmulas naturales son “yes, please”, “I'd love to” y “that would be great”."
        }
      ],
      vocabulary: [
        {
          term: "accept",
          explanation: "Aceptar una invitación, oferta, disculpa o condición; correcto, pero a menudo más formal que un simple sí.",
          literal: "aceptar",
          useWhen: "Invitaciones y asuntos explícitos: “accept an invitation”, “accept the offer”.",
          avoidWhen: "Le ofrecen té o una galleta; “yes, please” suena más natural que “I accept”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["accept an invitation", "accept an offer", "acceptance", "accepted"],
          example: {
            target: "I gladly accept your invitation.",
            translation: "Acepto su invitación con mucho gusto."
          }
        },
        {
          term: "Yes, please",
          explanation: "La forma básica y amable de aceptar comida, bebida o ayuda pequeña.",
          literal: "sí, por favor",
          useWhen: "Responder a “would you like...?”: “yes, please”.",
          avoidWhen: "Quiere aceptar una invitación formal; ahí puede usar “I'd love to” o “I accept”.",
          register: "cortés neutro",
          region: "Inglés universal.",
          related: ["please", "thank you", "I'd love some", "sure"],
          example: {
            target: "Yes, please. That looks delicious.",
            translation: "Sí, por favor. Se ve delicioso."
          }
        },
        {
          term: "I'd love to / I'd love some",
          explanation: "Una aceptación cálida: “me encantaría”. “To” va con acción; “some” con comida o bebida.",
          literal: "me encantaría / me encantaría un poco",
          useWhen: "Aceptar planes o algo servido: “I'd love to come”, “I'd love some tea”.",
          avoidWhen: "No está de verdad interesado; suena entusiasta.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["I'd be happy to", "that would be lovely", "yes please", "love"],
          example: {
            target: "I'd love to come to dinner.",
            translation: "Me encantaría ir a cenar."
          }
        },
        {
          term: "That would be great / lovely",
          explanation: "Otra forma natural de aceptar una oferta con gratitud.",
          literal: "eso sería genial / encantador",
          useWhen: "Aceptar ayuda, comida o un plan: “that would be great, thanks”.",
          avoidWhen: "Necesita responder a una regla formal; puede sonar demasiado casual.",
          register: "amistoso informal",
          region: "Inglés universal; “lovely” es muy común en Reino Unido y Estados Unidos.",
          related: ["great", "lovely", "thanks", "I'd love that"],
          example: {
            target: "That would be lovely, thank you.",
            translation: "Sería muy amable, gracias."
          }
        },
        {
          term: "No, thank you",
          explanation: "Una negativa cortés que suele tomarse en serio. No espere que siempre le insistan.",
          literal: "no, gracias",
          useWhen: "Rechazar comida, bebida o ayuda de manera amable.",
          avoidWhen: "Sí quiere aceptar; en muchas casas anglófonas no habrá segundo empujón.",
          register: "cortés neutro",
          region: "Inglés universal.",
          related: ["no thanks", "I'm okay", "I'm fine", "maybe later"],
          example: {
            target: "No, thank you. I'm fine.",
            translation: "No, gracias. Estoy bien."
          }
        },
        {
          term: "Are you sure?",
          explanation: "Una segunda oferta o chequeo, pero no un ritual garantizado.",
          literal: "¿está seguro?",
          useWhen: "Confirmar que una negativa es real: “are you sure? there's plenty”.",
          avoidWhen: "Insistir demasiado; en inglés puede sonar como presión.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["sure", "there's plenty", "no pressure", "really"],
          example: {
            target: "Are you sure? There's plenty of food.",
            translation: "¿Está segura? Hay bastante comida."
          }
        },
        {
          term: "I don't want to be a bother",
          explanation: "Una frase educada para decir “no quiero molestar”, pero puede cerrar la oferta de verdad.",
          literal: "no quiero ser una molestia",
          useWhen: "Mostrar consideración cuando una oferta parece costosa o incómoda.",
          avoidWhen: "Es solo una cortesía automática y sí quiere aceptar; puede hacer que el otro retire la oferta.",
          register: "cortés neutro",
          region: "Inglés universal.",
          related: ["impose", "bother", "no trouble", "it's no bother"],
          example: {
            target: "I don't want to be a bother.",
            translation: "No quiero molestar."
          }
        }
      ],
      note:
        "En inglés, aceptar algo cotidiano rara vez necesita “I accept”. Para comida, bebida o ayuda pequeña, diga “yes, please”, “I'd love some”, “that would be great, thank you”. Y tenga cuidado con el primer “no, thank you”: mucha gente lo respeta como un no real y no insiste. Si usted quiere aceptar, diga que sí claramente; si no quiere, “no, thank you” ya cumple su función."
      ,
      culture: [
        {
          label: "Respetar el no también es cortesía",
          body: "En muchas casas anglófonas, insistir después de un no puede sentirse invasivo. La persona ofreció, usted dijo que no, y respetar ese límite es la manera de cuidarlo. Para un colombiano, puede parecer falta de hospitalidad; para el anfitrión, insistir demasiado sería presionar. Por eso conviene no usar un no automático cuando en realidad quiere decir sí."
        },
        {
          label: "Aceptar con entusiasmo breve",
          body: "Un “yes, please” dicho con calidez hace mucho trabajo. “I'd love some” o “that would be lovely” muestran ganas sin parecer codicioso. El inglés no necesita la mini-negociación de cortesía que muchas familias colombianas reconocen. La gratitud va después: “thank you”, una sonrisa, quizá un cumplido. La frase puede ser corta y aun así muy amable."
        },
        {
          label: "“I accept” vive en contextos más formales",
          body: "El verbo “accept” se usa de verdad: aceptar una oferta de trabajo, una disculpa, una invitación formal, términos y condiciones. Pero frente a una bandeja de galletas suena rígido, casi legal. El hispanohablante no debe borrarlo, sino ubicarlo. Para planes grandes, “I accept your invitation” funciona; para té, “yes, please” gana."
        }
      ],
      pitfalls: [
        {
          mistake: "“I accept a cookie.”",
          whyItFails: "La gramática se entiende, pero para una oferta cotidiana suena demasiado formal, como si la galleta fuera un contrato. La respuesta natural es breve y amable.",
          sayInstead: "Yes, please."
        },
        {
          mistake: "Saying “No, thank you” when you secretly want some",
          whyItFails: "En inglés esa negativa suele tomarse en serio. El anfitrión puede pensar que respetar su no es lo correcto y dejar de ofrecer.",
          sayInstead: "Actually, yes, please."
        },
        {
          mistake: "“I don't want to molest.”",
          whyItFails: "“Molestar” no se traduce como “molest” en esta situación. “Molest” tiene un sentido fuerte de acosar o agredir; para incomodar se dice “bother”.",
          sayInstead: "I don't want to be a bother."
        }
      ],
      variations: [
        {
          form: "Yes, please.",
          register: "cortés neutro",
          region: "Inglés universal",
          whenToUse: "Aceptar comida, bebida o ayuda pequeña."
        },
        {
          form: "I'd love some, thank you.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Aceptar algo servido con entusiasmo."
        },
        {
          form: "That would be lovely.",
          register: "cortés cálido",
          region: "Estados Unidos y Reino Unido; también entendido en otros lugares",
          whenToUse: "Aceptar una oferta con calidez."
        },
        {
          form: "No, thank you.",
          register: "cortés neutro",
          region: "Inglés universal",
          whenToUse: "Rechazar de manera amable y clara."
        }
      ],
      prompt: "Le ofrecen té en inglés y usted sí quiere. ¿Qué respuesta es natural?",
      choices: [
        "No, thank you, but secretly yes.",
        "Yes, please. I'd love some.",
        "I accept the tea contract."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuándo suena natural “accept” en inglés?",
          choices: [
            "Para aceptar una oferta formal de trabajo.",
            "Para aceptar una galleta en una bandeja.",
            "Para aceptar una servilleta en la mesa."
          ],
          answer: 0,
          tests: "accept is more formal than yes please"
        },
        {
          prompt: "Si dijo “no, thank you” pero cambió de idea, ¿qué puede decir?",
          choices: [
            "Actually, yes, please.",
            "I reject my old answer.",
            "You must offer again now."
          ],
          answer: 0,
          tests: "actually softens a changed answer"
        },
        {
          prompt: "¿Cuál traduce “no quiero molestar” sin falso amigo?",
          choices: [
            "I don't want to molest.",
            "I don't want to bother.",
            "I don't want to reject."
          ],
          answer: 1,
          tests: "bother, not molest"
        }
      ]
    }
  },
  {
    id: "softening-a-refusal-in-ibague",
    level: "Developing · Social life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "familiar",
    pathways: ["independent"],
    verb: "rechazar",
    review: "pending",
    es: {
      title: "Decir que no sin decir “rechazo tu invitación”",
      situation:
        "En Ibagué, Lucía invita a Alex a un cumpleaños después de un ensayo de música. Alex no puede ir y, queriendo sonar correcto, dice “rechazo tu invitación”. La frase cae helada. Lucía le enseña que rechazar es un verbo duro y más bien escrito o formal; en conversación se dice “uy, no puedo”, “me queda difícil”, “de pronto la próxima” o incluso “ahí te cuento”, que muchas veces es un no amable, no una promesa real de confirmar.",
      setting: {
        who: "Lucía is an Ibagué friend organizing a birthday gathering after rehearsal. Alex genuinely cannot go and wants to refuse without hurting her feelings.",
        what: "A birthday invitation and a refusal, focused on the spoken softeners Colombians use instead of the blunt verb rechazar.",
        when: "A weekday evening after a music rehearsal, with everyone packing instruments and making weekend plans.",
        where: "Ibagué, Tolima, outside a small music academy.",
        why: "Because refusing is socially riskier than accepting. A learner who says the dictionary verb too directly can sound cold, while a learner who hears “ahí te cuento” literally may wait for an answer that was already a polite no."
      },
      address: {
        form: "tú",
        who: "Lucía and Alex are friends, so tú fits the invitation and the apology.",
        why: "The register is affectionate and informal. The refusal has to preserve that friendship, so soft phrases matter more than formal correctness.",
        ifYouSwitch: "Using usted would make the refusal sound more distant, and pairing it with “rechazo” would make it even colder. The situation needs closeness plus tact."
      },
      dialogue: [
        {
          speaker: "Lucía",
          target: "Este sábado hago mi cumpleaños. ¿Te vienes?",
          translation: "I'm doing my birthday thing this Saturday. Are you coming?",
          pronunciation: "ES-te SA-ba-doh AH-goh mee koom-pleh-AH-nyos. te BYEH-nes",
          literal: "This Saturday I-do my birthday. Yourself you-come?",
          why: "“Hago mi cumpleaños” is casual Colombian shorthand for hosting a birthday gathering. “¿Te vienes?” invites him warmly, not formally."
        },
        {
          speaker: "Alex",
          target: "Gracias, Lucía, pero rechazo tu invitación.",
          translation: "Thanks, Lucía, but I reject your invitation.",
          pronunciation: "GRA-syas, loo-SEE-ah, PE-ro rreh-CHA-soh too een-bee-ta-SYON",
          literal: "Thanks, Lucía, but I-reject your invitation.",
          why: "This is grammatically clear and socially icy. “Rechazar una invitación” belongs in writing, minutes, forms or formal explanations. Said to a friend, it sounds like a door slamming."
        },
        {
          speaker: "Lucía",
          target: "Uy, no tan duro. Mejor di: “uy, no puedo, me queda difícil”.",
          translation: "Oof, not that harsh. Better say: “ah, I can't, it's hard for me.”",
          pronunciation: "ooy, noh tan DOO-roh. meh-HOR dee: ooy, noh PWEH-doh, meh KEH-da dee-FEE-seel",
          literal: "Oof, not so hard. Better say: oof, I can't, it remains hard to me.",
          why: "Lucía gives the spoken repair. “Me queda difícil” is a Colombian softener: it avoids a flat no while still communicating that the plan will not work."
        },
        {
          speaker: "Alex",
          target: "Uy, no puedo. Me queda difícil porque trabajo temprano.",
          translation: "Ah, I can't. It's hard for me because I work early.",
          pronunciation: "ooy, noh PWEH-doh. meh KEH-da dee-FEE-seel POR-keh tra-BA-ho tem-PRA-no",
          literal: "Oof, I can't. It remains hard to me because I-work early.",
          why: "Now the refusal is honest but cushioned. “Porque trabajo temprano” gives a reason without overexplaining. The verb rechazar disappears from the spoken line."
        },
        {
          speaker: "Lucía",
          target: "Eso. Y si dices “ahí te cuento”, yo entiendo que casi seguro no vienes.",
          translation: "That's it. And if you say “I'll tell you later,” I understand that you almost certainly aren't coming.",
          pronunciation: "EH-soh. ee see DEE-ses ah-EE te KWEN-toh, yoh en-TYEN-doh keh KA-see seh-GOO-roh noh BYEH-nes",
          literal: "That. And if you-say there you I-tell, I understand that almost sure not you-come.",
          why: "This is the second trap. “Ahí te cuento” sounds like a maybe, but in Colombian plans it often functions as a polite no or a way to avoid committing."
        },
        {
          speaker: "Alex",
          target: "Entonces mejor digo: no puedo, pero de pronto la próxima.",
          translation: "Then I'd better say: I can't, but maybe next time.",
          pronunciation: "en-TON-ses meh-HOR DEE-goh: noh PWEH-doh, PE-ro de PRON-toh la PROK-see-ma",
          literal: "Then better I-say: I can't, but maybe the next one.",
          why: "“De pronto la próxima” leaves warmth without pretending this invitation is still open. It is one of the safest spoken ways to refuse and keep the relationship friendly."
        }
      ],
      vocabulary: [
        {
          term: "rechazar",
          explanation: "To reject or refuse, but in speech it is blunt. It is more at home in formal, written or institutional contexts.",
          literal: "to reject",
          useWhen: "Applications, proposals, offers or formal refusals: “rechazaron la solicitud”.",
          avoidWhen: "Refusing a friend's invitation out loud; use a soft spoken no instead.",
          register: "polite formal",
          region: "Universal Spanish; too cold for most friendly invitations in Colombia.",
          related: ["el rechazo", "rechazar una solicitud", "negarse", "declinar"],
          example: {
            target: "La universidad rechazó la solicitud.",
            translation: "The university rejected the application."
          }
        },
        {
          term: "uy, no puedo",
          explanation: "A natural spoken no: brief, apologetic and human.",
          literal: "oof, I can't",
          useWhen: "Refusing plans with a friend: “uy, no puedo, tengo turno”.",
          avoidWhen: "A formal written refusal, where you need “rechazar” or “declinar”.",
          register: "friendly informal",
          region: "Common in Colombia.",
          related: ["no puedo", "qué pena", "me queda difícil", "tengo compromiso"],
          example: {
            target: "Uy, no puedo ir el sábado.",
            translation: "Ah, I can't go on Saturday."
          }
        },
        {
          term: "me queda difícil",
          explanation: "A Colombian softener meaning “that is difficult for me / it probably won't work.” Often it is a polite no.",
          literal: "it remains difficult to me",
          useWhen: "Turning down plans without a hard “no”: “me queda difícil esta semana”.",
          avoidWhen: "The listener needs a firm answer immediately; then add “no puedo”.",
          register: "polite informal",
          region: "Very common in Colombia.",
          related: ["se me complica", "no alcanzo", "no puedo", "difícil"],
          example: {
            target: "Me queda difícil ir hoy.",
            translation: "I can't really make it today."
          }
        },
        {
          term: "ahí te cuento / yo te aviso",
          explanation: "Literally “I'll tell you / let you know,” but often a polite non-commitment that means no.",
          literal: "there I tell you / I let you know",
          useWhen: "Softly avoiding commitment, especially when a direct no feels uncomfortable.",
          avoidWhen: "You truly need to confirm later; then give a concrete time or the person may read it as no.",
          register: "friendly informal",
          region: "Common Colombian plan-making.",
          related: ["te aviso", "miramos", "de pronto", "pendiente"],
          example: {
            target: "Déjame mirar y ahí te cuento.",
            translation: "Let me check and I'll let you know."
          }
        },
        {
          term: "de pronto la próxima",
          explanation: "Maybe next time. It softens a no while keeping affection in the relationship.",
          literal: "suddenly the next one",
          useWhen: "Declining this plan but leaving the door socially open: “de pronto la próxima”.",
          avoidWhen: "You never want to go; repeated vague next-times can frustrate people.",
          register: "friendly informal",
          region: "Colombia; de pronto often means maybe.",
          related: ["la próxima", "otra vez será", "más adelante", "gracias por invitarme"],
          example: {
            target: "Hoy no puedo; de pronto la próxima.",
            translation: "I can't today; maybe next time."
          }
        },
        {
          term: "qué pena",
          explanation: "A compact apology or embarrassment marker, useful before a refusal.",
          literal: "what embarrassment",
          useWhen: "Softening bad news: “qué pena, no puedo acompañarte”.",
          avoidWhen: "You translate it as “what pity”; its social force is closer to “sorry / I feel bad”.",
          register: "polite informal",
          region: "Very common in Colombia.",
          related: ["perdón", "disculpa", "me da pena", "lo siento"],
          example: {
            target: "Qué pena, esta vez no puedo.",
            translation: "Sorry, I can't this time."
          }
        },
        {
          term: "declinar",
          explanation: "A formal alternative to rechazar for invitations or offers. Useful in writing, rare among friends.",
          literal: "to decline",
          useWhen: "Emails, letters and professional invitations: “debo declinar la invitación”.",
          avoidWhen: "Casual speech with a friend; it sounds stiff, though less harsh than rechazar.",
          register: "polite formal",
          region: "Universal Spanish.",
          related: ["rechazar", "declinar una oferta", "lamentablemente", "formal"],
          example: {
            target: "Lamentablemente debo declinar la invitación.",
            translation: "Unfortunately I must decline the invitation."
          }
        }
      ],
      note:
        "Rechazar is real Spanish, but it is the wrong tool for most spoken invitations. “Rechazo tu invitación” sounds cold because it names the refusal like an official decision. Colombians usually soften: “uy, no puedo”, “qué pena, me queda difícil”, “de pronto la próxima”. And beware of vague maybes: “ahí te cuento” and “yo te aviso” often mean a polite no unless the speaker gives a concrete follow-up. Do not wait forever for a maybe that was never meant as one.",
      culture: [
        {
          label: "The spoken no avoids the hard verb",
          body: "Friendly refusals in Colombia often work by cushioning the impact. The person thanks you, apologizes, gives a reason or says it is difficult, and leaves warmth for next time. The direct verb “rechazar” is not false, but it belongs to documents, applications and formal proposals. Friendship usually chooses softer grammar because the real goal is not only to decline, but to keep the bond intact."
        },
        {
          label: "Maybe that means no",
          body: "English speakers often hear “ahí te cuento” or “yo te aviso” as a real promise to check a calendar. Sometimes it is. But in invitations, especially when no date for confirming is named, it often means the person is stepping away politely. Colombians read the vagueness quickly. If someone truly means maybe, they usually add a concrete next step: “te confirmo mañana”."
        },
        {
          label: "Ibagué, music and weekend plans",
          body: "Ibagué calls itself Colombia's musical city, with conservatories, festivals and neighborhood academies woven into its identity. A rehearsal turning into birthday plans is ordinary social life there. The language does not need invented Tolima slang to feel local; the Colombian part is the tact around the invitation, the “qué pena” before the no, and the promise that maybe the next plan will work."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “rechazo tu invitación” to a friend",
          whyItFails: "It is grammatically correct but emotionally cold, like issuing a formal decision. A friend expects a softened refusal, not the language of applications and notices.",
          sayInstead: "Uy, qué pena, no puedo."
        },
        {
          mistake: "Taking “ahí te cuento” as a firm maybe every time",
          whyItFails: "Without a concrete follow-up, it is often a polite no. Waiting as if confirmation is definitely coming can leave you confused and make the other person feel chased.",
          sayInstead: "Claro, me avisas si puedes."
        },
        {
          mistake: "Using a vague maybe when the host needs a head count",
          whyItFails: "Softness has limits. If someone is buying food or reserving seats, “ahí te cuento” may be inconsiderate unless you say exactly when you will confirm.",
          sayInstead: "Te confirmo mañana antes del mediodía."
        }
      ],
      variations: [
        {
          form: "Uy, no puedo.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "A simple, softened no to plans."
        },
        {
          form: "Me queda difícil esta vez.",
          register: "polite informal",
          region: "Colombia",
          whenToUse: "Saying a plan will not work without sounding harsh."
        },
        {
          form: "Ahí te cuento.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "A vague non-commitment, often heard as polite no."
        },
        {
          form: "Lamentablemente debo declinar.",
          register: "polite formal",
          region: "Universal Spanish",
          whenToUse: "A written or professional refusal."
        },
        {
          form: "Ojalá pudiera, pero me queda imposible esta vez.",
          register: "familiar",
          region: "General Colombian",
          whenToUse: "Turning something down warmly. Ojalá pudiera says you would if you could, which is what keeps the invitation open."
        }
      ],
      prompt: "Why is “rechazo tu invitación” a bad spoken answer to Lucía?",
      choices: [
        "It sounds cold and formal for a friend's invitation.",
        "It secretly means Alex will attend the birthday.",
        "It is impossible Spanish in every context."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which spoken refusal sounds natural with a friend?",
          choices: [
            "Rechazo formalmente tu cumpleaños.",
            "Uy, no puedo; me queda difícil.",
            "Declino institucionalmente la fiesta."
          ],
          answer: 1,
          tests: "spoken refusal uses softeners"
        },
        {
          prompt: "Lucía hears “ahí te cuento” with no date to confirm. She will probably read it as—",
          choices: [
            "a polite no or non-commitment.",
            "a guaranteed yes to the party.",
            "a formal written acceptance."
          ],
          answer: 0,
          tests: "ahí te cuento often means polite no"
        },
        {
          prompt: "Which refusal is best for a formal email?",
          choices: [
            "Uy, no puedo, qué embarrada.",
            "Ahí miro y te cuento pues.",
            "Lamentablemente debo declinar."
          ],
          answer: 2,
          tests: "declinar/rechazar belongs to formal contexts"
        }
      ]
    },
    en: {
      title: "Rechazar sin decir “I reject your invitation”",
      situation:
        "En Manchester, Alejandra recibe una invitación de Sam para ir a un concierto pequeño. No puede ir y traduce directo: “I reject your invitation”. Sam se ríe con cuidado y le explica que “reject” suena fuerte, casi como botar a alguien. En inglés hablado se dice “I can't make it”, “I'm afraid I can't”, “maybe next time” o “I'll let you know” si de verdad va a confirmar después.",
      setting: {
        who: "Sam es un compañero de trabajo amable que invita a Alejandra a un concierto local. Alejandra no puede ir, pero quiere que el no no dañe la relación.",
        what: "Una invitación a un plan y una negativa, centradas en evitar “reject” y escoger frases inglesas que rechazan el plan sin rechazar a la persona.",
        when: "Un jueves por la tarde, al salir del trabajo y hablar de planes del fin de semana.",
        where: "Manchester, Reino Unido, cerca de una parada del tranvía.",
        why: "Porque “reject” existe, pero pesa mucho. Un hispanohablante necesita aprender que la negativa cotidiana en inglés vive en “can't make it”, “turn down” y “maybe next time”, no en una traducción dura de rechazar."
      },
      address: {
        form: "mixed",
        who: "Sam y Alejandra usan el mismo “you”; la cercanía profesional se maneja por tono y frases de disculpa.",
        why: "El inglés no cambia de pronombre para suavizar una negativa. La cortesía aparece en “I'm afraid”, “sorry” y una razón breve.",
        ifYouSwitch: "Si Alejandra intenta sonar respetuosa con una frase demasiado formal, puede terminar sonando más fría. En inglés una negativa breve y amable suele funcionar mejor."
      },
      dialogue: [
        {
          speaker: "Sam",
          target: "A few of us are going to a gig on Saturday. Want to come?",
          translation: "Unos vamos a un concierto pequeño el sábado. ¿Quiere venir?",
          pronunciation: "a fiu ov as ar GOU-ing tu a gig on SA-ter-dei. want tu kom",
          literal: "Unos de nosotros vamos a un toque el sábado. ¿Quiere venir?",
          why: "“Gig” es un concierto pequeño o presentación. “Want to come?” es invitación informal; no necesita “do you want” completo entre compañeros."
        },
        {
          speaker: "Alejandra",
          target: "Thank you, but I reject your invitation.",
          translation: "Gracias, pero rechazo su invitación.",
          pronunciation: "zank yu, bat ai ri-JEKT yor in-vi-TEI-shon",
          literal: "Gracias, pero yo rechazo tu invitación.",
          why: "“Reject” es demasiado fuerte para este plan. Puede sonar como si Alejandra rechazara a Sam, no solo el concierto. La frase es clara pero socialmente torpe."
        },
        {
          speaker: "Sam",
          target: "Ouch. Just say, “I'm sorry, I can't make it.”",
          translation: "Uy. Mejor diga: “lo siento, no puedo ir / no alcanzo”.",
          pronunciation: "auch. yast sei, aim SOR-i, ai kant meik it",
          literal: "Ay. Solo diga, lo siento, no puedo hacerlo.",
          why: "“I can't make it” es la frase central para no poder asistir. No significa fabricar algo; significa lograr llegar o estar presente."
        },
        {
          speaker: "Alejandra",
          target: "I'm sorry, I can't make it. Maybe next time?",
          translation: "Lo siento, no puedo ir. ¿De pronto la próxima?",
          pronunciation: "aim SOR-i, ai kant meik it. MEI-bi nekst taim",
          literal: "Lo siento, no puedo hacerlo. ¿Tal vez próxima vez?",
          why: "Ahora la negativa suena humana: disculpa breve, imposibilidad clara y puerta social para otra ocasión. “Maybe next time” equivale muy bien a “de pronto la próxima”."
        },
        {
          speaker: "Sam",
          target: "Exactly. You can turn down the plan without rejecting the person.",
          translation: "Exacto. Puede rechazar el plan sin rechazar a la persona.",
          pronunciation: "eg-ZAKT-li. yu kan tern daun de plan wi-DAUT ri-JEK-ting de PER-son",
          literal: "Exactamente. Usted puede girar abajo el plan sin rechazar la persona.",
          why: "“Turn down” es el verbo frasal cotidiano para rechazar una invitación u oferta. Es más suave que “reject” y encaja con planes."
        },
        {
          speaker: "Alejandra",
          target: "If I say “I'll let you know,” I should actually let you know, right?",
          translation: "Si digo “le aviso”, de verdad debería avisarle, ¿cierto?",
          pronunciation: "if ai sei, ail let yu nou, ai shud AK-chu-a-li let yu nou, rait",
          literal: "Si yo digo, te dejaré saber, yo debería realmente dejarte saber, ¿cierto?",
          why: "En inglés “I'll let you know” puede ser evasivo, pero si el plan necesita respuesta, lo responsable es confirmar. Para evitar malentendidos, añada cuándo: “I'll let you know tomorrow.”"
        }
      ],
      vocabulary: [
        {
          term: "reject",
          explanation: "Rechazar, pero con fuerza. Sirve para solicitudes, ideas o personas en contextos claros; pesa demasiado para una invitación amistosa.",
          literal: "rechazar",
          useWhen: "Solicitudes, propuestas, hipótesis: “they rejected my application”.",
          avoidWhen: "Quiere decir que no puede ir a un plan; suena frío o personal.",
          register: "neutro a formal",
          region: "Inglés universal.",
          related: ["rejection", "reject an application", "reject an idea", "refuse"],
          example: {
            target: "The company rejected my application.",
            translation: "La empresa rechazó mi solicitud."
          }
        },
        {
          term: "I can't make it",
          explanation: "La frase natural para decir que no puede asistir a un plan.",
          literal: "no puedo lograrlo / hacerlo",
          useWhen: "Rechazar una invitación por disponibilidad: “sorry, I can't make it tonight”.",
          avoidWhen: "Quiere decir que no puede fabricar algo; este “make it” es asistir o llegar.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["make it", "can't come", "not able to", "sorry"],
          example: {
            target: "Sorry, I can't make it on Saturday.",
            translation: "Lo siento, no puedo ir el sábado."
          }
        },
        {
          term: "turn down",
          explanation: "Rechazar una invitación, oferta o propuesta de manera cotidiana.",
          literal: "girar hacia abajo",
          useWhen: "Hablar del rechazo sin dureza: “I had to turn down the invitation”.",
          avoidWhen: "Necesita un registro muy formal; “decline” puede quedar mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["turn down an offer", "decline", "say no", "pass on"],
          example: {
            target: "I had to turn down the invitation.",
            translation: "Tuve que rechazar la invitación."
          }
        },
        {
          term: "decline",
          explanation: "Rechazar con cortesía, más formal que “turn down” y menos duro que “reject”.",
          literal: "declinar",
          useWhen: "Invitaciones, ofertas y contextos profesionales: “I must decline”.",
          avoidWhen: "Conversación muy casual con amigos; puede sonar escrito.",
          register: "cortés formal",
          region: "Inglés universal.",
          related: ["politely decline", "turn down", "refuse", "declined"],
          example: {
            target: "Unfortunately, I have to decline.",
            translation: "Lamentablemente, tengo que declinar."
          }
        },
        {
          term: "I'm afraid I can't",
          explanation: "Una negativa cortés y un poco formal. “Afraid” aquí no es miedo literal.",
          literal: "me temo que no puedo",
          useWhen: "Decir no con tacto: “I'm afraid I can't join you”.",
          avoidWhen: "Entre amigos muy cercanos, donde puede sonar demasiado ceremonioso.",
          register: "cortés neutro",
          region: "Inglés universal, especialmente común en Reino Unido.",
          related: ["sorry", "can't make it", "unfortunately", "I'm afraid"],
          example: {
            target: "I'm afraid I can't come tonight.",
            translation: "Me temo que no puedo ir esta noche."
          }
        },
        {
          term: "Maybe next time",
          explanation: "La forma breve de dejar buena voluntad después de un no.",
          literal: "tal vez la próxima vez",
          useWhen: "Rechazar este plan pero mantener abierta otra ocasión.",
          avoidWhen: "No tiene ninguna intención futura; usado siempre puede sonar evasivo.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["next time", "rain check", "another time", "some other time"],
          example: {
            target: "I can't tonight. Maybe next time?",
            translation: "Hoy no puedo. ¿De pronto la próxima?"
          }
        },
        {
          term: "I'll let you know",
          explanation: "“Le aviso / te cuento.” Puede ser un maybe, pero si se necesita respuesta conviene dar plazo.",
          literal: "te dejaré saber",
          useWhen: "De verdad necesita revisar antes de confirmar: “I'll let you know tomorrow”.",
          avoidWhen: "Lo usa como no educado con alguien que necesita planear; puede dejarlo esperando.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["let you know", "confirm", "get back to you", "tomorrow"],
          example: {
            target: "I'll let you know by Friday.",
            translation: "Te confirmo antes del viernes."
          }
        }
      ],
      note:
        "“Reject” no es el no normal para planes. Úselo con solicitudes, ideas o propuestas formales: “they rejected my application.” Para una invitación hablada, diga “sorry, I can't make it”, “I'm afraid I can't”, “maybe next time” o “I have to turn it down.” “Decline” sirve en registro más formal. Y si dice “I'll let you know”, añada cuándo si la otra persona necesita organizarse; de lo contrario puede sonar evasivo."
      ,
      culture: [
        {
          label: "No rechace a la persona",
          body: "En inglés, “reject” puede tocar a la persona: “he rejected me” suena a rechazo sentimental o personal. Por eso “I reject your invitation” se siente más duro que el español escolar “rechazo la invitación”. El inglés cotidiano prefiere frases que culpan a la agenda, no al vínculo: “I can't make it”, “I'm busy that night”, “maybe next time”."
        },
        {
          label: "El no británico puede venir muy acolchado",
          body: "En Manchester y en buena parte del Reino Unido, “I'm afraid I can't” es una negativa muy normal y cortés. No significa miedo; es un colchón verbal. También aparecen “sorry”, “unfortunately” y “maybe another time”. Para un colombiano puede sonar indirecto, pero cumple la misma función que “qué pena, me queda difícil”: decir no sin romper el ambiente."
        },
        {
          label: "“I'll let you know” necesita fecha",
          body: "La frase puede ser una manera real de aplazar la respuesta o una salida vaga. La diferencia la marca el detalle. “I'll let you know tomorrow” es un compromiso claro; “I'll let you know” dicho al aire puede sonar a que la persona probablemente no irá. Si usted necesita mantener confianza, ponga plazo y cumpla."
        }
      ],
      pitfalls: [
        {
          mistake: "“I reject your invitation.”",
          whyItFails: "Suena duro y personal, como si rechazara a la persona. Para planes cotidianos el inglés usa “I can't make it” o “I'll have to turn it down”.",
          sayInstead: "Sorry, I can't make it."
        },
        {
          mistake: "“I can't assist to the concert.”",
          whyItFails: "Calca “asistir”. En inglés “assist” es ayudar, no asistir a un evento. Para poder ir se dice “make it” o “come”.",
          sayInstead: "I can't make it to the concert."
        },
        {
          mistake: "“I'll let you know” and then never answering",
          whyItFails: "Puede funcionar como salida vaga, pero si la otra persona necesita comprar entradas o contar gente, dejarla esperando es descortés.",
          sayInstead: "I'll let you know by tomorrow."
        }
      ],
      variations: [
        {
          form: "Sorry, I can't make it.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Rechazar una invitación cotidiana."
        },
        {
          form: "I'm afraid I can't come.",
          register: "cortés neutro",
          region: "Reino Unido y uso general",
          whenToUse: "Decir no con un tono más cortés."
        },
        {
          form: "I have to turn it down.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Decir que debe rechazar una oferta o invitación."
        },
        {
          form: "Maybe next time.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Mantener buena voluntad después de un no."
        },
        {
          form: "I wish I could come; if the shift had ended earlier, I would have joined you.",
          register: "familiar",
          region: "Inglés universal",
          whenToUse: "Para decir que no dejando claro que sí quería. “I wish I could” suaviza; la condicional explica el motivo real."
        }
      ],
      prompt: "Sam invita a Alejandra a un concierto, pero ella no puede ir. ¿Qué respuesta suena natural?",
      choices: [
        "I reject your invitation.",
        "Sorry, I can't make it.",
        "I can't assist the concert."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase sirve para rechazar una oferta de manera cotidiana?",
          choices: [
            "I have to turn it down.",
            "I have to turn it under.",
            "I have to reject you down."
          ],
          answer: 0,
          tests: "turn down = reject/decline an offer"
        },
        {
          prompt: "¿Cuál opción es más formal y cortés para un correo?",
          choices: [
            "Nah, can't go.",
            "Unfortunately, I must decline.",
            "I reject you personally."
          ],
          answer: 1,
          tests: "decline is formal/polite"
        },
        {
          prompt: "Si de verdad va a confirmar después, ¿qué frase evita dejar a Sam esperando?",
          choices: [
            "I'll let you know by tomorrow.",
            "I'll reject later maybe.",
            "I'll make the concert know."
          ],
          answer: 0,
          tests: "give a deadline with I'll let you know"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/34-developing-invitations.js");
