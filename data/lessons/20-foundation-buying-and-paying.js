/*
 * Lesson block: foundation / buying and paying — money changing hands.
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
 *
 * This block now also adds articles-and-quantity, because quantifiers appear
 * across the corpus and articles are constant, but neither system had a direct
 * grammar lesson.
 */
lessons.push(
  {
    id: "paying-with-a-fifty-at-the-checkout",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["foundation"],
    verb: "pagar",
    review: "pending",
    es: {
      title: "Paying with a big bill at the register",
      situation:
        "You are at the checkout in a Bogotá shop and only have a fifty-thousand-peso bill. The cashier asks how you are going to pay, and it turns out she has no way to give you change. You learn to move between cash and card, ask for “sencillo” and finish the payment without looking quite so much like a tourist.",
      setting: {
        who: "Alex is at the till; the cashier is Marcela, who has run this neighborhood shop's register for years and has seen every kind of customer. A short line is forming behind him.",
        what: "A routine checkout that snags on a very Colombian problem: Alex has only a big note and the register has no change to break it.",
        when: "Late afternoon, when people drop in for one or two things on the way home and nearly everyone pays in small amounts.",
        where: "Bogotá, a tienda de barrio in Chapinero where cash is still king but every counter now has a card reader bolted to it.",
        why: "Because how Alex handles the change problem — and whether he knows to ask whether she has small change before handing over the fifty — is the difference between a smooth exit and holding up the line."
      },
      address: {
        form: "usted",
        who: "Alex and Marcela use usted with each other — the ordinary footing between a customer and someone serving them, neither cold nor familiar.",
        why: "In a Bogotá shop, usted is the default of service. It stays courteous and efficient without pretending at a friendship that isn't there, and it is what a cashier will almost always reach for with you first.",
        ifYouSwitch:
          "Dropping into tú with a cashier you have never met can sound over-familiar, even a little flirtatious. Usted is the safe, neutral choice; you can always warm up later if you become a regular and she starts tuteando you."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Sería todo, muchas gracias. ¿Cuánto le debo?",
          translation: "That would be everything, thank you. How much do I owe you?",
          pronunciation: "seh-REE-a TO-do, MOO-chas GRA-syas. KWAN-toh le DEH-bo",
          literal: "It-would-be all, many thanks. How-much to-you I-owe?",
          why: "“¿Cuánto le debo?” — literally “how much do I owe you?” — is the standard way to ask for the total, with the usted object pronoun “le”. The conditional “sería” softens “that's everything” into something gentler than a flat “es todo”."
        },
        {
          speaker: "Marcela",
          target: "Son veintitrés mil. ¿Me va a pagar en efectivo o con tarjeta?",
          translation: "That's twenty-three thousand. Are you going to pay in cash or by card?",
          pronunciation: "son bayn-tee-TRES meel. me va a pa-GAR en eh-fek-TEE-vo o kon tar-HE-ta",
          literal: "They-are twenty-three thousand. To-me you-go to pay in cash or with card?",
          why: "Here is the verb of the lesson. “¿Me va a pagar…?” uses the “ir a + infinitive” future the way English uses “are you going to”. “En efectivo” (in cash) and “con tarjeta” (by card) are the two frozen phrases every checkout in the country runs on."
        },
        {
          speaker: "Alex",
          target: "En efectivo, pero solo tengo un billete de cincuenta. ¿Tiene con qué darme?",
          translation: "In cash, but I've only got a fifty-thousand note. Do you have change for it?",
          pronunciation: "en eh-fek-TEE-vo, PE-ro SO-lo TEN-go oon bee-YE-te de seen-KWEN-ta. TYEH-ne kon ke DAR-me",
          literal: "In cash, but only I-have a note of fifty. You-have with what to-give-me?",
          why: "“¿Tiene con qué darme?” — “do you have what to give me with?” — is the idiomatic way to ask if they can make change. A learner reaches for “cambio”, but Colombians more often ask this, or ask straight out for “sencillo”, meaning small notes and coins."
        },
        {
          speaker: "Marcela",
          target: "Uy, ¿no tiene sencillo? Con un billete de esos se me acaba el vuelto.",
          translation: "Oof, don't you have anything smaller? A note like that wipes out my change.",
          pronunciation: "OO-ee, no TYEH-ne sen-SEE-yo? kon oon bee-YE-te de EH-sos se me a-KA-ba el BWEL-to",
          literal: "Oof, not you-have small-change? With a note of those to-me finishes the change.",
          why: "“Sencillo” is the everyday word for small notes and coins — the thing shops are perpetually short of. “Vuelto” is the money handed back, not “cambio” (which leans toward exchanging). “Se me acaba” uses the reflexive to say her change runs out on her."
        },
        {
          speaker: "Alex",
          target: "Deje y miro… No, no tengo más. Mejor le pago con tarjeta, a una sola cuota.",
          translation: "Let me check… No, I don't have any more. I'd better pay by card then, in one single installment.",
          pronunciation: "DEH-he i MEE-ro… no, no TEN-go mas. me-HOR le PA-go kon tar-HE-ta, a OO-na SO-la KWO-ta",
          literal: "Let and I-look… No, not I-have more. Better to-you I-pay with card, at one single installment.",
          why: "“Le pago con tarjeta” uses the present of “pagar” as a near-future decision — English would say “I'll pay”. “A una cuota” means paying it off in one go; readers here always ask “¿a cuántas cuotas?”, because paying in installments is routine even for small buys."
        },
        {
          speaker: "Marcela",
          target: "Listo. Pase la tarjeta cuando quiera. Quedó pago, que le vaya muy bien.",
          translation: "All set. Tap the card whenever you like. It's paid — take care now.",
          pronunciation: "LEES-toh. PA-se la tar-HE-ta kwan-do KYE-ra. ke-DOH PA-go, ke le VA-ya mooy byen",
          literal: "Ready. Pass the card when you-want. It-stayed paid, that to-you it-goes very well.",
          why: "“Quedó pago” — “it ended up paid” — uses “pago” as an adjective, a very common way to confirm a sale closed. “Que le vaya bien” is the warm usted send-off you'll hear at every counter in the city as you leave."
        }
      ],
      vocabulary: [
        {
          term: "pagar",
          explanation:
            "The core verb for handing over money to settle what you owe. It takes the thing you pay directly — you pay the bill, pay the fare, pay the rent — with no preposition in between.",
          literal: "to pay",
          useWhen:
            "Any transaction: “¿le pago aquí?”, “ya pagué”, “voy a pagar con tarjeta”. It works for shops, taxis, rent and debts alike.",
          avoidWhen:
            "Don't slip an English “for” in after it when you name what you bought — “pagué la cuenta”, not “pagué por la cuenta”. The “por” version means something slightly different, covered below.",
          register: "neutral",
          region: "Universal Spanish; the direct object with no preposition is the pattern to lock in first.",
          related: ["cancelar", "pagar con tarjeta", "pagar en efectivo", "abonar"],
          example: {
            target: "¿Le puedo pagar con tarjeta?",
            translation: "Can I pay by card?"
          }
        },
        {
          term: "pagar por",
          explanation:
            "“Pagar por algo” names the thing you got in exchange, or a price you consider notable — “I paid X for it”. It is not how you say you settled a specific bill; that is plain “pagar la cuenta”.",
          literal: "to pay for (in exchange)",
          useWhen:
            "Naming what your money bought or how much a thing cost you: “pagué veinte mil por el taxi”, “¿cuánto pagaste por eso?”.",
          avoidWhen:
            "Skip the “por” when the object is the bill, the fare or the debt itself — those take “pagar” directly. Adding “por” there is the classic English calque.",
          register: "neutral",
          region: "Universal Spanish; the split with plain “pagar” trips up almost every English speaker.",
          related: ["pagar algo", "pagar de más", "pagar la cuenta", "salir caro"],
          example: {
            target: "Pagué veinte mil por el taxi.",
            translation: "I paid twenty thousand for the taxi."
          }
        },
        {
          term: "el sencillo",
          explanation:
            "Small notes and coins — the low-value cash a shop needs to give change. Being “sin sencillo” is a daily headache, so people ask for it and hoard it constantly.",
          literal: "the small (change)",
          useWhen:
            "Before breaking a big note, or when you need coins: “¿tiene sencillo?”, “no cargo sencillo”, “me quedé sin sencillo”.",
          avoidWhen:
            "It isn't the change you get back from a purchase — that is “el vuelto”. Sencillo is the small cash itself, whoever is holding it.",
          register: "informal but universal",
          region: "Used nationwide; “suelto” and “menudo” are common synonyms in some regions.",
          related: ["suelto", "menudo", "monedas", "billete grande"],
          example: {
            target: "¿Tiene sencillo para el bus?",
            translation: "Do you have small change for the bus?"
          }
        },
        {
          term: "el vuelto",
          explanation:
            "The change handed back to you after you pay with more than the exact amount. Colombia says “el vuelto” or “las vueltas”, almost never “el cambio” for this.",
          literal: "the returned (amount)",
          useWhen:
            "Whenever money comes back to you: “¿y mi vuelto?”, “quédese con el vuelto”, “me dio mal las vueltas”.",
          avoidWhen:
            "Don't use “cambio” here — that word leans toward changing money or currency. The money back from a purchase is the vuelto.",
          register: "neutral",
          region: "“El vuelto” and “las vueltas” both heard nationwide; the plural is very common in Bogotá.",
          related: ["las vueltas", "devolver", "quédese con el vuelto", "faltar"],
          example: {
            target: "Quédese con el vuelto.",
            translation: "Keep the change."
          }
        },
        {
          term: "en efectivo",
          explanation:
            "The set phrase for cash as a payment method, opposed to “con tarjeta”. Efectivo is the noun for physical money; it is not an adjective describing you.",
          literal: "in cash / in effective",
          useWhen:
            "Choosing or asking about the method: “¿en efectivo o con tarjeta?”, “solo efectivo”, “¿aceptan efectivo?”.",
          avoidWhen:
            "Don't reach for the English cognate feeling of “effective” — it has nothing to do with being effective. It simply means cash.",
          register: "neutral",
          region: "Universal; small shops may post “solo efectivo” when the card reader is down.",
          related: ["plata", "en billete", "sin tarjeta", "contra entrega"],
          example: {
            target: "¿Puedo pagar en efectivo?",
            translation: "Can I pay in cash?"
          }
        },
        {
          term: "a cuotas",
          explanation:
            "Paying in installments. Every card terminal asks “¿a cuántas cuotas?”, and “a una” means all at once; more than one spreads the cost, sometimes with interest.",
          literal: "in/at installments",
          useWhen:
            "At the terminal or planning a big buy: “a una cuota”, “lo pagué a tres cuotas”, “¿maneja cuotas sin interés?”.",
          avoidWhen:
            "Don't confuse a “cuota” (installment) with the “cuenta” (bill). They look alike but the bill is the total and a cuota is one slice of it.",
          register: "neutral service",
          region: "Nationwide; installment buying is deeply normal, even for modest amounts.",
          related: ["a una cuota", "a plazos", "diferido", "cuota inicial"],
          example: {
            target: "Lo pagué a tres cuotas.",
            translation: "I paid for it in three installments."
          }
        },
        {
          term: "cancelar",
          explanation:
            "In Colombian service Spanish, “cancelar” is a polite synonym for “pagar” — to settle up. It does not mean to call the sale off, which is what the English cognate screams.",
          literal: "to cancel / (here) to settle",
          useWhen:
            "Asking where or how to pay, especially in restaurants and clinics: “¿dónde cancelo?”, “¿ya canceló?”, “le cancelo en la caja”.",
          avoidWhen:
            "If you actually want to call something off, use “anular” or “cancelar la cita” with clear context — otherwise everyone assumes you mean paying.",
          register: "polite service",
          region: "This “pay” sense is strong across Colombia and much of the Andes.",
          related: ["pagar", "saldar", "cancelar la cuenta", "anular"],
          example: {
            target: "¿Dónde cancelo?",
            translation: "Where do I pay?"
          }
        }
      ],
      note:
        "The single most useful move here is to ask “¿tiene sencillo?” before you hand over a big note, and to remember that “pagar” takes the bill directly (“pagué la cuenta”) while “pagar por” names what you got for your money (“pagué veinte mil por el taxi”). Add that “cancelar” means to pay, and a Colombian checkout stops ambushing you.",
      culture: [
        {
          label: "The sencillo shortage is real",
          body:
            "Colombia runs on cash for small things, and small change is chronically scarce. Shops, taxis and buses are forever short of coins and low notes, so people break big bills early in the day and guard their sencillo. Paying a two-thousand-peso snack with a fifty-thousand note can genuinely stall a sale. Asking “¿tiene sencillo?” up front, or carrying coins for the bus, marks you as someone who knows how the day actually works."
        },
        {
          label: "“Cancelar” does not mean cancel",
          body:
            "The first time a waiter or receptionist asks “¿me va a cancelar?”, English speakers freeze, sure they are being asked to call something off. In Colombian service Spanish, cancelar is simply a courteous way to say pay. “¿Ya canceló?” means “have you paid yet?”, and “le cancelo en la caja” means “I'll pay you at the till”. It sits beside “pagar” as the more formal-sounding option, common in clinics, restaurants and offices."
        },
        {
          label: "“A la orden” everywhere",
          body:
            "You will hear “a la orden” constantly around any transaction. It is the all-purpose service phrase: as you walk in it means “can I help you?”, as you pay it means “go ahead”, and after you thank someone it works as “you're welcome”. It is not obsequious, just the ordinary grammar of Colombian service. Answering a friendly “a la orden” with a nod and a “gracias” keeps the little ritual running smoothly."
        },
        {
          label: "Cuotas: paying in slices",
          body:
            "Card readers in Colombia always ask “¿a cuántas cuotas?” — how many installments — even for a coffee. Buying on cuotas is woven into daily life, from appliances to plane tickets, and many stores advertise “cuotas sin interés”. For a small purchase you just say “a una”, meaning one payment. The habit surprises visitors, but it explains why the terminal seems to ask an extra question every single time you tap a card."
        }
      ],
      pitfalls: [
        {
          mistake: "“Pagué por la cuenta.”",
          whyItFails:
            "English “pay for” leaks in. When you name the bill, the fare or the debt itself, Spanish pays it directly — “pagué la cuenta”. The “por” version reframes the noun as the thing received in exchange, which makes “pay for the bill” sound off.",
          sayInstead: "Pagué la cuenta."
        },
        {
          mistake: "“¿Me da mi cambio?”",
          whyItFails:
            "“Cambio” pulls toward changing money or currency, so asking for “mi cambio” sounds like you want to exchange something. The money handed back after paying is “el vuelto” or “las vueltas”, and that is the word a cashier expects.",
          sayInstead: "¿Me da el vuelto?"
        },
        {
          mistake: "“No, no cancele nada.”",
          whyItFails:
            "Hearing “¿me cancela en la caja?” as “are you canceling?”, learners refuse — and accidentally say they won't pay. In this context cancelar means settle up, so the polite answer is to agree to pay, not to call anything off.",
          sayInstead: "Sí, con gusto le cancelo en la caja."
        },
        {
          mistake: "“¿Tiene cambio chiquito?”",
          whyItFails:
            "It is understandable but not idiomatic; nobody asks for “small change” with those words. The single word that does the job is “sencillo” (or “suelto”, “menudo”), and using it is an instant sign you have shopped here before.",
          sayInstead: "¿Tiene sencillo?"
        }
      ],
      variations: [
        {
          form: "¿Me va a pagar en efectivo o con tarjeta?",
          register: "polite service",
          region: "Bogotá / neutral",
          whenToUse: "The cashier's standard question. Recognize it and you can answer in a single word — “efectivo” or “tarjeta”."
        },
        {
          form: "¿Tiene sencillo?",
          register: "neutral",
          region: "Universal Colombian",
          whenToUse: "Ask before you hand over a big note, or when you need coins for the bus or a small purchase."
        },
        {
          form: "¿A cuántas cuotas?",
          register: "neutral service",
          region: "Nationwide, card terminals",
          whenToUse: "What the reader asks when you pay by card. Say “a una” for a single payment, or a number to spread it."
        },
        {
          form: "¿Dónde cancelo?",
          register: "polite service",
          region: "Colombia (cancelar = to pay)",
          whenToUse: "Asking where to settle up as you leave a restaurant, clinic or office. It means pay, not cancel."
        },
        {
          form: "Me la vas a pagar.",
          register: "threat / very informal",
          region: "Nationwide, colloquial",
          whenToUse: "Not about money at all — “you'll pay for this”, a threat or a joke between friends. Keep it well away from a real till."
        }
      ],
      prompt: "The cashier says “¿No tiene sencillo?” What is she really telling you?",
      choices: [
        "She can't break your big note and needs smaller bills or coins.",
        "She is out of that particular product and wants you to pick another.",
        "She would rather you came back and paid a little later this afternoon."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "You want to pay by card in a single payment. What do you say?",
          choices: [
            "Le pago con tarjeta en varias cuotas pequeñas.",
            "Le pago con tarjeta, a una sola cuota.",
            "Le pago con el vuelto de la tarjeta ahora mismo."
          ],
          answer: 1,
          tests: "pagar + card + a una cuota"
        },
        {
          prompt: "What does “Quédese con el vuelto” mean?",
          choices: [
            "Wait here while I go and fetch your change for you.",
            "Hold on to the receipt in case you need to return it.",
            "Keep the change — there's no need to give it back."
          ],
          answer: 2,
          tests: "el vuelto = change back"
        },
        {
          prompt: "You settled the lunch bill. Which sentence is right?",
          choices: [
            "Ya pagué la cuenta del almuerzo.",
            "Ya pagué por la cuenta del almuerzo.",
            "Ya pagué la cuenta por el almuerzo."
          ],
          answer: 0,
          tests: "pagar la cuenta, not pagar por la cuenta"
        },
        {
          prompt: "In a clinic, the receptionist asks “¿Ya canceló?” What is she asking?",
          choices: [
            "Whether you canceled your appointment earlier today.",
            "Whether you have already paid for the visit.",
            "Whether you would like to reschedule for another afternoon."
          ],
          answer: 1,
          tests: "cancelar = to pay in Colombia"
        }
      ]
    },
    en: {
      title: "Pagar en la caja estando en Estados Unidos",
      situation:
        "Usted está pagando en la caja de una tienda en Estados Unidos y solo tiene un billete grande. La cajera le pregunta cómo va a pagar y resulta que casi no tiene con qué darle el vuelto. Aquí aprende a decir en inglés si paga en efectivo o con tarjeta, a pedir billetes más pequeños y a cerrar el pago con las fórmulas que usan allá.",
      setting: {
        who: "Alejandra está en la caja; la cajera atiende rápido y hay un par de personas esperando detrás. Alejandra llegó al país hace poco y todavía traduce en la cabeza antes de hablar.",
        what: "Un pago de rutina que se traba con un problema conocido: Alejandra solo tiene un billete grande y la caja casi no tiene con qué darle el vuelto.",
        when: "Al final de la tarde, cuando la gente entra por una o dos cosas de camino a casa.",
        where: "Una tienda en Estados Unidos donde casi todo el mundo paga con tarjeta y pagar algo pequeño con un billete grande incomoda un poco.",
        why: "Porque saber decir “cash or card”, pedir “anything smaller” y entender “you're all set” es lo que separa un pago fluido de quedarse callada sin saber qué contestar."
      },
      address: {
        form: "mixed",
        who: "En inglés no hay usted ni tú: Alejandra y la cajera se tratan igual, con un “you” que sirve para todo el mundo.",
        why: "El inglés no marca el respeto con el pronombre sino con el verbo y los suavizadores — “could I”, “would you”, “just”, “please”. La cortesía está en cómo se pide, no en un pronombre aparte, así que conviene fijarse en esas palabritas y no buscar un “usted” que no existe.",
        ifYouSwitch:
          "No hay a qué cambiarse: el mismo “you” vale para la cajera, para un niño o para su jefe. Lo que sube o baja el tono son fórmulas como “could you” frente a un “gimme” cortante, no el pronombre."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "That's everything, thanks. How much do I owe you?",
          translation: "Eso es todo, gracias. ¿Cuánto le debo?",
          pronunciation: "dats EV-ri-zin, zenks. jáo moch du ái óu iú",
          literal: "Eso es todo, gracias. ¿Cuánto yo debo a-ti?",
          why: "“How much do I owe you?” es la forma natural de pedir el total; equivale a nuestro “¿cuánto le debo?”. El verbo “owe” es deber dinero, y note que todavía no aparece “pay”: primero se pregunta cuánto, después se paga."
        },
        {
          speaker: "Cashier",
          target: "That'll be twenty-three fifty. Will you be paying cash or card?",
          translation: "Son veintitrés con cincuenta. ¿Va a pagar en efectivo o con tarjeta?",
          pronunciation: "dat-l bi TUEN-ti-zri FIF-ti. uíl iú bi PÉI-in kash or kard",
          literal: "Eso-será veintitrés cincuenta. ¿Vas-a estar pagando efectivo o tarjeta?",
          why: "Aquí aparece el verbo que estamos aprendiendo: “pay”. “Will you be paying…?” suena más suave que “will you pay”, y “cash or card” es la pregunta fija en toda caja. Ojo con el número: “twenty-three fifty” es 23,50, no 2.350."
        },
        {
          speaker: "Alejandra",
          target: "Cash, but I've only got a fifty. Is that okay?",
          translation: "En efectivo, pero solo tengo un billete de cincuenta. ¿Está bien?",
          pronunciation: "kash, bot áiv ÓUN-li got a FIF-ti. is dat o-KÉI",
          literal: "Efectivo, pero yo-he sólo conseguido un cincuenta. ¿Es eso bien?",
          why: "“I've only got” es “solo tengo” en un inglés muy hablado, donde “got” hace de “have”. Y fíjese en que pagar algo pequeño con un billete grande incomoda allá: por eso Alejandra pregunta “is that okay?” en vez de darlo por hecho."
        },
        {
          speaker: "Cashier",
          target: "Oh, do you have anything smaller? That'll just about clean out my till.",
          translation: "Ah, ¿no tiene algo más pequeño? Con eso casi me quedo sin vuelto.",
          pronunciation: "ó, du iú jav É-ni-zin S-MO-ler? dat-l chost a-BÁUT klin áut mai til",
          literal: "Oh, ¿tienes tú algo más-pequeño? Eso-va apenas cerca limpiar afuera mi caja.",
          why: "“Anything smaller” es la fórmula para pedir billetes más pequeños — el equivalente de nuestro “¿tiene sencillo?”. “Till” es la caja registradora y “clean out” es vaciarla. El inglés no tiene una sola palabra para “sencillo”: dice “smaller bills” o “change”."
        },
        {
          speaker: "Alejandra",
          target: "Let me check… No, I don't. I'll just tap my card, then.",
          translation: "Déjeme ver… No, no tengo. Entonces mejor pago con la tarjeta sin contacto.",
          pronunciation: "let mi chek… nóu, ái dóunt. áil chost tap mai kard, den",
          literal: "Deja mí revisar… No, yo no. Yo-voy sólo tocar mi tarjeta, entonces.",
          why: "“I'll just tap my card” — “tap” es apoyar la tarjeta sin contacto, lo más común allá. El “I'll” es la decisión del momento, nuestro “pago / voy a pagar”, y ese “just” le resta importancia, como quien dice “nada, mejor la tarjeta”."
        },
        {
          speaker: "Cashier",
          target: "No problem. Go ahead and tap. You're all set — have a good one!",
          translation: "No hay problema. Apóyela ahí. Ya quedó lista… ¡que le vaya bien!",
          pronunciation: "nóu PRÓ-blem. góu a-JÉD an tap. iór ol set — jav a gud uán",
          literal: "No problema. Ve adelante y toca. Tú-estás todo listo — ten un buen uno.",
          why: "“You're all set” es “ya quedó, todo listo”; cierra el pago sin decir “paid”. “Have a good one” es una despedida informal, como “que le vaya bien”. Y “go ahead” aquí es “dele, hágalo”, una invitación, no una orden brusca."
        }
      ],
      vocabulary: [
        {
          term: "to pay",
          explanation:
            "El verbo básico para entregar dinero. En inglés se paga la cosa directamente — “pay the bill”, “pay the fare” — sin preposición en medio, igual que en español “pagar la cuenta”.",
          literal: "pagar",
          useWhen:
            "En cualquier transacción: “can I pay here?”, “I already paid”, “I'll pay by card”. Sirve para tiendas, taxis, arriendo y deudas.",
          avoidWhen:
            "No meta un “for” cuando nombra lo que paga como cuenta o deuda: es “pay the bill”, no “pay for the bill”. El “for” cambia el sentido, como se ve abajo.",
          register: "neutro",
          region: "Inglés universal; primero fije el objeto directo sin preposición.",
          related: ["pay for", "pay by card", "pay in cash", "pay off"],
          example: {
            target: "Can I pay by card?",
            translation: "¿Puedo pagar con tarjeta?"
          }
        },
        {
          term: "pay for",
          explanation:
            "“Pay for something” nombra lo que compró o cuánto le costó — nuestro “pagar por algo”. Se usa “for” con el objeto adquirido, pero nunca con la cuenta misma, que va con “pay” a secas.",
          literal: "pagar por (a cambio de)",
          useWhen:
            "Al decir qué compró o cuánto gastó: “I paid forty dollars for it”, “how much did you pay for that?”.",
          avoidWhen:
            "No use “for” cuando el objeto es la cuenta, la tarifa o la deuda; esos van directos. Ahí el “for” es justo el calco que delata al hispanohablante al revés.",
          register: "neutro",
          region: "Inglés universal; el reparto entre “pay” y “pay for” es idéntico al de “pagar / pagar por”.",
          related: ["pay the bill", "pay off", "pay back", "cover"],
          example: {
            target: "I paid forty dollars for it.",
            translation: "Pagué cuarenta dólares por eso."
          }
        },
        {
          term: "anything smaller",
          explanation:
            "La forma de pedir billetes o monedas de menor valor cuando trae un billete grande. El inglés no tiene una palabra como “sencillo”: usa “smaller (bills)” o “change”.",
          literal: "algo más pequeño",
          useWhen:
            "Antes de romper un billete grande, o cuando le piden lo mismo: “do you have anything smaller?”, “I don't have anything smaller”.",
          avoidWhen:
            "No lo confunda con el vuelto que le devuelven: eso también es “change”, pero “anything smaller” es el efectivo pequeño en sí, lo tenga quien lo tenga.",
          register: "cortés neutro",
          region: "Universal en inglés; “change” cubre a la vez el sencillo y el vuelto.",
          related: ["small change", "coins", "smaller bills", "spare change"],
          example: {
            target: "Do you have anything smaller?",
            translation: "¿Tiene algo más pequeño?"
          }
        },
        {
          term: "keep the change",
          explanation:
            "Se le dice a quien le devuelve dinero para que se quede con lo que sobra, normalmente como propina. Es el lado del “vuelto” que en inglés también cae bajo “change”.",
          literal: "quédese con el cambio",
          useWhen:
            "Al pagar un taxi o un domicilio y dejar propina: “keep the change”, “that's for you”.",
          avoidWhen:
            "No sirve para pedir su propio vuelto; para eso se pregunta “can I get my change?”. “Keep the change” es regalarlo, no reclamarlo.",
          register: "amistoso informal",
          region: "Universal; la propina en Norteamérica hace que se use bastante.",
          related: ["change", "the rest", "the difference", "tip"],
          example: {
            target: "Keep the change.",
            translation: "Quédese con el vuelto."
          }
        },
        {
          term: "cash",
          explanation:
            "El dinero físico, en billetes y monedas, frente a la tarjeta. Es un sustantivo; no tiene nada que ver con “effective”, que significa “eficaz”.",
          literal: "efectivo",
          useWhen:
            "Al elegir o preguntar por el medio de pago: “cash or card?”, “cash only”, “do you take cash?”.",
          avoidWhen:
            "No traduzca “efectivo” por “effective”: es un falso amigo clásico. El dinero en billetes siempre es “cash”.",
          register: "neutro",
          region: "Universal; algunos locales ponen “cash only” cuando el datáfono está caído.",
          related: ["debit", "credit", "Venmo", "bills"],
          example: {
            target: "Can I pay cash?",
            translation: "¿Puedo pagar en efectivo?"
          }
        },
        {
          term: "installments",
          explanation:
            "Pagar en cuotas. En Norteamérica no se ofrece en cada caja como en Colombia; aparece más con muebles, electrodomésticos o electrónica, a veces como “monthly payments”.",
          literal: "cuotas / plazos",
          useWhen:
            "Al comprar algo caro: “can I pay in installments?”, “do you offer monthly payments?”, “interest-free installments”.",
          avoidWhen:
            "No diga “quotas”: “quota” es un cupo o límite, no una cuota de pago. La palabra es “installments” o “payments”.",
          register: "neutro de servicio",
          region: "Menos habitual que en Colombia; casi nunca lo pregunta el datáfono.",
          related: ["monthly payments", "financing", "layaway", "down payment"],
          example: {
            target: "Do you offer installments?",
            translation: "¿Manejan pago a cuotas?"
          }
        },
        {
          term: "settle up",
          explanation:
            "Pagar lo que se debe, saldar la cuenta — nuestro “cancelar” en el sentido colombiano. Al revés que allá, en inglés “cancel” jamás significa pagar.",
          literal: "saldar / ajustar cuentas",
          useWhen:
            "Al querer pagar la cuenta o repartir gastos: “can I settle up?”, “let's settle up later”, “I'll settle up at the counter”.",
          avoidWhen:
            "No diga “cancel” cuando quiera pagar: en inglés “cancel” es anular. Para pagar use “pay”, “settle up” o “check out”.",
          register: "informal",
          region: "Universal; “square up” es una variante muy común.",
          related: ["pay", "check out", "square up", "cover the bill"],
          example: {
            target: "Can I settle up at the counter?",
            translation: "¿Puedo pagar en la caja?"
          }
        }
      ],
      note:
        "Lo más útil aquí es contestar “cash or card?” con una sola palabra, pedir “anything smaller” cuando solo trae billetes grandes, y recordar que en inglés “cancel” jamás significa pagar — para eso se dice “pay”, “settle up” o se oye “you're all set”. Y cuidado con “effective” por efectivo y “account” por cuenta: son falsos amigos que confunden al cajero.",
      culture: [
        {
          label: "Casi todo se paga con tarjeta",
          body:
            "En Estados Unidos el efectivo se usa mucho menos que en Colombia. La gente paga hasta un café acercando la tarjeta o el teléfono (“tap”), y pagar algo pequeño con un billete grande puede incomodar, porque muchos negocios guardan poco efectivo en la caja. No es descortés pagar en efectivo, pero conviene traer billetes pequeños y no esperar que le cambien uno de cincuenta o cien sin algo de cara larga."
        },
        {
          label: "“Cancel” solo significa anular",
          body:
            "Aquí aparece el falso amigo al revés. En Colombia “cancelar” es una forma cortés de decir pagar, pero en inglés “cancel” únicamente significa anular. Si en la caja dice “I want to cancel”, entienden que quiere echar para atrás la compra, no pagarla. Para pagar se dice “pay”, “settle up” o “check out”, y al terminar el cajero suele decir “you're all set”, que es “ya quedó”. Confundirlos puede deshacer su compra sin querer."
        },
        {
          label: "La propina infla el total",
          body:
            "En Norteamérica la propina (“tip”) se espera en muchos servicios, y a veces la propia máquina la sugiere con botones de 15, 18 o 20 por ciento. Eso cambia cómo se usa “keep the change”: la propina suele ir aparte, sobre el total. Sumada al impuesto, hace que lo que paga sea bastante más que el precio de la etiqueta, así que no se asuste si el número final sube más de lo que esperaba."
        },
        {
          label: "El precio no incluye impuesto",
          body:
            "A diferencia de Colombia, el precio en la etiqueta casi nunca incluye el impuesto sobre las ventas. Se suma en la caja, al final, así que lo que termina pagando siempre es un poco más que el número exhibido en el estante. Por eso “twenty-three fifty” puede sorprender cuando el precio marcado decía menos. Vale la pena contar con ese recargo al calcular si le alcanza el efectivo que trae encima."
        }
      ],
      pitfalls: [
        {
          mistake: "“Do you accept effective?”",
          whyItFails:
            "“Effective” significa “eficaz”, no efectivo. El dinero en billetes y monedas es “cash”. Preguntar “do you accept effective?” deja al cajero sin entender qué medio de pago propone.",
          sayInstead: "Do you take cash?"
        },
        {
          mistake: "“I want to pay the account.”",
          whyItFails:
            "“Account” es una cuenta bancaria; la cuenta que se paga en un restaurante o tienda es “the bill” (o “the check” en Estados Unidos). “Pay the account” suena a trámite de banco, no a pagar lo consumido.",
          sayInstead: "Could I get the bill, please?"
        },
        {
          mistake: "“Can I pay in quotas?”",
          whyItFails:
            "“Quota” es un cupo o un límite, no una cuota de pago. Pagar por partes es “in installments” o “in monthly payments”, así que “pay in quotas” no se entiende como usted quiere.",
          sayInstead: "Can I pay in installments?"
        },
        {
          mistake: "“I pay with card.”",
          whyItFails:
            "En inglés la decisión del momento va con “I'll”: “I'll pay by card” o “I'll use my card”. El presente “I pay” suena a costumbre, no a lo que va a hacer ahora, y desconcierta un poco al cajero.",
          sayInstead: "I'll pay by card."
        }
      ],
      variations: [
        {
          form: "Will you be paying cash or card?",
          register: "neutro de servicio",
          region: "Norteamérica",
          whenToUse: "La pregunta típica de la caja; puede contestar con una sola palabra, “cash” o “card”."
        },
        {
          form: "Do you have anything smaller?",
          register: "cortés neutro",
          region: "Universal en inglés",
          whenToUse: "Cuando le piden billetes más pequeños, o cuando usted mismo necesita monedas o sencillo."
        },
        {
          form: "I'll just tap.",
          register: "amistoso informal",
          region: "Estados Unidos / pago sin contacto",
          whenToUse: "Para pagar acercando la tarjeta o el teléfono, sin insertar ni firmar nada."
        },
        {
          form: "You're all set.",
          register: "amistoso informal",
          region: "Norteamérica",
          whenToUse: "Lo dice el cajero al terminar; significa que ya quedó todo, no que falte algo."
        },
        {
          form: "Have a good one!",
          register: "casual",
          region: "Norteamérica",
          whenToUse: "Despedida informal al pagar, como “que le vaya bien”. Basta con responder “you too”."
        }
      ],
      prompt: "La cajera dice “Do you have anything smaller?”. ¿Qué le está pidiendo?",
      choices: [
        "Que le pague con billetes más pequeños o con monedas.",
        "Que elija un producto de menor tamaño en el estante.",
        "Que vuelva más tarde, cuando ella tenga más vuelto."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Quiere pagar acercando la tarjeta, sin contacto. ¿Qué dice?",
          choices: [
            "I want to cancel the payment.",
            "I'll take the money back in cash.",
            "I'll just tap my card."
          ],
          answer: 2,
          tests: "pagar sin contacto: “tap”"
        },
        {
          prompt: "El cajero dice “You're all set.” ¿Qué significa?",
          choices: [
            "Que todavía necesita algo más para completar el pago.",
            "Que ya quedó todo pagado y puede irse tranquila.",
            "Que debe firmar un recibo en papel antes de salir."
          ],
          answer: 1,
          tests: "“you're all set” = ya quedó"
        },
        {
          prompt: "¿Cómo se pregunta en inglés si aceptan efectivo?",
          choices: [
            "Do you take cash?",
            "Do you accept effective?",
            "Do you receive effective?"
          ],
          answer: 0,
          tests: "cash, nunca “effective”"
        },
        {
          prompt: "Quiere pedir la cuenta en un restaurante. ¿Qué dice?",
          choices: [
            "Could I get the bill, please?",
            "Can I pay the account, please?",
            "I would like to cancel the table now."
          ],
          answer: 0,
          tests: "“the bill”, no “account”"
        }
      ]
    }
  },
  {
    id: "haggling-for-mangoes-at-the-coast-market",
    level: "Starter · Food and drink",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "familiar",
    pathways: ["foundation"],
    verb: "comprar",
    review: "pending",
    es: {
      title: "Haggling for mangoes at the coastal market",
      situation:
        "You are at a fruit stall in Cartagena and want some mangoes, but the first price is never the last. You learn to ask “¿a cómo?”, to ask for a lower price and to close the deal with “de una”, all with Caribbean tú and without offending anyone.",
      setting: {
        who: "Alex is browsing a fruit stall; the vendor is Yeison, a coast seller in his thirties who banters with every customer and expects a bit of back-and-forth over the price.",
        what: "A friendly haggle over a couple of pounds of mango that turns into a small lesson in how buying really works at a plaza.",
        when: "Mid-morning, when the market is busiest, the fruit is at its freshest and the vendors are in a dealing mood.",
        where: "Cartagena, on the Caribbean coast, at an open-air stall where prices are spoken rather than labeled and tú is the default even with strangers.",
        why: "Because the marked-up first price is really an invitation to bargain, and knowing how to nudge it down — warmly, not rudely — is the difference between the tourist price and the local one."
      },
      address: {
        form: "tú",
        who: "Alex and Yeison use tú with each other from the first word — on the coast, tuteo is the warm default even between a vendor and someone they've never met.",
        why: "Caribbean Colombia leans heavily on tú where Bogotá would reach for usted. It is friendly and immediate, and at a market it sets the bantering, dealing tone that actually helps the haggling along.",
        ifYouSwitch:
          "Using usted here isn't wrong, but it can feel stiff and distant, cooling the friendly haggle before it starts. Vos would sound plain out of place — that's a paisa and Valle form, not a Caribbean one."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "¡Ey, buenas! ¿A cómo tienes los mangos?",
          translation: "Hey, hello! How much are the mangoes?",
          pronunciation: "ey, BWEH-nas! a KO-mo TYEH-nes los MAN-gos",
          literal: "Hey, good! At how you-have the mangoes?",
          why: "“¿A cómo?” is the market way to ask a price by unit or weight — “what are they going at?”. It is warmer and far more local than a textbook “¿cuánto cuesta?”, and it signals right away that you know how a stall works."
        },
        {
          speaker: "Yeison",
          target: "A dos mil la libra, fresquecitos, mi rey. Llévate los que quieras.",
          translation: "Two thousand a pound, nice and fresh, my friend. Take as many as you like.",
          pronunciation: "a dos meel la LEE-bra, fres-ke-SEE-tos, mee REY. YE-va-te los ke KYE-ras",
          literal: "At two thousand the pound, fresh-little, my king. Take-yourself the-ones that you-want.",
          why: "“Mi rey” (my king) is coast affection, not real deference — vendors sprinkle it on everyone. “Fresquecitos” piles on the diminutive to sell freshness. This opening price is set a touch high on purpose, so there's room for you to bargain."
        },
        {
          speaker: "Alex",
          target: "Uy, ¿no me los dejas más baratos si te compro dos libras?",
          translation: "Oof, won't you let me have them cheaper if I buy two pounds from you?",
          pronunciation: "OO-ee, no me los DEH-has mas ba-RA-tos see te KOM-pro dos LEE-bras",
          literal: "Oof, not to-me them you-leave more cheap if to-you I-buy two pounds?",
          why: "“¿Me lo dejas en…?” — literally “will you leave it to me at…?” — is THE haggling verb, gentler than demanding a discount. And here is the lesson's verb: “si te compro” (if I buy from you). Buying more is your lever to move the price down."
        },
        {
          speaker: "Yeison",
          target: "Bueno, por ser tú: tres mil las dos libras. ¿Cómo te va pareciendo?",
          translation: "Alright, since it's you: three thousand for the two pounds. How's that sounding to you?",
          pronunciation: "BWEH-no, por ser too: tres meel las dos LEE-bras. KO-mo te va pa-re-SYEN-do",
          literal: "Good, for being you: three thousand the two pounds. How to-you it-goes seeming?",
          why: "“Por ser tú” (since it's you) is the vendor's classic flattery for justifying a drop in price. He has met you halfway — from an implied 4,000 down to 3,000 for two pounds — which is the expected result of a friendly haggle, not a defeat."
        },
        {
          speaker: "Alex",
          target: "De una. Te los compro. ¿Me regalas también un par de limones?",
          translation: "Done. I'll buy them. Could you throw in a couple of limes too?",
          pronunciation: "de OO-na. te los KOM-pro. me re-GA-las tam-BYEN oon par de lee-MO-nes",
          literal: "Of one. To-you them I-buy. To-me you-gift also a pair of limes?",
          why: "“De una” (done / right away) is how you close a deal fast on the coast. “Te los compro” seals it with the verb itself. “¿Me regalas…?” is not really asking for a free gift — it's the soft Colombian way of asking for something, here angling for a small extra."
        },
        {
          speaker: "Yeison",
          target: "Claro, los limones van de ñapa. Gracias por la compra, que estés bien.",
          translation: "Of course, the limes are on the house. Thanks for your purchase, take care.",
          pronunciation: "KLA-ro, los lee-MO-nes van de NYA-pa. GRA-syas por la KOM-pra, ke es-TES byen",
          literal: "Clear, the limes go of extra. Thanks for the purchase, that you-be well.",
          why: "“De ñapa” is the little something extra thrown in — a beloved coast and Andean custom that rewards a good exchange. “La compra” is the noun built from “comprar”; closing on it wraps the whole transaction up warmly."
        }
      ],
      vocabulary: [
        {
          term: "comprar",
          explanation:
            "The core verb for buying. The person you buy from is an indirect object — “te compro”, “le compro al señor” — never introduced with “de” the way English “buy from” might tempt you.",
          literal: "to buy",
          useWhen:
            "Any purchase: “voy a comprar pan”, “¿dónde lo compraste?”, “te compro dos”. It's the everyday workhorse for acquiring things.",
          avoidWhen:
            "Don't say “comprar de alguien” for buying from a person — that sounds like buying a portion of them. Use the indirect object: “te compro”, “le compro”.",
          register: "neutral",
          region: "Universal Spanish; “mercar” is a common colloquial synonym in Colombia.",
          related: ["comprarse", "mercar", "adquirir", "hacer mercado"],
          example: {
            target: "Te compro dos libras.",
            translation: "I'll buy two pounds from you."
          }
        },
        {
          term: "¿a cómo?",
          explanation:
            "The market question for price by unit or weight — “what are these going at?”. It's the stall equivalent of “¿cuánto vale?”, but warmer and more local.",
          literal: "at how?",
          useWhen:
            "Asking prices where goods are sold loose: “¿a cómo la libra?”, “¿a cómo los tienes?”, “¿a cómo el aguacate?”.",
          avoidWhen:
            "It's for markets and stalls, not a supermarket with printed prices — there you'd just read the label or ask “¿cuánto cuesta?”.",
          register: "market informal",
          region: "Heard nationwide at markets; especially natural on the coast.",
          related: ["¿cuánto vale?", "¿a cómo la libra?", "¿qué precio?", "¿cuánto cuesta?"],
          example: {
            target: "¿A cómo el aguacate?",
            translation: "How much is the avocado?"
          }
        },
        {
          term: "dejar (en)",
          explanation:
            "To let something go at a price. “¿Me lo dejas en…?” is the soft way to propose a lower figure without bluntly demanding a discount.",
          literal: "to leave (at)",
          useWhen:
            "Proposing a counter-price: “¿me lo dejas en cinco mil?”, “déjamelo en diez”, “¿en cuánto me lo dejas?”.",
          avoidWhen:
            "Don't pair it with “para” for the price — it's “dejar en” a figure. “Dejar para” sounds like leaving it for a purpose or a person.",
          register: "friendly haggle",
          region: "Universal at Colombian markets; core bargaining vocabulary.",
          related: ["rebajar", "hacer precio", "bajar", "dejar más barato"],
          example: {
            target: "¿Me lo dejas en cinco mil?",
            translation: "Will you let me have it for five thousand?"
          }
        },
        {
          term: "de una",
          explanation:
            "“Right away / done / for sure” — an instant yes. At a stall it closes the deal the moment the price feels right.",
          literal: "of one",
          useWhen:
            "Agreeing fast, or accepting a plan: “de una, me lo llevo”, “¿vamos? — de una”.",
          avoidWhen:
            "It's informal enthusiasm; in a stiff, formal exchange it can sound too casual. Around a market it's perfect.",
          register: "casual",
          region: "Nationwide; extremely common with younger speakers everywhere.",
          related: ["listo", "hecho", "dale", "hágale"],
          example: {
            target: "De una, me lo llevo.",
            translation: "Done, I'll take it."
          }
        },
        {
          term: "la ñapa",
          explanation:
            "The little extra a seller throws in for free — an extra lime, a couple more grapes — to reward a good sale and keep you coming back.",
          literal: "the extra (freebie)",
          useWhen:
            "Playfully asking for or acknowledging a freebie: “¿y la ñapa?”, “eso va de ñapa”.",
          avoidWhen:
            "It's a market and corner-shop custom, not something you'd expect in a formal shop or a chain supermarket.",
          register: "informal",
          region: "Coast and Andes alike; the word comes from Quechua “yapa”.",
          related: ["el encime", "de ñapa", "un extra", "de regalo"],
          example: {
            target: "¿Y la ñapa?",
            translation: "And a little extra?"
          }
        },
        {
          term: "comprarse",
          explanation:
            "The reflexive of comprar, stressing that you bought something for yourself — often a treat or an indulgence. The “se” adds a flavor of self-reward.",
          literal: "to buy oneself",
          useWhen:
            "Highlighting a purchase for you: “me compré unos zapatos”, “cómprate algo rico”.",
          avoidWhen:
            "Don't use it when the buyer and beneficiary differ — buying a gift for someone else is plain “comprar”, not “comprarse”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["darse un gusto", "comprar para uno", "mercar", "antojarse"],
          example: {
            target: "Me compré unas gafas.",
            translation: "I bought myself some sunglasses."
          }
        },
        {
          term: "hacer mercado",
          explanation:
            "To do the big grocery shop — stock the house with food for the week. In Colombia you “hace mercado” rather than simply “compra comida”.",
          literal: "to do market",
          useWhen:
            "Talking about the weekly food shop: “los sábados hago mercado”, “ya toca hacer mercado”.",
          avoidWhen:
            "It's the whole shopping trip, not one item — grabbing a single thing is just “comprar”, not “hacer mercado”.",
          register: "neutral",
          region: "Very Colombian; “mercar” works the same way as a verb.",
          related: ["mercar", "la plaza", "surtir la casa", "ir de compras"],
          example: {
            target: "Los sábados hago mercado.",
            translation: "On Saturdays I do the big grocery shop."
          }
        }
      ],
      note:
        "The one habit to build here is to treat the first price as an opening bid, not a fact: ask “¿a cómo?”, counter with “¿me lo dejas en…?”, and close with “de una”. Keep it warm — on the coast it's all tú and banter — and remember comprar takes the seller as an indirect object (“te compro”), never “comprar de ti”.",
      culture: [
        {
          label: "The first price is an opening bid",
          body:
            "At markets, street stalls and with informal vendors, the first number is rarely the real one — it's marked up to leave room for the dance. Countering isn't rude; it's expected, and vendors enjoy it. The trick is to stay warm: a smile, a “¿no me lo dejas más baratico?”, maybe a half-step toward walking away. Accept the opening price in silence and you've quietly volunteered to pay the tourist rate."
        },
        {
          label: "Plaza versus supermercado",
          body:
            "Where you are decides whether you haggle at all. In a plaza de mercado or with a street vendor, prices are spoken, tú flows freely and bargaining is part of the fun. In a supermercado or a chain store, prices are printed and final, the register is more neutral, and trying to haggle just puzzles the cashier. Reading which world you're standing in — spoken price or printed one — tells you instantly how to behave."
        },
        {
          label: "La ñapa",
          body:
            "The ñapa is the small freebie a seller adds once a deal is done — an extra lime, a couple more mandarins, a splash more juice. The word comes from Quechua “yapa”, and the custom runs from the Caribbean coast to the Andes. It rewards a friendly exchange and quietly buys loyalty. Asking “¿y la ñapa?” with a grin is part of the ritual, and a good vendor will almost always find you a little something."
        },
        {
          label: "Coast tuteo and “mi rey”",
          body:
            "The Caribbean coast runs on warmth. Vendors call you “mi rey”, “mi amor”, “mi vida” and “mi niña” without a second thought, and none of it is flirtation — it's just the texture of coast talk. Tú is the default even with strangers, where an interior city might use usted. Leaning into that warmth, rather than stiffening, makes the whole exchange easier and marks you as someone comfortable on the costa."
        }
      ],
      pitfalls: [
        {
          mistake: "“Compro de ti dos libras.”",
          whyItFails:
            "English “buy from you” tempts a “de”, but Spanish makes the seller an indirect object. “Comprar de” sounds like buying a portion of something, and the natural phrasing is “te compro” or “le compro”.",
          sayInstead: "Te compro dos libras."
        },
        {
          mistake: "“¿Cómo mucho cuesta?”",
          whyItFails:
            "It's a word-for-word tracing of “how much”, and it isn't Spanish. The standard question is “¿cuánto cuesta?”, and at a stall the local move is simply “¿a cómo?”.",
          sayInstead: "¿A cómo lo tienes?"
        },
        {
          mistake: "Paying the first price without countering.",
          whyItFails:
            "At a market the opening figure expects a reply. Handing it over in silence isn't polite restraint — it just marks you as a tourist and quietly overpays, when a warm counter would have worked.",
          sayInstead: "¿No me lo dejas más barato?"
        },
        {
          mistake: "“¿Me lo dejas para cinco mil?”",
          whyItFails:
            "The haggling frame is “dejar EN a price”, not “para”. With “para” it sounds like you're leaving the item for some purpose or person, not proposing what you'll pay for it.",
          sayInstead: "¿Me lo dejas en cinco mil?"
        }
      ],
      variations: [
        {
          form: "¿A cómo la libra?",
          register: "market informal",
          region: "Coast / nationwide markets",
          whenToUse: "Opening a price question at any stall where goods are sold loose by weight."
        },
        {
          form: "¿Me lo dejas en cinco mil?",
          register: "friendly haggle",
          region: "Coast tuteo",
          whenToUse: "Proposing a counter-price without demanding it — the core, polite haggling move."
        },
        {
          form: "¿Cuál es tu último precio?",
          register: "friendly informal",
          region: "Nationwide markets",
          whenToUse: "Asking for the vendor's rock-bottom figure before you decide whether to buy."
        },
        {
          form: "De una, me lo llevo.",
          register: "casual",
          region: "Nationwide",
          whenToUse: "Closing the deal fast once the price feels right and you're ready to buy."
        },
        {
          form: "Me compré unas gafas.",
          register: "neutral",
          region: "Universal",
          whenToUse: "Using comprarse to stress you bought something for yourself, often as a small treat."
        }
      ],
      prompt: "At a coast stall the vendor says “Por ser tú, tres mil las dos libras.” What's happening?",
      choices: [
        "He's charging you extra precisely because you asked for two full pounds.",
        "He's telling you the mangoes are already being kept for another buyer.",
        "He's dropping the price a little as a friendly favor to you."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "You want to ask the price of the avocados at a stall. What do you say?",
          choices: [
            "¿A cómo tienes los aguacates?",
            "¿Cómo mucho son los aguacates hoy?",
            "¿Por cuánto compras tú los aguacates?"
          ],
          answer: 0,
          tests: "market price question with ¿a cómo?"
        },
        {
          prompt: "What does the vendor mean by “los limones van de ñapa”?",
          choices: [
            "The limes are the freshest thing on the whole stall today.",
            "The limes are thrown in for free as a little extra.",
            "The limes must be paid for separately right at the very end."
          ],
          answer: 1,
          tests: "la ñapa = a free extra"
        },
        {
          prompt: "You're happy with the price and want to close the deal. What do you say?",
          choices: [
            "De pronto luego te los compro.",
            "De malas, no te los compro.",
            "De una, te los compro."
          ],
          answer: 2,
          tests: "de una closes the deal + comprar"
        },
        {
          prompt: "You want to say “I'll buy two pounds from you.” Which is correct?",
          choices: [
            "Te compro dos libras.",
            "Compro de ti dos libras.",
            "Compro dos libras de ti."
          ],
          answer: 0,
          tests: "buy from you = te compro, not comprar de"
        }
      ]
    },
    en: {
      title: "Regatear en una venta de garaje",
      situation:
        "Usted está en una venta de garaje en Estados Unidos y quiere una lámpara, pero no sabe si allá se puede regatear. Aprende que en un “yard sale” sí se negocia un poco — con más rodeos que en Colombia — y a decir “would you take…?”, “I'll take it” y a cerrar con un “deal”.",
      setting: {
        who: "Alejandra mira los objetos de una venta de garaje; el vendedor es el dueño de casa, un señor tranquilo que sacó a la entrada lo que ya no usa.",
        what: "Un regateo suave por una lámpara que se convierte en una pequeña lección de cómo se negocia allá, con más rodeos que en una plaza colombiana.",
        when: "Un sábado por la mañana, cuando las ventas de garaje llenan los antejardines de los barrios.",
        where: "Un barrio residencial en Estados Unidos, en una “yard sale” donde sí se puede regatear, a diferencia de las tiendas de precio fijo.",
        why: "Porque en Norteamérica el regateo casi no existe en el comercio normal, pero en ventas de garaje, mercados de pulgas y Marketplace sí — y hay que hacerlo con más suavidad que en la costa."
      },
      address: {
        form: "mixed",
        who: "En inglés Alejandra y el vendedor se tratan con el mismo “you”; no hay un pronombre aparte para marcar respeto o cercanía.",
        why: "La cortesía en inglés va en el verbo y en los rodeos — “would you take…?”, “is there any wiggle room?” — no en el pronombre. Se regatea con esas fórmulas indirectas, no subiendo el tono.",
        ifYouSwitch:
          "No hay pronombre que cambiar; lo que cambia el tono es pasar de un “would you take fifteen?” cortés a un “give me a discount” brusco, que allá cae muy mal."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Hi! How much are you asking for the lamp?",
          translation: "¡Hola! ¿Cuánto pides por la lámpara?",
          pronunciation: "jái! jáo moch ar iú ÁS-kin for de lamp",
          literal: "¡Hola! ¿Cuánto estás tú pidiendo por la lámpara?",
          why: "“How much are you asking?” es la forma normal de preguntar el precio en una venta de segunda; el verbo “asking” (pedir) da a entender que el precio se puede negociar, a diferencia de un precio fijo de tienda."
        },
        {
          speaker: "Seller",
          target: "I've got it at twenty. It works great, barely used.",
          translation: "La tengo en veinte. Funciona muy bien, casi no se ha usado.",
          pronunciation: "áiv got it at TUEN-ti. it uorks gréit, BÉR-li iúsd",
          literal: "Yo-la-tengo en veinte. Ello funciona genial, apenas usada.",
          why: "“I've got it at twenty” es “la tengo en veinte”, con “got” otra vez haciendo de “have”. En una venta de garaje el primer precio suele tener algo de margen, aunque menos que en una plaza colombiana."
        },
        {
          speaker: "Alejandra",
          target: "Would you take fifteen for it?",
          translation: "¿Me la dejarías en quince?",
          pronunciation: "úud iú téik FIF-tin for it",
          literal: "¿Aceptarías tú quince por ella?",
          why: "“Would you take…?” es la fórmula suave y clave para regatear en inglés — literalmente “¿aceptarías…?”. Es mucho más indirecta que un “¿me lo dejas en…?” dicho de frente, y es la manera educada de proponer un precio más bajo."
        },
        {
          speaker: "Seller",
          target: "Tell you what — fifteen if you take the shade too.",
          translation: "Te propongo algo: quince si también te llevas la pantalla.",
          pronunciation: "tel iú uát — FIF-tin if iú téik de shéid tu",
          literal: "Decir-te qué: quince si tú tomas la pantalla también.",
          why: "“Tell you what” anuncia una contraoferta, como “te propongo algo”. En vez de bajar y ya, el vendedor ata el descuento a que usted lleve algo más — el mismo juego del “por ser tú” costeño, pero con otras palabras."
        },
        {
          speaker: "Alejandra",
          target: "Deal. I'll take it.",
          translation: "Trato hecho. Me la llevo.",
          pronunciation: "díil. áil téik it",
          literal: "Trato. Yo-la tomaré.",
          why: "“Deal” cierra el trato, como nuestro “de una”. “I'll take it” — “me la llevo” — es la frase fija para decidirse a comprar algo en una tienda o venta; el “I'll” marca la decisión del momento."
        },
        {
          speaker: "Seller",
          target: "Great, thanks. Cash is perfect.",
          translation: "Perfecto, gracias. En efectivo está muy bien.",
          pronunciation: "gréit, zenks. kash is PÉR-fekt",
          literal: "Genial, gracias. Efectivo es perfecto.",
          why: "En las ventas de garaje se prefiere el efectivo, así que “cash is perfect” es lo esperable. Note que no hay “ñapa” ni regalo de cierre como en la costa: el trato se cierra más seco, con un simple agradecimiento."
        }
      ],
      vocabulary: [
        {
          term: "to buy",
          explanation:
            "El verbo para comprar. En las tiendas de precio fijo no se negocia, pero con cosas usadas o entre particulares sí. La persona a quien le compra va con “from”: “buy from someone”.",
          literal: "comprar",
          useWhen:
            "En cualquier compra: “I'd like to buy the lamp”, “where did you buy it?”, “I'll buy it from her”.",
          avoidWhen:
            "No lo confunda con “pay for”: uno compra la cosa (“buy the lamp”) y paga por ella (“pay for the lamp”). No son intercambiables.",
          register: "neutro",
          region: "Inglés universal; “buy from” marca al vendedor, como el “te compro” del español.",
          related: ["buy from", "pick up", "get", "purchase"],
          example: {
            target: "I'd like to buy the lamp.",
            translation: "Quiero comprar la lámpara."
          }
        },
        {
          term: "how much are you asking?",
          explanation:
            "La pregunta de precio cuando se puede negociar. “Asking price” es el precio pedido, y usar “asking” insinúa que hay margen, distinto de un precio de tienda.",
          literal: "¿cuánto estás pidiendo?",
          useWhen:
            "En ventas de segunda o Marketplace: “how much are you asking?”, “what's your asking price?”.",
          avoidWhen:
            "En una tienda de precio fijo no aplica; ahí se dice “how much is it?” y punto, porque no hay nada que negociar.",
          register: "neutro",
          region: "Universal en inglés; muy usada en ventas particulares.",
          related: ["asking price", "how much is it?", "what's the price?", "how much do you want?"],
          example: {
            target: "How much are you asking?",
            translation: "¿Cuánto pides?"
          }
        },
        {
          term: "would you take…?",
          explanation:
            "La fórmula suave para proponer un precio más bajo, literalmente “¿aceptarías…?”. Mucho más indirecta que exigir un descuento, y la manera educada de regatear allá.",
          literal: "¿aceptarías…?",
          useWhen:
            "Al ofrecer menos: “would you take ten?”, “would you do fifteen?”.",
          avoidWhen:
            "No la reemplace por un “give me a discount”: suena brusco y allá enfría el trato de inmediato.",
          register: "cortés de regateo",
          region: "Norteamérica; el regateo se hace con rodeos como este.",
          related: ["would you take", "could you do", "is there wiggle room?", "any lower?"],
          example: {
            target: "Would you take ten?",
            translation: "¿Me lo dejas en diez?"
          }
        },
        {
          term: "I'll take it",
          explanation:
            "La frase fija para decidirse a comprar algo en el momento. Cierra la compra sin más trámite; el “I'll” marca la decisión que se toma ahí mismo.",
          literal: "me lo llevo",
          useWhen:
            "Al decidirse en una tienda o venta: “I'll take it”, “I'll take two”, “I'll go for it”.",
          avoidWhen:
            "Evite el presente “I take it” para la compra del momento: suena a costumbre, no a la decisión que acaba de tomar.",
          register: "neutro",
          region: "Universal en inglés.",
          related: ["I'll take it", "I'll go for it", "it's a deal", "sold"],
          example: {
            target: "I'll take it.",
            translation: "Me lo llevo."
          }
        },
        {
          term: "deal",
          explanation:
            "“Trato hecho”. Cierra la negociación en una palabra, como nuestro “de una”, y sirve tanto para aceptar un precio como para sellar un acuerdo.",
          literal: "trato",
          useWhen:
            "Al cerrar: “deal”, “it's a deal”, “you've got a deal”.",
          avoidWhen:
            "Ojo: “deal” también significa oferta o ganga (“a great deal”). En el cierre es “trato hecho”; en un anuncio es “oferta”.",
          register: "casual",
          region: "Universal en inglés.",
          related: ["it's a deal", "sounds good", "done", "you got it"],
          example: {
            target: "Deal.",
            translation: "Trato hecho."
          }
        },
        {
          term: "to treat yourself",
          explanation:
            "Darse un gusto comprándose algo, el equivalente afectivo de “comprarse”. El inglés usa “treat yourself” o “buy yourself” para ese sentido de recompensa.",
          literal: "darse un gusto",
          useWhen:
            "Al resaltar un capricho: “I treated myself to new shoes”, “treat yourself, you earned it”.",
          avoidWhen:
            "No lo use si el regalo es para otra persona: eso es “buy someone something”, no “treat yourself”.",
          register: "informal",
          region: "Universal en inglés.",
          related: ["treat yourself", "buy yourself", "splurge", "pick up"],
          example: {
            target: "I treated myself to new shoes.",
            translation: "Me compré unos zapatos nuevos, por darme un gusto."
          }
        },
        {
          term: "to do the grocery shopping",
          explanation:
            "Hacer mercado, surtir la casa de comida para la semana. El inglés no dice “do market”; dice “do the grocery shopping” o “get groceries”.",
          literal: "hacer el mercado",
          useWhen:
            "Al hablar del mercado semanal: “I do the grocery shopping on Saturdays”, “I need to get groceries”.",
          avoidWhen:
            "No es comprar una sola cosa: para un artículo suelto se dice “pick something up”, no “do the grocery shopping”.",
          register: "neutro",
          region: "Universal; “run errands” cubre las diligencias en general.",
          related: ["grocery shopping", "run errands", "pick up groceries", "go shopping"],
          example: {
            target: "I do the grocery shopping on Saturdays.",
            translation: "Hago mercado los sábados."
          }
        }
      ],
      note:
        "Lo más útil es entender que allá el regateo solo cabe en ventas de segunda, y siempre con rodeos: “would you take…?”, “is there any wiggle room?”, nunca un “give me a discount”. Para cerrar, “deal” e “I'll take it”. Y separe “buy” (comprar la cosa) de “pay for” (pagar por ella); no son lo mismo.",
      culture: [
        {
          label: "El primer precio a veces se negocia",
          body:
            "En Norteamérica el regateo casi no existe en el comercio normal, pero sí aparece en ciertos lugares: ventas de garaje, mercados de pulgas, Facebook Marketplace y los concesionarios de carros. Saber dónde se puede negociar es la mitad del juego. En una tienda de ropa o un supermercado no se intenta; en una “yard sale” sí, y el vendedor casi lo espera. Confundir los dos mundos lleva a incomodar a alguien o a pagar de más sin necesidad."
        },
        {
          label: "En la tienda el precio es el precio",
          body:
            "Intentar regatear en un supermercado o una tienda de cadena incomoda y no funciona: el precio marcado es final, y encima se le suma el impuesto en la caja. El regateo se reserva para lo usado y para los tratos entre particulares. Por eso a muchos recién llegados de países donde se negocia todo les cuesta al principio: aquí, en el comercio formal, pedir rebaja se ve fuera de lugar, casi como discutir la carta de un restaurante."
        },
        {
          label: "Regatear con rodeos",
          body:
            "Cuando sí se puede negociar, se hace con suavidad. Las fórmulas son indirectas: “would you take…?”, “is there any wiggle room?”, “what's your best price?”. Un “give me a discount” o exigir de frente suena grosero y enfría el trato. La cortesía inglesa vive en esos rodeos y en el condicional “would”, no en el volumen ni en la insistencia. Bajar la voz y preguntar con un “would you” consigue mucho más que presionar al vendedor."
        },
        {
          label: "Sin ñapa, pero con “as-is”",
          body:
            "No existe la costumbre de la ñapa: nadie le añade un regalito al cerrar. En cambio abundan otras convenciones propias — letreros de “for sale”, la sigla “OBO” (or best offer, “o mejor oferta”) y “as-is”, que significa “tal como está”, sin garantía ni devoluciones. El trato se cierra más seco que en la costa, con un “thanks” y poco más. Conviene preguntar si algo se vende “as-is” antes de pagar, porque después no hay reclamo."
        }
      ],
      pitfalls: [
        {
          mistake: "“How much it costs?”",
          whyItFails:
            "Falta el auxiliar y la inversión propios del inglés. Es un calco directo del español que suena incompleto; la pregunta correcta lleva “does” o el verbo “to be”.",
          sayInstead: "How much is it?"
        },
        {
          mistake: "“I buy it in fifteen.”",
          whyItFails:
            "El precio va con “for”, no con “in”: “I'll buy it for fifteen”. Y el presente “I buy” suena a costumbre; para la oferta del momento se usa “I'll”.",
          sayInstead: "I'll take it for fifteen."
        },
        {
          mistake: "“Can you make me a price?”",
          whyItFails:
            "“Make a price” no se dice en inglés. Para pedir una rebaja se usa “can you do any better on the price?” o “is there any wiggle room?”, que además suenan corteses.",
          sayInstead: "Can you do any better on the price?"
        },
        {
          mistake: "“It's very cheap, I take two.”",
          whyItFails:
            "Para decidirse a comprar en el momento va “I'll take two”. El presente “I take” suena a hábito, no a la compra que usted está haciendo justo ahora.",
          sayInstead: "I'll take two."
        }
      ],
      variations: [
        {
          form: "How much are you asking?",
          register: "neutro",
          region: "Ventas de segunda, Marketplace",
          whenToUse: "Para preguntar el precio cuando se entiende que se puede negociar."
        },
        {
          form: "Would you take fifteen?",
          register: "cortés de regateo",
          region: "Norteamérica, informal",
          whenToUse: "Para proponer un precio más bajo sin sonar exigente ni brusco."
        },
        {
          form: "Is there any wiggle room on the price?",
          register: "cortés",
          region: "Universal en inglés",
          whenToUse: "Para tantear con mucha cortesía si hay algún margen de rebaja."
        },
        {
          form: "What's your best price?",
          register: "neutro",
          region: "Mercados de pulgas",
          whenToUse: "Para pedir el precio más bajo del vendedor antes de decidirse."
        },
        {
          form: "I'll take it.",
          register: "neutro",
          region: "Universal",
          whenToUse: "Para cerrar y decir que se lo lleva, una vez conforme con el precio."
        }
      ],
      prompt: "Usted quiere pagar menos por la lámpara. ¿Cuál es la forma más natural y cortés de proponerlo?",
      choices: [
        "Would you take fifteen for it?",
        "Give me a discount on this lamp.",
        "Why is this lamp so expensive here?"
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "El vendedor dice “Tell you what — fifteen if you take the shade too.” ¿Qué hace?",
          choices: [
            "Le dice que la lámpara ya está vendida a otra persona.",
            "Le pide quince dólares más por la pantalla aparte.",
            "Le propone un trato: quince si también lleva la pantalla."
          ],
          answer: 2,
          tests: "“tell you what” anuncia una contraoferta"
        },
        {
          prompt: "Está conforme con el precio y quiere cerrar la compra. ¿Qué dice?",
          choices: [
            "Deal. I'll take it.",
            "Maybe I'll think about it.",
            "I don't know if I want it."
          ],
          answer: 0,
          tests: "cerrar la compra con “I'll take it”"
        },
        {
          prompt: "Quiere decir “Me lo llevo por quince”. ¿Cuál es correcto?",
          choices: [
            "I buy it in fifteen dollars, please.",
            "I'll take it for fifteen.",
            "I take it in fifteen right now."
          ],
          answer: 1,
          tests: "precio con “for”, no “in”"
        },
        {
          prompt: "Quiere pedir, con cortesía, si hay margen para rebajar. ¿Qué dice?",
          choices: [
            "Can you do any better on the price?",
            "Can you make me a cheaper price now?",
            "You must lower this price for me."
          ],
          answer: 0,
          tests: "pedir rebaja sin “make a price”"
        }
      ]
    }
  },
  {
    id: "selling-a-bike-to-the-paisa-neighbor",
    level: "Starter · Home and neighborhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "familiar",
    pathways: ["foundation"],
    verb: "vender",
    review: "pending",
    es: {
      title: "Selling the bike before moving out",
      situation:
        "You are selling your bike before leaving Medellín. A neighbor sees the “se vende” sign and comes over to ask. With paisa voseo, you learn to set the price, say “le hago precio”, close with “de una” and notice how paisas mix vos and usted without thinking about it.",
      setting: {
        who: "Alex is selling his bike before leaving the country; the buyer is Camilo, a paisa neighbor in his twenties who saw the sign and wandered over.",
        what: "A doorstep sale of a secondhand bike that turns into a quick lesson in the seller's side of a haggle — and in how paisas weave vos and usted together.",
        when: "A Saturday afternoon, moving boxes half-packed, with a handwritten “se vende” sign taped to the bike out front.",
        where: "Medellín, in a paisa neighborhood where vos is the warm everyday form and casual street sales like this are completely routine.",
        why: "Because Alex is the seller this time, and knowing the vendor's moves — naming a price, offering “le hago precio”, closing warmly — is what turns a taped-up sign into an actual sale."
      },
      address: {
        form: "vos",
        who: "Camilo voseas Alex and Alex voseas back — the everyday paisa footing between two youngish men who've just met on a friendly street.",
        why: "In Medellín, vos is the warm default among peers, more familiar than usted without the distance. But listen closely and usted surfaces inside fixed sales phrases like “le hago precio” — paisas switch mid-sentence without noticing.",
        ifYouSwitch:
          "Going all-usted with a peer here can feel a touch formal or cold, though it's never wrong. Tú sounds oddly neutral in Medellín — not offensive, just not quite paisa, and locals will place you as being from elsewhere."
      },
      dialogue: [
        {
          speaker: "Camilo",
          target: "¡Ave María! ¿Vos vendés la bici? ¿En cuánto la tenés?",
          translation: "Wow! Are you selling the bike? How much is it?",
          pronunciation: "a-ve ma-REE-a! vos ven-DES la BEE-see? en KWAN-to la te-NES",
          literal: "Hail Mary! You(vos) sell the bike? In how-much it you-have?",
          why: "“¿Vos vendés?” shows the paisa voseo: vos plus the ending “-és” (vendés, not vendes or vendéis). “¡Ave María!” is a mild paisa exclamation of surprise, nothing religious about how it feels. “¿En cuánto la tenés?” asks the price as “what are you holding it at?”."
        },
        {
          speaker: "Alex",
          target: "Sí, la vendo. Se la dejo en trescientos, está casi nueva.",
          translation: "Yeah, I'm selling it. I'll let you have it for three hundred, it's almost new.",
          pronunciation: "see, la VEN-do. se la DEH-ho en tres-SYEN-tos, es-TA KA-si NWE-va",
          literal: "Yes, it I-sell. To-you it I-leave at three-hundred, it-is almost new.",
          why: "Here's the verb from the seller's side: “la vendo”. Notice Alex holds the vos footing but the sale phrase “se la dejo” slides into usted (“se la”, “le”) — exactly the paisa mixing to listen for. Naming a round price invites the counter-offer."
        },
        {
          speaker: "Camilo",
          target: "Uy, ¿no me hacés precio? ¿En qué me la dejás, pues?",
          translation: "Oof, won't you give me a deal? What'll you let me have it for, then?",
          pronunciation: "OO-ee, no me a-SES PRE-syo? en ke me la de-HAS, pwes",
          literal: "Oof, not to-me you-make price? At what to-me it you-leave, then?",
          why: "“¿Me hacés precio?” — vos again (“hacés”) — is the buyer asking for a discount, literally “will you make me a price?”. “Pues” is the paisa tag par excellence, softening and rounding off almost any sentence. He's opening the haggle from the buyer's chair."
        },
        {
          speaker: "Alex",
          target: "Bueno, por ser vecino le hago precio: se la dejo en doscientos cincuenta. Lleve.",
          translation: "Alright, since you're a neighbor I'll give you a deal: two hundred fifty. Take it.",
          pronunciation: "BWEH-no, por ser ve-SEE-no le A-go PRE-syo: se la DEH-ho en dos-SYEN-tos seen-KWEN-ta. YE-ve",
          literal: "Good, for being neighbor to-you I-make price: to-you it I-leave at two-hundred fifty. Take(usted).",
          why: "“Le hago precio” is the frozen seller's offer — and it's in usted (“le”), even though they've been vosear-ing. “Lleve” is a usted imperative too. This is the lesson's real point: paisa sales talk locks certain phrases into usted while the chat around them stays vos."
        },
        {
          speaker: "Camilo",
          target: "De una, pues. ¿Recibís transferencia o solo efectivo?",
          translation: "Done, then. Do you take a transfer, or only cash?",
          pronunciation: "de OO-na, pwes. re-see-BIS trans-fe-REN-sya o SO-lo e-fek-TEE-vo",
          literal: "Of one, then. You-receive(vos) transfer or only cash?",
          why: "“De una, pues” closes it, stacking the paisa “pues” onto the standard quick yes. “¿Recibís?” is vos once more (the “-ís” ending). Bank transfers are so ordinary in Colombia that a buyer asks about them before even reaching for cash."
        },
        {
          speaker: "Alex",
          target: "Claro, recibo transferencia. ¡Vendida! Gracias, vecino, que le vaya bien.",
          translation: "Sure, I take transfers. Sold! Thanks, neighbor, take care.",
          pronunciation: "KLA-ro, re-SEE-bo trans-fe-REN-sya. ven-DEE-da! GRA-syas, ve-SEE-no, ke le VA-ya byen",
          literal: "Clear, I-receive transfer. Sold! Thanks, neighbor, that to-you it-goes well.",
          why: "“¡Vendida!” — “sold!” — is how you triumphantly close a sale, agreeing with the feminine “bici”. Note Alex drifts back to usted for the warm send-off “que le vaya bien”, the very phrase a shopkeeper uses. Vender bookends the whole exchange."
        }
      ],
      vocabulary: [
        {
          term: "vender",
          explanation:
            "The core verb for selling. The price you sell at usually rides on “en” in Colombia — “se la vendo en doscientos” — where English reaches for “for”.",
          literal: "to sell",
          useWhen:
            "Any sale: “vendo mi bici”, “¿me la vendés?”, “se la vendo en…”. It's the everyday verb for moving something on.",
          avoidWhen:
            "Don't say “vender para” a price — “para” means purpose or recipient. The price takes “en” (or “por”): “se la vendo en doscientos”.",
          register: "neutral",
          region: "Universal Spanish; the paisa form is “vendés” with vos.",
          related: ["venderse", "rematar", "revender", "poner en venta"],
          example: {
            target: "Se la vendo en doscientos.",
            translation: "I'll sell it to you for two hundred."
          }
        },
        {
          term: "venderse",
          explanation:
            "The reflexive says something sells well or sells on its own — “se vende sola”. The “se” carries the sense English packs into “sells itself”.",
          literal: "to sell itself",
          useWhen:
            "Praising how fast something moves: “se vende solo”, “esto se vende sola”, “tiene mucha salida”.",
          avoidWhen:
            "Don't drop the “se” — plain “vende bien” sounds like the item is selling something else. To say it sells well, you need “se vende bien”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["venderse solo", "tener salida", "salir rápido", "ser un éxito"],
          example: {
            target: "Esa bici se vende sola.",
            translation: "That bike sells itself."
          }
        },
        {
          term: "se vende / en venta",
          explanation:
            "The status of being for sale — the handwritten “se vende” sign, or “está en venta”. It's about availability, not a discount.",
          literal: "it sells / for sale",
          useWhen:
            "Marking something as available to buy: “se vende moto”, “la casa está en venta”, “¿está en venta?”.",
          avoidWhen:
            "Don't confuse it with a passive “fue vendida” (it was sold). “Se vende / en venta” means available; “vendida” means gone.",
          register: "neutral",
          region: "Universal; handwritten “se vende” signs are everywhere in Colombia.",
          related: ["en venta", "a la venta", "de segunda", "usado"],
          example: {
            target: "La moto está en venta.",
            translation: "The motorbike is for sale."
          }
        },
        {
          term: "le hago precio",
          explanation:
            "The seller's frozen offer to knock the price down — “I'll give you a deal”. It stays in usted even when the rest of the chat is vos.",
          literal: "I make you a price",
          useWhen:
            "Offering or requesting a discount: “¿me hace precio?”, “le hago precio si lleva dos”.",
          avoidWhen:
            "Don't stretch it to “hacer un precio más bajo para mí” — the idiom is fixed and short: “¿me hace/hacés precio?”.",
          register: "sales idiom",
          region: "Nationwide; especially natural in paisa selling.",
          related: ["hacer precio", "rebajar", "dar más barato", "¿me colabora con el precio?"],
          example: {
            target: "¿Me hacés precio si llevo dos?",
            translation: "Will you give me a deal if I take two?"
          }
        },
        {
          term: "lleve dos y le dejo…",
          explanation:
            "The seller's bulk pitch — take more and I'll drop the total. A classic market move to shift volume, built on the usted imperative “lleve”.",
          literal: "take two and I leave you…",
          useWhen:
            "Pushing a multi-buy: “lleve dos y le dejo las dos en cinco”, “lleve tres por el precio de dos”.",
          avoidWhen:
            "It's a seller's line, not a buyer's. As the buyer you'd instead ask “¿me hace precio si llevo dos?”.",
          register: "market sales",
          region: "Nationwide markets and street stalls.",
          related: ["pague uno lleve dos", "combo", "por mayor", "la promoción"],
          example: {
            target: "Lleve dos y le dejo las dos en cinco.",
            translation: "Take two and I'll do both for five."
          }
        },
        {
          term: "rematar",
          explanation:
            "To sell off cheap to clear things out — what people do when moving or offloading stock fast. It signals a bargain and a hurry.",
          literal: "to finish off / sell off",
          useWhen:
            "Clearing out at low prices: “estoy rematando todo”, “lo remato en…”, “está en remate”.",
          avoidWhen:
            "It implies a knock-down price, so don't use it for an ordinary sale at full value — that's just “vender”.",
          register: "informal",
          region: "Universal; common at moving sales and end-of-run stock.",
          related: ["liquidar", "en oferta", "saldo", "quemar"],
          example: {
            target: "Estoy rematando todo antes de irme.",
            translation: "I'm selling everything off before I leave."
          }
        },
        {
          term: "hacer el negocio",
          explanation:
            "To do the deal — to close the transaction. “El negocio” is the deal itself, and “hacer el negocio” is shaking on it.",
          literal: "to do the business/deal",
          useWhen:
            "Sealing an agreement: “listo, hagamos el negocio”, “cerramos el negocio”, “quedamos en…”.",
          avoidWhen:
            "Here “negocio” is this one deal, not a shop or company — context tells them apart, but don't force the business-premises sense in.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["cerrar el negocio", "el trato", "hacer negocio", "quedar en"],
          example: {
            target: "Listo, hagamos el negocio.",
            translation: "Alright, let's do the deal."
          }
        }
      ],
      note:
        "The takeaway is the seller's kit: name a price with “se la dejo en…”, offer “le hago precio” to close, and note that vender pairs the price with “en” (“se la vendo en doscientos”), not “para”. And keep an ear on the paisa mix — the friendly chat is vos, but the fixed sales lines like “le hago precio” and “lleve” stay in usted.",
      culture: [
        {
          label: "The seller's side of vos",
          body:
            "Paisa Medellín runs on vos among peers — “¿vos vendés?”, “¿me hacés precio?” — warmer and closer than usted. But the fixed lines of a sale don't follow: “le hago precio”, “lleve”, “a la orden” and “que le vaya bien” all stay locked in usted, even mid-conversation. Nobody plans this; it's just how the register works. Learning to hear the switch — vos for the banter, usted for the frozen phrases — is the fastest way to sound like you belong on a paisa street."
        },
        {
          label: "“Se vende” is everywhere",
          body:
            "Colombia sells informally and visibly. Handwritten “se vende” signs hang on car windscreens, house gates and apartment balconies, usually with just a phone number scrawled underneath. Alongside them run Marketplace and OLX, but the taped-up sign is still king for a bike or a fridge. Sales happen on the doorstep, cash or transfer, with a bit of friendly haggling. Putting your own “se vende” out front, price ready, is how most people move a secondhand thing here."
        },
        {
          label: "Transfers beat cash",
          body:
            "Even for a street sale, Colombians increasingly pay by transfer. Nequi and Daviplata move money between phones instantly, and a buyer will often ask “¿recibís transferencia?” before digging for notes. It saves everyone the sencillo problem, avoids carrying cash, and clears in seconds. For a bigger item like a bike, a transfer is normal and expected. Having your Nequi or bank details ready to share makes you an easy person to buy from."
        },
        {
          label: "Rematar: the moving sale",
          body:
            "When people leave — a city, an apartment, the country — they “rematan”: sell everything off cheap and fast. Expats offload furniture this way constantly, posting “remato todo” lists before a flight. The word promises a knock-down price and a seller in a hurry, which buyers love. It overlaps with the “de segunda” (secondhand) world of used goods. If you're the one leaving, framing your sale as a remate draws buyers who know they're getting a deal."
        }
      ],
      pitfalls: [
        {
          mistake: "“Te vendo la bici para trescientos.”",
          whyItFails:
            "“Para” marks a purpose or a recipient, not a price. Selling at a figure takes “en” (or “por”) in Colombia, so “vender para” lands wrong, as if the bike were destined for three hundred somethings.",
          sayInstead: "Te la vendo en trescientos."
        },
        {
          mistake: "“Esta bici vende muy bien.”",
          whyItFails:
            "Without the reflexive it sounds like the bike is out selling other things. To say an item sells well, you need the “se”: “se vende bien”, or “se vende sola” for something that flies out the door.",
          sayInstead: "Esta bici se vende sola."
        },
        {
          mistake: "“¿Puedes hacer un precio más bajo para mí?”",
          whyItFails:
            "It's understandable but long-winded and non-idiomatic. The set phrase is short and fixed: “¿me hace precio?” or, in paisa, “¿me hacés precio?”. That's the line a vendor recognizes instantly.",
          sayInstead: "¿Me hacés precio?"
        },
        {
          mistake: "“La bici es vendida.”",
          whyItFails:
            "That passive reads as “the bike was sold”, the opposite of what you mean. To say it's available, use “está en venta” or “se vende”; “vendida” on its own means it's already gone.",
          sayInstead: "La bici está en venta."
        }
      ],
      variations: [
        {
          form: "¿Vos vendés la bici?",
          register: "paisa informal",
          region: "Medellín / paisa voseo",
          whenToUse: "Asking whether something's for sale, in the paisa vos with its “-és” ending."
        },
        {
          form: "Se la dejo en doscientos cincuenta.",
          register: "friendly sale",
          region: "Nationwide",
          whenToUse: "As the seller, naming your price with the soft “dejar en” instead of a blunt figure."
        },
        {
          form: "Le hago precio.",
          register: "sales idiom (usted-frozen)",
          region: "Nationwide, esp. paisa",
          whenToUse: "Offering a discount to close — note it stays in usted even amid all the vos."
        },
        {
          form: "Lleve dos y le dejo las dos en cinco.",
          register: "market sales",
          region: "Nationwide",
          whenToUse: "Pushing a bulk deal to move more than one thing at once."
        },
        {
          form: "¡Vendida!",
          register: "casual triumphant",
          region: "Universal",
          whenToUse: "Closing a sale with a flourish, agreeing with the item's gender."
        }
      ],
      prompt: "Your paisa neighbor says “¿No me hacés precio?” What is he doing?",
      choices: [
        "He's warning you that the price you set is far too low.",
        "He's asking you to bring the price down a bit for him.",
        "He's offering to pay a little more than you first asked."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "As the seller, you want to name your price softly. What do you say?",
          choices: [
            "Se la dejo en doscientos cincuenta.",
            "Se la vendo para doscientos cincuenta.",
            "Se la hago en doscientos cincuenta pesos."
          ],
          answer: 0,
          tests: "dejar en for naming a price"
        },
        {
          prompt: "What does “Esa bici se vende sola” mean?",
          choices: [
            "That bike is only ever sold on its very own.",
            "That bike was sold off to a single lone buyer.",
            "That bike practically sells itself."
          ],
          answer: 2,
          tests: "venderse = sells well / by itself"
        },
        {
          prompt: "You want to say the motorbike is for sale. Which is right?",
          choices: [
            "La moto está en venta.",
            "La moto es vendida ya.",
            "La moto se vendió sola."
          ],
          answer: 0,
          tests: "for sale = está en venta / se vende, not es vendida"
        },
        {
          prompt: "In Medellín the seller voseas you but says “le hago precio.” Why the switch?",
          choices: [
            "Certain fixed sales phrases stay in usted even amid vos.",
            "He suddenly decided to be much more formal and distant.",
            "He mistook you for an older customer he should respect."
          ],
          answer: 0,
          tests: "paisa freezes sales idioms in usted"
        }
      ]
    },
    en: {
      title: "Vender la bicicleta por Marketplace",
      situation:
        "Usted se va a mudar y está vendiendo su bicicleta en Estados Unidos. Un comprador que vio el anuncio llega a mirarla. Aprende a decir en inglés cuánto pide, a bajar un poco el precio, a cerrar con “sold” y — clave — a no confundir “for sale” (en venta) con “on sale” (en rebaja).",
      setting: {
        who: "Alejandra vende su bicicleta antes de mudarse; el comprador es un vecino que vio el anuncio y se acercó a mirarla.",
        what: "Una venta de segunda de una bicicleta que sirve para aprender el lado del vendedor en inglés y una trampa famosa: “for sale” frente a “on sale”.",
        when: "Un sábado por la tarde, entre cajas a medio empacar, con un letrero de “For Sale” pegado a la bici.",
        where: "Un barrio en Estados Unidos, donde estas ventas se hacen por Facebook Marketplace o con un letrero, y casi siempre se paga con una app como Venmo o Zelle.",
        why: "Porque esta vez Alejandra es la que vende, y saber decir “I'm asking three hundred”, “I can come down” y “sold” es lo que convierte un anuncio en una venta de verdad."
      },
      address: {
        form: "mixed",
        who: "En inglés Alejandra y el comprador se tratan con el mismo “you”; no hay vos ni usted que escoger.",
        why: "Donde el paisa alterna vos y usted, el inglés no cambia el pronombre: el respeto y la cercanía se marcan con el tono y con fórmulas como “would you” o “I can do”, no con la palabra para “tú”.",
        ifYouSwitch:
          "No hay pronombre que alternar; lo que cambia el trato es pasar de un “I can come down a little” amable a un “take it or leave it” seco. El “you” es siempre el mismo."
      },
      dialogue: [
        {
          speaker: "Buyer",
          target: "Hi, are you the one selling the bike? How much are you asking?",
          translation: "Hola, ¿es usted quien vende la bici? ¿Cuánto pide?",
          pronunciation: "jái, ar iú de uán SÉ-lin de báik? jáo moch ar iú ÁS-kin",
          literal: "Hola, ¿eres tú el uno vendiendo la bici? ¿Cuánto estás pidiendo?",
          why: "“The one selling the bike” es “quien vende la bici”; el inglés usa “the one + -ing” donde el español usa “quien”. Y aparece el verbo que aprendemos: “selling”. “How much are you asking?” pregunta el precio pedido."
        },
        {
          speaker: "Alejandra",
          target: "Yes, I'm selling it for three hundred. It's almost new — barely used.",
          translation: "Sí, la vendo en trescientos. Está casi nueva, casi no se ha usado.",
          pronunciation: "iés, áim SÉ-lin it for zri JÁN-dred. its ÓL-most niú — BÉR-li iúsd",
          literal: "Sí, yo-estoy vendiéndola por trescientos. Está casi nueva — apenas usada.",
          why: "“Selling it for three hundred” — ojo con “for”: el precio va con “for”, nunca con “in” (nada de “sell it in three hundred”). El presente continuo “I'm selling” describe la venta en curso, como “la estoy vendiendo / la vendo”."
        },
        {
          speaker: "Buyer",
          target: "Would you take a bit less? Or is the price firm?",
          translation: "¿Me la deja un poco más barata? ¿O el precio es fijo?",
          pronunciation: "úud iú téik a bit les? or is de práis ferm",
          literal: "¿Aceptarías tú un poco menos? ¿O es el precio firme?",
          why: "El comprador regatea con “would you take…?”, la misma fórmula suave de siempre. “Is the price firm?” pregunta si el precio es inamovible — “firm” es fijo, sin rebaja. Es el lado del comprador pidiendo que baje."
        },
        {
          speaker: "Alejandra",
          target: "For a neighbor, I can come down to two-fifty. It practically sells itself.",
          translation: "Por ser vecino, puedo bajar a doscientos cincuenta. Casi se vende sola.",
          pronunciation: "for a NÉI-bor, ai kan kom dáun tu tu-FIF-ti. it PRÁK-ti-kli sels it-SELF",
          literal: "Para un vecino, yo puedo venir abajo a dos-cincuenta. Ello prácticamente vende sí-misma.",
          why: "“I can come down to…” es “puedo bajar a…”, la forma en que el vendedor cede precio. “It sells itself” es nuestro “se vende sola”: el reflexivo “itself” hace el trabajo del “se”. Fíjese: “come down”, no “lower me the price”."
        },
        {
          speaker: "Buyer",
          target: "Deal. Do you take Venmo?",
          translation: "Trato hecho. ¿Recibe Venmo?",
          pronunciation: "díil. du iú téik VEN-mou",
          literal: "Trato. ¿Tomas tú Venmo?",
          why: "“Deal” cierra el trato, como el “de una” paisa. Venmo es en Estados Unidos lo que Nequi en Colombia: la forma normal de pagarle a otra persona desde el teléfono, incluso en una venta de segunda."
        },
        {
          speaker: "Alejandra",
          target: "Absolutely. Sold! Thanks — nice doing business with you.",
          translation: "Claro que sí. ¡Vendida! Gracias, un gusto hacer negocio.",
          pronunciation: "ab-so-LÚT-li. sóuld! zenks — náis DÚ-in BÍS-nes uid iú",
          literal: "Absolutamente. ¡Vendida! Gracias — bonito haciendo negocio contigo.",
          why: "“Sold!” es “¡vendida!”, el cierre triunfal de la venta. “Nice doing business with you” es una despedida cordial de trato cerrado, sin el “que le vaya bien” colombiano pero con la misma calidez. No hay ñapa: el trato se cierra y ya."
        }
      ],
      vocabulary: [
        {
          term: "to sell",
          explanation:
            "El verbo para vender. El precio va con “for” — “sell it for three hundred” — no con “in”. Y ojo: “to sell” es la acción; “for sale” es el estado de estar en venta.",
          literal: "vender",
          useWhen:
            "En cualquier venta: “I'm selling my bike”, “I sold it yesterday”, “I'll sell it to you for…”.",
          avoidWhen:
            "No diga “sell it in three hundred”: el precio nunca va con “in”. Es “for”.",
          register: "neutro",
          region: "Inglés universal; el precio con “for” es el patrón que hay que fijar.",
          related: ["sell for", "sell off", "put up for sale", "list"],
          example: {
            target: "I'm selling it for three hundred.",
            translation: "La vendo en trescientos."
          }
        },
        {
          term: "for sale",
          explanation:
            "En venta, disponible para comprar — lo que dice el letrero “For Sale”. Es la trampa estrella: NO es lo mismo que “on sale”, que significa en rebaja.",
          literal: "en venta",
          useWhen:
            "Al marcar algo como disponible: “the bike is for sale”, “is this for sale?”, “up for sale”.",
          avoidWhen:
            "No la use para hablar de un descuento: eso es “on sale”. “For sale” solo dice que se puede comprar.",
          register: "neutro",
          region: "Universal en inglés; el letrero típico es “For Sale”.",
          related: ["for sale", "up for sale", "listed", "available"],
          example: {
            target: "The bike is for sale.",
            translation: "La bici está en venta."
          }
        },
        {
          term: "on sale",
          explanation:
            "En rebaja, con descuento. Aquí está la otra mitad de la trampa: “on sale” NO significa en venta, sino a un precio rebajado en una tienda.",
          literal: "en rebaja",
          useWhen:
            "Al hablar de descuentos: “these shoes are on sale”, “it's on sale this week”, “50% off”.",
          avoidWhen:
            "No la use para decir que algo se puede comprar; para eso es “for sale”. Confundirlas cambia el sentido por completo.",
          register: "neutro",
          region: "Universal; “on sale” en EE.UU. y Estados Unidos es descuento.",
          related: ["on sale", "on clearance", "marked down", "discounted"],
          example: {
            target: "These shoes are on sale.",
            translation: "Estos zapatos están en rebaja."
          }
        },
        {
          term: "it sells itself",
          explanation:
            "Se vende solo/a. El reflexivo “itself” hace lo que en español hace el “se”: describe algo que se vende rápido y sin esfuerzo.",
          literal: "se vende a sí mismo",
          useWhen:
            "Al alabar la salida de algo: “this model sells itself”, “it practically sells itself”.",
          avoidWhen:
            "Para “vende bien” en general use “it sells well”; “sells itself” subraya que casi no hay que esforzarse.",
          register: "informal",
          region: "Universal en inglés.",
          related: ["it sells itself", "sell well", "fly off the shelves", "be in demand"],
          example: {
            target: "This model sells itself.",
            translation: "Este modelo se vende solo."
          }
        },
        {
          term: "come down (on the price)",
          explanation:
            "Bajar el precio siendo el vendedor — “I can come down to…”. Es el equivalente de “le hago precio / se la dejo en”: ceder un poco para cerrar.",
          literal: "bajar (en el precio)",
          useWhen:
            "Al ofrecer una rebaja: “I can come down to two-fifty”, “I can't come down any more”.",
          avoidWhen:
            "No diga “lower me the price” como vendedor; “come down” lo dice quien vende, y “knock off” quita una cantidad concreta.",
          register: "informal",
          region: "Norteamérica y universal en inglés.",
          related: ["come down", "knock off", "give a deal", "throw in"],
          example: {
            target: "I can come down to two-fifty.",
            translation: "Puedo bajar a doscientos cincuenta."
          }
        },
        {
          term: "firm (price)",
          explanation:
            "Precio fijo, inamovible. “The price is firm” avisa que no hay rebaja, y en los anuncios se ve como “$300 firm”.",
          literal: "firme (fijo)",
          useWhen:
            "Al cerrar la puerta al regateo: “the price is firm”, “sorry, it's firm”, “$300 firm”.",
          avoidWhen:
            "No lo confunda con “strong”; “firm” aquí es inamovible, no fuerte. Es lo contrario de negociable.",
          register: "neutro",
          region: "Anuncios de venta en inglés.",
          related: ["price is firm", "non-negotiable", "as listed", "no lowballers"],
          example: {
            target: "The price is firm.",
            translation: "El precio es fijo."
          }
        },
        {
          term: "to sell off / clear out",
          explanation:
            "Rematar, liquidar barato — sobre todo al mudarse. “Sell off” y “clear out” son el equivalente de rematar todo antes de irse.",
          literal: "liquidar / desocupar",
          useWhen:
            "Al deshacerse de cosas rápido y barato: “I'm selling everything off”, “we're clearing out the garage”.",
          avoidWhen:
            "Implica precio de ganga y prisa; para una venta normal a precio pleno es solo “sell”, no “sell off”.",
          register: "informal",
          region: "Universal; “moving sale” es el letrero típico.",
          related: ["sell off", "clear out", "moving sale", "get rid of"],
          example: {
            target: "I'm selling everything off before I move.",
            translation: "Estoy rematando todo antes de mudarme."
          }
        }
      ],
      note:
        "Lo más útil es no confundir “for sale” (en venta, disponible) con “on sale” (en rebaja, con descuento): son cosas distintas. Como vendedor, ponga el precio con “for” (“I'm selling it for three hundred”), baje con “I can come down to…” y cierre con “sold”. Y para “se vende solo” el inglés dice “it sells itself”.",
      culture: [
        {
          label: "“For sale” no es “on sale”",
          body:
            "Es la confusión más costosa para un hispanohablante. “For sale” significa en venta, disponible para comprar — es lo que dice el letrero pegado a la bici. “On sale”, en cambio, significa en rebaja, a precio con descuento en una tienda. Se parecen, pero dicen cosas opuestas: una habla de disponibilidad y la otra de precio. Ver “on sale” y entender “en venta” lleva a esperar un descuento que no existe, o al revés. Vale la pena memorizarlas como pareja."
        },
        {
          label: "Se vende por Marketplace",
          body:
            "Las ventas de segunda entre particulares se hacen sobre todo por Facebook Marketplace, Craigslist u OfferUp, o con un letrero “For Sale” en la ventana. Todo se acuerda por mensaje: el comprador escribe, pregunta si sigue disponible (“is this still available?”) y pasa a recogerlo, a veces dejándolo en el porche (“porch pickup”). Es el equivalente del “se vende” colombiano, solo que casi siempre digital. Responder rápido y con fotos claras es lo que cierra la venta."
        },
        {
          label: "Venmo y Zelle mandan",
          body:
            "En Estados Unidos, Venmo y Zelle son los reyes de los pagos entre particulares, igual que Nequi o una transferencia en Colombia. Se manda plata con el número de teléfono o el correo del otro, llega en minutos y evita andar con efectivo. En una venta de segunda es lo más normal pedirlo. Zelle va directo de banco a banco; Venmo funciona casi como una red social del pago. Tener listo su usuario lo vuelve un vendedor fácil y confiable a los ojos del comprador."
        },
        {
          label: "Vender al mudarse: “moving sale”",
          body:
            "Cuando alguien se muda, hace un “moving sale”: remata muebles y cosas baratas para no cargar con ellas. Los letreros dicen “everything must go” y a menudo “as-is”, que significa que se vende tal como está, sin garantía ni devoluciones. Es el mismo rebusque de fin de mudanza que en Colombia, con otro nombre. Si usted es quien se va, anunciarlo como “moving sale” atrae compradores que saben que encontrarán precios de remate y no esperan reclamar después."
        }
      ],
      pitfalls: [
        {
          mistake: "“The bike is on sale.”",
          whyItFails:
            "“On sale” significa en rebaja, con descuento, no en venta. Para decir que algo está disponible para comprar se usa “for sale”. Confundirlas hace pensar en una oferta que no existe.",
          sayInstead: "The bike is for sale."
        },
        {
          mistake: "“I sell it in three hundred.”",
          whyItFails:
            "El precio va con “for”, no con “in”: “I'm selling it for three hundred”. Además el presente “I sell” suena a costumbre, no a la venta que hace ahora.",
          sayInstead: "I'm selling it for three hundred."
        },
        {
          mistake: "“It sells very good.”",
          whyItFails:
            "“Good” es adjetivo; para modificar el verbo se necesita el adverbio “well”: “it sells really well”. Y para “se vende solo” se dice “it sells itself”.",
          sayInstead: "It sells really well."
        },
        {
          mistake: "“The price is firm, I don't can lower it.”",
          whyItFails:
            "“I don't can” no existe: el modal “can” forma su propia negación, “can't”. Lo correcto es “the price is firm, I can't come down”.",
          sayInstead: "The price is firm, I can't come down."
        }
      ],
      variations: [
        {
          form: "How much are you asking?",
          register: "neutro",
          region: "Ventas de segunda",
          whenToUse: "Para preguntar el precio pedido de algo usado, entendiendo que se puede negociar."
        },
        {
          form: "I'm selling it for three hundred.",
          register: "neutro",
          region: "Universal en inglés",
          whenToUse: "Para poner precio como vendedor — ojo, el precio va con “for”."
        },
        {
          form: "I can come down to two-fifty.",
          register: "amistoso de venta",
          region: "Norteamérica",
          whenToUse: "Para bajar el precio un poco y cerrar, como el “le hago precio” colombiano."
        },
        {
          form: "The price is firm.",
          register: "neutro",
          region: "Anuncios de venta",
          whenToUse: "Para avisar que no hay rebaja; suele verse escrito como “$300 firm”."
        },
        {
          form: "Sold!",
          register: "casual triumphant",
          region: "Universal",
          whenToUse: "Para cerrar la venta con entusiasmo, como “¡vendida!”."
        }
      ],
      prompt: "Un letrero dice “Bike — $300, on sale”. Según el inglés, ¿qué le están diciendo en realidad?",
      choices: [
        "Que la bici está rebajada, a un precio con descuento.",
        "Que la bici está disponible para la venta.",
        "Que la bici ya fue vendida a otra persona."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Quiere decir “La vendo en trescientos”. ¿Cuál es correcto?",
          choices: [
            "I sell it in three hundred dollars.",
            "I'm selling it in three hundred now.",
            "I'm selling it for three hundred."
          ],
          answer: 2,
          tests: "precio con “for”, no “in”"
        },
        {
          prompt: "En una vitrina ve “on sale”. ¿Qué significa?",
          choices: [
            "Que está disponible para comprar sin descuento.",
            "Que está en rebaja, con descuento.",
            "Que ya está apartado y vendido a otro."
          ],
          answer: 1,
          tests: "“on sale” = en rebaja"
        },
        {
          prompt: "Quiere decir que el precio es fijo y no puede bajarlo. ¿Qué dice?",
          choices: [
            "The price is firm, I can't come down.",
            "The price is very firm, I don't can lower.",
            "The price is firm, I no can lower it."
          ],
          answer: 0,
          tests: "negación del modal: “I can't”"
        },
        {
          prompt: "El vendedor dice “It practically sells itself.” ¿Qué quiere decir?",
          choices: [
            "Que se vende solo, casi sin esfuerzo.",
            "Que solo se vende de a una unidad.",
            "Que se vendió sin que él estuviera."
          ],
          answer: 0,
          tests: "“sells itself” = se vende solo"
        }
      ]
    }
  },
  {
    id: "articles-and-quantities-at-the-sincelejo-market",
    level: "Starter · Buying and paying",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    structure: "articles-and-quantity",
    review: "pending",
    es: {
      title: "Buying exact amounts at the market",
      situation:
        "You are at a morning stall in Sincelejo buying food for a youth-center breakfast. The budget is tight, the seller is running out of some things, and every choice depends on articles and quantity words: the rice, some arepas, another coffee, half a kilo, no large bags, a little cilantro, and the ñapa that helps the meal stretch.",
      setting: {
        who: "Marta is an English speaker volunteering at a youth center; Don Álvaro is an older market seller who knows she is shopping for children and tries not to let her overbuy.",
        what: "A real food order with a small budget: rice, cheese, eggs, panela, coffee, cilantro and bananas for children who will arrive hungry before class.",
        when: "Early Monday morning, before the delivery truck comes and before the youth center opens.",
        where: "Sincelejo, at a covered market stall near the bus stands, with sacks of rice on the floor and prices taped to the counter.",
        why: "Because quantity is not decoration here. Choosing mucho, muchos, poco, algunas, ninguna, medio, una libra, otro and al changes what Marta receives and whether the money lasts."
      },
      address: {
        form: "usted",
        who: "Marta and Don Álvaro use usted, the safe, respectful form between a customer and an older seller in a market stall.",
        why: "Usted keeps the transaction courteous without making it stiff. It lets Marta ask for corrections and quantities clearly, and it lets Don Álvaro guide her without sounding bossy.",
        ifYouSwitch:
          "Tú would not be impossible in a warm coastal market, but it would make Marta sound more familiar than she means to be. Usted is the dependable choice when you are negotiating money with someone older."
      },
      dialogue: [
        {
          speaker: "Marta",
          target: "Buenos días. Necesito un kilo de arroz, una libra de queso y algunas arepas para el lunes.",
          translation: "Good morning. I need a kilo of rice, a pound of cheese, and some arepas for Monday.",
          pronunciation: "BWEH-nos DEE-as. neh-seh-SEE-to oon KEE-lo de a-ROS, OO-na LEE-bra de KEH-so i al-GOO-nas a-REH-pas PA-ra el LOON-es",
          literal: "Good days. I-need a kilo of rice, a pound of cheese and some arepas for the Monday.",
          why: "This line already shows three article jobs. Spanish uses measure phrases with “de”: “un kilo de arroz”, “una libra de queso”. “Algunas arepas” means some arepas, and “el lunes” means on Monday, with the definite article where English drops it."
        },
        {
          speaker: "Don Álvaro",
          target: "Le tengo bastante arroz del bueno, pero quedan pocas arepas y no hay ninguna bolsa grande.",
          translation: "I have plenty of the good rice for you, but there are few arepas left and there is no large bag.",
          pronunciation: "le TEN-go bas-TAN-te a-ROS del BWEH-no, PE-ro KE-dan PO-kas a-REH-pas i no ai neen-GOO-na BOL-sa GRAN-de",
          literal: "For-you I-have plenty rice of-the good, but remain few arepas and not there-is no large bag.",
          why: "“Bastante” can mean enough or quite a lot. “Pocas” agrees with plural feminine “arepas”. “Ninguna” stays singular in Spanish even when English says no bags, and “del” is mandatory: “de + el” becomes “del”, never “de el”."
        },
        {
          speaker: "Marta",
          target: "Entonces deme medio kilo, una docena de huevos y otro café para mi mamá.",
          translation: "Then give me half a kilo, a dozen eggs, and another coffee for my mom.",
          pronunciation: "en-TON-ses DEH-me MEH-dyo KEE-lo, OO-na do-SEH-na de WEH-bos i O-tro ka-FEH PA-ra mi ma-MA",
          literal: "Then give-me half kilo, a dozen of eggs and another coffee for my mom.",
          why: "“Medio kilo” drops the article after medio, and “una docena de huevos” is the everyday dozen frame. The crucial learner trap is “otro café”: Spanish never says “un otro café”. After “otro”, English keeps an article inside another, but Spanish drops it completely."
        },
        {
          speaker: "Don Álvaro",
          target: "Listo. ¿Lleva mucho café o solo un poco de panela? A las tres llega el camión.",
          translation: "All right. Are you taking a lot of coffee or just a little panela? The truck arrives at three.",
          pronunciation: "LEES-to. YEH-ba MOO-cho ka-FEH o SO-lo oon PO-ko de pa-NEH-la. a las TRES YEH-ga el ka-MYON",
          literal: "Ready. You-take much coffee or only a little of panela? At the three arrives the truck.",
          why: "Coffee is a mass noun here, so it is “mucho café”, not “muchos cafés” unless you mean separate cups. “Un poco de” is a small amount of a mass item. Time takes an article too: “a las tres” means at three o'clock."
        },
        {
          speaker: "Marta",
          target: "Un paquete de panela, una bolsa pequeña y lo que sea de cilantro. Me gusta el café sin azúcar.",
          translation: "A package of panela, a small bag, and whatever cilantro you have. I like coffee without sugar.",
          pronunciation: "oon pa-KEH-te de pa-NEH-la, OO-na BOL-sa peh-KEH-nya i lo ke SEH-a de seel-AN-tro. me GOOS-ta el ka-FEH seen a-SOO-kar",
          literal: "A package of panela, a small bag and whatever it-may-be of cilantro. To-me pleases the coffee without sugar.",
          why: "“Lo que sea” is perfect when the amount is unspecified: whatever there is, whatever works. Then comes the English-speaker article mistake: generic Spanish often says “el café” where English says coffee, not the coffee. “Me gusta el café” is I like coffee."
        },
        {
          speaker: "Don Álvaro",
          target: "Claro. Toda la panela está fresca, todos los huevos son de la finca y cada bolsa trae suficiente.",
          translation: "Of course. All the panela is fresh, all the eggs are from the farm, and each bag brings enough.",
          pronunciation: "KLA-ro. TO-da la pa-NEH-la es-TA FRES-ka, TO-dos los WEH-bos son de la FEEN-ka i KA-da BOL-sa TRA-eh soo-fee-SYEN-te",
          literal: "Clear. All the panela is fresh, all the eggs are of the farm and each bag brings enough.",
          why: "“Todo” agrees when it stands with a noun: “toda la panela”, “todos los huevos”. “Cada” never changes, even before a feminine noun. “Suficiente” means enough and can stand after the noun phrase without becoming a long list."
        },
        {
          speaker: "Marta",
          target: "Soy profesora, no chef; con varios niños esperando, demasiado mercado me deja sin plata.",
          translation: "I am a teacher, not a chef; with several children waiting, too much shopping leaves me without money.",
          pronunciation: "soy pro-feh-SO-ra, no chef; kon BA-ryos NEEN-yos es-peh-RAN-do, deh-ma-SYA-do mer-KA-do me DEH-ha seen PLA-ta",
          literal: "I-am teacher, not chef; with several children waiting, too-much shopping leaves me without money.",
          why: "Spanish drops the indefinite article with unmodified professions: “soy profesora”, never “soy una profesora” unless you add a modifier like “una profesora nueva”. “Varios niños” is several children. “Demasiado mercado” treats the shopping as a mass amount, too much shopping."
        },
        {
          speaker: "Don Álvaro",
          target: "No se preocupe. Le pongo unos cuantos bananos de ñapa y un poquitico de cilantro; al final son treinta mil.",
          translation: "Do not worry. I will put in a few bananas as a free extra and a tiny bit of cilantro; in the end it is thirty thousand.",
          pronunciation: "no se preh-o-KOO-pe. le PON-go OO-nos KWAN-tos ba-NA-nos de NYA-pa i oon po-kee-TEE-ko de seel-AN-tro; al fee-NAL son TREIN-ta meel",
          literal: "Do not worry. For-you I-put a-few bananas of extra and a tiny-bit of cilantro; to-the end they-are thirty thousand.",
          why: "“Unos cuantos” is a useful middle quantity: a few, more than algunos but still not many. “Ñapa” is the small extra a seller adds. Colombians say “poquito” and “un poquitico” constantly where a textbook would say “un poco”. “Al” is mandatory: “a + el” becomes “al”."
        }
      ],
      vocabulary: [
        {
          term: "el/la/los/las for generics",
          explanation:
            "Spanish often uses the definite article for a whole category where English uses no article. “Me gusta el café” means I like coffee in general, not one specific cup. The same happens with languages, titles, days, times, and body parts when the possessor is obvious.",
          literal: "the, used for a category",
          useWhen:
            "Generic likes and claims (“el café es caro”), days (“el lunes”), times (“a las tres”), languages (“el español”), titles (“la doctora Rojas”), and clear body parts or clothing (“me duele la cabeza”, “me quité los zapatos”).",
          avoidWhen:
            "Do not translate it automatically as the. In English, the generic is often bare: coffee, Spanish, Monday. The article is Spanish grammar, not always English meaning.",
          register: "neutral",
          region: "Universal Spanish; the generic article is one of the strongest English-speaker traps.",
          related: ["el lunes", "a las tres", "la cabeza", "el español"],
          example: {
            target: "Me gusta el café, pero no tomo mucho.",
            translation: "I like coffee, but I do not drink much."
          }
        },
        {
          term: "un/una/unos/unas",
          explanation:
            "The indefinite article marks one item or an approximate plural, but Spanish uses it less than English. You say “un kilo”, “una libra” and “unos cuantos”, but you drop it after otro and before an unmodified profession.",
          literal: "a, an, some",
          useWhen:
            "One countable thing (“una bolsa”), measures (“un kilo”), and approximate plurals (“unos bananos”, “unas arepas”).",
          avoidWhen:
            "Never after “otro”: “otro café”, not “un otro café”. Never before a bare job: “soy profesora”, not “soy una profesora”.",
          register: "neutral",
          region: "Universal Spanish; the overuse of un/una is a predictable English-speaker error.",
          related: ["una bolsa", "un kilo", "unos cuantos", "unas arepas"],
          example: {
            target: "Soy profesora y compro otro café.",
            translation: "I am a teacher and I am buying another coffee."
          }
        },
        {
          term: "otro/otra/otros/otras",
          explanation:
            "“Otro” already contains the idea of another. Spanish does not add an indefinite article in front of it. This is the single most common English-speaker article error in this area: saying “un otro”.",
          literal: "another / other",
          useWhen:
            "Asking for one more or a different one: “otro café”, “otra bolsa”, “otros huevos”, “otras arepas”.",
          avoidWhen:
            "Do not say “un otro” or “una otra”. If you hear yourself wanting a/an before another, stop and use only “otro/otra”.",
          register: "neutral",
          region: "Universal Spanish; corrected instantly by native speakers because the error is so recognizable.",
          related: ["otro café", "otra libra", "otros dos", "el otro"],
          example: {
            target: "Deme otro café para llevar.",
            translation: "Give me another coffee to go."
          }
        },
        {
          term: "al / del",
          explanation:
            "Two contractions are mandatory, not a style choice: “a + el” becomes “al”, and “de + el” becomes “del”. If the article is really part of a title or name, it may stay separate, but normal nouns contract.",
          literal: "to the / from or of the",
          useWhen:
            "Movement or destination with el (“voy al mercado”), source or description with el (“arroz del bueno”), and fixed phrases like “al final”.",
          avoidWhen:
            "Do not write “a el mercado” or “de el puesto”. Spanish does not leave these apart in ordinary speech or writing.",
          register: "neutral",
          region: "Universal Spanish; these are required standard contractions everywhere.",
          related: ["a el", "de el", "al mercado", "del puesto"],
          example: {
            target: "Voy al mercado por arroz del bueno.",
            translation: "I am going to the market for the good rice."
          }
        },
        {
          term: "mucho / poco",
          explanation:
            "These are quantity words that agree when they sit before a noun: mucho café, mucha panela, muchos huevos, pocas arepas. The count or mass nature of the noun decides whether the form is singular mass or plural count.",
          literal: "much, many / little, few",
          useWhen:
            "Any high or low amount: “mucho arroz”, “mucha gente”, “muchos niños”, “pocas bolsas”.",
          avoidWhen:
            "Do not freeze them as mucho. If the noun is plural, the quantity word must be plural too: “muchos huevos”, not “mucho huevos”.",
          register: "neutral",
          region: "Universal Spanish; agreement is the rule, even when English changes the word instead.",
          related: ["mucha", "muchos", "poca", "pocas"],
          example: {
            target: "Hay mucho café, pero quedan pocas arepas.",
            translation: "There is a lot of coffee, but few arepas are left."
          }
        },
        {
          term: "demasiado / bastante / suficiente",
          explanation:
            "This middle of the scale says too much, quite a lot or enough. “Demasiado” agrees before a noun; “bastante” can be plural as “bastantes”; “suficiente” means enough and is the calm practical target.",
          literal: "too much/many / quite a lot / enough",
          useWhen:
            "Judging whether the amount works: “demasiado mercado”, “demasiadas bolsas”, “bastante arroz”, “suficiente para todos”.",
          avoidWhen:
            "Do not use “muy” before nouns. “Muy” intensifies adjectives, not quantities: “muy caro” but “mucho café” or “demasiado café”.",
          register: "neutral",
          region: "Universal Spanish; “bastante” in Colombia often means plenty, not merely barely enough.",
          related: ["demasiada", "bastantes", "suficientes", "muy"],
          example: {
            target: "No compre demasiadas bolsas; hay suficiente arroz.",
            translation: "Do not buy too many bags; there is enough rice."
          }
        },
        {
          term: "todo / algunos / varios / ningún",
          explanation:
            "This row gives you a usable scale: todo is all, algunos is some, unos cuantos is a few, varios is several, ningún/ninguna is none or no. “Ningún” is used before masculine singular nouns; “ninguna” before feminine singular nouns.",
          literal: "all / some / several / no",
          useWhen:
            "Sorting the amount quickly: “toda la panela”, “algunos bananos”, “unos cuantos huevos”, “varias bolsas”, “ningún paquete”.",
          avoidWhen:
            "Do not make “ningún” plural in ordinary negative noun phrases. Spanish says “no hay ninguna bolsa”, singular, where English may say no bags.",
          register: "neutral",
          region: "Universal Spanish; the singular “ningún/ninguna” is a major exam point.",
          related: ["toda", "todos", "algunas", "varias"],
          example: {
            target: "No hay ninguna bolsa grande, pero quedan varios paquetes.",
            translation: "There are no large bags, but several packages remain."
          }
        },
        {
          term: "nada de / un poco de / cada",
          explanation:
            "“Nada de” is none of a mass or category; “un poco de” is a little of it; “cada” is each or every and never changes. Together they let you move from zero to a little to one-by-one.",
          literal: "none of / a little of / each",
          useWhen:
            "Market amounts that are not neat counts: “nada de cilantro”, “un poco de sal”, “cada bolsa trae suficiente”.",
          avoidWhen:
            "Do not make “cada” agree. It is always “cada bolsa”, “cada huevo”, “cada libra”, not “cadas”.",
          register: "neutral",
          region: "Universal Spanish; “un poquitico de” is the Colombian street version of “un poco de”.",
          related: ["nada", "algo de", "poquito", "cada uno"],
          example: {
            target: "Póngame un poco de cilantro en cada bolsa.",
            translation: "Put a little cilantro in each bag."
          }
        },
        {
          term: "una libra / un kilo / una docena",
          explanation:
            "These are the market measures that make quantity concrete. Colombia still uses “una libra” constantly for produce and cheese, “un kilo” for larger amounts, and “una docena” for eggs, rolls or arepas.",
          literal: "a pound / a kilo / a dozen",
          useWhen:
            "Buying by weight or set count: “una libra de queso”, “un kilo de arroz”, “una docena de huevos”, “media libra”.",
          avoidWhen:
            "Do not attach the food directly without “de”. The measure phrase is “una libra de queso”, not “una libra queso”.",
          register: "market neutral",
          region: "Very Colombian in everyday shopping; libra remains alive beside kilo.",
          related: ["media libra", "medio kilo", "gramos", "por libra"],
          example: {
            target: "Deme una libra de queso y una docena de huevos.",
            translation: "Give me a pound of cheese and a dozen eggs."
          }
        },
        {
          term: "un paquete / una bolsa / medio / lo que sea",
          explanation:
            "Packages, bags and halves are everyday container quantities, while “lo que sea” covers an unspecified amount when you will accept whatever is available. They are practical buying words, not abstract grammar labels.",
          literal: "a package / a bag / half / whatever",
          useWhen:
            "At a counter: “un paquete de panela”, “una bolsa de arroz”, “medio kilo”, “lo que sea de cilantro”.",
          avoidWhen:
            "Do not use “lo que sea” when the amount matters exactly; it gives control to the seller and says you are flexible.",
          register: "neutral spoken",
          region: "Universal Spanish, with “bolsa” and “paquete” central to Colombian corner-shop shopping.",
          related: ["paquetico", "bolsita", "medio kilo", "cualquier cantidad"],
          example: {
            target: "Póngame una bolsa pequeña y lo que sea de cilantro.",
            translation: "Give me a small bag and whatever cilantro you have."
          }
        }
      ],
      note:
        "The decidable core is this: Spanish uses articles more often than English with whole categories, days, clock times, languages, titles, and body parts or clothing when the owner is clear. That is why “me gusta el café” means I like coffee, “el lunes” means on Monday, “a las tres” means at three, and “me duele la cabeza” means my head hurts, not the head hurts. But Spanish uses articles less often in two places English speakers over-mark: unmodified jobs and “otro”. Say “soy profesora”, not “soy una profesora”, and “otro café”, never “un otro café”. Add the non-optional contractions “al” and “del”, then attach quantity to countability: mucho café for a mass, muchos huevos for countable plurals. A market makes the system visible because every purchase forces a choice: una libra, medio kilo, algunas arepas, ninguna bolsa, un poco de cilantro, varios niños, cada paquete, suficiente arroz. In Colombia, listen also for “ñapa”, the little extra, and for “poquito” or “un poquitico”, the everyday spoken version of “un poco”.",
      culture: [
        {
          label: "Articles are not little translations",
          body:
            "English speakers often treat el and la as small words to translate, so they remove them whenever English has no the. Spanish does not work that way. In “me gusta el café”, the article points to coffee as a category, not a particular cup. In “a las tres”, it is part of the time expression. In “me duele la cabeza”, the possessor is obvious from “me”, so Spanish says the head, not my head. Once you stop translating the article word by word, the pattern becomes much less mysterious."
        },
        {
          label: "The predictable English-speaker error",
          body:
            "The strongest English pull is to add un where Spanish refuses it. Professions do not take it when unmodified: “soy profesora”, “él es vendedor”, “ella es doctora”. Add a description and the article can return: “soy una profesora nueva”. The other famous trap is “otro”. English hides an article inside another, so learners produce “un otro café”. Spanish hears that instantly as foreign. The correct phrase is always “otro café”, plain and direct."
        },
        {
          label: "How a Colombian stall measures things",
          body:
            "A Colombian market still thinks in concrete containers and weights: una libra de queso, un kilo de arroz, una docena de huevos, una bolsa pequeña, un paquete de panela, medio kilo. The grammar follows the thing. Rice and coffee behave like masses, so you ask for mucho café or un poco de arroz. Eggs and arepas are countable, so you hear muchos huevos, pocas arepas, varios paquetes. The stall is the classroom because the seller has to understand exactly how much to put in the bag."
        },
        {
          label: "Ñapa, poquito and poquitico",
          body:
            "The ñapa is the little extra a seller throws in after the sale, a few bananas, an extra lime, a handful of cilantro. It is not a guaranteed right, but a warm sign that the transaction went well. And the amount is rarely called “un poco” in living Colombian speech. People say “un poquito” constantly, and many Colombians make it even smaller and warmer as “un poquitico”. A textbook may write “un poco de cilantro”; a seller is more likely to say “un poquitico”."
        }
      ],
      pitfalls: [
        {
          mistake: "“Me gusta café.”",
          whyItFails:
            "English says I like coffee with no article, so learners drop it. Spanish normally uses the definite article for generic likes and claims. Without “el”, the sentence sounds clipped and foreign.",
          sayInstead: "Me gusta el café."
        },
        {
          mistake: "“Soy una profesora.”",
          whyItFails:
            "For an unmodified profession, Spanish drops the indefinite article. “Soy una profesora” is not impossible if you add a modifier or contrast, but as a plain identity it over-translates English “I am a teacher”.",
          sayInstead: "Soy profesora."
        },
        {
          mistake: "“Quiero un otro café.”",
          whyItFails:
            "This is the classic article error. Spanish “otro” already means another or other and never takes “un” before it. English hides the article inside another; Spanish does not.",
          sayInstead: "Quiero otro café."
        },
        {
          mistake: "“Hay mucho huevos.”",
          whyItFails:
            "“Mucho” must agree with the noun when it modifies one. Eggs are plural countable, so the quantity word is plural too: “muchos huevos”. Use “mucho” for a mass like café or arroz.",
          sayInstead: "Hay muchos huevos."
        },
        {
          mistake: "“Voy a el mercado de el barrio.”",
          whyItFails:
            "The contractions are mandatory. “A + el” becomes “al” and “de + el” becomes “del”. Leaving them separate is not a formal style; it is simply wrong in ordinary Spanish.",
          sayInstead: "Voy al mercado del barrio."
        }
      ],
      variations: [
        {
          form: "Me gusta el café.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Generic likes and general statements, where English often has no article."
        },
        {
          form: "El lunes a las tres.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Days and clock times, both of which need the article in Spanish."
        },
        {
          form: "Soy profesora.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Unmodified professions, with no “un/una” before the job."
        },
        {
          form: "Otro café, por favor.",
          register: "neutral service",
          region: "Universal Spanish",
          whenToUse: "Asking for another one. This is never “un otro”."
        },
        {
          form: "Hay mucho arroz y pocas arepas.",
          register: "market neutral",
          region: "Universal Spanish",
          whenToUse: "Showing the count and mass split: mass singular “mucho arroz”, plural count “pocas arepas”."
        },
        {
          form: "Le pongo un poquitico de cilantro de ñapa.",
          register: "warm informal service",
          region: "General Colombian",
          whenToUse: "A Colombian seller adding a tiny free extra after the purchase."
        }
      ],
      prompt: "Which Spanish sentence avoids the most common English-speaker article error with “otro”?",
      choices: [
        "Quiero otro café para llevar.",
        "Quiero un otro café para llevar.",
        "Quiero una otra taza para llevar."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "You want to say you like coffee in general. Which is right?",
          choices: [
            "Me gusta café sin azúcar.",
            "Me gusta el café sin azúcar.",
            "Me gusta un café sin azúcar."
          ],
          answer: 1,
          tests: "Generic Spanish uses the definite article: “el café”."
        },
        {
          prompt: "You are saying “I am a teacher” as a plain profession. Which is correct?",
          choices: [
            "Soy profesora en el colegio.",
            "Soy una profesora en el colegio.",
            "Estoy profesora en el colegio."
          ],
          answer: 0,
          tests: "Unmodified professions drop “un/una”: “soy profesora”."
        },
        {
          prompt: "The seller has rice as a mass and arepas as countable items. Which sentence fits?",
          choices: [
            "Hay muchos arroz y poca arepas.",
            "Hay mucha arroz y poco arepas.",
            "Hay mucho arroz y pocas arepas."
          ],
          answer: 2,
          tests: "Mass singular takes “mucho arroz”; plural count takes “pocas arepas”."
        },
        {
          prompt: "Which sentence uses the mandatory contractions correctly?",
          choices: [
            "Voy al mercado por arroz del bueno.",
            "Voy a el mercado por arroz de el bueno.",
            "Voy al mercado por arroz de el bueno."
          ],
          answer: 0,
          tests: "“A + el” becomes “al”; “de + el” becomes “del”."
        }
      ]
    },
    en: {
      title: "Comprando cantidades exactas en El Paso",
      situation:
        "Usted está en una tienda latina de El Paso, Texas, comprando comida para un desayuno comunitario. El presupuesto es pequeño, el tendero se está quedando sin algunas cosas, y el inglés le obliga a decidir entre a, the, some, much, many, little, few, a pound, a dozen, another y no article. La compra real se vuelve una clase de artículos y cantidades.",
      setting: {
        who: "Marta es colombiana y coordina un desayuno para niños recién llegados; Sam es el tendero de una tienda latina que mezcla medidas de Texas con productos familiares.",
        what: "Una compra con lista y presupuesto: arroz, queso, huevos, panela, café, cilantro y bananos para que el desayuno alcance sin gastar de más.",
        when: "Un lunes temprano en la mañana, antes de que llegue el pedido y antes de que abra el centro comunitario.",
        where: "El Paso, Texas, en una tienda latina de barrio donde se venden productos colombianos, pero la caja, las medidas y la conversación funcionan en inglés.",
        why: "Porque el inglés decide los artículos de otra manera, y en El Paso la compra además mezcla pounds, ounces, kilos y libras en una ciudad de frontera."
      },
      address: {
        form: "mixed",
        who: "Marta y Sam usan el mismo “you”. El inglés no distingue entre usted y tú, así que el respeto se marca con el tono y con fórmulas como “could I” o “I'll take”.",
        why: "Para un colombiano, la tentación es buscar un pronombre de respeto. No existe. En una tienda, la cortesía vive en frases completas, please, thanks, would you, could I, y no en cambiar la palabra “you”.",
        ifYouSwitch:
          "No hay cambio de pronombre posible. Lo que cambiaría el tono es pasar de “Could I get a pound?” a “Give me a pound”, que suena más brusco aunque use el mismo “you”."
      },
      dialogue: [
        {
          speaker: "Marta",
          target: "Good morning. I need a kilo of rice, a pound of cheese, and some rolls for Monday.",
          translation: "Buenos días. Necesito un kilo de arroz, una libra de queso y algunos panes para el lunes.",
          pronunciation: "gud MOR-ning. ai nid a KÍ-lo ov ráis, a páund ov chís, and som róuls for MON-dei",
          literal: "Buena mañana. Yo necesito un kilo de arroz, una libra de queso y algunos panes para lunes.",
          why: "En inglés las medidas llevan “of”: “a kilo of rice”, “a pound of cheese”. Para plural indefinido no existe un plural de “a”: se dice “some rolls” o simplemente “rolls”. Y los días no llevan artículo: “for Monday”, no “for the Monday”."
        },
        {
          speaker: "Sam",
          target: "I have plenty of good rice, but only a few rolls and no large bags.",
          translation: "Tengo bastante arroz bueno, pero solo unos pocos panes y ninguna bolsa grande.",
          pronunciation: "ai jav PLEN-ti ov gud ráis, bot ÓUN-li a fiu róuls and nóu larj bags",
          literal: "Yo tengo abundancia de buen arroz, pero solo unos pocos panes y no bolsas grandes.",
          why: "“Plenty of” es bastante, incluso de sobra. “A few” se usa con contables en plural, como rolls. “No large bags” muestra otra diferencia: inglés usa plural después de “no” si piensa en bolsas contables; el español suele decir “ninguna bolsa” en singular."
        },
        {
          speaker: "Marta",
          target: "Then I'll take half a kilo, a dozen eggs, and another coffee for my mother.",
          translation: "Entonces llevo medio kilo, una docena de huevos y otro café para mi mamá.",
          pronunciation: "den ail téik jaf a KÍ-lo, a DO-zen egz, and a-NO-der KO-fi for mai MO-der",
          literal: "Entonces yo tomaré medio un kilo, una docena huevos y un-otro café para mi madre.",
          why: "Aquí sí aparece artículo en inglés: “a dozen eggs” y “another coffee”. “Another” viene de “an other”, pero hoy es una sola palabra. El error colombiano sería copiar el español y decir “other coffee” cuando se pide uno más."
        },
        {
          speaker: "Sam",
          target: "Sure. Do you need much coffee or just a little panela? The delivery comes at three.",
          translation: "Claro. ¿Necesita mucho café o solo un poco de panela? El pedido llega a las tres.",
          pronunciation: "shur. du iu nid moch KO-fi or yost a LI-tel pa-NE-la? de de-LI-ve-ri komz at zri",
          literal: "Seguro. ¿Necesita mucho café o solo una pequeña panela? La entrega viene a tres.",
          why: "“Much” va con incontables como coffee. “A little” también va con incontables y significa un poco. La hora en inglés no lleva artículo: “at three”, no “at the three”. El español sí dice “a las tres”."
        },
        {
          speaker: "Marta",
          target: "A package of panela, a small bag, and whatever cilantro you have. Coffee is expensive here.",
          translation: "Un paquete de panela, una bolsa pequeña y el cilantro que tenga. El café es caro aquí.",
          pronunciation: "a PA-kej ov pa-NE-la, a smol bag, and wot-EV-er si-LAN-tro iu jav. KO-fi is eks-PEN-siv jir",
          literal: "Un paquete de panela, una pequeña bolsa y cualquier cilantro que usted tenga. Café es caro aquí.",
          why: "Este es el espejo difícil: el inglés habla de categorías sin artículo. “Coffee is expensive” significa “el café es caro”. Decir “the coffee is expensive” solo sirve si habla de un café específico que ambos ven o ya mencionaron."
        },
        {
          speaker: "Sam",
          target: "Of course. All the panela is fresh, all the eggs are local, and each bag has enough.",
          translation: "Claro. Toda la panela está fresca, todos los huevos son locales y cada bolsa tiene suficiente.",
          pronunciation: "ov kors. ol de pa-NE-la is fresh, ol de egz ar LÓU-kal, and ich bag jaz i-NOF",
          literal: "Por supuesto. Toda la panela está fresca, todos los huevos son locales y cada bolsa tiene suficiente.",
          why: "“All the” corresponde a “todo/toda/todos/todas” cuando el grupo es conocido: all the eggs. “Each” es cada y no cambia. “Enough” funciona como suficiente, sin obligarlo a elegir much o many."
        },
        {
          speaker: "Marta",
          target: "I'm a teacher, not a chef; with several kids waiting, too many groceries will empty my wallet.",
          translation: "Soy profesora, no chef; con varios niños esperando, demasiado mercado me va a dejar sin plata.",
          pronunciation: "aim a TI-cher, not a chef; wiz SEV-ral kids WÉI-ting, tu ME-ni GRÓU-ser-iz wil EMP-ti mai WA-let",
          literal: "Yo soy una profesora, no una chef; con varios niños esperando, demasiados víveres vaciarán mi billetera.",
          why: "A diferencia del español, el inglés normalmente conserva el artículo con profesiones: “I'm a teacher”. Luego aparece “too many groceries”, porque groceries es plural contable. Con coffee sería “too much coffee”."
        },
        {
          speaker: "Sam",
          target: "Don't worry. I'll throw in a few bananas, and a tiny bit of cilantro. In the end, it's thirty dollars.",
          translation: "No se preocupe. Le pongo unos cuantos bananos y un poquitico de cilantro. Al final son treinta dólares.",
          pronunciation: "dont WOR-i. ail zróu in a fiu ba-NA-naz, and a TÁI-ni bit ov si-LAN-tro. in di end, its TER-ti DO-larz",
          literal: "No se preocupe. Yo lanzaré adentro unos pocos bananos y un diminuto pedazo de cilantro. En el fin, es treinta dólares.",
          why: "“A few” es unos cuantos con contables, y “a tiny bit of” es un poquitico de con incontables o masas pequeñas. No es una ñapa colombiana como costumbre fija, pero “throw in” sí significa añadir algo sin cobrarlo."
        }
      ],
      vocabulary: [
        {
          term: "the with specific things, no article with generics",
          explanation:
            "El inglés usa “the” cuando la cosa es específica o ya conocida, pero lo quita para hablar de una categoría en general. Por eso “Coffee is expensive” traduce “el café es caro”. “The coffee is expensive” habla de ese café específico, no del café como producto.",
          literal: "the específico, cero artículo genérico",
          useWhen:
            "Use “the” con la bolsa del mostrador, el arroz ya mencionado o el pedido específico. Quítelo con coffee, Spanish, Monday, breakfast o rice como categoría.",
          avoidWhen:
            "No copie el artículo genérico del español. “The coffee is expensive” no significa automáticamente “el café es caro” en general.",
          register: "neutro",
          region: "Inglés universal; esta es una de las diferencias más visibles para colombianos.",
          related: ["the bag", "coffee", "Monday", "Spanish"],
          example: {
            target: "Coffee is expensive here.",
            translation: "El café es caro aquí."
          }
        },
        {
          term: "a / an",
          explanation:
            "El artículo indefinido singular es obligatorio con muchos sustantivos contables: “a teacher”, “a bag”, “an egg”. Pero no tiene plural. Para plural, el inglés usa “some” o deja el sustantivo solo.",
          literal: "un / una",
          useWhen:
            "Una cosa contable singular y profesiones: “a small bag”, “an apple”, “I'm a teacher”.",
          avoidWhen:
            "No lo ponga ante plurales ni incontables: no “a rice”, no “a eggs”. Para arroz como producto diga “rice”; para huevos en plural, “eggs” o “some eggs”.",
          register: "neutro",
          region: "Inglés universal; las profesiones con “a/an” son el espejo de “soy profesora”.",
          related: ["a bag", "an egg", "a teacher", "some eggs"],
          example: {
            target: "I'm a teacher, not a chef.",
            translation: "Soy profesora, no chef."
          }
        },
        {
          term: "another / other",
          explanation:
            "“Another” se usa para uno más de algo singular: another coffee, another bag. “Other” acompaña plurales o un nombre con otro determinante: other bags, the other coffee. No diga “an other” separado en la compra normal.",
          literal: "otro / otros",
          useWhen:
            "Pedir uno más: “another coffee”, “another pound”, “another bag”. Para plural: “other bags” o “some other rolls”.",
          avoidWhen:
            "No copie “otro café” como “other coffee” si quiere uno más. Y no escriba “an other coffee” como dos palabras.",
          register: "neutro",
          region: "Inglés universal; “another” es una sola palabra aunque históricamente venga de “an other”.",
          related: ["another coffee", "other bags", "the other", "one more"],
          example: {
            target: "I'll take another coffee.",
            translation: "Llevo otro café."
          }
        },
        {
          term: "some / bare plurals",
          explanation:
            "Como no existe plural de “a/an”, el inglés dice “some books” o simplemente “books”. “Unos libros” puede ser “some books” si importa la cantidad vaga, o “books” si habla de la categoría.",
          literal: "unos / algunas, o plural sin artículo",
          useWhen:
            "Plural indefinido: “some rolls”, “some eggs”, “I need books for class”.",
          avoidWhen:
            "No invente “a books” ni “ones books”. El plural indefinido inglés no tiene una palabra equivalente obligatoria a “unos/unas”.",
          register: "neutro",
          region: "Inglés universal; punto clave para escribir bien desde A1.",
          related: ["some rolls", "eggs", "books", "a few"],
          example: {
            target: "I need some rolls for Monday.",
            translation: "Necesito unos panes para el lunes."
          }
        },
        {
          term: "much / many",
          explanation:
            "El inglés no solo hace concordancia, cambia de palabra. “Much” va con incontables como coffee, rice, money, time. “Many” va con contables en plural como eggs, bags, kids, books.",
          literal: "mucho / muchos",
          useWhen:
            "Preguntas, negativos y cantidades grandes: “much coffee”, “many eggs”, “too much money”, “too many bags”.",
          avoidWhen:
            "No diga “much eggs” ni “many coffee” salvo que hable de cafés como tazas individuales: many coffees ordered at a café.",
          register: "neutro",
          region: "Inglés universal; en afirmativo cotidiano se prefiere a lot of, pero la división sigue viva.",
          related: ["a lot of", "too much", "too many", "plenty of"],
          example: {
            target: "Do you need much coffee or many eggs?",
            translation: "¿Necesita mucho café o muchos huevos?"
          }
        },
        {
          term: "little / few",
          explanation:
            "El par pequeño repite la misma división: “little” para incontables y “few” para contables plurales. “A little” es un poco; “a few” es unos cuantos. Sin “a”, little/few suenan más negativos, casi insuficientes.",
          literal: "poco / pocos",
          useWhen:
            "Cantidades pequeñas: “a little panela”, “a few rolls”, “little money left”, “few bags left”.",
          avoidWhen:
            "No mezcle la clase del sustantivo: no “few rice” y no “little eggs” si habla de varios huevos.",
          register: "neutro",
          region: "Inglés universal; la diferencia entre “a few” y “few” importa mucho en tono.",
          related: ["a little", "a few", "few", "little"],
          example: {
            target: "I only need a little panela and a few rolls.",
            translation: "Solo necesito un poco de panela y unos pocos panes."
          }
        },
        {
          term: "all / every / each / no / none",
          explanation:
            "Este grupo cubre la escala de todo a nada. “All the eggs” es todos los huevos conocidos; “every bag” y “each bag” miran los elementos uno por uno; “no bags” niega el plural; “none of the rice” niega una cantidad de algo conocido.",
          literal: "todo / cada / ningún / nada de",
          useWhen:
            "Compras y listas: “all the eggs”, “each bag”, “every package”, “no large bags”, “none of the rice”.",
          avoidWhen:
            "No diga “no bag” si piensa en bolsas en general disponibles en la tienda; lo natural es plural: “no bags”.",
          register: "neutro",
          region: "Inglés universal; “no” suele ir con plural contable donde el español usa singular con ningún/ninguna.",
          related: ["all the", "each", "every", "none of"],
          example: {
            target: "Each bag has enough, but there are no large bags.",
            translation: "Cada bolsa tiene suficiente, pero no hay ninguna bolsa grande."
          }
        },
        {
          term: "enough / too much / too many / plenty of",
          explanation:
            "La parte práctica de la escala: “enough” es suficiente, “too much” es demasiado con incontables, “too many” es demasiados con plurales contables, y “plenty of” es bastante o de sobra.",
          literal: "suficiente / demasiado / bastante",
          useWhen:
            "Decidir si alcanza: “enough rice”, “too much coffee”, “too many groceries”, “plenty of eggs”.",
          avoidWhen:
            "No use “too much” con plurales contables: “too much bags” falla porque bags se cuenta. Diga “too many bags”.",
          register: "neutro",
          region: "Inglés universal; “plenty of” es muy común en tiendas y casas.",
          related: ["enough", "too much", "too many", "plenty"],
          example: {
            target: "There is enough rice, but too many bags cost too much.",
            translation: "Hay suficiente arroz, pero demasiadas bolsas cuestan demasiado."
          }
        },
        {
          term: "a pound / a kilo / a dozen",
          explanation:
            "Las medidas de mercado en inglés llevan artículo y normalmente “of” antes del producto: a pound of cheese, a kilo of rice. “A dozen eggs” puede ir sin “of”, pero “a dozen of eggs” suena raro en la compra normal.",
          literal: "una libra / un kilo / una docena",
          useWhen:
            "Comprar por medida: “a pound of cheese”, “half a kilo”, “a dozen eggs”, “two kilos of rice”.",
          avoidWhen:
            "No quite “of” con pound/kilo: “a pound cheese” suena telegráfico. Y no meta “of” después de dozen en la frase corriente “a dozen eggs”.",
          register: "neutro de tienda",
          region: "En Texas dominan pounds y ounces, pero en El Paso una tienda latina también entiende kilo y libra por la vida de frontera.",
          related: ["half a pound", "half a kilo", "grams", "per pound"],
          example: {
            target: "Could I get a pound of cheese and a dozen eggs?",
            translation: "¿Me da una libra de queso y una docena de huevos?"
          }
        },
        {
          term: "a package / a bag / half / whatever",
          explanation:
            "Los contenedores también toman artículo: a package, a bag. “Half” puede combinarse como “half a kilo” o “half a pound”. “Whatever” cubre “lo que sea” cuando la cantidad exacta no importa.",
          literal: "un paquete / una bolsa / medio / lo que sea",
          useWhen:
            "En la caja o el mostrador: “a package of panela”, “a small bag”, “half a kilo”, “whatever cilantro you have”.",
          avoidWhen:
            "No use “whatever” si necesita una cantidad exacta. En inglés también entrega el control al vendedor y suena flexible, no preciso.",
          register: "neutro hablado",
          region: "Inglés universal; en El Paso una tienda latina puede entender panela, cilantro, kilo, libra y pound en la misma conversación.",
          related: ["a packet", "a small bag", "half a kilo", "any amount"],
          example: {
            target: "I'll take a small bag and whatever cilantro you have.",
            translation: "Llevo una bolsa pequeña y lo que tenga de cilantro."
          }
        }
      ],
      note:
        "El núcleo decidible para el inglés va al revés del español en varios puntos. Para una categoría general, quite el artículo: “Coffee is expensive”, “Spanish is useful”, “Monday is busy”. Use “the” solo cuando el café, el español o el lunes son específicos en la conversación. Para singular contable, el inglés suele exigir “a/an”, incluso con profesiones: “I'm a teacher”, no solo “I'm teacher”. Pero no existe plural de “a/an”: “unos libros” se vuelve “some books” o simplemente “books”, según si habla de cantidad vaga o de la categoría. En cantidad, el inglés separa por contabilidad con palabras distintas: much/little para incontables como coffee, rice, money y time; many/few para plurales contables como eggs, bags, books y kids. Encima de eso van enough, too much, too many, plenty of, all, each, every, no y none. En una tienda, el sistema se vuelve concreto: a pound of cheese, half a kilo, a dozen eggs, a package of panela, a small bag, another coffee, whatever cilantro you have.",
      culture: [
        {
          label: "El inglés no traduce el artículo genérico español",
          body:
            "Para un colombiano, “el café es caro” parece pedir “the coffee is expensive”. En inglés, eso solo funciona si habla del café específico que acaba de comprar o de una marca ya mencionada. Si habla del producto en general, se quita el artículo: “Coffee is expensive”. Lo mismo pasa con “Spanish is useful”, “Monday is busy” y “breakfast is important”. Esta ausencia no es informalidad ni descuido; es la forma estándar de hablar de categorías."
        },
        {
          label: "No hay plural de a/an",
          body:
            "El español tiene un/una y también unos/unas. El inglés no. “A book” existe, pero “a books” no. Para plural indefinido se escoge entre “some books”, si importa una cantidad vaga, y “books”, si habla de la categoría o de objetos sin precisar. Por eso “compré unos libros” puede ser “I bought some books”, mientras “necesito libros para la clase” puede ser “I need books for class”. Aprender esta ausencia evita muchísimos plurales raros."
        },
        {
          label: "Much/many y little/few son una prueba de contabilidad",
          body:
            "El español le deja hacer concordancia: mucho café, muchos huevos, poca plata, pocos niños. El inglés cambia la palabra. Coffee, rice, money, time y cilantro se comportan como masas: much coffee, a little rice, too much money. Eggs, bags, books y kids se cuentan uno por uno: many eggs, a few bags, too many kids. Si puede poner un número directo delante en plural, use many/few. Si necesita medirlo por libra, kilo, taza o paquete, probablemente use much/little."
        },
        {
          label: "Comprar en El Paso con medidas mezcladas",
          body:
            "Una tienda latina en El Paso puede vender panela y arepas, pero la conversación salta entre sistemas: a pound of cheese, eight ounces, half a kilo of rice, a dozen eggs, a small bag, a package. En Texas el mostrador suele pensar en pounds y ounces, mientras muchos compradores fronterizos piensan también en kilos y libras. Además, no espere una ñapa como costumbre cultural. Un tendero puede “throw in” a few bananas as a kindness or promotion, pero no es el ritual social colombiano de pedir “¿y la ñapa?”."
        }
      ],
      pitfalls: [
        {
          mistake: "“The coffee is expensive” para hablar del café en general.",
          whyItFails:
            "Con “the”, el inglés entiende un café específico. Para la categoría completa se usa el sustantivo sin artículo. El español exige “el café”; el inglés lo borra.",
          sayInstead: "Coffee is expensive."
        },
        {
          mistake: "“I'm teacher.”",
          whyItFails:
            "Las profesiones contables en singular normalmente necesitan “a/an” en inglés. El español dice “soy profesora” sin artículo, pero el inglés conserva “a teacher”.",
          sayInstead: "I'm a teacher."
        },
        {
          mistake: "“I need a books.”",
          whyItFails:
            "No existe plural de “a/an”. Para plural indefinido use “some books” si quiere marcar cantidad vaga, o “books” si habla en general.",
          sayInstead: "I need some books."
        },
        {
          mistake: "“Do you have much eggs?”",
          whyItFails:
            "Eggs es plural contable, así que necesita “many”, no “much”. Reserve “much” para incontables como coffee, rice, money o time.",
          sayInstead: "Do you have many eggs?"
        },
        {
          mistake: "“At the three” para decir la hora.",
          whyItFails:
            "El español dice “a las tres” con artículo, pero el inglés no: las horas van como “at three”, “at five thirty”. “At the three” suena a calco.",
          sayInstead: "At three."
        }
      ],
      variations: [
        {
          form: "Coffee is expensive here.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Categorías generales, donde el inglés quita el artículo que el español sí usa."
        },
        {
          form: "Monday at three.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Días y horas, normalmente sin artículo en inglés."
        },
        {
          form: "I'm a teacher.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Profesiones singulares, donde el inglés conserva “a/an”."
        },
        {
          form: "Another coffee, please.",
          register: "neutro de servicio",
          region: "Inglés universal",
          whenToUse: "Pedir uno más. En inglés es “another”, no “other coffee” para este sentido."
        },
        {
          form: "There is much rice and few rolls left.",
          register: "careful / grammatical",
          region: "Inglés universal",
          whenToUse: "Mostrar la división: incontable con “much”, contable plural con “few”. En conversación diría más a menudo “a lot of rice”."
        },
        {
          form: "I'll throw in a tiny bit of cilantro.",
          register: "amistoso informal",
          region: "Norteamérica",
          whenToUse: "Añadir una pequeña cantidad gratis o sin darle importancia, parecido a una ñapa pero sin la costumbre colombiana."
        }
      ],
      prompt: "Quiere decir que el café es caro en general, no este café específico. ¿Cuál frase funciona?",
      choices: [
        "Coffee is expensive here.",
        "The coffee is expensive here.",
        "A coffee is expensive here."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Quiere decir “soy profesora” en inglés. ¿Cuál es correcto?",
          choices: [
            "I'm teacher at the center.",
            "I'm a teacher at the center.",
            "I'm the teacher at the center."
          ],
          answer: 1,
          tests: "Profesión singular en inglés: “a teacher”."
        },
        {
          prompt: "Necesita un plural indefinido para “unos libros”. ¿Cuál sirve?",
          choices: [
            "I need some books for class.",
            "I need a books for class.",
            "I need an books for class."
          ],
          answer: 0,
          tests: "No existe plural de “a/an”; use “some books” o “books”."
        },
        {
          prompt: "Quiere preguntar por huevos, que son contables en plural. ¿Cuál frase encaja?",
          choices: [
            "Do you have much eggs today?",
            "Do you have little eggs today?",
            "Do you have many eggs today?"
          ],
          answer: 2,
          tests: "Plural contable: “many eggs”; incontable: “much coffee”."
        },
        {
          prompt: "Quiere decir que el pedido llega a las tres. ¿Cuál es natural?",
          choices: [
            "The delivery comes at three.",
            "The delivery comes at the three.",
            "The delivery comes in the three."
          ],
          answer: 0,
          tests: "Las horas en inglés van sin artículo: “at three”."
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/20-foundation-buying-and-paying.js");
