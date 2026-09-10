/*
 * Lesson block: developing / moving your body.
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
    id: "walking-through-getsemani",
    level: "Developing · Moving your body",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "caminar",
    review: "pending",
    es: {
      title: "Dar una vuelta por Getsemaní",
      situation:
        "Estás en Cartagena con Lina después de cenar cerca de la Trinidad. La noche está buena, las calles están vivas, y tú quieres proponer caminar un rato sin que suene como una ruta turística ni como un plan de transporte.",
      setting: {
        who: "Lina grew up in Cartagena and knows which streets stay lively without turning into a souvenir corridor. Sam is visiting but has already learned not to turn every outing into a checklist.",
        what: "A casual decision after dinner: stay seated, order another drink, or walk through Getsemaní and let the night stretch a little.",
        when: "A humid Friday night, after the plaza has filled up and the music is spilling out of doorways.",
        where: "Cartagena, between the Plaza de la Trinidad and the quieter side streets of Getsemaní.",
        why: "Because walking here is not just movement from A to B. It is the plan itself: looking, talking, cooling down, and seeing where the evening wants to go."
      },
      address: {
        form: "tú",
        who: "Lina and Sam use tú because the evening is relaxed and the friendship is already established.",
        why: "Cartagena Spanish comfortably uses tú among friends. Usted would add distance that the scene does not need, and vos would sound imported from somewhere else.",
        ifYouSwitch:
          "Switching to usted would make the invitation feel oddly careful, as if Sam were asking permission instead of suggesting a walk. Keeping tú lets the plan stay light."
      },
      dialogue: [
        {
          speaker: "Sam",
          target: "¿Caminamos un rato antes de pedir otra ronda?",
          translation: "Shall we walk for a bit before ordering another round?",
          pronunciation: "kah-mee-NAH-mos oon RRAH-toh AHN-tes deh peh-DEER OH-trah RON-dah",
          literal: "We-walk a while before ordering another round?",
          why: "“¿Caminamos?” is a real invitation, not just a question about ability. At this level you can hear the present tense doing future work: shall we do this now?"
        },
        {
          speaker: "Lina",
          target: "Caminemos, que la noche está demasiado rica para quedarnos sentados.",
          translation: "Let's walk; the night is way too good for us to stay seated.",
          pronunciation: "kah-mee-NEH-mos, keh lah NOH-cheh es-TAH deh-mah-SYAH-doh RREE-kah PAH-rah keh-DAR-nos sen-TAH-dos",
          literal: "Let's-walk, because the night is too nice to remain seated.",
          why: "“Caminemos” is a clean let's-form. The “que” after it gives the reason in a very Colombian rhythm: do the thing, because the moment is asking for it."
        },
        {
          speaker: "Sam",
          target: "¿Vamos hacia las murallas o damos una vuelta por estas calles?",
          translation: "Should we head toward the walls or take a stroll around these streets?",
          pronunciation: "BAH-mos AH-syah las moo-RAH-yas oh DAH-mos OO-nah BWEHL-tah por ES-tas KAH-yes",
          literal: "We-go toward the walls or we-give a turn through these streets?",
          why: "“Dar una vuelta” is the phrase you want when the walking has no strict errand. It is not aimless in a bad way; it is deliberately loose."
        },
        {
          speaker: "Lina",
          target: "Demos una vuelta por aquí; a pie se siente mejor el barrio.",
          translation: "Let's take a stroll around here; on foot you feel the neighbourhood better.",
          pronunciation: "DEH-mos OO-nah BWEHL-tah por ah-KEE; ah PYEH seh SYEN-teh meh-HOR el BAHR-ryoh",
          literal: "Let's-give a turn around here; on foot one feels better the neighbourhood.",
          why: "“A pie” describes the mode — on foot — but Lina does not say “vamos a pie” because they are not solving transportation. The point is the experience of walking."
        },
        {
          speaker: "Vendedor",
          target: "¡Camine, camine, miren estos aretes hechos a mano!",
          translation: "Come on, come on, look at these handmade earrings!",
          pronunciation: "kah-MEE-neh, kah-MEE-neh, MEE-ren ES-tos ah-REH-tes EH-chos ah MAH-noh",
          literal: "Walk, walk, look at these earrings made by hand!",
          why: "Here “camine” does not mean the vendor is ordering anyone to walk. In Colombian street speech it can mean “come on” or “step this way,” an invitation with movement built into it."
        },
        {
          speaker: "Lina",
          target: "Sigamos caminando; si paramos en cada puesto no llegamos a la esquina.",
          translation: "Let's keep walking; if we stop at every stall we won't even make it to the corner.",
          pronunciation: "see-GAH-mos kah-mee-NAHN-doh; see pah-RAH-mos en KAH-dah PWEHS-toh no yeh-GAH-mos ah lah es-KEE-nah",
          literal: "Let's-continue walking; if we-stop at every stall we don't-arrive at the corner.",
          why: "The progressive “caminando” keeps the motion alive while Lina jokes about the city pulling them sideways. Walking is still the main verb of the scene."
        }
      ],
      vocabulary: [
        {
          term: "caminar",
          explanation:
            "To walk as an action in its own right: strolling, moving through a place, or spending time on foot.",
          literal: "to walk",
          useWhen:
            "You mean the physical act of walking, especially when the walk is part of the plan rather than just a way to reach transport.",
          avoidWhen:
            "You only mean “go.” Spanish will often use ir, salir or pasar depending on the idea, and forcing caminar can make the sentence too literal.",
          register: "neutral",
          region: "General Spanish; very ordinary in Colombia.",
          related: ["andar", "ir a pie", "dar una vuelta", "pasear"],
          example: {
            target: "Sigamos caminando por Getsemaní.",
            translation: "Let's keep walking through Getsemaní."
          }
        },
        {
          term: "dar una vuelta",
          explanation:
            "To take a stroll, have a wander, or make a loose little circuit without a hard destination.",
          literal: "to give a turn",
          useWhen:
            "The walk is social, scenic, or exploratory: after dinner, around a plaza, through a neighbourhood.",
          avoidWhen:
            "You are describing a commute or a precise route. Then it sounds too relaxed for what you mean.",
          register: "friendly informal",
          region: "General Colombian and widely understood elsewhere.",
          related: ["caminar un rato", "pasear", "dar un paseo", "salir a caminar"],
          example: {
            target: "Demos una vuelta por aquí.",
            translation: "Let's take a stroll around here."
          }
        },
        {
          term: "a pie",
          explanation:
            "On foot. It names the mode of movement, especially when contrasting it with a vehicle or with staying put.",
          literal: "by foot",
          useWhen:
            "You want to say a place is better experienced on foot, or that someone did not ride or drive.",
          avoidWhen:
            "The emotion is the walk itself. “Salimos a caminar” or “dimos una vuelta” sounds warmer than a bare “fuimos a pie.”",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["caminando", "sin carro", "a paso lento", "a la vuelta"],
          example: {
            target: "A pie se siente mejor el barrio.",
            translation: "You feel the neighbourhood better on foot."
          }
        },
        {
          term: "camine",
          explanation:
            "Literally “walk,” but in Colombia often “come on,” “let's go,” or “step this way.” It is an invitation, not always a command about walking.",
          literal: "walk",
          useWhen:
            "Someone is nudging you into motion, into a plan, or toward a stall: “camine y comemos algo.”",
          avoidWhen:
            "You are giving formal instructions. In a serious setting, “por favor pase” or “sígame” is clearer and less pushy.",
          register: "friendly informal",
          region: "Very Colombian in this invitation sense.",
          related: ["vamos", "venga", "pase", "anímese"],
          example: {
            target: "Camine y comemos algo.",
            translation: "Come on, let's get something to eat."
          }
        },
        {
          term: "andar",
          explanation:
            "A looser verb that can mean to walk, to be around, or to be in a certain state, depending on the sentence.",
          literal: "to go around",
          useWhen:
            "You hear it in expressions like “anda por el centro” or “anda cansado,” where walking may not be the whole point.",
          avoidWhen:
            "You need the plain physical verb “walk.” For a learner, caminar is safer and more precise.",
          register: "neutral",
          region: "Common across Colombia, with meanings that shift by context.",
          related: ["caminar", "estar", "moverse", "ir"],
          example: {
            target: "Hoy andamos sin afán.",
            translation: "Today we're in no hurry."
          }
        },
        {
          term: "caminar un rato",
          explanation:
            "To walk for a bit. The little time phrase makes the invitation feel casual and easy to accept.",
          literal: "to walk a while",
          useWhen:
            "Suggesting a modest walk after food, before coffee, or while the conversation is still good.",
          avoidWhen:
            "You need to say how far the walk is. “Un rato” is deliberately vague.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["un momentico", "un rato más", "un tramo", "una vueltica"],
          example: {
            target: "¿Caminamos un rato?",
            translation: "Shall we walk for a bit?"
          }
        },
        {
          term: "seguir caminando",
          explanation:
            "To keep walking. It is useful when the place tempts you to stop every few metres.",
          literal: "to continue walking",
          useWhen:
            "You want to keep the group moving without sounding like a tour guide herding people.",
          avoidWhen:
            "You are telling someone to leave a place for a serious reason. Then use a clearer verb like salir or seguir.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["no parar", "avanzar", "seguir derecho", "continuar"],
          example: {
            target: "Sigamos caminando hasta la esquina.",
            translation: "Let's keep walking to the corner."
          }
        }
      ],
      note:
        "Caminar looks simple until Colombian speech turns it social. In Cartagena, “caminar” can name the whole plan, “dar una vuelta” makes the plan pleasantly undefined, and “camine” from a vendor means “come on” more than “move your feet.”",
      culture: [
        {
          label: "Walking can be the plan",
          body:
            "In a place like Getsemaní, walking after dinner is not a practical substitute for transport. It is how you stay inside the evening: murals, music, balconies, heat, and people-watching. Treating it like a route to optimize misses the point."
        },
        {
          label: "Getsemaní is not just a backdrop",
          body:
            "The neighbourhood is residential, commercial, touristic, and lived-in at the same time. A good invitation to walk there leaves room for the place and for the people who are not performing it for visitors."
        },
        {
          label: "Camine is friendlier than it looks",
          body:
            "A Colombian “camine” can sound like an order if you translate it word for word. In the street it often means “come on over,” “let's go,” or “don't overthink it.” Tone decides whether it is warm, pushy, or playful."
        },
        {
          label: "A pie is about experience here",
          body:
            "Saying a neighbourhood is better “a pie” is less about rejecting cars than about saying your body should be at the speed of the street. You notice different things when the plan is slow enough to be interrupted."
        }
      ],
      pitfalls: [
        {
          mistake: "Hearing “camine” as a strict order to walk",
          whyItFails:
            "In Colombia, “camine” often works like “come on” or “let's go.” A vendor, friend, or aunt may be inviting you into a plan, not correcting your posture.",
          sayInstead: "Hear it as “come on” when the context is an invitation."
        },
        {
          mistake: "Using “ir a pie” for every relaxed walk",
          whyItFails:
            "“Ir a pie” is useful for mode of transport, but it can flatten a social stroll into a logistics report. For pleasure, “caminar” or “dar una vuelta” usually carries the mood better.",
          sayInstead: "Dimos una vuelta por Getsemaní."
        },
        {
          mistake: "Treating “andar” and “caminar” as perfect twins",
          whyItFails:
            "Andar can mean to be around, to function, or to be in a state. Caminar is the clearer verb when the body is actually walking.",
          sayInstead: "Caminamos un rato después de comer."
        },
        {
          mistake: "Making the walk sound like transport to a bus",
          whyItFails:
            "This lesson is about walking as an activity, not getting to the next vehicle. If the destination is the whole point, another verb may be doing the real work.",
          sayInstead: "Salimos a caminar sin afán."
        }
      ],
      variations: [
        {
          form: "¿Caminamos un rato?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "A light invitation when the walk is small, social and easy to accept."
        },
        {
          form: "Demos una vuelta por aquí.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "When the route is deliberately loose and the point is wandering together."
        },
        {
          form: "Camine y comemos algo.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "When you are nudging a friend into a plan with a very Colombian little push."
        },
        {
          form: "Prefiero hacerlo a pie.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "When you are contrasting walking with going by vehicle or another mode."
        },
        {
          form: "Sigamos caminando sin afán.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "When the group is moving and you want to keep the relaxed pace."
        }
      ],
      prompt: "Lina says “Demos una vuelta por aquí.” What kind of plan is she proposing?",
      choices: [
        "A relaxed stroll through the nearby streets with no strict destination.",
        "A direct trip across town to catch a vehicle as quickly as possible.",
        "A formal walking tour with a fixed guide and scheduled stops."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "A vendor calls “¡Camine, camine!” What should Sam understand first?",
          choices: [
            "It is probably a complaint that his walking style is rude or unsafe.",
            "It is probably an invitation like “come on over,” not a literal walking lesson.",
            "It is probably a warning that the street is closed to pedestrians."
          ],
          answer: 1,
          tests: "the Colombian invitation sense of “camine”"
        },
        {
          prompt: "Which phrase best keeps the walk social rather than logistical?",
          choices: [
            "Fuimos a pie por obligación.",
            "Cambiamos de transporte en silencio.",
            "Dimos una vuelta por el barrio."
          ],
          answer: 2,
          tests: "using “dar una vuelta” for a relaxed stroll"
        },
        {
          prompt: "Why is “a pie” useful but not always the best choice?",
          choices: [
            "Because it names the mode, while caminar can name the experience.",
            "Because it is only used for animals and never for people.",
            "Because it belongs only in legal documents about traffic."
          ],
          answer: 0,
          tests: "separating mode of movement from the social act of walking"
        },
        {
          prompt: "What is the safest reading of “andar” for a learner here?",
          choices: [
            "It always means walking quickly toward the nearest bus station.",
            "It can overlap with walking, but its meaning depends heavily on context.",
            "It only means swimming in rivers and pools during weekends."
          ],
          answer: 1,
          tests: "not treating “andar” as a perfect synonym of “caminar”"
        }
      ]
    },
    en: {
      title: "Dar una vuelta por Getsemaní",
      situation:
        "Usted está en Cartagena con Lina después de cenar cerca de la Trinidad. La noche está buena, las calles están vivas, y quiere proponer en inglés caminar un rato sin que suene como una ruta turística ni como un plan de transporte.",
      setting: {
        who: "Lina se crió en Cartagena y sabe qué calles siguen vivas sin volverse un pasillo de recuerdos. Samuel está de visita, pero ya aprendió a no convertir cada salida en una lista.",
        what: "Una decisión casual después de comer: quedarse sentado, pedir otra bebida o caminar por Getsemaní y dejar que la noche se alargue un poco.",
        when: "Un viernes húmedo por la noche, cuando la plaza ya se llenó y la música se sale por las puertas.",
        where: "Cartagena, entre la Plaza de la Trinidad y las calles más tranquilas de Getsemaní.",
        why: "Porque caminar aquí no es sólo moverse de un punto a otro. Es el plan: mirar, conversar, refrescarse un poco y ver hacia dónde quiere ir la noche."
      },
      address: {
        form: "mixed",
        who: "Lina y Samuel se tratan por el nombre de pila, y el inglés usa el mismo “you” en toda la conversación.",
        why: "Como el inglés no distingue tú y usted, la cercanía se marca con el tono y con frases ligeras como “shall we” o “let's.” El pronombre no ayuda.",
        ifYouSwitch:
          "No hay un cambio de pronombre que hacer. Si Samuel se pone demasiado ceremonial — “would you care to promenade?” — la frase envejece de golpe."
      },
      dialogue: [
        {
          speaker: "Samuel",
          target: "Shall we walk for a bit before we order another round?",
          translation: "¿Caminamos un rato antes de pedir otra ronda?",
          pronunciation: "shal wi UOK for a bit bi-FOR wi OR-der a-NA-der raund",
          literal: "¿Deberíamos caminar por un poco antes de ordenar otra ronda?",
          why: "“Shall we” suena a invitación compartida, no a orden. En conversación cotidiana puede sonar un poco más británico o cuidado que “do you want to,” pero aquí queda natural porque la propuesta es amable."
        },
        {
          speaker: "Lina",
          target: "Let's walk; the night is way too nice to stay sitting down.",
          translation: "Caminemos; la noche está demasiado rica para quedarnos sentados.",
          pronunciation: "lets UOK; da nait is wei tu NAIS tu stei SI-ting daun",
          literal: "Dejemos caminar; la noche es demasiado bonita para quedar sentados abajo.",
          why: "“Let's walk” es la forma directa de “caminemos.” No diga “let's to walk”: después de “let's” viene el verbo base, sin “to.”"
        },
        {
          speaker: "Samuel",
          target: "Should we head toward the walls or wander around these streets?",
          translation: "¿Vamos hacia las murallas o damos una vuelta por estas calles?",
          pronunciation: "shud wi jed to-UORD da uols or UAN-der a-RAUND diz strits",
          literal: "¿Deberíamos dirigirnos hacia las murallas o vagar alrededor estas calles?",
          why: "“Wander around” es más suelto que “walk.” No implica perderse; implica que el camino puede ir cambiando según la conversación y la calle."
        },
        {
          speaker: "Lina",
          target: "Let's wander around here; you feel the neighbourhood better on foot.",
          translation: "Demos una vuelta por aquí; a pie se siente mejor el barrio.",
          pronunciation: "lets UAN-der a-RAUND jir; yu fil da NEI-ber-jud BE-ter on fut",
          literal: "Dejemos vagar alrededor aquí; usted siente el barrio mejor en pie.",
          why: "“On foot” equivale a “a pie.” El inglés no dice “by foot” en esta frase cotidiana; lo natural es “on foot.”"
        },
        {
          speaker: "Vendor",
          target: "Come on over, come on over, take a look at these handmade earrings!",
          translation: "¡Camine, camine, miren estos aretes hechos a mano!",
          pronunciation: "kom on OU-ver, kom on OU-ver, teik a luk at diz jand-MEID IR-rings",
          literal: "Venga sobre, venga sobre, tome una mirada a estos aretes hechos a mano.",
          why: "Para traducir el “camine” colombiano de un vendedor, “come on over” comunica mejor la invitación que un literal “walk.”"
        },
        {
          speaker: "Lina",
          target: "Let's keep walking; if we stop at every stall, we'll never reach the corner.",
          translation: "Sigamos caminando; si paramos en cada puesto no llegamos a la esquina.",
          pronunciation: "lets kip UOK-ing; if wi stop at EV-ri stol, wil NE-ver rich da COR-ner",
          literal: "Dejemos mantener caminando; si paramos en cada puesto, nunca alcanzaremos la esquina.",
          why: "Después de “keep” el inglés usa -ing: “keep walking.” Decir “keep walk” es un calco muy visible del español."
        }
      ],
      vocabulary: [
        {
          term: "walk",
          explanation:
            "El verbo básico para caminar como acción física: pasear, moverse por un lugar o pasar tiempo a pie.",
          literal: "caminar",
          useWhen:
            "Quiere hablar del acto de caminar, sobre todo cuando caminar es parte del plan y no sólo la manera de llegar a otro medio de transporte.",
          avoidWhen:
            "Quiere decir simplemente “ir.” En inglés también existen “go,” “head,” “leave” y “come,” y “walk” puede sonar demasiado literal si el movimiento no importa.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["wander", "go on foot", "take a walk", "stroll"],
          example: {
            target: "Let's keep walking through Getsemaní.",
            translation: "Sigamos caminando por Getsemaní."
          }
        },
        {
          term: "wander around",
          explanation:
            "Caminar sin ruta estricta, dando una vuelta por un lugar y dejando que el camino se arme solo.",
          literal: "vagar alrededor",
          useWhen:
            "El paseo es social, visual o exploratorio: después de cenar, alrededor de una plaza, por un barrio.",
          avoidWhen:
            "Está describiendo una ruta precisa o una diligencia. Ahí “wander around” suena demasiado suelto.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["take a walk", "walk around", "stroll", "look around"],
          example: {
            target: "Let's wander around here.",
            translation: "Demos una vuelta por aquí."
          }
        },
        {
          term: "on foot",
          explanation:
            "A pie. Nombra el modo de moverse, especialmente cuando se contrasta con un carro, una moto o quedarse quieto.",
          literal: "en pie",
          useWhen:
            "Quiere decir que un lugar se vive mejor caminando, o que alguien no fue en vehículo.",
          avoidWhen:
            "El sentimiento es el paseo mismo. “Take a walk” o “wander around” suena más cálido que un simple “go on foot.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["walking", "without a car", "by walking", "at walking pace"],
          example: {
            target: "You feel the neighbourhood better on foot.",
            translation: "A pie se siente mejor el barrio."
          }
        },
        {
          term: "come on over",
          explanation:
            "Una invitación a acercarse. Traduce mucho mejor el “camine” colombiano de un vendedor que la palabra literal “walk.”",
          literal: "venga hacia acá",
          useWhen:
            "Alguien quiere que usted se acerque a una mesa, una tienda, una casa o una conversación.",
          avoidWhen:
            "La persona no se va a mover hacia usted. Para animar sin movimiento, “come on” solo puede bastar.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["come on", "step this way", "come here", "take a look"],
          example: {
            target: "Come on over and take a look.",
            translation: "Camine y mire."
          }
        },
        {
          term: "go around",
          explanation:
            "Moverse por un lugar o circular por varios puntos. Puede coincidir con caminar, pero no siempre especifica los pies.",
          literal: "ir alrededor",
          useWhen:
            "Quiere hablar de andar por una zona, repartir algo o pasar por varios lugares.",
          avoidWhen:
            "Necesita decir claramente que la persona camina. Ahí “walk” es más preciso.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["walk around", "get around", "move around", "wander"],
          example: {
            target: "We went around the old streets slowly.",
            translation: "Anduvimos despacio por las calles viejas."
          }
        },
        {
          term: "walk for a bit",
          explanation:
            "Caminar un rato. La frase de tiempo vuelve la invitación ligera y fácil de aceptar.",
          literal: "caminar por un poco",
          useWhen:
            "Propone un paseo modesto después de comer, antes de un café o mientras la conversación sigue buena.",
          avoidWhen:
            "Necesita decir una distancia exacta. “For a bit” es intencionalmente vago.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["for a while", "a little longer", "take a short walk", "keep going"],
          example: {
            target: "Shall we walk for a bit?",
            translation: "¿Caminamos un rato?"
          }
        },
        {
          term: "keep walking",
          explanation:
            "Seguir caminando. Es útil cuando el lugar lo tienta a detenerse cada pocos metros.",
          literal: "mantener caminando",
          useWhen:
            "Quiere que el grupo siga moviéndose sin sonar como guía de excursión.",
          avoidWhen:
            "Quiere decir que alguien debe salir de un sitio por una razón seria. Ahí use algo más directo como “leave” o “keep going.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["keep going", "don't stop", "walk on", "continue"],
          example: {
            target: "Let's keep walking to the corner.",
            translation: "Sigamos caminando hasta la esquina."
          }
        }
      ],
      note:
        "Walk parece sencillo hasta que uno intenta traducir todo lo que en Colombia cabe en “caminar.” En Getsemaní, “walk” nombra el acto, “wander around” se acerca a “dar una vuelta,” y “come on over” suele servir mejor que “walk” para el “camine” de la calle.",
      culture: [
        {
          label: "Caminar puede ser el plan",
          body:
            "En un lugar como Getsemaní, caminar después de cenar no es un sustituto práctico del transporte. Es una manera de quedarse dentro de la noche: murales, música, balcones, calor y gente pasando. Tratarlo como una ruta por optimizar pierde lo central."
        },
        {
          label: "Getsemaní no es sólo un decorado",
          body:
            "El barrio es residencial, comercial, turístico y cotidiano al mismo tiempo. Una buena invitación a caminar por allí deja espacio para el lugar y para la gente que no está actuando para los visitantes."
        },
        {
          label: "Come on over traduce mejor que walk",
          body:
            "Si un vendedor colombiano dice “camine,” el inglés literal “walk” confunde. “Come on over” comunica que le están abriendo un espacio para acercarse, mirar y quizá conversar."
        },
        {
          label: "On foot es experiencia y modo",
          body:
            "Decir que un barrio se siente mejor “on foot” no sólo informa que no hay carro. También sugiere que el cuerpo debe ir a la velocidad de la calle. Se notan otras cosas cuando el plan es suficientemente lento para interrumpirse."
        }
      ],
      pitfalls: [
        {
          mistake: "“Walk, walk, look at these earrings.”",
          whyItFails:
            "Como traducción de “camine, camine,” suena a que el vendedor está corrigiendo la forma de caminar. La invitación colombiana necesita una frase inglesa de acercamiento.",
          sayInstead: "Come on over and take a look."
        },
        {
          mistake: "“Let's to walk.”",
          whyItFails:
            "Después de “let's” el inglés usa el verbo base sin “to.” El “to” viene del infinitivo español, pero aquí sobra.",
          sayInstead: "Let's walk."
        },
        {
          mistake: "“We went by foot.”",
          whyItFails:
            "Se entiende, pero la frase natural en inglés es “on foot.” “By” sí aparece con vehículos: by car, by bus, by bike.",
          sayInstead: "We went on foot."
        },
        {
          mistake: "“Let's keep walk.”",
          whyItFails:
            "Después de “keep,” el verbo que sigue toma -ing. Es una estructura fija: keep walking, keep talking, keep moving.",
          sayInstead: "Let's keep walking."
        }
      ],
      variations: [
        {
          form: "Shall we walk for a bit?",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Una invitación ligera cuando el paseo es corto, social y fácil de aceptar."
        },
        {
          form: "Let's wander around here.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Cuando la ruta es suelta a propósito y el punto es caminar juntos."
        },
        {
          form: "Come on over and eat with us.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Cuando traduce un “camine” de invitación y no una orden literal de caminar."
        },
        {
          form: "I'd rather do it on foot.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Cuando está contrastando caminar con ir en vehículo o con otro modo."
        },
        {
          form: "Let's keep walking, no rush.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Cuando el grupo ya está en movimiento y usted quiere mantener el ritmo relajado."
        }
      ],
      prompt: "Lina says “Let's wander around here.” ¿Qué clase de plan propone?",
      choices: [
        "Un paseo relajado por las calles cercanas, sin destino estricto.",
        "Un viaje directo al otro lado de la ciudad para alcanzar transporte.",
        "Un tour formal a pie con guía fijo y paradas programadas."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Un vendedor diría en inglés “Come on over.” ¿Qué comunica primero?",
          choices: [
            "Una queja porque la forma de caminar de usted es peligrosa.",
            "Una invitación a acercarse y mirar, no una clase literal de caminar.",
            "Una advertencia de que la calle está cerrada para peatones."
          ],
          answer: 1,
          tests: "“come on over” para traducir el “camine” colombiano"
        },
        {
          prompt: "¿Qué frase mantiene el paseo social y no puramente logístico?",
          choices: [
            "We walked there because required.",
            "We changed transport in silence.",
            "We wandered around the neighbourhood."
          ],
          answer: 2,
          tests: "usar “wander around” para una vuelta relajada"
        },
        {
          prompt: "¿Por qué “on foot” sirve pero no siempre basta?",
          choices: [
            "Porque nombra el modo, mientras walk puede nombrar la experiencia.",
            "Porque sólo se usa con animales y nunca con personas.",
            "Porque pertenece únicamente a documentos legales de tránsito."
          ],
          answer: 0,
          tests: "separar el modo de movimiento del acto social de caminar"
        },
        {
          prompt: "¿Qué debe recordar sobre “go around” en esta escena?",
          choices: [
            "Siempre significa correr hacia la estación de bus más cercana.",
            "Puede coincidir con caminar, pero depende mucho del contexto.",
            "Sólo significa nadar en ríos y piscinas los fines de semana."
          ],
          answer: 1,
          tests: "no tratar “go around” como sinónimo perfecto de “walk”"
        }
      ]
    }
  },
  {
    id: "running-on-the-cali-river-path",
    level: "Developing · Moving your body",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "work-and-employment",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "correr",
    review: "pending",
    es: {
      title: "Correr por el río Cali",
      situation:
        "Vos quedaste con Julián para trotar temprano por el bulevar del río Cali. El plan empieza como ejercicio, pero entre el calor, la hora y una silla atravesada, la conversación muestra tres sentidos cotidianos de correr.",
      setting: {
        who: "Julián runs before work whenever he can. Maya is trying to build the habit without pretending she has become an athlete overnight.",
        what: "A short morning run that turns into practical talk about pace, lateness and moving a chair out of the way.",
        when: "Early on a weekday, before the sun makes the pavement feel serious.",
        where: "Cali, along the river path near the boulevard, with cyclists, office workers and vendors setting up.",
        why: "Because correr is not only exercise. Colombians also use it for hurrying and for sliding an object over, and both meanings appear before breakfast."
      },
      address: {
        form: "vos",
        who: "Julián and Maya use vos, common and natural among friends in Cali.",
        why: "Caleño voseo can be warm, quick and relaxed. In this scene it fits the rhythm of two friends half exercising, half teasing each other.",
        ifYouSwitch:
          "Tú would still be understood, but it would lose local texture. Usted would sound like they had stepped out of the friendship and into a customer-service exchange."
      },
      dialogue: [
        {
          speaker: "Julián",
          target: "¿Lista? Corramos suave hasta el puente y miramos cómo seguimos.",
          translation: "Ready? Let's run easy to the bridge and then see how we continue.",
          pronunciation: "LEES-tah. koh-RRAH-mos SWAH-beh AHS-tah el PWEN-teh ee mee-RAH-mos KOH-moh seh-GHEE-mos",
          literal: "Ready? Let's-run soft until the bridge and we-see how we-continue.",
          why: "“Corramos suave” keeps correr literal but not competitive. Suave in Colombia often means gently, calmly, without overdoing it."
        },
        {
          speaker: "Maya",
          target: "Yo corro, pero no me pongás ritmo de carrera profesional.",
          translation: "I'll run, but don't give me a professional race pace.",
          pronunciation: "yo KOHR-roh, PEH-roh no meh pon-GAHS RREET-moh deh kah-RREH-rah pro-feh-syo-NAHL",
          literal: "I run, but don't put me rhythm of professional race.",
          why: "With vos, the negative command is “no me pongás.” The verb lesson is correr, but the local address form is doing real social work too."
        },
        {
          speaker: "Julián",
          target: "Tranquila, sólo corremos veinte minutos y paramos por jugo.",
          translation: "Relax, we only run twenty minutes and stop for juice.",
          pronunciation: "tran-KEE-lah, SOH-loh koh-RREH-mos BAYN-teh mee-NOO-tos ee pah-RAH-mos por HOO-goh",
          literal: "Calm, only we-run twenty minutes and we-stop for juice.",
          why: "Present tense again carries a near-future plan. The juice promise matters: the sentence sounds like a manageable outing, not a training programme."
        },
        {
          speaker: "Maya",
          target: "Corra, pues, que se nos hace tarde para entrar a trabajar.",
          translation: "Hurry up, then; we're going to be late for work.",
          pronunciation: "KOHR-rah, pwes, keh seh nos AH-seh TAR-deh PAH-rah en-TRAR ah trah-bah-HAR",
          literal: "Run, then, that it makes itself late for us to enter to work.",
          why: "“Corra” here means hurry, not literally sprint. Colombians say it when time is tightening and the body needs to move faster somehow."
        },
        {
          speaker: "Julián",
          target: "Espere, tengo que correr esta silla para que no tape el paso.",
          translation: "Wait, I need to move this chair over so it doesn't block the way.",
          pronunciation: "es-PEH-reh, TEN-goh keh koh-RRER ES-tah SEE-yah PAH-rah keh no TAH-peh el PAH-soh",
          literal: "Wait, I have to run this chair so that it doesn't cover the passage.",
          why: "This is the surprise: “correr algo” can mean move something over. The chair is not running; Julián is sliding it out of the way."
        },
        {
          speaker: "Maya",
          target: "Listo, ahora sí corramos antes de que salga el sol bravo.",
          translation: "Done, now let's run before the fierce sun comes out.",
          pronunciation: "LEES-toh, ah-OH-rah see koh-RRAH-mos AHN-tes deh keh SAHL-gah el sol BRAH-boh",
          literal: "Ready, now yes let's-run before the angry sun comes out.",
          why: "“Ahora sí” marks that the real action can begin. The last correr returns to the literal sense after the hurried and transitive meanings have passed through the scene."
        }
      ],
      vocabulary: [
        {
          term: "correr",
          explanation:
            "To run, either as exercise or simply moving fast on foot.",
          literal: "to run",
          useWhen:
            "Talking about jogging, running after someone, racing, or getting your body moving faster than walking.",
          avoidWhen:
            "You mean operating a machine or managing a business. English uses run there, but Spanish usually needs another verb.",
          register: "neutral",
          region: "Universal Spanish; the extra meanings here are very common in Colombia.",
          related: ["trotar", "apurar", "correr algo", "hacer ejercicio"],
          example: {
            target: "Corramos suave hasta el puente.",
            translation: "Let's run easy to the bridge."
          }
        },
        {
          term: "correr suave",
          explanation:
            "To run easy, without pushing the pace. Suave is the word that keeps the plan friendly.",
          literal: "to run soft",
          useWhen:
            "You are agreeing to exercise but setting a pace that will not punish anyone.",
          avoidWhen:
            "You are talking about an actual race or hard training. Then suave sounds like you are backing away from effort.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["trotar suave", "sin afán", "a buen ritmo", "despacio"],
          example: {
            target: "Hoy corremos suave.",
            translation: "Today we run easy."
          }
        },
        {
          term: "corra",
          explanation:
            "Literally “run,” but often “hurry up” when time is short.",
          literal: "run",
          useWhen:
            "Someone needs to move faster because the bus, appointment, sun or boss is catching up with the day.",
          avoidWhen:
            "The other person is already stressed. It can sound bossy unless the relationship and tone soften it.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["apúrese", "rápido", "dele", "se hace tarde"],
          example: {
            target: "Corra, que se nos hace tarde.",
            translation: "Hurry up, we're running late."
          }
        },
        {
          term: "correr algo",
          explanation:
            "To move something over, usually by sliding or shifting it a short distance.",
          literal: "to run something",
          useWhen:
            "A chair, table, bag or curtain is in the way and you need it moved a little.",
          avoidWhen:
            "You mean carry something away. Correr usually suggests shifting it, not transporting it somewhere else.",
          register: "neutral",
          region: "Very common Colombian everyday usage.",
          related: ["mover", "hacer a un lado", "arrimar", "despejar"],
          example: {
            target: "Corra la silla un poquito.",
            translation: "Move the chair over a little."
          }
        },
        {
          term: "trotar",
          explanation:
            "To jog. It is often the more modest word for recreational running.",
          literal: "to trot",
          useWhen:
            "You are describing exercise at a steady, non-competitive pace.",
          avoidWhen:
            "You are clearly sprinting, racing or hurrying because you are late. Then correr is the better verb.",
          register: "neutral",
          region: "General Colombian.",
          related: ["correr", "hacer cardio", "entrenar", "calentar"],
          example: {
            target: "Salimos a trotar temprano.",
            translation: "We went jogging early."
          }
        },
        {
          term: "se nos hace tarde",
          explanation:
            "We are getting late; time is slipping away on us.",
          literal: "it makes itself late to us",
          useWhen:
            "The schedule is starting to close in and you want the group to hurry without a long explanation.",
          avoidWhen:
            "You are blaming one person directly. This phrase spreads the lateness over the situation.",
          register: "neutral",
          region: "General Spanish, very common in Colombia.",
          related: ["vamos tarde", "nos cogió la tarde", "apúrese", "ya casi"],
          example: {
            target: "Corra, que se nos hace tarde.",
            translation: "Hurry up, we're going to be late."
          }
        },
        {
          term: "tapar el paso",
          explanation:
            "To block the way. It often explains why you have to move an object over.",
          literal: "to cover the passage",
          useWhen:
            "A chair, box, person or parked bike is preventing people from passing comfortably.",
          avoidWhen:
            "You mean emotionally blocking someone or stopping a plan. This phrase is physical and spatial.",
          register: "neutral",
          region: "General Colombian.",
          related: ["estorbar", "quedar atravesado", "dejar pasar", "abrir espacio"],
          example: {
            target: "La silla tapa el paso.",
            translation: "The chair blocks the way."
          }
        }
      ],
      note:
        "Correr is a good developing verb because it refuses to stay in the gym. In a single Cali morning, it means running for exercise, hurrying because the day is catching up, and moving a chair so people can pass.",
      culture: [
        {
          label: "Cali starts early for a reason",
          body:
            "Morning exercise in Cali is not just discipline; it is climate strategy. A run that feels pleasant near the river before work can feel punishing later. The time of day changes the language from athletic ambition to common sense."
        },
        {
          label: "Suave is a social contract",
          body:
            "When someone says “corramos suave,” they are protecting the friendship as much as the knees. The word promises that nobody is going to turn a casual plan into a test of pride."
        },
        {
          label: "Corra can be affectionate pressure",
          body:
            "A Colombian “corra” often lives between teasing and urgency. With the wrong tone it is bossy; with the right relationship it is the little push that gets everyone moving before the day wins."
        },
        {
          label: "Furniture can correr too",
          body:
            "The transitive “correr la silla” is everyday Spanish in Colombia. English speakers often picture the chair running because their verb run does not work this way. Spanish simply lets the object shift."
        }
      ],
      pitfalls: [
        {
          mistake: "Thinking “corra la silla” means the chair runs",
          whyItFails:
            "With an object after it, correr can mean move or slide that object over. The verb has become transitive, and the chair is the thing being shifted.",
          sayInstead: "Corra la silla un poquito."
        },
        {
          mistake: "Hearing every “corra” as literal sprinting",
          whyItFails:
            "In everyday Colombian speech, “corra” often means hurry. The person may need to move quickly, but not necessarily break into a run.",
          sayInstead: "Hear “corra” as “hurry up” when time is the pressure."
        },
        {
          mistake: "Using “correr” for running a business",
          whyItFails:
            "English run stretches into machines, programmes and businesses. Spanish correr does not cover all of that territory.",
          sayInstead: "Use manejar, dirigir or administrar for a business."
        },
        {
          mistake: "Ignoring “suave” in “corramos suave”",
          whyItFails:
            "The word sets the social pace. If you run hard after agreeing to “suave,” you have misunderstood the invitation and maybe annoyed your partner.",
          sayInstead: "Treat “suave” as easy, gentle and not competitive."
        }
      ],
      variations: [
        {
          form: "Corramos suave hasta el puente.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Setting an easy exercise plan with a clear short marker."
        },
        {
          form: "Yo corro, pero despacio.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "Agreeing to run while protecting your pace."
        },
        {
          form: "Corra, que se nos hace tarde.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Urging someone to hurry when the schedule is tightening."
        },
        {
          form: "Corra la silla un poquito.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Asking someone to move an object a short distance out of the way."
        },
        {
          form: "Salimos a trotar temprano.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Describing recreational jogging without making it sound like a race."
        }
      ],
      prompt: "Julián says “tengo que correr esta silla.” What is he going to do?",
      choices: [
        "Move the chair over a little so the path is clear.",
        "Run beside the chair as if it were exercising with him.",
        "Sit down on the chair and cancel the morning run."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Maya says “Corra, que se nos hace tarde.” What is the force of “corra”?",
          choices: [
            "She is asking him to join an official race immediately.",
            "She is telling him to hurry because time is getting tight.",
            "She is describing a chair that can move by itself."
          ],
          answer: 1,
          tests: "correr as hurrying rather than literal running"
        },
        {
          prompt: "What does “corramos suave” promise in this scene?",
          choices: [
            "They will compete seriously until one of them gives up.",
            "They will avoid exercise and only talk about running.",
            "They will run at an easy pace that protects the friendship."
          ],
          answer: 2,
          tests: "suave as easy pace and social reassurance"
        },
        {
          prompt: "Which object sentence uses the Colombian transitive meaning?",
          choices: [
            "Corra la silla para despejar el paso.",
            "Corra veinte minutos por el bulevar.",
            "Corra porque ya se hizo tarde."
          ],
          answer: 0,
          tests: "recognising “correr algo” as moving an object"
        },
        {
          prompt: "Why is “correr” not the automatic translation of every English “run”?",
          choices: [
            "Because Spanish never uses correr for exercise or movement on foot.",
            "Because English uses run for businesses and machines where Spanish chooses other verbs.",
            "Because Colombians only use correr when talking about professional athletes."
          ],
          answer: 1,
          tests: "not overextending Spanish correr from English run"
        }
      ]
    },
    en: {
      title: "Correr por el río Cali",
      situation:
        "Usted quedó con Julián para trotar temprano por el bulevar del río Cali. El plan empieza como ejercicio, pero entre el calor, la hora y una silla atravesada, la conversación exige distinguir varios usos de run en inglés.",
      setting: {
        who: "Julian corre antes del trabajo siempre que puede. Manuela está intentando crear el hábito sin fingir que se volvió atleta de un día para otro.",
        what: "Una carrera corta por la mañana que se vuelve conversación práctica sobre ritmo, afán y una silla que estorba.",
        when: "Temprano entre semana, antes de que el sol vuelva serio el pavimento.",
        where: "Cali, por el sendero del río cerca del bulevar, con ciclistas, gente de oficina y vendedores armando puestos.",
        why: "Porque run en inglés sí cubre correr por ejercicio y apurarse, pero no traduce naturalmente el colombiano “correr una silla.” Ahí hay que cambiar de verbo."
      },
      address: {
        form: "mixed",
        who: "Julian y Manuela se hablan como amigos; el inglés mantiene el mismo “you” aunque el español de Cali usaría vos.",
        why: "El inglés no tiene voseo. La cercanía aparece en “easy,” “relax” y en el humor del ritmo, no en la forma del pronombre.",
        ifYouSwitch:
          "No hay equivalente directo de vos. Tratar de compensarlo con slang exagerado puede sonar falso; mejor mantenga un inglés natural y relajado."
      },
      dialogue: [
        {
          speaker: "Julian",
          target: "Ready? Let's run easy to the bridge and see how we feel.",
          translation: "¿Lista? Corramos suave hasta el puente y miramos cómo seguimos.",
          pronunciation: "RE-di. lets ron I-si tu da brich and si jau wi fil",
          literal: "¿Lista? Dejemos correr fácil al puente y ver cómo nos sentimos.",
          why: "“Run easy” suena natural entre corredores y no significa que correr sea fácil. Quiere decir bajar la intensidad y no convertir el plan en competencia."
        },
        {
          speaker: "Manuela",
          target: "I'll run, but don't set a professional race pace.",
          translation: "Yo corro, pero no me pongás ritmo de carrera profesional.",
          pronunciation: "ail ron, bot dount set a pro-FE-sho-nal reis peis",
          literal: "Voy a correr, pero no ponga un ritmo de carrera profesional.",
          why: "“Set a pace” es la combinación normal. Traducir palabra por palabra “put me a rhythm” no funciona en inglés."
        },
        {
          speaker: "Julian",
          target: "Relax, we only run for twenty minutes and stop for juice.",
          translation: "Tranquila, sólo corremos veinte minutos y paramos por jugo.",
          pronunciation: "ri-LAX, wi ON-li ron for TUEN-ti MI-nits and stop for yus",
          literal: "Relájese, sólo corremos por veinte minutos y paramos por jugo.",
          why: "Con duraciones, el inglés suele añadir “for”: run for twenty minutes. Sin “for” también se oye, pero para un aprendiz la estructura con “for” es más estable."
        },
        {
          speaker: "Manuela",
          target: "Hurry up, then, or we'll be late for work.",
          translation: "Corra, pues, que se nos hace tarde para entrar a trabajar.",
          pronunciation: "JE-ri op, den, or wil bi leit for uork",
          literal: "Apúrese arriba, entonces, o estaremos tarde para trabajo.",
          why: "Aquí el inglés no usa “run” aunque el español diga “corra.” Para el sentido de afán cotidiano, “hurry up” es más exacto."
        },
        {
          speaker: "Julian",
          target: "Wait, I need to move this chair over so it doesn't block the path.",
          translation: "Espere, tengo que correr esta silla para que no tape el paso.",
          pronunciation: "ueit, ai nid tu muv dis cher OU-ver so it DA-sent blok da path",
          literal: "Espere, necesito mover esta silla encima para que no bloquee el camino.",
          why: "Este es el punto clave: el inglés no dice “run the chair” para “correr la silla.” Se dice “move the chair over.”"
        },
        {
          speaker: "Manuela",
          target: "All right, now let's run before the sun gets brutal.",
          translation: "Listo, ahora sí corramos antes de que salga el sol bravo.",
          pronunciation: "ol rait, nau lets ron bi-FOR da son gets BRU-tal",
          literal: "Todo correcto, ahora dejemos correr antes de que el sol se vuelva brutal.",
          why: "“Now let's run” vuelve al sentido físico. “Gets brutal” traduce bien ese sol que en Cali cambia el plan si uno se demora."
        }
      ],
      vocabulary: [
        {
          term: "run",
          explanation:
            "Correr: moverse rápido a pie, entrenar o participar en una carrera.",
          literal: "correr",
          useWhen:
            "Habla de trotar, correr detrás de alguien, competir o hacer que el cuerpo vaya más rápido que caminando.",
          avoidWhen:
            "Quiere traducir “correr una silla.” En inglés una silla no se “run” para moverla: se “move over” o se “slide over.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["jog", "hurry up", "move over", "race"],
          example: {
            target: "Let's run easy to the bridge.",
            translation: "Corramos suave hasta el puente."
          }
        },
        {
          term: "run easy",
          explanation:
            "Correr suave, sin apretar el ritmo. Easy protege el plan de volverse una competencia.",
          literal: "correr fácil",
          useWhen:
            "Acepta hacer ejercicio, pero quiere dejar claro que el ritmo no va a castigar a nadie.",
          avoidWhen:
            "Está hablando de una carrera fuerte o un entrenamiento exigente. Ahí “easy” contradice la intención.",
          register: "friendly informal",
          region: "Inglés universal, muy común entre corredores.",
          related: ["jog", "take it easy", "slow down", "warm up"],
          example: {
            target: "Today we run easy.",
            translation: "Hoy corremos suave."
          }
        },
        {
          term: "hurry up",
          explanation:
            "Apurarse. Es la mejor traducción para muchos “corra” cotidianos cuando el problema es la hora.",
          literal: "apúrese arriba",
          useWhen:
            "Alguien debe moverse más rápido porque se acaba el tiempo, llega una cita o el día se viene encima.",
          avoidWhen:
            "La otra persona ya está estresada. Puede sonar mandón si la relación y el tono no lo suavizan.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["come on", "quick", "we're late", "get moving"],
          example: {
            target: "Hurry up, we're going to be late.",
            translation: "Corra, que se nos hace tarde."
          }
        },
        {
          term: "move something over",
          explanation:
            "Mover algo un poco hacia un lado. Es la traducción natural de “correr algo” cuando una cosa estorba.",
          literal: "mover algo encima",
          useWhen:
            "Una silla, mesa, maleta o cortina está atravesada y hay que desplazarla un poco.",
          avoidWhen:
            "Quiere decir llevar algo lejos. “Move over” suele sugerir un cambio corto de posición.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["slide over", "shift", "make room", "clear the way"],
          example: {
            target: "Move the chair over a little.",
            translation: "Corra la silla un poquito."
          }
        },
        {
          term: "jog",
          explanation:
            "Trotar. Suele ser la palabra más modesta para correr por ejercicio y sin competencia.",
          literal: "trotar",
          useWhen:
            "Describe ejercicio a ritmo constante, recreativo y no demasiado intenso.",
          avoidWhen:
            "La persona está esprintando, compitiendo o apurándose por llegar tarde. Ahí “run” o “hurry up” encajan mejor.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["run", "go for a run", "work out", "warm up"],
          example: {
            target: "We went jogging early.",
            translation: "Salimos a trotar temprano."
          }
        },
        {
          term: "be late",
          explanation:
            "Llegar tarde o estar tarde para algo. Es la estructura central detrás de “we'll be late.”",
          literal: "ser tarde",
          useWhen:
            "El horario ya se está cerrando y quiere explicar por qué hay que apurarse.",
          avoidWhen:
            "Quiere hablar de que la noche está avanzada. Ahí se dice “it's late,” no “we are late.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["running late", "on time", "too late", "hurry up"],
          example: {
            target: "We'll be late for work.",
            translation: "Se nos hace tarde para trabajar."
          }
        },
        {
          term: "block the path",
          explanation:
            "Tapar el paso. Suele explicar por qué hay que mover una cosa hacia un lado.",
          literal: "bloquear el camino",
          useWhen:
            "Una silla, caja, persona o bicicleta impide pasar cómodamente.",
          avoidWhen:
            "Habla de bloquear emocionalmente a alguien o frenar un plan. Esta frase es física y espacial.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["be in the way", "clear the way", "make room", "move over"],
          example: {
            target: "The chair blocks the path.",
            translation: "La silla tapa el paso."
          }
        }
      ],
      note:
        "Run no cubre exactamente el mismo mapa que correr. Sirve para ejercicio y carreras, pero el “corra” colombiano de afán suele ser “hurry up,” y “correr la silla” necesita “move the chair over.”",
      culture: [
        {
          label: "Cali empieza temprano por algo",
          body:
            "Hacer ejercicio en la mañana en Cali no es sólo disciplina; es estrategia climática. Una corrida agradable cerca del río antes del trabajo puede volverse dura más tarde. La hora cambia el tono de ambición deportiva a sentido común."
        },
        {
          label: "Easy es un pacto social",
          body:
            "Cuando alguien dice “let's run easy,” está cuidando la amistad tanto como las rodillas. La palabra promete que nadie va a convertir un plan casual en una prueba de orgullo."
        },
        {
          label: "Hurry up traduce el empujón",
          body:
            "Un “corra” colombiano puede vivir entre el chiste y la urgencia. En inglés, “hurry up” da ese empujón cuando el problema es el tiempo; “run” lo vuelve demasiado físico."
        },
        {
          label: "La silla no corre en inglés",
          body:
            "El uso transitivo “correr la silla” es común en Colombia, pero no pasa literal al inglés. “Move the chair over” o “slide the chair over” dicen exactamente lo que el cuerpo hace con el objeto."
        }
      ],
      pitfalls: [
        {
          mistake: "“Run the chair a little.”",
          whyItFails:
            "En inglés, esa frase no significa “correr la silla.” Run no funciona transitivamente con muebles en este sentido cotidiano.",
          sayInstead: "Move the chair over a little."
        },
        {
          mistake: "“Run, we're getting late.”",
          whyItFails:
            "Si el sentido es “apúrese,” el inglés natural es “hurry up.” “Run” obliga a imaginar que la persona debe salir corriendo literalmente.",
          sayInstead: "Hurry up, we're going to be late."
        },
        {
          mistake: "“Put me a race rhythm.”",
          whyItFails:
            "Es un calco de “poner ritmo.” El inglés usa “set a pace” para fijar la velocidad de una carrera.",
          sayInstead: "Don't set a professional race pace."
        },
        {
          mistake: "“We run twenty minutes.”",
          whyItFails:
            "Se entiende, pero con duraciones el aprendiz va más seguro usando “for.” La preposición prepara al oído para una cantidad de tiempo.",
          sayInstead: "We run for twenty minutes."
        }
      ],
      variations: [
        {
          form: "Let's run easy to the bridge.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Para fijar un plan de ejercicio suave con una meta cercana."
        },
        {
          form: "I'll run, but slowly.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para aceptar correr sin entregar el control del ritmo."
        },
        {
          form: "Hurry up, we're going to be late.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Para traducir un “corra” cuando la presión real es el horario."
        },
        {
          form: "Move the chair over a little.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para traducir “correr” un objeto que estorba en el paso."
        },
        {
          form: "We went jogging early.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para describir trotar por ejercicio sin hacerlo sonar como una carrera."
        }
      ],
      prompt: "Julian says “I need to move this chair over.” ¿Qué va a hacer?",
      choices: [
        "Va a desplazar la silla un poco para despejar el paso.",
        "Va a correr al lado de la silla como si entrenara.",
        "Va a sentarse en la silla y cancelar la corrida."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Manuela says “Hurry up, or we'll be late.” ¿Qué sentido cubre “hurry up”?",
          choices: [
            "La invitación a participar de inmediato en una carrera oficial.",
            "El empujón de apurarse porque el tiempo ya está apretando.",
            "La descripción de una silla que puede moverse por sí sola."
          ],
          answer: 1,
          tests: "hurry up para el correr de afán"
        },
        {
          prompt: "¿Qué promete “let's run easy” en esta escena?",
          choices: [
            "Van a competir seriamente hasta que alguien se rinda.",
            "Van a evitar el ejercicio y sólo hablar de correr.",
            "Van a correr a un ritmo suave que cuida la amistad."
          ],
          answer: 2,
          tests: "easy como ritmo suave y tranquilidad social"
        },
        {
          prompt: "¿Cuál frase traduce el uso transitivo colombiano?",
          choices: [
            "Move the chair over to clear the path.",
            "Run for twenty minutes by the river.",
            "Hurry up because it is getting late."
          ],
          answer: 0,
          tests: "move something over para “correr algo”"
        },
        {
          prompt: "¿Por qué run no traduce todos los casos de correr?",
          choices: [
            "Porque run nunca se usa para ejercicio ni movimiento a pie.",
            "Porque run no sirve naturalmente para mover muebles hacia un lado.",
            "Porque sólo se permite run cuando hablan atletas profesionales."
          ],
          answer: 1,
          tests: "no calcar run para “correr una silla”"
        }
      ]
    }
  },
  {
    id: "swimming-at-a-llanos-charco",
    level: "Developing · Moving your body",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "nadar",
    review: "pending",
    es: {
      title: "Nadar en un charco de los Llanos",
      situation:
        "Usted va con una familia de Villavicencio a pasar el domingo en un charco de río. El agua se ve tranquila, pero todos hablan con respeto: nadar, meterse al agua, flotar y no confiarse son partes del mismo plan.",
      setting: {
        who: "Don Álvaro knows the river and has brought cousins, food and a cooler. Priya swims well in pools but has never treated a river as the weekend destination.",
        what: "A family day at a natural swimming spot where the invitation to swim comes with warnings about current, depth and confidence.",
        when: "A bright Sunday morning, before lunch, while the rocks are still comfortable under bare feet.",
        where: "A charco outside Villavicencio in the Llanos foothills, where the water is fresh and the bank fills slowly with families.",
        why: "Because nadar is simple, but Colombian water culture often means rivers, not only pools or beaches. The useful language lives around entering, floating and staying safe."
      },
      address: {
        form: "usted",
        who: "Don Álvaro uses usted with Priya, and she uses usted back, even though the invitation is warm.",
        why: "In many Colombian family settings, usted can carry care and respect at the same time. Here it lets Don Álvaro be protective without sounding cold.",
        ifYouSwitch:
          "Tú would not destroy the scene, but it would make Priya sound more intimate with the family than she currently is. Usted keeps the first outing comfortable."
      },
      dialogue: [
        {
          speaker: "Don Álvaro",
          target: "¿Usted sí nada bien, o prefiere quedarse donde da pie?",
          translation: "Do you swim well, or would you rather stay where you can touch bottom?",
          pronunciation: "oos-TED see NAH-dah byen, oh pree-FYEH-reh keh-DAR-seh DON-deh dah PYEH",
          literal: "You yes swim well, or prefer to stay where it gives foot?",
          why: "The “sí” is not random. It asks for real confirmation, because river swimming deserves a more serious answer than pool confidence."
        },
        {
          speaker: "Priya",
          target: "Nado bien en piscina, pero en río prefiero ir despacio.",
          translation: "I swim well in a pool, but in a river I prefer to go slowly.",
          pronunciation: "NAH-doh byen en pee-SEE-nah, PEH-roh en RREE-oh pree-FYEH-roh eer des-PAH-syoh",
          literal: "I swim well in pool, but in river I prefer to go slowly.",
          why: "This is the mature answer. She claims the skill with nadar but adjusts it to the setting, which is exactly what a Colombian river asks of you."
        },
        {
          speaker: "Don Álvaro",
          target: "Entonces métase al agua por este lado, que aquí no jala tanto.",
          translation: "Then get in the water on this side; here it doesn't pull so much.",
          pronunciation: "en-TON-ses MEH-tah-seh al AH-gwah por ES-teh LAH-doh, keh ah-KEE no HAH-lah TAHN-toh",
          literal: "Then put-yourself into-the water by this side, because here it doesn't pull so much.",
          why: "“Meterse al agua” is the everyday phrase for getting into the water. The river “jala” because current pulls; nobody is personifying it for poetry."
        },
        {
          speaker: "Priya",
          target: "Primero voy a flotar un momento y después nado hasta esa piedra.",
          translation: "First I'm going to float for a moment and then I'll swim to that rock.",
          pronunciation: "pree-MEH-roh boy ah floh-TAR oon moh-MEN-toh ee des-PWES NAH-doh AHS-tah EH-sah PYEH-drah",
          literal: "First I go to float a moment and afterward I swim until that rock.",
          why: "“Flotar” belongs beside nadar because it is often the safe first step: feel the water before turning the outing into a distance goal."
        },
        {
          speaker: "Don Álvaro",
          target: "Eso, pero no se confíe; en los charcos hondos uno se puede ahogar.",
          translation: "That's it, but don't get overconfident; in deep swimming holes you can drown.",
          pronunciation: "EH-soh, PEH-roh no seh kon-FYEH; en los CHAR-kos ON-dos OO-noh seh PWEH-deh ah-oh-GAR",
          literal: "That, but don't trust yourself; in the deep pools one can drown.",
          why: "The warning is blunt because the setting is real. “Ahogarse” is a word you want to understand long before anyone needs it."
        },
        {
          speaker: "Priya",
          target: "Sí, yo nado cerca de ustedes y salgo si siento la corriente fuerte.",
          translation: "Yes, I'll swim near you and get out if I feel a strong current.",
          pronunciation: "see, yo NAH-doh SER-kah deh oos-TEH-des ee SAHL-goh see SYEN-toh lah koh-RRYEN-teh FWER-teh",
          literal: "Yes, I swim near you all and I get out if I feel the current strong.",
          why: "The present tense “nado” lays out the plan like a promise. She is not proving bravery; she is showing she understood the river."
        }
      ],
      vocabulary: [
        {
          term: "nadar",
          explanation:
            "To swim. The verb is straightforward, but the setting changes how careful the sentence needs to be.",
          literal: "to swim",
          useWhen:
            "Talking about swimming in a pool, river, sea, lake or any place where the body moves through water.",
          avoidWhen:
            "You only mean getting into the water. “Meterse al agua” can happen before anyone actually swims.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["flotar", "meterse al agua", "bañarse", "ahogarse"],
          example: {
            target: "Nado bien en piscina.",
            translation: "I swim well in a pool."
          }
        },
        {
          term: "charco",
          explanation:
            "In Colombian weekend talk, a natural swimming hole in a river or stream, not just a puddle.",
          literal: "puddle",
          useWhen:
            "Someone says they are going to a river spot to bathe, swim, eat nearby and spend the day.",
          avoidWhen:
            "You are translating into English without context. “Puddle” makes it sound tiny and muddy; “swimming hole” is often closer.",
          register: "friendly informal",
          region: "Common Colombian usage for river outings.",
          related: ["balneario", "río", "pozo", "quebrada"],
          example: {
            target: "Vamos a nadar en un charco.",
            translation: "We're going swimming at a river swimming hole."
          }
        },
        {
          term: "meterse al agua",
          explanation:
            "To get into the water. It says you enter the water, not necessarily that you swim.",
          literal: "to put oneself into the water",
          useWhen:
            "Someone is stepping into a pool, river or sea, especially before the actual swimming starts.",
          avoidWhen:
            "You need to say the person swam a distance. Then use nadar.",
          register: "neutral",
          region: "General Colombian.",
          related: ["entrar al agua", "bañarse", "mojarse", "meter los pies"],
          example: {
            target: "Métase al agua por este lado.",
            translation: "Get in the water on this side."
          }
        },
        {
          term: "flotar",
          explanation:
            "To float. In open water it can be a skill, a pause, or a way to stay calm.",
          literal: "to float",
          useWhen:
            "You are letting the water hold you up, checking the current, resting or teaching someone not to panic.",
          avoidWhen:
            "You mean swimming with strokes toward a place. Floating may involve almost no forward movement.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["nadar", "respirar", "hacer patada", "relajarse"],
          example: {
            target: "Primero voy a flotar.",
            translation: "First I'm going to float."
          }
        },
        {
          term: "ahogarse",
          explanation:
            "To drown. A hard word, but not a dramatic one when people are discussing river safety seriously.",
          literal: "to drown oneself",
          useWhen:
            "Warning about water danger, currents, depth or someone who cannot swim.",
          avoidWhen:
            "You only mean choking on food or feeling overwhelmed figuratively. Other expressions may fit better.",
          register: "serious",
          region: "Universal Spanish.",
          related: ["cuidarse", "corriente", "hondo", "pedir ayuda"],
          example: {
            target: "Uno se puede ahogar en un charco hondo.",
            translation: "You can drown in a deep swimming hole."
          }
        },
        {
          term: "dar pie",
          explanation:
            "For water to be shallow enough that your feet touch the bottom and you can stand.",
          literal: "to give foot",
          useWhen:
            "Checking whether a pool, river edge or beach area is safe for someone who does not want deep water.",
          avoidWhen:
            "You are talking about permission or opportunity. “Dar pie a” can also mean to give rise to something, a different expression.",
          register: "neutral",
          region: "General Spanish.",
          related: ["hondo", "pando", "orilla", "profundo"],
          example: {
            target: "Quédese donde da pie.",
            translation: "Stay where you can touch bottom."
          }
        },
        {
          term: "corriente",
          explanation:
            "Current: the movement of river or sea water that can push or pull a swimmer.",
          literal: "current",
          useWhen:
            "Talking about whether the water is safe, strong, calm, deceptive or changing.",
          avoidWhen:
            "You mean electricity in a house. It can mean that too, but the context must be clear.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["jala", "río", "remolino", "orilla"],
          example: {
            target: "Siento la corriente fuerte.",
            translation: "I feel the strong current."
          }
        }
      ],
      note:
        "Nadar is the easy verb; the Colombian setting makes it richer. A weekend swim may mean a river charco, not a tiled pool, and the best speaker is not the bravest one but the one who knows how to talk about current, depth and getting out.",
      culture: [
        {
          label: "A charco is a destination",
          body:
            "For many Colombians, especially outside the biggest cities, “ir a un charco” is a normal weekend plan: river water, rocks, food, family and a whole day outdoors. Translating it as “puddle” erases the outing."
        },
        {
          label: "Rivers are ordinary, not exotic",
          body:
            "English-speaking visitors often expect swimming to mean pools or beaches. In Colombia, rivers and quebradas are everyday leisure spaces when geography allows it. The language around swimming reflects that."
        },
        {
          label: "Respect is part of the invitation",
          body:
            "A Colombian warning about depth or current is not meant to kill the mood. It is what lets the mood continue. People who know a river talk about it plainly because they want everyone to enjoy it and leave safely."
        },
        {
          label: "Usted can sound protective",
          body:
            "Don Álvaro's usted is not icy. In a family outing, especially with someone newer to the group, it can carry care, age and responsibility all at once."
        }
      ],
      pitfalls: [
        {
          mistake: "Translating “charco” as “puddle” in a weekend plan",
          whyItFails:
            "In Colombia, “ir a un charco” often means going to a natural river swimming spot. “Puddle” makes the destination sound absurdly small.",
          sayInstead: "Think “swimming hole” or “river spot,” depending on context."
        },
        {
          mistake: "Using “nadar” when someone only gets into the water",
          whyItFails:
            "A person can “meterse al agua” and still stand, float, splash or sit on a rock. Nadar requires swimming movement.",
          sayInstead: "Me metí al agua un rato."
        },
        {
          mistake: "Ignoring “donde da pie”",
          whyItFails:
            "That phrase marks the safe shallow area where your feet can touch. Missing it changes a careful suggestion into a vague location.",
          sayInstead: "Quédese donde da pie."
        },
        {
          mistake: "Treating river warnings as overdramatic",
          whyItFails:
            "Words like corriente and ahogarse belong in ordinary safety talk. The warning is not theatrical; it is part of knowing the place.",
          sayInstead: "No se confíe si la corriente está fuerte."
        }
      ],
      variations: [
        {
          form: "Nado bien en piscina.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Claiming the skill while still leaving room for a different open-water setting."
        },
        {
          form: "¿Usted sí nada bien?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Checking someone's actual ability before entering a river or deep water."
        },
        {
          form: "Métase al agua por este lado.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Guiding someone toward the safer entry point before swimming."
        },
        {
          form: "Primero voy a flotar.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Taking a careful first step in unfamiliar water."
        },
        {
          form: "No se confíe con la corriente.",
          register: "serious",
          region: "General Colombian",
          whenToUse: "Warning someone not to underestimate moving water."
        }
      ],
      prompt: "Priya says “Nado bien en piscina, pero en río prefiero ir despacio.” What is she doing?",
      choices: [
        "She is claiming skill while adjusting carefully to a different kind of water.",
        "She is refusing to enter any water because she cannot swim at all.",
        "She is saying rivers and pools require exactly the same behaviour."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "What does “charco” mean in this Colombian weekend scene?",
          choices: [
            "A tiny puddle in the street after a short rain.",
            "A natural river swimming hole where people spend the day.",
            "A private tiled pool inside an apartment building."
          ],
          answer: 1,
          tests: "charco as Colombian river destination rather than puddle"
        },
        {
          prompt: "Why does Don Álvaro ask “¿Usted sí nada bien?”",
          choices: [
            "Because he wants Priya to compete against professional swimmers.",
            "Because he thinks swimming pools do not contain real water.",
            "Because river swimming deserves real confirmation, not casual confidence."
          ],
          answer: 2,
          tests: "the confirming sí in a safety question"
        },
        {
          prompt: "Which phrase only says someone entered the water?",
          choices: [
            "Me metí al agua por este lado.",
            "Nadé hasta la piedra grande.",
            "Crucé el río nadando suave."
          ],
          answer: 0,
          tests: "meterse al agua versus nadar"
        },
        {
          prompt: "What does “donde da pie” tell a swimmer?",
          choices: [
            "The rocks are too hot for anyone to stand barefoot.",
            "The water is shallow enough for feet to touch bottom.",
            "The current is strong enough to pull adults underwater."
          ],
          answer: 1,
          tests: "dar pie as safe standing depth"
        }
      ]
    },
    en: {
      title: "Nadar en un charco de los Llanos",
      situation:
        "Usted va con una familia de Villavicencio a pasar el domingo en un charco de río. El agua se ve tranquila, pero en inglés necesita hablar con precisión sobre swim, get in the water, float y drown sin perder el respeto por el lugar.",
      setting: {
        who: "Alvaro conoce el río y llevó primos, comida y una nevera. Paula nada bien en piscina, pero nunca ha tratado un río como destino normal de domingo.",
        what: "Un día familiar en un sitio natural para bañarse, donde la invitación a nadar viene con advertencias sobre corriente, profundidad y exceso de confianza.",
        when: "Un domingo luminoso por la mañana, antes del almuerzo, cuando las piedras todavía se dejan pisar descalzo.",
        where: "Un charco cerca de Villavicencio, en el piedemonte llanero, con agua fresca y una orilla que se va llenando de familias.",
        why: "Porque swim es directo, pero la conversación útil alrededor del agua incluye entrar, flotar, tocar fondo, corrientes y ahogarse."
      },
      address: {
        form: "mixed",
        who: "Alvaro y Paula usan el mismo “you” en inglés, aunque el español de la escena mantendría usted por cuidado y respeto.",
        why: "El inglés no puede poner esa protección en un pronombre. La pone en preguntas completas, tono calmado y verbos exactos como “stay,” “float” y “get out.”",
        ifYouSwitch:
          "No existe un usted inglés para activar. Decir “ma'am” o “sir” en cada línea volvería artificial una salida familiar al río."
      },
      dialogue: [
        {
          speaker: "Alvaro",
          target: "Can you swim well, or would you rather stay where you can touch bottom?",
          translation: "¿Usted sí nada bien, o prefiere quedarse donde da pie?",
          pronunciation: "kan yu suim uel, or wud yu RA-der stei juer yu kan toch BA-tom",
          literal: "¿Puede usted nadar bien, o preferiría quedarse donde puede tocar fondo?",
          why: "“Can you swim well?” pregunta por capacidad real. En agua abierta, esa pregunta no es cortesía vacía sino parte de la seguridad."
        },
        {
          speaker: "Paula",
          target: "I swim well in a pool, but in a river I prefer to take it slowly.",
          translation: "Nado bien en piscina, pero en río prefiero ir despacio.",
          pronunciation: "ai suim uel in a pul, bot in a RI-ver ai pri-FER tu teik it SLO-li",
          literal: "Nado bien en una piscina, pero en un río prefiero tomarlo lentamente.",
          why: "“Take it slowly” dice más que “go slowly”: muestra una decisión prudente, no sólo una velocidad baja."
        },
        {
          speaker: "Alvaro",
          target: "Then get in the water on this side; the current doesn't pull as hard here.",
          translation: "Entonces métase al agua por este lado, que aquí no jala tanto.",
          pronunciation: "den get in da UA-ter on dis said; da KO-rent DA-sent pul as jard jir",
          literal: "Entonces entre en el agua por este lado; la corriente no hala tan duro aquí.",
          why: "“Get in the water” no significa nadar todavía. Sólo marca la entrada al agua, igual que “meterse al agua.”"
        },
        {
          speaker: "Paula",
          target: "First I'll float for a moment, and then I'll swim to that rock.",
          translation: "Primero voy a flotar un momento y después nado hasta esa piedra.",
          pronunciation: "ferst ail flout for a MO-ment, and den ail suim tu dat rok",
          literal: "Primero flotaré por un momento, y después nadaré a esa roca.",
          why: "“Float” acompaña muy bien a “swim” porque separa estar en el agua de avanzar con brazadas. En un río, esa diferencia importa."
        },
        {
          speaker: "Alvaro",
          target: "That's right, but don't get overconfident; people can drown in deep swimming holes.",
          translation: "Eso, pero no se confíe; en los charcos hondos uno se puede ahogar.",
          pronunciation: "dats rait, bot dount get ou-ver-KON-fi-dent; PI-pol kan draun in dip SUIM-ing jouls",
          literal: "Eso es correcto, pero no se ponga sobreconfiada; la gente puede ahogarse en huecos de natación profundos.",
          why: "“Drown” es una palabra dura pero necesaria. No la cambie por “sink”; hundirse y ahogarse no son lo mismo."
        },
        {
          speaker: "Paula",
          target: "Yes, I'll swim near you and get out if I feel a strong current.",
          translation: "Sí, yo nado cerca de ustedes y salgo si siento la corriente fuerte.",
          pronunciation: "yes, ail suim nir yu and get aut if ai fil a strong KO-rent",
          literal: "Sí, nadaré cerca de ustedes y saldré si siento una corriente fuerte.",
          why: "“Get out” es el verbo simple y correcto para salir del agua. En seguridad, las frases cortas ganan."
        }
      ],
      vocabulary: [
        {
          term: "swim",
          explanation:
            "Nadar. El verbo es directo, pero el lugar cambia cuánta prudencia debe llevar la frase.",
          literal: "nadar",
          useWhen:
            "Habla de nadar en piscina, río, mar, lago o cualquier lugar donde el cuerpo se mueve por el agua.",
          avoidWhen:
            "Sólo quiere decir que alguien entró al agua. “Get in the water” puede pasar antes de que alguien nade.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["float", "get in the water", "bathe", "drown"],
          example: {
            target: "I swim well in a pool.",
            translation: "Nado bien en piscina."
          }
        },
        {
          term: "swimming hole",
          explanation:
            "Un charco de río donde la gente se mete al agua, nada y pasa el día. No es un hueco cualquiera.",
          literal: "hueco de natación",
          useWhen:
            "Traduce un charco natural usado para bañarse o nadar durante una salida de río.",
          avoidWhen:
            "Habla de una piscina construida. Ahí diga “pool.”",
          register: "neutral",
          region: "Inglés universal; suena especialmente natural para ríos y quebradas.",
          related: ["river spot", "pool", "creek", "watering hole"],
          example: {
            target: "We're going swimming at a river swimming hole.",
            translation: "Vamos a nadar en un charco de río."
          }
        },
        {
          term: "get in the water",
          explanation:
            "Meterse al agua. Dice que alguien entra al agua, no necesariamente que ya está nadando.",
          literal: "entrar en el agua",
          useWhen:
            "Alguien pisa una piscina, un río o el mar, especialmente antes de empezar a nadar.",
          avoidWhen:
            "Necesita decir que la persona nadó una distancia. Ahí use “swim.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["go in", "step in", "get wet", "wade in"],
          example: {
            target: "Get in the water on this side.",
            translation: "Métase al agua por este lado."
          }
        },
        {
          term: "float",
          explanation:
            "Flotar. En agua abierta puede ser una habilidad, una pausa o una manera de calmarse.",
          literal: "flotar",
          useWhen:
            "Deja que el agua sostenga el cuerpo, revisa la corriente, descansa o le enseña a alguien a no entrar en pánico.",
          avoidWhen:
            "Quiere decir nadar con brazadas hacia un lugar. Flotar puede no avanzar casi nada.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["swim", "breathe", "kick", "relax"],
          example: {
            target: "First I'll float for a moment.",
            translation: "Primero voy a flotar un momento."
          }
        },
        {
          term: "drown",
          explanation:
            "Ahogarse en el agua. Es una palabra fuerte, pero normal cuando se habla de seguridad.",
          literal: "ahogarse",
          useWhen:
            "Advierte sobre peligro en el agua, corrientes, profundidad o alguien que no sabe nadar.",
          avoidWhen:
            "Quiere decir que alguien se está atragantando con comida. Eso es “choke,” no “drown.”",
          register: "serious",
          region: "Inglés universal.",
          related: ["be careful", "current", "deep", "call for help"],
          example: {
            target: "People can drown in deep swimming holes.",
            translation: "Uno se puede ahogar en charcos hondos."
          }
        },
        {
          term: "touch bottom",
          explanation:
            "Tocar fondo con los pies. Sirve para hablar de agua suficientemente panda para pararse.",
          literal: "tocar fondo",
          useWhen:
            "Quiere saber si una piscina, orilla de río o zona de playa es segura para alguien que no quiere agua profunda.",
          avoidWhen:
            "Habla de tocar fondo emocionalmente. Esa metáfora existe, pero no es la escena del río.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["shallow", "deep", "stand up", "the bank"],
          example: {
            target: "Stay where you can touch bottom.",
            translation: "Quédese donde da pie."
          }
        },
        {
          term: "current",
          explanation:
            "Corriente: el movimiento del agua de un río o del mar que puede empujar o jalar a quien nada.",
          literal: "corriente",
          useWhen:
            "Habla de si el agua es segura, fuerte, tranquila, engañosa o cambiante.",
          avoidWhen:
            "Quiere decir actual como adjetivo. “Current” también significa actual, pero el contexto decide.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["pull", "river", "undertow", "bank"],
          example: {
            target: "I feel a strong current.",
            translation: "Siento la corriente fuerte."
          }
        }
      ],
      note:
        "Swim es el verbo fácil; el río vuelve la escena más precisa. Para hablar bien del plan hacen falta “get in the water,” “float,” “touch bottom,” “current” y “drown.” La seguridad también es vocabulario.",
      culture: [
        {
          label: "Swimming hole salva la idea",
          body:
            "Para muchos colombianos, “ir a un charco” es un plan normal de fin de semana: río, piedras, comida, familia y un día al aire libre. “Puddle” borra el plan; “swimming hole” lo vuelve entendible."
        },
        {
          label: "Los ríos son cotidianos",
          body:
            "Muchos visitantes angloparlantes esperan que nadar signifique piscina o playa. En Colombia, los ríos y quebradas son espacios comunes de descanso cuando la geografía lo permite. El inglés que usted escoja debe dejar ver eso."
        },
        {
          label: "La advertencia no daña el paseo",
          body:
            "Hablar de corriente o de ahogarse no es dramatizar. Es lo que permite que la salida siga tranquila. Quien conoce un río habla claro porque quiere que todos disfruten y salgan bien."
        },
        {
          label: "El inglés cuida con frases completas",
          body:
            "Como no tiene usted, el inglés pone el cuidado en otra parte: “Can you swim well?”, “stay where you can touch bottom,” “get out if…” La precisión reemplaza el pronombre."
        }
      ],
      pitfalls: [
        {
          mistake: "“We're going to a puddle.”",
          whyItFails:
            "Como traducción de “vamos a un charco,” hace imaginar agua sucia en la calle. En una salida de río, el inglés necesita otra imagen.",
          sayInstead: "We're going to a river swimming hole."
        },
        {
          mistake: "“I swam into the water.”",
          whyItFails:
            "Si sólo entró al agua, use “got in the water.” “Swim into” sugiere que ya venía nadando hacia adentro.",
          sayInstead: "I got in the water for a while."
        },
        {
          mistake: "“Where it gives foot.”",
          whyItFails:
            "Es el calco de “donde da pie,” pero el inglés habla desde el cuerpo de la persona: where you can touch bottom.",
          sayInstead: "Stay where you can touch bottom."
        },
        {
          mistake: "“People can sink in deep water.”",
          whyItFails:
            "Sink es hundirse; drown es ahogarse. En una advertencia de seguridad, la diferencia no es decorativa.",
          sayInstead: "People can drown in deep water."
        }
      ],
      variations: [
        {
          form: "I swim well in a pool.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para afirmar la habilidad y dejar espacio para que el agua abierta sea distinta."
        },
        {
          form: "Can you swim well?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para comprobar la capacidad real antes de entrar a un río o agua profunda."
        },
        {
          form: "Get in the water on this side.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para guiar a alguien hacia la entrada más segura antes de nadar."
        },
        {
          form: "First I'll float for a moment.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para tomar un primer paso prudente en agua desconocida."
        },
        {
          form: "Don't get overconfident with the current.",
          register: "serious",
          region: "Inglés universal",
          whenToUse: "Para advertirle a alguien que no subestime el agua en movimiento."
        }
      ],
      prompt: "Paula says “I swim well in a pool, but in a river I prefer to take it slowly.” ¿Qué está haciendo?",
      choices: [
        "Afirma su habilidad mientras se ajusta con cuidado a otra clase de agua.",
        "Se niega a entrar al agua porque no sabe nadar en absoluto.",
        "Dice que los ríos y las piscinas exigen exactamente lo mismo."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Qué traduce mejor “charco” en esta salida colombiana?",
          choices: [
            "A tiny street puddle after a short passing rain.",
            "A natural river swimming hole where people spend the day.",
            "A private tiled pool inside an apartment building."
          ],
          answer: 1,
          tests: "swimming hole para el charco de río"
        },
        {
          prompt: "¿Por qué Alvaro pregunta “Can you swim well?”",
          choices: [
            "Because he wants Paula to compete against professional swimmers.",
            "Because he thinks swimming pools do not contain real water.",
            "Because river swimming deserves real confirmation, not casual confidence."
          ],
          answer: 2,
          tests: "can you swim well como pregunta de seguridad"
        },
        {
          prompt: "¿Cuál frase sólo dice que alguien entró al agua?",
          choices: [
            "I got in the water on this side.",
            "I swam to the large rock.",
            "I crossed the river swimming."
          ],
          answer: 0,
          tests: "get in the water versus swim"
        },
        {
          prompt: "¿Qué informa “where you can touch bottom”?",
          choices: [
            "The rocks are too hot for anyone to stand barefoot.",
            "The water is shallow enough for feet to touch bottom.",
            "The current is strong enough to pull adults underwater."
          ],
          answer: 1,
          tests: "touch bottom para “dar pie”"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/27-developing-moving-your-body.js");
