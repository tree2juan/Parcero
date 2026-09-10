/*
 * Lesson block: developing / allowing and preventing.
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
 * The three verbs here — permitir, impedir and evitar — are the grammar of
 * rules and limits: what an institution allows, what a rule or obstacle stops,
 * and what ordinary speakers steer clear of. The two directions are mirrors:
 * same number of dialogue turns, vocabulary entries, culture notes, pitfalls,
 * variations and practice questions, and the same optional slots filled on the
 * same rows. That is enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "reading-the-library-sign-in-sincelejo",
    level: "Developing · Rules and limits",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "courteous",
    pathways: ["independent"],
    verb: "permitir",
    review: "pending",
    es: {
      title: "Leer el aviso de la biblioteca",
      situation:
        "Alex entra a una biblioteca pública de Sincelejo con una botella de agua, un portátil y una empanada en la mano. En la puerta hay un aviso con varias reglas. Tú necesitas entender qué se permite, qué no se permite y por qué permitir no suena como la manera normal de pedirle algo a un amigo.",
      setting: {
        who: "Rosa works at the front desk, and Alex is a visitor who wants to study without breaking the posted rules.",
        what: "A quick reading of a public sign: food, water, laptops, and where the formal verb permitir belongs.",
        when: "Mid-morning, before the reading room fills with students after class.",
        where: "Sincelejo, in a public library near the center, with fans moving warm air over long wooden tables.",
        why: "Because permitir is not the everyday “let” between friends. It is the institutional verb of signs, guards, rules, and formal permission."
      },
      address: {
        form: "usted",
        who: "Rosa uses usted with Alex at the desk, and Alex uses usted back.",
        why: "A public library desk is friendly but institutional. For you, usted matches the posted rules and keeps the question polite without sounding timid.",
        ifYouSwitch:
          "Tú would not be shocking with someone your age, but it weakens the public-service frame. Vos does not belong in this neutral desk exchange."
      },
      dialogue: [
        {
          speaker: "Rosa",
          target: "Buenos días. En la sala no se permite entrar con comida.",
          translation: "Good morning. Food is not allowed in the room.",
          pronunciation: "BWEH-nos DEE-as. en lah SAH-lah noh seh per-MEE-teh en-TRAR kon koh-MEE-dah",
          literal: "Good days. In the room not itself allows to-enter with food.",
          why: "“No se permite” is the classic sign-and-rule form. It sounds official because the rule is speaking, not Rosa personally refusing Alex."
        },
        {
          speaker: "Alex",
          target: "Entiendo. ¿Permiten entrar con agua?",
          translation: "I understand. Do they allow people to come in with water?",
          pronunciation: "en-TYEN-doh. per-MEE-ten en-TRAR kon AH-gwah",
          literal: "I-understand. They-allow to-enter with water?",
          why: "Permitir can take an infinitive: permiten entrar. The person being allowed is general, so Spanish does not need a subject after the verb."
        },
        {
          speaker: "Rosa",
          target: "Sí, permitimos agua con tapa, pero no permitimos comida.",
          translation: "Yes, we allow water with a lid, but we don't allow food.",
          pronunciation: "see, per-mee-TEE-mos AH-gwah kon TAH-pah, PEH-roh noh per-mee-TEE-mos koh-MEE-dah",
          literal: "Yes, we-allow water with lid, but not we-allow food.",
          why: "Here the library speaks as “we.” It is still formal register: a policy, not a friend saying yes or no."
        },
        {
          speaker: "Alex",
          target: "¿Y permiten que use mi portátil?",
          translation: "And do they allow me to use my laptop?",
          pronunciation: "ee per-MEE-ten keh OO-seh mee por-TAH-teel",
          literal: "And they-allow that I-use my laptop?",
          why: "Now permitir takes a que-clause with subjunctive: que use. The subject matters, so the grammar changes from infinitive to clause."
        },
        {
          speaker: "Rosa",
          target: "Claro. Lo que no permitimos es hablar duro.",
          translation: "Of course. What we don't allow is speaking loudly.",
          pronunciation: "KLAH-roh. loh keh noh per-mee-TEE-mos es ah-BLAR DOO-roh",
          literal: "Clear. What not we-allow is to-speak hard.",
          why: "The infinitive returns after permitimos because the rule is general: no loud talking in the room."
        },
        {
          speaker: "Alex",
          target: "Gracias. A un amigo le diría “déjame pasar”, no “permíteme pasar”, ¿cierto?",
          translation: "Thanks. To a friend I would say “let me pass,” not “permit me to pass,” right?",
          pronunciation: "GRAH-syas. ah oon ah-MEE-goh leh dee-REE-ah DEH-hah-meh pah-SAR, noh per-MEE-teh-meh pah-SAR, SYER-toh",
          literal: "Thanks. To a friend I would-say let-me pass, not permit-me pass, true?",
          why: "This is the register split. Dejar is the everyday “let”; permitir belongs to notices, guards, forms, and formal permission."
        }
      ],
      vocabulary: [
        {
          term: "permitir",
          explanation:
            "To allow or permit in a formal, institutional register. It belongs to signs, guards, schools, offices, and regulations more than casual friendship.",
          literal: "to permit",
          useWhen:
            "A rule, organisation, guard, sign, teacher, or official policy says what is allowed.",
          avoidWhen:
            "You are asking a friend to let you do something in ordinary speech. Colombians usually use dejar there.",
          register: "formal neutral",
          region: "Universal Spanish; the institutional feel is strong in Colombia too.",
          related: ["dejar", "autorizar", "prohibir", "regla"],
          example: {
            target: "No se permite entrar con comida.",
            translation: "Food is not allowed."
          }
        },
        {
          term: "no se permite",
          explanation:
            "The impersonal sign form: not allowed. It avoids naming a person and makes the rule sound posted, official, and general.",
          literal: "it is not permitted",
          useWhen:
            "Reading or writing rules in public places: libraries, buses, buildings, museums, pools, offices.",
          avoidWhen:
            "Talking warmly to one person. Then “no puedes” or “no dejan” may sound more natural, depending on who is stopping it.",
          register: "formal public",
          region: "General Colombian institutional language.",
          related: ["está prohibido", "no se puede", "se permite", "aviso"],
          example: {
            target: "No se permite entrar con comida.",
            translation: "Food is not allowed."
          }
        },
        {
          term: "permitir + infinitivo",
          explanation:
            "The pattern for a general allowed action: permitir entrar, permitir usar, permitir tomar fotos.",
          literal: "to allow to enter",
          useWhen:
            "The rule applies to anyone, or the person allowed is obvious and not the grammar focus.",
          avoidWhen:
            "You need to name a different subject after the permission. Then use permitir que plus subjunctive.",
          register: "grammar pattern",
          region: "Universal Spanish.",
          related: ["permiten entrar", "permite usar", "se permite pasar", "autoriza ingresar"],
          example: {
            target: "Permiten entrar con agua.",
            translation: "They allow people to come in with water."
          }
        },
        {
          term: "permitir que + subjuntivo",
          explanation:
            "The pattern for allowing a specific person or group to do something: permiten que use, permitimos que entren.",
          literal: "to allow that I use",
          useWhen:
            "The person being allowed has their own subject inside the que-clause.",
          avoidWhen:
            "The action is general and does not need a new subject. Then the infinitive is cleaner.",
          register: "grammar pattern",
          region: "Universal Spanish.",
          related: ["permiten que entre", "permite que use", "permitimos que pasen", "autoriza que ingresen"],
          example: {
            target: "¿Permiten que use mi portátil?",
            translation: "Do they allow me to use my laptop?"
          }
        },
        {
          term: "con tapa",
          explanation:
            "With a lid. A small phrase that often decides whether a drink is allowed indoors.",
          literal: "with lid",
          useWhen:
            "Asking about water bottles, cups, containers, and anything that might spill.",
          avoidWhen:
            "The issue is food, noise, or entry. Then tapa is not the limiting detail.",
          register: "neutral",
          region: "General Colombian.",
          related: ["botella", "termo", "vaso", "derramar"],
          example: {
            target: "Permitimos agua con tapa.",
            translation: "We allow water with a lid."
          }
        },
        {
          term: "hablar duro",
          explanation:
            "To speak loudly. Colombians often use duro for volume as well as hardness.",
          literal: "to speak hard",
          useWhen:
            "A place needs quiet: a library, clinic, meeting, classroom, or sleeping house.",
          avoidWhen:
            "You mean speaking harshly or rudely. Duro can do that too, so context must guide it.",
          register: "neutral",
          region: "General Colombian.",
          related: ["en voz baja", "hacer ruido", "guardar silencio", "molestar"],
          example: {
            target: "No permitimos hablar duro.",
            translation: "We don't allow loud talking."
          }
        },
        {
          term: "déjame pasar",
          explanation:
            "Let me through. It is the everyday friend-and-crowd version, not the formal permitir version.",
          literal: "leave me to pass",
          useWhen:
            "Speaking casually to someone who is physically blocking you or controlling a small immediate action.",
          avoidWhen:
            "A sign, policy, or official permission is the point. Then permitir fits better.",
          register: "friendly informal",
          region: "General Colombian everyday speech.",
          related: ["dejar", "me dejas", "permiso", "pasar"],
          example: {
            target: "Déjame pasar un momento.",
            translation: "Let me through for a moment."
          }
        }
      ],
      note:
        "Permitir is a real verb, but it is not the normal casual “let.” A sign says “no se permite”; a guard says “no está permitido”; a friend says “déjame.” The grammar payload is just as important: permitir can take an infinitive for a general action, or que plus subjunctive when a specific subject is being allowed.",
      culture: [
        {
          label: "Rules often speak impersonally",
          body:
            "A Colombian sign does not need a person behind it. “No se permite” lets the institution speak without naming the clerk who has to enforce it. That can make a refusal feel less personal, even when the person at the desk is the one saying it aloud."
        },
        {
          label: "Public warmth and public rules coexist",
          body:
            "Rosa can be friendly and still point to the sign. Colombian service encounters often mix warmth with firm limits: a greeting, an explanation, and then the rule. Hearing permitir helps you recognize that the conversation has moved into official territory."
        },
        {
          label: "Food rules are not personal",
          body:
            "A library rule about food protects tables, books, keyboards, and other people's quiet. If you hear “no se permite entrar con comida,” the useful response is not arguing intent. It is asking what is allowed instead: water with a lid, a locker, or eating outside."
        },
        {
          label: "Do not over-formalise your friends",
          body:
            "A learner who says “¿me permites pasar?” to a friend will be understood, but the sentence sounds like it escaped from a formal notice. The everyday social verb is dejar. Knowing permitir includes knowing when not to use it."
        }
      ],
      pitfalls: [
        {
          mistake: "Using permitir as the default way to say “let me” with friends",
          whyItFails:
            "It is grammatical but too formal for ordinary Colombian speech. Between friends, permitir can sound like a sign on a wall.",
          sayInstead: "Déjame pasar."
        },
        {
          mistake: "Saying “permiten que uso mi portátil”",
          whyItFails:
            "After permitir que, Spanish needs the subjunctive when the subject is specific. Uso must become use.",
          sayInstead: "Permiten que use mi portátil."
        },
        {
          mistake: "Treating “no se permite” as a personal rejection",
          whyItFails:
            "The se-form makes the rule impersonal. Rosa is not saying she dislikes Alex; she is stating what the room allows.",
          sayInstead: "¿Se permite entrar con agua?"
        },
        {
          mistake: "Using a que-clause when an infinitive is cleaner",
          whyItFails:
            "If the permission is general, the infinitive is shorter and more natural. The que-clause is for a named subject.",
          sayInstead: "Permiten entrar con agua."
        }
      ],
      variations: [
        {
          form: "No se permite entrar con comida.",
          register: "formal public",
          region: "General Colombian",
          whenToUse: "A posted rule in a public or institutional space."
        },
        {
          form: "¿Permiten que use mi portátil?",
          register: "formal polite",
          region: "General Colombian",
          whenToUse: "Asking whether a specific person may do something."
        },
        {
          form: "Se permite tomar fotos sin flash.",
          register: "formal public",
          region: "General Colombian",
          whenToUse: "A sign or rule allowing a general action with a limit."
        },
        {
          form: "No permitimos hablar duro en la sala.",
          register: "formal polite",
          region: "General Colombian",
          whenToUse: "Staff explaining a room rule without sounding personal."
        },
        {
          form: "Déjame pasar un momentico.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The everyday casual alternative with friends or crowds."
        }
      ],
      prompt: "Rosa says “no se permite entrar con comida.” What register is Alex hearing?",
      choices: [
        "A formal public rule, not a casual friend saying “let me.”",
        "A private joke between two friends blocking a doorway.",
        "A warm invitation to eat at the library table."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses the subjunctive pattern after permitir que?",
          choices: [
            "Permiten que uso mi portátil.",
            "Permiten que use mi portátil.",
            "Permiten usar mi portátil."
          ],
          answer: 1,
          tests: "permitir que + subjunctive"
        },
        {
          prompt: "Which sentence is best for a general rule on a sign?",
          choices: [
            "No se permite entrar con comida.",
            "No permites que entro con comida.",
            "No me permites comida, amigo."
          ],
          answer: 0,
          tests: "no se permite as posted rule"
        },
        {
          prompt: "Alex is talking to a friend in a doorway. Which sounds everyday?",
          choices: [
            "Permítame usted circular ahora.",
            "No se permite mi paso aquí.",
            "Déjame pasar un momentico."
          ],
          answer: 2,
          tests: "dejar as everyday let"
        }
      ]
    },
    en: {
      title: "Leer el aviso de la biblioteca",
      situation:
        "Alejandra entra a una biblioteca pública en Houston con una botella de agua, un portátil y una empanada en la mano. En la puerta hay un aviso con varias reglas. Usted necesita entender cuándo “allow” suena institucional y cuándo “let” suena cotidiano.",
      setting: {
        who: "Rose trabaja en el mostrador de entrada, y Alejandra es una visitante que quiere estudiar sin romper las reglas visibles.",
        what: "Una lectura rápida de un aviso público: comida, agua, portátiles y dónde encaja el registro formal de “allow.”",
        when: "A media mañana, antes de que la sala se llene de estudiantes después de clase.",
        where: "Houston, en una biblioteca pública de barrio, con mesas largas, enchufes y avisos cerca de la entrada.",
        why: "Porque “allow” no siempre traduce el “dejar” cotidiano. En inglés, como en español, las reglas y los amigos no suenan igual."
      },
      address: {
        form: "mixed",
        who: "Rose y Alejandra usan el mismo “you”; la formalidad se marca por “allowed,” “please,” y el contexto del mostrador.",
        why: "El inglés no tiene usted ni tú. La diferencia entre una regla pública y un favor entre amigos aparece en “allow” frente a “let,” no en el pronombre.",
        ifYouSwitch:
          "No hay pronombre que cambiar. “Am I allowed to…?” suena correcto ante una regla; “let me through” suena normal en una puerta."
      },
      dialogue: [
        {
          speaker: "Rose",
          target: "Good morning. Food isn't allowed in the reading room.",
          translation: "Buenos días. No se permite entrar con comida a la sala.",
          pronunciation: "gud MOR-ning. fud IZ-ent a-LAUD in da RI-ding rum",
          literal: "Buenos días. La comida no está permitida en la sala de lectura.",
          why: "“Isn't allowed” es la forma natural para una regla. Suena menos personal que “I don't let you,” porque habla la institución."
        },
        {
          speaker: "Alejandra",
          target: "I understand. Are we allowed to bring in water?",
          translation: "Entiendo. ¿Se permite entrar con agua?",
          pronunciation: "ai an-der-STAND. ar ui a-LAUD tu bring in UO-ter",
          literal: "Entiendo. ¿Estamos permitidos traer adentro agua?",
          why: "“Be allowed to” va con infinitivo: allowed to bring. Es la pregunta normal cuando usted lee una regla y necesita una excepción."
        },
        {
          speaker: "Rose",
          target: "Yes, we allow water with a lid, but we don't allow food.",
          translation: "Sí, permitimos agua con tapa, pero no permitimos comida.",
          pronunciation: "yes, ui a-LAU UO-ter uid a lid, bat ui dont a-LAU fud",
          literal: "Sí, permitimos agua con tapa, pero no permitimos comida.",
          why: "“Allow” funciona muy bien cuando habla una política de la biblioteca. No suena íntimo; suena administrativo y claro."
        },
        {
          speaker: "Alejandra",
          target: "And do you allow people to use laptops?",
          translation: "¿Y permiten que la gente use portátiles?",
          pronunciation: "and du yu a-LAU PI-pol tu yuz LAP-taps",
          literal: "¿Y permiten a la gente usar portátiles?",
          why: "El inglés puede nombrar a las personas antes del infinitivo: allow people to use. No necesita subjuntivo porque el inglés no tiene esa forma aquí."
        },
        {
          speaker: "Rose",
          target: "Of course. What we don't allow is loud talking.",
          translation: "Claro. Lo que no permitimos es hablar duro.",
          pronunciation: "ov kors. uat ui dont a-LAU iz laud TO-king",
          literal: "Por supuesto. Lo que no permitimos es hablar fuerte.",
          why: "La regla general vuelve con un gerundio como cosa prohibida: loud talking. La idea sigue siendo institucional."
        },
        {
          speaker: "Alejandra",
          target: "Thanks. With a friend I'd say “let me through,” not “allow me through,” right?",
          translation: "Gracias. Con un amigo diría “déjame pasar”, no “permíteme pasar”, ¿cierto?",
          pronunciation: "zanks. uid a frend aid sei let mi thru, not a-LAU mi thru, rait",
          literal: "Gracias. Con un amigo diría déjame pasar, no permíteme pasar, ¿cierto?",
          why: "Este es el corte de registro. “Let” es cotidiano; “allow” suena a permiso formal o a regla."
        }
      ],
      vocabulary: [
        {
          term: "allow",
          explanation:
            "Permitir en registro formal o institucional. Sirve para reglas, políticas, permisos oficiales y letreros.",
          literal: "permitir",
          useWhen:
            "Una biblioteca, guardia, escuela, oficina o regla dice qué se puede hacer.",
          avoidWhen:
            "Habla con un amigo de un favor inmediato. Ahí “let” suele sonar mucho más natural.",
          register: "formal neutral",
          region: "Inglés universal; “permit” es aún más formal.",
          related: ["let", "permit", "be allowed to", "rule"],
          example: {
            target: "Food isn't allowed.",
            translation: "No se permite comida."
          }
        },
        {
          term: "isn't allowed",
          explanation:
            "No está permitido. La forma pasiva hace que la regla suene general y menos personal.",
          literal: "no está permitido",
          useWhen:
            "Lee o explica reglas en lugares públicos: bibliotecas, buses, edificios, museos, piscinas.",
          avoidWhen:
            "Quiere hablar de una persona que no lo deja pasar. Entonces “won't let me” puede ser más directo.",
          register: "formal public",
          region: "Inglés universal.",
          related: ["not permitted", "against the rules", "not allowed", "prohibited"],
          example: {
            target: "Food isn't allowed in the room.",
            translation: "No se permite comida en la sala."
          }
        },
        {
          term: "be allowed to + verb",
          explanation:
            "La estructura para preguntar o decir que alguien puede hacer algo según una regla.",
          literal: "estar permitido a",
          useWhen:
            "Pregunta por permiso formal: “are we allowed to bring water?”, “am I allowed to use this?”",
          avoidWhen:
            "La relación es íntima o la acción es un favor cotidiano. Entonces “can I” o “will you let me” puede sonar mejor.",
          register: "grammar pattern",
          region: "Inglés universal.",
          related: ["allowed to enter", "allowed to use", "allowed to take photos", "allowed to leave"],
          example: {
            target: "Are we allowed to bring in water?",
            translation: "¿Se permite entrar con agua?"
          }
        },
        {
          term: "allow people to + verb",
          explanation:
            "Permitir que la gente haga algo. El inglés usa objeto más infinitivo, no subjuntivo.",
          literal: "permitir a la gente hacer",
          useWhen:
            "Quiere nombrar a quién se le permite la acción: people, students, visitors, children.",
          avoidWhen:
            "La regla es impersonal. Entonces “is allowed” puede ser más limpio.",
          register: "grammar pattern",
          region: "Inglés universal.",
          related: ["allow visitors to enter", "allow students to use", "allow children to stay", "let people in"],
          example: {
            target: "Do you allow people to use laptops?",
            translation: "¿Permiten que la gente use portátiles?"
          }
        },
        {
          term: "with a lid",
          explanation:
            "Con tapa. Un detalle pequeño que decide si una bebida puede entrar.",
          literal: "con una tapa",
          useWhen:
            "Pregunta por botellas, vasos, termos y recipientes que podrían derramarse.",
          avoidWhen:
            "El límite es comida, ruido o entrada. Ahí “lid” no resuelve la regla.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["bottle", "cup", "container", "spill"],
          example: {
            target: "We allow water with a lid.",
            translation: "Permitimos agua con tapa."
          }
        },
        {
          term: "loud talking",
          explanation:
            "Hablar duro o hablar en voz alta. Como cosa prohibida, funciona como sustantivo.",
          literal: "habla fuerte",
          useWhen:
            "Una biblioteca, clínica, sala o reunión necesita silencio.",
          avoidWhen:
            "Sólo quiere decir que alguien habla con dureza emocional. Ahí “harshly” sería otra cosa.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["keep quiet", "noise", "speak softly", "quiet room"],
          example: {
            target: "We don't allow loud talking.",
            translation: "No permitimos hablar duro."
          }
        },
        {
          term: "let me through",
          explanation:
            "Déjame pasar. Es la frase cotidiana para alguien que le bloquea el paso.",
          literal: "déjeme a través",
          useWhen:
            "Habla con un amigo o con alguien en una multitud sobre pasar físicamente.",
          avoidWhen:
            "Un aviso o una política formal es el centro. Ahí “allow” encaja mejor.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["let me pass", "move over", "excuse me", "let me in"],
          example: {
            target: "Let me through for a second.",
            translation: "Déjame pasar un segundo."
          }
        }
      ],
      note:
        "“Allow” es real y útil, pero no es el “dejar” cotidiano de todos los casos. Un aviso dice “food isn't allowed.” Un amigo dice “let me through.” En gramática, “allow” suele ir con “to” más verbo o con objeto más “to” más verbo: “allowed to enter,” “allow people to use.”",
      culture: [
        {
          label: "Las reglas suenan menos personales en pasiva",
          body:
            "“Food isn't allowed” evita señalar a la persona del mostrador como si fuera capricho suyo. Habla la institución. Esa distancia puede hacer más fácil aceptar un no sin convertirlo en pelea personal."
        },
        {
          label: "La amabilidad no cancela la regla",
          body:
            "Rose puede sonreír y aun así decir que no. En inglés de servicio, igual que en Colombia, una negativa puede venir envuelta en “sorry,” “please,” o una explicación corta. La regla sigue en pie."
        },
        {
          label: "“Let” vive más cerca del cuerpo",
          body:
            "En una puerta, un pasillo o un favor pequeño, “let me” suena humano y cotidiano. “Allow me” puede sonar teatral, formal o antiguo, salvo en frases fijas como “allow me to introduce myself.”"
        },
        {
          label: "No traduzca el subjuntivo que no existe",
          body:
            "El inglés no tiene una forma visible como “use” subjuntivo en esta estructura para el estudiante promedio. En vez de buscarlo, aprenda el patrón: allow someone to do something."
        }
      ],
      pitfalls: [
        {
          mistake: "“Allow me pass.”",
          whyItFails:
            "Después de “allow me” hace falta “to” antes del verbo. Además, con amigos “let me through” suele sonar más natural.",
          sayInstead: "Let me through."
        },
        {
          mistake: "“Food doesn't permit in the room.”",
          whyItFails:
            "La comida no permite nada. Para una regla, el inglés usa pasiva: “isn't allowed” o “is not permitted.”",
          sayInstead: "Food isn't allowed in the room."
        },
        {
          mistake: "“Do they allow that I use my laptop?”",
          whyItFails:
            "Es un calco de “permiten que use.” El inglés normal usa objeto más infinitivo: “allow me to use” o “allow people to use.”",
          sayInstead: "Do they allow people to use laptops?"
        },
        {
          mistake: "“I am allowed bring water.”",
          whyItFails:
            "Después de “allowed” va “to” más verbo. Sin “to,” la frase queda incompleta para un angloparlante.",
          sayInstead: "I am allowed to bring water."
        }
      ],
      variations: [
        {
          form: "Food isn't allowed in the room.",
          register: "formal public",
          region: "Inglés universal",
          whenToUse: "Una regla pública explicada de forma impersonal."
        },
        {
          form: "Am I allowed to use my laptop?",
          register: "formal polite",
          region: "Inglés universal",
          whenToUse: "Preguntar si una regla le permite hacer algo."
        },
        {
          form: "Photos are allowed without flash.",
          register: "formal public",
          region: "Inglés universal",
          whenToUse: "Un aviso que permite una acción con límite."
        },
        {
          form: "We don't allow loud talking here.",
          register: "formal polite",
          region: "Inglés universal",
          whenToUse: "Personal de un lugar explicando una regla."
        },
        {
          form: "Let me through for a second.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "La alternativa cotidiana entre amigos o en una multitud."
        }
      ],
      prompt: "Rose says “food isn't allowed.” ¿Qué registro oye Alejandra?",
      choices: [
        "Una broma privada entre amigos en una puerta.",
        "Una invitación cálida a comer dentro de la sala.",
        "Una regla pública formal, no un favor cotidiano."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa bien “allowed to”?",
          choices: [
            "I am allowed bring water.",
            "I am allowed to bring water.",
            "I am allow that bring water."
          ],
          answer: 1,
          tests: "allowed to + verb"
        },
        {
          prompt: "¿Cuál frase sirve mejor para una regla de aviso?",
          choices: [
            "Food isn't allowed in the room.",
            "Food doesn't permit in the room.",
            "Food lets me in the room."
          ],
          answer: 0,
          tests: "passive allowed for rules"
        },
        {
          prompt: "Alejandra habla con una amiga en una puerta. ¿Qué suena cotidiano?",
          choices: [
            "Allow me through immediately.",
            "Permission is granted to me.",
            "Let me through for a second."
          ],
          answer: 2,
          tests: "let as everyday allow"
        }
      ]
    }
  },
  {
    id: "blocked-at-the-boardwalk-in-riohacha",
    level: "Developing · Rules and limits",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "everyday-life",
    register: "courteous",
    pathways: ["independent"],
    verb: "impedir",
    review: "pending",
    es: {
      title: "Quedarse bloqueado en el malecón",
      situation:
        "Maya camina por el malecón de Riohacha y encuentra una cinta que cierra una parte del paso mientras arreglan unas tablas. Un funcionario le explica la regla sin pelear. Tú necesitas reconocer impedir como verbo formal para lo que bloquea o no deja que algo pase.",
      setting: {
        who: "A municipal worker watches the temporary closure, and Maya is trying to reach the beach without crossing the taped-off section.",
        what: "A polite refusal at a public barrier: the tape, the repair, and the formal verb that says something prevents passage.",
        when: "Late afternoon, with wind off the water and people walking before sunset.",
        where: "Riohacha, on the seafront boardwalk near the beach, where a short repair has narrowed the path.",
        why: "Because impedir is useful for reading formal explanations, but in speech Colombians often say “no dejan pasar” or “no se puede pasar.”"
      },
      address: {
        form: "usted",
        who: "The worker uses usted with Maya, and Maya uses usted back.",
        why: "A municipal worker enforcing a barrier is exactly where usted feels normal. For you, it keeps the refusal and the follow-up question calm.",
        ifYouSwitch:
          "Tú would sound too familiar during enforcement. Vos would distract from the public, formal nature of the exchange."
      },
      dialogue: [
        {
          speaker: "Funcionario",
          target: "Señora, la cinta impide pasar por este lado.",
          translation: "Ma'am, the tape prevents people from passing on this side.",
          pronunciation: "seh-NYOH-rah, lah SEEN-tah eem-PEE-deh pah-SAR por ES-teh LAH-doh",
          literal: "Ma'am, the tape prevents to-pass through this side.",
          why: "Impide is the e-to-i form of impedir. It is formal and exact: the tape is what blocks the passage."
        },
        {
          speaker: "Maya",
          target: "Ah, perdón. ¿Me impide llegar a la playa?",
          translation: "Oh, sorry. Does it stop me from getting to the beach?",
          pronunciation: "ah, per-DON. meh eem-PEE-deh yeh-GAR ah lah PLAH-yah",
          literal: "Oh, sorry. Me prevents to-arrive to the beach?",
          why: "Impedir can take an infinitive when the stopped action belongs to the same person: me impide llegar."
        },
        {
          speaker: "Funcionario",
          target: "No, sólo impide que entren a la zona en arreglo.",
          translation: "No, it only prevents people from entering the area under repair.",
          pronunciation: "noh, SOH-loh eem-PEE-deh keh EN-tren ah lah SOH-nah en ah-RREH-gloh",
          literal: "No, only prevents that they-enter to the zone in repair.",
          why: "With a new subject, impedir takes que plus subjunctive: que entren. That is the same alternation you saw with permitir."
        },
        {
          speaker: "Maya",
          target: "Entonces puedo rodear por la calle, ¿cierto?",
          translation: "Then I can go around by the street, right?",
          pronunciation: "en-TON-ses PWEH-doh rroh-deh-AR por lah KAH-yeh, SYER-toh",
          literal: "Then I-can go-around by the street, true?",
          why: "The practical response to a blocked route is not to argue with impedir; it is to ask for the usable route."
        },
        {
          speaker: "Funcionario",
          target: "Sí. El cierre impidió que varias personas pasaran por aquí.",
          translation: "Yes. The closure stopped several people from passing through here.",
          pronunciation: "see. el SYEH-rreh eem-pee-DYOH keh BAH-ryas per-SOH-nas pah-SAH-ran por ah-KEE",
          literal: "Yes. The closure prevented that several people passed through here.",
          why: "Impidió is another stem-changing form. The formal verb often appears in reports, notices, and careful explanations after something happened."
        },
        {
          speaker: "Maya",
          target: "Gracias. En conversación diría que no me dejan pasar, ¿no?",
          translation: "Thanks. In conversation I would say they aren't letting me through, right?",
          pronunciation: "GRAH-syas. en kon-ber-sah-SYON dee-REE-ah keh noh meh DEH-han pah-SAR, noh",
          literal: "Thanks. In conversation I-would-say that not me they-let pass, no?",
          why: "Exactly. Impedir is precise and formal; no dejar is the everyday spoken way to say someone won't let you."
        }
      ],
      vocabulary: [
        {
          term: "impedir",
          explanation:
            "To prevent, block, or stop something from happening. It is formal, careful, and common in notices, reports, and official explanations.",
          literal: "to impede",
          useWhen:
            "A rule, obstacle, closure, illness, delay, or document stops an action.",
          avoidWhen:
            "Casual speech where Colombians would normally say no dejar or no poder instead.",
          register: "formal neutral",
          region: "Universal Spanish; the formal feel is strong in Colombia.",
          related: ["evitar", "bloquear", "prohibir", "no dejar"],
          example: {
            target: "La cinta impide pasar.",
            translation: "The tape prevents people from passing."
          }
        },
        {
          term: "impide / impidió",
          explanation:
            "The e-to-i stem change in action: impedir becomes impide in the present and impidió in the preterite.",
          literal: "prevents / prevented",
          useWhen:
            "You need the real spoken and written forms, not just the infinitive in a list.",
          avoidWhen:
            "You are conjugating regular -ir verbs by habit. Impedir is not fully regular.",
          register: "grammar pattern",
          region: "Universal Spanish.",
          related: ["impido", "impides", "impiden", "impidieron"],
          example: {
            target: "El cierre impidió el paso.",
            translation: "The closure prevented passage."
          }
        },
        {
          term: "impedir + infinitivo",
          explanation:
            "The pattern when the same person is stopped from doing something: me impide llegar, le impidió salir.",
          literal: "to prevent to arrive",
          useWhen:
            "The stopped action belongs to the object already named before impedir.",
          avoidWhen:
            "A new subject performs the stopped action. Then use que plus subjunctive.",
          register: "grammar pattern",
          region: "Universal Spanish.",
          related: ["me impide entrar", "le impidió salir", "nos impide avanzar", "impide pasar"],
          example: {
            target: "No me impide llegar.",
            translation: "It doesn't stop me from arriving."
          }
        },
        {
          term: "impedir que + subjuntivo",
          explanation:
            "The pattern when what is stopped has its own subject: impide que entren, impidió que pasaran.",
          literal: "to prevent that they enter",
          useWhen:
            "You name the people or thing whose action is being stopped inside the que-clause.",
          avoidWhen:
            "The action is general or tied to the same object. Then an infinitive may be simpler.",
          register: "grammar pattern",
          region: "Universal Spanish.",
          related: ["impide que pasen", "impidió que saliéramos", "evita que entren", "hace que no pasen"],
          example: {
            target: "Impide que entren a la zona.",
            translation: "It prevents them from entering the area."
          }
        },
        {
          term: "no dejar pasar",
          explanation:
            "The everyday spoken alternative: not let someone through. It is what people usually say in the moment.",
          literal: "not leave to pass",
          useWhen:
            "A guard, crowd, locked door, or person blocks you in ordinary conversation.",
          avoidWhen:
            "A formal report or sign needs the more official tone of impedir or prohibir.",
          register: "neutral spoken",
          region: "General Colombian.",
          related: ["no me dejan entrar", "no se puede pasar", "está cerrado", "bloqueado"],
          example: {
            target: "No me dejan pasar.",
            translation: "They won't let me through."
          }
        },
        {
          term: "zona en arreglo",
          explanation:
            "An area under repair. It gives the reason for the barrier without sounding dramatic.",
          literal: "zone in fixing",
          useWhen:
            "A sidewalk, room, path, bathroom, or section is temporarily closed for work.",
          avoidWhen:
            "The place is dangerous or permanently closed. Then use stronger wording.",
          register: "neutral",
          region: "General Colombian.",
          related: ["obra", "mantenimiento", "cierre", "reparación"],
          example: {
            target: "No entren a la zona en arreglo.",
            translation: "Don't enter the area under repair."
          }
        },
        {
          term: "rodear",
          explanation:
            "To go around. The practical verb when a rule or obstacle blocks the straight path.",
          literal: "to surround / go around",
          useWhen:
            "You take another street, path, or route to avoid a closed section.",
          avoidWhen:
            "You mean confronting or removing the obstacle. Rodear accepts that the obstacle stays there.",
          register: "neutral",
          region: "General Colombian.",
          related: ["dar la vuelta", "tomar otra ruta", "pasar por otro lado", "desviarse"],
          example: {
            target: "Puedo rodear por la calle.",
            translation: "I can go around by the street."
          }
        }
      ],
      note:
        "Impedir is the formal verb for what blocks an action. It changes e to i: impido, impide, impidió. It can take an infinitive, as in “me impide llegar,” or que plus subjunctive, as in “impide que entren.” In ordinary speech, the same scene often becomes “no me dejan pasar” or “no se puede pasar.”",
      culture: [
        {
          label: "A barrier lets the worker blame the rule",
          body:
            "When a municipal worker says the tape prevents passage, the refusal is moved onto the closure rather than the person. That can keep the exchange calmer: the obstacle, not the worker's mood, is the problem."
        },
        {
          label: "Formal verbs appear after the fact",
          body:
            "Impedir often shows up in written explanations: a closure prevented entry, weather prevented travel, a missing document prevented service. In the live moment, people may reach for simpler spoken phrases."
        },
        {
          label: "Riohacha detail without invented slang",
          body:
            "The boardwalk, wind, and beach make the setting local enough. The rule language does not need fake regional color. A normal public refusal in Riohacha is still Colombian Spanish."
        },
        {
          label: "Ask for the route, not the exception",
          body:
            "When a public path is taped off, the most useful question is where to go instead. That keeps the conversation cooperative and often gets you the practical answer faster than challenging the closure."
        }
      ],
      pitfalls: [
        {
          mistake: "Treating impedir as everyday “won't let me” speech",
          whyItFails:
            "It is understood, but it sounds formal. In the moment, Colombians are more likely to say no me dejan pasar or no se puede pasar.",
          sayInstead: "No me dejan pasar por ahí."
        },
        {
          mistake: "Saying “impedió que pasaron”",
          whyItFails:
            "After impedir que, Spanish needs the subjunctive for the blocked action. Pasaron becomes pasaran or pasasen.",
          sayInstead: "Impidió que pasaran por aquí."
        },
        {
          mistake: "Forgetting the e-to-i change in impide",
          whyItFails:
            "Impedir is not regular in the forms people actually use. “Impede” as a Spanish present form is not the one you need here.",
          sayInstead: "La cinta impide pasar."
        },
        {
          mistake: "Using impedir when evitar is the practical advice",
          whyItFails:
            "Impedir says something stops you. Evitar tells someone to steer clear of a problem before it happens.",
          sayInstead: "Mejor evite pasar por ahí."
        }
      ],
      variations: [
        {
          form: "La cinta impide pasar por este lado.",
          register: "formal polite",
          region: "General Colombian",
          whenToUse: "A formal explanation of a physical barrier."
        },
        {
          form: "El cierre impidió que pasaran por aquí.",
          register: "formal neutral",
          region: "General Colombian",
          whenToUse: "A report-like sentence about what a closure stopped."
        },
        {
          form: "No me dejan pasar por este lado.",
          register: "neutral spoken",
          region: "General Colombian",
          whenToUse: "The ordinary spoken version in the moment."
        },
        {
          form: "No se puede pasar por la obra.",
          register: "neutral public",
          region: "General Colombian",
          whenToUse: "A simple public explanation without the formal verb impedir."
        },
        {
          form: "La lluvia nos impidió salir temprano.",
          register: "formal neutral",
          region: "General Colombian",
          whenToUse: "A careful explanation of why an action did not happen."
        }
      ],
      prompt: "The worker says “la cinta impide pasar.” What kind of verb is impedir here?",
      choices: [
        "A formal verb for something that blocks or prevents passage.",
        "A casual friend phrase meaning “let me through quickly.”",
        "A food-service phrase meaning “bring the bill now.”"
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence has the correct e-to-i form?",
          choices: [
            "La cinta impede pasar por este lado.",
            "La cinta impide pasar por este lado.",
            "La cinta impedir pasar por este lado."
          ],
          answer: 1,
          tests: "impedir stem change"
        },
        {
          prompt: "Which sentence uses the subjunctive pattern after impedir que?",
          choices: [
            "El cierre impidió que pasaron.",
            "El cierre impidió pasar ellos.",
            "El cierre impidió que pasaran."
          ],
          answer: 2,
          tests: "impedir que + subjunctive"
        },
        {
          prompt: "In ordinary speech at the barrier, which sentence sounds most natural?",
          choices: [
            "No me dejan pasar por aquí.",
            "Se me impide el tránsito personal.",
            "La institución imposibilita mi paso."
          ],
          answer: 0,
          tests: "no dejar as spoken equivalent"
        }
      ]
    },
    en: {
      title: "Quedarse bloqueada en el paseo marítimo",
      situation:
        "Mariana camina por un paseo marítimo en Sydney y encuentra una cinta que cierra una parte del paso mientras arreglan unas tablas. Un trabajador le explica la regla sin pelear. Usted necesita distinguir “prevent,” “stop,” y el más cotidiano “won't let me.”",
      setting: {
        who: "Un trabajador municipal vigila el cierre temporal, y Mariana intenta llegar a la playa sin cruzar la sección marcada con cinta.",
        what: "Una negativa cortés ante una barrera pública: la cinta, el arreglo y los verbos ingleses que dicen que algo bloquea el paso.",
        when: "Al final de la tarde, con viento desde el agua y gente caminando antes del atardecer.",
        where: "Sydney, en un paseo junto al agua donde un arreglo corto ha estrechado el camino.",
        why: "Porque “prevent” suena formal y explicativo, mientras “stop” y “won't let me” son más comunes en la conversación del momento."
      },
      address: {
        form: "mixed",
        who: "El trabajador y Mariana usan el mismo “you”; la cortesía se oye en “ma'am,” “sorry,” y la explicación.",
        why: "El inglés no tiene usted para marcar esta escena. La formalidad sale de “prevents access” o “not allowed through,” no de otro pronombre.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Lo que cambia es el verbo: “prevents access” suena oficial; “they won't let me through” suena hablado."
      },
      dialogue: [
        {
          speaker: "Worker",
          target: "Ma'am, the tape prevents access on this side.",
          translation: "Señora, la cinta impide el paso por este lado.",
          pronunciation: "mam, da teip pri-VENTS AK-ses on dis said",
          literal: "Señora, la cinta previene acceso en este lado.",
          why: "“Prevents access” suena formal y de aviso. Es útil para entender reglas, pero no es la frase más cotidiana para quejarse."
        },
        {
          speaker: "Mariana",
          target: "Oh, sorry. Does it stop me from reaching the beach?",
          translation: "Ah, perdón. ¿Me impide llegar a la playa?",
          pronunciation: "ou, SO-ri. daz it stap mi from RI-ching da bich",
          literal: "Ah, perdón. ¿Me detiene de alcanzar la playa?",
          why: "“Stop me from” es más hablado que “prevent me from.” Después de from viene la forma en -ing: reaching."
        },
        {
          speaker: "Worker",
          target: "No, it only prevents people from entering the work area.",
          translation: "No, sólo impide que entren a la zona en arreglo.",
          pronunciation: "nou, it ON-li pri-VENTS PI-pol from EN-ter-ing da uerk E-ri-a",
          literal: "No, sólo previene a la gente de entrar al área de trabajo.",
          why: "El patrón inglés es “prevent someone from doing something.” No hay subjuntivo visible como en español."
        },
        {
          speaker: "Mariana",
          target: "Then I can go around by the street, right?",
          translation: "Entonces puedo rodear por la calle, ¿cierto?",
          pronunciation: "den ai can gou a-RAUND bai da strit, rait",
          literal: "Entonces puedo ir alrededor por la calle, ¿cierto?",
          why: "La reacción práctica ante un cierre es pedir la ruta posible. “Go around” acepta el obstáculo y busca el camino."
        },
        {
          speaker: "Worker",
          target: "Yes. The closure prevented several people from coming through here.",
          translation: "Sí. El cierre impidió que varias personas pasaran por aquí.",
          pronunciation: "yes. da KLOU-zher pri-VEN-ted SEV-ral PI-pol from CO-ming thru jir",
          literal: "Sí. El cierre previno a varias personas de venir por aquí.",
          why: "“Prevented people from coming through” es formal, claro y perfecto para explicar lo que pasó después del cierre."
        },
        {
          speaker: "Mariana",
          target: "Thanks. In conversation I'd say they won't let me through, right?",
          translation: "Gracias. En conversación diría que no me dejan pasar, ¿no?",
          pronunciation: "zanks. in con-ver-SEI-shon aid sei dei uont let mi thru, rait",
          literal: "Gracias. En conversación diría ellos no me dejarán atravesar, ¿cierto?",
          why: "Exacto. “Won't let me through” es la versión hablada y cotidiana. “Prevent” queda para la explicación formal."
        }
      ],
      vocabulary: [
        {
          term: "prevent",
          explanation:
            "Impedir o evitar que algo pase. Suele sonar formal, explicativo o escrito.",
          literal: "prevenir / impedir",
          useWhen:
            "Una regla, barrera, cierre, enfermedad, retraso o documento bloquea una acción.",
          avoidWhen:
            "Está hablando casualmente de alguien que no lo deja pasar. Entonces “won't let me” suena más natural.",
          register: "formal neutral",
          region: "Inglés universal.",
          related: ["stop", "block", "keep from", "not let"],
          example: {
            target: "The tape prevents access.",
            translation: "La cinta impide el paso."
          }
        },
        {
          term: "prevents / prevented",
          explanation:
            "Las formas que más aparecen en avisos y explicaciones: prevents para ahora, prevented para algo que ya pasó.",
          literal: "impide / impidió",
          useWhen:
            "Quiere decir que un obstáculo o una regla bloquea una acción.",
          avoidWhen:
            "Quiere sonar más conversacional. “Stops” o “won't let” pueden ser mejores.",
          register: "grammar pattern",
          region: "Inglés universal.",
          related: ["preventing", "prevented", "stops", "blocked"],
          example: {
            target: "The closure prevented passage.",
            translation: "El cierre impidió el paso."
          }
        },
        {
          term: "stop me from + -ing",
          explanation:
            "Impedirme hacer algo, en una forma más conversacional que “prevent me from.”",
          literal: "detenerme de haciendo",
          useWhen:
            "Una cosa o persona le bloquea una acción concreta: stop me from leaving, stop us from entering.",
          avoidWhen:
            "Después de from no ponga el verbo base. En inglés va la forma en -ing.",
          register: "neutral spoken",
          region: "Inglés universal.",
          related: ["prevent me from", "keep me from", "won't let me", "block me from"],
          example: {
            target: "Does it stop me from reaching the beach?",
            translation: "¿Me impide llegar a la playa?"
          }
        },
        {
          term: "prevent someone from + -ing",
          explanation:
            "La estructura formal para impedir que alguien haga algo. No usa subjuntivo; usa from más -ing.",
          literal: "prevenir a alguien de haciendo",
          useWhen:
            "Nombra a las personas bloqueadas y la acción que no pueden hacer.",
          avoidWhen:
            "Quiere una frase corta de conversación. Entonces “won't let me” suele funcionar mejor.",
          register: "grammar pattern",
          region: "Inglés universal.",
          related: ["prevent people from entering", "prevent us from leaving", "keep them from going", "stop her from calling"],
          example: {
            target: "It prevents people from entering.",
            translation: "Impide que la gente entre."
          }
        },
        {
          term: "won't let me through",
          explanation:
            "No me dejan pasar. Es la frase cotidiana cuando alguien o algo le bloquea el paso.",
          literal: "no me dejarán atravesar",
          useWhen:
            "Una persona de seguridad, una fila, una puerta o un grupo no le permite avanzar.",
          avoidWhen:
            "Un informe o aviso necesita tono formal. Ahí “prevent access” puede ser más adecuado.",
          register: "neutral spoken",
          region: "Inglés universal.",
          related: ["won't let me in", "can't get through", "blocked", "not allowed through"],
          example: {
            target: "They won't let me through.",
            translation: "No me dejan pasar."
          }
        },
        {
          term: "work area",
          explanation:
            "Zona de obra o de arreglo. Explica por qué el paso está cerrado sin dramatizar.",
          literal: "área de trabajo",
          useWhen:
            "Una parte de un andén, sala, camino o edificio está temporalmente cerrada por reparación.",
          avoidWhen:
            "La zona es peligrosa de verdad. Entonces puede necesitar “danger area” o “restricted area.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["repair", "maintenance", "closure", "restricted area"],
          example: {
            target: "Don't enter the work area.",
            translation: "No entren a la zona en arreglo."
          }
        },
        {
          term: "go around",
          explanation:
            "Rodear o dar la vuelta. Es el verbo práctico cuando el camino directo está cerrado.",
          literal: "ir alrededor",
          useWhen:
            "Toma otra calle, pasillo o ruta para evitar una sección cerrada.",
          avoidWhen:
            "Quiere quitar el obstáculo. “Go around” acepta que sigue ahí.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["take another route", "walk around", "detour", "go the other way"],
          example: {
            target: "I can go around by the street.",
            translation: "Puedo rodear por la calle."
          }
        }
      ],
      note:
        "“Prevent” es el equivalente formal de impedir, pero en la conversación viva muchas veces suena más natural “stop me from” o “won't let me.” La estructura clave es “prevent someone from doing something.” Donde el español usa subjuntivo, el inglés usa from más -ing.",
      culture: [
        {
          label: "La barrera carga con la negativa",
          body:
            "Cuando alguien dice “the tape prevents access,” la negativa queda en la cinta y la regla, no en el ánimo del trabajador. Esa distancia puede mantener la conversación amable."
        },
        {
          label: "“Prevent” mira hacia el informe",
          body:
            "El verbo aparece mucho en reportes, avisos y explicaciones: weather prevented flights, a closure prevented access. En una queja rápida, “they won't let me through” suena más humano."
        },
        {
          label: "No busque subjuntivo donde no hay",
          body:
            "El inglés no cambia el verbo a una forma visible como “entren.” El patrón se aprende como bloque: prevent someone from entering. Ese from es obligatorio."
        },
        {
          label: "Preguntar la ruta mantiene la paz",
          body:
            "Ante un cierre público, “can I go around?” suele servir más que discutir la norma. El trabajador probablemente no puede quitar la cinta, pero sí puede indicarle el desvío."
        }
      ],
      pitfalls: [
        {
          mistake: "“The tape impedes me to pass.”",
          whyItFails:
            "“Impede” existe pero suena pesado y no arma esta frase de forma natural. Use “prevent” o el más hablado “stop me from.”",
          sayInstead: "The tape prevents access."
        },
        {
          mistake: "“It prevents people to enter.”",
          whyItFails:
            "Después de “prevent someone” el inglés usa “from” más -ing, no “to” más verbo.",
          sayInstead: "It prevents people from entering."
        },
        {
          mistake: "“The guard doesn't leave me pass.”",
          whyItFails:
            "Es un calco de “no me deja pasar.” En inglés la frase cotidiana usa “let,” no “leave.”",
          sayInstead: "The guard won't let me through."
        },
        {
          mistake: "“Does it prevent that I reach the beach?”",
          whyItFails:
            "El inglés no copia “impide que llegue.” Use objeto más “from” más -ing.",
          sayInstead: "Does it stop me from reaching the beach?"
        }
      ],
      variations: [
        {
          form: "The tape prevents access on this side.",
          register: "formal polite",
          region: "Inglés universal",
          whenToUse: "Una explicación formal de una barrera física."
        },
        {
          form: "The closure prevented people from coming through.",
          register: "formal neutral",
          region: "Inglés universal",
          whenToUse: "Una frase de reporte sobre lo que impidió el cierre."
        },
        {
          form: "They won't let me through here.",
          register: "neutral spoken",
          region: "Inglés universal",
          whenToUse: "La versión cotidiana en el momento."
        },
        {
          form: "You can't get through because of the work.",
          register: "neutral public",
          region: "Inglés universal",
          whenToUse: "Una explicación simple sin el verbo formal “prevent.”"
        },
        {
          form: "The rain prevented us from leaving early.",
          register: "formal neutral",
          region: "Inglés universal",
          whenToUse: "Explicar con cuidado por qué una acción no ocurrió."
        }
      ],
      prompt: "The worker says “the tape prevents access.” ¿Qué tipo de verbo es “prevent” aquí?",
      choices: [
        "Un verbo formal para algo que bloquea el paso.",
        "Una frase casual para pedir permiso a un amigo.",
        "Una expresión de restaurante para pedir la cuenta."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa bien el patrón con “from”?",
          choices: [
            "It prevents people to enter.",
            "It prevents people from entering.",
            "It prevents that people enter."
          ],
          answer: 1,
          tests: "prevent someone from + -ing"
        },
        {
          prompt: "¿Cuál frase suena más hablada ante una barrera?",
          choices: [
            "They won't let me through here.",
            "The institution prevents my transit.",
            "Access is impeded to my person."
          ],
          answer: 0,
          tests: "won't let me through as spoken equivalent"
        },
        {
          prompt: "¿Cuál frase evita el calco de “no me deja pasar”?",
          choices: [
            "The guard doesn't leave me pass.",
            "The guard doesn't permit that pass.",
            "The guard won't let me through."
          ],
          answer: 2,
          tests: "let, not leave, for dejar"
        }
      ]
    }
  },
  {
    id: "avoiding-the-market-crowd-in-manizales",
    level: "Developing · Rules and limits",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["independent"],
    verb: "evitar",
    review: "pending",
    es: {
      title: "Evitar el trancón cerca de la plaza",
      situation:
        "Sam está en Manizales y quiere llegar a una cita sin meterse en el trancón de la plaza. Una recepcionista del hotel le recomienda otra ruta y le advierte sobre una cuadra sola de noche. Tú necesitas darle peso a evitar, el verbo más útil de este bloque en la conversación diaria.",
      setting: {
        who: "Claudia works at a small hotel desk, and Sam is a guest trying to get across town without losing half an hour.",
        what: "Practical advice about avoiding traffic, avoiding a street at night, and avoiding getting stuck in a crowd.",
        when: "Late afternoon, when errands, rain, and traffic start to pile up.",
        where: "Manizales, at a hotel desk near a slope that leads toward the market area and busier streets.",
        why: "Because evitar is ordinary, useful speech: you avoid traffic, avoid passing through a place at night, and avoid letting a problem happen."
      },
      address: {
        form: "usted",
        who: "Claudia uses usted with Sam as a hotel guest, and Sam uses usted back.",
        why: "Hotel advice is service speech: polite, practical, and not cold. For you, usted keeps the recommendation respectful while the content stays everyday.",
        ifYouSwitch:
          "Tú would sound too familiar from the desk unless the relationship had already shifted. Vos would distract from the visitor-service setting."
      },
      dialogue: [
        {
          speaker: "Claudia",
          target: "Si va para la plaza, evite la avenida principal.",
          translation: "If you're going toward the plaza, avoid the main avenue.",
          pronunciation: "see bah PAH-rah lah PLAH-sah, eh-BEE-teh lah ah-beh-NEE-dah preen-see-PAL",
          literal: "If you-go for the plaza, avoid the avenue main.",
          why: "Evite is the usted command. It is softer than a ban: Claudia is steering Sam away from trouble, not enforcing a rule."
        },
        {
          speaker: "Sam",
          target: "¿Para evitar el trancón?",
          translation: "To avoid the traffic jam?",
          pronunciation: "PAH-rah eh-bee-TAR el tran-KON",
          literal: "For to-avoid the traffic-jam?",
          why: "Evitar takes a direct object easily: evitar el trancón. This is the most ordinary, useful shape of the verb."
        },
        {
          speaker: "Claudia",
          target: "Exacto. Y mejor evite pasar por esa cuadra de noche.",
          translation: "Exactly. And it's better to avoid going along that block at night.",
          pronunciation: "eg-SAK-toh. ee meh-HOR eh-BEE-teh pah-SAR por EH-sah KWAH-drah deh NOH-cheh",
          literal: "Exactly. And better avoid to-pass through that block at night.",
          why: "“Mejor evite…” is advice, not drama. Evitar plus infinitive gives a practical action to steer clear of."
        },
        {
          speaker: "Sam",
          target: "Entonces tomo la calle de arriba y evito la fila de taxis.",
          translation: "Then I'll take the upper street and avoid the taxi line.",
          pronunciation: "en-TON-ses TOH-moh lah KAH-yeh deh ah-RREE-bah ee eh-BEE-toh lah FEE-lah deh TAK-sees",
          literal: "Then I-take the street of above and avoid the line of taxis.",
          why: "Evito is ordinary first-person speech. Unlike impedir, it does not sound like a report; it sounds like a plan."
        },
        {
          speaker: "Claudia",
          target: "Eso también evita que llegue tarde.",
          translation: "That also keeps you from arriving late.",
          pronunciation: "EH-soh tam-BYEN eh-BEE-tah keh YEH-geh TAR-deh",
          literal: "That also avoids that you-arrive late.",
          why: "Evitar can take que plus subjunctive when the thing avoided has its own subject: que llegue."
        },
        {
          speaker: "Sam",
          target: "Perfecto. No es prohibición; es una forma de evitar problemas.",
          translation: "Perfect. It isn't a ban; it's a way to avoid problems.",
          pronunciation: "per-FEK-toh. noh es pro-ee-bee-SYON; es OO-nah FOR-mah deh eh-bee-TAR pro-BLEH-mas",
          literal: "Perfect. Not is prohibition; it is a form of to-avoid problems.",
          why: "The final contrast matters: evitar often gives practical guidance before trouble starts. It is not the same as impedir or prohibir."
        }
      ],
      vocabulary: [
        {
          term: "evitar",
          explanation:
            "To avoid, steer clear of, or keep something from happening. It is the most everyday verb in this block.",
          literal: "to avoid",
          useWhen:
            "Avoiding traffic, a street, a mistake, a delay, a topic, a person, or a problem before it starts.",
          avoidWhen:
            "A rule or obstacle actively stops someone. Then impedir or no dejar may be sharper.",
          register: "neutral",
          region: "Universal Spanish and very common in Colombian practical advice.",
          related: ["esquivar", "prevenir", "no meterse", "rodear"],
          example: {
            target: "Evite la avenida principal.",
            translation: "Avoid the main avenue."
          }
        },
        {
          term: "evitar + sustantivo",
          explanation:
            "The simplest pattern: avoid the thing itself. Evitar el trancón, evitar la fila, evitar problemas.",
          literal: "to avoid the noun",
          useWhen:
            "The problem can be named directly as a noun.",
          avoidWhen:
            "You need to say who does the avoided action. Then use evitar que plus subjunctive.",
          register: "grammar pattern",
          region: "Universal Spanish.",
          related: ["evitar el trancón", "evitar la fila", "evitar problemas", "evitar ruido"],
          example: {
            target: "Evito la fila de taxis.",
            translation: "I avoid the taxi line."
          }
        },
        {
          term: "evitar + infinitivo",
          explanation:
            "The pattern for steering clear of doing an action: evitar pasar, evitar salir tarde, evitar discutir.",
          literal: "to avoid to pass",
          useWhen:
            "The same person avoids doing the action.",
          avoidWhen:
            "Another subject might do the thing being avoided. Then use evitar que plus subjunctive.",
          register: "grammar pattern",
          region: "Universal Spanish.",
          related: ["evitar pasar", "evitar salir", "evitar discutir", "evitar gastar"],
          example: {
            target: "Evite pasar por esa cuadra.",
            translation: "Avoid going along that block."
          }
        },
        {
          term: "evitar que + subjuntivo",
          explanation:
            "The pattern for keeping something from happening when there is a new subject: evita que llegue tarde.",
          literal: "to avoid that I arrive",
          useWhen:
            "You name the event you are trying to prevent with its own subject.",
          avoidWhen:
            "A noun or infinitive can say it more simply.",
          register: "grammar pattern",
          region: "Universal Spanish.",
          related: ["evita que pase", "evita que se moje", "evita que llegue tarde", "evita que entren"],
          example: {
            target: "Eso evita que llegue tarde.",
            translation: "That keeps me from arriving late."
          }
        },
        {
          term: "mejor evite",
          explanation:
            "A soft warning: better avoid it. It sounds like advice, not a shouted prohibition.",
          literal: "better avoid",
          useWhen:
            "Someone gives practical safety, traffic, or timing advice without making a formal rule.",
          avoidWhen:
            "There is an actual ban. Then use no se permite, está prohibido, or no se puede.",
          register: "polite advice",
          region: "General Colombian.",
          related: ["mejor no", "le recomiendo", "tenga cuidado", "no se meta"],
          example: {
            target: "Mejor evite pasar por esa cuadra.",
            translation: "Better avoid going along that block."
          }
        },
        {
          term: "trancón",
          explanation:
            "A traffic jam. One of the everyday things Colombians plan around and try to avoid.",
          literal: "big jam",
          useWhen:
            "Traffic has slowed or locked up and will cost you time.",
          avoidWhen:
            "The route is simply long but moving. Trancón means congestion, not distance.",
          register: "neutral",
          region: "Very common in Colombia.",
          related: ["tráfico", "congestión", "hora pico", "demora"],
          example: {
            target: "Quiero evitar el trancón.",
            translation: "I want to avoid the traffic jam."
          }
        },
        {
          term: "no es prohibición",
          explanation:
            "It is not a ban. A useful way to separate advice from a rule.",
          literal: "it is not prohibition",
          useWhen:
            "Someone recommends avoiding something but is not formally forbidding it.",
          avoidWhen:
            "A rule really does forbid the action. Then do not soften it falsely.",
          register: "neutral",
          region: "General Colombian.",
          related: ["recomendación", "aviso", "consejo", "regla"],
          example: {
            target: "No es prohibición; es consejo.",
            translation: "It isn't a ban; it's advice."
          }
        }
      ],
      note:
        "Evitar deserves the most daily weight in this block. You use it before the problem happens: avoid the traffic, avoid passing there at night, avoid arriving late. It can take a noun, an infinitive, or que plus subjunctive. It is advice and strategy more often than prohibition.",
      culture: [
        {
          label: "Advice can sound like care, not control",
          body:
            "“Mejor evite…” often lands as practical care. The person is not necessarily ordering you around; they may be saving you time, risk, or embarrassment. The word mejor softens the warning."
        },
        {
          label: "Traffic is a planning problem",
          body:
            "In Colombian cities, a short distance can become a long trip at the wrong hour. Avoiding a trancón is not impatience. It is basic local competence, the kind hotel staff and relatives share freely."
        },
        {
          label: "Manizales adds slopes to routes",
          body:
            "A route in Manizales is not just a line on a flat map. Streets climb, curve, and narrow. Advice about which street to avoid can be about time, effort, rain, and safety at once."
        },
        {
          label: "Not every limit is a ban",
          body:
            "Permitir and impedir sound like rules and barriers. Evitar often sounds like judgement before trouble starts. That difference lets you hear whether someone is forbidding something or simply helping you choose better."
        }
      ],
      pitfalls: [
        {
          mistake: "Treating evitar as only formal prevention",
          whyItFails:
            "Evitar is very normal in everyday speech. It is often the best verb for traffic, awkward routes, problems, and risks.",
          sayInstead: "Quiero evitar el trancón."
        },
        {
          mistake: "Saying “evitar que llego tarde”",
          whyItFails:
            "After evitar que, Spanish uses the subjunctive because the avoided event is not presented as a fact.",
          sayInstead: "Evita que llegue tarde."
        },
        {
          mistake: "Using impedir for friendly advice about a route",
          whyItFails:
            "Impedir says something blocks or prevents you. If the point is steering clear of trouble, evitar is more useful and natural.",
          sayInstead: "Mejor evite pasar por ahí."
        },
        {
          mistake: "Hearing “mejor evite” as an absolute ban",
          whyItFails:
            "It may be strong advice, but it is not the same as no se permite or está prohibido. The speaker is warning, not necessarily enforcing.",
          sayInstead: "Ask whether it is advice or a rule if it matters."
        }
      ],
      variations: [
        {
          form: "Evite la avenida principal.",
          register: "polite advice",
          region: "General Colombian",
          whenToUse: "Steering someone away from a bad route."
        },
        {
          form: "Quiero evitar el trancón.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Naming the problem you want to avoid."
        },
        {
          form: "Mejor evite pasar por esa cuadra de noche.",
          register: "polite advice",
          region: "General Colombian",
          whenToUse: "A soft safety warning without making a formal ban."
        },
        {
          form: "Eso evita que llegue tarde.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Explaining that one choice prevents a later problem."
        },
        {
          form: "No se puede pasar por esa calle.",
          register: "neutral public",
          region: "General Colombian",
          whenToUse: "When the limit is a real closure, not just advice."
        }
      ],
      prompt: "Claudia says “mejor evite pasar por esa cuadra.” What is she doing?",
      choices: [
        "Giving practical advice to steer Sam away from a problem.",
        "Reading a formal sign that officially permits entry.",
        "Saying an obstacle physically makes passage impossible."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence uses evitar with a direct noun?",
          choices: [
            "Evito que llegue tarde.",
            "Evito el trancón de la plaza.",
            "Evito pasar por esa cuadra."
          ],
          answer: 1,
          tests: "evitar + noun"
        },
        {
          prompt: "Which sentence needs subjunctive after evitar que?",
          choices: [
            "Eso evita que llegue tarde.",
            "Eso evita que llego tarde.",
            "Eso evitar que llegar tarde."
          ],
          answer: 0,
          tests: "evitar que + subjunctive"
        },
        {
          prompt: "Which sentence is a soft warning, not a posted ban?",
          choices: [
            "No se permite pasar por aquí.",
            "Está prohibido pasar por aquí.",
            "Mejor evite pasar por aquí."
          ],
          answer: 2,
          tests: "mejor evite as advice"
        }
      ]
    },
    en: {
      title: "Evitar el tráfico cerca del mercado",
      situation:
        "Samuel está en Manchester y quiere llegar a una cita sin meterse en el tráfico del mercado. Una recepcionista del hotel le recomienda otra ruta y le advierte sobre una calle sola de noche. Usted necesita darle peso a “avoid,” el verbo más útil de este grupo en conversación diaria.",
      setting: {
        who: "Clare trabaja en un hotel pequeño, y Samuel es un huésped que intenta cruzar la ciudad sin perder media hora.",
        what: "Consejo práctico sobre evitar tráfico, evitar una calle de noche y evitar quedarse atrapado en una multitud.",
        when: "Al final de la tarde, cuando diligencias, lluvia y tráfico empiezan a juntarse.",
        where: "Manchester, en el mostrador de un hotel cerca de calles que llevan hacia una zona de mercado y buses.",
        why: "Porque “avoid” es inglés cotidiano: se evitan calles, errores, tráfico, personas y problemas antes de que aparezcan."
      },
      address: {
        form: "mixed",
        who: "Clare y Samuel usan el mismo “you”; la cortesía está en “I'd avoid,” “better,” y la explicación.",
        why: "El inglés no cambia pronombre para dar consejo respetuoso. La suavidad aparece en el condicional y en no convertir todo en prohibición.",
        ifYouSwitch:
          "No hay pronombre alternativo. Puede endurecerse con “don't go there” o suavizarse con “I'd avoid that street.”"
      },
      dialogue: [
        {
          speaker: "Clare",
          target: "If you're going to the market, avoid the main road.",
          translation: "Si va para el mercado, evite la avenida principal.",
          pronunciation: "if yor GOU-ing tu da MAR-ket, a-VOID da mein roud",
          literal: "Si usted va al mercado, evite la carretera principal.",
          why: "“Avoid” es consejo directo y cotidiano. No suena tan institucional como “is prohibited” ni tan formal como “prevent.”"
        },
        {
          speaker: "Samuel",
          target: "To avoid the traffic?",
          translation: "¿Para evitar el tráfico?",
          pronunciation: "tu a-VOID da TRA-fik",
          literal: "Para evitar el tráfico.",
          why: "El patrón básico es “avoid” más objeto: avoid traffic, avoid crowds, avoid problems. Es simple y muy útil."
        },
        {
          speaker: "Clare",
          target: "Exactly. And I'd avoid going down that street at night.",
          translation: "Exacto. Y mejor evitaría pasar por esa calle de noche.",
          pronunciation: "eg-ZAKT-li. and aid a-VOID GOU-ing daun dat strit at nait",
          literal: "Exactamente. Y yo evitaría yendo por esa calle de noche.",
          why: "Después de “avoid” va la forma en -ing: avoid going. No diga “avoid to go.”"
        },
        {
          speaker: "Samuel",
          target: "Then I'll take the upper street and avoid the taxi line.",
          translation: "Entonces tomo la calle de arriba y evito la fila de taxis.",
          pronunciation: "den ail teik di A-per strit and a-VOID da TAK-si lain",
          literal: "Entonces tomaré la calle de arriba y evitaré la línea de taxis.",
          why: "La frase suena a plan, no a regla. “Avoid” sirve para decisiones prácticas antes de que el problema lo alcance."
        },
        {
          speaker: "Clare",
          target: "That should keep you from being late.",
          translation: "Eso debe evitar que llegue tarde.",
          pronunciation: "dat shud kip yu from BI-ing leit",
          literal: "Eso debería mantenerlo de estar tarde.",
          why: "Para evitar que pase algo, el inglés cotidiano muchas veces usa “keep you from” más -ing. Es más natural que “avoid that you arrive late.”"
        },
        {
          speaker: "Samuel",
          target: "Perfect. It's not a ban; it's a way to avoid problems.",
          translation: "Perfecto. No es prohibición; es una forma de evitar problemas.",
          pronunciation: "PER-fekt. its not a ban; its a wei tu a-VOID PRA-blems",
          literal: "Perfecto. No es una prohibición; es una manera de evitar problemas.",
          why: "La última línea separa consejo de regla. “Avoid” ayuda a elegir mejor; “ban” o “not allowed” ya hablan de prohibición."
        }
      ],
      vocabulary: [
        {
          term: "avoid",
          explanation:
            "Evitar. Es un verbo cotidiano para no meterse en tráfico, problemas, calles, errores o situaciones incómodas.",
          literal: "evitar",
          useWhen:
            "Usted decide esquivar algo antes de que le cueste tiempo, riesgo o incomodidad.",
          avoidWhen:
            "Una regla o barrera impide la acción. Entonces “prevent,” “stop,” o “not allowed” pueden ser más precisos.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["keep away from", "stay clear of", "prevent", "steer clear"],
          example: {
            target: "Avoid the main road.",
            translation: "Evite la avenida principal."
          }
        },
        {
          term: "avoid + noun",
          explanation:
            "El patrón más simple: avoid traffic, avoid the line, avoid problems.",
          literal: "evitar el sustantivo",
          useWhen:
            "Puede nombrar directamente el problema.",
          avoidWhen:
            "La acción viene después. Entonces use avoid más -ing.",
          register: "grammar pattern",
          region: "Inglés universal.",
          related: ["avoid traffic", "avoid crowds", "avoid trouble", "avoid delays"],
          example: {
            target: "Avoid the taxi line.",
            translation: "Evite la fila de taxis."
          }
        },
        {
          term: "avoid + -ing",
          explanation:
            "La estructura para evitar hacer una acción: avoid going, avoid leaving, avoid arguing.",
          literal: "evitar haciendo",
          useWhen:
            "La persona evita realizar una acción.",
          avoidWhen:
            "No use “avoid to” con verbo base. Ese es el calco que más se oye.",
          register: "grammar pattern",
          region: "Inglés universal.",
          related: ["avoid going", "avoid leaving", "avoid saying", "avoid spending"],
          example: {
            target: "Avoid going down that street.",
            translation: "Evite pasar por esa calle."
          }
        },
        {
          term: "keep someone from + -ing",
          explanation:
            "Evitar que alguien haga algo o que algo le pase. Es una estructura muy natural.",
          literal: "mantener a alguien de haciendo",
          useWhen:
            "Una acción previene un resultado: keep you from being late, keep it from getting wet.",
          avoidWhen:
            "Puede decirlo más simple con avoid más objeto. No complique una frase corta.",
          register: "grammar pattern",
          region: "Inglés universal.",
          related: ["prevent someone from", "stop someone from", "keep it from", "avoid being"],
          example: {
            target: "That should keep you from being late.",
            translation: "Eso debe evitar que llegue tarde."
          }
        },
        {
          term: "I'd avoid",
          explanation:
            "Yo evitaría. Es una recomendación suave, muy útil para advertir sin mandar.",
          literal: "yo evitaría",
          useWhen:
            "Da consejo de seguridad, tráfico, horarios o conveniencia.",
          avoidWhen:
            "Hay una regla real. Entonces diga “you can't,” “it's not allowed,” o “it's prohibited.”",
          register: "polite advice",
          region: "Inglés universal.",
          related: ["I'd stay away from", "better not", "I wouldn't", "you may want to avoid"],
          example: {
            target: "I'd avoid that street at night.",
            translation: "Mejor evitaría esa calle de noche."
          }
        },
        {
          term: "traffic",
          explanation:
            "Tráfico o trancón, según el contexto. Es una de las cosas más comunes que uno evita.",
          literal: "tráfico",
          useWhen:
            "Los carros y buses hacen lenta o difícil una ruta.",
          avoidWhen:
            "La calle es larga pero fluida. “Traffic” habla de vehículos, no de distancia.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["traffic jam", "congestion", "rush hour", "delay"],
          example: {
            target: "I want to avoid the traffic.",
            translation: "Quiero evitar el trancón."
          }
        },
        {
          term: "not a ban",
          explanation:
            "No es una prohibición. Separa una recomendación de una regla.",
          literal: "no una prohibición",
          useWhen:
            "Alguien aconseja evitar algo, pero no está diciendo que sea ilegal o imposible.",
          avoidWhen:
            "La regla sí prohíbe la acción. Entonces no la suavice de más.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["advice", "warning", "rule", "prohibited"],
          example: {
            target: "It's not a ban; it's advice.",
            translation: "No es prohibición; es consejo."
          }
        }
      ],
      note:
        "“Avoid” merece peso diario. Usted lo usa antes del problema: avoid traffic, avoid going there at night, keep you from being late. Después de “avoid” va un sustantivo o una forma en -ing, no “to” más verbo. Para “evitar que,” el inglés suele decir “keep someone from” más -ing.",
      culture: [
        {
          label: "El consejo no siempre es control",
          body:
            "“I'd avoid…” suena como recomendación basada en experiencia. No le está quitando libertad; le está dando información para no perder tiempo o meterse en una situación incómoda."
        },
        {
          label: "El tráfico se planea antes",
          body:
            "En muchas ciudades, llegar bien depende de salir por la ruta correcta y a la hora correcta. “Avoid the traffic” no es una frase de miedo, sino de sentido práctico."
        },
        {
          label: "Manchester también tiene rutas que conviene esquivar",
          body:
            "La lluvia, eventos, mercados y obras pueden cambiar una caminata corta. Un recepcionista no necesita exagerar para decirle qué calle evitar; basta la experiencia del lugar."
        },
        {
          label: "Una prohibición usa otras palabras",
          body:
            "Si algo está prohibido, el inglés dirá “not allowed,” “prohibited,” o “you can't.” “Avoid” normalmente deja espacio a la decisión, aunque el consejo sea fuerte."
        }
      ],
      pitfalls: [
        {
          mistake: "“Avoid to go down that street.”",
          whyItFails:
            "Después de “avoid” no va “to” más verbo. Use la forma en -ing.",
          sayInstead: "Avoid going down that street."
        },
        {
          mistake: "“That avoids that I arrive late.”",
          whyItFails:
            "Es un calco de “evita que llegue tarde.” El inglés natural usa “keeps me from” más -ing.",
          sayInstead: "That keeps me from being late."
        },
        {
          mistake: "“Prevent the traffic” cuando quiere esquivarlo",
          whyItFails:
            "“Prevent traffic” suena como causar que no exista tráfico. Si usted simplemente toma otra ruta, está evitando el tráfico.",
          sayInstead: "Avoid the traffic."
        },
        {
          mistake: "“It's prohibited” para un consejo suave",
          whyItFails:
            "“Prohibited” convierte una recomendación en una regla oficial. Si sólo es consejo, “I'd avoid it” suena mejor.",
          sayInstead: "I'd avoid that street."
        }
      ],
      variations: [
        {
          form: "Avoid the main road.",
          register: "polite advice",
          region: "Inglés universal",
          whenToUse: "Recomendar otra ruta para no meterse en un problema."
        },
        {
          form: "I want to avoid the traffic.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Nombrar directamente el problema que quiere evitar."
        },
        {
          form: "I'd avoid going down that street at night.",
          register: "polite advice",
          region: "Inglés universal",
          whenToUse: "Advertencia suave de seguridad o conveniencia."
        },
        {
          form: "That should keep you from being late.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Explicar que una decisión evita un problema posterior."
        },
        {
          form: "You can't go through that street.",
          register: "neutral public",
          region: "Inglés universal",
          whenToUse: "Cuando el límite es un cierre real, no sólo consejo."
        }
      ],
      prompt: "Clare says “I'd avoid going down that street.” ¿Qué está haciendo?",
      choices: [
        "Está dando consejo práctico para esquivar un problema.",
        "Está leyendo un aviso que permite oficialmente la entrada.",
        "Está diciendo que una barrera hace imposible pasar."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa “avoid” con un sustantivo directo?",
          choices: [
            "I avoid the traffic downtown.",
            "I avoid going downtown.",
            "I avoid that I am late."
          ],
          answer: 0,
          tests: "avoid + noun"
        },
        {
          prompt: "¿Cuál frase usa bien “avoid” antes de una acción?",
          choices: [
            "Avoid to go down that street.",
            "Avoid going down that street.",
            "Avoid that go down that street."
          ],
          answer: 1,
          tests: "avoid + -ing"
        },
        {
          prompt: "¿Cuál frase traduce mejor “eso evita que llegue tarde”?",
          choices: [
            "That avoids that I arrive late.",
            "That prevents to arrive late.",
            "That keeps me from being late."
          ],
          answer: 2,
          tests: "keep someone from + -ing"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/41-developing-allowing-and-preventing.js");
