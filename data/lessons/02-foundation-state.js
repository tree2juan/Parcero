/*
 * Lesson block: foundation / state, possession and doing.
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
    id: "waiting-on-the-repair-technician",
    level: "Starter · Home and neighborhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    pathways: ["foundation"],
    verb: "estar",
    review: "pending",
    es: {
      title: "Waiting on the washing machine technician",
      situation:
        "The washing machine in the Bogotá apartment where Alex lives has broken, and the technician was supposed to come in a two-hour window that is almost over. Alex calls to find out where he is. The apartment has no water, Alex has a work trip in two days, and he needs the machine fixed today.",
      setting: {
        who: "Don Fabio is the repair technician the building administrator recommended. Alex is an American tenant who has been in Bogotá three months and still finds phone calls harder than face-to-face Spanish.",
        what: "A phone call to find out where the technician is and whether he is still coming this morning.",
        when: "A Wednesday mid-morning, with the two-hour window the technician promised almost used up.",
        where: "Bogotá, in Chapinero, a fifth-floor apartment whose washing machine died mid-cycle and left standing water.",
        why: "Because Alex cannot tell, from a cheerful “estoy por allá”, whether Don Fabio is five minutes away or an hour, and he needs the machine fixed before he travels."
      },
      address: {
        form: "usted",
        who: "Alex uses usted with Don Fabio, and Don Fabio uses usted back.",
        why: "A service call between two adults who have never met is usted territory in Bogotá. It keeps the exchange courteous and businesslike without being cold, and it is what the technician will expect.",
        ifYouSwitch:
          "Tú would sound like Alex was chivvying a friend rather than a tradesman, and on a first call it can read as impatient. Usted keeps the pressure polite; there is time to relax it once they have met."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Don Fabio, buenos días. ¿Usted por dónde está?",
          translation: "Don Fabio, good morning. Whereabouts are you?",
          pronunciation: "don FA-byoh, BWEH-nos DEE-as. oos-TED por DON-deh es-TA",
          literal: "Don Fabio, good days. You by where are?",
          why: "“¿Por dónde está?” asks for a rough position, not an exact address — the por turns “where” into “whereabouts”. Location always takes estar, never ser, so “¿por dónde es?” would be impossible here."
        },
        {
          speaker: "Don Fabio",
          target: "Buenos días. Estoy llegando, voy por la calle 80.",
          translation: "Morning. I'm on my way, I'm coming up 80th.",
          pronunciation: "BWEH-nos DEE-as. es-TOY yeh-GAN-doh, boy por la KA-yeh oh-CHEN-ta",
          literal: "Good days. I-am arriving, I-go by the street 80.",
          why: "“Estoy llegando” literally means “I am arriving”, but in Colombia it is a social formula for “I'm on my way” — it may still be twenty minutes. The estar + gerund promises intent, not position."
        },
        {
          speaker: "Alex",
          target: "Listo. La lavadora está dañada y el apartamento está sin agua. Estoy preocupado.",
          translation: "Okay. The washing machine is broken and the apartment has no water. I'm worried.",
          pronunciation: "LEES-toh. la la-va-DO-ra es-TA da-NYA-da ee el a-par-ta-MEN-toh es-TA seen AH-gwa. es-TOY preh-o-ku-PA-doh",
          literal: "Ready. The washing-machine is damaged and the apartment is without water. I-am worried.",
          why: "Three estar in a row, all for states that could change by tonight: broken, waterless, worried. Reaching for ser here (“es dañada”) would make the fault sound like a permanent trait of the machine."
        },
        {
          speaker: "Don Fabio",
          target: "Tranquilo. ¿La portería está abierta para yo subir?",
          translation: "No worries. Is the front desk open so I can come up?",
          pronunciation: "tran-KEE-loh. la por-teh-REE-a es-TA a-BYER-ta pa-ra yo su-BEER",
          literal: "Calm. The porter's-lodge is open for I to-go-up?",
          why: "“Está abierta” is estar for a condition true right now, not ser. Note the colloquial “para yo subir”, where careful grammar wants “para que yo suba”; Colombians routinely use a subject pronoun before the infinitive."
        },
        {
          speaker: "Alex",
          target: "Sí, el portero está en la entrada. ¿Usted como en cuánto llega?",
          translation: "Yes, the porter's at the entrance. About how long till you get here?",
          pronunciation: "see, el por-TEH-roh es-TA en la en-TRA-da. oos-TED KO-mo en KWAN-toh YEH-ga",
          literal: "Yes, the porter is at the entrance. You like in how-much arrive?",
          why: "“Está en la entrada” — location, estar again. “¿Como en cuánto?” softens the demand for a time with como (“like/about”); the bare “¿en cuánto llega?” would sound sharper, almost like a complaint."
        },
        {
          speaker: "Don Fabio",
          target: "En unos quince. Ya casi estoy allá, no se preocupe.",
          translation: "About fifteen. I'm nearly there, don't worry.",
          pronunciation: "en OO-nos KEEN-seh. ya KA-si es-TOY a-YA, no se preh-o-KU-peh",
          literal: "In some fifteen. Already almost I-am there, not yourself worry.",
          why: "“Ya casi estoy allá” closes the loop opened by “estoy llegando”: estar for location plus “ya casi” to turn a vague promise into a firm one. “No se preocupe” is the usted imperative, matching the whole call."
        }
      ],
      vocabulary: [
        {
          term: "estar",
          explanation:
            "The “be” of condition and position — where something is, how it is right now, and any temporary state that could reasonably be different next week.",
          literal: "to be (right now)",
          useWhen:
            "Giving a location, describing a mood or a passing condition, or marking an action in progress with a gerund.",
          avoidWhen:
            "Naming what something fundamentally is — origin, profession, identity. That is ser, and estar there sounds like the trait is only visiting.",
          register: "neutral",
          region: "Universal Spanish. The ser/estar split works the same across every dialect; only the examples change.",
          related: ["ser", "quedar", "andar", "encontrarse"],
          example: {
            target: "El apartamento está sin agua.",
            translation: "The apartment has no water."
          }
        },
        {
          term: "¿por dónde está?",
          explanation:
            "“Whereabouts are you?” Asks for a rough location rather than a precise address you would write down.",
          literal: "by where are-you?",
          useWhen:
            "Chasing someone who is on their way, when you want a sense of how close they actually are.",
          avoidWhen:
            "Asking for an exact address to note down; there you want “¿en qué dirección está?” instead.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["¿dónde está?", "¿por dónde va?", "¿ya viene?", "¿está cerca?"],
          example: {
            target: "¿Usted por dónde está?",
            translation: "Whereabouts are you?"
          }
        },
        {
          term: "estoy llegando",
          explanation:
            "Literally “I am arriving”, but used as a social promise meaning “I'm on my way” — often with time still to spare.",
          literal: "I-am arriving",
          useWhen:
            "Reassuring someone that you are coming, whether you are genuinely close or have barely set off.",
          avoidWhen:
            "You need to be believed to the minute. Colombians know the phrase is elastic, so it is no way to give a precise ETA.",
          register: "friendly informal",
          region: "General Colombian; famously elastic nationwide.",
          related: ["ya voy", "estoy cerca", "ya casi", "voy en camino"],
          example: {
            target: "Estoy llegando, voy por la calle 80.",
            translation: "I'm on my way, I'm coming up 80th."
          }
        },
        {
          term: "estar dañado/a",
          explanation:
            "To be broken or out of order — of an appliance, a car, a phone, anything mechanical that has stopped working.",
          literal: "to be damaged",
          useWhen:
            "Reporting that a device or appliance has failed — “la nevera está dañada”, “el ascensor está dañado” — anything mechanical that has quit.",
          avoidWhen:
            "Talking about spoiled food, where “está dañada” can instead mean gone off. Context usually clears it up, but be aware.",
          register: "neutral",
          region: "General Colombian; “dañado” is far more common than “roto” for machines.",
          related: ["no sirve", "está malo", "se dañó", "no funciona"],
          example: {
            target: "La lavadora está dañada.",
            translation: "The washing machine is broken."
          }
        },
        {
          term: "la portería",
          explanation:
            "The front desk or porter's lodge of a building, and by extension the post that controls the entrance.",
          literal: "the porter's-lodge",
          useWhen:
            "Anything to do with entry, parcels, keys or visitors in a Colombian apartment block.",
          avoidWhen:
            "A house with no doorman; there is no portería, just the door and whoever answers it.",
          register: "neutral",
          region: "General Colombian urban usage.",
          related: ["el portero", "la recepción", "el celador", "la entrada"],
          example: {
            target: "¿La portería está abierta?",
            translation: "Is the front desk open?"
          }
        },
        {
          term: "estar + gerundio",
          explanation:
            "The present progressive — estar plus an -ando/-iendo verb — for something happening right at this moment.",
          literal: "to be + -ing",
          useWhen:
            "An action genuinely under way this second, the sort of thing you would report as “estoy llegando” or “estoy saliendo del trabajo” right now.",
          avoidWhen:
            "A habit. Spanish uses the plain present for habitual actions, so “trabajo aquí”, not “estoy trabajando aquí”, for “I work here”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["estar llegando", "estar saliendo", "ir + gerundio", "andar + gerundio"],
          example: {
            target: "Estoy saliendo del trabajo.",
            translation: "I'm leaving work right now."
          }
        },
        {
          term: "no se preocupe",
          explanation:
            "“Don't worry” in the usted form — a standard reassurance in a polite service exchange.",
          literal: "not yourself worry",
          useWhen:
            "Calming a customer, or being calmed by one, while keeping the polite register.",
          avoidWhen:
            "With someone you already tutear; then it is “no te preocupes”, and usted would sound oddly stiff.",
          register: "polite service",
          region: "General Colombian.",
          related: ["no te preocupes", "tranquilo", "no hay problema", "fresco"],
          example: {
            target: "Ya casi llego, no se preocupe.",
            translation: "I'm almost there, don't worry."
          }
        }
      ],
      note:
        "The lesson turns on one contrast: everything wrong with the apartment — dañada, sin agua — and everything about where people are takes estar, because it is all true only for today. Say “la lavadora es dañada” and you have promoted a passing fault to a permanent trait, and a Colombian will hear exactly that.",
      culture: [
        {
          label: "“Estoy llegando” is a social contract, not a GPS reading",
          body:
            "When a Colombian says “estoy llegando” or “ya voy”, treat it as a warm promise rather than a literal position. It means “you are on my mind and I am coming”, and the person may still be twenty minutes out. Pushing back with “but where ARE you?” misreads reassurance as data. Learn to hear the intention, and if you genuinely need a number, ask “¿como en cuánto?”."
        },
        {
          label: "The portería runs the building",
          body:
            "Most Colombian apartment blocks have a portería staffed around the clock by a portero or celador who buzzes in visitors, signs for parcels, holds spare keys and quietly knows everyone's routine. For any technician the first question is whether the portería will let him up. Befriending your portero is one of the highest-return social investments a foreign resident can make; they solve problems no app can touch."
        },
        {
          label: "Usted with the tradesman is courtesy, not distance",
          body:
            "A service call between strangers defaults to usted across most of Colombia, even in tú-friendly Bogotá. It is not coldness so much as a working respect between two adults transacting. The technician will usted you and expect it back. Slipping into tú because the call feels friendly can read as talking down to him, which is the opposite of what a foreigner usually intends to signal."
        },
        {
          label: "Calling someone “don” or “doña”",
          body:
            "Alex says “Don Fabio”, not just “Fabio”. Don and doña before a first name are a Colombian mark of respect for someone older, more experienced, or simply providing a service — a plumber, a shopkeeper, a neighbor. It costs nothing, lands as warmth, and is almost never wrong with an adult you do not know well. Dropping it too soon can sound abrupt or overly familiar."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “Soy en el apartamento” for “I'm in the apartment”",
          whyItFails:
            "Location always takes estar, never ser. “Soy en …” is one of the most recognizable foreigner errors and stops a Colombian for a beat every single time.",
          sayInstead: "Estoy en el apartamento."
        },
        {
          mistake: "Saying “La lavadora es dañada” for “The washing machine is broken”",
          whyItFails:
            "Ser makes brokenness a permanent trait of the machine, as if it had been built faulty. Estar frames it as today's condition, which is what you actually mean.",
          sayInstead: "La lavadora está dañada."
        },
        {
          mistake: "Taking “estoy llegando” to mean “I have arrived”",
          whyItFails:
            "The gerund marks the action as still in progress. He is on his way, not at the door, so treating it as “arrived” leaves you opening the door to nobody.",
          sayInstead: "Understand it as “I'm on my way”, and ask “¿como en cuánto llega?”."
        },
        {
          mistake: "Switching to tú to hurry the technician along",
          whyItFails:
            "On a first service call, tú can sound impatient or over-familiar, as if you were chivvying a friend. Usted keeps the pressure courteous.",
          sayInstead: "¿Usted como en cuánto llega?"
        }
      ],
      variations: [
        {
          form: "¿Usted por dónde está?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Chasing someone who is on their way; asks for a rough position."
        },
        {
          form: "¿Usted como en cuánto llega?",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "When you actually need a time and “estoy llegando” was not enough."
        },
        {
          form: "¿Ya viene en camino?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "A gentler nudge that only asks whether they have set off."
        },
        {
          form: "¿Sumercé por dónde va?",
          register: "polite formal",
          region: "Bogotá and Boyacá (cundiboyacense)",
          whenToUse: "The same question with sumercé, the courtesy pronoun of the Bogotá highlands."
        },
        {
          form: "¿Vos por dónde vas, pues?",
          register: "friendly informal",
          region: "Medellín and Antioquia (paisa)",
          whenToUse: "The paisa version, once you and the technician are on vos terms."
        }
      ],
      prompt: "Don Fabio says “Estoy llegando, voy por la calle 80.” What can Alex safely conclude?",
      choices: [
        "That the technician has already reached the building and is waiting downstairs at the front desk for him.",
        "That the technician is on his way but could still be a good while, since the phrase is more promise than position.",
        "That the technician has been delayed and is now canceling the visit for later in the afternoon instead."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Why does Alex ask “¿Usted por dónde está?” instead of “¿Usted dónde está?”",
          choices: [
            "The por turns it into “whereabouts”, asking for a rough position rather than one exact spot on the map.",
            "The por makes the question far more formal, and is the only version you may politely use with usted.",
            "The por changes the verb to ser, which is the correct choice whenever you are asking about a location."
          ],
          answer: 0,
          tests: "por dónde as “whereabouts” rather than an exact address"
        },
        {
          prompt: "Alex says “el apartamento está sin agua.” Why estar and not ser?",
          choices: [
            "Because water shortages are grammatically feminine, and feminine subjects in Spanish always take estar.",
            "Because ser would be far too informal here, and estar is the respectful form to use with a technician.",
            "Because having no water is a temporary condition of the apartment right now, and conditions like that take estar."
          ],
          answer: 2,
          tests: "estar for a temporary condition"
        },
        {
          prompt: "What is the portería, and why does Don Fabio ask about it?",
          choices: [
            "It is the building's rooftop water tank, and he needs to know whether it has been refilled before arriving.",
            "It is the staffed front desk that controls the entrance, and he needs it open to be let up to the apartment.",
            "It is the residents' parking garage downstairs, and he wants to be sure there is a free space for his van."
          ],
          answer: 1,
          tests: "portería as the controlled building entrance"
        },
        {
          prompt: "Don Fabio ends with “no se preocupe.” What does the usted form tell you?",
          choices: [
            "That he is annoyed with Alex and is using distance deliberately to signal the call has gone on too long.",
            "That he has switched to addressing the portero, since “no se preocupe” can only be aimed at building staff.",
            "That he is keeping the whole call in the same polite usted register the two of them started out in."
          ],
          answer: 2,
          tests: "usted imperative matching the register of the call"
        }
      ]
    },
    en: {
      title: "Esperando al técnico en Houston",
      situation:
        "A Alejandra se le dañó la lavadora en su apartamento de Houston y el técnico quedó de venir en una ventana de dos horas que ya casi se acaba. Lo llama para saber por dónde va. El agua se salió, tiene un viaje de trabajo en dos días y, entre el acento y las frases hechas, no logra saber si Dave está cerca o todavía lejos.",
      setting: {
        who: "Dave es el técnico que recomendó la administración del edificio. Alejandra es colombiana, lleva tres meses en Houston y todavía le cuestan más las llamadas que el inglés cara a cara.",
        what: "Una llamada para saber dónde está el técnico y si todavía va a venir esta mañana.",
        when: "Un miércoles a media mañana, cuando la ventana de dos horas que prometió el técnico ya casi se acaba.",
        where: "Houston, un quinto piso cuya lavadora murió a mitad del ciclo y dejó agua en el piso.",
        why: "Porque con un alegre “I'm just around the corner”, Alejandra no sabe si Dave está a cinco minutos o a una hora, y necesita la máquina lista antes de viajar."
      },
      address: {
        form: "mixed",
        who: "Dave y Alejandra se tratan de “you” desde la primera palabra; no hay una forma aparte de respeto.",
        why: "El inglés tiene una sola segunda persona, así que la cortesía la cargan otras cosas: un “sir” o “ma'am” suelto, un “please” de más, el tono. Aquí Dave dice “ma'am” un par de veces, y eso — no el pronombre — es lo que marca la deferencia de servicio.",
        ifYouSwitch:
          "Si Alejandra le dijera “thou”, estaría hablando como una Biblia del siglo XVII; esa forma antigua ya no existe en el habla real. Todo el ajuste de registro pasa por el léxico y el tono, nunca por el pronombre."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Hi Dave, good morning. Whereabouts are you?",
          translation: "Hola Dave, buenos días. ¿Usted por dónde va?",
          pronunciation: "jai deiv, gud MOR-ning. UER-a-bauts ar yu",
          literal: "Hola Dave, buena mañana. ¿Por-dónde estás tú?",
          why: "“Whereabouts are you?” pide una posición aproximada, no una dirección exacta; es el equivalente natural de “¿por dónde está?”. El inglés no cambia de verbo: usa “be” tanto para la ubicación como para la identidad."
        },
        {
          speaker: "Dave",
          target: "Morning! I'm just around the corner, I'm on 80th.",
          translation: "¡Buenos días! Estoy aquí a la vuelta, voy por la 80.",
          pronunciation: "MOR-ning! aim yast a-RAUND da COR-ner, aim on EI-tiez",
          literal: "¡Mañana! Estoy justo a la vuelta de la esquina, estoy en la 80.",
          why: "“Around the corner” casi nunca es literal: como “estoy llegando”, es una promesa elástica que puede ser diez minutos. El “I'm” cubre lo que en español sería estoy, sin obligarlo a elegir entre ser y estar."
        },
        {
          speaker: "Alejandra",
          target: "Okay. The washing machine is broken and the apartment has no water. I'm worried.",
          translation: "Listo. La lavadora está dañada y el apartamento está sin agua. Estoy preocupada.",
          pronunciation: "o-KEI. da UO-shing ma-SHIN is BROU-ken and di a-PART-ment jas nou UO-ter. aim UO-rid",
          literal: "Okay. La lavadora está rota y el apartamento tiene ningún agua. Estoy preocupada.",
          why: "Fíjese en “has no water”: el inglés expresa la falta con have, no con be. Y dice “broken”, no “is damage”: el calco de “está dañada” como “is damage”, sin la terminación de participio, es un error hispano muy típico."
        },
        {
          speaker: "Dave",
          target: "No worries, ma'am. Is the front desk open so I can come up?",
          translation: "Tranquila, señora. ¿La portería está abierta para yo subir?",
          pronunciation: "nou UO-ris, mam. is da front desk OU-pen so ai kan kam AP",
          literal: "No preocupaciones, señora. ¿Está la recepción abierta para que yo suba?",
          why: "Aquí está el registro que el inglés no lleva en el pronombre: “ma'am”. Ese vocativo, y no un “usted”, marca la deferencia de servicio. “Front desk” es la portería; el inglés norteamericano no dice “porter's lodge”."
        },
        {
          speaker: "Alejandra",
          target: "Yes, the doorman is at the entrance. How long until you get here?",
          translation: "Sí, el portero está en la entrada. ¿Como en cuánto llega?",
          pronunciation: "yes, da DOR-man is at di EN-trans. jau long an-TIL yu get JIR",
          literal: "Sí, el hombre-de-puerta está en la entrada. ¿Cuánto hasta-que tú llegas aquí?",
          why: "“How long until you get here?” es la forma neutra de pedir un tiempo. El impulso hispano de decir “how much time you arrive” omite el “until” y el auxiliar; el inglés necesita los dos para que suene a pregunta y no a queja."
        },
        {
          speaker: "Dave",
          target: "About fifteen minutes. I'm almost there, don't worry.",
          translation: "Como quince minutos. Ya casi estoy allá, no se preocupe.",
          pronunciation: "a-BAUT fif-TIN MI-nits. aim OL-moust der, dont UO-ri",
          literal: "Cerca-de quince minutos. Estoy casi allí, no te preocupes.",
          why: "“I'm almost there” cierra la promesa que abrió “around the corner”, igual que “ya casi estoy allá” en español. “Don't worry” no marca usted ni tú: el mismo imperativo sirve para todos, y el tono decide la cortesía."
        }
      ],
      vocabulary: [
        {
          term: "be",
          explanation:
            "El único verbo del inglés para lo que el español divide entre ser y estar: identidad, ubicación, estado y ánimo, todo con “be”.",
          literal: "ser / estar",
          useWhen:
            "Siempre que en español dudaría entre ser y estar. En inglés no hay que elegir: “I am here”, “I am a teacher”, “I am tired”.",
          avoidWhen:
            "Para decir que algo carece de una cosa. “No hay agua” es “there is no water” o “it has no water”, nunca “it is no water”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["is", "are", "am", "there is"],
          example: {
            target: "I'm almost there.",
            translation: "Ya casi estoy allá."
          }
        },
        {
          term: "whereabouts are you?",
          explanation:
            "“¿Por dónde va?” Pide una ubicación aproximada, no una dirección exacta que anotar.",
          literal: "¿por dónde (andas)?",
          useWhen:
            "Cuando persigue a alguien que viene en camino y quiere saber qué tan cerca está de verdad.",
          avoidWhen:
            "Cuando necesita la dirección exacta para anotarla; ahí es “what's the address?”.",
          register: "amistoso informal",
          region: "Inglés universal; muy común en el inglés británico y estadounidense.",
          related: ["where are you?", "how far are you?", "are you close?", "how far off are you?"],
          example: {
            target: "Whereabouts are you?",
            translation: "¿Por dónde va?"
          }
        },
        {
          term: "around the corner",
          explanation:
            "Literalmente “a la vuelta de la esquina”, pero se usa como promesa elástica de cercanía, igual que “estoy llegando”.",
          literal: "a la vuelta de la esquina",
          useWhen:
            "Para tranquilizar a alguien diciéndole que ya casi llega, esté cerca o no tanto.",
          avoidWhen:
            "Cuando de verdad quiere que le crean un tiempo exacto; como en español, todos saben que la frase es elástica.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["on my way", "almost there", "just a minute away", "nearly there"],
          example: {
            target: "I'm just around the corner.",
            translation: "Estoy aquí a la vuelta."
          }
        },
        {
          term: "broken",
          explanation:
            "Dañado, descompuesto — de un electrodoméstico, un carro, un teléfono, cualquier cosa mecánica que dejó de funcionar.",
          literal: "roto / dañado",
          useWhen:
            "Para avisar que un aparato falló: “the washing machine is broken”, “the elevator is broken”.",
          avoidWhen:
            "Con comida dañada; ahí se dice “spoiled” o “gone bad”, no “broken”.",
          register: "neutro",
          region: "Inglés universal; “out of order” se usa para máquinas de uso público.",
          related: ["out of order", "not working", "it broke", "it stopped working"],
          example: {
            target: "The washing machine is broken.",
            translation: "La lavadora está dañada."
          }
        },
        {
          term: "front desk",
          explanation:
            "La portería o recepción de un edificio: el puesto que controla la entrada, recibe paquetes y guarda llaves.",
          literal: "escritorio del frente",
          useWhen:
            "Todo lo relacionado con la entrada, los visitantes o las encomiendas en un edificio norteamericano.",
          avoidWhen:
            "Una casa sin recepción; ahí simplemente es “the door”.",
          register: "neutro",
          region: "Inglés norteamericano; en edificios de lujo se dice “concierge”.",
          related: ["the doorman", "reception", "the concierge", "the lobby"],
          example: {
            target: "Is the front desk open?",
            translation: "¿La portería está abierta?"
          }
        },
        {
          term: "how long until…?",
          explanation:
            "“¿En cuánto…?” La forma neutra de preguntar cuánto falta para que algo pase.",
          literal: "¿qué tan largo hasta…?",
          useWhen:
            "Para pedir un tiempo estimado: “how long until you get here?”, “how long until it's ready?”.",
          avoidWhen:
            "No omita el “until” ni el auxiliar. “How much time you arrive” es el calco hispano que hay que evitar.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["how long till…?", "when will you…?", "how much longer…?", "what time will you…?"],
          example: {
            target: "How long until you get here?",
            translation: "¿Como en cuánto llega?"
          }
        },
        {
          term: "don't worry",
          explanation:
            "“No se preocupe / no te preocupes.” Una tranquilización estándar en intercambios de servicio.",
          literal: "no (te) preocupes",
          useWhen:
            "Para calmar a un cliente o ser calmado por uno; el mismo imperativo vale para cualquier registro.",
          avoidWhen:
            "Nunca cambia por respeto; la formalidad la pone el tono, o un “sir/ma'am”, no el verbo.",
          register: "neutro",
          region: "Inglés universal; “no worries” es la variante más relajada.",
          related: ["no worries", "it's fine", "no problem", "not to worry"],
          example: {
            target: "I'm almost there, don't worry.",
            translation: "Ya casi llego, no se preocupe."
          }
        }
      ],
      note:
        "Lo más útil: en inglés hay un solo “be” y toda la duda entre ser y estar desaparece. La trampa vuelve al pasar al español, y aquí en no calcar “está sin agua” como “is without water” cuando el inglés prefiere “has no water”. Además, la cortesía no vive en el pronombre, sino en palabras como “ma'am” y en el tono.",
      culture: [
        {
          label: "“Around the corner” tampoco es un dato de GPS",
          body:
            "Cuando un estadounidense dice “I'm around the corner” o “I'm on my way”, tómelo como una promesa cálida, no como una posición exacta. Igual que “estoy llegando”, puede seguir estando a veinte minutos. Insistir con “but where EXACTLY are you?” suena a desconfianza. Si de verdad necesita un número, pregunte “how long until you get here?”, que sí pide un tiempo sin sonar a reclamo."
        },
        {
          label: "El “front desk” y la ventana de cita",
          body:
            "En muchos edificios norteamericanos hay un front desk o concierge que controla la entrada, recibe paquetes y anuncia visitas. Pero la gran diferencia con Colombia es la “ventana de cita”: al técnico le dan un rango de dos o cuatro horas, no una hora exacta, y se espera que usted esté disponible todo ese rato. Reclamar porque no llegó “a la hora” desconcierta: para ellos la hora era la ventana."
        },
        {
          label: "El inglés no tiene usted, pero sí tiene “ma'am”",
          body:
            "El inglés perdió su “tú/usted” hace siglos, así que la deferencia de servicio se marca por fuera del pronombre: “sir” y “ma'am”, un “please” de más, el tono. Que Dave le diga “ma'am” a Alejandra es el equivalente funcional del usted del técnico colombiano. Ojo: a algunas personas jóvenes “ma'am” les suena a que las tratan de mayores, así que conviene leer la reacción."
        },
        {
          label: "Nombres de pila desde el primer minuto",
          body:
            "En Estados Unidos el técnico se presenta como “Dave”, no como “Mr. Wilson”, y espera que usted lo llame Dave. El “don Fabio” colombiano no tiene un equivalente cómodo: intentar un “Mister Dave” suena raro. La cercanía por nombre de pila es inmediata y no implica confianza profunda; es simplemente el registro por defecto del trato de servicio en Norteamérica."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “The washing machine is damage” for “…is broken”",
          whyItFails:
            "“Damage” es sustantivo; como adjetivo habría que decir “damaged”, pero lo natural para un aparato es “broken”. Calcar “está dañada” palabra por palabra produce “is damage”, que suena incompleto.",
          sayInstead: "The washing machine is broken."
        },
        {
          mistake: "Saying “The apartment is without water” for “…has no water”",
          whyItFails:
            "El inglés prefiere expresar la falta con “have”: “it has no water” o “there's no water”. “Is without water” se entiende, pero suena a traducción literal de “está sin agua”.",
          sayInstead: "The apartment has no water."
        },
        {
          mistake: "Saying “How much time until you arrive?” for “How long until you get here?”",
          whyItFails:
            "Para una duración el inglés usa “how long”, no “how much time”. Y “get here” es más natural que “arrive” para las llegadas cotidianas; el calco suena rígido y algo a reclamo.",
          sayInstead: "How long until you get here?"
        },
        {
          mistake: "Saying “Actually the machine is broken” to mean “right now”",
          whyItFails:
            "“Actually” no significa “actualmente”; significa “en realidad, de hecho”. Para “en este momento” se dice “right now” o “at the moment”. Es uno de los falsos amigos más frecuentes.",
          sayInstead: "Right now the machine is broken."
        }
      ],
      variations: [
        {
          form: "Whereabouts are you?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Perseguir a alguien que viene en camino; pide una posición aproximada."
        },
        {
          form: "How long until you get here?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Cuando de verdad necesita un tiempo y “around the corner” no bastó."
        },
        {
          form: "Are you on your way?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un empujoncito más suave que sólo pregunta si ya salió."
        },
        {
          form: "Any idea what time you'll make it?",
          register: "cortés de servicio",
          region: "Inglés universal",
          whenToUse: "Pedir una hora con rodeo cortés, sin sonar a reclamo."
        },
        {
          form: "You still coming, or what?",
          register: "amistoso informal",
          region: "Inglés norteamericano coloquial",
          whenToUse: "Con un técnico con el que ya hay confianza y algo de humor impaciente."
        }
      ],
      prompt: "Dave dice “I'm just around the corner, I'm on 80th.” ¿Qué puede concluir Alejandra con seguridad?",
      choices: [
        "Que el técnico ya llegó al edificio y la está esperando abajo, en el front desk, para que le abran la puerta.",
        "Que el técnico viene en camino pero todavía puede demorarse, porque la frase es más promesa que ubicación.",
        "Que al técnico se le presentó un problema y está cancelando la visita para más tarde, por la tarde, en cambio."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Por qué Alejandra pregunta “Whereabouts are you?” y no “What's your address?”",
          choices: [
            "Porque “whereabouts” pide una posición aproximada — qué tan cerca va — y no una dirección exacta que anotar.",
            "Porque “whereabouts” es mucho más formal y es la única versión que puede usar con alguien mayor que ella.",
            "Porque “whereabouts” obliga a usar el verbo “have”, que es el correcto siempre que se pregunta por un lugar."
          ],
          answer: 0,
          tests: "“whereabouts” como ubicación aproximada y no dirección exacta"
        },
        {
          prompt: "Alejandra quiere decir “el apartamento está sin agua”. ¿Cuál suena natural en inglés?",
          choices: [
            "The apartment is without water, porque “without” traduce “sin” y es lo más literal y por eso lo correcto.",
            "The apartment stays without water, porque “stay” es como el inglés expresa cualquier estado que continúa.",
            "The apartment has no water, porque el inglés prefiere expresar la falta con “have” y no con “be”."
          ],
          answer: 2,
          tests: "expresar carencia con “have”, no con “be”"
        },
        {
          prompt: "Dave le dice “ma'am” a Alejandra. ¿Qué función cumple esa palabra?",
          choices: [
            "Marca que Dave está molesto y quiere poner distancia porque la llamada ya se alargó demasiado para su gusto.",
            "Marca la deferencia de servicio que el español pondría en “usted”, ya que el inglés no la lleva en el pronombre.",
            "Marca que Dave se dirige ahora al portero, porque “ma'am” sólo puede usarse hablándole al personal del edificio."
          ],
          answer: 1,
          tests: "el registro marcado por el léxico (“ma'am”) y no por el pronombre"
        },
        {
          prompt: "¿Cuál de estas frases de Alejandra sonaría mal en inglés?",
          choices: [
            "The washing machine is broken, que es la forma natural de decir que un aparato dejó de funcionar del todo.",
            "I'm worried about the water, que expresa su preocupación por el agua de una manera perfectamente corriente.",
            "The apartment is damage, que calca “está dañado” pero deja el adjetivo sin terminar y suena incompleto."
          ],
          answer: 2,
          tests: "“damaged/broken” frente al calco “is damage”"
        }
      ]
    }
  },
  {
    id: "coming-up-short-at-the-corner-shop",
    level: "Starter · Food and drink",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "intimate",
    pathways: ["foundation"],
    verb: "tener",
    review: "pending",
    es: {
      title: "Short on change at the corner shop",
      situation:
        "Alex walks into the shop run by don Norbey in Medellín to buy a few quick things, but he only has a fifty-thousand-peso bill and is in a hurry because he has to pick up his daughter from school. The shopkeeper does not have change either, so the two of them have to work it out.",
      setting: {
        who: "Don Norbey has run the corner shop on this block for twenty years and knows most customers by sight. Alex is a nearly-regular foreigner who still gets flustered handling cash quickly.",
        what: "A quick purchase that stalls because Alex only has a big note and the shop has no change.",
        when: "A weekday afternoon at ten to three, with the school pickup looming over everything.",
        where: "Medellín, a paisa barrio where the tienda doubles as the block's message board and informal credit union.",
        why: "Because how Alex handles being short of change — whether he panics or lets Norbey extend a little trust — decides whether he becomes a known face or stays a passing tourist."
      },
      address: {
        form: "vos",
        who: "Don Norbey uses vos with Alex, and after a beat Alex risks vos back.",
        why: "Paisa Medellín runs on vos between people on friendly terms. A neighborhood tendero will vos a near-regular almost immediately; it is the sound of being treated as a local rather than a customer kept at arm's length.",
        ifYouSwitch:
          "Usted would still be perfectly correct and a touch more reserved, and Norbey would not blink. Tú, though, sounds oddly neutral in Medellín — a bit like TV Spanish — and paisas notice a foreigner reaching for it instead of vos."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Don Norbey, ¿me da estas galletas y una gaseosa? Es que tengo afán.",
          translation: "Don Norbey, can I get these cookies and a soda? I'm in a rush.",
          pronunciation: "don nor-BEY, me da ES-tas ga-YE-tas ee OO-na ga-seh-OH-sa. es ke TEN-goh a-FAN",
          literal: "Don Norbey, to-me you-give these cookies and a soda? Is that I-have rush.",
          why: "“Tener afán” — literally “to have rush” — is how Colombians say they are in a hurry: the state is something you have, not something you are. “Estoy afán” is a classic foreigner slip."
        },
        {
          speaker: "Don Norbey",
          target: "Claro, pues. Son seis mil. ¿Vos con qué me pagás?",
          translation: "Sure thing. That's six thousand. What are you paying with?",
          pronunciation: "KLA-roh, pwes. son seys meel. bos kon ke me pa-GAS",
          literal: "Clear, then. They-are six thousand. You with what to-me you-pay?",
          why: "“Pagás”, stressed on the last syllable, is the vos form; the tú version “pagas” stresses the first. Same consonants, different music — and the “vos” up front removes all doubt about which Norbey means."
        },
        {
          speaker: "Alex",
          target: "Uy, sólo tengo un billete de cincuenta. No tengo sencillo.",
          translation: "Ugh, I've only got a fifty. I don't have any change.",
          pronunciation: "OO-ee, SO-loh TEN-goh oon bi-YE-teh de seen-KWEN-ta. no TEN-goh sen-SEE-yoh",
          literal: "Ugh, only I-have a note of fifty. Not I-have change.",
          why: "Two more tener — tengo un billete, no tengo sencillo. “Sencillo” is small change in Colombia; “cambio” exists, but a paisa tendero will almost always say sencillo."
        },
        {
          speaker: "Don Norbey",
          target: "Uy, parce, no tengo sencillo tampoco. ¿No tenés algo más pequeño?",
          translation: "Oof, mate, I don't have change either. You don't have anything smaller?",
          pronunciation: "OO-ee, PAR-seh, no TEN-goh sen-SEE-yoh tam-POH-koh. no te-NES AL-goh mas peh-KEH-nyoh",
          literal: "Oof, mate, not I-have change either. Not you-have something more small?",
          why: "“Tenés” is the unmistakable vos form of tener: where tú says “tienes”, vos says “tenés”, with no diphthong and stress on the end. This one pattern is the heart of paisa conjugation."
        },
        {
          speaker: "Alex",
          target: "No, nada. Y tengo que recoger a mi hija ya. ¿Cómo hacemos?",
          translation: "No, nothing. And I have to pick up my daughter now. What do we do?",
          pronunciation: "no, NA-da. ee TEN-goh ke rreh-ko-HER a mee EE-ha ya. KO-mo a-SEH-mos",
          literal: "No, nothing. And I-have that to-pick-up to my daughter now. How we-do?",
          why: "“Tener que” + infinitive is obligation — “I have to”. It is the workhorse of everyday Spanish, and keeping the que is non-negotiable: “tengo recoger” without it is ungrammatical."
        },
        {
          speaker: "Don Norbey",
          target: "Tranquilo, parce. Llevátelas y mañana me pagás. ¿Cuántos años tiene la niña?",
          translation: "No worries, mate. Take them and pay me tomorrow. How old's your girl?",
          pronunciation: "tran-KEE-loh, PAR-seh. yeh-VA-teh-las ee ma-NYA-na me pa-GAS. KWAN-tos AH-nyos TYEH-neh la NEE-nya",
          literal: "Calm, mate. Take-them and tomorrow to-me you-pay. How-many years has the girl?",
          why: "“Llevátelas … me pagás” is pure vos: the imperative “llevá” with clitics, then “pagás” again. And “¿cuántos años tiene?” shows tener doing age — in Spanish you have years, you are not them."
        }
      ],
      vocabulary: [
        {
          term: "tener",
          explanation:
            "The “have” of possession and of a fixed set of states Spanish treats as things you hold: hunger, age, fear, rush, reason.",
          literal: "to have",
          useWhen:
            "Owning something, and for the idiomatic states — “tener hambre”, “tener años”, “tener afán”, “tener razón”, “tener miedo” — that Spanish frames as things you hold.",
          avoidWhen:
            "As the auxiliary for the perfect tense; “I have eaten” is haber (he comido), not tener.",
          register: "neutral",
          region: "Universal Spanish; the “states you have” idioms are shared across dialects.",
          related: ["haber", "tener que", "llevar", "sentir"],
          example: {
            target: "Sólo tengo un billete de cincuenta.",
            translation: "I've only got a fifty."
          }
        },
        {
          term: "tener que + infinitivo",
          explanation:
            "“To have to” do something — the everyday way to express obligation or necessity.",
          literal: "to have that + verb",
          useWhen:
            "Any obligation you are under — the everyday “tengo que irme” or “tenemos que pagar la cuenta” — where something simply has to be done.",
          avoidWhen:
            "Dropping the que. “Tengo recoger” is wrong; the que is exactly what makes the structure work.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["deber", "hay que", "necesitar", "toca"],
          example: {
            target: "Tengo que recoger a mi hija.",
            translation: "I have to pick up my daughter."
          }
        },
        {
          term: "tener afán",
          explanation:
            "To be in a hurry — literally “to have rush”. The state is possessed, not described with estar or ser.",
          literal: "to have rush",
          useWhen:
            "Any time you are pressed for time and want to explain why you are rushing.",
          avoidWhen:
            "Formal writing, where you would say “tener prisa” or “estar apurado”. Afán is warmly colloquial and very Colombian.",
          register: "friendly informal",
          region: "Colombian; “afán” is used nationwide where Spain would say “prisa”.",
          related: ["tener prisa", "estar de afán", "andar corriendo", "estar apurado"],
          example: {
            target: "Es que tengo afán.",
            translation: "The thing is I'm in a rush."
          }
        },
        {
          term: "tener … años",
          explanation:
            "How Spanish gives age: you have years, you are not them. “Tiene seis años” = she is six.",
          literal: "to have … years",
          useWhen:
            "Anyone's age, always with tener plus the number plus años.",
          avoidWhen:
            "Never use ser or estar for age. “Es seis años” or “está seis” are both wrong and mark a beginner at once.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["¿cuántos años tiene?", "cumplir años", "tener … meses", "la edad"],
          example: {
            target: "¿Cuántos años tiene la niña?",
            translation: "How old is the girl?"
          }
        },
        {
          term: "sencillo",
          explanation:
            "Small change or small-denomination notes — what you need to break a big bill.",
          literal: "simple / small (change)",
          useWhen:
            "Paying with cash and worrying about change: “¿tiene sencillo?”, “no tengo sencillo”.",
          avoidWhen:
            "As the adjective “easy”, its other meaning; context keeps them apart, but be aware it does double duty.",
          register: "friendly informal",
          region: "General Colombian; a paisa shopkeeper prefers “sencillo” to “cambio”.",
          related: ["cambio", "menudo", "suelto", "billete pequeño"],
          example: {
            target: "No tengo sencillo.",
            translation: "I don't have any change."
          }
        },
        {
          term: "tenés (vos)",
          explanation:
            "The vos form of tener, standard in Medellín and much of Colombia — where tú would say “tienes”.",
          literal: "you have (vos)",
          useWhen:
            "On friendly terms in Antioquia, the Coffee Region, Cali and beyond; it is the normal second person there.",
          avoidWhen:
            "A formal or first meeting, where usted still fits better even in vos-speaking regions.",
          register: "friendly informal",
          region: "Paisa (Medellín/Antioquia), Valle and much of Colombia.",
          related: ["tienes", "vos", "querés", "podés"],
          example: {
            target: "¿No tenés algo más pequeño?",
            translation: "You don't have anything smaller?"
          }
        },
        {
          term: "parce",
          explanation:
            "“Mate / dude” — the paisa-born term of address between friends, now heard all over Colombia.",
          literal: "mate (from “parcero”)",
          useWhen:
            "Relaxed talk between equals; a tendero using it with you is a small badge of acceptance.",
          avoidWhen:
            "With anyone you owe formality — a boss, an official, an elder you have just met.",
          register: "friendly informal",
          region: "Medellín in origin, now general Colombian street and youth speech.",
          related: ["parcero", "llave", "hermano", "sisas"],
          example: {
            target: "Tranquilo, parce.",
            translation: "No worries, mate."
          }
        }
      ],
      note:
        "The through-line is that Spanish keeps a whole shelf of states in tener that English keeps in be: age, hurry, hunger, fear. Reach for estar or ser with any of them — “estoy afán”, “es seis años” — and you calque English straight onto Spanish. Learn the tener idioms as fixed pairs and the errors quietly disappear.",
      culture: [
        {
          label: "The tienda runs on trust, not just cash",
          body:
            "A Colombian tienda de barrio is a shop, a bank and a bulletin board at once. “Llevátelas y mañana me pagás” — take it now, pay tomorrow — is fiado, the informal credit a tendero extends to people he trusts. Being offered fiado is a quiet promotion from customer to neighbor. Abusing it, or forgetting to pay, ends the relationship just as quietly; honouring it fast is what builds it."
        },
        {
          label: "Nobody ever has change",
          body:
            "Chronic lack of sencillo is a national fact of life. Taxi drivers, shopkeepers and market stalls all ask if you have anything smaller, and paying a 6.000-peso item with a 50.000 note can genuinely stall a transaction. Seasoned residents hoard small notes and coins like currency traders. Breaking big bills at the supermarket, or on your first purchase of the day, is standard defensive practice everywhere."
        },
        {
          label: "Vos is the sound of Medellín",
          body:
            "Antioquia and the Coffee Region use vos where Bogotá uses tú and the coast mixes both. Paisa vos — tenés, querés, podés, vení — is not slang or incorrect; it is the regional standard, used by professors and grandmothers alike. A foreigner who picks it up in Medellín signals real local immersion. Reaching for tú there is understood but sounds imported, a little like dubbed television Spanish."
        },
        {
          label: "“Don” for the shopkeeper",
          body:
            "Alex says “don Norbey”. Don and doña before a first name honor age, experience or simply the role of serving the neighborhood, and shopkeepers routinely earn it. It is warmer than a surname and less stiff than señor. Using it with the man who feeds your block on credit is exactly right, and dropping it too early can read as taking the whole relationship for granted."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “Estoy afán” for “I'm in a rush”",
          whyItFails:
            "Afán is a thing you have, not a state you are, so it needs tener: “tengo afán”. Estar here calques the English “I am” and stops a Colombian short.",
          sayInstead: "Tengo afán."
        },
        {
          mistake: "Saying “La niña es seis años” for “She's six”",
          whyItFails:
            "Age uses tener, never ser: you have years, you are not them. “Es seis años” is one of the first errors Colombians hear from English speakers.",
          sayInstead: "La niña tiene seis años."
        },
        {
          mistake: "Saying “Tengo que recoger mi hija” without the personal a",
          whyItFails:
            "A specific person as direct object needs the personal a: “recoger a mi hija”. Leaving it out is a roughness native ears catch immediately.",
          sayInstead: "Tengo que recoger a mi hija."
        },
        {
          mistake: "Dropping the que in “tengo que”",
          whyItFails:
            "“Tengo recoger” is not a sentence in Spanish; tener que is a fixed frame and the que carries the obligation. Without it the phrase collapses.",
          sayInstead: "Tengo que recoger a mi hija."
        }
      ],
      variations: [
        {
          form: "¿No tenés sencillo?",
          register: "friendly informal",
          region: "Medellín and Antioquia (paisa)",
          whenToUse: "The vos version, on friendly terms with a paisa shopkeeper."
        },
        {
          form: "¿No tiene sencillo?",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "The usted default, safe with anyone you have just met."
        },
        {
          form: "¿No tienes sencillo?",
          register: "neutral",
          region: "Bogotá and tú-speaking regions",
          whenToUse: "The tú version, natural in Bogotá and on the coast."
        },
        {
          form: "¿Tenés con qué darme el vuelto?",
          register: "friendly informal",
          region: "Medellín and Antioquia (paisa)",
          whenToUse: "Asking specifically whether they can give you your change."
        },
        {
          form: "¿Me puede cambiar este billete?",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "Asking someone to break a big note for you, formally."
        }
      ],
      prompt: "Don Norbey says “Llevátelas y mañana me pagás.” What is he offering Alex?",
      choices: [
        "That Alex pays half of it today in cash and brings him the rest of the money tomorrow when he next passes by.",
        "That Alex takes the things for free this one time, as a little welcome gift for being a brand-new face in the barrio.",
        "That Alex takes them now and pays tomorrow: fiado, the corner shop's small line of trust-based neighborhood credit."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Alex says “tengo afán.” Why tener and not estar?",
          choices: [
            "Because “afán” is a masculine noun, and in Spanish it is the masculine nouns that always pair up with tener.",
            "Because Spanish treats being in a rush as something you have, like hunger or age, not a state you mark with estar.",
            "Because estar would sound far too formal inside a corner shop, and tener is the relaxed form you use with people."
          ],
          answer: 1,
          tests: "tener for states English keeps in “be”"
        },
        {
          prompt: "Norbey asks Alex “¿No tenés algo más pequeño?” What does the form “tenés” signal?",
          choices: [
            "That he is speaking to him as vos, the normal second person in Medellín, a sign he already treats him as close.",
            "That he is speaking to several people at once, taking in the other customers who are standing around the shop.",
            "That he is speaking in a very formal tone, the kind kept for much older customers or for a first-ever visit."
          ],
          answer: 0,
          tests: "“tenés” as paisa vos and a marker of closeness"
        },
        {
          prompt: "What is the “sencillo” that neither of them has left?",
          choices: [
            "The printed purchase receipt, which the shopkeeper must hand over by law whenever somebody pays with a big note.",
            "A neighborhood discount the shopkeeper gives to customers who turn up without the exact price of the product.",
            "Small change — little notes and coins — the kind you need to make up the change for a big fifty-thousand note."
          ],
          answer: 2,
          tests: "“sencillo” as small change"
        },
        {
          prompt: "Alex says “tengo que recoger a mi hija.” What does “tener que” express?",
          choices: [
            "An obligation or a need — “I have to” — where the que is compulsory and the whole phrase falls apart without it.",
            "A passing wish or craving, as if to say he suddenly feels like going to pick up his daughter at this very moment.",
            "An action happening right now, the equivalent of saying that at this instant he is in the middle of collecting her."
          ],
          answer: 0,
          tests: "“tener que” + infinitive as obligation"
        }
      ]
    },
    en: {
      title: "Sin cambio en la tienda de la esquina",
      situation:
        "Alejandra entra a la tienda de la esquina de Mike en Houston a comprar algo rápido, pero sólo tiene un billete de cincuenta y anda de afán porque tiene que recoger a su hija. Mike tampoco tiene con qué darle el vuelto, y les toca resolverlo entre los dos en inglés.",
      setting: {
        who: "Mike atiende la caja de la tienda de la esquina desde hace años y ya reconoce a Alejandra. Ella es una clienta casi habitual que todavía se pone nerviosa manejando efectivo con afán.",
        what: "Una compra rápida que se traba porque Alejandra sólo tiene un billete grande y la tienda no tiene cambio.",
        when: "Una tarde entre semana, casi a las tres, con la salida del colegio encima.",
        where: "Houston, un barrio tranquilo donde la corner store es punto de encuentro pero casi nadie fía.",
        why: "Porque la forma en que Alejandra maneje el quedarse sin cambio — si se enreda o deja que Mike le tenga un poco de confianza — marca si pasa de clienta a vecina conocida."
      },
      address: {
        form: "mixed",
        who: "Mike y Alejandra se hablan de tú a tú; el inglés no elige entre tú y usted.",
        why: "El inglés tiene un solo “you”, así que la cercanía no se marca en el pronombre sino en el léxico y el tono: Mike usa “hon” y un tono cálido, y eso hace el trabajo que en español haría el vos o el tú.",
        ifYouSwitch:
          "Si Alejandra quisiera sonar más formal no cambiaría el “you”, sino las palabras: “Could I get…” en vez de “Can I get…”, y dejaría los apodos. El registro en inglés vive en la elección de palabras, no en el pronombre."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Mike, can I get these cookies and a pop? I'm in a rush.",
          translation: "Mike, ¿me das estas galletas y una gaseosa? Estoy de afán.",
          pronunciation: "maik, kan ai guet diis KU-kis and a pop? aim in a rash",
          literal: "Mike, ¿puedo obtener estas galletas y una gaseosa? Yo-estoy en un apuro.",
          why: "El afán en inglés va con be, no con have: “I'm in a rush”. Traducir “tengo afán” como “I have rush” no existe; el estado va con to be y la preposición in."
        },
        {
          speaker: "Mike",
          target: "Sure thing. That's six bucks. How are you paying?",
          translation: "Claro. Son seis dólares. ¿Con qué vas a pagar?",
          pronunciation: "shur thing. dats siks baks. jau ar yu PEI-ing",
          literal: "Seguro cosa. Eso-es seis dólares. ¿Cómo estás tú pagando?",
          why: "“Bucks” es dólares en habla informal, como “lucas” o “mil” en Colombia. Y el presente continuo “are you paying” sirve para el futuro inmediato, algo muy del inglés."
        },
        {
          speaker: "Alejandra",
          target: "Ugh, I've only got a fifty. I don't have any change.",
          translation: "Uy, sólo tengo un billete de cincuenta. No tengo sencillo.",
          pronunciation: "ag, aiv OUN-li got a FIF-ti. ai dont jav E-ni cheinch",
          literal: "Ugh, yo-he sólo obtenido un cincuenta. Yo no tengo nada cambio.",
          why: "“I've got” es el inglés cotidiano para “tengo”; suena más natural que “I have”. Y “change” es el sencillo — la misma palabra que “cambio” de dirección, pero aquí es plata menuda."
        },
        {
          speaker: "Mike",
          target: "Oof, hon, I don't have change either. Got anything smaller?",
          translation: "Uy, mija, yo tampoco tengo cambio. ¿No tienes algo más pequeño?",
          pronunciation: "uf, jon, ai dont jav cheinch I-der. got E-ni-thing SMOL-er",
          literal: "Uf, cariño, yo no tengo cambio tampoco. ¿Obtenido cualquier-cosa más-pequeño?",
          why: "“Hon” (de honey) es un apodo cariñoso que marca cercanía sin tocar el pronombre. En español esa calidez la darían el vos, el tú o un “mija”; en inglés la lleva la palabra."
        },
        {
          speaker: "Alejandra",
          target: "No, nothing. And I have to pick up my daughter now. What do we do?",
          translation: "No, nada. Y tengo que recoger a mi hija ya. ¿Cómo hacemos?",
          pronunciation: "no, NO-thing. and ai jav tu pik ap mai DO-ter nau. uot du ui du",
          literal: "No, nada. Y yo tengo que recoger arriba mi hija ahora. ¿Qué hacemos nosotros?",
          why: "“Have to” + verbo simple es la obligación — nunca “have to picking”. Y “pick up” es el phrasal verb de recoger a alguien; la partícula up es parte inseparable del significado."
        },
        {
          speaker: "Mike",
          target: "No worries, hon. Take them and pay me tomorrow. How old's your girl?",
          translation: "Tranquila, mija. Llévatelas y me pagas mañana. ¿Cuántos años tiene la niña?",
          pronunciation: "no UO-ris, jon. teik dem and pei mi tu-MO-rou. jau olds yor guerl",
          literal: "No preocupaciones, cariño. Toma ellas y paga me mañana. ¿Qué viejo-es tu niña?",
          why: "La edad en inglés va con be: “How old is she?” — literalmente “¿qué tan vieja es?”. Preguntar “how many years does she have?” calca el español y suena claramente a hispanohablante."
        }
      ],
      vocabulary: [
        {
          term: "have (got)",
          explanation:
            "El “tener” de posesión. En el día a día se dice “I've got” tanto como “I have”; significan lo mismo.",
          literal: "tener (conseguido)",
          useWhen:
            "Posesión y disponibilidad: I've got a fifty, do you have change, I don't have any cash.",
          avoidWhen:
            "Para la edad, el hambre o el afán, que en inglés van con be, no con have.",
          register: "neutro",
          region: "“I've got” es más común en el inglés británico y estadounidense hablado.",
          related: ["have", "own", "carry", "hold"],
          example: {
            target: "I've only got a fifty.",
            translation: "Sólo tengo un billete de cincuenta."
          }
        },
        {
          term: "have to + verb",
          explanation:
            "“Tener que” hacer algo — la forma normal de expresar obligación en inglés.",
          literal: "tener que + verbo",
          useWhen:
            "Cualquier obligación que uno tiene — “I have to go”, “we have to pay” —, algo que hay que hacer sí o sí.",
          avoidWhen:
            "Poniendo -ing después: “have to picking” es error. Tras have to va el verbo en forma base.",
          register: "neutro",
          region: "Universal.",
          related: ["must", "need to", "got to", "should"],
          example: {
            target: "I have to pick up my daughter.",
            translation: "Tengo que recoger a mi hija."
          }
        },
        {
          term: "in a rush / in a hurry",
          explanation:
            "Estar de afán. Ojo: va con be, no con have — el afán se es (estar), no se tiene, en inglés.",
          literal: "en un apuro",
          useWhen:
            "Cuando andas corto de tiempo: I'm in a rush, sorry, I'm in a hurry.",
          avoidWhen:
            "Diciendo “I have rush” o “I have hurry”; ninguna de las dos existe en inglés.",
          register: "neutro",
          region: "Universal.",
          related: ["in a hurry", "rushed", "pressed for time", "running late"],
          example: {
            target: "I'm in a rush.",
            translation: "Estoy de afán."
          }
        },
        {
          term: "how old…?",
          explanation:
            "La fórmula de la edad. Literalmente “¿qué tan viejo?”, y siempre con be: how old is she?",
          literal: "¿qué tan viejo…?",
          useWhen:
            "Preguntar la edad de cualquier persona — “how old are you?”, “how old is your daughter?” — siempre con el verbo be.",
          avoidWhen:
            "Traduciendo “¿cuántos años tiene?” como “how many years does she have?”, calco directo del español.",
          register: "neutro",
          region: "Universal.",
          related: ["how old is she", "age", "years old", "turn (an age)"],
          example: {
            target: "How old's your girl?",
            translation: "¿Cuántos años tiene tu niña?"
          }
        },
        {
          term: "change",
          explanation:
            "El sencillo: billetes pequeños y monedas para dar el vuelto o pagar justo.",
          literal: "cambio",
          useWhen:
            "Hablando de la plata menuda — “do you have change?”, “keep the change” — para pagar justo o dar el vuelto.",
          avoidWhen:
            "Confundiéndolo con “change” de cambiar/transformar; el contexto de plata lo aclara.",
          register: "neutro",
          region: "Universal; “keep the change” es la frase fija para “quédese con el vuelto”.",
          related: ["coins", "small bills", "keep the change", "break a bill"],
          example: {
            target: "I don't have any change.",
            translation: "No tengo sencillo."
          }
        },
        {
          term: "bucks",
          explanation:
            "Dólares, en habla informal — como “lucas” en Colombia. “Six bucks” son seis dólares.",
          literal: "dólares (informal)",
          useWhen:
            "Conversación relajada sobre plata: it's ten bucks, I only have five bucks.",
          avoidWhen:
            "Contextos formales o escritos, donde se dice “dollars” y no “bucks”.",
          register: "amistoso informal",
          region: "Norteamérica; en Estados Unidos conviven “bucks” y “quarters/dimes” para las monedas.",
          related: ["dollars", "dollar coin", "two-dollar bill", "cash"],
          example: {
            target: "That's six bucks.",
            translation: "Son seis dólares."
          }
        },
        {
          term: "hon",
          explanation:
            "Apodo cariñoso, corto de “honey”, que marca cercanía sin cambiar el pronombre.",
          literal: "cariño (de “honey”)",
          useWhen:
            "Trato cálido y relajado, típico de tenderos, meseras y gente de servicio con clientes.",
          avoidWhen:
            "Contextos formales o con desconocidos que podrían leerlo como demasiado íntimo o condescendiente.",
          register: "amistoso informal",
          region: "Muy usado en Estados Unidos y el norte/este de EE. UU. en tiendas y cafeterías.",
          related: ["honey", "dear", "sweetie", "bud"],
          example: {
            target: "No worries, hon.",
            translation: "Tranquila, mija."
          }
        }
      ],
      note:
        "El inglés reparte lo que el español mete en tener: la posesión va con have, pero la edad, el hambre y el afán van con be. El error estrella del hispanohablante es “how many years do you have?” en vez de “how old are you?”. Aprende esos estados con be como bloques fijos y evitarás el calco.",
      culture: [
        {
          label: "En Estados Unidos casi no existe el fiado",
          body:
            "El “take them and pay me tomorrow” de Mike es un gesto de confianza personal, no una costumbre extendida. La tienda de barrio con cuenta fiada, tan normal en Colombia, casi no existe en Estados Unidos: casi todo se paga con tarjeta o débito en el momento. Que un tendero te fíe algo es una excepción amable entre conocidos, no un sistema informal de crédito como el de las tiendas colombianas."
        },
        {
          label: "Con tarjeta, el cambio casi no importa",
          body:
            "En Colombia quedarse sin sencillo puede trabar una compra; en Estados Unidos el débito y el “tap” de la tarjeta hacen que el efectivo, y por tanto el vuelto, casi no aparezcan. Mucha gente joven carga poco o nada de plata en billetes. Por eso la escena de no tener con qué dar el cambio se siente algo anticuada allá: pasa, pero cada vez menos, sobre todo en tiendas pequeñas que aún reciben efectivo."
        },
        {
          label: "El inglés marca el cariño con apodos",
          body:
            "Como no hay vos ni tú, el inglés carga la cercanía en apodos como “hon”, “dear”, “sweetie”, “bud” o “buddy”, más el tono de la voz. Una mesera que te dice “what can I get you, hon?” está haciendo con una palabra lo que el español haría con el pronombre. No es coqueteo ni falta de respeto: es calidez de servicio, típica de barrios y pueblos más que de oficinas."
        },
        {
          label: "“Pop”, “soda” o “coke”",
          body:
            "Alejandra pide “a pop”, la palabra normal para gaseosa en Estados Unidos y el norte de EE. UU. Más al sur dicen “soda”, y en buena parte del sur estadounidense “coke” sirve para cualquier gaseosa, sea o no Coca-Cola. Es un regionalismo tan marcado como “gaseosa” frente a “refresco” en el mundo hispano, y delata de inmediato de qué zona del continente viene quien habla."
        }
      ],
      pitfalls: [
        {
          mistake: "I have 30 years.",
          whyItFails:
            "Calca “tengo 30 años”. En inglés la edad va con be: la persona es una edad, no la tiene. “I have 30 years” suena a traducción literal.",
          sayInstead: "I'm 30 (years old)."
        },
        {
          mistake: "I have rush.",
          whyItFails:
            "“Tener afán” no se traduce con have. El afán en inglés va con be y la preposición in: se está en un apuro, no se tiene.",
          sayInstead: "I'm in a rush."
        },
        {
          mistake: "I have to picking up my daughter.",
          whyItFails:
            "Tras “have to” el verbo va en forma base, no en -ing. El -ing se cuela por influencia del gerundio, pero aquí sobra.",
          sayInstead: "I have to pick up my daughter."
        },
        {
          mistake: "How many years does she have?",
          whyItFails:
            "Es el calco directo de “¿cuántos años tiene?”. El inglés pregunta la edad con “how old”, no contando años con have.",
          sayInstead: "How old is she?"
        }
      ],
      variations: [
        {
          form: "Got anything smaller?",
          register: "amistoso informal",
          region: "General norteamericano",
          whenToUse: "Preguntar de forma relajada si tienen algo más pequeño para pagar."
        },
        {
          form: "Do you have change for a fifty?",
          register: "neutro",
          region: "Universal",
          whenToUse: "Preguntar directamente si pueden dar cambio de un billete de cincuenta."
        },
        {
          form: "Do you have anything smaller?",
          register: "cortés de servicio",
          region: "Universal",
          whenToUse: "La versión completa y un poco más cortés de “got anything smaller?”."
        },
        {
          form: "Can you break a fifty?",
          register: "amistoso informal",
          region: "General norteamericano",
          whenToUse: "Pedir que le cambien un billete grande en billetes más pequeños."
        },
        {
          form: "Sorry, I've only got a big bill.",
          register: "cortés de servicio",
          region: "Universal",
          whenToUse: "Disculparse por pagar sólo con un billete grande."
        }
      ],
      prompt: "Mike dice “Take them and pay me tomorrow.” ¿Qué le está ofreciendo a Alejandra?",
      choices: [
        "Que pague la mitad hoy en efectivo y le lleve el resto del dinero al día siguiente cuando vuelva a pasar por ahí.",
        "Que se lleve las cosas gratis esta vez, como un regalo de bienvenida por ser una clienta nueva de la tienda.",
        "Que se lleve las cosas ahora y le pague mañana: fiado, algo raro en Estados Unidos y basado en la confianza personal."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Por qué en inglés “I'm in a rush” va con be y no con have?",
          choices: [
            "Porque “rush” es un sustantivo contable, y en inglés los sustantivos contables siempre exigen el verbo be.",
            "Porque el inglés trata el afán como un estado con be, no como algo que se tiene; “I have rush” no existe.",
            "Porque have sonaría demasiado formal en una tienda, y be es la forma relajada entre conocidos cercanos."
          ],
          answer: 1,
          tests: "be para estados que el español pone en tener"
        },
        {
          prompt: "Mike dice “hon”. ¿Qué función cumple esa palabra?",
          choices: [
            "Marca cercanía y calidez, el trabajo que en español haría el pronombre vos o tú; no cambia el “you”.",
            "Marca que le habla en plural a varias personas, incluidos los demás clientes que están en la tienda.",
            "Marca un tono muy formal, reservado para clientes mayores o para una primera visita a la tienda."
          ],
          answer: 0,
          tests: "el inglés marca registro con léxico, no con pronombre"
        },
        {
          prompt: "¿Cuál es la palabra en inglés para el “sencillo” colombiano?",
          choices: [
            "El recibo de compra, que la tienda entrega por ley cada vez que alguien paga con un billete grande.",
            "Un descuento de barrio que el tendero hace a los clientes que llegan sin la cantidad exacta a pagar.",
            "“Change” — la plata menuda, billetes pequeños y monedas con que se da el vuelto de un billete grande."
          ],
          answer: 2,
          tests: "“change” como equivalente de sencillo"
        },
        {
          prompt: "¿Por qué “I have to picking up my daughter” está mal?",
          choices: [
            "Porque tras “have to” el verbo va en forma base — pick up —, no en -ing; el gerundio ahí sobra.",
            "Porque “pick up” debería ir sin la partícula up, ya que recoger a alguien no lleva preposición en inglés.",
            "Porque debería usar must en vez de have to, dado que recoger a la hija es una obligación fuerte."
          ],
          answer: 0,
          tests: "forma base del verbo tras “have to”"
        }
      ]
    },
  },
  {
    id: "planning-a-beach-sancocho",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "intimate",
    pathways: ["foundation"],
    verb: "hacer",
    review: "pending",
    es: {
      title: "Planning a sancocho at the beach",
      situation:
        "Alex runs into Yuranis, his costeña neighbor in Barranquilla, on the street under a brutal sun. Between the heat and the errands he has to run, the chat turns into an invitation: on Saturday her family is making sancocho on the beach for the birthday of her mother, and Alex offers to help.",
      setting: {
        who: "Yuranis is a costeña neighbor who has more or less adopted Alex, folding him into family plans. Alex is settling into coast life and its fast, warm street talk.",
        what: "A chance street encounter that turns into an invitation to a family beach sancocho.",
        when: "A blazing Friday around noon, when the heat is the first thing anyone mentions.",
        where: "Barranquilla, on the Caribbean coast, on the sidewalk outside their building.",
        why: "Because on the coast plans are not made by text but in exactly these sweaty doorstep conversations, and saying yes well is how an outsider becomes part of the family calendar."
      },
      address: {
        form: "tú",
        who: "Yuranis and Alex use tú, the coastal default between neighbors on friendly terms.",
        why: "The Caribbean coast is tú country. Costeños tutear quickly and warmly, and usted between friendly neighbors would feel oddly cold or even annoyed. Tú is the sound of everyday coastal closeness.",
        ifYouSwitch:
          "Usted would put distance between them that neither wants; on the coast it can even read as irritation. Vos would sound imported from Medellín or abroad — grammatical, but not the music of Barranquilla, and people would notice."
      },
      dialogue: [
        {
          speaker: "Yuranis",
          target: "¡Alex! ¿Qué haces por aquí con este solazo?",
          translation: "Alex! What are you doing around here in this blazing sun?",
          pronunciation: "a-LEX, ke A-ses por a-KEE kon ES-te so-LA-so",
          literal: "Alex! What you-do around here with this big-sun?",
          why: "“¿Qué haces?” is hacer as plain “do” — the standard greeting-question for what someone is up to. “Solazo”, sun plus the -azo augmentative, is coast talk for brutal heat."
        },
        {
          speaker: "Alex",
          target: "Tengo que hacer unas vueltas. Hoy hace un calor tremendo.",
          translation: "I've got some errands to run. It's terribly hot today.",
          pronunciation: "TEN-goh ke a-SER OO-nas BWEL-tas. oy A-se oon ka-LOR tre-MEN-doh",
          literal: "I-have that to-do some turns. Today it-makes a heat tremendous.",
          why: "Two faces of hacer: “hacer vueltas” is running errands, and “hace calor” is the weather. Weather in Spanish is hacer — it makes heat — never “está caliente”, which is a body or an object."
        },
        {
          speaker: "Yuranis",
          target: "Ay, mijo, aquí siempre hace calor. ¿Y qué vas a hacer el sábado?",
          translation: "Oh, love, it's always hot here. And what are you doing Saturday?",
          pronunciation: "ai, MEE-hoh, a-KEE SYEM-pre A-se ka-LOR. ee ke bas a a-SER el SA-ba-doh",
          literal: "Oh, my-son, here always it-makes heat. And what you-go to to-do the Saturday?",
          why: "“Mijo” (from mi hijo) is pure coastal affection, not literal kinship. “¿Qué vas a hacer?” is the near-future ir a + hacer — the natural way to ask about plans."
        },
        {
          speaker: "Alex",
          target: "Nada fijo todavía. ¿Ustedes qué hacen para el cumpleaños de tu mamá?",
          translation: "Nothing set yet. What are you all doing for your mom's birthday?",
          pronunciation: "NA-da FEE-hoh to-da-BEE-a. oos-TE-des ke A-sen PA-ra el koom-ple-AH-nyos de tu ma-MA",
          literal: "Nothing fixed yet. You-all what you-do for the birthday of your mom?",
          why: "On the coast the plural “you” is ustedes even among friends — there is no vosotros. “Qué hacen” is hacer again, this time third-person plural, still meaning plans."
        },
        {
          speaker: "Yuranis",
          target: "Vamos a hacer un sancocho en la playa. Hace años que no hacemos uno grande.",
          translation: "We're going to make a sancocho on the beach. We haven't made a big one in years.",
          pronunciation: "BA-mos a a-SER oon san-KO-cho en la PLA-ya. A-se A-nyos ke no a-SE-mos OO-no GRAN-de",
          literal: "We-go to to-make a sancocho on the beach. It-makes years that not we-make one big.",
          why: "Three hacer at once: “hacer un sancocho” (make a stew), and “hace años que…” — the time construction where hacer marks elapsed time: it has been years since we made one."
        },
        {
          speaker: "Alex",
          target: "¡Qué chévere! Yo hago las compras y me hago presente sin falta.",
          translation: "How great! I'll do the shopping and I'll be there without fail.",
          pronunciation: "ke CHE-be-re! yo A-goh las KOM-pras ee me A-goh pre-SEN-te seen FAL-ta",
          literal: "How cool! I I-make the shopping and to-me I-make present without fault.",
          why: "“Hago” is the irregular first-person of hacer (not “haco”). “Hacer las compras” is to do the shopping; “hacerse presente” is a fixed phrase for showing up, being there."
        }
      ],
      vocabulary: [
        {
          term: "hacer",
          explanation:
            "The great multipurpose verb: to do and to make, plus weather and elapsed time. Irregular: yo hago.",
          literal: "to do / to make",
          useWhen:
            "Doing tasks and making things, and describing the weather (“hace calor”) or elapsed time (“hace años”) — hacer does all of it.",
          avoidWhen:
            "For weather, never swap in estar (“está caliente” is a hot object, not hot weather).",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["hacer que", "deshacer", "rehacer", "quehacer"],
          example: {
            target: "Vamos a hacer un sancocho.",
            translation: "We're going to make a sancocho."
          }
        },
        {
          term: "¿qué haces?",
          explanation:
            "“What are you doing / what are you up to?” — the everyday question about someone's activity.",
          literal: "what you-do?",
          useWhen:
            "Greeting someone and asking what they are up to, or what they are doing right now.",
          avoidWhen:
            "As a literal demand for a list of tasks; it is usually light and social, like “what's up?”.",
          register: "friendly informal",
          region: "Universal; on the coast often stretched to “¿qué haces?” as pure greeting.",
          related: ["¿qué haces?", "¿qué estás haciendo?", "¿en qué andas?", "¿qué más?"],
          example: {
            target: "¿Qué haces por aquí?",
            translation: "What are you doing around here?"
          }
        },
        {
          term: "hacer una vuelta",
          explanation:
            "To run an errand. In the plural, hacer vueltas is the whole round of daily errands.",
          literal: "to do a turn",
          useWhen:
            "Talking about errands — “tengo que hacer unas vueltas”, “ando haciendo vueltas” — the daily round of small tasks.",
          avoidWhen:
            "For a leisurely stroll — that is “dar una vuelta”, a different phrase entirely.",
          register: "friendly informal",
          region: "General Colombian; “vueltas” for errands is nationwide.",
          related: ["hacer diligencias", "hacer mandados", "dar una vuelta", "hacer una vaina"],
          example: {
            target: "Tengo que hacer unas vueltas.",
            translation: "I have to run some errands."
          }
        },
        {
          term: "hace calor",
          explanation:
            "It's hot (weather). Weather is expressed with hacer — it “makes” heat, cold, sun, wind.",
          literal: "it-makes heat",
          useWhen:
            "Describing the weather — “hace calor”, “hace frío”, “hace sol”, “hace viento” — where the day is said to make it.",
          avoidWhen:
            "Never with estar or ser for weather. “Está caliente” means an object or a person is hot.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["hace frío", "hace sol", "hace viento", "está haciendo calor"],
          example: {
            target: "Hoy hace un calor tremendo.",
            translation: "It's terribly hot today."
          }
        },
        {
          term: "hace … que",
          explanation:
            "The elapsed-time frame: “hace años que no…” = it's been years since… Hacer marks the time.",
          literal: "it-makes … that",
          useWhen:
            "Saying how long since or how long something has been going: hace años que, hace un rato que.",
          avoidWhen:
            "Confusing it with “desde hace”, a related but distinct way to date an ongoing state.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["hace poco", "hace rato", "desde hace", "hace tiempo"],
          example: {
            target: "Hace años que no hacemos uno grande.",
            translation: "We haven't made a big one in years."
          }
        },
        {
          term: "hacer un sancocho",
          explanation:
            "To make a sancocho — the big shared soup that anchors coastal family gatherings.",
          literal: "to make a sancocho",
          useWhen:
            "Cooking or planning the communal soup, especially for a celebration or beach day.",
          avoidWhen:
            "Thinking of it as a quick meal; a sancocho is a half-day social event, not fast food.",
          register: "friendly informal",
          region: "Caribbean coast and nationwide; each region has its own sancocho.",
          related: ["sancocho de gallina", "hacer un asado", "hacer almuerzo", "olla"],
          example: {
            target: "Vamos a hacer un sancocho en la playa.",
            translation: "We're going to make a sancocho on the beach."
          }
        },
        {
          term: "mijo / mija",
          explanation:
            "“Love, dear” — from mi hijo/mi hija, an affectionate address with no literal family meaning.",
          literal: "my son / my daughter",
          useWhen:
            "Warm, familiar talk, especially from older to younger or between close neighbors.",
          avoidWhen:
            "Formal settings or with strangers, where it would sound over-familiar.",
          register: "friendly informal",
          region: "Nationwide; very frequent on the coast and among older speakers.",
          related: ["mijo", "mi amor", "mi vida", "m'ijo"],
          example: {
            target: "Ay, mijo, aquí siempre hace calor.",
            translation: "Oh, love, it's always hot here."
          }
        }
      ],
      note:
        "Hacer is three verbs in one: do/make for tasks and things, but also the weather (hace calor) and elapsed time (hace años que…). The reflex to break is “está caliente” for hot weather — that describes an object. Weather is something the day makes, so it is always hace, and that single switch fixes a very common beginner error.",
      culture: [
        {
          label: "A sancocho is an event, not a dish",
          body:
            "On the coast, hacer un sancocho means a whole day: a big pot over firewood, often on the beach or in a patio, with family drifting in and out for hours. The soup — chicken, fish or three meats with yuca, plantain and corn — is almost secondary to the gathering. Being invited to help make one, rather than just to eat, is a real sign of belonging. Offering to do the shopping, as Alex does, is the right instinct."
        },
        {
          label: "Weather is the coast's small talk",
          body:
            "In Barranquilla, Santa Marta and Cartagena the heat is a constant conversational opener, the way weather is in Britain. “¡Qué calor!” and “este solazo” are social glue, not real complaints. Responding in kind — agreeing the heat is brutal — is expected and friendly. It is also a natural, low-stakes place to practice hacer for weather, since you will hear hace calor a dozen times a day on the coast."
        },
        {
          label: "Costeño Spanish is fast and clipped",
          body:
            "Coastal speech drops or aspirates the s (“ehte solaso”, “lo do”), speeds up, and softens endings, which can overwhelm learners used to crisp Bogotá diction. It is not careless; it is a rich regional accent with deep African and Caribbean roots. Tuning your ear to it takes time, but locals are forgiving and warm, and asking someone to repeat — “¿cómo?” — is completely normal and never rude."
        },
        {
          label: "“Mijo” is warmth, not family",
          body:
            "When Yuranis calls Alex “mijo”, she is not claiming him as a son; the word is a blanket term of affection, especially from women and older speakers. You will hear it from shopkeepers, aunts, neighbors and strangers at a bus stop. Read literally it is baffling; read as tone it simply means the speaker feels warmly toward you, and returning the warmth — not the word itself — is the right response."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “Está caliente hoy” for “It's hot today”",
          whyItFails:
            "Weather is hacer, not estar: “hace calor”. “Está caliente” describes an object or, awkwardly, a person — not the day's weather.",
          sayInstead: "Hoy hace calor."
        },
        {
          mistake: "Saying “Estoy caliente” to mean “I'm hot” (temperature)",
          whyItFails:
            "For feeling hot you have heat — “tengo calor”. “Estoy caliente” has a strongly sexual meaning and will get laughs.",
          sayInstead: "Tengo calor."
        },
        {
          mistake: "Using “hacer una vuelta” for a leisurely stroll",
          whyItFails:
            "Hacer una vuelta is running an errand; a stroll is “dar una vuelta”. Swapping the verb swaps the whole meaning.",
          sayInstead: "Voy a dar una vuelta."
        },
        {
          mistake: "Saying “yo haco” for “I do/make”",
          whyItFails:
            "Hacer is irregular in the first person: it is “hago”, not the regular “haco”. This is one of the earliest irregulars to lock in.",
          sayInstead: "Yo hago las compras."
        }
      ],
      variations: [
        {
          form: "¿Qué haces?",
          register: "friendly informal",
          region: "Caribbean coast (tú)",
          whenToUse: "The coastal default for asking what someone is up to."
        },
        {
          form: "¿Qué hace?",
          register: "polite service",
          region: "General Colombian (usted)",
          whenToUse: "The usted version, for someone you treat formally."
        },
        {
          form: "¿Qué más, qué haces?",
          register: "friendly informal",
          region: "Medellín and Antioquia (paisa)",
          whenToUse: "The paisa greeting bundle, “what's up, what are you doing?”."
        },
        {
          form: "¿Qué estás haciendo?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The progressive, stressing the action right now."
        },
        {
          form: "¿En qué andas?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "A relaxed “what are you up to these days?”."
        }
      ],
      prompt: "Yuranis says “Hace años que no hacemos uno grande.” What does she mean?",
      choices: [
        "That her family has not made a big sancocho in a long time, which is exactly what makes Saturday's one special.",
        "That her family makes a big sancocho every single year without fail, and it is already a fixed birthday tradition.",
        "That this year the sancocho will be smaller than usual, because it is far too hot to cook a big pot on the beach."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Why do you say “hace calor” and not “está caliente” for the weather?",
          choices: [
            "Because “caliente” is a strong adjective, and Spanish quietly avoids strong adjectives when describing the weather.",
            "Because estar is only ever used for the weather on the coast, while the inland regions of the country prefer hacer.",
            "Because Spanish frames the weather with hacer — the day “makes” heat — while “está caliente” describes an object."
          ],
          answer: 2,
          tests: "hacer for weather rather than estar"
        },
        {
          prompt: "Alex says “tengo que hacer unas vueltas.” What does that mean?",
          choices: [
            "That he has to wander around the neighborhood on foot for a while to clear his head and cool off from the heat.",
            "That he has some errands to run — paying, buying, sorting a few things out — not that he is off for a stroll.",
            "That he has to drive several loops around the block, hunting for somewhere free to park the car near the shop."
          ],
          answer: 1,
          tests: "“hacer vueltas” as errands, not a stroll"
        },
        {
          prompt: "Yuranis calls Alex “mijo.” What does that word signal here?",
          choices: [
            "Warmth and familiarity — an all-purpose affectionate address — not that Alex is really her son or any relative.",
            "Formal respect toward someone older, rather like saying “sir”, and it puts a polite distance between the neighbors.",
            "That Alex is a good deal younger than she is, so she talks to him the way a mother would talk to a small child."
          ],
          answer: 0,
          tests: "“mijo” as affection, not literal kinship"
        },
        {
          prompt: "Alex says “me hago presente sin falta.” What does “hacerse presente” express?",
          choices: [
            "That he will bring a present for Yuranis's mother, since it happens to fall on her birthday that same Saturday.",
            "That he will show up and be there, presenting himself without fail; it is a fixed phrase for turning up to something.",
            "That he will arrive punctually at one exact agreed time, committing himself to the precise minute of the plan."
          ],
          answer: 1,
          tests: "“hacerse presente” as showing up"
        }
      ]
    },
    en: {
      title: "Planeando un guiso para el fin de semana",
      situation:
        "Alejandra se topa en la calle con Sarah, su vecina en Houston, en pleno frío. Entre el clima y las vueltas que ella tiene que hacer, la charla se convierte en una invitación: el sábado la familia de Sarah va a hacer un guiso grande por el cumpleaños de la mamá, y Alejandra se ofrece a ayudar, todo en inglés.",
      setting: {
        who: "Sarah es una vecina estadounidense que ha ido acogiendo a Alejandra en los planes familiares. Alejandra se va acostumbrando a la vida en Houston y a su charla de calle rápida.",
        what: "Un encuentro casual en la calle que se convierte en invitación a un guiso familiar de fin de semana.",
        when: "Un viernes helado al mediodía, cuando el frío es lo primero que cualquiera menciona.",
        where: "Houston, en la acera frente al edificio donde viven las dos.",
        why: "Porque también aquí los planes se arman en estas charlas de portal, y saber decir que sí con naturalidad es como una recién llegada entra en el calendario de la familia."
      },
      address: {
        form: "mixed",
        who: "Sarah y Alejandra se hablan con cercanía; el inglés no elige entre tú y usted.",
        why: "El inglés tiene un solo “you”, así que la confianza no se marca en el pronombre sino en el léxico y el tono: los apodos “hon” y “bud” y la voz cálida hacen el trabajo que en español haría el tú costeño.",
        ifYouSwitch:
          "Para sonar más formal, Alejandra no cambiaría el “you” sino las palabras: “How are you?” en vez de “What are you up to?”, y soltaría los apodos. En inglés el registro vive en la elección de palabras, no en el pronombre."
      },
      dialogue: [
        {
          speaker: "Sarah",
          target: "Alejandra! What are you doing out here in this cold?",
          translation: "¡Alejandra! ¿Qué haces aquí afuera con este frío?",
          pronunciation: "a-le-JAN-dra! uot ar yu DU-ing aut jir in dis kold",
          literal: "¡Alejandra! ¿Qué estás tú haciendo afuera aquí en este frío?",
          why: "“What are you doing?” es el equivalente de “¿qué haces?”: to do para la actividad de alguien. En inglés se prefiere el presente continuo, are you doing, no el simple “what do you do”."
        },
        {
          speaker: "Alejandra",
          target: "I've got some errands to run. It's freezing today.",
          translation: "Tengo que hacer unas vueltas. Hoy hace un frío terrible.",
          pronunciation: "aiv got sam E-rands tu ran. its FRI-sing tu-DEI",
          literal: "Yo-he conseguido algunas diligencias para correr. Ello-es congelando hoy.",
          why: "Las vueltas son “errands”, y se “run”, no se “make”. Y el clima va con it's: “it's freezing”, nunca “it makes cold” — el calco directo del español “hace frío”."
        },
        {
          speaker: "Sarah",
          target: "Oh, hon, it's always cold here in winter. What are you up to Saturday?",
          translation: "Ay, mija, aquí siempre hace frío en invierno. ¿Qué vas a hacer el sábado?",
          pronunciation: "o, jon, its OL-ueis kold jir in UIN-ter. uot ar yu ap tu SA-ter-dei",
          literal: "Oh, cariño, ello-es siempre frío aquí en invierno. ¿Qué estás tú arriba a sábado?",
          why: "Otra vez el clima con it's, no con “makes”. “What are you up to?” es un “¿qué vas a hacer / en qué andas?” muy natural para preguntar por los planes de alguien."
        },
        {
          speaker: "Alejandra",
          target: "Nothing set yet. What are you guys doing for your mom's birthday?",
          translation: "Nada fijo todavía. ¿Ustedes qué hacen para el cumpleaños de tu mamá?",
          pronunciation: "NO-thing set yet. uot ar yu gais DU-ing for yor moms BER-thdei",
          literal: "Nada fijado aún. ¿Qué están ustedes tipos haciendo para tu mamá cumpleaños?",
          why: "“You guys” es el plural de “you” que el inglés estándar no tiene; hace el papel del ustedes. No es sólo para hombres: se usa para cualquier grupo en habla relajada."
        },
        {
          speaker: "Sarah",
          target: "We're going to make a big stew. We haven't made one in years.",
          translation: "Vamos a hacer un guiso grande. Hace años que no hacemos uno.",
          pronunciation: "uir GO-ing tu meik a big stu. ui JA-vent meid uan in yirs",
          literal: "Nosotros-estamos yendo a hacer un grande guiso. Nosotros no-hemos hecho uno en años.",
          why: "Aquí hacer se parte en dos: “make a stew” (producir algo, make) y el tiempo transcurrido, que el inglés arma con el presente perfecto “haven't made … in years”, no con un “it makes years that…”."
        },
        {
          speaker: "Alejandra",
          target: "How nice! I'll do the shopping and I'll be there for sure.",
          translation: "¡Qué chévere! Yo hago las compras y me hago presente sin falta.",
          pronunciation: "jau nais! ail du de SHO-ping and ail bi der for shur",
          literal: "¡Qué bonito! Yo haré la compra y yo estaré ahí para seguro.",
          why: "“Do the shopping” — las compras se “do”, no se “make”. Y “be there” es el equivalente de “hacerse presente”: en inglés, asistir es sencillamente estar ahí, con el verbo be."
        }
      ],
      vocabulary: [
        {
          term: "do vs make",
          explanation:
            "El inglés parte hacer en dos: do para tareas y actividades, make para cosas que se producen o crean.",
          literal: "hacer (tarea) / hacer (producir)",
          useWhen:
            "Para tareas y cosas que se producen — “do the shopping”, “make a stew”, “make a decision” — según el caso.",
          avoidWhen:
            "Mezclándolos: “make the shopping” o “do a cake” suenan mal a oído nativo.",
          register: "neutro",
          region: "Universal.",
          related: ["do", "make", "get done", "prepare"],
          example: {
            target: "I'll do the shopping.",
            translation: "Yo hago las compras."
          }
        },
        {
          term: "what are you doing?",
          explanation:
            "“¿Qué haces?” El inglés usa el presente continuo para lo que alguien hace ahora o va a hacer.",
          literal: "¿qué estás haciendo?",
          useWhen:
            "Saludar y preguntar por la actividad o los planes: what are you doing here, what are you doing Saturday.",
          avoidWhen:
            "Diciendo “what do you do?”, que pregunta por la profesión, no por el momento.",
          register: "amistoso informal",
          region: "Universal.",
          related: ["what are you up to?", "what's up?", "what are you doing?", "how's it going?"],
          example: {
            target: "What are you doing out here?",
            translation: "¿Qué haces aquí afuera?"
          }
        },
        {
          term: "run errands",
          explanation:
            "Hacer vueltas o diligencias. Las vueltas en inglés se “run”, no se “make” ni se “do”.",
          literal: "correr diligencias",
          useWhen:
            "Hablar de los mandados — “I have to run some errands”, “I'm out running errands” — las vueltas del día.",
          avoidWhen:
            "Diciendo “make errands” o “make some turns”, ambos calcos del español.",
          register: "neutro",
          region: "Universal.",
          related: ["errands", "chores", "get things done", "run to the store"],
          example: {
            target: "I've got some errands to run.",
            translation: "Tengo que hacer unas vueltas."
          }
        },
        {
          term: "it's cold / it's freezing",
          explanation:
            "El clima con be: “it's cold”, “it's freezing”. Nunca con make, aunque el español diga “hace frío”.",
          literal: "está frío / está congelando",
          useWhen:
            "Describir el clima: it's cold, it's hot, it's sunny, it's windy.",
          avoidWhen:
            "Diciendo “it makes cold”, calco directo de “hace frío” que no existe en inglés.",
          register: "neutro",
          region: "Universal; “freezing” para exagerar el frío es muy común en Estados Unidos.",
          related: ["it's hot", "it's freezing", "it's chilly", "it's sunny"],
          example: {
            target: "It's freezing today.",
            translation: "Hoy hace un frío terrible."
          }
        },
        {
          term: "in years",
          explanation:
            "“En años”, para tiempo transcurrido, con presente perfecto: “I haven't … in years”.",
          literal: "en años",
          useWhen:
            "Decir cuánto hace que no pasa algo: I haven't seen him in years, we haven't made one in years.",
          avoidWhen:
            "Armándolo como el español “it makes years that…”, que en inglés no funciona.",
          register: "neutro",
          region: "Universal.",
          related: ["in ages", "for years", "in a long time", "haven't … since"],
          example: {
            target: "We haven't made one in years.",
            translation: "Hace años que no hacemos uno."
          }
        },
        {
          term: "make a stew",
          explanation:
            "Hacer un guiso — el equivalente norteño del sancocho: la olla grande que reúne a la familia.",
          literal: "hacer un guiso",
          useWhen:
            "Cocinar o planear el plato comunal para una reunión o cumpleaños.",
          avoidWhen:
            "Usando “do a stew”; los platos que se cocinan van con make, no con do.",
          register: "amistoso informal",
          region: "Universal; el guiso/stew como plato de reunión familiar.",
          related: ["make dinner", "make soup", "cook a meal", "potluck"],
          example: {
            target: "We're going to make a big stew.",
            translation: "Vamos a hacer un guiso grande."
          }
        },
        {
          term: "hon / bud",
          explanation:
            "Apodos cariñosos (“hon” de honey, “bud” de buddy) que marcan cercanía sin tocar el pronombre.",
          literal: "cariño / amigo",
          useWhen:
            "Trato cálido y relajado entre vecinos, en tiendas y cafeterías.",
          avoidWhen:
            "Contextos formales o con desconocidos, donde pueden sonar demasiado familiares.",
          register: "amistoso informal",
          region: "Estados Unidos y norte/este de EE. UU.; “bud” es muy estadounidense.",
          related: ["honey", "bud", "buddy", "dear"],
          example: {
            target: "Oh, hon, it's always cold here.",
            translation: "Ay, mija, aquí siempre hace frío."
          }
        }
      ],
      note:
        "Donde el español pone hacer, el inglés reparte en tres: do para tareas (pero las vueltas se run), make para lo que se produce, y be para el clima y para asistir. El error estrella es “it makes cold” por “hace frío”: el clima siempre va con it's. Aprende do/make/be como tres casillas y el calco de hacer desaparece.",
      culture: [
        {
          label: "El “potluck” es el sancocho del norte",
          body:
            "El guiso de Sarah cumple el papel del sancocho costeño: comida compartida como excusa para reunir a la familia. En Estados Unidos la versión más típica es el “potluck”, donde cada quien lleva un plato y todo se pone en común. No hay la olla única sobre leña, pero sí la misma idea: la comida importa menos que el juntarse. Ofrecerse a llevar algo o a ayudar, como hace Alejandra, es exactamente lo que se espera."
        },
        {
          label: "El frío es el rompehielos",
          body:
            "Si en la costa colombiana el tema es el calor, en Estados Unidos es el frío. “It's freezing”, “cold enough for you?” y quejas cariñosas sobre la nieve son el pegamento social del invierno, igual que el clima en Inglaterra. Seguir la corriente — coincidir en que hace un frío terrible — es amable y esperado. Además es un lugar cómodo para practicar el clima con be, porque lo vas a oír muchísimas veces al día."
        },
        {
          label: "“You guys”, el ustedes reinventado",
          body:
            "El inglés estándar perdió el plural de “you”, y la gente lo ha reinventado: “you guys” en casi todo Norteamérica, “y'all” en el sur de EE. UU., “yous” en algunas zonas. “You guys” no es sólo masculino: sirve para cualquier grupo. Es el hueco que en español llenan ustedes o vosotros, y oírlo ayuda a recordar que, aunque “you” sea uno solo en singular, la gente busca marcar el plural igual."
        },
        {
          label: "Los apodos hacen el trabajo del tú",
          body:
            "Como no hay vos ni tú, la cercanía en inglés se apoya en apodos — “hon”, “bud”, “buddy”, “dear”, “pal” — y en el tono. Una vecina que te saluda con “hey, hon” está marcando confianza con una palabra, no con el pronombre. Para un hispanohablante esto es clave: no busques un “tú” que no existe; escucha los apodos y el tono, que son los que te dicen cuán cerca te está tratando la otra persona."
        }
      ],
      pitfalls: [
        {
          mistake: "It makes cold today.",
          whyItFails:
            "Calca “hace frío”. En inglés el clima va con be: “it's cold”. “It makes cold” no existe y delata al instante la traducción literal.",
          sayInstead: "It's cold today."
        },
        {
          mistake: "I have to make some errands.",
          whyItFails:
            "Las vueltas no se “make”: se “run”. “Make errands” mezcla el make del español hacer con un sustantivo que pide otro verbo.",
          sayInstead: "I have to run some errands."
        },
        {
          mistake: "What do you do this Saturday?",
          whyItFails:
            "“What do you do?” pregunta por la profesión o la costumbre. Para un plan puntual el inglés usa el continuo: “what are you doing?”.",
          sayInstead: "What are you doing on Saturday?"
        },
        {
          mistake: "I'll make the shopping.",
          whyItFails:
            "Las compras se “do”, no se “make”. Es la trampa clásica de do vs make: la tarea va con do, no con make.",
          sayInstead: "I'll do the shopping."
        }
      ],
      variations: [
        {
          form: "What are you up to?",
          register: "amistoso informal",
          region: "General norteamericano",
          whenToUse: "Preguntar de forma relajada qué hace o planea alguien."
        },
        {
          form: "What are you doing?",
          register: "neutro",
          region: "Universal",
          whenToUse: "La pregunta directa por la actividad de alguien ahora."
        },
        {
          form: "What are you doing later?",
          register: "amistoso informal",
          region: "Universal",
          whenToUse: "Tantear los planes de alguien para más tarde."
        },
        {
          form: "What have you been up to?",
          register: "amistoso informal",
          region: "Universal",
          whenToUse: "Preguntar qué ha hecho alguien últimamente, tras un tiempo sin verse."
        },
        {
          form: "How's it going?",
          register: "amistoso informal",
          region: "Universal",
          whenToUse: "Un saludo abierto que también invita a contar qué hace uno."
        }
      ],
      prompt: "Sarah dice “We haven't made one in years.” ¿Qué quiere decir?",
      choices: [
        "Que su familia no prepara un guiso grande desde hace mucho tiempo, así que el del sábado es especial.",
        "Que su familia hace un guiso grande cada año sin falta, y ya es una tradición fija para el cumpleaños.",
        "Que este año el guiso será más pequeño de lo normal porque hace demasiado frío para cocinar afuera."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Por qué en inglés el clima va con be y no con make?",
          choices: [
            "Porque “cold” es un adjetivo fuerte, y el inglés evita los adjetivos fuertes al hablar del clima diario.",
            "Porque make sólo se usa para el clima en algunas regiones, mientras que en el resto se prefiere be.",
            "Porque el inglés expresa el clima con be — “it's cold” —; “it makes cold” es un calco del español que no existe."
          ],
          answer: 2,
          tests: "be para el clima frente al calco “make”"
        },
        {
          prompt: "Alejandra dice “errands to run”. ¿Qué son los “errands”?",
          choices: [
            "Vueltas sin rumbo caminando por el barrio para despejarse un rato y tomar aire fresco en la calle.",
            "Diligencias o mandados — pagar, comprar, tramitar cosas —, lo que en Colombia se llama hacer vueltas.",
            "Varias vueltas en carro alrededor de la manzana buscando un lugar libre donde parquear el vehículo."
          ],
          answer: 1,
          tests: "“errands” como diligencias/vueltas"
        },
        {
          prompt: "Sarah dice “hon”. ¿Qué función cumple esa palabra?",
          choices: [
            "Marca cariño y cercanía, el trabajo que en español haría el tú o el vos; no cambia el pronombre “you”.",
            "Marca respeto formal hacia alguien mayor, parecido a decir “señora”, poniendo distancia entre las dos.",
            "Marca que le habla en plural a varias personas a la vez, incluidas otras vecinas que pasan por la calle."
          ],
          answer: 0,
          tests: "el inglés marca cercanía con léxico, no con pronombre"
        },
        {
          prompt: "¿Cuál es la diferencia entre “do” y “make” con las tareas?",
          choices: [
            "Son intercambiables en el inglés cotidiano; da igual decir “do the shopping” que “make the shopping”.",
            "do se usa para tareas y actividades (do the shopping), y make para cosas que se producen (make a stew).",
            "make se usa siempre que hay esfuerzo físico, y do sólo para tareas mentales o de escritorio en la oficina."
          ],
          answer: 1,
          tests: "do para tareas, make para lo producido"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/02-foundation-state.js");
