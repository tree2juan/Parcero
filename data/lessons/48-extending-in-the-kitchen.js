/*
 * Lesson block: extension / kitchen actions that travel beyond the kitchen.
 *
 * Cortar, mezclar and echar all begin with food, but the useful Colombian
 * Spanish is what happens when they leave the recipe: power cuts, dropped
 * calls, curdled milk, careful mixing and the many idioms carried by echar.
 */
lessons.push(
  {
    id: "cutting-fish-when-the-power-goes-out-in-buenaventura",
    level: "Extending · Kitchen actions and interruptions",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "courteous",
    pathways: ["extension"],
    verb: "cortar",
    review: "pending",
    es: {
      title: "Cortar pescado cuando se corta la luz",
      situation:
        "En Buenaventura, Alex ayuda a doña Elvira a preparar pescado para un almuerzo familiar. La conversación no se queda en la tabla de picar: mientras ella le pide que corte el plátano más delgado, se corta la luz, se le corta una llamada y aparece la advertencia de que la leche de coco se puede cortar si la tratan mal.",
      setting: {
        who: "Doña Elvira is an older host who cooks for a large family without turning the kitchen into a class. Alex is a guest who wants to help and to understand the phrases that suddenly stop being about knives.",
        what: "A shared kitchen job: slicing fish and plantain, then dealing with a power outage, a dropped call and the warning that coconut milk can split.",
        when: "Late morning, with lunch expected soon and everyone walking through the kitchen asking whether it is ready yet.",
        where: "Buenaventura, Valle del Cauca, in a family kitchen near the port.",
        why: "Because cortar looks simple until it becomes the verb for services and connections failing. A learner who only knows cutting vegetables will miss “se cortó la luz” and “se me cortó la llamada” exactly when they need them."
      },
      address: {
        form: "usted",
        who: "Alex uses usted with doña Elvira because she is older, he is a guest in her kitchen and she is directing the work.",
        why: "Usted lets the help stay respectful while the scene remains warm. In a Colombian family kitchen, formality and affection can sit together very naturally.",
        ifYouSwitch:
          "Tú would sound too familiar from Alex to an older host who is not his relative. The food may be casual, but the relationship still asks for a courteous pronoun."
      },
      dialogue: [
        {
          speaker: "Doña Elvira",
          target: "Alex, córtelo en tiras delgadas, para que el pescado no se desbarate.",
          translation: "Alex, cut it into thin strips so the fish doesn't fall apart.",
          pronunciation: "A-leks, KOR-te-lo en TEE-ras del-GA-das, PA-ra ke el pes-KA-do no se des-ba-RA-te",
          literal: "Alex, cut-it in strips thin, so that the fish not itself fall-apart.",
          why: "“Córtelo” is an usted command with the object pronoun attached. The stress would normally fall on cor-, and the written accent preserves it once “lo” is added."
        },
        {
          speaker: "Alex",
          target: "¿Así está bien, o lo corto más pequeño antes de echarlo al guiso?",
          translation: "Is this right, or should I cut it smaller before putting it into the stew base?",
          pronunciation: "a-SEE es-TA byen, o lo KOR-to mas pe-KE-nyo AN-tes de e-CHAR-lo al GEE-so",
          literal: "Thus is well, or it I-cut more small before to-put-it to-the stew-base?",
          why: "Plain “lo corto” is the physical kitchen sense. The sentence is longer because this is extension-level language: Alex checks the size before the next action rather than naming a single verb."
        },
        {
          speaker: "Doña Elvira",
          target: "Más pequeño no; si lo corta demasiado, se vuelve pura migaja.",
          translation: "Not smaller; if you cut it too much, it turns into nothing but crumbs.",
          pronunciation: "mas pe-KE-nyo no; si lo KOR-ta de-ma-SYA-do, se VWEL-ve PU-ra mi-GA-ha",
          literal: "More small no; if it you-cut too-much, itself becomes pure crumb.",
          why: "“Si lo corta demasiado” shows cortar inside a subordinate clause. It is ordinary speech, not a recipe transcript: the host is preventing a likely mistake."
        },
        {
          speaker: "Alex",
          target: "Uy, se cortó la luz. ¿Seguimos cocinando así?",
          translation: "Whoa, the power went out. Do we keep cooking like this?",
          pronunciation: "ui, se kor-TO la lus. se-GEE-mos ko-si-NAN-do a-SEE",
          literal: "Whoa, itself cut the light. We-continue cooking like this?",
          why: "“Se cortó la luz” is the Colombian everyday phrase for the power going out. No one cut a wire; the service was interrupted, and the reflexive “se” presents it as something that happened."
        },
        {
          speaker: "Doña Elvira",
          target: "Seguimos, pero llame rápido a su amigo antes de que se le corte la llamada.",
          translation: "We keep going, but call your friend quickly before your call drops.",
          pronunciation: "se-GEE-mos, PE-ro YA-me RRA-pi-do a su a-MEE-go AN-tes de ke se le KOR-te la ya-MA-da",
          literal: "We-continue, but call quickly to your friend before that itself to-you cuts the call.",
          why: "“Se le corte la llamada” uses the subjunctive after “antes de que”. The little “le” matters: the call drops on him, a very Colombian way to frame a technical failure."
        },
        {
          speaker: "Doña Elvira",
          target: "Y no hierva duro la leche de coco, que se corta y daña la salsa.",
          translation: "And don't boil the coconut milk hard, because it splits and ruins the sauce.",
          pronunciation: "ee no YER-va DU-ro la LE-che de KO-ko, ke se KOR-ta ee DA-nya la SAL-sa",
          literal: "And not boil hard the milk of coconut, that itself cuts and damages the sauce.",
          why: "Milk “se corta” when it curdles or splits. This is not a service outage but the same image of something separating when it should stay whole."
        }
      ],
      vocabulary: [
        {
          term: "cortar",
          explanation:
            "The basic verb for cutting with a knife, scissors or any sharp tool, but also the verb behind several interruption phrases.",
          literal: "to cut",
          useWhen:
            "Cutting food, paper, fabric or a physical connection: “corte el plátano”, “corté el cable”.",
          avoidWhen:
            "You mean serving or dividing food at the table; there may be more specific verbs such as partir or repartir.",
          register: "neutral",
          region: "Universal Spanish; the service-interruption uses are very common in Colombia.",
          related: ["picar", "partir", "rebanar", "interrumpir"],
          example: {
            target: "Corte el pescado en tiras.",
            translation: "Cut the fish into strips."
          }
        },
        {
          term: "córtelo",
          explanation:
            "The usted command with an attached object pronoun: cut it. The accent keeps the original stress after “lo” is attached.",
          literal: "cut it",
          useWhen:
            "Giving a respectful instruction in a kitchen, workshop or service setting: “córtelo aquí”.",
          avoidWhen:
            "Speaking to a close friend in tú, where the command is “córtalo”.",
          register: "polite neutral",
          region: "Universal Spanish.",
          related: ["córtalo", "corte", "lo", "imperativo"],
          example: {
            target: "Córtelo más delgado.",
            translation: "Cut it thinner."
          }
        },
        {
          term: "se cortó la luz",
          explanation:
            "The power went out. Spanish frames the service as having cut itself off rather than saying someone cut it.",
          literal: "the light cut itself",
          useWhen:
            "Electricity suddenly fails: “se cortó la luz”, “se fue la luz” is also very common.",
          avoidWhen:
            "You are talking about physically cutting a lamp, cable or bulb; then cortar is literal and needs an object.",
          register: "neutral",
          region: "General Spanish; “se fue la luz” is especially common in Colombia too.",
          related: ["irse la luz", "apagón", "electricidad", "servicio"],
          example: {
            target: "Se cortó la luz mientras cocinábamos.",
            translation: "The power went out while we were cooking."
          }
        },
        {
          term: "se cortó el agua",
          explanation:
            "The water service was cut off or went out, the same service-interruption pattern as the power.",
          literal: "the water cut itself",
          useWhen:
            "Water stops running at home or in a neighborhood: “se cortó el agua desde temprano”.",
          avoidWhen:
            "You mean you turned off a faucet yourself; that is cerrar la llave or cortar el agua deliberately.",
          register: "neutral",
          region: "Universal Spanish; fully natural in Colombia.",
          related: ["servicio de agua", "llave", "tanque", "racionamiento"],
          example: {
            target: "Se cortó el agua en la mañana.",
            translation: "The water went out in the morning."
          }
        },
        {
          term: "se me cortó la llamada",
          explanation:
            "My call dropped. The “me” marks that the interruption happened to me, not that I chose it.",
          literal: "the call cut itself on me",
          useWhen:
            "Phone signal fails, especially while explaining why you disappeared from a call.",
          avoidWhen:
            "You intentionally hung up; that is “colgué” or “corté la llamada” on purpose.",
          register: "neutral",
          region: "Universal Spanish; very useful in Colombian phone life.",
          related: ["colgar", "se cayó la llamada", "señal", "comunicación"],
          example: {
            target: "Perdón, se me cortó la llamada.",
            translation: "Sorry, my call dropped."
          }
        },
        {
          term: "se cortó la leche",
          explanation:
            "The milk curdled or split, used for dairy and sauces that separate when heat or acid changes them.",
          literal: "the milk cut itself",
          useWhen:
            "Milk, cream or coconut milk separates and ruins the texture.",
          avoidWhen:
            "The food spoiled generally; then “se dañó” or “se echó a perder” may be broader.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["cuajarse", "dañarse", "hervir", "salsa"],
          example: {
            target: "Se cortó la leche de coco.",
            translation: "The coconut milk split."
          }
        },
        {
          term: "cortar demasiado",
          explanation:
            "To cut too much or too small, a practical warning when texture matters.",
          literal: "to cut too much",
          useWhen:
            "Food will fall apart, dry out or cook unevenly if the pieces are too small.",
          avoidWhen:
            "You mean overcooking; that is a heat problem, not a cutting problem.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["tiras", "trozos", "pedazos", "migaja"],
          example: {
            target: "No lo corte demasiado.",
            translation: "Don't cut it too much."
          }
        }
      ],
      note:
        "Cortar starts with the knife but becomes a verb for interruption and separation. In a kitchen you hear “córtelo” and “lo corto”; when the service fails, “se cortó la luz” or “se cortó el agua”; when technology fails, “se me cortó la llamada”; and when milk or coconut milk splits, “se cortó la leche”. The pronouns show whether someone did the cutting or whether the failure happened by itself, or happened to you.",
      culture: [
        {
          label: "A power cut is normal speech, not drama",
          body:
            "In Colombian Spanish, “se cortó la luz” and “se fue la luz” are everyday phrases. They do not imply disaster or blame; they simply report that the electricity stopped. In a coastal kitchen, people may keep cooking with gas, open the door for air and carry on. Knowing the phrase matters because it turns a confusing household interruption into something you can explain calmly."
        },
        {
          label: "Buenaventura without invented slang",
          body:
            "Buenaventura gives this lesson a Pacific kitchen, fish, heat and the practical pressure of feeding people. The Spanish stays general because the goal is not to decorate the scene with guessed local words. A normal conversation in a less overused place already broadens the course. The local setting matters through the food and the port-city kitchen rhythm, not through forced dialect."
        },
        {
          label: "Dropped calls need the little pronoun",
          body:
            "“Se me cortó la llamada” is a small masterpiece of Spanish responsibility. The call dropped on me; I did not hang up. That “me” protects you socially when a conversation disappears. Without it, “corté la llamada” sounds like you cut the call yourself. This is one of those places where pronouns carry the apology."
        },
        {
          label: "Coconut milk can split too",
          body:
            "Cortar also names what happens when milk, cream or coconut milk separates. In cooking, that matters because the sauce may look grainy or broken even if the flavor survives. English says curdle or split; Spanish says “se cortó”. It is the same image as a cut service or a cut call: something that should have stayed whole has separated."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “corté la llamada” when the signal failed",
          whyItFails:
            "“Corté la llamada” sounds like you ended the call deliberately. If the signal failed, the call dropped on you, so Spanish needs “se me cortó la llamada”. The pronoun changes the social meaning.",
          sayInstead: "Perdón, se me cortó la llamada."
        },
        {
          mistake: "Translating “the power went out” as “la luz salió”",
          whyItFails:
            "Spanish does not use salir here. Colombians say “se fue la luz” or “se cortó la luz”. Both are normal; “la luz salió” sounds like the light walked out of the room.",
          sayInstead: "Se fue la luz. / Se cortó la luz."
        },
        {
          mistake: "Forgetting the accent in “córtelo”",
          whyItFails:
            "When “lo” attaches to the usted command, the original stress needs a written accent: córtelo. Without it, the spelling no longer shows the command's stress correctly.",
          sayInstead: "Córtelo en tiras."
        },
        {
          mistake: "Using “se dañó” for milk that split",
          whyItFails:
            "“Se dañó” says it spoiled or went bad. If heat or acid made the milk separate in the sauce, the precise kitchen phrase is “se cortó la leche”.",
          sayInstead: "Se cortó la leche de coco."
        }
      ],
      variations: [
        {
          form: "Córtelo en tiras.",
          register: "polite neutral",
          region: "Universal Spanish",
          whenToUse: "Giving an usted kitchen instruction with an attached pronoun."
        },
        {
          form: "Se cortó la luz.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "The power went out."
        },
        {
          form: "Se me cortó la llamada.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Explaining that your call dropped."
        },
        {
          form: "Se cortó la leche.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Milk or a dairy sauce split."
        },
        {
          form: "No lo corte tan pequeño.",
          register: "polite neutral",
          region: "Universal Spanish",
          whenToUse: "Warning someone that the pieces are too small."
        }
      ],
      prompt: "Doña Elvira says “se cortó la luz.” What happened?",
      choices: [
        "Someone sliced a lamp with a knife.",
        "The fish was cut into thin strips.",
        "The power went out in the kitchen."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Which sentence means “my call dropped”?",
          choices: [
            "Se me cortó la llamada.",
            "Corté la llamada.",
            "La llamada cortó el celular."
          ],
          answer: 0,
          tests: "se me cortó = it dropped on me"
        },
        {
          prompt: "Which usted command correctly says “cut it”?",
          choices: [
            "Cortelo en tiras.",
            "Córtelo en tiras.",
            "Corta lo en tiras."
          ],
          answer: 1,
          tests: "attached pronoun needs accent"
        },
        {
          prompt: "What does “se cortó la leche de coco” mean in the sauce?",
          choices: [
            "The coconut milk was sliced into pieces.",
            "The coconut milk was poured too early.",
            "The coconut milk split or curdled."
          ],
          answer: 2,
          tests: "se cortó la leche = curdled/split"
        }
      ]
    },
    en: {
      title: "Cortar y perder la señal en una cocina de Austin",
      situation:
        "En Austin, Alejandra cocina pescado con Denise, una vecina que la corrige con paciencia. Usted aprende a decir “cut it into strips”, pero también que la luz “goes out”, la llamada “drops” o “cuts out”, y la leche “curdles” o “splits”: no todo lo que el español corta se traduce con cut.",
      setting: {
        who: "Denise es una vecina estadounidense que cocina con calma y explica sin volver la conversación una receta. Alejandra ayuda con el pescado y se tropieza con los falsos amigos de cortar.",
        what: "Una cocina compartida: cortar pescado, hablar cuando se va la luz, explicar una llamada caída y salvar una salsa que amenaza con cortarse.",
        when: "Un sábado al mediodía, mientras esperan a otros amigos para almorzar.",
        where: "Austin, Texas, en la cocina de un apartamento cerca del puerto.",
        why: "Porque en inglés “cut” sirve para el cuchillo, pero no cubre automáticamente la luz, el agua, las llamadas ni la leche. Usted necesita varias frases, no una traducción única."
      },
      address: {
        form: "mixed",
        who: "Denise y Alejandra usan la misma forma “you”; el inglés no cambia entre tú y usted.",
        why: "La cortesía está en el tono y en instrucciones como “could you” o “please”, no en un pronombre formal. La relación puede ser amable sin cambiar la gramática.",
        ifYouSwitch:
          "Si Alejandra intenta marcar usted con otro pronombre, no puede. Para sonar más cuidadosa, suaviza la orden: “could you cut it…” en vez de buscar una forma distinta de you."
      },
      dialogue: [
        {
          speaker: "Denise",
          target: "Could you cut it into thin strips so the fish doesn't fall apart?",
          translation: "¿Podría cortarlo en tiras delgadas para que el pescado no se desbarate?",
          pronunciation: "kud yu kut it IN-tu thin strips sou de fish DAZ-ent fol a-PART",
          literal: "¿Podría usted cortar eso en delgadas tiras para que el pescado no caiga aparte?",
          why: "Para el cuchillo, “cut” sí es directo. “Into thin strips” dice el resultado del corte, no sólo la acción. “Could you” convierte la instrucción en una petición amable."
        },
        {
          speaker: "Alejandra",
          target: "Like this, or should I cut the pieces a little smaller?",
          translation: "¿Así, o debo cortar los pedazos un poco más pequeños?",
          pronunciation: "laik dis, or shud ai kut de PI-siz a LI-tol SMA-ler",
          literal: "¿Como esto, o debería yo cortar los pedazos un poco más pequeños?",
          why: "“Should I…?” permite revisar la instrucción sin sonar insegura. En inglés de cocina, preguntar el tamaño exacto es natural porque evita arruinar la textura."
        },
        {
          speaker: "Denise",
          target: "Not too small; if you cut them too much, they'll just crumble.",
          translation: "No tan pequeños; si los corta demasiado, se vuelven pura migaja.",
          pronunciation: "not tu smol; if yu kut dem tu mach, deil yast KRAM-bol",
          literal: "No demasiado pequeños; si usted los corta demasiado, ellos se desmoronarán.",
          why: "“Cut them too much” funciona para excederse con el cuchillo. “Crumble” expresa que el pescado se desbarata, una palabra útil para texturas frágiles."
        },
        {
          speaker: "Alejandra",
          target: "Oh, the power went out. Can we keep cooking like this?",
          translation: "Uy, se fue la luz. ¿Podemos seguir cocinando así?",
          pronunciation: "ou, de PAU-er went aut. kan wi kip KU-king laik dis",
          literal: "Oh, el poder fue afuera. ¿Podemos mantener cocinando así?",
          why: "La luz no “cuts” en inglés cotidiano: “the power went out”. También se dice “there's a power cut” en inglés británico, pero “went out” es la frase segura y general."
        },
        {
          speaker: "Denise",
          target: "Keep going, but call quickly before the signal drops again.",
          translation: "Siga, pero llame rápido antes de que se vuelva a caer la señal.",
          pronunciation: "kip GO-ing, bat kol KWIK-li bi-FOR de SIG-nal drops a-GEN",
          literal: "Mantenga yendo, pero llame rápidamente antes de que la señal caiga otra vez.",
          why: "Para una llamada o señal, el inglés usa “drop” o “cut out”. Si usted dice “I cut the call”, parece que colgó a propósito. “The signal drops” culpa a la conexión."
        },
        {
          speaker: "Denise",
          target: "And don't boil the coconut milk hard, or it might split.",
          translation: "Y no hierva fuerte la leche de coco, o se puede cortar.",
          pronunciation: "and dont boil de KOU-ko-nat milk jard, or it mait split",
          literal: "Y no hierva la leche de coco duro, o ella podría partirse.",
          why: "Cuando una salsa se corta, el inglés dice “split” o “curdle”. “Cut milk” no comunica bien la idea culinaria; parece una traducción palabra por palabra."
        }
      ],
      vocabulary: [
        {
          term: "cut into strips",
          explanation:
            "Cortar en tiras. “Into” presenta el resultado: de una pieza entera salen tiras.",
          literal: "cortar dentro de tiras",
          useWhen:
            "Al dar instrucciones de cocina: “cut it into strips”, “cut the onions into rings”.",
          avoidWhen:
            "No hay forma específica final; entonces “cut it up” o “chop it” puede bastar.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["slice", "chop", "dice", "cut up"],
          example: {
            target: "Cut it into thin strips.",
            translation: "Córtelo en tiras delgadas."
          }
        },
        {
          term: "cut it",
          explanation:
            "La forma directa para cortar algo con cuchillo o tijeras.",
          literal: "córtelo",
          useWhen:
            "La acción física es clara: comida, papel, cuerda, tela.",
          avoidWhen:
            "Servicios, llamadas o leche que se cortan en español; el inglés suele usar otras frases.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["cut this", "trim it", "slice it", "chop it"],
          example: {
            target: "Could you cut it smaller?",
            translation: "¿Podría cortarlo más pequeño?"
          }
        },
        {
          term: "the power went out",
          explanation:
            "La frase cotidiana para “se fue / se cortó la luz”.",
          literal: "el poder se fue afuera",
          useWhen:
            "La electricidad deja de funcionar en una casa, edificio o barrio.",
          avoidWhen:
            "No diga “the light cut” para esta situación; suena a calco del español.",
          register: "neutral",
          region: "Inglés universal; “power cut” es común en inglés británico.",
          related: ["power outage", "blackout", "lights went out", "power cut"],
          example: {
            target: "The power went out while we were cooking.",
            translation: "Se fue la luz mientras cocinábamos."
          }
        },
        {
          term: "the water was cut off",
          explanation:
            "La frase para un corte de agua cuando se enfatiza que el servicio quedó interrumpido.",
          literal: "el agua fue cortada afuera",
          useWhen:
            "Una empresa o una falla dejó el servicio suspendido.",
          avoidWhen:
            "Para algo cotidiano y neutral, “the water went out” también se entiende; no traduzca mecánicamente todo con cut.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["water outage", "no running water", "shut off", "service"],
          example: {
            target: "The water was cut off this morning.",
            translation: "Se cortó el agua esta mañana."
          }
        },
        {
          term: "the call dropped / cut out",
          explanation:
            "La llamada se cayó o se cortó por señal; la culpa queda en la conexión.",
          literal: "la llamada cayó / cortó afuera",
          useWhen:
            "Se perdió la comunicación sin que usted colgara.",
          avoidWhen:
            "Usted terminó la llamada; ahí diga “I hung up”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["bad signal", "hang up", "lose connection", "drop out"],
          example: {
            target: "Sorry, the call dropped.",
            translation: "Perdón, se me cortó la llamada."
          }
        },
        {
          term: "split / curdle",
          explanation:
            "Lo que pasa cuando leche, crema o salsa se corta y se separa.",
          literal: "partirse / cuajarse",
          useWhen:
            "Una salsa se daña por calor, ácido o mala mezcla: “the sauce split”.",
          avoidWhen:
            "La comida simplemente se pudrió; ahí use “spoiled” o “went bad”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["sauce split", "milk curdled", "separate", "go bad"],
          example: {
            target: "The coconut milk split.",
            translation: "Se cortó la leche de coco."
          }
        },
        {
          term: "crumble",
          explanation:
            "Desbaratarse en migajas o pedacitos, útil para texturas frágiles.",
          literal: "volverse migas",
          useWhen:
            "Pescado, galletas, queso o masas se rompen en pedazos pequeños.",
          avoidWhen:
            "Algo se derrite o se quema; crumble habla de romperse, no de calor directo.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["fall apart", "break up", "flakes", "pieces"],
          example: {
            target: "The fish will crumble.",
            translation: "El pescado se va a desbaratar."
          }
        }
      ],
      note:
        "El español usa cortar para muchas interrupciones, pero el inglés reparte el trabajo. Con cuchillo, sí: “cut it into strips”. Con electricidad, diga “the power went out”. Con llamadas, “the call dropped” o “the signal cut out”. Con leche o salsas, “split” o “curdle”. “I cut the call” suena a que usted colgó, no a que se cayó la señal.",
      culture: [
        {
          label: "Una traducción menos automática",
          body:
            "El inglés obliga a mirar qué se cortó. Si fue un pescado, cut. Si fue la luz, went out. Si fue una llamada, dropped. Si fue leche, curdled or split. Para un colombiano, el riesgo no es no saber la palabra cut, sino usarla por reflejo donde el inglés prefiere otra imagen. Esa precisión evita malentendidos justo en problemas cotidianos."
        },
        {
          label: "Power went out versus power cut",
          body:
            "“The power went out” funciona en cualquier conversación. “Power cut” también existe, sobre todo en inglés británico, como sustantivo: “there was a power cut”. En Norteamérica se oye mucho “power outage”. Las tres son útiles, pero para hablar rápido en una cocina, “the power went out” es la opción más segura."
        },
        {
          label: "No culpabilizarse por la llamada",
          body:
            "En español “se me cortó la llamada” protege a quien habla. En inglés pasa algo parecido si usted dice “the call dropped” o “the signal cut out”: la culpa va a la conexión. “I cut the call” no cumple esa función; suena a acción deliberada. En una conversación de trabajo o familia, esa diferencia social importa."
        },
        {
          label: "La cocina habla de textura",
          body:
            "El inglés culinario tiene verbos finos para textura: crumble, split, curdle, thicken, simmer. No son palabras de chef inaccesible; aparecen en recetas caseras y conversaciones reales. Aprender “the sauce split” o “the fish will crumble” le da a usted más control que repetir cut para todo."
        }
      ],
      pitfalls: [
        {
          mistake: "“The light cut.”",
          whyItFails:
            "Es un calco de “se cortó la luz”. En inglés cotidiano, la electricidad “went out”; si dice “the light cut”, la frase queda rara e incompleta.",
          sayInstead: "The power went out."
        },
        {
          mistake: "“I cut the call.”",
          whyItFails:
            "Suena como si usted hubiera colgado voluntariamente. Si falló la señal, diga que la llamada dropped o que the signal cut out.",
          sayInstead: "The call dropped."
        },
        {
          mistake: "“The milk cut.”",
          whyItFails:
            "Para leche o salsa que se separa, el inglés usa “curdle” o “split”. “The milk cut” no comunica la textura y suena traducido.",
          sayInstead: "The milk curdled."
        },
        {
          mistake: "“Cut it in thin strips.”",
          whyItFails:
            "Se entiende, pero la instrucción natural usa “into” para el resultado del corte: la pieza termina convertida en tiras.",
          sayInstead: "Cut it into thin strips."
        }
      ],
      variations: [
        {
          form: "Cut it into strips.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Dar una instrucción física de cocina."
        },
        {
          form: "The power went out.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Se fue o se cortó la luz."
        },
        {
          form: "The call dropped.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Se cortó la llamada por señal."
        },
        {
          form: "The coconut milk split.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "La leche o salsa se cortó."
        },
        {
          form: "The fish will crumble.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Algo frágil se va a desbaratar."
        }
      ],
      prompt: "La luz se cortó en la cocina. ¿Qué dice usted en inglés natural?",
      choices: [
        "The power went out.",
        "The light cut itself.",
        "The electricity sliced."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál significa “córtelo en tiras delgadas”?",
          choices: [
            "Cut it in thin streets.",
            "Cut it into thin strips.",
            "Cut it for thin pieces."
          ],
          answer: 1,
          tests: "cut into strips"
        },
        {
          prompt: "La señal falló y la llamada se cortó. ¿Qué dice?",
          choices: [
            "I cut the call.",
            "The call sliced off.",
            "The call dropped."
          ],
          answer: 2,
          tests: "call dropped, not I cut"
        },
        {
          prompt: "La leche de coco se cortó en la salsa. ¿Cuál es natural?",
          choices: [
            "The coconut milk split.",
            "The coconut milk cut.",
            "The coconut milk dropped."
          ],
          answer: 0,
          tests: "split / curdle"
        }
      ]
    }
  },
  {
    id: "mixing-tamal-masa-at-an-ibague-workshop",
    level: "Extending · Kitchen texture and instructions",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "courteous",
    pathways: ["extension"],
    verb: "mezclar",
    review: "pending",
    es: {
      title: "Mezclar la masa sin volverla engrudo",
      situation:
        "En Ibagué, Alex entra a un taller de cocina donde Clara enseña a armar tamales tolimenses. La clase no recita una receta: Clara lo corrige mientras conversa, le pide “mézclelo despacio”, le advierte “no lo mezcle con el guiso todavía” y le muestra que mezclar no es lo mismo que revolver a lo loco.",
      setting: {
        who: "Clara teaches practical cooking workshops and has no patience for students who rush texture. Alex can follow a conversation, but he still needs precise commands with attached pronouns.",
        what: "Mixing masa, seasoning and filling at the right moment, with negative commands and warnings about what not to combine yet.",
        when: "A Saturday morning workshop, after the ingredients are laid out but before anyone starts wrapping the tamales.",
        where: "Ibagué, Tolima, in a neighborhood cooking workshop.",
        why: "Because mezclar is plain but useful grammar: commands, pronoun placement, negative commands and the difference between mixing ingredients and merely stirring something around."
      },
      address: {
        form: "usted",
        who: "Clara addresses Alex with usted because she is the instructor and he is one of several adult participants.",
        why: "Usted gives the instructions a respectful classroom tone without making them cold. It also lets the lesson focus on usted imperatives like “mézclelo” and “no lo mezcle”.",
        ifYouSwitch:
          "Tú would not be shocking, but it would make the workshop sound less like a paid class. Usted keeps the teacher-student frame clear."
      },
      dialogue: [
        {
          speaker: "Clara",
          target: "Primero mire la textura; después mézclelo con calma.",
          translation: "First look at the texture; then mix it calmly.",
          pronunciation: "pri-ME-ro MEE-re la teks-TU-ra; des-PWES MES-kle-lo kon KAL-ma",
          literal: "First look the texture; after mix-it with calm.",
          why: "“Mézclelo” is the usted command with “lo” attached, so it takes an accent. The instruction is not just “mix”; it tells Alex to pay attention before acting."
        },
        {
          speaker: "Alex",
          target: "¿Lo mezclo con el guiso ahora, o espero a que espese un poco?",
          translation: "Do I mix it with the stew base now, or do I wait until it thickens a little?",
          pronunciation: "lo MES-klo kon el GEE-so a-O-ra, o es-PE-ro a ke es-PE-se un PO-ko",
          literal: "It I-mix with the stew-base now, or I-wait to that it-thicken a little?",
          why: "“Espero a que espese” uses subjunctive after waiting for a future condition. Mezclar gives the grammar work here without becoming rare or bookish."
        },
        {
          speaker: "Clara",
          target: "No lo mezcle con el guiso todavía; si se apura, la masa queda pesada.",
          translation: "Don't mix it with the stew base yet; if you rush, the masa turns heavy.",
          pronunciation: "no lo MES-kle kon el GEE-so to-da-VEE-a; si se a-PU-ra, la MA-sa KE-da pe-SA-da",
          literal: "Not it mix with the stew-base yet; if yourself you-rush, the dough stays heavy.",
          why: "Negative commands keep the pronoun before the verb: “no lo mezcle”, not “no mézclelo”. That contrast with “mézclelo” is the grammar payload of the lesson."
        },
        {
          speaker: "Alex",
          target: "Entonces sólo lo revuelvo un poco para que no se pegue.",
          translation: "So I just stir it a little so it doesn't stick.",
          pronunciation: "en-TON-ses SO-lo lo rre-VWEL-vo un PO-ko PA-ra ke no se PE-ge",
          literal: "Then only it I-stir a little so that not itself stick.",
          why: "This line separates mezclar from revolver. Revolver can be simple stirring; mezclar focuses on combining ingredients into one mixture."
        },
        {
          speaker: "Clara",
          target: "Exacto. Cuando la mezcla esté pareja, le agrega el aliño.",
          translation: "Exactly. When the mixture is even, you add the seasoning.",
          pronunciation: "eg-SAK-to. KWAN-do la MES-kla es-TE pa-RE-ha, le a-GRE-ga el a-LEE-nyo",
          literal: "Exactly. When the mixture be even, to-it you-add the seasoning.",
          why: "“Cuando la mezcla esté” uses subjunctive for a future point that has not arrived. “La mezcla” is the noun: the mixture, the thing you are trying to make even."
        },
        {
          speaker: "Alex",
          target: "Listo, no lo mezclo a las carreras; prefiero que quede bien.",
          translation: "Done, I won't mix it in a rush; I'd rather it turn out right.",
          pronunciation: "LEES-to, no lo MES-klo a las ka-RRE-ras; pre-FYE-ro ke KE-de byen",
          literal: "Ready, not it I-mix at the races; I-prefer that it-stay well.",
          why: "“A las carreras” means in a rush, not at literal races. “Prefiero que quede bien” adds another subjunctive, natural in a longer sentence from an advanced learner."
        }
      ],
      vocabulary: [
        {
          term: "mezclar",
          explanation:
            "To mix or combine ingredients so they become one mixture. It is plain, useful and precise.",
          literal: "to mix",
          useWhen:
            "Combining ingredients, colors, materials or ideas: “mezcle la masa”, “no mezcle esos productos”.",
          avoidWhen:
            "You only mean stirring a pot to keep it from sticking; revolver may be more exact.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["revolver", "combinar", "incorporar", "la mezcla"],
          example: {
            target: "Mezcle la masa con calma.",
            translation: "Mix the masa calmly."
          }
        },
        {
          term: "mézclelo",
          explanation:
            "The usted command “mix it”, with the object pronoun attached and an accent to preserve stress.",
          literal: "mix it",
          useWhen:
            "Respectful practical instructions: “mézclelo despacio”, “mézclelo con agua”.",
          avoidWhen:
            "Negative commands. Spanish says “no lo mezcle”, with the pronoun before the verb.",
          register: "polite neutral",
          region: "Universal Spanish.",
          related: ["mezcle", "lo", "imperativo", "acento"],
          example: {
            target: "Mézclelo despacio.",
            translation: "Mix it slowly."
          }
        },
        {
          term: "no lo mezcle con",
          explanation:
            "The negative usted command pattern: do not mix it with. The pronoun comes before the verb.",
          literal: "do not it mix with",
          useWhen:
            "Warning against a bad combination: “no lo mezcle con cloro”, “no lo mezcle con el guiso todavía”.",
          avoidWhen:
            "Attaching the pronoun in a negative command: “no mézclelo” is wrong.",
          register: "polite neutral",
          region: "Universal Spanish.",
          related: ["prohibición", "con", "todavía", "advertencia"],
          example: {
            target: "No lo mezcle con el guiso todavía.",
            translation: "Don't mix it with the stew base yet."
          }
        },
        {
          term: "la mezcla",
          explanation:
            "The mixture itself, whether food, paint or a blend of ideas.",
          literal: "the mixture",
          useWhen:
            "Talking about the combined result: “la mezcla está espesa”, “una mezcla pareja”.",
          avoidWhen:
            "You mean the act rather than the result; then use the verb mezclar.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["textura", "masa", "consistencia", "combinación"],
          example: {
            target: "La mezcla está pareja.",
            translation: "The mixture is even."
          }
        },
        {
          term: "revolver",
          explanation:
            "To stir, move around or mix roughly. It overlaps with mezclar but often focuses on motion.",
          literal: "to stir / turn around",
          useWhen:
            "Keeping food from sticking or moving ingredients in a pot: “revuelva la sopa”.",
          avoidWhen:
            "You need to emphasize combining separate ingredients into a unified mixture; mezclar is cleaner.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["menear", "batir", "mezclar", "mover"],
          example: {
            target: "Revuélvalo para que no se pegue.",
            translation: "Stir it so it doesn't stick."
          }
        },
        {
          term: "quedar pesado",
          explanation:
            "To turn out heavy in texture, especially dough or masa that was handled badly.",
          literal: "to remain heavy",
          useWhen:
            "Food is dense, thick or unpleasantly heavy: “la masa quedó pesada”.",
          avoidWhen:
            "You mean a person is physically heavy; this is about the result of preparation.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["quedar seco", "quedar duro", "textura", "masa"],
          example: {
            target: "La masa quedó pesada.",
            translation: "The masa turned out heavy."
          }
        },
        {
          term: "a las carreras",
          explanation:
            "In a rush, hurriedly, without the care the task needs.",
          literal: "at the races",
          useWhen:
            "Someone is rushing: “lo hizo a las carreras”, “no cocine a las carreras”.",
          avoidWhen:
            "You are talking about actual races or sport; this is an idiom about hurry.",
          register: "friendly informal",
          region: "Very common Colombian Spanish.",
          related: ["de afán", "rápido", "apurarse", "sin cuidado"],
          example: {
            target: "No lo mezcle a las carreras.",
            translation: "Don't mix it in a rush."
          }
        }
      ],
      note:
        "Mezclar is not flashy, so let it do careful grammar. In affirmative usted commands, the pronoun attaches and the accent appears: “mézclelo”. In negative commands, the pronoun moves before the verb: “no lo mezcle con…”. Meaning also matters: mezclar combines ingredients into a mixture, while revolver may simply stir or move something around. Extension-level speech lives in the clauses around it: “cuando la mezcla esté pareja”, “para que no se pegue”, “prefiero que quede bien”.",
      culture: [
        {
          label: "A cooking class is still conversation",
          body:
            "A real cooking lesson is not a silent recipe. People ask whether the texture is right, whether it is time to add something, and what happens if they rush. That is why this scene keeps Alex and Clara talking. The useful Spanish is in the corrections, warnings and checks, not in a neat numbered list of steps."
        },
        {
          label: "Tolima and tamal texture",
          body:
            "Tolima is strongly associated with tamales, but the lesson does not need to claim every household makes them the same way. What matters here is texture: masa too heavy, filling added too early, a mixture not yet even. Those are ordinary cooking problems that let the grammar feel necessary."
        },
        {
          label: "Imperatives carry social tone",
          body:
            "“Mézclelo” and “no lo mezcle” are not just grammar drills. They tell you who is instructing whom and how directly. In usted, Clara can sound professional and kind at the same time. The attached pronoun and accent are visible signs of a spoken relationship: someone is guiding another person's hands."
        },
        {
          label: "Mixing can be literal or social",
          body:
            "Mezclar also leaves the kitchen easily: people mix colors, groups, drinks, topics and ideas. But the core image stays stable: separate things become one combined thing. That makes it a good verb for precision. If the things merely move around, revolver may be enough; if they become a mixture, mezclar is the stronger choice."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “no mézclelo” for “don't mix it”",
          whyItFails:
            "Negative commands do not attach the pronoun. The correct order is pronoun before verb: “no lo mezcle”. “No mézclelo” copies the affirmative pattern into the wrong place.",
          sayInstead: "No lo mezcle todavía."
        },
        {
          mistake: "Forgetting the accent in “mézclelo”",
          whyItFails:
            "When “lo” attaches to the command, the stress must stay on mez-. The written accent shows that stress. “Mezclelo” loses the correct written signal.",
          sayInstead: "Mézclelo despacio."
        },
        {
          mistake: "Using mezclar for every kind of stirring",
          whyItFails:
            "Mezclar emphasizes combining ingredients. If you are only moving a soup so it does not stick, “revolver” may be the better verb. The verbs overlap, but they are not identical.",
          sayInstead: "Revuélvalo para que no se pegue."
        },
        {
          mistake: "Mixing the guiso before the masa is ready",
          whyItFails:
            "The Spanish may be correct, but the instruction is wrong for the scene. “No lo mezcle con el guiso todavía” is a timing warning, and “todavía” matters.",
          sayInstead: "Espere a que la mezcla esté pareja."
        }
      ],
      variations: [
        {
          form: "Mézclelo despacio.",
          register: "polite neutral",
          region: "Universal Spanish",
          whenToUse: "Giving an affirmative usted instruction."
        },
        {
          form: "No lo mezcle todavía.",
          register: "polite neutral",
          region: "Universal Spanish",
          whenToUse: "Giving a negative usted warning."
        },
        {
          form: "La mezcla está pareja.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The texture is even."
        },
        {
          form: "Revuélvalo para que no se pegue.",
          register: "polite neutral",
          region: "Universal Spanish",
          whenToUse: "Stirring to prevent sticking."
        },
        {
          form: "No lo haga a las carreras.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Warning someone not to rush."
        }
      ],
      prompt: "Clara says “mézclelo despacio.” What is she asking Alex to do?",
      choices: [
        "Stir it only after it burns.",
        "Mix it slowly and carefully.",
        "Cut it into thin strips."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which negative usted command is correct?",
          choices: [
            "No mézclelo todavía.",
            "No mezclarlo todavía.",
            "No lo mezcle todavía."
          ],
          answer: 2,
          tests: "negative command pronoun before verb"
        },
        {
          prompt: "Which sentence uses the affirmative command with the right accent?",
          choices: [
            "Mézclelo con calma.",
            "Mezclelo con calma.",
            "Mezclalo con calma."
          ],
          answer: 0,
          tests: "mézclelo with accent"
        },
        {
          prompt: "What is the best verb if Alex only moves the pot so it does not stick?",
          choices: [
            "Mezclarlo para que no se corte.",
            "Revolverlo para que no se pegue.",
            "Cortarlo para que no se mezcle."
          ],
          answer: 1,
          tests: "revolver for stirring"
        }
      ]
    },
    en: {
      title: "Mezclar sin revolver a lo loco en Chicago",
      situation:
        "En Chicago, Alejandra toma una clase de cocina y quiere entender instrucciones más finas que “mix”. Usted aprende “mix it slowly”, “don't mix it with… yet”, “stir it so it doesn't stick” y “blend” sólo cuando de verdad hay licuadora o mezcla muy uniforme.",
      setting: {
        who: "Maya enseña una clase comunitaria de cocina y corrige sin humillar. Alejandra ya entiende lo básico, pero necesita separar mix, stir y blend.",
        what: "Una mezcla para hornear que debe combinarse sin prisa, con instrucciones negativas y advertencias de textura.",
        when: "Una mañana de domingo, en una clase donde todos cocinan y conversan al mismo tiempo.",
        where: "Chicago, Estados Unidos, en una cocina comunitaria.",
        why: "Porque el inglés tiene varias palabras donde el español puede tentar a usar mezclar o revolver para todo. Usted necesita elegir según textura, movimiento y herramienta."
      },
      address: {
        form: "mixed",
        who: "Maya y Alejandra usan “you”; el inglés no separa tú y usted en la forma del pronombre.",
        why: "La profesora puede sonar amable o firme con “please”, “don't” y el tono. No hay un usted especial para la clase.",
        ifYouSwitch:
          "Si Alejandra busca una forma más formal de you, no existe. Lo que puede cambiar es la construcción: “could you mix it…?” suena más suave que una orden directa."
      },
      dialogue: [
        {
          speaker: "Maya",
          target: "First check the texture; then mix it slowly.",
          translation: "Primero revise la textura; después mézclelo despacio.",
          pronunciation: "ferst chek de TEKS-cher; den miks it SLOU-li",
          literal: "Primero revise la textura; entonces mezcle eso lentamente.",
          why: "“Mix it” combina los ingredientes. “Slowly” no es adorno: en una instrucción real, la velocidad puede cambiar la textura."
        },
        {
          speaker: "Alejandra",
          target: "Should I mix it with the filling now, or wait until it thickens?",
          translation: "¿Lo mezclo con el relleno ahora, o espero a que espese?",
          pronunciation: "shud ai miks it with de FI-ling nau, or weit an-TIL it THI-kens",
          literal: "¿Debería mezclarlo con el relleno ahora, o esperar hasta que espese?",
          why: "“Should I…?” es la forma natural de pedir confirmación. “Until it thickens” expresa el punto futuro sin subjuntivo visible; el inglés no marca esa espera como el español."
        },
        {
          speaker: "Maya",
          target: "Don't mix it with the filling yet, or the dough will turn heavy.",
          translation: "No lo mezcle con el relleno todavía, o la masa quedará pesada.",
          pronunciation: "dont miks it with de FI-ling yet, or de dou wil tern HE-vi",
          literal: "No mezcle eso con el relleno todavía, o la masa se volverá pesada.",
          why: "La orden negativa inglesa no mueve pronombres como el español: “don't mix it”. “Yet” traduce todavía y cambia la instrucción; no es nunca, es no por ahora."
        },
        {
          speaker: "Alejandra",
          target: "So I just stir it a little so it doesn't stick.",
          translation: "Entonces sólo lo revuelvo un poco para que no se pegue.",
          pronunciation: "sou ai yast ster it a LI-tol sou it DAZ-ent stik",
          literal: "Entonces yo sólo revuelvo eso un poco para que no se pegue.",
          why: "“Stir” es revolver: mover con cuchara, muchas veces para que no se pegue. No siempre equivale a mix, porque no siempre busca combinar ingredientes nuevos."
        },
        {
          speaker: "Maya",
          target: "Exactly. When the mixture is smooth, fold in the seasoning.",
          translation: "Exacto. Cuando la mezcla esté suave, incorpore el aliño con cuidado.",
          pronunciation: "eg-ZAKT-li. wen de MIKS-cher is smuth, fould in de SI-zo-ning",
          literal: "Exactamente. Cuando la mezcla esté lisa, doble adentro el condimento.",
          why: "“Mixture” es el sustantivo. “Fold in” es incorporar suavemente, no doblar papel; aparece en cocina cuando no quiere sacar aire ni maltratar la textura."
        },
        {
          speaker: "Alejandra",
          target: "Got it. I won't rush it; I want the mixture to come out right.",
          translation: "Entendido. No lo haré a las carreras; quiero que la mezcla quede bien.",
          pronunciation: "gat it. ai wont rash it; ai want de MIKS-cher tu kam aut rait",
          literal: "Lo tengo. No apresuraré eso; quiero que la mezcla salga correcta.",
          why: "“Rush it” traduce hacer algo a las carreras. “Come out right” habla del resultado final: que quede bien, no sólo que termine."
        }
      ],
      vocabulary: [
        {
          term: "mix",
          explanation:
            "Mezclar: combinar ingredientes o elementos hasta que funcionen como una sola mezcla.",
          literal: "mezclar",
          useWhen:
            "Ingredientes, colores, bebidas o ideas: “mix it slowly”, “mix the dry ingredients”.",
          avoidWhen:
            "Sólo mueve algo con cuchara para que no se pegue; ahí “stir” puede ser mejor.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["combine", "stir", "blend", "mixture"],
          example: {
            target: "Mix it slowly.",
            translation: "Mézclelo despacio."
          }
        },
        {
          term: "don't mix it with",
          explanation:
            "La advertencia directa para no combinar algo con otra cosa.",
          literal: "no mezclarlo con",
          useWhen:
            "Recetas, seguridad o química doméstica: “don't mix it with bleach”.",
          avoidWhen:
            "No ponga el pronombre antes del verbo como en español; el inglés dice “don't mix it”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["yet", "with", "warning", "combine"],
          example: {
            target: "Don't mix it with the filling yet.",
            translation: "No lo mezcle con el relleno todavía."
          }
        },
        {
          term: "mixture",
          explanation:
            "La mezcla, el resultado combinado.",
          literal: "mezcla",
          useWhen:
            "Hablar de textura o estado: “the mixture is smooth”, “a thick mixture”.",
          avoidWhen:
            "Usted habla del acto de mezclar; ahí use el verbo “mix”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["texture", "batter", "dough", "consistency"],
          example: {
            target: "The mixture is smooth.",
            translation: "La mezcla está suave."
          }
        },
        {
          term: "stir",
          explanation:
            "Revolver con cuchara o utensilio, sobre todo para mover lo que está en una olla o recipiente.",
          literal: "revolver",
          useWhen:
            "Evitar que se pegue, repartir calor o mover una bebida: “stir the soup”.",
          avoidWhen:
            "Quiere enfatizar que ingredientes separados se vuelven una sola mezcla; ahí “mix” es más claro.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["stir in", "spoon", "pot", "keep moving"],
          example: {
            target: "Stir it so it doesn't stick.",
            translation: "Revuélvalo para que no se pegue."
          }
        },
        {
          term: "blend",
          explanation:
            "Mezclar hasta dejar uniforme, muchas veces con licuadora o con resultado muy liso.",
          literal: "licuar / mezclar uniformemente",
          useWhen:
            "Salsas, smoothies o una mezcla muy pareja: “blend until smooth”.",
          avoidWhen:
            "Una mezcla manual simple; “mix” o “stir” puede sonar más natural.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["blender", "smooth", "puree", "combine"],
          example: {
            target: "Blend until smooth.",
            translation: "Licúe hasta que quede suave."
          }
        },
        {
          term: "fold in",
          explanation:
            "Incorporar con suavidad, levantando y doblando la mezcla para no maltratarla.",
          literal: "doblar adentro",
          useWhen:
            "Repostería o masas delicadas: “fold in the egg whites”, “fold in the seasoning”.",
          avoidWhen:
            "Una mezcla fuerte y normal; “mix in” basta si no hay que ser delicado.",
          register: "neutral kitchen",
          region: "Inglés universal.",
          related: ["mix in", "gently", "batter", "air"],
          example: {
            target: "Fold in the seasoning gently.",
            translation: "Incorpore el aliño con suavidad."
          }
        },
        {
          term: "rush it",
          explanation:
            "Hacerlo a las carreras, apurar un proceso que necesita cuidado.",
          literal: "apresurarlo",
          useWhen:
            "Una tarea sale mal por velocidad: “don't rush it”, “I rushed the dough”.",
          avoidWhen:
            "Usted sólo camina rápido; esto se usa para procesos o tareas.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["hurry", "take your time", "careful", "slowly"],
          example: {
            target: "Don't rush it.",
            translation: "No lo haga a las carreras."
          }
        }
      ],
      note:
        "Mix no cubre todo. “Mix” combina ingredientes; “stir” mueve con cuchara, a menudo para que no se pegue; “blend” deja algo uniforme, muchas veces con licuadora; “fold in” incorpora con delicadeza. En negativo, el inglés mantiene el objeto después del verbo: “don't mix it with…”, sin el movimiento de pronombres que tiene “no lo mezcle”. Y si alguien va demasiado rápido, “don't rush it” es más natural que hablar de carreras.",
      culture: [
        {
          label: "Tres verbos para una cuchara",
          body:
            "En una cocina inglesa, mix, stir y blend no son adornos de receta. Cambian la acción. Stir puede ser sólo mover una olla; mix combina; blend busca uniformidad. Un hispanohablante que dice mix para todo quizá se hace entender, pero pierde precisión justo donde la textura depende de la instrucción."
        },
        {
          label: "Yet: todavía no",
          body:
            "“Don't mix it with the filling yet” no prohíbe mezclar para siempre. Yet significa que el momento no ha llegado. En cocina, esa palabra pequeña evita errores grandes: una masa pesada, una salsa cortada, un relleno aguado. Es la diferencia entre una regla absoluta y una instrucción de tiempo."
        },
        {
          label: "La clase comunitaria",
          body:
            "Una clase de cocina comunitaria en Estados Unidos suele mezclar instrucción, conversación y ayuda entre desconocidos. La profesora no dicta una receta en silencio; responde preguntas y ajusta lo que cada persona hace. Por eso frases como “should I…?” y “don't rush it” son tan importantes como los nombres de ingredientes."
        },
        {
          label: "Fold in no es doblar papel",
          body:
            "“Fold in” sorprende porque fold normalmente es doblar. En cocina significa incorporar suavemente, con movimientos que cuidan el aire o la textura. Aparece mucho en repostería, pero también en preparaciones delicadas. Aprenderlo como bloque evita una traducción literal que haría imaginar papel en vez de masa."
        }
      ],
      pitfalls: [
        {
          mistake: "“Don't it mix with the filling.”",
          whyItFails:
            "Está copiando el orden de “no lo mezcle”. En inglés el objeto va después del verbo: “don't mix it with…”.",
          sayInstead: "Don't mix it with the filling yet."
        },
        {
          mistake: "“Remove it so it doesn't stick.”",
          whyItFails:
            "“Remove” es quitar o sacar, no revolver. Para mover una olla con cuchara, use “stir”.",
          sayInstead: "Stir it so it doesn't stick."
        },
        {
          mistake: "“Blend it by hand for two seconds.”",
          whyItFails:
            "Blend sugiere uniformidad, muchas veces con licuadora o trabajo más completo. Para una mezcla manual simple, “mix” suena más natural.",
          sayInstead: "Mix it by hand."
        },
        {
          mistake: "“Don't do it at the races.”",
          whyItFails:
            "Es un calco de “a las carreras”. El inglés dice “don't rush it” o “take your time”.",
          sayInstead: "Don't rush it."
        }
      ],
      variations: [
        {
          form: "Mix it slowly.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Combinar ingredientes con cuidado."
        },
        {
          form: "Don't mix it with the filling yet.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Advertir que todavía no se combina."
        },
        {
          form: "Stir it so it doesn't stick.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Mover algo en una olla o sartén."
        },
        {
          form: "Blend until smooth.",
          register: "neutral kitchen",
          region: "Inglés universal",
          whenToUse: "Usar licuadora o buscar una textura uniforme."
        },
        {
          form: "Don't rush it.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Pedir que no lo hagan a las carreras."
        }
      ],
      prompt: "Maya dice “don't mix it with the filling yet.” ¿Qué significa “yet” aquí?",
      choices: [
        "Que nunca debe mezclarlo.",
        "Que ya lo mezcló demasiado.",
        "Que todavía no debe mezclarlo."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál es la forma natural de “mézclelo despacio”?",
          choices: [
            "Mix it slowly.",
            "Stir it never.",
            "Blend it races."
          ],
          answer: 0,
          tests: "mix it slowly"
        },
        {
          prompt: "Si sólo mueve la olla para que no se pegue, ¿qué verbo usa?",
          choices: [
            "Blend it so it doesn't stick.",
            "Stir it so it doesn't stick.",
            "Cut it so it doesn't stick."
          ],
          answer: 1,
          tests: "stir for revolver"
        },
        {
          prompt: "¿Cómo dice “no lo haga a las carreras”?",
          choices: [
            "Don't make it in races.",
            "Don't do it at careers.",
            "Don't rush the mixture."
          ],
          answer: 2,
          tests: "don't rush it"
        }
      ]
    }
  },
  {
    id: "adding-seasoning-and-lending-a-hand-in-san-andres",
    level: "Extending · Kitchen help and idioms",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "intimate",
    pathways: ["extension"],
    verb: "echar",
    review: "pending",
    es: {
      title: "Échele sal y échele ganas",
      situation:
        "En San Andrés, Alex cocina con Mariana antes de que llegue la familia. Ella le dice “échele sal”, pero la conversación abre otros usos: echar una mano cuando falta ayuda, echarse a perder cuando el pescado espera demasiado y el colombiano “échele ganas” cuando alguien necesita seguir intentando sin rendirse.",
      setting: {
        who: "Mariana is hosting relatives and cooking while answering messages. Alex is helping, but he keeps hearing echar in places where “throw” would make no sense in English.",
        what: "A busy kitchen conversation about adding seasoning, helping with a task, keeping fish from spoiling and encouraging someone to keep trying.",
        when: "Early evening, shortly before guests arrive and the kitchen becomes crowded.",
        where: "San Andrés, in a home kitchen after a stop at the fish market.",
        why: "Because echar is the richest verb in the block. It can mean add or put in, but Colombian speech also uses it for lending a hand, spoilage and encouragement."
      },
      address: {
        form: "tú",
        who: "Mariana and Alex are friends cooking together, so tú keeps the rhythm quick and familiar.",
        why: "The kitchen is busy and collaborative. Tú lets Mariana give fast instructions like “échale” without turning every sentence into a formal command.",
        ifYouSwitch:
          "Usted would not be offensive, but it would slow down the friendly teamwork. With an older relative arriving, the register could change; between these two friends, tú fits."
      },
      dialogue: [
        {
          speaker: "Mariana",
          target: "Échale sal al pescado, pero no te emociones con el picante.",
          translation: "Add salt to the fish, but don't get carried away with the hot pepper.",
          pronunciation: "E-cha-le sal al pes-KA-do, PE-ro no te e-mo-SYO-nes kon el pi-KAN-te",
          literal: "Throw-to-it salt to-the fish, but not yourself get-excited with the spicy.",
          why: "“Échale” is the tú command with “le” attached and an accent. In the kitchen, echar often means add or put in, not literally throw."
        },
        {
          speaker: "Alex",
          target: "¿Le echo también limón, o espero a que pruebes la salsa?",
          translation: "Should I add lime too, or do I wait for you to taste the sauce?",
          pronunciation: "le E-cho tam-BYEN lee-MON, o es-PE-ro a ke PRWE-bes la SAL-sa",
          literal: "To-it I-throw also lime, or I-wait to that you-try the sauce?",
          why: "“Le echo limón” keeps the indirect object “le” for what receives the ingredient. “Espero a que pruebes” adds a natural subjunctive clause."
        },
        {
          speaker: "Mariana",
          target: "Espérate; si le echas mucho limón, se pierde el sabor del coco.",
          translation: "Wait; if you add too much lime, the coconut flavor gets lost.",
          pronunciation: "es-PE-ra-te; si le E-chas MU-cho lee-MON, se PYER-de el sa-BOR del KO-ko",
          literal: "Wait-yourself; if to-it you-throw much lime, itself loses the flavor of-the coconut.",
          why: "Echar measures dosage. Too much of a good ingredient can ruin balance, so the verb belongs to judgement, not just movement."
        },
        {
          speaker: "Alex",
          target: "Entonces te echo una mano con los platos mientras decides.",
          translation: "Then I'll lend you a hand with the dishes while you decide.",
          pronunciation: "en-TON-ses te E-cho OO-na MA-no kon los PLA-tos MYEN-tras de-SEE-des",
          literal: "Then to-you I-throw a hand with the dishes while you decide.",
          why: "“Echar una mano” is an idiom for helping. No hand is thrown. It is friendly, practical and perfect when the help is physical."
        },
        {
          speaker: "Mariana",
          target: "Gracias. Si dejamos ese pescado afuera, se echa a perder.",
          translation: "Thanks. If we leave that fish out, it will spoil.",
          pronunciation: "GRA-syas. si de-HA-mos E-se pes-KA-do a-FWE-ra, se E-cha a per-DER",
          literal: "Thanks. If we-leave that fish outside, itself throws to lose.",
          why: "“Echarse a perder” means to spoil or go bad. Food does it, but plans and machines can too. Here the kitchen meaning is urgent and literal."
        },
        {
          speaker: "Mariana",
          target: "Vas bien; échale ganas, que ya casi terminamos.",
          translation: "You're doing well; keep at it, we're almost done.",
          pronunciation: "vas byen; E-cha-le GA-nas, ke ya KA-si ter-mi-NA-mos",
          literal: "You-go well; throw-to-it desire, that already almost we-finish.",
          why: "“Échale ganas” is very Colombian and widely Mexican too: put effort in, keep at it, do not give up. In context it encourages without sounding like a lecture."
        }
      ],
      vocabulary: [
        {
          term: "echar",
          explanation:
            "A high-frequency verb meaning to throw, put in or add, with many idiomatic extensions.",
          literal: "to throw",
          useWhen:
            "Adding ingredients, putting something somewhere or using set phrases like “echar una mano”.",
          avoidWhen:
            "You assume every echar is literal throwing. Context decides whether it means add, put, help, spoil or encourage.",
          register: "neutral",
          region: "Universal Spanish; extremely common in Colombia.",
          related: ["poner", "agregar", "tirar", "meter"],
          example: {
            target: "Échale sal al pescado.",
            translation: "Add salt to the fish."
          }
        },
        {
          term: "échale / échele",
          explanation:
            "Commands with attached “le”: échale for tú, échele for usted. The accent preserves the stress.",
          literal: "throw/add to it",
          useWhen:
            "Giving fast kitchen instructions or encouragement: “échale sal”, “échele ganas”.",
          avoidWhen:
            "You are not adding to anything or encouraging an effort; the little “le” needs something it points toward.",
          register: "friendly to polite",
          region: "Universal Spanish; “échele ganas” is very familiar in Colombia.",
          related: ["le echo", "échele", "échale ganas", "imperativo"],
          example: {
            target: "Échele un poquito de agua.",
            translation: "Add a little water."
          }
        },
        {
          term: "echarle sal / agua / limón",
          explanation:
            "To add an ingredient to something, usually with “le” marking the dish that receives it.",
          literal: "to throw salt / water / lime to it",
          useWhen:
            "Seasoning or adjusting food: “échele sal”, “le echo más agua”.",
          avoidWhen:
            "A formal written recipe may prefer “agregar” or “añadir”, but echar is natural in speech.",
          register: "neutral conversational",
          region: "Universal Spanish; very common in Colombian kitchens.",
          related: ["agregar", "añadir", "sazonar", "probar"],
          example: {
            target: "Le echo limón a la salsa.",
            translation: "I add lime to the sauce."
          }
        },
        {
          term: "echar una mano",
          explanation:
            "To lend a hand, especially with practical help that makes a task lighter.",
          literal: "to throw a hand",
          useWhen:
            "Offering help with dishes, bags, moving, cleaning or a task already under way.",
          avoidWhen:
            "A formal institutional offer, where ayudar or apoyar may sound better.",
          register: "friendly informal",
          region: "Universal Spanish; fully natural in Colombia.",
          related: ["ayudar", "dar una mano", "colaborar", "apoyar"],
          example: {
            target: "Te echo una mano con los platos.",
            translation: "I'll lend you a hand with the dishes."
          }
        },
        {
          term: "echarse a perder",
          explanation:
            "To spoil, go bad or be ruined, especially food left too long or handled badly.",
          literal: "to throw itself to lose",
          useWhen:
            "Food spoils, a plan collapses or an object gets ruined: “se echó a perder”.",
          avoidWhen:
            "You mean a person is lost or physically misplaced; this is about deterioration.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["dañarse", "podrirse", "vencerse", "arruinarse"],
          example: {
            target: "El pescado se echó a perder.",
            translation: "The fish went bad."
          }
        },
        {
          term: "échele ganas",
          explanation:
            "Put effort in, keep at it, try with energy. It encourages persistence more than technical skill.",
          literal: "throw desire at it",
          useWhen:
            "Someone is struggling but can keep going: cooking, studying, working, training.",
          avoidWhen:
            "Someone needs concrete help or rest; empty encouragement can sound dismissive if the problem is real.",
          register: "friendly informal",
          region: "Very common in Colombia and Mexico; widely understood.",
          related: ["hacerle", "meterle ganas", "ánimo", "seguir intentando"],
          example: {
            target: "Échele ganas, que ya casi acaba.",
            translation: "Keep at it, you're almost done."
          }
        },
        {
          term: "echar de menos",
          explanation:
            "To miss someone or something emotionally; useful, but less Colombian-sounding than extrañar in everyday speech.",
          literal: "to throw from less",
          useWhen:
            "You hear it in songs, writing or some speakers' everyday Spanish: “echo de menos mi casa”.",
          avoidWhen:
            "You want the most ordinary Colombian spoken verb; “extrañar” is usually the safer everyday choice.",
          register: "neutral",
          region: "General Spanish; Colombians understand it, but “extrañar” is more everyday.",
          related: ["extrañar", "hacer falta", "nostalgia", "recordar"],
          example: {
            target: "Echo de menos la comida de mi casa.",
            translation: "I miss the food from home."
          }
        }
      ],
      note:
        "Echar is not one verb you translate once. In a kitchen, “échele sal” means add salt, and spoken Colombian Spanish reaches for echar more readily than a formal recipe's “agregar”. In teamwork, “echar una mano” is lend a hand. With food, “echarse a perder” is spoil or go bad. And “échele ganas” is encouragement: put effort in, keep at it. The command forms carry accents when pronouns attach: échale, échele.",
      culture: [
        {
          label: "Echar is spoken, agregar is recipe-like",
          body:
            "Both “echar sal” and “agregar sal” are correct, but they do not feel identical. A recipe may say agregar or añadir; a person standing beside you often says “échele sal” or “le echo más agua”. Echar is practical, quick and conversational. Learning it keeps your Spanish from sounding like it was copied from the printed instructions on a packet."
        },
        {
          label: "A hand, not a speech",
          body:
            "“Te echo una mano” is a useful offer because it names help without making a ceremony of it. In a crowded kitchen, washing plates or holding a bowl may help more than asking vaguely what to do. The idiom is friendly and physical: someone joins the work already happening. It is not formal service language, and that is exactly why it feels warm."
        },
        {
          label: "Encouragement has limits",
          body:
            "“Échele ganas” can be generous or lazy depending on context. Said to someone who is tired but capable, it encourages: keep going, you are close. Said to someone facing a structural problem, it can sound like you are ignoring the problem and telling them to try harder. The phrase is common, but good speakers still read the room."
        },
        {
          label: "San Andrés as a real kitchen",
          body:
            "San Andrés brings fish, coconut and island movement into the scene without forcing dialect claims. The conversation stays in general Colombian Spanish because echar belongs everywhere. The place matters through what is cooking and the pressure of guests arriving, not through decorative slang."
        }
      ],
      pitfalls: [
        {
          mistake: "Translating every echar as “throw”",
          whyItFails:
            "“Échale sal” does not mean throw salt aggressively; it means add it. “Echar una mano” is not throwing a hand. Echar is a context verb, and the English translation changes with the phrase.",
          sayInstead: "Échale sal = add salt; echar una mano = lend a hand."
        },
        {
          mistake: "Writing “echale” without the accent",
          whyItFails:
            "With the pronoun attached, the command needs the accent: échale or échele. The accent preserves the command's spoken stress.",
          sayInstead: "Échale sal. / Échele ganas."
        },
        {
          mistake: "Using “échele ganas” when someone needs real help",
          whyItFails:
            "The phrase encourages effort, but it can sound dismissive if the person needs tools, time or assistance. Sometimes the better echar phrase is “te echo una mano”.",
          sayInstead: "Te echo una mano."
        },
        {
          mistake: "Saying only “se dañó” for food that spoiled after being left out",
          whyItFails:
            "“Se dañó” is understandable, but “se echó a perder” is the fuller idiom for food or plans that went bad. It is especially useful when the deterioration happened over time.",
          sayInstead: "El pescado se echó a perder."
        }
      ],
      variations: [
        {
          form: "Échale sal.",
          register: "friendly informal",
          region: "Universal Spanish",
          whenToUse: "Telling a friend to add salt."
        },
        {
          form: "Échele un poquito de agua.",
          register: "polite neutral",
          region: "Universal Spanish",
          whenToUse: "Usted command for adding liquid."
        },
        {
          form: "Te echo una mano.",
          register: "friendly informal",
          region: "Universal Spanish",
          whenToUse: "Offering practical help."
        },
        {
          form: "Se echó a perder.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Food, a plan or an object went bad."
        },
        {
          form: "Échele ganas.",
          register: "friendly informal",
          region: "Colombia and Mexico",
          whenToUse: "Encouraging someone to keep trying."
        }
      ],
      prompt: "Mariana says “échale sal al pescado.” What does “échale” mean here?",
      choices: [
        "Add it to the fish.",
        "Throw it across the room.",
        "Miss it very strongly."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which phrase offers practical help?",
          choices: [
            "Te echo de menos.",
            "Te echo una mano.",
            "Te echo a perder."
          ],
          answer: 1,
          tests: "echar una mano = lend a hand"
        },
        {
          prompt: "Which sentence means the fish went bad?",
          choices: [
            "El pescado echó sal.",
            "El pescado echó una mano.",
            "El pescado se echó a perder."
          ],
          answer: 2,
          tests: "echarse a perder = spoil"
        },
        {
          prompt: "Which Colombian encouragement means “keep at it”?",
          choices: [
            "Échele ganas.",
            "Échele llamada.",
            "Échele pérdida."
          ],
          answer: 0,
          tests: "échele ganas = keep at it"
        }
      ]
    },
    en: {
      title: "Agregar, ayudar y seguir intentando en una cocina de Londres",
      situation:
        "En Londres, Alejandra cocina con Priya antes de una cena compartida. Usted aprende que “echarle sal” suele ser “add salt”, que “echar una mano” es “lend a hand”, que la comida “goes bad” o “spoils”, y que “échele ganas” no se traduce literalmente sino con ánimo real: “keep at it”.",
      setting: {
        who: "Priya organiza una cena compartida y cocina mientras reparte tareas. Alejandra ayuda, pero traduce echar demasiado literalmente.",
        what: "Una cocina ocupada donde hay que añadir sal, ayudar con platos, evitar que se dañe el pescado y animar sin sonar raro.",
        when: "Una tarde de viernes, una hora antes de que lleguen los invitados.",
        where: "Londres, Reino Unido, en la cocina de un piso compartido.",
        why: "Porque el inglés no tiene un solo verbo equivalente a echar. Según la frase, usted necesita add, put in, lend a hand, go bad, spoil o keep at it."
      },
      address: {
        form: "mixed",
        who: "Priya y Alejandra usan “you”; la confianza se marca con tono y frases cortas, no con pronombres distintos.",
        why: "La cocina compartida es informal. El inglés no cambia de segunda persona, así que una instrucción suena amable por “could you”, “please” o por la relación.",
        ifYouSwitch:
          "Si Alejandra quiere sonar más respetuosa, no busca otro you. Dice “could you add…?” o “would you mind…?”; el pronombre se queda igual."
      },
      dialogue: [
        {
          speaker: "Priya",
          target: "Add salt to the fish, but don't go wild with the chilli.",
          translation: "Échele sal al pescado, pero no se emocione con el picante.",
          pronunciation: "ad solt tu de fish, bat dont gou waild with de CHI-li",
          literal: "Añada sal al pescado, pero no vaya salvaje con el chile.",
          why: "Para “echar sal”, el verbo natural es “add”. “Don't go wild” significa no exagerar; no tiene que ver con volverse salvaje de verdad."
        },
        {
          speaker: "Alejandra",
          target: "Should I add lime too, or wait until you taste the sauce?",
          translation: "¿Le echo también limón, o espero a que pruebe la salsa?",
          pronunciation: "shud ai ad laim tu, or weit an-TIL yu teist de sos",
          literal: "¿Debería añadir lima también, o esperar hasta que usted pruebe la salsa?",
          why: "“Add lime” traduce “echar limón”. “Until you taste” no necesita subjuntivo visible como el español, pero sí mantiene la idea de esperar una comprobación futura."
        },
        {
          speaker: "Priya",
          target: "Wait. If you add too much lime, the coconut will take over.",
          translation: "Espere. Si le echa demasiado limón, el coco va a dominar todo.",
          pronunciation: "weit. if yu ad tu mach laim, de KOU-ko-nat wil teik OU-ver",
          literal: "Espere. Si usted añade demasiado limón, el coco tomará encima.",
          why: "“Take over” significa dominar o imponerse. Es una frase útil para sabores: un ingrediente puede take over si tapa todos los demás."
        },
        {
          speaker: "Alejandra",
          target: "Then I'll lend a hand with the dishes while you decide.",
          translation: "Entonces le echo una mano con los platos mientras decide.",
          pronunciation: "den ail lend a jand with de DI-shiz wail yu de-SAID",
          literal: "Entonces prestaré una mano con los platos mientras usted decide.",
          why: "“Lend a hand” es echar una mano. También se dice “give you a hand”. Ninguna de las dos frases imagina una mano literal; ambas ofrecen ayuda práctica."
        },
        {
          speaker: "Priya",
          target: "Thanks. If we leave that fish out, it'll go bad.",
          translation: "Gracias. Si dejamos ese pescado afuera, se va a echar a perder.",
          pronunciation: "thanks. if wi liv dat fish aut, itl gou bad",
          literal: "Gracias. Si dejamos ese pescado afuera, irá malo.",
          why: "Para “echarse a perder”, el inglés cotidiano dice “go bad”; “spoil” también funciona. No diga “throw itself to lose”, porque sólo calca la imagen española."
        },
        {
          speaker: "Priya",
          target: "You're doing fine; keep at it, we're almost done.",
          translation: "Va bien; échele ganas, que ya casi terminamos.",
          pronunciation: "yor DU-ing fain; kip at it, wir OL-moust dan",
          literal: "Usted está haciendo bien; manténgase en eso, estamos casi hechos.",
          why: "“Keep at it” traduce bien “échele ganas” cuando la idea es seguir intentando. Si quiere animar más, “you've got this” también sirve, pero no es una traducción literal."
        }
      ],
      vocabulary: [
        {
          term: "add",
          explanation:
            "Añadir o echar un ingrediente a una comida.",
          literal: "agregar / echar",
          useWhen:
            "Sal, agua, limón, especias o cualquier ingrediente: “add salt”, “add a little water”.",
          avoidWhen:
            "No traduzca “echar” como “throw” en instrucciones normales de cocina.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["put in", "stir in", "season", "mix in"],
          example: {
            target: "Add salt to the fish.",
            translation: "Échele sal al pescado."
          }
        },
        {
          term: "put in",
          explanation:
            "Meter o echar algo dentro de una mezcla o recipiente; más físico y general que add.",
          literal: "poner adentro",
          useWhen:
            "Quiere decir dónde va algo: “put in more water”, “put the fish in the pan”.",
          avoidWhen:
            "Una receta formal o medida precisa; “add” suele sonar más limpio.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["add", "drop in", "pour in", "throw in"],
          example: {
            target: "Put in a little more water.",
            translation: "Échele un poquito más de agua."
          }
        },
        {
          term: "lend a hand / give a hand",
          explanation:
            "Echar una mano: ayudar con una tarea concreta.",
          literal: "prestar / dar una mano",
          useWhen:
            "Platos, bolsas, mudanzas, limpieza o tareas manuales: “I'll lend a hand”.",
          avoidWhen:
            "No diga “throw a hand”; eso sólo traduce las palabras, no el idiom.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["help out", "pitch in", "help with", "give me a hand"],
          example: {
            target: "I'll lend a hand with the dishes.",
            translation: "Le echo una mano con los platos."
          }
        },
        {
          term: "go bad / spoil",
          explanation:
            "Echarse a perder, sobre todo comida que se daña por tiempo, calor o mala conservación.",
          literal: "irse malo / dañarse",
          useWhen:
            "Carne, pescado, leche, frutas o planes que se arruinan: “the fish went bad”.",
          avoidWhen:
            "La salsa se separó pero no se pudrió; ahí puede ser “split” o “curdle”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["spoiled", "rotten", "expire", "ruin"],
          example: {
            target: "The fish went bad.",
            translation: "El pescado se echó a perder."
          }
        },
        {
          term: "keep at it",
          explanation:
            "Seguir intentando con esfuerzo; una buena traducción de “échele ganas” cuando alguien va avanzando.",
          literal: "mantenerse en eso",
          useWhen:
            "Animar a alguien que está luchando con una tarea: “keep at it, you're close”.",
          avoidWhen:
            "La persona necesita ayuda concreta; entonces ofrezca ayuda, no sólo ánimo.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["keep going", "you've got this", "try hard", "don't give up"],
          example: {
            target: "Keep at it, you're almost done.",
            translation: "Échele ganas, que ya casi termina."
          }
        },
        {
          term: "take over",
          explanation:
            "Dominar o imponerse, útil para sabores que tapan a los demás.",
          literal: "tomar encima",
          useWhen:
            "Un ingrediente queda demasiado fuerte: “the lime takes over”.",
          avoidWhen:
            "Usted sólo quiere decir que algo tomó físicamente un objeto; aquí es figurado.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["overpower", "too strong", "balance", "flavor"],
          example: {
            target: "The lime will take over.",
            translation: "El limón va a dominar todo."
          }
        },
        {
          term: "throw in",
          explanation:
            "Echar o meter algo de forma casual, más informal que add.",
          literal: "tirar adentro",
          useWhen:
            "Una cantidad aproximada o una idea añadida sin ceremonia: “throw in some herbs”.",
          avoidWhen:
            "Una instrucción cuidada, formal o precisa; “add” suena más seguro.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["add", "put in", "toss in", "mix in"],
          example: {
            target: "Throw in some herbs at the end.",
            translation: "Échele unas hierbas al final."
          }
        }
      ],
      note:
        "Echar cambia de traducción según la frase. En cocina, “échele sal” suele ser “add salt” o, más casual, “throw in some salt”. “Echar una mano” es “lend a hand” o “give a hand”. “Echarse a perder” es “go bad” o “spoil”. “Échele ganas” puede ser “keep at it”, “keep going” o “you've got this”. La mala traducción común es usar throw para todo; sólo funciona en algunos contextos informales, no como solución universal.",
      culture: [
        {
          label: "Add suena menos dramático que throw",
          body:
            "Aunque “throw in some salt” existe y suena casual, “add salt” es la opción segura en una cocina. El español echar no siempre tiene la fuerza física de throw. Si usted dice “throw salt at the fish”, puede sonar agresivo o cómico. Aprender cuándo bajar la intensidad del verbo es parte de sonar natural."
        },
        {
          label: "Ayudar en una cocina compartida",
          body:
            "En una cena compartida anglófona, “I'll lend a hand” o “I'll give you a hand” ofrece ayuda sin invadir. La frase es concreta pero flexible: platos, bolsas, mesa, basura. Como en español, la mejor ayuda suele ser hacer una tarea visible, no pedirle a la persona ocupada que administre su buena voluntad."
        },
        {
          label: "Encouragement without pretending",
          body:
            "“Keep at it” y “you've got this” animan, pero no sustituyen la ayuda real. Si alguien sólo necesita confianza, funcionan muy bien. Si necesita otra persona lavando platos o bajando el fuego, la frase puede sonar vacía. Lo mismo pasa con “échele ganas”: el contexto decide si es apoyo o evasión."
        },
        {
          label: "Food going bad",
          body:
            "“Go bad” es una frase cotidiana y nada técnica. Sirve para pescado, leche, fruta y sobras olvidadas. “Spoil” también es correcto y un poco más formal o escrito. Para un colombiano, la clave es no calcar “throw itself to lose”. El inglés expresa el deterioro como ir hacia lo malo: go bad."
        }
      ],
      pitfalls: [
        {
          mistake: "“Throw salt to the fish.”",
          whyItFails:
            "Es un calco de “échale sal al pescado”. En inglés normal de cocina, la frase segura es “add salt to the fish”. “Throw salt to” suena raro y demasiado físico.",
          sayInstead: "Add salt to the fish."
        },
        {
          mistake: "“I'll throw you a hand.”",
          whyItFails:
            "“Echar una mano” no se traduce palabra por palabra. El idiom inglés es “lend a hand” o “give a hand”.",
          sayInstead: "I'll lend you a hand."
        },
        {
          mistake: "“The fish threw itself to lose.”",
          whyItFails:
            "Es la imagen española copiada al inglés. La comida que se echa a perder “goes bad” o “spoils”.",
          sayInstead: "The fish went bad."
        },
        {
          mistake: "“Throw it desires.”",
          whyItFails:
            "“Échele ganas” no tiene una traducción literal útil. Para animar a alguien, diga “keep at it”, “keep going” o “you've got this”.",
          sayInstead: "Keep at it."
        }
      ],
      variations: [
        {
          form: "Add salt to the fish.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Traducir “échele sal” de forma segura."
        },
        {
          form: "Throw in some herbs.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Añadir algo de manera casual."
        },
        {
          form: "I'll lend a hand.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Ofrecer ayuda práctica."
        },
        {
          form: "The fish went bad.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "La comida se echó a perder."
        },
        {
          form: "Keep at it.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Animar a alguien a seguir intentando."
        }
      ],
      prompt: "¿Cuál traduce mejor “échale sal al pescado” en una cocina?",
      choices: [
        "Throw salt to the fish.",
        "Add salt to the fish.",
        "Miss salt from the fish."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cómo dice “te echo una mano con los platos”?",
          choices: [
            "I throw you a hand with the dishes.",
            "I miss a hand with the dishes.",
            "I'll lend you a hand with the dishes."
          ],
          answer: 2,
          tests: "lend a hand"
        },
        {
          prompt: "El pescado se echó a perder. ¿Cuál es natural?",
          choices: [
            "The fish went bad.",
            "The fish threw itself away.",
            "The fish missed itself."
          ],
          answer: 0,
          tests: "go bad / spoil"
        },
        {
          prompt: "¿Cuál puede traducir “échele ganas” como ánimo?",
          choices: [
            "Throw it desires.",
            "Keep at it.",
            "Add some wins."
          ],
          answer: 1,
          tests: "keep at it"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/48-extending-in-the-kitchen.js");
