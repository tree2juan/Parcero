/*
 * Lesson block: foundation / perception and exchange.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Every lesson spines on exactly one verb from data/curriculum.js, named in its
 * `verb` field so the coverage report can prove the curriculum is actually
 * taught rather than merely listed. This block takes the three verbs a learner
 * reaches for constantly and never quite trusts: ver (to see and to watch),
 * dar (to give, and the engine behind half of Colombia's idioms) and saber
 * (to know a fact, to know how, and — surprisingly — to taste).
 *
 * The two directions are mirrors: same number of dialogue turns, same number of
 * vocabulary entries, same number of culture notes, pitfalls, variations and
 * practice questions, and the same optional slots filled on the same rows. That
 * is enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "reliving-the-match-in-the-stairwell",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "courteous",
    pathways: ["foundation"],
    verb: "ver",
    review: "pending",
    es: {
      title: "Repasar el partido en las escaleras",
      situation:
        "Alex se cruza con don Fabio, su vecino del tercer piso, en las escaleras del edificio en Chapinero. Anoche jugó Millonarios y quedaron dos a dos. Don Fabio quiere comentar cada jugada, y Alex tiene que seguirle la conversación sobre lo que vio — o no vio — por la televisión, aunque va de afán para el trabajo.",
      setting: {
        who: "Don Fabio has lived on the third floor for twenty years and never misses a Millonarios match. Alex moved in two months ago and follows football only loosely, but has already worked out that don Fabio is the neighbour who knows everyone in the building.",
        what: "A two-minute recap of last night's match, caught on the stairs on the way out the door.",
        when: "Early on a Thursday morning, both of them heading out, Alex already running late for work.",
        where: "Bogotá, a red-brick building in Chapinero where neighbours still stop to talk on the stairs rather than nodding past each other.",
        why: "Because this is how Alex stops being a stranger and becomes a neighbour. Don Fabio's match talk is an invitation, and following it — even badly — is what turns a face in the lift into the person who will one day take in a parcel for you."
      },
      address: {
        form: "usted",
        who: "Don Fabio uses usted with Alex, and Alex uses usted straight back, the way most people in Bogotá do with a neighbour they do not yet know well.",
        why: "In Bogotá usted is the safe default between neighbours of different ages: warm but not presumptuous. It lets don Fabio be friendly without pretending they are old friends, and it lets Alex be respectful of an older man without sounding stiff.",
        ifYouSwitch: "Tú would not be rude, but from a younger newcomer to an older resident it moves faster than the friendship actually has. Vos is barely used in Bogotá and would sound borrowed from Medellín."
      },
      dialogue: [
        {
          speaker: "Don Fabio",
          target: "¿Vio el partido anoche, Alex? Quedamos dos a dos.",
          translation: "Did you see the match last night, Alex? We ended up two-all.",
          pronunciation: "BYO el par-TEE-do a-NO-che, AH-leks? keh-DA-mos dos a dos",
          literal: "Saw the match last-night, Alex? We-stayed two to two.",
          why: "“Vio” is the usted preterite of ver, the plain verb for taking a match in with your eyes. Note “quedamos”, literally “we stayed”, which is how Colombians report a final score — the team ended up at two-all rather than winning or losing."
        },
        {
          speaker: "Alex",
          target: "Lo vi por la tele, pero me perdí el último gol.",
          translation: "I saw it on TV, but I missed the last goal.",
          pronunciation: "lo VEE por la TEH-leh, PEH-ro me PER-dee el OOL-tee-mo gol",
          literal: "It I-saw by the tele, but me I-lost the last goal.",
          why: "“Vi” is the first-person preterite of ver. Colombians say “ver por la tele” — see it via the TV — where English switches the verb to “watch”. The verb stays ver; only the preposition tells you it happened on a screen."
        },
        {
          speaker: "Don Fabio",
          target: "Uy, ese gol fue robado. El árbitro no vio la falta, ¿si ve?",
          translation: "Ugh, that goal was daylight robbery. The ref didn't see the foul, you know?",
          pronunciation: "OO-ee, EH-se gol fweh ro-BA-do. el AR-bee-tro no BYO la FAL-ta, see BEH",
          literal: "Ugh, that goal was robbed. The referee not saw the foul, if see?",
          why: "“¿Si ve?” — literally “if you see?” — is not a real question about eyesight; it is a Bogotá discourse tag meaning roughly “you know?” or “right?”. It hangs on the end of a sentence inviting you to agree, and answering it literally marks you as foreign."
        },
        {
          speaker: "Alex",
          target: "Ah, ya veo. ¿Y usted por qué no fue al estadio?",
          translation: "Ah, I get it. And why didn't you go to the stadium?",
          pronunciation: "ah, ya BEH-o. ee oos-TED por KEH no fweh al es-TA-dyo",
          literal: "Ah, already I-see. And you why not went to-the stadium?",
          why: "“Ya veo” — literally “already I see” — is the standard way to say “I get it now”, the same metaphor of seeing-as-understanding that English uses. Here veo is present tense, first person, and it means comprehension, not vision."
        },
        {
          speaker: "Don Fabio",
          target: "No, hombre, yo lo veo aquí tranquilo. En el estadio uno no ve nada.",
          translation: "No, man, I watch it here in peace. At the stadium you can't see a thing.",
          pronunciation: "no, OM-breh, yo lo BEH-o a-KEE tran-KEE-lo. en el es-TA-dyo OO-no no beh NA-da",
          literal: "No, man, I it I-watch here calm. In the stadium one not sees nothing.",
          why: "Two present-tense forms of ver in one breath: “yo lo veo” for how he habitually watches, and “uno no ve nada”, where “uno” (one) is Colombia's favourite way to make a personal opinion sound like a general truth about everybody."
        },
        {
          speaker: "Alex",
          target: "Le entiendo. Bueno, nos vemos, don Fabio, que llevo afán.",
          translation: "I hear you. Right, see you, don Fabio, I'm in a rush.",
          pronunciation: "leh en-TYEN-do. BWEH-no, nos BEH-mos, don FA-byo, ke YEH-vo a-FAN",
          literal: "To-you I-understand. Good, us we-see, don Fabio, that I-carry hurry.",
          why: "“Nos vemos” — literally “we see each other” — is the everyday goodbye, warmer than “adiós”, which many Colombians save for a real parting. “Llevar afán”, to carry hurry, is the local way to say you are pressed for time."
        }
      ],
      vocabulary: [
        {
          term: "ver",
          explanation: "The plain verb for seeing and, in Colombia, for watching a screen: television, a match, a film. It covers both the passive fact of an image reaching your eyes and the ordinary act of watching something you chose to sit down in front of.",
          literal: "to see / to watch",
          useWhen: "Talking about catching a match, seeing a film, watching television, or noticing that something is the case.",
          avoidWhen: "You mean to look at or study something on purpose with your eyes fixed on it; that pull toward a target is “mirar”, not ver.",
          register: "neutral",
          region: "Universal Spanish; the habit of using ver rather than mirar for television is especially firm across Colombia.",
          related: ["mirar", "observar", "fijarse", "darse cuenta"],
          example: {
            target: "Lo vi por la tele.",
            translation: "I saw it on TV."
          }
        },
        {
          term: "mirar",
          explanation: "To look at or watch actively — to point your eyes at something and hold them there. It carries intention where ver carries perception, so it is the verb for looking someone in the eye or watching a child cross the street.",
          literal: "to look at",
          useWhen: "Directing your gaze on purpose: look at this, look over there, keep an eye on the road.",
          avoidWhen: "For television and matches in Colombia, where “ver” is the settled choice and “mirar televisión” sounds imported from Spain.",
          register: "neutral",
          region: "General Spanish. In Colombia the ver-for-screens preference makes the ver/mirar line a little sharper than it is in Spain.",
          related: ["ver", "observar", "echar un ojo", "vigilar"],
          example: {
            target: "Mira ese gol otra vez.",
            translation: "Look at that goal again."
          }
        },
        {
          term: "¿si ve?",
          explanation: "A Bogotá tag question dropped on the end of a sentence to invite agreement, close in force to “you know?” or “see what I mean?”. It is discourse glue, not a genuine enquiry about whether you can see.",
          literal: "if [you] see?",
          useWhen: "Softening an opinion and checking the other person is still with you, mid-story or at the end of a point.",
          avoidWhen: "A formal or written register, where it reads as too chatty; and never answer it as though it were a literal question.",
          register: "friendly informal",
          region: "Very Bogotá; the paisa equivalent is “¿ve pues?” and the Caribbean coast leans on “¿oíste?” instead.",
          related: ["¿si me entiende?", "¿ve pues?", "¿cierto?", "¿oíste?"],
          example: {
            target: "El árbitro no vio nada, ¿si ve?",
            translation: "The ref saw nothing, you know?"
          }
        },
        {
          term: "ya veo",
          explanation: "“I see”, in the sense of “now I understand”. It uses the present tense of ver for the moment comprehension lands, exactly as English borrows the language of sight for understanding.",
          literal: "already I-see",
          useWhen: "Signalling that an explanation has just clicked into place for you.",
          avoidWhen: "You literally mean you can now physically see something; there you would simply say “ya lo veo” with the thing named.",
          register: "neutral",
          region: "Universal Spanish; interchangeable with “ya entiendo” and, more colloquially, “ya caigo”.",
          related: ["ya entiendo", "ah, claro", "ya caigo", "tiene sentido"],
          example: {
            target: "Ah, ya veo por qué perdieron.",
            translation: "Ah, I see why they lost."
          }
        },
        {
          term: "nos vemos",
          explanation: "The everyday “see you”, built from the reflexive of ver — literally “we see each other”. It assumes a next time and is warmer than a flat goodbye, which is why Colombians reach for it constantly.",
          literal: "us we-see",
          useWhen: "Leaving anyone you expect, or claim to expect, to cross paths with again — neighbours, colleagues, the shopkeeper.",
          avoidWhen: "A genuine, possibly final farewell, where “que le vaya bien” or a real “adiós” carries the weight.",
          register: "friendly informal",
          region: "Universal Spanish; in Colombia “nos estamos viendo” is an even softer variant that promises nothing firm.",
          related: ["nos estamos viendo", "chao", "hablamos", "que esté bien"],
          example: {
            target: "Bueno, nos vemos mañana.",
            translation: "Right, see you tomorrow."
          }
        },
        {
          term: "quedar (dos a dos)",
          explanation: "Here “quedar” means to end up in a state or a result. For a scoreline, “quedamos dos a dos” is how you report that the match finished level, with quedar doing the work English hands to “ended” or “drew”.",
          literal: "to stay / to end up",
          useWhen: "Reporting how something turned out — a score, a plan, a final arrangement.",
          avoidWhen: "You mean to remain in a place over time; that sense leans on “quedarse”, the reflexive.",
          register: "neutral",
          region: "Universal Spanish; the two-all football usage is everyday across Colombia.",
          related: ["empatar", "quedarse", "terminar", "el empate"],
          example: {
            target: "Quedamos dos a dos.",
            translation: "We ended up two-all."
          }
        },
        {
          term: "llevar afán",
          explanation: "To be in a hurry. Colombians “carry” hurry rather than “having” it, and “afán” is the standard noun for the pressure of not enough time. “Tener afán” and “estar de afán” say the same thing.",
          literal: "to carry hurry",
          useWhen: "Excusing yourself politely because you are pressed for time.",
          avoidWhen: "You mean eagerness or enthusiasm; “afán” is about time pressure, not desire.",
          register: "friendly informal",
          region: "Strongly Colombian; much of Latin America says “tener prisa”, which Colombians understand but rarely say.",
          related: ["tener afán", "estar de afán", "estar corriendo", "sin afán"],
          example: {
            target: "Nos vemos, que llevo afán.",
            translation: "See you, I'm in a rush."
          }
        }
      ],
      note:
        "The one thing to carry away is that ver, not mirar, is the Colombian verb for a screen: you “ve” television, a match, a film. Save mirar for eyes fixed on a target. And treat “¿si ve?” as punctuation, not a question — it is asking you to nod along, the same way English tucks “you know?” onto the end of a thought.",
      culture: [
        {
          label: "“¿Si ve?” is glue, not a question",
          body: "Dropped at the end of a sentence, “¿si ve?” asks you to agree, not to report on your eyesight. Bogotanos scatter it through a story the way English speakers scatter “you know?”, and a good listener simply nods or murmurs “claro”. Take it literally — pausing to confirm that yes, you can see — and you break the rhythm and mark yourself as new. It is one of the fastest tells of a fluent ear."
        },
        {
          label: "Football is watched at home for a reason",
          body: "Don Fabio's preference for watching at home is not only about comfort. For decades many Colombians have treated the stadium as somewhere to weigh up before taking the family, and the living-room television, with neighbours drifting in and out, became the real social centre of a match. Saying you “lo vi por la tele” is completely normal and carries none of the apology an English speaker might expect for not going in person."
        },
        {
          label: "Colombians would rather not say adiós",
          body: "“Adiós” in Colombia can sound heavy, as if the parting might be for good. Day to day people prefer “nos vemos”, “chao”, “hablamos” or “que esté bien”, all of which quietly assume another meeting. Reaching for “adiós” at the end of an ordinary chat on the stairs can land as oddly final, even a touch cold. Keep it for real goodbyes and use the softer forms for everything else."
        },
        {
          label: "Ver and mirar blur in fast speech",
          body: "Textbooks draw a clean line — ver is passive seeing, mirar is active looking — and in careful speech it holds. In the rush of conversation Colombians blur it, saying “mira” to mean “look, listen” and “¿viste?” to mean “you see?”. The one place the line stays firm is the screen: television and matches are almost always “ver”, and switching to “mirar” there is the giveaway of a learner reaching for the wrong default."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “Estoy mirando televisión” for “I'm watching TV”",
          whyItFails: "In Colombia a screen is something you “ve”, not something you “miras”. “Mirar televisión” is understood but sounds imported from Spain, and to a Colombian ear it puts an odd, effortful spotlight on the act of looking.",
          sayInstead: "Estoy viendo televisión."
        },
        {
          mistake: "Answering “¿si ve?” as though it asked about your eyesight",
          whyItFails: "“¿Si ve?” is a tag meaning “you know?”. Replying “sí, veo bien” treats it as a literal question and stops the conversation dead, because your neighbour was only asking you to agree with him.",
          sayInstead: "Claro."
        },
        {
          mistake: "Ending every chat with “Adiós”",
          whyItFails: "“Adiós” can sound final in Colombia, as though you might not meet again. Used after a light exchange on the stairs it feels heavier than you intend and can read as cool or abrupt.",
          sayInstead: "Nos vemos."
        },
        {
          mistake: "Asking “¿Miró el partido?” for “Did you watch the match?”",
          whyItFails: "For a match, the settled verb is ver, so the natural question is “¿Vio el partido?”. “¿Miró el partido?” is grammatical but sounds like you are asking whether he glanced at it rather than watched it.",
          sayInstead: "¿Vio el partido?"
        }
      ],
      variations: [
        {
          form: "¿Vio el partido anoche?",
          register: "polite informal",
          region: "Bogotá",
          whenToUse: "The usted default with a neighbour or an older person you address respectfully."
        },
        {
          form: "¿Viste el partido?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "With someone you already tutear — a friend or a peer roughly your own age."
        },
        {
          form: "¿Vio pues el partido?",
          register: "friendly informal",
          region: "Medellín / paisa",
          whenToUse: "The paisa colouring, where “pues” softens and rounds off almost any question."
        },
        {
          form: "Nos vemos mañana.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Leaving someone you expect to see again soon."
        },
        {
          form: "Nos estamos viendo.",
          register: "friendly informal",
          region: "Colombian",
          whenToUse: "An even softer sign-off that promises contact without pinning down when."
        }
      ],
      prompt: "Don Fabio ends a complaint about the referee with “¿si ve?”. What is the right way to take it?",
      choices: [
        "As a tag like “you know?”, inviting Alex to agree — the natural reply is a simple “claro”, not a report on his eyesight.",
        "As a genuine question about whether Alex can physically see the television from where he happens to be sitting.",
        "As a complaint that Alex has not been paying enough attention to the match and really ought to watch the replay."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Alex says “Lo vi por la tele.” Why does he use ver rather than mirar?",
          choices: [
            "Because mirar would be far too formal for a casual, early-morning chat with a neighbour on the stairs.",
            "Because in Colombia a screen is something you “ve” — ver is the settled verb for watching television and matches.",
            "Because he only glanced at the match for a second, and ver signals that he was not really paying attention."
          ],
          answer: 1,
          tests: "ver as the Colombian default verb for a screen"
        },
        {
          prompt: "Don Fabio says “nos vemos” instead of “adiós.” What does that choice signal?",
          choices: [
            "That he is unsure whether he will ever run into Alex again and wants to leave the door politely open.",
            "That he is being noticeably more formal than usual because they still do not know each other well at all.",
            "That he treats this as an ordinary parting between neighbours who will cross paths again before long."
          ],
          answer: 2,
          tests: "“nos vemos” as the warm, everyday goodbye"
        },
        {
          prompt: "Which sentence uses ver the way a Colombian would for watching television?",
          choices: [
            "Anoche estuve mirando televisión hasta muy tarde en la sala con toda la familia reunida.",
            "Anoche miré la televisión un rato largo antes de quedarme finalmente dormido en el sofá.",
            "Anoche estuve viendo televisión hasta tarde y me perdí el final del partido de Millonarios."
          ],
          answer: 2,
          tests: "ver, not mirar, for watching TV"
        },
        {
          prompt: "“Ya veo” in the dialogue means which of these?",
          choices: [
            "That Alex can at last physically make out the score on the small television screen from the stairwell.",
            "That the explanation has just clicked and Alex now understands why the goal caused such an argument.",
            "That Alex would like don Fabio to keep going because he has still not quite managed to follow the story."
          ],
          answer: 1,
          tests: "“ya veo” as understanding rather than sight"
        }
      ]
    },
    en: {
      title: "Comentar el partido en las escaleras del edificio",
      situation:
        "Alejandra se cruza con Megan, su vecina del tercer piso, en las escaleras del edificio en Toronto. Anoche jugó el Toronto FC y quedaron dos a dos. Megan quiere comentar cada jugada en inglés, y Alejandra tiene que seguirle la conversación sobre lo que vio — o no vio — por la televisión, aunque va de afán para el trabajo.",
      setting: {
        who: "Megan lleva veinte años en el tercer piso y no se pierde un partido del Toronto FC. Alejandra llegó al edificio hace dos meses y sigue el fútbol apenas de reojo, pero ya aprendió que Megan es la vecina que conoce a todo el mundo.",
        what: "Un resumen de dos minutos del partido de anoche, atrapado en las escaleras camino a la puerta.",
        when: "Temprano un jueves por la mañana, las dos saliendo, Alejandra ya sobre el tiempo para el trabajo.",
        where: "Toronto, un edificio de ladrillo donde los vecinos todavía se paran a conversar en las escaleras en vez de pasar de largo.",
        why: "Porque así Alejandra deja de ser una desconocida y se vuelve una vecina. La charla futbolera de Megan es una invitación, y seguirla — aunque sea mal — es lo que convierte una cara del ascensor en la persona que un día le recibirá un paquete."
      },
      address: {
        form: "mixed",
        who: "Megan y Alejandra se tratan de “you”, la única forma de segunda persona que tiene el inglés, así que no hay que elegir entre tú y usted.",
        why: "El inglés no marca el respeto con el pronombre, porque solo existe “you”. El registro lo cargan las palabras: un “would you mind…” o un “sir” hacen el trabajo que en español haría el usted, y entre vecinas basta con el tono y un “hi” cordial.",
        ifYouSwitch: "No hay pronombre al que cambiarse. Si Alejandra quiere sonar más formal, no cambia el “you”: añade “excuse me”, “please” o el apellido con “Ms.”, y si quiere sonar cercana, usa el nombre de pila y un saludo relajado."
      },
      dialogue: [
        {
          speaker: "Megan",
          target: "Did you see the game last night, Ale? They tied two–two.",
          translation: "¿Viste el partido anoche, Ale? Quedaron dos a dos.",
          pronunciation: "did yu SII de GUEIM last nait, A-le? dei taid tu-tu",
          literal: "¿Viste el juego anoche, Ale? Ellos empataron dos-dos.",
          why: "“See” es el verbo llano de percepción, y para un partido el inglés admite tanto “see the game” como “watch the game”; aquí “see” es simplemente enterarse de él. Ojo con “tied”, empatar: el inglés usa un verbo propio donde el español dice “quedar dos a dos”."
        },
        {
          speaker: "Alejandra",
          target: "I saw it on TV, but I missed the last goal.",
          translation: "Lo vi por la tele, pero me perdí el último gol.",
          pronunciation: "ai SOO it on ti-VII, bot ai mist de last goul",
          literal: "Yo vi-lo en tele, pero yo perdí el último gol.",
          why: "Aquí “saw” funciona, pero cuidado: para el acto de estar un buen rato frente a la tele, el inglés prefiere “watch” (“I was watching TV”). “See” sirve para el hecho puntual de haberlo visto; “watch” para la actividad sostenida."
        },
        {
          speaker: "Megan",
          target: "Ugh, that goal was robbery. The ref didn't see the foul, you know?",
          translation: "Uy, ese gol fue un robo. El árbitro no vio la falta, ¿si ve?",
          pronunciation: "og, dat goul uas RO-be-ri. de ref DI-dent SII de faul, yu nou",
          literal: "Uf, ese gol fue robo. El árbitro no vio la falta, ¿tú sabes?",
          why: "“You know?” al final de la frase es el equivalente exacto de “¿si ve?”: no pregunta si sabes algo, solo pide que asientas. Es muletilla, no pregunta, y responderla en serio corta la conversación."
        },
        {
          speaker: "Alejandra",
          target: "Oh, I see. Why didn't you go to the stadium?",
          translation: "Ah, ya veo. ¿Por qué no fuiste al estadio?",
          pronunciation: "ou, ai SII. uai DI-dent yu gou tu de STEI-diom",
          literal: "Oh, yo veo. ¿Por qué no tú fuiste al estadio?",
          why: "“I see” no es percepción visual: significa “ya entiendo”, igual que “ya veo” en español. El inglés y el español comparten la misma metáfora de ver como comprender, así que la traducción sale casi calcada."
        },
        {
          speaker: "Megan",
          target: "Nah, I watch it here in peace. At the stadium you can't see a thing.",
          translation: "No, yo lo veo aquí tranquila. En el estadio uno no ve nada.",
          pronunciation: "na, ai UOCH it jir in PIIS. at de STEI-diom yu kant SII a zing",
          literal: "No, yo miro-lo aquí en paz. En el estadio tú no puedes ver una cosa.",
          why: "Fíjate en el reparto: “watch” para el acto sostenido de seguir el partido en casa, y “see” para la capacidad de percibir (“you can't see a thing”). El español usa “ver” para las dos; el inglés cambia de verbo según sea actividad o percepción."
        },
        {
          speaker: "Alejandra",
          target: "I hear you. Anyway, see you, Megan — I'm in a rush.",
          translation: "Le entiendo. Bueno, nos vemos, Megan, que llevo afán.",
          pronunciation: "ai jir yu. E-ni-uei, SII yu, ME-gan — aim in a rosh",
          literal: "Yo oigo-te. En-todo-caso, veo te, Megan — yo-estoy en un apuro.",
          why: "“See you” es la despedida cotidiana, y a diferencia del español no lleva reflexivo: no se dice “we see us”, sino simplemente “see you”. “I'm in a rush” es el modo natural de decir que llevas afán."
        }
      ],
      vocabulary: [
        {
          term: "to see",
          explanation: "El verbo llano de percepción: que una imagen te llegue a los ojos o enterarte de algo. Para un partido o una película sirve, pero describe el hecho de haberlo visto, no la actividad prolongada de mirarlo, que en inglés pide “watch”.",
          literal: "ver",
          useWhen: "Cuando percibes algo, te das cuenta de algo, o mencionas que viste una película o un partido como hecho puntual.",
          avoidWhen: "Cuando hablas de pasar un rato mirando la tele o siguiendo un partido con atención; ahí el inglés prefiere “watch”.",
          register: "neutral",
          region: "Inglés general; en Canadá y Estados Unidos la diferencia entre “see” y “watch” se mantiene firme en el habla diaria.",
          related: ["watch", "look at", "notice", "realize"],
          example: {
            target: "I saw it on TV.",
            translation: "Lo vi por la tele."
          }
        },
        {
          term: "to watch",
          explanation: "Mirar algo de forma sostenida y con atención: la tele, un partido, a los niños. Donde el español usa “ver” para la tele, el inglés casi siempre pide “watch”, porque subraya el acto de seguir algo un rato, no solo percibirlo.",
          literal: "ver / mirar (sostenido)",
          useWhen: "Para la televisión, las películas, los partidos, y para cuidar o vigilar a alguien: “watch the kids”.",
          avoidWhen: "Para la mera capacidad de percibir (“I can see it”) o para el hecho puntual de haberlo visto una sola vez.",
          register: "neutral",
          region: "Inglés general; es el verbo por defecto para pantallas en todo el inglés norteamericano.",
          related: ["see", "look at", "keep an eye on", "stream"],
          example: {
            target: "I was watching TV late.",
            translation: "Estuve viendo tele hasta tarde."
          }
        },
        {
          term: "to look at",
          explanation: "Dirigir la mirada a algo a propósito y fijarla ahí. Lleva casi siempre “at”: “look at this”. Sin la preposición, “look” cambia de sentido, y omitirla es uno de los errores más delatores del hispanohablante.",
          literal: "mirar (a)",
          useWhen: "Cuando señalas algo para que otro fije la vista: “look at that goal”, “look at the map”.",
          avoidWhen: "Para la tele o los partidos, que piden “watch”, no “look at”.",
          register: "neutral",
          region: "Inglés general; la preposición “at” es obligatoria en todas las variedades.",
          related: ["watch", "see", "stare at", "glance at"],
          example: {
            target: "Look at that goal again.",
            translation: "Mira ese gol otra vez."
          }
        },
        {
          term: "you know?",
          explanation: "Muletilla que se cuelga al final de la frase para pedir que el otro asienta, casi idéntica a “¿si ve?”. No pregunta si sabes algo: solo mantiene el hilo y busca tu acuerdo.",
          literal: "¿sabes? / ¿si ve?",
          useWhen: "Al suavizar una opinión o comprobar que el otro te sigue, en medio o al final de una idea.",
          avoidWhen: "En un registro formal o escrito, donde suena demasiado coloquial; y nunca la respondas como si fuera una pregunta real.",
          register: "friendly informal",
          region: "Inglés norteamericano coloquial; “right?” y “see what I mean?” cumplen la misma función.",
          related: ["right?", "you know what I mean?", "see?", "yeah?"],
          example: {
            target: "The ref saw nothing, you know?",
            translation: "El árbitro no vio nada, ¿si ve?"
          }
        },
        {
          term: "I see",
          explanation: "“Ya veo”, en el sentido de “ahora entiendo”. Usa el verbo “see” para el momento en que algo encaja, con la misma metáfora de la vista como comprensión que tiene el español.",
          literal: "ya veo / entiendo",
          useWhen: "Para señalar que una explicación acaba de cuajar en tu cabeza.",
          avoidWhen: "Cuando de verdad quieres decir que percibes algo con los ojos; ahí dirías “I can see it”.",
          register: "neutral",
          region: "Inglés general; “I get it” y “gotcha” son variantes más coloquiales.",
          related: ["I get it", "I understand", "that makes sense", "gotcha"],
          example: {
            target: "Oh, I see why they lost.",
            translation: "Ah, ya veo por qué perdieron."
          }
        },
        {
          term: "see you",
          explanation: "La despedida cotidiana, “nos vemos”. A diferencia del español no lleva reflexivo: es “see you”, nunca “we see us”. Da por hecho un próximo encuentro y es más cálida que un “goodbye” seco.",
          literal: "nos vemos",
          useWhen: "Al despedirte de alguien con quien esperas, o dices esperar, volver a cruzarte.",
          avoidWhen: "En una despedida de verdad definitiva, donde “goodbye” o “take care” cargan el peso.",
          register: "friendly informal",
          region: "Inglés general; “see you around” y “see you later” son variantes aún más sueltas.",
          related: ["see you later", "see you around", "take care", "bye"],
          example: {
            target: "Anyway, see you tomorrow.",
            translation: "Bueno, nos vemos mañana."
          }
        },
        {
          term: "to be in a rush",
          explanation: "Andar de afán, tener prisa. El inglés dice que “estás en” una prisa (“in a rush”, “in a hurry”), y es la fórmula natural para excusarte porque el tiempo te aprieta.",
          literal: "estar de afán",
          useWhen: "Al despedirte con prisa o explicar que no puedes quedarte porque vas corto de tiempo.",
          avoidWhen: "Cuando quieres decir entusiasmo o ganas; “rush” es presión de tiempo, no deseo.",
          register: "friendly informal",
          region: "Inglés general; “I'm in a hurry” y “I'm running late” son equivalentes cercanos.",
          related: ["in a hurry", "running late", "pressed for time", "gotta run"],
          example: {
            target: "See you, I'm in a rush.",
            translation: "Nos vemos, que llevo afán."
          }
        }
      ],
      note:
        "Lo que hay que llevarse es el reparto entre “see” y “watch”: el partido y la tele se “watch” (actividad sostenida), mientras que “see” es percibir o enterarse, y “look at” es fijar la vista en algo, siempre con “at”. Y trata “you know?” como puntuación, no como pregunta: pide que asientas, igual que “¿si ve?” en español.",
      culture: [
        {
          label: "“You know?” es puntuación, no pregunta",
          body: "Colgado al final de la frase, “you know?” pide que asientas, no que informes de lo que sabes. Los anglohablantes lo salpican en un relato como el bogotano salpica “¿si ve?”, y basta con un “yeah” o un “right” para seguir el ritmo. Tomarlo en serio — ponerte a explicar qué sabes y qué no — rompe el compás y te delata como recién llegada. Es uno de los primeros gestos que suenan naturales al dominarlos."
        },
        {
          label: "El partido también se ve en casa",
          body: "Que Megan prefiera ver el partido en casa no es raro ni frío en Canadá. El invierno, los precios y la comodidad hacen del televisor de la sala el centro social de muchos partidos, con vecinos que entran y salen. Decir “I watched it on TV” no lleva ninguna disculpa: nadie espera que hayas ido al estadio, y contar la jugada al día siguiente vale tanto como haber estado ahí en persona."
        },
        {
          label: "“Goodbye” pesa; mejor “see you”",
          body: "En inglés cotidiano “goodbye” puede sonar solemne, como si la despedida fuera larga. Para el día a día la gente prefiere “see you”, “see you later”, “take care” o “bye”, que dan por hecho otro encuentro. Rematar una charla ligera en las escaleras con un “goodbye” entero suena más pesado de lo que quieres. Guárdalo para las despedidas de verdad y usa las formas cortas para todo lo demás."
        },
        {
          label: "“See”, “watch” y “look at” no son intercambiables",
          body: "El español resuelve con “ver” y “mirar” lo que el inglés reparte en tres. “See” es percibir o enterarse; “watch” es seguir algo un rato — la tele, un partido, a los niños; “look at” es dirigir la vista a un punto, siempre con “at”. La tele casi siempre se “watch”, y cambiarlo por “look at the TV” o “see TV” es la marca más clara de que estás traduciendo del español palabra por palabra."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “I saw TV last night” for an evening of watching",
          whyItFails: "Para la actividad de pasar un rato frente a la pantalla, el inglés pide “watch”, no “see”. “I saw TV” suena a que la tele apareció ante tus ojos un instante, no a que estuviste viéndola. El verbo por defecto para pantallas es “watch”.",
          sayInstead: "I watched TV last night."
        },
        {
          mistake: "Saying “Look the ball!” without the preposition “at”",
          whyItFails: "“Look” necesita la preposición “at” cuando diriges la vista a algo. Sin ella la frase queda incompleta para el oído anglohablante, y omitir el “at” es uno de los errores más frecuentes del hispanohablante.",
          sayInstead: "Look at the ball!"
        },
        {
          mistake: "Asking “Are you looking the game?” instead of “watching”",
          whyItFails: "Un partido se “watch”, no se “look”, y además “look” pediría “at”. La pregunta natural usa “watching”, que es el verbo para seguir algo en pantalla con atención.",
          sayInstead: "Are you watching the game?"
        },
        {
          mistake: "Signing off with “We see us tomorrow.”",
          whyItFails: "El inglés no pone reflexivo en esta despedida: no existe “we see us”. La fórmula fija es “see you”, con “you” como objeto, y calcar el “nos” del español produce una frase que ningún anglohablante diría.",
          sayInstead: "See you tomorrow."
        }
      ],
      variations: [
        {
          form: "Did you see the game last night?",
          register: "friendly informal",
          region: "General",
          whenToUse: "La forma por defecto para preguntarle a cualquiera por un partido reciente."
        },
        {
          form: "Did you catch the game?",
          register: "friendly informal",
          region: "General",
          whenToUse: "Más coloquial; “catch” da la idea de haber alcanzado a verlo."
        },
        {
          form: "Are you going to watch the game?",
          register: "neutral",
          region: "General",
          whenToUse: "Para preguntar por un partido que aún no ha ocurrido."
        },
        {
          form: "See you.",
          register: "friendly informal",
          region: "General",
          whenToUse: "Despedida corta con alguien que esperas volver a ver pronto."
        },
        {
          form: "See you around.",
          register: "friendly informal",
          region: "General",
          whenToUse: "Un adiós aún más suelto, sin fijar cuándo será el próximo encuentro."
        }
      ],
      prompt: "Megan remata su queja sobre el árbitro con “you know?”. ¿Cómo hay que tomarlo?",
      choices: [
        "Como una muletilla parecida a “¿si ve?”, que solo pide que Alejandra asienta; lo natural es responder “yeah” o “right”.",
        "Como una pregunta de verdad sobre si Alejandra sabe lo suficiente de fútbol para opinar sobre la jugada polémica.",
        "Como un reproche por no haber prestado atención al partido, con la idea de que debería volver a ver la repetición."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Alejandra quiere decir que estuvo un buen rato frente a la tele. ¿Qué verbo pide el inglés?",
          choices: [
            "“Watch”, porque describe la actividad sostenida de seguir la pantalla un rato: “I was watching TV”.",
            "“See”, porque en inglés la televisión siempre lleva el mismo verbo que en español para cualquier caso.",
            "“Look at”, porque cualquier cosa que miras con los ojos en inglés pide siempre la preposición “at”."
          ],
          answer: 0,
          tests: "“watch” para la actividad sostenida frente a una pantalla"
        },
        {
          prompt: "¿Cuál oración usa bien “look”?",
          choices: [
            "Look the ball carefully before you kick it hard toward the open corner of the net.",
            "Look at the ball carefully before you pass it across to the striker near the post.",
            "Look on the ball carefully before it rolls past the line and out toward the corner."
          ],
          answer: 1,
          tests: "la preposición obligatoria “at” con “look”"
        },
        {
          prompt: "Megan dice “see you”. ¿Por qué no dice “we see us”?",
          choices: [
            "Porque “we see us” es demasiado formal y Megan prefiere un registro más cercano con su vecina nueva.",
            "Porque “we see us” solo se usaría por escrito y no en una despedida hablada en las escaleras del edificio.",
            "Porque el inglés no pone reflexivo aquí: la fórmula fija es “see you”, y “we see us” no existe como despedida."
          ],
          answer: 2,
          tests: "la ausencia de reflexivo en “see you”"
        },
        {
          prompt: "En el diálogo, “I see” significa…",
          choices: [
            "Que Alejandra acaba de entender por qué el gol causó tanta discusión; “I see” es aquí “ya caigo”.",
            "Que Alejandra por fin alcanza a distinguir el marcador en la pantalla pequeña desde las escaleras.",
            "Que Alejandra quiere que Megan siga contando porque todavía no ha logrado seguir bien la historia."
          ],
          answer: 0,
          tests: "“I see” como comprensión y no como percepción visual"
        }
      ]
    }
  },
  {
    id: "keeping-your-phone-out-of-sight-downtown",
    level: "Starter · Getting around",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    pathways: ["foundation"],
    verb: "dar",
    review: "pending",
    es: {
      title: "Guardar el celular en el centro de Medellín",
      situation:
        "Alex camina por el centro de Medellín con Manuela, una amiga paisa, y saca el celular para mirar el mapa en plena calle. Manuela lo frena en seco: en el centro no se anda mostrando el teléfono. Entre el ruido de las busetas y los vendedores, Alex aprende la regla de oro colombiana, “no dar papaya”, y de paso descubre que en Medellín todo el mundo lo trata de vos.",
      setting: {
        who: "Manuela grew up in Medellín and knows exactly which blocks downtown to keep your phone in your pocket. Alex has been in the city three weeks and still pulls out the map on instinct, the way he would back home.",
        what: "A quick, protective lesson in street smarts, sparked by Alex flashing his phone on a busy downtown corner.",
        when: "Midday on a Saturday, the centro packed with vendors, buses, and people, the worst possible moment to look distracted.",
        where: "Downtown Medellín, near the crowded pedestrian streets where petty theft is a real risk and locals stay alert.",
        why: "Because the fastest way to get robbed is to look like an easy mark, and Manuela would rather teach Alex the rule now than watch him lose his phone. The lesson is affection disguised as a scolding."
      },
      address: {
        form: "vos",
        who: "Manuela treats Alex with “vos”, the default second person in Medellín and the surrounding paisa region, using forms like “guardá” and “guiás”.",
        why: "In Medellín and most of Antioquia, “vos” is the everyday pronoun among friends, family, and even strangers your age. It is warm and normal, not rude, and its verb endings — “guardá”, “tenés”, “hablás” — carry a distinct stress that marks you instantly as paisa.",
        ifYouSwitch: "If Alex answered with “tú”, Manuela would understand but might hear it as bookish or coastal; if he used “usted”, it would sound like he was keeping a polite distance. Matching her “vos” is how he signals he belongs to the same easy, friendly footing."
      },
      dialogue: [
        {
          speaker: "Manuela",
          target: "Ala, parce, guardá el celular, que por acá no hay que dar papaya.",
          translation: "Hey, dude, put your phone away — around here you shouldn't make yourself a target.",
          pronunciation: "A-la, PAR-se, guar-DA el se-lu-LAR, ke por a-KA no ai ke dar pa-PA-ya",
          literal: "Hey, mate, put-away the phone, that around here not there-is to give papaya.",
          why: "This line shows two paisa signatures at once: the voseo imperative “guardá” with its stress on the last syllable, and the idiom “dar papaya”. Note how “que” works as a soft “because”, tacking a reason onto the command without a full clause."
        },
        {
          speaker: "Alex",
          target: "¿Dar papaya? Me da pena, pero no entiendo qué es eso.",
          translation: "Give papaya? I'm embarrassed to say it, but I don't get what that means.",
          pronunciation: "dar pa-PA-ya? me da PE-na, pe-ro no en-TIEN-do ke es E-so",
          literal: "To-give papaya? Me gives shame, but not I-understand what is that.",
          why: "“Me da pena” uses “dar” impersonally: literally “it gives me shame”, meaning “I'm embarrassed”. Watch the false friend — “pena” here is awkwardness, not sorrow, and it never means the English “pain”."
        },
        {
          speaker: "Manuela",
          target: "Dar papaya es dar ventaja: a papaya puesta, papaya partida.",
          translation: "To give papaya is to give an opening — if you set the papaya out, it gets sliced.",
          pronunciation: "dar pa-PA-ya es dar ven-TA-ja: a pa-PA-ya PUES-ta, pa-PA-ya par-TI-da",
          literal: "To-give papaya is to-give advantage: to papaya placed, papaya split.",
          why: "The proverb “a papaya puesta, papaya partida” is the heart of the idiom: leave an opening and someone will take it. “Dar” here means to hand over an advantage, not a literal object, and the saying is quoted constantly across Colombia."
        },
        {
          speaker: "Alex",
          target: "Listo. ¿Y si mejor damos una vuelta por un lado más tranquilo?",
          translation: "Got it. And what if we go for a walk somewhere calmer instead?",
          pronunciation: "LIS-to. i si me-JOR DA-mos u-na VUEL-ta por un LA-do mas tran-KI-lo",
          literal: "Ready. And if better we-give a turn through a side more calm?",
          why: "“Dar una vuelta” means to take a stroll, not to spin around. The “nosotros” form “damos” keeps the plan shared and friendly, and “listo” is the all-purpose Colombian “okay, done”."
        },
        {
          speaker: "Manuela",
          target: "De una. Dame la mano con el mapa y arrancamos ya.",
          translation: "Absolutely. Give me a hand with the map and we set off right now.",
          pronunciation: "de U-na. DA-me la MA-no kon el MA-pa i a-rran-KA-mos ya",
          literal: "Of one. Give-me the hand with the map and we-set-off now.",
          why: "“Dame” is “dar” as a command with the pronoun attached — give me. “Arrancar” literally means to yank out, but colloquially it's to set off or get going, and “de una” is an enthusiastic “right away”."
        },
        {
          speaker: "Alex",
          target: "Hecho. Vos guiás y yo guardo el celular, ¿cierto?",
          translation: "Done. You lead and I'll keep the phone away, right?",
          pronunciation: "E-cho. vos gui-AS i yo GUAR-do el se-lu-LAR, SIER-to",
          literal: "Done. You lead and I keep the phone, right?",
          why: "Alex mirrors Manuela's register by using “vos guiás”, the paisa voseo form with final stress. “¿Cierto?” is the standard Colombian tag question, softer and more common than “¿verdad?” in casual speech."
        }
      ],
      vocabulary: [
        {
          term: "dar papaya",
          explanation: "The single most Colombian idiom there is: to make yourself an easy target by leaving an opening — flashing a phone, a wallet, or valuables. It comes from the proverb about a papaya left out getting sliced, and it frames safety as not tempting fate.",
          literal: "to give papaya",
          useWhen: "Warning someone to stay alert, hide valuables, or not act carelessly in public.",
          avoidWhen: "In a formal report or with people who might take the slang literally; there it's clearer to say “don't take unnecessary risks”.",
          register: "friendly informal",
          region: "Used all over Colombia, from Bogotá to the coast, and instantly recognized as a national saying.",
          related: ["no dar papaya", "papaya puesta", "ponerse de blanco", "estar pilas"],
          example: {
            target: "No des papaya en el centro.",
            translation: "Don't make yourself a target downtown."
          }
        },
        {
          term: "dar",
          explanation: "The base verb “to give”, but it drives dozens of Colombian expressions where nothing physical changes hands: it gives me shame, it gives an opening, let's give a turn. Learning “dar” means learning its idioms, not just the literal act of handing something over.",
          literal: "to give",
          useWhen: "Handing something over, but also inside set phrases about feelings, strolls, and time.",
          avoidWhen: "Translating English “give” word for word into idioms where Spanish uses another verb, like “give up” (rendirse).",
          register: "neutral",
          region: "Universal Spanish; the idiomatic density is especially high in Colombian everyday speech.",
          related: ["dar papaya", "dar una vuelta", "darse cuenta", "dar pena"],
          example: {
            target: "Dame el celular un momento.",
            translation: "Give me the phone for a second."
          }
        },
        {
          term: "me da pena",
          explanation: "“It embarrasses me”, using “dar” impersonally. In most of Colombia “pena” is embarrassment or shyness, not grief, so “me da pena” is how you admit you feel awkward — asking a favour, interrupting, or not knowing something.",
          literal: "it gives me shame",
          useWhen: "Owning up to shyness or awkwardness, or softening a request you feel sheepish about.",
          avoidWhen: "To express sorrow or condolences; for that Colombians say “qué pesar” or “lo siento”, not “me da pena”.",
          register: "friendly informal",
          region: "Colombian usage; on much of the coast and interior “pena” leans to embarrassment, unlike some countries where it means pity.",
          related: ["qué pena", "dar pena", "penoso", "me da cosa"],
          example: {
            target: "Me da pena preguntar otra vez.",
            translation: "I'm embarrassed to ask again."
          }
        },
        {
          term: "dar una vuelta",
          explanation: "To go for a walk or a short outing, not to spin around. It's the relaxed proposal for wandering a bit — around the block, through a park, or to nowhere in particular — and it's one of the friendliest invitations in Colombian Spanish.",
          literal: "to give a turn",
          useWhen: "Suggesting a casual stroll or a change of scenery with someone.",
          avoidWhen: "When you mean literally rotating something; that's “dar la vuelta” or “girar”, a different sense.",
          register: "friendly informal",
          region: "Universal Spanish; extremely common in Colombian casual plans.",
          related: ["dar un paseo", "salir a caminar", "dar la vuelta", "echar un paseo"],
          example: {
            target: "Vamos a dar una vuelta.",
            translation: "Let's go for a walk."
          }
        },
        {
          term: "dame",
          explanation: "“Give me”, the command form of “dar” with the pronoun stuck on the end. Direct but not rude among friends, it's the natural way to ask for something in reach, and it also softens into requests for help like “dame la mano” (give me a hand).",
          literal: "give me",
          useWhen: "Asking a friend to pass or hand you something, or to lend a hand.",
          avoidWhen: "With strangers in formal settings, where “¿me da…?” or “¿me regala…?” sound more courteous.",
          register: "friendly informal",
          region: "Universal Spanish; “me regala” as a polite alternative is a Colombian specialty.",
          related: ["dame la mano", "pásame", "me regala", "me das"],
          example: {
            target: "Dame la mano con esto.",
            translation: "Give me a hand with this."
          }
        },
        {
          term: "arrancar",
          explanation: "Literally to yank out, but in daily speech it means to set off or get going. A bus “arranca” when it pulls away, and people “arrancan” when they leave. It carries a sense of sudden, decisive departure, more energetic than a plain “salir”.",
          literal: "to yank out / to set off",
          useWhen: "Announcing that you're leaving now or that something is starting up.",
          avoidWhen: "For a slow or gradual start; “arrancar” implies a brisk, immediate move.",
          register: "friendly informal",
          region: "Colombian and broader Latin American usage for setting off.",
          related: ["salir", "irse", "prender", "despegar"],
          example: {
            target: "Arrancamos ya, ¿de una?",
            translation: "We're setting off now, all right?"
          }
        },
        {
          term: "parce",
          explanation: "The paisa word for “mate” or “dude”, short for “parcero”. Born in Medellín and now heard nationwide, it marks the talk as friendly and informal, and it's the vocative that opens half the casual sentences among young Colombians.",
          literal: "buddy / dude",
          useWhen: "Addressing a friend or peer in relaxed conversation.",
          avoidWhen: "In formal, professional, or respectful contexts, where it sounds too street.",
          register: "friendly informal",
          region: "Originally Medellín and paisa, now general Colombian slang.",
          related: ["parcero", "llave", "socio", "mano"],
          example: {
            target: "Parce, guardá eso.",
            translation: "Dude, put that away."
          }
        }
      ],
      note:
        "The one thing to carry away is “no dar papaya”: Colombians frame safety as not offering an opening, so keep your phone and valuables out of sight in crowded spots. Alongside it, notice that in Medellín the default pronoun is “vos”, with stressed endings like “guardá” and “guiás”, and that “dar” hides inside a swarm of idioms where nothing is literally given.",
      culture: [
        {
          label: "“No dar papaya” is the national rule",
          body: "If there's one phrase that captures Colombian street wisdom, it's “no dar papaya”. It means don't leave yourself open — don't flash your phone, count cash in public, or wander looking lost. The logic runs both ways: the person who gives papaya shares the blame for what happens. It sounds fatalistic to outsiders, but locals hear it as practical care. Master it and you'll understand a whole national attitude toward risk and self-protection."
        },
        {
          label: "“Pena” means embarrassment, not pain",
          body: "For an English speaker, “pena” looks like “pain”, but in Colombia it almost always means embarrassment or shyness. “Me da pena” is “I feel awkward”, and “qué pena” is how people say “excuse me” or “sorry to bother you”. To express real sorrow, Colombians reach for “qué pesar” or “lo siento”. Mixing these up leads to comic misunderstandings, so anchor “pena” to social awkwardness and you'll read countless everyday exchanges correctly."
        },
        {
          label: "Medellín runs on “vos”",
          body: "Travelers who studied “tú” are often surprised that Medellín and the wider paisa region default to “vos”. It isn't archaic or rustic; it's the warm, ordinary pronoun of friends, family, and strangers alike. The verb forms shift the stress to the end — “vos sabés”, “vení”, “guardá” — and slipping into them signals that you're at home in the region. Locals rarely correct a foreigner's “tú”, but they light up when you answer them in “vos”."
        },
        {
          label: "“Dar una vuelta” and the art of the stroll",
          body: "Inviting someone to “dar una vuelta” is a small social ritual: an unhurried walk with no fixed destination, meant mostly for company and conversation. It can mean a loop around the block, a drift through a park, or an errand stretched into an outing. Accepting is easy and low stakes, which is exactly why it's such a common opener among friends and neighbours. It's the Colombian way of turning idle time into shared time."
        }
      ],
      pitfalls: [
        {
          mistake: "Taking “dar papaya” literally as offering fruit",
          whyItFails: "A newcomer may picture actual fruit and miss the warning entirely. “Dar papaya” is a fixed idiom for making yourself a target; taking it literally means ignoring genuine safety advice. Recognize it as slang and act on the caution behind it.",
          sayInstead: "No des papaya: guarda el celular."
        },
        {
          mistake: "Saying “Estoy embarazada” to mean you feel embarrassed",
          whyItFails: "“Embarazada” is the classic false friend: it means pregnant, not embarrassed. To say you feel awkward, Colombians use “me da pena” or “estoy apenado”. Confusing the two produces one of the most famous Spanish-learner blunders there is.",
          sayInstead: "Me da pena / estoy apenado."
        },
        {
          mistake: "Saying “Realicé que…” to mean “I realized that…”",
          whyItFails: "“Realizar” means to carry out or accomplish, not to notice. Calquing English “realize” makes “realicé que” sound wrong to Colombian ears. The idiom for noticing uses “dar”: “darse cuenta de”.",
          sayInstead: "Me di cuenta de que…"
        },
        {
          mistake: "Using “No das papaya” as a warning",
          whyItFails: "A warning not to do something needs the negative command, which takes the subjunctive: “no des”, not the indicative “no das”. “No das papaya” states a fact (“you don't give papaya”) instead of telling someone to stop.",
          sayInstead: "No des papaya."
        }
      ],
      variations: [
        {
          form: "No des papaya.",
          register: "friendly informal",
          region: "Colombia general",
          whenToUse: "The everyday warning between friends to stay alert and hide valuables."
        },
        {
          form: "No dé papaya.",
          register: "polite formal",
          region: "Colombia general",
          whenToUse: "The same caution addressed with “usted”, to an elder, a stranger, or in a service setting."
        },
        {
          form: "Damos una vuelta.",
          register: "friendly informal",
          region: "General",
          whenToUse: "Proposing a relaxed shared stroll with someone you're comfortable with."
        },
        {
          form: "Dame una mano con esto.",
          register: "friendly informal",
          region: "General",
          whenToUse: "Asking a friend to help you with a small task right now."
        },
        {
          form: "Me da pena con vos.",
          register: "friendly informal",
          region: "Medellín / paisa",
          whenToUse: "Apologizing sheepishly to a friend in paisa voseo for an imposition."
        }
      ],
      prompt: "Downtown, Manuela tells Alex “no des papaya”. What is she asking him to do?",
      choices: [
        "Not to hand out fruit or coins to the vendors who keep coming up to him offering things on every corner.",
        "Not to make himself an easy target: to put his phone away and not give a thief any opening.",
        "Not to stay hungry, and to grab something to eat before they keep walking through downtown together."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Alex feels awkward asking a basic question. Which phrasing is right?",
          choices: [
            "Me da pena preguntar, pero todavía no sé bien qué es eso de dar papaya.",
            "Estoy embarazada de preguntar, pero todavía no sé bien qué es eso de dar papaya.",
            "Doy mucha pena al preguntar, pero todavía no sé bien qué es eso de dar papaya."
          ],
          answer: 0,
          tests: "“me da pena” for embarrassment, not the false friend"
        },
        {
          prompt: "Alex suggests strolling somewhere calmer. Which sentence means that?",
          choices: [
            "¿Y si damos la vuelta a la manzana bien rápido para que se enfríe el motor del carro?",
            "¿Y si damos vuelta a la tortilla y arrancamos de nuevo con un plan totalmente distinto?",
            "¿Y si mejor damos una vuelta por un lado más tranquilo y con más gente alrededor?"
          ],
          answer: 2,
          tests: "“dar una vuelta” as go for a stroll"
        },
        {
          prompt: "Manuela wants Alex to hand her the map. Which sounds natural?",
          choices: [
            "Da a mí el mapa un momento y arrancamos ya para el otro lado del centro histórico.",
            "Dame el mapa un momento y arrancamos ya para el otro lado del centro histórico.",
            "Me vas a dar el mapa un momento y arrancamos ya para el otro lado del histórico."
          ],
          answer: 1,
          tests: "“dame” as the give-me command with attached pronoun"
        },
        {
          prompt: "In paisa Medellín, how would Manuela tell Alex “you lead”?",
          choices: [
            "Vos guiás y arrancamos ya, que yo te sigo sin soltar el mapa por nada.",
            "Tú guías y arrancamos ya, que yo te sigo sin soltar para nada el mapa.",
            "Usted guía y arrancamos ya, que yo le sigo sin soltar el mapa por nada."
          ],
          answer: 0,
          tests: "the paisa voseo form “guiás”"
        }
      ]
    },
    en: {
      title: "Guardar el celular en el centro de Toronto",
      situation:
        "Alejandra camina por el centro de Toronto con Dana, una compañera canadiense, y por reflejo bogotano esconde el celular y le dice a Dana que no “dé papaya”. Dana no entiende la expresión, así que Alejandra tiene que traducir su instinto de seguridad al inglés: descubre que “dar papaya” no tiene una sola palabra en inglés y que le toca decir “make yourself a target”, “put your phone away” y “I got robbed”.",
      setting: {
        who: "Dana creció en Toronto y se mueve por el centro sin pensarlo dos veces. Alejandra llegó de Bogotá hace dos meses y trae grabado el instinto de no mostrar el celular en la calle, aunque todavía le faltan las palabras en inglés para explicarlo.",
        what: "Una pequeña lección de seguridad al revés: la recién llegada le enseña street smarts a la local, mientras aprende cómo se dice todo eso en inglés.",
        when: "Un mediodía entre semana, saliendo a almorzar, con el centro lleno de gente y de afán.",
        where: "El centro de Toronto, cerca de las calles peatonales concurridas, donde Alejandra todavía mide el riesgo con ojos de Bogotá.",
        why: "Porque traducir “no dar papaya” la obliga a descubrir que el inglés reparte la idea en varias frases, y porque enseñarle su instinto a Dana es también su manera de sentirse útil y en casa en una ciudad nueva."
      },
      address: {
        form: "mixed",
        who: "Dana y Alejandra se tratan de “you”, la única segunda persona del inglés, así que no hay que escoger entre tú, usted o vos.",
        why: "El inglés no marca el respeto en el pronombre porque solo existe “you”. El registro lo cargan las palabras: un “would you mind…”, un “please” o el apellido con “Ms.” hacen el trabajo que en español haría el usted, y entre compañeras basta el tono y el nombre de pila.",
        ifYouSwitch: "No hay pronombre al que cambiarse. Si Alejandra quiere sonar más formal, no toca el “you”: añade “excuse me”, “please” o el apellido; si quiere sonar cercana, usa el nombre de pila y un saludo relajado. El respeto viaja en el léxico, no en el pronombre."
      },
      dialogue: [
        {
          speaker: "Dana",
          target: "Relax, Ale, it's fine — why are you hiding your phone like that?",
          translation: "Tranquila, Ale, no pasa nada, ¿por qué escondes el celular así?",
          pronunciation: "ri-LAX, A-le, its fain — uai ar yu JAI-ding yor foun laik dat",
          literal: "Relájate, Ale, está bien — ¿por qué estás escondiendo tu teléfono así?",
          why: "“Hide” es esconder; más adelante aparecerá el phrasal “put away” para guardar. Fíjate en el presente continuo “are you hiding”, que el inglés usa para una acción en curso, justo lo que Alejandra está haciendo en ese momento."
        },
        {
          speaker: "Alejandra",
          target: "In Bogotá we say “don't give papaya.” I mean, don't make yourself a target.",
          translation: "En Bogotá decimos “no dar papaya”. O sea, no te pongas de blanco fácil.",
          pronunciation: "in bo-go-TA ui sei dont guiv pa-PA-ya. ai miin, dont meik yor-SELF a TAR-guet",
          literal: "En Bogotá nosotros decimos no dar papaya. Yo quiero-decir, no hagas ti-mismo un blanco.",
          why: "Aquí está el corazón de la lección: “dar papaya” no tiene equivalente de una palabra en inglés. Toca describirlo con “make yourself a target”, y el reflexivo “yourself” es obligatorio, algo que el inglés marca más que el español."
        },
        {
          speaker: "Dana",
          target: "Ah, got it. So put it away so nobody robs you on the street.",
          translation: "Ah, ya entiendo. Entonces guárdalo para que nadie te robe en la calle.",
          pronunciation: "a, GA-rit. sou put it a-UEI sou NO-ba-di robs yu on de striit",
          literal: "Ah, lo-tengo. Entonces pon-lo lejos para que nadie roba-te en la calle.",
          why: "“Put it away” muestra la regla de oro de los phrasal verbs: el pronombre va en medio, nunca “put away it”. Además “robs you” pone a la persona como objeto, la forma correcta de decir que a alguien lo roban."
        },
        {
          speaker: "Alejandra",
          target: "Exactly. It's embarrassing, but I already got robbed here once.",
          translation: "Exacto. Me da pena, pero ya me robaron aquí una vez.",
          pronunciation: "eg-ZAKT-li. its em-BA-rra-sing, bot ai ol-RE-di gat robd jir uans",
          literal: "Exactamente. Es-avergonzante, pero yo ya conseguí robado aquí una-vez.",
          why: "Ojo al par: “embarrassing” describe la situación, y “embarrassed” describiría a la persona. Y “got robbed” es la fórmula de la víctima — “get” más participio — en vez del calco “they stole me”."
        },
        {
          speaker: "Dana",
          target: "Oh no. Well, let's put our phones away and go for a walk.",
          translation: "Ay, no. Bueno, guardemos los celulares y vamos a dar una vuelta.",
          pronunciation: "ou nou. uel, lets put aur founs a-UEI and gou for a UOK",
          literal: "Oh no. Bueno, dejemos poner nuestros teléfonos lejos y ir por una caminada.",
          why: "“Go for a walk” es exactamente “dar una vuelta”: el inglés no usa aquí “give” ni “turn”. Y “let's” es la forma natural de proponer un plan compartido, equivalente al “vamos a” del español."
        },
        {
          speaker: "Alejandra",
          target: "Perfect. Let me finish my coffee and we head out.",
          translation: "Perfecto. Déjame terminar el café y arrancamos.",
          pronunciation: "PER-fekt. let mi FI-nish mai KO-fi and ui jed aut",
          literal: "Perfecto. Deja-me terminar mi café y nosotros cabeza afuera.",
          why: "“Head out” es el phrasal para salir o arrancar, más idiomático que “leave” a secas. Y “let me” traduce el “déjame” colombiano: pedir permiso o un momento antes de hacer algo."
        }
      ],
      vocabulary: [
        {
          term: "to make yourself a target",
          explanation: "El inglés no tiene una sola palabra para “dar papaya”; hay que describir la idea. “Make yourself a target” es ponerse de blanco fácil, actuar de forma que alguien se aproveche. Es la traducción más cercana del idiom colombiano y siempre lleva el reflexivo “yourself”.",
          literal: "hacerte un blanco",
          useWhen: "Al advertir a alguien que no se exponga ni se descuide en un lugar concurrido.",
          avoidWhen: "En contextos donde “target” suene militar o comercial; ahí es más claro decir “don't take unnecessary risks”.",
          register: "friendly informal",
          region: "Inglés general; en Canadá y Estados Unidos se entiende sin problema en el habla cotidiana.",
          related: ["easy target", "don't take risks", "stay alert", "watch your stuff"],
          example: {
            target: "Don't make yourself a target.",
            translation: "No des papaya."
          }
        },
        {
          term: "to put away",
          explanation: "El phrasal verb para guardar algo en su sitio. Su regla clave es la posición del pronombre: se dice “put it away”, con el pronombre en medio, nunca “put away it”. Es el verbo natural para pedirle a alguien que esconda el celular o la billetera.",
          literal: "poner lejos / guardar",
          useWhen: "Al pedir que guarden algo, sobre todo el teléfono o el dinero en la calle.",
          avoidWhen: "Cuando quieres decir tirar a la basura; eso es “throw away”, no “put away”.",
          register: "neutral",
          region: "Inglés general; el orden del pronombre es igual en todas las variedades.",
          related: ["put it away", "tuck away", "keep out of sight", "hide"],
          example: {
            target: "Put your phone away.",
            translation: "Guarda el celular."
          }
        },
        {
          term: "to feel embarrassed",
          explanation: "“Sentir vergüenza”, con “embarrassed” como adjetivo aplicado a la persona. El inglés dice “feel” más adjetivo, no “it gives me shame”. Y cuidado con el falso amigo: “embarrassed” no es “embarazada”, que se dice “pregnant”.",
          literal: "sentirse avergonzado",
          useWhen: "Al admitir que te da pena o te sientes incómodo por algo.",
          avoidWhen: "Para decir que estás embarazada; ese es el falso amigo más famoso y significa esperar un bebé.",
          register: "neutral",
          region: "Inglés general; la confusión con “embarazada” es típica de hispanohablantes.",
          related: ["embarrassing", "ashamed", "awkward", "pregnant"],
          example: {
            target: "I feel embarrassed about it.",
            translation: "Me da pena eso."
          }
        },
        {
          term: "to go for a walk",
          explanation: "La manera natural de decir “dar una vuelta” o salir a caminar. El inglés no usa aquí ni “give” ni “turn”: la frase fija es “go for a walk”, una invitación relajada a pasear sin destino fijo.",
          literal: "ir por una caminada",
          useWhen: "Al proponer un paseo tranquilo o un cambio de aire con alguien.",
          avoidWhen: "Cuando quieres decir girar o darle la vuelta a algo; eso es “turn around”.",
          register: "friendly informal",
          region: "Inglés general; “go for a stroll” es una variante un poco más pausada.",
          related: ["go for a stroll", "take a walk", "wander around", "get some air"],
          example: {
            target: "Let's go for a walk.",
            translation: "Vamos a dar una vuelta."
          }
        },
        {
          term: "give me",
          explanation: "“Dame”, con el pronombre después del verbo: “give me”. Es directo pero normal entre conocidos, y suele suavizarse con “can you” o “could you”. Su primo “let me” traduce el “déjame” colombiano para pedir un momento o permiso.",
          literal: "dame",
          useWhen: "Al pedir que te pasen algo, o con “let me” para pedir un momento.",
          avoidWhen: "Con desconocidos en tono formal, donde “could you give me…?” suena más cortés.",
          register: "neutral",
          region: "Inglés general; añadir “please” es lo que marca la cortesía.",
          related: ["let me", "can you give me", "hand me", "pass me"],
          example: {
            target: "Give me a second.",
            translation: "Dame un segundo."
          }
        },
        {
          term: "to get robbed",
          explanation: "La fórmula de la víctima: “get” más participio. A una persona la roban (“get robbed”), mientras que un objeto se lo roban (“get stolen”). El calco “they stole me” no funciona, porque “steal” pide la cosa robada, no la persona.",
          literal: "ser robado",
          useWhen: "Al contar que a ti o a alguien lo asaltaron o le quitaron algo.",
          avoidWhen: "Para el objeto en sí; el celular “was stolen”, la persona “got robbed”.",
          register: "neutral",
          region: "Inglés general; la distinción rob/steal existe en todas las variedades.",
          related: ["get mugged", "be robbed", "get stolen", "be a victim"],
          example: {
            target: "I got robbed downtown.",
            translation: "Me robaron en el centro."
          }
        },
        {
          term: "to head out",
          explanation: "El phrasal verb para salir o arrancar hacia algún lado, más vivo que un “leave” a secas. Da la idea de ponerse en marcha, igual que el “arrancar” colombiano, y es muy común para anunciar que ya te vas.",
          literal: "cabeza afuera / salir",
          useWhen: "Al anunciar que ya te vas o que el grupo se pone en marcha.",
          avoidWhen: "Para una salida lenta o dudosa; “head out” sugiere un arranque decidido.",
          register: "friendly informal",
          region: "Inglés general norteamericano para ponerse en marcha.",
          related: ["take off", "get going", "leave", "hit the road"],
          example: {
            target: "Let's head out.",
            translation: "Arranquemos ya."
          }
        }
      ],
      note:
        "Lo esencial es que “dar papaya” no tiene traducción de una palabra: en inglés se describe con “make yourself a target” y “put your phone away”. De paso, “embarrassed” no es “embarazada”, la situación es “embarrassing” y la persona está “embarrassed”, la víctima de un robo dice “I got robbed”, y los phrasal verbs meten el pronombre en medio: “put it away”.",
      culture: [
        {
          label: "“Dar papaya” no cabe en una palabra",
          body: "Uno de los primeros choques al pasar del español colombiano al inglés es descubrir que “dar papaya” no tiene traducción directa. El inglés reparte la idea en frases: “make yourself a target”, “leave yourself open”, “don't take unnecessary risks”. Ninguna carga el humor ni la sabiduría callejera del original, así que muchos colombianos siguen usando la expresión en español incluso hablando inglés, y luego la explican. Es un buen recordatorio de que ciertos idioms viajan mejor con nota al pie que traducidos."
        },
        {
          label: "“Embarrassed” no es “embarazada”",
          body: "El falso amigo más famoso entre el español y el inglés: “embarrassed” significa avergonzado, no embarazada. Decir “I am embarrassed” es admitir pena; decir “I am pregnant” es anunciar un bebé. Además el inglés separa a la persona de la situación: uno se siente “embarrassed” y la situación es “embarrassing”. Confundir estos pares produce frases involuntariamente cómicas, así que conviene fijar de una vez que la pena se dice “embarrassed” y que “embarazada” es “pregnant”."
        },
        {
          label: "Robar marca distinto a la víctima",
          body: "En español “me robaron” pone la atención en la víctima con toda naturalidad. El inglés es más quisquilloso: a una persona la roban con “get robbed” o “get mugged”, mientras que a un objeto se lo roban con “steal” o “get stolen”. Por eso el calco “they stole me” suena a que te robaron a ti como objeto. La fórmula segura para contar un asalto es “I got robbed”, y para el objeto, “my phone got stolen”."
        },
        {
          label: "Los phrasal verbs parten el pronombre",
          body: "Muchos verbos ingleses cotidianos son phrasal verbs separables, y con un pronombre el orden es estricto: “put it away”, “pick it up”, “throw it out”, nunca “put away it”. El sustantivo puede ir en cualquiera de los dos lugares (“put the phone away” o “put away the phone”), pero el pronombre siempre se mete en medio. Interiorizar esta regla elimina uno de los errores más frecuentes y delatores del hispanohablante al hablar inglés."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “It gives me shame” for “I feel embarrassed”",
          whyItFails: "Es un calco directo del español que ningún anglohablante usa. La emoción se expresa con “feel” más adjetivo: “I feel embarrassed”. Traducir “dar” literalmente como “give” en las emociones produce frases que suenan raras en inglés.",
          sayInstead: "I feel embarrassed."
        },
        {
          mistake: "Saying “I'm so embarrassing” about your own feeling",
          whyItFails: "“Embarrassing” describe la situación, no a la persona: dirías que tú eres vergonzoso para los demás. Para hablar de cómo te sientes, va el participio “embarrassed”. Confundir los dos es un error clásico con los adjetivos en -ing y -ed.",
          sayInstead: "I'm so embarrassed."
        },
        {
          mistake: "Saying “Let's give a turn” for “Let's go for a walk”",
          whyItFails: "El inglés no traduce este idiom palabra por palabra: ni “give” ni “turn” encajan aquí. La frase natural para pasear es “go for a walk”, y el calco literal deja al oyente sin entender el plan.",
          sayInstead: "Let's go for a walk."
        },
        {
          mistake: "Saying “They stole me” to report a mugging",
          whyItFails: "“Steal” pide la cosa robada, no la persona, así que “they stole me” suena a que te robaron a ti como objeto. Para contar un asalto desde la víctima, el inglés usa “get robbed”.",
          sayInstead: "I got robbed."
        }
      ],
      variations: [
        {
          form: "Put your phone away.",
          register: "friendly informal",
          region: "General",
          whenToUse: "El aviso cotidiano para que alguien guarde el teléfono en un sitio concurrido."
        },
        {
          form: "Don't make yourself a target.",
          register: "neutral",
          region: "General",
          whenToUse: "La versión más cercana a “no dar papaya” cuando adviertes de un riesgo."
        },
        {
          form: "Let's go for a walk.",
          register: "friendly informal",
          region: "General",
          whenToUse: "Al proponer un paseo tranquilo, el equivalente de “damos una vuelta”."
        },
        {
          form: "I got robbed.",
          register: "neutral",
          region: "General",
          whenToUse: "Para contar desde la víctima que sufriste un asalto o un hurto."
        },
        {
          form: "Let's head out.",
          register: "friendly informal",
          region: "General",
          whenToUse: "Al anunciar que ya se van o que el grupo se pone en marcha."
        }
      ],
      prompt: "Alejandra quiere traducir “no dar papaya” al inglés. ¿Cuál es la mejor versión?",
      choices: [
        "Don't give papaya to the strangers who walk downtown right next to you.",
        "Don't make yourself a target by flashing your phone around downtown.",
        "Don't eat any papaya while you are walking around the busy downtown core."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Alejandra quiere decir que se siente apenada por lo que pasó. ¿Cuál oración es correcta?",
          choices: [
            "I am so embarrassing about the whole thing that happened to me downtown last week.",
            "It gives me a lot of shame the whole thing that happened to me downtown last week.",
            "I felt really embarrassed about the whole thing that happened to me downtown last week."
          ],
          answer: 2,
          tests: "avergonzado se dice “embarrassed”, no “embarrassing”"
        },
        {
          prompt: "Dana quiere decir “guárdalo” refiriéndose al celular. ¿Cuál suena natural en inglés?",
          choices: [
            "Put away it before someone on the crowded street decides to grab it from your hand.",
            "Put it away before someone on the crowded street decides to grab it from your hand.",
            "Put it away it before someone on the crowded street decides to grab from your hand."
          ],
          answer: 1,
          tests: "el pronombre va en medio: “put it away”"
        },
        {
          prompt: "Alejandra propone “dar una vuelta”. ¿Cómo se dice de forma natural en inglés?",
          choices: [
            "Let's go for a walk around the block before it gets too dark and cold outside.",
            "Let's give a turn around the block before it gets too dark and cold outside tonight.",
            "Let's make a walk around the block before it gets too dark and cold outside tonight."
          ],
          answer: 0,
          tests: "“dar una vuelta” es “go for a walk”"
        },
        {
          prompt: "Alejandra quiere contar que la robaron cerca de la estación. ¿Cuál oración es correcta?",
          choices: [
            "They robbed me my phone near the station on my way to the office last Friday.",
            "They stole me near the station on my way to the office really early last Friday.",
            "I got robbed near the station on my way to the office really early last Friday."
          ],
          answer: 2,
          tests: "la víctima usa “I got robbed”"
        }
      ]
    }
  },
  {
    id: "the-strange-fruit-at-the-juice-stall",
    level: "Starter · Food and drink",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "intimate",
    pathways: ["foundation"],
    verb: "saber",
    review: "pending",
    es: {
      title: "La fruta rara en el puesto de jugos",
      situation:
        "En una plaza de mercado de Bogotá, Alex se para en el puesto de Yésica, una vendedora joven, frente a una fruta que no reconoce: la curuba. Yésica lo anima a probarla y a adivinar a qué sabe. En la charla, Alex tropieza con el gran dúo del español, “saber” y “conocer”, y descubre que “sabe a” es como los colombianos dicen que algo tiene cierto sabor.",
      setting: {
        who: "Yésica runs a fruit and juice stall she inherited from her mother and knows every fruit on the table by heart. Alex has been in Bogotá a month and still freezes when a vendor names a fruit he's never heard of.",
        what: "A friendly tasting at a market stall that turns into a lesson on the two Spanish verbs for knowing.",
        when: "Mid-morning on a weekday, the market busy but not yet slammed, with time for the vendor to chat.",
        where: "A covered plaza de mercado in Bogotá, the kind of place where locals buy produce and drink fresh juice at the counter.",
        why: "Because tasting an unfamiliar fruit is the safest, friendliest way into real market Spanish, and Yésica clearly enjoys initiating a curious foreigner into a fruit most tourists never meet."
      },
      address: {
        form: "tú",
        who: "Yésica treats Alex with “tú”, the warm, informal second person, using forms like “sabes” and “conoces” to keep the exchange light and welcoming.",
        why: "In Bogotá the default with a stranger is often “usted”, but a young vendor may reach for “tú” to sound friendly and close, especially with someone around her age. It signals warmth without the formality that “usted” would carry, and it invites Alex to relax.",
        ifYouSwitch: "If Alex answered strictly in “usted”, it would sound a touch more reserved or respectful, which is fine with an elder; if he matched her “tú”, he'd echo her friendliness. In Bogotá both are common, and reading which one a person offers first is part of the local skill."
      },
      dialogue: [
        {
          speaker: "Yésica",
          target: "¿Conoces la curuba? Pruébala y me dices a qué sabe.",
          translation: "Do you know curuba? Try it and tell me what it tastes like.",
          pronunciation: "ko-NO-ses la ku-RU-ba? PRUE-ba-la i me DI-ses a ke SA-be",
          literal: "Know-you the curuba? Try-it and me you-say to what it-tastes.",
          why: "Two knowing verbs collide here. “Conoces” is “conocer”, to be familiar with a thing, the right choice for meeting a new fruit. “Sabe” is “saber”, and “a qué sabe” asks what it tastes like — flavour uses “saber a”, not “conocer”."
        },
        {
          speaker: "Alex",
          target: "No la conozco. ¿Sabes si es muy ácida?",
          translation: "I don't know it. Do you know if it's very sour?",
          pronunciation: "no la ko-NOS-ko. SA-bes si es muy A-si-da",
          literal: "Not it I-know. Know-you if it-is very sour?",
          why: "Alex correctly uses “conozco” for being familiar with the fruit, then switches to “sabes” for knowing a fact — whether it's sour. This is the core split: “conocer” for acquaintance, “saber” for facts and information."
        },
        {
          speaker: "Yésica",
          target: "Sabe a maracuyá, pero más suave. ¿Sabes prepararla en jugo?",
          translation: "It tastes like passion fruit, but milder. Do you know how to make it into juice?",
          pronunciation: "SA-be a ma-ra-ku-YA, pe-ro mas SUA-ve. SA-bes pre-pa-RAR-la en JU-go",
          literal: "It-tastes to passion-fruit, but more mild. Know-you to-prepare-it in juice?",
          why: "“Sabe a maracuyá” shows the flavour construction: “saber a” plus the thing it tastes of. Then “sabes prepararla” shows “saber” plus an infinitive, the way Spanish says “know how to” — no separate word for “how” is needed."
        },
        {
          speaker: "Alex",
          target: "No sé prepararla. Que yo sepa, nunca la había probado.",
          translation: "I don't know how to make it. As far as I know, I'd never tried it.",
          pronunciation: "no se pre-pa-RAR-la. ke yo SE-pa, NUN-ka la a-BI-a pro-BA-do",
          literal: "Not I-know to-prepare-it. That I know, never it I-had tried.",
          why: "“No sé prepararla” again pairs “saber” with an infinitive for a skill. “Que yo sepa” is a fixed hedge — “as far as I know” — and it takes the subjunctive “sepa”, a small marker of uncertainty baked into the phrase."
        },
        {
          speaker: "Yésica",
          target: "¿Sabías que crece en clima frío? Mucha gente ni sabe eso.",
          translation: "Did you know it grows in cold climates? A lot of people don't even know that.",
          pronunciation: "sa-BI-as ke KRE-se en KLI-ma FRI-o? MU-cha JEN-te ni SA-be E-so",
          literal: "Knew-you that it-grows in climate cold? Much people not-even knows that.",
          why: "“Sabías” is the imperfect of “saber”, used for background knowledge you held over time — “did you (already) know”. Contrast it with the preterite “supe”, which means the moment you found something out, not the ongoing state of knowing."
        },
        {
          speaker: "Alex",
          target: "No sabía. ¿Y sirve para algo más? —Pues quién sabe.",
          translation: "I didn't know. And is it good for anything else? —Well, who knows.",
          pronunciation: "no sa-BI-a. i SIR-ve pa-ra AL-go mas? pues kien SA-be",
          literal: "Not I-knew. And it-serves for something more? Well, who knows.",
          why: "“No sabía” is the imperfect for a state of not knowing — the natural reply here, not “no supe”. “Quién sabe” is the set phrase for “who knows”, a cheerful shrug at uncertainty that Colombians use constantly."
        }
      ],
      vocabulary: [
        {
          term: "saber",
          explanation: "To know a fact, a piece of information, or how to do something. It's the verb for data and skills — knowing that, knowing whether, knowing how — and it never means being acquainted with a person or place, which belongs to “conocer”.",
          literal: "to know (facts)",
          useWhen: "Stating or asking about facts, information, or abilities: knowing an address, a price, or how to swim.",
          avoidWhen: "Talking about being familiar with a person, city, or place; that's “conocer”.",
          register: "neutral",
          region: "Universal Spanish; the split with “conocer” holds across Colombia.",
          related: ["conocer", "saber a", "saber hacer", "no saber ni papa"],
          example: {
            target: "No sé a qué hora abren.",
            translation: "I don't know what time they open."
          }
        },
        {
          term: "conocer",
          explanation: "To be acquainted with a person, place, or thing — to have met or experienced it. Meeting someone for the first time is “conocer”, as is visiting a city. It's about familiarity through contact, not facts stored in your head.",
          literal: "to know (be familiar with)",
          useWhen: "Talking about knowing people, having visited places, or being familiar with things.",
          avoidWhen: "Stating facts or abilities; “I know that…” or “I know how to…” need “saber”.",
          register: "neutral",
          region: "Universal Spanish; the contrast with “saber” is identical throughout Colombia.",
          related: ["saber", "reconocer", "familiarizarse", "presentar"],
          example: {
            target: "¿Conoces a Yésica?",
            translation: "Do you know Yésica?"
          }
        },
        {
          term: "saber a",
          explanation: "To taste like something. Colombian Spanish uses “saber” — the same verb as for knowing — plus the preposition “a” and the flavour. So a fruit “sabe a maracuyá”, tastes of passion fruit. It's the standard way to describe flavour across the country.",
          literal: "to taste of / like",
          useWhen: "Describing what something tastes of, at a market, a meal, or a juice stall.",
          avoidWhen: "Using “tener gusto a”, which sounds foreign in Colombia; here flavour is “saber a”.",
          register: "neutral",
          region: "Colombian usage; “saber a” for taste is the norm, over the “tener gusto a” heard elsewhere.",
          related: ["saber", "sabor", "tener sabor", "saborear"],
          example: {
            target: "Esto sabe a mango.",
            translation: "This tastes like mango."
          }
        },
        {
          term: "saber + infinitivo",
          explanation: "“Saber” plus a plain infinitive means to know how to do something. Spanish folds the “how” into the structure, so “sé nadar” is “I know how to swim” with no separate word for “how”. Using “conocer” here would be wrong.",
          literal: "to know how to (do)",
          useWhen: "Talking about a skill or ability you have or lack: cooking, driving, swimming.",
          avoidWhen: "Adding “cómo” after “saber” for a skill; “sé cómo nadar” is heavier and usually unnecessary.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["saber", "poder", "aprender a", "ser capaz de"],
          example: {
            target: "Ella sabe cocinar muy bien.",
            translation: "She knows how to cook very well."
          }
        },
        {
          term: "que yo sepa",
          explanation: "A fixed hedge meaning “as far as I know”. It uses the subjunctive “sepa” to flag that you're not certain, letting you answer without committing to the full truth. It's a polite, cautious way to offer what you believe.",
          literal: "that I may know",
          useWhen: "Softening an answer you're not fully sure about, so you're not caught out if you're wrong.",
          avoidWhen: "When you're certain; then a plain statement is clearer and more confident.",
          register: "neutral",
          region: "Universal Spanish; very common in Colombian conversation.",
          related: ["hasta donde sé", "creo que", "no estoy seguro", "quién sabe"],
          example: {
            target: "Que yo sepa, todavía está abierto.",
            translation: "As far as I know, it's still open."
          }
        },
        {
          term: "quién sabe",
          explanation: "“Who knows” — a cheerful verbal shrug at something uncertain or unknowable. Colombians use it constantly to close off a question no one can answer, often with a little laugh, rather than insisting on a definite reply.",
          literal: "who knows",
          useWhen: "Reacting to something genuinely uncertain, or gently dodging a question with no clear answer.",
          avoidWhen: "When someone needs a real answer; the shrug can feel dismissive if they wanted help.",
          register: "friendly informal",
          region: "Universal Spanish; heavily used in Colombian everyday speech.",
          related: ["saber", "vaya uno a saber", "quién quita", "a saber"],
          example: {
            target: "¿Volverá? Pues quién sabe.",
            translation: "Will he come back? Well, who knows."
          }
        },
        {
          term: "no saber ni papa",
          explanation: "A colloquial idiom for not having the faintest idea — literally “to not know even a potato”. It's an emphatic, informal way to admit total ignorance of a topic, common and affectionate in Colombian speech.",
          literal: "to not know even a potato",
          useWhen: "Admitting, casually and with humour, that you know nothing about something.",
          avoidWhen: "In formal settings, where “no tengo ni idea” or “no sé nada del tema” fit better.",
          register: "friendly informal",
          region: "Colombian and wider Latin American slang; the potato image lands well locally.",
          related: ["no tener ni idea", "no saber nada", "estar en la luna", "ni papa"],
          example: {
            target: "De química no sé ni papa.",
            translation: "I don't know the first thing about chemistry."
          }
        }
      ],
      note:
        "The key is the “saber”–“conocer” split: “saber” is for facts, information, and skills (know that, know whether, know how to), while “conocer” is for being acquainted with people and places. On top of that, remember three Colombian staples: “sabe a” for what something tastes like, “que yo sepa” to hedge, and “quién sabe” to shrug off the unknown.",
      culture: [
        {
          label: "Two verbs for one English “know”",
          body: "English gets by with a single “know”, but Spanish splits it in two, and mixing them is a giveaway. “Saber” covers facts, information, and skills: you know a phone number, you know whether it's open, you know how to drive. “Conocer” covers acquaintance: you know a person, you know a city. The clean test is whether you could replace it with “be familiar with” — if yes, it's “conocer”; if it's a fact or a how-to, it's “saber”."
        },
        {
          label: "In Colombia, food “sabe a”",
          body: "Ask what a dish tastes like and Colombians reach for “saber”: “¿a qué sabe?” and “sabe a maracuyá”. The same verb that means “to know” also means “to taste of”, joined to the thing by the preposition “a”. Some learners import “tener gusto a” from other regions or textbooks, but in Colombia that sounds off. At a juice stall or a lunch counter, “sabe a” is the natural, local way to talk about flavour."
        },
        {
          label: "“Sabía” versus “supe”",
          body: "The two past tenses of “saber” mean genuinely different things. The imperfect “sabía” is the ongoing state of knowing: “no sabía” means “I didn't know” something all along. The preterite “supe” is the instant of finding out: “supe la noticia ayer” means “I learned the news yesterday”. English blurs both into “knew”, so learners often reach for “supe” when they mean the background state and should say “sabía”. Matching the tense to the moment is worth practising."
        },
        {
          label: "The friendly shrug: “quién sabe”",
          body: "Colombians love a graceful way to admit the unknown. “Quién sabe”, often with a smile, closes a question no one can answer, while “que yo sepa” hedges an answer you're only half sure of, and “no saber ni papa” cheerfully confesses total ignorance. Far from evasive, these phrases keep conversation warm and honest, signalling that you'd rather not overstate what you know. Sprinkling them in makes your Spanish sound relaxed and local rather than stiff."
        }
      ],
      pitfalls: [
        {
          mistake: "Asking “¿Sabes a María?” to mean “Do you know María?”",
          whyItFails: "Knowing a person is “conocer”, never “saber”. “¿Sabes a María?” actually reads as asking what María tastes like, thanks to “saber a”. To ask about acquaintance, you need “¿Conoces a María?”.",
          sayInstead: "¿Conoces a María?"
        },
        {
          mistake: "Saying “Conozco nadar” to mean “I know how to swim”",
          whyItFails: "Skills take “saber” plus an infinitive, not “conocer”. “Conozco nadar” mixes the acquaintance verb with an ability, which Spanish never does. The correct pattern is “sé nadar”, “I know how to swim”.",
          sayInstead: "Sé nadar."
        },
        {
          mistake: "Saying “Tiene gusto a mango” to describe a flavour",
          whyItFails: "In Colombia flavour is expressed with “saber a”, not “tener gusto a”, which sounds imported. Describing taste with “gusto” marks you as a non-local; the natural phrase at any stall is “sabe a mango”.",
          sayInstead: "Sabe a mango."
        },
        {
          mistake: "Using “No supe que existía” for background knowledge",
          whyItFails: "Background knowledge you held (or lacked) over time uses the imperfect “sabía”. The preterite “supe” means the moment of finding out, so “no supe que existía” misfires when you mean you had no idea all along.",
          sayInstead: "No sabía que existía."
        }
      ],
      variations: [
        {
          form: "¿Sabes si abren hoy?",
          register: "friendly informal",
          region: "General",
          whenToUse: "Asking a peer for a fact, in the warm “tú” form."
        },
        {
          form: "¿Sabe usted si abren hoy?",
          register: "polite formal",
          region: "Bogotá",
          whenToUse: "Asking the same fact respectfully, with an elder or a stranger."
        },
        {
          form: "¿Vos sabés si abren hoy?",
          register: "friendly informal",
          region: "Medellín / paisa",
          whenToUse: "The paisa voseo version among friends in Antioquia."
        },
        {
          form: "Que yo sepa, sí.",
          register: "neutral",
          region: "General",
          whenToUse: "Hedging an answer you believe but aren't fully sure of."
        },
        {
          form: "Quién sabe.",
          register: "friendly informal",
          region: "General",
          whenToUse: "Shrugging off a question no one can really answer."
        }
      ],
      prompt: "Yésica says the curuba “sabe a maracuyá”. What is she telling Alex?",
      choices: [
        "That the curuba knows the passion fruit exists, and that is why the two fruits grow together in cold weather.",
        "That Yésica knows passion fruit very well and is confidently recommending it to Alex at her market stall.",
        "That the curuba has a flavour close to passion fruit, though a little milder and less sharp."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Alex wants to ask whether Yésica knows a mutual friend, María. Which is right?",
          choices: [
            "¿Sabes a María, la que vende flores en la esquina de la plaza de mercado?",
            "¿Conoces a María, la que vende flores en la esquina de la plaza de mercado?",
            "¿Sabes de María, la que vende flores en la esquina de la plaza de mercado?"
          ],
          answer: 1,
          tests: "conocer for knowing a person"
        },
        {
          prompt: "Alex wants to say he doesn't know how to make the juice. Which is correct?",
          choices: [
            "No sé preparar el jugo de curuba, pero de verdad me encantaría aprender a hacerlo.",
            "No conozco preparar el jugo de curuba, pero de verdad me encantaría aprender a hacerlo.",
            "No sé de preparar el jugo de curuba, pero de verdad me encantaría aprender a hacerlo."
          ],
          answer: 0,
          tests: "saber plus infinitive for a skill"
        },
        {
          prompt: "How does Yésica say the curuba tastes like passion fruit?",
          choices: [
            "La curuba conoce a maracuyá, con un toque más suave y bastante menos ácido que el original.",
            "La curuba tiene gusto a maracuyá, con un toque más suave y bastante menos ácido que el original.",
            "La curuba sabe a maracuyá, con un toque más suave y bastante menos ácido que el original."
          ],
          answer: 2,
          tests: "saber a for tastes like"
        },
        {
          prompt: "Alex means he had no idea the fruit even existed. Which fits?",
          choices: [
            "No supe que esa fruta existía hasta que tú me la mostraste hoy aquí en el puesto.",
            "No sabía que esa fruta existía hasta que tú me la mostraste hoy aquí en el puesto.",
            "No conocía que esa fruta existía hasta que tú me la mostraste hoy aquí en el puesto."
          ],
          answer: 1,
          tests: "imperfect sabía for background knowledge"
        }
      ]
    },
    en: {
      title: "La fruta rara en el puesto del mercado",
      situation:
        "En un mercado de Toronto, Alejandra se para en el puesto de Nora, una vendedora local, frente a una fruta que no conoce: el ruibarbo. Nora la anima a probarlo y a adivinar a qué sabe. En la charla, Alejandra descubre que el inglés usa un solo verbo, “know”, para lo que el español parte en “saber” y “conocer”, y que la comida no “knows”, sino que “tastes like”.",
      setting: {
        who: "Nora atiende un puesto de frutas y verduras que heredó de su familia y se sabe de memoria cada producto de la mesa. Alejandra lleva dos meses en Toronto y todavía se traba cuando una vendedora nombra una fruta que nunca ha visto.",
        what: "Una degustación amable en un puesto del mercado que se convierte en una lección sobre el único “know” del inglés.",
        when: "A media mañana entre semana, con el mercado movido pero sin agüe, y tiempo para que la vendedora converse.",
        where: "Un mercado cubierto en Toronto, de esos donde la gente compra verduras y prueba fruta en el mostrador.",
        why: "Porque probar una fruta desconocida es la entrada más fácil y amistosa al inglés real del mercado, y a Nora se le nota que disfruta iniciar a una recién llegada en una fruta que muchos ni miran."
      },
      address: {
        form: "mixed",
        who: "Nora y Alejandra se tratan de “you”, la única segunda persona del inglés, así que no hay que elegir entre tú, usted o vos.",
        why: "El inglés no marca el respeto en el pronombre porque solo existe “you”. El registro lo cargan las palabras: un “would you like…”, un “please” o un “ma'am” hacen el trabajo que en español haría el usted, y en un puesto de mercado basta el tono cordial y una sonrisa.",
        ifYouSwitch: "No hay pronombre al que cambiarse. Si Alejandra quiere sonar más formal, no toca el “you”: añade “excuse me”, “please” o “ma'am”; si quiere sonar cercana, usa el nombre y un tono relajado. En inglés la cortesía viaja en el léxico, no en el pronombre."
      },
      dialogue: [
        {
          speaker: "Nora",
          target: "Have you tried rhubarb? Taste it and tell me what it's like.",
          translation: "¿Has probado el ruibarbo? Pruébalo y dime cómo es.",
          pronunciation: "jav yu traid RU-barb? teist it and tel mi uat its laik",
          literal: "¿Has tú probado ruibarbo? Prueba-lo y dime qué eso es-como.",
          why: "Para presentar una comida, el inglés pregunta “have you tried…?”, no “do you know this fruit?”. Con la comida se usa “try” (probar), porque “know” quedaría raro para algo que se prueba con el paladar."
        },
        {
          speaker: "Alejandra",
          target: "I don't know it. Do you know if it's very sour?",
          translation: "No lo conozco. ¿Sabes si es muy ácido?",
          pronunciation: "ai dont nou it. du yu nou if its ve-ri SAU-er",
          literal: "Yo no sé lo. ¿Sabes tú si eso-es muy ácido?",
          why: "Aquí se ve el gran ahorro del inglés: “I don't know it” (conocer) y “do you know if” (saber) usan el mismo verbo “know”. Donde el español elige entre dos verbos, el inglés se queda con uno solo."
        },
        {
          speaker: "Nora",
          target: "It tastes like green apple, but sharper. Do you know how to cook it?",
          translation: "Sabe a manzana verde, pero más ácido. ¿Sabes cocinarlo?",
          pronunciation: "it teists laik griin A-pol, bot SHAR-per. du yu nou jau tu kuk it",
          literal: "Eso sabe como verde manzana, pero más agudo. ¿Sabes tú cómo a cocinar-lo?",
          why: "El sabor va con “taste like”, no con “know”: la comida no “knows”. Y “know how to cook” muestra que en inglés el “how” es obligatorio para una habilidad, a diferencia del español “sé cocinar”, que no lo lleva."
        },
        {
          speaker: "Alejandra",
          target: "I don't know how to cook it. As far as I know, I've never tried it.",
          translation: "No sé cocinarlo. Que yo sepa, nunca lo he probado.",
          pronunciation: "ai dont nou jau tu kuk it. as far as ai nou, aiv NE-ver traid it",
          literal: "Yo no sé cómo a cocinar-lo. Tan lejos como yo sé, he nunca probado-lo.",
          why: "“As far as I know” es el calco funcional de “que yo sepa”, la misma cautela. Y “I've never tried it” usa el present perfect para una experiencia hasta ahora, donde el español dice “nunca lo he probado”."
        },
        {
          speaker: "Nora",
          target: "My grandma taught me. I've known this stall for twenty years.",
          translation: "Mi abuela me enseñó. Conozco este puesto desde hace veinte años.",
          pronunciation: "mai GRAND-ma tot mi. aiv noun dis stol for TUEN-ti yirs",
          literal: "Mi abuela enseñó me. He sabido este puesto por veinte años.",
          why: "Para una duración que sigue vigente, el inglés usa el present perfect con “for”: “I've known… for twenty years”, nunca “I know it since”. El español lo resuelve con presente y “desde hace”, un contraste que confunde mucho."
        },
        {
          speaker: "Alejandra",
          target: "Nice. I only met you today, but who knows — I'll be back.",
          translation: "Qué bien. Apenas te conocí hoy, pero quién sabe, vuelvo.",
          pronunciation: "nais. ai ON-li met yu tu-DEI, bot ju nous — ail bi bak",
          literal: "Bonito. Yo solo conocí te hoy, pero quién sabe — yo estaré de-vuelta.",
          why: "Conocer a alguien por primera vez es “meet”, no “know”: “I met you today”. Y “who knows” es el calco exacto de “quién sabe”, el mismo encogimiento de hombros ante lo incierto."
        }
      ],
      vocabulary: [
        {
          term: "to know",
          explanation: "El inglés usa un solo verbo, “know”, donde el español reparte en “saber” (datos, información, habilidades) y “conocer” (personas, lugares). Así, “I know the answer” y “I know Nora” comparten verbo, aunque en español serían “sé” y “conozco”.",
          literal: "saber / conocer",
          useWhen: "Para hechos, información, habilidades y también para personas o lugares conocidos.",
          avoidWhen: "Con comida por su sabor (ahí va “taste like”) o al conocer a alguien por primera vez (ahí va “meet”).",
          register: "neutral",
          region: "Inglés general; el único “know” contrasta con el doble verbo del español.",
          related: ["know how", "know about", "be familiar with", "meet"],
          example: {
            target: "Do you know Nora?",
            translation: "¿Conoces a Nora?"
          }
        },
        {
          term: "to taste like",
          explanation: "La forma natural de decir “saber a”. El sabor se expresa con “taste like” más la cosa, nunca con “know”: la comida no “knows”. Es el equivalente directo del “sabe a” colombiano en cualquier mercado o mesa.",
          literal: "saber a / tener sabor a",
          useWhen: "Al describir a qué sabe algo: una fruta, un plato, un jugo.",
          avoidWhen: "Usando “know” para el sabor; ese es un calco del español que no funciona en inglés.",
          register: "neutral",
          region: "Inglés general; “taste of” es una variante un poco más literaria.",
          related: ["taste of", "flavour", "tastes good", "have a taste"],
          example: {
            target: "It tastes like green apple.",
            translation: "Sabe a manzana verde."
          }
        },
        {
          term: "to know how to",
          explanation: "Para una habilidad, el inglés exige “how”: “know how to cook”, “know how to drive”. El español dice “sé cocinar” sin ninguna palabra para “cómo”, así que omitir el “how” en inglés (“I know cook”) suena mal.",
          literal: "saber cómo (hacer)",
          useWhen: "Al hablar de una destreza que tienes o te falta: cocinar, manejar, nadar.",
          avoidWhen: "Quitando el “how”; en inglés la habilidad siempre lo lleva, no es opcional.",
          register: "neutral",
          region: "Inglés general; el “how” es obligatorio en todas las variedades.",
          related: ["know how", "be able to", "can", "learn how to"],
          example: {
            target: "I know how to cook.",
            translation: "Sé cocinar."
          }
        },
        {
          term: "have you tried…?",
          explanation: "La pregunta natural para ofrecer comida o bebida: “have you tried…?”, no “do you know this fruit?”. Con la comida el inglés usa “try” (probar), y el present perfect da la idea de experiencia hasta el momento.",
          literal: "¿has probado…?",
          useWhen: "Al ofrecer una comida o bebida nueva, o preguntar si alguien la ha probado.",
          avoidWhen: "Con “know” para la comida, que suena a familiaridad y no a haberla probado.",
          register: "friendly informal",
          region: "Inglés general; muy usual al presentar platos o frutas locales.",
          related: ["have you had", "do you want to try", "ever tried", "taste"],
          example: {
            target: "Have you tried rhubarb?",
            translation: "¿Has probado el ruibarbo?"
          }
        },
        {
          term: "as far as I know",
          explanation: "El equivalente funcional de “que yo sepa”: una manera de responder sin comprometerte del todo, por si te equivocas. Marca que ofreces lo que crees, no una certeza absoluta.",
          literal: "hasta donde sé",
          useWhen: "Al suavizar una respuesta de la que no estás totalmente seguro.",
          avoidWhen: "Cuando sí estás seguro; ahí una afirmación directa es más clara y firme.",
          register: "neutral",
          region: "Inglés general; “as far as I'm aware” es una variante más formal.",
          related: ["as far as I'm aware", "I believe", "I'm not sure but", "who knows"],
          example: {
            target: "As far as I know, it's open.",
            translation: "Que yo sepa, está abierto."
          }
        },
        {
          term: "who knows",
          explanation: "El calco exacto de “quién sabe”: un encogimiento de hombros ante lo incierto. Cierra con ligereza una pregunta que nadie puede responder, muchas veces con una media sonrisa.",
          literal: "quién sabe",
          useWhen: "Al reaccionar ante algo genuinamente incierto o imposible de saber.",
          avoidWhen: "Cuando alguien necesita una respuesta real; puede sonar despreocupado si esperaba ayuda.",
          register: "friendly informal",
          region: "Inglés general; universalmente entendido en el habla cotidiana.",
          related: ["who knows", "no idea", "hard to say", "your guess is as good as mine"],
          example: {
            target: "Who knows.",
            translation: "Quién sabe."
          }
        },
        {
          term: "to not have a clue",
          explanation: "El equivalente coloquial de “no saber ni papa”: no tener la más mínima idea. Es una forma enfática e informal de admitir ignorancia total sobre un tema, con un toque de humor.",
          literal: "no tener ni una pista",
          useWhen: "Al admitir con humor que no sabes absolutamente nada de algo.",
          avoidWhen: "En contextos formales, donde “I have no idea” resulta más neutro.",
          register: "friendly informal",
          region: "Inglés general; “haven't got a clue” es la variante británica.",
          related: ["have no idea", "no clue", "clueless", "beats me"],
          example: {
            target: "I don't have a clue.",
            translation: "No sé ni papa."
          }
        }
      ],
      note:
        "Lo esencial es que el inglés usa un solo “know” para “saber” y “conocer”. Además, la comida no “knows”: se dice “tastes like”; una habilidad lleva “how” (“know how to cook”); conocer a alguien por primera vez es “meet”, no “know”; y la duración va con present perfect más “for”: “I've known her for two years”, nunca “I know her since”.",
      culture: [
        {
          label: "Un solo “know” para dos verbos",
          body: "El español distingue “saber” de “conocer”, pero el inglés lo resuelve todo con “know”. Se conoce a una persona, se sabe un dato y se sabe hacer algo, y en los tres casos el verbo es el mismo. Para el hispanohablante esto suena a pérdida de matiz, pero simplifica la vida: no hay que elegir. El reto va al revés — al volver al español, hay que recordar cuál de los dos verbos toca, porque el inglés ya no lo marca por ti."
        },
        {
          label: "La comida no “knows”, “tastes like”",
          body: "Un calco tentador es traducir “sabe a” como “it knows to”, porque en español el mismo verbo sirve para saber y para el sabor. En inglés no: el sabor se dice con “taste like” más la cosa, “it tastes like apple”. Usar “know” para el sabor deja al oyente perdido. Conviene separar de una vez las dos ideas: “know” es para datos y personas, y “taste like” es exclusivamente para lo que percibe el paladar."
        },
        {
          label: "“For” y el presente perfecto para la duración",
          body: "Para decir cuánto tiempo llevas haciendo algo, el inglés usa el presente perfecto con “for”: “I've known her for two years”, “I've worked here for a month”. El español dice “la conozco desde hace dos años”, en presente y con “desde hace”. Por eso el calco “I know her since two years” es uno de los errores más frecuentes. La fórmula segura es “have” más participio, más “for” con la cantidad de tiempo."
        },
        {
          label: "“Meet” es conocer por primera vez",
          body: "El inglés reserva un verbo aparte para el primer encuentro: “meet”. “I met her yesterday” es “la conocí ayer”, ese momento inicial. Después de eso ya la “know”. Decir “I knew her yesterday” suena a que la conocías de antes, no a que se presentaron. Y “nice to meet you” es la fórmula del saludo inicial. Separar “meet” (el primer contacto) de “know” (la familiaridad que sigue) evita malentendidos sobre desde cuándo conoces a alguien."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “It knows to passion fruit” for a flavour",
          whyItFails: "Es un calco del doble sentido español de “saber”. En inglés el sabor va con “taste like”, y “know” solo sirve para datos o personas. “It knows to passion fruit” no significa nada para el oído anglohablante.",
          sayInstead: "It tastes like passion fruit."
        },
        {
          mistake: "Saying “I know cook” without “how to”",
          whyItFails: "La habilidad en inglés exige “how to”: “know how to cook”. El español “sé cocinar” no lleva palabra para “cómo”, y calcarlo directo deja la frase incompleta y agramatical en inglés.",
          sayInstead: "I know how to cook."
        },
        {
          mistake: "Saying “I already know her last week” for a first meeting",
          whyItFails: "Conocer a alguien por primera vez es “meet”, no “know”. “I know her last week” mezcla el presente de familiaridad con un tiempo pasado y no expresa el primer encuentro. Para eso está “I met her”.",
          sayInstead: "I met her last week."
        },
        {
          mistake: "Saying “I know her since two years” for a duration",
          whyItFails: "La duración vigente pide present perfect con “for”, no el presente con “since” más una cantidad. “I know her since two years” calca el español y suena mal; la forma correcta usa “have known” y “for”.",
          sayInstead: "I've known her for two years."
        }
      ],
      variations: [
        {
          form: "Do you know if they're open?",
          register: "neutral",
          region: "General",
          whenToUse: "Al preguntar por un dato, igual que “¿sabes si…?”."
        },
        {
          form: "Do you know how to cook it?",
          register: "neutral",
          region: "General",
          whenToUse: "Al preguntar por una habilidad, con el “how” obligatorio."
        },
        {
          form: "Have you tried it?",
          register: "friendly informal",
          region: "General",
          whenToUse: "Al ofrecer comida o bebida, en vez de preguntar si la “know”."
        },
        {
          form: "As far as I know.",
          register: "neutral",
          region: "General",
          whenToUse: "Al matizar una respuesta de la que no estás seguro, como “que yo sepa”."
        },
        {
          form: "Who knows.",
          register: "friendly informal",
          region: "General",
          whenToUse: "Al encogerte de hombros ante algo incierto, como “quién sabe”."
        }
      ],
      prompt: "Nora dice que el ruibarbo “tastes like green apple”. ¿Qué está diciendo?",
      choices: [
        "Que el ruibarbo sabe que existe la manzana verde y que por eso las dos crecen juntas en clima frío.",
        "Que Nora conoce muy bien la manzana verde y por eso se la recomienda con toda confianza a Alejandra.",
        "Que el ruibarbo tiene un sabor parecido al de la manzana verde, aunque bastante más ácido."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Alejandra quiere decir que no sabe cocinar el ruibarbo. ¿Cuál oración es correcta?",
          choices: [
            "I don't know how to cook rhubarb yet, but I would really love to learn how to.",
            "I don't know cook rhubarb yet, but I would really love to learn how to do it well.",
            "I don't know to cook rhubarb yet, but I would really love to learn how to do it well."
          ],
          answer: 0,
          tests: "“know how to” para una habilidad"
        },
        {
          prompt: "¿Cómo dice Nora que el ruibarbo sabe a manzana verde?",
          choices: [
            "The rhubarb knows to green apple, with a sharper and much more acidic touch than usual.",
            "The rhubarb tastes like green apple, with a sharper and much more acidic touch than usual.",
            "The rhubarb has taste to green apple, with a sharper and much more acidic touch than usual."
          ],
          answer: 1,
          tests: "“taste like” para el sabor"
        },
        {
          prompt: "Alejandra quiere decir que conoció a Nora hoy por primera vez. ¿Cuál es correcta?",
          choices: [
            "I already know Nora today for the very first time, right here at her busy market stall.",
            "I already knew Nora today for the very first time, right here at her busy market stall.",
            "I met Nora today for the very first time, right here at her busy market stall downtown."
          ],
          answer: 2,
          tests: "“meet” para conocer por primera vez"
        },
        {
          prompt: "Nora lleva veinte años con el puesto. ¿Cómo lo dice en inglés natural?",
          choices: [
            "I've known this stall for twenty years, ever since my grandmother first taught me everything.",
            "I know this stall since twenty years, ever since my grandmother first taught me everything here.",
            "I'm knowing this stall for twenty years, ever since my grandmother first taught me everything."
          ],
          answer: 0,
          tests: "present perfect con “for” para la duración"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/04-foundation-perception.js");
