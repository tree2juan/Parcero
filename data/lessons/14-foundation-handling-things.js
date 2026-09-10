/*
 * Foundation · handling things — three Starter lessons on the verbs a learner
 * reaches for to manage objects, doors and access: usar (to use), abrir (to
 * open) and cerrar (to close). One verb per lesson, each spoken in a real
 * situation rather than drilled on a table.
 *
 * Same shape as 01-foundation-identity.js and 02-foundation-state.js. Each
 * lesson carries a single id and tells the SAME situation twice: the es
 * direction follows Alex, an English speaker learning Colombian Spanish in
 * Colombia, and the en direction follows Alejandra, a Colombian learning
 * English in Texas. The explanation is always in the language the reader
 * already has — English in es, Spanish in en — while title and situation stay
 * Spanish in both, because they name the lesson in the picker.
 *
 * A running honesty ties the three together: Colombian Spanish often prefers a
 * more specific verb to the plain one — meter la clave over usar la clave,
 * coger el bus over usar el bus, abrir una cuenta as a fixed phrase, cerrar el
 * trato, está cerrado as a state against cerraron as an act.
 */
lessons.push(
  {
    id: "getting-set-up-at-the-cafe",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "courteous",
    pathways: ["foundation"],
    verb: "usar",
    review: "pending",
    es: {
      title: "Instalándose a trabajar en el café",
      situation:
        "Llegas a un café de barrio en Bogotá para trabajar un par de horas y necesitas lo básico: una mesa, el wifi, un enchufe para el portátil y, en algún momento, el baño. La barista te atiende de usted y te explica las reglas de la casa mientras te acomodas.",
      setting: {
        who: "Alex, a newcomer settling into remote work in Bogotá, and Daniela, the barista running the counter at a small neighborhood café.",
        what: "Alex asks to use the café's wifi, a power outlet and the bathroom while he sets up to work for a couple of hours.",
        when: "A weekday mid-morning, the quiet stretch after the breakfast rush when the tables start filling with laptops.",
        where: "A café in a residential barrio of Bogotá, the kind of place that quietly doubles as an office for freelancers.",
        why: "Asking to use things politely — and knowing when Colombians would swap “usar” for a warmer, more specific verb — is what turns a stranger into a regular."
      },
      address: {
        form: "usted",
        who: "Daniela addresses Alex as usted, and he answers in kind; it is the standard footing between a customer and someone serving them.",
        why: "In much of Colombia, and especially in the Andes, usted is the warm default rather than the distant one. Service staff use it with everyone, and it signals care, not coldness.",
        ifYouSwitch:
          "If Alex replied with tú, it would not offend, but it can sound oddly familiar with someone he just met over a counter. Staying in usted keeps the easy, respectful register the café runs on all day."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Buenas. ¿Me puedo sentar acá a trabajar un rato y usar el wifi?",
          translation: "Hi. Can I sit here to work for a while and use the wifi?",
          pronunciation: "BWEH-nas. me PWEH-do sen-TAR a-KA a tra-ba-HAR un RA-to i u-SAR el wee-fee",
          literal: "Good. Me I-can to-sit here to to-work a while and to-use the wifi?",
          why: "“Buenas” on its own is the all-purpose Colombian greeting, shorter than “buenos días” and safe at any hour. Wrapping the two infinitives inside “me puedo…” keeps it one soft request instead of two blunt statements of intent."
        },
        {
          speaker: "Daniela",
          target: "Con mucho gusto, siga. ¿Va a usar el wifi? Ya le paso la clave.",
          translation: "Of course, come on in. Are you going to use the wifi? I'll give you the password.",
          pronunciation: "kon MOO-cho GOOS-to, SEE-ga. va a u-SAR el wee-fee? ya le PA-so la KLA-veh",
          literal: "With much pleasure, follow. Goes to to-use the wifi? Already to-you I-pass the key.",
          why: "“Siga” literally means “continue,” but as an invitation it means “come in / go ahead” — one of the most Colombian words there is. “Le paso” takes “le” because she is on usted footing with Alex."
        },
        {
          speaker: "Alex",
          target: "Sí, gracias. ¿Y puedo usar ese enchufe para cargar el computador?",
          translation: "Yes, thanks. And can I use that outlet to charge my laptop?",
          pronunciation: "see, GRA-syas. i PWEH-do u-SAR EH-se en-CHOO-feh PA-ra kar-GAR el kom-poo-ta-DOR",
          literal: "Yes, thanks. And I-can to-use that plug to to-charge the computer?",
          why: "Colombia says “el computador,” not the “computadora” of Mexico or the “ordenador” of Spain. Note “cargar” for charging a device; saying “usar el cargador” would sound like you mean the charger itself, not the act."
        },
        {
          speaker: "Daniela",
          target: "Claro, ese sirve. El de la esquina no lo use, que está flojo.",
          translation: "Sure, that one works. Don't use the one in the corner, it's loose.",
          pronunciation: "KLA-ro, EH-se SEER-veh. el de la es-KEE-na no lo OO-se, ke es-TA FLO-ho",
          literal: "Clear, that-one serves. The of the corner not it use, that is loose.",
          why: "“Sirve” (from servir) is the everyday way to say a small object “works” or “is usable,” more common than “funciona” for things like an outlet. The negative command “no lo use” uses the usted form — “use,” never “usa.”"
        },
        {
          speaker: "Alex",
          target: "Perfecto. Ah, y el baño, ¿lo puedo usar?",
          translation: "Perfect. Oh, and the bathroom, can I use it?",
          pronunciation: "per-FEK-to. a, i el BA-nyo, lo PWEH-do u-SAR?",
          literal: "Perfect. Ah, and the bathroom, it I-can to-use?",
          why: "Naming “el baño” first and then pointing back to it with “lo” is natural spoken order: you set the topic, then ask about it. Many Colombians would soften this even further to “¿me presta el baño?”"
        },
        {
          speaker: "Daniela",
          target: "Es solo para clientes, pero usted ya pidió, así que siga. La clave del baño es la misma del wifi.",
          translation: "It's only for customers, but you already ordered, so go ahead. The bathroom code is the same as the wifi one.",
          pronunciation: "es SO-lo PA-ra klee-EN-tes, PEH-ro oos-TED ya pee-DYO, a-SEE ke SEE-ga. la KLA-veh del BA-nyo es la MEES-ma del wee-fee",
          literal: "Is only for clients, but you already ordered, so-that follow. The key of-the bathroom is the same of-the wifi.",
          why: "“Usted” said out loud here is for warmth and emphasis, not distance — in service Colombian, usted is the friendly default. “Clave” covers both a password and a numeric code, so the same word does double duty."
        }
      ],
      vocabulary: [
        {
          term: "usar",
          explanation: "The general verb “to use,” good for tools, objects, languages, clothes and services. It is correct everywhere and the safest choice when you don't know a more specific verb.",
          literal: "to use",
          useWhen: "You want a neutral, unambiguous “use” — as in “usar tapabocas,” “usar una aplicación” or “usar el baño.”",
          avoidWhen: "A dedicated verb is idiomatic: entering a PIN (“meter la clave”), taking transport (“coger el bus”) or charging a phone (“cargar el celular”).",
          register: "neutral",
          region: "General Spanish, used across all of Colombia; there is no regional restriction on the verb itself.",
          related: ["utilizar", "emplear", "manejar", "hacer uso de"],
          example: { target: "¿Puedo usar el baño, por favor?", translation: "Can I use the bathroom, please?" }
        },
        {
          term: "¿lo puedo usar?",
          explanation: "The everyday way to ask permission to use a specific thing already mentioned; the “lo” or “la” points back to the object so you needn't name it twice.",
          literal: "it can-I to-use?",
          useWhen: "You have just named the thing — a table, an outlet, the bathroom — and want to ask whether you may use it without repeating its name.",
          avoidWhen: "You want to sound extra deferential in a formal office, where “¿sería posible utilizarlo?” fits the room better.",
          register: "neutral",
          region: "General; the fronted word order is universal in spoken Colombian Spanish.",
          related: ["¿puedo usarlo?", "¿se puede usar?", "¿lo puedo coger?", "¿me deja usarlo?"],
          example: { target: "El enchufe de allá, ¿lo puedo usar?", translation: "That outlet over there, can I use it?" }
        },
        {
          term: "¿me regala…?",
          explanation: "A Bogotá and Andean politeness formula. It literally asks “will you gift me…?”, but it softly requests something small — a password, the bill, a napkin — with no idea of an actual gift.",
          literal: "to-me you-gift…?",
          useWhen: "Asking a server or shopkeeper for something minor you expect for free: “¿me regala la clave del wifi?” or “¿me regala la cuenta?”.",
          avoidWhen: "You are asking for something costly or a real favor; “regalar” there sounds like you want it handed over for nothing.",
          register: "polite service",
          region: "Strong in Bogotá and the Andean interior; heard as charmingly odd on the Caribbean coast.",
          related: ["¿me da…?", "¿me pasa…?", "¿me colabora con…?", "¿me hace el favor de…?"],
          example: { target: "¿Me regala la clave del wifi?", translation: "Could you give me the wifi password?" }
        },
        {
          term: "meter la clave",
          explanation: "The fixed verb for entering a password or PIN: you “put in” the code, you don't “use” it. “Digitar” is the same idea in more formal or written contexts.",
          literal: "to-put the key",
          useWhen: "Typing a PIN at a card reader, a wifi password, or an unlock code: “mete la clave y le das a aceptar.”",
          avoidWhen: "Talking about the password as something you possess; for that you simply “tener” or “saber la clave.”",
          register: "neutral",
          region: "General Colombian; “digitar” leans formal while “meter” is the spoken default.",
          related: ["digitar la clave", "poner la clave", "ingresar la clave", "teclear la clave"],
          example: { target: "Mete la clave y le das a aceptar.", translation: "Put in the PIN and press accept." }
        },
        {
          term: "¿me presta el baño?",
          explanation: "Colombians often “borrow” the bathroom rather than “use” it — a warm, homely way to ask that is common in cafés, shops and houses alike.",
          literal: "to-me you-lend the bathroom?",
          useWhen: "Asking to use a bathroom in any casual place; it lands friendlier and less blunt than “¿puedo usar el baño?”.",
          avoidWhen: "Very formal settings, where a plain “¿dónde está el baño, por favor?” is smoother than asking to borrow it.",
          register: "friendly informal",
          region: "Widespread across Colombia; especially natural in homes and small family businesses.",
          related: ["¿me facilita el baño?", "¿puedo pasar al baño?", "¿dónde queda el baño?", "¿me deja usar el baño?"],
          example: { target: "Vecina, ¿me presta el baño un momentico?", translation: "Neighbor, can I use your bathroom for a sec?" }
        },
        {
          term: "el computador",
          explanation: "The Colombian and Andean word for a computer. “Compu” is the affectionate short form, and “portátil” is a laptop specifically.",
          literal: "the computer",
          useWhen: "Referring to a computer anywhere in Colombia; use “el portátil” or “el compu” when you mean a laptop and want to sound casual.",
          avoidWhen: "Speaking with someone from Spain or Mexico and hoping to be understood instantly — they say “ordenador” and “computadora.”",
          register: "neutral",
          region: "Colombia and much of South America; contrasts with Spain's “ordenador.”",
          related: ["el compu", "el portátil", "la máquina", "el equipo"],
          example: { target: "Se me apagó el computador otra vez.", translation: "My computer shut off again." }
        },
        {
          term: "utilizar",
          explanation: "The higher-register twin of “usar.” Identical in meaning but heavier; it suits writing, instructions and formal speech, and sounds stiff over a café counter.",
          literal: "to utilize",
          useWhen: "Formal or written contexts — a manual, an official form, a presentation: “utilice el formulario adjunto.”",
          avoidWhen: "Casual conversation, where it sounds bookish; plain “usar” is warmer and quicker on the tongue.",
          register: "polite formal",
          region: "General; a register choice far more than a regional one.",
          related: ["usar", "emplear", "hacer uso de", "manejar"],
          example: { target: "Utilice el formulario para radicar la solicitud.", translation: "Use the form to file the request." }
        }
      ],
      note:
        "“Usar” is the safe, all-purpose “to use,” and it is never wrong — but natural Colombian Spanish often reaches past it for a sharper verb. You “metes la clave” rather than “usas la clave,” you “coges el bus” rather than “usas el bus,” and you say “¿me presta el baño?” instead of asking to use it. Learn “usar” first, then learn the handful of places where locals quietly avoid it.",
      culture: [
        {
          label: "Why locals dodge “usar”",
          body: "“Usar” is correct, but Colombian Spanish loves a more specific verb, and reaching for the plain one can quietly mark you as a learner. You “metes la clave,” you “coges el bus,” you “cargas el celular,” you “te tomas la pastilla” and you “prendes la luz.” None of those actions takes “usar” in natural speech. The pattern is worth internalising early: when a dedicated verb exists for the action, Colombians almost always prefer it, saving “usar” for when no sharper word is at hand."
        },
        {
          label: "“Regalar,” the coffee-shop softener",
          body: "In Bogotá you will hear “¿me regala…?” a hundred times a day — for the bill, a bag, the wifi password, even your change. It literally means “will you gift me,” yet nobody imagines a gift; it is simply the interior's gentlest way to ask for something small. On the Caribbean coast it can sound quaint, and costeños gently tease bogotanos for it. Answer one “¿me regala…?” with another and you already sound like a local."
        },
        {
          label: "The café as an office",
          body: "In Colombian cities, cafés quietly serve as offices for freelancers, students and remote workers. Ordering something — the “consumo” — buys you a table, the wifi and, informally, the bathroom for as long as you like, and nobody rushes you back out the door. The unwritten deal is simple: consume something, and the space is yours. Asking politely before you use an outlet or the bathroom keeps you on the right side of that easy arrangement."
        },
        {
          label: "“Computador,” a small border marker",
          body: "Which word you choose for a computer quietly places you on the map of Spanish. Colombia and most of South America say “computador”; Mexico and Central America say “computadora”; Spain says “ordenador.” None is more correct than another, but using the local one signals you learned your Spanish here rather than from a course. Little lexical choices like this — “computador,” “tinto,” “sardino” — do more for sounding Colombian than flawless grammar ever will."
        }
      ],
      pitfalls: [
        {
          mistake: "Voy a usar el bus para ir al centro.",
          whyItFails: "Grammatically fine, but Colombians don't “use” transport, they take it. “Usar el bus” sounds translated word for word from English and instantly marks a beginner.",
          sayInstead: "Voy a coger el bus para ir al centro."
        },
        {
          mistake: "¿Puedo utilizar el baño?",
          whyItFails: "“Utilizar” is the formal-register word; in a café it sounds as if you are reading from an instruction manual. The moment calls for something warmer and lighter.",
          sayInstead: "¿Me presta el baño?"
        },
        {
          mistake: "Espera, voy a usar la clave.",
          whyItFails: "You don't “use” a PIN, you put it in. “Usar la clave” makes a native pause; the fixed everyday verb is “meter,” or “digitar” in a more formal register.",
          sayInstead: "Espera, voy a meter la clave."
        },
        {
          mistake: "Usé una ducha en la mañana.",
          whyItFails: "A shower is something you “take,” not “use,” and Colombians most often just say they bathed. “Usar una ducha” sounds oddly mechanical, like operating a machine.",
          sayInstead: "Me bañé en la mañana."
        }
      ],
      variations: [
        {
          form: "¿Puedo usar…?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The safe, direct way to ask permission to use almost anything."
        },
        {
          form: "¿Me presta…?",
          register: "friendly informal",
          region: "Widespread in Colombia",
          whenToUse: "A warmer way to ask to borrow or use a bathroom, phone or small item."
        },
        {
          form: "¿Me regala…?",
          register: "polite service",
          region: "Bogotá and the Andean interior",
          whenToUse: "Softly asking a server for something small, like the wifi password or the bill."
        },
        {
          form: "¿Sería tan amable de…?",
          register: "polite formal",
          region: "General; formal settings",
          whenToUse: "Very polite requests to an official or a stranger you want to impress."
        },
        {
          form: "¿Se puede…?",
          register: "neutral",
          region: "General",
          whenToUse: "An impersonal “is it allowed?”, handy when you don't know who is in charge."
        }
      ],
      prompt: "Daniela says “ya le paso la clave.” What is she offering to do?",
      choices: [
        "Give Alex the wifi password so he can connect his laptop and get to work.",
        "Charge Alex a small cover so he may sit and use the café's outlets today.",
        "Ask Alex to move to another table because that one is reserved for staff."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Why might a Colombian say “¿me presta el baño?” instead of “¿puedo usar el baño?”",
          choices: [
            "Because “usar el baño” is grammatically wrong and no Colombian would ever say it aloud.",
            "Because “prestar” is warmer and homelier, treating the bathroom as something kindly lent.",
            "Because “prestar” is the only verb allowed with rooms, while “usar” is limited to objects."
          ],
          answer: 1,
          tests: "the “prestar” politeness pattern for facilities"
        },
        {
          prompt: "Alex needs to type the PIN at the card reader. Which verb is idiomatic?",
          choices: [
            "“Usar la clave,” since the PIN is a tool he is using to authorize the payment.",
            "“Regalar la clave,” the same soft verb used to ask the barista for the wifi.",
            "“Meter la clave,” the fixed everyday verb for entering a PIN or password."
          ],
          answer: 2,
          tests: "“meter,” not “usar,” for entering a code"
        },
        {
          prompt: "Which word for “computer” marks Alex's Spanish as Colombian rather than European?",
          choices: [
            "“Computador,” the standard Colombian and South American form for the machine.",
            "“Ordenador,” the term he would reach for had he learned his Spanish over in Madrid.",
            "“Computadora,” the version he would hear most had he studied over in Mexico City."
          ],
          answer: 0,
          tests: "regional lexis: computador vs ordenador"
        },
        {
          prompt: "What is wrong with saying “voy a usar el bus para llegar”?",
          choices: [
            "Nothing at all; “usar el bus” is exactly how Colombians describe taking transport.",
            "The article is wrong, so it really ought to be “voy a usar del bus” with a contraction.",
            "Colombians don't “use” transport, they take it: “coger el bus” is the natural phrase."
          ],
          answer: 2,
          tests: "coger/tomar over usar for transport"
        }
      ]
    },
    en: {
      title: "Instalándose a trabajar en la cafetería",
      situation:
        "Usted llega a una cafetería de barrio en Houston para trabajar un par de horas y necesita lo básico: una mesa, el wifi, un enchufe para el portátil y, en algún momento, el baño. La barista lo atiende y le explica las reglas de la casa mientras usted se acomoda.",
      setting: {
        who: "Alejandra, recién llegada a Houston y adaptándose al trabajo remoto, y Megan, la barista que atiende la caja de una pequeña cafetería de barrio.",
        what: "Alejandra pide usar el wifi de la cafetería, un enchufe y el baño mientras se instala a trabajar un par de horas.",
        when: "Un día entre semana a media mañana, esa calma después del desayuno cuando las mesas se llenan de portátiles.",
        where: "Una cafetería en un barrio residencial de Houston, de esas que funcionan como oficina para freelancers.",
        why: "Saber pedir las cosas con cortesía en inglés — donde la amabilidad va en el verbo y no en el pronombre — es lo que la vuelve una clienta habitual en vez de una extraña."
      },
      address: {
        form: "mixed",
        who: "Megan y Alejandra se tratan con un “you” único; el inglés no elige entre tú y usted.",
        why: "El inglés tiene un solo “you”, así que la cortesía no se marca en el pronombre sino en el léxico y el tono: “could I”, “would you mind”, “just” y una voz suave hacen el trabajo que en español haría el usted.",
        ifYouSwitch:
          "Para sonar más formal, Alejandra no cambiaría el “you” sino las palabras: “Could I possibly…?” en lugar de “Can I…?”, y añadiría un “please”. En inglés el registro vive en la elección de palabras, no en el pronombre."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Hi, could I sit here and work for a bit? Do you have wifi?",
          translation: "Hola, ¿podría sentarme aquí a trabajar un rato? ¿Tienen wifi?",
          pronunciation: "jai, kud ai sit jir and uerk for a bit? du yu jav UAI-fai?",
          literal: "Hola, podría yo sentar aquí y trabajar por un rato? ¿Haces tú tener wifi?",
          why: "“Could I…?” es la fórmula cortés por defecto para pedir permiso; el pasado “could” no habla de tiempo sino de cortesía. En inglés la suavización vive en el verbo, no en el pronombre, porque no existe el usted."
        },
        {
          speaker: "Megan",
          target: "Sure, have a seat. The wifi's for customers — I'll write the password down for you.",
          translation: "Claro, siéntese. El wifi es para clientes; le anoto la contraseña.",
          pronunciation: "shur, jav a sit. da UAI-fais for KOS-to-mers — ail rait da PAS-uerd daun for yu",
          literal: "Claro, tener un asiento. El wifi-es para clientes — yo-voy a escribir la contraseña abajo para ti.",
          why: "“Have a seat” es una invitación, no una orden: el inglés usa “have” para ofrecer. “The wifi's” es la contracción de “the wifi is”, normal y esperada en el habla; escrita completa sonaría más rígida."
        },
        {
          speaker: "Alejandra",
          target: "Thanks. And can I use that outlet to charge my laptop?",
          translation: "Gracias. ¿Y puedo usar ese enchufe para cargar el portátil?",
          pronunciation: "zanks. and kan ai yus dat AUT-let tu charch mai LAP-top?",
          literal: "Gracias. ¿Y poder yo usar ese enchufe para cargar mi portátil?",
          why: "Aquí “use” sí es la palabra normal: en inglés no se esquiva como se esquiva “usar” en español. “Outlet” es el enchufe en Norteamérica; en inglés británico sería “socket”."
        },
        {
          speaker: "Megan",
          target: "Sure, that one works. Don't use the one in the corner, though — it's loose.",
          translation: "Claro, ese sirve. No use el de la esquina, eso sí — está flojo.",
          pronunciation: "shur, dat uan uerks. dont yus da uan in da COR-ner, dou — its lus",
          literal: "Claro, ese uno funciona. No usar el uno en la esquina, aunque — está flojo.",
          why: "“Though” al final de la frase significa “eso sí / sin embargo” y es muy común en el inglés hablado. Fíjese que “use” se repite sin problema: el inglés no busca un verbo más específico como haría el español."
        },
        {
          speaker: "Alejandra",
          target: "Got it. And could I use the restroom?",
          translation: "Entendido. ¿Y podría usar el baño?",
          pronunciation: "got it. and kud ai yus da REST-rum?",
          literal: "Tenido eso. ¿Y podría yo usar el baño?",
          why: "En Estados Unidos el baño público es “restroom”; en una casa se dice “bathroom”. Volver al “could I…?” mantiene el tono cortés al pedir algo un poco más personal."
        },
        {
          speaker: "Megan",
          target: "It's for customers, but you've ordered, so go ahead. The code's the same as the wifi.",
          translation: "Es para clientes, pero ya pidió, así que siga. La clave es la misma del wifi.",
          pronunciation: "its for KOS-to-mers, bat yuv OR-derd, so gou a-JED. da kouds da seim as da UAI-fai",
          literal: "Es para clientes, pero tú-has ordenado, así que ir adelante. El código-es el mismo como el wifi.",
          why: "“You've ordered” es presente perfecto: la acción ya pasó pero cuenta ahora, y por eso le da acceso. “Go ahead” es el “siga / adelante” del inglés para dar permiso."
        }
      ],
      vocabulary: [
        {
          term: "Could I use…?",
          explanation: "La forma cortés por defecto para pedir permiso de usar algo. El pasado “could” no marca tiempo, sino cortesía.",
          literal: "¿Podría yo usar…?",
          useWhen: "Casi cualquier pedido de permiso educado: el baño, un enchufe, el wifi, un cargador prestado.",
          avoidWhen: "Entre amigos muy cercanos, donde “can I use…?” o directamente “mind if I…?” suena más natural.",
          register: "polite neutral",
          region: "Inglés universal; vale en Estados Unidos y el Reino Unido por igual.",
          related: ["Can I use…?", "May I use…?", "Do you mind if I use…?", "Is it okay to use…?"],
          example: { target: "Could I use your charger for a minute?", translation: "¿Podría usar tu cargador un momento?" }
        },
        {
          term: "outlet",
          explanation: "El enchufe de pared en el inglés norteamericano. En el Reino Unido se dice “socket” o “power point”.",
          literal: "toma / enchufe",
          useWhen: "Buscar dónde cargar el celular o el portátil en Estados Unidos.",
          avoidWhen: "Con un británico o un australiano, que entienden mejor “socket”; ojo, “outlet” también nombra una tienda de descuentos.",
          register: "neutral",
          region: "Norteamérica; contrasta con el “socket” británico.",
          related: ["socket", "plug", "power point", "charging port"],
          example: { target: "Is there an outlet near this table?", translation: "¿Hay un enchufe cerca de esta mesa?" }
        },
        {
          term: "restroom",
          explanation: "La palabra estadounidense para el baño público. “Bathroom” también sirve y es lo normal en una casa.",
          literal: "cuarto de descanso / baño",
          useWhen: "Preguntar por el baño en un lugar público en Estados Unidos sin sonar demasiado directo.",
          avoidWhen: "En una casa, donde “bathroom” es lo normal; “restroom” suena a local comercial.",
          register: "polite neutral",
          region: "Estados Unidos sobre todo; “toilet” en el Reino Unido.",
          related: ["bathroom", "toilet", "the facilities", "men's room"],
          example: { target: "Excuse me, where's the restroom?", translation: "Disculpe, ¿dónde está el baño?" }
        },
        {
          term: "password",
          explanation: "La contraseña, sobre todo la del wifi. Para la clave de la tarjeta se dice “PIN” a secas, no “password”.",
          literal: "contraseña / clave",
          useWhen: "Pedir la clave del wifi: “what's the wifi password?”.",
          avoidWhen: "Hablando de la clave del cajero o del datáfono, que es el “PIN”, no el “password”.",
          register: "neutral",
          region: "Inglés universal; sin variación regional relevante.",
          related: ["passcode", "wifi code", "PIN", "login"],
          example: { target: "What's the wifi password?", translation: "¿Cuál es la clave del wifi?" }
        },
        {
          term: "Have a seat",
          explanation: "Una invitación cortés a sentarse, armada con “have”. No es una orden, aunque no lleve “please”.",
          literal: "Tenga un asiento",
          useWhen: "Cuando alguien te ofrece sentarte al recibirte, en un café, una oficina o una casa.",
          avoidWhen: "Cuando quieres pedirlo tú; ahí dirías “could I sit here?”, no “have a seat”, que es para ofrecer.",
          register: "friendly informal",
          region: "Inglés universal; muy común en Norteamérica.",
          related: ["Take a seat", "Sit down", "Grab a chair", "Make yourself comfortable"],
          example: { target: "Come in, have a seat.", translation: "Pase, siéntese." }
        },
        {
          term: "laptop",
          explanation: "El computador portátil. “Computer” a secas suele implicar el de escritorio; para el portátil se dice “laptop”.",
          literal: "portátil",
          useWhen: "Referirte al portátil que llevas al café: “I need to charge my laptop.”",
          avoidWhen: "Si quieres decir el de escritorio; ese es “desktop”, no “laptop”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["computer", "desktop", "notebook", "machine"],
          example: { target: "My laptop's about to die.", translation: "El portátil se me va a apagar." }
        },
        {
          term: "go ahead",
          explanation: "La manera corta de dar permiso o luz verde: equivale a “siga”, “adelante” o “dale”.",
          literal: "ve adelante",
          useWhen: "Autorizar a alguien a hacer algo: usar el baño, pasar, empezar a hablar.",
          avoidWhen: "Cuando necesitas ser más formal por escrito; ahí “please proceed” encaja mejor que “go ahead”.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["Sure, go for it", "Please proceed", "By all means", "Feel free"],
          example: { target: "The restroom? Sure, go ahead.", translation: "¿El baño? Claro, siga." }
        }
      ],
      note:
        "En inglés “use” es la palabra normal y no se esquiva como el “usar” del español: “use the wifi”, “use the bathroom” y “use my card” son todas naturales. Lo que cambia es la cortesía, que va en el verbo — “could I use…?” en vez de “can I use…?” — y en suavizadores como “please” y “just”. No busque un pronombre de respeto: no existe. Ponga la cortesía en cómo pide, no en a quién se dirige.",
      culture: [
        {
          label: "En inglés “use” no se esquiva",
          body: "Donde el español prefiere un verbo específico — meter la clave, coger el bus, cargar el celular —, el inglés se queda tranquilo con “use”: “use the wifi”, “use the bathroom”, “use your card”. Para un hispanohablante esto es un alivio y una trampa a la vez: alivio porque una sola palabra cubre casi todo, y trampa porque uno espera que suene pobre repetirla, cuando en inglés es justo lo natural. No busque sinónimos; “use” basta casi siempre."
        },
        {
          label: "La cortesía vive en el verbo",
          body: "El inglés no tiene usted, así que la cortesía no está en el pronombre sino en cómo se arma el pedido. “Could I…?” en vez de “can I…?”, un “please” al final, un “just” que le quita peso: esos son los equivalentes del usted. Un hispanohablante que traduce “¿puedo…?” como “can I…?” no comete un error, pero suena más seco de lo que cree. Subir de “can” a “could” es el gesto que más lo acerca al tono local."
        },
        {
          label: "El café como oficina también allá",
          body: "En las ciudades estadounidenses, igual que en Colombia, los cafés funcionan como oficina de freelancers y estudiantes. Pedir algo — un café, un pan — te da derecho a la mesa, al wifi y, sin decirlo, al baño por el tiempo que quieras; nadie te apura. El trato tácito es el mismo: consume algo y el lugar es tuyo. Pedir permiso antes de usar un enchufe o el baño te mantiene del lado amable de ese acuerdo."
        },
        {
          label: "“Restroom”, “bathroom”, “toilet”",
          body: "La palabra para el baño delata el país. Estados Unidos dice “restroom” o “bathroom”; el Reino Unido, “toilet” sin rodeos, que a un estadounidense le suena algo brusco. Ninguna es incorrecta, pero usar la local ayuda a pasar desapercibido. En una casa se dice “bathroom” en casi todas partes; “restroom” es más para locales comerciales. Elegir bien es un detalle pequeño que suena muy natural."
        }
      ],
      pitfalls: [
        {
          mistake: "“Can I use the bath?”",
          whyItFails: "“Bath” es la tina o el acto de bañarse, no el cuarto. Para el baño público hace falta “restroom” o “bathroom”; “bath” deja a la otra persona imaginando una bañera.",
          sayInstead: "“Could I use the restroom?”"
        },
        {
          mistake: "“What is the password of the wifi?”",
          whyItFails: "El calco de “la clave del wifi” con “of the” suena raro; el inglés antepone el sustantivo: “the wifi password”. Además “what's” es más natural que “what is” en el habla.",
          sayInstead: "“What's the wifi password?”"
        },
        {
          mistake: "“Can I use here to work?”",
          whyItFails: "“Use” pide un objeto: se usa algo. Sin él, la frase queda coja. Aquí lo natural es pedir el sitio o la acción, no “usar el aquí”.",
          sayInstead: "“Could I sit here to work?”"
        },
        {
          mistake: "“I need to charge the battery of my laptop.”",
          whyItFails: "No está mal, pero suena largo y traducido. El inglés dice sencillamente “charge my laptop”; nadie menciona la batería salvo que ese sea el punto.",
          sayInstead: "“I need to charge my laptop.”"
        }
      ],
      variations: [
        {
          form: "Could I use…?",
          register: "polite neutral",
          region: "Inglés universal",
          whenToUse: "La opción segura y cortés para pedir permiso de usar algo."
        },
        {
          form: "Can I use…?",
          register: "neutral",
          region: "Universal, muy común en Norteamérica",
          whenToUse: "Un pedido directo y relajado entre gente de confianza."
        },
        {
          form: "Do you mind if I use…?",
          register: "polite neutral",
          region: "Universal",
          whenToUse: "Cuando quieres ser especialmente considerado; ojo, un “no” aquí significa que sí puedes."
        },
        {
          form: "Mind if I use…?",
          register: "friendly informal",
          region: "Universal, conversacional",
          whenToUse: "La versión corta y casual de lo anterior, entre amigos o compañeros."
        },
        {
          form: "Is it okay to use…?",
          register: "friendly informal",
          region: "Universal",
          whenToUse: "Preguntar si algo está permitido cuando no sabes la regla del lugar."
        }
      ],
      prompt: "Megan dice “The wifi's for customers.” ¿Qué es ese “'s” de “wifi's”?",
      choices: [
        "Es un posesivo: quiere decir que el wifi le pertenece en propiedad a la clienta que llega.",
        "Es un plural: está diciendo que hay varias redes de wifi distintas disponibles para la gente.",
        "Es la contracción de “is”: “the wifi is for customers”, o sea, el wifi es para los clientes."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Por qué “Could I use…?” suena más cortés que “Can I use…?”",
          choices: [
            "Porque “could” añade cortesía y distancia amable; el pasado suaviza el pedido sin cambiar el tiempo real.",
            "Porque “can” está mal escrito en preguntas y “could” es la única forma gramaticalmente correcta.",
            "Porque “could” significa que la acción ya ocurrió, mientras que “can” la deja para el futuro lejano."
          ],
          answer: 0,
          tests: "“could” como suavizador de cortesía"
        },
        {
          prompt: "En Estados Unidos, ¿qué palabra usa Alejandra para el enchufe de la pared?",
          choices: [
            "“Socket”, que es la palabra por defecto en Norteamérica para el enchufe de la pared.",
            "“Outlet”, la palabra norteamericana; en el Reino Unido dirían “socket” en su lugar.",
            "“Plug”, que en realidad nombra la clavija del aparato, no la toma que está en la pared."
          ],
          answer: 1,
          tests: "“outlet” norteamericano frente a “socket”"
        },
        {
          prompt: "Alejandra pide “the restroom”. ¿Qué está pidiendo exactamente?",
          choices: [
            "Un cuarto para descansar, ya que “rest” se relaciona con reposar un rato entre una cosa y otra.",
            "Un lavamanos suelto para enjuagarse las manos rápido antes de volver a la mesa a trabajar.",
            "El baño público; “restroom” es la palabra estadounidense, frente a “toilet” en el Reino Unido."
          ],
          answer: 2,
          tests: "“restroom” = baño en inglés estadounidense"
        },
        {
          prompt: "¿Por qué en inglés se repite “use” sin buscar un verbo más específico?",
          choices: [
            "Porque “use” sólo puede aparecer una vez por conversación y ya se había gastado en otra frase.",
            "Porque el inglés no esquiva “use” como el español esquiva “usar”: repetirla suena natural.",
            "Porque “use” cambia de sentido cada vez, así que repetirla en realidad dice cosas distintas."
          ],
          answer: 1,
          tests: "“use” no se evita como “usar”"
        }
      ]
    }
  },
  {
    id: "signing-up-at-the-bank",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "familiar",
    pathways: ["foundation"],
    verb: "abrir",
    review: "pending",
    es: {
      title: "Abriendo una cuenta en el banco",
      situation:
        "Entras a una sucursal en Medellín para abrir tu primera cuenta de ahorros. El asesor es paisa, te trata de vos con toda la calidez del caso y te explica qué necesitas, cuánto se demora y a qué hora abren, por si te toca volver.",
      setting: {
        who: "Alex, opening his first Colombian bank account, and Óscar, a friendly paisa account adviser at a neighborhood branch.",
        what: "Alex opens a savings account, learns which documents he needs, and asks about the branch's opening hours.",
        when: "A weekday afternoon, comfortably before the branch's four o'clock close.",
        where: "A small bank branch in Medellín, where the advisers are chatty and the paisa vos is the house default.",
        why: "Opening an account is one of the first grown-up errands a newcomer runs, and “abrir” carries the whole scene — the account, the doors and the hours. Getting it right early means Alex can receive his salary, pay rent and set up the everyday transfers that Colombian life increasingly runs on."
      },
      address: {
        form: "vos",
        who: "Óscar addresses Alex with vos — “vos tenés,” “vivís” — the standard second person in Medellín, while Alex answers with neutral “yo” forms.",
        why: "In Medellín and the wider paisa region, vos is the everyday second person, warm rather than rough, and it turns up even in semi-formal places like a bank. It is not the vos of Buenos Aires; the endings differ.",
        ifYouSwitch:
          "If Alex tried vos back — “¿vos me ayudás?” — Óscar would be delighted, though a learner's vos can sound studied. Sticking to “tú” or “usted” forms is perfectly safe; paisas expect an outsider not to vosear yet."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Buenas, vengo a abrir una cuenta de ahorros. ¿Me pueden colaborar?",
          translation: "Hi, I've come to open a savings account. Could you help me?",
          pronunciation: "BWEH-nas, BENG-go a a-BREER OO-na KWEN-ta de a-OR-ros. me PWEH-den ko-la-bo-RAR?",
          literal: "Good, I-come to to-open a account of savings. Me you-can help?",
          why: "“Colaborar” is the Colombian service word for “help,” softer and more common than “ayudar.” “Abrir una cuenta” is a fixed collocation: the account is “opened,” never “made” or “created.”"
        },
        {
          speaker: "Óscar",
          target: "¡Claro, parcero! Con mucho gusto. ¿Vos ya tenés cuenta con nosotros o es la primera vez?",
          translation: "Of course, man! Gladly. Do you already have an account with us, or is it your first time?",
          pronunciation: "KLA-ro, par-SEH-ro! kon MOO-cho GOOS-to. vos ya te-NES KWEN-ta kon no-SO-tros o es la pree-MEH-ra ves?",
          literal: "Clear, buddy! With much pleasure. You already you-have account with us or is the first time?",
          why: "This is paisa vos: “vos tenés,” not “tú tienes” or “usted tiene.” In Medellín vos is the warm everyday form, used freely even across a bank counter, and “parcero” underlines the friendliness."
        },
        {
          speaker: "Alex",
          target: "Es la primera. ¿Qué necesito para abrirla?",
          translation: "It's my first. What do I need to open it?",
          pronunciation: "es la pree-MEH-ra. ke ne-se-SEE-to PA-ra a-BREER-la?",
          literal: "Is the first. What I-need to to-open-it?",
          why: "“Abrirla” tacks the object pronoun “la” (the cuenta) onto the infinitive as one word — standard Spanish. Alex keeps “yo” forms while the paisa asesor uses vos with him; mixing footings like this is completely normal."
        },
        {
          speaker: "Óscar",
          target: "Tu documento y un datico de dónde vivís. Abrimos la cuenta hoy mismo y en media hora quedás listo.",
          translation: "Your ID and a note of where you live. We open the account today and you're all set in half an hour.",
          pronunciation: "tu do-koo-MEN-to i un da-TEE-ko de DON-de bee-BEES. a-BREE-mos la KWEN-ta oi MEES-mo i en MEH-dya O-ra ke-DAS LEES-to",
          literal: "Your document and a little-datum of where you-live. We-open the account today same and in half hour you-stay ready.",
          why: "More vos: “vivís” and “quedás,” where standard would be “vives / quedas.” “Datico” shows the paisa love of the -ico diminutive on words ending in -to; it makes the ask sound small and friendly."
        },
        {
          speaker: "Alex",
          target: "Listo. ¿Y a qué hora abren, por si me toca volver?",
          translation: "Great. And what time do you open, in case I have to come back?",
          pronunciation: "LEES-to. i a ke O-ra A-bren, por see me TO-ka bol-BER?",
          literal: "Ready. And at what hour they-open, for if me touches to-return?",
          why: "“¿A qué hora abren?” is the standard way to ask opening hours, third-person plural “abren” for the business as a whole. “Me toca volver” uses “tocar” for obligation — “I have to,” literally “it touches me,” a very Colombian way to frame something you are stuck doing rather than choosing."
        },
        {
          speaker: "Óscar",
          target: "De ocho a cuatro, parce. Pero tranquilo, que hoy te la dejamos abierta y activa; solo te falta bajar la app.",
          translation: "Eight to four, man. But don't worry, we're leaving it open and active for you today; you just need to download the app.",
          pronunciation: "de O-cho a KWA-tro, PAR-se. PEH-ro tran-KEE-lo, ke oi te la de-HA-mos a-BYER-ta i ak-TEE-va; SO-lo te FAL-ta ba-HAR la ap",
          literal: "From eight to four, buddy. But calm, that today to-you it we-leave open and active; only to-you lacks to-lower the app.",
          why: "Here “abierta” is the state — the account is now open — as against the act of “abrir.” “Bajar la app” is Colombian for “download”; in casual speech you “lower” an app rather than “descargar” it."
        }
      ],
      vocabulary: [
        {
          term: "abrir una cuenta",
          explanation: "The fixed phrase for opening a bank account. The account is always “opened” — never “made,” “created” or “done” — so it pays to learn the collocation whole.",
          literal: "to-open an account",
          useWhen: "Any banking sign-up: a savings account, a business account, a fixed-term deposit (“abrir un CDT”).",
          avoidWhen: "You mean topping up or moving money in an account you already have; that is “consignar” or “abonar,” not “abrir.” Opening happens once, at the very start; everything you do with the balance afterwards uses a different verb entirely.",
          register: "neutral",
          region: "General Colombian; universal Spanish banking language.",
          related: ["abrir un CDT", "abrir cuenta de ahorros", "cerrar una cuenta", "cuenta corriente"],
          example: { target: "Quiero abrir una cuenta de ahorros.", translation: "I want to open a savings account." }
        },
        {
          term: "¿a qué hora abren?",
          explanation: "The everyday way to ask a business's opening time, using third-person plural for “they / the place.” Pair it with “¿a qué hora cierran?” for closing.",
          literal: "at what hour they-open?",
          useWhen: "Asking a shop, bank, office or restaurant when it opens for the day.",
          avoidWhen: "Asking when a one-off event starts; there you would say “¿a qué hora empieza?”.",
          register: "neutral",
          region: "General across Colombia.",
          related: ["¿a qué hora cierran?", "¿hasta qué hora?", "¿están abiertos?", "horario de atención"],
          example: { target: "¿A qué hora abren los domingos?", translation: "What time do you open on Sundays?" }
        },
        {
          term: "está abierto",
          explanation: "The state of being open, built from estar plus the participle. It reports the result — the door is open — not the act of opening it.",
          literal: "is open",
          useWhen: "Saying that a place or thing is currently open: “el banco está abierto,” “la cuenta ya está abierta.”",
          avoidWhen: "Describing the action of opening; for that use the verb “abrir” itself (“están abriendo”).",
          register: "neutral",
          region: "General.",
          related: ["está cerrado", "sigue abierto", "quedó abierta", "abierto al público"],
          example: { target: "¿El banco todavía está abierto?", translation: "Is the bank still open?" }
        },
        {
          term: "vos tenés",
          explanation: "The paisa second person: vos with its own verb ending, “tenés” for “you have.” Warm and completely standard in Medellín, not slang.",
          literal: "you you-have",
          useWhen: "Understanding, and later using, the Medellín voseo: “vos sabés,” “vos querés,” “vos vivís.”",
          avoidWhen: "In Bogotá or on the coast, where vos is rarer; there “tú tienes” or “usted tiene” fits better.",
          register: "friendly informal",
          region: "Medellín and the paisa region (Antioquia, Eje Cafetero); also the Valle.",
          related: ["vos sabés", "vos querés", "vos podés", "vení pues"],
          example: { target: "¿Vos ya tenés la app del banco?", translation: "Do you already have the bank's app?" }
        },
        {
          term: "la cédula",
          explanation: "The national ID card, the document you show for almost any official errand. A foreigner shows a passport or a “cédula de extranjería” instead.",
          literal: "the ID card",
          useWhen: "Any bureaucratic or banking context that asks you to identify yourself.",
          avoidWhen: "You specifically mean a passport for travel; that is “el pasaporte.”",
          register: "neutral",
          region: "General Colombian; the word is used countrywide.",
          related: ["el documento", "la cédula de extranjería", "el pasaporte", "la tarjeta de identidad"],
          example: { target: "Necesito la cédula para abrir la cuenta.", translation: "I need your ID to open the account." }
        },
        {
          term: "bajar la app",
          explanation: "Colombian casual for downloading an app — you “lower” it. “Descargar” is the more formal or written verb for the same act.",
          literal: "to-lower the app",
          useWhen: "Telling someone to install an app in everyday speech: “bajá la app y te registrás.”",
          avoidWhen: "Formal instructions or written manuals, where “descargar” reads better.",
          register: "friendly informal",
          region: "General Colombian; “bajar” for downloads is widespread.",
          related: ["descargar", "instalar", "bajarse la app", "actualizar"],
          example: { target: "Bajá la app y activás la cuenta ahí.", translation: "Download the app and activate the account there." }
        },
        {
          term: "colaborar",
          explanation: "In Colombian service Spanish, “colaborar” simply means “to help.” A clerk asks “¿le colaboro?” and a customer asks the same way — softer than “ayudar.”",
          literal: "to collaborate",
          useWhen: "Asking for or offering help in a shop, office or bank: “¿me colabora con…?”.",
          avoidWhen: "You mean joint work on a project; there “colaborar” keeps its literal “collaborate” sense and could confuse.",
          register: "polite service",
          region: "Very Colombian; especially common in the cities.",
          related: ["ayudar", "¿me colabora?", "hacer el favor", "echar una mano"],
          example: { target: "¿Me colabora con la apertura de la cuenta?", translation: "Could you help me open the account?" }
        }
      ],
      note:
        "“Abrir” is your all-purpose “open,” and it stretches a long way: you “abres una cuenta,” a shop “abre” at eight, a road can be “abierta,” and an opportunity can “abrirte puertas.” The one distinction to hold onto is state versus act: “abrimos la cuenta” (we open it, the action) against “la cuenta está abierta” (it is open, the result). Spanish marks that with estar plus the participle, right where English just says “open.”",
      culture: [
        {
          label: "The Medellín vos",
          body: "In Medellín and across Antioquia, the everyday “you” is neither tú nor usted but vos: “vos sabés,” “vos tenés,” “¿vos qué hacés?” It is warm, not rough, and paisas use it with friends, family and, often, customers. Crucially, it is not the vos of Argentina — the verb endings differ, and so does the music of it. A newcomer need not adopt it, but recognizing it is essential, because in Medellín you will hear it constantly, in shops and banks alike."
        },
        {
          label: "“Abrir una cuenta,” a welded phrase",
          body: "Some verb-plus-noun pairs in Spanish are fused, and “abrir una cuenta” is one of them. You do not “make,” “create” or “do” an account; you open it, and later you close it — “cerrar la cuenta.” English speakers often reach for “hacer” because they translate “set up,” but that lands wrong here. Learning these collocations whole — abrir una cuenta, tomar una decisión, dar un paseo — saves you from assembling them wrongly, word by word."
        },
        {
          label: "The paisa diminutive",
          body: "Paisas soften almost everything with diminutives, and they keep a special one: words ending in -to take “-ico” rather than “-ito,” so “un momento” becomes “un momentico,” “un rato” a “ratico,” “un dato” a “datico.” It signals warmth and a light touch, not literal smallness. You will hear it woven through Medellín speech all day, and using it yourself — “un tintico,” “ahí mismico” — is a quick way to sound at home in Antioquia."
        },
        {
          label: "Banking hours and the paisa welcome",
          body: "Colombian banks usually open around eight and close by four, and some branches still shut for lunch, so “¿a qué hora abren?” is a genuinely useful question. What surprises many newcomers is the tone: even in a bank, a paisa adviser may greet you with “parcero,” slip into vos, and treat the paperwork like a friendly chat. The warmth is real, not a sales tactic — it is simply how service tends to sound in Medellín."
        }
      ],
      pitfalls: [
        {
          mistake: "Quiero hacer una cuenta nueva.",
          whyItFails: "Accounts are “opened,” not “made.” “Hacer una cuenta” calques the English “make an account” and sounds off; the welded phrase is “abrir una cuenta.”",
          sayInstead: "Quiero abrir una cuenta nueva."
        },
        {
          mistake: "El banco es abierto hasta las cuatro.",
          whyItFails: "Being open is a state, so it takes estar, not ser: “está abierto.” “Es abierto” describes a permanent trait, not today's hours.",
          sayInstead: "El banco está abierto hasta las cuatro."
        },
        {
          mistake: "¿A qué hora abre ustedes?",
          whyItFails: "The verb must agree with “ustedes,” so it is “abren,” not “abre.” The singular slips out when English keeps the verb flat across persons.",
          sayInstead: "¿A qué hora abren?"
        },
        {
          mistake: "Voy a descargar la cédula para el banco.",
          whyItFails: "You don't “download” an ID — that mixes up registers. You bring or show the cédula; you download (or “bajar”) an app, not a document you carry.",
          sayInstead: "Voy a llevar la cédula para el banco."
        }
      ],
      variations: [
        {
          form: "¿A qué hora abren?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Asking any business what time it opens for the day."
        },
        {
          form: "¿Están abiertos?",
          register: "neutral",
          region: "General",
          whenToUse: "Checking whether a place is open right now."
        },
        {
          form: "Vengo a abrir una cuenta.",
          register: "polite service",
          region: "General",
          whenToUse: "Stating your errand plainly at a bank counter."
        },
        {
          form: "¿Vos me abrís la cuenta hoy?",
          register: "friendly informal",
          region: "Medellín / paisa",
          whenToUse: "Asking in paisa vos whether it can be done today."
        },
        {
          form: "Quisiera abrir una cuenta, por favor.",
          register: "polite formal",
          region: "General",
          whenToUse: "A more formal, careful request to an adviser."
        }
      ],
      prompt: "Óscar says “hoy te la dejamos abierta y activa.” What does “abierta” describe here?",
      choices: [
        "The action of opening the account, which the adviser is carrying out at this very moment.",
        "The state of the account once opened — it is now open and ready for Alex to use.",
        "A promise to reopen the branch's doors early tomorrow so that Alex can come back sooner."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which verb goes with “una cuenta” when you sign up at a bank?",
          choices: [
            "“Hacer,” because in English you “make” an account and the logic carries straight over.",
            "“Crear,” since the bank is bringing a brand-new account into existence for the customer.",
            "“Abrir,” the welded collocation: you open an account and later you close it."
          ],
          answer: 2,
          tests: "the collocation abrir/cerrar una cuenta"
        },
        {
          prompt: "How do you say “the bank is open until four” about today's hours?",
          choices: [
            "“El banco está abierto hasta las cuatro,” using estar for a current state.",
            "“El banco es abierto hasta las cuatro,” using ser as with any lasting description.",
            "“El banco tiene abierto hasta las cuatro,” using tener to hold the hours open."
          ],
          answer: 0,
          tests: "estar, not ser, for the state abierto"
        },
        {
          prompt: "Óscar asks “¿vos ya tenés cuenta?” What form of “you” is “tenés”?",
          choices: [
            "The usted form, the polite second person a bank clerk would normally choose.",
            "The paisa vos form, Medellín's warm everyday “you have,” standard even at a bank.",
            "The ustedes form, addressing Alex and a group of people standing with him at once."
          ],
          answer: 1,
          tests: "recognizing Medellín voseo (tenés)"
        },
        {
          prompt: "Óscar says “te falta bajar la app.” What does “bajar” mean here?",
          choices: [
            "To download the app, the casual Colombian sense of “bajar” for getting software.",
            "To lower the phone's volume down before the app will finish installing correctly.",
            "To go downstairs to the branch's ground floor, where the app is set up in person."
          ],
          answer: 0,
          tests: "“bajar” = download in casual Colombian"
        }
      ]
    },
    en: {
      title: "Abriendo una cuenta bancaria",
      situation:
        "Usted entra a una sucursal en Houston para abrir su primera cuenta de ahorros. El asesor es cordial y directo, le explica qué documentos necesita, cuánto se demora y a qué hora abren, por si le toca volver otro día.",
      setting: {
        who: "Alejandra, abriendo su primera cuenta bancaria en Estados Unidos, y Brian, un asesor cordial de una sucursal de barrio.",
        what: "Alejandra abre una cuenta de ahorros, se entera de qué documentos necesita y pregunta a qué hora abre la sucursal.",
        when: "Una tarde entre semana, con tiempo de sobra antes de que el banco cierre a las cinco.",
        where: "Una pequeña sucursal bancaria en Houston, donde el trato es amable pero más breve que en Medellín.",
        why: "Abrir una cuenta es uno de los primeros trámites de adulto que hace un recién llegado, y en inglés “open” carga con casi toda la escena."
      },
      address: {
        form: "mixed",
        who: "Brian y Alejandra se tratan con un “you” único; el inglés no distingue entre tú y usted.",
        why: "El inglés tiene un solo “you”, así que la cercanía no se marca en el pronombre sino en el nombre de pila, la sonrisa y frases como “you're all set”. La formalidad va en las palabras, no en un pronombre de respeto.",
        ifYouSwitch:
          "Para sonar más formal, Alejandra no cambia el “you” sino el envoltorio: “Could I open an account, please?” en vez de “I want to open an account”. El registro en inglés vive en el verbo y en los suavizadores, no en el pronombre."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Hi, I've come to open a savings account. Could you help me?",
          translation: "Hola, vengo a abrir una cuenta de ahorros. ¿Me puede colaborar?",
          pronunciation: "jai, aiv kam tu OU-pen a SEI-vings a-KAUNT. kud yu jelp mi?",
          literal: "Hola, yo-he venido a abrir una ahorros cuenta. ¿Podrías tú ayudar me?",
          why: "En inglés “open an account” funciona igual que en español: aquí el calco sí sirve. Fíjese en el orden “savings account”, con el tipo delante del sustantivo y sin “of”."
        },
        {
          speaker: "Brian",
          target: "Of course. Do you already have an account with us, or is this your first one?",
          translation: "Claro. ¿Ya tiene cuenta con nosotros o es la primera?",
          pronunciation: "of kors. du yu ol-RE-di jav an a-KAUNT uid as, or is dis yor ferst uan?",
          literal: "De curso. ¿Haces tú ya tener una cuenta con nosotros, o es esta tu primera una?",
          why: "“Do you already have…?” arma la pregunta con el auxiliar “do”, que el español no tiene. “First one” usa “one” para no repetir “account”; el inglés evita repetir el sustantivo."
        },
        {
          speaker: "Alejandra",
          target: "It's my first one. What do I need to open it?",
          translation: "Es la primera. ¿Qué necesito para abrirla?",
          pronunciation: "its mai ferst uan. uot du ai nid tu OU-pen it?",
          literal: "Es mi primera una. ¿Qué hago yo necesitar para abrir lo?",
          why: "Otra vez el auxiliar: “what do I need?”, no “what I need?”. Y “to open it”, con el “it” después del verbo, mientras el español lo pega al infinitivo en “abrirla”."
        },
        {
          speaker: "Brian",
          target: "Photo ID and proof of address. We'll open it today, and you're all set in half an hour.",
          translation: "Un documento con foto y un comprobante de domicilio. La abrimos hoy y en media hora queda lista.",
          pronunciation: "FOU-tou ai-DI and pruf ov a-DRES. uil OU-pen it tu-DEI, and yor ol set in jaf an AU-er",
          literal: "Foto identificación y prueba de dirección. Nosotros-vamos abrir lo hoy, y estás todo listo en media una hora.",
          why: "“Proof of address” es incontable: no lleva “a”. “You're all set” es la frase de servicio para “ya quedó listo”, muy usada en Norteamérica al cerrar un trámite."
        },
        {
          speaker: "Alejandra",
          target: "Great. And what time do you open, in case I have to come back?",
          translation: "Perfecto. ¿Y a qué hora abren, por si me toca volver?",
          pronunciation: "greit. and uot taim du yu OU-pen, in keis ai jav tu kam bak?",
          literal: "Genial. ¿Y qué hora haces tú abrir, en caso yo tener que venir atrás?",
          why: "“What time do you open?” es la fórmula natural; el calco “at what hour” suena raro. “In case” introduce la precaución, como el “por si” del español."
        },
        {
          speaker: "Brian",
          target: "Nine to five. But don't worry, it's open and active today — you just need to download the app.",
          translation: "De nueve a cinco. Pero tranquila, hoy queda abierta y activa; solo le falta descargar la app.",
          pronunciation: "nain tu faiv. bat dont UO-ri, its OU-pen and AK-tiv tu-DEI — yu yast nid tu daun-LOUD di ap",
          literal: "Nueve a cinco. Pero no preocupar, está abierta y activa hoy — tú justo necesitar descargar la app.",
          why: "“It's open” es el estado, el resultado de abrir, igual que “está abierta” en español. “Download”, no el calco “lower” de “bajar”: en inglés siempre se “descarga”."
        }
      ],
      vocabulary: [
        {
          term: "open an account",
          explanation: "En inglés también se “abre” una cuenta: “open an account”. Aquí el calco del español funciona, a diferencia de otros verbos.",
          literal: "abrir una cuenta",
          useWhen: "Cualquier trámite bancario: cuenta de ahorros, cuenta corriente, un plazo fijo.",
          avoidWhen: "Para meter dinero a una cuenta que ya tienes; eso es “deposit”, no “open”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["open a savings account", "open a chequing account", "close an account", "set up an account"],
          example: { target: "I'd like to open a savings account.", translation: "Quisiera abrir una cuenta de ahorros." }
        },
        {
          term: "What time do you open?",
          explanation: "La forma natural de preguntar el horario de apertura. El inglés dice “what time”, nunca “at what hour”.",
          literal: "¿Qué hora abres tú?",
          useWhen: "Preguntar a una tienda, banco u oficina a qué hora abre.",
          avoidWhen: "Para el inicio de un evento puntual; ahí es “what time does it start?”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["What time do you close?", "What are your hours?", "Are you open?", "When do you open?"],
          example: { target: "What time do you open on Saturdays?", translation: "¿A qué hora abren los sábados?" }
        },
        {
          term: "savings account",
          explanation: "La cuenta de ahorros. Cuidado con el orden: “savings” va antes de “account”, y no hay “of”.",
          literal: "cuenta de ahorros",
          useWhen: "Nombrar el tipo de cuenta que abres para guardar dinero.",
          avoidWhen: "Para la cuenta del día a día con tarjeta de débito; en Estados Unidos esa es “chequing account”.",
          register: "neutral",
          region: "Inglés norteamericano; en el Reino Unido “current account” por “chequing”.",
          related: ["chequing account", "current account", "joint account", "term deposit"],
          example: { target: "Is this a savings or a chequing account?", translation: "¿Esta es cuenta de ahorros o corriente?" }
        },
        {
          term: "photo ID",
          explanation: "Un documento con foto que sirve de identificación: pasaporte, licencia, tarjeta de residencia. “ID” se dice “ai-DI”.",
          literal: "identificación con foto",
          useWhen: "Cuando te piden identificarte en un banco, un trámite o un control.",
          avoidWhen: "Si necesitas específicamente el pasaporte para viajar; ahí di “passport”.",
          register: "neutral",
          region: "Inglés universal; “ID” es universal.",
          related: ["passport", "driver's license", "piece of ID", "identification"],
          example: { target: "Do you have a piece of photo ID?", translation: "¿Tiene un documento con foto?" }
        },
        {
          term: "proof of address",
          explanation: "El comprobante de dónde vives — un recibo, un extracto. Es incontable, así que no lleva “a”.",
          literal: "prueba de domicilio",
          useWhen: "Trámites que piden demostrar tu dirección: banco, arriendo, servicios.",
          avoidWhen: "Si te piden la dirección hablada y no el documento; eso es solo “your address”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["a utility bill", "bank statement", "lease", "piece of mail"],
          example: { target: "Bring proof of address, like a utility bill.", translation: "Trae un comprobante de domicilio, como un recibo." }
        },
        {
          term: "you're all set",
          explanation: "Frase para decir que ya está todo listo: “quedaste listo”, “ya está”. Muy común en el servicio.",
          literal: "estás todo listo",
          useWhen: "Cuando terminas un trámite y el empleado te avisa que ya acabaste.",
          avoidWhen: "Como pregunta; para eso es “are you all set?” con la entonación hacia arriba.",
          register: "friendly informal",
          region: "Inglés norteamericano sobre todo.",
          related: ["you're good to go", "all done", "that's everything", "you're ready"],
          example: { target: "That's it — you're all set.", translation: "Eso es todo; ya quedó listo." }
        },
        {
          term: "download",
          explanation: "Bajar o descargar algo de internet. En inglés siempre “download”; no existe el calco “lower” del “bajar” español.",
          literal: "descargar",
          useWhen: "Instalar una app o bajar un archivo: “download the app”.",
          avoidWhen: "Para subir algo a la nube; eso es “upload”, lo contrario.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["upload", "install", "get the app", "the app"],
          example: { target: "Download the app to activate your account.", translation: "Descarga la app para activar la cuenta." }
        }
      ],
      note:
        "Buena noticia: en inglés “open” cubre casi lo mismo que “abrir”. Se “abre” una cuenta (“open an account”), una tienda “opens” a cierta hora, y algo “is open” cuando está abierto. El calco del verbo funciona; lo que hay que cuidar es el entorno — “savings account” y no “account of savings”, “what time” y no “at what hour”, “download” y no “lower”. Aprende el verbo tranquilo y vigila las palabras que lo rodean.",
      culture: [
        {
          label: "Aquí el calco de “abrir” sí funciona",
          body: "Buena noticia para el hispanohablante: en inglés también se “abre” una cuenta, “open an account”, y una tienda “opens” a cierta hora. El verbo “open” cubre casi lo mismo que “abrir”, así que muchas frases se traducen directo. El tropiezo no está en el verbo sino en el orden y en las palabras vecinas: “savings account” y no “account of savings”, “what time” y no “at what hour”. El verbo es fácil; el entorno es lo que hay que cuidar."
        },
        {
          label: "“Chequing” y “savings”",
          body: "En Estados Unidos hay dos cuentas básicas: la “chequing account”, para el día a día y la tarjeta de débito, y la “savings account”, para guardar y ganar algo de interés. En el Reino Unido la del día a día se llama “current account”. Al abrir cuenta te preguntarán cuál quieres, así que conviene tener claras las palabras. Y ojo con la ortografía estadounidense: “chequing” con q, distinta del “checking” estadounidense."
        },
        {
          label: "“Photo ID” y el papeleo",
          body: "Para abrir una cuenta en Estados Unidos te pedirán “photo ID” — un documento con foto — y a veces “proof of address”, un comprobante de domicilio como un recibo de servicios. Como recién llegada, tu identificación será el pasaporte o la tarjeta de residencia, no una cédula local. Vale la pena aprender estas etiquetas porque aparecen en todos los trámites: banco, arriendo, biblioteca. Llevar los papeles correctos la primera vez te ahorra una segunda vuelta."
        },
        {
          label: "El tono del banco norteamericano",
          body: "El empleado de banco en Estados Unidos suele ser cordial y directo, pero sin el “parcero” ni el vos de Medellín: la cercanía se marca con el nombre de pila, una sonrisa y frases como “you're all set” o “have a great day”. No esperes tanta charla, pero tampoco lo tomes por frialdad; es otra manera de ser amable. Devolver un “thanks so much, you too” te pone justo en el tono correcto."
        }
      ],
      pitfalls: [
        {
          mistake: "“At what hour do you open?”",
          whyItFails: "Es un calco de “¿a qué hora abren?”. El inglés no dice “at what hour” en el habla normal; usa “what time”.",
          sayInstead: "“What time do you open?”"
        },
        {
          mistake: "“I'd like to open an account of savings.”",
          whyItFails: "El “of” calca “cuenta de ahorros”. El inglés antepone el tipo al sustantivo: “a savings account”, sin “of”.",
          sayInstead: "“I'd like to open a savings account.”"
        },
        {
          mistake: "“I need a proof of address.”",
          whyItFails: "Aquí “proof” es incontable y no lleva “a”. Se dice “proof of address” o “some proof of address”.",
          sayInstead: "“I need proof of address.”"
        },
        {
          mistake: "“Can you open the water?”",
          whyItFails: "En español se “abre la llave”, pero en inglés el agua y la luz se “turn on”, no se “open”. “Open the water” no se dice.",
          sayInstead: "“Can you turn on the faucet?”"
        }
      ],
      variations: [
        {
          form: "What time do you open?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Preguntar el horario de apertura de un negocio."
        },
        {
          form: "Are you open on Sundays?",
          register: "neutral",
          region: "Universal",
          whenToUse: "Confirmar si abren un día concreto."
        },
        {
          form: "I'd like to open an account.",
          register: "polite neutral",
          region: "Universal",
          whenToUse: "Decir tu trámite con cortesía en la ventanilla."
        },
        {
          form: "I'm here to open an account.",
          register: "friendly informal",
          region: "Norteamérica",
          whenToUse: "Presentar tu trámite de forma directa y relajada."
        },
        {
          form: "Could I open a savings account, please?",
          register: "polite formal",
          region: "Universal",
          whenToUse: "Un pedido más formal y cuidado al asesor."
        }
      ],
      prompt: "Brian dice “you're all set.” ¿Qué le está diciendo a Alejandra?",
      choices: [
        "Que ya terminó el trámite y quedó todo listo; no le falta nada más por hacer hoy.",
        "Que debe sentarse a esperar en la sala porque todavía falta un buen rato de papeleo.",
        "Que la cuenta quedó en pausa y tiene que volver otro día con más documentos encima."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cómo se pregunta en inglés natural a qué hora abre el banco?",
          choices: [
            "“At what hour do you open?”, calcando “¿a qué hora?” palabra por palabra desde el español.",
            "“What time do you open?”, que es la fórmula natural; el inglés usa “what time”.",
            "“In what hour are you opening?”, mezclando el gerundio con una preposición equivocada."
          ],
          answer: 1,
          tests: "“what time”, no “at what hour”"
        },
        {
          prompt: "¿Cuál es el orden correcto para “cuenta de ahorros” en inglés?",
          choices: [
            "“Account of savings”, siguiendo el mismo orden que lleva la frase en español.",
            "“Savings of account”, invirtiendo las dos palabras pero conservando la “of” del medio.",
            "“Savings account”, con el tipo delante del sustantivo y sin ninguna “of”."
          ],
          answer: 2,
          tests: "orden de “savings account” sin “of”"
        },
        {
          prompt: "Brian dice “download the app.” ¿Por qué no se dice “lower the app”?",
          choices: [
            "Porque “bajar” se traduce como “download” para software; “lower” es bajar de altura o volumen.",
            "Porque “lower” sólo se usa con aplicaciones de banco, y esta es una app de otro tipo.",
            "Porque “download” y “lower” significan lo mismo, pero “lower” suena demasiado formal aquí."
          ],
          answer: 0,
          tests: "“download”, no el calco “lower” de “bajar”"
        },
        {
          prompt: "¿Por qué se dice “proof of address” y no “a proof of address”?",
          choices: [
            "Porque “proof” siempre va en plural, “proofs”, cuando se trata de documentos oficiales.",
            "Porque el banco sólo acepta un único tipo de comprobante, así que el artículo sobra ahí.",
            "Porque “proof” aquí es incontable y no lleva el artículo “a”; se dice “proof of address”."
          ],
          answer: 2,
          tests: "“proof” incontable, sin “a”"
        }
      ]
    }
  },
  {
    id: "catching-the-shop-before-it-closes",
    level: "Starter · Home and neighborhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "familiar",
    pathways: ["foundation"],
    verb: "cerrar",
    review: "pending",
    es: {
      title: "Antes de que bajen la reja",
      situation:
        "Llegas a una tienda de barrio en Barranquilla casi a la hora del cierre y tratas de comprar algo rápido antes de que cierren y bajen la reja.",
      setting: {
        who: "Alex, hurrying to grab a couple of things, and Wilmer, the costeño owner of a corner shop who is minutes from closing up for the night.",
        what: "Alex catches the shop just before closing, asks the hours, haggles a little and seals a small deal before the grille comes down.",
        when: "A little before eight in the evening, right as the shop is about to close for the night.",
        where: "A tienda de barrio in Barranquilla, on the Caribbean coast, where the owner speaks warm, fast costeño and addresses everyone with tú.",
        why: "Closing time is when “cerrar” does its most useful work: the hours, the grille, the doors and even the price all hang on that one verb, and the coast frames it all in tú."
      },
      address: {
        form: "tú",
        who: "Wilmer addresses Alex with tú — “¿qué buscas?,” “llévate” — the default second person along the Caribbean coast, and Alex answers him in kind.",
        why: "On Colombia's Caribbean coast, tú is the everyday form, far more than the interior's usted or the paisa vos. Costeño speech is quick and warm, and it often drops the final -s, so “¿a qué hora cierras?” can sound like “¿a qué hora cierra'?”.",
        ifYouSwitch:
          "If Alex slipped into usted, Wilmer would find it oddly stiff for a corner-shop chat, though never rude. Save usted for offices, older strangers and moments you want to sound especially respectful; on the coast, tú is the warm default that fits almost everywhere."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "¡Buenas! ¿Todavía estás abierto? ¿A qué hora cierras?",
          translation: "Hi! Are you still open? What time do you close?",
          pronunciation: "BWEH-nas! to-da-VEE-a es-TAS a-BYER-to? a ke O-ra SYEH-rras?",
          literal: "Good! Still you-are open? At what hour you-close?",
          why: "Two halves of the theme in one breath: “estás abierto” is the state (are you open right now), while “¿a qué hora cierras?” asks the closing time with tú, the coastal default."
        },
        {
          speaker: "Wilmer",
          target: "Ajá, sí, pero ya vamos a cerrar, llave. Dime rápido qué necesitas.",
          translation: "Yeah, we are, but we're about to close, man. Tell me quick what you need.",
          pronunciation: "a-HA, see, PEH-ro ya BA-mos a se-RRAR, YA-ve. DEE-me RA-pi-do ke ne-se-SEE-tas?",
          literal: "Aha, yes, but already we-go to to-close, key. Tell-me fast what you-need.",
          why: "“Vamos a cerrar” is the near future — the act of closing is imminent, not done. “Ajá” is the costeño all-purpose “yeah, go on,” and “llave” (literally “key”) is coastal slang for a close friend."
        },
        {
          speaker: "Alex",
          target: "Vi la reja medio cerrada y pensé que ya estabas cerrado. ¿Me vendes dos gaseosas?",
          translation: "I saw the grille half down and thought you were already closed. Can you sell me two sodas?",
          pronunciation: "bee la RE-ha MEH-dyo se-RRA-da i pen-SE ke ya es-TA-bas se-RRA-do. me BEN-des dos ga-SEH-o-sas?",
          literal: "I-saw the grille half closed and I-thought that already you-were closed. Me you-sell two sodas?",
          why: "“Estabas cerrado” is the state again, now in the past — “you were closed.” Note the agreement: “cerrada” matches the feminine “reja,” while “cerrado” matches the masculine sense of the shop being shut."
        },
        {
          speaker: "Wilmer",
          target: "No, todavía abierto. Hoy cerraron la vía por un desfile, por eso se ve tan solo. Llévate las gaseosas.",
          translation: "No, still open. They closed the road today for a parade, that's why it looks so empty. Take the sodas.",
          pronunciation: "no, to-da-VEE-a a-BYER-to. oi se-RRA-ron la BEE-a por un des-FEE-le, por E-so se ve tan SO-lo. YE-va-te las ga-SEH-o-sas.",
          literal: "No, still open. Today they-closed the road for a parade, for that itself sees so alone. Take-yourself the sodas.",
          why: "“Cerraron la vía” uses the bare third-person plural — “they closed the road,” with no named subject — the standard way Colombians report a closure. “Llévate” is a tú command with a reflexive flavor: take them for yourself."
        },
        {
          speaker: "Alex",
          target: "De una. ¿Me haces precio si llevo dos? ¿Cerramos en cinco mil?",
          translation: "For sure. Will you give me a deal if I take two? Shall we settle on five thousand?",
          pronunciation: "de OO-na. me A-ses PRE-syo see YE-vo dos? se-RRA-mos en SEEN-ko mil?",
          literal: "Of one. Me you-make price if I-take two? We-close on five thousand?",
          why: "“¿Cerramos en cinco mil?” bends “cerrar” to sealing a price — closing the deal. “Hacer precio” is to knock something off, and “de una” is a very Colombian “right away / for sure.”"
        },
        {
          speaker: "Wilmer",
          target: "Listo, cerramos el trato. Pero cierra tú la puerta al salir, que ya bajo la reja.",
          translation: "Done, it's a deal. But you close the door on your way out, since I'm about to bring the grille down.",
          pronunciation: "LEES-to, se-RRA-mos el TRA-to. PEH-ro SYEH-rra tu la PWER-ta al sa-LEER, ke ya BA-ho la RE-ha.",
          literal: "Ready, we-close the deal. But close you the door upon to-leave, that already I-lower the grille.",
          why: "Three senses of “cerrar” land at once: “cerramos el trato” (seal the deal), “cierra la puerta” (physically shut it, a tú command), and “bajo la reja” (I close up shop). One verb family, three everyday jobs."
        }
      ],
      vocabulary: [
        {
          term: "cerrar",
          explanation: "The all-purpose “to close”: doors, shops, roads and deals all take it. It is stem-changing — the e turns to ie in the present (“cierro,” “cierras,” “cierra”) but stays put in “cerramos.”",
          literal: "to-close",
          useWhen: "Any kind of closing: “cerrar la puerta,” “la tienda cierra a las ocho,” “cerrar el trato.”",
          avoidWhen: "You mean to lock, which needs “cerrar con llave” or “echar llave”; plain “cerrar” only means pull shut.",
          register: "neutral",
          region: "Universal Spanish; the stem change is the same in every region.",
          related: ["cerrar con llave", "cerrarse", "el cierre", "cerrado"],
          example: { target: "La tienda cierra a las ocho.", translation: "The shop closes at eight." }
        },
        {
          term: "¿a qué hora cierran?",
          explanation: "The everyday way to ask a business's closing time, third-person plural for “they / the place.” It mirrors “¿a qué hora abren?” for opening hours.",
          literal: "at what hour they-close?",
          useWhen: "Checking any shop, office or restaurant's closing time before you head over.",
          avoidWhen: "You only want to know if it's open right now; then ask “¿están abiertos?” instead.",
          register: "neutral",
          region: "General Colombian; on the coast the final -s often drops, so it lands as “¿a qué hora cierra'?”.",
          related: ["¿a qué hora abren?", "¿hasta qué hora?", "el horario", "¿están abiertos?"],
          example: { target: "¿A qué hora cierran los domingos?", translation: "What time do you close on Sundays?" }
        },
        {
          term: "estar cerrado",
          explanation: "The state of being shut, built with estar plus a participle — never ser. “Está cerrado” is the result; “cierra” is the act. English flattens both into one word, “closed.”",
          literal: "to-be closed",
          useWhen: "Reporting a current condition: “el banco está cerrado,” “la vía está cerrada.”",
          avoidWhen: "You mean the habitual closing time, which is the plain verb — “cierra a las ocho,” not “está cerrado a las ocho.”",
          register: "neutral",
          region: "Universal; this estar-plus-participle pattern is standard across the language.",
          related: ["estar abierto", "cerrado", "la vía está cerrada", "ser o estar"],
          example: { target: "Hoy el banco está cerrado.", translation: "The bank is closed today." }
        },
        {
          term: "cerrar el trato",
          explanation: "To close or seal a deal — the same “cerrar” English uses for “close a sale.” In a market it doubles as agreeing on a haggled price: “¿cerramos en diez mil?”",
          literal: "to-close the deal",
          useWhen: "Finishing a negotiation, from a street price up to a business agreement.",
          avoidWhen: "You mean shutting a business down for good; that is “cerrar el negocio,” a very different thing.",
          register: "neutral",
          region: "General Colombian; it is universal in Spanish business talk.",
          related: ["cerrar un negocio", "cerrar la venta", "hacer un trato", "¿cerramos?"],
          example: { target: "Cerramos el trato con un apretón de manos.", translation: "We sealed the deal with a handshake." }
        },
        {
          term: "cerrarse",
          explanation: "The reflexive side of “cerrar.” A road “se cierra,” a person “se cierra” (clams up or won't budge), and in traffic “se me cerró un carro” means a car cut in front of me.",
          literal: "to-close-itself",
          useWhen: "Roads, wounds, chances or people who shut down: “se cerró la vía,” “se cerró en banda.”",
          avoidWhen: "You simply mean someone closed something; that is plain “cerrar” with an object, not the reflexive.",
          register: "neutral",
          region: "General Colombian; “cerrarse en banda,” to refuse to budge, is common right across the country.",
          related: ["cerrarse en banda", "se me cerró", "cerrarse la vía", "cerrar"],
          example: { target: "Se me cerró un taxi en la esquina.", translation: "A taxi cut in front of me at the corner." }
        },
        {
          term: "cerraron la vía",
          explanation: "A bare third-person plural — “they closed the road” — with no stated subject, the usual way Colombians report closures for parades, protests, roadworks or the Sunday ciclovía.",
          literal: "they-closed the road",
          useWhen: "Explaining traffic or a detour: “cerraron la vía por obras / por un evento.”",
          avoidWhen: "You know exactly who closed it and want to name them; then state that subject openly.",
          register: "neutral",
          region: "General Colombian; “vía” is the standard word for a road or route right across the country.",
          related: ["cerrar la calle", "la ciclovía", "el trancón", "cerraron el paso"],
          example: { target: "Cerraron la vía por la maratón.", translation: "They closed the road for the marathon." }
        },
        {
          term: "bajar la reja",
          explanation: "To “lower the grille” — the metal shutter over a storefront — meaning to close up for the day. The reja is the corner shop's face, and pulling it down is the ritual end of trading.",
          literal: "to-lower the grille",
          useWhen: "Closing a shop physically at the end of the day: “ya voy a bajar la reja.”",
          avoidWhen: "A place with glass doors rather than a metal grille; there you would just “cerrar” or “echar llave.”",
          register: "friendly informal",
          region: "General Colombian; “la reja” fronts corner shops right across the country.",
          related: ["la reja", "echar llave", "el candado", "cerrar la tienda"],
          example: { target: "A las ocho bajo la reja y me voy.", translation: "At eight I bring the grille down and head off." }
        }
      ],
      note:
        "“Cerrar” closes almost anything — a door, a shop, a road, a wound, a deal — so the real trick is not the word but the frame around it. Hold two things apart: the act, plain “cerrar” (“la tienda cierra a las ocho”), and the state, estar plus a participle that agrees (“está cerrada”), where English just says “closed.” Then remember that to lock you need “cerrar con llave,” and that the reflexive “cerrarse” lives its own lives, from a road to a stubborn person.",
      culture: [
        {
          label: "The Caribbean tú",
          body: "On Colombia's Caribbean coast — Barranquilla, Cartagena, Santa Marta — the everyday “you” is tú, not the usted of Bogotá nor the vos of Medellín. Costeño speech is quick and musical, and it tends to drop the final -s, so “¿cómo estás?” can come out as “¿cómo etá?” and “dos” as “do'.” None of this is careless; it is a whole regional accent with its own rules. For a learner, the happy payoff is that tú, the form textbooks teach first, is exactly what the coast expects to hear."
        },
        {
          label: "“Está cerrado” is a state, not an act",
          body: "The single most useful thing here is a split that English hides. “La tienda cierra a las ocho” is an action — what the shop does each day. “La tienda está cerrada” is a state — how it stands right now — and it needs estar plus a participle that agrees in gender and number. Say “es cerrada” and you describe a permanent trait, as if the shop were shut by its very nature. Colombians never blur these two, so getting it right quietly marks careful, native-sounding Spanish."
        },
        {
          label: "The reja and the corner shop",
          body: "The tienda de barrio is a Colombian institution: a family shop selling everything by the unit — one egg, a single cigarette, a splash of cooking oil poured into a bag. Its front is often a metal grille, la reja, and after hours you may be served through it, passing coins across the bars. “Bajar la reja” is the day's last act, the visible sign that trading is over. Knowing the ritual tells you when to hurry and when a half-down grille still quietly means “come on in.”"
        },
        {
          label: "When they close the road",
          body: "Colombians close roads constantly and often cheerfully — for parades, marches, cycling races and the Sunday ciclovía, when major avenues turn car-free for joggers and families. In traffic talk you'll hear the bare “cerraron la vía,” no subject named, offered as the reason for a detour or a thin crowd. On the coast, Carnival can shut whole districts for days on end. Rather than fight it, locals plan around it, and a closed road is as often a fiesta as it is a nuisance."
        }
      ],
      pitfalls: [
        {
          mistake: "La tienda es cerrada ahora.",
          whyItFails: "Being closed is a temporary state, so it takes estar, not ser: “está cerrada.” “Es cerrada” would describe a permanent trait, which makes no sense for a shop's daily hours.",
          sayInstead: "La tienda está cerrada ahora."
        },
        {
          mistake: "La puerta está cerrado.",
          whyItFails: "The participle has to agree with the noun. “Puerta” is feminine, so it must be “cerrada,” not “cerrado.” English marks no agreement, so learners keep forgetting this one.",
          sayInstead: "La puerta está cerrada."
        },
        {
          mistake: "Cerré la puerta. (meaning you locked it)",
          whyItFails: "Plain “cerrar” only means pull shut, not lock. If you actually turned the key, you have to say so, or people will assume the door is merely closed, not secured.",
          sayInstead: "Cerré la puerta con llave."
        },
        {
          mistake: "Voy a cerrar el negocio a las ocho.",
          whyItFails: "“Cerrar el negocio” sounds like shutting the business down for good, not closing up for the night. For daily hours, “cerrar” with no object is enough.",
          sayInstead: "Cierro a las ocho."
        }
      ],
      variations: [
        {
          form: "¿A qué hora cierran?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Asking any business what time it closes for the day."
        },
        {
          form: "Ya vamos a cerrar.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Warning a customer that closing is only minutes away."
        },
        {
          form: "Está cerrado.",
          register: "neutral",
          region: "Universal",
          whenToUse: "Reporting that a place is shut at this moment."
        },
        {
          form: "Cerramos el trato.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Sealing a deal or an agreed haggled price."
        },
        {
          form: "Cerraron la vía.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Explaining a road closure behind traffic or a detour."
        }
      ],
      prompt: "The shop owner says “ya vamos a cerrar.” What is he telling you?",
      choices: [
        "That the shop has been closed since the early afternoon today.",
        "That they will open again shortly, so you should wait outside.",
        "That they are about to close, so you had better be quick."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Which question asks a shop what time it closes for the day?",
          choices: ["¿A qué hora cierran?", "¿A qué hora abren?", "¿Dónde queda la tienda?"],
          answer: 0,
          tests: "closing-time question"
        },
        {
          prompt: "A friend says the place “está cerrada.” What is she telling you?",
          choices: [
            "That the place opens very early every single morning.",
            "That the place is shut at this moment.",
            "That the place is just about to lower its grille."
          ],
          answer: 1,
          tests: "state versus action"
        },
        {
          prompt: "Which sentence correctly says the door is closed right now?",
          choices: [
            "La puerta es cerrada en este momento.",
            "La puerta está cerrado en este momento.",
            "La puerta está cerrada en este momento."
          ],
          answer: 2,
          tests: "ser or estar and agreement"
        },
        {
          prompt: "How would you warn a customer that closing time is near?",
          choices: [
            "Acabamos de abrir, siga y mire con calma.",
            "Ya vamos a cerrar, hágale rapidito.",
            "Cerramos el trato con un apretón de manos."
          ],
          answer: 1,
          tests: "about-to-close warning"
        }
      ]
    },
    en: {
      title: "Antes de que cierre la tienda",
      situation:
        "Usted llega a una tienda pequeña de barrio casi a la hora del cierre y trata de comprar algo rápido en inglés antes de que cierren.",
      setting: {
        who: "Alejandra, que quiere comprar un par de cosas a la carrera, y Sam, el dueño de una tienda pequeña que está a punto de cerrar por hoy.",
        what: "Alejandra alcanza la tienda justo antes del cierre, pregunta el horario, pide un pequeño descuento y cierra un trato rápido antes de que apaguen las luces.",
        when: "Un poco antes de las ocho de la noche, justo cuando la tienda está a punto de cerrar.",
        where: "Una tienda pequeña de barrio en Estados Unidos, donde el trato es informal y directo, y todo se dice con un solo “you.”",
        why: "La hora de cierre es cuando “close” hace su trabajo más útil: el horario, las puertas y hasta el trato dependen de ese verbo, y conviene no confundirlo con el adjetivo “close,” que significa cerca."
      },
      address: {
        form: "mixed",
        who: "Sam trata a Alejandra con el único “you” del inglés, el mismo para el cliente, el amigo o el desconocido.",
        why: "El inglés no tiene usted ni tú: hay un solo “you.” La cortesía no vive en el pronombre sino en el verbo y en los suavizadores — “could you,” “would you mind,” “please,” “just” — y en el tono de la voz.",
        ifYouSwitch:
          "Como no existen pronombres de respeto, el registro se ajusta con las palabras. “What time do you close?” es neutro y seguro; “Excuse me, what time do you close today?” suena más cuidado. No hay un “usted” al que cambiarse: se sube o se baja la cortesía con el fraseo, no con el pronombre."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Hi! Are you still open? What time do you close?",
          translation: "¡Hola! ¿Todavía está abierto? ¿A qué hora cierran?",
          pronunciation: "jái! ar yu stil Ó-pen? uót taim du yu klóus?",
          literal: "¡Hola! ¿Estás tú todavía abierto? ¿Qué hora haces tú cerrar?",
          why: "“Still open” es el estado, con “to be” — “¿sigues abierto?”. “What time do you close?” es la forma natural de preguntar el cierre: en inglés se dice “what time,” no “at what hour,” que sería un calco del español."
        },
        {
          speaker: "Sam",
          target: "Yeah, but we're about to close. What do you need? Quick, please.",
          translation: "Sí, pero estamos a punto de cerrar. ¿Qué necesita? Rápido, por favor.",
          pronunciation: "yea, bat uír a-BÁUT tu klóus. uót du yu niid? kuík, plíis.",
          literal: "Sí, pero nosotros-estamos a-punto de cerrar. ¿Qué haces tú necesitar? Rápido, por favor.",
          why: "“To be about to” es “estar a punto de” — la acción es inminente, no cumplida. Fíjese en el contraste con “we close at eight,” que sería la costumbre. “Yeah” marca un registro informal de tienda de barrio."
        },
        {
          speaker: "Alejandra",
          target: "Oh, I thought you were closed. Can you sell me two waters?",
          translation: "Ah, pensé que estaban cerrados. ¿Me vende dos aguas?",
          pronunciation: "ou, ai zot yu uér klóusd. kan yu sel mi tu UÓ-ters?",
          literal: "Oh, yo-pensé que tú estabas cerrado. ¿Puedes tú vender me dos aguas?",
          why: "“Closed” es el adjetivo de estado, aquí en pasado con “were.” No lo confunda con “close” (cerca), que se escribe igual pero suena distinto. “Two waters” funciona como contable: dos botellas de agua."
        },
        {
          speaker: "Sam",
          target: "No, still open. They closed the road for a parade, so it's quiet. Here you go.",
          translation: "No, todavía abierto. Cerraron la vía por un desfile, así que está solo. Tenga.",
          pronunciation: "nou, stil Ó-pen. dei klóusd de roud for a pa-RÉID, sou its kuáiet. jíar yu góu.",
          literal: "No, todavía abierto. Ellos cerraron la carretera para un desfile, así que ello-es callado. Aquí tú vas.",
          why: "“They closed the road” usa “they” sin sujeto nombrado, igual que el español “cerraron la vía.” “Here you go” es lo que se dice al entregar algo — un “tenga” o “aquí tiene,” no una traducción literal."
        },
        {
          speaker: "Alejandra",
          target: "Great. Is there a discount if I take two? Can we call it four dollars?",
          translation: "Genial. ¿Hay descuento si llevo dos? ¿Lo dejamos en cuatro dólares?",
          pronunciation: "gréit. is der a DÍS-kaunt if ai teik tu? kan uí kol it for DÓ-lars?",
          literal: "Genial. ¿Hay ahí un descuento si yo tomo dos? ¿Podemos nosotros llamarlo cuatro dólares?",
          why: "En Estados Unidos casi no se regatea en las tiendas; pedir un “discount” se puede, pero es poco común. “Can we call it four dollars?” es una manera suave y educada de proponer un precio."
        },
        {
          speaker: "Sam",
          target: "Sure, it's a deal. Just close the door on your way out — we're closing up.",
          translation: "Claro, cerramos el trato. Solo cierre la puerta al salir; ya vamos a cerrar.",
          pronunciation: "shúar, its a diil. yast klóus de dor on yor uéi aut — uír KLÓU-sing ap.",
          literal: "Claro, ello-es un trato. Solo cierra la puerta en tu camino afuera — nosotros-estamos cerrando arriba.",
          why: "Tres usos de “close” de un tirón: “it's a deal” (cerrar el trato), “close the door” (cerrar la puerta, acción literal) y “closing up” (cerrar el local). El mismo verbo para tres tareas cotidianas distintas."
        }
      ],
      vocabulary: [
        {
          term: "to close",
          explanation: "El verbo general para cerrar: puertas, tiendas, vías y tratos. Ojo con el sonido: el verbo “close” suena /clóuz/, mientras que el adjetivo “close” (cerca) suena /clóus/, con otra letra final.",
          literal: "cerrar",
          useWhen: "Cualquier cierre: “the shop closes at eight,” “close the door,” “to close a deal.”",
          avoidWhen: "Quiere decir apagar el agua o la luz; en inglés eso es “turn off,” nunca “close.”",
          register: "neutral",
          region: "Inglés universal; el doble sonido de “close” confunde a muchos hispanohablantes.",
          related: ["to close up", "to shut", "closing time", "closed"],
          example: { target: "The shop closes at eight.", translation: "La tienda cierra a las ocho." }
        },
        {
          term: "What time do you close?",
          explanation: "La forma natural de preguntar la hora de cierre. El inglés usa “what time,” no “at what hour,” que es un calco directo del español y suena raro.",
          literal: "¿qué hora haces tú cerrar?",
          useWhen: "Para preguntar a cualquier negocio a qué hora cierra ese día.",
          avoidWhen: "Solo quiere saber si está abierto ahora; entonces pregunte “are you open?”.",
          register: "neutral",
          region: "Inglés universal; “When do you close?” es una alternativa igual de común.",
          related: ["What time do you open?", "How late are you open?", "When do you close?", "Are you open?"],
          example: { target: "What time do you close on Sundays?", translation: "¿A qué hora cierran los domingos?" }
        },
        {
          term: "closed",
          explanation: "El estado de estar cerrado, siempre con el verbo “to be”: “we're closed.” Es distinto de “it closes” (la acción, la costumbre) y del adjetivo “close” (cerca), aunque se escriba parecido.",
          literal: "cerrado",
          useWhen: "Para informar de una condición actual: “sorry, we're closed,” “the bank is closed today.”",
          avoidWhen: "Quiere decir la hora habitual de cierre; para eso va el verbo, “it closes at eight.”",
          register: "neutral",
          region: "Inglés universal; el letrero de la puerta dice “OPEN” o “CLOSED.”",
          related: ["open", "we're closed", "closed for lunch", "sold out"],
          example: { target: "Sorry, we're closed.", translation: "Lo siento, ya cerramos." }
        },
        {
          term: "it's a deal",
          explanation: "La manera de cerrar un trato o aceptar una oferta: “okay, it's a deal.” También se oye “you've got a deal” o simplemente “deal!” con un apretón de manos.",
          literal: "es un trato",
          useWhen: "Al terminar una negociación o aceptar un precio propuesto.",
          avoidWhen: "Habla de una oferta o promoción de tienda; eso también es “a deal,” pero no cierra nada.",
          register: "friendly informal",
          region: "Inglés universal; muy común en Estados Unidos.",
          related: ["to close a deal", "to seal the deal", "we have a deal", "deal!"],
          example: { target: "Okay, it's a deal.", translation: "Listo, cerramos el trato." }
        },
        {
          term: "to close up",
          explanation: "Cerrar el local al final del día, lo que en Colombia sería bajar la reja. La partícula “up” le da el sentido de terminar la jornada: “to close up shop.”",
          literal: "cerrar arriba",
          useWhen: "Para el cierre físico del negocio al final del día: “we're closing up now.”",
          avoidWhen: "Habla del horario habitual; ahí basta “we close at eight,” sin la partícula “up.”",
          register: "friendly informal",
          region: "Inglés universal; “to lock up” pone el énfasis en echar llave.",
          related: ["to close up shop", "to lock up", "closing time", "last call"],
          example: { target: "We're closing up now.", translation: "Ya vamos a cerrar." }
        },
        {
          term: "they closed the road",
          explanation: "El inglés usa “they” sin sujeto nombrado para un cierre, igual que el español dice “cerraron la vía.” También se oye en pasiva: “the road is closed.”",
          literal: "ellos cerraron la carretera",
          useWhen: "Para explicar tráfico o un desvío: “they closed the road for a parade.”",
          avoidWhen: "Sabe exactamente quién lo cerró y quiere nombrarlo; entonces diga ese sujeto.",
          region: "Inglés universal; “road closure” es el sustantivo que verá en los avisos.",
          register: "neutral",
          related: ["the road is closed", "a road closure", "to block off the street", "a detour"],
          example: { target: "They closed the road for a parade.", translation: "Cerraron la vía por un desfile." }
        },
        {
          term: "to be about to",
          explanation: "Estar a punto de hacer algo: “we're about to close.” Marca que la acción es inminente, lo que en español sería “ya vamos a” o “estamos por.”",
          literal: "estar a punto de",
          useWhen: "Para avisar que algo pasará en segundos: “I'm about to leave,” “we're about to close.”",
          avoidWhen: "Habla de un plan lejano; para eso va “going to” o un futuro, no “about to.”",
          register: "neutral",
          region: "Inglés universal; “just about to” refuerza aún más lo inminente.",
          related: ["to be about to", "just about to", "on the verge of", "any minute now"],
          example: { target: "We're about to close.", translation: "Estamos a punto de cerrar." }
        }
      ],
      note:
        "En inglés “close” hace casi todo el trabajo — la puerta, la tienda, la vía, el trato — pero cuidado con dos cosas. Primero, “it closes at eight” (la acción, la costumbre) frente a “it's closed” (el estado de ahora): el inglés marca el estado con el verbo “to be.” Segundo, el adjetivo “close” (cerca) se escribe igual pero suena distinto y no tiene nada que ver con cerrar. Y para apagar el agua o la luz se dice “turn off,” jamás “close.”",
      culture: [
        {
          label: "El inglés tiene un solo “you”",
          body: "El inglés no distingue entre usted y tú: hay un único “you” para todo el mundo, del cliente al desconocido. Por eso la cortesía no está en el pronombre, como en español, sino repartida en el verbo y en pequeños suavizadores: “could you,” “would you mind,” “please,” “just.” En Estados Unidos el trato suele ser informal y cálido, pero se apoya mucho en “please” y “thank you.” Para un hispanohablante, la buena noticia es que no hay que elegir pronombre; la mala, que hay que aprender a suavizar con palabras."
        },
        {
          label: "La diferencia entre acción y estado",
          body: "Lo más útil de esta lección es una distinción que el inglés esconde. “The shop closes at eight” es una acción — lo que la tienda hace cada día. “The shop is closed” es un estado — cómo está ahora mismo — y siempre lleva el verbo “to be.” El inglés no cambia la palabra “closed,” pero sí cambia el verbo. Y todavía hay una trampa más: el adjetivo “close” significa cerca y suena distinto. Tres ideas, una sola grafía; separarlas es lo que suena natural."
        },
        {
          label: "Comprar sin regatear",
          body: "En Colombia se regatea con naturalidad en plazas, tiendas de barrio y con los vendedores ambulantes. En Estados Unidos, en cambio, el precio de una tienda suele ser fijo, y pedir descuento puede resultar incómodo o fuera de lugar. El regateo se reserva para los mercados de pulgas, las ventas de garaje y algunas compras grandes, como un carro. “It's a deal” se oye más al cerrar un acuerdo que al pelear un precio en una tienda formal, así que conviene medir dónde se usa."
        },
        {
          label: "Cuando cierran una vía",
          body: "Como en Colombia, en Norteamérica se cierran vías por desfiles, maratones, obras y carreras ciclísticas, y se anuncia como “road closures.” La gran diferencia son los horarios: “we close at eight” significa las ocho en punto, sin la flexibilidad de que le atiendan por la reja un ratico después. Si el letrero dice “CLOSED,” la puerta no se abre. Llegar cinco minutos tarde suele significar volver al día siguiente, así que la pregunta por el horario deja de ser un detalle."
        }
      ],
      pitfalls: [
        {
          mistake: "“The shop is close.”",
          whyItFails: "Confunde el adjetivo “close” (cerca) con “closed” (cerrado). Suenan y se escriben distinto: para decir que la tienda está cerrada hace falta la -d final, “closed.”",
          sayInstead: "“The shop is closed.”"
        },
        {
          mistake: "“At what hour do you close?”",
          whyItFails: "Es un calco de “¿a qué hora cierran?”. En inglés no se pregunta “at what hour”; la fórmula natural es “what time,” que sí suena idiomática.",
          sayInstead: "“What time do you close?”"
        },
        {
          mistake: "“Can you close the water, please?”",
          whyItFails: "En español se “cierra” la llave o el agua, pero el inglés no usa “close” para eso. El agua, la luz y el gas se “turn off,” no se cierran.",
          sayInstead: "“Can you turn off the water, please?”"
        },
        {
          mistake: "“Until what hour are you open?”",
          whyItFails: "Traduce “¿hasta qué hora abren?” palabra por palabra y suena rígido. El inglés prefiere “how late,” una fórmula más corta y natural para lo mismo.",
          sayInstead: "“How late are you open?”"
        }
      ],
      variations: [
        {
          form: "What time do you close?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para preguntar a cualquier negocio a qué hora cierra."
        },
        {
          form: "We're about to close.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Para avisar a un cliente que el cierre es inminente."
        },
        {
          form: "Sorry, we're closed.",
          register: "polite neutral",
          region: "Inglés universal",
          whenToUse: "Para informar de que el lugar ya está cerrado."
        },
        {
          form: "Okay, it's a deal.",
          register: "friendly informal",
          region: "Inglés universal; muy usado en Estados Unidos",
          whenToUse: "Para cerrar un trato o aceptar una oferta."
        },
        {
          form: "They closed the road.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para explicar un cierre de vía detrás de un trancón o un desvío."
        }
      ],
      prompt: "El dueño dice “we're about to close.” ¿Qué le está diciendo?",
      choices: [
        "Que la tienda lleva cerrada desde temprano en la tarde de hoy.",
        "Que están a punto de cerrar, así que conviene apurarse.",
        "Que van a abrir otra vez en un rato, mejor espere afuera."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál es la forma natural de preguntar a qué hora cierra una tienda?",
          choices: ["At what hour do you close?", "How much does it close?", "What time do you close?"],
          answer: 2,
          tests: "pregunta por el cierre"
        },
        {
          prompt: "Quiere decir que la tienda está cerrada ahora. ¿Cuál es la forma correcta?",
          choices: ["Sorry, we're closed.", "Sorry, we're close.", "Sorry, we closing."],
          answer: 0,
          tests: "cerrado frente a cerca"
        },
        {
          prompt: "En inglés, ¿cómo se pide apagar el agua o la luz?",
          choices: ["Close the water, please.", "Turn off the water, please.", "Down the water, please."],
          answer: 1,
          tests: "apagar, no cerrar"
        },
        {
          prompt: "¿Cómo dice en inglés que cierra el trato?",
          choices: ["Okay, it's a deal.", "Okay, it's a close.", "Okay, we close it."],
          answer: 0,
          tests: "cerrar el trato"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/14-foundation-handling-things.js");
