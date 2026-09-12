/*
 * Lesson block: developing / making and breaking.
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
    id: "crear-una-marca-en-neiva",
    level: "Developing · Making things",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    verb: "crear",
    review: "pending",
    es: {
      title: "Starting a small brand in Neiva",
      situation:
        "You are in Neiva helping a friend who sells handmade notebooks. She wants to stop selling them as a family favor and create her own brand for an entrepreneurship fair.",
      setting: {
        who: "Paola makes handmade notebooks and wants the project to look less improvised. Morgan is helping her turn a family favor into something that can face customers at a small fair.",
        what: "A practical planning conversation about creating a name, a short story for the brand and a first catalogue without pretending the business already exists at a large scale.",
        when: "A hot Thursday afternoon, two days before a neighborhood entrepreneurship fair.",
        where: "Neiva, in a shaded patio where the fan is losing against the Huila heat and sample notebooks are spread across a plastic table.",
        why: "Because crear is the verb for bringing something into existence: a brand, a plan, a story, a habit or a space that was not there before."
      },
      address: {
        form: "tú",
        who: "Paola and Morgan are friends, so they use tú while they think aloud and challenge each other's ideas.",
        why: "Tú fits close collaborative planning. The work is serious, but the relationship is relaxed enough for direct suggestions and quick corrections.",
        ifYouSwitch:
          "Usted would make the help sound like consulting. Vos would be understood in many places, but it is not needed here; the scene is friendly without needing a stronger regional signal."
      },
      dialogue: [
        {
          speaker: "Paola",
          target: "Quiero crear una marca, no sólo vender libretas sueltas.",
          translation: "I want to create a brand, not just sell loose notebooks.",
          pronunciation: "KYEH-roh kreh-AR OO-na MAR-ka, no SOH-loh ben-DER lee-BREH-tas SWEL-tas",
          literal: "I-want to-create a brand, not only sell notebooks loose.",
          why: "Crear points to making something new exist in public. Paola already has notebooks; what does not exist yet is the brand that gives them a shared identity."
        },
        {
          speaker: "Morgan",
          target: "Entonces creemos primero el nombre y una historia corta.",
          translation: "Then let's create the name and a short story first.",
          pronunciation: "en-TON-ses kreh-EH-mos pree-MEH-roh el NOM-breh ee OO-na ees-TOH-ryah KOR-ta",
          literal: "Then let's-create first the name and a story short.",
          why: "Creemos can mean let's create. It looks like we believe from creer, so context matters: the objects are a name and a story, not an opinion."
        },
        {
          speaker: "Paola",
          target: "Me gusta. Creé el logo anoche, pero todavía se ve muy casero.",
          translation: "I like it. I created the logo last night, but it still looks very homemade.",
          pronunciation: "meh GOOS-ta. kreh-EH el LOH-goh ah-NOH-cheh, PEH-roh toh-dah-BEE-ah seh beh moy kah-SEH-roh",
          literal: "To-me it-pleases. I-created the logo last-night, but still it looks very homemade.",
          why: "Creé has two clear vowel beats. The written accent matters because cree without it can be read as believes, and the spoken rhythm also changes."
        },
        {
          speaker: "Morgan",
          target: "Casero no es malo; podemos crear una imagen honesta, no perfecta.",
          translation: "Homemade isn't bad; we can create an honest image, not a perfect one.",
          pronunciation: "kah-SEH-roh no es MAH-loh; poh-DEH-mos kreh-AR OO-na ee-MAH-hen oh-NES-ta, no per-FEK-ta",
          literal: "Homemade is not bad; we-can create an image honest, not perfect.",
          why: "Crear does not have to sound grand or artistic. You can create a tone, an image or a way of presenting ordinary work."
        },
        {
          speaker: "Paola",
          target: "¿Y si creamos tres paquetes para la feria: básico, regalo y personalizado?",
          translation: "What if we create three packages for the fair: basic, gift and personalised?",
          pronunciation: "ee see kreh-AH-mos tres pah-KEH-tes PAH-ra la FEH-ryah: BAH-see-koh, rreh-GAH-loh ee per-soh-nah-lee-SAH-doh",
          literal: "And if we-create three packages for the fair: basic, gift and personalised?",
          why: "Crear can be concrete without being physical. The packages are categories that help customers choose; they are created by naming and organizing the offer."
        },
        {
          speaker: "Morgan",
          target: "Sí. Si hoy creas eso, mañana creamos el catálogo sin correr.",
          translation: "Yes. If you create that today, tomorrow we'll create the catalogue without rushing.",
          pronunciation: "see. see oy KREH-as EH-soh, mah-NYAH-na kreh-AH-mos el kah-tah-LOH-goh seen koh-RRER",
          literal: "Yes. If today you-create that, tomorrow we-create the catalogue without running.",
          why: "Creas and creamos show how easily crear moves through a plan. The verb keeps the focus on making the business structure, not just decorating notebooks."
        }
      ],
      vocabulary: [
        {
          term: "crear",
          explanation:
            "To create or bring something into existence: a brand, a plan, a story, a space, a habit or a piece of work.",
          literal: "to create",
          useWhen:
            "Something did not exist as a recognizable thing before and now you are making it take shape.",
          avoidWhen:
            "You only mean physically building with tools and materials. Construir is stronger when walls, shelves or structures are involved.",
          register: "neutral",
          region: "General Spanish; common in Colombian business, school and everyday planning talk.",
          related: ["inventar", "diseñar", "fundar", "construir"],
          example: { target: "Quiero crear una marca.", translation: "I want to create a brand." }
        },
        {
          term: "crear una marca",
          explanation:
            "To create a brand: not only a logo, but a name, tone, story and promise that customers can recognize.",
          literal: "to create a mark",
          useWhen:
            "A small project needs an identity before it faces clients, fairs or social media.",
          avoidWhen:
            "You only changed the drawing on a label. A brand is wider than the logo.",
          register: "neutral business",
          region: "General Colombian Spanish.",
          related: ["logo", "nombre", "emprendimiento", "imagen"],
          example: { target: "Vamos a crear una marca sencilla.", translation: "We're going to create a simple brand." }
        },
        {
          term: "creemos",
          explanation:
            "Depending on context, either let's create or we believe. The object after it usually tells you which verb you are hearing.",
          literal: "let's create / we believe",
          useWhen:
            "Giving a suggestion with crear: “creemos el nombre”, “creemos una lista”, “creemos una regla”.",
          avoidWhen:
            "The sentence is about belief or opinion. Then creemos belongs to creer, a different verb with the same spelling.",
          register: "neutral",
          region: "General Spanish.",
          related: ["crear", "creer", "hagamos", "propongamos"],
          example: { target: "Creemos primero el nombre.", translation: "Let's create the name first." }
        },
        {
          term: "creé",
          explanation:
            "I created. The accent marks the past tense of crear and keeps it apart from cree, he or she believes.",
          literal: "I created",
          useWhen:
            "Reporting a finished act of creation: a logo, document, account, route or first version.",
          avoidWhen:
            "You are talking about belief. Creo and cree come from creer in that context, not crear.",
          register: "neutral",
          region: "General Spanish.",
          related: ["creo", "cree", "creamos", "creado"],
          example: { target: "Creé el logo anoche.", translation: "I created the logo last night." }
        },
        {
          term: "casero",
          explanation:
            "Homemade or homegrown. It can be modest, warm and honest, not automatically sloppy.",
          literal: "home-like",
          useWhen:
            "Describing something made at home or with a small-project feel.",
          avoidWhen:
            "You need to criticize something as badly made. Casero may sound affectionate unless the context is clearly negative.",
          register: "neutral",
          region: "General Colombian Spanish.",
          related: ["artesanal", "hecho a mano", "sencillo", "profesional"],
          example: { target: "Todavía se ve muy casero.", translation: "It still looks very homemade." }
        },
        {
          term: "paquete",
          explanation:
            "A package or bundle of options, not only a physical parcel.",
          literal: "package",
          useWhen:
            "Grouping a service or product into levels that customers can choose from.",
          avoidWhen:
            "You mean a mailed parcel. Paquete can mean that too, but this business context is about an offer.",
          register: "neutral business",
          region: "General Spanish.",
          related: ["combo", "plan", "opción", "catálogo"],
          example: { target: "Creemos tres paquetes para la feria.", translation: "Let's create three packages for the fair." }
        },
        {
          term: "sin correr",
          explanation:
            "Without rushing, literally without running.",
          literal: "without running",
          useWhen:
            "You want to say a task can be done calmly if the first step is handled now.",
          avoidWhen:
            "You mean physical running. Here it is about pace and pressure, not exercise.",
          register: "friendly informal",
          region: "General Colombian Spanish.",
          related: ["con calma", "sin afán", "a tiempo", "paso a paso"],
          example: { target: "Mañana creamos el catálogo sin correr.", translation: "Tomorrow we'll create the catalogue without rushing." }
        }
      ],
      note:
        "Crear is wider than artistic invention. A Colombian friend can crear una marca, crear un grupo, crear una cuenta or crear un ambiente. It is the verb for making a new social or practical thing exist. The spelling trap is real: creo can be I create or I believe, creemos can be let's create or we believe, and creé needs its accent when you mean I created.",
      culture: [
        {
          label: "Emprendimiento does not have to sound corporate",
          body:
            "In Colombia, emprendimiento covers everything from a formal startup to a cousin selling notebooks at a neighborhood fair. Crear una marca can therefore be modest and practical. It does not mean pretending to be a large company; it means giving a small project enough identity that strangers can understand it."
        },
        {
          label: "A name creates a public thing",
          body:
            "Before the name, Paola has notebooks. After the name, she has something people can ask for, remember and recommend. That is why crear fits even though no new paper object appears in the line. The creation is the recognizable frame around the work."
        },
        {
          label: "Huila heat changes the work rhythm",
          body:
            "Neiva's heat makes afternoon work feel compressed. The dialogue's sin correr is not filler; it is a realistic planning value. Do the naming now, and tomorrow the catalogue can be built calmly instead of under the hottest pressure of the day."
        }
      ],
      pitfalls: [
        {
          mistake: "Reading “creemos el nombre” as “we believe the name”",
          whyItFails:
            "Creemos can belong to crear or creer. With a direct object like el nombre, the natural reading is let's create the name, not a belief statement.",
          sayInstead: "Creemos primero el nombre."
        },
        {
          mistake: "Writing “cree el logo anoche” for “I created the logo”",
          whyItFails:
            "The past tense first person is creé, with the accent and two vowel beats. Cree points toward he or she believes, or a formal command.",
          sayInstead: "Creé el logo anoche."
        },
        {
          mistake: "Using “construir” for every non-physical idea",
          whyItFails:
            "Construir can be metaphorical, but crear is cleaner when the main idea is bringing a brand, account or story into existence rather than assembling a structure.",
          sayInstead: "Quiero crear una marca."
        }
      ],
      variations: [
        {
          form: "Quiero crear algo propio.",
          register: "friendly practical",
          region: "General Colombian",
          whenToUse: "You are talking about starting a project that belongs to you, not just doing a task for someone else."
        },
        {
          form: "Creemos una historia corta para la marca.",
          register: "collaborative",
          region: "General Spanish",
          whenToUse: "You are proposing the next creative step with another person."
        },
        {
          form: "Creé una versión sencilla anoche.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You finished a first version and want to report it without overselling it."
        }
      ],
      prompt: "Paola says “quiero crear una marca.” What is she trying to make exist?",
      choices: [
        "A repaired notebook cover after it was torn.",
        "A public identity for her notebook project.",
        "A wooden stand built for the fair table."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence means “I created the logo last night”?",
          choices: [
            "Creé el logo anoche.",
            "Creo el logo anoche.",
            "Cree el logo anoche."
          ],
          answer: 0,
          tests: "creé as the accented preterite of crear"
        },
        {
          prompt: "Which sentence naturally proposes creating a name together?",
          choices: [
            "Creemos primero el precio.",
            "Rompamos primero el nombre.",
            "Creemos primero el nombre."
          ],
          answer: 2,
          tests: "creemos as let's create when followed by a direct object"
        },
        {
          prompt: "Why does crear fit better than construir in this brand scene?",
          choices: [
            "Because the task is washing a physical object.",
            "Because the new thing is an identity, not a structure.",
            "Because the notebook has already been smashed."
          ],
          answer: 1,
          tests: "crear for bringing an identity into existence"
        },
        {
          prompt: "Which phrase keeps the project modest and realistic?",
          choices: [
            "Una historia corta para la marca.",
            "Una ventana rota para la marca.",
            "Una pared construida para la marca."
          ],
          answer: 0,
          tests: "creating a small brand story rather than a physical object"
        }
      ]
    },
    en: {
      title: "Crear una marca pequeña en Houston",
      situation:
        "Usted está en Houston ayudando a una amiga que vende libretas hechas a mano. Quiere explicar en inglés que va a crear una marca propia, una historia corta y un primer catálogo.",
      setting: {
        who: "Paola hace libretas a mano y quiere que el proyecto se vea menos improvisado. Morgan la ayuda a convertir un favor familiar en algo que pueda mirar un cliente desconocido.",
        what: "Una conversación práctica sobre crear un nombre, una historia breve para la marca y un primer catálogo sin fingir que el negocio ya es grande.",
        when: "Un jueves por la tarde, dos días antes de una feria de pequeños negocios en un centro comunitario.",
        where: "Houston, en una mesa compartida de biblioteca pública, con muestras de libretas y etiquetas todavía sin decidir.",
        why: "Porque create no es sólo inventar arte. Sirve para hacer existir una marca, una cuenta, un plan o una historia que antes no estaba organizada."
      },
      address: {
        form: "mixed",
        who: "Paola y Morgan usan you, nombres de pila y frases cortas de colaboración.",
        why: "El inglés no cambia de pronombre para marcar confianza. La cercanía aparece en let's, I want to y we can, no en una diferencia de tú o usted.",
        ifYouSwitch:
          "No hay una forma pronominal que cambiar. Si usted intenta sonar más formal con títulos o frases largas, la conversación entre amigas se vuelve una asesoría innecesariamente fría."
      },
      dialogue: [
        {
          speaker: "Paola",
          target: "I want to create a brand, not just sell loose notebooks.",
          translation: "Quiero crear una marca, no sólo vender libretas sueltas.",
          pronunciation: "ai want tu kri-EIT a brand, not yost sel lus NOUT-buks",
          literal: "Yo quiero crear una marca, no sólo vender libretas sueltas.",
          why: "Create funciona cuando algo nuevo empieza a existir como idea organizada. Paola ya tiene libretas; lo nuevo es la marca."
        },
        {
          speaker: "Morgan",
          target: "Then let's create the name and a short story first.",
          translation: "Entonces creemos primero el nombre y una historia corta.",
          pronunciation: "den lets kri-EIT da neim and a short STO-ri ferst",
          literal: "Entonces creemos el nombre y una historia corta primero.",
          why: "Let's create es la propuesta compartida. No necesita invent ni make porque el resultado no es sólo una cosa física; es una identidad."
        },
        {
          speaker: "Paola",
          target: "I like it. I created the logo last night, but it still looks homemade.",
          translation: "Me gusta. Creé el logo anoche, pero todavía se ve casero.",
          pronunciation: "ai laik it. ai kri-EI-ted da LO-gou last nait, bat it stil luks JOUM-meid",
          literal: "Me gusta. Yo creé el logo anoche, pero todavía se ve hecho en casa.",
          why: "Created es pasado regular. El inglés no tiene la confusión escrita de creé y cree, pero sí exige la terminación -ed en una frase de anoche."
        },
        {
          speaker: "Morgan",
          target: "Homemade isn't bad; we can create an honest image, not a perfect one.",
          translation: "Casero no es malo; podemos crear una imagen honesta, no perfecta.",
          pronunciation: "JOUM-meid I-zent bad; ui kan kri-EIT an ON-est I-mij, not a PER-fekt uan",
          literal: "Hecho en casa no es malo; podemos crear una imagen honesta, no una perfecta.",
          why: "Create an image no significa mentir. Significa escoger cómo se va a presentar el trabajo para que el público lo entienda."
        },
        {
          speaker: "Paola",
          target: "What if we create three packages for the fair: basic, gift and custom?",
          translation: "¿Y si creamos tres paquetes para la feria: básico, regalo y personalizado?",
          pronunciation: "uat if ui kri-EIT thri PA-ke-yiz for da fer: BEI-sik, gift and KOS-tom",
          literal: "¿Qué tal si creamos tres paquetes para la feria: básico, regalo y personalizado?",
          why: "Packages son categorías de oferta. En esta frase create organiza opciones para clientes, no fabrica cajas."
        },
        {
          speaker: "Morgan",
          target: "Yes. If you create that today, tomorrow we can create the catalogue without rushing.",
          translation: "Sí. Si creas eso hoy, mañana podemos crear el catálogo sin correr.",
          pronunciation: "yes. if yu kri-EIT dat tu-DEI, tu-MA-rou ui kan kri-EIT da KA-ta-log ui-DAUT RA-shing",
          literal: "Sí. Si usted crea eso hoy, mañana podemos crear el catálogo sin afán.",
          why: "Without rushing da el sentido de sin correr o sin afán. La frase muestra create en pasos: crear categorías hoy y catálogo mañana."
        }
      ],
      vocabulary: [
        {
          term: "create",
          explanation:
            "Crear o hacer existir algo nuevo: una marca, un plan, una cuenta, una historia, un ambiente o una obra.",
          literal: "crear",
          useWhen:
            "Algo no existía como cosa reconocible y ahora usted lo está formando.",
          avoidWhen:
            "Habla de levantar una estructura con materiales. Para eso build suele ser más concreto.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["make", "invent", "design", "build"],
          example: { target: "I want to create a brand.", translation: "Quiero crear una marca." }
        },
        {
          term: "create a brand",
          explanation:
            "Crear una marca: nombre, tono, historia y promesa reconocible, no sólo un logo bonito.",
          literal: "crear una marca",
          useWhen:
            "Un proyecto pequeño necesita identidad antes de mostrarse a clientes, ferias o redes.",
          avoidWhen:
            "Sólo cambió un dibujo. A brand es más amplio que el logo.",
          register: "neutro de negocios",
          region: "Inglés universal.",
          related: ["logo", "name", "small business", "image"],
          example: { target: "We're creating a simple brand.", translation: "Estamos creando una marca sencilla." }
        },
        {
          term: "let's create",
          explanation:
            "La forma de proponer que dos o más personas creen algo juntas.",
          literal: "creemos",
          useWhen:
            "Quiere invitar a otra persona a construir una idea, lista, nombre o plan con usted.",
          avoidWhen:
            "La otra persona no participa. Entonces diga I will create o you should create.",
          register: "colaborativo",
          region: "Inglés universal.",
          related: ["let's make", "let's design", "let's draft", "let's plan"],
          example: { target: "Let's create the name first.", translation: "Creemos primero el nombre." }
        },
        {
          term: "created",
          explanation:
            "Pasado regular de create. Marca que la acción ya quedó hecha.",
          literal: "creé / creado",
          useWhen:
            "Habla de algo que hizo antes: last night, yesterday, this morning, earlier.",
          avoidWhen:
            "La creación está ocurriendo ahora. Ahí necesita am creating o are creating.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["create", "creating", "made", "designed"],
          example: { target: "I created the logo last night.", translation: "Creé el logo anoche." }
        },
        {
          term: "homemade",
          explanation:
            "Hecho en casa. Puede sonar cálido y honesto, no necesariamente mal hecho.",
          literal: "casero",
          useWhen:
            "Describe comida, objetos o proyectos con una sensación artesanal o doméstica.",
          avoidWhen:
            "Quiere criticar baja calidad. Homemade puede ser elogio si el contexto no dice lo contrario.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["handmade", "homegrown", "simple", "professional"],
          example: { target: "It still looks homemade.", translation: "Todavía se ve casero." }
        },
        {
          term: "package",
          explanation:
            "Un paquete de opciones o servicios, no sólo una caja física.",
          literal: "paquete",
          useWhen:
            "Agrupa productos o servicios en niveles para que el cliente escoja.",
          avoidWhen:
            "El tema es correo o envío. Package también puede ser paquete físico, pero aquí es una oferta.",
          register: "neutro de negocios",
          region: "Inglés universal.",
          related: ["bundle", "plan", "option", "catalogue"],
          example: { target: "Let's create three packages.", translation: "Creemos tres paquetes." }
        },
        {
          term: "without rushing",
          explanation:
            "Sin correr o sin afán. Habla del ritmo de trabajo, no de correr físicamente.",
          literal: "sin apresurarse",
          useWhen:
            "Quiere decir que un paso hecho hoy evita presión mañana.",
          avoidWhen:
            "Habla de una carrera literal. Ahí rushing no es la palabra central.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["calmly", "with time", "not in a rush", "step by step"],
          example: { target: "We can create it without rushing.", translation: "Podemos crearlo sin correr." }
        }
      ],
      note:
        "Create es más amplio que invent. Usted puede create a brand, create an account, create a plan o create a mood. En esta escena no se fabrica una libreta nueva; se crea la identidad que permite venderlas como proyecto. Para objetos físicos con estructura, build será más concreto, pero para una marca create es la opción limpia.",
      culture: [
        {
          label: "Small business no siempre es startup",
          body:
            "En inglés, small business puede sonar más aterrizado que startup para un proyecto de feria. Decir create a brand no obliga a fingir que hay inversionistas o una oficina. Sólo dice que el trabajo necesita nombre, imagen y una historia que un cliente pueda recordar."
        },
        {
          label: "Homemade puede vender",
          body:
            "Homemade no siempre es una disculpa. En mercados y ferias puede sugerir cercanía, cuidado y escala humana. Por eso Morgan no borra lo casero; propone crear una imagen honesta que lo convierta en parte del valor."
        },
        {
          label: "El catálogo organiza la oferta",
          body:
            "Un catalogue o una lista de packages no crea productos de la nada. Crea una manera clara de escoger. En inglés comercial cotidiano, esa organización también cuenta como creación porque cambia cómo existe el proyecto ante el público."
        }
      ],
      pitfalls: [
        {
          mistake: "“I create the logo last night.”",
          whyItFails:
            "Last night exige pasado. El presente create deja la frase partida entre hoy y anoche.",
          sayInstead: "I created the logo last night."
        },
        {
          mistake: "“Let's believe the name first.”",
          whyItFails:
            "Esa traducción sale de confundir creemos de creer con creemos de crear. En inglés, para proponer el nombre necesita create.",
          sayInstead: "Let's create the name first."
        },
        {
          mistake: "“I want to build a brand” como primera opción",
          whyItFails:
            "Build a brand existe, pero suena a proceso largo de hacerla crecer. Para el momento inicial de inventar nombre e identidad, create a brand es más directo.",
          sayInstead: "I want to create a brand."
        }
      ],
      variations: [
        {
          form: "I want to create something of my own.",
          register: "amistoso práctico",
          region: "Inglés universal",
          whenToUse: "Usted habla de iniciar un proyecto propio, no sólo hacer una tarea para otra persona."
        },
        {
          form: "Let's create a short story for the brand.",
          register: "colaborativo",
          region: "Inglés universal",
          whenToUse: "Quiere proponer el siguiente paso creativo con otra persona."
        },
        {
          form: "I created a simple version last night.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Ya terminó una primera versión y quiere reportarla sin exagerar."
        }
      ],
      prompt: "Paola says “I want to create a brand.” ¿Qué quiere hacer existir?",
      choices: [
        "Una estructura de madera para la mesa.",
        "Una identidad pública para su proyecto.",
        "Una libreta reparada después de romperse."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase dice correctamente que creó el logo anoche?",
          choices: [
            "I created the logo last night.",
            "I create the logo last night.",
            "I creating the logo last night."
          ],
          answer: 0,
          tests: "created como pasado regular con last night"
        },
        {
          prompt: "¿Cuál frase propone crear el nombre entre dos personas?",
          choices: [
            "Let's fix the name first.",
            "Let's break the name first.",
            "Let's create the name first."
          ],
          answer: 2,
          tests: "let's create como creemos en una propuesta"
        },
        {
          prompt: "¿Por qué create encaja mejor que build en esta escena?",
          choices: [
            "Porque el trabajo principal es lavar libretas.",
            "Porque se crea una identidad, no una estructura.",
            "Porque la marca está físicamente rota."
          ],
          answer: 1,
          tests: "create para hacer existir una identidad"
        },
        {
          prompt: "¿Cuál frase mantiene el proyecto modesto y realista?",
          choices: [
            "A short story for the brand.",
            "A broken window for the brand.",
            "A concrete wall for the brand."
          ],
          answer: 0,
          tests: "short story como pieza creada para la marca"
        }
      ]
    }
  },
  {
    id: "construir-una-huerta-en-tunja",
    level: "Developing · Making things",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    verb: "construir",
    review: "pending",
    es: {
      title: "Building a raised garden bed in Tunja",
      situation:
        "You are in Tunja with a group of neighbors who want a raised garden bed so the cold and the dogs do not damage the plants. You have to talk about building it well, not just putting boards down at random.",
      setting: {
        who: "Rosa coordinates the neighbors' courtyard project. Eli has built small things before and is helping turn loose boards into a raised bed that will survive weather and daily use.",
        what: "A hands-on planning conversation about building a raised garden bed: measurements, supports, who builds what, and why the structure matters.",
        when: "Saturday morning, cool and bright, before the afternoon rain that often interrupts outdoor work in the highlands.",
        where: "Tunja, in a shared courtyard behind an older house, with timber, soil bags and borrowed tools lined against a wall.",
        why: "Because construir is physical and structural: it means assembling something that has parts, support and a finished shape, and its present forms insert y."
      },
      address: {
        form: "usted",
        who: "Rosa uses usted with Eli because they are neighbors rather than close friends, and Eli answers the same way.",
        why: "In Boyacá, usted fits respectful neighborly cooperation. It does not make the scene cold; it lets people disagree about measurements without sounding pushy.",
        ifYouSwitch:
          "Tú would not be shocking from a younger neighbor, but it would soften the practical distance. Vos would sound out of place in this Tunja courtyard."
      },
      dialogue: [
        {
          speaker: "Rosa",
          target: "La idea es construir una huerta elevada, no dejar las matas en el piso.",
          translation: "The idea is to build a raised garden bed, not leave the plants on the ground.",
          pronunciation: "la ee-DEH-ah es kons-troo-EER OO-na WER-tah eh-leh-BAH-dah, no deh-HAR las MAH-tas en el PEE-soh",
          literal: "The idea is to-build a garden raised, not leave the plants on the floor.",
          why: "Construir fits because the bed needs structure: boards, supports, height and a shape that will hold soil. This is more than arranging pots."
        },
        {
          speaker: "Eli",
          target: "Perfecto. Yo construyo el marco si usted mide las tablas.",
          translation: "Perfect. I'll build the frame if you measure the boards.",
          pronunciation: "per-FEK-toh. yo kons-TROO-yoh el MAR-koh see oos-TED MEE-deh las TAH-blas",
          literal: "Perfect. I build the frame if you measure the boards.",
          why: "Construyo is the first trap: the present adds y before the ending. Construo is not the form Colombians say."
        },
        {
          speaker: "Rosa",
          target: "Mi hermano construye casas, pero hoy sólo viene a prestar el taladro.",
          translation: "My brother builds houses, but today he's only coming to lend the drill.",
          pronunciation: "mee er-MAH-noh kons-TROO-yeh KAH-sas, PEH-roh oy SOH-loh BYEH-neh ah pres-TAR el tah-LAH-droh",
          literal: "My brother builds houses, but today only he-comes to lend the drill.",
          why: "Construye shows the same y insertion in the third person. The verb scales from houses down to a garden frame because both are structures."
        },
        {
          speaker: "Eli",
          target: "Entonces construimos la base fuerte y después llenamos con tierra.",
          translation: "Then we build the base strong and fill it with soil afterward.",
          pronunciation: "en-TON-ses kons-troo-EE-mos la BAH-seh FWER-teh ee des-PWES yeh-NAH-mos kon TYEH-rrah",
          literal: "Then we-build the base strong and afterward we-fill with soil.",
          why: "Construimos has no y because the ending begins with i. The pattern is not random; the y appears where Spanish needs it to protect the sound."
        },
        {
          speaker: "Rosa",
          target: "Los vecinos construyeron una banca así y todavía está firme.",
          translation: "The neighbors built a bench like this and it's still solid.",
          pronunciation: "los beh-SEE-nos kons-troo-YEH-ron OO-na BAN-kah ah-SEE ee toh-dah-BEE-ah es-TAH FEER-meh",
          literal: "The neighbors built a bench like this and still it is firm.",
          why: "Construyeron carries the y into the past plural. It belongs to the same pattern as incluyeron and huyeron."
        },
        {
          speaker: "Eli",
          target: "Listo, si la construimos con paciencia, dura varios años.",
          translation: "Good, if we build it patiently, it'll last several years.",
          pronunciation: "LEES-toh, see la kons-troo-EE-mos kon pah-SYEN-syah, DOO-rah BAH-ryos AH-nyos",
          literal: "Ready, if it we-build with patience, it-lasts several years.",
          why: "The pronoun la points back to the garden bed. Construir here includes the care of making it sturdy, not just finishing fast."
        }
      ],
      vocabulary: [
        {
          term: "construir",
          explanation:
            "To build something with structure: parts assembled into a stable whole.",
          literal: "to build",
          useWhen:
            "There are materials, supports and a finished shape: a house, bench, frame, wall, shelf or raised bed.",
          avoidWhen:
            "You are only creating an idea, brand or file. Crear is cleaner when there is no physical structure.",
          register: "neutral",
          region: "General Spanish; common in Colombia for literal and careful metaphorical building.",
          related: ["armar", "levantar", "fabricar", "crear"],
          example: { target: "Vamos a construir una huerta elevada.", translation: "We're going to build a raised garden bed." }
        },
        {
          term: "construyo",
          explanation:
            "I build. The present yo form inserts y: construyo, not construo.",
          literal: "I build",
          useWhen:
            "Saying what you build or what part you will take responsibility for.",
          avoidWhen:
            "Writing or saying construo. That form drops the sound Spanish needs here.",
          register: "neutral",
          region: "General Spanish.",
          related: ["construye", "construimos", "construí", "construyeron"],
          example: { target: "Yo construyo el marco.", translation: "I'll build the frame." }
        },
        {
          term: "construye",
          explanation:
            "He, she or usted builds. It has the same y insertion as construyo.",
          literal: "builds",
          useWhen:
            "Talking about what another person builds, or addressing usted indirectly through the verb form.",
          avoidWhen:
            "For plural people. They build is construyen, and they built is construyeron.",
          register: "neutral",
          region: "General Spanish.",
          related: ["construyo", "construyen", "incluye", "huye"],
          example: { target: "Mi hermano construye casas.", translation: "My brother builds houses." }
        },
        {
          term: "construyeron",
          explanation:
            "They built. The y also appears in this past-tense plural form.",
          literal: "they built",
          useWhen:
            "Reporting what a group built: neighbors, workers, relatives or volunteers.",
          avoidWhen:
            "You are speaking about we built. That is construimos in the preterite too, without y.",
          register: "neutral",
          region: "General Spanish.",
          related: ["construí", "construimos", "incluyeron", "huyeron"],
          example: { target: "Los vecinos construyeron una banca.", translation: "The neighbors built a bench." }
        },
        {
          term: "el marco",
          explanation:
            "The frame: the structural outline that holds the rest together.",
          literal: "the frame",
          useWhen:
            "Talking about doors, beds, windows, shelves, garden beds or any built object with a supporting outline.",
          avoidWhen:
            "You mean the decorative border of a picture. Marco can mean that too, but the building context is structural.",
          register: "neutral",
          region: "General Spanish.",
          related: ["base", "tabla", "soporte", "estructura"],
          example: { target: "Construyo el marco primero.", translation: "I'll build the frame first." }
        },
        {
          term: "la base",
          explanation:
            "The base or foundation that makes a built object stable.",
          literal: "the base",
          useWhen:
            "Explaining what must be strong before adding weight, soil, shelves or a top layer.",
          avoidWhen:
            "The object does not need support or weight-bearing parts. Then base may overstate the work.",
          register: "neutral",
          region: "General Spanish.",
          related: ["cimiento", "soporte", "piso", "estructura"],
          example: { target: "Construimos la base fuerte.", translation: "We build the base strong." }
        },
        {
          term: "firme",
          explanation:
            "Firm, solid or stable, especially after something has been built or repaired well.",
          literal: "firm",
          useWhen:
            "Checking whether a bench, shelf, post, frame or agreement holds steady.",
          avoidWhen:
            "You mean hard as texture. Firme is about stability or resolve more than hardness.",
          register: "neutral",
          region: "General Colombian Spanish.",
          related: ["estable", "sólido", "seguro", "flojo"],
          example: { target: "Todavía está firme.", translation: "It's still solid." }
        }
      ],
      note:
        "Construir has two lessons at once. Semantically, it is the verb for structures: you build a base, a frame, a house, a bench, even trust if the metaphor is deliberate. Grammatically, it belongs to the -uir verbs that insert y in many forms: construyo, construye, construyen, construyeron. But not every form has it: construimos and construí keep the i without y.",
      culture: [
        {
          label: "A raised bed is a structure, not decoration",
          body:
            "In a cool Andean courtyard, a huerta elevada protects plants from dogs, mud and hard ground. It needs a frame and a base that can hold wet soil. That is why construir fits better than a vague hacer: the neighbors are making something that must stay firm after the first rainy week."
        },
        {
          label: "Usted can cooperate warmly",
          body:
            "Boyacá and the highlands use usted comfortably in neighborly exchanges. It lets Rosa say practical things about measuring and strength without sounding bossy. English speakers often hear distance where Colombians hear ordinary respect."
        },
        {
          label: "The y pattern is shared",
          body:
            "Construir behaves like incluir and huir in the forms that need y: construyo, construye, construyeron. Learning the pattern as a family is better than memorizing one form at a time, because the same sound problem keeps returning."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “yo construo”",
          whyItFails:
            "The present yo form inserts y: construyo. Construo is a learner form built by over-regularising the verb.",
          sayInstead: "Yo construyo el marco."
        },
        {
          mistake: "Writing “construieron” for “they built”",
          whyItFails:
            "The preterite plural also needs y: construyeron. It follows the same pattern as incluyeron and huyeron.",
          sayInstead: "Los vecinos construyeron una banca."
        },
        {
          mistake: "Using “crear” when the object has boards and supports",
          whyItFails:
            "Crear can start an idea, but a raised bed with a frame and base is being physically built. Construir names the structural work.",
          sayInstead: "Vamos a construir la huerta."
        }
      ],
      variations: [
        {
          form: "Yo construyo el marco.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You are taking responsibility for one structural part of the object."
        },
        {
          form: "Los vecinos construyeron una banca.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You are reporting what a group built in the past."
        },
        {
          form: "Si la construimos bien, queda firme.",
          register: "collaborative practical",
          region: "General Colombian",
          whenToUse: "You care about the quality and stability of the finished structure."
        }
      ],
      prompt: "Eli says “yo construyo el marco.” What grammar trap is he avoiding?",
      choices: [
        "The irregular participle roto after romper.",
        "The y insertion in the present form construyo.",
        "The accent in the past form creé."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence has the correct yo form of construir?",
          choices: [
            "Yo construyo la base.",
            "Yo construo la base.",
            "Yo construido la base."
          ],
          answer: 0,
          tests: "construyo with y insertion"
        },
        {
          prompt: "Which sentence correctly says the neighbors built a bench?",
          choices: [
            "Los vecinos construimos una banca.",
            "Los vecinos construieron una banca.",
            "Los vecinos construyeron una banca."
          ],
          answer: 2,
          tests: "construyeron as the preterite plural"
        },
        {
          prompt: "Why does construir fit the raised-bed scene?",
          choices: [
            "Because the project has structure, parts and support.",
            "Because the phone stopped working without visible damage.",
            "Because the logo exists only as a digital idea."
          ],
          answer: 0,
          tests: "construir for physical structure"
        },
        {
          prompt: "Which phrase checks the quality of the finished build?",
          choices: [
            "Queda muy creído.",
            "Queda bien firme.",
            "Queda bien roto."
          ],
          answer: 1,
          tests: "firme as stable or solid"
        }
      ]
    },
    en: {
      title: "Construir una jardinera elevada en Manchester",
      situation:
        "Usted está en Manchester ayudando a unos vecinos a construir una jardinera elevada en un patio compartido. Debe hablar en inglés de estructura, base y firmeza sin traducir construyo palabra por palabra.",
      setting: {
        who: "Rosa coordina el proyecto del patio común. Eli ha armado cosas pequeñas antes y ayuda a convertir tablas sueltas en una jardinera que aguante lluvia y uso diario.",
        what: "Una conversación práctica sobre construir una jardinera elevada: medidas, soportes, quién hace cada parte y por qué importa la estructura.",
        when: "Un sábado por la mañana, antes de que vuelva la lluvia que suele interrumpir los trabajos al aire libre.",
        where: "Manchester, en el patio de una casa compartida, con madera, bolsas de tierra y herramientas prestadas junto a una pared de ladrillo.",
        why: "Porque build cubre estructuras físicas mejor que create. Además, el inglés no tiene la trampa de la y en construyo, pero sí distingue build, make y create por contexto."
      },
      address: {
        form: "mixed",
        who: "Rosa y Eli usan you y nombres de pila, como vecinos que cooperan sin hacerse íntimos.",
        why: "En inglés la distancia respetuosa no aparece en el pronombre. Aparece en could, please, let's y en explicar las medidas sin mandar.",
        ifYouSwitch:
          "No hay usted ni vos que cambiar. Si usted agrega sir o madam a esta escena, la vuelve demasiado rígida para un patio de vecinos."
      },
      dialogue: [
        {
          speaker: "Rosa",
          target: "The idea is to build a raised planter, not leave the plants on the ground.",
          translation: "La idea es construir una huerta elevada, no dejar las matas en el piso.",
          pronunciation: "di ai-DI-a iz tu bild a reizd PLAN-ter, not liv da plants on da graund",
          literal: "La idea es construir una jardinera elevada, no dejar las plantas en el suelo.",
          why: "Build encaja porque hay estructura física: madera, soporte y una forma final que debe sostener tierra."
        },
        {
          speaker: "Eli",
          target: "Perfect. I'll build the frame if you measure the boards.",
          translation: "Perfecto. Yo construyo el marco si usted mide las tablas.",
          pronunciation: "PER-fekt. ail bild da freim if yu ME-zhur da bordz",
          literal: "Perfecto. Construiré el marco si usted mide las tablas.",
          why: "I'll build resuelve en inglés lo que en español aparece como construyo. No hay y irregular; hay futuro con will por tratarse de un reparto de tareas."
        },
        {
          speaker: "Rosa",
          target: "My brother builds houses, but today he's only lending us the drill.",
          translation: "Mi hermano construye casas, pero hoy sólo viene a prestarnos el taladro.",
          pronunciation: "mai BRO-der bildz JAU-ziz, bat tu-DEI jiz ON-li LEN-ding os da dril",
          literal: "Mi hermano construye casas, pero hoy sólo nos presta el taladro.",
          why: "Builds añade -s por he. La precisión no está en una forma irregular, sino en recordar la -s de tercera persona."
        },
        {
          speaker: "Eli",
          target: "Then we build the base strong and fill it with soil afterward.",
          translation: "Entonces construimos la base fuerte y después llenamos con tierra.",
          pronunciation: "den ui bild da beis strong and fil it uid soil AF-ter-ward",
          literal: "Entonces construimos la base fuerte y la llenamos con tierra después.",
          why: "Base, frame y soil hacen que build sea más natural que create. El inglés escucha materiales y estructura."
        },
        {
          speaker: "Rosa",
          target: "The neighbors built a bench like this, and it's still solid.",
          translation: "Los vecinos construyeron una banca así y todavía está firme.",
          pronunciation: "da NEI-borz bilt a bench laik dis, and its stil SO-lid",
          literal: "Los vecinos construyeron una banca así y todavía está sólida.",
          why: "Built es el pasado irregular de build. El español tiene construyeron con y; el inglés cambia la palabra completa de build a built."
        },
        {
          speaker: "Eli",
          target: "Good. If we build it carefully, it should last for years.",
          translation: "Listo. Si la construimos con cuidado, debe durar años.",
          pronunciation: "gud. if ui bild it KER-fu-li, it shud last for yirz",
          literal: "Bien. Si la construimos cuidadosamente, debería durar por años.",
          why: "Build it carefully incluye la idea de construir bien. En inglés no hace falta añadir strong otra vez si carefully y last for years ya marcan calidad."
        }
      ],
      vocabulary: [
        {
          term: "build",
          explanation:
            "Construir algo con estructura: partes que se ensamblan en un todo estable.",
          literal: "construir",
          useWhen:
            "Hay materiales, soportes y una forma final: casa, banca, marco, pared, estante o jardinera.",
          avoidWhen:
            "Quiere hablar de una idea, una marca o una cuenta. Create suele ser mejor cuando no hay estructura física.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["construct", "make", "assemble", "create"],
          example: { target: "We're going to build a raised planter.", translation: "Vamos a construir una huerta elevada." }
        },
        {
          term: "I'll build",
          explanation:
            "Construyo o voy a construir en un reparto de tareas. Will marca la decisión tomada en el momento.",
          literal: "construiré",
          useWhen:
            "Usted toma responsabilidad por una parte del trabajo: I'll build the frame, I'll build the shelf.",
          avoidWhen:
            "Habla de una rutina profesional. Para eso use I build houses, sin will.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I build", "I'm building", "we'll build", "I can build"],
          example: { target: "I'll build the frame.", translation: "Yo construyo el marco." }
        },
        {
          term: "builds",
          explanation:
            "Construye. La tercera persona del presente agrega -s.",
          literal: "construye",
          useWhen:
            "Habla de lo que otra persona construye como oficio, costumbre o capacidad.",
          avoidWhen:
            "El sujeto es I, you, we o they. Ahí la forma es build, sin -s.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["build", "built", "builder", "building"],
          example: { target: "My brother builds houses.", translation: "Mi hermano construye casas." }
        },
        {
          term: "built",
          explanation:
            "Pasado y participio irregular de build: built, no builded.",
          literal: "construyó / construido",
          useWhen:
            "Reporta algo construido antes, o describe algo already built.",
          avoidWhen:
            "Usar builded. Esa forma no es el pasado normal del inglés estándar.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["build", "built by", "rebuilt", "builder"],
          example: { target: "The neighbors built a bench.", translation: "Los vecinos construyeron una banca." }
        },
        {
          term: "frame",
          explanation:
            "Marco o estructura básica que sostiene el resto.",
          literal: "marco",
          useWhen:
            "Habla de puertas, camas, ventanas, estantes, jardineras o cualquier objeto con contorno de soporte.",
          avoidWhen:
            "Sólo habla de decoración visual. Frame puede ser marco de foto, pero aquí es estructura.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["base", "board", "support", "structure"],
          example: { target: "I'll build the frame first.", translation: "Construyo el marco primero." }
        },
        {
          term: "base",
          explanation:
            "Base o apoyo que mantiene estable una cosa construida.",
          literal: "base",
          useWhen:
            "Explica qué debe quedar fuerte antes de agregar peso, tierra, repisas o una capa superior.",
          avoidWhen:
            "El objeto no sostiene peso. Base puede sonar demasiado estructural para una simple idea.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["foundation", "support", "bottom", "structure"],
          example: { target: "We build the base strong.", translation: "Construimos la base fuerte." }
        },
        {
          term: "solid",
          explanation:
            "Firme, sólido o estable después de construir algo bien.",
          literal: "sólido / firme",
          useWhen:
            "Revisa si una banca, repisa, poste o marco aguanta y no se mueve.",
          avoidWhen:
            "Quiere decir duro como textura. Solid puede hacerlo, pero en esta escena habla de estabilidad.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["stable", "sturdy", "firm", "wobbly"],
          example: { target: "It's still solid.", translation: "Todavía está firme." }
        }
      ],
      note:
        "Build es el verbo físico de este grupo. Create sirve para una marca o idea; build sirve cuando hay madera, base, marco, paredes o una estructura que debe aguantar. La irregularidad del inglés no está en una y como construyo, sino en built: the neighbors built a bench, no builded a bench.",
      culture: [
        {
          label: "Raised planter no es sólo una matera",
          body:
            "Una raised planter tiene estructura y altura. Por eso build suena mejor que make cuando se habla de tablas, marco y base. Make no sería imposible, pero build comunica que la cosa debe sostener peso y durar."
        },
        {
          label: "La cortesía vive en la frase",
          body:
            "En un patio compartido en inglés, nadie cambia de pronombre para volverse más respetuoso. Could you measure the boards? o I'll build the frame if you measure the boards mantiene cooperación sin sonar como orden."
        },
        {
          label: "Built es pequeño pero esencial",
          body:
            "Muchos hispanohablantes quieren regularizar build como builded. El inglés común no lo hace. Built cubre pasado y participio, así que sirve en they built it and it was built well."
        }
      ],
      pitfalls: [
        {
          mistake: "“I builded the frame yesterday.”",
          whyItFails:
            "Build tiene pasado irregular. La forma estándar es built, tanto para pasado como para participio.",
          sayInstead: "I built the frame yesterday."
        },
        {
          mistake: "“My brother build houses.”",
          whyItFails:
            "En presente, he y my brother necesitan -s: builds. El español construye no le recuerda a usted esa marca inglesa.",
          sayInstead: "My brother builds houses."
        },
        {
          mistake: "“Create the frame” como frase principal",
          whyItFails:
            "Se entiende, pero frame con tablas y soporte pide build. Create suena más abstracto, como si el marco fuera una idea o diseño.",
          sayInstead: "Build the frame."
        }
      ],
      variations: [
        {
          form: "I'll build the frame.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Usted toma responsabilidad por una parte estructural del objeto."
        },
        {
          form: "The neighbors built a bench.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Reporta en pasado lo que construyó un grupo."
        },
        {
          form: "If we build it carefully, it should last.",
          register: "colaborativo práctico",
          region: "Inglés universal",
          whenToUse: "Le importa la calidad y duración de la estructura terminada."
        }
      ],
      prompt: "Eli says “I'll build the frame.” ¿Qué tipo de trabajo está ofreciendo?",
      choices: [
        "Crear una marca sin materiales físicos.",
        "Armar una parte estructural con tablas.",
        "Reportar que un teléfono no funciona."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase usa bien el pasado de build?",
          choices: [
            "I built the frame yesterday.",
            "I builded the frame yesterday.",
            "I building the frame yesterday."
          ],
          answer: 0,
          tests: "built como pasado irregular de build"
        },
        {
          prompt: "¿Cuál frase marca bien la tercera persona?",
          choices: [
            "My brother build houses.",
            "My brother building houses.",
            "My brother builds houses."
          ],
          answer: 2,
          tests: "builds con he / my brother"
        },
        {
          prompt: "¿Por qué build encaja con una jardinera elevada?",
          choices: [
            "Porque tiene estructura, partes y soporte.",
            "Porque el celular dejó de funcionar solo.",
            "Porque la marca existe sólo como idea."
          ],
          answer: 0,
          tests: "build para estructura física"
        },
        {
          prompt: "¿Cuál frase revisa la calidad de lo construido?",
          choices: [
            "It feels very believed.",
            "It still feels solid.",
            "It sounds very broken."
          ],
          answer: 1,
          tests: "solid como firme o estable"
        }
      ]
    }
  },
  {
    id: "reportar-un-vidrio-roto-en-quibdo",
    level: "Developing · Making things",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    verb: "romper",
    review: "pending",
    es: {
      title: "Reporting a broken window in Quibdó",
      situation:
        "You are staying in Quibdó during a heavy downpour. A small window falls, a pane breaks, and the fan also stops working. You need to report the damage without sounding guilty or imprecise.",
      setting: {
        who: "Nora manages a small guesthouse and knows the rain can turn minor defects into urgent repairs. Alex is a guest who needs to report exactly what happened before leaving for the day.",
        what: "A careful front-desk conversation distinguishing a smashed pane from an appliance that simply stopped working.",
        when: "Early evening during heavy rain, with towels near the doorway and thunder interrupting the conversation.",
        where: "Quibdó, in a small guesthouse where humidity, rain and old fittings make maintenance a constant concern.",
        why: "Because romper is not the general Colombian verb for every breakdown. It fits torn or smashed things; appliances often se dañan, están dañados or no sirven."
      },
      address: {
        form: "usted",
        who: "Nora and Alex use usted because this is a lodging problem and both want the report to stay calm.",
        why: "Usted gives the conversation room to be factual. It helps Alex avoid sounding defensive while Nora checks what needs repair.",
        ifYouSwitch:
          "Tú would feel too casual for reporting damage at the desk. Vos would be regionally and socially wrong in this service exchange."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Doña Nora, se me rompió un vidrio de la ventana con el golpe de viento.",
          translation: "Doña Nora, a pane in the window broke on me with the gust of wind.",
          pronunciation: "DOH-nyah NOH-rah, seh meh rrom-PYOH oon BEE-dryoh deh la ben-TAH-nah kon el GOL-peh deh BYEN-toh",
          literal: "Doña Nora, to-me broke a glass of the window with the hit of wind.",
          why: "Se me rompió is the useful impersonal shape: it reports the breakage without saying I broke it on purpose. The glass really did break, so romper is honest here."
        },
        {
          speaker: "Nora",
          target: "¿El vidrio quedó roto o sólo se soltó el marco?",
          translation: "Is the glass broken, or did only the frame come loose?",
          pronunciation: "el BEE-dryoh keh-DOH RROH-toh o SOH-loh seh sol-TOH el MAR-koh",
          literal: "The glass stayed broken or only itself loosened the frame?",
          why: "Roto is the irregular participle. Rompido exists in some limited uses, but for ordinary broken glass Colombians say roto."
        },
        {
          speaker: "Alex",
          target: "Quedó roto en dos pedazos; no lo he tocado.",
          translation: "It's broken into two pieces; I haven't touched it.",
          pronunciation: "keh-DOH RROH-toh en dos peh-DAH-sos; no lo eh toh-KAH-doh",
          literal: "It stayed broken in two pieces; not it I-have touched.",
          why: "Roto describes the result. The extra detail en dos pedazos confirms this is physical breakage, not just a thing failing to work."
        },
        {
          speaker: "Nora",
          target: "Gracias por avisar. ¿Y el ventilador también se rompió?",
          translation: "Thanks for letting me know. Did the fan break too?",
          pronunciation: "GRAH-syas por ah-bee-SAR. ee el ben-tee-lah-DOR tam-BYEN seh rrom-PYOH",
          literal: "Thanks for informing. And the fan also itself broke?",
          why: "Nora can ask with romper, but she is checking the category. For appliances, Colombians often move quickly to dañarse or no servir."
        },
        {
          speaker: "Alex",
          target: "No, el ventilador se dañó; prende, pero no gira y no sirve.",
          translation: "No, the fan stopped working; it turns on, but it doesn't spin and it's no use.",
          pronunciation: "no, el ben-tee-lah-DOR seh dah-NYOH; PREN-deh, PEH-roh no HEE-rah ee no SEER-beh",
          literal: "No, the fan got damaged; it turns-on, but it does not spin and does not serve.",
          why: "This is the honest Colombian split. A fan that fails is se dañó or no sirve, not usually se rompió unless something physically snapped."
        },
        {
          speaker: "Nora",
          target: "Perfecto. Anoto: vidrio roto y ventilador dañado, no roto.",
          translation: "Perfect. I'll note it: broken glass and damaged fan, not broken.",
          pronunciation: "per-FEK-toh. ah-NOH-toh: BEE-dryoh RROH-toh ee ben-tee-lah-DOR dah-NYAH-doh, no RROH-toh",
          literal: "Perfect. I-note: glass broken and fan damaged, not broken.",
          why: "The final contrast is the lesson: roto for smashed glass, dañado for the appliance problem. Reporting accurately makes the repair request clearer."
        }
      ],
      vocabulary: [
        {
          term: "romper",
          explanation:
            "To break by tearing, snapping or smashing. It is not the best Colombian default for every object that stops working.",
          literal: "to break",
          useWhen:
            "Glass, fabric, a bone, a plate, a strap or another physical thing is torn, cracked, snapped or smashed.",
          avoidWhen:
            "A phone, fan or appliance simply stopped working. Colombians usually say “se dañó”, “está dañado” or “no sirve”.",
          register: "neutral",
          region: "General Spanish; the usage warning is especially important in Colombia.",
          related: ["romperse", "dañarse", "quebrar", "rasgar"],
          example: { target: "Se me rompió un vidrio.", translation: "A pane broke on me." }
        },
        {
          term: "se me rompió",
          explanation:
            "It broke on me. This very common pattern reports an accident while shifting blame away from the speaker.",
          literal: "to-me it broke",
          useWhen:
            "Something really broke and you need to report it without sounding like you deliberately did it.",
          avoidWhen:
            "You intentionally broke it. Then use lo rompí and take responsibility.",
          register: "neutral practical",
          region: "Very common in Colombian speech.",
          related: ["se me dañó", "lo rompí", "se cayó", "se quebró"],
          example: { target: "Se me rompió un vidrio de la ventana.", translation: "A window pane broke on me." }
        },
        {
          term: "roto",
          explanation:
            "The irregular participle of romper: broken.",
          literal: "broken",
          useWhen:
            "Describing the result of a physical break: vidrio roto, plato roto, hueso roto, tela rota.",
          avoidWhen:
            "Saying rompido in normal speech. Roto is the form learners need almost every time.",
          register: "neutral",
          region: "General Spanish.",
          related: ["rota", "rotos", "rotas", "dañado"],
          example: { target: "El vidrio quedó roto.", translation: "The glass ended up broken." }
        },
        {
          term: "en dos pedazos",
          explanation:
            "Into two pieces, a concrete way to show that physical breaking really happened.",
          literal: "in two pieces",
          useWhen:
            "You need to describe the visible result of glass, wood, plastic or ceramic breaking.",
          avoidWhen:
            "Nothing split or cracked. Then pedazos exaggerates the damage.",
          register: "neutral",
          region: "General Spanish.",
          related: ["partido", "quebrado", "rajado", "hecho trizas"],
          example: { target: "Quedó roto en dos pedazos.", translation: "It broke into two pieces." }
        },
        {
          term: "se dañó",
          explanation:
            "It broke down, got damaged or stopped working. This is often the Colombian choice for phones and appliances.",
          literal: "it got damaged",
          useWhen:
            "A fan, phone, charger, fridge or machine is not working, especially without visible smashing.",
          avoidWhen:
            "The object is visibly torn or shattered. Then romper or quebrar may be more precise.",
          register: "neutral",
          region: "Extremely common in Colombia.",
          related: ["está dañado", "no sirve", "falló", "se apagó"],
          example: { target: "El ventilador se dañó.", translation: "The fan stopped working." }
        },
        {
          term: "no sirve",
          explanation:
            "It doesn't work or it is no use. A blunt everyday way to report that a thing is not functioning.",
          literal: "it does not serve",
          useWhen:
            "The practical problem is that the object cannot do its job.",
          avoidWhen:
            "You need to describe visible damage for an inventory or insurance report. Then be more specific.",
          register: "neutral informal",
          region: "Very common in Colombia.",
          related: ["se dañó", "no funciona", "está malo", "fallando"],
          example: { target: "Prende, pero no gira y no sirve.", translation: "It turns on, but it doesn't spin and it doesn't work." }
        },
        {
          term: "vidrio",
          explanation:
            "Glass or a pane of glass, especially in a window or door.",
          literal: "glass",
          useWhen:
            "Reporting broken window glass, a pane, a mirror-like surface or glass as material.",
          avoidWhen:
            "You mean a drinking glass. In Colombia that is normally vaso, not vidrio.",
          register: "neutral",
          region: "General Colombian Spanish.",
          related: ["ventana", "vaso", "espejo", "marco"],
          example: { target: "Se rompió un vidrio de la ventana.", translation: "A window pane broke." }
        }
      ],
      note:
        "Romper is useful, but it is not the all-purpose Colombian verb for break. Use it when something tears, cracks, snaps or shatters: un vidrio roto, una tela rota, un hueso roto. If a phone or appliance simply stops working, Colombians are much more likely to say se dañó, está dañado or no sirve. The impersonal se me rompió and se me dañó are everywhere because they report the accident without making the speaker sound guilty.",
      culture: [
        {
          label: "Reporting damage means naming the kind of damage",
          body:
            "At a guesthouse desk, vidrio roto and ventilador dañado are different maintenance problems. One needs safe cleanup and replacement glass; the other needs diagnosis. A learner who uses romper for both sounds less precise than Colombians normally are in this situation."
        },
        {
          label: "Se me is not an excuse machine",
          body:
            "Se me rompió does soften blame, but it is not magic. It works when the breakage is accidental or partly outside your control. If you deliberately threw the object, lo rompí is the honest grammar. The phrase is common because most small damage really is awkward accident, not confession."
        },
        {
          label: "Rain makes maintenance constant",
          body:
            "In a wet city like Quibdó, humidity and rain turn small defects into daily work. A loose frame, a failing fan and damp towels are not exotic details; they are the kind of practical background that makes precise damage language valuable."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “mi celular se rompió” when it only stopped working",
          whyItFails:
            "Colombians usually hear se rompió as physical breakage. If the screen did not crack and the phone simply failed, se dañó or no sirve sounds more natural.",
          sayInstead: "Se me dañó el celular."
        },
        {
          mistake: "Saying “el vidrio está rompido”",
          whyItFails:
            "The ordinary participle is roto. Rompido is not the form you want for normal broken glass, clothing or bones.",
          sayInstead: "El vidrio está roto."
        },
        {
          mistake: "Using “se me rompió” to avoid blame for something deliberate",
          whyItFails:
            "The se me pattern frames the breakage as accidental. If you intentionally broke it, the grammar should not pretend otherwise.",
          sayInstead: "Lo rompí sin querer."
        }
      ],
      variations: [
        {
          form: "Se me rompió un vidrio.",
          register: "careful practical",
          region: "General Colombian",
          whenToUse: "A glass pane actually broke and you need to report the accident calmly."
        },
        {
          form: "El celular se me dañó.",
          register: "neutral",
          region: "Very common in Colombia",
          whenToUse: "A phone stopped working without necessarily being cracked or smashed."
        },
        {
          form: "Está roto en dos pedazos.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You need to describe visible physical breakage and the result matters."
        },
        {
          form: "Aunque hayan pasado dos semanas, el vidrio fue repuesto por la administración.",
          register: "courteous",
          region: "Universal Spanish",
          whenToUse: "Conceding that a repair took too long while still crediting whoever finally did it. Aunque hayan pasado admits the delay without arguing about it."
        }
      ],
      prompt: "Alex says “se me rompió un vidrio” but “el ventilador se dañó.” What contrast is he making?",
      choices: [
        "Glass physically broke; the fan stopped working.",
        "The fan was created; the glass was built.",
        "Both things only need to be cleaned."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which report sounds most natural for a phone that stopped working?",
          choices: [
            "Mi celular se construyó.",
            "Se me dañó el celular.",
            "Mi celular está rompido."
          ],
          answer: 1,
          tests: "se dañó for a phone that stopped working"
        },
        {
          prompt: "Which phrase uses the correct participle of romper?",
          choices: [
            "El vidrio está rompido.",
            "El vidrio está construido.",
            "El vidrio está roto."
          ],
          answer: 2,
          tests: "roto as the irregular participle"
        },
        {
          prompt: "What does “se me rompió” add to a damage report?",
          choices: [
            "It presents the breakage as accidental.",
            "It says the object was newly created.",
            "It means the object still works perfectly."
          ],
          answer: 0,
          tests: "se me as accidental or blame-softening"
        },
        {
          prompt: "Which object best fits romper without extra explanation?",
          choices: [
            "Un ventilador que no gira.",
            "Un vidrio en dos pedazos.",
            "Un celular que no prende."
          ],
          answer: 1,
          tests: "romper for visible physical breakage"
        }
      ]
    },
    en: {
      title: "Reportar un vidrio roto en Miami",
      situation:
        "Usted está en Miami hospedado durante una tormenta fuerte. Una ventana pequeña se rompe y un ventilador deja de funcionar. Debe reportar en inglés la diferencia entre algo broken y algo not working.",
      setting: {
        who: "Nora administra una casa de huéspedes pequeña y sabe que una tormenta puede convertir un defecto menor en una reparación urgente. Alex necesita explicar exactamente qué pasó.",
        what: "Una conversación cuidadosa de recepción que distingue un vidrio quebrado de un aparato que simplemente dejó de funcionar.",
        when: "Al comienzo de la noche durante lluvia fuerte, con toallas junto a la puerta y truenos interrumpiendo la conversación.",
        where: "Miami, en una casa de huéspedes antigua donde la humedad y las tormentas hacen que el mantenimiento sea constante.",
        why: "Porque broken no siempre traduce romper en la vida real. Para aparatos, not working o stopped working puede sonar más preciso que broken."
      },
      address: {
        form: "mixed",
        who: "Nora y Alex usan you y frases cuidadosas porque hay un problema de alojamiento que debe quedar claro.",
        why: "El inglés marca el tono con I'm sorry, just to check y thanks for letting me know. No hay un usted distinto para hacer más formal el reporte.",
        ifYouSwitch:
          "No puede cambiar de pronombre. Si necesita sonar más cuidadoso, explique el hecho con precisión y evite frases que parezcan culpar a la otra persona."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Nora, a window pane broke in the gust of wind.",
          translation: "Nora, se rompió un vidrio de la ventana con el golpe de viento.",
          pronunciation: "NO-ra, a UIN-dou pein brouk in da gast ov uind",
          literal: "Nora, un panel de ventana se rompió en la ráfaga de viento.",
          why: "Broke funciona porque el vidrio sí se quebró físicamente. Window pane evita que glass suene como vaso."
        },
        {
          speaker: "Nora",
          target: "Is the glass broken, or did the frame just come loose?",
          translation: "¿El vidrio quedó roto o sólo se soltó el marco?",
          pronunciation: "iz da glas BROU-ken, or did da freim yost kam lus",
          literal: "¿El vidrio está roto, o el marco sólo se soltó?",
          why: "Broken describe el resultado visible. Come loose ofrece otra posibilidad: algo se soltó, pero no necesariamente se rompió."
        },
        {
          speaker: "Alex",
          target: "It's broken in two pieces; I haven't touched it.",
          translation: "Está roto en dos pedazos; no lo he tocado.",
          pronunciation: "its BROU-ken in tu PI-siz; ai JA-vent tacht it",
          literal: "Está roto en dos pedazos; no lo he tocado.",
          why: "Broken in two pieces confirma daño físico. Esa precisión es mejor que decir sólo it broke si alguien debe limpiar o reemplazar el vidrio."
        },
        {
          speaker: "Nora",
          target: "Thanks for letting me know. Did the fan break too?",
          translation: "Gracias por avisarme. ¿También se rompió el ventilador?",
          pronunciation: "thanks for LE-ting mi nou. did da fan breik tu",
          literal: "Gracias por dejarme saber. ¿El ventilador también se rompió?",
          why: "Did the fan break? es posible, pero pregunta si hubo ruptura. Alex todavía debe aclarar si el aparato está roto o simplemente no funciona."
        },
        {
          speaker: "Alex",
          target: "No, the fan stopped working; it turns on, but it doesn't spin.",
          translation: "No, el ventilador se dañó; prende, pero no gira.",
          pronunciation: "nou, da fan stopt UER-king; it ternz on, bat it DA-zent spin",
          literal: "No, el ventilador dejó de trabajar; prende, pero no gira.",
          why: "Stopped working es la frase honesta para un aparato que falla sin romperse visiblemente. Broken puede sonar como daño físico."
        },
        {
          speaker: "Nora",
          target: "Got it: broken glass and a fan that's not working.",
          translation: "Entendido: vidrio roto y un ventilador que no sirve.",
          pronunciation: "gat it: BROU-ken glas and a fan dats not UER-king",
          literal: "Entendido: vidrio roto y un ventilador que no está funcionando.",
          why: "Broken glass y not working fan separan las dos categorías. Esa diferencia ayuda a pedir la reparación correcta."
        }
      ],
      vocabulary: [
        {
          term: "break",
          explanation:
            "Romper o romperse cuando hay ruptura física real: vidrio, tela, hueso, plato o una pieza que se parte.",
          literal: "romper",
          useWhen:
            "Algo se quiebra, rasga, parte o queda visiblemente dañado.",
          avoidWhen:
            "Un aparato sólo dejó de funcionar. Entonces stopped working o isn't working suele ser más preciso.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["break down", "damage", "crack", "tear"],
          example: { target: "A window pane broke.", translation: "Se rompió un vidrio de la ventana." }
        },
        {
          term: "it broke",
          explanation:
            "Se rompió. Reporta que algo se quebró o dejó de estar entero.",
          literal: "se rompió",
          useWhen:
            "La ruptura física es el punto central y no necesita una explicación larga.",
          avoidWhen:
            "Quiere suavizar la culpa como se me rompió. En inglés puede agregar on me, pero muchas veces basta explicar el accidente.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["it cracked", "it snapped", "it shattered", "it broke on me"],
          example: { target: "It broke in the wind.", translation: "Se rompió con el viento." }
        },
        {
          term: "broken",
          explanation:
            "Roto. Participio y adjetivo para describir el resultado.",
          literal: "roto",
          useWhen:
            "Describe vidrio, platos, huesos, cierres o piezas dañadas físicamente.",
          avoidWhen:
            "Sólo quiere decir que una máquina no funciona. Broken se entiende, pero not working puede ser más exacto.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["cracked", "torn", "damaged", "not working"],
          example: { target: "The glass is broken.", translation: "El vidrio está roto." }
        },
        {
          term: "in two pieces",
          explanation:
            "En dos pedazos. Detalle concreto que confirma una ruptura visible.",
          literal: "en dos piezas",
          useWhen:
            "Quiere explicar cómo quedó vidrio, plástico, madera o cerámica después de romperse.",
          avoidWhen:
            "Nada está partido. Entonces la frase exagera el daño.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["split", "cracked", "shattered", "snapped"],
          example: { target: "It's broken in two pieces.", translation: "Está roto en dos pedazos." }
        },
        {
          term: "stopped working",
          explanation:
            "Dejó de funcionar o se dañó. Muy útil para aparatos sin daño físico visible.",
          literal: "dejó de trabajar",
          useWhen:
            "Un teléfono, ventilador, cargador, nevera o máquina falla y el problema es funcional.",
          avoidWhen:
            "El objeto está claramente quebrado en partes. Ahí broken o cracked puede ser más directo.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["isn't working", "broke down", "malfunctioned", "won't turn on"],
          example: { target: "The fan stopped working.", translation: "El ventilador se dañó." }
        },
        {
          term: "not working",
          explanation:
            "No funciona o no sirve. Describe el resultado práctico sin afirmar ruptura física.",
          literal: "no trabajando",
          useWhen:
            "Lo importante es que el objeto no cumple su función.",
          avoidWhen:
            "Un reporte necesita describir daño visible para seguro, inventario o seguridad.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["doesn't work", "out of order", "faulty", "broken"],
          example: { target: "The fan is not working.", translation: "El ventilador no sirve." }
        },
        {
          term: "window pane",
          explanation:
            "Vidrio o panel de una ventana. Más preciso que sólo glass en una recepción.",
          literal: "panel de ventana",
          useWhen:
            "Reporta un vidrio de ventana roto, suelto o rajado.",
          avoidWhen:
            "Habla de un vaso. A glass es un vaso; a window pane es parte de la ventana.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["glass", "frame", "window", "pane"],
          example: { target: "A window pane broke.", translation: "Se rompió un vidrio de la ventana." }
        }
      ],
      note:
        "Break y broken sirven muy bien para vidrio, huesos, tela o piezas partidas. Para aparatos, el inglés cotidiano permite broken, pero stopped working o not working suele ser más preciso si no hay daño visible. Esa distinción se parece a la colombiana entre se rompió y se dañó. Si quiere suavizar culpa, it broke on me existe, pero muchas veces una explicación clara del accidente basta.",
      culture: [
        {
          label: "Broken no siempre es la mejor palabra",
          body:
            "En recepción o mantenimiento, broken glass y fan not working activan respuestas distintas. Broken glass puede implicar limpieza segura y reemplazo. Not working pide revisar motor, electricidad o botón. La precisión evita que alguien llegue con la herramienta equivocada."
        },
        {
          label: "On me suaviza, pero no borra responsabilidad",
          body:
            "It broke on me se parece a se me rompió, aunque se usa menos que la forma española. Sirve para un accidente que ocurrió mientras usted manipulaba algo. Si la culpa importa, el inglés suele añadir contexto: in the wind, when I opened it, by accident."
        },
        {
          label: "Storm language is practical",
          body:
            "En una ciudad de tormentas, reportar daños en inglés no requiere dramatismo. A window pane broke, the frame came loose, the fan stopped working: frases simples que separan ruptura, pieza suelta y falla de aparato."
        }
      ],
      pitfalls: [
        {
          mistake: "“The fan is broken in two pieces.”",
          whyItFails:
            "Si el ventilador prende pero no gira, no está en dos pedazos. La frase inventa daño físico que no se reportó.",
          sayInstead: "The fan stopped working."
        },
        {
          mistake: "“The glass is breaked.”",
          whyItFails:
            "El participio de break es broken. Breaked no es la forma estándar para decir roto.",
          sayInstead: "The glass is broken."
        },
        {
          mistake: "“A glass broke” cuando habla de una ventana",
          whyItFails:
            "A glass suele ser un vaso. Para el vidrio de una ventana, window pane evita la confusión.",
          sayInstead: "A window pane broke."
        }
      ],
      variations: [
        {
          form: "A window pane broke.",
          register: "cuidadoso práctico",
          region: "Inglés universal",
          whenToUse: "Un vidrio de ventana realmente se rompió y necesita reportarlo con precisión."
        },
        {
          form: "The fan stopped working.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un aparato dejó de funcionar sin daño físico visible."
        },
        {
          form: "It's broken in two pieces.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Debe describir una ruptura física visible y el resultado importa."
        },
        {
          form: "We had the pane replaced, and the frame was repaired at the same time.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Para reportar un arreglo que usted encargó. Note que el inglés no nombra al que hizo el trabajo, igual que el español con la pasiva."
        }
      ],
      prompt: "Alex says “a window pane broke” but “the fan stopped working.” ¿Qué contraste marca?",
      choices: [
        "El vidrio se rompió físicamente; el ventilador falló.",
        "El ventilador fue creado y el vidrio fue construido.",
        "Ambos objetos sólo necesitan una limpieza rápida."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál reporte suena mejor para un teléfono que dejó de funcionar?",
          choices: [
            "My phone got built.",
            "My phone stopped working.",
            "My phone is breaked."
          ],
          answer: 1,
          tests: "stopped working para aparato que falla"
        },
        {
          prompt: "¿Cuál frase usa bien el participio de break?",
          choices: [
            "The glass is breaked.",
            "The glass is constructed.",
            "The glass is broken."
          ],
          answer: 2,
          tests: "broken como participio irregular"
        },
        {
          prompt: "¿Qué puede agregar “on me” en “it broke on me”?",
          choices: [
            "Presenta la ruptura como accidental.",
            "Dice que el objeto fue creado nuevo.",
            "Significa que todavía funciona perfecto."
          ],
          answer: 0,
          tests: "on me como equivalente parcial de se me"
        },
        {
          prompt: "¿Cuál objeto encaja mejor con break sin más explicación?",
          choices: [
            "A fan that still turns on.",
            "A pane in two pieces.",
            "A phone that needs charge."
          ],
          answer: 1,
          tests: "break para ruptura física visible"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/37-developing-making-and-breaking.js");
