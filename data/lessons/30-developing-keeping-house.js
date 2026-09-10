/*
 * Lesson block: developing / keeping house.
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
    id: "hacer-aseo-en-la-casa-de-la-playa",
    level: "Developing · Keeping house",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    pathways: ["foundation", "year-12"],
    verb: "limpiar",
    review: "pending",
    es: {
      title: "Hacer aseo en la casa de la playa",
      situation:
        "Estás pasando unos días en una casa familiar cerca de Santa Marta. La brisa trae arena, la humedad mancha los vidrios y tu prima propone organizar el aseo antes de que llegue la visita.",
      setting: {
        who: "Marce owns the beach house and knows how quickly salt air makes everything feel sticky. Sam is staying with relatives and wants to help without sounding like a helpless guest.",
        what: "A practical morning plan for cleaning the living room, porch chairs, windows and bathroom before cousins arrive after lunch.",
        when: "Late morning, after breakfast but before the coastal heat makes serious housework feel twice as heavy.",
        where: "A family house outside Santa Marta, close enough to the sea that sand comes in even when nobody admits bringing it.",
        why: "Because Colombians often use hacer aseo for the whole household routine, while limpiar names the focused act of making a particular thing clean."
      },
      address: {
        form: "tú",
        who: "Marce and Sam are cousins of the same generation, so they use tú naturally while dividing chores.",
        why: "On the Caribbean coast, tú is common in close family talk. It keeps the requests direct without making them sound like orders.",
        ifYouSwitch:
          "Usted would suddenly sound cold or teasing. Vos would be understood by many Colombians, but it is not the ordinary coastal choice for this family scene."
      },
      dialogue: [
        {
          speaker: "Marce",
          target: "Antes de que lleguen todos, hagamos aseo en la sala y la terraza.",
          translation: "Before everyone arrives, let's clean the living room and the terrace.",
          pronunciation: "AN-tes deh keh YEH-gen TOH-dos, ah-GAH-mos ah-SEH-oh en la SAH-la ee la teh-RRAH-sa",
          literal: "Before that they-arrive all, let's-do cleaning in the room and the terrace.",
          why: "Hacer aseo is the Colombian phrase for a shared house-cleaning push. It is broader and more idiomatic than naming every surface with limpiar."
        },
        {
          speaker: "Sam",
          target: "Listo. Yo limpio los vidrios, que quedaron salpicados de sal.",
          translation: "Done. I'll clean the windows; they got splashed with salt.",
          pronunciation: "LEES-toh. yo LEEM-pyoh los BEE-dryos, keh keh-DAH-ron sal-pee-KAH-dos deh sal",
          literal: "Ready. I clean the glasses, that stayed splashed of salt.",
          why: "Limpiar points to the direct job: removing dirt from a thing. The salt on the windows gives the verb a real object, not just a vague promise to help."
        },
        {
          speaker: "Marce",
          target: "Buenísimo; yo paso el trapero y limpio el baño rápido.",
          translation: "Great; I'll mop and clean the bathroom quickly.",
          pronunciation: "bweh-NEE-see-moh; yo PAH-so el trah-PEH-roh ee LEEM-pyoh el BAH-nyoh RRAH-pee-doh",
          literal: "Very good; I pass the mop and clean the bathroom quick.",
          why: "Pasar el trapero is the Colombian way to say mop the floor. Limpiar el baño is still normal because the bathroom needs actual scrubbing."
        },
        {
          speaker: "Sam",
          target: "¿También limpio las sillas de plástico o sólo les quito la arena?",
          translation: "Should I also clean the plastic chairs or just get the sand off them?",
          pronunciation: "tam-BYEN LEEM-pyoh las SEE-yas deh PLAS-tee-koh o SOH-loh les KEE-toh la ah-REH-na",
          literal: "Also I-clean the chairs of plastic or only from-them I-remove the sand?",
          why: "The question shows a useful distinction: limpiar means making them clean; quitar la arena is only removing the obvious sand."
        },
        {
          speaker: "Marce",
          target: "Límpialas bien, porque la humedad deja todo pegajoso.",
          translation: "Clean them properly, because the humidity leaves everything sticky.",
          pronunciation: "LEEM-pyah-las byen, POR-keh la oo-meh-DAD DEH-ha TOH-doh peh-gah-HOH-soh",
          literal: "Clean-them well, because the humidity leaves everything sticky.",
          why: "The object pronoun attaches to the command: límpialas, clean them. That little ending is natural once the chairs are already in the conversation."
        },
        {
          speaker: "Sam",
          target: "De una. Si alcanzo, limpio también las marcas de la pared.",
          translation: "Sure. If I have time, I'll also clean the marks on the wall.",
          pronunciation: "deh OO-na. see al-KAN-soh, LEEM-pyoh tam-BYEN las MAR-kas deh la pah-RED",
          literal: "In one. If I reach, I clean also the marks of the wall.",
          why: "De una is a common Colombian yes-with-action: right away, no problem. The second limpiar adds a realistic condition instead of a beginner list of chores."
        }
      ],
      vocabulary: [
        {
          term: "limpiar",
          explanation:
            "To clean a specific thing, usually because dirt, dust, salt or marks need to come off it.",
          literal: "to clean",
          useWhen: "Naming the object of the work: windows, chairs, bathroom tiles, a wall, a table, or a stain that needs attention.",
          avoidWhen: "Talking about the whole household routine. In Colombia hacer aseo sounds more domestic and much more natural for that wider job.",
          register: "neutral",
          region: "General Spanish, with the same everyday value in Colombia.",
          related: ["hacer aseo", "quitar", "trapear", "barrer"],
          example: { target: "Yo limpio los vidrios.", translation: "I'll clean the windows." }
        },
        {
          term: "hacer aseo",
          explanation: "The ordinary Colombian phrase for cleaning the house, especially as a routine or a shared chore.",
          literal: "to do cleaning",
          useWhen: "Planning a household clean, asking who is helping, or saying that Saturday morning is for chores.",
          avoidWhen: "A single small object is the focus. You clean a mirror or a chair; you do aseo in the house.",
          register: "neutral domestic",
          region: "Very common in Colombia; more natural than a literal phrase about cleaning the house.",
          related: ["limpiar", "organizar", "barrer", "pasar el trapero"],
          example: { target: "Hagamos aseo en la sala.", translation: "Let's clean the living room." }
        },
        {
          term: "los vidrios",
          explanation: "The panes or windows, not drinking glasses in this housework context.",
          literal: "the glasses",
          useWhen: "Talking about windows that face rain, sea air, fingerprints or street dust.",
          avoidWhen: "You mean cups or tumblers. Those are vasos, and mixing them up makes the chore confusing.",
          register: "neutral",
          region: "General Colombian household speech.",
          related: ["ventanas", "espejos", "marcos", "persianas"],
          example: { target: "Los vidrios quedaron salpicados de sal.", translation: "The windows got splashed with salt." }
        },
        {
          term: "pasar el trapero",
          explanation: "To mop, phrased as passing the mop across the floor.",
          literal: "to pass the mop",
          useWhen: "Cleaning a tiled floor after sand, mud or spilled water has made sweeping useless.",
          avoidWhen: "You are only sweeping. Barrer and trapear are different jobs and different tools.",
          register: "neutral domestic",
          region: "Common in Colombia; trapero is the normal household mop.",
          related: ["trapear", "barrer", "recoger", "secar"],
          example: { target: "Yo paso el trapero en la terraza.", translation: "I'll mop the terrace." }
        },
        {
          term: "quitar la arena",
          explanation: "To get the sand off something, without promising a full clean.",
          literal: "to remove the sand",
          useWhen: "The visible problem is sand on chairs, feet, towels or the floor after a beach morning.",
          avoidWhen: "The surface is greasy, sticky or stained. Then quitar is too small; limpiar is the real job.",
          register: "neutral",
          region: "General Colombian and especially useful on the coast.",
          related: ["limpiar", "sacudir", "barrer", "enjuagar"],
          example: { target: "Sólo les quito la arena.", translation: "I'll just get the sand off them." }
        },
        {
          term: "límpialas",
          explanation: "A tú command with the object pronoun attached: clean them.",
          literal: "clean-them",
          useWhen: "The objects are already known and feminine plural, such as sillas, ventanas or paredes.",
          avoidWhen: "You have not named the objects yet. Then the pronoun lands before the listener knows what it refers to.",
          register: "friendly informal",
          region: "General Spanish; the command form changes with usted and vos.",
          related: ["límpialo", "límpielas", "limpialas", "límpienlas"],
          example: { target: "Límpialas bien.", translation: "Clean them properly." }
        },
        {
          term: "de una",
          explanation: "A Colombian way to accept and move immediately: sure, right away, I'm on it.",
          literal: "in one",
          useWhen: "Agreeing to a small task without ceremony, especially among friends or family.",
          avoidWhen: "A formal work email or a tense conversation. It can sound too casual for a written commitment.",
          register: "friendly informal",
          region: "Very common in Colombia, especially in speech.",
          related: ["listo", "claro", "ya mismo", "hágale"],
          example: { target: "De una, limpio las marcas.", translation: "Sure, I'll clean the marks." }
        }
      ],
      note:
        "The key move is not replacing limpiar with hacer aseo everywhere. Colombians use both. Hacer aseo frames the shared household routine; limpiar focuses the sponge, rag or brush on one thing. If you say you are going to limpiar la casa, people understand you, but hacer aseo sounds like you learned the phrase from a real Colombian home.",
      culture: [
        {
          label: "Coastal houses are never fully sealed",
          body:
            "Near Santa Marta, sand and salt air enter a house as if they paid rent. Cleaning is not a dramatic spring-cleaning event; it is maintenance against humidity. That is why the dialogue talks about sticky chairs and salted windows rather than an imaginary spotless beach villa."
        },
        {
          label: "Housework is organized aloud",
          body:
            "In many Colombian homes, chores are negotiated in real time: who mops, who wipes the chairs, who checks the bathroom before guests arrive. A useful learner does not wait for a command; offering a specific job with limpiar is socially smoother than saying only that you want to help."
        },
        {
          label: "Aseo is ordinary, not fancy",
          body:
            "Aseo can sound formal to English ears because it resembles words about hygiene, but in Colombian Spanish it is plain household vocabulary. Hacer aseo on a Saturday morning is as normal as laundry or sweeping, not a special deep-cleaning service."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “limpiar la casa” for the whole routine",
          whyItFails: "It is grammatical, but it misses the household phrase Colombians reach for first. For the whole routine, hacer aseo sounds less translated and more lived-in.",
          sayInstead: "Vamos a hacer aseo."
        },
        {
          mistake: "Using “vasos” when you mean window panes",
          whyItFails: "Vasos are drinking glasses. In a cleaning conversation, los vidrios usually points to the window glass or panes, especially when salt and fingerprints are the problem.",
          sayInstead: "Voy a limpiar los vidrios."
        },
        {
          mistake: "Treating “límpialas” as a new noun",
          whyItFails: "The ending is not vocabulary; it is the object pronoun attached to the command. It works only because the chairs have already been named.",
          sayInstead: "Límpialas bien."
        }
      ],
      variations: [
        { form: "Voy a limpiar los vidrios.", register: "neutral", region: "General Colombian", whenToUse: "You are naming the exact job you will take on. Clear, useful and not overexplained." },
        { form: "Hagamos aseo antes de que llegue la visita.", register: "neutral domestic", region: "Colombia", whenToUse: "You mean the whole housework push before guests, not one object with a rag." },
        { form: "¿Limpio esto bien o sólo le quito la arena?", register: "friendly informal", region: "General Colombian", whenToUse: "You need to know whether the host wants a real clean or just the obvious mess removed." }
      ],
      prompt: "Marce says “hagamos aseo” before assigning exact jobs. What is she framing?",
      choices: [
        "A repair job that will happen outside the house.",
        "A shared household clean before the visitors arrive.",
        "A paid cleaning service scheduled for the afternoon."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence best offers a specific cleaning job?",
          choices: ["Voy a limpiar los vidrios.", "Voy a servir los vidrios.", "Voy a pedir los vidrios."],
          answer: 0,
          tests: "limpiar with a concrete object rather than a restaurant verb"
        },
        {
          prompt: "What is the most Colombian way to say the family is cleaning the house?",
          choices: ["La familia come aseo hoy.", "La familia hace aseo hoy.", "La familia abre aseo hoy."],
          answer: 1,
          tests: "hacer aseo as the household routine"
        },
        {
          prompt: "Marce says “límpialas” after naming the chairs. What does the ending do?",
          choices: [
            "It changes the command into a future plan.",
            "It makes the sentence formal with usted.",
            "It points back to the chairs already mentioned."
          ],
          answer: 2,
          tests: "attached object pronoun in a tú command"
        },
        {
          prompt: "Why is “quitar la arena” smaller than “limpiar las sillas”?",
          choices: [
            "Because it removes the visible sand, not every sticky mark.",
            "Because it means buying new chairs after the beach.",
            "Because it asks someone else to clean the chairs."
          ],
          answer: 0,
          tests: "quitar as removing one visible problem"
        }
      ]
    },
    en: {
      title: "Ayudar con el aseo en una casa de la costa",
      situation:
        "Usted está en una casa familiar cerca de Santa Marta y quiere ayudar antes de que lleguen varios primos. Tiene que hablar de limpiar vidrios, sillas y baño en inglés sin sonar como una lista de diccionario.",
      setting: {
        who: "Marce tiene la casa y sabe cómo la brisa salada deja todo pegajoso. Samuel está de visita con la familia y quiere ayudar sin esperar instrucciones para cada trapo.",
        what: "Un plan práctico para limpiar la sala, la terraza y el baño antes de que los primos lleguen después del almuerzo.",
        when: "Al final de la mañana, después del desayuno y antes de que el calor vuelva pesado cualquier oficio serio.",
        where: "Una casa familiar cerca de Santa Marta, tan cerca del mar que entra arena incluso cuando nadie admite haberla traído.",
        why: "Porque el inglés usa clean para el acto específico y no tiene una frase equivalente a hacer aseo que sea igual de doméstica. Usted tiene que construir la idea con contexto."
      },
      address: {
        form: "mixed",
        who: "Marce y Samuel se hablan con nombres de pila y el mismo you de siempre.",
        why: "El inglés no cambia el pronombre para marcar confianza. La cercanía aparece en frases cortas como let's, I'll y sure, no en una forma distinta de usted o tú.",
        ifYouSwitch:
          "No hay un cambio de pronombre disponible. Si usted vuelve demasiado formal la frase, con expresiones largas o títulos, la conversación familiar empieza a sonar como una reunión de trabajo."
      },
      dialogue: [
        {
          speaker: "Marce",
          target: "Before everyone gets here, let's clean the living room and the terrace.",
          translation: "Antes de que lleguen todos, hagamos aseo en la sala y la terraza.",
          pronunciation: "bi-FOR ev-ri-uan gets jir, lets klin da LI-ving rum and da TE-ras",
          literal: "Antes de que todos lleguen aquí, limpiemos la sala y la terraza.",
          why: "Clean hace aquí el trabajo de una frase completa en español. No traduce hacer aseo palabra por palabra, pero en contexto comunica que todos van a meterle mano a la casa."
        },
        {
          speaker: "Samuel",
          target: "Sure. I'll clean the windows; they got sprayed with salt.",
          translation: "Listo. Yo limpio los vidrios, que quedaron salpicados de sal.",
          pronunciation: "shur. ail klin da UIN-dous; dei gat spreid uid solt",
          literal: "Seguro. Yo limpiaré las ventanas; ellas quedaron rociadas con sal.",
          why: "Windows evita la ambigüedad de vidrios. Si usted dice glasses, la otra persona pensará en vasos, no en los paneles que miran hacia el mar."
        },
        {
          speaker: "Marce",
          target: "Great; I'll mop and give the bathroom a quick clean.",
          translation: "Buenísimo; yo paso el trapero y limpio el baño rápido.",
          pronunciation: "greit; ail mop and giv da BATH-rum a kuik klin",
          literal: "Genial; yo trapearé y le daré al baño una limpieza rápida.",
          why: "Give the bathroom a quick clean suena más natural que clean the bathroom quickly cuando lo que importa es una pasada suficiente antes de la visita."
        },
        {
          speaker: "Samuel",
          target: "Should I clean the plastic chairs too, or just get the sand off?",
          translation: "¿También limpio las sillas de plástico o sólo les quito la arena?",
          pronunciation: "shud ai klin da PLAS-tik chers tu, or yost get da sand of",
          literal: "¿Debería limpiar las sillas plásticas también, o sólo quitar la arena?",
          why: "Get the sand off es una opción más pequeña que clean. Esa diferencia le permite preguntar cuánto detalle espera la anfitriona sin parecer perezoso."
        },
        {
          speaker: "Marce",
          target: "Clean them properly, because the humidity leaves everything sticky.",
          translation: "Límpialas bien, porque la humedad deja todo pegajoso.",
          pronunciation: "klin dem PRA-per-li, bi-koz da ju-MI-di-ti livz EV-ri-thin STI-ki",
          literal: "Límpielas apropiadamente, porque la humedad deja todo pegajoso.",
          why: "Them retoma las sillas, igual que las en español. La diferencia es que el pronombre va separado y no pegado al mandato."
        },
        {
          speaker: "Samuel",
          target: "No problem. If I have time, I'll clean the marks on the wall too.",
          translation: "De una. Si alcanzo, limpio también las marcas de la pared.",
          pronunciation: "nou PRA-blem. if ai jav taim, ail klin da marks on da wol tu",
          literal: "No hay problema. Si tengo tiempo, limpiaré las marcas en la pared también.",
          why: "No problem acepta la tarea sin ceremonia. If I have time vuelve la promesa realista, no una lista perfecta de manual."
        }
      ],
      vocabulary: [
        {
          term: "clean",
          explanation: "El verbo general para quitar suciedad, polvo, sal o marcas de una cosa o de un espacio.",
          literal: "limpiar / hacer aseo",
          useWhen: "Al hablar de ventanas, sillas, baños, paredes, mesas o de una habitación completa antes de una visita.",
          avoidWhen: "Usted quiere decir lavar con agua y jabón una prenda, unos platos o las manos. Ahí wash suele ser más preciso.",
          register: "neutro",
          region: "Inglés universal; el contexto decide si traduce limpiar o hacer aseo.",
          related: ["wipe", "mop", "dust", "tidy"],
          example: { target: "I'll clean the windows.", translation: "Voy a limpiar los vidrios." }
        },
        {
          term: "let's clean",
          explanation: "La forma corriente de proponer que varias personas limpien juntas, sin traducir hacer aseo palabra por palabra.",
          literal: "limpiemos",
          useWhen: "Al organizar una limpieza compartida antes de visitas o después de que una casa quedó desordenada.",
          avoidWhen: "Usted está contratando a alguien. Ahí necesita una petición o un servicio, no una invitación con let's.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["let's tidy up", "let's mop", "let's wipe everything down", "let's get this place clean"],
          example: { target: "Let's clean the living room.", translation: "Hagamos aseo en la sala." }
        },
        {
          term: "windows",
          explanation: "La palabra segura para los vidrios de una casa. Glasses son vasos o gafas, no ventanas.",
          literal: "ventanas / vidrios",
          useWhen: "Al hablar de paneles que dan a la calle, al patio o al mar.",
          avoidWhen: "Se refiere a vasos de beber. Para eso use glasses sólo si el contexto ya es la mesa, no la limpieza de la casa.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["panes", "glass doors", "screens", "frames"],
          example: { target: "The windows got sprayed with salt.", translation: "Los vidrios quedaron salpicados de sal." }
        },
        {
          term: "mop",
          explanation: "Trapear o pasar el trapero, como verbo y también como el objeto que toca el piso.",
          literal: "trapear / trapero",
          useWhen: "Cuando el piso necesita agua o humedad, no sólo barrer polvo seco.",
          avoidWhen: "Sólo va a barrer. Sweep y mop son oficios distintos, tal como barrer y trapear.",
          register: "neutro doméstico",
          region: "Inglés universal.",
          related: ["sweep", "wipe", "bucket", "floor"],
          example: { target: "I'll mop the terrace.", translation: "Voy a pasar el trapero en la terraza." }
        },
        {
          term: "get the sand off",
          explanation: "Quitar la arena de una superficie sin prometer que todo queda limpio de verdad.",
          literal: "quitar la arena",
          useWhen: "La pregunta es si basta con retirar lo visible de unas sillas, toallas o del piso.",
          avoidWhen: "Hay grasa, manchas o humedad pegajosa. En ese caso clean comunica mejor la tarea completa.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["wipe it off", "brush it off", "shake it out", "rinse it off"],
          example: { target: "Should I just get the sand off?", translation: "¿Sólo le quito la arena?" }
        },
        {
          term: "clean them",
          explanation: "Limpiarlas o limpiarlos. El pronombre them va separado y retoma algo plural que ya se nombró.",
          literal: "limpiarlos / limpiarlas",
          useWhen: "Ya se sabe que habla de las sillas, las ventanas o las paredes.",
          avoidWhen: "Todavía no nombró el objeto. Entonces them suena vacío y obliga al oyente a preguntar qué cosa.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["clean it", "wipe them", "wash them", "tidy them"],
          example: { target: "Clean them properly.", translation: "Límpialas bien." }
        },
        {
          term: "no problem",
          explanation: "Una aceptación breve de una tarea pequeña, equivalente en función a listo o de una.",
          literal: "no hay problema",
          useWhen: "Al aceptar una petición doméstica sin hacerla sonar pesada.",
          avoidWhen: "Quiere prometer una fecha formal o asumir una responsabilidad grande. Ahí hace falta una frase más completa.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["sure", "of course", "I'm on it", "all right"],
          example: { target: "No problem, I'll clean the wall too.", translation: "De una, limpio también la pared." }
        }
      ],
      note:
        "La trampa para usted es buscar una traducción fija de hacer aseo. En inglés no hace falta. Clean the house, clean the living room y let's clean comunican la idea con el objeto correcto. Cuando el oficio exige agua y jabón, wash entra en otra zona; aquí la clave es clean frente a wipe, mop y get off.",
      culture: [
        {
          label: "La costa cambia el tipo de limpieza",
          body: "Una casa cerca del mar no se ensucia como un apartamento seco. La sal deja película en los vidrios, la humedad vuelve pegajosas las sillas y la arena aparece en rincones absurdos. Por eso la escena necesita verbos concretos y no una palabra genérica para todo."
        },
        {
          label: "Ayudar es ofrecer una tarea concreta",
          body: "En una visita familiar, decir sólo que usted quiere ayudar puede obligar a la anfitriona a administrarlo. En inglés también suena mejor ofrecer algo específico: windows, chairs, bathroom. Así la ayuda llega como alivio y no como otra decisión pendiente."
        },
        {
          label: "Clean no siempre equivale a lavar",
          body: "El español colombiano separa mucho lavar, limpiar, barrer y trapear. El inglés también distingue wash, clean, sweep y mop, pero clean cubre más territorio que limpiar cuando se habla de habitaciones. El objeto de la frase le da la precisión que falta."
        }
      ],
      pitfalls: [
        {
          mistake: "“I clean the glasses” cuando habla de los vidrios",
          whyItFails: "Glasses se oye como vasos o gafas. Si la sal del mar está en los paneles de la casa, la palabra normal es windows.",
          sayInstead: "I'll clean the windows."
        },
        {
          mistake: "“I pass the mop” para decir que va a trapear",
          whyItFails: "Esa es una traducción transparente del español, pero en inglés mop ya contiene la acción completa. Pass the mop suena como entregar el objeto a otra persona.",
          sayInstead: "I'll mop the terrace."
        },
        {
          mistake: "“Let's do cleaning in the house” como traducción de hacer aseo",
          whyItFails: "Se entiende, pero suena armado desde el español. En una casa real, la frase natural es let's clean, let's tidy up o clean the house.",
          sayInstead: "Let's clean the living room."
        }
      ],
      variations: [
        { form: "I'll clean the windows.", register: "neutro", region: "Inglés universal", whenToUse: "Usted ofrece una tarea concreta y útil, sin una explicación larga." },
        { form: "Let's clean before everyone gets here.", register: "amistoso informal", region: "Inglés universal", whenToUse: "Quiere proponer el aseo general sin traducir hacer aseo palabra por palabra." },
        { form: "Should I clean these properly or just get the sand off?", register: "amistoso informal", region: "Inglés universal", whenToUse: "Necesita aclarar si basta quitar lo visible o si esperan una limpieza completa." }
      ],
      prompt: "Marce says “let's clean the living room and the terrace.” ¿Qué está proponiendo?",
      choices: [
        "Una reparación fuera de la casa para cuando baje el calor.",
        "Una limpieza compartida de la casa antes de que llegue la visita.",
        "Un servicio pagado de aseo que llegará durante la tarde."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase ofrece una tarea concreta de limpieza?",
          choices: ["I'll clean the windows.", "I'll order the windows.", "I'll serve the windows."],
          answer: 0,
          tests: "clean con un objeto concreto y no con un verbo de restaurante"
        },
        {
          prompt: "¿Cuál es la forma más natural de proponer hacer aseo en inglés?",
          choices: ["Let's do cleanliness before they arrive.", "Let's clean before they arrive.", "Let's make toilet before they arrive."],
          answer: 1,
          tests: "let's clean como equivalente funcional de hacer aseo"
        },
        {
          prompt: "En “clean them properly”, ¿qué hace them?",
          choices: ["Convierte la frase en una pregunta formal.", "Marca que la limpieza será mañana.", "Retoma las sillas que ya se mencionaron."],
          answer: 2,
          tests: "them como pronombre de objeto separado"
        },
        {
          prompt: "¿Por qué “get the sand off” es menos que “clean the chairs”?",
          choices: ["Porque sólo quita la arena visible de la superficie.", "Porque compra sillas nuevas para reemplazar las viejas.", "Porque le pide a otra persona que haga la limpieza."],
          answer: 0,
          tests: "get off como quitar un problema visible"
        }
      ]
    }
  },
  {
    id: "lavar-en-la-lavanderia-del-barrio",
    level: "Developing · Keeping house",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    verb: "lavar",
    review: "pending",
    es: {
      title: "Lavar ropa en la lavandería del barrio",
      situation:
        "Estás en Bucaramanga con una bolsa de ropa húmeda después de varios días de lluvia. Entras a una lavandería de barrio y necesitas explicar qué se lava, qué no se mezcla y cuándo puedes recoger todo.",
      setting: {
        who: "Don Álvaro runs a small laundry that also receives delicate items. Dana has been traveling through Santander and has damp clothes that cannot sit another night.",
        what: "A practical counter conversation about washing clothes, separating colors and asking whether the laundry can handle sneakers.",
        when: "Mid-afternoon after a humid morning, when many neighbors have decided their clothes will not dry at home.",
        where: "Bucaramanga, in a neighborhood laundry near Cabecera, with fans running and plastic baskets stacked behind the counter.",
        why: "Because lavar usually brings water, soap and a washing process, and the reflexive body-part pattern does not match English possessives."
      },
      address: {
        form: "usted",
        who: "Don Álvaro and Dana use usted both ways because this is a service encounter with practical detail.",
        why: "In Colombian shops, usted is the safe, respectful default. It lets Dana give laundry instructions without sounding bossy or overly familiar.",
        ifYouSwitch: "Tú would make the counter feel oddly intimate unless Don Álvaro clearly invited it. Vos would sound regionally misplaced in this Bucaramanga service setting."
      },
      dialogue: [
        {
          speaker: "Dana",
          target: "Buenas, ¿aquí me pueden lavar esta ropa para mañana?",
          translation: "Hi, can you wash these clothes for me by tomorrow?",
          pronunciation: "BWEH-nas, ah-KEE meh PWEH-den lah-BAR ES-ta RROH-pa PAH-ra mah-NYAH-na",
          literal: "Greetings, here for-me can they wash this clothing for tomorrow?",
          why: "Lavar makes the service clear: Dana wants the clothes washed, not just folded, aired or wiped. Me pueden keeps the request polite and practical."
        },
        {
          speaker: "Don Álvaro",
          target: "Claro, se la lavamos y se la entregamos seca por la tarde.",
          translation: "Of course, we'll wash it and deliver it dry in the afternoon.",
          pronunciation: "KLAH-roh, seh la lah-BAH-mos ee seh la en-treh-GAH-mos SEH-ka por la TAR-deh",
          literal: "Of course, to-you it we-wash and to-you it we-deliver dry by the afternoon.",
          why: "Se la lavamos is a compact service promise: we wash it for you. Colombian counter Spanish often packs the customer and the item into the verb line."
        },
        {
          speaker: "Dana",
          target: "Por favor no lave la camisa blanca con los jeans oscuros.",
          translation: "Please don't wash the white shirt with the dark jeans.",
          pronunciation: "por fah-BOR no LAH-beh la kah-MEE-sa BLAN-ka kon los yeens os-KOO-ros",
          literal: "Please do not wash the shirt white with the jeans dark.",
          why: "The usted command is lave, not lava. That tiny change keeps the sentence respectful while still giving a clear instruction."
        },
        {
          speaker: "Don Álvaro",
          target: "Tranquila, eso se lava por separado para que no destiña.",
          translation: "Don't worry, that gets washed separately so it doesn't bleed color.",
          pronunciation: "tran-KEE-la, EH-soh seh LAH-ba por seh-pah-RAH-doh PAH-ra keh no des-TEE-nyah",
          literal: "Calm, that itself washes by separated so that it does not bleed-color.",
          why: "Se lava can be a general process: it gets washed. The focus moves away from who does it and onto the proper method."
        },
        {
          speaker: "Dana",
          target: "Gracias. Vengo de lavarme las manos y todavía tengo jabón en el reloj.",
          translation: "Thanks. I just washed my hands and I still have soap on my watch.",
          pronunciation: "GRAH-syas. BEN-goh deh lah-BAR-meh las MAH-nos ee toh-dah-BEE-ah TEN-goh hah-BON en el rreh-LOH",
          literal: "Thanks. I come from washing-myself the hands and still I-have soap on the watch.",
          why: "Spanish says lavarme las manos, with the body part as the hands, not my hands. The reflexive already tells whose hands they are."
        },
        {
          speaker: "Don Álvaro",
          target: "Eso pasa. Si quiere, también lavamos tenis, pero demoran más.",
          translation: "That happens. If you want, we also wash sneakers, but they take longer.",
          pronunciation: "EH-soh PAH-sa. see KYEH-reh, tam-BYEN lah-BAH-mos TEH-nees, PEH-roh deh-MOH-ran mas",
          literal: "That happens. If you want, also we-wash sneakers, but they delay more.",
          why: "Lavar stretches naturally from clothes to shoes to dishes. The object tells you what kind of washing is involved; the verb itself stays broad."
        }
      ],
      vocabulary: [
        { term: "lavar", explanation: "To wash with water, soap or a washing process, from clothes and shoes to dishes and hands.", literal: "to wash", useWhen: "Water and soap are involved, or a machine or service is doing the washing.", avoidWhen: "You mean dusting, wiping or making a room neat. Those are limpiar, sacudir, trapear or hacer aseo, not lavar.", register: "neutral", region: "General Spanish and completely ordinary in Colombia.", related: ["enjuagar", "secar", "lavarse", "limpiar"], example: { target: "¿Me pueden lavar esta ropa?", translation: "Can you wash these clothes for me?" } },
        { term: "lavarse las manos", explanation: "To wash your hands, built reflexively with the definite article instead of a possessive.", literal: "to wash oneself the hands", useWhen: "Talking about your own hands, face, hair or teeth in the normal Spanish body-part pattern.", avoidWhen: "Copying English and saying mis manos. That sounds like the hands are detachable possessions you selected from a shelf.", register: "neutral", region: "General Spanish; the pattern is very stable in Colombia.", related: ["lavarse la cara", "cepillarse los dientes", "peinarse", "bañarse"], example: { target: "Vengo de lavarme las manos.", translation: "I just washed my hands." } },
        { term: "se la lavamos", explanation: "A service-counter promise meaning we wash it for you, with both the customer and the item represented by pronouns.", literal: "for-you it we-wash", useWhen: "A shop or laundry offers to handle one item or one bag for the customer.", avoidWhen: "You are not comfortable with the pronouns yet. A longer sentence is less elegant but still clear.", register: "polite practical", region: "Common Colombian service phrasing.", related: ["se lo arreglamos", "se lo entregamos", "le lavamos", "lo lavamos"], example: { target: "Se la lavamos para mañana.", translation: "We'll wash it for you by tomorrow." } },
        { term: "por separado", explanation: "Separately, especially to avoid colors running or delicate items getting damaged.", literal: "by separated", useWhen: "Giving instructions for white shirts, dark jeans, towels or delicate clothes.", avoidWhen: "There is no risk from mixing the items. Then it sounds fussy rather than careful.", register: "neutral", region: "General Spanish.", related: ["aparte", "junto", "mezclar", "desteñir"], example: { target: "Eso se lava por separado.", translation: "That gets washed separately." } },
        { term: "desteñir", explanation: "For fabric color to bleed or fade into other clothes.", literal: "to un-dye", useWhen: "Explaining why dark jeans, new towels or bright shirts should not share a wash.", avoidWhen: "The problem is only a stain. A stain mancha; a color destiñe.", register: "neutral", region: "General Spanish.", related: ["manchar", "teñir", "color", "ropa oscura"], example: { target: "Para que no destiña.", translation: "So it doesn't bleed color." } },
        { term: "lavar la loza", explanation: "The Colombian phrase for washing dishes, with loza standing for the dishes as a household set.", literal: "to wash the crockery", useWhen: "Talking about the dishes after a meal in a Colombian home.", avoidWhen: "You are in a restaurant scene or talking about one porcelain material. This phrase belongs to ordinary home chores.", register: "neutral domestic", region: "Very common in Colombia.", related: ["lavar platos", "secar la loza", "fregar", "recoger la mesa"], example: { target: "Me toca lavar la loza esta noche.", translation: "It's my turn to wash the dishes tonight." } },
        { term: "tenis", explanation: "Sneakers or trainers, whether or not anyone plays tennis in them.", literal: "tennis shoes", useWhen: "Asking whether a laundry washes athletic shoes or casual sneakers.", avoidWhen: "You mean formal shoes. Those are zapatos, and many laundries will not wash them like fabric sneakers.", register: "neutral", region: "Common in Colombia for sneakers.", related: ["zapatos", "cordones", "plantillas", "zapatillas"], example: { target: "También lavamos tenis.", translation: "We also wash sneakers." } }
      ],
      note: "Lavar is easy until body parts appear. English says my hands because possession is explicit; Spanish says me lavo las manos because the reflexive marks the owner and the article marks the body part. The same logic gives you me lavo la cara and me cepillo los dientes. Do not let English possessives leak into those Spanish sentences.",
      culture: [
        { label: "Neighborhood laundries are instruction-heavy", body: "Small Colombian laundries often work through quick spoken instructions: what can be mixed, what must be separate, what time it will be ready. A customer who can say lavar, por separado and para mañana avoids both damage and awkward mime over a plastic basket." },
        { label: "Humid weather changes the urgency", body: "In Bucaramanga during wet spells, clothes can smell damp before they ever dry. Taking laundry out is not laziness; it is sometimes the only practical way to keep a suitcase from turning musty. The verb lavar carries that urgency better than a vague clean." },
        { label: "Loza is household Colombian Spanish", body: "Lavar la loza is one of those domestic phrases Colombians use constantly. It does not need a restaurant scene, and it is not fancy ceramic vocabulary in ordinary speech. It simply means the dishes waiting after people ate at home." }
      ],
      pitfalls: [
        { mistake: "Saying “lavo mis manos” for “I wash my hands”", whyItFails: "Spanish normally uses the reflexive plus the definite article for body parts. Mis manos is understood, but it sounds translated and oddly possessive.", sayInstead: "Me lavo las manos." },
        { mistake: "Using “limpiar” for laundry in a washing machine", whyItFails: "Limpiar can mean clean, but clothes that go through water and soap are normally lavadas. The machine does not merely wipe them; it washes them.", sayInstead: "Necesito lavar esta ropa." },
        { mistake: "Saying “lava la camisa” to a shop worker you address as usted", whyItFails: "Lava is the tú command or the él/ella form. In a polite counter request, the usted command is lave.", sayInstead: "Por favor lave la camisa por separado." }
      ],
      variations: [
        { form: "¿Me pueden lavar esta ropa para mañana?", register: "polite practical", region: "General Colombian", whenToUse: "A normal laundry-counter request when the deadline matters." },
        { form: "Eso se lava por separado.", register: "neutral", region: "General Spanish", whenToUse: "Explaining a process or rule without focusing on who will do the washing." },
        { form: "Me lavo las manos antes de salir.", register: "neutral", region: "General Spanish", whenToUse: "Talking about washing your own body parts with the Spanish reflexive pattern." }
      ],
      prompt: "Dana asks “¿me pueden lavar esta ropa?” What service is she asking for?",
      choices: ["For the clothes to be folded without water or soap.", "For the clothes to be washed with the normal process.", "For the clothes to be replaced with new clothes."],
      answer: 1,
      practiceExtra: [
        { prompt: "Which sentence uses the natural Spanish body-part pattern?", choices: ["Yo lavo mis manos.", "Me limpio mis manos.", "Me lavo las manos."], answer: 2, tests: "reflexive plus definite article for body parts" },
        { prompt: "At a Colombian home, which phrase means washing the dishes?", choices: ["Lavar la loza después.", "Lavar la mesa después.", "Limpiar la ropa después."], answer: 0, tests: "lavar la loza as Colombian household wording" },
        { prompt: "Why does Don Álvaro say “se la lavamos”?", choices: ["Because he is refusing to wash anything delicate.", "Because he is promising to wash it for the customer.", "Because he is asking Dana to wash it herself."], answer: 1, tests: "service-counter pronouns in se la lavamos" },
        { prompt: "Which instruction best protects a white shirt from dark jeans?", choices: ["Sírvala por separado, por favor.", "Ábrala por separado, por favor.", "Lávela por separado, por favor."], answer: 2, tests: "usted command lave and por separado" }
      ]
    },
    en: {
      title: "Pedir que le laven ropa en una lavandería",
      situation:
        "Usted está en Bucaramanga con una bolsa de ropa húmeda después de varios días de lluvia. En una lavandería de barrio necesita explicar en inglés qué quiere lavar y qué no se puede mezclar.",
      setting: {
        who: "Don Álvaro maneja una lavandería pequeña que también recibe prendas delicadas. Daniela está viajando por Santander y trae ropa húmeda que no puede quedarse otra noche en la maleta.",
        what: "Una conversación de mostrador sobre lavar ropa, separar colores y preguntar si la lavandería también recibe tenis.",
        when: "A media tarde, después de una mañana húmeda, cuando medio barrio parece haber decidido que la ropa no se seca en casa.",
        where: "Bucaramanga, en una lavandería de barrio cerca de Cabecera, con ventiladores prendidos y canastas plásticas detrás del mostrador.",
        why: "Porque wash no es clean. Wash normalmente trae agua, jabón o máquina, y el inglés sí usa posesivos con partes del cuerpo donde el español usa el reflexivo."
      },
      address: {
        form: "mixed",
        who: "El empleado y Daniela usan you, nombres o ningún nombre según haga falta. El pronombre no revela la distancia social.",
        why: "En inglés, la cortesía del mostrador aparece en can you, please y by tomorrow, no en un usted separado. Usted tiene que construir el respeto con la frase entera.",
        ifYouSwitch: "No puede cambiar de pronombre para sonar más respetuoso. Si necesita más cortesía, agregue could, please o would it be possible, pero no invente una segunda persona formal."
      },
      dialogue: [
        { speaker: "Daniela", target: "Hi, can you wash these clothes by tomorrow?", translation: "Buenas, ¿me pueden lavar esta ropa para mañana?", pronunciation: "jai, kan yu uash diz klouz bai tu-MA-rou", literal: "Hola, ¿pueden ustedes lavar esta ropa para mañana?", why: "Wash deja claro que la ropa pasa por agua, jabón y máquina. Clean these clothes puede entenderse, pero suena menos específico para una lavandería." },
        { speaker: "Clerk", target: "Sure, we'll wash them and have them dry by the afternoon.", translation: "Claro, se la lavamos y se la entregamos seca por la tarde.", pronunciation: "shur, uil uash dem and jav dem drai bai di af-ter-NUN", literal: "Seguro, las lavaremos y las tendremos secas por la tarde.", why: "Have them dry significa dejarlas listas en ese estado. No es tenerlas en la mano; es prometer el resultado que la clienta necesita." },
        { speaker: "Daniela", target: "Please don't wash the white shirt with the dark jeans.", translation: "Por favor no lave la camisa blanca con los jeans oscuros.", pronunciation: "pliz dont uash da uait shert uid da dark yins", literal: "Por favor no lave la camisa blanca con los jeans oscuros.", why: "Don't wash is a direct negative instruction, softened by please. En inglés no hay una forma especial de usted para el mandato; la cortesía está al comienzo." },
        { speaker: "Clerk", target: "No worries, that gets washed separately so the color doesn't run.", translation: "Tranquila, eso se lava por separado para que no destiña.", pronunciation: "nou UO-ris, dat gets uasht SE-pa-ret-li sou da CO-lor DA-sent ran", literal: "Sin preocupaciones, eso se lava separadamente para que el color no corra.", why: "Color runs es la imagen inglesa normal para desteñir. No diga the color destains; esa palabra no hace este trabajo en inglés corriente." },
        { speaker: "Daniela", target: "Thanks. I just washed my hands and I still have soap on my watch.", translation: "Gracias. Vengo de lavarme las manos y todavía tengo jabón en el reloj.", pronunciation: "thanks. ai yost uasht mai jands and ai stil jav soup on mai uach", literal: "Gracias. Acabo de lavar mis manos y todavía tengo jabón en mi reloj.", why: "Aquí el inglés sí usa my hands. Si usted evita el posesivo por copiar el español, I washed the hands suena como si las manos fueran de otra persona." },
        { speaker: "Clerk", target: "That happens. We wash sneakers too, but they take longer.", translation: "Eso pasa. También lavamos tenis, pero demoran más.", pronunciation: "dat JA-pens. ui uash SNI-kers tu, bat dei teik LON-ger", literal: "Eso pasa. Lavamos tenis también, pero toman más largo.", why: "Sneakers es una palabra segura para tenis en Norteamérica. Trainers funciona en el Reino Unido, pero en una lavandería americana sneakers será más inmediato." }
      ],
      vocabulary: [
        { term: "wash", explanation: "Lavar con agua, jabón o máquina. Sirve para ropa, manos, platos, tenis y muchas superficies mojadas.", literal: "lavar", useWhen: "El proceso incluye agua o jabón, o se habla de lavandería, baño, loza o higiene personal.", avoidWhen: "Sólo quiere decir ordenar, sacudir polvo o dejar una sala presentable. Para eso clean o tidy suele ser mejor.", register: "neutro", region: "Inglés universal.", related: ["rinse", "dry", "launder", "clean"], example: { target: "Can you wash these clothes?", translation: "¿Me pueden lavar esta ropa?" } },
        { term: "wash my hands", explanation: "La forma inglesa normal con posesivo. A diferencia del español, el cuerpo se presenta como my hands, my face, my hair.", literal: "lavar mis manos", useWhen: "Habla de su propio cuerpo y quiere decir de quién son las manos o la cara.", avoidWhen: "Traducir desde el español como the hands. Esa frase necesita un contexto muy raro para sonar natural.", register: "neutro", region: "Inglés universal.", related: ["wash my face", "brush my teeth", "comb my hair", "take a shower"], example: { target: "I just washed my hands.", translation: "Acabo de lavarme las manos." } },
        { term: "we'll wash them", explanation: "Promesa sencilla de servicio: nosotros lavaremos esas prendas por usted.", literal: "las lavaremos", useWhen: "Una lavandería, un hotel o alguien en casa confirma que se encarga de la ropa.", avoidWhen: "No se ha dicho todavía qué es them. El pronombre necesita un plural claro antes.", register: "cortés práctico", region: "Inglés universal.", related: ["we'll dry them", "we'll have them ready", "we can wash it", "we can do them"], example: { target: "We'll wash them by tomorrow.", translation: "Se la lavamos para mañana." } },
        { term: "separately", explanation: "Por separado, especialmente para no mezclar colores o prendas delicadas.", literal: "separadamente", useWhen: "Pide que una camisa blanca, unos jeans oscuros o una prenda delicada no entren juntos a la lavadora.", avoidWhen: "No importa mezclar las cosas. Entonces separately suena como una instrucción innecesaria.", register: "neutro", region: "Inglés universal.", related: ["apart", "together", "mixed", "separate load"], example: { target: "That gets washed separately.", translation: "Eso se lava por separado." } },
        { term: "the color runs", explanation: "La manera natural de decir que una prenda destiñe y suelta color en el lavado.", literal: "el color corre", useWhen: "Advierte que jeans oscuros, toallas nuevas o camisetas fuertes pueden manchar otra ropa.", avoidWhen: "Habla de una mancha específica ya existente. Ahí necesita stain, no run.", register: "neutro", region: "Inglés universal; en Estados Unidos verá color sin u.", related: ["bleed", "fade", "stain", "dye"], example: { target: "So the color doesn't run.", translation: "Para que no destiña." } },
        { term: "wash the dishes", explanation: "Lavar la loza o lavar los platos. El inglés no tiene una palabra doméstica equivalente a loza que sea tan común en todas partes.", literal: "lavar los platos", useWhen: "Habla de platos, vasos y cubiertos después de comer en casa.", avoidWhen: "Está en una lavandería hablando de ropa. Dishes cambia por completo el objeto del lavado.", register: "neutro doméstico", region: "Inglés universal.", related: ["do the dishes", "dry the dishes", "load the dishwasher", "rinse the plates"], example: { target: "I have to wash the dishes tonight.", translation: "Me toca lavar la loza esta noche." } },
        { term: "sneakers", explanation: "Tenis de uso diario o deportivo. No depende de jugar tenis.", literal: "tenis", useWhen: "Pregunta si una lavandería o una persona puede lavar zapatos deportivos de tela.", avoidWhen: "Habla de zapatos formales. Dress shoes no se tratan como sneakers en una lavandería normal.", register: "neutro", region: "Muy común en Norteamérica; trainers es común en el Reino Unido.", related: ["trainers", "running shoes", "laces", "insoles"], example: { target: "We wash sneakers too.", translation: "También lavamos tenis." } }
      ],
      note: "Para un hispanohablante, el salto raro es doble. Primero, wash se reserva más para agua, jabón y máquina que para ordenar una casa. Segundo, las partes del cuerpo llevan posesivo: my hands, my face, my hair. Decir the hands por traducir me lavo las manos borra una información que el inglés espera oír.",
      culture: [
        { label: "La lavandería exige precisión", body: "En una lavandería de barrio se habla rápido, con bolsas, recibos y horarios encima del mostrador. En inglés, wash, dry, separately y by tomorrow son las palabras que evitan pérdidas. No necesita una frase elegante; necesita que la instrucción no dañe la camisa blanca." },
        { label: "La humedad vuelve urgente el lavado", body: "Cuando la ropa no seca, no basta con colgarla mejor. Puede oler mal dentro de la maleta y obligar a buscar una lavandería. Esa situación ayuda a separar wash de clean: la ropa necesita un proceso completo, no sólo verse más ordenada." },
        { label: "Dishes no es loza palabra por palabra", body: "Wash the dishes es la frase doméstica normal. Loza puede sentirse más amplia en Colombia, porque incluye el conjunto que queda después de comer. En inglés cotidiano, dishes ya cubre lo necesario aunque literalmente parezca hablar sólo de platos." }
      ],
      pitfalls: [
        { mistake: "“I washed the hands.”", whyItFails: "El inglés espera el posesivo con partes del cuerpo. The hands suena impersonal, como si usted estuviera narrando un procedimiento médico o hablando de manos ajenas.", sayInstead: "I washed my hands." },
        { mistake: "“Can you clean these clothes?” en la lavandería", whyItFails: "Se entiende, pero clean no activa tan claramente la idea de agua, jabón y máquina. En una lavandería, wash es el verbo directo.", sayInstead: "Can you wash these clothes?" },
        { mistake: "“The shirt destains.”", whyItFails: "Destain no es el verbo cotidiano para una prenda que suelta color. La imagen natural es que el color runs o bleeds.", sayInstead: "The color runs." }
      ],
      variations: [
        { form: "Can you wash these clothes by tomorrow?", register: "cortés práctico", region: "Inglés universal", whenToUse: "La pregunta normal en una lavandería cuando necesita fecha de entrega." },
        { form: "Please wash this separately.", register: "cortés práctico", region: "Inglés universal", whenToUse: "Quiere proteger una prenda sin dar una explicación larga." },
        { form: "I just washed my hands.", register: "neutro", region: "Inglés universal", whenToUse: "Habla de higiene personal y el inglés exige el posesivo my." }
      ],
      prompt: "Daniela asks “can you wash these clothes?” ¿Qué está pidiendo?",
      choices: ["Que doblen la ropa sin agua ni jabón esta tarde.", "Que la ropa pase por el proceso normal de lavandería.", "Que reemplacen la ropa por prendas completamente nuevas."],
      answer: 1,
      practiceExtra: [
        { prompt: "¿Cuál frase usa el patrón natural del inglés para partes del cuerpo?", choices: ["I washed the hands.", "I cleaned me hands.", "I washed my hands."], answer: 2, tests: "posesivo inglés con partes del cuerpo" },
        { prompt: "En una casa, ¿cuál frase equivale a lavar la loza?", choices: ["Wash the dishes after dinner.", "Wash the table after dinner.", "Clean the clothes after dinner."], answer: 0, tests: "wash the dishes como frase doméstica" },
        { prompt: "¿Por qué dice el empleado “we'll wash them”?", choices: ["Porque se niega a recibir prendas delicadas.", "Porque promete lavar esas prendas por la clienta.", "Porque pide que Daniela use la máquina sola."], answer: 1, tests: "them como pronombre para clothes" },
        { prompt: "¿Cuál instrucción protege mejor una camisa blanca?", choices: ["Please serve it separately.", "Please open it separately.", "Please wash it separately."], answer: 2, tests: "wash separately para no mezclar colores" }
      ]
    }
  },
  {
    id: "arreglar-la-bisagra-y-el-plan",
    level: "Developing · Keeping house",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "familiar",
    pathways: ["foundation", "year-12"],
    verb: "arreglar",
    review: "pending",
    es: {
      title: "Arreglar la bisagra y el plan",
      situation:
        "Estás en Pereira cuidando un apartamento prestado. Una puerta del clóset no cierra, la visita llega esta noche y llamas a un taller del barrio para pedir precio sin comprar nada nuevo.",
      setting: {
        who: "Lina is looking after her aunt's apartment in Pereira. Jhon works at a small repair shop and is used to people arriving with a photo and a worried deadline.",
        what: "A call and quick workshop visit about repairing a closet hinge, settling the price and sorting out the evening plan around the repair.",
        when: "Friday afternoon, close enough to closing time that nobody wants a vague conversation.",
        where: "Pereira, in a neighborhood workshop near the busier part of town, with toolboxes on the floor and radios playing quietly.",
        why: "Because arreglar is richer than fix. It can repair an object, sort out a situation, settle a price and, as arreglarse, mean getting ready to go out."
      },
      address: {
        form: "vos",
        who: "Lina and Jhon are about the same age and slip into vos because the workshop feels neighborhood-familiar rather than corporate.",
        why: "Vos is heard in the Eje Cafetero, especially in informal local talk. Here it keeps the exchange warm while still focused on the job.",
        ifYouSwitch: "Usted would also work and would be safer with an older technician. Tú would be understood, but it would flatten a local flavor that is natural in this scene."
      },
      dialogue: [
        { speaker: "Lina", target: "Hola, ¿vos arreglás bisagras de clóset o sólo electrodomésticos?", translation: "Hi, do you fix closet hinges, or only appliances?", pronunciation: "OH-la, bos ah-rreh-GLAS bee-SAH-gras deh KLOH-set o SOH-loh eh-lek-troh-doh-MES-tee-kos", literal: "Hi, you fix hinges of closet or only appliances?", why: "Arreglás is the vos present form. The object is small, but the verb is the everyday repair verb, not a promise to replace the whole door." },
        { speaker: "Jhon", target: "Sí, eso se arregla. Mandame una foto para mirar la pieza.", translation: "Yes, that can be fixed. Send me a photo so I can look at the part.", pronunciation: "see, EH-soh seh ah-RREH-glah. man-DAH-meh OO-na FOH-toh PAH-ra mee-RAR la PYEH-sa", literal: "Yes, that itself fixes. Send-me a photo to look the piece.", why: "Eso se arregla is wonderfully broad: this is fixable, this can be sorted. It reassures without yet saying exactly how." },
        { speaker: "Lina", target: "Te la mando ya; si es fácil, ¿en cuánto me lo arreglás?", translation: "I'll send it now; if it's easy, how much would you fix it for?", pronunciation: "teh la MAN-doh yah; see es FAH-seel, en KWAN-toh meh loh ah-rreh-GLAS", literal: "To-you it I-send now; if it is easy, in how-much for-me it you-fix?", why: "¿En cuánto me lo arreglás? asks for a price in a normal Colombian workshop way. It is not asking how long; it is asking what the repair would cost." },
        { speaker: "Jhon", target: "Si no toca soldar, te lo arreglo hoy mismo por cuarenta.", translation: "If it doesn't need welding, I'll fix it for you today for forty.", pronunciation: "see no TOH-kah sol-DAR, teh loh ah-RREH-gloh oy MEES-moh por kwah-REN-tah", literal: "If it does not touch to weld, to-you it I-fix today same for forty.", why: "Te lo arreglo has the same service shape as se lo arreglo with less distance. The repair stays a repair; no one is swapping the broken thing for a new one." },
        { speaker: "Lina", target: "Listo, arreglemos eso, porque necesito arreglarme antes de las siete.", translation: "Done, let's sort that out, because I need to get ready before seven.", pronunciation: "LEES-toh, ah-rreh-GLEH-mos EH-soh, POR-keh neh-seh-SEE-toh ah-rreh-GLAR-meh AN-tes deh las SYEH-teh", literal: "Ready, let's-fix that, because I need to fix-myself before seven.", why: "This line shows the range: arreglemos eso means let's sort it out, while arreglarme means get myself ready or dressed up. English hides that connection." },
        { speaker: "Jhon", target: "Caé a las cinco y media; yo te arreglo la puerta primero.", translation: "Come by at five-thirty; I'll fix the door for you first.", pronunciation: "kah-EH ah las SEEN-koh ee MEH-dyah; yo teh ah-RREH-gloh la PWER-tah pree-MEH-roh", literal: "Drop-in at five and half; I for-you fix the door first.", why: "Caé is an informal vos command in this region. The final arreglo returns to the concrete repair after the price and schedule have been sorted out." }
      ],
      vocabulary: [
        { term: "arreglar", explanation: "To fix, repair, arrange or sort out, depending on the object and the situation.", literal: "to put right", useWhen: "A hinge, phone, plan, misunderstanding, price or messy situation needs to be put right.", avoidWhen: "You specifically mean replacing one item with another. That is cambiar, and it changes the story of the repair.", register: "neutral", region: "General Spanish and very common in Colombian everyday speech.", related: ["reparar", "solucionar", "organizar", "cuadrar"], example: { target: "¿Vos arreglás bisagras?", translation: "Do you fix hinges?" } },
        { term: "eso se arregla", explanation: "A reassuring phrase meaning that the problem is fixable or sortable.", literal: "that fixes itself", useWhen: "Someone is worried and you can probably solve the object problem or the situation.", avoidWhen: "You actually have no idea whether it can be solved. Then it sounds like empty comfort.", register: "friendly practical", region: "General Colombian.", related: ["tiene arreglo", "se puede solucionar", "no es grave", "miramos"], example: { target: "Tranquila, eso se arregla.", translation: "Don't worry, that can be fixed." } },
        { term: "¿en cuánto me lo arreglás?", explanation: "A workshop price question: how much would you fix it for me?", literal: "in how much for me it you fix?", useWhen: "You are asking a repair person for the cost of fixing a specific item.", avoidWhen: "You need the duration. For time, ask cuánto se demora or para cuándo estaría.", register: "friendly informal", region: "Natural Colombian workshop Spanish; the verb ending here is vos.", related: ["¿cuánto vale?", "¿cuánto cuesta?", "¿en cuánto sale?", "¿cuánto se demora?"], example: { target: "¿En cuánto me lo arreglás?", translation: "How much would you fix it for?" } },
        { term: "te lo arreglo", explanation: "I'll fix it for you, with the person and the thing both inside the pronoun stack.", literal: "for-you it I-fix", useWhen: "Offering a concrete repair to someone you are speaking to informally.", avoidWhen: "The listener expects formal usted. Then use se lo arreglo instead.", register: "friendly informal", region: "General Spanish; common in Colombian service talk once the register is close.", related: ["se lo arreglo", "te lo miro", "te lo dejo listo", "lo reparo"], example: { target: "Te lo arreglo hoy mismo.", translation: "I'll fix it for you today." } },
        { term: "arreglarse", explanation: "To get ready, groom yourself or dress up before going out.", literal: "to fix oneself", useWhen: "You need to shower, change, do your hair or look presentable for plans.", avoidWhen: "You mean repairing your body after an injury. That would sound odd or joking; use recuperarse or curarse.", register: "neutral", region: "General Colombian and extremely common.", related: ["alistarse", "vestirse", "peinarse", "maquillarse"], example: { target: "Necesito arreglarme antes de las siete.", translation: "I need to get ready before seven." } },
        { term: "arreglemos eso", explanation: "Let's sort that out, whether that means a repair, a misunderstanding, a payment or a plan.", literal: "let's fix that", useWhen: "You want to move from talking about a problem to solving it together.", avoidWhen: "The other person has not agreed there is a problem. Then it can sound like you are taking control too fast.", register: "friendly practical", region: "General Colombian.", related: ["cuadremos eso", "solucionemos eso", "dejémoslo listo", "miremos"], example: { target: "Listo, arreglemos eso.", translation: "Done, let's sort that out." } },
        { term: "caé", explanation: "An informal vos command meaning drop by or come over.", literal: "fall", useWhen: "A familiar local speaker tells someone to come by a place at a time.", avoidWhen: "You are in a formal service encounter or outside a vos region. Venga or pasa are safer there.", register: "friendly informal", region: "Heard in vos-using Colombian regions, including the Eje Cafetero.", related: ["vení", "pasá", "venga", "llegá"], example: { target: "Caé a las cinco y media.", translation: "Come by at five-thirty." } }
      ],
      note: "Arreglar is a household powerhouse because it does not stop at broken objects. A technician arregla a hinge; two people arreglan a misunderstanding; a shop can arreglar a price; and before leaving the house you can arreglarte. The reflexive getting-ready meaning is not decorative. It is one of the first places Colombians use the verb when no object is broken at all.",
      culture: [
        { label: "Repair first, replacement later", body: "Small Colombian workshops often begin from the assumption that something has arreglo. A hinge, zipper, fan or chair is inspected before anyone talks about replacing it. That makes arreglar the honest verb for this scene: nobody is buying a new door to avoid a small repair." },
        { label: "The price question can use arreglar", body: "¿En cuánto me lo arregla? is a normal way to ask what the repair would cost. It sounds practical, not rude, because the object and the service are already clear. The answer may be a number, a condition or a warning that the item has no arreglo." },
        { label: "Getting ready is also arreglarse", body: "A learner who knows only fix misses a very common sentence: me estoy arreglando. That does not mean the speaker is repairing herself. It means she is getting dressed, doing hair, putting herself together before leaving. Context carries the meaning." }
      ],
      pitfalls: [
        { mistake: "Hearing “me estoy arreglando” as “I am fixing myself”", whyItFails: "Arreglarse usually means getting ready or making yourself presentable. No one imagines a person repairing their own body with tools unless the context is a joke.", sayInstead: "Me estoy arreglando para salir." },
        { mistake: "Using “cambiar” when the plan is to repair the same part", whyItFails: "Cambiar says the item will be swapped for another one. If the hinge stays and gets repaired, arreglar is the accurate verb.", sayInstead: "Van a arreglar la bisagra." },
        { mistake: "Asking “¿en cuánto?” and expecting a time answer", whyItFails: "In this workshop question, en cuánto points to price. If you need the schedule, ask how long it takes or when it will be ready.", sayInstead: "¿Cuánto se demora?" }
      ],
      variations: [
        { form: "Eso se arregla.", register: "friendly practical", region: "General Colombian", whenToUse: "You want to reassure someone that the object or situation is solvable." },
        { form: "¿En cuánto me lo arregla?", register: "polite practical", region: "General Colombian", whenToUse: "Asking a workshop for the repair price with usted instead of vos." },
        { form: "Me estoy arreglando; ya salgo.", register: "friendly informal", region: "General Colombian", whenToUse: "You are getting ready to leave, not fixing a broken object." },
        {
          form: "Aunque haya quedado firme, la bisagra fue cambiada por el señor del taller.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Granting a point about work someone else did, and naming who did it. Aunque plus the subjunctive concedes without confirming, and fue cambiada por names the hand behind the job."
        }
      ],
      prompt: "Lina says “arreglemos eso” and then “arreglarme.” What range is the verb showing?",
      choices: ["It mainly means washing something with water and soap.", "It only means replacing an old item with a new one.", "It can sort out a situation and also mean getting ready."],
      answer: 2,
      practiceExtra: [
        { prompt: "In a workshop, what does “¿en cuánto me lo arregla?” usually ask?", choices: ["The color of the replacement item.", "The price for fixing the item.", "The address of the customer's house."], answer: 1, tests: "en cuánto as a repair price question" },
        { prompt: "Which sentence means “I'm getting ready to go out”?", choices: ["Me estoy lavando para salir.", "Me estoy cambiando por otro.", "Me estoy arreglando para salir."], answer: 2, tests: "arreglarse as getting ready, not repairing" },
        { prompt: "Why is “cambiar la bisagra” a different story from “arreglar la bisagra”?", choices: ["It says the hinge is being swapped, not repaired.", "It says the hinge is being washed with soap.", "It says the hinge is being served at lunch."], answer: 0, tests: "arreglar as repair rather than replacement" },
        { prompt: "Which phrase reassures someone that the problem is solvable?", choices: ["Eso se lava.", "Eso se arregla.", "Eso se sirve."], answer: 1, tests: "eso se arregla as reassurance" }
      ]
    },
    en: {
      title: "Arreglar una puerta y cuadrar el plan",
      situation:
        "Usted está en Pereira cuidando un apartamento prestado. Una puerta del clóset no cierra, la visita llega esta noche y debe explicar en inglés que quiere reparar la misma pieza, preguntar precio y decir que necesita alistarse.",
      setting: {
        who: "Lina cuida el apartamento de una tía en Pereira. John trabaja en un taller pequeño y está acostumbrado a gente que llega con una foto, una pieza suelta y una urgencia doméstica.",
        what: "Una llamada y una visita breve al taller para reparar una bisagra, acordar precio y cuadrar el plan de la tarde alrededor del arreglo.",
        when: "Un viernes por la tarde, lo bastante cerca del cierre como para que nadie quiera una conversación vaga.",
        where: "Pereira, en un taller de barrio con cajas de herramientas en el piso y una radio sonando bajo.",
        why: "Porque fix es útil pero no cubre solo todos los sentidos de arreglar. En inglés hay que escoger entre fix, sort out, settle y get ready según el contexto."
      },
      address: {
        form: "mixed",
        who: "Lina y John usan you. La confianza aparece en hi, sure y come by, no en un cambio de pronombre.",
        why: "El inglés obliga a resolver con vocabulario lo que el español resuelve con tú, usted o vos. En un taller, please y can you marcan respeto; frases cortas marcan cercanía.",
        ifYouSwitch: "No existe un vos inglés para conservar el sabor regional. Si usted intenta compensarlo con slang inventado, suena falso. Es mejor usar un inglés sencillo y dejar que la escena haga el trabajo."
      },
      dialogue: [
        { speaker: "Lina", target: "Hi, do you fix closet hinges, or only appliances?", translation: "Hola, ¿usted arregla bisagras de clóset o sólo electrodomésticos?", pronunciation: "jai, du yu fiks KLA-zet JIN-yiz, or ON-li a-PLAI-an-siz", literal: "Hola, ¿usted arregla bisagras de clóset, o sólo electrodomésticos?", why: "Fix es el verbo correcto para una pieza dañada que se quiere reparar. Replace sería otro plan: quitar esa bisagra y poner una nueva." },
        { speaker: "John", target: "Yes, that can be fixed. Send me a photo so I can look at the part.", translation: "Sí, eso se arregla. Mándeme una foto para mirar la pieza.", pronunciation: "yes, dat kan bi fikst. send mi a FOU-tou sou ai kan luk at da part", literal: "Sí, eso puede ser arreglado. Envíeme una foto para mirar la parte.", why: "That can be fixed da la misma tranquilidad que eso se arregla. El centro de la frase es que el problema tiene solución, no todavía el método exacto." },
        { speaker: "Lina", target: "I'll send it now; if it's easy, how much would you charge to fix it?", translation: "Se la mando ya; si es fácil, ¿en cuánto me lo arregla?", pronunciation: "ail send it nau; if its I-zi, jau mach wud yu charj tu fiks it", literal: "La enviaré ahora; si es fácil, ¿cuánto cobraría para arreglarlo?", why: "El inglés no usa in how much para precios. How much would you charge to fix it pregunta lo mismo sin sonar traducido." },
        { speaker: "John", target: "If it doesn't need welding, I can fix it today for forty.", translation: "Si no toca soldar, se lo arreglo hoy mismo por cuarenta.", pronunciation: "if it DA-zent nid UEL-ding, ai kan fiks it tu-DEI for FOR-ti", literal: "Si no necesita soldadura, puedo arreglarlo hoy por cuarenta.", why: "For forty marca el precio acordado. El verbo sigue siendo fix porque la bisagra permanece en la historia; nadie está prometiendo cambiarla por otra." },
        { speaker: "Lina", target: "Great, let's sort that out, because I need to get ready before seven.", translation: "Listo, arreglemos eso, porque necesito arreglarme antes de las siete.", pronunciation: "greit, lets sort dat aut, bi-koz ai nid tu get RE-di bi-FOR SE-ven", literal: "Genial, resolvamos eso, porque necesito prepararme antes de las siete.", why: "Aquí fix ya no sirve para todo. Sort that out cubre arreglemos eso, y get ready cubre arreglarme. Separar esos sentidos evita un inglés cómico." },
        { speaker: "John", target: "Come by at five-thirty; I'll fix the door for you first.", translation: "Venga a las cinco y media; yo le arreglo la puerta primero.", pronunciation: "kam bai at faiv THER-ti; ail fiks da dor for yu ferst", literal: "Pase a las cinco y media; arreglaré la puerta para usted primero.", why: "Come by es pasar por un lugar, no caer literalmente. I'll fix the door for you recupera el sentido concreto de reparación después de cuadrar precio y horario." }
      ],
      vocabulary: [
        { term: "fix", explanation: "Reparar o arreglar algo dañado. Es fuerte con objetos, máquinas, puertas, bisagras y problemas concretos.", literal: "arreglar / reparar", useWhen: "Una cosa no funciona y alguien la deja funcionando de nuevo.", avoidWhen: "Quiere decir alistarse para salir. I am fixing myself suena cómico o inquietante; necesita get ready.", register: "neutro", region: "Inglés universal.", related: ["repair", "mend", "sort out", "replace"], example: { target: "Do you fix closet hinges?", translation: "¿Usted arregla bisagras de clóset?" } },
        { term: "that can be fixed", explanation: "Eso se puede arreglar. Frase de tranquilidad antes de explicar método, precio o demora.", literal: "eso puede ser arreglado", useWhen: "Quiere decir que un objeto o problema tiene solución.", avoidWhen: "No está seguro de que sea posible. Una promesa prematura puede meterlo en un compromiso.", register: "neutro tranquilizador", region: "Inglés universal.", related: ["it's fixable", "we can sort it out", "it can be repaired", "no big deal"], example: { target: "Don't worry, that can be fixed.", translation: "Tranquila, eso se arregla." } },
        { term: "how much would you charge to fix it?", explanation: "La pregunta natural por el precio de un arreglo. Charge introduce lo que cobra el taller.", literal: "¿cuánto cobraría para arreglarlo?", useWhen: "Pregunta el costo de reparar una cosa específica en un taller o servicio.", avoidWhen: "Quiere saber la duración. Para tiempo, pregunte how long will it take o when will it be ready.", register: "cortés práctico", region: "Inglés universal.", related: ["how much is it", "what would it cost", "how long will it take", "can you quote me"], example: { target: "How much would you charge to fix it?", translation: "¿En cuánto me lo arregla?" } },
        { term: "for you", explanation: "La manera inglesa de expresar el beneficio que en español suele ir en le o te dentro del verbo.", literal: "para usted / por usted", useWhen: "Al ofrecer hacer una reparación, reserva o gestión en favor de la otra persona.", avoidWhen: "El beneficio ya es obvio y la frase queda pesada. I can fix it today muchas veces basta.", register: "neutro", region: "Inglés universal.", related: ["for me", "for us", "on your behalf", "help you with it"], example: { target: "I'll fix the door for you first.", translation: "Le arreglo la puerta primero." } },
        { term: "get ready", explanation: "Alistarse o arreglarse antes de salir: bañarse, vestirse, peinarse o quedar presentable.", literal: "ponerse listo", useWhen: "Necesita prepararse para salir, recibir gente o llegar a una cita.", avoidWhen: "Una cosa está dañada. A door gets fixed; a person gets ready.", register: "neutro", region: "Inglés universal.", related: ["dress up", "get dressed", "do my hair", "freshen up"], example: { target: "I need to get ready before seven.", translation: "Necesito arreglarme antes de las siete." } },
        { term: "sort that out", explanation: "Resolver o cuadrar eso. Sirve para situaciones, planes, pagos y problemas no necesariamente físicos.", literal: "ordenar eso afuera", useWhen: "Quiere pasar del problema a la solución sin hablar de una herramienta concreta.", avoidWhen: "El objeto físico es el centro y se está reparando con herramientas. Ahí fix es más directo.", register: "amistoso práctico", region: "Inglés universal, muy común en habla cotidiana.", related: ["work it out", "settle it", "deal with it", "straighten it out"], example: { target: "Let's sort that out.", translation: "Arreglemos eso." } },
        { term: "come by", explanation: "Pasar por un lugar, normalmente por poco tiempo o para una diligencia concreta.", literal: "venir por", useWhen: "Un taller, vecino o amigo le dice que se acerque a cierta hora.", avoidWhen: "Quiere decir llegar a vivir o quedarse. Come by implica visita o parada breve.", register: "amistoso informal", region: "Inglés universal.", related: ["drop by", "stop by", "come over", "swing by"], example: { target: "Come by at five-thirty.", translation: "Venga a las cinco y media." } }
      ],
      note: "El error natural es querer que fix haga todo lo que hace arreglar. A veces sí: fix the hinge, fix the door. Pero arreglar un asunto suele ser sort out, arreglar un precio puede ser settle, y arreglarse casi siempre es get ready. Aprender el abanico evita frases como I am fixing myself before the party.",
      culture: [
        { label: "Primero se mira si tiene arreglo", body: "En muchos talleres de barrio, la pregunta inicial no es qué comprar sino si todavía tiene arreglo. Esa cultura práctica existe también en inglés, pero se expresa con fixable, repair y take a look. Replace aparece sólo cuando el arreglo no vale la pena." },
        { label: "El precio y el tiempo son preguntas distintas", body: "El español colombiano puede preguntar en cuánto por el precio de un arreglo. En inglés, how much apunta al precio y how long al tiempo. Mezclarlos puede dejar al técnico respondiendo una cifra cuando usted esperaba una hora de entrega." },
        { label: "Arreglarse no se traduce con fix", body: "Get ready parece demasiado sencillo para arreglarse, pero es la frase viva. Si quiere añadir elegancia, use dress up; si quiere mencionar pelo o maquillaje, dígalo aparte. Fix myself no transmite esa preparación cotidiana." }
      ],
      pitfalls: [
        { mistake: "“I am fixing myself before the party.”", whyItFails: "Suena a reparar el cuerpo, no a vestirse o alistarse. Para arreglarse antes de salir, el inglés usa get ready.", sayInstead: "I'm getting ready before the party." },
        { mistake: "“How much time do you charge to fix it?”", whyItFails: "Mezcla precio y duración en una sola frase. Charge pide dinero; take pide tiempo. Separe las dos preguntas.", sayInstead: "How much would you charge to fix it?" },
        { mistake: "“Can you change the hinge?” cuando quiere repararla", whyItFails: "Change o replace sugiere cambiar la pieza por otra. Si la misma bisagra se puede dejar funcionando, fix es el verbo correcto.", sayInstead: "Can you fix the hinge?" }
      ],
      variations: [
        { form: "That can be fixed.", register: "neutro tranquilizador", region: "Inglés universal", whenToUse: "Quiere tranquilizar a alguien diciendo que el problema tiene solución." },
        { form: "How much would you charge to fix it?", register: "cortés práctico", region: "Inglés universal", whenToUse: "Pregunta el precio de un arreglo específico en un taller." },
        { form: "I'm getting ready; I'll leave soon.", register: "amistoso informal", region: "Inglés universal", whenToUse: "Usted se está arreglando para salir, no reparando un objeto." },
        {
          form: "We had the hinge fixed last week, and the whole door was replaced later.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Cuando mandó a arreglar algo en vez de arreglarlo usted mismo. “Had the hinge fixed” no dice quién lo hizo, y “was replaced” deja el resultado en primer plano."
        }
      ],
      prompt: "Lina says “let's sort that out” and “get ready.” ¿Qué muestra sobre arreglar?",
      choices: ["Que siempre significa reemplazar una cosa por otra nueva.", "Que en inglés se reparte entre resolver algo y alistarse.", "Que normalmente significa lavar con agua y jabón."],
      answer: 1,
      practiceExtra: [
        { prompt: "En un taller, ¿qué pregunta “how much would you charge to fix it?”", choices: ["El color del objeto de reemplazo.", "El precio por reparar el objeto.", "La dirección de la casa del cliente."], answer: 1, tests: "charge como pregunta de precio" },
        { prompt: "¿Cuál frase significa que alguien se está arreglando para salir?", choices: ["I'm washing ready to go out.", "I'm replacing myself to go out.", "I'm getting ready to go out."], answer: 2, tests: "get ready como arreglarse" },
        { prompt: "¿Por qué replace the hinge cuenta otra historia que fix the hinge?", choices: ["Porque reemplaza la pieza en vez de repararla.", "Porque lava la pieza con agua y jabón.", "Porque sirve la pieza durante el almuerzo."], answer: 0, tests: "fix como reparar y replace como cambiar" },
        { prompt: "¿Cuál frase tranquiliza diciendo que el problema tiene solución?", choices: ["That can be washed.", "That can be fixed.", "That can be served."], answer: 1, tests: "that can be fixed como equivalente de eso se arregla" }
      ]
    }
  }
);

markSource(lessons, "data/lessons/30-developing-keeping-house.js");
